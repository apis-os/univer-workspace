import type { Observable } from 'rxjs';
import type { ISlideAnimationSequence, ISlideData, ISlideTransition } from '../slide.type';
import { Disposable } from '@univerjs/core';
/**
 * Runtime manager for slide timing data (transitions + animation sequences).
 *
 * **Data ownership**: The canonical transition data lives in
 * `ISlideData.transitionRecords` + `ISlideData.slideTransitionRefs`,
 * while animation sequences still live on `ISlidePage.animations`. This system is
 * a thin runtime layer that:
 * - Caches timing entries for fast access by slideId
 * - Emits `changed$` events so the renderer can react to updates
 * - Provides the entry point for the future animation playback engine
 *
 * It is owned and disposed by {@link SlideModel}.
 */
export declare class SlideTimingSystem extends Disposable {
    private readonly _transitions;
    private readonly _sequences;
    /** Emits the slideId whenever its timing data changes. */
    private readonly _changed$;
    readonly changed$: Observable<string>;
    getTransition(slideId: string): ISlideTransition | undefined;
    setTransition(slideId: string, transition: ISlideTransition): void;
    removeTransition(slideId: string): void;
    getSequences(slideId: string): ISlideAnimationSequence[];
    setSequences(slideId: string, sequences: ISlideAnimationSequence[]): void;
    /**
     * Load timing data from a slide snapshot into the cache.
     * Call this after creating / replacing a slide's data.
     */
    loadFromSlide(slideId: string, transition?: ISlideTransition, animations?: ISlideAnimationSequence[]): void;
    loadFromDocument(snapshot: ISlideData): void;
    /** Remove all cached data for a slide (called on slide deletion). */
    unloadSlide(slideId: string): void;
    dispose(): void;
}
