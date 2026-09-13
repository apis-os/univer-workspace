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
import { wn } from "./collaboration-transform-mutation-failure.js";
import { Ln } from "./collaboration-transform-service.js";
import { Wn } from "./collaboration-transform-controller.js";
import { In } from "./collaboration-itransform-service.js";
import { cr } from "./collaboration-board-transform.js";
import { dr } from "./collaboration-doc-transform.js";
import { Jr } from "./collaboration-pdf-transform.js";
import { cu } from "./collaboration-sheet-transform.js";
import { Uu } from "./collaboration-slide-transform.js";
import { Ef, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465485 } from "./collaboration-plugin.js";
import { ud } from "./collaboration-revision-service.js";
import { md, pd } from "./collaboration-text-encoder.js";
import { Md } from "./collaboration-b64-decode-unicode.js";
import { Tf } from "./collaboration-snapshot-service.js";
import { wf } from "./collaboration-isnapshot-server.js";
import { sd } from "./collaboration-mutation-service.js";
import { fd } from "./collaboration-snapshot-loading.js";
import { Df } from "./collaboration-snapshot-save.js";
import { id } from "./internal-core-endo-collaboration-nd.js";
function Od(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465015, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465016 = 102400, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465017 = 1048576) {
  let var_L0_core_endo_timestampMs_pure_O1_zalloc_nothrow_sig22423 = Date.now(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465018 = new ObjectMatrix(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465015),
    {
      startRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465019,
      endRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465020,
      startColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465021,
      endColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465022
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465018.getRealRange(),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A243 = [],
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D120 = Math.ceil(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465016 / (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465022 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465021 + 1)),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465023 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465019,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465024 = null,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465025 = null,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D121 = 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D122 = 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D123 = 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D124 = 0;
  for (; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465023 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465020;) {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22 = Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465023 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D120 - 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465020),
      {
        sliceData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414,
        cellCount: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465018.getSliceDataAndCellCountByRows(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465023, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415 === 0) {
      if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465020 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465025 !== null) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654 = kd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465025);
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A243.push({
          id: generateRandomId(19, "0123456789"),
          startRow: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D121,
          endRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465020,
          data: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654
        });
      }
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465023 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22 + 1;
      continue;
    }
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465025 === null ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465025 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D121 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465023) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465025.concatRows(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D122 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D124 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465024 === null ? (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D123 = kd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465025).byteLength, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465024 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D123 / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D122) : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D123 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465024, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465020 || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D123 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465017) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174 = kd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465025);
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A243.push({
        id: generateRandomId(19, "0123456789"),
        startRow: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D121,
        endRow: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22,
        data: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465025 = null, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D121 = 0, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D122 = 0, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D123 = 0;
    }
    if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465020) break;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465023 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22 + 1;
  }
  return {
    blocks: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A243,
    totalCells: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D124,
    totalTime: Date.now() - var_L0_core_endo_timestampMs_pure_O1_zalloc_nothrow_sig22423
  };
}
function kd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465037) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465038 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465037.getMatrix();
  return pd.encode(JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465038));
}
export { Od };
