import { Disposable, ICommandService, Injector } from '@univerjs/core';
import { IUIPartsService } from '@univerjs/ui';
export declare class BasesHistoryUIController extends Disposable {
    constructor(commandService: ICommandService, injector: Injector, uiPartsService: IUIPartsService);
}
