import { Disposable } from '@univerjs/core';
import { IconManager } from '@univerjs/ui';
export declare class ComponentsController extends Disposable {
    private readonly _iconManager;
    constructor(_iconManager: IconManager);
    private _registerIcons;
}
