import { ImageFillModeEnum, ImageSourceTypeEnum, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeGradientTypeEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum } from '@univerjs-pro/engine-shape';
/** Shape facade enums exposed through `univerAPI.Enum`. */
export interface IFShapeEnumMixin {
    /**
     * Built-in Shape and Connector preset types.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const fShape = fWorksheet.insertShape({
     *   shapeType: univerAPI.Enum.ShapeTypeEnum.RoundRect,
     *   transform: { left: 80, top: 80, width: 200, height: 120 },
     * });
     * ```
     */
    ShapeTypeEnum: typeof ShapeTypeEnum;
    /**
     * Shape fill types such as no fill, solid, gradient, and picture.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const fShape = fWorksheet.insertShape({
     *   shapeType: univerAPI.Enum.ShapeTypeEnum.Rect,
     *   shapeData: {
     *     fill: {
     *       fillType: univerAPI.Enum.ShapeFillEnum.SolidFill,
     *       color: '#2563eb'
     *     },
     *   },
     * });
     * ```
     */
    ShapeFillEnum: typeof ShapeFillEnum;
    /**
     * Gradient geometries accepted by Shape fill APIs.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const fShape = fWorksheet.insertShape({
     *   shapeType: univerAPI.Enum.ShapeTypeEnum.Rect
     * });
     * fShape.setGradientFill(
     *   univerAPI.Enum.ShapeGradientTypeEnum.Linear,
     *   [
     *     { position: 0, color: '#2563eb' },
     *     { position: 1, color: '#a855f7' },
     *   ]
     * );
     * ```
     */
    ShapeGradientTypeEnum: typeof ShapeGradientTypeEnum;
    /**
     * Image fill layout modes for stretching or tiling an image inside a Shape.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const fShape = fWorksheet.insertShape({ shapeType: univerAPI.Enum.ShapeTypeEnum.Rect });
     * fShape.setImageFill(
     *   'https://github.com/dream-num.png',
     *   univerAPI.Enum.ShapeImageSourceTypeEnum.URL,
     *   {
     *     imageFillMode: univerAPI.Enum.ShapeImageFillModeEnum.Stretch,
     *   }
     * );
     * ```
     */
    ShapeImageFillModeEnum: typeof ImageFillModeEnum;
    /**
     * Image source types accepted by Shape image fill APIs.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const fShape = fWorksheet.insertShape({
     *   shapeType: univerAPI.Enum.ShapeTypeEnum.Rect
     * });
     * fShape.setImageFill(
     *   'https://github.com/dream-num.png',
     *   univerAPI.Enum.ShapeImageSourceTypeEnum.URL
     * );
     * ```
     */
    ShapeImageSourceTypeEnum: typeof ImageSourceTypeEnum;
    /**
     * Shape stroke fill types such as no line, solid line, and gradient line.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const fShape = fWorksheet.insertShape({
     *   shapeType: univerAPI.Enum.ShapeTypeEnum.Rect
     * });
     * fShape.setStrokeLineType(univerAPI.Enum.ShapeLineTypeEnum.SolidLine);
     * ```
     */
    ShapeLineTypeEnum: typeof ShapeLineTypeEnum;
    /**
     * Dash patterns accepted by Shape stroke APIs.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const fShape = fWorksheet.insertShape({
     *   shapeType: univerAPI.Enum.ShapeTypeEnum.Rect
     * });
     * fShape.setStrokeLineDashType(univerAPI.Enum.ShapeLineDashEnum.DashDot);
     * ```
     */
    ShapeLineDashEnum: typeof ShapeLineDashEnum;
    /**
     * Line cap styles accepted by Shape stroke APIs.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const fShape = fWorksheet.insertShape({
     *   shapeType: univerAPI.Enum.ShapeTypeEnum.Rect
     * });
     * fShape.setStrokeLineCapType(univerAPI.Enum.ShapeLineCapEnum.Round);
     * ```
     */
    ShapeLineCapEnum: typeof ShapeLineCapEnum;
    /**
     * Line join styles accepted by Shape stroke APIs.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const fShape = fWorksheet.insertShape({
     *   shapeType: univerAPI.Enum.ShapeTypeEnum.Rect
     * });
     * fShape.setStrokeLineJoinType(univerAPI.Enum.ShapeLineJoinEnum.Bevel);
     * ```
     */
    ShapeLineJoinEnum: typeof ShapeLineJoinEnum;
    /**
     * Formula operators used by custom Shape geometry guides.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const fShape = fWorksheet.insertShape({
     *   shapeType: univerAPI.Enum.ShapeTypeEnum.Rect
     * });
     * fShape.setCustomGeometry({
     *   adjustValues: {
     *     inset: [univerAPI.Enum.ShapeOperatorEnum.Val, 12000],
     *   },
     *   pathLst: [{
     *     dataArray: [
     *       { command: 'M', points: ['inset', 'inset'] },
     *       { command: 'L', points: ['r', 'inset'] },
     *       { command: 'L', points: ['r', 'b'] },
     *       { command: 'L', points: ['inset', 'b'] },
     *       { command: 'z', points: [] },
     *     ],
     *   }],
     * });
     * ```
     */
    ShapeOperatorEnum: typeof ShapeOperatorEnum;
    /**
     * Connector arrowhead types.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const fConnectorShape = fWorksheet.insertShape({
     *   shapeType: univerAPI.Enum.ShapeTypeEnum.StraightConnector1,
     * });
     * fConnectorShape.setEndArrow(univerAPI.Enum.ShapeArrowTypeEnum.Arrow);
     * ```
     */
    ShapeArrowTypeEnum: typeof ShapeArrowTypeEnum;
    /**
     * Connector arrowhead sizes.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const fConnectorShape = fWorksheet.insertShape({
     *   shapeType: univerAPI.Enum.ShapeTypeEnum.StraightConnector1,
     * });
     * fConnectorShape.setEndArrow(
     *   univerAPI.Enum.ShapeArrowTypeEnum.Arrow,
     *   univerAPI.Enum.ShapeArrowSizeEnum.Large
     * );
     * ```
     */
    ShapeArrowSizeEnum: typeof ShapeArrowSizeEnum;
    /**
     * Automatic fitting strategies for Shape text.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const fShape = fWorksheet.insertShape({
     *   shapeType: univerAPI.Enum.ShapeTypeEnum.Rect
     * });
     * fShape.getText().setText('Quarterly review');
     * fShape.getText().setTextBoxOptions({
     *   autoFitType: univerAPI.Enum.ShapeTextAutoFitType.NormAutoFit,
     * });
     * ```
     */
    ShapeTextAutoFitType: typeof ShapeTextAutoFitType;
    /**
     * Writing directions for Shape text.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const fShape = fWorksheet.insertShape({
     *   shapeType: univerAPI.Enum.ShapeTypeEnum.Rect
     * });
     * fShape.getText().setText('Vertical text');
     * fShape.getText().setTextBoxOptions({
     *   textDirection: univerAPI.Enum.ShapeTextDirection.Vert,
     * });
     * ```
     */
    ShapeTextDirection: typeof ShapeTextDirection;
    /**
     * Wrapping modes for Shape text.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const fShape = fWorksheet.insertShape({
     *   shapeType: univerAPI.Enum.ShapeTypeEnum.Rect
     * });
     * fShape.getText().setText('Wrapped Shape text');
     * fShape.getText().setTextBoxOptions({
     *   textWrap: univerAPI.Enum.ShapeTextWrapType.Square,
     * });
     * ```
     */
    ShapeTextWrapType: typeof ShapeTextWrapType;
}
declare module '@univerjs/core/facade' {
    interface FEnum extends IFShapeEnumMixin {
    }
}
