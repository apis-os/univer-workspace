import { AbsoluteRefType as e, CellValueType as t, CommandType as n, DEFAULT_NUMBER_FORMAT as r, DependentOn as i, Disposable as a, ICommandService as o, IConfigService as s, IResourceManagerService as c, IUndoRedoService as l, IUniverInstanceService as u, Inject as d, ObjectMatrix as f, RANGE_TYPE as p, Rectangle as m, Tools as h, UniverInstanceType as g, createIdentifier as _, generateRandomId as v, numfmt as y, regexp as b, requestImmediateMacroTask as x, toDisposable as S, touchDependencies as C } from "@univerjs/core";
import { AstTreeBuilder as w, BaseReferenceObject as ee, CELL_INVERTED_INDEX_CACHE as te, CalculateFormulaService as ne, DEFAULT_CYCLE_REFERENCE_COUNT as T, DEFAULT_INTERVAL_COUNT as re, DependencyManagerBaseService as ie, ENGINE_FORMULA_PLUGIN_CONFIG_KEY as ae, ErrorType as E, FORMULA_REF_TO_ARRAY_CACHE as oe, FUNCTION_NAMES_DATE as se, FUNCTION_NAMES_LOOKUP as D, FUNCTION_NAMES_MATH as ce, FormulaCalculationSessionService as le, FormulaCalculationTriggerService as ue, FormulaDataModel as de, FormulaDataModel as fe, FormulaDependencyGenerator as pe, FormulaDependencyTree as me, FormulaDependencyTreeType as O, FormulaDependencyTreeVirtual as he, FormulaExecuteStageType as k, FormulaResultStatus as ge, FormulaUnitReferenceResolver as _e, IActiveDirtyManagerService as ve, IActiveDirtyManagerService as ye, ICalculateFormulaService as be, IDependencyManagerService as xe, IFormulaCurrentConfigService as Se, IFormulaDependencyGenerator as Ce, IFormulaExternalReferenceDataLoader as we, IFormulaRuntimeService as Te, IFormulaUnitReferenceResolver as Ee, ISuperTableService as De, ISuperTableService as Oe, Interpreter as ke, Lexer as Ae, LexerTreeBuilder as je, OtherFormulaMarkDirty as Me, RegisterOtherFormulaService as Ne, RemoveSuperTableMutation as Pe, SetFormulaCalculationResultMutation as Fe, SetFormulaCalculationStartMutation as Ie, SetFormulaCalculationStartMutation as Le, SetFormulaDataMutation as Re, SetSuperTableMutation as ze, SetTriggerFormulaCalculationStartMutation as Be, UniverFormulaEnginePlugin as Ve, deserializeRangeWithSheet as He, deserializeRangeWithSheetWithCache as Ue, generateAstNode as We, generateRandomDependencyTreeId as Ge, getAbsoluteRefTypeWitString as Ke, normalizeFormulaUnitName as A, refactorFormulaUnitQualifier as qe, sequenceNodeType as Je, serializeRangeWithSheet as Ye, serializeRangeWithSpreadsheet as Xe, splitTableStructuredRef as Ze } from "@univerjs/engine-formula";
import { IRPCChannelService as Qe, fromModule as $e, toModule as et } from "@univerjs/rpc";
import { UniverLicensePlugin as tt } from "@univerjs-pro/license";
import { br } from "./engine-formula-formula-result-cell.js";
import { Tr } from "./internal-glue.js";
function yr(e) {
  var n, i, a;
  let o = br(e.result),
    s = o ?? wr(e.lastValue),
    c = o ? `calculated` : `persisted`,
    l = o == null && e.lastValue != null,
    u = ((n = e.numberFormat) == null ? void 0 : n.pattern) ?? Tr(o) ?? ((i = e.lastValue) == null ? void 0 : i.pattern) ?? r,
    d = s == null ? void 0 : s.v,
    f = d == null || (a = y.formatColor(u, d, {
      throws: !1
    })) == null ? void 0 : a.toString();
  return d == null ? {
    text: ``,
    pattern: u,
    cell: s,
    source: c,
    stale: l
  } : (s == null ? void 0 : s.t) === t.BOOLEAN ? {
    text: d ? `TRUE` : `FALSE`,
    color: f,
    pattern: u,
    cell: s,
    source: c,
    stale: l
  } : (s == null ? void 0 : s.t) === t.NUMBER ? {
    text: y.format(u, d, {
      throws: !1
    }),
    color: f,
    pattern: u,
    cell: s,
    source: c,
    stale: l
  } : {
    text: String(d),
    color: f,
    pattern: u,
    cell: s,
    source: c,
    stale: l
  };
}
function wr(e) {
  if (e) return {
    v: e.v,
    ...(e.t == null ? null : {
      t: e.t
    })
  };
}
export { yr as resolveFormulaResultPresentation };
