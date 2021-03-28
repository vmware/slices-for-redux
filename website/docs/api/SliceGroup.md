---
id: SliceGroup
title: SliceGroup
sidebar_label: SliceGroup
hide_title: true
---

# `SliceGroup`

A `SliceGroup` allows grouping several Slices under a given name.
A `SliceGroup` is similar in concept to a Folder, where the Slices are the files.
Instead of having all the Slices created directly under the root, one can group
Slices by some arbitrary chosen group names.

This can make it easier to navigate in the <a href="https://redux-toolkit.js.org/api/configurestore" target="_blank">Redux Dev Tools</a>, a large redux state object with 30+ Slices.
SliceGroups like folders can be nested.
Avoid deep nesting since it may have the opposite effect, making it difficult to find the slices in the store state object.

A `SliceGroup` is an object that looks like:

```ts
{
    addReducers: AddReducers,
    path: string,
    reducer: Reducer,
}
```

## Properties

### `addReducers`

A function that children Slices or SliceGroups use to add their reducer to
this SliceGroup's _reducer_.

### `path`

A string expressing the location of this `SliceGroup`.

### _reducer_

The `SliceGroup`'s reducer.  
It is a "mutable combine reducer".  
Use the `SliceGroup`'s _addReducers_ function to add reducers to it.

## Note

A `SliceGroup` is a [`SliceParent`](/slices-for-redux/docs/api/SliceParent) that exposes its reducer.
