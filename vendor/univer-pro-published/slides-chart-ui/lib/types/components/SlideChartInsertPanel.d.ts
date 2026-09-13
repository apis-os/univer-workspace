import type { ISlideChartInsertOptions } from '../services/slide-chart-insert.service';
import { ChartTypeBits } from '@univerjs-pro/engine-chart';
export declare const SLIDE_CHART_INSERT_PANEL_COMPONENT = "slide-chart.insert-panel";
export interface ISlideChartInsertPanelProps {
    defaultChartType?: ChartTypeBits;
    defaultTableText?: string;
    insertOptions?: ISlideChartInsertOptions;
    onCancel?: () => void;
    onInserted?: () => void;
}
export declare function SlideChartInsertPanel(props: ISlideChartInsertPanelProps): import("react").JSX.Element;
