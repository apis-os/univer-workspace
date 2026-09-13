/**
 * Snapshot-vs-snapshot comparison for Worktree Compare.
 * This is not a full OT engine: it diffs stored snapshots (cells, sheets, doc text).
 */
import {
  cloneSnapshot,
  decodeOriginalMeta,
  getDocPlainText,
  rowColToA1
} from "../plugins/univer-snapshot.ts";

export interface SnapshotComparisonMeta {
  readonly comparisonId: string;
  readonly unitId: string;
  readonly type: number;
  readonly name: string;
}

export interface SnapshotComparisonBody {
  readonly result: Record<string, unknown>;
  readonly leftUnitData: Record<string, unknown> | null;
  readonly rightUnitData: Record<string, unknown> | null;
}

interface CellRecord {
  readonly a1: string;
  readonly row: number;
  readonly col: number;
  readonly v: unknown;
  readonly f: string | undefined;
  readonly text: string;
  readonly key: string;
}

interface DiffItem {
  readonly id: string;
  readonly stableId: string;
  readonly parentStableId?: string;
  readonly scope?: { readonly entityType: string; readonly stableId: string };
  readonly kind: "insert" | "delete" | "update";
  readonly entityType: string;
  readonly path: readonly string[];
  readonly title: string;
  readonly moved: false;
  readonly changes: readonly Record<string, unknown>[];
  readonly details: readonly Record<string, unknown>[];
  readonly locations: {
    readonly left: Record<string, unknown> | null;
    readonly right: Record<string, unknown> | null;
  };
  readonly values?: { readonly left?: unknown; readonly right?: unknown };
}

export function extractComparisonUnitData(
  snapshot: Record<string, unknown> | null | undefined,
  type: number
): Record<string, unknown> | null {
  if (!snapshot) return null;
  if (type === 1) return extractDocumentData(snapshot);
  if (type === 3) return extractSlideData(snapshot);
  if (type === 4 || type === 5) return extractNamedPayload(snapshot, type === 4 ? "board" : "base");
  return extractWorkbookData(snapshot);
}

export function compareSnapshots(
  left: Record<string, unknown> | null | undefined,
  right: Record<string, unknown> | null | undefined,
  meta: SnapshotComparisonMeta
): SnapshotComparisonBody {
  const leftUnitData = extractComparisonUnitData(left ?? null, meta.type);
  const rightUnitData = extractComparisonUnitData(right ?? null, meta.type);
  const items =
    meta.type === 1
      ? diffDocuments(left ?? null, right ?? null, leftUnitData, rightUnitData)
      : meta.type === 2 || !meta.type
        ? diffWorkbooks(leftUnitData, rightUnitData)
        : diffOpaqueUnits(leftUnitData, rightUnitData, meta.type);

  const insert = items.filter((item) => item.kind === "insert").length;
  const del = items.filter((item) => item.kind === "delete").length;
  const update = items.filter((item) => item.kind === "update").length;
  const byEntityType: Record<string, number> = {};
  for (const item of items) {
    byEntityType[item.entityType] = (byEntityType[item.entityType] ?? 0) + 1;
  }

  const productContext =
    meta.type === 1
      ? docProductContext(items)
      : meta.type === 3
        ? { kind: "slide" }
        : meta.type === 4
          ? { kind: "board" }
          : meta.type === 5 || meta.type === 6
            ? { kind: "base", visualProjection: "raw-table-data" }
            : sheetProductContext(leftUnitData, rightUnitData, items);

  const scopes = uniqueScopes(items, productContext);

  return {
    leftUnitData,
    rightUnitData,
    result: {
      schemaVersion: 1,
      comparisonId: meta.comparisonId,
      unit: { unitId: meta.unitId, type: meta.type, name: meta.name },
      fidelity: "snapshot",
      stale: false,
      detail: "changes",
      summary: {
        total: items.length,
        insert,
        delete: del,
        update,
        moved: 0,
        byEntityType
      },
      coverage: {
        supportedEntityTypes: ["cell", "worksheet", "workbook", "paragraph", "slide"]
      },
      scopes,
      page: {
        offset: 0,
        limit: items.length,
        matched: items.length,
        hasMore: false
      },
      items,
      diagnostics: {
        readiness: "ready",
        unsupportedMutationIds: [],
        codes: []
      },
      productContext
    }
  };
}

function extractWorkbookData(snapshot: Record<string, unknown>): Record<string, unknown> | null {
  const raw = (snapshot as { workbook?: Record<string, unknown> }).workbook ?? snapshot;
  if (!raw || typeof raw !== "object" || !(raw as { sheets?: unknown }).sheets) return null;
  const workbook = cloneSnapshot(raw as Record<string, unknown>);
  const id = String(
    (workbook as { id?: unknown }).id ||
      (workbook as { unitID?: unknown }).unitID ||
      snapshot.unitID ||
      ""
  );
  (workbook as { id: string }).id = id;
  if (!(workbook as { name?: unknown }).name && typeof snapshot.unitID === "string") {
    (workbook as { name?: string }).name = String(
      (workbook as { name?: unknown }).name || snapshot.unitID
    );
  }
  return workbook;
}

function extractDocumentData(snapshot: Record<string, unknown>): Record<string, unknown> | null {
  if (snapshot.body && typeof snapshot.body === "object") {
    const doc = cloneSnapshot(snapshot);
    if (typeof (doc as { id?: unknown }).id !== "string") {
      (doc as { id: string }).id = String(snapshot.id || snapshot.unitID || "doc");
    }
    return doc;
  }
  const wrapped = (snapshot as { doc?: Record<string, unknown> }).doc;
  if (!wrapped) return null;
  const meta = decodeOriginalMeta(wrapped.originalMeta) ?? {};
  return {
    ...meta,
    id: String(wrapped.unitID || snapshot.unitID || wrapped.id || "doc"),
    title: wrapped.name || (meta as { title?: string }).title,
    name: wrapped.name || (meta as { name?: string }).name
  };
}

function extractSlideData(snapshot: Record<string, unknown>): Record<string, unknown> | null {
  if ((snapshot as { slides?: unknown }).slides) {
    const slide = cloneSnapshot(snapshot);
    if (typeof (slide as { id?: unknown }).id !== "string") {
      (slide as { id: string }).id = String(snapshot.id || snapshot.unitID || "slide");
    }
    return slide;
  }
  const wrapped = (snapshot as { slide?: Record<string, unknown> }).slide;
  if (!wrapped) return null;
  const meta = decodeOriginalMeta(wrapped.originalMeta) ?? {};
  return {
    ...meta,
    id: String(wrapped.unitID || snapshot.unitID || wrapped.id || "slide"),
    title: wrapped.name || (meta as { title?: string }).title,
    name: wrapped.name || (meta as { name?: string }).name
  };
}

function extractNamedPayload(
  snapshot: Record<string, unknown>,
  key: "board" | "base"
): Record<string, unknown> | null {
  const wrapped = (snapshot as Record<string, unknown>)[key];
  if (wrapped && typeof wrapped === "object") {
    const data = cloneSnapshot(wrapped as Record<string, unknown>);
    if (typeof (data as { id?: unknown }).id !== "string") {
      (data as { id: string }).id = String(snapshot.unitID || key);
    }
    return data;
  }
  if ((snapshot as { id?: unknown }).id || (snapshot as { sheets?: unknown }).sheets) {
    return cloneSnapshot(snapshot);
  }
  return null;
}

function diffWorkbooks(
  left: Record<string, unknown> | null,
  right: Record<string, unknown> | null
): DiffItem[] {
  const items: DiffItem[] = [];
  const leftName = typeof left?.name === "string" ? left.name : "";
  const rightName = typeof right?.name === "string" ? right.name : "";
  if (leftName && rightName && leftName !== rightName) {
    items.push(
      namedItem({
        id: "workbook:name",
        stableId: String(right?.id || left?.id || "workbook"),
        kind: "update",
        entityType: "workbook",
        path: ["name"],
        title: rightName,
        before: leftName,
        after: rightName
      })
    );
  }

  const leftSheets = (left?.sheets ?? {}) as Record<string, any>;
  const rightSheets = (right?.sheets ?? {}) as Record<string, any>;
  const sheetIds = unique([
    ...sheetOrder(left),
    ...sheetOrder(right),
    ...Object.keys(leftSheets),
    ...Object.keys(rightSheets)
  ]);

  for (const sheetId of sheetIds) {
    const leftSheet = leftSheets[sheetId];
    const rightSheet = rightSheets[sheetId];
    if (!leftSheet && rightSheet) {
      items.push(
        namedItem({
          id: `worksheet:${sheetId}`,
          stableId: sheetId,
          kind: "insert",
          entityType: "worksheet",
          path: [sheetId],
          title: String(rightSheet.name || sheetId),
          after: rightSheet.name || sheetId
        })
      );
    } else if (leftSheet && !rightSheet) {
      items.push(
        namedItem({
          id: `worksheet:${sheetId}`,
          stableId: sheetId,
          kind: "delete",
          entityType: "worksheet",
          path: [sheetId],
          title: String(leftSheet.name || sheetId),
          before: leftSheet.name || sheetId
        })
      );
    } else if (leftSheet && rightSheet && String(leftSheet.name || "") !== String(rightSheet.name || "")) {
      items.push(
        namedItem({
          id: `worksheet:${sheetId}:name`,
          stableId: sheetId,
          kind: "update",
          entityType: "worksheet",
          path: [sheetId, "name"],
          title: String(rightSheet.name || sheetId),
          before: leftSheet.name,
          after: rightSheet.name
        })
      );
    }

    const leftCells = cellMap(leftSheet);
    const rightCells = cellMap(rightSheet);
    const addresses = unique([...leftCells.keys(), ...rightCells.keys()]);
    for (const a1 of addresses) {
      const leftCell = leftCells.get(a1);
      const rightCell = rightCells.get(a1);
      if (leftCell && rightCell && leftCell.key === rightCell.key) continue;
      if (!leftCell && !rightCell) continue;
      const kind: DiffItem["kind"] = !leftCell ? "insert" : !rightCell ? "delete" : "update";
      items.push({
        id: `${sheetId}:${a1}`,
        stableId: a1,
        parentStableId: sheetId,
        scope: { entityType: "worksheet", stableId: sheetId },
        kind,
        entityType: "cell",
        path: [sheetId, a1],
        title: a1,
        moved: false,
        changes: [
          {
            path: ["value"],
            kind,
            valueType: "string",
            before: leftCell?.text,
            after: rightCell?.text
          }
        ],
        details: [
          {
            label: "value",
            before: leftCell?.text ?? null,
            after: rightCell?.text ?? null,
            kind
          }
        ],
        locations: {
          left: cellLocation(sheetId, leftCell),
          right: cellLocation(sheetId, rightCell)
        },
        values: {
          ...(leftCell ? { left: { value: leftCell.v, formula: leftCell.f } } : {}),
          ...(rightCell ? { right: { value: rightCell.v, formula: rightCell.f } } : {})
        }
      });
    }
  }
  return items;
}

function diffDocuments(
  leftSnapshot: Record<string, unknown> | null,
  rightSnapshot: Record<string, unknown> | null,
  leftUnit: Record<string, unknown> | null,
  rightUnit: Record<string, unknown> | null
): DiffItem[] {
  const leftText = leftSnapshot ? getDocPlainText(leftSnapshot) : documentText(leftUnit);
  const rightText = rightSnapshot ? getDocPlainText(rightSnapshot) : documentText(rightUnit);
  if (leftText === rightText) return [];
  const kind: DiffItem["kind"] = !leftText ? "insert" : !rightText ? "delete" : "update";
  return [
    {
      id: "body:0",
      stableId: "body",
      kind,
      entityType: "paragraph",
      path: ["body"],
      title: "Body",
      moved: false,
      changes: [
        {
          path: ["text"],
          kind,
          valueType: "string",
          before: leftText || undefined,
          after: rightText || undefined
        }
      ],
      details: [
        {
          label: "text",
          before: leftText || null,
          after: rightText || null,
          kind
        }
      ],
      locations: {
        left: leftText ? { path: ["body"], stableId: "body", position: 0 } : null,
        right: rightText ? { path: ["body"], stableId: "body", position: 0 } : null
      },
      values: { left: leftText, right: rightText }
    }
  ];
}

function diffOpaqueUnits(
  left: Record<string, unknown> | null,
  right: Record<string, unknown> | null,
  type: number
): DiffItem[] {
  const leftKey = stableJson(left);
  const rightKey = stableJson(right);
  if (leftKey === rightKey) return [];
  const kind: DiffItem["kind"] = !left ? "insert" : !right ? "delete" : "update";
  const entityType = type === 3 ? "slide" : "unit";
  return [
    namedItem({
      id: `${entityType}:unit`,
      stableId: String(right?.id || left?.id || entityType),
      kind,
      entityType,
      path: [entityType],
      title: String(right?.name || left?.name || entityType),
      before: left ? "present" : undefined,
      after: right ? "present" : undefined
    })
  ];
}

function sheetProductContext(
  left: Record<string, unknown> | null,
  right: Record<string, unknown> | null,
  items: readonly DiffItem[]
): Record<string, unknown> {
  const leftSheets = (left?.sheets ?? {}) as Record<string, any>;
  const rightSheets = (right?.sheets ?? {}) as Record<string, any>;
  const sheetIds = unique([
    ...sheetOrder(left),
    ...sheetOrder(right),
    ...Object.keys(leftSheets),
    ...Object.keys(rightSheets)
  ]);
  const sheets = sheetIds.map((sheetId) => {
    const related = items.filter(
      (item) => item.parentStableId === sheetId || (item.entityType === "worksheet" && item.stableId === sheetId)
    );
    const status = !leftSheets[sheetId]
      ? "insert"
      : !rightSheets[sheetId]
        ? "delete"
        : related.length > 0
          ? "update"
          : "unchanged";
    return {
      id: sheetId,
      name: String(rightSheets[sheetId]?.name || leftSheets[sheetId]?.name || sheetId),
      status,
      changeCount: related.length
    };
  });
  return { kind: "sheet", sheets };
}

function docProductContext(items: readonly DiffItem[]): Record<string, unknown> {
  const rows = items.map((item, index) => ({
    id: item.id,
    stableId: item.stableId,
    kind: item.kind,
    moved: false,
    leftIndex: item.kind === "insert" ? null : index,
    rightIndex: item.kind === "delete" ? null : index,
    leftNativeStableId: item.kind === "insert" ? null : item.stableId,
    rightNativeStableId: item.kind === "delete" ? null : item.stableId
  }));
  return {
    kind: "doc",
    paragraphAlignment: {
      total: rows.length,
      page: { offset: 0, limit: rows.length, matched: rows.length, hasMore: false },
      rows
    }
  };
}

function uniqueScopes(
  items: readonly DiffItem[],
  productContext: Record<string, unknown>
): Array<{ entityType: string; stableId: string; displayName: string; kind: string }> {
  if (productContext.kind === "sheet" && Array.isArray(productContext.sheets)) {
    return (productContext.sheets as Array<{ id: string; name: string; status: string }>).map((sheet) => ({
      entityType: "worksheet",
      stableId: sheet.id,
      displayName: sheet.name,
      kind: sheet.status === "unchanged" ? "update" : sheet.status
    }));
  }
  return items
    .filter((item) => item.entityType !== "cell")
    .map((item) => ({
      entityType: item.entityType,
      stableId: item.stableId,
      displayName: item.title,
      kind: item.kind
    }));
}

function namedItem(input: {
  id: string;
  stableId: string;
  kind: DiffItem["kind"];
  entityType: string;
  path: readonly string[];
  title: string;
  before?: unknown;
  after?: unknown;
}): DiffItem {
  return {
    id: input.id,
    stableId: input.stableId,
    kind: input.kind,
    entityType: input.entityType,
    path: input.path,
    title: input.title,
    moved: false,
    changes: [
      {
        path: input.path.slice(-1),
        kind: input.kind,
        valueType: "string",
        before: input.before,
        after: input.after
      }
    ],
    details: [
      {
        label: input.path[input.path.length - 1] || input.entityType,
        before: input.before ?? null,
        after: input.after ?? null,
        kind: input.kind
      }
    ],
    locations: {
      left: input.kind === "insert" ? null : { path: input.path, stableId: input.stableId },
      right: input.kind === "delete" ? null : { path: input.path, stableId: input.stableId }
    }
  };
}

function sheetOrder(workbook: Record<string, unknown> | null): string[] {
  const order = workbook?.sheetOrder;
  return Array.isArray(order) ? order.map(String) : [];
}

function cellMap(sheet: any): Map<string, CellRecord> {
  const out = new Map<string, CellRecord>();
  const cellData = sheet?.cellData;
  if (!cellData || typeof cellData !== "object") return out;
  for (const [rowKey, cols] of Object.entries(cellData as Record<string, unknown>)) {
    const row = Number(rowKey);
    if (!Number.isFinite(row) || !cols || typeof cols !== "object") continue;
    for (const [colKey, cell] of Object.entries(cols as Record<string, unknown>)) {
      const col = Number(colKey);
      if (!Number.isFinite(col)) continue;
      const parsed = parseCell(cell, row, col);
      if (parsed) out.set(parsed.a1, parsed);
    }
  }
  return out;
}

function parseCell(cell: unknown, row: number, col: number): CellRecord | null {
  if (!cell || typeof cell !== "object") return null;
  const record = cell as { v?: unknown; f?: unknown };
  const f = typeof record.f === "string" && record.f ? record.f : undefined;
  const v = record.v;
  const emptyValue = v === undefined || v === null || v === "";
  if (f === undefined && emptyValue) return null;
  const text = f ?? String(v);
  return {
    a1: rowColToA1(row, col),
    row,
    col,
    v,
    f,
    text,
    key: JSON.stringify({ v: emptyValue ? null : v, f: f ?? null })
  };
}

function cellLocation(sheetId: string, cell: CellRecord | undefined): Record<string, unknown> | null {
  if (!cell) return null;
  return {
    path: [sheetId, cell.a1],
    stableId: cell.a1,
    target: {
      kind: "sheet-range",
      entityType: "cell",
      stableId: cell.a1,
      comparisonStableId: cell.a1,
      parentStableId: sheetId,
      range: {
        startRow: cell.row,
        endRow: cell.row,
        startColumn: cell.col,
        endColumn: cell.col
      }
    }
  };
}

function documentText(unit: Record<string, unknown> | null): string {
  if (!unit) return "";
  const stream = (unit.body as { dataStream?: string } | undefined)?.dataStream;
  if (typeof stream === "string") {
    return stream.replace(/\r\n$/u, "").replace(/\r/g, "\n");
  }
  return "";
}

function unique(values: readonly string[]): string[] {
  return [...new Set(values.filter(Boolean))];
}

function stableJson(value: unknown): string {
  try {
    return JSON.stringify(value ?? null);
  } catch {
    return String(value);
  }
}
