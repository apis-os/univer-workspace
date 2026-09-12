import type { ChartDataSourceValue, IChartDataSourceInput, IChartResourceDataSource } from '@univerjs-pro/engine-chart';
export declare const SLIDE_CHART_DATA_EDITOR_COMPONENT = "slide-chart.data-editor";
export declare const SLIDE_CHART_DATA_EDITOR_DIALOG_ID = "slide-chart.dialog.data-editor";
export declare enum SlideChartDataEditorSubmitMode {
    SHARED = "shared",
    DUPLICATE = "duplicate"
}
export interface ISlideChartDataEditorProps {
    values: ChartDataSourceValue[][];
    dataSource?: IChartResourceDataSource;
    sharingCount?: number;
    onCancel?: () => void;
    onSubmit: (values: ChartDataSourceValue[][], mode: SlideChartDataEditorSubmitMode) => void;
    onDataSourceSubmit?: (input: IChartDataSourceInput) => void;
}
export declare function SlideChartDataEditor(props: ISlideChartDataEditorProps): import("react").JSX.Element;
