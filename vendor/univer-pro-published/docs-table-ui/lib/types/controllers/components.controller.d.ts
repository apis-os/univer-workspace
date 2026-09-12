import { Disposable } from '@univerjs/core';
import { ComponentManager, IconManager } from '@univerjs/ui';
export declare class ComponentsController extends Disposable {
    private readonly _componentManager;
    private readonly _iconManager;
    constructor(_componentManager: ComponentManager, _iconManager: IconManager);
    private _registerComponents;
    private _registerIcons;
}
