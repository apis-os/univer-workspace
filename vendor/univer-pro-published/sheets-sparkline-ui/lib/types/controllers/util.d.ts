import type { ISparklineAnchorData, ISparklineGroupConfig, ISparklineGroupExtra } from '@univerjs-pro/sheets-sparkline';
import type { ICellWithCoord } from '@univerjs/core';
import type { UniverRenderingContext } from '@univerjs/engine-render';
export declare const renderLineSparkline: (ctx: UniverRenderingContext, coordInfo: ICellWithCoord, config: ISparklineGroupConfig, anchorCell: ISparklineAnchorData, extra?: ISparklineGroupExtra) => void;
export declare const renderBarChart: (ctx: UniverRenderingContext, coordInfo: ICellWithCoord, config: ISparklineGroupConfig, anchorCell: ISparklineAnchorData, extra?: ISparklineGroupExtra) => void;
export declare const renderProfitAndLossChart: (ctx: UniverRenderingContext, coordInfo: ICellWithCoord, config: ISparklineGroupConfig, anchorCell: ISparklineAnchorData, extra?: ISparklineGroupExtra) => void;
export declare const renderPieSparkline: (ctx: UniverRenderingContext, coordInfo: ICellWithCoord, config: ISparklineGroupConfig, anchorCell: ISparklineAnchorData, extra?: ISparklineGroupExtra) => void;
