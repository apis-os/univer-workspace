export interface IAddRecordButtonProps {
    disabled?: boolean;
    onAdd: (anchor?: HTMLElement) => void;
}
export declare function AddRecordButton({ disabled, onAdd }: IAddRecordButtonProps): import("react").JSX.Element;
