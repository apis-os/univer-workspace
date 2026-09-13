import type { Observable } from 'rxjs';
import type { IChartRuntimeAdaptiveSize } from '../../common/adaptive-size/chart-runtime-adaptive-size';
import { Disposable } from '@univerjs/core';
export interface IChartRuntimeAdaptiveSizeState {
    readonly value: IChartRuntimeAdaptiveSize;
    readonly value$: Observable<IChartRuntimeAdaptiveSize>;
    updateFromDomRender(chartWidth: number): void;
}
export declare class ChartRuntimeAdaptiveSizeState extends Disposable implements IChartRuntimeAdaptiveSizeState {
    private readonly _value$;
    readonly value$: Observable<IChartRuntimeAdaptiveSize>;
    get value(): IChartRuntimeAdaptiveSize;
    updateFromDomRender(chartWidth: number): void;
    dispose(): void;
}
