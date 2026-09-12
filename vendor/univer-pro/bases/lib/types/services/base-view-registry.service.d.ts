import type { BaseViewType } from '@univerjs/core';
import type { IViewCorePlugin } from '../views/view-core-plugin';
import { Disposable, toDisposable } from '@univerjs/core';
export interface IBaseViewRegistryService {
    register(plugin: IViewCorePlugin): ReturnType<typeof toDisposable>;
    get(type: BaseViewType): IViewCorePlugin;
    getAll(): IViewCorePlugin[];
}
export declare const IBaseViewRegistryService: import("@wendellhu/redi").IdentifierDecorator<IBaseViewRegistryService>;
export declare class BaseViewRegistryService extends Disposable implements IBaseViewRegistryService {
    private readonly _plugins;
    register(plugin: IViewCorePlugin): import("@wendellhu/redi").IDisposable;
    get(type: BaseViewType): IViewCorePlugin;
    getAll(): IViewCorePlugin[];
}
