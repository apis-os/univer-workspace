import type { SlideTableKeyboardAction } from '@univerjs-pro/slides-table-ui';
export interface IBoardTableCellEditorKeyboardEventLike {
    altKey?: boolean;
    ctrlKey?: boolean;
    key: string;
    metaKey?: boolean;
    shiftKey?: boolean;
}
export declare function resolveBoardTableCellEditorKeyboardAction(event: IBoardTableCellEditorKeyboardEventLike): SlideTableKeyboardAction | null;
