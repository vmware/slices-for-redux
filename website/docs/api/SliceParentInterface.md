---
id: SliceParent
title: SliceParent Interface
sidebar_label: SliceParent Interface
hide_title: true
---

# `SliceParent Interface`

The `SliceParent` is the interface that describes the _parent_ property in the options argument of [`createSlice`](/slices-for-redux/docs/api/createSlice) and [`createSliceGroup`](/slices-for-redux/docs/api/createSliceGroup).

```ts
interface SliceParent {
  addReducers: AddReducers;
  path: string;
}
```

### `addReducers`

A function that the [`Slice`](/slices-for-redux/docs/api/Slice) or [`SliceGroup`](/slices-for-redux/docs/api/SliceGroup) can use to add its _reducer_ to the parent's reducer.

### `path`

A string expressing the location of the parent inside the store state object.
