import type { ChartNumberFormatFieldComponent } from '../../atoms/common/ChartNumberFormatAtom';
import { LabelContentType, PieLabelPosition } from '@univerjs-pro/engine-chart';
export interface IChartPieDefaultValues {
    borderColor: string;
    doughnutHole: number;
    hasPaddingAngle: boolean;
    isHalfPie: boolean;
    labelContentType: LabelContentType;
    labelPosition: PieLabelPosition;
    labelVisible: boolean;
    pieHole: number;
    rosePie: boolean;
    showLabelLine: boolean;
    textColor: string;
    valueScale: number;
}
export declare const DEFAULT_CHART_PIE_VALUES: IChartPieDefaultValues;
export declare function ChartPieStyleSection(props: {
    defaultValues: IChartPieDefaultValues;
    NumberFormatField?: ChartNumberFormatFieldComponent;
}): import("react").JSX.Element | null;
