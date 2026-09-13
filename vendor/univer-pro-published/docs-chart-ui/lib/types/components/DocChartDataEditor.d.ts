import type { ChartDataSourceValue, IChartDataSourceInput, IChartResourceDataSource } from '@univerjs-pro/engine-chart';
export declare const DOC_CHART_DATA_EDITOR_COMPONENT = "doc-chart.data-editor";
export declare const DOC_CHART_DATA_EDITOR_DIALOG_ID = "doc-chart.dialog.data-editor";
export declare enum DocChartDataEditorSubmitMode {
    SHARED = "shared",
    DUPLICATE = "duplicate"
}
export interface IDocChartDataEditorProps {
    values: ChartDataSourceValue[][];
    dataSource?: IChartResourceDataSource;
    sharingCount?: number;
    onCancel?: () => void;
    onChange?: (values: ChartDataSourceValue[][]) => void;
    onSubmit: (values: ChartDataSourceValue[][], mode: DocChartDataEditorSubmitMode) => void;
    onDataSourceSubmit?: (input: IChartDataSourceInput) => void;
}
export declare function DocChartDataEditor(props: IDocChartDataEditorProps): import("react").JSX.Element;
