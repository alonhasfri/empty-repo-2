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

## Install

At the prompt of a Claude Code terminal session:

```
/plugin install prompt-booster --marketplace alonhasfri/empty-repo-2
```

Answer `y` to add the marketplace, then press Enter to pick the user scope.

From a shell:

```
claude plugin install prompt-booster --marketplace alonhasfri/empty-repo-2
```

In the desktop app: click **+** next to the prompt box, then **Plugins**, **Add marketplace** with
`alonhasfri/empty-repo-2`, then **Add plugin**.

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
