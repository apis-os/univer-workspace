import { FormulaCacheEligibilityService, FormulaLastValuePersistenceService, HostExternalReferenceModel, UniverProFormulaEnginePlugin, buildUpsertHostExternalReferenceMutations, collectFormulaExternalReferenceQualifiers, getScalarFormulaResultCell, resolveFormulaResultPresentation, resolveHostFormulaExternalReferences, toFormulaLastValue } from "@univerjs-pro/engine-formula";
import { CellValueType, CommandType, CustomRangeType, DataStreamTreeTokenType, DependentOn, Disposable, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, JSONX, Plugin, TextX, Tools, UniverInstanceType, generateRandomId, getBodySliceForTextXAction, getCustomRangeInterval, getParagraphContentStartOffset, getRichTextEditPath, merge, shiftExclusiveRangeOnDelete, shiftExclusiveRangeOnInsert, shiftInclusiveRangeOnDelete, shiftInclusiveRangeOnInsert, touchDependencies } from "@univerjs/core";
import { DOC_SELECTION_OPTION_PRESERVE_CARET, DocSelectionManagerService, DocTextResolverService, RichTextEditingMutation, UniverDocsPlugin } from "@univerjs/docs";
import { FormulaResultStatus, LexerTreeBuilder, OtherFormulaBizType, RegisterOtherFormulaService } from "@univerjs/engine-formula";
import { Subject } from "rxjs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { N } from "./internal-core-endo.js";
import { T, w } from "./docs-formula-doc-formula-range.js";
import { P } from "./docs-formula-doc-formula-model.js";
import { Be } from "./docs-formula-remove-doc-formula-actions.js";
import { b } from "./docs-formula-empty-doc-formula-resource.js";
import { Re } from "./docs-formula-insert-doc-formula-actions.js";
import { C } from "./docs-formula-invalid-doc-formula-insert-range-error.js";
let L = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169) {
    super(), this._model = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167, this._registrationService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168, this._hostExternalReferenceModel = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169, N(this, "_registrations", new Map()), N(this, "_formulaKeys", new Map()), N(this, "_presentationChanged$", new Subject()), N(this, "presentationChanged$", this._presentationChanged$["asObservable"]()), this.disposeWithMe(this._registrationService["formulaResult$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469 => {
      for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 of Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469)) for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 of Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462)) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 => this._updateFormulaResult(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46));
    }));
  }
  syncUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173.getUnitId(),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173.getSnapshot().body) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174.customRanges) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174.filter(w)) ?? [],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176 = this._model["getFormulas"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175),
      var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299 = new Set();
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611 of var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.rangeId];
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 && (var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299.add(R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.rangeId)), this.register({
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175,
        rangeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.rangeId
      }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463));
    }
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612 of Array.from(this._registrations["values"]())) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612.unitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175 && !var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299.has(R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612.rangeId)) && this.unregister(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612);
  }
  register(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183 = R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181.rangeId),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184 = this._registrations["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185 = this._hostExternalReferenceModel["getRevision"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181.unitId);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184.config["formula"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182.formula && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184.referenceRevision === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185) {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184.config = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184.formulaId ? this._registrationService["getFormulaValueSync"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184.formulaId) ?? undefined : undefined;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184.liveResult = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613, this._setPresentation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183, z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613));
      return;
    }
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184.formulaId && this._deleteRegistration(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184);
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181,
      config: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182,
      referenceRevision: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185,
      presentation: z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182, undefined)
    };
    if (this._registrations["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB), !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182.formula["trim"]()) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186 = this._registrationService["registerFormulaWithRange"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182.formula, undefined, {
      rangeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181.rangeId
    }, OtherFormulaBizType.DOC, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181.rangeId);
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.formulaId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186, this._formulaKeys["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183);
  }
  unregister(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194 = R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.rangeId),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195 = this._registrations["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195 && (this._deleteRegistration(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195), this._registrations["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194));
  }
  unregisterUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199) {
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614 of Array.from(this._registrations["values"]())) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614.unitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199 && this.unregister(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614);
  }
  getPresentation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202;
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202 = this._registrations["get"](R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201.rangeId))) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202.presentation;
  }
  getResult(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206 = this._registrations["get"](R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205.rangeId));
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206 ? B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206) : undefined;
  }
  getRegisteredFormulas() {
    return Array.from(this._registrations["values"](), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615 => ({
      identity: {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615.unitId,
        rangeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615.rangeId
      },
      config: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615.config,
      referenceRevision: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615.referenceRevision,
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615.liveResult ? {
        liveResult: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615.liveResult
      } : null)
    }));
  }
  dispose() {
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616 of this._registrations["values"]()) this._deleteRegistration(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616);
    this._registrations["clear"](), this._formulaKeys["clear"](), this._presentationChanged$["complete"](), super.dispose();
  }
  _updateFormulaResult(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210 = this._formulaKeys["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209.formulaId),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210 ? this._registrations["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210) : undefined;
    !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211.liveResult = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209, this._setPresentation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210, z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211.config, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209)));
  }
  _setPresentation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219 = this._registrations["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219 || at(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219.presentation, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216)) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219.presentation,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221 = B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219.presentation = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216, this._presentationChanged$["next"]({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219.unitId,
      rangeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219.rangeId,
      presentation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216,
      previousPresentation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220,
      result: B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219),
      previousResult: {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221,
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220,
        value: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220.cell) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217.v,
        valueType: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220.cell) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218.t) ?? undefined
      }
    });
  }
  _deleteRegistration(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229.formulaId && (this._registrationService["deleteFormula"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229.unitId, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229.formulaId]), this._formulaKeys["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229.formulaId));
  }
};
function R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46549, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46549 + "\x00" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550;
}
function z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554) {
  return resolveFormulaResultPresentation({
    numberFormat: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553.numberFormat,
    lastValue: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553.lastValue,
    result: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554
  });
}
function B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46559, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46560;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46561 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557.presentation,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557.config["formula"].trim() ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46561.stale || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46561.cell == null ? "pending" : ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557.liveResult) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558.status) === FormulaResultStatus.ERROR ? "error" : "success" : "empty";
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46561,
    status: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3,
    value: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46559 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46561.cell) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46559.v,
    valueType: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46560 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46561.cell) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46560.t) ?? undefined
  };
}
function at(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46568) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46569, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46570, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46571, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46572;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567.text === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46568.text && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567.color === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46568.color && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567.pattern === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46568.pattern && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567.source === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46568.source && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567.stale === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46568.stale && ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46569 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567.cell) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46569.t) === ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46570 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46568.cell) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46570.t) && Object.is((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46571 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567.cell) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46571.v, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46572 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46568.cell) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46572.v);
}
const ot = {
    id: "docs-formula.mutation.set-formula",
    type: CommandType.MUTATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46579, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46580) => !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46580 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46580.unitId) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46580.rangeId || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46580.config ? false : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46579.get(P).setFormula(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46580.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46580.rangeId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46580.config)
  },
  st = {
    id: "docs-formula.mutation.remove-formula",
    type: CommandType.MUTATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46581, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46582) => !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46582 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46582.unitId) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46582.rangeId ? false : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46581.get(P).removeFormula(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46582.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46582.rangeId)
  },
  V = {
    id: "docs-formula.mutation.set-resource",
    type: CommandType.MUTATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46583, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584) => !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584.unitId) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584.resource ? false : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46583.get(P).setResource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584.resource)
  },
  H = {
    id: "docs-formula.mutation.set-last-values",
    type: CommandType.MUTATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586) => {
      if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586.unitId) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586.updates["length"]) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585.get(P),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46588 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585.get(HostExternalReferenceModel),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46589 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587.getResource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586.unitId);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46589) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46590 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46589),
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A = false;
      for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586.updates) {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46591, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46592, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46593, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46594;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46590.formulas[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231.rangeId];
        !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617.formula !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231.expectedFormula || ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46591 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617.numberFormat) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46591.pattern) !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231.expectedNumberFormat || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46588.getRevision(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586.unitId) !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231.expectedReferenceRevision || (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46592 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617.lastValue) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46592.v) !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231.lastValue["v"] || ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46593 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617.lastValue) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46593.t) !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231.lastValue["t"] || ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46594 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617.lastValue) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46594.pattern) !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231.lastValue["pattern"]) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617.lastValue = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231.lastValue), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A = true);
      }
      return !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587.setResource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46590);
    }
  },
  U = {
    id: "docs-formula.command.insert",
    type: CommandType.COMMAND,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46605, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46606) => {
      if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46606 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46606.formula["trim"]())) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46607 = q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46605, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46606.unitId, "");
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46607) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46608 = ft(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46606.target, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46607.body, dt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46605, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46607.unitId));
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46608) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46609 = pt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46605, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46607.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46606.formula, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46606.externalReferences ?? []);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46609) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610 = mt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46607.body, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46607.model, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46607.unitId),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611 = ht({
          documentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46607.documentData,
          resource: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46607.resource,
          rangeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610,
          config: {
            formula: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46606.formula,
            ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46606.numberFormat ? {
              numberFormat: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46606.numberFormat
            } : null)
          },
          startOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46608.startOffset,
          endOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46608.endOffset
        });
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46612 = buildUpsertHostExternalReferenceMutations(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46605, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46607.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46609);
      return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46612 || !J({
        accessor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46605,
        document: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46607.document,
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46607.unitId,
        trigger: U.id,
        rangeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610,
        previousResource: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46607.resource,
        nextResource: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611.nextResource,
        previousDocumentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46607.documentData,
        nextDocumentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611.nextDocumentData,
        cursorOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611.cursorOffset,
        externalMutations: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46612
      }) ? false : {
        rangeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610,
        startOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611.cursorOffset - 1,
        endOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611.cursorOffset
      };
    }
  },
  W = {
    id: "docs-formula.command.update",
    type: CommandType.COMMAND,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46621, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622) => {
      if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622.rangeId) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622.formula["trim"]()) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46623 = q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46621, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622.unitId, ""),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46624 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46623 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46623.model["getFormula"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46623.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622.rangeId),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46625 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46623 ? T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46623.documentData["body"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622.rangeId) : undefined;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46623 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46624 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46625) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46626 = pt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46621, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46623.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622.formula, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622.externalReferences ?? []);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46626) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46627 = buildUpsertHostExternalReferenceMutations(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46621, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46623.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46626);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46627) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46628 = Ct(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46623.resource);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46628.formulas[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622.rangeId] = {
        formula: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622.formula,
        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622.numberFormat ? {
          numberFormat: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622.numberFormat
        } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46624.numberFormat ? {
          numberFormat: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46624.numberFormat
        } : null)
      }, J({
        accessor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46621,
        document: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46623.document,
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46623.unitId,
        trigger: W.id,
        rangeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622.rangeId,
        previousResource: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46623.resource,
        nextResource: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46628,
        cursorOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46625.endIndex + 1,
        externalMutations: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46627
      });
    }
  },
  G = {
    id: "docs-formula.command.set-number-format",
    type: CommandType.COMMAND,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46637, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46638) => {
      if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46638 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46638.rangeId)) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639 = q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46637, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46638.unitId, ""),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639.model["getFormula"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46638.rangeId),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46641 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639 ? T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639.documentData["body"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46638.rangeId) : undefined;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46641) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46642 = Ct(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639.resource);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46642.formulas[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46638.rangeId] = {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640,
        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46638.numberFormat ? {
          numberFormat: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46638.numberFormat
        } : null)
      }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46638.numberFormat || delete var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46642.formulas[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46638.rangeId].numberFormat, J({
        accessor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46637,
        document: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639.document,
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639.unitId,
        trigger: G.id,
        rangeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46638.rangeId,
        previousResource: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639.resource,
        nextResource: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46642,
        cursorOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46641.endIndex + 1,
        externalMutations: {}
      });
    }
  },
  K = {
    id: "docs-formula.command.remove",
    type: CommandType.COMMAND,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46649, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46650) => ut(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46649, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46650, "", K.id)
  },
  ct = {
    id: "docs-formula.command.replace-with-text",
    type: CommandType.COMMAND,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46651, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46652) => ut(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46651, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46652, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46652 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46652.text) ?? "", ct.id)
  },
  lt = {
    id: "docs-formula.command.convert-to-text",
    type: CommandType.COMMAND,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46653, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46654) => {
      if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46654 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46654.rangeId)) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46655 = q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46653, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46654.unitId, "");
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46655) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46656 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46653.get(L).getResult({
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46655.unitId,
        rangeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46654.rangeId
      });
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46656 ? ut(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46653, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46654, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46656.text, lt.id) : false;
    }
  };
function ut(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46661, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46662, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46663, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46664) {
  if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46662 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46662.rangeId)) return false;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665 = q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46661, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46662.unitId, "");
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665) return false;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666 = Be({
    documentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665.documentData,
    resource: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665.resource,
    rangeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46662.rangeId,
    text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46663
  });
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666 ? J({
    accessor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46661,
    document: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665.document,
    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665.unitId,
    trigger: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46664,
    rangeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46662.rangeId,
    previousResource: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665.resource,
    nextResource: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666.nextResource,
    previousDocumentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665.documentData,
    nextDocumentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666.nextDocumentData,
    cursorOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666.cursorOffset,
    externalMutations: {}
  }) : false;
}
function q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46673, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46675) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46675) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46676 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46673.get(IUniverInstanceService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46677 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46676.getUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674, UniverInstanceType.UNIVER_DOC) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46676.getCurrentUnitOfType(UniverInstanceType.UNIVER_DOC)) ?? null;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46677) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46677.getSnapshot(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46679 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678.body;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678.disabled || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46679) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46680 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46673.get(P);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46680.getLoadError(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46677.getUnitId()) ? null : {
    document: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46677,
    body: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46679,
    documentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678,
    model: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46680,
    resource: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46680.getResource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46677.getUnitId()) ?? b(),
    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46677.getUnitId()
  };
}
function dt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46689, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46690) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46691;
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46691 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46689.get(DocSelectionManagerService).getTextRanges({
    subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46690,
    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46690
  })) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46691[0];
}
function ft(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46695, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46696, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46697) {
  if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46695 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46695.type) === "paragraph") {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46698;
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46698 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46696.paragraphs) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46698.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618.paragraphId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46695.paragraphId)) ?? [];
    if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3.length !== 1) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3[0],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233 = getParagraphContentStartOffset(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46696, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232.startIndex - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46695.position === "end" ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46695.position;
    if (!Number.isInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234 < 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234 > var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2) return null;
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234;
    return {
      startOffset: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB,
      endOffset: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB
    };
  }
  if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46695 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46695.type) === "range") return !Number.isInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46695.startOffset) || !Number.isInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46695.endOffset) ? null : {
    startOffset: Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46695.startOffset, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46695.endOffset),
    endOffset: Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46695.startOffset, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46695.endOffset)
  };
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46699 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46695 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46695.type) === "selection" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46695.selection : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46697;
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46699 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46699.segmentId ? null : {
    startOffset: Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46699.startOffset, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46699.endOffset),
    endOffset: Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46699.startOffset, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46699.endOffset)
  };
}
function pt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46705, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46706, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46707, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46708) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46705.get(LexerTreeBuilder),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46707.startsWith("=") ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46707.slice(1) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46707,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46710 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709.sequenceNodesBuilder(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46710) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46711 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46705.get(HostExternalReferenceModel),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46712 = resolveHostFormulaExternalReferences({
      qualifiers: collectFormulaExternalReferenceQualifiers(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46710),
      explicitReferences: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46708 ?? [],
      resolveBinding: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46711.resolveBinding(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46706, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235)
    });
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46712.status === "resolved" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46712.references : null;
}
function mt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46721, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46722, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46723) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46724;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46725 = generateRandomId(6);
  for (; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46721 != null && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46724 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46721.customRanges) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46724.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619.rangeId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46725) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46722.getFormula(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46723, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46725);) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46725 = generateRandomId(6);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46725;
}
function ht(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46731) {
  try {
    return Re(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46731);
  } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC5) {
    if (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC5 instanceof C) return null;
    throw var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC5;
  }
}
function gt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46733) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46734 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46733.previousDocumentData && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46733.nextDocumentData ? vt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46733.document, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46733.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46733.previousDocumentData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46733.nextDocumentData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46733.cursorOffset, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46733.trigger) : null;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46733.previousDocumentData && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46733.nextDocumentData && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46734 ? null : {
    documentRedo: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46734,
    resourceRedo: {
      id: V.id,
      params: {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46733.unitId,
        resource: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46733.nextResource
      }
    },
    resourceUndo: {
      id: V.id,
      params: {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46733.unitId,
        resource: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46733.previousResource
      }
    }
  };
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46738, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46739, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46740) {
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46740.pushUndoRedo({
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737.trigger + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737.rangeId,
    unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737.unitId,
    redoMutations: [...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737.externalMutations["redoMutation"] ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737.externalMutations["redoMutation"]] : []), ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46738.documentRedo ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46738.documentRedo] : []), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46738.resourceRedo],
    undoMutations: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46738.resourceUndo, ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46739 ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46739] : []), ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737.externalMutations["undoMutation"] ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737.externalMutations["undoMutation"]] : [])]
  });
}
function J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46746 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745.accessor["get"](ICommandService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46747 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745.accessor["get"](IUndoRedoService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46748 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745.accessor["get"](DocSelectionManagerService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46749 = gt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46749) return false;
  let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 = false,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46750 = null,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A3 = false;
  try {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745.externalMutations["redoMutation"]) {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46746.syncExecuteCommand(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745.externalMutations["redoMutation"].id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745.externalMutations["redoMutation"].params)) return false;
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 = true;
    }
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46749.documentRedo) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46746.syncExecuteCommand(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46749.documentRedo["id"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46749.documentRedo["params"]);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620) return bt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46746, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745.externalMutations, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2), false;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46750 = {
        id: RichTextEditingMutation.id,
        params: {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620,
          noHistory: true,
          noNeedSetTextRange: true,
          segmentId: ""
        }
      };
    }
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46746.syncExecuteCommand(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46749.resourceRedo["id"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46749.resourceRedo["params"])) return yt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46746, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46750), bt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46746, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745.externalMutations, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2), false;
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A3 = true, fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46749, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46750, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46747);
  } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC52) {
    throw var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A3 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46746.syncExecuteCommand(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46749.resourceUndo["id"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46749.resourceUndo["params"]), yt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46746, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46750), bt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46746, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745.externalMutations, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2), var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC52;
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46748.replaceDocRanges([{
    startOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745.cursorOffset,
    endOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745.cursorOffset,
    segmentId: ""
  }], {
    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745.unitId,
    subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745.unitId
  }, false, {
    [DOC_SELECTION_OPTION_PRESERVE_CARET]: true
  }), true;
}
function vt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46757, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46758, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46759, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46760, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46761, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46762) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46763 = xt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46759, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46760, getRichTextEditPath(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46757, ""));
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46763 ? {
    id: RichTextEditingMutation.id,
    params: {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46758,
      actions: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46763,
      segmentId: "",
      textRanges: [{
        startOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46761,
        endOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46761,
        collapsed: true,
        segmentId: ""
      }],
      isEditing: false,
      noHistory: true,
      noNeedSetTextRange: true,
      trigger: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46762
    }
  } : null;
}
function yt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46771, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46772) {
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46772 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46771.syncExecuteCommand(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46772.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46772.params);
}
function bt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46775, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46776, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46777) {
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46777 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46776.undoMutation && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46775.syncExecuteCommand(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46776.undoMutation["id"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46776.undoMutation["params"]);
}
function xt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46782, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46783) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46784 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781.body,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46785 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46782.body,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786 = St(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46784 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46784.dataStream, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46785 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46785.dataStream);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46785) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46787 = new TextX();
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46787.retain(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786.start), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786.insertLength > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46787.insert(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786.insertLength, getBodySliceForTextXAction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46785, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786.start, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786.start + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786.insertLength, false)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786.deleteLength > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46787.delete(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786.deleteLength), JSONX.getInstance().editOp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46787.serialize(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46783);
}
function St(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46795, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46796) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46795 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46796 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46795 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46796) return null;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7 = 0;
  for (; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46795.length && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46796.length && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46795[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46796[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7];) var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7 += 1;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46797 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46795.length,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46798 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46796.length;
  for (; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46797 > var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46798 > var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46795[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46797 - 1] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46796[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46798 - 1];) --var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46797, --var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46798;
  return {
    start: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7,
    deleteLength: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46797 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7,
    insertLength: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46798 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7
  };
}
function Ct(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46803) {
  return {
    schemaVersion: 1,
    formulas: Object.fromEntries(Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46803.formulas).map(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237]) => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236, {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237,
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237.numberFormat ? {
        numberFormat: {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237.numberFormat
        }
      } : null),
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237.lastValue ? {
        lastValue: {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237.lastValue
        }
      } : null)
    }]))
  };
}
export { L as DocFormulaService, ot as SetDocFormulaMutation, st as RemoveDocFormulaMutation, V as SetDocFormulaResourceMutation, H as SetDocFormulaLastValuesMutation, U as InsertDocFormulaCommand, W as UpdateDocFormulaCommand, G as SetDocFormulaNumberFormatCommand, K as RemoveDocFormulaCommand, ct as ReplaceDocFormulaWithTextCommand, lt as ConvertDocFormulaToTextCommand };
