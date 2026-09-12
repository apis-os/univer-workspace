import type { Observable } from 'rxjs';
import type { IBaseDashboardResource, IBaseDashboardSnapshot } from '../types';
import { Disposable } from '@univerjs/core';
export interface IBaseDashboardResourceChange {
    unitId: string;
    dashboardId?: string;
}
export declare class BaseDashboardResourceService extends Disposable {
    private readonly _resources;
    private readonly _change$;
    readonly change$: Observable<IBaseDashboardResourceChange | null>;
    getResource(unitId: string): IBaseDashboardResource;
    getDashboard(unitId: string, dashboardId: string): IBaseDashboardSnapshot | undefined;
    setDashboard(unitId: string, dashboard: IBaseDashboardSnapshot, index?: number): void;
    removeDashboard(unitId: string, dashboardId: string): boolean;
    loadUnit(unitId: string, resource: IBaseDashboardResource): void;
    unloadUnit(unitId: string): void;
    serializeUnit(unitId: string): string;
    dispose(): void;
    private _getMutableResource;
}
export declare function createEmptyDashboardResource(): IBaseDashboardResource;
