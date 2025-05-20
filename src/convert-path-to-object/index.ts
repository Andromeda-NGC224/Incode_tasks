import { ConvertPathToObjectFn } from './types';

/**
 * @task Convert Path to Object
 * @description Convert a dot-delimited string path into a nested object structure with a value at the end.
 * The function takes a path string (like 'a.b.c') and a value, then returns an object such that the path is represented as nested keys leading to the given value.
 *
 * @example
 * Input:
 * ('a.b.c', 42)
 * Output:
 * { a: { b: { c: 42 } } }
 *
 * Input:
 * ('x', 'value')
 * Output:
 * { x: 'value' }
 *
 * Input:
 * ('', 123)
 * Output:
 * {}
 */

export const convertPathToObject: ConvertPathToObjectFn = (path, value) => {
  if (!path) {
    return {};
  }

  const pathArray = path.split('.').reverse();
  let result: Record<string, unknown> = value as Record<string, unknown>;

  for (const key of pathArray) {
    result = { [key]: result };
  }

  return result;
};
convertPathToObject('a.b.c', 42);
