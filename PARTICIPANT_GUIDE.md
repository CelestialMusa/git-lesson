# 📋 Participant Guide

> You've been assigned a number. Use it everywhere below where you see `N`.

---

## Setup

```bash
# Clone the repo (facilitator will give you the URL)
git clone <repo-url>
cd git-lesson

# Confirm you're on main and it's up to date
git checkout main
git pull origin main
```

---

## Phase 1 — Branch & Make Your Changes (10 min)

### Step 1: Create your branch off `main`

```bash
git checkout -b feature/participant-N-update
# Example: git checkout -b feature/participant-3-update
```

✅ You should now be on your new branch. Confirm with:
```bash
git branch
```

---

### Step 2: Edit YOUR file (no conflict — this is yours alone)

Open `services/participant-N.js` and find the comment that says `// YOUR TASK`.

Change the `status` field from `"inactive"` to `"active"` and update the `description` to something short and real — what you're currently working on at work.

**Example:**
```js
// Before
status: "inactive",
description: "Update this with your current focus area",

// After
status: "active",
description: "Migrating auth service to Azure AD B2C",
```

Save the file.

---

### Step 3: Edit the SHARED config (this WILL conflict for some of you)

Open `config/app.json`.

Find the `"contributors"` array and add your name:

```json
"contributors": [
  "Add your name here"
]
```

Also update the `"last_updated"` field to today's date.

**Example result:**
```json
{
  "app_name": "git-conflict-lab",
  "version": "1.0.0",
  "last_updated": "2026-03-18",
  "contributors": [
    "Thabo Nkosi"
  ]
}
```

Save the file.

---

### Step 4: Edit the SHARED changelog (this WILL also conflict)

Open `CHANGELOG.md`.

Under `## [Unreleased]`, add a single bullet with your name and what you "added":

```markdown
## [Unreleased]

- [Participant 3 - Thabo Nkosi] Added auth service migration config
```

Save the file.

---

### Step 5: Commit your changes

```bash
git add .
git status   # review what you're about to commit — good habit

git commit -m "feat: participant N update — <your name>"
# Example: git commit -m "feat: participant 3 update — Thabo Nkosi"
```

**⏸ Stop here. Wait for the facilitator before pushing.**

---

## Phase 2 — Push & Open a PR (7 min)

```bash
git push origin feature/participant-N-update
```

Then go to the repo on GitHub/Azure DevOps and open a Pull Request:
- **Base branch:** `main`
- **Title:** `feat: Participant N update — <your name>`
- **Description:** One sentence describing your change

**⏸ Stop here. Wait for Participant 1 to merge first.**

---

## Phase 3 — Merge in Order & Resolve Conflicts (15 min)

The facilitator will call your number. When it's your turn:

### If you are Participant 1:
Your PR will merge cleanly. Go ahead and merge it. Watch what happens to everyone else's PRs after you do.

---

### If you are Participant 2–5:
Your PR will show a conflict. Here's how to fix it:

**Step 1: Sync your branch with the updated `main`**
```bash
git fetch origin
git rebase origin/main
```

**Step 2: Git will stop and tell you there's a conflict. Check which files:**
```bash
git status
```

**Step 3: Open the conflicted file(s). You'll see markers like this:**
```
<<<<<<< HEAD (your changes)
  "last_updated": "2026-03-18",
  "contributors": ["Your Name"]
=======
  "last_updated": "2026-03-18",
  "contributors": ["Someone Else"]
>>>>>>> origin/main
```

**Step 4: Edit the file to keep BOTH contributions (that's the goal):**
```json
"last_updated": "2026-03-18",
"contributors": [
  "Someone Else",
  "Your Name"
]
```

Remove all `<<<<<<<`, `=======`, `>>>>>>>` markers.

**Step 5: Stage the resolved file and continue**
```bash
git add config/app.json
git add CHANGELOG.md          # if this also conflicted
git rebase --continue
```

**Step 6: Push your updated branch**
```bash
git push origin feature/participant-N-update --force-with-lease
```

> ⚠️ `--force-with-lease` is the safe version of `--force`. It only overwrites if no one else has pushed to your branch in the meantime.

**Step 7: Your PR should now show no conflicts. Get an approval and merge.**

---

## 🆘 Something went wrong?

```bash
# Bail out of the rebase entirely and start Phase 3 again
git rebase --abort

# See every action git has recorded (your safety net)
git reflog

# Undo your last commit but keep the file changes
git reset --soft HEAD~1
```

Call the facilitator over — getting stuck is part of the lesson.

---

## ✅ Done? Run this and show the facilitator:

```bash
git log --oneline --graph --all
```

You should see a clean, linear history where every participant's commit landed on `main`.
