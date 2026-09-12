/**
 * Edge Workspace Agent: Channel 2 streaming + HTTP turns.
 * Follows multiplexer-protocol.md and univer-sdk-skills / workspace-cli Skills.
 */
import type { Context } from "@deepseek-ai/cordis";
import { journalActor, type ActionService } from "../kernel/action.ts";
import type { WorkspaceActor } from "../control-plane/actor.ts";
import { actorFromRequest } from "../control-plane/actor.ts";
import type { UniverCollabService } from "./univer-collab.ts";
import { AGENT_MEMBER_ID, AGENT_USER_ID, registerFacadeActions } from "./univer-facade-actions.ts";
import { agentSystemPrompt, getAgentSkill, listAgentSkills } from "./univer-skills.ts";

export const AI_GATEWAY_ID = "default";
export const AI_GATEWAY_LIVE_MODELS = [
  "@cf/meta/llama-3.3-70b-instruct-fp8-fast",
  "@cf/meta/llama-3.1-8b-instruct"
] as const;

const AI_GATEWAY_PRODUCT = "univer-workspace";
const EXPLAIN_CACHE_KEY = "demo:explain-q3:t9-headers";
const EXPLAIN_CACHE_TTL = 3600;

export type AgentGatewayStep = "tool" | "text" | "explain";

export type AgentAiMetadata = {
  product: string;
  unitId: string;
  turnId: string;
  actorUserId: string;
  step: AgentGatewayStep;
};

export type AgentAiRunOptions = {
  gateway: {
    id: string;
    skipCache?: boolean;
    cacheKey?: string;
    cacheTtl?: number;
    metadata?: AgentAiMetadata;
  };
  stream?: boolean;
  skipCache?: boolean;
  cacheKey?: string;
  cacheTtl?: number;
  returnRawResponse?: boolean;
  extraHeaders?: Record<string, string>;
  metadata: AgentAiMetadata;
};

export interface AgentEvent {
  type:
    | "agent.thinking"
    | "agent.tool_call_start"
    | "agent.tool_call_result"
    | "agent.token"
    | "agent.done"
    | "agent.error";
  data: Record<string, unknown>;
}

export interface AgentScreenshot {
  mediaType: string;
  data: string;
}

export interface AgentTurnResult {
  turnId: string;
  unitId: string;
  prompt: string;
  events: AgentEvent[];
  text: string;
  toolCalls: Array<{ tool: string; args: Record<string, unknown>; result: unknown }>;
  rev: number | null;
  actor?: { userId: string; name: string };
  screenshot?: AgentScreenshot | null;
  cache?: "HIT" | "MISS" | null;
}

export interface AgentAi {
  run: (model: string, input: unknown, options?: AgentAiRunOptions) => Promise<any>;
  aiGatewayLogId?: string | null;
  gateway?: (gatewayId: string) => {
    getLog(logId: string): Promise<{ cached?: boolean }>;
  };
}

export interface AgentHost {
  kernel: Context;
  env?: { AI?: AgentAi };
  actor?: WorkspaceActor | null;
  broadcastCollab?: (unitId: string, changeset: Record<string, unknown>, actor?: WorkspaceActor | null) => void;
  waitUntil?: (promise: Promise<unknown>) => void;
}

export const Q3_FILL_SCREENSHOT_RANGE = "A1:F12";

const SET_CELL_RE =
  /(?:set|put|fill|write)\s+(?:cell\s+)?([A-Za-z]{1,3}\d+)\s+(?:to|with|=|:)\s+(.+?)(?=(?:\s+and\s+(?:set|put|fill|write)\s+)|\s*$)/gi;

const TURN_LOG = new Map<string, AgentTurnResult[]>();
const INFLIGHT_UNITS = new Set<string>();

function recordTurn(result: AgentTurnResult): void {
  const list = TURN_LOG.get(result.unitId) ?? [];
  list.push(result);
  TURN_LOG.set(result.unitId, list.slice(-50));
}

function isCachedExplainPrompt(prompt: string): boolean {
  const text = prompt.trim();
  if (/^explain the q3 forecast(?: in one sentence)?$/i.test(text)) return true;
  if (/^explain the full[- ]?sheet(?: in one sentence)?$/i.test(text)) return true;
  return false;
}

function promptingUserId(host: AgentHost): string {
  const userId = host.actor?.userId?.trim() || "";
  return userId === AGENT_USER_ID ? "" : userId;
}

function gatewayOptions(input: {
  stream: boolean;
  skipCache: boolean;
  cacheKey?: string;
  cacheTtl?: number;
  returnRawResponse?: boolean;
  metadata: AgentAiMetadata;
}): AgentAiRunOptions {
  const metadata = input.metadata;
  const gateway: AgentAiRunOptions["gateway"] = {
    id: AI_GATEWAY_ID,
    skipCache: input.skipCache,
    metadata
  };
  const options: AgentAiRunOptions = {
    gateway,
    stream: input.stream,
    skipCache: input.skipCache,
    metadata
  };
  if (input.returnRawResponse) {
    options.returnRawResponse = true;
  }
  if (input.cacheKey) {
    gateway.cacheKey = input.cacheKey;
    gateway.cacheTtl = input.cacheTtl;
    options.cacheKey = input.cacheKey;
    options.cacheTtl = input.cacheTtl;
    options.extraHeaders = {
      "cf-aig-cache-key": input.cacheKey,
      "cf-aig-cache-ttl": String(input.cacheTtl ?? EXPLAIN_CACHE_TTL)
    };
  }
  return options;
}

function cacheStatusFromHeader(value: string | null | undefined): "HIT" | "MISS" | null {
  const text = String(value || "").trim().toUpperCase();
  if (text === "HIT" || text === "MISS") return text;
  return null;
}

function cacheStatusFromAiResult(result: unknown): "HIT" | "MISS" | null {
  if (result instanceof Response) {
    return cacheStatusFromHeader(
      result.headers.get("cf-aig-cache-status") || result.headers.get("cf-cache-status")
    );
  }
  return null;
}

async function cacheStatusFromGatewayLog(
  env: AgentHost["env"],
  logId: string | null | undefined
): Promise<"HIT" | "MISS" | null> {
  if (!logId || !env?.AI?.gateway) return null;
  try {
    const log = await env.AI.gateway(AI_GATEWAY_ID).getLog(logId);
    if (log?.cached === true) return "HIT";
    if (log?.cached === false) return "MISS";
  } catch {
    return null;
  }
  return null;
}

function collabFrom(host: AgentHost): UniverCollabService | undefined {
  try {
    return host.kernel.get("collab") as UniverCollabService | undefined;
  } catch {
    return undefined;
  }
}

function actionFrom(host: AgentHost): ActionService | undefined {
  try {
    return host.kernel.get("action") as ActionService | undefined;
  } catch {
    return undefined;
  }
}

export function lastCollabActor(
  collab: UniverCollabService | undefined,
  unitId: string
): string {
  const last = collab?.listChangesetEntries(unitId).at(-1);
  if (!last) return "";
  const member = last.changeset?.memberID;
  if (typeof member === "string" && member.trim()) return member.trim();
  return last.clientId || "";
}

export function lastJournalActor(action: ActionService | undefined, unitId?: string): string {
  return journalActor(action?.peekLast(unitId)?.meta);
}

export function undoEnabledForUnit(
  action: ActionService | undefined,
  collab: UniverCollabService | undefined,
  unitId: string
): boolean {
  const collabActor = lastCollabActor(collab, unitId);
  if (collabActor && collabActor !== AGENT_USER_ID) return false;
  return action?.canReverseLast(unitId) === true;
}

async function reverseLastAgentTurn(
  host: AgentHost,
  unitId: string
): Promise<{ reversed: boolean; enabled: boolean; rev: number | null }> {
  registerFacadeActions(host.kernel);
  const action = actionFrom(host);
  const collab = collabFrom(host);
  if (!action) {
    return { reversed: false, enabled: false, rev: collab?.getUnit(unitId)?.rev ?? null };
  }
  if (!undoEnabledForUnit(action, collab, unitId)) {
    return { reversed: false, enabled: false, rev: collab?.getUnit(unitId)?.rev ?? null };
  }
  const beforeId = collab?.listChangesetEntries(unitId).at(-1)?.id;
  const reversed = await action.reverseLast(unitId);
  if (reversed && host.broadcastCollab) {
    const last = collab?.listChangesetEntries(unitId).at(-1);
    const changeset = last?.changeset as Record<string, unknown> | undefined;
    if (changeset && last?.id !== beforeId) {
      host.broadcastCollab(unitId, changeset, {
        userId: AGENT_USER_ID,
        name: "Workspace Agent",
        username: "agent"
      });
    }
  }
  return {
    reversed,
    enabled: undoEnabledForUnit(action, collab, unitId),
    rev: collab?.getUnit(unitId)?.rev ?? null
  };
}

function json(data: unknown, status = 200, extra: HeadersInit = {}): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", ...extra }
  });
}

function turnCacheHeaders(result: AgentTurnResult): HeadersInit {
  if (result.cache === "HIT" || result.cache === "MISS") {
    return { "cf-aig-cache-status": result.cache };
  }
  return {};
}

function parseCellsFromPrompt(prompt: string): Array<{ a1: string; value: string }> {
  const cells: Array<{ a1: string; value: string }> = [];
  const re = new RegExp(SET_CELL_RE.source, "gi");
  let match: RegExpExecArray | null;
  while ((match = re.exec(prompt))) {
    cells.push({ a1: match[1].toUpperCase(), value: match[2].trim().replace(/^["']|["']$/g, "") });
  }
  return cells;
}

function resolveActor(host: AgentHost): WorkspaceActor {
  return (
    host.actor ?? {
      userId: AGENT_USER_ID,
      name: "Workspace Agent",
      username: "agent"
    }
  );
}

function canonicalToolName(tool: string): string {
  return tool.includes(".") ? tool : tool.replace(/_/g, ".");
}

function cellA1(cell: unknown): string {
  if (!cell || typeof cell !== "object") return "";
  return String((cell as { a1?: unknown }).a1 ?? "").toUpperCase().replace(/\s/g, "");
}

function isE2E4Range(value: string): boolean {
  return /E2\s*:\s*E4/i.test(value);
}

function hasFillE2E4Cells(cells: unknown): boolean {
  if (!Array.isArray(cells)) return false;
  const a1s = new Set(cells.map(cellA1).filter(Boolean));
  if ([...a1s].some(isE2E4Range)) return true;
  return a1s.has("E2") && a1s.has("E3") && a1s.has("E4");
}

export function isQ3FillToolResult(tool: string, args: Record<string, unknown>): boolean {
  const name = canonicalToolName(tool);
  if (name === "univer.execute") {
    return isE2E4Range(String(args.code ?? ""));
  }
  if (name === "univer.sheet.setRange") {
    if (isE2E4Range(String(args.range ?? ""))) return true;
    return hasFillE2E4Cells(args.cells);
  }
  return false;
}

function screenshotFromUf(result: unknown): AgentScreenshot | null {
  if (!result || typeof result !== "object") return null;
  const rec = result as { error?: unknown; images?: unknown };
  if (rec.error) return null;
  if (!Array.isArray(rec.images) || rec.images.length === 0) return null;
  const first = rec.images[0];
  if (!first || typeof first !== "object") return null;
  const data = typeof (first as { data?: unknown }).data === "string" ? (first as { data: string }).data : "";
  if (!data) return null;
  const mediaType =
    typeof (first as { mediaType?: unknown }).mediaType === "string" && (first as { mediaType: string }).mediaType
      ? (first as { mediaType: string }).mediaType
      : "image/png";
  return { mediaType, data };
}

function scheduleWaitUntil(host: AgentHost, promise: Promise<unknown>): void {
  if (typeof host.waitUntil === "function") {
    host.waitUntil(promise);
    return;
  }
  try {
    const kernelHost = host.kernel.get("host") as { waitUntil?: (promise: Promise<unknown>) => void };
    kernelHost?.waitUntil?.(promise);
  } catch {
    // no ExecutionContext on this host
  }
}

async function captureQ3FillScreenshot(
  action: ActionService,
  unitId: string,
  actor: WorkspaceActor
): Promise<AgentScreenshot | null> {
  try {
    const result = await executeTool(
      action,
      "univer.screenshot",
      { unitId, params: { range: Q3_FILL_SCREENSHOT_RANGE } },
      unitId,
      actor
    );
    return screenshotFromUf(result);
  } catch {
    return null;
  }
}

async function executeTool(
  action: ActionService,
  name: string,
  args: Record<string, unknown>,
  unitId: string,
  actor: WorkspaceActor
): Promise<unknown> {
  const id = name.includes(".") ? name : name.replace(/_/g, ".");
  return action.execute(id, args, {
    unitId,
    userId: actor.userId,
    clientId: AGENT_MEMBER_ID
  });
}

function ingestSseBlock(block: string, emit: (event: AgentEvent) => void): string {
  let text = "";
  for (const line of block.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed.startsWith("data:")) continue;
    const raw = trimmed.slice(5).trim();
    if (!raw || raw === "[DONE]") continue;
    try {
      const parsed = JSON.parse(raw) as { response?: unknown; delta?: unknown };
      const delta = String(parsed.response ?? parsed.delta ?? "");
      if (!delta) continue;
      text += delta;
      emit({ type: "agent.token", data: { delta } });
    } catch {
      // ignore malformed SSE payloads
    }
  }
  return text;
}

async function readSseTokenStream(
  stream: ReadableStream<Uint8Array>,
  emit: (event: AgentEvent) => void
): Promise<string> {
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  let buf = "";
  let text = "";
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buf += decoder.decode(value, { stream: true });
    const parts = buf.split("\n\n");
    buf = parts.pop() ?? "";
    for (const block of parts) {
      text += ingestSseBlock(block, emit);
    }
  }
  buf += decoder.decode();
  if (buf.trim()) text += ingestSseBlock(buf, emit);
  return text;
}

function isReadableStream(value: unknown): value is ReadableStream<Uint8Array> {
  return Boolean(value && typeof value === "object" && typeof (value as ReadableStream).getReader === "function");
}

async function consumeExplainResult(result: unknown): Promise<{ text: string; cache: "HIT" | "MISS" | null }> {
  const cache = cacheStatusFromAiResult(result);
  if (result instanceof Response) {
    const raw = await result.text();
    try {
      const parsed = JSON.parse(raw) as { response?: unknown; content?: unknown };
      return { text: String(parsed.response ?? parsed.content ?? "").trim(), cache };
    } catch {
      return { text: raw.trim(), cache };
    }
  }
  return {
    text: String(
      (result as { response?: unknown; content?: unknown } | undefined)?.response
        ?? (result as { content?: unknown } | undefined)?.content
        ?? ""
    ).trim(),
    cache
  };
}

async function consumeGatewayResult(result: unknown, emit: (event: AgentEvent) => void): Promise<string> {
  if (isReadableStream(result)) {
    return readSseTokenStream(result, emit);
  }
  if (result instanceof Response && result.body) {
    return readSseTokenStream(result.body, emit);
  }
  return String((result as { response?: unknown; content?: unknown } | undefined)?.response ?? (result as { content?: unknown } | undefined)?.content ?? "").trim();
}

async function tryWorkersAi(
  env: AgentHost["env"],
  action: ActionService,
  unitId: string,
  prompt: string,
  emit: (event: AgentEvent) => void,
  recordTool: (tool: string, args: Record<string, unknown>) => Promise<unknown>,
  ctx: { turnId: string; actorUserId: string }
): Promise<{ text: string; used: boolean; streamed: boolean; cache: "HIT" | "MISS" | null }> {
  if (!env?.AI?.run) return { text: "", used: false, streamed: false, cache: null };
  const explain = isCachedExplainPrompt(prompt);
  const messages: Array<Record<string, unknown>> = [
    { role: "system", content: agentSystemPrompt(unitId) },
    { role: "user", content: prompt }
  ];
  let lastError = "";
  let usedTools = false;
  for (const model of AI_GATEWAY_LIVE_MODELS) {
    try {
      if (!explain) {
        const tools = action.getLlmTools().map((tool) => ({
          type: "function",
          function: {
            name: tool.name,
            description: tool.description,
            parameters: tool.parameters
          }
        }));
        for (let step = 0; step < 6; step++) {
          const result = await env.AI.run(
            model,
            { messages, tools },
            gatewayOptions({
              stream: false,
              skipCache: true,
              metadata: {
                product: AI_GATEWAY_PRODUCT,
                unitId,
                turnId: ctx.turnId,
                actorUserId: ctx.actorUserId,
                step: "tool"
              }
            })
          );
          if (isReadableStream(result) || result instanceof Response) {
            break;
          }
          const message = result?.response
            ? { content: String(result.response), tool_calls: result.tool_calls }
            : result;
          const toolCalls = message?.tool_calls || result?.tool_calls;
          if (Array.isArray(toolCalls) && toolCalls.length > 0) {
            usedTools = true;
            messages.push({ role: "assistant", content: message?.content ?? "", tool_calls: toolCalls });
            for (const call of toolCalls) {
              const name = call.function?.name || call.name;
              const rawArgs = call.function?.arguments ?? call.arguments ?? {};
              const args = typeof rawArgs === "string" ? JSON.parse(rawArgs) : rawArgs;
              const toolResult = await recordTool(name, args);
              messages.push({
                role: "tool",
                name,
                content: JSON.stringify(toolResult)
              });
            }
            continue;
          }
          break;
        }
      }

      if (explain) {
        const result = await env.AI.run(
          model,
          { messages },
          gatewayOptions({
            stream: false,
            skipCache: false,
            cacheKey: EXPLAIN_CACHE_KEY,
            cacheTtl: EXPLAIN_CACHE_TTL,
            returnRawResponse: true,
            metadata: {
              product: AI_GATEWAY_PRODUCT,
              unitId,
              turnId: "explain-q3",
              actorUserId: ctx.actorUserId,
              step: "explain"
            }
          })
        );
        let { text, cache } = await consumeExplainResult(result);
        if (!cache) {
          cache = await cacheStatusFromGatewayLog(env, env.AI.aiGatewayLogId);
        }
        if (text) return { text, used: true, streamed: false, cache };
        continue;
      }

      const streamed = await env.AI.run(
        model,
        { messages, stream: true },
        gatewayOptions({
          stream: true,
          skipCache: true,
          metadata: {
            product: AI_GATEWAY_PRODUCT,
            unitId,
            turnId: ctx.turnId,
            actorUserId: ctx.actorUserId,
            step: explain ? "explain" : "text"
          }
        })
      );
      const didStream = isReadableStream(streamed) || streamed instanceof Response;
      let cache = cacheStatusFromAiResult(streamed);
      const text = (await consumeGatewayResult(streamed, emit)).trim();
      if (!cache) {
        cache = await cacheStatusFromGatewayLog(env, env.AI.aiGatewayLogId);
      }
      if (text || usedTools) return { text, used: true, streamed: didStream, cache };
    } catch (err: any) {
      lastError = err?.message || String(err);
    }
  }
  if (lastError) {
    emit({ type: "agent.thinking", data: { delta: `Workers AI unavailable (${lastError}); using Skill planner.` } });
  }
  return { text: "", used: usedTools, streamed: false, cache: null };
}

export async function runAgentTurn(
  host: AgentHost,
  input: { unitId: string; prompt: string },
  onEvent?: (event: AgentEvent) => void
): Promise<AgentTurnResult> {
  const kernel = host.kernel;
  registerFacadeActions(kernel);
  let action: ActionService;
  try {
    action = kernel.get("action") as ActionService;
  } catch (err: any) {
    throw new Error(`Action engine unavailable: ${err?.message || err}`);
  }
  if (!action) {
    throw new Error("Action engine unavailable");
  }
  const collab = (() => {
    try {
      return kernel.get("collab") as UniverCollabService | undefined;
    } catch {
      return undefined;
    }
  })();
  const actor = resolveActor(host);
  const actorUserId = promptingUserId(host);
  const unitId = input.unitId;
  const prompt = String(input.prompt || "").trim();
  const turnId = `turn_${crypto.randomUUID()}`;
  const events: AgentEvent[] = [];
  const emit = (event: AgentEvent) => {
    events.push(event);
    try {
      onEvent?.(event);
    } catch {
      // live sinks must not fail the turn
    }
  };
  const toolCalls: AgentTurnResult["toolCalls"] = [];
  let fillScreenshot: Promise<AgentScreenshot | null> | undefined;

  if (!prompt) {
    emit({ type: "agent.error", data: { message: "Prompt is required" } });
    const empty = { turnId, unitId, prompt, events, text: "", toolCalls, rev: null, actor };
    recordTurn(empty);
    return empty;
  }

  if (INFLIGHT_UNITS.has(unitId)) {
    emit({ type: "agent.error", data: { message: "Agent is busy" } });
    const busy = { turnId, unitId, prompt, events, text: "", toolCalls, rev: null, actor };
    recordTurn(busy);
    return busy;
  }
  INFLIGHT_UNITS.add(unitId);

  try {
    emit({ type: "agent.thinking", data: { delta: "Loading Workspace Skills and unit snapshot…" } });

  const recordTool = async (tool: string, args: Record<string, unknown>) => {
    emit({ type: "agent.tool_call_start", data: { tool, args } });
    const result = await executeTool(action, tool, args, unitId, actor);
    emit({ type: "agent.tool_call_result", data: { tool, args, result } });
    toolCalls.push({ tool, args, result });
    if (!fillScreenshot && isQ3FillToolResult(tool, args)) {
      fillScreenshot = captureQ3FillScreenshot(action, unitId, actor);
      scheduleWaitUntil(host, fillScreenshot.then(() => undefined));
    }
    const changeset = (result as any)?.rev
      ? ((collab?.listChangesetEntries(unitId) ?? []).at(-1)?.changeset as Record<string, unknown> | undefined)
      : undefined;
    if (changeset && host.broadcastCollab) {
      host.broadcastCollab(unitId, changeset, actor);
    }
    return result;
  };

  const skillMatch = prompt.match(/^(?:skill|skills get|load skill)\s+(\w+)/i);
  const wantSkills = /\bskills?\b/i.test(prompt) && /list|what|available/i.test(prompt);
  const cells = parseCellsFromPrompt(prompt);
  const appendMatch = prompt.match(/append(?:\s+text)?\s+(.+)/i);
  const rangeMatch = prompt.match(/(?:read|get|show|inspect)\s+(?:range\s+)?([A-Za-z]{1,3}\d+(?::[A-Za-z]{1,3}\d+)?)/i);

  let text = "";
  let streamedTokens = false;
  let cache: "HIT" | "MISS" | null = null;

  if (wantSkills) {
    await recordTool("univer.skills.list", {});
    text = `Available Skills: ${listAgentSkills().map((s) => `${s.id} (${s.source})`).join(", ")}.`;
  } else if (skillMatch) {
    const skill = getAgentSkill(skillMatch[1]);
    await recordTool("univer.skills.get", { id: skillMatch[1] });
    text = skill ? skill.body : `Unknown skill ${skillMatch[1]}.`;
  } else if (cells.length > 0) {
    await recordTool("univer.unit.getSnapshot", { unitId });
    const result = await recordTool("univer.sheet.setRange", { unitId, cells });
    await recordTool("univer.sheet.getRange", {
      unitId,
      range: cells.length === 1 ? cells[0].a1 : `${cells[0].a1}:${cells[cells.length - 1].a1}`
    });
    text = `Wrote ${cells.map((c) => `${c.a1}=${c.value}`).join(", ")} on ${unitId} (rev ${(result as any).rev}). History now includes this changeset. Merge remains a human review step if this was a Worktree draft.`;
  } else if (appendMatch) {
    const result = await recordTool("univer.doc.appendText", { unitId, text: appendMatch[1].trim() });
    text = `Appended text to ${unitId} (rev ${(result as any).rev}).`;
  } else if (rangeMatch) {
    const result = await recordTool("univer.sheet.getRange", { unitId, range: rangeMatch[1].toUpperCase() });
    text = `Range ${rangeMatch[1].toUpperCase()}: ${JSON.stringify((result as any).values)}`;
  } else {
    const ai = await tryWorkersAi(
      host.env,
      action,
      unitId,
      prompt,
      emit,
      recordTool,
      { turnId, actorUserId }
    );
    streamedTokens = ai.streamed;
    cache = ai.cache;
    if (ai.used && ai.text) {
      text = ai.text;
    } else if (ai.used) {
      const plannerCells = parseCellsFromPrompt(prompt);
      if (plannerCells.length > 0) {
        await recordTool("univer.unit.getSnapshot", { unitId });
        const result = await recordTool("univer.sheet.setRange", { unitId, cells: plannerCells });
        await recordTool("univer.sheet.getRange", {
          unitId,
          range: plannerCells.length === 1 ? plannerCells[0].a1 : `${plannerCells[0].a1}:${plannerCells[plannerCells.length - 1].a1}`
        });
        text = `Wrote ${plannerCells.map((c) => `${c.a1}=${c.value}`).join(", ")} on ${unitId} (rev ${(result as any).rev}). History now includes this changeset. Merge remains a human review step if this was a Worktree draft.`;
      } else {
        const snap = collab?.getLatestSnapshot(unitId);
        text = toolCalls.length
          ? `Applied ${[...new Set(toolCalls.map((call) => call.tool))].join(", ")} on ${unitId} (rev ${snap?.rev ?? 0}).`
          : `I can edit this Unit with Workspace Skills (core, sheet, doc, collaboration, worktree). Try: "Set A1 to Hello from AI". Current revision is ${snap?.rev ?? 0}.`;
      }
    } else {
      await recordTool("univer.unit.getSnapshot", { unitId });
      const snap = collab?.getLatestSnapshot(unitId);
      text = `I can edit this Unit with Workspace Skills (core, sheet, doc, collaboration, worktree). Try: "Set A1 to Hello from AI". Current revision is ${snap?.rev ?? 0}.`;
    }
  }

  if (!streamedTokens) {
    for (const chunk of text.split(/(?<=\s)/).filter(Boolean)) {
      emit({ type: "agent.token", data: { delta: chunk } });
    }
  }
  const screenshot = fillScreenshot ? await fillScreenshot : undefined;
  const unit = collab?.getUnit(unitId);
  const doneData: Record<string, unknown> = {
    turnId,
    rev: unit?.rev ?? null,
    actor: { userId: actor.userId, name: actor.name },
    aiGatewayLogId: host.env?.AI?.aiGatewayLogId ?? null,
    cache
  };
  if (fillScreenshot) doneData.screenshot = screenshot ?? null;
  emit({
    type: "agent.done",
    data: doneData
  });
  const completed: AgentTurnResult = {
    turnId,
    unitId,
    prompt,
    events,
    text,
    toolCalls,
    rev: unit?.rev ?? null,
    actor: { userId: actor.userId, name: actor.name },
    screenshot: fillScreenshot ? screenshot ?? null : undefined,
    cache
  };
  recordTurn(completed);
  return completed;
  } finally {
    INFLIGHT_UNITS.delete(unitId);
  }
}

export function muxFrame(type: string, data: unknown, ch = 2): Record<string, unknown> {
  return { ch, channel: ch, type, data };
}

export async function handleAgentMuxPrompt(
  host: AgentHost,
  ws: WebSocket,
  parsed: any,
  fallbackUnitId: string
): Promise<void> {
  const unitId = parsed.data?.unitId || parsed.data?.unitID || parsed.payload?.unitId || fallbackUnitId;
  const prompt = parsed.data?.text || parsed.data?.prompt || parsed.payload?.text || "";
  await runAgentTurn(host, { unitId, prompt }, (event) => {
    try {
      ws.send(JSON.stringify(muxFrame(event.type, event.data)));
    } catch {
      // ignore closed sockets
    }
  });
}

function wantsSse(request: Request): boolean {
  return (request.headers.get("Accept") || "").includes("text/event-stream");
}

function startTurnSse(host: AgentHost, unitId: string, prompt: string): Response {
  const { readable, writable } = new TransformStream<Uint8Array, Uint8Array>();
  const writer = writable.getWriter();
  const encoder = new TextEncoder();
  const onEvent = (event: AgentEvent) => {
    const payload = `event: ${event.type}\ndata: ${JSON.stringify(event.data)}\n\n`;
    void writer.write(encoder.encode(payload));
  };
  void runAgentTurn(host, { unitId, prompt }, onEvent)
    .catch((err: any) => {
      onEvent({ type: "agent.error", data: { message: err?.message || String(err) } });
    })
    .finally(() => {
      void writer.close();
    });
  return new Response(readable, {
    status: 200,
    headers: {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-cache",
      Connection: "keep-alive"
    }
  });
}

export async function handleAgentHttp(request: Request, host: AgentHost): Promise<Response | null> {
  const url = new URL(request.url);
  const path = url.pathname.replace(/\/+$/u, "") || "/";
  const actor = actorFromRequest(request) ?? host.actor ?? null;
  const liveHost: AgentHost = { ...host, actor };

  if (path === "/agents" && request.method === "GET") {
    registerFacadeActions(host.kernel);
    const action = host.kernel.get("action") as ActionService | undefined;
    return json({
      status: "ok",
      product: "univer-workspace-agent",
      actor,
      skills: listAgentSkills(),
      tools: action?.getLlmTools() ?? [],
      protocol: {
        http: [
          "GET /agents",
          "GET /agents/skills",
          "POST /agents/:unitId/turns",
          "GET /agents/:unitId/undo",
          "POST /agents/:unitId/undo"
        ],
        mux: "channel 2 agent.prompt on /api/remote.mux",
        collab: [
          "GET /universer-api/snapshot/:type/unit/:unitId",
          "POST /universer-api/comb/:type/unit/:unitId/new_changes",
          "GET /universer-api/history/:unitId/list"
        ]
      }
    });
  }

  if (path === "/agents/skills" && request.method === "GET") {
    const id = url.searchParams.get("id");
    if (id) {
      const skill = getAgentSkill(id);
      if (!skill) return json({ error: { message: `Unknown skill: ${id}` } }, 404);
      return json(skill);
    }
    return json({ skills: listAgentSkills() });
  }

  const turnsMatch = path.match(/^\/agents\/([^/]+)\/turns$/);
  if (turnsMatch && request.method === "POST") {
    const unitId = turnsMatch[1];
    const body = (await request.json().catch(() => ({}))) as { prompt?: string; text?: string };
    const prompt = body.prompt || body.text || "";
    const collab = collabFrom(host);
    if (collab && !collab.getUnit(unitId)) {
      return json({ error: { message: "unit not found" } }, 404);
    }
    if (wantsSse(request)) return startTurnSse(liveHost, unitId, prompt);
    const result = await runAgentTurn(liveHost, { unitId, prompt });
    return json(result, 200, turnCacheHeaders(result));
  }

  if (turnsMatch && request.method === "GET") {
    return json({ items: TURN_LOG.get(turnsMatch[1]) ?? [], nextCursor: null, unitId: turnsMatch[1] });
  }

  const undoMatch = path.match(/^\/agents\/([^/]+)\/undo$/);
  if (undoMatch && (request.method === "GET" || request.method === "POST")) {
    const unitId = undoMatch[1];
    registerFacadeActions(host.kernel);
    const collab = collabFrom(host);
    if (collab && !collab.getUnit(unitId)) {
      return json({ error: { message: "unit not found" } }, 404);
    }
    if (request.method === "GET") {
      const action = actionFrom(host);
      const lastActor = lastCollabActor(collab, unitId) || lastJournalActor(action, unitId);
      return json({
        enabled: undoEnabledForUnit(action, collab, unitId),
        reversible: action?.canReverseLast(unitId) === true,
        actor: lastActor,
        unitId
      });
    }
    const result = await reverseLastAgentTurn(liveHost, unitId);
    return json(result, result.reversed ? 200 : 409);
  }

  if (path === "/agents/turns" && request.method === "POST") {
    const body = (await request.json().catch(() => ({}))) as { unitId?: string; prompt?: string; text?: string };
    if (!body.unitId) return json({ error: { message: "unitId is required" } }, 400);
    const collab = collabFrom(host);
    if (collab && !collab.getUnit(body.unitId)) {
      return json({ error: { message: "unit not found" } }, 404);
    }
    const prompt = body.prompt || body.text || "";
    if (wantsSse(request)) return startTurnSse(liveHost, body.unitId, prompt);
    const result = await runAgentTurn(liveHost, { unitId: body.unitId, prompt });
    return json(result, 200, turnCacheHeaders(result));
  }

  return null;
}

export const name = "univer-agent";

export function apply(ctx: Context): void {
  try {
    registerFacadeActions(ctx);
  } catch (err) {
    console.warn("Agent facade registration skipped:", err);
  }
  ctx.provide("agent", { run: (input: { unitId: string; prompt: string }) => runAgentTurn({ kernel: ctx }, input) });
}
