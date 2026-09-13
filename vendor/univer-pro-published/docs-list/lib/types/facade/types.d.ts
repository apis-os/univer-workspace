import type { IDocsListParagraphCommandParams } from '@univerjs-pro/docs-list';
import type { ListGlyphType, PresetListType } from '@univerjs/core';
export type IDocsListOperationOptions = Pick<IDocsListParagraphCommandParams, 'mode' | 'segmentId'>;
export interface IDocsListInsertFacadeOptions {
    listType?: PresetListType;
    listId?: string;
    startOffset?: number;
    endOffset?: number;
    segmentId?: string;
}
export type IDocsListInsertParagraphFacadeOptions = Omit<IDocsListInsertFacadeOptions, 'startOffset' | 'endOffset'>;
export interface IDocsListStartNumberOptions extends IDocsListOperationOptions {
    restartFromPrevious?: boolean;
}
export interface IDocsListItemInfo {
    paragraphStartIndex: number;
    startOffset: number;
    endOffset: number;
    text: string;
    listId: string;
    listType: string;
    nestingLevel: number;
    glyphType?: ListGlyphType;
    glyphSymbol?: string;
    glyphFormat?: string;
    startNumber?: number;
    ordered: boolean;
}
export interface IDocsListInfo {
    listId: string;
    itemCount: number;
    items: IDocsListItemInfo[];
}
export interface IDocsListFindQuery {
    listId?: string;
    text?: string;
    paragraphStartIndex?: number;
    nestingLevel?: number;
}
