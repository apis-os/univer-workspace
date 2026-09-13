import { AbsoluteRefType as e, CellValueType as t, CommandType as n, DEFAULT_NUMBER_FORMAT as r, DependentOn as i, Disposable as a, ICommandService as o, IConfigService as s, IResourceManagerService as c, IUndoRedoService as l, IUniverInstanceService as u, Inject as d, ObjectMatrix as f, RANGE_TYPE as p, Rectangle as m, Tools as h, UniverInstanceType as g, createIdentifier as _, generateRandomId as v, numfmt as y, regexp as b, requestImmediateMacroTask as x, toDisposable as S, touchDependencies as C } from "@univerjs/core";
import { AstTreeBuilder as w, BaseReferenceObject as ee, CELL_INVERTED_INDEX_CACHE as te, CalculateFormulaService as ne, DEFAULT_CYCLE_REFERENCE_COUNT as T, DEFAULT_INTERVAL_COUNT as re, DependencyManagerBaseService as ie, ENGINE_FORMULA_PLUGIN_CONFIG_KEY as ae, ErrorType as E, FORMULA_REF_TO_ARRAY_CACHE as oe, FUNCTION_NAMES_DATE as se, FUNCTION_NAMES_LOOKUP as D, FUNCTION_NAMES_MATH as ce, FormulaCalculationSessionService as le, FormulaCalculationTriggerService as ue, FormulaDataModel as de, FormulaDataModel as fe, FormulaDependencyGenerator as pe, FormulaDependencyTree as me, FormulaDependencyTreeType as O, FormulaDependencyTreeVirtual as he, FormulaExecuteStageType as k, FormulaResultStatus as ge, FormulaUnitReferenceResolver as _e, IActiveDirtyManagerService as ve, IActiveDirtyManagerService as ye, ICalculateFormulaService as be, IDependencyManagerService as xe, IFormulaCurrentConfigService as Se, IFormulaDependencyGenerator as Ce, IFormulaExternalReferenceDataLoader as we, IFormulaRuntimeService as Te, IFormulaUnitReferenceResolver as Ee, ISuperTableService as De, ISuperTableService as Oe, Interpreter as ke, Lexer as Ae, LexerTreeBuilder as je, OtherFormulaMarkDirty as Me, RegisterOtherFormulaService as Ne, RemoveSuperTableMutation as Pe, SetFormulaCalculationResultMutation as Fe, SetFormulaCalculationStartMutation as Ie, SetFormulaCalculationStartMutation as Le, SetFormulaDataMutation as Re, SetSuperTableMutation as ze, SetTriggerFormulaCalculationStartMutation as Be, UniverFormulaEnginePlugin as Ve, deserializeRangeWithSheet as He, deserializeRangeWithSheetWithCache as Ue, generateAstNode as We, generateRandomDependencyTreeId as Ge, getAbsoluteRefTypeWitString as Ke, normalizeFormulaUnitName as A, refactorFormulaUnitQualifier as qe, sequenceNodeType as Je, serializeRangeWithSheet as Ye, serializeRangeWithSpreadsheet as Xe, splitTableStructuredRef as Ze } from "@univerjs/engine-formula";
import { IRPCChannelService as Qe, fromModule as $e, toModule as et } from "@univerjs/rpc";
import { UniverLicensePlugin as tt } from "@univerjs-pro/license";
import { j } from "./internal-glue.js";
let Et = class {
  constructor(e) {
    this._externalReferenceModel = e, j(this, `id`, `ooxml-external-cache`), j(this, `priority`, -100);
  }
  canRead(e) {
    var t;
    let n = this._externalReferenceModel.resolveBinding(e.hostUnitId, String(e.bindingSlot));
    return n.status === `resolved` && ((t = n.link.cache) == null ? void 0 : t.complete) === !0 && (e.requireFresh === !1 || n.link.cache.freshness === `fresh`);
  }
  async readData(e) {
    var t;
    let n = this._externalReferenceModel.resolveBinding(e.hostUnitId, String(e.bindingSlot));
    if (n.status !== `resolved` || ((t = n.link.cache) == null ? void 0 : t.complete) !== !0 || e.requireFresh !== !1 && n.link.cache.freshness !== `fresh`) return;
    let r = n.link.cache,
      i = [];
    for (let t of e.ranges) {
      let e = r.sheets.find(e => t.sheetId && e.sheetId === t.sheetId || t.sheetName && e.name.toLowerCase() === t.sheetName.toLowerCase());
      if (!e || t.range && !Dt(t.range, e.coverage)) continue;
      let n = t.range ? [t.range] : e.coverage;
      i.push({
        name: e.name,
        sheetId: e.sheetId ?? e.name,
        rowCount: e.rowCount ?? Ot(n, `endRow`) + 1,
        columnCount: e.columnCount ?? Ot(n, `endColumn`) + 1,
        coverage: n,
        cells: e.cells.map(e => ({
          row: e.row,
          column: e.column,
          cell: {
            v: e.value,
            t: e.valueType ?? kt(e.value)
          }
        }))
      });
    }
    if (i.length !== 0) return {
      requestId: e.requestId,
      calculationId: e.calculationId,
      source: `ooxml-cache`,
      freshness: r.freshness,
      revision: r.revision,
      sheets: i
    };
  }
};
function Dt(e, t) {
  for (let n = e.startRow; n <= e.endRow; n++) for (let r = e.startColumn; r <= e.endColumn; r++) if (!t.some(e => n >= e.startRow && n <= e.endRow && r >= e.startColumn && r <= e.endColumn)) return !1;
  return !0;
}
function Ot(e, t) {
  return e.reduce((e, n) => Math.max(e, n[t]), 0);
}
function kt(e) {
  return typeof e == `number` ? t.NUMBER : typeof e == `boolean` ? t.BOOLEAN : t.STRING;
}
export { Et as ExternalCacheReferenceDataProvider };
