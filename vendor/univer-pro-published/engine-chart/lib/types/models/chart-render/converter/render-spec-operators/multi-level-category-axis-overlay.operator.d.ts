import type { EChartRenderSpecOperator, IChartDataCategoryHierarchy } from '../../../../types';
interface ICategoryAxisBand {
    label: string;
    level: number;
    startIndex: number;
    endIndex: number;
    drawStartBoundary: boolean;
    drawEndBoundary: boolean;
}
export declare function buildCategoryAxisBands(hierarchy: IChartDataCategoryHierarchy): ICategoryAxisBand[];
export declare const multiLevelCategoryAxisOverlayOperator: EChartRenderSpecOperator;
export {};
