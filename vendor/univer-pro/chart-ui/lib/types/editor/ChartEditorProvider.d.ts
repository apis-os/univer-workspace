import type { ReactNode } from 'react';
import type { IChartHostAdapter } from '../services/chart-host-adapter';
import type { IChartUIService } from '../services/chart-ui.service';
export interface IChartEditorProviderProps {
    children: ReactNode;
    hostAdapter: IChartHostAdapter;
    chartUIService?: IChartUIService;
}
export declare function ChartEditorProvider(props: IChartEditorProviderProps): import("react").JSX.Element;
export declare function useChartHostAdapter(): IChartHostAdapter;
export declare function useProvidedChartUIService(): IChartUIService | null;
