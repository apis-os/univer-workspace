import type { ISlideDrawing } from '@univerjs-pro/slides';
import type { IDisposable } from '@univerjs/core';
import { Disposable } from '@univerjs/core';
export type SlideTransformerVisibilityGuard = (drawing: ISlideDrawing) => boolean;
export interface ISlideTransformerVisibilityService {
    registerGuard(guard: SlideTransformerVisibilityGuard): IDisposable;
    shouldShowTransformer(drawing: ISlideDrawing): boolean;
}
export declare const ISlideTransformerVisibilityService: import("@wendellhu/redi").IdentifierDecorator<ISlideTransformerVisibilityService>;
export declare class SlideTransformerVisibilityService extends Disposable implements ISlideTransformerVisibilityService {
    private readonly _guards;
    registerGuard(guard: SlideTransformerVisibilityGuard): IDisposable;
    shouldShowTransformer(drawing: ISlideDrawing): boolean;
}
