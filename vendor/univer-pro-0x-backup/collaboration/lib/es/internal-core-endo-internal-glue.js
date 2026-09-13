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
import { K } from "./internal-core-endo-collaboration-k.js";
function q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461902, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461903) {
  return function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461903(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461902);
  };
}
function J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461906, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461907, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461908, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461909) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461910 = arguments.length,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461911 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461910 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461907 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461909 === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461909 = Object.getOwnPropertyDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461907, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461908) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461909,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461912;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461911 = Reflect.decorate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461906, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461907, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461908, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461909);else {
    for (var var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D94 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461906.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D94 >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D94--) (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461912 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461906[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D94]) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461911 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461910 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461912(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461911) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461910 > 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461912(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461907, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461908, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461911) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461912(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461907, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461908)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461911);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461910 > 3 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461911 && Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461907, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461908, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461911), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461911;
}
Ln = J([q(0, ILogService)], Ln);
Wn = J([q(0, In)], Wn);
cr = J([q(0, In)], cr);
dr = J([q(0, In)], dr);
Jr = J([q(0, In)], Jr);
cu = J([q(0, In)], cu);
Uu = J([q(0, In)], Uu);
var Xu = "@univerjs-pro/collaboration",
  Zu = "1.0.0-insiders.20260907-70fc579";
var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465485 = J([q(0, ICommandService)], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465485);
ud = J([q(0, IUniverInstanceService)], ud);
function gf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465373) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465373) return 0;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D138 = 0;
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461512 in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465373) Object.prototype["hasOwnProperty"].call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465373, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461512) && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D138++;
  return var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D138;
}
Tf = J([q(0, Inject(ud)), q(1, IUniverInstanceService), q(2, wf), q(3, ICommandService), q(4, ILogService), q(5, Inject(sd)), q(6, Inject(IResourceManagerService)), q(7, Inject(fd))], Tf);
K(Ef, "pluginName", "UNIVER_COLLABORATION_PLUGIN"), K(Ef, "packageName", Xu), K(Ef, "version", Zu), Ef = J([DependentOn(UniverLicensePlugin), q(1, Inject(Injector)), q(2, IConfigService)], Ef);
Df = J([q(0, wf), q(1, Inject(Tf)), q(2, Inject(ILogService))], Df);
export { gf };
