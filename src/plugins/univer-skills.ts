/**
 * Version-matched operational Skills mapped from:
 * - https://github.com/dream-num/univer-sdk-skills (Facade, Pro collab, Node backend)
 * - https://github.com/dream-num/skills univer-workspace-cli (remote Worktree lifecycle)
 *
 * This catalog is the edge agent's source of truth. Do not invent a different collab model.
 */

export interface AgentSkill {
  id: string;
  name: string;
  source: "univer-sdk-skills" | "univer-workspace-cli" | "univer-workspace";
  summary: string;
  body: string;
}

export const AGENT_SKILLS: AgentSkill[] = [
  {
    id: "core",
    name: "Workspace core",
    source: "univer-workspace-cli",
    summary: "Remote Spaces, Units, and Worktree review lifecycle.",
    body: `Operate remote Workspace files. A Space contains Nodes; a Univer Resource has resourceId; a Unit is editable content identified by unitId after it is staged in a Worktree.

Start every new task in a new Worktree. Continue a known Worktree only for rework on that same task. Command success is not correctness evidence — read the stored snapshot back.

Workflow:
1. Discover the Space Node / Resource.
2. Create a Worktree (user-scoped unless the task is a Team Space task).
3. Add the existing Resource (source=trunk) or create a Worktree-local Unit.
4. Author through Facade-style tools (setRange / getRange / appendText).
5. Read back the snapshot.
6. Mark the Worktree ready and return a review URL. Merge is a human decision.`
  },
  {
    id: "sheet",
    name: "Sheet Facade",
    source: "univer-sdk-skills",
    summary: "univer-integrate recipes for ranges, values, and formulas.",
    body: `Prefer batch range writes over cell-by-cell loops. Recipes from univer-sdk-skills univer-integrate:

const sheet = univerAPI.getActiveWorkbook()!.getActiveSheet()!;
sheet.getRange('A1').setValue({ v: 'Hello' });
sheet.getRange('A1:B2').setValues([[{ v: 1 }, { v: 2 }], [{ v: 3 }, { v: 4 }]]);
sheet.getRange('C1').setValue({ f: '=SUM(A1:A3)' });

- Address cells with A1 notation (A1, B2, AA10).
- Literal values use { v } ; formulas use { f: '=SUM(A1:A3)' }.
- After writing, getRange on the same addresses to verify stored values.
- Collaboration units are loaded from the server snapshot — never create a blank local unit with the same unitId.`
  },
  {
    id: "doc",
    name: "Doc authoring",
    source: "univer-sdk-skills",
    summary: "Document body text on collaborative Units.",
    body: `Document snapshots store body text in originalMeta. Append or replace plain text, then read it back with univer.doc.getText. Do not invent pagination or styles unless the user asked. On a collaborative Doc, load the server unit first; do not createUnit with the server unitId.`
  },
  {
    id: "collaboration",
    name: "Pro collaboration",
    source: "univer-sdk-skills",
    summary: "loadServerUnit, flush, history, and Universer endpoints.",
    body: `Univer Pro collaboration (univer-sdk-skills univer-pro-integrate/collaboration-guide) loads persisted server units through /universer-api/snapshot, submits OT changesets through /universer-api/comb, and streams presence over /universer-api/comb/connect.

loadServerUnit(unitId) / collaboration.loadSheetAsync(unitId) is the only way to open a shared unit. Never createUnit with that unitId. History lives at /universer-api/history/:unitId/list|creators|cs.

enableOfflineEditing must be false for live AI collaboration so agent changesets appear immediately.

Agents must apply mutations as changesets (revision + mutations) so humans see them in the live editor and in history.`
  },
  {
    id: "worktree",
    name: "Worktree review",
    source: "univer-workspace-cli",
    summary: "Isolate agent edits until a person merges.",
    body: `create Worktree → agent edits and verifies an isolated draft → Ready → human reviews → Merge or Reopen → trunk.

Draft unit IDs are isolated copies. Merge copies the draft snapshot onto the trunk unitId. Discard never rolls back an already merged trunk.`
  }
];

export function listAgentSkills(): Array<Pick<AgentSkill, "id" | "name" | "source" | "summary">> {
  return AGENT_SKILLS.map(({ id, name, source, summary }) => ({ id, name, source, summary }));
}

export function getAgentSkill(id: string): AgentSkill | undefined {
  const key = id.trim().toLowerCase();
  return AGENT_SKILLS.find((skill) => skill.id === key);
}

export function agentSystemPrompt(unitId: string): string {
  return `You are the Univer Workspace agent. You operate on remote collaborative Units using Workspace Worktrees and the Univer Facade.

Current unitId: ${unitId}

Rules from univer-sdk-skills and univer-workspace-cli:
- Never create a blank local unit with the same id as a server unit. Use loadServerUnit.
- Prefer range writes (setRange) over one-off loops.
- Read back stored values after editing.
- Isolate new tasks in a Worktree. Merge is a human review decision.
- Use tools instead of claiming you edited the document.

Available skills: ${AGENT_SKILLS.map((skill) => skill.id).join(", ")}.`;
}
