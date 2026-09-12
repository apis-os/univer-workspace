import type { BaseSelection } from '@univerjs/core';
import type { BaseUIStateService } from './base-ui-state.service';
import { Disposable } from '@univerjs/core';
export interface IBaseSelectionService {
    getSelection(): BaseSelection | null;
    setSelection(selection: BaseSelection | null): void;
}
export declare const IBaseSelectionService: import("@wendellhu/redi").IdentifierDecorator<IBaseSelectionService>;
export declare class BaseSelectionService extends Disposable implements IBaseSelectionService {
    private readonly _stateService;
    constructor(_stateService: BaseUIStateService);
    getSelection(): BaseSelection | null;
    setSelection(selection: BaseSelection | null): void;
}
