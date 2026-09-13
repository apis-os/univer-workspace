import type { IExchangeDocImportOption, ISnapshotBlockJson, ISnapshotBlockJsonResponse } from '@univerjs-pro/exchange-client';
import type { IDocumentData } from '@univerjs/core';
import { IExchangeService } from '@univerjs-pro/exchange-client';
export interface IDocExchangeService {
    importDocToUnitId(file: File | string, options?: IExchangeDocImportOption): Promise<string | undefined>;
    importDocToSnapshot(file: File | string, options?: IExchangeDocImportOption): Promise<IDocumentData | undefined>;
    exportDocByUnitId(unitId: string): Promise<File | undefined>;
    exportDocBySnapshot(snapshot: IDocumentData): Promise<File | undefined>;
    transformSnapshotJsonToDocumentData(json: ISnapshotBlockJsonResponse): Promise<IDocumentData>;
    transformDocumentDataToSnapshotJson(documentData: IDocumentData): Promise<ISnapshotBlockJson>;
}
export declare const IDocExchangeService: import("@wendellhu/redi").IdentifierDecorator<IDocExchangeService>;
export declare class DocExchangeService implements IDocExchangeService {
    private readonly _exchangeService;
    constructor(_exchangeService: IExchangeService);
    importDocToUnitId(file: File | string, options?: IExchangeDocImportOption): Promise<string | undefined>;
    importDocToSnapshot(file: File | string, options?: IExchangeDocImportOption): Promise<IDocumentData | undefined>;
    exportDocByUnitId(unitId: string): Promise<File | undefined>;
    exportDocBySnapshot(snapshot: IDocumentData): Promise<File | undefined>;
    transformSnapshotJsonToDocumentData(json: ISnapshotBlockJsonResponse): Promise<IDocumentData>;
    transformDocumentDataToSnapshotJson(documentData: IDocumentData): Promise<ISnapshotBlockJson>;
}
