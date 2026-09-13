import type { BaseCellValue, IBaseCellData, IBaseSnapshot, ITableSnapshot } from '@univerjs/core';
export interface IBaseRangeValuesPayload {
    unitId: string;
    tableId: string;
    patches: Array<{
        row: number;
        col: number;
        value: BaseCellValue | IBaseCellData | null;
    }>;
    trigger?: string;
}
export interface ICompressedBaseRangeValuesPayload {
    compress: true;
    kind: 'base-range-values-v1';
    u: string;
    t: string;
    p: Array<[number, number, CompressedBaseRangeValue]>;
    g?: string;
}
export interface ICompressedBaseCellData {
    c: 1;
    v?: IBaseCellData['v'];
    t?: IBaseCellData['t'];
    f?: IBaseCellData['f'];
    si?: IBaseCellData['si'];
    p?: IBaseCellData['p'];
}
export type CompressedBaseRangeValue = BaseCellValue | ICompressedBaseCellData | null;
export interface ICompressedBaseTableSnapshot extends Omit<ITableSnapshot, 'cellData'> {
    cd?: Array<[number, number, ICompressedBaseCellData]>;
}
export interface ICompressedBaseSnapshot extends Omit<IBaseSnapshot, 'tables'> {
    compress: true;
    kind: 'base-snapshot-v1';
    tables: Record<string, ICompressedBaseTableSnapshot>;
}
export declare function compressBaseRangeValuesPayload(payload: IBaseRangeValuesPayload): ICompressedBaseRangeValuesPayload;
export declare function decompressBaseRangeValuesPayload(payload: unknown): IBaseRangeValuesPayload;
export declare function isCompressedBaseRangeValuesPayload(payload: unknown): payload is ICompressedBaseRangeValuesPayload;
export declare function compressBaseSnapshot(snapshot: IBaseSnapshot): ICompressedBaseSnapshot;
export declare function decompressBaseSnapshot(snapshot: unknown): IBaseSnapshot;
export declare function isCompressedBaseSnapshot(snapshot: unknown): snapshot is ICompressedBaseSnapshot;
