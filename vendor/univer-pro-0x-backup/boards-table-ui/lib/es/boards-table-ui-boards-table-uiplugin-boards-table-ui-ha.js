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
let Ha = class {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461464) {
    this._resourceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461464, J(this, "key", "board-table");
  }
  collect(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461466) {
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16 = {},
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB17 = {};
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461466.elements["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274 => {
      if (!Ua(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274)) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275 = this._resourceService["getTable"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461466.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274.tableId);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275) return;
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274.id] = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275);
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275.themeId ? this._resourceService["getTheme"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461466.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275.themeId) : undefined;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB17[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276.id] = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276));
    }), Object.keys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16).length > 0 ? {
      tablesByElementId: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16,
      themes: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB17
    } : null;
  }
  serialize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461468) {
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461468.elements["filter"](Ua).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280 => this._resourceService["getTable"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461468.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280.tableId)).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281 !== undefined);
    return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8.length > 0 ? {
      html: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8.map(Xa).join("<br>"),
      plainText: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8.map(Ya).join("\x0a")
    } : null;
  }
  parseExternalHtml(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461470) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461471 = Ga(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461470.html);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461471) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461472 = generateRandomId(6),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461473 = Ka(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461471),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461474 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461473.columns["reduce"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46283) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46283.width, 0),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461475 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461473.rows["reduce"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284 + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285.height ?? 28), 0);
    return {
      elements: [{
        id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461472,
        type: BoardElementType.Table,
        tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461473.id,
        transform: {
          left: Math.round(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461470.point["x"] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461474 / 2),
          top: Math.round(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461470.point["y"] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461475 / 2),
          width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461474,
          height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461475,
          rotation: 0
        }
      }],
      resources: {
        [this.key]: {
          tablesByElementId: {
            [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461472]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461473
          },
          themes: {}
        }
      }
    };
  }
  parseExternalPlainText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461482) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461483 = convertPlainTextTableToHtml(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461482.text);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461483 ? this.parseExternalHtml({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461482,
      html: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461483
    }) : null;
  }
  preparePaste(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461486) {
    if (!Wa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461486.payload)) return null;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461487 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461486.payload,
      var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59 = new Map();
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461486.elementIdMap["forEach"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287) => var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287));
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10 = [],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461488 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461486.elements["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288 => {
        if (!Ua(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46289 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288.id),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46290 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46289 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461487.tablesByElementId[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46289] : undefined;
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46290) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291 = generateRandomId(6),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46290.themeId ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461487.themes[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46290.themeId] : undefined,
          var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292 ? {
            ...Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292),
            id: generateRandomId(6)
          } : undefined,
          var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1 = {
            ...Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46290),
            id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291,
            themeId: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB == null ? undefined : var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.id
          };
        return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10.push({
          table: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1,
          theme: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB
        }), {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288,
          tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291
        };
      });
    return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10.length === 0 ? null : {
      elements: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461488,
      redoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10.map(({
        table: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298,
        theme: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299
      }) => ({
        id: SetBoardTableMutation.id,
        params: {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461486.targetUnitId,
          table: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298,
          theme: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299
        }
      })),
      undoMutations: [...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10].reverse().map(({
        table: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300
      }) => ({
        id: RemoveBoardTableMutation.id,
        params: {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461486.targetUnitId,
          tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300.id
        }
      }))
    };
  }
};
function Ua(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462064) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462064.type === BoardElementType.Table;
}
function Wa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462066) {
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462066 || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462066 != "object" ? false : "tablesByElementId" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462066 && !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462066.tablesByElementId && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462066.tablesByElementId == "object" && "themes" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462066 && !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462066.themes && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462066.themes == "object";
}
function Ga(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462068) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462069 = new DOMParser().parseFromString(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462068, "text/html"),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462070 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462069.querySelectorAll("table");
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462070.length !== 1 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462070[0].remove(), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462069.body["textContent"] ?? "").trim() || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462069.body["querySelector"]("img"))) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462071 = parseHtmlTableClipboard(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462068);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462071.rows["length"] > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462071.columnWidths["length"] > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462071 : null;
}
function Ka(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462076) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB32 = {
    id: generateRandomId(6),
    rev: 0,
    options: {},
    columns: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462076.columnWidths["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461492 => ({
      width: eo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461492 ?? 100, 24, 320)
    })),
    rows: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462076.rows["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461493 => ({
      height: eo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461493.height ?? 28, 20, 180),
      cells: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461493.cells["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301 => qa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301))
    }))
  };
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462076.rows["forEach"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461494, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461495) => {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461494.cells["forEach"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303) => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302) {
        for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302.rowSpan; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 += 1) for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302.colSpan; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D += 1) {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46304;
          if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 === 0 && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D === 0) continue;
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46304 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB32.rows[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461495 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46304.cells[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D];
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.hMerge = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D > 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.vMerge = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 > 0);
        }
      }
    });
  }), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB32;
}
function qa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462078) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462078) return {};
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462079 = Ja(removeClipboardHtmlImages(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462078.html)) ?? Ja(fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F2(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462078.text)),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB34 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462078.borderColor || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462078.borderWidth ? {
      color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462078.borderColor,
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462078.borderWidth,
      dash: SlideTableBorderDashEnum.Solid
    } : undefined;
  return {
    textData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462079 ?? undefined,
    rowSpan: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462078.rowSpan > 1 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462078.rowSpan : undefined,
    columnSpan: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462078.colSpan > 1 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462078.colSpan : undefined,
    style: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462078.backgroundColor || var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB34 ? {
      fill: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462078.backgroundColor ? {
        type: SlideTableFillTypeEnum.Solid,
        color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462078.backgroundColor
      } : undefined,
      borders: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB34 ? {
        top: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB34,
        right: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB34,
        bottom: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB34,
        left: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB34
      } : undefined
    } : undefined
  };
}
function Ja(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462082) {
  try {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462083;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461498 = convertClipboardHtmlToDocumentData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462082, generateRandomId(6));
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462083 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461498.body) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462083.dataStream ? {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461498,
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461498.id || generateRandomId(6),
      body: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461498.body,
      documentStyle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461498.documentStyle ?? {}
    } : null;
  } catch {
    return null;
  }
}
function Ya(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462086) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462086.rows["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461499 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461499.cells["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308.hMerge || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308.vMerge ? "" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308.textData ? Za(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308.textData).replace(/[\t\r\n]+/g, "\x20") : "").join("\x09")).join("\x0a");
}
function Xa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462088) {
  return "<table><colgroup>" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462088.columns["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461500 => '<col style="width: ' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461500.width + 'px">').join("") + "</colgroup><tbody>" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462088.rows["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461501 => {
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB10 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461501.cells["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309 => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309.hMerge || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309.vMerge) return "";
      let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309.rowSpan && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309.rowSpan > 1 ? "rowspan=\x22" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309.rowSpan + "\x22" : "", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309.columnSpan && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309.columnSpan > 1 ? "colspan=\x22" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309.columnSpan + "\x22" : "", serializeSlideTableCellStyleAttribute(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309)].filter(Boolean).join("\x20"),
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB1 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309.textData ? Qa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309.textData) : "";
      return "<td" + (var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB ? "\x20" + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB : "") + ">" + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB1 + "</td>";
    }).join("");
    return "<tr" + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461501.height ? "\x20style=\x22height:\x20" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461501.height + 'px"' : "") + ">" + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB10 + "</tr>";
  }).join("") + "</tbody></table>";
}
function Za(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462090) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462091;
  return (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462091 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462090.body) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462091.dataStream) ?? "").replace(/\r\n$/, "").replace(/\r/g, "\x0a");
}
function Qa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462094) {
  try {
    return convertBodyToHtml(Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462094));
  } catch {
    return "";
  }
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F2(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462096) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462096.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function eo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462098, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462099, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462100) {
  return Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462100, Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462099, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462098));
}
export { Ha };
