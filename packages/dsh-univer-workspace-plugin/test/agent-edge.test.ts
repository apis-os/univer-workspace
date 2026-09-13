import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { agentEdgeTurnPath } from "../src/tools/agent-edge.ts";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

describe("univer_agent_turn", () => {
  it("targets POST /agents/:unitId/turns", () => {
    expect(agentEdgeTurnPath("unit_welcome_sheet")).toBe("/agents/unit_welcome_sheet/turns");
  });

  it("does not npm-import client-core", () => {
    const manifest = JSON.parse(readFileSync(join(ROOT, "package.json"), "utf8")) as {
      dependencies?: Record<string, string>;
      devDependencies?: Record<string, string>;
    };
    expect(manifest.dependencies?.["@univerjs/univer-workspace-client-core"]).toBeUndefined();
    expect(manifest.devDependencies?.["@univerjs/univer-workspace-client-core"]).toBeUndefined();
    const src = readFileSync(join(ROOT, "src/tools/agent-edge.ts"), "utf8");
    expect(src).toMatch(/workspaceAuth/);
    expect(src).toMatch(/currentClient\(\)/);
    expect(src).not.toMatch(/@univerjs\/univer-workspace-client-core/);
  });
});
