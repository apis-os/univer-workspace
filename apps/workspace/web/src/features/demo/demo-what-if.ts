export const DEMO_UNIVER_FILE = "workspace.univer";
export const DEMO_RESOURCE_ID = "res_welcome_sheet";
export const WHAT_IF_WORKTREE_NAME = "What-if +10% Sep";
export const WHAT_IF_RANGE = "D2:D4";
export const WHAT_IF_COMPARE_LEFT = "Official";
export const WHAT_IF_COMPARE_RIGHT = "What-if";

export const WHAT_IF_EXECUTE_CODE = [
  "const sheet = api.getActiveWorkbook().getActiveSheet();",
  "sheet.getRange('D2').setValue({ v: 160 * 1.1 });",
  "sheet.getRange('D3').setValue({ v: 85 * 1.1 });",
  "sheet.getRange('D4').setValue({ v: 90 * 1.1 });",
].join("\n");

export type WhatIfToastKind = "busy" | "error";
export type WhatIfToastKey = "demoWhatIfBusy" | "demoWhatIfError";

export interface WhatIfHost {
  readonly fetch: typeof fetch;
  readonly toast: (kind: WhatIfToastKind, key: WhatIfToastKey) => void;
  readonly openComparison: (input: {
    readonly worktreeId: string;
    readonly unitId: string;
  }) => void;
}

export function fileKeyOf(path: string): string {
  const bytes = new TextEncoder().encode(path.replace(/\\/g, "/"));
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

export function demoUniverFileKey(): string {
  return fileKeyOf(DEMO_UNIVER_FILE);
}

export function whatIfUfPath(rest = ""): string {
  const key = demoUniverFileKey();
  const suffix = rest.replace(/^\//u, "");
  return suffix === "" ? `/uf/${key}` : `/uf/${key}/${suffix}`;
}

export function whatIfComparisonHref(
  worktreeId: string,
  unitId: string
): string {
  const params = new URLSearchParams({
    worktree: worktreeId,
    unit: unitId,
    view: "comparison",
  });
  return `/worktrees?${params.toString()}`;
}

export function isWhatIfWorktreeName(name: string | undefined): boolean {
  return name === WHAT_IF_WORKTREE_NAME;
}

export function comparisonLabelsForWorktree(name: string | undefined): {
  readonly officialVersion: string;
  readonly agentVersion: string;
} {
  if (isWhatIfWorktreeName(name)) {
    return {
      officialVersion: WHAT_IF_COMPARE_LEFT,
      agentVersion: WHAT_IF_COMPARE_RIGHT,
    };
  }
  return {
    officialVersion: "",
    agentVersion: "",
  };
}

export async function runWhatIfWorktree(host: WhatIfHost): Promise<void> {
  host.toast("busy", "demoWhatIfBusy");
  try {
    const created = await jsonPost(host.fetch, whatIfUfPath("worktrees"), {
      name: WHAT_IF_WORKTREE_NAME,
    });
    const worktreeId = worktreeIdFrom(created);
    const added = await jsonPost(
      host.fetch,
      whatIfUfPath(`worktrees/${encodeURIComponent(worktreeId)}/units`),
      { source: "trunk", resourceId: DEMO_RESOURCE_ID }
    );
    const unitId = unitIdFrom(added);
    await jsonPost(
      host.fetch,
      whatIfUfPath(
        `worktrees/${encodeURIComponent(worktreeId)}/units/${encodeURIComponent(unitId)}/execute`
      ),
      { code: WHAT_IF_EXECUTE_CODE }
    );
    await jsonPost(
      host.fetch,
      whatIfUfPath(`worktrees/${encodeURIComponent(worktreeId)}/ready`)
    );
    host.openComparison({ worktreeId, unitId });
  } catch {
    host.toast("error", "demoWhatIfError");
  }
}

async function jsonPost(
  fetchImpl: typeof fetch,
  path: string,
  body?: Record<string, unknown>
): Promise<Record<string, unknown>> {
  const response = await fetchImpl(path, {
    method: "POST",
    credentials: "include",
    ...(body === undefined
      ? {}
      : {
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }),
  });
  if (!response.ok) {
    throw new Error(`What-if request failed: ${response.status}`);
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
