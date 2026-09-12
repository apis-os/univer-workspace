export type SlideTableKeyboardAction = 'move-left' | 'move-right' | 'move-up' | 'move-down' | 'extend-left' | 'extend-right' | 'extend-up' | 'extend-down' | 'tab-forward' | 'tab-backward' | 'edit-cell' | 'clear-cells';
export type SlideTableKeyboardShortcutKey = 'arrow-left' | 'arrow-right' | 'arrow-up' | 'arrow-down' | 'shift-arrow-left' | 'shift-arrow-right' | 'shift-arrow-up' | 'shift-arrow-down' | 'tab' | 'shift-tab' | 'enter' | 'f2' | 'delete' | 'backspace';
export interface ISlideTableKeyboardMovement {
    rowDelta: number;
    columnDelta: number;
    extend: boolean;
    wrap?: boolean;
}
export interface ISlideTableKeyboardShortcutDescriptor {
    action: SlideTableKeyboardAction;
    key: SlideTableKeyboardShortcutKey;
}
export interface ISlideTableKeyboardShortcutBinding {
    action: SlideTableKeyboardAction;
    binding: number;
}
export type SlideTableKeyboardCellMovement = Pick<ISlideTableKeyboardMovement, 'rowDelta' | 'columnDelta' | 'wrap'> & {
    extend?: boolean;
};
export declare const SLIDE_TABLE_KEYBOARD_SHORTCUT_DESCRIPTORS: readonly ISlideTableKeyboardShortcutDescriptor[];
export declare function buildSlideTableKeyboardShortcutBindings(bindings: Record<SlideTableKeyboardShortcutKey, number>): ISlideTableKeyboardShortcutBinding[];
export declare function resolveSlideTableKeyboardMovement(action: SlideTableKeyboardAction): ISlideTableKeyboardMovement | null;
export declare function resolveNextSlideTableKeyboardCell(focus: {
    row: number;
    column: number;
}, movement: SlideTableKeyboardCellMovement, rowCount: number, columnCount: number): {
    row: number;
    column: number;
};
export declare function clampSlideTableCellPosition(position: {
    row: number;
    column: number;
}, rowCount: number, columnCount: number): {
    row: number;
    column: number;
};
export declare function wrapSlideTableCellPosition(focus: {
    row: number;
    column: number;
}, movement: Pick<SlideTableKeyboardCellMovement, 'rowDelta' | 'columnDelta'>, rowCount: number, columnCount: number): {
    row: number;
    column: number;
};
