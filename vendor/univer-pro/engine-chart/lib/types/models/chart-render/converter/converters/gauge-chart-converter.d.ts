import type { EChartSpec, IChartGaugeSpec, IChartRenderSpecConverter } from '../../../../types';
export declare const GaugeValidationIssue: {
    readonly Mode: "Gauge mode must be modern or classic.";
    readonly Scale: "Gauge scale requires finite min < max.";
    readonly SplitNumber: "Gauge split count must be a positive integer.";
    readonly Angles: "Gauge angles must be finite degrees.";
    readonly Ranges: "Gauge ranges must be finite, ordered, and non-overlapping.";
    readonly Ratios: "Gauge ratios must be from 0 through 1.";
    readonly Sizes: "Gauge visual sizes must be finite and non-negative.";
    readonly PointerShape: "Gauge pointer shape must be needle, slim, or arrow.";
};
interface IGaugeItemLayout {
    center: [string, string];
    radius: string;
}
export declare function validateGaugeSpec(spec: IChartGaugeSpec | undefined): string | undefined;
export declare function computeGaugeLayout(count: number, width: number, height: number): IGaugeItemLayout[];
export declare function applyGaugeLayout(spec: EChartSpec, width: number, height: number): void;
export declare const gaugeChartConverter: IChartRenderSpecConverter<EChartSpec>;
export {};
