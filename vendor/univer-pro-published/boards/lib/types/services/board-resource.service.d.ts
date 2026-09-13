import type { IBoardData } from '../board.type';
import type { BoardModel } from '../models/board-model';
import { IUniverInstanceService } from '@univerjs/core';
export interface IBoardResourceService {
    getBoard(boardId: string): BoardModel | null;
    getAllBoards(): BoardModel[];
    createBoard(snapshot: Partial<IBoardData>): BoardModel;
}
export declare const IBoardResourceService: import("@wendellhu/redi").IdentifierDecorator<IBoardResourceService>;
export declare class BoardResourceService implements IBoardResourceService {
    private readonly _univerInstanceService;
    constructor(_univerInstanceService: IUniverInstanceService);
    getBoard(boardId: string): BoardModel | null;
    getAllBoards(): BoardModel[];
    createBoard(snapshot: Partial<IBoardData>): BoardModel;
}
