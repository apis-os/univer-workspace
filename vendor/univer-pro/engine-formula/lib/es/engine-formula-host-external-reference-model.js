import { AbsoluteRefType as e, CellValueType as t, CommandType as n, DEFAULT_NUMBER_FORMAT as r, DependentOn as i, Disposable as a, ICommandService as o, IConfigService as s, IResourceManagerService as c, IUndoRedoService as l, IUniverInstanceService as u, Inject as d, ObjectMatrix as f, RANGE_TYPE as p, Rectangle as m, Tools as h, UniverInstanceType as g, createIdentifier as _, generateRandomId as v, numfmt as y, regexp as b, requestImmediateMacroTask as x, toDisposable as S, touchDependencies as C } from "@univerjs/core";
import { AstTreeBuilder as w, BaseReferenceObject as ee, CELL_INVERTED_INDEX_CACHE as te, CalculateFormulaService as ne, DEFAULT_CYCLE_REFERENCE_COUNT as T, DEFAULT_INTERVAL_COUNT as re, DependencyManagerBaseService as ie, ENGINE_FORMULA_PLUGIN_CONFIG_KEY as ae, ErrorType as E, FORMULA_REF_TO_ARRAY_CACHE as oe, FUNCTION_NAMES_DATE as se, FUNCTION_NAMES_LOOKUP as D, FUNCTION_NAMES_MATH as ce, FormulaCalculationSessionService as le, FormulaCalculationTriggerService as ue, FormulaDataModel as de, FormulaDataModel as fe, FormulaDependencyGenerator as pe, FormulaDependencyTree as me, FormulaDependencyTreeType as O, FormulaDependencyTreeVirtual as he, FormulaExecuteStageType as k, FormulaResultStatus as ge, FormulaUnitReferenceResolver as _e, IActiveDirtyManagerService as ve, IActiveDirtyManagerService as ye, ICalculateFormulaService as be, IDependencyManagerService as xe, IFormulaCurrentConfigService as Se, IFormulaDependencyGenerator as Ce, IFormulaExternalReferenceDataLoader as we, IFormulaRuntimeService as Te, IFormulaUnitReferenceResolver as Ee, ISuperTableService as De, ISuperTableService as Oe, Interpreter as ke, Lexer as Ae, LexerTreeBuilder as je, OtherFormulaMarkDirty as Me, RegisterOtherFormulaService as Ne, RemoveSuperTableMutation as Pe, SetFormulaCalculationResultMutation as Fe, SetFormulaCalculationStartMutation as Ie, SetFormulaCalculationStartMutation as Le, SetFormulaDataMutation as Re, SetSuperTableMutation as ze, SetTriggerFormulaCalculationStartMutation as Be, UniverFormulaEnginePlugin as Ve, deserializeRangeWithSheet as He, deserializeRangeWithSheetWithCache as Ue, generateAstNode as We, generateRandomDependencyTreeId as Ge, getAbsoluteRefTypeWitString as Ke, normalizeFormulaUnitName as A, refactorFormulaUnitQualifier as qe, sequenceNodeType as Je, serializeRangeWithSheet as Ye, serializeRangeWithSpreadsheet as Xe, splitTableStructuredRef as Ze } from "@univerjs/engine-formula";
import { IRPCChannelService as Qe, fromModule as $e, toModule as et } from "@univerjs/rpc";
import { UniverLicensePlugin as tt } from "@univerjs-pro/license";
import { ct, j, lt, st } from "./internal-glue.js";
import { M } from "./engine-formula-host-external-reference-qualifier.js";
var N = class extends a {
  constructor(...e) {
    super(...e), j(this, `_resources`, new Map()), j(this, `_rawResources`, new Map()), j(this, `_loadErrors`, new Map()), j(this, `_revisions`, new Map());
  }
  load(e, t) {
    return !t || typeof t != `object` ? (this._preserveInvalid(e, t, `invalid-resource`), !1) : !(`schemaVersion` in t) || t.schemaVersion !== 1 ? (this._preserveInvalid(e, t, `unsupported-version`), !1) : ut(t) ? (this._resources.set(e, h.deepClone(t)), this._rawResources.delete(e), this._loadErrors.delete(e), this._bumpRevision(e), !0) : (this._preserveInvalid(e, t, `invalid-resource`), !1);
  }
  set(e, t) {
    return ut(t) ? (this._resources.set(e, h.deepClone(t)), this._rawResources.delete(e), this._loadErrors.delete(e), this._bumpRevision(e), !0) : !1;
  }
  serialize(e) {
    let t = this._resources.get(e);
    return t ? h.deepClone(t) : this._rawResources.has(e) ? h.deepClone(this._rawResources.get(e)) : st();
  }
  get(e) {
    let t = this._resources.get(e);
    return t ? h.deepClone(t) : void 0;
  }
  getAll() {
    return Object.fromEntries(Array.from(this._resources.entries(), ([e, t]) => [e, h.deepClone(t)]));
  }
  getLoadError(e) {
    return this._loadErrors.get(e);
  }
  getRevision(e) {
    return this._revisions.get(e) ?? 0;
  }
  resolveBinding(e, t) {
    var n;
    if (ct(t)) return {
      status: `missing`
    };
    let r = Object.entries(((n = this._resources.get(e)) == null ? void 0 : n.references) ?? {}),
      i = t.toLowerCase(),
      a = r.filter(([, e]) => e.qualifier.toLowerCase() === i),
      o = a.length > 0 ? a : r.filter(([, e]) => M(e.qualifier) === M(t));
    if (o.length === 0) return {
      status: `missing`
    };
    if (o.length > 1) return {
      status: `ambiguous`
    };
    let [s, c] = o[0];
    return {
      status: `resolved`,
      referenceId: s,
      reference: h.deepClone(c)
    };
  }
  remove(e) {
    this._resources.delete(e), this._rawResources.delete(e), this._loadErrors.delete(e), this._bumpRevision(e);
  }
  dispose() {
    super.dispose(), this._resources.clear(), this._rawResources.clear(), this._loadErrors.clear(), this._revisions.clear();
  }
  _preserveInvalid(e, t, n) {
    this._resources.delete(e), this._rawResources.set(e, h.deepClone(t)), this._loadErrors.set(e, n), this._bumpRevision(e);
  }
  _bumpRevision(e) {
    this._revisions.set(e, this.getRevision(e) + 1);
  }
};
function ut(e) {
  if (!e || typeof e != `object` || !(`schemaVersion` in e) || !(`references` in e) || e.schemaVersion !== 1 || typeof e.references != `object` || !e.references || Array.isArray(e.references)) return !1;
  let t = new Set();
  for (let [n, r] of Object.entries(e.references)) {
    if (!n || !lt(r)) return !1;
    let e = r.qualifier.trim();
    if (!e || ct(e)) return !1;
    let i = M(e);
    if (t.has(i)) return !1;
    t.add(i);
  }
  return !0;
}
export { N as HostExternalReferenceModel };
