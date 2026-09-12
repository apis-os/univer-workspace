import type { ISmartArtData, ISmartArtTransform } from '../shape-type';
export interface ISmartArtLayoutAlgorithm {
    parameters: Readonly<Record<string, string>>;
    type: string;
}
export interface ISmartArtLayoutConstraint {
    parameters: Readonly<Record<string, string>>;
    type: string;
}
export interface ISmartArtLayoutRule {
    parameters: Readonly<Record<string, string>>;
    type: string;
}
export declare function usesAdaptiveNamedAspect2DFlow(algorithm: ISmartArtLayoutAlgorithm | undefined, constraints: readonly ISmartArtLayoutConstraint[], itemLayoutNames?: readonly string[]): boolean;
export interface ISmartArtTopLevelLayout {
    algorithm?: ISmartArtLayoutAlgorithm;
    constraints: readonly ISmartArtLayoutConstraint[];
    descendantAnchorNodeIdByNodeId?: Readonly<Record<string, string>>;
    descendantPresentationLayoutNames?: readonly string[];
    hasFixedAspectConditionalDescendantPresentation?: boolean;
    hasExplicitShapeDescendantPresentation?: boolean;
    hasInlineSelfDescendantPresentation?: boolean;
    hasIndexedCompositeDescendantPresentation?: boolean;
    hasNestedCompositeDescendantPresentation?: boolean;
    hasNamedSiblingTransitionDescendantBinding?: boolean;
    hasNonTextDescendantPresentation?: boolean;
    hasQuarterTurnDescendantPresentation?: boolean;
    hasReferencedSelfDescendantPresentation?: boolean;
    isCompositeDelegate?: boolean;
    isHierarchyDelegate?: boolean;
    itemAlgorithmByNodeId?: Readonly<Record<string, ISmartArtLayoutAlgorithm>>;
    itemConstraintsByNodeId?: Readonly<Record<string, readonly ISmartArtLayoutConstraint[]>>;
    itemLayoutNameByNodeId?: Readonly<Record<string, string>>;
    visibleItemPresentationNamesByNodeId?: Readonly<Record<string, readonly string[]>>;
    itemRulesByNodeId?: Readonly<Record<string, readonly ISmartArtLayoutRule[]>>;
    presentationNameMapByNodeId?: Readonly<Record<string, Readonly<Record<string, string>>>>;
    reverseChildOrder?: boolean;
}
export interface ISmartArtLayoutBranchTrace {
    availableBranches: readonly ISmartArtLayoutBranch[];
    availableBranchIds: readonly string[];
    observedValuesByBranchId: Readonly<Record<string, readonly (string | number)[]>>;
    selectedBranchIds: readonly string[];
}
export interface ISmartArtLayoutBranch {
    id: string;
    operation: 'else' | 'if' | 'none';
    parameters: Readonly<Record<string, string>>;
}
export interface ISmartArtProgramLayout {
    boundsByNodeId: ReadonlyMap<string, ISmartArtTransform>;
    descendantAnchorNodeIdByNodeId?: Readonly<Record<string, string>>;
    hasCrossAxisFlow: boolean;
    hasPartitionedCrossAxisFlow: boolean;
    itemConstraintsByNodeId: Readonly<Record<string, readonly ISmartArtLayoutConstraint[]>>;
    itemLayoutNameByNodeId: Readonly<Record<string, string>>;
    namedBoundsByNodeId: ReadonlyMap<string, ReadonlyMap<string, ISmartArtTransform>>;
}
export interface ISmartArtHierarchyChildLayout {
    alignmentOffset?: number;
    assistant?: ISmartArtLayoutAlgorithm;
    content?: ISmartArtLayoutAlgorithm;
}
/** Whether a composite declares an unpositioned parent geometry through its own aspect ratio. */
export declare function hasCompositeRootExtentGeometry(constraints: readonly ISmartArtLayoutConstraint[]): boolean;
/** Resolves the complete named child rectangles from a DiagramML composite coordinate graph. */
export declare function resolveSmartArtCompositeNamedBounds(constraints: readonly ISmartArtLayoutConstraint[], viewport: Pick<ISmartArtTransform, 'height' | 'width'>, names: readonly string[], aspectRatio?: string): ReadonlyMap<string, ISmartArtTransform>;
export declare function usesActiveNamedAspect2DFlow(algorithm: ISmartArtLayoutAlgorithm | undefined, constraints: readonly ISmartArtLayoutConstraint[], itemLayoutNames: readonly string[]): boolean;
export declare function resolveSmartArtCompositeNaturalAspectRatio(constraints: readonly ISmartArtLayoutConstraint[]): string | undefined;
/** Resolves supported DiagramML program containers without layout-specific IDs. */
export declare function resolveSmartArtProgramLayout(data: ISmartArtData, options?: {
    allowIndirectCompositeCandidates?: boolean;
}): ISmartArtProgramLayout | undefined;
/** Resolves active per-node hierarchy child algorithms from DiagramML. */
export declare function resolveSmartArtHierarchyChildLayouts(data: ISmartArtData): Readonly<Record<string, ISmartArtHierarchyChildLayout>>;
/** Resolves the active top-level DiagramML algorithm and constraints for the current logical tree. */
export declare function resolveSmartArtTopLevelLayout(data: ISmartArtData): ISmartArtTopLevelLayout | undefined;
/** Resolves the active top-level DiagramML algorithm for the current logical tree. */
export declare function resolveSmartArtTopLevelAlgorithm(data: ISmartArtData): ISmartArtLayoutAlgorithm | undefined;
export declare function resolveSmartArtSupportedNodeIds(data: ISmartArtData): ReadonlySet<string>;
/** Reports the DiagramML conditional branches reached by the current logical tree. */
export declare function resolveSmartArtLayoutBranchTrace(data: ISmartArtData): ISmartArtLayoutBranchTrace;
