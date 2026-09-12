import { useNavigate } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { useI18n } from "../../shared/i18n";
import { toast } from "../../shared/ui";
import { followAgentCommand } from "../editor/follow-agent";
import { DemoCommandPalette } from "./demo-command-palette";
import {
  openDemoPalette,
  type DemoPaletteActions,
} from "./demo-palette";
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
  const { language, setLanguage, t } = useI18n();
  const ranScene = useRef<string>("");
  const presence = useRef<{
    members: readonly DemoPresenceMember[];
    currentUserId: string;
  }>({ members: [], currentUserId: "" });

  const actions: DemoPaletteActions = {
    openAvery: () => {
      window.location.assign("/demo");
    },
    openJordan: () => {
      window.location.assign("/demo?as=jordan");
    },
    runFillSum: () => {
      runWithContext("fill", t, navigate);
    },
    runExplainQ3: () => {
      openAgentPanelFromHeader();
      window.setTimeout(() => focusAgentExplainChip(), 80);
    },
    present: () => {
      const button = Array.from(document.querySelectorAll("button")).find(
        (item) => item.textContent?.trim() === "Present"
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
      });
    },
    exportXlsx: () => undefined,
    toggleLanguage: () => {
      setLanguage(language === "zh-CN" ? "en-US" : "zh-CN");
    },
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
        runWithContext(search.scene as DemoScene, t, navigate);
      }, 120);
    }
  }, [language, navigate, setLanguage, t]);

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

  return <Palette actions={actions} />;
}

function runWithContext(
  scene: DemoScene,
  t: (key: "collabSameCell") => string,
  navigate: ReturnType<typeof useNavigate>
): void {
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
  });
}
