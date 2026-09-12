import type { IDocumentChartInfo } from '@univerjs-pro/docs-chart';
import type { ChartDataSourceValue, IChartDataSourceInput, IResourceRefChartDataSourceInput } from '@univerjs-pro/engine-chart';
import type { DocumentDataModel, Injector } from '@univerjs/core';
import type { IDocumentChartMethods } from './f-document';
import { FChart } from '@univerjs-pro/engine-chart/facade';
/**
 * Live facade for an inserted Document Chart drawing.
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
 *     ['Mar', 160],
 *   ])
 *   .setFloating()
 *   .setAbsolutePosition(120, 80)
 *   .setSize(640, 360)
 *   .setLineStyle({ width: 2 })
 *   .build();
 * const fChart = await fDocument.insertChart(chartInfo);
 *
 * console.log(fChart.getId(), fChart.getDrawingId(), fChart.getInfo());
 * fChart
 *   .setTitle('Monthly sales')
 *   .setAbsolutePosition(160, 100)
 *   .setSize(720, 400);
 * await fChart.setDataSource([
 *   ['Month', 'Sales'],
 *   ['Apr', 200],
 *   ['May', 240],
 *   ['Jun', 220],
 * ]);
 *
 * const updatedInfo = fChart
 *   .toBuilder(univerAPI.Enum.ChartTypeString.Area)
 *   .setSubtitle('Second quarter')
 *   .build();
 * await fChart.update(updatedInfo);
 * ```
 *
 * @hideconstructor
 */
export declare class FDocumentChart extends FChart<ChartDataSourceValue[][] | IResourceRefChartDataSourceInput, IChartDataSourceInput, IDocumentChartInfo, IDocumentChartMethods> {
    private readonly _documentDataModel;
    private readonly _drawingId;
    private readonly _chartId;
    /** The identifier of the Document that owns this Chart. */
    readonly unitId: string;
    constructor(_documentDataModel: DocumentDataModel, _drawingId: string, _chartId: string, _injector: Injector);
    /**
     * Returns the stable Document drawing identifier that hosts this Chart.
     *
     * @returns {string} The Document drawing identifier.
     * @example
     * ```javascript
     * const fDocument = univerAPI.getActiveDocument();
     * const fChart = fDocument.getCharts()[0];
     * console.log(fChart.getDrawingId());
     * ```
     */
    getDrawingId(): string;
}
