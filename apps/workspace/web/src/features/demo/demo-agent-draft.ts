import {
  DEMO_RESOURCE_ID,
  demoUniverFileSpaceId,
  whatIfApiPath,
  whatIfUfPath,
  type WhatIfHost,
} from "./demo-what-if";

export const AGENT_DRAFT_WORKTREE_NAME = "Agent draft Fill";

export const AGENT_DRAFT_EXECUTE_CODE = [
  "const sheet = api.getActiveWorkbook().getActiveSheet();",
  "sheet.getRange('E2').setValue({ f: '=SUM(B2:D2)', v: 420 });",
  "sheet.getRange('E3').setValue({ f: '=SUM(B3:D3)', v: 228 });",
  "sheet.getRange('E4').setValue({ f: '=SUM(B4:D4)', v: 235 });",
].join("\n");

export function worktreeCombPath(worktreeId: string): string {
  return `/universer-api/worktrees/${encodeURIComponent(worktreeId)}/comb/connect`;
}

export function isWorktreeCombPath(pathname: string): boolean {
  return /^\/universer-api\/worktrees\/[^/]+\/comb\/connect$/.test(pathname);
}

export function isAgentDraftWorktreeName(name: string | undefined): boolean {
  return name === AGENT_DRAFT_WORKTREE_NAME;
}

export function draftFollowHref(worktreeId: string, unitId: string): string {
  return `/worktrees/${encodeURIComponent(worktreeId)}/units/${encodeURIComponent(unitId)}/draft?embedded=true`;
}

export async function runAgentDraftFill(
  host: WhatIfHost & { followDraft: (href: string) => void }
): Promise<void> {
  host.toast("busy", "demoDraftBusy");
  try {
    const created = await jsonPost(host.fetch, whatIfUfPath("worktrees"), {
      kind: "user",
      name: AGENT_DRAFT_WORKTREE_NAME,
      summary: null,
      teamSpaceId: demoUniverFileSpaceId(),
    });
    const worktreeId = worktreeIdFrom(created);

    const added = await jsonPost(
      host.fetch,
      whatIfApiPath(`${encodeURIComponent(worktreeId)}/units`),
      { source: "trunk", resourceId: DEMO_RESOURCE_ID }
    );
    const unitId = unitIdFrom(added);

    await jsonPost(
      host.fetch,
      whatIfUfPath(
        `worktrees/${encodeURIComponent(worktreeId)}/units/${encodeURIComponent(unitId)}/execute`
      ),
      { code: AGENT_DRAFT_EXECUTE_CODE },
      {
        "x-workspace-user-id": "agent_workspace",
        "x-workspace-actor-id": "agent_workspace",
      }
    );

    await jsonPost(
      host.fetch,
      whatIfApiPath(`${encodeURIComponent(worktreeId)}/ready`)
    );

    await host.invalidateWorktrees();
    host.openComparison({ worktreeId, unitId });
    host.followDraft(draftFollowHref(worktreeId, unitId));
  } catch {
    host.toast("error", "demoDraftError");
  }
}

async function jsonPost(
  fetchImpl: typeof fetch,
  path: string,
  body?: Record<string, unknown>,
  extraHeaders?: Record<string, string>
): Promise<Record<string, unknown>> {
  const response = await fetchImpl(path, {
    method: "POST",
    credentials: "include",
    headers: {
      ...(body === undefined ? {} : { "Content-Type": "application/json" }),
      ...(extraHeaders ?? {}),
    },
    ...(body === undefined ? {} : { body: JSON.stringify(body) }),
  });
  if (!response.ok) {
    throw new Error(`Agent draft request failed: ${response.status}`);
  }
  const parsed: unknown = await response.json().catch(() => ({}));
  return isRecord(parsed) ? parsed : {};
}

function worktreeIdFrom(body: Record<string, unknown>): string {
  if (typeof body.id === "string" && body.id.length > 0) return body.id;
  const nested = body.worktree;
  if (isRecord(nested) && typeof nested.id === "string" && nested.id.length > 0) {
    return nested.id;
  }
  throw new Error("Worktree create response is missing id.");
}

function unitIdFrom(body: Record<string, unknown>): string {
  const unit = body.unit;
  if (isRecord(unit) && typeof unit.unitId === "string" && unit.unitId.length > 0) {
    return unit.unitId;
  }
  if (typeof body.unitId === "string" && body.unitId.length > 0) {
    return body.unitId;
  }
  throw new Error("Worktree unit response is missing unitId.");
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
