import type { IDisposable } from '@univerjs/core';
import type { IChartDataSourceLoadResult, IChartDataSourceProvider } from './chart-data-source-runtime.service';
import type { IResourceRefChartDataSourceReference } from './resource-ref-chart-data-source.adapter';
import { Injector } from '@univerjs/core';
export declare class ResourceRefChartDataSourceProvider implements IChartDataSourceProvider {
    private readonly _injector;
    readonly kind = "resource-ref";
    constructor(_injector: Injector);
    getCacheKey(source: IResourceRefChartDataSourceReference): string;
    load(source: IResourceRefChartDataSourceReference, options: {
        signal: AbortSignal;
    }): Promise<IChartDataSourceLoadResult>;
    watch(source: IResourceRefChartDataSourceReference, onChange: () => void): IDisposable;
}
