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
import { Md } from "./collaboration-b64-decode-unicode.js";
import { md } from "./collaboration-text-encoder.js";
import { Cd, Id, id, xd } from "./internal-core-endo.js";
function Sd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465003) {
  return JSON.parse(typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465003 == "string" ? Md(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465003) : md.decode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465003));
}
async function Wd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465185, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465186, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465187, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465188) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465189 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465185.workbook;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465189) throw Error("Missing workbook meta in snapshot");
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB641 = {};
  Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465189.sheets).forEach(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461475, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461476]) => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461477 = xd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461476.originalMeta);
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB641[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461475] = {
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461476.id,
      name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461476.name,
      rowCount: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461476.rowCount,
      columnCount: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461476.columnCount,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461477
    };
  });
  let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B596 = new Map();
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D81 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D81 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465186.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D81++) var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B596.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465186[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D81].id, {
    index: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D81,
    block: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465186[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D81]
  });
  let var_L0_core_endo_timestampMs_pure_O1_zalloc_nothrow_sig224211 = performance.now();
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465188 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465188.debug("[ParseBlocks]", "parse blocks start, total " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465186.length + "\x20blocks"), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465189.blockMeta) for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461481, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461482] of Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465189.blockMeta)) {
    if (!var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB641[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461481]) continue;
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB14 = {};
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461482.blocks && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461482.blocks["length"] > 0) for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461482.blocks) {
      if (!var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B596.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206)) throw Error("Missing sheet block " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206 + "\x20for\x20sheet\x20" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461481);
      let {
        index: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659,
        block: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660
      } = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B596.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627 = Cd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660.data);
        for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614 in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627) var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB14[Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614)] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614];
        var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B596.delete(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465186[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659] = null, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660.data = null;
      }
      await Id();
    }
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB641[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461481].cellData = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB14;
  }
  let var_L0_core_endo_timestampMs_pure_O1_zalloc_nothrow_sig224212 = performance.now();
  var_L0_core_endo_timestampMs_pure_O1_zalloc_nothrow_sig224212 - var_L0_core_endo_timestampMs_pure_O1_zalloc_nothrow_sig224211 > 10000 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465188 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465188.debug("[ParseBlocks]", "Parsing blocks took a long time: " + (var_L0_core_endo_timestampMs_pure_O1_zalloc_nothrow_sig224212 - var_L0_core_endo_timestampMs_pure_O1_zalloc_nothrow_sig224211).toFixed(2) + " ms") : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465188 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465188.debug("[ParseBlocks]", "parse\x20blocks\x20end,\x20took\x20" + (var_L0_core_endo_timestampMs_pure_O1_zalloc_nothrow_sig224212 - var_L0_core_endo_timestampMs_pure_O1_zalloc_nothrow_sig224211).toFixed(2) + " ms"), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B596.clear(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465186.length = 0;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465190 = Sd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465189.originalMeta);
  return {
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465185.unitID || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465189.unitID,
    rev: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465185.rev || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465189.rev,
    name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465189.name,
    sheetOrder: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465189.sheetOrder,
    appVersion: "",
    locale: LocaleType.EN_US,
    sheets: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB641,
    styles: {},
    resources: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465189.resources || [],
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465190
  };
}
export { Wd as transformSnapshotToWorkbookData };
