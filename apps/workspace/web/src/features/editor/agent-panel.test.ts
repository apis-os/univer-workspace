import { describe, expect, it } from "vitest";
import {
  AGENT_PANEL_STORAGE_KEY,
  agentErrorMessage,
  agentExamplePrompt,
  agentMuxUrl,
  consumeAgentTurnResponse,
  defaultAgentPanelOpen,
  gatewayCacheStatus,
  readAgentMuxFrame,
  readAgentPanelOpen,
  readJsonBody,
  shouldPostAgentTurn,
  shouldShowLiveAgentTurn,
  suggestionChipsForUnitType,
  truncateGatewayLogId,
  writeAgentPanelOpen,
} from "./agent-panel";

class MemoryStorage {
  readonly #data = new Map<string, string>();
  getItem(key: string): string | null {
    return this.#data.get(key) ?? null;
  }
  setItem(key: string, value: string): void {
    this.#data.set(key, value);
  }
}

describe("agent panel helpers", () => {
  it("persists the open preference", () => {
    const storage = new MemoryStorage();
    expect(readAgentPanelOpen(true, storage)).toBe(true);
    writeAgentPanelOpen(false, storage);
    expect(storage.getItem(AGENT_PANEL_STORAGE_KEY)).toBe("false");
    expect(readAgentPanelOpen(true, storage)).toBe(false);
  });

  it("defaults the panel open on wide viewports and closed on compact ones", () => {
    expect(defaultAgentPanelOpen({ matches: false })).toBe(true);
    expect(defaultAgentPanelOpen({ matches: true })).toBe(false);
  });

  it("returns unit-type examples and suggestion chips", () => {
    expect(agentExamplePrompt("sheet")).toBe(
      "Fill E2:E4 with SUM of Jul–Sep"
    );
    expect(agentExamplePrompt("doc")).toBe("Append Hello from AI");
    expect(
      suggestionChipsForUnitType("sheet").map((chip) => chip.prompt)
    ).toEqual([
      "Fill E2:E4 with SUM of Jul–Sep",
      "Explain the Q3 forecast in one sentence",
      "Set D4 to 180",
    ]);
    expect(suggestionChipsForUnitType("sheet").map((chip) => chip.id)).toEqual([
      "fill-q3",
      "explain-q3",
      "set-d4",
    ]);
    expect(suggestionChipsForUnitType("slide").map((chip) => chip.id)).toEqual([
      "skills",
      "history",
    ]);
  });

  it("reads an error message from JSON or falls back", () => {
    expect(
      agentErrorMessage({ error: { message: "Prompt is required" } }, "failed")
    ).toBe("Prompt is required");
    expect(agentErrorMessage({}, "failed")).toBe("failed");
  });

  it("parses JSON bodies and falls back for invalid text", async () => {
    await expect(readJsonBody(new Response('{"ok":true}'))).resolves.toEqual({
      ok: true,
    });
    await expect(readJsonBody(new Response("not-json"))).resolves.toEqual({
      error: { message: "not-json" },
    });
  });

  it("forbids spectators from posting turns", () => {
    expect(shouldPostAgentTurn(true)).toBe(false);
    expect(shouldPostAgentTurn(false)).toBe(true);
    expect(shouldPostAgentTurn(undefined)).toBe(true);
  });

  it("falls back to JSON when the turn response is not SSE", async () => {
    const response = new Response(JSON.stringify({ text: "hi", turnId: "t1" }), {
      headers: { "Content-Type": "application/json" },
    });
    await expect(consumeAgentTurnResponse(response)).resolves.toEqual({
      text: "hi",
      turnId: "t1",
    });
  });

  it("lifts aiGatewayLogId and cache flags from JSON agent.done events", async () => {
    const response = new Response(
      JSON.stringify({
        turnId: "t-json",
        text: "ok",
        events: [
          {
            type: "agent.done",
            data: {
              turnId: "t-json",
              aiGatewayLogId: "aig_json_fallback_id",
              skipCache: false,
            },
          },
        ],
      }),
      { headers: { "Content-Type": "application/json" } }
    );
    const body = await consumeAgentTurnResponse(response);
    expect(body.aiGatewayLogId).toBe("aig_json_fallback_id");
    expect(body.skipCache).toBe(false);
    expect(truncateGatewayLogId(String(body.aiGatewayLogId))).toBe(
      "aig_json_fa…"
    );
  });

  it("surfaces JSON agent.error events as failure", async () => {
    const response = new Response(
      JSON.stringify({
        turnId: "t-err",
        text: "",
        events: [
          { type: "agent.error", data: { message: "Prompt is required" } },
        ],
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
    const body = await consumeAgentTurnResponse(response);
    expect(body.error).toEqual({ message: "Prompt is required" });
    expect(agentErrorMessage(body, "failed")).toBe("Prompt is required");
  });

  it("hides the live turn when only agent.error events remain after submit fails", () => {
    expect(
      shouldShowLiveAgentTurn({
        pending: false,
        streamText: "",
        streamEvents: [{ type: "agent.error", data: { message: "Agent is busy" } }],
      })
    ).toBe(false);
    expect(
      shouldShowLiveAgentTurn({
        pending: false,
        streamText: "",
        streamEvents: [],
      })
    ).toBe(false);
    expect(
      shouldShowLiveAgentTurn({
        pending: true,
        streamText: "",
        streamEvents: [],
      })
    ).toBe(true);
    expect(
      shouldShowLiveAgentTurn({
        pending: false,
        streamText: "SUM",
        streamEvents: [],
      })
    ).toBe(true);
    expect(
      shouldShowLiveAgentTurn({
        pending: false,
        streamText: "",
        streamEvents: [
          {
            type: "agent.tool_call_start",
            data: { tool: "univer.sheet.setRange" },
          },
        ],
      })
    ).toBe(true);
  });

  it("surfaces SSE agent.error as failure even when HTTP 200", async () => {
    const response = new Response(
      'event: agent.error\ndata: {"message":"Agent is busy"}\n\n',
      {
        status: 200,
        headers: { "Content-Type": "text/event-stream; charset=utf-8" },
      }
    );
    const body = await consumeAgentTurnResponse(response);
    expect(body.error).toEqual({ message: "Agent is busy" });
    expect(agentErrorMessage(body, "failed")).toBe("Agent is busy");
  });

  it("parses SSE agent.token thinking tool and done as they arrive", async () => {
    const seen: string[] = [];
    const encoder = new TextEncoder();
    let step = 0;
    const stream = new ReadableStream<Uint8Array>(
      {
        pull(controller) {
          if (step === 0) {
            controller.enqueue(
              encoder.encode('event: agent.thinking\ndata: {"delta":"…"}\n\n')
            );
          } else if (step === 1) {
            expect(seen).toEqual(["agent.thinking"]);
            controller.enqueue(
              encoder.encode(
                'event: agent.tool_call_start\ndata: {"tool":"univer.sheet.setRange","args":{"cells":[{"a1":"E2"}]}}\n\n'
              )
            );
          } else if (step === 2) {
            controller.enqueue(
              encoder.encode('event: agent.token\ndata: {"delta":"SUM"}\n\n')
            );
          } else if (step === 3) {
            expect(seen).toEqual([
              "agent.thinking",
              "agent.tool_call_start",
              "agent.token",
            ]);
            controller.enqueue(
              encoder.encode(
                'event: agent.done\ndata: {"turnId":"t2","rev":4,"aiGatewayLogId":"aig_explain_long","skipCache":false}\n\n'
              )
            );
          } else {
            controller.close();
          }
          step += 1;
        },
      },
      { highWaterMark: 0 }
    );
    const response = new Response(stream, {
      headers: { "Content-Type": "text/event-stream; charset=utf-8" },
    });
    const body = await consumeAgentTurnResponse(response, (event) => {
      seen.push(event.type);
    });
    expect(seen).toEqual([
      "agent.thinking",
      "agent.tool_call_start",
      "agent.token",
      "agent.done",
    ]);
    expect(body.text).toBe("SUM");
    expect(body.turnId).toBe("t2");
    expect(body.rev).toBe(4);
    expect(body.aiGatewayLogId).toBe("aig_explain_long");
    expect(body.toolCalls).toEqual([
      {
        tool: "univer.sheet.setRange",
        args: { cells: [{ a1: "E2" }] },
      },
    ]);
  });

  it("treats cached explain as HIT and missing cache flags as MISS", () => {
    expect(gatewayCacheStatus({}, "Set D4 to 180")).toBe("MISS");
    expect(gatewayCacheStatus({ skipCache: false })).toBe("HIT");
    expect(
      gatewayCacheStatus({}, "Explain the Q3 forecast in one sentence")
    ).toBe("HIT");
    expect(gatewayCacheStatus({ skipCache: true })).toBe("MISS");
    expect(gatewayCacheStatus({ cache: "HIT" })).toBe("HIT");
    expect(truncateGatewayLogId("aig_explain_long")).toBe("aig_explain…");
    expect(truncateGatewayLogId(null)).toBe("");
  });

  it("listens to mux channel 2 frames and builds a unit websocket URL", () => {
    expect(
      readAgentMuxFrame(
        JSON.stringify({
          ch: 2,
          type: "agent.token",
          data: { delta: "Hi" },
        })
      )
    ).toEqual({ type: "agent.token", data: { delta: "Hi" } });
    expect(
      readAgentMuxFrame(
        JSON.stringify({ channel: 2, type: "agent.done", data: { rev: 1 } })
      )?.type
    ).toBe("agent.done");
    expect(
      readAgentMuxFrame(JSON.stringify({ ch: 1, type: "agent.token" }))
    ).toBeNull();
    expect(
      agentMuxUrl("unit_welcome_sheet", {
        protocol: "https:",
        host: "univer-workspace.apisos.workers.dev",
      })
    ).toBe(
      "wss://univer-workspace.apisos.workers.dev/api/remote.mux?unitId=unit_welcome_sheet"
    );
  });
});
