import type { BoardConnectorRouting, BoardConnectorStylePatch, BoardModel, IBoardConnectorLabel, IBoardSwimlaneData, ICommitBoardContainerTransformOperationParams, IRemoveBoardElementsOperationParams, IRemoveBoardSwimlaneLaneOperationParams, IUpdateBoardElementCommandParams, IUpdateBoardElementsCommandItem, IUpdateBoardElementsCommandParams } from '@univerjs-pro/boards';
import type { BoardContainerMembershipUpdateMode } from '../utils/board-container-membership-update.util';
import type { IBoardSelectionMoveDelta } from '../utils/board-selection-move.util';
import type { IBoardElementSelectionResizeResult } from '../utils/board-selection-resize.util';
import type { IBoardSelectionContext } from './board-element-state.service';
import { IBoardElementService } from '@univerjs-pro/boards';
import { ICommandService } from '@univerjs/core';
import { IBoardElementStateService } from './board-element-state.service';
import { IBoardUIStateService } from './board-ui-state.service';
export interface IBoardElementEditSelectionSnapshot {
    context: IBoardSelectionContext;
    selectedIds: string[];
    focusedId?: string | null;
}
export interface IBoardElementMoveSelectedOptions {
    selectedIds: string[];
    delta: IBoardSelectionMoveDelta;
    focusedId?: string | null;
    membershipMode?: BoardContainerMembershipUpdateMode;
}
export interface IBoardElementResizeSelectionOptions {
    selectedIds: string[];
    focusedId?: string | null;
}
export interface IBoardElementUpdateSelectedConnectorStyleOptions {
    selectedIds: string[];
    focusedId?: string | null;
    style: BoardConnectorStylePatch;
}
export interface IBoardElementSwapSelectedConnectorMarkersOptions {
    selectedIds: string[];
    focusedId?: string | null;
}
export interface IBoardElementUpdateSelectedConnectorRoutingOptions {
    selectedIds: string[];
    focusedId?: string | null;
    routing: BoardConnectorRouting;
}
export interface IBoardElementUpdateSelectedConnectorLabelOptions {
    selectedIds: string[];
    focusedId?: string | null;
    label: IBoardConnectorLabel;
    historyId?: string;
}
export interface IBoardElementWrapSelectedInContainerOptions {
    selectedIds: string[];
    containerId?: string;
    title?: string;
}
export interface IBoardElementReparentSelectedOptions {
    selectedIds: string[];
    parentId?: string;
    focusedId?: string | null;
}
export interface IBoardElementMoveSelectedOutOfContainerOptions {
    selectedIds: string[];
    focusedId?: string | null;
}
export interface IBoardElementCommitContainerTransformOptions {
    containerId: string;
    transform: ICommitBoardContainerTransformOperationParams['transform'];
    interaction: ICommitBoardContainerTransformOperationParams['interaction'];
    selectedIds?: string[];
    focusedId?: string | null;
}
export type IBoardElementEditSwimlaneLane = IBoardSwimlaneData['lanes'][number];
export interface IBoardElementEditAddSwimlaneLaneOptions {
    insertIndex?: number;
}
export interface IBoardElementEditRemoveSwimlaneLaneOptions {
    contentPolicy?: IRemoveBoardSwimlaneLaneOperationParams['contentPolicy'];
    targetLaneId?: string;
}
export interface IBoardElementRemoveElementsOptions {
    unitId: string;
    subUnitId: string;
    elementIds: string[];
}
export type IBoardElementUpdateElementOptions = IUpdateBoardElementCommandParams;
export type IBoardElementUpdateElementsOperationItem = IUpdateBoardElementsCommandItem;
export interface IBoardElementUpdateElementsOptions {
    unitId: string;
    subUnitId: string;
    updates: IBoardElementUpdateElementsOperationItem[];
    historyId?: string;
    forceCaptureElementIds?: readonly string[];
    membershipMode?: BoardContainerMembershipUpdateMode;
}
export declare class BoardElementEditService {
    private readonly _commandService;
    private readonly _boardElementService;
    private readonly _elementStateService;
    private readonly _uiStateService;
    constructor(_commandService: ICommandService, _boardElementService: IBoardElementService, _elementStateService: IBoardElementStateService, _uiStateService: IBoardUIStateService);
    private _executeEdit;
    removeElements(params: IBoardElementRemoveElementsOptions): Promise<boolean>;
    protected _removeElements(params: IRemoveBoardElementsOperationParams): Promise<boolean>;
    private _resolveRemoveElementsWithBoundConnectors;
    removeSelectedElements(boardModel: BoardModel | null | undefined, context: IBoardSelectionContext | null | undefined, selectedIds: string[]): Promise<boolean>;
    moveSelectedElements(boardModel: BoardModel | null | undefined, context: IBoardSelectionContext | null | undefined, options: IBoardElementMoveSelectedOptions): Promise<boolean>;
    updateResizedElement(boardModel: BoardModel | null | undefined, context: IBoardSelectionContext | null | undefined, resized: IBoardElementSelectionResizeResult, options: IBoardElementResizeSelectionOptions): Promise<boolean>;
    wrapSelectedElementsInContainer(boardModel: BoardModel | null | undefined, context: IBoardSelectionContext | null | undefined, options: IBoardElementWrapSelectedInContainerOptions): Promise<boolean>;
    reparentSelectedElements(boardModel: BoardModel | null | undefined, context: IBoardSelectionContext | null | undefined, options: IBoardElementReparentSelectedOptions): Promise<boolean>;
    moveSelectedElementsOutOfContainer(boardModel: BoardModel | null | undefined, context: IBoardSelectionContext | null | undefined, options: IBoardElementMoveSelectedOutOfContainerOptions): Promise<boolean>;
    selectParentContainer(boardModel: BoardModel | null | undefined, context: IBoardSelectionContext | null | undefined, elementId: string | null | undefined): Promise<boolean>;
    disbandContainer(boardModel: BoardModel | null | undefined, context: IBoardSelectionContext | null | undefined, containerId: string | null | undefined): Promise<boolean>;
    fitContainerToContent(boardModel: BoardModel | null | undefined, context: IBoardSelectionContext | null | undefined, containerId: string | null | undefined): Promise<boolean>;
    setContainerMembershipLocked(boardModel: BoardModel | null | undefined, context: IBoardSelectionContext | null | undefined, containerId: string | null | undefined, membershipLocked: boolean): Promise<boolean>;
    setContainerAutoResize(boardModel: BoardModel | null | undefined, context: IBoardSelectionContext | null | undefined, containerId: string | null | undefined, autoResize: boolean): Promise<boolean>;
    renameContainer(boardModel: BoardModel | null | undefined, context: IBoardSelectionContext | null | undefined, containerId: string | null | undefined, title: string): Promise<boolean>;
    addSwimlaneLane(boardModel: BoardModel | null | undefined, context: IBoardSelectionContext | null | undefined, containerId: string | null | undefined, lane: IBoardElementEditSwimlaneLane, options?: IBoardElementEditAddSwimlaneLaneOptions): Promise<boolean>;
    removeSwimlaneLane(boardModel: BoardModel | null | undefined, context: IBoardSelectionContext | null | undefined, containerId: string | null | undefined, laneId: string, options?: IBoardElementEditRemoveSwimlaneLaneOptions): Promise<boolean>;
    reorderSwimlaneLane(boardModel: BoardModel | null | undefined, context: IBoardSelectionContext | null | undefined, containerId: string | null | undefined, laneId: string, targetIndex: number): Promise<boolean>;
    setSwimlaneLaneCollapsed(boardModel: BoardModel | null | undefined, context: IBoardSelectionContext | null | undefined, containerId: string | null | undefined, laneId: string, collapsed: boolean): Promise<boolean>;
    renameSwimlaneLane(boardModel: BoardModel | null | undefined, context: IBoardSelectionContext | null | undefined, containerId: string | null | undefined, laneId: string, title: string): Promise<boolean>;
    selectContainerContents(boardModel: BoardModel | null | undefined, context: IBoardSelectionContext | null | undefined, containerId: string | null | undefined): Promise<boolean>;
    private _setSwimlaneLanes;
    private _getMutableContainerItem;
    private _hasLockedElements;
    private _canReparentElementsInKnownData;
    private _canApplyElementUpdatesInKnownData;
    private _canWrapElementsInKnownData;
    private _canRemoveElementsInKnownData;
    private _canDisbandContainerInKnownData;
    private _getSwimlaneData;
    commitContainerTransform(boardModel: BoardModel | null | undefined, context: IBoardSelectionContext | null | undefined, options: IBoardElementCommitContainerTransformOptions): Promise<boolean>;
    updateSelectedConnectorStyle(boardModel: BoardModel | null | undefined, context: IBoardSelectionContext | null | undefined, options: IBoardElementUpdateSelectedConnectorStyleOptions): Promise<boolean>;
    swapSelectedConnectorMarkers(boardModel: BoardModel | null | undefined, context: IBoardSelectionContext | null | undefined, options: IBoardElementSwapSelectedConnectorMarkersOptions): Promise<boolean>;
    updateSelectedConnectorRouting(boardModel: BoardModel | null | undefined, context: IBoardSelectionContext | null | undefined, options: IBoardElementUpdateSelectedConnectorRoutingOptions): Promise<boolean>;
    updateSelectedConnectorLabel(boardModel: BoardModel | null | undefined, context: IBoardSelectionContext | null | undefined, options: IBoardElementUpdateSelectedConnectorLabelOptions): Promise<boolean>;
    updateElement(params: IBoardElementUpdateElementOptions, selectionSnapshot?: IBoardElementEditSelectionSnapshot): Promise<boolean>;
    protected _updateElement(params: IUpdateBoardElementCommandParams, selectionSnapshot?: IBoardElementEditSelectionSnapshot): Promise<boolean>;
    updateElements(params: IBoardElementUpdateElementsOptions, selectionSnapshot?: IBoardElementEditSelectionSnapshot): Promise<boolean>;
    protected _updateElements(params: IUpdateBoardElementsCommandParams, selectionSnapshot?: IBoardElementEditSelectionSnapshot): Promise<boolean>;
    private _restoreSelection;
    private _resolveUpdatesWithBoundConnectorRefreshes;
}
