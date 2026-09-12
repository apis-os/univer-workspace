import { Binary, Database, Globe } from "lucide-react";
import { useEffect, useState, type ComponentType } from "react";
import { useI18n } from "../../shared/i18n";
import { useMediaQuery } from "../../shared/resizable-sidebar";
import { Tooltip } from "../../shared/ui";
import { cn } from "../../shared/utils/cn";
import {
  browserHudStatus,
  edgeHudChips,
  installCombWireWebSocketProbe,
  noteBrowserHealth,
  readEdgeHudState,
  subscribeEdgeHud,
  type EdgeHudChip,
} from "./edge-hud";

const CHIP_ICONS: Record<
  EdgeHudChip["id"],
  ComponentType<{ className?: string }>
> = {
  comb: Binary,
  gateway: Database,
  browser: Globe,
};

installCombWireWebSocketProbe();

export function EdgeStatusStrip() {
  const { t } = useI18n();
  const compact = useMediaQuery("(max-width: 720px)");
  const [state, setState] = useState(readEdgeHudState);

  useEffect(() => subscribeEdgeHud(() => setState(readEdgeHudState())), []);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        const response = await fetch("/healthz", { credentials: "include" });
        const body = (await response.json()) as {
          readonly ai?: unknown;
          readonly browser?: unknown;
        };
        if (!cancelled) noteBrowserHealth(browserHudStatus(body));
      } catch {
        if (!cancelled) noteBrowserHealth("off");
      }
    };
    void load();
    const timer = window.setInterval(() => {
      void load();
    }, 15_000);
    return () => {
      cancelled = true;
      window.clearInterval(timer);
    };
  }, []);

  const chips = edgeHudChips({ ...state, compact });
  return (
    <div
      role="status"
      aria-label={t("edgeHud")}
      className="flex h-9 shrink-0 items-center gap-0.5 rounded-full border border-border bg-muted/70 px-1"
    >
      {chips.map((chip) => {
        const Icon = CHIP_ICONS[chip.id];
        let tooltipContent = chip.ariaLabel;
        if (chip.id === "comb" && state.comb === null) {
          tooltipContent = t("edgeHudCombPending");
        } else if (chip.id === "gateway" && state.gatewayTrace) {
          tooltipContent = `${t("edgeHudGatewayTrace")}: ${chip.ariaLabel}`;
        }
        return (
          <Tooltip key={chip.id} content={tooltipContent}>
            <span
              aria-label={tooltipContent}
              className={cn(
                "inline-flex h-7 items-center gap-1 rounded-full px-1.5 text-[11px] text-subtle-foreground",
                chip.showValue ? "pr-2" : "w-7 justify-center px-0"
              )}
            >
              <Icon className="size-3.5 shrink-0" aria-hidden="true" />
              {chip.showValue ? (
                <span className="font-medium text-foreground">{chip.value}</span>
              ) : null}
            </span>
          </Tooltip>
        );
      })}
    </div>
  );
}
