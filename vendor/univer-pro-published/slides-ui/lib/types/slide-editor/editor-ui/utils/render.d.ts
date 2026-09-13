import type { BooleanNumber, HorizontalAlign, IDocumentData, LocaleService, WrapStrategy } from '@univerjs/core';
import type { IEditorUIDocumentLayout, IEditorUILayoutMeasurement, IEditorUIRect } from '../types';
import { DocumentDataModel, VerticalAlign } from '@univerjs/core';
import { Documents, DocumentSkeleton, DocumentViewModel, UniverRenderingContext } from '@univerjs/engine-render';
export interface IRenderEditorUIDocumentBaseOptions {
    documentData: IDocumentData;
    size: Pick<IEditorUIRect, 'width' | 'height'>;
    localeService: LocaleService;
    id?: string;
    horizontalAlign?: HorizontalAlign;
    verticalAlign?: VerticalAlign;
    isHorizontal?: boolean;
    wrapStrategy?: WrapStrategy;
    shapeTextOpticalVerticalAlign?: BooleanNumber | boolean;
    onTextFillImageLoaded?: () => void;
}
export interface IRenderEditorUIDocumentToCanvasOptions extends IRenderEditorUIDocumentBaseOptions {
    canvas: HTMLCanvasElement;
    layout?: IEditorUIDocumentLayout;
    pixelRatio?: number;
    clip?: boolean;
}
export interface IRenderEditorUIDocumentToContextOptions extends IRenderEditorUIDocumentBaseOptions {
    context: UniverRenderingContext;
    clip?: boolean;
}
export interface IRenderEditorUIDocumentToCanvasResult extends IEditorUILayoutMeasurement {
    dispose: () => void;
}
export interface IEditorUIDocumentRenderResources extends IRenderEditorUIDocumentToCanvasResult {
    documents: Documents;
    skeleton: DocumentSkeleton;
    docViewModel: DocumentViewModel;
    docModel: DocumentDataModel;
    contentVerticalOffset: number;
    opticalVerticalOffset: number;
    isHorizontal: boolean;
}
export declare function resolveEditorUIDocumentFlowSize(size: Pick<IEditorUIRect, 'width' | 'height'>, isHorizontal?: boolean): {
    pageWidth: number;
    alignmentExtent: number;
    renderHeight: number;
};
export declare function resolveEditorUIDocumentSurfaceHeight(layoutContentHeight: number, viewportHeight: number, isHorizontal?: boolean): number;
export declare function renderEditorUIDocumentToCanvas(options: IRenderEditorUIDocumentToCanvasOptions): IRenderEditorUIDocumentToCanvasResult;
export declare function renderEditorUIDocumentToContext(options: IRenderEditorUIDocumentToContextOptions): IRenderEditorUIDocumentToCanvasResult;
export declare function drawEditorUIDocumentResources(context: UniverRenderingContext, resources: IEditorUIDocumentRenderResources, clip: boolean): void;
export declare function createEditorUIDocumentRenderResources(options: IRenderEditorUIDocumentBaseOptions): IEditorUIDocumentRenderResources;
export declare function createPreparedEditorUIDocumentRenderResources(options: IRenderEditorUIDocumentBaseOptions): IEditorUIDocumentRenderResources;
