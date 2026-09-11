import type { ILogContext, ISnapshotServerService } from '@univerjs-pro/collaboration';
import type { Nullable } from '@univerjs/core';
import type { IBoardMeta, ICopyFileMetaResponse, IDocumentMeta, IFetchMissingChangesetsResponse, IGetDeserializedSheetBlockResponse, IGetLatestCsReqIdBySidResponse, IGetResourcesResponse, IGetSheetBlockRequest, IGetSheetBlockResponse, IGetUnitOnRevResponse, IPdfMeta, ISaveChangesetResponse, ISaveSheetBlockRequest, ISaveSheetBlockResponse, ISaveSnapshotResponse, ISheetBlock, ISlideMeta, ISnapshot, IWorkbookMeta, IWorksheetMeta } from '@univerjs/protocol';
export interface IWorksheetMetaJson extends Omit<IWorksheetMeta, 'originalMeta'> {
    originalMeta: string;
}
export interface IWorkbookMetaJson extends Omit<IWorkbookMeta, 'originalMeta' | 'sheets'> {
    originalMeta: string;
    sheets: {
        [key: string]: Partial<IWorksheetMetaJson>;
    };
}
export interface IDocumentMetaJson extends Omit<IDocumentMeta, 'originalMeta'> {
    originalMeta: string;
}
export interface ISlideMetaJson extends Omit<ISlideMeta, 'originalMeta'> {
    originalMeta: string;
}
export interface IBoardMetaJson extends Omit<IBoardMeta, 'originalMeta'> {
    originalMeta: string;
}
export interface IPdfMetaJson extends Omit<IPdfMeta, 'originalMeta'> {
    originalMeta: string;
}
export interface ISnapshotJson extends Omit<ISnapshot, 'workbook' | 'doc' | 'slide' | 'board' | 'pdf'> {
    workbook: Partial<IWorkbookMetaJson>;
    doc: Partial<IDocumentMetaJson>;
    slide?: Partial<ISlideMetaJson>;
    board?: Partial<IBoardMetaJson>;
    pdf?: Partial<IPdfMetaJson>;
}
export interface ISheetBlockData extends Omit<ISheetBlock, 'data'> {
    data: string;
}
export interface ISheetBlockJson {
    [key: string]: Partial<ISheetBlockData>;
}
export interface ISnapshotBlockJson {
    snapshot: ISnapshotJson;
    sheetBlocks: ISheetBlockJson;
}
export interface ISnapshotBlockJsonResponse {
    snapshot: ISnapshot;
    sheetBlocks: {
        [key: string]: ISheetBlock;
    };
}
/**
 * Convert the Uint8Array in the snapshot to a string for easy transmission to the backend
 * @param snapshot
 */
export declare function transformWorkbookSnapshotMetaToString(snapshot: ISnapshot): Nullable<ISnapshotJson>;
/**
 * Convert the Uint8Array in the sheet block to a string for easy transmission to the backend
 * @param sheetBlocks
 * @returns Encoded sheet blocks keyed by block id.
 */
export declare function transformSheetBlockMetaToString(sheetBlocks: ISheetBlock[]): ISheetBlockJson;
/**
 * The server needs to fully implement all interfaces, but when used by the client, use saveSheetBlock to cache the sheet block locally, and use getSheetBlock to obtain the sheet block.
 */
export declare class ClientSnapshotServerService implements ISnapshotServerService {
    private _sheetBlockCache;
    getUnitOnRev(): Promise<IGetUnitOnRevResponse>;
    getSheetBlock(_context: ILogContext, params: IGetSheetBlockRequest): Promise<IGetSheetBlockResponse>;
    getDeserializedSheetBlock(_context: ILogContext, params: IGetSheetBlockRequest): Promise<IGetDeserializedSheetBlockResponse>;
    fetchMissingChangesets(): Promise<IFetchMissingChangesetsResponse>;
    getResourcesRequest(): Promise<IGetResourcesResponse>;
    saveSnapshot(): Promise<ISaveSnapshotResponse>;
    updateSnapshot(): Promise<ISaveSnapshotResponse>;
    saveSheetBlock(_context: ILogContext, params: ISaveSheetBlockRequest): Promise<ISaveSheetBlockResponse>;
    saveChangeset(): Promise<ISaveChangesetResponse>;
    copyFileMeta(): Promise<ICopyFileMetaResponse>;
    getLatestCsReqIdBySid(): Promise<IGetLatestCsReqIdBySidResponse>;
}
