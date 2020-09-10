/* Copyright 2020 VMware, Inc.
 * SPDX-License-Identifier: MIT */

import { createSlice } from './create-slice';

describe('slice.getActionType', () => {
  const initialState = { value: 10 };
  const name = '$test';

  it('getActionType with default format', () => {
    const slice = createSlice({ initialState, name });

    const type = slice.getActionType('loadFoo');
    expect(type).toEqual('loadFoo_$test');
  });

  it('getActionType with RTK format', () => {
    const actionTypeFormat = 'RTK';
    const slice = createSlice({ actionTypeFormat, initialState, name });

    const type = slice.getActionType('loadFoo');
    expect(type).toEqual('$test/loadFoo');
  });
});

describe('slice.createAction', () => {
  const initialState = { value: 10 };
  const name = '$test';

  it('createAction', () => {
    const slice = createSlice({ initialState, name });
    const loadFooAction = slice.createAction('loadFoo');
    expect(loadFooAction.type).toEqual('loadFoo_$test');
  });

  it('createAction with prepare method', () => {
    const slice = createSlice({ initialState, name });
    const actionCreator = slice.createAction('A_TYPE', (a: number) => ({
      payload: a * 2,
    }));
    expect(actionCreator(5).payload).toBe(10);
  });
});
