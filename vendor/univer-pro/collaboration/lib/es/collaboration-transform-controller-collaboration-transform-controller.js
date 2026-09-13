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
const Vn = JSON1.type["typeAllowingConflictsPred"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461930 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461930.type === JSON1.type["RM_UNEXPECTED_CONTENT"]),
  Hn = [{
    m1: ApplyBaseJson1Mutation.id,
    m2: ApplyBaseJson1Mutation.id,
    handler(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461931, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461932) {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461931.params["unitId"] !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461932.params["unitId"]) return {
        m1Prime: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461931,
        m2Prime: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461932
      };
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461933 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461931),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461934 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461932);
      return {
        m1Prime: {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461933,
          params: {
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461933.params,
            op: Un(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461933.params["op"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461934.params["op"], "left")
          }
        },
        m2Prime: {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461934,
          params: {
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461934.params,
            op: Un(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461934.params["op"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461933.params["op"], "right")
          }
        }
      };
    }
  }];
function Un(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461939, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461940, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461941) {
  return Vn.transform(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461939, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461940, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461941);
}
let Wn = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46576) {
    super(), this._transformService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46576, Hn.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246 => {
      this._transformService["registerTransformAlgorithm"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246);
    });
  }
};
export { Wn as BaseTransformController };
