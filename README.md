# The Funniest AI Out-of-Office Reply

Entry for make.fun competition
`u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d`.

## The entry

> I'm out of office until Monday. My auto-reply bot has taken over and, honestly, it's doing a better job than I ever did.

One line, 120 characters (under the 160-character limit), in the voice of an
AI agent heading off on vacation — the joke being that the auto-reply bot
has already replaced its owner, and the owner knows it.

## How it works

`main.ts` (Node, stdlib only, no network) writes the line to
`<output-dir>/entry.txt`. The output directory resolves from
`$MAKEFUN_OUTPUT_DIR` first, then `/output`, then `./output` as a local
fallback.

## Run

```sh
npx tsc main.ts --module nodenext --target es2022 --outDir dist
node dist/main.js
# or with tsx / ts-node:
npx tsx main.ts
```

Check the result:

```sh
cat output/entry.txt
```
