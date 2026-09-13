import type { IBoardData } from '@univerjs-pro/boards';
import type { IPdfUnitData } from '@univerjs-pro/pdfs';
import type { ISlideData } from '@univerjs-pro/slides';
import type { ICellData, IDocumentData, IObjectMatrixPrimitiveType, IWorkbookData, IWorksheetData } from '@univerjs/core';
import type { ISheetBlock } from '@univerjs/protocol';
export declare const textEncoder: TextEncoder;
export declare const textDecoder: TextDecoder;
/**
 * @param worksheet
 */
export declare function encodeWorksheetOtherMetas(worksheet: Partial<IWorksheetData>): Uint8Array;
export declare function encodeWorkbookOtherMetas(workbook: IWorkbookData): Uint8Array;
export declare function encodeDocOriginalMeta(document: IDocumentData): Uint8Array;
export declare function encodeSlideOriginalMeta(slide: ISlideData): Uint8Array;
export declare function encodeBoardOriginalMeta(board: IBoardData): Uint8Array;
export declare function encodePdfOriginalMeta(pdf: IPdfUnitData): Uint8Array;
export declare function decodeWorksheetOtherMetas(buffer: Uint8Array | string): Partial<IWorksheetData>;
export declare function decodeWorkbookOtherMetas(buffer: Uint8Array | string): Partial<IWorkbookData>;
export declare function decodePartOfCellData(buffer: Uint8Array | object): IObjectMatrixPrimitiveType<ICellData>;
export declare function decodeDocOriginalMeta(buffer: Uint8Array | string): Partial<IDocumentData>;
export declare function decodeSlideOriginalMeta(buffer: Uint8Array | string): ISlideData;
export declare function decodeBoardOriginalMeta(buffer: Uint8Array | string): IBoardData;
export declare function decodePdfOriginalMeta(buffer: Uint8Array | string): IPdfUnitData;
export declare function splitCellDataToBlocks(cellData: IObjectMatrixPrimitiveType<ICellData>, fragmentCellCount?: number, minBlockSize?: number): {
    blocks: ISheetBlock[];
    totalCells: number;
    totalTime: number;
};
