import { CommandType, DataStreamTreeTokenType, DependentOn, Disposable, ICommandService, IConfigService, ILogService, IResourceManagerService, IUniverInstanceService, ImageSourceType, Inject, Injector, InterceptorManager, JSON1, JSONX, LocaleType, ObjectMatrix, PARAGRAPH_ID_PREFIX as var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46, Plugin, RANGE_TYPE as var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461, Rectangle, SheetTypes, Tools, UniverInstanceType, createIdentifier, createInterceptorKey, generateRandomId, getTableCellTokenInterval, getTableRangeInterval, getTableRowTokenInterval, insertMatrixArray, isFormulaString, isRangesEqual, merge, moveMatrixArray, registerDependencies, spliceArray, touchDependencies, validateDocBodyStructure } from "@univerjs/core";
import { ApplyBaseJson1Mutation, BaseJson1OpApplier, compressBaseRangeValuesPayload, decompressBaseRangeValuesPayload, isCompressedBaseRangeValuesPayload } from "@univerjs-pro/bases";
import { AddBoardElementMutation, RemoveBoardElementMutation, RemoveBoardElementOnlyMutation, SetBoardElementOrderMutation, UpdateBoardElementMutation } from "@univerjs-pro/boards";
import { SetMindMapElementMutation } from "@univerjs-pro/boards-mind";
import { RemoveBoardTableMutation, SetBoardTableMutation } from "@univerjs-pro/boards-table";
import { RichTextEditingMutation, transformDocumentTextRanges } from "@univerjs/docs";
import { AddRangeProtectionMutation, AddWorksheetMergeMutation, AddWorksheetProtectionMutation, CopyWorksheetEndMutation, DeleteWorksheetProtectionMutation, EmptyMutation, InsertColCommand, InsertColMutation, InsertRowCommand, InsertRowMutation, InsertSheetMutation, MoveColsCommand, MoveColsMutation, MoveRangeMutation, MoveRowsCommand, MoveRowsMutation, RangeMergeUtil, RemoveColCommand, RemoveColMutation, RemoveNumfmtMutation, RemoveRowCommand, RemoveRowMutation, RemoveSheetMutation, RemoveWorksheetMergeMutation, ReorderRangeMutation, SetColDataMutation, SetColHiddenMutation, SetColVisibleMutation, SetFrozenMutation, SetNumfmtMutation, SetRangeProtectionMutation, SetRangeValuesMutation, SetRowDataMutation, SetRowHiddenMutation, SetRowVisibleMutation, SetSelectionsOperation, SetTabColorMutation, SetWorkbookNameMutation, SetWorksheetColWidthMutation, SetWorksheetHideMutation, SetWorksheetNameMutation, SetWorksheetOrderMutation, SetWorksheetPermissionPointsMutation, SetWorksheetProtectionMutation, SetWorksheetRowAutoHeightMutation, SetWorksheetRowHeightMutation, SetWorksheetRowIsAutoHeightMutation, handleBaseInsertRange, handleBaseMoveRowsCols, handleBaseRemoveRange, handleCommonDefaultRangeChangeWithEffectRefCommands, handleDefaultRangeChangeWithEffectRefCommands, rotateRange } from "@univerjs/sheets";
import { ApplyPdfMutationBatchMutation, PDF_UNIT_SCHEMA as var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462, PdfAssetStorageKind, PdfEditorMutationKind, createPdfDocumentFromShell, normalizePdfUnitData } from "@univerjs-pro/pdfs";
import { AddCommentMutation, DeleteCommentMutation, UpdateCommentMutation, UpdateCommentRefMutation } from "@univerjs/thread-comment";
import { AddConditionalRuleMutation, DeleteConditionalRuleMutation, MoveConditionalRuleMutation, SetConditionalRuleMutation } from "@univerjs/sheets-conditional-formatting";
import { AddDataValidationMutation, RemoveDataValidationMutation, UpdateDataValidationMutation, UpdateRuleType } from "@univerjs/data-validation";
import { AddHyperLinkMutation, RemoveHyperLinkMutation, UpdateHyperLinkMutation, UpdateHyperLinkRefMutation } from "@univerjs/sheets-hyper-link";
import { ReCalcSheetsFilterMutation, RemoveSheetsFilterMutation, SetSheetsFilterCriteriaMutation, SetSheetsFilterRangeMutation } from "@univerjs/sheets-filter";
import { AddDimensionOutlineMutation, ClearDimensionOutlinesMutation, DimensionOutlineAxis, RemoveDimensionOutlineMutation, SetDimensionOutlineCollapsedMutation, TransformDimensionOutlinesMutation, transformOutlinesByDelete, transformOutlinesByInsert, transformOutlinesByMove } from "@univerjs-pro/sheets-outline";
import { ErrorType, LexerTreeBuilder, deserializeRangeWithSheetWithCache, generateStringWithSequence, sequenceNodeType, serializeRange, serializeRangeToRefString, singleReferenceToGrid } from "@univerjs/engine-formula";
import { DrawingApplyType, SetDrawingApplyMutation } from "@univerjs/sheets-drawing";
import { AddSlideElementMutation, AddSlidePageMutation, CancelSlideGroupMutation, MoveSlidePageMutation, RemoveSlideElementMutation, RemoveSlidePageMutation, SetSlideDrawingApplyMutation, SetSlideElementOrderMutation, SetSlideGroupMutation, SlideDrawingApplyType, UpdateSlideElementMutation, UpdateSlidePageBackgroundMutation } from "@univerjs-pro/slides";
import { RemoveSlideChartDataSourceMutation, RemoveSlideChartSnapshotMutation, SetSlideChartDataSourceMutation, SetSlideChartSnapshotMutation } from "@univerjs-pro/slides-chart";
import { RemoveSlideTableMutation, SetSlideTableMutation } from "@univerjs-pro/slides-table";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { BehaviorSubject } from "rxjs";
import { ErrorCode, isError } from "@univerjs/protocol";
import { var_core_value_sig3EEE as uuidv4 } from "uuid";
import { Cd, Id, id } from "./internal-core-endo.js";
import { Md } from "./collaboration-b64-decode-unicode.js";
import { md } from "./collaboration-text-encoder.js";
async function Gd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465197, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465198 = [], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465199, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465200) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465201;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465197.type !== UniverInstanceType.UNIVER_BASE) throw Error("Snapshot is not a Base unit");
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465202 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465197.workbook;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465202) throw Error("Missing workbook-shaped Base meta in snapshot");
  let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B598 = new Map();
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465198.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461483 => var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B598.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461483.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461483));
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB643 = {};
  for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461484, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461485] of Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465202.sheets)) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465203;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426 = mf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461485.originalMeta),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB15 = {},
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465203 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465202.blockMeta) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465203 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465203[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461484]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465203.blocks) ?? [];
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207 of var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B598.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661) throw Error("Missing base block " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207 + " for table " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461484);
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662 = Cd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661.data);
      for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628 in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662) var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB15[Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628)] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628];
      await Id();
    }
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB643[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461484] = {
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461485.id,
      name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461485.name,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426,
      cellData: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB15
    };
  }
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465204 = pf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465202.originalMeta),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB644 = {
      name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465202.name,
      schemaVersion: 1,
      tableOrder: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465202.sheetOrder,
      tables: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB643,
      ...((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465201 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465202.resources) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465201.length ? {
        resources: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465202.resources
      } : undefined),
      createdAt: 0,
      updatedAt: 0,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465204,
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465197.unitID || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465202.unitID,
      rev: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465197.rev || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465202.rev
    };
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465200 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465200.debug("[transformSnapshotToBaseData]", "parsed " + Object.keys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB643).length + " base tables"), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB644;
}
function pf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465367) {
  return hf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465367);
}
function mf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465369) {
  return hf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465369);
}
function hf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465371) {
  return JSON.parse(typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465371 == "string" ? Md(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465371) : md.decode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465371));
}
export { Gd as transformSnapshotToBaseData };
