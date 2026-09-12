import type { IViewSnapshot } from '@univerjs/core';
import type { IBaseMenuFieldItem } from '../field-config/field-config-model';
export declare function GanttViewSettingsMenu(props: {
    fields: IBaseMenuFieldItem[];
    view: IViewSnapshot;
    onUpdate: (patch: Record<string, unknown>) => void;
}): import("react").JSX.Element;
