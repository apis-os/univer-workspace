import { BoardBackgroundType, BoardConnectorLabelAnchor, BoardConnectorLabelOffsetSpace, BoardConnectorLabelOrientation, BoardConnectorLabelSide, BoardConnectorLabelSizing, BoardConnectorSite, BoardCustomShapeType, BoardElementType, BoardSequenceShapeType, BoardToolType } from '@univerjs-pro/boards';
/**
 * Facade-only enum constants are intentionally module-local.
 *
 * External callers should use them through `univerAPI.Enum.*`, while TypeScript users import `IFBoardEnumMixin` for the
 * `Enum` surface type. Keeping the constants private avoids a second named-import API and prevents value exports from
 * colliding with the facade type aliases in `f-board.ts`.
 */
/**
 * Connector routing styles accepted by board facade connector APIs.
 *
 * Use these constants instead of raw strings when generating agent code so prompts, examples, and autocomplete all
 * expose the valid routing options.
 */
declare const BoardConnectorRoutingValues: {
    /**
     * Draws a direct line between endpoints. Use only for short connections with clear space; it does not perform
     * general obstacle avoidance.
     */
    readonly Straight: "straight";
    /**
     * Draws an orthogonal elbow connector. Combine with automatic routing for normal process and dependency diagrams
     * that need obstacle routing.
     */
    readonly Orthogonal: "orthogonal";
    /**
     * Draws a curved connector. Prefer it for feedback, return, and self-loop relationships with clear arc space.
     */
    readonly Curve: "curve";
    /**
     * Draws a manually controlled polyline connector. Use it only when the caller supplies the intended path.
     */
    readonly FreePolyline: "freePolyline";
};
/**
 * Connector routing modes accepted by board facade connector APIs.
 */
declare const BoardConnectorRoutingModeValues: {
    /**
     * Lets the board choose and refresh the route automatically.
     */
    readonly Auto: "auto";
    /**
     * Keeps the caller-provided route.
     */
    readonly Manual: "manual";
    /**
     * Uses a route with both automatic and manually controlled parts.
     */
    readonly Mixed: "mixed";
};
/** UML class relationship presets accepted by class-relation facade helpers. */
declare const BoardUMLClassRelationTypeValues: {
    readonly Association: "association";
    readonly DirectedAssociation: "directedAssociation";
    readonly Aggregation: "aggregation";
    readonly Composition: "composition";
    readonly Generalization: "generalization";
    readonly Realization: "realization";
    readonly Dependency: "dependency";
};
/** ERD relationship line styles accepted by entity-relation facade helpers. */
declare const BoardERDRelationTypeValues: {
    readonly Identifying: "identifying";
    readonly NonIdentifying: "nonIdentifying";
};
/** Common crow-foot cardinalities accepted by entity-relation facade helpers. */
declare const BoardERDCardinalityValues: {
    readonly One: "one";
    readonly ZeroOrOne: "zeroOrOne";
    readonly OneOrMany: "oneOrMany";
    readonly ZeroOrMany: "zeroOrMany";
};
/** UML sequence message presets accepted by sequence-message facade helpers. */
declare const BoardSequenceMessageTypeValues: {
    readonly Synchronous: "synchronous";
    readonly Asynchronous: "asynchronous";
    readonly Reply: "reply";
    readonly Create: "create";
    readonly Destroy: "destroy";
    readonly Self: "self";
};
/**
 * Semantic connection site ids for shape-site connector endpoints.
 */
/**
 * Z-order placements accepted by `reorderElements()`.
 */
declare const BoardElementOrderPlacement: {
    /**
     * Move elements to the top of the z-order.
     */
    readonly Front: "front";
    /**
     * Move elements one step forward in the z-order.
     */
    readonly Forward: "forward";
    /**
     * Move elements one step backward in the z-order.
     */
    readonly Backward: "backward";
    /**
     * Move elements to the bottom of the z-order.
     */
    readonly Back: "back";
};
/**
 * Swimlane orientations accepted by board swimlane facade APIs.
 */
declare const BoardSwimlaneOrientation: {
    /**
     * Lanes are stacked from top to bottom.
     */
    readonly Horizontal: "horizontal";
    /**
     * Lanes are arranged from left to right.
     */
    readonly Vertical: "vertical";
};
/** Container kinds persisted by Board container elements. */
declare const BoardContainerKindValues: {
    readonly Generic: "generic";
    readonly Swimlane: "swimlane";
    readonly UMLPackage: "uml-package";
    readonly SystemBoundary: "system-boundary";
};
/**
 * Bounds placement directions for `getNextAvailableBounds()`.
 */
declare const BoardFacadeNextAvailableBoundsPlacementValues: {
    /**
     * Place the new bounds to the right of existing content.
     */
    readonly Right: "right";
    /**
     * Place the new bounds below existing content.
     */
    readonly Below: "below";
};
/**
 * Element alignment modes for board facade alignment helpers.
 */
declare const BoardFacadeElementAlignmentValues: {
    /**
     * Align left edges.
     */
    readonly Left: "left";
    /**
     * Align horizontal centers.
     */
    readonly Center: "center";
    /**
     * Align right edges.
     */
    readonly Right: "right";
    /**
     * Align top edges.
     */
    readonly Top: "top";
    /**
     * Align vertical middles.
     */
    readonly Middle: "middle";
    /**
     * Align bottom edges.
     */
    readonly Bottom: "bottom";
};
/**
 * Distribution axes for board facade distribution helpers.
 */
declare const BoardFacadeElementDistributionValues: {
    /**
     * Distribute elements along the x-axis.
     */
    readonly Horizontal: "horizontal";
    /**
     * Distribute elements along the y-axis.
     */
    readonly Vertical: "vertical";
};
/**
 * Layered layout directions for agent-generated diagrams.
 */
declare const BoardFacadeLayeredLayoutDirectionValues: {
    /**
     * Layout layers from top to bottom.
     */
    readonly Vertical: "vertical";
    /**
     * Layout layers from left to right.
     */
    readonly Horizontal: "horizontal";
};
/**
 * Cross-axis alignment modes for layered layouts.
 */
declare const BoardFacadeLayeredLayoutAlignmentValues: {
    /**
     * Align layer items to the start of the cross-axis.
     */
    readonly Start: "start";
    /**
     * Center layer items on the cross-axis.
     */
    readonly Center: "center";
    /**
     * Align layer items to the end of the cross-axis.
     */
    readonly End: "end";
};
/**
 * Connection modes for linking adjacent element layers.
 */
declare const BoardFacadeLayeredConnectionModeValues: {
    /**
     * Connect each source layer item to every target layer item.
     */
    readonly Complete: "complete";
    /**
     * Connect items by matching index.
     */
    readonly Pairwise: "pairwise";
    /**
     * Connect each source item to a fan of target items.
     */
    readonly Fan: "fan";
};
/**
 * Board facade enum mixin exposed as `univerAPI.Enum`.
 *
 * Use these constants in agent-generated board scripts instead of importing package enums or writing raw string
 * literals. This keeps examples copy-pasteable from the facade surface.
 *
 */
export interface IFBoardEnumMixin {
    /** Board page background types accepted by Board background APIs. */
    BoardBackgroundType: typeof BoardBackgroundType;
    /**
     * Board element model types used by query and preflight APIs.
     *
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     *
     * const shapeDescriptors = board.describeElements({
     *   elementType: univerAPI.Enum.BoardElementType.Shape,
     * });
     *
     * console.log(shapeDescriptors.length);
     * ```
     */
    BoardElementType: typeof BoardElementType;
    /**
     * Board toolbar tool types used by UI integrations.
     *
     * This enum is not used by FBoard mutation APIs. Agent scripts that create board content should call id-first
     * facade methods such as `insertShape()` or `insertConnector()` instead of switching tools.
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.BoardToolType.Shape);
     * ```
     */
    BoardToolType: typeof BoardToolType;
    /**
     * Native UML sequence participant and activation shapes.
     *
     * Use these shapes with `lifeline` connector endpoints. Do not simulate a lifeline with a dashed free connector.
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.BoardSequenceShapeType.ObjectLifeline);
     * ```
     */
    BoardSequenceShapeType: typeof BoardSequenceShapeType;
    /** Native UML, component, storage, actor, and state shapes. */
    BoardCustomShapeType: typeof BoardCustomShapeType;
    /** Container kinds stored in Board snapshots. Use `createSwimlane()` for the swimlane kind. */
    BoardContainerKind: typeof BoardContainerKindValues;
    /**
     * Connector routing styles accepted by board connector facade APIs.
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.BoardConnectorRouting.Orthogonal);
     * ```
     */
    BoardConnectorRouting: typeof BoardConnectorRoutingValues;
    /**
     * Connector routing modes accepted by board connector facade APIs.
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.BoardConnectorRoutingMode.Auto);
     * ```
     */
    BoardConnectorRoutingMode: typeof BoardConnectorRoutingModeValues;
    /** Path-relative anchors accepted by connector label placement. */
    BoardConnectorLabelAnchor: typeof BoardConnectorLabelAnchor;
    BoardConnectorLabelOffsetSpace: typeof BoardConnectorLabelOffsetSpace;
    /** Lateral sides accepted by connector label placement. */
    BoardConnectorLabelSide: typeof BoardConnectorLabelSide;
    /** Text orientations accepted by connector label placement. */
    BoardConnectorLabelOrientation: typeof BoardConnectorLabelOrientation;
    BoardConnectorLabelSizing: typeof BoardConnectorLabelSizing;
    /** UML class relationship presets used by `insertClassRelation(s)`. */
    BoardUMLClassRelationType: typeof BoardUMLClassRelationTypeValues;
    /** ERD relationship line styles used by `insertEntityRelation(s)`. */
    BoardERDRelationType: typeof BoardERDRelationTypeValues;
    /** Crow-foot cardinalities used by `insertEntityRelation(s)`. */
    BoardERDCardinality: typeof BoardERDCardinalityValues;
    /** UML sequence message types used by `insertSequenceMessages()`. */
    BoardSequenceMessageType: typeof BoardSequenceMessageTypeValues;
    /**
     * Semantic shape-site ids for connector endpoints.
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.BoardConnectorSite.Bottom);
     * ```
     */
    BoardConnectorSite: typeof BoardConnectorSite;
    /**
     * Z-order placements accepted by board reorder APIs.
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.BoardElementOrderPlacement.Front);
     * ```
     */
    BoardElementOrderPlacement: typeof BoardElementOrderPlacement;
    /**
     * Swimlane orientations accepted by board swimlane facade APIs.
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.BoardSwimlaneOrientation.Horizontal);
     * ```
     */
    BoardSwimlaneOrientation: typeof BoardSwimlaneOrientation;
    /**
     * Placement directions accepted by `getNextAvailableBounds()`.
     *
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     *
     * const bounds = board.getNextAvailableBounds({
     *   width: 180,
     *   height: 100,
     *   placement: univerAPI.Enum.BoardFacadeNextAvailableBoundsPlacement.Right,
     * });
     *
     * console.log(bounds);
     * ```
     */
    BoardFacadeNextAvailableBoundsPlacement: typeof BoardFacadeNextAvailableBoundsPlacementValues;
    /**
     * Element alignment modes accepted by board alignment helpers.
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.BoardFacadeElementAlignment.Left);
     * ```
     */
    BoardFacadeElementAlignment: typeof BoardFacadeElementAlignmentValues;
    /**
     * Distribution axes accepted by board distribution helpers.
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.BoardFacadeElementDistribution.Horizontal);
     * ```
     */
    BoardFacadeElementDistribution: typeof BoardFacadeElementDistributionValues;
    /**
     * Layered layout directions accepted by diagram layout helpers.
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.BoardFacadeLayeredLayoutDirection.Horizontal);
     * ```
     */
    BoardFacadeLayeredLayoutDirection: typeof BoardFacadeLayeredLayoutDirectionValues;
    /**
     * Cross-axis alignment modes accepted by layered layout helpers.
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.BoardFacadeLayeredLayoutAlignment.Center);
     * ```
     */
    BoardFacadeLayeredLayoutAlignment: typeof BoardFacadeLayeredLayoutAlignmentValues;
    /**
     * Connection modes accepted by layered connector helpers.
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.BoardFacadeLayeredConnectionMode.Pairwise);
     * ```
     */
    BoardFacadeLayeredConnectionMode: typeof BoardFacadeLayeredConnectionModeValues;
}
declare module '@univerjs/core/facade' {
    interface FEnum extends IFBoardEnumMixin {
    }
}
export {};
