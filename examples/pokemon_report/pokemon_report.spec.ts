import { describe, expect, it } from "vitest";
import { report } from "./report";

type Pokemon = { name: string; cp: number };
export type Team = Pokemon[];
export type League = "Great" | "Ultra" | "Master";
type LeagueReport = {
  count: number;
  cpAverage: number;
  names: string[];
};

const team: Team = [
  { name: "Pikachu", cp: 800 },
  { name: "Pikachu", cp: 900 },
  { name: "Bulbasaur", cp: 2700 },
  { name: "Magikarp", cp: 50 },
  { name: "Mewto", cp: 3200 },
];

describe("pokemonReport", () => {
  it("creates a report grouped by league, with number, hp and cp average", () => {
    expect(report(team)).toEqual({
      Great: {
        count: 3,
        cpAverage: 583,
        names: ["Pikachu", "Magikarp"],
      },
      Master: {
        count: 2,
        cpAverage: 2950,
        names: ["Bulbasaur", "Mewto"],
      },
    });
  });
});
