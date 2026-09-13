import type { IUniverDataSet } from '../types';
import { BehaviorSubject } from 'rxjs';
import { ChartDataSource } from './chart-source';
/**
 * Legacy static init data uses `dimensions` as the table header row and
 * `source` as row-major table cells. StaticChartSource adapts that input to the
 * canonical vector-based IUniverDataSet returned by convertDataSet().
 */
type ILegacyTableDataSet = IUniverDataSet;
export declare class StaticChartSource extends ChartDataSource {
    protected readonly _canSwitchOrient$: BehaviorSubject<boolean>;
    protected readonly _isRowDirection$: BehaviorSubject<boolean>;
    private _rawDataSet;
    private _convertedDataSetCache;
    readonly canSwitchOrient$: import("rxjs").Observable<boolean>;
    readonly isRowDirection$: import("rxjs").Observable<boolean>;
    get isRowDirection(): boolean;
    initData(data: ILegacyTableDataSet, isRowDirection?: boolean): void;
    setData(data: ILegacyTableDataSet): void;
    updateIsRowDirection(flag: boolean): void;
    refresh(): void;
    convertDataSet(): IUniverDataSet;
    dispose(): void;
}
export {};
