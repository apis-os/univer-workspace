import { describe, expect, it } from "vitest";
import { isCannedExplainPrompt } from "../src/agent-sse.js";
import {
  isKeepPrompt,
  keepCellPrompt,
  KEEP_D3_PROMPT,
} from "../src/conflict-keep.js";

describe("conflict-keep", () => {
  it("defines KEEP_D3_PROMPT mentioning Avery Chen, Jordan Lee, D3, and forbidding writes", () => {
    expect(KEEP_D3_PROMPT).toContain("Avery Chen");
    expect(KEEP_D3_PROMPT).toContain("Jordan Lee");
    expect(KEEP_D3_PROMPT).toContain("D3");
    expect(KEEP_D3_PROMPT).toContain("Do not write cells");
    expect(isCannedExplainPrompt(KEEP_D3_PROMPT)).toBe(false);
    expect(isKeepPrompt(KEEP_D3_PROMPT)).toBe(true);
  });

  it("produces custom cell keep prompt via keepCellPrompt", () => {
    expect(keepCellPrompt("D3")).toBe(KEEP_D3_PROMPT);
    const e4Prompt = keepCellPrompt("E4");
    expect(e4Prompt).toContain("E4");
    expect(e4Prompt).toContain("Do not write cells");
    expect(isKeepPrompt(e4Prompt)).toBe(true);
  });
});
