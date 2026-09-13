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
import { Vi, Wr } from "./boards-table-ui-boards-table-uiplugin-internal-core-endo.js";
function pi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461661) {
  return resolveSlideTableToolbarActions(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461661, {
    mergeCells: MergeBoardTableCellsCommand.id,
    unmergeCells: UnmergeBoardTableCellsCommand.id,
    setCellStyle: SetBoardTableCellStyleCommand.id,
    setBorderPreset: SetBoardTableBorderPresetCommand.id
  });
}
function mi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461663, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461664) {
  return {
    actions: pi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461664),
    mergeState: resolveSlideTableMergeToolbarAction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461663, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461664),
    values: resolveSlideTableSelectionValues(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461663, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461664 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461664.ranges[0])
  };
}
function hi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461667, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461668) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461667 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461668 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461668.action) === "unmerge" ? {
    commandId: UnmergeBoardTableCellsCommand.id,
    params: {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461667.unitId,
      tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461667.tableId,
      row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461668.range["startRow"],
      column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461668.range["startColumn"]
    }
  } : buildSlideTableMergeToolbarCommand(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461667, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461668, {
    mergeCells: MergeBoardTableCellsCommand.id,
    unmergeCells: UnmergeBoardTableCellsCommand.id
  });
}
function gi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461671, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461672) {
  return buildSlideTableDeleteToolbarCommand(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461671, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461672, {
    deleteRows: DeleteBoardTableRowsCommand.id,
    deleteColumns: DeleteBoardTableColumnsCommand.id
  });
}
const var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A22 = FONT_SIZE_LIST.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461675 => ({
    label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461675.label,
    value: String(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461675.value)
  })),
  vi = "\n univer-flex univer-h-6 univer-min-w-9 univer-items-center univer-justify-center univer-gap-1\n univer-rounded-md univer-border-none univer-bg-transparent univer-px-1.5 univer-text-sm\n univer-text-gray-700 univer-transition-colors\n hover:univer-bg-gray-100\n dark:!univer-text-gray-100\n dark:hover:!univer-bg-gray-700\n",
  yi = "univer-bg-gray-100 univer-text-primary-600 dark:!univer-bg-gray-700 dark:!univer-text-primary-300",
  bi = [0, 1, 2, 3, 4, 6],
  xi = [{
    labelKey: "boards-table-ui.editorToolbar.borderStyleSolid",
    value: SlideTableBorderDashEnum.Solid
  }, {
    labelKey: "boards-table-ui.editorToolbar.borderStyleDash",
    value: SlideTableBorderDashEnum.Dash
  }, {
    labelKey: "boards-table-ui.editorToolbar.borderStyleDot",
    value: SlideTableBorderDashEnum.Dot
  }, {
    labelKey: "boards-table-ui.editorToolbar.borderStyleDashDot",
    value: SlideTableBorderDashEnum.DashDot
  }, {
    labelKey: "boards-table-ui.editorToolbar.noBorder",
    value: SlideTableBorderDashEnum.None
  }],
  Si = [{
    labelKey: "boards-table-ui.editorToolbar.borderPresetAll",
    preset: SlideTableBorderPresetEnum.All
  }, {
    labelKey: "boards-table-ui.editorToolbar.borderPresetInner",
    preset: SlideTableBorderPresetEnum.Inner
  }, {
    labelKey: "boards-table-ui.editorToolbar.borderPresetOuter",
    preset: SlideTableBorderPresetEnum.Outer
  }, {
    labelKey: "boards-table-ui.editorToolbar.borderPresetTop",
    preset: SlideTableBorderPresetEnum.Top
  }, {
    labelKey: "boards-table-ui.editorToolbar.borderPresetBottom",
    preset: SlideTableBorderPresetEnum.Bottom
  }, {
    labelKey: "boards-table-ui.editorToolbar.borderPresetLeft",
    preset: SlideTableBorderPresetEnum.Left
  }, {
    labelKey: "boards-table-ui.editorToolbar.borderPresetRight",
    preset: SlideTableBorderPresetEnum.Right
  }, {
    labelKey: "boards-table-ui.editorToolbar.borderPresetInnerHorizontal",
    preset: SlideTableBorderPresetEnum.InnerHorizontal
  }, {
    labelKey: "boards-table-ui.editorToolbar.borderPresetInnerVertical",
    preset: SlideTableBorderPresetEnum.InnerVertical
  }, {
    labelKey: "boards-table-ui.editorToolbar.noBorder",
    preset: SlideTableBorderPresetEnum.None
  }],
  Ci = {
    [SlideTableBorderPresetEnum.All]: AllBorderIcon,
    [SlideTableBorderPresetEnum.Inner]: InnerBorderDoubleIcon,
    [SlideTableBorderPresetEnum.Outer]: OuterBorderDoubleIcon,
    [SlideTableBorderPresetEnum.Top]: UpBorderDoubleIcon,
    [SlideTableBorderPresetEnum.Bottom]: DownBorderDoubleIcon,
    [SlideTableBorderPresetEnum.Left]: LeftBorderDoubleIcon,
    [SlideTableBorderPresetEnum.Right]: RightBorderDoubleIcon,
    [SlideTableBorderPresetEnum.InnerHorizontal]: HorizontalBorderDoubleIcon,
    [SlideTableBorderPresetEnum.InnerVertical]: VerticalBorderDoubleIcon,
    [SlideTableBorderPresetEnum.None]: NoBorderIcon
  },
  wi = {
    colorChannel1: "#9ca3af"
  },
  Ti = "\x0a\x20\x20\x20\x20univer-rounded-lg\x20univer-bg-gray-0\x20univer-shadow-lg\x20dark:!univer-bg-gray-900\x0a";
function Ei(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461676) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461677 = useDependency(LocaleService);
  return jsx(TableToolbarDropdownInteractionGuard, {
    onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461676.onOpenChange,
    children: ({
      handleOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358,
      markInternalInteraction: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359
    }) => jsx(Dropdown, {
      open: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461676.open,
      onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358,
      overlay: jsx("section", {
        className: clsx(Ti, borderClassName),
        "data-u-comp": "board-table-floating-toolbar-popup",
        onMouseDown: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639 => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359(), keepFloatingToolbarPanelInteraction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639);
        },
        onPointerDown: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641 => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359(), keepFloatingToolbarPanelInteraction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641);
        },
        children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461676.children
      }),
      children: jsx("span", {
        children: jsx(Tooltip, {
          title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461677.t("boards-table-ui.editorToolbar.tableTheme"),
          placement: "bottom",
          children: jsxs(Button, {
            size: "small",
            variant: "ghost",
            "data-toolbar-item": "table-theme",
            "aria-expanded": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461676.open,
            "aria-label": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461677.t("boards-table-ui.editorToolbar.tableTheme"),
            title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461677.t("boards-table-ui.editorToolbar.tableTheme"),
            onMouseDown: keepFloatingToolbarPanelInteraction,
            onPointerDown: keepFloatingToolbarPanelInteraction,
            className: clsx(vi, {
              [yi]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461676.open
            }),
            children: [jsx(PaintIcon, {}), jsx(MoreDownIcon, {
              className: "univer-text-xs"
            })]
          })
        })
      })
    })
  });
}
function Di(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461680) {
  return jsx("div", {
    className: "univer-flex univer-h-7 univer-flex-nowrap univer-items-center univer-gap-1 univer-px-1",
    children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461680.children
  });
}
function Oi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461682) {
  return jsx(Tooltip, {
    title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461682.title,
    placement: "bottom",
    children: jsx("span", {
      children: jsx(Button, {
        size: "small",
        variant: "ghost",
        "data-toolbar-item": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461682["data-toolbar-item"],
        "aria-label": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461682.title,
        title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461682.title,
        className: "univer-flex\x20univer-size-7\x20univer-items-center\x20univer-justify-center\x20univer-rounded-md\x20univer-border-none\x20univer-bg-transparent\x20univer-p-0\x20univer-text-gray-700\x20univer-transition-colors\x20hover:univer-bg-gray-100\x20dark:!univer-text-gray-100\x20dark:hover:!univer-bg-gray-700",
        onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360 => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360.preventDefault(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461682.onClick();
        },
        onMouseDown: keepFloatingToolbarPanelInteraction,
        onPointerDown: keepFloatingToolbarPanelInteraction,
        children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461682.children
      })
    })
  });
}
function ki(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461684) {
  let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461685, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461686] = useState(false),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461687 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461684.open ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461685;
  return jsx(TableToolbarDropdownInteractionGuard, {
    onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461684.onOpenChange ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461686,
    children: ({
      handleOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362,
      markInternalInteraction: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363
    }) => jsx(Dropdown, {
      open: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461687,
      onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362,
      overlay: jsx("div", {
        className: clsx(Ti, "univer-p-3", borderClassName),
        "data-u-comp": "board-table-floating-toolbar-popup",
        onMouseDown: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643 => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363(), keepFloatingToolbarPanelInteraction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643);
        },
        onPointerDown: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645 => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363(), keepFloatingToolbarPanelInteraction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645);
        },
        children: jsx(ColorPicker, {
          value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461684.color,
          onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461684.onChange
        })
      }),
      children: jsx("span", {
        children: jsx(Tooltip, {
          title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461684.title,
          placement: "bottom",
          children: jsxs(Button, {
            size: "small",
            variant: "ghost",
            "data-toolbar-item": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461684["data-toolbar-item"],
            "aria-expanded": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461687,
            "aria-label": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461684.title,
            className: clsx(vi, {
              [yi]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461687
            }),
            onMouseDown: keepFloatingToolbarPanelInteraction,
            onPointerDown: keepFloatingToolbarPanelInteraction,
            children: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461684.children, jsx("span", {
              className: "univer-h-3\x20univer-w-3\x20univer-rounded-sm\x20univer-border\x20univer-border-solid\x20univer-border-gray-300\x20dark:!univer-border-gray-600",
              style: {
                backgroundColor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461684.color
              }
            }), jsx(MoreDownIcon, {
              className: "univer-text-xs"
            })]
          })
        })
      })
    })
  });
}
function Ai(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461692) {
  return jsx(TableToolbarDropdownInteractionGuard, {
    onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461692.onOpenChange,
    children: ({
      handleOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364,
      markInternalInteraction: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365
    }) => jsx(Dropdown, {
      open: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461692.open,
      onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364,
      overlay: jsx("div", {
        className: clsx(Ti, "univer-p-3", borderClassName),
        "data-u-comp": "board-table-floating-toolbar-popup",
        onMouseDown: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647 => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365(), keepFloatingToolbarPanelInteraction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647);
        },
        onPointerDown: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649 => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365(), keepFloatingToolbarPanelInteraction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649);
        },
        children: jsx(ColorPicker, {
          value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461692.color,
          onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461692.onChange
        })
      }),
      children: jsx("span", {
        children: jsx(Tooltip, {
          title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461692.title,
          placement: "bottom",
          children: jsxs(Button, {
            size: "small",
            variant: "ghost",
            "data-toolbar-item": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461692["data-toolbar-item"],
            "aria-expanded": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461692.open,
            "aria-label": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461692.title,
            className: clsx(vi, {
              [yi]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461692.open
            }),
            onMouseDown: keepFloatingToolbarPanelInteraction,
            onPointerDown: keepFloatingToolbarPanelInteraction,
            children: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461692.icon === "font" ? jsx(FontColorDoubleIcon, {
              className: "univer-fill-primary-600",
              extend: {
                colorChannel1: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461692.color
              }
            }) : jsx(PaintBucketDoubleIcon, {
              className: "univer-fill-primary-600",
              extend: {
                colorChannel1: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461692.color
              }
            }), jsx(MoreDownIcon, {
              className: "univer-text-xs"
            })]
          })
        })
      })
    })
  });
}
function ji(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461694) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461695 = useDependency(LocaleService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461696 = xi.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366.value === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461694.dash) ?? xi[0];
  return jsx(TableToolbarDropdownInteractionGuard, {
    onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461694.onOpenChange,
    children: ({
      handleOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367,
      markInternalInteraction: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368
    }) => jsx(Dropdown, {
      open: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461694.open,
      onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367,
      overlay: jsxs("section", {
        className: clsx(Ti, "univer-grid\x20univer-gap-2\x20univer-p-2", borderClassName),
        "data-u-comp": "board-table-floating-toolbar-popup",
        onMouseDown: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651 => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368(), keepFloatingToolbarPanelInteraction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651);
        },
        onPointerDown: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653 => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368(), keepFloatingToolbarPanelInteraction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653);
        },
        children: [jsx("div", {
          className: "univer-grid univer-grid-cols-5 univer-gap-1",
          children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461694.presets["map"](({
            labelKey: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655,
            preset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656
          }) => {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657 = Ci[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656];
            return jsx(Tooltip, {
              title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461695.t(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655),
              placement: "bottom",
              children: jsx(Button, {
                size: "small",
                variant: "ghost",
                "aria-label": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461695.t(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655),
                className: "univer-flex univer-size-7 univer-items-center univer-justify-center univer-rounded univer-border-none univer-bg-transparent univer-p-0 univer-text-primary-600 hover:univer-bg-gray-100 dark:hover:!univer-bg-gray-800",
                onClick: () => {
                  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461694.onSelectPreset(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461694.onOpenChange(false);
                },
                onMouseDown: keepFloatingToolbarPanelInteraction,
                onPointerDown: keepFloatingToolbarPanelInteraction,
                children: jsx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657, {
                  className: "univer-size-4 univer-text-current",
                  extend: wi
                })
              })
            }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656);
          })
        }), jsx(Separator, {}), jsxs("div", {
          className: "univer-flex univer-items-center univer-gap-2",
          children: [jsx(ki, {
            "data-toolbar-item": "border-color",
            title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461695.t("boards-table-ui.editorToolbar.tableBorderColor"),
            color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461694.color,
            onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461694.onChangeColor,
            children: jsx(PaintBucketDoubleIcon, {
              extend: {
                colorChannel1: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461694.color
              }
            })
          }), jsx(Mi, {
            title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461695.t("boards-table-ui.editorToolbar.borderWidth"),
            value: String(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461694.width),
            options: bi.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661 => ({
              label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661 === 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461695.t("boards-table-ui.editorToolbar.noBorder") : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661 + "px",
              value: String(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661),
              icon: jsx("span", {
                className: "univer-block univer-w-5 univer-rounded-full univer-bg-current",
                style: {
                  height: Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661 || 1)
                }
              })
            })),
            onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461694.onChangeWidth(Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662)),
            children: jsxs("span", {
              className: "univer-text-xs",
              children: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461694.width, "px"]
            })
          }), jsx(Mi, {
            title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461695.t("boards-table-ui.editorToolbar.borderStyle"),
            value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461694.dash,
            options: xi.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663 => ({
              label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461695.t(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663.labelKey),
              value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663.value,
              icon: jsx(Ii, {
                dash: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663.value
              })
            })),
            onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461694.onChangeDash,
            children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461696 ? jsx(Ii, {
              dash: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461696.value
            }) : jsx(AllBorderIcon, {})
          })]
        })]
      }),
      children: jsx("span", {
        children: jsx(Tooltip, {
          title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461695.t("boards-table-ui.editorToolbar.border"),
          placement: "bottom",
          children: jsxs(Button, {
            size: "small",
            variant: "ghost",
            "data-toolbar-item": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461694["data-toolbar-item"],
            "aria-expanded": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461694.open,
            "aria-label": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461695.t("boards-table-ui.editorToolbar.border"),
            title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461695.t("boards-table-ui.editorToolbar.border"),
            onMouseDown: keepFloatingToolbarPanelInteraction,
            onPointerDown: keepFloatingToolbarPanelInteraction,
            className: clsx(vi, {
              [yi]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461694.open
            }),
            children: [jsx(AllBorderIcon, {}), jsx(MoreDownIcon, {
              className: "univer-text-xs"
            })]
          })
        })
      })
    })
  });
}
function Mi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461700) {
  let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461701, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461702] = useState(false),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461703 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461700.options["find"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369.value === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461700.value) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461700.options[0];
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461703 ? jsx(TableToolbarDropdownInteractionGuard, {
    onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461702,
    children: ({
      handleOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370,
      markInternalInteraction: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371
    }) => jsx(Dropdown, {
      open: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461701,
      onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370,
      overlay: jsx("div", {
        className: clsx(Ti, "univer-min-w-32 univer-p-1", borderClassName),
        "data-u-comp": "board-table-floating-toolbar-popup",
        onMouseDown: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664 => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371(), keepFloatingToolbarPanelInteraction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664);
        },
        onPointerDown: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666 => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371(), keepFloatingToolbarPanelInteraction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666);
        },
        children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461700.options["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668 => jsxs(Button, {
          size: "small",
          variant: "ghost",
          onClick: () => {
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461700.onChange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668.value), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461702(false);
          },
          onMouseDown: keepFloatingToolbarPanelInteraction,
          onPointerDown: keepFloatingToolbarPanelInteraction,
          className: clsx("univer-flex\x20univer-h-8\x20univer-w-full\x20univer-items-center\x20univer-gap-2\x20univer-rounded-md\x20univer-border-none\x20univer-bg-transparent\x20univer-px-2\x20univer-text-left\x20univer-text-sm\x20univer-text-gray-700\x20univer-transition-colors\x20hover:univer-bg-gray-100\x20dark:!univer-text-gray-100\x20dark:hover:!univer-bg-gray-800", {
            "univer-bg-primary-50\x20univer-text-primary-600\x20dark:!univer-bg-gray-800\x20dark:!univer-text-primary-300": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668.value === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461700.value
          }),
          children: [jsx("span", {
            className: "univer-flex\x20univer-size-4\x20univer-items-center\x20univer-justify-center",
            children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668.icon
          }), jsx("span", {
            className: "univer-flex-1",
            children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668.label
          })]
        }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668.value))
      }),
      children: jsx("span", {
        children: jsx(Tooltip, {
          title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461700.title,
          placement: "bottom",
          children: jsxs(Button, {
            size: "small",
            variant: "ghost",
            "aria-expanded": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461701,
            "aria-label": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461700.title,
            title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461700.title,
            onMouseDown: keepFloatingToolbarPanelInteraction,
            onPointerDown: keepFloatingToolbarPanelInteraction,
            className: clsx(vi, {
              [yi]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461701
            }),
            children: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461700.children ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461703.icon, jsx(MoreDownIcon, {
              className: "univer-text-xs"
            })]
          })
        })
      })
    })
  }) : null;
}
function Ni(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461708) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461709 = useDependency(LocaleService);
  return jsx(TableToolbarDropdownInteractionGuard, {
    onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461708.onOpenChange,
    children: ({
      handleOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372,
      markInternalInteraction: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373
    }) => jsx(Dropdown, {
      open: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461708.open,
      onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372,
      overlay: jsxs("section", {
        className: clsx(Ti, "univer-grid\x20univer-gap-2\x20univer-p-2", borderClassName),
        "data-u-comp": "board-table-floating-toolbar-popup",
        onMouseDown: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669 => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373(), keepFloatingToolbarPanelInteraction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669);
        },
        onPointerDown: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671 => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373(), keepFloatingToolbarPanelInteraction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671);
        },
        children: [jsxs("div", {
          className: "univer-flex\x20univer-items-center\x20univer-gap-2",
          children: [jsx(Pi, {
            active: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461708.values["bold"],
            title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461709.t("boards-table-ui.editorToolbar.bold"),
            onClick: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461708.onToggleStyle({
              bl: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461708.values["bold"] ? BooleanNumber.FALSE : BooleanNumber.TRUE
            }),
            children: jsx(BoldIcon, {})
          }), jsx(Pi, {
            active: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461708.values["italic"],
            title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461709.t("boards-table-ui.editorToolbar.italic"),
            onClick: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461708.onToggleStyle({
              it: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461708.values["italic"] ? BooleanNumber.FALSE : BooleanNumber.TRUE
            }),
            children: jsx(ItalicIcon, {})
          }), jsx(Pi, {
            active: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461708.values["underline"],
            title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461709.t("boards-table-ui.editorToolbar.underline"),
            onClick: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461708.onToggleStyle({
              ul: {
                s: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461708.values["underline"] ? BooleanNumber.FALSE : BooleanNumber.TRUE
              }
            }),
            children: jsx(UnderlineIcon, {})
          }), jsx(Pi, {
            active: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461708.values["strike"],
            title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461709.t("boards-table-ui.editorToolbar.strikethrough"),
            onClick: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461708.onToggleStyle({
              st: {
                s: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461708.values["strike"] ? BooleanNumber.FALSE : BooleanNumber.TRUE
              }
            }),
            children: jsx(StrikethroughIcon, {})
          })]
        }), jsx(Separator, {}), jsxs("div", {
          className: "univer-flex\x20univer-items-center\x20univer-gap-2",
          children: [jsx("span", {
            className: "univer-sr-only",
            children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461709.t("boards-table-ui.editorToolbar.horizontalAlign")
          }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461708.horizontalAlignOptions["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673 => jsx(Pi, {
            active: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461708.values["horizontalAlign"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673.value,
            title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461709.t(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673.labelKey),
            onClick: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461708.onHorizontalAlign(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673.value),
            children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673.icon
          }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673.value))]
        }), jsx(Separator, {}), jsxs("div", {
          className: "univer-flex univer-items-center univer-gap-2",
          children: [jsx("span", {
            className: "univer-sr-only",
            children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461709.t("boards-table-ui.editorToolbar.verticalAlign")
          }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461708.verticalAlignOptions["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674 => jsx(Pi, {
            active: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461708.values["verticalAlign"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674.value,
            title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461709.t(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674.labelKey),
            onClick: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461708.onVerticalAlign(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674.value),
            children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674.icon
          }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674.value))]
        })]
      }),
      children: jsx("span", {
        children: jsx(Tooltip, {
          title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461709.t("boards-table-ui.editorToolbar.textFormat"),
          placement: "bottom",
          children: jsxs(Button, {
            size: "small",
            variant: "ghost",
            "data-toolbar-item": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461708["data-toolbar-item"],
            "aria-expanded": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461708.open,
            "aria-label": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461709.t("boards-table-ui.editorToolbar.textFormat"),
            className: clsx(vi, {
              [yi]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461708.open
            }),
            onMouseDown: keepFloatingToolbarPanelInteraction,
            onPointerDown: keepFloatingToolbarPanelInteraction,
            children: [jsx(TextIcon, {}), jsx(MoreDownIcon, {
              className: "univer-text-xs"
            })]
          })
        })
      })
    })
  });
}
function Pi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461712) {
  return jsx(Tooltip, {
    title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461712.title,
    placement: "bottom",
    children: jsx(Button, {
      size: "small",
      variant: "ghost",
      "aria-label": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461712.title,
      className: clsx("univer-flex univer-size-7 univer-items-center univer-justify-center univer-rounded-md univer-border-none univer-bg-transparent univer-p-0 univer-text-gray-700 univer-transition-colors hover:univer-bg-gray-100 dark:!univer-text-gray-100 dark:hover:!univer-bg-gray-800", {
        "univer-bg-primary-50\x20univer-text-primary-600\x20dark:!univer-bg-gray-800\x20dark:!univer-text-primary-300": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461712.active
      }),
      onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46374 => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46374.preventDefault(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461712.onClick();
      },
      onMouseDown: keepFloatingToolbarPanelInteraction,
      onPointerDown: keepFloatingToolbarPanelInteraction,
      children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461712.children
    })
  });
}
function Fi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461714) {
  return jsx(Tooltip, {
    title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461714.title,
    placement: "bottom",
    children: jsx("span", {
      "data-toolbar-item": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461714["data-toolbar-item"],
      onMouseDown: keepFloatingToolbarPanelInteraction,
      onPointerDown: keepFloatingToolbarPanelInteraction,
      children: jsx(Select, {
        borderless: true,
        className: clsx("!univer-h-6 !univer-min-w-0 !univer-rounded-md !univer-border-transparent !univer-bg-transparent !univer-px-1.5", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461714.widthClassName),
        value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461714.value,
        options: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461714.options,
        onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461714.onChange
      })
    })
  });
}
function Ii(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461716) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461717 = useDependency(LocaleService),
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB12 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461716.dash === "dot" ? "1 3" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461716.dash === "dash" ? "4 3" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461716.dash === "dashDot" ? "4 2 1 2" : undefined;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461716.dash === "none" ? jsx("span", {
    className: "univer-text-xs",
    children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461717.t("boards-table-ui.editorToolbar.none")
  }) : jsx("svg", {
    width: "24",
    height: "12",
    viewBox: "0 0 24 12",
    "aria-hidden": "true",
    children: jsx("line", {
      x1: "2",
      y1: "6",
      x2: "22",
      y2: "6",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeDasharray: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB12
    })
  });
}
const Li = {
  none: "none",
  solid: "solid",
  gradient: "gradient",
  picture: "picture"
};
function Ri(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461720) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461721;
  let {
      children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461722,
      color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461723,
      gradientValue: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461724,
      previewStyle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461725,
      showPreview: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461731 = true,
      tableFill: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461726,
      open: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461727,
      value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461728,
      onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461729,
      onTableFillChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461730
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461720,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461732 = useDependency(LocaleService),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB20 = {
      noFill: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461732.t("boards-table-ui.shapePanel.fill.noFill"),
      solidFill: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461732.t("boards-table-ui.shapePanel.fill.solidFill"),
      gradientFill: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461732.t("boards-table-ui.shapePanel.fill.gradientFill"),
      pictureFill: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461732.t("boards-table-ui.shapePanel.fill.pictureFill"),
      color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461732.t("boards-table-ui.shapePanel.fill.color"),
      transparency: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461732.t("boards-table-ui.shapePanel.fill.transparency"),
      pictureSource: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461732.t("boards-table-ui.shapePanel.fill.picture.source"),
      pictureInsert: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461732.t("boards-table-ui.shapePanel.fill.picture.insert")
    },
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D49 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461726 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461721 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461726.picture) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461721.opacity) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461726 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461726.alpha) ?? 1;
  return jsx(TableToolbarDropdownInteractionGuard, {
    onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461729,
    children: ({
      handleOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376,
      markInternalInteraction: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377
    }) => jsx(Dropdown, {
      overlay: jsx("div", {
        className: clsx("\n univer-rounded-lg univer-bg-gray-0 univer-shadow-lg dark:!univer-bg-gray-900\n", "univer-w-[280px] univer-p-3", borderClassName),
        "data-u-comp": "board-table-floating-toolbar-popup",
        onMouseDown: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675 => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377(), keepFloatingToolbarPanelInteraction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675);
        },
        onPointerDown: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677 => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377(), keepFloatingToolbarPanelInteraction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677);
        },
        children: jsx(FillStyleTabsEditor, {
          compact: true,
          direction: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461732.getDirection(),
          keepColorPickerOpenOnChange: true,
          value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461728,
          typeValues: Li,
          color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461723,
          transparency: Math.round((1 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D49) * 100),
          gradientValue: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461724,
          labels: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB20,
          tabLabels: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB20,
          onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679 => {
            if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679 === "none") var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461730({
              ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461726,
              type: SlideTableFillTypeEnum.None,
              gradient: undefined,
              picture: undefined
            });else {
              if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679 === "solid") var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461730({
                ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461726,
                type: SlideTableFillTypeEnum.Solid,
                color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461723,
                alpha: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D49,
                gradient: undefined,
                picture: undefined
              });else {
                if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679 === "gradient") var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461730(gradientValueToSlideTableFill(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461724));else {
                  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679 === "picture") {
                    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680;
                    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461730({
                      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461726,
                      type: SlideTableFillTypeEnum.Picture,
                      color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461723,
                      alpha: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D49,
                      gradient: undefined,
                      picture: {
                        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461726 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461726.picture),
                        opacity: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D49,
                        mode: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461726 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461726.picture) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680.mode) ?? SlideTablePictureFillModeEnum.Stretch
                      }
                    });
                  }
                }
              }
            }
          },
          onColorChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683 => {
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461730({
              ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461726,
              type: SlideTableFillTypeEnum.Solid,
              color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683,
              alpha: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D49,
              gradient: undefined,
              picture: undefined
            });
          },
          onTransparencyChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685 => {
            let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5 = (100 - Math.max(0, Math.min(100, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685))) / 100;
            if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461728 === "picture") {
              var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686;
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461730({
                ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461726,
                type: SlideTableFillTypeEnum.Picture,
                picture: {
                  ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461726 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461726.picture),
                  opacity: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5,
                  mode: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461726 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461726.picture) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686.mode) ?? SlideTablePictureFillModeEnum.Stretch
                }
              });
              return;
            }
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461730({
              ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461726,
              type: SlideTableFillTypeEnum.Solid,
              color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461723,
              alpha: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5,
              gradient: undefined,
              picture: undefined
            });
          },
          onGradientChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689 => {
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461730(gradientValueToSlideTableFill(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689));
          },
          pictureFillEditor: jsx(zi, {
            fill: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461726,
            labels: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB20,
            onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461730
          })
        })
      }),
      open: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461727,
      onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376,
      children: jsx("span", {
        children: jsx(Tooltip, {
          title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461732.t("boards-table-ui.editorToolbar.tableBackgroundColor"),
          placement: "bottom",
          children: jsxs(Button, {
            size: "small",
            variant: "ghost",
            "aria-expanded": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461727,
            "aria-label": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461732.t("boards-table-ui.editorToolbar.tableBackgroundColor"),
            className: clsx(vi, {
              [yi]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461727
            }),
            "data-toolbar-item": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461720["data-toolbar-item"],
            title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461732.t("boards-table-ui.editorToolbar.tableBackgroundColor"),
            onMouseDown: keepFloatingToolbarPanelInteraction,
            onPointerDown: keepFloatingToolbarPanelInteraction,
            children: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461722, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461731 ? jsx("span", {
              className: "univer-h-3 univer-w-3 univer-rounded-sm univer-border univer-border-solid univer-border-gray-300 dark:!univer-border-gray-600",
              style: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461725
            }) : null, jsx(MoreDownIcon, {
              className: "univer-text-xs"
            })]
          })
        })
      })
    })
  });
}
function zi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461746) {
  let {
      fill: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461747,
      labels: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461748,
      onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461749
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461746,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461750 = useDependency(IImageIoService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461751 = useRef(null),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461752 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461747 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461747.picture,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D51 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461752 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461752.opacity) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461747 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461747.alpha) ?? 1,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461753 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461752 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461752.source && /^(?:data:|https?:)/["test"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461752.source) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461752.source : undefined;
  return jsxs("div", {
    className: "univer-flex univer-flex-col univer-gap-2",
    children: [jsxs("div", {
      className: "univer-flex\x20univer-items-center\x20univer-justify-between\x20univer-gap-3",
      children: [jsx("span", {
        className: "univer-shrink-0 univer-text-xs univer-text-gray-600 dark:!univer-text-gray-200",
        children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461748.pictureSource
      }), jsx("input", {
        ref: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461751,
        type: "file",
        accept: "image/*",
        className: "univer-hidden",
        onChange: async var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378 => {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379;
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378.target["files"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379[0];
          if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380) return;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378.target["value"] = "";
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381 = await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461750.saveImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380);
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381 == null) return;
          let {
            imageSourceType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382,
            source: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383,
            base64Cache: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384
          } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381;
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384) {
            let {
              image: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691
            } = await getImageSize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384);
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461750.addImageSourceCache(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691);
          }
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461749({
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461747,
            type: SlideTableFillTypeEnum.Picture,
            gradient: undefined,
            picture: {
              ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461752,
              source: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383,
              sourceType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382,
              opacity: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D51,
              mode: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461752 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461752.mode) ?? SlideTablePictureFillModeEnum.Stretch
            }
          });
        }
      }), jsx(Button, {
        size: "small",
        variant: "ghost",
        onClick: () => {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392;
          return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461751.current) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392.click();
        },
        className: "univer-rounded\x20univer-px-2\x20univer-py-1\x20univer-text-xs\x20univer-transition-colors\x20hover:univer-bg-gray-100\x20dark:hover:!univer-bg-gray-700",
        children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461748.pictureInsert
      })]
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461753 && jsx("img", {
      src: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461753,
      alt: "",
      className: "univer-h-14 univer-w-full univer-rounded univer-object-cover"
    }), jsx(Bi, {
      label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461748.transparency,
      opacity: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D51,
      onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461749({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461747,
        picture: {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461752,
          opacity: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394,
          mode: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461752 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461752.mode) ?? SlideTablePictureFillModeEnum.Stretch
        }
      })
    })]
  });
}
function Bi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461762) {
  return jsxs("div", {
    className: "univer-flex\x20univer-items-center\x20univer-justify-between\x20univer-gap-3",
    children: [jsx("span", {
      className: "univer-shrink-0 univer-text-xs univer-text-gray-600 dark:!univer-text-gray-200",
      children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461762.label
    }), jsx("div", {
      className: "univer-w-20",
      children: jsx(InputNumber, {
        className: "univer-w-full",
        value: Math.round((1 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461762.opacity) * 100),
        min: 0,
        max: 100,
        step: 10,
        formatter: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395 + "%",
        parser: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396 => (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396.replace("%", "")) || "",
        onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46397 => {
          let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14 = Math.max(0, Math.min(100, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46397 ?? 0));
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461762.onChange((100 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14) / 100);
        }
      })
    })]
  });
}
function Hi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461764, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461765, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461766) {
  if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461764 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461764.unitId) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461764.subUnitId || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461764.elementId || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461764.tableId) return null;
  let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A12 = !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461765 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461765.unitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461764.unitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461765.subUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461764.subUnitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461765.elementId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461764.elementId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461765.tableId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461764.tableId;
  return var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A12 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461765.kind === "text" ? null : var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A12 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461765.ranges["length"] ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461765 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461766 ? {
    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461764.unitId,
    subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461764.subUnitId,
    elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461764.elementId,
    tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461764.tableId,
    kind: "table",
    ranges: [{
      startRow: 0,
      endRow: Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461766.rows["length"] - 1),
      startColumn: 0,
      endColumn: Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461766.columns["length"] - 1)
    }]
  } : null;
}
function Ui(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461770) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461771;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461772 = useDependency(ICommandService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461773 = useDependency(LocaleService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461774 = useObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461773.direction$, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461773.getDirection()),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461775 = useDependency(SlideTableSelectionService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461776 = useDependency(SlideTableResourceService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461777 = useDependency(ThemeService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461778 = useDependency(SlideTableModelService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461779 = useObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461775.selection$);
  useObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461778.tableChange$);
  let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461780, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461781] = useState({
      selectionKey: null,
      value: null
    }),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461782 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461771 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461770.popup) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461771.extraProps) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461770,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461783 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461782.unitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461782.tableId ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461776.getTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461782.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461782.tableId) : null,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461784 = Hi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461782, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461779, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461783),
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB14 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461784 ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461784.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461784.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461784.elementId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461784.tableId, ...Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461784.ranges[0] ?? {})].join("|") : null,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461785 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461780.selectionKey === var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB14 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461780.value : null,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461786 = mi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461783, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461784),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461786.values,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461788 = useCallback(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46399 => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461784) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461784.ranges[0],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461776.getTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461784.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461784.tableId);
      !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461772.executeCommand(UpdateBoardTableCommand.id, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461784.unitId,
        tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461784.tableId,
        patch: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46399(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400)
      });
    }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461772, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461776, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461784]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461789 = useCallback(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461784 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461772.executeCommand(UpdateBoardTableCommand.id, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461784.unitId,
        tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461784.tableId,
        patch: {
          styleId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405
        }
      });
    }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461772, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461784]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461790 = useCallback(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461784 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461772.executeCommand(UpdateBoardTableCommand.id, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461784.unitId,
        tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461784.tableId,
        patch: {
          options: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407
        }
      });
    }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461772, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461784]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791 = useCallback((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46410) => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461781({
        selectionKey: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB14,
        value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46410 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409 : null
      });
    }, [var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB14]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461792 = useMemo(() => resolveSlideTableThemePalette(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461777.getColorFromTheme(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692)), [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461777]);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461784 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461783) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461793 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461786.mergeState,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461794 = gi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461783, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461784),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461795 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461794 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461794.kind) === "row" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461773.t("boards-table-ui.contextMenu.deleteRow") : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461794 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461794.kind) === "column" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461773.t("boards-table-ui.contextMenu.deleteColumn") : null,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461796 = () => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461794 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461772.executeCommand(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461794.commandId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461794.params);
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461797 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461793 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461793.action) === "unmerge" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461773.t("boards-table-ui.editorToolbar.unmergeCells") : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461793 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461793.action) === "merge" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461773.t("boards-table-ui.editorToolbar.mergeCells") : null,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461798 = () => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413 = hi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461784, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461793 ?? null);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461772.executeCommand(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413.commandId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413.params);
    },
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A16 = [{
      labelKey: "boards-table-ui.editorToolbar.alignLeft",
      value: HorizontalAlign.LEFT,
      icon: jsx(LeftJustifyingIcon, {})
    }, {
      labelKey: "boards-table-ui.editorToolbar.alignCenter",
      value: HorizontalAlign.CENTER,
      icon: jsx(HorizontallyIcon, {})
    }, {
      labelKey: "boards-table-ui.editorToolbar.alignRight",
      value: HorizontalAlign.RIGHT,
      icon: jsx(RightJustifyingIcon, {})
    }, {
      labelKey: "boards-table-ui.editorToolbar.alignJustify",
      value: HorizontalAlign.JUSTIFIED,
      icon: jsx(AlignTextBothIcon, {})
    }],
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A17 = [{
      labelKey: "boards-table-ui.editorToolbar.alignTop",
      value: VerticalAlign.TOP,
      icon: jsx(AlignTopIcon, {})
    }, {
      labelKey: "boards-table-ui.editorToolbar.alignMiddle",
      value: VerticalAlign.MIDDLE,
      icon: jsx(VerticalCenterIcon, {})
    }, {
      labelKey: "boards-table-ui.editorToolbar.alignBottom",
      value: VerticalAlign.BOTTOM,
      icon: jsx(AlignBottomIcon, {})
    }];
  return jsxs("div", {
    className: clsx("univer-box-border univer-flex univer-max-w-[760px] univer-flex-nowrap univer-items-center univer-rounded univer-bg-gray-0 univer-px-1 univer-py-1 univer-shadow-sm dark:!univer-border-gray-700 dark:!univer-bg-gray-900", borderClassName),
    "data-u-comp": "board-table-floating-toolbar",
    dir: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461774,
    role: "toolbar",
    style: {
      direction: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461774
    },
    onMouseDownCapture: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461775.markTableInternalInteraction(),
    onPointerDownCapture: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461775.markTableInternalInteraction(),
    onMouseDown: keepFloatingToolbarPanelInteraction,
    onPointerDown: keepFloatingToolbarPanelInteraction,
    children: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461794 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461795 ? jsxs(Fragment, {
      children: [jsx(Di, {
        children: jsx(Oi, {
          "data-toolbar-item": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461794.kind === "row" ? "delete-row" : "delete-column",
          title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461795,
          onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461796,
          children: jsx(DeleteIcon, {})
        })
      }), jsx(Separator, {
        orientation: "vertical"
      })]
    }) : null, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461797 ? jsxs(Fragment, {
      children: [jsx(Di, {
        children: jsx(Oi, {
          "data-toolbar-item": "merge-cells",
          title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461797,
          onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461798,
          children: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461793 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461793.action) === "unmerge" ? jsx(CancelMergeIcon, {}) : jsx(MergeAllIcon, {})
        })
      }), jsx(Separator, {
        orientation: "vertical"
      })]
    }) : null, jsxs(Di, {
      children: [jsx(Ri, {
        "data-toolbar-item": "background",
        color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787.backgroundColor,
        value: getSlideTableFillType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787.backgroundFill),
        gradientValue: getSlideTableGradientValue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787.backgroundFill, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787.backgroundColor),
        previewStyle: getSlideTableFillPreviewStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787.backgroundFill, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787.backgroundColor),
        showPreview: false,
        tableFill: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787.backgroundFill,
        open: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461785 === "background",
        onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791("background", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415),
        onTableFillChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461788((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694) => buildSlideTableBackgroundFillPatch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46416)),
        children: jsx(ShapeBackgroundColorDoubleIcon, {
          extend: {
            colorChannel1: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787.backgroundColor
          }
        })
      }), jsx(ji, {
        "data-toolbar-item": "border",
        color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787.borderColor,
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787.borderWidth,
        dash: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787.borderDash,
        presets: Si,
        open: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461785 === "border",
        onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791("border", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417),
        onSelectPreset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461788((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696) => buildSlideTableBorderPresetPatch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418)),
        onChangeColor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461788((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698) => buildSlideTableBorderStylePatch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698, {
          color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419
        })),
        onChangeWidth: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46420 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461788((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100) => buildSlideTableBorderStylePatch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100, {
          width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46420,
          dash: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46420 === 0 ? SlideTableBorderDashEnum.None : undefined
        })),
        onChangeDash: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461788((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102) => buildSlideTableBorderStylePatch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102, {
          dash: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421
        }))
      })]
    }), jsx(Separator, {
      orientation: "vertical"
    }), jsxs(Di, {
      children: [jsx("span", {
        "data-toolbar-item": "font-family",
        onMouseDown: keepFloatingToolbarPanelInteraction,
        onPointerDown: keepFloatingToolbarPanelInteraction,
        children: jsx(FontFamilyDropdown, {
          ariaLabel: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461773.t("boards-table-ui.editorToolbar.fontFamily"),
          className: "univer-w-28",
          inputClassName: "univer-w-auto",
          title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787.fontFamily,
          value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787.fontFamily,
          onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461788((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104) => buildSlideTableFontFamilyPatch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422)),
          onMouseDown: keepFloatingToolbarPanelInteraction,
          onPointerDown: keepFloatingToolbarPanelInteraction
        })
      }), jsx(Fi, {
        "data-toolbar-item": "font-size",
        title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461773.t("boards-table-ui.editorToolbar.fontSize"),
        widthClassName: "univer-w-14",
        value: String(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787.fontSize),
        options: ensureOption(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A22, String(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787.fontSize)),
        onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46423 => {
          let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16 = Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46423);
          Number.isNaN(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461788((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106) => buildSlideTableFontSizePatch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16));
        }
      }), jsx(Ni, {
        "data-toolbar-item": "text-format",
        open: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461785 === "textFormat",
        values: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787,
        horizontalAlignOptions: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A16,
        verticalAlignOptions: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A17,
        onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791("textFormat", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46425),
        onToggleStyle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461788((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108) => buildSlideTableTextStylePatch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426)),
        onHorizontalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461788((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110) => buildSlideTableTextAlignPatch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110, {
          axis: "horizontal",
          value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427
        })),
        onVerticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461788((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112) => buildSlideTableTextAlignPatch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112, {
          axis: "vertical",
          value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46428
        }))
      })]
    }), jsx(Separator, {
      orientation: "vertical"
    }), jsxs(Di, {
      children: [jsx(Ai, {
        "data-toolbar-item": "text-color",
        title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461773.t("boards-table-ui.editorToolbar.textColor"),
        color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787.textColor,
        icon: "font",
        open: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461785 === "textColor",
        onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46429 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791("textColor", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46429),
        onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461788((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114) => buildSlideTableTextFillPatch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114, {
          type: "solid",
          color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430,
          opacity: 1
        }))
      }), jsx(Ai, {
        "data-toolbar-item": "text-background",
        title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461773.t("boards-table-ui.editorToolbar.textBackgroundColor"),
        color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787.textBackgroundColor,
        icon: "bucket",
        open: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461785 === "textBackground",
        onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791("textBackground", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431),
        onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461788((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116) => buildSlideTableTextStylePatch(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116, {
          bg: {
            rgb: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432
          }
        }))
      })]
    }), jsx(Separator, {
      orientation: "vertical"
    }), jsx(Di, {
      children: jsx(Ei, {
        open: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461785 === "theme",
        onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791("theme", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433),
        children: jsx(TableThemeGallery, {
          currentStyleId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461783.styleId,
          currentOptions: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461783.options ?? {},
          direction: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461774,
          palette: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461792,
          onApplyTheme: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434 => {
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461789(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791("theme", false);
          },
          onChangeOptions: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461790
        })
      })
    }), jsx(Separator, {
      orientation: "vertical"
    }), jsx(Di, {
      children: jsx(Oi, {
        "data-toolbar-item": "delete-table",
        title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461773.t("boards-table-ui.contextMenu.deleteTable"),
        onClick: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461772.executeCommand(Wr.id),
        children: jsx(DeleteIcon, {})
      })
    })]
  });
}
let Sa = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461430) {
    super(), this._componentManager = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461430, this._registerComponents();
  }
  _registerComponents() {
    this.disposeWithMe(this._componentManager["register"](Vi, Ui));
  }
};
export { Sa };
