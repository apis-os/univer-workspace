import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { registerHooks } from "node:module";
import {
  isWorktreeCombConnect,
  rewriteWorktreeUniverserPath
} from "../src/integrations/univer-protocol.ts";
import {
  CombCmd,
  CmdRspCode,
  decodeCombFrame,
  encodeCombFrame
} from "../src/integrations/univer-comb-codec.ts";
import { AGENT_MEMBER_ID } from "../src/plugins/univer-facade-actions.ts";

function dataModule(source: string) {
  return {
    url: "data:text/javascript," + encodeURIComponent(source),
    shortCircuit: true
  };
}

registerHooks({
  resolve(specifier, context, nextResolve) {
    if (specifier.startsWith("cloudflare:")) {
      return dataModule(`
        export default {};
        export class DurableObject {
          constructor(ctx, env) {
            this.ctx = ctx;
            this.env = env;
          }
        };
        export class WorkerEntrypoint {};
      `);
    }
    return nextResolve(specifier, context);
  }
});

function fakeSocket(att: Record<string, unknown>) {
  const sent: Array<string | ArrayBuffer | ArrayBufferView> = [];
  return {
    sent,
    send(data: string | ArrayBuffer | ArrayBufferView) {
      sent.push(data);
    },
    deserializeAttachment() {
      return att;
    },
    serializeAttachment(next: Record<string, unknown>) {
      Object.assign(att, next);
    }
  };
}

async function createCombHost(sockets: ReturnType<typeof fakeSocket>[]) {
  const { DshHost } = await import("../src/project/dsh-host.ts");
  const host = new DshHost(
    {
      getWebSockets: () => sockets,
      id: { toString: () => "univer_collab", name: "univer_collab" }
    } as any,
    {} as any
  );
  host.ensureKernel = async () =>
    ({
      get: () => undefined,
      emit: async () => undefined
    }) as any;
  return host;
}

describe("worktree Comb agent peer integration", () => {
  it("identifies worktree Comb connect path", () => {
    assert.equal(isWorktreeCombConnect("/universer-api/worktrees/wt_draft/comb/connect"), true);
    assert.equal(isWorktreeCombConnect("/universer-api/comb/connect"), true);
    assert.equal(isWorktreeCombConnect("/universer-api/worktrees/wt_draft/snapshot"), false);
  });

  it("accepts worktree Comb connect and includes agent_workspace in joinRsp", async () => {
    const jordanSocket = fakeSocket({
      kind: "comb",
      memberID: "user_jordan_member",
      userID: "user_jordan",
      name: "Jordan Lee",
      rooms: [],
      wire: "protobuf"
    });

    const host = await createCombHost([jordanSocket]);

    const joinFrame = encodeCombFrame({
      cmd: CombCmd.JOIN,
      code: CmdRspCode.OK,
      reason: "",
      routeKey: "unit_draft",
      joinReq: {
        rooms: [{ roomID: "unit_draft" }]
      }
    });

    await host.webSocketMessage(jordanSocket as any, joinFrame);

    const received = jordanSocket.sent.map((msg) => decodeCombFrame(msg));

    const joinRsp = received.find((msg) => msg.cmd === CombCmd.JOIN);
    assert.ok(joinRsp, "Expected CombCmd.JOIN in received messages");
    const roomInfo = joinRsp.joinRsp?.roomInfos?.unit_draft;
    assert.ok(roomInfo, "Expected unit_draft roomInfo in joinRsp");

    const members = roomInfo.members as Array<{ memberID: string; name: string }>;
    assert.ok(
      members.some((m) => m.memberID === AGENT_MEMBER_ID),
      `Expected ${AGENT_MEMBER_ID} in room members: ${JSON.stringify(members)}`
    );

    const usersEnter = received.find(
      (msg) => (msg.collaMsg as { eventID?: string } | undefined)?.eventID === "users_enter"
    );
    assert.ok(usersEnter, "Expected users_enter broadcast");
    const joinEvent = (usersEnter.collaMsg as any).joinEvent;
    assert.equal(joinEvent.memberID, AGENT_MEMBER_ID);
    assert.equal(joinEvent.name, "Workspace Agent");
  });
});
