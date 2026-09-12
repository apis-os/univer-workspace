import type { ISetSlideTransitionCommandParams, ISlideData, ISlideTransition } from '@univerjs-pro/slides';
import { SlideTransitionDirectionEnum, SlideTransitionTypeEnum } from '@univerjs-pro/slides';
export interface ISlideTransitionPanelState {
    slideId: string;
    effect: SlideTransitionTypeEnum;
    direction: SlideTransitionDirectionEnum;
    duration: number;
}
export interface IBuildSlideTransitionPanelCommandParams {
    unitId: string;
    slideId: string;
    effect: SlideTransitionTypeEnum;
    direction: SlideTransitionDirectionEnum;
    duration: number;
    applyToAll: boolean;
}
export declare function isDirectionalSlideTransition(type: SlideTransitionTypeEnum): boolean;
export declare function isTimedSlideTransition(type: SlideTransitionTypeEnum): boolean;
export declare function buildPanelTransition(type: SlideTransitionTypeEnum, direction: SlideTransitionDirectionEnum, duration: number): ISlideTransition;
export declare function resolveSlideTransitionPanelState(snapshot: ISlideData, activeSlideId: string | undefined, fallbackSlideId: string): ISlideTransitionPanelState;
export declare function buildSlideTransitionPanelCommandParams(params: IBuildSlideTransitionPanelCommandParams): ISetSlideTransitionCommandParams;
