import type { IBaseMenuFieldItem } from '../field-config/field-config-model';
export declare function runFieldRowControlClick(event: {
    stopPropagation: () => void;
}, action?: () => void): void;
export declare function FieldStatsMenu(props: {
    options: Array<{
        type: string;
        label: string;
    }>;
    currentType: string;
    onSelect: (type: string) => void;
    onClose?: () => void;
    disabled?: boolean;
}): import("react").JSX.Element;
export declare function CustomizeFieldMenu(props: {
    fields: IBaseMenuFieldItem[];
    showDragHandles?: boolean;
    onToggleVisible: (fieldId: string) => void;
    onEdit: (fieldId: string) => void;
    onMore?: (fieldId: string, anchor: HTMLElement) => void;
    onMoveField?: (fieldId: string, target: {
        beforeFieldId?: string;
        afterFieldId?: string;
    }) => void;
    onAddFieldToGroup?: (fieldId: string) => void;
    onDelete?: (fieldId: string) => void;
    onNewField: () => void;
}): import("react").JSX.Element;
export declare function BaseFieldDescriptionPanel(props: {
    fieldName: string;
    value?: string;
    onSave: (value: string) => void;
    onCancel: () => void;
}): import("react").JSX.Element;
