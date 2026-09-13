import { ExchangeFormat } from '../../services/request.service';
export declare const EXPORT_FORMAT_DIALOG = "exchange-client.export-format-dialog";
export interface IExchangeTargetItem {
    label: string;
    value: string;
}
export interface IExportFormatDialogProps {
    formats: ExchangeFormat[];
    items: IExchangeTargetItem[];
    selectedId: string;
    onCancel: () => void;
    onConfirm: (format: ExchangeFormat, selectedId: string) => void | Promise<void>;
}
export declare function ExportFormatDialog({ formats, items, selectedId: initialSelectedId, onCancel, onConfirm, }: IExportFormatDialogProps): import("react").JSX.Element;
