# Task 5 report — Agent panel stream + spotlight

**Status:** DONE_WITH_CONCERNS

**Commit:** `f66385c` `feat(web): stream Gateway turns with cell spotlight`

Product git: `univer-workspace/` on `feat/cloudflare-edge-microkernel`

## What shipped

- SSE client: `POST /agents/:unitId/turns` with `Accept: text/event-stream` and `credentials: "include"`. Incremental parse of `agent.token` / thinking / tool / done. JSON fallback via existing `readJsonBody` when `Content-Type` is not SSE.
- Panel: `aria-live="polite"` + `aria-busy` on the token region; tool chips; streamed tokens.
- Footer: `Cloudflare AI Gateway` + `cache: HIT|MISS` + truncated `aiGatewayLogId`. HIT when `skipCache: false` / cached explain prompt; missing cache flag is MISS.
- Sheet chips: `Fill E2:E4 with SUM of Jul–Sep`, `Explain the Q3 forecast in one sentence`, `Set D4 to 180`. Header title **Q3 Forecast** (unit id hidden). `agentIntro` remains an i18n key.
- Spotlight: `workspace-agent-edited` → `activate()` walks E2→E4 once (`sessionStorage` `univer-workspace-agent-replay-v1`). Replay resets and walks again. Compact `max-width: 720px` **or** `prefers-reduced-motion: reduce`: chip only.
- Presence: `workspace-agent-presence` `{ status: "thinking" | "idle" }` on pending/remote start/end.
- Spectator: `spectator?: boolean`; never POST turns; never send mux `agent.prompt`. Opens `/api/remote.mux?unitId=` listen-only for `{ ch: 2 | channel: 2 }`. Route passes `spectator={!isEditing}`.

## TDD

### RED (watched fail)

Command:

```bash
pnpm exec vitest run --config vitest.config.ts web/src/features/editor/agent-panel.test.ts web/src/features/editor/agent-edit-spotlight.test.ts test/unit/agent-collaborator.test.ts
```

Relevant output (exit 1):

```
 FAIL  web/src/features/editor/agent-edit-spotlight.test.ts
 Error: Cannot find module './agent-edit-spotlight'

 FAIL  agent panel helpers > returns unit-type examples and suggestion chips
 AssertionError: expected 'Set A1 to Hello from AI' to be 'Fill E2:E4 with SUM of Jul–Sep'

 FAIL  agent panel helpers > forbids spectators from posting turns
 TypeError: shouldPostAgentTurn is not a function

 FAIL  in-editor AI collaboration UI > exposes English and Chinese Agent copy
 AssertionError: expected '…' to match /agentGateway:/

 FAIL  streams SSE turns with live tokens Gateway footer and presence
 AssertionError: expected '…' to match /Accept:\s*"text\/event-stream"/

 FAIL  never posts turns or mux agent.prompt as a spectator
 AssertionError: expected '…' to match /spectator\?:/

 FAIL  passes spectator={!isEditing} into AgentCollaborator
 AssertionError: expected '…' to match /spectator=\{!isEditing\}/
```

Failures were missing T5 behavior (A1 chips still primary, no SSE Accept, no spotlight module, no Gateway i18n, no spectator), not typos.

### GREEN

Implemented chips, SSE/JSON consume, Gateway footer helpers, mux listen-only, spotlight, presence, spectator wiring.

Command:

```bash
pnpm exec vitest run --config vitest.config.ts web/src/features/editor/agent-panel.test.ts web/src/features/editor/agent-edit-spotlight.test.ts test/unit/agent-collaborator.test.ts
```

```
 Test Files  3 passed (3)
      Tests  21 passed (21)
```

Related (did not weaken collaboration-editor or apply-agent-edits assertions):

```bash
pnpm exec vitest run --config vitest.config.ts web/src/features/editor/agent-panel.test.ts web/src/features/editor/agent-edit-spotlight.test.ts web/src/features/editor/apply-agent-edits.test.ts test/unit/agent-collaborator.test.ts
```

```
 Test Files  4 passed (4)
      Tests  28 passed (28)
```

## Files

- `apps/workspace/web/src/features/editor/agent-collaborator.tsx`
- `apps/workspace/web/src/features/editor/agent-panel.ts` + `agent-panel.test.ts`
- `apps/workspace/web/src/features/editor/agent-edit-spotlight.ts` + `agent-edit-spotlight.test.ts`
- `apps/workspace/test/unit/agent-collaborator.test.ts`
- `apps/workspace/web/src/shared/i18n.tsx` (agent keys only)
- `apps/workspace/web/src/routes/nodes.$nodeId.tsx` (spectator + existing panel mount)
- `apps/workspace/web/src/features/editor/index.ts` (export)

Did not touch `dsh-host.ts`, `univer-agent.ts`, `catalog.ts`, `collaboration-editor.tsx`, `collaborator-avatars.tsx`.

## Concerns

- Visual cell walk calls `range.activate()` / `setActiveRange` via `bindAgentEditSpotlight({ getActiveWorkbook })`. T5 cannot rewrite `collaboration-editor.tsx` (T6), so the walk is a no-op until that host is bound. Chips, Replay, and once-per-session `sessionStorage` still work.
- HTTP SSE turns are the editor path. Current `dsh-host` mux Channel 2 is driven by WS `agent.prompt`; spectators listen but will not see tokens from a peer’s HTTP POST unless T2/T10 fans those events out. Sheet edits still land via Comb.
- Gateway HIT uses `agent.done` fields (`skipCache: false`, `cache` / `cacheHit`) plus the canned explain prompt. T2 `agent.done` currently emits `aiGatewayLogId` without an explicit cache flag; absent flag → MISS except cached-explain prompts.

## Fix wave — Important review findings

**Status:** DONE_WITH_CONCERNS

**Commit:** `fix(web): keep E2-E4 spotlight and surface agent.error` (new commit, not amend of `f66385c`)

Did not touch `dsh-host.ts`, `univer-agent.ts`, `collaboration-editor.tsx`, `collaborator-avatars.tsx`. Did not bind Univer `getActiveWorkbook`. Did not fan HTTP turns onto mux.

### Fixes

- Spotlight walk and Replay always use `AGENT_SPOTLIGHT_CELLS` (`E2`→`E3`→`E4`). `toolCalls[].args.cells` (Set D4, Fill that only records E2) may still populate `agentChangedCells` chips via `spotlightCellsFromDetail`, but they no longer replace the walk or consume `univer-workspace-agent-replay-v1` for a different path.
- `consumeAgentTurnResponse` treats `agent.error` in SSE or JSON `events` as failure (`body.error`). `submit` checks `pendingRef.current` before the await, does not append a turn, and does not dispatch `workspace-agent-edited` on `agent.error`. Mux `agent.error` also no longer appends a turn or dispatches edited.
- JSON fallback lifts `aiGatewayLogId` / `skipCache` / `cache` from `events` where `type === "agent.done"` so the footer truncated id works without a top-level id.

### TDD

#### RED (watched fail)

Command:

```bash
pnpm exec vitest run --config vitest.config.ts web/src/features/editor/agent-panel.test.ts web/src/features/editor/agent-edit-spotlight.test.ts test/unit/agent-collaborator.test.ts
```

Relevant output (exit 1):

```
 FAIL  web/src/features/editor/agent-edit-spotlight.test.ts
 AssertionError: expected [ 'D4' ] to deeply equal [ 'E2', 'E3', 'E4' ]
 AssertionError: expected [ 'D4' ] to deeply equal [ 'E2', 'E3', 'E4' ]
 AssertionError: expected [ 'E2' ] to deeply equal [ 'E2', 'E3', 'E4' ]
 AssertionError: expected [ 'D4' ] to deeply equal [ 'E2', 'E3', 'E4' ]

 FAIL  web/src/features/editor/agent-panel.test.ts
 AssertionError: expected undefined to be 'aig_json_fallback_id'
 AssertionError: expected undefined to deeply equal { message: 'Prompt is required' }
 AssertionError: expected undefined to deeply equal { message: 'Agent is busy' }

 FAIL  test/unit/agent-collaborator.test.ts
 AssertionError: expected '…' to match /pendingRef\.current\s*=\s*true/

 Test Files  3 failed (3)
      Tests  8 failed | 21 passed (29)
```

Failures were missing review behavior (tool cells still drove the walk, JSON did not lift Gateway id or `agent.error`, `pendingRef` still mirrored React state), not typos.

#### GREEN

Command:

```bash
pnpm exec vitest run --config vitest.config.ts web/src/features/editor/agent-panel.test.ts web/src/features/editor/agent-edit-spotlight.test.ts test/unit/agent-collaborator.test.ts
```

```
 Test Files  3 passed (3)
      Tests  29 passed (29)
```

### Files

- `apps/workspace/web/src/features/editor/agent-edit-spotlight.ts` + `agent-edit-spotlight.test.ts`
- `apps/workspace/web/src/features/editor/agent-panel.ts` + `agent-panel.test.ts`
- `apps/workspace/web/src/features/editor/agent-collaborator.tsx`
- `apps/workspace/test/unit/agent-collaborator.test.ts`

### Concerns (unchanged)

- Visual cell walk is still a no-op until T6 binds `getActiveWorkbook` in the collaboration host.
- HTTP SSE turns are not fanned onto mux Channel 2 (intentionally out of scope).
- T2 `agent.done` still often omits an explicit cache flag; absent flag → MISS except cached-explain prompts. JSON lift now carries `skipCache` when the event includes it.
