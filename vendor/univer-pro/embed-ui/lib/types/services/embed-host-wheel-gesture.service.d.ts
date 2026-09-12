import type { IDisposable } from '@univerjs/core';
export declare class EmbedHostWheelGestureService {
    private readonly _sessions;
    private readonly _hostGestureEvents;
    register(root: HTMLElement, container: HTMLElement): IDisposable;
    isHostGesture(event: WheelEvent): boolean;
    private _observeWheel;
}
