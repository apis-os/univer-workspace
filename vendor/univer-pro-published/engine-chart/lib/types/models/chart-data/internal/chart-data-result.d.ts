import type { IChartData } from '../../../types';
import type { IChartFieldDiagnostic } from '../../common/chart-field-diagnostic';
export declare function createEmptyChartData(headers?: string[]): IChartData;
export declare function createInvalidChartData(headers: string[] | undefined, fieldDiagnostic: IChartFieldDiagnostic): IChartData;
export declare function calculateNumericExtent<T>(items: readonly T[], getValue: (item: T) => number): Pick<IChartData, 'maxValue' | 'minValue'>;
