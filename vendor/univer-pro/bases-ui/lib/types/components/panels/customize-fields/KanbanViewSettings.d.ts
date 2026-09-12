import type { IViewSnapshot } from '@univerjs/core';
import type { IBaseMenuFieldItem } from '../field-config/field-config-model';
export declare function KanbanGroupMenu(props: {
    fields: IBaseMenuFieldItem[];
    tableId: string;
    groupFieldId: string;
    onApply: (fieldId: string) => void;
}): import("react").JSX.Element;
export declare function CustomizeKanbanMenu(props: {
    fields: IBaseMenuFieldItem[];
    view: IViewSnapshot;
    onUpdate: (patch: Record<string, unknown>) => void;
    onEditField: (fieldId: string) => void;
    onNewField?: () => void;
    title: string;
    rootDataComp?: string;
    showCardSize?: boolean;
}): import("react").JSX.Element;
export declare function KanbanColumnColorMenu(props: {
    color?: string;
    onChange: (color: string) => void;
    disabled?: boolean;
}): import("react").JSX.Element;
export declare function KanbanColumnTitleMenu(props: {
    title: string;
    onSave: (title: string) => void;
    onCancel: () => void;
    disabled?: boolean;
}): import("react").JSX.Element;
