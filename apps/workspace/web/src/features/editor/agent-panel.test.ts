import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  AGENT_PANEL_STORAGE_KEY,
  Q3_FILL_SCREENSHOT_ALT,
  agentErrorMessage,
  agentExamplePrompt,
  agentMuxUrl,
  agentScreenshotCard,
  canUndoAgentTurn,
  consumeAgentTurnResponse,
  defaultAgentPanelOpen,
  explainSelectionFromRange,
  explainSelectionPrompt,
  gatewayCacheStatus,
  isCachedExplainPrompt,
  readActiveRangeA1,
  readAgentMuxFrame,
  readAgentPanelOpen,
  readJsonBody,
  shouldPostAgentTurn,
  shouldShowLiveAgentTurn,
  suggestionChipsForUnitType,
  truncateGatewayLogId,
  writeAgentPanelOpen,
} from "./agent-panel";

const editorDir = dirname(fileURLToPath(import.meta.url));
const webSrc = join(editorDir, "../..");

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
      "",
      "Set D4 to 180",
    ]);
    expect(suggestionChipsForUnitType("sheet").map((chip) => chip.id)).toEqual([
      "fill-q3",
      "explain-q3",
      "explain-selection",
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

function facadeWorkbook(a1: string | null) {
  return {
    getActiveRange: () =>
      a1 == null
        ? null
        : {
            getA1Notation: () => a1,
          },
  };
}

describe("Explain selection chip", () => {
  it("lists an Explain selection chip on sheet and base units", () => {
    for (const unitType of ["sheet", "base"] as const) {
      const chips = suggestionChipsForUnitType(unitType);
      const chip = chips.find((item) => item.id === "explain-selection");
      expect(chip).toMatchObject({
        id: "explain-selection",
        labelKey: "agentChipExplainSelection",
      });
      const canned = chips.find((item) => item.id === "explain-q3");
      expect(canned?.prompt).toBe("Explain the Q3 forecast in one sentence");
    }
    expect(
      suggestionChipsForUnitType("doc").some(
        (item) => item.id === "explain-selection"
      )
    ).toBe(false);
  });

  it("posts Explain ${range} in one sentence for the Facade A1 range", () => {
    expect(explainSelectionPrompt("E2:E4")).toBe(
      "Explain E2:E4 in one sentence"
    );
    expect(explainSelectionFromRange("B2")).toEqual({
      action: "turn",
      prompt: "Explain B2 in one sentence",
    });
    expect(
      readActiveRangeA1({
        getActiveWorkbook: () => facadeWorkbook("E2:E4"),
      })
    ).toBe("E2:E4");
    const result = explainSelectionFromRange(
      readActiveRangeA1({
        getActiveWorkbook: () => facadeWorkbook("E2:E4"),
      })
    );
    expect(result).toEqual({
      action: "turn",
      prompt: "Explain E2:E4 in one sentence",
    });
    expect(
      isCachedExplainPrompt(result.action === "turn" ? result.prompt : "")
    ).toBe(false);
    expect(
      isCachedExplainPrompt("Explain the Q3 forecast in one sentence")
    ).toBe(true);
  });

  it("toasts selectARange and does not post a turn when the selection is empty", () => {
    expect(explainSelectionFromRange(null)).toEqual({
      action: "toast",
      toastKey: "selectARange",
    });
    expect(explainSelectionFromRange("")).toEqual({
      action: "toast",
      toastKey: "selectARange",
    });
    expect(explainSelectionFromRange("   ")).toEqual({
      action: "toast",
      toastKey: "selectARange",
    });
    expect(
      readActiveRangeA1({
        getActiveWorkbook: () => facadeWorkbook(null),
      })
    ).toBeNull();
    expect(
      explainSelectionFromRange(
        readActiveRangeA1({
          getActiveWorkbook: () => undefined,
        })
      )
    ).toEqual({
      action: "toast",
      toastKey: "selectARange",
    });
  });
});

describe("Q3 fill Cloudflare screenshot card", () => {
  const PNG_1x1 =
    "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==";

  it("shows an img with the Q3 fill alt from agent.done screenshot payload", async () => {
    expect(Q3_FILL_SCREENSHOT_ALT).toBe("Q3 Forecast after agent fill");
    expect(
      agentScreenshotCard({ mediaType: "image/png", data: PNG_1x1 })
    ).toEqual({
      kind: "image",
      mediaType: "image/png",
      data: PNG_1x1,
      alt: "Q3 Forecast after agent fill",
    });
    const response = new Response(
      [
        'event: agent.token\ndata: {"delta":"Filled E2:E4"}\n\n',
        `event: agent.done\ndata: ${JSON.stringify({
          turnId: "t-fill",
          screenshot: { mediaType: "image/png", data: PNG_1x1 },
        })}\n\n`,
      ].join(""),
      { headers: { "Content-Type": "text/event-stream; charset=utf-8" } }
    );
    const body = await consumeAgentTurnResponse(response);
    expect(agentScreenshotCard(body.screenshot)).toEqual({
      kind: "image",
      mediaType: "image/png",
      data: PNG_1x1,
      alt: "Q3 Forecast after agent fill",
    });
    const src = readFileSync(join(editorDir, "agent-collaborator.tsx"), "utf8");
    expect(src).toMatch(/alt=\{?["']Q3 Forecast after agent fill["']\}?|alt=\{Q3_FILL_SCREENSHOT_ALT\}/);
    expect(src).toMatch(/<img/);
    expect(src).not.toMatch(/iVBORw0KGgo/);
  });

  it("shows screenshotUnavailable when BROWSER fails and never uses a placeholder PNG", () => {
    expect(agentScreenshotCard(null)).toEqual({ kind: "unavailable" });
    expect(agentScreenshotCard({ mediaType: "image/png", data: "" })).toEqual({
      kind: "unavailable",
    });
    expect(agentScreenshotCard(undefined)).toEqual({ kind: "none" });
    const src = readFileSync(join(editorDir, "agent-collaborator.tsx"), "utf8");
    expect(src).toMatch(/screenshotUnavailable/);
    expect(src).toMatch(/agentScreenshotCard/);
    expect(src).not.toMatch(/iVBORw0KGgo/);
    const i18n = readFileSync(join(webSrc, "shared/i18n.tsx"), "utf8");
    expect(i18n).toMatch(/screenshotUnavailable:/);
    expect(i18n).not.toMatch(/screenshotUnavailable:[\s\S]{0,40}iVBORw0KGgo/);
  });
});

describe("Explain selection panel wiring", () => {
  it("clicks Explain selection, toasts empty ranges, and POSTs ad-hoc turns", () => {
    const src = readFileSync(join(editorDir, "agent-collaborator.tsx"), "utf8");
    expect(src).toMatch(/explainSelectionFromRange/);
    expect(src).toMatch(/readActiveRangeA1/);
    expect(src).toMatch(/selectARange/);
    expect(src).toMatch(/toast\.(info|warning)\(\s*t\("selectARange"\)/);
    expect(src).toMatch(/explain-selection/);
    expect(src).toMatch(/submit\(/);
    const i18n = readFileSync(join(webSrc, "shared/i18n.tsx"), "utf8");
    expect(i18n).toMatch(/agentChipExplainSelection:\s*"Explain selection"/);
    expect(i18n).toMatch(/selectARange:/);
    const editor = readFileSync(
      join(editorDir, "collaboration-editor.tsx"),
      "utf8"
    );
    expect(editor).toMatch(/bindExplainSelectionHost/);
  });
});

describe("Undo last Workspace Agent turn", () => {
  it("enables Undo only when the last journal actor is agent_workspace", () => {
    expect(canUndoAgentTurn("agent_workspace")).toBe(true);
    expect(canUndoAgentTurn("user_admin")).toBe(false);
    expect(canUndoAgentTurn("user_jordan")).toBe(false);
    expect(canUndoAgentTurn(undefined)).toBe(false);
    expect(canUndoAgentTurn("")).toBe(false);
  });

  it("wires panel Undo to reverseLast with undoAgentTurn copy", () => {
    const src = readFileSync(join(editorDir, "agent-collaborator.tsx"), "utf8");
    expect(src).toMatch(/undoAgentTurn/);
    expect(src).toMatch(/canUndoAgentTurn/);
    expect(src).toMatch(/\/agents\/.*\/undo/);
    expect(src).toMatch(/reverseLast|method:\s*"POST"/);
    expect(src).toMatch(/disabled=\{[^}]*canUndo/);
    const i18n = readFileSync(join(webSrc, "shared/i18n.tsx"), "utf8");
    const en = i18n.match(
      /"en-US":\s*\{[\s\S]*?undoAgentTurn:\s*"([^"]+)"/
    )?.[1];
    const zh = i18n.match(
      /"zh-CN":\s*\{[\s\S]*?undoAgentTurn:\s*"([^"]+)"/
    )?.[1];
    expect(en).toBe("Undo last agent turn");
    expect(zh).toBeTruthy();
    expect(zh).not.toBe(en);
    const editor = readFileSync(
      join(editorDir, "collaboration-editor.tsx"),
      "utf8"
    );
    expect(editor).not.toMatch(/undoAgentTurn|reverseLast/);
  });
});
