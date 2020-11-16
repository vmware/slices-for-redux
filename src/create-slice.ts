/* Copyright 2020 VMware, Inc.
 * SPDX-License-Identifier: MIT */

import {
  // Use the immer version used by @reduxjs/toolkit
  createNextState,
  Draft,
  createAction as rtkCreateAction,
  CaseReducer,
  CaseReducerActions,
  CaseReducerWithPrepare,
  PayloadAction,
  PayloadActionCreator,
  PrepareAction,
  Reducer,
} from '@reduxjs/toolkit';
import { rootSliceGroup, AddReducers } from './root-slice-group';
import { normalizePath, namesFromPath } from './path.utils';
import { PATH_SEPARATOR } from './constants';
import { CreateSliceOptions, Selector, Selectors } from './create-slice.types';

let noImmerWarned = false;

type CaseReducerDefinition<State, Action extends PayloadAction> =
  | CaseReducer<State, Action>
  | CaseReducerWithPrepare<State, Action>;

export function createSlice<State>(
  createSliceOptions: CreateSliceOptions<State>
) {
  const {
    actionTypeFormat: actionTypeFormatParam = defaultActionTypeFormat,
    initialState,
    name,
    parent = rootSliceGroup,
    immer = true,
  } = createSliceOptions;

  const actionTypeFormat =
    actionTypeFormatParam === 'RTK'
      ? rtkActionTypeFormat
      : actionTypeFormatParam;

  if (initialState === undefined) {
    throw new Error('initialState is required in createSliceOptions.');
  }
  if (!name) {
    throw new Error('name is required in createSliceOptions.');
  }

  let parentAddReducers: null | AddReducers = null;
  let parentPath = PATH_SEPARATOR;

  if (typeof parent === 'string') {
    parentAddReducers = null;
    parentPath = normalizePath(parent);
  } else {
    parentAddReducers = parent.addReducers;
    parentPath = parent.path;
  }

  const names = namesFromPath(parentPath);
  names.push(name);

  if (!immer && !noImmerWarned) {
    noImmerWarned = true;
    if ('production' !== process.env.NODE_ENV) {
      console.warn(
        "[slices-for-redux] 'immer' is false for one or more Slice(s)"
      );
    }
  }

  /**
   * generates a unique action type given the actionKey
   * @param actionKey
   */
  function getActionType(actionKey: string): string {
    return actionTypeFormat(actionKey, names);
  }

  /**
   * A utility function to create an action creator for the given action key
   * string. The action creator accepts a single argument, which will be included
   * in the action object as a field called payload. The action creator function
   * will also have its toString() overridden so that it returns the action type,
   * allowing it to be used in reducer logic that is looking for that action type.
   *
   * @param actionKey The action key used to generate the action type to use for created actions.
   * @param prepare (optional) a method that takes any number of arguments and returns { payload } or { payload, meta }.
   *                If this is given, the resulting action creator will pass it's arguments to this method to calculate payload & meta.
   */

  function createAction<P = void, T extends string = string>(
    actionKey: T
  ): PayloadActionCreator<P, T>;

  function createAction<
    PA extends PrepareAction<any>,
    T extends string = string
  >(
    actionKey: T,
    prepareAction: PA
  ): PayloadActionCreator<ReturnType<PA>['payload'], T, PA>;

  function createAction(actionKey: string, prepareAction?: PrepareAction<any>) {
    const type = getActionType(actionKey);
    if (prepareAction) {
      return rtkCreateAction(type, prepareAction);
    }
    return rtkCreateAction(type);
  }

  let sliceCaseReducersByType: Record<string, CaseReducer<State, any>> = {};

  /**
   * Given an object with keys reducerName string and values CaseReducer function
   * returns an object with same keys anv values PayloadActionCreator
   */
  function addCaseReducers<
    CRS extends { [k: string]: CaseReducerDefinition<State, any> }
  >(
    // Object with keys reducerName string and
    // values CaseReducer function or object with reducer and prepare function
    caseReducers: CRS
  ): CaseReducerActions<CRS> {
    const actionCreators: Record<string, PayloadActionCreator> = {};

    Object.keys(caseReducers).forEach((reducerName: string) => {
      const type = getActionType(reducerName);
      const maybeReducerWithPrepare = caseReducers[reducerName];
      let caseReducer: CaseReducer<State, any>;
      let prepareCallback: PrepareAction<any> | undefined;

      if (typeof maybeReducerWithPrepare === 'function') {
        caseReducer = maybeReducerWithPrepare;
      } else {
        // @ts-ignore
        caseReducer = maybeReducerWithPrepare.reducer;
        // @ts-ignore
        prepareCallback = maybeReducerWithPrepare.prepare;
      }

      sliceCaseReducersByType[type] = caseReducer;
      // @ts-ignore
      actionCreators[reducerName] = prepareCallback
        ? rtkCreateAction(type, prepareCallback)
        : rtkCreateAction(type);
    });
    return actionCreators as CaseReducerActions<CRS>;
  }

  function addExtraReducers(extraReducers: any): void {
    sliceCaseReducersByType = {
      ...sliceCaseReducersByType,
      ...extraReducers,
    };
  }

  /**
   * The Slice's reducer function.
   *
   * If an caseReducer for the given ACTION_TYPE was added to the Slice it will be used,
   * otherwise the current slice's State object will be returned.
   *
   * @param {Object} [sliceState] the current slice's State object
   * @param {Object} action Action to be reduced
   *
   * @returns {Object} New slice's State object or [sliceState] argument
   */
  function reducer(
    sliceState: State = initialState,
    action: PayloadAction<any>
  ): State {
    const caseReducer = sliceCaseReducersByType[action.type];
    if (immer) {
      return createNextState(sliceState, (draft: Draft<State>) => {
        return caseReducer ? caseReducer(draft, action) : undefined;
      }) as State;
    }
    if (caseReducer) {
      return (caseReducer as Reducer)(sliceState, action);
    }
    return sliceState;
  }

  // self-add this Slice's reducer to the parent reducer
  if (parentAddReducers) {
    // @ts-ignore
    parentAddReducers({ [name]: reducer });
  }

  /**
   * Selector function that selects the Slice's State from the
   * overall store's State.
   *
   * @param {Object} storeState Redux store's State object
   *
   * @returns {Object} Slice's State object
   */
  function selector(storeState: any): State {
    const sliceState = names.reduce((parentState, n) => {
      return parentState ? parentState[n] : undefined;
    }, storeState);
    return sliceState === undefined ? initialState : sliceState;
  }

  // Do not use JSDoc here because it brakes TS tooltip?!
  // /**
  //  * An object with keys field names in the initialState object,
  //  * and values Selector functions that select the field value.
  //  */
  function createSelectors(initialState: State): Selectors<State> {
    const fieldSelectors: Record<string, Selector> = {};
    if (initialState && typeof initialState === 'object') {
      Object.keys(initialState).forEach((fieldName: string) => {
        const fieldSelector = (rootState: any) => {
          const state: State = selector(rootState);
          // @ts-ignore
          return state[fieldName];
        };
        // We liked to have selector names suffixed with 'Selector'
        // but it cannot be defined yet in TypeScript !
        // https://github.com/microsoft/TypeScript/issues/12754
        // fieldSelectors[`${fieldName}Selector`] = fieldSelector;
        fieldSelectors[fieldName] = fieldSelector;
      });
    }
    return fieldSelectors as Selectors<State>;
  }

  const selectors: Selectors<State> = createSelectors(initialState);

  return {
    addCaseReducers,
    addExtraReducers,
    createAction,
    getActionType,
    name,
    parentPath,
    reducer,
    selector,
    selectors,
  };
}

function defaultActionTypeFormat(actionKey: string, names: string[]): string {
  return `${actionKey}_${[...names].reverse().join('_')}`;
}

function rtkActionTypeFormat(actionKey: string, names: string[]): string {
  return `${names.join('/')}/${actionKey}`;
}
