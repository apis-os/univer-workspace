import type { IChartImageExportOptions } from '@univerjs-pro/chart-ui';
import { FChart } from '@univerjs-pro/engine-chart/facade';
export interface IFChartUIMixin<TChart = FChart<never>> {
    /**
     * Exports this Chart through its host UI renderer.
     * @returns {Promise<string | undefined>} The rendered image data URL, or `undefined` when the host has no exportable UI image.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const chart = fWorksheet.getCharts()[0];
     * const defaultPng = await chart?.exportImage();
     * const svg = await chart?.exportImage({ format: 'svg' });
     * ```
     */
    exportImage(this: TChart, options?: IChartImageExportOptions): Promise<string | undefined>;
}
declare module '@univerjs-pro/engine-chart/facade' {
    interface FChart<TSource, TDataSource, TInfo, TExtension> extends IFChartUIMixin<FChart<TSource, TDataSource, TInfo, TExtension>> {
    }
}
