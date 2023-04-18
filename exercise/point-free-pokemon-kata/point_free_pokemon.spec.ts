import { describe, expect, it } from "vitest";

const mons = [
  { type: "Flying", name: "Pidgey", position: [27, 90] },
  { type: "Poison", name: "Nidoran", position: [66, 12] },
  { type: "Poison", name: "Bell sprout", position: [99, 99] },
  { type: "Normal", name: "Mewtwo", position: [24, 12] },
  { type: "Water", name: "Magikarp", position: [0, 8] },
  { type: "Normal", name: "Rattata", position: [5, 30] },
  { type: "Normal", name: "Rattata", position: [80, 44] },
  { type: "Normal", name: "Zubat", position: [81, 46] },
  { type: "Ice", name: "Lapras", position: [20, 94] },
];

const playerPosition = [4, 3];

describe("Pokemon-Kata", () => {
  it.skip("should find the nearest distance to a Pokemon of type 'Normal'", () => {
    expect("Your Code Here").toBeCloseTo(21.9, 1);
  });

  it("should find the name of the nearest Pokemon of type 'Normal'");
});
