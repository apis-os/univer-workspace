import { describe, expect, it, vi } from "vitest";
import {
  DEMO_PALETTE_ITEM_IDS,
  demoPaletteItems,
  executePaletteItem,
  isPaletteToggleKey,
} from "./demo-palette";

describe("demo command palette", () => {
  it("lists Avery Jordan Fill SUM Explain Q3 Present Follow Agent What-if Export xlsx and language", () => {
    expect([...DEMO_PALETTE_ITEM_IDS]).toEqual([
      "avery",
      "jordan",
      "fill-sum",
      "explain-q3",
      "inspect-formula",
      "present",
      "follow-agent",
      "what-if",
      "export-xlsx",
      "language",
    ]);
    expect(demoPaletteItems().map((item) => item.id)).toEqual([
      ...DEMO_PALETTE_ITEM_IDS,
    ]);
  });

  it("opens on ⌘K and runs presenter actions including What-if", () => {
    expect(isPaletteToggleKey({ key: "k", metaKey: true, ctrlKey: false })).toBe(
      true
    );
    expect(isPaletteToggleKey({ key: "k", metaKey: false, ctrlKey: true })).toBe(
      true
    );
    expect(isPaletteToggleKey({ key: "k", metaKey: false, ctrlKey: false })).toBe(
      false
    );

    const ctx = {
      openAvery: vi.fn(),
      openJordan: vi.fn(),
      runFillSum: vi.fn(),
      runExplainQ3: vi.fn(),
      inspectFormula: vi.fn(),
      present: vi.fn(),
      followAgent: vi.fn(),
      whatIf: vi.fn(),
      exportXlsx: vi.fn(),
      toggleLanguage: vi.fn(),
    };
    executePaletteItem("avery", ctx);
    executePaletteItem("jordan", ctx);
    executePaletteItem("fill-sum", ctx);
    executePaletteItem("explain-q3", ctx);
    executePaletteItem("inspect-formula", ctx);
    executePaletteItem("present", ctx);
    executePaletteItem("follow-agent", ctx);
    executePaletteItem("what-if", ctx);
    executePaletteItem("export-xlsx", ctx);
    executePaletteItem("language", ctx);
    expect(ctx.openAvery).toHaveBeenCalled();
    expect(ctx.openJordan).toHaveBeenCalled();
    expect(ctx.runFillSum).toHaveBeenCalled();
    expect(ctx.runExplainQ3).toHaveBeenCalled();
    expect(ctx.inspectFormula).toHaveBeenCalled();
    expect(ctx.present).toHaveBeenCalled();
    expect(ctx.followAgent).toHaveBeenCalled();
    expect(ctx.whatIf).toHaveBeenCalled();
    expect(ctx.exportXlsx).toHaveBeenCalled();
    expect(ctx.toggleLanguage).toHaveBeenCalled();
  });
});
