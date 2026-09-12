import type { IChartDataSourceRuntimeState, IResourceRefChartDataSourceReference } from '@univerjs-pro/engine-chart';
import type { ReactNode } from 'react';
export type ChartDataSourceEditorMode = 'inline' | 'referenced';
export interface IChartReferencedDataSourceEditorProps {
    initialSource?: IResourceRefChartDataSourceReference;
    inlineContent: ReactNode;
    mode: ChartDataSourceEditorMode;
    onModeChange: (mode: ChartDataSourceEditorMode) => void;
    onPreviewChange: (source: IResourceRefChartDataSourceReference | null, state: IChartDataSourceRuntimeState) => void;
}
export declare function ChartReferencedDataSourceEditor(props: IChartReferencedDataSourceEditorProps): import("react").JSX.Element;
