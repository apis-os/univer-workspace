import { Disposable } from '@univerjs/core';
import { LiveShareService } from '../../services/live-share.service';
export declare class LiveShareCoreExtensionsController extends Disposable {
    private readonly _liveShareService;
    constructor(_liveShareService: LiveShareService);
    private _init;
}
