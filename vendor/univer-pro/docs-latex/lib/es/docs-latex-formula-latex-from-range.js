import { CommandType, CustomRangeType, DataStreamTreeTokenType, DependentOn, Disposable, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, JSONX, Plugin, TextX, UniverInstanceType, generateRandomId, getBodySliceForTextXAction, getCustomRangeInterval, getRichTextEditPath, merge, shiftExclusiveRangeOnDelete, shiftExclusiveRangeOnInsert, shiftInclusiveRangeOnDelete, shiftInclusiveRangeOnInsert } from "@univerjs/core";
import { DOC_SELECTION_OPTION_PRESERVE_CARET, DocSelectionManagerService, RichTextEditingMutation, UniverDocsPlugin } from "@univerjs/docs";
import { Subject } from "rxjs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { E } from "./docs-latex-formula-range.js";
function ge(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185) {
  if (!E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184)) return "";
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186 = getCustomRangeInterval(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185.slice(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186.startOffset, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186.endOffset);
}
export { ge as getFormulaLatexFromRange };
