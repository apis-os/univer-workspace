import type { BaseDataModel, ICommand } from '@univerjs/core';
import { ExchangeFormat } from '@univerjs-pro/exchange-client';
export declare const BASE_EXPORT_FORMAT_DIALOG_ID = "bases-exchange-client.dialog.export-format";
export interface IExportBaseByFormatOperationParams {
    format: ExchangeFormat;
    tableId?: string;
}
export declare function createBaseExportDialogData(base: BaseDataModel, activeTableId?: string): {
    selectedId: string;
    items: {
        label: string;
        value: string;
    }[];
};
export declare const ImportBaseOperation: ICommand;
export declare const ExportBaseByFormatOperation: ICommand<IExportBaseByFormatOperationParams>;
export declare const ExportBaseOperation: ICommand;
