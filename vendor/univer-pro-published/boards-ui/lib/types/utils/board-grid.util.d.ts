import type { IUniverBoardsUIConfig } from '../config/config';
export interface IResolvedBoardGridConfig {
    gridSize: number;
    lineColor: string;
    majorGridSize: number;
    majorLineColor: string;
}
export interface IBoardGridRenderStep {
    worldStep: number;
    screenStep: number;
    majorEvery: number;
}
export declare const BOARD_GRID_DEFAULT_CONFIG: IResolvedBoardGridConfig;
export declare function resolveBoardGridConfig(config?: Pick<IUniverBoardsUIConfig, 'grid'>): IResolvedBoardGridConfig;
export declare function resolveBoardGridRenderStep(options: {
    gridSize: number;
    majorGridSize: number;
    zoomRatio: number;
    minScreenStep?: number;
    maxScreenStep?: number;
}): IBoardGridRenderStep;
