import { MostFrequentCharFn } from './types';

/**
 * @task Most Frequent Character
 * @description Given a string, return the character that appears most frequently.
 * If multiple characters share the same highest frequency, return the one that appears first in the string.
 * If the input string is empty, return an empty string.
 *
 * @example
 * Input: 'aabbbcc'
 * Output: 'b'
 *
 * Input: 'xyz'
 * Output: 'x'
 *
 * Input: ''
 * Output: ''
 */
export const mostFrequentChar: MostFrequentCharFn = (text) => {
  if (text.trim() === '') {
    return '';
  }

  const count: Record<string, number> = {};
  text.split('').forEach((letter) => {
    count[letter] = (count[letter] || 0) + 1;
  });

  const mostOfLetters = text.split('').reduce((accLetter, letter) => {
    return count[letter] > count[accLetter] ? letter : accLetter;
  });

  return mostOfLetters;
};
mostFrequentChar('aabbccddeeffggg');
