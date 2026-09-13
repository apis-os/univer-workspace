import type { IChartHostRect, IChartHostStyle, IDomChartHost } from '@univerjs-pro/engine-chart';
import { ChartRenderMode } from '@univerjs-pro/engine-chart';
import { Disposable } from '@univerjs/core';
export declare class BoardDomChartHost extends Disposable implements IDomChartHost {
    readonly chartId: string;
    private readonly _host;
    private readonly _applyHostStyle;
    readonly mode = ChartRenderMode.Dom;
    constructor(chartId: string, _host: HTMLElement, _applyHostStyle: (host: HTMLElement, style: IChartHostStyle) => void);
    getRect(): IChartHostRect;
    setStyle(style: IChartHostStyle): void;
    ensureMount(): Promise<HTMLElement>;
    checkMounted(): boolean;
    syncLayout(): void;
    markReady(): void;
    markNotReady(): void;
}
