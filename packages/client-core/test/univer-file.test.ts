import { describe, expect, it } from "vitest";
import {
  DEMO_UNIT_ID,
  SET_E4_CODE,
  SUM_E2_CODE,
  WorkspaceHttp,
  WorkspaceUniverFileClient,
} from "../src/index.js";

describe("WorkspaceUniverFileClient", () => {
  it("execute hits /uf trunk without a daemon worktree", async () => {
    const paths: string[] = [];
    const http = new WorkspaceHttp({
      origin: "https://workspace.edge.test",
      role: "client",
      cookie: "workspace_session=tok",
      fetcher: async (input, init) => {
        const request = new Request(input, init);
        paths.push(new URL(request.url).pathname);
        return Response.json({ success: true, rev: 2 });
      },
    });
    await new WorkspaceUniverFileClient(http).execute({
      unitId: DEMO_UNIT_ID,
      code: SUM_E2_CODE,
    });
    expect(paths[0]).toMatch(/\/uf\/[^/]+\/units\/unit_welcome_sheet\/execute/);
    expect(paths[0]).not.toContain("/worktrees/");
  });

  it("executes worktree path when worktreeId is provided", async () => {
    const paths: string[] = [];
    const http = new WorkspaceHttp({
      origin: "https://workspace.edge.test",
      role: "client",
      cookie: "workspace_session=tok",
      fetcher: async (input, init) => {
        const request = new Request(input, init);
        paths.push(new URL(request.url).pathname);
        return Response.json({ success: true, rev: 3 });
      },
    });
    await new WorkspaceUniverFileClient(http).execute({
      unitId: DEMO_UNIT_ID,
      worktreeId: "wt_123",
      code: SET_E4_CODE,
    });
    expect(paths[0]).toMatch(/\/uf\/[^/]+\/worktrees\/wt_123\/units\/unit_welcome_sheet\/execute/);
  });

  it("lint and printPdf hit /uf endpoints", async () => {
    const paths: string[] = [];
    const http = new WorkspaceHttp({
      origin: "https://workspace.edge.test",
      role: "client",
      cookie: "workspace_session=tok",
      fetcher: async (input, init) => {
        const request = new Request(input, init);
        paths.push(new URL(request.url).pathname);
        return Response.json({ ok: true });
      },
    });
    const client = new WorkspaceUniverFileClient(http);
    await client.lint({ unitId: DEMO_UNIT_ID });
    await client.printPdf({ unitId: DEMO_UNIT_ID });
    expect(paths[0]).toMatch(/\/uf\/[^/]+\/lint$/);
    expect(paths[1]).toMatch(/\/uf\/[^/]+\/print-pdf$/);
  });
});
