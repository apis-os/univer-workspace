import type { ICommand } from '@univerjs/core';
export interface IPersistFormulaLastValuesCommandParams {
    sessionId: number;
}
/** Internal derived-state command. It intentionally does not create an undo entry. */
export declare const PersistFormulaLastValuesCommand: ICommand<IPersistFormulaLastValuesCommandParams>;
