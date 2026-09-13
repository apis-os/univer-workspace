import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineDashEnum, ShapeLineTypeEnum, ShapeModel, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, isConnectorShape, isShapeHostType } from "@univerjs-pro/engine-shape";
import { DependentOn, Disposable, HorizontalAlign, IConfigService, IUniverInstanceService, Inject, Injector, Plugin, UniverInstanceType, VerticalAlign, createParagraphId, merge, touchDependencies } from "@univerjs/core";
import { FormulaCacheEligibilityService, FormulaLastValuePersistenceService, HostExternalReferenceModel, UniverProFormulaEnginePlugin, getScalarFormulaResultCell, resolveFormulaResultPresentation, toFormulaLastValue } from "@univerjs-pro/engine-formula";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { OtherFormulaBizType, RegisterOtherFormulaService } from "@univerjs/engine-formula";
import { Subject } from "rxjs";
import { K } from "./internal-glue.js";
import { C, S } from "./shape-editor-plugin-config-key.js";
import { X } from "./shape-editor-shape-formula.js";
let Z = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113) {
    super(), this._instanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111, this._shapeHostAdapterRegistry = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112, this._shapeFormulaService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113, K(this, "_isDisposed", false), K(this, "_pendingUnitIds", new Set()), K(this, "_adapterBindings", new Map()), K(this, "_syncScheduled", false);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114 = this._shapeHostAdapterRegistry["adapterChanged$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618 => {
      this._handleAdapterChange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618);
    });
    this.disposeWithMe(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114.unsubscribe());
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620 of this._shapeHostAdapterRegistry["list"]()) this._bindAdapter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620);
    this.disposeWithMe(this._instanceService["unitAdded$"].subscribe(({
      unit: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621
    }) => {
      this._queueSync(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621.getUnitId());
    })), this.disposeWithMe(this._instanceService["unitDisposed$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623 => {
      this._shapeFormulaService["unregisterUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623.getUnitId());
    }));
  }
  _handleAdapterChange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119) {
    this._isDisposed || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119.type === "registered" ? this._bindAdapter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119.adapter) : this._unbindAdapter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119.adapter));
  }
  _bindAdapter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123 = this._adapterBindings["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121.hostType);
    if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123.adapter) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121) return;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123.unsubscribe();
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121.shapeChanged$) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122.subscribe(({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625
    }) => this._queueSync(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625));
    this._adapterBindings["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121.hostType, {
      adapter: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121,
      unsubscribe: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124.unsubscribe()
    });
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626 of this._instanceService["getAllUnitsForType"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121.hostType)) this._syncUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626.getUnitId());
  }
  _unbindAdapter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130 = this._adapterBindings["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129.hostType);
    if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.adapter) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129) {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.unsubscribe(), this._adapterBindings["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129.hostType);
      for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 of this._instanceService["getAllUnitsForType"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129.hostType)) this._shapeFormulaService["unregisterUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.getUnitId());
    }
  }
  _queueSync(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133) {
    this._pendingUnitIds["add"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133), !this._syncScheduled && (this._syncScheduled = true, queueMicrotask(() => {
      if (this._syncScheduled = false, this._isDisposed) return;
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A = [...this._pendingUnitIds];
      this._pendingUnitIds["clear"](), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 => this._syncUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464));
    }));
  }
  _syncUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138 = this._instanceService["getUnitType"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135);
    if (!isShapeHostType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138)) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136 = this._adapterBindings["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136.adapter;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139 && this._shapeFormulaService["syncUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135, ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139.listShapesInUnit) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135)) ?? []);
  }
  dispose() {
    this._isDisposed = true;
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627 of this._adapterBindings["values"]()) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627.unsubscribe();
    this._adapterBindings["clear"](), super.dispose();
  }
};
let Q = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148) {
    super(), this._formulaService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145, this._cacheEligibilityService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146, this._shapeHostAdapterRegistry = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147, this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148.registerProvider(this));
  }
  collectMutations(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153) {
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6 = [];
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628 of this._formulaService["getRegisteredFormulas"]()) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154;
      if (!this._cacheEligibilityService["assess"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628.binding["formula"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628.liveResult).eligible) continue;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465 = getScalarFormulaResultCell(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628.liveResult),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465 ? toFormulaLastValue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465) : null;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466 || Oe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628.binding["lastValue"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466)) continue;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467 = this._shapeHostAdapterRegistry["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628.identity["hostType"]),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467.createFormulaLastValueMutation) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628.identity, {
          expectedFormula: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628.binding["formula"],
          expectedReferenceRevision: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628.referenceRevision
        }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468);
    }
    return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6;
  }
};
function Oe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312.v) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313.v && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312.t) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313.t && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312.pattern) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313.pattern;
}
let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338 = class extends Plugin {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157 = C, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159) {
    super(), this._config = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158, this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159;
    let {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160
    } = merge({}, C, this._config);
    this._configService["setConfig"](S, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160);
  }
  onStarting() {
    this._injector["add"]([X]), this._injector["add"]([Z]), this._injector["add"]([Q]);
  }
  onReady() {
    touchDependencies(this._injector, [[Z], [Q]]);
  }
};
export { var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338 as UniverShapeEditorPlugin };
export { Z, Q };
