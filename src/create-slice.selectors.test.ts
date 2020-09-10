/* Copyright 2020 VMware, Inc.
 * SPDX-License-Identifier: MIT */

import { createSlice } from './create-slice';
import { createSliceGroup } from './create-slice-group';

describe('slice.selector', () => {
  const initialState = { value: 10 };
  const name = '$test';

  it('selector returns initialState', () => {
    const slice = createSlice({ initialState, name });
    const sliceState = slice.selector(undefined);
    expect(sliceState).toBe(initialState);
  });

  it('selector walks ancestors', () => {
    const appScope = createSliceGroup({ name: 'app' });
    const slice = createSlice({ initialState, name, parent: appScope });
    const value = slice.selector({
      app: {
        [name]: { value: 44 },
      },
    });
    expect(value).toEqual({ value: 44 });
  });
});

describe('slice.selectors', () => {
  const initialState = { value: 10 };
  const name = '$test';

  it('selectors not created when initialState not an object', () => {
    const slice = createSlice({ initialState: 4, name });
    expect(slice.selectors).toEqual({});
  });

  it('selectors are created', () => {
    const slice = createSlice({ initialState, name });
    const valueSelector = slice.selectors.value;
    expect(valueSelector).toBeDefined();
    const storeState = {
      $test: {
        value: 33,
      },
    };
    expect(valueSelector(storeState)).toBe(33);
  });
});
