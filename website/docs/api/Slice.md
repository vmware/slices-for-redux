---
id: Slice
title: Slice
sidebar_label: Slice
hide_title: true
---

# `Slice`

A `Slice` is an object that looks like:

```ts
{
    addCaseReducers: (caseReducers: CaseReducers) => CaseReducerActions,
    addExtraReducers: (reducers: Reducers) => void,
    createAction: (actionKey: string) => PayloadActionCreator;
    getActionType: (actionKey: string) => string,
    name: string,
    parentPath: string,
    reducer: Reducer,
    selector: Selector,
    selectors: Selectors,
}
```

## Properties

### `addCaseReducers(caseReducers)`

The `caseReducers` argument is an object with values case reducer functions and keys string actionKeys.
`addCaseReducers` generates action types for each actionKey.
The action types are formatted based on the `Slice`'s `actionTypeFormat` config option.
Then `addCaseReducers` generates action creators for each action type.
The type of the payload will be based on the type expected in the case reducer function.
`addCaseReducers` returns an 'actions' object with the same actionKeys but where the values are the generates action creators.
The action creators are generated using the <a href="https://redux-toolkit.js.org/api/createAction" target="_blank">Redux Toolkit's createAction()</a> function.

### `addExtraReducers(extraReducers)`

Like `caseReducers`, `extraReducers` should be an object containing Redux case reducer functions. However, the keys should be string action type constants.
`addExtraReducers` will not auto-generate action types nor action creators for extraReducers and it has no return value.

### `createAction(actionKey)`

A utility function to create an action creator for the given action key
string.  
It uses `getActionType` and then calls <a href="https://redux-toolkit.js.org/api/createAction" target="_blank">createAction</a> function from Redux Toolkit.  
The action creator accepts a single argument, which will be included
in the action object as a field called payload. The action creator function
will also have its toString() overridden so that it returns the action type,
allowing it to be used in reducer logic that is looking for that action type.

### `getActionType(actionKey)`

Given an actionKey string returns an action type.  
The action type is formatted for uniqueness and readability in the Redux Dev Tools.  
The format is based on the `Slice`'s `actionTypeFormat` config option.

### `name`

The `Slice`'s name.

### `parentPath`

The `Slice`'s location in the redux state.
The value is based on the value of the `Slice`'s `parent` config option.

### `reducer`

The `Slice`'s reducer.  
Useful in unit tests or when opting out from self-add and therefore one must
explicitly write the code to add the Slice's reducer to a parent reducer.

### `selector`

The `Slice`'s selector.
Given the Store's state it returns the slice of state.  
If in the Store's state the slice of state is undefined,
then it returns the value defined in the `Slice`'s `initialState` config option.  
A Slice may exist under one or more nested SliceGroups.
The `Slice`'s selector uses the `parentPath` to walk up the ancestors SliceGroup names and return the slice of state or the `initialState` if undefined.

### `selectors`

When `initialState` is an object `selectors` is an object with the same
field name keys, and values Selector functions that return field's value.
