import type { ISnapshotBlockJson, ISnapshotBlockJsonResponse } from '@univerjs-pro/exchange-client';
import type { IWorkbookData } from '@univerjs/core';
import { ExchangeFormat, IExchangeService } from '@univerjs-pro/exchange-client';
import { IConfigService } from '@univerjs/core';
export interface ISheetExchangeService {
    importSheetToUnitId(file: File | string): Promise<string | undefined>;
    importSheetToSnapshot(file: File | string): Promise<IWorkbookData | undefined>;
    exportSheetByUnitId(unitId: string, format?: ExchangeFormat, sheetId?: string): Promise<File | undefined>;
    exportSheetBySnapshot(snapshot: IWorkbookData, format?: ExchangeFormat, sheetId?: string): Promise<File | undefined>;
    transformSnapshotJsonToWorkbookData(json: ISnapshotBlockJsonResponse): Promise<IWorkbookData>;
    transformWorkbookDataToSnapshotJson(workbookData: IWorkbookData): Promise<ISnapshotBlockJson>;
}
export declare const ISheetExchangeService: import("@wendellhu/redi").IdentifierDecorator<ISheetExchangeService>;
export declare class SheetExchangeService implements ISheetExchangeService {
    private readonly _exchangeService;
    private readonly _configService;
    constructor(_exchangeService: IExchangeService, _configService: IConfigService);
    importSheetToUnitId(file: File | string): Promise<string | undefined>;
    importSheetToSnapshot(file: File | string): Promise<IWorkbookData | undefined>;
    exportSheetByUnitId(unitId: string, format?: ExchangeFormat, sheetId?: string): Promise<File | undefined>;
    exportSheetBySnapshot(snapshot: IWorkbookData, format?: ExchangeFormat, sheetId?: string): Promise<File | undefined>;
    transformSnapshotJsonToWorkbookData(json: ISnapshotBlockJsonResponse): Promise<IWorkbookData>;
    transformWorkbookDataToSnapshotJson(workbookData: IWorkbookData): Promise<ISnapshotBlockJson>;
    private _getConfig;
    private _createImportOptions;
    private _createExportOptions;
}
