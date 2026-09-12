import { Disposable, Injector } from '@univerjs/core';
import { ComponentManager } from '@univerjs/ui';
export declare class ComponentsController extends Disposable {
    private readonly _injector;
    private readonly _componentManager;
    constructor(_injector: Injector, _componentManager: ComponentManager);
    private _registerComponents;
}
