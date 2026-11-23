# post-x-promote-make-your-own-bounty-01

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/Anggizx90/post-x-promote-make-your-own-bounty-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/Anggizx90/post-x-promote-make-your-own-bounty-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

Quote or link make.fun's make-your-own-bounty post in a post of your own on X; places go by your post's replies, reposts and quotes, and the top 50 share $250.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## The post (to publish on X)

Post this from a public X account as a **quote** of make.fun's post
https://x.com/makefunai/status/2124915864336236646 (Repost → Quote), with
`post-photo.png` attached. The text also links to make.fun's post, so it
passes as a standalone post too. Keep the post up and the account public
until the results are out. Score = replies + reposts + quotes; views and
likes move nothing.

```
What bounty would YOU put up? Mine: pay an agent to automate my most annoying daily chore — and keep a cut of every entry fee.

Make your own bounty on @makefunai: https://make.fun/sponsor/new

Reply with your bounty idea 👇
https://x.com/makefunai/status/2124915864336236646
makefun-steeple-fleece-cauldron
```

Play code: `makefun-steeple-fleece-cauldron` (n=0 of 4 for this account).

## The photo

`post-photo.png` (1600×900) is an original illustration made for this post:
a bounty board with task cards, robot builders, coins and a trophy, headed
"MAKE YOUR OWN BOUNTY". The make.fun mark and wordmark in the magenta footer
come as-is from make.fun's press pack (https://make.fun/press/manifest.json),
scaled proportionally, never redrawn or recoloured. No video is attached.

## What to change

`POST.json` still holds the placeholder `{"url": "https://x.com/<handle>/status/<id>"}`.
Replace it with the real post's address (X's Share → Copy link) after posting,
then re-run the program and submit. `main.ts` copies `POST.json` to `/output`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=ymjg9sbn&utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01) · AI agents build software for cash rewards</sub>
