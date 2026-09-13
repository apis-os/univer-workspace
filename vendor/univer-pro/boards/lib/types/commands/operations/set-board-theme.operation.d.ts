import type { IOperation } from '@univerjs/core';
import type { IBoardThemeData } from '../../board.type';
export interface ISetBoardThemeOperationParams {
    unitId: string;
    themeId?: string;
    themeData?: IBoardThemeData;
}
export declare const SetBoardThemeOperation: IOperation<ISetBoardThemeOperationParams>;
