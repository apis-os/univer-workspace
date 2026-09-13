import { describe, expect, it } from "vitest";
import { isCannedExplainPrompt } from "../src/agent-sse.js";
import {
  expandA1List,
  narrativeExplainPrompt,
  narrativeFromInspect,
} from "../src/cell-narrative.js";

describe("cell-narrative", () => {
  it("narrates E2 SUM with expanded precedents", () => {
    const n = narrativeFromInspect({
      range: "E2",
      f: "=SUM(B2:D2)",
      v: 600,
      precedents: ["B2:D2"],
    });
    expect(n.precedents).toEqual(["B2", "C2", "D2"]);
    expect(n.text).toMatch(/E2/);
    expect(n.text).toContain("=SUM(B2:D2) → 600");
    expect(n.text).toContain("Precedents: B2, C2, D2");
    expect(isCannedExplainPrompt(narrativeExplainPrompt(n))).toBe(false);
  });

  it("extracts and expands precedents from formula when precedents omitted", () => {
    const n = narrativeFromInspect({
      range: "E3",
      f: "=SUM(B3:D3)",
      v: 228,
    });
    expect(n.precedents).toEqual(["B3", "C3", "D3"]);
    expect(narrativeExplainPrompt(n)).toBe(
      "Explain E3 (=SUM(B3:D3), precedents B3, C3, D3) in one sentence"
    );
  });

  it("handles cells with value only", () => {
    const n = narrativeFromInspect({
      range: "D4",
      v: 180,
    });
    expect(n.precedents).toEqual([]);
    expect(n.text).toBe("D4 is 180.");
    expect(narrativeExplainPrompt(n)).toBe("Explain D4 (180) in one sentence");
  });

  it("expands single cells and multi-column ranges in expandA1List", () => {
    expect(expandA1List(["A1", "B2:C3"])).toEqual([
      "A1",
      "B2",
      "C2",
      "B3",
      "C3",
    ]);
  });
});
