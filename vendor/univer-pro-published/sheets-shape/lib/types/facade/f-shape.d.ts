import type { IShapeRef } from '@univerjs-pro/engine-shape';
import type { Injector } from '@univerjs/core';
import type { ISheetDrawingPlacement, ISheetDrawingPlacementInput } from '@univerjs/sheets-drawing';
import { IShapeHostAdapterRegistry } from '@univerjs-pro/engine-shape';
import { FShape } from '@univerjs-pro/engine-shape/facade';
import { ICommandService } from '@univerjs/core';
import { ISheetDrawingService } from '@univerjs/sheets-drawing';
export declare class FSheetShape extends FShape {
    private readonly _sheetDrawingService;
    constructor(shapeRef: IShapeRef, injector: Injector, shapeHostAdapterRegistry: IShapeHostAdapterRegistry, commandService: ICommandService, _sheetDrawingService: ISheetDrawingService);
    /**
     * Returns this Shape's current Sheet placement.
     *
     * Position is OneCell (`from + width + height`), Both is TwoCell
     * (`from + to`), and None is an absolute Sheet rectangle.
     *
     * @returns {ISheetDrawingPlacement | null} The current placement, or `null` when the Shape no longer exists.
     * @example
     * ```ts
     * const workbook = univerAPI.getActiveWorkbook();
     * const worksheet = workbook?.getActiveSheet();
     * const shape = worksheet?.getShapes()[0];
     * console.log(shape?.getPlacement());
     * ```
     */
    getPlacement(): ISheetDrawingPlacement | null;
    /**
     * Updates this Shape's Sheet placement through `SetSheetDrawingPlacementCommand`.
     *
     * Use exact markers when the caller owns the cell relationship. Use
     * `{ kind, bounds }` when the caller owns a rectangle and wants Univer to
     * infer the markers from the current Sheet grid. Position is appropriate
     * for a fixed-size object that moves with its start cell; Both is
     * appropriate when both position and size follow the grid; None is
     * appropriate for a free absolute object.
     *
     * @param {ISheetDrawingPlacementInput} placement Exact markers or model-space bounds with an explicit anchor type.
     * @returns {boolean} Whether the command succeeded.
     * @example Position inferred from bounds
     * ```ts
     * shape.setPlacement({
     *   kind: univerAPI.Enum.SheetDrawingAnchorType.Position,
     *   bounds: { left: 120, top: 80, width: 240, height: 120 },
     * });
     * ```
     * @example Position with exact marker
     * ```ts
     * shape.setPlacement({
     *   kind: univerAPI.Enum.SheetDrawingAnchorType.Position,
     *   from: { row: 2, column: 2, rowOffset: 8, columnOffset: 8 },
     *   width: 240,
     *   height: 120,
     * });
     * ```
     * @example Both inferred from bounds
     * ```ts
     * shape.setPlacement({
     *   kind: univerAPI.Enum.SheetDrawingAnchorType.Both,
     *   bounds: { left: 120, top: 80, width: 360, height: 180 },
     * });
     * ```
     * @example Both with exact markers
     * ```ts
     * shape.setPlacement({
     *   kind: univerAPI.Enum.SheetDrawingAnchorType.Both,
     *   from: { row: 2, column: 2, rowOffset: 8, columnOffset: 8 },
     *   to: { row: 8, column: 6, rowOffset: 0, columnOffset: 0 },
     * });
     * ```
     * @example Absolute
     * ```ts
     * shape.setPlacement({
     *   kind: univerAPI.Enum.SheetDrawingAnchorType.None,
     *   left: 640,
     *   top: 96,
     *   width: 240,
     *   height: 120,
     * });
     * ```
     */
    setPlacement(placement: ISheetDrawingPlacementInput): boolean;
    /**
     * Sets the Shape position from a zero-based Sheet cell anchor and pixel offsets.
     * @param {number} anchorRowPos Row containing the Shape's top edge.
     * @param {number} anchorColPos Column containing the Shape's left edge.
     * @param {number} rowOffset Vertical pixel offset from the row's top edge.
     * @param {number} columnOffset Horizontal pixel offset from the column's left edge.
     * @returns {FSheetShape} This Shape, for chaining.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const fShape = fWorksheet.insertShape({
     *   shapeType: univerAPI.Enum.ShapeTypeEnum.RoundRect,
     * });
     * fShape.setPosition(6, 6, 10, 10);
     * ```
     */
    setPosition(anchorRowPos: number, anchorColPos: number, rowOffset: number, columnOffset: number): this;
}
