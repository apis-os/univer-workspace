import { describe, expect, it } from "vitest";
import {
  CELL_INTENT_EVENT_ID,
  a1FromNameBoxValue,
  encodeCellIntentIngest,
  highlightIntent,
  isSameCellConflict,
  localEditA1AfterCommand,
  readCellIntent,
  remoteChangesetConflictsLocal,
  shouldPublishIntent,
  shouldToastRemoteCellOverlap,
  type CellIntent,
} from "./cell-presence-intent";

describe("cell presence intent", () => {
  it("roundtrips Comb INGEST cell_intent for D3 selecting", () => {
    const frame = encodeCellIntentIngest("unit_welcome_sheet", {
      memberID: "user_jordan",
      userID: "user_jordan",
      a1: "D3",
      intent: "selecting",
    });
    expect(frame.cmd).toBe(4);
    expect(frame.routeKey).toBe("unit_welcome_sheet");
    expect(frame.collaMsg.eventID).toBe("cell_intent");
    expect(readCellIntent(frame)).toEqual(frame.collaMsg.cellIntent);
  });

  it("reads cellIntent from CustomEvent detail or nested collaMsg", () => {
    const intent: CellIntent = {
      memberID: "user_jordan",
      userID: "user_jordan",
      a1: "D3",
      intent: "editing",
    };
    expect(
      readCellIntent({
        type: "workspace-cell-intent",
        detail: {
          collaMsg: {
            eventID: CELL_INTENT_EVENT_ID,
            cellIntent: intent,
          },
        },
      })
    ).toEqual(intent);
    expect(readCellIntent(null)).toBeNull();
    expect(readCellIntent({})).toBeNull();
    expect(readCellIntent({ collaMsg: { eventID: "other" } })).toBeNull();
  });

  it("ignores ghost-jordan synthetic seats and empty A1", () => {
    expect(shouldPublishIntent({ kind: "ghost", a1: "D3" })).toBe(false);
    expect(shouldPublishIntent({ kind: "member", a1: "" })).toBe(false);
    expect(shouldPublishIntent({ kind: "member", a1: null })).toBe(false);
    expect(shouldPublishIntent({ kind: "member", a1: "D3" })).toBe(true);
  });

  it("highlights cell with 1px stroke from ring token at 0.86 alpha and 0.12 fill", () => {
    let capturedStyle: Record<string, unknown> | undefined;
    let capturedRanges: readonly unknown[] = [];
    const sheet = {
      getRange: (a1: string) => `facade_${a1}`,
      highlightRanges: (ranges: readonly unknown[], style?: Record<string, unknown>) => {
        capturedRanges = ranges;
        capturedStyle = style;
        return { dispose() {} };
      },
    };
    const host = {
      getActiveWorkbook: () => ({
        getActiveSheet: () => sheet,
      }),
    };

    highlightIntent(
      host,
      {
        memberID: "user_jordan",
        userID: "user_jordan",
        a1: "D3",
        intent: "selecting",
      },
      "sheet",
      false
    );

    expect(capturedRanges).toEqual(["facade_D3"]);
    expect(capturedStyle).toEqual({
      stroke: "rgba(15,153,96,0.86)",
      strokeWidth: 1,
      fill: "rgba(15,153,96,0.12)",
      widgetSize: 0,
    });
  });

  it("highlights cell with 0.00 alpha fill when reducedMotion is true", () => {
    let capturedStyle: Record<string, unknown> | undefined;
    const sheet = {
      getRange: (a1: string) => `facade_${a1}`,
      highlightRanges: (_ranges: readonly unknown[], style?: Record<string, unknown>) => {
        capturedStyle = style;
        return { dispose() {} };
      },
    };
    const host = {
      getActiveWorkbook: () => ({
        getActiveSheet: () => sheet,
      }),
    };

    highlightIntent(
      host,
      {
        memberID: "user_jordan",
        userID: "user_jordan",
        a1: "D3",
        intent: "thinking",
      },
      "brand-600",
      true
    );

    expect(capturedStyle?.fill).toBe("rgba(37,99,235,0)");
    expect(capturedStyle?.stroke).toBe("rgba(37,99,235,0.86)");
  });

  it("toasts same-cell conflict when a remote peer edits the local A1", () => {
    expect(
      isSameCellConflict("D3", {
        userID: "user_jordan",
        a1: "D3",
        intent: "editing",
      }, "user_admin")
    ).toBe(true);
    expect(
      isSameCellConflict("d3", {
        userID: "user_jordan",
        a1: "D3",
        intent: "selecting",
      }, "user_admin")
    ).toBe(false);
    expect(
      isSameCellConflict("D3", {
        userID: "user_admin",
        a1: "D3",
        intent: "editing",
      }, "user_admin")
    ).toBe(false);
    expect(
      isSameCellConflict("E2", {
        userID: "user_jordan",
        a1: "D3",
        intent: "editing",
      }, "user_admin")
    ).toBe(false);
    expect(
      isSameCellConflict(null, {
        userID: "user_jordan",
        a1: "D3",
        intent: "editing",
      }, "user_admin")
    ).toBe(false);
  });

  it("toasts when a remote changeset touches a recently edited local cell even after the name box advances", () => {
    expect(
      remoteChangesetConflictsLocal({
        localA1s: ["D3"],
        remoteUserId: "user_jordan",
        currentUserId: "user_admin",
        remoteA1s: ["D3"],
      })
    ).toBe(true);
    expect(
      remoteChangesetConflictsLocal({
        localA1s: ["D3"],
        remoteUserId: "user_admin",
        currentUserId: "user_admin",
        remoteA1s: ["D3"],
      })
    ).toBe(false);
    expect(
      remoteChangesetConflictsLocal({
        localA1s: ["D4"],
        remoteUserId: "user_jordan",
        currentUserId: "user_admin",
        remoteA1s: ["D3"],
      })
    ).toBe(false);
    expect(
      remoteChangesetConflictsLocal({
        localA1s: ["D3"],
        remoteUserId: "",
        currentUserId: "user_admin",
        remoteA1s: ["D3"],
        treatMissingActorAsRemote: true,
      })
    ).toBe(true);
    expect(
      remoteChangesetConflictsLocal({
        localA1s: ["D3"],
        remoteUserId: "",
        currentUserId: "user_admin",
        remoteA1s: ["D3"],
      })
    ).toBe(false);
  });

  it("toasts fromChangeset overlap on D3 even after the name box advances to D4", () => {
    const remoteD3 = {
      id: "sheet.mutation.set-range-values",
      params: {
        cellValue: {
          "2": { "3": { v: 182 } },
        },
      },
      options: { fromChangeset: true },
    };
    expect(
      shouldToastRemoteCellOverlap({
        command: remoteD3,
        localA1s: ["D3"],
        currentUserId: "user_admin",
      })
    ).toBe(true);
    expect(
      shouldToastRemoteCellOverlap({
        command: remoteD3,
        options: { fromChangeset: true, userID: "user_admin" },
        localA1s: ["D3"],
        currentUserId: "user_admin",
      })
    ).toBe(false);
    expect(
      shouldToastRemoteCellOverlap({
        command: {
          id: "sheet.mutation.set-range-values",
          params: { cellValue: { "2": { "3": { v: 181 } } } },
        },
        localA1s: ["D3"],
        currentUserId: "user_admin",
      })
    ).toBe(false);
    expect(localEditA1AfterCommand({
      isMutation: true,
      commandA1s: ["D3"],
      activeA1: "D4",
      previousLocalEditA1: "D3",
    })).toBe("D3");
    expect(a1FromNameBoxValue("D3")).toBe("D3");
    expect(a1FromNameBoxValue(" d4 ")).toBe("D4");
    expect(a1FromNameBoxValue("Q3 Forecast")).toBe(null);
    expect(localEditA1AfterCommand({
      isMutation: true,
      commandA1s: [],
      activeA1: "D4",
      previousLocalEditA1: "D3",
    })).toBe("D3");
    expect(localEditA1AfterCommand({
      isMutation: false,
      commandA1s: [],
      activeA1: "D4",
      previousLocalEditA1: "D3",
    })).toBe("D3");
    expect(localEditA1AfterCommand({
      isMutation: true,
      commandA1s: [],
      activeA1: "D4",
      previousLocalEditA1: null,
      lastSelectedA1: "D3",
    })).toBe("D3");
    expect(
      shouldToastRemoteCellOverlap({
        command: {
          id: "sheet.mutation.set-range-values",
          params: {
            cellValue: {
              "2": { "3": { v: 182 } },
            },
          },
        },
        options: { fromChangeset: true },
        localA1s: ["D3"],
        currentUserId: "user_admin",
      })
    ).toBe(true);
  });
});
