import type { IBoardElementData, IBoardPageElement } from '@univerjs-pro/boards';
import type { IMutation } from '@univerjs/core';
export interface ISetMindMapElementMutationParams {
    unitId: string;
    subUnitId: string;
    elementId: string;
    element: IBoardPageElement;
    transform?: IBoardElementData['transform'];
}
export declare const SetMindMapElementMutation: IMutation<ISetMindMapElementMutationParams>;
