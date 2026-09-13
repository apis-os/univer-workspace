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
import { Zi } from "./boards-table-ui-boards-table-uiplugin-internal-core-endo.js";
let Qi = class extends RxDisposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46538, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46539, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46540, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46541, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46542) {
    super(), this._renderContext = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46538, this._instanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46539, this._boardElementService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46540, this._slideTableModelService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46541, this._slideTableResourceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46542, this._init();
  }
  _init() {
    this.disposeWithMe(toDisposable(this._slideTableModelService["tableChange$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136.unitId === this._renderContext["unitId"] && this._syncTableObjects(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136.tableId);
    }))), this.disposeWithMe(toDisposable(this._slideTableModelService["tableRemoval$"].subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138.unitId === this._renderContext["unitId"] && this._syncTableObjects(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138.tableId);
    })));
  }
  _syncTableObjects(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46548) {
    let {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46549
      } = this._renderContext,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550 = this._instanceService["getUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46549, UniverInstanceType.UNIVER_BOARD);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550.getActivePageId(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552 = this._boardElementService["getElementData"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46549, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553 = this._slideTableModelService["getTable"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46549, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46548) ?? null,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554 = this._slideTableResourceService["getThemes"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46549),
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 = false;
    if (Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140 => {
      if (!fn_L0_core_pred_routine_pure_O1_zalloc_nothrow_sig3B80(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140.element["tableId"] !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46548) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141 = this._getBoardTableObject(getBoardElementRenderObjectKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46549, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140.elementId));
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141.updateElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140.element), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141.setTableThemes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141.setTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 = true);
    }), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556;
      (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556 = this._renderContext["scene"]).makeDirty) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46555.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556, true);
    }
  }
  _getBoardTableObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46566) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46568;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46569 = this._renderContext["scene"],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46570 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46569.getObjectIncludeInGroup) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46569, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46566)) ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46568 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46569.getObject) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46568.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46569, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46566));
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46570 instanceof Zi ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46570 : null;
  }
};
function fn_L0_core_pred_routine_pure_O1_zalloc_nothrow_sig3B80(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461866) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461866.element["type"] === BoardElementType.Table;
}
export { Qi };
