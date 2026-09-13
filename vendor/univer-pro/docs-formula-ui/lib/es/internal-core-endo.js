import { ConvertDocFormulaToTextCommand, DOC_FORMULA_PLUGIN, DOC_FORMULA_SCHEMA_VERSION, DocFormulaDisplayTextService, DocFormulaModel, DocFormulaService, InsertDocFormulaCommand, RemoveDocFormulaCommand, RemoveDocFormulaMutation, SetDocFormulaMutation, SetDocFormulaNumberFormatCommand, UniverDocsFormulaPlugin, UpdateDocFormulaCommand, findDocFormulaRange, isDocFormulaRange, isDocFormulaResource } from "@univerjs-pro/docs-formula";
import { CommandType, DEFAULT_NUMBER_FORMAT, DependentOn, Disposable, DocumentDataModel, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUniverInstanceService, Inject, Injector, LocaleService, Plugin, ThemeService, Tools, UniverInstanceType, VerticalAlign, createParagraphId, merge, touchDependencies } from "@univerjs/core";
import { DOC_INTERCEPTOR_POINT, DOC_SELECTION_OPTION_PRESERVE_CARET, DocInterceptorService, DocLayoutExecutorService, DocSelectionManagerService, DocSkeletonManagerService, UniverDocsPlugin, canEditDocumentTargets, getDocumentEntityParentPermissionObjectIds, getDocumentEntityPermissionObjectId } from "@univerjs/docs";
import { DocCanvasPopManagerService, DocFloatMenuService, DocHtmlExportService, DocParagraphMenuService, DocRenderController, IDocClipboardPasteAdapterService, IDocClipboardService, UniverDocsUIPlugin, disableMenuWhenHeaderFooterEditing, drawDocCustomRangeChrome, resolveDocCustomRangeChromeTheme } from "@univerjs/docs-ui";
import { CURSOR_TYPE, ComponentExtension, DocumentSkeleton, DocumentViewModel, Documents, IRenderManagerService, UniverRenderEnginePlugin, pixelToPt, ptToPixel } from "@univerjs/engine-render";
import { BehaviorSubject } from "rxjs";
import { ComponentManager, IMenuManagerService, IShortcutService, IconManager, KeyCode, MenuItemType, MenuManagerPosition, MetaKeys, RibbonInsertGroup, RibbonPosition, getMenuHiddenObservable, useDependency, useObservable } from "@univerjs/ui";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { FormulaBindingEditorDialog, FormulaBindingNumberFormatDialog, SHAPE_EDITOR_UI_PLUGIN_CONFIG_KEY, UniverShapeEditorUIPlugin } from "@univerjs-pro/shape-editor-ui";
import { DeleteIcon, FxIcon, NumberIcon, TextIcon, WriteIcon } from "@univerjs/icons";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Button, Tooltip } from "@univerjs/design";
import { useState } from "react";
import { J, K, Q, X, Y, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46658 } from "./docs-formula-ui-docs-formula-uiplugin.js";
const A = {
  fill: "rgba(0,\x200,\x200,\x200)",
  stroke: "rgba(0, 0, 0, 0)",
  strokeActive: "rgba(0,\x200,\x200,\x200)",
  strokeWidth: 0
};
const j = "DOC_FORMULA_EDITOR_POPUP",
  M = "DOC_FORMULA_HOVER_POPUP";
function N(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411) {
  "@babel/helpers - typeof";

  return N = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682 && typeof Symbol == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682 !== Symbol.prototype ? "symbol" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682;
  }, N(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411);
}
function fn_L0_core_endo_routine_pure_O1_zalloc_throws_TypeError_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414) {
  if (N(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413) != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414 || "default");
    if (N(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416) != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414 === "string" ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413);
}
function vt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422 = fn_L0_core_endo_routine_pure_O1_zalloc_throws_TypeError_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421, "string");
  return N(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422) == "symbol" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422 + "";
}
function P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426 = vt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425;
}
function F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432) {
  return function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431);
  };
}
function I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46435, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46436, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46439 = arguments.length,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46439 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46436 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438 === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438 = Object.getOwnPropertyDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46436, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46441;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440 = Reflect.decorate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46435, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46436, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438);else {
    for (var var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D9 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46435.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D9 >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D9--) (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46441 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46435[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D9]) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46439 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46441(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46439 > 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46441(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46436, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46441(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46436, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46439 > 3 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440 && Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46436, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440;
}
let L = class extends Disposable {
  get hasOpenPopup() {
    return this._editorTarget$["value"] != null || this._hoverTarget$["value"] != null;
  }
  get hasOpenEditor() {
    return this._editorTarget$["value"] != null;
  }
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693) {
    super(), this._popupManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688, this._selectionManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689, this._model = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690, this._univerInstanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691, this._permissionService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692, this._renderManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693, P(this, "_editorPopup", null), P(this, "_hoverPopup", null), P(this, "_lastFormulaTarget", null), P(this, "_editorTarget$", new BehaviorSubject(null)), P(this, "_hoverTarget$", new BehaviorSubject(null)), P(this, "editorTarget$", this._editorTarget$["asObservable"]()), P(this, "hoverTarget$", this._hoverTarget$["asObservable"]()), this.disposeWithMe(this._permissionService["permissionPointUpdate$"].subscribe(() => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 = this._editorTarget$["value"],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 = this._hoverTarget$["value"];
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 && !this._canEditRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.rangeId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.selection["segmentId"]) && this.closeEditor(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 && !this._canEditRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464.rangeId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464.segmentId) && this.closeHover();
    })), this.disposeWithMe(this._renderManagerService["disposed$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469;
      ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468 = this._editorTarget$["value"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468.unitId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467 && this.closeEditor(), ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469 = this._hoverTarget$["value"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469.unitId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467 && this.closeHover();
    }));
  }
  openEditor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101;
    if (!this._canEditRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100.rangeId, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100.selection) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101.segmentId)) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102 = this._resolveEditorSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102 ? (this.closeEditor(), this.closeHover(), this._editorTarget$["next"]({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100.unitId,
      rangeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100.rangeId,
      selection: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102
    }), this._editorPopup = this._popupManagerService["attachPopupToRange"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102, {
      componentKey: j,
      direction: "bottom",
      onClickOutside: () => this.closeEditor()
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100.unitId), this._editorPopup) : null;
  }
  openSelectedEditor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107 = this.getSelectedFormulaTarget(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107 ? this.openEditor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107) : null;
  }
  showHover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113;
    if (!this._canEditRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110.rangeId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110.segmentId)) return null;
    if (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112 = this._hoverTarget$["value"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112.unitId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110.unitId && ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113 = this._hoverTarget$["value"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113.rangeId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110.rangeId) return this._hoverPopup;
    this.closeHover();
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114 = this._getRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114) return null;
    this._lastFormulaTarget = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110, this._hoverTarget$["next"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110);
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1 = {
        componentKey: M,
        direction: "top-center",
        onClickOutside: () => this.closeHover()
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111();
    return this._hoverPopup = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115 ? this._popupManagerService["attachPopupToRect"](() => (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111()) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110.unitId) : this._popupManagerService["attachPopupToRange"]({
      collapsed: false,
      startOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114.startIndex,
      endOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114.endIndex + 1,
      segmentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110.segmentId,
      segmentPage: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110.segmentPage
    }, {
      ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1,
      multipleDirection: "top"
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110.unitId), this._hoverPopup;
  }
  showSelectedHover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123 = this.getSelectedFormulaTarget(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123 ? this.showHover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123) : null;
  }
  getSelectedFormulaTarget(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129 = this._hoverTarget$["value"];
    if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129.unitId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130 = this._univerInstanceService["getUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126, UniverInstanceType.UNIVER_DOC),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.getBody(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132 = this._selectionManagerService["getTextRanges"]({
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126
      });
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132.length) !== 1) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132[0];
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133.collapsed) return null;
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 = Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133.startOffset ?? 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133.endOffset ?? 0),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 = Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133.startOffset ?? 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133.endOffset ?? 0),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131.customRanges) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613.startIndex === var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613.endIndex + 1 === var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 && this._model["getFormula"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613.rangeId) != null);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134) return {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126,
      rangeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134.rangeId
    };
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128 = this._lastFormulaTarget) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128.unitId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126 ? this._getRange(this._lastFormulaTarget) : undefined;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135 && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135.endIndex + 1 && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135.startIndex ? {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126,
      rangeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135.rangeId
    } : null;
  }
  closeEditor() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146;
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146 = this._editorPopup) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146.dispose(), this._editorPopup = null, this._editorTarget$["next"](null);
  }
  closeHover() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148;
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148 = this._hoverPopup) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148.dispose(), this._hoverPopup = null, this._hoverTarget$["next"](null);
  }
  closeAndRestoreSelection() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150;
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB3 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150 = this._editorTarget$["value"]) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150.rangeId ? {
      unitId: this._editorTarget$["value"].unitId,
      rangeId: this._editorTarget$["value"].rangeId
    } : this._hoverTarget$["value"];
    if (!this.hasOpenPopup) return false;
    if (this.closeEditor(), this.closeHover(), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB3) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614 = this._getRange(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB3);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614 && this._selectionManagerService["replaceDocRanges"]([{
        startOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614.startIndex,
        endOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614.endIndex + 1,
        style: A
      }], {
        unitId: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB3.unitId,
        subUnitId: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB3.unitId
      });
    }
    return true;
  }
  dispose() {
    this.closeEditor(), this.closeHover(), this._editorTarget$["complete"](), this._hoverTarget$["complete"](), super.dispose();
  }
  _resolveEditorSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152.rangeId) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615 = this._getRange({
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152.unitId,
        rangeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152.rangeId
      });
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615 ? {
        collapsed: false,
        startOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615.startIndex,
        endOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615.endIndex + 1
      } : null;
    }
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152.selection) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152.selection;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153 = this._selectionManagerService["getTextRanges"]({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152.unitId
    });
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153.length - 1]) ?? null;
  }
  _getRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158 = this._univerInstanceService["getUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156.unitId, UniverInstanceType.UNIVER_DOC),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158.getSelfOrHeaderFooterModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156.segmentId)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157.getBody();
    if (!(!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159 || !this._model["getFormula"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156.rangeId))) return findDocFormulaRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156.rangeId);
  }
  _canEditRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166 = "") {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167 = this._univerInstanceService["getUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164, UniverInstanceType.UNIVER_DOC);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165 ? canEditDocumentTargets(this._permissionService, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164, [...getDocumentEntityParentPermissionObjectIds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166, "custom-range", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165), getDocumentEntityPermissionObjectId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166, "custom-range", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165)]) : canEditDocumentTargets(this._permissionService, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164, []) : true;
  }
};
L = I([F(0, Inject(DocCanvasPopManagerService)), F(1, Inject(DocSelectionManagerService)), F(2, Inject(DocFormulaModel)), F(3, IUniverInstanceService), F(4, IPermissionService), F(5, IRenderManagerService)], L);
var bt = "@univerjs-pro/docs-formula-ui",
  xt = "1.0.0-insiders.20260907-70fc579";
K = I([F(0, Inject(ComponentManager)), F(1, Inject(IconManager))], K);
J = I([F(0, Inject(LocaleService))], J);
Y = I([F(1, Inject(DocFormulaService)), F(2, Inject(J)), F(3, Inject(L)), F(4, Inject(DocInterceptorService)), F(5, Inject(DocLayoutExecutorService)), F(6, Inject(DocSelectionManagerService)), F(7, Inject(DocSkeletonManagerService)), F(8, Inject(DocFloatMenuService)), F(9, Inject(DocParagraphMenuService)), F(10, IRenderManagerService), F(11, Inject(ThemeService))], Y);
X = I([F(0, IDocClipboardService), F(1, IDocClipboardPasteAdapterService), F(2, Inject(DocHtmlExportService)), F(3, Inject(DocFormulaDisplayTextService)), F(4, Inject(DocFormulaModel))], X);
Q = I([F(0, ICommandService), F(1, IMenuManagerService), F(2, IShortcutService), F(3, IUniverInstanceService), F(4, Inject(L))], Q);
P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46658, "pluginName", DOC_FORMULA_PLUGIN + "_UI_PLUGIN"), P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46658, "packageName", bt), P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46658, "version", xt), P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46658, "type", UniverInstanceType.UNIVER_DOC), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46658 = I([DependentOn(UniverLicensePlugin, UniverDocsPlugin, UniverRenderEnginePlugin, UniverDocsUIPlugin, UniverDocsFormulaPlugin, UniverShapeEditorUIPlugin), F(1, Inject(Injector)), F(2, IRenderManagerService), F(3, IConfigService)], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46658);
export { A, L, j, M, P };
