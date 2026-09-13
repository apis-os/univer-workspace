import type { ChartImageSource } from '@univerjs-pro/engine-chart';
import { Disposable } from '@univerjs/core';
export interface IChartSnapshotKey {
    unitId: string;
    subUnitId: string;
    chartId: string;
}
export declare function disposeChartImageSource(image?: ChartImageSource): void;
export declare class ChartSnapshotStoreService extends Disposable {
    private readonly _entries;
    nextVersion(key: IChartSnapshotKey): number;
    isLatest(key: IChartSnapshotKey, version: number): boolean;
    setImage(key: IChartSnapshotKey, image: ChartImageSource, version: number): boolean;
    getImage(key: IChartSnapshotKey): ChartImageSource | undefined;
    clearImage(key: IChartSnapshotKey): void;
    clearChart(chartId: string): void;
    dispose(): void;
}
