import { FormatPhoneNumberFn } from './types';

/**
 * @task Format Phone Number
 * @description Convert a raw input string into a formatted phone number if it contains exactly 12 digits.
 * The expected format is: +XX (XXX) XXX-XX-XX
 * If the input does not contain exactly 12 digits, return an empty string.
 *
 * @example
 * Input: '+38(093)1234567'
 * Output: '+38 (093) 123-45-67'
 *
 * Input: '380931234567'
 * Output: '+38 (093) 123-45-67'
 *
 * Input: '0931234567'
 * Output: ''
 */
export const formatPhoneNumber: FormatPhoneNumberFn = (str) => {
  const numbers = str.replace(/\D/g, '');

  if (numbers.length !== 12) {
    return '';
  }

  const countryCode = numbers.slice(0, 2);
  const code = numbers.slice(2, 5);
  const firstPart = numbers.slice(5, 8);
  const secondPart = numbers.slice(8, 10);
  const thirdPart = numbers.slice(10);

  return `+${countryCode} (${code}) ${firstPart}-${secondPart}-${thirdPart}`;
};
formatPhoneNumber('+38 093 123 45 67');
