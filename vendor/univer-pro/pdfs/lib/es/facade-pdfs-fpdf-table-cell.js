import { ApplyPdfHistoryCommand, ApplyPdfMutationBatchMutation, DEFAULT_PDF_TABLE_THEME_PRESETS, PDF_A4_PAGE_HEIGHT_PT, PDF_A4_PAGE_WIDTH_PT, PDF_EDITOR_NATIVE_TEXT_VISUAL_EDIT_METADATA, PdfAnnotationType, PdfAssetType, PdfDisplayOpType, PdfEditorMutationSource, PdfExportDisposition, PdfListKind, PdfListPresetId, PdfObjectType, PdfSemanticRole, PdfTableCellVerticalAlign, PdfTextAnchor, createPdfDefaultDividerInsertionBbox, createPdfDefaultListInsertionBbox, createPdfDefaultParagraphInsertionBbox, createPdfDefaultTableInsertionLayout, createPdfDefaultTextBoxInsertionBbox, createPdfEditorSession, createPdfNativeTextHitTargets, createPdfPage, createPdfTableGrid, emuToPt, isPdfEditorDividerObject, normalizePdfEditorManagedImageResource, pdfAddAnnotationAction, pdfAddDividerAction, pdfAddImageAction, pdfAddListAction, pdfAddParagraphAction, pdfAddTableAction, pdfAddTextBoxAction, pdfChangeListLevelAction, pdfChangeListStyleAction, pdfCropImageAction, pdfDeleteObjectsAction, pdfEditTextAction, pdfInsertListItemAction, pdfInsertPageAction, pdfInsertParagraphBlockAction, pdfMoveObjectAction, pdfPromoteNativeTextAction, pdfRemoveListItemAction, pdfRemoveManagedImageAction, pdfRemoveParagraphBlockAction, pdfReorderObjectAction, pdfResizeTableAction, pdfSetListStartNumberAction, pdfUpdateManagedImageAction, pdfUpdateObjectAppearanceAction, pdfUpdateObjectStateAction, pdfUpdateObjectStrokeAction, pdfUpdateParagraphStyleAction, pdfUpdateTableCellStyleAction, pdfUpdateTableThemeAction, pdfUpdateTextRangeStyleAction, pdfUpdateTextStyleAction, ptToEmu } from "@univerjs-pro/pdfs";
import { FBaseInitialable, FEnum, FUniver } from "@univerjs/core/facade";
import { HorizontalAlign, ICommandService, IUndoRedoService, IUniverInstanceService, ImageSourceType, Inject, Injector, Tools, UniverInstanceType, generateRandomId } from "@univerjs/core";
import { D } from "./facade-internal-glue.js";
let W = class {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473) {
    this._model = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469, this._pageId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470, this._tableId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471, this._cellId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473;
  }
  getText() {
    let {
        cell: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479
      } = this._resolveCell(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480 = this._getTextStory(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480.blocks["flatMap"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652.runIds).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654;
      return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480.runs[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654.text) ?? "";
    }).join("");
  }
  setText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483) {
    let {
        cell: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484
      } = this._resolveCell(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46485 = this._getTextStory(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46486 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46485.blocks["flatMap"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657.runIds),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46486[0];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46486.length !== 1 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46485.runs[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487]) throw Error("PDF table cell " + this._cellId + " is not a single-run editable cell.");
    return D(this._model, this._injector, pdfEditTextAction, {
      pageId: this._pageId,
      objectId: this._tableId,
      storyId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46485.id,
      runId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487,
      previousText: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46485.runs[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46487].text,
      text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483
    }), this;
  }
  getStyle() {
    let {
      cell: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46493
    } = this._resolveCell();
    return JSON.parse(JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46493.style ?? {}));
  }
  setStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495) {
    let {
      cell: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496
    } = this._resolveCell();
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495.fontColor !== undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495.horizontalAlignment !== undefined) && this._getTextStory(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496), D(this._model, this._injector, pdfUpdateTableCellStyleAction, {
      pageId: this._pageId,
      tableId: this._tableId,
      cellId: this._cellId,
      fontColor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495.fontColor,
      horizontalAlignment: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495.horizontalAlignment === undefined ? undefined : gt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495.horizontalAlignment),
      patch: {
        fill: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495.fill,
        verticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495.verticalAlign
      }
    }), this;
  }
  _resolveCell() {
    if (!this._model["getMaterializedDocument"]().pages["some"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658.id === this._pageId)) throw Error("PDF\x20page\x20" + this._pageId + " no longer exists.");
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499 = this._model["getEditState"]().overlayObjects[this._tableId],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499.pageId) === this._pageId ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499.object : undefined,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500.type) === PdfObjectType.TABLE ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500.cells["find"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659.id === this._cellId) : undefined;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500.type !== PdfObjectType.TABLE || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501) throw Error("PDF table cell " + this._cellId + " no longer exists.");
    return {
      table: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500,
      cell: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501
    };
  }
  _getTextStory(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506 = this._model["getEditState"]().overlayTextStories[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505.contentStoryId];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506) throw Error("PDF table-cell story " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505.contentStoryId + " no longer exists on table " + this._tableId + " page " + this._pageId + ".");
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506;
  }
};
function gt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46872) {
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46872) {
    case HorizontalAlign.LEFT:
      return "left";
    case HorizontalAlign.CENTER:
      return "center";
    case HorizontalAlign.RIGHT:
      return "right";
    case HorizontalAlign.JUSTIFIED:
    case HorizontalAlign.BOTH:
      return "justify";
    default:
      throw RangeError("PDF paragraph horizontal alignment is unsupported.");
  }
}
export { W as FPdfTableCell };
