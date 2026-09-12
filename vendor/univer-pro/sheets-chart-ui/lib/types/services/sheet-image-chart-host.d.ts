import type { ChartImageSource, IChartHostRect, IChartHostStyle } from '@univerjs-pro/engine-chart';
import type { IChartOuterRect } from './chart-content-layout';
import type { ChartSnapshotStoreService } from './chart-snapshot-store.service';
import { ImageChartHost } from '@univerjs-pro/engine-chart';
interface IChartSnapshotKey {
    unitId: string;
    subUnitId: string;
    chartId: string;
}
export declare class SheetImageChartHost extends ImageChartHost {
    private readonly _getOuterRect;
    private readonly _setHostStyle;
    private readonly _snapshotKey;
    private readonly _snapshotStore;
    private readonly _requestPaint;
    constructor(chartId: string, _getOuterRect: () => IChartOuterRect | null, _setHostStyle: (style: IChartHostStyle) => void, _snapshotKey: IChartSnapshotKey, _snapshotStore: ChartSnapshotStoreService, _requestPaint: () => void);
    getRect(): IChartHostRect | null;
    setStyle(style: IChartHostStyle): void;
    nextVersion(): number;
    commitSnapshot(image: ChartImageSource, version: number): boolean;
    requestPaint(): void;
    invalidateSnapshot(): void;
}
export {};
