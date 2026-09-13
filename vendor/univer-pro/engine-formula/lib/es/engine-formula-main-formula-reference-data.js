import { AbsoluteRefType as e, CellValueType as t, CommandType as n, DEFAULT_NUMBER_FORMAT as r, DependentOn as i, Disposable as a, ICommandService as o, IConfigService as s, IResourceManagerService as c, IUndoRedoService as l, IUniverInstanceService as u, Inject as d, ObjectMatrix as f, RANGE_TYPE as p, Rectangle as m, Tools as h, UniverInstanceType as g, createIdentifier as _, generateRandomId as v, numfmt as y, regexp as b, requestImmediateMacroTask as x, toDisposable as S, touchDependencies as C } from "@univerjs/core";
import { AstTreeBuilder as w, BaseReferenceObject as ee, CELL_INVERTED_INDEX_CACHE as te, CalculateFormulaService as ne, DEFAULT_CYCLE_REFERENCE_COUNT as T, DEFAULT_INTERVAL_COUNT as re, DependencyManagerBaseService as ie, ENGINE_FORMULA_PLUGIN_CONFIG_KEY as ae, ErrorType as E, FORMULA_REF_TO_ARRAY_CACHE as oe, FUNCTION_NAMES_DATE as se, FUNCTION_NAMES_LOOKUP as D, FUNCTION_NAMES_MATH as ce, FormulaCalculationSessionService as le, FormulaCalculationTriggerService as ue, FormulaDataModel as de, FormulaDataModel as fe, FormulaDependencyGenerator as pe, FormulaDependencyTree as me, FormulaDependencyTreeType as O, FormulaDependencyTreeVirtual as he, FormulaExecuteStageType as k, FormulaResultStatus as ge, FormulaUnitReferenceResolver as _e, IActiveDirtyManagerService as ve, IActiveDirtyManagerService as ye, ICalculateFormulaService as be, IDependencyManagerService as xe, IFormulaCurrentConfigService as Se, IFormulaDependencyGenerator as Ce, IFormulaExternalReferenceDataLoader as we, IFormulaRuntimeService as Te, IFormulaUnitReferenceResolver as Ee, ISuperTableService as De, ISuperTableService as Oe, Interpreter as ke, Lexer as Ae, LexerTreeBuilder as je, OtherFormulaMarkDirty as Me, RegisterOtherFormulaService as Ne, RemoveSuperTableMutation as Pe, SetFormulaCalculationResultMutation as Fe, SetFormulaCalculationStartMutation as Ie, SetFormulaCalculationStartMutation as Le, SetFormulaDataMutation as Re, SetSuperTableMutation as ze, SetTriggerFormulaCalculationStartMutation as Be, UniverFormulaEnginePlugin as Ve, deserializeRangeWithSheet as He, deserializeRangeWithSheetWithCache as Ue, generateAstNode as We, generateRandomDependencyTreeId as Ge, getAbsoluteRefTypeWitString as Ke, normalizeFormulaUnitName as A, refactorFormulaUnitQualifier as qe, sequenceNodeType as Je, serializeRangeWithSheet as Ye, serializeRangeWithSpreadsheet as Xe, splitTableStructuredRef as Ze } from "@univerjs/engine-formula";
import { IRPCChannelService as Qe, fromModule as $e, toModule as et } from "@univerjs/rpc";
import { UniverLicensePlugin as tt } from "@univerjs-pro/license";
import { Mt } from "./engine-formula-unavailable-reference-data-response.js";
let $ = class {
  constructor(e, t, n) {
    this._formulaDataModel = e, this._superTableService = t, this._providerRegistry = n;
  }
  async readData(e) {
    let t = this._providerRegistry.getProviders(e),
      n = !!e.target.sourceUnitId && t.length > 0;
    if (n) {
      let n = await Zn(e, t);
      if (n) return n;
    }
    let r = this._formulaDataModel.getCalculateData(),
      i = er(e, r.unitNameMap, r.allUnitData);
    if (i) {
      let t = this._readLiveSheets(e, i, r.allUnitData, r.unitSheetNameMap),
        n = this._readLiveTables(e, i);
      if (t.length > 0) return {
        requestId: e.requestId,
        calculationId: e.calculationId,
        source: `main-live`,
        freshness: `fresh`,
        sheets: t,
        tables: n
      };
    }
    if (!n) {
      let n = await Zn(e, t);
      if (n) return n;
    }
    return Mt(e);
  }
  _readLiveTables(e, t) {
    let n = [];
    for (let a of e.ranges) {
      var r, i;
      if (!a.tableName) continue;
      let e = Array.from(((r = this._superTableService.getTableMap(t)) == null ? void 0 : r.entries()) ?? []).find(([e]) => {
        var t;
        return e.toLowerCase() === ((t = a.tableName) == null ? void 0 : t.toLowerCase());
      });
      if (!e) continue;
      let [o, s] = e;
      n.push({
        name: o,
        sheetId: s.sheetId,
        range: s.range,
        columns: Array.from(((i = s.titleMap) == null ? void 0 : i.entries()) ?? []).sort((e, t) => e[1] - t[1]).map(([e]) => e),
        showHeader: s.showHeader
      });
    }
    return n;
  }
  _readLiveSheets(e, t, n, r) {
    let i = [];
    for (let o of e.ranges) {
      var a;
      let e = this._resolveLiveRange(t, o, n, r);
      if (!e) continue;
      let {
          sheetId: s,
          sheetName: c,
          range: l
        } = e,
        u = (a = n[t]) == null ? void 0 : a[s];
      if (!u) continue;
      let d = [];
      for (let e = l.startRow; e <= l.endRow; e++) for (let t = l.startColumn; t <= l.endColumn; t++) {
        let n = u.cellData.getValue(e, t);
        n != null && d.push({
          row: e,
          column: t,
          cell: n
        });
      }
      i.push({
        name: c,
        sheetId: s,
        rowCount: u.rowCount,
        columnCount: u.columnCount,
        coverage: [l],
        cells: d
      });
    }
    return i;
  }
  _resolveLiveRange(e, t, n, r) {
    return t.tableName ? Qn(e, t.tableName, r, this._superTableService) : $n(e, t, n, r);
  }
};
async function Zn(e, t) {
  for (let n of t) {
    let t = await n.readData(e);
    if (t && (t.freshness !== `stale` || e.requireFresh === !1)) return t.source === `ooxml-cache` || t.source === `unavailable` ? t : {
      ...t,
      source: `provider`
    };
  }
}
function Qn(e, t, n, r) {
  var i, a;
  let o = r.getTableMap(e),
    s = (i = Array.from((o == null ? void 0 : o.entries()) ?? []).find(([e]) => e.toLowerCase() === t.toLowerCase())) == null ? void 0 : i[1];
  if (!s) return;
  let c = ((a = Object.entries(n[e] ?? {}).find(([, e]) => e === s.sheetId)) == null ? void 0 : a[0]) ?? s.sheetId;
  return {
    sheetId: s.sheetId,
    sheetName: c,
    range: s.range
  };
}
function $n(e, t, n, r) {
  var i, a, o;
  let s = r[e] ?? {},
    c = t.sheetId ?? (t.sheetName ? (i = Object.entries(s).find(([e]) => {
      var n;
      return e.toLowerCase() === ((n = t.sheetName) == null ? void 0 : n.toLowerCase());
    })) == null ? void 0 : i[1] : void 0);
  if (!(!c || !t.range || !((a = n[e]) != null && a[c]))) return {
    sheetId: c,
    sheetName: t.sheetName ?? ((o = Object.entries(s).find(([, e]) => e === c)) == null ? void 0 : o[0]) ?? c,
    range: t.range
  };
}
function er(e, t, n) {
  if (e.target.sourceUnitId && n[e.target.sourceUnitId]) return e.target.sourceUnitId;
  if (e.target.liveUnitId && n[e.target.liveUnitId]) return e.target.liveUnitId;
  let r = Object.entries(t).filter(([t, r]) => !!n[t] && r.unitType === e.target.unitType),
    i = e.target.name.toLowerCase(),
    a = r.filter(([, e]) => e.name.toLowerCase() === i),
    o = a.length > 0 ? a : r.filter(([, t]) => A(t.name) === A(e.target.name));
  return o.length === 1 ? o[0][0] : void 0;
}
export { $ as MainFormulaReferenceDataService };
export { $ };
