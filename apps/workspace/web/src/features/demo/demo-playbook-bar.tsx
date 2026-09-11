import { useEffect, useState, type KeyboardEvent } from "react";
import { Badge } from "../../shared/ui";
import { useI18n } from "../../shared/i18n";
import { useMediaQuery } from "../../shared/resizable-sidebar";
import { cn } from "../../shared/utils/cn";
import {
  DEMO_PLAYBOOK_STEPS,
  advancePlaybookStep,
  playbookHeaderMode,
  readPlaybook,
  shouldOfferDemoReset,
  shouldShowPlaybook,
  writePlaybook,
} from "./demo-playbook";
import { requestDemoReset } from "./demo-reset";
import { parseDemoSearch } from "./demo-search";

export function DemoPlaybookBar() {
  const { t } = useI18n();
  const compact = useMediaQuery("(max-width: 720px)");
  const [state, setState] = useState(() => readPlaybook());
  const [play, setPlay] = useState< "1" | undefined >(undefined);

  useEffect(() => {
    const sync = () => {
      const search = parseDemoSearch(
        Object.fromEntries(new URLSearchParams(window.location.search).entries())
      );
      setPlay(search.play);
      const stored = readPlaybook();
      if (search.play === "1" && !stored.enabled) {
        const next = { ...stored, enabled: true };
        writePlaybook(next);
        setState(next);
        return;
      }
      setState(stored);
    };
    sync();
    window.addEventListener("storage", sync);
    window.addEventListener("workspace-demo-playbook", sync);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener("workspace-demo-playbook", sync);
    };
  }, []);

  const enabled = shouldShowPlaybook({
    play,
    storedEnabled: state.enabled,
  });
  const mode = playbookHeaderMode({ compact, enabled });
  if (mode === "hidden") return null;
  if (mode === "badge") {
    return <Badge variant="brand">{t("demoBadge")}</Badge>;
  }

  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key !== "j" && event.key !== "n" && event.key !== "J" && event.key !== "N") {
      return;
    }
    const nextStep = advancePlaybookStep(state.step, event.key, true);
    if (nextStep === state.step) return;
    event.preventDefault();
    const next = { ...state, enabled: true, step: nextStep };
    writePlaybook(next);
    setState(next);
  };

  return (
    <div className="flex min-w-0 items-center gap-1.5">
      <ol
        tabIndex={0}
        aria-label={t("demoPlaybook")}
        onKeyDown={onKeyDown}
        className="flex h-9 min-w-0 items-center gap-1 overflow-x-auto rounded-full border border-border bg-muted/70 px-1.5"
      >
        {DEMO_PLAYBOOK_STEPS.map((step, index) => {
          const current = index === state.step;
          return (
            <li key={step.id} className="flex min-w-0 items-center gap-1">
              {index > 0 ? (
                <span aria-hidden="true" className="text-[11px] text-subtle-foreground">
                  →
                </span>
              ) : null}
              <span
                className={cn(
                  "truncate rounded-full px-2 py-0.5 text-[11px] whitespace-nowrap",
                  current
                    ? "bg-background font-medium text-foreground shadow-xs"
                    : "text-subtle-foreground"
                )}
              >
                {t(step.labelKey)}
              </span>
            </li>
          );
        })}
      </ol>
      {shouldOfferDemoReset({ isolated: state.isolated }) ? (
        <button
          type="button"
          className="h-9 shrink-0 rounded-full border border-border bg-muted/70 px-2.5 text-[11px] text-subtle-foreground hover:text-foreground"
          onClick={() => requestDemoReset()}
        >
          {t("demoReset")}
        </button>
      ) : null}
    </div>
  );
}
