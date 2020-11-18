/* Copyright 2020 VMware, Inc.
 * SPDX-License-Identifier: MIT */

import { createSlice } from './create-slice';
import { createSliceGroup } from './create-slice-group';

describe('slice.selector', () => {
  const initialState = { value: 10 };

  it('selector returns initialState', () => {
    const name = '$testS1';
    const slice = createSlice({ initialState, name });
    const sliceState = slice.selector(undefined);
    expect(sliceState).toBe(initialState);
  });

  it('selector walks ancestors', () => {
    const appScope = createSliceGroup({ name: 'app' });
    const name = '$testS2';
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

  it('selectors not created when initialState not an object', () => {
    const name = '$testS3';
    const slice = createSlice({ initialState: 4, name });
    expect(slice.selectors).toEqual({});
  });

  it('selectors are created', () => {
    const name = '$testS4';
    const slice = createSlice({ initialState, name });
    const valueSelector = slice.selectors.value;
    expect(valueSelector).toBeDefined();
    const storeState = {
      [name]: {
        value: 33,
      },
    };
    expect(valueSelector(storeState)).toBe(33);
  });
});
