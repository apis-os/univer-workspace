import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineDashEnum, ShapeLineTypeEnum, ShapeModel, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, isConnectorShape, isShapeHostType } from "@univerjs-pro/engine-shape";
import { DependentOn, Disposable, HorizontalAlign, IConfigService, IUniverInstanceService, Inject, Injector, Plugin, UniverInstanceType, VerticalAlign, createParagraphId, merge, touchDependencies } from "@univerjs/core";
import { FormulaCacheEligibilityService, FormulaLastValuePersistenceService, HostExternalReferenceModel, UniverProFormulaEnginePlugin, getScalarFormulaResultCell, resolveFormulaResultPresentation, toFormulaLastValue } from "@univerjs-pro/engine-formula";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { OtherFormulaBizType, RegisterOtherFormulaService } from "@univerjs/engine-formula";
import { Subject } from "rxjs";
function fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig11DC(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213.type === "text") return null;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213.type === "shape") return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212,
    fill: {
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212.fill ?? {}),
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213.fill
    },
    stroke: {
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212.stroke ?? {}),
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213.stroke
    }
  };
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216 = "ln" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212.ln : undefined;
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212,
    stroke: {
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212.stroke ?? {}),
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213.stroke
    },
    ln: {
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216 ?? {}),
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213.ln,
      startArrow: {
        ...((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216.startArrow) ?? {}),
        ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213.ln) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214.startArrow) ?? {})
      },
      endArrow: {
        ...((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216.endArrow) ?? {}),
        ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213.ln) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215.endArrow) ?? {})
      }
    }
  };
}
export { fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig11DC as applyQuickStyleToShapeData };
