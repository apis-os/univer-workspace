import type { AuthenticatedWorkspaceHttp } from "./http.js";
import { workspaceError } from "./errors.js";
import { iterateAgentTurnSse, type AgentSseEvent } from "./agent-sse.js";
import { lastAgentRangeFromTurns, undoLastAgentTurn } from "./agent-actions.js";

export interface WorkspaceAgentSkill {
  readonly id: string;
  readonly name: string;
  readonly source: string;
  readonly summary: string;
}

export interface WorkspaceAgentTurn {
  readonly turnId: string;
  readonly unitId: string;
  readonly prompt: string;
  readonly text: string;
  readonly events: readonly { type: string; data: Record<string, unknown> }[];
  readonly toolCalls: readonly { tool: string; args: Record<string, unknown>; result?: unknown }[];
  readonly rev: number | null;
}

export class WorkspaceAgentFeature {
  public constructor(private readonly authenticatedHttp: AuthenticatedWorkspaceHttp) {}

  public async listSkills(): Promise<{ readonly skills: readonly WorkspaceAgentSkill[] }> {
    const http = await this.authenticatedHttp();
    const body = await http.json("/agents/skills", { authenticated: false });
    if (!Array.isArray(body["skills"])) {
      throw workspaceError("workspace-invalid-response", "Workspace response is missing skills.");
    }
    return { skills: body["skills"] as WorkspaceAgentSkill[] };
  }

  public async runTurn(unitId: string, prompt: string): Promise<WorkspaceAgentTurn> {
    const http = await this.authenticatedHttp();
    const body = await http.json(`/agents/${encodeURIComponent(unitId)}/turns`, {
      method: "POST",
      body: { prompt },
    });
    if (typeof body["turnId"] !== "string") {
      throw workspaceError("workspace-invalid-response", "Workspace response is missing turnId.");
    }
    return body as unknown as WorkspaceAgentTurn;
  }

  public async *streamTurn(
    unitId: string,
    prompt: string,
  ): AsyncGenerator<AgentSseEvent> {
    const http = await this.authenticatedHttp();
    const response = await http.request(`/agents/${encodeURIComponent(unitId)}/turns`, {
      method: "POST",
      accept: "text/event-stream",
      body: { prompt },
    });
    yield* iterateAgentTurnSse(response);
  }

  public async undo(
    unitId: string,
  ): Promise<{ reversed: boolean; enabled: boolean; actor?: string; unitId?: string }> {
    const http = await this.authenticatedHttp();
    return await undoLastAgentTurn(http, unitId);
  }

  public async undoStatus(
    unitId: string,
  ): Promise<{ enabled: boolean; reversible: boolean; actor: string | null; unitId: string }> {
    const http = await this.authenticatedHttp();
    const body = await http.json(`/agents/${encodeURIComponent(unitId)}/undo`, {
      method: "GET",
    });
    return body as unknown as {
      enabled: boolean;
      reversible: boolean;
      actor: string | null;
      unitId: string;
    };
  }

  public async lastAgentRange(unitId: string): Promise<string | null> {
    const http = await this.authenticatedHttp();
    const body = await http.json(`/agents/${encodeURIComponent(unitId)}/turns`, {
      method: "GET",
    });
    const items = Array.isArray(body["items"])
      ? (body["items"] as Record<string, unknown>[])
      : [];
    return lastAgentRangeFromTurns(items);
  }
}
