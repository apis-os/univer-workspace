import type { IChartHostRect, IChartHostStyle, IDomChartHost } from '@univerjs-pro/engine-chart';
import type { SheetCanvasFloatDomManagerService } from '@univerjs/sheets-drawing-ui';
import { ChartRenderMode } from '@univerjs-pro/engine-chart';
import { Disposable } from '@univerjs/core';
export declare function createHostElement(width: number, height: number): HTMLElement;
export interface IChartHostHandle {
    mountNode: HTMLElement;
    dispose: () => void;
}
export interface ISheetChartHostPlacement {
    width: number;
    height: number;
    left: number;
    top: number;
    scaleX: number;
    scaleY: number;
}
export declare class SheetChartHost extends Disposable implements IDomChartHost {
    readonly chartId: string;
    private readonly _getFloatDomInfo;
    private readonly _getPlacement;
    private readonly _setHostStyle;
    private readonly _isProviderDisposed;
    private readonly _markReady;
    private readonly _markNotReady;
    readonly mode = ChartRenderMode.Dom;
    private _domFrame;
    private _managed;
    private _pendingToken;
    private _pendingHost;
    private _waiter;
    private _hostStyle;
    private _savedWrapperStyle;
    private _dataUpdateAnimationDuration;
    constructor(chartId: string, _getFloatDomInfo: () => ReturnType<SheetCanvasFloatDomManagerService['getFloatDomInfo']>, _getPlacement: () => ISheetChartHostPlacement | null, _setHostStyle: (style: IChartHostStyle) => void, _isProviderDisposed: () => boolean, _markReady: () => void, _markNotReady: () => void);
    isManaged(): boolean;
    markUnmanaged(): void;
    getRect(): IChartHostRect | null;
    setStyle(style: IChartHostStyle): void;
    ensureHandle(): Promise<IChartHostHandle>;
    ensureMount(): Promise<HTMLElement | null>;
    checkMounted(): boolean;
    syncLayout(): void;
    markReady(): void;
    markNotReady(): void;
    setDataUpdateAnimation(duration: number | null): void;
    dispose(): void;
    private _createHost;
    private _cancelHostWait;
    private _applyHostStyle;
    private _resolveLayout;
    private _frameStyle;
    private _activateHostWrapper;
    private _applyHostInteractionState;
    private _restoreHostWrapper;
}
