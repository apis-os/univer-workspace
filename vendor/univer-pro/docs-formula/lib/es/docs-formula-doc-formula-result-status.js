import { FormulaCacheEligibilityService, FormulaLastValuePersistenceService, HostExternalReferenceModel, UniverProFormulaEnginePlugin, buildUpsertHostExternalReferenceMutations, collectFormulaExternalReferenceQualifiers, getScalarFormulaResultCell, resolveFormulaResultPresentation, resolveHostFormulaExternalReferences, toFormulaLastValue } from "@univerjs-pro/engine-formula";
import { CellValueType, CommandType, CustomRangeType, DataStreamTreeTokenType, DependentOn, Disposable, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, JSONX, Plugin, TextX, Tools, UniverInstanceType, generateRandomId, getBodySliceForTextXAction, getCustomRangeInterval, getParagraphContentStartOffset, getRichTextEditPath, merge, shiftExclusiveRangeOnDelete, shiftExclusiveRangeOnInsert, shiftInclusiveRangeOnDelete, shiftInclusiveRangeOnInsert, touchDependencies } from "@univerjs/core";
import { DOC_SELECTION_OPTION_PRESERVE_CARET, DocSelectionManagerService, DocTextResolverService, RichTextEditingMutation, UniverDocsPlugin } from "@univerjs/docs";
import { FormulaResultStatus, LexerTreeBuilder, OtherFormulaBizType, RegisterOtherFormulaService } from "@univerjs/engine-formula";
import { Subject } from "rxjs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
let it = function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529.EMPTY = "empty", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529.PENDING = "pending", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529.SUCCESS = "success", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529.ERROR = "error", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529;
}({});
export { it as DocFormulaResultStatus };
