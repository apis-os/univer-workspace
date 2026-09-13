import type { BoardModel, IBoardElementData } from '@univerjs-pro/boards';
import type { IDisposable } from '@univerjs/core';
export interface IBoardPrintElementMap {
    data: Record<string, IBoardElementData>;
    order: readonly string[];
}
export interface IBoardPrintElementTransformContext {
    boardModel: BoardModel;
    subUnitId: string;
}
export type BoardPrintElementTransformer = (elementMap: IBoardPrintElementMap, context: IBoardPrintElementTransformContext) => IBoardPrintElementMap;
export declare class BoardPrintCompositionService {
    private readonly _transformers;
    register(transformer: BoardPrintElementTransformer): IDisposable;
    transform(elementMap: IBoardPrintElementMap, context: IBoardPrintElementTransformContext): IBoardPrintElementMap;
}
