import { describe, expect, it, vi } from "vitest";
import {
  isLiveShareFacadeAvailable,
  liveShareCommands,
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
});
