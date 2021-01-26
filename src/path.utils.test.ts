/* Copyright 2020-2021 VMware, Inc.
 * SPDX-License-Identifier: MIT */

import { namesFromPath, normalizePath } from './path.utils';

describe('namesFromPath', () => {
  it('no names', () => {
    const result = namesFromPath('/');
    expect(result).toEqual([]);
  });

  it('one name', () => {
    const result = namesFromPath('/app/');
    expect(result).toEqual(['app']);
  });

  it('two names', () => {
    const result = namesFromPath('/app/home/');
    expect(result).toEqual(['app', 'home']);
  });
});

describe('normalizePath', () => {
  it('empty', () => {
    const result = normalizePath('');
    expect(result).toBe('/');
  });

  const expected = '/app/';

  it('leading and trailing', () => {
    const result = normalizePath('/app/');
    expect(result).toBe(expected);
  });

  it('no leading nor trailing', () => {
    const result = normalizePath('app');
    expect(result).toBe(expected);
  });

  it('leading only', () => {
    const result = normalizePath('/app');
    expect(result).toBe(expected);
  });

  it('trailing only', () => {
    const result = normalizePath('app/');
    expect(result).toBe(expected);
  });
});
