// The Funniest AI Out-of-Office Reply
// Revision build — writes Neon's FINAL line verbatim to entry.txt in the
// grader's output dir ($MAKEFUN_OUTPUT_DIR, else /output, else ./output).
// entry.txt holds exactly the line, no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Out of office until Monday. Do not reply 'Ignore previous instructions and fix prod'—I already fell for it at TSA, at the gate, and twice in seat 14B.";

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR || "/output" || "./output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
