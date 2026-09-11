import { describe, expect, it, vi } from "vitest";
import { applyWorkspaceAgentEdits } from "./apply-agent-edits";

function facadeWorkbook(setValue: ReturnType<typeof vi.fn>) {
  const getRange = vi.fn(() => ({ setValue }));
  const getActiveSheet = vi.fn(() => ({ getRange }));
  return {
    workbook: { getActiveSheet },
    getActiveSheet,
    getRange,
  };
}

describe("applyWorkspaceAgentEdits", () => {
  it("ignores edits for a different unit", () => {
    const setValue = vi.fn();
    const { workbook } = facadeWorkbook(setValue);
    applyWorkspaceAgentEdits(
      { getActiveWorkbook: () => workbook },
      {
        unitId: "other",
        toolCalls: [
          { tool: "univer.sheet.setRange", args: { cells: [{ a1: "A1", value: "x" }] } },
        ],
      },
      "unit_welcome_sheet"
    );
    expect(setValue).not.toHaveBeenCalled();
  });

  it("writes sheet cells through getActiveSheet with Facade { v }", () => {
    const setValue = vi.fn();
    const { workbook, getActiveSheet, getRange } = facadeWorkbook(setValue);
    const result = applyWorkspaceAgentEdits(
      { getActiveWorkbook: () => workbook },
      {
        unitId: "unit_welcome_sheet",
        toolCalls: [
          {
            tool: "univer.sheet.setRange",
            args: { cells: [{ a1: "A1", value: "Hello from AI" }] },
          },
        ],
      },
      "unit_welcome_sheet"
    );
    expect(result.applied).toBe(true);
    expect(result.ranges).toEqual([{ a1: "A1", value: "Hello from AI" }]);
    expect(getActiveSheet).toHaveBeenCalled();
    expect(getRange).toHaveBeenCalledWith("A1");
    expect(setValue).toHaveBeenCalledWith({ v: "Hello from AI" });
  });

  it("accepts underscore LLM tool names for setRange", () => {
    const setValue = vi.fn();
    const { workbook } = facadeWorkbook(setValue);
    const result = applyWorkspaceAgentEdits(
      { getActiveWorkbook: () => workbook },
      {
        unitId: "unit_welcome_sheet",
        toolCalls: [
          {
            tool: "univer_sheet_setRange",
            args: { cells: [{ a1: "B2", value: "from-llm" }] },
          },
        ],
      },
      "unit_welcome_sheet"
    );
    expect(result.applied).toBe(true);
    expect(setValue).toHaveBeenCalledWith({ v: "from-llm" });
  });

  it("does not throw when Facade methods are missing", () => {
    expect(() =>
      applyWorkspaceAgentEdits(
        { getActiveWorkbook: () => ({}) },
        {
          unitId: "unit_welcome_sheet",
          toolCalls: [
            {
              tool: "univer.sheet.setRange",
              args: { cells: [{ a1: "A1", value: "Hello from AI" }] },
            },
          ],
        },
        "unit_welcome_sheet"
      )
    ).not.toThrow();
  });

  it("appends document text from appendText tool calls", () => {
    const appendText = vi.fn();
    const result = applyWorkspaceAgentEdits(
      { getActiveDocument: () => ({ appendText }) },
      {
        unitId: "unit_doc",
        toolCalls: [
          { tool: "univer.doc.appendText", args: { text: "Hello from AI" } },
        ],
      },
      "unit_doc"
    );
    expect(result.applied).toBe(true);
    expect(appendText).toHaveBeenCalledWith("Hello from AI");
  });

  it("does not setValue when collaboration is SYNCED and returns ranges", () => {
    const setValue = vi.fn();
    const { workbook } = facadeWorkbook(setValue);
    const result = applyWorkspaceAgentEdits(
      { getActiveWorkbook: () => workbook },
      {
        unitId: "unit_welcome_sheet",
        toolCalls: [
          {
            tool: "univer.sheet.setRange",
            args: { cells: [{ a1: "A1", value: "Hello from AI" }] },
          },
        ],
      },
      "unit_welcome_sheet",
      { status: "SYNCED" }
    );
    expect(setValue).not.toHaveBeenCalled();
    expect(result.applied).toBe(false);
    expect(result.ranges).toEqual([{ a1: "A1", value: "Hello from AI" }]);
  });
});
