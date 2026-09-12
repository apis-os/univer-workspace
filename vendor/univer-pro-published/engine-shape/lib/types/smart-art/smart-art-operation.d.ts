import type { IShapeTextData, ISmartArtData, ISmartArtDataNode, ISmartArtPresentationShape } from '../shape-type';
import type { SmartArtCategoryEnum, SmartArtDirectionEnum } from './smart-art-enum';
import { SmartArtInsertPositionEnum } from './smart-art-enum';
export declare enum SmartArtOperationTypeEnum {
    Replace = "replace",
    InsertNode = "insertNode",
    DeleteNode = "deleteNode",
    MoveNode = "moveNode",
    PromoteNode = "promoteNode",
    DemoteNode = "demoteNode",
    UpdateNode = "updateNode",
    UpdateNodeText = "updateNodeText",
    UpdatePresentationShape = "updatePresentationShape",
    UpdatePresentationText = "updatePresentationText",
    ReplacePresentationImage = "replacePresentationImage",
    SetDirection = "setDirection",
    SetLayout = "setLayout",
    SetQuickStyle = "setQuickStyle",
    SetColorStyle = "setColorStyle",
    Reset = "reset"
}
export type SmartArtOperation = {
    type: SmartArtOperationTypeEnum.Replace;
    data: ISmartArtData;
} | {
    type: SmartArtOperationTypeEnum.InsertNode;
    nodeId: string;
    node?: ISmartArtDataNode;
    targetNodeId?: string;
    position: SmartArtInsertPositionEnum;
} | {
    type: SmartArtOperationTypeEnum.DeleteNode;
    nodeId: string;
} | {
    type: SmartArtOperationTypeEnum.MoveNode;
    nodeId: string;
    targetNodeId: string;
    position: Exclude<SmartArtInsertPositionEnum, SmartArtInsertPositionEnum.Assistant>;
} | {
    type: SmartArtOperationTypeEnum.PromoteNode;
    nodeId: string;
} | {
    type: SmartArtOperationTypeEnum.DemoteNode;
    nodeId: string;
} | {
    type: SmartArtOperationTypeEnum.UpdateNode;
    nodeId: string;
    update: Partial<Pick<ISmartArtDataNode, 'fontSizeMode' | 'role' | 'text'>>;
} | {
    type: SmartArtOperationTypeEnum.UpdateNodeText;
    nodeId: string;
    text: string;
} | {
    type: SmartArtOperationTypeEnum.UpdatePresentationShape;
    presentationShapeId: string;
    update: Partial<Pick<ISmartArtPresentationShape, 'shapeData' | 'transform'>>;
} | {
    type: SmartArtOperationTypeEnum.UpdatePresentationText;
    presentationShapeId: string;
    shapeText: IShapeTextData;
    fontSizeChanged?: boolean;
    fontSizeNodeId?: string;
} | {
    type: SmartArtOperationTypeEnum.ReplacePresentationImage;
    presentationShapeId: string;
    source: string;
    sourceType: NonNullable<ISmartArtPresentationShape['shapeData']['fill']>['fillImageSourceType'];
} | {
    type: SmartArtOperationTypeEnum.SetDirection;
    direction: SmartArtDirectionEnum;
} | {
    type: SmartArtOperationTypeEnum.SetLayout;
    layoutId: string;
    category?: SmartArtCategoryEnum;
} | {
    type: SmartArtOperationTypeEnum.SetQuickStyle;
    quickStyleId: string;
} | {
    type: SmartArtOperationTypeEnum.SetColorStyle;
    colorStyleId: string;
} | {
    type: SmartArtOperationTypeEnum.Reset;
};
export declare function applySmartArtOperation(data: ISmartArtData, operation: SmartArtOperation): ISmartArtData;
