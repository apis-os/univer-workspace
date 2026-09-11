import { describe, expect, it, vi } from "vitest";
import {
  isLiveShareFacadeAvailable,
  liveShareCommands,
  shouldBindCollaborationStatusDisplay,
  shouldBindLiveShareFacade,
} from "./live-share-commands";

function facade(overrides: Record<string, unknown> = {}) {
  return {
    startPresenting: vi.fn(),
    stopPresenting: vi.fn(),
    startFollowing: vi.fn(),
    stopFollowing: vi.fn(),
    getLiveShareStatus: vi.fn(() => "idle"),
    ...overrides,
  };
}

describe("Live Share bar Facade helpers", () => {
  it("hides when Facade methods are missing", () => {
    expect(isLiveShareFacadeAvailable(undefined)).toBe(false);
    expect(isLiveShareFacadeAvailable({})).toBe(false);
    expect(
      isLiveShareFacadeAvailable({ startPresenting: () => undefined })
    ).toBe(false);
    expect(isLiveShareFacadeAvailable(facade())).toBe(true);
  });

  it("invokes Present Stop and Follow on the Facade", () => {
    const api = facade();
    const commands = liveShareCommands(api);
    commands.present();
    commands.stop();
    commands.follow();
    expect(api.startPresenting).toHaveBeenCalledTimes(1);
    expect(api.stopPresenting).toHaveBeenCalledTimes(1);
    expect(api.startFollowing).toHaveBeenCalledTimes(1);
  });

  it("Stop stops following when the session is following", () => {
    const api = facade({ getLiveShareStatus: vi.fn(() => "following") });
    liveShareCommands(api).stop();
    expect(api.stopFollowing).toHaveBeenCalledTimes(1);
    expect(api.stopPresenting).not.toHaveBeenCalled();
  });

  it("does not throw when Present Stop Follow or status probe lack a workbook or coordinator", () => {
    const api = facade({
      startPresenting: vi.fn(() => {
        throw new Error("No active workbook found");
      }),
      stopPresenting: vi.fn(() => {
        throw new Error("No LiveShareCoordinator");
      }),
      startFollowing: vi.fn(() => {
        throw new Error("No active workbook found");
      }),
      stopFollowing: vi.fn(() => {
        throw new Error("No LiveShareCoordinator");
      }),
      getLiveShareStatus: vi.fn(() => {
        throw new Error("No active workbook found");
      }),
    });
    const commands = liveShareCommands(api);
    expect(() => commands.present()).not.toThrow();
    expect(() => commands.stop()).not.toThrow();
    expect(() => commands.follow()).not.toThrow();
  });

  it("binds Live Share only when an active workbook exists", () => {
    expect(shouldBindLiveShareFacade(undefined)).toBe(false);
    expect(shouldBindLiveShareFacade({})).toBe(false);
    expect(
      shouldBindLiveShareFacade({ getActiveWorkbook: () => undefined })
    ).toBe(false);
    expect(
      shouldBindLiveShareFacade({
        getActiveWorkbook: () => {
          throw new Error("No active workbook found");
        },
      })
    ).toBe(false);
    expect(shouldBindLiveShareFacade({ getActiveWorkbook: () => ({}) })).toBe(
      true
    );
  });

  it("binds the status chip only when custom presentation is ready", () => {
    expect(shouldBindCollaborationStatusDisplay(true, false, null)).toBe(true);
    expect(shouldBindCollaborationStatusDisplay(true, true, null)).toBe(false);
    expect(shouldBindCollaborationStatusDisplay(true, false, "failed")).toBe(
      false
    );
    expect(shouldBindCollaborationStatusDisplay(false, false, null)).toBe(
      false
    );
  });
});
