import type { IBaseMenuFieldItem } from '../../panels/field-config/field-config-model';
export declare function FieldSelect(props: {
    value: string;
    fields: IBaseMenuFieldItem[];
    predicate?: (field: IBaseMenuFieldItem) => boolean;
    placeholder?: string;
    className?: string;
    onChange: (value: string) => void;
}): import("react").JSX.Element;
export declare function FieldSelectLabel(props: {
    field: IBaseMenuFieldItem;
}): import("react").JSX.Element;
