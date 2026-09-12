import { DocChartInsertAnchorKind } from '@univerjs-pro/docs-chart';
import { PositionedObjectLayoutType } from '@univerjs/core';
import { FEnum } from '@univerjs/core/facade';
/**
 * Document Chart facade enums exposed through `univerAPI.Enum`.
 *
 * @ignore
 */
export interface IFDocumentChartEnumMixin {
    /**
     * Document insertion anchors accepted by a Document Chart builder's `setPosition()` method.
     *
     * Use `Selection` for the active text selection or an explicit body offset for deterministic insertion.
     *
     * @example
     * ```javascript
     * const fDocument = univerAPI.getActiveDocument();
     * const chartInfo = fDocument
     *   .newChart(univerAPI.Enum.ChartTypeString.Column)
     *   .setSource([
     *     ['Quarter', 'Sales'],
     *     ['Q1', 120],
     *     ['Q2', 180],
     *   ])
     *   .setPosition({
     *     kind: univerAPI.Enum.DocsChartInsertAnchorKind.BodyOffset,
     *     offset: 0,
     *   })
     *   .setInline()
     *   .setSize(640, 360)
     *   .build();
     * await fDocument.insertChart(chartInfo);
     * ```
     */
    DocsChartInsertAnchorKind: typeof DocChartInsertAnchorKind;
    /**
     * Document text-layout modes accepted by Chart layout APIs.
     *
     * Prefer `INLINE`, `WRAP_SQUARE`, or `WRAP_TOP_AND_BOTTOM`. `WRAP_NONE` is a foreground overlay that can cover
     * text. Contour wrapping modes require metadata that the document Chart Facade does not provide.
     *
     * @example
     * ```javascript
     * const fDocument = univerAPI.getActiveDocument();
     * const chartInfo = fDocument
     *   .newChart(univerAPI.Enum.ChartTypeString.Line)
     *   .setSource([
     *     ['Month', 'Sales'],
     *     ['Jan', 120],
     *     ['Feb', 180],
     *   ])
     *   .setLayout({
     *     layoutType: univerAPI.Enum.DocsChartLayoutType.WRAP_SQUARE,
     *     position: { x: 120, y: 80 },
     *     width: 640,
     *     height: 360,
     *   })
     *   .build();
     * await fDocument.insertChart(chartInfo);
     * ```
     */
    DocsChartLayoutType: typeof PositionedObjectLayoutType;
}
/** @ignore */
export declare class FDocumentChartEnumMixin extends FEnum implements IFDocumentChartEnumMixin {
    get DocsChartInsertAnchorKind(): typeof DocChartInsertAnchorKind;
    get DocsChartLayoutType(): typeof PositionedObjectLayoutType;
}
declare module '@univerjs/core/facade' {
    interface FEnum extends IFDocumentChartEnumMixin {
    }
}
