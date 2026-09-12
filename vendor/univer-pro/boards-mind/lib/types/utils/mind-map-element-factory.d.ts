import type { IBoardPageElement } from '@univerjs-pro/boards';
import type { ICreateMindMapChildElementsOptions, ICreateMindMapChildElementsResult, ICreateMindMapElementsFromBlueprintOptions, ICreateMindMapElementsOptions, ICreateMindMapElementsResult, IMindMapConnectorData, IMindMapContainerData, IMindMapContainerElement, IMindMapDecorationData, IMindMapNodeData, MindMapBranchLineType, MindMapStructureKind } from '../types';
import { MIND_MAP_CONNECTOR_ROLE, MIND_MAP_CONTAINER_ROLE, MIND_MAP_DECORATION_ROLE, MIND_MAP_MODE_ID, MIND_MAP_NODE_ROLE } from '../const';
export declare function createMindMapContainerElement(options: {
    id: string;
    rootNodeId: string;
    left: number;
    top: number;
    width: number;
    height: number;
    structureKind?: MindMapStructureKind;
    branchLineType?: MindMapBranchLineType;
}): IMindMapContainerElement;
export declare function createMindMapElements(options: ICreateMindMapElementsOptions): ICreateMindMapElementsResult;
export declare function createMindMapElementsFromBlueprint(options: ICreateMindMapElementsFromBlueprintOptions): ICreateMindMapElementsResult;
export declare function createMindMapChildElements(options: ICreateMindMapChildElementsOptions): ICreateMindMapChildElementsResult;
export declare function getMindMapContainerMeta(element: IBoardPageElement | null | undefined): (IMindMapContainerData & {
    semanticRole: typeof MIND_MAP_CONTAINER_ROLE;
    modeId: typeof MIND_MAP_MODE_ID;
    structureScopeId: string;
}) | null;
export declare function getMindMapNodeMeta(element: IBoardPageElement | null | undefined): (IMindMapNodeData & {
    semanticRole: typeof MIND_MAP_NODE_ROLE;
    modeId: typeof MIND_MAP_MODE_ID;
    structureScopeId: string;
}) | null;
export declare function getMindMapConnectorMeta(element: IBoardPageElement | null | undefined): (IMindMapConnectorData & {
    semanticRole: typeof MIND_MAP_CONNECTOR_ROLE;
    modeId: typeof MIND_MAP_MODE_ID;
    structureScopeId: string;
}) | null;
export declare function getMindMapDecorationMeta(element: IBoardPageElement | null | undefined): (IMindMapDecorationData & {
    semanticRole: typeof MIND_MAP_DECORATION_ROLE;
    modeId: typeof MIND_MAP_MODE_ID;
    structureScopeId: string;
}) | null;
