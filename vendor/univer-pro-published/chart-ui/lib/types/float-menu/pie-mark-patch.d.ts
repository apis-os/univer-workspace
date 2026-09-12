import type { ChartPendingConfig } from '@univerjs-pro/engine-chart';
import type { ChartMarkDirectEditTarget } from './types';
export interface IPieDirectStylePatch {
    color?: string | null;
    fillOpacity?: number;
}
export declare function buildPieDirectStylePatch(pie: ChartPendingConfig['pie'] | undefined, directEdit: ChartMarkDirectEditTarget | undefined, patch: IPieDirectStylePatch): ChartPendingConfig['pie'] | undefined;
export declare function buildPieConnectorPatch(pie: ChartPendingConfig['pie'] | undefined, patch: NonNullable<NonNullable<NonNullable<ChartPendingConfig['pie']>['composite']>['secondaryPlot']>['connector']): ChartPendingConfig['pie'];
