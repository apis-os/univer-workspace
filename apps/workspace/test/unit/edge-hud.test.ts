import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");

function readWorkspace(relativePath: string): string {
  return readFileSync(join(root, relativePath), "utf8");
}

describe("edge status strip lives in the workspace header", () => {
  it("renders EdgeStatusStrip inside the layout header, not the Univer grid", () => {
    const layout = readWorkspace("web/src/routes/-workspace-layout.tsx");
    expect(layout).toMatch(/EdgeStatusStrip/);
    const header = layout.slice(
      layout.indexOf("<header"),
      layout.indexOf("</header>")
    );
    expect(header).toMatch(/EdgeStatusStrip/);
    const editor = readWorkspace(
      "web/src/features/editor/collaboration-editor.tsx"
    );
    expect(editor).not.toMatch(/EdgeStatusStrip/);
    const sheet = readWorkspace("web/src/features/editor/sheet-editor.tsx");
    expect(sheet).not.toMatch(/EdgeStatusStrip/);
  });

  it("ships compact icons-only HUD helpers and Comb/Gateway/BROWSER chips", () => {
    const hudPath = join(root, "web/src/features/demo/edge-hud.ts");
    const stripPath = join(
      root,
      "web/src/features/demo/edge-status-strip.tsx"
    );
    expect(existsSync(hudPath)).toBe(true);
    expect(existsSync(stripPath)).toBe(true);
    const hud = readWorkspace("web/src/features/demo/edge-hud.ts");
    const strip = readWorkspace("web/src/features/demo/edge-status-strip.tsx");
    expect(hud).toMatch(/protobuf/);
    expect(hud).toMatch(/json/);
    expect(hud).toMatch(/HIT/);
    expect(hud).toMatch(/MISS/);
    expect(hud).toMatch(/compact/);
    expect(strip).toMatch(/\/healthz/);
    expect(strip).toMatch(/EdgeStatusStrip/);
  });

  it("defines cliWroteCells in en-US and zh-CN", () => {
    const src = readWorkspace("web/src/shared/i18n.tsx");
    expect(src).toMatch(/cliWroteCells:/);
    const zh = src.match(/"zh-CN":\s*\{[\s\S]*?cliWroteCells:\s*"([^"]+)"/);
    const en = src.match(/"en-US":\s*\{[\s\S]*?cliWroteCells:\s*"([^"]+)"/);
    expect(en?.[1]).toBe("CLI wrote cells");
    expect(zh?.[1]).toBeTruthy();
    expect(zh?.[1]).not.toBe(en?.[1]);
  });
});

describe("live CLI write ticker on the worktree change feed", () => {
  it("toasts cliWroteCells from /api/worktree-events", () => {
    const feed = readWorkspace(
      "web/src/features/worktrees/worktree-change-feed.ts"
    );
    expect(feed).toMatch(/cliWroteCells/);
    expect(feed).toMatch(/toast\.(info|success|message)/);
    expect(feed).toMatch(/cliWroteCells/);
  });

  it("does not steal the formula inspector", () => {
    const layout = readWorkspace("web/src/routes/-workspace-layout.tsx");
    expect(layout).not.toMatch(/Inspect formula|formula inspector|precedents/i);
  });
});
