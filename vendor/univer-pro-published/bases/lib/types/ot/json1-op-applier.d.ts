import type { IBaseInvalidation, IBaseSnapshot, IMutationInfo, JSONXActions } from '@univerjs/core';
export declare const APPLY_BASE_JSON1_MUTATION_ID = "base.mutation.apply-base-json1";
export declare class BaseJson1OpApplier {
    static tryMaterializeSnapshot(snapshot: IBaseSnapshot, mutations: readonly IMutationInfo[]): IBaseSnapshot | null;
    applyOp(snapshot: IBaseSnapshot, op: JSONXActions): IBaseSnapshot;
    invertOp(snapshot: IBaseSnapshot, op: JSONXActions): JSONXActions;
    getAffectedRanges(op: JSONXActions): IBaseInvalidation[];
    private _getTablesToNormalize;
}
