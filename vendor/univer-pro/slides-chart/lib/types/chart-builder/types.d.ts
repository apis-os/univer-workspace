import type { ChartDataSourceValue, IChartCreateConfig, IChartDataSourceInput, IChartDescription, IChartInfo } from '@univerjs-pro/engine-chart';
import type { IShapeLineStyle } from '@univerjs-pro/engine-shape';
import type { ISlidePlaceholderData } from '@univerjs-pro/slides';
export interface ISlideChartCreateSpec extends IChartCreateConfig {
    id?: string;
    elementId?: string;
    dataSourceId?: string;
    data: ChartDataSourceValue[][] | {
        values: ChartDataSourceValue[][];
        name?: string;
    };
    dataSource?: IChartDataSourceInput;
    position?: {
        x: number;
        y: number;
    };
    size?: {
        width: number;
        height: number;
    };
    placeholder?: ISlidePlaceholderData;
    stroke?: IShapeLineStyle;
}
export interface ISlideChartInfo extends IChartInfo<IChartDataSourceInput> {
    placeholder?: ISlidePlaceholderData;
    stroke?: IShapeLineStyle;
    zOrder?: number;
}
export interface ISlideChartDescription extends IChartDescription {
    data: ChartDataSourceValue[][];
    position: {
        x: number;
        y: number;
    };
    size: {
        width: number;
        height: number;
    };
    placeholder?: ISlidePlaceholderData;
    stroke?: IShapeLineStyle;
    zOrder?: number;
}
