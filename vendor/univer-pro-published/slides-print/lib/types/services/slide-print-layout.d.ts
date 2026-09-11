import type { IPrintMargin } from '@univerjs-pro/print';
import type { SlidePage } from '@univerjs-pro/slides';
import type { ISlidePrintOptions, SlidePrintSlidesPerPage } from '../common/types';
import { PrintDirection, PrintPaperMargin } from '@univerjs-pro/print';
import { PaperType } from '@univerjs/core';
import { SlidePrintHandoutOrder, SlidePrintLayoutType } from '../common/types';
export declare const SLIDE_PRINT_NOTE_FONT_SIZE = 14;
export declare const SLIDE_PRINT_NOTE_LINE_HEIGHT = 21;
export interface ISlidePrintSourcePage {
    index: number;
    page: SlidePage;
    pageId: string;
    width: number;
    height: number;
    speakerNotes: string;
}
export interface ISlidePrintRect {
    x: number;
    y: number;
    width: number;
    height: number;
}
export interface ISlidePrintSlotPlan {
    source: ISlidePrintSourcePage;
    rect: ISlidePrintRect;
    noteLinesRect?: ISlidePrintRect;
}
export interface ISlidePrintPhysicalPagePlan {
    key: string;
    slots: ISlidePrintSlotPlan[];
    notes?: {
        lines: string[];
        rect: ISlidePrintRect;
        continuation: boolean;
        source: ISlidePrintSourcePage;
    };
}
export interface IResolvedSlidePrintOptions {
    layout: SlidePrintLayoutType;
    slidesPerPage: SlidePrintSlidesPerPage;
    handoutOrder: SlidePrintHandoutOrder;
    paperSize?: PaperType;
    direction: PrintDirection;
    margin: PrintPaperMargin;
    marginCustom: IPrintMargin;
    frameSlides: boolean;
    showSlideNumber: boolean;
}
export interface ISlidePrintPlan {
    pageSize: {
        width: number;
        height: number;
    };
    margin: IPrintMargin;
    options: IResolvedSlidePrintOptions;
    pages: ISlidePrintPhysicalPagePlan[];
}
export type SlidePrintTextMeasurer = (text: string) => number;
export declare function resolveSlidePrintOptions(options?: ISlidePrintOptions): IResolvedSlidePrintOptions;
export declare function createSlidePrintPlan(sourcePages: ISlidePrintSourcePage[], defaultSlideSize: {
    width: number;
    height: number;
}, options?: ISlidePrintOptions, measureText?: SlidePrintTextMeasurer): ISlidePrintPlan;
export declare function createSlidePrintSourcePages(pages: Array<{
    page: SlidePage;
    index: number;
}>, defaultSlideSize: {
    width: number;
    height: number;
}): ISlidePrintSourcePage[];
export declare function wrapSpeakerNotes(text: string, width: number, measureText: SlidePrintTextMeasurer): string[];
export declare function createDefaultSlidePrintDialogOptions(): ISlidePrintOptions;
