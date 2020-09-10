---
id: other-exports
title: Other Exports
sidebar_label: Other Exports
hide_title: true
---

# Other Exports

**Slices for Redux** exports some of its internal utilities, and re-exports additional functions from other dependencies as well.

## Internal Exports

### `createMutableCombineReducer`

Creates a combine reducer similar to [`combineReducers`](https://redux.js.org/api/combinereducers) from Redux but with methods that allow to dynamically add and remove reducers.

The [`rootReducer`](/slices-for-redux/docs/api/rootReducer) is a MutableCombineReducer.

Example:

```js
const reducer = createMutableCombineReducer();
reducer.addReducers({potato: potatoReducer, tomato: tomatoReducer});
// This would produce the following state object
{
  potato: {
    // ... potatoes, and other state managed by the potatoReducer ...
  },
  tomato: {
    // ... tomatoes, and other state managed by the tomatoReducer, maybe some nice sauce? ...
  }
}
reducer.removeReducers('potato');
// This would produce the following state object
{
  tomato: {
    // ... tomatoes, and other state managed by the tomatoReducer, maybe some nice sauce? ...
  }
}
```

### `rootSliceGroup`

The `rootSliceGroup` is the default SliceGroup for all Slices created with `createSlice`.

Its reducer is the [`rootReducer`](/slices-for-redux/docs/api/rootReducer) and its path value is '/' root.
