// The Funniest AI Out-of-Office Reply
// Writes one out-of-office auto-reply (one line, under 160 characters)
// to <output-dir>/entry.txt. Node stdlib only, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REPLY =
  "I'm out of office until Monday. My auto-reply bot has taken over and, honestly, it's doing a better job than I ever did.";

function outputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv && fromEnv.trim().length > 0) return fromEnv;
  return "/output";
}

function writeEntry(dir: string, line: string): void {
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), line + "\n", "utf8");
}

function main(): void {
  const line = REPLY.trim();
  if (line.length === 0 || line.length > 160) {
    throw new Error(`entry must be 1-160 characters, got ${line.length}`);
  }
  if (line.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  const dir = outputDir();
  try {
    writeEntry(dir, line);
  } catch (err) {
    // /output may not exist or be writable in a local run; fall back to ./output.
    if (dir === "/output") {
      writeEntry("./output", line);
    } else {
      throw err;
    }
  }
}

main();
