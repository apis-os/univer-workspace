import type { IDisposable, UniverInstanceType } from '@univerjs/core';
import { Disposable } from '@univerjs/core';
export interface IHistoryUnitAdapter<TLocation = unknown> {
    readonly type: UniverInstanceType;
    canView(unitId: string): boolean | Promise<boolean>;
    canRevert(unitId: string): boolean | Promise<boolean>;
    captureLocation(unitId: string): TLocation | undefined;
    restoreLocation(unitId: string, location: TLocation | undefined): void | Promise<void>;
}
export declare class HistoryUnitAdapterRegistryService extends Disposable {
    private readonly _adapters;
    register(adapter: IHistoryUnitAdapter): IDisposable;
    get(type: UniverInstanceType): IHistoryUnitAdapter | undefined;
    dispose(): void;
}
