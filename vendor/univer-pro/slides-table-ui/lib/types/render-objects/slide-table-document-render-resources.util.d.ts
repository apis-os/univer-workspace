import type { BooleanNumber, HorizontalAlign, IDocumentData, LocaleService } from '@univerjs/core';
import type { UniverRenderingContext } from '@univerjs/engine-render';
import { DocumentDataModel, VerticalAlign, WrapStrategy } from '@univerjs/core';
import { Documents, DocumentSkeleton, DocumentViewModel } from '@univerjs/engine-render';
export interface ICreateSlideTableDocumentRenderResourcesOptions {
    documentData: IDocumentData;
    id?: string;
    isHorizontal?: boolean;
    horizontalAlign?: HorizontalAlign;
    verticalAlign?: VerticalAlign;
    localeService: LocaleService;
    shapeTextOpticalVerticalAlign?: BooleanNumber | boolean;
    size: {
        width: number;
        height: number;
    };
    wrapStrategy?: WrapStrategy;
}
export interface ISlideTableDocumentRenderResources {
    actualHeight: number;
    contentHeight: number;
    dispose: () => void;
    documents: Documents;
    docModel: DocumentDataModel;
    docViewModel: DocumentViewModel;
    marginTop: number;
    minHeight: number;
    opticalVerticalOffset: number;
    skeleton: DocumentSkeleton;
    width: number;
}
export declare function getSlideTableTextOpticalVerticalOffset(skeleton: DocumentSkeleton, targetHeight: number, verticalAlign?: VerticalAlign): number;
export declare function prepareSlideTableDocumentRenderData(documentData: IDocumentData, options: {
    height: number;
    horizontalAlign?: HorizontalAlign;
    isHorizontal?: boolean;
    verticalAlign?: VerticalAlign;
    width: number;
    wrapStrategy?: WrapStrategy;
}): IDocumentData;
export declare function createSlideTableDocumentRenderResources(options: ICreateSlideTableDocumentRenderResourcesOptions): ISlideTableDocumentRenderResources;
export declare function resolveSlideTableDocumentClip(resources: Pick<ISlideTableDocumentRenderResources, 'actualHeight' | 'contentHeight' | 'minHeight' | 'opticalVerticalOffset'>, viewportHeight?: number): {
    top: number;
    height: number;
};
export declare function drawSlideTableDocumentRenderResources(context: UniverRenderingContext, resources: ISlideTableDocumentRenderResources, left: number, top: number, clip: boolean, viewportHeight?: number): void;
