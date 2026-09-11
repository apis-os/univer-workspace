import type { ICommand, IMutationInfo } from '@univerjs/core';
import type { FormulaUnitType } from '@univerjs/engine-formula';
import type { IHostExternalReference } from '../../models/host-external-reference.model';
import type { ISetHostExternalReferenceMutationParams } from '../mutations/set-host-external-reference.mutation';
export interface IUpsertHostExternalReferenceCommandParams {
    /** Stable ID of the Host Unit that owns the formula and persisted mapping. */
    unitId: string;
    /**
     * Public Source name used in formula text, without brackets or quotes.
     * Positive integers are invalid because Excel reserves them as external-link slots.
     */
    qualifier: string;
    /** Stable Source Unit ID used for Formula Reference Data requests. */
    sourceUnitId: string;
    /** Source business type; product External References support Sheet and Base. */
    sourceUnitType: FormulaUnitType;
    /** Existing Host-local reference ID when the caller needs to update that exact entry. */
    referenceId?: string;
}
export interface IRemoveHostExternalReferenceCommandParams {
    /** Stable ID of the Host Unit that owns the mapping. */
    unitId: string;
    /** Host-local reference ID to remove. Supply this or `qualifier`. */
    referenceId?: string;
    /** Public Source qualifier to remove. Supply this or `referenceId`. */
    qualifier?: string;
}
export interface IUpsertHostExternalReferencesCommandParams {
    /** Stable ID of the Host Unit that owns the formula and persisted mappings. */
    unitId: string;
    /** Complete set of Source bindings required by one authoring operation. */
    references: readonly IHostExternalReference[];
}
export interface IHostExternalReferenceMutationPair {
    redoMutation?: IMutationInfo<ISetHostExternalReferenceMutationParams>;
    undoMutation?: IMutationInfo<ISetHostExternalReferenceMutationParams>;
}
export declare const UpsertHostExternalReferenceCommand: ICommand<IUpsertHostExternalReferenceCommandParams>;
export declare const UpsertHostExternalReferencesCommand: ICommand<IUpsertHostExternalReferencesCommandParams>;
export declare const RemoveHostExternalReferenceCommand: ICommand<IRemoveHostExternalReferenceCommandParams>;
export declare function buildUpsertHostExternalReferenceMutations(accessor: Parameters<ICommand['handler']>[0], unitId: string | undefined, references: ReadonlyArray<IHostExternalReference & {
    referenceId?: string;
}>): IHostExternalReferenceMutationPair | null;
