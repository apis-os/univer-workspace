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
var bs = class {
    constructor() {
      Y(this, "_contributions", new Map());
    }
    register(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46923) {
      return this._contributions["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46923.childType, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46923), toDisposable(() => {
        this._contributions["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46923.childType) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46923 && this._contributions["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46923.childType);
      });
    }
    get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46925) {
      return this._contributions["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46925);
    }
    list() {
      return [...this._contributions["values"]()];
    }
  },
  xs = class {
    constructor() {
      Y(this, "_active$", new BehaviorSubject(null)), Y(this, "active$", this._active$["asObservable"]());
    }
    getActive() {
      return this._active$["getValue"]();
    }
    getStage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46927) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46928 = this.getActive();
      return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46928 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46928.embedId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46927 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46928.stage ?? "stage1" : "inactive";
    }
    activate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46931, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46932) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933 = this.getActive(),
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A19 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933.hostUnitId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46931.hostUnitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933.embedId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46931.embedId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933.childUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46931.childUnitId,
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB9 = {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46931,
          stage: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46932 ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46931.stage ?? (var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A19 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933.stage ?? "stage1" : "stage1")
        };
      ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933.hostUnitId) !== var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB9.hostUnitId || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933.embedId !== var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB9.embedId || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933.childUnitId !== var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB9.childUnitId || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933.stage ?? "stage1") !== var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB9.stage) && this._active$["next"](var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB9);
    }
    setStage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46937, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46938) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46939 = this.getActive();
      !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46939 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46939.embedId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46937 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46939.stage ?? "stage1") !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46938 && this._active$["next"]({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46939,
        stage: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46938
      });
    }
    promote(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46943) {
      this.getStage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46943) === "stage1" && this.setStage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46943, "stage2");
    }
    clear(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46945) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46946 = this.getActive();
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46946 && (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46945 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46946.embedId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46945) && this._active$["next"](null);
    }
  },
  Ss = class {
    constructor() {
      Y(this, "_override$", new BehaviorSubject(null)), Y(this, "override$", this._override$["asObservable"]());
    }
    getOverride() {
      return this._override$["getValue"]();
    }
    activate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46949, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46950, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46951 = {}) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46952, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46953;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46949.childUnitId || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46949.childType == null) throw Error("EMBED_MENU_OVERRIDE_CHILD_NOT_RESOLVED");
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46954 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46952 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46949.sourceMeta) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46952.tab) || undefined;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46950 === "tab-active" && (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46954 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46954.enabled !== true)) throw Error("EMBED_MENU_OVERRIDE_TAB_REQUIRED");
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46950 !== "tab-active") throw Error("EMBED_MENU_OVERRIDE_UNSUPPORTED_REASON");
      if ((((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46953 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46951.layoutPolicy) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46953.ribbon) ?? DEFAULT_EMBED_TAB_LAYOUT_POLICY.ribbon) !== "host" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46951.allowPlaceholder !== true && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46951.allowHiddenRibbon !== true) return this.clear(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46949.embedId), null;
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB11 = {
          hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46949.hostUnitId,
          embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46949.embedId,
          childUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46949.childUnitId,
          childType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46949.childType,
          entry: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46949.entry,
          reason: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46950,
          portalContainer: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46951.portalContainer,
          hideHostFxBar: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46954 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46954.hideHostFxBar,
          lockHostRibbon: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46954 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46954.lockHostRibbon
        },
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46955 = this.getOverride();
      return Cs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46955, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB11) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46955 : (this._override$["next"](var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB11), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB11);
    }
    clear(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46963) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46964 = this.getOverride();
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46964 && (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46963 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46964.embedId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46963) && this._override$["next"](null);
    }
  };
function Cs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464673, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464674) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464673 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464673.hostUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464674.hostUnitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464673.embedId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464674.embedId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464673.childUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464674.childUnitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464673.childType === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464674.childType && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464673.entry === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464674.entry && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464673.reason === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464674.reason && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464673.portalContainer === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464674.portalContainer && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464673.hideHostFxBar === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464674.hideHostFxBar && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464673.lockHostRibbon === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464674.lockHostRibbon;
}
export { Ss as EmbedHostMenuOverrideService };
export { xs, bs };
