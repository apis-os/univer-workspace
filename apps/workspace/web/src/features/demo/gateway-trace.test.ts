import { describe, expect, it } from "vitest";
import {
  gatewayTraceFromDone,
  shortGatewayModel,
  type GatewayTrace,
} from "./gateway-trace";

describe("shortGatewayModel", () => {
  it("maps 70b fast model to 70b-fast", () => {
    expect(shortGatewayModel("@cf/meta/llama-3.3-70b-instruct-fp8-fast")).toBe("70b-fast");
  });

  it("maps 8b model to 8b", () => {
    expect(shortGatewayModel("@cf/meta/llama-3.1-8b-instruct")).toBe("8b");
  });

  it("returns null for unknown model or empty string", () => {
    expect(shortGatewayModel("gpt-4o")).toBeNull();
    expect(shortGatewayModel("")).toBeNull();
  });
});

describe("gatewayTraceFromDone", () => {
  it("extracts Gateway trace fields from agent.done payload", () => {
    const doneData: Record<string, unknown> = {
      model: "@cf/meta/llama-3.3-70b-instruct-fp8-fast",
      cache: "MISS",
      aiGatewayLogId: "aig_abc1234",
      cacheKey: "demo:explain-q3",
      elapsedMs: 245,
    };
    const trace: GatewayTrace = gatewayTraceFromDone(doneData);
    expect(trace).toEqual({
      cache: "MISS",
      model: "70b-fast",
      logId: "aig_abc1234",
      cacheKey: "demo:explain-q3",
      elapsedMs: 245,
    });
  });

  it("returns nulls for missing or invalid metadata", () => {
    const trace = gatewayTraceFromDone({});
    expect(trace).toEqual({
      cache: null,
      model: null,
      logId: null,
      cacheKey: null,
      elapsedMs: null,
    });
  });

  it("falls back to logId field when aiGatewayLogId is absent", () => {
    const trace = gatewayTraceFromDone({
      logId: "aig_fallback",
      cache: "HIT",
    });
    expect(trace.logId).toBe("aig_fallback");
    expect(trace.cache).toBe("HIT");
  });
});
