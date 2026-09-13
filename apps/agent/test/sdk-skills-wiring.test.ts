import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";

const univerSkill = new URL(
  "../../../packages/dsh-univer-workspace-plugin/skills/univer/SKILL.md",
  import.meta.url,
);
const sheetSkill = new URL(
  "../../../packages/dsh-univer-workspace-plugin/skills/univer-sheet/SKILL.md",
  import.meta.url,
);
const capabilityPatch = new URL(
  "../../../packages/dsh-univer-workspace-plugin/cordis.patch.yml",
  import.meta.url,
);
const agentPatch = new URL("../cordis.patch.yml", import.meta.url);

describe("Workspace Agent univer-sdk-skills wiring", () => {
  it("keeps the capability plugin mounted and ships live collab recipes in the eight Unit skills", async () => {
    expect(await readFile(capabilityPatch, "utf8")).toContain("dsh-univer-workspace-plugin");
    expect(await readFile(agentPatch, "utf8")).toContain("@univerjs/workspace-agent");

    const univer = await readFile(univerSkill, "utf8");
    expect(univer).toContain("loadServerUnit");
    expect(univer).toContain("/universer-api/snapshot");
    expect(univer).toContain("https://univer-workspace.apisos.workers.dev");

    expect(await readFile(sheetSkill, "utf8")).toContain("getRange('A1')");
    expect(await readFile(sheetSkill, "utf8")).toContain("setValues");
  });
});
