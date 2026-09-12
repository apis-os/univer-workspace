import type { IBoardConnectorElement, IBoardContainerElement, IBoardPageElement, IBoardShapeElement } from '@univerjs-pro/boards';
import type { IDocumentData } from '@univerjs/core';
import type { MIND_MAP_CONNECTOR_ROLE, MIND_MAP_CONTAINER_ROLE, MIND_MAP_DECORATION_ROLE, MIND_MAP_MODE_ID, MIND_MAP_NODE_ROLE } from './const';
export type MindMapLayoutDirection = 'right' | 'left' | 'both';
export type MindMapStructureKind = 'mindmap-horizontal' | 'mindmap-vertical' | 'tree-right' | 'tree-left' | 'tree-alternate' | 'timeline-horizontal' | 'timeline-vertical';
export type MindMapBranchLineType = 'rounded-orthogonal' | 'curve' | 'orthogonal';
export type MindMapNodeSide = 'left' | 'right' | 'top' | 'bottom';
export interface IStructuredMindMapMeta {
    modeId: typeof MIND_MAP_MODE_ID;
    structureScopeId: string;
    semanticRole: typeof MIND_MAP_CONTAINER_ROLE | typeof MIND_MAP_NODE_ROLE | typeof MIND_MAP_CONNECTOR_ROLE | typeof MIND_MAP_DECORATION_ROLE;
    generationScopeId?: string;
    provenance?: {
        format: string;
        importedAt?: number;
        sourceContainerId?: string;
        generationRevision?: number;
    };
}
export interface IMindMapContainerData {
    presentation: 'implicit';
    boundsMode: 'auto-fit';
    rootNodeId: string;
    layout: {
        direction: MindMapLayoutDirection;
        structureKind?: MindMapStructureKind;
        branchLineType?: MindMapBranchLineType;
        horizontalGap: number;
        siblingGap: number;
        branchGap: number;
    };
    themeId: string;
    structureRevision: number;
    sourceProvenance?: {
        format: 'opml';
        fileName?: string;
        importedAt: number;
    };
}
export interface IMindMapNodeData {
    parentNodeId: string | null;
    orderKey: string;
    side?: MindMapNodeSide;
    collapsed: boolean;
    branchColorKey?: string;
    foreignAttributes?: Record<string, string>;
    size?: {
        minWidth?: number;
        minHeight?: number;
        maxWidth?: number;
        maxHeight?: number;
    };
}
export interface IMindMapConnectorData {
    managed: true;
    parentNodeId: string;
    childNodeId: string;
}
export interface IMindMapDecorationData {
    ownerNodeId: string;
    offsetX: number;
    offsetY: number;
}
export interface IMindMapCustomData {
    structured: IStructuredMindMapMeta;
    mindmap: IMindMapContainerData | IMindMapNodeData | IMindMapConnectorData | IMindMapDecorationData;
}
export type IMindMapContainerElement = IBoardContainerElement & {
    custom: IMindMapCustomData & {
        mindmap: IMindMapContainerData;
    };
};
export type IMindMapNodeElement = IBoardShapeElement & {
    custom: IMindMapCustomData & {
        mindmap: IMindMapNodeData;
    };
};
export type IMindMapConnectorElement = IBoardConnectorElement & {
    custom: IMindMapCustomData & {
        mindmap: IMindMapConnectorData;
    };
};
export interface IMindMapChildBlueprint {
    nodeId?: string;
    connectorId?: string;
    text?: string;
    textData?: IDocumentData;
    orderKey?: string;
    side?: MindMapNodeSide;
    collapsed?: boolean;
    branchColorKey?: string;
    foreignAttributes?: Record<string, string>;
}
export interface IMindMapTreeBlueprintNode {
    nodeId?: string;
    connectorId?: string;
    text: string;
    textData?: IDocumentData;
    orderKey?: string;
    side?: MindMapNodeSide;
    collapsed?: boolean;
    branchColorKey?: string;
    foreignAttributes?: Record<string, string>;
    children: IMindMapTreeBlueprintNode[];
}
export interface IMindMapTreeBlueprint {
    title?: string;
    root: IMindMapTreeBlueprintNode;
}
export interface ICreateMindMapElementsOptions {
    containerId?: string;
    rootNodeId?: string;
    left: number;
    top: number;
    rootText?: string;
    structureKind?: MindMapStructureKind;
    branchLineType?: MindMapBranchLineType;
    children?: IMindMapChildBlueprint[];
}
export interface ICreateMindMapElementsFromBlueprintOptions {
    containerId?: string;
    rootNodeId?: string;
    left: number;
    top: number;
    blueprint: IMindMapTreeBlueprint;
    structureKind?: MindMapStructureKind;
    branchLineType?: MindMapBranchLineType;
}
export interface ICreateMindMapElementsResult {
    container: IMindMapContainerElement;
    rootNode: IMindMapNodeElement;
    nodes: IMindMapNodeElement[];
    connectors: IMindMapConnectorElement[];
    elements: IBoardPageElement[];
}
export interface ICreateMindMapChildElementsOptions {
    nodeId?: string;
    connectorId?: string;
    scopeId: string;
    parentNode: IMindMapNodeElement;
    orderKey: string;
    side: MindMapNodeSide;
    text?: string;
    textData?: IDocumentData;
    branchColorKey?: string;
    branchLineType?: MindMapBranchLineType;
    treeRootTrunk?: boolean;
    timelineRootStructureKind?: Extract<MindMapStructureKind, 'timeline-horizontal' | 'timeline-vertical'>;
    left: number;
    top: number;
}
export interface ICreateMindMapChildElementsResult {
    node: IMindMapNodeElement;
    connector: IMindMapConnectorElement;
    elements: IBoardPageElement[];
}
