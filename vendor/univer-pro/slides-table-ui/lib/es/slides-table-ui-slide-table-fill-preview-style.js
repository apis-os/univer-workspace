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
import { Ba } from "./slides-table-ui-slide-table-gradient-value.js";
function Ha(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463541, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463542) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463543, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463544;
  if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463541 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463541.type) === "none") return {
    backgroundColor: "transparent",
    backgroundImage: "linear-gradient(135deg, transparent 45%, #ef4444 45%, #ef4444 55%, transparent 55%)"
  };
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463545 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463541 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463543 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463541.picture) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463543.source;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463545 && /^(?:data:|https?:)/["test"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463545) ? {
    backgroundImage: 'url("' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463545 + "\x22)",
    backgroundPosition: "center",
    backgroundSize: "cover"
  } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463541 != null && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463544 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463541.gradient) != null && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463544 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463544.stops) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463544.length ? {
    backgroundImage: Ua(Ba(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463541, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463542))
  } : {
    backgroundColor: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463541 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463541.color) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463542
  };
}
function Ua(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463551) {
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB79 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463551.stops["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46733 => Wa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46733.color, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46733.opacity ?? 1) + "\x20" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46733.offset + "%").join(",\x20");
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463551.type === "radial" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463551.type === "diamond" ? "radial-gradient(circle,\x20" + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB79 + ")" : "linear-gradient(" + ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463551.angle ?? 0) + 90) % 360 + "deg, " + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB79 + ")";
}
function Wa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463553, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463554) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463554 >= 1) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463553;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463555 = new ColorKit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463553);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463555.isValid ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463555.setAlpha(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463554).toRgbString() : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463553;
}
export { Ha as getSlideTableFillPreviewStyle };
