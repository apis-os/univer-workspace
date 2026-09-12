import type { IDisposable } from '@univerjs/core';
export interface IDocsTablePassiveWheelContext {
    childUnitId?: string;
    event: WheelEvent;
    source?: string;
}
export interface IDocsTablePassiveWheelHandler {
    handleWheel(context: IDocsTablePassiveWheelContext): boolean;
    order?: number;
}
export declare class DocsTablePassiveWheelService {
    private readonly _handlers;
    register(handler: IDocsTablePassiveWheelHandler): IDisposable;
    handleWheel(context: IDocsTablePassiveWheelContext): boolean;
    private _sortHandlers;
}
