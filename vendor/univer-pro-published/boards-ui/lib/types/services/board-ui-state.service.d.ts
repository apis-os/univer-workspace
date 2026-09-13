import type { BoardConnectorRouting, BoardConnectorStylePatch, BoardShapeType, IBoardConnectorStyle, IBoardSwimlaneData } from '@univerjs-pro/boards';
import type { IBoardSettings } from '../config/config';
import type { IBoardInsertRect } from '../utils/board-insert.util';
import type { IBoardViewportPoint, IBoardViewportTransform } from '../utils/board-viewport.util';
import { BoardToolType } from '@univerjs-pro/boards';
import { Disposable, IConfigService } from '@univerjs/core';
import { BehaviorSubject } from 'rxjs';
import { BoardInteractionMode } from '../config/config';
export type IBoardPendingInsert = {
    type: BoardToolType.Shape;
    shapeType: BoardShapeType | string;
    width?: number;
    height?: number;
} | {
    type: BoardToolType.Text;
} | {
    type: BoardToolType.Sticky;
    fillColor: string;
} | {
    type: BoardToolType.Container;
    width?: number;
    height?: number;
} | {
    type: BoardToolType.Swimlane;
    orientation?: IBoardSwimlaneData['orientation'];
} | {
    type: BoardToolType.Table;
    columns: number;
    diagramPreset?: string;
    height: number;
    rows: number;
    width: number;
} | {
    type: BoardToolType.MindMap;
};
export interface IBoardUIState {
    interactionMode: BoardInteractionMode;
    settings: Required<IBoardSettings>;
    activeTool: BoardToolType | null;
    connectorRouting: BoardConnectorRouting;
    connectorStyle: IBoardConnectorStyle;
    pendingInsert: IBoardPendingInsert | null;
    pendingInsertDragActive: boolean;
    pendingInsertPreviewRect: IBoardInsertRect | null;
    objectListPanelOpen: boolean;
    shapeSidebarOpen: boolean;
    zoomRatio: number;
    viewportPanOffset: IBoardViewportPoint;
}
export interface IBoardUIStateService {
    readonly state$: ReturnType<BehaviorSubject<IBoardUIState>['asObservable']>;
    getState(): IBoardUIState;
    setInteractionMode(mode: BoardInteractionMode): void;
    getSettings(): Required<IBoardSettings>;
    setSettings(settings: Partial<IBoardSettings>): void;
    setActiveTool(tool: BoardToolType | null): void;
    setConnectorRouting(routing: BoardConnectorRouting | string | undefined): void;
    setConnectorStyle(style: BoardConnectorStylePatch): void;
    reverseConnectorMarkers(): void;
    setPendingInsert(pendingInsert: IBoardPendingInsert): void;
    beginPendingInsertDrag(pendingInsert: IBoardPendingInsert): void;
    endPendingInsertDrag(): void;
    setPendingInsertPreviewRect(rect: IBoardInsertRect | null): void;
    clearPendingInsert(): void;
    setObjectListPanelOpen(open: boolean): void;
    setShapeSidebarOpen(open: boolean): void;
    setZoomRatio(zoomRatio: number): void;
    setZoomRatioAtViewportPoint(zoomRatio: number, viewportPoint: IBoardViewportPoint): void;
    setViewportPanOffset(panOffset: IBoardViewportPoint): void;
    setViewportTransform(viewport: IBoardViewportTransform): void;
    shiftViewportPanOffset(delta: IBoardViewportPoint): void;
}
export declare const IBoardUIStateService: import("@wendellhu/redi").IdentifierDecorator<IBoardUIStateService>;
export declare class BoardUIStateService extends Disposable implements IBoardUIStateService {
    private readonly _configService;
    private readonly _interactionConfig;
    private readonly _state$;
    readonly state$: ReturnType<BehaviorSubject<IBoardUIState>['asObservable']>;
    constructor(_configService: IConfigService);
    dispose(): void;
    getState(): IBoardUIState;
    getSettings(): Required<IBoardSettings>;
    setInteractionMode(interactionMode: BoardInteractionMode): void;
    private _isToolbarAvailable;
    private _persistConnectorRoutingStyle;
    setSettings(settings: Partial<IBoardSettings>): void;
    setActiveTool(tool: BoardToolType | null): void;
    setConnectorRouting(routing: BoardConnectorRouting | string | undefined): void;
    setConnectorStyle(patch: BoardConnectorStylePatch): void;
    reverseConnectorMarkers(): void;
    setPendingInsert(pendingInsert: IBoardPendingInsert): void;
    beginPendingInsertDrag(pendingInsert: IBoardPendingInsert): void;
    endPendingInsertDrag(): void;
    setPendingInsertPreviewRect(rect: IBoardInsertRect | null): void;
    clearPendingInsert(): void;
    setObjectListPanelOpen(open: boolean): void;
    setShapeSidebarOpen(open: boolean): void;
    setZoomRatio(zoomRatio: number): void;
    setZoomRatioAtViewportPoint(zoomRatio: number, viewportPoint: IBoardViewportPoint): void;
    setViewportPanOffset(panOffset: IBoardViewportPoint): void;
    setViewportTransform(viewport: IBoardViewportTransform): void;
    shiftViewportPanOffset(delta: IBoardViewportPoint): void;
}
