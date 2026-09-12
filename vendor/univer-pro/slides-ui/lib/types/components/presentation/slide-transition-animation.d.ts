import type { ISlideTransition } from '@univerjs-pro/slides';
export interface ISlideTransitionAnimationSpec {
    duration: number;
    current: Keyframe[];
    previous: Keyframe[];
    previousOnTop?: boolean;
}
export declare function getSlideTransitionAnimationSpec(transition?: ISlideTransition): ISlideTransitionAnimationSpec | null;
