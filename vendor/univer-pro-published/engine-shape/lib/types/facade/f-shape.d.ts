import type { IBasicShapeData, IInsertSmartArtNodeOptions, ImageSourceTypeEnum, IMoveSmartArtNodeOptions, IPresetShapeConfig, IShapeAdjustItemResolved, IShapeData, IShapeHostAdapter, IShapeLineStyle, IShapePath, IShapeRef, IShapeRelationItem, IShapeSnapshot, IShapeTransform, IShapeUpdateInput, ISmartArtData, ISmartArtDataNode, ISmartArtPresentationShape, ShapeGradientTypeEnum, ShapeHostType, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeTypeEnum, SmartArtCategoryEnum, SmartArtDirectionEnum } from '@univerjs-pro/engine-shape';
import type { Injector } from '@univerjs/core';
import { IShapeHostAdapterRegistry, ShapeLineTypeEnum } from '@univerjs-pro/engine-shape';
import { ICommandService } from '@univerjs/core';
import { FBase } from '@univerjs/core/facade';
import { FShapeText } from './f-shape-text';
type ShapeFill = NonNullable<IBasicShapeData['fill']>;
export interface IShapeGradientStop {
    /** Stop position in the normalized gradient range. */
    position: number;
    /** Stop color. */
    color: string;
    /** Optional stop opacity. */
    opacity?: number;
}
/** A connector attachment site in the Shape's local coordinate system. */
export interface IShapeConnectionSite {
    /** Horizontal position relative to the Shape's top-left corner. */
    x: number;
    /** Vertical position relative to the Shape's top-left corner. */
    y: number;
    /** Stable site index used by Connector endpoint bindings. */
    index: number;
    /** Outward site angle in OOXML angle units (1/60000 degree). */
    ang: number;
}
/**
 * A single SVG path accepted by `FShape.setCustomGeometryFromSvgPath()`.
 *
 * `pathData` is the value of an SVG `<path d="...">` attribute, not complete SVG markup or a data
 * URL. Fill and stroke colors remain Shape styles; `fill` and `stroke` only control whether this
 * geometry path participates in filling and stroking.
 */
export interface IShapeSvgPathGeometryOptions {
    /** SVG `<path>` `d` attribute value. */
    pathData: string;
    /** Optional virtual SVG coordinate-space width. The path scales to the Shape width when set. */
    width?: number;
    /** Optional virtual SVG coordinate-space height. The path scales to the Shape height when set. */
    height?: number;
    /** Optional geometry fill mode. Use `'none'` for an open or stroke-only path. */
    fill?: IShapePath['fill'];
    /** Whether the Shape stroke is applied to this geometry path. */
    stroke?: boolean;
}
/** Optional image-fill properties accepted by `FShape.setImageFill()`. */
export type IShapeImageFillOptions = Pick<ShapeFill, 'imageFillMode' | 'imageOpacity' | 'imageRotateWithShape' | 'stretchFillRect' | 'srcRect' | 'imageTile'>;
/**
 * A live, host-neutral facade handle for a Shape.
 *
 * @example Sheet
 * ```ts
 * const fWorkbook = univerAPI.getActiveWorkbook();
 * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
 * const fShape = fWorksheet.insertShape({
 *   shapeType: univerAPI.Enum.ShapeTypeEnum.Rect,
 * });
 * ```
 *
 * @example Doc
 * ```ts
 * const fDocument = univerAPI.getActiveDocument();
 * const paragraph = fDocument.getParagraphs()[0];
 * const fShape = fDocument.insertShape({
 *   shapeType: univerAPI.Enum.ShapeTypeEnum.Rect,
 *   placement: {
 *     wrappingStyle: univerAPI.Enum.TextWrappingStyle.INLINE,
 *     anchor: {
 *       paragraphId: paragraph.getId(),
 *       segmentId: paragraph.getSegmentId(),
 *     },
 *   },
 * });
 * ```
 *
 * @example Slide
 * ```ts
 * const fPresentation = univerAPI.getActivePresentation();
 * const fSlide = fPresentation.getSlideByIndex(0);
 * const fShape = fSlide.insertShape({
 *   shapeType: univerAPI.Enum.ShapeTypeEnum.Rect,
 * });
 * ```
 *
 * @example Board
 * ```ts
 * const fBoard = univerAPI.getActiveBoard();
 * const fShape = fBoard.insertShape({
 *   shapeType: univerAPI.Enum.ShapeTypeEnum.Rect,
 * });
 * ```
 *
 * @example
 * ```ts
 * const snapshot = fShape.getSnapshot();
 * console.log(snapshot);
 *
 * fShape
 *   .setShapeType(univerAPI.Enum.ShapeTypeEnum.Ellipse)
 *   .setSolidFill('#FF0000', 0.5)
 *   .setSize(200, 100)
 *   .setRotation(45)
 *   .setAbsolutePosition(100, 100)
 *   .setStroke({
 *     color: '#000000',
 *     width: 2,
 *     lineStrokeType: univerAPI.Enum.ShapeLineTypeEnum.SolidLine,
 *     dashType: univerAPI.Enum.ShapeLineDashEnum.Solid,
 *     capType: univerAPI.Enum.ShapeLineCapEnum.Round,
 *     lineJoinType: univerAPI.Enum.ShapeLineJoinEnum.Round,
 *   });
 * ```
 */
export declare class FShape extends FBase {
    protected readonly _shapeRef: IShapeRef;
    protected readonly _injector: Injector;
    protected readonly _shapeHostAdapterRegistry: IShapeHostAdapterRegistry;
    protected readonly _commandService: Pick<ICommandService, 'syncExecuteCommand'>;
    constructor(_shapeRef: IShapeRef, _injector: Injector, _shapeHostAdapterRegistry: IShapeHostAdapterRegistry, _commandService: Pick<ICommandService, 'syncExecuteCommand'>);
    /**
     * Whether this Shape is a Connector preset type.
     * @returns {boolean} Whether this Shape is a Connector preset type.
     * @example
     * ```ts
     * console.log(fShape.isConnectorShape());
     * ```
     */
    isConnectorShape(): boolean;
    /**
     * Returns the stable Shape identifier.
     * @returns {string} The stable Shape identifier.
     * @example
     * ```ts
     * console.log(fShape.getId());
     * ```
     */
    getId(): string;
    /**
     * Returns the user-facing Shape name.
     * @returns {string | undefined} The Shape name, or `undefined` when none is configured.
     * @example
     * ```ts
     * console.log(fShape.getName());
     * ```
     */
    getName(): string | undefined;
    /**
     * Sets or clears the user-facing Shape name.
     * @param {string | undefined} name The Shape name, or `undefined` to clear it.
     * @returns {FShape} This Shape facade for chaining.
     * @example
     * ```ts
     * fShape.setName('Revenue forecast');
     * ```
     */
    setName(name?: string): this;
    /**
     * Returns the user-facing Shape description.
     * @returns {string | undefined} The Shape description, or `undefined` when none is configured.
     * @example
     * ```ts
     * console.log(fShape.getDescription());
     * ```
     */
    getDescription(): string | undefined;
    /**
     * Sets or clears the user-facing Shape description.
     * @param {string | undefined} description The Shape description, or `undefined` to clear it.
     * @returns {FShape} This Shape facade for chaining.
     * @example
     * ```ts
     * fShape.setDescription('Shows the quarterly revenue forecast.');
     * ```
     */
    setDescription(description?: string): this;
    /**
     * Returns the Univer host type that owns this Shape.
     * @returns {ShapeHostType} The Univer host type that owns this Shape.
     * @example
     * ```ts
     * console.log(fShape.getHostType());
     * ```
     */
    getHostType(): ShapeHostType;
    /**
     * Returns the current Shape preset type, or `null` when the Shape is unavailable.
     * @returns {ShapeTypeEnum | null} The current Shape preset type, or `null` when the Shape is unavailable.
     * @example
     * ```ts
     * console.log(fShape.getShapeType());
     * ```
     */
    getShapeType(): ShapeTypeEnum | null;
    /**
     * Returns a detached copy of the current Shape data.
     * @returns {IShapeData | null} A detached copy of the current Shape data, or `null` when the Shape is unavailable.
     * @example
     * ```ts
     * const shapeData = fShape.getShapeData();
     * console.log(shapeData?.fill, shapeData?.stroke);
     * ```
     */
    getShapeData(): IShapeData | null;
    /**
     * Returns whether this Shape is an editable SmartArt composite.
     * @returns {boolean} Whether this Shape is SmartArt.
     * @example Slide — executable with `univer execute`
     * ```ts
     * const presentation = univerAPI.getActivePresentation();
     * const slide = presentation?.getActiveSlide();
     * if (!slide) throw new Error('No active slide');
     * const smartArt = slide.insertSmartArt('urn:microsoft.com/office/officeart/2005/8/layout/default');
     * if (!smartArt) throw new Error('Cannot insert SmartArt');
     * console.log(smartArt.isSmartArt()); // true
     * ```
     */
    isSmartArt(): boolean;
    /**
     * Returns a detached copy of the normalized SmartArt content tree, layout, style, and presentation Shapes.
     * Mutating the returned value does not update the slide; call `setSmartArtData` to replace the model.
     * @returns {ISmartArtData | null} The detached SmartArt model, or `null` when this Shape is not SmartArt.
     * @example
     * ```ts
     * const data = fSmartArt.getSmartArtData();
     * console.log(data?.layout.id, data?.rootNodeIds);
     * ```
     */
    getSmartArtData(): ISmartArtData | null;
    /**
     * Replaces the complete normalized SmartArt model through the host Shape command.
     * Use the node-specific methods when only one logical node needs to change.
     * @param {ISmartArtData} data The complete normalized SmartArt model.
     * @returns {FShape} This SmartArt facade for chaining.
     * @example
     * ```ts
     * const data = fSmartArt.getSmartArtData();
     * if (!data) throw new Error('Shape is not SmartArt');
     * fSmartArt.setSmartArtData({
     *   ...data,
     *   direction: univerAPI.Enum.SmartArtDirectionEnum.RightToLeft,
     * });
     * ```
     */
    setSmartArtData(data: ISmartArtData): this;
    /**
     * Inserts one logical Text Pane node relative to an existing node.
     * The new node must have a unique id and an empty `childIds` array.
     * @param {IInsertSmartArtNodeOptions} options The new node, target node, and insertion position.
     * @returns {FShape} This SmartArt facade for chaining.
     * @example
     * ```ts
     * const data = fSmartArt.getSmartArtData();
     * const targetNodeId = data?.rootNodeIds[0];
     * if (!targetNodeId) throw new Error('SmartArt has no root node');
     * fSmartArt.insertSmartArtNode({
     *   targetNodeId,
     *   position: univerAPI.Enum.SmartArtInsertPositionEnum.After,
     *   node: {
     *     id: crypto.randomUUID(),
     *     childIds: [],
     *     role: univerAPI.Enum.SmartArtNodeRoleEnum.Content,
     *     text: { isRichText: false, isHorizontal: true, text: 'New item' },
     *   },
     * });
     * ```
     */
    insertSmartArtNode(options: IInsertSmartArtNodeOptions): this;
    /**
     * Deletes one logical Text Pane node and its entire descendant subtree.
     * @param {string} nodeId The stable id of the node to delete.
     * @returns {FShape} This SmartArt facade for chaining.
     * @example
     * ```ts
     * const data = fSmartArt.getSmartArtData();
     * const nodeId = data?.rootNodeIds.at(-1);
     * if (nodeId) fSmartArt.deleteSmartArtNode(nodeId);
     * ```
     */
    deleteSmartArtNode(nodeId: string): this;
    /**
     * Moves one logical node relative to another node without changing its stable identity or descendants.
     * @param {IMoveSmartArtNodeOptions} options The node to move, target node, and relative position.
     * @returns {FShape} This SmartArt facade for chaining.
     * @example
     * ```ts
     * const data = fSmartArt.getSmartArtData();
     * const [targetNodeId, nodeId] = data?.rootNodeIds ?? [];
     * if (nodeId && targetNodeId) {
     *   fSmartArt.moveSmartArtNode({
     *     nodeId,
     *     targetNodeId,
     *     position: univerAPI.Enum.SmartArtInsertPositionEnum.Before,
     *   });
     * }
     * ```
     */
    moveSmartArtNode(options: IMoveSmartArtNodeOptions): this;
    /**
     * Promotes one logical node by one Text Pane hierarchy level when the current layout permits it.
     * @param {string} nodeId The stable id of the node to promote.
     * @returns {FShape} This SmartArt facade for chaining.
     * @example
     * ```ts
     * const data = fSmartArt.getSmartArtData();
     * const childNodeId = Object.values(data?.nodes ?? {}).find((node) => node.parentId)?.id;
     * if (childNodeId) fSmartArt.promoteSmartArtNode(childNodeId);
     * ```
     */
    promoteSmartArtNode(nodeId: string): this;
    /**
     * Demotes one logical node below its preceding sibling when the current layout permits it.
     * @param {string} nodeId The stable id of the node to demote.
     * @returns {FShape} This SmartArt facade for chaining.
     * @example
     * ```ts
     * const data = fSmartArt.getSmartArtData();
     * const nodeId = data?.rootNodeIds[1];
     * if (nodeId) fSmartArt.demoteSmartArtNode(nodeId);
     * ```
     */
    demoteSmartArtNode(nodeId: string): this;
    /**
     * Updates Text Pane text, assistant/content role, or automatic/manual font-size behavior for one logical node.
     * @param {string} nodeId The stable id of the node to update.
     * @param {Partial<Pick<ISmartArtDataNode, 'fontSizeMode' | 'role' | 'text'>>} update The node fields to update.
     * @returns {FShape} This SmartArt facade for chaining.
     * @example
     * ```ts
     * const data = fSmartArt.getSmartArtData();
     * const nodeId = data?.rootNodeIds[0];
     * const node = nodeId ? data?.nodes[nodeId] : undefined;
     * if (nodeId && node) {
     *   fSmartArt.updateSmartArtNode(nodeId, {
     *     text: { ...node.text, text: 'Updated item' },
     *     fontSizeMode: univerAPI.Enum.SmartArtTextFontSizeModeEnum.Auto,
     *   });
     * }
     * ```
     */
    updateSmartArtNode(nodeId: string, update: Partial<Pick<ISmartArtDataNode, 'fontSizeMode' | 'role' | 'text'>>): this;
    /**
     * Sets the SmartArt reading and layout direction.
     * @param {SmartArtDirectionEnum} direction The new left-to-right or right-to-left direction.
     * @returns {FShape} This SmartArt facade for chaining.
     * @example
     * ```ts
     * fSmartArt.setSmartArtDirection(univerAPI.Enum.SmartArtDirectionEnum.RightToLeft);
     * ```
     */
    setSmartArtDirection(direction: SmartArtDirectionEnum): this;
    /**
     * Switches the SmartArt layout while retaining the logical content tree.
     * The optional category keeps the gallery classification when a custom layout id does not encode it.
     * @param {string} id The built-in or imported SmartArt layout id.
     * @param {SmartArtCategoryEnum} [category] The optional gallery category for the layout.
     * @returns {FShape} This SmartArt facade for chaining.
     * @example
     * ```ts
     * fSmartArt.setSmartArtLayout(
     *   'urn:microsoft.com/office/officeart/2005/8/layout/lProcess2',
     *   univerAPI.Enum.SmartArtCategoryEnum.Process
     * );
     * ```
     */
    setSmartArtLayout(id: string, category?: SmartArtCategoryEnum): this;
    /**
     * Updates the geometry or ordinary Shape styling of one independently editable presentation Shape.
     * This does not change the logical Text Pane tree.
     * @param {string} presentationShapeId The stable presentation Shape id.
     * @param {Partial<Pick<ISmartArtPresentationShape, 'shapeData' | 'transform'>>} update The geometry or Shape data update.
     * @returns {FShape} This SmartArt facade for chaining.
     * @example
     * ```ts
     * const data = fSmartArt.getSmartArtData();
     * const presentationShape = data?.presentationShapes[data.presentationShapeOrder[0]];
     * if (presentationShape) {
     *   fSmartArt.updateSmartArtPresentationShape(presentationShape.id, {
     *     transform: { ...presentationShape.transform, left: presentationShape.transform.left + 12 },
     *   });
     * }
     * ```
     */
    updateSmartArtPresentationShape(presentationShapeId: string, update: Partial<Pick<ISmartArtPresentationShape, 'shapeData' | 'transform'>>): this;
    /**
     * Converts this SmartArt composite into independently editable host-native Shapes in one undoable command.
     * The returned facades point to the converted Shapes; the original SmartArt Shape no longer exists after success.
     * @returns {FShape[]} The converted ordinary Shape facades, or an empty array when conversion fails.
     * @example
     * ```ts
     * const convertedShapes = fSmartArt.convertSmartArtToShapes();
     * convertedShapes.forEach((shape) => shape.setName(`Converted ${shape.getId()}`));
     * ```
     */
    convertSmartArtToShapes(): FShape[];
    /**
     * Returns a detached snapshot of the Shape and its host identity.
     * @returns {IShapeSnapshot | null} A detached snapshot of the Shape and its host identity, or `null` when the Shape is unavailable.
     * @example
     * ```ts
     * console.log(fShape.getSnapshot());
     * ```
     */
    getSnapshot(): IShapeSnapshot | null;
    /**
     * Returns a detached copy of the current Shape transform.
     * @returns {IShapeTransform | null} A detached copy of the current Shape transform, or `null` when the Shape is unavailable.
     * @example
     * ```ts
     * const transform = fShape.getTransform();
     * console.log(transform?.left, transform?.top, transform?.width, transform?.height);
     * ```
     */
    getTransform(): IShapeTransform | null;
    /**
     * Returns whether the Shape is visible in its host.
     * @returns {boolean} Whether the Shape is visible.
     * @example
     * ```ts
     * console.log(fShape.isVisible());
     * ```
     */
    isVisible(): boolean;
    /**
     * Sets whether the Shape is visible in its host.
     * @param {boolean} visible Whether the Shape should be visible.
     * @returns {FShape} This Shape facade for chaining.
     * @example
     * ```ts
     * fShape.setVisible(false);
     * ```
     */
    setVisible(visible: boolean): this;
    /**
     * Returns whether the Shape can be selected from the host canvas.
     * @returns {boolean} Whether the Shape can be selected.
     * @example
     * ```ts
     * console.log(fShape.isSelectable());
     * ```
     */
    isSelectable(): boolean;
    /**
     * Sets whether the Shape can be selected from the host canvas.
     * This does not change any host-specific hard-lock state.
     * @param {boolean} selectable Whether the Shape should be selectable.
     * @returns {FShape} This Shape facade for chaining.
     * @example
     * ```ts
     * fShape.setSelectable(false);
     * ```
     */
    setSelectable(selectable: boolean): this;
    /**
     * Returns the text facade associated with this Shape.
     * @returns {FShapeText} The text facade associated with this Shape.
     * @example
     * ```ts
     * fShape.getText().setText('Quarterly review');
     * ```
     */
    getText(): FShapeText;
    /**
     * Returns whether this Shape uses custom geometry.
     * @returns {boolean} Whether this Shape uses custom geometry.
     * @example
     * ```ts
     * console.log(fShape.isCustomShape());
     * ```
     */
    isCustomShape(): boolean;
    /**
     * Returns a detached copy of the custom geometry, or `null` when none is configured.
     * @returns {IPresetShapeConfig | null} A detached copy of the custom geometry, or `null` when none is configured.
     * @example
     * ```ts
     * const geometry = fShape.getCustomGeometry();
     * console.log(geometry?.pathLst);
     * ```
     */
    getCustomGeometry(): IPresetShapeConfig | null;
    /**
     * Changes the Shape preset type while preserving the remaining Shape data.
     * @param {ShapeTypeEnum} shapeType The new Shape preset type.
     * @returns {FShape} This Shape facade for chaining.
     * @example
     * ```ts
     * fShape.setShapeType(univerAPI.Enum.ShapeTypeEnum.Ellipse);
     * ```
     */
    setShapeType(shapeType: ShapeTypeEnum): this;
    /**
     * Replaces the complete Shape data with a detached copy of the supplied value.
     * @param {IShapeData} shapeData The new Shape data.
     * @returns {FShape} This Shape facade for chaining.
     * @example
     * ```ts
     * fShape.setShapeData({
     *   shapeType: univerAPI.Enum.ShapeTypeEnum.Rect,
     *   fill: { fillType: univerAPI.Enum.ShapeFillEnum.SolidFill, color: '#4f90ff' },
     * });
     * ```
     */
    setShapeData(shapeData: IShapeData): this;
    /**
     * Applies a partial Shape transform update.
     *
     * In Docs, width, height, and rotation apply to both inline and floating Shapes. Left and top affect only
     * non-inline Shapes because inline placement is controlled by the document text range. Docs also does not
     * currently support changing flipX or flipY.
     *
     * @param {Partial<IShapeTransform>} transform A partial Shape transform update.
     * @returns {FShape} This Shape facade for chaining.
     * @example
     * ```ts
     * fShape.setTransform({ left: 120, top: 80, rotation: 15 });
     * ```
     */
    setTransform(transform: Partial<IShapeTransform>): this;
    /**
     * Sets the Shape width and height. Both values must be greater than zero.
     * @param {number} width The new Shape width in host-document units.
     * @param {number} height The new Shape height in host-document units.
     * @returns {FShape} This Shape facade for chaining.
     * @example
     * ```ts
     * fShape.setSize(240, 120);
     * ```
     */
    setSize(width: number, height: number): this;
    /**
     * Sets the clockwise Shape rotation in degrees.
     * @param {number} rotation The clockwise Shape rotation in degrees.
     * @returns {FShape} This Shape facade for chaining.
     * @example
     * ```ts
     * fShape.setRotation(30);
     * ```
     */
    setRotation(rotation: number): this;
    /**
     * Sets the absolute host-document position of the Shape.
     *
     * In Docs, this changes the configured horizontal and vertical offsets only for non-inline Shapes. Inline Shapes
     * remain positioned by their document text range. The horizontal offset is page-relative and the vertical offset
     * is relative to the anchor paragraph.
     *
     * @param {number} left The new Shape left position in host-document units.
     * @param {number} top The new Shape top position in host-document units.
     * @returns {FShape} This Shape facade for chaining.
     * @example
     * ```ts
     * fShape.setAbsolutePosition(160, 96);
     * ```
     */
    setAbsolutePosition(left: number, top: number): this;
    /**
     * Sets detached custom geometry and marks this Shape as custom.
     * @param {IPresetShapeConfig} customGeometry The new custom geometry.
     * @returns {FShape} This Shape facade for chaining.
     * @example
     * ```ts
     * // Replace the preset geometry with an adjustable right arrow.
     * fShape
     *   .setCustomGeometry({
     *     adjustValues: {
     *       adj1: [univerAPI.Enum.ShapeOperatorEnum.Val, 32000],
     *     },
     *     gd: {
     *       dx: [univerAPI.Enum.ShapeOperatorEnum.MulDiv, 'w', 'adj1', 100000],
     *       ix: [univerAPI.Enum.ShapeOperatorEnum.AddSub, 'r', 0, 'dx'],
     *     },
     *     ahLst: [{
     *       type: 'ahXY',
     *       gdRefX: 'adj1',
     *       minX: 0,
     *       maxX: 50000,
     *       pos: { x: 'dx', y: 'hd2' },
     *     }],
     *     cxnLst: [
     *       { ang: 0, x: 'r', y: 'hd2' },
     *       { ang: 180, x: 0, y: 'hd2' },
     *     ],
     *     rect: { l: 'dx', t: 0, r: 'ix', b: 'b' },
     *     pathLst: [{
     *       dataArray: [
     *         { command: 'M', points: [0, 0] },
     *         { command: 'L', points: ['ix', 0] },
     *         { command: 'L', points: ['r', 'hd2'] },
     *         { command: 'L', points: ['ix', 'b'] },
     *         { command: 'L', points: [0, 'b'] },
     *         { command: 'L', points: ['dx', 'hd2'] },
     *         { command: 'z', points: [] },
     *       ],
     *     }],
     *   })
     *   .setSolidFill('#16a34a', 0.92)
     *   .setStroke({
     *     lineStrokeType: univerAPI.Enum.ShapeLineTypeEnum.SolidLine,
     *     color: '#14532d',
     *     width: 3,
     *   });
     * ```
     */
    setCustomGeometry(customGeometry: IPresetShapeConfig): this;
    /**
     * Replaces this Shape's geometry with one SVG path.
     *
     * Use this method when the source is an SVG `<path>` `d` attribute. Do not pass complete
     * `<svg>`/`<path>` markup, a data URL, CSS, transforms, fill colors, or stroke colors in
     * `options.pathData`. Configure visual styles with Shape facade methods such as
     * `setSolidFill()`, `setNoneFill()`, and `setStroke()`.
     *
     * All standard SVG path commands are supported: `M/m`, `L/l`, `H/h`, `V/v`, `C/c`, `S/s`,
     * `Q/q`, `T/t`, `A/a`, and `Z/z`. Relative commands and repeated coordinate groups are
     * converted to absolute engine-shape commands. SVG arcs are converted to cubic Bézier segments
     * instead of being misinterpreted as engine-shape's semantically different OOXML `A` command.
     *
     * Parsing finishes before the host Shape is updated. Invalid or unsupported path data throws a
     * `SyntaxError` and leaves the existing Shape geometry unchanged.
     *
     * @param {IShapeSvgPathGeometryOptions} options SVG path geometry and optional virtual bounds.
     * @returns {FShape} This Shape facade for chaining.
     *
     * @example Board — executable with `univer execute`
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board');
     *
     * const shape = board.insertShape({
     *   shapeType: univerAPI.Enum.ShapeTypeEnum.Rect,
     *   transform: { left: 300, top: 100, width: 160, height: 200 },
     * });
     * if (!shape) throw new Error('Cannot insert shape');
     *
     * shape
     *   .setCustomGeometryFromSvgPath({
     *     // This is only the value of <path d="...">.
     *     pathData: 'M 50,10 C 34,20 24,64 22,92 L 78,92 C 76,64 66,20 50,10 Z',
     *     width: 100,
     *     height: 100,
     *     fill: 'none',
     *     stroke: true,
     *   })
     *   .setNoneFill()
     *   .setStroke({
     *     lineStrokeType: univerAPI.Enum.ShapeLineTypeEnum.SolidLine,
     *     color: '#F0509B',
     *     width: 3,
     *   });
     *
     * return {
     *   id: shape.getId(),
     *   pathCount: shape.getCustomGeometry()?.pathLst?.length ?? 0,
     * };
     * ```
     */
    setCustomGeometryFromSvgPath(options: IShapeSvgPathGeometryOptions): this;
    /**
     * Returns the sites where Connector endpoints can attach to this Shape.
     * Coordinates are local to the unrotated Shape bounds. Shapes without
     * connection-site geometry, including Connector Shapes, return an empty array.
     * @returns {IShapeConnectionSite[]} The sites where Connector endpoints can attach to this Shape.
     * @example
     * ```ts
     * const sites = fShape.getConnectionSites();
     * console.log(sites.map(({ index, x, y }) => ({ index, x, y })));
     * ```
     */
    getConnectionSites(): IShapeConnectionSite[];
    /**
     * Returns the Shape and connection-site index bound to a Connector's start point, or `null` when unbound.
     * @returns {IShapeRelationItem | null} The Shape and connection-site index bound to a Connector's start point, or `null` when unbound.
     * @example
     * ```ts
     * console.log(fShape.getStartConnectInfo());
     * ```
     */
    getStartConnectInfo(): IShapeRelationItem | null;
    /**
     * Returns the Shape and connection-site index bound to a Connector's end point, or `null` when unbound.
     * @returns {IShapeRelationItem | null} The Shape and connection-site index bound to a Connector's end point, or `null` when unbound.
     * @example
     * ```ts
     * console.log(fShape.getEndConnectInfo());
     * ```
     */
    getEndConnectInfo(): IShapeRelationItem | null;
    /**
     * Returns complete information for every adjustment handle exposed by this Shape.
     * @returns {IShapeAdjustItemResolved[]} Detached resolved adjustment handles in preset order.
     * @example
     * ```ts
     * fShape.setShapeType(univerAPI.Enum.ShapeTypeEnum.BlockArc);
     *
     * const handle = fShape.getAdjustHandles().find(({ gdRefR }) => gdRefR === 'adj3');
     * console.log(handle?.type); // 'ahPolar'
     * console.log(handle?.gdRefAng, handle?.gdRefR); // 'adj2', 'adj3'
     * console.log(handle?.currentAdjustValues); // { adj2: 0, adj3: 25000 }
     * console.log(handle?.resolvedMinR, handle?.resolvedMaxR); // 0, 50000
     * ```
     */
    getAdjustHandles(): IShapeAdjustItemResolved[];
    /**
     * Updates only the supplied Shape adjustment values and clamps them to their handle ranges.
     * @param {Record<string, number>} adjustValues Adjustment names and values to update.
     * @returns {FShape} This Shape facade for chaining.
     * @example
     * ```ts
     * fShape
     *   .setShapeType(univerAPI.Enum.ShapeTypeEnum.RoundRect)
     *   .setAdjustValues({ adj: 75000 });
     *
     * const [handle] = fShape.getAdjustHandles();
     * console.log(handle.currentAdjustValues.adj); // 50000
     * ```
     */
    setAdjustValues(adjustValues: Record<string, number>): this;
    /**
     * Removes all Shape adjustment overrides and restores preset defaults.
     * @returns {FShape} This Shape facade for chaining.
     * @example
     * ```ts
     * fShape
     *   .setShapeType(univerAPI.Enum.ShapeTypeEnum.RoundRect)
     *   .setAdjustValues({ adj: 40000 });
     * fShape.resetAdjustValues();
     *
     * const [handle] = fShape.getAdjustHandles();
     * console.log(handle.currentAdjustValues.adj); // 16667
     * ```
     */
    resetAdjustValues(): this;
    /**
     * Replaces the current fill with a solid color and optional opacity.
     * @param {string} color The new fill color.
     * @param {number} [opacity] The new fill opacity, ranging from 0 (completely transparent) to 1 (completely opaque).
     * @returns {FShape} This Shape facade for chaining.
     * @example
     * ```ts
     * fShape.setSolidFill('#4f90ff', 0.85);
     * ```
     */
    setSolidFill(color: string, opacity?: number): this;
    /**
     * Replaces the current fill with a gradient containing at least two color stops.
     * @param {ShapeGradientTypeEnum} gradientType The new gradient type.
     * @param {IShapeGradientStop[]} colorStops An array of at least two gradient stops.
     * @param {number} [gradientAngle] The new gradient angle in degrees, used only for linear gradients.
     * @returns {FShape} This Shape facade for chaining.
     * @example
     * ```ts
     * fShape.setGradientFill(univerAPI.Enum.ShapeGradientTypeEnum.Linear, [
     *   { position: 0, color: '#2563eb' },
     *   { position: 1, color: '#a855f7' },
     * ], 45);
     * ```
     */
    setGradientFill(gradientType: ShapeGradientTypeEnum, colorStops: IShapeGradientStop[], gradientAngle?: number): this;
    /**
     * Replaces the current fill with an image source and optional image-fill settings.
     * @param {string} source The image source, which can be a URL or base64 data URI.
     * @param {ImageSourceTypeEnum} [imageSourceType] The type of the image source, either URL or base64.
     * @param {IShapeImageFillOptions} [options] Optional image-fill settings, including fill mode, opacity, and rotation behavior.
     * @returns {FShape} This Shape facade for chaining.
     * @example
     * ```ts
     * fShape.setImageFill(
     *   'https://github.com/dream-num.png',
     *   univerAPI.Enum.ShapeImageSourceTypeEnum.URL,
     *   { imageOpacity: 0.9 }
     * );
     * ```
     */
    setImageFill(source: string, imageSourceType?: ImageSourceTypeEnum, options?: IShapeImageFillOptions): this;
    /**
     * Removes the visible fill from this Shape.
     * @returns {FShape} This Shape facade for chaining.
     * @example
     * ```ts
     * fShape.setNoneFill();
     * ```
     */
    setNoneFill(): this;
    /**
     * Replaces the complete Shape stroke configuration.
     * @param {IShapeLineStyle} stroke The new Shape stroke configuration.
     * @returns {FShape} This Shape facade for chaining.
     * @example
     * ```ts
     * fShape.setStroke({
     *   color: '#1e3a8a',
     *   width: 2,
     *   lineStrokeType: univerAPI.Enum.ShapeLineTypeEnum.SolidLine,
     *   dashType: univerAPI.Enum.ShapeLineDashEnum.Dash,
     * });
     * ```
     */
    setStroke(stroke: IShapeLineStyle): this;
    /**
     * Sets the stroke color while preserving other stroke properties.
     * @param {string} color The new stroke color.
     * @returns {FShape} This Shape facade for chaining.
     * @example
     * ```ts
     * fShape.setStrokeColor('#1e3a8a');
     * ```
     */
    setStrokeColor(color: string): this;
    /**
     * Sets the stroke width while preserving other stroke properties.
     * @param {number} width The new stroke width in host-document units.
     * @returns {FShape} This Shape facade for chaining.
     * @example
     * ```ts
     * fShape.setStrokeWidth(3);
     * ```
     */
    setStrokeWidth(width: number): this;
    /**
     * Sets the stroke opacity while preserving other stroke properties.
     * @param {number} opacity The new stroke opacity, ranging from 0 (completely transparent) to 1 (completely opaque).
     * @returns {FShape} This Shape facade for chaining.
     * @example
     * ```ts
     * fShape.setStrokeOpacity(0.6);
     * ```
     */
    setStrokeOpacity(opacity: number): this;
    /**
     * Sets the stroke dash preset.
     * @param {ShapeLineDashEnum} lineDashType The new stroke dash preset.
     * @returns {FShape} This Shape facade for chaining.
     * @example
     * ```ts
     * fShape.setStrokeLineDashType(univerAPI.Enum.ShapeLineDashEnum.DashDot);
     * ```
     */
    setStrokeLineDashType(lineDashType: ShapeLineDashEnum): this;
    /**
     * Sets the stroke line-join preset.
     * @param {ShapeLineJoinEnum} lineJoinType The new stroke line-join preset.
     * @returns {FShape} This Shape facade for chaining.
     * @example
     * ```ts
     * fShape.setStrokeLineJoinType(univerAPI.Enum.ShapeLineJoinEnum.Round);
     * ```
     */
    setStrokeLineJoinType(lineJoinType: ShapeLineJoinEnum): this;
    /**
     * Sets the stroke line-cap preset.
     * @param {ShapeLineCapEnum} lineCapType The new stroke line-cap preset.
     * @returns {FShape} This Shape facade for chaining.
     * @example
     * ```ts
     * fShape.setStrokeLineCapType(univerAPI.Enum.ShapeLineCapEnum.Round);
     * ```
     */
    setStrokeLineCapType(lineCapType: ShapeLineCapEnum): this;
    /**
     * Sets the stroke line type.
     * @param {ShapeLineTypeEnum} lineType The new stroke line type.
     * @returns {FShape} This Shape facade for chaining.
     * @example
     * ```ts
     * fShape.setStrokeLineType(univerAPI.Enum.ShapeLineTypeEnum.SolidLine);
     * ```
     */
    setStrokeLineType(lineType: ShapeLineTypeEnum): this;
    /**
     * Applies a partial Shape update through the registered host adapter.
     * @param {IShapeUpdateInput} input A partial Shape update.
     * @returns {FShape} This Shape facade for chaining.
     * @example
     * ```ts
     * fShape.update({ transform: { left: 240, top: 120, rotation: 20 } });
     * ```
     */
    update(input: IShapeUpdateInput): this;
    /**
     * Removes the Shape and returns whether the host mutation succeeded.
     * @returns {boolean} Whether the shape was successfully removed from its host.
     * @example
     * ```ts
     * const removed = fShape.remove();
     * console.log(removed);
     * ```
     */
    remove(): boolean;
    /**
     * Moves the Shape to the front of its host drawing order.
     * @returns {FShape} This Shape facade for chaining.
     * @example
     * ```ts
     * fShape.bringToFront();
     * ```
     */
    bringToFront(): this;
    /**
     * Moves the Shape forward by one position in its host drawing order.
     * @returns {FShape} This Shape facade for chaining.
     * @example
     * ```ts
     * fShape.bringForward();
     * ```
     */
    bringForward(): this;
    /**
     * Moves the Shape backward by one position in its host drawing order.
     * @returns {FShape} This Shape facade for chaining.
     * @example
     * ```ts
     * fShape.sendBackward();
     * ```
     */
    sendBackward(): this;
    /**
     * Moves the Shape to the back of its host drawing order.
     * @returns {FShape} This Shape facade for chaining.
     * @example
     * ```ts
     * fShape.sendToBack();
     * ```
     */
    sendToBack(): this;
    /**
     * Moves the Shape to a zero-based index in its host's persisted drawing order.
     * The host clamps an out-of-range index to its nearest valid position.
     * @param {number} index The zero-based target order index.
     * @returns {FShape} This Shape facade for chaining.
     * @example
     * ```ts
     * fShape.setZOrder(2);
     * ```
     */
    setZOrder(index: number): this;
    protected _getAdapter(): IShapeHostAdapter | null;
    private _patchShapeData;
    private _updateSmartArt;
    private _patchStroke;
    private _getSnapshot;
    private _getGeometryModel;
    protected _mutate(operation: string, callback: (adapter: IShapeHostAdapter) => boolean): boolean;
}
export {};
