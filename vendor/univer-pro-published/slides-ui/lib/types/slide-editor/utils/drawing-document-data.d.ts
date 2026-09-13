import type { ISlideDrawing, ISlideThemeData } from '@univerjs-pro/slides';
import type { IDocumentData } from '@univerjs/core';
/**
 * Adaptor — converts a slide drawing element into an `IDocumentData` that will
 * be loaded into the shared Univer document editor when editing begins.
 *
 * Each element type produces its own preset styling (fonts, colours, alignment)
 * so the editor visually matches what the canvas renders.
 */
export declare function resolveDrawingDocumentData(drawing: ISlideDrawing, editorId: string, themeData?: ISlideThemeData, resolveThemeColor?: (token: string) => string): IDocumentData;
