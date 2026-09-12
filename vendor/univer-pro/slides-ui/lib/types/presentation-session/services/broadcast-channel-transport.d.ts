import type { Observable } from 'rxjs';
import type { SlidePresentationProtocolMessage } from '../protocol';
import { Disposable } from '@univerjs/core';
export interface ISlidePresentationBroadcastChannelLike {
    onmessage: ((event: {
        data: SlidePresentationProtocolMessage;
    }) => void) | null;
    postMessage(message: SlidePresentationProtocolMessage): void;
    close(): void;
}
export type SlidePresentationBroadcastChannelFactory = (name: string) => ISlidePresentationBroadcastChannelLike;
export interface ISlidePresentationTransport {
    readonly messages$: Observable<SlidePresentationProtocolMessage>;
    post(message: SlidePresentationProtocolMessage): void;
    dispose(): void;
}
export declare class SlidePresentationBroadcastChannelTransport extends Disposable implements ISlidePresentationTransport {
    private readonly _messages$;
    private readonly _channel;
    readonly messages$: Observable<SlidePresentationProtocolMessage>;
    constructor(channelName: string, createChannel?: SlidePresentationBroadcastChannelFactory);
    post(message: SlidePresentationProtocolMessage): void;
    dispose(): void;
}
