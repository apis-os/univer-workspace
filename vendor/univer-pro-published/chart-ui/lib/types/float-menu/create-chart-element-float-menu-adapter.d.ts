import type { IChartHostAdapter } from '../services/chart-host-adapter';
import type { IChartUIService } from '../services/chart-ui.service';
import type { IChartElementFloatMenuAdapter, IChartElementFloatMenuContext } from './types';
export interface ICreateChartElementFloatMenuAdapterOptions {
    chartUIService: IChartUIService;
    getHostAdapter(context: IChartElementFloatMenuContext): IChartHostAdapter | undefined;
    close?(): void;
    openFullPanel?(context: IChartElementFloatMenuContext): void;
}
export declare function createChartElementFloatMenuAdapter(options: ICreateChartElementFloatMenuAdapterOptions): IChartElementFloatMenuAdapter;
