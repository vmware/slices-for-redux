A SliceGroup gives the Slice 2 things

SliceGroup is the parent of a Slice.

The `rootSliceGroup` is the top most SliceGroup.
Usually in small applications all Slices are direct children of the `rootSliceGroup`. This mean that all slice reducers are composed into the `rootReducer`.

In large applications to organize a big Redux store state and makes it easier to navigate it the Redux Dev Tools one can group Slices under SlicesScope.
A SliceGroup is similar in concept to folders in the file system.

If you are building a library of reusable redux Slices like `Ducks' you can group
all your Slices under a SliceGroup.

## Parameters

`createSliceGroup` accepts a single configuration object parameter, with the following options:

```ts
function createSliceGroup({
  /**
   * The SliceGroup name.
   */
  name: string;

})
```

## Parameters

### `name`

A string name for the SliceGroup.
It cannot contain the path separator '/'.

## Parameters

### `addCaseReducers(caseReducers)`

- Given an object with keys reducerName string and values CaseReducer function
- returns an object with same keys anv values PayloadActionCreator

An object containing Redux "case reducer" functions (functions intended to handle a

### `reducers`

An object containing Redux "case reducer" functions (functions intended to handle a specific action type, equivalent
to a single case statement in a switch).

The keys in the object will be used to generate string action type constants, and these will show up in the Redux
DevTools Extension when they are dispatched. Also, if any other part of the application happens to dispatch an action
with the exact same type string, the corresponding reducer will be run. Therefore, you should give the functions
descriptive names.

This object will be passed to [`createReducer`](/slices-for-redux/docs/api/createReducer), so the reducers may safely "mutate" the
state they are given.

#### Customizing Generated Action Creators

If you need to customize the creation of the payload value of an action creator by means of a [`prepare callback`](/slices-for-redux/docs/api/createAction#using-prepare-callbacks-to-customize-action-contents), the value of the appropriate field of the `reducers` argument object should be an object instead of a function. This object must contain two properties: `reducer` and `prepare`. The value of the `reducer` field should be the case reducer function while the value of the `prepare` field should be the prepare callback function.

### `extraReducers`

One of the key concepts of Redux is that each slice reducer "owns" its slice of state, and that many slice reducers
can independently respond to the same action type. `extraReducers` allows `createSlice` to respond to other action types
besides the types it has generated.

Like `reducers`, `extraReducers` should be an object containing Redux case reducer functions. However, the keys should
be other Redux string action type constants, and `createSlice` will _not_ auto-generate action types or action creators
for reducers included in this parameter.

As with `reducers`, these reducers will also be passed to `createReducer` and may "mutate" their state safely.

If two fields from `reducers` and `extraReducers` happen to end up with the same action type string,
the function from `reducers` will be used to handle that action type.

Action creators that were generated using [`createAction`](/slices-for-redux/docs/api/createAction) may be used directly as the keys here, using
computed property syntax. (If you are using TypeScript, you may have to use `actionCreator.type` or `actionCreator.toString()`
to force the TS compiler to accept the computed property.)

### The "builder callback" API for `extraReducers`

Instead of using a simple object as `extraReducers`, you can also use a callback that receives a `ActionReducerMapBuilder` instance.

We recommend using this API if stricter type safety is necessary when defining reducer argument objects.

## Return Value

`createSlice` will return an object that looks like:

```ts
{
    addCaseReducers,
    addExtraReducers,
    getActionType,
    name : string,
    parentPath : string,
    reducer : CaseReducer,
    selector : SelectorFunc,
}
```

Each function defined in the `reducers` argument will have a corresponding action creator generated using [`createAction`](/slices-for-redux/docs/api/createAction)
and included in the result's `actions` field using the same function name.

The generated `reducer` function is suitable for passing to the Redux `combineReducers` function as a "slice reducer".

You may want to consider destructuring the action creators and exporting them individually, for ease of searching
for references in a larger codebase.

## Examples

```ts
import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit';
import { createStore, combineReducers } from 'redux';

const incrementBy = createAction<number>('incrementBy');

const counter = createSlice({
  name: 'counter',
  initialState: 0 as number,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    multiply: {
      reducer: (state, action: PayloadAction<number>) => state * action.payload,
      prepare: (value: number) => ({ payload: value || 2 }), // fallback if the payload is a falsy value
    },
  },
  // "builder callback API"
  extraReducers: (builder) =>
    builder.addCase(incrementBy, (state, action) => {
      return state + action.payload;
    }),
});

const user = createSlice({
  name: 'user',
  initialState: { name: '', age: 20 },
  reducers: {
    setUserName: (state, action) => {
      state.name = action.payload; // mutate the state all you want with immer
    },
  },
  // "map object API"
  extraReducers: {
    [counter.actions.increment]: (state, action) => {
      state.age += 1;
    },
  },
});

const reducer = combineReducers({
  counter: counter.reducer,
  user: user.reducer,
});

const store = createStore(reducer);

store.dispatch(counter.actions.increment());
// -> { counter: 1, user: {name : '', age: 21} }
store.dispatch(counter.actions.increment());
// -> { counter: 2, user: {name: '', age: 22} }
store.dispatch(counter.actions.multiply(3));
// -> { counter: 6, user: {name: '', age: 22} }
store.dispatch(counter.actions.multiply());
// -> { counter: 12, user: {name: '', age: 22} }
console.log(`${counter.actions.decrement}`);
// -> "counter/decrement"
store.dispatch(user.actions.setUserName('eric'));
// -> { counter: 6, user: { name: 'eric', age: 22} }
```
