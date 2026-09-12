import type { IMutation } from '@univerjs/core';
import type { IDrawingOrderMapParam } from '@univerjs/drawing';
export interface ISetSlideElementOrderMutationParams extends IDrawingOrderMapParam {
}
export declare function normalizeSlideElementOrder(currentOrder: string[], requestedOrder: string[]): string[];
export declare const SetSlideElementOrderMutation: IMutation<ISetSlideElementOrderMutationParams>;
