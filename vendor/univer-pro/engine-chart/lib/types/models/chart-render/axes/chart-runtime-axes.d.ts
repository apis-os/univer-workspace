import type { ChartDirection, ChartStyle, IChartContext, IRuntimeAxis } from '../../../types';
import { ChartTypeBits } from '../../../enum';
export interface IGetChartRuntimeAxesParams {
    chartType: ChartTypeBits;
    context?: Pick<IChartContext, 'categoryIndexes' | 'categoryType' | 'seriesIndexes' | 'useDateAxis'>;
    style?: ChartStyle;
    direction?: ChartDirection;
}
/**
 * Builds the transient axis model consumed by chart converters.
 *
 * Persisted `ChartStyle` axis options are semantic buckets, while converters and
 * style operators consume axes by physical `position`, value `type`, and runtime
 * `priority`. This function centralizes the mapping from chart type, data
 * context, per-series secondary-axis switches, and document direction. The
 * returned priorities are runtime-only roles and should not be treated as the
 * persisted `yAxis` / `rightYAxis` bucket names.
 *
 * Cases handled here:
 * - Heatmap always returns two text axes because both dimensions come from
 *   `heatmapData`; the vertical axis is left in LTR and right in RTL, while the
 *   bottom axis remains text.
 * - Horizontal bar charts use a vertical primary category axis, left in LTR and
 *   right in RTL, plus a numeric bottom axis. If the normal source context has
 *   no category, the category axis is still kept so ECharts can use implicit
 *   row-index categories and every cartesian series has both axes.
 * - Scatter charts use a numeric bottom axis for linear X fields and enabled
 *   date axes, and a text bottom axis for string, disabled-date, or implicit X
 *   fields. Bubble charts always use a numeric bottom axis. Their vertical value
 *   axis still follows the normal RTL and secondary-axis visibility rules.
 * - Other vertical category/value charts use a bottom text axis when a category
 *   exists. Their left/right value axes are derived from
 *   `allSeriesStyle.rightYAxis` and `seriesStyleMap[*].rightYAxis`; RTL merges
 *   `RTLChartStyle` first so the default value axis is physical right unless a
 *   user override brings the left axis back.
 * - Pareto keeps its Excel-like sorted layout. RTL does not apply default axis
 *   mirroring, and the right value axis is always available.
 */
export declare function getChartRuntimeAxes(params: IGetChartRuntimeAxesParams): IRuntimeAxis[];
