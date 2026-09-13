import { Disposable, Injector } from '@univerjs/core';
import { IUIPartsService } from '@univerjs/ui';
export declare class DesktopLiveShareController extends Disposable {
    private readonly _injector;
    private readonly _uiPartsService;
    constructor(_injector: Injector, _uiPartsService: IUIPartsService);
    private _mountLiveShare;
}
