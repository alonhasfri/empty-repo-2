# Prompt Booster

A Claude Code plugin that makes Claude understand you better. Every message you type is rewritten
into a clearer prompt, the rewrite is shown as a small note at the top of the reply, and Claude
answers the clearer version. Your meaning is kept exactly: it only organizes and clarifies, never
guesses or adds requests.

> *Boosted prompt: What is the best way to earn in-game cash in my Roblox game? Please explain it clearly.*

- **Short messages** get a light cleanup: grammar and wording, a little fuller, same meaning.
- **Longer messages** get the full boost: the goal, the context you already gave, and each part
  separated so nothing is dropped.
- It stays on in every message and every session once installed, also in long chats.
- It only boosts what you type, never messages from other sessions, scheduled tasks or commands.
- When something you wrote could really mean two things (like an unclear "it"), Claude answers the most likely meaning first and asks one short question at the end. Clear messages get no question.

## Does it help?

In a small blind test of 20 real phone-typed messages, an independent AI judge compared answers to the
original and the boosted message without knowing which was which, and preferred the boosted answer
**16 times out of 20** (4 the other way), and it asks a follow-up question only when a message is
genuinely unclear (3 of 20 answers did, all on unclear messages). Most of the gain comes on messy, multi-part messages, which it
splits into clear requests so nothing gets skipped, and on unclear words, where Claude now answers the
likely meaning first instead of stopping to ask.

It's a small test with AI judges (the same model family as the answers), so treat it as a strong hint,
not a guarantee. Three runs: 11 to 8 (before the unclear-words rule), 16 to 4, and 16 to 4 again with fresh answers on both sides.

## Install

At the prompt of a Claude Code terminal session:

```
/plugin install prompt-booster --marketplace alonhasfri/prompt-booster
```

Answer `y` to add the marketplace, then press Enter to pick the user scope.

From a shell:

```
claude plugin install prompt-booster --marketplace alonhasfri/prompt-booster
```

In the desktop app: click **+** next to the prompt box, then **Plugins**, **Add marketplace** with
`alonhasfri/prompt-booster`, then **Add plugin**.

## Controls

Type these as a message:

| You type | What happens |
| --- | --- |
| `boost off` / `boost on` | Stop or resume boosting |
| `hide boost` / `show boost` | Keep boosting but hide the note (replies start with ✦) / show it again |
| `raw: your message` | This one message is answered exactly as written |
| `boost only` | Show the improved prompt without answering, so you can copy it |

## How it works

The plugin adds a short set of rules to Claude's system prompt (a `prompt.compose` hook in
`hooks/register.ts`). Nothing is sent anywhere else and no data is stored.

## License

MIT
