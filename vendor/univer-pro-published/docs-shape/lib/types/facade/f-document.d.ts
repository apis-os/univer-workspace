import type { IDocShapeCreateInput } from '@univerjs-pro/docs-shape';
import { FConnectorShape, FShape } from '@univerjs-pro/engine-shape/facade';
import { FDocument } from '@univerjs/docs/facade';
export interface IFDocumentShapeMixin {
    /**
     * Inserts a Shape or Connector into this document.
     *
     * A document Shape is anchored by a persisted paragraph id, so edits before that paragraph do not invalidate
     * the insertion target. Inline Shapes follow text flow and cannot specify a floating position. The other four
     * wrapping styles accept `placement.position`: its horizontal offset is page-relative and its vertical offset
     * is relative to the anchor paragraph. Prefer square or top-and-bottom wrapping for ordinary floating content.
     * Front-of-text and behind-text Shapes do not cause text to reflow: use them only for intentional overlays,
     * backgrounds, or watermarks. `transform` controls only width, height, and rotation.
     *
     * @param {IDocShapeCreateInput} input Shape data, document placement, size, and rotation.
     * @returns {FShape | FConnectorShape | null} A live document Shape facade, or `null` when creation fails.
     * @example Insert an inline Shape at the end of the first paragraph
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const paragraph = fDocument?.getParagraphs()[0];
     * if (!fDocument || !paragraph) throw new Error('Document paragraph not found.');
     *
     * const fShape = fDocument.insertShape({
     *   shapeType: univerAPI.Enum.ShapeTypeEnum.Rect,
     *   placement: {
     *     wrappingStyle: univerAPI.Enum.TextWrappingStyle.INLINE,
     *     anchor: {
     *       paragraphId: paragraph.getId(),
     *       segmentId: paragraph.getSegmentId(),
     *       position: univerAPI.Enum.DocShapeAnchorPosition.PARAGRAPH_END,
     *     },
     *   },
     *   transform: { width: 180, height: 72 },
     * });
     * if (!fShape) throw new Error('Shape could not be inserted.');
     * ```
     * @example Insert a floating Shape with square text wrapping
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const paragraph = fDocument?.findParagraphByText('Quarterly revenue');
     * if (!fDocument || !paragraph) throw new Error('Anchor paragraph not found.');
     *
     * const fShape = fDocument.insertShape({
     *   shapeType: univerAPI.Enum.ShapeTypeEnum.RoundRect,
     *   placement: {
     *     wrappingStyle: univerAPI.Enum.TextWrappingStyle.WRAP_SQUARE,
     *     anchor: {
     *       paragraphId: paragraph.getId(),
     *       segmentId: paragraph.getSegmentId(),
     *     },
     *     position: { horizontalOffset: 96, verticalOffset: 24 },
     *   },
     *   transform: { width: 240, height: 120, rotation: 5 },
     *   shapeData: {
     *     fill: { fillType: univerAPI.Enum.ShapeFillEnum.SolidFill, color: '#dcfce7' },
     *     stroke: {
     *       lineStrokeType: univerAPI.Enum.ShapeLineTypeEnum.SolidLine,
     *       color: '#16a34a',
     *       width: 2,
     *     },
     *   },
     * });
     * if (!fShape) throw new Error('Shape could not be inserted.');
     * fShape.getText().setText('Quarterly revenue');
     * ```
     * @example Insert a top-and-bottom Formula Shape at a paragraph character offset
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const paragraph = fDocument?.getParagraphs()[0];
     * if (!fDocument || !paragraph) throw new Error('Document paragraph not found.');
     *
     * const fShape = fDocument.insertShape({
     *   shapeType: univerAPI.Enum.ShapeTypeEnum.Rect,
     *   placement: {
     *     wrappingStyle: univerAPI.Enum.TextWrappingStyle.WRAP_TOP_AND_BOTTOM,
     *     anchor: {
     *       paragraphId: paragraph.getId(),
     *       segmentId: paragraph.getSegmentId(),
     *       position: univerAPI.Enum.DocShapeAnchorPosition.OFFSET,
     *       offset: 0,
     *     },
     *     position: { horizontalOffset: 72, verticalOffset: 16 },
     *   },
     *   transform: { width: 280, height: 80 },
     * });
     * if (!fShape) throw new Error('Shape could not be inserted.');
     * fShape.setFormula({
     *   formula: '=SUM([Sales]Data!B2:B10)',
     *   externalReferences: [{
     *     qualifier: 'Sales',
     *     sourceUnitId: 'sales-workbook',
     *     sourceUnitType: univerAPI.Enum.UniverInstanceType.UNIVER_SHEET,
     *   }],
     * });
     * ```
     * @example Insert an intentional foreground overlay that may cover document text
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const paragraph = fDocument?.getParagraphs()[0];
     * if (!fDocument || !paragraph) throw new Error('Document paragraph not found.');
     *
     * const fShape = fDocument.insertShape({
     *   shapeType: univerAPI.Enum.ShapeTypeEnum.Ellipse,
     *   placement: {
     *     // This overlay does not reserve text-layout space and can cover body text.
     *     wrappingStyle: univerAPI.Enum.TextWrappingStyle.IN_FRONT_OF_TEXT,
     *     anchor: {
     *       paragraphId: paragraph.getId(),
     *       segmentId: paragraph.getSegmentId(),
     *     },
     *     position: { horizontalOffset: 120, verticalOffset: 24 },
     *   },
     *   transform: { width: 180, height: 100 },
     * });
     * if (!fShape) throw new Error('Shape could not be inserted.');
     * fShape.getText().setText('Foreground note');
     * ```
     * @example Insert a background Shape behind document text
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const paragraph = fDocument?.getParagraphs()[0];
     * if (!fDocument || !paragraph) throw new Error('Document paragraph not found.');
     *
     * const fShape = fDocument.insertShape({
     *   shapeType: univerAPI.Enum.ShapeTypeEnum.Rect,
     *   placement: {
     *     // Text does not reflow, so use a low-contrast fill that preserves readability.
     *     wrappingStyle: univerAPI.Enum.TextWrappingStyle.BEHIND_TEXT,
     *     anchor: {
     *       paragraphId: paragraph.getId(),
     *       segmentId: paragraph.getSegmentId(),
     *     },
     *     position: { horizontalOffset: 72, verticalOffset: 12 },
     *   },
     *   transform: { width: 320, height: 120 },
     *   shapeData: {
     *     fill: { fillType: univerAPI.Enum.ShapeFillEnum.SolidFill, color: '#dbeafe' },
     *   },
     * });
     * if (!fShape) throw new Error('Shape could not be inserted.');
     * fShape.setSelectable(false);
     * ```
     */
    insertShape(input: IDocShapeCreateInput): FShape | FConnectorShape | null;
    /**
     * Returns a document Shape by its stable identifier.
     * @returns {FShape | FConnectorShape | null} The Shape facade, or `null` when it does not exist.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const fShape = fDocument.getShape('shape-1');
     * console.log(fShape);
     * ```
     */
    getShape(shapeId: string): FShape | FConnectorShape | null;
    /**
     * Returns all Shapes and Connectors in document drawing order.
     * @returns {Array<FShape | FConnectorShape>} The Shape facades in document drawing order.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const fShapes = fDocument.getShapes();
     * console.log(fShapes);
     * ```
     */
    getShapes(): Array<FShape | FConnectorShape>;
}
export declare class FDocumentShapeMixin extends FDocument implements IFDocumentShapeMixin {
    insertShape(input: IDocShapeCreateInput): FShape | FConnectorShape | null;
    getShape(shapeId: string): FShape | FConnectorShape | null;
    getShapes(): Array<FShape | FConnectorShape>;
    private _getShapeScope;
    private _getShapeAdapter;
    private _createShapeHandle;
}
declare module '@univerjs/docs/facade' {
    interface FDocument extends IFDocumentShapeMixin {
    }
}
