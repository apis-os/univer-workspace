import type { IDisposable } from '@univerjs/core';
import type { ChartElementEventHandler, ChartElementEventType, ChartRenderMode, ChartRuntimeStyle, EChartSpec, IChartHost, IChartHostRect, IChartHostStyle, IChartInstance, IChartRenderInput, IChartRenderInstance, IChartRenderInstanceCreateContext } from '../../../types';
import type { IChartRuntimeAdaptiveSize } from '../../common/adaptive-size/chart-runtime-adaptive-size';
import type { EChartRenderModel } from './echart-render-model';
import { Disposable } from '@univerjs/core';
import { EChartRenderEngine } from './echart-render-engine';
interface IPreparedRenderFrame {
    hostStyle: IChartHostStyle;
    renderRect: IChartHostRect;
    renderStyle: ChartRuntimeStyle;
    spec: EChartSpec;
}
export declare abstract class BaseChartRenderInstance extends Disposable implements IChartRenderInstance {
    readonly mode: ChartRenderMode;
    protected readonly _renderModel: EChartRenderModel;
    protected readonly _context: IChartRenderInstanceCreateContext<EChartSpec>;
    protected _host: IChartHost | null;
    constructor(mode: ChartRenderMode, _renderModel: EChartRenderModel, _context?: IChartRenderInstanceCreateContext<EChartSpec>);
    bind(host: IChartHost): void;
    abstract render(input: IChartRenderInput): Promise<void>;
    exportImg(): Promise<string | undefined>;
    resize(): void;
    on(_type: ChartElementEventType, _handler: ChartElementEventHandler): IDisposable;
    setElementEditMode(_enabled: boolean): void;
    protected _prepareRenderFrame(input: IChartRenderInput, outerRect: IChartHostRect, adaptiveSize: IChartRuntimeAdaptiveSize, chartInstance: IChartInstance<EChartSpec>): IPreparedRenderFrame;
    protected _buildSpec(input: IChartRenderInput, chartStyle: ChartRuntimeStyle, rect: IChartHostRect, chartInstance: IChartInstance<EChartSpec>): EChartSpec;
    protected _getHostStyle(input: IChartRenderInput, style: ChartRuntimeStyle, spec?: EChartSpec): IChartHostStyle;
    protected _getRenderBackgroundColor(input: IChartRenderInput, style: ChartRuntimeStyle, spec: EChartSpec, hostStyle: IChartHostStyle): string | undefined;
    protected _createEChartRenderEngine(): EChartRenderEngine;
}
export {};
