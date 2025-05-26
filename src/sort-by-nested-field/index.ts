import { SortByNestedFieldFn } from './types';

/**
 * @task Sort by Nested Field
 * @description Sort an array of objects by a nested field specified as a dot-separated string.
 * The sorting should be in ascending order. If the field is missing or values are equal, retain original order (stable sort).
 *
 * @example
 * Input: [
 *   { id: 1, user: { name: 'B' } },
 *   { id: 2, user: { name: 'A' } }
 * ], 'user.name'
 * Output: [
 *   { id: 2, user: { name: 'A' } },
 *   { id: 1, user: { name: 'B' } }
 * ]
 */

const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null;

export const sortByNestedField: SortByNestedFieldFn = (arr, field) => {
  const path = field.split('.');

  const getValue = (obj: unknown): unknown => {
    return path.reduce<unknown>((value, key) => {
      if (Array.isArray(value) && !isNaN(+key)) {
        return value[+key];
      }
      if (isObject(value)) {
        return value[key];
      }
      return undefined;
    }, obj);
  };

  return [...arr].sort((a, b) => {
    const valueA = getValue(a);
    const valueB = getValue(b);

    if (valueA == null && valueB != null) return -1;
    if (valueB == null && valueA != null) return 1;
    if (valueA == null && valueB == null) return 0;

    return valueA! < valueB! ? -1 : valueA! > valueB! ? 1 : 0;
  });
};
sortByNestedField([{ id: 1, info: { score: 10 } }, { id: 2 }], 'info.score');
