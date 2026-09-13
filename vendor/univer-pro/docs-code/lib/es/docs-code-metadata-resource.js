import { BooleanNumber, BuildTextUtils, CommandType, DataStreamTreeTokenType, DependentOn, Disposable, DocumentBlockRangeType, ICommandService, IConfigService, IResourceManagerService, IUniverInstanceService, Inject, Injector, JSONX, Plugin, TextX, UniverInstanceType, containsInteriorInsertionOffset, containsStreamIndex, createParagraphId, generateRandomId, getBlockRangeInterval, getBodySliceForTextXAction, getParagraphContentStartOffset, getParagraphContentStartOffsets, getParagraphFollowingBlockOffset, getSingleDataStreamChange, intersectsOperationalIntervals, merge, shiftExclusiveRangeOnDelete, shiftExclusiveRangeOnInsert, shiftInclusiveRangeOnDelete, shiftInclusiveRangeOnInsert } from "@univerjs/core";
import { Subject } from "rxjs";
import { DocSelectionManagerService, RichTextEditingMutation, UniverDocsPlugin, getContentInsertRange, isHeaderFooterSelection } from "@univerjs/docs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { v } from "./docs-code-config.js";
function y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168.codes) ?? {};
  return {
    codes: Object.fromEntries(Object.entries(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2).map(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615]) => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614, v(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615)]))
  };
}
export { y as normalizeDocsCodeMetadataResource };
