import type { ChartColor } from '@univerjs-pro/engine-chart';
import type { Nullable } from '@univerjs/core';
import type { ReactElement } from 'react';
export interface IColorPickerControlProps {
    ariaLabel?: string;
    color: Nullable<ChartColor>;
    compact?: boolean;
    onChange?: (color: Nullable<string>) => void;
}
export declare function ColorPickerControl(props: IColorPickerControlProps): ReactElement;
