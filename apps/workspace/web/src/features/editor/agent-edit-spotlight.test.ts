import { describe, expect, it } from "vitest";
import {
  AGENT_REPLAY_STORAGE_KEY,
  activateAgentEditSpotlight,
  replayAgentEditSpotlight,
  shouldWalkAgentSpotlight,
  spotlightCellsFromDetail,
} from "./agent-edit-spotlight";

class MemoryStorage {
  readonly #data = new Map<string, string>();
  getItem(key: string): string | null {
    return this.#data.get(key) ?? null;
  }
  setItem(key: string, value: string): void {
    this.#data.set(key, value);
  }
  removeItem(key: string): void {
    this.#data.delete(key);
  }
}

describe("agent edit spotlight", () => {
  it("walks E2 then E4 once per session", async () => {
    const storage = new MemoryStorage();
    const activated: string[] = [];
    const first = await activateAgentEditSpotlight({
      storage,
      activate: (a1) => {
        activated.push(a1);
      },
      delay: async () => undefined,
    });
    expect(first.walked).toEqual(["E2", "E3", "E4"]);
    expect(activated).toEqual(["E2", "E3", "E4"]);
    expect(storage.getItem(AGENT_REPLAY_STORAGE_KEY)).toBe("1");

    activated.length = 0;
    const second = await activateAgentEditSpotlight({
      storage,
      activate: (a1) => {
        activated.push(a1);
      },
      delay: async () => undefined,
    });
    expect(second.walked).toEqual([]);
    expect(activated).toEqual([]);
  });

  it("replays by resetting session storage and walking again", async () => {
    const storage = new MemoryStorage();
    storage.setItem(AGENT_REPLAY_STORAGE_KEY, "1");
    const activated: string[] = [];
    const result = await replayAgentEditSpotlight({
      storage,
      activate: (a1) => {
        activated.push(a1);
      },
      delay: async () => undefined,
    });
    expect(result.walked).toEqual(["E2", "E3", "E4"]);
    expect(activated).toEqual(["E2", "E3", "E4"]);
  });

  it("skips the walk on compact viewports and reduced motion", () => {
    expect(
      shouldWalkAgentSpotlight({ compact: true, reducedMotion: false })
    ).toBe(false);
    expect(
      shouldWalkAgentSpotlight({ compact: false, reducedMotion: true })
    ).toBe(false);
    expect(
      shouldWalkAgentSpotlight({ compact: false, reducedMotion: false })
    ).toBe(true);
  });

  it("shows chips only when the walk is skipped", async () => {
    const storage = new MemoryStorage();
    const activated: string[] = [];
    const result = await activateAgentEditSpotlight({
      storage,
      compact: true,
      activate: (a1) => {
        activated.push(a1);
      },
      delay: async () => undefined,
    });
    expect(result.walked).toEqual([]);
    expect(result.cells).toEqual(["E2", "E3", "E4"]);
    expect(activated).toEqual([]);
  });

  it("uses edited cells from tool calls as chips only", () => {
    expect(
      spotlightCellsFromDetail({
        toolCalls: [
          {
            tool: "univer.sheet.setRange",
            args: { cells: [{ a1: "D4", value: 180 }] },
          },
        ],
      })
    ).toEqual(["D4"]);
  });

  it("walks E2 then E4 even when Set D4 toolCalls are present", async () => {
    const storage = new MemoryStorage();
    const activated: string[] = [];
    const result = await activateAgentEditSpotlight({
      storage,
      cells: spotlightCellsFromDetail({
        toolCalls: [
          {
            tool: "univer.sheet.setRange",
            args: { cells: [{ a1: "D4", value: 180 }] },
          },
        ],
      }),
      activate: (a1) => {
        activated.push(a1);
      },
      delay: async () => undefined,
    });
    expect(result.walked).toEqual(["E2", "E3", "E4"]);
    expect(result.cells).toEqual(["E2", "E3", "E4"]);
    expect(activated).toEqual(["E2", "E3", "E4"]);
    expect(storage.getItem(AGENT_REPLAY_STORAGE_KEY)).toBe("1");
  });

  it("skips compact walk with E2-E4 not D4 when toolCalls report Set D4", async () => {
    const storage = new MemoryStorage();
    const activated: string[] = [];
    const result = await activateAgentEditSpotlight({
      storage,
      compact: true,
      cells: spotlightCellsFromDetail({
        toolCalls: [
          {
            tool: "univer.sheet.setRange",
            args: { cells: [{ a1: "D4", value: 180 }] },
          },
        ],
      }),
      activate: (a1) => {
        activated.push(a1);
      },
      delay: async () => undefined,
    });
    expect(result.walked).toEqual([]);
    expect(result.cells).toEqual(["E2", "E3", "E4"]);
    expect(activated).toEqual([]);
  });

  it("walks E2-E4 when Fill toolCalls only record E2", async () => {
    const storage = new MemoryStorage();
    const activated: string[] = [];
    const result = await activateAgentEditSpotlight({
      storage,
      cells: spotlightCellsFromDetail({
        toolCalls: [
          {
            tool: "univer.sheet.setRange",
            args: { cells: [{ a1: "E2" }] },
          },
        ],
      }),
      activate: (a1) => {
        activated.push(a1);
      },
      delay: async () => undefined,
    });
    expect(result.walked).toEqual(["E2", "E3", "E4"]);
    expect(activated).toEqual(["E2", "E3", "E4"]);
  });

  it("replays E2-E4 even if chip cells are D4", async () => {
    const storage = new MemoryStorage();
    storage.setItem(AGENT_REPLAY_STORAGE_KEY, "1");
    const activated: string[] = [];
    const result = await replayAgentEditSpotlight({
      storage,
      cells: ["D4"],
      activate: (a1) => {
        activated.push(a1);
      },
      delay: async () => undefined,
    });
    expect(result.walked).toEqual(["E2", "E3", "E4"]);
    expect(activated).toEqual(["E2", "E3", "E4"]);
  });
});
