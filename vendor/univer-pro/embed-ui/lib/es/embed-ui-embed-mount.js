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
import { Es, Jc, X, Y, hs, jc, ms } from "./internal-core-endo.js";
import { Lc } from "./embed-ui-embed-child-view-registry.js";
const ol = "EMBED_DUPLICATE_CHILD_UNIT";
var sl = class extends Error {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461802, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461803) {
    super(ol + ":\x20" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461802), this.childUnitId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461802, this.existingEmbedId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461803, Y(this, "code", ol), this.name = "EmbedDuplicateChildUnitError";
  }
};
let cl = class {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461806, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461807, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461808, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461809, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461810, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461811, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461812, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461813) {
    this._hostContainerRegistry = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461806, this._childViewRegistry = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461807, this._overlayRootService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461808, this._sceneCanvasCaptureService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461809, this._univerInstanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461810, this._floatingActiveService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461811, this._runtimePolicyService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461812, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461813, Y(this, "_sessions", new Map()), Y(this, "_tabFocusLeases", new Map()), Y(this, "_tabHostRenderLeases", new Map());
  }
  mount(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461822) {
    return this._mountResolvedHost(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461822);
  }
  mountIntoHostElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461824, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461825, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461826) {
    return this._mountResolvedHost(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461824, {
      hostElement: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461825,
      runtimeRoots: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461826
    });
  }
  _mountResolvedHost(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461831) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461832, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461833;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830.childUnitId || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830.childType == null) throw Error("EMBED_MOUNT_CHILD_NOT_RESOLVED");
    this._assertChildUnitAvailable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830), this.unmount(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830.embedId);
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB21 = {
        hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830.hostUnitId,
        embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830.embedId,
        childUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830.childUnitId
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461834 = this._resolveLayout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461835 = this._hostContainerRegistry["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830.hostType, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830.entry);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461835 || !this._hostContainerRegistry["supports"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830.hostType, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830.entry, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461834)) throw Error("EMBED_MOUNT_HOST_NOT_REGISTERED");
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461836 = this._runtimePolicyService["canMount"](var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB21),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461837 = this._childViewRegistry["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830.childType);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461836.allowed && !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461837 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461837.supportedLayouts["includes"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461834))) throw Error("EMBED_MOUNT_CHILD_NOT_REGISTERED");
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22 = {
        descriptor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830,
        layout: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461834,
        injector: this._injector,
        hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830.hostUnitId,
        embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830.embedId,
        childUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830.childUnitId,
        childType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830.childType
      },
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18 = [],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461838 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461831 ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461832 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461835.mount) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461832.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461835, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22)),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461839 = this._normalizeHostMountResult(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461838);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461839.disposable && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461839.disposable), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22.hostElement = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461839.hostElement ?? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22.hostElement, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22.container = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22.hostElement, !var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22.hostElement || !var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22.container) throw [...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18].reverse().forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335.dispose()), Error("EMBED_MOUNT_HOST_CONTAINER_NOT_RESOLVED");
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461839.runtimeRoots || var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18.push(hs(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22.hostElement)), !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461836.allowed) return this._mountBlockedRuntime(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461834, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22.hostElement, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461839.runtimeRoots, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461836.reason);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461837) throw [...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18].reverse().forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336.dispose()), Error("EMBED_MOUNT_CHILD_NOT_REGISTERED");
    let {
      renderScope: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461840,
      disposable: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461841,
      setActive: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461842
    } = this._createRenderScope(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461834, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22.hostElement, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461839.runtimeRoots);
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461841);
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB23 = {
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22,
        hostElement: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22.hostElement,
        container: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22.container,
        renderScope: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461840
      },
      {
        runtimeScope: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461843,
        disposable: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461844
      } = jc(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB23, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461842, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461837.scopedDependencies),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB24 = {
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB23,
        runtimeScope: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461843
      };
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461844);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461845 = this._registerRuntimeBoundary(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22.hostElement, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461840, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461843.roots);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461845 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461845), this._injector["has"](X) && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18.push(this._injector["get"](X).registerRuntimeScope({
      embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830.embedId,
      hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830.hostUnitId,
      childUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830.childUnitId,
      childType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830.childType
    }));
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461846 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461843.injector === var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22.injector ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461843.instanceService;
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18.push(this._registerChildFocusBridge(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22.hostElement, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461840.mode, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461846)), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18.push(this._sceneCanvasCaptureService["registerContext"](var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB24));
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461847 = this._createMountFocusRestorer(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461848 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461833 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461837.mount) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461833.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461837, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB24);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461848 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461848), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461847), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18.push(this._runtimePolicyService["registerMountedRuntime"](var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB21)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461840.mode === "float") {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337 = this._mountFloatingMenu(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB24);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337);
    }
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB25 = {
      hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830.hostUnitId,
      embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830.embedId,
      childUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830.childUnitId,
      childType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830.childType,
      entry: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830.entry,
      layout: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461834,
      hostElement: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22.hostElement,
      context: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB24
    };
    return this._sessions["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830.embedId, {
      session: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB25,
      disposables: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18,
      setActive: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461842
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461834 !== "tab-peer" && this._initializeFloatingSessionActiveState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461834, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461842), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB25;
  }
  _mountBlockedRuntime(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461868, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461869, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461870, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461871, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461872, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461873) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461874 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461871 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461871.content) ?? ms(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461870, "data-embed-content-root") ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461870,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461875 = ul(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461873);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461874.replaceChildren(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461875), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461872.push(toDisposable(() => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461875.parentElement === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461874 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461875.remove();
    }));
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB31 = {
      hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461868.hostUnitId,
      embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461868.embedId,
      childUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461868.childUnitId,
      childType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461868.childType,
      entry: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461868.entry,
      layout: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461869,
      hostElement: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461870
    };
    return this._sessions["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461868.embedId, {
      session: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB31,
      disposables: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461872,
      setActive: () => {}
    }), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB31;
  }
  _initializeFloatingSessionActiveState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461884, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461885, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461886) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461885 !== "tab-peer") {
      if (this._injector["has"](EmbedFocusOwnerService)) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685 = this._injector["get"](EmbedFocusOwnerService).getFocusOwner();
        if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685.hostUnitId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461884.hostUnitId) {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461886(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685.embedId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461884.embedId);
          return;
        }
      }
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461886(false);
    }
  }
  unmount(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461890) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461891 = this._sessions["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461890);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461891 && (this._releaseTabPeerFocusLease(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461890), this._releaseTabPeerHostRenderLease(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461890), [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461891.disposables].reverse().forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338.dispose()), this._sessions["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461890));
  }
  getSession(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461894) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461895;
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461895 = this._sessions["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461894)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461895.session;
  }
  listSessions() {
    return [...this._sessions["values"]()].map(({
      session: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339
    }) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339);
  }
  activateSession(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461898) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461899 = this._sessions["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461898);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461899) {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461899.session["layout"] !== "tab-peer") {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461900;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461900 = this._floatingActiveService["getActive"]()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461900.embedId;
        this._sessions["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613 => {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614;
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613.session["layout"] === "tab-peer" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613.session["hostUnitId"] !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461899.session["hostUnitId"]) return;
          let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613.session["embedId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461898;
          !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613.session["embedId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686 || ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613.session["context"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614.renderScope["rootElement"].dataset["embedRenderScopeActive"]) === "true") && this._runChildBeforeDeactivate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613.session), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613.setActive(var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A);
        });
        return;
      }
      this._suspendTabPeerHostRender(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461899.session), this._sessions["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687 => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688;
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687.session["layout"] !== "tab-peer" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687.session["hostUnitId"] !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461899.session["hostUnitId"]) return;
        let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687.session["embedId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461898;
        !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 && ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687.session["context"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688.renderScope["rootElement"].dataset["embedRenderScopeActive"]) === "true" && this._runChildBeforeDeactivate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687.session), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687.setActive(var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2);
      }), this._focusTabPeerSession(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461899.session), this._refreshTabPeerRender(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461899.session);
    }
  }
  releaseSessionFocus(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461904) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461905 = this._tabFocusLeases["has"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461904);
    return this._releaseTabPeerFocusLease(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461904), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461905;
  }
  deactivateTabSessions(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461908) {
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A20 = [];
    return this._sessions["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340.session["layout"] === "tab-peer" && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461908 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340.session["embedId"] !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461908 || (this._runChildBeforeDeactivate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340.session), this._releaseTabPeerFocusLease(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340.session["embedId"]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340.setActive(false), this._releaseTabPeerHostRenderLease(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340.session["embedId"]), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A20.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340.session)));
    }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A20;
  }
  deactivateFloatingSession(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461910) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461911 = this._sessions["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461910);
    if (!(!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461911 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461911.session["layout"] === "tab-peer")) return this._runChildBeforeDeactivate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461911.session), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461911.setActive(false), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461911.session;
  }
  setActive(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461914, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461915) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461916;
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461916 = this._sessions["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461914)) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461916.setActive(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461915);
  }
  _runChildBeforeDeactivate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461920) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461921 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461920.context;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461921) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461922 = this._childViewRegistry["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461920.childType);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461922 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461922.beforeDeactivate) try {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461922.beforeDeactivate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461921);
    } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC5) {
      console.warn("[embed-ui] failed to deactivate embedded child view", var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC5);
    }
  }
  _suspendTabPeerHostRender(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461926) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461927;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461928 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461927 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461926.context) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461927.injector;
    if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461928 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461928.has(IRenderManagerService))) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461929 = this._tabHostRenderLeases["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461926.hostUnitId);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461929) {
      this._tabHostRenderLeases["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461926.hostUnitId, {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461929,
        embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461926.embedId
      });
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461930 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461928.get(IRenderManagerService).getRenderUnitById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461926.hostUnitId);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461930 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461930.isMainScene === false || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461930.isDisposed()) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461931 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461930.engine["getCanvasElement"]().parentElement;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461931 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461930.deactivate(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461930.engine["unmount"](), this._tabHostRenderLeases["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461926.hostUnitId, {
      embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461926.embedId,
      render: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461930,
      parentElement: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461931
    }));
  }
  _releaseTabPeerHostRenderLease(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461938) {
    this._tabHostRenderLeases["forEach"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343) => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342.embedId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461938 && (this._tabHostRenderLeases["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343), !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342.render["isDisposed"]() || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342.parentElement["isConnected"]) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342.render["engine"].getCanvasElement().parentElement !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342.parentElement && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342.render["engine"].mount(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342.parentElement), Jc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342.render, {
        activate: true
      })));
    });
  }
  _resolveLayout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461940) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461941, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461942;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461943 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461941 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461940.sourceMeta) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461941.floating) || undefined;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461943 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461943.layout) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461943.layout;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461944 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461942 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461940.sourceMeta) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461942.tab) || undefined;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461944 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461944.enabled) return "tab-peer";
    throw Error("EMBED_MOUNT_LAYOUT_NOT_RESOLVED");
  }
  _createRenderScope(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461950, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461951, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461952, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461953) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461954, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461955;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461956 = new BehaviorSubject(true),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461957 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461950.hostAnchorId,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461958 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461954 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461950.sourceMeta) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461954.tab,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461958 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461958.enabled ? "tab" : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461955 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461950.sourceMeta) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461955.floating ? "float" : "inline",
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461959 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461953 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461953.content) ?? ms(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461952, "data-embed-content-root") ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461952,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461960 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461953 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461953.canvas) ?? ms(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461952, "data-embed-canvas-root") ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461952,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461961 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461953 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461953.overlay) ?? ms(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461952, "data-embed-overlay-root") ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461952,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461962 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461953 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461953.popup) ?? ms(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461952, "data-embed-popup-root") ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461961,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461963 = this._overlayRootService["register"]({
        childUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461950.childUnitId,
        embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461950.embedId,
        hostAnchorId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461957,
        root: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461961
      }),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461964 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46346 => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461956.getValue() !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46346 && (ll(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461952, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46346, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461956.next(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46346));
      };
    return ll(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461952, true, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4), {
      renderScope: {
        hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461950.hostUnitId,
        hostAnchorId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461957,
        embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461950.embedId,
        childUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461950.childUnitId,
        childType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461950.childType,
        layout: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461951,
        mode: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4,
        rootElement: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461952,
        contentRoot: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461959,
        canvasRoot: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461960,
        overlayRoot: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461961,
        popupRoot: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461962,
        menuOutlet: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461953 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461953.menuSlot ? {
          container: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461953.menuSlot
        } : undefined,
        active$: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461956.asObservable()
      },
      disposable: toDisposable(() => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461963.dispose(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461964(false), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461956.complete();
      }),
      setActive: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461964
    };
  }
  _registerRuntimeBoundary(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461980, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461981, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461982, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461983) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461984 = this._injector["has"](Es),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461985 = this._injector["has"](X);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461984 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461985) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461986 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461984 ? this._injector["get"](Es) : undefined,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461987 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461985 ? this._injector["get"](X) : undefined,
      var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5910 = new Map(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461988 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46348, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349) => {
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46348) return;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5910.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46348);
        (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350 === "runtime") && var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5910.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46348, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349);
      };
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461988(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461981, "runtime"), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461988(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461982.rootElement, "runtime"), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461988(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461982.contentRoot, "runtime"), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461988(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461982.canvasRoot, "runtime"), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461988(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461982.overlayRoot, "runtime"), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461988(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461983.root, "runtime"), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461988(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461983.content, "runtime"), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461988(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461983.canvas, "runtime"), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461988(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461983.overlay, "runtime"), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461988(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461982.popupRoot, "child-popup"), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461988(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461983.popup, "child-popup");
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A22 = [...var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5910].flatMap(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46354, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46355]) => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461986 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461986.registerRoot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461980.embedId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46354, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461980.childUnitId), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461987 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461987.registerElement({
      embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461980.embedId,
      role: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46355,
      element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46354
    })].filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691));
    return toDisposable(() => {
      [...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A22].reverse().forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692.dispose());
    });
  }
  _normalizeHostMountResult(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461998) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461998 ? "dispose" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461998 ? {
      disposable: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461998
    } : {
      hostElement: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461998.hostElement,
      runtimeRoots: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461998.runtimeRoots,
      disposable: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461998.disposable ? toDisposable(() => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46356;
        return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46356 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461998.disposable) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46356.dispose();
      }) : undefined
    } : {};
  }
  _mountFloatingMenu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462000) {
    if (!this._injector["has"](Lc)) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462001 = this._injector["get"](Lc).get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462000.descriptor["hostType"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462000.descriptor["entry"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462000.childType);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462001) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462002 = this._floatingActiveService["getActive"](),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462003 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462001.mount({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462000,
        active: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462002
      });
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462003 ? toDisposable(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462003.dispose()) : undefined;
  }
  _registerChildFocusBridge(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462008, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462009, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462010, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462011) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462012 = this._injector["has"](Es) ? this._injector["get"](Es) : undefined,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462013 = this._injector["has"](X) ? this._injector["get"](X) : undefined,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462014 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462009.ownerDocument,
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24 = [],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462015 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462010 === "float" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462011 ? this._floatingActiveService["active$"].subscribe(() => {
        this._floatingActiveService["getStage"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462008.embedId) !== "stage2" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462011.focusUnit(null);
      }) : undefined,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462016 = () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462010 !== "float" || this._floatingActiveService["getStage"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462008.embedId) === "stage2",
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462017 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359 = {}) => {
        let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A11 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359.focusUnit !== false,
          var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A12 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359.activateSession !== false,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358.target) instanceof Element ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358.target : null;
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360.closest('[data-embed-floating-menu="true"], [data-embed-floating-menu-popup="true"], [data-embed-ribbon-override="true"]') || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462008.childUnitId || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462008.childType == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462010 === "tab" && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358.type) === "focusin" && !this._tabFocusLeases["has"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462008.embedId) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462016()) return;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462010 === "tab" && this._injector["has"](EmbedFocusOwnerService) ? this._injector["get"](EmbedFocusOwnerService).getFocusOwner() : null,
          var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A13 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361.hostUnitId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462008.hostUnitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361.embedId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462008.embedId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361.childUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462008.childUnitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361.childType === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462008.childType;
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462010 === "float" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462011 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462011.setCurrentUnitForType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462008.childUnitId), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A11 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462011.focusUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462008.childUnitId)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462010 === "tab" && this._injector["has"](IUniverInstanceService)) {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363;
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693 = this._injector["get"](IUniverInstanceService),
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693.getCurrentUnitOfType,
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693.getFocusedUnit;
          (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694 != "function" || ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462008.childType)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362.getUnitId()) !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462008.childUnitId) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693.setCurrentUnitForType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462008.childUnitId), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A11 && (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695 != "function" || ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363.getUnitId()) !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462008.childUnitId) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693.focusUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462008.childUnitId);
        }
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462010 === "tab" && this._injector["has"](IContextService)) {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696 = this._injector["get"](IContextService);
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696.setContextValue(FOCUSING_UNIT, true), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696.setContextValue(FOCUSING_DOC, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462008.childType === UniverInstanceType.UNIVER_DOC), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696.setContextValue(FOCUSING_SHEET, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462008.childType === UniverInstanceType.UNIVER_SHEET), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696.setContextValue(FOCUSING_SLIDE, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462008.childType === UniverInstanceType.UNIVER_SLIDE), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696.setContextValue(FOCUSING_BOARD, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462008.childType === UniverInstanceType.UNIVER_BOARD);
        }
        if (this._injector["has"](EmbedFocusOwnerService)) {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697 = this._injector["get"](EmbedFocusOwnerService),
            var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1 = {
              hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462008.hostUnitId,
              embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462008.embedId,
              childUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462008.childUnitId,
              childType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462008.childType,
              reason: "pointer"
            },
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697.getFocusOwner();
          ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698.hostUnitId) !== var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1.hostUnitId || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698.embedId !== var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1.embedId || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698.childUnitId !== var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1.childUnitId || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698.childType !== var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1.childType || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698.reason !== var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1.reason) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697.setFocusOwner(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1);
        }
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A12 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462010 === "tab" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462009.dataset["embedRenderScopeActive"] === "true" && this._tabFocusLeases["has"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462008.embedId) && ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358.type) === "pointerdown" || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A13) || this.activateSession(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462008.embedId));
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462018 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370 => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370.target instanceof Element ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370.target : null;
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462009.contains(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371) || !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462012 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462012.contains(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462008.embedId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462013 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462013.containsElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462008.embedId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370))) return;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462017(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370, {
          focusUnit: false,
          activateSession: false
        });
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462014.defaultView;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372.setTimeout(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462017(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370, {
          focusUnit: false,
          activateSession: false
        }), 0));
      };
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462009.addEventListener("pointerdown", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462017, {
      capture: true
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462009.addEventListener("focusin", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462017), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462014.addEventListener("pointerdown", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462018, {
      capture: true
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462014.addEventListener("focusin", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462018, {
      capture: true
    }), toDisposable(() => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462009.removeEventListener("pointerdown", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462017, {
        capture: true
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462009.removeEventListener("focusin", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462017), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462014.removeEventListener("pointerdown", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462018, {
        capture: true
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462014.removeEventListener("focusin", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462018, {
        capture: true
      }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699 => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100;
        return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462014.defaultView) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100.clearTimeout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699);
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462015 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462015.unsubscribe();
    });
  }
  _focusTabPeerSession(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462030) {
    if (this._activateTabPeerFocusLease(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462030), this._injector["has"](IUniverInstanceService)) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376 = this._injector["get"](IUniverInstanceService);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376.setCurrentUnitForType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462030.childUnitId), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376.focusUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462030.childUnitId);
    }
    if (this._injector["has"](IContextService)) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377 = this._injector["get"](IContextService);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377.setContextValue(FOCUSING_UNIT, true), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377.setContextValue(FOCUSING_DOC, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462030.childType === UniverInstanceType.UNIVER_DOC), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377.setContextValue(FOCUSING_SHEET, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462030.childType === UniverInstanceType.UNIVER_SHEET), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377.setContextValue(FOCUSING_SLIDE, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462030.childType === UniverInstanceType.UNIVER_SLIDE), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377.setContextValue(FOCUSING_BOARD, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462030.childType === UniverInstanceType.UNIVER_BOARD);
    }
    this._injector["has"](EmbedFocusOwnerService) && this._injector["get"](EmbedFocusOwnerService).setFocusOwner({
      hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462030.hostUnitId,
      embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462030.embedId,
      childUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462030.childUnitId,
      childType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462030.childType,
      reason: "keyboard"
    });
  }
  _refreshTabPeerRender(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462032) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462033;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462034 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462033 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462032.context) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462033.injector;
    if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462034 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462034.has(IRenderManagerService))) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462035 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462034.get(IRenderManagerService).getRenderUnitById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462032.childUnitId);
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462035 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462035.isMainScene) === false && Jc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462035, {
      activate: true
    });
  }
  _activateTabPeerFocusLease(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462040) {
    this._releaseTabPeerFocusLeasesForHost(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462040.hostUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462040.embedId), this._releaseTabPeerFocusLease(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462040.embedId);
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A26 = [];
    if (this._injector["has"](X) && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A26.push(this._injector["get"](X).acquireLease({
      embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462040.embedId,
      role: "child-session",
      owner: "tab-peer-runtime",
      sessionMode: "child-tab",
      hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462040.hostUnitId,
      childUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462040.childUnitId,
      childType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462040.childType
    })), this._injector["has"](Es)) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462041, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462042;
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A26.push(this._injector["get"](Es).activatePortalScope(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462040.embedId, ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462041 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462040.hostElement) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462041.ownerDocument) ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462042 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462040.context) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462042.renderScope["rootElement"].ownerDocument), {
        includeAppShellEditorPortal: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462040.childType === UniverInstanceType.UNIVER_SHEET
      }));
    }
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A26.length && this._tabFocusLeases["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462040.embedId, {
      hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462040.hostUnitId,
      disposable: toDisposable(() => {
        [...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A26].reverse().forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103.dispose());
      })
    });
  }
  _releaseTabPeerFocusLeasesForHost(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462046, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462047) {
    [...this._tabFocusLeases["entries"]()].forEach(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379]) => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462047 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379.hostUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462046 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379.disposable["dispose"](), this._tabFocusLeases["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378));
    });
  }
  _releaseTabPeerFocusLease(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462050) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462051 = this._tabFocusLeases["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462050);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462051 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462051.disposable["dispose"](), this._tabFocusLeases["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462050));
  }
  _createMountFocusRestorer(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462054) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462055, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462056;
    if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462055 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462054.sourceMeta) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462055.tab && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462054.sourceMeta["tab"].enabled || !this._injector["has"](IUniverInstanceService) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462054.childUnitId) return toDisposable(() => {});
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462057 = this._injector["get"](IUniverInstanceService),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462058 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462057.getFocusedUnit,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462059 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462057.focusUnit;
    if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462058 != "function" || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462059 != "function") return toDisposable(() => {});
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462060 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462056 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462058.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462057)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462056.getUnitId();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462060 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462060 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462054.childUnitId) return toDisposable(() => {});
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462061 = () => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382;
        ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462058.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462057)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382.getUnitId()) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462054.childUnitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462059.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462057, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462060);
      },
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A28 = [],
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A29 = [];
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462061(), typeof window < "u" && (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A29.push(window.requestAnimationFrame(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462061)), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A28.push(window.setTimeout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462061, 0)), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A28.push(window.setTimeout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462061, 120))), toDisposable(() => {
      typeof window > "u" || (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A29.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104 => window.cancelAnimationFrame(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104)), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A28.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105 => window.clearTimeout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105)));
    });
  }
  _assertChildUnitAvailable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462070) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462071 = [...this._sessions["values"]()].find(({
      session: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384
    }) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384.embedId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462070.embedId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384.childUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462070.childUnitId);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462071) throw new sl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462070.childUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462071.session["embedId"]);
    if (this._univerInstanceService["getUnit"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462070.childUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462070.childType)) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462072 = this._univerInstanceService["getUnitType"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462070.childUnitId);
    throw var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462072 !== UniverInstanceType.UNRECOGNIZED && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462072 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462070.childType ? Error("EMBED_MOUNT_CHILD_TYPE_MISMATCH") : Error("EMBED_MOUNT_CHILD_UNIT_NOT_AVAILABLE");
  }
};
function ll(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465135, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465136, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465137) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465135.dataset["embedRenderScopeActive"] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465136 ? "true" : "false", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465137 !== "tab") {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465135.removeAttribute("inert"), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465135.removeAttribute("aria-hidden"), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465135.style["removeProperty"]("display"), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465135.style["removeProperty"]("pointer-events");
    return;
  }
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465135.toggleAttribute("inert", !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465136), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465136) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465135.removeAttribute("aria-hidden"), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465135.style["removeProperty"]("display"), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465135.style["removeProperty"]("pointer-events");
    return;
  }
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465135.setAttribute("aria-hidden", "true"), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465135.style["display"] = "none", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465135.style["pointerEvents"] = "none";
}
function ul(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465141) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465142 = document.createElement("div");
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465142.dataset["embedRuntimeBlocked"] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465141 ?? "nested", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465142.style["cssText"] = ["box-sizing:border-box", "width:100%", "height:100%", "min-height:96px", "display:flex", "align-items:center", "justify-content:center", "padding:16px", "border:1px dashed rgba(99,102,106,.35)", "border-radius:8px", "background:rgba(99,102,106,.06)", "color:rgba(30,34,43,.64)", "font:13px/1.5 sans-serif", "text-align:center"].join(";"), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465142.textContent = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465141 === "cycle" ? "Nested embed cycle is not supported." : "Nested embed is not supported.", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465142;
}
export { cl as EmbedMountService };
