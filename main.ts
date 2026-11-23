import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line: string = "My food app demands a rating before it lets me order dinner — the only business asking for a review of a meal that does not exist yet.";
const targetDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(targetDir, { recursive: true });
writeFileSync(join(targetDir, "entry.txt"), line, "utf8");
