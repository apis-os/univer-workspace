import { AbsoluteRefType as e, CellValueType as t, CommandType as n, DEFAULT_NUMBER_FORMAT as r, DependentOn as i, Disposable as a, ICommandService as o, IConfigService as s, IResourceManagerService as c, IUndoRedoService as l, IUniverInstanceService as u, Inject as d, ObjectMatrix as f, RANGE_TYPE as p, Rectangle as m, Tools as h, UniverInstanceType as g, createIdentifier as _, generateRandomId as v, numfmt as y, regexp as b, requestImmediateMacroTask as x, toDisposable as S, touchDependencies as C } from "@univerjs/core";
import { AstTreeBuilder as w, BaseReferenceObject as ee, CELL_INVERTED_INDEX_CACHE as te, CalculateFormulaService as ne, DEFAULT_CYCLE_REFERENCE_COUNT as T, DEFAULT_INTERVAL_COUNT as re, DependencyManagerBaseService as ie, ENGINE_FORMULA_PLUGIN_CONFIG_KEY as ae, ErrorType as E, FORMULA_REF_TO_ARRAY_CACHE as oe, FUNCTION_NAMES_DATE as se, FUNCTION_NAMES_LOOKUP as D, FUNCTION_NAMES_MATH as ce, FormulaCalculationSessionService as le, FormulaCalculationTriggerService as ue, FormulaDataModel as de, FormulaDataModel as fe, FormulaDependencyGenerator as pe, FormulaDependencyTree as me, FormulaDependencyTreeType as O, FormulaDependencyTreeVirtual as he, FormulaExecuteStageType as k, FormulaResultStatus as ge, FormulaUnitReferenceResolver as _e, IActiveDirtyManagerService as ve, IActiveDirtyManagerService as ye, ICalculateFormulaService as be, IDependencyManagerService as xe, IFormulaCurrentConfigService as Se, IFormulaDependencyGenerator as Ce, IFormulaExternalReferenceDataLoader as we, IFormulaRuntimeService as Te, IFormulaUnitReferenceResolver as Ee, ISuperTableService as De, ISuperTableService as Oe, Interpreter as ke, Lexer as Ae, LexerTreeBuilder as je, OtherFormulaMarkDirty as Me, RegisterOtherFormulaService as Ne, RemoveSuperTableMutation as Pe, SetFormulaCalculationResultMutation as Fe, SetFormulaCalculationStartMutation as Ie, SetFormulaCalculationStartMutation as Le, SetFormulaDataMutation as Re, SetSuperTableMutation as ze, SetTriggerFormulaCalculationStartMutation as Be, UniverFormulaEnginePlugin as Ve, deserializeRangeWithSheet as He, deserializeRangeWithSheetWithCache as Ue, generateAstNode as We, generateRandomDependencyTreeId as Ge, getAbsoluteRefTypeWitString as Ke, normalizeFormulaUnitName as A, refactorFormulaUnitQualifier as qe, sequenceNodeType as Je, serializeRangeWithSheet as Ye, serializeRangeWithSpreadsheet as Xe, splitTableStructuredRef as Ze } from "@univerjs/engine-formula";
import { IRPCChannelService as Qe, fromModule as $e, toModule as et } from "@univerjs/rpc";
import { UniverLicensePlugin as tt } from "@univerjs-pro/license";
import { N } from "./engine-formula-host-external-reference-model.js";
import { lt, st } from "./internal-glue.js";
import { P } from "./engine-formula-upsert-host-external-reference.js";
import { M } from "./engine-formula-host-external-reference-qualifier.js";
function gt(e, t, n) {
  if (!t) return null;
  let r = _t(t, n);
  if (!r) return null;
  if (r.size === 0) return {};
  let i = e.get(N);
  if (i.getLoadError(t)) return null;
  let a = i.get(t) ?? st(),
    o = h.deepClone(a),
    s = !1;
  for (let e of r.values()) {
    let n = vt(i, t, o, e);
    if (n == null) return null;
    s ||= n;
  }
  return s ? {
    redoMutation: {
      id: P.id,
      params: {
        unitId: t,
        resource: o
      }
    },
    undoMutation: {
      id: P.id,
      params: {
        unitId: t,
        resource: a
      }
    }
  } : {};
}
function _t(e, t) {
  let n = new Map();
  for (let i of t) {
    var r;
    let t = {
      qualifier: (r = i.qualifier) == null ? void 0 : r.trim(),
      sourceUnitId: i.sourceUnitId,
      sourceUnitType: i.sourceUnitType,
      referenceId: i.referenceId
    };
    if (!lt(t) || t.sourceUnitId === e) return null;
    let a = M(t.qualifier),
      o = n.get(a);
    if (o && (o.sourceUnitId !== t.sourceUnitId || o.sourceUnitType !== t.sourceUnitType || o.referenceId !== t.referenceId)) return null;
    n.set(a, t);
  }
  return n;
}
function vt(e, t, n, r) {
  let i = e.resolveBinding(t, r.qualifier);
  if (i.status === `ambiguous` || i.status === `resolved` && r.referenceId != null && r.referenceId !== i.referenceId) return null;
  if (i.status === `resolved` && i.reference.sourceUnitId === r.sourceUnitId && i.reference.sourceUnitType === r.sourceUnitType && i.reference.qualifier === r.qualifier) return !1;
  let a = r.referenceId ?? (i.status === `resolved` ? i.referenceId : v());
  return n.references[a] = {
    qualifier: r.qualifier,
    sourceUnitId: r.sourceUnitId,
    sourceUnitType: r.sourceUnitType
  }, !0;
}
export { gt as buildUpsertHostExternalReferenceMutations };
