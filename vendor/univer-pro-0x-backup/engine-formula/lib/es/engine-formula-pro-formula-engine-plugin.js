import { AbsoluteRefType as e, CellValueType as t, CommandType as n, DEFAULT_NUMBER_FORMAT as r, DependentOn as i, Disposable as a, ICommandService as o, IConfigService as s, IResourceManagerService as c, IUndoRedoService as l, IUniverInstanceService as u, Inject as d, ObjectMatrix as f, RANGE_TYPE as p, Rectangle as m, Tools as h, UniverInstanceType as g, createIdentifier as _, generateRandomId as v, numfmt as y, regexp as b, requestImmediateMacroTask as x, toDisposable as S, touchDependencies as C } from "@univerjs/core";
import { AstTreeBuilder as w, BaseReferenceObject as ee, CELL_INVERTED_INDEX_CACHE as te, CalculateFormulaService as ne, DEFAULT_CYCLE_REFERENCE_COUNT as T, DEFAULT_INTERVAL_COUNT as re, DependencyManagerBaseService as ie, ENGINE_FORMULA_PLUGIN_CONFIG_KEY as ae, ErrorType as E, FORMULA_REF_TO_ARRAY_CACHE as oe, FUNCTION_NAMES_DATE as se, FUNCTION_NAMES_LOOKUP as D, FUNCTION_NAMES_MATH as ce, FormulaCalculationSessionService as le, FormulaCalculationTriggerService as ue, FormulaDataModel as de, FormulaDataModel as fe, FormulaDependencyGenerator as pe, FormulaDependencyTree as me, FormulaDependencyTreeType as O, FormulaDependencyTreeVirtual as he, FormulaExecuteStageType as k, FormulaResultStatus as ge, FormulaUnitReferenceResolver as _e, IActiveDirtyManagerService as ve, IActiveDirtyManagerService as ye, ICalculateFormulaService as be, IDependencyManagerService as xe, IFormulaCurrentConfigService as Se, IFormulaDependencyGenerator as Ce, IFormulaExternalReferenceDataLoader as we, IFormulaRuntimeService as Te, IFormulaUnitReferenceResolver as Ee, ISuperTableService as De, ISuperTableService as Oe, Interpreter as ke, Lexer as Ae, LexerTreeBuilder as je, OtherFormulaMarkDirty as Me, RegisterOtherFormulaService as Ne, RemoveSuperTableMutation as Pe, SetFormulaCalculationResultMutation as Fe, SetFormulaCalculationStartMutation as Ie, SetFormulaCalculationStartMutation as Le, SetFormulaDataMutation as Re, SetSuperTableMutation as ze, SetTriggerFormulaCalculationStartMutation as Be, UniverFormulaEnginePlugin as Ve, deserializeRangeWithSheet as He, deserializeRangeWithSheetWithCache as Ue, generateAstNode as We, generateRandomDependencyTreeId as Ge, getAbsoluteRefTypeWitString as Ke, normalizeFormulaUnitName as A, refactorFormulaUnitQualifier as qe, sequenceNodeType as Je, serializeRangeWithSheet as Ye, serializeRangeWithSpreadsheet as Xe, splitTableStructuredRef as Ze } from "@univerjs/engine-formula";
import { IRPCChannelService as Qe, fromModule as $e, toModule as et } from "@univerjs/rpc";
import { UniverLicensePlugin as tt } from "@univerjs-pro/license";
import { j } from "./internal-glue.js";
import { xt } from "./engine-formula-persist-formula-last-values.js";
import { P, dt, ft, pt } from "./engine-formula-upsert-host-external-reference.js";
import { at } from "./engine-formula-external-reference-plugin.js";
import { F } from "./engine-formula-external-synthetic-unit-id.js";
import { I } from "./engine-formula-external-reference-model.js";
import { N } from "./engine-formula-host-external-reference-model.js";
import { B } from "./engine-formula-external-reference-overlay-model.js";
import { Bt } from "./engine-formula-external-reference-resource.js";
import { bt } from "./engine-formula-formula-last-value-persistence.js";
import { Yn } from "./engine-formula-formula-cache-eligibility.js";
import { zt } from "./engine-formula-external-reference.js";
import { At, z } from "./engine-formula-iformula-reference-data.js";
import { jt } from "./engine-formula-formula-reference-data-provider-registry.js";
import { Et } from "./engine-formula-external-cache-reference-data-provider.js";
import { Nt } from "./engine-formula-external-reference-data-providers.js";
import { $ } from "./engine-formula-main-formula-reference-data.js";
import { Vt } from "./engine-formula-formula-reference-data-rpc-channel.js";
import { qn } from "./engine-formula-external-formula-unit-reference-resolver.js";
import { Ht } from "./engine-formula-formula-reference-data-rpc.js";
let Gt = class extends a {
  constructor(e, t, n) {
    super(), this._commandService = e, this._sessionService = t, j(this, `_lastPersistedSessionId`, 0), this.disposeWithMe(this._commandService.registerCommand(xt)), this.disposeWithMe(this._sessionService.resultApplied$.subscribe(() => {
      let e = this._sessionService.state.id;
      e < 1 || e === this._lastPersistedSessionId || (this._lastPersistedSessionId = e, this._commandService.syncExecuteCommand(xt.id, {
        sessionId: e
      }));
    }));
  }
};
let Kt = class extends a {
  constructor(e, t, n) {
    super(), e.register(P.id, {
      commandId: P.id,
      getDirtyData: e => {
        let {
            unitId: r
          } = e.params,
          i = qt(r, t),
          a = n.getFormulaDirtyMap(r),
          o = Object.fromEntries(Array.from(new Set([...i.map(({
            sheetId: e
          }) => e), ...Object.keys(a)]), e => [e, `1`]));
        return {
          dirtyRanges: i,
          dirtyUnitOtherFormulaMap: Object.keys(a).length > 0 ? {
            [r]: a
          } : void 0,
          clearDependencyTreeCache: Object.keys(o).length > 0 ? {
            [r]: o
          } : void 0
        };
      }
    }), this.disposeWithMe(S(() => {
      e.remove(P.id);
    }));
  }
};
function qt(e, t) {
  let n = t.getUnit(e, g.UNIVER_SHEET);
  if (n) return n.getSheets().map(t => ({
    unitId: e,
    sheetId: t.getSheetId(),
    range: {
      startRow: 0,
      startColumn: 0,
      endRow: Math.max(0, t.getRowCount() - 1),
      endColumn: Math.max(0, t.getColumnCount() - 1)
    }
  }));
  let r = t.getUnit(e, g.UNIVER_BASE);
  return r ? Object.values(r.getSnapshot().tables).map(t => {
    var n;
    return {
      unitId: e,
      sheetId: t.id,
      range: {
        startRow: 0,
        startColumn: 0,
        endRow: Math.max(0, (((n = t.recordOrder) == null ? void 0 : n.length) ?? 0) - 1),
        endColumn: Math.max(0, t.fieldOrder.length - 1)
      }
    };
  }) : [];
}
let Jt = class extends a {
  constructor(e, t) {
    super(), this.disposeWithMe(e.beforeCommandExecuted(e => {
      if (e.id !== Le.id) return;
      let n = e.params;
      n.externalReferences ??= t.getAll();
    }));
  }
};
let Yt = class extends a {
  constructor(e, t, n) {
    super(), this.disposeWithMe(e.onCommandExecuted((r, i) => {
      var a;
      if (r.id !== `sheet.mutation.set-range-values` || Xt(i)) return;
      let o = (a = r.params) == null ? void 0 : a.unitId;
      if (!o) return;
      let s = Zt(t, n, o);
      Object.keys(s).length > 0 && queueMicrotask(() => e.executeCommand(Me.id, s, {
        onlyLocal: !0
      }));
    }));
  }
};
function Xt(e) {
  return (e == null ? void 0 : e.onlyLocal) === !0 && e.fromFormula === !0;
}
function Zt(e, t, n) {
  let r = {};
  for (let [i, a] of Object.entries(e.getAll())) {
    if (!Object.values(a.references).some(e => e.sourceUnitId === n)) continue;
    let e = t.getFormulaDirtyMap(i);
    Object.keys(e).length > 0 && (r[i] = e);
  }
  return r;
}
let Qt = class extends a {
  constructor(e, t, n) {
    super(), [P, dt, ft, pt].forEach(t => {
      this.disposeWithMe(e.registerCommand(t));
    }), this.disposeWithMe(t.registerPluginResource({
      pluginName: at,
      businesses: [g.UNIVER_SHEET, g.UNIVER_DOC, g.UNIVER_SLIDE, g.UNIVER_BASE, g.UNIVER_BOARD],
      toJson: e => JSON.stringify(n.serialize(e)),
      parseJson: e => JSON.parse(e),
      onLoad: (e, t) => n.load(e, t),
      onUnLoad: e => n.remove(e)
    }));
  }
};
function $t() {
  return {
    totalFormulaNodes: 0,
    totalSharedFormulaGroups: 0,
    compressedSharedFormulaGroups: 0,
    compressibleSharedFormulaGroups: 0,
    expandedSharedFormulaGroups: 0,
    totalVirtualFormulaNodesInCompressedGroups: 0,
    totalVirtualFormulaNodesInCompressibleGroups: 0,
    skippedExpandedDependencyRegistrationCount: 0,
    sharedPatternCount: 0,
    sharedSourceCoverageEntryCount: 0,
    fallbackReasonCounts: {}
  };
}
function en(e, t = {}) {
  let n = t.minSharedGroupSize ?? 32,
    r = $t(),
    i = tn(e, r),
    a = [];
  return i.forEach(e => {
    let t = nn(e, n);
    if (a.push(t), r.totalSharedFormulaGroups++, t.mode === `candidate`) {
      r.compressibleSharedFormulaGroups++, r.totalVirtualFormulaNodesInCompressibleGroups += t.virtualFormulaCount;
      return;
    }
    r.expandedSharedFormulaGroups++, t.fallbackReason && (r.fallbackReasonCounts[t.fallbackReason] = (r.fallbackReasonCounts[t.fallbackReason] ?? 0) + 1);
  }), {
    groups: a,
    metrics: r
  };
}
function tn(e, t) {
  let n = new Map(),
    r = Object.keys(e);
  for (let i = 0; i < r.length; i++) {
    let a = r[i],
      o = e[a];
    if (o == null) continue;
    let s = Object.keys(o);
    for (let e = 0; e < s.length; e++) {
      let r = s[e],
        i = o[r];
      if (i == null) continue;
      let c = Object.keys(i);
      for (let e = 0; e < c.length; e++) {
        let o = +c[e],
          s = i[o];
        if (s == null) continue;
        let l = Object.keys(s);
        for (let e = 0; e < l.length; e++) {
          let i = +l[e],
            c = s[i];
          if (c == null || (t.totalFormulaNodes++, c.si == null)) continue;
          let u = String(c.si),
            d = on(a, r, u),
            f = n.get(d);
          f ?? (f = {
            groupId: d,
            unitId: a,
            sheetId: r,
            si: u,
            members: []
          }, n.set(d, f)), f.members.push({
            row: o,
            col: i,
            item: c
          });
        }
      }
    }
  }
  return n;
}
function nn(e, t) {
  var n;
  let r = rn(e.members),
    i = r.maxCol - r.minCol + 1,
    a = r.maxRow - r.minRow + 1,
    o = {
      unitId: e.unitId,
      sheetId: e.sheetId,
      range: {
        startRow: r.minRow,
        endRow: r.maxRow,
        startColumn: r.minCol,
        endColumn: r.maxCol
      }
    },
    s = r.anchorCount === 1 && r.anchor != null ? {
      unitId: e.unitId,
      sheetId: e.sheetId,
      row: r.anchor.row,
      col: r.anchor.col
    } : void 0,
    c = an(e, o, r.anchorCount, t, ((n = r.anchor) == null ? void 0 : n.item.f) ?? ``);
  return {
    groupId: e.groupId,
    unitId: e.unitId,
    sheetId: e.sheetId,
    si: e.si,
    anchor: s,
    fillRange: o,
    width: i,
    height: a,
    size: e.members.length,
    virtualFormulaCount: Math.max(0, e.members.length - 1),
    mode: c == null ? `candidate` : `expanded`,
    fallbackReason: c
  };
}
function rn(e) {
  let t = 1 / 0,
    n = -1 / 0,
    r = 1 / 0,
    i = -1 / 0,
    a = 0,
    o;
  for (let s = 0; s < e.length; s++) {
    let c = e[s];
    t = Math.min(t, c.row), n = Math.max(n, c.row), r = Math.min(r, c.col), i = Math.max(i, c.col), sn(c.item) && (a++, o = c);
  }
  return {
    minRow: t,
    maxRow: n,
    minCol: r,
    maxCol: i,
    anchorCount: a,
    anchor: o
  };
}
function an(e, t, n, r, i) {
  if (n === 0) return `missing-anchor-formula`;
  if (n > 1) return `ambiguous-anchor-formula`;
  if (!cn(e.members, t)) return `non-rectangular-fill-range`;
  if (e.members.length < r) return `small-group`;
  if (dn(i)) return `external-reference`;
  if (ln(i)) return `unsupported-dynamic-reference`;
  if (un(i)) return `volatile-function`;
  if (fn(i)) return `array-formula`;
  if (pn(i)) return `spill-formula`;
}
function on(e, t, n) {
  return [e, t, n].join(`\0`);
}
function sn(e) {
  return (e.x ?? 0) === 0 && (e.y ?? 0) === 0;
}
function cn(e, t) {
  return (t.range.endColumn - t.range.startColumn + 1) * (t.range.endRow - t.range.startRow + 1) === e.length;
}
function ln(e) {
  return mn(e, [`INDIRECT`, `OFFSET`]);
}
function un(e) {
  return mn(e, [`RAND`, `RANDBETWEEN`, `NOW`, `TODAY`]);
}
function dn(e) {
  return /\[[^\]]+\]/.test(e);
}
function fn(e) {
  return /^\s*\{=.*\}\s*$/.test(e);
}
function pn(e) {
  return /#/.test(e);
}
function mn(e, t) {
  for (let n = 0; n < t.length; n++) if (RegExp(`(^|[^A-Z0-9_.])${t[n]}\\s*\\(`, `i`).test(e)) return !0;
  return !1;
}
const hn = /\b(?:INDIRECT|ADDRESS|CELL|INFO|FORMULATEXT|RAND|RANDBETWEEN|NOW|TODAY)\s*\(/i,
  V = /(?:(?:'((?:[^']|'')+)'|([A-Za-z_][A-Za-z0-9_. ]*))!)?\$?([A-Z]{1,3})\$?([1-9]\d{0,6})(?::\$?([A-Z]{1,3})\$?([1-9]\d{0,6}))?/gi,
  gn = /(?:(?:'((?:[^']|'')+)'|([A-Za-z_][A-Za-z0-9_. ]*))!)?\$?([A-Z]{1,3}):\$?([A-Z]{1,3})(?![A-Za-z0-9_.])/gi,
  _n = /[A-Za-z_][A-Za-z0-9_.]*/g,
  vn = /^(?:TRUE|FALSE)$/i,
  yn = [D.ROW, D.ROWS, D.COLUMN, D.COLUMNS],
  bn = new WeakMap();
function xn(e) {
  for (let t = 0; t < e.length; t++) if (e.charCodeAt(t) > 127) return !0;
  return !1;
}
function Sn(e) {
  let t = bn.get(e);
  if (t !== void 0) return t;
  let n = Object.keys(e).filter(e => e.length > 0);
  return t = n.length > 0 ? b.createRegExpFromSafeFragment(`(^|[^A-Za-z0-9_])${b.or(...n)}(\\s*\\[|$|[^A-Za-z0-9_])`, `i`) : null, bn.set(e, t), t;
}
function H(e) {
  let t = globalThis;
  t.__UNIVER_PRO_STATIC_DEP_PROFILE_ENABLED__ === !0 && (t.__UNIVER_PRO_STATIC_DEP_PROFILE__ ??= {}, t.__UNIVER_PRO_STATIC_DEP_PROFILE__[e] = (t.__UNIVER_PRO_STATIC_DEP_PROFILE__[e] ?? 0) + 1);
}
function Cn(e, t) {
  let n = globalThis;
  n.__UNIVER_PRO_STATIC_DEP_PROFILE_ENABLED__ === !0 && (n.__UNIVER_PRO_STATIC_DEP_SAMPLES__ ??= {}, n.__UNIVER_PRO_STATIC_DEP_SAMPLES__[e] ??= [], n.__UNIVER_PRO_STATIC_DEP_SAMPLES__[e].length < 20 && n.__UNIVER_PRO_STATIC_DEP_SAMPLES__[e].push(t));
}
function U() {
  var e, t;
  return ((e = globalThis.performance) == null || (t = e.now) == null ? void 0 : t.call(e)) ?? Date.now();
}
function wn(e, t) {
  let n = globalThis;
  if (n.__UNIVER_PRO_PROFILE_ENABLED__ !== !0) return;
  n.__UNIVER_PRO_ENGINE_PROFILE__ ??= {}, n.__UNIVER_PRO_ENGINE_PROFILE__.timings ??= {};
  let r = n.__UNIVER_PRO_ENGINE_PROFILE__.timings[e] ?? {
    count: 0,
    totalMs: 0,
    maxMs: 0
  };
  r.count++, r.totalMs += t, r.maxMs = Math.max(r.maxMs, t), n.__UNIVER_PRO_ENGINE_PROFILE__.timings[e] = r;
}
function W(e, t = 1) {
  let n = globalThis;
  n.__UNIVER_PRO_PROFILE_ENABLED__ === !0 && (n.__UNIVER_PRO_ENGINE_PROFILE__ ??= {}, n.__UNIVER_PRO_ENGINE_PROFILE__.counters ??= {}, n.__UNIVER_PRO_ENGINE_PROFILE__.counters[e] = (n.__UNIVER_PRO_ENGINE_PROFILE__.counters[e] ?? 0) + t);
}
async function Tn(e, t) {
  let n = U();
  try {
    return await t();
  } finally {
    wn(e, U() - n);
  }
}
function En(e, t) {
  let n = U();
  try {
    return t();
  } finally {
    wn(e, U() - n);
  }
}
var Dn = class extends pe {
  constructor(...e) {
    super(...e), j(this, `_featureFormulaDirtyDependencies`, []), j(this, `_calculationTreeCache`, new Map()), j(this, `_calculationNodeDataCache`, new Map()), j(this, `_forcedRecalculationNodeIndices`, new Set()), j(this, `_sharedFormulaCompressionMetrics`, $t()), j(this, `_cacheDependencyTreeModelRangeList`, !1);
  }
  dispose() {
    super.dispose(), this._dependencyTreeCache.clear(), this._calculationTreeCache.clear(), this._calculationNodeDataCache = new Map(), this._featureFormulaDirtyDependencies.length = 0, this._forcedRecalculationNodeIndices.clear(), this._sharedFormulaCompressionMetrics = $t();
  }
  clearCalculatedDirty(e) {
    this._dependencyManagerService.clearCalculatedDirty(e);
  }
  clearCachedCalculationNodeData() {
    this._calculationNodeDataCache = new Map();
  }
  clearCachedCalculationTree() {
    this._calculationTreeCache.clear();
  }
  getCachedCalculationNodeData(e) {
    return this._calculationNodeDataCache.get(e);
  }
  getCalculationOrder() {
    return this._dependencyManagerService.getCalculationOrder({
      detectCycles: !0
    });
  }
  getSharedFormulaCompressionMetrics() {
    return this._sharedFormulaCompressionMetrics;
  }
  hasDynamicDepsByIndex(e) {
    return this._dependencyManagerService.hasDynamicDepsByIndex(e);
  }
  refreshDynamicDepsByIndex(e, t) {
    return this._dependencyManagerService.refreshDynamicDepsByIndex(e, t);
  }
  hasUncalculatedDirtyPrecedentByIndex(e, t) {
    return this._dependencyManagerService.hasUncalculatedDirtyPrecedentByIndex(e, t);
  }
  async getAllDependencyJson() {
    this._featureFormulaDirtyDependencies.length = 0, this._updateRangeFlatten();
    let e = this._currentConfigService.getFormulaData(),
      t = en(e);
    this._sharedFormulaCompressionMetrics = t.metrics;
    let n = this._otherFormulaManagerService.getOtherFormulaData(),
      r = this._currentConfigService.getUnitData();
    this._cacheDependencyTreeModelRangeList = !0;
    try {
      return await this._generateTreeListPro(e, n, r, t), this._getAllDependencyJsonPro(this._calculationTreeCache);
    } finally {
      this._cacheDependencyTreeModelRangeList = !1, this._featureFormulaDirtyDependencies.length = 0;
    }
  }
  async generatePro(e = !1) {
    this._featureFormulaDirtyDependencies.length = 0, En(`dependency.updateRangeFlatten`, () => this._updateRangeFlatten());
    let t = this._currentConfigService.getFormulaData(),
      n = En(`dependency.analyzeSharedFormulaGroups`, () => en(t));
    this._sharedFormulaCompressionMetrics = n.metrics, W(`dependency.formulaNodes`, n.metrics.totalFormulaNodes), W(`dependency.sharedFormulaGroups`, n.groups.length);
    let r = this._otherFormulaManagerService.getOtherFormulaData(),
      i = this._currentConfigService.getClearDependencyTreeCache(),
      a = this._dependencyManagerService;
    i != null && Object.keys(i).forEach(e => {
      e != null && Object.keys(i[e]).forEach(t => {
        t != null && (a.clearOtherFormulaDependency(e, t), a.clearFeatureFormulaDependency(e, t), a.clearFormulaDependency(e, t), this._clearCalculationTreeCache(e, t));
      });
    });
    let o = this._currentConfigService.getUnitData();
    this._cacheDependencyTreeModelRangeList = e;
    try {
      await Tn(`dependency.generateTreeList`, () => this._generateTreeListPro(t, r, o, n));
    } finally {
      this._cacheDependencyTreeModelRangeList = !1;
    }
    await Tn(`dependency.markDirtyDependencies`, () => this._markDirtyDependenciesPro()), this._featureFormulaDirtyDependencies.length = 0, En(`dependency.clearArrayObjectCache`, () => this._runtimeService.clearArrayObjectCache());
    let s = En(`dependency.getCalculationOrder`, () => a.getCalculationOrder({
        detectCycles: !0
      })),
      c = this._calculationTreeCache;
    return e && this._runtimeService.setDependencyTreeModelData(this._getAllDependencyJsonPro(c)), {
      calculationOrderResult: s,
      dependencyTree: c
    };
  }
  async _generateTreeListPro(e, t, n, r) {
    let i = Object.keys(e),
      a = Object.keys(t);
    this._registerFeatureFormulasPro(), this._dependencyManagerService.reserveFormulaDependencyCapacity(Math.max(16, r.metrics.totalFormulaNodes), Math.max(16, Math.ceil(r.metrics.totalFormulaNodes / 2))), await this._registerFormulasPro(i, e, n, r), await this._registerOtherFormulasPro(t, a);
  }
  _registerFeatureFormulasPro() {
    this._featureCalculationManagerService.getReferenceExecutorMap().forEach((e, t) => {
      e.forEach((e, t) => {
        e.forEach((e, t) => {
          let n = this._dependencyManagerService.getFeatureFormulaDependency(e.unitId, e.subUnitId, t);
          this._getFeatureFormulaTreePro(t, n, e);
        });
      });
    });
  }
  _getFeatureFormulaTreePro(e, t, n) {
    let {
        unitId: r,
        subUnitId: i,
        dependencyRanges: a,
        getDirtyData: o
      } = n,
      s = new me(t || Ge(this._dependencyManagerService));
    s.unitId = r, s.subUnitId = i, s.rangeList = a, s.getDirtyData = o;
    let c = o(this._currentConfigService.getDirtyData(), this._runtimeService.getAllRuntimeData()),
      l = this._convertDirtyRangesToUnitRange(c.dirtyRanges);
    s.featureDirtyRanges = l, s.featureId = e, s.type = O.FEATURE_FORMULA;
    let u = this._dependencyManagerService.getFeatureFormulaDependencyPro(n.unitId, n.subUnitId, e),
      d;
    return u === void 0 && (u = this._dependencyManagerService.addFeatureFormulaDependencyPro(r, i, e, s), d = u), l.length > 0 && this._featureFormulaDirtyDependencies.push({
      node: this._dependencyManagerService.getFeatureFormulaDependencyNodePro(r, i, e),
      dirtyRanges: l
    }), this._cacheCalculationTree(u, s), this._releaseDependencyTree(s), d;
  }
  async _registerOtherFormulasPro(e, t) {
    for (let n of t) {
      let t = e[n];
      if (t == null) continue;
      let r = Object.keys(t);
      for (let e of r) {
        let r = t[e];
        if (r == null) continue;
        let i = this._currentConfigService.getSheetRowColumnCount(n, e),
          a = i.rowCount > 0 ? i.rowCount : 1,
          o = i.columnCount > 0 ? i.columnCount : 1,
          s = Object.keys(r);
        for (let t of s) {
          let i = this._dependencyManagerService.hasOtherFormulaDataMainData(t),
            {
              f: s,
              ranges: c
            } = r[t],
            l = !1;
          i && (l = !0);
          let {
              firstRow: u,
              firstColumn: d
            } = this._getFirstCellOfRange(c),
            f = new me(Ge(this._dependencyManagerService));
          for (let r = 0; r < c.length; r++) {
            let i = c[r],
              {
                startRow: p,
                startColumn: m
              } = i,
              {
                endRow: h,
                endColumn: g
              } = i;
            h = Math.min(h, a - 1), g = Math.min(g, o - 1);
            for (let r = p; r <= h; r++) for (let i = m; i <= g; i++) {
              let a = i - d,
                o = r - u,
                c = this._dependencyManagerService.getOtherFormulaDependencyPro(n, e, t, a, o);
              if (a === 0 && o === 0) {
                f.formula = s, f.unitId = n, f.subUnitId = e, f.formulaId = t, f.type = O.OTHER_FORMULA, f.isCache = l, f.node || (await this._initialAstNodeAndRanges(f));
                let r = this._getFeatureFormulaDependencyNodes(f.rangeList);
                c === void 0 ? c = this._dependencyManagerService.addOtherFormulaDependencyPro(n, e, t, f, r) : r.length > 0 && (c = this._dependencyManagerService.addOtherFormulaDependencyPro(n, e, t, f, r, `merge`)), this._cacheCalculationTree(c, f), this._syncForcedRecalculationNodeIndex(c, f);
                continue;
              }
              let p = new he();
              p.treeId = Ge(this._dependencyManagerService), p.refTree = f, p.refOffsetX = a, p.refOffsetY = o, p.isCache = l, p.type = O.OTHER_FORMULA;
              let m = this._getFeatureFormulaDependencyNodes(p.rangeList);
              c === void 0 ? c = this._dependencyManagerService.addOtherFormulaDependencyPro(n, e, t, p, m) : m.length > 0 && (c = this._dependencyManagerService.addOtherFormulaDependencyPro(n, e, t, p, m, `merge`)), this._cacheCalculationTree(c, p), this._syncForcedRecalculationNodeIndex(c, p), this._releaseDependencyTree(p);
            }
          }
          this._releaseDependencyTree(f);
        }
      }
    }
  }
  async _registerFormulasPro(e, t, n, r = en(t)) {
    let i = this._createSharedFormulaGroupMap(r.groups),
      a = this._dependencyManagerService,
      o = this._shouldEagerCacheCalculationTrees();
    W(o ? `dependency.eagerCalculationTreeCache.enabled` : `dependency.eagerCalculationTreeCache.skipped`);
    for (let r of e) {
      let e = t[r];
      if (e == null) continue;
      let s = Object.keys(e);
      for (let t of s) {
        let s = new Map(),
          c = new Map(),
          l = new Set(),
          u = new Map(),
          d = [],
          f = e[t];
        if (f == null) continue;
        let p = Object.keys(f),
          m = U();
        for (let e of p) {
          let p = +e,
            m = f[p];
          if (m == null) continue;
          let h = Object.keys(m);
          for (let e of h) {
            let f = +e,
              h = m[f];
            if (h == null) continue;
            let {
              x: g = 0,
              y: _ = 0,
              si: v
            } = h;
            if (g !== 0 || _ !== 0 || v == null) continue;
            let y = String(v),
              b = this._createFDtree(r, t, p, f, n, h),
              x = this._createSharedFormulaGroupId(r, t, y),
              S = i.get(x),
              C = (S == null ? void 0 : S.mode) === `candidate` ? await this._analyzeSharedFormulaCompression(b, S) : void 0,
              w;
            if ((C == null ? void 0 : C.mode) === `compressed`) {
              w = a.addFormulaDependencyNodeOnlyPro(r, t, p, f), c.set(y, C), l.add(y), d.push(C);
              let e = [w];
              e.push(...a.addFormulaDependencyNodeOnlyRangePro(r, t, C.group.fillRange.range, {
                row: p,
                col: f
              })), u.set(C.group.groupId, e);
            } else if ((C == null ? void 0 : C.mode) === `expanded` && (c.set(y, C), this._recordExpandedSharedFormulaGroupMetrics(C)), w = a.getFormulaDependencyPro(r, t, p, f), w === void 0) {
              await this._initialDependencyRanges(b);
              let e = this._getFeatureFormulaDependencyNodes(b.rangeList);
              w = a.addFormulaDependencyPro(r, t, p, f, b, e);
            } else {
              await this._ensureTreeInitializedForDependencies(b);
              let e = this._getFeatureFormulaDependencyNodes(b.rangeList);
              this._includeDirtySuperTablePro(r, b.formula) ? w = a.addFormulaDependencyPro(r, t, p, f, b, e, `replace`) : e.length > 0 && (w = a.addFormulaDependencyPro(r, t, p, f, b, e, `merge`));
            }
            s.set(y, b);
            let ee = this._syncForcedRecalculationNodeIndex(w, b);
            (o || ee) && (W(`dependency.calculationTreeCache.normal`), this._cacheCalculationTree(w, b));
          }
        }
        wn(`dependency.registerFormulas.sharedAnchorPass`, U() - m);
        let h = U();
        for (let e of p) {
          let i = +e,
            u = f[i];
          if (u == null) continue;
          let d = Object.keys(u);
          for (let e of d) {
            let d = +e,
              f = u[d];
            if (f == null) continue;
            let {
              x: p = 0,
              y: m = 0,
              si: h
            } = f;
            if (p === 0 && m === 0 && h != null) continue;
            let g = h == null ? void 0 : String(h);
            if (!o && g != null && l.has(g)) continue;
            let _ = g == null ? void 0 : c.get(g);
            if ((_ == null ? void 0 : _.mode) === `compressed` && g != null && s.has(g)) {
              if (o) {
                let e = a.getFormulaDependencyPro(r, t, i, d),
                  n = s.get(g),
                  {
                    x: o = 0,
                    y: c = 0
                  } = f;
                e !== void 0 && (W(`dependency.calculationTreeCache.compressedVirtual`), this._cacheCompressedVirtualCalculationTree(e, n, o, c));
              }
              continue;
            }
            let v = a.getFormulaDependencyPro(r, t, i, d),
              y,
              b = g == null ? void 0 : s.get(g);
            if (b == null ? y = this._createFDtree(r, t, i, d, n, f) : (y = this._createVirtualFDtree(b, f), y.addressFunctionNodes = b.addressFunctionNodes), v === void 0) {
              y.isVirtual || (await this._initialDependencyRanges(y));
              let e = this._getFeatureFormulaDependencyNodes(y.rangeList);
              v = a.addFormulaDependencyPro(r, t, i, d, y, e);
            } else {
              let e = this._includeDirtySuperTablePro(r, y.formula),
                n = b != null;
              (this._cacheDependencyTreeModelRangeList || this._featureFormulaDirtyDependencies.length > 0 || e || a.hasDynamicDepsByIndex(v)) && (await this._ensureTreeInitializedForDependencies(y));
              let o = this._getFeatureFormulaDependencyNodes(y.rangeList);
              n || e ? v = a.addFormulaDependencyPro(r, t, i, d, y, o, `replace`) : o.length > 0 && (v = a.addFormulaDependencyPro(r, t, i, d, y, o, `merge`));
            }
            let x = this._syncForcedRecalculationNodeIndex(v, y);
            (o || x) && (W(`dependency.calculationTreeCache.normal`), this._cacheCalculationTree(v, y)), this._releaseDependencyTree(y);
          }
        }
        wn(`dependency.registerFormulas.virtualPass`, U() - h);
        let g = U();
        for (let e = 0; e < d.length; e++) {
          let t = d[e];
          t.patterns && t.group.fillRange && (a.registerCompressedSharedFormulaGroup({
            groupId: t.group.groupId,
            fillRange: t.group.fillRange,
            patterns: t.patterns,
            memberNodeIndices: u.get(t.group.groupId)
          }), this._recordCompressedSharedFormulaGroupMetrics(t));
        }
        wn(`dependency.registerFormulas.compressedGroups`, U() - g), s.forEach(e => this._releaseDependencyTree(e)), s.clear();
      }
    }
  }
  _createSharedFormulaGroupMap(e) {
    let t = new Map();
    for (let n = 0; n < e.length; n++) t.set(e[n].groupId, e[n]);
    return t;
  }
  _createSharedFormulaGroupId(e, t, n) {
    return [e, t, String(n)].join(`\0`);
  }
  async _analyzeSharedFormulaCompression(e, t) {
    if (t.fillRange == null) return {
      group: t,
      mode: `expanded`,
      fallbackReason: `non-rectangular-fill-range`
    };
    await this._initialDependencyRanges(e);
    let n = this._getFeatureFormulaDependencyNodes(e.rangeList),
      r = this._getSharedFormulaUnsupportedReason(e, n.length);
    if (r) return {
      group: t,
      mode: `expanded`,
      fallbackReason: r
    };
    let i = this._convertSharedFormulaPatterns(e);
    return i == null || i.length === 0 ? {
      group: t,
      mode: `expanded`,
      fallbackReason: `unsupported-range-pattern`
    } : this._hasSharedFormulaSelfOverlap(t.fillRange, i) ? {
      group: t,
      mode: `expanded`,
      fallbackReason: `self-overlap`
    } : {
      group: t,
      mode: `compressed`,
      patterns: i
    };
  }
  _getSharedFormulaUnsupportedReason(e, t) {
    if (e.addressFunctionNodes && e.addressFunctionNodes.length > 0) return `unsupported-dynamic-reference`;
    if (t > 0 || /\$/.test(e.formula)) return `unsupported-range-pattern`;
  }
  _convertSharedFormulaPatterns(e) {
    let t = [],
      n = new Set(),
      r = e.row,
      i = e.column;
    for (let a = 0; a < e.rangeList.length; a++) {
      let o = e.rangeList[a];
      if ((o.range.rangeType ?? p.NORMAL) !== p.NORMAL) return;
      let s = this._normalizeSharedFormulaRange(o.range),
        c;
      c = s.startRow === s.endRow && s.startColumn === s.endColumn ? {
        kind: `cell`,
        unitId: o.unitId,
        sheetId: o.sheetId,
        rowDelta: s.startRow - r,
        colDelta: s.startColumn - i
      } : {
        kind: `range`,
        unitId: o.unitId,
        sheetId: o.sheetId,
        startRowDelta: s.startRow - r,
        startColDelta: s.startColumn - i,
        endRowDelta: s.endRow - r,
        endColDelta: s.endColumn - i
      };
      let l = JSON.stringify(c);
      n.has(l) || (n.add(l), t.push(c));
    }
    return t;
  }
  _hasSharedFormulaSelfOverlap(e, t) {
    for (let n = 0; n < t.length; n++) {
      let r = this._computeSharedFormulaSourceCoverage(e, t[n]);
      if (r.unitId === e.unitId && r.sheetId === e.sheetId && m.intersects(r.range, e.range)) return !0;
    }
    return !1;
  }
  _computeSharedFormulaSourceCoverage(e, t) {
    if (t.kind === `cell`) return {
      unitId: t.unitId,
      sheetId: t.sheetId,
      range: this._normalizeSharedFormulaRange({
        startRow: e.range.startRow + t.rowDelta,
        endRow: e.range.endRow + t.rowDelta,
        startColumn: e.range.startColumn + t.colDelta,
        endColumn: e.range.endColumn + t.colDelta
      })
    };
    let n = Math.min(t.startRowDelta, t.endRowDelta),
      r = Math.max(t.startRowDelta, t.endRowDelta),
      i = Math.min(t.startColDelta, t.endColDelta),
      a = Math.max(t.startColDelta, t.endColDelta);
    return {
      unitId: t.unitId,
      sheetId: t.sheetId,
      range: this._normalizeSharedFormulaRange({
        startRow: e.range.startRow + n,
        endRow: e.range.endRow + r,
        startColumn: e.range.startColumn + i,
        endColumn: e.range.endColumn + a
      })
    };
  }
  _normalizeSharedFormulaRange(e) {
    return {
      startRow: Math.min(e.startRow, e.endRow),
      endRow: Math.max(e.startRow, e.endRow),
      startColumn: Math.min(e.startColumn, e.endColumn),
      endColumn: Math.max(e.startColumn, e.endColumn)
    };
  }
  _recordCompressedSharedFormulaGroupMetrics(e) {
    e.mode === `compressed` && e.patterns != null && (this._sharedFormulaCompressionMetrics.compressedSharedFormulaGroups++, this._sharedFormulaCompressionMetrics.totalVirtualFormulaNodesInCompressedGroups += e.group.virtualFormulaCount, this._sharedFormulaCompressionMetrics.skippedExpandedDependencyRegistrationCount += e.group.size * e.patterns.length, this._sharedFormulaCompressionMetrics.sharedPatternCount += e.patterns.length, this._sharedFormulaCompressionMetrics.sharedSourceCoverageEntryCount += e.patterns.length);
  }
  _recordExpandedSharedFormulaGroupMetrics(e) {
    e.mode === `expanded` && e.fallbackReason != null && (this._sharedFormulaCompressionMetrics.expandedSharedFormulaGroups++, this._sharedFormulaCompressionMetrics.fallbackReasonCounts[e.fallbackReason] = (this._sharedFormulaCompressionMetrics.fallbackReasonCounts[e.fallbackReason] ?? 0) + 1);
  }
  _shouldEagerCacheCalculationTrees() {
    var e, t;
    return this._cacheDependencyTreeModelRangeList || this._currentConfigService.isForceCalculate() || this._currentConfigService.getDirtyRanges().length > 0 ? !0 : this._hasAnyDirtyMapValue(this._currentConfigService.getDirtyNameMap()) || this._hasAnyDirtyMapValue(this._currentConfigService.getDirtyDefinedNameMap()) || this._hasAnyDirtyMapValue((e = (t = this._currentConfigService).getDirtySuperTableMap) == null ? void 0 : e.call(t)) || this._hasAnyDirtyMapValue(this._currentConfigService.getDirtyUnitFeatureMap()) || this._hasAnyDirtyMapValue(this._currentConfigService.getDirtyUnitOtherFormulaMap());
  }
  _hasAnyDirtyMapValue(e) {
    if (e == null) return !1;
    if (Array.isArray(e)) return e.length > 0;
    if (typeof e != `object`) return !0;
    let t = Object.values(e);
    for (let e = 0; e < t.length; e++) if (this._hasAnyDirtyMapValue(t[e])) return !0;
    return !1;
  }
  async _markDirtyDependenciesPro() {
    let e = this._dependencyManagerService;
    if (this._currentConfigService.isForceCalculate()) {
      e.markAllDirty();
      return;
    }
    let t = this._currentConfigService.getDirtyRanges();
    t.length > 0 && e.markRangesChanged(t, {
      includeFormulaCells: !0
    }), e.markDirtyFeatureCalculations(this._currentConfigService.getDirtyUnitFeatureMap()), e.markDirtyOtherFormulas(this._currentConfigService.getDirtyUnitOtherFormulaMap()), e.markDirtySheetNames(this._currentConfigService.getDirtyNameMap()), this._markForcedRecalculationNodesPro(e), await this._markDirtyDefinedNameDependenciesPro(e), this._markDirtySuperTableDependenciesPro(e);
  }
  _markForcedRecalculationNodesPro(e) {
    if (this._forcedRecalculationNodeIndices.size === 0) return;
    let t = [];
    this._forcedRecalculationNodeIndices.forEach(e => {
      t.push(e);
    }), e.markIndicesChanged(t);
  }
  async _markDirtyDefinedNameDependenciesPro(e) {
    let t = this._currentConfigService.getDirtyDefinedNameMap();
    if (!this._hasDirtyDefinedNames(t)) return;
    let n = [];
    for (let [e, t] of this._calculationTreeCache) t.formula && t.formula.length > 0 && this._includeDirtyDefinedNamePro(t.formula) && n.push(e);
    n.length > 0 && e.markIndicesChanged(n);
  }
  _markDirtySuperTableDependenciesPro(e) {
    var t, n;
    let r = (t = (n = this._currentConfigService).getDirtySuperTableMap) == null ? void 0 : t.call(n);
    if (!this._hasAnyDirtyMapValue(r)) return;
    let i = [];
    for (let [e, t] of this._calculationTreeCache) this._includeDirtySuperTablePro(t.unitId, t.formula) && i.push(e);
    i.length > 0 && e.markIndicesChanged(i);
  }
  _cacheCalculationTree(e, t) {
    let n = {
      unitId: t.unitId,
      subUnitId: t.subUnitId,
      formula: t.formula,
      row: t.row,
      column: t.column,
      rowCount: t.rowCount,
      columnCount: t.columnCount,
      refOffsetX: t.refOffsetX,
      refOffsetY: t.refOffsetY,
      formulaId: t.formulaId,
      featureId: t.featureId,
      getDirtyData: t.getDirtyData,
      hasDynamicDeps: t.addressFunctionNodes.length > 0,
      type: t.type
    };
    (t.addressFunctionNodes.length > 0 || this._cacheDependencyTreeModelRangeList) && (n.rangeList = t.rangeList);
    let r = t.nodeData;
    (r == null ? void 0 : r.node) != null && this._calculationNodeDataCache.set(e, {
      node: r.node,
      refOffsetX: r.refOffsetX,
      refOffsetY: r.refOffsetY
    }), this._calculationTreeCache.set(e, n);
  }
  _cacheCompressedVirtualCalculationTree(e, t, n, r) {
    this._calculationTreeCache.set(e, {
      unitId: t.unitId,
      subUnitId: t.subUnitId,
      formula: t.formula,
      row: t.row + r,
      column: t.column + n,
      rowCount: t.rowCount,
      columnCount: t.columnCount,
      refOffsetX: n,
      refOffsetY: r,
      formulaId: t.formulaId,
      featureId: t.featureId,
      getDirtyData: null,
      hasDynamicDeps: !1,
      type: t.type
    }), this._cacheDependencyTreeModelRangeList && (this._calculationTreeCache.get(e).rangeList = this._getOffsetRangeList(t.rangeList, n, r)), t.node != null && this._calculationNodeDataCache.set(e, {
      node: t.node,
      refOffsetX: n,
      refOffsetY: r
    });
  }
  _getOffsetRangeList(e, t, n) {
    return t === 0 && n === 0 ? e : e.map(e => ({
      unitId: e.unitId,
      sheetId: e.sheetId,
      range: {
        startRow: e.range.startRow + n,
        endRow: e.range.endRow + n,
        startColumn: e.range.startColumn + t,
        endColumn: e.range.endColumn + t
      }
    }));
  }
  _getAllDependencyJsonPro(e) {
    let t = this._dependencyManagerService,
      n = [];
    for (let [r, i] of e) {
      let a = [],
        o = [];
      t.forEachPrecedentNodeByIndex(r, t => {
        e.has(t) && a.push(t);
      }), t.forEachDependentNodeByIndex(r, t => {
        e.has(t) && o.push(t);
      }), n.push({
        children: a,
        parents: o,
        treeId: r,
        formula: i.formula,
        row: i.row,
        column: i.column,
        unitId: i.unitId,
        subUnitId: i.subUnitId,
        refOffsetX: i.refOffsetX,
        refOffsetY: i.refOffsetY,
        rangeList: i.rangeList ?? [],
        refTreeId: void 0,
        formulaId: i.formulaId,
        featureId: i.featureId,
        type: i.type ?? this._inferDependencyTreeTypePro(i)
      });
    }
    return n;
  }
  _inferDependencyTreeTypePro(e) {
    return e.featureId == null ? e.formulaId == null ? O.NORMAL_FORMULA : O.OTHER_FORMULA : O.FEATURE_FORMULA;
  }
  _clearCalculationTreeCache(e, t) {
    for (let [n, r] of this._calculationTreeCache) r.unitId === e && r.subUnitId === t && (this._calculationTreeCache.delete(n), this._calculationNodeDataCache.delete(n), this._forcedRecalculationNodeIndices.delete(n));
  }
  _releaseDependencyTree(e) {
    if (e instanceof he) {
      e.dispose();
      return;
    }
    let t = e;
    t.dispose(), t.node = null;
  }
  _hasDirtyDefinedNames(e) {
    let t = Object.keys(e);
    for (let n = 0; n < t.length; n++) {
      let r = e[t[n]];
      if (r != null && Object.keys(r).length > 0) return !0;
    }
    return !1;
  }
  _syncForcedRecalculationNodeIndex(e, t) {
    return t.formula && (this._hasForcedRecalculationFunction(t.formula) || t.node && this._detectForcedRecalculationNodePro(t.node)) ? (this._forcedRecalculationNodeIndices.add(e), !0) : (this._forcedRecalculationNodeIndices.delete(e), !1);
  }
  _hasForcedRecalculationFunction(e) {
    return /\b(?:RAND|RANDBETWEEN|NOW|TODAY)\s*\(/i.test(e);
  }
  _detectForcedRecalculationNodePro(e) {
    if (e.isForcedCalculateFunction()) return !0;
    let t = e.getChildren();
    for (let e = 0; e < t.length; e++) if (this._detectForcedRecalculationNodePro(t[e])) return !0;
    return !1;
  }
  _includeDirtyDefinedNamePro(e) {
    let t = this._runtimeService.currentUnitId;
    if (t == null) return !1;
    let n = this._currentConfigService.getDirtyDefinedNameMap()[t];
    if (n == null) return !1;
    let r = Object.keys(n);
    for (let t = 0; t < r.length; t++) if (e.indexOf(r[t]) > -1) return !0;
    return !1;
  }
  _includeDirtySuperTablePro(e, t) {
    var n, r, i;
    if (!t) return !1;
    let a = (n = (r = this._currentConfigService).getDirtySuperTableMap) == null || (n = n.call(r)) == null ? void 0 : n[e];
    return a == null ? !1 : ((i = Sn(a)) == null ? void 0 : i.test(t)) ?? !1;
  }
  async _ensureTreeInitializedForDependencies(e) {
    if (e.isVirtual) return;
    let t = e;
    t.node || t.formula && (await this._initialAstNodeAndRanges(t));
  }
  _getFeatureFormulaDependencyNodes(e) {
    if (this._featureFormulaDirtyDependencies.length === 0 || e.length === 0) return [];
    let t = [];
    for (let n = 0; n < this._featureFormulaDirtyDependencies.length; n++) {
      let r = this._featureFormulaDirtyDependencies[n];
      this._rangesIntersectAny(e, r.dirtyRanges) && t.push(r.node);
    }
    return t;
  }
  _rangesIntersectAny(e, t) {
    for (let n = 0; n < e.length; n++) {
      let r = e[n];
      for (let e = 0; e < t.length; e++) {
        let n = t[e];
        if (r.unitId === n.unitId && r.sheetId === n.sheetId && m.intersects(r.range, n.range)) return !0;
      }
    }
    return !1;
  }
  async _initialAstNodeAndRanges(e) {
    let t = this._initializeAstNode(e),
      n = await this._getRangeListByNode({
        node: t,
        refOffsetX: e.refOffsetX,
        refOffsetY: e.refOffsetY
      });
    e.pushRangeList(n);
  }
  _initializeAstNode(e) {
    this._runtimeService.setCurrent(e.row, e.column, e.rowCount, e.columnCount, e.subUnitId, e.unitId);
    let t = We(e.unitId, e.formula, this._lexer, this._astTreeBuilder, this._currentConfigService, e.subUnitId, e.column, e.row);
    return e.node = t, e.addressFunctionNodes = this._getAddressFunctionNodeList(t), t;
  }
  async _initialDependencyRanges(e) {
    if (!(e.node || e.rangeList.length > 0)) {
      if (this._tryInitialStaticReferenceRanges(e)) {
        H(`static.hit`);
        return;
      }
      H(`ast.init`), await this._initialAstNodeAndRanges(e);
    }
  }
  _tryInitialStaticReferenceRanges(e) {
    var t, n;
    let r = e.formula;
    if (!r || r.charCodeAt(0) !== 61) return H(`static.skip.notFormula`), !1;
    let i = r.slice(1);
    if (i.indexOf(`[`) >= 0 || i.indexOf(`]`) >= 0 || i.indexOf(`{`) >= 0 || i.indexOf(`}`) >= 0 || i.indexOf(`#`) >= 0 || hn.test(i)) return H(`static.skip.unsupportedSyntax`), Cn(`unsupportedSyntax`, r), !1;
    let a = this._replaceDoubleQuotedStrings(i),
      o = this._replaceQuotedSheetNames(a);
    if (xn(o) || !this._hasOnlyStaticReferenceSafeIdentifiers(o)) return H(`static.skip.identifier`), Cn(`identifier`, r), !1;
    let s = [],
      c = ((t = (n = this._currentConfigService).getSheetNameMap) == null ? void 0 : t.call(n)) ?? {},
      l = /\bOFFSET\s*\(/i.test(a),
      u = !1,
      d = a;
    if (l) {
      let t = this._tryExtractStaticOffsetRanges(e, c, a);
      if (t == null) {
        if (!this._hasOnlyStaticOffsetBases(e, c, a)) return H(`static.skip.offset`), Cn(`offset`, r), !1;
        this._initializeAstNode(e), u = !0, H(`static.dynamicOffset`);
      } else s.push(...t);
      d = this._replaceFunctionFirstArguments(d, D.OFFSET);
    }
    for (let e of yn) d = this._replaceFunctionFirstArguments(d, e);
    gn.lastIndex = 0;
    let f;
    for (; (f = gn.exec(d)) != null;) {
      if (!this._isStaticReferenceTokenBoundarySafe(d, f.index, gn.lastIndex)) continue;
      let t = this._tryCreateStaticColumnReferenceRange(e, c, f);
      if (t == null) return H(`static.skip.referenceParse`), Cn(`referenceParse`, r), !1;
      s.push(t);
    }
    V.lastIndex = 0;
    let p;
    for (; (p = V.exec(d)) != null;) {
      if (!this._isStaticReferenceTokenBoundarySafe(d, p.index, V.lastIndex)) continue;
      let t = this._tryCreateStaticReferenceRange(e, c, p);
      if (t == null) return H(`static.skip.referenceParse`), Cn(`referenceParse`, r), !1;
      s.push(t);
    }
    return u || (e.addressFunctionNodes = []), e.rangeList.push(...this._dedupeStaticReferenceRanges(s)), !0;
  }
  _replaceDoubleQuotedStrings(e) {
    let t = ``,
      n = !1;
    for (let r = 0; r < e.length; r++) {
      let i = e[r];
      if (i === `"`) {
        if (t += ` `, n && e[r + 1] === `"`) {
          r++, t += ` `;
          continue;
        }
        n = !n;
        continue;
      }
      t += n ? ` ` : i;
    }
    return t;
  }
  _replaceQuotedSheetNames(e) {
    return e.replace(/'(?:(?:[^']|'')+)'(?=!)/g, e => ` `.repeat(e.length));
  }
  _hasOnlyStaticReferenceSafeIdentifiers(e) {
    _n.lastIndex = 0;
    let t;
    for (; (t = _n.exec(e)) != null;) {
      let n = t[0],
        r = t.index,
        i = _n.lastIndex,
        a = this._nextNonSpaceChar(e, i);
      if (!(a === `(` || a === `!` || vn.test(n)) && !this._looksLikeA1ReferenceAt(e, r, i) && !this._looksLikeColumnReferencePart(e, r, i)) return !1;
    }
    return !0;
  }
  _looksLikeA1ReferenceAt(e, t, n) {
    let r = e.slice(t, n),
      i = /^([A-Za-z]{1,3})([1-9]\d*)$/.exec(r);
    if (i && this._columnNameToIndex(i[1]) !== void 0) return !0;
    let a = n;
    return e[a] === `$` && a++, /\d/.test(e[a] ?? ``) ? this._columnNameToIndex(r) !== void 0 : !1;
  }
  _looksLikeColumnReferencePart(e, t, n) {
    let r = e.slice(t, n);
    if (this._columnNameToIndex(r) === void 0) return !1;
    let i = e[t - 1] === `$` ? e[t - 2] ?? `` : e[t - 1] ?? ``,
      a = e[n] === `$` ? e[n + 1] ?? `` : e[n] ?? ``;
    return i === `:` || a === `:`;
  }
  _isStaticReferenceTokenBoundarySafe(e, t, n) {
    let r = e[t - 1] ?? ``,
      i = e[n] ?? ``;
    return !(/[A-Za-z0-9_.]/.test(r) || i === `(` || /[A-Za-z0-9_.]/.test(i));
  }
  _tryCreateStaticReferenceRange(e, t, n) {
    var r, i;
    let a = ((r = n[1]) == null ? void 0 : r.replace(/''/g, `'`)) ?? n[2],
      o = a == null ? e.subUnitId : (i = t[e.unitId]) == null ? void 0 : i[a];
    if (!o) return;
    let s = this._columnNameToIndex(n[3]),
      c = Number(n[4]) - 1,
      l = this._columnNameToIndex(n[5] ?? n[3]),
      u = Number(n[6] ?? n[4]) - 1,
      d = Ke(n[0]),
      f = d.endAbsoluteRefType ?? d.startAbsoluteRefType,
      p = this._getStaticReferenceSheetSize(e, o);
    if (!(s === void 0 || l === void 0 || c < 0 || u < 0 || Math.max(c, u) >= p.rowCount || Math.max(s, l) >= p.columnCount)) return {
      unitId: e.unitId,
      sheetId: o,
      range: {
        startRow: Math.min(c, u),
        endRow: Math.max(c, u),
        startColumn: Math.min(s, l),
        endColumn: Math.max(s, l),
        startAbsoluteRefType: d.startAbsoluteRefType,
        endAbsoluteRefType: f
      }
    };
  }
  _tryCreateStaticColumnReferenceRange(e, t, n) {
    var r, i;
    let a = ((r = n[1]) == null ? void 0 : r.replace(/''/g, `'`)) ?? n[2],
      o = a == null ? e.subUnitId : (i = t[e.unitId]) == null ? void 0 : i[a];
    if (!o) return;
    let s = this._columnNameToIndex(n[3]),
      c = this._columnNameToIndex(n[4]),
      l = Ke(n[0]);
    if (s === void 0 || c === void 0) return;
    let u = this._getStaticReferenceSheetSize(e, o);
    if (!(Math.max(s, c) >= u.columnCount || u.rowCount <= 0)) return {
      unitId: e.unitId,
      sheetId: o,
      range: {
        startRow: 0,
        endRow: u.rowCount - 1,
        startColumn: Math.min(s, c),
        endColumn: Math.max(s, c),
        startAbsoluteRefType: l.startAbsoluteRefType,
        endAbsoluteRefType: l.endAbsoluteRefType,
        rangeType: p.COLUMN
      }
    };
  }
  _tryExtractStaticOffsetRanges(e, t, n) {
    let r = this._extractFunctionCalls(n, `OFFSET`),
      i = [];
    for (let n = 0; n < r.length; n++) {
      let a = this._tryCreateStaticOffsetRange(e, t, r[n]);
      if (a == null) return;
      i.push(a);
    }
    return i;
  }
  _hasOnlyStaticOffsetBases(e, t, n) {
    let r = this._extractFunctionCalls(n, D.OFFSET);
    return r.length > 0 && r.every(n => this._tryParseSingleStaticReference(e, t, n[0]) != null);
  }
  _replaceFunctionFirstArguments(e, t) {
    let n = e.split(``),
      r = e.toUpperCase(),
      i = t.toUpperCase(),
      a = 0;
    for (; a < e.length;) {
      let t = r.indexOf(i, a);
      if (t < 0) break;
      let o = e[t - 1] ?? ``,
        s = t + i.length;
      for (; e[s] === ` `;) s++;
      if (/[A-Za-z0-9_.]/.test(o) || e[s] !== `(`) {
        a = t + i.length;
        continue;
      }
      let c = this._findMatchingParen(e, s);
      if (c < 0) break;
      let l = 0,
        u = c;
      for (let t = s + 1; t < c; t++) {
        let n = e[t];
        if (n === `(`) l++;else if (n === `)`) l--;else if (n === `,` && l === 0) {
          u = t;
          break;
        }
      }
      n.fill(` `, s + 1, u), a = c + 1;
    }
    return n.join(``);
  }
  _tryCreateStaticOffsetRange(e, t, n) {
    if (n.length < 3) return;
    let r = this._tryParseSingleStaticReference(e, t, n[0]),
      i = this._tryInferOffsetRowSpan(e, t, n[1], r),
      a = this._tryParseInteger(n[2]),
      o = n[3] == null ? 1 : this._tryInferPositiveInteger(n[3]),
      s = n[4] == null ? 1 : this._tryInferPositiveInteger(n[4]);
    if (r == null || i == null || a == null || o == null || s == null || o < 1 || s < 1) return;
    let c = this._getStaticReferenceSheetSize(e, r.sheetId),
      l = r.range.startRow + i.startOffset,
      u = r.range.startRow + i.endOffset + o - 1,
      d = r.range.startColumn + a,
      f = d + s - 1;
    if (!(l < 0 || u < l || u >= c.rowCount || d < 0 || f < d || f >= c.columnCount)) return {
      unitId: r.unitId,
      sheetId: r.sheetId,
      range: {
        startRow: l,
        endRow: u,
        startColumn: d,
        endColumn: f
      }
    };
  }
  _tryInferOffsetRowSpan(e, t, n, r) {
    let i = this._tryParseInteger(n);
    if (i != null) return {
      startOffset: i,
      endOffset: i
    };
    if (r == null) return;
    let a = this._extractFunctionCalls(n, `MATCH`)[0];
    if (a == null || a.length < 2) return;
    let o = this._tryParseSingleStaticReference(e, t, a[1]);
    if (o == null || o.sheetId !== r.sheetId || o.unitId !== r.unitId) return;
    let s = n.slice(n.toUpperCase().indexOf(`MATCH`));
    if (/\)\s*-\s*1\s*$/.test(s)) return {
      startOffset: o.range.startRow - r.range.startRow,
      endOffset: o.range.endRow - r.range.startRow
    };
  }
  _tryInferPositiveInteger(e) {
    let t = this._tryParseInteger(e);
    if (t != null) return t;
    let n = this._extractFunctionCalls(e, `ROW`)[0];
    if (n == null || n.length !== 1) return;
    let r = /^\s*\$?([1-9]\d*):\$?([1-9]\d*)\s*$/.exec(n[0]);
    if (r != null) return Math.max(Number(r[1]), Number(r[2]));
  }
  _tryParseInteger(e) {
    return /^\s*-?\d+\s*$/.exec(e) == null ? void 0 : Number(e);
  }
  _tryParseSingleStaticReference(e, t, n) {
    let r = n.trim();
    V.lastIndex = 0;
    let i = V.exec(r);
    if (i != null && i.index === 0 && V.lastIndex === r.length) return this._tryCreateStaticReferenceRange(e, t, i);
  }
  _extractFunctionCalls(e, t) {
    let n = [],
      r = e.toUpperCase(),
      i = t.toUpperCase(),
      a = 0;
    for (; a < e.length;) {
      let t = r.indexOf(i, a);
      if (t < 0) break;
      let o = e[t - 1] ?? ``,
        s = t + i.length;
      for (; e[s] === ` `;) s++;
      if (/[A-Za-z0-9_.]/.test(o) || e[s] !== `(`) {
        a = t + i.length;
        continue;
      }
      let c = this._findMatchingParen(e, s);
      if (c < 0) break;
      n.push(this._splitTopLevelArguments(e.slice(s + 1, c))), a = c + 1;
    }
    return n;
  }
  _findMatchingParen(e, t) {
    let n = 0;
    for (let r = t; r < e.length; r++) {
      let t = e[r];
      if (t === `(`) n++;else if (t === `)` && (n--, n === 0)) return r;
    }
    return -1;
  }
  _splitTopLevelArguments(e) {
    let t = [],
      n = 0,
      r = 0;
    for (let i = 0; i < e.length; i++) {
      let a = e[i];
      a === `(` ? n++ : a === `)` ? n-- : a === `,` && n === 0 && (t.push(e.slice(r, i).trim()), r = i + 1);
    }
    return t.push(e.slice(r).trim()), t;
  }
  _getStaticReferenceSheetSize(e, t) {
    if (t === e.subUnitId) return {
      rowCount: e.rowCount,
      columnCount: e.columnCount
    };
    let n = this._currentConfigService.getSheetRowColumnCount(e.unitId, t);
    return {
      rowCount: n.rowCount || e.rowCount,
      columnCount: n.columnCount || e.columnCount
    };
  }
  _dedupeStaticReferenceRanges(t) {
    if (t.length < 2) return t;
    let n = new Set(),
      r = [];
    for (let i = 0; i < t.length; i++) {
      let a = t[i],
        o = a.range.startAbsoluteRefType ?? e.NONE,
        s = a.range.endAbsoluteRefType ?? o,
        c = a.range.rangeType ?? p.NORMAL,
        l = `${a.unitId}\0${a.sheetId}\0${a.range.startRow}\0${a.range.endRow}\0${a.range.startColumn}\0${a.range.endColumn}\0${o}\0${s}\0${c}`;
      n.has(l) || (n.add(l), r.push(a));
    }
    return r;
  }
  _columnNameToIndex(e) {
    let t = 0;
    for (let n = 0; n < e.length; n++) {
      let r = e.charCodeAt(n),
        i = r >= 97 && r <= 122 ? r - 32 : r;
      if (i < 65 || i > 90) return;
      t = t * 26 + i - 64;
    }
    let n = t - 1;
    return n >= 0 && n < 16384 ? n : void 0;
  }
  _nextNonSpaceChar(e, t) {
    for (let n = t; n < e.length; n++) if (e[n] !== ` `) return e[n];
    return ``;
  }
  _createFDtree(e, t, n, r, i, a) {
    let {
        f: o
      } = a,
      s = new me(Ge(this._dependencyManagerService)),
      c = i[e][t];
    return s.formula = o, s.unitId = e, s.subUnitId = t, s.row = n, s.column = r, s.rowCount = c.rowCount, s.columnCount = c.columnCount, s;
  }
};
let On = class extends ne {
  constructor(e, t, n, r, i, a, o, s) {
    super(e, t, n, r, i, a, o), this._externalReferenceDataLoader = s, j(this, `_dynamicRuntimeRanges`, void 0), j(this, `_runtimeExternalDataLoaded`, !1);
  }
  async execute(e) {
    this._runtimeService.setFormulaExecuteStage(k.START), this._executionInProgressListener$.next(this._runtimeService.getRuntimeState()), this._currentConfigService.load(e), this._runtimeService.reset();
    let t = e.maxIteration || T;
    this._isCalculateTreeModel = e.isCalculateTreeModel || !1, this._executeLock.acquire(`FORMULA_EXECUTION_LOCK`, async () => {
      await this._executeStep(t), this._runtimeService.setFormulaExecuteStage(k.CALCULATION_COMPLETED), this._executionInProgressListener$.next(this._runtimeService.getRuntimeState()), this._executionCompleteListener$.next(this._runtimeService.getAllRuntimeData()), te.clear(), this._runtimeService.reset();
    });
  }
  async _executeStep(e = T) {
    let t = await this._apply(!1, e);
    if (t == null) return;
    let {
        arrayFormulaRange: n
      } = t,
      {
        dirtyRanges: r,
        excludedCell: i
      } = this._getArrayFormulaDirtyRangeAndExcludedRange(n, {});
    return r == null || r.length === 0 ? !0 : (oe.clear(), this._currentConfigService.loadDirtyRangesAndExcludedCell(r, i), await this._apply(!0, e), !0);
  }
  async _apply(e = !1, t = T) {
    this._setFormulaExecuteStage(e, k.START_DEPENDENCY, k.START_DEPENDENCY_ARRAY_FORMULA), this._executionInProgressListener$.next(this._runtimeService.getRuntimeState());
    let n = this._configService.getConfig(ae),
      r = (n == null ? void 0 : n.intervalCount) || re,
      i = this._formulaDependencyGenerator;
    try {
      let {
          calculationOrderResult: n,
          dependencyTree: a
        } = await i.generatePro(this._isCalculateTreeModel),
        o = this._getCalculationPlanTreeCount(n, a, t);
      n.hasCycle && this._runtimeService.enableCycleDependency(), this._setFormulaExecuteStage(e, k.START_CALCULATION, k.START_CALCULATION_ARRAY_FORMULA), this._setTotalFormulasToCalculate(e, o), this._executionInProgressListener$.next(this._runtimeService.getRuntimeState());
      let s = [],
        c = [],
        l = new Set(),
        u = !1,
        d = 0,
        f = 0;
      for (this._runtimeService.setFormulaCycleIndex(0);;) {
        let p = !1,
          m = !1;
        if (await this._forEachCalculationPlanTree(n, a, t, async (n, a, o, f) => {
          if (this._runtimeService.setFormulaCycleIndex(o ?? 0), await this._waitForExecutionSlot(d, r, e, n, s)) return u = !0, !1;
          if (f) {
            l.has(a) || (l.add(a), c.push(a)), d++;
            return;
          }
          let h = await this._calculateDependencyTree(n, a, i, t),
            g = this._runtimeExternalDataLoaded;
          this._runtimeExternalDataLoaded = !1, m ||= g, h && (g || this._shouldRescheduleAfterDynamicChange(i, a, l)) && (p = !0), l.has(a) || (l.add(a), c.push(a)), d++;
        }), n.calculationForest.length = 0, u || !p) break;
        if (f++, f > 8) throw Error(`Dynamic dependency did not stabilize`);
        m && oe.clear(), i.clearCachedCalculationNodeData(), n = i.getCalculationOrder(), n.hasCycle && this._runtimeService.enableCycleDependency(), o = this._getCalculationPlanTreeCount(n, a, t), this._setTotalFormulasToCalculate(e, o);
      }
      for (let e = 0; e < s.length; e++) s[e]();
      return c.length > 0 && i.clearCalculatedDirty(c), u ? void 0 : (o > 0 || c.length > 0 ? this._runtimeService.markedAsSuccessfullyExecuted() : e || this._runtimeService.markedAsNoFunctionsExecuted(), this._runtimeService.getAllRuntimeData());
    } finally {
      i.clearCachedCalculationNodeData(), i.clearCachedCalculationTree(), this._dynamicRuntimeRanges = void 0;
    }
  }
  _setFormulaExecuteStage(e, t, n) {
    this._runtimeService.setFormulaExecuteStage(e ? n : t);
  }
  _setTotalFormulasToCalculate(e, t) {
    if (e) {
      this._runtimeService.setTotalArrayFormulasToCalculate(t);
      return;
    }
    this._runtimeService.setTotalFormulasToCalculate(t);
  }
  _shouldRescheduleAfterDynamicChange(e, t, n) {
    let r = e;
    return typeof r.hasUncalculatedDirtyPrecedentByIndex != `function` || r.hasUncalculatedDirtyPrecedentByIndex(t, n);
  }
  async _forEachCalculationPlanTree(e, t, n, r) {
    let i = Math.max(n, 1);
    for (let a = 0; a < e.calculationForest.length; a++) {
      let o = e.calculationForest[a],
        s = o.hasCycle && n <= T && this._calculationPlanHasSelfReference(o);
      for (let e = 0; e < o.plan.length; e++) {
        let n = o.plan[e];
        if (n.type === `node`) {
          let e = t.get(n.nodeIndex);
          if (e != null && (await r(e, n.nodeIndex, void 0, !1)) === !1) return;
          continue;
        }
        if (n.type === `nodes`) {
          for (let e = 0; e < n.nodeIndices.length; e++) {
            let i = n.nodeIndices[e],
              a = t.get(i);
            if (a != null && (await r(a, i, void 0, !1)) === !1) return;
          }
          n.nodeIndices.length = 0;
          continue;
        }
        for (let e = 0; e < i; e++) {
          e > 0 && oe.clear();
          for (let i = 0; i < n.nodeIndices.length; i++) {
            let a = n.nodeIndices[i],
              o = t.get(a);
            if (o != null && (await r(o, a, e, s)) === !1) return;
          }
        }
      }
    }
  }
  _calculationPlanHasSelfReference(e) {
    return e.plan.some(e => e.type === `cycle` && e.nodeIndices.length === 1);
  }
  _getCalculationPlanTreeCount(e, t, n) {
    let r = Math.max(n, 1),
      i = 0;
    for (let n = 0; n < e.calculationForest.length; n++) {
      let a = e.calculationForest[n];
      for (let e = 0; e < a.plan.length; e++) {
        let n = a.plan[e];
        if (n.type === `node`) {
          t.has(n.nodeIndex) && i++;
          continue;
        }
        if (n.type === `nodes`) {
          for (let e = 0; e < n.nodeIndices.length; e++) t.has(n.nodeIndices[e]) && i++;
          continue;
        }
        let o = 0;
        for (let e = 0; e < n.nodeIndices.length; e++) t.has(n.nodeIndices[e]) && o++;
        i += o * r;
      }
    }
    return i;
  }
  _getDynamicResolver() {
    let e = this._dynamicRuntimeRanges;
    if (e == null) return;
    let t = e.map(e => this._getRangeSignature(e)).sort().join(`|`);
    return () => ({
      signature: t,
      ranges: e,
      status: e.length > 0 ? `resolved` : `unknown`
    });
  }
  async _refreshDynamicDepsAfterCalculate(e, t, n, r) {
    if (n.hasDynamicDeps === !1 || !e.hasDynamicDepsByIndex(t)) return {
      dynamicChanged: !1,
      hasSelfReference: !1
    };
    let i = this._collectAddressFunctionRuntimeReferences(r);
    if (i.length === 0) return {
      dynamicChanged: !1,
      hasSelfReference: !1
    };
    let a = await Promise.all(i.map(e => {
      var t, r;
      return (t = (r = this._externalReferenceDataLoader).loadRuntimeRange) == null ? void 0 : t.call(r, {
        hostUnitId: n.unitId,
        ...e
      });
    }));
    this._runtimeExternalDataLoaded = a.some(e => e === !0);
    let o = i.map(({
        unitId: e,
        sheetId: t,
        range: n
      }) => ({
        unitId: e,
        sheetId: t,
        range: n
      })),
      s = n.formulaId == null && o.some(({
        unitId: e,
        sheetId: t,
        range: r
      }) => e === n.unitId && t === n.subUnitId && n.row >= r.startRow && n.row <= r.endRow && n.column >= r.startColumn && n.column <= r.endColumn);
    this._dynamicRuntimeRanges = o;
    try {
      let n = this._getDynamicResolver();
      return n == null ? {
        dynamicChanged: !1,
        hasSelfReference: s
      } : {
        dynamicChanged: e.refreshDynamicDepsByIndex(t, n) || this._runtimeExternalDataLoaded,
        hasSelfReference: s
      };
    } finally {
      this._dynamicRuntimeRanges = void 0;
    }
  }
  _collectAddressFunctionRuntimeReferences(e) {
    let t = [];
    return this._collectAddressFunctionRuntimeReferencesInternal(e, t), t;
  }
  _collectAddressFunctionRuntimeReferencesInternal(e, t) {
    if (e.isAddress()) {
      let n = e.getValue();
      n instanceof ee && t.push({
        ...n.toUnitRange(),
        sheetName: n.getForcedSheetName() || void 0
      });
    }
    for (let n of e.getChildren()) this._collectAddressFunctionRuntimeReferencesInternal(n, t);
  }
  _getRangeSignature(e) {
    return [e.unitId, e.sheetId, e.range.startRow, e.range.endRow, e.range.startColumn, e.range.endColumn].join(`:`);
  }
  async _waitForExecutionSlot(e, t, n, r, i) {
    return e % t === 0 ? (await new Promise(e => {
      let t = x(e);
      i.push(t);
    }), n ? (this._runtimeService.setFormulaExecuteStage(k.CURRENTLY_CALCULATING_ARRAY_FORMULA), this._runtimeService.setCompletedArrayFormulasCount(e + 1)) : (this._runtimeService.setFormulaExecuteStage(k.CURRENTLY_CALCULATING), this._runtimeService.setCompletedFormulasCount(e + 1)), this._executionInProgressListener$.next(this._runtimeService.getRuntimeState()), this._runtimeService.isStopExecution() || r.formula == null && r.getDirtyData == null ? (this._runtimeService.setFormulaExecuteStage(k.IDLE), this._runtimeService.markedAsStopFunctionsExecuted(), this._executionCompleteListener$.next(this._runtimeService.getAllRuntimeData()), !0) : !1) : !1;
  }
  async _calculateDependencyTree(e, t, n, r = T) {
    let i = e.getDirtyData;
    if (this._runtimeService.setCurrent(e.row, e.column, e.rowCount, e.columnCount, e.subUnitId, e.unitId), i != null && e.featureId != null) {
      let t = e.featureId,
        {
          runtimeCellData: n,
          dirtyRanges: r
        } = i(this._currentConfigService.getDirtyData(), this._runtimeService.getAllRuntimeData());
      return this._runtimeService.setRuntimeFeatureCellData(t, n), this._runtimeService.setRuntimeFeatureRange(t, r), !1;
    }
    let a = this._getCalculationNodeData(e, t, n),
      o = a.node,
      s;
    try {
      let i = this._setFunctionRefInfoForTree(e);
      try {
        s = this._interpreter.checkAsyncNode(a.node) ? await this._interpreter.executeAsync(a) : this._interpreter.execute(a);
      } finally {
        i();
      }
      let {
        dynamicChanged: c,
        hasSelfReference: l
      } = await this._refreshDynamicDepsAfterCalculate(n, t, e, o);
      return (!l || r > T) && (e.formulaId == null ? this._runtimeService.setRuntimeData(s) : this._runtimeService.setRuntimeOtherData(e.formulaId, e.refOffsetX, e.refOffsetY, s)), c;
    } finally {
      o.resetCalculationState();
    }
  }
  _setFunctionRefInfoForTree(e) {
    var t;
    if (e.formulaId != null) return () => {};
    let n = (t = this._currentConfigService.getArrayFormulaRange()[e.unitId]) == null || (t = t[e.subUnitId]) == null || (t = t[e.row]) == null ? void 0 : t[e.column];
    return n == null ? this._runtimeService.setFunctionRefInfoOverride(1, 1) : this._runtimeService.setFunctionRefInfoOverride(n.endRow - n.startRow + 1, n.endColumn - n.startColumn + 1);
  }
  _getCalculationNodeData(e, t, n) {
    let r = n.getCachedCalculationNodeData(t);
    return (r == null ? void 0 : r.node) == null ? {
      node: We(e.unitId, e.formula, this._lexer, this._astTreeBuilder, this._currentConfigService, e.subUnitId, e.column - e.refOffsetX, e.row - e.refOffsetY),
      refOffsetX: e.refOffsetX,
      refOffsetY: e.refOffsetY
    } : r;
  }
};
var kn = class {
  constructor(e, t) {
    j(this, `maxRows`, void 0), j(this, `maxCols`, void 0), j(this, `sheetSize`, void 0), j(this, `_sheetKeyById`, new Map()), j(this, `_sheetIdByKey`, []), this.maxRows = e, this.maxCols = t, this.sheetSize = e * t;
  }
  reset() {
    this._sheetKeyById.clear(), this._sheetIdByKey.length = 0;
  }
  encodeCell(e, t, n, r) {
    return this.encodeSheet(e, t) * this.sheetSize + n * this.maxCols + r;
  }
  decodeCell(e) {
    let t = Math.floor(e / this.sheetSize),
      n = e - t * this.sheetSize,
      r = Math.floor(n / this.maxCols),
      i = n - r * this.maxCols,
      {
        unitId: a,
        sheetId: o
      } = this.decodeSheetKey(t);
    return {
      unitId: a,
      sheetId: o,
      row: r,
      col: i
    };
  }
  encodeSheet(e, t) {
    let n = `${e}\0${t}`,
      r = this._sheetKeyById.get(n);
    if (r !== void 0) return r;
    let i = this._sheetIdByKey.length;
    return this._sheetKeyById.set(n, i), this._sheetIdByKey.push({
      unitId: e,
      sheetId: t
    }), i;
  }
  decodeSheetKey(e) {
    let t = this._sheetIdByKey[e];
    if (!t) throw Error(`Unknown sheet key: ${e}`);
    return t;
  }
  encodeRow(e, t, n) {
    return this.encodeSheet(e, t) * this.maxRows + n;
  }
  encodeRowBySheetKey(e, t) {
    return e * this.maxRows + t;
  }
  decodeRowKey(e) {
    let t = Math.floor(e / this.maxRows),
      n = e - t * this.maxRows;
    return {
      sheetKey: t,
      ...this.decodeSheetKey(t),
      row: n
    };
  }
  encodeCol(e, t, n) {
    return this.encodeSheet(e, t) * this.maxCols + n;
  }
  encodeColBySheetKey(e, t) {
    return e * this.maxCols + t;
  }
  decodeColKey(e) {
    let t = Math.floor(e / this.maxCols),
      n = e - t * this.maxCols;
    return {
      sheetKey: t,
      ...this.decodeSheetKey(t),
      col: n
    };
  }
};
function An(e) {
  if (typeof e != `number`) throw TypeError(`CellFormula node id must be a numeric CellId`);
}
function G(e) {
  let {
    startRow: t,
    endRow: n,
    startColumn: r,
    endColumn: i
  } = e.range;
  if (t <= n && r <= i) return e;
  let a = t < n ? t : n,
    o = t < n ? n : t,
    s = r < i ? r : i,
    c = r < i ? i : r;
  return {
    ...e,
    range: {
      ...e.range,
      startRow: a,
      endRow: o,
      startColumn: s,
      endColumn: c
    }
  };
}
function K(e) {
  return e.range.endRow - e.range.startRow + 1;
}
function q(e) {
  return e.range.endColumn - e.range.startColumn + 1;
}
function jn(e, t) {
  return e.unitId === t.unitId && e.sheetId === t.sheetId && e.range.startRow <= t.row && t.row <= e.range.endRow && e.range.startColumn <= t.col && t.col <= e.range.endColumn;
}
function Mn(e) {
  if (!e || e.length === 0) return [];
  if (e.length === 1) return [e[0]];
  let t = e.slice().sort((e, t) => e - t),
    n = 1;
  for (let e = 1; e < t.length; e++) t[e] !== t[n - 1] && (t[n++] = t[e]);
  return t.length = n, t;
}
function J(e, t, n) {
  let r = e.get(t);
  r || (r = [], e.set(t, r)), r.push(n);
}
function Nn(e, t) {
  let n = e.indexOf(t);
  if (n < 0) return !1;
  let r = e.pop();
  return n < e.length && (e[n] = r), !0;
}
function Y(e, t, n) {
  let r = e.get(t);
  r && (Nn(r, n), r.length === 0 && e.delete(t));
}
function Pn(e, t) {
  if (e === void 0) return t;
  if (typeof e == `number`) return e === t ? e : [e, t];
  for (let n = 0; n < e.length; n++) if (e[n] === t) return e;
  return e.push(t), e;
}
function Fn(e, t) {
  if (e === void 0) return;
  if (typeof e == `number`) return e === t ? void 0 : e;
  let n = e.indexOf(t);
  if (n < 0) return e;
  if (e.length === 1) return;
  if (e.length === 2) return e[1 - n];
  let r = e.pop();
  return n < e.length && (e[n] = r), e;
}
function X(e, t) {
  if (e !== void 0) {
    if (typeof e == `number`) {
      t(e);
      return;
    }
    for (let n = 0; n < e.length; n++) t(e[n]);
  }
}
function In(e, t, n) {
  let r = Pn(e.get(t), n);
  e.set(t, r);
}
function Ln(e, t, n) {
  let r = e.get(t);
  if (r === void 0) return;
  let i = Fn(r, n);
  i === void 0 ? e.delete(t) : e.set(t, i);
}
function Z(e, t) {
  if (e.length >= t) return e;
  let n = Math.max(16, e.length);
  for (; n < t;) n *= 2;
  let r = new Uint8Array(n);
  return r.set(e), r;
}
function Q(e, t) {
  if (e.length >= t) return e;
  let n = Math.max(16, e.length);
  for (; n < t;) n *= 2;
  let r = new Uint32Array(n);
  return r.set(e), r;
}
function Rn(e) {
  if (!e || e.length === 0) return [];
  let t = new Set(),
    n = [];
  for (let r = 0; r < e.length; r++) {
    let i = e[r],
      a = `${i.type}:${String(i.id)}`;
    t.has(a) || (t.add(a), n.push(i));
  }
  return n;
}
function zn(e) {
  if (e.length <= 1) {
    let t = Array(e.length);
    for (let n = 0; n < e.length; n++) t[n] = G(e[n]);
    return t;
  }
  let t = Array(e.length);
  for (let n = 0; n < e.length; n++) t[n] = G(e[n]);
  return Vn(Bn(t));
}
function Bn(e) {
  let t = e.slice().sort((e, t) => {
      let n = e.unitId.localeCompare(t.unitId);
      if (n !== 0) return n;
      let r = e.sheetId.localeCompare(t.sheetId);
      return r === 0 ? e.range.startRow === t.range.startRow ? e.range.endRow === t.range.endRow ? e.range.startColumn === t.range.startColumn ? e.range.endColumn - t.range.endColumn : e.range.startColumn - t.range.startColumn : e.range.endRow - t.range.endRow : e.range.startRow - t.range.startRow : r;
    }),
    n = [];
  for (let e of t) {
    let t = n[n.length - 1];
    t && t.unitId === e.unitId && t.sheetId === e.sheetId && t.range.startRow === e.range.startRow && t.range.endRow === e.range.endRow && e.range.startColumn <= t.range.endColumn + 1 ? e.range.endColumn > t.range.endColumn && (t.range.endColumn = e.range.endColumn) : n.push({
      ...e,
      range: {
        ...e.range
      }
    });
  }
  return n;
}
function Vn(e) {
  let t = e.slice().sort((e, t) => {
      let n = e.unitId.localeCompare(t.unitId);
      if (n !== 0) return n;
      let r = e.sheetId.localeCompare(t.sheetId);
      return r === 0 ? e.range.startColumn === t.range.startColumn ? e.range.endColumn === t.range.endColumn ? e.range.startRow === t.range.startRow ? e.range.endRow - t.range.endRow : e.range.startRow - t.range.startRow : e.range.endColumn - t.range.endColumn : e.range.startColumn - t.range.startColumn : r;
    }),
    n = [];
  for (let e of t) {
    let t = n[n.length - 1];
    t && t.unitId === e.unitId && t.sheetId === e.sheetId && t.range.startColumn === e.range.startColumn && t.range.endColumn === e.range.endColumn && e.range.startRow <= t.range.endRow + 1 ? e.range.endRow > t.range.endRow && (t.range.endRow = e.range.endRow) : n.push({
      ...e,
      range: {
        ...e.range
      }
    });
  }
  return n;
}
var Hn = class {
    constructor(e, t) {
      this._codec = e, this._indexToNodeId = t, j(this, `_rowBuckets`, new Map()), j(this, `_colBuckets`, new Map());
    }
    addFormulaCell(e, t) {
      let n = this._codec.decodeCell(e);
      J(this._rowBuckets, this._codec.encodeRow(n.unitId, n.sheetId, n.row), t), J(this._colBuckets, this._codec.encodeCol(n.unitId, n.sheetId, n.col), t);
    }
    addFormulaCellByPosition(e, t, n, r) {
      J(this._rowBuckets, this._codec.encodeRowBySheetKey(e, t), r), J(this._colBuckets, this._codec.encodeColBySheetKey(e, n), r);
    }
    removeFormulaCell(e, t) {
      let n = this._codec.decodeCell(e);
      Y(this._rowBuckets, this._codec.encodeRow(n.unitId, n.sheetId, n.row), t), Y(this._colBuckets, this._codec.encodeCol(n.unitId, n.sheetId, n.col), t);
    }
    forEachFormulaInRange(e, t) {
      let n = G(e);
      return K(n) <= q(n) ? this._scanRows(n, t) : this._scanCols(n, t);
    }
    _scanRows(e, t) {
      if (K(e) <= this._rowBuckets.size) {
        for (let n = e.range.startRow; n <= e.range.endRow; n++) if (this._scanRowBucket(this._codec.encodeRow(e.unitId, e.sheetId, n), e, t) === !1) return !1;
        return !0;
      }
      for (let [n] of this._rowBuckets) {
        let r = this._codec.decodeRowKey(n);
        if (r.unitId === e.unitId && r.sheetId === e.sheetId && e.range.startRow <= r.row && r.row <= e.range.endRow && this._scanRowBucket(n, e, t) === !1) return !1;
      }
      return !0;
    }
    _scanCols(e, t) {
      if (q(e) <= this._colBuckets.size) {
        for (let n = e.range.startColumn; n <= e.range.endColumn; n++) if (this._scanColBucket(this._codec.encodeCol(e.unitId, e.sheetId, n), e, t) === !1) return !1;
        return !0;
      }
      for (let [n] of this._colBuckets) {
        let r = this._codec.decodeColKey(n);
        if (r.unitId === e.unitId && r.sheetId === e.sheetId && e.range.startColumn <= r.col && r.col <= e.range.endColumn && this._scanColBucket(n, e, t) === !1) return !1;
      }
      return !0;
    }
    _scanRowBucket(e, t, n) {
      let r = this._rowBuckets.get(e);
      if (!r) return !0;
      for (let e = 0; e < r.length; e++) {
        let i = r[e],
          a = this._indexToNodeId[i],
          o = this._codec.decodeCell(a);
        if (o.unitId === t.unitId && o.sheetId === t.sheetId && t.range.startColumn <= o.col && o.col <= t.range.endColumn && n(i) === !1) return !1;
      }
      return !0;
    }
    _scanColBucket(e, t, n) {
      let r = this._colBuckets.get(e);
      if (!r) return !0;
      for (let e = 0; e < r.length; e++) {
        let i = r[e],
          a = this._indexToNodeId[i],
          o = this._codec.decodeCell(a);
        if (o.unitId === t.unitId && o.sheetId === t.sheetId && t.range.startRow <= o.row && o.row <= t.range.endRow && n(i) === !1) return !1;
      }
      return !0;
    }
  },
  Un = class {
    constructor(e, t) {
      this._codec = e, this._pointScanCellLimit = t, j(this, `_rowCells`, new Map()), j(this, `_colCells`, new Map());
    }
    add(e) {
      let t = this._codec.decodeCell(e);
      J(this._rowCells, this._codec.encodeRow(t.unitId, t.sheetId, t.row), e), J(this._colCells, this._codec.encodeCol(t.unitId, t.sheetId, t.col), e);
    }
    remove(e) {
      let t = this._codec.decodeCell(e);
      Y(this._rowCells, this._codec.encodeRow(t.unitId, t.sheetId, t.row), e), Y(this._colCells, this._codec.encodeCol(t.unitId, t.sheetId, t.col), e);
    }
    forEachCellInRange(e, t) {
      let n = G(e),
        r = K(n),
        i = q(n);
      if (this._isSmallArea(r, i)) {
        for (let e = n.range.startRow; e <= n.range.endRow; e++) for (let r = n.range.startColumn; r <= n.range.endColumn; r++) t(this._codec.encodeCell(n.unitId, n.sheetId, e, r));
        return;
      }
      Math.min(r, this._rowCells.size) <= Math.min(i, this._colCells.size) ? this._scanRows(n, t) : this._scanCols(n, t);
    }
    _isSmallArea(e, t) {
      return e <= 0 || t <= 0 ? !0 : e > this._pointScanCellLimit ? !1 : e * t <= this._pointScanCellLimit;
    }
    _scanRows(e, t) {
      if (K(e) <= this._rowCells.size) {
        for (let n = e.range.startRow; n <= e.range.endRow; n++) this._scanRowBucket(this._codec.encodeRow(e.unitId, e.sheetId, n), e, t);
        return;
      }
      for (let [n] of this._rowCells) {
        let r = this._codec.decodeRowKey(n);
        r.unitId === e.unitId && r.sheetId === e.sheetId && e.range.startRow <= r.row && r.row <= e.range.endRow && this._scanRowBucket(n, e, t);
      }
    }
    _scanCols(e, t) {
      if (q(e) <= this._colCells.size) {
        for (let n = e.range.startColumn; n <= e.range.endColumn; n++) this._scanColBucket(this._codec.encodeCol(e.unitId, e.sheetId, n), e, t);
        return;
      }
      for (let [n] of this._colCells) {
        let r = this._codec.decodeColKey(n);
        r.unitId === e.unitId && r.sheetId === e.sheetId && e.range.startColumn <= r.col && r.col <= e.range.endColumn && this._scanColBucket(n, e, t);
      }
    }
    _scanRowBucket(e, t, n) {
      let r = this._rowCells.get(e);
      if (r) for (let e = 0; e < r.length; e++) {
        let i = r[e],
          a = this._codec.decodeCell(i);
        a.unitId === t.unitId && a.sheetId === t.sheetId && t.range.startColumn <= a.col && a.col <= t.range.endColumn && n(i);
      }
    }
    _scanColBucket(e, t, n) {
      let r = this._colCells.get(e);
      if (r) for (let e = 0; e < r.length; e++) {
        let i = r[e],
          a = this._codec.decodeCell(i);
        a.unitId === t.unitId && a.sheetId === t.sheetId && t.range.startRow <= a.row && a.row <= t.range.endRow && n(i);
      }
    }
  },
  Wn = class {
    constructor(e, t, n) {
      this._codec = e, this._maxIndexedSpan = n, j(this, `_wholeSheet`, new Map()), j(this, `_wholeCol`, new Map()), j(this, `_wholeRow`, new Map()), j(this, `_rowBuckets`, new Map()), j(this, `_colBuckets`, new Map()), j(this, `_largeRangeIds`, []), j(this, `_sheetArr`, void 0), j(this, `_startRowArr`, void 0), j(this, `_endRowArr`, void 0), j(this, `_startColArr`, void 0), j(this, `_endColArr`, void 0), j(this, `_nodeArr`, void 0), j(this, `_kindArr`, void 0), j(this, `_activeArr`, void 0), j(this, `_rangeSeenEpochArr`, void 0), j(this, `_rangeEpoch`, 1), j(this, `_nextRangeId`, 0), j(this, `_freeRangeIds`, []), j(this, `_nodeToRangeIds`, new Map()), j(this, `_nodeToWholeSheetKeys`, new Map()), j(this, `_nodeToWholeColKeys`, new Map()), j(this, `_nodeToWholeRowKeys`, new Map());
      let r = Math.max(16, t);
      this._sheetArr = new Uint32Array(r), this._startRowArr = new Uint32Array(r), this._endRowArr = new Uint32Array(r), this._startColArr = new Uint32Array(r), this._endColArr = new Uint32Array(r), this._nodeArr = new Uint32Array(r), this._kindArr = new Uint8Array(r), this._activeArr = new Uint8Array(r), this._rangeSeenEpochArr = new Uint32Array(r);
    }
    reserveCapacity(e) {
      this._ensureRangeCapacity(e);
    }
    addRange(e, t) {
      let n = G(t),
        r = this._codec.encodeSheet(n.unitId, n.sheetId),
        i = K(n),
        a = q(n),
        o = a === this._codec.maxCols,
        s = i === this._codec.maxRows;
      if (o && s) {
        In(this._wholeSheet, r, e), J(this._nodeToWholeSheetKeys, e, r);
        return;
      }
      if (s) {
        for (let t = n.range.startColumn; t <= n.range.endColumn; t++) {
          let n = this._codec.encodeColBySheetKey(r, t);
          In(this._wholeCol, n, e), J(this._nodeToWholeColKeys, e, n);
        }
        return;
      }
      if (o) {
        for (let t = n.range.startRow; t <= n.range.endRow; t++) {
          let n = this._codec.encodeRowBySheetKey(r, t);
          In(this._wholeRow, n, e), J(this._nodeToWholeRowKeys, e, n);
        }
        return;
      }
      let c = Math.min(i, a),
        l = this._allocRangeId();
      if (this._setRangeMeta(l, e, n), c > this._maxIndexedSpan) this._kindArr[l] = 3, this._largeRangeIds.push(l);else if (i <= a) {
        this._kindArr[l] = 1;
        for (let e = n.range.startRow; e <= n.range.endRow; e++) J(this._rowBuckets, this._codec.encodeRowBySheetKey(r, e), l);
      } else {
        this._kindArr[l] = 2;
        for (let e = n.range.startColumn; e <= n.range.endColumn; e++) J(this._colBuckets, this._codec.encodeColBySheetKey(r, e), l);
      }
      J(this._nodeToRangeIds, e, l);
    }
    removeNode(e) {
      let t = this._nodeToWholeSheetKeys.get(e);
      if (t) {
        for (let n = 0; n < t.length; n++) Ln(this._wholeSheet, t[n], e);
        this._nodeToWholeSheetKeys.delete(e);
      }
      let n = this._nodeToWholeColKeys.get(e);
      if (n) {
        for (let t = 0; t < n.length; t++) Ln(this._wholeCol, n[t], e);
        this._nodeToWholeColKeys.delete(e);
      }
      let r = this._nodeToWholeRowKeys.get(e);
      if (r) {
        for (let t = 0; t < r.length; t++) Ln(this._wholeRow, r[t], e);
        this._nodeToWholeRowKeys.delete(e);
      }
      let i = this._nodeToRangeIds.get(e);
      if (i) {
        for (let e = 0; e < i.length; e++) this._removeRangeId(i[e]);
        this._nodeToRangeIds.delete(e);
      }
    }
    forEachPoint(e, t, n, r, i) {
      let a = this._codec.encodeSheet(e, t);
      X(this._wholeSheet.get(a), i), X(this._wholeCol.get(this._codec.encodeColBySheetKey(a, r)), i), X(this._wholeRow.get(this._codec.encodeRowBySheetKey(a, n)), i);
      let o = this._rowBuckets.get(this._codec.encodeRowBySheetKey(a, n));
      if (o) for (let e = 0; e < o.length; e++) {
        let t = o[e];
        this._activeArr[t] && this._rangeContainsPoint(t, a, n, r) && i(this._nodeArr[t]);
      }
      let s = this._colBuckets.get(this._codec.encodeColBySheetKey(a, r));
      if (s) for (let e = 0; e < s.length; e++) {
        let t = s[e];
        this._activeArr[t] && this._rangeContainsPoint(t, a, n, r) && i(this._nodeArr[t]);
      }
      for (let e = 0; e < this._largeRangeIds.length; e++) {
        let t = this._largeRangeIds[e];
        this._activeArr[t] && this._rangeContainsPoint(t, a, n, r) && i(this._nodeArr[t]);
      }
    }
    forEachRangeIntersecting(e, t) {
      this.forEachRangesIntersecting([e], t);
    }
    forEachRangesIntersecting(e, t) {
      if (e.length === 0) return;
      let n = Array(e.length);
      for (let t = 0; t < e.length; t++) n[t] = G(e[t]);
      this._nextRangeEpoch();
      for (let e = 0; e < n.length; e++) {
        let r = n[e],
          i = this._codec.encodeSheet(r.unitId, r.sheetId);
        X(this._wholeSheet.get(i), t), this._scanWholeCols(r, i, t), this._scanWholeRows(r, i, t), this._scanRowIndexedRanges(r, i, t), this._scanColIndexedRanges(r, i, t);
        for (let e = 0; e < this._largeRangeIds.length; e++) {
          let n = this._largeRangeIds[e];
          this._activeArr[n] && (this._wasRangeSeen(n) || this._rangeIntersectsInput(n, r, i) && (this._markRangeSeen(n), t(this._nodeArr[n])));
        }
      }
    }
    _allocRangeId() {
      let e = this._freeRangeIds.pop();
      if (e !== void 0) return e;
      let t = this._nextRangeId++;
      return this._ensureRangeCapacity(t + 1), t;
    }
    _ensureRangeCapacity(e) {
      this._sheetArr = Q(this._sheetArr, e), this._startRowArr = Q(this._startRowArr, e), this._endRowArr = Q(this._endRowArr, e), this._startColArr = Q(this._startColArr, e), this._endColArr = Q(this._endColArr, e), this._nodeArr = Q(this._nodeArr, e), this._kindArr = Z(this._kindArr, e), this._activeArr = Z(this._activeArr, e), this._rangeSeenEpochArr = Q(this._rangeSeenEpochArr, e);
    }
    _setRangeMeta(e, t, n) {
      this._sheetArr[e] = this._codec.encodeSheet(n.unitId, n.sheetId), this._startRowArr[e] = n.range.startRow, this._endRowArr[e] = n.range.endRow, this._startColArr[e] = n.range.startColumn, this._endColArr[e] = n.range.endColumn, this._nodeArr[e] = t, this._activeArr[e] = 1;
    }
    _removeRangeId(e) {
      if (!this._activeArr[e]) return;
      let t = this._kindArr[e],
        n = this._sheetArr[e];
      if (t === 1) for (let t = this._startRowArr[e]; t <= this._endRowArr[e]; t++) Y(this._rowBuckets, this._codec.encodeRowBySheetKey(n, t), e);else if (t === 2) for (let t = this._startColArr[e]; t <= this._endColArr[e]; t++) Y(this._colBuckets, this._codec.encodeColBySheetKey(n, t), e);else t === 3 && Nn(this._largeRangeIds, e);
      this._activeArr[e] = 0, this._kindArr[e] = 0, this._freeRangeIds.push(e);
    }
    _nextRangeEpoch() {
      this._rangeEpoch++, this._rangeEpoch >= 4294967295 && (this._rangeSeenEpochArr.fill(0), this._rangeEpoch = 1);
    }
    _wasRangeSeen(e) {
      return this._rangeSeenEpochArr[e] === this._rangeEpoch;
    }
    _markRangeSeen(e) {
      this._rangeSeenEpochArr[e] = this._rangeEpoch;
    }
    _scanWholeCols(e, t, n) {
      if (q(e) <= this._wholeCol.size) {
        for (let r = e.range.startColumn; r <= e.range.endColumn; r++) X(this._wholeCol.get(this._codec.encodeColBySheetKey(t, r)), n);
        return;
      }
      let r = this._codec.encodeColBySheetKey(t, e.range.startColumn),
        i = this._codec.encodeColBySheetKey(t, e.range.endColumn);
      for (let [e, t] of this._wholeCol) r <= e && e <= i && X(t, n);
    }
    _scanWholeRows(e, t, n) {
      if (K(e) <= this._wholeRow.size) {
        for (let r = e.range.startRow; r <= e.range.endRow; r++) X(this._wholeRow.get(this._codec.encodeRowBySheetKey(t, r)), n);
        return;
      }
      let r = this._codec.encodeRowBySheetKey(t, e.range.startRow),
        i = this._codec.encodeRowBySheetKey(t, e.range.endRow);
      for (let [e, t] of this._wholeRow) r <= e && e <= i && X(t, n);
    }
    _scanRowIndexedRanges(e, t, n) {
      if (K(e) <= this._rowBuckets.size) {
        for (let r = e.range.startRow; r <= e.range.endRow; r++) this._scanRangeIdBucket(this._rowBuckets.get(this._codec.encodeRowBySheetKey(t, r)), e, t, n);
        return;
      }
      let r = this._codec.encodeRowBySheetKey(t, e.range.startRow),
        i = this._codec.encodeRowBySheetKey(t, e.range.endRow);
      for (let [a, o] of this._rowBuckets) r <= a && a <= i && this._scanRangeIdBucket(o, e, t, n);
    }
    _scanColIndexedRanges(e, t, n) {
      if (q(e) <= this._colBuckets.size) {
        for (let r = e.range.startColumn; r <= e.range.endColumn; r++) this._scanRangeIdBucket(this._colBuckets.get(this._codec.encodeColBySheetKey(t, r)), e, t, n);
        return;
      }
      let r = this._codec.encodeColBySheetKey(t, e.range.startColumn),
        i = this._codec.encodeColBySheetKey(t, e.range.endColumn);
      for (let [a, o] of this._colBuckets) r <= a && a <= i && this._scanRangeIdBucket(o, e, t, n);
    }
    _scanRangeIdBucket(e, t, n, r) {
      if (e) for (let i = 0; i < e.length; i++) {
        let a = e[i];
        this._activeArr[a] && (this._wasRangeSeen(a) || this._rangeIntersectsInput(a, t, n) && (this._markRangeSeen(a), r(this._nodeArr[a])));
      }
    }
    _rangeContainsPoint(e, t, n, r) {
      return this._sheetArr[e] === t && this._startRowArr[e] <= n && n <= this._endRowArr[e] && this._startColArr[e] <= r && r <= this._endColArr[e];
    }
    _rangeIntersectsInput(e, t, n) {
      return this._sheetArr[e] === n && this._startRowArr[e] <= t.range.endRow && this._endRowArr[e] >= t.range.startRow && this._startColArr[e] <= t.range.endColumn && this._endColArr[e] >= t.range.startColumn;
    }
  },
  Gn = class {
    constructor(e) {
      j(this, `codec`, void 0), j(this, `_maxIndexedSpan`, void 0), j(this, `_pointScanCellLimit`, void 0), j(this, `_initialNodeCapacity`, void 0), j(this, `_initialRangeCapacity`, void 0), j(this, `directDeps`, void 0), j(this, `nodeDeps`, void 0), j(this, `rangeIndex`, void 0), j(this, `cellFormulaToIndex`, void 0), j(this, `otherFormulaToIndex`, void 0), j(this, `featureCalculationToIndex`, void 0), j(this, `indexToNodeId`, void 0), j(this, `dirty`, void 0), j(this, `inQueue`, void 0), j(this, `_indexToNodeType`, void 0), j(this, `_cellPrecedents`, void 0), j(this, `_rangePrecedents`, void 0), j(this, `_nodePrecedents`, void 0), j(this, `_dynamicDeps`, void 0), j(this, `_dynamicSignature`, void 0), j(this, `_runtimeDirectDeps`, void 0), j(this, `_runtimeNodeDeps`, void 0), j(this, `_runtimeRangeIndex`, void 0), j(this, `_runtimeCellPrecedents`, void 0), j(this, `_runtimeRangePrecedents`, void 0), j(this, `_runtimeNodePrecedents`, void 0), j(this, `_activeNode`, void 0), j(this, `_seenNodeEpoch`, void 0), j(this, `_visitNodeEpoch`, void 0), j(this, `_edgeSeenEpoch`, void 0), j(this, `_tarjanSeenEpoch`, void 0), j(this, `_tarjanIndexArr`, void 0), j(this, `_tarjanLowArr`, void 0), j(this, `_tarjanOnStack`, void 0), j(this, `_emitEpoch`, 1), j(this, `_visitEpoch`, 1), j(this, `_edgeEpoch`, 1), j(this, `_tarjanEpoch`, 1), j(this, `_propQueue`, []), j(this, `_dirtyList`, []), j(this, `_activeNodeCount`, 0), j(this, `_dirtyNodeCount`, 0), j(this, `_directPointIndex`, void 0), j(this, `_runtimeDirectPointIndex`, void 0), j(this, `_formulaCellIndex`, void 0), j(this, `_sharedFormulaGroups`, void 0), j(this, `_sharedFormulaGroupIndexById`, void 0), j(this, `_sharedFormulaMembershipByNode`, void 0), j(this, `_sharedFormulaSourceEntries`, void 0), j(this, `_sharedFormulaSourceRangeIndex`, void 0), this._maxIndexedSpan = e.maxIndexedSpan ?? 4096, this._pointScanCellLimit = e.pointScanCellLimit ?? 4096, this._initialNodeCapacity = Math.max(16, e.initialNodeCapacity ?? 1024), this._initialRangeCapacity = Math.max(16, e.initialRangeCapacity ?? 1024), this.codec = new kn(e.maxRows, e.maxCols), this.reset();
    }
    reset() {
      this.codec.reset(), this.directDeps = new Map(), this.nodeDeps = new Map(), this.rangeIndex = new Wn(this.codec, this._initialRangeCapacity, this._maxIndexedSpan), this._runtimeDirectDeps = new Map(), this._runtimeNodeDeps = new Map(), this._runtimeRangeIndex = new Wn(this.codec, this._initialRangeCapacity, this._maxIndexedSpan), this.cellFormulaToIndex = new Map(), this.otherFormulaToIndex = new Map(), this.featureCalculationToIndex = new Map(), this.indexToNodeId = [], this._indexToNodeType = new Uint8Array(this._initialNodeCapacity), this.dirty = new Uint8Array(this._initialNodeCapacity), this.inQueue = new Uint8Array(this._initialNodeCapacity), this._activeNode = new Uint8Array(this._initialNodeCapacity), this._cellPrecedents = [], this._rangePrecedents = [], this._nodePrecedents = [], this._dynamicDeps = [], this._dynamicSignature = [], this._runtimeCellPrecedents = [], this._runtimeRangePrecedents = [], this._runtimeNodePrecedents = [], this._seenNodeEpoch = new Uint32Array(this._initialNodeCapacity), this._visitNodeEpoch = new Uint32Array(this._initialNodeCapacity), this._edgeSeenEpoch = new Uint32Array(this._initialNodeCapacity), this._tarjanSeenEpoch = new Uint32Array(this._initialNodeCapacity), this._tarjanIndexArr = new Uint32Array(this._initialNodeCapacity), this._tarjanLowArr = new Uint32Array(this._initialNodeCapacity), this._tarjanOnStack = new Uint8Array(this._initialNodeCapacity), this._emitEpoch = 1, this._visitEpoch = 1, this._edgeEpoch = 1, this._tarjanEpoch = 1, this._propQueue.length = 0, this._dirtyList.length = 0, this._activeNodeCount = 0, this._dirtyNodeCount = 0, this._directPointIndex = new Un(this.codec, this._pointScanCellLimit), this._runtimeDirectPointIndex = new Un(this.codec, this._pointScanCellLimit), this._formulaCellIndex = new Hn(this.codec, this.indexToNodeId), this._sharedFormulaGroups = [], this._sharedFormulaGroupIndexById = new Map(), this._sharedFormulaMembershipByNode = new Int32Array(this._initialNodeCapacity), this._sharedFormulaMembershipByNode.fill(-1), this._sharedFormulaSourceEntries = [], this._sharedFormulaSourceRangeIndex = new Wn(this.codec, this._initialRangeCapacity, this._maxIndexedSpan);
    }
    encodeCell(e, t, n, r) {
      return this.codec.encodeCell(e, t, n, r);
    }
    reserveDependencyCapacity(e, t = e) {
      this._ensureNodeCapacity(e), this.rangeIndex.reserveCapacity(t), this._runtimeRangeIndex.reserveCapacity(t), this._sharedFormulaSourceRangeIndex.reserveCapacity(t);
    }
    decodeCell(e) {
      return this.codec.decodeCell(e);
    }
    encodeFeatureCalculationId(e, t, n) {
      return `${e} ${t} ${n}`;
    }
    decodeFeatureCalculationId(e) {
      let t = this._tryDecodeFeatureCalculationId(e);
      if (t === void 0) throw Error(`Invalid feature calculation id: ${String(e)}`);
      return t;
    }
    encodeOtherFormulaId(e, t, n, r, i) {
      return `${e} ${t} ${n} ${r} ${i}`;
    }
    decodeOtherFormulaId(e) {
      let t = this._tryDecodeOtherFormulaId(e);
      if (t === void 0) throw Error(`Invalid other formula id: ${String(e)}`);
      return t;
    }
    setCellFormulaDeps(e, t, n) {
      return this._setCalcNodeDepsByType(1, e, t, (n == null ? void 0 : n.checkCycle) ?? !0, (n == null ? void 0 : n.markDirty) ?? !0, (n == null ? void 0 : n.mode) === `merge`);
    }
    setNewCellFormulaDeps(e, t) {
      let n = this.cellFormulaToIndex.get(e);
      if (n !== void 0 && this._activeNode[n] === 1) return this.setCellFormulaDeps(e, t, {
        checkCycle: !1,
        markDirty: !1
      });
      let r = this._getOrCreateNodeIndexByType(1, e),
        i = this._normalizeCalcNodeDeps(t),
        a = this._resolveExplicitNodeDeps(i.nodes);
      return this._formulaCellIndex.addFormulaCell(e, r), this._activeNodeCount++, this._activeNode[r] = 1, this._addNewNodeDepsOnly(r, i.cells, i.ranges, a), i.dynamics.length > 0 && this._setNodeDynamicDeps(r, i.dynamics), {
        nodeIndex: r,
        hasCycle: !1
      };
    }
    setNewCellFormulaNodeOnly(e) {
      let t = this.cellFormulaToIndex.get(e);
      if (t !== void 0 && this._activeNode[t] === 1) return this.setCellFormulaDeps(e, {}, {
        checkCycle: !1,
        markDirty: !1
      });
      let n = this._getOrCreateNodeIndexByType(1, e);
      return this._formulaCellIndex.addFormulaCell(e, n), this._activeNodeCount++, this._activeNode[n] = 1, {
        nodeIndex: n,
        hasCycle: !1
      };
    }
    setNewCellFormulaNodeOnlyRange(e, t, n, r) {
      let i = this.codec.encodeSheet(e, t),
        a = i * this.codec.sheetSize,
        o = [];
      for (let e = n.startRow; e <= n.endRow; e++) {
        let t = a + e * this.codec.maxCols;
        for (let a = n.startColumn; a <= n.endColumn; a++) {
          if (r != null && r.row === e && r.col === a) continue;
          let n = t + a,
            s = this.cellFormulaToIndex.get(n);
          if (s !== void 0 && this._activeNode[s] === 1) {
            o.push(this.setCellFormulaDeps(n, {}, {
              checkCycle: !1,
              markDirty: !1
            }).nodeIndex);
            continue;
          }
          let c = this._getOrCreateNodeIndexByType(1, n);
          this._formulaCellIndex.addFormulaCellByPosition(i, e, a, c), this._activeNodeCount++, this._activeNode[c] = 1, o.push(c);
        }
      }
      return o;
    }
    setOtherFormulaDeps(e, t, n) {
      return this._setCalcNodeDepsByType(2, e, t, (n == null ? void 0 : n.checkCycle) ?? !0, (n == null ? void 0 : n.markDirty) ?? !0, (n == null ? void 0 : n.mode) === `merge`);
    }
    setFeatureCalculationDeps(e, t, n) {
      return this._setCalcNodeDepsByType(3, e, t, (n == null ? void 0 : n.checkCycle) ?? !0, (n == null ? void 0 : n.markDirty) ?? !0, (n == null ? void 0 : n.mode) === `merge`);
    }
    setCalcNodeDeps(e, t, n) {
      return this._setCalcNodeDepsByType(e.type, e.id, t, (n == null ? void 0 : n.checkCycle) ?? !0, (n == null ? void 0 : n.markDirty) ?? !0, (n == null ? void 0 : n.mode) === `merge`);
    }
    registerCompressedSharedFormulaGroup(e) {
      var t;
      this.unregisterCompressedSharedFormulaGroup(e.groupId);
      let n = this._sharedFormulaGroups.length,
        r = G(e.fillRange),
        i = {
          ...r,
          range: {
            ...r.range
          }
        },
        a = {
          groupId: e.groupId,
          fillRange: i,
          patterns: e.patterns.slice(),
          sourceEntryIds: [],
          memberNodeIndices: (t = e.memberNodeIndices) == null ? void 0 : t.slice()
        };
      this._sharedFormulaGroups.push(a), this._sharedFormulaGroupIndexById.set(a.groupId, n), e.memberNodeIndices == null ? this._markCompressedSharedFormulaMembership(n, i) : this._markCompressedSharedFormulaMembershipByNodeIndices(n, e.memberNodeIndices);
      for (let e = 0; e < a.patterns.length; e++) {
        let t = this._getCompressedSharedSourceCoverage(i, a.patterns[e]),
          r = this._sharedFormulaSourceEntries.length;
        this._sharedFormulaSourceEntries.push({
          groupIndex: n,
          patternIndex: e,
          sourceCoverage: t,
          active: !0
        }), a.sourceEntryIds.push(r), this._sharedFormulaSourceRangeIndex.addRange(r, t);
      }
    }
    unregisterCompressedSharedFormulaGroup(e) {
      let t = this._sharedFormulaGroupIndexById.get(e);
      if (t === void 0) return;
      let n = this._sharedFormulaGroups[t];
      this._sharedFormulaGroupIndexById.delete(e);
      for (let e = 0; e < n.sourceEntryIds.length; e++) {
        let t = n.sourceEntryIds[e],
          r = this._sharedFormulaSourceEntries[t];
        r && (r.active = !1), this._sharedFormulaSourceRangeIndex.removeNode(t);
      }
      n.memberNodeIndices == null ? this._clearCompressedSharedFormulaMembership(t, n.fillRange) : this._clearCompressedSharedFormulaMembershipByNodeIndices(t, n.memberNodeIndices);
    }
    clearCompressedSharedFormulaGroups(e, t) {
      let n = [];
      for (let r = 0; r < this._sharedFormulaGroups.length; r++) {
        let i = this._sharedFormulaGroups[r];
        this._sharedFormulaGroupIndexById.has(i.groupId) && (e === void 0 || i.fillRange.unitId === e) && (t === void 0 || i.fillRange.sheetId === t) && n.push(i.groupId);
      }
      for (let e = 0; e < n.length; e++) this.unregisterCompressedSharedFormulaGroup(n[e]);
    }
    _setCalcNodeDepsByType(e, t, n, r, i, a) {
      var o, s, c;
      let l = this._getOrCreateNodeIndexByType(e, t),
        u = this._activeNode[l] === 1,
        d = u && e === 1 && !this._isEmptyCalcNodeDeps(n) && this._sharedFormulaMembershipByNode[l] >= 0,
        f = u && (r || a),
        p = f ? ((o = this._cellPrecedents[l]) == null ? void 0 : o.slice()) ?? [] : [],
        m = f ? ((s = this._rangePrecedents[l]) == null ? void 0 : s.slice()) ?? [] : [],
        h = f ? ((c = this._nodePrecedents[l]) == null ? void 0 : c.slice()) ?? [] : [];
      u && this._removeNodeDepsOnly(l);
      let g = this._normalizeCalcNodeDeps(n),
        _ = g.cells,
        v = g.ranges,
        y = g.nodes,
        b = this._resolveExplicitNodeDeps(y),
        x = this._dynamicDeps[l] ?? [],
        S = a ? this._mergeDynamicDeps(x, g.dynamics) : g.dynamics,
        C = a ? this._mergeSortedUniqueNumbers(p, _) : _,
        w = a ? this._mergeRangeDeps(m, v) : v,
        ee = a ? this._mergeSortedUniqueNumbers(h, b) : b;
      return r && this._wouldCreateCycleForNewDeps(l, C, w, ee) ? (u && this._addNodeDepsOnly(l, p, m, h), {
        nodeIndex: l,
        hasCycle: !0
      }) : (d && this._unregisterCompressedSharedFormulaGroupByNode(l), !u && e === 1 && (An(t), this._formulaCellIndex.addFormulaCell(t, l)), u || this._activeNodeCount++, this._activeNode[l] = 1, this._addNodeDepsOnly(l, C, w, ee), this._setNodeDynamicDeps(l, S), i && (this._markNodeIndexDirty(l, !0), this._propagateDirtyQueue()), {
        nodeIndex: l,
        hasCycle: !1
      });
    }
    setManyCalcNodeDeps(e, t) {
      let n = (t == null ? void 0 : t.markDirty) ?? !0,
        r = (t == null ? void 0 : t.checkCycle) ?? !0,
        i = (t == null ? void 0 : t.mode) === `merge`,
        a = Array(e.length),
        o = [];
      for (let t = 0; t < e.length; t++) {
        let n = e[t],
          s = this._setCalcNodeDepsByType(n.node.type, n.node.id, n.deps, r, !1, i);
        a[t] = s, s.hasCycle || o.push(s.nodeIndex);
      }
      return n && o.length > 0 && this._markCalcNodeIndicesChanged(o), a;
    }
    setManyCellFormulaDeps(e, t) {
      let n = (t == null ? void 0 : t.markDirty) ?? !0,
        r = (t == null ? void 0 : t.checkCycle) ?? !0,
        i = (t == null ? void 0 : t.mode) === `merge`,
        a = Array(e.length),
        o = [];
      for (let t = 0; t < e.length; t++) {
        let n = e[t],
          s = this._setCalcNodeDepsByType(1, n.cell, n.deps, r, !1, i);
        a[t] = s, s.hasCycle || o.push(s.nodeIndex);
      }
      return n && o.length > 0 && this._markCalcNodeIndicesChanged(o), a;
    }
    setManyOtherFormulaDeps(e, t) {
      let n = (t == null ? void 0 : t.markDirty) ?? !0,
        r = (t == null ? void 0 : t.checkCycle) ?? !0,
        i = (t == null ? void 0 : t.mode) === `merge`,
        a = Array(e.length),
        o = [];
      for (let t = 0; t < e.length; t++) {
        let n = e[t],
          s = this._setCalcNodeDepsByType(2, n.id, n.deps, r, !1, i);
        a[t] = s, s.hasCycle || o.push(s.nodeIndex);
      }
      return n && o.length > 0 && this._markCalcNodeIndicesChanged(o), a;
    }
    setManyFeatureCalculationDeps(e, t) {
      let n = (t == null ? void 0 : t.markDirty) ?? !0,
        r = (t == null ? void 0 : t.checkCycle) ?? !0,
        i = (t == null ? void 0 : t.mode) === `merge`,
        a = Array(e.length),
        o = [];
      for (let t = 0; t < e.length; t++) {
        let n = e[t],
          s = this._setCalcNodeDepsByType(3, n.id, n.deps, r, !1, i);
        a[t] = s, s.hasCycle || o.push(s.nodeIndex);
      }
      return n && o.length > 0 && this._markCalcNodeIndicesChanged(o), a;
    }
    removeCellFormula(e, t) {
      this._removeCalcNodeByType(1, e, t);
    }
    removeOtherFormula(e, t) {
      this._removeCalcNodeByType(2, e, t);
    }
    removeFeatureCalculation(e, t) {
      this._removeCalcNodeByType(3, e, t);
    }
    removeCellFormulas(e, t) {
      this._removeCalcNodeIds(1, e, t);
    }
    removeOtherFormulas(e, t) {
      this._removeCalcNodeIds(2, e, t);
    }
    removeFeatureCalculations(e, t) {
      this._removeCalcNodeIds(3, e, t);
    }
    removeCalcNodes(e, t) {
      if (e.length === 0) return;
      let n = [];
      for (let t = 0; t < e.length; t++) {
        let r = e[t],
          i = this._getNodeIndexByType(r.type, r.id);
        i !== void 0 && this._activeNode[i] && n.push(i);
      }
      this._removeCalcNodeIndices(n, t);
    }
    clearCellFormulas(e, t, n) {
      let r = [];
      for (let [n, i] of this.cellFormulaToIndex) {
        if (!this._activeNode[i]) continue;
        let a = this.codec.decodeCell(n);
        a.unitId === e && (t === void 0 || a.sheetId === t) && r.push(i);
      }
      this._removeCalcNodeIndices(r, n);
    }
    clearOtherFormulas(e, t, n, r, i, a) {
      if (n !== void 0 && n.length === 0) return;
      let o = [];
      for (let [a, s] of this.otherFormulaToIndex) {
        if (!this._activeNode[s]) continue;
        let c = this._tryDecodeOtherFormulaId(a);
        c !== void 0 && c.unitId === e && (t === void 0 || c.sheetId === t) && (n !== void 0 && !this._includesFormulaId(n, c.formulaId) || (r === void 0 || c.refOffsetX === r) && (r === void 0 || i === void 0 || c.refOffsetY === i) && o.push(s));
      }
      this._removeCalcNodeIndices(o, a);
    }
    _includesFormulaId(e, t) {
      for (let n = 0; n < e.length; n++) if (e[n] === t) return !0;
      return !1;
    }
    clearFeatureCalculations(e, t, n) {
      let r = [];
      for (let [n, i] of this.featureCalculationToIndex) {
        if (!this._activeNode[i]) continue;
        let a = this._tryDecodeFeatureCalculationId(n);
        a !== void 0 && a.unitId === e && (t === void 0 || a.sheetId === t) && r.push(i);
      }
      this._removeCalcNodeIndices(r, n);
    }
    _tryDecodeFeatureCalculationId(e) {
      if (typeof e != `string`) return;
      let t = e.indexOf(`\0`);
      if (t <= 0) return;
      let n = e.indexOf(`\0`, t + 1);
      if (!(n <= t + 1) && n !== e.length - 1 && e.indexOf(`\0`, n + 1) === -1) return {
        unitId: e.slice(0, t),
        sheetId: e.slice(t + 1, n),
        formulaId: e.slice(n + 1)
      };
    }
    _tryDecodeOtherFormulaId(e) {
      if (typeof e != `string`) return;
      let t = e.indexOf(`\0`);
      if (t <= 0) return;
      let n = e.indexOf(`\0`, t + 1);
      if (n <= t + 1) return;
      let r = e.indexOf(`\0`, n + 1);
      if (r <= n + 1) return;
      let i = e.indexOf(`\0`, r + 1);
      if (i <= r + 1 || i === e.length - 1 || e.indexOf(`\0`, i + 1) !== -1) return;
      let a = Number(e.slice(r + 1, i)),
        o = Number(e.slice(i + 1));
      if (!(!Number.isFinite(a) || !Number.isFinite(o))) return {
        unitId: e.slice(0, t),
        sheetId: e.slice(t + 1, n),
        formulaId: e.slice(n + 1, r),
        refOffsetX: a,
        refOffsetY: o
      };
    }
    _removeCalcNodeIds(e, t, n) {
      if (t.length === 0) return;
      let r = [];
      for (let n = 0; n < t.length; n++) {
        let i = this._getNodeIndexByType(e, t[n]);
        i !== void 0 && this._activeNode[i] && r.push(i);
      }
      this._removeCalcNodeIndices(r, n);
    }
    _removeCalcNodeIndices(e, t) {
      if (e.length !== 0) {
        if (t != null && t.markDependentsDirty && this._markCalcNodeIndicesChanged(e), t != null && t.detachDependents) for (let t = 0; t < e.length; t++) this._detachDependentsFromNode(e[t]);
        for (let t = 0; t < e.length; t++) this._removeCalcNodeByIndex(e[t]);
      }
    }
    removeCalcNode(e, t) {
      this._removeCalcNodeByType(e.type, e.id, t);
    }
    _removeCalcNodeByType(e, t, n) {
      let r = this._getNodeIndexByType(e, t);
      r !== void 0 && this._activeNode[r] && (n != null && n.markDependentsDirty && (this._markNodeIndexDirty(r, !0), this._propagateDirtyQueue()), n != null && n.detachDependents && this._detachDependentsFromNode(r), this._removeCalcNodeByIndex(r));
    }
    _removeCalcNodeByIndex(e) {
      if (this._activeNode[e]) {
        if (this._unregisterCompressedSharedFormulaGroupByNode(e), this._removeNodeDepsOnly(e), this._removeRuntimeDepsOnly(e), this._dynamicDeps[e] = void 0, this._dynamicSignature[e] = void 0, this._indexToNodeType[e] === 1) {
          let t = this.indexToNodeId[e];
          this._formulaCellIndex.removeFormulaCell(t, e);
        }
        this._activeNode[e] = 0, this._activeNodeCount--, this.dirty[e] && (this.dirty[e] = 0, this._dirtyNodeCount--, this._compactDirtyList()), this.inQueue[e] = 0;
      }
    }
    markCellChanged(e) {
      this.markCellsChanged([e]);
    }
    markCellsChanged(e) {
      this._nextEmitEpoch();
      for (let t of e) this._forEachDependentIndexByCellRaw(t, e => {
        this._emitNodeOnceAndMarkDirty(e);
      });
      this._propagateDirtyQueue();
    }
    markRangeChanged(e, t) {
      this.markRangesChanged([e], t);
    }
    markRangesChanged(e, t) {
      if (e.length === 0) return;
      let n = (t == null ? void 0 : t.coalesce) === !1 ? this._normalizeRangeDeps(e) : zn(e);
      this._nextEmitEpoch();
      for (let e = 0; e < n.length; e++) {
        let r = n[e];
        t != null && t.includeFormulaCells && this._formulaCellIndex.forEachFormulaInRange(r, e => {
          this._emitNodeOnceAndMarkDirty(e, !0);
        }), this._directPointIndex.forEachCellInRange(r, e => {
          X(this.directDeps.get(e), e => {
            this._emitNodeOnceAndMarkDirty(e);
          });
        }), this._runtimeDirectPointIndex.forEachCellInRange(r, e => {
          X(this._runtimeDirectDeps.get(e), e => {
            this._emitNodeOnceAndMarkDirty(e);
          });
        });
      }
      this._isEveryActiveNodeDirty() || this.rangeIndex.forEachRangesIntersecting(n, e => {
        this._emitNodeOnceAndMarkDirty(e);
      }), this._isEveryActiveNodeDirty() || this._runtimeRangeIndex.forEachRangesIntersecting(n, e => {
        this._emitNodeOnceAndMarkDirty(e);
      });
      for (let e = 0; e < n.length && !this._isEveryActiveNodeDirty(); e++) this._forEachCompressedSharedDependentByRange(n[e], e => {
        this._emitNodeOnceAndMarkDirty(e);
      });
      this._propagateDirtyQueue();
    }
    markCellFormulaChanged(e) {
      this._markCalcNodeChangedByType(1, e);
    }
    markOtherFormulaChanged(e) {
      this._markCalcNodeChangedByType(2, e);
    }
    markOtherFormulasChanged(e, t, n) {
      if (n === void 0 || n.length !== 0) {
        this._nextEmitEpoch();
        for (let [r, i] of this.otherFormulaToIndex) {
          if (!this._activeNode[i]) continue;
          let a = this._tryDecodeOtherFormulaId(r);
          a !== void 0 && a.unitId === e && (t === void 0 || a.sheetId === t) && (n !== void 0 && !this._includesFormulaId(n, a.formulaId) || this._emitNodeOnceAndMarkDirty(i, !0));
        }
        this._propagateDirtyQueue();
      }
    }
    markFeatureCalculationChanged(e) {
      this._markCalcNodeChangedByType(3, e);
    }
    markCalcNodeChanged(e) {
      this._markCalcNodeChangedByType(e.type, e.id);
    }
    _markCalcNodeChangedByType(e, t) {
      let n = this._getNodeIndexByType(e, t);
      n !== void 0 && this._activeNode[n] && (this._markNodeIndexDirty(n, !0), this._propagateDirtyQueue());
    }
    markCalcNodesChanged(e) {
      if (e.length !== 0) {
        this._nextEmitEpoch();
        for (let t = 0; t < e.length; t++) {
          let n = e[t],
            r = this._getNodeIndexByType(n.type, n.id);
          r !== void 0 && this._activeNode[r] && this._emitNodeOnceAndMarkDirty(r, !0);
        }
        this._propagateDirtyQueue();
      }
    }
    markAllDirty() {
      this._nextEmitEpoch();
      for (let e = 0; e < this.indexToNodeId.length; e++) this._activeNode[e] && this._emitNodeOnceAndMarkDirty(e, !0);
      this._propagateDirtyQueue();
    }
    hasDynamicDeps(e) {
      let t = this.getNodeIndex(e);
      if (t === void 0) return !1;
      let n = this._dynamicDeps[t];
      return n !== void 0 && n.length > 0;
    }
    refreshDynamicDeps(e, t) {
      let n = this.getNodeIndex(e);
      if (n === void 0 || !this._activeNode[n]) return !1;
      let r = this._dynamicDeps[n];
      if (!r || r.length === 0) return !1;
      let i = {
          cells: [],
          ranges: [],
          nodes: []
        },
        a = [];
      for (let n = 0; n < r.length; n++) {
        let o = r[n],
          s = t(e, o),
          c = s.status ?? `resolved`;
        a.push(`${String(o.id)}:${c}:${s.signature}`), this._collectDynamicResolveResult(i, s);
      }
      i.cells = Mn(i.cells), i.ranges = this._normalizeRangeDeps(i.ranges), i.nodes = this._mergeSortedUniqueNumbers([], i.nodes);
      let o = a.join(`|`),
        s = this._dynamicSignature[n];
      return this._removeRuntimeDepsOnly(n), this._addRuntimeDepsOnly(n, i.cells, i.ranges, i.nodes), this._dynamicSignature[n] = o, o === s ? !1 : (this._markNodeIndexDirty(n, !0), this._propagateDirtyQueue(), !0);
    }
    prepareDynamicDependencies(e) {
      let t = this._getDirtyNodeIndicesSnapshot(),
        n = !1;
      for (let r = 0; r < t.length; r++) {
        let i = t[r],
          a = this._dynamicDeps[i];
        !a || a.length === 0 || this.refreshDynamicDeps(this.getNodeRefByIndex(i), e) && (n = !0);
      }
      return n;
    }
    getCalculationOrder(e) {
      let t = this._getDirtyNodeIndicesSnapshot();
      if (t.length === 0) return {
        hasCycle: !1,
        calculationForest: []
      };
      let n = this._buildDirtyCalculationGraph(t);
      return {
        hasCycle: n.hasCycle,
        calculationForest: n.calculationForest
      };
    }
    clearCalculatedDirty(e) {
      let t = !1;
      for (let n = 0; n < e.length; n++) {
        let r = e[n];
        this.dirty[r] && (this.dirty[r] = 0, this._dirtyNodeCount--, t = !0);
      }
      t && this._compactDirtyList();
    }
    _compactDirtyList() {
      let e = 0;
      for (let t = 0; t < this._dirtyList.length; t++) {
        let n = this._dirtyList[t];
        this.dirty[n] && this._activeNode[n] && (this._dirtyList[e++] = n);
      }
      this._dirtyList.length = e;
    }
    clearAllDirty() {
      for (let e = 0; e < this._dirtyList.length; e++) this.dirty[this._dirtyList[e]] = 0;
      this._dirtyList.length = 0, this._dirtyNodeCount = 0;
    }
    getDirtyNodeIndices() {
      return this._getDirtyNodeIndicesSnapshot();
    }
    getDirtyNodes() {
      let e = this._getDirtyNodeIndicesSnapshot(),
        t = Array(e.length);
      for (let n = 0; n < e.length; n++) t[n] = this.getNodeRefByIndex(e[n]);
      return t;
    }
    forEachDependentByCell(e, t) {
      this._nextEmitEpoch(), this._forEachDependentIndexByCellRaw(e, e => {
        this._emitNodeOnce(e) && t(this.getNodeRefByIndex(e), e);
      });
    }
    forEachDependentByRange(e, t) {
      this._nextEmitEpoch(), this._directPointIndex.forEachCellInRange(e, e => {
        X(this.directDeps.get(e), e => {
          this._emitNodeOnce(e) && t(this.getNodeRefByIndex(e), e);
        });
      }), this._runtimeDirectPointIndex.forEachCellInRange(e, e => {
        X(this._runtimeDirectDeps.get(e), e => {
          this._emitNodeOnce(e) && t(this.getNodeRefByIndex(e), e);
        });
      }), this.rangeIndex.forEachRangeIntersecting(e, e => {
        this._emitNodeOnce(e) && t(this.getNodeRefByIndex(e), e);
      }), this._runtimeRangeIndex.forEachRangeIntersecting(e, e => {
        this._emitNodeOnce(e) && t(this.getNodeRefByIndex(e), e);
      }), this._forEachCompressedSharedDependentByRange(e, e => {
        this._emitNodeOnce(e) && t(this.getNodeRefByIndex(e), e);
      });
    }
    forEachDependentByNode(e, t) {
      let n = this.getNodeIndex(e);
      n !== void 0 && (this._nextEmitEpoch(), this._forEachDependentOfNodeRaw(n, e => {
        this._emitNodeOnce(e) && t(this.getNodeRefByIndex(e), e);
      }));
    }
    forEachDependentByIndex(e, t) {
      this._activeNode[e] && (this._nextEmitEpoch(), this._forEachDependentOfNodeRaw(e, e => {
        this._activeNode[e] && this._emitNodeOnce(e) && t(this.getNodeRefByIndex(e), e);
      }));
    }
    forEachPrecedentNode(e, t) {
      let n = this.getNodeIndex(e);
      n !== void 0 && this._activeNode[n] && (this._nextEmitEpoch(), this._forEachPrecedentNodeIndex(n, e => {
        this._emitNodeOnce(e) && t(this.getNodeRefByIndex(e), e);
      }));
    }
    forEachPrecedentNodeByIndex(e, t) {
      this._activeNode[e] && (this._nextEmitEpoch(), this._forEachPrecedentNodeIndex(e, e => {
        this._emitNodeOnce(e) && t(this.getNodeRefByIndex(e), e);
      }));
    }
    hasUncalculatedDirtyPrecedentByIndex(e, t) {
      if (!this._activeNode[e]) return !1;
      let n = !1;
      return this._nextEmitEpoch(), this._forEachPrecedentNodeIndex(e, e => {
        if (!n && this.dirty[e] && !t.has(e)) return n = !0, !1;
      }), n;
    }
    wouldCreateCycle(e, t) {
      let n = this._getOrCreateNodeIndex(e),
        r = this._normalizeCalcNodeDeps(t),
        i = r.cells,
        a = r.ranges,
        o = r.nodes,
        s = this._resolveExplicitNodeDeps(o);
      return this._wouldCreateCycleForNewDeps(n, i, a, s);
    }
    _normalizeCalcNodeDeps(e) {
      let t = [],
        n = [],
        r = [];
      return this._collectStaticDeps(e, t, n, r), {
        cells: Mn(t),
        ranges: this._normalizeRangeDeps(n),
        nodes: Rn(r),
        dynamics: e.dynamics ? e.dynamics.slice() : []
      };
    }
    _collectStaticDeps(e, t, n, r) {
      if (e && (e.cells && t.push(...e.cells), e.ranges && n.push(...e.ranges), e.nodes && r.push(...e.nodes), e.dynamics)) for (let i = 0; i < e.dynamics.length; i++) this._collectStaticDeps(e.dynamics[i].paramDeps, t, n, r);
    }
    _mergeDynamicDeps(e, t) {
      if (e.length === 0) return t;
      if (t.length === 0) return e;
      let n = e.slice();
      for (let e = 0; e < t.length; e++) {
        let r = t[e],
          i = !1;
        for (let e = 0; e < n.length; e++) if (n[e].id === r.id) {
          i = !0;
          break;
        }
        i || n.push(r);
      }
      return n;
    }
    _setNodeDynamicDeps(e, t) {
      let n = this._dynamicDeps[e];
      (n !== void 0 || t.length !== 0) && (this._isSameDynamicDeps(n, t) || (this._removeRuntimeDepsOnly(e), this._dynamicSignature[e] = void 0, this._dynamicDeps[e] = t.length > 0 ? t : void 0));
    }
    _isSameDynamicDeps(e, t) {
      if (((e == null ? void 0 : e.length) ?? 0) !== t.length) return !1;
      if (!e) return t.length === 0;
      for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
      return !0;
    }
    _normalizeRangeDeps(e) {
      if (!e || e.length === 0) return [];
      let t = Array(e.length);
      for (let n = 0; n < e.length; n++) t[n] = G(e[n]);
      return t;
    }
    _mergeSortedUniqueNumbers(e, t) {
      if (e.length === 0) return t;
      if (t.length === 0) return e;
      let n = [],
        r = 0,
        i = 0;
      for (; r < e.length && i < t.length;) {
        let a = e[r],
          o = t[i];
        a === o ? (n.push(a), r++, i++) : a < o ? (n.push(a), r++) : (n.push(o), i++);
      }
      for (; r < e.length;) n.push(e[r++]);
      for (; i < t.length;) n.push(t[i++]);
      return n;
    }
    _mergeRangeDeps(e, t) {
      if (e.length === 0) return t;
      if (t.length === 0) return e;
      let n = e.slice();
      for (let e = 0; e < t.length; e++) {
        let r = t[e];
        this._containsRange(n, r) || n.push(r);
      }
      return n;
    }
    _containsRange(e, t) {
      for (let n = 0; n < e.length; n++) if (this._isSameRange(e[n], t)) return !0;
      return !1;
    }
    _isSameRange(e, t) {
      return e.unitId === t.unitId && e.sheetId === t.sheetId && e.range.startRow === t.range.startRow && e.range.endRow === t.range.endRow && e.range.startColumn === t.range.startColumn && e.range.endColumn === t.range.endColumn;
    }
    canReachNode(e, t) {
      let n = this.getNodeIndex(e),
        r = this.getNodeIndex(t);
      return n === void 0 || r === void 0 ? !1 : this._canReachNodeIndex(n, r);
    }
    hasCellFormula(e) {
      let t = this.cellFormulaToIndex.get(e);
      return t !== void 0 && this._activeNode[t] === 1;
    }
    hasOtherFormula(e) {
      let t = this.otherFormulaToIndex.get(e);
      return t !== void 0 && this._activeNode[t] === 1;
    }
    hasFeatureCalculation(e) {
      let t = this.featureCalculationToIndex.get(e);
      return t !== void 0 && this._activeNode[t] === 1;
    }
    getNodeIndex(e) {
      return this._getNodeIndexByType(e.type, e.id);
    }
    _getNodeIndexByType(e, t) {
      switch (e) {
        case 1:
          return An(t), this.cellFormulaToIndex.get(t);
        case 2:
          return this.otherFormulaToIndex.get(t);
        case 3:
          return this.featureCalculationToIndex.get(t);
        default:
          return;
      }
    }
    getNodeRefByIndex(e) {
      return {
        type: this._indexToNodeType[e],
        id: this.indexToNodeId[e]
      };
    }
    markCalcNodeIndicesChanged(e, t) {
      this._markCalcNodeIndicesChanged(e, t);
    }
    _markCalcNodeIndicesChanged(e, t) {
      if (e.length === 0) return;
      this._nextEmitEpoch();
      let n = (t == null ? void 0 : t.onlySelf) !== !0;
      for (let t = 0; t < e.length; t++) {
        let r = e[t];
        this._activeNode[r] && this._emitNodeOnceAndMarkDirty(r, n, n);
      }
      n && this._propagateDirtyQueue();
    }
    _getOrCreateNodeIndex(e) {
      return this._getOrCreateNodeIndexByType(e.type, e.id);
    }
    _getOrCreateNodeIndexByType(e, t) {
      let n = this._getNodeIndexByType(e, t);
      if (n !== void 0) return n;
      let r = this.indexToNodeId.length;
      switch (this.indexToNodeId.push(t), this._ensureNodeCapacity(r + 1), this._indexToNodeType[r] = e, e) {
        case 1:
          An(t), this.cellFormulaToIndex.set(t, r);
          break;
        case 2:
          this.otherFormulaToIndex.set(t, r);
          break;
        case 3:
          this.featureCalculationToIndex.set(t, r);
          break;
        default:
          throw Error(`Unknown CalcNodeType: ${e}`);
      }
      return r;
    }
    _ensureNodeCapacity(e) {
      let t = this._sharedFormulaMembershipByNode.length;
      this._indexToNodeType = Z(this._indexToNodeType, e), this.dirty = Z(this.dirty, e), this.inQueue = Z(this.inQueue, e), this._activeNode = Z(this._activeNode, e), this._seenNodeEpoch = Q(this._seenNodeEpoch, e), this._visitNodeEpoch = Q(this._visitNodeEpoch, e), this._edgeSeenEpoch = Q(this._edgeSeenEpoch, e), this._tarjanSeenEpoch = Q(this._tarjanSeenEpoch, e), this._tarjanIndexArr = Q(this._tarjanIndexArr, e), this._tarjanLowArr = Q(this._tarjanLowArr, e), this._tarjanOnStack = Z(this._tarjanOnStack, e), this._sharedFormulaMembershipByNode = this._growIntThirtyTwoArray(this._sharedFormulaMembershipByNode, e, -1), this._sharedFormulaMembershipByNode.length > t && this._sharedFormulaMembershipByNode.fill(-1, t);
    }
    _growIntThirtyTwoArray(e, t, n) {
      if (e.length >= t) return e;
      let r = Math.max(16, e.length);
      for (; r < t;) r *= 2;
      let i = new Int32Array(r);
      return i.fill(n), i.set(e), i;
    }
    _resolveExplicitNodeDeps(e) {
      if (e.length === 0) return [];
      let t = [];
      for (let n = 0; n < e.length; n++) {
        let r = e[n];
        if (r.type === 2) throw Error(`OtherFormula cannot be used as a dependency`);
        let i = this._getOrCreateNodeIndex(r);
        t.push(i);
      }
      if (t.length <= 1) return t;
      t.sort((e, t) => e - t);
      let n = 1;
      for (let e = 1; e < t.length; e++) t[e] !== t[n - 1] && (t[n++] = t[e]);
      return t.length = n, t;
    }
    _isEmptyCalcNodeDeps(e) {
      return (e.cells == null || e.cells.length === 0) && (e.ranges == null || e.ranges.length === 0) && (e.nodes == null || e.nodes.length === 0) && (e.dynamics == null || e.dynamics.length === 0);
    }
    _unregisterCompressedSharedFormulaGroupByNode(e) {
      let t = this._sharedFormulaMembershipByNode[e];
      if (t < 0) return;
      let n = this._sharedFormulaGroups[t];
      if (n == null || !this._sharedFormulaGroupIndexById.has(n.groupId)) {
        this._sharedFormulaMembershipByNode[e] = -1;
        return;
      }
      this.unregisterCompressedSharedFormulaGroup(n.groupId);
    }
    _markCompressedSharedFormulaMembership(e, t) {
      for (let n = t.range.startRow; n <= t.range.endRow; n++) for (let r = t.range.startColumn; r <= t.range.endColumn; r++) {
        let i = this.codec.encodeCell(t.unitId, t.sheetId, n, r),
          a = this.cellFormulaToIndex.get(i);
        a !== void 0 && this._activeNode[a] && (this._sharedFormulaMembershipByNode[a] = e);
      }
    }
    _markCompressedSharedFormulaMembershipByNodeIndices(e, t) {
      for (let n = 0; n < t.length; n++) {
        let r = t[n];
        this._activeNode[r] && (this._sharedFormulaMembershipByNode[r] = e);
      }
    }
    _clearCompressedSharedFormulaMembership(e, t) {
      for (let n = t.range.startRow; n <= t.range.endRow; n++) for (let r = t.range.startColumn; r <= t.range.endColumn; r++) {
        let i = this.codec.encodeCell(t.unitId, t.sheetId, n, r),
          a = this.cellFormulaToIndex.get(i);
        a !== void 0 && this._sharedFormulaMembershipByNode[a] === e && (this._sharedFormulaMembershipByNode[a] = -1);
      }
    }
    _clearCompressedSharedFormulaMembershipByNodeIndices(e, t) {
      for (let n = 0; n < t.length; n++) {
        let r = t[n];
        this._sharedFormulaMembershipByNode[r] === e && (this._sharedFormulaMembershipByNode[r] = -1);
      }
    }
    _getCompressedSharedSourceCoverage(e, t) {
      if (t.kind === `cell`) return G({
        unitId: t.unitId,
        sheetId: t.sheetId,
        range: {
          startRow: e.range.startRow + t.rowDelta,
          endRow: e.range.endRow + t.rowDelta,
          startColumn: e.range.startColumn + t.colDelta,
          endColumn: e.range.endColumn + t.colDelta
        }
      });
      let n = Math.min(t.startRowDelta, t.endRowDelta),
        r = Math.max(t.startRowDelta, t.endRowDelta),
        i = Math.min(t.startColDelta, t.endColDelta),
        a = Math.max(t.startColDelta, t.endColDelta);
      return G({
        unitId: t.unitId,
        sheetId: t.sheetId,
        range: {
          startRow: e.range.startRow + n,
          endRow: e.range.endRow + r,
          startColumn: e.range.startColumn + i,
          endColumn: e.range.endColumn + a
        }
      });
    }
    _forEachCompressedSharedDependentByRange(e, t) {
      let n = G(e);
      this._sharedFormulaSourceRangeIndex.forEachRangeIntersecting(n, e => {
        let r = this._sharedFormulaSourceEntries[e];
        if (!(r != null && r.active)) return;
        let i = this._sharedFormulaGroups[r.groupIndex],
          a = this._reverseMapCompressedSharedPattern(n, i.fillRange, i.patterns[r.patternIndex]);
        a != null && this._forEachActiveCellFormulaInRange(a, t);
      });
    }
    _forEachActiveCellFormulaInRange(e, t) {
      for (let n = e.range.startRow; n <= e.range.endRow; n++) for (let r = e.range.startColumn; r <= e.range.endColumn; r++) {
        let i = this.codec.encodeCell(e.unitId, e.sheetId, n, r),
          a = this.cellFormulaToIndex.get(i);
        a !== void 0 && this._activeNode[a] && t(a);
      }
    }
    _reverseMapCompressedSharedPattern(e, t, n) {
      let r = n.kind === `cell` ? [e.range.startRow - n.rowDelta, e.range.endRow - n.rowDelta] : [e.range.startRow - Math.max(n.startRowDelta, n.endRowDelta), e.range.endRow - Math.min(n.startRowDelta, n.endRowDelta)],
        i = n.kind === `cell` ? [e.range.startColumn - n.colDelta, e.range.endColumn - n.colDelta] : [e.range.startColumn - Math.max(n.startColDelta, n.endColDelta), e.range.endColumn - Math.min(n.startColDelta, n.endColDelta)];
      return this._intersectRanges(t, {
        unitId: t.unitId,
        sheetId: t.sheetId,
        range: {
          startRow: r[0],
          endRow: r[1],
          startColumn: i[0],
          endColumn: i[1]
        }
      });
    }
    _intersectRanges(e, t) {
      if (e.unitId !== t.unitId || e.sheetId !== t.sheetId) return;
      let n = Math.max(e.range.startRow, t.range.startRow),
        r = Math.min(e.range.endRow, t.range.endRow),
        i = Math.max(e.range.startColumn, t.range.startColumn),
        a = Math.min(e.range.endColumn, t.range.endColumn);
      if (!(n > r || i > a)) return {
        unitId: e.unitId,
        sheetId: e.sheetId,
        range: {
          startRow: n,
          endRow: r,
          startColumn: i,
          endColumn: a
        }
      };
    }
    _forEachCompressedSharedPrecedent(e, t) {
      let n = this._sharedFormulaMembershipByNode[e];
      if (n < 0) return !0;
      let r = this._sharedFormulaGroups[n];
      for (let e = 0; e < r.patterns.length; e++) if (t(r.patterns[e]) === !1) return !1;
      return !0;
    }
    _getCompressedSharedPrecedentCell(e, t) {
      let n = this.indexToNodeId[e],
        r = this.codec.decodeCell(n);
      return this.codec.encodeCell(t.unitId, t.sheetId, r.row + t.rowDelta, r.col + t.colDelta);
    }
    _getCompressedSharedPrecedentRange(e, t) {
      let n = this.indexToNodeId[e],
        r = this.codec.decodeCell(n);
      return G({
        unitId: t.unitId,
        sheetId: t.sheetId,
        range: {
          startRow: r.row + t.startRowDelta,
          startColumn: r.col + t.startColDelta,
          endRow: r.row + t.endRowDelta,
          endColumn: r.col + t.endColDelta
        }
      });
    }
    _addNodeDepsOnly(e, t, n, r) {
      for (let n = 0; n < t.length; n++) this._addDirectEdge(t[n], e);
      this._cellPrecedents[e] = t.length > 0 ? t : void 0, this._rangePrecedents[e] = n.length > 0 ? n : void 0;
      for (let t = 0; t < n.length; t++) this.rangeIndex.addRange(e, n[t]);
      this._nodePrecedents[e] = r.length > 0 ? r : void 0;
      for (let t = 0; t < r.length; t++) this._addExplicitNodeEdge(r[t], e);
    }
    _addNewNodeDepsOnly(e, t, n, r) {
      for (let n = 0; n < t.length; n++) this._addDirectEdgeForNewNode(t[n], e);
      this._cellPrecedents[e] = t.length > 0 ? t : void 0, this._rangePrecedents[e] = n.length > 0 ? n : void 0;
      for (let t = 0; t < n.length; t++) this.rangeIndex.addRange(e, n[t]);
      this._nodePrecedents[e] = r.length > 0 ? r : void 0;
      for (let t = 0; t < r.length; t++) this._addExplicitNodeEdge(r[t], e);
    }
    _removeNodeDepsOnly(e) {
      let t = this._cellPrecedents[e];
      if (t) {
        for (let n = 0; n < t.length; n++) this._removeDirectEdge(t[n], e);
        this._cellPrecedents[e] = void 0;
      }
      this.rangeIndex.removeNode(e), this._rangePrecedents[e] = void 0;
      let n = this._nodePrecedents[e];
      if (n) {
        for (let t = 0; t < n.length; t++) this._removeExplicitNodeEdge(n[t], e);
        this._nodePrecedents[e] = void 0;
      }
    }
    _collectDynamicResolveResult(e, t) {
      t.traceCells && e.cells.push(...t.traceCells), t.cells && e.cells.push(...t.cells), t.ranges && e.ranges.push(...t.ranges), t.nodes && e.nodes.push(...this._resolveExplicitNodeDeps(Rn(t.nodes)));
    }
    _addRuntimeDepsOnly(e, t, n, r) {
      for (let n = 0; n < t.length; n++) this._addRuntimeDirectEdge(t[n], e);
      this._runtimeCellPrecedents[e] = t.length > 0 ? t : void 0, this._runtimeRangePrecedents[e] = n.length > 0 ? n : void 0;
      for (let t = 0; t < n.length; t++) this._runtimeRangeIndex.addRange(e, n[t]);
      this._runtimeNodePrecedents[e] = r.length > 0 ? r : void 0;
      for (let t = 0; t < r.length; t++) this._addRuntimeExplicitNodeEdge(r[t], e);
    }
    _removeRuntimeDepsOnly(e) {
      let t = this._runtimeCellPrecedents[e];
      if (t) {
        for (let n = 0; n < t.length; n++) this._removeRuntimeDirectEdge(t[n], e);
        this._runtimeCellPrecedents[e] = void 0;
      }
      this._runtimeRangeIndex.removeNode(e), this._runtimeRangePrecedents[e] = void 0;
      let n = this._runtimeNodePrecedents[e];
      if (n) {
        for (let t = 0; t < n.length; t++) this._removeRuntimeExplicitNodeEdge(n[t], e);
        this._runtimeNodePrecedents[e] = void 0;
      }
    }
    _detachDependentsFromNode(e) {
      let t = this.nodeDeps.get(e),
        n = [];
      X(t, e => {
        n.push(e);
      }), this.nodeDeps.delete(e);
      for (let t = 0; t < n.length; t++) this._detachPrecedentFromDependent(n[t], e);
      let r = this._runtimeNodeDeps.get(e);
      if (r === void 0) return;
      let i = [];
      X(r, e => {
        i.push(e);
      }), this._runtimeNodeDeps.delete(e);
      for (let t = 0; t < i.length; t++) this._detachRuntimePrecedentFromDependent(i[t], e);
    }
    _detachPrecedentFromDependent(e, t) {
      let n = this._nodePrecedents[e];
      if (n === void 0) return;
      let r = 0,
        i = !1;
      for (let e = 0; e < n.length; e++) {
        let a = n[e];
        if (a === t) {
          i = !0;
          continue;
        }
        n[r++] = a;
      }
      i && (r === 0 ? this._nodePrecedents[e] = void 0 : n.length = r);
    }
    _detachRuntimePrecedentFromDependent(e, t) {
      let n = this._runtimeNodePrecedents[e];
      if (n === void 0) return;
      let r = 0,
        i = !1;
      for (let e = 0; e < n.length; e++) {
        let a = n[e];
        if (a === t) {
          i = !0;
          continue;
        }
        n[r++] = a;
      }
      i && (r === 0 ? this._runtimeNodePrecedents[e] = void 0 : n.length = r);
    }
    _addDirectEdge(e, t) {
      let n = this.directDeps.get(e);
      n === void 0 && this._directPointIndex.add(e), this.directDeps.set(e, Pn(n, t));
    }
    _addDirectEdgeForNewNode(e, t) {
      let n = this.directDeps.get(e);
      if (n === void 0) {
        this._directPointIndex.add(e), this.directDeps.set(e, t);
        return;
      }
      if (typeof n == `number`) {
        n !== t && this.directDeps.set(e, [n, t]);
        return;
      }
      n[n.length - 1] !== t && n.push(t);
    }
    _removeDirectEdge(e, t) {
      let n = this.directDeps.get(e);
      if (n === void 0) return;
      let r = Fn(n, t);
      r === void 0 ? (this.directDeps.delete(e), this._directPointIndex.remove(e)) : this.directDeps.set(e, r);
    }
    _addRuntimeDirectEdge(e, t) {
      let n = this._runtimeDirectDeps.get(e);
      n === void 0 && this._runtimeDirectPointIndex.add(e), this._runtimeDirectDeps.set(e, Pn(n, t));
    }
    _removeRuntimeDirectEdge(e, t) {
      let n = this._runtimeDirectDeps.get(e);
      if (n === void 0) return;
      let r = Fn(n, t);
      r === void 0 ? (this._runtimeDirectDeps.delete(e), this._runtimeDirectPointIndex.remove(e)) : this._runtimeDirectDeps.set(e, r);
    }
    _addExplicitNodeEdge(e, t) {
      In(this.nodeDeps, e, t);
    }
    _removeExplicitNodeEdge(e, t) {
      Ln(this.nodeDeps, e, t);
    }
    _addRuntimeExplicitNodeEdge(e, t) {
      In(this._runtimeNodeDeps, e, t);
    }
    _removeRuntimeExplicitNodeEdge(e, t) {
      Ln(this._runtimeNodeDeps, e, t);
    }
    _forEachDependentIndexByCellRaw(e, t) {
      X(this.directDeps.get(e), t), X(this._runtimeDirectDeps.get(e), t);
      let n = this.codec.decodeCell(e);
      this.rangeIndex.forEachPoint(n.unitId, n.sheetId, n.row, n.col, t), this._runtimeRangeIndex.forEachPoint(n.unitId, n.sheetId, n.row, n.col, t), this._forEachCompressedSharedDependentByRange({
        unitId: n.unitId,
        sheetId: n.sheetId,
        range: {
          startRow: n.row,
          endRow: n.row,
          startColumn: n.col,
          endColumn: n.col
        }
      }, t);
    }
    _forEachDependentOfNodeRaw(e, t) {
      if (this._indexToNodeType[e] === 1) {
        let n = this.indexToNodeId[e];
        this._forEachDependentIndexByCellRaw(n, t);
      }
      X(this.nodeDeps.get(e), t), X(this._runtimeNodeDeps.get(e), t);
    }
    _markNodeIndexDirty(e, t = !1, n = !0) {
      if (!this._activeNode[e]) return;
      let r = this.dirty[e] === 1;
      r || (this.dirty[e] = 1, this._dirtyList.push(e), this._dirtyNodeCount++), n && (!r || t) && !this.inQueue[e] && (this.inQueue[e] = 1, this._propQueue.push(e));
    }
    _isEveryActiveNodeDirty() {
      return this._activeNodeCount > 0 && this._dirtyNodeCount >= this._activeNodeCount;
    }
    _propagateDirtyQueue() {
      if (this._isEveryActiveNodeDirty()) {
        for (let e = 0; e < this._propQueue.length; e++) this.inQueue[this._propQueue[e]] = 0;
        this._propQueue.length = 0;
        return;
      }
      let e = 0;
      for (; e < this._propQueue.length;) {
        let t = this._propQueue[e++];
        this.inQueue[t] = 0, this._activeNode[t] && this._forEachDependentOfNodeRaw(t, e => {
          this._markNodeIndexDirty(e, !1);
        });
      }
      this._propQueue.length = 0;
    }
    _getDirtyNodeIndicesSnapshot() {
      let e = [];
      for (let t = 0; t < this._dirtyList.length; t++) {
        let n = this._dirtyList[t];
        this.dirty[n] && this._activeNode[n] && e.push(n);
      }
      return e;
    }
    _forEachDependentOfNodeDeduped(e, t) {
      this._nextEdgeEpoch(), this._forEachDependentOfNodeRaw(e, e => {
        this._edgeSeenEpoch[e] !== this._edgeEpoch && (this._edgeSeenEpoch[e] = this._edgeEpoch, t(e));
      });
    }
    _forEachPrecedentNodeIndex(e, t) {
      let n = this._cellPrecedents[e];
      if (n) for (let e = 0; e < n.length; e++) {
        let r = n[e],
          i = this.cellFormulaToIndex.get(r);
        if (i !== void 0 && this._activeNode[i] && t(i) === !1) return !1;
      }
      let r = this._rangePrecedents[e];
      if (r) for (let e = 0; e < r.length; e++) {
        let n = !0;
        if (this._formulaCellIndex.forEachFormulaInRange(r[e], e => {
          if (n && this._activeNode[e] && t(e) === !1) return n = !1, !1;
        }), !n) return !1;
      }
      if (!this._forEachCompressedSharedPrecedent(e, n => {
        if (n.kind === `cell`) {
          let r = this._getCompressedSharedPrecedentCell(e, n),
            i = this.cellFormulaToIndex.get(r);
          return i !== void 0 && this._activeNode[i] && t(i) === !1 ? !1 : void 0;
        }
        let r = !0;
        return this._formulaCellIndex.forEachFormulaInRange(this._getCompressedSharedPrecedentRange(e, n), e => {
          if (r && this._activeNode[e] && t(e) === !1) return r = !1, !1;
        }), r;
      })) return !1;
      let i = this._nodePrecedents[e];
      if (i) for (let e = 0; e < i.length; e++) {
        let n = i[e];
        if (this._activeNode[n] && t(n) === !1) return !1;
      }
      let a = this._runtimeCellPrecedents[e];
      if (a) for (let e = 0; e < a.length; e++) {
        let n = a[e],
          r = this.cellFormulaToIndex.get(n);
        if (r !== void 0 && this._activeNode[r] && t(r) === !1) return !1;
      }
      let o = this._runtimeRangePrecedents[e];
      if (o) for (let e = 0; e < o.length; e++) {
        let n = !0;
        if (this._formulaCellIndex.forEachFormulaInRange(o[e], e => {
          if (n && this._activeNode[e] && t(e) === !1) return n = !1, !1;
        }), !n) return !1;
      }
      let s = this._runtimeNodePrecedents[e];
      if (s) for (let e = 0; e < s.length; e++) {
        let n = s[e];
        if (this._activeNode[n] && t(n) === !1) return !1;
      }
      return !0;
    }
    _wouldCreateCycleForNewDeps(e, t, n, r) {
      for (let n = 0; n < t.length; n++) {
        let r = t[n],
          i = this.cellFormulaToIndex.get(r);
        if (i !== void 0 && this._activeNode[i] && (i === e || this._canReachNodeIndex(e, i))) return !0;
      }
      if (this._indexToNodeType[e] === 1) {
        let t = this.indexToNodeId[e],
          r = this.codec.decodeCell(t);
        for (let e = 0; e < n.length; e++) if (jn(n[e], r)) return !0;
      }
      for (let t = 0; t < n.length; t++) {
        let r = n[t],
          i = !1;
        if (this._formulaCellIndex.forEachFormulaInRange(r, t => {
          if (!i && this._activeNode[t]) {
            if (t === e) {
              i = !0;
              return;
            }
            this._canReachNodeIndex(e, t) && (i = !0);
          }
        }), i) return !0;
      }
      for (let t = 0; t < r.length; t++) {
        let n = r[t];
        if (n === e || this._canReachNodeIndex(e, n)) return !0;
      }
      return !1;
    }
    _canReachNodeIndex(e, t) {
      if (e === t) return !0;
      this._nextVisitEpoch();
      let n = [e];
      for (; n.length > 0;) {
        let e = n.pop(),
          r = !1;
        if (this._forEachDependentOfNodeRaw(e, e => {
          if (!r && this._visitNodeEpoch[e] !== this._visitEpoch) {
            if (this._visitNodeEpoch[e] = this._visitEpoch, e === t) {
              r = !0;
              return;
            }
            n.push(e);
          }
        }), r) return !0;
      }
      return !1;
    }
    _buildDirtyCalculationGraph(e) {
      let t = this._tryBuildAcyclicDirtyCalculationGraph(e);
      return t === void 0 ? this._buildDirtyCalculationGraphWithScc(e) : t;
    }
    _tryBuildAcyclicDirtyCalculationGraph(e) {
      let t = e.length;
      this._nextTarjanEpoch();
      for (let n = 0; n < t; n++) {
        let t = e[n];
        this._tarjanSeenEpoch[t] = this._tarjanEpoch, this._tarjanIndexArr[t] = n + 1;
      }
      let n = new Uint32Array(t),
        r = new Int32Array(t),
        i = new Int32Array(t),
        a = new Uint8Array(t),
        o = new Uint8Array(t),
        s = new Uint8Array(t),
        c = [],
        l = [],
        u = new Map(),
        d = [],
        f = [],
        p = [],
        m = [],
        h = new Wn(this.codec, this._initialRangeCapacity, this._maxIndexedSpan);
      for (let e = 0; e < t; e++) i[e] = e, r[e] = -1;
      for (let g = 0; g < t; g++) {
        let t = e[g];
        this._nextEdgeEpoch(), this._addAcyclicExactPrecedentEdges(t, g, n, r, c, l, i, a, o, s), this._addAcyclicRangePrecedentGroups(t, g, n, u, d, f, p, m, h, i, a, o, s);
      }
      let g = new Int32Array(t),
        _ = 0,
        v = 0;
      for (let e = 0; e < t; e++) n[e] === 0 && (g[v++] = e);
      let y = new Int32Array(t),
        b = [],
        x = -1,
        S = 0,
        C = !1;
      for (; _ < v;) {
        let t = g[_++],
          a = e[t];
        S++, this._appendAcyclicCalculationNode(b, y, i, o, s, t, a, x), C ||= s[t] === 1, o[t] === 0 && x === -1 && (x = b.length - 1);
        for (let e = r[t]; e !== -1; e = l[e]) {
          let t = c[e];
          n[t]--, n[t] === 0 && (g[v++] = t);
        }
        if (this._indexToNodeType[a] === 1) {
          let e = this.indexToNodeId[a],
            t = this.codec.decodeCell(e);
          h.forEachPoint(t.unitId, t.sheetId, t.row, t.col, e => {
            if (f[e] <= 0 || (f[e]--, f[e] !== 0)) return;
            let t = p[e];
            for (let e = 0; e < t.length; e++) {
              let r = t[e];
              n[r]--, n[r] === 0 && (g[v++] = r);
            }
          });
        }
      }
      if (S === t) return {
        calculationForest: b,
        hasCycle: C
      };
    }
    _addAcyclicExactPrecedentEdges(e, t, n, r, i, a, o, s, c, l) {
      let u = e => {
          if (e === void 0 || !this._activeNode[e] || !this.dirty[e] || this._edgeSeenEpoch[e] === this._edgeEpoch) return;
          this._edgeSeenEpoch[e] = this._edgeEpoch;
          let u = this._getCurrentDirtyOrdinal(e);
          if (!(u < 0)) {
            if (c[u] = 1, c[t] = 1, u === t) {
              l[t] = 1;
              return;
            }
            a.push(r[u]), i.push(t), r[u] = i.length - 1, n[t]++, this._unionCalculationForestComponents(o, s, u, t);
          }
        },
        d = this._cellPrecedents[e];
      if (d) for (let e = 0; e < d.length; e++) u(this.cellFormulaToIndex.get(d[e]));
      let f = this._nodePrecedents[e];
      if (f) for (let e = 0; e < f.length; e++) u(f[e]);
      let p = this._runtimeCellPrecedents[e];
      if (p) for (let e = 0; e < p.length; e++) u(this.cellFormulaToIndex.get(p[e]));
      let m = this._runtimeNodePrecedents[e];
      if (m) for (let e = 0; e < m.length; e++) u(m[e]);
      this._forEachCompressedSharedPrecedent(e, t => {
        t.kind === `cell` && u(this.cellFormulaToIndex.get(this._getCompressedSharedPrecedentCell(e, t)));
      });
    }
    _addAcyclicRangePrecedentGroups(e, t, n, r, i, a, o, s, c, l, u, d, f) {
      let p = [],
        m = m => {
          let h = this._getOrCreateAcyclicRangeGroup(m, r, i, a, o, s, c, l, u, d);
          if (a[h] === 0) return;
          for (let e = 0; e < p.length; e++) if (p[e] === h) return;
          p.push(h), o[h].push(t), n[t]++, d[t] = 1;
          let g = s[h];
          g >= 0 && this._unionCalculationForestComponents(l, u, g, t), this._indexToNodeType[e] === 1 && jn(m, this.codec.decodeCell(this.indexToNodeId[e])) && (f[t] = 1);
        },
        h = this._rangePrecedents[e];
      if (h) for (let e = 0; e < h.length; e++) m(h[e]);
      let g = this._runtimeRangePrecedents[e];
      if (g) for (let e = 0; e < g.length; e++) m(g[e]);
      this._forEachCompressedSharedPrecedent(e, t => {
        t.kind === `range` && m(this._getCompressedSharedPrecedentRange(e, t));
      });
    }
    _getOrCreateAcyclicRangeGroup(e, t, n, r, i, a, o, s, c, l) {
      let u = G(e),
        d = [u.unitId, u.sheetId, u.range.startRow, u.range.endRow, u.range.startColumn, u.range.endColumn].join(`:`),
        f = t.get(d);
      if (f !== void 0) return f;
      let p = n.length,
        m = 0,
        h = -1;
      return t.set(d, p), n.push(u), i.push([]), o.addRange(p, u), this._formulaCellIndex.forEachFormulaInRange(u, e => {
        if (!this._activeNode[e] || !this.dirty[e]) return;
        let t = this._getCurrentDirtyOrdinal(e);
        if (!(t < 0)) {
          if (m++, l[t] = 1, h === -1) {
            h = t;
            return;
          }
          this._unionCalculationForestComponents(s, c, h, t);
        }
      }), r.push(m), a.push(h), p;
    }
    _appendAcyclicCalculationNode(e, t, n, r, i, a, o, s) {
      let c = r[a] === 0,
        l = this._findCalculationForestRoot(n, a),
        u = (c ? s + 1 : t[l]) - 1;
      if (u === -1 && (u = e.length, c || (t[l] = u + 1), e.push({
        hasCycle: !1,
        plan: []
      })), i[a] === 1) {
        e[u].plan.push({
          type: `cycle`,
          nodeIndices: [o]
        }), e[u].hasCycle = !0;
        return;
      }
      this._appendCalculationNodePlanItem(e[u].plan, o);
    }
    _getCurrentDirtyOrdinal(e) {
      return this._tarjanSeenEpoch[e] === this._tarjanEpoch ? this._tarjanIndexArr[e] - 1 : -1;
    }
    _buildDirtyCalculationGraphWithScc(e) {
      let t = this._findDirtySccs(e),
        n = t.componentStarts.length,
        r = new Int32Array(this.indexToNodeId.length),
        i = new Int32Array(this.indexToNodeId.length);
      r.fill(-1), i.fill(-1);
      for (let t = 0; t < e.length; t++) i[e[t]] = t;
      let a = new Int32Array(n);
      a.fill(2 ** 53 - 1);
      for (let e = 0; e < n; e++) {
        let n = 2 ** 53 - 1,
          o = t.componentStarts[e],
          s = this._getDirtySccEnd(t, e);
        for (let a = o; a < s; a++) {
          let o = t.componentNodes[a];
          r[o] = e;
          let s = i[o];
          s >= 0 && s < n && (n = s);
        }
        a[e] = n;
      }
      let o = new Int32Array(n);
      o.fill(-1);
      let s = [],
        c = [],
        l = new Int32Array(n),
        u = new Uint8Array(n),
        d = new Uint8Array(n),
        f = new Uint32Array(n),
        p = 1,
        m = new Uint32Array(n);
      for (let e = 0; e < n; e++) l[e] = e;
      for (let e = 0; e < n; e++) {
        p === 4294967295 && (f.fill(0), p = 1);
        let n = t.componentStarts[e],
          i = this._getDirtySccEnd(t, e);
        for (let a = n; a < i; a++) {
          let n = t.componentNodes[a];
          this._forEachDependentOfNodeDeduped(n, t => {
            if (!this._activeNode[t] || !this.dirty[t]) return;
            let n = r[t];
            n < 0 || n === e || f[n] !== p && (f[n] = p, c.push(o[e]), s.push(n), o[e] = s.length - 1, m[n]++, d[e] = 1, d[n] = 1, this._unionCalculationForestComponents(l, u, e, n));
          });
        }
        p++;
      }
      let h = this._toposortComponents(o, s, c, m, a),
        g = this._buildCalculationForest(t, h, l, d);
      t.componentNodes.length = 0, t.componentStarts.length = 0, s.length = 0, c.length = 0, h.length = 0;
      let _ = !1;
      for (let e = 0; e < g.length; e++) if (g[e].hasCycle) {
        _ = !0;
        break;
      }
      return {
        calculationForest: g,
        hasCycle: _
      };
    }
    _toposortComponents(e, t, n, r, i) {
      let a = new Uint32Array(r),
        o = [];
      for (let e = 0; e < a.length; e++) a[e] === 0 && this._insertComponentByRank(o, 0, e, i);
      let s = [],
        c = 0;
      for (; c < o.length;) {
        let r = o[c++];
        s.push(r);
        for (let s = e[r]; s !== -1; s = n[s]) {
          let e = t[s];
          a[e]--, a[e] === 0 && this._insertComponentByRank(o, c, e, i);
        }
      }
      return s;
    }
    _insertComponentByRank(e, t, n, r) {
      let i = e.length,
        a = r[n];
      for (; i > t && r[e[i - 1]] > a;) i--;
      e.splice(i, 0, n);
    }
    _buildCalculationForest(e, t, n, r) {
      let i = new Int32Array(e.componentStarts.length);
      i.fill(-1);
      let a = [],
        o = -1;
      for (let s = 0; s < t.length; s++) {
        let c = t[s],
          l = this._findCalculationForestRoot(n, c),
          u = r[c] === 0,
          d = u ? o : i[l];
        d === -1 && (d = a.length, u ? o = d : i[l] = d, a.push({
          hasCycle: !1,
          plan: []
        }));
        let f = a[d],
          p = this._createCalculationPlanItem(e, c);
        if (p.type === `node`) {
          this._appendCalculationNodePlanItem(f.plan, p.nodeIndex);
          continue;
        }
        f.plan.push(p), p.type === `cycle` && (f.hasCycle = !0);
      }
      return a;
    }
    _appendCalculationNodePlanItem(e, t) {
      let n = e[e.length - 1];
      if ((n == null ? void 0 : n.type) === `nodes` && n.nodeIndices.length < 8192) {
        n.nodeIndices.push(t);
        return;
      }
      e.push({
        type: `nodes`,
        nodeIndices: [t]
      });
    }
    _findCalculationForestRoot(e, t) {
      let n = t;
      for (; e[n] !== n;) n = e[n];
      for (; e[t] !== t;) {
        let r = e[t];
        e[t] = n, t = r;
      }
      return n;
    }
    _unionCalculationForestComponents(e, t, n, r) {
      let i = this._findCalculationForestRoot(e, n),
        a = this._findCalculationForestRoot(e, r);
      if (i !== a) {
        if (t[i] < t[a]) {
          let e = i;
          i = a, a = e;
        }
        e[a] = i, t[i] === t[a] && t[i]++;
      }
    }
    _createCalculationPlanItem(e, t) {
      let n = e.componentStarts[t],
        r = this._getDirtySccEnd(e, t);
      if (r - n === 1 && !this._hasSelfLoop(e.componentNodes[n])) return {
        type: `node`,
        nodeIndex: e.componentNodes[n]
      };
      let i = e.componentNodes.slice(n, r);
      return i.sort((e, t) => e - t), {
        type: `cycle`,
        nodeIndices: i
      };
    }
    _getDirtySccEnd(e, t) {
      return t + 1 < e.componentStarts.length ? e.componentStarts[t + 1] : e.componentNodes.length;
    }
    _findDirtySccs(e) {
      this._nextTarjanEpoch();
      let t = 1,
        n = [],
        r = [],
        i = [],
        a = e => {
          let t = [];
          return this._forEachDependentOfNodeDeduped(e, e => {
            this._activeNode[e] && this.dirty[e] && t.push(e);
          }), t;
        },
        o = (e, r) => (this._tarjanSeenEpoch[e] = this._tarjanEpoch, this._tarjanIndexArr[e] = t, this._tarjanLowArr[e] = t, t++, n.push(e), this._tarjanOnStack[e] = 1, {
          nodeIndex: e,
          dependents: a(e),
          nextDependentIndex: 0,
          parentNodeIndex: r
        }),
        s = e => {
          if (this._tarjanLowArr[e] === this._tarjanIndexArr[e]) for (i.push(r.length);;) {
            let t = n.pop();
            if (this._tarjanOnStack[t] = 0, r.push(t), t === e) break;
          }
        },
        c = e => {
          let t = [o(e)];
          for (; t.length > 0;) {
            let e = t[t.length - 1],
              n = e.nodeIndex;
            if (e.nextDependentIndex < e.dependents.length) {
              let r = e.dependents[e.nextDependentIndex++];
              this._tarjanSeenEpoch[r] === this._tarjanEpoch ? this._tarjanOnStack[r] && (this._tarjanLowArr[n] = Math.min(this._tarjanLowArr[n], this._tarjanIndexArr[r])) : t.push(o(r, n));
              continue;
            }
            t.pop(), e.parentNodeIndex !== void 0 && (this._tarjanLowArr[e.parentNodeIndex] = Math.min(this._tarjanLowArr[e.parentNodeIndex], this._tarjanLowArr[n])), s(n);
          }
        };
      for (let t = 0; t < e.length; t++) {
        let n = e[t];
        this._activeNode[n] && this.dirty[n] && this._tarjanSeenEpoch[n] !== this._tarjanEpoch && c(n);
      }
      return {
        componentNodes: r,
        componentStarts: i
      };
    }
    _hasSelfLoop(e) {
      let t = !1;
      return this._forEachDependentOfNodeDeduped(e, n => {
        n === e && (t = !0);
      }), t;
    }
    _nextEmitEpoch() {
      this._emitEpoch++, this._emitEpoch >= 4294967295 && (this._seenNodeEpoch.fill(0), this._emitEpoch = 1);
    }
    _emitNodeOnce(e) {
      return this._seenNodeEpoch[e] === this._emitEpoch ? !1 : (this._seenNodeEpoch[e] = this._emitEpoch, !0);
    }
    _emitNodeOnceAndMarkDirty(e, t = !1, n = !0) {
      this._emitNodeOnce(e) && this._markNodeIndexDirty(e, t, n);
    }
    _nextVisitEpoch() {
      this._visitEpoch++, this._visitEpoch >= 4294967295 && (this._visitNodeEpoch.fill(0), this._visitEpoch = 1);
    }
    _nextEdgeEpoch() {
      this._edgeEpoch++, this._edgeEpoch >= 4294967295 && (this._edgeSeenEpoch.fill(0), this._edgeEpoch = 1);
    }
    _nextTarjanEpoch() {
      this._tarjanEpoch++, this._tarjanEpoch >= 4294967295 && (this._tarjanSeenEpoch.fill(0), this._tarjanEpoch = 1);
    }
  },
  Kn = class extends ie {
    constructor(...e) {
      super(...e), j(this, `_dependencyEngineCache`, new Gn({
        maxRows: 1048576,
        maxCols: 16384
      }));
    }
    reset() {
      this._dependencyEngineCache.reset();
    }
    _getCellIdsAndRanges(e) {
      let t = [],
        n = [];
      for (let r = 0; r < e.rangeList.length; r++) {
        let {
          unitId: i,
          sheetId: a,
          range: o
        } = e.rangeList[r];
        if (o.startRow === o.endRow && o.startColumn === o.endColumn) {
          let e = this._dependencyEngineCache.encodeCell(i, a, o.startRow, o.startColumn);
          t.push(e);
        } else n.push({
          unitId: i,
          sheetId: a,
          range: o
        });
      }
      return {
        cellIds: t,
        ranges: n
      };
    }
    _getDynamicDeps(e, t, n, r) {
      if (!(!e.addressFunctionNodes || e.addressFunctionNodes.length === 0)) return [{
        id: `address-functions`,
        paramDeps: {
          cells: t,
          ranges: n,
          nodes: r
        }
      }];
    }
    addOtherFormulaDependencyPro(e, t, n, r, i, a = `replace`) {
      let {
          cellIds: o,
          ranges: s
        } = this._getCellIdsAndRanges(r),
        c = this._getDynamicDeps(r, o, s, i),
        l = r.refOffsetX || 0,
        u = r.refOffsetY || 0,
        d = this._dependencyEngineCache.encodeOtherFormulaId(e, t, n, l, u);
      return this._dependencyEngineCache.setOtherFormulaDeps(d, {
        cells: o,
        ranges: s,
        nodes: i,
        dynamics: c
      }, {
        checkCycle: !1,
        markDirty: !1,
        mode: a
      }).nodeIndex;
    }
    removeOtherFormulaDependency(e, t, n) {
      this._dependencyEngineCache.clearOtherFormulas(e, t, n, void 0, void 0, {
        markDependentsDirty: !0
      });
    }
    clearOtherFormulaDependency(e, t) {
      t ? this._dependencyEngineCache.clearOtherFormulas(e, t, void 0, void 0, void 0, {
        markDependentsDirty: !0
      }) : this._dependencyEngineCache.clearOtherFormulas(e, void 0, void 0, void 0, void 0, {
        markDependentsDirty: !0
      });
    }
    getOtherFormulaDependencyPro(e, t, n, r, i) {
      let a = this._dependencyEngineCache.encodeOtherFormulaId(e, t, n, r, i);
      if (this._dependencyEngineCache.hasOtherFormula(a)) return this._dependencyEngineCache.getNodeIndex({
        type: 2,
        id: a
      });
    }
    addFeatureFormulaDependencyPro(e, t, n, r) {
      let {
          cellIds: i,
          ranges: a
        } = this._getCellIdsAndRanges(r),
        o = this._dependencyEngineCache.encodeFeatureCalculationId(e, t, n);
      return this._dependencyEngineCache.setFeatureCalculationDeps(o, {
        cells: i,
        ranges: a
      }, {
        checkCycle: !1,
        markDirty: !1
      }).nodeIndex;
    }
    removeFeatureFormulaDependency(e, t, n) {
      let r = n.map(n => this._dependencyEngineCache.encodeFeatureCalculationId(e, t, n));
      this._dependencyEngineCache.removeFeatureCalculations(r, {
        markDependentsDirty: !0,
        detachDependents: !0
      });
    }
    clearFeatureFormulaDependency(e, t) {
      t ? this._dependencyEngineCache.clearFeatureCalculations(e, t, {
        markDependentsDirty: !0,
        detachDependents: !0
      }) : this._dependencyEngineCache.clearFeatureCalculations(e, void 0, {
        markDependentsDirty: !0,
        detachDependents: !0
      });
    }
    getFeatureFormulaDependencyPro(e, t, n) {
      let r = this._dependencyEngineCache.encodeFeatureCalculationId(e, t, n);
      if (this._dependencyEngineCache.hasFeatureCalculation(r)) return this._dependencyEngineCache.getNodeIndex({
        type: 3,
        id: r
      });
    }
    getFeatureFormulaDependencyNodePro(e, t, n) {
      return {
        type: 3,
        id: this._dependencyEngineCache.encodeFeatureCalculationId(e, t, n)
      };
    }
    reserveFormulaDependencyCapacity(e, t = e) {
      this._dependencyEngineCache.reserveDependencyCapacity(e, t);
    }
    addFormulaDependencyPro(e, t, n, r, i, a, o = `replace`) {
      let s = this._dependencyEngineCache.encodeCell(e, t, n, r),
        {
          cellIds: c,
          ranges: l
        } = this._getCellIdsAndRanges(i),
        u = {
          cells: c,
          ranges: l,
          nodes: a,
          dynamics: this._getDynamicDeps(i, c, l, a)
        };
      return (o === `replace` ? this._dependencyEngineCache.setNewCellFormulaDeps(s, u) : this._dependencyEngineCache.setCellFormulaDeps(s, u, {
        checkCycle: !1,
        markDirty: !1,
        mode: o
      })).nodeIndex;
    }
    addFormulaDependencyNodeOnlyPro(e, t, n, r) {
      let i = this._dependencyEngineCache.encodeCell(e, t, n, r);
      return this._dependencyEngineCache.setNewCellFormulaNodeOnly(i).nodeIndex;
    }
    addFormulaDependencyNodeOnlyRangePro(e, t, n, r) {
      return this._dependencyEngineCache.setNewCellFormulaNodeOnlyRange(e, t, n, r);
    }
    registerCompressedSharedFormulaGroup(e) {
      this._dependencyEngineCache.registerCompressedSharedFormulaGroup(e);
    }
    clearCompressedSharedFormulaGroups(e, t) {
      this._dependencyEngineCache.clearCompressedSharedFormulaGroups(e, t);
    }
    removeFormulaDependency(e, t, n, r) {
      let i = this._dependencyEngineCache.encodeCell(e, t, n, r);
      this._dependencyEngineCache.removeCellFormula(i, {
        markDependentsDirty: !0
      });
    }
    clearFormulaDependency(e, t) {
      this._dependencyEngineCache.clearCompressedSharedFormulaGroups(e, t), t ? this._dependencyEngineCache.clearCellFormulas(e, t, {
        markDependentsDirty: !0
      }) : this._dependencyEngineCache.clearCellFormulas(e, void 0, {
        markDependentsDirty: !0
      });
    }
    getFormulaDependencyPro(e, t, n, r) {
      let i = this._dependencyEngineCache.encodeCell(e, t, n, r);
      if (this._dependencyEngineCache.hasCellFormula(i)) return this._dependencyEngineCache.getNodeIndex({
        type: 1,
        id: i
      });
    }
    markIndicesChanged(e, t) {
      this._dependencyEngineCache.markCalcNodeIndicesChanged(e, t);
    }
    markRangesChanged(e, t) {
      this._dependencyEngineCache.markRangesChanged(e, t);
    }
    markDirtyFeatureCalculations(e) {
      let t = [];
      Object.keys(e).forEach(n => {
        let r = e[n];
        r != null && Object.keys(r).forEach(e => {
          let i = r[e];
          i != null && Object.keys(i).forEach(r => {
            t.push(this.getFeatureFormulaDependencyNodePro(n, e, r));
          });
        });
      }), this._dependencyEngineCache.markCalcNodesChanged(t);
    }
    markDirtyOtherFormulas(e) {
      Object.keys(e).forEach(t => {
        let n = e[t];
        n != null && Object.keys(n).forEach(e => {
          let r = n[e];
          r != null && this._dependencyEngineCache.markOtherFormulasChanged(t, e, Object.keys(r));
        });
      });
    }
    markDirtySheetNames(e) {
      let t = [];
      Object.keys(e).forEach(n => {
        let r = e[n];
        r != null && Object.keys(r).forEach(e => {
          t.push({
            unitId: n,
            sheetId: e,
            range: {
              startRow: 0,
              endRow: 1048575,
              startColumn: 0,
              endColumn: 16383
            }
          });
        });
      }), this._dependencyEngineCache.markRangesChanged(t, {
        includeFormulaCells: !1
      });
    }
    markAllDirty() {
      this._dependencyEngineCache.markAllDirty();
    }
    clearCalculatedDirty(e) {
      this._dependencyEngineCache.clearCalculatedDirty(e);
    }
    hasDynamicDeps(e) {
      return this._dependencyEngineCache.hasDynamicDeps(e);
    }
    hasDynamicDepsByIndex(e) {
      return this._dependencyEngineCache.hasDynamicDeps(this._dependencyEngineCache.getNodeRefByIndex(e));
    }
    refreshDynamicDeps(e, t) {
      return this._dependencyEngineCache.refreshDynamicDeps(e, t);
    }
    refreshDynamicDepsByIndex(e, t) {
      return this._dependencyEngineCache.refreshDynamicDeps(this._dependencyEngineCache.getNodeRefByIndex(e), t);
    }
    hasUncalculatedDirtyPrecedentByIndex(e, t) {
      return this._dependencyEngineCache.hasUncalculatedDirtyPrecedentByIndex(e, t);
    }
    forEachPrecedentNodeByIndex(e, t) {
      this._dependencyEngineCache.forEachPrecedentNodeByIndex(e, (e, n) => {
        t(n);
      });
    }
    forEachDependentNodeByIndex(e, t) {
      this._dependencyEngineCache.forEachDependentByIndex(e, (e, n) => {
        t(n);
      });
    }
    prepareDynamicDependencies(e) {
      return this._dependencyEngineCache.prepareDynamicDependencies(e);
    }
    getCalculationOrder(e) {
      return this._dependencyEngineCache.getCalculationOrder(e);
    }
  };
let Xn = class {
  constructor(e, t, n, r) {
    this._currentConfigService = e, this._referenceDataService = t, this._excelExternalReferenceModel = n, this._superTableService = r, j(this, `_requestCounter`, 0), j(this, `_generation`, -1), j(this, `_inflight`, new Map()), j(this, `_completed`, new Set());
  }
  async load(e) {
    let t = this._currentConfigService.getCalculationGeneration();
    t !== this._generation && (this._generation = t, this._inflight.clear(), this._completed.clear());
    let n = this._createRequest(e, t);
    if (!n) return E.REF;
    let r = [t, n.hostUnitId, n.syntheticUnitId, e.referenceKind, e.token].join(`\0`);
    if (this._completed.has(r)) return;
    let i = this._inflight.get(r);
    if (i) return i;
    let a = this._loadRequest(n, e.resolution, t).then(e => (e ?? this._completed.add(r), e)).finally(() => this._inflight.delete(r));
    return this._inflight.set(r, a), a;
  }
  async loadRuntimeRange(e) {
    var t, n;
    let r = this._currentConfigService.getCalculationGeneration();
    r !== this._generation && (this._generation = r, this._inflight.clear(), this._completed.clear());
    let i = this._resolveRuntimeRange(e);
    if (!i) return;
    let {
        request: a,
        resolution: o
      } = i,
      s = (t = a.ranges[0]) == null ? void 0 : t.range,
      c = [r, a.hostUnitId, a.syntheticUnitId, `runtime`, (n = a.ranges[0]) == null ? void 0 : n.sheetName, s == null ? void 0 : s.startRow, s == null ? void 0 : s.endRow, s == null ? void 0 : s.startColumn, s == null ? void 0 : s.endColumn].join(`\0`);
    if (this._completed.has(c)) return !1;
    let l = this._inflight.get(c);
    if (l) return (await l) ?? !1;
    let u = this._loadRequest(a, o, r).then(e => (e ?? this._completed.add(c), e)).finally(() => this._inflight.delete(c));
    return this._inflight.set(c, u), (await u) ?? !0;
  }
  _resolveRuntimeRange(e) {
    var t, n;
    let r = this._currentConfigService.getExternalReferences()[e.hostUnitId],
      i = Object.entries((r == null ? void 0 : r.references) ?? {}).find(([, t]) => t.sourceUnitId === e.unitId);
    if (i) {
      let [t, n] = i;
      return {
        resolution: {
          unitId: n.sourceUnitId,
          unitType: n.sourceUnitType,
          externalReference: {
            kind: `host`,
            qualifier: n.qualifier,
            referenceId: t
          }
        },
        request: {
          requestId: `host-external-request-${++this._requestCounter}`,
          calculationId: `formula-calculation-${this._generation}`,
          hostUnitId: e.hostUnitId,
          referenceId: t,
          syntheticUnitId: n.sourceUnitId,
          target: {
            name: n.qualifier,
            unitType: n.sourceUnitType,
            sourceUnitId: n.sourceUnitId
          },
          ranges: [{
            sheetId: e.sheetId,
            sheetName: this._runtimeRangeSheetName(e),
            range: e.range
          }],
          requireFresh: !0
        }
      };
    }
    let a = (t = this._excelExternalReferenceModel.get(e.hostUnitId)) == null ? void 0 : t.links.find(t => F(e.hostUnitId, t.slot) === e.unitId);
    if (a) return {
      resolution: {
        unitId: e.unitId,
        unitType: a.target.unitType,
        externalReference: {
          kind: `ooxml`,
          qualifier: String(a.slot),
          slot: a.slot
        }
      },
      request: {
        requestId: `ooxml-external-request-${++this._requestCounter}`,
        calculationId: `formula-calculation-${this._generation}`,
        hostUnitId: e.hostUnitId,
        bindingSlot: a.slot,
        syntheticUnitId: e.unitId,
        target: a.target,
        ranges: [{
          sheetId: e.sheetId,
          sheetName: this._runtimeRangeSheetName(e) || ((n = a.sheetNames.find(t => t.sheetId === e.sheetId)) == null ? void 0 : n.name),
          range: e.range
        }],
        requireFresh: !0
      }
    };
  }
  _runtimeRangeSheetName(e) {
    var t;
    if (e.sheetName) return e.sheetName;
    let n = this._currentConfigService.getSheetNameMap()[e.unitId] ?? {};
    return (t = Object.entries(n).find(([, t]) => t === e.sheetId)) == null ? void 0 : t[0];
  }
  _createRequest(e, t) {
    let n = e.resolution.externalReference;
    if (!n) return;
    let r = e.referenceKind === `table` ? {
      tableName: e.tableName
    } : this._createA1RangeRequest(e.token);
    if (!r) return;
    if (n.kind === `host`) {
      let i = this._currentConfigService.getExternalReferences()[e.hostUnitId],
        a = n.referenceId ? i == null ? void 0 : i.references[n.referenceId] : void 0;
      return a ? {
        requestId: `host-external-request-${++this._requestCounter}`,
        calculationId: `formula-calculation-${t}`,
        hostUnitId: e.hostUnitId,
        referenceId: n.referenceId,
        syntheticUnitId: a.sourceUnitId,
        target: {
          name: a.qualifier,
          unitType: a.sourceUnitType,
          sourceUnitId: a.sourceUnitId
        },
        ranges: [r],
        requireFresh: !0
      } : void 0;
    }
    let i = n.slot;
    if (i == null) return;
    let a = this._excelExternalReferenceModel.resolveBinding(e.hostUnitId, String(i));
    if (a.status === `resolved`) return {
      requestId: `ooxml-external-request-${++this._requestCounter}`,
      calculationId: `formula-calculation-${t}`,
      hostUnitId: e.hostUnitId,
      bindingSlot: i,
      syntheticUnitId: e.resolution.unitId,
      target: a.link.target,
      ranges: [r],
      requireFresh: !0
    };
  }
  _createA1RangeRequest(e) {
    try {
      let {
        sheetName: t,
        range: n
      } = Ue(e);
      return !t || !Number.isFinite(n.startRow) || !Number.isFinite(n.endRow) || !Number.isFinite(n.startColumn) || !Number.isFinite(n.endColumn) ? void 0 : {
        sheetName: t,
        range: n
      };
    } catch {}
  }
  async _loadRequest(e, t, n) {
    let r = await this._referenceDataService.readData(e);
    if (n !== this._currentConfigService.getCalculationGeneration() || r.calculationId !== e.calculationId) return E.NA;
    if (r.error) return r.error;
    if (r.sheets.length === 0) return E.NA;
    this._materialize(r, t);
  }
  _materialize(e, t) {
    var n, r;
    let i = this._currentConfigService.getUnitData(),
      a = this._currentConfigService.getSheetNameMap(),
      o = this._currentConfigService.getUnitNameMap(),
      s = i[t.unitId] ?? {},
      c = a[t.unitId] ?? {};
    for (let t of e.sheets) this._materializeSheet(s, t), c[t.name] = t.sheetId;
    i[t.unitId] = s, a[t.unitId] = c, o[t.unitId] = {
      name: ((n = o[t.unitId]) == null ? void 0 : n.name) ?? ((r = t.externalReference) == null ? void 0 : r.qualifier) ?? t.unitId,
      unitType: t.unitType
    }, this._currentConfigService.registerUnitData(i), this._currentConfigService.registerSheetNameMap(a), this._currentConfigService.registerUnitNameMap(o);
    for (let n of e.tables ?? []) this._superTableService.registerTable(t.unitId, n.name, {
      sheetId: n.sheetId,
      range: n.range,
      titleMap: new Map(n.columns.map((e, t) => [e, t])),
      showHeader: n.showHeader
    });
  }
  _materializeSheet(e, t) {
    let n = e[t.sheetId],
      r = (n == null ? void 0 : n.cellData) ?? new f();
    for (let {
      row: e,
      column: n,
      cell: i
    } of t.cells) r.setValue(e, n, {
      ...r.getValue(e, n),
      ...i
    });
    e[t.sheetId] = {
      cellData: r,
      rowCount: Math.max((n == null ? void 0 : n.rowCount) ?? 0, t.rowCount),
      columnCount: Math.max((n == null ? void 0 : n.columnCount) ?? 0, t.columnCount),
      rowData: (n == null ? void 0 : n.rowData) ?? {},
      columnData: (n == null ? void 0 : n.columnData) ?? {}
    };
  }
};
let tr = class extends Ve {
  _extendFormulaExecutionDependencies(e) {}
  _initializeWithOverride() {
    var e;
    if (this._injector.add([je, {
      useClass: je
    }]), this._injector.add([I]), this._injector.add([N]), this._injector.add([B]), this._injector.add([Bt]), this._injector.add([Qt]), this._injector.add([Jt]), this._injector.add([Kt]), this._injector.add([Yt]), this._injector.add([bt]), this._injector.add([Yn]), this._injector.add([Gt]), this._injector.add([zt]), this._injector.add([At, {
      useClass: jt
    }]), this._injector.add([Et]), this._injector.add([Nt]), this._injector.add([$]), this._config.notExecuteFormula === !0 ? this._injector.add([z, {
      useClass: $
    }]) : this._injector.add([z, {
      useFactory: () => {
        try {
          return et(this._injector.get(Qe).requestChannel(Vt));
        } catch {
          return this._injector.get($);
        }
      }
    }]), !((e = this._config) != null && e.notExecuteFormula)) {
      let e = [[be, {
        useClass: On
      }], [xe, {
        useClass: Kn
      }], [Ce, {
        useClass: Dn
      }], [Ee, {
        useClass: qn
      }], [we, {
        useClass: Xn
      }]];
      this._extendFormulaExecutionDependencies(e), e.forEach(e => this._injector.add(e));
    }
  }
  onReady() {
    super.onReady(), C(this._injector, [[Bt], [zt], [Qt], [Jt], [Kt], [Yt], [Gt]]), C(this._injector, [[Nt]]), this._config.notExecuteFormula === !0 && this._injector.has(Qe) && (this._injector.add([Ht]), C(this._injector, [[Ht]]));
  }
};
export { tr as UniverProFormulaEnginePlugin };
export { Gt, Kt, Jt, Yt, Qt, On, Xn };
