import type { IShapeFormulaLastValueGuard } from '@univerjs-pro/engine-shape';
import type { IMutation } from '@univerjs/core';
import type { IBoardPageElement } from '../../board.type';
import type { IBoardElementBridgeData } from '../../services/board-element-bridge.service';
export interface IUpdateBoardElementMutationParams {
    unitId: string;
    subUnitId: string;
    elementId: string;
    element: IBoardPageElement;
    transform?: IBoardElementBridgeData['transform'];
    isRealtimePreview?: boolean;
    allowInactiveTarget?: boolean;
    allowLockedTarget?: boolean;
    formulaLastValueGuard?: IShapeFormulaLastValueGuard;
}
export declare const UpdateBoardElementMutation: IMutation<IUpdateBoardElementMutationParams>;
