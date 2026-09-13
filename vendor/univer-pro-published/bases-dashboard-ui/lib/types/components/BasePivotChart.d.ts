import type { IChartModelBinding } from '@univerjs-pro/engine-chart';
export interface IBasePivotChartProps {
    isRowDirection: boolean;
    runtime: IChartModelBinding;
}
export declare function BasePivotChart({ isRowDirection, runtime }: IBasePivotChartProps): import("react").JSX.Element;
