import type { IBoardConnectorStyle, IBoardRect } from '@univerjs-pro/boards';
import type { IUpdateMindMapNodeOperationParams, MindMapBranchLineType, MindMapLayoutDirection, MindMapNodeSide, MindMapStructureKind } from '@univerjs-pro/boards-mind';
import type { BoardFacadeTextContent } from '@univerjs-pro/boards/facade';
import type { RichTextValue } from '@univerjs/core';
import { FBoard } from '@univerjs-pro/boards/facade';
import { ICommandService } from '@univerjs/core';
/**
 * An id-based mind map node input used when an agent creates a full structured mind map.
 *
 * Optional node and connector ids let callers retain references after insertion. Random ids are generated when omitted.
 *
 */
export interface IBoardMindMapFacadeNodeInput {
    /** Optional generated node id. */
    id?: string;
    /** Optional generated incoming connector id. Ignored for the root node. */
    connectorId?: string;
    /** Plain or rich node text. Use `univerAPI.newRichText()` for styled content. */
    text: BoardFacadeTextContent;
    /** Optional branch side. The layout picks a valid side when omitted. */
    side?: MindMapNodeSide;
    /** Whether this node is initially collapsed. */
    collapsed?: boolean;
    /** Nested child nodes in their intended sibling order. */
    children?: IBoardMindMapFacadeNodeInput[];
}
/**
 * Creation options for a structured Board mind map.
 *
 */
export interface IBoardMindMapFacadeInsertOptions {
    /** Optional generated mind-map container id. */
    id?: string;
    /** Horizontal position of the mind map root in board units. */
    left: number;
    /** Vertical position of the mind map root in board units. */
    top: number;
    /** Structured root node and nested child tree. */
    root: IBoardMindMapFacadeNodeInput;
    /** Optional layout structure. Omit it for the Board default mind map layout. */
    structureKind?: MindMapStructureKind;
    /** Optional branch routing style. Omit it for the layout default. */
    branchLineType?: MindMapBranchLineType;
    /** Optional z-order insertion index. */
    insertIndex?: number;
}
/**
 * Options for adding one structured child node.
 *
 * Supply ids when later reads or edits must address the new node or its incoming connector. Omit `side` unless the
 * requested placement is semantically important; the active mind-map layout chooses
 * the most natural branch direction by default.
 *
 */
export interface IBoardMindMapFacadeAddChildOptions {
    /** Optional generated node id. */
    id?: string;
    /** Optional generated incoming connector id. */
    connectorId?: string;
    /** Plain or rich child text. Use `univerAPI.newRichText()` for styled content. */
    text?: BoardFacadeTextContent;
    /** Optional requested branch side. */
    side?: MindMapNodeSide;
    /** Optional sibling order key for framework integrations. Agents should usually omit it. */
    orderKey?: string;
}
/**
 * Options for adding a sibling next to an existing mind-map node.
 *
 */
export interface IBoardMindMapFacadeAddSiblingOptions extends Omit<IBoardMindMapFacadeAddChildOptions, 'side' | 'orderKey'> {
    /** Whether the new sibling is placed before or after the current node. Defaults to `after`. */
    placement?: 'before' | 'after';
}
/**
 * Layout patch for a structured mind map.
 *
 * Omitted fields preserve their current values. Spacing values use Board units and are validated by the mind-map
 * operation before any mutation is dispatched.
 *
 */
export interface IBoardMindMapFacadeLayoutOptions {
    /** Main growth direction. */
    direction?: MindMapLayoutDirection;
    /** Structure algorithm, such as a plain tree or supported timeline structure. */
    structureKind?: MindMapStructureKind;
    /** Branch routing style. */
    branchLineType?: MindMapBranchLineType;
    /** Horizontal distance between hierarchy levels. */
    horizontalGap?: number;
    /** Distance between siblings in the same branch. */
    siblingGap?: number;
    /** Additional distance between root-side branch groups. */
    branchGap?: number;
}
/**
 * Bounded reflow options for a structured mind map.
 *
 * `bounds` is a placement region, not a parent container: reflow does not reparent the mind map, clip it, or resize
 * the element whose bounds were supplied. For horizontal mind maps, omitting `direction` deterministically alternates
 * root branches between right and left. The operation first tries the requested/current spacing, then optionally
 * retries with the supported minimum spacing. Every successful change is committed as one undo item.
 */
export interface IBoardMindMapFacadeReflowOptions extends IBoardMindMapFacadeLayoutOptions {
    /**
     * Target rectangle in Board coordinates. `left` and `top` may be any finite values; `width` and `height` must be
     * finite and greater than zero. Use `board.getElementBounds(id)` to target an existing shape or visual region.
     */
    bounds: IBoardRect;
    /**
     * Uniform inset applied to all four sides before fit checks and centering. It must be finite, non-negative, and
     * leave a positive inner width and height. Defaults to `0`.
     */
    padding?: number;
    /**
     * Whether a layout that does not initially fit may retry with the supported minimum gaps: horizontal `80`,
     * sibling `16`, and branch `24` Board units. Defaults to `true`; set `false` to preserve requested/current gaps.
     */
    compact?: boolean;
}
/**
 * Detached, machine-readable result returned by `FBoardMindMap.reflow()`.
 *
 * Callers can branch on `success` or `reason` without reading internal mind-map elements. A failed result never leaves
 * a partial layout: validation failures do not start mutations, and execution failures are rolled back.
 */
export interface IBoardMindMapFacadeReflowResult {
    /** Whether the complete reflow mutation batch was committed. */
    success: boolean;
    /** Whether the final readable layout fits inside the target rectangle after padding. Equal to `success` in V1. */
    fits: boolean;
    /**
     * Final centered bounds on success. On fit or execution failure this is the unchanged current map bounds; it may
     * be `null` when options are invalid or the mind map no longer exists.
     */
    bounds: IBoardRect | null;
    /**
     * `1` on success because V1 never shrinks node text. For `bounds-too-small`, this is the uniform scale ratio that
     * would be required to fit and is diagnostic only; no scale is applied.
     */
    scale: number;
    /**
     * Stable failure code: invalid input, missing mind map, insufficient bounds, or a rolled-back mutation failure.
     * Omitted on success.
     */
    reason?: 'bounds-too-small' | 'execution-failed' | 'invalid-options' | 'mind-map-missing';
    /**
     * Smallest readable unscaled layout attempted for `bounds-too-small`. Consumers normally compare its `width` and
     * `height` with the available region. Omitted for every other result.
     */
    requiredBounds?: IBoardRect;
}
/**
 * Options for detaching a node subtree as an independent mind map.
 *
 * The node and every descendant keep their ids. An optional `id` identifies the newly created mind-map container.
 *
 */
export interface IBoardMindMapFacadeDetachOptions {
    /** Optional generated id for the new mind-map container. */
    id?: string;
    /** Optional new root horizontal position in Board coordinates. */
    left?: number;
    /** Optional new root vertical position in Board coordinates. */
    top?: number;
}
/**
 * Visual style patch for a mind-map node.
 *
 * This is a stable facade subset of the underlying node operation. Geometry and structure are deliberately excluded;
 * use layout and reparenting methods for those concerns.
 *
 */
export type IBoardMindMapFacadeNodeStylePatch = Pick<IUpdateMindMapNodeOperationParams, 'shapeType' | 'fill' | 'fillColor' | 'stroke' | 'strokeColor' | 'textStyle'>;
/**
 * Visual style patch for the connector entering a mind-map node.
 *
 * Root nodes have no incoming connector and therefore reject this operation.
 *
 */
export type IBoardMindMapFacadeIncomingConnectorStylePatch = Partial<IBoardConnectorStyle> & {
    /** Semantic line pattern converted to the connector dash representation. */
    lineType?: 'solid' | 'dash' | 'dot';
};
/**
 * Detached layout snapshot for a structured mind map.
 *
 * The fields match `setLayout()`, so agents can read, modify, and write layout without inspecting container metadata.
 *
 */
export interface IBoardMindMapFacadeLayout {
    /** Main growth direction. */
    direction: MindMapLayoutDirection;
    /** Active structure algorithm, when explicitly configured. */
    structureKind?: MindMapStructureKind;
    /** Active managed-branch routing style, when explicitly configured. */
    branchLineType?: MindMapBranchLineType;
    /** Horizontal hierarchy gap in Board units. */
    horizontalGap: number;
    /** Gap between sibling nodes in Board units. */
    siblingGap: number;
    /** Additional gap between root-side branch groups. */
    branchGap: number;
}
/**
 * Detached visual style snapshot for one mind-map node.
 *
 * The result contains stable facade fields only and can be translated into a `setStyle()` patch.
 *
 */
export interface IBoardMindMapFacadeNodeStyle {
    /** Current shape type. */
    shapeType: IUpdateMindMapNodeOperationParams['shapeType'];
    /** Current fill color, when configured. */
    fillColor?: string;
    /** Current outline color, when configured. */
    strokeColor?: string;
    /** Current outline width in Board units, when configured. */
    strokeWidth?: number;
    /** Current editable text style fields. */
    textStyle: NonNullable<IUpdateMindMapNodeOperationParams['textStyle']>;
}
/**
 * Mind map APIs mixed into `FBoard` by importing `@univerjs-pro/boards-mind/facade`.
 *
 * Mind maps use generated ids for the container, nodes, and optional incoming connectors. The first insertion
 * persists every supplied id in one operation, while later node edits use the established mind-map commands and are
 * therefore collaborative and undoable.
 *
 */
export interface IFBoardMindMapMixin {
    /**
     * Inserts a structured mind map.
     *
     * @param options Position, layout, and root-node tree.
     * @returns Mind-map facade, or `null` when insertion fails.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const mindMap = board.insertMindMap({
     *   left: 120,
     *   top: 120,
     *   root: { text: 'Release', children: [{ text: 'QA' }, { text: 'Launch' }] },
     * });
     * if (!mindMap) throw new Error('Cannot insert mind map');
     * ```
     */
    insertMindMap(options: IBoardMindMapFacadeInsertOptions): FBoardMindMap | null;
    /**
     * Gets a structured mind map by its generated container id.
     *
     * @param containerId Mind-map container id.
     * @returns Mind-map facade, or `null` when it is missing.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const inserted = board.insertMindMap({ left: 120, top: 120, root: { text: 'Release' } });
     * if (!inserted) throw new Error('Cannot insert mind map');
     * console.log(board.getMindMap(inserted.getId()));
     * ```
     */
    getMindMap(containerId: string): FBoardMindMap | null;
    /**
     * Gets all structured mind maps in Board z-order.
     *
     * Use this before a bulk audit or migration. The result only contains structured mind-map containers; ordinary
     * containers, shapes, and connectors are excluded.
     *
     * @returns Mind map facades, including hidden or locked maps so agents can inspect complete state.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * console.log(board.getMindMaps().map((mindMap) => mindMap.getId()));
     * ```
     */
    getMindMaps(): FBoardMindMap[];
}
/**
 * Facade for a structured mind map container.
 *
 * Instances come from `getMindMap()`, `insertMindMap()`, or `insertMindMap()`. Do not construct this
 * class directly because it needs the active Board model and command service.
 *
 */
export declare class FBoardMindMap {
    private readonly _board;
    private readonly _pageId;
    private readonly _containerId;
    private readonly _commandService;
    constructor(_board: FBoard, _pageId: string, _containerId: string, _commandService: ICommandService);
    /**
     * Gets the generated container element id.
     *
     * @returns Generated element id for integration event payloads.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const mindMap = board.insertMindMap({ left: 120, top: 120, root: { text: 'Release' } });
     * if (!mindMap) throw new Error('Cannot insert mind map');
     * console.log(mindMap.getId());
     * ```
     */
    getId(): string;
    /**
     * Gets the root node facade.
     *
     * @returns Root node, or `null` when the structured container is no longer valid.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const mindMap = board.insertMindMap({ left: 120, top: 120, root: { text: 'Release' } });
     * if (!mindMap) throw new Error('Cannot insert mind map');
     * console.log(mindMap.getRootNode()?.getText());
     * ```
     */
    getRootNode(): FBoardMindMapNode | null;
    /**
     * Lists nodes in Board z-order.
     *
     * @returns Node facades for this structured mind map.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const mindMap = board.insertMindMap({ left: 120, top: 120, root: { text: 'Release', children: [{ text: 'QA' }] } });
     * if (!mindMap) throw new Error('Cannot insert mind map');
     * console.log(mindMap.getNodes().map((node) => node.getText()));
     * ```
     */
    getNodes(): FBoardMindMapNode[];
    /**
     * Gets a node in this mind map by its generated element id.
     *
     * @param nodeId Mind-map node element id.
     * @returns Node facade, or `null` when it is missing or outside this mind map.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const mindMap = board.insertMindMap({ left: 120, top: 120, root: { text: 'Release' } });
     * const root = mindMap?.getRootNode();
     * if (!mindMap || !root) throw new Error('Cannot insert mind map');
     * console.log(mindMap.getNode(root.getId()));
     * ```
     */
    getNode(nodeId: string): FBoardMindMapNode | null;
    /**
     * Gets every non-root node in deterministic depth-first tree order.
     *
     * @returns Descendant node facades, excluding the root.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const mindMap = board.insertMindMap({
     *   left: 120,
     *   top: 120,
     *   root: { text: 'Release', children: [{ text: 'QA', children: [{ text: 'Automation' }] }] },
     * });
     * if (!mindMap) throw new Error('Cannot insert mind map');
     * console.log(mindMap.getDescendants().map((node) => node.getText()));
     * ```
     */
    getDescendants(): FBoardMindMapNode[];
    /**
     * Gets a detached snapshot of this mind map's active layout.
     *
     * @returns Layout fields accepted by `setLayout()`.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const mindMap = board.insertMindMap({ left: 120, top: 120, root: { text: 'Release' } });
     * if (!mindMap) throw new Error('Cannot insert mind map');
     * console.log(mindMap.getLayout());
     * ```
     */
    getLayout(): IBoardMindMapFacadeLayout | null;
    /**
     * Gets this mind map's resolved Board-coordinate bounds.
     *
     * The returned object is detached and safe to modify. Bounds include the implicit mind-map container padding and are
     * suitable for collision checks, viewport decisions, or as a diagnostic before bounded reflow.
     *
     * @returns Current resolved bounds, or `null` when the mind map no longer exists.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     *
     * const mindMap = board.insertMindMap({ left: 120, top: 120, root: { text: 'Release' } });
     * if (!mindMap) throw new Error('Cannot insert mind map');
     *
     * const bounds = mindMap.getBounds();
     * if (!bounds) throw new Error('Mind map no longer exists');
     * console.log(`Mind map size: ${bounds.width} × ${bounds.height}`);
     * ```
     */
    getBounds(): IBoardRect | null;
    /**
     * Rebalances, compacts when necessary, and centers this mind map inside a target rectangle.
     *
     * Reflow operates on the mind map's managed nodes and connectors; it does not reflow unrelated children of a generic
     * Board container. It also does not reparent the map into the target element. A successful call applies layout
     * metadata, branch sides, node positions, connector routes, and centering atomically as one undo item.
     *
     * Horizontal maps default to balanced right/left root branches when `direction` is omitted. The first attempt uses
     * requested or current gaps. Unless `compact` is `false`, a failed fit retries once with supported minimum gaps. V1
     * deliberately preserves node and text size. If that readable layout is still too large, no data changes and the
     * result reports `bounds-too-small`, `requiredBounds`, and the diagnostic scale ratio that would be needed.
     *
     * @param options Target Board-coordinate bounds, optional inset, and optional layout overrides. Invalid values return
     * `invalid-options`; they do not throw or mutate the board.
     * @returns Detached structured result suitable for headless and agent callers. Check `success` before using `bounds`
     * as the final geometry.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     *
     * // Create a visible region whose geometry will be used as the reflow target.
     * const zone = board.insertShapes([{
     *   id: 'release-zone',
     *   shapeType: univerAPI.Enum.ShapeTypeEnum.RoundRect,
     *   left: 80,
     *   top: 80,
     *   width: 1_000,
     *   height: 600,
     *   text: 'Release planning',
     * }])?.[0];
     * if (!zone) throw new Error('Cannot insert target zone');
     *
     * const mindMap = board.insertMindMap({
     *   id: 'release-map',
     *   left: 180,
     *   top: 180,
     *   root: {
     *     text: 'Release',
     *     children: [
     *       { text: 'Product', children: [{ text: 'Scope' }, { text: 'UX' }] },
     *       { text: 'Engineering', children: [{ text: 'API' }, { text: 'QA' }] },
     *       { text: 'Launch', children: [{ text: 'Docs' }, { text: 'Campaign' }] },
     *     ],
     *   },
     * });
     * if (!mindMap) throw new Error('Cannot insert mind map');
     *
     * const targetBounds = board.getElementBounds(zone.id);
     * if (!targetBounds) throw new Error('Cannot resolve target bounds');
     *
     * const result = mindMap.reflow({ bounds: targetBounds, padding: 24 });
     * if (result.success) {
     *   console.log('Final mind-map bounds', result.bounds);
     * } else if (result.reason === 'bounds-too-small' && result.requiredBounds) {
     *   console.warn('Target is too small', {
     *     requiredWidth: result.requiredBounds.width,
     *     requiredHeight: result.requiredBounds.height,
     *     diagnosticScale: result.scale,
     *   });
     * } else {
     *   throw new Error(`Cannot reflow mind map: ${result.reason ?? 'unknown error'}`);
     * }
     * ```
     */
    reflow(options: IBoardMindMapFacadeReflowOptions): IBoardMindMapFacadeReflowResult;
    /**
     * Updates this mind map's layout configuration and recomputes all managed node and branch geometry.
     *
     * @param options Layout fields to change. Omitted fields keep their current value.
     * @returns `true` when the operation succeeds.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const mindMap = board.insertMindMap({ left: 120, top: 120, root: { text: 'Release', children: [{ text: 'QA' }] } });
     * if (!mindMap || !mindMap.setLayout({ direction: 'right', horizontalGap: 180 })) {
     *   throw new Error('Cannot update mind-map layout');
     * }
     * ```
     */
    setLayout(options: IBoardMindMapFacadeLayoutOptions): boolean;
    /**
     * Changes only the branch routing style and recomputes managed connectors.
     *
     * @param branchLineType New branch routing style.
     * @returns `true` when the operation succeeds.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const mindMap = board.insertMindMap({ left: 120, top: 120, root: { text: 'Release', children: [{ text: 'QA' }] } });
     * if (!mindMap || !mindMap.setBranchLineType(univerAPI.Enum.BoardMindMapBranchLineType.Curve)) {
     *   throw new Error('Cannot update branch style');
     * }
     * ```
     */
    setBranchLineType(branchLineType: MindMapBranchLineType): boolean;
    /**
     * Removes this complete structured mind map through the root-node delete operation.
     *
     * Nodes, managed connectors, and the mind-map container are removed together in one collaborative undo item.
     *
     * @returns `true` when the mind map exists and removal succeeds.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const mindMap = board.insertMindMap({ left: 120, top: 120, root: { text: 'Release' } });
     * if (!mindMap || !mindMap.remove()) throw new Error('Cannot remove mind map');
     * ```
     */
    remove(): boolean;
    private _createNode;
    private _isNodeInScope;
}
/**
 * Facade for one structured mind map node.
 *
 * Node facades are obtained from a map's root, node lookup, or node list. They expose semantic text and structure
 * operations without requiring an agent to retain generated element ids.
 *
 */
export declare class FBoardMindMapNode {
    private readonly _mindMap;
    private readonly _board;
    private readonly _pageId;
    private readonly _nodeId;
    private readonly _commandService;
    constructor(_mindMap: FBoardMindMap, _board: FBoard, _pageId: string, _nodeId: string, _commandService: ICommandService);
    /**
     * Gets the generated node element id.
     *
     * Prefer `getId()` for agent references; this id is intended for event payloads and low-level integrations.
     *
     * @returns Generated node element id.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const root = board.insertMindMap({ left: 120, top: 120, root: { text: 'Release' } })?.getRootNode();
     * if (!root) throw new Error('Cannot insert mind map');
     * console.log(root.getId());
     * ```
     */
    getId(): string;
    /**
     * Gets plain node text.
     *
     * @returns Current node text, or an empty string when the node is no longer present.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const root = board.insertMindMap({ left: 120, top: 120, root: { text: 'Release' } })?.getRootNode();
     * if (!root) throw new Error('Cannot insert mind map');
     * console.log(root.getText());
     * ```
     */
    getText(): string;
    /**
     * Gets node content as a Univer rich-text value.
     *
     * The returned value is detached from the Board snapshot and can be copied or transformed safely before calling
     * `setText()`. Plain nodes also have standard document data, so this method normally returns a value for every valid
     * node.
     *
     * @returns Rich-text value for the node, or `null` when the node or its document data is unavailable.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const root = board.insertMindMap({ left: 120, top: 120, root: { text: 'Release' } })?.getRootNode();
     * if (!root) throw new Error('Cannot insert mind map');
     * console.log(root.getRichText()?.getData());
     * ```
     */
    getRichText(): RichTextValue | null;
    /**
     * Gets this node's parent in the same mind map.
     *
     * @returns Parent node facade, or `null` for the root or a removed node.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const child = board.insertMindMap({ left: 120, top: 120, root: { text: 'Release', children: [{ text: 'QA' }] } })
     *   ?.getRootNode()?.getChildren()[0];
     * if (!child) throw new Error('Cannot insert child');
     * console.log(child.getParent()?.getText());
     * ```
     */
    getParent(): FBoardMindMapNode | null;
    /**
     * Gets direct child nodes in semantic sibling order.
     *
     * @returns Direct child facades sorted by their mind-map order keys.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const root = board.insertMindMap({ left: 120, top: 120, root: { text: 'Release', children: [{ text: 'QA' }, { text: 'Launch' }] } })
     *   ?.getRootNode();
     * if (!root) throw new Error('Cannot insert mind map');
     * console.log(root.getChildren().map((node) => node.getText()));
     * ```
     */
    getChildren(): FBoardMindMapNode[];
    /**
     * Gets all descendants of this node in deterministic depth-first tree order.
     *
     * @returns Descendant node facades, excluding this node.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const root = board.insertMindMap({
     *   left: 120,
     *   top: 120,
     *   root: { text: 'Release', children: [{ text: 'QA', children: [{ text: 'Automation' }] }] },
     * })?.getRootNode();
     * if (!root) throw new Error('Cannot insert mind map');
     * console.log(root.getDescendants().map((node) => node.getText()));
     * ```
     */
    getDescendants(): FBoardMindMapNode[];
    /**
     * Gets a detached snapshot of this node's editable visual style.
     *
     * @returns Stable shape and text style fields, or `null` when the node has been removed.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const root = board.insertMindMap({ left: 120, top: 120, root: { text: 'Release' } })?.getRootNode();
     * if (!root) throw new Error('Cannot insert mind map');
     * console.log(root.getStyle());
     * ```
     */
    getStyle(): IBoardMindMapFacadeNodeStyle | null;
    /**
     * Gets the style of the managed connector entering this node.
     *
     * @returns A detached connector style, or `null` for the root, a removed node, or a missing managed connector.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const child = board.insertMindMap({ left: 120, top: 120, root: { text: 'Release', children: [{ text: 'QA' }] } })
     *   ?.getRootNode()?.getChildren()[0];
     * if (!child) throw new Error('Cannot insert child');
     * console.log(child.getIncomingConnectorStyle());
     * ```
     */
    getIncomingConnectorStyle(): IBoardMindMapFacadeIncomingConnectorStylePatch | null;
    /**
     * Updates node text and lets the structured mind map operation recompute node size and layout.
     *
     * @param text New plain or rich text. Use `univerAPI.newRichText()` for styled content.
     * @returns `true` when the operation succeeds or the text is already current; `false` when the node is missing.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const root = board.insertMindMap({ left: 120, top: 120, root: { text: 'Release' } })?.getRootNode();
     * if (!root || !root.setText('Release plan')) throw new Error('Cannot update node text');
     * ```
     */
    setText(text: BoardFacadeTextContent): boolean;
    /**
     * Adds a child and persists its node and connector ids with the initial structural mutation.
     *
     * @param options Child text, generated ids, and optional side.
     * @returns New child facade, or `null` when the operation fails.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const root = board.insertMindMap({ left: 120, top: 120, root: { text: 'Release' } })?.getRootNode();
     * const child = root?.addChild({ text: 'QA', side: univerAPI.Enum.BoardMindMapNodeSide.Right });
     * if (!child) throw new Error('Cannot add child');
     * ```
     */
    addChild(options: IBoardMindMapFacadeAddChildOptions): FBoardMindMapNode | null;
    /**
     * Adds a sibling beside this node and persists generated ids for both the node and its incoming connector.
     *
     * Root nodes cannot have siblings. The new node inherits this node's branch side and is inserted after it unless
     * `placement: 'before'` is requested.
     *
     * @param options Stable identity, text, connector id, and relative placement.
     * @returns The new sibling facade, or `null` when this is a root node, a id already exists, or the operation fails.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const child = board.insertMindMap({ left: 120, top: 120, root: { text: 'Release', children: [{ text: 'QA' }] } })
     *   ?.getRootNode()?.getChildren()[0];
     * const sibling = child?.addSibling({ text: 'Launch', placement: 'after' });
     * if (!sibling) throw new Error('Cannot add sibling');
     * ```
     */
    addSibling(options: IBoardMindMapFacadeAddSiblingOptions): FBoardMindMapNode | null;
    /**
     * Removes this node and its entire descendant subtree.
     *
     * Removing the root also removes the structured mind-map container. The operation is collaborative and undoable.
     *
     * @returns `true` when the node exists and removal succeeds.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const child = board.insertMindMap({ left: 120, top: 120, root: { text: 'Release', children: [{ text: 'QA' }] } })
     *   ?.getRootNode()?.getChildren()[0];
     * if (!child || !child.remove()) throw new Error('Cannot remove node');
     * ```
     */
    remove(): boolean;
    /**
     * Moves this node and its subtree under another node in the same mind map.
     *
     * The mind-map operation prevents cycles and recalculates layout and managed branch geometry.
     *
     * @param parentId generated id of the new parent node.
     * @returns `true` when both nodes exist in this mind map and reparenting succeeds.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const root = board.insertMindMap({ left: 120, top: 120, root: { text: 'Release', children: [{ text: 'QA' }, { text: 'Launch' }] } })
     *   ?.getRootNode();
     * const [qa, launch] = root?.getChildren() ?? [];
     * if (!qa || !launch || !qa.reparentTo(launch.getId())) throw new Error('Cannot reparent node');
     * ```
     */
    reparentTo(parentId: string): boolean;
    /**
     * Promotes this node and its subtree one hierarchy level toward the root.
     *
     * The operation is available only when both a parent and grandparent exist. It preserves generated ids and recomputes
     * the affected mind-map layout and managed branch geometry.
     *
     * @returns `true` when the node can be promoted and the operation succeeds.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const root = board.insertMindMap({
     *   left: 120,
     *   top: 120,
     *   root: { text: 'Release', children: [{ text: 'QA', children: [{ text: 'Automation' }] }] },
     * })?.getRootNode();
     * const nested = root?.getChildren()[0]?.getChildren()[0];
     * if (!nested || !nested.promote()) throw new Error('Cannot promote node');
     * ```
     */
    promote(): boolean;
    /**
     * Detaches this node and its descendants as a new independently addressable mind map.
     *
     * The subtree keeps all node ids. The new container id is written by the detach operation itself, so collaboration,
     * undo/redo, and immediate id lookup observe one atomic structural change.
     *
     * @param options generated id and optional position for the new mind map.
     * @returns `true` when this is a non-root node, the new id is unused, and detaching succeeds.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const child = board.insertMindMap({ left: 120, top: 120, root: { text: 'Release', children: [{ text: 'QA' }] } })
     *   ?.getRootNode()?.getChildren()[0];
     * if (!child || !child.detachAsMindMap({ left: 520, top: 120 })) throw new Error('Cannot detach subtree');
     * ```
     */
    detachAsMindMap(options: IBoardMindMapFacadeDetachOptions): boolean;
    /**
     * Moves this node before a sibling addressed by generated id.
     *
     * @param referenceId Generated id of an existing sibling.
     * @returns `true` when both nodes share a parent and the reorder succeeds.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const root = board.insertMindMap({ left: 120, top: 120, root: { text: 'Release', children: [{ text: 'QA' }, { text: 'Launch' }] } })
     *   ?.getRootNode();
     * const [qa, launch] = root?.getChildren() ?? [];
     * if (!qa || !launch || !launch.moveBefore(qa.getId())) throw new Error('Cannot reorder node');
     * ```
     */
    moveBefore(referenceId: string): boolean;
    /**
     * Moves this node after a sibling addressed by generated id.
     *
     * @param referenceId Generated id of an existing sibling.
     * @returns `true` when both nodes share a parent and the reorder succeeds.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const root = board.insertMindMap({ left: 120, top: 120, root: { text: 'Release', children: [{ text: 'QA' }, { text: 'Launch' }] } })
     *   ?.getRootNode();
     * const [qa, launch] = root?.getChildren() ?? [];
     * if (!qa || !launch || !qa.moveAfter(launch.getId())) throw new Error('Cannot reorder node');
     * ```
     */
    moveAfter(referenceId: string): boolean;
    /**
     * Patches this node's shape and text style while preserving its structure and content.
     *
     * Text-affecting style changes recompute intrinsic node size and run mind-map layout once inside the operation.
     *
     * @param patch Node visual style fields to change.
     * @returns `true` when the node exists, the patch is non-empty, and the operation succeeds.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const root = board.insertMindMap({ left: 120, top: 120, root: { text: 'Release' } })?.getRootNode();
     * if (!root || !root.setStyle({ fillColor: '#e0e7ff', strokeColor: '#4f46e5' })) {
     *   throw new Error('Cannot style node');
     * }
     * ```
     */
    setStyle(patch: IBoardMindMapFacadeNodeStylePatch): boolean;
    /**
     * Patches the managed connector entering this node.
     *
     * @param patch Connector color, width, markers, dash semantics, and other supported style fields.
     * @returns `true` when this is a non-root node and the operation succeeds.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const child = board.insertMindMap({ left: 120, top: 120, root: { text: 'Release', children: [{ text: 'QA' }] } })
     *   ?.getRootNode()?.getChildren()[0];
     * if (!child || !child.setIncomingConnectorStyle({ stroke: '#4f46e5', strokeWidth: 2, lineType: 'dash' })) {
     *   throw new Error('Cannot style branch');
     * }
     * ```
     */
    setIncomingConnectorStyle(patch: IBoardMindMapFacadeIncomingConnectorStylePatch): boolean;
    /**
     * Gets whether the node's descendants are collapsed.
     *
     * @returns `true` when descendants are hidden, `false` when expanded, or `null` when the node no longer exists.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const root = board.insertMindMap({ left: 120, top: 120, root: { text: 'Release', children: [{ text: 'QA' }] } })
     *   ?.getRootNode();
     * if (!root) throw new Error('Cannot insert mind map');
     * console.log(root.isCollapsed());
     * ```
     */
    isCollapsed(): boolean | null;
    /**
     * Collapses or expands this node's descendants.
     *
     * @param collapsed `true` to collapse descendants; `false` to expand them.
     * @returns `true` when the operation succeeds or the node is already in the requested state; `false` when missing.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     * const root = board.insertMindMap({ left: 120, top: 120, root: { text: 'Release', children: [{ text: 'QA' }] } })
     *   ?.getRootNode();
     * if (!root || !root.setCollapsed(true)) throw new Error('Cannot collapse node');
     * ```
     */
    setCollapsed(collapsed: boolean): boolean;
    private _getMeta;
    private _moveRelativeTo;
}
declare module '@univerjs-pro/boards/facade' {
    interface FBoard extends IFBoardMindMapMixin {
    }
}
