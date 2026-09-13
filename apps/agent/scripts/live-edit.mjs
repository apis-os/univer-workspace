#!/usr/bin/env node
/**
 * Auth as a Workspace user and edit a live collaborative Unit.
 *
 *   pnpm --filter @univerjs/workspace-agent live-edit -- \
 *     --origin https://univer-workspace.apisos.workers.dev \
 *     --username admin --password password123 \
 *     --unit unit_welcome_sheet --set A1=Hello from AI
 *
 * Local edge: wrangler dev --port 8790, then --origin http://127.0.0.1:8790
 */
import { parseLiveEditArgs, runLiveEdit } from "../src/live-edit.ts";

const input = parseLiveEditArgs(process.argv.slice(2));
const result = await runLiveEdit(input);
process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
