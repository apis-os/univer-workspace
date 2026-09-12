import type { BoardBackgroundImageFit, BoardCaptureBoundsResult, BoardConnectorRouting, BoardConnectorRoutingMode, BoardConnectorSide, BoardElementOrderPlacement, BoardModel, BoardShapeType, IBoardBackgroundData, IBoardConnectorEndpoint, IBoardConnectorLabel, IBoardConnectorLabelStyle, IBoardConnectorLabelStylePatch, IBoardConnectorStyle, IBoardConnectorWaypoint, IBoardContainerElement, IBoardData, IBoardElementData, IBoardLayoutAnalysisResult, IBoardPageElement, IBoardRect, IBoardShapeCreateInput, IBoardSwimlaneData, IBoardTextElement, IBoardTextStyle, IBoardThemeData, ICreateBoardContainerElementOptions, ICreateBoardSwimlaneElementOptions, INormalizeBoardConnectorRoutingResult, IResolveBoardCaptureBoundsCommandParams } from '@univerjs-pro/boards';
import type { IShapeTextBoxOptions } from '@univerjs-pro/engine-shape';
import type { BoardFacadeTextContent } from './board-text-content';
import { BoardElementType } from '@univerjs-pro/boards';
import { IShapeHostAdapterRegistry } from '@univerjs-pro/engine-shape';
import { FConnectorShape, FShape } from '@univerjs-pro/engine-shape/facade';
import { ICommandService, ImageSourceType, Injector, IPermissionService, IResourceLoaderService, IUniverInstanceService, RichTextValue } from '@univerjs/core';
import { FBaseInitialable } from '@univerjs/core/facade';
import { FBoardElementPermission, FBoardPermission } from './f-board-permission';
type AnalyzeBoardModelLayoutResult = IBoardLayoutAnalysisResult | false;
type NormalizeBoardConnectorRoutingResult = INormalizeBoardConnectorRoutingResult | false;
type ResolveBoardCaptureBoundsParams = IResolveBoardCaptureBoundsCommandParams;
type ResolveBoardCaptureBoundsResult = BoardCaptureBoundsResult | false;
export type IBoardFacadeCaptureBoundsOptions = Omit<ResolveBoardCaptureBoundsParams, 'subUnitId' | 'unitId'>;
/**
 * Options for inserting one element into a board.
 *
 */
export interface IBoardFacadeAddElementOptions {
    /**
     * Optional z-order insertion index. Omit it to append according to the command default.
     */
    insertIndex?: number;
}
/**
 * Options for inserting multiple elements in one board command.
 *
 */
export interface IBoardFacadeAddElementsOptions extends IBoardFacadeAddElementOptions {
    /**
     * Optional generated container id to resize after the batch insert succeeds. Agents should usually omit this and use
     * `fitContainerId`.
     */
    fitContainerId?: string;
}
/**
 * Query options for finding board elements by type and visibility.
 *
 */
export interface IBoardFacadeElementQuery {
    /**
     * Board element type, such as `univerAPI.Enum.BoardElementType.Shape` or
     * `univerAPI.Enum.BoardElementType.Connector`.
     */
    elementType?: BoardElementType;
    /**
     * Board element types. Use this when an agent needs only shapes, connectors, tables, containers, or another subset.
     */
    elementTypes?: BoardElementType[];
    /**
     * Include elements with `visible === false`. Defaults to `false`.
     */
    includeHidden?: boolean;
    /**
     * Include elements with `locked === true`. Defaults to `true` because agents often need to inspect locked content.
     */
    includeLocked?: boolean;
}
/**
 * Structured preflight result for generated board element ids.
 *
 */
export interface IBoardFacadeElementIdCheckResult {
    /**
     * Normalized requested ids after trimming blanks and removing duplicates.
     */
    requestedIds: string[];
    /**
     * Requested ids that resolve to existing elements.
     */
    existingIds: string[];
    /**
     * Requested ids that do not resolve to existing elements.
     */
    missingIds: string[];
    /**
     * Whether every normalized requested id resolved to an existing element.
     */
    allExist: boolean;
}
/**
 * One generated board element id whose resolved element type does not match the expected type set.
 *
 */
export interface IBoardFacadeElementIdTypeMismatch {
    /**
     * Generated board element id.
     */
    id: string;
    /**
     * Actual board element type found for the id.
     */
    actualType: BoardElementType;
    /**
     * Allowed board element types expected by the caller.
     */
    expectedTypes: BoardElementType[];
}
/**
 * Structured preflight result for generated board element ids and expected board element types.
 *
 */
export interface IBoardFacadeElementIdTypeCheckResult {
    /**
     * Normalized requested ids after trimming blanks and removing duplicates.
     */
    requestedIds: string[];
    /**
     * Requested ids that resolve to elements with an expected type.
     */
    matchingIds: string[];
    /**
     * Requested ids that do not resolve to elements.
     */
    missingIds: string[];
    /**
     * Requested ids that exist but have a different board element type.
     */
    mismatchedIds: IBoardFacadeElementIdTypeMismatch[];
    /**
     * Whether every normalized requested id exists and has an expected type.
     */
    allMatch: boolean;
}
/**
 * Resolved top-level metadata for a board element.
 *
 */
export interface IBoardFacadeElementMetadata {
    /**
     * User-facing element name.
     */
    name?: string;
    /**
     * User-facing description.
     */
    description?: string;
    /**
     * Whether the element is visible on the board. Defaults to `true` when the model field is omitted.
     */
    visible: boolean;
    /**
     * Whether the element can be selected. Defaults to `true` when the model field is omitted.
     */
    selectable: boolean;
    /**
     * Whether the element is locked. Defaults to `false` when the model field is omitted.
     */
    locked: boolean;
}
/** Lightweight connector-label summary for agent readback. */
export interface IBoardFacadeConnectorLabelDescriptor {
    id: string;
    text?: string;
    anchor?: NonNullable<NonNullable<IBoardConnectorLabel['placement']>['anchor']>;
    side?: NonNullable<NonNullable<IBoardConnectorLabel['placement']>['side']>;
}
/**
 * Compact board element summary designed for agents and external integrations.
 *
 * This descriptor intentionally exposes generated ids, metadata, parent ids, and geometry without
 * exposing large internal payloads such as `shapeData` or `connectorData`. Use `getElement()` only when a script needs
 * low-level board model details.
 *
 */
export interface IBoardFacadeElementDescriptor extends IBoardFacadeElementMetadata {
    /**
     * Generated board element id.
     */
    id: string;
    /**
     * Zero-based position in the page element order.
     *
     * Smaller values are lower in the board z-order and larger values are closer to the front.
     */
    orderIndex: number;
    /**
     * Board element type, such as `shape`, `connector`, `container`, or `table`.
     */
    type: BoardElementType;
    /**
     * Lightweight element subtype for agent reasoning.
     *
     * For common element types this is resolved from shape type, connector routing, container kind, or placeholder type.
     */
    subtype?: string;
    /**
     * Primary visible text for agent reasoning.
     *
     * For common element types this is resolved from shape text, connector label text, container title, text element
     * content, or placeholder text. It is omitted when the element has no plain visible text.
     */
    text?: string;
    /**
     * Generated parent container id, when the element belongs to a container or swimlane. Prefer `parentId` in
     * long-lived agent scripts when it is available.
     */
    parentId?: string;
    /**
     * Connector start element id, when this descriptor describes a connector bound to a board element.
     */
    startElementId?: string;
    /**
     * Connector end element id, when this descriptor describes a connector bound to a board element.
     */
    endElementId?: string;
    /** Lightweight connector labels. Rich document payloads remain available through `getConnectorLabels()`. */
    connectorLabels?: IBoardFacadeConnectorLabelDescriptor[];
    /**
     * Swimlane lane id, when the element belongs to a swimlane lane.
     */
    laneId?: string;
    /**
     * Local transform stored on the element.
     */
    transform: IBoardPageElement['transform'];
    /**
     * Resolved bounds in board coordinates after parent container transforms are applied.
     */
    bounds: IBoardRect | null;
}
/**
 * One Board element's model-space layout.
 */
export interface IBoardFacadeElementLayout {
    id: string;
    orderIndex: number;
    bounds: IBoardRect | null;
}
/**
 * Model-space layout for the active page of an infinite Board.
 *
 * Boards do not expose a finite container rectangle. `contentBounds` is only
 * the union of existing element bounds.
 */
export interface IBoardFacadeElementLayoutResult {
    subUnitId: string;
    elements: IBoardFacadeElementLayout[];
    contentBounds: IBoardRect | null;
}
/**
 * Lightweight geometry snapshot for an element.
 *
 * Use this in agent layout code when both resolved bounds and center point are needed, but the full descriptor would be
 * unnecessarily large.
 *
 */
export interface IBoardFacadeElementGeometry {
    /**
     * Resolved element bounds in board coordinates after parent container transforms are applied.
     */
    bounds: IBoardRect;
    /**
     * Center point derived from `bounds` in board coordinates.
     */
    center: IBoardFacadePoint;
}
/**
 * Lightweight geometry descriptor for a query-matched board element.
 *
 * Use this when an agent needs enough identity and geometry to make layout decisions, but does not need the full
 * `IBoardFacadeElementDescriptor` payload.
 *
 */
export interface IBoardFacadeElementGeometryDescriptor extends IBoardFacadeElementGeometry {
    /**
     * Generated board element id.
     */
    id: string;
    /**
     * Board element type, such as `shape`, `connector`, `container`, or `table`.
     */
    type: BoardElementType;
    /**
     * Lightweight element subtype for agent reasoning.
     */
    subtype?: string;
    /**
     * Element z-order index on the page.
     */
    orderIndex: number;
}
/**
 * Placement direction used by `getNextAvailableBounds()`.
 *
 * @example
 * ```ts
 * const placement = univerAPI.Enum.BoardFacadeNextAvailableBoundsPlacement.Right;
 *
 * const board = univerAPI.getActiveBoard();
 * if (!board) throw new Error('No active board');
 *
 * const bounds = board.getNextAvailableBounds({
 *   width: 240,
 *   height: 120,
 *   placement,
 * });
 * if (!bounds) throw new Error('Cannot find available bounds');
 * console.log(bounds.left, bounds.top);
 * ```
 */
export type BoardFacadeNextAvailableBoundsPlacement = 'right' | 'below';
/**
 * Options for `getNextAvailableBounds()`.
 *
 */
export interface IBoardFacadeGetNextAvailableBoundsOptions {
    /**
     * Desired bounds width for the new content.
     */
    width: number;
    /**
     * Desired bounds height for the new content.
     */
    height: number;
    /**
     * Gap between existing content and the returned bounds. Defaults to `80`.
     */
    gap?: number;
    /**
     * Where to place the returned bounds relative to matching existing content. Defaults to `right`.
     */
    placement?: BoardFacadeNextAvailableBoundsPlacement;
    /**
     * Fallback top-left point when `query` matches no bounded elements. Defaults to `{ x: 0, y: 0 }`.
     */
    origin?: IBoardFacadePoint;
    /**
     * Existing content used as the occupancy query. Defaults to all visible bounded elements on the active page.
     */
    query?: IBoardFacadeElementQuery;
}
/**
 * Top-level metadata patch for an existing board element.
 *
 */
export interface IBoardFacadeSetElementMetadataPatch {
    /**
     * User-facing element name. Set to `undefined` to clear it.
     */
    name?: string;
    /**
     * User-facing description. Set to `undefined` to clear it.
     */
    description?: string;
    /**
     * Whether the element is visible on the board.
     */
    visible?: boolean;
    /**
     * Whether the element can be selected.
     */
    selectable?: boolean;
    /**
     * Whether the element is locked.
     */
    locked?: boolean;
}
/**
 * Arbitrary custom payload accepted by board facade creation APIs.
 *
 * Use this for opaque integration-owned data such as `owner`, `traceId`, or importer metadata. The facade does not
 * interpret custom fields as element identity or maintain indexes for them.
 *
 */
export interface IBoardFacadeCustomPayload {
    /**
     * Integration-owned custom fields.
     */
    [key: string]: unknown;
}
/**
 * Agent-friendly options for inserting one Board image.
 *
 */
export interface IBoardFacadeInsertImageOptions extends IBoardFacadeAddElementOptions {
    /** Optional element id. A random id is generated when omitted. */
    id?: string;
    /** Image URL, data URL, or resource identifier interpreted by `imageSourceType`. */
    source: string;
    /**
     * Image source enum. Defaults to `univerAPI.Enum.ImageSourceType.URL`.
     *
     * Set this explicitly for non-URL sources such as a resource UUID or a Base64-specific integration contract.
     */
    imageSourceType?: ImageSourceType;
    /** Left position in board coordinates. */
    left: number;
    /** Top position in board coordinates. */
    top: number;
    /** Rendered image width in board units. */
    width: number;
    /** Rendered image height in board units. */
    height: number;
    /** Optional generated parent container id. Prefer `parentId` in agent scripts. */
    parentId?: string;
    /** Optional target swimlane lane id. */
    laneId?: string;
    /** Integration-owned custom payload. Reserved facade fields are ignored. */
    custom?: IBoardFacadeCustomPayload;
}
/** Options for using an image as the active Board page background. */
export interface IBoardFacadeSetImageBackgroundOptions {
    /** Image URL, data URL, or resource identifier interpreted by `imageSourceType`. */
    source: string;
    /** Image source enum. Defaults to `univerAPI.Enum.ImageSourceType.URL`. */
    imageSourceType?: ImageSourceType;
    /** How the image fills the visible Board canvas: `cover`, `contain`, or `stretch`. Defaults to `cover`. */
    fit?: BoardBackgroundImageFit;
}
/**
 * Agent-friendly options for inserting standalone Board text.
 *
 * Standalone text has no visible shape fill or border. Use `insertShape()` when the text should live inside a shape.
 * Rich text is stored as standard Univer document data and remains editable by the Board text editor.
 *
 */
export interface IBoardFacadeInsertTextOptions extends IBoardFacadeAddElementOptions {
    /** Optional element id. A random id is generated when omitted. */
    id?: string;
    /** Left position in board coordinates. */
    left: number;
    /** Top position in board coordinates. */
    top: number;
    /** Optional text box width. The Board text factory supplies a default when omitted. */
    width?: number;
    /** Optional text box height. The Board text factory supplies a default when omitted. */
    height?: number;
    /** Plain or rich text content. Use `univerAPI.newRichText()` for styled spans and paragraphs. */
    text: BoardFacadeTextContent;
    /** Optional default text style. Rich-text runs override these defaults where they provide explicit formatting. */
    textStyle?: IBoardTextStyle;
    /** Whether text flows horizontally. Defaults to `true`. */
    horizontal?: boolean;
    /** Optional generated parent container id. Prefer `parentId` in agent scripts. */
    parentId?: string;
    /** Optional target swimlane lane id. */
    laneId?: string;
    /** Integration-owned custom payload. Reserved facade fields are ignored. */
    custom?: IBoardFacadeCustomPayload;
}
/**
 * Board-specific base options for inserting one shape at a coordinate.
 *
 */
interface IBoardFacadeInsertShapeAtPointBaseOptions extends IBoardFacadeAddElementOptions {
    /**
     * Optional element id. A random id is generated when omitted.
     */
    id?: string;
    /**
     * Shape type accepted by the board shape factory.
     *
     * Agents should use `univerAPI.Enum.ShapeTypeEnum` constants for built-in shapes. Custom shape ids are still accepted
     * when the host registers additional board shapes.
     */
    shapeType: BoardShapeType | string;
    /**
     * Left position in board coordinates.
     */
    left: number;
    /**
     * Top position in board coordinates.
     */
    top: number;
    /**
     * Optional width. When omitted, the shape factory uses the default size for the shape type.
     */
    width?: number;
    /**
     * Optional height. When omitted, the shape factory uses the default size for the shape type.
     */
    height?: number;
    /**
     * Optional plain or rich text shown inside the shape. Use `univerAPI.newRichText()` to build styled content.
     */
    text?: BoardFacadeTextContent;
    /**
     * Optional text-box layout options for the text hosted by this shape.
     *
     * These options describe how the shape hosts its text. They do not change the text content itself. Use
     * `univerAPI.newRichText().columns()` to create rich-text columns. Padding values are in px.
     *
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     *
     * board.insertShapeAtPoint({
     *   point: { x: 80, y: 80 },
     *   shapeType: univerAPI.Enum.ShapeTypeEnum.Rect,
     *   text: 'Board shape text',
     *   textBox: {
     *     textDirection: univerAPI.Enum.ShapeTextDirection.Horz,
     *     autoFitType: univerAPI.Enum.ShapeTextAutoFitType.NoAutoFit,
     *     textWrap: univerAPI.Enum.ShapeTextWrapType.Square,
     *     padding: { left: 10, right: 10, top: 5, bottom: 5 },
     *   },
     * });
     * ```
     */
    textBox?: IShapeTextBoxOptions;
    /**
     * Optional shape fill color.
     */
    fillColor?: string;
    /**
     * Optional shape stroke color.
     */
    strokeColor?: string;
    /**
     * Optional shape stroke width.
     */
    strokeWidth?: number;
    /**
     * Optional generated parent container id. Agents should usually omit this and use `parentId` when inserting into
     * a container.
     */
    parentId?: string;
    /**
     * Optional swimlane lane id.
     */
    laneId?: string;
    /** Additional custom payload merged into `element.custom`. */
    custom?: IBoardFacadeCustomPayload;
}
/**
 * Agent-friendly options for inserting one shape at a board coordinate.
 *
 * @example
 * ```ts
 * const board = univerAPI.getActiveBoard();
 * if (!board) throw new Error('No active board');
 *
 * const options = {
 *   point: { x: 180, y: 160 },
 *   shapeType: univerAPI.Enum.ShapeTypeEnum.RoundRect,
 *   text: 'Dropped card',
 *   attachToDropTarget: true,
 * };
 *
 * const shape = board.insertShapeAtPoint(options);
 * if (!shape) throw new Error('Cannot insert dropped card');
 * ```
 */
export interface IBoardFacadeInsertShapeAtPointOptions extends Omit<IBoardFacadeInsertShapeAtPointBaseOptions, 'left' | 'top'> {
    /**
     * Board coordinate used as the shape's top-left position and optional drop-target lookup point.
     */
    point: IBoardFacadePoint;
    /**
     * Container hit-test area used for automatic parent/lane resolution. Defaults to `content`.
     */
    dropTargetArea?: IBoardFacadeResolveContainerAtPointOptions['area'];
    /**
     * Whether to attach the shape to the resolved container or swimlane lane. Defaults to `true`.
     */
    attachToDropTarget?: boolean;
}
/**
 * Endpoint input accepted by facade connector insertion APIs.
 *
 * Use `side` and `position` when reproducing visible connection points from a reference diagram. `position` is
 * normalized to `[0, 1]`: top/bottom grow left-to-right and left/right grow top-to-bottom. Use the same pair for an
 * intentional shared port, or distinct positions ordered by target geometry to fan several edges out along one side.
 *
 * When a reference is available, preserve its line geometry, dash, arrow direction, and endpoint approach before
 * applying general routing recommendations. `start` is the arrow tail and `end` receives `style.endMarker`; choose the
 * end side that matches the visible approach direction. For example, two diagonal arrows entering the upper-left and
 * upper-right of an ellipse should use two positions on `side: 'top'`, not the ellipse's left and right sides.
 *
 * Omit `side`, `connectionSiteId`, and `position` during insertion to let facade planning choose the side facing the
 * other bound element. Omit only `position` when an explicit side center is sufficient. The facade never silently
 * spreads or merges endpoints because both behaviors can be semantically correct. Raw Board connector endpoints remain
 * available for free points and advanced boundary bindings.
 *
 */
export type BoardFacadeConnectorEndpointInput = IBoardConnectorEndpoint | {
    /**
     * Generated board element id.
     */
    elementId: string;
    /**
     * Legacy numeric side id. Prefer `side` in new agent-authored code. If both are supplied, they must identify the
     * same side.
     */
    connectionSiteId?: number;
    /**
     * Semantic side of the shape boundary.
     */
    side?: BoardConnectorSide;
    /**
     * Normalized location on the selected side. Requires an explicit `side` or `connectionSiteId`.
     *
     * For example, five visually separated edges may use `[0.1, 0.3, 0.5, 0.7, 0.9]`; edges that intentionally
     * share a port should reuse one value.
     */
    position?: number;
};
/**
 * Routing accepted by facade connector insertion APIs.
 *
 * `auto` is a facade planning mode. It persists a regular Board routing value: `straight` for a clear, aligned
 * corridor and `orthogonal` otherwise. Existing connector data therefore remains compatible with the Board model.
 */
export type BoardFacadeConnectorRouting = BoardConnectorRouting | 'auto';
/**
 * Agent-friendly connector relationship snapshot.
 *
 * Bound endpoints use generated element ids for bound targets. Free endpoints and bound
 * endpoints retain their normal Board endpoint representation. The returned arrays and endpoints are detached.
 *
 */
export interface IBoardFacadeConnectorConnection {
    /** Detached start endpoint, using a generated id when available. */
    start: BoardFacadeConnectorEndpointInput;
    /** Detached end endpoint, using a generated id when available. */
    end: BoardFacadeConnectorEndpointInput;
    /** Current connector routing algorithm. */
    routing: BoardConnectorRouting;
    /** Current automatic/manual routing mode. */
    routingMode: BoardConnectorRoutingMode;
    /** Detached manual waypoints in Board coordinates. */
    waypoints: IBoardConnectorWaypoint[];
}
/**
 * Relationship patch for an existing connector.
 *
 * Omitted fields preserve their current values. Supplying `waypoints` without `routingMode` switches the connector to
 * manual mode when the waypoint list is non-empty and to automatic mode when it is empty.
 *
 */
export interface IBoardFacadeConnectorConnectionPatch {
    /** Replacement start endpoint. */
    start?: BoardFacadeConnectorEndpointInput;
    /** Replacement end endpoint. */
    end?: BoardFacadeConnectorEndpointInput;
    /** Replacement routing algorithm. */
    routing?: BoardConnectorRouting;
    /** Replacement routing mode. */
    routingMode?: BoardConnectorRoutingMode;
    /** Replacement manual waypoints. Pass an empty array to clear them. */
    waypoints?: IBoardConnectorWaypoint[];
}
/**
 * Agent-friendly options for inserting one connector.
 *
 * Direction is explicit and independent from geometry: put the relationship source in `start`, the target in `end`,
 * and a normal one-way arrowhead in `style.endMarker`. For a reverse relationship, swap `start` and `end`; for a
 * bidirectional relationship, set both `style.startMarker` and `style.endMarker`.
 *
 * @example
 * ```ts
 * board.insertConnector({
 *   start: { elementId: source.id, side: 'right', position: 0.5 },
 *   end: { elementId: target.id, side: 'left', position: 0.5 },
 *   routing: 'orthogonal',
 *   routingMode: 'auto',
 *   style: { endMarker: { type: 'filledTriangle', size: 'md' } },
 * });
 * ```
 *
 */
export interface IBoardFacadeInsertConnectorOptions extends IBoardFacadeAddElementOptions {
    /**
     * Optional element id. A random id is generated when omitted.
     */
    id?: string;
    /**
     * Optional generated parent container id. Agents should usually omit this and use `parentId` when creating
     * connectors inside a container.
     */
    parentId?: string;
    /**
     * Optional swimlane lane id.
     */
    laneId?: string;
    /**
     * Connector start endpoint (the relationship tail when using `style.endMarker`).
     */
    start?: BoardFacadeConnectorEndpointInput;
    /**
     * Connector end endpoint. `style.endMarker` is drawn here, so its side should match the reference arrow's approach.
     */
    end?: BoardFacadeConnectorEndpointInput;
    /**
     * Convenience source element id. Used when `start` and `fromElementId` are omitted.
     */
    fromElementId?: string;
    /**
     * Convenience target element id. Used when `end` and `toElementId` are omitted.
     */
    toElementId?: string;
    /**
     * Source connection site id for convenience id endpoints. Use `univerAPI.Enum.BoardConnectorSite`. When omitted,
     * the facade chooses the outward side facing the target.
     */
    fromConnectionSiteId?: number;
    /**
     * Target connection site id for convenience id endpoints. Use `univerAPI.Enum.BoardConnectorSite`. When omitted,
     * the facade chooses the side facing the source.
     */
    toConnectionSiteId?: number;
    /**
     * Connector routing style. Defaults to facade `auto` planning.
     *
     * When copying a reference, match its visible geometry first: direct vertical/diagonal segments are `straight`,
     * smooth arcs are `curve`, right-angle bends are `orthogonal`, and visible multi-corner paths are `freePolyline`.
     * When omitted or set to `auto`, the facade uses a straight connector only for aligned, facing endpoints with a
     * clear corridor. Otherwise it persists an automatic orthogonal connector with miter corners. Use an explicit
     * routing value to reproduce reference geometry. Straight and curve routes do not provide obstacle avoidance.
     */
    routing?: BoardFacadeConnectorRouting;
    /**
     * Routing mode. Defaults to `auto` unless manual waypoints are supplied by the factory.
     */
    routingMode?: BoardConnectorRoutingMode;
    /**
     * Manual waypoints for polyline/orthogonal connectors.
     */
    waypoints?: IBoardConnectorWaypoint[];
    /**
     * Connector style. For the common source-to-target relationship, use `endMarker`. Use `startMarker` only for a
     * visible marker at the relationship source, such as a reverse or bidirectional edge. Marker rotation follows the
     * final rendered path automatically; callers choose marker semantics, not marker angles. Animation is disabled by
     * default. Set `animation` to opt into `dash`, `particle`, `pulse`, `gradient`, `particles`, or `arrows`; prefer
     * animating only a small number of important flows because every animated connector needs periodic repainting.
     */
    style?: IBoardConnectorStyle;
    /**
     * Optional connector label. Pass `{ id, content }` for a centered plain label with automatic visual placement.
     * Use `placement: { anchor: 'path', pathRatio: 0.5 }` for explicit whole-path placement.
     */
    label?: IBoardFacadeConnectorLabel;
    /**
     * Ordered connector labels. When provided, this takes precedence over `label` and `labelText`.
     */
    labels?: IBoardFacadeConnectorLabel[];
    /**
     * Convenience centered plain-text label with automatic visual placement. Ignored when `label` is provided.
     */
    labelText?: BoardFacadeTextContent;
    /**
     * Additional custom payload merged into `element.custom`.
     *
     * Additional custom payload merged into `element.custom`.
     */
    custom?: IBoardFacadeCustomPayload;
}
/**
 * Connector item used by `insertConnectors()`.
 *
 * It intentionally omits `insertIndex` because it is a batch-level option.
 *
 */
export type IBoardFacadeInsertConnectorItem = Omit<IBoardFacadeInsertConnectorOptions, 'insertIndex'>;
/**
 * Batch options for `insertConnectors()`.
 *
 * This empty interface intentionally inherits `insertIndex` and `fitContainerId` from
 * `IBoardFacadeAddElementsOptions`. Use it to insert many connectors through one command; `fitContainerId` is useful
 * when the connectors belong to a container.
 *
 */
export interface IBoardFacadeInsertConnectorsOptions extends IBoardFacadeAddElementsOptions {
}
/** UML class relationship presets expanded into editable Board connectors. */
export type BoardUMLClassRelationType = 'association' | 'directedAssociation' | 'aggregation' | 'composition' | 'generalization' | 'realization' | 'dependency';
/** Entity-relationship line styles. */
export type BoardERDRelationType = 'identifying' | 'nonIdentifying';
/** Common crow-foot cardinalities supported by the ERD connector facade. */
export type BoardERDCardinality = 'one' | 'zeroOrOne' | 'oneOrMany' | 'zeroOrMany';
/** UML sequence message presets expanded into lifeline-bound connectors. */
export type BoardSequenceMessageType = 'synchronous' | 'asynchronous' | 'reply' | 'create' | 'destroy' | 'self';
export interface IBoardFacadeClassRelationEnd {
    elementId: string;
    connectionSiteId?: number;
    role?: BoardFacadeTextContent;
    multiplicity?: string;
}
export interface IBoardFacadeInsertClassRelationOptions extends IBoardFacadeAddElementOptions {
    id?: string;
    type: BoardUMLClassRelationType;
    start: IBoardFacadeClassRelationEnd;
    end: IBoardFacadeClassRelationEnd;
    name?: BoardFacadeTextContent;
    routing?: BoardFacadeConnectorRouting;
    style?: IBoardConnectorStyle;
    parentId?: string;
    laneId?: string;
}
export type IBoardFacadeInsertClassRelationItem = Omit<IBoardFacadeInsertClassRelationOptions, 'insertIndex'>;
export interface IBoardFacadeEntityRelationEnd {
    elementId: string;
    connectionSiteId?: number;
    cardinality: BoardERDCardinality;
}
export interface IBoardFacadeInsertEntityRelationOptions extends IBoardFacadeAddElementOptions {
    id?: string;
    type: BoardERDRelationType;
    start: IBoardFacadeEntityRelationEnd;
    end: IBoardFacadeEntityRelationEnd;
    label?: BoardFacadeTextContent;
    routing?: BoardFacadeConnectorRouting;
    style?: IBoardConnectorStyle;
    parentId?: string;
    laneId?: string;
}
export type IBoardFacadeInsertEntityRelationItem = Omit<IBoardFacadeInsertEntityRelationOptions, 'insertIndex'>;
export interface IBoardFacadeInsertSequenceMessageOptions extends IBoardFacadeAddElementOptions {
    id?: string;
    fromParticipantId: string;
    toParticipantId: string;
    /** Explicit execution for nested/overlapping activations. Otherwise a unique covering activation is selected. */
    fromActivationId?: string;
    /** Explicit receiving execution. Must belong to the participant and cover the message time. */
    toActivationId?: string;
    type: BoardSequenceMessageType;
    text?: BoardFacadeTextContent;
    order: number;
    routing?: BoardFacadeConnectorRouting;
    style?: IBoardConnectorStyle;
    parentId?: string;
    laneId?: string;
}
export type IBoardFacadeInsertSequenceMessageItem = Omit<IBoardFacadeInsertSequenceMessageOptions, 'insertIndex'>;
export interface IBoardFacadeInsertSequenceMessagesOptions extends IBoardFacadeInsertConnectorsOptions {
    /** Shared Board-world timeline origin. Defaults to the highest referenced participant's bottom edge. Reuse explicitly across batches. */
    timeOriginY?: number;
    /** Offset from the shared timeline origin for the first ordered message. Defaults to `72`. */
    firstOffsetY?: number;
    /** Vertical distance between ordered messages. Defaults to `48`. */
    step?: number;
    /** Vertical time span of a self message. Defaults to half of `step`. */
    selfMessageHeight?: number;
    /** Outward clearance of the editable self-message loop. Defaults to `96`. */
    selfMessageWidth?: number;
}
/**
 * Connection strategy used when connecting element layers.
 *
 */
export type BoardFacadeLayeredConnectionMode = 'fan' | 'pairwise' | 'complete';
/**
 * Options for creating a generic, UML package, or system-boundary container.
 *
 */
export interface IBoardFacadeCreateContainerOptions extends ICreateBoardContainerElementOptions, IBoardFacadeAddElementOptions {
    /** Additional custom payload merged into `element.custom`. */
    custom?: IBoardFacadeCustomPayload;
}
/**
 * Options for creating a swimlane container.
 *
 */
export interface IBoardFacadeCreateSwimlaneOptions extends ICreateBoardSwimlaneElementOptions, IBoardFacadeAddElementOptions {
    /** Additional custom payload merged into `element.custom`. */
    custom?: IBoardFacadeCustomPayload;
}
/**
 * Options for updating one existing board element.
 *
 * Prefer higher-level helpers such as `setElementTransform()`, `setElementMetadata()`, or the live handle returned by
 * `getShape()` when they fit the task. Use this low-level option only when an
 * agent intentionally updates a complete raw board element model.
 *
 */
export interface IBoardFacadeUpdateElementOptions {
    /**
     * Complete next element model.
     */
    element: IBoardPageElement;
    /**
     * Optional command transform payload. Defaults to the transform resolved from `element`.
     */
    transform?: IBoardElementData['transform'];
    /**
     * Marks the update as a local realtime preview when supported by the command pipeline.
     */
    isRealtimePreview?: boolean;
}
/**
 * Geometry patch for an existing board element.
 *
 * Every field is optional so agents can move, resize, rotate, or flip an element without reconstructing the full element
 * model. Omitted fields keep their current values.
 *
 */
export interface IBoardFacadeElementTransformPatch {
    /**
     * New left coordinate in board space.
     */
    left?: number;
    /**
     * New top coordinate in board space.
     */
    top?: number;
    /**
     * New width in board units.
     */
    width?: number;
    /**
     * New height in board units.
     */
    height?: number;
    /**
     * New rotation in degrees. This matches `element.transform.rotation`; the command payload converts it to `angle`.
     */
    rotation?: number;
    /**
     * Whether the element should be flipped horizontally.
     */
    flipX?: boolean;
    /**
     * Whether the element should be flipped vertically.
     */
    flipY?: boolean;
}
/**
 * Delta used to translate existing board elements.
 *
 */
export interface IBoardFacadeElementTranslation {
    /**
     * Horizontal movement in board units. Positive values move right and negative values move left.
     */
    dx?: number;
    /**
     * Vertical movement in board units. Positive values move down and negative values move up.
     */
    dy?: number;
}
/**
 * Alignment mode used by `alignElements()`.
 *
 * Horizontal modes are `left`, `center`, and `right`; vertical modes are `top`, `middle`, and `bottom`.
 *
 */
export type BoardFacadeElementAlignment = 'bottom' | 'center' | 'left' | 'middle' | 'right' | 'top';
/**
 * Distribution direction used by `distributeElements()`.
 *
 */
export type BoardFacadeElementDistribution = 'horizontal' | 'vertical';
/**
 * Direction used by `arrangeElementsInLayers()`.
 *
 */
export type BoardFacadeLayeredLayoutDirection = 'vertical' | 'horizontal';
/**
 * Cross-axis alignment used by `arrangeElementsInLayers()`.
 *
 */
export type BoardFacadeLayeredLayoutAlignment = 'start' | 'center' | 'end';
/** Options for arranging elements in input order along one axis. */
export interface IBoardFacadeArrangeElementsOptions {
    /** `horizontal` places elements left-to-right; `vertical` places them top-to-bottom. */
    direction: BoardFacadeElementDistribution;
    /** Gap between adjacent element bounds. Defaults to `40`. */
    gap?: number;
    /** Optional top-left position for the first element. */
    start?: IBoardFacadePoint;
}
/** Options for arranging elements in a row-major grid. */
export interface IBoardFacadeArrangeElementsInGridOptions {
    /** Number of columns. */
    columns: number;
    /** Horizontal gap between columns. Defaults to `40`. */
    columnGap?: number;
    /** Vertical gap between rows. Defaults to `40`. */
    rowGap?: number;
    /** Optional top-left position for the first grid cell. */
    start?: IBoardFacadePoint;
}
/** Options for arranging elements into explicitly supplied visual layers. */
export interface IBoardFacadeArrangeElementsInLayersOptions {
    /** Flow direction. Defaults to `vertical`. */
    direction?: BoardFacadeLayeredLayoutDirection;
    /** Clear space between adjacent layers. Defaults to `140`. */
    layerGap?: number;
    /** Clear space between items in one layer. Defaults to `100`. */
    itemGap?: number;
    /** Optional top-left anchor for the layered layout. */
    start?: IBoardFacadePoint;
    /** Alignment of each layer within the widest layer. Defaults to `center`. */
    align?: BoardFacadeLayeredLayoutAlignment;
    /** Alignment of items along the layer axis. Defaults to `center`. */
    itemAlign?: BoardFacadeLayeredLayoutAlignment;
}
/** Options for arranging element centers around a circle. */
export interface IBoardFacadeArrangeElementsInCircleOptions {
    center: IBoardFacadePoint;
    radius: number;
    startAngle?: number;
    clockwise?: boolean;
}
/** Controls aspect-ratio behavior when fitting a group into target bounds. */
export interface IBoardFacadeFitElementsIntoBoundsOptions {
    preserveAspectRatio?: boolean;
}
/**
 * Shared frame-style fields used by Board container facade APIs.
 *
 * Omitted fields keep their current values. Use this for lightweight theme or emphasis updates without rebuilding the
 * full `shapeData` model.
 *
 */
interface IBoardFacadeFrameStylePatch {
    /**
     * New fill color, for example `#eef2ff`.
     */
    fillColor?: string;
    /**
     * New stroke color, for example `#4f46e5`.
     */
    strokeColor?: string;
    /**
     * New stroke width in board units.
     */
    strokeWidth?: number;
}
/**
 * Shared frame-style snapshot used by Board container facade APIs.
 */
interface IBoardFacadeFrameStyle {
    /** Current fill color, when the shape uses a color fill. */
    fillColor?: string;
    /** Current outline color. */
    strokeColor?: string;
    /** Current outline width in board units. */
    strokeWidth?: number;
}
/**
 * Style patch for an existing board connector.
 *
 * Omitted fields keep their current values. The field names match `IBoardConnectorStyle` so agent code can reuse the same
 * vocabulary as connector insertion.
 *
 */
export interface IBoardFacadeConnectorStylePatch {
    /**
     * New connector stroke color, for example `#2563eb`.
     */
    stroke?: string;
    /**
     * New connector stroke width.
     */
    strokeWidth?: number;
    /**
     * New connector opacity.
     */
    opacity?: number;
    /**
     * New dash pattern.
     */
    dash?: number[];
    /**
     * New start marker. Use a published marker type and `{ type: 'none' }` to hide it; `null` is invalid.
     */
    startMarker?: IBoardConnectorStyle['startMarker'];
    /**
     * New end marker. Use a published marker type and `{ type: 'none' }` to hide it; `null` is invalid.
     */
    endMarker?: IBoardConnectorStyle['endMarker'];
    /**
     * New connector corner style.
     */
    cornerStyle?: IBoardConnectorStyle['cornerStyle'];
    /**
     * New line jump style.
     */
    lineJump?: IBoardConnectorStyle['lineJump'];
    /**
     * Connector animation configuration. Animation is off when this field is omitted from stored style data.
     *
     * Use `null` to turn animation off. `undefined` means "leave the current value unchanged". Direction follows the
     * logical connector start/end rather than its marker placement. Speed is a positive playback multiplier where
     * `0.5`, `1`, and `2` correspond to the floating menu's slow, normal, and fast presets.
     */
    animation?: IBoardConnectorStyle['animation'] | null;
}
/**
 * Editable style fields returned for a Board connector.
 *
 * The value is detached from the Board model. It can be spread into a new patch and written back with
 * `setConnectorStyle()` without depending on internal connector geometry.
 *
 */
/**
 * Style patch for a generic container or swimlane.
 *
 * Omitted fields preserve the current value. Shape fields style the container frame; `titleStyle` updates only the
 * title text style. Use `setContainerTitle()` when changing only the title string.
 *
 */
export interface IBoardFacadeContainerStylePatch extends IBoardFacadeFrameStylePatch {
    /** Partial title text style merged with the current title style. */
    titleStyle?: IBoardTextStyle;
}
/**
 * Agent-friendly snapshot of a container's frame and title style.
 *
 * The result is detached from the Board model and contains only stable facade fields.
 *
 */
export interface IBoardFacadeContainerStyle extends IBoardFacadeFrameStyle {
    /** Detached title text style, when configured. */
    titleStyle?: IBoardTextStyle;
}
/**
 * Options for applying a board theme.
 *
 * @example
 * ```ts
 * const board = univerAPI.getActiveBoard();
 * if (!board) throw new Error('No active board');
 *
 * const currentThemeId = board.getThemeData().id ?? 'default';
 * const options = {
 *   themeId: currentThemeId,
 * };
 *
 * const changed = board.setTheme(options);
 * if (!changed) throw new Error('Cannot apply board theme');
 * ```
 */
export interface IBoardFacadeSetThemeOptions {
    /**
     * Theme preset id or host-registered theme id.
     */
    themeId: string;
}
/**
 * Options for wrapping existing elements in a container.
 *
 * Use the returned element ids from insert or discovery methods when choosing the elements to wrap.
 *
 */
export interface IBoardFacadeWrapElementsInContainerOptions {
    /**
     * Existing container id to wrap into. Omit it to let the command create a new container.
     */
    containerId?: string;
    /**
     * Title used when the command creates a new wrapping container.
     */
    title?: string;
}
/**
 * Point in board coordinates.
 *
 */
export interface IBoardFacadePoint {
    /**
     * Horizontal board coordinate.
     */
    x: number;
    /**
     * Vertical board coordinate.
     */
    y: number;
}
/**
 * Options for resolving the container under a point.
 *
 */
export interface IBoardFacadeResolveContainerAtPointOptions {
    /**
     * `outer` checks the whole container bounds. `content` checks the usable content area.
     */
    area?: 'outer' | 'content';
}
/**
 * Agent-friendly drop target resolved from a board coordinate.
 *
 */
export interface IBoardFacadeDropTarget {
    /**
     * Generated container id. Prefer `containerKey` in agent scripts when it exists.
     */
    containerId: string;
    /**
     * Swimlane lane id when the point falls inside a swimlane content lane.
     */
    laneId?: string;
    /**
     * Compact descriptor for the resolved container.
     */
    container: IBoardFacadeElementDescriptor;
}
/**
 * Lane model used by swimlane facade APIs.
 *
 */
export type IBoardFacadeSwimlaneLane = IBoardSwimlaneData['lanes'][number];
/**
 * Semantic swimlane membership for one Board element.
 *
 * The result keeps the stable parent id and a detached lane snapshot together, so agents can reason about lane
 * ownership without reading generated container ids or the raw element payload.
 *
 */
export interface IBoardFacadeElementLane {
    /** generated id of the parent swimlane, or `null` when the swimlane has no element id. */
    swimlaneKey: string | null;
    /** Semantic lane id stored on the child element. */
    laneId: string;
    /** Detached snapshot of the matching lane. */
    lane: IBoardFacadeSwimlaneLane;
}
/**
 * Options for adding a swimlane lane.
 *
 */
export interface IBoardFacadeAddSwimlaneLaneOptions {
    /**
     * Zero-based insert index. Omit it to append.
     */
    insertIndex?: number;
}
/**
 * Options for removing a swimlane lane.
 *
 */
export interface IBoardFacadeRemoveSwimlaneLaneOptions {
    /**
     * Required when the lane has children. `reject` is the default behavior when omitted.
     */
    contentPolicy?: 'reject' | 'promote-to-pool' | 'move-to-lane' | 'delete-content';
    /**
     * Target lane id when `contentPolicy` is `move-to-lane`.
     */
    targetLaneId?: string;
}
/** Label input accepts plain content, a detached document snapshot, or a shared rich-text builder/value. */
export type IBoardFacadeConnectorLabel = Omit<IBoardConnectorLabel, 'content'> & {
    content?: IBoardConnectorLabel['content'] | RichTextValue;
};
/** Patch for one connector label addressed by its stable id. */
export type IBoardFacadeConnectorLabelPatch = Omit<Partial<IBoardConnectorLabel>, 'id' | 'content' | 'placement' | 'style' | 'layout'> & {
    /** Replaces label content. Plain text clears the previous rich document. */
    content?: IBoardFacadeConnectorLabel['content'];
    /** Patches placement; null restores Center. Explicit anchor/ratio clears free offset unless supplied together. */
    placement?: (Omit<NonNullable<IBoardConnectorLabel['placement']>, 'offset'> & {
        /** Replaces the complete displacement; null removes it without changing the anchor. */
        offset?: NonNullable<IBoardConnectorLabel['placement']>['offset'] | null;
    }) | null;
    /** Patches style fields; null restores the default style. */
    style?: IBoardConnectorLabelStylePatch | null;
    /** Replaces the entire sizing strategy; null restores AutoSize. */
    layout?: IBoardConnectorLabel['layout'] | null;
};
/**
 * The facade class for a board unit.
 *
 * This facade is the recommended entry point for agents and integrations that create or edit board content. Prefer
 * element ids for later references and batch APIs when creating or updating
 * multiple elements. Facade mutations go through the board command layer, so collaboration, undo/redo, validation, and
 * container invariants follow the same path as UI operations.
 *
 * Persist returned element ids in the caller's own state when later edits need to address the same elements. The facade
 * does not provide semantic-key indexes or implicit idempotent creation.
 * Avoid chaining many single-element mutations when generating diagrams. Prefer `insertShapes()`,
 * `insertConnectors()`, and other batch helpers so related edits travel as compact batch mutations with compact
 * undo/redo history.
 *
 */
export declare class FBoard extends FBaseInitialable {
    protected readonly _boardModel: BoardModel;
    protected readonly _injector: Injector;
    protected readonly _commandService: ICommandService;
    protected readonly _resourceLoaderService: IResourceLoaderService;
    protected readonly _univerInstanceService: IUniverInstanceService;
    protected readonly _permissionService: IPermissionService;
    protected readonly _shapeHostAdapterRegistry: IShapeHostAdapterRegistry;
    readonly id: string;
    constructor(_boardModel: BoardModel, _injector: Injector, _commandService: ICommandService, _resourceLoaderService: IResourceLoaderService, _univerInstanceService: IUniverInstanceService, _permissionService: IPermissionService, _shapeHostAdapterRegistry: IShapeHostAdapterRegistry);
    /**
     * Gets the board unit id.
     *
     * @returns The unit id of this board.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     *
     * console.log(board.getId());
     * ```
     */
    getId(): string;
    /**
     * Returns the Board unit permission facade.
     * @returns {FBoardPermission} Permission facade for Edit, Copy, Print, Export, and Comment.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active Board.');
     * await board.getPermission().setReadOnly();
     * ```
     */
    getPermission(): FBoardPermission;
    /**
     * Returns the permission facade for one stable Board element id.
     *
     * The Board's single page id remains an internal address component and is resolved automatically.
     * @param {string} elementId Stable Board element id.
     * @returns {FBoardElementPermission} Permission facade combining the Board and Element Edit points.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active Board.');
     * const element = Object.values(board.getElements())[0];
     * if (!element) throw new Error('Board element not found.');
     * await board.getElementPermission(element.id).setReadOnly();
     * ```
     */
    getElementPermission(elementId: string): FBoardElementPermission;
    /**
     * Gets the board display name from the snapshot.
     *
     * @returns The board name.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     *
     * console.log(board.getName());
     * ```
     */
    getName(): string;
    /**
     * Sets the board display name.
     *
     * @param name The new board name.
     * @returns This board, for chaining.
     *
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * board?.setName('Planning Board');
     * ```
     */
    setName(name: string): this;
    /**
     * Gets the active Board page background as detached data.
     *
     * @returns The explicit background, or `undefined` when the page uses the default canvas background.
     */
    getBackground(): IBoardBackgroundData | undefined;
    /**
     * Uses an image as the active Board page background.
     *
     * The background stays below Board elements and does not participate in selection or pointer interaction.
     *
     * @param options Image source and fill behavior.
     * @returns This board, for chaining.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * board?.setImageBackground({
     *   source: 'https://example.com/background.jpg',
     *   imageSourceType: univerAPI.Enum.ImageSourceType.URL,
     *   fit: 'cover',
     * });
     * ```
     */
    setImageBackground(options: IBoardFacadeSetImageBackgroundOptions): this;
    /**
     * Clears the active Board page background and restores the theme-aware canvas fill.
     *
     * @returns This board, for chaining.
     */
    clearBackground(): this;
    /**
     * Gets the current in-memory board snapshot.
     *
     * This does not force resource serialization. Use `save()` when you need a persisted snapshot with resource data.
     * The returned serialization snapshot is detached: changing it cannot mutate the live board. For ordinary board
     * inspection, prefer `describeElements()` or other id-based reads.
     *
     * @returns The current board data.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     *
     * const data = board.getData();
     * console.log(data.name, Object.keys(data.pages ?? {}).length);
     * ```
     */
    getData(): IBoardData;
    /**
     * Save and return the board snapshot, including resource data.
     *
     * This is a detached serialization export. It is not a live model reference; use facade mutation APIs instead of
     * editing it when changes must participate in undo/redo and collaboration.
     *
     * @returns The board snapshot.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     *
     * const snapshot = board.save();
     * console.log(snapshot.name, Object.keys(snapshot.pages ?? {}).length);
     * ```
     */
    save(): IBoardData;
    /**
     * Undoes the last operation in this board.
     *
     * Unlike `univerAPI.undo()`, this method first focuses this board, so it remains deterministic when an agent also
     * edits embedded rich-text documents or other Univer units.
     *
     * @returns `true` when an operation was undone; otherwise `false`.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const shape = board.insertShape({ shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 80, top: 80 } });
     * if (!shape || !board.undo()) throw new Error('Cannot undo shape insertion');
     * ```
     */
    undo(): boolean;
    /**
     * Redoes the last operation undone in this board.
     *
     * This method focuses this board before executing redo, making it the preferred redo API for agent scripts that
     * already hold an `FBoard` instance.
     *
     * @returns `true` when an operation was redone; otherwise `false`.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const shape = board.insertShape({ shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 80, top: 80 } });
     * if (!shape || !board.undo() || !board.redo()) throw new Error('Cannot redo shape insertion');
     * ```
     */
    redo(): boolean;
    /**
     * Gets the current board theme data.
     *
     * @returns The active board theme.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     *
     * console.log(board.getThemeData().id, board.getThemeData().name);
     * ```
     */
    getThemeData(): IBoardThemeData;
    /**
     * Applies a board theme by id.
     *
     * Theme ids come from board theme presets or host-provided theme registration. Passing the current theme id is safe
     * and keeps the example copy-paste runnable.
     *
     * @param themeIdOrOptions Theme id or `{ themeId }`.
     * @returns `true` when the theme command succeeds.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     *
     * const currentThemeId = board.getThemeData().id;
     * if (!currentThemeId) throw new Error('No board theme id');
     *
     * const changed = board.setTheme(currentThemeId);
     * if (!changed) throw new Error('Cannot apply board theme');
     * ```
     */
    setTheme(themeIdOrOptions: string | IBoardFacadeSetThemeOptions): boolean;
    /**
     * Starts the host-configured Board import flow for this board.
     *
     * This method delegates to the registered import adapter; it does not parse files in the model package. Hosts may
     * open a picker, display an import dialog, or route to an exchange service. Agents that already own structured Board
     * content should use the element insertion APIs instead of this interactive adapter entry point.
     *
     * @param sourceType Optional adapter hint such as `mermaid`, `pptx`, or another host-supported source type.
     * @returns `true` when a registered adapter accepts the request.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const opened = board.beginImport('mermaid');
     * console.log(opened);
     * ```
     */
    beginImport(sourceType?: string): boolean;
    /**
     * Starts the host-configured Board export flow for this board.
     *
     * Export rendering and file delivery are owned by the registered export adapter. This facade method only supplies
     * stable board context and an optional target hint, so UI, service, and SDK callers share the same operation.
     *
     * @param targetType Optional adapter target such as `image`, `pdf`, or a host-supported format.
     * @returns `true` when a registered adapter accepts the request.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const opened = board.beginExport('image');
     * console.log(opened);
     * ```
     */
    beginExport(targetType?: 'image' | 'pdf' | string): boolean;
    /**
     * Gets one element by generated id.
     *
     * This low-level read returns a detached model snapshot. Changing it cannot mutate the live board; use
     * `updateElement()` or an intent-specific mutation method to apply changes.
     *
     * @param elementId Generated board element id.
     * @returns The element, or `null` when it is missing.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const shape = board.insertShape({ shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 80, top: 80 } });
     * if (!shape || !board.getElement(shape.getId())) throw new Error('Cannot read inserted shape');
     * ```
     */
    getElement(elementId: string): IBoardPageElement | null;
    /**
     * Gets all elements on the Board as an id-to-element map.
     *
     * Use `getElementOrder()` when iteration order matters.
     * This low-level read returns detached model snapshots. For agent reasoning over board content, prefer
     * `describeElements()` or id-based descriptor APIs so scripts do not depend on internal element payloads.
     *
     * @returns Element map in Board z-order, or an empty object when the Board is empty.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * console.log(Object.keys(board.getElements()));
     * ```
     */
    getElements(): Record<string, IBoardPageElement>;
    /**
     * Returns the active Board page's element layout in Board model coordinates.
     *
     * This is a model-only query. It does not depend on a Scene, viewport,
     * scroll position, zoom, Canvas, DOM, or a UI plugin. Because Board is an
     * infinite canvas, the result intentionally has no finite container bounds.
     *
     * @returns {IBoardFacadeElementLayoutResult} Ordered element bounds and their union.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const layout = board.getElementLayout();
     * console.log(layout.subUnitId, layout.contentBounds);
     * ```
     */
    getElementLayout(): IBoardFacadeElementLayoutResult;
    /**
     * Detects model-visible Board layout conflicts on the active page.
     *
     * Model analysis can inspect persisted manual connector paths. Auto-routed connectors without persisted route
     * points are reported as unresolved; a UI host can use rendered analysis for their final paths.
     *
     * @param focusPadding Padding added to each issue's suggested screenshot bounds.
     * @returns Structured layout issues, or `false` when the command cannot run.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     *
     * const analysis = board.analyzeModelLayout(48);
     * if (!analysis) throw new Error('Cannot analyze the active board');
     *
     * const blockingIssues = analysis.issues.filter((issue) => issue.severity === 'error');
     * console.log({ blockingIssues, unresolved: analysis.summary.unresolvedConnectorCount });
     * ```
     */
    analyzeModelLayout(focusPadding?: number): AnalyzeBoardModelLayoutResult;
    /**
     * Resolves a screenshot target to active-page Board world bounds without requiring a browser renderer.
     *
     * Omit options for all visible content, pass `region` for an explicit world rectangle, or pass `elementIds` for
     * the union of visible element bounds. Region and element selectors are mutually exclusive.
     *
     * @param options Capture selector and world-unit padding.
     * @returns Structured bounds or a selector error, or `false` when the command cannot run.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     *
     * const [element] = board.describeElements();
     * if (!element) throw new Error('The active board is empty');
     * const target = board.resolveCaptureBounds({ elementIds: [element.id], padding: 48 });
     * if (!target) throw new Error('Cannot resolve Board capture bounds');
     * if (!target.ok) throw new Error(`Cannot capture Board: ${target.code}`);
     *
     * console.log(target.bounds);
     * ```
     */
    resolveCaptureBounds(options?: IBoardFacadeCaptureBoundsOptions): ResolveBoardCaptureBoundsResult;
    /**
     * Resets selected connectors to the Board orthogonal auto router.
     *
     * The command preserves endpoints, labels, style, parent scope, and lane membership while clearing manual path
     * state. The change participates in Board undo and redo.
     *
     * @param connectorIds Generated connector ids, normally taken from layout issue results.
     * @returns The changed and skipped ids. When connectors change, `affectedBounds` covers the previous connector
     * routes and their bound endpoint elements; a no-op returns `null`. The API returns `false` when the command fails.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     *
     * const analysis = board.analyzeModelLayout();
     * if (!analysis) throw new Error('Cannot analyze the active board');
     * const connectorIds = Array.from(new Set(analysis.issues.flatMap((issue) => issue.connectorIds)));
     *
     * if (connectorIds.length > 0) {
     *     const result = board.normalizeConnectorRouting(connectorIds);
     *     if (!result) throw new Error('Cannot normalize connector routing');
     *     console.log(result.changedConnectorIds, result.skippedElementIds);
     * }
     * ```
     */
    normalizeConnectorRouting(connectorIds: string[]): NormalizeBoardConnectorRoutingResult;
    /**
     * Gets multiple elements by generated ids.
     *
     * This is a low-level escape hatch for framework integrations that already have generated ids. Agent scripts should
     * usually prefer `describeElementsByIds()` or id-based APIs because raw elements include internal board model
     * payloads.
     *
     * @param elementIds Generated board element ids.
     * @returns An id-to-element map that preserves requested ids and uses `null` for missing elements.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const shape = board.insertShape({ shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 80, top: 80 } });
     * if (!shape) throw new Error('Cannot insert shape');
     * console.log(board.getElementsByIds([shape.getId(), 'missing-element']));
     * ```
     */
    getElementsByIds(elementIds: string[]): Record<string, IBoardPageElement | null>;
    /**
     * Finds board elements by type and visibility.
     *
     * Agent examples should use `univerAPI.Enum.BoardElementType` constants for type filters so scripts remain discoverable
     * and typo-resistant.
     *
     * @param query Query options. Omit it to list all visible elements on the active page.
     * @returns Matching elements in board z-order.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const shapes = board.findElements({ elementType: univerAPI.Enum.BoardElementType.Shape });
     * console.log(shapes.map((shape) => shape.id));
     * ```
     */
    findElements(query?: IBoardFacadeElementQuery): IBoardPageElement[];
    /**
     * Gets generated board element ids in board z-order with optional facade filters.
     *
     * Use this narrow helper when an id-based integration needs ordered ids but the script still wants the same type,
     * visibility filters supported by `findElements()`. Prefer `getElementIdsInOrder()` for prompts
     * and saved agent plans.
     *
     * @param query Optional type and visibility filters.
     * @returns Generated element ids in board z-order.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     *
     * const visibleShapeIds = board.getElementIdsInOrder({
     *   elementTypes: [univerAPI.Enum.BoardElementType.Shape],
     * });
     *
     * console.log(visibleShapeIds);
     * ```
     */
    getElementIdsInOrder(query?: IBoardFacadeElementQuery): string[];
    /**
     * Describes one board element as a compact agent-friendly summary.
     *
     * Use this when an agent needs to inspect an element without depending on the full internal model. The descriptor
     * includes generated element id, resolved metadata, parent id, local transform, and world bounds,
     * but it does not include heavy payloads such as `shapeData` or `connectorData`.
     *
     * Agent scripts should prefer `describeElement()` when element ids are known; use this id-based
     * method only for UI selection ids, event payload ids, or low-level integrations.
     *
     * @param elementId Generated board element id.
     * @returns Compact element descriptor, or `null` when the element is missing.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const shape = board.insertShape({ shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 80, top: 80 } });
     * if (!shape) throw new Error('Cannot insert shape');
     * console.log(board.describeElement(shape.getId()));
     * ```
     */
    describeElement(elementId: string): IBoardFacadeElementDescriptor | null;
    /**
     * Describes multiple board elements addressed by generated ids.
     *
     * Use this when an integration starts from UI selection ids or event payload ids and the agent needs compact
     * descriptors before deciding which id-based mutation APIs to call. The returned object preserves every normalized
     * requested id and uses `null` when an element is missing.
     *
     * @param elementIds Generated board element ids.
     * @returns An id-to-descriptor map that preserves requested ids and uses `null` for missing elements.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const shape = board.insertShape({ shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 80, top: 80 } });
     * if (!shape) throw new Error('Cannot insert shape');
     * console.log(board.describeElementsByIds([shape.getId()]));
     * ```
     */
    describeElementsByIds(elementIds: string[]): Record<string, IBoardFacadeElementDescriptor | null>;
    /**
     * Reads one board element's resolved bounds by generated id.
     *
     * Use this when code starts from a UI selection id and only needs board-coordinate bounds for layout, collision,
     * or viewport calculations. This is lighter than `describeElement()` because it returns only the resolved bounds.
     *
     * Agent scripts should prefer `getElementBounds()` when element ids are known; use this id-based
     * method only for UI selection ids, event payload ids, or low-level integrations.
     *
     * @param elementId Generated board element id.
     * @returns Resolved board-coordinate bounds, or `null` when the element is missing.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const shape = board.insertShape({ shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 80, top: 80 } });
     * if (!shape) throw new Error('Cannot insert shape');
     * console.log(board.getElementBounds(shape.getId()));
     * ```
     */
    getElementBounds(elementId: string): IBoardRect | null;
    /**
     * Reads one board element's center point by generated id.
     *
     * Use this when code starts from a UI selection id and needs a stable board-coordinate point for connector
     * endpoints, relative placement, or distance calculations. The center is derived from resolved world bounds, so it
     * accounts for parent container transforms.
     *
     * Agent scripts should prefer `getElementCenter()` when element ids are known; use this id-based
     * method only for UI selection ids, event payload ids, or low-level integrations.
     *
     * @param elementId Generated board element id.
     * @returns Center point in board coordinates, or `null` when the element is missing.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const shape = board.insertShape({ shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 80, top: 80 } });
     * if (!shape) throw new Error('Cannot insert shape');
     * console.log(board.getElementCenter(shape.getId()));
     * ```
     */
    getElementCenter(elementId: string): IBoardFacadePoint | null;
    /**
     * Reads one board element's lightweight geometry by generated id.
     *
     * Use this when code starts from a UI selection id and needs both resolved bounds and center point. It is lighter
     * than `describeElement()` and avoids making agents call separate bounds and center APIs.
     *
     * Agent scripts should prefer `getElementGeometry()` when element ids are known; use this id-based
     * method only for UI selection ids, event payload ids, or low-level integrations.
     *
     * @param elementId Generated board element id.
     * @returns Geometry snapshot, or `null` when the element is missing.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const shape = board.insertShape({ shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 80, top: 80 } });
     * if (!shape) throw new Error('Cannot insert shape');
     * console.log(board.getElementGeometry(shape.getId()));
     * ```
     */
    getElementGeometry(elementId: string): IBoardFacadeElementGeometry | null;
    /**
     * Reads resolved bounds for multiple board elements addressed by generated ids.
     *
     * The returned object preserves every normalized requested id and uses `null` for missing elements. Use this after
     * a UI multi-selection when an agent wants to compute spacing or alignment without pulling full descriptors.
     *
     * @param elementIds Generated board element ids.
     * @returns An id-to-bounds map that preserves requested ids and uses `null` for missing elements.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const shape = board.insertShape({ shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 80, top: 80 } });
     * if (!shape) throw new Error('Cannot insert shape');
     * console.log(board.getElementsBoundsByIds([shape.getId()]));
     * ```
     */
    getElementsBoundsByIds(elementIds: string[]): Record<string, IBoardRect | null>;
    /**
     * Reads center points for multiple board elements addressed by generated ids.
     *
     * The returned object preserves every normalized requested id and uses `null` for missing elements. Use this after
     * UI multi-selection when an agent wants anchor points without pulling full descriptors.
     *
     * @param elementIds Generated board element ids.
     * @returns An id-to-center map that preserves requested ids and uses `null` for missing elements.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const shape = board.insertShape({ shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 80, top: 80 } });
     * if (!shape) throw new Error('Cannot insert shape');
     * console.log(board.getElementsCentersByIds([shape.getId()]));
     * ```
     */
    getElementsCentersByIds(elementIds: string[]): Record<string, IBoardFacadePoint | null>;
    /**
     * Reads lightweight geometry snapshots for multiple board elements addressed by generated ids.
     *
     * The returned object preserves every normalized requested id and uses `null` for missing elements. Use this after
     * UI multi-selection when an agent needs both bounds and centers for spacing, alignment, or connector planning.
     *
     * @param elementIds Generated board element ids.
     * @returns An id-to-geometry map that preserves requested ids and uses `null` for missing elements.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const shape = board.insertShape({ shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 80, top: 80 } });
     * if (!shape) throw new Error('Cannot insert shape');
     * console.log(board.getElementsGeometryByIds([shape.getId()]));
     * ```
     */
    getElementsGeometryByIds(elementIds: string[]): Record<string, IBoardFacadeElementGeometry | null>;
    /**
     * Reads the union bounds for multiple board elements addressed by generated ids.
     *
     * Use this after a UI selection when an agent needs the group's overall board-coordinate rectangle for centering,
     * spacing, collision checks, or viewport fitting. Missing ids are ignored; `null` means none of the requested ids
     * resolved to elements with bounds.
     *
     * @param elementIds Generated board element ids.
     * @returns Union bounds for existing elements, or `null` when no requested id resolves.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const shapes = board.insertShapes([
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 80, top: 80 } },
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 280, top: 160 } },
     * ]);
     * if (!shapes) throw new Error('Cannot insert shapes');
     * console.log(board.getElementsBoundingRectByIds(shapes.map((shape) => shape.getId())));
     * ```
     */
    getElementsBoundingRectByIds(elementIds: string[]): IBoardRect | null;
    /**
     * Checks a list of generated board element ids and returns a structured preflight result.
     *
     * Use this when an integration starts from UI selection ids or event payload ids and wants to verify all referenced
     * elements still exist before mapping them back to generated ids or running low-level commands.
     *
     * @param elementIds Generated board element ids.
     * @returns Requested ids, existing ids, missing ids, and an `allExist` boolean.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const shape = board.insertShape({ shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 80, top: 80 } });
     * if (!shape) throw new Error('Cannot insert shape');
     * console.log(board.checkElementIds([shape.getId(), 'missing-element']));
     * ```
     */
    checkElementIds(elementIds: string[]): IBoardFacadeElementIdCheckResult;
    /**
     * Checks generated board element ids against expected board element types.
     *
     * Use this before type-specific low-level integrations that start from UI selection ids. It separates missing ids
     * from ids that still exist but point to the wrong element type.
     *
     * @param elementIds Generated board element ids.
     * @param expectedTypes Allowed board element type or types.
     * @returns Requested ids, matching ids, missing ids, mismatched ids, and an `allMatch` boolean.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const shape = board.insertShape({ shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 80, top: 80 } });
     * if (!shape) throw new Error('Cannot insert shape');
     * console.log(board.checkElementIdTypes([shape.getId()], univerAPI.Enum.BoardElementType.Shape));
     * ```
     */
    checkElementIdTypes(elementIds: string[], expectedTypes: BoardElementType | BoardElementType[]): IBoardFacadeElementIdTypeCheckResult;
    /**
     * Reads the union bounds for all board elements matching a facade query.
     *
     * Use this when an agent needs the overall occupied board rectangle for visible content, a group, a type
     * subset, or another query without first collecting ids. It uses the same filters as `describeElements()`,
     * including default hidden-element filtering.
     *
     * @param query Optional type and visibility filters.
     * @returns Union bounds for matching elements, or `null` when the query matches no bounded elements.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * console.log(board.getElementsBoundingRect({ elementType: univerAPI.Enum.BoardElementType.Shape }));
     * ```
     */
    getElementsBoundingRect(query?: IBoardFacadeElementQuery): IBoardRect | null;
    /**
     * Calculates a simple empty bounds rectangle next to existing board content.
     *
     * Use this before inserting a newly generated diagram, table, or group of shapes so agent output does not overlap the
     * current board. The method is a pure read helper: it does not create elements, dispatch commands, or reserve space.
     * It finds the union bounds of `query`, then places the requested rectangle to the right or below that occupied area.
     * When the query matches nothing, it returns the requested size at `origin`.
     *
     * @param options Desired size, spacing, placement, fallback origin, and optional occupancy query.
     * @returns Suggested bounds in board coordinates, or `null` when size or gap values are invalid.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const bounds = board.getNextAvailableBounds({
     *   width: 240,
     *   height: 120,
     *   placement: univerAPI.Enum.BoardFacadeNextAvailableBoundsPlacement.Right,
     * });
     * console.log(bounds);
     * ```
     */
    getNextAvailableBounds(options: IBoardFacadeGetNextAvailableBoundsOptions): IBoardRect | null;
    /**
     * Reads lightweight geometry descriptors for all board elements matching a facade query.
     *
     * Use this when an agent needs identity, type, z-order, bounds, and center point for matching elements without the
     * heavier text and metadata payload in `describeElements()`. Results preserve board z-order and use the
     * same filters as `describeElements()`.
     *
     * @param query Optional type and visibility filters.
     * @returns Geometry descriptors in board z-order. Elements without resolved bounds are skipped.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * console.log(board.getElementsGeometry({ elementType: univerAPI.Enum.BoardElementType.Shape }));
     * ```
     */
    getElementsGeometry(query?: IBoardFacadeElementQuery): IBoardFacadeElementGeometryDescriptor[];
    /**
     * Describes matching board elements as compact agent-friendly summaries.
     *
     * This is the recommended discovery API for agents before they modify a board. It returns descriptors in board
     * z-order, supports the same filters as `findElements()`, and avoids exposing large internal element payloads in
     * prompts or tool results.
     *
     * @param query Optional type and visibility filters.
     * @returns Compact descriptors in board z-order.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * console.log(board.describeElements({ elementType: univerAPI.Enum.BoardElementType.Shape }));
     * ```
     */
    describeElements(query?: IBoardFacadeElementQuery): IBoardFacadeElementDescriptor[];
    /**
     * Gets resolved top-level metadata for an element.
     *
     * The returned booleans use board defaults: `visible` and `selectable` default to `true`, while `locked` defaults to
     * `false`. This is easier for agents than reading raw optional model fields.
     *
     * Agent scripts should prefer `getElementMetadata()` when element ids are known; use this id-based
     * method only for UI selection ids, event payload ids, or low-level integrations.
     *
     * @param elementId Generated board element id.
     * @returns Resolved metadata, or `null` when the element is missing.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const shape = board.insertShape({ shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 80, top: 80 } });
     * if (!shape) throw new Error('Cannot insert shape');
     * console.log(board.getElementMetadata(shape.getId()));
     * ```
     */
    getElementMetadata(elementId: string): IBoardFacadeElementMetadata | null;
    /**
     * Gets resolved top-level metadata for multiple generated board element ids.
     *
     * This is the batch companion to `getElementMetadata()`. It is useful after a selection or hit-test flow where the
     * caller already has generated ids and wants resolved `visible`, `selectable`, and `locked` booleans without reading
     * raw optional model fields.
     *
     * @param elementIds Generated board element ids.
     * @returns An id-to-metadata map that preserves requested ids and uses `null` for missing elements.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const shape = board.insertShape({ shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 80, top: 80 } });
     * if (!shape) throw new Error('Cannot insert shape');
     * console.log(board.getElementsMetadataByIds([shape.getId()]));
     * ```
     */
    getElementsMetadataByIds(elementIds: string[]): Record<string, IBoardFacadeElementMetadata | null>;
    /**
     * Gets generated element ids in the current board z-order.
     *
     * This is a low-level order API. Use it when a UI integration or import/export pipeline must preserve the raw page
     * order. Agent scripts should prefer `getElementIdsInOrder()` for generated element ids or `describeElements()` for
     * type, metadata, and z-order in one descriptor list.
     *
     * @returns Ordered generated element ids. Returns an empty array when the page does not exist.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * console.log(board.getElementOrder());
     * ```
     */
    getElementOrder(): string[];
    /**
     * Gets direct children of a container in board z-order.
     *
     * This only returns direct members whose `parentId` equals `containerId`. Use `getContainerDescendants()` when an
     * agent needs nested container content.
     *
     * Agent scripts should prefer `getContainerChildren()` when element ids are known; use this id-based
     * method only for UI selection ids, event payload ids, or low-level integrations.
     *
     * @param containerId Container element id.
     * @returns Direct child elements. Returns an empty array for missing or non-container elements.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const containerId = `container-${Date.now()}`;
     * if (!board.createContainer({ id: containerId, left: 80, top: 80 })) throw new Error('Cannot create container');
     * const child = board.insertShape({ shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 120, top: 120 } });
     * if (!child || !board.reparentElements([child.getId()], containerId)) throw new Error('Cannot insert child');
     * console.log(board.getContainerChildren(containerId));
     * ```
     */
    getContainerChildren(containerId: string): IBoardPageElement[];
    /**
     * Gets all nested descendants of a container in traversal order.
     *
     * The traversal follows direct children in board z-order and then walks nested containers. It guards against cycles so
     * agent scripts can inspect imperfect imported content without hanging.
     *
     * Agent scripts should prefer `getContainerDescendants()` when element ids are known; use this id-based
     * method only for UI selection ids, event payload ids, or low-level integrations.
     *
     * @param containerId Container element id.
     * @returns Nested child elements. Returns an empty array for missing or empty containers.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const containerId = `container-${Date.now()}`;
     * if (!board.createContainer({ id: containerId, left: 80, top: 80 })) throw new Error('Cannot create container');
     * const child = board.insertShape({ shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 120, top: 120 } });
     * if (!child || !board.reparentElements([child.getId()], containerId)) throw new Error('Cannot insert child');
     * console.log(board.getContainerDescendants(containerId));
     * ```
     */
    getContainerDescendants(containerId: string): IBoardPageElement[];
    /**
     * Gets the parent container chain for an element.
     *
     * The first id is the direct parent, followed by ancestors. This is useful when an agent needs to understand whether
     * an element is inside a group, generic container, or swimlane before moving or deleting it.
     *
     * Agent scripts should prefer `getElementParentChain()` when element ids are known; use this id-based
     * method only for UI selection ids, event payload ids, or low-level integrations.
     *
     * @param elementId Element id to inspect.
     * @returns Parent container ids from nearest to farthest.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const containerId = `container-${Date.now()}`;
     * if (!board.createContainer({ id: containerId, left: 80, top: 80 })) throw new Error('Cannot create container');
     * const child = board.insertShape({ shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 120, top: 120 } });
     * if (!child || !board.reparentElements([child.getId()], containerId)) throw new Error('Cannot insert child');
     * console.log(board.getElementParentChain(child.getId()));
     * ```
     */
    getElementParentChain(elementId: string): string[];
    /**
     * Resolves the topmost unlocked container at a board coordinate.
     *
     * Use this before inserting or moving agent-created elements when you want them to attach to the container under a
     * point. `area: 'content'` ignores container headers and uses the usable content area, including swimlane lane
     * content when available.
     *
     * @param point Point in board coordinates.
     * @param options Container-area options. Defaults to the outer container area.
     * @returns The deepest topmost matching container, or `null`.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const containerId = `container-${Date.now()}`;
     * if (!board.createContainer({ id: containerId, left: 80, top: 80, width: 320, height: 240 })) {
     *   throw new Error('Cannot create container');
     * }
     * console.log(board.resolveContainerAtPoint({ x: 160, y: 160 }));
     * ```
     */
    resolveContainerAtPoint(point: IBoardFacadePoint, options?: IBoardFacadeResolveContainerAtPointOptions): IBoardContainerElement | null;
    /**
     * Resolves the board drop target at a coordinate for agent insert operations.
     *
     * Use `containerId` as `parentId` and `laneId` as `laneId` when inserting an element at the same point. The
     * descriptor gives agents enough context to reason about the target without reading raw container payloads. When the
     * point is outside a matching container, or outside content bounds when `area: 'content'` is used, the method returns
     * `null`.
     *
     * @param point Point in board coordinates.
     * @param options Container-area options. Defaults to the outer container area.
     * @returns Drop target information, or `null` when no valid target exists at that point.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const containerId = `container-${Date.now()}`;
     * if (!board.createContainer({ id: containerId, left: 80, top: 80, width: 320, height: 240 })) {
     *   throw new Error('Cannot create container');
     * }
     * console.log(board.resolveDropTargetAtPoint({ x: 160, y: 160 }, { area: 'content' }));
     * ```
     */
    resolveDropTargetAtPoint(point: IBoardFacadePoint, options?: IBoardFacadeResolveContainerAtPointOptions): IBoardFacadeDropTarget | null;
    /**
     * Adds one fully constructed board element through the command layer.
     *
     * This is a low-level escape hatch for code that already has an `IBoardPageElement`. Agent scripts should prefer
     * `insertShapes()`, `insertConnector()`, `createContainer()`, or `createSwimlane()` because those APIs are more
     * higher-level and harder to misuse.
     *
     * @param element Fully constructed board element.
     * @param options Insert options such as `insertIndex`.
     * @returns `true` when the element passes local invariants and the command succeeds.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     *
     * const seed = board.insertShape({
     *   shapeType: univerAPI.Enum.ShapeTypeEnum.Rect,
     *   transform: { left: 120, top: 120 },
     *   name: 'Seed',
     * });
     *
     * if (!seed) throw new Error('Cannot create seed shape');
     *
     * const source = board.getElement(seed.getId());
     * if (!source) throw new Error('Cannot read seed shape');
     * const rawId = `${source.id}-copy`;
     * const added = board.addElement({
     *   ...source,
     *   id: rawId,
     *   transform: { ...source.transform, left: 320 },
     * });
     * if (!added) throw new Error('Cannot add raw shape');
     *
     * console.log(rawId);
     * ```
     */
    addElement(element: IBoardPageElement, options?: IBoardFacadeAddElementOptions): boolean;
    /**
     * Adds multiple fully constructed board elements in one command.
     *
     * This keeps collaboration traffic and undo history compact when callers already own valid element models. Agent
     * scripts that are creating new shapes or connectors should prefer `insertShapes()` and `insertConnectors()`.
     *
     * @param elements Fully constructed board elements.
     * @param options Batch insert options such as `insertIndex`, `fitContainerId`.
     * @returns `true` when all elements pass local invariants and the command succeeds.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const shapes = board.insertShapes([
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 80, top: 80 } },
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 280, top: 80 } },
     * ]);
     * const elements = shapes?.map((shape) => board.getElement(shape.getId())).filter((element) => element !== null);
     * if (!shapes || !elements || elements.length !== shapes.length || !board.removeElements(shapes.map((shape) => shape.getId()))) {
     *   throw new Error('Cannot prepare elements');
     * }
     * if (!board.addElements(elements)) throw new Error('Cannot add elements');
     * ```
     */
    addElements(elements: IBoardPageElement[], options?: IBoardFacadeAddElementsOptions): boolean;
    /**
     * Creates a generic, UML package, or system-boundary container.
     *
     * Containers can group elements and optionally auto-capture/membership-lock children depending on the provided
     * container options. Give agent-created containers generated ids so later scripts can move children into them.
     *
     * @param options Container creation options.
     * @returns `true` when the container is created through the command layer.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const containerId = `container-${Date.now()}`;
     * if (!board.createContainer({
     *   id: containerId,
     *   kind: univerAPI.Enum.BoardContainerKind.SystemBoundary,
     *   left: 80,
     *   top: 80,
     *   title: 'Planning',
     * })) {
     *   throw new Error('Cannot create container');
     * }
     * ```
     */
    createContainer(options: IBoardFacadeCreateContainerOptions): boolean;
    /**
     * Creates a swimlane container.
     *
     * Use this for process maps, responsibility diagrams, or timelines. Provide lane ids that are meaningful to the
     * agent, such as `todo`, `doing`, and `done`, so later lane operations are readable.
     *
     * @param options Swimlane creation options.
     * @returns `true` when the swimlane is created through the command layer.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const swimlaneId = `swimlane-${Date.now()}`;
     * if (!board.createSwimlane({
     *   id: swimlaneId,
     *   left: 80,
     *   top: 80,
     *   title: 'Workflow',
     *   lanes: [{ id: 'todo', title: 'Todo' }, { id: 'done', title: 'Done' }],
     * })) throw new Error('Cannot create swimlane');
     * ```
     */
    createSwimlane(options: IBoardFacadeCreateSwimlaneOptions): boolean;
    /**
     * Inserts standalone Board text through the normal command path.
     *
     * Use this for labels, annotations, headings, and document fragments that should not have a shape background. The
     * returned element remains editable with the standard Board text editor. Prefer a element id when an agent may
     * update the same annotation in a later run.
     *
     * @param options Text content, bounds, optional style, and parent.
     * @returns The inserted text element, otherwise `null` when validation or the command fails.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const text = board.insertText({
     *   text: 'Board heading',
     *   left: 80,
     *   top: 80,
     *   textStyle: { color: '#2563EB', fontSize: 32, bold: true },
     * });
     * if (!text) throw new Error('Cannot insert text');
     * ```
     */
    insertText(options: IBoardFacadeInsertTextOptions): IBoardTextElement | null;
    /**
     * Inserts a Board image using agent-friendly options.
     *
     * Use a element id when an agent may later replace the image source or move the image. The element is created
     * through the Board image factory and then dispatched through the normal add-element command path, so it participates
     * in collaboration and undo/redo like a UI-inserted image.
     *
     * @param options Image source, bounds, and parent.
     * @returns The inserted image element, otherwise `null` when the source, parent, or command is invalid.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const image = board.insertImage({
     *   source: 'https://example.com/image.png',
     *   imageSourceType: univerAPI.Enum.ImageSourceType.URL,
     *   left: 80,
     *   top: 80,
     *   width: 320,
     *   height: 180,
     * });
     * if (!image) throw new Error('Cannot insert image');
     * ```
     */
    insertImage(options: IBoardFacadeInsertImageOptions): IBoardPageElement | null;
    /**
     * Inserts a Shape or Connector through the common Board Shape host adapter.
     *
     * Put geometry under `transform`; top-level `left`, `top`, `width`, and `height` are rejected. The Board generates
     * the element id, and the returned live handle exposes that id through `getId()`. Set text or additional styling on
     * the handle after creation. Use `insertShapeAtPoint()` instead when Board-specific drop-target attachment or
     * `textBox` options are required.
     *
     * @param input Common Shape creation input. Board supplies its own transform defaults when fields are omitted.
     * @returns A live common Shape handle, or `null` when creation fails.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const shape = board.insertShape({
     *   shapeType: univerAPI.Enum.ShapeTypeEnum.RoundRect,
     *   transform: { left: 80, top: 80, width: 180, height: 100 },
     *   name: 'Review card',
     *   description: 'Tracks the current review step',
     *   visible: true,
     *   selectable: true,
     *   shapeData: {
     *     fill: { fillType: univerAPI.Enum.ShapeFillEnum.SolidFill, color: '#ede9fe' },
     *     stroke: {
     *       lineStrokeType: univerAPI.Enum.ShapeLineTypeEnum.SolidLine,
     *       color: '#7c3aed',
     *       width: 2,
     *     },
     *   },
     * });
     * if (!shape) throw new Error('Cannot insert Shape');
     * shape.setRotation(6).setStrokeLineCapType(univerAPI.Enum.ShapeLineCapEnum.Round);
     * shape.getText()
     *   .setText('Board card')
     *   .setHorizontalAlign(univerAPI.Enum.HorizontalAlign.CENTER)
     *   .setVerticalAlign(univerAPI.Enum.VerticalAlign.MIDDLE);
     *
     * const shapeId = shape.getId();
     * const savedShape = board.getShape(shapeId);
     * if (!savedShape || savedShape.getText().getPlainText() !== 'Board card') {
     *   throw new Error('Cannot verify inserted Shape');
     * }
     * console.log({ shapeId, transform: savedShape.getTransform() });
     * ```
     */
    insertShape(input: IBoardShapeCreateInput): FShape | FConnectorShape | null;
    /**
     * Returns a live common Shape handle by Board element id.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const inserted = board.insertShape({ shapeType: univerAPI.Enum.ShapeTypeEnum.Rect });
     * const shape = inserted && board.getShape(inserted.getId());
     * if (!shape) throw new Error('Cannot resolve Shape');
     * console.log(shape.getSnapshot());
     * ```
     */
    getShape(shapeId: string): FShape | FConnectorShape | null;
    /**
     * Returns all live common Shape and Connector handles on the active Board page.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * console.log(board.getShapes().map((shape) => shape.getId()));
     * ```
     */
    getShapes(): Array<FShape | FConnectorShape>;
    private _insertBoardShape;
    /**
     * Inserts a shape at a board coordinate and optionally attaches it to the container or swimlane lane at that point.
     *
     * This is the shortest path for agents that place cards, nodes, or annotations into an existing board region. The
     * method maps `point` to `left`/`top`, resolves the drop target with `resolveDropTargetAtPoint()`, and fills
     * `parentId`/`laneId` internally when the caller did not provide explicit parent options.
     *
     * @param options Shape insertion options with a required `point`.
     * @returns The generated shape element when the insert command succeeds, otherwise `null`.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const shape = board.insertShapeAtPoint({
     *   point: { x: 180, y: 160 },
     *   shapeType: univerAPI.Enum.ShapeTypeEnum.RoundRect,
     *   text: 'Dropped card',
     * });
     * if (!shape) throw new Error('Cannot insert shape at point');
     * ```
     */
    insertShapeAtPoint(options: IBoardFacadeInsertShapeAtPointOptions): IBoardPageElement | null;
    /**
     * Inserts multiple live Shapes or Connectors through one atomic Board command.
     *
     * This is the batch counterpart of `insertShape()`: every item uses `IBoardShapeCreateInput`, and every returned value is
     * a live common Shape handle. All inputs are inserted by one Board command; validation or command failure returns
     * `null` without exposing a partially successful result. Geometry belongs under each item's `transform`, and the
     * returned handles preserve input order.
     *
     * @param inputs Common Shape creation inputs in the requested insertion order.
     * @returns Live Shape handles in input order, or `null` when validation or the atomic command fails.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const shapes = board.insertShapes([
     *   {
     *     shapeType: univerAPI.Enum.ShapeTypeEnum.RoundRect,
     *     transform: { left: 80, top: 80, width: 180, height: 100 },
     *     name: 'Start',
     *   },
     *   {
     *     shapeType: univerAPI.Enum.ShapeTypeEnum.Ellipse,
     *     transform: { left: 320, top: 80, width: 180, height: 100 },
     *     name: 'Finish',
     *   },
     * ]);
     * if (!shapes || shapes.length !== 2) throw new Error('Cannot insert Shapes');
     *
     * shapes[0].getText().setText('Start');
     * shapes[1].getText().setText('Finish');
     * const shapeIds = shapes.map((shape) => shape.getId());
     * const verified = shapeIds.every((shapeId) => board.getShape(shapeId) !== null);
     * if (!verified) throw new Error('Cannot verify inserted Shapes');
     * console.log({ shapeIds, transforms: shapes.map((shape) => shape.getTransform()) });
     * ```
     */
    insertShapes(inputs: IBoardShapeCreateInput[]): Array<FShape | FConnectorShape> | null;
    /**
     * Inserts a connector between two elements or free points.
     *
     * For agent scripts, prefer `fromElementId` and `toElementId` after obtaining ids from `insertShapes()` or discovery
     * methods. When endpoint sides and routing are omitted, the facade chooses facing sides and a space-aware persisted
     * route. The method resolves those ids to shape-site endpoints, creates the connector through the board
     * connector factory, and dispatches `AddBoardElementsOperation` so collaboration and undo/redo use the normal command
     * path without chaining facade APIs or commands.
     *
     * @param options Connector insertion options.
     * @returns The generated connector element when the insert command succeeds, otherwise `null`.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const shapes = board.insertShapes([
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 80, top: 80 } },
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 320, top: 80 } },
     * ]);
     * if (!shapes) throw new Error('Cannot insert shapes');
     * const connector = board.insertConnector({
     *   fromElementId: shapes[0].getId(),
     *   toElementId: shapes[1].getId(),
     *   style: { endMarker: { type: 'filledTriangle', size: 'md' } },
     * });
     * if (!connector) throw new Error('Cannot insert connector');
     * ```
     */
    insertConnector(options: IBoardFacadeInsertConnectorOptions): IBoardPageElement | null;
    /**
     * Inserts multiple connectors in a single board command.
     *
     * Use this after `insertShapes()` when an agent creates a complete diagram. It resolves `fromElementId`/`toElementId` for each
     * connector, creates all connector elements, and dispatches one `addElements` command, reducing collaboration traffic
     * and keeping undo/redo history compact.
     *
     * @param connectors Connector items to create. Use element ids to address connectors later.
     * @param options Batch insert options such as `insertIndex`, `fitContainerId`.
     * @returns The generated connector elements when the batch succeeds, otherwise `null`.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const shapes = board.insertShapes([
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 80, top: 80 } },
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 320, top: 80 } },
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 560, top: 80 } },
     * ]);
     * if (!shapes) throw new Error('Cannot insert shapes');
     * const connectors = board.insertConnectors([
     *   {
     *     fromElementId: shapes[0].getId(),
     *     toElementId: shapes[1].getId(),
     *   },
     *   {
     *     fromElementId: shapes[1].getId(),
     *     toElementId: shapes[2].getId(),
     *   },
     * ]);
     * if (!connectors) throw new Error('Cannot insert connectors');
     * ```
     */
    insertConnectors(connectors: IBoardFacadeInsertConnectorItem[], options?: IBoardFacadeInsertConnectorsOptions): IBoardPageElement[] | null;
    /**
     * Inserts a UML relationship as a native editable connector, without moving its existing endpoint shapes.
     * Aggregation/composition put the whole (diamond) at `start`; generalization/realization put the parent/interface
     * (triangle) at `end`. The name, two roles and two multiplicities become independently editable labels.
     *
     * @param options Relationship type, existing endpoint ids, optional labels and insertion index.
     * @returns The inserted element synchronously, or `null` if validation or the undoable command fails.
     * @example
     * ```ts
     * const relation = board.insertClassRelation({
     *   type: 'composition', name: 'owns',
     *   start: { elementId: agentId, role: 'owner', multiplicity: '1' },
     *   end: { elementId: toolId, role: 'tools', multiplicity: '0..*' },
     * });
     * if (!relation) throw new Error('Cannot create class relation');
     * ```
     */
    insertClassRelation(options: IBoardFacadeInsertClassRelationOptions): IBoardPageElement | null;
    /**
     * Inserts UML relationships in one undoable command. Every relationship and endpoint must be valid;
     * otherwise nothing is inserted. Uses the endpoint and label semantics of `insertClassRelation`.
     * This is an insertion API, not a replacement of existing connections.
     *
     * @param relations Relationships between shapes already on the active page.
     * @param options Optional insertion index and container fitting target.
     * @returns Inserted elements synchronously, or `null` on invalid input or command failure.
     * @example
     * ```ts
     * const relations = board.insertClassRelations([
     *   { type: 'generalization', start: { elementId: agentId }, end: { elementId: baseAgentId } },
     *   { type: 'dependency', start: { elementId: agentId }, end: { elementId: toolId }, name: 'uses' },
     * ]);
     * if (!relations) throw new Error('Cannot create class relations');
     * ```
     */
    insertClassRelations(relations: IBoardFacadeInsertClassRelationItem[], options?: IBoardFacadeInsertConnectorsOptions): IBoardPageElement[] | null;
    /**
     * Inserts a native editable crow-foot relationship. Each cardinality describes the endpoint on which it is set;
     * `identifying` uses a solid line and `nonIdentifying` a dashed line. Existing entities are not repositioned.
     *
     * @param options Relationship kind, existing endpoint ids, cardinalities and optional name.
     * @returns The inserted element synchronously, or `null` if validation or the undoable command fails.
     * @example
     * ```ts
     * const relation = board.insertEntityRelation({
     *   type: 'nonIdentifying', label: 'records',
     *   start: { elementId: agentId, cardinality: 'one' },
     *   end: { elementId: runId, cardinality: 'zeroOrMany' },
     * });
     * if (!relation) throw new Error('Cannot create entity relation');
     * ```
     */
    insertEntityRelation(options: IBoardFacadeInsertEntityRelationOptions): IBoardPageElement | null;
    /**
     * Inserts crow-foot relationships atomically in one undoable command. Uses `insertEntityRelation` semantics;
     * it does not remove existing connections. An invalid relationship or endpoint rejects the entire batch.
     *
     * @param relations Relationships between entities already on the active page.
     * @param options Optional insertion index and container fitting target.
     * @returns Inserted elements synchronously, or `null` on invalid input or command failure.
     * @example
     * ```ts
     * const relations = board.insertEntityRelations([{
     *   type: 'identifying', label: 'contains',
     *   start: { elementId: runId, cardinality: 'one' },
     *   end: { elementId: stepId, cardinality: 'oneOrMany' },
     * }]);
     * if (!relations) throw new Error('Cannot create entity relations');
     * ```
     */
    insertEntityRelations(relations: IBoardFacadeInsertEntityRelationItem[], options?: IBoardFacadeInsertConnectorsOptions): IBoardPageElement[] | null;
    /**
     * Inserts one ordered message using the activation and shared-timeline rules of `insertSequenceMessages`.
     * Create native lifeline participants and activation bars before calling this method.
     *
     * @param options Message type, positive order, participant ids and optional explicit activation ids.
     * @param layout Timeline origin, spacing and self-message dimensions in Board units.
     * @returns The inserted connector synchronously, or `null` when the message cannot be bound or inserted.
     * @example
     * ```ts
     * const message = board.insertSequenceMessage({
     *   fromParticipantId: agentId, toParticipantId: toolId,
     *   type: 'synchronous', order: 1, text: 'execute()',
     * }, { timeOriginY: 160 });
     * if (!message) throw new Error('Cannot bind sequence message');
     * ```
     */
    insertSequenceMessage(options: IBoardFacadeInsertSequenceMessageOptions, layout?: Omit<IBoardFacadeInsertSequenceMessagesOptions, 'insertIndex'>): IBoardPageElement | null;
    /**
     * Inserts messages bound to a covering activation, or to the lifeline outside execution spans.
     * Create activation bars first. Ambiguous overlapping spans require explicit activation IDs.
     * Bindings are persisted shape sites: editing an activation moves its attached messages with it.
     * All messages share one world-space timeline. Create targets must have their header center at the
     * receive time; destroy targets must end their lifeline there. This helper never moves participants.
     * Message Y is `timeOriginY + firstOffsetY + (order - 1) * step`; defaults are 72 for the first offset and 48
     * for the step. Without an explicit origin, the earliest participant header bottom is used.
     * Orders must be positive, integral and unique within the batch. The entire batch is one undoable insertion.
     *
     * @param messages Ordered messages referencing native lifelines and optional native activation bars on the active page.
     * @param options Shared timeline, self-loop dimensions, insertion index and optional container fitting target.
     * @returns Inserted connectors synchronously, or `null` without partial insertion if any message is invalid.
     * @example
     * ```ts
     * const messages = board.insertSequenceMessages([
     *   { fromParticipantId: agentId, toParticipantId: toolId, type: 'synchronous', order: 1, text: 'execute()' },
     *   { fromParticipantId: toolId, toParticipantId: agentId, type: 'reply', order: 2, text: 'result' },
     * ], { timeOriginY: 160, firstOffsetY: 48, step: 64 });
     * if (!messages) throw new Error('Check participant geometry and overlapping activation spans');
     * // Inspect model geometry with analyzeModelLayout(); use analyzeRenderedLayout() in a rendered Board UI
     * // to check measured text and route collisions before capturing a screenshot.
     * ```
     */
    insertSequenceMessages(messages: IBoardFacadeInsertSequenceMessageItem[], options?: IBoardFacadeInsertSequenceMessagesOptions): IBoardPageElement[] | null;
    private _getShapeScope;
    private _getShapeAdapter;
    private _createShapeHandle;
    /**
     * Updates top-level metadata for one element.
     *
     * This keeps geometry and element-specific payload intact while using the normal Board command path, so the
     * change participates in undo/redo and collaboration.
     *
     * @param elementId Existing element id returned by an insert or discovery API.
     * @param patch Metadata fields to update. Explicit `undefined` clears `name` or `description`.
     * @returns `true` when the element exists and the update succeeds or is already current.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     *
     * const shape = board.insertShape({
     *   shapeType: univerAPI.Enum.ShapeTypeEnum.Rect,
     *   transform: { left: 120, top: 120 },
     *   name: 'Review',
     * });
     * if (!shape || !board.setElementMetadata(shape.getId(), { name: 'Review step', locked: true })) {
     *   throw new Error('Cannot update shape metadata');
     * }
     * ```
     */
    setElementMetadata(elementId: string, patch: IBoardFacadeSetElementMetadataPatch): boolean;
    /**
     * Updates top-level metadata for several elements in one command.
     *
     * Every id must exist and be editable; otherwise no element is changed.
     *
     * @param patches Element-id-to-metadata map.
     * @returns `true` when every target is valid and the atomic batch succeeds or is already current.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const shapes = board.insertShapes([
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 80, top: 80 } },
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 280, top: 80 } },
     * ]);
     * if (!shapes || !board.setElementsMetadata({
     *   [shapes[0].getId()]: { name: 'Start' },
     *   [shapes[1].getId()]: { name: 'Finish' },
     * })) throw new Error('Cannot update metadata');
     * ```
     */
    setElementsMetadata(patches: Record<string, IBoardFacadeSetElementMetadataPatch>): boolean;
    /**
     * Moves, resizes, rotates, or flips one element without rebuilding its full model.
     *
     * @param elementId Existing element id.
     * @param patch Transform fields to replace; omitted fields keep their current values.
     * @returns `true` when the element and patch are valid and the update succeeds.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     *
     * const shape = board.insertShape({
     *   shapeType: univerAPI.Enum.ShapeTypeEnum.RoundRect,
     *   transform: { left: 80, top: 80 },
     *   name: 'Move me',
     * });
     * if (!shape || !board.setElementTransform(shape.getId(), { left: 240, top: 160, rotation: 15 })) {
     *   throw new Error('Cannot transform shape');
     * }
     * ```
     */
    setElementTransform(elementId: string, patch: IBoardFacadeElementTransformPatch): boolean;
    /**
     * Applies transform patches atomically to several elements.
     *
     * @param patches Element-id-to-transform map.
     * @returns `true` when every target and patch is valid and the batch succeeds.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const shapes = board.insertShapes([
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 80, top: 80 } },
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 280, top: 80 } },
     * ]);
     * if (!shapes || !board.setElementsTransform({
     *   [shapes[0].getId()]: { left: 120 },
     *   [shapes[1].getId()]: { left: 360, rotation: 15 },
     * })) throw new Error('Cannot transform shapes');
     * ```
     */
    setElementsTransform(patches: Record<string, IBoardFacadeElementTransformPatch>): boolean;
    /**
     * Translates one element by a relative board-coordinate delta.
     *
     * @param elementId Existing element id.
     * @param translation Relative horizontal and vertical movement.
     * @returns `true` when the delta is finite and non-zero and the update succeeds.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const shape = board.insertShape({ shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 80, top: 80 } });
     * if (!shape || !board.translateElement(shape.getId(), { dx: 120, dy: 40 })) throw new Error('Cannot move shape');
     * ```
     */
    translateElement(elementId: string, translation: IBoardFacadeElementTranslation): boolean;
    /**
     * Translates several elements by the same relative board-coordinate delta in one command.
     *
     * @param elementIds Existing element ids.
     * @param translation Shared relative movement.
     * @returns `true` when every target is valid and the atomic batch succeeds.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const shapes = board.insertShapes([
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 80, top: 80 } },
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 280, top: 80 } },
     * ]);
     * if (!shapes || !board.translateElements(shapes.map((shape) => shape.getId()), { dx: 40, dy: 80 })) {
     *   throw new Error('Cannot move shapes');
     * }
     * ```
     */
    translateElements(elementIds: string[], translation: IBoardFacadeElementTranslation): boolean;
    /**
     * Aligns at least two elements against their combined resolved bounds.
     *
     * @param elementIds Existing element ids.
     * @param alignment Edge or center alignment mode.
     * @returns `true` when at least one element moves and the batch succeeds.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     *
     * const nodes = board.insertShapes([
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 80, top: 80 } },
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 280, top: 160 } },
     * ]);
     * if (!nodes || !board.alignElements(nodes.map((node) => node.getId()), 'left')) {
     *   throw new Error('Cannot align nodes');
     * }
     * ```
     */
    alignElements(elementIds: string[], alignment: BoardFacadeElementAlignment): boolean;
    /**
     * Distributes at least three elements with equal horizontal or vertical gaps.
     *
     * @param elementIds Existing element ids.
     * @param distribution Distribution axis.
     * @returns `true` when at least one element moves and the batch succeeds.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const shapes = board.insertShapes([
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 80, top: 80 } },
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 260, top: 80 } },
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 560, top: 80 } },
     * ]);
     * if (!shapes || !board.distributeElements(shapes.map((shape) => shape.getId()), 'horizontal')) {
     *   throw new Error('Cannot distribute shapes');
     * }
     * ```
     */
    distributeElements(elementIds: string[], distribution: BoardFacadeElementDistribution): boolean;
    /**
     * Arranges elements in their supplied order, preserving their current sizes.
     *
     * @param elementIds Existing element ids in visual order.
     * @param options Direction, gap, and optional starting point.
     * @returns `true` when at least one element moves and the batch succeeds.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const shapes = board.insertShapes([
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 80, top: 80 } },
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 280, top: 180 } },
     * ]);
     * if (!shapes || !board.arrangeElements(shapes.map((shape) => shape.getId()), { direction: 'horizontal', gap: 60 })) {
     *   throw new Error('Cannot arrange shapes');
     * }
     * ```
     */
    arrangeElements(elementIds: string[], options: IBoardFacadeArrangeElementsOptions): boolean;
    /**
     * Arranges elements in their supplied order into a row-major grid.
     *
     * @param elementIds Existing element ids in row-major order.
     * @param options Column count, gaps, and optional starting point.
     * @returns `true` when at least one element moves and the batch succeeds.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const shapes = board.insertShapes([
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 80, top: 80 } },
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 280, top: 180 } },
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 480, top: 280 } },
     * ]);
     * if (!shapes || !board.arrangeElementsInGrid(shapes.map((shape) => shape.getId()), { columns: 2 })) {
     *   throw new Error('Cannot arrange grid');
     * }
     * ```
     */
    arrangeElementsInGrid(elementIds: string[], options: IBoardFacadeArrangeElementsInGridOptions): boolean;
    /**
     * Arranges explicitly supplied element layers for flowcharts and dependency diagrams.
     *
     * Each inner array is rendered in its supplied visual order. Layers flow top-to-bottom by default, or left-to-right
     * when `direction` is `horizontal`.
     *
     * @param layers Element ids grouped into ordered visual layers.
     * @param options Flow direction, layer/item gaps, alignments, and optional starting point.
     * @returns `true` when all ids are unique and valid and the batch succeeds.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     *
     * const nodes = board.insertShapes([
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.RoundRect, transform: { left: 80, top: 80 } },
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Diamond, transform: { left: 280, top: 80 } },
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 480, top: 40 } },
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 480, top: 180 } },
     * ]);
     * if (!nodes) throw new Error('Cannot insert flowchart nodes');
     * const [start, decision, approved, rejected] = nodes;
     * const arranged = board.arrangeElementsInLayers(
     *   [[start.id], [decision.id], [approved.id, rejected.id]],
     *   { direction: 'horizontal', layerGap: 140, itemGap: 100 }
     * );
     * if (!arranged) throw new Error('Cannot arrange flowchart');
     * ```
     */
    arrangeElementsInLayers(layers: string[][], options?: IBoardFacadeArrangeElementsInLayersOptions): boolean;
    /**
     * Arranges elements around a circle in their supplied order.
     *
     * @param elementIds Existing element ids in circular order.
     * @param options Circle center, radius, start angle, and direction.
     * @returns `true` when the geometry is valid and the batch succeeds.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const shapes = board.insertShapes([
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Ellipse, transform: { left: 80, top: 80 } },
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Ellipse, transform: { left: 280, top: 80 } },
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Ellipse, transform: { left: 480, top: 80 } },
     * ]);
     * if (!shapes || !board.arrangeElementsInCircle(shapes.map((shape) => shape.getId()), {
     *   center: { x: 400, y: 300 },
     *   radius: 180,
     * })) throw new Error('Cannot arrange circle');
     * ```
     */
    arrangeElementsInCircle(elementIds: string[], options: IBoardFacadeArrangeElementsInCircleOptions): boolean;
    /**
     * Fits an element group into a rectangle while optionally preserving its aspect ratio.
     *
     * @param elementIds Existing element ids.
     * @param bounds Target board-coordinate rectangle.
     * @param options Aspect-ratio behavior.
     * @returns `true` when source and target bounds are valid and the batch succeeds.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const shapes = board.insertShapes([
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 80, top: 80 } },
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 280, top: 180 } },
     * ]);
     * if (!shapes || !board.fitElementsIntoBounds(shapes.map((shape) => shape.getId()), {
     *   left: 100,
     *   top: 100,
     *   width: 640,
     *   height: 360,
     * })) throw new Error('Cannot fit shapes');
     * ```
     */
    fitElementsIntoBounds(elementIds: string[], bounds: IBoardRect, options?: IBoardFacadeFitElementsIntoBoundsOptions): boolean;
    /**
     * Returns a detached connector style snapshot.
     *
     * @param elementId Existing connector id.
     * @returns Editable connector style, or `null` when the id is missing or not a connector.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const shapes = board.insertShapes([
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 80, top: 80 } },
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 320, top: 80 } },
     * ]);
     * if (!shapes) throw new Error('Cannot insert shapes');
     * const connector = board.insertConnector({ fromElementId: shapes[0].getId(), toElementId: shapes[1].getId() });
     * if (!connector) throw new Error('Cannot insert connector');
     * console.log(board.getConnectorStyle(connector.id));
     * ```
     */
    getConnectorStyle(elementId: string): IBoardFacadeConnectorStylePatch | null;
    /**
     * Patches the visual style of one connector without changing its endpoints or label.
     *
     * Animation is disabled by default. The available modes are `dash` (moving dash), `particle` (one moving dot),
     * `pulse` (whole-path highlight), `gradient` (moving fading highlight), `particles` (repeated dots), and `arrows`
     * (repeated directional arrowheads). Use `animation: null` to disable an existing animation. A small number of
     * animated connectors can make data flow easier to read; keep dense diagrams static unless motion adds meaning.
     * Marker names are validated at runtime; use `{ type: 'none' }` rather than `null` to hide a marker.
     *
     * @param elementId Existing connector id.
     * @param patch Connector style fields to update.
     * @returns `true` when the connector and patch are valid and the update succeeds.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const shapes = board.insertShapes([
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 80, top: 80 } },
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 320, top: 80 } },
     * ]);
     * if (!shapes) throw new Error('Cannot insert shapes');
     * const connector = board.insertConnector({ fromElementId: shapes[0].getId(), toElementId: shapes[1].getId() });
     * if (!connector || !board.setConnectorStyle(connector.id, {
     *   stroke: '#4f46e5',
     *   strokeWidth: 2,
     *   animation: { mode: 'gradient', direction: 'forward', speed: 1 },
     * })) {
     *   throw new Error('Cannot style connector');
     * }
     * // Reverse and accelerate the same animation.
     * if (!board.setConnectorStyle(connector.id, {
     *   animation: { mode: 'gradient', direction: 'reverse', speed: 2 },
     * })) throw new Error('Cannot update connector animation');
     * // Restore a static connector. `undefined` would preserve the current animation instead.
     * if (!board.setConnectorStyle(connector.id, { animation: null })) {
     *   throw new Error('Cannot disable connector animation');
     * }
     * ```
     */
    setConnectorStyle(elementId: string, patch: IBoardFacadeConnectorStylePatch): boolean;
    /**
     * Returns a detached container-style snapshot.
     *
     * @param elementId Existing container id.
     * @returns Editable frame/title style, or `null` when the id is missing or not a container.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const containerId = `container-${Date.now()}`;
     * if (!board.createContainer({ id: containerId, left: 80, top: 80 })) throw new Error('Cannot create container');
     * console.log(board.getContainerStyle(containerId));
     * ```
     */
    getContainerStyle(elementId: string): IBoardFacadeContainerStyle | null;
    /**
     * Patches the frame and title style of a generic container or swimlane.
     *
     * @param elementId Existing container id.
     * @param patch Frame fields and optional partial title style.
     * @returns `true` when the container and patch are valid and the update succeeds.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const containerId = `container-${Date.now()}`;
     * if (!board.createContainer({ id: containerId, left: 80, top: 80 }) || !board.setContainerStyle(containerId, {
     *   fillColor: '#f8fafc',
     *   strokeColor: '#64748b',
     * })) throw new Error('Cannot style container');
     * ```
     */
    setContainerStyle(elementId: string, patch: IBoardFacadeContainerStylePatch): boolean;
    /**
     * Gets standalone text as a detached rich-text value.
     *
     * @param elementId Existing standalone text id.
     * @returns Detached rich text, or `null` when the id is missing or not standalone text.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const text = board.insertText({ text: 'Draft', left: 80, top: 80 });
     * if (!text) throw new Error('Cannot insert text');
     * console.log(board.getTextContent(text.id)?.getData());
     * ```
     */
    getTextContent(elementId: string): RichTextValue | null;
    /**
     * Replaces standalone text content while preserving its bounds and style.
     *
     * @param elementId Existing standalone text id.
     * @param content Plain text or a value returned by `univerAPI.newRichText()`.
     * @returns `true` when the text element exists and the update succeeds or is already current.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const text = board.insertText({ text: 'Draft', left: 80, top: 80 });
     * if (!text || !board.setTextContent(text.id, 'Approved')) throw new Error('Cannot update text');
     * ```
     */
    setTextContent(elementId: string, content: BoardFacadeTextContent): boolean;
    /**
     * Gets one connector label as a detached rich-text value.
     *
     * The returned value never mutates the Board directly. Call `copy()` to obtain the shared Univer
     * `RichTextBuilder`, update the builder, and pass it to `setConnectorLabelText()` to commit the change through the
     * Board command layer. This is the same value/builder flow used by other Univer rich-text facade APIs.
     *
     * @param elementId Existing connector id.
     * @returns Detached label text, or `null` when the connector or label is missing.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const shapes = board.insertShapes([
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 80, top: 80 } },
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 320, top: 80 } },
     * ]);
     * if (!shapes) throw new Error('Cannot insert shapes');
     * const connector = board.insertConnector({ fromElementId: shapes[0].getId(), toElementId: shapes[1].getId(), labelText: 'Next' });
     * if (!connector) throw new Error('Cannot insert connector');
     *
     * const value = board.getConnectorLabelText(connector.id);
     * const builder = value?.copy();
     * if (!builder) throw new Error('Connector label is missing');
     * builder.setStyle(0, builder.toPlainText().length, {
     *   fs: 16,
     *   bl: univerAPI.Enum.BooleanNumber.TRUE,
     *   cl: { rgb: '#2563eb' },
     * });
     * if (!board.setConnectorLabelText(connector.id, builder)) throw new Error('Cannot style label');
     * ```
     */
    getConnectorLabelText(elementId: string): RichTextValue | null;
    /**
     * Sets one connector label, creating the label when necessary.
     *
     * Pass a string for plain text or the shared `RichTextBuilder` returned by `univerAPI.newRichText()` or
     * `getConnectorLabelText(...).copy()`. The builder is detached before the command executes, so later builder
     * changes do not mutate the Board. The command participates in collaboration and undo/redo.
     *
     * Text changes preserve declarative layout constraints. Board UI measures content at runtime without writing
     * derived dimensions into the model. Use `updateConnectorLabel(..., { layout })` to change sizing constraints;
     * successful headless execution does not imply that visual layout has been measured.
     *
     * @param elementId Existing connector id.
     * @param text Plain or rich label content.
     * @returns `true` when the connector exists and the update succeeds or is already current.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const shapes = board.insertShapes([
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 80, top: 80 } },
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 320, top: 80 } },
     * ]);
     * if (!shapes) throw new Error('Cannot insert shapes');
     * const connector = board.insertConnector({ fromElementId: shapes[0].getId(), toElementId: shapes[1].getId() });
     * if (!connector) throw new Error('Cannot insert connector');
     *
     * const label = univerAPI.newRichText()
     *   .align({ horizontal: univerAPI.Enum.HorizontalAlign.CENTER })
     *   .span('Approved', { bold: true, fontSize: 16, color: '#16a34a' });
     * if (!board.setConnectorLabelText(connector.id, label)) {
     *   throw new Error('Cannot set label');
     * }
     * ```
     */
    setConnectorLabelText(elementId: string, text: BoardFacadeTextContent): boolean;
    /**
     * Gets the detached visual style of one connector label.
     *
     * Label appearance is separate from rich-text formatting. `fill` and `stroke` style the label box, while
     * `interruptLine` controls whether the connector route is visually interrupted behind the label. Missing `fill` means
     * transparent, missing `stroke` means no border, and missing `interruptLine` means the route is interrupted.
     *
     * @param elementId Existing connector id.
     * @returns Detached label style, or `null` when the connector or label is missing.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const style = board.getConnectorLabelStyle('connector-id');
     * if (style) console.log(style.fill?.color, style.stroke?.color, style.interruptLine ?? true);
     * ```
     */
    getConnectorLabelStyle(elementId: string): IBoardConnectorLabelStyle | null;
    /**
     * Patches the visual style of one existing connector label through the Board command layer.
     *
     * Omitted fields preserve their current values. Pass `null` for `fill` or `stroke` to restore the default
     * transparent/no-border appearance. Set `interruptLine` to `false` only when the connector should remain visible
     * behind the text. `lineGap` is the extra spacing around the label box in Board units.
     *
     * @param elementId Existing connector id with a label.
     * @param patch Label appearance fields to update.
     * @returns `true` when the label exists and the command succeeds.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const connectorId = 'connector-id';
     *
     * if (!board.setConnectorLabelStyle(connectorId, {
     *   fill: { color: '#ffffff', opacity: 0.92 },
     *   stroke: {
     *     color: '#94a3b8',
     *     width: 1,
     *     lineStrokeType: univerAPI.Enum.ShapeLineTypeEnum.SolidLine,
     *   },
     *   interruptLine: true,
     *   lineGap: 3,
     * })) throw new Error('Cannot style connector label');
     *
     * // Restore the default transparent label while keeping the route interrupted behind the text.
     * board.setConnectorLabelStyle(connectorId, { fill: null, stroke: null, interruptLine: true });
     * ```
     */
    setConnectorLabelStyle(elementId: string, patch: IBoardConnectorLabelStylePatch): boolean;
    /**
     * Removes one connector label through the Board command layer.
     *
     * The connector itself and its routing remain unchanged. The removal participates in collaboration and undo/redo,
     * so `board.undo()` restores the label text, rich-text document, box style, and position.
     *
     * @param elementId Existing connector id with a label.
     * @returns `true` when the label exists and is removed.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     *
     * const connectorId = 'connector-id';
     * if (!board.removeConnectorLabel(connectorId)) throw new Error('Cannot remove connector label');
     *
     * // Restore the removed label when needed.
     * board.undo();
     * ```
     */
    removeConnectorLabel(elementId: string, labelId?: string): boolean;
    /**
     * Returns a detached copy of connector labels in rendering order, including rich document content.
     * Mutating the result does not change the Board; use `setConnectorLabels` or `updateConnectorLabel` to write.
     *
     * @param elementId Connector id on the active page.
     * @returns Labels synchronously, or an empty array if there are none or the id is not a connector.
     * @example
     * ```ts
     * const labels = board.getConnectorLabels(connectorId);
     * const labelIds = labels.map((label) => label.id);
     * ```
     */
    getConnectorLabels(elementId: string): IBoardConnectorLabel[];
    /**
     * Replaces every label on one connector in one undoable command, preserving its endpoints and route.
     * Pass `[]` to remove all labels. Label ids must be non-empty and unique within the connector.
     * `autoSize` does not wrap automatically; `fixedWidth` wraps to the specified width and grows vertically;
     * `fixedSize` also fixes height. Measured dimensions remain render-derived, not persisted by this method.
     *
     * @param elementId Existing connector id on the active page.
     * @param labels Complete replacement labels with stable ids; plain text or rich document content is supported.
     * @returns `true` synchronously on success; `false` for invalid labels, a non-connector id or command failure.
     * @example
     * ```ts
     * const ok = board.setConnectorLabels(connectorId, [
     *   { id: 'name', content: 'executes', placement: { anchor: 'center' }, layout: { mode: 'autoSize' } },
     *   { id: 'target', content: '0..*', placement: { anchor: 'end', side: 'left' } },
     * ]);
     * if (!ok) throw new Error('Cannot replace connector labels');
     * ```
     */
    setConnectorLabels(elementId: string, labels: readonly IBoardFacadeConnectorLabel[]): boolean;
    /**
     * Updates one stable label id in an undoable command; other labels, endpoints and routing remain unchanged.
     * Content and layout replace their entire previous values; placement and style merge individual fields.
     * A null layout restores AutoSize; null placement/style restores defaults. An explicit anchor or path ratio
     * clears the old free offset unless an offset is supplied in the same patch.
     *
     * @param elementId Existing connector id on the active page.
     * @param labelId Existing stable label id, as returned by `getConnectorLabels`.
     * @param patch Content, placement, sizing or style changes. Omitted fields are retained.
     * @returns `true` synchronously on success; `false` for a missing label, invalid patch or command failure.
     * @example
     * ```ts
     * const ok = board.updateConnectorLabel(connectorId, 'name', {
     *   content: 'Executes tools with approval',
     *   layout: { mode: 'fixedWidth', width: 160 },
     *   placement: { anchor: 'center', offset: null },
     * });
     * if (!ok) throw new Error('Cannot update connector label');
     * ```
     */
    updateConnectorLabel(elementId: string, labelId: string, patch: IBoardFacadeConnectorLabelPatch): boolean;
    /**
     * Returns detached endpoint and routing data for one connector.
     *
     * @param elementId Existing connector id.
     * @returns Detached connection data, or `null` when the id is missing or not a connector.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const shapes = board.insertShapes([
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 80, top: 80 } },
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 320, top: 80 } },
     * ]);
     * if (!shapes) throw new Error('Cannot insert shapes');
     * const connector = board.insertConnector({ fromElementId: shapes[0].getId(), toElementId: shapes[1].getId() });
     * if (!connector) throw new Error('Cannot insert connector');
     * console.log(board.getConnectorConnection(connector.id));
     * ```
     */
    getConnectorConnection(elementId: string): IBoardFacadeConnectorConnection | null;
    /**
     * Patches connector endpoints, routing, or manual waypoints through the normal update command.
     *
     * @param elementId Existing connector id.
     * @param patch Endpoint and routing fields to replace.
     * @returns `true` when the connector and endpoints are valid and the update succeeds.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const shapes = board.insertShapes([
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 80, top: 80 } },
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 320, top: 80 } },
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 560, top: 80 } },
     * ]);
     * if (!shapes) throw new Error('Cannot insert connector targets');
     * const connector = board.insertConnector({
     *   fromElementId: shapes[0].getId(),
     *   toElementId: shapes[1].getId(),
     * });
     * if (!connector) throw new Error('Cannot insert connector');
     * const replacement = shapes[2];
     * const changed = board.setConnectorConnection(connector.id, {
     *   end: { elementId: replacement.id, connectionSiteId: 3 },
     *   routing: 'curve',
     * });
     * if (!changed) throw new Error('Cannot reconnect edge');
     * ```
     */
    setConnectorConnection(elementId: string, patch: IBoardFacadeConnectorConnectionPatch): boolean;
    /**
     * Reorders existing elements in board z-order.
     *
     * @param elementIds Existing element ids.
     * @param placement Absolute or one-step z-order placement.
     * @returns `true` when every id exists and the order changes successfully.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const shapes = board.insertShapes([
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 80, top: 80 } },
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 120, top: 120 } },
     * ]);
     * if (!shapes) throw new Error('Cannot insert shapes');
     * const background = shapes[1];
     * if (!board.reorderElements([background.id], 'back')) {
     *   throw new Error('Cannot send background to back');
     * }
     * ```
     */
    reorderElements(elementIds: string[], placement: BoardElementOrderPlacement): boolean;
    /**
     * Brings elements to the front.
     *
     * @param elementIds Existing element ids.
     * @returns `true` when the order changes successfully.
     * @see reorderElements
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const shapes = board.insertShapes([
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 80, top: 80 } },
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 120, top: 120 } },
     * ]);
     * if (!shapes || !board.bringElementsToFront([shapes[0].getId()])) throw new Error('Cannot bring shape to front');
     * ```
     */
    bringElementsToFront(elementIds: string[]): boolean;
    /**
     * Moves elements one z-order step forward.
     *
     * @param elementIds Existing element ids.
     * @returns `true` when the order changes successfully.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const shapes = board.insertShapes([
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 80, top: 80 } },
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 120, top: 120 } },
     * ]);
     * if (!shapes || !board.bringElementsForward([shapes[0].getId()])) throw new Error('Cannot move shape forward');
     * ```
     */
    bringElementsForward(elementIds: string[]): boolean;
    /**
     * Moves elements one z-order step backward.
     *
     * @param elementIds Existing element ids.
     * @returns `true` when the order changes successfully.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const shapes = board.insertShapes([
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 80, top: 80 } },
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 120, top: 120 } },
     * ]);
     * if (!shapes || !board.sendElementsBackward([shapes[1].getId()])) throw new Error('Cannot move shape backward');
     * ```
     */
    sendElementsBackward(elementIds: string[]): boolean;
    /**
     * Sends elements to the back.
     *
     * @param elementIds Existing element ids.
     * @returns `true` when the order changes successfully.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const shapes = board.insertShapes([
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 80, top: 80 } },
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 120, top: 120 } },
     * ]);
     * if (!shapes || !board.sendElementsToBack([shapes[1].getId()])) throw new Error('Cannot send shape to back');
     * ```
     */
    sendElementsToBack(elementIds: string[]): boolean;
    /**
     * Updates one element model through the command layer.
     *
     * This is a low-level API for callers that already have a complete next element model. For agent scripts, prefer
     * intent-specific APIs such as metadata setters, container APIs, and shape/connector insert APIs where possible.
     * Supplying the current model and transform is a successful no-op: it creates neither an undo entry nor a
     * collaboration mutation.
     *
     * @param elementId Existing element id to update.
     * @param options Next element model and optional transform behavior.
     * @returns `true` when the update command succeeds.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const shape = board.insertShape({ shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 80, top: 80 } });
     * if (!shape) throw new Error('Cannot insert shape');
     * const element = board.getElement(shape.getId());
     * if (!element || !board.updateElement(shape.getId(), { element: { ...element, name: 'Updated shape' } })) {
     *   throw new Error('Cannot update shape');
     * }
     * ```
     */
    updateElement(elementId: string, options: IBoardFacadeUpdateElementOptions): boolean;
    private _updateElements;
    private _getElementGeometries;
    private _applyTranslations;
    private _isElementUpdateNoop;
    /**
     * Removes one board element through the command layer.
     *
     * The method rejects locally known locked, hidden, unselectable, or membership-locked container content. Prefer
     * id-based lookup before removal in agent scripts so generated ids do not leak into prompts.
     *
     * @param elementId Element id to remove.
     * @returns `true` when the remove command succeeds.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const shape = board.insertShape({ shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 80, top: 80 } });
     * if (!shape || !board.removeElement(shape.getId())) throw new Error('Cannot remove shape');
     * ```
     */
    removeElement(elementId: string): boolean;
    /**
     * Removes multiple board elements in one command.
     *
     * Use this batch API when an agent cleans up several generated elements. It rejects duplicate ids and dispatches one
     * command, which keeps collaboration and undo history compact.
     *
     * @param elementIds Element ids to remove.
     * @returns `true` when all ids pass local checks and the remove command succeeds.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const shapes = board.insertShapes([
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 80, top: 80 } },
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 280, top: 80 } },
     * ]);
     * if (!shapes || !board.removeElements(shapes.map((shape) => shape.getId()))) throw new Error('Cannot remove shapes');
     * ```
     */
    removeElements(elementIds: string[]): boolean;
    /**
     * Disbands a container while preserving its children.
     *
     * This is useful when an agent decides a grouping container is no longer semantically meaningful. The method refuses
     * blocked containers and containers whose parent membership rules prevent disbanding.
     *
     * @param containerId Container id to disband.
     * @returns `true` when the disband command succeeds.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const containerId = `container-${Date.now()}`;
     * if (!board.createContainer({ id: containerId, left: 80, top: 80 }) || !board.disbandContainer(containerId)) {
     *   throw new Error('Cannot disband container');
     * }
     * ```
     */
    disbandContainer(containerId: string): boolean;
    /**
     * Wraps existing elements in a new or existing container.
     *
     * Pass `containerId` to reuse a known container. Omit it to let the command create a container using `title`.
     * Duplicate ids and blocked elements are rejected before dispatch.
     *
     * @param elementIds Element ids to wrap.
     * @param options Optional container id and title.
     * @returns `true` when the wrap command succeeds.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const shapes = board.insertShapes([
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 80, top: 80 } },
     *   { shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 280, top: 80 } },
     * ]);
     * if (!shapes || !board.wrapElementsInContainer(shapes.map((shape) => shape.getId()), { title: 'Group' })) {
     *   throw new Error('Cannot wrap shapes');
     * }
     * ```
     */
    wrapElementsInContainer(elementIds: string[], options?: IBoardFacadeWrapElementsInContainerOptions): boolean;
    /**
     * Reparents elements into a container or back to the Board root.
     *
     * Pass `parentId` to move elements into a container. Pass `undefined` to move them out to the Board root. The method
     * checks membership-locked parents and target container accessibility before dispatching.
     *
     * @param elementIds Element ids to move.
     * @param parentId Target container id, or `undefined` for the Board root.
     * @returns `true` when the reparent command succeeds.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const containerId = `container-${Date.now()}`;
     * if (!board.createContainer({ id: containerId, left: 80, top: 80 })) throw new Error('Cannot create container');
     * const shape = board.insertShape({ shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 480, top: 80 } });
     * if (!shape || !board.reparentElements([shape.getId()], containerId)) throw new Error('Cannot reparent shape');
     * ```
     */
    reparentElements(elementIds: string[], parentId?: string): boolean;
    /**
     * Moves elements into a container.
     *
     * This is a semantic alias for `reparentElements(elementIds, containerId)`, easier for agents to choose when the
     * target is definitely a container.
     *
     * @param elementIds Element ids to move.
     * @param containerId Target container id.
     * @returns `true` when the move succeeds.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const containerId = `container-${Date.now()}`;
     * if (!board.createContainer({ id: containerId, left: 80, top: 80 })) throw new Error('Cannot create container');
     * const shape = board.insertShape({ shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 480, top: 80 } });
     * if (!shape || !board.moveElementsToContainer([shape.getId()], containerId)) throw new Error('Cannot move shape');
     * ```
     */
    moveElementsToContainer(elementIds: string[], containerId: string): boolean;
    /**
     * Moves elements out of their current container to the Board root.
     *
     * This is a semantic alias for `reparentElements(elementIds, undefined)`.
     *
     * @param elementIds Element ids to move.
     * @returns `true` when the move succeeds.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const containerId = `container-${Date.now()}`;
     * if (!board.createContainer({ id: containerId, left: 80, top: 80 })) throw new Error('Cannot create container');
     * const shape = board.insertShape({ shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 120, top: 120 } });
     * if (!shape || !board.reparentElements([shape.getId()], containerId)) throw new Error('Cannot insert shape');
     * if (!board.moveElementsOutOfContainer([shape.getId()])) throw new Error('Cannot move shape out');
     * ```
     */
    moveElementsOutOfContainer(elementIds: string[]): boolean;
    /**
     * Fits a container bounds to its current content.
     *
     * Use this after an agent moves elements into a container or changes child geometry. The operation goes through the
     * same command path as the UI action.
     *
     * @param containerId Container id.
     * @returns `true` when the fit command succeeds.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const containerId = `container-${Date.now()}`;
     * if (!board.createContainer({ id: containerId, left: 80, top: 80 })) throw new Error('Cannot create container');
     * const shape = board.insertShape({ shapeType: univerAPI.Enum.ShapeTypeEnum.Rect, transform: { left: 120, top: 120 } });
     * if (!shape || !board.reparentElements([shape.getId()], containerId)) throw new Error('Cannot insert shape');
     * if (!board.fitContainerToContent(containerId)) throw new Error('Cannot fit container');
     * ```
     */
    fitContainerToContent(containerId: string): boolean;
    /**
     * Enables or disables membership locking for a container.
     *
     * A membership-locked container prevents facade operations from moving children out through normal reparent/remove
     * paths. This helps agents protect generated groups after they are finalized.
     *
     * @param containerId Container id.
     * @param membershipLocked Whether membership should be locked.
     * @returns `true` when the command succeeds.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const containerId = `container-${Date.now()}`;
     * if (!board.createContainer({ id: containerId, left: 80, top: 80 }) ||
     *   !board.setContainerMembershipLocked(containerId, true)) throw new Error('Cannot lock membership');
     * ```
     */
    setContainerMembershipLocked(containerId: string, membershipLocked: boolean): boolean;
    /**
     * Enables or disables auto-resize for a container.
     *
     * Auto-resize is useful for agent-generated groups that should grow with their children. The facade rejects disabling
     * auto-resize on a membership-locked container because that would conflict with local container invariants.
     *
     * @param containerId Container id.
     * @param autoResize Whether the container should auto-resize.
     * @returns `true` when the command succeeds.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const containerId = `container-${Date.now()}`;
     * if (!board.createContainer({ id: containerId, left: 80, top: 80 }) ||
     *   !board.setContainerAutoResize(containerId, true)) throw new Error('Cannot enable auto-resize');
     * ```
     */
    setContainerAutoResize(containerId: string, autoResize: boolean): boolean;
    /**
     * Replaces the full swimlane model for a swimlane container.
     *
     * This is a low-level lane operation. Prefer the focused lane APIs for agent scripts because they express intent
     * more clearly. Locked lanes cannot be removed, reordered, resized, renamed, or moved by this method.
     *
     * @param containerId Swimlane container id.
     * @param swimlane Complete next swimlane model.
     * @returns `true` when the update command succeeds.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const swimlaneId = `swimlane-${Date.now()}`;
     * if (!board.createSwimlane({ id: swimlaneId, left: 80, top: 80, lanes: [{ id: 'todo', title: 'Todo' }] })) {
     *   throw new Error('Cannot create swimlane');
     * }
     * const element = board.getElement(swimlaneId);
     * if (!element || element.type !== univerAPI.Enum.BoardElementType.Container ||
     *   element.containerData.kind !== 'swimlane' || !element.containerData.swimlane ||
     *   !board.setSwimlaneLanes(swimlaneId, { ...element.containerData.swimlane, laneGap: 16 })) {
     *   throw new Error('Cannot update swimlane');
     * }
     * ```
     */
    setSwimlaneLanes(containerId: string, swimlane: IBoardSwimlaneData): boolean;
    /**
     * Resizes one swimlane lane.
     *
     * The method rejects locked lanes and missing swimlane containers. Use meaningful lane ids so agent scripts can modify
     * layouts without relying on generated indexes.
     *
     * @param containerId Swimlane container id.
     * @param laneId Lane id to resize.
     * @param size New lane size in board coordinates.
     * @returns `true` when the resize command succeeds.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const swimlaneId = `swimlane-${Date.now()}`;
     * if (!board.createSwimlane({ id: swimlaneId, left: 80, top: 80, lanes: [{ id: 'todo', title: 'Todo' }] }) ||
     *   !board.setSwimlaneLaneSize(swimlaneId, 'todo', 240)) throw new Error('Cannot resize lane');
     * ```
     */
    setSwimlaneLaneSize(containerId: string, laneId: string, size: number): boolean;
    /**
     * Adds a lane to a swimlane container.
     *
     * The lane is inserted at `options.insertIndex` or appended when omitted. Lane order is normalized after insertion.
     *
     * @param containerId Swimlane container id.
     * @param lane Lane model to add.
     * @param options Optional insert index.
     * @returns `true` when the lane is added.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const swimlaneId = `swimlane-${Date.now()}`;
     * if (!board.createSwimlane({ id: swimlaneId, left: 80, top: 80, lanes: [{ id: 'todo', title: 'Todo' }] }) ||
     *   !board.addSwimlaneLane(swimlaneId, { id: 'done', title: 'Done', size: 200, order: 1 })) {
     *   throw new Error('Cannot add lane');
     * }
     * ```
     */
    addSwimlaneLane(containerId: string, lane: IBoardFacadeSwimlaneLane, options?: IBoardFacadeAddSwimlaneLaneOptions): boolean;
    /**
     * Removes one lane from a swimlane container.
     *
     * Empty unlocked lanes are removed directly. When the lane contains children, choose an explicit `contentPolicy`:
     * promote children to the swimlane pool, move them to another unlocked lane, or delete them.
     *
     * @param containerId Swimlane container id.
     * @param laneId Lane id to remove.
     * @param options Optional content policy.
     * @returns `true` when the lane is removed.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const swimlaneId = `swimlane-${Date.now()}`;
     * if (!board.createSwimlane({
     *   id: swimlaneId,
     *   left: 80,
     *   top: 80,
     *   lanes: [{ id: 'todo', title: 'Todo' }, { id: 'done', title: 'Done' }],
     * }) || !board.removeSwimlaneLane(swimlaneId, 'done')) throw new Error('Cannot remove lane');
     * ```
     */
    removeSwimlaneLane(containerId: string, laneId: string, options?: IBoardFacadeRemoveSwimlaneLaneOptions): boolean;
    /**
     * Moves a swimlane lane to a new index.
     *
     * Locked lanes cannot be reordered. `targetIndex` is clamped into the valid range, making agent-generated values
     * safe when they are slightly outside the current lane count.
     *
     * @param containerId Swimlane container id.
     * @param laneId Lane id to move.
     * @param targetIndex New zero-based index.
     * @returns `true` when the lane order changes.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const swimlaneId = `swimlane-${Date.now()}`;
     * if (!board.createSwimlane({
     *   id: swimlaneId,
     *   left: 80,
     *   top: 80,
     *   lanes: [{ id: 'todo', title: 'Todo' }, { id: 'done', title: 'Done' }],
     * }) || !board.reorderSwimlaneLane(swimlaneId, 'done', 0)) throw new Error('Cannot reorder lane');
     * ```
     */
    reorderSwimlaneLane(containerId: string, laneId: string, targetIndex: number): boolean;
    /**
     * Collapses or expands one swimlane lane.
     *
     * Collapsing is rejected for locked lanes. Use this when an agent wants to reduce visual noise without deleting the
     * lane or its children.
     *
     * @param containerId Swimlane container id.
     * @param laneId Lane id to update.
     * @param collapsed Whether the lane should be collapsed.
     * @returns `true` when the collapsed state changes.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const swimlaneId = `swimlane-${Date.now()}`;
     * if (!board.createSwimlane({ id: swimlaneId, left: 80, top: 80, lanes: [{ id: 'todo', title: 'Todo' }] }) ||
     *   !board.setSwimlaneLaneCollapsed(swimlaneId, 'todo', true)) throw new Error('Cannot collapse lane');
     * ```
     */
    setSwimlaneLaneCollapsed(containerId: string, laneId: string, collapsed: boolean): boolean;
    /**
     * Renames one swimlane lane.
     *
     * Empty names are rejected and whitespace is trimmed. Locked lanes cannot be renamed.
     *
     * @param containerId Swimlane container id.
     * @param laneId Lane id to rename.
     * @param title New lane title.
     * @returns `true` when the lane title changes.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const swimlaneId = `swimlane-${Date.now()}`;
     * if (!board.createSwimlane({ id: swimlaneId, left: 80, top: 80, lanes: [{ id: 'todo', title: 'Todo' }] }) ||
     *   !board.renameSwimlaneLane(swimlaneId, 'todo', 'Ready')) throw new Error('Cannot rename lane');
     * ```
     */
    renameSwimlaneLane(containerId: string, laneId: string, title: string): boolean;
    private _getElementFromPage;
    private _getSwimlaneData;
    private _getContainerElement;
    private _isBlockedSwimlaneContainer;
    private _isBlockedContainer;
    private _isBlockedElement;
    private _hasBlockedElements;
    private _createFacadeConnectorElement;
    private _createConnectorConnectionUpdate;
    private _resolveConnectorEndpoint;
    private _resolveConnectorStartEndpointInput;
    private _resolveConnectorEndEndpointInput;
    private _resolveConnectorLabels;
    private _hasBlockedContainerAncestor;
    private _canAddElementsToKnownParents;
    private _canAddNewElementsToKnownPage;
    private _canFitAddedElementsToKnownTarget;
    private _canReparentElementsInKnownPage;
    private _canUpdateElementInKnownPage;
    private _canUpdateKnownElementByCommandPath;
    private _canDisbandContainerInKnownPage;
    private _canWrapElementsInKnownPage;
    private _canRemoveElementsInKnownPage;
}
export {};
