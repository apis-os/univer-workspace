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
const Fo = ["bestMatch", "light", "medium", "minimal"],
  Io = {
    bestMatch: "slides-table-ui.editorToolbar.bestMatch",
    light: "slides-table-ui.editorToolbar.light",
    medium: "slides-table-ui.editorToolbar.medium",
    minimal: "slides-table-ui.editorToolbar.minimal"
  },
  Lo = [{
    key: "firstRow",
    labelKey: "slides-table-ui.editorToolbar.headerRow"
  }, {
    key: "lastRow",
    labelKey: "slides-table-ui.editorToolbar.footerRow"
  }, {
    key: "bandRow",
    labelKey: "slides-table-ui.editorToolbar.bandedRows"
  }, {
    key: "firstCol",
    labelKey: "slides-table-ui.editorToolbar.firstColumn"
  }, {
    key: "lastCol",
    labelKey: "slides-table-ui.editorToolbar.lastColumn"
  }, {
    key: "bandCol",
    labelKey: "slides-table-ui.editorToolbar.bandedColumns"
  }];
function Ro(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463798) {
  let {
      currentOptions: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463799,
      currentStyleId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463800,
      direction: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463804 = "ltr",
      palette: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463801,
      showOptions: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463805 = true,
      showThemes: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463806 = true,
      onApplyTheme: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463802,
      onChangeOptions: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463803
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463798,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463807 = useDependency(LocaleService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463808 = buildDefaultSlideTableThemes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463801),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463809 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46800 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463803({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463799,
        [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46800]: !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463799[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46800]
      });
    };
  return jsxs("div", {
    className: "univer-flex\x20univer-max-h-[420px]\x20univer-w-[420px]\x20univer-flex-col\x20univer-text-gray-900\x20dark:!univer-text-gray-100",
    "data-u-comp": "slide-table-theme-gallery",
    dir: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463804,
    style: {
      direction: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463804
    },
    children: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463805 && jsxs("div", {
      className: "univer-sticky univer-top-0 univer-z-10 univer-bg-gray-0 univer-p-2 dark:!univer-bg-gray-900",
      children: [jsxs("div", {
        className: "univer-mb-2 univer-flex univer-items-center univer-justify-between",
        children: [jsx("div", {
          className: "univer-text-sm\x20univer-font-medium",
          children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463807.t("slides-table-ui.editorToolbar.tableTheme")
        }), jsx("div", {
          className: "univer-text-xs\x20univer-text-gray-500\x20dark:!univer-text-gray-400",
          children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463807.t("slides-table-ui.editorToolbar.tableLook")
        })]
      }), jsx("div", {
        className: "univer-grid\x20univer-grid-cols-3\x20univer-gap-1",
        children: Lo.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46802 => jsx(zo, {
          active: !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463799[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46802.key],
          label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463807.t(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46802.labelKey),
          onClick: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463809(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46802.key)
        }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46802.key))
      })]
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463806 && jsx("div", {
      className: "univer-overflow-y-auto univer-p-2 univer-pt-1",
      children: Fo.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46803 => {
        let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10 = DEFAULT_SLIDE_TABLE_THEME_PRESETS.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150.group === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46803);
        return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10.length ? jsxs("div", {
          className: "univer-mb-3 last:univer-mb-0",
          children: [jsx("div", {
            className: "univer-mb-1 univer-text-xs univer-font-medium univer-text-gray-500 dark:!univer-text-gray-400",
            children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463807.t(Io[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46803])
          }), jsx("div", {
            className: "univer-grid univer-grid-cols-4 univer-gap-2",
            children: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10.map((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152) => {
              if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463808[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151.id]) return null;
              let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463799,
                var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A1 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463800 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151.id,
                var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB5 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463807.t(Io[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46803]) + "\x20" + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152 + 1);
              return jsxs("button", {
                type: "button",
                "aria-label": var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB5,
                title: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB5,
                className: clsx("univer-relative\x20univer-rounded-md\x20univer-border\x20univer-border-solid\x20univer-border-transparent\x20univer-bg-transparent\x20univer-p-1\x20univer-transition-colors\x20hover:univer-border-primary-300\x20hover:univer-bg-primary-50\x20dark:hover:!univer-bg-gray-800", {
                  "univer-border-primary-600\x20univer-bg-primary-50\x20univer-shadow-sm\x20dark:!univer-bg-gray-800": var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A1
                }),
                onClick: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463802(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151.id),
                children: [var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A1 && jsx("span", {
                  className: "univer-absolute univer-right-0.5 univer-top-0.5 univer-flex univer-size-4 univer-items-center univer-justify-center univer-rounded-full univer-bg-primary-600 univer-text-gray-0 univer-shadow-sm rtl:univer-left-0.5 rtl:univer-right-auto",
                  children: jsx(CheckMarkIcon, {
                    className: "univer-size-3"
                  })
                }), jsx(Bo, {
                  styleId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151.id,
                  options: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153,
                  direction: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463804,
                  palette: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463801
                })]
              }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151.id);
            })
          })]
        }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46803) : null;
      })
    })]
  });
}
function zo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463822) {
  return jsx("div", {
    "aria-pressed": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463822.active,
    role: "button",
    tabIndex: 0,
    className: clsx("univer-flex univer-cursor-pointer univer-items-center univer-rounded-md univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-px-2 univer-py-1.5 univer-text-xs univer-transition-colors hover:univer-border-primary-300 hover:univer-bg-primary-50 focus-visible:univer-outline focus-visible:univer-outline-2 focus-visible:univer-outline-offset-1 focus-visible:univer-outline-primary-500 dark:!univer-border-gray-700 dark:!univer-bg-gray-900 dark:hover:!univer-bg-gray-800", {
      "univer-border-primary-600\x20univer-bg-primary-50\x20univer-text-primary-600\x20dark:!univer-border-primary-500\x20dark:!univer-bg-gray-800\x20dark:!univer-text-primary-300": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463822.active
    }),
    onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463822.onClick,
    onKeyDown: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46805 => {
      (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46805.key === "Enter" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46805.key === "\x20") && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46805.preventDefault(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463822.onClick());
    },
    children: jsx(Checkbox, {
      checked: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463822.active,
      className: "univer-pointer-events-none univer-w-full univer-min-w-0 univer-text-xs",
      contentClassName: clsx("univer-truncate", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463822.active && "!univer-text-primary-600 dark:!univer-text-primary-300"),
      onChange: () => undefined,
      children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463822.label
    })
  });
}
function Bo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463824) {
  return jsx("span", {
    className: "univer-grid univer-h-11 univer-w-20 univer-grid-cols-5 univer-overflow-hidden univer-rounded-sm",
    children: resolveSlideTableRenderModel({
      id: "theme-preview",
      rev: 0,
      styleId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463824.styleId,
      options: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463824.options,
      columns: Array.from({
        length: 5
      }, () => ({
        width: 1
      })),
      rows: Array.from({
        length: 4
      }, () => ({
        height: 1,
        cells: Array.from({
          length: 5
        }, () => ({}))
      }))
    }, {
      themes: buildDefaultSlideTableThemes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463824.palette)
    }).cells["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46809, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46810, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46811, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46812, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46813, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46814, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46815, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46816, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46817;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46818 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.style["borders"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808.right) ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46809 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.style["borders"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46809.bottom) ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46810 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.style["borders"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46810.top) ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46811 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.style["borders"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46811.left),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46819 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46812 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.style["borders"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46812.top,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46820 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46813 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.style["borders"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46813.right,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46821 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46814 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.style["borders"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46814.bottom,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46822 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46815 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.style["borders"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46815.left,
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A5 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463824.direction === "rtl";
      return jsx("span", {
        style: {
          background: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46816 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.style["fill"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46816.type) === SlideTableFillTypeEnum.None ? "transparent" : ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46817 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.style["fill"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46817.color) ?? "transparent",
          borderTop: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.row === 0 ? "1px solid " + ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46819 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46819.color) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46818 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46818.color) ?? "transparent") : undefined,
          borderRight: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A5 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.column === 0 ? "1px\x20solid\x20" + ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46822 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46822.color) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46818 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46818.color) ?? "transparent") : undefined : "1px solid " + ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46820 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46820.color) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46818 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46818.color) ?? "transparent"),
          borderBottom: "1px solid " + ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46821 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46821.color) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46818 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46818.color) ?? "transparent"),
          borderLeft: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A5 ? "1px solid " + ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46820 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46820.color) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46818 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46818.color) ?? "transparent") : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.column === 0 ? "1px solid " + ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46822 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46822.color) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46818 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46818.color) ?? "transparent") : undefined
        }
      }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.row + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.column);
    })
  });
}
export { Ro as TableThemeGallery };
