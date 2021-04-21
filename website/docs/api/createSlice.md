---
id: createSlice
title: createSlice
sidebar_label: createSlice
hide_title: true
---

# `createSlice`

A function that accepts a _name_, an _initialState_, and optionally a _parent_ and creates a [`Slice`](/slices-for-redux/docs/api/Slice) object. The default _parent_ is the [`rootSliceGroup`](/slices-for-redux/docs/api/rootSliceGroup).

Note that case-reducers and extraReducers are added to the slice object after it has been created. This is in contrast to the RTK <a href="https://redux-toolkit.js.org/api/createSlice" target="_blank">createSlice</a> where case-reducers and extraReducers are part of the configuration object.

## Parameters

`createSlice` accepts a single configuration object parameter, with the following options:

```ts
function createSlice({
  /**
   * Optional - Defines how an _actionType_ is generated given
   * the _actionKey_ and the names.
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

Optional - Defines how an _actionType_ is generated given
the _actionKey_ and the names.  
The names is the list of the ancestors SliceGroups' _name_ and the Slice's _name_.

The default format is: `${actionKey}_${[...names].reverse().join('_')}`  
When value is: 'RTK' it uses Redux Toolkit convention: `${names.join('/')}/${actionKey}`

Otherwise the value must be a function with this signature:  
`(actionKey: string, names: string[]) => string`

### `initialState`

The initial state value for this slice of state.
It is returned by the Slice's _reducer_ and _selector_
when the store state has no value for this slice of state.

### `immer`

Optional - The Slice's reducer uses <a href="https://github.com/immerjs/immer" target="_blank">immer</a>.  
Default value is: **true**  
When migrating to **Slices for Redux**, if you discover that some some of your existing code is not compatible with immer you can
**temporarily ignore** it by set the _immer_ option to false until you can fix it.  
When _immer_ is false, a warning will appear in the console.

### `name`

A string name for this slice of state.
Also used by _actionTypeFormat_ to generated the _actionType_ constants.

### `parent`

Optional - The Slice's parent.

Default value is: [`rootSliceGroup`](/slices-for-redux/docs/api/rootSliceGroup)  
When _parent_ is [`rootSliceGroup`](/slices-for-redux/docs/api/rootSliceGroup) the created [`Slice`](/slices-for-redux/docs/api/Slice)'s _reducer_ will be added to the "root-reducer" (the reducer of the rootSliceGroup).  
When _parent_ is a [`SliceParent`](/slices-for-redux/docs/api/SliceParent), the created [`Slice`](/slices-for-redux/docs/api/Slice)'s _reducer_ will be added to that parent's _reducer_.  
When _parent_ is a string, it represents the parent's path, and the created
[`Slice`](/slices-for-redux/docs/api/Slice)'s reducer will need to be manually added to that parent's reducer.

## Return Value

`createSlice` returns a [`Slice`](/slices-for-redux/docs/api/Slice) object.
