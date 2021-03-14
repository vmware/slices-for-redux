/* Copyright 2020-2021 VMware, Inc.
 * SPDX-License-Identifier: MIT */

import {
  createMutableCombineReducer,
  MutableCombineReducer,
} from './mutable-combine-reducer';

let mutableReducer: MutableCombineReducer;

describe('createMutableCombineReducer', () => {
  const reducerName = '$testM1'; // the slice name
  const preloadedState = {
    otherSlice: 'someState',
    [reducerName]: 10,
  };
  const type = 'A_TEST';
  const payload = 20;

  beforeEach(() => {
    mutableReducer = createMutableCombineReducer();
  });

  it('returns the preloadedState', () => {
    const state = mutableReducer(preloadedState, { type });
    expect(state).toBe(preloadedState);
  });

  it('addReducers', () => {
    const initialState = 20;
    const reducerFunc = (state: any = initialState, action: any) => {
      return action.type === type ? state + action.payload : state;
    };
    mutableReducer.__internal.addReducers({ [reducerName]: reducerFunc });

    // returns initialState
    let state = mutableReducer(undefined, { type: 'OTHER_TYPE' });
    expect(state[reducerName]).toEqual(initialState);

    // returns preloadedState
    state = mutableReducer(preloadedState, { type: 'OTHER_TYPE' });
    expect(state[reducerName]).toEqual(preloadedState[reducerName]);
    expect(state.otherSlice).toEqual('someState');

    state = mutableReducer(undefined, { payload, type });
    expect(state[reducerName]).toEqual(initialState + payload);
    expect(state.otherSlice).toBeUndefined();
  });

  it('removeReducers', () => {
    const initialState = 20;
    const reducerFunc = (state: any = initialState, action: any) => {
      return action.type === type ? state + action.payload : state;
    };
    mutableReducer.__internal.addReducers({
      noopReducer: (state) => state,
      // @ts-expect-error: Test with a null value
      nullReducer: null,
      [reducerName]: reducerFunc,
    });

    let state = mutableReducer(undefined, { payload, type });
    expect(state[reducerName]).toBe(40);
    expect(state.otherSlice).toBeUndefined();

    state = mutableReducer(preloadedState, { payload, type });
    expect(state[reducerName]).toBe(30);
    expect(state.otherSlice).toBe('someState');

    mutableReducer.__internal.removeReducers([reducerName]);

    state = mutableReducer(preloadedState, { payload, type });
    expect(state).toEqual(preloadedState);
  });
});
