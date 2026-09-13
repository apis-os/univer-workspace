import type { ISlideTableSnapshot } from '../types';
import { Disposable } from '@univerjs/core';
import { SlideTableResourceService } from './slide-table-resource.service';
export interface ISlideTableChangeEvent {
    unitId: string;
    tableId: string;
    table?: ISlideTableSnapshot;
}
export declare class SlideTableModelService extends Disposable {
    private readonly _resourceService;
    private readonly _tableChange$;
    private readonly _tableRemoval$;
    private _lastTableChange;
    private _lastTableRemoval;
    constructor(_resourceService: SlideTableResourceService);
    get tableChange$(): import("rxjs").Observable<ISlideTableChangeEvent>;
    get tableRemoval$(): import("rxjs").Observable<ISlideTableChangeEvent>;
    getTable(unitId: string, tableId: string): ISlideTableSnapshot | undefined;
    getLastTableChange(): ISlideTableChangeEvent | null;
    getLastTableRemoval(): ISlideTableChangeEvent | null;
    notifyTableChanged(unitId: string, tableId: string): void;
    notifyTableRemoved(unitId: string, tableId: string): void;
    removeUnit(_unitId: string): void;
    dispose(): void;
}
