import type { IMindMapChildBlueprint, IMindMapTreeBlueprint, MindMapBranchLineType, MindMapStructureKind } from '@univerjs-pro/boards-mind';
import { Disposable } from '@univerjs/core';
export interface IBoardMindMapInsertTemplate {
    rootText?: string;
    structureKind?: MindMapStructureKind;
    branchLineType?: MindMapBranchLineType;
    children?: IMindMapChildBlueprint[];
    blueprint?: IMindMapTreeBlueprint;
}
export declare const DEFAULT_BOARD_MIND_MAP_INSERT_TEMPLATE: IBoardMindMapInsertTemplate;
export declare class BoardMindMapInsertStateService extends Disposable {
    private _template;
    setTemplate(template?: IBoardMindMapInsertTemplate): void;
    getTemplate(): IBoardMindMapInsertTemplate;
    private _cloneBlueprint;
    private _cloneBlueprintNode;
    private _normalizeChildren;
    private _resolveChildSide;
}
