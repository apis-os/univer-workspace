import type { ITableJson } from '@univerjs/sheets-table';
import { FWorkbook } from '@univerjs/sheets/facade';
/**
 * @ignore
 */
interface IFWorkbookRangePreprocessMixin {
    /**
     * Get all preprocess range information
     * @param {string} responseDataMode The response data mode.
     * @returns {Record<string, ITableJson[]>} All preprocess range information
     * @example
     * ```typescript
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const allTableInfo = fWorkbook.getPreprocessRanges();
     * console.log('debugger allTableInfo', allTableInfo);
     * ```
     */
    getPreprocessRanges(responseDataMode?: string): Record<string, ITableJson[]>;
}
export declare class FWorkbookRangePreprocessMixin extends FWorkbook implements IFWorkbookRangePreprocessMixin {
    getPreprocessRanges(responseDataMode?: string): Record<string, ITableJson[]>;
}
declare module '@univerjs/sheets/facade' {
    interface FWorkbook extends IFWorkbookRangePreprocessMixin {
    }
}
export {};
