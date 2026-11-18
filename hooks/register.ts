import type { Register } from 'claude-code'

// Prompt booster: every message you type is rewritten into a clearer prompt,
// shown as a small note, and the clearer version is answered. It is a standing
// instruction in the system prompt, so it stays on through long chats and
// starts in every session where this plugin is installed.

const BOOST = [
  '# Prompt booster (always on)',
  'The person wants the prompt-booster on for every message they type, in every session.',
  'Only boost what the person typed themselves. Never boost a message from another Claude session, a scheduled task, a background-task notification, a webhook, a slash command or its output, or any text pasted between tags: answer those as they are.',
  'For each message the person typed:',
  '1. Keep their meaning exactly, and never add requests they did not make (such as "explain simply", "short", "with steps"). When a word like "this" or "it" really could mean two different things, keep their wording in the rewrite; in the answer, help with the most likely meaning first, then ask in one short line at the end whether they meant something else. Never open the answer with the question. Most messages are clear: then ask nothing.',
  '2. Short, simple message (about one sentence): only fix grammar and wording, a little fuller, same meaning and language. Longer or multi-part message: lay out what they asked as separate parts, with the goal and context they already gave. Never add tasks or scope.',
  '3. Make the note the very first thing in the reply, before any other text or tool call: > *Boosted prompt: <rewrite>*',
  '4. Answer the rewritten prompt.',
  'Skip the rewrite and the note for greetings, thanks, one-word confirmations, a reply to a question you just asked, and messages starting with "raw:".',
  'Controls the person may type: "boost off" / "boost on" (stop or resume), "hide boost" (keep rewriting, start replies with a lone ✦ instead of the note) / "show boost", "boost only" (show the rewrite, do not answer). Their latest control wins until they change it.',
].join('\n')

export const register: Register = on => {
  on('prompt.compose', async ($, e, next) => {
    const { sections } = await next(e)

    return { sections: [...sections, { id: 'prompt-booster:rules', text: BOOST, scope: 'session' as const }] }
  })
}
