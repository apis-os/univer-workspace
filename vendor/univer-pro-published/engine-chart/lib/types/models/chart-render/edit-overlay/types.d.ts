import type { IChartElementBounds, IChartElementOverlay } from '../../../types';
export type ChartElementEditBorderType = 'hover' | 'fixed';
export interface IChartElementEditOverlayPalette {
    hoverStroke: string;
    fixedStroke: string;
}
export interface IChartElementOverlaySourceStyle {
    stroke?: string;
    lineWidth?: number;
    opacity?: number;
}
export interface IResolvedChartElementOverlay extends IChartElementOverlay {
    items?: IResolvedChartElementOverlay[];
    sourceCtor?: new (options: any) => any;
    sourceStyle?: IChartElementOverlaySourceStyle;
}
export interface IChartElementHitLayout {
    bounds?: IChartElementBounds;
    overlay?: IResolvedChartElementOverlay;
}
