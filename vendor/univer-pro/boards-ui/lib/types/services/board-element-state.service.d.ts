import type { Observable } from 'rxjs';
import { IBoardElementService } from '@univerjs-pro/boards';
import { Disposable } from '@univerjs/core';
import { IBoardUIStateService } from './board-ui-state.service';
export interface IBoardSelectionContext {
    unitId: string;
    subUnitId: string;
}
export interface IBoardElementStateSnapshot {
    context: IBoardSelectionContext | null;
    selectedIds: string[];
    focusedId: string | null;
    focusedConnectorLabel?: {
        connectorId: string;
        labelId?: string;
    };
    focusedSwimlaneLane: IBoardFocusedSwimlaneLane | null;
    hoverId: string | null;
    activeEditingId: string | null;
    isTransforming: boolean;
}
export type IBoardFocusedSwimlaneLane = IBoardFocusedSwimlaneLaneTarget | IBoardFocusedSwimlaneTitleTarget;
export interface IBoardFocusedSwimlaneLaneTarget {
    containerId: string;
    kind?: 'lane';
    laneId: string;
}
export interface IBoardFocusedSwimlaneTitleTarget {
    containerId: string;
    kind: 'title';
}
export interface IBoardElementStateService {
    readonly state$: Observable<IBoardElementStateSnapshot>;
    readonly selected$: Observable<string[]>;
    readonly focused$: Observable<string | null>;
    readonly hover$: Observable<string | null>;
    readonly activeEditing$: Observable<string | null>;
    getSnapshot(): IBoardElementStateSnapshot;
    selectElements(context: IBoardSelectionContext, elementIds: string[], focusId?: string | null): void;
    addElementToSelection(context: IBoardSelectionContext, elementId: string): void;
    removeElementFromSelection(elementId: string): void;
    toggleElementInSelection(context: IBoardSelectionContext, elementId: string): void;
    clearSelection(): void;
    setHoverElement(elementId: string | null): void;
    setFocusedConnectorLabel(context: IBoardSelectionContext | null, label: IBoardElementStateSnapshot['focusedConnectorLabel'] | null): void;
    setFocusedSwimlaneLane(context: IBoardSelectionContext | null, lane: IBoardFocusedSwimlaneLane | null): void;
    setActiveEditingElement(context: IBoardSelectionContext | null, elementId: string | null): void;
    setTransforming(isTransforming: boolean): void;
    clearActiveEditing(): void;
    isElementSelected(elementId: string): boolean;
    isElementFocused(elementId: string): boolean;
    isElementHovered(elementId: string): boolean;
    isElementActiveEditing(elementId: string): boolean;
}
export declare const IBoardElementStateService: import("@wendellhu/redi").IdentifierDecorator<IBoardElementStateService>;
export declare class BoardElementStateService extends Disposable implements IBoardElementStateService {
    private readonly _boardElementService;
    private readonly _uiStateService;
    private readonly _state$;
    readonly state$: Observable<IBoardElementStateSnapshot>;
    readonly selected$: Observable<string[]>;
    readonly focused$: Observable<string | null>;
    readonly hover$: Observable<string | null>;
    readonly activeEditing$: Observable<string | null>;
    constructor(_boardElementService: IBoardElementService, _uiStateService: IBoardUIStateService);
    dispose(): void;
    getSnapshot(): IBoardElementStateSnapshot;
    selectElements(context: IBoardSelectionContext, elementIds: string[], focusId?: string | null): void;
    addElementToSelection(context: IBoardSelectionContext, elementId: string): void;
    removeElementFromSelection(elementId: string): void;
    toggleElementInSelection(context: IBoardSelectionContext, elementId: string): void;
    clearSelection(): void;
    setHoverElement(elementId: string | null): void;
    setFocusedConnectorLabel(context: IBoardSelectionContext | null, label: IBoardElementStateSnapshot['focusedConnectorLabel'] | null): void;
    setFocusedSwimlaneLane(context: IBoardSelectionContext | null, lane: IBoardFocusedSwimlaneLane | null): void;
    setActiveEditingElement(context: IBoardSelectionContext | null, elementId: string | null): void;
    setTransforming(isTransforming: boolean): void;
    clearActiveEditing(): void;
    isElementSelected(elementId: string): boolean;
    isElementFocused(elementId: string): boolean;
    isElementHovered(elementId: string): boolean;
    isElementActiveEditing(elementId: string): boolean;
    private _emit;
    private _bridgeToElementService;
    private _resolveRootSelectedIds;
    private _canSelectElement;
    private _isSameSelectionContext;
    private _dedupeElementIds;
}
