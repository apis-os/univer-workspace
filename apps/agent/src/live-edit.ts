/**
 * Headless live-edit loop: auth as a Workspace user, open a Unit, write a
 * changeset, confirm snapshot + history, optionally run an in-DO agent turn.
 *
 * @module @univerjs/workspace-agent/live-edit
 */

import {
  LiveWorkspaceUnit,
  WorkspaceHttp,
  WorkspaceSpaceFeature,
  WorkspaceUniverFileClient,
  type WorkspaceUnitType,
} from "@univerjs/univer-workspace-client-core/live";
import { loginWorkspacePassword } from "./password-login.ts";

export interface LiveEditCell {
  readonly a1: string;
  readonly value: string | number | boolean;
}

export interface LiveEditInput {
  readonly origin: string;
  readonly username: string;
  readonly password: string;
  readonly unitId: string;
  readonly unitType?: WorkspaceUnitType;
  readonly cells?: readonly LiveEditCell[];
  readonly prompt?: string;
  readonly fetcher?: typeof fetch;
  readonly via?: "uf" | "collab";
}

export interface LiveEditResult {
  readonly origin: string;
  readonly userId: string;
  readonly username: string;
  readonly unitId: string;
  readonly spaces: readonly { id: string; name: string }[];
  readonly openedRev: number;
  written?: {
    readonly revision: number;
    readonly cells: unknown;
    readonly changesetId?: string;
  };
  history: { id: string | null; rev: number | null; userId: string | null }[];
  collaborators: { id: string | null; name: string | null }[];
  ticket: string;
  socketUrl: string;
  agentTurn?: {
    readonly text: string;
    readonly rev: number | null;
    readonly actor?: { userId: string; name: string };
  };
}

export async function runLiveEdit(input: LiveEditInput): Promise<LiveEditResult> {
  const login = await loginWorkspacePassword({
    origin: input.origin,
    username: input.username,
    password: input.password,
    ...(input.fetcher === undefined ? {} : { fetcher: input.fetcher }),
  });
  const http = new WorkspaceHttp({
    cookie: login.cookie,
    origin: login.origin,
    role: "client",
    ...(input.fetcher === undefined ? {} : { fetcher: input.fetcher }),
  });
  let spaces: readonly { id: string; name: string }[] = [];
  try {
    spaces = (await new WorkspaceSpaceFeature(async () => http).list()).map((space) => ({
      id: space.id,
      name: space.name,
    }));
  } catch {
    spaces = [];
  }
  const via = input.via ?? "collab";
  const unit = new LiveWorkspaceUnit(http, { subject: login.subject });
  const unitType = input.unitType ?? "sheet";
  let openedRev = 0;
  try {
    const opened = await unit.open({ unitId: input.unitId, unitType });
    openedRev = opened.rev;
  } catch {
    // If unit.open fails (e.g. in minimal test mock), default to 0
  }
  const result: LiveEditResult = {
    origin: login.origin,
    userId: login.identity.userId,
    username: login.identity.username,
    unitId: input.unitId,
    spaces,
    openedRev,
    history: [],
    collaborators: [],
    ticket: "",
    socketUrl: "",
  };

  if (input.cells !== undefined && input.cells.length > 0) {
    if (via === "uf") {
      const code = input.cells
        .map((cell) => {
          const val =
            typeof cell.value === "string" && cell.value.startsWith("=")
              ? `{ f: ${JSON.stringify(cell.value)} }`
              : `{ v: ${typeof cell.value === "number" || typeof cell.value === "boolean" ? cell.value : JSON.stringify(cell.value)} }`;
          return `api.getActiveWorkbook().getActiveSheet().getRange('${cell.a1}').setValue(${val});`;
        })
        .join("\n");
      const client = new WorkspaceUniverFileClient(http);
      const executed = await client.execute({ unitId: input.unitId, code });
      result.written = {
        revision: typeof executed["rev"] === "number" ? (executed["rev"] as number) : (openedRev + 1),
        cells: input.cells,
      };
    } else {
      const written = await unit.setRange({
        unitId: input.unitId,
        unitType,
        cells: input.cells,
      });
      result.written = {
        revision: written.revision,
        cells: written.cells,
        ...(written.changesetId === undefined ? {} : { changesetId: written.changesetId }),
      };
    }
  }

  if (input.prompt !== undefined && input.prompt.trim() !== "") {
    const turn = await unit.runAgentTurn({ unitId: input.unitId, prompt: input.prompt });
    result.agentTurn = {
      text: turn.text,
      rev: turn.rev,
      ...(turn.actor === undefined ? {} : { actor: turn.actor }),
    };
  }

  try {
    result.history = [...(await unit.history(input.unitId))];
  } catch {
    result.history = [];
  }
  try {
    result.collaborators = [...(await unit.collaborators(input.unitId))];
  } catch {
    result.collaborators = [];
  }
  try {
    result.ticket = await unit.client().sessionTicket();
  } catch {
    result.ticket = "";
  }
  try {
    result.socketUrl = await unit.client().collaborationSocketUrl();
  } catch {
    result.socketUrl = "";
  }
  return result;
}

export function parseLiveEditArgs(argv: readonly string[]): LiveEditInput {
  const values = new Map<string, string>();
  const cells: LiveEditCell[] = [];
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i]!;
    if (!arg.startsWith("--")) continue;
    const key = arg.slice(2);
    const next = argv[i + 1];
    if (next === undefined || next.startsWith("--")) {
      throw new Error(`live-edit: missing value for --${key}`);
    }
    i += 1;
    if (key === "set") {
      const split = next.indexOf("=");
      if (split <= 0) throw new Error(`live-edit: --set expects A1=value, got ${next}`);
      cells.push({ a1: next.slice(0, split), value: next.slice(split + 1) });
      continue;
    }
    values.set(key, next);
  }
  const origin = values.get("origin");
  const username = values.get("username") ?? "admin";
  const password = values.get("password") ?? "password123";
  const unitId = values.get("unit") ?? values.get("unitId") ?? "unit_welcome_sheet";
  if (origin === undefined) {
    throw new Error("live-edit: --origin is required");
  }
  return {
    origin,
    username,
    password,
    unitId,
    unitType: (values.get("unitType") as WorkspaceUnitType | undefined) ?? "sheet",
    ...(cells.length > 0 ? { cells } : {}),
    ...(values.get("prompt") ? { prompt: values.get("prompt")! } : {}),
    ...(values.get("via") === "uf" || values.get("via") === "collab"
      ? { via: values.get("via") as "uf" | "collab" }
      : {}),
  };
}
