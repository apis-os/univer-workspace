import type { ISlideTableFill } from '@univerjs-pro/slides-table';
import type { SlideTableFillType } from '@univerjs-pro/slides-table-ui';
import type { IGradientValue } from '@univerjs/design';
import type { CSSProperties, ReactNode } from 'react';
export declare function FillDropdownButton(props: {
    children: ReactNode;
    'data-toolbar-item': string;
    color: string;
    gradientValue: IGradientValue;
    previewStyle: CSSProperties;
    showPreview?: boolean;
    tableFill?: ISlideTableFill;
    open: boolean;
    value: SlideTableFillType;
    onOpenChange: (open: boolean) => void;
    onTableFillChange: (fill: ISlideTableFill | undefined) => void;
}): import("react").JSX.Element;
