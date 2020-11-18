/* Copyright 2020 VMware, Inc.
 * SPDX-License-Identifier: MIT */

import { Reducer } from '@reduxjs/toolkit';
import { PATH_SEPARATOR } from './constants';
import { createMutableCombineReducer } from './internal/mutable-combine-reducer';

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

// Create the rootReducer
const reducer = createMutableCombineReducer();

/**
 * rootSliceGroup is the top most SliceGroup.
 * rootSliceGroup creates and maintains the rootReducer which must be passed to Redux createStore.
 * The rootReducer is accessible via the reducer property of the rootSliceGroup.
 * Use addReducers function of the rootSliceGroup to add third parties libraries reducers to the rootReducer.
 */
export const rootSliceGroup: SliceGroup = {
  addReducers: reducer.__internal.addReducers,
  path: PATH_SEPARATOR,
  reducer,
};
