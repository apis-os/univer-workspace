import { AbsoluteRefType as e, CellValueType as t, CommandType as n, DEFAULT_NUMBER_FORMAT as r, DependentOn as i, Disposable as a, ICommandService as o, IConfigService as s, IResourceManagerService as c, IUndoRedoService as l, IUniverInstanceService as u, Inject as d, ObjectMatrix as f, RANGE_TYPE as p, Rectangle as m, Tools as h, UniverInstanceType as g, createIdentifier as _, generateRandomId as v, numfmt as y, regexp as b, requestImmediateMacroTask as x, toDisposable as S, touchDependencies as C } from "@univerjs/core";
import { AstTreeBuilder as w, BaseReferenceObject as ee, CELL_INVERTED_INDEX_CACHE as te, CalculateFormulaService as ne, DEFAULT_CYCLE_REFERENCE_COUNT as T, DEFAULT_INTERVAL_COUNT as re, DependencyManagerBaseService as ie, ENGINE_FORMULA_PLUGIN_CONFIG_KEY as ae, ErrorType as E, FORMULA_REF_TO_ARRAY_CACHE as oe, FUNCTION_NAMES_DATE as se, FUNCTION_NAMES_LOOKUP as D, FUNCTION_NAMES_MATH as ce, FormulaCalculationSessionService as le, FormulaCalculationTriggerService as ue, FormulaDataModel as de, FormulaDataModel as fe, FormulaDependencyGenerator as pe, FormulaDependencyTree as me, FormulaDependencyTreeType as O, FormulaDependencyTreeVirtual as he, FormulaExecuteStageType as k, FormulaResultStatus as ge, FormulaUnitReferenceResolver as _e, IActiveDirtyManagerService as ve, IActiveDirtyManagerService as ye, ICalculateFormulaService as be, IDependencyManagerService as xe, IFormulaCurrentConfigService as Se, IFormulaDependencyGenerator as Ce, IFormulaExternalReferenceDataLoader as we, IFormulaRuntimeService as Te, IFormulaUnitReferenceResolver as Ee, ISuperTableService as De, ISuperTableService as Oe, Interpreter as ke, Lexer as Ae, LexerTreeBuilder as je, OtherFormulaMarkDirty as Me, RegisterOtherFormulaService as Ne, RemoveSuperTableMutation as Pe, SetFormulaCalculationResultMutation as Fe, SetFormulaCalculationStartMutation as Ie, SetFormulaCalculationStartMutation as Le, SetFormulaDataMutation as Re, SetSuperTableMutation as ze, SetTriggerFormulaCalculationStartMutation as Be, UniverFormulaEnginePlugin as Ve, deserializeRangeWithSheet as He, deserializeRangeWithSheetWithCache as Ue, generateAstNode as We, generateRandomDependencyTreeId as Ge, getAbsoluteRefTypeWitString as Ke, normalizeFormulaUnitName as A, refactorFormulaUnitQualifier as qe, sequenceNodeType as Je, serializeRangeWithSheet as Ye, serializeRangeWithSpreadsheet as Xe, splitTableStructuredRef as Ze } from "@univerjs/engine-formula";
import { IRPCChannelService as Qe, fromModule as $e, toModule as et } from "@univerjs/rpc";
import { UniverLicensePlugin as tt } from "@univerjs-pro/license";
import { j } from "./internal-glue.js";
import { Mt } from "./engine-formula-unavailable-reference-data-response.js";
const cr = {
  maxCells: 1e5,
  maxBytes: 5e6,
  concurrency: 4,
  timeoutMs: 15e3
};
let lr = class extends a {
  constructor(e, t, n) {
    super(), this._referenceDataService = e, this._overlayModel = t, this._formulaDataModel = n, j(this, `_inflight`, new Map()), j(this, `_latestCalculation`, new Map());
  }
  async prefetch(e, t, n = {}) {
    this._hydrateLiveUnits(t);
    let r = {
        ...cr,
        ...n
      },
      i = ur(e).map(e => ({
        ...e,
        ranges: e.ranges.filter(t => !t.range || !this._overlayModel.isRangeCovered(e.syntheticUnitId, t.sheetId ?? t.sheetName, t.range))
      })).filter(e => e.ranges.length > 0);
    dr(i, r);
    for (let e of i) this._latestCalculation.set(e.hostUnitId, e.calculationId);
    let a = [],
      o = [],
      s = 0,
      c = 0,
      l = Array.from({
        length: Math.min(r.concurrency, i.length)
      }, async () => {
        for (; c < i.length;) {
          let e = i[c++],
            n = this._hasWorkerLiveUnit(e, t) ? pr(e) : await this._readWithInflight(e, r.timeoutMs);
          if (this._latestCalculation.get(e.hostUnitId) !== e.calculationId || n.calculationId !== e.calculationId) {
            s++;
            continue;
          }
          if (a.push(n), n.source !== `worker-live`) {
            let t = this._overlayModel.apply(e, n);
            this._overlayModel.enforceLimits(r.maxCells, r.maxBytes);
            for (let n of t) o.push({
              unitId: e.syntheticUnitId,
              ...n
            });
          }
        }
      });
    return await Promise.all(l), this._overlayModel.materialize(t), {
      responses: a,
      dirtyRanges: o,
      discarded: s
    };
  }
  cancelHost(e, t) {
    this._latestCalculation.set(e, t);
  }
  getInflightCount() {
    return this._inflight.size;
  }
  drainDirtyRanges() {
    return this._overlayModel.drainDirtyRanges();
  }
  dispose() {
    super.dispose(), this._inflight.clear(), this._latestCalculation.clear();
  }
  _hydrateLiveUnits(e) {
    let t = this._formulaDataModel.getCalculateData();
    e.allUnitData = {
      ...e.allUnitData,
      ...t.allUnitData
    }, e.unitSheetNameMap = {
      ...e.unitSheetNameMap,
      ...t.unitSheetNameMap
    }, e.unitStylesData = {
      ...e.unitStylesData,
      ...t.unitStylesData
    }, e.unitNameMap = {
      ...e.unitNameMap,
      ...t.unitNameMap
    };
  }
  _hasWorkerLiveUnit(e, t) {
    let n = t.allUnitData ?? {};
    if (e.target.liveUnitId && e.target.liveUnitId !== e.syntheticUnitId && n[e.target.liveUnitId]) return !0;
    let r = Object.entries(t.unitNameMap ?? {}).filter(([t, r]) => t !== e.syntheticUnitId && !t.startsWith(`external:`) && !!n[t] && r.unitType === e.target.unitType),
      i = e.target.name.toLowerCase(),
      a = r.filter(([, e]) => e.name.toLowerCase() === i);
    if (a.length > 0) return a.length === 1;
    let o = A(e.target.name);
    return r.filter(([, e]) => A(e.name) === o).length === 1;
  }
  _readWithInflight(e, t) {
    let n = fr(e),
      r = this._inflight.get(n);
    if (r) return r.then(t => ({
      ...t,
      requestId: e.requestId,
      calculationId: e.calculationId
    }));
    let i = Promise.race([this._referenceDataService.readData(e), new Promise(n => {
      setTimeout(() => n(Mt(e)), t);
    })]).finally(() => this._inflight.delete(n));
    return this._inflight.set(n, i), i;
  }
};
function ur(e) {
  let t = new Map();
  for (let n of e) {
    let e = `${n.hostUnitId}\0${n.bindingSlot}\0${n.calculationId}`,
      r = t.get(e);
    if (!r) {
      t.set(e, {
        ...n,
        ranges: [...n.ranges]
      });
      continue;
    }
    for (let e of n.ranges) r.ranges.some(t => JSON.stringify(t) === JSON.stringify(e)) || r.ranges.push(e);
  }
  return Array.from(t.values());
}
function dr(e, t) {
  let n = 0;
  for (let t of e) for (let e of t.ranges) e.range && (n += (e.range.endRow - e.range.startRow + 1) * (e.range.endColumn - e.range.startColumn + 1));
  if (n > t.maxCells) throw Error(`External formula prefetch cell limit exceeded`);
  if (JSON.stringify(e).length > t.maxBytes) throw Error(`External formula prefetch byte limit exceeded`);
}
function fr(e) {
  return `${e.hostUnitId}\0${e.bindingSlot}\0${JSON.stringify(e.ranges)}`;
}
function pr(e) {
  return {
    requestId: e.requestId,
    calculationId: e.calculationId,
    source: `worker-live`,
    freshness: `fresh`,
    sheets: []
  };
}
export { lr as ExternalReferencePrefetchService };
