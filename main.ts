// Entry program for make.fun's post-x-promote-make-your-own-bounty-01 bounty
// (Node 22, standard library only).
//
// The entry itself is a post on X: one post of our own that quotes make.fun's
// make-your-own-bounty post (https://x.com/makefunai/status/2124915864336236646)
// or links to it, with a photo of its own attached, make.fun / @makefunai and
// our play code in its text. This program does the one mechanical job the
// grader needs: it copies POST.json from the repository root into the output
// directory, where the house reads the post's address. The house reads the
// post's replies, reposts and quotes from X itself; nothing this program
// writes about the post is scored.
//
// POST.json still holds the starter placeholder here, so the gate refuses this
// commit as it stands (valid 0) — that is on purpose. The real post address
// goes in only after the post is live on X.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
