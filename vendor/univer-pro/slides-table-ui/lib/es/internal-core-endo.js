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
import { J } from "./slides-table-ui-slide-table-selection-context.js";
import { Ac, Vs, sa, sl, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464933 } from "./slides-table-ui-slides-table-uiplugin.js";
import { vr } from "./slides-table-ui-plugin-config-key.js";
import { qa } from "./slides-table-ui-slide-table-toolbar-actions.js";
import { eo } from "./slides-table-ui-slide-table-merge-toolbar-action.js";
import { Oa } from "./slides-table-ui-slide-table-selection-values.js";
import { lo } from "./slides-table-ui-table-toolbar-dropdown-interaction-guard.js";
import { Va } from "./slides-table-ui-gradient-value-to-slide-table-fill.js";
import { G } from "./slides-table-ui-slide-table-selection.js";
import { Ro } from "./slides-table-ui-table-theme-gallery.js";
import { Ia } from "./slides-table-ui-slide-table-fill-type.js";
import { Ba } from "./slides-table-ui-slide-table-gradient-value.js";
import { Ha } from "./slides-table-ui-slide-table-fill-preview-style.js";
import { Pr } from "./slides-table-ui-slide-table-background-fill-patch.js";
import { Rr } from "./slides-table-ui-slide-table-border-preset-patch.js";
import { Lr } from "./slides-table-ui-slide-table-border-style-patch.js";
import { zr } from "./slides-table-ui-slide-table-font-family-patch.js";
import { Ga } from "./slides-table-ui-option.js";
import { Br } from "./slides-table-ui-slide-table-font-size-patch.js";
import { ti } from "./slides-table-ui-slide-table-text-style-patch.js";
import { Ir } from "./slides-table-ui-slide-table-text-fill-patch.js";
import { kr } from "./slides-table-ui-slide-table-text-align-patch.js";
import { qs } from "./slides-table-ui-slide-table-cell-document-data.js";
var br = "@univerjs-pro/slides-table-ui",
  xr = "1.0.0-insiders.20260907-70fc579";
function Sr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463003) {
  "@babel/helpers - typeof";

  return Sr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46533) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46533;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46535) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46535 && typeof Symbol == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46535.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46535 !== Symbol.prototype ? "symbol" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46535;
  }, Sr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463003);
}
function Cr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463005, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463006) {
  if (Sr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463005) != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463005) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463005;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463007 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463005[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463007 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463008 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463007.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463005, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463006 || "default");
    if (Sr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463008) != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463008;
    throw TypeError("@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.");
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463006 === "string" ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463005);
}
function wr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463013) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463014 = Cr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463013, "string");
  return Sr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463014) == "symbol" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463014 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463014 + "";
}
function W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463017, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463018, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463019) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463018 = wr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463018)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463017 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463017, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463018, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463019,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463017[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463018] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463019, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463017;
}
function Ar(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463073, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463074, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463075) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463076 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463073.rows);
  return iterateSelectedSlideTableCells(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463076, normalizeSlideTableCellRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463074), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46592, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46593, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46594) => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46595;
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB37 = "SLIDE_TABLE_CELL_" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463073.id + "_" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46593 + "_" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46594,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46596 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46592.textData ?? ri(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB37)),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46596.body ?? {
        dataStream: "\x0d\x0a",
        paragraphs: [ii()],
        textRuns: []
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597 = generateRandomId(6);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46592.textData = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46596,
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46596.id ?? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB37,
      body: {
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4,
        paragraphs: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46595 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4.paragraphs) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46595.length ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4.paragraphs : [ii()]).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672 => {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674;
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463075 === null) {
            let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1 = {
              ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672
            };
            return delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1.bullet, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1;
          }
          return {
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672,
            bullet: {
              nestingLevel: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672.bullet) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673.nestingLevel) ?? 0,
              textStyle: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672.bullet) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674.listType) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463075 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672.bullet["textStyle"] : {
                fs: 20
              },
              listId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597,
              listType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463075
            }
          };
        })
      }
    };
  }), {
    rows: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463076
  };
}
function jr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463081, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463082, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463083) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463081 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463082) return {
    active: false,
    mixed: false
  };
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463084 = normalizeSlideTableCellRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463082),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A33 = [];
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46604 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463084.startRow; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46604 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463084.endRow; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46604 += 1) for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463084.startColumn; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463084.endColumn; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678 += 1) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463085;
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463085 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463081.rows[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46604]) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463085 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463085.cells[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678]) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463085 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463085.textData) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463085 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463085.body) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463085.paragraphs) ?? [];
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A33.push(...(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.length ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467.bullet) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468.listType;
      return Mr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469 : undefined;
    }) : [undefined]));
  }
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A34 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A33.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46605 => !!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46605 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46605.startsWith(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463083))),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A21 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A33.length > 0 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A34.length === var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A33.length;
  return {
    active: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A21,
    mixed: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A34.length > 0 && !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A21,
    value: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A21 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A34.every(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46606 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46606 === var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A34[0]) ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A34[0] : undefined
  };
}
function Mr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463091) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463091 !== undefined && Object.values(PresetListType).some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46607 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46607 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463091);
}
function Vr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463149, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463150) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463151 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463149);
  return !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463151 && isSlideTableMultiCellRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463151.range) && (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463150 || !Hr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463150, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463149));
}
function Hr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463155, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463156) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463157 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463156);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463157 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463155) return false;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463158 = normalizeSlideTableCellRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463157.range);
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463158.startRow; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463158.endRow; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622 += 1) for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463158.startColumn; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463158.endColumn; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680 += 1) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619 = findSlideTableMergeRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463155, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619 && isSlideTableMultiCellRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619)) return true;
  }
  return false;
}
function Ur(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463163, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463164) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463165 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463164);
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463165 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463163 ? false : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463163.rows["length"] > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463165.range["endRow"] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463165.range["startRow"] + 1;
}
function Wr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463169, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463170) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463171 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463170);
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463171 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463169 ? false : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463169.columns["length"] > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463171.range["endColumn"] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463171.range["startColumn"] + 1;
}
function Gr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463175, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463176) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463177 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463176);
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463177 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463175 ? false : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463177.range["endRow"] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463177.range["startRow"] + 1 > 1;
}
function Kr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463181, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463182) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463183 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463182);
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463183 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463181 ? false : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463183.range["endColumn"] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463183.range["startColumn"] + 1 > 1;
}
function ri(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463267) {
  return {
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463267,
    body: {
      dataStream: "\x0d\x0a",
      paragraphs: [ii()],
      textRuns: []
    },
    documentStyle: {}
  };
}
function ii() {
  return {
    startIndex: 0,
    paragraphId: createParagraphId(new Set())
  };
}
function ia(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463377) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463377.isContentEditable || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463377.getAttribute("contenteditable") === "true";
}
function Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463379, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463380) {
  return function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46702, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46703) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463380(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46702, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46703, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463379);
  };
}
function oa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463383, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463384, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463385, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463386) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463387 = arguments.length,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463388 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463387 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463384 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463386 === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463386 = Object.getOwnPropertyDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463384, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463385) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463386,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463389;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463388 = Reflect.decorate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463383, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463384, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463385, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463386);else {
    for (var var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D157 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463383.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D157 >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D157--) (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463389 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463383[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D157]) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463388 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463387 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463389(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463388) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463387 > 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463389(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463384, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463385, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463388) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463389(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463384, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463385)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463388);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463387 > 3 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463388 && Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463384, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463385, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463388), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463388;
}
sa = oa([Y(0, IContextService)], sa);
function fa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463409, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463410, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463411) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D159 = Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463410),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D160 = Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463411),
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB77 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463409.row * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D160 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463409.column,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D161 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D159 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D160 - 1,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D162 = Math.min(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D161, Math.max(0, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB77));
  return {
    row: Math.floor(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D162 / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D160),
    column: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D162 % var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D160
  };
}
let Sa = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46715) {
    super(), W(this, "_enabled$", undefined), W(this, "_fallbackVisible$", new BehaviorSubject(false)), W(this, "_fallbackVisibleSources", new Set()), W(this, "enabled$", undefined), W(this, "visible$", undefined);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46716 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46715.getConfig(vr);
    this._enabled$ = new BehaviorSubject((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46716 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46716.floatingToolbar) ?? false), this.enabled$ = this._enabled$["asObservable"](), this.visible$ = combineLatest([this._enabled$, this._fallbackVisible$]).pipe(map(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690]) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690));
  }
  getEnabled() {
    return this._enabled$["getValue"]();
  }
  setEnabled(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46719) {
    this.getEnabled() !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46719 && this._enabled$["next"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46719);
  }
  getVisible() {
    return this.getEnabled() || this._fallbackVisible$["getValue"]();
  }
  setFallbackVisible(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46721, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46722 = "default") {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46721 ? this._fallbackVisibleSources["add"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46722) : this._fallbackVisibleSources["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46722);
    let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A3 = this._fallbackVisibleSources["size"] > 0;
    this._fallbackVisible$["getValue"]() !== var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A3 && this._fallbackVisible$["next"](var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A3);
  }
  toggle() {
    this.setEnabled(!this.getEnabled());
  }
  dispose() {
    this._enabled$["complete"](), this._fallbackVisibleSources["clear"](), this._fallbackVisible$["complete"](), super.dispose();
  }
};
Sa = oa([Y(0, IConfigService)], Sa);
function io(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463625) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463625 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463625.ranges[0]) ?? null;
}
function ao(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463627) {
  return qa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463627, {
    mergeCells: MergeSlideTableCellsCommand.id,
    unmergeCells: UnmergeSlideTableCellsCommand.id,
    setCellStyle: UpdateSlideTableCommand.id,
    setBorderPreset: UpdateSlideTableCommand.id
  });
}
function oo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463629, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463630) {
  return {
    actions: ao(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463630),
    mergeState: eo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463629, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463630),
    values: Oa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463629, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463630 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463630.ranges[0])
  };
}
const uo = {
  none: "none",
  solid: "solid",
  gradient: "gradient",
  picture: "picture"
};
function fo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463651) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463652, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463653;
  let {
      children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463654,
      color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463655,
      gradientValue: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463656,
      previewStyle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463657,
      showPreview: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463665 = true,
      tableFill: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463658,
      textFill: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463659,
      open: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463660,
      value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463661,
      onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463662,
      onTableFillChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463663,
      onTextFillChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463664
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463651,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463666 = useDependency(LocaleService),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB56 = {
      noFill: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463666.t("slides-table-ui.shapePanel.fill.noFill"),
      solidFill: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463666.t("slides-table-ui.shapePanel.fill.solidFill"),
      gradientFill: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463666.t("slides-table-ui.shapePanel.fill.gradientFill"),
      pictureFill: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463666.t("slides-table-ui.shapePanel.fill.pictureFill"),
      color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463666.t("slides-table-ui.shapePanel.fill.color"),
      transparency: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463666.t("slides-table-ui.shapePanel.fill.transparency"),
      pictureSource: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463666.t("slides-table-ui.shapePanel.fill.picture.source"),
      pictureInsert: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463666.t("slides-table-ui.shapePanel.fill.picture.insert")
    },
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D179 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463658 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463652 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463658.picture) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463652.opacity) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463658 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463658.alpha) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463659 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463653 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463659.picture) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463653.opacity) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463659 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463659.opacity) ?? 1,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463667 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46739 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463663 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463663(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46739),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463668 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46740 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463664 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463664(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46740);
  return jsx(lo, {
    onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463662,
    children: ({
      handleOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46741,
      markInternalInteraction: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46742
    }) => jsx(Dropdown, {
      overlay: jsx("div", {
        className: clsx("\n univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-shadow-lg\n dark:!univer-border-gray-700 dark:!univer-bg-gray-900\n", "univer-w-[280px]\x20univer-p-3", borderClassName),
        "data-u-comp": "slide-table-floating-toolbar-popup",
        onMouseDown: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693 => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46742(), keepFloatingToolbarPanelInteraction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693);
        },
        onPointerDown: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695 => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46742(), keepFloatingToolbarPanelInteraction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695);
        },
        children: jsx(FillStyleTabsEditor, {
          compact: true,
          direction: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463666.getDirection(),
          keepColorPickerOpenOnChange: true,
          value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463661,
          typeValues: uo,
          color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463655,
          transparency: Math.round((1 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D179) * 100),
          gradientValue: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463656,
          labels: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB56,
          tabLabels: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB56,
          onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697 => {
            if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697 === "none") var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463667({
              ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463658,
              type: SlideTableFillTypeEnum.None,
              gradient: undefined,
              picture: undefined
            }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463668({
              ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463659,
              type: "none"
            });else {
              if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697 === "solid") var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463667({
                ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463658,
                type: SlideTableFillTypeEnum.Solid,
                color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463655,
                alpha: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D179,
                gradient: undefined,
                picture: undefined
              }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463668({
                ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463659,
                type: "solid",
                color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463655,
                opacity: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D179
              });else {
                if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697 === "gradient") var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463667(Va(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463656)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463668(go(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463656));else {
                  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697 === "picture") {
                    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699;
                    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463667({
                      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463658,
                      type: SlideTableFillTypeEnum.Picture,
                      color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463655,
                      alpha: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D179,
                      gradient: undefined,
                      picture: {
                        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463658 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463658.picture),
                        opacity: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D179,
                        mode: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463658 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463658.picture) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698.mode) ?? SlideTablePictureFillModeEnum.Stretch
                      }
                    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463668({
                      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463659,
                      type: "picture",
                      color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463655,
                      opacity: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D179,
                      picture: {
                        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463659 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463659.picture),
                        opacity: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D179,
                        mode: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463659 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463659.picture) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699.mode) ?? SlideTablePictureFillModeEnum.Stretch
                      }
                    });
                  }
                }
              }
            }
          },
          onColorChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103 => {
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463667({
              ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463658,
              type: SlideTableFillTypeEnum.Solid,
              color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103,
              alpha: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D179,
              gradient: undefined,
              picture: undefined
            }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463668({
              ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463659,
              type: "solid",
              color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103,
              opacity: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D179
            });
          },
          onTransparencyChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105 => {
            let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8 = (100 - Math.max(0, Math.min(100, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105))) / 100;
            if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463661 === "picture") {
              var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107;
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463667({
                ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463658,
                type: SlideTableFillTypeEnum.Picture,
                picture: {
                  ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463658 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463658.picture),
                  opacity: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8,
                  mode: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463658 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463658.picture) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106.mode) ?? SlideTablePictureFillModeEnum.Stretch
                }
              }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463668({
                ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463659,
                type: "picture",
                picture: {
                  ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463659 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463659.picture),
                  opacity: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8,
                  mode: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463659 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463659.picture) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107.mode) ?? "stretch"
                }
              });
              return;
            }
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463667({
              ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463658,
              type: SlideTableFillTypeEnum.Solid,
              color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463655,
              alpha: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8,
              gradient: undefined,
              picture: undefined
            }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463668({
              ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463659,
              type: "solid",
              color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463655,
              opacity: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8
            });
          },
          onGradientChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111 => {
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463667(Va(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463668(go(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111));
          },
          pictureFillEditor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463663 ? jsx(po, {
            fill: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463658,
            labels: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB56,
            onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463667
          }) : jsx(mo, {
            fallbackColor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463655,
            fill: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463659,
            labels: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB56,
            onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463668
          })
        })
      }),
      open: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463660,
      onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46741,
      children: jsx("span", {
        children: jsx(Tooltip, {
          title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463651.label ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463666.t("slides-table-ui.editorToolbar.tableBackgroundColor"),
          placement: "bottom",
          children: jsxs(Button, {
            size: "small",
            variant: "ghost",
            "aria-expanded": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463660,
            "aria-label": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463651.label ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463666.t("slides-table-ui.editorToolbar.tableBackgroundColor"),
            className: clsx({
              "univer-bg-gray-100\x20univer-text-primary-600\x20dark:!univer-bg-gray-700\x20dark:!univer-text-primary-300": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463660
            }),
            title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463651.label ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463666.t("slides-table-ui.editorToolbar.tableBackgroundColor"),
            type: "button",
            onMouseDown: keepFloatingToolbarPanelInteraction,
            onPointerDown: keepFloatingToolbarPanelInteraction,
            children: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463651.mixed ? jsx("span", {
              "aria-hidden": "true",
              children: "—"
            }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463654, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463651.label && jsx("span", {
              className: "univer-min-w-0 univer-flex-1 univer-truncate univer-text-left rtl:univer-text-right",
              children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463651.label
            }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463665 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463651.mixed ? jsx("span", {
              className: "univer-h-3 univer-w-3 univer-rounded-sm univer-border univer-border-solid univer-border-gray-300 dark:!univer-border-gray-600",
              style: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463657
            }) : null, jsx(MoreDownIcon, {
              className: "univer-text-xs"
            })]
          })
        })
      })
    })
  });
}
function po(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463687) {
  let {
      fill: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463688,
      labels: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463689,
      onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463690
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463687,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463691 = useDependency(IImageIoService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463692 = useRef(null),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463693 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463688 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463688.picture,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D181 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463693 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463693.opacity) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463688 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463688.alpha) ?? 1,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463694 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463693 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463693.source && /^(?:data:|https?:)/["test"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463693.source) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463693.source : undefined;
  return jsxs("div", {
    className: "univer-flex univer-flex-col univer-gap-2",
    children: [jsxs("div", {
      className: "univer-flex univer-items-center univer-justify-between univer-gap-3",
      children: [jsx("span", {
        className: "univer-shrink-0 univer-text-xs univer-text-gray-600 dark:!univer-text-gray-200",
        children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463689.pictureSource
      }), jsx("input", {
        ref: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463692,
        type: "file",
        accept: "image/*",
        className: "univer-hidden",
        onChange: async var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46743 => {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46744;
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46744 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46743.target["files"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46744[0];
          if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745) return;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46743.target["value"] = "";
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46746 = await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463691.saveImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745);
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46746 == null) return;
          let {
            imageSourceType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46747,
            source: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46748,
            base64Cache: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46749
          } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46746;
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46749) {
            let {
              image: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113
            } = await getImageSize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46749);
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463691.addImageSourceCache(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46748, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46747, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113);
          }
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463690({
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463688,
            type: SlideTableFillTypeEnum.Picture,
            gradient: undefined,
            picture: {
              ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463693,
              source: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46748,
              sourceType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46747,
              opacity: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D181,
              mode: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463693 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463693.mode) ?? SlideTablePictureFillModeEnum.Stretch
            }
          });
        }
      }), jsx(Button, {
        size: "small",
        type: "button",
        onClick: () => {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46757;
          return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46757 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463692.current) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46757.click();
        },
        children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463689.pictureInsert
      })]
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463694 && jsx("img", {
      src: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463694,
      alt: "",
      className: "univer-h-14\x20univer-w-full\x20univer-rounded\x20univer-object-cover"
    }), jsx(ho, {
      label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463689.transparency,
      opacity: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D181,
      onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46759 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463690({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463688,
        picture: {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463693,
          opacity: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46759,
          mode: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463693 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463693.mode) ?? SlideTablePictureFillModeEnum.Stretch
        }
      })
    })]
  });
}
function mo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463703) {
  let {
      fallbackColor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463704,
      fill: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463705,
      labels: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463706,
      onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463707
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463703,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463708 = useDependency(IImageIoService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463709 = useRef(null),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463710 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463705 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463705.picture,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D183 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463710 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463710.opacity) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463705 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463705.opacity) ?? 1,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463711 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463710 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463710.source && /^(?:data:|https?:)/["test"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463710.source) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463710.source : undefined;
  return jsxs("div", {
    className: "univer-flex univer-flex-col univer-gap-2",
    children: [jsxs("div", {
      className: "univer-flex univer-items-center univer-justify-between univer-gap-3",
      children: [jsx("span", {
        className: "univer-shrink-0\x20univer-text-xs\x20univer-text-gray-600\x20dark:!univer-text-gray-200",
        children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463706.pictureSource
      }), jsx("input", {
        ref: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463709,
        type: "file",
        accept: "image/*",
        className: "univer-hidden",
        onChange: async var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46760 => {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46761;
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46762 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46761 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46760.target["files"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46761[0];
          if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46762) return;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46760.target["value"] = "";
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46763 = await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463708.saveImage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46762);
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46763 == null) return;
          let {
            imageSourceType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46764,
            source: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46765,
            base64Cache: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46766
          } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46763;
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463707({
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463705,
            type: "picture",
            color: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463705 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463705.color) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463704,
            picture: {
              ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463710,
              source: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46766 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46765,
              sourceType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46764,
              opacity: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D183,
              mode: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463710 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463710.mode) ?? "stretch"
            }
          });
        }
      }), jsx(Button, {
        size: "small",
        type: "button",
        onClick: () => {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46774;
          return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46774 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463709.current) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46774.click();
        },
        children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463706.pictureInsert
      })]
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463711 && jsx("img", {
      src: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463711,
      alt: "",
      className: "univer-h-14 univer-w-full univer-rounded univer-object-cover"
    }), jsx(ho, {
      label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463706.transparency,
      opacity: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D183,
      onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46776 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463707({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463705,
        type: "picture",
        color: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463705 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463705.color) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463704,
        picture: {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463710,
          opacity: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46776,
          mode: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463710 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463710.mode) ?? "stretch"
        }
      })
    })]
  });
}
function ho(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463721) {
  return jsxs("div", {
    className: "univer-flex univer-items-center univer-justify-between univer-gap-3",
    children: [jsx("span", {
      className: "univer-shrink-0 univer-text-xs univer-text-gray-600 dark:!univer-text-gray-200",
      children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463721.label
    }), jsx("div", {
      className: "univer-w-20",
      children: jsx(InputNumber, {
        className: "univer-w-full",
        value: Math.round((1 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463721.opacity) * 100),
        min: 0,
        max: 100,
        step: 10,
        formatter: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46777 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46777 + "%",
        parser: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46778 => (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46778 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46778.replace("%", "")) || "",
        onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46779 => {
          let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D62 = Math.max(0, Math.min(100, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46779 ?? 0));
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463721.onChange((100 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D62) / 100);
        }
      })
    })]
  });
}
function go(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463723) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463724;
  return {
    type: "gradient",
    color: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463724 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463723.stops[0]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463724.color) ?? "#111827",
    gradient: {
      type: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463723.type,
      angle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463723.angle,
      stops: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463723.stops["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781 => ({
        offset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781.offset,
        color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781.color,
        opacity: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781.opacity
      }))
    }
  };
}
const var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A78 = FONT_SIZE_LIST.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463727 => ({
    label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463727.label,
    value: String(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463727.value)
  })),
  vo = [0, 1, 2, 3, 4, 6],
  yo = [{
    labelKey: "slides-table-ui.editorToolbar.borderStyleSolid",
    value: SlideTableBorderDashEnum.Solid
  }, {
    labelKey: "slides-table-ui.editorToolbar.borderStyleDash",
    value: SlideTableBorderDashEnum.Dash
  }, {
    labelKey: "slides-table-ui.editorToolbar.borderStyleDot",
    value: SlideTableBorderDashEnum.Dot
  }, {
    labelKey: "slides-table-ui.editorToolbar.borderStyleDashDot",
    value: SlideTableBorderDashEnum.DashDot
  }, {
    labelKey: "slides-table-ui.editorToolbar.noBorder",
    value: SlideTableBorderDashEnum.None
  }],
  bo = [{
    labelKey: "slides-table-ui.editorToolbar.borderPresetAll",
    preset: SlideTableBorderPresetEnum.All
  }, {
    labelKey: "slides-table-ui.editorToolbar.borderPresetInner",
    preset: SlideTableBorderPresetEnum.Inner
  }, {
    labelKey: "slides-table-ui.editorToolbar.borderPresetOuter",
    preset: SlideTableBorderPresetEnum.Outer
  }, {
    labelKey: "slides-table-ui.editorToolbar.borderPresetTop",
    preset: SlideTableBorderPresetEnum.Top
  }, {
    labelKey: "slides-table-ui.editorToolbar.borderPresetBottom",
    preset: SlideTableBorderPresetEnum.Bottom
  }, {
    labelKey: "slides-table-ui.editorToolbar.borderPresetLeft",
    preset: SlideTableBorderPresetEnum.Left
  }, {
    labelKey: "slides-table-ui.editorToolbar.borderPresetRight",
    preset: SlideTableBorderPresetEnum.Right
  }, {
    labelKey: "slides-table-ui.editorToolbar.borderPresetInnerHorizontal",
    preset: SlideTableBorderPresetEnum.InnerHorizontal
  }, {
    labelKey: "slides-table-ui.editorToolbar.borderPresetInnerVertical",
    preset: SlideTableBorderPresetEnum.InnerVertical
  }, {
    labelKey: "slides-table-ui.editorToolbar.noBorder",
    preset: SlideTableBorderPresetEnum.None
  }],
  xo = {
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
  So = {
    colorChannel1: "#9ca3af"
  },
  Co = "\x0a\x20\x20\x20\x20univer-rounded-lg\x20univer-border\x20univer-border-solid\x20univer-border-gray-200\x20univer-bg-gray-0\x20univer-shadow-lg\x0a\x20\x20\x20\x20dark:!univer-border-gray-700\x20dark:!univer-bg-gray-900\x0a";
function Oo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463738) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463739 = useDependency(LocaleService);
  return jsx(lo, {
    onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463738.onOpenChange,
    children: ({
      handleOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46788,
      markInternalInteraction: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46789
    }) => jsx(Dropdown, {
      open: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463738.open,
      onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46788,
      overlay: jsx("section", {
        className: clsx(Co, borderClassName),
        "data-u-comp": "slide-table-floating-toolbar-popup",
        onMouseDown: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120 => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46789(), keepFloatingToolbarPanelInteraction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120);
        },
        onPointerDown: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122 => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46789(), keepFloatingToolbarPanelInteraction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122);
        },
        children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463738.children
      }),
      children: jsx("span", {
        className: clsx({
          "[&>span]:univer-h-full\x20[&>span]:univer-w-full\x20[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-h-full\x20[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-w-full": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463738.ribbon
        }),
        children: jsx(Tooltip, {
          title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463738.label ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463739.t("slides-table-ui.editorToolbar.tableTheme"),
          placement: "bottom",
          children: jsxs(Button, {
            size: "small",
            variant: "ghost",
            type: "button",
            "data-toolbar-item": "table-theme",
            "aria-expanded": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463738.open,
            "aria-label": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463738.label ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463739.t("slides-table-ui.editorToolbar.tableTheme"),
            title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463738.label ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463739.t("slides-table-ui.editorToolbar.tableTheme"),
            className: clsx({
              "[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-h-full\x20[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-w-full\x20[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-min-w-28\x20[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-flex-col\x20[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-gap-1\x20[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-px-1.5\x20[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-py-1": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463738.ribbon,
              "univer-bg-gray-100\x20univer-text-primary-600\x20dark:!univer-bg-gray-700\x20dark:!univer-text-primary-300": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463738.open
            }),
            onMouseDown: keepFloatingToolbarPanelInteraction,
            onPointerDown: keepFloatingToolbarPanelInteraction,
            children: [jsx("span", {
              className: clsx("univer-flex univer-items-center univer-justify-center", {
                "[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-text-3xl": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463738.ribbon
              }),
              children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463738.icon ?? jsx(PaintBucketDoubleIcon, {})
            }), jsxs("span", {
              className: clsx("univer-flex univer-min-w-0 univer-items-center univer-gap-0.5", {
                "[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-w-full\x20[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-justify-center": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463738.ribbon
              }),
              children: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463738.label && jsx("span", {
                className: clsx("univer-min-w-0\x20univer-flex-1\x20univer-truncate\x20univer-text-left\x20rtl:univer-text-right", {
                  "[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-flex-none\x20[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-text-xs": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463738.ribbon
                }),
                children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463738.label
              }), jsx(MoreDownIcon, {
                className: "univer-text-xs"
              })]
            })]
          })
        })
      })
    })
  });
}
function ko(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463742) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463743 = useDependency(LocaleService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463744 = yo.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46790 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46790.value === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463742.dash) ?? yo[0];
  return jsx(lo, {
    onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463742.onOpenChange,
    children: ({
      handleOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46791,
      markInternalInteraction: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46792
    }) => jsx(Dropdown, {
      open: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463742.open,
      onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46791,
      overlay: jsxs("section", {
        className: clsx(Co, "univer-grid univer-gap-2 univer-p-2", borderClassName),
        "data-u-comp": "slide-table-floating-toolbar-popup",
        dir: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463742.direction,
        onMouseDown: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124 => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46792(), keepFloatingToolbarPanelInteraction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124);
        },
        onPointerDown: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126 => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46792(), keepFloatingToolbarPanelInteraction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126);
        },
        children: [jsx("div", {
          className: "univer-grid univer-grid-cols-5 univer-gap-1",
          children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463742.presets["map"](({
            labelKey: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128,
            preset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129
          }) => {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130 = xo[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129];
            return jsx(Tooltip, {
              title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463743.t(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128),
              placement: "bottom",
              children: jsx(Button, {
                size: "icon",
                variant: "ghost",
                type: "button",
                "aria-label": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463743.t(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128),
                onClick: () => {
                  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463742.onSelectPreset(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463742.onOpenChange(false);
                },
                onMouseDown: keepFloatingToolbarPanelInteraction,
                onPointerDown: keepFloatingToolbarPanelInteraction,
                children: jsx(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130, {
                  className: "univer-size-4 univer-text-current",
                  extend: So
                })
              })
            }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129);
          })
        }), jsx(Separator, {}), jsxs("div", {
          className: "univer-flex\x20univer-items-center\x20univer-gap-2",
          children: [jsx(Ao, {
            title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463743.t("slides-table-ui.editorToolbar.tableBorderColor"),
            direction: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463742.direction,
            color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463742.color,
            onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463742.onChangeColor,
            children: jsx(PaintBucketDoubleIcon, {
              extend: {
                colorChannel1: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463742.color
              }
            })
          }), jsx(Mo, {
            title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463743.t("slides-table-ui.editorToolbar.borderWidth"),
            direction: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463742.direction,
            value: String(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463742.width),
            options: vo.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134 => ({
              label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134 === 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463743.t("slides-table-ui.editorToolbar.noBorder") : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134 + "px",
              value: String(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134),
              icon: jsx("span", {
                className: "univer-block univer-w-5 univer-rounded-full univer-bg-current",
                style: {
                  height: Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134 || 1)
                }
              })
            })),
            onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463742.onChangeWidth(Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135)),
            children: jsxs("span", {
              className: "univer-text-xs",
              children: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463742.width, "px"]
            })
          }), jsx(Mo, {
            title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463743.t("slides-table-ui.editorToolbar.borderStyle"),
            direction: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463742.direction,
            value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463742.dash,
            options: yo.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136 => ({
              label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463743.t(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136.labelKey),
              value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136.value,
              icon: jsx(Po, {
                dash: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136.value
              })
            })),
            onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463742.onChangeDash,
            children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463744 ? jsx(Po, {
              dash: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463744.value
            }) : jsx(AllBorderIcon, {})
          })]
        })]
      }),
      children: jsx("span", {
        children: jsx(Tooltip, {
          title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463742.label ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463743.t("slides-table-ui.editorToolbar.border"),
          placement: "bottom",
          children: jsxs(Button, {
            size: "small",
            variant: "ghost",
            type: "button",
            "aria-expanded": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463742.open,
            "aria-label": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463742.label ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463743.t("slides-table-ui.editorToolbar.border"),
            title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463742.label ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463743.t("slides-table-ui.editorToolbar.border"),
            className: clsx({
              "univer-bg-gray-100\x20univer-text-primary-600\x20dark:!univer-bg-gray-700\x20dark:!univer-text-primary-300": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463742.open
            }),
            onMouseDown: keepFloatingToolbarPanelInteraction,
            onPointerDown: keepFloatingToolbarPanelInteraction,
            children: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463742.mixed ? jsx("span", {
              "aria-hidden": "true",
              children: "—"
            }) : jsx(AllBorderIcon, {}), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463742.label && jsx("span", {
              className: "univer-min-w-0\x20univer-flex-1\x20univer-truncate\x20univer-text-left\x20rtl:univer-text-right",
              children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463742.label
            }), jsx(MoreDownIcon, {
              className: "univer-text-xs"
            })]
          })
        })
      })
    })
  });
}
function Ao(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463748) {
  let {
      children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463749,
      color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463750,
      onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463751
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463748,
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463752, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463753] = useState(false),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463754 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463748.open ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463752;
  return jsx(lo, {
    onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463748.onOpenChange ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463753,
    children: ({
      handleOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46793,
      markInternalInteraction: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46794
    }) => jsx(Dropdown, {
      overlay: jsx("div", {
        className: clsx(Co, "univer-p-3", borderClassName),
        "data-u-comp": "slide-table-floating-toolbar-popup",
        dir: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463748.direction,
        onMouseDown: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137 => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46794(), keepFloatingToolbarPanelInteraction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137);
        },
        onPointerDown: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139 => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46794(), keepFloatingToolbarPanelInteraction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139);
        },
        children: jsx(ColorPicker, {
          value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463750,
          onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463751
        })
      }),
      open: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463754,
      onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46793,
      children: jsx("span", {
        children: jsx(Tooltip, {
          title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463748.title,
          placement: "bottom",
          children: jsxs(Button, {
            size: "small",
            variant: "ghost",
            "aria-expanded": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463754,
            "aria-label": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463748.title,
            className: clsx({
              "univer-bg-gray-100\x20univer-text-primary-600\x20dark:!univer-bg-gray-700\x20dark:!univer-text-primary-300": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463754
            }),
            title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463748.title,
            type: "button",
            onMouseDown: keepFloatingToolbarPanelInteraction,
            onPointerDown: keepFloatingToolbarPanelInteraction,
            children: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463749, jsx("span", {
              className: "univer-h-3 univer-w-3 univer-rounded-sm univer-border univer-border-solid univer-border-gray-300 dark:!univer-border-gray-600",
              style: {
                backgroundColor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463750
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
function jo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463762) {
  return jsx(lo, {
    onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463762.onOpenChange,
    children: ({
      handleOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46795,
      markInternalInteraction: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46796
    }) => jsx(Dropdown, {
      open: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463762.open,
      onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46795,
      overlay: jsx("div", {
        className: clsx(Co, "univer-p-3", borderClassName),
        "data-u-comp": "slide-table-floating-toolbar-popup",
        onMouseDown: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141 => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46796(), keepFloatingToolbarPanelInteraction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141);
        },
        onPointerDown: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143 => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46796(), keepFloatingToolbarPanelInteraction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143);
        },
        children: jsx(ColorPicker, {
          value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463762.color,
          onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463762.onChange
        })
      }),
      children: jsx("span", {
        children: jsx(Tooltip, {
          title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463762.title,
          placement: "bottom",
          children: jsxs(Button, {
            size: "small",
            variant: "ghost",
            type: "button",
            "data-toolbar-item": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463762["data-toolbar-item"],
            "aria-expanded": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463762.open,
            "aria-label": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463762.title,
            className: clsx({
              "univer-bg-gray-100\x20dark:!univer-bg-gray-700": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463762.open
            }),
            onMouseDown: keepFloatingToolbarPanelInteraction,
            onPointerDown: keepFloatingToolbarPanelInteraction,
            children: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463762.mixed ? jsx("span", {
              "aria-hidden": "true",
              children: "—"
            }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463762.icon === "font" ? jsx(FontColorDoubleIcon, {
              className: "univer-fill-primary-600",
              extend: {
                colorChannel1: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463762.color
              }
            }) : jsx(PaintBucketDoubleIcon, {
              className: "univer-fill-primary-600",
              extend: {
                colorChannel1: "var(--univer-primary-600)"
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
function Mo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463764) {
  let {
      children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463765,
      direction: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463766,
      title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463767,
      value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463768,
      open: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463769,
      options: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463770,
      onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463771,
      onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463772
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463764,
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463773, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463774] = useState(false),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463775 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463769 ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463773,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463776 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463772 ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463774,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463777 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463770.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46797 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46797.value === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463768) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463770[0];
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463777 ? jsx(lo, {
    onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463776,
    children: ({
      handleOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46798,
      markInternalInteraction: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46799
    }) => jsx(Dropdown, {
      open: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463775,
      onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46798,
      overlay: jsx("div", {
        className: clsx(Co, "univer-min-w-32 univer-p-1", borderClassName),
        dir: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463766,
        onMouseDown: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145 => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46799(), keepFloatingToolbarPanelInteraction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145);
        },
        onPointerDown: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147 => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46799(), keepFloatingToolbarPanelInteraction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147);
        },
        children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463770.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149 => jsxs(Button, {
          size: "middle",
          variant: "ghost",
          type: "button",
          onClick: () => {
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463771(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149.value), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463776(false);
          },
          onMouseDown: keepFloatingToolbarPanelInteraction,
          onPointerDown: keepFloatingToolbarPanelInteraction,
          className: clsx("univer-w-full univer-justify-start rtl:univer-justify-end", {
            "univer-bg-primary-50\x20univer-text-primary-600\x20dark:!univer-bg-gray-800\x20dark:!univer-text-primary-300": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149.value === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463768
          }),
          children: [jsx("span", {
            className: "univer-flex univer-size-4 univer-items-center univer-justify-center",
            children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149.icon
          }), jsx("span", {
            className: "univer-flex-1",
            children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149.label
          })]
        }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149.value))
      }),
      children: jsx("span", {
        children: jsx(Tooltip, {
          title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463767,
          placement: "bottom",
          children: jsxs(Button, {
            size: "small",
            variant: "ghost",
            type: "button",
            "aria-expanded": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463775,
            "aria-label": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463767,
            title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463767,
            className: clsx({
              "univer-bg-gray-100\x20univer-text-primary-600\x20dark:!univer-bg-gray-700\x20dark:!univer-text-primary-300": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463775
            }),
            onMouseDown: keepFloatingToolbarPanelInteraction,
            onPointerDown: keepFloatingToolbarPanelInteraction,
            children: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463765 ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463777.icon, jsx(MoreDownIcon, {
              className: "univer-text-xs"
            })]
          })
        })
      })
    })
  }) : null;
}
function No(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463792) {
  return jsx(Tooltip, {
    title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463792.title,
    placement: "bottom",
    children: jsx("span", {
      onMouseDown: keepFloatingToolbarPanelInteraction,
      onPointerDown: keepFloatingToolbarPanelInteraction,
      children: jsx(Select, {
        borderless: true,
        className: clsx("!univer-h-6\x20!univer-min-w-0\x20!univer-rounded-md\x20!univer-border-transparent\x20!univer-bg-transparent\x20!univer-px-1.5", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463792.widthClassName),
        value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463792.value,
        options: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463792.options,
        onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463792.onChange
      })
    })
  });
}
function Po(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463794) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463795 = useDependency(LocaleService),
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB81 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463794.dash === "dot" ? "1 3" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463794.dash === "dash" ? "4\x203" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463794.dash === "dashDot" ? "4\x202\x201\x202" : undefined;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463794.dash === "none" ? jsx("span", {
    className: "univer-text-xs",
    children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463795.t("slides-table-ui.editorToolbar.none")
  }) : jsx("svg", {
    "aria-hidden": "true",
    height: "16",
    viewBox: "0\x200\x2024\x2016",
    width: "24",
    children: jsx("path", {
      d: "M3 8H21",
      stroke: "currentColor",
      strokeDasharray: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB81,
      strokeLinecap: "round",
      strokeWidth: "2"
    })
  });
}
const Vo = "slides-table-ui.table-design.styles-control",
  Ho = "slides-table-ui.table-design.cell-style-control",
  Uo = "slides-table-ui.table-design.text-control";
function Wo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463826) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463826.element["type"] === PageElementTypeEnum.Table;
}
function Go() {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463828 = useDependency(IConfigService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463829 = useDependency(ISlideDrawingService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463830 = useDependency(ISlideDrawingStateService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463831 = useDependency(SlideTableModelService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463832 = useDependency(SlideTableResourceService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463833 = useDependency(G),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463834 = () => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46839;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46840 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463830.getSnapshot(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46841 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46840.context;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46841 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46840.selectedIds["length"] !== 1) return null;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463829.getDrawingByParam({
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46841.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46841.subUnitId,
        drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46840.selectedIds[0]
      });
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842 || !Wo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842)) return null;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46843 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463832.getTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842.element["tableId"]);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46843) return null;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46844 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463833.getSelection(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46845 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46844 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46844.unitId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842.unitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46844.subUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842.subUnitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46844.elementId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842.drawingId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46844.tableId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842.element["tableId"] ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46844 : null,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463828.getConfig(SLIDES_UI_PLUGIN_CONFIG_KEY);
      return {
        drawing: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842,
        editable: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46839 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46846.editor) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46839.enabled) !== false,
        selection: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46845,
        table: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46843
      };
    };
  return useObservable(() => mergeLocal(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463830.state$, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463833.selection$, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463831.tableChange$).pipe(startWith(undefined), map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463834)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463834(), false, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463829, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463830, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463831, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463832, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463833]);
}
function Ko(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463842) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463843 = useDependency(G);
  return jsx("fieldset", {
    disabled: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463842.disabled,
    className: "univer-m-0 univer-flex univer-h-full univer-items-center univer-gap-1 univer-border-none univer-p-0 disabled:univer-cursor-not-allowed disabled:univer-opacity-50",
    onMouseDownCapture: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463843.markTableInternalInteraction(),
    onPointerDownCapture: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463843.markTableInternalInteraction(),
    onMouseDown: keepFloatingToolbarPanelInteraction,
    onPointerDown: keepFloatingToolbarPanelInteraction,
    children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463842.children
  });
}
function qo() {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463846;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463847 = useDependency(ICommandService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463848 = useDependency(LocaleService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463849 = useDependency(ThemeService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463850 = Go(),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463851, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463852] = useState(false),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463853 = useMemo(() => resolveSlideTableThemePalette(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463849.getColorFromTheme(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157)), [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463849]),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A23 = !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463850 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463850.editable) || ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463846 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463850.selection) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463846.kind) === "text",
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463854 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46855 => {
      !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463850 || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A23 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463847.executeCommand(UpdateSlideTableCommand.id, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463850.drawing["unitId"],
        tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463850.table["id"],
        patch: {
          styleId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46855
        }
      });
    };
  return jsx(Ko, {
    disabled: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A23,
    children: jsx(Oo, {
      icon: jsx(PaintIcon, {
        className: "[[data-u-comp='ribbon-grid-toolbar']_&]:!univer-size-8"
      }),
      label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463848.t("slides-table-ui.editorToolbar.tableTheme"),
      ribbon: true,
      open: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463851,
      onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463852,
      children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463850 ? jsx(Ro, {
        currentStyleId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463850.table["styleId"],
        currentOptions: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463850.table["options"] ?? {},
        direction: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463848.getDirection(),
        palette: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463853,
        onApplyTheme: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46857 => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463854(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46857), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463852(false);
        },
        onChangeOptions: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46859 => {
          !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463850 || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A23 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463847.executeCommand(UpdateSlideTableCommand.id, {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463850.drawing["unitId"],
            tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463850.table["id"],
            patch: {
              options: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46859
            }
          });
        }
      }) : null
    })
  });
}
function Jo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463864) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463865 = useDependency(ICommandService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463866 = useDependency(SlideTableResourceService);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46861 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46863 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463864 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463864.selection) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862.ranges[0];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463864 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46863) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46864 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463866.getTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463864.drawing["unitId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463864.table["id"]);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46864 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463865.executeCommand(UpdateSlideTableCommand.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463864.drawing["unitId"],
      tableId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463864.table["id"],
      patch: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46861(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46864, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46863)
    });
  };
}
function Yo() {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463870 = useDependency(LocaleService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463871 = useObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463870.direction$, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463870.getDirection()),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463872 = Go(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463873 = Jo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463872),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463874, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463875] = useState(null),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463876 = oo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463872 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463872.table, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463872 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463872.selection) ?? null).values;
  return jsx(Ko, {
    disabled: !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463872 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463872.editable) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463872.selection || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463872.selection["kind"] === "text",
    children: jsxs("div", {
      className: "univer-flex univer-h-full univer-w-full univer-items-center univer-gap-2 [[data-u-comp='ribbon-grid-toolbar']_&]:univer-grid [[data-u-comp='ribbon-grid-toolbar']_&]:univer-grid-rows-2 [[data-u-comp='ribbon-grid-toolbar']_&]:univer-content-center [[data-u-comp='ribbon-grid-toolbar']_&]:univer-justify-items-stretch [[data-u-comp='ribbon-grid-toolbar']_&]:univer-gap-y-2",
      children: [jsx(fo, {
        color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463876.backgroundColor,
        value: Ia(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463876.backgroundFill),
        gradientValue: Ba(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463876.backgroundFill, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463876.backgroundColor),
        previewStyle: Ha(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463876.backgroundFill, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463876.backgroundColor),
        showPreview: false,
        tableFill: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463876.backgroundFill,
        mixed: !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463876.mixed["backgroundFill"],
        open: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463874 === "background",
        onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46869 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463875(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46869 ? "background" : null),
        onTableFillChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46870 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463873((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159) => Pr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46870)),
        children: jsx(ShapeBackgroundColorDoubleIcon, {
          extend: {
            colorChannel1: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463876.backgroundColor
          }
        })
      }), jsx(ko, {
        direction: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463871,
        color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463876.borderColor,
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463876.borderWidth,
        dash: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463876.borderDash ?? SlideTableBorderDashEnum.Solid,
        presets: bo,
        open: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463874 === "border",
        mixed: !!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463876.mixed["borderColor"] || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463876.mixed["borderWidth"] || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463876.mixed["borderDash"]),
        onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46871 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463875(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46871 ? "border" : null),
        onSelectPreset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46872 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463873((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161) => Rr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46872)),
        onChangeColor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46873 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463873((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163) => Lr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163, {
          color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46873
        })),
        onChangeWidth: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46874 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463873((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165) => Lr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165, {
          width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46874,
          dash: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46874 === 0 ? SlideTableBorderDashEnum.None : undefined
        })),
        onChangeDash: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46875 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463873((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167) => Lr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46167, {
          dash: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46875
        }))
      })]
    })
  });
}
function Xo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463884) {
  return jsx(Tooltip, {
    title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463884.title,
    placement: "bottom",
    children: jsx("button", {
      type: "button",
      "aria-label": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463884.title,
      "aria-pressed": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463884.mixed ? "mixed" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463884.active,
      onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463884.onClick,
      onMouseDown: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46876 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46876.preventDefault(),
      className: clsx("univer-flex\x20univer-size-6\x20univer-items-center\x20univer-justify-center\x20univer-rounded-md\x20univer-border-0\x20univer-bg-transparent\x20univer-p-0\x20univer-text-sm\x20univer-text-gray-700\x20univer-transition-colors\x20hover:univer-bg-gray-100\x20hover:univer-text-primary-600\x20dark:!univer-text-gray-100\x20dark:hover:!univer-bg-gray-700", (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463884.active || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463884.mixed) && "univer-bg-primary-50 univer-text-primary-600 dark:!univer-bg-gray-700 dark:!univer-text-primary-300"),
      children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463884.children
    })
  });
}
function Zo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463886) {
  let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463887, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463888] = useState(false),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463889 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463886.options["find"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46877 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46877.value === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463886.value) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463886.options[0];
  return jsx(Dropdown, {
    open: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463887,
    onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463888,
    side: "bottom",
    avoidCollisions: true,
    overlay: jsx("div", {
      className: "univer-flex univer-flex-col univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-white univer-p-1 univer-shadow-lg dark:!univer-border-gray-700 dark:!univer-bg-gray-900",
      children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463886.options["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46878 => jsxs("button", {
        type: "button",
        "aria-label": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46878.label,
        "aria-pressed": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46878.value === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463886.value,
        className: clsx("univer-flex univer-h-8 univer-w-32 univer-items-center univer-justify-start univer-gap-2 univer-rounded-md univer-border-0 univer-bg-transparent univer-px-2 univer-text-sm univer-text-gray-700 hover:univer-bg-gray-100 dark:!univer-text-gray-100 dark:hover:!univer-bg-gray-700", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46878.value === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463886.value && "univer-bg-primary-50 univer-text-primary-600 dark:!univer-bg-gray-700 dark:!univer-text-primary-300"),
        onClick: () => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463886.onChange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46878.value), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463888(false);
        },
        onMouseDown: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168.preventDefault(),
        children: [jsx("span", {
          className: "univer-flex univer-size-5 univer-items-center univer-justify-center univer-text-lg",
          children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46878.icon
        }), jsx("span", {
          children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46878.label
        })]
      }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46878.value))
    }),
    children: jsx("span", {
      children: jsx(Tooltip, {
        title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463889 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463889.label,
        placement: "bottom",
        children: jsxs("button", {
          type: "button",
          "aria-expanded": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463887,
          "aria-label": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463889 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463889.label,
          className: clsx("univer-flex univer-h-6 univer-w-10 univer-items-center univer-justify-center univer-gap-0.5 univer-rounded-md univer-border-0 univer-bg-transparent univer-p-0 univer-text-lg univer-text-gray-700 hover:univer-bg-gray-100 dark:!univer-text-gray-100 dark:hover:!univer-bg-gray-700", (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463887 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463886.mixed) && "univer-bg-primary-50 univer-text-primary-600 dark:!univer-bg-gray-700 dark:!univer-text-primary-300"),
          onMouseDown: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46879 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46879.preventDefault(),
          children: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463886.mixed ? jsx("span", {
            "aria-hidden": "true",
            children: "—"
          }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463889 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463889.icon, jsx(MoreDownIcon, {
            className: "univer-text-xs"
          })]
        })
      })
    })
  });
}
function Qo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463894) {
  let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463895, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463896] = useState(false);
  return jsxs("div", {
    className: "univer-flex univer-h-6 univer-w-10 univer-items-center",
    children: [jsx(Xo, {
      active: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463894.active,
      mixed: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463894.mixed,
      title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463894.title,
      onClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463894.onToggle,
      children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463894.icon
    }), jsx(Dropdown, {
      open: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463895,
      onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463896,
      side: "bottom",
      avoidCollisions: true,
      overlay: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463894.picker(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463896(false)),
      children: jsx("button", {
        type: "button",
        "aria-expanded": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463895,
        "aria-label": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463894.title,
        className: clsx("univer-flex univer-h-6 univer-w-4 univer-items-center univer-justify-center univer-rounded-md univer-border-0 univer-bg-transparent univer-p-0 univer-text-xs univer-text-gray-700 hover:univer-bg-gray-100 dark:!univer-text-gray-100 dark:hover:!univer-bg-gray-700", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463895 && "univer-bg-primary-50 univer-text-primary-600 dark:!univer-bg-gray-700 dark:!univer-text-primary-300"),
        onMouseDown: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46880 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46880.preventDefault(),
        children: jsx(MoreDownIcon, {})
      })
    })]
  });
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F2(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463900, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463901) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A43 = FONT_SIZE_LIST.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46881 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46881.value);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463901 > 0 ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A43.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46882 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46882 > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463900) ?? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A43[var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A43.length - 1] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463900 : [...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A43].reverse().find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46883 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46883 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463900) ?? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A43[0] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463900;
}
function es() {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463904;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463905 = useDependency(LocaleService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463906 = Go(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463907 = Jo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463906),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463908, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463909] = useState(null),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463910 = oo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463906 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463906.table, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463906 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463906.selection) ?? null).values,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A25 = !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463906 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463906.editable) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463906.selection,
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A45 = [{
      label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463905.t("slides-table-ui.editorToolbar.alignLeft"),
      value: HorizontalAlign.LEFT,
      icon: jsx(LeftJustifyingIcon, {})
    }, {
      label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463905.t("slides-table-ui.editorToolbar.alignCenter"),
      value: HorizontalAlign.CENTER,
      icon: jsx(HorizontallyIcon, {})
    }, {
      label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463905.t("slides-table-ui.editorToolbar.alignRight"),
      value: HorizontalAlign.RIGHT,
      icon: jsx(RightJustifyingIcon, {})
    }, {
      label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463905.t("slides-table-ui.editorToolbar.alignJustify"),
      value: HorizontalAlign.JUSTIFIED,
      icon: jsx(AlignTextBothIcon, {})
    }],
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A46 = [{
      label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463905.t("slides-table-ui.editorToolbar.alignTop"),
      value: VerticalAlign.TOP,
      icon: jsx(AlignTopIcon, {})
    }, {
      label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463905.t("slides-table-ui.editorToolbar.alignMiddle"),
      value: VerticalAlign.MIDDLE,
      icon: jsx(VerticalCenterIcon, {})
    }, {
      label: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463905.t("slides-table-ui.editorToolbar.alignBottom"),
      value: VerticalAlign.BOTTOM,
      icon: jsx(AlignBottomIcon, {})
    }],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463911 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463906 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463904 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463906.selection) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463904.ranges[0],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463912 = jr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463906 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463906.table, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463911, PresetListType.ORDER_LIST),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463913 = jr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463906 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463906.table, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463911, PresetListType.BULLET_LIST),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A47 = [{
      key: "bold",
      title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463905.t("slides-table-ui.editorToolbar.bold"),
      active: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463910.bold,
      mixed: !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463910.mixed["bold"],
      icon: jsx(BoldIcon, {}),
      patch: {
        bl: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463910.mixed["bold"] || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463910.bold ? BooleanNumber.TRUE : BooleanNumber.FALSE
      }
    }, {
      key: "italic",
      title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463905.t("slides-table-ui.editorToolbar.italic"),
      active: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463910.italic,
      mixed: !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463910.mixed["italic"],
      icon: jsx(ItalicIcon, {}),
      patch: {
        it: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463910.mixed["italic"] || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463910.italic ? BooleanNumber.TRUE : BooleanNumber.FALSE
      }
    }, {
      key: "underline",
      title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463905.t("slides-table-ui.editorToolbar.underline"),
      active: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463910.underline,
      mixed: !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463910.mixed["underline"],
      icon: jsx(UnderlineIcon, {}),
      patch: {
        ul: {
          s: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463910.mixed["underline"] || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463910.underline ? BooleanNumber.TRUE : BooleanNumber.FALSE
        }
      }
    }, {
      key: "strikethrough",
      title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463905.t("slides-table-ui.editorToolbar.strikethrough"),
      active: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463910.strike,
      mixed: !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463910.mixed["strike"],
      icon: jsx(StrikethroughIcon, {}),
      patch: {
        st: {
          s: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463910.mixed["strike"] || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463910.strike ? BooleanNumber.TRUE : BooleanNumber.FALSE
        }
      }
    }];
  return jsx(Ko, {
    disabled: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A25,
    children: jsxs("div", {
      className: "univer-flex univer-h-full univer-w-full univer-items-center univer-gap-2",
      children: [jsxs("div", {
        className: "univer-flex\x20univer-items-center\x20univer-gap-1\x20[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-grid\x20[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-w-[120px]\x20[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-grid-rows-2\x20[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-gap-y-2",
        children: [jsx(FontFamilyDropdown, {
          ariaLabel: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463905.t("slides-table-ui.editorToolbar.fontFamily"),
          className: "!univer-h-6\x20univer-w-[120px]\x20[[data-u-comp=\x27ribbon-grid-toolbar\x27]_&]:univer-w-full",
          inputClassName: "univer-w-auto",
          value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463910.mixed["fontFamily"] ? "" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463910.fontFamily,
          onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46884 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463907((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170) => zr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46884))
        }), jsxs("div", {
          className: "univer-flex\x20univer-items-center\x20univer-gap-1",
          children: [jsx(No, {
            title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463905.t("slides-table-ui.editorToolbar.fontSize"),
            widthClassName: "univer-w-14",
            value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463910.mixed["fontSize"] ? "" : String(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463910.fontSize),
            options: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463910.mixed["fontSize"] ? [{
              label: "—",
              value: ""
            }, ...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A78] : Ga(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A78, String(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463910.fontSize)),
            onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46885 => {
              let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D64 = Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46885);
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46885 && !Number.isNaN(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D64) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463907((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172) => Br(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D64));
            }
          }), jsx(Xo, {
            title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463905.t("slides-table-ui.editorToolbar.increaseFontSize"),
            onClick: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463907((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174) => Br(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174, fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F2(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463910.fontSize, 1))),
            children: jsx(FontSizeIncreaseIcon, {})
          }), jsx(Xo, {
            title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463905.t("slides-table-ui.editorToolbar.decreaseFontSize"),
            onClick: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463907((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176) => Br(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176, fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F2(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463910.fontSize, -1))),
            children: jsx(FontSizeReduceIcon, {})
          })]
        })]
      }), jsx("div", {
        className: "univer-flex univer-items-center univer-gap-1 [[data-u-comp='ribbon-grid-toolbar']_&]:univer-grid [[data-u-comp='ribbon-grid-toolbar']_&]:univer-grid-cols-2 [[data-u-comp='ribbon-grid-toolbar']_&]:univer-grid-rows-2",
        children: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A47.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46887 => jsx(Xo, {
          title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46887.title,
          active: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46887.active,
          mixed: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46887.mixed,
          onClick: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463907((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623) => ti(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46887.patch)),
          children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46887.icon
        }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46887.key))
      }), jsxs("div", {
        className: "univer-flex univer-items-center univer-gap-1 [[data-u-comp='ribbon-grid-toolbar']_&]:univer-grid [[data-u-comp='ribbon-grid-toolbar']_&]:univer-w-11 [[data-u-comp='ribbon-grid-toolbar']_&]:univer-grid-rows-2 [[data-u-comp='ribbon-grid-toolbar']_&]:univer-gap-y-2",
        children: [jsx(jo, {
          "data-toolbar-item": "ribbon-text-color",
          title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463905.t("slides-table-ui.editorToolbar.textColor"),
          color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463910.textColor,
          mixed: !!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463910.mixed["textColor"] || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463910.mixed["textFill"]),
          icon: "font",
          open: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463908 === "textColor",
          onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46888 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463909(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46888 ? "textColor" : null),
          onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46889 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463907((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178) => Ir(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178, {
            type: "solid",
            color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46889,
            opacity: 1
          }))
        }), jsx(jo, {
          "data-toolbar-item": "ribbon-text-background",
          title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463905.t("slides-table-ui.editorToolbar.textBackgroundColor"),
          color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463910.textBackgroundColor,
          mixed: !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463910.mixed["textBackgroundColor"],
          icon: "bucket",
          open: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463908 === "textBackground",
          onOpenChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46890 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463909(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46890 ? "textBackground" : null),
          onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46891 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463907((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180) => ti(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180, {
            bg: {
              rgb: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46891
            }
          }))
        })]
      }), jsxs("div", {
        className: "univer-flex univer-items-center univer-gap-2 [[data-u-comp='ribbon-grid-toolbar']_&]:univer-grid [[data-u-comp='ribbon-grid-toolbar']_&]:univer-grid-cols-2 [[data-u-comp='ribbon-grid-toolbar']_&]:univer-grid-rows-2 [[data-u-comp='ribbon-grid-toolbar']_&]:univer-gap-x-2 [[data-u-comp='ribbon-grid-toolbar']_&]:univer-gap-y-2",
        children: [jsx(Zo, {
          options: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A45,
          value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463910.horizontalAlign,
          mixed: !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463910.mixed["horizontalAlign"],
          onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46892 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463907((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182) => kr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182, {
            axis: "horizontal",
            value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46892
          }))
        }), jsx(Qo, {
          title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463905.t("slides-table-ui.editorToolbar.orderedList"),
          icon: jsx(OrderIcon, {}),
          active: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463912.active,
          mixed: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463912.mixed,
          onToggle: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463907((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184) => Ar(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463912.active ? null : PresetListType.ORDER_LIST)),
          picker: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46893 => jsx(OrderListTypePicker, {
            value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463912.value,
            onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185 => {
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463907((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625) => Ar(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46893());
            }
          })
        }), jsx(Zo, {
          options: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A46,
          value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463910.verticalAlign,
          mixed: !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463910.mixed["verticalAlign"],
          onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46894 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463907((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188) => kr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188, {
            axis: "vertical",
            value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46894
          }))
        }), jsx(Qo, {
          title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463905.t("slides-table-ui.editorToolbar.bulletList"),
          icon: jsx(UnorderIcon, {}),
          active: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463913.active,
          mixed: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463913.mixed,
          onToggle: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463907((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190) => Ar(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463913.active ? null : PresetListType.BULLET_LIST)),
          picker: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46895 => jsx(BulletListTypePicker, {
            value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463913.value,
            onChange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191 => {
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463907((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627) => Ar(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46895());
            }
          })
        })]
      })]
    })
  });
}
let ts = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46896, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46897) {
    super(), this._componentManager = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46896, this._iconManager = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46897, this._registerIcons(), this._registerComponents();
  }
  _registerIcons() {
    this.disposeWithMe(this._iconManager["register"]({
      AdjustHeightDoubleIcon: AdjustHeightDoubleIcon,
      AdjustWidthDoubleIcon: AdjustWidthDoubleIcon,
      CancelMergeIcon: CancelMergeIcon,
      DeleteColumnDoubleIcon: DeleteColumnDoubleIcon,
      DeleteRowDoubleIcon: DeleteRowDoubleIcon,
      InsertRowAboveDoubleIcon: InsertRowAboveDoubleIcon,
      InsertRowBelowDoubleIcon: InsertRowBelowDoubleIcon,
      LeftInsertColumnDoubleIcon: LeftInsertColumnDoubleIcon,
      MergeAllIcon: MergeAllIcon,
      RightInsertColumnDoubleIcon: RightInsertColumnDoubleIcon
    }));
  }
  _registerComponents() {
    this.disposeWithMe(this._componentManager["register"](Vo, qo)), this.disposeWithMe(this._componentManager["register"](Ho, Yo)), this.disposeWithMe(this._componentManager["register"](Uo, es));
  }
};
ts = oa([Y(0, Inject(ComponentManager)), Y(1, Inject(IconManager))], ts);
function fs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463934, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463935) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463936 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463934.get(IConfigService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463937 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463934.get(ISlideDrawingService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463938 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463934.get(ISlideDrawingStateService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463939 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463934.get(G);
  return combineLatest([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463938.state$, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463937.order$["pipe"](startWith(undefined)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463939.selection$["pipe"](startWith(null))]).pipe(map(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46900,, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46901]) => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46902;
    if (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46902 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463936.getConfig(SLIDES_UI_PLUGIN_CONFIG_KEY)) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46902 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46902.editor) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46902.enabled) === false || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46901 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46901.kind) === "text") return true;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46903 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46900.context;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46903 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46900.selectedIds["length"] !== 1) return true;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46904 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46900.selectedIds[0],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463937.getDrawingByParam({
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46903.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46903.subUnitId,
        drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46904
      });
    if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905.element["type"]) !== PageElementTypeEnum.Table) return true;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463937.getDrawingOrder(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46903.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46903.subUnitId),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D66 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906.indexOf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46904);
    return var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D66 < 0 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463935 === "forward" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463935 === "front" ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D66 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906.length - 1 : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D66 === 0);
  }));
}
Vs = oa([Y(0, IMenuManagerService), Y(1, IRibbonService), Y(2, Inject(ISlideDrawingStateService)), Y(3, Inject(ISlideDrawingService)), Y(4, Inject(Sa)), Y(5, Optional(ISlideEmbedFocusOwnerService)), Y(6, Optional(ISlideEmbedFloatingActiveService)), Y(7, Optional(ISlideEmbedMountService))], Vs);
function Us(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464032, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464033, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464034, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464035 = "") {
  return qs({
    id: ec(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464032, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464033, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464034),
    body: {
      dataStream: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464035 + "\x0d\x0a",
      paragraphs: [fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF1()],
      textRuns: []
    },
    documentStyle: {}
  }, ec(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464032, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464033, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464034));
}
function Ys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464102) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D197 = Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464102.split("\x0d").length - 1),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D198 = 0;
  return Array.from({
    length: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D197
  }, () => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46980 = fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF1(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D198),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D68 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464102.indexOf("\x0d", var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D198);
    return var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D198 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D68 >= 0 ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D68 + 1 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464102.length, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46980;
  });
}
function fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464112 = 0) {
  return {
    startIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464112,
    paragraphId: createParagraphId(new Set())
  };
}
function ec(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464114, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464115, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464116) {
  return "SLIDE_TABLE_CELL_" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464114 + "_" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464115 + "_" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464116;
}
function rc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464136, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464137) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464136 == "number" && Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464136) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464136 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464137;
}
function ic(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464140, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464141) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464142 = rc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464140, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464141);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464142 > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464142 : Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464141);
}
function fc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464206, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464207) {
  return pc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464206, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464207)[0] ?? null;
}
function pc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464210, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464211) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464210 || !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464211 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464211.ranges["length"])) return [];
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D203 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464210.rows["length"] - 1,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D204 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464210.columns["length"] - 1;
  return var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D203 < 0 || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D204 < 0 ? [] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464211.ranges["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461014 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461015 = normalizeSlideTableCellRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461014);
    return {
      startRow: Math.max(0, Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461015.startRow, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D203)),
      endRow: Math.max(0, Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461015.endRow, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D203)),
      startColumn: Math.max(0, Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461015.startColumn, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D204)),
      endColumn: Math.max(0, Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461015.endColumn, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D204))
    };
  });
}
function mc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464214, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464215) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464216 = fc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464214, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464215);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464216) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464217 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464215.focus ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464215.anchor;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464217 ? {
    row: Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464216.startRow, Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464217.row, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464216.endRow)),
    column: Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464216.startColumn, Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464217.column, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464216.endColumn))
  } : {
    row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464216.startRow,
    column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464216.startColumn
  };
}
function xc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464240, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464241, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464242) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464241 < 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464242 < 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464241 > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464240.width || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464242 > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464240.height) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464243 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464240.cells["find"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461020 => !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461020.hidden && Sc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461020, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464241, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464242));
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464243 ? {
    kind: "cell",
    row: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464243.row,
    column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464243.column
  } : null;
}
function Sc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464248, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464249, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464250) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464249 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464248.bounds["left"] && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464249 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464248.bounds["left"] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464248.bounds["width"] && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464250 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464248.bounds["top"] && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464250 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464248.bounds["top"] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464248.bounds["height"];
}
Ac = oa([Y(1, Inject(SlideHitTestService)), Y(2, Inject(SlideTableResourceService)), Y(3, Inject(G)), Y(4, IEditorUIService), Y(5, Inject(ISlideDrawingStateService)), Y(6, IContextMenuService), Y(7, ICommandService), Y(8, Inject(sa)), Y(9, IContextService), Y(10, IUniverInstanceService), Y(11, Inject(ISlideDrawingService)), Y(12, ISlideTransformerVisibilityService), Y(13, IPermissionService), Y(14, ISlideAlignmentGuideService), Y(15, Inject(SlideInsertService))], Ac);
sl = oa([Y(0, Inject(SlideTableResourceService))], sl);
function cl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464442) {
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464442 || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464442 != "object" ? false : "tables" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464442 && ll(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464442.tables) && "themes" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464442 && ll(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464442.themes) && "tableIdByElementId" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464442 && ll(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464442.tableIdByElementId);
}
function ll(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464444) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464444 == "object" && !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464444 && !Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464444);
}
function ul(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464446) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464446.rows["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462349 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462349.cells["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406.hMerge || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406.vMerge ? "" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406.textData ? slideDocumentDataToPlainText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406.textData).replace(/[\t\r\n]+/g, "\x20") : "").join("\x09")).join("\x0a");
}
W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464933, "type", UniverInstanceType.UNIVER_SLIDE), W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464933, "pluginName", "UniverSlidesTableUIPlugin"), W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464933, "packageName", br), W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464933, "version", xr), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464933 = oa([DependentOn(UniverLicensePlugin, UniverRenderEnginePlugin, UniverSlidesTablePlugin, UniverSlidesPlugin, UniverSlidesUIPlugin), Y(1, Inject(Injector)), Y(2, IConfigService), Y(3, IRenderManagerService), Y(4, ICommandService), Y(5, IMenuManagerService), Y(6, IShortcutService), Y(7, IUIPartsService)], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464933);
function bl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464562, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464563) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464564 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464562 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464562.bBox,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D235 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464564 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464564.aba) || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464564 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464564.ba) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464563.asc || 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D236 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464564 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464564.abd) || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464564 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464564.bd) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464563.dsc || 0;
  return var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D235 === 0 && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D236 === 0 ? null : {
    ascent: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D235,
    descent: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D236
  };
}
export { W, Ur, Wr, Vr, Hr, Gr, Kr, ri, ii, ts, cl, fs, Co, bl, ul, Vo, Ho, Uo, Sa, fa, xc, oo, fo, ko, bo, No, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A78, jo, Oo, ia, io, ic, ec, rc, Ys, fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF1, fc, mc, Us, pc };
