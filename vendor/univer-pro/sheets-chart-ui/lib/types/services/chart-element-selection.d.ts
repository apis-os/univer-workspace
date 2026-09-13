import type { IChartElementSelection } from '@univerjs-pro/chart-ui';
import type { ChartModel, IChartElementHit } from '@univerjs-pro/engine-chart';
import { resolveChartEditPanelRoute } from '@univerjs-pro/chart-ui';
import { ChartTypeBits } from '@univerjs-pro/engine-chart';
export interface ISheetsChartElementSelection extends IChartElementSelection {
    route: NonNullable<ReturnType<typeof resolveChartEditPanelRoute>>;
}
export declare function supportsSheetsChartElementFloatMenu(chartType: ChartTypeBits): boolean;
export declare function resolveSheetsChartElementSelection(chartModel: ChartModel, hit: IChartElementHit): ISheetsChartElementSelection | undefined;
