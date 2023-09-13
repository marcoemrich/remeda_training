import * as R from "remeda";
import { League, Team } from "./pokemon_report.spec";

const league = (cp: number): League => {
  if (cp < 1000) return "Great";
  if (cp < 2500) return "Ultra";
  return "Master";
};
const average = (ns: number[]): number => R.sumBy(ns, R.identity) / ns.length;

export const report = (team: Team) =>
  R.pipe(
    team,
    R.groupBy(R.createPipe(R.prop("cp"), league)),
    R.mapValues((pokemons) => ({
      count: pokemons.length,
      cpAverage: R.pipe(pokemons, R.map(R.prop("cp")), average, Math.round),
      names: R.pipe(pokemons, R.map(R.prop("name")), R.uniq),
    }))
  );
