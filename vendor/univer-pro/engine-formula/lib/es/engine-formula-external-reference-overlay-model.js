import { AbsoluteRefType as e, CellValueType as t, CommandType as n, DEFAULT_NUMBER_FORMAT as r, DependentOn as i, Disposable as a, ICommandService as o, IConfigService as s, IResourceManagerService as c, IUndoRedoService as l, IUniverInstanceService as u, Inject as d, ObjectMatrix as f, RANGE_TYPE as p, Rectangle as m, Tools as h, UniverInstanceType as g, createIdentifier as _, generateRandomId as v, numfmt as y, regexp as b, requestImmediateMacroTask as x, toDisposable as S, touchDependencies as C } from "@univerjs/core";
import { AstTreeBuilder as w, BaseReferenceObject as ee, CELL_INVERTED_INDEX_CACHE as te, CalculateFormulaService as ne, DEFAULT_CYCLE_REFERENCE_COUNT as T, DEFAULT_INTERVAL_COUNT as re, DependencyManagerBaseService as ie, ENGINE_FORMULA_PLUGIN_CONFIG_KEY as ae, ErrorType as E, FORMULA_REF_TO_ARRAY_CACHE as oe, FUNCTION_NAMES_DATE as se, FUNCTION_NAMES_LOOKUP as D, FUNCTION_NAMES_MATH as ce, FormulaCalculationSessionService as le, FormulaCalculationTriggerService as ue, FormulaDataModel as de, FormulaDataModel as fe, FormulaDependencyGenerator as pe, FormulaDependencyTree as me, FormulaDependencyTreeType as O, FormulaDependencyTreeVirtual as he, FormulaExecuteStageType as k, FormulaResultStatus as ge, FormulaUnitReferenceResolver as _e, IActiveDirtyManagerService as ve, IActiveDirtyManagerService as ye, ICalculateFormulaService as be, IDependencyManagerService as xe, IFormulaCurrentConfigService as Se, IFormulaDependencyGenerator as Ce, IFormulaExternalReferenceDataLoader as we, IFormulaRuntimeService as Te, IFormulaUnitReferenceResolver as Ee, ISuperTableService as De, ISuperTableService as Oe, Interpreter as ke, Lexer as Ae, LexerTreeBuilder as je, OtherFormulaMarkDirty as Me, RegisterOtherFormulaService as Ne, RemoveSuperTableMutation as Pe, SetFormulaCalculationResultMutation as Fe, SetFormulaCalculationStartMutation as Ie, SetFormulaCalculationStartMutation as Le, SetFormulaDataMutation as Re, SetSuperTableMutation as ze, SetTriggerFormulaCalculationStartMutation as Be, UniverFormulaEnginePlugin as Ve, deserializeRangeWithSheet as He, deserializeRangeWithSheetWithCache as Ue, generateAstNode as We, generateRandomDependencyTreeId as Ge, getAbsoluteRefTypeWitString as Ke, normalizeFormulaUnitName as A, refactorFormulaUnitQualifier as qe, sequenceNodeType as Je, serializeRangeWithSheet as Ye, serializeRangeWithSpreadsheet as Xe, splitTableStructuredRef as Ze } from "@univerjs/engine-formula";
import { IRPCChannelService as Qe, fromModule as $e, toModule as et } from "@univerjs/rpc";
import { UniverLicensePlugin as tt } from "@univerjs-pro/license";
import { j } from "./internal-glue.js";
let B = class extends a {
  constructor(e, t) {
    super(), this._externalReferenceModel = e, this._superTableService = t, j(this, `_units`, new Map()), j(this, `_pendingDirtyRanges`, []);
  }
  apply(e, t) {
    if (e.bindingSlot == null) return [];
    let n = e.bindingSlot,
      r = this._units.get(e.syntheticUnitId) ?? {
        hostUnitId: e.hostUnitId,
        bindingSlot: n,
        targetName: e.target.name,
        targetLiveUnitId: e.target.liveUnitId,
        targetUnitType: e.target.unitType,
        source: t.source,
        freshness: t.freshness,
        revision: t.revision,
        sheets: new Map()
      };
    r.revision != null && t.revision != null && r.revision !== t.revision && (this._queueDirty(this._unitRanges(e.syntheticUnitId, r)), r.sheets.clear()), r.targetName = e.target.name, r.targetLiveUnitId = e.target.liveUnitId, r.source = t.source, r.freshness = t.freshness, r.revision = t.revision, this._units.set(e.syntheticUnitId, r);
    let i = t.sheets.length > 0 ? t.sheets : this._createUnavailableSheets(e),
      a = [];
    for (let n of i) {
      let i = this._mergeSheet(r, n);
      this._writeCoverageMisses(e, t, i, n.coverage), a.push(...n.coverage.map(e => ({
        sheetId: n.sheetId,
        range: e
      })));
    }
    return this._registerTables(e.syntheticUnitId, e.hostUnitId, n, r), this._queueDirty(a.map(({
      sheetId: t,
      range: n
    }) => ({
      unitId: e.syntheticUnitId,
      sheetId: t,
      range: n
    }))), a;
  }
  materialize(e) {
    let t = e.allUnitData ?? {},
      n = e.unitSheetNameMap ?? {},
      r = e.unitNameMap ?? {};
    for (let [e, i] of this._units) {
      let a = t[e] ?? {},
        o = n[e] ?? {};
      for (let e of i.sheets.values()) a[e.sheetId] = {
        cellData: e.cellData,
        rowCount: e.rowCount,
        columnCount: e.columnCount,
        rowData: {},
        columnData: {}
      }, o[e.name] = e.sheetId;
      t[e] = a, n[e] = o, r[e] = {
        name: i.targetName,
        unitType: i.targetUnitType
      };
    }
    e.allUnitData = t, e.unitSheetNameMap = n, e.unitNameMap = r, e.unitStylesData = e.unitStylesData ?? {};
  }
  getCellState(e, t, n, r) {
    var i, a;
    let o = (i = this._units.get(e)) == null ? void 0 : i.sheets.get(t);
    return !o || !o.coverage.some(e => Pt(e, n, r)) ? {
      covered: !1,
      value: E.NA
    } : {
      covered: !0,
      value: ((a = o.cellData.getValue(n, r)) == null ? void 0 : a.v) ?? null
    };
  }
  isRangeCovered(e, t, n) {
    let r = this._units.get(e),
      i = Array.from((r == null ? void 0 : r.sheets.values()) ?? []).find(e => !t || e.sheetId === t || e.name.toLowerCase() === t.toLowerCase());
    if (!i) return !1;
    for (let e = n.startRow; e <= n.endRow; e++) for (let t = n.startColumn; t <= n.endColumn; t++) if (!i.coverage.some(n => Pt(n, e, t))) return !1;
    return !0;
  }
  enforceLimits(e, t) {
    let n = 0;
    for (; this._coveredCellCount() > e || this._estimatedBytes() > t;) {
      let e = this._oldestCoverage();
      if (!e) break;
      e.sheet.coverage.shift();
      for (let t = e.range.startRow; t <= e.range.endRow; t++) for (let n = e.range.startColumn; n <= e.range.endColumn; n++) e.sheet.coverage.some(e => Pt(e, t, n)) || e.sheet.cellData.realDeleteValue(t, n);
      e.sheet.coverage.length === 0 && e.unit.sheets.delete(e.sheet.sheetId), e.unit.sheets.size === 0 && this._units.delete(e.unitId), n++;
    }
    return n;
  }
  invalidateHost(e) {
    let t = [];
    for (let [n, r] of this._units) r.hostUnitId === e && (t.push(...this._unitRanges(n, r)), this._units.delete(n));
    return this._queueDirty(t), t;
  }
  invalidateSyntheticUnit(e) {
    let t = this._units.get(e),
      n = t ? this._unitRanges(e, t) : [];
    return this._units.delete(e), this._queueDirty(n), n;
  }
  invalidateSourceRange(e, t, n) {
    let r = [],
      i = e.toLowerCase(),
      a = t.toLowerCase();
    for (let [o, s] of this._units) if (s.targetLiveUnitId === e || s.targetName.toLowerCase() === i) for (let e of s.sheets.values()) {
      if (e.sheetId !== t && e.name.toLowerCase() !== a) continue;
      let i = e.coverage.map(e => It(e, n)).filter(e => e != null);
      if (i.length !== 0) {
        e.coverage = e.coverage.flatMap(e => Lt(e, n));
        for (let t of i) {
          for (let n = t.startRow; n <= t.endRow; n++) for (let r = t.startColumn; r <= t.endColumn; r++) e.cellData.realDeleteValue(n, r);
          r.push({
            unitId: o,
            sheetId: e.sheetId,
            range: t
          });
        }
      }
    }
    return this._queueDirty(r), r;
  }
  invalidateSourceMetadata(e) {
    let t = e.toLowerCase(),
      n = [];
    for (let [r, i] of this._units) (i.targetLiveUnitId === e || i.targetName.toLowerCase() === t) && (n.push(...this._unitRanges(r, i)), this._units.delete(r));
    return this._queueDirty(n), n;
  }
  drainDirtyRanges() {
    return this._pendingDirtyRanges.splice(0);
  }
  getUnitCount() {
    return this._units.size;
  }
  dispose() {
    super.dispose(), this._units.clear(), this._pendingDirtyRanges.length = 0;
  }
  _unitRanges(e, t) {
    return Array.from(t.sheets.values()).flatMap(t => t.coverage.map(n => ({
      unitId: e,
      sheetId: t.sheetId,
      range: n
    })));
  }
  _queueDirty(e) {
    for (let t of e) this._pendingDirtyRanges.some(e => e.unitId === t.unitId && e.sheetId === t.sheetId && Ft(e.range, t.range)) || this._pendingDirtyRanges.push(t);
  }
  _mergeSheet(e, t) {
    let n = e.sheets.get(t.sheetId) ?? {
      name: t.name,
      sheetId: t.sheetId,
      rowCount: t.rowCount,
      columnCount: t.columnCount,
      coverage: [],
      cellData: new f()
    };
    n.name = t.name, n.rowCount = Math.max(n.rowCount, t.rowCount), n.columnCount = Math.max(n.columnCount, t.columnCount), n.coverage.push(...t.coverage);
    for (let {
      row: e,
      column: r,
      cell: i
    } of t.cells) n.cellData.setValue(e, r, i);
    return e.sheets.set(n.sheetId, n), n;
  }
  _oldestCoverage() {
    for (let [e, t] of this._units) for (let n of t.sheets.values()) {
      let r = n.coverage[0];
      if (r) return {
        unitId: e,
        unit: t,
        sheet: n,
        range: r
      };
    }
  }
  _coveredCellCount() {
    let e = 0;
    for (let t of this._units.values()) for (let n of t.sheets.values()) for (let t of n.coverage) e += (t.endRow - t.startRow + 1) * (t.endColumn - t.startColumn + 1);
    return e;
  }
  _estimatedBytes() {
    let e = 0;
    for (let t of this._units.values()) for (let n of t.sheets.values()) e += JSON.stringify(n.cellData.getMatrix()).length;
    return e;
  }
  _writeCoverageMisses(e, n, r, i) {
    for (let a of e.ranges) if (!(!a.range || a.sheetId && a.sheetId !== r.sheetId) && !(a.sheetName && a.sheetName.toLowerCase() !== r.name.toLowerCase())) for (let e = a.range.startRow; e <= a.range.endRow; e++) for (let o = a.range.startColumn; o <= a.range.endColumn; o++) (n.error || !i.some(t => Pt(t, e, o))) && r.cellData.setValue(e, o, {
      v: E.NA,
      t: t.STRING
    });
  }
  _createUnavailableSheets(e) {
    return e.ranges.filter(e => !!e.range).map(t => ({
      name: t.sheetName ?? t.sheetId ?? `External`,
      sheetId: t.sheetId ?? Rt(e.bindingSlot ?? 0, t.sheetName ?? `External`),
      rowCount: t.range.endRow + 1,
      columnCount: t.range.endColumn + 1,
      coverage: [t.range],
      cells: []
    }));
  }
  _registerTables(e, t, n, r) {
    let i = this._externalReferenceModel.resolveBinding(t, String(n));
    if (i.status === `resolved`) for (let t of i.link.tables) {
      if (!t.range || !t.sheetName) continue;
      let n = Array.from(r.sheets.values()).find(e => {
        var n;
        return e.name.toLowerCase() === ((n = t.sheetName) == null ? void 0 : n.toLowerCase());
      });
      n && this._superTableService.registerTable(e, t.name, {
        sheetId: n.sheetId,
        titleMap: new Map(t.columns.map((e, t) => [e.name, t])),
        range: t.range,
        showHeader: t.showHeader
      });
    }
  }
};
function Pt(e, t, n) {
  return t >= e.startRow && t <= e.endRow && n >= e.startColumn && n <= e.endColumn;
}
function Ft(e, t) {
  return e.startRow === t.startRow && e.endRow === t.endRow && e.startColumn === t.startColumn && e.endColumn === t.endColumn;
}
function It(e, t) {
  let n = {
    startRow: Math.max(e.startRow, t.startRow),
    endRow: Math.min(e.endRow, t.endRow),
    startColumn: Math.max(e.startColumn, t.startColumn),
    endColumn: Math.min(e.endColumn, t.endColumn)
  };
  return n.startRow <= n.endRow && n.startColumn <= n.endColumn ? n : void 0;
}
function Lt(e, t) {
  let n = It(e, t);
  return n ? [{
    ...e,
    endRow: n.startRow - 1
  }, {
    ...e,
    startRow: n.endRow + 1
  }, {
    startRow: n.startRow,
    endRow: n.endRow,
    startColumn: e.startColumn,
    endColumn: n.startColumn - 1
  }, {
    startRow: n.startRow,
    endRow: n.endRow,
    startColumn: n.endColumn + 1,
    endColumn: e.endColumn
  }].filter(e => e.startRow <= e.endRow && e.startColumn <= e.endColumn) : [e];
}
function Rt(e, t) {
  return `external-sheet:${e}:${encodeURIComponent(t)}`;
}
export { B as ExternalReferenceOverlayModel };
