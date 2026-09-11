import type { ICellData, IDisposable, IRange } from '@univerjs/core';
import type { FormulaUnitType } from '@univerjs/engine-formula';
import { Disposable } from '@univerjs/core';
export type FormulaReferenceDataSource = 'worker-live' | 'main-live' | 'provider' | 'ooxml-cache' | 'unavailable';
export type FormulaReferenceDataFreshness = 'fresh' | 'stale' | 'unavailable';
export interface IFormulaReferenceDataRangeRequest {
    sheetName?: string;
    sheetId?: string;
    tableName?: string;
    range?: IRange;
}
export interface IFormulaReferenceDataRequest {
    requestId: string;
    calculationId: string;
    hostUnitId: string;
    bindingSlot?: number;
    referenceId?: string;
    syntheticUnitId: string;
    target: {
        name: string;
        unitType: FormulaUnitType;
        sourceUnitId?: string;
        uri?: string;
        liveUnitId?: string;
    };
    ranges: IFormulaReferenceDataRangeRequest[];
    /** Defaults to true. Set false only when the caller explicitly accepts cached stale values. */
    requireFresh?: boolean;
}
export interface IFormulaReferenceDataCell {
    row: number;
    column: number;
    cell: ICellData;
}
export interface IFormulaReferenceDataSheet {
    name: string;
    sheetId: string;
    rowCount: number;
    columnCount: number;
    coverage: IRange[];
    cells: IFormulaReferenceDataCell[];
}
export interface IFormulaReferenceDataTable {
    name: string;
    sheetId: string;
    range: IRange;
    columns: string[];
    showHeader?: boolean;
}
export interface IFormulaReferenceDataResponse {
    requestId: string;
    calculationId: string;
    source: FormulaReferenceDataSource;
    freshness: FormulaReferenceDataFreshness;
    revision?: string;
    sheets: IFormulaReferenceDataSheet[];
    tables?: IFormulaReferenceDataTable[];
    error?: '#N/A' | '#REF!' | '#CYCLE!';
}
export interface IFormulaReferenceDataService {
    readData(request: IFormulaReferenceDataRequest): Promise<IFormulaReferenceDataResponse>;
}
export declare const IFormulaReferenceDataService: import("@wendellhu/redi").IdentifierDecorator<IFormulaReferenceDataService>;
export interface IFormulaReferenceDataProvider {
    readonly id: string;
    readonly priority?: number;
    canRead(request: IFormulaReferenceDataRequest): boolean;
    readData(request: IFormulaReferenceDataRequest): Promise<IFormulaReferenceDataResponse | undefined>;
}
export interface IFormulaReferenceDataProviderRegistry {
    register(provider: IFormulaReferenceDataProvider): IDisposable;
    getProviders(request: IFormulaReferenceDataRequest): IFormulaReferenceDataProvider[];
}
export declare const IFormulaReferenceDataProviderRegistry: import("@wendellhu/redi").IdentifierDecorator<IFormulaReferenceDataProviderRegistry>;
export declare class FormulaReferenceDataProviderRegistry extends Disposable implements IFormulaReferenceDataProviderRegistry {
    private readonly _providers;
    register(provider: IFormulaReferenceDataProvider): IDisposable;
    getProviders(request: IFormulaReferenceDataRequest): IFormulaReferenceDataProvider[];
    dispose(): void;
}
export declare function createUnavailableReferenceDataResponse(request: IFormulaReferenceDataRequest, error?: '#N/A' | '#REF!' | '#CYCLE!'): IFormulaReferenceDataResponse;
