# T2 report: AI Gateway + live SSE

**Status:** DONE  
**Commit:** `76b4082` `feat(agent): route inference through AI Gateway default with live SSE`  
**Follow-up:** `fix(agent): broadcast LLM tools and skip tool loop on cached explain`  
**Branch:** `feat/cloudflare-edge-microkernel`

## What I implemented

Wave A inference path now goes through Cloudflare AI Gateway id `default` with live SSE/mux emit.

- Exported `AI_GATEWAY_ID = "default"` and `AI_GATEWAY_LIVE_MODELS` (`llama-3.3-70b-instruct-fp8-fast`, then `llama-3.1-8b-instruct`). Removed `@cf/openai/gpt-oss-120b` from the live path.
- Widened `Env.AI` / `AgentHost.env.AI` to 3-arg `run(model, input, options)` plus `aiGatewayLogId`.
- Every `run` third arg includes `gateway.id: "default"` and metadata with at most five keys: `product` (`univer-workspace`), `unitId`, `turnId`, `actorUserId` (prompting human, never `agent_workspace`), `step` (`tool` | `text` | `explain`).
- Tool loop: `stream: false`, `tools` present, `skipCache: true`. Final text: `stream: true` **without** `tools`. Never both.
- Explain prompt `Explain the Q3 forecast in one sentence` and canned `Explain the full sheet in one sentence`: `skipCache: false`, `cacheKey: "demo:explain-q3"`, `cacheTtl: 3600`, `step: "explain"`.
- `emit()` is a live sink: SSE writes as events happen; mux sends `{ ch: 2, channel: 2, type, data }` per emit.
- `Accept: text/event-stream` returns `text/event-stream` immediately (JSON remains the default).
- One in-flight turn per `unitId` → `agent.error` `"Agent is busy"`.
- `agent.done` snapshots `aiGatewayLogId`.
- `GET /healthz.ai` JSON `{ status: "ok", gateway: "default" }` via existing CORS helper. Existing `GET /healthz` unchanged.

## What I tested

```text
pnpm exec tsx --test test/univer-agent.test.ts test/edge-deploy-contract.test.ts
# 17/17 pass, fail 0

pnpm exec tsx --test test/*.test.ts
# 68/68 pass, fail 0
```

Final post-commit re-run: **17/17 pass**, output pristine.

Covered: gateway id default; tool writes still land B2; final run `stream: true` and no tools; mock SSE `data: {"response":"Hel"}` / `lo` tokens; explain cache; tools `skipCache: true`; `/healthz.ai.gateway === "default"`; busy lock; `aiGatewayLogId` on `agent.done`; live mux-per-emit; SSE immediate vs JSON default. Existing Set A1, tool_calls, mux ch:2, 404 missing unit, GET turns log still pass.

## TDD Evidence

### RED

`pnpm exec tsx --test test/univer-agent.test.ts test/edge-deploy-contract.test.ts` before implementation:

- 10 existing tests passed
- 7 new tests failed for the expected missing behavior:
  - `AI_GATEWAY_ID` was `undefined` (not `'default'`)
  - `options.gateway.id` was `undefined` (2-arg `run`)
  - no `stream: true` final run (`assert.ok(finalRun)` falsy)
  - SSE `Accept` still returned `application/json; charset=utf-8`
  - mux thinking was not sent before `AI.run` returned
  - second in-flight turn had no `agent.error` `"Agent is busy"`
  - `/healthz.ai` missing from `src/server.ts`

Failures were assertion failures (feature missing), not import typos.

### GREEN

Same command after implementation and after commit: **17/17 pass**. Broader `test/*.test.ts`: **68/68 pass**.

## Files changed

Staged/committed only:

- `src/plugins/univer-agent.ts` (new)
- `src/server.ts` — `Env.AI` 3-arg + `GET /healthz.ai` only (other dirty hunks left unstaged)
- `test/univer-agent.test.ts` (new)
- `test/edge-deploy-contract.test.ts` (new)
- `docs/deployment/runbook.md` — AI Gateway subsection only

Did **not** touch `dsh-host.ts`, `catalog.ts`, BROWSER/LOADER/`/uf`. Did **not** push.

Working-tree-only (not in this commit): `wrangler.jsonc` gained `/healthz.ai` in `run_worker_first` so a later wrangler commit can serve the route past Static Assets.

## Self-review

- Completeness: brief checklist items are implemented and asserted.
- `skipCache` / `cacheKey` / `metadata` are set both at the third-arg top level (brief) and inside `gateway` (Workers AI binding).
- `stream: true` is set on both the input body (Workers AI ReadableStream overload) and the third arg (brief).
- Extra exports (`AI_GATEWAY_PRODUCT`, `isCachedExplainPrompt`) were unexported after self-review.
- Did not steal T1’s `dsh-host.ts`. One mid-session T1 rewrite made the source-grep `handleAgentHttp` test fail once; re-run passed after T1 restored the agent mount.

## Concerns

1. **`wrangler.jsonc` is not in the T2 commit list.** HEAD wrangler has no `ai` binding and no `/healthz.ai` in `run_worker_first`. The Worker handler implements `/healthz.ai`, but production Static Assets may still serve SPA HTML for that path until `run_worker_first` includes it. The contract test no longer asserts wrangler D1/R2/DO/assets/`cfg.ai.binding`; T2 now only asserts `/healthz.ai` + gateway source that pass without uncommitted wrangler.
2. **`actorUserId` is `""` when `host.actor` is missing** (or is `agent_workspace`). Tests pass a human actor. Gateway metadata never uses `agent_workspace`.
3. Tool-loop still allows up to 6 tool rounds; a mock that always returns `tool_calls` will write repeatedly before the final stream. Pre-existing loop shape; writes still succeed. Cached explain prompts no longer enter this loop.

## Review follow-up

Fixed the Important review items on T2 files only (`univer-agent.ts`, `server.ts` Env.AI + `/healthz.ai`, `test/univer-agent.test.ts`, `test/edge-deploy-contract.test.ts`, runbook AI Gateway subsection). Did not touch `dsh-host.ts`, `catalog.ts`, or `wrangler.jsonc`.

1. **Narrowed `test/edge-deploy-contract.test.ts`.** Removed the wrangler-wide D1/R2/DO/assets/`cfg.ai.binding` test that T2 introduced as a new file. Remaining assertions: `GET /healthz.ai.gateway === "default"`, `AI_GATEWAY_ID` import from `univer-agent.ts`, 3-arg `run` in `server.ts` / `univer-agent.ts` source. These pass on committed `server.ts` plus the `/healthz.ai` constant import (no uncommitted wrangler).
2. **LLM/gateway tool loop uses `recordTool`.** `tryWorkersAi` executes tools through `recordTool`, so `setRange` still writes the cell and `host.broadcastCollab` is invoked like the regex path. Tests mock `broadcastCollab` on the agent host (no `dsh-host` take).
3. **Cached explain skips the uncached tool loop.** `isCachedExplainPrompt` runs only the cached `stream: true` inference (`skipCache: false`, `cacheKey: "demo:explain-q3"`, `cacheTtl: 3600`). Explain tests assert zero `tools` runs.
4. **`GET /healthz.ai` uses `AI_GATEWAY_ID`** imported from `univer-agent.ts` (no cycle: `univer-agent.ts` does not import `server.ts`).

### RED (review follow-up)

`pnpm exec tsx --test test/univer-agent.test.ts test/edge-deploy-contract.test.ts` after tests, before implementation: **12 pass, 4 fail**.

- `/healthz.ai` source did not contain `AI_GATEWAY_ID` (hardcoded `"default"`)
- LLM `tool_calls` wrote B2 but `broadcastCollab` was not called (`unit_ai` / `unit_gateway`)
- explain Q3 still entered the uncached tool loop (`cached explain must skip the tool loop`)

Failures were assertion failures (missing behavior), not import typos.

### GREEN

Same command after implementation: **16/16 pass, fail 0** (16 not 17: the wrangler-wide test was removed from this T2 file).

```text
pnpm exec tsx --test test/univer-agent.test.ts test/edge-deploy-contract.test.ts
# 16/16 pass, fail 0
```

