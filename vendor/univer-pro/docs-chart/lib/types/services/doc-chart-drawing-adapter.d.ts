import type { IDocDrawingAdapter, IDocDrawingRemoveMutationInfoParams } from '@univerjs/docs-drawing';
import { ChartResourceRepository } from '@univerjs-pro/engine-chart';
export declare class DocChartDrawingAdapter implements IDocDrawingAdapter {
    private readonly _resourceService;
    constructor(_resourceService: ChartResourceRepository);
    getRemoveDrawingMutationInfos(params: IDocDrawingRemoveMutationInfoParams): {
        redoMutations: {
            id: string;
            params: {
                unitId: string;
                chartId: string;
                cleanupDataSource: boolean;
            };
        }[];
        undoMutations: ({
            id: string;
            params: {
                unitId: string;
                dataSource: import("@univerjs-pro/engine-chart").IChartResourceDataSource;
                chart?: undefined;
            };
        } | {
            id: string;
            params: {
                unitId: string;
                chart: import("@univerjs-pro/engine-chart").IChartResourceSnapshot<import("@univerjs-pro/engine-chart").IChartResourceContext, import("@univerjs-pro/engine-chart").IChartResourceState>;
                dataSource?: undefined;
            };
        })[];
    } | null;
    private _shouldCleanupDataSource;
}
