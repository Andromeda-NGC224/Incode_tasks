import { DeepFlattenFn } from 'deep-flatten/types';

/**
 * @task Deep Flatten
 * @description Flatten a nested array structure into a single-level array. Any depth of nested arrays should be recursively flattened.
 *
 * @example
 * Input: [1, [2, [3, 4]], 5]
 * Output: [1, 2, 3, 4, 5]
 *
 * Input: [[[[1]]], 2, [3, [4]]]
 * Output: [1, 2, 3, 4]
 *
 * Input: []
 * Output: []
 */
export const deepFlatten: DeepFlattenFn = (input) => {
  if (input.length === 0) {
    return [];
  }
  const result: unknown[] = [];

  input.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...deepFlatten(item));
    } else {
      result.push(item);
    }
  });

  return result;
};
deepFlatten([[[[1]]], 2, [{ a: 3 }, [4]]]);

export const deepFlatten2: DeepFlattenFn = (input) => {
  return input.flat(Infinity);
};
deepFlatten([[[[1]]], 2, [{ a: 3 }, [4]]]);
// Але як я зрозумів з документації, працює на доволі нових версіях оточення
