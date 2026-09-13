import type { ISlideTableFill } from '@univerjs-pro/slides-table';
import type { IDocTextFill } from '@univerjs/core';
import type { IGradientValue } from '@univerjs/design';
import type { CSSProperties, ReactNode } from 'react';
declare const TABLE_FILL_TYPE_VALUES: {
    readonly none: "none";
    readonly solid: "solid";
    readonly gradient: "gradient";
    readonly picture: "picture";
};
type TableFillType = typeof TABLE_FILL_TYPE_VALUES[keyof typeof TABLE_FILL_TYPE_VALUES];
export declare function FillDropdownButton(props: {
    children: ReactNode;
    color: string;
    gradientValue: IGradientValue;
    previewStyle: CSSProperties;
    mixed?: boolean;
    label?: string;
    showPreview?: boolean;
    tableFill?: ISlideTableFill;
    textFill?: IDocTextFill;
    open: boolean;
    value: TableFillType;
    onOpenChange: (open: boolean) => void;
    onTableFillChange?: (fill: ISlideTableFill | undefined) => void;
    onTextFillChange?: (fill: IDocTextFill | undefined) => void;
}): import("react").JSX.Element;
export {};
