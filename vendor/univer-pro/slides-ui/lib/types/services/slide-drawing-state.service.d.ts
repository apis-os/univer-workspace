import type { Observable } from 'rxjs';
import { ISlideDrawingService } from '@univerjs-pro/slides';
import { Disposable, IContextService } from '@univerjs/core';
/** The unit / page scope of the current selection. */
export interface ISlideSelectionContext {
    unitId: string;
    subUnitId: string;
}
export interface ISlideDrawingPartSelection {
    drawingId: string;
    presentationShapeId: string;
    nodeId?: string;
}
/**
 * Full snapshot of all four interaction states for slide drawings.
 *
 * - **selected**      – ordered list of drawingIds currently selected (may be many).
 * - **focused**       – the single "primary" drawing (last clicked), used to drive
 *                       the sidebar panel and alignment reference. Subset of selected.
 * - **hover**         – drawingId under the pointer (at most one).
 * - **activeEditing** – drawingId currently in text-edit mode (at most one).
 */
export interface ISlideDrawingStateSnapshot {
    context: ISlideSelectionContext | null;
    selectedIds: string[];
    focusedId: string | null;
    hoverId: string | null;
    activeEditingId: string | null;
    focusedPart: ISlideDrawingPartSelection | null;
    smartArtTextPaneDrawingId: string | null;
}
/** Public interface consumed by other controllers / services. */
export interface ISlideDrawingStateService {
    /** Full state stream. */
    readonly state$: Observable<ISlideDrawingStateSnapshot>;
    /** Convenience stream: array of selected drawingIds. */
    readonly selected$: Observable<string[]>;
    /** Convenience stream: primary focused drawingId or null. */
    readonly focused$: Observable<string | null>;
    /** Convenience stream: hovered drawingId or null. */
    readonly hover$: Observable<string | null>;
    /** Convenience stream: drawingId being text-edited, or null. */
    readonly activeEditing$: Observable<string | null>;
    readonly focusedPart$: Observable<ISlideDrawingPartSelection | null>;
    readonly smartArtTextPaneDrawingId$: Observable<string | null>;
    /** Snapshot of current state (synchronous read). */
    getSnapshot(): ISlideDrawingStateSnapshot;
    /**
     * Replace the entire selection with the given set of drawingIds.
     * `focusId` defaults to the last element in `drawingIds`.
     */
    selectDrawings(context: ISlideSelectionContext, drawingIds: string[], focusId?: string | null): void;
    /** Add a single drawing to the current selection (Ctrl+click). */
    addToSelection(context: ISlideSelectionContext, drawingId: string): void;
    /** Remove a single drawing from the current selection (Ctrl+click on selected). */
    removeFromSelection(drawingId: string): void;
    /**
     * Toggle a single drawing in/out of the selection (Ctrl+click).
     * If the drawing is already selected, remove it; otherwise add it.
     */
    toggleInSelection(context: ISlideSelectionContext, drawingId: string): void;
    /** Clear the entire selection. */
    clearSelection(): void;
    setFocusedPart(part: ISlideDrawingPartSelection | null): void;
    toggleSmartArtTextPane(drawingId: string): void;
    closeSmartArtTextPane(): void;
    setHover(drawingId: string | null): void;
    setActiveEditing(context: ISlideSelectionContext | null, drawingId: string | null): void;
    clearActiveEditing(): void;
    isSelected(drawingId: string): boolean;
    isFocused(drawingId: string): boolean;
    isHovered(drawingId: string): boolean;
    isActiveEditing(drawingId: string): boolean;
}
export declare const ISlideDrawingStateService: import("@wendellhu/redi").IdentifierDecorator<ISlideDrawingStateService>;
export declare class SlideDrawingStateService extends Disposable implements ISlideDrawingStateService {
    private readonly _contextService;
    private readonly _slideDrawingService;
    private readonly _state$;
    private _autoOpenSmartArtTextPane;
    readonly state$: Observable<ISlideDrawingStateSnapshot>;
    readonly selected$: Observable<string[]>;
    readonly focused$: Observable<string | null>;
    readonly hover$: Observable<string | null>;
    readonly activeEditing$: Observable<string | null>;
    readonly focusedPart$: Observable<ISlideDrawingPartSelection | null>;
    readonly smartArtTextPaneDrawingId$: Observable<string | null>;
    constructor(_contextService: IContextService, _slideDrawingService: ISlideDrawingService);
    dispose(): void;
    getSnapshot(): ISlideDrawingStateSnapshot;
    isSelected(drawingId: string): boolean;
    isFocused(drawingId: string): boolean;
    isHovered(drawingId: string): boolean;
    isActiveEditing(drawingId: string): boolean;
    selectDrawings(context: ISlideSelectionContext, drawingIds: string[], focusId?: string | null): void;
    addToSelection(context: ISlideSelectionContext, drawingId: string): void;
    removeFromSelection(drawingId: string): void;
    toggleInSelection(context: ISlideSelectionContext, drawingId: string): void;
    clearSelection(): void;
    setFocusedPart(part: ISlideDrawingPartSelection | null): void;
    toggleSmartArtTextPane(drawingId: string): void;
    closeSmartArtTextPane(): void;
    setHover(drawingId: string | null): void;
    setActiveEditing(context: ISlideSelectionContext | null, drawingId: string | null): void;
    clearActiveEditing(): void;
    private _emit;
    private _isSmartArtDrawing;
    /**
     * Keep `ISlideDrawingService.focusDrawing()` and FOCUSING_COMMON_DRAWINGS
     * in sync so all existing downstream consumers (menus, sidebars, shortcuts)
     * continue to work without modification.
     */
    private _bridgeToDrawingService;
}
