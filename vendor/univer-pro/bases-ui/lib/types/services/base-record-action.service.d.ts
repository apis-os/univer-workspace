import type { IDisposable } from '@univerjs/core';
import type { Observable } from 'rxjs';
import { Disposable } from '@univerjs/core';
export interface IBaseRecordActionContext {
    unitId: string;
    tableId: string;
    viewId: string;
    recordId: string;
    trigger?: 'action' | 'badge';
}
export interface IBaseRecordAction {
    id: string;
    label: string;
    changed$?: Observable<unknown>;
    getBadgeCounts?(context: Omit<IBaseRecordActionContext, 'recordId'>): ReadonlyMap<string, number>;
    getFocusedRecordId?(context: Omit<IBaseRecordActionContext, 'recordId'>): string | undefined;
    execute(context: IBaseRecordActionContext): void | Promise<void>;
}
export interface IBaseRecordActionService {
    readonly changed$: Observable<void>;
    register(action: IBaseRecordAction): IDisposable;
    getActions(): readonly IBaseRecordAction[];
    execute(id: string, context: IBaseRecordActionContext): void;
}
export declare const IBaseRecordActionService: import("@wendellhu/redi").IdentifierDecorator<IBaseRecordActionService>;
export declare class BaseRecordActionService extends Disposable implements IBaseRecordActionService {
    private readonly _actions;
    private readonly _subscriptions;
    private readonly _changed$;
    readonly changed$: Observable<void>;
    register(action: IBaseRecordAction): IDisposable;
    getActions(): readonly IBaseRecordAction[];
    execute(id: string, context: IBaseRecordActionContext): void;
    dispose(): void;
}
