import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");

function readWorkspace(relativePath: string): string {
  return readFileSync(join(root, relativePath), "utf8");
}

function walkFiles(dir: string, acc: string[] = []): string[] {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (
      entry.name === "node_modules" ||
      entry.name === "dist" ||
      entry.name === ".git"
    ) {
      continue;
    }
    const path = join(dir, entry.name);
    if (entry.isDirectory()) walkFiles(path, acc);
    else acc.push(path);
  }
  return acc;
}

function sourceHasPasswordInDom(src: string, password = "password123"): boolean {
  const quoted = password.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return (
    new RegExp(`useState\\((['"\`])${quoted}\\1\\)`).test(src) ||
    new RegExp(`(value|defaultValue)=(['"\`])${quoted}\\2`).test(src) ||
    new RegExp(`(value|defaultValue)=\\{(['"\`])${quoted}\\2\\}`).test(src) ||
    new RegExp(`>\\s*${quoted}\\s*<`).test(src)
  );
}

describe("/demo route and search", () => {
  it("adds a /demo file route that parses as lang play and scene", () => {
    const path = join(root, "web/src/routes/demo.tsx");
    expect(existsSync(path)).toBe(true);
    const src = readWorkspace("web/src/routes/demo.tsx");
    expect(src).toMatch(/createFileRoute\("\/demo"\)/);
    expect(src).toMatch(/parseDemoSearch/);
    expect(src).toMatch(/as=jordan|as:\s*"jordan"|as === "jordan"/);
    expect(src).toMatch(/zh-CN/);
    expect(src).toMatch(/play/);
    expect(src).toMatch(/fill|conflict|review|export/);
  });

  it("lands on the Q3 sheet with play=1 after silent login", () => {
    const src = [
      readWorkspace("web/src/routes/demo.tsx"),
      readWorkspace("web/src/features/demo/demo-login.ts"),
    ].join("\n");
    expect(src).toMatch(/node_welcome_sheet/);
    expect(src).toMatch(/play=1|play:\s*"1"/);
    expect(src).toMatch(/\/api\/auth\/password\/login/);
    expect(src).toMatch(/credentials:\s*"include"/);
  });
});

describe("silent demo login DOM safety", () => {
  it("does not put password123 in demo or login DOM strings", () => {
    const files = [
      "web/src/routes/demo.tsx",
      "web/src/routes/login.tsx",
      "web/src/features/auth/auth-card.tsx",
      "web/src/features/demo/demo-login.ts",
      "web/src/features/demo/demo-stage.tsx",
    ];
    for (const relative of files) {
      const path = join(root, relative);
      if (!existsSync(path)) continue;
      expect(sourceHasPasswordInDom(readWorkspace(relative))).toBe(false);
    }
    expect(readWorkspace("web/src/features/auth/auth-card.tsx")).toMatch(
      /useState\(""\)/
    );
    expect(readWorkspace("web/src/routes/demo.tsx")).not.toMatch(/AuthCard/);
    expect(readWorkspace("web/src/routes/demo.tsx")).not.toMatch(
      /<PasswordInput/
    );
  });

  it("hides Create account on the demo origin", () => {
    const auth = readWorkspace("web/src/features/auth/auth-card.tsx");
    expect(auth).toMatch(/shouldHideCreateAccount/);
    expect(auth).toMatch(/createAccount/);
    expect(auth).toMatch(/hideRegister|hideCreateAccount|shouldHideCreateAccount/);
  });
});

describe("playbook stepper in the workspace header", () => {
  it("uses the v2 playbook storage key and h-9 stepper labels", () => {
    const playbook = readWorkspace("web/src/features/demo/demo-playbook.ts");
    const bar = readWorkspace("web/src/features/demo/demo-playbook-bar.tsx");
    const layout = readWorkspace("web/src/routes/-workspace-layout.tsx");
    expect(playbook).toMatch(/univer-workspace-demo-playbook-v2/);
    expect(bar).toMatch(/h-9/);
    expect(layout).toMatch(/DemoPlaybookBar/);
    const i18n = readWorkspace("web/src/shared/i18n.tsx");
    expect(i18n).toMatch(/playbookOpenJordan:\s*"Open Jordan"/);
    expect(i18n).toMatch(/playbookEditCell:\s*"Edit a cell"/);
    expect(i18n).toMatch(/playbookAskAgentFill:\s*"Ask Agent Fill"/);
    expect(i18n).toMatch(/playbookPresentFollow:\s*"Present\/Follow"/);
    expect(i18n).toMatch(/playbookWorktreeReview:\s*"Worktree Ready\/Compare\/Merge"/);
    expect(i18n).toMatch(/demoBadge:\s*"Demo"/);
  });

  it("advances with j and n only when the playbook is focused", () => {
    const bar = readWorkspace("web/src/features/demo/demo-playbook-bar.tsx");
    expect(bar).toMatch(/["']j["']|key === "j"/);
    expect(bar).toMatch(/["']n["']|key === "n"/);
    expect(bar).toMatch(/tabIndex=\{0\}/);
  });
});

describe("demo scenes and command palette", () => {
  it("wires fill conflict review and export scenes", () => {
    const scenes = readWorkspace("web/src/features/demo/demo-scenes.ts");
    expect(scenes).toMatch(/workspace-demo-scene/);
    expect(scenes).toMatch(/fill/);
    expect(scenes).toMatch(/conflict/);
    expect(scenes).toMatch(/review/);
    expect(scenes).toMatch(/export/);
    expect(scenes).toMatch(/collabSameCell/);
    expect(scenes).toMatch(/as=jordan/);
    expect(scenes).toMatch(/\/worktrees/);
    expect(scenes).toMatch(/export-xlsx|exportXlsx/);
  });

  it("lists the presenter palette items", () => {
    const palette = readWorkspace("web/src/features/demo/demo-palette.ts");
    expect(palette).toMatch(/avery/i);
    expect(palette).toMatch(/jordan/i);
    expect(palette).toMatch(/fill-sum|fillSum|Fill SUM/);
    expect(palette).toMatch(/explain-q3|explainQ3|Explain Q3/);
    expect(palette).toMatch(/inspect-formula|inspectFormula|Inspect formula/);
    expect(palette).toMatch(/present/i);
    expect(palette).toMatch(/follow-agent|followAgent|Follow Agent/);
    expect(palette).toMatch(/what-if|whatIf|What-if/);
    expect(palette).toMatch(/export-xlsx|exportXlsx|Export xlsx/);
    expect(palette).toMatch(/language/i);
    const layout = readWorkspace("web/src/routes/-workspace-layout.tsx");
    expect(layout).toMatch(/DemoCommandPalette/);
  });
});

describe("safe demo reset", () => {
  it("does not add a wipe endpoint", () => {
    const reset = readWorkspace("web/src/features/demo/demo-reset.ts");
    expect(reset).toMatch(/demoResetBlocked/);
    expect(reset).toMatch(/skip-wipe|skipWipe/);
    expect(reset).not.toMatch(/\/api\/demo\/reset/);
    const files = walkFiles(join(root, "web/src")).concat(
      walkFiles(join(root, "test")),
      walkFiles(join(root, "server/src"))
    );
    for (const file of files) {
      if (!/\.(ts|tsx|js|mjs)$/.test(file)) continue;
      if (file.includes("demo-stage.test")) continue;
      const src = readFileSync(file, "utf8");
      expect(src).not.toMatch(/\/api\/demo\/reset/);
    }
  });

  it("does not isolate from presence without an explicit reset attempt", () => {
    const reset = readWorkspace("web/src/features/demo/demo-reset.ts");
    const runtime = readWorkspace("web/src/features/demo/demo-runtime.tsx");
    expect(reset).toMatch(/resolveDemoReset/);
    expect(reset).toMatch(/attempted/);
    expect(reset).toMatch(/action:\s*"noop"/);
    expect(runtime).toMatch(/resetDemo|DEMO_RESET_EVENT|workspace-demo-reset/);
    expect(runtime).toMatch(/attempted:\s*true/);
    const onPresence = runtime.match(
      /const onPresence = [\s\S]*?addEventListener\(DEMO_PRESENCE_EVENT/
    )?.[0];
    expect(onPresence).toBeTruthy();
    expect(onPresence).not.toMatch(/toast\./);
    expect(onPresence).not.toMatch(/isolated:\s*true/);
    expect(onPresence).not.toMatch(/planDemoReset/);
  });
});


describe("i18n keys for the presenter stage", () => {
  it("defines collabSameCell and demoResetBlocked in en-US and zh-CN", () => {
    const src = readWorkspace("web/src/shared/i18n.tsx");
    expect(src).toMatch(/collabSameCell:/);
    expect(src).toMatch(/demoResetBlocked:/);
    const zh = src.match(/"zh-CN":\s*\{[\s\S]*?collabSameCell:\s*"([^"]+)"/);
    const en = src.match(/"en-US":\s*\{[\s\S]*?collabSameCell:\s*"([^"]+)"/);
    expect(zh?.[1]).toBeTruthy();
    expect(en?.[1]).toBeTruthy();
    expect(zh?.[1]).not.toBe(en?.[1]);
    const zhReset = src.match(
      /"zh-CN":\s*\{[\s\S]*?demoResetBlocked:\s*"([^"]+)"/
    );
    const enReset = src.match(
      /"en-US":\s*\{[\s\S]*?demoResetBlocked:\s*"([^"]+)"/
    );
    expect(zhReset?.[1]).toBeTruthy();
    expect(enReset?.[1]).toBeTruthy();
    expect(zhReset?.[1]).not.toBe(enReset?.[1]);
  });
});
