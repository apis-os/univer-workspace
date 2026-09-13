import type { IChartHostRect, IChartHostStyle, IDomChartHost } from '@univerjs-pro/engine-chart';
import { ChartRenderMode } from '@univerjs-pro/engine-chart';
import { Disposable } from '@univerjs/core';
export declare class SlideDomChartHost extends Disposable implements IDomChartHost {
    readonly chartId: string;
    private readonly _host;
    private readonly _applyHostStyle;
    private readonly _getRenderRect?;
    private readonly _markReady?;
    private readonly _markNotReady?;
    readonly mode = ChartRenderMode.Dom;
    private _mountNode;
    private _ready;
    constructor(chartId: string, _host: HTMLElement, _applyHostStyle: (host: HTMLElement, style: IChartHostStyle) => void, _getRenderRect?: (() => IChartHostRect | null) | undefined, _markReady?: (() => void) | undefined, _markNotReady?: (() => void) | undefined);
    getRect(): IChartHostRect | null;
    setStyle(style: IChartHostStyle): void;
    getHostElement(): HTMLElement;
    ensureMount(): Promise<HTMLElement>;
    checkMounted(): boolean;
    syncLayout(): void;
    markReady(): void;
    markNotReady(): void;
    dispose(): void;
}
