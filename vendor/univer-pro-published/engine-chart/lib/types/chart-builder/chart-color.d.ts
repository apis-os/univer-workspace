/** Stable discriminator used by serializable linear-gradient chart colors. */
export declare const CHART_LINEAR_GRADIENT_TYPE: "linear-gradient";
/** A mark-local normalized coordinate used by a chart gradient. */
export interface IChartGradientPoint {
    /** Horizontal coordinate, where `0` is the mark's left edge and `1` is its right edge. */
    x: number;
    /** Vertical coordinate, where `0` is the mark's top edge and `1` is its bottom edge. */
    y: number;
}
/** One color stop in a serializable chart gradient. */
export interface IChartGradientStop {
    /** Position along the gradient vector. Values are forwarded to the renderer. */
    offset: number;
    /** CSS color string, including `rgba(...)` when desired. */
    color: string;
    /** Optional alpha multiplier applied to the alpha already present in `color`. */
    opacity?: number;
}
/** A mark-local linear gradient with at least two stops. */
export interface IChartLinearGradient {
    type: typeof CHART_LINEAR_GRADIENT_TYPE;
    start: IChartGradientPoint;
    end: IChartGradientPoint;
    stops: IChartGradientStop[];
}
/** A solid CSS color or a serializable mark-local linear gradient. */
export type ChartColor = string | IChartLinearGradient;
/** Input accepted by {@link chartLinearGradient}; the discriminator is added automatically. */
export type ChartLinearGradientInput = Omit<IChartLinearGradient, 'type'>;
/**
 * Creates and validates a serializable linear-gradient chart color.
 *
 * @param gradient Gradient coordinates and at least two color stops.
 * @returns A plain-data gradient carrying the stable chart-color discriminator.
 * @example
 * ```ts
 * import { chartLinearGradient } from '@univerjs-pro/engine-chart';
 *
 * const color = chartLinearGradient({
 *     start: { x: 0, y: 1 },
 *     end: { x: 0, y: 0 },
 *     stops: [
 *         { offset: 0, color: 'rgba(22, 119, 255, 0)' },
 *         { offset: 1, color: '#1677ff' },
 *     ],
 * });
 * ```
 */
export declare function chartLinearGradient(gradient: ChartLinearGradientInput): IChartLinearGradient;
