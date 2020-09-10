---
id: rootReducer
title: rootReducer
sidebar_label: rootReducer
hide_title: true
---

# `rootReducer`

## Usage

The `rootReducer` must be passed to <a href="https://redux.js.org/api/createstore" target="_blank">createStore</a>
from Redux or to <a href="https://redux-toolkit.js.org/api/configurestore" target="_blank">configureStore</a>
from Redux Toolkit. We recommend using <a href="https://redux-toolkit.js.org/api/configurestore" target="_blank">configureStore</a>
from Redux Toolkit.

### Adding third-party reducers to the `rootReducer`.

Reducers form third-party libraries, unless developed with **Slices for Redux**, need to explicitly added to the `rootReducer` using its `addReducers` method.

```js
rootReducer.addReducers({
  router: connectRouter(history),
});
```

### Self-add of Slice's reducer

[`createSlice`](/slices-for-redux/docs/api/createSlice) by default will add its reducer to the `rootReducer`.
This reduces the code to be written and helps with code splitting.

## Details

The `rootReducer` is a [`MutableCombineReducer`](/slices-for-redux/docs/api/createMutableCombineReducer)
which allows adding slice reducers to it.

This reduces boilerplate code and promotes code splitting because importing and combining reducers at startup can be avoided for the majority of slice reducers.
Slice reducers can automatically add themselves to the `rootReducer` when their code is loaded using `addReducers`:

`rootReducer.addReducers({ [sliceName]: sliceReducer })`

Only those reducers that are not adding themselves, need to be imported and added at startup.  
Using the `rootReducer` reduces boiler plate code and merge conflicts, because there is no longer the need to import and modify the reducers.js file each time a new slice reducer is written.
