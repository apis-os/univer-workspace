import { AbsoluteRefType as e, CellValueType as t, CommandType as n, DEFAULT_NUMBER_FORMAT as r, DependentOn as i, Disposable as a, ICommandService as o, IConfigService as s, IResourceManagerService as c, IUndoRedoService as l, IUniverInstanceService as u, Inject as d, ObjectMatrix as f, RANGE_TYPE as p, Rectangle as m, Tools as h, UniverInstanceType as g, createIdentifier as _, generateRandomId as v, numfmt as y, regexp as b, requestImmediateMacroTask as x, toDisposable as S, touchDependencies as C } from "@univerjs/core";
import { AstTreeBuilder as w, BaseReferenceObject as ee, CELL_INVERTED_INDEX_CACHE as te, CalculateFormulaService as ne, DEFAULT_CYCLE_REFERENCE_COUNT as T, DEFAULT_INTERVAL_COUNT as re, DependencyManagerBaseService as ie, ENGINE_FORMULA_PLUGIN_CONFIG_KEY as ae, ErrorType as E, FORMULA_REF_TO_ARRAY_CACHE as oe, FUNCTION_NAMES_DATE as se, FUNCTION_NAMES_LOOKUP as D, FUNCTION_NAMES_MATH as ce, FormulaCalculationSessionService as le, FormulaCalculationTriggerService as ue, FormulaDataModel as de, FormulaDataModel as fe, FormulaDependencyGenerator as pe, FormulaDependencyTree as me, FormulaDependencyTreeType as O, FormulaDependencyTreeVirtual as he, FormulaExecuteStageType as k, FormulaResultStatus as ge, FormulaUnitReferenceResolver as _e, IActiveDirtyManagerService as ve, IActiveDirtyManagerService as ye, ICalculateFormulaService as be, IDependencyManagerService as xe, IFormulaCurrentConfigService as Se, IFormulaDependencyGenerator as Ce, IFormulaExternalReferenceDataLoader as we, IFormulaRuntimeService as Te, IFormulaUnitReferenceResolver as Ee, ISuperTableService as De, ISuperTableService as Oe, Interpreter as ke, Lexer as Ae, LexerTreeBuilder as je, OtherFormulaMarkDirty as Me, RegisterOtherFormulaService as Ne, RemoveSuperTableMutation as Pe, SetFormulaCalculationResultMutation as Fe, SetFormulaCalculationStartMutation as Ie, SetFormulaCalculationStartMutation as Le, SetFormulaDataMutation as Re, SetSuperTableMutation as ze, SetTriggerFormulaCalculationStartMutation as Be, UniverFormulaEnginePlugin as Ve, deserializeRangeWithSheet as He, deserializeRangeWithSheetWithCache as Ue, generateAstNode as We, generateRandomDependencyTreeId as Ge, getAbsoluteRefTypeWitString as Ke, normalizeFormulaUnitName as A, refactorFormulaUnitQualifier as qe, sequenceNodeType as Je, serializeRangeWithSheet as Ye, serializeRangeWithSpreadsheet as Xe, splitTableStructuredRef as Ze } from "@univerjs/engine-formula";
import { IRPCChannelService as Qe, fromModule as $e, toModule as et } from "@univerjs/rpc";
import { UniverLicensePlugin as tt } from "@univerjs-pro/license";
import { F } from "./engine-formula-external-synthetic-unit-id.js";
let qn = class extends _e {
  constructor(e, t) {
    super(e), this._externalReferenceModel = t;
  }
  resolve(e) {
    if (/^[1-9]\d*$/.test(e.qualifier)) {
      let t = this._externalReferenceModel.resolveBinding(e.hostUnitId, e.qualifier);
      if (t.status !== `resolved`) return E.REF;
      let {
        link: n
      } = t;
      if (e.referenceKind === `a1` && n.target.unitType === g.UNIVER_BASE) return E.REF;
      if (n.target.liveUnitId) {
        let t = super.resolve({
          ...e,
          qualifier: n.target.liveUnitId
        });
        if (typeof t != `string`) return t;
      }
      let r = super.resolve({
        ...e,
        qualifier: n.target.name
      });
      return typeof r != `string` && (r.unitType == null || r.unitType === n.target.unitType) ? r : {
        unitId: F(e.hostUnitId, n.slot),
        unitType: n.target.unitType,
        externalReference: {
          kind: `ooxml`,
          qualifier: e.qualifier,
          slot: n.slot
        }
      };
    }
    let t = this._currentConfigService.getExternalReferences()[e.hostUnitId],
      n = Object.entries((t == null ? void 0 : t.references) ?? {}),
      r = e.qualifier.toLowerCase(),
      i = n.filter(([, e]) => e.qualifier.toLowerCase() === r),
      a = i.length > 0 ? i : n.filter(([, t]) => A(t.qualifier) === A(e.qualifier));
    if (a.length > 1) return E.REF;
    if (a.length === 1) {
      let [t, n] = a[0];
      return e.referenceKind === `a1` && n.sourceUnitType === g.UNIVER_BASE ? E.REF : {
        unitId: n.sourceUnitId,
        unitType: n.sourceUnitType,
        externalReference: {
          kind: `host`,
          qualifier: e.qualifier,
          referenceId: t
        }
      };
    }
    return super.resolve(e);
  }
};
export { qn as ExternalFormulaUnitReferenceResolver };
