import { describe, expect, it } from "vitest";
import {
  hostnameForBuiltInLicense,
  resolveUniverLicense
} from "./univer-license";
import { UNIVER_LICENSE } from "./license";

describe("built-in Univer license host", () => {
  it("aliases the workers.dev SPA host to localhost for the signed dm list", () => {
    expect(hostnameForBuiltInLicense("univer-workspace.apisos.workers.dev")).toBe("localhost");
    expect(hostnameForBuiltInLicense("localhost")).toBe("localhost");
    expect(hostnameForBuiltInLicense("example.com")).toBe("example.com");
  });

  it("falls back to the built-in license string", () => {
    expect(resolveUniverLicense("")).toBe(UNIVER_LICENSE);
    expect(resolveUniverLicense("  signed-workers-dev-key  ")).toBe("signed-workers-dev-key");
  });
});
