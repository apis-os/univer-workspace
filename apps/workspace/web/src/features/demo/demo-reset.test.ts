import { describe, expect, it } from "vitest";
import { planDemoReset } from "./demo-reset";

describe("safe demo reset", () => {
  it("isolates when other humans are present and never wipes", () => {
    expect(
      planDemoReset({
        members: [{ userID: "user_jordan" }, { userID: "user_admin" }],
        currentUserId: "user_admin",
      })
    ).toEqual({ action: "isolate", toastKey: "demoResetBlocked" });
    expect(
      planDemoReset({
        members: [
          { userID: "user_admin" },
          { userID: "agent_workspace" },
          { userID: "agent:helper" },
        ],
        currentUserId: "user_admin",
      })
    ).toEqual({ action: "skip-wipe" });
    expect(
      planDemoReset({ members: [], currentUserId: "user_admin" })
    ).toEqual({ action: "skip-wipe" });
  });
});
