import type { ChartPendingConfig, IChartMappingSpec } from '@univerjs-pro/engine-chart';
import { ChartTypeBits } from '@univerjs-pro/engine-chart';
export interface IChartSemanticFieldOption {
    label: string;
    value: string;
}
export interface IChartSemanticDataFieldLabels {
    candlestick: {
        category: string;
        close: string;
        high: string;
        low: string;
        open: string;
    };
    histogramValue: string;
    treemapHierarchy: string;
    treemapValue: string;
}
export interface IChartSemanticDataFieldsProps {
    chartType: ChartTypeBits | undefined;
    mapping: NonNullable<ChartPendingConfig['mapping']>;
    fields: IChartSemanticFieldOption[];
    labels: IChartSemanticDataFieldLabels;
    onChange: (patch: Partial<IChartMappingSpec>) => void;
}
export type ChartSemanticDataFieldKind = 'candlestick' | 'histogram' | 'treemap' | 'category-series';
export declare function getChartSemanticDataFieldKind(chartType: ChartTypeBits | undefined): ChartSemanticDataFieldKind;
export declare function ChartSemanticDataFields(props: IChartSemanticDataFieldsProps): import("react").JSX.Element | null;
