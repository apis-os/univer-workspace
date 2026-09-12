import { describe, expect, it } from "vitest";
import {
  AGENT_CURSOR_EVENT,
  AGENT_MEMBER_ID,
  readAgentCursorMemberId,
  tapCollaborationSocketCursor,
} from "./follow-agent";

const AVERY_MEMBER_ID = "user_admin";

function fakeSocket() {
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

describe("collab Comb update_cursor to Follow Agent", () => {
  it("dispatches workspace-agent-cursor from a collab socket Comb update_cursor", () => {
    const bus = new EventTarget();
    const received: unknown[] = [];
    bus.addEventListener(AGENT_CURSOR_EVENT, (event) => {
      received.push((event as CustomEvent).detail);
    });
    const { socket, emit } = fakeSocket();
    tapCollaborationSocketCursor(socket, bus);
    emit({
      cmd: 6,
      collaMsg: {
        eventID: "update_cursor",
        updateCursorEvent: {
          memberID: AGENT_MEMBER_ID,
          selection: { startRow: 1, startColumn: 4, endRow: 1, endColumn: 4 },
        },
      },
    });
    expect(received).toHaveLength(1);
    expect(
      readAgentCursorMemberId({
        type: AGENT_CURSOR_EVENT,
        detail: received[0],
      })
    ).toBe(AGENT_MEMBER_ID);
  });

  it("dispatches workspace-agent-cursor from a deserialized collab RECV data payload", () => {
    const bus = new EventTarget();
    const members: string[] = [];
    bus.addEventListener(AGENT_CURSOR_EVENT, (event) => {
      const memberId = readAgentCursorMemberId({
        type: event.type,
        detail: (event as CustomEvent).detail,
      });
      if (memberId) members.push(memberId);
    });
    const { socket, emit } = fakeSocket();
    tapCollaborationSocketCursor(socket, bus);
    emit({
      cmd: 6,
      data: {
        eventID: "update_cursor",
        data: {
          memberID: AGENT_MEMBER_ID,
          selection: "E2",
        },
      },
    });
    expect(members).toEqual([AGENT_MEMBER_ID]);
    expect(members).not.toContain(AVERY_MEMBER_ID);
  });

  it("does not dispatch workspace-agent-cursor for new_changesets", () => {
    const bus = new EventTarget();
    let count = 0;
    bus.addEventListener(AGENT_CURSOR_EVENT, () => {
      count += 1;
    });
    const { socket, emit } = fakeSocket();
    tapCollaborationSocketCursor(socket, bus);
    emit({
      cmd: 6,
      collaMsg: { eventID: "new_changesets", newCsEvent: { cs: {} } },
    });
    expect(count).toBe(0);
  });
});
