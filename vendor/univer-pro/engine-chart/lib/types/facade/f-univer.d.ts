import type { IEchartTheme } from '@univerjs-pro/engine-chart';
import { FUniver } from '@univerjs/core/facade';
/** @ignore */
export interface IFUniverChartMixin {
    /**
     * Registers a Chart theme in this Univer runtime.
     *
     * The theme is shared by Sheet, Slide, Document, and Board Charts. Use the
     * same `name` with a Chart builder's `setTheme()` method to apply it.
     * Registering the same name again replaces the previous theme.
     *
     * @param {string} name The stable name used by Chart builders.
     * @param {IEchartTheme} theme The complete Chart theme definition.
     * @returns {void}
     * @example
     * ```ts
     * import { UniverTheme1 } from '@univerjs-pro/engine-chart';
     *
     * univerAPI.registerTheme('brand', {
     *   ...UniverTheme1,
     *   themeName: 'brand',
     *   theme: {
     *     ...UniverTheme1.theme,
     *     color: ['#1677ff', '#52c41a', '#faad14'],
     *   },
     * });
     *
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * if (!fWorkbook) throw new Error('No active workbook.');
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * if (!fWorksheet) throw new Error('Worksheet not found.');
     *
     * const chartInfo = fWorksheet
     *   .newChart(univerAPI.Enum.ChartTypeString.Column)
     *   .setSource('A1:D8')
     *   .setTheme('brand')
     *   .build();
     *
     * await fWorksheet.insertChart(chartInfo);
     * ```
     */
    registerTheme(name: string, theme: IEchartTheme): void;
}
/** @ignore */
export declare class FUniverChartMixin extends FUniver implements IFUniverChartMixin {
    registerTheme(name: string, theme: IEchartTheme): void;
}
declare module '@univerjs/core/facade' {
    interface FUniver extends IFUniverChartMixin {
    }
}
