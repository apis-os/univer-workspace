import type { BaseSelection, BaseViewProjection, IProjectedRow } from '@univerjs/core';
export interface IBaseResolvedGridSelectionRange {
    rows: IProjectedRow[];
    fieldIds: string[];
}
export declare function resolveBaseGridSelectionRange(selection: BaseSelection | null | undefined, projection: BaseViewProjection): IBaseResolvedGridSelectionRange | null;
