import { describe, expect, it, vi } from "vitest";
import { createUfCommand } from "../src/features/edge/uf-command.js";
import { WorkspaceHttp } from "@univerjs/univer-workspace-client-core";

describe("CLI uf command", () => {
  it("provides expected help information for uf commands", () => {
    const write = vi.fn();
    const authenticatedHttp = vi.fn(async () => {
      return new WorkspaceHttp({
        origin: "https://workspace.edge.test",
        role: "client",
        cookie: "workspace_session=tok",
      });
    });
    const uf = createUfCommand({ authenticatedHttp, write });
    const help = uf.helpInformation();
    expect(help).toContain("execute");
    expect(help).toContain("inspect");
    expect(help).toContain("screenshot");
    expect(help).toContain("lint");
    expect(help).toContain("print-pdf");
    expect(help).toContain("worktree");

    const execCmd = uf.commands.find((c) => c.name() === "execute")!;
    const execHelp = execCmd.helpInformation();
    expect(execHelp).toContain("-u, --unit");
    expect(execHelp).toContain("-w, --worktree");
    expect(execHelp).toContain("-e <js>");
    expect(execHelp).toContain("--code <js>");
  });

  it("executes code on trunk without daemon", async () => {
    const write = vi.fn();
    const paths: string[] = [];
    const authenticatedHttp = vi.fn(async () => {
      return new WorkspaceHttp({
        origin: "https://workspace.edge.test",
        role: "client",
        cookie: "workspace_session=tok",
        fetcher: async (input, init) => {
          const req = new Request(input, init);
          paths.push(new URL(req.url).pathname);
          return Response.json({ success: true, rev: 5 });
        },
      });
    });
    const uf = createUfCommand({ authenticatedHttp, write });
    await uf.parseAsync(["node", "test", "execute", "-u", "unit_welcome_sheet", "-e", "1 + 1"]);
    expect(paths[0]).toMatch(/\/uf\/[^/]+\/units\/unit_welcome_sheet\/execute/);
    expect(paths[0]).not.toContain("/worktrees/");
    expect(write).toHaveBeenCalled();
  });
});
