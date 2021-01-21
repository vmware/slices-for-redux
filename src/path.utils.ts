/* Copyright 2020-2021 VMware, Inc.
 * SPDX-License-Identifier: MIT */

import { PATH_SEPARATOR } from './constants';

export function normalizePath(value?: string): string {
  if (!value) {
    return PATH_SEPARATOR;
  }
  let result: string = String(value);
  if (!result.startsWith(PATH_SEPARATOR)) {
    result = `${PATH_SEPARATOR}${result}`;
  }
  if (!result.endsWith(PATH_SEPARATOR)) {
    result = `${result}${PATH_SEPARATOR}`;
  }
  return result;
}

export function namesFromPath(path: string): string[] {
  // Note: filter((n) => n) is filtering out empty names.
  // E.g.: path: '/app/' split becomes: ['', 'app', ''] result is: ['app']
  return path.split(PATH_SEPARATOR).filter((n) => n);
}
