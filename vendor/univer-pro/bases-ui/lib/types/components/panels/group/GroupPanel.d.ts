import type { IGroupConfig } from '@univerjs/core';
import type { IBaseMenuFieldItem } from '../../panels/field-config/field-config-model';
export declare function GroupPanel(props: {
    fields: IBaseMenuFieldItem[];
    groups?: IGroupConfig[];
    isGroupable: (field: IBaseMenuFieldItem) => boolean;
    onApply: (groups: IGroupConfig[]) => void;
    onClear: () => void;
}): import("react").JSX.Element;
