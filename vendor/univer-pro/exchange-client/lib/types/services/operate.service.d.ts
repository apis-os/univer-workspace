import type { IDisposable, UniverInstanceType } from '@univerjs/core';
import type { Observable } from 'rxjs';
import type { ExchangeService } from './exchange.service';
import type { UploadNotificationService } from './upload-notification.service';
import { Disposable, ILogService, IUniverInstanceService, LocaleService } from '@univerjs/core';
import { IMessageService } from '@univerjs/ui';
type UnitImporter = (file: File) => Promise<string | undefined>;
export interface IExchangeOperateService {
    interrupt(): void;
    importFileToUnitId(type: UniverInstanceType, importer: UnitImporter): Promise<string | undefined>;
    retryImportFileToUnitId(): Promise<string | undefined>;
    importFileAsSnapshot<T>(type: UniverInstanceType, importer: (file: File) => Promise<T | undefined>): Promise<T | undefined>;
    importFileToSnapshot<T>(type: UniverInstanceType, importer: (file: File) => Promise<T | undefined>): Promise<void>;
    exportFile(exporter: () => Promise<File | undefined>, unitName: string | undefined, fileExt: string): Promise<void>;
    /**
     * Customize the imported Unit URL format according to the needs of your own scene
     */
    registerLink(getLink: (unitId: string, univerType: UniverInstanceType) => string): void;
    /**
     * Observable of upload progress
     */
    progress$: Observable<IUploadProgress>;
}
export interface IUploadProgress {
    /** Task that already completed. */
    done: number;
    /** The total number of tasks need to execute. */
    count: number;
}
export declare const IExchangeOperateService: import("@wendellhu/redi").IdentifierDecorator<IExchangeOperateService>;
export declare class ExchangeOperateService extends Disposable implements IExchangeOperateService, IDisposable {
    private _univerInstanceService;
    private readonly _messageService;
    private readonly _localeService;
    private readonly _exchangeService;
    private readonly _uploadNotificationService;
    protected readonly _logService: ILogService;
    private readonly _progress$;
    readonly progress$: Observable<IUploadProgress>;
    private _totalUploadTaskCount;
    private _doneUploadTaskCount;
    private _isSelectingUnitImportFile;
    private _lastUnitImportContext;
    constructor(_univerInstanceService: IUniverInstanceService, _messageService: IMessageService, _localeService: LocaleService, _exchangeService: ExchangeService, _uploadNotificationService: UploadNotificationService, _logService: ILogService);
    interrupt(): void;
    importFileToUnitId(type: UniverInstanceType, importer: UnitImporter): Promise<string | undefined>;
    retryImportFileToUnitId(): Promise<string | undefined>;
    importFileToSnapshot<T>(type: UniverInstanceType, importer: (file: File) => Promise<T | undefined>): Promise<void>;
    importFileAsSnapshot<T>(type: UniverInstanceType, importer: (file: File) => Promise<T | undefined>): Promise<T | undefined>;
    exportFile(exporter: () => Promise<File | undefined>, unitName: string | undefined, fileExt: string): Promise<void>;
    registerLink(getLink: (unitId: string, univerType: UniverInstanceType) => string): void;
    private _importFileToUnitId;
    private _refreshUnit;
    /**
     * Get unit link /?unit={unitId}&type=2
     */
    private _getLinkByUnitId;
    private _showNetworkError;
    private _showDownloadMessage;
    private _showUploadMessage;
    private _emitProgress;
    private _addTotalCount;
    private _addDoneTask;
    private _completeProgress;
    private _clearProgress;
    /**
     * Although we have specified the supported file types in advance, users can still switch to select all types of files.
     * In order to prevent such unsupported files from being transmitted to the server, they need to be intercepted in advance.
     */
    private _fileTypeError;
    private _uploadTaskNotDone;
}
export {};
