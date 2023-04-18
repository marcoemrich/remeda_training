// Version 1

const add = (a: number, b: number): number => a + b;

export const stringCalc = (str: string) =>
  str
    .split(",")
    .map(Number)
    .filter((n) => n < 1000)
    .reduce(add, 0);

// Version 2

// const add = (a: number, b: number): number => a + b;
// const sum = (ns: number[]) => ns.reduce(add, 0);

// export const stringCalc = (str: string) =>
//   sum(
//     str
//       .split(",")
//       .map(Number)
//       .filter((n) => n < 1000)
//   );
