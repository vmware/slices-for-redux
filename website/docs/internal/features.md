Mutable Reducers
Slice Groups
Opinionated Slice
Procedure File

## Features

- A "mutable combine root reducer" that enables "slice reducers" to be added as their code is imported, removes code boilerplate and promotes code splitting.

- A createSliceGroup() function to organize and ease the navigation of a large State object.

- An opinionated createSlice() function that promotes writing sets of "case reducers" in separate files.

- A "Procedure File" pattern for writing Redux code that better scales.

### rootReducer

Most applications create the rootReducer with [`combineReducers()`](https://redux.js.org/api/combinereducers) from Redux.
All slice reducers must be imported and combined when creating the rootReducer.  
When code splitting, dynamically loaded modules need a way to add new reducers
to the rootReducer.

**Slices for Redux**'s `rootReducer` is dynamic. Slice reducers are added as needed.
This simplifies and promotes code splitting because importing and combining
reducers at startup can be avoided for the majority of slice reducers.
Slice Reducers can self add to the rootReducer when their code is loaded
using addReducers.

`rootReducer.addReducers({ [sliceName]: sliceReducer })`

Only those reducers that are not self adding need to be imported and added at startup.  
Less boiler plate code and merge conflicts: there is no longer the need to import and modify the reducers.js file each time a new reducer is written.

### createSlice

As the application grows and features are added, the code in slice reducers becomes
larger and the source of merge conflicts.
Instead of using a single large switch statement one can use case reducers to handle specific action type.

**Slices for Redux**'s `createSlice` promotes writing case reducers in separate files.
When the Slice is created its reducer is empty (has no case reducers).
The files that define the case reducers adds those to the slice's reducer using
the slice's addCaseReducers function.

`someSlice.addCaseReducers({ [actionKey]: caseReducer })`

With `createSlice` the slice file no longer needs to contain nor import all the cases reducers. The benefits are a simpler slice file, less prone to merge conflicts and cases reducers defined in separate files which make it easier to scale a maintain a large Redux application.
