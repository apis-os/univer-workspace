import type { ISlideDrawingService, SlideModel } from '@univerjs-pro/slides';
import type { IDisposable, Injector } from '@univerjs/core';
import type { ISlidePrintPhysicalPagePlan } from '../services/slide-print-layout';
import { Disposable } from '@univerjs/core';
export declare const SLIDE_PRINT_PAGE_CLASS = "univer-slide-print-page";
export declare const SLIDE_PRINT_SLOT_CLASS = "univer-slide-print-slot";
export declare const SLIDE_PRINT_SURFACE_CLASS = "univer-slide-print-surface";
export interface ISlidePrintPageViewOptions {
    frameSlides: boolean;
    showSlideNumber: boolean;
    preview?: boolean;
}
export declare class SlidePrintPageView extends Disposable implements IDisposable {
    private readonly _document;
    private readonly _injector;
    private readonly _slideDrawingService;
    private readonly _slideModel;
    private readonly _plan;
    private readonly _pageSize;
    private readonly _options;
    readonly container: HTMLDivElement;
    private readonly _slideViews;
    constructor(_document: Document, _injector: Injector, _slideDrawingService: ISlideDrawingService, _slideModel: SlideModel, _plan: ISlidePrintPhysicalPagePlan, _pageSize: {
        width: number;
        height: number;
    }, _options: ISlidePrintPageViewOptions);
    render(): void;
    dispose(): void;
    private _mountSlides;
    private _mountHandoutLines;
    private _mountNotes;
}
