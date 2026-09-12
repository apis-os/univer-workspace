import type { DeepNullish, IChartSunburstCenterLabelSpec, IChartSunburstLabelSpec, IChartSunburstSpec } from '@univerjs-pro/engine-chart';
import { LabelContentType } from '@univerjs-pro/engine-chart';
/** Authored label content options supported by Sunburst. */
export declare const SUNBURST_LABEL_CONTENT_TYPES: readonly [LabelContentType.CategoryName, LabelContentType.Value];
export declare function resolveEffectiveSunburstLabel(style: DeepNullish<IChartSunburstSpec> | undefined): IChartSunburstLabelSpec;
export declare function resolveEffectiveSunburstCenterLabel(style: DeepNullish<IChartSunburstSpec> | undefined): IChartSunburstCenterLabelSpec;
export declare function getSunburstLabelContentValues(contentType: LabelContentType | null | undefined): string[];
export declare function mergeSunburstLabelContentTypes(values: string[]): LabelContentType | undefined;
