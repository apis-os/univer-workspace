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
import { Ys, fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF1, ts } from "./internal-core-endo.js";
function qs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464080, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464081) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464082, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464083, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464084, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464085, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464086;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464087 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464080 ?? {
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464081,
      body: {
        dataStream: "\x0d\x0a",
        paragraphs: [fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF1()],
        textRuns: []
      },
      documentStyle: {}
    }),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464088 = Js((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464082 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464087.body) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464082.dataStream),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464089 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464083 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464087.documentStyle) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464083 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464083.renderConfig) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464083.horizontalAlign,
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB58 = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464087.body,
      dataStream: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464088,
      paragraphs: Xs(Qs((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464084 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464087.body) != null && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464084 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464084.paragraphs) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464084.length ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464087.body["paragraphs"] : Ys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464088)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464089),
      textRuns: Zs(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464085 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464087.body) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464085.textRuns) ?? [])
    },
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB59 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464087.documentStyle ? {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464087.documentStyle
    } : {};
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464086 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB59.textStyle) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464086.bg && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB59.textStyle = {
    ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB59.textStyle
  }, delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB59.textStyle["bg"]), {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464087,
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464087.id ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464081,
    body: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB58,
    documentStyle: {
      ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB59,
      documentFlavor: DocumentFlavor.UNSPECIFIED
    }
  };
}
function Js(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464100) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464100) return "\x0d\x0a";
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB85 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464100.replace(/\r\n/g, "\x0d").replace(/\n/g, "\x0d");
  return var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB85.endsWith("\x0d") ? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB85 + "\x0a" : var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB85 + "\x0d\x0a";
}
function Xs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464104, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464105) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464105 === undefined ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464104 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464104.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46982 => ({
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46982,
    paragraphStyle: {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46982.paragraphStyle,
      horizontalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464105
    }
  }));
}
function Zs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464108) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464108.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46983 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46984;
    if (!((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46984 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46983.ts) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46984.bg)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46983;
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8 = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46983.ts
    };
    return delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8.bg, {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46983,
      ts: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8
    };
  });
}
function Qs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464110) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464110 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464110.length ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464110.map((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46987, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46988) => ({
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46987,
    startIndex: typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46987.startIndex == "number" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46987.startIndex : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46988,
    paragraphId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46987.paragraphId ?? createParagraphId(new Set())
  })) : [fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF1()];
}
export { qs as normalizeSlideTableCellDocumentData };
