---
id: rootSliceGroup
title: rootSliceGroup
sidebar_label: rootSliceGroup
hide_title: true
---

# `rootSliceGroup`

The `rootSliceGroup` is the default `parent` unless a different `parent` is given when creating a [`Slice`](/slices-for-redux/docs/api/Slice) or [`SliceGroup`](/slices-for-redux/docs/api/SliceGroup).

The `rootSliceGroup`'s `reducer` is the "root-reducer" that must be passed to createStore from Redux or to configureStore from Redux Toolkit.

Other reducers are added to this `reducer` (the "root-reducer") using the `addReducers` function of the `rootSliceGroup`. But in most cases this will be done automatically when creating new `Slices` and `SliceGroups` with `createSlice` and `createSliceGroup`.

The `rootSliceGroup` is an object that looks like:

```ts
{
    addReducers: (reducers: Reducers) => void,
    path: '/',
    reducer: Reducer, // the "root-reducer"
}
```

## Properties

### `addReducers`

A function that adds one or more reducer to the "root-reducer".  
Accepts an object where the keys are names and the values are reducer functions.

### `path`

The `rootSliceGroup`'s path value is: '/'

### `reducer`

This is the "root-reducer".  
This `reducer` must be passed to <a href="https://redux.js.org/api/createstore" target="_blank">createStore</a>
from Redux or to <a href="https://redux-toolkit.js.org/api/configurestore" target="_blank">configureStore</a>
from Redux Toolkit. We recommend using <a href="https://redux-toolkit.js.org/api/configurestore" target="_blank">configureStore</a>
from Redux Toolkit.
This reducer is a "mutable combine reducer".  
Use the `rootSliceGroup`'s `addReducers` function to add reducers to it.

## Example

```ts
import { configureStore } from '@reduxjs/toolkit';
import { rootSliceGroup } from 'slices-for-redux';

// Add reducers before creating the store
rootSliceGroup.addReducers({
  slice1: reducer1,
});

const store = configureStore({
  reducer: rootSliceGroup.reducer,
});
```

```ts
// As needed add additional reducers after the store was created
// E.g. when a lazy loaded module is loaded.
rootSliceGroup.addReducers({
  slice2: reducer2,
});
```

## Other SliceGroups

The `rootSliceGroup` is the default top most group of Slices.

By default [`createSlice()`](/slices-for-redux/docs/api/createSlice) creates a [`Slice`](/slices-for-redux/docs/api/Slice) that manages a "slice of state" that exists directly under the root of the store state object.

With [`createSliceGroup()`](/slices-for-redux/docs/api/createSliceGroup) one can create other [`SliceGroup`](/slices-for-redux/docs/api/SliceGroup) which allow grouping Slices under a group name.
In that case a [`Slice`](/slices-for-redux/docs/api/Slice) will manage a "slice of state" that exists under that [`SliceGroup`](/slices-for-redux/docs/api/SliceGroup)'s name.

In the rare case (not recommended) where multiple Redux stores are used, one can still use the `rootSliceGroup` for one store, and then create another root [`SliceGroup`](/slices-for-redux/docs/api/SliceGroup) for each additional store with [`createSliceGroup({ name: '/' })`](/slices-for-redux/docs/api/createSliceGroup).
