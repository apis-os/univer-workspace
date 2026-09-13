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
import { ii, ri } from "./internal-core-endo.js";
function kr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463065, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463066, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463067) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463068 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463065.rows);
  return iterateSelectedSlideTableCells(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463068, normalizeSlideTableCellRange(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463066), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46588) => {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463067.axis === "vertical") {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586.style = mergeSlideTableCellStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586.style, {
        verticalAlign: ai(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463067.value)
      });
      return;
    }
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB35 = "SLIDE_TABLE_CELL_" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463065.id + "_" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587 + "_" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46588;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586.textData = Zr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586.textData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463067.value, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB35);
  }), {
    rows: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463068
  };
}
function Zr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463211, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463212, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463213) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463214;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463215 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463211 ?? ri(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463213)),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB44 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463215.body ?? {
      dataStream: "\x0d\x0a",
      paragraphs: [ii()],
      textRuns: []
    },
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A37 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463214 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB44.paragraphs) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463214.length ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB44.paragraphs : [ii()],
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB45 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463215.documentStyle ?? {};
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463215,
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463215.id ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463213,
    body: {
      ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB44,
      dataStream: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB44.dataStream ?? "\x0d\x0a",
      paragraphs: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A37.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46623 => ({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46623,
        paragraphStyle: {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46623.paragraphStyle,
          horizontalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463212
        }
      }))
    },
    documentStyle: {
      ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB45,
      renderConfig: {
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB45.renderConfig,
        horizontalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463212
      }
    }
  };
}
function ai(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463269) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463269 === VerticalAlign.MIDDLE ? SlideTableVerticalAlignEnum.Middle : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463269 === VerticalAlign.BOTTOM ? SlideTableVerticalAlignEnum.Bottom : SlideTableVerticalAlignEnum.Top;
}
export { kr as buildSlideTableTextAlignPatch };
