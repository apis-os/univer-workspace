import { describe, expect, it } from "vitest";
import {
  DEMO_NODE_ID,
  parseDemoSearch,
  demoLandingHref,
} from "./demo-search";

describe("parseDemoSearch", () => {
  it("parses as=jordan lang=zh-CN play=1 and scene variants", () => {
    expect(
      parseDemoSearch({
        as: "jordan",
        lang: "zh-CN",
        play: "1",
        scene: "fill",
      })
    ).toEqual({
      as: "jordan",
      lang: "zh-CN",
      play: "1",
      scene: "fill",
    });
    expect(parseDemoSearch({ scene: "conflict" }).scene).toBe("conflict");
    expect(parseDemoSearch({ scene: "review" }).scene).toBe("review");
    expect(parseDemoSearch({ scene: "export" }).scene).toBe("export");
    expect(parseDemoSearch({ play: 1 }).play).toBe("1");
    expect(parseDemoSearch({ scene: "nope" }).scene).toBeUndefined();
    expect(parseDemoSearch({ as: "avery" }).as).toBeUndefined();
    expect(parseDemoSearch({ lang: "fr-FR" }).lang).toBeUndefined();
  });

  it("builds the silent-login landing href on the welcome sheet", () => {
    expect(DEMO_NODE_ID).toBe("node_welcome_sheet");
    expect(demoLandingHref({})).toBe("/nodes/node_welcome_sheet?play=1");
    expect(demoLandingHref({ scene: "fill" })).toBe(
      "/nodes/node_welcome_sheet?play=1&scene=fill"
    );
  });
});
