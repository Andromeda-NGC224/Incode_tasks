import { NestedObjectKeysFn } from './types';

/**
 * @task Nested Object Keys
 * @description Return all nested keys of an object as dot-delimited paths.
 * The function should recurse through all nested objects and return full paths to all leaf and intermediate keys.
 *
 * @example
 * Input: { a: { b: { c: 1 } } }
 * Output: ['a', 'a.b', 'a.b.c']
 *
 * Input: { x: 1, y: { z: 2 } }
 * Output: ['x', 'y', 'y.z']
 *
 * Input: {}
 * Output: []
 */
export const nestedObjectKeys: NestedObjectKeysFn = (obj) => {
  const result: string[] = [];

  const isObject = (value: unknown): value is Record<string, unknown> =>
    typeof value === 'object' && value !== null && !Array.isArray(value);

  const pathCreator = (
    currentObject: Record<string, unknown>,
    path: string[] = [],
  ) => {
    for (const key of Object.keys(currentObject)) {
      const fullPath = [...path, key].join('.');
      result.push(fullPath);

      const value = currentObject[key];
      if (isObject(value)) {
        pathCreator(value, [...path, key]);
      }
    }
  };

  if (isObject(obj)) {
    pathCreator(obj);
  }

  return result;
};
nestedObjectKeys({ 'a key': { 'with space': { y: 42 } } });
