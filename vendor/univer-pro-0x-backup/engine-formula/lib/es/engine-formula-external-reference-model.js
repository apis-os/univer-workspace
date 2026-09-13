import { AbsoluteRefType as e, CellValueType as t, CommandType as n, DEFAULT_NUMBER_FORMAT as r, DependentOn as i, Disposable as a, ICommandService as o, IConfigService as s, IResourceManagerService as c, IUndoRedoService as l, IUniverInstanceService as u, Inject as d, ObjectMatrix as f, RANGE_TYPE as p, Rectangle as m, Tools as h, UniverInstanceType as g, createIdentifier as _, generateRandomId as v, numfmt as y, regexp as b, requestImmediateMacroTask as x, toDisposable as S, touchDependencies as C } from "@univerjs/core";
import { AstTreeBuilder as w, BaseReferenceObject as ee, CELL_INVERTED_INDEX_CACHE as te, CalculateFormulaService as ne, DEFAULT_CYCLE_REFERENCE_COUNT as T, DEFAULT_INTERVAL_COUNT as re, DependencyManagerBaseService as ie, ENGINE_FORMULA_PLUGIN_CONFIG_KEY as ae, ErrorType as E, FORMULA_REF_TO_ARRAY_CACHE as oe, FUNCTION_NAMES_DATE as se, FUNCTION_NAMES_LOOKUP as D, FUNCTION_NAMES_MATH as ce, FormulaCalculationSessionService as le, FormulaCalculationTriggerService as ue, FormulaDataModel as de, FormulaDataModel as fe, FormulaDependencyGenerator as pe, FormulaDependencyTree as me, FormulaDependencyTreeType as O, FormulaDependencyTreeVirtual as he, FormulaExecuteStageType as k, FormulaResultStatus as ge, FormulaUnitReferenceResolver as _e, IActiveDirtyManagerService as ve, IActiveDirtyManagerService as ye, ICalculateFormulaService as be, IDependencyManagerService as xe, IFormulaCurrentConfigService as Se, IFormulaDependencyGenerator as Ce, IFormulaExternalReferenceDataLoader as we, IFormulaRuntimeService as Te, IFormulaUnitReferenceResolver as Ee, ISuperTableService as De, ISuperTableService as Oe, Interpreter as ke, Lexer as Ae, LexerTreeBuilder as je, OtherFormulaMarkDirty as Me, RegisterOtherFormulaService as Ne, RemoveSuperTableMutation as Pe, SetFormulaCalculationResultMutation as Fe, SetFormulaCalculationStartMutation as Ie, SetFormulaCalculationStartMutation as Le, SetFormulaDataMutation as Re, SetSuperTableMutation as ze, SetTriggerFormulaCalculationStartMutation as Be, UniverFormulaEnginePlugin as Ve, deserializeRangeWithSheet as He, deserializeRangeWithSheetWithCache as Ue, generateAstNode as We, generateRandomDependencyTreeId as Ge, getAbsoluteRefTypeWitString as Ke, normalizeFormulaUnitName as A, refactorFormulaUnitQualifier as qe, sequenceNodeType as Je, serializeRangeWithSheet as Ye, serializeRangeWithSpreadsheet as Xe, splitTableStructuredRef as Ze } from "@univerjs/engine-formula";
import { IRPCChannelService as Qe, fromModule as $e, toModule as et } from "@univerjs/rpc";
import { UniverLicensePlugin as tt } from "@univerjs-pro/license";
import { j } from "./internal-glue.js";
import { wt } from "./engine-formula-empty-external-reference-resource.js";
var I = class extends a {
  constructor(...e) {
    super(...e), j(this, `_resources`, new Map()), j(this, `_loadErrors`, new Map());
  }
  load(e, t) {
    if (!t || typeof t != `object`) return this._loadErrors.set(e, `invalid-resource`), !1;
    let n = t;
    return n.schemaVersion === 1 ? !Array.isArray(n.links) || !n.links.every(Tt) ? (this._loadErrors.set(e, `invalid-resource`), !1) : (this._resources.set(e, n), this._loadErrors.delete(e), !0) : (this._loadErrors.set(e, `unsupported-version`), !1);
  }
  set(e, t) {
    return this.load(e, t);
  }
  serialize(e) {
    return this._resources.get(e) ?? wt();
  }
  get(e) {
    return this._resources.get(e);
  }
  getLoadError(e) {
    return this._loadErrors.get(e);
  }
  resolveBinding(e, t) {
    var n;
    let r = ((n = this._resources.get(e)) == null ? void 0 : n.links) ?? [],
      i = /^[1-9]\d*$/.test(t) ? Number(t) : void 0,
      a = t.toLowerCase(),
      o = r.filter(e => i == null ? e.name.toLowerCase() === a || e.target.name.toLowerCase() === a : e.slot === i);
    return o.length === 0 ? {
      status: `missing`
    } : o.length > 1 ? {
      status: `ambiguous`
    } : {
      status: `resolved`,
      link: o[0]
    };
  }
  renameLiveTarget(e, t, n) {
    let r = [];
    for (let [i, a] of this._resources) for (let o of a.links) (o.target.liveUnitId === e || o.target.name.toLowerCase() === t.toLowerCase()) && (o.name.toLowerCase() === t.toLowerCase() && (o.name = n), o.target.name = n, r.push({
      hostUnitId: i,
      slot: o.slot
    }));
    return r;
  }
  remove(e) {
    this._resources.delete(e), this._loadErrors.delete(e);
  }
  dispose() {
    super.dispose(), this._resources.clear(), this._loadErrors.clear();
  }
};
function Tt(e) {
  if (!e || typeof e != `object`) return !1;
  let t = e;
  return Number.isInteger(t.slot) && Number(t.slot) > 0 && typeof t.name == `string` && !!t.target && typeof t.target.name == `string` && Array.isArray(t.sheetNames) && Array.isArray(t.definedNames) && Array.isArray(t.tables);
}
export { I as ExternalReferenceModel };
