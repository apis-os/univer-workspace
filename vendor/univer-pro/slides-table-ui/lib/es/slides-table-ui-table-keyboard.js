import { UniverLicensePlugin } from "@univerjs-pro/license";
import { ISlideDrawingService, PageElementTypeEnum, ReorderSlideElementsCommand, UniverSlidesPlugin, UpdateSlideDrawingCommand, getSlidePermissionValue, normalizeSlideDocumentDataStream, slideDocumentDataToPlainText } from "@univerjs-pro/slides";
import { DEFAULT_SLIDE_TABLE_THEME_PRESETS, DeleteSlideTableColumnsCommand, DeleteSlideTableRowsCommand, InsertSlideTableColumnsCommand, InsertSlideTableRowsCommand, MergeSlideTableCellsCommand, MoveSlideTableColumnsCommand, MoveSlideTableRowsCommand, RemoveSlideTableCommand, RemoveSlideTableMutation, SLIDE_TABLE_CONTROL_GUTTER, SetSlideTableMutation, SlideTableBorderDashEnum, SlideTableBorderPresetEnum, SlideTableFillTypeEnum, SlideTableModelService, SlideTablePictureFillModeEnum, SlideTableResourceService, SlideTableTextDirectionEnum, SlideTableVerticalAlignEnum, UniverSlidesTablePlugin, UnmergeSlideTableCellsCommand, UpdateSlideTableCommand, buildBorderPresetPatch, buildDefaultSlideTableThemes, buildSlideTableCellTextDataPatch, buildSlideTableControls, buildSlideTableTriggers, canMoveSlideTableColumns, canMoveSlideTableRows, collectSlideTableMergeRanges, expandSlideTableRangeToMergedCells, findSlideTableMergeRange, freezeSlideTableTheme, getDefaultSlideTableBorder, hitTestSlideTableControl, hitTestSlideTableFloatingControl, hitTestSlideTableTrigger, isPointInRect, isSlideTableMultiCellRange, iterateSelectedSlideTableCells, mergeSlideTableCellStyle, mergeSlideTableCells, normalizeSlideTableCellRange, resolveSlideTableCellBoundaryBorder, resolveSlideTableCellRect, resolveSlideTableCellTextMargins, resolveSlideTableRenderModel, resolveSlideTableThemePalette, unmergeSlideTableCells } from "@univerjs-pro/slides-table";
import { IEditorUIService, ISlideAlignmentGuideService, ISlideClipboardResourceAdapterService, ISlideDrawingStateService, ISlideEmbedFloatingActiveService, ISlideEmbedFocusOwnerService, ISlideEmbedMountService, ISlideTransformerVisibilityService, SLIDES_UI_PLUGIN_CONFIG_KEY, SLIDE_MAIN_VIEWPORT_KEY, SlideHitTestService, SlideInsertService, UniverSlidesUIPlugin, buildDrawingOKey, stripEditorUIDocumentData, withSlideEditPermission } from "@univerjs-pro/slides-ui";
import { ArrangeTypeEnum, BooleanNumber, ColorKit, CommandType, DEFAULT_STYLES, DependentOn, Disposable, DocumentDataModel, DocumentFlavor, EDITOR_ACTIVATED, FOCUSING_COMMON_DRAWINGS, FOCUSING_SLIDE, HorizontalAlign, ICommandService, IConfigService, IContextService, IImageIoService, IPermissionService, IUniverInstanceService, Inject, Injector, LocaleService, Optional, Plugin, PresetListType, RxDisposable, ThemeService, Tools, UniverInstanceType, VerticalAlign, WrapStrategy, createParagraphId, generateRandomId, merge, toDisposable, touchDependencies } from "@univerjs/core";
import { CURSOR_TYPE, DocumentSkeleton, DocumentViewModel, Documents, IRenderManagerService, RENDER_CLASS_TYPE, Rect, Transform, UniverRenderEnginePlugin, VERTICAL_ROTATE_ANGLE, Vector2, pxToNum } from "@univerjs/engine-render";
import { BuiltInUIPart, ComponentManager, ContextMenuGroup, FONT_SIZE_LIST, FontFamilyDropdown, IContextMenuService, IMenuManagerService, IRibbonService, IShortcutService, IUIPartsService, IconManager, KeyCode, MenuItemType, MenuManagerPosition, MetaKeys, connectInjector, useDependency, useObservable } from "@univerjs/ui";
import { BehaviorSubject, combineLatest, map, merge as mergeLocal, of, startWith } from "rxjs";
import { AdjustHeightDoubleIcon, AdjustWidthDoubleIcon, AlignBottomIcon, AlignTextBothIcon, AlignTopIcon, AllBorderIcon, BoldIcon, CancelMergeIcon, CheckMarkIcon, DeleteColumnDoubleIcon, DeleteIcon, DeleteRowDoubleIcon, DownBorderDoubleIcon, FontColorDoubleIcon, FontSizeIncreaseIcon, FontSizeReduceIcon, HorizontalBorderDoubleIcon, HorizontallyIcon, InnerBorderDoubleIcon, InsertRowAboveDoubleIcon, InsertRowBelowDoubleIcon, ItalicIcon, LeftBorderDoubleIcon, LeftInsertColumnDoubleIcon, LeftJustifyingIcon, MergeAllIcon, MoreDownIcon, NoBorderIcon, OrderIcon, OuterBorderDoubleIcon, PaintBucketDoubleIcon, PaintIcon, RightBorderDoubleIcon, RightInsertColumnDoubleIcon, RightJustifyingIcon, ShapeBackgroundColorDoubleIcon, StrikethroughIcon, TextIcon, UnderlineIcon, UnorderIcon, UpBorderDoubleIcon, VerticalBorderDoubleIcon, VerticalCenterIcon } from "@univerjs/icons";
import { FillStyleTabsEditor, keepFloatingToolbarPanelInteraction } from "@univerjs-pro/shape-editor-ui";
import { Button, Checkbox, ColorPicker, Dropdown, InputNumber, Select, Separator, Tooltip, borderClassName, clsx } from "@univerjs/design";
import { BulletListTypePicker, OrderListTypePicker, convertBodyToHtml, convertClipboardHtmlToDocumentData, removeClipboardHtmlImages } from "@univerjs/docs-ui";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { getImageSize } from "@univerjs/drawing";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { extractClipboardHtmlImageFiles, extractClipboardImageFiles, extractClipboardTextImageFile, isClipboardTextImage, normalizeClipboardImageFile } from "@univerjs/drawing-ui";
import { UnitAction } from "@univerjs/protocol";
import { parseHtmlTableClipboard } from "@univerjs-pro/docs-table";
import { W } from "./internal-core-endo.js";
function ea(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463367) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463367.key["length"] === 1 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463367.altKey && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463367.ctrlKey && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463367.metaKey;
}
function ta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463369) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463369 === "insertText" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463369 === "insertCompositionText";
}
var aa = class extends Disposable {
  constructor() {
    super(), W(this, "_handler", null), W(this, "_inputHandler", null), this._initNativeInputListeners();
  }
  setHandler(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46682) {
    return this._handler = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46682, toDisposable(() => {
      this._handler === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46682 && (this._handler = null);
    });
  }
  setInputHandler(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684) {
    return this._inputHandler = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684, toDisposable(() => {
      this._inputHandler === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684 && (this._inputHandler = null);
    });
  }
  handle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46686) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46687;
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46687 = this._handler) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46687.call(this, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46686)) ?? false;
  }
  handleInput(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46690) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46691;
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46691 = this._inputHandler) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46691.call(this, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46690)) ?? false;
  }
  _initNativeInputListeners() {
    if (typeof document > "u") return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46694 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681 => {
        !this.canHandleNativeInput(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681.isComposing || !ea(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681) || this.handleInput({
          kind: "text",
          text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681.key
        }) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681.preventDefault(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681.stopPropagation());
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46695 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683 => {
        !this.canHandleNativeInput(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683.data || !ta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683.inputType) || this.handleInput({
          kind: "text",
          text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683.data
        }) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683.preventDefault(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683.stopPropagation());
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46696 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685 => {
        this.canHandleNativeInput(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685, {
          allowDocsEditor: true
        }) && this.handleInput({
          kind: "composition-start"
        });
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46697 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687 => {
        !this.canHandleNativeInput(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687.data || this.handleInput({
          kind: "composition",
          text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687.data
        }) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687.preventDefault(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687.stopPropagation());
      };
    document.addEventListener("keydown", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46694, true), document.addEventListener("beforeinput", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46695, true), document.addEventListener("compositionstart", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46696, true), document.addEventListener("compositionend", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46697, true), this.disposeWithMe(toDisposable(() => {
      document.removeEventListener("keydown", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46694, true), document.removeEventListener("beforeinput", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46695, true), document.removeEventListener("compositionstart", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46696, true), document.removeEventListener("compositionend", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46697, true);
    }));
  }
};
export { aa as TableKeyboardServiceBase };
