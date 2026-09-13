import type { IExchangeDocImportOption } from '@univerjs-pro/exchange-client';
import { IExchangeOperateService } from '@univerjs-pro/exchange-client';
import { DocumentFlavor, IResourceLoaderService, IUniverInstanceService } from '@univerjs/core';
import { IDocExchangeService } from './doc-exchange.service';
export declare function getDocImportOptionFromDocumentFlavor(documentFlavor?: DocumentFlavor): IExchangeDocImportOption | undefined;
export interface IDocExchangeOperateService {
    importDocToUnitId(): Promise<string | undefined>;
    importDocToSnapshot(): Promise<void>;
    exportDocByUnitId(unitId?: string, unitName?: string): Promise<void>;
    exportDocBySnapshot(): Promise<void>;
}
export declare const IDocExchangeOperateService: import("@wendellhu/redi").IdentifierDecorator<IDocExchangeOperateService>;
export declare class DocExchangeOperateService implements IDocExchangeOperateService {
    private readonly _docExchangeService;
    private readonly _exchangeOperateService;
    private readonly _univerInstanceService;
    private readonly _resourceLoaderService;
    constructor(_docExchangeService: IDocExchangeService, _exchangeOperateService: IExchangeOperateService, _univerInstanceService: IUniverInstanceService, _resourceLoaderService: IResourceLoaderService);
    importDocToUnitId(): Promise<string | undefined>;
    importDocToSnapshot(): Promise<void>;
    exportDocByUnitId(unitId?: string, unitName?: string): Promise<void>;
    exportDocBySnapshot(): Promise<void>;
    private _getCurrentDocument;
}
