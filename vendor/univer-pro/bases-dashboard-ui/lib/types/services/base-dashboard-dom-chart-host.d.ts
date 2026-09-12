import type { IChartHostRect, IChartHostStyle, IDomChartHost } from '@univerjs-pro/engine-chart';
import { ChartRenderMode } from '@univerjs-pro/engine-chart';
import { Disposable } from '@univerjs/core';
export declare class BaseDashboardDomChartHost extends Disposable implements IDomChartHost {
    readonly chartId: string;
    private readonly _element;
    readonly mode = ChartRenderMode.Dom;
    constructor(chartId: string, _element: HTMLElement);
    getRect(): IChartHostRect;
    setStyle(style: IChartHostStyle): void;
    ensureMount(): Promise<HTMLElement>;
    checkMounted(): boolean;
    syncLayout(): void;
    markReady(): void;
    markNotReady(): void;
}
