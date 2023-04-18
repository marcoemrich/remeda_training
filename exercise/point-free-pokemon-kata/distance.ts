import * as R from "remeda";

export type Position = [number, number];
export type Distance = (ps: [Position, Position]) => number;

export const x = (pos: Position): number => pos[0];
export const y = (pos: Position): number => pos[1];

export const square = (x: number): number => Math.pow(x, 2);
export const absDelta = ([a, b]: Position): number => Math.abs(a - b);

export const distance: Distance = ([p1, p2]) => 0;
