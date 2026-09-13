import { FormulaCacheEligibilityService, FormulaLastValuePersistenceService, HostExternalReferenceModel, UniverProFormulaEnginePlugin, buildUpsertHostExternalReferenceMutations, collectFormulaExternalReferenceQualifiers, getScalarFormulaResultCell, resolveFormulaResultPresentation, resolveHostFormulaExternalReferences, toFormulaLastValue } from "@univerjs-pro/engine-formula";
import { CellValueType, CommandType, CustomRangeType, DataStreamTreeTokenType, DependentOn, Disposable, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, JSONX, Plugin, TextX, Tools, UniverInstanceType, generateRandomId, getBodySliceForTextXAction, getCustomRangeInterval, getParagraphContentStartOffset, getRichTextEditPath, merge, shiftExclusiveRangeOnDelete, shiftExclusiveRangeOnInsert, shiftInclusiveRangeOnDelete, shiftInclusiveRangeOnInsert, touchDependencies } from "@univerjs/core";
import { DOC_SELECTION_OPTION_PRESERVE_CARET, DocSelectionManagerService, DocTextResolverService, RichTextEditingMutation, UniverDocsPlugin } from "@univerjs/docs";
import { FormulaResultStatus, LexerTreeBuilder, OtherFormulaBizType, RegisterOtherFormulaService } from "@univerjs/engine-formula";
import { Subject } from "rxjs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { N } from "./internal-core-endo.js";
let Y = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46238, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241) {
    super(), this._instanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46238, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239, this._model = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240, this._service = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241, N(this, "_pendingUnitIds", new Set()), N(this, "_syncScheduled", false), N(this, "_isDisposed", false), this._instanceService["getAllUnitsForType"](UniverInstanceType.UNIVER_DOC).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621 => this._service["syncUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621)), this.disposeWithMe(this._model["change$"].subscribe(({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622
    }) => this._syncUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622))), this.disposeWithMe(this._instanceService["unitAdded$"].subscribe(({
      unit: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623
    }) => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623.type === UniverInstanceType.UNIVER_DOC && this._queueSync(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623.getUnitId());
    })), this.disposeWithMe(this._instanceService["unitDisposed$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625 => {
      this._service["unregisterUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625.getUnitId());
    })), this.disposeWithMe(this._commandService["onCommandExecuted"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627 => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627.id === RichTextEditingMutation.id && wt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627.params)) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627.params;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464.segmentId || this._syncUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464.unitId);
      }
    }));
  }
  dispose() {
    this._isDisposed = true, super.dispose();
  }
  _queueSync(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246) {
    this._pendingUnitIds["add"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246), !this._syncScheduled && (this._syncScheduled = true, queueMicrotask(() => {
      if (this._syncScheduled = false, this._isDisposed) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629 = Array.from(this._pendingUnitIds);
      this._pendingUnitIds["clear"](), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465 => this._syncUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465));
    }));
  }
  _syncUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249 = this._instanceService["getUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248, UniverInstanceType.UNIVER_DOC);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249 && this._service["syncUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249);
  }
};
function wt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46805) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46805 == "object" && !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46805 && "unitId" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46805 && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46805.unitId == "string" && (!("segmentId" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46805) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46805.segmentId === undefined || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46805.segmentId == "string");
}
export { Y as DocFormulaLifecycleController };
