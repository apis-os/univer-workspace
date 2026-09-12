import { describe, expect, it } from "vitest";
import {
  AGENT_CURSOR_EVENT,
  AGENT_MEMBER_ID,
  createFollowAgentController,
  readAgentCursorMemberId,
  resolveFollowAgentTarget,
} from "./follow-agent";
import {
  AGENT_PRESENCE_EVENT,
  readAgentPresenceStatus,
} from "./presence-roster";

const AVERY_MEMBER_ID = "user_admin";

describe("Follow Agent target from mock status and member id", () => {
  it("exports Comb member id agent_workspace", () => {
    expect(AGENT_MEMBER_ID).toBe("agent_workspace");
  });

  it("targets agent_workspace, not Avery, when Follow Agent is chosen and presence is thinking", () => {
    const target = resolveFollowAgentTarget({
      followingAgent: true,
      presenceStatus: "thinking",
      cursorMemberId: AVERY_MEMBER_ID,
    });
    expect(target).toBe(AGENT_MEMBER_ID);
    expect(target).not.toBe(AVERY_MEMBER_ID);
  });

  it("targets agent_workspace on agent update_cursor while following", () => {
    const target = resolveFollowAgentTarget({
      followingAgent: true,
      presenceStatus: "idle",
      cursorMemberId: AGENT_MEMBER_ID,
    });
    expect(target).toBe(AGENT_MEMBER_ID);
    expect(target).not.toBe(AVERY_MEMBER_ID);
  });

  it("does not follow Avery or the agent when the user did not choose Follow Agent", () => {
    expect(
      resolveFollowAgentTarget({
        followingAgent: false,
        presenceStatus: "thinking",
        cursorMemberId: AGENT_MEMBER_ID,
      })
    ).toBeNull();
    expect(
      resolveFollowAgentTarget({
        followingAgent: false,
        presenceStatus: "idle",
        cursorMemberId: AVERY_MEMBER_ID,
      })
    ).toBeNull();
  });

  it("does not retarget to Avery when following and only Avery's cursor is active", () => {
    expect(
      resolveFollowAgentTarget({
        followingAgent: true,
        presenceStatus: "idle",
        cursorMemberId: AVERY_MEMBER_ID,
      })
    ).toBeNull();
  });

  it("reads Comb update_cursor member id from a mocked collaMsg", () => {
    expect(
      readAgentCursorMemberId({
        type: AGENT_CURSOR_EVENT,
        detail: {
          eventID: "update_cursor",
          updateCursorEvent: { memberID: AGENT_MEMBER_ID },
        },
      })
    ).toBe(AGENT_MEMBER_ID);
    expect(
      readAgentCursorMemberId({
        type: AGENT_CURSOR_EVENT,
        detail: {
          collaMsg: {
            eventID: "update_cursor",
            updateCursorEvent: { memberID: AVERY_MEMBER_ID },
          },
        },
      })
    ).toBe(AVERY_MEMBER_ID);
    expect(
      readAgentCursorMemberId({
        type: AGENT_CURSOR_EVENT,
        detail: { eventID: "new_changesets" },
      })
    ).toBeNull();
  });

  it("retargets the viewport to agent_workspace from mocked thinking status and agent member id", () => {
    const followed: string[] = [];
    const controller = createFollowAgentController({
      followMember: (memberId) => {
        followed.push(memberId);
      },
    });

    controller.noteCue({
      presenceStatus: readAgentPresenceStatus({
        type: AGENT_PRESENCE_EVENT,
        detail: { status: "thinking" },
      }),
    });
    expect(followed).toEqual([]);

    controller.choose();
    expect(followed).toEqual([AGENT_MEMBER_ID]);
    expect(followed).not.toContain(AVERY_MEMBER_ID);

    followed.length = 0;
    controller.noteCue({
      presenceStatus: "idle",
      cursorMemberId: AVERY_MEMBER_ID,
    });
    expect(followed).toEqual([]);

    controller.noteCue({
      cursorMemberId: readAgentCursorMemberId({
        type: AGENT_CURSOR_EVENT,
        detail: {
          eventID: "update_cursor",
          updateCursorEvent: { memberID: AGENT_MEMBER_ID },
        },
      }),
    });
    expect(followed).toEqual([AGENT_MEMBER_ID]);
    expect(followed).not.toContain(AVERY_MEMBER_ID);
  });
});
