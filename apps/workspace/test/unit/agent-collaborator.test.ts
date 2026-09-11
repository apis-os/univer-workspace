import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");

describe("in-editor AI collaboration UI", () => {
  it("posts turns to /agents/:unitId/turns and dispatches workspace-agent-edited", () => {
    const src = readFileSync(
      join(root, "web/src/features/editor/agent-collaborator.tsx"),
      "utf8",
    );
    expect(src).toMatch(/`\/agents\/\$\{encodeURIComponent\(unitId\)\}\/turns`/);
    expect(src).toMatch(/workspace-agent-edited/);
    expect(src).toMatch(/credentials: "include"/);
  });

  it("loads collaborative units with offline editing disabled", () => {
    const src = readFileSync(
      join(root, "web/src/features/editor/collaboration-editor.tsx"),
      "utf8",
    );
    expect(src).toMatch(/enableOfflineEditing:\s*false/);
    expect(src).not.toMatch(/enableOfflineEditing:\s*true/);
    expect(src).toMatch(/snapshotServerUrl:\s*"\/universer-api\/snapshot"/);
    expect(src).toMatch(/collabSubmitChangesetUrl:\s*"\/universer-api\/comb"/);
  });

  it("exposes English and Chinese Agent copy", () => {
    const src = readFileSync(join(root, "web/src/shared/i18n.tsx"), "utf8");
    expect(src).toMatch(/openAgent:/);
    expect(src).toMatch(/agentExample: 'Try: Set A1 to Hello from AI'/);
    expect(src).toMatch(/agentExample: "试试：Set A1 to Hello from AI"/);
    expect(src).toMatch(/agentGateway:/);
    expect(src).toMatch(/agentCacheHit:/);
    expect(src).toMatch(/agentCacheMiss:/);
    expect(src).toMatch(/agentChangedCells:/);
    expect(src).toMatch(/agentReplay:/);
    expect(src).toMatch(/agentChipFillQ3:/);
    expect(src).toMatch(/agentIntro:/);
  });

  it("streams SSE turns with live tokens Gateway footer and presence", () => {
    const src = readFileSync(
      join(root, "web/src/features/editor/agent-collaborator.tsx"),
      "utf8",
    );
    expect(src).toMatch(/Accept:\s*"text\/event-stream"/);
    expect(src).toMatch(/aria-live="polite"/);
    expect(src).toMatch(/aria-busy/);
    expect(src).toMatch(/workspace-agent-presence/);
    expect(src).toMatch(/Q3 Forecast/);
    expect(src).toMatch(/agentGateway/);
    expect(src).not.toMatch(/\{unitType\} · \{unitId\}/);
  });

  it("never posts turns or mux agent.prompt as a spectator", () => {
    const src = readFileSync(
      join(root, "web/src/features/editor/agent-collaborator.tsx"),
      "utf8",
    );
    expect(src).toMatch(/spectator\?:/);
    expect(src).toMatch(/shouldPostAgentTurn\(spectator\)/);
    expect(src).toMatch(/agentMuxUrl\(unitId\)/);
    expect(src).not.toMatch(/type:\s*"agent\.prompt"/);
    expect(src).not.toMatch(/"agent\.prompt"/);
  });
});

describe("node route spectator wiring", () => {
  it("passes spectator={!isEditing} into AgentCollaborator", () => {
    const src = readFileSync(
      join(root, "web/src/routes/nodes.$nodeId.tsx"),
      "utf8",
    );
    expect(src).toMatch(/spectator=\{!isEditing\}/);
  });
});
