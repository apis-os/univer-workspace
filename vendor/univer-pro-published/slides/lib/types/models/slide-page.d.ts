import type { ISlideBackgroundData, ISlideLayoutPage, ISlideMasterPage, ISlidePage, ISlidePageData, ISlidePageElement } from '../slide.type';
import { Disposable } from '@univerjs/core';
export interface ISlidePageContext {
    getPage(id: string): ISlidePageData | undefined;
    getMasterPage(id: string): ISlideMasterPage | undefined;
    getLayoutPage(id: string): ISlideLayoutPage | undefined;
    getSlideIndex?(id: string): number | undefined;
}
/**
 * The result of merging master → layout → slide element trees.
 *
 * Layers are kept separate so the renderer can:
 * - Prevent selection of master / layout elements when editing a slide
 * - Apply different hit-testing rules per layer
 * - Optionally show / hide inherited layers (e.g. "Hide background graphics")
 */
export interface IResolvedPageLayers {
    /** Elements inherited from the master (not overridden by layout or slide). */
    masterLayer: ISlidePageElement[];
    /** Elements inherited from the layout (not overridden by slide). */
    layoutLayer: ISlidePageElement[];
    /** The slide's own elements (top z-order). */
    slideLayer: ISlidePageElement[];
    /**
     * Flat ordered array in final render order:
     * masterLayer elements → layoutLayer elements → slideLayer elements.
     */
    all: ISlidePageElement[];
}
/**
 * Runtime model for a single presentation slide.
 *
 * Responsibilities:
 * 1. Own the mutable `ISlidePage` data snapshot (kept in sync with parent
 *    `SlidePageManager` via the `_syncFn` callback).
 * 2. Expose `resolveElements()` which performs the three-layer merge:
 *    master → layout → slide — so the renderer always gets the correct z-order.
 * 3. Provide pure JSON CRUD on slide elements.
 *
 * NOTE: Rendering runtime entities were moved to `@univerjs-pro/slides-ui`.
 * Data-layer `SlidePage` remains JSON-only to avoid UI coupling.
 */
export declare class SlidePage extends Disposable {
    private _data;
    private readonly _ctx;
    /** Called whenever `_data` is replaced so the parent snapshot stays in sync. */
    private readonly _syncFn;
    constructor(_data: ISlidePage, _ctx: ISlidePageContext, 
    /** Called whenever `_data` is replaced so the parent snapshot stays in sync. */
    _syncFn: (data: ISlidePage) => void);
    getId(): string;
    getData(): ISlidePage;
    updatePageData(changes: Partial<ISlidePage>): void;
    resolveBackground(): ISlideBackgroundData | undefined;
    addElement(element: ISlidePageElement, insertIndex?: number): void;
    removeElement(id: string): void;
    /**
     * Replace a subset of fields on an element and refresh its drawing instance.
     * Only fields present in `changes` are updated.
     */
    updateElement(id: string, changes: Partial<ISlidePageElement>): void;
    setElementOrder(order: string[]): void;
    resolveElements(): IResolvedPageLayers;
    private _applyDataUpdate;
}
