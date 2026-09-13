import { registerBoardDocumentTextExtension } from "@univerjs-pro/boards-ui";
import { DOCS_LATEX_PLUGIN, DocsLatexModel, InsertDocsLatexFormulaCommand, UniverDocsLatexPlugin, UpdateDocsLatexFormulaCommand, getFormulaLatexFromRange, isDocsLatexFormulaRange } from "@univerjs-pro/docs-latex";
import { CommandType, DependentOn, Disposable, ICommandService, IConfigService, IPermissionService, IUniverInstanceService, Inject, Injector, LocaleService, Plugin, ThemeService, UniverInstanceType, getColorStyle, merge, toDisposable } from "@univerjs/core";
import { DOC_PARAGRAPH_T_EDIT_MENU_ID, DOC_PARAGRAPH_T_INSERT_MENU_ID, DocCanvasPopManagerService, DocRenderController, EMPTY_PARAGRAPH_MENU_ID, FLOAT_TEXT_STYLE_MENU_ID, FLOAT_TOOLBAR_MENU_POSITION, UniverDocsUIPlugin, disableMenuWhenHeaderFooterEditing, drawDocCustomRangeChrome, hideMenuWhenSelectionInBlockRange, resolveDocCustomRangeChromeTheme } from "@univerjs/docs-ui";
import { CURSOR_TYPE, ComponentExtension, Documents, GlyphType, IRenderManagerService, UniverRenderEnginePlugin, ptToPixel } from "@univerjs/engine-render";
import { ComponentManager, ContextMenuGroup, ContextMenuPosition, IMenuManagerService, IRibbonService, IconManager, MenuItemType, MenuManagerPosition, RibbonInsertGroup, RibbonPosition, getMenuHiddenObservable, useDependency } from "@univerjs/ui";
import { DOC_INTERCEPTOR_POINT, DocInterceptorService, DocLayoutExecutorService, DocSelectionManagerService, DocSkeletonManagerService, UniverDocsPlugin, canEditDocumentTargets, getDocumentEntityParentPermissionObjectIds, getDocumentEntityPermissionObjectId } from "@univerjs/docs";
import { BehaviorSubject, Subject, combineLatest, map } from "rxjs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { FormulaAccentIcon, FormulaBracketIcon, FormulaFractionIcon, FormulaFunctionIcon, FormulaIntegralIcon, FormulaLargeOperatorIcon, FormulaLimitLogarithmIcon, FormulaMatrixIcon, FormulaOperatorIcon, FormulaRadicalIcon, FormulaScriptIcon, FunctionIcon } from "@univerjs/icons";
import { Button, Textarea, clsx } from "@univerjs/design";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { I, P, R, V } from "./docs-latex-ui-docs-latex-render.js";
import { Et, Q, Tn, X, Y, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46785 } from "./docs-latex-ui-docs-latex-uiplugin.js";
import { Z } from "./docs-latex-ui-docs-latex-presentation.js";
function O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46511) {
  "@babel/helpers - typeof";

  return O = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106 && typeof Symbol == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106 !== Symbol.prototype ? "symbol" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106;
  }, O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46511);
}
function St(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514) {
  if (O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513) != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514 || "default");
    if (O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516) != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514 === "string" ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513);
}
function Ct(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46522 = St(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521, "string");
  return O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46522) == "symbol" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46522 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46522 + "";
}
function k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46527) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526 = Ct(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46527,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46527, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525;
}
P.push(undefined, null, true, false);
I.decode();
"encodeInto" in R || (R.encodeInto = function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46615, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46616) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46617 = R.encode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46615);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46616.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46617), {
    read: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46615.length,
    written: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46617.length
  };
});
const Jt = new V();
registerBoardDocumentTextExtension(({
  documentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46645,
  documents: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46646
}) => {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46647 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46645.body;
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46646.register(new Et({
    clearFormulaHitRects: () => {},
    getBody: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46647,
    getLatex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46647 ? getFormulaLatexFromRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46647.dataStream) : "",
    makeDirty: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46646.makeDirty(true),
    setFormulaHitRect: () => {},
    renderService: Jt
  }));
});
const H = "docs-latex-ui.component.formula-popup";
function U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46651, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46652) {
  return function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46652(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46651);
  };
}
function W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46655, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46656, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46657, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46658) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46659 = arguments.length,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46660 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46659 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46656 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46658 === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46658 = Object.getOwnPropertyDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46656, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46657) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46658,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46661;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46660 = Reflect.decorate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46655, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46656, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46657, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46658);else {
    for (var var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D28 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46655.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D28 >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D28--) (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46661 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46655[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D28]) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46660 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46659 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46661(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46660) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46659 > 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46661(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46656, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46657, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46660) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46661(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46656, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46657)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46660);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46659 > 3 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46660 && Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46656, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46657, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46660), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46660;
}
function Yt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46669) {
  return JSON.stringify((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46669 ?? []).map(({
    collapsed: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195,
    endOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196,
    segmentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198 = "",
    segmentPage: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199 = "",
    startOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197
  }) => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195]));
}
let G = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205) {
    super(), this._docCanvasPopManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200, this._docSelectionManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201, this._docsLatexModel = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202, this._univerInstanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203, this._permissionService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204, this._renderManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205, k(this, "_formulaPopup", null), k(this, "_selectionAtOpen", null), k(this, "_activeFormulaTarget", null), k(this, "_formulaPopupOpen$", new BehaviorSubject(false)), k(this, "_templateInsert$", new Subject()), k(this, "formulaPopupOpen$", this._formulaPopupOpen$["asObservable"]()), k(this, "templateInsert$", this._templateInsert$["asObservable"]()), this.disposeWithMe(toDisposable(this._docSelectionManagerService["textSelection$"].subscribe(({
      textRanges: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468,
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469
    }) => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610 = this._selectionAtOpen;
      !this._formulaPopup || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.unitId || Yt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468) !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.key) && this.closeFormulaPopup();
    }))), this.disposeWithMe(this._permissionService["permissionPointUpdate$"].subscribe(() => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614 = this._selectionAtOpen) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614.unitId,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617 = this._activeFormulaTarget,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617.unitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617.rangeId : undefined;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616 && !this._canEditRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615 = this._selectionAtOpen) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615.segmentId) && this.closeFormulaPopup();
    })), this.disposeWithMe(this._renderManagerService["disposed$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625;
      ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625 = this._selectionAtOpen) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625.unitId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624 && this.closeFormulaPopup();
    }));
  }
  openFormulaPopup(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212) {
    this.closeFormulaPopup();
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212.unitId;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214 = this._normalizeFormulaParams(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46212);
    if (!this._canEditRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214.rangeId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214.segmentId)) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215 = this._getAnchorSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216 = this._getSelectedFormula(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214.initialLatex ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216.latex) ?? this._getSelectedText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215);
    return this._formulaPopup = this._docCanvasPopManagerService["attachPopupToRange"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215, {
      componentKey: H,
      direction: "bottom",
      extraProps: {
        initialLatex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217,
        rangeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214.rangeId ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216.range["rangeId"]),
        segmentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214.segmentId,
        selection: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215,
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213,
        onClose: () => this.closeFormulaPopup()
      }
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213), this._selectionAtOpen = {
      key: Yt(this._docSelectionManagerService["getTextRanges"]({
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213,
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213
      }) ?? []),
      segmentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215.segmentId,
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213
    }, this._formulaPopupOpen$["next"](true), this._formulaPopup;
  }
  requestTemplateInsert(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224) {
    return this._formulaPopup ? (this._templateInsert$["next"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224), true) : false;
  }
  activateFormulaTarget(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226) {
    this._activeFormulaTarget = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226,
      activatedAt: Date.now()
    };
  }
  closeFormulaPopup() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228 = this._formulaPopup;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228 && (this._formulaPopup = null, this._selectionAtOpen = null, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228.dispose(), this._formulaPopupOpen$["next"](false));
  }
  dispose() {
    this.closeFormulaPopup(), this._formulaPopupOpen$["complete"](), this._templateInsert$["complete"](), super.dispose();
  }
  _getAnchorSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230.selection) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230.selection;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230.startIndex != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230.endIndex != null) return {
      collapsed: false,
      endOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230.endIndex + 1,
      segmentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230.segmentId,
      segmentPage: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230.segmentPage,
      startOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230.startIndex
    };
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230.unitId) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231 = this._docSelectionManagerService["getTextRanges"]({
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230.unitId,
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230.unitId
    });
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628.collapsed)) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231.length - 1]) ?? null;
  }
  _normalizeFormulaParams(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235.rangeId || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235.initialLatex) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236 = this._activeFormulaTarget;
    return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236.unitId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234 || Date.now() - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236.activatedAt > 800 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235 : {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235
    };
  }
  _getSelectedText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241.collapsed || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241.startOffset == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241.endOffset == null) return "";
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243 = this._univerInstanceService["getUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240, UniverInstanceType.UNIVER_DOC),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243.getSelfOrHeaderFooterModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241.segmentId)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242.getBody();
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244.dataStream["slice"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241.startOffset, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241.endOffset)) ?? "";
  }
  _getSelectedFormula(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46255 = this._univerInstanceService["getUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250, UniverInstanceType.UNIVER_DOC),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46255 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46255.getSelfOrHeaderFooterModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251.segmentId)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252.getBody();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251.startOffset == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251.endOffset == null) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251.startOffset,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251.endOffset,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256.customRanges) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629 => isDocsLatexFormulaRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251.collapsed || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629.startIndex && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629.endIndex + 1 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629.startIndex < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629.endIndex + 1 > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257 : false);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259 ? {
      latex: getFormulaLatexFromRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256.dataStream) || ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254 = this._docsLatexModel["getFormula"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259.rangeId)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254.latex) || "",
      range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259
    } : null;
  }
  _canEditRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272 = "") {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273 = this._univerInstanceService["getUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270, UniverInstanceType.UNIVER_DOC);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271 ? canEditDocumentTargets(this._permissionService, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270, [...getDocumentEntityParentPermissionObjectIds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272, "custom-range", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271), getDocumentEntityPermissionObjectId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272, "custom-range", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271)]) : canEditDocumentTargets(this._permissionService, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270, []) : true;
  }
};
G = W([U(0, Inject(DocCanvasPopManagerService)), U(1, Inject(DocSelectionManagerService)), U(2, Inject(DocsLatexModel)), U(3, IUniverInstanceService), U(4, IPermissionService), U(5, IRenderManagerService)], G);
const K = {
    id: "docs-latex.operation.open-formula-popup",
    type: CommandType.OPERATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46671, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46672) => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46673;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46671.get(IUniverInstanceService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46675 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46672 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46672.unitId) ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46673 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674.getCurrentUnitOfType(UniverInstanceType.UNIVER_DOC)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46673.getUnitId());
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46675 ? !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46671.get(G).openFormulaPopup({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46672,
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46675
      }) : false;
    }
  },
  Xt = {
    id: "docs-latex.operation.close-formula-popup",
    type: CommandType.OPERATION,
    handler: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46681 => (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46681.get(G).closeFormulaPopup(), true)
  },
  Zt = ["fractions", "scripts", "radicals", "integrals", "large-operators", "brackets", "functions", "accents", "limits-logarithms", "operators", "matrices"];
const tn = "docs-latex-ui.ribbon.formula",
  nn = {
    fractions: "docs-latex-ui.ribbon.categories.fractions",
    scripts: "docs-latex-ui.ribbon.categories.scripts",
    radicals: "docs-latex-ui.ribbon.categories.radicals",
    integrals: "docs-latex-ui.ribbon.categories.integrals",
    "large-operators": "docs-latex-ui.ribbon.categories.largeOperators",
    brackets: "docs-latex-ui.ribbon.categories.brackets",
    functions: "docs-latex-ui.ribbon.categories.functions",
    accents: "docs-latex-ui.ribbon.categories.accents",
    "limits-logarithms": "docs-latex-ui.ribbon.categories.limitsLogarithms",
    operators: "docs-latex-ui.ribbon.categories.operators",
    matrices: "docs-latex-ui.ribbon.categories.matrices"
  },
  rn = {
    fractions: "FormulaFractionIcon",
    scripts: "FormulaScriptIcon",
    radicals: "FormulaRadicalIcon",
    integrals: "FormulaIntegralIcon",
    "large-operators": "FormulaLargeOperatorIcon",
    brackets: "FormulaBracketIcon",
    functions: "FormulaFunctionIcon",
    accents: "FormulaAccentIcon",
    "limits-logarithms": "FormulaLimitLogarithmIcon",
    operators: "FormulaOperatorIcon",
    matrices: "FormulaMatrixIcon"
  },
  an = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46694 => "docs-latex-ui.ribbon.menu." + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46694,
  on = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46695 => "docs-latex-ui.component.formula-gallery." + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46695;
var mn = "@univerjs-pro/docs-latex-ui",
  hn = "1.0.0-insiders.20260907-70fc579";
Y = W([U(0, Inject(ComponentManager)), U(1, Inject(IconManager))], Y);
X = W([U(0, IRibbonService), U(1, Inject(G))], X);
Tn = W([U(1, ICommandService), U(2, Inject(DocsLatexModel)), U(3, Inject(DocInterceptorService)), U(4, Inject(DocLayoutExecutorService)), U(5, Inject(DocSelectionManagerService)), U(6, Inject(DocSkeletonManagerService)), U(7, Inject(G)), U(8, Inject(Z)), U(9, Inject(V)), U(10, IRenderManagerService), U(11, Inject(ThemeService))], Tn);
Q = W([U(0, ICommandService), U(1, IMenuManagerService)], Q);
k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46785, "pluginName", DOCS_LATEX_PLUGIN + "_UI_PLUGIN"), k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46785, "packageName", mn), k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46785, "version", hn), k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46785, "type", UniverInstanceType.UNIVER_DOC), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46785 = W([DependentOn(UniverLicensePlugin, UniverDocsPlugin, UniverRenderEnginePlugin, UniverDocsUIPlugin, UniverDocsLatexPlugin), U(1, Inject(Injector)), U(2, IRenderManagerService), U(3, IConfigService)], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46785);
export { k, G, H, nn, Zt, on, tn, K, Xt, an, rn };
