import { ApplyPdfHistoryCommand, ApplyPdfMutationBatchMutation, DEFAULT_PDF_TABLE_THEME_PRESETS, PDF_A4_PAGE_HEIGHT_PT, PDF_A4_PAGE_WIDTH_PT, PDF_EDITOR_NATIVE_TEXT_VISUAL_EDIT_METADATA, PdfAnnotationType, PdfAssetType, PdfDisplayOpType, PdfEditorMutationSource, PdfExportDisposition, PdfListKind, PdfListPresetId, PdfObjectType, PdfSemanticRole, PdfTableCellVerticalAlign, PdfTextAnchor, createPdfDefaultDividerInsertionBbox, createPdfDefaultListInsertionBbox, createPdfDefaultParagraphInsertionBbox, createPdfDefaultTableInsertionLayout, createPdfDefaultTextBoxInsertionBbox, createPdfEditorSession, createPdfNativeTextHitTargets, createPdfPage, createPdfTableGrid, emuToPt, isPdfEditorDividerObject, normalizePdfEditorManagedImageResource, pdfAddAnnotationAction, pdfAddDividerAction, pdfAddImageAction, pdfAddListAction, pdfAddParagraphAction, pdfAddTableAction, pdfAddTextBoxAction, pdfChangeListLevelAction, pdfChangeListStyleAction, pdfCropImageAction, pdfDeleteObjectsAction, pdfEditTextAction, pdfInsertListItemAction, pdfInsertPageAction, pdfInsertParagraphBlockAction, pdfMoveObjectAction, pdfPromoteNativeTextAction, pdfRemoveListItemAction, pdfRemoveManagedImageAction, pdfRemoveParagraphBlockAction, pdfReorderObjectAction, pdfResizeTableAction, pdfSetListStartNumberAction, pdfUpdateManagedImageAction, pdfUpdateObjectAppearanceAction, pdfUpdateObjectStateAction, pdfUpdateObjectStrokeAction, pdfUpdateParagraphStyleAction, pdfUpdateTableCellStyleAction, pdfUpdateTableThemeAction, pdfUpdateTextRangeStyleAction, pdfUpdateTextStyleAction, ptToEmu } from "@univerjs-pro/pdfs";
import { FBaseInitialable, FEnum, FUniver } from "@univerjs/core/facade";
import { HorizontalAlign, ICommandService, IUndoRedoService, IUniverInstanceService, ImageSourceType, Inject, Injector, Tools, UniverInstanceType, generateRandomId } from "@univerjs/core";
import { D } from "./facade-internal-glue.js";
var O = class {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109) {
    this._model = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105, this._pageId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106, this._objectId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107, this._objectType = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109;
  }
  getId() {
    return this._objectId;
  }
  getType() {
    return this._objectType;
  }
  getData() {
    return Tools.deepClone(this._getCurrentObject());
  }
  getTransform() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115 = this._getCurrentObject(),
      [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115.bbox,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115.transform,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120 ? Qe(Math.atan2(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120[1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120[0]) * 180 / Math.PI) : 0,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120[0] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120[3] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120[1] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120[2] : 1;
    return {
      left: emuToPt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116),
      top: emuToPt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117),
      width: emuToPt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116),
      height: emuToPt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117),
      rotation: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2,
      flipX: false,
      flipY: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 < 0
    };
  }
  setTransform(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127) {
    k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127.left, "left"), k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127.top, "top"), A(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127.width, "width"), A(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127.height, "height"), k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127.rotation, "rotation");
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A = [ptToEmu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127.left), ptToEmu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127.top), ptToEmu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127.width), ptToEmu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127.height)];
    return this._setPlacement(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A, fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sigDC72(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127)), this;
  }
  setPosition(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130) {
    return k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129, "left"), k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130, "top"), this.setTransform({
      ...this.getTransform(),
      left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129,
      top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130
    });
  }
  setSize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134) {
    return A(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133, "width"), A(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134, "height"), this.setTransform({
      ...this.getTransform(),
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134
    });
  }
  setRotation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137) {
    return k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137, "rotation"), this.setTransform({
      ...this.getTransform(),
      rotation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137
    });
  }
  setVisible(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139) {
    return D(this._model, this._injector, pdfUpdateObjectStateAction, {
      pageId: this._pageId,
      objectId: this._objectId,
      visible: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139
    }), this;
  }
  setLocked(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141) {
    return D(this._model, this._injector, pdfUpdateObjectStateAction, {
      pageId: this._pageId,
      objectId: this._objectId,
      locked: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141
    }), this;
  }
  bringToFront() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143 = this._getPageZIndexes().reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468) => Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468), 0);
    return this._setZIndex(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143 + 1), this;
  }
  sendToBack() {
    return this._setZIndex(0), this;
  }
  bringForward() {
    return this._reorderBy(1), this;
  }
  sendBackward() {
    return this._reorderBy(-1), this;
  }
  remove() {
    this._getCurrentObject(), D(this._model, this._injector, pdfDeleteObjectsAction, {
      pageId: this._pageId,
      objectIds: [this._objectId]
    });
  }
  _getCurrentObject() {
    if (!this._model["getMaterializedDocument"]().pages["some"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469.id === this._pageId)) throw Error("PDF page " + this._pageId + " no longer exists.");
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145 = this._model["getEditState"]().overlayObjects[this._objectId];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145.pageId !== this._pageId) throw Error("PDF element " + this._objectId + "\x20no\x20longer\x20exists\x20on\x20page\x20" + this._pageId + ".");
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145.object;
  }
  _setPlacement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148) {
    D(this._model, this._injector, pdfMoveObjectAction, {
      pageId: this._pageId,
      objectId: this._objectId,
      bbox: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147,
      transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148
    });
  }
  _setZIndex(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151) {
    this._getCurrentObject(), D(this._model, this._injector, pdfReorderObjectAction, {
      pageId: this._pageId,
      objectId: this._objectId,
      zIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151
    });
  }
  _reorderBy(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153) {
    this._getCurrentObject(), D(this._model, this._injector, pdfReorderObjectAction, {
      pageId: this._pageId,
      objectId: this._objectId,
      delta: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153
    });
  }
  _getPageZIndexes() {
    return Object.values(this._model["getEditState"]().overlayObjects).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.pageId === this._pageId).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.zIndex);
  }
};
function Qe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46754) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12 = Math.round(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46754 % 360 * 1000000000) / 1000000000;
  return Object.is(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12, -0) ? 0 : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12;
}
function fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sigDC72(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46756, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46757) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46756[0] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46756[2]) / 2,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D15 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46756[1] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46756[3]) / 2,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46758 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46757.rotation,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46759 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46757.flipY;
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46757.flipX && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46758 += 180, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46759 = !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46759);
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46758 * Math.PI / 180,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17 = Math.cos(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18 = Math.sin(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D19 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46759 ? -1 : 1,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46760 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46761 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D20 = -var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D19,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D21 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D19;
  return [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46760, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46761, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D20, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D21, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46760 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D20 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D15, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D15 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46761 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D21 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D15];
}
function k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46768, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46769) {
  if (!Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46768)) throw RangeError("PDF element " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46769 + " must be a finite number.");
}
function A(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46772, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46773) {
  if (!Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46772) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46772 <= 0) throw RangeError("PDF element " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46773 + "\x20must\x20be\x20a\x20positive\x20finite\x20number.");
}
export { O as FPdfPageElement };
