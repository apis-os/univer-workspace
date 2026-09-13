import type { IDisposable } from '@univerjs/core';
import type { IEmbedPassiveViewportWheelContext, IEmbedPassiveWheelHandlerContribution } from '../types/embed-ui';
export declare class EmbedPassiveWheelHandlerRegistryService {
    private readonly _handlers;
    register(handler: IEmbedPassiveWheelHandlerContribution): IDisposable;
    handleWheel(context: IEmbedPassiveViewportWheelContext): boolean;
    list(): IEmbedPassiveWheelHandlerContribution[];
    private _sortHandlers;
}
