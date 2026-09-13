export type PdfPageBlockErrorCode = 'PDF_BLOCK_FETCH_FAILED' | 'PDF_BLOCK_CHECKSUM_MISMATCH' | 'PDF_BLOCK_REFERENCE_INVALID';
/** Structured failure raised by the page-block runtime boundary. */
export declare class PdfPageBlockError extends Error {
    readonly code: PdfPageBlockErrorCode;
    readonly blockId: string;
    readonly name = "PdfPageBlockError";
    constructor(code: PdfPageBlockErrorCode, blockId: string, message: string);
}
