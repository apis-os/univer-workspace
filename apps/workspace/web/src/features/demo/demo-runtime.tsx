import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "../../shared/i18n";
import { toast } from "../../shared/ui";
import { followAgentCommand } from "../editor/follow-agent";
import { BLAME_HEAT_EVENT } from "../editor/ot-blame-heat";
import { worktreesQueryKey } from "../worktrees";
import { DemoCommandPalette } from "./demo-command-palette";
import {
  openDemoPalette,
  type DemoPaletteActions,
} from "./demo-palette";
import { runAgentDraftFill } from "./demo-agent-draft";
import { loadHistoryVsLive } from "./history-vs-live";
import { writeDemoComparison } from "./demo-comparison-session";
import { FormulaInspectPopover } from "./formula-inspector-popover";
import {
  FORMULA_INSPECT_RANGE,
  FORMULA_INSPECT_UNIT_ID,
  isAltInspectClick,
  readInspectorRangeA1,
  runFormulaInspect,
  type FormulaInspectPayload,
} from "./formula-inspector";
import {
  DEMO_PRESENCE_EVENT,
  DEMO_RESET_EVENT,
  resolveDemoReset,
  type DemoPresenceMember,
} from "./demo-reset";
import { readPlaybook, writePlaybook } from "./demo-playbook";
import { parseDemoSearch, type DemoScene } from "./demo-search";
import {
  dispatchDemoScene,
  focusAgentExplainChip,
  focusAgentFillChip,
  openAgentPanelFromHeader,
  runDemoScene,
} from "./demo-scenes";
import { runWhatIfWorktree } from "./demo-what-if";

export function DemoRuntime({
  palette: Palette = DemoCommandPalette,
}: {
  readonly palette?: typeof DemoCommandPalette;
} = {}) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { language, setLanguage, t } = useI18n();
  const ranScene = useRef<string>("");
  const presence = useRef<{
    members: readonly DemoPresenceMember[];
    currentUserId: string;
  }>({ members: [], currentUserId: "" });
  const [inspectOpen, setInspectOpen] = useState(false);
  const [inspectPayload, setInspectPayload] =
    useState<FormulaInspectPayload | null>(null);

  const openFormulaInspect = (range: string) => {
    void runFormulaInspect(range).then((payload) => {
      setInspectPayload(payload);
      setInspectOpen(true);
    });
  };

  const actions: DemoPaletteActions = {
    openAvery: () => {
      window.location.assign("/demo");
    },
    openJordan: () => {
      window.location.assign("/demo?as=jordan");
    },
    runFillSum: () => {
      runWithContext("fill");
    },
    runExplainQ3: () => {
      openAgentPanelFromHeader();
      window.setTimeout(() => focusAgentExplainChip(), 80);
    },
    inspectFormula: () => {
      openFormulaInspect(FORMULA_INSPECT_RANGE);
    },
    present: () => {
      const presentLabel = t("liveSharePresent");
      const button = Array.from(document.querySelectorAll("button")).find(
        (item) => {
          const text = item.textContent?.trim();
          return text === presentLabel || text === "Present";
        }
      );
      button?.click();
    },
    followAgent: () => {
      followAgentCommand();
    },
    whatIf: () => {
      void runWhatIfWorktree({
        fetch: globalThis.fetch.bind(globalThis),
        toast: (kind, key) => {
          if (kind === "busy") toast.info(t(key));
          else toast.error(t(key));
        },
        invalidateWorktrees: () =>
          queryClient.invalidateQueries({ queryKey: worktreesQueryKey }),
        openComparison: ({ worktreeId, unitId }) => {
          void navigate({
            to: "/worktrees",
            search: {
              worktree: worktreeId,
              unit: unitId,
              view: "comparison",
              demo: "what-if",
            },
          });
        },
      });
    },
    draftFill: () => {
      void runAgentDraftFill({
        fetch: globalThis.fetch.bind(globalThis),
        toast: (kind, key) => {
          if (kind === "busy") toast.info(t(key as any));
          else toast.error(t(key as any));
        },
        invalidateWorktrees: () =>
          queryClient.invalidateQueries({ queryKey: worktreesQueryKey }),
        openComparison: ({ worktreeId, unitId }) => {
          void navigate({
            to: "/worktrees",
            search: {
              worktree: worktreeId,
              unit: unitId,
              view: "comparison",
            },
          });
        },
        followDraft: (href) => {
          window.location.assign(href);
        },
      });
    },
    historyLive: () => {
      void loadHistoryVsLive({
        unitId: FORMULA_INSPECT_UNIT_ID,
        rev: 1,
        fetch: globalThis.fetch.bind(globalThis),
      })
        .then((comparison) => {
          writeDemoComparison({
            kind: "history",
            worktreeId: "wt_history_vs_live",
            unitId: FORMULA_INSPECT_UNIT_ID,
            comparison,
          });
          void navigate({
            to: "/worktrees",
            search: {
              worktree: "wt_history_vs_live",
              unit: FORMULA_INSPECT_UNIT_ID,
              view: "comparison",
              demo: "history",
            },
          });
        })
        .catch(() => {
          toast.error("Failed to load history comparison");
        });
    },
    blameHeat: () => {
      window.dispatchEvent(new CustomEvent(BLAME_HEAT_EVENT, { detail: {} }));
    },
    exportXlsx: () => undefined,
    toggleLanguage: () => {
      setLanguage(language === "zh-CN" ? "en-US" : "zh-CN");
    },
  };

  const runWithContext = (scene: DemoScene) => {
    runDemoScene(scene, {
      origin: window.location.origin,
      dispatchScene: dispatchDemoScene,
      openAgentPanel: () => openAgentPanelFromHeader(),
      focusFillChip: () => {
        window.setTimeout(() => focusAgentFillChip(), 80);
      },
      copyText: (text) => {
        void navigator.clipboard?.writeText(text);
      },
      toast: (key) => {
        toast.info(t(key));
      },
      navigate: (to) => {
        void navigate({ to });
      },
      openPalette: (itemId) => {
        openDemoPalette(itemId);
      },
      inspectFormula: () => {
        openFormulaInspect(FORMULA_INSPECT_RANGE);
      },
      toggleBlame: () => {
        actions.blameHeat?.();
      },
      runDraftFill: () => {
        actions.draftFill?.();
      },
      openHistoryVsLive: () => {
        actions.historyLive?.();
      },
      followAgent: () => {
        actions.followAgent();
      },
      present: () => {
        actions.present();
      },
    });
  };

  useEffect(() => {
    const search = parseDemoSearch(
      Object.fromEntries(new URLSearchParams(window.location.search).entries())
    );
    if (search.play === "1") {
      const stored = readPlaybook();
      if (!stored.enabled) writePlaybook({ ...stored, enabled: true });
      window.dispatchEvent(new Event("workspace-demo-playbook"));
    }
    if (search.scene && ranScene.current !== search.scene) {
      ranScene.current = search.scene;
      window.setTimeout(() => {
        runWithContext(search.scene as DemoScene);
      }, 120);
    }
  }, [language, navigate, setLanguage, t]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!isAltInspectClick(event)) return;
      openFormulaInspect(readInspectorRangeA1() ?? FORMULA_INSPECT_RANGE);
    };
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    const onPresence = (event: Event) => {
      const detail = (event as CustomEvent<{
        members?: readonly DemoPresenceMember[];
        currentUserId?: string;
      }>).detail;
      presence.current = {
        members: detail?.members ?? [],
        currentUserId: detail?.currentUserId ?? "",
      };
    };
    window.addEventListener(DEMO_PRESENCE_EVENT, onPresence);
    const onReset = () => {
      const stored = readPlaybook();
      const plan = resolveDemoReset({
        attempted: true,
        members: presence.current.members,
        currentUserId: presence.current.currentUserId,
        isolated: stored.isolated === true,
      });
      if (plan.action !== "isolate") return;
      writePlaybook({ ...stored, isolated: true });
      toast.warning(t(plan.toastKey));
      window.dispatchEvent(new Event("workspace-demo-playbook"));
    };
    window.addEventListener(DEMO_RESET_EVENT, onReset);
    return () => {
      window.removeEventListener(DEMO_PRESENCE_EVENT, onPresence);
      window.removeEventListener(DEMO_RESET_EVENT, onReset);
    };
  }, [t]);

  return (
    <>
      <Palette actions={actions} />
      <FormulaInspectPopover
        open={inspectOpen}
        payload={inspectPayload}
        onClose={() => setInspectOpen(false)}
      />
    </>
  );
}

