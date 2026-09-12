import type { TreemapParentLabelLayout } from '../../enum';
import type { DeepNullish, IChartTreemapLabelSpec } from '../../types';
export declare const setTreemapHierarchyFields: (indexes: readonly number[]) => import("./chart-config-operation").IChartConfigOperation;
export declare const setTreemapValueField: (index: number) => import("./chart-config-operation").IChartConfigOperation;
export declare const setTreemapParentLabelLayout: (layout: TreemapParentLabelLayout) => import("./chart-config-operation").IChartConfigOperation;
export declare const resetTreemapParentLabelLayout: () => import("./chart-config-operation").IChartConfigOperation;
export declare const setTreemapLabel: (label: DeepNullish<IChartTreemapLabelSpec>) => import("./chart-config-operation").IChartConfigOperation;
export declare const resetTreemapLabel: () => import("./chart-config-operation").IChartConfigOperation;
