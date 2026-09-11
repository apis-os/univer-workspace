import { IExchangeOperateService } from '@univerjs-pro/exchange-client';
import { IResourceLoaderService, IUniverInstanceService } from '@univerjs/core';
import { ISlideExchangeService } from './slide-exchange.service';
export interface ISlideExchangeOperateService {
    importSlideToUnitId(): Promise<string | undefined>;
    importSlideToSnapshot(): Promise<void>;
    exportSlideByUnitId(unitId?: string, unitName?: string): Promise<void>;
    exportSlideBySnapshot(): Promise<void>;
}
export declare const ISlideExchangeOperateService: import("@wendellhu/redi").IdentifierDecorator<ISlideExchangeOperateService>;
export declare class SlideExchangeOperateService implements ISlideExchangeOperateService {
    private readonly _slideExchangeService;
    private readonly _exchangeOperateService;
    private readonly _univerInstanceService;
    private readonly _resourceLoaderService;
    constructor(_slideExchangeService: ISlideExchangeService, _exchangeOperateService: IExchangeOperateService, _univerInstanceService: IUniverInstanceService, _resourceLoaderService: IResourceLoaderService);
    importSlideToUnitId(): Promise<string | undefined>;
    importSlideToSnapshot(): Promise<void>;
    exportSlideByUnitId(unitId?: string, unitName?: string): Promise<void>;
    exportSlideBySnapshot(): Promise<void>;
    private _getCurrentSlide;
}
