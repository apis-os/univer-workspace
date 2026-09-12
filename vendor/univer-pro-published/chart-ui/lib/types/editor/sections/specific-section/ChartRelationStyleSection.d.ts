import type { LinePointShape } from '@univerjs-pro/engine-chart';
import { RelationChartLayoutEnum } from '@univerjs-pro/engine-chart';
export interface IChartRelationDefaultValues {
    circularLabelRotation: boolean;
    emphasisEnabled: boolean;
    force: {
        gravity: number;
        repulsion: number;
    };
    layout: RelationChartLayoutEnum;
    nodeShape: LinePointShape;
    useValueAsSymbolSize: boolean;
}
export declare const DEFAULT_CHART_RELATION_VALUES: IChartRelationDefaultValues;
export declare function ChartRelationStyleSection(props: {
    defaultValues: IChartRelationDefaultValues;
}): import("react").JSX.Element | null;
