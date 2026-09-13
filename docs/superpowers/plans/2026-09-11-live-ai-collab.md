# Live AI Collaboration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.
>
> **Controller note:** The parent session already dispatched one implementer per task (dispatching-parallel-agents). Do **not** re-dispatch. This file is the shared spec + exclusive file ownership. Implementers already running must read **only their task** plus Global Constraints.

**Goal:** Finish and polish Univer Workspace on `feat/cloudflare-edge-microkernel` so every product surface works live and deployed — Browser, Workspace Agent, CLI, collab/history/Worktrees, and in-editor AI collaboration — using [univer-sdk-skills](https://github.com/dream-num/univer-sdk-skills) as the Facade / Pro collab / Node-backend example source, not a new protocol.

**Architecture:** Cloudflare Worker gateway (`src/server.ts`) authenticates against D1, stores blobs in R2, and routes Universer + agent traffic to a single ChatAgent Durable Object (`idFromName("univer_collab")`) that hosts the Cordis microkernel, snapshot/OT SQLite, history, and Skill-backed agent turns. CLI / Node-hosted shells use `packages/client-core`. Workspace Agent DSH tools use Cordis `workspaceAuth.currentClient()`. The Browser loads units with `loadServerUnit` / Pro collaboration URLs and reviews Worktree drafts before a human merge.

**Tech Stack:** Cloudflare Workers + Durable Objects + D1 + R2 + Workers AI (`AI` binding), Cordis 4.0.2, Univer / Univer Pro `1.0.0-insiders.20260907-70fc579`, React 19 Browser, React 18 DSH Agent, pnpm 11, Node >= 24, TypeScript ESM, `node:test` for edge tests, Vitest for app packages.

## Global Constraints

- Branch: `feat/cloudflare-edge-microkernel` only. Never start or commit work on `main` or `master`.
- Do not use `composer-2.5-fast` or any "fast" implementer/reviewer model. User forbade fast agents.
- Example source of truth for Facade, Pro collab, and Node backend: `https://github.com/dream-num/univer-sdk-skills` (local clone cache: `univer-workspace/.cache/univer-sdk-skills`). Do **not** commit `.cache/` as the product catalog. Copy recipes into owned product files.
- Do **not** invent a second collaboration protocol. Mutations are stored snapshots + OT changesets on Universer paths the Browser already uses.
- Universer URLs (verbatim): snapshot ` /universer-api/snapshot/:type/unit/:unitID[/rev/:revision] `, submit ` /universer-api/comb/:type/unit/:unitID/new_changes `, websocket ` /universer-api/comb/connect `, history ` /universer-api/history/:unitID/list|creators|cs `.
- Browser collab client (univer-sdk-skills collaboration-guide): `snapshotServerUrl` = `/universer-api/snapshot`, `collabSubmitChangesetUrl` = `/universer-api/comb`, `collabWebSocketUrl` = `wss://<host>/universer-api/comb/connect` (or `ws:` on http), `loadServerUnit(unitId, unitType)` / `collaboration.loadSheetAsync(unitId)` to open shared units, **`enableOfflineEditing: false`** for live AI collab (current code is `true` — Task 5 changes it).
- ChatAgent identity stays `env.ChatAgent.idFromName("univer_collab")`. Do not shard by `docId` in this plan (blueprint text is stale vs live code).
- Facade action ids (verbatim): `univer.unit.getSnapshot`, `univer.sheet.getRange`, `univer.sheet.setRange`, `univer.doc.getText`, `univer.doc.appendText`, `univer.history.list`, `univer.skills.list`, `univer.skills.get`. LLM tool names use underscores (`univer_sheet_setRange`); `executeTool` maps `_` back to `.`.
- Agent member: `AGENT_MEMBER_ID` = `agent_workspace`, `AGENT_USER_ID` = `agent_workspace`, `AGENT_USER_NAME` = `Workspace Agent`.
- Agent HTTP: `GET /agents`, `GET /agents/skills`, `POST /agents/:unitId/turns` with body `{ "prompt": "Set A1 to Hello from AI" }`. POST requires `workspace_session` (401 without). GET catalog/skills may be unauthenticated.
- Mux Channel 2 frames use **`ch: 2`** (`multiplexer-protocol.md`). Include `ch` on every agent frame; `channel` may be duplicated for compatibility.
- Channel 2 event types (verbatim): `agent.prompt`, `agent.thinking`, `agent.tool_call_start`, `agent.tool_call_result`, `agent.token`, `agent.done`, `agent.error`.
- Worktree: create → agent edits isolated `unit_wt_*` draft → Ready → human review → Merge copies draft snapshot onto trunk unitId, or Reopen/Discard. Merge is a human decision. Discard never rolls back an already merged trunk.
- Live worker: `https://univer-workspace.apisos.workers.dev`. Seeded login: username `admin`, password `password123`.
- Wrangler: `name` = `univer-workspace`, `main` = `src/server.ts`, `compatibility_date` = `2026-07-29`, `compatibility_flags` = `["nodejs_compat"]`, D1 binding `DB` database_name `univer-workspace-db` database_id `6dafe15b-fb54-4ef1-99ad-6b4c09be3d19`, R2 binding `BLOB_BUCKET` bucket `univer-workspace-blobs`, AI binding `AI`, assets directory `./apps/workspace/dist/public`, `not_found_handling` = `single-page-application`.
- `run_worker_first` must keep (and Task 2 must not remove): `/agents`, `/agents/*`, `/api`, `/api/*`, `/universer-api/*`, `/auth/*`, `/healthz`, `/spaces/*`.
- Univer-pro patches: prefer `vendor/univer-pro/<pkg>/lib/es/**`. Keep vendor copies in-tree. Do not patch `umd/`. Apply into `node_modules` via `scripts/deobfuscate-univer-pro.mjs` unlink-first; do not mutate the pnpm store in place.
- SDK baseline moves together: `@univer-cli/*`, `@univerjs/*`, `@univerjs-pro/*` at `1.0.0-insiders.20260907-70fc579`. Do not bump one package alone.
- React 19 stays in Workspace Browser; React 18 stays in DSH Agent. Do not unify React or Redi instances.
- DSH plugin HTTP goes through `workspaceAuth.currentClient().request` (`WorkspaceHttpClient` in `packages/dsh-univer-workspace-plugin/src/provider/workspace-contract.ts`). Do not add an npm dependency from the DSH plugin onto `@univerjs/univer-workspace-client-core`.
- Task 2 `scripts/edge-smoke.mjs` turn assertion is a join with Task 3. Task 2 still owns wrangler/D1/R2 deploy. If `/agents/:id/turns` is not writing `rev` yet, Task 2 reports DONE_WITH_CONCERNS and does **not** change the agent protocol.
- Published SDK contracts only, except in-tree `vendor/univer-pro/**/lib/es` patches.
- Tests: edge `pnpm exec tsx --test test/*.test.ts`; app packages via existing Vitest filters. Do not weaken assertions or skip live verification.
- Commits (implementers only): Conventional Commits English `type(scope): description`. Planner session does not commit.
- Exclusive file ownership below is mandatory because tasks run in parallel. If you need a file you do not own, stop and report BLOCKED rather than editing it.

### Exclusive file ownership

| Task | Owns (create/modify/test) | Must not touch |
| --- | --- | --- |
| 1 SDK skills → Agent + DSH | `src/plugins/univer-skills.ts`, `packages/dsh-univer-workspace-plugin/skills/**`, `packages/dsh-univer-workspace-plugin/src/skills/plugin.ts`, `packages/dsh-univer-workspace-plugin/test/skills-smoke.test.ts`, `apps/agent/README.md` (Skills / live origin section only), `test/univer-skills.test.ts` | agent runtime, wrangler, collab SQLite, Browser UI |
| 2 Cloudflare live deploy | `wrangler.jsonc`, `docs/deployment/runbook.md`, `scripts/edge-smoke.mjs`, `test/edge-deploy-contract.test.ts`, README live-deploy bullets only | Facade actions, DSH tools, Browser components |
| 3 Full AI collaboration | `src/plugins/univer-agent.ts`, `src/plugins/univer-facade-actions.ts`, `src/plugins/univer-snapshot.ts`, `packages/client-core/src/agent.ts`, `packages/client-core/src/index.ts` (re-export only), `packages/client-core/test/agent.test.ts`, `packages/dsh-univer-workspace-plugin/src/tools/agent-edge.ts`, `packages/dsh-univer-workspace-plugin/src/tools/plugin.ts` (register + dispose only), `packages/dsh-univer-workspace-plugin/test/agent-edge.test.ts`, `test/univer-agent.test.ts`, `docs/specifications/api-reference.md` section 8 | wrangler.jsonc, `univer-collab.ts`, Browser editor files, DSH `package.json` dependencies |
| 4 Collab / history / Worktrees | `src/plugins/univer-collab.ts`, `src/plugins/univer-tools.ts`, `src/control-plane/gateway.ts` (Worktrees block + `collabClone`/`collabCopySnapshot` helpers), `src/control-plane/db.ts` (worktree tables/queries), `src/integrations/univer-history.ts`, `src/project/dsh-host.ts` (`/universer-api/*` and `/internal/collab/*` only), `vendor/univer-pro/**/lib/es/**`, `test/univer-history.test.ts`, `test/univer-collab-worktree.test.ts`, `docs/specifications/api-reference.md` sections 5–7 | `univer-agent.ts`, `univer-skills.ts`, Browser UI, wrangler.jsonc |
| 5 Browser UI live verification | `apps/workspace/web/src/features/editor/agent-collaborator.tsx`, `apps/workspace/web/src/features/editor/collaboration-editor.tsx`, `apps/workspace/web/src/features/editor/index.ts`, `apps/workspace/web/src/routes/nodes.$nodeId.tsx`, `apps/workspace/web/src/shared/i18n.tsx`, `apps/workspace/test/unit/agent-collaborator.test.ts`, `docs/deployment/runbook.md` **Browser verification** subsection only if Task 2 has already added the heading | server plugins, client-core, wrangler.jsonc |

**Shared files with section locks (edit only your marked region):**

- `src/server.ts`: Task 2 may add `/healthz` metadata. Task 3 must not remove `/agents` routing. Task 4 must not remove `/universer-api` routing. Prefer **not** editing this file unless a prefix is missing from the existing lists.
- `src/project/dsh-host.ts`: Task 3 owns the `if (url.pathname === "/agents" …)` block and Channel 2 `agent.prompt` handler. Task 4 owns `/universer-api/*` and `/internal/collab/*`. Do not reformat the other block.
- `src/kernel/catalog.ts`: frozen. `univer-agent` is already a seed plugin.
- `test/worker-gateway.test.ts`: frozen. Add new test files instead of expanding this file (parallel-merge hazard).
- `packages/dsh-univer-workspace-plugin/src/tools/edit.ts`: frozen. Task 3 adds `agent-edge.ts` beside it.

---

## File structure (locked)

```text
src/plugins/univer-skills.ts              Task 1  Skill catalog (sdk-skills + workspace-cli)
src/plugins/univer-agent.ts               Task 3  HTTP turns + Channel 2 + Workers AI loop
src/plugins/univer-facade-actions.ts      Task 3  Action engine Facade tools
src/plugins/univer-snapshot.ts            Task 3  A1 / setValues / doc text helpers
src/plugins/univer-collab.ts              Task 4  snapshots, changesets, clone, copy
src/plugins/univer-tools.ts               Task 4  DO-local worktree journal (not D1 product)
src/project/dsh-host.ts                   Task 3/4 section-locked
src/control-plane/gateway.ts              Task 4  D1 Worktree REST + collabClone/copy
src/integrations/univer-history.ts        Task 4  history list/creators/cs bodies
wrangler.jsonc                            Task 2
scripts/edge-smoke.mjs                    Task 2
packages/client-core/src/agent.ts         Task 3  Node-hosted /agents client
packages/dsh-univer-workspace-plugin/skills/**   Task 1
packages/dsh-univer-workspace-plugin/src/tools/agent-edge.ts  Task 3
apps/workspace/web/src/features/editor/agent-collaborator.tsx Task 5
vendor/univer-pro/<pkg>/lib/es/**         Task 4  in-tree Pro patches
```

---

### Task 1: SDK skills catalog into Agent + DSH plugins

**Files:**
- Modify: `src/plugins/univer-skills.ts`
- Modify: `packages/dsh-univer-workspace-plugin/skills/univer/SKILL.md`
- Modify: `packages/dsh-univer-workspace-plugin/skills/univer-sheet/SKILL.md`
- Modify: `packages/dsh-univer-workspace-plugin/skills/univer-doc/SKILL.md`
- Modify: `packages/dsh-univer-workspace-plugin/src/skills/plugin.ts` (description strings only if SKILL.md frontmatter changes)
- Modify: `packages/dsh-univer-workspace-plugin/test/skills-smoke.test.ts`
- Modify: `apps/agent/README.md` (add "Live Cloudflare origin" + "Skills sources")
- Create: `test/univer-skills.test.ts`

**Interfaces:**
- Consumes: `AgentSkill { id, name, source, summary, body }` already exported from `univer-skills.ts`.
- Produces: `AGENT_SKILLS` ids exactly `core`, `sheet`, `doc`, `collaboration`, `worktree`. Sources: `core`/`worktree` = `"univer-workspace-cli"`; `sheet`/`doc`/`collaboration` = `"univer-sdk-skills"`. `agentSystemPrompt(unitId: string): string` must contain `Never create a blank local unit` and `loadServerUnit`.
- Produces: DSH bundled skill names remain exactly the eight: `univer`, `univer-base`, `univer-board`, `univer-cross-unit-formula`, `univer-doc`, `univer-embed`, `univer-sheet`, `univer-slide`. Do not add a ninth candidate.
- Does not produce runtime tools; Task 3 consumes the catalog.

- [ ] **Step 1: Write the failing edge catalog test**

Create `test/univer-skills.test.ts`:

```ts
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { AGENT_SKILLS, agentSystemPrompt, getAgentSkill, listAgentSkills } from "../src/plugins/univer-skills.ts";

describe("univer-sdk-skills catalog", () => {
  test("exposes the five operational Skills with locked sources", () => {
    assert.deepEqual(listAgentSkills().map((s) => s.id), ["core", "sheet", "doc", "collaboration", "worktree"]);
    assert.equal(getAgentSkill("sheet")?.source, "univer-sdk-skills");
    assert.equal(getAgentSkill("doc")?.source, "univer-sdk-skills");
    assert.equal(getAgentSkill("collaboration")?.source, "univer-sdk-skills");
    assert.equal(getAgentSkill("core")?.source, "univer-workspace-cli");
    assert.equal(getAgentSkill("worktree")?.source, "univer-workspace-cli");
  });

  test("sheet skill quotes Facade setValues / getRange recipes", () => {
    const body = getAgentSkill("sheet")!.body;
    assert.match(body, /getRange\('A1'\)/);
    assert.match(body, /setValues/);
    assert.match(body, /\{ v \}/);
    assert.match(body, /\{ f: '=SUM\(A1:A3\)' \}/);
  });

  test("collaboration skill forbids createUnit on a server unitId", () => {
    const body = getAgentSkill("collaboration")!.body;
    assert.match(body, /loadServerUnit/);
    assert.match(body, /\/universer-api\/snapshot/);
    assert.match(body, /\/universer-api\/comb/);
    assert.match(body, /\/universer-api\/history\//);
    assert.doesNotMatch(body, /createUnit\(.*same unitId/i);
  });

  test("system prompt binds the current unitId and Worktree merge rule", () => {
    const prompt = agentSystemPrompt("unit_welcome_sheet");
    assert.match(prompt, /unit_welcome_sheet/);
    assert.match(prompt, /Never create a blank local unit/);
    assert.match(prompt, /Merge is a human review decision/);
    assert.equal(AGENT_SKILLS.length, 5);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm exec tsx --test test/univer-skills.test.ts`

Expected: FAIL — sheet body does not yet contain `getRange('A1')` / `setValues` recipes.

- [ ] **Step 3: Expand `AGENT_SKILLS` from sdk-skills (do not invent a DSL)**

In `src/plugins/univer-skills.ts`, keep the five ids. Replace the `sheet`, `doc`, and `collaboration` bodies with these exact strings (other fields unchanged):

```ts
{
  id: "sheet",
  name: "Sheet Facade",
  source: "univer-sdk-skills",
  summary: "univer-integrate recipes for ranges, values, and formulas.",
  body: `Prefer batch range writes over cell-by-cell loops. Recipes from univer-sdk-skills univer-integrate:

const sheet = univerAPI.getActiveWorkbook()!.getActiveSheet()!;
sheet.getRange('A1').setValue({ v: 'Hello' });
sheet.getRange('A1:B2').setValues([[{ v: 1 }, { v: 2 }], [{ v: 3 }, { v: 4 }]]);
sheet.getRange('C1').setValue({ f: '=SUM(A1:A3)' });

- Address cells with A1 notation (A1, B2, AA10).
- Literal values use { v } ; formulas use { f: '=SUM(A1:A3)' }.
- After writing, getRange on the same addresses to verify stored values.
- Collaboration units are loaded from the server snapshot — never create a blank local unit with the same unitId.`
},
{
  id: "doc",
  name: "Doc authoring",
  source: "univer-sdk-skills",
  summary: "Document body text on collaborative Units.",
  body: `Document snapshots store body text in originalMeta. Append or replace plain text, then read it back with univer.doc.getText. Do not invent pagination or styles unless the user asked. On a collaborative Doc, load the server unit first; do not createUnit with the server unitId.`
},
{
  id: "collaboration",
  name: "Pro collaboration",
  source: "univer-sdk-skills",
  summary: "loadServerUnit, flush, history, and Universer endpoints.",
  body: `Univer Pro collaboration (univer-sdk-skills univer-pro-integrate/collaboration-guide) loads persisted server units through /universer-api/snapshot, submits OT changesets through /universer-api/comb, and streams presence over /universer-api/comb/connect.

loadServerUnit(unitId) / collaboration.loadSheetAsync(unitId) is the only way to open a shared unit. Never createUnit with that unitId. History lives at /universer-api/history/:unitId/list|creators|cs.

enableOfflineEditing must be false for live AI collaboration so agent changesets appear immediately.

Agents must apply mutations as changesets (revision + mutations) so humans see them in the live editor and in history.`
}
```

Update `agentSystemPrompt` so it includes `loadServerUnit`:

```ts
export function agentSystemPrompt(unitId: string): string {
  return `You are the Univer Workspace agent. You operate on remote collaborative Units using Workspace Worktrees and the Univer Facade.

Current unitId: ${unitId}

Rules from univer-sdk-skills and univer-workspace-cli:
- Never create a blank local unit with the same id as a server unit. Use loadServerUnit.
- Prefer range writes (setRange) over one-off loops.
- Read back stored values after editing.
- Isolate new tasks in a Worktree. Merge is a human review decision.
- Use tools instead of claiming you edited the document.

Available skills: ${AGENT_SKILLS.map((skill) => skill.id).join(", ")}.`;
}
```

- [ ] **Step 4: Embed the same rules in DSH bundled SKILL.md files**

In `packages/dsh-univer-workspace-plugin/skills/univer/SKILL.md`, after the existing Worktree workflow, append:

```markdown
## Live Cloudflare collaboration (univer-sdk-skills)

Remote Units on the Workspace origin are collaborative. Open them with `loadServerUnit` / the existing `univer_open` tools. Do not `createUnit` with a server `unitId`.

Universer paths:
- snapshot: `/universer-api/snapshot/:type/unit/:unitID`
- changeset: `/universer-api/comb/:type/unit/:unitID/new_changes`
- history: `/universer-api/history/:unitID/list`

Live origin used by this fork: `https://univer-workspace.apisos.workers.dev`.
```

In `packages/dsh-univer-workspace-plugin/skills/univer-sheet/SKILL.md`, under **Common APIs**, add:

```markdown
## univer-sdk-skills Facade recipes

```js
sheet.getRange('A1').setValue({ v: 'Hello' });
sheet.getRange('A1:B2').setValues([[{ v: 1 }, { v: 2 }], [{ v: 3 }, { v: 4 }]]);
sheet.getRange('C1').setValue({ f: '=SUM(A1:A3)' });
```

Verify with `getCellData()` / `getRange`. On a live collaborative Sheet, the Unit must already be loaded from the server.
```

In `packages/dsh-univer-workspace-plugin/skills/univer-doc/SKILL.md`, add one paragraph:

```markdown
Collaborative Docs are server units. Append text, then read it back. Do not create a blank local Doc using the server unitId.
```

Do not change `DEFINITIONS` names in `src/skills/plugin.ts`. If you change a `description:` frontmatter line, update the matching `description` string in `plugin.ts` so `skills-smoke.test.ts` still matches.

- [ ] **Step 5: Extend DSH skills smoke to require the sdk-skills phrases**

Append to `packages/dsh-univer-workspace-plugin/test/skills-smoke.test.ts`:

```ts
  it("embeds univer-sdk-skills live collab rules in core/sheet skills", async () => {
    const univer = await readSkill("univer");
    const sheet = await readSkill("univer-sheet");
    expect(univer).toMatch(/loadServerUnit/);
    expect(univer).toMatch(/\/universer-api\/snapshot/);
    expect(sheet).toMatch(/getRange\('A1'\)/);
    expect(sheet).toMatch(/setValues/);
  });
```

(`readSkill` already exists in that file.)

- [ ] **Step 6: Document live origin in Agent README**

Add a subsection to `apps/agent/README.md` after the existing origin setup:

```markdown
## Live Cloudflare origin

Point Workspace Agent at the deployed edge worker:

```bash
# Settings → Workspace origin
https://univer-workspace.apisos.workers.dev
```

Seeded account: `admin` / `password123`. Skills come from univer-sdk-skills (Facade / Pro collab) plus the eight bundled Workspace Unit skills in `packages/dsh-univer-workspace-plugin/skills`.
```

- [ ] **Step 7: Run tests and make sure they pass**

Run:

```bash
pnpm exec tsx --test test/univer-skills.test.ts
pnpm --filter dsh-univer-workspace-plugin exec vitest run test/skills-smoke.test.ts
```

Expected: PASS.

- [ ] **Step 8: Commit**

```bash
git add src/plugins/univer-skills.ts \
  packages/dsh-univer-workspace-plugin/skills/univer/SKILL.md \
  packages/dsh-univer-workspace-plugin/skills/univer-sheet/SKILL.md \
  packages/dsh-univer-workspace-plugin/skills/univer-doc/SKILL.md \
  packages/dsh-univer-workspace-plugin/src/skills/plugin.ts \
  packages/dsh-univer-workspace-plugin/test/skills-smoke.test.ts \
  apps/agent/README.md \
  test/univer-skills.test.ts
git commit -m "$(cat <<'EOF'
feat(agent): ground Skills in univer-sdk-skills Facade and Pro collab recipes

EOF
)"
```

---

### Task 2: Cloudflare live deploy (wrangler / D1 / R2)

**Files:**
- Modify: `wrangler.jsonc` (only if a required key is missing; do not change `database_id` or ChatAgent class names)
- Modify: `docs/deployment/runbook.md` (align Node 24, pnpm 11, `compatibility_date` `2026-07-29`, AI binding, live curls)
- Create: `scripts/edge-smoke.mjs`
- Create: `test/edge-deploy-contract.test.ts`
- Modify: `README.md` only the Edge Quick Start / live worker bullets if they drift from wrangler.jsonc

**Interfaces:**
- Consumes: existing `Env` in `src/server.ts`: `ChatAgent`, `WorkspaceDO`, `DB`, `BLOB_BUCKET?`, `AI?`, `ASSETS?`.
- Produces: `scripts/edge-smoke.mjs` CLI that hits `https://univer-workspace.apisos.workers.dev` (override with `EDGE_ORIGIN`). Exit 0 only if `/healthz` is `{ status: "ok" }`, `/agents/skills` returns skills including `sheet`, and password login with `admin`/`password123` sets `workspace_session`.
- Does not change agent or collab protocol.

- [ ] **Step 1: Write the failing deploy-contract test**

Create `test/edge-deploy-contract.test.ts`:

```ts
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

function loadWrangler(): any {
  const raw = readFileSync(join(ROOT, "wrangler.jsonc"), "utf8");
  const json = raw.replace(/\/\/.*$/gm, "").replace(/,(\s*[}\]])/g, "$1");
  return JSON.parse(json);
}

describe("Cloudflare edge deploy contract", () => {
  test("wrangler.jsonc keeps D1, R2, AI, DO, and agent routes", () => {
    const cfg = loadWrangler();
    assert.equal(cfg.name, "univer-workspace");
    assert.equal(cfg.main, "src/server.ts");
    assert.equal(cfg.compatibility_date, "2026-07-29");
    assert.deepEqual(cfg.compatibility_flags, ["nodejs_compat"]);
    assert.equal(cfg.assets.directory, "./apps/workspace/dist/public");
    assert.equal(cfg.assets.not_found_handling, "single-page-application");
    for (const path of ["/agents", "/agents/*", "/api", "/api/*", "/universer-api/*", "/auth/*", "/healthz", "/spaces/*"]) {
      assert.ok(cfg.assets.run_worker_first.includes(path), path);
    }
    assert.equal(cfg.d1_databases[0].binding, "DB");
    assert.equal(cfg.d1_databases[0].database_id, "6dafe15b-fb54-4ef1-99ad-6b4c09be3d19");
    assert.equal(cfg.r2_buckets[0].binding, "BLOB_BUCKET");
    assert.equal(cfg.r2_buckets[0].bucket_name, "univer-workspace-blobs");
    assert.equal(cfg.ai.binding, "AI");
    assert.equal(cfg.durable_objects.bindings[0].class_name, "ChatAgent");
    assert.equal(cfg.durable_objects.bindings[1].class_name, "WorkspaceDO");
  });
});
```

- [ ] **Step 2: Run test to verify it fails or passes**

Run: `pnpm exec tsx --test test/edge-deploy-contract.test.ts`

Expected: PASS if wrangler.jsonc already matches (it currently does). If a key is missing, FAIL — then add only that key in Step 3. Do **not** change `database_id`.

- [ ] **Step 3: Align the runbook with wrangler.jsonc (verbatim values)**

In `docs/deployment/runbook.md`:

- Prerequisites: Node.js `v24.x` (not v22), pnpm `v11.x` (not v10).
- Replace the embedded wrangler example `compatibility_date` `2025-02-14` with `2026-07-29`.
- Add the `ai` block:

```jsonc
"ai": { "binding": "AI" }
```

- Keep `run_worker_first` identical to `wrangler.jsonc`.
- Production URL stays `https://univer-workspace.apisos.workers.dev`.

- [ ] **Step 4: Write `scripts/edge-smoke.mjs`**

```js
#!/usr/bin/env node
const origin = (process.env.EDGE_ORIGIN || "https://univer-workspace.apisos.workers.dev").replace(/\/+$/, "");

async function must(path, init = {}) {
  const res = await fetch(origin + path, init);
  const text = await res.text();
  let body;
  try { body = JSON.parse(text); } catch { body = text; }
  if (!res.ok) {
    throw new Error(`${init.method || "GET"} ${path} -> ${res.status} ${text.slice(0, 400)}`);
  }
  return { res, body };
}

const health = await must("/healthz");
if (health.body.status !== "ok") throw new Error("healthz status");

const skills = await must("/agents/skills");
const ids = (skills.body.skills || []).map((s) => s.id);
if (!ids.includes("sheet")) throw new Error("skills missing sheet");

const login = await must("/api/auth/password/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ username: "admin", password: "password123" })
});
const cookie = login.res.headers.get("set-cookie") || "";
if (!/workspace_session=/.test(cookie)) throw new Error("login cookie missing");

const turn = await fetch(origin + "/agents/unit_welcome_sheet/turns", {
  method: "POST",
  headers: { "Content-Type": "application/json", Cookie: cookie.split(";")[0] },
  body: JSON.stringify({ prompt: "Set A1 to Hello from AI" })
});
if (turn.status === 401) throw new Error("authenticated turn rejected");
if (!turn.ok) throw new Error(`turn ${turn.status} ${await turn.text()}`);
const result = await turn.json();
if (!result.rev) throw new Error("turn missing rev");

console.log(JSON.stringify({ origin, health: health.body, skills: ids, turnId: result.turnId, rev: result.rev }, null, 2));
```

- [ ] **Step 5: Build SPA, deploy, smoke**

```bash
pnpm --filter @univerjs/univer-workspace build:web
pnpm exec wrangler deploy
EDGE_ORIGIN=https://univer-workspace.apisos.workers.dev node scripts/edge-smoke.mjs
```

Expected: smoke prints `status: ok`, skills including `sheet`, and a login cookie. The turn/`rev` assertion is a join with Task 3 — if the turn is not writing yet, keep the script, report DONE_WITH_CONCERNS, and do not change `/agents` to make smoke pass. If wrangler auth is missing, report BLOCKED with the wrangler error — do not fake success.

- [ ] **Step 6: Run local contract tests**

```bash
pnpm exec tsx --test test/edge-deploy-contract.test.ts test/worker-gateway.test.ts
```

Expected: PASS. Do not modify `test/worker-gateway.test.ts`.

- [ ] **Step 7: Commit**

```bash
git add wrangler.jsonc docs/deployment/runbook.md scripts/edge-smoke.mjs test/edge-deploy-contract.test.ts README.md
git commit -m "$(cat <<'EOF'
chore(edge): lock wrangler D1/R2/AI contract and live smoke against workers.dev

EOF
)"
```

---

### Task 3: Full AI collaboration runtime (Agent, DSH tools, client-core)

**Files:**
- Modify: `src/plugins/univer-agent.ts`
- Modify: `src/plugins/univer-facade-actions.ts`
- Modify: `src/plugins/univer-snapshot.ts` (only if A1/`setValues` helpers fail tests)
- Create: `packages/client-core/src/agent.ts`
- Modify: `packages/client-core/src/index.ts` (named export of the new feature)
- Create: `packages/client-core/test/agent.test.ts`
- Create: `packages/dsh-univer-workspace-plugin/src/tools/agent-edge.ts`
- Modify: `packages/dsh-univer-workspace-plugin/src/tools/plugin.ts` (register + dispose `univer_agent_turn`)
- Create: `packages/dsh-univer-workspace-plugin/test/agent-edge.test.ts`
- Modify: `test/univer-agent.test.ts`
- Modify: `docs/specifications/api-reference.md` section 8 only

**Interfaces:**
- Consumes: Task 1 `listAgentSkills`, `getAgentSkill`, `agentSystemPrompt`. Task 4 `UniverCollabService.getLatestSnapshot`, `applyChangeset`, `listChangesetEntries`, `createUnit` (via existing `applySheetCells` / `ensureUnitSnapshot`).
- Produces:

```ts
export interface AgentTurnInput {
  readonly unitId: string;
  readonly prompt: string;
}

export interface AgentTurnResult {
  turnId: string;
  unitId: string;
  prompt: string;
  events: AgentEvent[];
  text: string;
  toolCalls: Array<{ tool: string; args: Record<string, unknown>; result: unknown }>;
  rev: number | null;
}

export class WorkspaceAgentFeature {
  constructor(private readonly authenticatedHttp: AuthenticatedWorkspaceHttp) {}
  listSkills(): Promise<{ skills: Array<{ id: string; name: string; source: string; summary: string }> }>;
  runTurn(unitId: string, prompt: string): Promise<AgentTurnResult>;
}
```

- Mux: `muxFrame(type, data, ch = 2)` must set `ch` (and may set `channel`).
- Workers AI models (verbatim, in order): `@cf/meta/llama-3.3-70b-instruct-fp8-fast`, `@cf/meta/llama-3.1-8b-instruct`, `@cf/openai/gpt-oss-120b`. Skill planner still writes cells when `AI` is unbound.
- `GET /agents/:unitId/turns` must return `{ items: AgentTurnResult[], nextCursor: null, unitId }` for turns actually run in this isolate (not always `[]`).

- [ ] **Step 1: Write the failing turn + client-core tests**

Append to `test/univer-agent.test.ts`:

```ts
  test("Workers AI tool_calls record args and Channel 2 frames use ch:2", async () => {
    const sql = createSqliteAdapter();
    const ctx = new Context();
    ctx.provide("host", { sql });
    const action = new ActionService(ctx, sql);
    const collab = new UniverCollabService(ctx, sql);
    ctx.provide("collab", collab);
    void action;
    registerFacadeActions(ctx);

    const host = {
      kernel: ctx,
      env: {
        AI: {
          run: async () => ({
            tool_calls: [
              {
                function: {
                  name: "univer_sheet_setRange",
                  arguments: JSON.stringify({
                    unitId: "unit_ai",
                    cells: [{ a1: "B2", value: "from-llm" }]
                  })
                }
              }
            ]
          })
        }
      }
    };

    const result = await runAgentTurn(host, { unitId: "unit_ai", prompt: "Fill the forecast please" });
    assert.ok(result.toolCalls.some((c) => c.tool === "univer.sheet.setRange" || c.tool === "univer_sheet_setRange"));
    assert.equal(getSheetCell(collab.getLatestSnapshot("unit_ai")!.data, "B2")?.v, "from-llm");
    const start = result.events.find((e) => e.type === "agent.tool_call_start");
    assert.equal((start?.data.args as any)?.cells?.[0]?.a1, "B2");
  });
```

Create `packages/client-core/test/agent.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { WorkspaceHttp } from "../src/http.ts";
import { WorkspaceAgentFeature } from "../src/agent.ts";

describe("WorkspaceAgentFeature", () => {
  it("POSTs /agents/:unitId/turns with credentials", async () => {
    const calls: string[] = [];
    const fetcher: typeof fetch = async (input, init) => {
      const url = String(input);
      calls.push(`${init?.method ?? "GET"} ${url}`);
      if (url.endsWith("/agents/skills")) {
        return new Response(JSON.stringify({ skills: [{ id: "sheet", name: "Sheet Facade", source: "univer-sdk-skills", summary: "x" }] }), {
          headers: { "Content-Type": "application/json" },
        });
      }
      return new Response(
        JSON.stringify({
          turnId: "turn_1",
          unitId: "unit_welcome_sheet",
          prompt: "Set A1 to Hello from AI",
          events: [],
          text: "Wrote A1=Hello from AI",
          toolCalls: [],
          rev: 2,
        }),
        { headers: { "Content-Type": "application/json" } },
      );
    };
    const http = new WorkspaceHttp({
      origin: "https://univer-workspace.apisos.workers.dev",
      cookie: "workspace_session=test",
      role: "client",
      fetcher,
    });
    const agent = new WorkspaceAgentFeature(async () => http);
    const skills = await agent.listSkills();
    expect(skills.skills[0]?.id).toBe("sheet");
    const turn = await agent.runTurn("unit_welcome_sheet", "Set A1 to Hello from AI");
    expect(turn.rev).toBe(2);
    expect(calls.some((c) => c.includes("/agents/unit_welcome_sheet/turns"))).toBe(true);
  });
});
```

Create `packages/dsh-univer-workspace-plugin/test/agent-edge.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { agentEdgeTurnPath } from "../src/tools/agent-edge.ts";

describe("univer_agent_turn", () => {
  it("targets POST /agents/:unitId/turns", () => {
    expect(agentEdgeTurnPath("unit_welcome_sheet")).toBe("/agents/unit_welcome_sheet/turns");
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
pnpm exec tsx --test test/univer-agent.test.ts
pnpm --filter @univerjs/univer-workspace-client-core exec vitest run test/agent.test.ts
pnpm --filter dsh-univer-workspace-plugin exec vitest run test/agent-edge.test.ts
```

Expected: FAIL — missing `WorkspaceAgentFeature` / `agent-edge.ts`; AI path may omit `args` on `tool_call_start`.

- [ ] **Step 3: Fix Workers AI arg recording in `univer-agent.ts`**

In `tryWorkersAi`, when emitting `agent.tool_call_result`, also keep args on the start event (already present) and push `toolCalls` with parsed `args` **inside** `tryWorkersAi` **or** in the caller. The current caller only pushes on `agent.tool_call_result` and sets `args` from `event.data.args`, which that emit omits. Change the result emit to:

```ts
emit({ type: "agent.tool_call_start", data: { tool: name, args } });
const toolResult = await executeTool(action, name, args, unitId);
emit({ type: "agent.tool_call_result", data: { tool: name, args, result: toolResult } });
```

If the first AI response is **only** `tool_calls` and the second is empty, run the Skill planner **after** those tools rather than replacing them. Keep the deterministic `Set A1 to …` planner for prompts that match `SET_CELL_RE`.

Persist turns in isolate memory:

```ts
const TURN_LOG = new Map<string, AgentTurnResult[]>();

function recordTurn(result: AgentTurnResult): void {
  const list = TURN_LOG.get(result.unitId) ?? [];
  list.push(result);
  TURN_LOG.set(result.unitId, list.slice(-50));
}
```

Call `recordTurn(result)` at the end of `runAgentTurn`. Change `GET /agents/:unitId/turns` to:

```ts
return json({ items: TURN_LOG.get(turnsMatch[1]) ?? [], nextCursor: null, unitId: turnsMatch[1] });
```

Keep `muxFrame`:

```ts
export function muxFrame(type: string, data: unknown, ch = 2): Record<string, unknown> {
  return { ch, channel: ch, type, data };
}
```

- [ ] **Step 4: Add `WorkspaceAgentFeature`**

Create `packages/client-core/src/agent.ts`:

```ts
import type { AuthenticatedWorkspaceHttp } from "./http.js";
import { workspaceError } from "./errors.js";

export interface WorkspaceAgentSkill {
  readonly id: string;
  readonly name: string;
  readonly source: string;
  readonly summary: string;
}

export interface WorkspaceAgentTurn {
  readonly turnId: string;
  readonly unitId: string;
  readonly prompt: string;
  readonly text: string;
  readonly events: readonly { type: string; data: Record<string, unknown> }[];
  readonly toolCalls: readonly { tool: string; args: Record<string, unknown>; result?: unknown }[];
  readonly rev: number | null;
}

export class WorkspaceAgentFeature {
  public constructor(private readonly authenticatedHttp: AuthenticatedWorkspaceHttp) {}

  public async listSkills(): Promise<{ readonly skills: readonly WorkspaceAgentSkill[] }> {
    const http = await this.authenticatedHttp();
    const body = await http.json("/agents/skills", { authenticated: false });
    if (!Array.isArray(body["skills"])) {
      throw workspaceError("workspace-invalid-response", "Workspace response is missing skills.");
    }
    return { skills: body["skills"] as WorkspaceAgentSkill[] };
  }

  public async runTurn(unitId: string, prompt: string): Promise<WorkspaceAgentTurn> {
    const http = await this.authenticatedHttp();
    const body = await http.json(`/agents/${encodeURIComponent(unitId)}/turns`, {
      method: "POST",
      body: { prompt },
    });
    if (typeof body["turnId"] !== "string") {
      throw workspaceError("workspace-invalid-response", "Workspace response is missing turnId.");
    }
    return body as unknown as WorkspaceAgentTurn;
  }
}
```

Re-export from `packages/client-core/src/index.ts`:

```ts
export { WorkspaceAgentFeature, type WorkspaceAgentSkill, type WorkspaceAgentTurn } from "./agent.js";
```

- [ ] **Step 5: Add DSH `univer_agent_turn` without rewriting `univer_edit`**

The DSH plugin **must not import** `@univerjs/univer-workspace-client-core`. Use the harness `workspaceAuth` client (same seam as `src/collab-proxy/plugin.ts`):

```ts
ctx.get("workspaceAuth")!.currentClient()!.request(path, init)
```

Create `packages/dsh-univer-workspace-plugin/src/tools/agent-edge.ts`:

```ts
import { defineTool } from "@deepseek-ai/dsh-tools";
import type { Context } from "@deepseek-ai/cordis";
import type { ContentBlock } from "@deepseek-ai/dsh-llm";
import { registerUniverTool } from "./presentation.ts";
import { UniverError } from "./errors.ts";

export function agentEdgeTurnPath(unitId: string): string {
  return `/agents/${encodeURIComponent(unitId)}/turns`;
}

function text(value: string): ContentBlock[] {
  return [{ type: "text", text: value }];
}

export function registerAgentEdgeTool(ctx: Context): () => void {
  return registerUniverTool(
    ctx,
    defineTool({
      name: "univer_agent_turn",
      description:
        "Run one Workspace Skill turn against a live collaborative unitId on the connected Workspace origin (POST /agents/:unitId/turns). Prefer this on the Cloudflare edge origin. Merge remains a human Worktree step.",
      parameters: {
        unitId: { type: "string", required: true },
        prompt: { type: "string", required: true },
      },
      output: {
        schema: { type: "json" as const },
        render: (_args: unknown, value: unknown): ContentBlock[] => text(JSON.stringify(value ?? {})),
      },
      execute: async (_exec, args) => {
        const client = ctx.get("workspaceAuth")?.currentClient();
        if (!client) {
          throw new UniverError("Workspace session is missing.", "WORKSPACE_AUTH_MISSING");
        }
        const unitId = String(args.unitId);
        const prompt = String(args.prompt);
        const res = await client.request(agentEdgeTurnPath(unitId), {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt }),
        });
        const body = (await res.json()) as {
          text?: string;
          turnId?: string;
          rev?: number | null;
          error?: { message?: string };
        };
        if (!res.ok) {
          throw new UniverError(body.error?.message || "Agent turn failed.", "AGENT_TURN_FAILED");
        }
        return body;
      },
    }),
  );
}
```

Match `defineTool` `execute` arity to neighboring tools (`edit.ts` / `worktree.ts`) if the local DSH version passes `(exec, args)` vs `(args)` — copy the exact signature from `registerEditTool`.

In `src/tools/plugin.ts`:

```ts
import { registerAgentEdgeTool } from "./agent-edge.ts";
```

Inside `ctx.effect`:

```ts
const disposeAgentEdge = registerAgentEdgeTool(ctx);
```

And in the returned disposer, call `disposeAgentEdge()` next to `disposeEdit()`.

Do not modify `edit.ts`. Do not add a client-core dependency to `packages/dsh-univer-workspace-plugin/package.json`.

- [ ] **Step 6: Run tests to verify they pass**

```bash
pnpm exec tsx --test test/univer-agent.test.ts
pnpm --filter @univerjs/univer-workspace-client-core exec vitest run test/agent.test.ts
pnpm --filter dsh-univer-workspace-plugin exec vitest run test/agent-edge.test.ts
```

Expected: PASS.

- [ ] **Step 7: Commit**

```bash
git add src/plugins/univer-agent.ts src/plugins/univer-facade-actions.ts src/plugins/univer-snapshot.ts \
  packages/client-core/src/agent.ts packages/client-core/src/index.ts packages/client-core/test/agent.test.ts \
  packages/dsh-univer-workspace-plugin/src/tools/agent-edge.ts \
  packages/dsh-univer-workspace-plugin/src/tools/plugin.ts \
  packages/dsh-univer-workspace-plugin/test/agent-edge.test.ts \
  test/univer-agent.test.ts docs/specifications/api-reference.md
git commit -m "$(cat <<'EOF'
feat(agent): persist Skill turns and expose a client-core / DSH edge turn client

EOF
)"
```

---

### Task 4: Collab / history / Worktrees server

**Files:**
- Modify: `src/plugins/univer-collab.ts`
- Modify: `src/plugins/univer-tools.ts` only if DO worktree journal is required by a failing test
- Modify: `src/control-plane/gateway.ts` (Worktrees block + clone/copy helpers)
- Modify: `src/control-plane/db.ts` (worktree persistence)
- Modify: `src/integrations/univer-history.ts`
- Modify: `src/project/dsh-host.ts` (`/universer-api/*`, `/internal/collab/clone`, `/internal/collab/copy-snapshot` only)
- Modify: `vendor/univer-pro/**/lib/es/**` only if a Pro client cannot parse history/comb; prefer `lib/es`
- Modify: `test/univer-history.test.ts`
- Create: `test/univer-collab-worktree.test.ts`
- Modify: `docs/specifications/api-reference.md` sections 5–7 (replace simplified snapshot path with the real `:type/unit/:unitID` paths)

**Interfaces:**
- Consumes: `generateDefaultSnapshot(unitId, type, name?)`, `cloneSnapshot`, `bumpSnapshotRevision`.
- Produces (already named — keep signatures):

```ts
class UniverCollabService {
  getUnit(unitId: string): { unit_id: string; type: number; name: string; rev: number; created_at: number; updated_at: number } | null;
  createUnit(unitId: string, type: number, name: string, initialSnapshot?: Record<string, unknown>): { unitId: string; type: number; name: string; rev: number };
  saveSnapshot(unitId: string, rev: number, data: Record<string, unknown>): void;
  getLatestSnapshot(unitId: string): { rev: number; data: Record<string, unknown> } | null;
  applyChangeset(payload: ChangesetPayload, clientId?: string): { success: true; rev: number };
  listChangesetEntries(unitId: string): Array<{ id: string; rev: number; clientId: string; createdAt: number; changeset: Record<string, unknown> }>;
  getChangesetsSince(unitId: string, sinceRev: number, toRev?: number): Record<string, unknown>[];
  cloneUnit(fromUnitId: string, toUnitId: string, name?: string): { fromUnitId: string; toUnitId: string; rev: number; type: number };
  copySnapshotTo(fromUnitId: string, toUnitId: string): { copied: true; fromUnitId: string; toUnitId: string; rev: number } | { copied: false; reason: string; fromUnitId: string; toUnitId: string };
}
```

- Gateway: `POST /api/worktrees/:id/units` with `{ source: "trunk", resourceId }` clones trunk → `unit_wt_*`. `POST /api/worktrees/:id/merge` copies each non-removed draft onto `trunk_unit_id`.
- History list `error.code` is `1` (`HISTORY_OK`).
- Agent changesets must remain visible in `listChangesetEntries` after `applySheetCells`.
- Univer-pro patches: `lib/es` only.

- [ ] **Step 1: Write the failing collab/worktree test**

Create `test/univer-collab-worktree.test.ts`:

```ts
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { Context } from "@deepseek-ai/cordis";
import { DatabaseSync } from "node:sqlite";
import type { SqlExec } from "../src/kernel/sql.ts";
import { UniverCollabService } from "../src/plugins/univer-collab.ts";
import { applySheetCells } from "../src/plugins/univer-facade-actions.ts";
import { generateDefaultSnapshot } from "../src/plugins/univer-default-snapshots.ts";
import { getSheetCell } from "../src/plugins/univer-snapshot.ts";
import { buildHistoryListBody, buildHistoryChangesetsBody } from "../src/integrations/univer-history.ts";

function createSqliteAdapter(): SqlExec {
  const db = new DatabaseSync(":memory:");
  return {
    exec: (query: string, ...binds: unknown[]) => {
      const trimmed = query.trim().toUpperCase();
      if (trimmed.startsWith("CREATE") || trimmed.startsWith("ALTER") || trimmed.startsWith("DROP")) {
        db.exec(query);
        return { toArray: () => [] };
      }
      const stmt = db.prepare(query);
      if (trimmed.startsWith("INSERT") || trimmed.startsWith("UPDATE") || trimmed.startsWith("DELETE")) {
        stmt.run(...(binds as any[]));
        return { toArray: () => [] };
      }
      return { toArray: () => stmt.all(...(binds as any[])) as Record<string, unknown>[] };
    }
  };
}

describe("collab clone, merge, and history", () => {
  test("draft edits stay off trunk until copySnapshotTo", () => {
    const ctx = new Context();
    const collab = new UniverCollabService(ctx, createSqliteAdapter());
    collab.createUnit("unit_trunk", 2, "Welcome", generateDefaultSnapshot("unit_trunk", 2, "Welcome"));
    applySheetCells(collab, "unit_trunk", [{ a1: "A1", value: "trunk" }]);
    collab.cloneUnit("unit_trunk", "unit_wt_draft", "Draft");
    applySheetCells(collab, "unit_wt_draft", [{ a1: "A1", value: "draft" }]);
    assert.equal(getSheetCell(collab.getLatestSnapshot("unit_trunk")!.data, "A1")?.v, "trunk");
    const copied = collab.copySnapshotTo("unit_wt_draft", "unit_trunk");
    assert.equal(copied.copied, true);
    assert.equal(getSheetCell(collab.getLatestSnapshot("unit_trunk")!.data, "A1")?.v, "draft");
  });

  test("agent set-range changeset appears in history list and cs", () => {
    const ctx = new Context();
    const collab = new UniverCollabService(ctx, createSqliteAdapter());
    applySheetCells(collab, "unit_welcome_sheet", [{ a1: "A1", value: "Hello from AI" }]);
    const unit = collab.getUnit("unit_welcome_sheet");
    const entries = collab.listChangesetEntries("unit_welcome_sheet");
    assert.ok(unit && unit.rev >= 2);
    assert.ok(entries.length >= 1);
    assert.equal(
      (entries.at(-1)?.changeset as any)?.mutations?.[0]?.id,
      "sheet.mutation.set-range-values"
    );
    const list = buildHistoryListBody(
      "unit_welcome_sheet",
      { unitId: unit!.unit_id, rev: unit!.rev, createdAt: unit!.created_at },
      entries,
      { length: 20 }
    ) as any;
    assert.equal(list.error.code, 1);
    assert.ok(list.historyIds.length >= 1);
    const cs = buildHistoryChangesetsBody(
      "unit_welcome_sheet",
      entries,
      entries[0].rev,
      entries[entries.length - 1].rev
    ) as any;
    assert.equal(cs.error.code, 1);
    assert.ok(cs.changesets.length >= 1);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm exec tsx --test test/univer-collab-worktree.test.ts`

Expected: FAIL only if clone/copy/history is broken. If it already PASSES, keep the test (regression lock) and continue to the gateway/docs/history polish steps.

- [ ] **Step 3: Minimal collab fixes**

If clone does not rewrite `unitID` on nested workbook ids, after cloning set:

```ts
if ((data as any).id) (data as any).id = toUnitId;
if ((data as any).workbook?.id) (data as any).workbook.id = toUnitId;
```

If `copySnapshotTo` does not record a merge changeset with `memberID` `worktree_merge`, keep the existing `cs_merge_*` applyChangeset call.

If `applyChangeset` drops `mutations` when only `changeset_data` is stored, `parseChangesetRow` must return the full JSON including `mutations`.

Do not change ChatAgent `idFromName("univer_collab")`.

- [ ] **Step 4: Fix api-reference snapshot paths**

Replace section 5 simplified `GET /universer-api/snapshot/:unitId` with:

```markdown
### `GET /universer-api/snapshot/:type/unit/:unitID[/rev/:revision]`
`:type` is `1` Doc, `2` Sheet, `3` Slide. Returns `{ error, snapshot, changesets }`.

### `POST /universer-api/comb/:type/unit/:unitID/new_changes`
Body includes `changeset` and `memberID`. ACK + broadcast `new_changesets`.

### `GET /universer-api/history/:unitID/list|creators|cs`
Wire format matches `@univerjs-pro/collaboration-history-endpoint` (`error.code === 1`).
```

- [ ] **Step 5: Univer-pro `lib/es` patches only if live history UI is broken**

If Browser history cannot parse list/creators/cs after Step 3:

1. Decode with `node scripts/deobfuscate-univer-pro.mjs collaboration-client collaboration-history-endpoint --no-apply` if vendor `lib/es` is still obfuscated.
2. Patch **`vendor/univer-pro/<pkg>/lib/es/`** (not `lib/cjs`, not `umd`).
3. Re-apply with `node scripts/deobfuscate-univer-pro.mjs collaboration-client --no-apply` skipped; copy es files into node_modules using the existing apply path in that script.
4. Add a regression assertion in `scripts/deobfuscate-univer-pro.test.mjs` only if you change the deobfuscator.

If history already works, **do not** patch vendor.

- [ ] **Step 6: Run tests**

```bash
pnpm exec tsx --test test/univer-collab-worktree.test.ts test/univer-history.test.ts test/univer-agent.test.ts
```

Expected: PASS. (`univer-agent.test.ts` already covers clone/copy; do not delete it.)

- [ ] **Step 7: Commit**

```bash
git add src/plugins/univer-collab.ts src/control-plane/gateway.ts src/control-plane/db.ts \
  src/integrations/univer-history.ts src/project/dsh-host.ts \
  test/univer-collab-worktree.test.ts test/univer-history.test.ts \
  docs/specifications/api-reference.md vendor/univer-pro
git commit -m "$(cat <<'EOF'
fix(edge): keep Worktree clone/merge and Universer history on the collab DO

EOF
)"
```

---

### Task 5: Browser UI live verification

**Files:**
- Modify: `apps/workspace/web/src/features/editor/agent-collaborator.tsx`
- Modify: `apps/workspace/web/src/features/editor/collaboration-editor.tsx`
- Modify: `apps/workspace/web/src/routes/nodes.$nodeId.tsx` only if the Agent toggle/panel is broken
- Modify: `apps/workspace/web/src/shared/i18n.tsx`
- Create: `apps/workspace/test/unit/agent-collaborator.test.ts`
- Modify: `docs/deployment/runbook.md` only by appending a **Browser verification** subsection if Task 2 created the file heading; otherwise add `## 8. Browser live verification` at the end

**Interfaces:**
- Consumes: `POST /agents/:unitId/turns` → `AgentTurnResult`; CustomEvent `workspace-agent-edited` with `{ unitId, rev, toolCalls }`.
- Produces: Agent panel on Univer resource routes; `enableOfflineEditing: false` on `UniverCollaborationClientPlugin` (both call sites ~268 and ~669).
- After a successful turn, the editor must reflect A1 via collab OT. Local `workbook.getRange().setValue` is a fallback only when `getActiveWorkbook` exists; it must not throw.

- [ ] **Step 1: Write the failing i18n / event contract test**

Create `apps/workspace/test/unit/agent-collaborator.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");

describe("in-editor AI collaboration UI", () => {
  it("posts turns to /agents/:unitId/turns and dispatches workspace-agent-edited", () => {
    const src = readFileSync(
      join(root, "web/src/features/editor/agent-collaborator.tsx"),
      "utf8",
    );
    expect(src).toMatch(/`\/agents\/\$\{encodeURIComponent\(unitId\)\}\/turns`/);
    expect(src).toMatch(/workspace-agent-edited/);
    expect(src).toMatch(/credentials: "include"/);
  });

  it("loads collaborative units with offline editing disabled", () => {
    const src = readFileSync(
      join(root, "web/src/features/editor/collaboration-editor.tsx"),
      "utf8",
    );
    expect(src).toMatch(/enableOfflineEditing:\s*false/);
    expect(src).not.toMatch(/enableOfflineEditing:\s*true/);
    expect(src).toMatch(/snapshotServerUrl:\s*"\/universer-api\/snapshot"/);
    expect(src).toMatch(/collabSubmitChangesetUrl:\s*"\/universer-api\/comb"/);
  });

  it("exposes English and Chinese Agent copy", () => {
    const src = readFileSync(join(root, "web/src/shared/i18n.tsx"), "utf8");
    expect(src).toMatch(/openAgent:/);
    expect(src).toMatch(/agentExample: 'Try: Set A1 to Hello from AI'/);
    expect(src).toMatch(/agentExample: "试试：Set A1 to Hello from AI"/);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

```bash
pnpm --filter @univerjs/univer-workspace exec vitest run test/unit/agent-collaborator.test.ts
```

Expected: FAIL on `enableOfflineEditing: true`.

- [ ] **Step 3: Set `enableOfflineEditing: false` and keep the Agent panel**

In `collaboration-editor.tsx`, both `UniverCollaborationClientPlugin` configs:

```ts
enableOfflineEditing: false,
```

Keep `workspace-agent-edited` listener. After applying local setValue fallback, do not `dispose()` the univer instance.

In `agent-collaborator.tsx`, keep `credentials: "include"`. On success, dispatch:

```ts
window.dispatchEvent(
  new CustomEvent("workspace-agent-edited", {
    detail: { unitId, rev: body.rev, toolCalls: body.toolCalls ?? [] },
  }),
);
```

If `nodes.$nodeId.tsx` does not mount `AgentCollaborator` for Univer resources, restore:

```tsx
<AgentCollaborator
  unitId={data.resource.unitId}
  unitType={data.resource.unitType}
  open={agentOpen}
  onClose={() => setAgentOpen(false)}
/>
```

Default `agentOpen` may stay `true`.

- [ ] **Step 4: Run unit test**

```bash
pnpm --filter @univerjs/univer-workspace exec vitest run test/unit/agent-collaborator.test.ts
```

Expected: PASS.

- [ ] **Step 5: Live Browser verification (required)**

Against `https://univer-workspace.apisos.workers.dev` (after Task 2 deploy, or current live worker):

1. Open `/`, log in `admin` / `password123`.
2. Open Welcome Sheet (or create a Sheet if missing).
3. Confirm Agent sidebar is visible; Skills line lists `core, sheet, doc, collaboration, worktree` (or a subset that includes `sheet`).
4. Submit `Set A1 to Hello from AI`.
5. Confirm the turn shows `univer.sheet.setRange` and `rev`.
6. Confirm cell A1 shows `Hello from AI` on the canvas without a full reload.
7. Open history UI (Pro history) and confirm a changeset exists for this unit.
8. Create a Worktree, add the sheet from trunk, open the draft unit, run `Set B1 to draft-only`, confirm trunk A1 unchanged, mark Ready, Merge, confirm trunk shows the draft cells.
9. Toggle Agent closed/open. Resize to a narrow viewport and confirm the panel is usable (`w-[min(380px,100%)]`).
10. Log out; `POST /agents/unit_welcome_sheet/turns` from the panel must 401 (error string `agentTurnFailed`).

Record results in the runbook subsection:

```markdown
## 8. Browser live verification

Origin: https://univer-workspace.apisos.workers.dev

- [ ] Login admin / password123
- [ ] Agent turn Set A1 to Hello from AI writes the live Sheet
- [ ] History shows the agent changeset
- [ ] Worktree draft isolate + merge
- [ ] Unauthenticated turn is rejected
```

Check the boxes only after actually performing the steps. If browser tools are unavailable, use the Cursor browser tools; if those fail, curl the same origin and report which UI steps could not be clicked.

- [ ] **Step 6: Commit**

```bash
git add apps/workspace/web/src/features/editor/agent-collaborator.tsx \
  apps/workspace/web/src/features/editor/collaboration-editor.tsx \
  apps/workspace/web/src/routes/nodes.\$nodeId.tsx \
  apps/workspace/web/src/shared/i18n.tsx \
  apps/workspace/test/unit/agent-collaborator.test.ts \
  docs/deployment/runbook.md
git commit -m "$(cat <<'EOF'
fix(web): show live agent edits on collaborative units without offline cache

EOF
)"
```

---

## Verification (whole branch, after all five tasks)

```bash
pnpm exec tsx --test test/*.test.ts
pnpm --filter @univerjs/univer-workspace-client-core exec vitest run test/agent.test.ts
pnpm --filter dsh-univer-workspace-plugin exec vitest run test/skills-smoke.test.ts test/agent-edge.test.ts
pnpm --filter @univerjs/univer-workspace exec vitest run test/unit/agent-collaborator.test.ts
EDGE_ORIGIN=https://univer-workspace.apisos.workers.dev node scripts/edge-smoke.mjs
```

Live demo path: log in → Welcome Sheet → Agent → `Set A1 to Hello from AI` → cell + history update → Worktree isolate → human merge.

---

## Self-review

**Spec coverage:** SDK skills catalog (Task 1), wrangler/D1/R2/AI live deploy (Task 2), Agent/DSH/client-core turn runtime (Task 3), collab/history/Worktrees (Task 4), Browser live verification (Task 5). Full AI collaboration on the deployed worker is the join of 2+3+4+5.

**Placeholder scan:** none. Exact ids, URLs, passwords, action names, and wrangler bindings are copied from current `feat/cloudflare-edge-microkernel` code.

**Type consistency:** `AgentTurnResult`, `WorkspaceAgentTurn`, `WorkspaceAgentFeature.runTurn(unitId, prompt)`, `cloneUnit` / `copySnapshotTo`, `HISTORY_OK.code === 1`, Facade action ids, and Channel 2 `ch: 2` are consistent across tasks.

**Intentional single plan:** five independent domains share one plan with exclusive file ownership so already-running parallel implementers do not collide. This is a user-mandated exception to "one plan per subsystem" and to SDD's "no parallel implementers" rule.

**Self-review fix applied:** Task 3 originally imported client-core from the DSH plugin. That contradicted `AGENTS.md` / `workspace-contract.ts` (Cordis `workspaceAuth.currentClient()`, no package→app or plugin→client-core npm dependency). The DSH tool now uses `WorkspaceHttpClient.request`. Client-core `WorkspaceAgentFeature` remains for CLI / Node-hosted shells.
