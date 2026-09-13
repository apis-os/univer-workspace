import type { IChartElementHit } from '@univerjs-pro/engine-chart';
import type { ChartAxisId, ChartElementConfigTarget, ChartTitleKey } from '../../float-menu/types';
import { ChartEditPanelSection, ChartEditPanelTab } from '../../float-menu/types';
export interface IChartEditPanelRoute {
    axisId?: ChartAxisId;
    section?: ChartEditPanelSection;
    seriesId?: string;
    tab: ChartEditPanelTab;
    titleKey?: ChartTitleKey;
}
export interface IChartPanelRouteState {
    chartId: string;
    route: IChartEditPanelRoute | null;
}
export interface IChartSelectedElementState {
    chartId: string;
    element: IChartElementHit;
    route: IChartEditPanelRoute;
    target: ChartElementConfigTarget;
}
export declare function resolveChartEditPanelRoute(target: ChartElementConfigTarget): IChartEditPanelRoute | undefined;
