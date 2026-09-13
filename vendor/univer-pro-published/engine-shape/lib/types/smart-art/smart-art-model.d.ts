import type { IBasicShapeData, IShapeData, IShapeTextData, ISmartArtData, ISmartArtDataNode, ISmartArtPresentationShape, ISmartArtPresentationTextBinding, ISmartArtShapeData } from '../shape-type';
import type { SmartArtCategoryEnum, SmartArtDirectionEnum } from './smart-art-enum';
import { SmartArtInsertPositionEnum, SmartArtPresentationShapeRoleEnum, SmartArtTextFontSizeModeEnum } from './smart-art-enum';
export interface IInsertSmartArtNodeOptions {
    node: ISmartArtDataNode;
    targetNodeId?: string;
    position: SmartArtInsertPositionEnum;
}
export interface IMoveSmartArtNodeOptions {
    nodeId: string;
    targetNodeId: string;
    position: Exclude<SmartArtInsertPositionEnum, SmartArtInsertPositionEnum.Assistant>;
}
export interface IUpdateSmartArtPresentationTextOptions {
    fontSizeMode?: SmartArtTextFontSizeModeEnum;
    fontSizeNodeId?: string;
}
export interface IConvertedSmartArtShape {
    id: string;
    transform: ISmartArtPresentationShape['transform'];
    shapeData: ISmartArtPresentationShape['shapeData'];
}
export declare function isSmartArtShapeData(shapeData: IShapeData): shapeData is ISmartArtShapeData;
export declare function insertSmartArtNode(data: ISmartArtData, options: IInsertSmartArtNodeOptions): ISmartArtData;
export declare function deleteSmartArtNode(data: ISmartArtData, nodeId: string): ISmartArtData;
export declare function moveSmartArtNode(data: ISmartArtData, options: IMoveSmartArtNodeOptions): ISmartArtData;
export declare function promoteSmartArtNode(data: ISmartArtData, nodeId: string): ISmartArtData;
export declare function demoteSmartArtNode(data: ISmartArtData, nodeId: string): ISmartArtData;
export declare function updateSmartArtNode(data: ISmartArtData, nodeId: string, update: Partial<Pick<ISmartArtDataNode, 'fontSizeMode' | 'role' | 'text'>>): ISmartArtData;
export declare function readSmartArtTextContent(text: IShapeTextData): string;
export declare function resolveSmartArtPresentationTextBindings(data: ISmartArtData, presentationShapeId: string): ISmartArtPresentationTextBinding[];
export declare function resolveSmartArtPresentationShapeIdForNode(data: ISmartArtData, nodeId: string, preferredRole?: SmartArtPresentationShapeRoleEnum): string | undefined;
/** Resolves a character offset in a rendered presentation text Shape back to its logical Text Pane node. */
export declare function resolveSmartArtPresentationNodeIdAtTextOffset(data: ISmartArtData, presentationShapeId: string, textOffset: number): string | undefined;
export declare function updateSmartArtPresentationText(data: ISmartArtData, presentationShapeId: string, shapeText: IShapeTextData, options?: IUpdateSmartArtPresentationTextOptions): ISmartArtData;
export declare function resetSmartArtTextFontSizes(data: ISmartArtData): ISmartArtData;
export declare function replaceSmartArtTextContent(previous: IShapeTextData, nextText: string, documentId?: string): IShapeTextData;
export declare function setSmartArtDirection(data: ISmartArtData, direction: SmartArtDirectionEnum): ISmartArtData;
export declare function setSmartArtLayout(data: ISmartArtData, layout: {
    id: string;
    category: SmartArtCategoryEnum;
}): ISmartArtData;
export declare function updateSmartArtPresentationShape(data: ISmartArtData, presentationShapeId: string, update: Partial<Pick<ISmartArtPresentationShape, 'shapeData' | 'transform'>>): ISmartArtData;
export declare function resolveSmartArtPresentationShapeData(data: ISmartArtData, presentationShapeId: string, textScale?: number): IBasicShapeData | null;
export declare function convertSmartArtToShapes(data: ISmartArtData): IConvertedSmartArtShape[];
export declare function validateSmartArtData(data: ISmartArtData): string[];
export declare function isSmartArtNodeSupported(data: ISmartArtData, nodeId: string): boolean;
