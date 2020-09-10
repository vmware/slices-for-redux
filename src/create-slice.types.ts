/* Copyright 2020 VMware, Inc.
 * SPDX-License-Identifier: MIT */

import { SliceParent } from './root-slice-group';

/**
 * Function that formats action types based on the actionKey and Slice names.
 */
type ActionTypeFormatFunc = (actionKey: string, names: string[]) => string;

/**
 * Function that selects a value from state
 */
export type Selector<Value = any> = (state: any) => Value;

/**
 * Object with keys field names string and values Selector functions
 */
export type Selectors<O = any> = { [P in keyof O]: Selector<O[P]> };

/**
 * Options for `createSlice()`.
 */
export type CreateSliceOptions<State = any> = {
  /**
   * Optional - Defines how an action type is generated given the action key
   * and the slice name.
   * Default is:
   *   `${actionKey}_${[...names].reverse().join('_')}`
   * With value 'RTK' it will use the Redux Toolkit convention:
   *   `${names.join('/')}/${actionKey}`
   * Otherwise the value must be a function with this signature:
   * (actionKey: string, names: string[]) => string
   */
  actionTypeFormat?: 'RTK' | ActionTypeFormatFunc;

  /**
   * Optional - The Slice's reducer uses, or not uses 'immer'.
   * Default value: true
   * When migrating code to use Slices for Redux you may find
   * some impure code that mutates state objects.
   * 'immer' false is a temporary fix to ignore those issue until
   * one can be fixed.
   * A console warning is generated when set to false.
   */
  immer?: boolean;

  /**
   * The initial state returned by the Slice's reducer and selector
   * when Slice's state is undefined.
   */
  initialState: State;

  /**
   * The Slice's name.
   */
  name: string;

  /**
   * Optional - The Slice's parent.
   * Default value is: rootSliceGroup
   * With the default value the Slice's reducer will be added
   * to the rootReducer.
   * When the value is a SliceParent, the Slice's reducer will be added
   * to that parent reducer.
   * When the value is a string, it represents the parent path,
   * the Slice's reducer needs to be manually added to the parent reducer.
   */
  parent?: SliceParent | string;
};
