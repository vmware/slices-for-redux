/* Copyright 2020-2021 VMware, Inc.
 * SPDX-License-Identifier: MIT */

import { Reducer } from '@reduxjs/toolkit';
import { PATH_SEPARATOR } from './constants';
import { createMutableCombineReducer } from './internal/mutable-combine-reducer';
import { normalizePath } from './path.utils';

/**
 * An object with keys reducer name (slice of state name) and values reducer function.
 */
export type Reducers = { [reducerName: string]: Reducer };

/**
 * A function that takes Reducers
 */
export type AddReducers = (reducers: Reducers) => void;

/**
 * The interface implement by the parent of a Slice or SliceGroup.
 */
export interface SliceParent {
  addReducers: AddReducers;
  path: string;
}

/**
 * SliceGroup is a SliceParent that exposes its reducer.
 */
export type SliceGroup = SliceParent & {
  reducer: Reducer;
};

type CreateSliceGroupOptions = {
  /**
   * The SliceGroup's name or '/' to create a root SliceGroup.
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

  const { name } = createSliceGroupOptions;
  const isRoot = name === PATH_SEPARATOR;

  if (!isRoot && name.indexOf(PATH_SEPARATOR) !== -1) {
    throw new Error(
      `SliceGroup '${name}' name cannot contain path separator '${PATH_SEPARATOR}'.`
    );
  }

  const reducer = createMutableCombineReducer();

  let path;
  if (isRoot) {
    path = PATH_SEPARATOR;
  } else {
    const { parent = rootSliceGroup } = createSliceGroupOptions;

    let parentPath;
    if (typeof parent === 'string') {
      parentPath = normalizePath(parent);
    } else {
      parentPath = parent.path;
      // self-add this SliceGroup's reducer to the parent reducer
      parent.addReducers({ [name]: reducer });
    }

    path = `${parentPath}${name}${PATH_SEPARATOR}`;
  }

  return {
    addReducers: reducer.__internal.addReducers,
    path,
    reducer,
  };
}

/**
 * The rootSliceGroup is the default root SliceGroup.
 * By default the rootSliceGroup will be the parent of all Slices and SliceGroups unless
 * a different parent is given when creating a Slice or SliceGroup.
 * The rootSliceGroup holds the rootReducer which must be passed to Redux createStore.
 * The rootReducer is accessible via the reducer property of the rootSliceGroup.
 * Use addReducers function of the rootSliceGroup to add third parties libraries reducers to the rootReducer.
 *
 * In the rare case (not recommended) where multiple Redux stores are used, create a
 * root SliceGroup for each store with `createSliceGroup({ name: '/' })`.
 */
export const rootSliceGroup: SliceGroup = createSliceGroup({
  name: PATH_SEPARATOR,
});
