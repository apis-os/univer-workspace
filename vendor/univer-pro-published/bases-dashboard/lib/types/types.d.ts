import type { ChartStyle, ChartTypeBits, IChartContext, IChartDataAggregation, IChartResourceContext } from '@univerjs-pro/engine-chart';
import type { IPivotTableSnapshot, IPivotViewJSON } from '@univerjs-pro/engine-pivot';
import type { IShapeData, ShapeTypeEnum } from '@univerjs-pro/engine-shape';
import type { BaseViewType, IDocumentData, IFilterConfig, ImageSourceType, IViewSnapshot } from '@univerjs/core';
export type BasePivotViewDisplayMode = 'chart-and-table' | 'chart' | 'table';
export interface IBasePivotChartConfig {
    type: ChartTypeBits;
    style?: ChartStyle;
    context?: Partial<IChartContext>;
    dataAggregation?: IChartDataAggregation;
    orient?: IChartResourceContext['orient'];
}
export interface IBasePivotViewConfig extends Record<string, unknown> {
    pivot: IPivotTableSnapshot;
    chart: IBasePivotChartConfig;
    displayMode: BasePivotViewDisplayMode;
}
export interface IBasePivotViewSnapshot extends IViewSnapshot<IBasePivotViewConfig> {
    type: BaseViewType.Pivot;
}
export interface IBasePivotCalculationRequest {
    requestId: string;
    unitId: string;
    tableId: string;
    viewId: string;
    pivot: IPivotTableSnapshot;
    filters?: Array<IFilterConfig | null>;
}
export interface IBasePivotCalculationResult {
    requestId: string;
    unitId: string;
    tableId: string;
    viewId: string;
    view: IPivotViewJSON;
}
export interface IBaseDashboardLayout {
    column: number;
    row: number;
    columnSpan: number;
    rowSpan: number;
}
export declare const BaseDashboardWidgetType: {
    readonly PivotChart: "pivot-chart";
    readonly TableFilter: "table-filter";
    readonly Text: "text";
    readonly Image: "image";
    readonly FormulaShape: "formula-shape";
};
export type BaseDashboardWidgetType = typeof BaseDashboardWidgetType[keyof typeof BaseDashboardWidgetType];
export declare enum BaseDashboardHistoryAction {
    CreateWidget = "create-widget",
    RenameDashboard = "rename-dashboard",
    ReorderWidgets = "reorder-widgets",
    UpdateWidget = "update-widget",
    RemoveWidget = "remove-widget"
}
interface IBaseDashboardWidgetBase {
    id: string;
    type: BaseDashboardWidgetType;
    layout: IBaseDashboardLayout;
    title?: string;
}
export interface IBaseDashboardPivotChartWidget extends IBaseDashboardWidgetBase {
    type: typeof BaseDashboardWidgetType.PivotChart;
    tableId: string;
    pivotViewId: string;
    /** Dashboard-local presentation. Pivot calculation and field mapping remain owned by the Pivot View. */
    chart?: IBasePivotChartConfig;
}
export interface IBaseDashboardTableFilterWidget extends IBaseDashboardWidgetBase {
    type: typeof BaseDashboardWidgetType.TableFilter;
    tableId: string;
    filter: IFilterConfig | null;
}
export interface IBaseDashboardTextWidget extends IBaseDashboardWidgetBase {
    type: typeof BaseDashboardWidgetType.Text;
    document: IDocumentData;
    appearance?: IBaseDashboardTextAppearance;
}
export type BaseDashboardImageDisplayMode = 'cover' | 'repeat' | 'original';
export interface IBaseDashboardImageWidget extends IBaseDashboardWidgetBase {
    type: typeof BaseDashboardWidgetType.Image;
    source: string;
    sourceType: ImageSourceType;
    alt?: string;
    displayMode?: BaseDashboardImageDisplayMode;
}
export interface IBaseDashboardFormulaShapeWidget extends IBaseDashboardWidgetBase {
    type: typeof BaseDashboardWidgetType.FormulaShape;
    tableId: string;
    shapeType: ShapeTypeEnum;
    shapeData: IShapeData;
    description?: string;
    appearance?: IBaseDashboardFormulaShapeAppearance;
}
export type BaseDashboardFormulaShapeAlignment = 'left' | 'center' | 'right';
export type BaseDashboardFormulaShapeFontSizeMode = 'auto' | 'custom';
export interface IBaseDashboardTextAppearance {
    backgroundColor?: string;
    textColor?: string;
    alignment?: BaseDashboardFormulaShapeAlignment;
    fontSizeMode?: BaseDashboardFormulaShapeFontSizeMode;
    fontSize?: number;
}
export type BaseDashboardFormulaShapeNumberFormat = 'general' | 'number' | 'percent' | 'currency' | 'grouped' | 'compact';
export type BaseDashboardFormulaShapeBackgroundImageFit = 'cover' | 'contain';
export interface IBaseDashboardFormulaShapeBackgroundImage {
    source: string;
    sourceType: ImageSourceType;
    fit: BaseDashboardFormulaShapeBackgroundImageFit;
}
export interface IBaseDashboardFormulaShapeAppearance extends IBaseDashboardTextAppearance {
    backgroundImage?: IBaseDashboardFormulaShapeBackgroundImage;
    numberFormat?: BaseDashboardFormulaShapeNumberFormat;
    decimalPlaces?: number;
    currency?: string;
}
export type IBaseDashboardWidget = IBaseDashboardPivotChartWidget | IBaseDashboardTableFilterWidget | IBaseDashboardTextWidget | IBaseDashboardImageWidget | IBaseDashboardFormulaShapeWidget;
export interface IBaseDashboardSnapshot {
    id: string;
    name: string;
    widgetOrder: string[];
    widgets: Record<string, IBaseDashboardWidget>;
}
export interface IBaseDashboardResource {
    version: number;
    dashboardOrder: string[];
    dashboards: Record<string, IBaseDashboardSnapshot>;
}
export {};
