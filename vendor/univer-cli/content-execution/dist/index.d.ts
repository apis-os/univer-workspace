//#region src/errors.d.ts
type ContentExecutionErrorCode = "CONTENT_EXECUTION_INVALID_INPUT" | "CONTENT_EXECUTION_RESERVED_BINDING" | "CONTENT_EXECUTION_UNIT_TYPE_UNSUPPORTED";
declare class ContentExecutionError extends Error {
  readonly code: ContentExecutionErrorCode;
  readonly details?: Readonly<Record<string, unknown>> | undefined;
  constructor(code: ContentExecutionErrorCode, message: string, details?: Readonly<Record<string, unknown>> | undefined);
}
//#endregion
//#region src/program.d.ts
type ContentExecutionUnitType = "sheet" | "doc" | "slide" | "base" | "board";
interface PrepareContentExecutionProgramInput {
  readonly code: string;
  readonly unitId: string;
  readonly unitType: ContentExecutionUnitType;
}
declare function prepareContentExecutionProgram(input: PrepareContentExecutionProgramInput): string;
//#endregion
export { ContentExecutionError, type ContentExecutionErrorCode, type ContentExecutionUnitType, type PrepareContentExecutionProgramInput, prepareContentExecutionProgram };