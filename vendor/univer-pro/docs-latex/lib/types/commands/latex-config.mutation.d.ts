import type { IMutation } from '@univerjs/core';
import type { IDocsLatexFormulaConfig } from '../common/type';
export interface ISetDocsLatexFormulaMutationParams {
    unitId: string;
    rangeId: string;
    config: IDocsLatexFormulaConfig;
}
export interface IRemoveDocsLatexFormulaMutationParams {
    unitId: string;
    rangeId: string;
}
export declare const SetDocsLatexFormulaMutation: IMutation<ISetDocsLatexFormulaMutationParams>;
export declare const RemoveDocsLatexFormulaMutation: IMutation<IRemoveDocsLatexFormulaMutationParams>;
