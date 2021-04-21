# Slices for Redux

[![build status](https://img.shields.io/travis/vmware/slices-for-redux/beta.svg?style=flat-square)](https://travis-ci.com/vmware/slices-for-redux)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](CODE_OF_CONDUCT.md)

**Slices and SliceGroups that scale. Reduce boilerplate. Split code.**

## Install

`npm install --save @vmw/slices-for-redux`

### Purpose

The **Slices for Redux** package intent is to make it easy to write predictable Redux code that scales.
It was created to:

- Reduce code wiring boilerplate
- Promote better code splitting
- Promote a predictable folder / files structure
- Promote reusable encapsulated Redux modules
- Reduce code merge conflicts

**Slices for Redux** leverages concepts and tools from the <a href="https://redux-toolkit.js.org" target="_blank">Redux Toolkit</a> and adds some new concepts and tools of its own.

## What's Included

**Slices for Redux** includes:

- `rootSliceGroup`: Object that holds a mutable "root-reducer" allowing slice reducers to be added as their code is imported, removes code boilerplate and promotes code splitting.
- `createSlice()`: Function that creates a Slice with basic selectors and a mutable "case-reducer" to promote writing sets of case reducers in separate files.
- `createSliceGroup()`: Function that creates a SliceGroup to organize and ease the navigation of a large Redux State object.

## Documentation

The **Slices for Redux** docs are available at **https://vmware.github.io/slices-for-redux**.

## Contributing

The slices-for-redux project team welcomes contributions from the community. Before you start working with slices-for-redux, please
read our [Developer Certificate of Origin](https://cla.vmware.com/dco). All contributions to this repository must be
signed as described on that page. Your signature certifies that you wrote the patch or have the right to pass it on
as an open-source patch. For more detailed information, refer to [CONTRIBUTING.md](CONTRIBUTING.md).

## License

Open source [licensed as MIT](https://github.com/vmware/slices-for-redux/blob/master/LICENSE).
