import { BoardPrintCompositionService } from "@univerjs-pro/boards-print";
import { CreateEmbedCommand, DEFAULT_EMBED_DOC_FLOW_LAYOUT_POLICY, DEFAULT_EMBED_FLOAT_LAYOUT_POLICY, DEFAULT_EMBED_TAB_LAYOUT_POLICY, EMBED_SHEETS_FLOATING_COMPONENT_KEY, EmbedFocusOwnerService, EmbedHostAdapterRegistryService, EmbedHostAnchorModelService, EmbedHostEntryEnum, EmbedModelService, EmbedReferencedUnitMaterializeService, EmbedUnitLeasePolicyService, RESOURCE_REF_FILE_KIND, RemoveEmbedCommand, SetEmbedBoundsCommand, SetEmbedDescriptorMutation, SoftDeleteEmbedDescriptorMutation, UniverEmbedPlugin, createBasesTableListBlockHostAdapterContribution, createDocsCustomBlockHostAdapterContribution, createSlidesFloatingObjectHostAdapterContribution, createSlidesPageListBlockHostAdapterContribution, fromResourceRefUnitType, getEmbedSheetsTabCustomData, getResourceRefInputUnitSelector, parseResourceRef, toResourceRefUnitType } from "@univerjs-pro/embed";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { IPrintPreparationService, PrintPreparationService } from "@univerjs-pro/print";
import { SlidePrintDrawingTransformService } from "@univerjs-pro/slides-print";
import { BaseDataModel, BaseViewType, BorderStyleTypes, BorderType, DEFAULT_WORKSHEET_COLUMN_WIDTH, DEFAULT_WORKSHEET_ROW_HEIGHT, DEFAULT_WORKSHEET_ROW_TITLE_WIDTH, DOCS_FORMULA_BAR_EDITOR_UNIT_ID_KEY, DOCS_NORMAL_EDITOR_UNIT_ID_KEY, DataStreamTreeTokenType, DependentOn, Disposable, DocumentDataModel, DocumentFlavor, EDITOR_ACTIVATED, FOCUSING_BOARD, FOCUSING_COMMON_DRAWINGS, FOCUSING_DOC, FOCUSING_FX_BAR_EDITOR, FOCUSING_SHEET, FOCUSING_SLIDE, FOCUSING_UNIT, FOCUSING_UNIVER_EDITOR, FORMULA_EDITOR_ACTIVATED, HorizontalAlign, ICommandService, IConfigService, IContextService, IImageIoService, IPermissionService, IUndoRedoService, IUniverInstanceService, ImageSourceType, Inject, Injector, LocaleService, LookUp, Plugin, RedoCommand, SHEET_EDITOR_UNITS, ThemeService, UndoCommand, UniverInstanceType, VerticalAlign, Workbook, WrapStrategy, createDefaultBaseTableSnapshot, deepCompare, generateRandomId, isInternalEditorID, merge, toDisposable, touchDependencies } from "@univerjs/core";
import { DOCS_UI_PLUGIN_CONFIG_KEY, DocCanvasPopManagerService, DocFloatMenuService, DocPageLayoutService, DocParagraphMenuService, DocPrintInterceptorService, DocRenderController, DocSelectAllCommand, DocSelectionRenderService, DocViewScaleService, IDocClipboardService, IDocEmbedInteractionBoundaryService, IDocEmbedRuntimeFocusCoordinator, IEditorService, SetDocZoomRatioCommand, SetDocZoomRatioOperation, VIEWPORT_KEY, collectDocsTableLikeEmbedChildUnitIds, createDefaultDocsTableLikeCustomBlockBleedViewport, createDocsCustomBlockSizeRefreshScheduler, resolveDocsCustomBlockRenderViewport, resolveDocsTableLikeCustomBlockBleedViewport, resolveDocsTableLikeCustomBlockContentHeight, resolveDocsTableLikeCustomBlockContentWidth, shouldRefreshDocsCustomBlockSizeForCommand } from "@univerjs/docs-ui";
import { AutoFillPopupMenu, BORDER_LINE_CHILDREN, BORDER_SIZE_CHILDREN, BorderLine, CellPopupManagerService, EditorContainer, FormulaBar, ISheetBarService, ISheetEmbedFloatingGeometryService, ISheetEmbedInteractionBoundaryService, ISheetEmbedRuntimeFocusCoordinator, ISheetEmbedRuntimeService, ISheetHostChromeOverrideService, ResetRangeTextColorCommand, SHEETS_UI_PLUGIN_CONFIG_KEY, SHEET_FOOTER_BAR_HEIGHT, SelectAllCommand, SetCellEditVisibleOperation, SetOnceFormatPainterCommand, SetRangeBoldCommand, SetRangeFontFamilyCommand, SetRangeFontSizeCommand, SetRangeTextColorCommand, SetZoomRatioCommand, SheetBar, SheetBarService, SheetCanvasPopManagerService, SheetPrintInterceptorService, SheetsUIMenuSchema } from "@univerjs/sheets-ui";
import { BuiltInUIPart, CanvasFloatDomPreviewService, CanvasPopup, CanvasPopupService, ComponentContainer, ComponentManager, ContextMenu, ContextMenuService, CopyCommand, CutCommand, DesktopRibbonService, DesktopSidebarService, EMBED_CHILD_UNIT_ID_ATTRIBUTE, EMBED_CHILD_UNIT_ID_ATTRIBUTE as eMBED_CHILD_UNIT_ID_ATTRIBUTE, FONT_SIZE_LIST, FloatDom, FontFamilyItem, HOVER_TRACK_HOST_CLASS_NAME, HoverTrack, ICanvasPopupService, IContextMenuService, IDialogService, ILayoutService, IMenuManagerService, IRibbonOverrideService, IRibbonService, IShortcutService, ISidebarService, IUIPartsService, IUIRuntimeScopeService, IconManager, KeyCode, MenuManagerPosition, MenuManagerService, MetaKeys, NativeTextEditorShortcutBehavior, PasteCommand, Ribbon, RibbonDataGroup, RibbonFormulasGroup, RibbonInsertGroup, RibbonOthersGroup, RibbonPosition, RibbonStartGroup, RibbonViewGroup, Sidebar, ToolbarButton, UI_PLUGIN_CONFIG_KEY, connectInjector, preventBrowserZoomInContainers, useComponentsOfPart, useConfigValue, useDependency, useInjector, useObservable } from "@univerjs/ui";
import { Button, ColorPicker, ConfigProvider, Dropdown, DropdownMenu, Separator, Tooltip, clsx, render, unmount } from "@univerjs/design";
import { AlignBottomIcon, AlignTopIcon, ArrowLeftIcon, ArrowRightIcon, AutowrapIcon, BoldIcon, BrushIcon, CancelMergeIcon, CheckMarkIcon, DeleteIcon, ExpandIcon, FilterIcon, FontColorDoubleIcon, HorizontalMergeIcon, HorizontallyIcon, IncreaseIcon, LeftJustifyingIcon, MergeAllIcon, MoreDownIcon, NoBorderIcon, NoColorDoubleIcon, NumberIcon, OneToOneIcon, OverflowIcon, PaintBucketDoubleIcon, PenIcon, RightJustifyingIcon, ShrinkIcon, TruncationIcon, VerticalCenterIcon, VerticalIntegrationIcon, ZoomInIcon, ZoomOutIcon } from "@univerjs/icons";
import { createElement, forwardRef, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { BehaviorSubject, EMPTY, Observable, Subject, Subscription, combineLatest, distinctUntilChanged, filter, map, merge as mergeLocal, of as of1, startWith } from "rxjs";
import { DeviceInputEventType, Documents, ICanvasColorService, IRenderManagerService, SHEET_VIEWPORT_KEY, ScrollBar, UniverPrintingContext, getNextWheelZoomRatio, setDocsCustomBlockRenderViewportProvider } from "@univerjs/engine-render";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { DocSkeletonManagerService, EMBED_DOCS_CUSTOM_BLOCK_DEFAULT_COMPONENT_KEY, canEditDocumentTargets, docDrawingPositionToTransform, getDocumentDrawingSegmentId, getDocumentEntityParentPermissionObjectIds, getDocumentEntityPermissionObjectId, isSheetLikeDocsCustomBlockChildType, resolveDocsCustomBlockSize } from "@univerjs/docs";
import { ISlideDrawingService, PageElementTypeEnum, PageTypeEnum, SetSlideZoomRatioOperation, getEmbedSlidesFloatingCustomData, getEmbedSlidesPageCustomData, slideElementToDrawing } from "@univerjs-pro/slides";
import { ActivateBaseTableOperation, ActivateBaseViewOperation, AddViewMenu, BASES_UI_PLUGIN_CONFIG_KEY, BASE_LEFT_PANEL_DEFAULT_WIDTH, BASE_TOOLBAR_EXTRA_ACTIONS, BASE_VIEW_MENU_ITEMS, BaseClipboardService, BaseDeleteConfirmDialog, BaseDuplicateTableDialog, BaseEditorService, BaseEmbedRuntimeRegistryService, BaseKeyboardOperation, BaseTableSidebarFrame, BaseToolbar, BaseUIPopupService, BaseUIStateService, BaseViewIcon, BaseViewWheelScrollService, CloseBaseActiveEditorOperation, CloseBaseContextMenuOperation, CloseBasePanelOperation, CloseBaseRecordDetailPanelOperation, GRID_ADD_FIELD_COLUMN_WIDTH, GRID_ADD_RECORD_ROW_HEIGHT, GRID_DEFAULT_COLUMN_WIDTH, GRID_HEADER_HEIGHT, GRID_ROW_HEADER_WIDTH, GRID_SUMMARY_HEIGHT, IBaseCanvasRootResolverService, IBaseClipboardService, IBaseDashboardUIExtensionRegistryService, IBaseEditorService, IBaseEmbedFloatingActiveService, IBaseEmbedFloatingGeometryService, IBaseEmbedRuntimeFocusCoordinator, IBaseEmbedRuntimeService, IBaseGlobalPortalService, IBaseHostChromeOverrideService, IBaseUIPopupService, IBaseUIStateService, IBaseViewWheelScrollService, OpenBaseActiveEditorOperation, OpenBaseContextMenuOperation, OpenBasePanelOperation, OpenBaseRecordDetailPanelOperation, RenderBaseWorkbench, SetBaseScrollOperation, SetBaseZoomOperation, StartBaseEditingCellOperation, StopBaseEditingCellOperation, ViewTabs, buildBaseProjectedRowLayout, createDefaultViewName, createScopedBaseCanvasRootResolverService, createScopedBaseGlobalPortalService, defaultPluginConfig, duplicateView, executeBaseKeyboardOperation, getBaseCanvasRoot, getBaseFloatingPosition, getBaseTableNameErrorMessage, resolveGridRowHeight, waitForBaseCanvasImages } from "@univerjs-pro/bases-ui";
import { AddWorksheetMergeAllCommand, AddWorksheetMergeCommand, AddWorksheetMergeHorizontalCommand, AddWorksheetMergeVerticalCommand, RemoveWorksheetMergeCommand, ResetBackgroundColorCommand, SetBackgroundColorCommand, SetBorderBasicCommand, SetHorizontalTextAlignCommand, SetTextWrapCommand, SetVerticalTextAlignCommand, SetWorksheetActiveOperation, SheetsSelectionsService } from "@univerjs/sheets";
import { DocsTablePassiveWheelService } from "@univerjs-pro/docs-table-ui";
import { SheetsNoteAttachmentController, SheetsNotePopupService, SheetsNoteUIMenuSchema } from "@univerjs/sheets-note-ui";
import { BoardElementType, IBoardElementService, UpdateBoardElementMutation, getEmbedBoardsFloatingCustomData, isEmbedBoardsFloatingElement } from "@univerjs-pro/boards";
import { EditorUIFloatingContainer, IEditorUIService, ISlideDrawingStateService, ISlideEmbedActivationService, ISlideEmbedFloatDomRenderer, ISlideEmbedFloatingActiveService, ISlideEmbedFocusOwnerService, ISlideEmbedMountService, ISlideEmbedRuntimeFocusCoordinator, ISlideEmbedRuntimeService, ObjectProvider, SLIDE_PAGE_RECT_KEY, SlideEmbedChildWorkbench, SlideEmbedFloatingPreview, SlideEmbedReadonlyFloatingPreview, SlideInsertService, SlideThumbnailItem, resolveSlideLogicalPageSize } from "@univerjs-pro/slides-ui";
import { CreateBaseTableCommand, CreateBaseViewCommand, DeleteBaseTableCommand, DeleteBaseViewCommand, IBaseProjectionService, IBaseViewRegistryService, MoveBaseViewCommand, RenameBaseTableCommand, RenameBaseViewCommand, canEditBaseTargets, copyBaseTableSnapshot, createUniqueBaseTableName, getBaseFieldPermissionObjectId, getBaseRecordPermissionObjectId, getBaseTablePermissionObjectId, getBaseViewPermissionObjectId, validateBaseTableName } from "@univerjs-pro/bases";
import { createPortal } from "react-dom";
import { BOARDS_UI_PLUGIN_CONFIG_KEY, BoardDomLayerService, BoardShapeTextEditorContainer, BoardTextEditingService, BoardViewportService, BoardWorkbench, IBoardElementStateService, IBoardEmbedRuntimeFocusCoordinator, IBoardUIStateService, UniverBoardsUIPlugin, getBoardPointFromClient, resolveBoardInteractionConfig, resolveBoardWheelViewportAction } from "@univerjs-pro/boards-ui";
import { SheetsChartUIMenuSchema } from "@univerjs-pro/sheets-chart-ui";
import { SheetsOutlineUIMenuSchema } from "@univerjs-pro/sheets-outline-ui";
import { SheetsPivotTableUIMenuSchema } from "@univerjs-pro/sheets-pivot-ui";
import { SheetsPrintMenuSchema } from "@univerjs-pro/sheets-print";
import { SheetsShapeUIContextualRibbonSchema, SheetsShapeUIMenuSchema } from "@univerjs-pro/sheets-shape-ui";
import { SheetsSparklineUIMenuSchema } from "@univerjs-pro/sheets-sparkline-ui";
import { SheetsConditionalFormattingUIMenuSchema } from "@univerjs/sheets-conditional-formatting-ui";
import { SheetsDataValidationUIMenuSchema } from "@univerjs/sheets-data-validation-ui";
import { SheetsDrawingUIMenuSchema } from "@univerjs/sheets-drawing-ui";
import { SheetsFilterUIMenuSchema } from "@univerjs/sheets-filter-ui";
import { SheetsHyperLinkUIMenuSchema } from "@univerjs/sheets-hyper-link-ui";
import { SheetsNumfmtUIMenuSchema } from "@univerjs/sheets-numfmt-ui";
import { SheetsSortUIMenuSchema } from "@univerjs/sheets-sort-ui";
import { SheetsTableUIMenuSchema } from "@univerjs/sheets-table-ui";
import { SheetsThreadCommentUIMenuSchema } from "@univerjs/sheets-thread-comment-ui";
import { cl } from "./embed-ui-embed-mount.js";
import { Ic, Rc, zc } from "./embed-ui-embed-child-view-registry.js";
import { Bf, Cd, Gy, Mm, Tg, Vf, Vy, Wy, Xm, Yc, am, cd, em, ey, im, lm, lp, qg, rm, sm, tm, var_L0_core_endo_options_pure_O1_zalloc_nothrow_sig29DC, wd, yy } from "./embed-ui-embed-uiplugin.js";
import { Ss, bs, xs } from "./embed-ui-embed-host-menu-override.js";
import { dl } from "./embed-ui-embed-activation.js";
import { gu } from "./embed-ui-embed-fullscreen.js";
import { ud } from "./embed-ui-embed-host-restore.js";
var fs = "@univerjs-pro/embed-ui",
  ps = "1.0.0-insiders.20260907-70fc579";
function ms(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464635, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464636) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464635.matches("[" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464636 + "]") ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464635 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464635.querySelector("[" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464636 + "]") ?? undefined;
}
;
function hs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464639) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A56 = [];
  return gs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464639, "data-embed-content-root", "univer-overflow-hidden", var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A56), gs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464639, "data-embed-canvas-root", "univer-pointer-events-none\x20univer-overflow-hidden\x20[&>*]:univer-pointer-events-auto", var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A56), gs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464639, "data-embed-overlay-root", "univer-pointer-events-none [&>*]:univer-pointer-events-auto", var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A56), gs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464639, "data-embed-popup-root", "univer-pointer-events-none [&>*]:univer-pointer-events-auto", var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A56), toDisposable(() => {
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A56.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185.remove());
  });
}
;
function gs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464641, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464642, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464643, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464644) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464645 = ms(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464641, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464642);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464645) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464645;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464646 = document.createElement("div");
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464646.setAttribute(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464642, "true"), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464646.setAttribute("data-embed-runtime-slot-owner", "embed-ui"), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464646.className = "univer-box-border univer-absolute univer-inset-0 " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464643, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464641.appendChild(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464646), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464644.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464646), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464646;
}
;
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F6(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464653) {
  "@babel/helpers - typeof";

  return fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F6 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46919) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46919;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46921) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46921 && typeof Symbol == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46921.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46921 !== Symbol.prototype ? "symbol" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46921;
  }, fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F6(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464653);
}
;
function vs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464655, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464656) {
  if (fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F6(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464655) != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464655) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464655;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464657 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464655[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464657 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464658 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464657.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464655, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464656 || "default");
    if (fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F6(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464658) != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464658;
    throw TypeError("@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.");
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464656 === "string" ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464655);
}
;
function ys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464663) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464664 = vs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464663, "string");
  return fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F6(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464664) == "symbol" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464664 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464664 + "";
}
;
function Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464667, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464668, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464669) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464668 = ys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464668)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464667 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464667, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464668, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464669,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464667[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464668] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464669, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464667;
}
const ws = "data-embed-runtime-focus-role";
var X = class {
  constructor() {
    Y(this, "_leases", new Map()), Y(this, "_elements", new Map()), Y(this, "_runtimeScopes", new Map()), Y(this, "_leaseSequence", 0), Y(this, "runtimeFocusChanged$", new Subject()), Y(this, "runtimeSessionChanged$", new Subject());
  }
  acquireLease(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46967) {
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13 = {
        role: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46967.role,
        owner: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46967.owner,
        sessionMode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46967.sessionMode,
        hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46967.hostUnitId,
        childUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46967.childUnitId,
        childType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46967.childType,
        associatedChildUnitIds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46967.associatedChildUnitIds,
        sequence: ++this._leaseSequence
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46968 = this._leases["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46967.embedId);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46968 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46968 = new Set(), this._leases["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46967.embedId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46968)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46968.add(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13.role !== "runtime" && this._notifyRuntimeFocusChanged(), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13.role === "child-session" && this._notifyRuntimeSessionChanged(), toDisposable(() => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46968 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46968.delete(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46968 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46968.size) === 0 && this._leases["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46967.embedId), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13.role !== "runtime" && this._notifyRuntimeFocusChanged(), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13.role === "child-session" && this._notifyRuntimeSessionChanged();
    });
  }
  hasChildInteractionLease(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46971) {
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46971) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46972 = this._leases["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46971);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46972 && [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46972].some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186.role !== "runtime") ? true : this.containsElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46971, this._getActiveElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46971));
  }
  hasBlockingChildFocusLease(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46975, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46976) {
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46975) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46977 = this._leases["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46975);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46977 && [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46977].some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187 => this._isBlockingLease(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46976)) ? true : this.containsElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46975, this._getActiveElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46975));
  }
  hasAnyChildInteractionLease() {
    return [...this._leases["values"]()].some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188 => [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188].some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632.role !== "runtime")) || this._getActiveOwnedRuntimeFocusInfo() != null;
  }
  hasAnyBlockingChildFocusLease(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46981) {
    if ([...this._leases["values"]()].some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189 => [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189].some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633 => this._isBlockingLease(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46981)))) return true;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46982 = this._getActiveOwnedRuntimeFocusInfo();
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46982 != null && this._isBlockingRole(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46982.role);
  }
  hasHostPreservingChildFocusLease(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46985, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46986) {
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46985) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46987 = this._leases["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46985);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46987 && [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46987].some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190 => this._isHostPreservingLease(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46986)) ? true : this.containsElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46985, this._getActiveElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46985));
  }
  hasAnyHostPreservingChildFocusLease(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46991) {
    return [...this._leases["values"]()].some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191 => [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191].some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634 => this._isHostPreservingLease(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46991))) ? true : this._getActiveOwnedRuntimeFocusInfo() != null;
  }
  hasHostPreservingChildFocusLeaseForHost(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46993, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994) {
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46993) return this.hasAnyHostPreservingChildFocusLease(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994);
    if ([...this._leases["values"]()].some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192 => [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192].some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635 => this._isHostPreservingLease(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994) && this._leaseAppliesToHostUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46993)))) return true;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46995 = this._getActiveOwnedRuntimeFocusInfo();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46995) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46996 = this._leases["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46995.embedId);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46996 && [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46996].some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193 => this._isHostPreservingLease(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994) && this._leaseAppliesToHostUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46993)) ? true : this._ownedRuntimeFocusAppliesToHost(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46995.embedId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46993);
  }
  isChildUnitInActiveSession(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461001) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461001 ? [...this._leases["values"]()].some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194 => [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194].some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636 => this._leaseAppliesToChildUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461001) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636.role !== "runtime")) : false;
  }
  registerRuntimeScope(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003) {
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB15 = {
        hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003.hostUnitId,
        childUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003.childUnitId,
        childType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003.childType,
        sessionMode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003.sessionMode,
        sequence: ++this._leaseSequence
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461004 = this._runtimeScopes["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003.embedId);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461004 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461004 = new Set(), this._runtimeScopes["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003.embedId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461004)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461004.add(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB15), this._notifyRuntimeFocusChanged(), this._notifyRuntimeSessionChanged(), toDisposable(() => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461004 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461004.delete(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB15), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461004 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461004.size) === 0 && this._runtimeScopes["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003.embedId), this._notifyRuntimeFocusChanged(), this._notifyRuntimeSessionChanged();
    });
  }
  resolveRuntimeScopeByChildUnitId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461007) {
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461007) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461008;
    for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196] of this._runtimeScopes) for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637.childUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461007 && (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461008 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637.sequence > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461008.scope["sequence"]) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461008 = {
      embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195,
      scope: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637
    });
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461008) {
      let {
        embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197,
        scope: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461008;
      return {
        embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197,
        hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198.hostUnitId,
        childUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198.childUnitId,
        childType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198.childType,
        sessionMode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46198.sessionMode
      };
    }
  }
  resolveActiveChildSessionRuntimeScope() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461011;
    for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200] of this._leases) for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200) {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638.role !== "child-session" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638.childUnitId) continue;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465 = this._getChildSessionPriority(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638);
      (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461011 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465 > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461011.priority || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461011.priority && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638.sequence > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461011.lease["sequence"]) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461011 = {
        embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199,
        lease: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638,
        priority: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465
      });
    }
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461011 ? {
      embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461011.embedId,
      hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461011.lease["hostUnitId"],
      childUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461011.lease["childUnitId"],
      childType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461011.lease["childType"],
      sessionMode: this._resolveChildSessionMode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461011.lease)
    } : undefined;
  }
  isChildUnitRuntimeEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461013, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461014, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461015) {
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461013) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461016 = this._getOwnedEmbedIdFromTarget(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461014, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461015);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461016 ? this._ownedEmbedAppliesToChildUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461016, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461013) : false;
  }
  shouldSuppressHostInteraction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461021, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461022, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461023, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461024) {
    return this.isChildUnitRuntimeEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461021, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461022, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461023) || this.isChildUnitInActiveSession(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461021) ? false : this.hasHostPreservingChildFocusLeaseForHost(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461021, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461024);
  }
  registerElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030 = this._elements["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029.embedId);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030 = new Set(), this._elements["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029.embedId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029.element);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461031 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029.element["getAttribute"](ws);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029.element["setAttribute"](ws, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029.role), this._notifyRuntimeFocusChanged(), toDisposable(() => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030.delete(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029.element), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030.size) === 0 && this._elements["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029.embedId), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461031 == null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029.element["removeAttribute"](ws) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029.element["setAttribute"](ws, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461031), this._notifyRuntimeFocusChanged();
    });
  }
  listElements(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461035) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461035 ? [...(this._elements["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461035) ?? [])] : [];
  }
  containsElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461037, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461038, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461039) {
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461037) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461040 = this._elements["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461037),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461041 = typeof (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461039 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461039.composedPath) == "function" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461039.composedPath() : undefined;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461040 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461040.size && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461041 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461041.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201 instanceof HTMLElement && this._containsRegisteredElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461040, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461041 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461041.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202 instanceof HTMLElement && this._isOwnedBoundaryElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461037, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202)) ? true : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461038 instanceof HTMLElement && (!!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461040 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461040.size) && this._containsRegisteredElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461040, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461038) || this._isOwnedBoundaryElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461037, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461038));
  }
  _containsRegisteredElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461047, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461048) {
    return [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461047].some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461048 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203.contains(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461048));
  }
  _isBlockingLease(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461052) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051.owner && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461052 != null && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461052.ignoreOwners) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053.includes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051.owner) ? false : this._isBlockingRole(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051.role);
  }
  _isHostPreservingLease(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461057, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461058) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461059;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461057.owner && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461058 != null && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461059 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461058.ignoreOwners) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461059.includes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461057.owner) ? false : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461057.role !== "runtime";
  }
  _leaseAppliesToHostUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461063, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461064) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461063.hostUnitId == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461063.hostUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461064;
  }
  _ownedRuntimeFocusAppliesToHost(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461067, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461068) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461069 = this._runtimeScopes["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461067);
    return !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461069 && [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461069].some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204.hostUnitId == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204.hostUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461068);
  }
  _leaseAppliesToChildUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461073, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461074) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461075;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461073.childUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461074 || ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461075 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461073.associatedChildUnitIds) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461075.includes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461074)) === true;
  }
  _ownedEmbedAppliesToChildUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461079, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461080) {
    if ([...(this._runtimeScopes["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461079) ?? [])].some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205.childUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461080)) return true;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461081 = this._leases["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461079);
    return !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461081 && [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461081].some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206 => this._leaseAppliesToChildUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461080));
  }
  _isBlockingRole(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461085) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461085 !== "runtime";
  }
  _getChildSessionPriority(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461087) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461088 = this._resolveChildSessionMode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461087);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461088 === "child-fullscreen" ? 30 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461088 === "child-keyboard" ? 20 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461088 === "child-tab" ? 10 : 0;
  }
  _resolveChildSessionMode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461091) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461091.sessionMode ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461091.sessionMode : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461091.owner === "fullscreen-runtime" ? "child-fullscreen" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461091.owner === "stage2-runtime" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461091.owner === "doc-block-stage2-runtime" ? "child-keyboard" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461091.owner === "tab-peer-runtime" ? "child-tab" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461091.role === "child-session" ? "child-keyboard" : "host-passive";
  }
  _isOwnedBoundaryElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461093, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461094) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461094.closest("[" + Z + "=\x22" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461093 + "\x22]") != null;
  }
  _getOwnedEmbedIdFromTarget(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461097, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461098) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461099 = typeof (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461098 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461098.composedPath) == "function" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461098.composedPath() : undefined,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461100 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461099 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461099.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207 => this._isHTMLElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207.hasAttribute("data-embed-interaction-boundary-owner"))) ?? (this._isHTMLElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461097) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461097.closest("[data-embed-interaction-boundary-owner]") ?? undefined : undefined);
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461100 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461100.getAttribute("data-embed-interaction-boundary-owner")) ?? this._getOwnedEmbedIdFromEventPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461098);
  }
  _getOwnedEmbedIdFromEventPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461105) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461106 = this._getEventClientPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461105);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461106) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461107;
    for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209] of this._elements) for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639.getBoundingClientRect();
      if (!this._rectContainsPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461106.clientX, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461106.clientY)) continue;
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466.width * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466.height;
      (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461107 || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461107.area) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461107 = {
        embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208,
        area: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D
      });
    }
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461107 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461107.embedId;
  }
  _getEventClientPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461111) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461112 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461111;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461112) {
      if (Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461112.clientX) && Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461112.clientY)) return {
        clientX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461112.clientX,
        clientY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461112.clientY
      };
      if (Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461112.x) && Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461112.y)) return {
        clientX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461112.x,
        clientY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461112.y
      };
    }
  }
  _rectContainsPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461115, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461116, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461117) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461115.width > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461115.height > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461116 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461115.left && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461116 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461115.right && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461117 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461115.top && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461117 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461115.bottom;
  }
  _getActiveOwnedRuntimeFocusInfo() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461121;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461122 = this._getAnyActiveElement();
    if (!this._isHTMLElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461122)) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461123 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461122.closest("[" + Z + "]");
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461123) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461124 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461123.getAttribute(Z),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461125 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461121 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461122.closest("[data-embed-runtime-focus-role]")) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461121.getAttribute(ws);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461124 && this._isRuntimeFocusRole(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461125) ? {
      embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461124,
      role: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461125
    } : undefined;
  }
  _isHTMLElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461131) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461132;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461131) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461133 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461132 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461131.ownerDocument) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461132.defaultView;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461133 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461131 instanceof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461133.HTMLElement : typeof HTMLElement < "u" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461131 instanceof HTMLElement;
  }
  _isRuntimeFocusRole(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461137) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461137 === "runtime" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461137 === "child-session" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461137 === "child-editor" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461137 === "child-popup" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461137 === "floating-menu";
  }
  _getAnyActiveElement() {
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210 of this._elements["values"]()) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461139;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461139 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210.values().next().value) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461139.ownerDocument;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640.activeElement) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640.activeElement;
    }
    return typeof document > "u" ? null : document.activeElement;
  }
  _getActiveElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461141) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461142;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461143 = this._elements["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461141),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461144 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461143 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461142 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461143.values().next().value) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461142.ownerDocument;
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461144 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461144.activeElement) ?? (typeof document > "u" ? null : document.activeElement);
  }
  _notifyRuntimeFocusChanged() {
    this.runtimeFocusChanged$["next"]();
  }
  _notifyRuntimeSessionChanged() {
    this.runtimeSessionChanged$["next"]();
  }
};
const Z = "data-embed-interaction-boundary-owner",
  Ts = "univer-pointer-events-none";
var Es = class {
    constructor() {
      Y(this, "_roots", new Map()), Y(this, "_childUnitIds", new Map()), Y(this, "_portalObservers", new WeakMap()), Y(this, "_closedPortalInputGuards", new WeakSet()), Y(this, "_activePortalOwners", new WeakMap()), Y(this, "_pendingPortalOwner", undefined);
    }
    registerRoot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461149, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461150, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461151) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461152 = this._roots["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461149);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461152 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461152 = new Set(), this._roots["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461149, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461152)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461151 && this._childUnitIds["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461149, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461151), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461152.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461150);
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461153 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461150.getAttribute(Z),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461154 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461150.getAttribute(EMBED_CHILD_UNIT_ID_ATTRIBUTE);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461150.setAttribute(Z, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461149), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461151 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461150.setAttribute(EMBED_CHILD_UNIT_ID_ATTRIBUTE, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461151);
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461155 = this._registerRootPopupDescendantFocusRoles(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461149, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461150),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461156 = () => this._claimBodyPortals(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461149, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461150.ownerDocument);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461150.addEventListener("pointerdown", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461156, true), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461150.addEventListener("mousedown", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461156, true), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461150.addEventListener("focusin", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461156, true), toDisposable(() => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461155.dispose(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461150.removeEventListener("pointerdown", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461156, true), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461150.removeEventListener("mousedown", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461156, true), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461150.removeEventListener("focusin", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461156, true), ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211 = this._pendingPortalOwner) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211.embedId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461149 && this._pendingPortalOwner["document"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461150.ownerDocument && (this._pendingPortalOwner = undefined), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461152 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461152.delete(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461150), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461152 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461152.size === 0 && (this._roots["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461149), this._childUnitIds["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461149)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461153 == null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461150.removeAttribute(Z) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461150.setAttribute(Z, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461153), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461154 == null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461150.removeAttribute(EMBED_CHILD_UNIT_ID_ATTRIBUTE) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461150.setAttribute(EMBED_CHILD_UNIT_ID_ATTRIBUTE, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461154);
      });
    }
    _registerRootPopupDescendantFocusRoles(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461165, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461166) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461167 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461166.ownerDocument["defaultView"],
        var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59 = new Map(),
        var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B591 = new Map(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461168,
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A21 = false,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461169 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213 => {
          var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213) || var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213.getAttribute(Z)), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B591.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213) || var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B591.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213.getAttribute(ws));
        },
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461170 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215 => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461169(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215.setAttribute(Z, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461165), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215.setAttribute(ws, "child-popup");
        },
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461171 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217 => {
          this._isUniverPortalTreeElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461170(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217.querySelectorAll("*").forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461170));
        },
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461172 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219 => {
          var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A21 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461171(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219.querySelectorAll("*").forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461171(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641)));
        };
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461172(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461166), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461167 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461167.MutationObserver && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461168 = new var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461167["MutationObserver"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221 => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642 => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642.addedNodes["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467 => {
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467 instanceof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461167.HTMLElement && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461172(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467);
          });
        });
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461168.observe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461166, {
        childList: true,
        subtree: true
      })), toDisposable(() => {
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A21 = true, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461168 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461168.disconnect(), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645) => {
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644 == null) {
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645.removeAttribute(Z);
            return;
          }
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645.setAttribute(Z, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644);
        }), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B591.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649) => {
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648 == null) {
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649.removeAttribute(ws);
            return;
          }
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649.setAttribute(ws, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648);
        });
      });
    }
    registerOwnedElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461181, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461182) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461183 = this._roots["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461181);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461183 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461183 = new Set(), this._roots["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461181, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461183)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461183.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461182);
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461184 = this._markInteractionBoundaryOwnerTree(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461181, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461182);
      return toDisposable(() => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461183 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461183.delete(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461182), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461183 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461183.size === 0 && this._roots["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461181), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461184.dispose();
      });
    }
    contains(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461189, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461190, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461191) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461192 = typeof (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461191 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461191.composedPath) == "function" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461191.composedPath() : undefined;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461192 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461192.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223 instanceof HTMLElement && this._isOwnedElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461189, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223))) return true;
      if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461190 instanceof HTMLElement)) return false;
      if (this._isOwnedElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461189, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461190)) return true;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461189) return Array.from(this._roots["values"]()).some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224 => [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224].some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652.isConnected && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652.contains(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461190)));
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461193 = this._roots["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461189);
      return !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461193 && [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461193].some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225.isConnected && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225.contains(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461190));
    }
    hasRecentInteraction(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461199) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461200 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461199 ? this._activePortalOwners["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461199) : typeof document < "u" ? this._activePortalOwners["get"](document) : undefined;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461200 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461200.length) return true;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461201 = this._pendingPortalOwner;
      return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461201 || Date.now() > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461201.expiresAt ? false : !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461199 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461201.document === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461199;
    }
    hasRecentInteractionFor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461205, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461206) {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461205) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461207 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461206 ? this._activePortalOwners["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461206) : typeof document < "u" ? this._activePortalOwners["get"](document) : undefined;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461207 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461207.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226.embedId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461205)) return true;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461208 = this._pendingPortalOwner;
      return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461208 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461208.embedId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461205 || Date.now() > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461208.expiresAt ? false : !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461206 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461208.document === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461206;
    }
    closeOwnedFloatingSurfaces(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461213, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461214) {
      !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461213 || !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461214 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461214.body) || this._collectOwnedFloatingSurfaceRoots(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461213, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461214).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46227 => this._dispatchEscapeToFloatingSurface(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46227, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461214));
    }
    activatePortalScope(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461217, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461218, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461219 = {}) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461220;
      if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461218 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461218.body)) return toDisposable(() => {});
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221 = Symbol(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461217),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8 = this._activePortalOwners["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461218) ?? [],
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A23 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461219.includeAppShellEditorPortal ?? true;
      return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8.push({
        embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461217,
        includeAppShellEditorPortal: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A23,
        token: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221
      }), this._activePortalOwners["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461218, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8), this._ensurePortalObserver(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461218), this._markExistingBodyPortals(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461217, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461218, {
        includeAppShellEditorPortal: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A23,
        allowOwnedPortalReassignment: true,
        allowDirectBodyPortal: false
      }), this._cleanupOrdinaryBodyChromeClaims(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461217, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461218), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461220 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461218.defaultView) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461220.setTimeout(() => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228 = this._getLatestActivePortalOwner(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461218);
        (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228.embedId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461217 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228.token === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221 && (this._markExistingBodyPortals(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461217, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461218, {
          includeAppShellEditorPortal: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A23,
          allowOwnedPortalReassignment: true,
          allowDirectBodyPortal: false
        }), this._cleanupOrdinaryBodyChromeClaims(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461217, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461218));
      }, 0), toDisposable(() => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230 = this._activePortalOwners["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461218),
          var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A9 = false;
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230) {
          let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230.findIndex(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469.embedId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461217 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469.token === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221);
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 >= 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230.splice(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1, 1), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A9 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.embedId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461217), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230.length === 0 && this._activePortalOwners["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461218);
        }
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A9 || this._releaseBodyPortalClaims(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461217, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461218);
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231 = this._getLatestActivePortalOwner(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461218);
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231 && (this._markExistingBodyPortals(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231.embedId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461218, {
          includeAppShellEditorPortal: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231.includeAppShellEditorPortal,
          allowOwnedPortalReassignment: true,
          allowDirectBodyPortal: false
        }), this._cleanupOrdinaryBodyChromeClaims(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231.embedId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461218));
      });
    }
    _collectOwnedFloatingSurfaceRoots(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461227, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461228) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461229;
      let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299 = new Set(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461230 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234 => {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235 = this._resolveFloatingSurfaceRoot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234);
          !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235 || !this._isOwnedElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461227, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235) || var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235);
        };
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461228.body["querySelectorAll"]("[" + Z + "=\x22" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461227 + "\x22]").forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461230), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461229 = this._roots["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461227)) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461229.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46238 => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46238.isConnected && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461230(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46238), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46238.querySelectorAll("*").forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461230));
      }), [...var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299].sort((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240.contains(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241) ? 1 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241.contains(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240) ? -1 : 0);
    }
    _resolveFloatingSurfaceRoot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461235) {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461235.closest('[data-embed-floating-menu="true"], [data-embed-floating-menu-popup="true"]') && this._isUniverPortalTreeElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461235)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461235.closest('.univer-popup, .univer-popover, .univer-dropdown, [data-radix-popper-content-wrapper], [data-u-comp="rect-popup"], [role="dialog"], [role="listbox"], [role="menu"], [role="tooltip"]') ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461235;
    }
    _dispatchEscapeToFloatingSurface(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461237, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461238) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461239 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461238.defaultView,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461240 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461238.activeElement instanceof HTMLElement && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461237.contains(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461238.activeElement) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461238.activeElement : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461237,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461241 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461239 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461239.KeyboardEvent ? new var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461239["KeyboardEvent"]("keydown", {
          key: "Escape",
          code: "Escape",
          bubbles: true,
          cancelable: true
        }) : new Event("keydown", {
          bubbles: true,
          cancelable: true
        });
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461240.dispatchEvent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461241);
    }
    _isOwnedElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461247, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461248) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461249 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461248.closest("[" + Z + "]"),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461250 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461249 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461249.getAttribute(Z);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461250 && (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461247 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461250 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461247)) return true;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461247) return Array.from(this._roots["values"]()).some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242 => [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242].some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461248 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653.contains(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461248)));
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461251 = this._roots["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461247);
      return !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461251 && [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461251].some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461248 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243.contains(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461248));
    }
    _claimBodyPortals(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461257, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461258) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461259;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461258 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461258.body && (this._pendingPortalOwner = {
        embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461257,
        document: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461258,
        expiresAt: Date.now() + 1000
      }, this._ensurePortalObserver(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461258), this._markExistingBodyPortals(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461257, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461258, {
        includeAppShellEditorPortal: false
      }), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461259 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461258.defaultView) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461259.setTimeout(() => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244 = this._pendingPortalOwner;
        (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244.embedId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461257 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244.document === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461258 && Date.now() <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244.expiresAt && this._markExistingBodyPortals(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461257, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461258, {
          includeAppShellEditorPortal: false
        });
      }, 0));
    }
    _ensurePortalObserver(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461263) {
      if (this._portalObservers["has"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461263) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461263.body) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461264 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461263.defaultView;
      if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461264 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461264.MutationObserver)) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461265 = new var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461264["MutationObserver"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246 => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247 = this._getBodyPortalOwner(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461263);
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247) return;
        let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB3 = {
          includeAppShellEditorPortal: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247.includeAppShellEditorPortal,
          allowOwnedPortalReassignment: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247.stable,
          allowDirectBodyPortal: !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247.stable
        };
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654 => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654.type === "attributes" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654.target instanceof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461264.HTMLElement && (this._markBodyPortalOwner(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654.target, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247.embedId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461263, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB3), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654.attributeName === "data-state" && this._syncClosedPortalInputGuard(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654.target, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247.embedId)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654.addedNodes["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611 => {
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611 instanceof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461264.HTMLElement && (this._markBodyPortalOwner(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247.embedId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461263, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB3), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.querySelectorAll("*").forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 => {
              this._markBodyPortalOwner(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247.embedId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461263, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB3);
            }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.hasAttribute("data-state") && this._syncClosedPortalInputGuard(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247.embedId), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.querySelectorAll("[data-state]").forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 => {
              this._syncClosedPortalInputGuard(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247.embedId);
            }));
          });
        }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247.stable && this._cleanupOrdinaryBodyChromeClaims(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247.embedId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461263);
      });
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461265.observe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461263.body, {
        attributeFilter: ["class", "data-state", "data-u-comp", "id", "role", "style"],
        attributes: true,
        childList: true,
        subtree: true
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461265.takeRecords(), this._portalObservers["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461263, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461265);
    }
    _markBodyPortalOwner(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461269, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461270, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461271, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461272 = {}) {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461272.allowDirectBodyPortal === false && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461269.parentElement === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461271.body && !this._isUniverPortalCandidate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461269) && !this._isAppShellEditorPortalCandidate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461269) || this._isBodyPortalCandidate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461269, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461271, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461272) && (!this._isAppShellEditorPortalCandidate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461269) && this._isDetachedOffscreenPortalCandidate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461269, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461271) || (this._blurActiveElementBeforePortalReassignment(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461269, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461270, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461271), this._markInteractionBoundaryOwnerTree(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461270, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461269, {
        transient: true
      }), this._markRuntimeFocusRole(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461269, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461272)));
    }
    _markExistingBodyPortals(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461277, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461278, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461279 = {}) {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461278.body["querySelectorAll"]("*").forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250 => {
        this._markBodyPortalOwner(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461277, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461278, {
          includeAppShellEditorPortal: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461279.includeAppShellEditorPortal,
          allowOwnedPortalReassignment: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461279.allowOwnedPortalReassignment,
          allowDirectBodyPortal: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461279.allowDirectBodyPortal
        });
      });
    }
    _isBodyPortalCandidate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461283, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461284, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461285 = {}) {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461284.body["contains"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461283)) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461286 = !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461285.includeAppShellEditorPortal && this._isAppShellEditorPortalCandidate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461283),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461287 = this._isUniverPortalCandidate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461283);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461285.allowOwnedPortalReassignment && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461286 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461283.closest("[data-embed-interaction-boundary-owner]") || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461283.id === "app") return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461288 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461283.parentElement;
      return !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461285.allowDirectBodyPortal && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461288 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461284.body || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461288 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461288.closest("[data-radix-popper-content-wrapper]")) != null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461287 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461286;
    }
    _isAppShellEditorPortalCandidate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461296, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297;
      return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461296 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295.parentElement) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461296.id) !== "app" && ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295.closest("#app")) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297.parentElement) !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295.ownerDocument["body"] ? false : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295.id["startsWith"]("univer-doc-selection-container-__INTERNAL_EDITOR__") || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295.id["startsWith"]("__editor___INTERNAL_EDITOR__") || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295.closest('[id^="univer-doc-selection-container-__INTERNAL_EDITOR__"]') != null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295.closest('[id^="__editor___INTERNAL_EDITOR__"]') != null;
    }
    _isHostDocEditorPortal(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461301) {
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461301.id["startsWith"]("__editor_docs-") || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461301.id["startsWith"]("univer-doc-selection-container-docs-") || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461301.closest('[id^="univer-doc-selection-container-docs-"]') != null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461301.closest('[id^="__editor_docs-"]') != null;
    }
    _isUniverPortalCandidate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461303) {
      let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461303.className == "string" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461303.className : "";
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461303.getAttribute("data-u-comp") === "rect-popup" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461303.classList["contains"]("univer-popup") || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461303.classList["contains"]("univer-popover") || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461303.classList["contains"]("univer-dropdown") || /\buniver-(popup|popover|dropdown|calendar|tooltip|menu)\b/["test"](var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB)) return true;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461304 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461303.getAttribute("role");
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461304 === "dialog" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461304 === "listbox" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461304 === "menu" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461304 === "tooltip" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461303.hasAttribute("data-radix-popper-content-wrapper");
    }
    _isDetachedOffscreenPortalCandidate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461307, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461308) {
      if (!this._isUniverPortalTreeElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461307)) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461309 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461307.closest('.univer-popup, .univer-popover, .univer-dropdown, [data-radix-popper-content-wrapper], [data-u-comp="rect-popup"], [role="dialog"], [role="listbox"], [role="menu"], [role="tooltip"]') ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461307,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461310 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461309.closest("#app") ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461309.parentElement;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461309.parentElement !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461308.body && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461310 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461310.parentElement) !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461308.body) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461311 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461308.defaultView;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461311) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461312 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461309.getBoundingClientRect();
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461312.right < 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461312.bottom < 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461312.left > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461311.innerWidth || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461312.top > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461311.innerHeight ? true : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461312.width <= 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461312.height <= 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461312.left < 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461312.top < 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461312.left > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461311.innerWidth || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461312.top > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461311.innerHeight : false;
    }
    _markRuntimeFocusRole(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461319, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461320 = {}) {
      let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461320.includeAppShellEditorPortal && this._isAppShellEditorPortalCandidate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461319) ? "child-editor" : this._isUniverPortalTreeElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461319) ? "child-popup" : undefined;
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461319.setAttribute(ws, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461319.querySelectorAll("*").forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252 => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252.setAttribute(ws, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2);
      }));
    }
    _syncClosedPortalInputGuard(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461323, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461324) {
      let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A25 = this._isUniverPortalCandidate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461323) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461323.closest("[data-radix-popper-content-wrapper]") != null,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461325 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461323.getAttribute("data-embed-interaction-boundary-owner") === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461324 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461323.getAttribute("data-state") === "closed" && var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A25,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461326 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461323.closest("[data-radix-popper-content-wrapper]") ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461323;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461325) {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461326.classList["contains"](Ts) || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461326.classList["add"](Ts), this._closedPortalInputGuards["add"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461326));
        return;
      }
      this._clearClosedPortalInputGuard(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461326);
    }
    _clearClosedPortalInputGuard(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461331) {
      this._closedPortalInputGuards["has"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461331) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461331.classList["remove"](Ts), this._closedPortalInputGuards["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461331));
    }
    _markInteractionBoundaryOwnerTree(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461333, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461334, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461335 = {}) {
      let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B594 = new Map(),
        var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B595 = new Map(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461336 = this._childUnitIds["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461333),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461337 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254 => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461335.transient || (var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B594.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254.getAttribute(Z)), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B595.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254.getAttribute(EMBED_CHILD_UNIT_ID_ATTRIBUTE))), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254.setAttribute(Z, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461333), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461336 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254.setAttribute(EMBED_CHILD_UNIT_ID_ATTRIBUTE, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461336);
        };
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461337(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461334), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461334.querySelectorAll("*").forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461337), toDisposable(() => {
        var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B594.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657) => {
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656 == null) {
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657.removeAttribute(Z);
            return;
          }
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657.setAttribute(Z, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656);
        }), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B595.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661) => {
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660 == null) {
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661.removeAttribute(EMBED_CHILD_UNIT_ID_ATTRIBUTE);
            return;
          }
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661.setAttribute(EMBED_CHILD_UNIT_ID_ATTRIBUTE, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660);
        });
      });
    }
    _isUniverPortalTreeElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461343) {
      return this._isUniverPortalCandidate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461343) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461343.closest(".univer-popup,\x20.univer-popover,\x20.univer-dropdown,\x20[data-radix-popper-content-wrapper],\x20[data-u-comp=\x22rect-popup\x22],\x20[role=\x22dialog\x22],\x20[role=\x22listbox\x22],\x20[role=\x22menu\x22],\x20[role=\x22tooltip\x22]") != null;
    }
    _getBodyPortalOwner(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461345) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461346 = this._getLatestActivePortalOwner(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461345);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461346) return {
        embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461346.embedId,
        includeAppShellEditorPortal: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461346.includeAppShellEditorPortal,
        stable: true
      };
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461347 = this._pendingPortalOwner;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461347 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461347.document === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461345 && Date.now() <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461347.expiresAt) return {
        embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461347.embedId,
        includeAppShellEditorPortal: false,
        stable: false
      };
    }
    _getLatestActivePortalOwner(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461351) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461352 = this._activePortalOwners["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461351);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461352 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461352[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461352.length - 1];
    }
    _cleanupOrdinaryBodyChromeClaims(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461355, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461356) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461357 = this._roots["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461355);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461356.body["querySelectorAll"]("[" + Z + "=\x22" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461355 + "\x22]").forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256 => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256.parentElement === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461356.body && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461357 && [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461357].some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664.contains(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256)) || this._isUniverPortalCandidate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256) || this._isAppShellEditorPortalCandidate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256) || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256.removeAttribute(Z), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256.removeAttribute(EMBED_CHILD_UNIT_ID_ATTRIBUTE)));
      });
    }
    _blurActiveElementBeforePortalReassignment(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461361, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461362, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461363) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461364 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461361.getAttribute(Z);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461364 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461364 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461362) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461365 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461363.activeElement;
      !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461365 instanceof HTMLElement) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461365 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461361 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461361.contains(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461365) || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461365.blur(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461363.activeElement === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461365 && this._focusDocumentBody(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461363));
    }
    _releaseBodyPortalClaims(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461371, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461372) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461373 = this._roots["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461371),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461374 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461372.body["querySelectorAll"]("[" + Z + "=\x22" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461371 + "\x22]"),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461375 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461373 != null && [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461373].some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665.contains(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258)),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10 = [];
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461374.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259 => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461375(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259) || (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259), this._clearClosedPortalInputGuard(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259.removeAttribute(Z), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259.removeAttribute(EMBED_CHILD_UNIT_ID_ATTRIBUTE), this._removeRuntimeFocusRoleTree(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259));
      });
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461376 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461372.activeElement;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461376 instanceof HTMLElement && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461376 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261.contains(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461376)) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461376.blur(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461372.activeElement === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461376 && this._focusDocumentBody(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461372));
    }
    _focusDocumentBody(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461383) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461384 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461383.body;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461384) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461385 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461384.getAttribute("tabindex");
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461385 ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461384.tabIndex = -1), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461384.focus({
        preventScroll: true
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461385 == null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461384.removeAttribute("tabindex") : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461384.setAttribute("tabindex", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461385), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461383.activeElement !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461384 && this._focusTemporarySink(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461383);
    }
    _focusTemporarySink(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461389) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461390;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461391 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461389.body;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461391) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461392 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461389.createElement("span");
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461392.tabIndex = -1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461392.setAttribute("aria-hidden", "true"), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461392.style["cssText"] = "position:fixed;width:0;height:0;overflow:hidden;opacity:0;pointer-events:none;", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461391.appendChild(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461392), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461392.focus({
        preventScroll: true
      }), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461390 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461389.defaultView) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461390.setTimeout(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461392.remove(), 0);
    }
    _removeRuntimeFocusRoleTree(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461397) {
      (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461397.getAttribute("data-embed-runtime-focus-role") === "child-editor" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461397.getAttribute("data-embed-runtime-focus-role") === "child-popup") && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461397.removeAttribute(ws), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461397.querySelectorAll("[" + ws + "]").forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262 => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46263 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262.getAttribute(ws);
        (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46263 === "child-editor" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46263 === "child-popup") && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262.removeAttribute(ws);
      });
    }
  },
  Ds = class {
    constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461399 = {}) {
      Y(this, "_childUnitAncestry", new Map()), Y(this, "_maxDepth", undefined), this._maxDepth = Os(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461399.maxDepth);
    }
    canMount(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461401) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461402 = this.getAncestryForHostUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461401.hostUnitId);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461402.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266.hostUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461401.childUnitId || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266.childUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461401.childUnitId) ? {
        allowed: false,
        reason: "cycle",
        ancestry: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461402
      } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461402.length >= this._maxDepth ? {
        allowed: false,
        reason: "max-depth",
        ancestry: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461402
      } : {
        allowed: true,
        ancestry: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461402
      };
    }
    registerMountedRuntime(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461405) {
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12 = [...this.getAncestryForHostUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461405.hostUnitId), {
        hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461405.hostUnitId,
        embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461405.embedId,
        childUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461405.childUnitId
      }];
      return this._childUnitAncestry["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461405.childUnitId, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12), toDisposable(() => {
        this._childUnitAncestry["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461405.childUnitId) === var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12 && this._childUnitAncestry["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461405.childUnitId);
      });
    }
    getAncestryForHostUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461407) {
      return this._childUnitAncestry["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461407) ?? [];
    }
    getParentEmbedId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461409) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461410;
      return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461410 = this.getAncestryForHostUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461409).slice(-1)[0]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461410.embedId;
    }
  };
function Os(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464677) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464677 == "number" && Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464677) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464677 >= 0 ? Math.floor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464677) : 1;
}
;
function Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464679, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464680) {
  return function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461413, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461414) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464680(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461413, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461414, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464679);
  };
}
;
function fn_L0_core_endo_routine_pure_ON_zalloc_nothrow_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464683, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464684, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464685, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464686) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464687 = arguments.length,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464688 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464687 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464684 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464686 === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464686 = Object.getOwnPropertyDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464684, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464685) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464686,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464689;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464688 = Reflect.decorate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464683, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464684, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464685, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464686);else {
    for (var var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D79 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464683.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D79 >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D79--) (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464689 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464683[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D79]) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464688 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464687 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464689(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464688) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464687 > 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464689(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464684, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464685, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464688) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464689(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464684, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464685)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464688);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464687 > 3 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464688 && Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464684, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464685, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464688), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464688;
}
let ks = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461417) {
    super(), this._runtimeScopeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461417, Y(this, "_entries", new Map());
  }
  acquire(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461419) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461420 = this._entries["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461419.unitId);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461420) {
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A = [],
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB5 = {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461419.unitId,
          has: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666 => {
            var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667;
            return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.length - 1]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666)) ?? false;
          },
          get: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670 => {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.length - 1];
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671) throw Error("EMBED_UI_RUNTIME_SCOPE_NOT_ACTIVE:" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461419.unitId);
            return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670);
          }
        };
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461420 = {
        registration: this._runtimeScopeService["register"](var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB5),
        scopes: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A
      }, this._entries["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461419.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461420);
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461421 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461420;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461421.scopes["push"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461419), toDisposable(() => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461421.scopes["lastIndexOf"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461419);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267 < 0 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461421.scopes["splice"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267, 1), !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461421.scopes["length"] > 0 || this._entries["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461419.unitId) !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461421) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461421.registration["dispose"](), this._entries["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461419.unitId)));
    });
  }
  dispose() {
    this._entries["forEach"](({
      registration: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46269
    }) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46269.dispose()), this._entries["clear"](), super.dispose();
  }
};
ks = fn_L0_core_endo_routine_pure_ON_zalloc_nothrow_sigD23F([Q(0, IUIRuntimeScopeService)], ks);
const As = new Set(["identifier:univer.menu-manager-service", "identifier:univer.ribbon-service", "identifier:ui.contextmenu.service", "identifier:ui.popup.service", "identifier:ui.sidebar.service", "identifier:ui.layout-service", "identifier:univer.sheet.selection-render-service"]),
  js = "FOCUSING_BASE",
  Ms = [FOCUSING_UNIT, FOCUSING_UNIVER_EDITOR, FOCUSING_SHEET, FOCUSING_DOC, FOCUSING_SLIDE, FOCUSING_BOARD, js, EDITOR_ACTIVATED, FORMULA_EDITOR_ACTIVATED, FOCUSING_FX_BAR_EDITOR],
  Ns = new Set([CopyCommand.id, CutCommand.id, PasteCommand.id, UndoCommand.id, RedoCommand.id]),
  Ps = new Set(["docs-exchange-client.operation.import-doc", "sheets-exchange-client.operation.import-sheet", "slides-exchange-client.operation.import-slide", "bases-exchange-client.operation.import-base", "boards-exchange-client.operation.insert-mermaid"]);
function Fs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464697, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464698 = []) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464699 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464697.injector["get"](IUniverInstanceService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464700 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464699.getUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464697.childUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464697.childType);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464700) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464701 = Rs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464699, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464697, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464700, new BehaviorSubject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464700), new BehaviorSubject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464697.renderScope["mode"] === "float" && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464697.renderScope["fullscreen"] ? null : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464700.getUnitId())),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464702 = Qs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464697.injector, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464697.childType),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464703 = Xs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464697),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464704 = Bs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464697.injector["get"](ICommandService), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464697, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464699, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464703, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464702),
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5912 = new Map([[IUniverInstanceService, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464701], [ICommandService, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464704]]);
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464697.childType === UniverInstanceType.UNIVER_DOC && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464697.injector["has"](IDocClipboardService) && var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5912.set(IDocClipboardService, Is(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464697.injector["get"](IDocClipboardService), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464699, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464697.childUnitId)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464697.injector["has"](IConfigService) && var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5912.set(IConfigService, rc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464697.injector["get"](IConfigService)));
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A58 = [];
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464697.injector["has"](Ds) && var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5912.set(Ds, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464697.injector["get"](Ds)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464702 && var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5912.set(IContextService, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464702);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464705 = ac(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464697.injector, var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5912);
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464698.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461425 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464705.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461425));
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464706 = wc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464697.injector, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464705);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464706) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464705.add([IMenuManagerService, {
      useValue: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464706
    }]);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461426 = new DesktopRibbonService(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464706, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464701);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464705.add([IRibbonService, {
      useValue: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461426
    }]), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A58.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461426);
  }
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464697.renderScope["fullscreen"]) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461427 = Oc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464705, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464697.childUnitId),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461428 = new CanvasPopupService(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461429 = new DesktopSidebarService();
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464705.add([IContextMenuService, {
      useValue: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461427
    }]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464705.add([ICanvasPopupService, {
      useValue: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461428
    }]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464705.add([ISidebarService, {
      useValue: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461429
    }]), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A58.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461427, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461428, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461429);
  } else {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461430 = Dc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464697.injector, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464705, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464697.childUnitId);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461430 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464705.add([IContextMenuService, {
      useValue: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461430
    }]);
  }
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464707 = kc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464697.injector, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464697);
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464705.add([ILayoutService, {
    useValue: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464707
  }]);
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB59 = {
    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464697.childUnitId,
    has: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461431 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464705.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461431),
    get: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461432 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464705.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461432)
  };
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464697.injector["has"](ks) ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A58.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464697.injector["get"](ks).acquire(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB59)) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464697.injector["has"](IUIRuntimeScopeService) && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A58.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464697.injector["get"](IUIRuntimeScopeService).register(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB59)), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A58.length) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461433 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464705.dispose["bind"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464705),
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A27 = false;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464705.dispose = () => {
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A27 || (var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A27 = true, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A58.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674.dispose()), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461433());
    };
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464705;
}
;
function Is(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464719, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464720, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464721) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464722 = async var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461434 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461435 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464720.getCurrentUnitOfType(UniverInstanceType.UNIVER_DOC);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464720.setCurrentUnitForType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464721);
    try {
      return await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461434();
    } finally {
      Hs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464720, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461435);
    }
  };
  return {
    addClipboardHook: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464719.addClipboardHook["bind"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464719),
    copy: (...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461438) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464722(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464719.copy(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461438)),
    cut: (...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461439) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464722(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464719.cut(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461439)),
    legacyPaste: (...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461440) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464722(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464719.legacyPaste(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461440)),
    paste: (...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461441) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464722(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464719.paste(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461441))
  };
}
;
;
function Rs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464733, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464734, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464735, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464736, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464737) {
  return {
    unitAdded$: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464733.unitAdded$,
    getTypeOfUnitAdded$: (...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461442) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464733.getTypeOfUnitAdded$(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461442),
    __addUnit: (...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461443) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464733.__addUnit(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461443),
    unitDisposed$: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464733.unitDisposed$,
    getTypeOfUnitDisposed$: (...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464733.getTypeOfUnitDisposed$(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444),
    focused$: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464737.asObservable(),
    focusUnit: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461445 => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461445 === null || zs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464734, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461445)) {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464737.getValue() !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461445 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464737.next(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461445);
        return;
      }
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464733.focusUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461445);
    },
    getFocusedUnit: () => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461447 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464737.getValue();
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461447 === null ? null : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461447 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464734.childUnitId ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464735 : isInternalEditorID(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461447) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464733.getUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461447) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464735 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464733.getFocusedUnit();
    },
    getCurrentUnitOfType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461449 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461449 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464734.childType ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464736.getValue() : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464733.getCurrentUnitOfType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461449),
    setCurrentUnitForType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461450 => {
      if (zs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464734, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461450)) {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464736.getValue() !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464735 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464736.next(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464735);
        return;
      }
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464733.setCurrentUnitForType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461450);
    },
    getCurrentTypeOfUnit$: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461452 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461452 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464734.childType ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464736.asObservable() : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464733.getCurrentTypeOfUnit$(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461452),
    createUnit: (...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461453) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464733.createUnit(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461453),
    getUnitCreateOptions: (...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461454) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464733.getUnitCreateOptions(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461454),
    disposeUnit: (...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461455) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464733.disposeUnit(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461455),
    registerCtorForType: (...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461456) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464733.registerCtorForType(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461456),
    getUnit: (...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461457) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464733.getUnit(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461457),
    getAllUnitsForType: (...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461458) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464733.getAllUnitsForType(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461458),
    getUnitType: (...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461459) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464733.getUnitType(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461459),
    dispose: () => {}
  };
}
;
function zs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464743, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464744) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464744 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464743.childUnitId || isInternalEditorID(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464744);
}
;
function Bs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464747, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464748, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464749, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464750, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464751) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464752 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464748.injector["has"](IContextService) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464748.injector["get"](IContextService) : undefined;
  return {
    disposed: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464747.disposed(),
    hasCommand: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461460 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464747.hasCommand(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461460),
    registerCommand: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461461 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464747.registerCommand(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461461),
    unregisterCommand: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461462 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464747.unregisterCommand(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461462),
    registerMultipleCommand: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461463 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464747.registerMultipleCommand(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461463),
    executeCommand: async (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461464, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461465, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461466) => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461467;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461468 = () => Vs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461464, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464752, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464751, () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464747.executeCommand(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461464, ic(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464748, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461464, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461465), Us(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464748.childType, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464748.childUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461466))),
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A28 = Js(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464748) && !Ws(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461464) && (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464748.renderScope["fullscreen"] || !Ys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461464)),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461469 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464750 || Ws(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461464) || Ys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461464) || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A28,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461470 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461469 ? Gs() : null;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461469) return await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461468();
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461471 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464749.getCurrentUnitOfType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464748.childType),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461472 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461467 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464749.getFocusedUnit()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461467.getUnitId()) ?? null;
      try {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464749.setCurrentUnitForType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464748.childUnitId), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A28 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464749.focusUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464748.childUnitId);
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461468();
        return var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A28 && Ns.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461464) && Ks(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464748, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461470) && qs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464748, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461470), await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270;
      } finally {
        Hs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464749, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461471), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A28 || oc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464748, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464749, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461472, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464750), (!var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A28 || Ws(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461464) || Ys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461464)) && Ks(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464748, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461470) && qs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464748, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461470);
      }
    },
    syncExecuteCommand: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461482, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461483, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461484) => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461485;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461486 = () => Vs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461482, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464752, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464751, () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464747.syncExecuteCommand(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461482, ic(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464748, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461482, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461483), Us(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464748.childType, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464748.childUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461484))),
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A30 = Js(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464748) && !Ws(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461482) && (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464748.renderScope["fullscreen"] || !Ys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461482)),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461487 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464750 || Ws(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461482) || Ys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461482) || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A30,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461488 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461487 ? Gs() : null;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461487) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461486();
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461489 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464749.getCurrentUnitOfType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464748.childType),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461490 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461485 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464749.getFocusedUnit()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461485.getUnitId()) ?? null;
      try {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464749.setCurrentUnitForType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464748.childUnitId), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A30 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464749.focusUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464748.childUnitId);
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461486();
        return var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A30 && Ns.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461482) && Ks(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464748, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461488) && qs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464748, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461488), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271;
      } finally {
        Hs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464749, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461489), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A30 || oc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464748, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464749, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461490, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464750), (!var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A30 || Ws(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461482) || Ys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461482)) && Ks(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464748, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461488) && qs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464748, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461488);
      }
    },
    onCommandExecuted: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461500 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464747.onCommandExecuted(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461500),
    beforeCommandExecuted: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461501 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464747.beforeCommandExecuted(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461501),
    onMutationExecutedForCollab: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461502 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464747.onMutationExecutedForCollab(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461502)
  };
}
;
function Vs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464759, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464760, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464761, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464762) {
  if (!Ns.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464759) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464760 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464761 || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464760.setContextValue != "function" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464760 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464761) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464762();
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A60 = [];
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461503 of Ms) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464760.getContextValue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461503),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464761.getContextValue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461503);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273 && (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A60.push({
      key: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461503,
      value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464760.setContextValue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461503, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273));
  }
  try {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464762();
  } finally {
    for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A60.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3 >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3--) {
      let {
        key: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675,
        value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676
      } = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A60[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D3];
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464760.setContextValue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676);
    }
  }
}
;
function Hs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464767, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464768) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464768) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464769 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464768.getUnitId();
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464767.getUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464769) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464767.setCurrentUnitForType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464769);
}
;
function Us(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464773, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464774, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464775) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464773 === UniverInstanceType.UNIVER_BOARD ? {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464775,
    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464774
  } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464775;
}
;
function Ws(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464779) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464779 === UndoCommand.id || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464779 === RedoCommand.id;
}
;
function Gs() {
  return typeof document < "u" && document.activeElement instanceof HTMLElement ? document.activeElement : null;
}
;
function Ks(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464781, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464782) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464782 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464781.childType === UniverInstanceType.UNIVER_SHEET) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464782 != null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464783 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464782;
  for (; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464783;) {
    if (SHEET_EDITOR_UNITS.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677 => (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464783 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464783.id) === "__editor_" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464783 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464783.id) === "univer-doc-selection-container-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677)) return false;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464783 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464783.parentElement;
  }
  return true;
}
;
function qs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464787, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464788) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464789;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464790 = () => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461504 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464787.renderScope["contentRoot"] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464787.renderScope["rootElement"],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461505 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464788 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464788.isConnected ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464788 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461504.querySelector("canvas") ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461504;
    !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461505.isConnected || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461505.ownerDocument["activeElement"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461505 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461505.hasAttribute("tabindex") || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461505.tabIndex = -1), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461505.focus({
      preventScroll: true
    }));
  };
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464790(), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464789 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464787.renderScope["rootElement"].ownerDocument["defaultView"]) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464789.requestAnimationFrame(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464790);
}
;
function Js(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464795) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464795.childType === UniverInstanceType.UNIVER_BOARD || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464795.renderScope["mode"] !== "float" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464795.injector["has"](X)) return false;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464796 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464795.injector["get"](X).resolveActiveChildSessionRuntimeScope();
  return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464796 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464796.sessionMode) === "child-keyboard" || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464796 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464796.sessionMode) === "child-fullscreen") && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464796.embedId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464795.embedId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464796.hostUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464795.hostUnitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464796.childUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464795.childUnitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464796.childType === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464795.childType;
}
;
function Ys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464799) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464799 === SetCellEditVisibleOperation.id;
}
;
function Xs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464801) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464801.renderScope["fullscreen"] || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464801.descriptor["entry"] === "docs-custom-block" ? true : Zs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464801);
}
;
function Zs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464803) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464804;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464803.descriptor["entry"] === "sheets-sheet-tab" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464803.descriptor["entry"] === "bases-table-list-block" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464803.descriptor["entry"] === "slides-page-list-block" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464803.layout === "tab-peer" || !!((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464804 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464803.descriptor["sourceMeta"]) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464804.tab);
}
;
function Qs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464807, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464808) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464807.has(IContextService)) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464809 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464807.get(IContextService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464810 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F7(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464808),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464811 = new Subject();
  return {
    contextChanged$: mergeLocal((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464809.contextChanged$ ?? EMPTY).pipe(map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461508 => Object.fromEntries(Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461508).filter(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274]) => !tc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274)))), filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461509 => Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461509).length > 0)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464811),
    getContextValue: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461510 => tc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461510) ? ec(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464810, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461510) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464809.getContextValue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461510),
    setContextValue: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461511, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461512) => {
      if (!tc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461511)) {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464809.setContextValue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461511, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461512);
        return;
      }
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464810.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461511, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461512), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464811.next({
        [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461511]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461512
      });
    },
    subscribeContextValue$: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461515 => tc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461515) ? new Observable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464811.pipe(filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461515] !== undefined)).subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275.next(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461515]));
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275.next(ec(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464810, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461515)), () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276.unsubscribe();
    }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464809.subscribeContextValue$(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461515)
  };
}
;
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F7(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464817) {
  return new Map([[FOCUSING_UNIT, true], [FOCUSING_UNIVER_EDITOR, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464817 === UniverInstanceType.UNIVER_SHEET || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464817 === UniverInstanceType.UNIVER_DOC || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464817 === UniverInstanceType.UNIVER_SLIDE], [FOCUSING_SHEET, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464817 === UniverInstanceType.UNIVER_SHEET], [FOCUSING_DOC, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464817 === UniverInstanceType.UNIVER_DOC], [FOCUSING_SLIDE, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464817 === UniverInstanceType.UNIVER_SLIDE], [FOCUSING_BOARD, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464817 === UniverInstanceType.UNIVER_BOARD], [js, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464817 === UniverInstanceType.UNIVER_BASE]]);
}
;
function ec(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464819, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464820) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464819.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464820) ?? false;
}
;
function tc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464823) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464823.startsWith("FOCUSING_") || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464823 === EDITOR_ACTIVATED || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464823 === FORMULA_EDITOR_ACTIVATED;
}
;
function nc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464825, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464826) {
  return {
    getConfig: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461516 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461517 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464825.getConfig(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461516),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461518 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464826.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461516);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461518 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461518(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461517) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461517;
    },
    setConfig: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464825.setConfig["bind"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464825),
    deleteConfig: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464825.deleteConfig["bind"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464825),
    subscribeConfigValue$: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464825.subscribeConfigValue$["bind"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464825),
    configChanged$: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464825.configChanged$,
    dispose: () => {}
  };
}
;
function rc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464829) {
  return nc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464829, new Map([["menu", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461522 => {
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB17 = {
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461522 ?? {})
    };
    return Ps.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279 => {
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB17[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279] = {
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB17[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279],
        hidden: true
      };
    }), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB17;
  }]]));
}
;
function ic(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464831, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464832, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464833) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464832 !== CreateEmbedCommand.id || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464833 || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464833 != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464833;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464834 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464833;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464834.parentEmbedId ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464834 : {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464834,
    parentEmbedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464831.embedId
  };
}
;
function ac(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464839, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464840, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464841 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464839) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464842 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F8(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464839) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464841,
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5914 = new Map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464840),
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5915 = new Map(),
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929910 = new Set(),
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5916 = new Map(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464843;
  var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5914.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461524, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461525) => {
    fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461525);
  });
  function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461528) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461529 = cc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461528);
    return var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929910.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461529), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5916.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461529) || var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5916.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461529, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461528), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461529;
  }
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464844 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461532 => var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5914.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461532) || var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5915.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461532) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461532 : var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5916.get(cc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461532)) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461532,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464845 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461533 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461534 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464844(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461533);
      if (var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5914.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461534)) return var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5914.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461534);
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461535 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5915.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461534);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461535) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461536 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461535();
      return var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5915.delete(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461534), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5914.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461534, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461536), mc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464843, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461534, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461536), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461534 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461533 && mc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464843, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461533, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461536), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461536;
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464846 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461541 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461542 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464844(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461541);
      return var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5914.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461542) || var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5915.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461542);
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464847 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461545 => var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929910.has(cc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461545)),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464848 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461546 => As.has(cc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461546)),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464849 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461547 => !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464847(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461547) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464839.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461547),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464850 = () => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464843) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464843;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461548 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464839.createChild;
      if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461548 == "function") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464843 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461548.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464839, [...Sc(var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5914), [Injector, {
        useFactory: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464843
      }]]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464843;
    },
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB61 = {
      has: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461550 => {
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461550 === Injector || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464846(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461550) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464849(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461550)) return true;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461551 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464850();
        return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461551 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461551.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461550)) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464839.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461550);
      },
      get: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461554, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461555) => {
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461554 === Injector) return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB61;
        if (lc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461555, LookUp.SELF)) {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464850();
          ox1fd606(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461554);
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282 = fc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461554);
          return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282.resolved ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282.value : dc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464839, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461554, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461555);
        }
        return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464846(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461554) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464845(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461554) : lc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461555, LookUp.SKIP_SELF) ? dc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464839, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461554, uc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461555, LookUp.SKIP_SELF)) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464849(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461554) ? dc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464839, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461554, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461555) : dc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464850() || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464839, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461554, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461555);
      },
      invoke: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461558, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461559) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461558({
        has: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46283 => {
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46283 === Injector || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464846(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46283) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464849(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46283)) return true;
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464850();
          return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46283)) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464839.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46283);
        },
        get: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288) => {
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287 === Injector) return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB61;
          if (lc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288, LookUp.SELF)) {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464850();
            ox1fd606(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287);
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681 = fc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287);
            return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681.resolved ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681.value : dc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464839, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288);
          }
          return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464846(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464845(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287) : lc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288, LookUp.SKIP_SELF) ? dc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464839, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287, uc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288, LookUp.SKIP_SELF)) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464849(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287) ? dc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464839, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288) : dc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464850() || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464839, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288);
        }
      }, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461559),
      add: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461560 => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461561 = Cc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461560);
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461561) {
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461561.kind !== "factory" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464849(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461561.identifier) && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464848(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461561.identifier)) return;
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291 = cc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461561.identifier);
          if (var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929910.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291)) return;
          if (fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461561.identifier), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461561.kind === "value") var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5915.delete(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461561.identifier), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5914.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461561.identifier, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461561.value);else {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464850();
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682 ? gc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461561.identifier) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461560) : (var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5914.delete(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461561.identifier), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5915.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461561.identifier, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461561.factory));
          }
          return;
        }
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461562 = cc(sc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461560));
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461562 != null) {
          if (var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929910.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461562)) return;
          fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(sc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461560));
        }
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461563 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464850();
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461563) {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461563.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461560);
          return;
        }
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464839.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461560);
      },
      createChild: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461568 = []) => {
        let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B598 = new Map(var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5914);
        var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5916.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292 => {
          if (var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B598.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292)) return;
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464846(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292)) {
            var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B598.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464845(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292));
            return;
          }
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464850();
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293 && gc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292) && var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B598.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292, dc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292, [LookUp.SELF]));
        });
        let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14 = [];
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461568.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296 => {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297 = Cc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296);
          if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297.kind) === "value") {
            var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B598.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297.identifier, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297.value);
            return;
          }
          var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296);
        });
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461569 = ac(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464839, var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B598, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464842);
        return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300 => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461569.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300);
        }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461569;
      },
      createInstance: (...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461572) => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461573 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464850(),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461574 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461573 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461573.createInstance;
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461573 && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461574 == "function") return ox438c99(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461573, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461572[0]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461574.apply(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461573, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461572);
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461575 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464839.createInstance;
        if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461575 == "function") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461575.apply(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464839, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461572);
        let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461576, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461577] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461572;
        return new var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461576(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461577);
      },
      dispose: () => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464843 && vc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464843, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464842, var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5914.values()), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464843 = undefined, var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929910.clear(), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5916.clear(), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5915.clear();
      }
    };
  return {
    resolved: false
  };
}
;
function pc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464863) {
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464863 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464863.length !== 1 ? {
    resolved: false
  } : {
    resolved: true,
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464863[0]
  };
}
;
function mc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464865, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464866, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464867) {
  !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464865 || gc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464865, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464866) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464865.add([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464866, {
    useValue: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464867
  }]);
}
;
function hc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464871) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464871 || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464871 != "function" && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464871 != "object") return [];
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461584 of Object.getOwnPropertySymbols(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464871)) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464871[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461584];
    if (!Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302)) continue;
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683.identifier).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684 !== undefined);
    if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1.length) return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1;
  }
  return [];
}
;
function gc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464873, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464874) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464875, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464876, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464877, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464878;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464879 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464873;
  return !!((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464875 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464879.dependencyCollection) != null && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464876 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464875.has) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464876.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464875, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464874) || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464877 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464879.resolvedDependencyCollection) != null && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464878 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464877.has) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464878.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464877, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464874));
}
;
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F8(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464887) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464887.__embedSharedRootInjector;
}
;
function vc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464889, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464890, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464891 = []) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464892 = yc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464890);
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461585 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464891) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464892.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461585);
  bc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464889, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464892), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464889.dispose();
}
;
function yc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464897) {
  let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929912 = new Set(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464898 = xc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464897);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464898 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464898.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461586 => {
    Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461586) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461586.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303 => var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929912.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303));
  }), var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929912;
}
;
function bc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464901, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464902, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464903 = new Set()) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464903.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464901)) return;
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464903.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464901);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464904 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464901.children;
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464904 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464904.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461588 => bc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461588, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464902, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464903));
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464905 = xc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464901);
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464905 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464905.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461589, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461590) => {
    if (!Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461589)) return;
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A16 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461589.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46304 => !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464902.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46304));
    if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A16.length !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461589.length) {
      if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A16.length === 0) {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464905.delete(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461590);
        return;
      }
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464905.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461590, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A16);
    }
  });
}
;
function xc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464911) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464912;
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464912 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464911.resolvedDependencyCollection) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464912.resolvedDependencies;
}
;
function Sc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464915) {
  return Array.from(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464915, ([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461593, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461594]) => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461593, {
    useValue: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461594
  }]);
}
;
function Cc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464917) {
  if (!Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464917) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464917.length < 2) return;
  let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464918, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464919] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464917;
  if (!(!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464919 || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464919 != "object")) {
    if ("useValue" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464919) return {
      kind: "value",
      identifier: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464918,
      value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464919.useValue
    };
    if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464919.useFactory == "function") return {
      kind: "factory",
      identifier: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464918,
      factory: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464919.useFactory
    };
  }
}
;
function wc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464923, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464924) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464923.has(IMenuManagerService)) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464925 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464923.get(IMenuManagerService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464926 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464925.createScoped;
  return Tc(typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464926 == "function" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464926.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464925, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464924) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464925);
}
;
function Tc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464931) {
  return {
    menuChanged$: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464931.menuChanged$,
    mergeMenu: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461595, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461596) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464931.mergeMenu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461595, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461596),
    appendRootMenu: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461597 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464931.appendRootMenu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461597),
    getMenuByPositionKey: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461598 => Ec(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464931.getMenuByPositionKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461598)),
    getFlatMenuByPositionKey: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461599 => Ec(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464931.getFlatMenuByPositionKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461599))
  };
}
;
function Ec(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464933) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464933.flatMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461600 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461601;
    if (Ps.has(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461601 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461600.item) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461601.id) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461600.key)) return [];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461600.children) return [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461600];
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461602 = Ec(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461600.children);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461600.children["length"] > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461602.length === 0 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461600.item && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461600.headerActionItem ? [] : [{
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461600,
      children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461602
    }];
  });
}
;
function Dc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464935, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464936, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464937) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464935.has(IContextMenuService)) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464938 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464935.get(IContextMenuService);
  return {
    get disabled() {
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464938.disabled;
    },
    set disabled(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461606) {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464938.disabled = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461606;
    },
    get visible() {
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464938.visible;
    },
    enable: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464938.enable(),
    disable: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464938.disable(),
    triggerContextMenu: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461608, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461609, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461610) => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464938.triggerContextMenu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461608, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461609, {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461610,
        unitId: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461610 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461610.unitId) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464937
      });
    },
    hideContextMenu: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464938.hideContextMenu(),
    registerContextMenuHandler: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461614 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464938.registerContextMenuHandler(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461614)
  };
}
;
function Oc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464943, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464944) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464945 = new ContextMenuService();
  return {
    get disabled() {
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464945.disabled;
    },
    set disabled(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461615) {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464945.disabled = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461615;
    },
    get visible() {
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464945.visible;
    },
    enable: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464945.enable(),
    disable: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464945.disable(),
    triggerContextMenu: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461617, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461618, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461619) => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464945.triggerContextMenu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461617, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461618, {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461619,
        unitId: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461619 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461619.unitId) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464944
      });
    },
    hideContextMenu: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464945.hideContextMenu(),
    registerContextMenuHandler: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461623 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464945.registerContextMenuHandler(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461623),
    dispose: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464945.dispose()
  };
}
;
function kc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464949, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464950) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464951 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464949.get(ILayoutService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464952 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464949.has(Es) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464949.get(Es) : undefined,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464953 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464949.has(X) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464949.get(X) : undefined,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464954 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464950.renderScope["rootElement"],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464955 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464950.renderScope["contentRoot"] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464954,
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929914 = new Set([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464954, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464955]),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A92 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464950.renderScope["mode"] !== "float" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464950.renderScope["fullscreen"],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464956 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461624, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461625) => {
      var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929914.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461624);
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461626 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461625 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461625.registerChildInteraction) && var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A92,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461627 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461626 ? Ac(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461624) : undefined,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461628 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461626 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464952 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464952.registerOwnedElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464950.embedId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461624) : undefined,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461629 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461626 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464953 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464953.registerElement({
          embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464950.embedId,
          role: "child-editor",
          element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461624
        }) : undefined;
      return toDisposable(() => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461629 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461629.dispose(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461628 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461628.dispose(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461627 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461627.dispose(), var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929914.delete(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461624);
      });
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464957 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461636 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461636 ? [...var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929914].some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46305 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46305 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461636 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46305.contains(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461636)) : false;
  return {
    get isFocused() {
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464951.isFocused;
    },
    get rootContainerElement() {
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464954;
    },
    focus: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464951.focus(),
    registerFocusHandler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461637, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461638) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464951.registerFocusHandler(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461637, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461638),
    registerRootContainerElement: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464956,
    registerContentElement: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464956,
    registerContainerElement: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461639 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464956(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461639, {
      registerChildInteraction: true
    }),
    getContentElement: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464955,
    checkElementInCurrentContainers: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461640 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464957(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461640) || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464952 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464952.contains(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464950.embedId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461640)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464951.checkElementInCurrentContainers(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461640),
    checkContentIsFocused: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464957(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464955.ownerDocument["activeElement"]) || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464953 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464953.hasChildInteractionLease(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464950.embedId)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464951.checkContentIsFocused()
  };
}
;
function Ac(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464967) {
  let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5920 = new Map(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464968 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461641 => {
      var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5920.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461641, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461641.getAttribute(ws)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461641.setAttribute(ws, "child-editor");
    };
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464968(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464967), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464967.querySelectorAll("*").forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464968), toDisposable(() => {
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5920.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46306, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307) => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46306 == null) {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307.removeAttribute(ws);
        return;
      }
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307.setAttribute(ws, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46306);
    });
  });
}
;
function jc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464971, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464972, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464973 = []) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464974 = Nc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464971, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464973) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464971.injector,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A94 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464974 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464971.injector,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464975 = Mc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464971),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB63 = {
      descriptor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464971.descriptor,
      host: {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464971.hostUnitId,
        type: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464971.descriptor["hostType"],
        anchorId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464971.descriptor["hostAnchorId"],
        entry: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464971.descriptor["entry"],
        layout: Fc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464971)
      },
      child: {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464971.childUnitId,
        type: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464971.childType
      },
      injector: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464974,
      instanceService: Pc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464974, IUniverInstanceService),
      commandService: Pc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464974, ICommandService),
      menuManagerService: Pc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464974, IMenuManagerService),
      roots: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464975,
      activate: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464972(true),
      deactivate: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464972(false),
      dispose: () => {
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A94 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464974.dispose();
      }
    };
  return {
    runtimeScope: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB63,
    disposable: toDisposable(() => var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB63.dispose())
  };
}
;
function Mc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464981) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464982;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464983 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464981.renderScope["rootElement"],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464984 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464981.renderScope["contentRoot"] ?? ms(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464983, "data-embed-content-root") ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464983,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464985 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464981.renderScope["overlayRoot"] ?? ms(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464983, "data-embed-overlay-root") ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464983;
  return {
    root: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464983,
    content: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464984,
    canvas: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464981.renderScope["canvasRoot"] ?? ms(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464983, "data-embed-canvas-root") ?? undefined,
    overlay: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464985,
    popup: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464981.renderScope["popupRoot"] ?? ms(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464983, "data-embed-popup-root") ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464985,
    menuSlot: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464982 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464981.renderScope["menuOutlet"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464982.container) ?? ms(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464983, "data-embed-menu-slot") ?? undefined,
    footerSlot: ms(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464983, "data-embed-footer-slot") ?? undefined
  };
}
;
function Nc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464991, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464992) {
  if (!(!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464991.injector["has"](IUniverInstanceService) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464991.injector["has"](ICommandService))) return Fs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464991, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464992);
}
;
function Pc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464995, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464996) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464995.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464996)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464995.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464996);
}
;
function Fc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464999) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465000, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465001;
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464999.descriptor["entry"]) {
    case "docs-custom-block":
      return "doc-flow";
    case "sheets-floating-object":
    case "slides-floating-object":
    case "boards-floating-object":
      return "float";
    case "sheets-sheet-tab":
    case "bases-table-list-block":
    case "slides-page-list-block":
      return "tab-peer";
    default:
      break;
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464999.layout === "tab-peer" || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465000 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464999.descriptor["sourceMeta"]) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465000.tab ? "tab-peer" : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465001 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464999.descriptor["sourceMeta"]) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465001.floating ? "float" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464999.layout["startsWith"]("docs-") || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464999.layout === "scroll-contained" ? "doc-flow" : "float";
}
;
;
;
;
;
;
;
;
function Jc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465083, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465084 = {}) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465085, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465086, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465087, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465088;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465084.activate) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465089;
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465089 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465083.activate) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465089.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465083);
  }
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465083.engine["resize"](), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465083.components["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461729 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461730, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461731;
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461730 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461729.makeForceDirty) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461730.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461729, true), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461731 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461729.makeDirty) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461731.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461729, true);
  }), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465085 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465083.mainComponent) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465086 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465085.makeDirty) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465086.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465085, true), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465083.scene["makeDirty"](), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465087 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465088 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465083.scene).render) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465087.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465088);
}
;
;
;
;
;
;
;
cl = fn_L0_core_endo_routine_pure_ON_zalloc_nothrow_sigD23F([Q(0, Inject(Rc)), Q(1, Inject(Ic)), Q(2, Inject(zc)), Q(3, Inject(Yc)), Q(4, IUniverInstanceService), Q(5, Inject(xs)), Q(6, Inject(Ds)), Q(7, Inject(Injector))], cl);
;
dl = fn_L0_core_endo_routine_pure_ON_zalloc_nothrow_sigD23F([Q(0, IUniverInstanceService), Q(1, Inject(EmbedFocusOwnerService)), Q(2, Inject(EmbedHostAdapterRegistryService)), Q(3, Inject(Ss)), Q(4, Inject(cl)), Q(5, Inject(bs)), Q(6, Inject(xs)), Q(7, IContextService), Q(8, ILayoutService)], dl);
function fl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465145) {
  let {
    injector: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465146,
    children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465147,
    mountContainer: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465148,
    embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465149
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465145;
  return jsx(useMemo(() => connectInjector(pl, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465146), [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465146]), {
    mountContainer: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465148,
    embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465149,
    children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465147
  });
}
;
function pl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465155) {
  let {
      children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465156,
      mountContainer: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465157,
      embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465158,
      passThroughWheelGestures: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465159
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465155,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465160 = useInjector(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465161 = useDependency(LocaleService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465162 = useMemo(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465160.has(ThemeService) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465160.get(ThemeService) : undefined, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465160]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465163 = useObservable(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465161.localeChanged$["pipe"](map(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465161.getLocales())), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465161.getLocales(), false, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465161]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465164 = useObservable(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465161.direction$, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465161.getDirection(), false, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465161]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465165 = vl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465162),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465166 = useRef(null),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465167 = useMemo(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465157 !== undefined || typeof document > "u" ? null : document.createElement("div"), [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465157]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465168 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465157 === undefined ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465167 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465157;
  return useEffect(() => {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465167) return document.body["appendChild"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465167), () => {
      document.body["removeChild"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465167);
    };
  }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465167]), useEffect(() => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462216 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465168;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462216 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462216.setAttribute("dir", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465164);
  }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465164, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465168]), useEffect(() => {
    if (!(!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465168 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465159)) return preventBrowserZoomInContainers([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465168]);
  }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465159, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465168]), useEffect(() => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462218 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465168;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462218 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465158) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462219 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462218.getAttribute(Z);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462218.setAttribute(Z, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465158), () => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462219 == null) {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462218.removeAttribute(Z);
        return;
      }
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462218.setAttribute(Z, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462219);
    };
  }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465158, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465168]), jsx(ConfigProvider, {
    locale: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465163 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465163.design,
    direction: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465164,
    mountContainer: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465168,
    children: jsx("div", {
      ref: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465166,
      className: clsx("univer-contents", {
        "univer-dark": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465165
      }),
      "data-embed-runtime-provider": "true",
      onPointerUpCapture: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462222 => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462223 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465166.current,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462224 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462222.target;
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465158 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462223) return;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462225 = () => ml(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465158, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462223, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462224);
        typeof queueMicrotask == "function" ? queueMicrotask(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462225) : Promise.resolve().then(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462225);
      },
      children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465156
    })
  });
}
;
function ml(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465183, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465184, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465185) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465186 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465184.ownerDocument["activeElement"];
  if (gl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465186, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465183)) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465187 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465185 instanceof HTMLElement && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465184.contains(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465185) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465185 : null,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465188 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F10(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465187) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465187 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465184.querySelector('canvas[tabindex], [tabindex]:not([tabindex="-1"])');
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465188 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465188.focus({
    preventScroll: true
  });
}
;
;
function gl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465199, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465200) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465201 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465199 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465199.closest("[" + Z + "]");
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465201 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465201.getAttribute(Z)) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465200;
}
;
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F10(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465205) {
  return !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465205 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465205.hasAttribute("disabled") && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465205.tabIndex >= 0;
}
;
function vl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465207) {
  return useSyncExternalStore(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462230 => {
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465207) return () => {};
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462231 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465207.darkMode$["subscribe"](() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462230());
    return () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462231.unsubscribe();
  }, () => (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465207 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465207.darkMode) ?? false, () => false);
}
const yl = new WeakMap(),
  bl = new WeakMap(),
  xl = new WeakMap();
function Sl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465209) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465210 = yl.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465209);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465210) return xl.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465210, (xl.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465210) ?? 0) + 1), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465210;
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB65 = {
    render: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462234 => render(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462234, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465209)
  };
  return yl.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465209, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB65), bl.set(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB65, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465209), xl.set(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB65, 0), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB65;
}
;
function Cl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465213) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465214 = bl.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465213),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D87 = xl.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465213) ?? 0;
  globalThis.setTimeout(() => {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465214 && yl.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465214) !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465213 || (xl.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465213) ?? 0) === var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D87 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465214 && (yl.delete(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465214), bl.delete(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465213)), xl.delete(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465213), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465214 && unmount(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465214));
  }, 0);
}
;
function wl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465217) {
  let {
    container: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465218,
    portalContainer: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465219,
    injector: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465220,
    childType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465221,
    childUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465222,
    embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465223,
    menuSchema: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465224,
    menuTitlePrefix: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465225,
    activeRibbonTab: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465226,
    headerMenu: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465230 = false,
    toolbarOnly: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465227,
    ribbonType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465231 = "classic",
    ribbonHeaderClassName: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465228,
    scopedActionServiceTokens: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465229
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465217;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465224 != null && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465224 != "object") return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465232 = Tl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465220, {
      childType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465221,
      childUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465222,
      embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465223,
      menuSchema: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465224,
      menuTitlePrefix: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465225,
      activeRibbonTab: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465226,
      scopedActionServiceTokens: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465229
    }),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465233 = Sl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465218);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465233.render(createElement(fl, {
    injector: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465232.injector,
    mountContainer: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465219 ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465218,
    embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465223
  }, createElement(Ribbon, {
    ribbonType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465231,
    headerMenu: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465230,
    toolbarOnly: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465227,
    headerClassName: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465228
  }))), toDisposable(() => {
    Cl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465233), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465232.disposable["dispose"]();
  });
}
;
function Tl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465251, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465252) {
  let {
      childType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465253,
      childUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465254,
      embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465255,
      menuSchema: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465256,
      menuTitlePrefix: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465257,
      activeRibbonTab: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465258,
      scopedActionServiceTokens: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465259
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465252,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465260 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465251.get(IUniverInstanceService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465261 = Ol(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465251).get(IUniverInstanceService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465262 = Nl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465260, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465253, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465254),
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5922 = new WeakMap(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465263,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465264 = Ll(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465251.get(ICommandService), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465261, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465253, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465254, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465255, () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465263),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465265 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465254 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465251.has(IContextService) ? Pl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465251.get(IContextService), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465253) : undefined,
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5923 = new Map([[IUniverInstanceService, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465262], [ICommandService, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465264], ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465265 ? [[IContextService, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465265]] : [])]);
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465251.has(IConfigService) && var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5923.set(IConfigService, rc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465251.get(IConfigService))), new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465259 ?? []).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462235 => {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465254 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465251.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462235) && var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5923.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462235, zl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465251.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462235), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465261, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465253, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465254, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465255, () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465263, var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5922));
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465263 = ac(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465251, var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5923);
  let {
      menuManager: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465266,
      disposable: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465267
    } = El(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465251, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465263, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465256, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465257),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465268 = new DesktopRibbonService(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465266, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465262);
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465258 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465268.setActivatedTab(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465258);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465269 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465257 ? kl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465268, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465257, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465251) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465268;
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465263.add([IMenuManagerService, {
    useValue: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465266
  }]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465263.add([IRibbonService, {
    useValue: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465269
  }]);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465270 = Dl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465251, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465268, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465266, {
    embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465255,
    childUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465254
  });
  return {
    injector: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465263,
    ribbonService: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465269,
    disposable: toDisposable(() => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465270 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465270.dispose(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465268.dispose(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465267 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465267.dispose(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465263.dispose();
    })
  };
}
;
function El(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465291, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465292, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465293, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465294) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465293 && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465293 == "object") {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462237 = new MenuManagerService(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465292, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465292.get(IConfigService));
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462237.mergeMenu(jl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465293, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465294, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465291)), {
      menuManager: Tc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462237),
      disposable: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462237
    };
  }
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465295 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465291.get(IMenuManagerService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465296 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465295.createScoped;
  return {
    menuManager: Tc(typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465296 == "function" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465296.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465295, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465292) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465295)
  };
}
;
function Dl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465303, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465304, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465305, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465306) {
  let {
    embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465307,
    childUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465308
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465306;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465307 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465308) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465309 = Ol(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465303);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465309.has(IRibbonService) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465309.has(X)) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465310 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465309.get(IRibbonService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465311 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465309.get(X),
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929918 = new Set(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465312 = combineLatest([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465310.ribbon$, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465310.activatedTab$, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465305.menuChanged$["pipe"](startWith(undefined)), mergeLocal(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465311.runtimeFocusChanged$, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465311.runtimeSessionChanged$).pipe(startWith(undefined))]).subscribe(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462238, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462239]) => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462240 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465311.resolveActiveChildSessionRuntimeScope(),
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A34 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462240 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462240.embedId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465307 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462240.childUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465308 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462240.sessionMode === "child-tab" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462240.sessionMode === "child-fullscreen"),
        var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92992 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465305.getMenuByPositionKey(MenuManagerPosition.RIBBON).filter(({
          contextual: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394
        }) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46394).map(({
          key: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395
        }) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395)),
        var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92993 = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A34 ? new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462238.filter(({
          contextual: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396,
          key: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46397
        }) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396 && var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92992.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46397)).map(({
          key: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46398
        }) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46398)) : new Set();
      var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929918.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46399 => {
        var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92993.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46399) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465304.hideContextualTab(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46399);
      }), var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92993.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401 => {
        var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929918.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465304.showContextualTab(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401);
      }), var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92993.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462239) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465304.setActivatedTab(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462239), var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929918 = var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92993;
    });
  return toDisposable(() => {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465312.unsubscribe(), var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929918.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465304.hideContextualTab(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403)), var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929918.clear();
  });
}
;
function Ol(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465323) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465323.__embedSharedRootInjector ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465323;
}
;
function kl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465325, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465326, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465327) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465328;
  try {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465328 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465327.get(LocaleService);
  } catch {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465328 = undefined;
  }
  return {
    ribbon$: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465325.ribbon$["pipe"](map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462244 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462244.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46404 => Al(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46404, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465326, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465328)))),
    activatedTab$: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465325.activatedTab$,
    collapsedIds$: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465325.collapsedIds$,
    fakeToolbarVisible$: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465325.fakeToolbarVisible$,
    setActivatedTab: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462245 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465325.setActivatedTab(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462245),
    showContextualTab: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462246, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462247) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465325.showContextualTab(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462246, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462247),
    hideContextualTab: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462248 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465325.hideContextualTab(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462248),
    hideAllContextualTabs: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465325.hideAllContextualTabs(),
    setCollapsedIds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462249 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465325.setCollapsedIds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462249),
    setFakeToolbarVisible: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462250 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465325.setFakeToolbarVisible(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462250)
  };
}
;
function Al(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465333, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465334, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465335) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465336 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465333.title || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465333.key,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465337 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465335 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465335.t(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465336) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465336;
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465333,
    title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465334 + "\x20-\x20" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465337
  };
}
;
function jl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465343, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465344, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465345) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465344 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465343 || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465343 != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465343;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465346 = Ml(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465343),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465347 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465346[MenuManagerPosition.RIBBON];
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465347 || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465347 != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465346;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465348;
  try {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465348 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465345.get(LocaleService);
  } catch {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465348 = undefined;
  }
  return Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465347).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462251 => {
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462251 || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462251 != "object") return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462252 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462251,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462253 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462252.title;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462253 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462252.title = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465344 + " - " + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465348 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465348.t(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462253) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462253));
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465346;
}
;
function Ml(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465355) {
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465355 || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465355 != "object" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465355 : Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465355) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465355.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462257 => Ml(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462257)) : Object.fromEntries(Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465355).map(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462258, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462259]) => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462258, Ml(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462259)]));
}
;
function Nl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465357, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465358, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465359) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465360 = () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465359 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465357.getUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465359, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465358) : null,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465361 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465359 ? mergeLocal(of1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465359), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465357.getTypeOfUnitAdded$(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465358).pipe(map(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465359)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465357.getTypeOfUnitDisposed$(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465358).pipe(map(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465359))) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465357.focused$;
  return {
    unitAdded$: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465357.unitAdded$,
    getTypeOfUnitAdded$: (...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462260) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465357.getTypeOfUnitAdded$(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462260),
    __addUnit: (...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462261) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465357.__addUnit(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462261),
    unitDisposed$: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465357.unitDisposed$,
    getTypeOfUnitDisposed$: (...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462262) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465357.getTypeOfUnitDisposed$(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462262),
    focused$: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465361,
    get focused() {
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465360() ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465357.getFocusedUnit();
    },
    focusUnit: (...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462263) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465357.focusUnit(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462263),
    getFocusedUnit: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465360() ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465357.getFocusedUnit(),
    getCurrentUnitOfType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462264 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462264 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465358 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465359 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465360() : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465357.getCurrentUnitOfType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462264),
    setCurrentUnitForType: (...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462265) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465357.setCurrentUnitForType(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462265),
    getCurrentTypeOfUnit$: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462266 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462266 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465358 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465359 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465357.getCurrentTypeOfUnit$(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462266) : mergeLocal(of1(undefined), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465357.getTypeOfUnitAdded$(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465358), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465357.getTypeOfUnitDisposed$(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465358)).pipe(map(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465360())),
    createUnit: (...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462267) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465357.createUnit(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462267),
    getUnitCreateOptions: (...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462268) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465357.getUnitCreateOptions(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462268),
    disposeUnit: (...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462269) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465357.disposeUnit(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462269),
    registerCtorForType: (...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462270) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465357.registerCtorForType(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462270),
    getUnit: (...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462271) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465357.getUnit(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462271),
    getAllUnitsForType: (...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462272) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465357.getAllUnitsForType(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462272),
    getUnitType: (...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462273) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465357.getUnitType(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462273)
  };
}
;
function Pl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465367, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465368) {
  return {
    contextChanged$: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465367.contextChanged$,
    getContextValue: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462274 => Fl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462274, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465368) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465367.getContextValue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462274),
    setContextValue: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462275, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462276) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465367.setContextValue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462275, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462276),
    subscribeContextValue$: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462277 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462278 = Fl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462277, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465368);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462278 == null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465367.subscribeContextValue$(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462277) : of1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462278);
    }
  };
}
;
function Fl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465371, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465372) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465371 === FOCUSING_UNIT) return true;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465371 === FOCUSING_SHEET || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465371 === FOCUSING_DOC || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465371 === FOCUSING_SLIDE) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465371 === Il(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465372);
}
;
function Il(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465375) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465375 === UniverInstanceType.UNIVER_SHEET) return FOCUSING_SHEET;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465375 === UniverInstanceType.UNIVER_DOC) return FOCUSING_DOC;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465375 === UniverInstanceType.UNIVER_SLIDE) return FOCUSING_SLIDE;
}
;
function Ll(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465377, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465378, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465379, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465380, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465381, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465382) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465380 ? {
    disposed: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465377.disposed(),
    hasCommand: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462281 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465377.hasCommand(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462281),
    registerCommand: (...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462282) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465377.registerCommand(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462282),
    unregisterCommand: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462283 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465377.unregisterCommand(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462283),
    registerMultipleCommand: (...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462284) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465377.registerMultipleCommand(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462284),
    executeCommand: async (...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462285) => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462286 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465378.getCurrentUnitOfType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465379);
      try {
        return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465378.setCurrentUnitForType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465380), await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465377.executeCommand(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462285[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462285[1], Rl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465379, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465380, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462285[2]));
      } finally {
        Ul(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465378, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465380, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462286, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465381, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465382);
      }
    },
    syncExecuteCommand: (...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462289) => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462290 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465378.getCurrentUnitOfType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465379);
      try {
        return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465378.setCurrentUnitForType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465380), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465377.syncExecuteCommand(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462289[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462289[1], Rl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465379, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465380, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462289[2]));
      } finally {
        Ul(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465378, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465380, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462290, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465381, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465382);
      }
    },
    onCommandExecuted: (...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462293) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465377.onCommandExecuted(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462293),
    beforeCommandExecuted: (...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462294) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465377.beforeCommandExecuted(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462294),
    onMutationExecutedForCollab: (...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462295) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465377.onMutationExecutedForCollab(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462295)
  } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465377;
}
;
function Rl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465389, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465390, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465391) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465389 === UniverInstanceType.UNIVER_BOARD ? {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465391,
    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465390
  } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465391;
}
;
function zl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465395, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465396, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465397, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465398, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465399, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465400, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465401) {
  if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465395 != "object" && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465395 != "function" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465395 == null) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465395;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465402 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465395,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465403 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465401 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465401.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465402);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465403) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465403;
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB67 = {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465402
  };
  return Bl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465402, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB67, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465396, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465397, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465398, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465399, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465400), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465401 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465401.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465402, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB67), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB67;
}
;
function Bl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465413, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465414, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465415, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465416, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465417, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465418, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465419) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465420 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462296 => {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462296 === "constructor") return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462297 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465413[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462296];
    if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462297 != "function") return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462298 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465414;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462298[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462296] = (...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405) => Vl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465415, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465416, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465417, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465418, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465419, () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462297.apply(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465413, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405));
  };
  Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465413).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465420);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465421 = Object.getPrototypeOf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465413);
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465421 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465421 !== Object.prototype && Object.getOwnPropertyNames(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465421).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465420);
}
;
function Vl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465431, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465432, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465433, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465434, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465435, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465436) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465437 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465431.getCurrentUnitOfType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465432),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465438;
  try {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465431.setCurrentUnitForType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465433), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465438 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465436();
  } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC510) {
    throw Ul(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465431, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465433, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465437, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465434, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465435), var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC510;
  }
  return Hl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465438) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465438.finally(() => {
    Ul(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465431, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465433, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465437, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465434, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465435);
  }) : (Ul(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465431, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465433, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465437, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465434, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465435), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465438);
}
;
function Hl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465447) {
  return !!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465447 && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465447.finally == "function");
}
;
function Ul(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465449, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465450, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465451, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465452, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465453) {
  if (Wl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465452, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465453)) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465454;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465449.setCurrentUnitForType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465450), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465454 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465449.focusUnit) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465454.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465449, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465450);
    return;
  }
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465451 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465449.setCurrentUnitForType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465451.getUnitId());
}
;
function Wl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465461, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465462) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465463 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465462 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465462();
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465461 || !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465463 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465463.has(X)) ? false : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465463.get(X).hasChildInteractionLease(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465461);
}
const Gl = new WeakMap();
;
;
;
var Zl = class {
  constructor() {
    Y(this, "_contributions", new Map()), Y(this, "_nextIndex", 0);
  }
  register(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462308) {
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB35 = {
        contribution: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462308,
        index: this._nextIndex++
      },
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A32 = this._contributions["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462308.childType) ?? [];
    return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A32.push(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB35), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A32.sort(eu), this._contributions["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462308.childType, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A32), toDisposable(() => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406 = this._contributions["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462308.childType);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406) return;
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106 !== var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB35);
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2.length ? this._contributions["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462308.childType, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2) : this._contributions["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462308.childType);
    });
  }
  get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462310) {
    return this.getAll(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462310)[0];
  }
  getAll(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462312, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462313) {
    return (this._contributions["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462312) ?? []).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408.contribution).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409 => !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462313 || fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F11(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462313);
  }
  getMergedMenuSchema(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462316, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462317 = "ribbon") {
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A34 = this.getAll(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462316, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462317).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46410 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46410.menuSchema).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411 && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411 == "object");
    if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A34.length) return tu(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A34);
  }
  mountMenu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462320) {
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB6 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462320.surface ?? "ribbon",
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462321 = this.getAll(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462320.childType, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB6);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462321.length) return;
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A36 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462321.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46412 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46412.mountMenu);
    if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A36.length) {
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A36.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107 => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108;
        return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107.mountMenu) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107, {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462320,
          surface: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB6,
          menuSchema: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107.menuSchema,
          scopedActionServiceTokens: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107.scopedActionServiceTokens
        });
      }).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111);
      return toDisposable(() => {
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617.dispose());
      });
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462322 = this.getMergedMenuSchema(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462320.childType, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB6);
    if (var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB6 === "ribbon") return wl({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462320,
      surface: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB6,
      menuSchema: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462322,
      scopedActionServiceTokens: Ql(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462321)
    }) ?? undefined;
  }
};
function Ql(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465491) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A72 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465491.flatMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462326 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462326.scopedActionServiceTokens ?? []);
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A72.length ? Array.from(new Set(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A72)) : undefined;
}
;
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F11(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465493) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465493.surface ?? "ribbon";
}
;
function eu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465495, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465496) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465495.contribution["order"] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465495.index) - (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465496.contribution["order"] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465496.index) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465495.index - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465496.index;
}
;
function tu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465499) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465499.reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462327, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462328) => au(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462327, nu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462328)), {});
}
;
function nu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465501) {
  if (!su(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465501)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465501;
  let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929920 = new Set(Object.values(RibbonPosition)),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A74 = Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465501).filter(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462329]) => var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929920.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462329)),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A75 = Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465501).filter(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462330]) => iu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462330));
  if (!var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A74.length && !var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A75.length) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465501;
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB71 = {};
  Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465501).forEach(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462331, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462332]) => {
    !var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929920.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462331) && !iu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462331) && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB71[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462331] = ou(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462332));
  });
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72 = su(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB71[MenuManagerPosition.RIBBON]) ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB71[MenuManagerPosition.RIBBON] : {};
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A74.forEach(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462335, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462336]) => {
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462335] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462335 in var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72 ? au(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462335], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462336) : ou(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462336);
  }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A75.forEach(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462339, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462340]) => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462341 = iu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462339);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462341) return;
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB37 = su(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462341]) ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462341] : {};
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB37[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462339] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462339 in var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB37 ? au(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB37[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462339], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462340) : ou(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462340), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462341] = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB37;
  }), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB71[MenuManagerPosition.RIBBON] = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB71;
}
const ru = [[Object.values(RibbonStartGroup), RibbonPosition.START], [Object.values(RibbonInsertGroup), RibbonPosition.INSERT], [Object.values(RibbonFormulasGroup), RibbonPosition.FORMULAS], [Object.values(RibbonDataGroup), RibbonPosition.DATA], [Object.values(RibbonViewGroup), RibbonPosition.VIEW], [Object.values(RibbonOthersGroup), RibbonPosition.OTHERS]];
function iu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465503) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465504;
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465504 = ru.find(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462345]) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462345.includes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465503))) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465504[1];
}
;
function au(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465507, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465508) {
  if (!su(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465507) || !su(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465508)) return ou(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465508);
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB75 = {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465507
  };
  return Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465508).forEach(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462346, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462347]) => {
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB75[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462346] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462346 in var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB75 ? au(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB75[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462346], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462347) : ou(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462347);
  }), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB75;
}
;
function ou(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465511) {
  return Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465511) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465511.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350 => ou(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350)) : su(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465511) ? Object.fromEntries(Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465511).map(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462351, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462352]) => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462351, ou(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462352)])) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465511;
}
;
function su(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465513) {
  return !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465513 && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465513 == "object" && !Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465513);
}
;
;
;
;
;
;
;
;
gu = fn_L0_core_endo_routine_pure_ON_zalloc_nothrow_sigD23F([Q(0, ICommandService), Q(1, IUniverInstanceService)], gu);
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
ud = fn_L0_core_endo_routine_pure_ON_zalloc_nothrow_sigD23F([Q(0, Inject(EmbedModelService)), Q(1, Inject(EmbedReferencedUnitMaterializeService)), Q(2, Inject(EmbedHostAdapterRegistryService)), Q(3, Inject(EmbedHostAnchorModelService))], ud);
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
Vf = fn_L0_core_endo_routine_pure_ON_zalloc_nothrow_sigD23F([Q(0, Inject(cl))], Vf);
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
lp = fn_L0_core_endo_routine_pure_ON_zalloc_nothrow_sigD23F([Q(0, Inject(EmbedModelService)), Q(1, Inject(EmbedHostAnchorModelService)), Q(2, Inject(EmbedHostAdapterRegistryService)), Q(3, Inject(ud)), Q(4, Inject(cd)), Q(5, Inject(cl)), Q(6, Inject(Bf)), Q(7, Inject(Cd)), Q(8, ICommandService), Q(9, IUniverInstanceService), Q(10, Inject(ThemeService)), Q(11, IImageIoService)], lp);
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
em = fn_L0_core_endo_routine_pure_ON_zalloc_nothrow_sigD23F([Q(0, Inject(ComponentManager))], em);
tm = fn_L0_core_endo_routine_pure_ON_zalloc_nothrow_sigD23F([Q(0, Inject(Injector)), Q(1, Inject(wd))], tm);
rm = fn_L0_core_endo_routine_pure_ON_zalloc_nothrow_sigD23F([Q(0, IUniverInstanceService), Q(1, Inject(EmbedHostAnchorModelService))], rm);
im = fn_L0_core_endo_routine_pure_ON_zalloc_nothrow_sigD23F([Q(0, Inject(Injector)), Q(1, Inject(X))], im);
am = fn_L0_core_endo_routine_pure_ON_zalloc_nothrow_sigD23F([Q(0, Inject(Ss)), Q(1, Inject(bs)), Q(2, Inject(IRibbonOverrideService)), Q(3, Inject(IUIPartsService)), Q(4, Inject(Injector))], am);
sm = fn_L0_core_endo_routine_pure_ON_zalloc_nothrow_sigD23F([Q(0, ICommandService), Q(1, Inject(EmbedModelService)), Q(2, Inject(IDialogService))], sm);
lm = fn_L0_core_endo_routine_pure_ON_zalloc_nothrow_sigD23F([Q(0, Inject(lp)), Q(1, IPrintPreparationService), Q(2, Inject(Injector)), Q(3, IUniverInstanceService), Q(4, Inject(SlidePrintDrawingTransformService)), Q(5, Inject(BoardPrintCompositionService))], lm);
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
Mm = fn_L0_core_endo_routine_pure_ON_zalloc_nothrow_sigD23F([Q(0, IShortcutService)], Mm);
;
;
;
;
;
;
;
;
;
;
;
;
Xm = fn_L0_core_endo_routine_pure_ON_zalloc_nothrow_sigD23F([Q(0, IBaseUIStateService), Q(1, IBaseProjectionService), Q(2, IBaseViewWheelScrollService)], Xm);
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
Tg = fn_L0_core_endo_routine_pure_ON_zalloc_nothrow_sigD23F([Q(1, Inject(EmbedModelService)), Q(2, Inject(BoardDomLayerService)), Q(3, Inject(IBoardElementService)), Q(4, Inject(IBoardElementStateService)), Q(5, Inject(IBoardUIStateService)), Q(6, IConfigService), Q(7, ICommandService)], Tg);
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
qg = fn_L0_core_endo_routine_pure_ON_zalloc_nothrow_sigD23F([Q(1, Inject(IUniverInstanceService)), Q(2, Inject(ICommandService)), Q(3, Inject(Bf)), Q(4, Inject(cl)), Q(5, Inject(EmbedModelService)), Q(6, IRenderManagerService), Q(7, Inject(DocViewScaleService))], qg);
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var_L0_core_endo_options_pure_O1_zalloc_nothrow_sig29DC.displayName = "FloatingToolbarSplitTrigger";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
ey = fn_L0_core_endo_routine_pure_ON_zalloc_nothrow_sigD23F([Q(0, IUniverInstanceService), Q(1, IRenderManagerService)], ey);
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
yy = fn_L0_core_endo_routine_pure_ON_zalloc_nothrow_sigD23F([Q(0, IUniverInstanceService), Q(1, IRenderManagerService)], yy);
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
Vy = fn_L0_core_endo_routine_pure_ON_zalloc_nothrow_sigD23F([Q(0, Inject(Injector)), Q(1, Inject(X))], Vy);
;
Wy = fn_L0_core_endo_routine_pure_ON_zalloc_nothrow_sigD23F([Q(0, Inject(EmbedFocusOwnerService)), Q(1, IUndoRedoService)], Wy);
Y(Gy, "pluginName", "UNIVER_EMBED_UI_PLUGIN"), Y(Gy, "packageName", fs), Y(Gy, "version", ps), Y(Gy, "type", UniverInstanceType.UNIVER_UNKNOWN), Gy = fn_L0_core_endo_routine_pure_ON_zalloc_nothrow_sigD23F([DependentOn(UniverLicensePlugin, UniverEmbedPlugin), Q(1, Inject(Injector)), Q(2, IConfigService), Q(3, IUniverInstanceService)], Gy);
export { Y, ac, nc, Jc, Fs, gl, Zl, Gl, ms, X, Es, ws, wl, hs, jc, fl, Tl, Sl, Cl, rc, Z, Ds, ks, fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F11 };
