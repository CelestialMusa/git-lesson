# 🧪 Git Conflict Lab

A hands-on repo for learning how to avoid, create, and resolve Git merge conflicts.

> **Duration:** 45 minutes | **Participants:** 5+

---

## What's in here?

| File/Folder | Purpose |
|---|---|
| `services/participant-N.js` | Your personal file — safe to edit freely |
| `config/app.json` | Shared config — **this will cause conflicts** |
| `CHANGELOG.md` | Shared log — **this will also cause conflicts** |
| `PARTICIPANT_GUIDE.md` | Step-by-step instructions for participants |
| `FACILITATOR.md` | Timing guide and talking points for the facilitator |

---

## Quick Start (Participants)

```bash
git clone <repo-url>
cd git-lesson
```

Then open `PARTICIPANT_GUIDE.md` and follow the steps.

---

## The Setup

Each participant:
1. Gets assigned a number (1–5)
2. Makes changes to **their own** `services/participant-N.js` ✅ (no conflict)
3. Makes changes to **shared files** `config/app.json` and `CHANGELOG.md` ⚠️ (conflict incoming)
4. Opens a PR and merges in turn — first in, clean merge; everyone after resolves conflicts

That's the lesson.
