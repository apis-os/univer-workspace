import { ApplyPdfHistoryCommand, ApplyPdfMutationBatchMutation, DEFAULT_PDF_TABLE_THEME_PRESETS, PDF_A4_PAGE_HEIGHT_PT, PDF_A4_PAGE_WIDTH_PT, PDF_EDITOR_NATIVE_TEXT_VISUAL_EDIT_METADATA, PdfAnnotationType, PdfAssetType, PdfDisplayOpType, PdfEditorMutationSource, PdfExportDisposition, PdfListKind, PdfListPresetId, PdfObjectType, PdfSemanticRole, PdfTableCellVerticalAlign, PdfTextAnchor, createPdfDefaultDividerInsertionBbox, createPdfDefaultListInsertionBbox, createPdfDefaultParagraphInsertionBbox, createPdfDefaultTableInsertionLayout, createPdfDefaultTextBoxInsertionBbox, createPdfEditorSession, createPdfNativeTextHitTargets, createPdfPage, createPdfTableGrid, emuToPt, isPdfEditorDividerObject, normalizePdfEditorManagedImageResource, pdfAddAnnotationAction, pdfAddDividerAction, pdfAddImageAction, pdfAddListAction, pdfAddParagraphAction, pdfAddTableAction, pdfAddTextBoxAction, pdfChangeListLevelAction, pdfChangeListStyleAction, pdfCropImageAction, pdfDeleteObjectsAction, pdfEditTextAction, pdfInsertListItemAction, pdfInsertPageAction, pdfInsertParagraphBlockAction, pdfMoveObjectAction, pdfPromoteNativeTextAction, pdfRemoveListItemAction, pdfRemoveManagedImageAction, pdfRemoveParagraphBlockAction, pdfReorderObjectAction, pdfResizeTableAction, pdfSetListStartNumberAction, pdfUpdateManagedImageAction, pdfUpdateObjectAppearanceAction, pdfUpdateObjectStateAction, pdfUpdateObjectStrokeAction, pdfUpdateParagraphStyleAction, pdfUpdateTableCellStyleAction, pdfUpdateTableThemeAction, pdfUpdateTextRangeStyleAction, pdfUpdateTextStyleAction, ptToEmu } from "@univerjs-pro/pdfs";
import { FBaseInitialable, FEnum, FUniver } from "@univerjs/core/facade";
import { HorizontalAlign, ICommandService, IUndoRedoService, IUniverInstanceService, ImageSourceType, Inject, Injector, Tools, UniverInstanceType, generateRandomId } from "@univerjs/core";
import { O } from "./facade-pdfs-fpdf-page-element.js";
import { W } from "./facade-pdfs-fpdf-table-cell.js";
import { D } from "./facade-internal-glue.js";
let U = class extends O {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46423, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424) {
    super(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46423, PdfObjectType.TABLE, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46424);
  }
  getRowCount() {
    return this._getCurrentObject().rows["length"];
  }
  getColumnCount() {
    return this._getCurrentObject().columns["length"];
  }
  getCell(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46429, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433 = this._getCurrentObject(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433.rows[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46429]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431.id,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46435 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433.columns[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432.id,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46436 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433.cells["find"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633.rowId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633.columnId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46435);
    if (!Number.isInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46429) || !Number.isInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46435 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46436) throw RangeError("PDF table cell coordinates are outside the current table.");
    return this._injector["createInstance"](W, this._model, this._pageId, this._objectId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46436.id);
  }
  resize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447 = this._getCurrentObject();
    if (!Number.isSafeInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445 <= 0 || !Number.isSafeInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446 <= 0) throw RangeError("PDF table row and column counts must be positive safe integers.");
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446 > 10000) throw RangeError("PDF table resize supports at most 10,000 cells.");
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447.bbox[2] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447.bbox[0],
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447.bbox[3] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447.bbox[1],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448 = Array.from({
        length: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445
      }, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635) => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636;
        return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447.rows[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636.id) ?? G("row");
      }),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449 = Array.from({
        length: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446
      }, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641) => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642;
        return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447.columns[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642.id) ?? G("column");
      }),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2 = [],
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3 = [],
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4 = [];
    for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 += 1) for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D += 1) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447.rows[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450.id,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447.columns[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451.id,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447.cells["find"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.rowId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.columnId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462) : undefined;
      if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463) {
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4.push({
          id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.id,
          contentStoryId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.contentStoryId
        });
        continue;
      }
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 = fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF1(this._objectId);
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4.push({
        id: G("cell"),
        contentStoryId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464.id
      });
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452 = createPdfTableGrid({
        width: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7,
        height: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8,
        rowIds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448,
        columnIds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449,
        cells: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4
      }),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46453 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452.cells["map"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647) => ({
        ...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647],
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646
      })),
      var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46453.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648.contentStoryId)),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454 = this._model["getEditState"](),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A5 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447.cells["filter"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649 => !var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649.contentStoryId)).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454.overlayTextStories[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650.contentStoryId]).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651);
    return D(this._model, this._injector, pdfResizeTableAction, {
      pageId: this._pageId,
      tableId: this._objectId,
      bbox: [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447.bbox],
      rows: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452.rows,
      columns: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452.columns,
      cells: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46453,
      addedStories: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2,
      removedStories: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A5
    }), this;
  }
  getTheme() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465 = this._getCurrentObject();
    return JSON.parse(JSON.stringify({
      styleId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465.styleId,
      options: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465.options
    }));
  }
  setTheme(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467) {
    return this._getCurrentObject(), D(this._model, this._injector, pdfUpdateTableThemeAction, {
      pageId: this._pageId,
      tableId: this._objectId,
      styleId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467.styleId,
      options: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467.options
    }), this;
  }
};
function G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46870) {
  return "pdf-facade-table-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46870 + "-" + generateRandomId(12);
}
function fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46874) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46875 = G("story"),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46876 = G("block"),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46877 = G("run");
  return {
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46875,
    objectIds: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46874],
    blocks: [{
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46876,
      runIds: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46877],
      role: PdfSemanticRole.PARAGRAPH
    }],
    runs: {
      [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46877]: {
        id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46877,
        text: "",
        fontSize: 12
      }
    }
  };
}
export { U as FPdfTable };
