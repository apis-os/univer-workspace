import type { ICommand } from '@univerjs/core';
import type { IBoardElementData } from '../../services/board-element.service';
import type { IBoardRect } from '../../utils/board-container-transform.util';
export type BoardCaptureBoundsSelector = 'content' | 'elements' | 'region';
export type BoardCaptureBoundsError = 'content-empty' | 'element-hidden' | 'element-missing' | 'element-unbounded' | 'elements-empty' | 'padding-invalid' | 'region-invalid' | 'selector-conflict';
export interface IBoardCaptureBoundsOptions {
    elementIds?: string[];
    padding?: number;
    region?: IBoardRect;
}
export interface IBoardCaptureBoundsSuccess {
    bounds: IBoardRect;
    elementIds?: string[];
    ok: true;
    padding: number;
    region?: IBoardRect;
    selector: BoardCaptureBoundsSelector;
    subUnitId: string;
    unitId: string;
}
export interface IBoardCaptureBoundsFailure {
    code: BoardCaptureBoundsError;
    elementId?: string;
    ok: false;
}
export type BoardCaptureBoundsResult = IBoardCaptureBoundsFailure | IBoardCaptureBoundsSuccess;
export interface IResolveBoardCaptureBoundsCommandParams extends IBoardCaptureBoundsOptions {
    subUnitId: string;
    unitId: string;
}
interface IResolvedBoardCaptureBounds {
    bounds: IBoardRect;
    elementIds?: string[];
    ok: true;
    padding: number;
    region?: IBoardRect;
    selector: BoardCaptureBoundsSelector;
}
export declare const ResolveBoardCaptureBoundsCommand: ICommand<IResolveBoardCaptureBoundsCommandParams, BoardCaptureBoundsResult | false>;
export declare function resolveBoardCaptureBounds(elementData: Record<string, IBoardElementData>, elementOrder: readonly string[], options: IBoardCaptureBoundsOptions): IBoardCaptureBoundsFailure | IResolvedBoardCaptureBounds;
export {};
