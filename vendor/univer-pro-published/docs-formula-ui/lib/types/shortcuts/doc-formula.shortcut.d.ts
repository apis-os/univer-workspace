import type { IShortcutItem } from '@univerjs/ui';
export interface IDocFormulaShortcutState {
    hasOpenPopup: () => boolean;
    hasSelectedFormula: () => boolean;
}
export declare function createDocFormulaShortcutItems(state: IDocFormulaShortcutState): IShortcutItem[];
export declare function canHandleDocFormulaObjectShortcut(target: EventTarget | null, hasSelectedFormula: () => boolean): boolean;
