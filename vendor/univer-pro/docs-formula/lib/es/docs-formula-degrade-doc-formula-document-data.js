import { FormulaCacheEligibilityService, FormulaLastValuePersistenceService, HostExternalReferenceModel, UniverProFormulaEnginePlugin, buildUpsertHostExternalReferenceMutations, collectFormulaExternalReferenceQualifiers, getScalarFormulaResultCell, resolveFormulaResultPresentation, resolveHostFormulaExternalReferences, toFormulaLastValue } from "@univerjs-pro/engine-formula";
import { CellValueType, CommandType, CustomRangeType, DataStreamTreeTokenType, DependentOn, Disposable, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, JSONX, Plugin, TextX, Tools, UniverInstanceType, generateRandomId, getBodySliceForTextXAction, getCustomRangeInterval, getParagraphContentStartOffset, getRichTextEditPath, merge, shiftExclusiveRangeOnDelete, shiftExclusiveRangeOnInsert, shiftInclusiveRangeOnDelete, shiftInclusiveRangeOnInsert, touchDependencies } from "@univerjs/core";
import { DOC_SELECTION_OPTION_PRESERVE_CARET, DocSelectionManagerService, DocTextResolverService, RichTextEditingMutation, UniverDocsPlugin } from "@univerjs/docs";
import { FormulaResultStatus, LexerTreeBuilder, OtherFormulaBizType, RegisterOtherFormulaService } from "@univerjs/engine-formula";
import { Subject } from "rxjs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { Ve } from "./internal-core-endo.js";
import { w } from "./docs-formula-doc-formula-range.js";
import { y } from "./docs-formula-doc-formula-plugin.js";
import { x } from "./docs-formula-doc-formula-resource.js";
function Ot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46809;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46810 = kt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46811 = Ve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807, (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.body) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808.customRanges) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808.filter(w)) ?? []).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292 => ({
      rangeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292.rangeId,
      text: At(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46810 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46810.formulas[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292.rangeId])
    })));
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46811.resources = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46809 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46811.resources) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46809.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293.name !== y), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46811;
}
function kt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46817) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46818;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46819 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46818 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46817.resources) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46818 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46818.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294.name === "DOC_FORMULA_PLUGIN")) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46818.data;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46819) try {
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2 = JSON.parse(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46819);
    return x(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2) ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2 : undefined;
  } catch {
    return;
  }
}
function At(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46823) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46823 ? resolveFormulaResultPresentation({
    lastValue: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46823.lastValue,
    numberFormat: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46823.numberFormat
  }).text : "";
}
export { Ot as degradeDocFormulaDocumentData };
