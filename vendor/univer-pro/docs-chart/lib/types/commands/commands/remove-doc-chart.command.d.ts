import type { ICommand } from '@univerjs/core';
export declare const DOC_CHART_REMOVE_DRAWING_COMMAND_ID = "doc.command.remove-doc-image";
export interface IRemoveDocChartCommandParams {
    unitId: string;
    drawingId: string;
    chartId?: string;
}
export declare const RemoveDocChartCommand: ICommand<IRemoveDocChartCommandParams>;
