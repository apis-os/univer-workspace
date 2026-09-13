import type { IFormulaLastValue } from '@univerjs-pro/engine-formula';
import type { IMutation } from '@univerjs/core';
import type { IDocFormulaConfig, IDocFormulaResource } from '../common/type';
export interface ISetDocFormulaMutationParams {
    unitId: string;
    rangeId: string;
    config: IDocFormulaConfig;
}
export interface IRemoveDocFormulaMutationParams {
    unitId: string;
    rangeId: string;
}
export interface ISetDocFormulaResourceMutationParams {
    unitId: string;
    resource: IDocFormulaResource;
}
export interface ISetDocFormulaLastValuesMutationParams {
    unitId: string;
    updates: readonly {
        rangeId: string;
        expectedFormula: string;
        expectedNumberFormat?: string;
        expectedReferenceRevision: number;
        lastValue: IFormulaLastValue;
    }[];
}
export declare const SetDocFormulaMutation: IMutation<ISetDocFormulaMutationParams>;
export declare const RemoveDocFormulaMutation: IMutation<IRemoveDocFormulaMutationParams>;
export declare const SetDocFormulaResourceMutation: IMutation<ISetDocFormulaResourceMutationParams>;
/**
 * Applies derived cache values with a Formula-source compare-and-set guard.
 * The mutation is intentionally excluded from user undo history.
 */
export declare const SetDocFormulaLastValuesMutation: IMutation<ISetDocFormulaLastValuesMutationParams>;
