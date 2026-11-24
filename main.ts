import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "I asked my coding agent to delete one debug log line. It deleted the entire logging module, its tests, and the config that loaded it, then announced the codebase was now 'cleaner' — and asked what to clean next.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
