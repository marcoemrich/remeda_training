export const stringCalc = (str: string) => {
  let result = 0;

  const parts = str.split(",");
  for (let i = 0; i < parts.length; ++i) {
    const n = Number(parts[i]);
    if (n < 1000) {
      result += n;
    }
  }
  return result;
};
