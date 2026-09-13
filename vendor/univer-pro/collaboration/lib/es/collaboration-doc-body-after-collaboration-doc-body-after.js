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
function Of(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465399) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A271 = [];
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465399.dataStream == "string" ? (Nf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465399, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A271), Ff(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465399, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A271), Pf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465399, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A271), If(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465399, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A271), Lf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465399, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A271), {
    ok: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A271.length === 0,
    errors: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A271
  }) : {
    ok: false,
    errors: ["dataStream must be a string."]
  };
}
function Nf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465419, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465420) {
  let {
      dataStream: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465421,
      paragraphs: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465422 = []
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465419,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D144 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465421.length - 1,
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929918 = new Set();
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465422.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461820, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461821) => {
    let {
      paragraphId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461822,
      startIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461823
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461820;
    if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461822 == "string" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461822.startsWith(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46) ? var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929918.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461822) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465420.push("paragraphs[" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461821 + '].paragraphId "' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461822 + '" is duplicated.') : var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929918.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461822) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465420.push("paragraphs[" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461821 + '].paragraphId "' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461822 + '" must start with "' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 + "\x22.") : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465420.push("paragraphs[" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461821 + "].paragraphId is required."), !Number.isInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461823)) {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465420.push("paragraphs[" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461821 + "].startIndex must be an integer.");
      return;
    }
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461823 < 0) {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465420.push("paragraphs[" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461821 + "].startIndex\x20" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461823 + " must be greater than or equal to 0.");
      return;
    }
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461823 > var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D144) {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465420.push("paragraphs[" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461821 + "].startIndex " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461823 + " is out of dataStream bounds 0.." + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D144 + ".");
      return;
    }
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465421[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461823] !== "\x0d" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465420.push("paragraphs[" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461821 + "].startIndex " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461823 + ' must point at "\\r".');
  });
}
function Pf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465427, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465428) {
  let {
      dataStream: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465429,
      blockRanges: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465430 = []
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465427,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D146 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465429.length - 1;
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465430.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461828, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461829) => {
    let {
        startIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830,
        endIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461831
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461828,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461832 = zf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D146, "blockRanges[" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461829 + "].startIndex", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465428),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461833 = zf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461831, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D146, "blockRanges[" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461829 + "].endIndex", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465428);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461832 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465429[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830] !== DataStreamTreeTokenType.BLOCK_START && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465428.push("blockRanges[" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461829 + "].startIndex\x20" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830 + "\x20must\x20point\x20at\x20a\x20block\x20start\x20marker."), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461833 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465429[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461831] !== DataStreamTreeTokenType.BLOCK_END && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465428.push("blockRanges[" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461829 + "].endIndex\x20" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461831 + " must point at a block end marker."), Number.isInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830) && Number.isInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461831) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461831 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465428.push("blockRanges[" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461829 + "].endIndex " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461831 + " must be greater than or equal to startIndex " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830 + ".");
  });
}
function Ff(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465435, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465436) {
  let {
      dataStream: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465437,
      sectionBreaks: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465438 = []
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465435,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D148 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465437.length - 1;
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465438.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461840, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461841) => {
    let {
      startIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461842
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461840;
    zf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461842, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D148, "sectionBreaks[" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461841 + "].startIndex", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465436) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465437[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461842] !== DataStreamTreeTokenType.SECTION_BREAK && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465436.push("sectionBreaks[" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461841 + "].startIndex " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461842 + ' must point at "\\n".');
  });
}
function If(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465443, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465444) {
  let {
      dataStream: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465445,
      tables: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465446 = []
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465443,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D150 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465445.length - 1;
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465446.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461846, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461847) => {
    let {
        startIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461848,
        endIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461849
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461846,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461850 = zf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461848, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D150, "tables[" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461847 + "].startIndex", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465444),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461851 = Bf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461849, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465445.length, "tables[" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461847 + "].endIndex", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465444);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461850 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465445[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461848] !== DataStreamTreeTokenType.TABLE_START && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465444.push("tables[" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461847 + "].startIndex " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461848 + " must point at a table start marker."), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461851 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465445[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461849 - 1] !== DataStreamTreeTokenType.TABLE_END && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465444.push("tables[" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461847 + "].endIndex\x20" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461849 + " must be the exclusive boundary immediately after a table end marker."), Number.isInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461848) && Number.isInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461849) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461849 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461848) {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465444.push("tables[" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461847 + "].endIndex\x20" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461849 + " must be greater than startIndex " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461848 + ".");
      return;
    }
    !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461850 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461851 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465445[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461848] !== DataStreamTreeTokenType.TABLE_START || Rf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465445, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461848, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461849, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461847, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465444);
  });
}
function Lf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465451, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465452) {
  let {
      dataStream: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465453,
      customBlocks: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465454 = []
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465451,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D152 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465453.length - 1;
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465454.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461858, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461859) => {
    let {
      startIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461860
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461858;
    zf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461860, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D152, "customBlocks[" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461859 + "].startIndex", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465452) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465453[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461860] !== DataStreamTreeTokenType.CUSTOM_BLOCK && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465452.push("customBlocks[" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461859 + "].startIndex " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461860 + " must point at a custom block marker.");
  });
}
function Rf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465459, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465460, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465461, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465462, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465463) {
  let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A61 = false,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A62 = false,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D154 = 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D155 = 0;
  for (let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB11 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465460 + 1; var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB11 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465461 - 1; var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB11++) switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465459[var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB11]) {
    case DataStreamTreeTokenType.TABLE_START:
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465463.push("tables[" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465462 + "] has a nested table start marker at " + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB11 + ".");
      break;
    case DataStreamTreeTokenType.TABLE_END:
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465463.push("tables[" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465462 + "]\x20has\x20an\x20early\x20table\x20end\x20marker\x20at\x20" + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB11 + ".");
      break;
    case DataStreamTreeTokenType.TABLE_ROW_START:
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A61 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465463.push("tables[" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465462 + "] has a row start marker before the previous row ended at " + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB11 + "."), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A61 = true, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D154++;
      break;
    case DataStreamTreeTokenType.TABLE_ROW_END:
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A61 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465463.push("tables[" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465462 + "]\x20has\x20a\x20row\x20end\x20marker\x20without\x20a\x20row\x20start\x20marker\x20at\x20" + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB11 + "."), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A62 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465463.push("tables[" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465462 + "] has a row end marker before the current cell ended at " + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB11 + "."), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A61 = false;
      break;
    case DataStreamTreeTokenType.TABLE_CELL_START:
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A61 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465463.push("tables[" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465462 + "] has a cell start marker outside a row at " + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB11 + "."), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A62 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465463.push("tables[" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465462 + "] has a cell start marker before the previous cell ended at " + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB11 + "."), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A62 = true, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D155++;
      break;
    case DataStreamTreeTokenType.TABLE_CELL_END:
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A62 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465463.push("tables[" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465462 + "] has a cell end marker without a cell start marker at " + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB11 + "."), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A62 = false;
      break;
  }
  var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A62 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465463.push("tables[" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465462 + "] has an unclosed table cell."), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A61 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465463.push("tables[" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465462 + "] has an unclosed table row."), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D154 === 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465463.push("tables[" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465462 + "] must contain at least one table row."), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D155 === 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465463.push("tables[" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465462 + "] must contain at least one table cell.");
}
function zf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465469, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465470, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465471, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465472) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465469 != "number" || !Number.isInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465469) ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465472.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465471 + " must be an integer."), false) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465469 < 0 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465472.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465471 + "\x20" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465469 + " must be greater than or equal to 0."), false) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465469 > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465470 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465472.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465471 + "\x20" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465469 + " is out of dataStream bounds 0.." + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465470 + "."), false) : true;
}
function Bf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465477, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465478, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465479, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465480) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465477 != "number" || !Number.isInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465477) ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465480.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465479 + "\x20must\x20be\x20an\x20integer."), false) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465477 < 0 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465480.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465479 + "\x20" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465477 + " must be greater than or equal to 0."), false) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465477 > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465478 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465480.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465479 + "\x20" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465477 + " is out of dataStream boundary bounds 0.." + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465478 + "."), false) : true;
}
export { Of as validateDocBodyAfterApply };
