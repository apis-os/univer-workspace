import type { IDisposable } from '@univerjs/core';
import type { ChartElementEventHandler, ChartElementEventType, EChartSpec, IChartRenderInput, IChartRenderInstanceCreateContext, IChartRenderTransitionOptions } from '../../../types';
import type { EChartRenderModel } from './echart-render-model';
import { BaseChartRenderInstance } from './base-chart-render-instance';
export declare class DomChartInstance extends BaseChartRenderInstance {
    private _chartInstance;
    constructor(renderModel: EChartRenderModel, context?: IChartRenderInstanceCreateContext<EChartSpec>);
    render(input: IChartRenderInput): Promise<void>;
    renderTransition(previousInput: IChartRenderInput, input: IChartRenderInput, options: IChartRenderTransitionOptions): Promise<void>;
    resize(): void;
    on(type: ChartElementEventType, handler: ChartElementEventHandler): IDisposable;
    setElementEditMode(enabled: boolean): void;
    exportImg(): Promise<string | undefined>;
    dispose(): void;
    private _ensureEventChartInstance;
    private _ensureChartInstance;
}
