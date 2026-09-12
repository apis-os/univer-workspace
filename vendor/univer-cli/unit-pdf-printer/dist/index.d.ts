import { UniverPrintPdfInput, UniverPrintPdfRuntime, UniverRenderUnit } from "@univer-cli/univer-render-runtime";
//#region src/errors.d.ts
type UnitPdfPrinterErrorCode = "INVALID_INPUT" | "UNSUPPORTED_UNIT_TYPE";
declare class UnitPdfPrinterError extends Error {
  readonly code: UnitPdfPrinterErrorCode;
  constructor(code: UnitPdfPrinterErrorCode, message: string);
}
declare function isUnitPdfPrinterError(error: unknown): error is UnitPdfPrinterError;
//#endregion
//#region src/types.d.ts
type UnitPdfPrintInput = UniverPrintPdfInput;
interface UnitPdfPrintResult {
  readonly bytes: Uint8Array;
  readonly mediaType: "application/pdf";
  readonly name: string;
  readonly pageCount: number;
  readonly unitId: string;
  readonly unitType: Exclude<UniverRenderUnit["unitType"], "base">;
}
interface UnitPdfPrinterOptions {
  readonly maxPages?: number;
  readonly runtime: UniverPrintPdfRuntime;
}
interface UnitPdfPrinter {
  print(input: UnitPdfPrintInput): Promise<UnitPdfPrintResult>;
}
//#endregion
//#region src/unit-pdf-printer.d.ts
declare function createUnitPdfPrinter(options: UnitPdfPrinterOptions): UnitPdfPrinter;
//#endregion
export { type UnitPdfPrintInput, type UnitPdfPrintResult, type UnitPdfPrinter, UnitPdfPrinterError, type UnitPdfPrinterErrorCode, type UnitPdfPrinterOptions, createUnitPdfPrinter, isUnitPdfPrinterError };