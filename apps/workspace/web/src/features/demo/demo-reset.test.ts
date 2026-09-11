import { describe, expect, it } from "vitest";
import { resolveDemoReset } from "./demo-reset";

const twoHumans = {
  members: [{ userID: "user_jordan" }, { userID: "user_admin" }],
  currentUserId: "user_admin",
} as const;

const aloneWithAgent = {
  members: [
    { userID: "user_admin" },
    { userID: "agent_workspace" },
    { userID: "agent:helper" },
  ],
  currentUserId: "user_admin",
} as const;

describe("safe demo reset", () => {
  it("is a noop when two humans are present without a reset attempt", () => {
    expect(
      resolveDemoReset({
        attempted: false,
        ...twoHumans,
      })
    ).toEqual({ action: "noop" });
  });

  it("isolates on reset attempt when other humans are present", () => {
    expect(
      resolveDemoReset({
        attempted: true,
        ...twoHumans,
      })
    ).toEqual({ action: "isolate", toastKey: "demoResetBlocked" });
  });

  it("skip-wipes on reset attempt when alone with the agent", () => {
    expect(
      resolveDemoReset({
        attempted: true,
        ...aloneWithAgent,
      })
    ).toEqual({ action: "skip-wipe" });
    expect(
      resolveDemoReset({
        attempted: true,
        members: [],
        currentUserId: "user_admin",
      })
    ).toEqual({ action: "skip-wipe" });
  });

  it("skips later reset attempts once isolated", () => {
    expect(
      resolveDemoReset({
        attempted: true,
        isolated: true,
        ...twoHumans,
      })
    ).toEqual({ action: "noop" });
  });
});
