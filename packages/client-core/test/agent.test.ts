import { describe, expect, it } from "vitest";
import { WorkspaceHttp } from "../src/http.js";
import { WorkspaceAgentFeature } from "../src/agent.js";

describe("WorkspaceAgentFeature", () => {
  it("POSTs /agents/:unitId/turns with credentials", async () => {
    const calls: string[] = [];
    const fetcher: typeof fetch = async (input, init) => {
      const url = String(input);
      calls.push(`${init?.method ?? "GET"} ${url}`);
      if (url.endsWith("/agents/skills")) {
        return new Response(JSON.stringify({ skills: [{ id: "sheet", name: "Sheet Facade", source: "univer-sdk-skills", summary: "x" }] }), {
          headers: { "Content-Type": "application/json" },
        });
      }
      return new Response(
        JSON.stringify({
          turnId: "turn_1",
          unitId: "unit_welcome_sheet",
          prompt: "Set A1 to Hello from AI",
          events: [],
          text: "Wrote A1=Hello from AI",
          toolCalls: [],
          rev: 2,
        }),
        { headers: { "Content-Type": "application/json" } },
      );
    };
    const http = new WorkspaceHttp({
      origin: "https://univer-workspace.apisos.workers.dev",
      cookie: "workspace_session=test",
      role: "client",
      fetcher,
    });
    const agent = new WorkspaceAgentFeature(async () => http);
    const skills = await agent.listSkills();
    expect(skills.skills[0]?.id).toBe("sheet");
    const turn = await agent.runTurn("unit_welcome_sheet", "Set A1 to Hello from AI");
    expect(turn.rev).toBe(2);
    expect(calls.some((c) => c.includes("/agents/unit_welcome_sheet/turns"))).toBe(true);
  });
});
