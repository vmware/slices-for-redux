---
id: createSlice
title: createSlice
sidebar_label: createSlice
hide_title: true
---

# `createSlice`

`createSlice` creates a [`Slice`](/slices-for-redux/docs/api/Slice) object.

## Parameters

`createSlice` accepts a single configuration object parameter, with the following options:

```ts
function createSlice({
  /**
   * Optional - Defines how an action type is generated given
   * the actionKey and the slice names.
   */
  actionTypeFormat?: 'RTK' | ActionTypeFormatFunc;

  /**
   * Optional - The Slice's reducer uses, or not uses 'immer'.
   */
  immer?: boolean;

  /**
   * The initial state returned by the Slice's reducer and selector
   * when the store state has no value for this slice of state.
   */
  initialState: any;

  /**
   * The Slice's name.
   */
  name: string;

  /**
   * Optional - The Slice's parent.
   */
  parent?: SliceParent | string;
})
```

### `actionTypeFormat`

Optional - Defines how an action type is generated given
the `actionKey` and the Slice's `names`.  
The `names` are those of any ancestors SliceGroups and the Slice's name.

The default format is: `${actionKey}_${[...names].reverse().join('_')}`  
When value is: 'RTK' it uses Redux Toolkit convention: `${names.join('/')}/${actionKey}`

Otherwise the value must be a function with this signature:  
`(actionKey: string, names: string[]) => string`

### `initialState`

The initial state value for this slice of state.
It is returned by the Slice's reducer and selector
when the store state has no value for this slice of state.

### `immer`

Optional - The Slice's reducer uses, or not uses <a href="https://github.com/immerjs/immer" target="_blank">immer</a>

Default value is: true  
When migrating to **Slices for Redux** you may find that some existing code mutates the state.  
To **temporary ignore** impure code until it can be fixed set `immer` to false.  
When `immer` is false, a warning will appear in the console.

### `name`

A string name for this slice of state.
Also used by `actionTypeFormat` to generated the action type constants.

### `parent`

Optional - The Slice's parent.

Default value is: [`rootSliceGroup`](/slices-for-redux/docs/api/rootSliceGroup)  
When `parent` is [`rootSliceGroup`](/slices-for-redux/docs/api/rootSliceGroup) this [`Slice`](/slices-for-redux/docs/api/Slice)'s `reducer` will be added to the [`rootReducer`](/slices-for-redux/docs/api/rootReducer).  
When `parent` is a [`SliceParent`](/slices-for-redux/docs/api/SliceParent), this [`Slice`](/slices-for-redux/docs/api/Slice)'s `reducer` will be added to that parent's reducer.  
When `parent` is a string, it represents the parent's path, and this
[`Slice`](/slices-for-redux/docs/api/Slice)'s reducer will needs to be manually added to that parent's reducer.

## Return Value

`createSlice` returns a [`Slice`](/slices-for-redux/docs/api/Slice) object.
