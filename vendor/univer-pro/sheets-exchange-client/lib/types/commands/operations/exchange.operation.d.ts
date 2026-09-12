import type { ICommand, Workbook } from '@univerjs/core';
import { ExchangeFormat } from '@univerjs-pro/exchange-client';
export declare const SHEET_EXPORT_FORMAT_DIALOG_ID = "sheets-exchange-client.dialog.export-format";
export interface IExportSheetByFormatOperationParams {
    format: ExchangeFormat;
    sheetId?: string;
}
export declare function createSheetExportDialogData(workbook: Workbook): {
    selectedId: string;
    items: {
        label: string;
        value: string;
    }[];
};
export declare const ImportSheetOperation: ICommand;
export declare const ExportSheetByFormatOperation: ICommand<IExportSheetByFormatOperationParams>;
export declare const ExportSheetOperation: ICommand;
