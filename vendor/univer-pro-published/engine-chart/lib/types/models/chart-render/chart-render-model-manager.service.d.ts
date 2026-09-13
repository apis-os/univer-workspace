import type { IDisposable } from '@univerjs/core';
import type { ChartRenderMode, IChartInstance, IChartRenderInstance, IChartRenderInstanceCreateContext, IChartRenderModel, IChartRenderModelImageExportInput, IChartRenderModelImageExportOptions, IChartRenderModelImageExportResult } from '../../types';
import { Disposable } from '@univerjs/core';
export interface IChartRenderModelManagerService extends IDisposable {
    registerRenderModel(name: string, renderModel: IChartRenderModel): void;
    setRenderModel(name: string): void;
    getRenderModel(name?: string): IChartRenderModel | undefined;
    getCurrentRenderModel(): IChartRenderModel;
    createChartInstance(): IChartInstance;
    createChartInstance(mode: ChartRenderMode, context?: IChartRenderInstanceCreateContext): IChartRenderInstance;
    exportImage(input: IChartRenderModelImageExportInput, options?: IChartRenderModelImageExportOptions): Promise<IChartRenderModelImageExportResult>;
}
export declare const IChartRenderModelManagerService: import("@wendellhu/redi").IdentifierDecorator<IChartRenderModelManagerService>;
export declare class ChartRenderModelManagerService extends Disposable implements IChartRenderModelManagerService {
    private readonly _renderModelMap;
    private _currentRenderModel;
    registerRenderModel(name: string, renderModel: IChartRenderModel): void;
    setRenderModel(name: string): void;
    getRenderModel(name?: string): IChartRenderModel | undefined;
    getCurrentRenderModel(): IChartRenderModel;
    createChartInstance(): IChartInstance;
    createChartInstance(mode: ChartRenderMode, context?: IChartRenderInstanceCreateContext): IChartRenderInstance;
    exportImage(input: IChartRenderModelImageExportInput, options?: IChartRenderModelImageExportOptions): Promise<IChartRenderModelImageExportResult>;
    dispose(): void;
}
