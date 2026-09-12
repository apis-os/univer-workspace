import { historyDisplayName } from "../editor/history-names";
import type {
  SnapshotComparisonItem,
  WorktreeComparisonPayload,
} from "../worktrees/snapshot-comparison";

export interface LoadHistoryVsLiveInput {
  readonly unitId: string;
  readonly rev: number;
  readonly fetch: typeof fetch;
}

function colIndex(letters: string): number {
  let col = 0;
  for (let i = 0; i < letters.length; i += 1) {
    col = col * 26 + (letters.charCodeAt(i) - 64);
  }
  return col - 1;
}

function colName(col: number): string {
  let n = col + 1;
  let letters = "";
  while (n > 0) {
    const rem = (n - 1) % 26;
    letters = String.fromCharCode(65 + rem) + letters;
    n = Math.floor((n - 1) / 26);
  }
  return letters;
}

export function rowColToA1(row: number, col: number): string {
  return `${colName(col)}${row + 1}`;
}

export function a1ToRowCol(a1: string): { row: number; col: number } {
  const match = /^([A-Za-z]+)(\d+)$/.exec(a1.trim());
  if (!match) {
    throw new Error(`Invalid A1 address: ${a1}`);
  }
  return {
    row: parseInt(match[2], 10) - 1,
    col: colIndex(match[1].toUpperCase()),
  };
}

function cloneJson<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

export function createDefaultSheetSnapshot(
  unitId = "unit_welcome_sheet",
  name = "Q3 Forecast"
): Record<string, unknown> {
  return {
    id: unitId,
    name,
    sheetOrder: ["sheet_1"],
    sheets: {
      sheet_1: {
        id: "sheet_1",
        name: "Forecast",
        cellData: {},
      },
    },
  };
}

export function extractWorkbookData(
  snapshot: Record<string, unknown>,
  unitId: string
): Record<string, unknown> {
  const raw =
    (snapshot as { workbook?: Record<string, unknown> }).workbook ?? snapshot;
  const clone = cloneJson(raw);
  if (!clone.id) clone.id = unitId;
  if (!clone.sheetOrder && clone.sheets) {
    clone.sheetOrder = Object.keys(clone.sheets);
  }
  if (!clone.sheets) {
    clone.sheets = {
      sheet_1: {
        id: "sheet_1",
        name: "Forecast",
        cellData: {},
      },
    };
    clone.sheetOrder = ["sheet_1"];
  }
  return clone;
}

export function parseMutations(raw: unknown): Record<string, unknown>[] {
  if (!raw) return [];
  if (typeof raw === "string") {
    try {
      return parseMutations(JSON.parse(raw));
    } catch {
      return [];
    }
  }
  if (Array.isArray(raw)) {
    return raw.flatMap((item) => parseMutations(item));
  }
  if (typeof raw === "object") {
    const obj = raw as Record<string, unknown>;
    if (Array.isArray(obj.mutations)) return parseMutations(obj.mutations);
    if (Array.isArray(obj.actions)) return parseMutations(obj.actions);
    if (obj.mutation) return parseMutations(obj.mutation);
    if (typeof obj.id === "string") return [obj];
  }
  return [];
}

export function applyMutationsToWorkbook(
  workbook: Record<string, unknown>,
  mutations: readonly Record<string, unknown>[]
): void {
  const sheets = (workbook.sheets ?? {}) as Record<string, any>;
  const defaultSheetId =
    Array.isArray(workbook.sheetOrder) && workbook.sheetOrder[0]
      ? String(workbook.sheetOrder[0])
      : Object.keys(sheets)[0] || "sheet_1";

  for (const mutation of mutations) {
    const id = String(mutation.id ?? "");
    if (!id.includes("set-range-values")) continue;

    const params =
      mutation.params && typeof mutation.params === "object"
        ? (mutation.params as Record<string, unknown>)
        : mutation;
    const sheetId = String(
      params.subUnitId ?? params.sheetId ?? defaultSheetId
    );

    if (!sheets[sheetId]) {
      sheets[sheetId] = {
        id: sheetId,
        name: sheetId,
        cellData: {},
      };
    }
    const sheet = sheets[sheetId];
    if (!sheet.cellData || typeof sheet.cellData !== "object") {
      sheet.cellData = {};
    }

    const cellValue = params.cellValue as
      | Record<string, Record<string, any>>
      | undefined;
    if (cellValue && typeof cellValue === "object") {
      for (const [rStr, cols] of Object.entries(cellValue)) {
        const r = parseInt(rStr, 10);
        if (!Number.isFinite(r) || !cols || typeof cols !== "object") continue;
        for (const [cStr, val] of Object.entries(cols)) {
          const c = parseInt(cStr, 10);
          if (!Number.isFinite(c)) continue;

          if (!sheet.cellData[rStr]) {
            sheet.cellData[rStr] = {};
          }

          if (
            val === null ||
            val === undefined ||
            (typeof val === "object" && val.v === null && !val.f)
          ) {
            delete sheet.cellData[rStr][cStr];
            if (Object.keys(sheet.cellData[rStr]).length === 0) {
              delete sheet.cellData[rStr];
            }
          } else if (typeof val === "object") {
            sheet.cellData[rStr][cStr] = {
              ...(sheet.cellData[rStr][cStr] ?? {}),
              ...val,
            };
          } else {
            sheet.cellData[rStr][cStr] = { v: val };
          }
        }
      }
    }
  }
}

export function extractSheetCells(
  sheet: Record<string, unknown>
): Map<string, { a1: string; v: unknown; f?: string }> {
  const map = new Map<string, { a1: string; v: unknown; f?: string }>();
  const cellData = sheet.cellData as Record<string, Record<string, any>> | undefined;
  if (!cellData || typeof cellData !== "object") return map;

  for (const [rStr, cols] of Object.entries(cellData)) {
    const r = parseInt(rStr, 10);
    if (!Number.isFinite(r) || !cols || typeof cols !== "object") continue;
    for (const [cStr, cell] of Object.entries(cols)) {
      const c = parseInt(cStr, 10);
      if (!Number.isFinite(c) || !cell || typeof cell !== "object") continue;
      const v = cell.v;
      const f = typeof cell.f === "string" && cell.f ? cell.f : undefined;
      const isEmpty =
        (v === null || v === undefined || v === "") && f === undefined;
      if (!isEmpty) {
        const a1 = rowColToA1(r, c);
        map.set(a1, { a1, v, f });
      }
    }
  }
  return map;
}

function cellText(cell?: { v: unknown; f?: string }): string {
  if (!cell) return "";
  if (cell.f) return cell.f;
  if (cell.v == null) return "";
  return String(cell.v);
}

export function diffWorkbooks(
  left: Record<string, unknown>,
  right: Record<string, unknown>
): SnapshotComparisonItem[] {
  const items: SnapshotComparisonItem[] = [];
  const leftSheets = (left.sheets ?? {}) as Record<string, any>;
  const rightSheets = (right.sheets ?? {}) as Record<string, any>;
  const sheetIds = [
    ...new Set([...Object.keys(leftSheets), ...Object.keys(rightSheets)]),
  ];

  for (const sheetId of sheetIds) {
    const leftSheet = leftSheets[sheetId] ?? {};
    const rightSheet = rightSheets[sheetId] ?? {};

    const leftCells = extractSheetCells(leftSheet);
    const rightCells = extractSheetCells(rightSheet);
    const addresses = [
      ...new Set([...leftCells.keys(), ...rightCells.keys()]),
    ];

    for (const a1 of addresses) {
      const leftCell = leftCells.get(a1);
      const rightCell = rightCells.get(a1);

      const leftT = cellText(leftCell);
      const rightT = cellText(rightCell);

      if (leftT === rightT && leftCell?.f === rightCell?.f) {
        continue;
      }

      let kind: "insert" | "delete" | "update";
      if (!leftCell || (leftCell.v === undefined && !leftCell.f)) {
        kind = "insert";
      } else if (!rightCell || (rightCell.v === undefined && !rightCell.f)) {
        kind = "delete";
      } else {
        kind = "update";
      }

      items.push({
        id: `${sheetId}:${a1}`,
        kind,
        entityType: "cell",
        title: a1,
        changes: [
          {
            before:
              leftCell?.f ?? (leftCell?.v != null ? String(leftCell.v) : ""),
            after:
              rightCell?.f ?? (rightCell?.v != null ? String(rightCell.v) : ""),
          },
        ],
      });
    }
  }
  return items;
}

export async function loadHistoryVsLive(
  input: LoadHistoryVsLiveInput
): Promise<WorktreeComparisonPayload> {
  const snapRes = await input.fetch(
    `/universer-api/snapshot/2/unit/${encodeURIComponent(input.unitId)}`
  );
  if (!snapRes.ok) {
    throw new Error(`Failed to load live snapshot: ${snapRes.status}`);
  }
  const snapBody = (await snapRes.json().catch(() => ({}))) as Record<
    string,
    unknown
  >;
  const rawLiveSnapshot =
    (snapBody.snapshot as Record<string, unknown>) ??
    (snapBody.data as Record<string, unknown>) ??
    snapBody;
  const rightUnitData = extractWorkbookData(rawLiveSnapshot, input.unitId);
  const liveRev = Number(
    rawLiveSnapshot.rev ??
      (rawLiveSnapshot.workbook as { rev?: number })?.rev ??
      snapBody.rev ??
      1
  );

  const endRev = Math.max(liveRev, input.rev + 10);
  const historyRes = await input.fetch(
    `/universer-api/history/${encodeURIComponent(
      input.unitId
    )}/cs?startRevision=1&endRevision=${endRev}`
  );
  let changesets: Record<string, unknown>[] = [];
  if (historyRes.ok) {
    const historyBody = (await historyRes.json().catch(() => ({}))) as Record<
      string,
      unknown
    >;
    if (Array.isArray(historyBody.changesets)) {
      changesets = historyBody.changesets as Record<string, unknown>[];
    }
  }

  const targetCs = changesets.find(
    (cs) => Number(cs.revision ?? cs.rev) === input.rev
  );
  const writerId =
    (typeof targetCs?.userID === "string" && targetCs.userID) ||
    (typeof targetCs?.clientId === "string" && targetCs.clientId) ||
    (typeof targetCs?.memberID === "string" && targetCs.memberID) ||
    "";
  const writerName = writerId ? historyDisplayName(writerId) : "";
  const leftLabel = writerName
    ? `History · r${input.rev} (${writerName})`
    : `History · r${input.rev}`;
  const rightLabel = "Live Comb";

  const rewinds = changesets
    .filter((cs) => {
      const r = Number(cs.revision ?? cs.rev);
      return r > input.rev && r <= liveRev;
    })
    .sort((a, b) => Number(b.revision ?? b.rev) - Number(a.revision ?? a.rev));

  const hasInverses = rewinds.some((cs) => {
    const inv = cs.inverseMutation ?? cs.inverse_mutation;
    return inv && parseMutations(inv).length > 0;
  });

  let leftUnitData: Record<string, unknown>;

  if (hasInverses) {
    leftUnitData = cloneJson(rightUnitData);
    for (const cs of rewinds) {
      const inv = cs.inverseMutation ?? cs.inverse_mutation;
      const mutations = parseMutations(inv);
      applyMutationsToWorkbook(leftUnitData, mutations);
    }
  } else {
    leftUnitData = createDefaultSheetSnapshot(
      input.unitId,
      (rightUnitData.name as string) || "Q3 Forecast"
    );
    const forwardChanges = changesets
      .filter((cs) => {
        const r = Number(cs.revision ?? cs.rev);
        return r >= 1 && r <= input.rev;
      })
      .sort((a, b) => Number(a.revision ?? a.rev) - Number(b.revision ?? b.rev));
    for (const cs of forwardChanges) {
      const muts = parseMutations(cs.mutations ?? cs.mutation ?? cs.actions);
      applyMutationsToWorkbook(leftUnitData, muts);
    }
  }
  (leftUnitData as { rev?: number }).rev = input.rev;

  const items = diffWorkbooks(leftUnitData, rightUnitData);

  return {
    result: {
      comparisonId: `history_${input.unitId}_r${input.rev}_live`,
      fidelity: "history",
      unit: {
        unitId: input.unitId,
        type: 2,
        name:
          (leftUnitData.name as string) ||
          (rightUnitData.name as string) ||
          "Q3 Forecast",
      },
      summary: {
        insert: items.filter((i) => i.kind === "insert").length,
        delete: items.filter((i) => i.kind === "delete").length,
        update: items.filter((i) => i.kind === "update").length,
      },
      items,
      productContext: {
        kind: "sheet",
        sheets: [
          {
            id:
              Object.keys(
                (leftUnitData.sheets as object) ||
                  (rightUnitData.sheets as object) || { sheet_1: true }
              )[0] || "sheet_1",
            name: "Forecast",
            status: items.length > 0 ? "update" : "unchanged",
            changeCount: items.length,
          },
        ],
      },
    },
    left: {
      revision: input.rev,
      unitData: leftUnitData,
      label: leftLabel,
    },
    right: {
      revision: liveRev,
      unitData: rightUnitData,
      label: rightLabel,
    },
  };
}
