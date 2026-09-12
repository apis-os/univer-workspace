import type { ChartImageSource, IChartHostLease, IChartHostRect, IChartHostStyle, IImageChartHost } from '../../types';
import { Disposable } from '@univerjs/core';
import { ChartRenderMode } from '../../types';
export declare function chartImageSourceToDataUrl(image: ChartImageSource): string;
export declare abstract class ImageChartHost extends Disposable implements IImageChartHost {
    readonly chartId: string;
    readonly mode = ChartRenderMode.Image;
    private readonly _offscreenChartHost;
    constructor(chartId: string);
    abstract getRect(): IChartHostRect | null;
    abstract setStyle(style: IChartHostStyle): void;
    abstract nextVersion(): number;
    abstract commitSnapshot(image: ChartImageSource, version: number): boolean;
    abstract requestPaint(): void;
    abstract invalidateSnapshot(): void;
    acquireOffscreenHost(rect: IChartHostRect): IChartHostLease;
    dispose(): void;
}
export declare class DataUrlImageChartHost extends ImageChartHost {
    private readonly _rect;
    private _dataUrl;
    constructor(chartId: string, _rect: IChartHostRect);
    getRect(): IChartHostRect;
    setStyle(_style: IChartHostStyle): void;
    nextVersion(): number;
    commitSnapshot(image: ChartImageSource, _version: number): boolean;
    requestPaint(): void;
    invalidateSnapshot(): void;
    getDataUrl(): string | undefined;
}
