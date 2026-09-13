import { ChartTypeBits, StackType } from '../../enum';
import { ChartTypeString } from '../chart-types';
export declare function chartTypeToBits(type: ChartTypeString): ChartTypeBits;
export declare function chartBitsToType(bits: ChartTypeBits): ChartTypeString;
export declare function getChartStackType(chartType: ChartTypeBits | undefined): StackType | undefined;
export declare function withChartStackType(chartType: ChartTypeBits, stackType: StackType | ''): ChartTypeBits;
