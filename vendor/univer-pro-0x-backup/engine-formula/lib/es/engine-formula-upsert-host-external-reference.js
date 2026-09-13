import { AbsoluteRefType as e, CellValueType as t, CommandType as n, DEFAULT_NUMBER_FORMAT as r, DependentOn as i, Disposable as a, ICommandService as o, IConfigService as s, IResourceManagerService as c, IUndoRedoService as l, IUniverInstanceService as u, Inject as d, ObjectMatrix as f, RANGE_TYPE as p, Rectangle as m, Tools as h, UniverInstanceType as g, createIdentifier as _, generateRandomId as v, numfmt as y, regexp as b, requestImmediateMacroTask as x, toDisposable as S, touchDependencies as C } from "@univerjs/core";
import { AstTreeBuilder as w, BaseReferenceObject as ee, CELL_INVERTED_INDEX_CACHE as te, CalculateFormulaService as ne, DEFAULT_CYCLE_REFERENCE_COUNT as T, DEFAULT_INTERVAL_COUNT as re, DependencyManagerBaseService as ie, ENGINE_FORMULA_PLUGIN_CONFIG_KEY as ae, ErrorType as E, FORMULA_REF_TO_ARRAY_CACHE as oe, FUNCTION_NAMES_DATE as se, FUNCTION_NAMES_LOOKUP as D, FUNCTION_NAMES_MATH as ce, FormulaCalculationSessionService as le, FormulaCalculationTriggerService as ue, FormulaDataModel as de, FormulaDataModel as fe, FormulaDependencyGenerator as pe, FormulaDependencyTree as me, FormulaDependencyTreeType as O, FormulaDependencyTreeVirtual as he, FormulaExecuteStageType as k, FormulaResultStatus as ge, FormulaUnitReferenceResolver as _e, IActiveDirtyManagerService as ve, IActiveDirtyManagerService as ye, ICalculateFormulaService as be, IDependencyManagerService as xe, IFormulaCurrentConfigService as Se, IFormulaDependencyGenerator as Ce, IFormulaExternalReferenceDataLoader as we, IFormulaRuntimeService as Te, IFormulaUnitReferenceResolver as Ee, ISuperTableService as De, ISuperTableService as Oe, Interpreter as ke, Lexer as Ae, LexerTreeBuilder as je, OtherFormulaMarkDirty as Me, RegisterOtherFormulaService as Ne, RemoveSuperTableMutation as Pe, SetFormulaCalculationResultMutation as Fe, SetFormulaCalculationStartMutation as Ie, SetFormulaCalculationStartMutation as Le, SetFormulaDataMutation as Re, SetSuperTableMutation as ze, SetTriggerFormulaCalculationStartMutation as Be, UniverFormulaEnginePlugin as Ve, deserializeRangeWithSheet as He, deserializeRangeWithSheetWithCache as Ue, generateAstNode as We, generateRandomDependencyTreeId as Ge, getAbsoluteRefTypeWitString as Ke, normalizeFormulaUnitName as A, refactorFormulaUnitQualifier as qe, sequenceNodeType as Je, serializeRangeWithSheet as Ye, serializeRangeWithSpreadsheet as Xe, splitTableStructuredRef as Ze } from "@univerjs/engine-formula";
import { IRPCChannelService as Qe, fromModule as $e, toModule as et } from "@univerjs/rpc";
import { UniverLicensePlugin as tt } from "@univerjs-pro/license";
import { N } from "./engine-formula-host-external-reference-model.js";
import { st } from "./internal-glue.js";
import { gt } from "./engine-formula-upsert-host-external-reference-mutations.js";
const P = {
    id: `formula.mutation.set-host-external-reference`,
    type: n.MUTATION,
    handler: (e, t) => t ? e.get(N).set(t.unitId, t.resource) : !1
  },
  dt = {
    id: `formula.command.upsert-host-external-reference`,
    type: n.COMMAND,
    handler: (e, t) => ht(e, t == null ? void 0 : t.unitId, t ? [{
      qualifier: t.qualifier,
      sourceUnitId: t.sourceUnitId,
      sourceUnitType: t.sourceUnitType,
      referenceId: t.referenceId
    }] : [])
  },
  ft = {
    id: `formula.command.upsert-host-external-references`,
    type: n.COMMAND,
    handler: (e, t) => ht(e, t == null ? void 0 : t.unitId, (t == null ? void 0 : t.references) ?? [])
  },
  pt = {
    id: `formula.command.remove-host-external-reference`,
    type: n.COMMAND,
    handler: (e, t) => {
      if (!(t != null && t.unitId) || !t.referenceId && !t.qualifier) return !1;
      let n = e.get(N);
      if (n.getLoadError(t.unitId)) return !1;
      let r = n.get(t.unitId) ?? st(),
        i = t.referenceId ?? mt(n, t.unitId, t.qualifier);
      if (!i || !r.references[i]) return !1;
      let a = h.deepClone(r);
      return delete a.references[i], yt(e, t.unitId, r, a);
    }
  };
function mt(e, t, n) {
  let r = e.resolveBinding(t, n);
  return r.status === `resolved` ? r.referenceId : void 0;
}
function ht(e, t, n) {
  if (!t) return !1;
  let r = gt(e, t, n);
  return r ? !r.redoMutation || !r.undoMutation ? !0 : e.get(o).syncExecuteCommand(r.redoMutation.id, r.redoMutation.params) ? (e.get(l).pushUndoRedo({
    unitID: t,
    undoMutations: [r.undoMutation],
    redoMutations: [r.redoMutation]
  }), !0) : !1 : !1;
}
function yt(e, t, n, r) {
  return e.get(o).syncExecuteCommand(P.id, {
    unitId: t,
    resource: r
  }) ? (e.get(l).pushUndoRedo({
    unitID: t,
    undoMutations: [{
      id: P.id,
      params: {
        unitId: t,
        resource: n
      }
    }],
    redoMutations: [{
      id: P.id,
      params: {
        unitId: t,
        resource: r
      }
    }]
  }), !0) : !1;
}
export { dt as UpsertHostExternalReferenceCommand, ft as UpsertHostExternalReferencesCommand, pt as RemoveHostExternalReferenceCommand };
export { P };
