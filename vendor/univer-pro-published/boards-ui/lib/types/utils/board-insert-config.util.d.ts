import type { IUniverBoardsUIConfig } from '../config/config';
export interface IResolvedBoardInsertConfig {
    chart: {
        height: number;
        width: number;
    };
    table: {
        cellHeight: number;
        cellWidth: number;
        columns: number;
        height?: number;
        minHeight: number;
        minWidth: number;
        rows: number;
        width?: number;
    };
}
export declare const BOARD_INSERT_DEFAULT_CONFIG: IResolvedBoardInsertConfig;
export declare function resolveBoardInsertConfig(config?: Pick<IUniverBoardsUIConfig, 'insert'>): IResolvedBoardInsertConfig;
export declare function resolveBoardTableInsertSize(options: {
    cellHeight?: number;
    cellWidth?: number;
    columns: number;
    height?: number;
    minHeight?: number;
    minWidth?: number;
    rows: number;
    width?: number;
}): {
    height: number;
    width: number;
};
