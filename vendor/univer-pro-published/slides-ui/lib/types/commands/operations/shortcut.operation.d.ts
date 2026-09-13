import type { ICommand } from '@univerjs/core';
import { Direction } from '@univerjs/core';
export interface ISlideNudgeSelectionOperationParams {
    direction: Direction;
    distance: number;
}
export declare const SlideSelectAllOperation: ICommand;
export declare const SlideDeleteSelectionOperation: ICommand;
export declare const SlideCopySelectionOperation: ICommand;
export declare const SlideCutSelectionOperation: ICommand;
export declare const SlideNudgeSelectionOperation: ICommand<ISlideNudgeSelectionOperationParams>;
export declare const SlidePasteSelectionOperation: ICommand;
export declare const SlideTabSelectNextOperation: ICommand;
export declare const SlideTabSelectPrevOperation: ICommand;
