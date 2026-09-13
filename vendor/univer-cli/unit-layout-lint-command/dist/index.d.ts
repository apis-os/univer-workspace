import { SlideLayoutLintPageSelector, UnitLayoutLint, UnitLayoutLintReport, UnitLayoutLintSource } from "@univer-cli/unit-layout-lint";
import { Command } from "commander";
//#region src/index.d.ts
interface UnitLayoutLintCommandDependencies {
  readonly lint: UnitLayoutLint;
  readonly loadUnit: (input: {
    readonly unitId: string;
  }) => Promise<UnitLayoutLintSource>;
}
declare class UnitLayoutLintCommandInputError extends Error {
  constructor(message: string);
}
declare function createUnitLayoutLintCommand(dependencies: UnitLayoutLintCommandDependencies): Command;
declare function renderUnitLayoutLint(report: UnitLayoutLintReport): string;
declare function parseUnitLayoutLintPages(value: string): readonly SlideLayoutLintPageSelector[] | undefined;
//#endregion
export { UnitLayoutLintCommandDependencies, UnitLayoutLintCommandInputError, createUnitLayoutLintCommand, parseUnitLayoutLintPages, renderUnitLayoutLint };