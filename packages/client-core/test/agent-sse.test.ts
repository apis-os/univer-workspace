import { describe, expect, it } from "vitest";
import {
  adHocExplainPrompt,
  gatewayCacheFromHeaders,
  isCannedExplainPrompt,
  iterateAgentTurnSse,
} from "../src/agent-sse.js";

describe("agent-sse", () => {
  it("treats only the canned Q3 sentence as cached explain", () => {
    expect(isCannedExplainPrompt("Explain the Q3 forecast in one sentence")).toBe(true);
    expect(isCannedExplainPrompt("Explain D3 in one sentence")).toBe(false);
  });

  it("streams agent.token then agent.done", async () => {
    const body =
      'event: agent.token\ndata: {"delta":"Hel"}\n\nevent: agent.done\ndata: {"cache":"MISS"}\n\n';
    const events = [];
    for await (const ev of iterateAgentTurnSse(
      new Response(body, { headers: { "content-type": "text/event-stream" } }),
    )) {
      events.push(ev.type);
    }
    expect(events).toEqual(["agent.token", "agent.done"]);
  });

  it("does not infer HIT from the canned prompt text", () => {
    expect(gatewayCacheFromHeaders(new Headers())).toBeNull();
    expect(gatewayCacheFromHeaders(new Headers({ "cf-aig-cache-status": "HIT" }))).toBe("HIT");
    expect(gatewayCacheFromHeaders(new Headers({ "cf-aig-cache-status": "MISS" }))).toBe("MISS");
  });

  it("formats ad-hoc explain prompt", () => {
    expect(adHocExplainPrompt("E2")).toBe("Explain E2 in one sentence");
  });
});
