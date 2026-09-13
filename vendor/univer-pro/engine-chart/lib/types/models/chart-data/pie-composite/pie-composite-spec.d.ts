import type { IChartPieCompositeSpec, PieSecondaryPlotType } from '../../../chart-builder/chart-types';
import type { DeepNullish } from '../../../types';
import { ChartBorderDashType } from '../../../enum';
export declare const PIE_COMPOSITE_MIN_SOURCE_POINT_COUNT = 2;
export declare const PIE_AUTO_SPLIT_DIVISOR = 3;
export declare const PIE_PERCENTAGE_WHOLE = 100;
export declare const PIE_SECONDARY_SIZE_MIN = 5;
export declare const PIE_SECONDARY_SIZE_MAX = 200;
export declare const PIE_SECONDARY_SIZE_DEFAULT = 75;
export declare const PIE_SECONDARY_GAP_WIDTH_MIN = 0;
export declare const PIE_SECONDARY_GAP_WIDTH_MAX = 500;
export declare const PIE_SECONDARY_GAP_WIDTH_DEFAULT = 150;
export declare const PIE_POSITION_SPLIT_COUNT_MIN = 1;
export declare const PIE_POSITION_SPLIT_COUNT_DEFAULT = 2;
export declare const PIE_VALUE_SPLIT_LESS_THAN_DEFAULT = 0;
export declare const PIE_PERCENTAGE_SPLIT_LESS_THAN_DEFAULT = 10;
export declare const PIE_AGGREGATE_COLOR_DEFAULT = "#D9D9D9";
export declare const PIE_CONNECTOR_VISIBLE_DEFAULT = true;
export declare const PIE_CONNECTOR_COLOR_DEFAULT = "#8C8C8C";
export declare const PIE_CONNECTOR_WIDTH_DEFAULT = 1;
export declare const PIE_CONNECTOR_OPACITY_DEFAULT = 1;
export declare const PIE_CONNECTOR_DASH_TYPE_DEFAULT = ChartBorderDashType.Solid;
export declare const PIE_COMPOSITE_SECONDARY_PLOT_REQUIRED_ERROR = "Active Pie composite requires a secondary plot with type \"pie\" or \"bar\".";
export declare const PIE_COMPOSITE_INVALID_VALUE_ERROR_PREFIX = "Invalid Pie composite value";
export declare function assertPieCompositePatch(current: DeepNullish<IChartPieCompositeSpec> | null | undefined, patch: DeepNullish<IChartPieCompositeSpec> | null | undefined): void;
/**
 * Composite Pie fields were added to the persisted Pie style additively.
 * Historical snapshots omit `composite`, and an abandoned transition shape can
 * omit `enabled`; both remain disabled without materializing persisted defaults.
 */
export declare function resolveActivePieComposite(pie: {
    composite?: {
        enabled?: boolean | null;
        secondaryPlot?: {
            type?: PieSecondaryPlotType | null;
        } | null;
    } | null;
} | null | undefined): IChartPieCompositeSpec | undefined;
