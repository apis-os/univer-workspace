export interface IBaseDeleteConfirmDialogProps {
    open: boolean;
    title: string;
    description?: string;
    onCancel: () => void;
    onConfirm: () => void;
}
export declare function BaseDeleteConfirmDialog({ open, title, description, onCancel, onConfirm, }: IBaseDeleteConfirmDialogProps): import("react").JSX.Element | null;
