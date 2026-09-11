import { describe, expect, it, vi } from "vitest";
import {
  HISTORY_DISPLAY_NAMES,
  applyHistoryNameUsers,
  historyDisplayName,
  overlayHistoryAdministrator,
} from "./history-names";

describe("History display names", () => {
  it("maps Comb peer ids to Avery Chen, Jordan Lee, and Workspace Agent", () => {
    expect(HISTORY_DISPLAY_NAMES).toEqual({
      user_admin: "Avery Chen",
      user_jordan: "Jordan Lee",
      agent_workspace: "Workspace Agent",
    });
    expect(historyDisplayName("user_admin")).toBe("Avery Chen");
    expect(historyDisplayName("user_jordan")).toBe("Jordan Lee");
    expect(historyDisplayName("agent_workspace")).toBe("Workspace Agent");
  });

  it("stops showing Administrator", () => {
    expect(historyDisplayName("user_admin", "Administrator")).toBe(
      "Avery Chen"
    );
    expect(historyDisplayName("unknown", "Administrator")).toBe("Avery Chen");
    expect(overlayHistoryAdministrator({ unknownUser: "Administrator" })).toEqual(
      { unknownUser: "Avery Chen" }
    );
    expect(
      overlayHistoryAdministrator({
        nested: { name: "Administrator", keep: "Jordan Lee" },
      })
    ).toEqual({ nested: { name: "Avery Chen", keep: "Jordan Lee" } });
  });

  it("registers mapped users on UserManager", () => {
    const addUser = vi.fn();
    applyHistoryNameUsers({ addUser });
    expect(addUser).toHaveBeenCalledTimes(3);
    expect(addUser.mock.calls.map(([user]) => [user.userID, user.name])).toEqual([
      ["user_admin", "Avery Chen"],
      ["user_jordan", "Jordan Lee"],
      ["agent_workspace", "Workspace Agent"],
    ]);
  });
});
