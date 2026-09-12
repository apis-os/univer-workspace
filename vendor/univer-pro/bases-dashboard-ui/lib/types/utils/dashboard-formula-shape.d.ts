import type { BaseDashboardFormulaShapeNumberFormat, IBaseDashboardFormulaShapeAppearance, IBaseDashboardFormulaShapeWidget } from '@univerjs-pro/bases-dashboard';
export declare const DASHBOARD_FORMULA_SHAPE_DEFAULT_APPEARANCE: {
    readonly alignment: "left";
    readonly currency: "USD";
    readonly decimalPlaces: 0;
    readonly fontSize: 40;
    readonly fontSizeMode: "auto";
    readonly numberFormat: "general";
};
export type ResolvedDashboardFormulaShapeAppearance = Required<Omit<IBaseDashboardFormulaShapeAppearance, 'backgroundColor' | 'backgroundImage' | 'textColor'>> & Pick<IBaseDashboardFormulaShapeAppearance, 'backgroundColor' | 'backgroundImage' | 'textColor'>;
export declare function resolveDashboardFormulaShapeAppearance(widget: IBaseDashboardFormulaShapeWidget): ResolvedDashboardFormulaShapeAppearance;
export declare function updateDashboardFormulaShapeAppearance(widget: IBaseDashboardFormulaShapeWidget, patch: Partial<IBaseDashboardFormulaShapeAppearance>): IBaseDashboardFormulaShapeWidget;
export declare function createDashboardFormulaShapeNumberFormatPattern(format: BaseDashboardFormulaShapeNumberFormat, decimalPlaces: number, currency: string): string;
export declare function formatDashboardFormulaShapeValue(displayText: string, value: unknown, appearance: IBaseDashboardFormulaShapeAppearance): string;
