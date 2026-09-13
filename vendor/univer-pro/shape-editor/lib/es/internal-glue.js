import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineDashEnum, ShapeLineTypeEnum, ShapeModel, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, isConnectorShape, isShapeHostType } from "@univerjs-pro/engine-shape";
import { DependentOn, Disposable, HorizontalAlign, IConfigService, IUniverInstanceService, Inject, Injector, Plugin, UniverInstanceType, VerticalAlign, createParagraphId, merge, touchDependencies } from "@univerjs/core";
import { FormulaCacheEligibilityService, FormulaLastValuePersistenceService, HostExternalReferenceModel, UniverProFormulaEnginePlugin, getScalarFormulaResultCell, resolveFormulaResultPresentation, toFormulaLastValue } from "@univerjs-pro/engine-formula";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { OtherFormulaBizType, RegisterOtherFormulaService } from "@univerjs/engine-formula";
import { Subject } from "rxjs";
import { X } from "./shape-editor-shape-formula.js";
import { Q, Z, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338 } from "./shape-editor-plugin.js";
var Ce = "@univerjs-pro/shape-editor",
  we = "1.0.0-insiders.20260907-70fc579";
function G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270) {
  "@babel/helpers - typeof";

  return G = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633 && typeof Symbol == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633 !== Symbol.prototype ? "symbol" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633;
  }, G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270);
}
function Te(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273) {
  if (G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272) != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273 || "default");
    if (G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275) != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273 === "string" ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272);
}
function Ee(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281 = Te(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280, "string");
  return G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281) == "symbol" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281 + "";
}
function K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285 = Ee(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284;
}
function q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46290, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291) {
  return function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46290);
  };
}
function J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298 = arguments.length,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297 === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297 = Object.getOwnPropertyDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299 = Reflect.decorate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297);else {
    for (var var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D--) (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D]) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298 > 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298 > 3 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299 && Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299;
}
X = J([q(0, Inject(RegisterOtherFormulaService)), q(1, Inject(HostExternalReferenceModel))], X);
Z = J([q(0, IUniverInstanceService), q(1, IShapeHostAdapterRegistry), q(2, Inject(X))], Z);
Q = J([q(0, Inject(X)), q(1, Inject(FormulaCacheEligibilityService)), q(2, IShapeHostAdapterRegistry), q(3, Inject(FormulaLastValuePersistenceService))], Q);
K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338, "type", UniverInstanceType.UNIVER_UNKNOWN), K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338, "pluginName", "SHAPE_EDITOR_PLUGIN"), K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338, "packageName", Ce), K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338, "version", we), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338 = J([DependentOn(UniverLicensePlugin, UniverProFormulaEnginePlugin, UniverShapePlugin), q(1, Inject(Injector)), q(2, IConfigService)], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338);
export { K };
