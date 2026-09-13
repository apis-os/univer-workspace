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
import { fa } from "./internal-core-endo.js";
function da(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463401, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463402, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463403, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463404) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463402.wrap ? pa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463401, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463402, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463403, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463404) : {
    row: Math.min(Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463401.row + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463402.rowDelta), Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463403 - 1)),
    column: Math.min(Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463401.column + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463402.columnDelta), Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463404 - 1))
  };
}
function pa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463415, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463416, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463417, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463418) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D167 = Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463417),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D168 = Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463418);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463416.columnDelta !== 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463416.rowDelta === 0) {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D61 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D167 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D168,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46713 = fa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463415, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D167, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D168),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46714 = ma(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46713.row * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D168 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46713.column + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463416.columnDelta, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D61);
    return {
      row: Math.floor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46714 / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D168),
      column: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46714 % var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D168
    };
  }
  return {
    row: ma(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463415.row + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463416.rowDelta, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D167),
    column: ma(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463415.column + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463416.columnDelta, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D168)
  };
}
function ma(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463423, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463424) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463423 % var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463424 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463424) % var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463424;
}
export { da as resolveNextSlideTableKeyboardCell };
