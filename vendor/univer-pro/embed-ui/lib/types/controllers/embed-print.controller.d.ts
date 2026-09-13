import type { IBoardPrintElementMap, IBoardPrintElementTransformContext } from '@univerjs-pro/boards-print';
import type { IPrintPreparationContext, IPrintPreparationContribution } from '@univerjs-pro/print';
import type { ISlidePrintDrawingMap, ISlidePrintDrawingTransformContext } from '@univerjs-pro/slides-print';
import type { DisposableCollection, IDocumentData } from '@univerjs/core';
import { BoardPrintCompositionService } from '@univerjs-pro/boards-print';
import { IPrintPreparationService } from '@univerjs-pro/print';
import { SlidePrintDrawingTransformService } from '@univerjs-pro/slides-print';
import { Disposable, Injector, IUniverInstanceService } from '@univerjs/core';
import { EmbedPrintService } from '../services/embed-print.service';
type IPrintPageBreakRange = NonNullable<IPrintPreparationContext['pageBreakRanges']>[number];
interface IDocEmbedPrintDrawingLayout {
    height: number;
    segments?: IDocEmbedPrintSegment[];
    top: number;
}
interface IDocEmbedPrintSegment {
    height: number;
    sourceHeight: number;
    sourceTop: number;
    top: number;
}
interface IDocEmbedPrintPageMetrics {
    firstTop: number;
    pageStride: number;
}
interface IDocEmbedPrintLayout {
    contentHeight: number;
    contentHeightAdjustment: number;
    drawings: Map<string, IDocEmbedPrintDrawingLayout>;
    pageBreakRanges: IPrintPageBreakRange[];
}
export declare class EmbedPrintController extends Disposable implements IPrintPreparationContribution {
    private readonly _embedPrintService;
    private readonly _printPreparationService;
    private readonly _injector;
    private readonly _univerInstanceService;
    private readonly _slidePrintDrawingTransformService;
    private readonly _boardPrintCompositionService;
    private _docPrintRegistered;
    private _sheetPrintRegistered;
    private readonly _docPrintLayouts;
    constructor(_embedPrintService: EmbedPrintService, _printPreparationService: IPrintPreparationService, _injector: Injector, _univerInstanceService: IUniverInstanceService, _slidePrintDrawingTransformService: SlidePrintDrawingTransformService, _boardPrintCompositionService: BoardPrintCompositionService);
    prepare(context: IPrintPreparationContext): Promise<void>;
    private _registerPrintPreparation;
    private _resolveDocPageMetrics;
    private _registerDocPrinting;
    private _registerSheetPrinting;
    private _getOriginalSheetTabData;
    private _registerSlidePrinting;
    private _registerBoardPrinting;
    dispose(): void;
}
export declare function transformBoardEmbedPrintElements(elementMap: IBoardPrintElementMap, context: IBoardPrintElementTransformContext, embedPrintService: Pick<EmbedPrintService, 'getResource'>): IBoardPrintElementMap;
export declare function mountDocPrintImages(root: HTMLElement, snapshot: IDocumentData, hostUnitId: string, offset: {
    x: number;
    y: number;
}, bound: {
    top: number;
    left: number;
    right: number;
    bottom: number;
}, printService: EmbedPrintService, collection: DisposableCollection, layout?: IDocEmbedPrintLayout): void;
export declare function createDocEmbedPrintLayout(snapshot: IDocumentData, hostUnitId: string, printService: Pick<EmbedPrintService, 'getImage' | 'getResource'>, pageMetrics?: IDocEmbedPrintPageMetrics, segmentTableRows?: boolean, compactTableRows?: boolean): IDocEmbedPrintLayout;
export declare function mountSheetTabPrintImage(root: HTMLElement, source: string, collection: DisposableCollection, page: {
    height: number;
    offsetX: number;
    offsetY: number;
    width: number;
}): HTMLImageElement;
export declare function transformSlideEmbedPrintDrawings(drawingMap: ISlidePrintDrawingMap, context: ISlidePrintDrawingTransformContext, printService: EmbedPrintService): ISlidePrintDrawingMap;
export {};
