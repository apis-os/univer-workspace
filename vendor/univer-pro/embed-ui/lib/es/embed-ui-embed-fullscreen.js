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
import { Y } from "./internal-core-endo.js";
let gu = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462374, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462375) {
    super(), Y(this, "_session$", new BehaviorSubject(null)), Y(this, "_exited$", new Subject()), Y(this, "session$", this._session$["asObservable"]()), Y(this, "exited$", this._exited$["asObservable"]()), this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462374.onCommandExecuted(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414 => {
      if (!fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F12(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414)) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415 = this.getSession();
      (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415.hostUnitId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414.params["unitId"] && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415.embedId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46414.params["embedId"] && this.exit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46415.embedId);
    })), this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462375.unitDisposed$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419 = this.getSession(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46420 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418.getUnitId();
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419.hostUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46420 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419.childUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46420) && this.exit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419.embedId);
    }));
  }
  dispose() {
    super.dispose(), this._session$["complete"](), this._exited$["complete"]();
  }
  getSession() {
    return this._session$["getValue"]();
  }
  enter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462378) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462379, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462380;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462378.childUnitId || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462378.childType == null) throw Error("EMBED_FULLSCREEN_CHILD_NOT_RESOLVED");
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462381 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462379 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462378.sourceMeta) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462379.floating) || undefined,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462382 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462380 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462378.sourceMeta) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462380.tab) || undefined;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462382 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462382.enabled && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462381) throw Error("EMBED_FULLSCREEN_TAB_NOT_SUPPORTED");
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462383 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462381 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462381.layout : undefined;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462383) throw Error("EMBED_FULLSCREEN_LAYOUT_NOT_RESOLVED");
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB39 = {
      hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462378.hostUnitId,
      embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462378.embedId,
      childUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462378.childUnitId,
      childType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462378.childType,
      entry: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462378.entry,
      layout: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462383
    };
    return this._session$["next"](var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB39), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB39;
  }
  exit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462390) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462391 = this.getSession();
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462391 && (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462390 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462391.embedId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462390) && this._session$["next"](null);
  }
  notifyExited(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462394) {
    this._exited$["next"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462394);
  }
};
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F12(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465593) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465593.id === SoftDeleteEmbedDescriptorMutation.id && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465593.params == "object" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465593.params !== null && "unitId" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465593.params && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465593.params["unitId"] == "string" && "embedId" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465593.params && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465593.params["embedId"] == "string";
}
export { gu as EmbedFullscreenService };
