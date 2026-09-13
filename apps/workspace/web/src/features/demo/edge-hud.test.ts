import { afterEach, describe, expect, it } from "vitest";
import {
  browserHudStatus,
  combWireFromFrame,
  edgeHudChips,
  isCombConnectUrl,
  noteLastCombWire,
  noteLastGatewayCache,
  readEdgeHudState,
  resetEdgeHudState,
  tapCombWireFromSocket,
} from "./edge-hud";

describe("Comb wire from last collab frame", () => {
  it("classifies JSON object text as json", () => {
    expect(combWireFromFrame('{"cmd":1}')).toBe("json");
  });

  it("classifies bytes that start with { as json", () => {
    expect(combWireFromFrame(new TextEncoder().encode('{"cmd":6}'))).toBe("json");
  });

  it("classifies protobuf comb bytes as protobuf", () => {
    expect(combWireFromFrame(new Uint8Array([0x08, 0x01, 0x10, 0x01]))).toBe(
      "protobuf"
    );
  });
});

describe("BROWSER ok|off from /healthz ai + browser", () => {
  it("is ok only when browser is ok", () => {
    expect(browserHudStatus({ ai: "ok", browser: "ok" })).toBe("ok");
    expect(browserHudStatus({ ai: "off", browser: "ok" })).toBe("ok");
    expect(browserHudStatus({ ai: "ok", browser: "off" })).toBe("off");
    expect(browserHudStatus({})).toBe("off");
  });
});

describe("edge HUD chips", () => {
  afterEach(() => {
    resetEdgeHudState();
  });

  it("shows protobuf, HIT, and BROWSER ok values on the wide header", () => {
    const chips = edgeHudChips({
      comb: "protobuf",
      gateway: "HIT",
      browser: "ok",
      compact: false,
    });
    expect(chips.map((chip) => chip.id)).toEqual([
      "comb",
      "gateway",
      "browser",
    ]);
    expect(chips.map((chip) => chip.value)).toEqual(["protobuf", "HIT", "ok"]);
    expect(chips.every((chip) => chip.showValue)).toBe(true);
  });

  it("keeps compact demo header as icons only", () => {
    const chips = edgeHudChips({
      comb: "json",
      gateway: "MISS",
      browser: "off",
      compact: true,
    });
    expect(chips.map((chip) => chip.value)).toEqual(["json", "MISS", "off"]);
    expect(chips.every((chip) => chip.showValue === false)).toBe(true);
  });

  it("records last comb frame and last gateway HIT|MISS", () => {
    noteLastCombWire("protobuf");
    noteLastGatewayCache("HIT");
    expect(readEdgeHudState()).toMatchObject({
      comb: "protobuf",
      gateway: "HIT",
    });
  });

  it("HUD chips stay pending until a real Gateway cache is noted", () => {
    resetEdgeHudState();
    expect(readEdgeHudState().gateway).toBeNull();
    expect(
      edgeHudChips({
        comb: null,
        gateway: null,
        browser: "ok",
        compact: false,
      }).find((c) => c.id === "gateway")?.value
    ).toBe("—");
  });
});

describe("Comb connect URL matching", () => {
  it("matches trunk and worktree Comb connect sockets", () => {
    expect(isCombConnectUrl("/universer-api/comb/connect")).toBe(true);
    expect(
      isCombConnectUrl(
        "wss://workspace.example/universer-api/comb/connect?sessionTicket=t"
      )
    ).toBe(true);
    expect(
      isCombConnectUrl(
        "wss://workspace.example/universer-api/worktrees/wt_review/comb/connect"
      )
    ).toBe(true);
    expect(
      isCombConnectUrl(
        "/universer-api/worktrees/wt_review/comb/connect?sessionTicket=t"
      )
    ).toBe(true);
    expect(isCombConnectUrl("/universer-api/comb")).toBe(false);
    expect(isCombConnectUrl("/universer-api/worktrees/wt_review/comb")).toBe(
      false
    );
  });
});

function fakeCollaborationSocket() {
  let emit: ((event: unknown) => void) | undefined;
  return {
    socket: {
      message$: {
        subscribe(next: (event: unknown) => void) {
          emit = next;
          return { unsubscribe() {} };
        },
      },
    },
    emit(event: unknown) {
      emit?.(event);
    },
  };
}

describe("tap Comb last-frame from ICollaborationSocket message$", () => {
  afterEach(() => {
    resetEdgeHudState();
  });

  it("updates protobuf|json from message$ without addEventListener", () => {
    const { socket, emit } = fakeCollaborationSocket();
    tapCombWireFromSocket(socket);
    emit(new Uint8Array([0x08, 0x01, 0x10, 0x01]));
    expect(readEdgeHudState().comb).toBe("protobuf");
    emit('{"cmd":6}');
    expect(readEdgeHudState().comb).toBe("json");
    emit({ data: new Uint8Array([0x08, 0x02]) });
    expect(readEdgeHudState().comb).toBe("protobuf");
  });
});
