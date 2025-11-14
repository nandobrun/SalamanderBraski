import { expect } from "jsr:@std/expect"
import { Board } from "./Board.js"

const start = [
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,1,2,0,0,0],
  [0,0,0,2,1,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0]
]

Deno.test("gueltiger zug fuer spieler 1", () => {
  const b = Board.of(start)
  expect(b.isValidMove(1, 2, 4)).toBe(true)
})

Deno.test("feld von eigenem stein belegt", () => {
  const b = Board.of(start)
  expect(b.isValidMove(1, 3, 3)).toBe(false)
})

Deno.test("row ausserhalb", () => {
  const b = Board.of(start)
  expect(b.isValidMove(1, -1, 3)).toBe(false)
})

Deno.test("col ausserhalb", () => {
  const b = Board.of(start)
  expect(b.isValidMove(1, 3, 99)).toBe(false)
})

Deno.test("keine umwandlung", () => {
  const b = Board.of(start)
  expect(b.isValidMove(1, 0, 0)).toBe(false)
})

Deno.test("ungueltiger spieler", () => {
  const b = Board.of(start)
  expect(b.isValidMove(0, 2, 3)).toBe(false)
})