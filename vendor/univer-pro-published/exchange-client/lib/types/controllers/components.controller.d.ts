import { Disposable } from '@univerjs/core';
import { ComponentManager, IconManager } from '@univerjs/ui';
export declare class ComponentsController extends Disposable {
    private readonly _iconManager;
    private readonly _componentManager;
    constructor(_iconManager: IconManager, _componentManager: ComponentManager);
    private _registerIcons;
    private _registerComponents;
}
