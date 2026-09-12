import type { ISlideTransition } from '@univerjs-pro/slides';
import type { Observable } from 'rxjs';
import { Disposable, IUniverInstanceService } from '@univerjs/core';
export interface ISlidePlaybackState {
    active: boolean;
    unitId: string | null;
    previousSlideId: string | null;
    currentSlideId: string | null;
    currentIndex: number;
    total: number;
    transition?: ISlideTransition;
}
export interface IStartSlidePlaybackParams {
    unitId?: string;
    startSlideId?: string;
    fromBeginning?: boolean;
}
export interface IPreviewSlideTransitionParams {
    unitId?: string;
    slideId?: string;
}
export interface ISlidePlaybackService {
    readonly state$: Observable<ISlidePlaybackState>;
    getSnapshot(): ISlidePlaybackState;
    start(params?: IStartSlidePlaybackParams): boolean;
    stop(): void;
    next(): boolean;
    previous(): boolean;
    goToSlide(slideId: string): boolean;
    syncToSlide(slideId: string): boolean;
    previewTransition(params?: IPreviewSlideTransitionParams): boolean;
}
export declare const ISlidePlaybackService: import("@wendellhu/redi").IdentifierDecorator<ISlidePlaybackService>;
export declare class SlidePlaybackService extends Disposable implements ISlidePlaybackService {
    private readonly _instanceService;
    private readonly _state$;
    readonly state$: Observable<ISlidePlaybackState>;
    constructor(_instanceService: IUniverInstanceService);
    dispose(): void;
    getSnapshot(): ISlidePlaybackState;
    start(params?: IStartSlidePlaybackParams): boolean;
    stop(): void;
    next(): boolean;
    previous(): boolean;
    goToSlide(slideId: string): boolean;
    syncToSlide(slideId: string): boolean;
    previewTransition(params?: IPreviewSlideTransitionParams): boolean;
    private _resolveSlideModel;
    private _getVisibleSlideIds;
    private _goTo;
}
