import type { IDisposable } from '@univerjs/core';
import type { IFieldUIPlugin } from '../fields/field-ui-plugin';
import { Disposable } from '@univerjs/core';
export interface IBaseFieldUIRegistryService {
    register(plugin: IFieldUIPlugin): IDisposable;
    get(type: string): IFieldUIPlugin;
    getAll(): IFieldUIPlugin[];
}
export declare const IBaseFieldUIRegistryService: import("@wendellhu/redi").IdentifierDecorator<IBaseFieldUIRegistryService>;
export declare class BaseFieldUIRegistryService extends Disposable implements IBaseFieldUIRegistryService {
    private readonly _plugins;
    register(plugin: IFieldUIPlugin): IDisposable;
    get(type: string): IFieldUIPlugin;
    getAll(): IFieldUIPlugin[];
}
