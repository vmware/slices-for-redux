---
id: rootSliceGroup
title: rootSliceGroup
sidebar_label: rootSliceGroup
hide_title: true
---

# `rootSliceGroup`

The `rootSliceGroup` is the object that manages and exposes the root `reducer`.  
New reducers are added to the "root reducer" via the `addReducers` function property of the `rootSliceGroup`.  
The `rootSliceGroup` is the default `parent` used in [`createSlice()`](/slices-for-redux/docs/api/createSlice).  
Therefore a [`Slice`](/slices-for-redux/docs/api/Slice)'s reducer is added to the root `reducer` by default.

The `rootSliceGroup` is an object that looks like:

```ts
{
    addReducers: (reducers: Reducers) => void,
    path: '/',
    reducer: Reducer,
}
```

## Properties

### `addReducers`

A function that adds one or more reducer to the rootReducer.  
Accepts an object where the keys are names and the values are reducer functions.

### `path`

The `rootSliceGroup`'s path value is: '/'

### `reducer`

This is the "root reducer".  
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
// As needed add additional reducers later
rootSliceGroup.addReducers({
  slice2: reducer2,
});
```

## Other Slice Groups

The `rootSliceGroup` is the top most group of Slices.

By default [`createSlice()`](/slices-for-redux/docs/api/createSlice) creates a [`Slice`](/slices-for-redux/docs/api/Slice) that manages a "slice of state" that exists directly under the root of the store state object.

With [`createSliceGroup()`](/slices-for-redux/docs/api/createSliceGroup) one can create other [`SliceGroups`](/slices-for-redux/docs/api/SliceGroup) which allow grouping Slices under a group name.
In that case a [`Slice`](/slices-for-redux/docs/api/Slice) will manage a "slice of state" that exists under that [`SliceGroup`](/slices-for-redux/docs/api/SliceGroup)'s name.
