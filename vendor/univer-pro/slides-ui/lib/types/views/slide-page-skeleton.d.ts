import type { ISlidePage, ISlidePageElement } from '@univerjs-pro/slides';
import { Disposable } from '@univerjs/core';
/**
 * Pixel-space layout descriptor for a single page element.
 *
 * This is the output of {@link SlidePageSkeleton.calculate} and is consumed
 * by render controllers to create / update {@link SlideBaseObject} instances
 * on the canvas.
 */
export interface ISlideElementLayout {
    /** Element ID (mirrors {@link ISlideElementBase.id}). */
    id: string;
    /** Element type discriminant (mirrors {@link ISlideElementBase.type}). */
    type: string;
    left: number;
    top: number;
    width: number;
    height: number;
    /** Rotation in degrees (0 = no rotation). Maps to {@link ISlideDrawingTransform.rotation}. */
    angle: number;
    flipH: boolean;
    flipV: boolean;
    /** Whether the element should be rendered. */
    visible: boolean;
    /** Full element snapshot — passed to concrete object constructors. */
    element: ISlidePageElement;
}
/**
 * Layout calculator for a single slide page.
 *
 * **Analogous to `SpreadsheetSkeleton`** (engine-render) for sheets: it
 * converts the serialised page-element data into concrete pixel-space layout
 * entries that the canvas scene can consume to create / update objects.
 *
 * Design philosophy:
 * - **Lazy** – layouts are only (re)computed when `calculate()` is called
 *   after `makeDirty()`.
 * - **Observable** – `dirty$` emits whenever new data is loaded or an
 *   explicit `makeDirty()` call is made, allowing render controllers to
 *   subscribe and trigger a rebuild pass.
 * - **Stateless transform** – the skeleton does not hold any canvas objects;
 *   it is purely a data-transformation layer between the model and the scene.
 *
 * Typical lifecycle:
 * ```
 * const skeleton = new SlidePageSkeleton();
 * skeleton.dirty$.subscribe(() => scene.syncFromSkeleton(skeleton));
 *
 * skeleton.loadPage(slidePage);  // → dirty$ fires
 * // ... later ...
 * skeleton.loadPage(updatedPage); // → dirty$ fires again
 * ```
 */
export declare class SlidePageSkeleton extends Disposable {
    private readonly _dirty$;
    /**
     * Emits (with no payload) whenever the skeleton becomes dirty —
     * i.e. whenever `loadPage()` or `makeDirty()` is called.
     *
     * Render controllers subscribe here to know when to call `calculate()`
     * and then re-sync their canvas objects.
     */
    readonly dirty$: import("rxjs").Observable<void>;
    private _pageData;
    /** Cached layout entries, keyed by element ID. */
    private _layoutCache;
    /** Whether the cache is out-of-date. */
    private _isDirty;
    private _pageWidth;
    private _pageHeight;
    constructor(page?: ISlidePage, defaultPageWidth?: number, defaultPageHeight?: number);
    /** Slide canvas width in pixels. */
    get pageWidth(): number;
    /** Slide canvas height in pixels. */
    get pageHeight(): number;
    /**
     * Replace the current page data and mark the skeleton as dirty.
     *
     * This is the primary entry point.  Call it whenever the slide page
     * snapshot changes (new page selected, undo/redo, remote collaboration
     * update, etc.).
     */
    loadPage(page: ISlidePage, pageWidth?: number, pageHeight?: number): void;
    /**
     * Marks the skeleton as dirty and notifies subscribers via `dirty$`.
     *
     * Call this if you need to force a layout rebuild without replacing the
     * whole page snapshot (e.g. after an in-place element mutation).
     */
    makeDirty(): void;
    /**
     * (Re)computes the pixel layout from the current page data if dirty.
     * No-op if the cache is up-to-date.
     *
     * Call this before querying `getLayouts()` / `getLayout()` to ensure
     * you receive fresh data.
     */
    calculate(): void;
    /**
     * Returns all element layouts **in the page's declared render order**
     * (`ISlidePage.elementOrder`).
     *
     * Triggers `calculate()` internally if the cache is stale.
     */
    getLayouts(): ISlideElementLayout[];
    /**
     * Returns the layout for a single element by ID, or `undefined` if the
     * element is not found in the current page.
     *
     * Triggers `calculate()` internally if the cache is stale.
     */
    getLayout(elementId: string): ISlideElementLayout | undefined;
    /**
     * Returns the raw page snapshot currently loaded in the skeleton,
     * or `null` if no page has been loaded yet.
     */
    getPageData(): ISlidePage | null;
    /**
     * Converts the page's element snapshots into pixel-space layout entries.
     *
     * `ISlideDrawingTransform` fields are already in absolute pixels, so the
     * conversion is a straight mapping with safe defaults for missing values.
     */
    private _buildLayouts;
    dispose(): void;
}
