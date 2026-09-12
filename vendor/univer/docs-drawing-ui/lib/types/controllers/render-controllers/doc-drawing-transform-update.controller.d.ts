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
import type { DocumentDataModel, IDocDrawingBase, IDrawingParam, ITransformState } from '@univerjs/core';
import type { IDocsCustomBlockRenderViewport, IDocumentLayoutProgress, IDocumentSkeletonCached, IDocumentSkeletonHeaderFooter, IDocumentSkeletonPage, IDocumentSkeletonRow, IDocumentSkeletonTable, IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { AlignTypeH, AlignTypeV, BooleanNumber, Disposable, ICommandService, IUniverInstanceService, LifecycleService, ObjectRelativeFromH, ObjectRelativeFromV, PositionedObjectLayoutType } from '@univerjs/core';
import { DocSkeletonManagerService } from '@univerjs/docs';
import { IEditorService } from '@univerjs/docs-ui';
import { IDrawingManagerService } from '@univerjs/drawing';
import { DocRefreshDrawingsService } from '../../services/doc-refresh-drawings.service';
interface IDrawingParamsWithBehindText {
    unitId: string;
    subUnitId: string;
    drawingId: string;
    behindText: boolean;
    hidden?: boolean;
    selectable: boolean;
    transform: ITransformState;
    transforms: ITransformState[];
    customBlockRenderViewport?: Partial<Pick<IDocsCustomBlockRenderViewport, 'bleedLeft' | 'bleedWidth' | 'contentHeight' | 'contentWidth' | 'height' | 'pageContentWidth' | 'viewportHeight'>>;
    isMultiTransform: BooleanNumber;
}
interface IDrawingClipBounds {
    left: number;
    top: number;
    width: number;
    height: number;
}
type DrawingRefreshParam = Partial<IDrawingParam & IDrawingParamsWithBehindText>;
export declare function shouldRefreshDocDrawingTransform(current: DrawingRefreshParam | null | undefined, next: DrawingRefreshParam): boolean;
/**
 * Overlay drawings do not participate in text layout. While their skeleton
 * anchor remains valid, use the latest model transform so drag/resize/front-
 * behind changes can paint immediately without rebuilding document pages.
 */
export declare function getDocsOverlayRuntimeDrawing(skeletonDrawing: Pick<IDocDrawingBase, 'docTransform' | 'layoutType'> & Partial<IDocDrawingBase>, currentDrawing: (Pick<IDocDrawingBase, 'docTransform' | 'layoutType'> & Partial<IDocDrawingBase>) | undefined): Pick<IDocDrawingBase, 'docTransform' | 'layoutType'> & Partial<IDocDrawingBase>;
export type DocumentDrawingPublicationProgress = Pick<IDocumentLayoutProgress, 'generation' | 'didPublish' | 'complete' | 'publishedPageCount' | 'reason' | 'didPublishAnchor'>;
interface IDocumentDrawingPublicationNestedPage {
    skeDrawings: ReadonlyMap<string, unknown>;
    skeTables?: ReadonlyMap<string, {
        rows: Array<{
            cells: IDocumentDrawingPublicationNestedPage[];
        }>;
    }>;
    skeColumnGroups?: ReadonlyMap<string, {
        columns: Array<{
            page: IDocumentDrawingPublicationNestedPage;
        }>;
    }>;
}
interface IDocumentDrawingPublicationPage extends IDocumentDrawingPublicationNestedPage {
    headerId: string;
    footerId: string;
    pageWidth: number;
}
type DocumentDrawingPublicationSkeletonData = Pick<IDocumentSkeletonCached, 'skeHeaders' | 'skeFooters'> & {
    pages: IDocumentDrawingPublicationPage[];
};
export declare class DocDrawingPublicationTracker {
    private _generation;
    private _publishedPageCount;
    private _drawingOccurrenceCount;
    reset(): void;
    shouldRefresh(skeleton: {
        getSkeletonData: () => DocumentDrawingPublicationSkeletonData | null | undefined | void;
    }, progress: DocumentDrawingPublicationProgress): boolean;
}
export declare function getDocsDrawingPageClipBounds(config: {
    docsLeft: number;
    docsTop: number;
    pageOffsetLeft: number;
    pageOffsetTop: number;
    clipOffsetLeft?: number;
    clipOffsetTop?: number;
    page: Pick<IDocumentSkeletonPage | IDocumentSkeletonHeaderFooter, 'pageWidth' | 'pageHeight'>;
}): IDrawingClipBounds | undefined;
export declare function getDocsDrawingClipPage(config: {
    drawing: Pick<IDrawingParamsWithBehindText, 'behindText'> & {
        transform?: Pick<ITransformState, 'width' | 'height'>;
    };
    hostPage?: Pick<IDocumentSkeletonPage, 'pageWidth' | 'pageHeight'>;
    page: Pick<IDocumentSkeletonPage | IDocumentSkeletonHeaderFooter, 'pageWidth' | 'pageHeight'>;
}): Pick<IDocumentSkeletonPage | IDocumentSkeletonHeaderFooter, 'pageWidth' | 'pageHeight'>;
export declare function getDocsPageRelativeDrawingLeft(config: {
    hostPage: Pick<IDocumentSkeletonPage, 'pageWidth'>;
    positionH: {
        align?: AlignTypeH;
        posOffset?: number;
        relativeFrom?: ObjectRelativeFromH;
    };
    width: number;
}): number | undefined;
export declare function getDocsPageRelativeDrawingTop(config: {
    hostPage: Pick<IDocumentSkeletonPage, 'pageHeight'>;
    positionV: {
        align?: AlignTypeV;
        posOffset?: number;
        relativeFrom?: ObjectRelativeFromV;
    };
    height: number;
}): number | undefined;
export declare function getDocsPageRelativeDrawingAnchorPage(config: {
    page: Pick<IDocumentSkeletonPage | IDocumentSkeletonHeaderFooter, 'pageWidth' | 'pageHeight'>;
    clipPage: Pick<IDocumentSkeletonPage | IDocumentSkeletonHeaderFooter, 'pageWidth' | 'pageHeight'>;
    hostPage?: Pick<IDocumentSkeletonPage, 'pageWidth' | 'pageHeight'>;
}): Pick<IDocumentSkeletonPage | IDocumentSkeletonHeaderFooter, 'pageWidth' | 'pageHeight'> | undefined;
export declare function getDocsDrawingBehindText(config: {
    drawingOrigin: {
        layoutType?: PositionedObjectLayoutType;
        behindDoc?: BooleanNumber;
    };
    hostPage?: Pick<IDocumentSkeletonPage, 'pageWidth' | 'pageHeight'>;
}): boolean;
export declare function getDocsTableCellDrawingOffset(unitId: string, table: IDocumentSkeletonTable, row: IDocumentSkeletonRow, cell: IDocumentSkeletonPage): {
    left: number;
    top: number;
};
export declare class DocDrawingTransformUpdateController extends Disposable implements IRenderModule {
    private readonly _context;
    private readonly _docSkeletonManagerService;
    private readonly _commandService;
    private readonly _editorService;
    private readonly _drawingManagerService;
    private readonly _docRefreshDrawingsService;
    private _univerInstanceService;
    private _lifecycleService;
    private _liquid;
    private _changesetDrawingRefreshScheduled;
    private readonly _publicationTracker;
    constructor(_context: IRenderContext<DocumentDataModel>, _docSkeletonManagerService: DocSkeletonManagerService, _commandService: ICommandService, _editorService: IEditorService, _drawingManagerService: IDrawingManagerService, _docRefreshDrawingsService: DocRefreshDrawingsService, _univerInstanceService: IUniverInstanceService, _lifecycleService: LifecycleService);
    private _initialize;
    private _initialRenderRefresh;
    private _commandExecutedListener;
    private _scheduleChangesetDrawingRefresh;
    private _refreshCurrentDrawing;
    private _initTransformRefresh;
    private _refreshDrawing;
    private _collectPublishedPageDrawingPositions;
    private _collectSegmentDrawingPositions;
    private _getStaleNonMultiDrawings;
    private _handleMultiDrawingsTransform;
    private _calculateDrawingPosition;
    private _collectDrawingPosition;
    private _calculateTableCellDrawingPositions;
    private _calculateColumnGroupDrawingPositions;
    private _drawingInitializeListener;
}
export {};
