import { ISlideData } from "@univerjs-pro/slides";
import { IBaseSnapshot, IDocumentData, IWorkbookData, UniverInstanceType } from "@univerjs/core";
import { Buffer } from "node:buffer";
import { ISheetBlock, ISnapshot } from "@univerjs/protocol";
//#region src/types.d.ts
declare enum ExchangeFormat {
  XLS = "xls",
  XLSX = "xlsx",
  CSV = "csv",
  TSV = "tsv",
  DOC = "doc",
  DOCX = "docx",
  PPT = "ppt",
  PPTX = "pptx"
}
declare enum FormulaCalculationMode {
  FORCED = "forced",
  WHEN_EMPTY = "when_empty",
  NO = "no"
}
declare enum CsvTypeInferenceMode {
  OFF = "off",
  SAFE = "safe",
  AGGRESSIVE = "aggressive"
}
declare enum CsvQuoteStyle {
  MINIMAL = "minimal",
  ALWAYS = "always"
}
declare enum CsvLineEnding {
  LF = "lf",
  CRLF = "cr_lf"
}
declare enum CsvValueMode {
  DISPLAY = "display",
  RAW = "raw"
}
declare enum CsvFormulaMode {
  CACHED = "cached",
  EXPRESSION = "expression"
}
declare enum BaseImportMode {
  TABLES = "tables",
  SHEETS = "sheets",
  HYBRID = "hybrid",
  AUTO = "auto"
}
declare enum BaseTypeInference {
  NONE = "none",
  SAFE = "safe",
  AGGRESSIVE = "aggressive"
}
declare enum BaseFormulaPolicy {
  VALUES = "values",
  TEXT = "text",
  FAIL = "fail",
  CONVERT_THEN_VALUES = "convertThenValues"
}
declare enum BaseImagePolicy {
  SAFE = "safe",
  CELL_ONLY = "cell-only",
  MEDIA_TABLE = "media-table",
  NONE = "none"
}
declare enum BaseHeaderPolicy {
  FIRST_ROW = "firstRow",
  NONE = "none"
}
declare enum BaseExportMode {
  TABLES = "tables",
  RANGES = "ranges"
}
declare enum BaseAttachmentPolicy {
  HYBRID = "hybrid",
  MANIFEST = "manifest",
  LINKS = "links",
  NONE = "none"
}
declare enum DocxCompatibilityMode {
  TRADITIONAL = "traditional",
  MODERN = "modern"
}
interface IBaseFieldMapping {
  name?: string;
  type?: string;
  config?: unknown;
  formulaPolicy?: BaseFormulaPolicy;
}
interface IBaseTableMapping {
  include?: boolean;
  name?: string;
  primaryField?: string;
  header?: BaseHeaderPolicy;
  formulaPolicy?: BaseFormulaPolicy;
  fields?: Record<string, IBaseFieldMapping>;
}
interface IBaseImportMapping {
  selectedOnly?: boolean;
  tables?: Record<string, IBaseTableMapping>;
  sheets?: Record<string, IBaseTableMapping>;
}
interface IBaseExportMapping {
  tables?: Record<string, {
    name?: string;
    fields?: Record<string, {
      name?: string;
    }>;
  }>;
}
interface ICsvImportOptions {
  delimiter?: 'auto' | 'comma' | 'tab' | 'semicolon' | 'pipe' | 'space' | string;
  quote?: 'auto' | 'none' | 'double' | 'single' | string;
  encoding?: string;
  inferTypes?: CsvTypeInferenceMode;
}
type ICsvExportSelector = {
  worksheetId: string;
  worksheetName?: never;
  tableId?: never;
  tableName?: never;
} | {
  worksheetId?: never;
  worksheetName: string;
  tableId?: never;
  tableName?: never;
} | {
  worksheetId?: never;
  worksheetName?: never;
  tableId: string;
  tableName?: never;
} | {
  worksheetId?: never;
  worksheetName?: never;
  tableId?: never;
  tableName: string;
};
type ICsvExportOptions = ICsvExportSelector & {
  delimiter?: 'comma' | 'tab' | 'semicolon' | 'pipe' | 'space' | string;
  quoteStyle?: CsvQuoteStyle;
  lineEnding?: CsvLineEnding;
  encoding?: string;
  valueMode?: CsvValueMode;
  formulaMode?: CsvFormulaMode;
};
interface IImportOptionsBase<TType extends UniverInstanceType, TFormat extends ExchangeFormat> {
  type: TType;
  format?: TFormat;
  fileName?: string;
  unitId?: string;
}
interface IGridImportOptions {
  minSheetRowCount?: number;
  minSheetColumnCount?: number;
}
type ISheetImportOptions = IGridImportOptions & ((IImportOptionsBase<UniverInstanceType.UNIVER_SHEET, ExchangeFormat.XLS> & {
  csv?: never;
  formulaCalculation?: never;
}) | (IImportOptionsBase<UniverInstanceType.UNIVER_SHEET, ExchangeFormat.XLSX> & {
  csv?: never;
  formulaCalculation?: FormulaCalculationMode;
}) | (IImportOptionsBase<UniverInstanceType.UNIVER_SHEET, ExchangeFormat.CSV | ExchangeFormat.TSV> & {
  csv?: ICsvImportOptions;
  formulaCalculation?: never;
}));
interface IBaseImportConfig extends IGridImportOptions {
  mode?: BaseImportMode;
  typeInference?: BaseTypeInference;
  formulaPolicy?: BaseFormulaPolicy;
  imagePolicy?: BaseImagePolicy;
  maxCells?: number | null;
  mapping?: IBaseImportMapping;
}
type IBaseImportOptions = IBaseImportConfig & ((IImportOptionsBase<UniverInstanceType.UNIVER_BASE, ExchangeFormat.XLS | ExchangeFormat.XLSX> & {
  csv?: never;
}) | (IImportOptionsBase<UniverInstanceType.UNIVER_BASE, ExchangeFormat.CSV | ExchangeFormat.TSV> & {
  csv?: ICsvImportOptions;
}));
interface IDocImportOptions extends IImportOptionsBase<UniverInstanceType.UNIVER_DOC, ExchangeFormat.DOC | ExchangeFormat.DOCX> {
  compatibilityMode?: DocxCompatibilityMode;
}
interface ISlideImportOptions extends IImportOptionsBase<UniverInstanceType.UNIVER_SLIDE, ExchangeFormat.PPT | ExchangeFormat.PPTX> {}
type ImportOptions = ISheetImportOptions | IBaseImportOptions | IDocImportOptions | ISlideImportOptions;
type BufferImportOptions<T extends ImportOptions = ImportOptions> = T & {
  fileName: string;
};
interface IExportOptionsBase<TType extends UniverInstanceType, TFormat extends ExchangeFormat> {
  type: TType;
  format: TFormat;
}
interface ISheetExportConfig {
  /** @default FormulaCalculationMode.WHEN_EMPTY */
  formulaCalculation?: FormulaCalculationMode;
}
type ISheetExportOptions = ISheetExportConfig & ((IExportOptionsBase<UniverInstanceType.UNIVER_SHEET, ExchangeFormat.XLSX> & {
  csv?: never;
}) | (IExportOptionsBase<UniverInstanceType.UNIVER_SHEET, ExchangeFormat.CSV | ExchangeFormat.TSV> & {
  csv: ICsvExportOptions;
}));
interface IBaseXlsxExportConfig {
  mode?: BaseExportMode;
  formulaPolicy?: BaseFormulaPolicy;
  attachmentPolicy?: BaseAttachmentPolicy;
  mapping?: IBaseExportMapping;
}
type IBaseExportOptions = (IExportOptionsBase<UniverInstanceType.UNIVER_BASE, ExchangeFormat.XLSX> & IBaseXlsxExportConfig & {
  csv?: never;
}) | (IExportOptionsBase<UniverInstanceType.UNIVER_BASE, ExchangeFormat.CSV | ExchangeFormat.TSV> & {
  csv: ICsvExportOptions;
});
interface IDocExportOptions extends IExportOptionsBase<UniverInstanceType.UNIVER_DOC, ExchangeFormat.DOCX> {}
interface ISlideExportOptions extends IExportOptionsBase<UniverInstanceType.UNIVER_SLIDE, ExchangeFormat.PPTX> {}
type ExportOptions = ISheetExportOptions | IBaseExportOptions | IDocExportOptions | ISlideExportOptions;
interface ISnapshotWithBlocks {
  snapshot: ISnapshot;
  sheetBlocks: ISheetBlock[];
}
declare enum ExchangeErrorCode {
  INVALID_ARGUMENT = "INVALID_ARGUMENT",
  UNSUPPORTED_FORMAT = "UNSUPPORTED_FORMAT",
  INVALID_FILE = "INVALID_FILE",
  INCOMPLETE_SNAPSHOT = "INCOMPLETE_SNAPSHOT",
  IO_ERROR = "IO_ERROR",
  NATIVE_LOAD_FAILED = "NATIVE_LOAD_FAILED",
  CONVERSION_FAILED = "CONVERSION_FAILED"
}
declare class ExchangeError extends Error {
  readonly code: ExchangeErrorCode;
  readonly name = "ExchangeError";
  constructor(code: ExchangeErrorCode, message: string, options?: {
    cause?: unknown;
  });
}
//#endregion
//#region src/index.d.ts
declare function importFile(path: string, options: ISheetImportOptions): Promise<IWorkbookData>;
declare function importFile(path: string, options: IBaseImportOptions): Promise<IBaseSnapshot>;
declare function importFile(path: string, options: IDocImportOptions): Promise<IDocumentData>;
declare function importFile(path: string, options: ISlideImportOptions): Promise<ISlideData>;
declare function importBuffer(input: Buffer, options: BufferImportOptions<ISheetImportOptions>): Promise<IWorkbookData>;
declare function importBuffer(input: Buffer, options: BufferImportOptions<IBaseImportOptions>): Promise<IBaseSnapshot>;
declare function importBuffer(input: Buffer, options: BufferImportOptions<IDocImportOptions>): Promise<IDocumentData>;
declare function importBuffer(input: Buffer, options: BufferImportOptions<ISlideImportOptions>): Promise<ISlideData>;
declare function importFileToSnapshot(path: string, options: ImportOptions): Promise<ISnapshotWithBlocks>;
declare function importBufferToSnapshot<T extends ImportOptions>(input: Buffer, options: BufferImportOptions<T>): Promise<ISnapshotWithBlocks>;
declare function exportToBuffer(data: IWorkbookData, options: ISheetExportOptions): Promise<Buffer>;
declare function exportToBuffer(data: IBaseSnapshot, options: IBaseExportOptions): Promise<Buffer>;
declare function exportToBuffer(data: IDocumentData, options: IDocExportOptions): Promise<Buffer>;
declare function exportToBuffer(data: ISlideData, options: ISlideExportOptions): Promise<Buffer>;
declare function exportToFile(data: IWorkbookData, path: string, options: ISheetExportOptions): Promise<void>;
declare function exportToFile(data: IBaseSnapshot, path: string, options: IBaseExportOptions): Promise<void>;
declare function exportToFile(data: IDocumentData, path: string, options: IDocExportOptions): Promise<void>;
declare function exportToFile(data: ISlideData, path: string, options: ISlideExportOptions): Promise<void>;
declare function exportSnapshotToBuffer(snapshot: ISnapshotWithBlocks, options: ExportOptions): Promise<Buffer>;
declare function exportSnapshotToFile(snapshot: ISnapshotWithBlocks, path: string, options: ExportOptions): Promise<void>;
//#endregion
export { BaseAttachmentPolicy, BaseExportMode, BaseFormulaPolicy, BaseHeaderPolicy, BaseImagePolicy, BaseImportMode, BaseTypeInference, BufferImportOptions, CsvFormulaMode, CsvLineEnding, CsvQuoteStyle, CsvTypeInferenceMode, CsvValueMode, DocxCompatibilityMode, ExchangeError, ExchangeErrorCode, ExchangeFormat, ExportOptions, FormulaCalculationMode, IBaseExportMapping, IBaseExportOptions, IBaseFieldMapping, IBaseImportMapping, IBaseImportOptions, IBaseTableMapping, ICsvExportOptions, ICsvExportSelector, ICsvImportOptions, IDocExportOptions, IDocImportOptions, IExportOptionsBase, IGridImportOptions, IImportOptionsBase, ISheetExportOptions, ISheetImportOptions, ISlideExportOptions, ISlideImportOptions, ISnapshotWithBlocks, ImportOptions, exportSnapshotToBuffer, exportSnapshotToFile, exportToBuffer, exportToFile, importBuffer, importBufferToSnapshot, importFile, importFileToSnapshot };