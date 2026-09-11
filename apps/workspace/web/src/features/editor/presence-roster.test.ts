import { describe, expect, it } from "vitest";
import {
  PRESENCE_RING_TOKENS,
  composePresenceRoster,
  isBotCollaborator,
  presenceRingClassName,
  readAgentPresenceStatus,
  shouldPulseBot,
  presenceRingToken,
} from "./presence-roster";

describe("presence color rings", () => {
  it("uses member.color when it is a known ring token", () => {
    expect(PRESENCE_RING_TOKENS).toEqual([
      "brand-600",
      "sheet",
      "board",
      "slide",
      "warning",
      "baseunit",
    ]);
    expect(presenceRingToken({ userID: "user_admin", color: "sheet" })).toBe(
      "sheet"
    );
    expect(presenceRingClassName("sheet")).toBe("ring-sheet");
    expect(presenceRingClassName("brand-600")).toBe("ring-brand-600");
  });

  it("hashes userID onto the six tokens when color is missing", () => {
    const token = presenceRingToken({ userID: "user_admin" });
    expect(PRESENCE_RING_TOKENS).toContain(token);
    expect(presenceRingToken({ userID: "user_admin" })).toBe(token);
    expect(presenceRingToken({ userID: "user_admin", color: "#ff00aa" })).toBe(
      token
    );
    const other = presenceRingToken({ userID: "user_jordan" });
    expect(PRESENCE_RING_TOKENS).toContain(other);
  });
});

describe("empty roster ghost Jordan and muted bot", () => {
  it("shows you, dashed Waiting for Jordan, and a muted bot when members are empty", () => {
    const seats = composePresenceRoster({
      members: [],
      currentUserId: "user_admin",
      currentUserName: "Avery Chen",
    });
    expect(seats.map((seat) => [seat.userID, seat.kind])).toEqual([
      ["user_admin", "member"],
      ["user_jordan", "ghost"],
      ["agent_workspace", "muted-bot"],
    ]);
    expect(seats[1]?.name).toBe("Jordan Lee");
    expect(seats[2]?.bot).toBe(true);
    expect(presenceRingClassName(seats[1]!.ringToken, { dashed: true })).toMatch(
      /ring-dashed/
    );
  });

  it("keeps ghost Jordan and muted bot when only you are present", () => {
    const seats = composePresenceRoster({
      members: [{ userID: "user_admin", name: "Avery Chen" }],
      currentUserId: "user_admin",
    });
    expect(seats.some((seat) => seat.kind === "ghost")).toBe(true);
    expect(seats.some((seat) => seat.kind === "muted-bot")).toBe(true);
  });

  it("drops the ghost and muted bot when Jordan and the agent join", () => {
    const seats = composePresenceRoster({
      members: [
        { userID: "user_admin", name: "Avery Chen" },
        { userID: "user_jordan", name: "Jordan Lee" },
        { userID: "agent_workspace", name: "Workspace Agent" },
      ],
      currentUserId: "user_admin",
    });
    expect(seats.some((seat) => seat.kind === "ghost")).toBe(false);
    expect(seats.some((seat) => seat.kind === "muted-bot")).toBe(false);
    expect(seats.map((seat) => seat.userID)).toEqual([
      "user_admin",
      "user_jordan",
      "agent_workspace",
    ]);
  });
});

describe("bot icon and thinking pulse", () => {
  it("treats agent_workspace and agent: ids as bots", () => {
    expect(isBotCollaborator("agent_workspace")).toBe(true);
    expect(isBotCollaborator("agent:helper")).toBe(true);
    expect(isBotCollaborator("user_jordan")).toBe(false);
  });

  it("pulses the bot while workspace-agent-presence is thinking", () => {
    expect(
      readAgentPresenceStatus({
        type: "workspace-agent-presence",
        detail: { status: "thinking" },
      })
    ).toBe("thinking");
    expect(
      readAgentPresenceStatus({
        type: "workspace-agent-presence",
        detail: { status: "idle" },
      })
    ).toBe("idle");
    expect(shouldPulseBot({ bot: true, status: "thinking" })).toBe(true);
    expect(shouldPulseBot({ bot: true, status: "idle" })).toBe(false);
    expect(shouldPulseBot({ bot: false, status: "thinking" })).toBe(false);
  });
});
