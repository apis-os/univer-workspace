import type { ICommandService, Nullable } from '@univerjs/core';
import type { IKeyboardEventConfig } from '@univerjs/docs-ui';
import type { IShapeTextEditingParams } from './types';
interface IShapeTextEditorKeyboardRange {
    startOffset?: number;
    endOffset?: number;
    collapsed?: boolean;
}
export declare function getShapeTextEditorSelectAllRange(dataStreamLength: number): {
    startOffset: number;
    endOffset: number;
};
export declare function isShapeTextEditorKeyboardFocusActive(isInputFocusing: boolean, textRanges: readonly IShapeTextEditorKeyboardRange[] | null | undefined): boolean;
interface IShapeTextEditorKeyboardOptions {
    commitOnEnter?: boolean;
    cancel?: () => void;
    commit?: () => void;
    currentFontSize?: number;
}
export declare const DEFAULT_SHAPE_TEXT_EDITOR_FONT_SIZE = 14;
export declare function getShapeTextEditorFocusSessionKey(options: {
    editorUnitId: string;
    editingParams: Nullable<IShapeTextEditingParams>;
}): string | null;
export declare function shouldCompleteShapeTextEditingOnPointerDown(target: EventTarget | null, editorElement: HTMLElement | null): boolean;
export declare function getShapeTextEditorKeyboardConfig(commandService: Pick<ICommandService, 'executeCommand'>, executeUndoRedoCommand?: (commandId: string) => void, options?: IShapeTextEditorKeyboardOptions): IKeyboardEventConfig;
export {};
/**
 * Shape editor component - second layer DOM.
 * Handles document editing, content height tracking, and vertical alignment.
 */
