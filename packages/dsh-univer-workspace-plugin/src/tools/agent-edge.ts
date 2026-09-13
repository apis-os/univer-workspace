import { defineTool } from "@deepseek-ai/dsh-tools";
import type { Context } from "@deepseek-ai/cordis";
import type { ContentBlock } from "@deepseek-ai/dsh-llm";
import { registerUniverTool } from "./presentation.ts";
import { UniverError } from "./errors.ts";
import type {} from "../provider/workspace-contract.ts";

export function agentEdgeTurnPath(unitId: string): string {
  return `/agents/${encodeURIComponent(unitId)}/turns`;
}

function text(value: string): ContentBlock[] {
  return [{ type: "text", text: value }];
}

export function registerAgentEdgeTool(ctx: Context): () => void {
  return registerUniverTool(
    ctx,
    defineTool({
      name: "univer_agent_turn",
      description:
        "Run one Workspace Skill turn against a live collaborative unitId on the connected Workspace origin (POST /agents/:unitId/turns). Prefer this on the Cloudflare edge origin. Merge remains a human Worktree step.",
      parameters: {
        unitId: { type: "string", required: true },
        prompt: { type: "string", required: true },
      },
      output: {
        schema: { type: "json" as const },
        render: (_args: unknown, value: unknown): ContentBlock[] => text(JSON.stringify(value ?? {})),
      },
      async execute(args) {
        const client = ctx.get("workspaceAuth")?.currentClient();
        if (!client) {
          throw new UniverError("Workspace session is missing.", "WORKSPACE_AUTH_MISSING");
        }
        const unitId = String(args.unitId);
        const prompt = String(args.prompt);
        const res = await client.request(agentEdgeTurnPath(unitId), {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt }),
        });
        const body = (await res.json()) as {
          text?: string;
          turnId?: string;
          rev?: number | null;
          error?: { message?: string };
        };
        if (!res.ok) {
          throw new UniverError(body.error?.message || "Agent turn failed.", "AGENT_TURN_FAILED");
        }
        return body;
      },
    }),
  );
}
