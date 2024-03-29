/* Copyright 2020-2021 VMware, Inc.
 * SPDX-License-Identifier: MIT */

import { createSliceGroup, rootSliceGroup } from './create-slice-group';

describe('createSliceGroup', () => {
  it('name is required', () => {
    // @ts-expect-error: Missing options
    expect(() => createSliceGroup()).toThrow(
      'name is required in createSliceGroupOptions.'
    );
  });

  it('path is parentPath + name', () => {
    const name = 'testG1';
    let slice = createSliceGroup({ name });
    expect(slice.path).toBe(`/${name}/`);

    const parentPath = 'app';
    slice = createSliceGroup({ name, parent: parentPath });
    expect(slice.path).toBe(`/${parentPath}/${name}/`);
  });

  it('Slice Group name must NOT contain path separator', () => {
    expect(() => createSliceGroup({ name: 'a/b' })).toThrow(
      "SliceGroup 'a/b' name cannot contain path separator '/'."
    );
  });

  it('will not self-adds when parent is a string', () => {
    jest.spyOn(rootSliceGroup, 'addReducers');
    const name = 'testG2';
    createSliceGroup({ name, parent: '/' });
    expect(rootSliceGroup.addReducers).not.toHaveBeenCalled();
  });

  it('self-adds to the rootSliceGroup', () => {
    jest.spyOn(rootSliceGroup, 'addReducers');
    const name = 'testG3';
    const sliceGroup = createSliceGroup({ name });
    expect(rootSliceGroup.addReducers).toHaveBeenCalledWith({
      [name]: sliceGroup.reducer,
    });
  });

  it('add to a given parent SliceGroup', () => {
    const myRootGroup = createSliceGroup({ name: '/' });
    expect(myRootGroup.path).toBe('/');

    jest.spyOn(myRootGroup, 'addReducers');
    const name = 'testG4';
    const sliceGroup = createSliceGroup({ name, parent: myRootGroup });
    expect(myRootGroup.addReducers).toHaveBeenCalledWith({
      [name]: sliceGroup.reducer,
    });
    expect(sliceGroup.path).toBe(`/${name}/`);
  });
});
