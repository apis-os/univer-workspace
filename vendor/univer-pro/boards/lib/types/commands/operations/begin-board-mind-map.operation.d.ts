import type { IOperation } from '@univerjs/core';
export interface IBeginBoardMindMapTreeBlueprintNode {
    text: string;
    orderKey?: string;
    side?: 'left' | 'right' | 'top' | 'bottom';
    collapsed?: boolean;
    branchColorKey?: string;
    foreignAttributes?: Record<string, string>;
    children: IBeginBoardMindMapTreeBlueprintNode[];
}
export interface IBeginBoardMindMapTreeBlueprint {
    title?: string;
    root: IBeginBoardMindMapTreeBlueprintNode;
}
export interface IBeginBoardMindMapOperationParams {
    unitId: string;
    subUnitId: string;
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
    blueprint?: IBeginBoardMindMapTreeBlueprint;
}
export declare const BeginBoardMindMapOperation: IOperation<IBeginBoardMindMapOperationParams>;
