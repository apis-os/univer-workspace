import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineDashEnum, ShapeLineTypeEnum, ShapeModel, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, isConnectorShape, isShapeHostType } from "@univerjs-pro/engine-shape";
import { DependentOn, Disposable, HorizontalAlign, IConfigService, IUniverInstanceService, Inject, Injector, Plugin, UniverInstanceType, VerticalAlign, createParagraphId, merge, touchDependencies } from "@univerjs/core";
import { FormulaCacheEligibilityService, FormulaLastValuePersistenceService, HostExternalReferenceModel, UniverProFormulaEnginePlugin, getScalarFormulaResultCell, resolveFormulaResultPresentation, toFormulaLastValue } from "@univerjs-pro/engine-formula";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { OtherFormulaBizType, RegisterOtherFormulaService } from "@univerjs/engine-formula";
import { Subject } from "rxjs";
import { E } from "./shape-editor-shape-text-box-shape-data.js";
import { w } from "./shape-editor-plugin-config-key.js";
function D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177 = {}) {
  return {
    ...E({
      fill: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177.fill,
      stroke: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177.stroke,
      isHorizontal: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177.isHorizontal ?? true,
      textStyle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177.textStyle,
      verticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177.verticalAlign ?? VerticalAlign.MIDDLE
    }),
    textRectPadding: {
      ...w,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177.textRectPadding
    },
    formulaBinding: {
      formula: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177.formula ?? "",
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177.lastValue ? {
        lastValue: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177.lastValue
      } : null),
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177.numberFormatPattern ? {
        numberFormat: {
          pattern: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177.numberFormatPattern
        }
      } : null)
    }
  };
}
export { D as createFormulaShapeData };
