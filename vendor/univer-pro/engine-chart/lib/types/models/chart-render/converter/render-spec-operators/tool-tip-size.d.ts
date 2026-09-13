import type { ChartRuntimeStyle } from '../../../../types';
export interface ITooltipRuntimeSize {
    fontSize: number;
    padding: number;
    borderWidth: number;
    borderRadius: number;
    shadowBlur: number;
    shadowOffsetX: number;
    shadowOffsetY: number;
    maxWidth: number;
    markerSize: number;
    markerRadius: number;
    markerGap: number;
    rowGap: number;
    axisPointerLineWidth: number;
    axisPointerLabelFontSize: number;
    axisPointerLabelMargin: number;
    axisPointerLabelPadding: [number, number, number, number];
    axisPointerLabelBorderRadius: number;
}
export declare function createTooltipRuntimeSize(style: ChartRuntimeStyle): ITooltipRuntimeSize;
