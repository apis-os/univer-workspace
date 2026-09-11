import type { IResolvedSlidePrintOptions } from '../services/slide-print-layout';
export declare function createSlidePrintStyle(document: Document, pageSize: {
    width: number;
    height: number;
}, options: IResolvedSlidePrintOptions): HTMLStyleElement;
