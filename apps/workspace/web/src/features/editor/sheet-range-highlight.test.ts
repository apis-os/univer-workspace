import { describe, expect, it } from "vitest";
import {
  PRESENCE_TOKEN_RGB,
  formatRingColor,
  highlightSheetRanges,
} from "./sheet-range-highlight";

describe("sheet-range-highlight helper", () => {
  it("formats stroke and fill colors from presence ring tokens", () => {
    expect(PRESENCE_TOKEN_RGB["brand-600"]).toEqual([37, 99, 235]);
    expect(formatRingColor("brand-600", 0.86)).toBe("rgba(37,99,235,0.86)");
    expect(formatRingColor("sheet", 0.12)).toBe("rgba(15,153,96,0.12)");
  });

  it("applies highlightRanges with 1px stroke at 0.86 alpha and 0.12 fill", () => {
    let passedStyle: Record<string, unknown> | undefined;
    const sheet = {
      getRange: (a1: string) => `range_${a1}`,
      highlightRanges: (ranges: readonly unknown[], style?: Record<string, unknown>) => {
        passedStyle = style;
        return { dispose() {} };
      },
    };
    const host = {
      getActiveWorkbook: () => ({
        getActiveSheet: () => sheet,
      }),
    };

    const handle = highlightSheetRanges(host, ["D3"], {
      ringToken: "sheet",
      fillAlpha: 0.12,
      strokeAlpha: 0.86,
      strokeWidth: 1,
      reducedMotion: false,
    });

    expect(passedStyle).toEqual({
      stroke: "rgba(15,153,96,0.86)",
      strokeWidth: 1,
      fill: "rgba(15,153,96,0.12)",
      widgetSize: 0,
    });
    expect(typeof handle.dispose).toBe("function");
  });

  it("uses 0.00 alpha fill when reducedMotion is true", () => {
    let passedStyle: Record<string, unknown> | undefined;
    const sheet = {
      getRange: (a1: string) => `range_${a1}`,
      highlightRanges: (_ranges: readonly unknown[], style?: Record<string, unknown>) => {
        passedStyle = style;
        return { dispose() {} };
      },
    };
    const host = {
      getActiveWorkbook: () => ({
        getActiveSheet: () => sheet,
      }),
    };

    highlightSheetRanges(host, ["D3"], {
      ringToken: "brand-600",
      fillAlpha: 0.12,
      strokeAlpha: 0.86,
      reducedMotion: true,
    });

    expect(passedStyle?.fill).toBe("rgba(37,99,235,0)");
  });
});
