import type { ChartRuntimeStyle, EChartSpec, IChartConfig, IChartHostRect, IChartInstance, IChartRenderInstance, IChartRenderInstanceCreateContext, IChartRenderModel, IChartRenderModelImageExportInput, IChartRenderModelImageExportOptions, IChartRenderModelImageExportResult, IChartRenderModelStylizeInit } from '../../../types';
import type { IWordCloudRenderConfig } from '../../../wordcloud-chart/word-cloud-render-config';
import { Disposable } from '@univerjs/core';
import { ChartRenderMode } from '../../../types';
export interface IEChartRenderModelOptions {
    wordCloudRenderConfig?: IWordCloudRenderConfig;
}
export declare class EChartRenderModel extends Disposable implements IChartRenderModel {
    private _specConverters;
    private _specOperators;
    private _addWatermark;
    private readonly _wordCloudRenderConfig?;
    constructor(_addWatermark: boolean, options?: IEChartRenderModelOptions);
    updateWatermark(addWatermark: boolean): void;
    private _addSpecConverters;
    private _addSpecOperators;
    createChartInstance(): IChartInstance<EChartSpec>;
    createChartInstance(mode: ChartRenderMode, context?: IChartRenderInstanceCreateContext<EChartSpec>): IChartRenderInstance;
    clearRuntimeCache(chartId: string): void;
    clearAllRuntimeCache(): void;
    dispose(): void;
    toSpec(config: IChartConfig, style: ChartRuntimeStyle): import("echarts").EChartsOption;
    private _getShowEmpty;
    stylizeSpec(spec: EChartSpec, stylizeInit: IChartRenderModelStylizeInit<EChartSpec>, rect: IChartHostRect): EChartSpec;
    exportImage(input: IChartRenderModelImageExportInput, options?: IChartRenderModelImageExportOptions): Promise<IChartRenderModelImageExportResult>;
}
