import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");

function readWorkspace(relativePath: string): string {
  return readFileSync(join(root, relativePath), "utf8");
}

describe("collaborator avatar rings, ghost Jordan, and bot pulse", () => {
  it("does not return null for an empty roster", () => {
    const src = readWorkspace("web/src/features/editor/collaborator-avatars.tsx");
    expect(src).not.toMatch(/if\s*\(\s*users\.length\s*===\s*0\s*\)\s*return\s*null/);
    expect(src).toMatch(/composePresenceRoster/);
    expect(src).toMatch(/Waiting for Jordan|waitingForJordan/);
  });

  it("paints rings from the six tokens and a dashed ghost Jordan", () => {
    const src = [
      readWorkspace("web/src/features/editor/collaborator-avatars.tsx"),
      readWorkspace("web/src/features/editor/presence-roster.ts"),
    ].join("\n");
    for (const token of [
      "brand-600",
      "sheet",
      "board",
      "slide",
      "warning",
      "baseunit",
    ]) {
      expect(src).toContain(token);
    }
    expect(src).toMatch(/border-dashed|outline-dashed/);
    expect(src).not.toMatch(/ring-dashed/);
    expect(src).toMatch(/ring-brand-600/);
    expect(src).toMatch(/ring-sheet/);
    for (const token of [
      "brand-600",
      "sheet",
      "board",
      "slide",
      "warning",
      "baseunit",
    ]) {
      expect(src).toMatch(new RegExp(`(?:border|outline)-${token}\\b`));
    }
  });

  it("renders ghost Jordan as an empty waiting circle without Avatar", () => {
    const src = readWorkspace("web/src/features/editor/collaborator-avatars.tsx");
    expect(src).toMatch(/waitingForJordan/);
    const ghostBranch = src.match(
      /seat\.kind\s*===\s*"ghost"\s*\?[\s\S]+?(?:isBotCollaborator|<Avatar)/
    );
    expect(ghostBranch?.[0]).toBeTruthy();
    expect(ghostBranch?.[0]).not.toMatch(/<Avatar/);
    expect(ghostBranch?.[0]).not.toMatch(/name=\{seat\.name\}/);
  });

  it("does not clip token rings with overflow-hidden on the ring wrapper", () => {
    const src = readWorkspace("web/src/features/editor/collaborator-avatars.tsx");
    const cnBlocks = [...src.matchAll(/className=\{cn\(([\s\S]*?)\)\}/g)].map(
      (match) => match[1]
    );
    const ringed = cnBlocks.filter(
      (block) => /\bring-2\b/.test(block) && /ring-offset-/.test(block)
    );
    expect(ringed.length).toBeGreaterThan(0);
    for (const block of ringed) {
      expect(block).not.toMatch(/\boverflow-hidden\b/);
    }
  });

  it("rounds the inner bot chrome without clipping token rings", () => {
    const src = readWorkspace("web/src/features/editor/collaborator-avatars.tsx");
    const botChrome = src.match(
      /isBotCollaborator\([^)]+\)\s*\?\s*\(\s*<span className="([^"]+)"[\s\S]*?<Bot\b/
    );
    expect(botChrome?.[1]).toMatch(/\bbg-muted\b/);
    expect(botChrome?.[1]).toMatch(/\brounded-full\b/);

    const cnBlocks = [...src.matchAll(/className=\{cn\(([\s\S]*?)\)\}/g)].map(
      (match) => match[1]
    );
    const ringed = cnBlocks.filter(
      (block) => /\bring-2\b/.test(block) && /ring-offset-/.test(block)
    );
    expect(ringed.length).toBeGreaterThan(0);
    for (const block of ringed) {
      expect(block).not.toMatch(/\boverflow-hidden\b/);
    }
  });

  it("uses a bot icon for agent_workspace and agent: ids and pulses on thinking", () => {
    const src = readWorkspace("web/src/features/editor/collaborator-avatars.tsx");
    expect(src).toMatch(/from "lucide-react"/);
    expect(src).toMatch(/\bBot\b/);
    expect(src).toMatch(/workspace-agent-presence/);
    expect(src).toMatch(/animate-pulse/);
    expect(src).toMatch(/isBotCollaborator|agent_workspace/);
  });
});

describe("presence legend popover", () => {
  it("opens a popover from the avatar stack, not a HUD on the grid", () => {
    const legendPath = join(root, "web/src/features/editor/presence-legend.tsx");
    expect(existsSync(legendPath)).toBe(true);
    const legend = readWorkspace("web/src/features/editor/presence-legend.tsx");
    const avatars = readWorkspace("web/src/features/editor/collaborator-avatars.tsx");
    expect(legend).toMatch(/@base-ui\/react\/popover/);
    expect(legend).toMatch(/Popover/);
    expect(avatars).toMatch(/PresenceLegend/);
    expect(legend).not.toMatch(/univer-editor-container/);
    expect(legend).not.toMatch(/fixed\s+(bottom|top)-/);
    expect(avatars).not.toMatch(/absolute\s+(bottom|top)-\d/);
    expect(legend).not.toMatch(/ring-dashed/);
    expect(legend).toMatch(/item\.ringClassName/);
  });
});

describe("History names and collaborationExample copy", () => {
  it("maps History authors and does not display Administrator", () => {
    const names = readWorkspace("web/src/features/editor/history-names.ts");
    const editor = readWorkspace("web/src/features/editor/collaboration-editor.tsx");
    expect(names).toMatch(/user_admin:\s*"Avery Chen"/);
    expect(names).toMatch(/user_jordan:\s*"Jordan Lee"/);
    expect(names).toMatch(/agent_workspace:\s*"Workspace Agent"/);
    expect(editor).toMatch(/historyDisplayName/);
    expect(editor).toMatch(/applyHistoryNameUsers/);
    expect(editor).toMatch(/overlayHistoryAdministrator/);
    expect(editor).not.toMatch(/name:\s*"Administrator"/);
    expect(names).toMatch(/Administrator/);
  });

  it("sets collaborationExample to Humans and AI, live / 人与 AI 实时协作", () => {
    const src = readWorkspace("web/src/shared/i18n.tsx");
    const zh = src.match(
      /"zh-CN":\s*\{[\s\S]*?collaborationExample:\s*"([^"]+)"/
    );
    const en = src.match(
      /"en-US":\s*\{[\s\S]*?collaborationExample:\s*"([^"]+)"/
    );
    expect(en?.[1]).toBe("Humans and AI, live");
    expect(zh?.[1]).toBe("人与 AI 实时协作");
    expect(src).toMatch(/waitingForJordan:\s*"Waiting for Jordan"/);
  });
});
