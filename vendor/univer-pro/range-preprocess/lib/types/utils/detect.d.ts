import type { ICellData } from '@univerjs/core';
export interface IRecognizerOutput {
    DateType: string;
    Confidence: number;
    numInvalid: number;
}
export declare enum dataType {
    TString = 0,
    TNumber = 1,
    TDate = 2,
    TDateExcel = 3,
    TTimestamp = 4,
    TBoolean = 5,
    TMax = 6
}
interface recognizeResult {
    Charset: dataType;
    Layout?: string;
    Confidence: number;
    debugInfo: string;
}
export declare class DetectImpl {
    private recognizers;
    private dateStyles;
    constructor(dateStyles: Record<string, boolean>);
    Match(cell: ICellData): void;
    Best(): [string, recognizeResult | null];
}
export {};
