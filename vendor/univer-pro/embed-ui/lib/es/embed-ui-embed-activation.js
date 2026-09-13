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
let dl = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462076, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462077, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462078, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462079, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462080, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462081, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462082, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462083, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462084) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462085;
    super(), this._univerInstanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462076, this._focusOwnerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462077, this._hostAdapterRegistry = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462078, this._menuOverrideService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462079, this._mountService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462080, this._blockRegistry = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462081, this._floatingActiveService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462082, this._contextService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462083, this._layoutService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462084, Y(this, "_previousChildCurrentUnits", new Map());
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462086 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462085 = this._univerInstanceService["focused$"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462085.subscribe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385 => {
      this._restoreStage2ChildFocusWhenHostRefocuses(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385 ?? null);
    });
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462086 && this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462086);
  }
  activateTab(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462098) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462099;
    this._assertResolvedChild(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462098), this._rememberPreviousChildCurrentUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462098), this._hostAdapterRegistry["activateAnchor"]({
      embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462098.embedId,
      hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462098.hostUnitId,
      hostType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462098.hostType,
      entry: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462098.entry,
      hostAnchorId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462098.hostAnchorId,
      descriptor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462098
    }), this._mountService["activateSession"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462098.embedId);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462100 = this._blockRegistry["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462098.childType);
    return this._menuOverrideService["activate"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462098, "tab-active", {
      layoutPolicy: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462100 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462099 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462100.layoutPolicy) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462099.tab,
      allowPlaceholder: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462100 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462100.hostChromeMode) === "title-only" || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462100 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462100.hostHeaderMode) === "placeholder",
      allowHiddenRibbon: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462100 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462100.hostChromeMode) === "none"
    });
  }
  activateFloating(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462104, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462105, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462106 = {}) {
    this._assertResolvedChild(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462104);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462107 = this._floatingActiveService["getActive"](),
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A32 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462105 === "stage2" && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462107 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462107.embedId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462104.embedId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462107.childUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462104.childUnitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462107.stage === "stage2";
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462107 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462107.stage) === "stage2" && !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A32 && this._restorePreviousChildCurrentUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462107.embedId), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462105 === "stage2" && !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A32 && this._rememberPreviousChildCurrentUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462104), this._focusOwnerService["setFocusOwner"]({
      hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462104.hostUnitId,
      embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462104.embedId,
      childUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462104.childUnitId,
      childType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462104.childType,
      reason: "pointer"
    }), this._mountService["activateSession"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462104.embedId);
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB33 = {
      hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462104.hostUnitId,
      embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462104.embedId,
      childUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462104.childUnitId
    };
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462105 ? this._floatingActiveService["activate"](var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB33, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462105) : this._floatingActiveService["activate"](var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB33), this._menuOverrideService["clear"](), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462105 === "stage2" ? (this._focusUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462104.childUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462104.childType, false, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462104.embedId), this._scheduleFloatingChildFocus(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462104)) : (this._univerInstanceService["setCurrentUnitForType"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462104.hostUnitId), this._univerInstanceService["focusUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462104.hostUnitId));
  }
  focusFloatingRuntime(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462112, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462113 = {}) {
    this.activateFloating(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462112, "stage2", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462113);
  }
  activateFullscreen(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462116, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462117 = {}) {
    this._assertResolvedChild(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462116), this._focusOwnerService["setFocusOwner"]({
      hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462116.hostUnitId,
      embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462116.embedId,
      childUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462116.childUnitId,
      childType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462116.childType,
      reason: "pointer"
    }), this._focusUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462116.childUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462116.childType, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462117.focusLayout ?? true, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462116.embedId);
  }
  focusHostForPassiveRuntime(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462120) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462121 = this._mountService["releaseSessionFocus"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462120.embedId);
    this._menuOverrideService["clear"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462120.embedId), this._focusOwnerService["clearFocusOwner"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462120.embedId), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462121 && this._previousChildCurrentUnits["has"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462120.embedId) && this._restorePreviousChildCurrentUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462120.embedId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462120.childType, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462120.childUnitId), this._focusUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462120.hostUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462120.hostType, false);
  }
  clearFullscreen(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462124) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462125 = this._focusOwnerService["getFocusOwner"]();
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462125 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462125.embedId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462125.embedId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462124.embedId || (this._focusOwnerService["clearFocusOwner"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462124.embedId), this._univerInstanceService["setCurrentUnitForType"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462124.hostUnitId), this._univerInstanceService["focusUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462124.hostUnitId), requestAnimationFrame(() => {
      this._focusOwnerService["getFocusOwner"]() || (this._univerInstanceService["focusUnit"](null), this._univerInstanceService["focusUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462124.hostUnitId));
    }));
  }
  clearFloating(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462128, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462129) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462130 = this._focusOwnerService["getFocusOwner"]();
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462128 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462130 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462130.embedId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462130.embedId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462128) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462131 = this._floatingActiveService["getActive"]();
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462128 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462130 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462131 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462131.embedId) !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462128 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462129) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462132 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462129 ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462130 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462130.hostUnitId) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462131 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462131.hostUnitId);
    this._floatingActiveService["clear"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462128), this._focusOwnerService["clearFocusOwner"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462128), this._menuOverrideService["clear"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462128), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462128 && this._restorePreviousChildCurrentUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462128), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462128 && this._mountService["deactivateFloatingSession"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462128), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462132 && (this._univerInstanceService["setCurrentUnitForType"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462132), this._univerInstanceService["focusUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462132), requestAnimationFrame(() => {
      this._focusOwnerService["getFocusOwner"]() || (this._univerInstanceService["focusUnit"](null), this._univerInstanceService["focusUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462132));
    }));
  }
  clearTab(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462138) {
    this._menuOverrideService["clear"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462138), this._focusOwnerService["clearFocusOwner"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462138);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462139 = this._mountService["deactivateTabSessions"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462138);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462139.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387 => this._restorePreviousChildCurrentUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387.embedId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387.childType, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387.childUnitId)), new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462139.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388.hostUnitId)).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389 => {
      this._univerInstanceService["setCurrentUnitForType"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389), this._univerInstanceService["focusUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389);
    });
  }
  _rememberPreviousChildCurrentUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462142) {
    if (this._previousChildCurrentUnits["has"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462142.embedId)) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462143 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462142.childType,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462144 = this._getCurrentUnitId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462143);
    this._previousChildCurrentUnits["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462142.embedId, {
      childType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462143,
      childUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462142.childUnitId,
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462144 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462144 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462142.childUnitId ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462144 : undefined
    });
  }
  _restorePreviousChildCurrentUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462148, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462149, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462150) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462151 = this._previousChildCurrentUnits["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462148);
    this._previousChildCurrentUnits["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462148);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462152 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462149 ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462151 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462151.childType),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462153 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462150 ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462151 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462151.childUnitId);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462152 == null || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462153) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462154 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462151 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462151.childType) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462152 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462151.unitId && this._hasUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462151.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462152) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462151.unitId : this._findFallbackUnitId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462152, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462153);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462154 && this._univerInstanceService["setCurrentUnitForType"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462154);
  }
  _getCurrentUnitId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462162) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462163;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462164 = this._univerInstanceService["getCurrentUnitOfType"];
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462164 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462163 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462164.call(this._univerInstanceService, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462162)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462163.getUnitId();
  }
  _hasUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462168, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462169) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462170 = this._univerInstanceService["getUnit"];
    return !!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462170 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462170.call(this._univerInstanceService, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462168, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462169));
  }
  _findFallbackUnitId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462174, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462175) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462176;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462177 = this._univerInstanceService["getAllUnitsForType"];
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462177 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462176 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462177.call(this._univerInstanceService, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462174)) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462176 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462176.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391.getUnitId() !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462175)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462176.getUnitId();
  }
  _focusUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462182, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462183, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462184 = true, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462185) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462186 = this._univerInstanceService["getFocusedUnit"];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462185) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462187;
      (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462186 != "function" || ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462187 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462186.call(this._univerInstanceService)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462187.getUnitId()) !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462182) && this._univerInstanceService["focusUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462182), this._setCurrentUnitForType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462182, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462183), this._contextService["setContextValue"](FOCUSING_UNIT, true), this._contextService["setContextValue"](FOCUSING_DOC, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462183 === UniverInstanceType.UNIVER_DOC), this._contextService["setContextValue"](FOCUSING_SHEET, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462183 === UniverInstanceType.UNIVER_SHEET), this._contextService["setContextValue"](FOCUSING_SLIDE, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462183 === UniverInstanceType.UNIVER_SLIDE), this._contextService["setContextValue"](FOCUSING_BOARD, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462183 === UniverInstanceType.UNIVER_BOARD);
    }
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462184 && this._focusLayout();
  }
  _restoreStage2ChildFocusWhenHostRefocuses(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462194) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462195 = this._floatingActiveService["getActive"]();
    if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462195 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462195.stage) !== "stage2" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462194 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462195.hostUnitId) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462196 = this._focusOwnerService["getFocusOwner"]();
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462196 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462196.embedId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462195.embedId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462196.childUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462195.childUnitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462196.childType != null && this._focusUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462196.childUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462196.childType, false, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462196.embedId);
  }
  _scheduleFloatingChildFocus(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462200) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462201 = () => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392 = this._floatingActiveService["getActive"]();
      (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392.embedId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462200.embedId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392.childUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462200.childUnitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392.stage === "stage2" && this._focusUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462200.childUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462200.childType, false, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462200.embedId);
    };
    typeof queueMicrotask == "function" && queueMicrotask(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462201), requestAnimationFrame(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462201);
  }
  _setCurrentUnitForType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462204, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462205) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462206;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462207 = this._univerInstanceService["getCurrentUnitOfType"];
    (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462207 != "function" || ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462206 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462207.call(this._univerInstanceService, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462205)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462206.getUnitId()) !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462204) && this._univerInstanceService["setCurrentUnitForType"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462204);
  }
  _focusLayout() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462212 = () => this._layoutService["focus"]();
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462212(), typeof queueMicrotask == "function" && queueMicrotask(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462212), requestAnimationFrame(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462212);
  }
  _assertResolvedChild(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462214) {
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462214.childUnitId || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462214.childType == null) throw Error("EMBED_ACTIVATION_CHILD_NOT_RESOLVED");
  }
};
export { dl as EmbedActivationService };
