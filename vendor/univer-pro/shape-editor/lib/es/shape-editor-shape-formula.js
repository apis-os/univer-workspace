import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineDashEnum, ShapeLineTypeEnum, ShapeModel, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, isConnectorShape, isShapeHostType } from "@univerjs-pro/engine-shape";
import { DependentOn, Disposable, HorizontalAlign, IConfigService, IUniverInstanceService, Inject, Injector, Plugin, UniverInstanceType, VerticalAlign, createParagraphId, merge, touchDependencies } from "@univerjs/core";
import { FormulaCacheEligibilityService, FormulaLastValuePersistenceService, HostExternalReferenceModel, UniverProFormulaEnginePlugin, getScalarFormulaResultCell, resolveFormulaResultPresentation, toFormulaLastValue } from "@univerjs-pro/engine-formula";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { OtherFormulaBizType, RegisterOtherFormulaService } from "@univerjs/engine-formula";
import { Subject } from "rxjs";
import { K } from "./internal-glue.js";
import { W } from "./shape-editor-shape-formula-presentation.js";
function Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310.unitId + "\x00" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310.subUnitId + "\x00" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310.shapeId;
}
let X = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640) {
    super(), this._registerOtherFormulaService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639, this._hostExternalReferenceModel = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640, K(this, "_registrations", new Map()), K(this, "_formulaKeys", new Map()), K(this, "_presentationChanged$", new Subject()), K(this, "presentationChanged$", this._presentationChanged$["asObservable"]()), this.disposeWithMe(this._registerOtherFormulaService["formulaResult$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469 => {
      for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 of Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469)) for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 of Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462)) for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461) this._updateFormulaResult(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46);
    }));
  }
  register(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645 = Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646 = this._registrations["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647 = this._hostExternalReferenceModel["getRevision"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643.unitId);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646.binding["formula"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644.formula && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646.referenceRevision === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643.hostType === undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646.hostType === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643.hostType) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646.formulaUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643.unitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646.formulaSubUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643.subUnitId) {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646.binding = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646.formulaId ? this._registerOtherFormulaService["getFormulaValueSync"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646.formulaUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646.formulaSubUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646.formulaId) ?? undefined : undefined;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646.liveResult = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611, this._setPresentation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645, W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611));
      return;
    }
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646.formulaId && (this._registerOtherFormulaService["deleteFormula"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646.formulaUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646.formulaSubUnitId, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646.formulaId]), this._formulaKeys["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646.formulaId));
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643,
      hostType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643.hostType ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646.hostType),
      binding: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644,
      referenceRevision: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647,
      formulaSubUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643.subUnitId,
      formulaUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643.unitId,
      presentation: W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644, undefined)
    };
    if (this._registrations["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB), !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644.formula["trim"]()) {
      this._setPresentation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.presentation);
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648 = this._registerOtherFormulaService["registerFormulaWithRange"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644.formula, undefined, {
      shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643.shapeId
    }, OtherFormulaBizType.SHAPE, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643.shapeId);
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.formulaId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648, this._formulaKeys["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645);
  }
  update(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656) {
    this.register(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656);
  }
  unregister(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660 = Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661 = this._registrations["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661.formulaId && (this._registerOtherFormulaService["deleteFormula"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661.formulaUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661.formulaSubUnitId, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661.formulaId]), this._formulaKeys["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661.formulaId)), this._registrations["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660));
  }
  unregisterUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665) {
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612 of [...this._registrations["values"]()]) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612.unitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665 && this.unregister(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612);
  }
  syncUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668) {
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613.shapeData["formulaBinding"]),
      var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299 = new Set(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2.map(Y));
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614 of [...this._registrations["values"]()]) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614.unitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667 && !var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299.has(Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614)) && this.unregister(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614);
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615 of var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2) this.register(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615.shapeData["formulaBinding"]);
  }
  getPresentation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672;
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672 = this._registrations["get"](Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671))) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672.presentation;
  }
  getResult(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676 = this._registrations["get"](Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675));
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676 ? this._createResult(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676.presentation) : undefined;
  }
  getRegisteredFormulas() {
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4 = [];
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616 of this._registrations["values"]()) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616.hostType !== undefined && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4.push({
      identity: {
        hostType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616.hostType,
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616.subUnitId,
        shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616.shapeId
      },
      binding: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616.binding,
      referenceRevision: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616.referenceRevision,
      liveResult: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616.liveResult,
      presentation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616.presentation
    });
    return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4;
  }
  _updateFormulaResult(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680 = this._formulaKeys["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679.formulaId),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680 ? this._registrations["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680) : undefined;
    !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681.liveResult = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679, this._setPresentation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680, W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681.binding, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679)));
  }
  _setPresentation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691 = this._registrations["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691.presentation["text"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686.text && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691.presentation["color"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686.color && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691.presentation["pattern"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686.pattern && ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691.presentation["cell"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687.t) === ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686.cell) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688.t) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691.presentation["source"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686.source && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691.presentation["stale"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686.stale && Object.is((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691.presentation["cell"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689.v, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686.cell) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690.v)) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691.presentation;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691.presentation = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686, this._presentationChanged$["next"]({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691.subUnitId,
      shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691.shapeId,
      presentation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686,
      previousPresentation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692,
      result: this._createResult(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686),
      previousResult: this._createResult(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692),
      animationEnabled: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691.binding["animationEnabled"] !== false && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692.stale
    });
  }
  _createResult(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102.cell) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103.v;
    return {
      status: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101.binding["formula"].trim() ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102.stale || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102.cell == null ? "pending" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105 == "string" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105.startsWith("#") ? "error" : "success" : "empty",
      value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105,
      valueType: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102.cell) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104.t) ?? undefined,
      displayText: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102.text,
      color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102.color,
      numberFormat: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102.pattern,
      source: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102.source,
      stale: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102.stale
    };
  }
  dispose() {
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617 of this._registrations["values"]()) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617.formulaId && this._registerOtherFormulaService["deleteFormula"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617.formulaUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617.formulaSubUnitId, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617.formulaId]);
    this._registrations["clear"](), this._formulaKeys["clear"](), this._presentationChanged$["complete"](), super.dispose();
  }
};
export { X as ShapeFormulaService };
