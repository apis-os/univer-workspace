import { ContentInspectionQuery, ContentInspectionResult, ContentInspectionRuntime, ContentInspectionTarget } from "@univer-cli/content-inspection";
import { Command } from "commander";
//#region src/text-presenter.d.ts
declare function renderContentInspection(result: ContentInspectionResult): string;
//#endregion
//#region src/query-parser.d.ts
interface InspectionCommandOptions {
  readonly worksheet?: string;
}
declare class InspectionCommandInputError extends Error {}
declare function parseInspectionQuery(target: ContentInspectionTarget, selectors: readonly string[], options: InspectionCommandOptions): ContentInspectionQuery;
//#endregion
//#region src/index.d.ts
interface ContentInspectionCommandDependencies {
  readonly acquireRuntime: (input: {
    readonly unitId: string;
  }) => Promise<ContentInspectionLease>;
}
interface WorktreeContentInspectionCommandDependencies {
  readonly acquireRuntime: (input: {
    readonly unitId: string;
    readonly worktreeID?: string;
  }) => Promise<ContentInspectionLease>;
}
interface ContentInspectionLease extends ContentInspectionRuntime {
  invalidate(): Promise<void>;
  release(): Promise<void>;
}
declare function createContentInspectionCommand(dependencies: ContentInspectionCommandDependencies): Command;
declare function createWorktreeContentInspectionCommand(dependencies: WorktreeContentInspectionCommandDependencies): Command;
//#endregion
export { ContentInspectionCommandDependencies, ContentInspectionLease, InspectionCommandInputError, type InspectionCommandOptions, WorktreeContentInspectionCommandDependencies, createContentInspectionCommand, createWorktreeContentInspectionCommand, parseInspectionQuery, renderContentInspection };