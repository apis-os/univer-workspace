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
  if (typeof body.id === "string") return body;
  if (body.workbook && typeof body.workbook === "object") {
    return body.workbook as Record<string, unknown>;
  }
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
