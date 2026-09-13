import type { Observable } from 'rxjs';
import type { ISlideData, ISlideLayoutPage, ISlideMasterPage, ISlidePage, ISlidePageData } from '../slide.type';
import type { ISlidePageContext } from './slide-page';
import { Disposable } from '@univerjs/core';
import { SlidePage } from './slide-page';
/**
 * Runtime manager for all slides in a presentation.
 *
 * Owned by {@link SlideModel} and responsible for:
 * - Instantiating and caching {@link SlidePage} objects
 * - Maintaining the ordered slide list (`slideOrder`)
 * - Providing master / layout page data to pages via {@link ISlidePageContext}
 * - CRUD operations: createSlide / deleteSlide / moveSlide / duplicateSlide
 * - Active slide tracking
 *
 * All mutations go through this manager so that:
 * 1. `SlidePage` instances are always created / disposed consistently
 * 2. The shared `ISlideData` snapshot stays in sync (pages write back
 *    via the `_syncFn` callback injected into each `SlidePage` constructor)
 */
export declare class SlidePageManager extends Disposable implements ISlidePageContext {
    /** Direct reference to the document snapshot — mutations are reflected immediately. */
    private readonly _snapshot;
    private readonly _pages;
    private readonly _activeSlideId$;
    private readonly _slideOrder$;
    readonly activeSlideId$: Observable<string | undefined>;
    readonly slideOrder$: Observable<string[]>;
    constructor(
    /** Direct reference to the document snapshot — mutations are reflected immediately. */
    _snapshot: ISlideData);
    getPage(id: string): ISlidePageData | undefined;
    getMasterPage(id: string): ISlideMasterPage | undefined;
    getLayoutPage(id: string): ISlideLayoutPage | undefined;
    getSlideIndex(id: string): number | undefined;
    getSlide(id: string): SlidePage | undefined;
    /** Returns slides in display order. */
    getSlides(): SlidePage[];
    getActiveSlide(): SlidePage | undefined;
    /**
     * Resolve the layout and master references for a slide before it is added.
     * Explicit references must form a valid pair; otherwise the adjacent slide
     * and ordered layouts are considered in that order.
     */
    resolveSlidePageReferences(data: ISlidePage, insertIndex?: number): ISlidePage | null;
    setActiveSlide(id: string): void;
    /**
     * Create a new slide and insert it at `insertIndex` (defaults to end).
     * @returns The newly created {@link SlidePage} instance.
     */
    createSlide(data?: Partial<ISlidePage>, insertIndex?: number): SlidePage;
    deleteSlide(id: string): void;
    /**
     * Move a slide to `toIndex` in the ordered list.
     * No-op if `id` is not found or is already at `toIndex`.
     */
    moveSlide(id: string, toIndex: number): void;
    /**
     * Duplicate a slide and insert it immediately after the original.
     * @returns The duplicated {@link SlidePage}, or `undefined` if `id` not found.
     */
    duplicateSlide(id: string): SlidePage | undefined;
    /**
     * Lazily injects the built-in default master and layout pages into the
     * snapshot if they are not already present.  This is a non-undoable
     * infrastructure step — it only adds pages that don't exist yet and never
     * removes or overwrites existing ones.
     *
     * Call this before `createSlide()` when the slide should reference the
     * default master / layout hierarchy (e.g. when using `createSlideByLayout`).
     */
    ensureDefaultLayers(): void;
    private _initPage;
    dispose(): void;
}
