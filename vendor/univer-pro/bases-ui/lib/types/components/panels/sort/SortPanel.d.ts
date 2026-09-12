import type { ISortConfig } from '@univerjs/core';
import type { IBaseMenuFieldItem } from '../../panels/field-config/field-config-model';
export declare function SortPanel(props: {
    fields: IBaseMenuFieldItem[];
    sort?: ISortConfig[];
    onApply: (sort: ISortConfig[]) => void;
    onClear: () => void;
}): import("react").JSX.Element;
