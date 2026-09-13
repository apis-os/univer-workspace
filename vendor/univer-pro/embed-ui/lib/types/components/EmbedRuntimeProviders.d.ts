import type { Injector } from '@univerjs/core';
import type { ReactNode } from 'react';
export interface IEmbedRuntimeProvidersProps {
    injector: Injector;
    children?: ReactNode;
    mountContainer?: HTMLElement | null;
    embedId?: string;
    passThroughWheelGestures?: boolean;
}
export declare function EmbedRuntimeProviders(props: IEmbedRuntimeProvidersProps): import("react").JSX.Element;
export declare function focusEmbedRuntimePointerTarget(embedId: string, runtimeProvider: HTMLElement, target: EventTarget | null): void;
export declare function focusEmbedRuntimeRoot(embedId: string, runtimeRoot: HTMLElement): void;
