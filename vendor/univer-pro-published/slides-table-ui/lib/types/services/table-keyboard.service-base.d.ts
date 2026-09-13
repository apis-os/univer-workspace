import type { IDisposable } from '@univerjs/core';
import type { SlideTableKeyboardInput } from '../utils/slide-table-keyboard-input';
import type { SlideTableKeyboardAction } from '../utils/slide-table-keyboard-model';
import { Disposable } from '@univerjs/core';
export type TableKeyboardHandlerResult = boolean | Promise<boolean>;
export declare abstract class TableKeyboardServiceBase extends Disposable {
    private _handler;
    private _inputHandler;
    constructor();
    setHandler(handler: (action: SlideTableKeyboardAction) => TableKeyboardHandlerResult): IDisposable;
    setInputHandler(handler: (input: SlideTableKeyboardInput) => boolean): IDisposable;
    handle(action: SlideTableKeyboardAction): TableKeyboardHandlerResult;
    handleInput(input: SlideTableKeyboardInput): boolean;
    protected abstract canHandleNativeInput(event: Event, options?: {
        allowDocsEditor?: boolean;
    }): boolean;
    private _initNativeInputListeners;
}
