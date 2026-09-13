import type { IDrawingJsonUndo1 } from '@univerjs/drawing';
import type { IBoardElementSearch } from '../../services/board-element-bridge.service';
export interface IBoardElementJsonUndo {
    redo: IDrawingJsonUndo1['redo'];
    undo?: IDrawingJsonUndo1['undo'];
    objects: IBoardElementSearch[];
}
export declare function resolveBoardElementJsonUndo(jsonOp: unknown): IBoardElementJsonUndo;
