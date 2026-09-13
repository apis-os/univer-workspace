import type { ISlidePage, ISlideTextElement } from '@univerjs-pro/slides';
import type { ReactNode } from 'react';
import type { Observable } from 'rxjs';
export interface ISlideEmbedFloatingActivation {
    hostUnitId: string;
    childUnitId: string;
    embedId: string;
    stage?: 'inactive' | 'stage1' | 'stage2';
}
export interface ISlideEmbedFloatingActiveService {
    active$: Observable<ISlideEmbedFloatingActivation | null>;
    getActive(): ISlideEmbedFloatingActivation | null;
    clear(embedId?: string): void;
}
export declare const ISlideEmbedFloatingActiveService: import("@wendellhu/redi").IdentifierDecorator<ISlideEmbedFloatingActiveService>;
export interface ISlideEmbedMountSession {
    hostUnitId: string;
    childUnitId?: string;
    embedId: string;
    entry: string;
    layout?: string;
    context?: {
        descriptor: {
            hostAnchorId: string;
        };
    };
}
export interface ISlideEmbedMountService {
    listSessions(): ISlideEmbedMountSession[];
}
export declare const ISlideEmbedMountService: import("@wendellhu/redi").IdentifierDecorator<ISlideEmbedMountService>;
export interface ISlideEmbedActivationService {
    clearTab(embedId: string): void;
    clearFloating(embedId: string, hostUnitId: string): void;
}
export declare const ISlideEmbedActivationService: import("@wendellhu/redi").IdentifierDecorator<ISlideEmbedActivationService>;
export declare function resolveSlideEmbedFloatingElements(page: Pick<ISlidePage, 'elementOrder' | 'elements'> | null | undefined): Array<{
    element: ISlideTextElement;
    zIndex: number;
}>;
export interface ISlideEmbedFloatDomRendererProps {
    data: unknown;
    onRuntimeStageEnter?: (stage: 'inactive' | 'stage1' | 'stage2') => void;
    floatingChromeZIndex?: number;
    hostFloatDomLayout$?: Observable<unknown>;
    enableStage1BodyDrag?: boolean;
    deferInactiveFloatingChrome?: boolean;
    isExternalHostInteraction?: (event: PointerEvent) => boolean;
}
export interface ISlideEmbedFloatDomRenderer {
    render(props: ISlideEmbedFloatDomRendererProps): ReactNode;
}
export declare const ISlideEmbedFloatDomRenderer: import("@wendellhu/redi").IdentifierDecorator<ISlideEmbedFloatDomRenderer>;
