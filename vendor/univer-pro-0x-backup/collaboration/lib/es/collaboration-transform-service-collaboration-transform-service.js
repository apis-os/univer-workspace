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
import { Dn, K, Tn } from "./internal-core-endo.js";
import { wn } from "./collaboration-transform-mutation-failure.js";
function En(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461868) {
  return !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461868.error;
}
let Ln = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46478) {
    super(), this._logService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46478, K(this, "_transformMap", new Map()), K(this, "_loopLimitTime", 3000), K(this, "_transformMutationsCache", new Map());
  }
  dispose() {
    this._transformMap["clear"](), this._transformMutationsCache["clear"]();
  }
  registerTransformAlgorithm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480) {
    let {
      m1: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46481,
      m2: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482 = "any"
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480;
    this._transformMap["has"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46481) || this._transformMap["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46481, new Map());
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483 = this._transformMap["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46481);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482)) throw Error("[TransformService] Transform algorithm for " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46481 + "\x20and\x20" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482 + " already exists.");
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480);
  }
  transformMutation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46489, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46490) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46493, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497 = this._transformMap,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488.id)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46489.id)) || ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488.id)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492.get("any")) || ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46493 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497.get("any")) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46493.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46489.id));
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46490 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498.handler(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46489, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46490) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498.handler(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46489);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46489.id)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488.id)) || ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46489.id)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495.get("any")) || ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497.get("any")) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488.id));
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46490 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499.handler(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46489, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46490) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499.handler(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46489, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488);
      return Tn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46490 ? {
        m2Prime: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233.m1Prime
      } : {
        m2Prime: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233.m1Prime,
        m1Prime: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233.m2Prime
      } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233;
    }
    return {
      m1Prime: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488,
      m2Prime: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46489
    };
  }
  transformMutations(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514) {
    this._transformMutationsCache["set"]("m1", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512), this._transformMutationsCache["set"]("m2", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513);
    let var_L0_core_endo_timestampMs_pure_O1_zalloc_nothrow_sig22421 = Date.now(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515 = this._rightInclineTransformMutations(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513, var_L0_core_endo_timestampMs_pure_O1_zalloc_nothrow_sig22421);
    if (En(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514) return {
      m2Prime: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515
    };
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516 = this._leftInclineTransformMutations(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513, var_L0_core_endo_timestampMs_pure_O1_zalloc_nothrow_sig22421);
    return En(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516 : (this._transformMutationsCache["clear"](), {
      m1Prime: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516,
      m2Prime: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515
    });
  }
  _rightInclineTransformMutations(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46522, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46523, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46524) {
    Date.now() === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46524 && (this._logService["debug"]("[debug] _rightInclineTransformMutations start transforming mutations. Date now: " + new Date().toISOString()), this._logService["debug"]("[debug] m1Length: ", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46522.length), this._logService["debug"]("[debug] m2Length: ", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46523.length));
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46522.length,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D25 = 0,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D26 = 0,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526;
    for (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526 = 0; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526++) {
      if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D25++, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D25 % 10000 == 0 && Date.now() - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46524 > this._loopLimitTime) throw this._logOriginTransformMutations("right-loop1"), this._logCurrentTransformMutations(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46522.length, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46523.length, "right-loop1"), Error("[TransformService]:\x20_rightInclineTransformMutations\x20loop1\x20exceeded\x20the\x20limit\x20time.");
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A = [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46522[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526]],
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1 = [];
      for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D = 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46523.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D++) {
        if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D26++, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D26 % 10000 == 0 && Date.now() - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46524 > this._loopLimitTime) throw this._logOriginTransformMutations("right-loop2"), this._logCurrentTransformMutations(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46522.length, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46523.length, "right-loop2"), Error("[TransformService]: _rightInclineTransformMutations loop2 exceeded the limit time.");
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46523[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D],
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616;
        if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.length === 0) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616 = [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A = [];else {
          if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.length === 1) {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 = this.transformMutation(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615);
            if (wn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462;
            if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616 = Bn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462.m2Prime), !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462.m1Prime) throw Error("Algorithm\x20error,\x20m1Prime\x20should\x20not\x20be\x20undefined.");
            var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A = Bn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462.m1Prime);
          } else {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 = this._rightInclineTransformMutations(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46524);
            if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.error) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463;
            if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631 - 1) {
              let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 = this._leftInclineTransformMutations(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46524);
              if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.error) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46;
              var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46;
            }
          }
        }
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1.concat(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616);
      }
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46523 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1;
    }
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46523;
  }
  _leftInclineTransformMutations(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46532, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46533, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46534) {
    Date.now() === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46534 && (this._logService["debug"]("[debug]\x20_leftInclineTransformMutations\x20start\x20transforming\x20mutations.\x20Date\x20now:\x20" + new Date().toISOString()), this._logService["debug"]("[debug] m1Length: ", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46532.length), this._logService["debug"]("[debug] m2Length: ", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46533.length));
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46535 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46533.length,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46536,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D29 = 0,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30 = 0;
    for (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46536 = 0; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46536 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46535; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46536++) {
      if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D29++, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D29 % 10000 == 0 && Date.now() - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46534 > this._loopLimitTime) throw this._logOriginTransformMutations("left-loop1"), this._logCurrentTransformMutations(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46532.length, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46533.length, "left-loop1"), Error("[TransformService]:\x20_leftInclineTransformMutations\x20loop1\x20exceeded\x20the\x20limit\x20time.");
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2 = [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46533[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46536]],
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3 = [];
      for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 = 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46532.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1++) {
        if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30++, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30 % 10000 == 0 && Date.now() - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46534 > this._loopLimitTime) throw this._logOriginTransformMutations("left-loop2"), this._logCurrentTransformMutations(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46532.length, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46533.length, "left-loop2"), Error("[TransformService]: _leftInclineTransformMutations loop2 exceeded the limit time.");
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46532[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1],
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618;
        if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2.length === 0) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618 = [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2 = [];else {
          if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2.length === 1) {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 = this.transformMutation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[0]);
            if (wn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464;
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464.m1Prime) throw Error("Algorithm error, m1Prime should not be undefined.");
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618 = Bn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464.m1Prime), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2 = Bn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464.m2Prime);
          } else {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465 = this._leftInclineTransformMutations([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46534);
            if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465.error) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465;
            if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632 - 1) {
              let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 = this._rightInclineTransformMutations([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46534);
              if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461.error) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461;
              var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461;
            }
          }
        }
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3.concat(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618);
      }
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46532 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3;
    }
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46532;
  }
  transformChangesets(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46542, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46543, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544) {
    if (!Rn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46542, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46543)) throw Error("[TransformService]: changesets revisions miss match. The 'baseRev' of c2 is " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46543[0].baseRev + " and the 'revision' of c1 is " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46542[0].revision + ".");
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46545 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46542.length,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46546 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46543.length,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46547 = zn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46545, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46546 + 1),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46548 = zn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46545 + 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46546);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46542.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46547[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235][0] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46543.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46548[0][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236);
    try {
      for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46546; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5++) for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46545; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2++) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46548[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2][var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5],
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46547[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2][var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5];
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620) throw Error("Algorithm error, the changeset does not exist!");
        let {
            mutations: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621,
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622
          } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620,
          {
            mutations: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623,
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624
          } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619;
        this._logService["debug"]("[debug]\x20transformChangesets.\x20Date\x20now:\x20" + new Date().toISOString()), this._logService["debug"]("[debug]\x20c1:\x20", JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622)), this._logService["debug"]("[debug] c2: ", JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624));
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625 = this.transformMutations(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623);
        if (Dn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625)) return {
          error: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625.error
        };
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46548[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 + 1][var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5] = {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619,
          mutations: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625.m2Prime
        }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46547[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2][var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5 + 1] = {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620,
          mutations: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625.m1Prime
        };
      }
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544 ? {
        c2Prime: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46548[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46545]
      } : {
        c1Prime: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46547.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46546]).flat(),
        c2Prime: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46548[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46545]
      };
    } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC56) {
      throw console.error(var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC56), var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC56;
    }
  }
  transformMutationsWithChangeset(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556.mutations,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46559 = this.transformMutations(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557);
    return Dn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46559) ? {
      error: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46559.error
    } : {
      m2Prime: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46559.m2Prime,
      c1Prime: {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556,
        mutations: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46559.m1Prime
      }
    };
  }
  _logOriginTransformMutations(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46564) {
    this._logService["error"]("[Error] _logOriginTransformMutations " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46564 + ". Date now: " + new Date().toISOString());
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46565 = this._transformMutationsCache["get"]("m1"),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46566 = this._transformMutationsCache["get"]("m2");
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46565 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46565.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46238, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239) => {
      this._logService["error"]("[Error] m1 origin mutation " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239 + "]: ", JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46238));
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46566 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46566.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243) => {
      this._logService["error"]("[Error]\x20m2\x20origin\x20mutation\x20" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243 + ":\x20", JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242));
    });
  }
  _logCurrentTransformMutations(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46570, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46571, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46572) {
    this._logService["error"]("[Error] _logCurrentTransformMutations " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46572 + ". Date now: " + new Date().toISOString()), this._logService["error"]("[Error] m1Length: " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46570), this._logService["error"]("[Error] m2Length: " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46571);
  }
};
function Rn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461920, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461921) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461920[0].revision - 1 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461921[0].baseRev;
}
function zn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461924, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461925) {
  return Array(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461924).fill(undefined).map(() => Array(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461925));
}
function Bn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461928) {
  return Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461928) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461928 : [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461928];
}
export { Ln as TransformService };
