/**
 * `/render` snapshot apply. Ready only after a real snapshot body is passed to createWorkbook.
 */

export type RenderHydrateInput = {
  snapshot: unknown;
  createWorkbook?: (data: Record<string, unknown>) => unknown;
};

export type RenderHydrateResult = {
  ready: boolean;
};

export function snapshotWorkbook(snapshot: unknown): Record<string, unknown> | null {
  if (!snapshot || typeof snapshot !== "object") return null;
  const record = snapshot as Record<string, unknown>;
  const inner = record.snapshot ?? record.data ?? record;
  if (!inner || typeof inner !== "object") return null;
  const body = inner as Record<string, unknown>;
  if (typeof body.id === "string") return withWorkbookId(body);
  if (body.workbook && typeof body.workbook === "object") {
    return withWorkbookId(body.workbook as Record<string, unknown>);
  }
  if (body.sheets && typeof body.sheets === "object") {
    return withWorkbookId(body);
  }
  return null;
}

function withWorkbookId(workbook: Record<string, unknown>): Record<string, unknown> {
  if (typeof workbook.id === "string") return workbook;
  const unitID = workbook.unitID ?? workbook.unitId;
  if (typeof unitID === "string") return { ...workbook, id: unitID };
  return workbook;
}

export function injectedRenderSnapshot(globalLike: { __UNIVER_SNAPSHOT?: unknown }): unknown | null {
  const injected = globalLike.__UNIVER_SNAPSHOT;
  if (injected && typeof injected === "object") return injected;
  return null;
}

export function hydrateRenderWorkbook(input: RenderHydrateInput): RenderHydrateResult {
  const workbook = snapshotWorkbook(input.snapshot);
  if (!workbook) return { ready: false };
  if (typeof input.createWorkbook === "function") {
    input.createWorkbook(workbook);
  }
  return { ready: true };
}
