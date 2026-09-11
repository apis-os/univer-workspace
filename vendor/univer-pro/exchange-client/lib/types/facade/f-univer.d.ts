import { FUniver } from '@univerjs/core/facade';
/**
 * @ignore
 */
export interface IFUniverExchangeClientMixin {
    /**
     * Trigger a browser download for a file or blob.
     * @param {File | Blob} file File or blob to download
     * @param {string} filename Filename without extension
     * @param {string} fileExt File extension without a leading dot
     * @returns {void}
     *
     * @example
     * ```typescript
     * const file = await univerAPI.exportSheetByUnitIdAsync(unitId);
     * if (file) univerAPI.downloadFile(file, 'univer', 'xlsx');
     * ```
     */
    downloadFile(file: File | Blob, filename: string, fileExt: string): void;
}
export declare class FUniverExchangeClientMixin extends FUniver implements IFUniverExchangeClientMixin {
    downloadFile(file: File | Blob, filename: string, fileExt: string): void;
}
declare module '@univerjs/core/facade' {
    interface FUniver extends IFUniverExchangeClientMixin {
    }
}
