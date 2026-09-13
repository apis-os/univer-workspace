import type { IPdfPathCommand, IPdfSourceMapping, PdfDisplayOperation, PdfId, PdfMatrix, PdfRectPt } from '../types';
import type { IPdfContentStreamType3Glyph } from './content-stream-parser';
export interface IPdfType3OutlineState {
    ctm: PdfMatrix;
    fontSize: number;
    textScale: number;
    horizontalScale: number;
    rise: number;
}
export interface ITransformType3PathCommandInput {
    command: IPdfPathCommand;
    glyphMediaBox: PdfRectPt;
    glyph: Pick<IPdfContentStreamType3Glyph, 'matrix' | 'content'>;
    textX: number;
    textY: number;
    state: IPdfType3OutlineState;
    mediaBox: PdfRectPt;
}
export interface IAppendType3GlyphFallbackOperationsInput {
    targetOps: PdfDisplayOperation[];
    parsedGlyphOps: PdfDisplayOperation[];
    id: PdfId;
    glyph: IPdfContentStreamType3Glyph;
    textX: number;
    textY: number;
    state: IPdfType3OutlineState;
    mediaBox: PdfRectPt;
    source: IPdfSourceMapping;
    behavior?: {
        emitPaintedOps: boolean;
        clipPath?: IPdfPathCommand[];
    };
}
export declare function appendType3GlyphFallbackOperations(input: IAppendType3GlyphFallbackOperationsInput): void;
export declare function transformType3PathCommand(input: ITransformType3PathCommandInput): IPdfPathCommand;
