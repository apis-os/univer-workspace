import type { IBoardElementData } from '@univerjs-pro/boards';
export interface IResolveBoardElementSelectionDeleteParamsOptions {
    unitId: string;
    subUnitId: string;
    selectedIds: string[];
    elementData: Record<string, IBoardElementData>;
}
export interface IBoardElementSelectionDeleteParam {
    unitId: string;
    subUnitId: string;
    elementId: string;
}
export interface IBoardDeleteKeyboardEventLike {
    key: string;
    target: EventTarget | null;
    defaultPrevented?: boolean;
}
export declare function isBoardEditableKeyboardTarget(target: EventTarget | null): boolean;
export declare function isBoardInteractiveKeyboardTarget(target: EventTarget | null): boolean;
export declare function isBoardDeleteKeyboardEvent(event: IBoardDeleteKeyboardEventLike): boolean;
export declare function resolveBoardElementSelectionDeleteParams(options: IResolveBoardElementSelectionDeleteParamsOptions): IBoardElementSelectionDeleteParam[];
