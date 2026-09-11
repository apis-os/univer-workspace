import type { MessageKey } from "../../shared/i18n";

export const DEMO_PALETTE_ITEM_IDS = [
  "avery",
  "jordan",
  "fill-sum",
  "explain-q3",
  "present",
  "follow-agent",
  "what-if",
  "export-xlsx",
  "language",
] as const;

export type DemoPaletteItemId = (typeof DEMO_PALETTE_ITEM_IDS)[number];

export interface DemoPaletteItem {
  readonly id: DemoPaletteItemId;
  readonly labelKey: MessageKey;
}

const PALETTE_LABELS = {
  avery: "demoPaletteAvery",
  jordan: "demoPaletteJordan",
  "fill-sum": "demoPaletteFillSum",
  "explain-q3": "demoPaletteExplainQ3",
  present: "demoPalettePresent",
  "follow-agent": "demoPaletteFollowAgent",
  "what-if": "demoPaletteWhatIf",
  "export-xlsx": "demoPaletteExportXlsx",
  language: "demoPaletteLanguage",
} as const satisfies Record<DemoPaletteItemId, MessageKey>;

export function demoPaletteItems(): readonly DemoPaletteItem[] {
  return DEMO_PALETTE_ITEM_IDS.map((id) => ({
    id,
    labelKey: PALETTE_LABELS[id],
  }));
}

export function isPaletteToggleKey(event: {
  readonly key: string;
  readonly metaKey: boolean;
  readonly ctrlKey: boolean;
}): boolean {
  return event.key.toLowerCase() === "k" && (event.metaKey || event.ctrlKey);
}

export interface DemoPaletteActions {
  readonly openAvery: () => void;
  readonly openJordan: () => void;
  readonly runFillSum: () => void;
  readonly runExplainQ3: () => void;
  readonly present: () => void;
  readonly followAgent: () => void;
  readonly whatIf: () => void;
  readonly exportXlsx: () => void;
  readonly toggleLanguage: () => void;
}

export function executePaletteItem(
  id: DemoPaletteItemId,
  ctx: DemoPaletteActions
): void {
  if (id === "avery") {
    ctx.openAvery();
    return;
  }
  if (id === "jordan") {
    ctx.openJordan();
    return;
  }
  if (id === "fill-sum") {
    ctx.runFillSum();
    return;
  }
  if (id === "explain-q3") {
    ctx.runExplainQ3();
    return;
  }
  if (id === "present") {
    ctx.present();
    return;
  }
  if (id === "follow-agent") {
    ctx.followAgent();
    return;
  }
  if (id === "what-if") {
    ctx.whatIf();
    return;
  }
  if (id === "export-xlsx") {
    ctx.exportXlsx();
    return;
  }
  ctx.toggleLanguage();
}

type PaletteOpener = (itemId?: DemoPaletteItemId) => void;

let boundPaletteOpener: PaletteOpener | undefined;

export function bindDemoPaletteOpener(opener: PaletteOpener | undefined): void {
  boundPaletteOpener = opener;
}

export function openDemoPalette(itemId?: DemoPaletteItemId): void {
  boundPaletteOpener?.(itemId);
}
