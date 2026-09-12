import type { IGroupBaseBound } from '@univerjs/core';
import type { ISheetDrawingPlacement } from '@univerjs/sheets-drawing';
import type { EmbedHostEntryEnum, IEmbedDescriptor } from './embed';
export interface IEmbedUnresolvedHostContext {
    resolved: false;
    entry: IEmbedDescriptor['entry'];
}
export interface IEmbedSheetsFloatingHostContext {
    resolved: true;
    entry: typeof EmbedHostEntryEnum.SheetsFloatingObject;
    subUnitId: string;
    bounds: IGroupBaseBound;
    placement: ISheetDrawingPlacement;
}
export interface IEmbedBoardsFloatingHostContext {
    resolved: true;
    entry: typeof EmbedHostEntryEnum.BoardsFloatingObject;
    subUnitId: string;
    bounds: IGroupBaseBound;
}
export interface IEmbedSlidesFloatingHostContext {
    resolved: true;
    entry: typeof EmbedHostEntryEnum.SlidesFloatingObject;
    subUnitId: string;
    bounds: IGroupBaseBound;
}
export interface IEmbedSheetsTabHostContext {
    resolved: true;
    entry: typeof EmbedHostEntryEnum.SheetsSheetTab;
    subUnitId: string;
    index: number;
    name: string;
}
export interface IEmbedBasesTableListHostContext {
    resolved: true;
    entry: typeof EmbedHostEntryEnum.BasesTableListBlock;
    tableId: string;
    index: number;
    name: string;
}
export interface IEmbedSlidesPageListHostContext {
    resolved: true;
    entry: typeof EmbedHostEntryEnum.SlidesPageListBlock;
    pageId: string;
    index: number;
    name: string;
}
export interface IEmbedDocsCustomBlockHostContext {
    resolved: true;
    entry: typeof EmbedHostEntryEnum.DocsCustomBlock;
    blockId: string;
    startIndex: number;
    index: number;
}
export type EmbedHostContext = IEmbedUnresolvedHostContext | IEmbedSheetsFloatingHostContext | IEmbedBoardsFloatingHostContext | IEmbedSlidesFloatingHostContext | IEmbedSheetsTabHostContext | IEmbedBasesTableListHostContext | IEmbedSlidesPageListHostContext | IEmbedDocsCustomBlockHostContext;
/**
 * A detached Facade snapshot. `context` is resolved from the current host
 * model and is never persisted with the descriptor.
 */
export type IEmbedDescriptorSnapshot = IEmbedDescriptor & {
    context: EmbedHostContext;
};
