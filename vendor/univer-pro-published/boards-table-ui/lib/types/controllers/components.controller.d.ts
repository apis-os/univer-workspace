import { Disposable } from '@univerjs/core';
import { ComponentManager } from '@univerjs/ui';
export declare class ComponentsController extends Disposable {
    private readonly _componentManager;
    constructor(_componentManager: ComponentManager);
    private _registerComponents;
}
