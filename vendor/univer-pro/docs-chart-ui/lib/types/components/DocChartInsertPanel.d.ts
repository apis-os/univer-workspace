import type { IDocChartInsertOptions, IDocChartInsertResult } from '../services/doc-chart-insert.service';
import { ChartTypeBits } from '@univerjs-pro/engine-chart';
export declare const DOC_CHART_INSERT_PANEL_COMPONENT = "doc-chart.insert-panel";
export interface IDocChartInsertPanelProps {
    defaultChartType?: ChartTypeBits;
    defaultTableText?: string;
    insertOptions?: IDocChartInsertOptions;
    onCancel?: () => void;
    onInserted?: (result: IDocChartInsertResult) => void;
}
export declare function DocChartInsertPanel(props: IDocChartInsertPanelProps): import("react").JSX.Element;
