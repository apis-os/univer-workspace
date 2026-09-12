declare const BoardMindMapStructureKind: {
    /** Horizontal two-sided mind map. */
    readonly MindMapHorizontal: "mindmap-horizontal";
    /** Vertical mind map. */
    readonly MindMapVertical: "mindmap-vertical";
    /** Right-growing tree. */
    readonly TreeRight: "tree-right";
    /** Left-growing tree. */
    readonly TreeLeft: "tree-left";
    /** Alternating-side tree. */
    readonly TreeAlternate: "tree-alternate";
    /** Horizontal timeline. */
    readonly TimelineHorizontal: "timeline-horizontal";
    /** Vertical timeline. */
    readonly TimelineVertical: "timeline-vertical";
};
declare const BoardMindMapBranchLineType: {
    /** Rounded elbow branches. */
    readonly RoundedOrthogonal: "rounded-orthogonal";
    /** Curved branches. */
    readonly Curve: "curve";
    /** Sharp elbow branches. */
    readonly Orthogonal: "orthogonal";
};
declare const BoardMindMapNodeSide: {
    /** Left side of the parent. */
    readonly Left: "left";
    /** Right side of the parent. */
    readonly Right: "right";
    /** Top side of the parent. */
    readonly Top: "top";
    /** Bottom side of the parent. */
    readonly Bottom: "bottom";
};
/**
 * Mind map enum constants exposed through `univerAPI.Enum`.
 *
 * Import `@univerjs-pro/boards-mind/facade` before using this surface. Agents should prefer these constants to raw
 * strings when selecting a layout, connector route, or requested child side.
 *
 * @example
 * ```ts
 * const layout = univerAPI.Enum.BoardMindMapStructureKind.TreeRight;
 * console.log(layout);
 * ```
 */
export interface IFBoardMindMapEnumMixin {
    /**
     * Structured mind map layouts accepted by `insertMindMap()`.
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.BoardMindMapStructureKind.TreeRight);
     * ```
     */
    BoardMindMapStructureKind: typeof BoardMindMapStructureKind;
    /**
     * Branch routing styles accepted by `insertMindMap()`.
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.BoardMindMapBranchLineType.Curve);
     * ```
     */
    BoardMindMapBranchLineType: typeof BoardMindMapBranchLineType;
    /**
     * Requested child node sides accepted by mind map creation and node insertion APIs.
     *
     * @example
     * ```ts
     * const side = univerAPI.Enum.BoardMindMapNodeSide.Right;
     * console.log(side);
     * ```
     */
    BoardMindMapNodeSide: typeof BoardMindMapNodeSide;
}
declare module '@univerjs/core/facade' {
    interface FEnum extends IFBoardMindMapEnumMixin {
    }
}
export {};
