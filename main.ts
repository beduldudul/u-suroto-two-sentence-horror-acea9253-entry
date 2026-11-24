// Two-Sentence Horror — the program writes its story to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const story =
  "I found my own obituary in tomorrow's newspaper, filed under the wrong date. " +
  "The photograph was taken tonight, in a house I have never visited, by someone standing behind me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", story, "utf8");
