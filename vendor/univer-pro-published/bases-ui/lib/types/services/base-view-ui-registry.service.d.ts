import type { BaseViewType, IDisposable } from '@univerjs/core';
import type { Observable } from 'rxjs';
import type { IViewUIPlugin } from '../views/view-ui-plugin';
import { Disposable } from '@univerjs/core';
export interface IBaseViewUIRegistryService {
    readonly change$: Observable<number>;
    register(plugin: IViewUIPlugin): IDisposable;
    get(type: BaseViewType): IViewUIPlugin;
    getOptional(type: BaseViewType): IViewUIPlugin | undefined;
    getAll(): IViewUIPlugin[];
}
export declare const IBaseViewUIRegistryService: import("@wendellhu/redi").IdentifierDecorator<IBaseViewUIRegistryService>;
export declare class BaseViewUIRegistryService extends Disposable implements IBaseViewUIRegistryService {
    private readonly _plugins;
    private readonly _change$;
    readonly change$: Observable<number>;
    register(plugin: IViewUIPlugin): IDisposable;
    getOptional(type: BaseViewType): IViewUIPlugin | undefined;
    get(type: BaseViewType): IViewUIPlugin;
    getAll(): IViewUIPlugin[];
    dispose(): void;
}
