import type { ISlideTableFill } from '@univerjs-pro/slides-table';
import type { IGradientValue } from '@univerjs/design';
import type { CSSProperties } from 'react';
export declare function getSlideTableGradientValue(fill: ISlideTableFill | undefined, fallbackColor: string): IGradientValue;
export declare function gradientValueToSlideTableFill(value: IGradientValue): ISlideTableFill;
export declare function getSlideTableFillPreviewStyle(fill: ISlideTableFill | undefined, fallbackColor: string): CSSProperties;
export declare function gradientValueToCss(value: IGradientValue): string;
export declare function ensureOption(options: Array<{
    label: string;
    value: string;
}>, value: string): Array<{
    label: string;
    value: string;
}>;
