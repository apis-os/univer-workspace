import type { IPrintMargin, PrintDirection, PrintPaperMargin } from '@univerjs-pro/print';
import type { PaperType } from '@univerjs/core';
export interface ISlidePrintRange {
    /**
     * 1-based inclusive start page.
     */
    from: number;
    /**
     * 1-based inclusive end page.
     */
    to: number;
}
export declare enum SlidePrintLayoutType {
    FullPage = "FullPage",
    Handout = "Handout",
    NotesPage = "NotesPage"
}
export declare enum SlidePrintHandoutOrder {
    Horizontal = "Horizontal",
    Vertical = "Vertical"
}
export type SlidePrintSlidesPerPage = 1 | 2 | 3 | 4 | 6 | 9;
export interface ISlidePrintOptions {
    /**
     * Optional list of 1-based page ranges. If omitted, all slides are printed.
     */
    range?: ISlidePrintRange[];
    /** Print layout. Omitted options preserve the legacy full-slide page behavior. */
    layout?: SlidePrintLayoutType;
    /** Number of slides on each handout page. Only used by the handout layout. */
    slidesPerPage?: SlidePrintSlidesPerPage;
    /** Fill direction for 4, 6, and 9 slide handouts. */
    handoutOrder?: SlidePrintHandoutOrder;
    /** Physical paper size. When omitted for full-page printing, the slide size is used. */
    paperSize?: PaperType;
    /** Physical paper orientation. */
    direction?: PrintDirection;
    /** Physical paper margin preset. */
    margin?: PrintPaperMargin;
    /** Custom margins, used when `margin` is `PrintPaperMargin.Custom`. */
    marginCustom?: IPrintMargin;
    /** Draw a thin frame around each rendered slide. */
    frameSlides?: boolean;
    /** Print the source slide number next to each slide. */
    showSlideNumber?: boolean;
}
