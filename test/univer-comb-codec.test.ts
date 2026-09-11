import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { registerHooks } from "node:module";
import {
  CombCmd,
  CmdRspCode,
  decodeCombFrame,
  encodeCombFrame,
  encodeCombJson
} from "../src/integrations/univer-comb-codec.ts";

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

describe("CombCmd / CmdRspCode protocol constants", () => {
  test("CombCmd and CmdRspCode match @univerjs/protocol comb.d.ts", () => {
    assert.equal(CombCmd.HELLO, 1);
    assert.equal(CombCmd.JOIN, 2);
    assert.equal(CombCmd.LEAVE, 3);
    assert.equal(CombCmd.INGEST, 4);
    assert.equal(CombCmd.HEARTBEAT, 5);
    assert.equal(CombCmd.RECV, 6);
    assert.equal(CmdRspCode.OK, 1);
  });
});

const HELLO = { cmd: CombCmd.HELLO, routeKey: "hello" };
const JOIN = {
  cmd: CombCmd.JOIN,
  routeKey: "unit_welcome_sheet",
  joinReq: { rooms: [{ roomID: "unit_welcome_sheet", args: "" }] }
};
const USERS_ENTER = {
  cmd: CombCmd.RECV,
  code: CmdRspCode.OK,
  reason: "success",
  routeKey: "unit_welcome_sheet",
  collaMsg: {
    eventID: "users_enter",
    joinEvent: {
      memberID: "member_avery",
      userID: "user_admin",
      name: "Avery Chen",
      avatar: ""
    }
  }
};
const NEW_CHANGESETS = {
  cmd: CombCmd.RECV,
  code: CmdRspCode.OK,
  reason: "success",
  routeKey: "unit_welcome_sheet",
  collaMsg: {
    eventID: "new_changesets",
    newCsEvent: {
      cs: {
        unitID: "unit_welcome_sheet",
        type: 2,
        baseRev: 1,
        revision: 2,
        userID: "user_admin",
        memberID: "member_avery",
        mutations: [{ id: "sheet.mutation.set-range-values", data: "{\"v\":1}" }]
      }
    }
  }
};

function assertBinary(bytes: Uint8Array): void {
  assert.ok(bytes instanceof Uint8Array);
  assert.ok(bytes.byteLength > 0);
  assert.notEqual(bytes[0], 0x7b, "protobuf Comb frames must not be JSON text");
}

describe("Comb protobuf codec", () => {
  test("HELLO binary roundtrip", () => {
    const bytes = encodeCombFrame(HELLO);
    assertBinary(bytes);
    assert.deepEqual(decodeCombFrame(bytes), HELLO);
  });

  test("JOIN binary roundtrip", () => {
    const bytes = encodeCombFrame(JOIN);
    assertBinary(bytes);
    assert.deepEqual(decodeCombFrame(bytes), JOIN);
  });

  test("RECV users_enter binary roundtrip", () => {
    const bytes = encodeCombFrame(USERS_ENTER);
    assertBinary(bytes);
    assert.deepEqual(decodeCombFrame(bytes), USERS_ENTER);
  });

  test("RECV new_changesets binary roundtrip", () => {
    const bytes = encodeCombFrame(NEW_CHANGESETS);
    assertBinary(bytes);
    assert.deepEqual(decodeCombFrame(bytes), NEW_CHANGESETS);
  });

  test("JSON Comb frames still decode", () => {
    assert.deepEqual(decodeCombFrame(JSON.stringify(HELLO)), HELLO);
    assert.deepEqual(decodeCombFrame(encodeCombJson(JOIN)), JOIN);
    assert.deepEqual(decodeCombFrame(encodeCombJson(USERS_ENTER)), USERS_ENTER);
    assert.deepEqual(decodeCombFrame(encodeCombJson(NEW_CHANGESETS)), NEW_CHANGESETS);
  });
});

describe("Comb dual-path webSocketMessage", () => {
  test("JSON Comb HELLO stays JSON when wire is unset", async () => {
    const att = {
      kind: "comb",
      memberID: "member_json",
      userID: "user_admin",
      name: "Avery Chen",
      rooms: [] as string[]
    };
    const socket = fakeSocket(att);
    const host = await createCombHost([socket]);
    await host.webSocketMessage(socket as unknown as WebSocket, encodeCombJson(HELLO));
    assert.equal(socket.sent.length, 1);
    assert.equal(typeof socket.sent[0], "string");
    const reply = JSON.parse(socket.sent[0] as string);
    assert.equal(reply.cmd, CombCmd.HELLO);
    assert.equal(reply.code, CmdRspCode.OK);
    assert.equal(reply.infoRsp.memberID, "member_json");
    assert.notEqual(att.wire, "protobuf");
  });

  test("first binary Comb frame sets protobuf wire and replies in protobuf", async () => {
    const att: {
      kind: string;
      memberID: string;
      userID: string;
      name: string;
      rooms: string[];
      wire?: "protobuf" | "json";
    } = {
      kind: "comb",
      memberID: "member_bin",
      userID: "user_admin",
      name: "Avery Chen",
      rooms: []
    };
    const socket = fakeSocket(att);
    const host = await createCombHost([socket]);
    await host.webSocketMessage(socket as unknown as WebSocket, encodeCombFrame(HELLO));
    assert.equal(att.wire, "protobuf");
    assert.equal(socket.sent.length, 1);
    const reply = decodeCombFrame(socket.sent[0]);
    assert.equal(reply.cmd, CombCmd.HELLO);
    assert.equal(reply.code, CmdRspCode.OK);
    assert.equal((reply.infoRsp as { memberID: string }).memberID, "member_bin");
  });
});

describe("Comb INGEST pass-through", () => {
  test('opaque eventID "live_share" INGEST is RECV-broadcast to a second fake socket', async () => {
    const liveShare = {
      eventID: "live_share",
      presenter: "user_admin",
      viewport: { row: 1, col: 2 }
    };

    const averyAtt = {
      kind: "comb",
      memberID: "member_avery",
      userID: "user_admin",
      name: "Avery Chen",
      rooms: ["unit_welcome_sheet"],
      wire: "protobuf" as const
    };
    const jordanAtt = {
      kind: "comb",
      memberID: "member_jordan",
      userID: "user_jordan",
      name: "Jordan Lee",
      rooms: ["unit_welcome_sheet"],
      wire: "protobuf" as const
    };

    const avery = fakeSocket(averyAtt);
    const jordan = fakeSocket(jordanAtt);
    const host = await createCombHost([avery, jordan]);

    await host.webSocketMessage(
      avery as unknown as WebSocket,
      encodeCombFrame({
        cmd: CombCmd.INGEST,
        routeKey: "unit_welcome_sheet",
        collaMsg: liveShare
      })
    );

    assert.equal(avery.sent.length, 0);
    assert.equal(jordan.sent.length, 1);
    const recv = decodeCombFrame(jordan.sent[0]);
    assert.equal(recv.cmd, CombCmd.RECV);
    assert.equal(recv.code, CmdRspCode.OK);
    assert.equal(recv.routeKey, "unit_welcome_sheet");
    assert.deepEqual(recv.collaMsg, liveShare);
  });

  test("protobuf INGEST is JSON-encoded for a JSON peer", async () => {
    const liveShare = {
      eventID: "live_share",
      presenter: "user_admin",
      viewport: { row: 1, col: 2 }
    };

    const averyAtt = {
      kind: "comb",
      memberID: "member_avery",
      userID: "user_admin",
      name: "Avery Chen",
      rooms: ["unit_welcome_sheet"],
      wire: "protobuf" as const
    };
    const jordanAtt = {
      kind: "comb",
      memberID: "member_jordan",
      userID: "user_jordan",
      name: "Jordan Lee",
      rooms: ["unit_welcome_sheet"]
    };

    const avery = fakeSocket(averyAtt);
    const jordan = fakeSocket(jordanAtt);
    const host = await createCombHost([avery, jordan]);

    await host.webSocketMessage(
      avery as unknown as WebSocket,
      encodeCombFrame({
        cmd: CombCmd.INGEST,
        routeKey: "unit_welcome_sheet",
        collaMsg: liveShare
      })
    );

    assert.equal(avery.sent.length, 0);
    assert.equal(jordan.sent.length, 1);
    assert.equal(typeof jordan.sent[0], "string");
    const recv = JSON.parse(jordan.sent[0] as string);
    assert.equal(recv.cmd, CombCmd.RECV);
    assert.equal(recv.code, CmdRspCode.OK);
    assert.equal(recv.routeKey, "unit_welcome_sheet");
    assert.deepEqual(recv.collaMsg, liveShare);
  });
});

describe("Comb Workspace Agent peer", () => {
  test("JOIN joinRsp includes synthetic agent when a human is in the room", async () => {
    const averyAtt = {
      kind: "comb",
      memberID: "member_avery",
      userID: "user_admin",
      name: "Avery Chen",
      rooms: [] as string[]
    };
    const avery = fakeSocket(averyAtt);
    const host = await createCombHost([avery]);

    assert.equal(host.getRoomMembers("unit_welcome_sheet").length, 0);

    await host.webSocketMessage(
      avery as unknown as WebSocket,
      encodeCombJson({
        cmd: CombCmd.JOIN,
        routeKey: "unit_welcome_sheet",
        joinReq: { rooms: [{ roomID: "unit_welcome_sheet", args: "" }] }
      })
    );

    const members = host.getRoomMembers("unit_welcome_sheet");
    assert.equal(members.length, 2);
    assert.ok(members.some((m) => m.memberID === "member_avery"));
    const agent = members.find((m) => m.memberID === "agent_workspace");
    assert.deepEqual(agent, {
      memberID: "agent_workspace",
      userID: "agent_workspace",
      name: "Workspace Agent",
      avatar: ""
    });

    const join = avery.sent
      .filter((row) => typeof row === "string")
      .map((row) => JSON.parse(String(row)))
      .find((msg) => msg.cmd === CombCmd.JOIN);
    assert.equal(join?.cmd, CombCmd.JOIN);
    const roster = join?.joinRsp.roomInfos.unit_welcome_sheet.members as Array<{ memberID: string }>;
    assert.ok(roster.some((m) => m.memberID === "agent_workspace"));
  });

  test("second member gets users_enter, update_cursor, and set-range new_changesets", async () => {
    const averyAtt = {
      kind: "comb",
      memberID: "member_avery",
      userID: "user_admin",
      name: "Avery Chen",
      rooms: [] as string[]
    };
    const jordanAtt = {
      kind: "comb",
      memberID: "member_jordan",
      userID: "user_jordan",
      name: "Jordan Lee",
      rooms: [] as string[],
      wire: "protobuf" as const
    };
    const avery = fakeSocket(averyAtt);
    const jordan = fakeSocket(jordanAtt);
    const host = await createCombHost([avery, jordan]);

    await host.webSocketMessage(
      avery as unknown as WebSocket,
      encodeCombJson({
        cmd: CombCmd.JOIN,
        routeKey: "unit_welcome_sheet",
        joinReq: { rooms: [{ roomID: "unit_welcome_sheet", args: "" }] }
      })
    );
    jordan.sent.length = 0;
    await host.webSocketMessage(
      jordan as unknown as WebSocket,
      encodeCombJson({
        cmd: CombCmd.JOIN,
        routeKey: "unit_welcome_sheet",
        joinReq: { rooms: [{ roomID: "unit_welcome_sheet", args: "" }] }
      })
    );

    (host as any).broadcastAgentCollab("unit_welcome_sheet", {
      unitID: "unit_welcome_sheet",
      memberID: "agent_workspace",
      mutations: [
        {
          id: "sheet.mutation.set-range-values",
          params: {
            unitId: "unit_welcome_sheet",
            subUnitId: "sheet_1",
            cellValue: { "0": { "0": { v: "Hello from AI" } } }
          }
        }
      ]
    });

    const jordanMsgs = jordan.sent.map((row) => decodeCombFrame(row));
    const eventIDs = jordanMsgs.map((msg) => (msg.collaMsg as { eventID?: string } | undefined)?.eventID);
    assert.ok(eventIDs.includes("users_enter"), `missing users_enter in ${JSON.stringify(eventIDs)}`);
    assert.ok(eventIDs.includes("update_cursor"), `missing update_cursor in ${JSON.stringify(eventIDs)}`);
    assert.ok(eventIDs.includes("new_changesets"), `missing new_changesets in ${JSON.stringify(eventIDs)}`);
    assert.ok(!eventIDs.includes("users_leave"));

    const enter = jordanMsgs.find((msg) => (msg.collaMsg as { eventID?: string })?.eventID === "users_enter");
    assert.equal((enter?.collaMsg as { joinEvent?: { memberID?: string; name?: string } })?.joinEvent?.memberID, "agent_workspace");
    assert.equal((enter?.collaMsg as { joinEvent?: { name?: string } })?.joinEvent?.name, "Workspace Agent");

    const cursor = jordanMsgs.find((msg) => (msg.collaMsg as { eventID?: string })?.eventID === "update_cursor");
    const selection = (cursor?.collaMsg as { updateCursorEvent?: { memberID?: string; selection?: { startRow: number; startColumn: number } } })
      ?.updateCursorEvent;
    assert.equal(selection?.memberID, "agent_workspace");
    assert.equal(selection?.selection?.startRow, 0);
    assert.equal(selection?.selection?.startColumn, 0);

    const cursorIdx = eventIDs.indexOf("update_cursor");
    const csIdx = eventIDs.indexOf("new_changesets");
    assert.ok(cursorIdx >= 0 && csIdx > cursorIdx, "update_cursor must precede new_changesets");

    const cs = jordanMsgs.find((msg) => (msg.collaMsg as { eventID?: string })?.eventID === "new_changesets");
    const mutationId = (cs?.collaMsg as { newCsEvent?: { cs?: { mutations?: Array<{ id?: string }> } } })?.newCsEvent?.cs
      ?.mutations?.[0]?.id;
    assert.equal(mutationId, "sheet.mutation.set-range-values");
  });
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
