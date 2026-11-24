import fs from "node:fs";
import path from "node:path";

// Entry text for make.fun bounty: The Funniest Toaster Error Message (84 characters)
const TOASTER_ERROR_ENTRY =
  "Error: Sourdough slice too wide. You have humiliated us both in front of the kettle.";

const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outputDirectory, { recursive: true });
fs.writeFileSync(path.join(outputDirectory, "entry.txt"), TOASTER_ERROR_ENTRY + "\n", "utf8");
