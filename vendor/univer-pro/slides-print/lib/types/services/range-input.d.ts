import type { ISlidePrintRange } from '../common/types';
export interface ISlidePrintRangeInputResult {
    valid: boolean;
    range?: ISlidePrintRange[];
}
export declare function parseSlidePrintRangeInput(value: string, totalSlides: number): ISlidePrintRangeInputResult;
export declare function formatSlidePrintRangeInput(range?: ISlidePrintRange[]): string;
