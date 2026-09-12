import type { IBasicShapeData, IShapeTextData, ISmartArtData, ISmartArtTransform } from '../shape-type';
import type { ISmartArtLayoutAlgorithm, ISmartArtTopLevelLayout } from './smart-art-layout-program-evaluator';
import { SmartArtCategoryEnum, SmartArtDirectionEnum, SmartArtNodeRoleEnum, SmartArtPresentationShapeRoleEnum, SmartArtPresentationTextSourceEnum } from './smart-art-enum';
export interface ISmartArtLayoutTemplate {
    layout: {
        id: string;
        category: SmartArtCategoryEnum;
    };
    direction: SmartArtDirectionEnum;
    supportsAddAfter?: boolean;
    nodes: Array<{
        parentIndex: number;
        role: SmartArtNodeRoleEnum;
    }>;
    presentationShapes: Array<{
        name?: string;
        role: SmartArtPresentationShapeRoleEnum;
        nodeIndexes: number[];
        textNodeIndexes?: number[];
        transform: ISmartArtTransform;
        shapeType: IBasicShapeData['shapeType'];
        shapeData?: IBasicShapeData;
        shapeText?: IShapeTextData;
        textSource?: SmartArtPresentationTextSourceEnum;
    }>;
    viewport?: {
        width: number;
        height: number;
    };
    variants?: Array<Pick<ISmartArtLayoutTemplate, 'nodes' | 'presentationShapes'>>;
}
export type ISmartArtLayoutTemplateSemanticShape = Pick<ISmartArtLayoutTemplate['presentationShapes'][number], 'name' | 'role' | 'nodeIndexes' | 'textNodeIndexes' | 'textSource'>;
export interface ISmartArtLayoutTemplateSemanticOverlay {
    presentationShapes?: ISmartArtLayoutTemplateSemanticShape[];
    variants?: Array<{
        presentationShapes: ISmartArtLayoutTemplateSemanticShape[];
    } | undefined>;
}
export declare const SMART_ART_LAYOUT_TEMPLATE_CATALOG: Readonly<Record<string, ISmartArtLayoutTemplate>>;
export declare function createSmartArtDataFromLayout(layoutId: string, category?: SmartArtCategoryEnum): ISmartArtData | null;
export declare function applySmartArtLayout(data: ISmartArtData, layoutId: string, options?: {
    category?: SmartArtCategoryEnum;
    preservePresentationStyles?: boolean;
}): ISmartArtData;
export declare function reflowSmartArtDataToMatchingTemplate(data: ISmartArtData, options?: {
    scaleTemplateToViewport?: boolean;
}): ISmartArtData;
export declare function usesTransitionAspectGeometry(data: ISmartArtData): boolean;
export declare function reflowSmartArtDirectNamedCompositeToViewport(data: ISmartArtData, allowExactTemplate?: boolean): ISmartArtData | undefined;
export declare function reflowSmartArtCompleteNamedCompositeToViewport(data: ISmartArtData): ISmartArtData | undefined;
export declare function hasExactSmartArtLayoutTemplate(data: ISmartArtData): boolean;
export declare function usesAutoSizedFirstNodeCenteredCycle(data: ISmartArtData): boolean;
export declare function isSmartArtDirectCompositeShapeOmitted(data: ISmartArtData, shapeId: string): boolean;
export declare function usesNaturalPositionedPictureFlow(data: ISmartArtData): boolean;
export declare function usesFixedAspectCompositeLinearPacking(data: ISmartArtData): boolean;
export declare function usesSingleFixedAspectLinearItem(data: ISmartArtData): boolean;
export declare function usesFittedFirstNodeCenteredCycle(data: ISmartArtData): boolean;
export declare function usesPresentationCenteredCompositeCycle(data: ISmartArtData): boolean;
export declare function usesFixedDiameterFirstNodeCenteredCycle(data: ISmartArtData): boolean;
export declare function usesOuterCircularCycle(layout: ISmartArtTopLevelLayout | undefined): layout is ISmartArtTopLevelLayout & {
    algorithm: ISmartArtLayoutAlgorithm;
};
export declare function usesUniformNodeTransitionLinearFlow(data: ISmartArtData): boolean;
export declare function usesNamedCompositeSiblingTransitionLinearFlow(data: ISmartArtData): boolean;
export declare function usesNamedCompositeSpacingLinearFlow(data: ISmartArtData): boolean;
export declare function usesViewportCrossNamedCompositeLinearFlow(data: ISmartArtData): boolean;
interface ISmartArtAutoSnakeItemGeometry {
    layoutAspectRatio: number;
    namedBoundsByNodeId: ReadonlyMap<string, ReadonlyMap<string, ISmartArtTransform>>;
    visibleBoundsByNodeId: ReadonlyMap<string, ISmartArtTransform>;
    visibleNamesByNodeId: Readonly<Record<string, readonly string[]>>;
}
/** Whether a snake program fixes each composite item's cross extent and caps its flow extent. */
export declare function usesFixedExtentSnakeItemGeometry(layout: ISmartArtTopLevelLayout | undefined, nodeIds: readonly string[]): boolean;
export declare function resolveSmartArtAutoSnakeItemGeometry(layout: ISmartArtTopLevelLayout | undefined, nodeIds: readonly string[]): ISmartArtAutoSnakeItemGeometry | undefined;
export declare function usesBoundedUniformNodeTransitionLinearFlow(data: ISmartArtData): boolean;
export declare function usesRepeatedAnchoredSharedPresentation(data: ISmartArtData): boolean;
export declare function reflowRepeatedAnchoredSharedPresentationToViewport(data: ISmartArtData, viewport: {
    height: number;
    width: number;
}): ISmartArtData | undefined;
export declare function resolveSmartArtPresentationShapeOwnerNodeIds(data: ISmartArtData): ReadonlyMap<string, string>;
export {};
