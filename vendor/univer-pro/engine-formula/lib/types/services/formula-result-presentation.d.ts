import type { ICellData } from '@univerjs/core';
import type { IOtherFormulaResult } from '@univerjs/engine-formula';
import type { IFormulaLastValue } from '../models/formula-last-value';
export interface IFormulaResultPresentation {
    text: string;
    color?: string;
    pattern: string;
    cell?: ICellData;
    source: 'persisted' | 'calculated';
    stale: boolean;
}
export interface IResolveFormulaResultPresentationOptions {
    numberFormat?: {
        pattern: string;
    };
    lastValue?: IFormulaLastValue;
    result?: IOtherFormulaResult;
}
export declare function resolveFormulaResultPresentation(options: IResolveFormulaResultPresentationOptions): IFormulaResultPresentation;
export declare function getFormulaResultCell(result: IOtherFormulaResult | undefined): ICellData | undefined;
export declare function getScalarFormulaResultCell(result: IOtherFormulaResult | undefined): ICellData | undefined;
export declare function toFormulaLastValue(cell: ICellData): IFormulaLastValue | null;
