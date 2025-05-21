import { GroupByFn } from 'group-by-property/types';

/**
 * @task Group By Property
 * @description Group an array of objects by a given key. For each unique value of that key,
 * collect all objects that share it into an array under that key in the resulting object.
 *
 * @example
 * Input:
 * [
 *   { category: 'fruit', name: 'apple' },
 *   { category: 'vegetable', name: 'carrot' },
 *   { category: 'fruit', name: 'banana' }
 * ]
 *
 * Key: 'category'
 *
 * Output:
 * {
 *   fruit: [
 *     { category: 'fruit', name: 'apple' },
 *     { category: 'fruit', name: 'banana' }
 *   ],
 *   vegetable: [
 *     { category: 'vegetable', name: 'carrot' }
 *   ]
 * }
 */
export const groupByProperty: GroupByFn = (array, key) => {
  return array.reduce<Record<string, (typeof array)[number][]>>(
    (result, currentItem) => {
      const groupName = String(currentItem[key]);

      if (!result[groupName]) {
        result[groupName] = [];
      }

      result[groupName].push(currentItem);

      return result;
    },
    {},
  );
};

groupByProperty(
  [
    { category: 'fruit', name: 'apple' },
    { category: 'vegetable', name: 'carrot' },
    { category: 'fruit', name: 'banana' },
  ],
  'category',
);
