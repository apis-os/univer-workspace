import { FormulaCacheEligibilityService, FormulaLastValuePersistenceService, HostExternalReferenceModel, UniverProFormulaEnginePlugin, buildUpsertHostExternalReferenceMutations, collectFormulaExternalReferenceQualifiers, getScalarFormulaResultCell, resolveFormulaResultPresentation, resolveHostFormulaExternalReferences, toFormulaLastValue } from "@univerjs-pro/engine-formula";
import { CellValueType, CommandType, CustomRangeType, DataStreamTreeTokenType, DependentOn, Disposable, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, JSONX, Plugin, TextX, Tools, UniverInstanceType, generateRandomId, getBodySliceForTextXAction, getCustomRangeInterval, getParagraphContentStartOffset, getRichTextEditPath, merge, shiftExclusiveRangeOnDelete, shiftExclusiveRangeOnInsert, shiftInclusiveRangeOnDelete, shiftInclusiveRangeOnInsert, touchDependencies } from "@univerjs/core";
import { DOC_SELECTION_OPTION_PRESERVE_CARET, DocSelectionManagerService, DocTextResolverService, RichTextEditingMutation, UniverDocsPlugin } from "@univerjs/docs";
import { FormulaResultStatus, LexerTreeBuilder, OtherFormulaBizType, RegisterOtherFormulaService } from "@univerjs/engine-formula";
import { Subject } from "rxjs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { C } from "./docs-formula-invalid-doc-formula-insert-range-error.js";
const Le = new Set([DataStreamTreeTokenType.SECTION_BREAK, DataStreamTreeTokenType.TABLE_START, DataStreamTreeTokenType.TABLE_ROW_START, DataStreamTreeTokenType.TABLE_CELL_START, DataStreamTreeTokenType.TABLE_CELL_END, DataStreamTreeTokenType.TABLE_ROW_END, DataStreamTreeTokenType.TABLE_END, DataStreamTreeTokenType.COLUMN_GROUP_START, DataStreamTreeTokenType.COLUMN_START, DataStreamTreeTokenType.COLUMN_END, DataStreamTreeTokenType.COLUMN_GROUP_END, DataStreamTreeTokenType.BLOCK_START, DataStreamTreeTokenType.BLOCK_END, DataStreamTreeTokenType.CUSTOM_BLOCK]);
function He(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385) {
    if (Le.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383.dataStream[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384])) throw new C();
    return;
  }
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675++) if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383.dataStream[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675] === DataStreamTreeTokenType.PARAGRAPH || Le.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383.dataStream[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675])) throw new C();
}
export { He as assertSafeDocFormulaInsertRange };
