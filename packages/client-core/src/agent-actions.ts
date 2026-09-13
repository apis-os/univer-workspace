import { WorkspaceHttp } from "./http.js";
import { workspaceError } from "./errors.js";

export function lastAgentRangeFromTurns(
  items: readonly Record<string, unknown>[],
): string | null {
  for (let i = items.length - 1; i >= 0; i--) {
    const turn = items[i];
    if (!turn || typeof turn !== "object") continue;

    const toolCalls = Array.isArray(turn["toolCalls"])
      ? (turn["toolCalls"] as Record<string, unknown>[])
      : [];
    for (let j = toolCalls.length - 1; j >= 0; j--) {
      const tc = toolCalls[j];
      if (!tc || typeof tc !== "object") continue;

      const res = tc["result"];
      if (res && typeof res === "object") {
        const r = res as Record<string, unknown>;
        if (typeof r["range"] === "string" && r["range"]) return r["range"];
        if (Array.isArray(r["ranges"]) && typeof r["ranges"][0] === "string") return r["ranges"][0];
        if (
          Array.isArray(r["cells"]) &&
          r["cells"][0] &&
          typeof (r["cells"][0] as Record<string, unknown>)["a1"] === "string"
        ) {
          return (r["cells"][0] as Record<string, unknown>)["a1"] as string;
        }
      }

      const args = tc["args"];
      if (args && typeof args === "object") {
        const a = args as Record<string, unknown>;
        if (typeof a["range"] === "string" && a["range"]) return a["range"];
        if (
          Array.isArray(a["cells"]) &&
          a["cells"][0] &&
          typeof (a["cells"][0] as Record<string, unknown>)["a1"] === "string"
        ) {
          return (a["cells"][0] as Record<string, unknown>)["a1"] as string;
        }
      }
    }

    const events = Array.isArray(turn["events"])
      ? (turn["events"] as Record<string, unknown>[])
      : [];
    for (let j = events.length - 1; j >= 0; j--) {
      const ev = events[j];
      if (!ev || typeof ev !== "object") continue;
      const data = ev["data"];
      if (data && typeof data === "object") {
        const d = data as Record<string, unknown>;
        if (typeof d["range"] === "string" && d["range"]) return d["range"];
        if (
          Array.isArray(d["cells"]) &&
          d["cells"][0] &&
          typeof (d["cells"][0] as Record<string, unknown>)["a1"] === "string"
        ) {
          return (d["cells"][0] as Record<string, unknown>)["a1"] as string;
        }
        const res = d["result"];
        if (res && typeof res === "object") {
          const r = res as Record<string, unknown>;
          if (typeof r["range"] === "string" && r["range"]) return r["range"];
          if (
            Array.isArray(r["cells"]) &&
            r["cells"][0] &&
            typeof (r["cells"][0] as Record<string, unknown>)["a1"] === "string"
          ) {
            return (r["cells"][0] as Record<string, unknown>)["a1"] as string;
          }
        }
      }
    }
  }
  return null;
}

export async function undoLastAgentTurn(
  http: WorkspaceHttp,
  unitId: string,
): Promise<{ reversed: boolean; enabled: boolean; actor?: string; unitId?: string }> {
  const response = await http.request(`/agents/${encodeURIComponent(unitId)}/undo`, {
    method: "POST",
  });
  if (response.status === 409) {
    const body = (await response.json().catch(() => ({}))) as Record<string, unknown>;
    return {
      reversed: false,
      enabled: typeof body["enabled"] === "boolean" ? body["enabled"] : false,
      ...(typeof body["actor"] === "string" ? { actor: body["actor"] } : {}),
      unitId,
    };
  }
  if (!response.ok) {
    throw workspaceError(
      `HTTP_${String(response.status)}`,
      `Undo request failed with HTTP ${String(response.status)}`,
      { status: response.status },
    );
  }
  const body = (await response.json()) as Record<string, unknown>;
  return {
    reversed: body["reversed"] === true,
    enabled: body["enabled"] === true,
    ...(typeof body["actor"] === "string" ? { actor: body["actor"] } : {}),
    unitId,
  };
}
