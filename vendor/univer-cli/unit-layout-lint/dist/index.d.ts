import { UniverRenderFormulaReferenceUnit, UniverRenderUnit, UniverSlideLayoutRuntime } from "@univer-cli/univer-render-runtime";
//#region src/errors.d.ts
type UnitLayoutLintErrorCode = "INVALID_INPUT" | "INVALID_RENDER_RESULT";
declare class UnitLayoutLintError extends Error {
  readonly code: UnitLayoutLintErrorCode;
  constructor(code: UnitLayoutLintErrorCode, message: string, options?: ErrorOptions);
}
declare function isUnitLayoutLintError(value: unknown): value is UnitLayoutLintError;
//#endregion
//#region src/types.d.ts
type SlideUnitData = Extract<UniverRenderUnit, {
  readonly unitType: "slide";
}>["unitData"];
type SlideLayoutLintRule = "text-off-page" | "text-escapes-container" | "text-overlaps-text";
type SlideLayoutLintPageSelector = number | string;
interface SlideLayoutLintBox {
  readonly height: number;
  readonly left: number;
  readonly top: number;
  readonly width: number;
}
interface SlideLayoutLintText {
  readonly color?: string;
  readonly content: string;
  readonly id: string;
  readonly ink: SlideLayoutLintBox;
  readonly opacity?: number;
}
interface SlideLayoutLintContainer {
  readonly box: SlideLayoutLintBox;
  readonly fill?: {
    readonly color?: string;
    readonly opacity?: number;
    readonly type?: string;
  };
  readonly id: string;
  readonly type: string;
}
interface SlideLayoutLintOverflow {
  readonly bottom?: number;
  readonly left?: number;
  readonly right?: number;
  readonly top?: number;
}
interface SlideLayoutLintFinding {
  readonly container?: SlideLayoutLintContainer;
  readonly detail: string;
  readonly fingerprint: string;
  readonly id: string;
  readonly other?: SlideLayoutLintText;
  readonly overflow?: SlideLayoutLintOverflow;
  readonly overlapRatio?: number;
  readonly page: number;
  readonly pageBox?: SlideLayoutLintBox;
  readonly pageId: string;
  readonly related?: string;
  readonly rule: SlideLayoutLintRule;
  readonly severity: "warning";
  readonly text: SlideLayoutLintText;
}
interface SlideUnitLayoutLintInput {
  readonly formulaReferenceUnits?: readonly UniverRenderFormulaReferenceUnit[];
  readonly pages?: readonly SlideLayoutLintPageSelector[];
  readonly signal?: AbortSignal;
  readonly unitData: SlideUnitData;
  readonly unitType: "slide";
}
type UnitLayoutLintInput = SlideUnitLayoutLintInput;
type UnitLayoutLintSource = Omit<UnitLayoutLintInput, "pages">;
interface SlideUnitLayoutLintReport {
  readonly coverage: {
    readonly pages: readonly {
      readonly page: number;
      readonly pageId: string;
    }[];
    readonly rules: readonly SlideLayoutLintRule[];
  };
  readonly findings: readonly SlideLayoutLintFinding[];
  readonly kind: "unit-layout-lint";
  readonly unitId: string;
  readonly unitType: "slide";
}
type UnitLayoutLintReport = SlideUnitLayoutLintReport;
interface UnitLayoutLint {
  lint(input: UnitLayoutLintInput): Promise<UnitLayoutLintReport>;
}
interface UnitLayoutLintOptions {
  readonly runtime: UniverSlideLayoutRuntime;
}
//#endregion
//#region src/unit-layout-lint.d.ts
declare function createUnitLayoutLint(options: UnitLayoutLintOptions): UnitLayoutLint;
//#endregion
export { type SlideLayoutLintBox, type SlideLayoutLintContainer, type SlideLayoutLintFinding, type SlideLayoutLintOverflow, type SlideLayoutLintPageSelector, type SlideLayoutLintRule, type SlideLayoutLintText, type SlideUnitLayoutLintInput, type SlideUnitLayoutLintReport, type UnitLayoutLint, UnitLayoutLintError, type UnitLayoutLintErrorCode, type UnitLayoutLintInput, type UnitLayoutLintOptions, type UnitLayoutLintReport, type UnitLayoutLintSource, createUnitLayoutLint, isUnitLayoutLintError };