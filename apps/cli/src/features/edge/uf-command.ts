import { Command } from "commander";
import {
  DEMO_UNIT_ID,
  DEMO_UNIVER_FILE,
  WorkspaceUniverFileClient,
  narrativeFromInspect,
  type AuthenticatedWorkspaceHttp,
} from "@univerjs/univer-workspace-client-core";
import { executeCommand, present, type JsonOption } from "../../command.js";
import { workspaceError } from "../../errors.js";

interface UfCommonOptions extends JsonOption {
  readonly file?: string;
  readonly unit?: string;
  readonly worktree?: string;
}

interface UfExecuteOptions extends UfCommonOptions {
  readonly code?: string;
  readonly e?: string;
}

interface UfInspectOptions extends UfCommonOptions {
  readonly narrative?: boolean;
  readonly range?: string;
}

interface UfWorktreeCreateOptions extends JsonOption {
  readonly file?: string;
  readonly kind?: string;
  readonly name: string;
}

export function createUfCommand(input: {
  readonly authenticatedHttp: AuthenticatedWorkspaceHttp;
  readonly write: (text: string) => void;
}): Command {
  const uf = new Command("uf").description(
    "Cloudflare /uf office operations: execute, inspect, screenshot, lint, print-pdf, and worktrees",
  );

  uf.command("execute")
    .description("Execute Facade code on Cloudflare /uf without local Chromium")
    .option("-u, --unit <id>", "target Unit ID", DEMO_UNIT_ID)
    .option("-w, --worktree <id>", "target Worktree ID (optional; trunk if omitted)")
    .option("-e <js>", "inline Facade code")
    .option("--code <js>", "inline Facade code")
    .option("--file <path>", "file path for space routing", DEMO_UNIVER_FILE)
    .option("--json", "write structured JSON")
    .action(async (options: UfExecuteOptions) => {
      await executeCommand(uf, async () => {
        const code = options.code ?? options.e;
        if (!code || !code.trim()) {
          throw workspaceError(
            "workspace-argument-invalid",
            "Execute code is required (-e or --code)",
          );
        }
        const http = await input.authenticatedHttp();
        const client = new WorkspaceUniverFileClient(http, options.file ?? DEMO_UNIVER_FILE);
        const unitId = options.unit ?? DEMO_UNIT_ID;
        const result = await client.execute({
          unitId,
          code,
          ...(options.worktree ? { worktreeId: options.worktree } : {}),
        });
        present(
          uf,
          options,
          result,
          `Executed on ${unitId} (rev ${String(result["rev"] ?? "?")})`,
        );
      });
    });

  uf.command("inspect")
    .description("Inspect cell or range values from collaborative snapshot via /uf")
    .option("-u, --unit <id>", "target Unit ID", DEMO_UNIT_ID)
    .option("-r, --range <range>", "range in A1 notation", "A1")
    .option("-n, --narrative", "format as structured cell narrative from precedents")
    .option("-w, --worktree <id>", "target Worktree ID")
    .option("--file <path>", "file path for space routing", DEMO_UNIVER_FILE)
    .option("--json", "write structured JSON")
    .action(async (options: UfInspectOptions) => {
      await executeCommand(uf, async () => {
        const http = await input.authenticatedHttp();
        const client = new WorkspaceUniverFileClient(http, options.file ?? DEMO_UNIVER_FILE);
        const unitId = options.unit ?? DEMO_UNIT_ID;
        const range = options.range ?? "A1";
        const result = await client.inspect({
          unitId,
          range,
          ...(options.worktree ? { worktreeId: options.worktree } : {}),
        });
        if (options.narrative) {
          const narrative = narrativeFromInspect({
            range,
            f: result["f"],
            v: result["v"],
            ...(Array.isArray(result["precedents"])
              ? { precedents: result["precedents"] as string[] }
              : {}),
          });
          if (options.json) {
            present(uf, options, narrative);
          } else {
            input.write(`${narrative.text}\n`);
          }
          return;
        }
        present(uf, options, result);
      });
    });

  uf.command("screenshot")
    .description("Capture screenshot via Cloudflare Browser Rendering on /uf")
    .option("-u, --unit <id>", "target Unit ID", DEMO_UNIT_ID)
    .option("-w, --worktree <id>", "target Worktree ID")
    .option("--file <path>", "file path for space routing", DEMO_UNIVER_FILE)
    .option("--json", "write structured JSON")
    .action(async (options: UfCommonOptions) => {
      await executeCommand(uf, async () => {
        const http = await input.authenticatedHttp();
        const client = new WorkspaceUniverFileClient(http, options.file ?? DEMO_UNIVER_FILE);
        const unitId = options.unit ?? DEMO_UNIT_ID;
        const result = await client.screenshot({
          unitId,
          ...(options.worktree ? { worktreeId: options.worktree } : {}),
        });
        present(uf, options, result);
      });
    });

  uf.command("lint")
    .description("Run layout lint via Browser Rendering on /uf")
    .option("-u, --unit <id>", "target Unit ID", DEMO_UNIT_ID)
    .option("-w, --worktree <id>", "target Worktree ID")
    .option("--file <path>", "file path for space routing", DEMO_UNIVER_FILE)
    .option("--json", "write structured JSON")
    .action(async (options: UfCommonOptions) => {
      await executeCommand(uf, async () => {
        const http = await input.authenticatedHttp();
        const client = new WorkspaceUniverFileClient(http, options.file ?? DEMO_UNIVER_FILE);
        const unitId = options.unit ?? DEMO_UNIT_ID;
        const result = await client.lint({
          unitId,
          ...(options.worktree ? { worktreeId: options.worktree } : {}),
        });
        present(uf, options, result);
      });
    });

  uf.command("print-pdf")
    .description("Print PDF via Cloudflare Browser Rendering on /uf")
    .option("-u, --unit <id>", "target Unit ID", DEMO_UNIT_ID)
    .option("-w, --worktree <id>", "target Worktree ID")
    .option("--file <path>", "file path for space routing", DEMO_UNIVER_FILE)
    .option("--json", "write structured JSON")
    .action(async (options: UfCommonOptions) => {
      await executeCommand(uf, async () => {
        const http = await input.authenticatedHttp();
        const client = new WorkspaceUniverFileClient(http, options.file ?? DEMO_UNIVER_FILE);
        const unitId = options.unit ?? DEMO_UNIT_ID;
        const result = await client.printPdf({
          unitId,
          ...(options.worktree ? { worktreeId: options.worktree } : {}),
        });
        present(uf, options, result);
      });
    });

  const worktree = uf.command("worktree").description("Worktree operations on Cloudflare /uf");

  worktree
    .command("create")
    .description("Create a worktree under /uf space")
    .requiredOption("-n, --name <name>", "worktree name")
    .option("--kind <kind>", "worktree kind", "team")
    .option("--file <path>", "file path for space routing", DEMO_UNIVER_FILE)
    .option("--json", "write structured JSON")
    .action(async (options: UfWorktreeCreateOptions) => {
      await executeCommand(worktree, async () => {
        const http = await input.authenticatedHttp();
        const client = new WorkspaceUniverFileClient(http, options.file ?? DEMO_UNIVER_FILE);
        const result = await client.createWorktree({
          name: options.name,
          kind: options.kind ?? "team",
        });
        present(worktree, options, result);
      });
    });

  worktree
    .command("ready <worktreeId>")
    .description("Mark a worktree ready for review under /uf space")
    .option("--file <path>", "file path for space routing", DEMO_UNIVER_FILE)
    .option("--json", "write structured JSON")
    .action(async (worktreeId: string, options: JsonOption & { file?: string }) => {
      await executeCommand(worktree, async () => {
        const http = await input.authenticatedHttp();
        const client = new WorkspaceUniverFileClient(http, options.file ?? DEMO_UNIVER_FILE);
        const result = await client.readyWorktree(worktreeId);
        present(worktree, options, result);
      });
    });

  return uf;
}
