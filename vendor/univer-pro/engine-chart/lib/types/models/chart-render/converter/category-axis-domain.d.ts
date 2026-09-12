import type { IChartDataCategory } from '../../../types';
export interface ICategoryAxisDomain {
    data: Array<string | number>;
    axisLabelFormatter?: (value: unknown) => string;
}
export declare function resolveCategoryAxisDomain(category?: IChartDataCategory): ICategoryAxisDomain | undefined;
