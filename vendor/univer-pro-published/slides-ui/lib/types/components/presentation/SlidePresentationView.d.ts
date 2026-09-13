import type { Engine, Scene } from '@univerjs/engine-render';
import type { ISlidePlaybackState } from '../../services/slide-playback.service';
export interface IPresentationWheelGestureState {
    locked: boolean;
}
export interface IPresentationWheelGestureResult {
    action: 'none' | 'next' | 'previous';
    state: IPresentationWheelGestureState;
    preventDefault: boolean;
}
export declare function resolvePresentationWheelGesture(state: IPresentationWheelGestureState, event: Pick<WheelEvent, 'ctrlKey' | 'deltaMode' | 'deltaX' | 'deltaY'>, viewportHeight: number): IPresentationWheelGestureResult;
export declare function getPresentationStageSize(viewportSize: {
    width: number;
    height: number;
}, logicalSize: {
    width: number;
    height: number;
}, inset?: number): {
    width: number;
    height: number;
};
export declare function shouldShowPresentationSpeakerNotes(audienceMode: boolean, ownerPresenterMode: boolean): boolean;
export declare function canNavigatePresentationPrevious(state: Pick<ISlidePlaybackState, 'currentIndex' | 'total'> | null | undefined): boolean;
export declare function canNavigatePresentationNext(state: Pick<ISlidePlaybackState, 'currentIndex' | 'total'> | null | undefined): boolean;
export declare function getNextVisiblePresentationSlideId(slideOrder: string[], slides: Record<string, {
    skipped?: boolean;
} | undefined>, currentIndex: number): string | undefined;
export type TPresentationKeyboardAction = 'none' | 'next' | 'previous' | 'stop';
export declare function getPresentationKeyboardAction(key: string, fullscreen: boolean, interactiveTarget: boolean, audienceMode?: boolean): TPresentationKeyboardAction;
export declare function isPresentationInteractiveTarget(target: EventTarget | null): boolean;
export declare function shouldAdvancePresentationFromClick(target: EventTarget | null): boolean;
export declare function startSlidePresentationRenderLoop(engine: Pick<Engine, 'runRenderLoop'>, scene: Pick<Scene, 'render'>): void;
export declare function shouldAnimateSlideFormulaPresentationOnCreate(animatedSlideKeys: ReadonlySet<string>, unitId: string, slideId: string): boolean;
export declare function SlidePresentationView(): import("react").JSX.Element | null;
