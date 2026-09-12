import type { ICommand, IDocumentData, JSONXActions, ListGlyphType, PresetListType } from '@univerjs/core';
import { DocsListSelectionMode } from '../common/type';
export interface IDocsListInsertCommandParams {
    unitId?: string;
    listType: PresetListType;
    listId?: string;
    startOffset?: number;
    endOffset?: number;
    segmentId?: string;
}
export interface IDocsListParagraphCommandParams {
    unitId?: string;
    paragraphStartIndex: number;
    segmentId?: string;
    mode?: DocsListSelectionMode;
}
export interface IDocsListSetGlyphTypeCommandParams extends IDocsListParagraphCommandParams {
    glyphType: ListGlyphType;
}
export interface IDocsListSetGlyphSymbolCommandParams extends IDocsListParagraphCommandParams {
    symbol: string;
}
export interface IDocsListSetPrefixSuffixCommandParams extends IDocsListParagraphCommandParams {
    prefix: string;
    suffix: string;
}
export interface IDocsListSetStartNumberCommandParams extends IDocsListParagraphCommandParams {
    startNumber: number;
    restartFromPrevious?: boolean;
}
export interface IDocsListChangeNestingLevelCommandParams extends IDocsListParagraphCommandParams {
    delta: number;
}
export declare const DocsListInsertCommand: ICommand<IDocsListInsertCommandParams>;
export declare const DocsListSelectCommand: ICommand<IDocsListParagraphCommandParams>;
export declare const DocsListSetGlyphTypeCommand: ICommand<IDocsListSetGlyphTypeCommandParams>;
export declare const DocsListSetGlyphSymbolCommand: ICommand<IDocsListSetGlyphSymbolCommandParams>;
export declare const DocsListSetPrefixSuffixCommand: ICommand<IDocsListSetPrefixSuffixCommandParams>;
export declare const DocsListSetStartNumberCommand: ICommand<IDocsListSetStartNumberCommandParams>;
export declare const DocsListPromoteCommand: ICommand<IDocsListParagraphCommandParams>;
export declare const DocsListDemoteCommand: ICommand<IDocsListParagraphCommandParams>;
export declare function buildStructuralListActions(previousDocumentData: IDocumentData, nextDocumentData: IDocumentData): JSONXActions | null;
