import { AGENT_PANEL_ID } from "../editor/agent-panel";
import type { DemoScene } from "./demo-search";

export const DEMO_SCENE_EVENT = "workspace-demo-scene";

export interface DemoSceneContext {
  readonly origin: string;
  readonly dispatchScene: (scene: DemoScene) => void;
  readonly openAgentPanel: () => void;
  readonly focusFillChip: () => void;
  readonly copyText: (text: string) => void;
  readonly toast: (key: "collabSameCell") => void;
  readonly navigate: (to: string) => void;
  readonly openPalette: (itemId: "export-xlsx") => void;
}

type FillChipRoot = Pick<Document, "getElementById">;

export function jordanDemoUrl(origin: string): string {
  return `${origin.replace(/\/$/, "")}/demo?as=jordan`;
}

export function dispatchDemoScene(scene: DemoScene): void {
  window.dispatchEvent(
    new CustomEvent(DEMO_SCENE_EVENT, { detail: { scene } })
  );
}

export function focusAgentFillChip(root: FillChipRoot = document): boolean {
  const panel = root.getElementById(AGENT_PANEL_ID);
  if (!panel) return false;
  const chip = Array.from(panel.querySelectorAll("button")).find((button) => {
    const text = button.textContent ?? "";
    return /E2:E4/i.test(text) && /SUM/i.test(text);
  });
  if (!chip) return false;
  chip.focus();
  return true;
}

export function focusAgentExplainChip(root: FillChipRoot = document): boolean {
  const panel = root.getElementById(AGENT_PANEL_ID);
  if (!panel) return false;
  const chip = Array.from(panel.querySelectorAll("button")).find((button) => {
    const text = button.textContent ?? "";
    return /Explain the Q3|一句话解释 Q3/i.test(text);
  });
  if (!chip) return false;
  chip.focus();
  return true;
}

export function openAgentPanelFromHeader(root: Document = document): void {
  const button = root.querySelector<HTMLButtonElement>(
    `button[aria-controls="${AGENT_PANEL_ID}"]`
  );
  if (button && button.getAttribute("aria-expanded") !== "true") {
    button.click();
  }
}

export function runDemoScene(scene: DemoScene, ctx: DemoSceneContext): void {
  ctx.dispatchScene(scene);
  if (scene === "fill") {
    ctx.openAgentPanel();
    ctx.focusFillChip();
    return;
  }
  if (scene === "conflict") {
    ctx.copyText(jordanDemoUrl(ctx.origin));
    ctx.toast("collabSameCell");
    return;
  }
  if (scene === "review") {
    ctx.navigate("/worktrees");
    return;
  }
  ctx.openPalette("export-xlsx");
}
