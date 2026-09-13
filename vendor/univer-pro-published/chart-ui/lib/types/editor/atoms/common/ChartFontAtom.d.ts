import type { ReactNode } from 'react';
import type { IChartFontValue } from '../../components/ChartFontField';
import type { IChartSelectFieldOption } from '../../components/ChartSelectField';
interface IChartFontSource<TAlign extends string> {
    align?: TAlign | null;
    bold?: boolean | null;
    color?: string | null;
    fontSize?: number | null;
    italic?: boolean | null;
}
export declare const DEFAULT_CHART_FONT_VALUE: IChartFontValue;
export declare function normalizeChartFontValue<TAlign extends string = string>(value: IChartFontSource<TAlign> | null | undefined, defaults: IChartFontValue<TAlign>): IChartFontValue<TAlign>;
export declare function toChartFontStyle(value: Partial<IChartFontValue>): {
    bold?: boolean | undefined;
    color?: string | null | undefined;
    fontSize?: number | null | undefined;
    italic?: boolean | undefined;
};
export interface IChartFontAtomProps<TAlign extends string = string> {
    alignLabel?: ReactNode;
    alignOptions?: ReadonlyArray<IChartSelectFieldOption<TAlign>>;
    colorPickerFallbackValue: string;
    label: ReactNode;
    value: IChartFontValue<TAlign>;
    onChange: (patch: Partial<IChartFontValue<TAlign>>) => void;
}
export declare function ChartFontAtom<TAlign extends string = string>(props: IChartFontAtomProps<TAlign>): import("react").JSX.Element;
export {};
