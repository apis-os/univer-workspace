import type { IPdfPage, PdfEmu, PdfRect } from '../types';
export declare function createPdfDefaultTextBoxInsertionBbox(page: Pick<IPdfPage, 'pdfBoxes'>): PdfRect;
export declare function createPdfDefaultParagraphInsertionBbox(page: Pick<IPdfPage, 'pdfBoxes'>): PdfRect;
export declare function createPdfDefaultListInsertionBbox(page: Pick<IPdfPage, 'pdfBoxes'>): PdfRect;
export declare function createPdfDefaultDividerInsertionBbox(page: Pick<IPdfPage, 'pdfBoxes'>): PdfRect;
export declare function createPdfDefaultTableInsertionLayout(page: Pick<IPdfPage, 'pdfBoxes'>, rowCount: number, columnCount: number): {
    bbox: PdfRect;
    padding: PdfEmu;
};
