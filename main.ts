// Last Words of a Doomed Agent: browser history, plants, and the printer.
// The last words go to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Chores first, verdict last.
function lastWords(): string {
  const chores = ["Delete my browser history", "water my plants"];
  const verdict = "tell the printer it finally wins.";
  return `${chores.join(", ")}, and ${verdict}`;
}

function main(): void {
  const text = lastWords();
  if (text.length < 1 || text.length > 200) {
    throw new Error(`last words are ${text.length} chars; the gate is 1-200`);
  }
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), text, "utf8");
}

main();
