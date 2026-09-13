import { DocShapeAnchorPosition } from '@univerjs-pro/docs-shape';
export interface IFDocShapeEnumMixin {
    /**
     * Paragraph-relative insertion positions accepted by `FDocument.insertShape()`.
     * @example
     * ```ts
     * const document = univerAPI.getActiveDocument();
     * const paragraph = document?.getParagraphs()[0];
     * if (!document || !paragraph) throw new Error('Document paragraph not found.');
     * document.insertShape({
     *   shapeType: univerAPI.Enum.ShapeTypeEnum.Rect,
     *   placement: {
     *     wrappingStyle: univerAPI.Enum.TextWrappingStyle.INLINE,
     *     anchor: {
     *       paragraphId: paragraph.getId(),
     *       segmentId: paragraph.getSegmentId(),
     *       position: univerAPI.Enum.DocShapeAnchorPosition.OFFSET,
     *       offset: 0,
     *     },
     *   },
     * });
     * ```
     */
    DocShapeAnchorPosition: typeof DocShapeAnchorPosition;
}
declare module '@univerjs/core/facade' {
    interface FEnum extends IFDocShapeEnumMixin {
    }
}
