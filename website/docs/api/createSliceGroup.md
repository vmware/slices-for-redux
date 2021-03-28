---
id: createSliceGroup
title: createSliceGroup
sidebar_label: createSliceGroup
hide_title: true
---

# `createSliceGroup`

A function that accepts a _name_ and optionally a _parent_ and creates a [`SliceGroup`](/slices-for-redux/docs/api/SliceGroup) object.
The default _parent_ is the [`rootSliceGroup`](/slices-for-redux/docs/api/rootSliceGroup).

SliceGroups are used to group Slices under some arbitrary named group.
This grouping of slices helps organize a large store and eases its navigation
in the <a href="https://redux-toolkit.js.org/api/configurestore" target="_blank">Redux Dev Tools</a>.

## Parameters

`createSliceGroup` accepts a single configuration object argument, with the following options:

```ts
function createSliceGroup({
  /**
   * The SliceGroup name.
   */
  name: string;

  /**
   * Optional - The SliceGroup's parent.
   */
  parent?: SliceParent | string;
})
```

### `name`

The [`SliceGroup`](/slices-for-redux/docs/api/SliceGroup)'s name (or '/' to create a root SliceGroup).  
With the exception of creating a root SliceGroup, the _name_ cannot contain the path separator '/'.  
The _name_ is used to build the _path_ property of the [`SliceGroup`](/slices-for-redux/docs/api/SliceGroup).

### _parent_

optional - The [`SliceGroup`](/slices-for-redux/docs/api/SliceGroup)'s parent.  
Default value is: [`rootSliceGroup`](/slices-for-redux/docs/api/rootSliceGroup)  
When _parent_ is [`rootSliceGroup`](/slices-for-redux/docs/api/rootSliceGroup) the created [`SliceGroup`](/slices-for-redux/docs/api/SliceGroup)'s _reducer_ will be added to the "root-reducer" (the reducer of the rootSliceGroup).  
When _parent_ is a [`SliceParent`](/slices-for-redux/docs/api/SliceParent), the created [`SliceGroup`](/slices-for-redux/docs/api/SliceGroup)'s _reducer_ will be added to that parent's reducer.  
When _parent_ is a string, it represents the parent's path, and the created
[`SliceGroup`](/slices-for-redux/docs/api/SliceGroup)'s reducer will needs to be manually added to that parent's reducer.

## Return Value

`createSliceGroup` returns a [`SliceGroup`](/slices-for-redux/docs/api/SliceGroup) object.

## Note

In the rare case (not recommended) where multiple Redux stores are used, create a
root SliceGroup for each store with `createSliceGroup({ name: '/' })`.
