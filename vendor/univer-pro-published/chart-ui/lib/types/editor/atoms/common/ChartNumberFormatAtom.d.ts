import type { ComponentType, ReactNode } from 'react';
export interface IChartNumberFormatAtomProps {
    label: ReactNode;
    value: string | null | undefined;
    onChange: (value: string | null | undefined) => void;
}
export type ChartNumberFormatFieldComponent = ComponentType<IChartNumberFormatAtomProps>;
export declare function ChartNumberFormatTextField(props: IChartNumberFormatAtomProps): import("react").JSX.Element;
export declare function ChartNumberFormatAtom(props: IChartNumberFormatAtomProps): import("react").JSX.Element;
