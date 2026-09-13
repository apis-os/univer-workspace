import type { IUniverInstanceService } from '@univerjs/core';
import type { Observable } from 'rxjs';
import type { IChartSourceMultiRangeItem, ISheetChartSourceSingleRange, ISheetChartSourceSnapshot, IUniverDataSet } from '../models/types';
import { ChartDataSource } from '@univerjs-pro/engine-chart';
/**
 * @extends ChartDataSource
 * @description
 * Represents a single data source for a chart.
 */
export declare class ChartDataSourceSingle extends ChartDataSource {
    private readonly _univerInstanceService;
    private readonly _snapshot$;
    private _projector?;
    private _projectorHeaderRow?;
    private _projectorIsRowDirection?;
    readonly snapshot$: Observable<ISheetChartSourceSnapshot>;
    readonly rangeInfo$: Observable<ISheetChartSourceSingleRange>;
    readonly data$: Observable<IUniverDataSet>;
    readonly isRowDirection$: Observable<boolean>;
    readonly canSwitchOrient$: Observable<boolean>;
    constructor(_univerInstanceService: IUniverInstanceService, rangeInfo: ISheetChartSourceSingleRange);
    getRangeInfo(): ISheetChartSourceSingleRange;
    get isRowDirection(): boolean;
    canSwitchOrient(): boolean;
    convertDataSet(sourceInfo?: ISheetChartSourceSingleRange): IUniverDataSet;
    private _getProjector;
    getDataSet(): IUniverDataSet;
    getDimensionCount(): number;
    refreshDataSet(): void;
    private _emit;
    dispose(): void;
}
export declare class ChartDataSourceMulti extends ChartDataSource {
    private readonly _univerInstanceService;
    private readonly _snapshot$;
    readonly snapshot$: Observable<ISheetChartSourceSnapshot>;
    readonly rangeInfo$: Observable<IChartSourceMultiRangeItem[]>;
    readonly data$: Observable<IUniverDataSet>;
    readonly isRowDirection$: Observable<boolean>;
    readonly canSwitchOrient$: Observable<boolean>;
    constructor(_univerInstanceService: IUniverInstanceService, rangeInfo: IChartSourceMultiRangeItem[]);
    canSwitchOrient(): boolean;
    getRangeInfo(): IChartSourceMultiRangeItem[];
    get isRowDirection(): boolean;
    convertDataSet(rangeInfos?: IChartSourceMultiRangeItem[]): IUniverDataSet;
    getDataSet(): IUniverDataSet;
    getDimensionCount(): number;
    refreshDataSet(): void;
    private _emit;
    dispose(): void;
}
export declare function createChartDataSource(univerInstanceService: IUniverInstanceService, rangeInfo: ISheetChartSourceSingleRange | IChartSourceMultiRangeItem[]): ChartDataSourceSingle | ChartDataSourceMulti;
