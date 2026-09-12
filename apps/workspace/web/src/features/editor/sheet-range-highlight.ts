import type { PresenceRingToken } from "./presence-roster";

export const PRESENCE_TOKEN_RGB: Record<
  PresenceRingToken,
  [number, number, number]
> = {
  "brand-600": [37, 99, 235],
  sheet: [15, 153, 96],
  board: [124, 58, 237],
  slide: [229, 103, 12],
  warning: [217, 119, 6],
  baseunit: [10, 143, 163],
};

export function formatRingColor(
  token: PresenceRingToken,
  alpha = 1
): string {
  const rgb = PRESENCE_TOKEN_RGB[token] ?? [37, 99, 235];
  return `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${alpha})`;
}

export interface SheetRangeHighlightOptions {
  readonly ringToken?: PresenceRingToken;
  readonly fillAlpha?: number;
  readonly strokeAlpha?: number;
  readonly strokeWidth?: number;
  readonly reducedMotion?: boolean;
}

export interface SheetHighlightHandle {
  dispose(): void;
}

export function highlightSheetRanges(
  host: { getActiveWorkbook?: () => unknown } | undefined,
  ranges: readonly string[],
  options?: SheetRangeHighlightOptions
): SheetHighlightHandle {
  const workbook = host?.getActiveWorkbook?.();
  if (!workbook || typeof workbook !== "object") {
    return { dispose() {} };
  }
  const getActiveSheet = (workbook as { getActiveSheet?: () => unknown }).getActiveSheet;
  if (typeof getActiveSheet !== "function") {
    return { dispose() {} };
  }
  const sheet = getActiveSheet.call(workbook);
  if (!sheet || typeof sheet !== "object") {
    return { dispose() {} };
  }
  const getRange = (sheet as { getRange?: (address: string) => unknown }).getRange;
  const highlightRanges = (
    sheet as {
      highlightRanges?: (
        ranges: readonly unknown[],
        style?: Record<string, unknown>
      ) => { dispose?: () => void } | void;
    }
  ).highlightRanges;
  if (typeof getRange !== "function" || typeof highlightRanges !== "function") {
    return { dispose() {} };
  }
  const facadeRanges = ranges.map((a1) => getRange.call(sheet, a1));
  const token = options?.ringToken ?? "brand-600";
  const strokeAlpha = options?.strokeAlpha ?? 0.86;
  const fillAlpha = options?.reducedMotion ? 0.0 : (options?.fillAlpha ?? 0.12);
  const stroke = formatRingColor(token, strokeAlpha);
  const fill = formatRingColor(token, fillAlpha);
  const strokeWidth = options?.strokeWidth ?? 1;

  const result = highlightRanges.call(sheet, facadeRanges, {
    stroke,
    strokeWidth,
    fill,
    widgetSize: 0,
  });

  return {
    dispose() {
      if (result && typeof result.dispose === "function") {
        result.dispose();
      }
    },
  };
}
