import type { IConnectorArrow, IConnectorEndpoint, IShapeData, IShapePoint, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeTypeEnum } from '@univerjs-pro/engine-shape';
import { FShape } from './f-shape';
/**
 * A live, host-neutral facade handle for a Connector Shape.
 *
 * @example Sheet
 * ```ts
 * const fWorkbook = univerAPI.getActiveWorkbook();
 * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
 * const fConnectorShape = fWorksheet.insertShape({
 *   shapeType: univerAPI.Enum.ShapeTypeEnum.StraightConnector1,
 *   transform: { left: 80, top: 80, width: 240, height: 120 },
 * });
 * ```
 *
 * @example Doc
 * ```ts
 * const fDocument = univerAPI.getActiveDocument();
 * const paragraph = fDocument.getParagraphs()[0];
 * const fConnectorShape = fDocument.insertShape({
 *   shapeType: univerAPI.Enum.ShapeTypeEnum.StraightConnector1,
 *   placement: {
 *     wrappingStyle: univerAPI.Enum.TextWrappingStyle.WRAP_SQUARE,
 *     anchor: {
 *       paragraphId: paragraph.getId(),
 *       segmentId: paragraph.getSegmentId(),
 *     },
 *     position: { horizontalOffset: 80, verticalOffset: 80 },
 *   },
 *   transform: { width: 240, height: 120 },
 * });
 * ```
 *
 * @example Slide
 * ```ts
 * const fPresentation = univerAPI.getActivePresentation();
 * const fSlide = fPresentation.getSlideByIndex(0);
 * const fConnectorShape = fSlide.insertShape({
 *   shapeType: univerAPI.Enum.ShapeTypeEnum.StraightConnector1,
 *   transform: { left: 80, top: 80, width: 240, height: 120 },
 * });
 * ```
 *
 * @example Board
 * ```ts
 * const fBoard = univerAPI.getActiveBoard();
 * const fConnectorShape = fBoard.insertShape({
 *   shapeType: univerAPI.Enum.ShapeTypeEnum.StraightConnector1,
 *   transform: { left: 80, top: 80, width: 240, height: 120 },
 * });
 * ```
 *
 * @example
 * ```ts
 * const fWorkbook = univerAPI.getActiveWorkbook();
 * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
 * const sourceShape = fWorksheet.insertShape({
 *   shapeType: univerAPI.Enum.ShapeTypeEnum.RoundRect,
 *   transform: { left: 80, top: 80, width: 180, height: 100 },
 * });
 * const targetShape = fWorksheet.insertShape({
 *   shapeType: univerAPI.Enum.ShapeTypeEnum.Ellipse,
 *   transform: { left: 420, top: 200, width: 180, height: 100 },
 * });
 * const fConnectorShape = fWorksheet.insertShape({
 *   shapeType: univerAPI.Enum.ShapeTypeEnum.BentConnector3,
 *   transform: { left: 240, top: 130, width: 240, height: 120 },
 * });
 *
 * const startSite = sourceShape.getConnectionSites()[0];
 * const targetSites = targetShape.getConnectionSites();
 * const endSite = targetSites[2] ?? targetSites[0];
 *
 * fConnectorShape
 *   .bindStart(sourceShape.getId(), startSite.index)
 *   .bindEnd(targetShape.getId(), endSite.index)
 *   .setEndArrow(univerAPI.Enum.ShapeArrowTypeEnum.Arrow);
 * ```
 */
export declare class FConnectorShape extends FShape {
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
     * Returns the resolved start endpoint, including its optional Shape binding.
     * @returns {IConnectorEndpoint | null} The resolved start endpoint, or `null` when the Connector does not exist.
     * @example
     * ```ts
     * console.log(fConnectorShape.getStartEndpoint());
     * ```
     */
    getStartEndpoint(): IConnectorEndpoint | null;
    /**
     * Returns the resolved end endpoint, including its optional Shape binding.
     * @returns {IConnectorEndpoint | null} The resolved end endpoint, or `null` when the Connector does not exist.
     * @example
     * ```ts
     * console.log(fConnectorShape.getEndEndpoint());
     * ```
     */
    getEndEndpoint(): IConnectorEndpoint | null;
    /**
     * Returns the resolved Connector route in the host's document coordinates.
     * @returns {IShapePoint[] | null} The resolved Connector route points, or `null` when the Connector does not exist.
     * @example
     * ```ts
     * console.log(fConnectorShape.getRoutePoints());
     * ```
     */
    getRoutePoints(): IShapePoint[] | null;
    /**
     * Returns the configured start arrowhead, or `null` when none is configured.
     * @returns {IConnectorArrow | null} The start arrowhead, or `null` when none is configured.
     * @example
     * ```ts
     * console.log(fConnectorShape.getStartArrow());
     * ```
     */
    getStartArrow(): IConnectorArrow | null;
    /**
     * Returns the configured end arrowhead, or `null` when none is configured.
     * @returns {IConnectorArrow | null} The end arrowhead, or `null` when none is configured.
     * @example
     * ```ts
     * console.log(fConnectorShape.getEndArrow());
     * ```
     */
    getEndArrow(): IConnectorArrow | null;
    /**
     * Changes this Connector to another Connector Shape preset.
     * @param {ShapeTypeEnum} shapeType The new Connector Shape type.
     * @returns {FConnectorShape} This Connector Shape facade for chaining.
     * @example
     * ```ts
     * fConnectorShape.setShapeType(univerAPI.Enum.ShapeTypeEnum.BentConnector3);
     * ```
     */
    setShapeType(shapeType: ShapeTypeEnum): this;
    /**
     * Replaces this Connector's Shape data without allowing a basic Shape type.
     * @param {IShapeData} shapeData The new Shape data.
     * @returns {FConnectorShape} This Connector Shape facade for chaining.
     * @example
     * ```ts
     * fConnectorShape.setShapeData({
     *   shapeType: univerAPI.Enum.ShapeTypeEnum.StraightConnector1,
     *   stroke: { color: '#2563eb', width: 2 },
     * });
     * ```
     */
    setShapeData(shapeData: IShapeData): this;
    /**
     * Binds the start endpoint to a target Shape connection site.
     * @param {string} targetShapeId The target Shape's stable identifier.
     * @param {number} connectionSiteIndex The target Shape's connection site index.
     * @returns {FConnectorShape} This Connector Shape facade for chaining.
     * @example
     * ```ts
     * const source = sourceShape.getConnectionSites()[0];
     * if (source) fConnectorShape.bindStart(sourceShape.getId(), source.index);
     * ```
     */
    bindStart(targetShapeId: string, connectionSiteIndex: number): this;
    /**
     * Binds the end endpoint to a target Shape connection site.
     * @param {string} targetShapeId The target Shape's stable identifier.
     * @param {number} connectionSiteIndex The target Shape's connection site index.
     * @returns {FConnectorShape} This Connector Shape facade for chaining.
     * @example
     * ```ts
     * const target = targetShape.getConnectionSites()[0];
     * if (target) fConnectorShape.bindEnd(targetShape.getId(), target.index);
     * ```
     */
    bindEnd(targetShapeId: string, connectionSiteIndex: number): this;
    /**
     * Unbinds the start endpoint while preserving its current visual position.
     * @returns {FConnectorShape} This Connector Shape facade for chaining.
     * @example
     * ```ts
     * fConnectorShape.unbindStart();
     * ```
     */
    unbindStart(): this;
    /**
     * Unbinds the end endpoint while preserving its current visual position.
     * @returns {FConnectorShape} This Connector Shape facade for chaining.
     * @example
     * ```ts
     * fConnectorShape.unbindEnd();
     * ```
     */
    unbindEnd(): this;
    /**
     * Sets a free start point.
     * Calling this method removes any existing start binding while preserving the end binding.
     * @param {IShapePoint} point The new start point in the host's document coordinates.
     * @returns {FConnectorShape} This Connector Shape facade for chaining.
     * @example
     * ```ts
     * fConnectorShape.setStartPoint({ x: 80, y: 120 });
     * ```
     */
    setStartPoint(point: IShapePoint): this;
    /**
     * Sets a free end point.
     * Calling this method removes any existing end binding while preserving the start binding.
     * @param {IShapePoint} point The new end point in the host's document coordinates.
     * @returns {FConnectorShape} This Connector Shape facade for chaining.
     * @example
     * ```ts
     * fConnectorShape.setEndPoint({ x: 360, y: 240 });
     * ```
     */
    setEndPoint(point: IShapePoint): this;
    /**
     * Replaces the intermediate Connector route points while preserving both endpoint bindings.
     * @param {IShapePoint[]} points The new Connector route points in the host's document coordinates.
     * @returns {FConnectorShape} This Connector Shape facade for chaining.
     * @example
     * ```ts
     * fConnectorShape.setRoutePoints([{ x: 180, y: 120 }, { x: 180, y: 240 }]);
     * ```
     */
    setRoutePoints(points: IShapePoint[]): this;
    /**
     * Sets the start arrowhead type and optional size.
     * @param {ShapeArrowTypeEnum} type The new start arrowhead type.
     * @param {ShapeArrowSizeEnum} [size] The optional new start arrowhead size.
     * @returns {FConnectorShape} This Connector Shape facade for chaining.
     * @example
     * ```ts
     * fConnectorShape.setStartArrow(
     *   univerAPI.Enum.ShapeArrowTypeEnum.OvalArrow,
     *   univerAPI.Enum.ShapeArrowSizeEnum.Medium
     * );
     * ```
     */
    setStartArrow(type: ShapeArrowTypeEnum, size?: ShapeArrowSizeEnum): this;
    /**
     * Sets the end arrowhead type and optional size.
     * @param {ShapeArrowTypeEnum} type The new end arrowhead type.
     * @param {ShapeArrowSizeEnum} [size] The optional new end arrowhead size.
     * @returns {FConnectorShape} This Connector Shape facade for chaining.
     * @example
     * ```ts
     * fConnectorShape.setEndArrow(
     *   univerAPI.Enum.ShapeArrowTypeEnum.Arrow,
     *   univerAPI.Enum.ShapeArrowSizeEnum.Large
     * );
     * ```
     */
    setEndArrow(type: ShapeArrowTypeEnum, size?: ShapeArrowSizeEnum): this;
    private _getConnectorAdapter;
    private _getConnectorSnapshot;
    private _bind;
    private _mutateConnector;
}
