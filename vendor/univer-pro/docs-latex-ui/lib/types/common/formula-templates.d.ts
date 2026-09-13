export declare const FORMULA_TEMPLATE_CATEGORIES: readonly ["fractions", "scripts", "radicals", "integrals", "large-operators", "brackets", "functions", "accents", "limits-logarithms", "operators", "matrices"];
export type FormulaTemplateCategory = typeof FORMULA_TEMPLATE_CATEGORIES[number];
export interface IFormulaTemplate {
    category: FormulaTemplateCategory;
    id: string;
    latex: string;
    placeholderEnd: number;
    placeholderStart: number;
    previewLatex: string;
}
export declare const FORMULA_TEMPLATES: readonly IFormulaTemplate[];
export declare function getFormulaTemplate(id: string): IFormulaTemplate | undefined;
export declare function getFormulaTemplatesByCategory(category: FormulaTemplateCategory): readonly IFormulaTemplate[];
