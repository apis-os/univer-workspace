import type { BoardConnectorRouting, BoardShapeType, IBoardConnectorStyle, IBoardSwimlaneData } from '@univerjs-pro/boards';
import type { IBoardPendingInsert } from './board-ui-state.service';
import { BoardToolType } from '@univerjs-pro/boards';
import { ICommandService, IConfigService, IPermissionService, IUniverInstanceService } from '@univerjs/core';
import { IBoardUIStateService } from './board-ui-state.service';
import { BoardViewportService } from './board-viewport.service';
export interface IBoardTableInsertOptions {
    rows?: number;
    columns?: number;
    keepShapeSidebarOpen?: boolean;
    width?: number;
    height?: number;
    diagramPreset?: string;
}
export interface IBoardShapeInsertOptions {
    height?: number;
    width?: number;
}
interface IBoardToolMindMapBlueprintNode {
    text: string;
    orderKey?: string;
    side?: 'left' | 'right' | 'top' | 'bottom';
    collapsed?: boolean;
    branchColorKey?: string;
    foreignAttributes?: Record<string, string>;
    children: IBoardToolMindMapBlueprintNode[];
}
export declare class BoardToolService {
    private readonly _stateService;
    private readonly _commandService;
    private readonly _instanceService;
    private readonly _configService;
    private readonly _viewportService;
    private readonly _permissionService;
    constructor(_stateService: IBoardUIStateService, _commandService: ICommandService, _instanceService: IUniverInstanceService, _configService: IConfigService, _viewportService: BoardViewportService, _permissionService: IPermissionService);
    private _getInsertConfig;
    private _isToolbarAvailable;
    private _collapseInsertTools;
    collapseFloatingTools(): void;
    closeShapeSidebar(): void;
    private _getActiveBoardModel;
    private _executeActiveBoardOperation;
    activateToolbarTool(tool: BoardToolType): void;
    private _insertTable;
    private _resolveTablePendingInsert;
    beginTableInsert(size?: IBoardTableInsertOptions): void;
    beginTableInsertDrag(size?: IBoardTableInsertOptions): void;
    private _insertChart;
    private _beginLineMode;
    beginLineInsert(routing: BoardConnectorRouting, style?: Partial<IBoardConnectorStyle>): void;
    private _openContainerPanel;
    beginContainerInsert(size?: {
        width?: number;
        height?: number;
    }): void;
    private _openSwimlanePanel;
    beginSwimlaneInsert(orientation: IBoardSwimlaneData['orientation']): void;
    private _beginPenMode;
    private _openMindMapPanel;
    beginMindMapInsert(template?: {
        rootText?: string;
        structureKind?: 'mindmap-horizontal' | 'mindmap-vertical' | 'tree-right' | 'tree-left' | 'tree-alternate' | 'timeline-horizontal' | 'timeline-vertical';
        branchLineType?: 'rounded-orthogonal' | 'curve' | 'orthogonal';
        children?: Array<{
            text?: string;
            orderKey?: string;
            side?: 'left' | 'right' | 'top' | 'bottom';
            collapsed?: boolean;
            branchColorKey?: string;
            foreignAttributes?: Record<string, string>;
        }>;
        blueprint?: {
            title?: string;
            root: IBoardToolMindMapBlueprintNode;
        };
    }): void;
    private _resolveShapePendingInsert;
    beginShapeInsert(shapeType: BoardShapeType | string, options?: IBoardShapeInsertOptions): void;
    beginShapeInsertDrag(shapeType: BoardShapeType | string, options?: IBoardShapeInsertOptions): void;
    beginPendingInsertDrag(pendingInsert: IBoardPendingInsert): void;
    cancelPendingInsertDrag(): void;
    beginStickyInsert(fillColor: string): void;
    beginStickyInsertDrag(fillColor: string): void;
    openShapeSidebar(): void;
}
export {};
