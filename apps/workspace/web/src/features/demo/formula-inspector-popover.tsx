import { useI18n } from "../../shared/i18n";
import { formatRingColor } from "../editor/sheet-range-highlight";
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
      {payload.provenance && payload.provenance.length > 0 ? (
        <div className="mt-3 border-t border-border pt-2">
          <p className="mb-1.5 text-xs font-medium text-subtle-foreground">
            {t("formulaProvenance")}
          </p>
          <table className="w-full font-mono text-xs tabular-nums">
            <thead>
              <tr className="border-b border-border/50 text-left text-subtle-foreground">
                <th className="py-0.5 pr-2 font-normal">Cell</th>
                <th className="py-0.5 px-2 font-normal">v</th>
                <th className="py-0.5 pl-2 font-normal">{t("formulaLastWriter")}</th>
              </tr>
            </thead>
            <tbody>
              {payload.provenance.map((item) => (
                <tr key={item.a1} className="border-b border-border/20 last:border-0">
                  <td className="py-1 pr-2 font-medium">{item.a1}</td>
                  <td className="py-1 px-2">{item.v == null ? "—" : String(item.v)}</td>
                  <td className="py-1 pl-2">
                    <span className="inline-flex items-center gap-1.5">
                      <span
                        className="size-2 shrink-0 rounded-full"
                        style={{ backgroundColor: formatRingColor(item.ringToken, 1) }}
                        aria-hidden
                      />
                      <span>{item.name}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
}
