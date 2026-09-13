/**
 * Canned vs ad-hoc explain prompt routing and SSE turn iteration.
 */

export const CANNED_EXPLAIN_PROMPT = "Explain the Q3 forecast in one sentence";

/**
 * Checks if a prompt matches the cached explain prompt.
 * Must match isCachedExplainPrompt in univer-agent.ts.
 */
export function isCannedExplainPrompt(prompt: string): boolean {
  const text = prompt.trim();
  if (/^explain the q3 forecast(?: in one sentence)?$/i.test(text)) return true;
  if (/^explain the full[- ]?sheet(?: in one sentence)?$/i.test(text)) return true;
  return false;
}

export function adHocExplainPrompt(range: string): string {
  return `Explain ${range} in one sentence`;
}

export interface AgentSseEvent {
  readonly type: string;
  readonly data: Record<string, unknown>;
}

export async function* iterateAgentTurnSse(
  response: Response,
): AsyncGenerator<AgentSseEvent> {
  if (!response.body) return;
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const blocks = buffer.split(/\r?\n\r?\n/);
      buffer = blocks.pop() ?? "";
      for (const block of blocks) {
        const trimmed = block.trim();
        if (!trimmed) continue;
        const parsed = parseSseBlock(trimmed);
        if (parsed) yield parsed;
      }
    }
    buffer += decoder.decode();
    if (buffer.trim()) {
      const parsed = parseSseBlock(buffer.trim());
      if (parsed) yield parsed;
    }
  } finally {
    reader.releaseLock();
  }
}

function parseSseBlock(block: string): AgentSseEvent | null {
  const lines = block.split(/\r?\n/);
  let eventType = "message";
  let dataStr = "";
  for (const line of lines) {
    if (line.startsWith("event:")) {
      eventType = line.slice("event:".length).trim();
    } else if (line.startsWith("data:")) {
      const part = line.slice("data:".length).trim();
      dataStr = dataStr ? `${dataStr}\n${part}` : part;
    }
  }
  if (!dataStr && eventType === "message") return null;
  let data: Record<string, unknown> = {};
  try {
    const parsed = JSON.parse(dataStr);
    if (typeof parsed === "object" && parsed !== null && !Array.isArray(parsed)) {
      data = parsed as Record<string, unknown>;
    } else {
      data = { value: parsed };
    }
  } catch {
    data = { raw: dataStr };
  }
  return { type: eventType, data };
}

export function gatewayCacheFromHeaders(headers: Headers): "HIT" | "MISS" | null {
  const val = headers.get("cf-aig-cache-status")?.trim().toUpperCase();
  if (val === "HIT" || val === "MISS") return val;
  return null;
}
