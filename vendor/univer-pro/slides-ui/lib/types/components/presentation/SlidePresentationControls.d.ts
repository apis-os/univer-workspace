import type { SlideModel } from '@univerjs-pro/slides';
import type { MouseEvent as ReactMouseEvent } from 'react';
import type { ISlidePlaybackState } from '../../services/slide-playback.service';
import type { ObjectProvider } from '../../views/render';
export declare const PRESENTATION_DOCK_HOT_ZONE_HEIGHT = 96;
export declare const PRESENTATION_DOCK_HIDE_DELAY = 250;
export declare function getVisiblePresentationSlideIds(slideOrder: string[], slides: Record<string, {
    skipped?: boolean;
} | undefined>): string[];
export declare function getPresentationThumbnailWheelDelta(event: Pick<WheelEvent, 'ctrlKey' | 'deltaMode' | 'deltaX' | 'deltaY'>, viewportWidth: number): number;
interface ISlidePresentationControlsProps {
    state: ISlidePlaybackState;
    slideModel: SlideModel;
    slideOrder: string[];
    objectProvider: ObjectProvider;
    visible: boolean;
    fullscreen: boolean;
    canGoPrevious: boolean;
    canGoNext: boolean;
    onPrevious: () => Promise<void>;
    onNext: () => Promise<void>;
    onStop: () => Promise<void>;
    onToggleFullscreen: () => Promise<void>;
    onGoToSlide: (slideId: string) => void;
    onPointerEnter: () => void;
    onPointerLeave: () => void;
    onFocusEnter: () => void;
    onFocusLeave: () => void;
    onClick: (event: ReactMouseEvent<HTMLElement>) => void;
}
export declare function SlidePresentationControls(props: ISlidePresentationControlsProps): import("react").JSX.Element;
export {};
