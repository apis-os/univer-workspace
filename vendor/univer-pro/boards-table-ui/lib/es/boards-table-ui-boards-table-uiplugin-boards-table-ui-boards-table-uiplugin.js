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
import { Cr, Dr, Er, Gr, Sr, Tr, Wr, Zi, br, hr, ri, ti, vr, wr, xr, yr } from "./boards-table-ui-boards-table-uiplugin-internal-core-endo.js";
import { ai } from "./boards-table-ui-boards-table-uiplugin-boards-table-ui-ai.js";
import { to } from "./boards-table-ui-boards-table-uiplugin-boards-table-ui-to.js";
import { J } from "./boards-table-ui-boards-table-uiplugin-boards-table-ui-j.js";
import { ii } from "./boards-table-ui-boards-table-uiplugin-boards-table-ui-ii.js";
import { ea } from "./boards-table-ui-boards-table-uiplugin-boards-table-ui-ea.js";
import { Ha } from "./boards-table-ui-boards-table-uiplugin-boards-table-ui-ha.js";
import { Sa } from "./boards-table-ui-boards-table-uiplugin-boards-table-ui-sa.js";
import { Qi } from "./boards-table-ui-boards-table-uiplugin-boards-table-ui-qi.js";
import { oa } from "./boards-table-ui-boards-table-uiplugin-boards-table-ui-oa.js";
import { Ji } from "./boards-table-ui-boards-table-uiplugin-boards-table-ui-ji.js";
function gr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461539, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461540) {
  return resolveSlideTableContextMenuActions(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461539, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461540, hr);
}
function Kr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461561, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461562) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461563;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461564 = ti(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461561);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461564 ? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461563 = gr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461564.table, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461564.selection).find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317.id === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461562)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461563.enabled) ?? false : false;
}
const oi = {
  id: "board-table.operation.keyboard",
  type: CommandType.OPERATION,
  handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461635, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461636, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461637) => {
    if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461636 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461636.action)) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461638 = si(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461635, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461637);
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461638 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461638.keyboardService["handle"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461636.action)) ?? false;
  }
};
function si(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461643, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461644) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461645, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461646;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461647 = typeof (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461644 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461644.unitId) == "string" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461644.unitId : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461645 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461643.get(IUniverInstanceService).getCurrentUnitOfType(UniverInstanceType.UNIVER_BOARD)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461645.getUnitId();
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461647 ? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461646 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461643.get(IRenderManagerService).getRenderUnitById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461647)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461646.with(ai)) ?? null : null;
}
const ci = [oi],
  li = buildSlideTableKeyboardShortcutBindings({
    "arrow-left": KeyCode.ARROW_LEFT,
    "arrow-right": KeyCode.ARROW_RIGHT,
    "arrow-up": KeyCode.ARROW_UP,
    "arrow-down": KeyCode.ARROW_DOWN,
    "shift-arrow-left": KeyCode.ARROW_LEFT | MetaKeys.SHIFT,
    "shift-arrow-right": KeyCode.ARROW_RIGHT | MetaKeys.SHIFT,
    "shift-arrow-up": KeyCode.ARROW_UP | MetaKeys.SHIFT,
    "shift-arrow-down": KeyCode.ARROW_DOWN | MetaKeys.SHIFT,
    tab: KeyCode.TAB,
    "shift-tab": KeyCode.TAB | MetaKeys.SHIFT,
    enter: KeyCode.ENTER,
    f2: KeyCode.F2,
    delete: KeyCode.DELETE,
    backspace: KeyCode.BACKSPACE
  }).map(({
    binding: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461653,
    action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461654
  }) => ui(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461653, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461654));
function ui(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461655, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461656) {
  return {
    id: oi.id,
    binding: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461655,
    priority: 130,
    preconditions: di,
    staticParameters: {
      action: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461656
    }
  };
}
function di(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461659) {
  return !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461659.getContextValue(ri);
}
const fi = {};
function Ca() {
  return La("board-table.menu.insert", "boards-table-ui.contextMenu.insert");
}
function wa() {
  return La("board-table.menu.delete", "boards-table-ui.contextMenu.delete");
}
function Ta() {
  return La("board-table.menu.distribute", "boards-table-ui.contextMenu.distribute");
}
function Ea(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462012) {
  return Q(vr.id, "boards-table-ui.contextMenu.insertRowAbove", Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462012, SLIDE_TABLE_CONTEXT_MENU_ACTIONS.InsertRowAbove), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462012);
}
function Da(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462014) {
  return Q(yr.id, "boards-table-ui.contextMenu.insertRowBelow", Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462014, SLIDE_TABLE_CONTEXT_MENU_ACTIONS.InsertRowBelow), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462014);
}
function Oa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462016) {
  return Q(br.id, "boards-table-ui.contextMenu.insertColumnLeft", Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462016, SLIDE_TABLE_CONTEXT_MENU_ACTIONS.InsertColumnLeft), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462016);
}
function ka(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462018) {
  return Q(xr.id, "boards-table-ui.contextMenu.insertColumnRight", Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462018, SLIDE_TABLE_CONTEXT_MENU_ACTIONS.InsertColumnRight), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462018);
}
function Aa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462020) {
  return Q(Sr.id, "boards-table-ui.contextMenu.deleteRow", Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462020, SLIDE_TABLE_CONTEXT_MENU_ACTIONS.DeleteRows), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462020);
}
function ja(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462022) {
  return Q(Cr.id, "boards-table-ui.contextMenu.deleteColumn", Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462022, SLIDE_TABLE_CONTEXT_MENU_ACTIONS.DeleteColumns), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462022);
}
function Ma() {
  return Q(Wr.id, "boards-table-ui.contextMenu.deleteTable", false);
}
function Na(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462024) {
  return Q(wr.id, "boards-table-ui.editorToolbar.mergeCells", Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462024, SLIDE_TABLE_CONTEXT_MENU_ACTIONS.MergeCells), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462024);
}
function Pa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462026) {
  return Q(Tr.id, "boards-table-ui.editorToolbar.unmergeCells", Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462026, SLIDE_TABLE_CONTEXT_MENU_ACTIONS.UnmergeCells), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462026);
}
function Fa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462028) {
  return Q(Er.id, "boards-table-ui.contextMenu.distributeRows", Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462028, SLIDE_TABLE_CONTEXT_MENU_ACTIONS.DistributeRows), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462028);
}
function Ia(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462030) {
  return Q(Dr.id, "boards-table-ui.contextMenu.distributeColumns", Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462030, SLIDE_TABLE_CONTEXT_MENU_ACTIONS.DistributeColumns), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462030);
}
function Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462032, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462033) {
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462032 || !Kr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462032, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462033);
}
function La(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462036, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462037) {
  return {
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462036,
    type: MenuItemType.SUBITEMS,
    title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462037
  };
}
function Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462040, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462041, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462042, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462043) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462044 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462043 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462043.get(SlideTableSelectionService).getSelection();
  return {
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462040,
    type: MenuItemType.BUTTON,
    title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462041,
    disabled$: Ra(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462042),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462044 ? {
      params: {
        selection: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462044
      }
    } : {})
  };
}
function Ra(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462050) {
  return {
    subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461432) {
      if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461432 == "function") var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461432(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462050);else {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461433;
        (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461433 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461432.next) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461433.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461432, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462050);
      }
      return {
        unsubscribe: () => {}
      };
    }
  };
}
const za = {
  [MenuManagerPosition.CONTEXT_MENU]: {
    "board.table.contextMenu.cell": {
      order: 20,
      [ContextMenuGroup.LAYOUT]: {
        order: 0,
        "board-table.menu.insert": {
          order: 0,
          menuItemFactory: Ca,
          [vr.id]: {
            order: 0,
            menuItemFactory: Ea
          },
          [yr.id]: {
            order: 1,
            menuItemFactory: Da
          },
          [br.id]: {
            order: 2,
            menuItemFactory: Oa
          },
          [xr.id]: {
            order: 3,
            menuItemFactory: ka
          }
        },
        "board-table.menu.delete": {
          order: 1,
          menuItemFactory: wa,
          [Sr.id]: {
            order: 0,
            menuItemFactory: Aa
          },
          [Cr.id]: {
            order: 1,
            menuItemFactory: ja
          }
        },
        [wr.id]: {
          order: 2,
          menuItemFactory: Na
        },
        [Tr.id]: {
          order: 3,
          menuItemFactory: Pa
        },
        "board-table.menu.distribute": {
          order: 4,
          menuItemFactory: Ta,
          [Er.id]: {
            order: 0,
            menuItemFactory: Fa
          },
          [Dr.id]: {
            order: 1,
            menuItemFactory: Ia
          }
        }
      },
      [ContextMenuGroup.OTHERS]: {
        order: 1,
        [Wr.id]: {
          order: 0,
          menuItemFactory: Ma
        }
      }
    }
  }
};
function Ba(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462052) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462053 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462052;
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462053 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462053.type) !== BoardElementType.Table || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462053.tableId != "string" ? null : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462053;
}
function Va(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462056, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462057, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462058, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462059) {
  return {
    name: "table",
    createObject: ({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461436,
      elementDataItem: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461437,
      key: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461438,
      bounds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461439,
      zIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461440
    }) => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461441 = Ba(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461437.element);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461441) return null;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461442 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462056.getTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461436, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461441.tableId);
      return new Zi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461438, {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461439,
        element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461441,
        localeService: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462057,
        tableThemePalette: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462058,
        tableThemes: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462056.getThemes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461436),
        themeService: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462059,
        table: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461442,
        zIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461440,
        evented: true
      });
    },
    syncObject: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461450, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461451,
      elementDataItem: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461452,
      bounds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461453,
      zIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461454,
      preserveTransform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461455
    }) => {
      if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461450 instanceof Zi)) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461456 = Ba(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461452.element);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461456 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461455 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461450.transformByState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461453), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461454 !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461450.zIndex !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461454 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461450.zIndex = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461454), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461450.updateElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461456), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461450.setLocaleService(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462057), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461450.setTableThemePalette(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462058), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461450.setTableThemes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462056.getThemes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461451)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461450.setTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462056.getTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461451, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461456.tableId)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461450.makeDirty(true), true) : false;
    }
  };
}
const no = [ai];
let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462106 = to = class extends Plugin {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461503 = fi, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461504, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461505, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461506, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461507, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461508, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461509, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461510, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461511) {
    super(), this._config = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461503, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461504, this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461505, this._renderManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461506, this._localeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461507, this._themeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461508, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461509, this._menuManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461510, this._shortcutService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461511, J(this, "_adapter", null);
    let {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461512
    } = merge({}, fi, this._config);
    this._configService["setConfig"]("boards-table-ui.config", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461512);
  }
  onStarting() {
    UniverBoardsUIPlugin.registerRuntimeScopedDependencies(this._injector, to.scopedDependencies), this._injector["has"](SlideTableSelectionService) || this._injector["add"]([SlideTableSelectionService]), this._injector["add"]([ii]), this._injector["add"]([ea]), this._injector["add"]([Ha]), this._injector["add"]([Sa]), this._injector["has"](IEditorUIService) || this._injector["add"]([IEditorUIService, {
      useClass: EditorUIService
    }]), touchDependencies(this._injector, [[SlideTableSelectionService]]), touchDependencies(this._injector, [[ii]]), touchDependencies(this._injector, [[ea]]), touchDependencies(this._injector, [[Ha]]), touchDependencies(this._injector, [[IEditorUIService]]), this.disposeWithMe(this._injector["get"](Sa)), this.disposeWithMe(this._injector["get"](IBoardClipboardResourceAdapterService).registerAdapter(this._injector["get"](Ha)));
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461523 = Va(this._injector["get"](SlideTableResourceService), this._localeService, resolveSlideTableThemePalette(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311 => this._themeService["getColorFromTheme"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311)), this._themeService);
    this._adapter = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461523, this._appendRenderAdapter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461523), [...Gr, ...ci].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312 => {
      this.disposeWithMe(this._commandService["registerCommand"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312));
    }), li.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314 => {
      this.disposeWithMe(this._shortcutService["registerShortcut"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314));
    }), this.disposeWithMe(toDisposable(() => {
      this._removeRenderAdapter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461523), this._adapter = null;
    }));
  }
  onReady() {
    this._menuManagerService["mergeMenu"](za), this.disposeWithMe(this._renderManagerService["registerRenderModule"](UniverInstanceType.UNIVER_BOARD, no)), this.disposeWithMe(this._renderManagerService["registerRenderModule"](UniverInstanceType.UNIVER_BOARD, Qi)), this.disposeWithMe(this._renderManagerService["registerRenderModule"](UniverInstanceType.UNIVER_BOARD, oa)), this.disposeWithMe(this._renderManagerService["registerRenderModule"](UniverInstanceType.UNIVER_BOARD, Ji));
  }
  _appendRenderAdapter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461525) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461526, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461527;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461528 = this._getBoardsUIConfig(),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461528.additionalRenderAdapters ?? [];
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12.includes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461525) || this._configService["setConfig"](BOARDS_UI_PLUGIN_CONFIG_KEY, {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461528,
      additionalRenderAdapters: [...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461525],
      toolbar: {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461528.toolbar,
        tools: {
          ...((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461526 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461528.toolbar) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461526.tools),
          [BoardToolType.Table]: ro((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461527 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461528.toolbar) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461527 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461527.tools) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461527[BoardToolType.Table])
        }
      }
    });
  }
  _removeRenderAdapter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461533) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461534;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461535 = this._getBoardsUIConfig(),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461534 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461535.additionalRenderAdapters) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461534.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461533);
    this._configService["setConfig"](BOARDS_UI_PLUGIN_CONFIG_KEY, {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461535,
      additionalRenderAdapters: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14
    });
  }
  _getBoardsUIConfig() {
    return this._configService["getConfig"](BOARDS_UI_PLUGIN_CONFIG_KEY) ?? {};
  }
};
function ro(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462104) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462104 === false ? false : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462104 != "object" || {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462104,
    enabled: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462104.enabled ?? true
  };
}
export { var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462106 as UniverBoardsTableUIPlugin };
