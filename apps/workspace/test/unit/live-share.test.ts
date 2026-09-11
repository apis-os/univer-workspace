import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");

function readWorkspace(relativePath: string): string {
  return readFileSync(join(root, relativePath), "utf8");
}

describe("Live Share pin and editor registration", () => {
  it("pins @univerjs-pro/live-share to the SDK insiders version", () => {
    const pkg = readWorkspace("package.json");
    expect(pkg).toMatch(
      /"@univerjs-pro\/live-share":\s*"1\.0\.0-insiders\.20260907-70fc579"/
    );
  });

  it("registers Live Share plugin CSS and facade in the collaboration editor", () => {
    const src = readWorkspace("web/src/features/editor/collaboration-editor.tsx");
    expect(src).toMatch(/import "@univerjs-pro\/live-share\/lib\/index\.css"/);
    expect(src).toMatch(/import "@univerjs-pro\/live-share\/facade"/);
    expect(src).toMatch(/UniverLiveSharePlugin/);
    expect(src).toMatch(/plugins:\s*\[[\s\S]*UniverLiveSharePlugin/);
  });

  it("enables collaborative thread comments on the sheet preset", () => {
    const src = readWorkspace("web/src/features/editor/sheet-presets.ts");
    expect(src).toMatch(
      /UniverSheetsThreadCommentPreset\(\{\s*collaboration:\s*true\s*\}/
    );
  });
});

describe("agent edit collaboration wiring", () => {
  it("calls applyWorkspaceAgentEdits with the live collaboration status", () => {
    const src = readWorkspace("web/src/features/editor/collaboration-editor.tsx");
    expect(src).toMatch(/applyWorkspaceAgentEdits\(/);
    expect(src).not.toMatch(
      /applyWorkspaceAgentEdits\(\s*univerAPI,[\s\S]*?\.detail,\s*unitId\s*\)/
    );
    expect(src).toMatch(
      /applyWorkspaceAgentEdits\(\s*univerAPI,[\s\S]*?\.detail,\s*unitId,\s*(?:collaborationStatusRef\.current|collaborationStatus|collaboration\.getCollaborationStatus\(unitId\))/
    );
  });

  it("binds agent edit spotlight to getActiveWorkbook and unbinds on dispose", () => {
    const src = readWorkspace("web/src/features/editor/collaboration-editor.tsx");
    expect(src).toMatch(
      /bindAgentEditSpotlight\(\{\s*getActiveWorkbook:\s*\(\)\s*=>\s*univerAPI\.getActiveWorkbook/
    );
    expect(src).toMatch(/bindAgentEditSpotlight\(undefined\)/);
  });
});

describe("collab conflict toast i18n and hookup", () => {
  it("defines collabConflictToast in en-US and zh-CN", () => {
    const src = readWorkspace("web/src/shared/i18n.tsx");
    expect(src).toMatch(/collabConflictToast:/);
    const zh = src.match(/"zh-CN":\s*\{[\s\S]*?collabConflictToast:\s*"([^"]+)"/);
    const en = src.match(/"en-US":\s*\{[\s\S]*?collabConflictToast:\s*"([^"]+)"/);
    expect(zh?.[1]).toBeTruthy();
    expect(en?.[1]).toBeTruthy();
    expect(zh?.[1]).not.toBe(en?.[1]);
  });

  it("toasts a debounced warning on CollaborationUIEventId.CONFLICT", () => {
    const src = readWorkspace("web/src/features/editor/collaboration-editor.tsx");
    expect(src).toMatch(/CollaborationUIEventId\.CONFLICT/);
    expect(src).toMatch(/toast\.warning/);
    expect(src).toMatch(/collabConflictToast/);
    expect(src).toMatch(/createCollabConflictToaster|COLLAB_CONFLICT_TOAST_DEBOUNCE_MS/);
  });
});

describe("Live Share bar and header status chip", () => {
  it("ships Present Stop Follow controls that hide when Facade methods are missing", () => {
    const barPath = join(root, "web/src/features/editor/live-share-bar.tsx");
    const commandsPath = join(
      root,
      "web/src/features/editor/live-share-commands.ts"
    );
    expect(existsSync(barPath)).toBe(true);
    const src = `${readFileSync(barPath, "utf8")}\n${readFileSync(commandsPath, "utf8")}`;
    expect(src).toMatch(/Present/);
    expect(src).toMatch(/Stop/);
    expect(src).toMatch(/Follow/);
    expect(src).toMatch(/startPresenting/);
    expect(src).toMatch(/stopPresenting/);
    expect(src).toMatch(/startFollowing/);
    expect(src).toMatch(/isLiveShareFacadeAvailable|startPresenting[\s\S]*return null/);
  });

  it("moves the status pill off the canvas into the node header", () => {
    const editor = readWorkspace("web/src/features/editor/collaboration-editor.tsx");
    const route = readWorkspace("web/src/routes/nodes.$nodeId.tsx");
    expect(editor).not.toMatch(/absolute top-3 right-4/);
    expect(route).toMatch(/LiveShareBar/);
    expect(route).toMatch(/CollaborationStatusChip/);
    expect(route).toMatch(/headerActions=/);
    expect(route).toMatch(/spectator=\{!isEditing\}/);
  });
});
