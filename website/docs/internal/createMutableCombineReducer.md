---
id: createMutableCombineReducer
title: createMutableCombineReducer
sidebar_label: createMutableCombineReducer
hide_title: true
---

# `createMutableCombineReducer`

Creates a combine reducer similar to <a href="https://redux.js.org/api/combinereducers" target="_blank">combineReducers</a> from Redux but with methods to add and remove reducers.

## Arguments

`createMutableCombineReducer` accepts one single optional argument `initialReducers`.
`initialReducers` is an object whose keys are reducers name and the values are reducers function.

## Return Value

`createMutableCombineReducer` returns a MutableCombineReducer function with two methods.

## Methods

### addReducers(reducers)

Adds one or more reducers to be combine reducer.
The method accepts an object with keys reducerName string and values Reducer function.

### RemoveReducers(reducerNames)

Removes one or more reducers from the combine reducer.
The method accepts an array of reducerNames string to be removed.

## Example

```js
const reducer = createMutableCombineReducer();
reducer.addReducers({potato: potatoReducer, tomato: tomatoReducer});
// This would produce the following state object
{
  potato: {
    // ... potatoes, and other state managed by the potatoReducer ...
  },
  tomato: {
    // ... tomatoes, and other state managed by the tomatoReducer ...
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
