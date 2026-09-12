import { WHAT_IF_WORKTREE_NAME } from "../worktrees/snapshot-comparison";
import type { WorktreeComparisonPayload } from "../worktrees/snapshot-comparison";
import { writeDemoComparison } from "./demo-comparison-session";
import {
  a1ToRowCol,
  diffWorkbooks,
  extractWorkbookData,
} from "./history-vs-live";

export const DEMO_UNIVER_FILE = "workspace.univer";
export const DEMO_RESOURCE_ID = "res_welcome_sheet";
export { WHAT_IF_WORKTREE_NAME };
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
export type WhatIfToastKey =
  | "demoWhatIfBusy"
  | "demoWhatIfError"
  | "demoDraftBusy"
  | "demoDraftError";

export interface WhatIfHost {
  readonly fetch: typeof fetch;
  readonly toast: (kind: WhatIfToastKind, key: WhatIfToastKey) => void;
  readonly openComparison: (input: {
    readonly worktreeId: string;
    readonly unitId: string;
  }) => void;
  readonly invalidateWorktrees: () => Promise<void> | void;
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

export function spaceIdFromFileKey(key: string): string {
  const path = atob(key.replace(/-/g, "+").replace(/_/g, "/"));
  return `space_uf_${[...new Uint8Array(new TextEncoder().encode(path))]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
    .slice(0, 24)}`;
}

export function demoUniverFileSpaceId(): string {
  return spaceIdFromFileKey(demoUniverFileKey());
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
    demo: "what-if",
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

export function whatIfApiPath(rest = ""): string {
  const suffix = rest.replace(/^\//u, "");
  return suffix === "" ? "/api/worktrees" : `/api/worktrees/${suffix}`;
}

export const WHAT_IF_SEP_VALUES = {
  D2: 160 * 1.1,
  D3: 85 * 1.1,
  D4: 90 * 1.1,
} as const;

export async function buildWhatIfComparison(
  fetchImpl: typeof fetch,
  unitId = "unit_welcome_sheet"
): Promise<WorktreeComparisonPayload> {
  const snapRes = await fetchImpl(
    `/universer-api/snapshot/2/unit/${encodeURIComponent(unitId)}`
  );
  if (!snapRes.ok) {
    throw new Error(`Failed to load live snapshot: ${snapRes.status}`);
  }
  const snapBody = (await snapRes.json().catch(() => ({}))) as Record<string, unknown>;
  const raw =
    (snapBody.snapshot as Record<string, unknown>) ??
    (snapBody.data as Record<string, unknown>) ??
    snapBody;
  const leftUnitData = extractWorkbookData(raw, unitId);
  const rightUnitData = JSON.parse(JSON.stringify(leftUnitData)) as Record<string, unknown>;
  applyWhatIfSep(rightUnitData);
  const items = diffWorkbooks(leftUnitData, rightUnitData);
  const liveRev = Number(
    (raw as { rev?: number }).rev ?? snapBody.rev ?? 1
  );
  return {
    result: {
      comparisonId: `whatif_${unitId}`,
      fidelity: "what-if",
      unit: {
        unitId,
        type: 2,
        name: (leftUnitData.name as string) || "Q3 Forecast",
      },
      summary: {
        insert: items.filter((i) => i.kind === "insert").length,
        delete: items.filter((i) => i.kind === "delete").length,
        update: items.filter((i) => i.kind === "update").length,
      },
      items,
    },
    left: {
      revision: liveRev,
      unitData: leftUnitData,
      label: WHAT_IF_COMPARE_LEFT,
    },
    right: {
      revision: liveRev,
      unitData: rightUnitData,
      label: WHAT_IF_COMPARE_RIGHT,
    },
  };
}

function applyWhatIfSep(workbook: Record<string, unknown>): void {
  const sheets = (workbook.sheets ?? {}) as Record<string, { cellData?: Record<string, Record<string, { v?: unknown }>> }>;
  const sheetId = Array.isArray(workbook.sheetOrder) && workbook.sheetOrder[0]
    ? String(workbook.sheetOrder[0])
    : Object.keys(sheets)[0] || "sheet_1";
  if (!sheets[sheetId]) {
    sheets[sheetId] = { cellData: {} };
  }
  if (!sheets[sheetId].cellData) sheets[sheetId].cellData = {};
  const cellData = sheets[sheetId].cellData!;
  for (const [a1, value] of Object.entries(WHAT_IF_SEP_VALUES)) {
    const { row, col } = a1ToRowCol(a1);
    const r = String(row);
    const c = String(col);
    if (!cellData[r]) cellData[r] = {};
    cellData[r][c] = { v: value };
  }
  workbook.sheets = sheets;
}

export async function runWhatIfWorktree(host: WhatIfHost): Promise<void> {
  host.toast("busy", "demoWhatIfBusy");
  let worktreeId = "wt_what_if_local";
  let unitId = "unit_welcome_sheet";
  let apiOk = false;
  try {
    const created = await jsonPost(host.fetch, whatIfUfPath("worktrees"), {
      kind: "user",
      name: WHAT_IF_WORKTREE_NAME,
      summary: null,
      teamSpaceId: demoUniverFileSpaceId(),
    });
    worktreeId = worktreeIdFrom(created);
    const added = await jsonPost(
      host.fetch,
      whatIfApiPath(`${encodeURIComponent(worktreeId)}/units`),
      { source: "trunk", resourceId: DEMO_RESOURCE_ID }
    );
    unitId = unitIdFrom(added);
    await jsonPost(
      host.fetch,
      whatIfUfPath(
        `worktrees/${encodeURIComponent(worktreeId)}/units/${encodeURIComponent(unitId)}/execute`
      ),
      { code: WHAT_IF_EXECUTE_CODE }
    );
    await jsonPost(
      host.fetch,
      whatIfApiPath(`${encodeURIComponent(worktreeId)}/ready`)
    );
    await host.invalidateWorktrees();
    apiOk = true;
  } catch {
    // Comparison overlay still opens from the live snapshot even if worktree APIs 404.
  }
  try {
    const comparison = await buildWhatIfComparison(host.fetch);
    writeDemoComparison({
      kind: "what-if",
      worktreeId,
      unitId,
      worktreeName: WHAT_IF_WORKTREE_NAME,
      comparison,
    });
  } catch {
    if (!apiOk) {
      host.toast("error", "demoWhatIfError");
      return;
    }
  }
  host.openComparison({ worktreeId, unitId });
}

export async function mergeWhatIfOnTrunk(
  fetchImpl: typeof fetch,
  unitId = "unit_welcome_sheet"
): Promise<void> {
  await jsonPost(fetchImpl, whatIfUfPath(`units/${encodeURIComponent(unitId)}/execute`), {
    code: WHAT_IF_EXECUTE_CODE,
  });
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
