import type { IDisposable } from '@univerjs/core';
import { Disposable } from '@univerjs/core';
import { IInkUIStateService } from './ink-ui-state.service';
export interface IInkOutsideInteractionService {
    registerInteractiveRegion(element: HTMLElement): IDisposable;
}
export declare const IInkOutsideInteractionService: import("@wendellhu/redi").IdentifierDecorator<IInkOutsideInteractionService>;
export declare class InkOutsideInteractionService extends Disposable implements IInkOutsideInteractionService {
    private readonly _stateService;
    private readonly _interactiveRegions;
    constructor(_stateService: IInkUIStateService);
    registerInteractiveRegion(element: HTMLElement): IDisposable;
    private _handlePointerDown;
}
