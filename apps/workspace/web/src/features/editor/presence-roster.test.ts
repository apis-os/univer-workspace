import { readFileSync } from "node:fs";
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

  it("maps dashed seats onto real border-dashed or outline-dashed token classes", () => {
    for (const token of PRESENCE_RING_TOKENS) {
      const dashed = presenceRingClassName(token, { dashed: true });
      expect(dashed).toMatch(/border-dashed|outline-dashed/);
      expect(dashed).not.toMatch(/ring-dashed/);
      expect(dashed).toMatch(new RegExp(`(?:border|outline)-${token}(?:\\s|$)`));
      expect(presenceRingClassName(token)).toBe(`ring-${token}`);
    }
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
    const ghostRing = presenceRingClassName(seats[1]!.ringToken, {
      dashed: true,
    });
    expect(ghostRing).toMatch(/border-dashed|outline-dashed/);
    expect(ghostRing).not.toMatch(/ring-dashed/);
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

  it("rounds the inner bot chrome without clipping token rings", () => {
    const src = readFileSync(new URL("./collaborator-avatars.tsx", import.meta.url), "utf8");
    const botChrome = src.match(
      /isBotCollaborator\([^)]+\)\s*\?\s*\(\s*<span className="([^"]+)"[\s\S]*?<Bot\b/
    );
    expect(botChrome?.[1]).toMatch(/\bbg-muted\b/);
    expect(botChrome?.[1]).toMatch(/\brounded-full\b/);
    const cnBlocks = [...src.matchAll(/className=\{cn\(([\s\S]*?)\)\}/g)].map(
      (match) => match[1]
    );
    const ringed = cnBlocks.filter(
      (block) => /\bring-2\b/.test(block) && /ring-offset-/.test(block)
    );
    expect(ringed.length).toBeGreaterThan(0);
    for (const block of ringed) {
      expect(block).not.toMatch(/\boverflow-hidden\b/);
    }
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
