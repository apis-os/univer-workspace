import type { IBoardConnectorElement, IBoardConnectorPoint, IBoardElementData } from '@univerjs-pro/boards';
export interface IResolveBoardConnectorMoveUpdateOptions {
    element: IBoardConnectorElement;
    delta: IBoardConnectorPoint;
    elementData?: Record<string, IBoardElementData>;
}
export declare function canMoveBoardConnectorBody(element: IBoardConnectorElement): boolean;
export declare function resolveBoardConnectorMoveUpdate(options: IResolveBoardConnectorMoveUpdateOptions): IBoardConnectorElement;
