import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { AGENT_SKILLS, agentSystemPrompt, getAgentSkill, listAgentSkills } from "../src/plugins/univer-skills.ts";

describe("univer-sdk-skills catalog", () => {
  test("exposes the five operational Skills with locked sources", () => {
    assert.deepEqual(listAgentSkills().map((s) => s.id), ["core", "sheet", "doc", "collaboration", "worktree"]);
    assert.equal(getAgentSkill("sheet")?.source, "univer-sdk-skills");
    assert.equal(getAgentSkill("doc")?.source, "univer-sdk-skills");
    assert.equal(getAgentSkill("collaboration")?.source, "univer-sdk-skills");
    assert.equal(getAgentSkill("core")?.source, "univer-workspace-cli");
    assert.equal(getAgentSkill("worktree")?.source, "univer-workspace-cli");
  });

  test("sheet skill quotes Facade setValues / getRange recipes", () => {
    const body = getAgentSkill("sheet")!.body;
    assert.match(body, /getRange\('A1'\)/);
    assert.match(body, /setValues/);
    assert.match(body, /\{ v \}/);
    assert.match(body, /\{ f: '=SUM\(A1:A3\)' \}/);
  });

  test("collaboration skill forbids createUnit on a server unitId", () => {
    const body = getAgentSkill("collaboration")!.body;
    assert.match(body, /loadServerUnit/);
    assert.match(body, /\/universer-api\/snapshot/);
    assert.match(body, /\/universer-api\/comb/);
    assert.match(body, /\/universer-api\/history\//);
    assert.doesNotMatch(body, /createUnit\(.*same unitId/i);
  });

  test("system prompt binds the current unitId and Worktree merge rule", () => {
    const prompt = agentSystemPrompt("unit_welcome_sheet");
    assert.match(prompt, /unit_welcome_sheet/);
    assert.match(prompt, /Never create a blank local unit/);
    assert.match(prompt, /loadServerUnit/);
    assert.match(prompt, /Merge is a human review decision/);
    assert.equal(AGENT_SKILLS.length, 5);
  });
});
