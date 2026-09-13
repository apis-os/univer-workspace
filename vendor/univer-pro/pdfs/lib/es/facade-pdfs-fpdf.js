import { ApplyPdfHistoryCommand, ApplyPdfMutationBatchMutation, DEFAULT_PDF_TABLE_THEME_PRESETS, PDF_A4_PAGE_HEIGHT_PT, PDF_A4_PAGE_WIDTH_PT, PDF_EDITOR_NATIVE_TEXT_VISUAL_EDIT_METADATA, PdfAnnotationType, PdfAssetType, PdfDisplayOpType, PdfEditorMutationSource, PdfExportDisposition, PdfListKind, PdfListPresetId, PdfObjectType, PdfSemanticRole, PdfTableCellVerticalAlign, PdfTextAnchor, createPdfDefaultDividerInsertionBbox, createPdfDefaultListInsertionBbox, createPdfDefaultParagraphInsertionBbox, createPdfDefaultTableInsertionLayout, createPdfDefaultTextBoxInsertionBbox, createPdfEditorSession, createPdfNativeTextHitTargets, createPdfPage, createPdfTableGrid, emuToPt, isPdfEditorDividerObject, normalizePdfEditorManagedImageResource, pdfAddAnnotationAction, pdfAddDividerAction, pdfAddImageAction, pdfAddListAction, pdfAddParagraphAction, pdfAddTableAction, pdfAddTextBoxAction, pdfChangeListLevelAction, pdfChangeListStyleAction, pdfCropImageAction, pdfDeleteObjectsAction, pdfEditTextAction, pdfInsertListItemAction, pdfInsertPageAction, pdfInsertParagraphBlockAction, pdfMoveObjectAction, pdfPromoteNativeTextAction, pdfRemoveListItemAction, pdfRemoveManagedImageAction, pdfRemoveParagraphBlockAction, pdfReorderObjectAction, pdfResizeTableAction, pdfSetListStartNumberAction, pdfUpdateManagedImageAction, pdfUpdateObjectAppearanceAction, pdfUpdateObjectStateAction, pdfUpdateObjectStrokeAction, pdfUpdateParagraphStyleAction, pdfUpdateTableCellStyleAction, pdfUpdateTableThemeAction, pdfUpdateTextRangeStyleAction, pdfUpdateTextStyleAction, ptToEmu } from "@univerjs-pro/pdfs";
import { FBaseInitialable, FEnum, FUniver } from "@univerjs/core/facade";
import { HorizontalAlign, ICommandService, IUndoRedoService, IUniverInstanceService, ImageSourceType, Inject, Injector, Tools, UniverInstanceType, generateRandomId } from "@univerjs/core";
import { D } from "./facade-internal-glue.js";
import { J } from "./facade-pdfs-fpdf-page.js";
let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994 = class extends FBaseInitialable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46679) {
    super(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46679), this._model = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46679;
  }
  getId() {
    return this._model["getUnitId"]();
  }
  getName() {
    return this._model["getSnapshot"]().name;
  }
  save() {
    return Tools.deepClone(this._model["getSnapshot"]());
  }
  getDocument() {
    return this._model["getDocument"]();
  }
  getModel() {
    return this._model;
  }
  insertPage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46682) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46683 = this._model["getMaterializedDocument"]().pages,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46682 ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46683.length;
    if (!Number.isInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684 < 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684 > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46683.length) throw RangeError("PDF page insertion index is outside the document.");
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46685 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46683[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684 - 1] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46683[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46686 = createPdfPage({
        id: "pdf-page-" + generateRandomId(12),
        index: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684,
        size: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46685 ? {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46685.size
        } : {
          width: ptToEmu(PDF_A4_PAGE_WIDTH_PT),
          height: ptToEmu(PDF_A4_PAGE_HEIGHT_PT)
        },
        rotation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46685 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46685.rotation,
        pdfBoxes: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46685 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46685.pdfBoxes
      });
    return D(this._model, this._injector, pdfInsertPageAction, {
      page: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46686,
      atIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684,
      orderedPageIds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46683.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696.id)
    }), this._injector["createInstance"](J, this._model, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46686.id);
  }
  getPages() {
    return this._model["getMaterializedDocument"]().pages["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697 => this._injector["createInstance"](J, this._model, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697.id));
  }
  getPageById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46692) {
    return this.getPages().find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698.getId() === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46692) ?? null;
  }
  getPageByIndex(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46694) {
    return this.getPages()[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46694] ?? null;
  }
};
export { var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994 as FPdf };
