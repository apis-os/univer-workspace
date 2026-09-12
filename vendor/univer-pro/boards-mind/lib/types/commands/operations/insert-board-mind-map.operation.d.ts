import type { IOperation } from '@univerjs/core';
import type { IMindMapChildBlueprint, IMindMapTreeBlueprint, MindMapBranchLineType, MindMapStructureKind } from '../../types';
export interface IInsertBoardMindMapOperationParams {
    unitId: string;
    subUnitId: string;
    containerId?: string;
    rootNodeId?: string;
    left: number;
    top: number;
    rootText?: string;
    structureKind?: MindMapStructureKind;
    branchLineType?: MindMapBranchLineType;
    children?: IMindMapChildBlueprint[];
    blueprint?: IMindMapTreeBlueprint;
    insertIndex?: number;
}
export declare const InsertBoardMindMapOperation: IOperation<IInsertBoardMindMapOperationParams>;
