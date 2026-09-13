import type { IReferencedUnitViewerSession } from '@univerjs-pro/embed-unit-ui';
import type { IResourceRefChartDataSourceReference } from '@univerjs-pro/engine-chart';
import type { IDisposable } from '@univerjs/core';
import { IReferencedUnitCatalogService } from '@univerjs-pro/embed';
export interface IChartReferencedDataSourceBindingOptions {
    initialSource?: IResourceRefChartDataSourceReference;
    onDataSourceChange(source: IResourceRefChartDataSourceReference): void;
}
export declare class ChartReferencedDataSourceBindingService {
    private readonly _catalog;
    constructor(_catalog: IReferencedUnitCatalogService);
    bind(session: IReferencedUnitViewerSession, options: IChartReferencedDataSourceBindingOptions): IDisposable;
}
