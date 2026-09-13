import { BoardElementType, BoardToolType, IBoardElementService, RemoveBoardElementsOperation, UniverBoardsPlugin, UpdateBoardElementsCommand, getBoardPermissionValue, resolveBoardElementLocalTransformForParent } from "@univerjs-pro/boards";
import { DeleteBoardTableColumnsCommand, DeleteBoardTableRowsCommand, InsertBoardTableColumnsCommand, InsertBoardTableRowsCommand, MergeBoardTableCellsCommand, MoveBoardTableColumnsCommand, MoveBoardTableRowsCommand, RemoveBoardTableMutation, SetBoardTableBorderPresetCommand, SetBoardTableCellStyleCommand, SetBoardTableMutation, UniverBoardsTablePlugin, UnmergeBoardTableCellsCommand, UpdateBoardTableCommand } from "@univerjs-pro/boards-table";
import { BOARDS_UI_PLUGIN_CONFIG_KEY, BOARD_MAIN_VIEWPORT_KEY, BoardCanvasPopManagerService, BoardCopySelectionOperation, BoardCutSelectionOperation, BoardDeleteSelectionOperation, BoardImageInsertService, BoardInteractionSurfaceService, IBoardClipboardResourceAdapterService, IBoardElementStateService, IBoardUIStateService, UniverBoardsUIPlugin, getBoardElementRenderObjectKey, parseBoardElementRenderObjectKey, resolveBoardFloatingToolbarSelection } from "@univerjs-pro/boards-ui";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { SLIDE_TABLE_CONTROL_GUTTER, SlideTableBorderDashEnum, SlideTableBorderPresetEnum, SlideTableFillTypeEnum, SlideTableModelService, SlideTablePictureFillModeEnum, SlideTableResourceService, SlideTableTextDirectionEnum, SlideTableVerticalAlignEnum, UniverSlidesTablePlugin, buildSlideTableCellTextDataPatch, buildSlideTableTriggers, canMoveSlideTableColumns, canMoveSlideTableRows, collectSlideTableMergeRanges, expandSlideTableRangeToMergedCells, hitTestSlideTableTrigger, normalizeSlideTableCellRange, resizeSlideTableColumnBoundary, resizeSlideTableRowBoundary, resolveSlideTableCellTextMargins, resolveSlideTableRenderModel, resolveSlideTableThemePalette } from "@univerjs-pro/slides-table";
import { SLIDE_TABLE_CONTEXT_MENU_ACTIONS, SlideTableCellEditorService, SlideTableObject, SlideTableSelectionService, TableKeyboardServiceBase, TableThemeGallery, TableToolbarDropdownInteractionGuard, UniverSlidesTableUIPlugin, buildSlideTableBackgroundColorPatch, buildSlideTableBackgroundFillPatch, buildSlideTableBorderPresetPatch, buildSlideTableBorderStylePatch, buildSlideTableClearTextPatch, buildSlideTableContextMenuCommand, buildSlideTableDeleteToolbarCommand, buildSlideTableFontFamilyPatch, buildSlideTableFontSizePatch, buildSlideTableInsertDotControlState, buildSlideTableKeyboardShortcutBindings, buildSlideTableMergeToolbarCommand, buildSlideTablePasteHtmlPatch, buildSlideTablePasteTextPatch, buildSlideTableTextAlignPatch, buildSlideTableTextColorPatch, buildSlideTableTextFillPatch, buildSlideTableTextStylePatch, ensureOption, getSlideTableFillPreviewStyle, getSlideTableFillType, getSlideTableGradientValue, getSlideTableSelectionContext, gradientValueToSlideTableFill, isSlideTableDocumentEditorTarget, isSlideTableEditableTarget, isSlideTableInsertDotTrigger, normalizeSlideTableCellDocumentData, replaceSlideTableCellDocumentText, resolveFirstSlideTableSelectionCell, resolveNextSlideTableKeyboardCell, resolveSlideTableCellEditorLayout, resolveSlideTableCellEditorTarget, resolveSlideTableContextMenuActions, resolveSlideTableDocumentHorizontalAlign, resolveSlideTableKeyboardMovement, resolveSlideTableMergeToolbarAction, resolveSlideTableObjectSelection, resolveSlideTableSelectionValues, resolveSlideTableToolbarActions, serializeSlideTableCellStyleAttribute, serializeSlideTableSelectionToHtml, serializeSlideTableSelectionToText, toCoreVerticalAlign } from "@univerjs-pro/slides-table-ui";
import { EditorUIService, IEditorUIService, UniverSlidesUIPlugin, stripEditorUIDocumentData } from "@univerjs-pro/slides-ui";
import { BooleanNumber, CommandType, DependentOn, Disposable, DisposableCollection, HorizontalAlign, ICommandService, IConfigService, IContextService, IImageIoService, IPermissionService, IUniverInstanceService, Inject, Injector, LocaleService, Plugin, RxDisposable, ThemeService, Tools, UniverInstanceType, VerticalAlign, generateRandomId, merge, toDisposable, touchDependencies } from "@univerjs/core";
import { CURSOR_TYPE, IRenderManagerService, UniverRenderEnginePlugin, Vector2 } from "@univerjs/engine-render";
import { ComponentManager, ContextMenuGroup, FONT_SIZE_LIST, FontFamilyDropdown, IContextMenuService, ILayoutService, IMenuManagerService, IShortcutService, KeyCode, MenuItemType, MenuManagerPosition, MetaKeys, useDependency, useObservable } from "@univerjs/ui";
import { FillStyleTabsEditor, keepFloatingToolbarPanelInteraction } from "@univerjs-pro/shape-editor-ui";
import { Button, ColorPicker, Dropdown, InputNumber, Select, Separator, Tooltip, borderClassName, clsx } from "@univerjs/design";
import { AlignBottomIcon, AlignTextBothIcon, AlignTopIcon, AllBorderIcon, BoldIcon, CancelMergeIcon, DeleteIcon, DownBorderDoubleIcon, FontColorDoubleIcon, HorizontalBorderDoubleIcon, HorizontallyIcon, InnerBorderDoubleIcon, ItalicIcon, LeftBorderDoubleIcon, LeftJustifyingIcon, MergeAllIcon, MoreDownIcon, NoBorderIcon, OuterBorderDoubleIcon, PaintBucketDoubleIcon, PaintIcon, RightBorderDoubleIcon, RightJustifyingIcon, ShapeBackgroundColorDoubleIcon, StrikethroughIcon, TextIcon, UnderlineIcon, UpBorderDoubleIcon, VerticalBorderDoubleIcon, VerticalCenterIcon } from "@univerjs/icons";
import { useCallback, useMemo, useRef, useState } from "react";
import { getImageSize } from "@univerjs/drawing";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { extractClipboardHtmlImageFiles, extractClipboardImageFiles, extractClipboardTextImageFile, isClipboardTextImage, normalizeClipboardImageFile } from "@univerjs/drawing-ui";
import { UnitAction } from "@univerjs/protocol";
import { convertPlainTextTableToHtml, parseHtmlTableClipboard } from "@univerjs-pro/docs-table";
import { convertBodyToHtml, convertClipboardHtmlToDocumentData, removeClipboardHtmlImages } from "@univerjs/docs-ui";
import { J } from "./boards-table-ui-boards-table-uiplugin-boards-table-ui-j.js";
import { Vi } from "./boards-table-ui-boards-table-uiplugin-internal-core-endo.js";
const qi = SLIDE_TABLE_CONTROL_GUTTER + 18;
let Ji = class extends RxDisposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46441, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446) {
    super(), this._renderContext = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440, this._boardCanvasPopManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46441, this._boardElementService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442, this._slideTableSelectionService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443, this._elementStateService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444, this._slideTableResourceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445, this._interactionSurfaceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446, J(this, "_popupDisposable", null), J(this, "_popupSelectionKey", null), J(this, "_eventDisposables", new DisposableCollection()), this.disposeWithMe(this._eventDisposables), this._init();
  }
  dispose() {
    this._clearPopup(), super.dispose();
  }
  _init() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454 = this._renderContext["scene"].getTransformerByCreate();
    this._subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454.createControl$, () => this._showPopupForSelection()), this._subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454.clearControl$, () => this._clearPopupIfSelectionChanged()), this._subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454.changeStart$, () => this._clearPopup()), this._subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454.changeEnd$, () => setTimeout(() => this._showPopupForSelection(), 0)), this._subscribe(this._slideTableSelectionService["selection$"], () => setTimeout(() => this._showPopupForSelection(), 0)), this._subscribe(this._elementStateService["state$"], () => setTimeout(() => this._showPopupForSelection(), 0)), this._subscribe(this._interactionSurfaceService["interactionSurfaceActive$"], () => {
      if (this._interactionSurfaceService["isInteractionSurfaceActive"]) {
        this._clearPopup();
        return;
      }
      setTimeout(() => this._showPopupForSelection(), 0);
    });
  }
  _subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46456, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46456.subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457);
    this._eventDisposables["add"](toDisposable(() => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118;
      (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458.unsubscribe) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458.dispose) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458);
    }));
  }
  _clearPopup() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46462;
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46462 = this._popupDisposable) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46462.dispose(), this._popupDisposable = null, this._popupSelectionKey = null;
  }
  _clearPopupIfSelectionChanged() {
    setTimeout(() => {
      this._isPopupSelectionStillActive() || this._clearPopup();
    }, 0);
  }
  _isPopupSelectionStillActive() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464 = this._elementStateService["getSnapshot"]();
    return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464.context || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464.selectedIds["length"] ? false : this._popupSelectionKey === this._buildPopupSelectionKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464.context["unitId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464.context["subUnitId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464.selectedIds);
  }
  _buildPopupSelectionKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466 + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467 + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468.join(",");
  }
  _showPopupForSelection() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472;
    if (this._interactionSurfaceService["isInteractionSurfaceActive"]) {
      this._clearPopup();
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473 = this._elementStateService["getSnapshot"]();
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473.isTransforming) {
      this._clearPopup();
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474 = this._renderContext["scene"].getTransformerByCreate().getSelectedObjectMap();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474.size) {
      if (this._showPopupForTableSelection() || this._isPopupSelectionStillActive()) return;
      this._clearPopup();
      return;
    }
    if (resolveBoardFloatingToolbarSelection({
      context: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473.context,
      selectedIds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473.selectedIds,
      getElementById: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123) => this._boardElementService["getElementById"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123)
    }).owner !== "table") {
      this._clearPopup();
      return;
    }
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2 = Array.from(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474.values()).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124 => this._resolveSelectedEntry(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124)).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126.elementData["element"].type === BoardElementType.Table);
    if (!var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2.length) {
      this._clearPopup();
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127.elementData["elementId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473.focusedId) ?? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2[0];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475) {
      this._clearPopup();
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476 = this._buildPopupSelectionKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475.elementData["unitId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475.elementData["subUnitId"], ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473.context) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472.unitId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475.elementData["unitId"] && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473.context["subUnitId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475.elementData["subUnitId"] && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473.selectedIds["length"] ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473.selectedIds : [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475.elementData["elementId"]]);
    this._popupDisposable && this._popupSelectionKey === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476 || (this._clearPopup(), this._popupDisposable = this.disposeWithMe(this._boardCanvasPopManagerService["attachPopupToObject"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475.elementData["unitId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475.elementData["subUnitId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475.object, {
      componentKey: Vi,
      direction: "top-center",
      offset: [0, qi],
      anchorBoundResolver: this._resolveSelectionAnchorBoundResolver(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475.elementData),
      extraProps: {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475.elementData["unitId"],
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475.elementData["subUnitId"],
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475.elementData["elementId"],
        tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475.elementData["element"].tableId
      }
    })), this._popupSelectionKey = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476);
  }
  _showPopupForTableSelection() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482 = this._slideTableSelectionService["getSelection"]();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482.kind === "text" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482.ranges["length"]) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483 = this._resolveTableSelectionObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482.elementId);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484 = this._boardElementService["getElementById"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482.elementId);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484.element["type"] !== BoardElementType.Table || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484.element["tableId"] !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482.tableId) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46485 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4 = this._buildPopupSelectionKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482.subUnitId, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482.elementId]) + this._buildTableSelectionRangeKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482);
    return this._popupDisposable && this._popupSelectionKey === var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4 ? true : (this._clearPopup(), this._popupDisposable = this.disposeWithMe(this._boardCanvasPopManagerService["attachPopupToObject"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483, {
      componentKey: Vi,
      direction: "top-center",
      offset: [0, qi],
      anchorBoundResolver: this._resolveSelectionAnchorBoundResolver(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46485),
      extraProps: {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482.subUnitId,
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482.elementId,
        tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482.tableId
      }
    })), this._popupSelectionKey = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4, true);
  }
  _buildTableSelectionRangeKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46490) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46490.ranges[0];
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491 ? ":table-selection:" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46490.kind + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491.startRow + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491.endRow + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491.startColumn + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491.endColumn : ":table-selection:" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46490.kind + ":empty";
  }
  _resolveSelectionAnchorBoundResolver(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495 = this._slideTableSelectionService["getSelection"]();
    if (!Yi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495.kind !== "row" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495.kind !== "column") return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496 = this._slideTableResourceService["getTable"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495.tableId),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495.ranges[0];
    if (!(!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129 = normalizeSlideTableCellRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130 = Xi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496.columns["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466.width), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129.startColumn, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129.endColumn),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131 = Xi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496.rows["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467.height ?? 24), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128.height, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129.startRow, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129.endRow);
      return {
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.start,
        right: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.start + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.size,
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131.start,
        bottom: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131.start + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131.size
      };
    };
  }
  _resolveTableSelectionObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46503) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46504, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506 = this._renderContext["scene"],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507 = getBoardElementRenderObjectKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46503);
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46504 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506.getObjectIncludeInGroup) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46504.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507)) ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506.getObject) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507)) ?? null;
  }
  _resolveSelectedEntry(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516 = parseBoardElementRenderObjectKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514.oKey);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517 = this._elementStateService["getSnapshot"](),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46518 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517.context) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515.unitId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516.unitId ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517.context["subUnitId"] : undefined;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46518) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519 = this._boardElementService["getElementById"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46518, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516.elementId);
    return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519.element["type"] !== BoardElementType.Table ? null : {
      object: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514,
      elementData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519
    };
  }
};
function Yi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461848, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461849) {
  return !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461848 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461848.unitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461849.unitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461848.subUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461849.subUnitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461848.elementId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461849.elementId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461848.tableId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461849.element["tableId"] && !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461848.ranges["length"];
}
function Xi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461853, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461854, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461855) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461856 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46527) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46526 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46527, 0);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461856 <= 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.length === 0) return {
    start: 0,
    size: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461853
  };
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D53 = Math.max(0, Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461854, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.length - 1)),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D54 = Math.max(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D53, Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461855, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.length - 1)),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461857 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.slice(0, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D53).reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46528, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46528 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46529, 0),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461858 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.slice(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D53, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D54 + 1).reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46531) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46531, 0);
  return {
    start: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461857 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461856 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461853,
    size: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461858 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461856 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461853
  };
}
export { Ji };
