import type { MindMapBranchLineType, MindMapNodeSide, MindMapStructureKind } from '../types';
export interface IMindMapTreeLayoutNode {
    id: string;
    parentId: string | null;
    side?: MindMapNodeSide;
    collapsed?: boolean;
    width: number;
    height: number;
    children: IMindMapTreeLayoutNode[];
}
export interface IMindMapTreeLayoutOptions {
    rootLeft: number;
    rootTop: number;
    structureKind?: MindMapStructureKind;
    horizontalGap?: number;
    siblingGap?: number;
}
export interface IMindMapTreeLayoutPosition {
    left: number;
    top: number;
}
export declare function isMindMapTreeStructureKind(structureKind?: MindMapStructureKind): boolean;
export declare function isMindMapTimelineStructureKind(structureKind?: MindMapStructureKind): structureKind is Extract<MindMapStructureKind, 'timeline-horizontal' | 'timeline-vertical'>;
export declare function isMindMapPlainStructureKind(structureKind?: MindMapStructureKind): structureKind is Extract<MindMapStructureKind, 'mindmap-horizontal' | 'mindmap-vertical'>;
export declare function resolveMindMapBranchLineTypeForStructure(structureKind?: MindMapStructureKind, branchLineType?: MindMapBranchLineType): MindMapBranchLineType;
export declare function resolveMindMapTreeLayout(root: IMindMapTreeLayoutNode, options: IMindMapTreeLayoutOptions): Map<string, IMindMapTreeLayoutPosition>;
