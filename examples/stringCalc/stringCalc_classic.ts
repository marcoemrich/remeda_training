export const stringCalc = (str: string) => {
  let result = 0;
  let part = "";
  let parts: string[] = [];
  let partNr = 0;

  for (let i = 0; i < str.length; ++i) {
    if (str[i] != ",") {
      part += str[i];
    } else {
      parts[++partNr] = part;
      part = "";
    }
  }

  parts[++partNr] = part;

  for (let i = 0; i < parts.length; ++i) {
    const n = Number(parts[i]);
    if (n < 1000) {
      result += n;
    }
  }
  return result;
};
