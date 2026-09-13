import { AbsoluteRefType as e, CellValueType as t, CommandType as n, DEFAULT_NUMBER_FORMAT as r, DependentOn as i, Disposable as a, ICommandService as o, IConfigService as s, IResourceManagerService as c, IUndoRedoService as l, IUniverInstanceService as u, Inject as d, ObjectMatrix as f, RANGE_TYPE as p, Rectangle as m, Tools as h, UniverInstanceType as g, createIdentifier as _, generateRandomId as v, numfmt as y, regexp as b, requestImmediateMacroTask as x, toDisposable as S, touchDependencies as C } from "@univerjs/core";
import { AstTreeBuilder as w, BaseReferenceObject as ee, CELL_INVERTED_INDEX_CACHE as te, CalculateFormulaService as ne, DEFAULT_CYCLE_REFERENCE_COUNT as T, DEFAULT_INTERVAL_COUNT as re, DependencyManagerBaseService as ie, ENGINE_FORMULA_PLUGIN_CONFIG_KEY as ae, ErrorType as E, FORMULA_REF_TO_ARRAY_CACHE as oe, FUNCTION_NAMES_DATE as se, FUNCTION_NAMES_LOOKUP as D, FUNCTION_NAMES_MATH as ce, FormulaCalculationSessionService as le, FormulaCalculationTriggerService as ue, FormulaDataModel as de, FormulaDataModel as fe, FormulaDependencyGenerator as pe, FormulaDependencyTree as me, FormulaDependencyTreeType as O, FormulaDependencyTreeVirtual as he, FormulaExecuteStageType as k, FormulaResultStatus as ge, FormulaUnitReferenceResolver as _e, IActiveDirtyManagerService as ve, IActiveDirtyManagerService as ye, ICalculateFormulaService as be, IDependencyManagerService as xe, IFormulaCurrentConfigService as Se, IFormulaDependencyGenerator as Ce, IFormulaExternalReferenceDataLoader as we, IFormulaRuntimeService as Te, IFormulaUnitReferenceResolver as Ee, ISuperTableService as De, ISuperTableService as Oe, Interpreter as ke, Lexer as Ae, LexerTreeBuilder as je, OtherFormulaMarkDirty as Me, RegisterOtherFormulaService as Ne, RemoveSuperTableMutation as Pe, SetFormulaCalculationResultMutation as Fe, SetFormulaCalculationStartMutation as Ie, SetFormulaCalculationStartMutation as Le, SetFormulaDataMutation as Re, SetSuperTableMutation as ze, SetTriggerFormulaCalculationStartMutation as Be, UniverFormulaEnginePlugin as Ve, deserializeRangeWithSheet as He, deserializeRangeWithSheetWithCache as Ue, generateAstNode as We, generateRandomDependencyTreeId as Ge, getAbsoluteRefTypeWitString as Ke, normalizeFormulaUnitName as A, refactorFormulaUnitQualifier as qe, sequenceNodeType as Je, serializeRangeWithSheet as Ye, serializeRangeWithSpreadsheet as Xe, splitTableStructuredRef as Ze } from "@univerjs/engine-formula";
import { IRPCChannelService as Qe, fromModule as $e, toModule as et } from "@univerjs/rpc";
import { UniverLicensePlugin as tt } from "@univerjs-pro/license";
import { j } from "./internal-glue.js";
import { F } from "./engine-formula-external-synthetic-unit-id.js";
const nr = /'?\[([^\]]+)\]([^'!]+)'?!\$?([A-Za-z]+)\$?([1-9]\d*)(?:\s*:\s*\$?([A-Za-z]+)\$?([1-9]\d*))?/g,
  rr = /(?:'((?:[^']|'')+)'|\[([^\]]+)\]|([A-Za-z0-9_.-]+))!([^\s!\[\]]+)\[/g,
  ir = /\bINDIRECT\s*\(\s*"((?:[^"]|"")*)"/gi;
function ar(e) {
  let t = ``,
    n = !1;
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    if (i !== `"`) {
      n || (t += i);
      continue;
    }
    if (n && e[r + 1] === `"`) {
      r++;
      continue;
    }
    n = !n, t += ` `;
  }
  let r = [t];
  for (let t of e.matchAll(ir)) r.push(t[1].replace(/""/g, `"`));
  return r;
}
let or = class {
  constructor(e) {
    this._externalReferenceModel = e, j(this, `_calculationCounter`, 0), j(this, `_requestCounter`, 0);
  }
  plan(e) {
    let t = `external-calculation-${++this._calculationCounter}`,
      n = new Map();
    for (let [r, i] of Object.entries(e.formulaData ?? {})) if (this._externalReferenceModel.get(r)) for (let e of Object.values(i ?? {})) for (let i of Object.values(e ?? {})) for (let e of Object.values(i ?? {})) {
      let i = sr(e);
      if (typeof i == `string`) for (let e of ar(i)) this._collectA1(n, t, r, e), this._collectTables(n, t, r, e);
    }
    return Array.from(n.values());
  }
  planDynamic(e, t) {
    let n = `external-calculation-${++this._calculationCounter}`,
      r = new Map(),
      i = this._externalReferenceModel.get(e);
    if (!i) return [];
    for (let a of t) {
      let t = i.links.find(t => F(e, t.slot) === a.unitId);
      !t || !a.sheetName || !a.range || this._addRange(r, n, e, t, {
        sheetName: a.sheetName,
        range: a.range
      });
    }
    return Array.from(r.values());
  }
  _collectA1(e, t, n, r) {
    for (let i of r.matchAll(nr)) {
      let r = this._externalReferenceModel.resolveBinding(n, i[1]);
      if (r.status !== `resolved`) continue;
      let a = h.ABCatNum(i[3]),
        o = h.ABCatNum(i[5] ?? i[3]),
        s = Number(i[4]) - 1,
        c = Number(i[6] ?? i[4]) - 1;
      this._addRange(e, t, n, r.link, {
        sheetName: i[2].replace(/''/g, `'`),
        range: {
          startRow: Math.min(s, c),
          endRow: Math.max(s, c),
          startColumn: Math.min(a, o),
          endColumn: Math.max(a, o)
        }
      });
    }
  }
  _collectTables(e, t, n, r) {
    for (let i of r.matchAll(rr)) {
      let r = (i[1] ?? i[2] ?? i[3]).replace(/''/g, `'`),
        a = this._externalReferenceModel.resolveBinding(n, r);
      if (a.status !== `resolved`) continue;
      let o = a.link.tables.find(e => e.name.toLowerCase() === i[4].toLowerCase());
      this._addRange(e, t, n, a.link, {
        tableName: i[4],
        sheetName: o == null ? void 0 : o.sheetName,
        range: o == null ? void 0 : o.range
      });
    }
  }
  _addRange(e, t, n, r, i) {
    let a = `${n}\0${r.slot}`,
      o = e.get(a) ?? {
        requestId: `external-request-${++this._requestCounter}`,
        calculationId: t,
        hostUnitId: n,
        bindingSlot: r.slot,
        syntheticUnitId: F(n, r.slot),
        target: r.target,
        ranges: [],
        requireFresh: !0
      };
    o.ranges.some(e => JSON.stringify(e) === JSON.stringify(i)) || o.ranges.push(i), e.set(a, o);
  }
};
function sr(e) {
  return typeof e == `object` && e && `f` in e && typeof e.f == `string` ? e.f : void 0;
}
export { or as ExternalReferencePrefetchPlanner };
