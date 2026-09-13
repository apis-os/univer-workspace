import type { IChartPieCompositeSpec, PieSecondaryPlotType } from '../../../chart-builder/chart-types';
import { PieCompositeMarkRole, PieCompositePlot } from '../../../chart-builder/chart-types';
export declare const PieCompositeDiagnosticCode: {
    readonly InsufficientSourcePoints: "insufficientSourcePoints";
    readonly InvalidSecondaryPlot: "invalidSecondaryPlot";
    readonly InvalidPositionCount: "invalidPositionCount";
    readonly EmptySecondarySelection: "emptySecondarySelection";
    readonly AllPointsSelected: "allPointsSelected";
};
export type PieCompositeDiagnosticCode = typeof PieCompositeDiagnosticCode[keyof typeof PieCompositeDiagnosticCode];
export type PieCompositeDatum = {
    plot: typeof PieCompositePlot.Primary | typeof PieCompositePlot.Secondary;
    role: typeof PieCompositeMarkRole.Source;
    sourcePointIndex: number;
} | {
    plot: typeof PieCompositePlot.Primary;
    role: typeof PieCompositeMarkRole.Aggregate;
    memberSourcePointIndexes: readonly number[];
    value: number;
};
export interface IPieCompositeDiagnostic {
    code: PieCompositeDiagnosticCode;
    sourcePointCount: number;
    selectedPointCount: number;
}
export interface IPieCompositeProjection {
    active: boolean;
    primary: readonly PieCompositeDatum[];
    secondary: readonly PieCompositeDatum[];
    secondaryPlotType?: PieSecondaryPlotType;
    diagnostics: readonly IPieCompositeDiagnostic[];
}
export declare function projectCompositePie(values: readonly number[], composite?: IChartPieCompositeSpec | {
    enabled?: boolean;
    secondaryPlot?: Partial<IChartPieCompositeSpec['secondaryPlot']>;
}): IPieCompositeProjection;
