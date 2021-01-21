/* Copyright 2020-2021 VMware, Inc.
 * SPDX-License-Identifier: MIT */

import { PATH_SEPARATOR } from './constants';
import {
  rootSliceGroup,
  AddReducers,
  SliceGroup,
  SliceParent,
} from './root-slice-group';
import { createMutableCombineReducer } from './internal/mutable-combine-reducer';
import { normalizePath } from './path.utils';

type CreateSliceGroupOptions = {
  /**
   * The SliceGroup's name.
   */
  name: string;

  /**
   * Optional - The SliceGroup's parent.
   * Default value is: rootSliceGroup
   * With the default value the SliceGroup's reducer will be added
   * to the rootReducer.
   * When the value is a SliceParent, the SliceGroup's reducer will be added
   * to that parent reducer.
   * When the value is a string, it represents the parent path,
   * the SliceGroup's reducer needs to be manually added to the parent reducer.
   */
  parent?: SliceParent | string;
};

/**
 * Creates a SliceGroup
 *
 * SliceGroup is the parent of a Slice.
 * The rootSliceGroup is the top most SliceGroup.
 * In small Apps all Slices can be direct under the rootSliceGroup.
 * In larger Apps to better organize a big Redux store state group Slices
 * under separate Scopes. It is like a folder for Slice.
 * Useful when building a library. Use one SliceGroup to namespace the Slices
 * in the library.
 *
 * @param {CreateSliceGroupOptions} createSliceGroupOptions - The options for creating the SliceGroup
 * @return {SliceGroup}
 */
export function createSliceGroup(
  createSliceGroupOptions: CreateSliceGroupOptions
): SliceGroup {
  if (process.env.NODE_ENV !== 'production') {
    if (!createSliceGroupOptions || !createSliceGroupOptions.name) {
      throw new Error('name is required in createSliceGroupOptions.');
    }
  }

  const { name, parent = rootSliceGroup } = createSliceGroupOptions;

  if (name.indexOf(PATH_SEPARATOR) !== -1) {
    throw new Error(
      `SliceGroup '${name}' name cannot contain path separator '${PATH_SEPARATOR}'.`
    );
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

  const path = `${parentPath}${name}${PATH_SEPARATOR}`;

  const reducer = createMutableCombineReducer();

  // self-add this SliceGroup's reducer to the parent reducer
  if (parentAddReducers) {
    parentAddReducers({ [name]: reducer });
  }

  return {
    addReducers: reducer.__internal.addReducers,
    path,
    reducer,
  };
}
