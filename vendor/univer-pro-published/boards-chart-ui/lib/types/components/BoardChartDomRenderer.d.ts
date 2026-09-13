import type { IBoardChartElement } from '@univerjs-pro/boards';
export interface IBoardChartDomRendererProps {
    chartId: string;
    unitId: string;
    chartElement: Pick<IBoardChartElement, 'stroke'>;
}
export declare function BoardChartDomRenderer({ chartElement, chartId, unitId }: IBoardChartDomRendererProps): import("react").JSX.Element;
