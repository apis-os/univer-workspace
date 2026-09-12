import type { ChartSourceDescription, ChartSourceSpec, IChartLayoutPatch } from './types';
export interface ISheetChartDescriptionExtension {
    source?: ChartSourceSpec | ChartSourceDescription;
    layout?: IChartLayoutPatch;
}
