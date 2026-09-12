#!/usr/bin/env node
/**
 * Thin CLI proof that execute/inspect/screenshot hit `/uf/` on Cloudflare.
 *
 *   pnpm exec tsx scripts/cli-edge-proof.mjs
 *   EDGE_ORIGIN=https://univer-workspace.apisos.workers.dev pnpm exec tsx scripts/cli-edge-proof.mjs
 *
 * Local Chromium is never required. Without EDGE_ORIGIN the script uses a fake
 * fetch: missing BROWSER is still a `/uf` 503, not a local browser runtime.
 *
 * After a live cell write, Agent Fill:
 *
 *   pnpm --filter @univerjs/workspace-agent live-edit -- \
 *     --origin https://univer-workspace.apisos.workers.dev \
 *     --set E4=180
 */
import { runCliEdgeProof } from "../packages/client-core/src/univer-file.ts";

const origin = process.env.EDGE_ORIGIN;
const result = await runCliEdgeProof(origin ? { origin } : {});
process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
if (!result.ok) process.exit(1);
