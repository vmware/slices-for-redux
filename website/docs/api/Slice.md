---
id: Slice
title: Slice
sidebar_label: Slice
---

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

The `caseReducers` argument is an object with keys _actionKey_ strings and values case reducer functions.
`addCaseReducers` generates an _actionType_ for each _actionKey_.
The _actionTypes_ are formatted based on the `Slice`'s `actionTypeFormat` config option.
Then `addCaseReducers` generates an action creator function for each _actionType_.
The type of the payload will be based on the type expected in the case reducer function.
`addCaseReducers` returns an "actions" object with keys `${actionKey}Action` and values are the action creator function.
The action creator functions are generated using the <a href="https://redux-toolkit.js.org/api/createAction" target="_blank">Redux Toolkit's createAction()</a> function.

### `addExtraReducers(extraReducers)`

Like `caseReducers`, `extraReducers` should be an object containing Redux case reducer functions. However, the keys should be _actionType_ string constants.
`addExtraReducers` does not generate action creator functions and it has no return value.

### `createAction(actionKey)`

A utility function to create an action creator function for the given _actionKey_
string.  
It calls _getActionType(actionKey)_ and then calls <a href="https://redux-toolkit.js.org/api/createAction" target="_blank">createAction</a> function from Redux Toolkit.  
The action creator function accepts a single argument, which will be included
in the _action_ object as a field called _payload_.

### `getActionType(actionKey)`

Given an actionKey string returns an _actionType_.  
The _actionType_ is formatted for uniqueness and readability in the Redux Dev Tools.  
The format is based on the `Slice`'s _actionTypeFormat_ config option.

### `name`

The `Slice`'s name.

### `parentPath`

The `Slice`'s location in the redux state.
The value is based on the `Slice`'s _name_ and the value of the `Slice`'s _parent_ config option.

### `reducer`

The `Slice`'s reducer.  
Useful in unit tests or when the `Slice`'s _parent_ config option was not set to a [`SliceParent`](/slices-for-redux/docs/api/Slice) but to the parent's path and therefore one must explicitly add the Slice's _reducer_ to a parent.

### `selector`

The `Slice`'s selector.
Given the Store's state it returns the slice of state.  
If in the Store's state the slice of state is undefined,
then it returns the value defined in the `Slice`'s `initialState` config option.  
A Slice may exist under one or more nested SliceGroups.
The `Slice`'s selector uses the parent's _path_ to walk up the ancestors SliceGroup names and return the slice of state or the `initialState` if undefined.

### `selectors`

When _initialState_ is an object, _selectors_ is an object with
keys `${propertyName}Selector` for each property name in the _initialState_ object,
and values Selector functions that return the property's value.
