import { ExchangeFormat, IExchangeOperateService } from '@univerjs-pro/exchange-client';
import { IResourceLoaderService, IUniverInstanceService } from '@univerjs/core';
import { ISheetExchangeService } from './sheet-exchange.service';
export interface ISheetExchangeOperateService {
    importSheetToUnitId(): Promise<string | undefined>;
    importSheetToSnapshot(): Promise<void>;
    exportSheetByUnitId(unitId?: string, unitName?: string, format?: ExchangeFormat, sheetId?: string): Promise<void>;
    exportSheetBySnapshot(format?: ExchangeFormat, sheetId?: string): Promise<void>;
}
export declare const ISheetExchangeOperateService: import("@wendellhu/redi").IdentifierDecorator<ISheetExchangeOperateService>;
export declare class SheetExchangeOperateService implements ISheetExchangeOperateService {
    private readonly _sheetExchangeService;
    private readonly _exchangeOperateService;
    private readonly _univerInstanceService;
    private readonly _resourceLoaderService;
    constructor(_sheetExchangeService: ISheetExchangeService, _exchangeOperateService: IExchangeOperateService, _univerInstanceService: IUniverInstanceService, _resourceLoaderService: IResourceLoaderService);
    importSheetToUnitId(): Promise<string | undefined>;
    importSheetToSnapshot(): Promise<void>;
    exportSheetByUnitId(unitId?: string, unitName?: string, format?: ExchangeFormat, sheetId?: string): Promise<void>;
    exportSheetBySnapshot(format?: ExchangeFormat, sheetId?: string): Promise<void>;
    private _getCurrentWorkbook;
}
