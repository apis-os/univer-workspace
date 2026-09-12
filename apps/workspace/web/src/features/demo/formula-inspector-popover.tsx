import { useI18n } from "../../shared/i18n";
import type { FormulaInspectPayload } from "./formula-inspector";

export function FormulaInspectPopover({
  open,
  payload,
  onClose,
}: {
  readonly open: boolean;
  readonly payload: FormulaInspectPayload | null;
  readonly onClose: () => void;
}) {
  const { t } = useI18n();
  if (!open || payload == null) return null;
  return (
    <div
      role="dialog"
      aria-label={t("demoPaletteInspectFormula")}
      className="fixed right-4 bottom-4 z-50 w-[min(28rem,calc(100vw-2rem))] rounded-lg border border-border bg-background p-3 shadow-pop"
    >
      <div className="mb-2 flex items-center justify-between gap-3">
        <p className="text-sm font-medium">{t("demoPaletteInspectFormula")}</p>
        <button
          type="button"
          className="rounded-md px-1.5 py-0.5 text-xs text-subtle-foreground hover:bg-accent"
          onClick={onClose}
        >
          {t("close")}
        </button>
      </div>
      <dl className="grid gap-1 font-mono text-xs">
        <div className="flex gap-2">
          <dt className="text-subtle-foreground">{t("formulaLabelF")}</dt>
          <dd>{payload.f == null ? "—" : String(payload.f)}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="text-subtle-foreground">{t("formulaLabelV")}</dt>
          <dd>{payload.v == null ? "—" : String(payload.v)}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="text-subtle-foreground">{t("formulaLabelPrecedents")}</dt>
          <dd>{payload.precedents.join(", ")}</dd>
        </div>
      </dl>
    </div>
  );
}
