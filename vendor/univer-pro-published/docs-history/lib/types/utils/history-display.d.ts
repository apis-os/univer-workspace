import type { IDocumentData } from '@univerjs/core';
import type { IDocHistoryChange } from '../types';
export interface IDocHistoryDisplay {
    snapshot: IDocumentData;
    changes: IDocHistoryChange[];
}
export interface IDocHistoryDisplayStyles {
    insert: IDocHistoryDisplayStyle;
    delete: IDocHistoryDisplayStyle;
    update: IDocHistoryDisplayStyle;
}
export interface IDocHistoryDisplayStyle {
    fill: string;
    stroke: string;
}
export declare function createDocHistoryDisplay(source: IDocumentData, sourceChanges: IDocHistoryChange[], styles: IDocHistoryDisplayStyles): IDocHistoryDisplay;
