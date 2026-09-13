import type { IChartHostRect, IChartHostStyle, IDomChartHost } from '@univerjs-pro/engine-chart';
import type { IScale } from '@univerjs/core';
import { ChartRenderMode } from '@univerjs-pro/engine-chart';
import { Disposable } from '@univerjs/core';
export declare class DocDomChartHost extends Disposable implements IDomChartHost {
    readonly chartId: string;
    private readonly _host;
    private readonly _applyHostStyle;
    private readonly _getRenderRect?;
    /**
     * Preview hosts are absolutely stretched by their parent, while active drawing hosts need an explicit size.
     */
    private readonly _manageHostSize;
    private readonly _getRenderScale?;
    readonly mode = ChartRenderMode.Dom;
    private _frameNode;
    private _mountNode;
    private _hostStyle;
    constructor(chartId: string, _host: HTMLElement, _applyHostStyle: (host: HTMLElement, style: IChartHostStyle) => void, _getRenderRect?: (() => IChartHostRect | null) | undefined, 
    /**
     * Preview hosts are absolutely stretched by their parent, while active drawing hosts need an explicit size.
     */
    _manageHostSize?: boolean, _getRenderScale?: (() => IScale | null) | undefined);
    getRect(): IChartHostRect;
    setStyle(style: IChartHostStyle): void;
    ensureMount(): Promise<HTMLElement>;
    checkMounted(): boolean;
    syncLayout(): void;
    markReady(): void;
    markNotReady(): void;
    dispose(): void;
    private _setElementSize;
    private _getContentRect;
}
