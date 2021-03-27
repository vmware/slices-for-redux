---
id: mutable-reducers
title: Mutable Reducers
sidebar_label: Mutable Reducers
hide_title: true
---

# Mutable Reducers

Now that we have come to appreciated the benefits of immutability,
proposing the use of mutable reducers may, at first look, seen as an anti-pattern.  
Please, read why maybe using mutable reducers may not be such a bad idea after all.

Most applications create the "root-reducer" with <a href="https://redux.js.org/api/combinereducers" target="_blank">combineReducers()</a> from Redux. Slice reducers are imported and combined when creating the rootReducer. This is often done in a "reducers.js" file.

Large applications use code splitting to incrementally load code chunks.
Code inside a dynamically loaded chunk needs a way to add its slice reducers to the rootReducer.
Current solutions involve creating a new "root-reducer" and calling <a href="https://redux.js.org/api/store#replacereducernextreducer" target="_blank">store.replaceReducer(newReducer)</a>.

**Slices for Redux**'s "root-reducer" is a "mutable combine reducer". Slice reducers can be added to the "root-reducer" as needed. This not only simplifies the code that one writes but actually promotes code splitting to occur in the first place. Importing and combining reducers at startup can be avoided for the majority of slice reducers. Slice reducers can add themselves to the "root-reducer" when their code is loaded.

Only those reducers that are not adding themselves need to be imported and explicitly added to the rootReducer.
There is no longer the need to import and modify the "reducers.js" file each time a new reducer is written. This removes the boilerplate code inside the "reducers.js" file.

When slice reducers files are no longer imported in the reducers.js file,
the bundler will be able to defer more code, reducing the size of the first chunk.

## Example

Using the `addReducers` function of the [`rootSliceGroup`](/slices-for-redux/docs/api/rootSliceGroup)
one can add one or more slice reducers to the "root-reducer" before or after the Redux store was created.

```js
import { configureStore } from '@reduxjs/toolkit';
import { rootSliceGroup } from 'slices-for-redux';

// Add initial reducers before creating the store
rootSliceGroup.addReducers({
  slice1: reducer1,
});
// Create the store
const store = configureStore({
  reducer: rootSliceGroup.reducer,
});

// And later as lazy loaded module are loaded they can add their reducers to the "root-reducer".
rootSliceGroup.addReducers({ [sliceName]: sliceReducer });

rootSliceGroup.addReducers({ slice2: sliceReducer2, slice3: sliceReducer3 });
```
