import type { IFilterConfig } from '@univerjs/core';
import type { IBaseMenuFieldItem } from '../../panels/field-config/field-config-model';
export declare function FilterPanel(props: {
    fields: IBaseMenuFieldItem[];
    filter?: IFilterConfig | null;
    onApply: (filter: IFilterConfig) => void;
    onClear: () => void;
}): import("react").JSX.Element;
