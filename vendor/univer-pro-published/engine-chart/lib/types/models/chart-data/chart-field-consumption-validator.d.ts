import type { ChartTypeBits } from '../../enum';
import type { IUniverDataSet } from '../../types';
import type { IChartFieldDiagnostic } from '../common/chart-field-diagnostic';
import type { IChartFieldConsumption } from './chart-field-consumption';
export type ChartFieldValidationResult = {
    valid: true;
} | {
    valid: false;
    diagnostic: IChartFieldDiagnostic;
};
export declare function validateChartFieldConsumption(input: {
    chartType: ChartTypeBits;
    consumption: IChartFieldConsumption;
    dataSet: IUniverDataSet;
}): ChartFieldValidationResult;
