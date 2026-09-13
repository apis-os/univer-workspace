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
import { id } from "./internal-core-endo.js";
function Dd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465013) {
  return JSON.parse(typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465013 == "string" ? Md(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465013) : md.decode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465013));
}
const Ld = ["page-block", "shared-fragment", "search-block"];
function fn_L0_core_endo_routine_pure_O1_zalloc_throws_TypeError_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465301) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465302 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465301.pdf;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465302 == null) throw Error("transformSnapshotToPdfData(): snapshot.pdf is undefined.");
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465303 = Dd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465302.originalMeta);
  if (!ef(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465303)) throw TypeError("transformSnapshotToPdfData(): unsupported PDF Unit snapshot.");
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465304 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465303,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465305 = of(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465304, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465302),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465306 = sf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465304, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465302),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465307 = cf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465304.documentShell, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465305, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465306),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465308 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465304.document ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465307 ? createPdfDocumentFromShell(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465307) : undefined);
  return normalizePdfUnitData({
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465304,
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465302.unitID,
    rev: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465301.rev || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465302.rev,
    name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465302.name,
    document: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465308,
    documentShell: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465307,
    sourceDocumentRef: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465305,
    resourceBindings: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465306,
    fragmentBindings: rf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465304, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465302),
    metadata: uf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465304, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465302)
  });
}
function ef(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465317) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465317 == "object" && !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465317 && !Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465317) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465317.schema === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 && ("document" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465317 || "documentShell" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465317);
}
function rf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465329, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465330) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465331;
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB663 = {
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465329.fragmentBindings ?? {})
  };
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465331 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465330.assets) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465331.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461494 => {
    af(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461494.kind) && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB663[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461494.assetId] = {
      kind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461494.kind,
      fileId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461494.fileId,
      mimeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461494.mimeType || undefined,
      byteLength: lf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461494.size)
    });
  }), Object.keys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB663).length > 0 ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB663 : undefined;
}
function af(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465335) {
  return Ld.includes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465335);
}
function of(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465337, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465338) {
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465337.sourceDocumentRef,
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465338.sourcePdfFileId ? {
      assetId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465338.sourcePdfFileId
    } : {}),
    immutable: true
  };
}
function sf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465341, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465342) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465343;
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB665 = {
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465341.resourceBindings ?? {})
  };
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465343 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465342.assets) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465343.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496 => {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496.kind === PdfAssetStorageKind.UNIVERSER_RESOURCE && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB665[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496.assetId] = {
      kind: PdfAssetStorageKind.UNIVERSER_RESOURCE,
      source: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496.fileId,
      imageSourceType: ImageSourceType.UUID,
      mimeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496.mimeType || undefined,
      byteLength: lf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496.size)
    });
  }), Object.keys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB665).length > 0 ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB665 : undefined;
}
function cf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465347, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465348, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465349) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465347) return;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A261 = Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465347.sources),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465350 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465348.sourceId ?? (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A261.length === 1 ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A261[0] : undefined),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465351 = Object.fromEntries(Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465347.sources).map(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461498, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461499]) => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461500 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461498 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465350 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465348.assetId ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465348.assetId : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461499.assetId;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461500) throw Error("PDF source " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461498 + " is missing its PDF file binding.");
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461498 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465350 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461500 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465348.assetId) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465349 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465349[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461500];
        if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427.kind) !== PdfAssetStorageKind.UNIVERSER_RESOURCE || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427.mimeType !== "application/pdf") throw Error("PDF\x20source\x20" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461498 + " has an invalid PDF file binding " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461500 + ".");
      }
      return [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461498, {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461499,
        assetId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461500
      }];
    }));
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465347,
    sources: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465351
  };
}
function lf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465357) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D136 = typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465357 == "string" ? Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465357) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465357;
  return typeof var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D136 == "number" && Number.isFinite(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D136) && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D136 >= 0 ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D136 : undefined;
}
function uf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465359, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465360) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB667 = {
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465359.metadata ?? {})
  };
  return [["modelJsonFileId", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465360.modelJsonFileId], ["decodeManifestFileId", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465360.decodeManifestFileId], ["decoderKind", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465360.decoderKind], ["decoderVersion", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465360.decoderVersion], ["editorStateJsonFileId", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465360.editorStateJsonFileId], ["exportPatchJsonFileId", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465360.exportPatchJsonFileId]].forEach(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461504, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461505]) => {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461505 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB667[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461504] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461505);
  }), Object.keys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB667).length > 0 ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB667 : undefined;
}
export { fn_L0_core_endo_routine_pure_O1_zalloc_throws_TypeError_sigD23F as transformSnapshotToPdfData };
