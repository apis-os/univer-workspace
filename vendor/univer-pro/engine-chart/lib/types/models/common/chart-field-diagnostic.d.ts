import type { ChartTypeBits } from '../../enum';
export declare enum ChartFieldDiagnosticCode {
    MissingCategoryFields = "chart-field.missing-category-fields",
    MissingSeriesFields = "chart-field.missing-series-fields",
    InvalidFieldIndex = "chart-field.invalid-field-index",
    InvalidValueFieldType = "chart-field.invalid-value-field-type",
    InvalidDataStructure = "chart-field.invalid-data-structure",
    UnsupportedChartType = "chart-field.unsupported-chart-type"
}
export interface IChartFieldDiagnostic {
    code: ChartFieldDiagnosticCode;
    chartType: ChartTypeBits;
    details?: Readonly<Record<string, number | string>>;
}
