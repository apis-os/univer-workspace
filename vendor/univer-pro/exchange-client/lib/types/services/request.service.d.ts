import type { IDisposable, UniverInstanceType } from '@univerjs/core';
import type { IError } from '@univerjs/protocol';
import type { ISheetBlockJson, ISnapshotJson } from './utils/snapshot';
import { IConfigService } from '@univerjs/core';
import { HTTPService } from '@univerjs/network';
export interface IFileUploadResponse {
    FileId: string;
    error: IError;
}
export declare enum ImportOutputType {
    UNDEFINED = 0,
    /** UNIT - Import to univer unit, unit is store in the database */
    UNIT = 1,
    /** JSON - Import and convert to a json file which represents a univer unit, not store in the database */
    JSON = 2,
    UNRECOGNIZED = -1
}
export declare enum ExchangeFormat {
    XLSX = "xlsx",
    CSV = "csv",
    TSV = "tsv",
    DOCX = "docx",
    PPTX = "pptx",
    PDF = "pdf"
}
export declare enum ExchangeDocType {
    MODERN = "modern",
    TRADITIONAL = "traditional"
}
export declare enum ExchangeBaseImportMode {
    /**
     * Select the source automatically. Imports visible worksheets when no native Excel table exists;
     * otherwise imports native Excel tables and any visible worksheets that do not contain one.
     */
    AUTO = "auto",
    /** Import only native Excel tables. */
    TABLES = "tables",
    /** Import each visible worksheet as a Base table. */
    SHEETS = "sheets",
    /** Import native Excel tables plus visible worksheets that do not contain a native Excel table. */
    HYBRID = "hybrid"
}
export declare enum ExchangeBaseFormulaPolicy {
    /**
     * Try to convert formulas. Import falls back to cached values when conversion fails;
     * export fails when a formula cannot be converted.
     */
    CONVERT_THEN_VALUES = "convert-then-values",
    /** Do not convert formulas; use their cached result values. */
    VALUES = "values",
    /** Do not convert formulas; preserve the source formulas as plain text. */
    TEXT = "text",
    /** Require every formula to be converted successfully, otherwise fail the operation. */
    FAIL = "fail"
}
export declare enum ExchangeBaseExportMode {
    /** Export each non-empty Base table as a native Excel table. Empty tables remain ordinary ranges. */
    TABLES = "tables",
    /** Export Base tables as ordinary worksheet ranges without native Excel table metadata. */
    RANGES = "ranges"
}
export interface IExchangeSheetImportOption {
    minSheetColumnCount?: number;
    minSheetRowCount?: number;
}
export interface IExchangeSheetExportOption {
    useImageUrl?: boolean;
    csv?: {
        sheetId?: string;
    };
}
export interface IExchangeBaseImportOption {
    xlsx?: {
        baseMode?: ExchangeBaseImportMode;
        baseFormulaPolicy?: ExchangeBaseFormulaPolicy;
    };
}
export interface IExchangeBaseExportOption {
    csv?: {
        tableId?: string;
    };
    xlsx?: {
        baseExportMode?: ExchangeBaseExportMode;
        baseFormulaPolicy?: ExchangeBaseFormulaPolicy;
    };
}
export interface IExchangeDocImportOption {
    docType?: ExchangeDocType;
}
export interface IExchangeImportOptions {
    sheet?: IExchangeSheetImportOption;
    base?: IExchangeBaseImportOption;
    doc?: IExchangeDocImportOption;
}
export interface IExchangeExportOptions {
    sheet?: IExchangeSheetExportOption;
    base?: IExchangeBaseExportOption;
}
export interface IImportRequest {
    fileID: string;
    type: UniverInstanceType;
    outputType: ImportOutputType;
    options?: IExchangeImportOptions;
}
export interface IImportResponse {
    taskID: string;
    error: IError;
}
export interface IExportRequest {
    /** If unitID is specified, the input is the unit in the database */
    unitID?: string;
    /** If jsonID is specified, the input is the json file which represents a univer unit */
    jsonID?: string;
    type: UniverInstanceType;
    format: ExchangeFormat;
    options?: IExchangeExportOptions;
}
export interface IExportResponse {
    error: IError | undefined;
    taskID: string;
}
export interface IGetTaskResponse {
    error: IError | undefined;
    taskID: string;
    status: string;
    import?: IImportTaskResult | undefined;
    export?: IExportTaskResult | undefined;
}
export interface IImportTaskResult {
    outputType: ImportOutputType;
    unitID: string;
    jsonID: string;
}
export interface IExportTaskResult {
    fileID: string;
    fileUrl: string;
}
export interface ISignUrlResponse {
    error: IError | undefined;
    url: string;
}
export interface IBindingResponse {
    error: IError;
}
export interface ISnapshotJsonResponse {
    snapshot: Partial<ISnapshotJson>;
    sheetBlocks: ISheetBlockJson;
}
export interface IRequestService {
    setTaskInterrupted(taskID: string): void;
    clearTaskInterrupted(): void;
    upload(file: File | string): Promise<IFileUploadResponse | undefined>;
    import(importRequest: IImportRequest): Promise<IImportResponse | undefined>;
    export(exportRequest: IExportRequest): Promise<IExportResponse | undefined>;
    getTask(taskID: string): Promise<IGetTaskResponse | undefined>;
    signUrl(fileID: string): Promise<ISignUrlResponse | undefined>;
    getTextFromUrl(url: string): Promise<string | undefined>;
}
export declare const IRequestService: import("@wendellhu/redi").IdentifierDecorator<IRequestService>;
/**
 * TODO@Dushusir maybe move to ExchangeClientPlugin plugin for reuse
 */
export declare class RequestService implements IRequestService, IDisposable {
    private readonly _configService;
    private readonly _httpService;
    private _taskInterrupted;
    constructor(_configService: IConfigService, _httpService: HTTPService);
    dispose(): void;
    setTaskInterrupted(taskID: string): void;
    clearTaskInterrupted(): void;
    /**
     * upload file to server
     * @param file
     */
    upload(file: File | string, size?: number, flate?: boolean): Promise<IFileUploadResponse>;
    import(importRequest: IImportRequest): Promise<IImportResponse | undefined>;
    export(exportRequest: IExportRequest): Promise<IExportResponse | undefined>;
    getTask(taskID: string): Promise<IGetTaskResponse | undefined>;
    signUrl(fileID: string): Promise<ISignUrlResponse | undefined>;
    getTextFromUrl(url: string): Promise<string | undefined>;
    private _buildProtocolErrorMessage;
    private _buildHttpErrorMessage;
    private _extractErrorDetail;
    private _getUploadFileURL;
    private _getImportURL;
    private _getExportURL;
    private _getTaskURL;
    private _getSignURL;
    private _getMaxPollingTime;
}
