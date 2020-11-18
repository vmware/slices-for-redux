/* Copyright 2020 VMware, Inc.
 * SPDX-License-Identifier: MIT */

import { PayloadAction, createAction } from '@reduxjs/toolkit';
import { createSlice } from './create-slice';
import { rootSliceGroup } from './root-slice-group';

describe('createSlice', () => {
  const initialState = { value: 10 };
  const type = 'testType';

  it('initialState is required', () => {
    const name = '$test1';
    // @ts-ignore
    expect(() => createSlice({ name })).toThrow(
      'initialState is required in createSliceOptions.'
    );
  });

  it('name is required', () => {
    // @ts-ignore
    expect(() => createSlice({ initialState })).toThrow(
      'name is required in createSliceOptions.'
    );
  });

  it('Slice name may contain path separators', () => {
    const slice = createSlice({ initialState, name: 'a/b' });
    expect(slice).toBeDefined();
  });

  it('reducer returns initialState', () => {
    const name = '$test2';
    const slice = createSlice({ initialState, name });
    const state = slice.reducer(undefined, { payload: undefined, type });
    expect(state).toBe(initialState);
  });

  it('addCaseReducers with no payload', () => {
    const name = '$test3';
    const slice = createSlice({ initialState, name });
    const actions = slice.addCaseReducers({
      double(state: any) {
        return {
          ...state,
          value: state.value * 2,
        };
      },
    });
    let sliceState = slice.reducer(initialState, {
      payload: undefined,
      type: 'dummy',
    });
    expect(sliceState).toEqual(initialState);

    sliceState = slice.reducer(initialState, actions.double());
    expect(sliceState).toEqual({ value: 20 });
  });

  it('addCaseReducers with payload', () => {
    const name = '$test4';
    const slice = createSlice({ initialState, name });
    const actions = slice.addCaseReducers({
      // add(state: any, action: { payload: number }) {
      add(state: any, action: PayloadAction<number>) {
        state.value += action.payload;
      },
    });
    const sliceState = slice.reducer(initialState, actions.add(2));
    expect(sliceState).toEqual({ value: 12 });
  });

  it('addCaseReducers with payload no immer', () => {
    const name = '$test5';
    const slice = createSlice({ immer: false, initialState, name });
    const actions = slice.addCaseReducers({
      // add(state: any, action: { payload: number }) {
      add(state: any, action: PayloadAction<number>) {
        return {
          ...state,
          value: state.value + action.payload,
        };
      },
    });
    let sliceState = slice.reducer(initialState, actions.add(2));
    expect(sliceState).toEqual({ value: 12 });

    sliceState = slice.reducer(sliceState, {
      payload: undefined,
      type: 'dummy',
    });
    expect(sliceState).toEqual({ value: 12 });
  });

  it('addExtraReducers', () => {
    const name = '$test6';
    const slice = createSlice({ initialState, name });
    const type = 'addType';
    const addAction = createAction<number>(type);
    slice.addExtraReducers({
      [type]: (state: any, action: PayloadAction<number>) => {
        return {
          ...state,
          value: state.value + action.payload,
        };
      },
    });
    const sliceState = slice.reducer(initialState, addAction(3));
    expect(sliceState).toEqual({ value: 13 });
  });

  it('will not self-adds when parent is a string', () => {
    jest.spyOn(rootSliceGroup, 'addReducers');
    const name = '$test7';
    createSlice({ initialState, name, parent: '/' });
    expect(rootSliceGroup.addReducers).not.toHaveBeenCalled();
  });

  it('self-adds to the rootSliceGroup', () => {
    jest.spyOn(rootSliceGroup, 'addReducers');
    const name = '$test8';
    const slice = createSlice({ initialState, name });
    expect(rootSliceGroup.addReducers).toHaveBeenCalledWith({
      [slice.name]: slice.reducer,
    });
  });

  it('addCaseReducers action type format is correct', () => {
    const name = '$test9';
    const slice = createSlice({ initialState, name });
    const actions = slice.addCaseReducers({
      double(state: any) {
        return {
          ...state,
          value: state.value * 2,
        };
      },
    });
    expect(actions.double.toString()).toEqual(`double_${name}`);
  });

  it('addCaseReducers action type uses RTK format', () => {
    const name = '$test10';
    const slice = createSlice({
      actionTypeFormat: 'RTK',
      immer: false,
      initialState,
      name,
    });
    const actions = slice.addCaseReducers({
      double(state: any) {
        return {
          ...state,
          value: state.value * 2,
        };
      },
    });
    expect(actions.double.toString()).toEqual(`${name}/double`);
  });

  let nextCount = 0;

  it('addCaseReducers with prepare', () => {
    const name = '$test11';
    const slice = createSlice({
      initialState,
      name,
    });
    const actions = slice.addCaseReducers({
      testAction: {
        prepare(text: string) {
          return { payload: { count: ++nextCount, text } };
        },
        reducer: (
          state: any,
          action: { payload: { count: number; text: string } }
        ) => {
          state.value += action.payload.count;
        },
      },
    });
    const state = slice.reducer(initialState, actions.testAction('dummy'));
    expect(state.value).toEqual(11);
  });
});
