import { ApplyPdfHistoryCommand, ApplyPdfMutationBatchMutation, DEFAULT_PDF_TABLE_THEME_PRESETS, PDF_A4_PAGE_HEIGHT_PT, PDF_A4_PAGE_WIDTH_PT, PDF_EDITOR_NATIVE_TEXT_VISUAL_EDIT_METADATA, PdfAnnotationType, PdfAssetType, PdfDisplayOpType, PdfEditorMutationSource, PdfExportDisposition, PdfListKind, PdfListPresetId, PdfObjectType, PdfSemanticRole, PdfTableCellVerticalAlign, PdfTextAnchor, createPdfDefaultDividerInsertionBbox, createPdfDefaultListInsertionBbox, createPdfDefaultParagraphInsertionBbox, createPdfDefaultTableInsertionLayout, createPdfDefaultTextBoxInsertionBbox, createPdfEditorSession, createPdfNativeTextHitTargets, createPdfPage, createPdfTableGrid, emuToPt, isPdfEditorDividerObject, normalizePdfEditorManagedImageResource, pdfAddAnnotationAction, pdfAddDividerAction, pdfAddImageAction, pdfAddListAction, pdfAddParagraphAction, pdfAddTableAction, pdfAddTextBoxAction, pdfChangeListLevelAction, pdfChangeListStyleAction, pdfCropImageAction, pdfDeleteObjectsAction, pdfEditTextAction, pdfInsertListItemAction, pdfInsertPageAction, pdfInsertParagraphBlockAction, pdfMoveObjectAction, pdfPromoteNativeTextAction, pdfRemoveListItemAction, pdfRemoveManagedImageAction, pdfRemoveParagraphBlockAction, pdfReorderObjectAction, pdfResizeTableAction, pdfSetListStartNumberAction, pdfUpdateManagedImageAction, pdfUpdateObjectAppearanceAction, pdfUpdateObjectStateAction, pdfUpdateObjectStrokeAction, pdfUpdateParagraphStyleAction, pdfUpdateTableCellStyleAction, pdfUpdateTableThemeAction, pdfUpdateTextRangeStyleAction, pdfUpdateTextStyleAction, ptToEmu } from "@univerjs-pro/pdfs";
import { FBaseInitialable, FEnum, FUniver } from "@univerjs/core/facade";
import { HorizontalAlign, ICommandService, IUndoRedoService, IUniverInstanceService, ImageSourceType, Inject, Injector, Tools, UniverInstanceType, generateRandomId } from "@univerjs/core";
import { O } from "./facade-pdfs-fpdf-page-element.js";
import { D } from "./facade-internal-glue.js";
let K = class extends O {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46509, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46510, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46511, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512) {
    super(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46509, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46510, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46511, PdfObjectType.TEXT_BOX, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512);
  }
  getText() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517 = this._model["getMaterializedDocument"](),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46518 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517.objects[this._objectId];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46518 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46518.type !== PdfObjectType.TEXT_BOX) throw Error("PDF\x20text\x20box\x20" + this._objectId + "\x20no\x20longer\x20exists\x20on\x20page\x20" + this._pageId + ".");
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46518;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519.runs) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519.runs["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660.text).join("");
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519.textStoryId ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517.textStories[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519.textStoryId] : undefined;
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520.blocks["flatMap"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661.runIds).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663;
      return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46520.runs[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663.text) ?? "";
    }).join("")) ?? "";
  }
  getTextRuns() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525 = this._getCurrentObject();
    return JSON.parse(JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525.runs ?? []));
  }
  setText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46527) {
    return this._getCurrentObject(), D(this._model, this._injector, pdfEditTextAction, {
      pageId: this._pageId,
      objectId: this._objectId,
      text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46527
    }), this;
  }
  setTextStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530) {
    return this._getCurrentObject(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530 ? D(this._model, this._injector, pdfUpdateTextRangeStyleAction, {
      pageId: this._pageId,
      objectId: this._objectId,
      range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530,
      textStyle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529
    }) : D(this._model, this._injector, pdfUpdateTextStyleAction, {
      pageId: this._pageId,
      objectId: this._objectId,
      textStyle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529
    }), this;
  }
  getTextAnchor() {
    return this._getCurrentObject().textAnchor ?? PdfTextAnchor.START;
  }
  setTextAnchor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46533) {
    return this._getCurrentObject(), D(this._model, this._injector, pdfUpdateTextStyleAction, {
      pageId: this._pageId,
      objectId: this._objectId,
      textAnchor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46533
    }), this;
  }
};
export { K as FPdfTextBox };
