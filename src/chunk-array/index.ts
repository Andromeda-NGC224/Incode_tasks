import { ChunkArrayFn } from './types';

/**
 * @task Chunk Array
 * @description Split an array into smaller chunks of a specified size. Each chunk should be an array containing at most `size` elements. The final chunk may contain fewer elements if there are not enough remaining.
 *
 * @example
 * Input:
 * ([1, 2, 3, 4, 5], 2)
 * Output:
 * [[1, 2], [3, 4], [5]]
 *
 * Input:
 * ([1, 2, 3], 1)
 * Output:
 * [[1], [2], [3]]
 *
 * Input:
 * ([1, 2, 3], 5)
 * Output:
 * [[1, 2, 3]]
 *
 * Input:
 * ([], 3)
 * Output:
 * []
 */
export const chunkArray: ChunkArrayFn = (arr, size) => {
  if (size <= 0) return [];

  const finishedChunks = [];
  let currentChunk = [];

  for (const item of arr) {
    currentChunk.push(item);

    if (currentChunk.length === size) {
      finishedChunks.push(currentChunk);
      currentChunk = [];
    }
  }

  if (currentChunk.length > 0) {
    finishedChunks.push(currentChunk);
  }

  console.log('finishedChunks', finishedChunks);

  return finishedChunks;
};
chunkArray([1, 2, 3, 4, 5], 2);

//

export const chunkArray2: ChunkArrayFn = (arr, size) => {
  if (size <= 0) return [];

  const finishedChunks = [];
  for (let i = 0; i < arr.length; i += size) {
    finishedChunks.push(arr.slice(i, i + size));
  }
  console.log('chunks', finishedChunks);

  return finishedChunks;
};
chunkArray2([1], 0);
