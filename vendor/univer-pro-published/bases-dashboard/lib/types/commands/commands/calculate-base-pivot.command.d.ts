import type { ICommand, IFilterConfig } from '@univerjs/core';
import type { IBasePivotCalculationResult } from '../../types';
export interface ICalculateBasePivotCommandParams {
    unitId: string;
    tableId: string;
    viewId: string;
    filters?: Array<IFilterConfig | null>;
}
export declare const CalculateBasePivotCommand: ICommand<ICalculateBasePivotCommandParams, IBasePivotCalculationResult>;
