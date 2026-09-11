import type { HistoryChangeKind } from '@univerjs-pro/edit-history';
import { Disposable } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
import { HistoryHighlightService } from './history-highlight.service';
export interface IHistoryHighlightBounds {
    left: number;
    top: number;
    width: number;
    height: number;
}
export interface IHistoryCanvasHighlightTarget {
    id: string;
    kind: HistoryChangeKind;
    objectKey?: string;
    fallbackObjectKey?: string;
    bounds?: IHistoryHighlightBounds;
    outlineOnly?: boolean;
}
export declare class HistoryCanvasHighlightService extends Disposable {
    private readonly _renderManagerService;
    private readonly _highlightService;
    private readonly _overlays;
    private readonly _generations;
    constructor(_renderManagerService: IRenderManagerService, _highlightService: HistoryHighlightService);
    show(unitId: string, targets: IHistoryCanvasHighlightTarget[]): Promise<void>;
    clear(unitId: string): void;
    dispose(): void;
    private _resolveTargets;
    private _getFallbackObject;
    private _removeOverlays;
    private _bindOverlayLifecycle;
    private _bindObjectTransform;
    private _queueOverlayRefresh;
    private _refreshOverlay;
    private _resolveCurrentObject;
    private _startPulse;
    private _stopPulse;
    private _setOverlayOpacity;
}
