import type { IOperation } from '@univerjs/core';
import type { IBoardSettings } from '../../config/config';
import type { IBoardElementFindResult } from '../../utils/board-find.util';
import type { IBoardViewportPoint } from '../../utils/board-viewport.util';
import { BoardInteractionMode } from '../../config/config';
export interface IBoardUIFacadeOperationParams {
    unitId: string;
}
export declare const GetBoardInteractionModeOperation: IOperation<IBoardUIFacadeOperationParams, BoardInteractionMode>;
export declare const SetBoardInteractionModeOperation: IOperation<IBoardUIFacadeOperationParams & {
    mode: BoardInteractionMode;
}, Promise<boolean>>;
export interface ISetBoardSettingsOperationParams extends IBoardUIFacadeOperationParams {
    settings: Partial<IBoardSettings>;
}
export interface IFindBoardElementsByTextOperationParams extends IBoardUIFacadeOperationParams {
    query: string;
}
export interface IFocusBoardElementOperationParams extends IBoardUIFacadeOperationParams {
    elementId: string;
    viewportPoint: IBoardViewportPoint;
}
export interface IGetBoardElementViewportPointOperationParams extends IBoardUIFacadeOperationParams {
    elementId: string;
}
export interface ISetBoardObjectListPanelOpenOperationParams extends IBoardUIFacadeOperationParams {
    open: boolean;
}
export declare const GetBoardSettingsOperation: IOperation<IBoardUIFacadeOperationParams, Required<IBoardSettings>>;
export declare const SetBoardSettingsOperation: IOperation<ISetBoardSettingsOperationParams>;
export declare const GetBoardObjectListPanelOpenOperation: IOperation<IBoardUIFacadeOperationParams, boolean>;
export declare const SetBoardObjectListPanelOpenOperation: IOperation<ISetBoardObjectListPanelOpenOperationParams>;
export declare const FindBoardElementsByTextOperation: IOperation<IFindBoardElementsByTextOperationParams, IBoardElementFindResult[]>;
export declare const GetBoardElementViewportPointOperation: IOperation<IGetBoardElementViewportPointOperationParams, IBoardViewportPoint | null>;
export declare const FocusBoardElementOperation: IOperation<IFocusBoardElementOperationParams>;
