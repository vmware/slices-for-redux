---
id: createSliceGroup
title: createSliceGroup
sidebar_label: createSliceGroup
hide_title: true
---

# `createSliceGroup`

Slice Groups are used to group Slices under some arbitrary named group.
This can help organize and ease navigation of a large store state object
within the Redux Dev Tools.

`createSliceGroup` creates a [`SliceGroup`](/slices-for-redux/docs/api/SliceGroup) object.

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
With the exception of creating a root SliceGroup, the name cannot contain the path separator '/'.  
The name is used to build the [`SliceGroup`](/slices-for-redux/docs/api/SliceGroup)'s path property.

### `parent`

optional - The [`SliceGroup`](/slices-for-redux/docs/api/SliceGroup)'s parent.  
Default value is: [`rootSliceGroup`](/slices-for-redux/docs/api/rootSliceGroup)  
When `parent` is [`rootSliceGroup`](/slices-for-redux/docs/api/rootSliceGroup) this [`SliceGroup`](/slices-for-redux/docs/api/SliceGroup)'s `reducer` will be added to the [`rootReducer`](/slices-for-redux/docs/api/rootReducer).  
When `parent` is a [`SliceParent`](/slices-for-redux/docs/api/SliceParent), this [`SliceGroup`](/slices-for-redux/docs/api/SliceGroup)'s `reducer` will be added to that parent's reducer.  
When `parent` is a string, it represents the parent's path, and this
[`SliceGroup`](/slices-for-redux/docs/api/SliceGroup)'s reducer will needs to be manually added to that parent's reducer.

## Return Value

`createSliceGroup` returns a [`SliceGroup`](/slices-for-redux/docs/api/SliceGroup) object.

## Note

In the rare case (not recommended) where multiple Redux stores are used, create a
root SliceGroup for each store with `createSliceGroup({ name: '/' })`.
