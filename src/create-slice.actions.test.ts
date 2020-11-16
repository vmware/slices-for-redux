/* Copyright 2020 VMware, Inc.
 * SPDX-License-Identifier: MIT */

import { createSlice } from './create-slice';

describe('slice.getActionType', () => {
  const initialState = { value: 10 };

  it('getActionType with default format', () => {
    const name = '$testA1';
    const slice = createSlice({ initialState, name });

    const type = slice.getActionType('loadFoo');
    expect(type).toEqual('loadFoo_$testA1');
  });

  it('getActionType with RTK format', () => {
    const name = '$testA2';
    const actionTypeFormat = 'RTK';
    const slice = createSlice({ actionTypeFormat, initialState, name });

    const type = slice.getActionType('loadFoo');
    expect(type).toEqual('$testA2/loadFoo');
  });
});

describe('slice.createAction', () => {
  const initialState = { value: 10 };

  it('createAction', () => {
    const name = '$testA3';
    const slice = createSlice({ initialState, name });
    const loadFooAction = slice.createAction('loadFoo');
    expect(loadFooAction.type).toEqual('loadFoo_$testA3');
  });

  it('createAction with prepare method', () => {
    const name = '$testA4';
    const slice = createSlice({ initialState, name });
    const actionCreator = slice.createAction('A_TYPE', (a: number) => ({
      payload: a * 2,
    }));
    expect(actionCreator(5).payload).toBe(10);
  });
});
