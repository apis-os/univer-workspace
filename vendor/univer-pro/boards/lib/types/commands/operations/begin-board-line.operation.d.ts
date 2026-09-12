import type { IOperation } from '@univerjs/core';
import type { IBoardConnectorStyle } from '../../board.type';
export interface IBeginBoardLineOperationParams {
    unitId: string;
    subUnitId: string;
    lineType?: string;
    style?: Partial<IBoardConnectorStyle>;
}
export declare const BeginBoardLineOperation: IOperation<IBeginBoardLineOperationParams>;
