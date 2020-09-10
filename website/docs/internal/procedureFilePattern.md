---
id: procedureFilePattern
title: Procedure File pattern
sidebar_label: Procedure File pattern
hide_title: true
---

# `Procedure File pattern (WIP)`

**Slices for Redux** promotes a pattern that we call "Procedure File":

**"a file that contains all items that create and process a Redux Action and its side effects"**.

Rules - A procedure file:

- the file should be named after the primary action creator that it exports
  or if no action creator is exported, it should be named after the
  procedure that it performs.

  the

- may contain 0 or more action creators but may only export one.
- may export 0 or more action action type constants

and sometimes one or more Action Type constant(s) to allow other Procedure Files to have a Saga Watcher listening to those Action s and perform additional work.

- Exporting Action Type constant(s) makes these and their expected payload part of the public API. So be carful what you export and how a

when refactoring exported Actions.

A Procedure File contains:

- Action type constant for one primary and some secondary actions if any.
- Action creator functions for those (only the primary action creator function is exported !)
- Action reducers
- Saga watchers & Saga workers
- API delegate

The Redux Procedure File idea of keeping all items that create and process a Redux Action and its side effects close together, is similar to the "Folder By Feature" pattern.  
These items are coupled, and by keeping them together inside a single file we have a high cohesion.

Using this pattern helps writing modular code that better scales.

A procedure file contain the case reducers, action creators and side effects for one feature like: loadX, selectY, removeZ, ...

- A procedure file name should be named by the primary action that it exports.
  `loadFoo.proc.js`

- A procedure should define and export only one primary action file adds its case reducers to the `Slice`.

A procedure file adds its case reducers to the `Slice`.
A procedure file exports only those public action creator functions that views can import and call.
A procedure file exports only those public action type constant that other procedure files
may listen to and act upon.
A procedure file contains the code for the side effects (like Sagas) for the actions it defines.

**Slices for Redux**'s Slice promotes writing your case reducers in separate files from the file that created the Slice.
We call these procedure files.

The code is simple. Each procedure file adds its case reducers to the slice.
The slice no longer needs contain nor import all the cases reducers.
No boiler plate code and merge conflicts in the files that create the slices.

Promoting writing case reducers in separate files form the file to be written is But

The slice's reducer is dynamic which allows to add case reducers as needed.
This promotes modular code that better scales as you application becomes large.
The slice file no longer needs to import all the files that containing case reducers.
As a new feature is implemented new files containing cases reducers are written and using the slice addCaseReducers function

`someSlice.addCaseReducers({ [actionKey]: caseReducer })`
