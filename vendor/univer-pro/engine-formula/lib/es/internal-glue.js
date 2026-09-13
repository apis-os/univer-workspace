import { AbsoluteRefType as e, CellValueType as t, CommandType as n, DEFAULT_NUMBER_FORMAT as r, DependentOn as i, Disposable as a, ICommandService as o, IConfigService as s, IResourceManagerService as c, IUndoRedoService as l, IUniverInstanceService as u, Inject as d, ObjectMatrix as f, RANGE_TYPE as p, Rectangle as m, Tools as h, UniverInstanceType as g, createIdentifier as _, generateRandomId as v, numfmt as y, regexp as b, requestImmediateMacroTask as x, toDisposable as S, touchDependencies as C } from "@univerjs/core";
import { AstTreeBuilder as w, BaseReferenceObject as ee, CELL_INVERTED_INDEX_CACHE as te, CalculateFormulaService as ne, DEFAULT_CYCLE_REFERENCE_COUNT as T, DEFAULT_INTERVAL_COUNT as re, DependencyManagerBaseService as ie, ENGINE_FORMULA_PLUGIN_CONFIG_KEY as ae, ErrorType as E, FORMULA_REF_TO_ARRAY_CACHE as oe, FUNCTION_NAMES_DATE as se, FUNCTION_NAMES_LOOKUP as D, FUNCTION_NAMES_MATH as ce, FormulaCalculationSessionService as le, FormulaCalculationTriggerService as ue, FormulaDataModel as de, FormulaDataModel as fe, FormulaDependencyGenerator as pe, FormulaDependencyTree as me, FormulaDependencyTreeType as O, FormulaDependencyTreeVirtual as he, FormulaExecuteStageType as k, FormulaResultStatus as ge, FormulaUnitReferenceResolver as _e, IActiveDirtyManagerService as ve, IActiveDirtyManagerService as ye, ICalculateFormulaService as be, IDependencyManagerService as xe, IFormulaCurrentConfigService as Se, IFormulaDependencyGenerator as Ce, IFormulaExternalReferenceDataLoader as we, IFormulaRuntimeService as Te, IFormulaUnitReferenceResolver as Ee, ISuperTableService as De, ISuperTableService as Oe, Interpreter as ke, Lexer as Ae, LexerTreeBuilder as je, OtherFormulaMarkDirty as Me, RegisterOtherFormulaService as Ne, RemoveSuperTableMutation as Pe, SetFormulaCalculationResultMutation as Fe, SetFormulaCalculationStartMutation as Ie, SetFormulaCalculationStartMutation as Le, SetFormulaDataMutation as Re, SetSuperTableMutation as ze, SetTriggerFormulaCalculationStartMutation as Be, UniverFormulaEnginePlugin as Ve, deserializeRangeWithSheet as He, deserializeRangeWithSheetWithCache as Ue, generateAstNode as We, generateRandomDependencyTreeId as Ge, getAbsoluteRefTypeWitString as Ke, normalizeFormulaUnitName as A, refactorFormulaUnitQualifier as qe, sequenceNodeType as Je, serializeRangeWithSheet as Ye, serializeRangeWithSpreadsheet as Xe, splitTableStructuredRef as Ze } from "@univerjs/engine-formula";
import { IRPCChannelService as Qe, fromModule as $e, toModule as et } from "@univerjs/rpc";
import { UniverLicensePlugin as tt } from "@univerjs-pro/license";
import { Et } from "./engine-formula-external-cache-reference-data-provider.js";
import { I } from "./engine-formula-external-reference-model.js";
import { Nt } from "./engine-formula-external-reference-data-providers.js";
import { At, z } from "./engine-formula-iformula-reference-data.js";
import { B } from "./engine-formula-external-reference-overlay-model.js";
import { zt } from "./engine-formula-external-reference.js";
import { Bt } from "./engine-formula-external-reference-resource.js";
import { Ht } from "./engine-formula-formula-reference-data-rpc.js";
import { Gt, Jt, Kt, On, Qt, Xn, Yt, tr } from "./engine-formula-pro-formula-engine-plugin.js";
import { bt } from "./engine-formula-formula-last-value-persistence.js";
import { N } from "./engine-formula-host-external-reference-model.js";
import { qn } from "./engine-formula-external-formula-unit-reference-resolver.js";
import { Yn } from "./engine-formula-formula-cache-eligibility.js";
import { $ } from "./engine-formula-main-formula-reference-data.js";
import { or } from "./engine-formula-external-reference-prefetch-planner.js";
import { lr } from "./engine-formula-external-reference-prefetch.js";
function nt(e) {
  "@babel/helpers - typeof";

  return nt = typeof Symbol == `function` && typeof Symbol.iterator == `symbol` ? function (e) {
    return typeof e;
  } : function (e) {
    return e && typeof Symbol == `function` && e.constructor === Symbol && e !== Symbol.prototype ? `symbol` : typeof e;
  }, nt(e);
}
function rt(e, t) {
  if (nt(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (nt(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function it(e) {
  var t = rt(e, `string`);
  return nt(t) == `symbol` ? t : t + ``;
}
function j(e, t, n) {
  return (t = it(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function st() {
  return {
    schemaVersion: 1,
    references: {}
  };
}
function ct(e) {
  return /^[1-9]\d*$/.test(e.trim());
}
function lt(e) {
  return !e || typeof e != `object` || !(`qualifier` in e) || !(`sourceUnitId` in e) || !(`sourceUnitType` in e) ? !1 : typeof e.qualifier == `string` && e.qualifier.trim().length > 0 && !ct(e.qualifier) && typeof e.sourceUnitId == `string` && e.sourceUnitId.length > 0 && (e.sourceUnitType === g.UNIVER_SHEET || e.sourceUnitType === g.UNIVER_BASE);
}
function L(e, t) {
  return function (n, r) {
    t(n, r, e);
  };
}
function R(e, t, n, r) {
  var i = arguments.length,
    a = i < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r,
    o;
  if (typeof Reflect == `object` && typeof Reflect.decorate == `function`) a = Reflect.decorate(e, t, n, r);else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
  return i > 3 && a && Object.defineProperty(t, n, a), a;
}
Et = R([L(0, d(I))], Et);
Nt = R([L(0, At), L(1, d(Et))], Nt);
B = R([L(0, d(I)), L(1, Oe)], B);
zt = R([L(0, u), L(1, d(I)), L(2, d(B))], zt);
Bt = R([L(0, c), L(1, d(I)), L(2, d(B))], Bt);
Ht = R([L(0, Qe), L(1, z)], Ht);
var Ut = `@univerjs-pro/engine-formula`,
  Wt = `1.0.0-insiders.20260907-70fc579`;
Gt = R([L(0, o), L(1, d(le)), L(2, d(bt))], Gt);
Kt = R([L(0, ye), L(1, u), L(2, d(Ne))], Kt);
Jt = R([L(0, o), L(1, d(N))], Jt);
Yt = R([L(0, o), L(1, d(N)), L(2, d(Ne))], Yt);
Qt = R([L(0, o), L(1, c), L(2, d(N))], Qt);
On = R([L(0, s), L(1, d(Ae)), L(2, Se), L(3, Te), L(4, Ce), L(5, d(ke)), L(6, d(w)), L(7, we)], On);
qn = R([L(0, Se), L(1, d(I))], qn);
Yn = R([L(0, d(je))], Yn);
Xn = R([L(0, Se), L(1, z), L(2, d(I)), L(3, Oe)], Xn);
$ = R([L(0, d(fe)), L(1, Oe), L(2, At)], $);
j(tr, `packageName`, Ut), j(tr, `version`, Wt), tr = R([i(tt)], tr);
or = R([L(0, d(I))], or);
lr = R([L(0, z), L(1, d(B)), L(2, d(fe))], lr);
function Sr(e) {
  if (!(e != null && e.result)) return {
    cell: void 0,
    count: 0
  };
  let t = new f(e.result),
    n = 0,
    r;
  return t.forValue((e, t, i) => {
    for (let e of i) for (let t of e) t != null && (n += 1, r = t);
  }), {
    cell: r,
    count: n
  };
}
function Tr(e) {
  var t;
  return e != null && e.s && typeof e.s == `object` ? (t = e.s.n) == null ? void 0 : t.pattern : void 0;
}
export { j, st, ct, lt, Tr, Sr };
