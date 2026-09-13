import type { ChartDataSourceValue, ChartStyle, ChartTypeBits, IChartDataAggregation, IChartResourceContext } from '@univerjs-pro/engine-chart';
export interface IDocChartPreviewProps {
    values: ChartDataSourceValue[][];
    chartType: ChartTypeBits;
    context?: IChartResourceContext;
    dataAggregation?: IChartDataAggregation;
    style?: ChartStyle;
}
export declare function DocChartPreview(props: IDocChartPreviewProps): import("react").JSX.Element;
