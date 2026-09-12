import { Disposable, IConfigService, Injector } from '@univerjs/core';
import { IUIPartsService } from '@univerjs/ui';
export declare class BoardUIController extends Disposable {
    private readonly _injector;
    private readonly _uiPartsService;
    private readonly _configService;
    constructor(_injector: Injector, _uiPartsService: IUIPartsService, _configService: IConfigService);
    private _initWorkbenchParts;
}
