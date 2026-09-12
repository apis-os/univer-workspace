export type BaseDuplicateTableMode = 'configurations' | 'records';
export interface IBaseDuplicateTableDialogProps {
    open: boolean;
    name: string;
    nameValid?: boolean;
    nameError?: string;
    mode: BaseDuplicateTableMode;
    onNameChange: (name: string) => void;
    onModeChange: (mode: BaseDuplicateTableMode) => void;
    onCancel: () => void;
    onConfirm: () => void;
}
export declare function BaseDuplicateTableDialog({ open, name, nameValid, nameError, mode, onNameChange, onModeChange, onCancel, onConfirm, }: IBaseDuplicateTableDialogProps): import("react").JSX.Element | null;
