/**
 * Copyright 2023-present DreamNum Co., Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import type { IDocumentSkeletonColumn, IDocumentSkeletonDivide, IDocumentSkeletonDrawing, IDocumentSkeletonGlyph, IDocumentSkeletonLine, IDocumentSkeletonPage, IDocumentSkeletonSection, IDocumentSkeletonTable } from '../../../../../basics/i-document-skeleton-cached';
import type { IParagraphConfig, IParagraphTableCache, ISectionBreakConfig } from '../../../../../basics/interfaces';
import type { IFloatObject, ILayoutContext } from '../../tools';
import { BooleanNumber, GridType, SpacingRule } from '@univerjs/core';
import { BreakPointType } from '../../line-breaker/break';
declare function isGlyphGroupBeyondDivideWidth(glyphGroup: IDocumentSkeletonGlyph[], offsetLeft: number, divideWidth: number, hangingPunctuation?: boolean): boolean;
export declare function layoutParagraph(ctx: ILayoutContext, glyphGroup: IDocumentSkeletonGlyph[], pages: IDocumentSkeletonPage[], sectionBreakConfig: ISectionBreakConfig, paragraphConfig: IParagraphConfig, isParagraphFirstShapedText: boolean, breakPointType?: BreakPointType, renderBullet?: boolean): IDocumentSkeletonPage[];
declare function _adjustExplicitTabStop(divide: IDocumentSkeletonDivide, followingGlyphs: IDocumentSkeletonGlyph[], paragraphConfig: IParagraphConfig): void;
declare function __avoidFlowAffectingDrawingsForTable(table: IDocumentSkeletonTable, page: IDocumentSkeletonPage, column: IDocumentSkeletonColumn): void;
declare function _updateAndPositionTable(ctx: ILayoutContext, lineTop: number, lineHeight: number, page: IDocumentSkeletonPage, column: IDocumentSkeletonColumn, section: IDocumentSkeletonSection, skeTablesInParagraph: IParagraphTableCache[], paragraphIndex: number, sectionBreakConfig: ISectionBreakConfig, drawingAnchorTop?: number): boolean;
declare function _reLayoutCheck(ctx: ILayoutContext, floatObjects: IFloatObject[], column: IDocumentSkeletonColumn, paragraphIndex: number): void;
export declare const __testing: {
    reLayoutCheck: typeof _reLayoutCheck;
    avoidFlowAffectingDrawingsForTable: typeof __avoidFlowAffectingDrawingsForTable;
    isGlyphGroupBeyondDivideWidth: typeof isGlyphGroupBeyondDivideWidth;
    checkPageBreak: typeof __checkPageBreak;
    updateAndPositionTable: typeof _updateAndPositionTable;
    adjustExplicitTabStop: typeof _adjustExplicitTabStop;
};
export declare function getLineHeightMetrics(glyphLineHeight: number, paragraphLineGapDefault: number, linePitch: number, gridType: GridType, lineSpacing: number, spacingRule: SpacingRule, snapToGrid: BooleanNumber, useWordStyleLineHeight?: boolean, scaleAutoLineSpacingByGlyphHeight?: boolean, normalLineHeight?: number, snapAutoLineSpacingToWholeGridLines?: boolean): {
    paddingTop: number;
    paddingBottom: number;
    contentHeight: number;
    lineSpacingApply: number;
};
export declare function updateInlineDrawingPosition(line: IDocumentSkeletonLine, paragraphInlineSkeDrawings?: Map<string, IDocumentSkeletonDrawing>, unitId?: string, blockAnchorTop?: number, paragraphNonInlineSkeDrawings?: Map<string, IDocumentSkeletonDrawing>): void;
declare function __checkPageBreak(column: IDocumentSkeletonColumn): boolean;
export {};
