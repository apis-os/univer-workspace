import type { IDisposable } from '@univerjs/core';
import type { ComponentType } from 'react';
import type { Observable } from 'rxjs';
import { Disposable } from '@univerjs/core';
export interface IBaseDashboardSidebarItem {
    id: string;
    name: string;
    readonly?: boolean;
}
export interface IBaseDashboardPageProps {
    unitId: string;
    dashboardId: string;
    presentation?: boolean;
}
export interface IBaseDashboardUIExtension {
    readonly change$: Observable<unknown>;
    readonly component: ComponentType<IBaseDashboardPageProps>;
    readonly labels: {
        add: string;
        configure: (name: string) => string;
        delete: string;
        new: string;
        rename: string;
        search: string;
        section: string;
    };
    getItems(unitId: string): IBaseDashboardSidebarItem[];
    create(unitId: string): Promise<string | null>;
    rename(unitId: string, dashboardId: string, name: string): Promise<boolean>;
    remove(unitId: string, dashboardId: string): Promise<boolean>;
}
export interface IBaseDashboardUIExtensionRegistryService {
    readonly change$: Observable<number>;
    register(extension: IBaseDashboardUIExtension): IDisposable;
    get(): IBaseDashboardUIExtension | null;
}
export declare const IBaseDashboardUIExtensionRegistryService: import("@wendellhu/redi").IdentifierDecorator<IBaseDashboardUIExtensionRegistryService>;
export declare class BaseDashboardUIExtensionRegistryService extends Disposable implements IBaseDashboardUIExtensionRegistryService {
    private _extension;
    private readonly _change$;
    readonly change$: Observable<number>;
    register(extension: IBaseDashboardUIExtension): IDisposable;
    get(): IBaseDashboardUIExtension | null;
    dispose(): void;
}
