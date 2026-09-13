import { DEMO_UNIT_ID, DEMO_UNIVER_FILE, WorkspaceUniverFileClient } from "./univer-file.js";
import type { WorkspaceHttp } from "./http.js";

export const CLI_AGENT_DRAFT_WORKTREE_NAME = "Agent draft Fill";

export const CLI_AGENT_DRAFT_EXECUTE_CODE = [
  "const sheet = api.getActiveWorkbook().getActiveSheet();",
  "sheet.getRange('E2').setValue({ f: '=SUM(B2:D2)', v: 420 });",
  "sheet.getRange('E3').setValue({ f: '=SUM(B3:D3)', v: 228 });",
  "sheet.getRange('E4').setValue({ f: '=SUM(B4:D4)', v: 235 });",
].join("\n");

export interface CliAgentDraftResult {
  readonly worktreeId: string;
  readonly worktreeName: string;
  readonly followHref: string;
}

export async function runCliAgentDraftFill(
  http: WorkspaceHttp,
  unitId: string = DEMO_UNIT_ID
): Promise<CliAgentDraftResult> {
  const client = new WorkspaceUniverFileClient(http, DEMO_UNIVER_FILE);

  const created = await client.createWorktree({
    kind: "user",
    name: CLI_AGENT_DRAFT_WORKTREE_NAME,
    summary: null,
  });

  const worktreeId =
    typeof created["id"] === "string"
      ? created["id"]
      : typeof (created["worktree"] as Record<string, unknown> | undefined)?.["id"] === "string"
        ? String((created["worktree"] as Record<string, unknown>)["id"])
        : "";

  if (!worktreeId) {
    throw new Error("Failed to obtain worktree ID for Agent draft Fill");
  }

  try {
    await http.json(`/api/worktrees/${encodeURIComponent(worktreeId)}/units`, {
      method: "POST",
      body: { source: "trunk", unitId, resourceId: "res_welcome_sheet" },
    });
  } catch {
    // If unit is already attached or created implicitly, continue
  }

  await client.execute({
    worktreeId,
    unitId,
    code: CLI_AGENT_DRAFT_EXECUTE_CODE,
  });

  try {
    await client.readyWorktree(worktreeId);
  } catch {
    // Continue if already ready
  }

  const followHref = draftFollowHref(worktreeId, unitId);

  return {
    worktreeId,
    worktreeName: CLI_AGENT_DRAFT_WORKTREE_NAME,
    followHref,
  };
}

export function draftFollowHref(worktreeId: string, unitId: string): string {
  return `/worktrees/${encodeURIComponent(worktreeId)}/units/${encodeURIComponent(unitId)}/draft?embedded=true`;
}

