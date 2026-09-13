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
const hr = {
  insertRows: InsertBoardTableRowsCommand.id,
  insertColumns: InsertBoardTableColumnsCommand.id,
  deleteRows: DeleteBoardTableRowsCommand.id,
  deleteColumns: DeleteBoardTableColumnsCommand.id,
  mergeCells: MergeBoardTableCellsCommand.id,
  unmergeCells: UnmergeBoardTableCellsCommand.id,
  updateTable: UpdateBoardTableCommand.id
};
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461543, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461544, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461545) {
  return buildSlideTableContextMenuCommand(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461543, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461544, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461545, hr);
}
const vr = K("board-table.operation.insert-row-above", SLIDE_TABLE_CONTEXT_MENU_ACTIONS.InsertRowAbove),
  yr = K("board-table.operation.insert-row-below", SLIDE_TABLE_CONTEXT_MENU_ACTIONS.InsertRowBelow),
  br = K("board-table.operation.insert-column-left", SLIDE_TABLE_CONTEXT_MENU_ACTIONS.InsertColumnLeft),
  xr = K("board-table.operation.insert-column-right", SLIDE_TABLE_CONTEXT_MENU_ACTIONS.InsertColumnRight),
  Sr = K("board-table.operation.delete-rows", SLIDE_TABLE_CONTEXT_MENU_ACTIONS.DeleteRows),
  Cr = K("board-table.operation.delete-columns", SLIDE_TABLE_CONTEXT_MENU_ACTIONS.DeleteColumns),
  wr = K("board-table.operation.merge-cells", SLIDE_TABLE_CONTEXT_MENU_ACTIONS.MergeCells),
  Tr = K("board-table.operation.unmerge-cells", SLIDE_TABLE_CONTEXT_MENU_ACTIONS.UnmergeCells),
  Er = K("board-table.operation.distribute-rows", SLIDE_TABLE_CONTEXT_MENU_ACTIONS.DistributeRows),
  Dr = K("board-table.operation.distribute-columns", SLIDE_TABLE_CONTEXT_MENU_ACTIONS.DistributeColumns),
  Or = [{
    title: "boards-table-ui.contextMenu.resetColor"
  }, {
    title: "white",
    color: "white"
  }, {
    title: "gray.100",
    color: "gray.100"
  }, {
    title: "primary.100",
    color: "primary.100"
  }, {
    title: "blue.100",
    color: "blue.100"
  }, {
    title: "green.100",
    color: "green.100"
  }, {
    title: "yellow.100",
    color: "yellow.100"
  }, {
    title: "red.100",
    color: "red.100"
  }],
  kr = [{
    title: "boards-table-ui.contextMenu.resetColor"
  }, {
    title: "gray.900",
    color: "gray.900"
  }, {
    title: "gray.500",
    color: "gray.500"
  }, {
    title: "red.600",
    color: "red.600"
  }, {
    title: "orange.600",
    color: "orange.600"
  }, {
    title: "yellow.700",
    color: "yellow.700"
  }, {
    title: "green.600",
    color: "green.600"
  }, {
    title: "blue.600",
    color: "blue.600"
  }, {
    title: "purple.600",
    color: "purple.600"
  }],
  Ar = Jr("board-table.operation.border-all", SlideTableBorderPresetEnum.All),
  jr = Jr("board-table.operation.border-outer", SlideTableBorderPresetEnum.Outer),
  Mr = Jr("board-table.operation.border-inner", SlideTableBorderPresetEnum.Inner),
  Nr = Jr("board-table.operation.border-none", SlideTableBorderPresetEnum.None),
  Pr = Yr("board-table.operation.align-left", {
    axis: "horizontal",
    value: HorizontalAlign.LEFT
  }),
  Fr = Yr("board-table.operation.align-center", {
    axis: "horizontal",
    value: HorizontalAlign.CENTER
  }),
  Ir = Yr("board-table.operation.align-right", {
    axis: "horizontal",
    value: HorizontalAlign.RIGHT
  }),
  Lr = Yr("board-table.operation.align-top", {
    axis: "vertical",
    value: VerticalAlign.TOP
  }),
  Rr = Yr("board-table.operation.align-middle", {
    axis: "vertical",
    value: VerticalAlign.MIDDLE
  }),
  zr = Yr("board-table.operation.align-bottom", {
    axis: "vertical",
    value: VerticalAlign.BOTTOM
  }),
  Br = Or.map((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461549, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461550) => Xr("board-table.operation.background-color-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461550, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461549)),
  Vr = kr.map((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461551, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461552) => Zr("board-table.operation.text-color-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461552, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461551)),
  Hr = qr("board-table.operation.copy-table", BoardCopySelectionOperation.id),
  Ur = qr("board-table.operation.cut-table", BoardCutSelectionOperation.id),
  Wr = {
    id: "board-table.operation.delete-table",
    type: CommandType.OPERATION,
    async handler(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461553) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461554 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461553.get(SlideTableSelectionService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461555 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461554.getSelection();
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461555) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461553.get(ICommandService).executeCommand(BoardDeleteSelectionOperation.id);
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461556 = await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461553.get(ICommandService).executeCommand(RemoveBoardElementsOperation.id, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461555.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461555.subUnitId,
        elementIds: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461555.elementId]
      });
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461556 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461554.clear(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461556;
    }
  },
  Gr = [vr, yr, br, xr, Sr, Cr, wr, Tr, Er, Dr, Hr, Ur, Wr, Ar, jr, Mr, Nr, Pr, Fr, Ir, Lr, Rr, zr, ...Br, ...Vr];
function K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461569, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461570) {
  return {
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461569,
    type: CommandType.OPERATION,
    handler(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320 = ti(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319.selection);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320.table, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320.selection, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461570);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318.get(ICommandService).executeCommand(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321.commandId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321.params) : false;
    }
  };
}
function qr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461573, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461574) {
  return {
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461573,
    type: CommandType.OPERATION,
    handler(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326) {
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326.get(ICommandService).executeCommand(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461574);
    }
  };
}
function Jr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461577, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461578) {
  return Qr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461577, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329) => buildSlideTableBorderPresetPatch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461578));
}
function Yr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461581, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461582) {
  return Qr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461581, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331) => buildSlideTableTextAlignPatch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461582));
}
function Xr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461585, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461586) {
  return {
    ...Qr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461585, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46332, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334) => buildSlideTableBackgroundColorPatch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46332, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333, fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig193F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461586.color))),
    title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461586.title
  };
}
function Zr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461589, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461590) {
  return {
    ...Qr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461589, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337) => buildSlideTableTextColorPatch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336, fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig193F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461590.color))),
    title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461590.title
  };
}
function Qr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461593, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461594) {
  return {
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461593,
    type: CommandType.OPERATION,
    handler(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339 = ei(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338.get(ICommandService).executeCommand(UpdateBoardTableCommand.id, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339.unitId,
        tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339.tableId,
        patch: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461594(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339.table, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339.range, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338)
      }) : false;
    }
  };
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig193F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461597, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461598) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461598) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461599 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461597.get(ThemeService);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461599.isValidThemeColor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461598) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461599.getColorFromTheme(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461598) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461598;
}
function ei(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461603) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461604 = getSlideTableSelectionContext(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461603.get(SlideTableSelectionService).getSelection());
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461604) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461605 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461603.get(SlideTableResourceService).getTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461604.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461604.tableId);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461605 ? {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461604,
    table: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461605
  } : null;
}
function ti(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461609, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461610) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461610 ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461609.get(SlideTableSelectionService).getSelection(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461612 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611.ranges[0];
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461612 ? null : {
    selection: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611,
    table: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461609.get(SlideTableResourceService).getTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611.tableId)
  };
}
const ri = "FOCUSING_BOARD_TABLE";
const Vi = "board.table.floating-toolbar";
var Zi = class extends SlideTableObject {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46532, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46533) {
    super(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46532, {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46533,
      controlButtonMode: "table-handle"
    }), J(this, "_element", undefined), this._element = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46533.element;
  }
  updateElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46536) {
    this._element = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46536, this.makeDirty(true);
  }
  getElement() {
    return this._element;
  }
};
export { hr, ti, ri, vr, yr, br, xr, Sr, Cr, Wr, wr, Tr, Er, Dr, Zi, Gr, Vi };
