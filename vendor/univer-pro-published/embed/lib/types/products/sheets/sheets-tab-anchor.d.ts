import type { IWorksheetData, UniverInstanceType } from '@univerjs/core';
import type { IEmbedDescriptor } from '../../types/embed';
export declare const EMBED_SHEETS_TAB_CUSTOM_KEY = "UNIVER_EMBED_SHEETS_TAB";
export interface IEmbedSheetsTabCustomData {
    version: 1;
    embedId: string;
    hostAnchorId: string;
    childType?: UniverInstanceType;
}
export interface IEmbedSheetsTabSnapshotParams {
    embedId: string;
    hostAnchorId: string;
    name?: string;
    childType?: UniverInstanceType;
}
export declare function createEmbedSheetsTabSnapshot(params: IEmbedSheetsTabSnapshotParams): IWorksheetData;
export declare function createEmbedSheetsTabCustomData(params: IEmbedSheetsTabSnapshotParams): IEmbedSheetsTabCustomData;
export declare function createEmbedSheetsTabSnapshotFromDescriptor(descriptor: IEmbedDescriptor, name?: string): IWorksheetData;
export declare function getEmbedSheetsTabCustomData(snapshot: Pick<IWorksheetData, 'custom'>): IEmbedSheetsTabCustomData | undefined;
export declare function isEmbedSheetsTabSnapshot(snapshot: Pick<IWorksheetData, 'custom'>): boolean;
