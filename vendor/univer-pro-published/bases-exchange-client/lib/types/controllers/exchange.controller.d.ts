import { Disposable, ICommandService, Injector } from '@univerjs/core';
import { IUIPartsService } from '@univerjs/ui';
export declare class BasesExchangeClientController extends Disposable {
    private readonly _commandService;
    constructor(_commandService: ICommandService, injector: Injector, uiPartsService: IUIPartsService);
}
