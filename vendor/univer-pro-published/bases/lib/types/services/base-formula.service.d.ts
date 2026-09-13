import type { ISetFormulaCalculationResultMutation, ISuperTable } from '@univerjs-pro/engine-formula';
import type { IBaseCellData, IBaseSnapshot, ITableSnapshot } from '@univerjs/core';
export { getBaseFormulaTableName } from '@univerjs/core';
export interface IBaseFormulaValidationResult {
    valid: boolean;
    reason?: string;
}
export interface IBaseFormulaDependency {
    tableId: string;
    fieldId: string;
}
export interface IBaseFormulaContext {
    snapshot?: IBaseSnapshot;
}
export interface IBaseSuperTableRegistration {
    tableId: string;
    tableName: string;
    reference: ISuperTable;
}
export interface IBaseFormulaResultPatchGroup {
    unitId: string;
    tableId: string;
    patches: Array<{
        row: number;
        col: number;
        value: IBaseCellData | null;
    }>;
}
export declare class BaseFormulaService {
    createSuperTableReference(table: ITableSnapshot, sheetId?: string): ISuperTable;
    getSuperTableRegistrations(snapshot: IBaseSnapshot, tableIds?: Iterable<string>): IBaseSuperTableRegistration[];
    validateFormula(formula: string, table: ITableSnapshot, context?: IBaseFormulaContext): IBaseFormulaValidationResult;
    getDependencies(formula: string, table: ITableSnapshot, context?: IBaseFormulaContext): string[];
    getStructuredDependencies(formula: string, table: ITableSnapshot, context?: IBaseFormulaContext): IBaseFormulaDependency[];
}
export declare function createBaseFormulaResultPatches(snapshot: IBaseSnapshot, result: ISetFormulaCalculationResultMutation): IBaseFormulaResultPatchGroup[];
