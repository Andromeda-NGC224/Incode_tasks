import { SummarizeTransactionsFn } from 'summarize-transactions/types';

/**
 * @task Summarize Transactions By User
 * @description Given an array of transactions (which may be in any order), group them by `userId` and compute:
 * - totalIncome: total sum of transactions with type 'income'
 * - totalExpense: total sum of transactions with type 'expense'
 * - net: totalIncome - totalExpense
 *
 * Return an array of summaries per user.
 * Each user should appear only once in the result.
 * The order of the result does not matter.
 * @example
 * Input:
 * [
 *   { userId: 1, amount: 100, type: 'income' },
 *   { userId: 1, amount: 50, type: 'expense' },
 *   { userId: 2, amount: 200, type: 'income' },
 *   { userId: 1, amount: 25, type: 'expense' },
 * ]
 *
 * Output:
 * [
 *   { userId: 1, totalIncome: 100, totalExpense: 75, net: 25 },
 *   { userId: 2, totalIncome: 200, totalExpense: 0, net: 200 },
 * ]
 */
export const summarizeTransactions: SummarizeTransactionsFn = (
  transactions,
) => {
  if (transactions.length === 0) {
    return [];
  }

  const allUserTransactions = transactions.reduce(
    (accumulator, transaction) => {
      const { userId, amount, type } = transaction;

      if (!accumulator[userId]) {
        accumulator[userId] = {
          totalIncome: 0,
          totalExpense: 0,
        };
      }

      if (type === 'income') {
        accumulator[userId].totalIncome += amount;
      }
      if (type === 'expense') {
        accumulator[userId].totalExpense += amount;
      }

      return accumulator;
    },
    {} as Record<number, { totalIncome: number; totalExpense: number }>,
  );

  const result = Object.entries(allUserTransactions).map(
    ([userId, summary]) => {
      const userIdNumber = Number(userId);
      const { totalIncome, totalExpense } = summary;
      const net = totalIncome - totalExpense;

      return {
        userId: userIdNumber,
        totalIncome,
        totalExpense,
        net,
      };
    },
  );

  return result;
};
summarizeTransactions([
  { userId: 1, amount: 100, type: 'income' },
  { userId: 1, amount: 50, type: 'expense' },
  { userId: 2, amount: 200, type: 'income' },
  { userId: 1, amount: 25, type: 'expense' },
]);
