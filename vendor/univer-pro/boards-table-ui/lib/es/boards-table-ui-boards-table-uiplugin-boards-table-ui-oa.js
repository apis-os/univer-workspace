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
import { Zi } from "./boards-table-ui-boards-table-uiplugin-internal-core-endo.js";
function ta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461868) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461868.altKey || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461868.ctrlKey || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461868.metaKey || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461868.key !== "Tab" ? null : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461868.shiftKey ? "tab-backward" : "tab-forward";
}
function na(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461870, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461871) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461872, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461873;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461870) return null;
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461872 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461873 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461871.scene).getAncestorScale) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461872.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461873)) ?? {};
  return {
    ...resolveSlideTableCellEditorLayout({
      rect: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461870.rect,
      tableTransform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461870.tableTransform,
      scale: {
        scaleX: aa(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22.scaleX, 1),
        scaleY: aa(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22.scaleY, 1)
      },
      scenePointToViewportPoint: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46578 => ia(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46578, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461871)
    }),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461870.horizontalAlign === undefined ? {} : {
      horizontalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461870.horizontalAlign
    }),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461870.verticalAlign === undefined ? {} : {
      verticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461870.verticalAlign
    }),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461870.isHorizontal === undefined ? {} : {
      isHorizontal: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461870.isHorizontal
    })
  };
}
function ra(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461878, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461879) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461880, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461881;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461882 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461878 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461880 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461878.getBoundingClientRect) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461880.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461878);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461882) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461883 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461879 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461881 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461879.getBoundingClientRect) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461881.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461879),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D57 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461883 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461883.left + ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461879 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461879.clientLeft) ?? 0) - ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461879 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461879.scrollLeft) ?? 0) : 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D58 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461883 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461883.top + ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461879 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461879.clientTop) ?? 0) - ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461879 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461879.scrollTop) ?? 0) : 0;
  return {
    left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461882.left - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D57,
    top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461882.top - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D58
  };
}
function ia(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461890, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461891) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461892, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461893, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461894, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461895, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461896;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461897 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461892 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461893 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461891.scene).getViewport) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461892 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461892.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461893, BOARD_MAIN_VIEWPORT_KEY)) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461894 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461892.getAbsoluteVector) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461894.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461892, new Vector2(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461890.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461890.y)),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB24 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461891.canvasOffset ?? {
      left: 0,
      top: 0
    };
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461897) return {
    x: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB24.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461897.x,
    y: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB24.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461897.y
  };
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB25 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461895 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461896 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461891.scene).getAncestorScale) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461895.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461896)) ?? {},
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461898 = aa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461891.canvasScale, 1),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D61 = aa(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB25.scaleX, 1) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461898,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D62 = aa(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB25.scaleY, 1) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461898;
  return {
    x: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB24.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461890.x * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D61,
    y: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB24.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461890.y * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D62
  };
}
function aa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461908, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461909) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461908 == "number" && Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461908) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461908 > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461908 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461909;
}
let oa = class extends RxDisposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46579, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46580, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46581, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46582, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46583, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46588, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46589, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46590, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46591, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46592, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46593, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46594) {
    super(), this._renderContext = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46579, this._instanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46580, this._boardElementService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46581, this._slideTableSelectionService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46582, this._contextMenuService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46583, this._keyboardService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46584, this._cellEditorBridgeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586, this._contextService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587, this._slideTableResourceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46588, this._boardElementStateService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46589, this._boardUIStateService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46590, this._editorUIService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46591, this._layoutService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46592, this._permissionService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46593, this._boardImageInsertService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46594, J(this, "_attachScheduled", false), J(this, "_objectPointerDisposables", null), J(this, "_resizeState", null), J(this, "_rangeDragState", null), J(this, "_headerDragState", null), J(this, "_pendingHeaderMoveState", null), J(this, "_rowColumnMoveState", null), J(this, "_rowColumnMoveTarget", null), J(this, "_tableHandleMoveState", null), J(this, "_pendingStage1BodyState", null), J(this, "_tableActivationStage", null), J(this, "_activeTableContext", null), J(this, "_resizeHoverActive", false), J(this, "_areTransformerControlsHiddenForTableMove", false), J(this, "_areTransformerControlsHiddenForTableStructuralHover", false), J(this, "_tableStructuralHoverTransformerObject", null), J(this, "_handleClipboardCopy", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145 = this._resolveTableClipboardTarget(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144);
      !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144.clipboardData || !this._canCopyTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145.selection) || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144.clipboardData["setData"]("text/plain", serializeSlideTableSelectionToText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145.table, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145.selection)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144.clipboardData["setData"]("text/html", serializeSlideTableSelectionToHtml(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145.table, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145.selection)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144.preventDefault(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144.stopPropagation());
    }), J(this, "_handleClipboardCut", async var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149 = this._resolveTableClipboardTarget(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148.clipboardData || !this._canCopyTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149.selection)) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150 = buildSlideTableClearTextPatch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149.table, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149.selection);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148.clipboardData["setData"]("text/plain", serializeSlideTableSelectionToText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149.table, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149.selection)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148.clipboardData["setData"]("text/html", serializeSlideTableSelectionToHtml(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149.table, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149.selection)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148.preventDefault(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148.stopPropagation(), await this._commitClipboardPatch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150));
    }), J(this, "_handleClipboardPaste", async var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155 = this._resolveTableClipboardTarget(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.clipboardData) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.clipboardData["getData"]("text/html"),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.clipboardData["getData"]("text/plain"),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158 = isClipboardTextImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157) ? await extractClipboardTextImageFile(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157) : null,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158 ? null : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156 ? buildSlideTablePasteHtmlPatch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155.table, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155.selection, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156) : null) ?? buildSlideTablePasteTextPatch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155.table, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155.selection, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158 ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158] : await xa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.clipboardData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156);
      !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.length === 0 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.preventDefault(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.stopPropagation(), !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159 && !(await this._commitClipboardPatch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159))) && (await this._insertClipboardImages(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A, +!!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159)));
    }), this._init();
  }
  dispose() {
    this._resetTableInteraction(), super.dispose();
  }
  _init() {
    document.addEventListener("copy", this._handleClipboardCopy, true), document.addEventListener("cut", this._handleClipboardCut, true), document.addEventListener("paste", this._handleClipboardPaste, true), this.disposeWithMe(toDisposable(() => {
      document.removeEventListener("copy", this._handleClipboardCopy, true), document.removeEventListener("cut", this._handleClipboardCut, true), document.removeEventListener("paste", this._handleClipboardPaste, true);
    })), this._initScenePointerEvents(), this.disposeWithMe(this._keyboardService["setHandler"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166 => this._handleKeyboardAction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166))), this.disposeWithMe(this._keyboardService["setInputHandler"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167 => this._handleKeyboardInput(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167))), this.disposeWithMe(toDisposable(this._slideTableSelectionService["selection$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168 => {
      this._syncSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168 && this._syncActivationStageFromSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168), this._keyboardService["setFocused"](!!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168.kind !== "text");
    })));
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611 = this._instanceService["getUnit"](this._renderContext["unitId"], UniverInstanceType.UNIVER_BOARD);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611 && (this.disposeWithMe(toDisposable(() => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170;
      return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170 = this._objectPointerDisposables) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170.dispose();
    })), this._attachObjectPointerEvents(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611), this._subscribeBoardElementChanges(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611), this._subscribeBoardElementStateChanges(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611), this.disposeWithMe(toDisposable(this._boardUIStateService["state$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172.interactionMode === "viewing" && this._resetTableInteraction();
    }))));
  }
  _initScenePointerEvents() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46613, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46614, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46615, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46616;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46617 = this._renderContext["scene"],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46618 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46613 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46617.onPointerDown$) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46613.subscribeEvent((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175) => {
        this._handleScenePointerDown(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175);
      });
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46618 && this.disposeWithMe(toDisposable(() => fa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46618)));
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46619 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46614 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46617.onPointerMove$) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46614.subscribeEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178 => {
      this._handlePendingStage1BodyPointerMove(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178), this._handleTableHandleMovePointerMove(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178), this._handleRowColumnMovePointerMove(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178), this._handleHeaderDragPointerMove(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178), this._handleResizeCursorHover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178), this._handleControlHoverPointerMove(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178), this._handleResizePointerMove(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178), this._handleRangeDragPointerMove(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178);
    });
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46619 && this.disposeWithMe(toDisposable(() => fa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46619)));
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46620 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46615 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46617.onPointerUp$) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46615.subscribeEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180 => {
      this._finishTableHandleMove(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180), this._finishPendingStage1Body({
        focusCell: true
      }), this._finishRowColumnMove({
        commit: true
      }), this._handleResizePointerUp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180), this._finishRangeDrag(), this._finishHeaderDrag();
    });
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46620 && this.disposeWithMe(toDisposable(() => fa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46620)));
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46621 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46616 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46617.onPointerCancel$) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46616.subscribeEvent(() => {
      this._finishPendingStage1Body({
        focusCell: false
      }), this._cancelTableHandleMove(), this._finishRowColumnMove({
        commit: false
      }), this._cancelResizePreview(), this._resetResizeCursor(), this._finishRangeDrag(), this._finishHeaderDrag();
    });
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46621 && this.disposeWithMe(toDisposable(() => fa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46621)));
  }
  _handleScenePointerDown(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46631, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46632) {
    if (this._boardUIStateService["getState"]().interactionMode === "viewing") return;
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46631.button ?? 0;
    if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18 !== 0 && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18 !== 2 || this._isTableTextEditing()) return;
    this._tableActivationStage && !this._isActiveTablePointerDown(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46631) && this._resetTableInteraction();
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46633 = this._instanceService["getUnit"](this._renderContext["unitId"], UniverInstanceType.UNIVER_BOARD);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46633) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46634 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46633.getUnitId(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46635 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46633.getActivePageId(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46636 = this._boardElementService["getElementData"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46634, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46635),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46637 = this._getBoardPointVectorFromEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46631);
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182 of Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46636)) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46638, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639;
      if (!sa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182)) continue;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468 = this._getBoardTableObject(getBoardElementRenderObjectKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46634, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182.elementId)),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468.getTable(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468.hitTestStructuralTriggerAtScenePoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46637);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469 && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18 === 0 && isSlideTableInsertDotTrigger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610)) {
        if (this._handleStructuralInsertTrigger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46634, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46637)) {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46641;
          (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46631.preventDefault) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46631), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46641 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46631.stopPropagation) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46641.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46631), Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46632), this._makeSceneDirty();
        }
        return;
      }
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468.hitTestControlAtScenePoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46637);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610) continue;
      if (!this._isTableReadyForCellInteraction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46633, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182)) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612 = null;
      if (this._slideTableSelectionService["markTableInternalInteraction"](), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.kind) === "row-header" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.row !== undefined) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 = this._getSelectedHeaderRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182, "row", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.row);
        if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18 === 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463) {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46642, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46643;
          this._startPendingHeaderMove({
            kind: "row",
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46634,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46635,
            elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182.elementId,
            tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182.element["tableId"],
            object: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468,
            table: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469,
            start: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.start,
            end: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.end,
            startPoint: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46637
          }), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46642 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46631.preventDefault) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46642.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46631), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46643 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46631.stopPropagation) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46643.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46631), Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46632);
          return;
        }
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 = expandSlideTableRangeToMergedCells(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469, {
          startRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.row,
          endRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.row,
          startColumn: 0,
          endColumn: Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469.columns["length"] - 1)
        });
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612 = this._slideTableSelectionService["selectRows"]({
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46634,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46635,
          elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182.elementId,
          tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182.element["tableId"],
          startRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464.startRow,
          endRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464.endRow,
          columnCount: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469.columns["length"]
        }), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18 === 0 && (this._headerDragState = {
          kind: "row",
          anchor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.row,
          object: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468,
          selection: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612,
          table: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469
        });
      } else {
        if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.kind) === "column-header" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.column !== undefined) {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 = this._getSelectedHeaderRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182, "column", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.column);
          if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18 === 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461) {
            var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46644, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46645;
            this._startPendingHeaderMove({
              kind: "column",
              unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46634,
              subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46635,
              elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182.elementId,
              tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182.element["tableId"],
              object: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468,
              table: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469,
              start: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461.start,
              end: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461.end,
              startPoint: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46637
            }), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46644 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46631.preventDefault) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46644.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46631), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46645 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46631.stopPropagation) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46645.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46631), Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46632);
            return;
          }
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 = expandSlideTableRangeToMergedCells(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469, {
            startRow: 0,
            endRow: Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469.rows["length"] - 1),
            startColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.column,
            endColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.column
          });
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612 = this._slideTableSelectionService["selectColumns"]({
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46634,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46635,
            elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182.elementId,
            tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182.element["tableId"],
            startColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462.startColumn,
            endColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462.endColumn,
            rowCount: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469.rows["length"]
          }), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18 === 0 && (this._headerDragState = {
            kind: "column",
            anchor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.column,
            object: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468,
            selection: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612,
            table: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469
          });
        } else (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.kind) === "table-handle" && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612 = this._slideTableSelectionService["selectTable"]({
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46634,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46635,
          elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182.elementId,
          tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182.element["tableId"],
          rowCount: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469.rows["length"],
          columnCount: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469.columns["length"]
        }), this._boardElementStateService["selectElements"]({
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46634,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46635
        }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182.elementId], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182.elementId), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18 === 0 && this._startTableHandleMove(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46634, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46635, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46636, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46631));
      }
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612) {
        (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.kind) !== "table-handle" && this._beginTableInternalInteraction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468.setTableSelection(resolveSlideTableObjectSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612)), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18 === 2 && this._openContextMenu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46631), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46638 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46631.preventDefault) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46638.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46631), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46631.stopPropagation) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46631), Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46632), this._makeSceneDirty();
        return;
      }
    }
  }
  _handleStructuralInsertTrigger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46661, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46662, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46663, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46664, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46664),
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A4 = false;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46664.kind === "row-insert-dot" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666 !== null) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183 = this._slideTableResourceService["getTable"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46661, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46662.element["tableId"]);
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A4 = !!this._commandService["executeCommand"](InsertBoardTableRowsCommand.id, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46661,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46662.subUnitId,
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46662.elementId,
        tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46662.element["tableId"],
        rowIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666,
        count: 1,
        height: ha(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666)
      });
    } else {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46664.kind === "column-insert-dot" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666 !== null) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613 = this._slideTableResourceService["getTable"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46661, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46662.element["tableId"]);
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A4 = !!this._commandService["executeCommand"](InsertBoardTableColumnsCommand.id, {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46661,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46662.subUnitId,
          elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46662.elementId,
          tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46662.element["tableId"],
          columnIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666,
          count: 1,
          width: ga(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666)
        });
      }
    }
    if (var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A4) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46663.hitTestStructuralTriggerAtScenePoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185 = buildSlideTableInsertDotControlState(isSlideTableInsertDotTrigger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46664);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46663.setTableControlState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46663.setTableControlHover(null), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46663.setTableCellHover(null);
    }
    return var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A4;
  }
  _handleControlHoverPointerMove(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46673) {
    if (this._resizeState || this._rangeDragState || this._headerDragState || this._pendingHeaderMoveState || this._rowColumnMoveState || this._tableHandleMoveState) return;
    if (this._isTableTextEditing()) {
      this._clearTableControlHover();
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674 = this._instanceService["getUnit"](this._renderContext["unitId"], UniverInstanceType.UNIVER_BOARD);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46675 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674.getUnitId(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46676 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674.getActivePageId(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46677 = this._boardElementService["getElementData"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46675, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46676),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678 = this._getBoardPointVectorFromEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46673),
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A6 = false,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46679 = null;
    Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46677).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186 => {
      if (!sa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186)) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187 = this._getBoardTableObject(getBoardElementRenderObjectKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46675, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186.elementId));
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187.hitTestStructuralTriggerAtScenePoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189 = isSlideTableInsertDotTrigger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188 : null;
      if (!this._isTableReadyForCellInteraction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186) && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187.setTableControlHover(null),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187.setTableControlState(null),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187.setTableCellHover(null);
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A6 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616 || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A6;
        return;
      }
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187.hitTestControlAtScenePoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678),
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A = !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190 || !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191 = this._buildStructuralControlState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189 && !this._isTableReadyForCellInteraction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186)) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187.setTableControlHover(null),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187.setTableControlState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187.setTableCellHover(null);
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A6 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619 || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A6;
        return;
      }
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191 && !this._isActiveTableContext(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186) && this._isSelectedTableElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46674, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46679 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187);
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187.setTableControlHover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190 ? {
          kind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190.kind,
          row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190.row ?? null,
          column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190.column ?? null
        } : null),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187.setTableControlState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194 = this._updateTableCellHover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46675, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46676, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46678, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A);
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A6 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194 || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A6;
    }), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A6 = this._setTransformerControlsHiddenForTableStructuralHover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46679) || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A6, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A6 && this._makeSceneDirty();
  }
  _updateTableCellHover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46687, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46688, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46689, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46690, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46691, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46692) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46692 || !this._isTableActiveForCellHover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46687, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46688, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46689)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46690.setTableCellHover(null);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46693 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46690.hitTestCellAtScenePoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46691);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46690.setTableCellHover((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46693 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46693.kind) === "cell" ? {
      row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46693.row,
      column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46693.column
    } : null);
  }
  _clearTableControlHover() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46701 = this._instanceService["getUnit"](this._renderContext["unitId"], UniverInstanceType.UNIVER_BOARD);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46701) {
      this._setTransformerControlsHiddenForTableStructuralHover(null);
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46702 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46701.getUnitId(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46703 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46701.getActivePageId(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46704 = this._boardElementService["getElementData"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46702, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46703),
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A8 = false;
    Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46704).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204 => {
      if (!sa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204)) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205 = this._getBoardTableObject(getBoardElementRenderObjectKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46702, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204.elementId));
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205.setTableControlHover(null),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205.setTableControlState(null),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205.setTableCellHover(null);
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A8 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208 || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A8;
    }), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A8 = this._setTransformerControlsHiddenForTableStructuralHover(null) || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A8, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A8 && this._makeSceneDirty();
  }
  _isTableActiveForCellHover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46710, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46711) {
    return !!this._tableActivationStage && !!this._activeTableContext && this._activeTableContext["unitId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709 && this._activeTableContext["subUnitId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46710 && this._activeTableContext["elementId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46711.elementId && this._activeTableContext["tableId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46711.element["tableId"];
  }
  _syncActivationStageFromSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46715) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46715.unitId === this._renderContext["unitId"] && (this._tableActivationStage = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46715.ranges["length"] ? "cell" : "table", this._activeTableContext = {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46715.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46715.subUnitId,
      elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46715.elementId,
      tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46715.tableId
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46715.ranges["length"])) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214 = this._getBoardTableObject(getBoardElementRenderObjectKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46715.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46715.elementId));
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214) {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46716, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46717;
        (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46716 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46717 = this._renderContext["scene"]).getTransformer) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46716 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46716.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46717)) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46716.detachFrom(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214);
      }
    }
  }
  _subscribeBoardElementStateChanges(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46721) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46722 = this._boardElementStateService["state$"];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46722) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46723 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46722.subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215 => {
      this._handleBoardElementStateChange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215);
    });
    this.disposeWithMe(toDisposable(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46723.unsubscribe()));
  }
  _handleBoardElementStateChange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46727) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46728;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46729 = this._slideTableSelectionService["getSelection"](),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46729 ? {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46729.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46729.subUnitId,
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46729.elementId,
        tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46729.tableId
      } : this._activeTableContext;
    if (!var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4 || !this._tableActivationStage) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46730 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46728 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46727.context) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46728.unitId) === var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4.unitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46727.context["subUnitId"] === var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4.subUnitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46727.selectedIds["includes"](var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4.elementId);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46730 || this._slideTableSelectionService["isTableInternalInteractionActive"]()) {
      !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46730 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46727.selectedIds["length"] > 0 && this._resetTableInteraction();
      return;
    }
    this._resetTableInteraction();
  }
  _isActiveTablePointerDown(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46735) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736 = this._activeTableContext;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737 = this._getBoardTableObject(getBoardElementRenderObjectKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736.elementId));
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46738 = this._getBoardPointVectorFromEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46735);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737.isHit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46738) || va(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46738) || !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737.hitTestCellAtScenePoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46738) || !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737.hitTestControlAtScenePoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46738) || !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737.hitTestStructuralTriggerAtScenePoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46738) || !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737.hitTestFloatingStructuralTriggerAtScenePoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46738);
  }
  _resetTableInteraction() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46743 = this._slideTableSelectionService["getSelection"](),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4 = [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46743 ? {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46743.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46743.subUnitId,
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46743.elementId
      } : null, this._activeTableContext ? {
        unitId: this._activeTableContext["unitId"],
        subUnitId: this._activeTableContext["subUnitId"],
        elementId: this._activeTableContext["elementId"]
      } : null].filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A5 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4.filter((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219) => var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4.findIndex(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620.unitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218.unitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620.subUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218.subUnitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620.elementId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218.elementId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219);
    this._cancelActiveEditor(), this._finishRangeDrag(), this._finishHeaderDrag(), this._finishPendingStage1Body({
      focusCell: false
    }), this._cancelTableHandleMove(), this._finishRowColumnMove({
      commit: false
    }), this._cancelResizePreview(), this._pendingHeaderMoveState = null, this._tableActivationStage = null, this._activeTableContext = null, this._resetResizeCursor(), this._setTransformerControlsHiddenForTableStructuralHover(null), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A5.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221 = this._getBoardTableObject(getBoardElementRenderObjectKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220.elementId));
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221.setEditingCell(null), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221.setPreviewTable(null), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221.setTableSelection(null), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221.setTableCellHover(null), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221.setTableControlState(null), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221.setTableControlHover(null);
    }), this._slideTableSelectionService["clear"](), this._keyboardService["setFocused"](false), this._makeSceneDirty();
  }
  _buildStructuralControlState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745) {
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745.kind !== "row-header" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745.kind !== "column-header" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745.kind !== "row-insert-dot" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745.kind !== "column-insert-dot") return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46746 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745);
    return {
      visible: true,
      hoveredTrigger: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745,
      insertGuide: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745.kind === "row-insert-dot" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46746 !== null ? {
        kind: "row",
        index: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46746
      } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745.kind === "column-insert-dot" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46746 !== null ? {
        kind: "column",
        index: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46746
      } : null
    };
  }
  _handleHeaderDragPointerMove(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46749) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46750 = this._headerDragState;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46750) return;
    if ("buttons" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46749 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46749.buttons !== undefined && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46749.buttons & 1) != 1) {
      this._finishHeaderDrag();
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46751 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46750.object["hitTestFloatingStructuralTriggerAtScenePoint"](this._getBoardPointVectorFromEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46749));
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46751) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46752 = null;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46750.kind === "row" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46751.kind === "row-header" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46751.row !== undefined) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224 = expandSlideTableRangeToMergedCells(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46750.table, {
        startRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46750.anchor,
        endRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46751.row,
        startColumn: 0,
        endColumn: Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46750.table["columns"].length - 1)
      });
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46752 = this._slideTableSelectionService["selectRows"]({
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46750.selection["unitId"],
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46750.selection["subUnitId"],
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46750.selection["elementId"],
        tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46750.selection["tableId"],
        startRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224.startRow,
        endRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224.endRow,
        columnCount: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46750.table["columns"].length
      });
    } else {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46750.kind === "column" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46751.kind === "column-header" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46751.column !== undefined) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621 = expandSlideTableRangeToMergedCells(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46750.table, {
          startRow: 0,
          endRow: Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46750.table["rows"].length - 1),
          startColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46750.anchor,
          endColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46751.column
        });
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46752 = this._slideTableSelectionService["selectColumns"]({
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46750.selection["unitId"],
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46750.selection["subUnitId"],
          elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46750.selection["elementId"],
          tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46750.selection["tableId"],
          startColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621.startColumn,
          endColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621.endColumn,
          rowCount: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46750.table["rows"].length
        });
      }
    }
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46752 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46750.selection = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46752, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46750.object["setTableSelection"](resolveSlideTableObjectSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46752)), this._makeSceneDirty());
  }
  _finishHeaderDrag() {
    this._headerDragState = null;
  }
  _getSelectedHeaderRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46757, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46758, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46759) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46760 = this._slideTableSelectionService["getSelection"]();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46760 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46760.kind !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46758 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46760.unitId !== this._renderContext["unitId"] || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46760.elementId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46757.elementId || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46760.tableId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46757.element["tableId"]) return null;
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46760.ranges) {
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46758 === "row" ? Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225.startRow, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225.endRow) : Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225.startColumn, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225.endColumn),
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46758 === "row" ? Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225.startRow, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225.endRow) : Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225.startColumn, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225.endColumn);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46759 >= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46759 <= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4) return {
        start: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3,
        end: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4
      };
    }
    return null;
  }
  _startPendingHeaderMove(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46765) {
    this._finishRowColumnMove({
      commit: false
    }), this._pendingHeaderMoveState = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46765, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46765.object["setTableControlState"]({
      visible: true,
      selectedStructuralRange: {
        kind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46765.kind,
        start: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46765.start,
        end: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46765.end
      }
    }), this._makeSceneDirty();
  }
  _handleRowColumnMovePointerMove(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46767) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46768 = this._rowColumnMoveState ?? this._pendingHeaderMoveState;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46768) return;
    if ("buttons" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46767 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46767.buttons !== undefined && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46767.buttons & 1) != 1) {
      this._finishRowColumnMove({
        commit: false
      });
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46769 = this._getBoardPointVectorFromEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46767, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46768.startPoint);
    if (!this._rowColumnMoveState) {
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46769.x - this._pendingHeaderMoveState["startPoint"].x,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46769.y - this._pendingHeaderMoveState["startPoint"].y;
      if (Math.hypot(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8) < 8) return;
      this._rowColumnMoveState = {
        ...this._pendingHeaderMoveState
      }, this._pendingHeaderMoveState = null;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46770 = this._rowColumnMoveState;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46770) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46771 = this._resolveRowColumnMoveTarget(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46770.table, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46770.object, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46770.kind, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46769),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46772 = !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46771 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46771.kind === "row" ? canMoveSlideTableRows(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46770.table, {
        startRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46770.start,
        endRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46770.end
      }, {
        row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46771.targetRow,
        position: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46771.position
      }) : canMoveSlideTableColumns(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46770.table, {
        startColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46770.start,
        endColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46770.end
      }, {
        column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46771.targetColumn,
        position: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46771.position
      }));
    this._rowColumnMoveTarget = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46772 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46771 : null, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46770.object["setTableControlState"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46772 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46771 ? {
      visible: true,
      selectedStructuralRange: {
        kind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46770.kind,
        start: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46770.start,
        end: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46770.end
      },
      reorderGuide: {
        kind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46771.kind,
        index: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46771.guideIndex
      }
    } : {
      visible: true,
      selectedStructuralRange: {
        kind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46770.kind,
        start: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46770.start,
        end: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46770.end
      }
    }), this._makeSceneDirty();
  }
  _finishRowColumnMove(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46779) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46780 = this._rowColumnMoveState,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781 = this._rowColumnMoveTarget,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46782 = this._pendingHeaderMoveState;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46779.commit && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46780 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781 && this._commandService && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46780.kind === "row" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781.kind === "row" ? this._commandService["executeCommand"](MoveBoardTableRowsCommand.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46780.unitId,
      tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46780.tableId,
      startRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46780.start,
      endRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46780.end,
      targetRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781.targetRow,
      position: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781.position
    }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46780.kind === "column" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781.kind === "column" && this._commandService["executeCommand"](MoveBoardTableColumnsCommand.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46780.unitId,
      tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46780.tableId,
      startColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46780.start,
      endColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46780.end,
      targetColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781.targetColumn,
      position: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781.position
    }));
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46783 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46780 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46780.object) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46782 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46782.object);
    this._pendingHeaderMoveState = null, this._rowColumnMoveState = null, this._rowColumnMoveTarget = null, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46783 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46783.setTableControlState(null), this._makeSceneDirty());
  }
  _resolveRowColumnMoveTarget(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46789, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46790, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46791, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46792) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46793 = this._resolveObjectPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46790, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46792.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46792.y),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46794 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46791 === "row" ? pa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46789.rows["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226.height ?? 24), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46790.height) : pa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46789.columns["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46227 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46227.width), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46790.width);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46794.length === 0) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46795 = ma(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46794, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46791 === "row" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46793.y : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46793.x),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D20 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46795 <= 0 ? 0 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46795 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46794.length ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46794.length - 1 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46795,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB6 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46795 <= 0 ? "before" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46795 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46794.length ? "after" : "before";
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46791 === "row" ? {
      kind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46791,
      targetRow: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D20,
      position: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB6,
      guideIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46795
    } : {
      kind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46791,
      targetColumn: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D20,
      position: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB6,
      guideIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46795
    };
  }
  _startTableHandleMove(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46803, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46804, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46805, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46806, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46809 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46806.transform ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46806.element["transform"];
    this._tableHandleMoveState = {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46803,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46804,
      elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46806.elementId,
      object: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807,
      element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46806.element,
      elementData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46805,
      startPointer: {
        ...this._getBoardPointFromEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808, {
          x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.left,
          y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.top
        })
      },
      startTransform: {
        ...ya(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46809),
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.left,
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.top,
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.width,
        height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.height
      },
      moved: false
    };
  }
  _handleTableHandleMovePointerMove(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46817) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46818 = this._tableHandleMoveState;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46818) return;
    if ("buttons" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46817 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46817.buttons !== undefined && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46817.buttons & 1) != 1) {
      this._finishTableHandleMove(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46817);
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46819 = this._buildTableHandleMoveTransform(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46818, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46817);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46819) return;
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46819.left - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46818.startTransform["left"],
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D23 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46819.top - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46818.startTransform["top"];
    !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46818.moved && Math.hypot(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D23) < 8 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46818.moved || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46818.moved = true, this._beginTableHandleTransform()), this._applyTableHandleMovePreview(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46818, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46819));
  }
  async _finishTableHandleMove(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46823) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824 = this._tableHandleMoveState;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824) return;
    this._tableHandleMoveState = null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46825 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824.moved ? this._buildTableHandleMoveTransform(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46823) : null;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46825 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824.moved) {
      this._restoreTableHandleMovePreview(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824), this._finishTableHandleTransform();
      return;
    }
    this._applyTableHandleMovePreview(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46825);
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6 = {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46825,
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824.object["left"],
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824.object["top"],
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824.object["width"],
        height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824.object["height"]
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46826 = this._resolveTableHandleMoveLocalTransform(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6);
    try {
      await this._commandService["executeCommand"](UpdateBoardElementsCommand.id, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824.subUnitId,
        updates: [{
          elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824.elementId,
          element: {
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824.element,
            transform: {
              ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824.element["transform"],
              ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46826
            }
          },
          transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46826
        }]
      }), this._makeSceneDirty();
    } finally {
      this._finishTableHandleTransform();
    }
  }
  _cancelTableHandleMove() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46831 = this._tableHandleMoveState;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46831 && (this._tableHandleMoveState = null, this._restoreTableHandleMovePreview(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46831), this._finishTableHandleTransform());
  }
  _beginTableHandleTransform() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46833, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46834, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46835, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46836;
    if (this._boardElementStateService["setTransforming"](true), this._areTransformerControlsHiddenForTableMove) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46837 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46833 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46834 = this._renderContext["scene"]).getTransformer) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46833.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46834);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46837 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46835 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46837._hideControl) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46835.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46837), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46837 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46836 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46837.clearControls) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46836.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46837), this._areTransformerControlsHiddenForTableMove = true;
  }
  _finishTableHandleTransform() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46843, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46844, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46845;
    this._boardElementStateService["setTransforming"](false), this._areTransformerControlsHiddenForTableMove && (this._areTransformerControlsHiddenForTableMove = false, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46843 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46844 = this._renderContext["scene"]).getTransformer) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46843 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46843.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46844)) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46845 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46843.refreshControls) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46845.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46843));
  }
  _setTransformerControlsHiddenForTableStructuralHover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46849) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46850, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46851;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46852 = this._tableStructuralHoverTransformerObject;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46852 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46849 && this._areTransformerControlsHiddenForTableStructuralHover === !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46849) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46850 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46851 = this._renderContext["scene"]).getTransformer) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46850.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46851);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46852 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46852 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46849) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46854, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46855;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46854 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853.attachTo) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46854.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46852), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46855 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853.setSelectedControl) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46855.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46852);
    }
    if (this._tableStructuralHoverTransformerObject = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46849, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46849) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46856, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46857, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858;
      this._areTransformerControlsHiddenForTableStructuralHover = true, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46856 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853.detachFrom) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46856.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46849), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46857 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853._hideControl) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46857.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853.clearControls) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853);
    } else {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46859;
      this._areTransformerControlsHiddenForTableStructuralHover = false, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46859 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853.refreshControls) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46859.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853);
    }
    return true;
  }
  _buildTableHandleMoveTransform(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46871, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46872) {
    let {
        x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46873,
        y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46874
      } = this._getBoardPointFromEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46872, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46871.startPointer),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D26 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46873 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46871.startPointer["x"],
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D27 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46874 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46871.startPointer["y"];
    return !Number.isFinite(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D26) || !Number.isFinite(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D27) ? null : {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46871.startTransform,
      left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46871.startTransform["left"] + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D26,
      top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46871.startTransform["top"] + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D27
    };
  }
  _applyTableHandleMovePreview(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46879, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46880) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46881, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46882, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46883;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46879.object["transformByState"]({
      left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46880.left,
      top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46880.top,
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46880.width,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46880.height,
      angle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46880.rotation ?? 0,
      flipX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46880.flipX,
      flipY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46880.flipY
    }), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46881 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46882 = this._renderContext["scene"]).getTransformer) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46881 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46881.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46882)) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46883 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46881.changeNotification) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46883.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46881), this._makeSceneDirty();
  }
  _restoreTableHandleMovePreview(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46889) {
    this._applyTableHandleMovePreview(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46889, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46889.startTransform);
  }
  _resolveTableHandleMoveLocalTransform(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46891, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46892) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46893 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46891.element["parentId"],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46894 = ya(resolveBoardElementLocalTransformForParent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46891.elementData, {
        parentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46893,
        worldTransform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46892
      }));
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46891.startTransform["rotation"] === undefined && delete var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46894.rotation, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46891.startTransform["flipX"] === undefined && delete var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46894.flipX, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46891.startTransform["flipY"] === undefined && delete var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46894.flipY, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46894;
  }
  _syncSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46899) {
    let {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46900
      } = this._renderContext,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46901 = this._instanceService["getUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46900, UniverInstanceType.UNIVER_BOARD);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46901) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46902 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46901.getActivePageId(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46903 = this._boardElementService["getElementData"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46900, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46902),
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A10 = false;
    Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46903).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228 => {
      if (!sa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228)) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229 = this._getBoardTableObject(getBoardElementRenderObjectKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46900, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228.elementId));
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230 = resolveSlideTableObjectSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46899);
      if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46899 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46899.unitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46900 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46899.subUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46902 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46899.elementId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228.elementId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46899.tableId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228.element["tableId"])) {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229.setTableSelection(null), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A10 = true;
        return;
      }
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229.setTableSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A10 = true;
    }), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A10 && this._makeSceneDirty();
  }
  _getBoardTableObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46909) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46910, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46911;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46912 = this._renderContext["scene"],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46913 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46910 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46912.getObjectIncludeInGroup) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46910.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46912, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46909)) ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46911 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46912.getObject) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46911.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46912, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46909));
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46913 instanceof Zi ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46913 : null;
  }
  _makeSceneDirty() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46919, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46920;
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46919 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46920 = this._renderContext["scene"]).makeDirty) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46919.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46920, true);
  }
  _subscribeBoardElementChanges(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46923) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46924 = this._boardElementService,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46925 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234 => {
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234) return;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234.subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622 => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465.unitId === this._renderContext["unitId"]) && this._scheduleAttachObjectPointerEvents(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46923);
        });
        this.disposeWithMe(toDisposable(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235.unsubscribe()));
      };
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46925(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46924.elementAdd$), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46925(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46924.elementUpdate$), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46925(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46924.elementRemove$);
  }
  _scheduleAttachObjectPointerEvents(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46929) {
    this._attachScheduled || (this._attachScheduled = true, Promise.resolve().then(() => {
      this._attachScheduled = false, this._attachObjectPointerEvents(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46929);
    }));
  }
  _attachObjectPointerEvents(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46931) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46932;
    let {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933
      } = this._renderContext,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46934 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46931.getActivePageId(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46935 = this._boardElementService["getElementData"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46934),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46936 = new DisposableCollection();
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46932 = this._objectPointerDisposables) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46932.dispose(), this._objectPointerDisposables = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46936, Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46935).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46238 => {
      if (!sa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46238)) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239 = this._getBoardTableObject(getBoardElementRenderObjectKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46238.elementId));
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46936.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239.onPointerDown$["subscribeEvent"]({
        priority: -2,
        next: ([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625]) => {
          this._boardUIStateService["getState"]().interactionMode !== "viewing" && this._handleTablePointerDown(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46931, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46238, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625);
        }
      })), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46936.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239.onDblclick$["subscribeEvent"]({
        priority: -2,
        next: ([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629]) => {
          this._boardUIStateService["getState"]().interactionMode !== "viewing" && this._handleTableDoubleClick(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46931, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46238, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629);
        }
      })));
    });
  }
  _handleTablePointerDown(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46943, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46944, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46945, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46946, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46947) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46948, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46949;
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46946.button ?? 0;
    if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30 !== 0 && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30 !== 2 || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30 === 0 && this._handleCellEditorPointerDown(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46943, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46944, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46945, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46946, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46947) || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30 === 0 && this._isTableTextEditing()) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46950 = this._getBoardPointVectorFromEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46946),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46951 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46945.hitTestStructuralTriggerAtScenePoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46950);
    if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30 === 0 && isSlideTableInsertDotTrigger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46951)) {
      if (this._handleStructuralInsertTrigger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46943.getUnitId(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46944, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46945, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46951, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46950)) {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46952, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46953;
        (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46952 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46946.preventDefault) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46952.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46946), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46953 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46946.stopPropagation) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46953.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46946), Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46947), this._makeSceneDirty();
      }
      return;
    }
    if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30 === 0 && this._startResizeIfHit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46943, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46944, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46945, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46946)) {
      Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46947);
      return;
    }
    if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30 === 0 && !this._isTableReadyForCellInteraction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46943, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46944)) {
      this._activateTableStage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46943, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46944, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46945, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46946, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46947);
      return;
    }
    if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30 === 0 && this._tableActivationStage === "table") {
      this._startPendingStage1Body(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46943, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46944, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46945, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46946, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46947);
      return;
    }
    if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30 === 2 && !this._isTableReadyForCellInteraction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46943, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46944)) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46954 = this._selectCellFromTableEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46943, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46944, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46945, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46946);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46954) {
      if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30 === 0) {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46955, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46956;
        (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46955 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46956 = this._contextMenuService).hideContextMenu) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46955.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46956);
      }
      if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46948 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46946.preventDefault) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46948.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46946), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46949 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46946.stopPropagation) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46949.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46946), Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46947), this._beginTableInternalInteraction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46945), this._enterCellStage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46943, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46944), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30 === 0) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46954.focus ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46954.anchor ?? resolveFirstSlideTableSelectionCell(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46954);
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632 && (this._rangeDragState = {
          selection: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46954,
          object: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46945,
          anchor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632,
          startPoint: this._getBoardPointFromEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46946),
          activated: false
        });
      }
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30 === 2 && this._openContextMenu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46946);
    }
  }
  _handleCellEditorPointerDown(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46971, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46972, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46973, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46974, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46975) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46976, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46977;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46978 = this._getActiveEditingSession();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46978 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46978.unitId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46971.getUnitId() || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46978.subUnitId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46971.getActivePageId() || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46978.elementId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46972.elementId || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46978.tableId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46972.element["tableId"]) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46979 = this._buildCellSelectionFromTableEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46971, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46972, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46973, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46974),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46980 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46979 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46979.focus) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46979 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46979.anchor) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46979 ? resolveFirstSlideTableSelectionCell(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46979) : null);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46979 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46980) return false;
    if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46976 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46974.preventDefault) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46976.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46974), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46977 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46974.stopPropagation) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46977.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46974), Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46975), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46980.row === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46978.row && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46980.column === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46978.column) return true;
    this._completeActiveEditor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46978.documentData);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46981 = this._slideTableResourceService["getTable"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46979.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46979.tableId) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46973.getTable();
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46981 && this._openCellEditor({
      selection: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46979,
      object: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46973,
      table: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46981
    }), true;
  }
  _isTableReadyForCellInteraction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46993, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994) {
    return this._isActiveTableContext(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46993, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994) ? true : this._isSelectedTableElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46993, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994);
  }
  _isActiveTableContext(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46997, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46998) {
    return !!this._tableActivationStage && !!this._activeTableContext && this._activeTableContext["unitId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46997.getUnitId() && this._activeTableContext["subUnitId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46997.getActivePageId() && this._activeTableContext["elementId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46998.elementId && this._activeTableContext["tableId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46998.element["tableId"];
  }
  _isSelectedTableElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461001, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461002) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461004 = this._boardElementStateService["getSnapshot"]();
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461004 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461004.context) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003.unitId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461001.getUnitId() && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461004.context["subUnitId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461001.getActivePageId() && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461004.selectedIds["includes"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461002.elementId);
  }
  _activateTableStage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461009, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461010, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461011, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461012, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461013) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461014, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461015;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461016 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461009.getUnitId(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461017 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461009.getActivePageId();
    this._tableActivationStage = "table", this._activeTableContext = {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461016,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461017,
      elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461010.elementId,
      tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461010.element["tableId"]
    }, this._slideTableSelectionService["clear"](), this._boardElementStateService["selectElements"]({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461016,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461017
    }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461010.elementId], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461010.elementId), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461011.setTableSelection({
      ranges: []
    }), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461014 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461012.preventDefault) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461014.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461012), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461015 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461012.stopPropagation) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461015.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461012), Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461013), this._makeSceneDirty();
  }
  _startPendingStage1Body(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461027, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461028, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461031) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461032, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461033;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461034 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461027.getUnitId(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461035 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461027.getActivePageId(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461036 = this._boardElementService["getElementData"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461034, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461035),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461037 = this._buildCellSelectionFromTableEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461027, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461028, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461037 && (this._pendingStage1BodyState = {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461034,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461035,
      elementData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461036,
      elementDataItem: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461028,
      object: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029,
      startEvent: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030,
      startPoint: {
        ...this._getBoardPointFromEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030, {
          x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029.left,
          y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029.top
        })
      },
      pendingSelection: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461037
    }, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461032 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030.preventDefault) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461032.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461033 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030.stopPropagation) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461033.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030), Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461031));
  }
  _handlePendingStage1BodyPointerMove(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461049) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461050 = this._pendingStage1BodyState;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461050) return;
    if ("buttons" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461049 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461049.buttons !== undefined && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461049.buttons & 1) != 1) {
      this._finishPendingStage1Body({
        focusCell: true
      });
      return;
    }
    let {
        x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051,
        y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461052
      } = this._getBoardPointFromEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461049, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461050.startPoint),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D32 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461050.startPoint["x"],
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D33 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461052 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461050.startPoint["y"];
    Math.hypot(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D32, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D33) < 8 || (this._pendingStage1BodyState = null, this._startTableHandleMove(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461050.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461050.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461050.elementData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461050.elementDataItem, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461050.object, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461050.startEvent), this._handleTableHandleMovePointerMove(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461049));
  }
  _finishPendingStage1Body(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461057) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461058 = this._pendingStage1BodyState;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461058 || (this._pendingStage1BodyState = null, !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461057.focusCell)) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461059 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461058.pendingSelection["focus"] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461058.pendingSelection["anchor"] ?? resolveFirstSlideTableSelectionCell(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461058.pendingSelection);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461059) return;
    this._slideTableSelectionService["markTableInternalInteraction"](), this._beginTableInternalInteraction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461058.object);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461060 = this._slideTableSelectionService["selectCell"]({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461058.pendingSelection["unitId"],
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461058.pendingSelection["subUnitId"],
      elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461058.pendingSelection["elementId"],
      tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461058.pendingSelection["tableId"],
      row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461059.row,
      column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461059.column
    });
    this._enterCellStageFromSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461060), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461058.object["setTableSelection"](resolveSlideTableObjectSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461060)), this._makeSceneDirty();
  }
  _enterCellStage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461065, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461066) {
    this._tableActivationStage = "cell", this._activeTableContext = {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461065.getUnitId(),
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461065.getActivePageId(),
      elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461066.elementId,
      tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461066.element["tableId"]
    };
  }
  _enterCellStageFromSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461069) {
    this._tableActivationStage = "cell", this._activeTableContext = {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461069.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461069.subUnitId,
      elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461069.elementId,
      tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461069.tableId
    };
  }
  _startResizeIfHit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461071, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461072, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461073, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461074) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461075, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461076, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461077, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461078;
    if (this._isTableTextEditing()) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461079 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461073.getTable();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461079) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461080 = this._getBoardPointFromEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461074),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461081 = this._resolveObjectPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461073, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461080.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461080.y),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461082 = this._resolveResizeTrigger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461079, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461073, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461081.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461081.y);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461082) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461083 = ca(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461079, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461073),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461084 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461071.getUnitId();
    return this._resizeState = {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461084,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461071.getActivePageId(),
      elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461072.elementId,
      tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461072.element["tableId"],
      object: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461073,
      table: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461079,
      trigger: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461082,
      startPoint: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461081,
      startSize: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461082.kind === "resize-row" ? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461075 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461079.rows[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461082.row ?? 0]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461075.height) ?? 24 : ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461076 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461079.columns[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461082.column ?? 0]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461076.width) ?? 96,
      scaleX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461083.scaleX,
      scaleY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461083.scaleY
    }, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461077 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461074.preventDefault) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461077.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461074), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461078 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461074.stopPropagation) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461078.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461074), this._setResizeCursor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461082.kind), true;
  }
  _handleResizeCursorHover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461099) {
    if (this._resizeState) return;
    if (this._isTableTextEditing()) {
      this._resetResizeCursor();
      return;
    }
    if (this._rangeDragState || this._headerDragState || this._pendingHeaderMoveState || this._rowColumnMoveState || this._tableHandleMoveState) {
      this._resetResizeCursor();
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461100 = this._instanceService["getUnit"](this._renderContext["unitId"], UniverInstanceType.UNIVER_BOARD);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461100) {
      this._resetResizeCursor();
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461101 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461100.getUnitId(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461102 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461100.getActivePageId(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461103 = this._boardElementService["getElementData"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461101, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461102),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461104 = this._getBoardPointFromEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461099);
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242 of Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461103)) {
      if (!sa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242)) continue;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633 = this._getBoardTableObject(getBoardElementRenderObjectKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461101, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242.elementId)),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633.getTable();
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634 || !this._isTableActiveForResizeHover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461101, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461102, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242)) continue;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635 = this._resolveObjectPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461104.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461104.y),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636 = this._resolveResizeTrigger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635.y);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636) {
        this._setResizeCursor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636.kind);
        return;
      }
    }
    this._resetResizeCursor();
  }
  _isTableTextEditing() {
    return !!this._getActiveEditingSession();
  }
  _getActiveEditingSession() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461111 = this._editorUIService["getSession"]();
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461111 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461111.context ? {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461111.context,
      documentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461111.documentData,
      measurement: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461111.measurement
    } : this._cellEditorBridgeService["getEditing"]() ?? null;
  }
  _completeActiveEditor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461113) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461114 = this._editorUIService["getSession"]();
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461114 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461114.context) {
      this._editorUIService["complete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461113 ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461114.documentData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461114.measurement, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461114.sessionId);
      return;
    }
    this._cellEditorBridgeService["complete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461113);
  }
  _cancelActiveEditor() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461117 = this._editorUIService["getSession"]();
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461117 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461117.context) {
      this._editorUIService["cancel"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461117.sessionId);
      return;
    }
    this._cellEditorBridgeService["cancel"]();
  }
  _isTableActiveForResizeHover(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461119, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461120, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461121) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461122 = this._slideTableSelectionService["getSelection"]();
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461122 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461122.unitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461119 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461122.subUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461120 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461122.elementId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461121.elementId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461122.tableId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461121.element["tableId"] ? true : !!this._activeTableContext && this._activeTableContext["unitId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461119 && this._activeTableContext["subUnitId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461120 && this._activeTableContext["elementId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461121.elementId && this._activeTableContext["tableId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461121.element["tableId"];
  }
  _resolveResizeTrigger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461127, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461128, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461129, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461130) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461131 = ca(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461127, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461128),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461132 = hitTestSlideTableTrigger(buildSlideTableTriggers({
        tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461127.id,
        tableWidth: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461128.width,
        tableHeight: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461128.height,
        rowHeights: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461127.rows["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243 => (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243.height ?? 24) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461131.scaleY),
        columnWidths: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461127.columns["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244.width * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461131.scaleX),
        mergedCells: collectSlideTableMergeRanges(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461127)
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461129, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461130);
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461132 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461132.kind) === "resize-row" || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461132 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461132.kind) === "resize-column" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461132 : null;
  }
  _handleResizePointerMove(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461139) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461140 = this._resizeState;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461140) return;
    if ("buttons" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461139 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461139.buttons !== undefined && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461139.buttons & 1) != 1) {
      this._handleResizePointerUp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461139);
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461141 = this._buildResizeTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461140, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461139);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461141 && (this._setResizeCursor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461140.trigger["kind"]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461140.object["setPreviewTable"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461141), this._makeSceneDirty());
  }
  _handleRangeDragPointerMove(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461145) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461146 = this._rangeDragState;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461146 || this._resizeState) return;
    if ("buttons" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461145 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461145.buttons !== undefined && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461145.buttons & 1) != 1) {
      this._finishRangeDrag();
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461147 = this._getBoardPointVectorFromEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461145, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461146.startPoint);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461146.activated) {
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D9 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461147.x - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461146.startPoint["x"],
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461147.y - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461146.startPoint["y"];
      if (Math.hypot(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D9, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10) < 8) return;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461146.activated = true;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461148 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461146.object["hitTestCellAtScenePoint"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461147);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461148 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461148.kind !== "cell") return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461149 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461146.object["getTable"]();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461149) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461150 = expandSlideTableRangeToMergedCells(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461149, {
        startRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461146.anchor["row"],
        startColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461146.anchor["column"],
        endRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461148.row,
        endColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461148.column
      }),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461151 = this._slideTableSelectionService["selectRange"]({
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461146.selection["unitId"],
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461146.selection["subUnitId"],
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461146.selection["elementId"],
        tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461146.selection["tableId"],
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461150
      });
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461146.object["setTableSelection"](resolveSlideTableObjectSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461151)), this._makeSceneDirty();
  }
  _finishRangeDrag() {
    this._rangeDragState = null;
  }
  _handleResizePointerUp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461159) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461160 = this._resizeState;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461160) return;
    this._resizeState = null, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461160.object["setPreviewTable"](null), this._resetResizeCursor();
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461161 = this._resolveResizeSize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461160, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461159);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461161 === null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461161 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461160.startSize) {
      this._makeSceneDirty();
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461162 = this._buildResizeTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461160, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461159);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461162 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461162.rev === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461160.table["rev"]) {
      this._makeSceneDirty();
      return;
    }
    this._commandService["executeCommand"](UpdateBoardTableCommand.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461160.trigger["kind"] === "resize-row" ? {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461160.unitId,
      tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461160.tableId,
      patch: {
        rows: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461162.rows
      }
    } : {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461160.unitId,
      tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461160.tableId,
      patch: {
        columns: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461162.columns
      }
    }), this._makeSceneDirty();
  }
  _cancelResizePreview() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461167 = this._resizeState;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461167 && (this._resizeState = null, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461167.object["setPreviewTable"](null), this._resetResizeCursor(), this._makeSceneDirty());
  }
  _setResizeCursor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461169) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461170;
    this._resizeHoverActive = true;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461171 = this._renderContext["scene"];
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461170 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461171.setCursor) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461170.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461171, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461169 === "resize-column" ? CURSOR_TYPE.COLUMN_RESIZE : CURSOR_TYPE.ROW_RESIZE);
  }
  _resetResizeCursor() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461175;
    if (!this._resizeHoverActive) return;
    this._resizeHoverActive = false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461176 = this._renderContext["scene"];
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461175 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461176.resetCursor) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461175.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461176);
  }
  _buildResizeTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461179, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461180) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461181 = this._resolveResizeDelta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461179, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461180);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461181 === null) return null;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461179.trigger["kind"] === "resize-row") {
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D11 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461179.trigger["row"] ?? 0;
      return resizeSlideTableRowBoundary(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461179.table, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D11, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461181, 12);
    }
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D36 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461179.trigger["column"] ?? 0;
    return resizeSlideTableColumnBoundary(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461179.table, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D36, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461181, 12);
  }
  _resolveResizeSize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461185, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461186) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461187 = this._resolveResizeDelta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461185, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461186);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461187 === null ? null : Math.round(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461185.startSize + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461187);
  }
  _resolveResizeDelta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461191, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461192) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461193 = this._getBoardPointFromEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461192, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461191.startPoint),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461194 = this._resolveObjectPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461191.object, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461193.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461193.y),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D38 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461191.trigger["kind"] === "resize-row" ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461194.y - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461191.startPoint["y"]) / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461191.scaleY : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461194.x - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461191.startPoint["x"]) / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461191.scaleX;
    return Number.isFinite(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D38) ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D38 : null;
  }
  _getBoardPointVectorFromEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461199, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461200) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461201 = this._getBoardPointFromEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461199, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461200);
    return Vector2.FromArray([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461201.x, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461201.y]);
  }
  _getBoardPointFromEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461205, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461206 = {
    x: 0,
    y: 0
  }) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461207 = Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461205.offsetX) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461205.offsetX : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461206.x,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461208 = Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461205.offsetY) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461205.offsetY : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461206.y,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461209 = this._boardUIStateService["getState"](),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461209 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461209.viewportPanOffset) ?? {
        x: 0,
        y: 0
      },
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D40 = Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461209 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461209.zoomRatio) && ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461209 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461209.zoomRatio) ?? 0) > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461209.zoomRatio : 1;
    return {
      x: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461207 - var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8.x) / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D40,
      y: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461208 - var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8.y) / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D40
    };
  }
  _resolveObjectPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461215, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461216, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461217) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461218 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461215.getInverseCoord(Vector2.FromArray([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461216, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461217]));
    return {
      x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461218.x + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461215.width / 2,
      y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461218.y + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461215.height / 2
    };
  }
  _handleTableDoubleClick(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461223, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461224, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461225, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461226, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461227) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461228, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461229;
    if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461226.button ?? 0) !== 0 || !this._isTableReadyForCellInteraction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461223, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461224)) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461230 = this._selectCellFromTableEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461223, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461224, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461225, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461226),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461225.getTable();
    !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461230 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231 || ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461228 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461226.preventDefault) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461228.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461226), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461229 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461226.stopPropagation) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461229.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461226), Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461227), this._openCellEditor({
      selection: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461230,
      object: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461225,
      table: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461231
    }));
  }
  _selectCellFromTableEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461241, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461242, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461243, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461244) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461245 = this._buildCellSelectionFromTableEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461241, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461242, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461243, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461244),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461246 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461245 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461245.focus) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461245 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461245.anchor) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461245 ? resolveFirstSlideTableSelectionCell(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461245) : null);
    return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461245 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461246 ? null : (this._slideTableSelectionService["markTableInternalInteraction"](), this._slideTableSelectionService["selectCell"]({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461245.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461245.subUnitId,
      elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461245.elementId,
      tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461245.tableId,
      row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461246.row,
      column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461246.column
    }));
  }
  _buildCellSelectionFromTableEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461254, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461255, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461256) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461257 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461255.hitTestCellAtScenePoint(this._getBoardPointVectorFromEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461256));
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461257 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461257.kind !== "cell") return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461258 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253.getUnitId(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461259 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461253.getActivePageId(),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10 = {
        row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461257.row,
        column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461257.column
      };
    return {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461258,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461259,
      elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461254.elementId,
      tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461254.element["tableId"],
      kind: "cell",
      anchor: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10,
      focus: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10,
      ranges: [{
        startRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461257.row,
        endRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461257.row,
        startColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461257.column,
        endColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461257.column
      }]
    };
  }
  _beginTableInternalInteraction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461267) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461268, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461269;
    this._boardElementStateService["clearSelection"](), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461268 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461269 = this._renderContext["scene"]).getTransformer) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461268 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461268.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461269)) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461268.detachFrom(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461267);
  }
  _handleKeyboardAction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461273) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461274 = this._getActiveEditingSession();
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461274) return this._handleEditingKeyboardAction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461273, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461274);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461275 = this._resolveActiveKeyboardTarget();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461275) return false;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461273 === "edit-cell") return this._openCellEditor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461275);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461273 === "clear-cells") return this._clearSelectedCellContents(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461275);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461276 = resolveSlideTableKeyboardMovement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461273);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461276) return false;
    let {
        selection: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461277,
        table: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461278,
        object: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461279
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461275,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461280 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461277.focus ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461277.anchor ?? resolveFirstSlideTableSelectionCell(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461277);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461280) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461281 = resolveNextSlideTableKeyboardCell(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461280, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461276, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461278.rows["length"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461278.columns["length"]);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461276.extend) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461277.anchor ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461280,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246 = expandSlideTableRangeToMergedCells(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461278, {
          startRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245.row,
          startColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245.column,
          endRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461281.row,
          endColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461281.column
        }),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247 = this._slideTableSelectionService["selectRange"]({
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461277.unitId,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461277.subUnitId,
          elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461277.elementId,
          tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461277.tableId,
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246
        });
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461279.setTableSelection(resolveSlideTableObjectSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247));
    } else {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248 = this._slideTableSelectionService["selectCell"]({
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461277.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461277.subUnitId,
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461277.elementId,
        tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461277.tableId,
        row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461281.row,
        column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461281.column
      });
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461279.setTableSelection(resolveSlideTableObjectSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248));
    }
    return this._makeSceneDirty(), true;
  }
  _handleEditingKeyboardAction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461291, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461292) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461293 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461291 === "tab-forward" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461291 === "tab-backward" ? resolveSlideTableKeyboardMovement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461291) : null;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461293) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461294 = this._getBoardTableObject(getBoardElementRenderObjectKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461292.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461292.elementId)),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295 = this._slideTableResourceService["getTable"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461292.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461292.tableId) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461294 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461294.getTable());
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461294 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461296 = resolveNextSlideTableKeyboardCell({
      row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461292.row,
      column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461292.column
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461293, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295.rows["length"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295.columns["length"]);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461296.row === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461292.row && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461296.column === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461292.column) return false;
    this._completeActiveEditor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461292.documentData);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297 = this._slideTableSelectionService["selectCell"]({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461292.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461292.subUnitId,
      elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461292.elementId,
      tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461292.tableId,
      row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461296.row,
      column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461296.column
    });
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461294.setTableSelection(resolveSlideTableObjectSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297)), this._tableActivationStage = "cell", this._activeTableContext = {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461292.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461292.subUnitId,
      elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461292.elementId,
      tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461292.tableId
    }, this._keyboardService["setFocused"](true), this._makeSceneDirty(), true;
  }
  _resolveTableClipboardTarget(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461305) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461305.defaultPrevented || !this._contextService["getContextValue"]("FOCUSING_BOARD_TABLE") || this._getActiveEditingSession()) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461306 = this._resolveActiveKeyboardTarget();
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461306 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461306.selection["unitId"]) === this._renderContext["unitId"] ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461306 : null;
  }
  _canCopyTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461309) {
    return getBoardPermissionValue(this._permissionService, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461309.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461309.unitId, UnitAction.Copy);
  }
  async _commitClipboardPatch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461311, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461312) {
    return (await this._commandService["executeCommand"](UpdateBoardTableCommand.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461311.selection["unitId"],
      tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461311.selection["tableId"],
      patch: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461312
    })) ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461311.object["setTableSelection"](resolveSlideTableObjectSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461311.selection)), this._keyboardService["setFocused"](true), this._makeSceneDirty(), true) : false;
  }
  async _insertClipboardImages(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461315, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461316 = 0) {
    for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461315.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12++) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461315[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638 = await normalizeClipboardImageFile(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638) {
        let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461316 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12) * 32;
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 === 0 ? await this._boardImageInsertService["insertImage"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638) : await this._boardImageInsertService["insertImage"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638, {
          offset: {
            x: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1,
            y: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1
          }
        });
      }
    }
  }
  _handleKeyboardInput(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461319) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461319.kind === "composition-start" ? this._openActiveCellEditor() : this._getActiveEditingSession() || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461319.text ? false : this._openActiveCellEditor({
      initialText: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461319.text
    });
  }
  _clearSelectedCellContents(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461321) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461322 = buildSlideTableClearTextPatch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461321.table, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461321.selection);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461322 && this._commandService["executeCommand"](UpdateBoardTableCommand.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461321.selection["unitId"],
      tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461321.selection["tableId"],
      patch: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461322
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461321.object["setTableSelection"](resolveSlideTableObjectSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461321.selection)), this._makeSceneDirty(), true;
  }
  _openActiveCellEditor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461325) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461326 = this._resolveActiveKeyboardTarget();
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461326 ? this._openCellEditor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461326, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461325) : false;
  }
  _openCellEditor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461329, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461330) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461331, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461332, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461333, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461334;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461335 = resolveSlideTableCellEditorTarget({
      table: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461329.table,
      selection: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461329.selection,
      tableWidth: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461329.object["width"],
      tableHeight: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461329.object["height"]
    });
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461335) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461336 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461329.object["getCellTextRect"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461335.row, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461335.column, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461329.object["width"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461329.object["height"]) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461335.rect,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461337 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461330 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461330.initialText) === undefined ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461335.documentData : replaceSlideTableCellDocumentText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461335.documentData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461330.initialText),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB12 = {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461329.selection["unitId"],
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461329.selection["subUnitId"] ?? "",
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461329.selection["elementId"],
        tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461329.selection["tableId"],
        row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461335.row,
        column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461335.column,
        rect: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461336,
        horizontalAlign: resolveSlideTableDocumentHorizontalAlign(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461335.documentData) ?? HorizontalAlign.LEFT,
        verticalAlign: toCoreVerticalAlign((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461331 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461335.cellStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461331.verticalAlign) ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461332 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461335.documentData["documentStyle"]) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461332 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461332.renderConfig) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461332.verticalAlign),
        isHorizontal: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461333 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461335.cellStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461333.textDirection) !== SlideTableTextDirectionEnum.Vertical && ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461334 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461335.cellStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461334.textDirection) !== SlideTableTextDirectionEnum.Vertical270,
        tableTransform: {
          left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461329.object["left"],
          top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461329.object["top"],
          width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461329.object["width"],
          height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461329.object["height"],
          angle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461329.object["angle"] ?? 0,
          flipX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461329.object["flipX"],
          flipY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461329.object["flipY"]
        },
        documentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461337
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461338 = this._resolveEditorUILayout(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB12);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461338) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461339 = this._editorUIService["getSession"]();
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461339 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461339.context ? this._editorUIService["complete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461339.documentData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461339.measurement, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461339.sessionId) : (this._cellEditorBridgeService["complete"](), this._editorUIService["complete"]());
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461340 = this._slideTableSelectionService["enterTextMode"]({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461329.selection["unitId"],
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461329.selection["subUnitId"] ?? "",
      elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461329.selection["elementId"],
      tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461329.selection["tableId"],
      row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461335.row,
      column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461335.column
    });
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461329.object["setEditingCell"]({
      row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461335.row,
      column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461335.column
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461329.object["setTableSelection"](resolveSlideTableObjectSelection(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461340)), this._keyboardService["setFocused"](false), this._editorUIService["open"]({
      editorId: "BOARD_TABLE_EDITOR_UNIT_ID",
      documentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461337,
      layout: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461338,
      context: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB12,
      appearance: "table-cell",
      autoFocus: true,
      hideFloatingToolbarAlignment: true,
      isSingle: false,
      onChange: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251) => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250 && this._autoGrowCellEditorRowHeight(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461329.object, {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250,
          documentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249,
          measurement: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251
        });
      },
      onComplete: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46255, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257) => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256 && this._commitCellDocument(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461329.object, {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256,
          documentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46255,
          measurement: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257
        });
      },
      onCancel: () => {
        this._finishCellEditing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461329.object);
      },
      onKeyDown: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261 => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262 = ta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261);
        return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261.preventDefault(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261.stopPropagation(), Promise.resolve(this._keyboardService["handle"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262)), true) : false;
      }
    }), this._makeSceneDirty(), true;
  }
  _resolveEditorUILayout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461353) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461354, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461355;
    return na(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461353, {
      canvasOffset: ra((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461354 = this._renderContext["engine"]) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461355 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461354.getCanvasElement) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461355.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461354), this._layoutService["getContentElement"]()),
      scene: this._renderContext["scene"]
    });
  }
  _commitCellDocument(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461359, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461360) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461361;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461362 = this._slideTableResourceService["getTable"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461360.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461360.tableId) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461359.getTable();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461362) {
      this._finishCellEditing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461359);
      return;
    }
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB8 = "BOARD_TABLE_CELL_EDITOR_" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461362.id + "_" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461360.row + "_" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461360.column,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461363 = normalizeSlideTableCellDocumentData(stripEditorUIDocumentData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461360.documentData), var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB8),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461364 = buildSlideTableCellTextDataPatch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461362, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461360.row, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461360.column, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461363, {
        verticalAlign: da((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461361 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461363.documentStyle) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461361 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461361.renderConfig) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461361.verticalAlign)
      });
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461364) {
      this._finishCellEditing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461359);
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461365 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461364.rows,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461366 = la(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461362, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461365, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461359, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461360);
    this._commandService["executeCommand"](UpdateBoardTableCommand.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461360.unitId,
      tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461360.tableId,
      patch: {
        rows: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461365
      }
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461366 > 0 && this._growBoardTableElementHeight(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461359, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461360, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461366), this._finishCellEditing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461359);
  }
  _autoGrowCellEditorRowHeight(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461375, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461376) {
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461376.measurement) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461377 = this._slideTableResourceService["getTable"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461376.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461376.tableId) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461375.getTable();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461377) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461378 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461377.rows["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265 => ({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265
      })),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461379 = la(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461377, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461378, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461375, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461376);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461379 <= 0 || (this._commandService["executeCommand"](UpdateBoardTableCommand.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461376.unitId,
      tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461376.tableId,
      patch: {
        rows: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461378
      }
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461375.setPreviewTable({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461377,
      rows: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461378
    }), this._growBoardTableElementHeight(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461375, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461376, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461379), this._makeSceneDirty());
  }
  _growBoardTableElementHeight(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461385, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461386, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461387) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461387 <= 0) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461388 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461385.getElement(),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB14 = {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461388.transform,
        height: X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461388.transform["height"] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461385.height, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461385.height) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461387
      };
    this._commandService["executeCommand"](UpdateBoardElementsCommand.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461386.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461386.subUnitId,
      updates: [{
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461386.elementId,
        element: {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461388,
          transform: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB14
        },
        transform: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB14
      }]
    });
  }
  _finishCellEditing(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461393) {
    this._slideTableSelectionService["clear"](), this._keyboardService["setFocused"](false), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461393.setEditingCell(null), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461393.setTableSelection(null), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461393.setTableControlHover(null), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461393.setPreviewTable(null), this._makeSceneDirty();
  }
  _resolveActiveKeyboardTarget() {
    if (this._boardUIStateService["getState"]().interactionMode === "viewing") return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461395 = this._slideTableSelectionService["getSelection"]();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461395 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461395.kind === "text") return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461396 = this._getBoardTableObject(getBoardElementRenderObjectKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461395.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461395.elementId)),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461397 = this._slideTableResourceService["getTable"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461395.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461395.tableId) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461396 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461396.getTable());
    return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461396 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461397 ? null : {
      selection: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461395,
      object: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461396,
      table: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461397
    };
  }
  _openContextMenu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461401) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461402, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461403, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461404, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461405;
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461402 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461403 = this._contextMenuService).hideContextMenu) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461402.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461403);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461406 = this._createContextMenuEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461401);
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461404 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461406.preventDefault) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461404.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461406), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461405 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461406.stopPropagation) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461405.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461406), this._contextMenuService["triggerContextMenu"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461406, "board.table.contextMenu.cell");
  }
  _createContextMenuEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461413) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461414, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461415, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461416;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461417 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461413;
    if (Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461417.clientX) && Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461417.clientY)) return {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461417,
      clientX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461417.clientX,
      clientY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461417.clientY,
      preventDefault: () => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266;
        return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461417.preventDefault) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461417);
      },
      stopPropagation: () => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268;
        return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461417.stopPropagation) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461417);
      }
    };
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461418 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461414 = this._renderContext["engine"]) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461415 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461414.getCanvasElement) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461415 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461415.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461414)) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461416 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461415.getBoundingClientRect) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461416.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461415),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D42 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461418 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461418.left) ?? 0) + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461413.offsetX ?? 0),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D43 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461418 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461418.top) ?? 0) + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461413.offsetY ?? 0);
    return {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461417,
      clientX: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D42,
      clientY: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D43,
      preventDefault: () => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270;
        return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461417.preventDefault) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461417);
      },
      stopPropagation: () => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272;
        return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461417.stopPropagation) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461417);
      }
    };
  }
};
function sa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461912) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461912.element["type"] === BoardElementType.Table;
}
function ca(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461914, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461915) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461916 = resolveSlideTableRenderModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461914);
  return {
    scaleX: X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461915.width / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461916.width, 1),
    scaleY: X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461915.height / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461916.height, 1)
  };
}
function la(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461920, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461921, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461922, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461923) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461924 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461923.measurement;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461924) return 0;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461925 = resolveSlideTableRenderModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461920),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461926 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461925.cells["find"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461425 => !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461425.hidden && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461425.row === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461923.row && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461425.column === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461923.column);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461926) return 0;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461927 = ua(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461926, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461925.height, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461922.height),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461928 = X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461924.contentHeight, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461927),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D65 = Math.ceil(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461928 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461927);
  if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D65 <= 0) return 0;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D66 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D65 * X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461925.height / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461922.height, 1),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461929 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461921[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461926.row + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461926.rowSpan - 1];
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461929 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461929.height = X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461929.height ?? 24, 24) + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D66, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D65) : 0;
}
function ua(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461940, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461941, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461942) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461943 = resolveSlideTableCellTextMargins(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461940.style["margins"]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461944 = X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461942 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461941, 1);
  return Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461940.bounds["height"] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461944 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461943.top - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461943.bottom);
}
function da(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461950) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461950 === VerticalAlign.MIDDLE) return SlideTableVerticalAlignEnum.Middle;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461950 === VerticalAlign.BOTTOM) return SlideTableVerticalAlignEnum.Bottom;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461950 === VerticalAlign.TOP) return SlideTableVerticalAlignEnum.Top;
}
function fa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461952) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461953, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461954;
  (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461953 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461952.dispose) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461953.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461952), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461954 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461952.unsubscribe) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461954.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461952);
}
function pa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461958, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461959) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461960 = X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461959, 1),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A20 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461958.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461426 => X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461426, 1)),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461961 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A20.reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461427, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461428) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461427 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461428, 0);
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A20.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461429 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461429 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461961 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461960);
}
function ma(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461966, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461967) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D69 = 0,
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB28 = {
      index: 0,
      distance: Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461967)
    };
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D46 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D46 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461966.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D46 += 1) {
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D69 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461966[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D46];
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D13 = Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461967 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D69);
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D13 < var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB28.distance && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB28 = {
      index: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D46 + 1,
      distance: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D13
    });
  }
  return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB28.index;
}
function Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970) {
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970.stopPropagation(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970.skipNextObservers = true);
}
function ha(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461972, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461973) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461974, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461975;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461972) return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461974 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461972.rows[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461973 - 1]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461974.height) ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461975 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461972.rows[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461973]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461975.height);
}
function ga(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461980, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461981) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461982, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461983;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461980) return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461982 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461980.columns[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461981 - 1]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461982.width) ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461983 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461980.columns[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461981]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461983.width);
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461988) {
  if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461988.insertIndex == "number" && Number.isInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461988.insertIndex)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461988.insertIndex;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461989 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461988.kind === "row-insert-dot" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461988.row : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461988.column;
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461989 == "number" && Number.isInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461989) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461989 + 1 : null;
}
function va(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461992, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461993) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461994 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461992.getInverseCoord(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461993),
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB16 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461994.x + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461992.width / 2,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB17 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461994.y + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461992.height / 2;
  return var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB16 >= -32 && var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB16 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461992.width + 32 && var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB17 >= -32 && var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB17 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461992.height + 32;
}
function ya(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461998) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB30 = {
    left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461998.left ?? 0,
    top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461998.top ?? 0,
    width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461998.width ?? 0,
    height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461998.height ?? 0
  };
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461998.rotation !== undefined && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB30.rotation = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461998.rotation), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461998.flipX !== undefined && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB30.flipX = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461998.flipX), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461998.flipY !== undefined && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB30.flipY = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461998.flipY), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB30;
}
function X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462000, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462001) {
  return Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462000) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462000 > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462000 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462001;
}
function ba(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462004) {
  return new DOMParser().parseFromString(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462004, "text/html").querySelector("img") !== null;
}
async function xa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462006, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462007) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462008 = extractClipboardImageFiles(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462006);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462007 ? ba(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462007) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462008.length > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462008 : extractClipboardHtmlImageFiles(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462007) : [] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462008;
}
export { oa };
