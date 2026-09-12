export const AGENT_PANEL_ID = "workspace-agent-panel";
export const AGENT_PANEL_STORAGE_KEY = "univer-workspace-agent-panel-v1";

export type AgentSuggestionKey =
  | "agentChipFillQ3"
  | "agentChipExplainQ3"
  | "agentChipExplainSelection"
  | "agentChipSetD4"
  | "agentChipAppend"
  | "agentChipSkills"
  | "agentChipHistory";

export type ExplainSelectionToastKey = "selectARange";

export type ExplainSelectionResult =
  | { readonly action: "toast"; readonly toastKey: ExplainSelectionToastKey }
  | { readonly action: "turn"; readonly prompt: string };

export interface ExplainSelectionHost {
  readonly getActiveWorkbook?: () => unknown;
}

export interface AgentSuggestion {
  readonly id: string;
  readonly prompt: string;
  readonly labelKey: AgentSuggestionKey;
}

export interface AgentStreamEvent {
  readonly type: string;
  readonly data: Record<string, unknown>;
}

type StorageLike = Pick<Storage, "getItem" | "setItem">;

let explainSelectionHost: ExplainSelectionHost | undefined;

function browserStorage(): StorageLike | undefined {
  try {
    return globalThis.localStorage;
  } catch {
    return undefined;
  }
}

function asRecord(value: unknown): Record<string, unknown> | null {
  return value !== null && typeof value === "object"
    ? (value as Record<string, unknown>)
    : null;
}

export function bindExplainSelectionHost(
  host: ExplainSelectionHost | undefined
): void {
  explainSelectionHost = host;
}

export function explainSelectionPrompt(range: string): string {
  return `Explain ${range} in one sentence`;
}

export function explainSelectionFromRange(
  range: string | null | undefined
): ExplainSelectionResult {
  const a1 = range?.trim() ?? "";
  if (!a1) {
    return { action: "toast", toastKey: "selectARange" };
  }
  return { action: "turn", prompt: explainSelectionPrompt(a1) };
}

export function readActiveRangeA1(
  host: ExplainSelectionHost | undefined = explainSelectionHost
): string | null {
  const workbook = host?.getActiveWorkbook?.();
  const wb = asRecord(workbook);
  if (!wb) return null;
  const getActiveRange = wb.getActiveRange;
  if (typeof getActiveRange !== "function") return null;
  const range = (getActiveRange as () => unknown).call(workbook);
  if (range == null) return null;
  if (typeof range === "string") {
    const trimmed = range.trim();
    return trimmed || null;
  }
  const obj = asRecord(range);
  if (!obj) return null;
  const getA1 = obj.getA1Notation;
  if (typeof getA1 !== "function") return null;
  const a1 = String((getA1 as () => unknown).call(range) ?? "").trim();
  return a1 || null;
}

export function readAgentPanelOpen(
  fallback: boolean,
  storage: StorageLike | undefined = browserStorage()
): boolean {
  const stored = storage?.getItem(AGENT_PANEL_STORAGE_KEY);
  if (stored === "true") return true;
  if (stored === "false") return false;
  return fallback;
}

export function writeAgentPanelOpen(
  open: boolean,
  storage: StorageLike | undefined = browserStorage()
): void {
  storage?.setItem(AGENT_PANEL_STORAGE_KEY, String(open));
}

export function defaultAgentPanelOpen(
  media: { matches: boolean } | undefined =
    typeof window === "undefined"
      ? undefined
      : window.matchMedia("(max-width: 720px)")
): boolean {
  return media ? !media.matches : true;
}

export function agentExamplePrompt(unitType: string): string {
  if (unitType === "doc") return "Append Hello from AI";
  if (unitType === "sheet" || unitType === "base") {
    return "Fill E2:E4 with SUM of Jul–Sep";
  }
  return "List available skills";
}

export function suggestionChipsForUnitType(
  unitType: string
): readonly AgentSuggestion[] {
  const skills: AgentSuggestion = {
    id: "skills",
    prompt: "List available skills",
    labelKey: "agentChipSkills",
  };
  const history: AgentSuggestion = {
    id: "history",
    prompt: "Show edit history",
    labelKey: "agentChipHistory",
  };
  if (unitType === "doc") {
    return [
      {
        id: "append",
        prompt: "Append Hello from AI",
        labelKey: "agentChipAppend",
      },
      skills,
      history,
    ];
  }
  if (unitType === "sheet" || unitType === "base") {
    return [
      {
        id: "fill-q3",
        prompt: "Fill E2:E4 with SUM of Jul–Sep",
        labelKey: "agentChipFillQ3",
      },
      {
        id: "explain-q3",
        prompt: "Explain the Q3 forecast in one sentence",
        labelKey: "agentChipExplainQ3",
      },
      {
        id: "explain-selection",
        prompt: "",
        labelKey: "agentChipExplainSelection",
      },
      {
        id: "set-d4",
        prompt: "Set D4 to 180",
        labelKey: "agentChipSetD4",
      },
    ];
  }
  return [skills, history];
}

export async function readJsonBody(
  response: Response
): Promise<Record<string, unknown>> {
  const raw = await response.text();
  if (!raw.trim()) return {};
  try {
    return JSON.parse(raw) as Record<string, unknown>;
  } catch {
    return { error: { message: raw.slice(0, 240) } };
  }
}

export function agentErrorMessage(
  body: Record<string, unknown>,
  fallback: string
): string {
  const error = body.error;
  if (error && typeof error === "object" && "message" in error) {
    const message = (error as { message?: unknown }).message;
    if (typeof message === "string" && message.trim()) return message;
  }
  if (typeof body.message === "string" && body.message.trim()) {
    return body.message;
  }
  return fallback;
}

export function shouldPostAgentTurn(spectator?: boolean): boolean {
  return spectator !== true;
}

export const AGENT_UNDO_ACTOR = "agent_workspace";
export const COMB_CHANGESET_EVENT = "workspace-comb-changeset";

export function canUndoAgentTurn(
  actor: string | null | undefined,
  reversible = true
): boolean {
  return actor === AGENT_UNDO_ACTOR && reversible;
}

function combChangesetEventId(root: Record<string, unknown>): string | undefined {
  const collaMsg = asRecord(root.collaMsg);
  const data = asRecord(root.data);
  if (typeof collaMsg?.eventID === "string") return collaMsg.eventID;
  if (typeof root.eventID === "string") return root.eventID;
  if (typeof data?.eventID === "string") return data.eventID;
  return undefined;
}

function isCombChangesetEventId(eventID: string | undefined): boolean {
  return eventID === "new_changesets" || eventID === "changeset_ack";
}

function combChangesetRecord(
  root: Record<string, unknown>
): Record<string, unknown> | null {
  const collaMsg = asRecord(root.collaMsg);
  const data = asRecord(root.data);
  const newCs =
    asRecord(collaMsg?.newCsEvent) ??
    asRecord(root.newCsEvent) ??
    asRecord(data?.newCsEvent);
  const ackCs =
    asRecord(collaMsg?.csAckEvent) ??
    asRecord(root.csAckEvent) ??
    asRecord(data?.csAckEvent);
  return (
    asRecord(newCs?.cs) ??
    asRecord(ackCs?.cs) ??
    asRecord(root.cs) ??
    asRecord(data?.cs) ??
    newCs ??
    ackCs
  );
}

export function readCombChangesetActor(event: {
  readonly type?: string;
  readonly detail?: unknown;
}): string | null {
  const root = asRecord(event.detail) ?? asRecord(event);
  if (!root) return null;
  const eventID = combChangesetEventId(root);
  if (eventID && !isCombChangesetEventId(eventID)) return null;
  if (
    event.type &&
    event.type !== COMB_CHANGESET_EVENT &&
    !isCombChangesetEventId(eventID)
  ) {
    return null;
  }
  const cs = combChangesetRecord(root);
  const member =
    (typeof cs?.memberID === "string" && cs.memberID.trim()) ||
    (typeof cs?.userID === "string" && cs.userID.trim()) ||
    (typeof cs?.clientId === "string" && cs.clientId.trim()) ||
    "";
  return member || null;
}

export function tapCollaborationSocketChangeset(
  socket:
    | {
        readonly message$?: {
          readonly subscribe: (next: (event: unknown) => void) => unknown;
        };
      }
    | null
    | undefined,
  target?: EventTarget
): void {
  const dest =
    target ??
    (typeof globalThis !== "undefined" &&
    typeof (globalThis as { dispatchEvent?: unknown }).dispatchEvent ===
      "function"
      ? (globalThis as unknown as EventTarget)
      : undefined);
  if (!socket?.message$?.subscribe || !dest) return;
  socket.message$.subscribe((event) => {
    if (
      !readCombChangesetActor({
        type: COMB_CHANGESET_EVENT,
        detail: event,
      })
    ) {
      return;
    }
    dest.dispatchEvent(
      new CustomEvent(COMB_CHANGESET_EVENT, { detail: event })
    );
  });
}

export function shouldShowLiveAgentTurn(input: {
  readonly pending: boolean;
  readonly streamText: string;
  readonly streamEvents: readonly { readonly type: string }[];
}): boolean {
  if (input.pending) return true;
  if (input.streamText) return true;
  return input.streamEvents.some((event) => event.type !== "agent.error");
}

export function isSseContentType(contentType: string | null): boolean {
  return (contentType ?? "").includes("text/event-stream");
}

export function isCachedExplainPrompt(prompt: string): boolean {
  const text = prompt.trim();
  if (/^explain the q3 forecast(?: in one sentence)?$/i.test(text)) return true;
  if (/^explain the full[- ]?sheet(?: in one sentence)?$/i.test(text)) {
    return true;
  }
  return false;
}

export function gatewayCacheStatus(
  meta: Record<string, unknown> | undefined,
  _prompt = ""
): "HIT" | "MISS" | null {
  const cache = meta?.cache ?? meta?.["cf-aig-cache-status"];
  if (cache === "HIT" || cache === "hit") return "HIT";
  if (cache === "MISS" || cache === "miss") return "MISS";
  if (meta?.cacheHit === true || meta?.cached === true) return "HIT";
  if (meta?.cacheHit === false || meta?.cached === false) return "MISS";
  return null;
}

export function truncateGatewayLogId(
  id: string | null | undefined,
  max = 11
): string {
  if (!id) return "";
  if (id.length <= max) return id;
  return `${id.slice(0, max)}…`;
}

export const Q3_FILL_SCREENSHOT_ALT = "Q3 Forecast after agent fill";

export type AgentScreenshotCard =
  | {
      readonly kind: "image";
      readonly mediaType: string;
      readonly data: string;
      readonly alt: typeof Q3_FILL_SCREENSHOT_ALT;
    }
  | { readonly kind: "unavailable" }
  | { readonly kind: "none" };

export function agentScreenshotCard(screenshot: unknown): AgentScreenshotCard {
  if (screenshot === undefined) return { kind: "none" };
  if (screenshot === null || typeof screenshot !== "object") {
    return { kind: "unavailable" };
  }
  const rec = screenshot as { mediaType?: unknown; data?: unknown };
  const data = typeof rec.data === "string" ? rec.data : "";
  if (!data) return { kind: "unavailable" };
  const mediaType =
    typeof rec.mediaType === "string" && rec.mediaType
      ? rec.mediaType
      : "image/png";
  return {
    kind: "image",
    mediaType,
    data,
    alt: Q3_FILL_SCREENSHOT_ALT,
  };
}

export function parseSseBlock(block: string): AgentStreamEvent | null {
  let type = "message";
  const dataLines: string[] = [];
  for (const line of block.split(/\r?\n/)) {
    if (line.startsWith("event:")) type = line.slice(6).trim();
    else if (line.startsWith("data:")) dataLines.push(line.slice(5).trim());
  }
  if (dataLines.length === 0) return null;
  const raw = dataLines.join("\n");
  try {
    const parsed = JSON.parse(raw) as unknown;
    if (parsed && typeof parsed === "object") {
      const obj = parsed as Record<string, unknown>;
      if (typeof obj.type === "string" && obj.type.startsWith("agent.")) {
        return {
          type: obj.type,
          data:
            obj.data && typeof obj.data === "object"
              ? (obj.data as Record<string, unknown>)
              : obj,
        };
      }
      return { type, data: obj };
    }
    return { type, data: { value: parsed } };
  } catch {
    return { type, data: { text: raw } };
  }
}

async function readSseEvents(
  response: Response,
  onEvent: (event: AgentStreamEvent) => void
): Promise<void> {
  const reader = response.body?.getReader();
  if (!reader) return;
  const decoder = new TextDecoder();
  let buf = "";
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buf += decoder.decode(value, { stream: true });
    const parts = buf.split(/\r?\n\r?\n/);
    buf = parts.pop() ?? "";
    for (const part of parts) {
      const event = parseSseBlock(part);
      if (event) onEvent(event);
    }
  }
  buf += decoder.decode();
  if (buf.trim()) {
    const event = parseSseBlock(buf);
    if (event) onEvent(event);
  }
}

function asToolCall(
  data: Record<string, unknown>
): { tool: string; args: Record<string, unknown> } | null {
  const tool = typeof data.tool === "string" ? data.tool : "";
  if (!tool) return null;
  const args =
    data.args && typeof data.args === "object"
      ? (data.args as Record<string, unknown>)
      : {};
  return { tool, args };
}

function asStreamEvents(value: unknown): AgentStreamEvent[] {
  if (!Array.isArray(value)) return [];
  return value.flatMap((item) => {
    if (!item || typeof item !== "object") return [];
    const type = "type" in item ? String(item.type ?? "") : "";
    if (!type) return [];
    const data =
      "data" in item && item.data && typeof item.data === "object"
        ? (item.data as Record<string, unknown>)
        : {};
    return [{ type, data }];
  });
}

function agentErrorFromEvents(
  events: readonly AgentStreamEvent[]
): { message: string } | undefined {
  for (const event of events) {
    if (event.type !== "agent.error") continue;
    const message = event.data.message;
    if (typeof message === "string" && message.trim()) {
      return { message };
    }
    return { message: "The agent could not complete that turn." };
  }
  return undefined;
}

export function liftAgentTurnBody(
  body: Record<string, unknown>
): Record<string, unknown> {
  const events = asStreamEvents(body.events);
  const next: Record<string, unknown> = { ...body };
  for (const event of events) {
    if (event.type !== "agent.done") continue;
    if (next.aiGatewayLogId == null && event.data.aiGatewayLogId != null) {
      next.aiGatewayLogId = event.data.aiGatewayLogId;
    }
    if (next.skipCache === undefined && event.data.skipCache !== undefined) {
      next.skipCache = event.data.skipCache;
    }
    if (next.cache === undefined && event.data.cache !== undefined) {
      next.cache = event.data.cache;
    }
    if (next.cacheHit === undefined && event.data.cacheHit !== undefined) {
      next.cacheHit = event.data.cacheHit;
    }
    if (next.screenshot === undefined && event.data.screenshot !== undefined) {
      next.screenshot = event.data.screenshot;
    }
  }
  if (next.error == null) {
    const error = agentErrorFromEvents(events);
    if (error) next.error = error;
  }
  return next;
}

export async function consumeAgentTurnResponse(
  response: Response,
  onEvent?: (event: AgentStreamEvent) => void
): Promise<Record<string, unknown>> {
  if (!isSseContentType(response.headers.get("content-type"))) {
    return liftAgentTurnBody(await readJsonBody(response));
  }
  const events: AgentStreamEvent[] = [];
  const toolCalls: Array<{ tool: string; args: Record<string, unknown> }> =
    [];
  let text = "";
  let doneData: Record<string, unknown> = {};
  const emit = (event: AgentStreamEvent) => {
    events.push(event);
    onEvent?.(event);
    if (event.type === "agent.token") {
      text += String(event.data.delta ?? event.data.text ?? "");
    }
    if (event.type === "agent.tool_call_start") {
      const call = asToolCall(event.data);
      if (call) toolCalls.push(call);
    }
    if (event.type === "agent.done") {
      doneData = event.data;
    }
  };
  await readSseEvents(response, emit);
  return liftAgentTurnBody({
    ...doneData,
    turnId: doneData.turnId,
    text,
    events,
    rev: typeof doneData.rev === "number" ? doneData.rev : null,
    toolCalls,
    aiGatewayLogId: doneData.aiGatewayLogId ?? null,
  });
}

export function readAgentMuxFrame(raw: string): AgentStreamEvent | null {
  try {
    const parsed = JSON.parse(raw) as Record<string, unknown>;
    const ch = parsed.ch ?? parsed.channel;
    if (ch !== 2) return null;
    const type = parsed.type;
    if (typeof type !== "string" || !type.startsWith("agent.")) return null;
    const data =
      parsed.data && typeof parsed.data === "object"
        ? (parsed.data as Record<string, unknown>)
        : parsed.payload && typeof parsed.payload === "object"
          ? (parsed.payload as Record<string, unknown>)
          : {};
    return { type, data };
  } catch {
    return null;
  }
}

export function agentMuxUrl(
  unitId: string,
  origin: { protocol: string; host: string } = globalThis.location
): string {
  const proto = origin.protocol === "https:" ? "wss:" : "ws:";
  return `${proto}//${origin.host}/api/remote.mux?unitId=${encodeURIComponent(unitId)}`;
}
