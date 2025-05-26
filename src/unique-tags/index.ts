import { ExtractUniqueTagsFn } from 'unique-tags/types';

/**
 * @task Extract Unique Tags
 * @description From an array of objects with array fields, extract all unique string values from all `tags` arrays **with frequency count**. Ignore empty or whitespace-only strings.
 *
 * @example
 * Input:
 * [
 *   { id: 1, tags: ['a', 'b', 'a'] },
 *   { id: 2, tags: ['b', 'c', ''] },
 *   { id: 3, tags: ['a', 'd', '  '] }
 * ]
 *
 * Output:
 * {
 *   a: 3,
 *   b: 2,
 *   c: 1,
 *   d: 1
 * }
 *
 * Note:
 * - The tags are counted.
 * - Empty strings and whitespace-only strings are ignored.
 * Input:
 * [
 *   { id: 1, tags: ['a', 'b'] },
 *   { id: 2, tags: ['b', 'c'] },
 *   { id: 3, tags: ['a', 'd'] }
 * ]
 *
 * Output:
 * ['a', 'b', 'c', 'd']
 */
export const extractUniqueTags: ExtractUniqueTagsFn = (items) => {
  if (items.length === 0) return {};

  const uniqueTags = items.reduce(
    (accumulator, item) => {
      const { tags } = item;

      if (tags.length === 0) {
        return accumulator;
      }

      const validTags = tags.filter((tag) => tag.trim() !== '');

      validTags.forEach((tag) => {
        accumulator[tag] = (accumulator[tag] || 0) + 1;
      });

      return accumulator;
    },
    {} as Record<string, number>,
  );

  return uniqueTags;
};
extractUniqueTags([
  { id: 1, tags: ['x', 'y', 'x', 'z'] },
  { id: 2, tags: ['y', 'z', 'w'] },
]);
