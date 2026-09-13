import { Command } from "commander";
import type { AuthenticatedWorkspaceHttp } from "@univerjs/univer-workspace-client-core";
import { createUfCommand } from "./uf-command.js";
import { createAgentCommand } from "./agent-command.js";
import { createWatchCommand } from "./watch-command.js";

export function registerEdgeCommands(
  program: Command,
  input: {
    readonly authenticatedHttp: AuthenticatedWorkspaceHttp;
    readonly write: (text: string) => void;
  },
): void {
  program.addCommand(createUfCommand(input));
  program.addCommand(createAgentCommand(input));
  program.addCommand(createWatchCommand(input));
}
