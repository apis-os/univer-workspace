import type { FieldHeaderMenuAction } from './menu-actions';
export declare function FieldHeaderMenu(props: {
    disabled?: boolean;
    fieldName: string;
    primary?: boolean;
    onAction: (action: FieldHeaderMenuAction) => void;
    onClose?: () => void;
}): import("react").JSX.Element;
