/* Copyright 2020 VMware, Inc.
 * SPDX-License-Identifier: MIT */

import { Reducer, AnyAction } from '@reduxjs/toolkit';

type Reducers = { [reducerName: string]: Reducer };

export interface MutableCombineReducer extends Reducer {
  __internal: {
    addReducers: (reducers: Reducers) => void;
    removeReducers: (reducerNames: string[]) => void;
  };
}
/**
 * Creates a reducer similar to 'combineReducers' from Redux with the
 * additional capability to add and remove reducers after it is created.
 * @param initialReducers An object with keys slice names and values reducer function.
 */
export function createMutableCombineReducer(
  initialReducers?: Reducers
): MutableCombineReducer {
  let childReducers: Reducers = { ...initialReducers };

  /**
   * Keeping reducers sorted by slice name keeps the redux state object
   * sorted for ease of navigation within the Redux DevTools extension.
   */
  function sortReducers(reducers: Reducers): Reducers {
    const sortedNames = Object.keys(reducers).sort();
    return sortedNames.reduce((result: Reducers, name: string) => {
      result[name] = reducers[name];
      return result;
    }, {});
  }

  /**
   * Adds one or more reducers to the combine reducer
   *
   * @param reducers An object with keys slice name and values reducer function.
   */
  function addReducers(reducers: Reducers): void {
    childReducers = sortReducers({
      ...childReducers,
      ...reducers,
    });
  }

  /**
   * Removes one or more reducers from the combine reducer.
   * @param reducerNames names of reducers to be removed.
   */
  function removeReducers(reducerNames: string[]): void {
    const reducers: Reducers = {};
    const names = Object.keys(childReducers);
    names.forEach((name) => {
      if (!reducerNames.includes(name)) {
        reducers[name] = childReducers[name];
      }
    });
    childReducers = reducers;
  }

  const initialState = {};

  function combineReducer(state: any = initialState, action: AnyAction): any {
    let hasChanges = false;
    const newState: { [key: string]: any } = { ...state };

    const childNames = Object.keys(childReducers);
    childNames.forEach((childName: string) => {
      const childReducer = childReducers[childName];
      const childState = state[childName];
      if (childReducer) {
        const newChildState = childReducer(childState, action);
        if (newChildState !== childState) {
          hasChanges = true;
        }
        newState[childName] = newChildState;
      }
    });

    return hasChanges ? newState : state;
  }

  return Object.assign(combineReducer, {
    __internal: {
      addReducers,
      removeReducers,
    },
  });
}
