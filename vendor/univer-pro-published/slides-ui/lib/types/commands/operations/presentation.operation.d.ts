import type { ICommand } from '@univerjs/core';
import type { IPreviewSlideTransitionParams, IStartSlidePlaybackParams } from '../../services/slide-playback.service';
export interface IGoToSlidePresentationParams {
    slideId: string;
}
export declare const StartSlidePresentationOperation: ICommand<IStartSlidePlaybackParams>;
export declare const StopSlidePresentationOperation: ICommand;
export declare const ToggleSlidePresentationFullscreenOperation: ICommand;
export declare const GoToSlidePresentationOperation: ICommand<IGoToSlidePresentationParams>;
export declare const StartSlideDualScreenPresentationOperation: ICommand<IStartSlidePlaybackParams>;
export declare const NextSlidePresentationOperation: ICommand;
export declare const PreviousSlidePresentationOperation: ICommand;
export declare const PreviewSlideTransitionOperation: ICommand<IPreviewSlideTransitionParams>;
