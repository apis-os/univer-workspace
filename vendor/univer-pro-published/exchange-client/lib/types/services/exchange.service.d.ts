import type { IDisposable, UniverInstanceType } from '@univerjs/core';
import type { IError } from '@univerjs/protocol';
import type { Observable } from 'rxjs';
import type { ExchangeFormat, IExchangeExportOptions, IExchangeImportOptions, RequestService } from './request.service';
import type { ISnapshotBlockJson } from './utils/snapshot';
import { Disposable, IConfigService } from '@univerjs/core';
import { HTTPService } from '@univerjs/network';
export declare enum RequestState {
    UPLOAD = 0,
    IMPORT = 1,
    EXPORT = 2,
    GET_TASK = 3,
    SIGN_URL = 4,
    GET_JSON = 5,
    GET_FILE = 6
}
export interface IRequestState {
    error: IError | undefined;
    state: RequestState;
}
export interface IExchangeService {
    requestState$: Observable<IRequestState>;
    /**
     * Download a file in the browser.
     */
    downloadFile(file: File | Blob, filename: string, fileExt: string): void;
    /** Resolve and fetch one file artifact by protocol file id. */
    getFileById(fileId: string, signal?: AbortSignal): Promise<File | undefined>;
    exportFileByUnitId(unitId: string, univerType: UniverInstanceType, format: ExchangeFormat, options?: IExchangeExportOptions): Promise<File | undefined>;
    exportFileBySnapshot(snapshot: ISnapshotBlockJson, univerType: UniverInstanceType, format: ExchangeFormat, options?: IExchangeExportOptions): Promise<File | undefined>;
    /**
     * Import file to unit id
     */
    importFileToUnitId(file: File | string, univerType: UniverInstanceType, options?: IExchangeImportOptions): Promise<string | undefined>;
    /**
     * Import file to json without creating a unit
     */
    importFileToJson<T = unknown>(file: File | string, univerType: UniverInstanceType, options?: IExchangeImportOptions): Promise<T | undefined>;
    interruptImportTask(): void;
}
export declare const IExchangeService: import("@wendellhu/redi").IdentifierDecorator<IExchangeService>;
export declare class ExchangeService extends Disposable implements IExchangeService, IDisposable {
    private readonly _configService;
    private readonly _httpService;
    private readonly _requestService;
    private _importTaskId;
    private readonly _requestState$;
    readonly requestState$: Observable<IRequestState>;
    constructor(_configService: IConfigService, _httpService: HTTPService, _requestService: RequestService);
    dispose(): void;
    downloadFile(file: File | Blob, filename: string, fileExt: string): void;
    getFileById(fileId: string, signal?: AbortSignal): Promise<File | undefined>;
    importFileToUnitId(file: File | string, univerType: UniverInstanceType, options?: IExchangeImportOptions): Promise<string | undefined>;
    importFileToJson<T = unknown>(file: File | string, univerType: UniverInstanceType, options?: IExchangeImportOptions): Promise<T | undefined>;
    exportFileByUnitId(unitId: string, univerType: UniverInstanceType, format: ExchangeFormat, options?: IExchangeExportOptions): Promise<File | undefined>;
    exportFileBySnapshot(snapshot: ISnapshotBlockJson, univerType: UniverInstanceType, format: ExchangeFormat, options?: IExchangeExportOptions): Promise<File | undefined>;
    interruptImportTask(): void;
    private _importToJson;
    /**
     * Export file by snapshot
     * @param snapshot
     * @param univerType
     * @returns Exported file
     */
    private _exportBySnapshot;
    private _export;
    private _upload;
    private _import;
    private _signUrl;
    private _getDownloadEndpointURL;
}
