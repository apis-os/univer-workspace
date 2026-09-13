import type { ArrangeTypeEnum } from '@univerjs/core';
import type { ChartPendingConfig, IChartDescription, IChartInfo } from './chart-types';
/** Host persistence boundary used by the common live Chart facade. */
export interface IChartLiveAdapter<TSource, TInfo = IChartInfo<TSource>> {
    describe(): IChartDescription;
    getInfo(): TInfo;
    update(info: TInfo): Promise<void> | void;
    commit(config: ChartPendingConfig): void;
    setDataSource(source: TSource): Promise<void> | void;
    setAbsolutePosition(x: number, y: number): void;
    setSize(width: number, height: number): void;
    arrange(type: ArrangeTypeEnum): void;
    setZOrder(index: number): void;
    remove(): Promise<boolean> | boolean;
}
