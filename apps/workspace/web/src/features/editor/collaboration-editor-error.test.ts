import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { formatUnknownError } from "./collaboration-editor-error";

const root = dirname(fileURLToPath(import.meta.url));

describe("collaboration editor mount errors", () => {
  it("stringifies thrown objects instead of [object Object]", () => {
    expect(formatUnknownError({ code: 4, message: "Sheet block was not found" }, "fallback")).toBe(
      "Sheet block was not found"
    );
    const wrapped = new Error("[object Object]");
    (wrapped as { error?: unknown }).error = { code: 16, message: "unauthenticated" };
    expect(formatUnknownError(wrapped, "fallback")).toContain("unauthenticated");
    expect(formatUnknownError({ error: { code: 4, message: "not found" } }, "fallback")).toContain(
      "not found"
    );
    expect(formatUnknownError(new Error(""), "The spreadsheet could not be loaded.")).toBe(
      "The spreadsheet could not be loaded."
    );
  });

  it("wires formatUnknownError into the mount() catch", () => {
    const src = readFileSync(join(root, "collaboration-editor.tsx"), "utf8");
    expect(src).toMatch(/formatUnknownError\(/);
    expect(src).not.toMatch(
      /setError\(\s*reason instanceof Error\s*\?\s*reason\.message/
    );
  });

  it("does not assign window.univerAPI on collaboration editors", () => {
    const src = readFileSync(join(root, "collaboration-editor.tsx"), "utf8");
    expect(src).not.toMatch(/window\.univerAPI/);
    expect(src).not.toMatch(/univerAPI\?: FUniver/);
  });

  it("toasts fromChangeset overlap and does not clear conflict on Syncing", () => {
    const src = readFileSync(join(root, "collaboration-editor.tsx"), "utf8");
    expect(src).toMatch(/onMutationExecutedForCollab/);
    expect(src).toMatch(/localEditA1 \? \[localEditA1\]/);
    expect(src).toMatch(/localEditA1AfterCommand/);
    expect(src).toMatch(/lastSelectedA1/);
    expect(src).toMatch(/a1FromNameBoxValue/);
    expect(src).toMatch(/defined-name/);
    expect(src).toMatch(/BroadcastChannel/);
    expect(src).toMatch(/workspace-cell-overlap/);
    expect(src).toMatch(/\/universer-api\/cell-overlap/);
    expect(src).toMatch(/userID: user\.id/);
    expect(src).toMatch(/shouldClearCollaborationIssueOnStatus/);
    expect(src).not.toMatch(
      /else if \(event.status !== CollaborationStatus.CONFLICT\)/
    );
  });
});
