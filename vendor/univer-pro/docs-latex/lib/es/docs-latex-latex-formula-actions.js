import { CommandType, CustomRangeType, DataStreamTreeTokenType, DependentOn, Disposable, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, JSONX, Plugin, TextX, UniverInstanceType, generateRandomId, getBodySliceForTextXAction, getCustomRangeInterval, getRichTextEditPath, merge, shiftExclusiveRangeOnDelete, shiftExclusiveRangeOnInsert, shiftInclusiveRangeOnDelete, shiftInclusiveRangeOnInsert } from "@univerjs/core";
import { DOC_SELECTION_OPTION_PRESERVE_CARET, DocSelectionManagerService, RichTextEditingMutation, UniverDocsPlugin } from "@univerjs/docs";
import { Subject } from "rxjs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { C, D, M, N, fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF1 } from "./internal-core-endo.js";
import { E } from "./docs-latex-formula-range.js";
function me(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157 = N(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.documentData),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158 = M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158.customRanges) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617.rangeId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.rangeId && E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617));
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159.startIndex,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161 = getCustomRangeInterval(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159);
  return D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161.startOffset, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161.endOffset, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.latex), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158.customRanges = [...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158.customRanges) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618.rangeId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.rangeId)) ?? []), fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.rangeId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.latex["length"])].sort((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619.startIndex - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620.startIndex), {
    nextDocumentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157,
    nextMetadata: C(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.metadata, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.rangeId, {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.properties,
      latex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.latex
    }),
    cursorOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.latex["length"]
  };
}
export { me as buildUpdateLatexFormulaActions };
