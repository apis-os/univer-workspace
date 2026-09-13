import { AbsoluteRefType as e, CellValueType as t, CommandType as n, DEFAULT_NUMBER_FORMAT as r, DependentOn as i, Disposable as a, ICommandService as o, IConfigService as s, IResourceManagerService as c, IUndoRedoService as l, IUniverInstanceService as u, Inject as d, ObjectMatrix as f, RANGE_TYPE as p, Rectangle as m, Tools as h, UniverInstanceType as g, createIdentifier as _, generateRandomId as v, numfmt as y, regexp as b, requestImmediateMacroTask as x, toDisposable as S, touchDependencies as C } from "@univerjs/core";
import { AstTreeBuilder as w, BaseReferenceObject as ee, CELL_INVERTED_INDEX_CACHE as te, CalculateFormulaService as ne, DEFAULT_CYCLE_REFERENCE_COUNT as T, DEFAULT_INTERVAL_COUNT as re, DependencyManagerBaseService as ie, ENGINE_FORMULA_PLUGIN_CONFIG_KEY as ae, ErrorType as E, FORMULA_REF_TO_ARRAY_CACHE as oe, FUNCTION_NAMES_DATE as se, FUNCTION_NAMES_LOOKUP as D, FUNCTION_NAMES_MATH as ce, FormulaCalculationSessionService as le, FormulaCalculationTriggerService as ue, FormulaDataModel as de, FormulaDataModel as fe, FormulaDependencyGenerator as pe, FormulaDependencyTree as me, FormulaDependencyTreeType as O, FormulaDependencyTreeVirtual as he, FormulaExecuteStageType as k, FormulaResultStatus as ge, FormulaUnitReferenceResolver as _e, IActiveDirtyManagerService as ve, IActiveDirtyManagerService as ye, ICalculateFormulaService as be, IDependencyManagerService as xe, IFormulaCurrentConfigService as Se, IFormulaDependencyGenerator as Ce, IFormulaExternalReferenceDataLoader as we, IFormulaRuntimeService as Te, IFormulaUnitReferenceResolver as Ee, ISuperTableService as De, ISuperTableService as Oe, Interpreter as ke, Lexer as Ae, LexerTreeBuilder as je, OtherFormulaMarkDirty as Me, RegisterOtherFormulaService as Ne, RemoveSuperTableMutation as Pe, SetFormulaCalculationResultMutation as Fe, SetFormulaCalculationStartMutation as Ie, SetFormulaCalculationStartMutation as Le, SetFormulaDataMutation as Re, SetSuperTableMutation as ze, SetTriggerFormulaCalculationStartMutation as Be, UniverFormulaEnginePlugin as Ve, deserializeRangeWithSheet as He, deserializeRangeWithSheetWithCache as Ue, generateAstNode as We, generateRandomDependencyTreeId as Ge, getAbsoluteRefTypeWitString as Ke, normalizeFormulaUnitName as A, refactorFormulaUnitQualifier as qe, sequenceNodeType as Je, serializeRangeWithSheet as Ye, serializeRangeWithSpreadsheet as Xe, splitTableStructuredRef as Ze } from "@univerjs/engine-formula";
import { IRPCChannelService as Qe, fromModule as $e, toModule as et } from "@univerjs/rpc";
import { UniverLicensePlugin as tt } from "@univerjs-pro/license";
import { j } from "./internal-glue.js";
import { F } from "./engine-formula-external-synthetic-unit-id.js";
let zt = class extends a {
  constructor(e, t, n) {
    super(), this._univerInstanceService = e, j(this, `_names`, new Map());
    for (let e of [g.UNIVER_SHEET, g.UNIVER_BASE]) this._univerInstanceService.getAllUnitsForType(e).forEach(e => {
      n.invalidateSourceMetadata(e.getUnitId()), this._watch(e, t, n);
    }), this.disposeWithMe(this._univerInstanceService.getTypeOfUnitAdded$(e).subscribe(({
      unit: e
    }) => {
      n.invalidateSourceMetadata(e.getUnitId()), this._watch(e, t, n);
    })), this.disposeWithMe(this._univerInstanceService.getTypeOfUnitDisposed$(e).subscribe(e => {
      n.invalidateSourceMetadata(e.getUnitId());
      let t = this._names.get(e.getUnitId());
      t && n.invalidateSourceMetadata(t), this._names.delete(e.getUnitId());
    }));
  }
  _watch(e, t, n) {
    let r = e.getUnitId();
    this.disposeWithMe(e.name$.subscribe(e => {
      let i = this._names.get(r);
      if (this._names.set(r, e), i == null) {
        n.invalidateSourceMetadata(e);
        return;
      }
      if (i !== e) {
        n.invalidateSourceMetadata(r), n.invalidateSourceMetadata(i);
        for (let a of t.renameLiveTarget(r, i, e)) n.invalidateSyntheticUnit(F(a.hostUnitId, a.slot));
      }
    }));
  }
};
export { zt as ExternalReferenceRenameController };
