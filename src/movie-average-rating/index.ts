import { CalculateAverageRatingsFn } from 'movie-average-rating/types';

/**
 * @task Calculate Average Movie Ratings
 * @description Given an array of user ratings, calculate the average score for each movie.
 * Each movie may have one or more ratings, and the result should contain the movie ID and its average score.
 * Average Score should be rounded to the nearest decimal (one number)
 * @example
 * Input:
 * [
 *   { userId: 1, movieId: 10, score: 8 },
 *   { userId: 2, movieId: 10, score: 6 },
 *   { userId: 3, movieId: 11, score: 7 }
 * ]
 *
 * Output:
 * [
 *   { movieId: 10, averageScore: 7 },
 *   { movieId: 11, averageScore: 7 }
 * ]
 */
export const calculateAverageRatings: CalculateAverageRatingsFn = (ratings) => {
  if (!ratings.length) {
    return [];
  }

  const movieStats = new Map<
    number,
    { amountRating: number; quantity: number }
  >();

  ratings.forEach(({ movieId, score }) => {
    const current = movieStats.get(movieId);

    if (!current) {
      movieStats.set(movieId, { amountRating: score, quantity: 1 });
      return;
    }

    current.amountRating += score;
    current.quantity += 1;
  });

  const result = Array.from(movieStats.entries()).map(
    ([movieId, { amountRating, quantity }]) => ({
      movieId,
      averageScore: Math.round((amountRating / quantity) * 10) / 10,
    }),
  );

  return result;
};
calculateAverageRatings([
  { userId: 1, movieId: 5, score: 10 },
  { userId: 2, movieId: 5, score: 9 },
  { userId: 3, movieId: 5, score: 10 },
  { userId: 1, movieId: 6, score: 6 },
]);
