import { describe, it, expect } from "vitest";
import { stringCalc } from "./stringCalc_remeda";

describe("stringCalc", () => {
  it("should return 0 for an empty string", () => {
    expect(stringCalc("")).toEqual(0);
  });

  it("should return a single number", () => {
    expect(stringCalc("5")).toEqual(5);
  });

  it("should return the sum of several numbers", () => {
    expect(stringCalc("1,2,3")).toEqual(6);
  });
  it("should ignore number > 1000", () => {
    expect(stringCalc("1,2000,3")).toEqual(4);
  });
});
