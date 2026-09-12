import type { IInsertBoardChartCommandParams } from '@univerjs-pro/boards';
import type { IBoardChartAdapterInsertOptions } from '@univerjs-pro/boards-chart';
import type { IOpenBoardInsertChartDialogOperationParams } from '@univerjs-pro/boards-ui';
import type { ChartDataSourceValue, IChartDataSourceInput } from '@univerjs-pro/engine-chart';
import { ChartTypeBits } from '@univerjs-pro/engine-chart';
export interface IBoardChartInsertPanelProps {
    insertParams: IOpenBoardInsertChartDialogOperationParams;
    onCancel?: () => void;
    onInserted?: () => void;
}
export declare function createBoardChartInsertCommandParams(insertParams: IOpenBoardInsertChartDialogOperationParams, chartType: ChartTypeBits, data: ChartDataSourceValue[][], style?: IBoardChartAdapterInsertOptions['style'], dataSource?: IChartDataSourceInput): IInsertBoardChartCommandParams;
export declare function BoardChartInsertPanel(props: IBoardChartInsertPanelProps): import("react").JSX.Element;
