import type { ISlideData, ISlideTransition } from '../slide.type';
export declare function normalizeSlideTransition(transition?: ISlideTransition): ISlideTransition | undefined;
export declare function findOrCreateTransitionRecord(snapshot: ISlideData, transition?: ISlideTransition): string | undefined;
export declare function resolveSlideTransition(snapshot: ISlideData, slideId: string): ISlideTransition | undefined;
export declare function cleanupUnusedTransitionRecords(snapshot: ISlideData): void;
