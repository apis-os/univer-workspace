import type { IPdfGraphicsState, IPdfPage, IPdfPaint, IPdfSourceMapping, IPdfStroke, IPdfTextRun, IPdfTextState } from '../types';
import type { IPdfPageBlock } from './page-block-provider';
export interface IPdfCommonDictionaryStore {
    textRunStyles?: Array<Partial<Omit<IPdfTextRun, 'text' | 'glyphs'>>>;
    textCandidateStyles?: Array<Partial<Omit<IPdfTextRun, 'text' | 'glyphs'>>>;
    textStates?: IPdfTextState[];
    pageGeometries?: Array<Pick<IPdfPage, 'size' | 'pdfBoxes' | 'rotation'>>;
    pageSourceBases?: IPdfSourceMapping[];
    paints?: IPdfPaint[];
    strokes?: IPdfStroke[];
    graphicsStates?: IPdfGraphicsState[];
}
export declare function expandPdfCompactPageBlock(value: unknown, dictionaries: IPdfCommonDictionaryStore): IPdfPageBlock;
