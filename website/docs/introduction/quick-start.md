---
id: quick-start
title: Quick Start
sidebar_label: Quick Start
hide_title: true
---

# Quick Start

## Purpose

The **Slices for Redux** package intent is to make it easy to write predictable Redux code that scales. It was created to:

- Reduce code wiring boilerplate
- Reduce code merge conflicts
- Promote more code to split
- Promote a predictable folder / files structure
- Promote reusable encapsulated Redux modules

**Slices for Redux** leverages the <a href="https://redux-toolkit.js.org" target="_blank">Redux Toolkit</a> and exposes a [`rootSliceGroup`](/slices-for-redux/docs/api/rootSliceGroup) object, a different
[`createSlice()`](/slices-for-redux/docs/api/createSlice) function and a [`createSliceGroup()`](/slices-for-redux/docs/api/createSliceGroup) function.

## What's Included

**Slices for Redux** includes:

- [`rootSliceGroup`](/slices-for-redux/docs/api/rootSliceGroup): Object that holds a "mutable combine reducer" allowing "slice reducers" to be added as their code is imported, removes code boilerplate and promotes code splitting.
- [`createSlice()`](/slices-for-redux/docs/api/createSlice): Function that creates a Slice with basic selectors and a mutable case reducer to promote writing sets of "case reducers" in separate files.
- [`createSliceGroup()`](/slices-for-redux/docs/api/createSliceGroup): Function that creates a SliceGroup to organize and ease the navigation of a large Redux State object.

## Installation

**Slices for Redux** is available as a package on NPM for use with a module bundler or in a Node application:

```bash
# NPM
npm install --save @vmw/slices-for-redux

# Yarn
yarn add @vmw/slices-for-redux
```

Note: [Redux Toolkit `@reduxjs/toolkit`](https://redux-toolkit.js.org/) is a required peer dependency

## Use the rootSliceGroup's reducer

Replace code like this:

```ts
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  [homeSlice.name]: homeSlice.reducer,
  [todoSlice.name]: todoSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});
```

With code like this:

```ts
import { rootSliceGroup } from 'slices-for-redux';
import { configureStore } from '@reduxjs/toolkit';

const { reducer } = rootSliceGroup.addReducers({
  [homeSlice.name]: homeSlice.reducer,
  [todoSlice.name]: todoSlice.reducer,
});

const store = configureStore({
  reducer,
});
```
