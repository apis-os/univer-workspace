/**
 * Registers Facade-style LLM/RPC actions on the Cordis Action Engine.
 * Tool names follow univer-sdk-skills recipes, not a custom DSL.
 */
import type { Context } from "@deepseek-ai/cordis";
import type { ActionService } from "../kernel/action.ts";
import type { UniverCollabService } from "./univer-collab.ts";
import { generateDefaultSnapshot } from "./univer-default-snapshots.ts";
import {
  appendDocPlainText,
  buildSetRangeChangeset,
  bumpSnapshotRevision,
  cloneSnapshot,
  getDocPlainText,
  getSheetCell,
  getSheetRange,
  setSheetCell,
  type SheetCellValue
} from "./univer-snapshot.ts";
import { getAgentSkill, listAgentSkills } from "./univer-skills.ts";

function safeGet(ctx: Context, name: string): unknown {
  try {
    return ctx.get(name);
  } catch {
    return undefined;
  }
}

export const AGENT_MEMBER_ID = "agent_workspace";
export const AGENT_USER_ID = "agent_workspace";
export const AGENT_USER_NAME = "Workspace Agent";

export interface AppliedUnitEdit {
  unitId: string;
  rev: number;
  changeset: Record<string, unknown>;
  snapshot: Record<string, unknown>;
}

export function ensureUnitSnapshot(
  collab: UniverCollabService,
  unitId: string,
  type: number = 2
): { rev: number; data: Record<string, unknown> } {
  const existing = collab.getLatestSnapshot(unitId);
  if (existing) return { rev: existing.rev, data: cloneSnapshot(existing.data) };
  const data = generateDefaultSnapshot(unitId, type);
  collab.createUnit(unitId, type, (data as any).workbook?.name || (data as any).doc?.name || "Document", data);
  return { rev: 1, data: cloneSnapshot(data) };
}

export function applySheetCells(
  collab: UniverCollabService,
  unitId: string,
  cells: Array<{ a1: string; value: string | number | boolean | SheetCellValue; sheetId?: string }>,
  memberId: string = AGENT_MEMBER_ID
): AppliedUnitEdit {
  const current = ensureUnitSnapshot(collab, unitId, 2);
  let snapshot = cloneSnapshot(current.data);
  const cellValue: Record<string, Record<string, SheetCellValue>> = {};
  let sheetId = "sheet_1";
  for (const cell of cells) {
    const result = setSheetCell(snapshot, cell.a1, cell.value, cell.sheetId);
    sheetId = result.sheetId;
    const rowKey = String(result.row);
    const colKey = String(result.col);
    if (!cellValue[rowKey]) cellValue[rowKey] = {};
    cellValue[rowKey][colKey] = result.next;
  }
  const rev = Math.max(current.rev, 1) + 1;
  snapshot = bumpSnapshotRevision(snapshot, rev);
  const changeset = buildSetRangeChangeset({
    unitId,
    rev,
    sheetId,
    cellValue,
    memberId
  });
  collab.saveSnapshot(unitId, rev, snapshot);
  collab.applyChangeset(changeset, memberId);
  return { unitId, rev, changeset, snapshot };
}

export function applyDocAppend(
  collab: UniverCollabService,
  unitId: string,
  text: string,
  memberId: string = AGENT_MEMBER_ID
): AppliedUnitEdit {
  const current = ensureUnitSnapshot(collab, unitId, 1);
  const rev = Math.max(current.rev, 1) + 1;
  const snapshot = bumpSnapshotRevision(appendDocPlainText(current.data, text), rev);
  const changeset = {
    id: `cs_agent_${crypto.randomUUID()}`,
    unitID: unitId,
    revision: rev,
    rev,
    memberID: memberId,
    mutations: [
      {
        id: "doc.mutation.append-text",
        params: { unitId, text }
      }
    ]
  };
  collab.saveSnapshot(unitId, rev, snapshot);
  collab.applyChangeset(changeset, memberId);
  return { unitId, rev, changeset, snapshot };
}

export function registerFacadeActions(ctx: Context): void {
  const action = safeGet(ctx, "action") as ActionService | undefined;
  const collab = safeGet(ctx, "collab") as UniverCollabService | undefined;
  if (!action || !collab) return;
  if (action.getAction("univer.unit.getSnapshot")) return;

  action.register({
    id: "univer.unit.getSnapshot",
    name: "Get unit snapshot",
    description: "Read the stored collaborative snapshot for a unitId (Facade save/load).",
    schema: {
      type: "object",
      properties: { unitId: { type: "string" } },
      required: ["unitId"]
    },
    exposeAsTool: true,
    execute: async (input: { unitId?: string }, meta) => {
      const unitId = input.unitId || meta.unitId || "";
      const snap = ensureUnitSnapshot(collab, unitId);
      return { unitId, rev: snap.rev, snapshot: snap.data };
    }
  });

  action.register({
    id: "univer.sheet.getRange",
    name: "Get sheet range",
    description: "Read A1 cells from the stored sheet snapshot.",
    schema: {
      type: "object",
      properties: {
        unitId: { type: "string" },
        range: { type: "string", description: "A1 or A1:B2" },
        sheetId: { type: "string" }
      },
      required: ["range"]
    },
    exposeAsTool: true,
    execute: async (input: { unitId?: string; range: string; sheetId?: string }, meta) => {
      const unitId = input.unitId || meta.unitId || "";
      const snap = ensureUnitSnapshot(collab, unitId, 2);
      const [start, end] = String(input.range).split(":");
      return {
        unitId,
        rev: snap.rev,
        range: input.range,
        values: getSheetRange(snap.data, start, end, input.sheetId)
      };
    }
  });

  action.register({
    id: "univer.sheet.setRange",
    name: "Set sheet range",
    description: "Write A1 cells on the collaborative sheet (setValues). Formulas may start with =.",
    schema: {
      type: "object",
      properties: {
        unitId: { type: "string" },
        cells: {
          type: "array",
          items: {
            type: "object",
            properties: {
              a1: { type: "string" },
              value: { type: ["string", "number", "boolean"] }
            },
            required: ["a1", "value"]
          }
        },
        sheetId: { type: "string" }
      },
      required: ["cells"]
    },
    exposeAsTool: true,
    execute: async (input: { unitId?: string; cells: Array<{ a1: string; value: string | number | boolean }>; sheetId?: string }, meta) => {
      const unitId = input.unitId || meta.unitId || "";
      const current = ensureUnitSnapshot(collab, unitId, 2);
      const previous = (input.cells || []).map((cell) => ({
        a1: cell.a1,
        stored: getSheetCell(current.data, cell.a1, input.sheetId)
      }));
      const edit = applySheetCells(
        collab,
        unitId,
        (input.cells || []).map((cell) => ({ ...cell, sheetId: input.sheetId })),
        meta.clientId || meta.userId || AGENT_MEMBER_ID
      );
      return {
        unitId,
        rev: edit.rev,
        written: input.cells,
        previous,
        verified: input.cells.map((cell) => ({
          a1: cell.a1,
          stored: getSheetCell(edit.snapshot, cell.a1, input.sheetId)
        }))
      };
    },
    reverse: async (
      input: { unitId?: string; cells?: Array<{ a1: string; value: string | number | boolean }>; sheetId?: string },
      result: { unitId?: string; previous?: Array<{ a1: string; stored: SheetCellValue | null }> },
      meta
    ) => {
      const unitId = input.unitId || meta.unitId || result?.unitId || "";
      const previous = Array.isArray(result?.previous) ? result.previous : [];
      applySheetCells(
        collab,
        unitId,
        previous.map((cell) => ({
          a1: cell.a1,
          value: cell.stored ?? { v: null },
          sheetId: input.sheetId
        })),
        meta.clientId || meta.userId || AGENT_MEMBER_ID
      );
    }
  });

  action.register({
    id: "univer.doc.getText",
    name: "Get document text",
    description: "Read plain text from a collaborative Doc unit.",
    schema: {
      type: "object",
      properties: { unitId: { type: "string" } },
      required: []
    },
    exposeAsTool: true,
    execute: async (input: { unitId?: string }, meta) => {
      const unitId = input.unitId || meta.unitId || "";
      const snap = ensureUnitSnapshot(collab, unitId, 1);
      return { unitId, rev: snap.rev, text: getDocPlainText(snap.data) };
    }
  });

  action.register({
    id: "univer.doc.appendText",
    name: "Append document text",
    description: "Append plain text to a collaborative Doc unit and commit a changeset.",
    schema: {
      type: "object",
      properties: {
        unitId: { type: "string" },
        text: { type: "string" }
      },
      required: ["text"]
    },
    exposeAsTool: true,
    execute: async (input: { unitId?: string; text: string }, meta) => {
      const unitId = input.unitId || meta.unitId || "";
      const edit = applyDocAppend(collab, unitId, input.text, meta.clientId || meta.userId || AGENT_MEMBER_ID);
      return { unitId, rev: edit.rev, text: getDocPlainText(edit.snapshot) };
    }
  });

  action.register({
    id: "univer.history.list",
    name: "List edit history",
    description: "List collaborative changeset revisions for a unit.",
    schema: {
      type: "object",
      properties: { unitId: { type: "string" } }
    },
    exposeAsTool: true,
    execute: async (input: { unitId?: string }, meta) => {
      const unitId = input.unitId || meta.unitId || "";
      const unit = collab.getUnit(unitId);
      const entries = collab.listChangesetEntries(unitId);
      return {
        unitId,
        rev: unit?.rev ?? 0,
        entries: entries.map((entry) => ({
          id: entry.id,
          rev: entry.rev,
          clientId: entry.clientId,
          createdAt: entry.createdAt
        }))
      };
    }
  });

  action.register({
    id: "univer.skills.list",
    name: "List agent skills",
    description: "List Workspace / univer-sdk-skills operational Skills.",
    schema: { type: "object", properties: {} },
    exposeAsTool: true,
    execute: async () => ({ skills: listAgentSkills() })
  });

  action.register({
    id: "univer.skills.get",
    name: "Get agent skill",
    description: "Load one operational Skill (core, sheet, doc, collaboration, worktree).",
    schema: {
      type: "object",
      properties: { id: { type: "string" } },
      required: ["id"]
    },
    exposeAsTool: true,
    execute: async (input: { id: string }) => {
      const skill = getAgentSkill(input.id);
      if (!skill) throw new Error(`Unknown skill: ${input.id}`);
      return skill;
    }
  });
}
