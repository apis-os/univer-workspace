import type { RefObject } from 'react';
export declare const DOC_ACTIVE_CHART_COMPONENT = "docs-chart-ui.active-chart";
export interface IDocActiveChartProps {
    unitId: string;
    subUnitId?: string;
    floatDomId: string;
    chartId: string;
    context: {
        root: RefObject<HTMLDivElement>;
    };
}
export declare const DocActiveChart: (props: IDocActiveChartProps) => null;
