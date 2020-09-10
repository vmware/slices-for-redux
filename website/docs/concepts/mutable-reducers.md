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

Most applications create the rootReducer with <a href="https://redux.js.org/api/combinereducers" target="_blank">combineReducers()</a> from Redux. Slice reducers are imported and combined when creating the rootReducer. This is often done in a "reducers.js" file.

Large applications use code splitting to incrementally load code chunks.
Code inside a dynamically loaded chunk needs a way to add its slice reducers to the rootReducer.
Current solutions involve creating a new rootReducer and calling <a href="https://redux.js.org/api/store#replacereducernextreducer" target="_blank">store.replaceReducer(newReducer)</a>.

**Slices for Redux**'s rootReducer is a "mutable combine reducer". Slice reducers can be added to the rootReducer as needed. This not only simplifies the code that one writes but actually promotes code splitting to occur in the first place. Importing and combining reducers at startup can be avoided for the majority of slice reducers. Slice reducers can add themselves to the rootReducer when their code is loaded.

Only those reducers that are not adding themselves need to be imported and explicitly added to the rootReducer.
There is no longer the need to import and modify the "reducers.js" file each time a new reducer is written. This removes the boilerplate code inside the "reducers.js" file.

When slice reducers files are no longer imported in the reducers.js file,
the bundler will be able to defer more code, reducing the size of the first chunk.

## Example

Using the `addReducers` function of the [`rootSliceGroup`](/slices-for-redux/docs/api/rootSliceGroup)
one can add one or more slice reducers to the rootReducer.

```js
rootSliceGroup.addReducers({ [sliceName]: sliceReducer });
```
