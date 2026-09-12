export declare const BOARD_CHART_DATA_EDITOR_DIALOG_COMPONENT = "board-chart.data-editor-dialog";
export declare const BOARD_CHART_DATA_EDITOR_DIALOG_ID = "board-chart.dialog.data-editor";
export interface IBoardChartDataEditorDialogProps {
    chartId: string;
    unitId: string;
    onClose?: () => void;
}
export interface IBoardChartDataEditorProps {
    chartId: string;
    unitId: string;
}
export declare function BoardChartDataEditor(props: IBoardChartDataEditorProps): import("react").JSX.Element;
export declare function BoardChartDataEditorDialog(props: IBoardChartDataEditorDialogProps): import("react").JSX.Element;
