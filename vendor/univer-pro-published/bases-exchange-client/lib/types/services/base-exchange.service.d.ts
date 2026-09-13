import type { ISnapshotBlockJson, ISnapshotBlockJsonResponse } from '@univerjs-pro/exchange-client';
import type { IBaseSnapshot } from '@univerjs/core';
import { ExchangeFormat, IExchangeService } from '@univerjs-pro/exchange-client';
import { IConfigService } from '@univerjs/core';
export interface IBaseExchangeService {
    importBaseToUnitId(file: File | string): Promise<string | undefined>;
    importBaseToSnapshot(file: File | string): Promise<IBaseSnapshot | undefined>;
    exportBaseByUnitId(unitId: string, format?: ExchangeFormat, tableId?: string): Promise<File | undefined>;
    exportBaseBySnapshot(snapshot: IBaseSnapshot, format?: ExchangeFormat, tableId?: string): Promise<File | undefined>;
    transformSnapshotJsonToBaseData(json: ISnapshotBlockJsonResponse): Promise<IBaseSnapshot>;
    transformBaseDataToSnapshotJson(baseData: IBaseSnapshot): Promise<ISnapshotBlockJson>;
}
export declare const IBaseExchangeService: import("@wendellhu/redi").IdentifierDecorator<IBaseExchangeService>;
export declare class BaseExchangeService implements IBaseExchangeService {
    private readonly _exchangeService;
    private readonly _configService;
    constructor(_exchangeService: IExchangeService, _configService: IConfigService);
    importBaseToUnitId(file: File | string): Promise<string | undefined>;
    importBaseToSnapshot(file: File | string): Promise<IBaseSnapshot | undefined>;
    exportBaseByUnitId(unitId: string, format?: ExchangeFormat, tableId?: string): Promise<File | undefined>;
    exportBaseBySnapshot(snapshot: IBaseSnapshot, format?: ExchangeFormat, tableId?: string): Promise<File | undefined>;
    transformSnapshotJsonToBaseData(json: ISnapshotBlockJsonResponse): Promise<IBaseSnapshot>;
    transformBaseDataToSnapshotJson(baseData: IBaseSnapshot): Promise<ISnapshotBlockJson>;
    private _getConfig;
    private _createImportOptions;
    private _createExportOptions;
}
