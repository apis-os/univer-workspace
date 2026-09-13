import { Command } from "commander";
import {
  CANNED_EXPLAIN_PROMPT,
  DEMO_UNIT_ID,
  DEMO_UNIVER_FILE,
  WorkspaceUniverFileClient,
  adHocExplainPrompt,
  gatewayCacheFromHeaders,
  iterateAgentTurnSse,
  keepCellPrompt,
  lastAgentRangeFromTurns,
  narrativeExplainPrompt,
  narrativeFromInspect,
  runCliAgentDraftFill,
  undoLastAgentTurn,
  type AuthenticatedWorkspaceHttp,
} from "@univerjs/univer-workspace-client-core";
import { executeCommand, present, type JsonOption } from "../../command.js";
import { workspaceError } from "../../errors.js";

interface AgentTurnOptions extends JsonOption {
  readonly prompt?: string;
  readonly range?: string;
  readonly unit?: string;
}

interface AgentCommonOptions extends JsonOption {
  readonly unit?: string;
}

export function createAgentCommand(input: {
  readonly authenticatedHttp: AuthenticatedWorkspaceHttp;
  readonly write: (text: string) => void;
}): Command {
  const agent = new Command("agent").description(
    "Workspace Agent operations: streaming turns, undo, and follow",
  );

  agent
    .command("turn")
    .description("Run a streaming Workspace Agent turn over SSE with AI Gateway caching")
    .option("-u, --unit <id>", "target Unit ID", DEMO_UNIT_ID)
    .option("-p, --prompt <prompt>", "prompt text for the agent")
    .option("-r, --range <range>", "target cell range for ad-hoc explain prompt")
    .option("--json", "write structured JSON")
    .action(async (options: AgentTurnOptions) => {
      await executeCommand(agent, async () => {
        const unitId = options.unit ?? DEMO_UNIT_ID;
        const prompt =
          options.prompt && options.prompt.trim() !== ""
            ? options.prompt
            : options.range && options.range.trim() !== ""
              ? adHocExplainPrompt(options.range.trim())
              : CANNED_EXPLAIN_PROMPT;

        const http = await input.authenticatedHttp();

        if (options.json) {
          const result = await http.json(
            `/agents/${encodeURIComponent(unitId)}/turns`,
            {
              method: "POST",
              body: { prompt },
            },
          );
          present(agent, options, result);
          return;
        }

        const response = await http.request(
          `/agents/${encodeURIComponent(unitId)}/turns`,
          {
            method: "POST",
            accept: "text/event-stream",
            body: { prompt },
          },
        );

        const headerCache = gatewayCacheFromHeaders(response.headers);
        let doneCache: "HIT" | "MISS" | null = null;
        let doneModel: string | null = null;
        let doneLogId: string | null = null;

        for await (const event of iterateAgentTurnSse(response)) {
          if (event.type === "agent.token") {
            const delta =
              typeof event.data["delta"] === "string"
                ? event.data["delta"]
                : typeof event.data["text"] === "string"
                  ? event.data["text"]
                  : "";
            if (delta) input.write(delta);
          } else if (event.type === "agent.done") {
            const c =
              typeof event.data["cache"] === "string"
                ? event.data["cache"].toUpperCase()
                : null;
            if (c === "HIT" || c === "MISS") doneCache = c as "HIT" | "MISS";
            if (typeof event.data["model"] === "string") doneModel = event.data["model"];
            if (typeof event.data["aiGatewayLogId"] === "string") {
              doneLogId = event.data["aiGatewayLogId"];
            } else if (typeof event.data["logId"] === "string") {
              doneLogId = event.data["logId"];
            }
          }
        }

        const effectiveCache = doneCache ?? headerCache;
        const cacheText =
          effectiveCache === "HIT" || effectiveCache === "MISS" ? effectiveCache : "—";
        input.write(`\ncache: ${cacheText}`);
        if (doneModel) input.write(` · ${doneModel}`);
        if (doneLogId) input.write(` · ${doneLogId.slice(0, 12)}…`);
        input.write("\n");
      });
    });

  agent
    .command("undo")
    .description("Reverse the last Workspace Agent turn on a unit")
    .option("-u, --unit <id>", "target Unit ID", DEMO_UNIT_ID)
    .option("--json", "write structured JSON")
    .action(async (options: AgentCommonOptions) => {
      await executeCommand(agent, async () => {
        const unitId = options.unit ?? DEMO_UNIT_ID;
        const http = await input.authenticatedHttp();
        const result = await undoLastAgentTurn(http, unitId);
        if (!result.reversed) {
          throw workspaceError(
            "workspace.command.failed",
            `Cannot undo turn on ${unitId}: last actor was ${result.actor ?? "not Workspace Agent"}`,
          );
        }
        present(
          agent,
          options,
          result,
          `Reversed last Workspace Agent turn on ${unitId}`,
        );
      });
    });

  agent
    .command("follow")
    .description("Print the last Workspace Agent active range")
    .option("-u, --unit <id>", "target Unit ID", DEMO_UNIT_ID)
    .option("--json", "write structured JSON")
    .action(async (options: AgentCommonOptions) => {
      await executeCommand(agent, async () => {
        const unitId = options.unit ?? DEMO_UNIT_ID;
        const http = await input.authenticatedHttp();
        const body = await http.json(
          `/agents/${encodeURIComponent(unitId)}/turns`,
          { method: "GET" },
        );
        const items = Array.isArray(body["items"])
          ? (body["items"] as Record<string, unknown>[])
          : [];
        const range = lastAgentRangeFromTurns(items);
        if (options.json) {
          present(agent, options, {
            unitId,
            range,
            actor: "Workspace Agent",
          });
        } else {
          input.write(range ? `Workspace Agent · ${range}\n` : "—\n");
        }
      });
    });

  agent
    .command("draft-fill")
    .description("Start Agent draft Fill on a worktree via /uf")
    .option("-u, --unit <id>", "target Unit ID", DEMO_UNIT_ID)
    .option("--json", "write structured JSON")
    .action(async (options: AgentCommonOptions) => {
      await executeCommand(agent, async () => {
        const unitId = options.unit ?? DEMO_UNIT_ID;
        const http = await input.authenticatedHttp();
        const result = await runCliAgentDraftFill(http, unitId);
        present(
          agent,
          options,
          result,
          `Started ${result.worktreeName} (${result.worktreeId}) -> ${result.followHref}`,
        );
      });
    });

  agent
    .command("narrative")
    .description("Generate structured cell narrative from /uf inspect and optional streaming AI explain")
    .option("-u, --unit <id>", "target Unit ID", DEMO_UNIT_ID)
    .option("-r, --range <range>", "target cell range (A1)", "E2")
    .option("--ai", "run an ad-hoc streaming agent turn explaining the narrative")
    .option("--file <path>", "file path for space routing", DEMO_UNIVER_FILE)
    .option("--json", "write structured JSON")
    .action(async (options: AgentCommonOptions & { range?: string; ai?: boolean; file?: string }) => {
      await executeCommand(agent, async () => {
        const unitId = options.unit ?? DEMO_UNIT_ID;
        const range = options.range ?? "E2";
        const http = await input.authenticatedHttp();
        const client = new WorkspaceUniverFileClient(http, options.file ?? DEMO_UNIVER_FILE);
        const inspectResult = await client.inspect({ unitId, range });
        const narrative = narrativeFromInspect({
          range,
          f: inspectResult["f"],
          v: inspectResult["v"],
          ...(Array.isArray(inspectResult["precedents"])
            ? { precedents: inspectResult["precedents"] as string[] }
            : {}),
        });

        if (!options.ai) {
          if (options.json) {
            present(agent, options, narrative);
          } else {
            input.write(`${narrative.text}\n`);
          }
          return;
        }

        const prompt = narrativeExplainPrompt(narrative);
        if (options.json) {
          const result = await http.json(`/agents/${encodeURIComponent(unitId)}/turns`, {
            method: "POST",
            body: { prompt },
          });
          present(agent, options, { narrative, ai: result });
          return;
        }

        input.write(`${narrative.text}\n`);
        const response = await http.request(`/agents/${encodeURIComponent(unitId)}/turns`, {
          method: "POST",
          accept: "text/event-stream",
          body: { prompt },
        });

        const headerCache = gatewayCacheFromHeaders(response.headers);
        let doneCache: "HIT" | "MISS" | null = null;
        let doneModel: string | null = null;
        let doneLogId: string | null = null;

        for await (const event of iterateAgentTurnSse(response)) {
          if (event.type === "agent.token") {
            const delta =
              typeof event.data["delta"] === "string"
                ? event.data["delta"]
                : typeof event.data["text"] === "string"
                  ? event.data["text"]
                  : "";
            if (delta) input.write(delta);
          } else if (event.type === "agent.done") {
            const c =
              typeof event.data["cache"] === "string"
                ? event.data["cache"].toUpperCase()
                : null;
            if (c === "HIT" || c === "MISS") doneCache = c as "HIT" | "MISS";
            if (typeof event.data["model"] === "string") doneModel = event.data["model"];
            if (typeof event.data["aiGatewayLogId"] === "string") {
              doneLogId = event.data["aiGatewayLogId"];
            } else if (typeof event.data["logId"] === "string") {
              doneLogId = event.data["logId"];
            }
          }
        }

        const effectiveCache = doneCache ?? headerCache;
        const cacheText =
          effectiveCache === "HIT" || effectiveCache === "MISS" ? effectiveCache : "—";
        input.write(`\ncache: ${cacheText}`);
        if (doneModel) input.write(` · ${doneModel}`);
        if (doneLogId) input.write(` · ${doneLogId.slice(0, 12)}…`);
        input.write("\n");
      });
    });

  agent
    .command("keep")
    .description("Ask the Workspace Agent who keeps a conflicted cell without modifying values")
    .option("-u, --unit <id>", "target Unit ID", DEMO_UNIT_ID)
    .option("-c, --cell <cell>", "conflicted cell A1", "D3")
    .option("--json", "write structured JSON")
    .action(async (options: AgentCommonOptions & { cell?: string }) => {
      await executeCommand(agent, async () => {
        const unitId = options.unit ?? DEMO_UNIT_ID;
        const cell = options.cell ?? "D3";
        const prompt = keepCellPrompt(cell);
        const http = await input.authenticatedHttp();

        if (options.json) {
          const result = await http.json(`/agents/${encodeURIComponent(unitId)}/turns`, {
            method: "POST",
            body: { prompt },
          });
          present(agent, options, result);
          return;
        }

        const response = await http.request(`/agents/${encodeURIComponent(unitId)}/turns`, {
          method: "POST",
          accept: "text/event-stream",
          body: { prompt },
        });

        const headerCache = gatewayCacheFromHeaders(response.headers);
        let doneCache: "HIT" | "MISS" | null = null;
        let doneModel: string | null = null;
        let doneLogId: string | null = null;

        for await (const event of iterateAgentTurnSse(response)) {
          if (event.type === "agent.token") {
            const delta =
              typeof event.data["delta"] === "string"
                ? event.data["delta"]
                : typeof event.data["text"] === "string"
                  ? event.data["text"]
                  : "";
            if (delta) input.write(delta);
          } else if (event.type === "agent.done") {
            const c =
              typeof event.data["cache"] === "string"
                ? event.data["cache"].toUpperCase()
                : null;
            if (c === "HIT" || c === "MISS") doneCache = c as "HIT" | "MISS";
            if (typeof event.data["model"] === "string") doneModel = event.data["model"];
            if (typeof event.data["aiGatewayLogId"] === "string") {
              doneLogId = event.data["aiGatewayLogId"];
            } else if (typeof event.data["logId"] === "string") {
              doneLogId = event.data["logId"];
            }
          }
        }

        const effectiveCache = doneCache ?? headerCache;
        const cacheText =
          effectiveCache === "HIT" || effectiveCache === "MISS" ? effectiveCache : "—";
        input.write(`\ncache: ${cacheText}`);
        if (doneModel) input.write(` · ${doneModel}`);
        if (doneLogId) input.write(` · ${doneLogId.slice(0, 12)}…`);
        input.write("\n");
      });
    });


  return agent;
}



