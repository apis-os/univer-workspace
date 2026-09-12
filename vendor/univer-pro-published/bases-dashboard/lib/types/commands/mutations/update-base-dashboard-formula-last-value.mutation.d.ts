import type { IFormulaLastValue } from '@univerjs-pro/engine-formula';
import type { IShapeFormulaLastValueGuard } from '@univerjs-pro/engine-shape';
import type { IMutation } from '@univerjs/core';
export interface IUpdateBaseDashboardFormulaLastValueMutationParams {
    unitId: string;
    dashboardId: string;
    widgetId: string;
    guard: IShapeFormulaLastValueGuard;
    lastValue: IFormulaLastValue;
}
export declare const UpdateBaseDashboardFormulaLastValueMutation: IMutation<IUpdateBaseDashboardFormulaLastValueMutationParams>;
