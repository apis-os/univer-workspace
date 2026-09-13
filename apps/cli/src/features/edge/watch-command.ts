import { Command } from "commander";
import {
  formatCliWroteCellsLine,
  subscribeWorktreeFeed,
  type AuthenticatedWorkspaceHttp,
} from "@univerjs/univer-workspace-client-core";
import { executeCommand, type JsonOption } from "../../command.js";

export function createWatchCommand(input: {
  readonly authenticatedHttp: AuthenticatedWorkspaceHttp;
  readonly write: (text: string) => void;
}): Command {
  const watch = new Command("watch")
    .description(
      "Watch live worktree change events and CLI writes on the collaboration feed",
    )
    .option("--json", "write structured JSON events")
    .action(async (options: JsonOption) => {
      await executeCommand(watch, async () => {
        const http = await input.authenticatedHttp();
        const unsubscribe = await subscribeWorktreeFeed(http, (event) => {
          if (options.json) {
            input.write(`${JSON.stringify(event)}\n`);
          } else {
            input.write(`${formatCliWroteCellsLine(event)}\n`);
          }
        });

        // Keep process alive until interrupted
        await new Promise<void>((resolve) => {
          const cleanup = () => {
            try {
              unsubscribe();
            } finally {
              resolve();
            }
          };
          process.once("SIGINT", cleanup);
          process.once("SIGTERM", cleanup);
        });
      });
    });

  return watch;
}
