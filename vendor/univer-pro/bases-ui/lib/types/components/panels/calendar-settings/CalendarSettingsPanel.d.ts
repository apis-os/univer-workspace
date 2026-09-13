import type { IViewSnapshot } from '@univerjs/core';
import type { IBaseMenuFieldItem } from '../field-config/field-config-model';
export declare function CalendarEventSettingsMenu(props: {
    fields: IBaseMenuFieldItem[];
    view: IViewSnapshot;
    onUpdate: (patch: Record<string, unknown>) => void;
    onEditField: (fieldId: string) => void;
    onNewField: () => void;
}): import("react").JSX.Element;
export declare function CalendarViewSettingsMenu(props: {
    fields: IBaseMenuFieldItem[];
    view: IViewSnapshot;
    onUpdate: (patch: Record<string, unknown>) => void;
}): import("react").JSX.Element;
