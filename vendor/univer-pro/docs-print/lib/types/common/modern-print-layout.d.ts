export interface IDocPrintBlockRange {
    top: number;
    bottom: number;
}
export interface IDocPrintPageRange {
    top: number;
    bottom: number;
}
export declare function resolveModernDocPrintPageRanges(contentHeight: number, pageHeight: number, blockRanges: IDocPrintBlockRange[]): IDocPrintPageRange[];
