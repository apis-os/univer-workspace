import type { IChartEditPanelRoute } from '@univerjs-pro/chart-ui';
export declare const DOC_CHART_EDITOR_DIALOG_COMPONENT = "doc-chart.editor-dialog";
export declare const DOC_CHART_EDITOR_DIALOG_ID = "doc-chart.dialog.editor";
export interface IDocChartEditorDialogProps {
    unitId: string;
    chartId: string;
    drawingId?: string;
    route?: IChartEditPanelRoute;
    onClose?: () => void;
}
export declare function DocChartEditorDialog(props: IDocChartEditorDialogProps): import("react").JSX.Element;
