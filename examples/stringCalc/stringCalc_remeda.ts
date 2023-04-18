import * as R from "remeda";

const add = (a: number, b: number): number => a + b;

// Version 1

// export const stringCalc = (str: string) =>
//   R.reduce(
//     R.filter(R.map(str.split(","), Number), (n) => n < 1000),
//     add,
//     0
//   );

// Version 2

// const split = (separator: string) => (str: string) => str.split(separator);
// const sum: (ns: number[]) => number = R.sumBy(R.identity);

// export const stringCalc = (str: string) =>
//   R.pipe(
//     str,
//     split(","),
//     R.map(Number),
//     R.filter((n) => n < 1000),
//     sum
//   );

// Version 3

const split = (separator: string) => (str: string) => str.split(separator);
const sum: (ns: number[]) => number = R.sumBy(R.identity);

export const stringCalc = R.createPipe(
  split(","),
  R.map(Number),
  R.filter((n) => n < 1000),
  sum
);
