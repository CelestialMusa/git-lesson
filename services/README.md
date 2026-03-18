# Services

Each participant owns one file in this directory.

| File | Owner |
|---|---|
| `participant-1.js` | Participant 1 |
| `participant-2.js` | Participant 2 |
| `participant-3.js` | Participant 3 |
| `participant-4.js` | Participant 4 |
| `participant-5.js` | Participant 5 |

**Rule:** Only edit your assigned file here. The conflicts will come from the shared files in `config/` and `CHANGELOG.md` — that's intentional.

If you have more than 5 participants, the facilitator will create additional `participant-N.js` files:

```bash
cp services/participant-5.js services/participant-6.js
sed -i 's/5/6/g' services/participant-6.js
```
