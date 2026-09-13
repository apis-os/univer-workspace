import type { ExchangeFormat } from '@univerjs-pro/exchange-client';
import { IExchangeOperateService } from '@univerjs-pro/exchange-client';
import { IResourceLoaderService, IUniverInstanceService } from '@univerjs/core';
import { IBaseExchangeService } from './base-exchange.service';
export interface IBaseExchangeOperateService {
    importBaseToUnitId(): Promise<string | undefined>;
    importBaseToSnapshot(): Promise<void>;
    exportBaseByUnitId(format: ExchangeFormat, tableId?: string): Promise<void>;
    exportBaseBySnapshot(format: ExchangeFormat, tableId?: string): Promise<void>;
}
export declare const IBaseExchangeOperateService: import("@wendellhu/redi").IdentifierDecorator<IBaseExchangeOperateService>;
export declare class BaseExchangeOperateService implements IBaseExchangeOperateService {
    private readonly _baseExchangeService;
    private readonly _exchangeOperateService;
    private readonly _univerInstanceService;
    private readonly _resourceLoaderService;
    constructor(_baseExchangeService: IBaseExchangeService, _exchangeOperateService: IExchangeOperateService, _univerInstanceService: IUniverInstanceService, _resourceLoaderService: IResourceLoaderService);
    importBaseToUnitId(): Promise<string | undefined>;
    importBaseToSnapshot(): Promise<void>;
    exportBaseByUnitId(format: ExchangeFormat, tableId?: string): Promise<void>;
    exportBaseBySnapshot(format: ExchangeFormat, tableId?: string): Promise<void>;
    private _getCurrentBase;
}
