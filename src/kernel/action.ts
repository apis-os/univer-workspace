/**
 * Cordis Universal Action Engine.
 * Unifies Host RPC methods and LLM Agent Tools into reversible actions with inverse execution.
 */
import { Context, Service } from "@deepseek-ai/cordis";
import type { SqlExec } from "./sql.ts";

declare module "@deepseek-ai/cordis" {
  interface Context {
    action: ActionService;
  }
}

export const AGENT_JOURNAL_ACTOR = "agent_workspace";

export interface ActionMeta {
  userId?: string;
  clientId?: string;
  unitId?: string;
  worktreeId?: string;
}

export function journalActor(meta: ActionMeta | undefined): string {
  const userId = meta?.userId?.trim() || "";
  const clientId = meta?.clientId?.trim() || "";
  if (userId === AGENT_JOURNAL_ACTOR || clientId === AGENT_JOURNAL_ACTOR) {
    return AGENT_JOURNAL_ACTOR;
  }
  return userId || clientId;
}

function journalUnitId(entry: ActionExecutionJournalEntry): string {
  const metaUnit = entry.meta.unitId?.trim() || "";
  if (metaUnit) return metaUnit;
  const input = entry.input as { unitId?: unknown } | undefined;
  if (typeof input?.unitId === "string" && input.unitId.trim()) return input.unitId.trim();
  const result = entry.result as { unitId?: unknown } | undefined;
  if (typeof result?.unitId === "string" && result.unitId.trim()) return result.unitId.trim();
  return "";
}

function entryMatchesUnit(entry: ActionExecutionJournalEntry, unitId?: string): boolean {
  if (!unitId) return true;
  return journalUnitId(entry) === unitId;
}

const MUTATING_ACTION_IDS = new Set([
  "univer.sheet.setRange",
  "univer.doc.appendText",
  "univer.execute"
]);

export interface ActionDefinition<TInput = any, TOutput = any> {
  id: string;
  name: string;
  description: string;
  schema?: Record<string, unknown>;
  permissions?: string[];
  exposeAsTool?: boolean;
  exposeAsRpc?: boolean;
  execute: (input: TInput, meta: ActionMeta) => Promise<TOutput>;
  reverse?: (input: TInput, result: TOutput, meta: ActionMeta) => Promise<void>;
}

export interface ActionExecutionJournalEntry {
  actionId: string;
  input: any;
  result: any;
  meta: ActionMeta;
  timestamp: number;
}

export class ActionService extends Service {
  private actions = new Map<string, ActionDefinition>();
  private journal: ActionExecutionJournalEntry[] = [];

  constructor(ctx: Context, private readonly sql?: SqlExec) {
    super(ctx, "action", true);
    this.initJournalSql();
  }

  private initJournalSql(): void {
    if (!this.sql) return;
    try {
      this.sql.exec(`
        CREATE TABLE IF NOT EXISTS action_journal (
          id TEXT PRIMARY KEY,
          action_id TEXT NOT NULL,
          input TEXT NOT NULL,
          result TEXT,
          meta TEXT NOT NULL,
          reverted INTEGER NOT NULL DEFAULT 0,
          created_at INTEGER NOT NULL
        );
        CREATE INDEX IF NOT EXISTS idx_action_journal_created ON action_journal(created_at DESC);
      `);
    } catch (err) {
      console.warn("Action journal SQL init warning:", err);
    }
  }

  /**
   * Registers a universal action.
   */
  register<TInput = any, TOutput = any>(def: ActionDefinition<TInput, TOutput>): () => void {
    this.actions.set(def.id, def);
    return () => {
      this.actions.delete(def.id);
    };
  }

  getAction(id: string): ActionDefinition | undefined {
    return this.actions.get(id);
  }

  listActions(): ActionDefinition[] {
    return Array.from(this.actions.values());
  }

  /**
   * Returns all actions exposed as LLM agent tools.
   */
  getLlmTools(): Array<{ name: string; description: string; parameters: Record<string, unknown> }> {
    return Array.from(this.actions.values())
      .filter((a) => a.exposeAsTool !== false)
      .map((a) => ({
        name: a.id.replace(/\./g, "_"),
        description: `${a.name}: ${a.description}`,
        parameters: a.schema || { type: "object", properties: {} }
      }));
  }

  /**
   * Executes an action with journal logging and inverse preparation.
   */
  async execute<TInput = any, TOutput = any>(
    actionId: string,
    input: TInput,
    meta: ActionMeta = {}
  ): Promise<TOutput> {
    const action = this.actions.get(actionId);
    if (!action) {
      throw new Error(`Unknown action: ${actionId}`);
    }

    const result = await action.execute(input, meta);
    const now = Date.now();

    const journalEntry: ActionExecutionJournalEntry = {
      actionId,
      input,
      result,
      meta,
      timestamp: now
    };
    this.journal.push(journalEntry);

    if (this.sql) {
      try {
        const id = `act_${crypto.randomUUID()}`;
        this.sql.exec(
          `INSERT INTO action_journal (id, action_id, input, result, meta, reverted, created_at)
           VALUES (?, ?, ?, ?, ?, 0, ?)`,
          id,
          actionId,
          JSON.stringify(input),
          JSON.stringify(result),
          JSON.stringify(meta),
          now
        );
      } catch (err) {
        console.warn("Failed to persist action journal:", err);
      }
    }

    return result;
  }

  peekLast(unitId?: string): ActionExecutionJournalEntry | undefined {
    for (let i = this.journal.length - 1; i >= 0; i--) {
      const entry = this.journal[i]!;
      if (entryMatchesUnit(entry, unitId)) return entry;
    }
    return undefined;
  }

  /**
   * True when the last mutating Workspace Agent journal entry for `unitId`
   * (or globally, if omitted) has a reverse implementation.
   */
  canReverseLast(unitId?: string): boolean {
    for (let i = this.journal.length - 1; i >= 0; i--) {
      const last = this.journal[i]!;
      if (!entryMatchesUnit(last, unitId)) continue;
      if (journalActor(last.meta) !== AGENT_JOURNAL_ACTOR) return false;
      const action = this.actions.get(last.actionId);
      if (!action?.reverse) {
        if (MUTATING_ACTION_IDS.has(last.actionId)) return false;
        continue;
      }
      return true;
    }
    return false;
  }

  /**
   * Reverses the most recent Workspace Agent action for `unitId`.
   * Journal entries for other units are left in place. Only reverse when the
   * last matching journal actor is `agent_workspace`. Human last-write is a
   * no-op (`false`). Non-reversible agent journal entries (reads) are skipped
   * so a turn of getSnapshot/setRange/getRange still undoes the write.
   */
  async reverseLast(unitId?: string): Promise<boolean> {
    for (let i = this.journal.length - 1; i >= 0; i--) {
      const last = this.journal[i]!;
      if (!entryMatchesUnit(last, unitId)) continue;
      if (journalActor(last.meta) !== AGENT_JOURNAL_ACTOR) {
        return false;
      }
      const action = this.actions.get(last.actionId);
      if (!action?.reverse) {
        if (MUTATING_ACTION_IDS.has(last.actionId)) {
          return false;
        }
        this.journal.splice(i, 1);
        continue;
      }
      this.journal.splice(i, 1);
      await action.reverse(last.input, last.result, last.meta);
      return true;
    }
    return false;
  }
}

export const name = "action-engine";

export function apply(ctx: Context): void {
  const host = ctx.get("host") as { sql?: SqlExec } | undefined;
  new ActionService(ctx, host?.sql);
}
