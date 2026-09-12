export declare const BASE_CANVAS_KEYBOARD_INPUT_COMPONENT = "base-canvas-keyboard-input";
export interface IGetBaseCanvasRootOptions {
    unitId?: string;
    scope?: ParentNode;
}
export declare function focusBaseCanvasRoot(root: HTMLElement | null, clientX?: number, clientY?: number): void;
export declare function getBaseCanvasKeyboardInput(target: EventTarget | null): HTMLTextAreaElement | null;
export declare function resolveBaseCanvasKeyboardInputText(event: Pick<InputEvent, 'data' | 'isComposing'>, input: HTMLTextAreaElement): string | null;
export declare function restoreBaseCanvasKeyboardFocus(unitId?: string, getCanvasRoot?: (unitId?: string) => HTMLElement | null): void;
export declare function getBaseCanvasRoot(options?: ParentNode | IGetBaseCanvasRootOptions): HTMLElement | null;
