import type { IDocumentData } from '@univerjs/core';
import type { ITextRangeWithStyle } from '@univerjs/engine-render';
import { ListGlyphType } from '@univerjs/core';
import { DocsListSelectionMode } from './type';
export interface IGetListSelectionRangesParams {
    documentData: IDocumentData;
    paragraphStartIndex: number;
    mode: DocsListSelectionMode;
    segmentId?: string;
}
export interface ISetListGlyphTypeActionParams {
    documentData: IDocumentData;
    paragraphStartIndex: number;
    glyphType: ListGlyphType;
    mode?: DocsListSelectionMode;
}
export interface ISetListGlyphSymbolActionParams {
    documentData: IDocumentData;
    paragraphStartIndex: number;
    symbol: string;
    mode?: DocsListSelectionMode;
}
export interface ISetListPrefixSuffixActionParams {
    documentData: IDocumentData;
    paragraphStartIndex: number;
    prefix: string;
    suffix: string;
    mode?: DocsListSelectionMode;
}
export interface ISetListStartNumberActionParams {
    documentData: IDocumentData;
    paragraphStartIndex: number;
    startNumber: number;
    mode?: DocsListSelectionMode;
    restartFromPrevious?: boolean;
}
export interface IChangeListNestingLevelActionParams {
    documentData: IDocumentData;
    paragraphStartIndex: number;
    delta: number;
    mode: DocsListSelectionMode;
}
export interface IDocsListActionResult {
    nextDocumentData: IDocumentData;
}
export declare function getListSelectionRanges(params: IGetListSelectionRangesParams): ITextRangeWithStyle[];
export declare function buildSetListGlyphTypeActions(params: ISetListGlyphTypeActionParams): IDocsListActionResult;
export declare function buildSetListGlyphSymbolActions(params: ISetListGlyphSymbolActionParams): IDocsListActionResult;
export declare function buildSetListPrefixSuffixActions(params: ISetListPrefixSuffixActionParams): IDocsListActionResult;
export declare function buildSetListStartNumberActions(params: ISetListStartNumberActionParams): IDocsListActionResult;
export declare function buildChangeListNestingLevelActions(params: IChangeListNestingLevelActionParams): IDocsListActionResult;
