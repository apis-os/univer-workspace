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
import { cl, ii, ri, ts } from "./internal-core-endo.js";
function Ir(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463113, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463114, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463115) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463116 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463113.rows);
  return iterateSelectedSlideTableCells(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463116, normalizeSlideTableCellRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463114), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46612) => {
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB39 = "SLIDE_TABLE_CELL_" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463113.id + "_" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611 + "_" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46612;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610.textData = Qr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610.textData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463115, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB39);
  }), {
    rows: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463116
  };
}
function Qr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463221, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463222, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463223) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463224, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463225;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463226 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463221 ?? ri(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463223)),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB48 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463226.body ?? {
      dataStream: "\x0d\x0a",
      paragraphs: [ii()],
      textRuns: []
    },
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB73 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB48.dataStream ?? "\x0d\x0a",
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D153 = Math.max(0, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB73.length - 2),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463227 = ei(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463222),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463228 = fn_L0_core_endo_routine_mut_O1_zalloc_nothrow_sigD23F({
      ...((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463224 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463226.documentStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463224.textStyle)
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463222, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463227),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A39 = (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB48.textRuns ?? []).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46624 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46625 = fn_L0_core_endo_routine_mut_O1_zalloc_nothrow_sigD23F({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46624.ts
      }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463222, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463227);
      return {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46624,
        ts: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46625
      };
    });
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463222 && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D153 > 0 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A39.length === 0 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A39.push({
    st: 0,
    ed: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D153,
    ts: {
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463227 ? {
        cl: {
          rgb: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463227
        }
      } : {}),
      textFill: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463222
    }
  }), {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463226,
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463226.id ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463223,
    body: {
      ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB48,
      dataStream: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB73,
      paragraphs: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463225 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB48.paragraphs) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463225.length ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB48.paragraphs : [ii()],
      textRuns: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A39
    },
    documentStyle: {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463226.documentStyle,
      textStyle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463228
    }
  };
}
function fn_L0_core_endo_routine_mut_O1_zalloc_nothrow_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463237, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463238, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463239) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463238 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463237.textFill = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463238 : delete var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463237.textFill, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463239 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463237.cl = {
    rgb: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463239
  } : delete var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463237.cl, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463237;
}
function ei(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463243) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463243 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463243.type === "none") return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463243 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463243.type) === "none" ? "rgba(0, 0, 0, 0)" : undefined;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463243.type === "gradient") {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463244;
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463244 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463243.gradient) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463244 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463244.stops) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463244 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463244[0]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463244.color) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463243.color;
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463243.color;
}
export { Ir as buildSlideTableTextFillPatch };
