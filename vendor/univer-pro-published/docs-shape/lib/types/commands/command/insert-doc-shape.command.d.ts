import type { ICommand } from '@univerjs/core';
import type { IDocShapeCreateInput } from '../../common/types';
export type IInsertDocShapeCommandParams = IDocShapeCreateInput & {
    unitId: string;
    shapeId?: string;
};
/** Inserts a shape resource and its document drawing as one undoable action. */
export declare const InsertDocShapeCommand: ICommand<IInsertDocShapeCommandParams>;
