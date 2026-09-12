import type { IShapeCreateInput } from '@univerjs-pro/engine-shape';
import { FConnectorShape } from '@univerjs-pro/engine-shape/facade';
import { FWorksheet } from '@univerjs/sheets/facade';
import { FSheetShape } from './f-shape';
export interface IFWorksheetShapeMixin {
    /**
     * Inserts a Shape or Connector into this worksheet.
     * @param {IShapeCreateInput} input Common Shape creation input.
     * @returns {FSheetShape | FConnectorShape | null} A live Sheet Shape facade, or `null` when creation fails.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * if (!fWorkbook) throw new Error('No active workbook.');
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * if (!fWorksheet) throw new Error('Worksheet not found.');
     * const fShape = fWorksheet.insertShape({
     *   shapeType: univerAPI.Enum.ShapeTypeEnum.RoundRect,
     *   transform: { left: 120, top: 80, width: 240, height: 120 },
     *   shapeData: {
     *     fill: { fillType: univerAPI.Enum.ShapeFillEnum.SolidFill, color: '#dbeafe' },
     *     stroke: {
     *       lineStrokeType: univerAPI.Enum.ShapeLineTypeEnum.SolidLine,
     *       color: '#2563eb',
     *       width: 2,
     *     },
     *   },
     * });
     * if (!fShape) throw new Error('Shape could not be inserted.');
     *
     * fShape
     *   .setRotation(8)
     *   .setStrokeLineDashType(univerAPI.Enum.ShapeLineDashEnum.Dash)
     *   .setAbsolutePosition(480, 160);
     *
     * fShape.getText()
     *   .setText('Sheet review')
     *   .setHorizontalAlign(univerAPI.Enum.HorizontalAlign.CENTER)
     *   .setVerticalAlign(univerAPI.Enum.VerticalAlign.MIDDLE);
     * ```
     */
    insertShape(input: IShapeCreateInput): FSheetShape | FConnectorShape | null;
    /**
     * Returns a worksheet Shape by its stable identifier.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const fShape = fWorksheet.getShape('shape-1');
     * console.log(fShape);
     * ```
     */
    getShape(shapeId: string): FSheetShape | FConnectorShape | null;
    /**
     * Returns all Shapes and Connectors on this worksheet.
     * @returns {Array<FSheetShape | FConnectorShape>} An array of live Sheet Shape facades.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const fShapes = fWorksheet.getShapes();
     * console.log(fShapes);
     * ```
     */
    getShapes(): Array<FSheetShape | FConnectorShape>;
}
export declare class FWorksheetShapeMixin extends FWorksheet implements IFWorksheetShapeMixin {
    insertShape(input: IShapeCreateInput): FSheetShape | FConnectorShape | null;
    getShape(shapeId: string): FSheetShape | FConnectorShape | null;
    getShapes(): Array<FSheetShape | FConnectorShape>;
    private _getShapeScope;
    private _getShapeAdapter;
    private _createShapeHandle;
}
declare module '@univerjs/sheets/facade' {
    interface FWorksheet extends IFWorksheetShapeMixin {
    }
}
