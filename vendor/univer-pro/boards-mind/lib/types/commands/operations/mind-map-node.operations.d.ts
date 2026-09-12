import type { IBoardConnectorStyle, IBoardElementData, IBoardRect } from '@univerjs-pro/boards';
import type { ICustomShapeTextData, IShapeData } from '@univerjs-pro/engine-shape';
import type { ICommand, IDocumentData, IOperation, ITextStyle } from '@univerjs/core';
import type { MindMapBranchLineType, MindMapLayoutDirection, MindMapNodeSide, MindMapStructureKind } from '../../types';
import { ShapeTypeEnum } from '@univerjs-pro/engine-shape';
import { HorizontalAlign, VerticalAlign } from '@univerjs/core';
export interface IAddMindMapChildOperationParams {
    unitId: string;
    subUnitId: string;
    parentNodeId: string;
    nodeId?: string;
    connectorId?: string;
    text?: string;
    textData?: IDocumentData;
    side?: MindMapNodeSide;
    orderKey?: string;
    referenceNodeId?: string;
    placement?: 'before' | 'after';
}
export interface IAddMindMapSiblingOperationParams {
    unitId: string;
    subUnitId: string;
    nodeId: string;
    siblingNodeId?: string;
    connectorId?: string;
    text?: string;
    textData?: IDocumentData;
    placement?: 'before' | 'after';
}
export interface IToggleMindMapNodeCollapseOperationParams {
    unitId: string;
    subUnitId: string;
    nodeId: string;
    collapsed?: boolean;
}
export interface IUpdateMindMapNodeOperationParams {
    unitId: string;
    subUnitId: string;
    nodeId: string;
    text?: string;
    /** Rich document data, `null` to replace existing rich text with plain text, or `undefined` to preserve it. */
    textData?: IDocumentData | null;
    /** Shape-editor commit data. Keeps editor text and measured host size in this operation's undo transaction. */
    shapeText?: ICustomShapeTextData;
    hostSize?: {
        width: number;
        height: number;
    };
    shapeType?: ShapeTypeEnum;
    fill?: IShapeData['fill'];
    fillColor?: string;
    stroke?: IShapeData['stroke'];
    strokeColor?: string;
    textStyle?: {
        color?: string;
        fontFamily?: string;
        fontSize?: number;
        bold?: boolean;
        italic?: boolean;
        underline?: boolean;
        strikethrough?: boolean;
        horizontalAlign?: HorizontalAlign;
        verticalAlign?: VerticalAlign;
        textFill?: ITextStyle['textFill'];
    };
    foreignAttributes?: Record<string, string | null | undefined>;
}
export interface IUpdateMindMapNodesOperationParams {
    unitId: string;
    subUnitId: string;
    updates: Array<Omit<IUpdateMindMapNodeOperationParams, 'unitId' | 'subUnitId'>>;
}
export type MindMapConnectorLineType = 'solid' | 'dash' | 'dot';
export interface IUpdateMindMapIncomingConnectorOperationParams {
    unitId: string;
    subUnitId: string;
    nodeId: string;
    style: Partial<IBoardConnectorStyle> & {
        lineType?: MindMapConnectorLineType;
    };
}
export interface IDeleteMindMapNodeOperationParams {
    unitId: string;
    subUnitId: string;
    nodeId: string;
}
export interface IReparentMindMapNodeOperationParams {
    unitId: string;
    subUnitId: string;
    nodeId: string;
    newParentNodeId: string;
    incomingConnectorId?: string;
    side?: MindMapNodeSide;
    orderKey?: string;
    referenceNodeId?: string;
    placement?: 'before' | 'after';
}
export interface IPromoteMindMapNodeOperationParams {
    unitId: string;
    subUnitId: string;
    nodeId: string;
}
export interface IDetachMindMapNodeOperationParams {
    unitId: string;
    subUnitId: string;
    nodeId: string;
    containerId?: string;
    left?: number;
    top?: number;
}
export interface ITranslateMindMapOperationParams {
    unitId: string;
    subUnitId: string;
    scopeId: string;
    deltaX: number;
    deltaY: number;
    excludeElementIds?: string[];
    preserveExcludedWorldTransforms?: boolean;
}
export interface ICopyMindMapNodeOperationParams {
    unitId: string;
    subUnitId: string;
    nodeId: string;
}
export interface IPasteMindMapNodeOperationParams {
    unitId: string;
    subUnitId: string;
    targetNodeId: string;
    idMap?: Record<string, string>;
    incomingConnectorId?: string;
}
export interface IPasteMindMapAsNewMindMapOperationParams {
    unitId: string;
    subUnitId: string;
    left: number;
    top: number;
    containerId?: string;
    idMap?: Record<string, string>;
}
export interface ILayoutMindMapOperationParams {
    unitId: string;
    subUnitId: string;
    scopeId: string;
    anchorNodeId?: string;
    /** Derived render-side reflow should not create its own undo step. */
    skipUndo?: boolean;
}
export interface IChangeMindMapLayoutOperationParams {
    unitId: string;
    subUnitId: string;
    scopeId: string;
    direction?: MindMapLayoutDirection;
    structureKind?: MindMapStructureKind;
    branchLineType?: MindMapBranchLineType;
    horizontalGap?: number;
    siblingGap?: number;
    branchGap?: number;
}
export interface IReflowMindMapCommandParams extends IChangeMindMapLayoutOperationParams {
    bounds: IBoardRect;
    /** Optional inset inside `bounds`. Defaults to zero. */
    padding?: number;
    /** Retry with the supported minimum spacing when the requested layout does not fit. Defaults to `true`. */
    compact?: boolean;
}
export type MindMapReflowFailureReason = 'bounds-too-small' | 'execution-failed' | 'invalid-options' | 'mind-map-missing';
export interface IReflowMindMapCommandResult {
    success: boolean;
    fits: boolean;
    /** Final map bounds on success, or the unchanged current bounds on failure. */
    bounds: IBoardRect | null;
    /** Applied scale. V1 preserves readable node sizes, so successful reflows always return `1`. */
    scale: number;
    /** Machine-readable failure reason. */
    reason?: MindMapReflowFailureReason;
    /** Smallest unscaled layout produced by the command when the target is too small. */
    requiredBounds?: IBoardRect;
}
export interface IChangeMindMapBranchLineTypeOperationParams {
    unitId: string;
    subUnitId: string;
    scopeId: string;
    branchLineType: MindMapBranchLineType;
}
export declare function resolveMindMapLayoutPreview(elementData: Record<string, IBoardElementData>, scopeId: string): Record<string, IBoardElementData> | null;
export declare const AddMindMapChildOperation: IOperation<IAddMindMapChildOperationParams>;
export declare const AddMindMapSiblingOperation: IOperation<IAddMindMapSiblingOperationParams>;
export declare const UpdateMindMapNodeOperation: IOperation<IUpdateMindMapNodeOperationParams>;
export declare const UpdateMindMapNodesOperation: IOperation<IUpdateMindMapNodesOperationParams>;
export declare const UpdateMindMapIncomingConnectorOperation: IOperation<IUpdateMindMapIncomingConnectorOperationParams>;
export declare const DeleteMindMapNodeOperation: IOperation<IDeleteMindMapNodeOperationParams>;
export declare const ReparentMindMapNodeOperation: IOperation<IReparentMindMapNodeOperationParams>;
export declare const PromoteMindMapNodeOperation: IOperation<IPromoteMindMapNodeOperationParams>;
export declare const DetachMindMapNodeOperation: IOperation<IDetachMindMapNodeOperationParams>;
export declare const TranslateMindMapOperation: IOperation<ITranslateMindMapOperationParams>;
export declare const LayoutMindMapOperation: IOperation<ILayoutMindMapOperationParams>;
export declare const ChangeMindMapLayoutOperation: IOperation<IChangeMindMapLayoutOperationParams>;
export declare const ReflowMindMapCommand: ICommand<IReflowMindMapCommandParams, IReflowMindMapCommandResult>;
export declare const ChangeMindMapBranchLineTypeOperation: IOperation<IChangeMindMapBranchLineTypeOperationParams>;
export declare const CopyMindMapNodeOperation: IOperation<ICopyMindMapNodeOperationParams>;
export declare const PasteMindMapNodeOperation: IOperation<IPasteMindMapNodeOperationParams>;
export declare const PasteMindMapAsNewMindMapOperation: IOperation<IPasteMindMapAsNewMindMapOperationParams>;
export declare const ToggleMindMapNodeCollapseOperation: IOperation<IToggleMindMapNodeCollapseOperationParams>;
export declare const MIND_MAP_NODE_OPERATIONS: (IOperation<IAddMindMapChildOperationParams, boolean> | IOperation<IAddMindMapSiblingOperationParams, boolean> | IOperation<IUpdateMindMapNodeOperationParams, boolean> | IOperation<IUpdateMindMapNodesOperationParams, boolean> | IOperation<IUpdateMindMapIncomingConnectorOperationParams, boolean> | IOperation<ITranslateMindMapOperationParams, boolean> | IOperation<ILayoutMindMapOperationParams, boolean> | IOperation<IChangeMindMapLayoutOperationParams, boolean> | ICommand<IReflowMindMapCommandParams, IReflowMindMapCommandResult> | IOperation<IChangeMindMapBranchLineTypeOperationParams, boolean> | IOperation<IPasteMindMapNodeOperationParams, boolean> | IOperation<IPasteMindMapAsNewMindMapOperationParams, boolean>)[];
