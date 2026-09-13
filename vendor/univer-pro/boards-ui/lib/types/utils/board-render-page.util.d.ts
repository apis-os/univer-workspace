import type { BoardBackgroundImageFit, IBoardPage, IBoardPageSize } from '@univerjs-pro/boards';
import type { IUniverBoardsUIConfig } from '../config/config';
export declare const BOARD_RENDER_SCENE_DEFAULT_MIN_SIZE: IBoardPageSize;
export declare const BOARD_RENDER_SCENE_DEFAULT_FALLBACK_FILL = "gray.50";
export interface IResolveBoardRenderSceneSizeOptions {
    engineWidth?: number;
    engineHeight?: number;
    sceneWidth?: number;
    sceneHeight?: number;
    minSize?: IBoardPageSize;
}
export interface IResolveBoardPageBackgroundFillOptions {
    darkMode?: boolean;
}
export interface IBoardBackgroundImageDrawRect {
    left: number;
    top: number;
    width: number;
    height: number;
}
export declare function resolveBoardPageBackgroundFill(page: Pick<IBoardPage, 'background'> | null | undefined, options?: IResolveBoardPageBackgroundFillOptions): string;
export declare function resolveBoardBackgroundImageDrawRect(frameWidth: number, frameHeight: number, imageWidth: number, imageHeight: number, fit?: BoardBackgroundImageFit): IBoardBackgroundImageDrawRect;
export declare function resolveBoardRenderSceneMinSize(config?: Pick<IUniverBoardsUIConfig, 'scene'>): IBoardPageSize;
export declare function resolveBoardRenderSceneSize({ engineWidth, engineHeight, sceneWidth, sceneHeight, minSize, }: IResolveBoardRenderSceneSizeOptions): IBoardPageSize;
