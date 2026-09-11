/**
 * Snapshot helpers for agent Facade-style sheet/doc edits.
 * Cell addressing follows univer-sdk-skills Facade recipes (`getRange` / `setValues`).
 * Changeset apply uses decoded `@univerjs-pro/collaboration-service` `UniverUnitRuntime`.
 */
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

export interface SheetCellValue {
  v?: string | number | boolean | null;
  f?: string;
  t?: number;
}

export function a1ToRowCol(a1: string): { row: number; col: number } {
  const match = /^([A-Za-z]+)(\d+)$/.exec(String(a1).trim());
  if (!match) {
    throw new Error(`Invalid A1 address: ${a1}`);
  }
  const letters = match[1].toUpperCase();
  let col = 0;
  for (let i = 0; i < letters.length; i++) {
    col = col * 26 + (letters.charCodeAt(i) - 64);
  }
  return { row: Number(match[2]) - 1, col: col - 1 };
}

export function rowColToA1(row: number, col: number): string {
  let n = col + 1;
  let letters = "";
  while (n > 0) {
    const rem = (n - 1) % 26;
    letters = String.fromCharCode(65 + rem) + letters;
    n = Math.floor((n - 1) / 26);
  }
  return `${letters}${row + 1}`;
}

function workbookOf(snapshot: Record<string, unknown>): any {
  const workbook = (snapshot as any).workbook ?? snapshot;
  if (!workbook?.sheets) {
    throw new Error("Snapshot is not a sheet workbook");
  }
  return workbook;
}

function sheetOf(snapshot: Record<string, unknown>, sheetId?: string): any {
  const workbook = workbookOf(snapshot);
  const id = sheetId || workbook.sheetOrder?.[0];
  const sheet = workbook.sheets?.[id];
  if (!sheet) {
    throw new Error(`Sheet not found: ${id || "(none)"}`);
  }
  if (!sheet.cellData || typeof sheet.cellData !== "object") {
    sheet.cellData = {};
  }
  return sheet;
}

export function getSheetCell(
  snapshot: Record<string, unknown>,
  a1: string,
  sheetId?: string
): SheetCellValue | null {
  const { row, col } = a1ToRowCol(a1);
  const sheet = sheetOf(snapshot, sheetId);
  const cell = sheet.cellData?.[String(row)]?.[String(col)] ?? sheet.cellData?.[row]?.[col];
  return cell ? { ...cell } : null;
}

export function getSheetRange(
  snapshot: Record<string, unknown>,
  startA1: string,
  endA1?: string,
  sheetId?: string
): Array<Array<SheetCellValue | null>> {
  const start = a1ToRowCol(startA1);
  const end = endA1 ? a1ToRowCol(endA1) : start;
  const sheet = sheetOf(snapshot, sheetId);
  const rows: Array<Array<SheetCellValue | null>> = [];
  for (let r = Math.min(start.row, end.row); r <= Math.max(start.row, end.row); r++) {
    const row: Array<SheetCellValue | null> = [];
    for (let c = Math.min(start.col, end.col); c <= Math.max(start.col, end.col); c++) {
      const cell = sheet.cellData?.[String(r)]?.[String(c)] ?? sheet.cellData?.[r]?.[c];
      row.push(cell ? { ...cell } : null);
    }
    rows.push(row);
  }
  return rows;
}

export function setSheetCell(
  snapshot: Record<string, unknown>,
  a1: string,
  value: string | number | boolean | SheetCellValue,
  sheetId?: string
): { previous: SheetCellValue | null; next: SheetCellValue; sheetId: string; row: number; col: number } {
  const { row, col } = a1ToRowCol(a1);
  const sheet = sheetOf(snapshot, sheetId);
  const rowKey = String(row);
  const colKey = String(col);
  if (!sheet.cellData[rowKey] || typeof sheet.cellData[rowKey] !== "object") {
    sheet.cellData[rowKey] = { ...(sheet.cellData[row] || {}) };
  }
  const previous = sheet.cellData[rowKey][colKey] ? { ...sheet.cellData[rowKey][colKey] } : null;
  const next: SheetCellValue =
    value !== null && typeof value === "object"
      ? { ...value }
      : String(value).startsWith("=")
        ? { f: String(value) }
        : { v: value };
  sheet.cellData[rowKey][colKey] = next;
  return { previous, next, sheetId: sheet.id, row, col };
}

export function cloneSnapshot(snapshot: Record<string, unknown>): Record<string, unknown> {
  return JSON.parse(JSON.stringify(snapshot)) as Record<string, unknown>;
}

export function bumpSnapshotRevision(snapshot: Record<string, unknown>, rev: number): Record<string, unknown> {
  const next = cloneSnapshot(snapshot);
  (next as any).rev = rev;
  if ((next as any).workbook) (next as any).workbook.rev = rev;
  if ((next as any).doc) (next as any).doc.rev = rev;
  if ((next as any).slide) (next as any).slide.rev = rev;
  return next;
}

export function decodeOriginalMeta(encoded: unknown): Record<string, unknown> | null {
  if (typeof encoded !== "string" || !encoded) return null;
  try {
    return JSON.parse(atob(encoded)) as Record<string, unknown>;
  } catch {
    return null;
  }
}

export function encodeOriginalMeta(data: Record<string, unknown>): string {
  return btoa(JSON.stringify(data));
}

export function getDocPlainText(snapshot: Record<string, unknown>): string {
  const doc = (snapshot as any).doc;
  const meta = decodeOriginalMeta(doc?.originalMeta);
  const stream = (meta?.body as { dataStream?: string } | undefined)?.dataStream;
  if (typeof stream === "string") {
    return stream.replace(/\r\n$/u, "").replace(/\r/g, "\n");
  }
  return "";
}

export function appendDocPlainText(snapshot: Record<string, unknown>, text: string): Record<string, unknown> {
  const next = cloneSnapshot(snapshot);
  const doc = (next as any).doc;
  if (!doc) throw new Error("Snapshot is not a document");
  const meta = decodeOriginalMeta(doc.originalMeta) ?? {};
  const body = ((meta.body as Record<string, unknown> | undefined) ?? {}) as {
    dataStream?: string;
    paragraphs?: Array<Record<string, unknown>>;
    sectionBreaks?: Array<Record<string, unknown>>;
  };
  const current = typeof body.dataStream === "string" ? body.dataStream.replace(/\r\n$/u, "") : "";
  const appended = `${current}${current && !current.endsWith("\n") ? "\n" : ""}${text}`;
  body.dataStream = `${appended}\r\n`;
  body.paragraphs = [
    {
      startIndex: 0,
      paragraphId: "para_agent",
      paragraphStyle: {}
    }
  ];
  body.sectionBreaks = [
    {
      sectionId: "section_agent",
      startIndex: Math.max(1, appended.length)
    }
  ];
  meta.body = body;
  doc.originalMeta = encodeOriginalMeta(meta);
  return next;
}

export function buildSetRangeChangeset(input: {
  unitId: string;
  rev: number;
  sheetId: string;
  cellValue: Record<string, Record<string, SheetCellValue>>;
  memberId?: string;
}): Record<string, unknown> {
  return {
    id: `cs_agent_${crypto.randomUUID()}`,
    unitID: input.unitId,
    revision: input.rev,
    rev: input.rev,
    memberID: input.memberId ?? "agent_workspace",
    mutations: [
      {
        id: "sheet.mutation.set-range-values",
        params: {
          unitId: input.unitId,
          subUnitId: input.sheetId,
          cellValue: input.cellValue
        }
      }
    ]
  };
}

export interface UniverMutation {
  id?: string;
  params?: Record<string, unknown>;
  [key: string]: unknown;
}

/**
 * Apply Univer Facade mutations onto a stored snapshot so late joiners and
 * history loads see the same revision the live OT clients already applied.
 */
export interface SheetBlockPayload {
  readonly id: string;
  readonly sheetId: string;
  readonly startRow: number;
  readonly endRow: number;
  readonly data: Record<string, Record<string, SheetCellValue>>;
}

export function sheetBlockId(sheetId: string): string {
  return `blk_${sheetId}`;
}

function workbookRecord(snapshot: Record<string, unknown>): any {
  return (snapshot as { workbook?: unknown }).workbook ?? snapshot;
}

function sheetIdsOf(workbook: any): string[] {
  if (Array.isArray(workbook?.sheetOrder) && workbook.sheetOrder.length > 0) {
    return workbook.sheetOrder.map(String);
  }
  return Object.keys(workbook?.sheets ?? {});
}

function cellDataOf(sheet: any): Record<string, Record<string, SheetCellValue>> {
  const cellData = sheet?.cellData;
  if (!cellData || typeof cellData !== "object") return {};
  return cellData as Record<string, Record<string, SheetCellValue>>;
}

function rowBounds(cellData: Record<string, unknown>): { startRow: number; endRow: number } {
  const rows = Object.keys(cellData)
    .map((key) => Number(key))
    .filter((row) => Number.isFinite(row));
  if (rows.length === 0) return { startRow: 0, endRow: 0 };
  return { startRow: Math.min(...rows), endRow: Math.max(...rows) };
}

/**
 * Univer Pro `loadSheet` hydrates cells from sheet blocks, not `sheet.cellData`.
 * Project one deserialized block per worksheet that already has Facade cellData
 * so late joiners see agent/OT writes without a local setValue fallback.
 */
export function projectSheetBlocks(snapshot: Record<string, unknown>): {
  snapshot: Record<string, unknown>;
  blocks: SheetBlockPayload[];
} {
  const next = cloneSnapshot(snapshot);
  const workbook = workbookRecord(next);
  if (!workbook?.sheets || typeof workbook.sheets !== "object") {
    return { snapshot: next, blocks: [] };
  }
  if (!workbook.blockMeta || typeof workbook.blockMeta !== "object") {
    workbook.blockMeta = {};
  }
  const blocks: SheetBlockPayload[] = [];
  for (const sheetId of sheetIdsOf(workbook)) {
    const sheet = workbook.sheets[sheetId];
    const cellData = cellDataOf(sheet);
    const existing = workbook.blockMeta[sheetId];
    const existingIds = Array.isArray(existing?.blocks)
      ? (existing.blocks as unknown[]).map(String).filter(Boolean)
      : [];
    if (Object.keys(cellData).length === 0) {
      workbook.blockMeta[sheetId] = {
        sheetID: sheetId,
        blocks: existingIds
      };
      continue;
    }
    const id = existingIds[0] || sheetBlockId(sheetId);
    const { startRow, endRow } = rowBounds(cellData);
    blocks.push({ id, sheetId, startRow, endRow, data: cellData });
    workbook.blockMeta[sheetId] = { sheetID: sheetId, blocks: [id] };
  }
  return { snapshot: next, blocks };
}

export function getSheetBlockFromSnapshot(
  snapshot: Record<string, unknown>,
  blockId: string
): SheetBlockPayload | null {
  const { blocks } = projectSheetBlocks(snapshot);
  return blocks.find((block) => block.id === blockId) ?? null;
}

const requireCollabService = createRequire(
  fileURLToPath(new URL("../../apps/workspace/package.json", import.meta.url))
);

const FORMULA_RUST = "@univerjs-pro/engine-formula-rust";
const FORMULA_JS = "@univerjs-pro/engine-formula";

type NodeCjsModule = {
  _load(request: string, parent: object | undefined, isMain: boolean): unknown;
};

/**
 * collaboration-service CJS `require`s the rust formula plugin. Workerd cannot
 * load that package or its native addon. Remap at this layer (not vendor `_0x`).
 */
function installWorkerdSafeFormulaEngine(): void {
  if ((installWorkerdSafeFormulaEngine as { done?: boolean }).done) return;
  const nodeModule = requireCollabService("node:module") as NodeCjsModule;
  if (typeof nodeModule._load !== "function") return;
  (installWorkerdSafeFormulaEngine as { done?: boolean }).done = true;
  const originalLoad = nodeModule._load.bind(nodeModule);
  nodeModule._load = function (request: string, parent: object | undefined, isMain: boolean) {
    if (request === FORMULA_RUST) {
      const jsEngine = originalLoad(FORMULA_JS, parent, isMain) as {
        UniverProFormulaEnginePlugin?: unknown;
        UniverRustFormulaEnginePlugin?: unknown;
      };
      if (jsEngine && jsEngine.UniverRustFormulaEnginePlugin == null) {
        jsEngine.UniverRustFormulaEnginePlugin = jsEngine.UniverProFormulaEnginePlugin;
      }
      return jsEngine;
    }
    return originalLoad(request, parent, isMain);
  };
}

installWorkerdSafeFormulaEngine();

type UnitHandle = { readonly unitID: string; readonly type: number };

type UniverUnitRuntimeInstance = {
  ensureUnit(
    context: { userID: string; customData: object; request: object },
    unitID: string,
    type: number
  ): Promise<UnitHandle>;
  applyChangeset(
    context: { userID: string; customData: object; request: object },
    handle: UnitHandle,
    changeset: object
  ): Promise<void>;
  createSnapshot(handle: UnitHandle): Promise<{ snapshot: Record<string, any>; sheetBlocks?: Array<Record<string, any>> }>;
  disposeUnit(unitID: string): void;
  dispose(): Promise<void>;
};

function loadUniverUnitRuntime(): new (options: { dbAdapter: object }) => UniverUnitRuntimeInstance {
  const mod = requireCollabService("@univerjs-pro/collaboration-service") as {
    UniverUnitRuntime: new (options: { dbAdapter: object }) => UniverUnitRuntimeInstance;
  };
  return mod.UniverUnitRuntime;
}

function mutationsOf(changeset: Record<string, unknown>): UniverMutation[] {
  if (Array.isArray(changeset.mutations)) return changeset.mutations as UniverMutation[];
  if (changeset.mutation && typeof changeset.mutation === "object") {
    return [changeset.mutation as UniverMutation];
  }
  return [];
}

function mutationParams(mutation: UniverMutation): Record<string, unknown> {
  if (mutation.params && typeof mutation.params === "object") {
    return mutation.params as Record<string, unknown>;
  }
  if (typeof mutation.data === "string") {
    try {
      const parsed = JSON.parse(mutation.data) as unknown;
      if (parsed && typeof parsed === "object") return parsed as Record<string, unknown>;
    } catch {
      return {};
    }
  }
  return {};
}

function toUint8(meta: unknown): Uint8Array {
  if (meta instanceof Uint8Array) return meta;
  if (typeof Buffer !== "undefined" && Buffer.isBuffer(meta)) {
    return new Uint8Array(meta);
  }
  if (typeof meta === "string") {
    try {
      return Uint8Array.from(atob(meta), (char) => char.charCodeAt(0));
    } catch {
      return new TextEncoder().encode(meta);
    }
  }
  return new TextEncoder().encode(JSON.stringify(meta ?? {}));
}

function fromUint8(bytes: unknown): string {
  if (typeof bytes === "string") return bytes;
  const raw =
    bytes instanceof Uint8Array
      ? bytes
      : typeof Buffer !== "undefined" && Buffer.isBuffer(bytes)
        ? new Uint8Array(bytes)
        : new Uint8Array(0);
  let binary = "";
  for (const byte of raw) binary += String.fromCharCode(byte);
  return btoa(binary);
}

function decodeBlockCells(data: unknown): Record<string, Record<string, SheetCellValue>> {
  if (!data) return {};
  if (typeof data === "object" && !ArrayBuffer.isView(data) && !Array.isArray(data)) {
    return data as Record<string, Record<string, SheetCellValue>>;
  }
  const bytes =
    data instanceof Uint8Array
      ? data
      : typeof Buffer !== "undefined" && Buffer.isBuffer(data)
        ? new Uint8Array(data)
        : new Uint8Array(0);
  if (bytes.length === 0) return {};
  try {
    return JSON.parse(new TextDecoder().decode(bytes)) as Record<string, Record<string, SheetCellValue>>;
  } catch {
    return {};
  }
}

function jsonToProtocolSnapshot(snapshot: Record<string, unknown>): Record<string, unknown> {
  const projected = projectSheetBlocks(snapshot).snapshot;
  const workbook = workbookRecord(projected);
  const type = Number((projected as { type?: number }).type ?? workbook?.type ?? 2) || 2;
  const rev = Number((projected as { rev?: number }).rev ?? workbook?.rev ?? 1) || 1;
  const unitID = String((projected as { unitID?: string }).unitID ?? workbook?.unitID ?? "");
  if (!workbook?.sheets) {
    return { unitID, type, rev };
  }
  const sheets: Record<string, Record<string, unknown>> = {};
  for (const sheetId of sheetIdsOf(workbook)) {
    const sheet = workbook.sheets[sheetId] ?? {};
    sheets[sheetId] = {
      type: Number(sheet.type ?? 0),
      id: String(sheet.id ?? sheetId),
      name: String(sheet.name ?? sheetId),
      rowCount: Number(sheet.rowCount ?? 1000),
      columnCount: Number(sheet.columnCount ?? 20),
      originalMeta: toUint8(sheet.originalMeta)
    };
  }
  return {
    unitID,
    type,
    rev,
    workbook: {
      unitID,
      rev,
      creator: String(workbook.creator ?? ""),
      name: String(workbook.name ?? ""),
      sheetOrder: sheetIdsOf(workbook),
      sheets,
      resources: Array.isArray(workbook.resources) ? workbook.resources : [],
      blockMeta: workbook.blockMeta ?? {},
      originalMeta: toUint8(workbook.originalMeta)
    }
  };
}

function protocolBlocksFromJson(snapshot: Record<string, unknown>): Array<{
  id: string;
  startRow: number;
  endRow: number;
  data: Uint8Array;
}> {
  return projectSheetBlocks(snapshot).blocks.map((block) => ({
    id: block.id,
    startRow: block.startRow,
    endRow: block.endRow,
    data: new TextEncoder().encode(JSON.stringify(block.data))
  }));
}

function overlaySetRangeValues(snapshot: Record<string, unknown>, mutations: UniverMutation[]): void {
  for (const mutation of mutations) {
    if (String(mutation.id ?? "") !== "sheet.mutation.set-range-values") continue;
    const params = mutationParams(mutation);
    const sheetId = String(params.subUnitId ?? params.sheetId ?? "");
    const cellValue = params.cellValue as Record<string, Record<string, SheetCellValue>> | undefined;
    if (!cellValue) continue;
    for (const [rowKey, cols] of Object.entries(cellValue)) {
      if (!cols || typeof cols !== "object") continue;
      for (const [colKey, value] of Object.entries(cols)) {
        if (!value || typeof value !== "object") continue;
        const a1 = rowColToA1(Number(rowKey), Number(colKey));
        const current = getSheetCell(snapshot, a1, sheetId || undefined) ?? {};
        setSheetCell(snapshot, a1, { ...current, ...value }, sheetId || undefined);
      }
    }
  }
}

function mergeProtocolIntoJson(
  original: Record<string, unknown>,
  protocol: Record<string, any>,
  sheetBlocks: Array<Record<string, any>>
): Record<string, unknown> {
  const next = cloneSnapshot(original);
  const rev = Number(protocol?.rev ?? (next as { rev?: number }).rev ?? 1);
  const workbook = workbookRecord(next);
  const protocolWorkbook = protocol?.workbook;
  if (workbook && protocolWorkbook) {
    workbook.rev = rev;
    if (Array.isArray(protocolWorkbook.sheetOrder)) workbook.sheetOrder = protocolWorkbook.sheetOrder;
    if (protocolWorkbook.blockMeta && typeof protocolWorkbook.blockMeta === "object") {
      workbook.blockMeta = protocolWorkbook.blockMeta;
    }
    if (protocolWorkbook.originalMeta) {
      workbook.originalMeta = fromUint8(protocolWorkbook.originalMeta);
    }
    const protocolSheets = protocolWorkbook.sheets ?? {};
    if (!workbook.sheets || typeof workbook.sheets !== "object") workbook.sheets = {};
    for (const [sheetId, protocolSheet] of Object.entries(protocolSheets) as Array<[string, any]>) {
      const sheet = workbook.sheets[sheetId] ?? (workbook.sheets[sheetId] = { id: sheetId });
      if (protocolSheet?.rowCount != null) sheet.rowCount = protocolSheet.rowCount;
      if (protocolSheet?.columnCount != null) sheet.columnCount = protocolSheet.columnCount;
      if (protocolSheet?.name != null) sheet.name = protocolSheet.name;
      if (protocolSheet?.originalMeta) sheet.originalMeta = fromUint8(protocolSheet.originalMeta);
      sheet.cellData = {};
    }
    const blockIdToSheet = new Map<string, string>();
    for (const [sheetId, meta] of Object.entries(protocolWorkbook.blockMeta ?? {}) as Array<[string, any]>) {
      const ids = Array.isArray(meta?.blocks) ? meta.blocks : [];
      for (const id of ids) blockIdToSheet.set(String(id), sheetId);
    }
    for (const block of sheetBlocks) {
      const sheetId = blockIdToSheet.get(String(block.id)) ?? sheetIdsOf(workbook)[0];
      if (!sheetId || !workbook.sheets[sheetId]) continue;
      const cells = decodeBlockCells(block.data);
      const sheet = workbook.sheets[sheetId];
      if (!sheet.cellData || typeof sheet.cellData !== "object") sheet.cellData = {};
      for (const [rowKey, cols] of Object.entries(cells)) {
        if (!cols || typeof cols !== "object") continue;
        sheet.cellData[rowKey] = { ...(sheet.cellData[rowKey] ?? {}), ...cols };
      }
    }
  }
  return bumpSnapshotRevision(next, rev);
}

class MemoryCollabAdapter {
  constructor(
    private readonly record: { unitID: string; type: number; headRevision: number },
    private readonly snapshot: Record<string, unknown>,
    private readonly blocks: Array<{ id: string; startRow: number; endRow: number; data: Uint8Array }>
  ) {}

  async getUnit(_context: object, unitID: string) {
    return unitID === this.record.unitID ? this.record : null;
  }

  async getSnapshot(_context: object, unitID: string) {
    return unitID === this.record.unitID ? this.snapshot : null;
  }

  async getChangesets(_context: object, _unitID: string, _range: { from: number; to: number }) {
    return { changesets: [], latestRevision: this.record.headRevision };
  }

  async createUnit(
    _context: object,
    input: { record: { unitID: string; type: number; headRevision: number } }
  ) {
    if (input.record.unitID === this.record.unitID) {
      return { status: "already-exists" as const, record: this.record };
    }
    return { status: "created" as const, record: input.record };
  }

  async deleteUnits() {
    return { units: [] };
  }

  async recoverUnits() {
    return { units: [] };
  }

  async commitChangeset(_context: object, input: { changeset: { unitID: string; revision: number } }) {
    if (input.changeset.revision !== this.record.headRevision + 1) {
      return { status: "revision-mismatch" as const, actualHeadRevision: this.record.headRevision };
    }
    this.record.headRevision = input.changeset.revision;
    return {
      status: "committed" as const,
      changeset: input.changeset,
      headRevision: this.record.headRevision
    };
  }

  async saveSnapshot(_context: object, input: { snapshot: Record<string, unknown> }) {
    Object.assign(this.snapshot, input.snapshot);
  }

  async getSheetBlock(_context: object, unitID: string, blockID: string) {
    if (unitID !== this.record.unitID) return null;
    return this.blocks.find((block) => block.id === blockID) ?? null;
  }
}

async function applyWithUniverUnitRuntime(
  snapshot: Record<string, unknown>,
  changeset: Record<string, unknown>,
  mutations: UniverMutation[]
): Promise<Record<string, unknown>> {
  const protocol = jsonToProtocolSnapshot(snapshot);
  const unitID = String((protocol as { unitID?: string }).unitID ?? "");
  const type = Number((protocol as { type?: number }).type ?? 2) || 2;
  const baseRev = Number((protocol as { rev?: number }).rev ?? 1) || 1;
  const revision = Number(changeset.revision ?? changeset.rev ?? baseRev + 1) || baseRev + 1;
  const blocks = protocolBlocksFromJson(snapshot);
  const adapter = new MemoryCollabAdapter({ unitID, type, headRevision: baseRev }, protocol, blocks);
  const Runtime = loadUniverUnitRuntime();
  const runtime = new Runtime({ dbAdapter: adapter });
  const context = {
    userID: String(changeset.userID ?? "edge_materializer"),
    customData: {},
    request: {}
  };
  try {
    const handle = await runtime.ensureUnit(context, unitID, type);
    await runtime.applyChangeset(context, handle, {
      unitID,
      type,
      baseRev,
      revision,
      userID: context.userID,
      memberID: String(changeset.memberID ?? "edge_materializer"),
      mutations: mutations.map((mutation) => ({
        id: String(mutation.id ?? ""),
        data: typeof mutation.data === "string" ? mutation.data : JSON.stringify(mutationParams(mutation))
      }))
    });
    const saved = await runtime.createSnapshot(handle);
    const merged = mergeProtocolIntoJson(snapshot, saved.snapshot, saved.sheetBlocks ?? []);
    overlaySetRangeValues(merged, mutations);
    return merged;
  } finally {
    runtime.disposeUnit(unitID);
    await runtime.dispose();
  }
}

export async function applyChangesetMutations(
  snapshot: Record<string, unknown>,
  changeset: Record<string, unknown>
): Promise<Record<string, unknown>> {
  const mutations = mutationsOf(changeset);
  const rev = Number(changeset.revision ?? changeset.rev ?? (snapshot as { rev?: number }).rev ?? 0);
  if (mutations.length === 0) {
    return rev > 0 ? bumpSnapshotRevision(cloneSnapshot(snapshot), rev) : cloneSnapshot(snapshot);
  }

  const workbook = (snapshot as { workbook?: unknown }).workbook ?? snapshot;
  const isSheet = Boolean((workbook as { sheets?: unknown })?.sheets);
  if (isSheet) {
    try {
      return await applyWithUniverUnitRuntime(snapshot, changeset, mutations);
    } catch {
      return rev > 0 ? bumpSnapshotRevision(cloneSnapshot(snapshot), rev) : cloneSnapshot(snapshot);
    }
  }

  let next = cloneSnapshot(snapshot);
  for (const mutation of mutations) {
    if (String(mutation.id ?? "") !== "doc.mutation.append-text") continue;
    const text = String(mutationParams(mutation).text ?? "");
    if (text) next = appendDocPlainText(next, text);
  }
  return rev > 0 ? bumpSnapshotRevision(next, rev) : next;
}
