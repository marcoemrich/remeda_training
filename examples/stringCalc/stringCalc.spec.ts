import { describe, it, expect } from "vitest";
import { stringCalc } from "./stringCalc_classic";

// "1,2,1" => 4
// "1,1000,2,3,1001" => 6

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
    expect(stringCalc("1,100,3,2000")).toEqual(104);
  });
});
