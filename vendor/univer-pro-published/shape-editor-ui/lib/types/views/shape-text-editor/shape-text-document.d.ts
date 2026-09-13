import type { ICustomShapeTextData, IShapeRect, IShapeText, IShapeTextBodyBehavior, IShapeTextDataModel } from '@univerjs-pro/engine-shape';
import type { IDocumentData, Nullable } from '@univerjs/core';
import type { Editor } from '@univerjs/docs-ui';
import type { IShapeTextDataContext } from './types';
import { HorizontalAlign, VerticalAlign, WrapStrategy } from '@univerjs/core';
interface IPrepareShapeTextDocumentOptions {
    bodyBehavior?: IShapeTextBodyBehavior;
    isHorizontal: boolean;
    textRect: IShapeRect;
    verticalAlign?: VerticalAlign;
    horizontalAlign?: HorizontalAlign;
    wrapStrategy?: WrapStrategy;
}
interface IShapeTextDocumentAlignmentOptions {
    bodyBehavior?: IShapeTextBodyBehavior;
    verticalAlign?: VerticalAlign;
    horizontalAlign?: HorizontalAlign;
}
export declare function plainShapeTextToDocumentData(shapeText: IShapeText, id?: string): IDocumentData;
export declare function resolveShapeTextDocumentAlignment(documentData: IDocumentData, fallback?: IShapeTextDocumentAlignmentOptions): IShapeTextDocumentAlignmentOptions;
export declare function prepareShapeTextDocumentData(documentData: IDocumentData, options: IPrepareShapeTextDocumentOptions): IDocumentData;
export declare function resolveShapeTextDocumentPageHeight(documentData: IDocumentData, viewportHeight: number): number;
export declare function stripShapeTextDocumentLayout(documentData: IDocumentData, options?: IShapeTextDocumentAlignmentOptions): IDocumentData;
export declare function createEditableShapeTextDocumentDataCopy(documentData: IDocumentData): IDocumentData;
export declare function buildShapeTextEditorCommitShapeText(options: {
    dataModel?: IShapeTextDataModel;
    isHorizontal?: boolean;
    shapeText?: ICustomShapeTextData | null;
}): ICustomShapeTextData;
export declare function createEmptyShapeTextEditorDocument(editorUnitId: string, pageWidth: number): IDocumentData;
export declare function createShapeTextEditorInitialDocument(options: {
    editorUnitId: string;
    pageWidth: number;
    shapeData: Nullable<IShapeTextDataContext>;
}): IDocumentData;
export declare function setShapeTextEditorDocumentData(editor: Pick<Editor, 'setDocumentData' | 'clearUndoRedoHistory'>, ...params: Parameters<Editor['setDocumentData']>): void;
export declare function getShapeTextEditorDocumentData(editor: Pick<Editor, 'getDocumentData' | 'getDocumentDataModel'>): IDocumentData | null;
export {};
