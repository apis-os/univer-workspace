import type { BaseFieldType } from '@univerjs/core';
import type { IFieldCorePlugin, IFieldTypePlugin } from '../fields/field-core-plugin';
import { Disposable, toDisposable } from '@univerjs/core';
export interface IBaseFieldRegistryService {
    register(plugin: IFieldCorePlugin): ReturnType<typeof toDisposable>;
    get(type: BaseFieldType): IFieldCorePlugin;
    getTypePlugin(type: BaseFieldType): IFieldTypePlugin | undefined;
    getAll(): IFieldCorePlugin[];
}
export declare const IBaseFieldRegistryService: import("@wendellhu/redi").IdentifierDecorator<IBaseFieldRegistryService>;
export declare class BaseFieldRegistryService extends Disposable implements IBaseFieldRegistryService {
    private readonly _plugins;
    register(plugin: IFieldCorePlugin): import("@wendellhu/redi").IDisposable;
    get(type: BaseFieldType): IFieldCorePlugin;
    getTypePlugin(type: BaseFieldType): IFieldTypePlugin | undefined;
    getAll(): IFieldCorePlugin[];
}
