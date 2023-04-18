import { describe, expect, it } from "vitest";
import { distance, square } from "./distance";

describe("distance", () => {
  it.skip("should calculate the distance of a 2D point from 0/0", () => {
    expect(
      distance([
        [0, 0],
        [4, 3],
      ])
    ).toEqual(5);
  });

  it.skip("should calculate the distance of two 2D points", () => {
    expect(
      distance([
        [1, 1],
        [5, 4],
      ])
    ).toEqual(5);
  });
});

describe("square", () => {
  it("should return the square of a number", () => {
    expect(square(2)).toEqual(4);
  });
});
