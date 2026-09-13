import type { BooleanNumber, HorizontalAlign, IDocumentData, ITextStyle, LocaleService, VerticalAlign } from '@univerjs/core';
import type { UniverRenderingContext } from '@univerjs/engine-render';
import type { IEditorUIDocumentRenderResources } from '../slide-editor/editor-ui/utils/render';
import { WrapStrategy } from '@univerjs/core';
interface IRenderDocumentTextOptions {
    key: string;
    text?: string;
    documentData?: IDocumentData;
    left: number;
    top: number;
    width: number;
    height: number;
    localeService?: LocaleService;
    textStyle?: ITextStyle;
    horizontalAlign?: HorizontalAlign;
    verticalAlign?: VerticalAlign;
    isHorizontal?: boolean;
    wrapStrategy?: WrapStrategy;
    shapeTextOpticalVerticalAlign?: BooleanNumber | boolean;
    clip?: boolean;
    sourceTop?: number;
    viewportHeight?: number;
    onTextFillImageLoaded?: () => void;
}
type IPreparedDocumentTextRenderOptions = IRenderDocumentTextOptions & {
    documentData: IDocumentData;
};
export interface IDocumentTextRenderCache {
    signature?: string;
    resources?: IEditorUIDocumentRenderResources;
    left?: number;
    top?: number;
}
export declare function disposeTextDocumentRenderCache(cache?: IDocumentTextRenderCache): void;
export declare function renderTextWithDocumentModel(ctx: UniverRenderingContext, options: IRenderDocumentTextOptions, cache?: IDocumentTextRenderCache): boolean;
export declare function renderPreparedTextWithDocumentModel(ctx: UniverRenderingContext, options: IPreparedDocumentTextRenderOptions, cache?: IDocumentTextRenderCache): boolean;
export {};
