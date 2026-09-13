import { BoardPrintCompositionService as var_core_value_sig274A } from "@univerjs-pro/boards-print";
import { CreateEmbedCommand as var_core_value_sig262A, DEFAULT_EMBED_DOC_FLOW_LAYOUT_POLICY as var_core_value_sigA212, DEFAULT_EMBED_FLOAT_LAYOUT_POLICY as var_core_value_sigA66F, DEFAULT_EMBED_TAB_LAYOUT_POLICY as var_core_value_sig41A3, EMBED_SHEETS_FLOATING_COMPONENT_KEY as var_core_value_sig09CC, EmbedFocusOwnerService as var_core_value_sigB1FB, EmbedHostAdapterRegistryService as var_core_value_sig67C7, EmbedHostAnchorModelService as var_core_value_sig9D18, EmbedHostEntryEnum as var_core_value_sigA392, EmbedModelService as var_core_value_sig91F2, EmbedReferencedUnitMaterializeService as var_core_value_sig22A4, EmbedUnitLeasePolicyService as var_core_value_sig972D, RESOURCE_REF_FILE_KIND as var_core_value_sig8B2B, RemoveEmbedCommand as var_core_value_sig793D, SetEmbedBoundsCommand as var_core_value_sig8611, SetEmbedDescriptorMutation as var_core_value_sigE2AE, SoftDeleteEmbedDescriptorMutation as var_core_value_sig4A4D, UniverEmbedPlugin as var_core_value_sig8718, createBasesTableListBlockHostAdapterContribution as var_core_value_sig5966, createDocsCustomBlockHostAdapterContribution as var_core_value_sig0973, createSlidesFloatingObjectHostAdapterContribution as var_core_value_sig181C, createSlidesPageListBlockHostAdapterContribution as var_core_value_sigFE87, fromResourceRefUnitType as var_core_value_sigD788, getEmbedSheetsTabCustomData as var_core_value_sigE750, getResourceRefInputUnitSelector as var_core_value_sig9DD6, parseResourceRef as var_core_value_sig5450, toResourceRefUnitType as var_core_value_sig6893 } from "@univerjs-pro/embed";
import { UniverLicensePlugin as var_core_value_sig5495 } from "@univerjs-pro/license";
import { IPrintPreparationService as var_core_value_sigBDB6, PrintPreparationService as var_core_value_sigA1C0 } from "@univerjs-pro/print";
import { SlidePrintDrawingTransformService as var_core_value_sigDDBA } from "@univerjs-pro/slides-print";
import { BaseDataModel as var_core_value_sigFA34, BaseViewType as var_core_value_sigD95C, BorderStyleTypes as var_core_value_sigB83E, BorderType as var_core_value_sigCFF7, DEFAULT_WORKSHEET_COLUMN_WIDTH as var_core_value_sig3CE4, DEFAULT_WORKSHEET_ROW_HEIGHT as var_core_value_sig2717, DEFAULT_WORKSHEET_ROW_TITLE_WIDTH as var_core_value_sig7BBA, DOCS_FORMULA_BAR_EDITOR_UNIT_ID_KEY as var_core_value_sigCEA0, DOCS_NORMAL_EDITOR_UNIT_ID_KEY as var_core_value_sig6565, DataStreamTreeTokenType as var_core_value_sig1858, DependentOn as var_core_value_sig295C, Disposable as var_core_value_sigCBDC, DocumentDataModel as var_core_value_sig8600, DocumentFlavor as var_core_value_sig89F6, EDITOR_ACTIVATED as var_core_value_sig1099, FOCUSING_BOARD as var_core_value_sig4842, FOCUSING_COMMON_DRAWINGS as var_core_value_sig105B, FOCUSING_DOC as var_core_value_sigEFD0, FOCUSING_FX_BAR_EDITOR as var_core_value_sig2A2C, FOCUSING_SHEET as var_core_value_sigC1C9, FOCUSING_SLIDE as var_core_value_sig3AA6, FOCUSING_UNIT as var_core_value_sigFE95, FOCUSING_UNIVER_EDITOR as var_core_value_sig9870, FORMULA_EDITOR_ACTIVATED as var_core_value_sigB88C, HorizontalAlign as var_core_value_sig5B07, ICommandService as var_core_value_sigDFF6, IConfigService as var_core_value_sig7B6F, IContextService as var_core_value_sigB6A0, IImageIoService as var_core_value_sigF8EE, IPermissionService as var_core_value_sig27CF, IUndoRedoService as var_core_value_sig84F3, IUniverInstanceService as var_core_value_sig5DF8, ImageSourceType as var_core_value_sigFF1F, Inject as var_core_value_sig205B, Injector as var_core_value_sig8A66, LocaleService as var_core_value_sig21CF, LookUp as var_core_value_sig135C, Plugin as var_core_value_sigC7E7, RedoCommand as var_core_value_sig972B, SHEET_EDITOR_UNITS as var_core_value_sigA744, ThemeService as var_core_value_sigA873, UndoCommand as var_core_value_sig2785, UniverInstanceType as var_core_value_sigC0F3, VerticalAlign as var_core_value_sigC1A2, Workbook as var_core_value_sigCA9B, WrapStrategy as var_core_value_sigCBF7, createDefaultBaseTableSnapshot as var_core_value_sig54EF, deepCompare as var_core_value_sigC43E, generateRandomId as var_core_value_sigED29, isInternalEditorID as var_core_value_sigEA45, merge as var_core_value_sigE22D, toDisposable as var_core_value_sig9BBC, touchDependencies as var_core_value_sig7066 } from "@univerjs/core";
import { DOCS_UI_PLUGIN_CONFIG_KEY as var_core_value_sig36F1, DocCanvasPopManagerService as var_core_value_sig9F81, DocFloatMenuService as var_core_value_sig5491, DocPageLayoutService as var_core_value_sig2630, DocParagraphMenuService as var_core_value_sig2939, DocPrintInterceptorService as var_core_value_sig0374, DocRenderController as var_core_value_sigBE48, DocSelectAllCommand as var_core_value_sigD782, DocSelectionRenderService as var_core_value_sig753F, DocViewScaleService as var_core_value_sigACCB, IDocClipboardService as var_core_value_sig9ED9, IDocEmbedInteractionBoundaryService as var_core_value_sigE919, IDocEmbedRuntimeFocusCoordinator as var_core_value_sig7C90, IEditorService as var_core_value_sig7189, SetDocZoomRatioCommand as var_core_value_sig1C5E, SetDocZoomRatioOperation as var_core_value_sigED61, VIEWPORT_KEY as var_core_value_sigF8ED, collectDocsTableLikeEmbedChildUnitIds as var_core_value_sig441B, createDefaultDocsTableLikeCustomBlockBleedViewport as var_core_value_sig40DD, createDocsCustomBlockSizeRefreshScheduler as var_core_value_sig3194, resolveDocsCustomBlockRenderViewport as var_core_value_sigC2C5, resolveDocsTableLikeCustomBlockBleedViewport as var_core_value_sigB2A2, resolveDocsTableLikeCustomBlockContentHeight as var_core_value_sig9A99, resolveDocsTableLikeCustomBlockContentWidth as var_core_value_sig6792, shouldRefreshDocsCustomBlockSizeForCommand as var_core_value_sig2ACA } from "@univerjs/docs-ui";
import { AutoFillPopupMenu as var_core_value_sigC16D, BORDER_LINE_CHILDREN as var_core_value_sig2376, BORDER_SIZE_CHILDREN as var_core_value_sigBBB2, BorderLine as var_core_value_sig7626, CellPopupManagerService as var_core_value_sigE172, EditorContainer as var_core_value_sigA20C, FormulaBar as var_core_value_sig10A5, ISheetBarService as var_core_value_sig496B, ISheetEmbedFloatingGeometryService as var_core_value_sig463A, ISheetEmbedInteractionBoundaryService as var_core_value_sig6BA7, ISheetEmbedRuntimeFocusCoordinator as var_core_value_sig3F70, ISheetEmbedRuntimeService as var_core_value_sig0960, ISheetHostChromeOverrideService as var_core_value_sig1F91, ResetRangeTextColorCommand as var_core_value_sig8240, SHEETS_UI_PLUGIN_CONFIG_KEY as var_core_value_sig55EC, SHEET_FOOTER_BAR_HEIGHT as var_core_value_sigAFC0, SelectAllCommand as var_core_value_sig161B, SetCellEditVisibleOperation as var_core_value_sig8DC9, SetOnceFormatPainterCommand as var_core_value_sig69FE, SetRangeBoldCommand as var_core_value_sig0FD3, SetRangeFontFamilyCommand as var_core_value_sigEB43, SetRangeFontSizeCommand as var_core_value_sigF61F, SetRangeTextColorCommand as var_core_value_sig5C47, SetZoomRatioCommand as var_core_value_sigA3D3, SheetBar as var_core_value_sig2301, SheetBarService as var_core_value_sigE313, SheetCanvasPopManagerService as var_core_value_sigB8CE, SheetPrintInterceptorService as var_core_value_sig945C, SheetsUIMenuSchema as var_core_value_sig94AE } from "@univerjs/sheets-ui";
import { BuiltInUIPart as var_core_value_sigFC3C, CanvasFloatDomPreviewService as var_core_value_sig1724, CanvasPopup as var_core_value_sig57BC, CanvasPopupService as var_core_value_sigA235, ComponentContainer as var_core_value_sigB6E9, ComponentManager as var_core_value_sig5862, ContextMenu as var_core_value_sig36DA, ContextMenuService as var_core_value_sig1F72, CopyCommand as var_core_value_sig502A, CutCommand as var_core_value_sig300E, DesktopRibbonService as var_core_value_sig0C71, DesktopSidebarService as var_core_value_sigEEE6, EMBED_CHILD_UNIT_ID_ATTRIBUTE as var_core_value_sigC8C0, EMBED_CHILD_UNIT_ID_ATTRIBUTE as var_core_value_sig25ED, FONT_SIZE_LIST as var_core_value_sig0739, FloatDom as var_core_value_sigF766, FontFamilyItem as var_core_value_sig8544, HOVER_TRACK_HOST_CLASS_NAME as var_core_value_sig547A, HoverTrack as var_core_value_sig008E, ICanvasPopupService as var_core_value_sig3931, IContextMenuService as var_core_value_sigAF03, IDialogService as var_core_value_sigA33B, ILayoutService as var_core_value_sigBEFB, IMenuManagerService as var_core_value_sigB2B1, IRibbonOverrideService as var_core_value_sigAC4D, IRibbonService as var_core_value_sig4CE4, IShortcutService as var_core_value_sig24AE, ISidebarService as var_core_value_sig7286, IUIPartsService as var_core_value_sigCA1C, IUIRuntimeScopeService as var_core_value_sig17C9, IconManager as var_core_value_sig0EBC, KeyCode as var_core_value_sig3370, MenuManagerPosition as var_core_value_sig5DCB, MenuManagerService as var_core_value_sigB830, MetaKeys as var_core_value_sigB680, NativeTextEditorShortcutBehavior as var_core_value_sigEAF7, PasteCommand as var_core_value_sig5742, Ribbon as var_core_value_sig5810, RibbonDataGroup as var_core_value_sigFBFE, RibbonFormulasGroup as var_core_value_sigE65F, RibbonInsertGroup as var_core_value_sig3F0B, RibbonOthersGroup as var_core_value_sig08B0, RibbonPosition as var_core_value_sig7030, RibbonStartGroup as var_core_value_sigBAFD, RibbonViewGroup as var_core_value_sig7213, Sidebar as var_core_value_sig1E66, ToolbarButton as var_core_value_sig58BD, UI_PLUGIN_CONFIG_KEY as var_core_value_sigA025, connectInjector as var_core_value_sig7A0A, preventBrowserZoomInContainers as var_core_value_sig1D82, useComponentsOfPart as var_core_value_sigC53D, useConfigValue as var_core_value_sigE5CF, useDependency as var_core_value_sigC85E, useInjector as var_core_value_sigC7FF, useObservable as var_core_value_sig146E } from "@univerjs/ui";
import { Button as var_core_value_sigC820, ColorPicker as var_core_value_sigEAAE, ConfigProvider as var_core_value_sigE4F9, Dropdown as var_core_value_sigAF6B, DropdownMenu as var_core_value_sig1690, Separator as var_core_value_sig5C3C, Tooltip as var_core_value_sig5917, clsx as var_core_value_sig522C, render as var_core_value_sig5937, unmount as var_core_value_sig0F1A } from "@univerjs/design";
import { AlignBottomIcon as var_core_value_sigC6D5, AlignTopIcon as var_core_value_sig68AA, ArrowLeftIcon as var_core_value_sigAF61, ArrowRightIcon as var_core_value_sig2EDD, AutowrapIcon as var_core_value_sig4785, BoldIcon as var_core_value_sigEED2, BrushIcon as var_core_value_sigE1C4, CancelMergeIcon as var_core_value_sigBA1B, CheckMarkIcon as var_core_value_sig536B, DeleteIcon as var_core_value_sig4C1E, ExpandIcon as var_core_value_sig4090, FilterIcon as var_core_value_sigBAE5, FontColorDoubleIcon as var_core_value_sig3A0D, HorizontalMergeIcon as var_core_value_sigA9D4, HorizontallyIcon as var_core_value_sigB172, IncreaseIcon as var_core_value_sig5CC1, LeftJustifyingIcon as var_core_value_sigCAA7, MergeAllIcon as var_core_value_sig46D0, MoreDownIcon as var_core_value_sig7990, NoBorderIcon as var_core_value_sig2EF0, NoColorDoubleIcon as var_core_value_sigDD67, NumberIcon as var_core_value_sig955A, OneToOneIcon as var_core_value_sigA462, OverflowIcon as var_core_value_sig57D7, PaintBucketDoubleIcon as var_core_value_sig9192, PenIcon as var_core_value_sig5380, RightJustifyingIcon as var_core_value_sig063A, ShrinkIcon as var_core_value_sig31BB, TruncationIcon as var_core_value_sig8073, VerticalCenterIcon as var_core_value_sigE052, VerticalIntegrationIcon as var_core_value_sig4E8F, ZoomInIcon as var_core_value_sig5120, ZoomOutIcon as var_core_value_sig8ECB } from "@univerjs/icons";
import { createElement as var_core_value_sigBCAF, forwardRef as var_core_value_sig50B7, useCallback as var_core_value_sigF517, useEffect as var_core_value_sigB0BB, useLayoutEffect as var_core_value_sig9E27, useMemo as var_core_value_sigF570, useRef as var_core_value_sig17A6, useState as var_core_value_sigC4B6, useSyncExternalStore as var_core_value_sig93A6 } from "react";
import { BehaviorSubject as var_core_value_sig1477, EMPTY as var_core_value_sigB73A, Observable as var_core_value_sig6238, Subject as var_core_value_sigF7F1, Subscription as var_core_value_sig8C99, combineLatest as var_core_value_sig1654, distinctUntilChanged as var_core_value_sig111B, filter as var_core_value_sig6713, map as var_core_value_sig5B63, merge as var_core_value_sigE85F, of as var_core_value_sigDA93, startWith as var_core_value_sigC101 } from "rxjs";
import { DeviceInputEventType as var_core_value_sigB0C2, Documents as var_core_value_sig1070, ICanvasColorService as var_core_value_sigBE9D, IRenderManagerService as var_core_value_sigE391, SHEET_VIEWPORT_KEY as var_core_value_sig36FA, ScrollBar as var_core_value_sig920F, UniverPrintingContext as var_core_value_sig4FDA, getNextWheelZoomRatio as var_core_value_sig233B, setDocsCustomBlockRenderViewportProvider as var_core_value_sig73F9 } from "@univerjs/engine-render";
import { Fragment as var_core_value_sigC0A2, jsx as var_core_value_sig6F03, jsxs as var_core_value_sigA648 } from "react/jsx-runtime";
import { DocSkeletonManagerService as var_core_value_sig57A0, EMBED_DOCS_CUSTOM_BLOCK_DEFAULT_COMPONENT_KEY as var_core_value_sig5AB2, canEditDocumentTargets as var_core_value_sigCE09, docDrawingPositionToTransform as var_core_value_sig8877, getDocumentDrawingSegmentId as var_core_value_sig9391, getDocumentEntityParentPermissionObjectIds as var_core_value_sig08C1, getDocumentEntityPermissionObjectId as var_core_value_sigFD80, isSheetLikeDocsCustomBlockChildType as var_core_value_sig8104, resolveDocsCustomBlockSize as var_core_value_sigE103 } from "@univerjs/docs";
import { ISlideDrawingService as var_core_value_sig452D, PageElementTypeEnum as var_core_value_sig7432, PageTypeEnum as var_core_value_sig9CB9, SetSlideZoomRatioOperation as var_core_value_sigF490, getEmbedSlidesFloatingCustomData as var_core_value_sig94EF, getEmbedSlidesPageCustomData as var_core_value_sigB179, slideElementToDrawing as var_core_value_sig1F73 } from "@univerjs-pro/slides";
import { ActivateBaseTableOperation as var_core_value_sig5271, ActivateBaseViewOperation as var_core_value_sigBC2B, AddViewMenu as var_core_value_sig8C3D, BASES_UI_PLUGIN_CONFIG_KEY as var_core_value_sig528E, BASE_LEFT_PANEL_DEFAULT_WIDTH as var_core_value_sig04A2, BASE_TOOLBAR_EXTRA_ACTIONS as var_core_value_sig4142, BASE_VIEW_MENU_ITEMS as var_core_value_sig0EE7, BaseClipboardService as var_core_value_sig2747, BaseDeleteConfirmDialog as var_core_value_sig63B4, BaseDuplicateTableDialog as var_core_value_sig27E4, BaseEditorService as var_core_value_sigC7A3, BaseEmbedRuntimeRegistryService as var_core_value_sigFAA0, BaseKeyboardOperation as var_core_value_sig0820, BaseTableSidebarFrame as var_core_value_sig11D2, BaseToolbar as var_core_value_sig5F55, BaseUIPopupService as var_core_value_sig4F8B, BaseUIStateService as var_core_value_sig1E5C, BaseViewIcon as var_core_value_sigE113, BaseViewWheelScrollService as var_core_value_sigC084, CloseBaseActiveEditorOperation as var_core_value_sig5061, CloseBaseContextMenuOperation as var_core_value_sig9074, CloseBasePanelOperation as var_core_value_sig0ED9, CloseBaseRecordDetailPanelOperation as var_core_value_sigF670, GRID_ADD_FIELD_COLUMN_WIDTH as var_core_value_sig2053, GRID_ADD_RECORD_ROW_HEIGHT as var_core_value_sig3964, GRID_DEFAULT_COLUMN_WIDTH as var_core_value_sig310B, GRID_HEADER_HEIGHT as var_core_value_sig7587, GRID_ROW_HEADER_WIDTH as var_core_value_sig5EBB, GRID_SUMMARY_HEIGHT as var_core_value_sig5B82, IBaseCanvasRootResolverService as var_core_value_sig58D3, IBaseClipboardService as var_core_value_sigA1A5, IBaseDashboardUIExtensionRegistryService as var_core_value_sigCBC5, IBaseEditorService as var_core_value_sig5732, IBaseEmbedFloatingActiveService as var_core_value_sigCC92, IBaseEmbedFloatingGeometryService as var_core_value_sigE18C, IBaseEmbedRuntimeFocusCoordinator as var_core_value_sigEEC7, IBaseEmbedRuntimeService as var_core_value_sigCC79, IBaseGlobalPortalService as var_core_value_sigA2C1, IBaseHostChromeOverrideService as var_core_value_sigE2C7, IBaseUIPopupService as var_core_value_sig00BD, IBaseUIStateService as var_core_value_sigCB4E, IBaseViewWheelScrollService as var_core_value_sigDE56, OpenBaseActiveEditorOperation as var_core_value_sigBDA3, OpenBaseContextMenuOperation as var_core_value_sigC127, OpenBasePanelOperation as var_core_value_sig30EC, OpenBaseRecordDetailPanelOperation as var_core_value_sig1010, RenderBaseWorkbench as var_core_value_sig6AB5, SetBaseScrollOperation as var_core_value_sig4685, SetBaseZoomOperation as var_core_value_sig7BE9, StartBaseEditingCellOperation as var_core_value_sig920C, StopBaseEditingCellOperation as var_core_value_sig79F0, ViewTabs as var_core_value_sigB208, buildBaseProjectedRowLayout as var_core_value_sigBE10, createDefaultViewName as var_core_value_sig9447, createScopedBaseCanvasRootResolverService as var_core_value_sig9334, createScopedBaseGlobalPortalService as var_core_value_sigB00C, defaultPluginConfig as var_core_value_sig2FED, duplicateView as var_core_value_sig0A6A, executeBaseKeyboardOperation as var_core_value_sigD587, getBaseCanvasRoot as var_core_value_sigC4E6, getBaseFloatingPosition as var_core_value_sigA770, getBaseTableNameErrorMessage as var_core_value_sig48EC, resolveGridRowHeight as var_core_value_sig30BA, waitForBaseCanvasImages as var_core_value_sig8ED7 } from "@univerjs-pro/bases-ui";
import { AddWorksheetMergeAllCommand as var_core_value_sigAB9A, AddWorksheetMergeCommand as var_core_value_sig2FA0, AddWorksheetMergeHorizontalCommand as var_core_value_sig33D6, AddWorksheetMergeVerticalCommand as var_core_value_sigC4C4, RemoveWorksheetMergeCommand as var_core_value_sig5D17, ResetBackgroundColorCommand as var_core_value_sig30DE, SetBackgroundColorCommand as var_core_value_sig233C, SetBorderBasicCommand as var_core_value_sig905A, SetHorizontalTextAlignCommand as var_core_value_sigBD9A, SetTextWrapCommand as var_core_value_sig5970, SetVerticalTextAlignCommand as var_core_value_sig7168, SetWorksheetActiveOperation as var_core_value_sigC4B0, SheetsSelectionsService as var_core_value_sig2FB6 } from "@univerjs/sheets";
import { DocsTablePassiveWheelService as var_core_value_sig8753 } from "@univerjs-pro/docs-table-ui";
import { SheetsNoteAttachmentController as var_core_value_sigA086, SheetsNotePopupService as var_core_value_sig7167, SheetsNoteUIMenuSchema as var_core_value_sig903C } from "@univerjs/sheets-note-ui";
import { BoardElementType as var_core_value_sigAF71, IBoardElementService as var_core_value_sig98EA, UpdateBoardElementMutation as var_core_value_sig91A9, getEmbedBoardsFloatingCustomData as var_core_value_sig4C62, isEmbedBoardsFloatingElement as var_core_value_sig524C } from "@univerjs-pro/boards";
import { EditorUIFloatingContainer as var_core_value_sig6DC7, IEditorUIService as var_core_value_sig14DE, ISlideDrawingStateService as var_core_value_sig26ED, ISlideEmbedActivationService as var_core_value_sig0AF8, ISlideEmbedFloatDomRenderer as var_core_value_sigD26D, ISlideEmbedFloatingActiveService as var_core_value_sig1D4E, ISlideEmbedFocusOwnerService as var_core_value_sig0671, ISlideEmbedMountService as var_core_value_sigF806, ISlideEmbedRuntimeFocusCoordinator as var_core_value_sig159C, ISlideEmbedRuntimeService as var_core_value_sig11A1, ObjectProvider as var_core_value_sig86D1, SLIDE_PAGE_RECT_KEY as var_core_value_sig7FC9, SlideEmbedChildWorkbench as var_core_value_sig7C1E, SlideEmbedFloatingPreview as var_core_value_sig2A0D, SlideEmbedReadonlyFloatingPreview as var_core_value_sig1FA5, SlideInsertService as var_core_value_sig0FC5, SlideThumbnailItem as var_core_value_sig97E0, resolveSlideLogicalPageSize as var_core_value_sigA6AB } from "@univerjs-pro/slides-ui";
import { CreateBaseTableCommand as var_core_value_sigB136, CreateBaseViewCommand as var_core_value_sig6A28, DeleteBaseTableCommand as var_core_value_sigC0CF, DeleteBaseViewCommand as var_core_value_sig1D1F, IBaseProjectionService as var_core_value_sig4DA3, IBaseViewRegistryService as var_core_value_sig9F10, MoveBaseViewCommand as var_core_value_sigEF9F, RenameBaseTableCommand as var_core_value_sig00F7, RenameBaseViewCommand as var_core_value_sig626F, canEditBaseTargets as var_core_value_sig0A06, copyBaseTableSnapshot as var_core_value_sig8D75, createUniqueBaseTableName as var_core_value_sigF880, getBaseFieldPermissionObjectId as var_core_value_sig635C, getBaseRecordPermissionObjectId as var_core_value_sig41DC, getBaseTablePermissionObjectId as var_core_value_sig75D7, getBaseViewPermissionObjectId as var_core_value_sigC9E5, validateBaseTableName as var_core_value_sigAF20 } from "@univerjs-pro/bases";
import { createPortal as var_core_value_sig8E47 } from "react-dom";
import { BOARDS_UI_PLUGIN_CONFIG_KEY as var_core_value_sig4CAE, BoardDomLayerService as var_core_value_sig01ED, BoardShapeTextEditorContainer as var_core_value_sig9A95, BoardTextEditingService as var_core_value_sig59A0, BoardViewportService as var_core_value_sigC736, BoardWorkbench as var_core_value_sig5BC0, IBoardElementStateService as var_core_value_sig912D, IBoardEmbedRuntimeFocusCoordinator as var_core_value_sig565B, IBoardUIStateService as var_core_value_sig41C0, UniverBoardsUIPlugin as var_core_value_sig574C, getBoardPointFromClient as var_core_value_sigA2E7, resolveBoardInteractionConfig as var_core_value_sig827B, resolveBoardWheelViewportAction as var_core_value_sig21E0 } from "@univerjs-pro/boards-ui";
import { SheetsChartUIMenuSchema as var_core_value_sigD70C } from "@univerjs-pro/sheets-chart-ui";
import { SheetsOutlineUIMenuSchema as var_core_value_sig0AA0 } from "@univerjs-pro/sheets-outline-ui";
import { SheetsPivotTableUIMenuSchema as var_core_value_sig89B1 } from "@univerjs-pro/sheets-pivot-ui";
import { SheetsPrintMenuSchema as var_core_value_sig7341 } from "@univerjs-pro/sheets-print";
import { SheetsShapeUIContextualRibbonSchema as var_core_value_sig8D50, SheetsShapeUIMenuSchema as var_core_value_sigDD47 } from "@univerjs-pro/sheets-shape-ui";
import { SheetsSparklineUIMenuSchema as var_core_value_sig1E2D } from "@univerjs-pro/sheets-sparkline-ui";
import { SheetsConditionalFormattingUIMenuSchema as var_core_value_sig8F3F } from "@univerjs/sheets-conditional-formatting-ui";
import { SheetsDataValidationUIMenuSchema as var_core_value_sigAED9 } from "@univerjs/sheets-data-validation-ui";
import { SheetsDrawingUIMenuSchema as var_core_value_sigC5E7 } from "@univerjs/sheets-drawing-ui";
import { SheetsFilterUIMenuSchema as var_core_value_sigEDF2 } from "@univerjs/sheets-filter-ui";
import { SheetsHyperLinkUIMenuSchema as var_core_value_sig5805 } from "@univerjs/sheets-hyper-link-ui";
import { SheetsNumfmtUIMenuSchema as var_core_value_sig027F } from "@univerjs/sheets-numfmt-ui";
import { SheetsSortUIMenuSchema as var_core_value_sigB065 } from "@univerjs/sheets-sort-ui";
import { SheetsTableUIMenuSchema as var_core_value_sig9EDA } from "@univerjs/sheets-table-ui";
import { SheetsThreadCommentUIMenuSchema as var_core_value_sig762A } from "@univerjs/sheets-thread-comment-ui";
var fs = "@univerjs-pro/embed-ui",
  ps = "1.0.0-insiders.20260907-70fc579";
function ms(var_core_value_sig014E, var_core_value_sig57A3) {
  return var_core_value_sig014E.matches("[" + var_core_value_sig57A3 + "]") ? var_core_value_sig014E : var_core_value_sig014E.querySelector("[" + var_core_value_sig57A3 + "]") ?? undefined;
}
function hs(var_core_value_sig4003) {
  let var_core_value_sig9454 = [];
  return gs(var_core_value_sig4003, "data-embed-content-root", "univer-overflow-hidden", var_core_value_sig9454), gs(var_core_value_sig4003, "data-embed-canvas-root", "univer-pointer-events-none\x20univer-overflow-hidden\x20[&>*]:univer-pointer-events-auto", var_core_value_sig9454), gs(var_core_value_sig4003, "data-embed-overlay-root", "univer-pointer-events-none [&>*]:univer-pointer-events-auto", var_core_value_sig9454), gs(var_core_value_sig4003, "data-embed-popup-root", "univer-pointer-events-none [&>*]:univer-pointer-events-auto", var_core_value_sig9454), var_core_value_sig9BBC(() => {
    var_core_value_sig9454.forEach(var_core_value_sig7A62 => var_core_value_sig7A62.remove());
  });
}
function gs(var_core_value_sig9B63, var_core_value_sigA86B, var_core_value_sig8CE0, var_core_value_sig2D89) {
  let var_core_value_sig08CE = ms(var_core_value_sig9B63, var_core_value_sigA86B);
  if (var_core_value_sig08CE) return var_core_value_sig08CE;
  let var_core_value_sig5C06 = document.createElement("div");
  return var_core_value_sig5C06.setAttribute(var_core_value_sigA86B, "true"), var_core_value_sig5C06.setAttribute("data-embed-runtime-slot-owner", "embed-ui"), var_core_value_sig5C06.className = "univer-box-border univer-absolute univer-inset-0 " + var_core_value_sig8CE0, var_core_value_sig9B63.appendChild(var_core_value_sig5C06), var_core_value_sig2D89.push(var_core_value_sig5C06), var_core_value_sig5C06;
}
function _s(var_core_value_sigA267) {
  "@babel/helpers - typeof";

  return _s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig6E1C) {
    return typeof var_core_value_sig6E1C;
  } : function (var_core_value_sigFABC) {
    return var_core_value_sigFABC && typeof Symbol == "function" && var_core_value_sigFABC.constructor === Symbol && var_core_value_sigFABC !== Symbol.prototype ? "symbol" : typeof var_core_value_sigFABC;
  }, _s(var_core_value_sigA267);
}
function vs(var_core_value_sig9E58, var_core_value_sigD105) {
  if (_s(var_core_value_sig9E58) != "object" || !var_core_value_sig9E58) return var_core_value_sig9E58;
  var var_core_value_sig6F7E = var_core_value_sig9E58[Symbol.toPrimitive];
  if (var_core_value_sig6F7E !== undefined) {
    var var_core_value_sig3F21 = var_core_value_sig6F7E.call(var_core_value_sig9E58, var_core_value_sigD105 || "default");
    if (_s(var_core_value_sig3F21) != "object") return var_core_value_sig3F21;
    throw TypeError("@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.");
  }
  return (var_core_value_sigD105 === "string" ? String : Number)(var_core_value_sig9E58);
}
function ys(var_core_value_sig22FF) {
  var var_core_value_sig3189 = vs(var_core_value_sig22FF, "string");
  return _s(var_core_value_sig3189) == "symbol" ? var_core_value_sig3189 : var_core_value_sig3189 + "";
}
function Y(var_core_value_sigA5F8, var_core_value_sigA71A, var_core_value_sig11F1) {
  return (var_core_value_sigA71A = ys(var_core_value_sigA71A)) in var_core_value_sigA5F8 ? Object.defineProperty(var_core_value_sigA5F8, var_core_value_sigA71A, {
    value: var_core_value_sig11F1,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sigA5F8[var_core_value_sigA71A] = var_core_value_sig11F1, var_core_value_sigA5F8;
}
var bs = class {
    constructor() {
      Y(this, "_contributions", new Map());
    }
    register(var_core_value_sig413D) {
      return this._contributions["set"](var_core_value_sig413D.childType, var_core_value_sig413D), var_core_value_sig9BBC(() => {
        this._contributions["get"](var_core_value_sig413D.childType) === var_core_value_sig413D && this._contributions["delete"](var_core_value_sig413D.childType);
      });
    }
    get(var_core_value_sig5BCE) {
      return this._contributions["get"](var_core_value_sig5BCE);
    }
    list() {
      return [...this._contributions["values"]()];
    }
  },
  xs = class {
    constructor() {
      Y(this, "_active$", new var_core_value_sig1477(null)), Y(this, "active$", this._active$["asObservable"]());
    }
    getActive() {
      return this._active$["getValue"]();
    }
    getStage(var_core_value_sig8EF0) {
      let var_core_value_sig78AC = this.getActive();
      return (var_core_value_sig78AC == null ? undefined : var_core_value_sig78AC.embedId) === var_core_value_sig8EF0 ? var_core_value_sig78AC.stage ?? "stage1" : "inactive";
    }
    activate(var_core_value_sig4CEF, var_core_value_sigD57D) {
      let var_core_value_sig2CC7 = this.getActive(),
        var_core_value_sig4784 = (var_core_value_sig2CC7 == null ? undefined : var_core_value_sig2CC7.hostUnitId) === var_core_value_sig4CEF.hostUnitId && var_core_value_sig2CC7.embedId === var_core_value_sig4CEF.embedId && var_core_value_sig2CC7.childUnitId === var_core_value_sig4CEF.childUnitId,
        var_core_value_sigC39E = {
          ...var_core_value_sig4CEF,
          stage: var_core_value_sigD57D ?? var_core_value_sig4CEF.stage ?? (var_core_value_sig4784 ? var_core_value_sig2CC7.stage ?? "stage1" : "stage1")
        };
      ((var_core_value_sig2CC7 == null ? undefined : var_core_value_sig2CC7.hostUnitId) !== var_core_value_sigC39E.hostUnitId || var_core_value_sig2CC7.embedId !== var_core_value_sigC39E.embedId || var_core_value_sig2CC7.childUnitId !== var_core_value_sigC39E.childUnitId || (var_core_value_sig2CC7.stage ?? "stage1") !== var_core_value_sigC39E.stage) && this._active$["next"](var_core_value_sigC39E);
    }
    setStage(var_core_value_sig16C7, var_core_value_sig7481) {
      let var_core_value_sig08A3 = this.getActive();
      !var_core_value_sig08A3 || var_core_value_sig08A3.embedId !== var_core_value_sig16C7 || (var_core_value_sig08A3.stage ?? "stage1") !== var_core_value_sig7481 && this._active$["next"]({
        ...var_core_value_sig08A3,
        stage: var_core_value_sig7481
      });
    }
    promote(var_core_value_sig77D8) {
      this.getStage(var_core_value_sig77D8) === "stage1" && this.setStage(var_core_value_sig77D8, "stage2");
    }
    clear(var_core_value_sig78A3) {
      let var_core_value_sig649B = this.getActive();
      var_core_value_sig649B && (!var_core_value_sig78A3 || var_core_value_sig649B.embedId === var_core_value_sig78A3) && this._active$["next"](null);
    }
  },
  Ss = class {
    constructor() {
      Y(this, "_override$", new var_core_value_sig1477(null)), Y(this, "override$", this._override$["asObservable"]());
    }
    getOverride() {
      return this._override$["getValue"]();
    }
    activate(var_core_value_sig6256, var_core_value_sigE7A6, var_core_value_sigB505 = {}) {
      var var_core_value_sig7428, var_core_value_sig1DCE;
      if (!var_core_value_sig6256.childUnitId || var_core_value_sig6256.childType == null) throw Error("EMBED_MENU_OVERRIDE_CHILD_NOT_RESOLVED");
      let var_core_value_sig0567 = ((var_core_value_sig7428 = var_core_value_sig6256.sourceMeta) == null ? undefined : var_core_value_sig7428.tab) || undefined;
      if (var_core_value_sigE7A6 === "tab-active" && (!var_core_value_sig0567 || var_core_value_sig0567.enabled !== true)) throw Error("EMBED_MENU_OVERRIDE_TAB_REQUIRED");
      if (var_core_value_sigE7A6 !== "tab-active") throw Error("EMBED_MENU_OVERRIDE_UNSUPPORTED_REASON");
      if ((((var_core_value_sig1DCE = var_core_value_sigB505.layoutPolicy) == null ? undefined : var_core_value_sig1DCE.ribbon) ?? var_core_value_sig41A3.ribbon) !== "host" && var_core_value_sigB505.allowPlaceholder !== true && var_core_value_sigB505.allowHiddenRibbon !== true) return this.clear(var_core_value_sig6256.embedId), null;
      let var_core_value_sigA7F3 = {
          hostUnitId: var_core_value_sig6256.hostUnitId,
          embedId: var_core_value_sig6256.embedId,
          childUnitId: var_core_value_sig6256.childUnitId,
          childType: var_core_value_sig6256.childType,
          entry: var_core_value_sig6256.entry,
          reason: var_core_value_sigE7A6,
          portalContainer: var_core_value_sigB505.portalContainer,
          hideHostFxBar: var_core_value_sig0567 == null ? undefined : var_core_value_sig0567.hideHostFxBar,
          lockHostRibbon: var_core_value_sig0567 == null ? undefined : var_core_value_sig0567.lockHostRibbon
        },
        var_core_value_sigEACD = this.getOverride();
      return Cs(var_core_value_sigEACD, var_core_value_sigA7F3) ? var_core_value_sigEACD : (this._override$["next"](var_core_value_sigA7F3), var_core_value_sigA7F3);
    }
    clear(var_core_value_sig901E) {
      let var_core_value_sigF7BB = this.getOverride();
      var_core_value_sigF7BB && (!var_core_value_sig901E || var_core_value_sigF7BB.embedId === var_core_value_sig901E) && this._override$["next"](null);
    }
  };
function Cs(var_core_value_sigA71D, var_core_value_sig669B) {
  return var_core_value_sigA71D != null && var_core_value_sigA71D.hostUnitId === var_core_value_sig669B.hostUnitId && var_core_value_sigA71D.embedId === var_core_value_sig669B.embedId && var_core_value_sigA71D.childUnitId === var_core_value_sig669B.childUnitId && var_core_value_sigA71D.childType === var_core_value_sig669B.childType && var_core_value_sigA71D.entry === var_core_value_sig669B.entry && var_core_value_sigA71D.reason === var_core_value_sig669B.reason && var_core_value_sigA71D.portalContainer === var_core_value_sig669B.portalContainer && var_core_value_sigA71D.hideHostFxBar === var_core_value_sig669B.hideHostFxBar && var_core_value_sigA71D.lockHostRibbon === var_core_value_sig669B.lockHostRibbon;
}
const ws = "data-embed-runtime-focus-role";
var X = class {
  constructor() {
    Y(this, "_leases", new Map()), Y(this, "_elements", new Map()), Y(this, "_runtimeScopes", new Map()), Y(this, "_leaseSequence", 0), Y(this, "runtimeFocusChanged$", new var_core_value_sigF7F1()), Y(this, "runtimeSessionChanged$", new var_core_value_sigF7F1());
  }
  acquireLease(var_core_value_sigFA38) {
    let var_core_value_sig102B = {
        role: var_core_value_sigFA38.role,
        owner: var_core_value_sigFA38.owner,
        sessionMode: var_core_value_sigFA38.sessionMode,
        hostUnitId: var_core_value_sigFA38.hostUnitId,
        childUnitId: var_core_value_sigFA38.childUnitId,
        childType: var_core_value_sigFA38.childType,
        associatedChildUnitIds: var_core_value_sigFA38.associatedChildUnitIds,
        sequence: ++this._leaseSequence
      },
      var_core_value_sigA7DB = this._leases["get"](var_core_value_sigFA38.embedId);
    return var_core_value_sigA7DB || (var_core_value_sigA7DB = new Set(), this._leases["set"](var_core_value_sigFA38.embedId, var_core_value_sigA7DB)), var_core_value_sigA7DB.add(var_core_value_sig102B), var_core_value_sig102B.role !== "runtime" && this._notifyRuntimeFocusChanged(), var_core_value_sig102B.role === "child-session" && this._notifyRuntimeSessionChanged(), var_core_value_sig9BBC(() => {
      var_core_value_sigA7DB == null || var_core_value_sigA7DB.delete(var_core_value_sig102B), (var_core_value_sigA7DB == null ? undefined : var_core_value_sigA7DB.size) === 0 && this._leases["delete"](var_core_value_sigFA38.embedId), var_core_value_sig102B.role !== "runtime" && this._notifyRuntimeFocusChanged(), var_core_value_sig102B.role === "child-session" && this._notifyRuntimeSessionChanged();
    });
  }
  hasChildInteractionLease(var_core_value_sig5EEE) {
    if (!var_core_value_sig5EEE) return false;
    let var_core_value_sig65B4 = this._leases["get"](var_core_value_sig5EEE);
    return var_core_value_sig65B4 && [...var_core_value_sig65B4].some(var_core_value_sig8109 => var_core_value_sig8109.role !== "runtime") ? true : this.containsElement(var_core_value_sig5EEE, this._getActiveElement(var_core_value_sig5EEE));
  }
  hasBlockingChildFocusLease(var_core_value_sigF98E, var_core_value_sigA470) {
    if (!var_core_value_sigF98E) return false;
    let var_core_value_sig19A1 = this._leases["get"](var_core_value_sigF98E);
    return var_core_value_sig19A1 && [...var_core_value_sig19A1].some(var_core_value_sig7565 => this._isBlockingLease(var_core_value_sig7565, var_core_value_sigA470)) ? true : this.containsElement(var_core_value_sigF98E, this._getActiveElement(var_core_value_sigF98E));
  }
  hasAnyChildInteractionLease() {
    return [...this._leases["values"]()].some(var_core_value_sigD4FB => [...var_core_value_sigD4FB].some(var_core_value_sig429F => var_core_value_sig429F.role !== "runtime")) || this._getActiveOwnedRuntimeFocusInfo() != null;
  }
  hasAnyBlockingChildFocusLease(var_core_value_sig81F7) {
    if ([...this._leases["values"]()].some(var_core_value_sig3E71 => [...var_core_value_sig3E71].some(var_core_value_sigF62A => this._isBlockingLease(var_core_value_sigF62A, var_core_value_sig81F7)))) return true;
    let var_core_value_sigBE51 = this._getActiveOwnedRuntimeFocusInfo();
    return var_core_value_sigBE51 != null && this._isBlockingRole(var_core_value_sigBE51.role);
  }
  hasHostPreservingChildFocusLease(var_core_value_sigAAD1, var_core_value_sigBC1A) {
    if (!var_core_value_sigAAD1) return false;
    let var_core_value_sig3F3A = this._leases["get"](var_core_value_sigAAD1);
    return var_core_value_sig3F3A && [...var_core_value_sig3F3A].some(var_core_value_sig01B3 => this._isHostPreservingLease(var_core_value_sig01B3, var_core_value_sigBC1A)) ? true : this.containsElement(var_core_value_sigAAD1, this._getActiveElement(var_core_value_sigAAD1));
  }
  hasAnyHostPreservingChildFocusLease(var_core_value_sigA984) {
    return [...this._leases["values"]()].some(var_core_value_sig7442 => [...var_core_value_sig7442].some(var_core_value_sig8178 => this._isHostPreservingLease(var_core_value_sig8178, var_core_value_sigA984))) ? true : this._getActiveOwnedRuntimeFocusInfo() != null;
  }
  hasHostPreservingChildFocusLeaseForHost(var_core_value_sigA504, var_core_value_sig05FF) {
    if (!var_core_value_sigA504) return this.hasAnyHostPreservingChildFocusLease(var_core_value_sig05FF);
    if ([...this._leases["values"]()].some(var_core_value_sigDF87 => [...var_core_value_sigDF87].some(var_core_value_sigE9ED => this._isHostPreservingLease(var_core_value_sigE9ED, var_core_value_sig05FF) && this._leaseAppliesToHostUnit(var_core_value_sigE9ED, var_core_value_sigA504)))) return true;
    let var_core_value_sigFBF0 = this._getActiveOwnedRuntimeFocusInfo();
    if (!var_core_value_sigFBF0) return false;
    let var_core_value_sig2F95 = this._leases["get"](var_core_value_sigFBF0.embedId);
    return var_core_value_sig2F95 && [...var_core_value_sig2F95].some(var_core_value_sig9EE0 => this._isHostPreservingLease(var_core_value_sig9EE0, var_core_value_sig05FF) && this._leaseAppliesToHostUnit(var_core_value_sig9EE0, var_core_value_sigA504)) ? true : this._ownedRuntimeFocusAppliesToHost(var_core_value_sigFBF0.embedId, var_core_value_sigA504);
  }
  isChildUnitInActiveSession(var_core_value_sigF0E1) {
    return var_core_value_sigF0E1 ? [...this._leases["values"]()].some(var_core_value_sigF051 => [...var_core_value_sigF051].some(var_core_value_sigB577 => this._leaseAppliesToChildUnit(var_core_value_sigB577, var_core_value_sigF0E1) && var_core_value_sigB577.role !== "runtime")) : false;
  }
  registerRuntimeScope(var_core_value_sig2D8D) {
    let var_core_value_sigE5A6 = {
        hostUnitId: var_core_value_sig2D8D.hostUnitId,
        childUnitId: var_core_value_sig2D8D.childUnitId,
        childType: var_core_value_sig2D8D.childType,
        sessionMode: var_core_value_sig2D8D.sessionMode,
        sequence: ++this._leaseSequence
      },
      var_core_value_sigF449 = this._runtimeScopes["get"](var_core_value_sig2D8D.embedId);
    return var_core_value_sigF449 || (var_core_value_sigF449 = new Set(), this._runtimeScopes["set"](var_core_value_sig2D8D.embedId, var_core_value_sigF449)), var_core_value_sigF449.add(var_core_value_sigE5A6), this._notifyRuntimeFocusChanged(), this._notifyRuntimeSessionChanged(), var_core_value_sig9BBC(() => {
      var_core_value_sigF449 == null || var_core_value_sigF449.delete(var_core_value_sigE5A6), (var_core_value_sigF449 == null ? undefined : var_core_value_sigF449.size) === 0 && this._runtimeScopes["delete"](var_core_value_sig2D8D.embedId), this._notifyRuntimeFocusChanged(), this._notifyRuntimeSessionChanged();
    });
  }
  resolveRuntimeScopeByChildUnitId(var_core_value_sig38C5) {
    if (!var_core_value_sig38C5) return;
    let var_core_value_sigC87D;
    for (let [var_core_value_sig0B45, var_core_value_sig36F8] of this._runtimeScopes) for (let var_core_value_sig9572 of var_core_value_sig36F8) var_core_value_sig9572.childUnitId === var_core_value_sig38C5 && (!var_core_value_sigC87D || var_core_value_sig9572.sequence > var_core_value_sigC87D.scope["sequence"]) && (var_core_value_sigC87D = {
      embedId: var_core_value_sig0B45,
      scope: var_core_value_sig9572
    });
    if (var_core_value_sigC87D) {
      let {
        embedId: var_core_value_sig03E1,
        scope: var_core_value_sigBB57
      } = var_core_value_sigC87D;
      return {
        embedId: var_core_value_sig03E1,
        hostUnitId: var_core_value_sigBB57.hostUnitId,
        childUnitId: var_core_value_sigBB57.childUnitId,
        childType: var_core_value_sigBB57.childType,
        sessionMode: var_core_value_sigBB57.sessionMode
      };
    }
  }
  resolveActiveChildSessionRuntimeScope() {
    let var_core_value_sigCCDC;
    for (let [var_core_value_sig7C4A, var_core_value_sigE799] of this._leases) for (let var_core_value_sigD873 of var_core_value_sigE799) {
      if (var_core_value_sigD873.role !== "child-session" || !var_core_value_sigD873.childUnitId) continue;
      let var_core_value_sig3EEE = this._getChildSessionPriority(var_core_value_sigD873);
      (!var_core_value_sigCCDC || var_core_value_sig3EEE > var_core_value_sigCCDC.priority || var_core_value_sig3EEE === var_core_value_sigCCDC.priority && var_core_value_sigD873.sequence > var_core_value_sigCCDC.lease["sequence"]) && (var_core_value_sigCCDC = {
        embedId: var_core_value_sig7C4A,
        lease: var_core_value_sigD873,
        priority: var_core_value_sig3EEE
      });
    }
    return var_core_value_sigCCDC ? {
      embedId: var_core_value_sigCCDC.embedId,
      hostUnitId: var_core_value_sigCCDC.lease["hostUnitId"],
      childUnitId: var_core_value_sigCCDC.lease["childUnitId"],
      childType: var_core_value_sigCCDC.lease["childType"],
      sessionMode: this._resolveChildSessionMode(var_core_value_sigCCDC.lease)
    } : undefined;
  }
  isChildUnitRuntimeEvent(var_core_value_sigC310, var_core_value_sigA4E8, var_core_value_sigDC07) {
    if (!var_core_value_sigC310) return false;
    let var_core_value_sig3474 = this._getOwnedEmbedIdFromTarget(var_core_value_sigA4E8, var_core_value_sigDC07);
    return var_core_value_sig3474 ? this._ownedEmbedAppliesToChildUnit(var_core_value_sig3474, var_core_value_sigC310) : false;
  }
  shouldSuppressHostInteraction(var_core_value_sig4E80, var_core_value_sigD23B, var_core_value_sig2B2A, var_core_value_sig0B5C) {
    return this.isChildUnitRuntimeEvent(var_core_value_sig4E80, var_core_value_sigD23B, var_core_value_sig2B2A) || this.isChildUnitInActiveSession(var_core_value_sig4E80) ? false : this.hasHostPreservingChildFocusLeaseForHost(var_core_value_sig4E80, var_core_value_sig0B5C);
  }
  registerElement(var_core_value_sig7D42) {
    let var_core_value_sig8FDE = this._elements["get"](var_core_value_sig7D42.embedId);
    var_core_value_sig8FDE || (var_core_value_sig8FDE = new Set(), this._elements["set"](var_core_value_sig7D42.embedId, var_core_value_sig8FDE)), var_core_value_sig8FDE.add(var_core_value_sig7D42.element);
    let var_core_value_sig78E6 = var_core_value_sig7D42.element["getAttribute"](ws);
    return var_core_value_sig7D42.element["setAttribute"](ws, var_core_value_sig7D42.role), this._notifyRuntimeFocusChanged(), var_core_value_sig9BBC(() => {
      var_core_value_sig8FDE == null || var_core_value_sig8FDE.delete(var_core_value_sig7D42.element), (var_core_value_sig8FDE == null ? undefined : var_core_value_sig8FDE.size) === 0 && this._elements["delete"](var_core_value_sig7D42.embedId), var_core_value_sig78E6 == null ? var_core_value_sig7D42.element["removeAttribute"](ws) : var_core_value_sig7D42.element["setAttribute"](ws, var_core_value_sig78E6), this._notifyRuntimeFocusChanged();
    });
  }
  listElements(var_core_value_sig541F) {
    return var_core_value_sig541F ? [...(this._elements["get"](var_core_value_sig541F) ?? [])] : [];
  }
  containsElement(var_core_value_sig417B, var_core_value_sigAA90, var_core_value_sigE92D) {
    if (!var_core_value_sig417B) return false;
    let var_core_value_sig9940 = this._elements["get"](var_core_value_sig417B),
      var_core_value_sig682D = typeof (var_core_value_sigE92D == null ? undefined : var_core_value_sigE92D.composedPath) == "function" ? var_core_value_sigE92D.composedPath() : undefined;
    return var_core_value_sig9940 != null && var_core_value_sig9940.size && var_core_value_sig682D != null && var_core_value_sig682D.some(var_core_value_sigB601 => var_core_value_sigB601 instanceof HTMLElement && this._containsRegisteredElement(var_core_value_sig9940, var_core_value_sigB601)) || var_core_value_sig682D != null && var_core_value_sig682D.some(var_core_value_sig8B71 => var_core_value_sig8B71 instanceof HTMLElement && this._isOwnedBoundaryElement(var_core_value_sig417B, var_core_value_sig8B71)) ? true : var_core_value_sigAA90 instanceof HTMLElement && (!!(var_core_value_sig9940 != null && var_core_value_sig9940.size) && this._containsRegisteredElement(var_core_value_sig9940, var_core_value_sigAA90) || this._isOwnedBoundaryElement(var_core_value_sig417B, var_core_value_sigAA90));
  }
  _containsRegisteredElement(var_core_value_sig1435, var_core_value_sig4082) {
    return [...var_core_value_sig1435].some(var_core_value_sigAEFB => var_core_value_sigAEFB === var_core_value_sig4082 || var_core_value_sigAEFB.contains(var_core_value_sig4082));
  }
  _isBlockingLease(var_core_value_sigC049, var_core_value_sigE5C3) {
    var var_core_value_sigCCAA;
    return var_core_value_sigC049.owner && var_core_value_sigE5C3 != null && (var_core_value_sigCCAA = var_core_value_sigE5C3.ignoreOwners) != null && var_core_value_sigCCAA.includes(var_core_value_sigC049.owner) ? false : this._isBlockingRole(var_core_value_sigC049.role);
  }
  _isHostPreservingLease(var_core_value_sigF32D, var_core_value_sig9427) {
    var var_core_value_sig21F4;
    return var_core_value_sigF32D.owner && var_core_value_sig9427 != null && (var_core_value_sig21F4 = var_core_value_sig9427.ignoreOwners) != null && var_core_value_sig21F4.includes(var_core_value_sigF32D.owner) ? false : var_core_value_sigF32D.role !== "runtime";
  }
  _leaseAppliesToHostUnit(var_core_value_sigA345, var_core_value_sigA468) {
    return var_core_value_sigA345.hostUnitId == null || var_core_value_sigA345.hostUnitId === var_core_value_sigA468;
  }
  _ownedRuntimeFocusAppliesToHost(var_core_value_sig1561, var_core_value_sigDF14) {
    let var_core_value_sig842F = this._runtimeScopes["get"](var_core_value_sig1561);
    return !!var_core_value_sig842F && [...var_core_value_sig842F].some(var_core_value_sig826B => var_core_value_sig826B.hostUnitId == null || var_core_value_sig826B.hostUnitId === var_core_value_sigDF14);
  }
  _leaseAppliesToChildUnit(var_core_value_sigC4C0, var_core_value_sig214A) {
    var var_core_value_sigCCC3;
    return var_core_value_sigC4C0.childUnitId === var_core_value_sig214A || ((var_core_value_sigCCC3 = var_core_value_sigC4C0.associatedChildUnitIds) == null ? undefined : var_core_value_sigCCC3.includes(var_core_value_sig214A)) === true;
  }
  _ownedEmbedAppliesToChildUnit(var_core_value_sig986E, var_core_value_sig537C) {
    if ([...(this._runtimeScopes["get"](var_core_value_sig986E) ?? [])].some(var_core_value_sigCF89 => var_core_value_sigCF89.childUnitId === var_core_value_sig537C)) return true;
    let var_core_value_sigBBBC = this._leases["get"](var_core_value_sig986E);
    return !!var_core_value_sigBBBC && [...var_core_value_sigBBBC].some(var_core_value_sig00CB => this._leaseAppliesToChildUnit(var_core_value_sig00CB, var_core_value_sig537C));
  }
  _isBlockingRole(var_core_value_sig5440) {
    return var_core_value_sig5440 !== "runtime";
  }
  _getChildSessionPriority(var_core_value_sigE28B) {
    let var_core_value_sig0FD9 = this._resolveChildSessionMode(var_core_value_sigE28B);
    return var_core_value_sig0FD9 === "child-fullscreen" ? 30 : var_core_value_sig0FD9 === "child-keyboard" ? 20 : var_core_value_sig0FD9 === "child-tab" ? 10 : 0;
  }
  _resolveChildSessionMode(var_core_value_sig5649) {
    return var_core_value_sig5649.sessionMode ? var_core_value_sig5649.sessionMode : var_core_value_sig5649.owner === "fullscreen-runtime" ? "child-fullscreen" : var_core_value_sig5649.owner === "stage2-runtime" || var_core_value_sig5649.owner === "doc-block-stage2-runtime" ? "child-keyboard" : var_core_value_sig5649.owner === "tab-peer-runtime" ? "child-tab" : var_core_value_sig5649.role === "child-session" ? "child-keyboard" : "host-passive";
  }
  _isOwnedBoundaryElement(var_core_value_sigAF82, var_core_value_sig21A2) {
    return var_core_value_sig21A2.closest("[" + Z + "=\x22" + var_core_value_sigAF82 + "\x22]") != null;
  }
  _getOwnedEmbedIdFromTarget(var_core_value_sig5C1D, var_core_value_sig4CBA) {
    let var_core_value_sig8E65 = typeof (var_core_value_sig4CBA == null ? undefined : var_core_value_sig4CBA.composedPath) == "function" ? var_core_value_sig4CBA.composedPath() : undefined,
      var_core_value_sig772C = (var_core_value_sig8E65 == null ? undefined : var_core_value_sig8E65.find(var_core_value_sig77EE => this._isHTMLElement(var_core_value_sig77EE) && var_core_value_sig77EE.hasAttribute("data-embed-interaction-boundary-owner"))) ?? (this._isHTMLElement(var_core_value_sig5C1D) ? var_core_value_sig5C1D.closest("[data-embed-interaction-boundary-owner]") ?? undefined : undefined);
    return (var_core_value_sig772C == null ? undefined : var_core_value_sig772C.getAttribute("data-embed-interaction-boundary-owner")) ?? this._getOwnedEmbedIdFromEventPoint(var_core_value_sig4CBA);
  }
  _getOwnedEmbedIdFromEventPoint(var_core_value_sigF309) {
    let var_core_value_sig44F9 = this._getEventClientPoint(var_core_value_sigF309);
    if (!var_core_value_sig44F9) return;
    let var_core_value_sigE532;
    for (let [var_core_value_sig9F76, var_core_value_sigB008] of this._elements) for (let var_core_value_sigA12B of var_core_value_sigB008) {
      let var_core_value_sigBC46 = var_core_value_sigA12B.getBoundingClientRect();
      if (!this._rectContainsPoint(var_core_value_sigBC46, var_core_value_sig44F9.clientX, var_core_value_sig44F9.clientY)) continue;
      let var_core_value_sig3D7D = var_core_value_sigBC46.width * var_core_value_sigBC46.height;
      (!var_core_value_sigE532 || var_core_value_sig3D7D < var_core_value_sigE532.area) && (var_core_value_sigE532 = {
        embedId: var_core_value_sig9F76,
        area: var_core_value_sig3D7D
      });
    }
    return var_core_value_sigE532 == null ? undefined : var_core_value_sigE532.embedId;
  }
  _getEventClientPoint(var_core_value_sigF381) {
    let var_core_value_sigCB92 = var_core_value_sigF381;
    if (var_core_value_sigCB92) {
      if (Number.isFinite(var_core_value_sigCB92.clientX) && Number.isFinite(var_core_value_sigCB92.clientY)) return {
        clientX: var_core_value_sigCB92.clientX,
        clientY: var_core_value_sigCB92.clientY
      };
      if (Number.isFinite(var_core_value_sigCB92.x) && Number.isFinite(var_core_value_sigCB92.y)) return {
        clientX: var_core_value_sigCB92.x,
        clientY: var_core_value_sigCB92.y
      };
    }
  }
  _rectContainsPoint(var_core_value_sigC844, var_core_value_sig2ED4, var_core_value_sig0477) {
    return var_core_value_sigC844.width > 0 && var_core_value_sigC844.height > 0 && var_core_value_sig2ED4 >= var_core_value_sigC844.left && var_core_value_sig2ED4 <= var_core_value_sigC844.right && var_core_value_sig0477 >= var_core_value_sigC844.top && var_core_value_sig0477 <= var_core_value_sigC844.bottom;
  }
  _getActiveOwnedRuntimeFocusInfo() {
    var var_core_value_sig6FDF;
    let var_core_value_sig27C4 = this._getAnyActiveElement();
    if (!this._isHTMLElement(var_core_value_sig27C4)) return;
    let var_core_value_sig3E1A = var_core_value_sig27C4.closest("[" + Z + "]");
    if (!var_core_value_sig3E1A) return;
    let var_core_value_sig7FB0 = var_core_value_sig3E1A.getAttribute(Z),
      var_core_value_sig5215 = (var_core_value_sig6FDF = var_core_value_sig27C4.closest("[data-embed-runtime-focus-role]")) == null ? undefined : var_core_value_sig6FDF.getAttribute(ws);
    return var_core_value_sig7FB0 && this._isRuntimeFocusRole(var_core_value_sig5215) ? {
      embedId: var_core_value_sig7FB0,
      role: var_core_value_sig5215
    } : undefined;
  }
  _isHTMLElement(var_core_value_sig5204) {
    var var_core_value_sig5E11;
    if (!var_core_value_sig5204) return false;
    let var_core_value_sig4D58 = (var_core_value_sig5E11 = var_core_value_sig5204.ownerDocument) == null ? undefined : var_core_value_sig5E11.defaultView;
    return var_core_value_sig4D58 ? var_core_value_sig5204 instanceof var_core_value_sig4D58.HTMLElement : typeof HTMLElement < "u" && var_core_value_sig5204 instanceof HTMLElement;
  }
  _isRuntimeFocusRole(var_core_value_sig2DBD) {
    return var_core_value_sig2DBD === "runtime" || var_core_value_sig2DBD === "child-session" || var_core_value_sig2DBD === "child-editor" || var_core_value_sig2DBD === "child-popup" || var_core_value_sig2DBD === "floating-menu";
  }
  _getAnyActiveElement() {
    for (let var_core_value_sig8721 of this._elements["values"]()) {
      var var_core_value_sig424E;
      let var_core_value_sigF230 = (var_core_value_sig424E = var_core_value_sig8721.values().next().value) == null ? undefined : var_core_value_sig424E.ownerDocument;
      if (var_core_value_sigF230 != null && var_core_value_sigF230.activeElement) return var_core_value_sigF230.activeElement;
    }
    return typeof document > "u" ? null : document.activeElement;
  }
  _getActiveElement(var_core_value_sigF481) {
    var var_core_value_sigD7F2;
    let var_core_value_sig7CF3 = this._elements["get"](var_core_value_sigF481),
      var_core_value_sig9DC6 = var_core_value_sig7CF3 == null || (var_core_value_sigD7F2 = var_core_value_sig7CF3.values().next().value) == null ? undefined : var_core_value_sigD7F2.ownerDocument;
    return (var_core_value_sig9DC6 == null ? undefined : var_core_value_sig9DC6.activeElement) ?? (typeof document > "u" ? null : document.activeElement);
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
    registerRoot(var_core_value_sig6643, var_core_value_sig4124, var_core_value_sigBF1C) {
      let var_core_value_sigEEEF = this._roots["get"](var_core_value_sig6643);
      var_core_value_sigEEEF || (var_core_value_sigEEEF = new Set(), this._roots["set"](var_core_value_sig6643, var_core_value_sigEEEF)), var_core_value_sigBF1C && this._childUnitIds["set"](var_core_value_sig6643, var_core_value_sigBF1C), var_core_value_sigEEEF.add(var_core_value_sig4124);
      let var_core_value_sig9A01 = var_core_value_sig4124.getAttribute(Z),
        var_core_value_sig674F = var_core_value_sig4124.getAttribute(var_core_value_sigC8C0);
      var_core_value_sig4124.setAttribute(Z, var_core_value_sig6643), var_core_value_sigBF1C && var_core_value_sig4124.setAttribute(var_core_value_sigC8C0, var_core_value_sigBF1C);
      let var_core_value_sigC8F6 = this._registerRootPopupDescendantFocusRoles(var_core_value_sig6643, var_core_value_sig4124),
        var_core_value_sig8A26 = () => this._claimBodyPortals(var_core_value_sig6643, var_core_value_sig4124.ownerDocument);
      return var_core_value_sig4124.addEventListener("pointerdown", var_core_value_sig8A26, true), var_core_value_sig4124.addEventListener("mousedown", var_core_value_sig8A26, true), var_core_value_sig4124.addEventListener("focusin", var_core_value_sig8A26, true), var_core_value_sig9BBC(() => {
        var var_core_value_sig08BA;
        var_core_value_sigC8F6.dispose(), var_core_value_sig4124.removeEventListener("pointerdown", var_core_value_sig8A26, true), var_core_value_sig4124.removeEventListener("mousedown", var_core_value_sig8A26, true), var_core_value_sig4124.removeEventListener("focusin", var_core_value_sig8A26, true), ((var_core_value_sig08BA = this._pendingPortalOwner) == null ? undefined : var_core_value_sig08BA.embedId) === var_core_value_sig6643 && this._pendingPortalOwner["document"] === var_core_value_sig4124.ownerDocument && (this._pendingPortalOwner = undefined), var_core_value_sigEEEF == null || var_core_value_sigEEEF.delete(var_core_value_sig4124), var_core_value_sigEEEF && var_core_value_sigEEEF.size === 0 && (this._roots["delete"](var_core_value_sig6643), this._childUnitIds["delete"](var_core_value_sig6643)), var_core_value_sig9A01 == null ? var_core_value_sig4124.removeAttribute(Z) : var_core_value_sig4124.setAttribute(Z, var_core_value_sig9A01), var_core_value_sig674F == null ? var_core_value_sig4124.removeAttribute(var_core_value_sigC8C0) : var_core_value_sig4124.setAttribute(var_core_value_sigC8C0, var_core_value_sig674F);
      });
    }
    _registerRootPopupDescendantFocusRoles(var_core_value_sigD073, var_core_value_sigF631) {
      let var_core_value_sig2278 = var_core_value_sigF631.ownerDocument["defaultView"],
        var_core_value_sig7053 = new Map(),
        var_core_value_sig52F1 = new Map(),
        var_core_value_sig1E74,
        var_core_value_sig1E84 = false,
        var_core_value_sig133B = var_core_value_sigDBB5 => {
          var_core_value_sig7053.has(var_core_value_sigDBB5) || var_core_value_sig7053.set(var_core_value_sigDBB5, var_core_value_sigDBB5.getAttribute(Z)), var_core_value_sig52F1.has(var_core_value_sigDBB5) || var_core_value_sig52F1.set(var_core_value_sigDBB5, var_core_value_sigDBB5.getAttribute(ws));
        },
        var_core_value_sig69B8 = var_core_value_sigCFAC => {
          var_core_value_sig133B(var_core_value_sigCFAC), var_core_value_sigCFAC.setAttribute(Z, var_core_value_sigD073), var_core_value_sigCFAC.setAttribute(ws, "child-popup");
        },
        var_core_value_sig983D = var_core_value_sig237B => {
          this._isUniverPortalTreeElement(var_core_value_sig237B) && (var_core_value_sig69B8(var_core_value_sig237B), var_core_value_sig237B.querySelectorAll("*").forEach(var_core_value_sig69B8));
        },
        var_core_value_sig9A03 = var_core_value_sigFEAB => {
          var_core_value_sig1E84 || (var_core_value_sig983D(var_core_value_sigFEAB), var_core_value_sigFEAB.querySelectorAll("*").forEach(var_core_value_sig09B8 => var_core_value_sig983D(var_core_value_sig09B8)));
        };
      return var_core_value_sig9A03(var_core_value_sigF631), var_core_value_sig2278 != null && var_core_value_sig2278.MutationObserver && (var_core_value_sig1E74 = new var_core_value_sig2278["MutationObserver"](var_core_value_sigE347 => {
        var_core_value_sigE347.forEach(var_core_value_sig6F91 => {
          var_core_value_sig6F91.addedNodes["forEach"](var_core_value_sig27E5 => {
            var_core_value_sig27E5 instanceof var_core_value_sig2278.HTMLElement && var_core_value_sig9A03(var_core_value_sig27E5);
          });
        });
      }), var_core_value_sig1E74.observe(var_core_value_sigF631, {
        childList: true,
        subtree: true
      })), var_core_value_sig9BBC(() => {
        var_core_value_sig1E84 = true, var_core_value_sig1E74 == null || var_core_value_sig1E74.disconnect(), var_core_value_sig7053.forEach((var_core_value_sigF9C7, var_core_value_sig8895) => {
          if (var_core_value_sigF9C7 == null) {
            var_core_value_sig8895.removeAttribute(Z);
            return;
          }
          var_core_value_sig8895.setAttribute(Z, var_core_value_sigF9C7);
        }), var_core_value_sig52F1.forEach((var_core_value_sigC80B, var_core_value_sig284F) => {
          if (var_core_value_sigC80B == null) {
            var_core_value_sig284F.removeAttribute(ws);
            return;
          }
          var_core_value_sig284F.setAttribute(ws, var_core_value_sigC80B);
        });
      });
    }
    registerOwnedElement(var_core_value_sig3363, var_core_value_sigF64A) {
      let var_core_value_sig25EC = this._roots["get"](var_core_value_sig3363);
      var_core_value_sig25EC || (var_core_value_sig25EC = new Set(), this._roots["set"](var_core_value_sig3363, var_core_value_sig25EC)), var_core_value_sig25EC.add(var_core_value_sigF64A);
      let var_core_value_sigA790 = this._markInteractionBoundaryOwnerTree(var_core_value_sig3363, var_core_value_sigF64A);
      return var_core_value_sig9BBC(() => {
        var_core_value_sig25EC == null || var_core_value_sig25EC.delete(var_core_value_sigF64A), var_core_value_sig25EC && var_core_value_sig25EC.size === 0 && this._roots["delete"](var_core_value_sig3363), var_core_value_sigA790.dispose();
      });
    }
    contains(var_core_value_sig9A5E, var_core_value_sig01B9, var_core_value_sigD6A9) {
      let var_core_value_sig0FCF = typeof (var_core_value_sigD6A9 == null ? undefined : var_core_value_sigD6A9.composedPath) == "function" ? var_core_value_sigD6A9.composedPath() : undefined;
      if (var_core_value_sig0FCF != null && var_core_value_sig0FCF.some(var_core_value_sig3C5B => var_core_value_sig3C5B instanceof HTMLElement && this._isOwnedElement(var_core_value_sig9A5E, var_core_value_sig3C5B))) return true;
      if (!(var_core_value_sig01B9 instanceof HTMLElement)) return false;
      if (this._isOwnedElement(var_core_value_sig9A5E, var_core_value_sig01B9)) return true;
      if (!var_core_value_sig9A5E) return Array.from(this._roots["values"]()).some(var_core_value_sig200B => [...var_core_value_sig200B].some(var_core_value_sigE154 => var_core_value_sigE154.isConnected && var_core_value_sigE154.contains(var_core_value_sig01B9)));
      let var_core_value_sigCF96 = this._roots["get"](var_core_value_sig9A5E);
      return !!var_core_value_sigCF96 && [...var_core_value_sigCF96].some(var_core_value_sig3863 => var_core_value_sig3863.isConnected && var_core_value_sig3863.contains(var_core_value_sig01B9));
    }
    hasRecentInteraction(var_core_value_sigC4E9) {
      let var_core_value_sigF612 = var_core_value_sigC4E9 ? this._activePortalOwners["get"](var_core_value_sigC4E9) : typeof document < "u" ? this._activePortalOwners["get"](document) : undefined;
      if (var_core_value_sigF612 != null && var_core_value_sigF612.length) return true;
      let var_core_value_sigAA6C = this._pendingPortalOwner;
      return !var_core_value_sigAA6C || Date.now() > var_core_value_sigAA6C.expiresAt ? false : !var_core_value_sigC4E9 || var_core_value_sigAA6C.document === var_core_value_sigC4E9;
    }
    hasRecentInteractionFor(var_core_value_sig8BFA, var_core_value_sig236B) {
      if (!var_core_value_sig8BFA) return false;
      let var_core_value_sig1951 = var_core_value_sig236B ? this._activePortalOwners["get"](var_core_value_sig236B) : typeof document < "u" ? this._activePortalOwners["get"](document) : undefined;
      if (var_core_value_sig1951 != null && var_core_value_sig1951.some(var_core_value_sigC97C => var_core_value_sigC97C.embedId === var_core_value_sig8BFA)) return true;
      let var_core_value_sigFEA0 = this._pendingPortalOwner;
      return !var_core_value_sigFEA0 || var_core_value_sigFEA0.embedId !== var_core_value_sig8BFA || Date.now() > var_core_value_sigFEA0.expiresAt ? false : !var_core_value_sig236B || var_core_value_sigFEA0.document === var_core_value_sig236B;
    }
    closeOwnedFloatingSurfaces(var_core_value_sig931A, var_core_value_sigEE7D) {
      !var_core_value_sig931A || !(var_core_value_sigEE7D != null && var_core_value_sigEE7D.body) || this._collectOwnedFloatingSurfaceRoots(var_core_value_sig931A, var_core_value_sigEE7D).forEach(var_core_value_sigC4B1 => this._dispatchEscapeToFloatingSurface(var_core_value_sigC4B1, var_core_value_sigEE7D));
    }
    activatePortalScope(var_core_value_sig3585, var_core_value_sig31A8, var_core_value_sigA4DA = {}) {
      var var_core_value_sig6FC0;
      if (!(var_core_value_sig31A8 != null && var_core_value_sig31A8.body)) return var_core_value_sig9BBC(() => {});
      let var_core_value_sig6217 = Symbol(var_core_value_sig3585),
        var_core_value_sigB805 = this._activePortalOwners["get"](var_core_value_sig31A8) ?? [],
        var_core_value_sig4FAE = var_core_value_sigA4DA.includeAppShellEditorPortal ?? true;
      return var_core_value_sigB805.push({
        embedId: var_core_value_sig3585,
        includeAppShellEditorPortal: var_core_value_sig4FAE,
        token: var_core_value_sig6217
      }), this._activePortalOwners["set"](var_core_value_sig31A8, var_core_value_sigB805), this._ensurePortalObserver(var_core_value_sig31A8), this._markExistingBodyPortals(var_core_value_sig3585, var_core_value_sig31A8, {
        includeAppShellEditorPortal: var_core_value_sig4FAE,
        allowOwnedPortalReassignment: true,
        allowDirectBodyPortal: false
      }), this._cleanupOrdinaryBodyChromeClaims(var_core_value_sig3585, var_core_value_sig31A8), (var_core_value_sig6FC0 = var_core_value_sig31A8.defaultView) == null || var_core_value_sig6FC0.setTimeout(() => {
        let var_core_value_sig1BD9 = this._getLatestActivePortalOwner(var_core_value_sig31A8);
        (var_core_value_sig1BD9 == null ? undefined : var_core_value_sig1BD9.embedId) === var_core_value_sig3585 && var_core_value_sig1BD9.token === var_core_value_sig6217 && (this._markExistingBodyPortals(var_core_value_sig3585, var_core_value_sig31A8, {
          includeAppShellEditorPortal: var_core_value_sig4FAE,
          allowOwnedPortalReassignment: true,
          allowDirectBodyPortal: false
        }), this._cleanupOrdinaryBodyChromeClaims(var_core_value_sig3585, var_core_value_sig31A8));
      }, 0), var_core_value_sig9BBC(() => {
        let var_core_value_sigE43E = this._activePortalOwners["get"](var_core_value_sig31A8),
          var_core_value_sigA937 = false;
        if (var_core_value_sigE43E) {
          let var_core_value_sig4632 = var_core_value_sigE43E.findIndex(var_core_value_sig8061 => var_core_value_sig8061.embedId === var_core_value_sig3585 && var_core_value_sig8061.token === var_core_value_sig6217);
          var_core_value_sig4632 >= 0 && var_core_value_sigE43E.splice(var_core_value_sig4632, 1), var_core_value_sigA937 = var_core_value_sigE43E.some(var_core_value_sig4D4C => var_core_value_sig4D4C.embedId === var_core_value_sig3585), var_core_value_sigE43E.length === 0 && this._activePortalOwners["delete"](var_core_value_sig31A8);
        }
        var_core_value_sigA937 || this._releaseBodyPortalClaims(var_core_value_sig3585, var_core_value_sig31A8);
        let var_core_value_sigCAD5 = this._getLatestActivePortalOwner(var_core_value_sig31A8);
        var_core_value_sigCAD5 && (this._markExistingBodyPortals(var_core_value_sigCAD5.embedId, var_core_value_sig31A8, {
          includeAppShellEditorPortal: var_core_value_sigCAD5.includeAppShellEditorPortal,
          allowOwnedPortalReassignment: true,
          allowDirectBodyPortal: false
        }), this._cleanupOrdinaryBodyChromeClaims(var_core_value_sigCAD5.embedId, var_core_value_sig31A8));
      });
    }
    _collectOwnedFloatingSurfaceRoots(var_core_value_sig1FCC, var_core_value_sigB7F9) {
      var var_core_value_sigB1A2;
      let var_core_value_sig526D = new Set(),
        var_core_value_sigBDB5 = var_core_value_sigE503 => {
          let var_core_value_sig48DD = this._resolveFloatingSurfaceRoot(var_core_value_sigE503);
          !var_core_value_sig48DD || !this._isOwnedElement(var_core_value_sig1FCC, var_core_value_sig48DD) || var_core_value_sig526D.add(var_core_value_sig48DD);
        };
      return var_core_value_sigB7F9.body["querySelectorAll"]("[" + Z + "=\x22" + var_core_value_sig1FCC + "\x22]").forEach(var_core_value_sigBDB5), (var_core_value_sigB1A2 = this._roots["get"](var_core_value_sig1FCC)) == null || var_core_value_sigB1A2.forEach(var_core_value_sig5E6A => {
        var_core_value_sig5E6A.isConnected && (var_core_value_sigBDB5(var_core_value_sig5E6A), var_core_value_sig5E6A.querySelectorAll("*").forEach(var_core_value_sigBDB5));
      }), [...var_core_value_sig526D].sort((var_core_value_sigB7FC, var_core_value_sig9CD9) => var_core_value_sigB7FC.contains(var_core_value_sig9CD9) ? 1 : var_core_value_sig9CD9.contains(var_core_value_sigB7FC) ? -1 : 0);
    }
    _resolveFloatingSurfaceRoot(var_core_value_sig59CE) {
      if (!var_core_value_sig59CE.closest('[data-embed-floating-menu="true"], [data-embed-floating-menu-popup="true"]') && this._isUniverPortalTreeElement(var_core_value_sig59CE)) return var_core_value_sig59CE.closest('.univer-popup, .univer-popover, .univer-dropdown, [data-radix-popper-content-wrapper], [data-u-comp="rect-popup"], [role="dialog"], [role="listbox"], [role="menu"], [role="tooltip"]') ?? var_core_value_sig59CE;
    }
    _dispatchEscapeToFloatingSurface(var_core_value_sig3AD7, var_core_value_sig04E4) {
      let var_core_value_sigD8F0 = var_core_value_sig04E4.defaultView,
        var_core_value_sig1475 = var_core_value_sig04E4.activeElement instanceof HTMLElement && var_core_value_sig3AD7.contains(var_core_value_sig04E4.activeElement) ? var_core_value_sig04E4.activeElement : var_core_value_sig3AD7,
        var_core_value_sig08B7 = var_core_value_sigD8F0 != null && var_core_value_sigD8F0.KeyboardEvent ? new var_core_value_sigD8F0["KeyboardEvent"]("keydown", {
          key: "Escape",
          code: "Escape",
          bubbles: true,
          cancelable: true
        }) : new Event("keydown", {
          bubbles: true,
          cancelable: true
        });
      var_core_value_sig1475.dispatchEvent(var_core_value_sig08B7);
    }
    _isOwnedElement(var_core_value_sig2008, var_core_value_sig496B1) {
      let var_core_value_sig7161 = var_core_value_sig496B1.closest("[" + Z + "]"),
        var_core_value_sig2AB8 = var_core_value_sig7161 == null ? undefined : var_core_value_sig7161.getAttribute(Z);
      if (var_core_value_sig2AB8 && (!var_core_value_sig2008 || var_core_value_sig2AB8 === var_core_value_sig2008)) return true;
      if (!var_core_value_sig2008) return Array.from(this._roots["values"]()).some(var_core_value_sigFD0C => [...var_core_value_sigFD0C].some(var_core_value_sig12F2 => var_core_value_sig12F2 === var_core_value_sig496B1 || var_core_value_sig12F2.contains(var_core_value_sig496B1)));
      let var_core_value_sig3FCF = this._roots["get"](var_core_value_sig2008);
      return !!var_core_value_sig3FCF && [...var_core_value_sig3FCF].some(var_core_value_sig849B => var_core_value_sig849B === var_core_value_sig496B1 || var_core_value_sig849B.contains(var_core_value_sig496B1));
    }
    _claimBodyPortals(var_core_value_sig675A, var_core_value_sig837F) {
      var var_core_value_sig9D6E;
      var_core_value_sig837F != null && var_core_value_sig837F.body && (this._pendingPortalOwner = {
        embedId: var_core_value_sig675A,
        document: var_core_value_sig837F,
        expiresAt: Date.now() + 1000
      }, this._ensurePortalObserver(var_core_value_sig837F), this._markExistingBodyPortals(var_core_value_sig675A, var_core_value_sig837F, {
        includeAppShellEditorPortal: false
      }), (var_core_value_sig9D6E = var_core_value_sig837F.defaultView) == null || var_core_value_sig9D6E.setTimeout(() => {
        let var_core_value_sig5F1A = this._pendingPortalOwner;
        (var_core_value_sig5F1A == null ? undefined : var_core_value_sig5F1A.embedId) === var_core_value_sig675A && var_core_value_sig5F1A.document === var_core_value_sig837F && Date.now() <= var_core_value_sig5F1A.expiresAt && this._markExistingBodyPortals(var_core_value_sig675A, var_core_value_sig837F, {
          includeAppShellEditorPortal: false
        });
      }, 0));
    }
    _ensurePortalObserver(var_core_value_sigB205) {
      if (this._portalObservers["has"](var_core_value_sigB205) || !var_core_value_sigB205.body) return;
      let var_core_value_sigBF78 = var_core_value_sigB205.defaultView;
      if (!(var_core_value_sigBF78 != null && var_core_value_sigBF78.MutationObserver)) return;
      let var_core_value_sig8AF3 = new var_core_value_sigBF78["MutationObserver"](var_core_value_sigB455 => {
        let var_core_value_sig5241 = this._getBodyPortalOwner(var_core_value_sigB205);
        if (!var_core_value_sig5241) return;
        let var_core_value_sigC6E5 = {
          includeAppShellEditorPortal: var_core_value_sig5241.includeAppShellEditorPortal,
          allowOwnedPortalReassignment: var_core_value_sig5241.stable,
          allowDirectBodyPortal: !var_core_value_sig5241.stable
        };
        var_core_value_sigB455.forEach(var_core_value_sig2259 => {
          var_core_value_sig2259.type === "attributes" && var_core_value_sig2259.target instanceof var_core_value_sigBF78.HTMLElement && (this._markBodyPortalOwner(var_core_value_sig2259.target, var_core_value_sig5241.embedId, var_core_value_sigB205, var_core_value_sigC6E5), var_core_value_sig2259.attributeName === "data-state" && this._syncClosedPortalInputGuard(var_core_value_sig2259.target, var_core_value_sig5241.embedId)), var_core_value_sig2259.addedNodes["forEach"](var_core_value_sigC9E0 => {
            var_core_value_sigC9E0 instanceof var_core_value_sigBF78.HTMLElement && (this._markBodyPortalOwner(var_core_value_sigC9E0, var_core_value_sig5241.embedId, var_core_value_sigB205, var_core_value_sigC6E5), var_core_value_sigC9E0.querySelectorAll("*").forEach(var_core_value_sig7524 => {
              this._markBodyPortalOwner(var_core_value_sig7524, var_core_value_sig5241.embedId, var_core_value_sigB205, var_core_value_sigC6E5);
            }), var_core_value_sigC9E0.hasAttribute("data-state") && this._syncClosedPortalInputGuard(var_core_value_sigC9E0, var_core_value_sig5241.embedId), var_core_value_sigC9E0.querySelectorAll("[data-state]").forEach(var_core_value_sig2AD8 => {
              this._syncClosedPortalInputGuard(var_core_value_sig2AD8, var_core_value_sig5241.embedId);
            }));
          });
        }), var_core_value_sig5241.stable && this._cleanupOrdinaryBodyChromeClaims(var_core_value_sig5241.embedId, var_core_value_sigB205);
      });
      var_core_value_sig8AF3.observe(var_core_value_sigB205.body, {
        attributeFilter: ["class", "data-state", "data-u-comp", "id", "role", "style"],
        attributes: true,
        childList: true,
        subtree: true
      }), var_core_value_sig8AF3.takeRecords(), this._portalObservers["set"](var_core_value_sigB205, var_core_value_sig8AF3);
    }
    _markBodyPortalOwner(var_core_value_sigA0CC, var_core_value_sigB3A1, var_core_value_sig1FB9, var_core_value_sig53A9 = {}) {
      var_core_value_sig53A9.allowDirectBodyPortal === false && var_core_value_sigA0CC.parentElement === var_core_value_sig1FB9.body && !this._isUniverPortalCandidate(var_core_value_sigA0CC) && !this._isAppShellEditorPortalCandidate(var_core_value_sigA0CC) || this._isBodyPortalCandidate(var_core_value_sigA0CC, var_core_value_sig1FB9, var_core_value_sig53A9) && (!this._isAppShellEditorPortalCandidate(var_core_value_sigA0CC) && this._isDetachedOffscreenPortalCandidate(var_core_value_sigA0CC, var_core_value_sig1FB9) || (this._blurActiveElementBeforePortalReassignment(var_core_value_sigA0CC, var_core_value_sigB3A1, var_core_value_sig1FB9), this._markInteractionBoundaryOwnerTree(var_core_value_sigB3A1, var_core_value_sigA0CC, {
        transient: true
      }), this._markRuntimeFocusRole(var_core_value_sigA0CC, var_core_value_sig53A9)));
    }
    _markExistingBodyPortals(var_core_value_sigDACD, var_core_value_sig691E, var_core_value_sigD6D6 = {}) {
      var_core_value_sig691E.body["querySelectorAll"]("*").forEach(var_core_value_sigCEFB => {
        this._markBodyPortalOwner(var_core_value_sigCEFB, var_core_value_sigDACD, var_core_value_sig691E, {
          includeAppShellEditorPortal: var_core_value_sigD6D6.includeAppShellEditorPortal,
          allowOwnedPortalReassignment: var_core_value_sigD6D6.allowOwnedPortalReassignment,
          allowDirectBodyPortal: var_core_value_sigD6D6.allowDirectBodyPortal
        });
      });
    }
    _isBodyPortalCandidate(var_core_value_sig0347, var_core_value_sig52A3, var_core_value_sigAD91 = {}) {
      if (!var_core_value_sig52A3.body["contains"](var_core_value_sig0347)) return false;
      let var_core_value_sigF64E = !!var_core_value_sigAD91.includeAppShellEditorPortal && this._isAppShellEditorPortalCandidate(var_core_value_sig0347),
        var_core_value_sig9B3D = this._isUniverPortalCandidate(var_core_value_sig0347);
      if (!var_core_value_sigAD91.allowOwnedPortalReassignment && !var_core_value_sigF64E && var_core_value_sig0347.closest("[data-embed-interaction-boundary-owner]") || var_core_value_sig0347.id === "app") return false;
      let var_core_value_sigB217 = var_core_value_sig0347.parentElement;
      return !!var_core_value_sigAD91.allowDirectBodyPortal && var_core_value_sigB217 === var_core_value_sig52A3.body || (var_core_value_sigB217 == null ? undefined : var_core_value_sigB217.closest("[data-radix-popper-content-wrapper]")) != null || var_core_value_sig9B3D || var_core_value_sigF64E;
    }
    _isAppShellEditorPortalCandidate(var_core_value_sig1FE6) {
      var var_core_value_sig2471, var_core_value_sigD1FC;
      return ((var_core_value_sig2471 = var_core_value_sig1FE6.parentElement) == null ? undefined : var_core_value_sig2471.id) !== "app" && ((var_core_value_sigD1FC = var_core_value_sig1FE6.closest("#app")) == null ? undefined : var_core_value_sigD1FC.parentElement) !== var_core_value_sig1FE6.ownerDocument["body"] ? false : var_core_value_sig1FE6.id["startsWith"]("univer-doc-selection-container-__INTERNAL_EDITOR__") || var_core_value_sig1FE6.id["startsWith"]("__editor___INTERNAL_EDITOR__") || var_core_value_sig1FE6.closest('[id^="univer-doc-selection-container-__INTERNAL_EDITOR__"]') != null || var_core_value_sig1FE6.closest('[id^="__editor___INTERNAL_EDITOR__"]') != null;
    }
    _isHostDocEditorPortal(var_core_value_sigE2F9) {
      return var_core_value_sigE2F9.id["startsWith"]("__editor_docs-") || var_core_value_sigE2F9.id["startsWith"]("univer-doc-selection-container-docs-") || var_core_value_sigE2F9.closest('[id^="univer-doc-selection-container-docs-"]') != null || var_core_value_sigE2F9.closest('[id^="__editor_docs-"]') != null;
    }
    _isUniverPortalCandidate(var_core_value_sigD689) {
      let var_core_value_sig7AE3 = typeof var_core_value_sigD689.className == "string" ? var_core_value_sigD689.className : "";
      if (var_core_value_sigD689.getAttribute("data-u-comp") === "rect-popup" || var_core_value_sigD689.classList["contains"]("univer-popup") || var_core_value_sigD689.classList["contains"]("univer-popover") || var_core_value_sigD689.classList["contains"]("univer-dropdown") || /\buniver-(popup|popover|dropdown|calendar|tooltip|menu)\b/["test"](var_core_value_sig7AE3)) return true;
      let var_core_value_sig1EB3 = var_core_value_sigD689.getAttribute("role");
      return var_core_value_sig1EB3 === "dialog" || var_core_value_sig1EB3 === "listbox" || var_core_value_sig1EB3 === "menu" || var_core_value_sig1EB3 === "tooltip" || var_core_value_sigD689.hasAttribute("data-radix-popper-content-wrapper");
    }
    _isDetachedOffscreenPortalCandidate(var_core_value_sigE120, var_core_value_sigD6E7) {
      if (!this._isUniverPortalTreeElement(var_core_value_sigE120)) return false;
      let var_core_value_sig3669 = var_core_value_sigE120.closest('.univer-popup, .univer-popover, .univer-dropdown, [data-radix-popper-content-wrapper], [data-u-comp="rect-popup"], [role="dialog"], [role="listbox"], [role="menu"], [role="tooltip"]') ?? var_core_value_sigE120,
        var_core_value_sig5CBC = var_core_value_sig3669.closest("#app") ?? var_core_value_sig3669.parentElement;
      if (var_core_value_sig3669.parentElement !== var_core_value_sigD6E7.body && (var_core_value_sig5CBC == null ? undefined : var_core_value_sig5CBC.parentElement) !== var_core_value_sigD6E7.body) return false;
      let var_core_value_sig20BE = var_core_value_sigD6E7.defaultView;
      if (!var_core_value_sig20BE) return false;
      let var_core_value_sig6BD0 = var_core_value_sig3669.getBoundingClientRect();
      return var_core_value_sig6BD0.right < 0 || var_core_value_sig6BD0.bottom < 0 || var_core_value_sig6BD0.left > var_core_value_sig20BE.innerWidth || var_core_value_sig6BD0.top > var_core_value_sig20BE.innerHeight ? true : var_core_value_sig6BD0.width <= 0 || var_core_value_sig6BD0.height <= 0 ? var_core_value_sig6BD0.left < 0 || var_core_value_sig6BD0.top < 0 || var_core_value_sig6BD0.left > var_core_value_sig20BE.innerWidth || var_core_value_sig6BD0.top > var_core_value_sig20BE.innerHeight : false;
    }
    _markRuntimeFocusRole(var_core_value_sig8C15, var_core_value_sig6DF7 = {}) {
      let var_core_value_sigB411 = var_core_value_sig6DF7.includeAppShellEditorPortal && this._isAppShellEditorPortalCandidate(var_core_value_sig8C15) ? "child-editor" : this._isUniverPortalTreeElement(var_core_value_sig8C15) ? "child-popup" : undefined;
      var_core_value_sigB411 && (var_core_value_sig8C15.setAttribute(ws, var_core_value_sigB411), var_core_value_sig8C15.querySelectorAll("*").forEach(var_core_value_sig1537 => {
        var_core_value_sig1537.setAttribute(ws, var_core_value_sigB411);
      }));
    }
    _syncClosedPortalInputGuard(var_core_value_sigA81B, var_core_value_sigFE8D) {
      let var_core_value_sig8595 = this._isUniverPortalCandidate(var_core_value_sigA81B) || var_core_value_sigA81B.closest("[data-radix-popper-content-wrapper]") != null,
        var_core_value_sigF8DE = var_core_value_sigA81B.getAttribute("data-embed-interaction-boundary-owner") === var_core_value_sigFE8D && var_core_value_sigA81B.getAttribute("data-state") === "closed" && var_core_value_sig8595,
        var_core_value_sigFE76 = var_core_value_sigA81B.closest("[data-radix-popper-content-wrapper]") ?? var_core_value_sigA81B;
      if (var_core_value_sigF8DE) {
        var_core_value_sigFE76.classList["contains"](Ts) || (var_core_value_sigFE76.classList["add"](Ts), this._closedPortalInputGuards["add"](var_core_value_sigFE76));
        return;
      }
      this._clearClosedPortalInputGuard(var_core_value_sigFE76);
    }
    _clearClosedPortalInputGuard(var_core_value_sig84C8) {
      this._closedPortalInputGuards["has"](var_core_value_sig84C8) && (var_core_value_sig84C8.classList["remove"](Ts), this._closedPortalInputGuards["delete"](var_core_value_sig84C8));
    }
    _markInteractionBoundaryOwnerTree(var_core_value_sig80C0, var_core_value_sig22B4, var_core_value_sigBB37 = {}) {
      let var_core_value_sig0C51 = new Map(),
        var_core_value_sigADA4 = new Map(),
        var_core_value_sig0E48 = this._childUnitIds["get"](var_core_value_sig80C0),
        var_core_value_sig495B = var_core_value_sigE4C6 => {
          var_core_value_sigBB37.transient || (var_core_value_sig0C51.set(var_core_value_sigE4C6, var_core_value_sigE4C6.getAttribute(Z)), var_core_value_sigADA4.set(var_core_value_sigE4C6, var_core_value_sigE4C6.getAttribute(var_core_value_sigC8C0))), var_core_value_sigE4C6.setAttribute(Z, var_core_value_sig80C0), var_core_value_sig0E48 && var_core_value_sigE4C6.setAttribute(var_core_value_sigC8C0, var_core_value_sig0E48);
        };
      return var_core_value_sig495B(var_core_value_sig22B4), var_core_value_sig22B4.querySelectorAll("*").forEach(var_core_value_sig495B), var_core_value_sig9BBC(() => {
        var_core_value_sig0C51.forEach((var_core_value_sig9E2F, var_core_value_sigD082) => {
          if (var_core_value_sig9E2F == null) {
            var_core_value_sigD082.removeAttribute(Z);
            return;
          }
          var_core_value_sigD082.setAttribute(Z, var_core_value_sig9E2F);
        }), var_core_value_sigADA4.forEach((var_core_value_sigDBB7, var_core_value_sigD0A8) => {
          if (var_core_value_sigDBB7 == null) {
            var_core_value_sigD0A8.removeAttribute(var_core_value_sigC8C0);
            return;
          }
          var_core_value_sigD0A8.setAttribute(var_core_value_sigC8C0, var_core_value_sigDBB7);
        });
      });
    }
    _isUniverPortalTreeElement(var_core_value_sig310C) {
      return this._isUniverPortalCandidate(var_core_value_sig310C) || var_core_value_sig310C.closest(".univer-popup,\x20.univer-popover,\x20.univer-dropdown,\x20[data-radix-popper-content-wrapper],\x20[data-u-comp=\x22rect-popup\x22],\x20[role=\x22dialog\x22],\x20[role=\x22listbox\x22],\x20[role=\x22menu\x22],\x20[role=\x22tooltip\x22]") != null;
    }
    _getBodyPortalOwner(var_core_value_sig759E) {
      let var_core_value_sig6C80 = this._getLatestActivePortalOwner(var_core_value_sig759E);
      if (var_core_value_sig6C80) return {
        embedId: var_core_value_sig6C80.embedId,
        includeAppShellEditorPortal: var_core_value_sig6C80.includeAppShellEditorPortal,
        stable: true
      };
      let var_core_value_sig6B99 = this._pendingPortalOwner;
      if (var_core_value_sig6B99 && var_core_value_sig6B99.document === var_core_value_sig759E && Date.now() <= var_core_value_sig6B99.expiresAt) return {
        embedId: var_core_value_sig6B99.embedId,
        includeAppShellEditorPortal: false,
        stable: false
      };
    }
    _getLatestActivePortalOwner(var_core_value_sig6ADC) {
      let var_core_value_sig41AD = this._activePortalOwners["get"](var_core_value_sig6ADC);
      return var_core_value_sig41AD == null ? undefined : var_core_value_sig41AD[var_core_value_sig41AD.length - 1];
    }
    _cleanupOrdinaryBodyChromeClaims(var_core_value_sigDBC2, var_core_value_sig7739) {
      let var_core_value_sig4040 = this._roots["get"](var_core_value_sigDBC2);
      var_core_value_sig7739.body["querySelectorAll"]("[" + Z + "=\x22" + var_core_value_sigDBC2 + "\x22]").forEach(var_core_value_sig4313 => {
        var_core_value_sig4313.parentElement === var_core_value_sig7739.body && (var_core_value_sig4040 && [...var_core_value_sig4040].some(var_core_value_sigF4B9 => var_core_value_sigF4B9 === var_core_value_sig4313 || var_core_value_sigF4B9.contains(var_core_value_sig4313)) || this._isUniverPortalCandidate(var_core_value_sig4313) || this._isAppShellEditorPortalCandidate(var_core_value_sig4313) || (var_core_value_sig4313.removeAttribute(Z), var_core_value_sig4313.removeAttribute(var_core_value_sigC8C0)));
      });
    }
    _blurActiveElementBeforePortalReassignment(var_core_value_sig1AAA, var_core_value_sig58DB, var_core_value_sig4840) {
      let var_core_value_sigB76D = var_core_value_sig1AAA.getAttribute(Z);
      if (!var_core_value_sigB76D || var_core_value_sigB76D === var_core_value_sig58DB) return;
      let var_core_value_sig1015 = var_core_value_sig4840.activeElement;
      !(var_core_value_sig1015 instanceof HTMLElement) || var_core_value_sig1015 !== var_core_value_sig1AAA && !var_core_value_sig1AAA.contains(var_core_value_sig1015) || (var_core_value_sig1015.blur(), var_core_value_sig4840.activeElement === var_core_value_sig1015 && this._focusDocumentBody(var_core_value_sig4840));
    }
    _releaseBodyPortalClaims(var_core_value_sig6223, var_core_value_sigC6B6) {
      let var_core_value_sig498A = this._roots["get"](var_core_value_sig6223),
        var_core_value_sigEF45 = var_core_value_sigC6B6.body["querySelectorAll"]("[" + Z + "=\x22" + var_core_value_sig6223 + "\x22]"),
        var_core_value_sig36FE = var_core_value_sigFC87 => var_core_value_sig498A != null && [...var_core_value_sig498A].some(var_core_value_sig5CEE => var_core_value_sig5CEE === var_core_value_sigFC87 || var_core_value_sig5CEE.contains(var_core_value_sigFC87)),
        var_core_value_sig3AF5 = [];
      var_core_value_sigEF45.forEach(var_core_value_sig156F => {
        var_core_value_sig36FE(var_core_value_sig156F) || (var_core_value_sig3AF5.push(var_core_value_sig156F), this._clearClosedPortalInputGuard(var_core_value_sig156F), var_core_value_sig156F.removeAttribute(Z), var_core_value_sig156F.removeAttribute(var_core_value_sigC8C0), this._removeRuntimeFocusRoleTree(var_core_value_sig156F));
      });
      let var_core_value_sig14E6 = var_core_value_sigC6B6.activeElement;
      var_core_value_sig14E6 instanceof HTMLElement && var_core_value_sig3AF5.some(var_core_value_sigDD51 => var_core_value_sigDD51 === var_core_value_sig14E6 || var_core_value_sigDD51.contains(var_core_value_sig14E6)) && (var_core_value_sig14E6.blur(), var_core_value_sigC6B6.activeElement === var_core_value_sig14E6 && this._focusDocumentBody(var_core_value_sigC6B6));
    }
    _focusDocumentBody(var_core_value_sig8690) {
      let var_core_value_sigDF29 = var_core_value_sig8690.body;
      if (!var_core_value_sigDF29) return;
      let var_core_value_sigC0F8 = var_core_value_sigDF29.getAttribute("tabindex");
      var_core_value_sigC0F8 ?? (var_core_value_sigDF29.tabIndex = -1), var_core_value_sigDF29.focus({
        preventScroll: true
      }), var_core_value_sigC0F8 == null ? var_core_value_sigDF29.removeAttribute("tabindex") : var_core_value_sigDF29.setAttribute("tabindex", var_core_value_sigC0F8), var_core_value_sig8690.activeElement !== var_core_value_sigDF29 && this._focusTemporarySink(var_core_value_sig8690);
    }
    _focusTemporarySink(var_core_value_sig3C75) {
      var var_core_value_sig992D;
      let var_core_value_sigE4E4 = var_core_value_sig3C75.body;
      if (!var_core_value_sigE4E4) return;
      let var_core_value_sigA4B0 = var_core_value_sig3C75.createElement("span");
      var_core_value_sigA4B0.tabIndex = -1, var_core_value_sigA4B0.setAttribute("aria-hidden", "true"), var_core_value_sigA4B0.style["cssText"] = "position:fixed;width:0;height:0;overflow:hidden;opacity:0;pointer-events:none;", var_core_value_sigE4E4.appendChild(var_core_value_sigA4B0), var_core_value_sigA4B0.focus({
        preventScroll: true
      }), (var_core_value_sig992D = var_core_value_sig3C75.defaultView) == null || var_core_value_sig992D.setTimeout(() => var_core_value_sigA4B0.remove(), 0);
    }
    _removeRuntimeFocusRoleTree(var_core_value_sig5F50) {
      (var_core_value_sig5F50.getAttribute("data-embed-runtime-focus-role") === "child-editor" || var_core_value_sig5F50.getAttribute("data-embed-runtime-focus-role") === "child-popup") && var_core_value_sig5F50.removeAttribute(ws), var_core_value_sig5F50.querySelectorAll("[" + ws + "]").forEach(var_core_value_sigF057 => {
        let var_core_value_sig72F6 = var_core_value_sigF057.getAttribute(ws);
        (var_core_value_sig72F6 === "child-editor" || var_core_value_sig72F6 === "child-popup") && var_core_value_sigF057.removeAttribute(ws);
      });
    }
  },
  Ds = class {
    constructor(var_core_value_sig4494 = {}) {
      Y(this, "_childUnitAncestry", new Map()), Y(this, "_maxDepth", undefined), this._maxDepth = Os(var_core_value_sig4494.maxDepth);
    }
    canMount(var_core_value_sigFFAF) {
      let var_core_value_sig478B = this.getAncestryForHostUnit(var_core_value_sigFFAF.hostUnitId);
      return var_core_value_sig478B.some(var_core_value_sig9FBA => var_core_value_sig9FBA.hostUnitId === var_core_value_sigFFAF.childUnitId || var_core_value_sig9FBA.childUnitId === var_core_value_sigFFAF.childUnitId) ? {
        allowed: false,
        reason: "cycle",
        ancestry: var_core_value_sig478B
      } : var_core_value_sig478B.length >= this._maxDepth ? {
        allowed: false,
        reason: "max-depth",
        ancestry: var_core_value_sig478B
      } : {
        allowed: true,
        ancestry: var_core_value_sig478B
      };
    }
    registerMountedRuntime(var_core_value_sig1E21) {
      let var_core_value_sig9DBF = [...this.getAncestryForHostUnit(var_core_value_sig1E21.hostUnitId), {
        hostUnitId: var_core_value_sig1E21.hostUnitId,
        embedId: var_core_value_sig1E21.embedId,
        childUnitId: var_core_value_sig1E21.childUnitId
      }];
      return this._childUnitAncestry["set"](var_core_value_sig1E21.childUnitId, var_core_value_sig9DBF), var_core_value_sig9BBC(() => {
        this._childUnitAncestry["get"](var_core_value_sig1E21.childUnitId) === var_core_value_sig9DBF && this._childUnitAncestry["delete"](var_core_value_sig1E21.childUnitId);
      });
    }
    getAncestryForHostUnit(var_core_value_sig36CC) {
      return this._childUnitAncestry["get"](var_core_value_sig36CC) ?? [];
    }
    getParentEmbedId(var_core_value_sigA568) {
      var var_core_value_sigD22D;
      return (var_core_value_sigD22D = this.getAncestryForHostUnit(var_core_value_sigA568).slice(-1)[0]) == null ? undefined : var_core_value_sigD22D.embedId;
    }
  };
function Os(var_core_value_sig0461) {
  return typeof var_core_value_sig0461 == "number" && Number.isFinite(var_core_value_sig0461) && var_core_value_sig0461 >= 0 ? Math.floor(var_core_value_sig0461) : 1;
}
function Q(var_core_value_sig4A6A, var_core_value_sig52B7) {
  return function (var_core_value_sig85D5, var_core_value_sig5D2E) {
    var_core_value_sig52B7(var_core_value_sig85D5, var_core_value_sig5D2E, var_core_value_sig4A6A);
  };
}
function $(var_core_value_sig5BA8, var_core_value_sig6CA3, var_core_value_sig489C, var_core_value_sig9BF2) {
  var var_core_value_sigAD59 = arguments.length,
    var_core_value_sigD8D7 = var_core_value_sigAD59 < 3 ? var_core_value_sig6CA3 : var_core_value_sig9BF2 === null ? var_core_value_sig9BF2 = Object.getOwnPropertyDescriptor(var_core_value_sig6CA3, var_core_value_sig489C) : var_core_value_sig9BF2,
    var_core_value_sigDD66;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sigD8D7 = Reflect.decorate(var_core_value_sig5BA8, var_core_value_sig6CA3, var_core_value_sig489C, var_core_value_sig9BF2);else {
    for (var var_core_value_sigDCB6 = var_core_value_sig5BA8.length - 1; var_core_value_sigDCB6 >= 0; var_core_value_sigDCB6--) (var_core_value_sigDD66 = var_core_value_sig5BA8[var_core_value_sigDCB6]) && (var_core_value_sigD8D7 = (var_core_value_sigAD59 < 3 ? var_core_value_sigDD66(var_core_value_sigD8D7) : var_core_value_sigAD59 > 3 ? var_core_value_sigDD66(var_core_value_sig6CA3, var_core_value_sig489C, var_core_value_sigD8D7) : var_core_value_sigDD66(var_core_value_sig6CA3, var_core_value_sig489C)) || var_core_value_sigD8D7);
  }
  return var_core_value_sigAD59 > 3 && var_core_value_sigD8D7 && Object.defineProperty(var_core_value_sig6CA3, var_core_value_sig489C, var_core_value_sigD8D7), var_core_value_sigD8D7;
}
let ks = class extends var_core_value_sigCBDC {
  constructor(var_core_value_sig7221) {
    super(), this._runtimeScopeService = var_core_value_sig7221, Y(this, "_entries", new Map());
  }
  acquire(var_core_value_sig0A5A) {
    let var_core_value_sigE6D6 = this._entries["get"](var_core_value_sig0A5A.unitId);
    if (!var_core_value_sigE6D6) {
      let var_core_value_sigFE01 = [],
        var_core_value_sigA2CE = {
          unitId: var_core_value_sig0A5A.unitId,
          has: var_core_value_sigE92A => {
            var var_core_value_sig362B;
            return ((var_core_value_sig362B = var_core_value_sigFE01[var_core_value_sigFE01.length - 1]) == null ? undefined : var_core_value_sig362B.has(var_core_value_sigE92A)) ?? false;
          },
          get: var_core_value_sig5CA5 => {
            let var_core_value_sigE90F = var_core_value_sigFE01[var_core_value_sigFE01.length - 1];
            if (!var_core_value_sigE90F) throw Error("EMBED_UI_RUNTIME_SCOPE_NOT_ACTIVE:" + var_core_value_sig0A5A.unitId);
            return var_core_value_sigE90F.get(var_core_value_sig5CA5);
          }
        };
      var_core_value_sigE6D6 = {
        registration: this._runtimeScopeService["register"](var_core_value_sigA2CE),
        scopes: var_core_value_sigFE01
      }, this._entries["set"](var_core_value_sig0A5A.unitId, var_core_value_sigE6D6);
    }
    let var_core_value_sig8507 = var_core_value_sigE6D6;
    return var_core_value_sig8507.scopes["push"](var_core_value_sig0A5A), var_core_value_sig9BBC(() => {
      let var_core_value_sig1975 = var_core_value_sig8507.scopes["lastIndexOf"](var_core_value_sig0A5A);
      var_core_value_sig1975 < 0 || (var_core_value_sig8507.scopes["splice"](var_core_value_sig1975, 1), !(var_core_value_sig8507.scopes["length"] > 0 || this._entries["get"](var_core_value_sig0A5A.unitId) !== var_core_value_sig8507) && (var_core_value_sig8507.registration["dispose"](), this._entries["delete"](var_core_value_sig0A5A.unitId)));
    });
  }
  dispose() {
    this._entries["forEach"](({
      registration: var_core_value_sig6EA1
    }) => var_core_value_sig6EA1.dispose()), this._entries["clear"](), super.dispose();
  }
};
ks = $([Q(0, var_core_value_sig17C9)], ks);
const As = new Set(["identifier:univer.menu-manager-service", "identifier:univer.ribbon-service", "identifier:ui.contextmenu.service", "identifier:ui.popup.service", "identifier:ui.sidebar.service", "identifier:ui.layout-service", "identifier:univer.sheet.selection-render-service"]),
  js = "FOCUSING_BASE",
  Ms = [var_core_value_sigFE95, var_core_value_sig9870, var_core_value_sigC1C9, var_core_value_sigEFD0, var_core_value_sig3AA6, var_core_value_sig4842, js, var_core_value_sig1099, var_core_value_sigB88C, var_core_value_sig2A2C],
  Ns = new Set([var_core_value_sig502A.id, var_core_value_sig300E.id, var_core_value_sig5742.id, var_core_value_sig2785.id, var_core_value_sig972B.id]),
  Ps = new Set(["docs-exchange-client.operation.import-doc", "sheets-exchange-client.operation.import-sheet", "slides-exchange-client.operation.import-slide", "bases-exchange-client.operation.import-base", "boards-exchange-client.operation.insert-mermaid"]);
function Fs(var_core_value_sigA346, var_core_value_sigDB37 = []) {
  let var_core_value_sig2400 = var_core_value_sigA346.injector["get"](var_core_value_sig5DF8),
    var_core_value_sig33E7 = var_core_value_sig2400.getUnit(var_core_value_sigA346.childUnitId, var_core_value_sigA346.childType);
  if (!var_core_value_sig33E7) return;
  let var_core_value_sigCBAB = Rs(var_core_value_sig2400, var_core_value_sigA346, var_core_value_sig33E7, new var_core_value_sig1477(var_core_value_sig33E7), new var_core_value_sig1477(var_core_value_sigA346.renderScope["mode"] === "float" && !var_core_value_sigA346.renderScope["fullscreen"] ? null : var_core_value_sig33E7.getUnitId())),
    var_core_value_sigE3A5 = Qs(var_core_value_sigA346.injector, var_core_value_sigA346.childType),
    var_core_value_sig500F = Xs(var_core_value_sigA346),
    var_core_value_sig2D30 = Bs(var_core_value_sigA346.injector["get"](var_core_value_sigDFF6), var_core_value_sigA346, var_core_value_sig2400, var_core_value_sig500F, var_core_value_sigE3A5),
    var_core_value_sig94E7 = new Map([[var_core_value_sig5DF8, var_core_value_sigCBAB], [var_core_value_sigDFF6, var_core_value_sig2D30]]);
  var_core_value_sigA346.childType === var_core_value_sigC0F3.UNIVER_DOC && var_core_value_sigA346.injector["has"](var_core_value_sig9ED9) && var_core_value_sig94E7.set(var_core_value_sig9ED9, Is(var_core_value_sigA346.injector["get"](var_core_value_sig9ED9), var_core_value_sig2400, var_core_value_sigA346.childUnitId)), var_core_value_sigA346.injector["has"](var_core_value_sig7B6F) && var_core_value_sig94E7.set(var_core_value_sig7B6F, rc(var_core_value_sigA346.injector["get"](var_core_value_sig7B6F)));
  let var_core_value_sig7A7B = [];
  var_core_value_sigA346.injector["has"](Ds) && var_core_value_sig94E7.set(Ds, var_core_value_sigA346.injector["get"](Ds)), var_core_value_sigE3A5 && var_core_value_sig94E7.set(var_core_value_sigB6A0, var_core_value_sigE3A5);
  let var_core_value_sigA2D7 = ac(var_core_value_sigA346.injector, var_core_value_sig94E7);
  var_core_value_sigDB37.forEach(var_core_value_sig8A7F => var_core_value_sigA2D7.add(var_core_value_sig8A7F));
  let var_core_value_sig0A36 = wc(var_core_value_sigA346.injector, var_core_value_sigA2D7);
  if (var_core_value_sig0A36) {
    var_core_value_sigA2D7.add([var_core_value_sigB2B1, {
      useValue: var_core_value_sig0A36
    }]);
    let var_core_value_sig9E81 = new var_core_value_sig0C71(var_core_value_sig0A36, var_core_value_sigCBAB);
    var_core_value_sigA2D7.add([var_core_value_sig4CE4, {
      useValue: var_core_value_sig9E81
    }]), var_core_value_sig7A7B.push(var_core_value_sig9E81);
  }
  if (var_core_value_sigA346.renderScope["fullscreen"]) {
    let var_core_value_sig8295 = Oc(var_core_value_sigA2D7, var_core_value_sigA346.childUnitId),
      var_core_value_sigA975 = new var_core_value_sigA235(),
      var_core_value_sig1263 = new var_core_value_sigEEE6();
    var_core_value_sigA2D7.add([var_core_value_sigAF03, {
      useValue: var_core_value_sig8295
    }]), var_core_value_sigA2D7.add([var_core_value_sig3931, {
      useValue: var_core_value_sigA975
    }]), var_core_value_sigA2D7.add([var_core_value_sig7286, {
      useValue: var_core_value_sig1263
    }]), var_core_value_sig7A7B.push(var_core_value_sig8295, var_core_value_sigA975, var_core_value_sig1263);
  } else {
    let var_core_value_sig457C = Dc(var_core_value_sigA346.injector, var_core_value_sigA2D7, var_core_value_sigA346.childUnitId);
    var_core_value_sig457C && var_core_value_sigA2D7.add([var_core_value_sigAF03, {
      useValue: var_core_value_sig457C
    }]);
  }
  let var_core_value_sig87E7 = kc(var_core_value_sigA346.injector, var_core_value_sigA346);
  var_core_value_sigA2D7.add([var_core_value_sigBEFB, {
    useValue: var_core_value_sig87E7
  }]);
  let var_core_value_sig5276 = {
    unitId: var_core_value_sigA346.childUnitId,
    has: var_core_value_sigA4E6 => var_core_value_sigA2D7.has(var_core_value_sigA4E6),
    get: var_core_value_sig934F => var_core_value_sigA2D7.get(var_core_value_sig934F)
  };
  if (var_core_value_sigA346.injector["has"](ks) ? var_core_value_sig7A7B.push(var_core_value_sigA346.injector["get"](ks).acquire(var_core_value_sig5276)) : var_core_value_sigA346.injector["has"](var_core_value_sig17C9) && var_core_value_sig7A7B.push(var_core_value_sigA346.injector["get"](var_core_value_sig17C9).register(var_core_value_sig5276)), var_core_value_sig7A7B.length) {
    let var_core_value_sig74A7 = var_core_value_sigA2D7.dispose["bind"](var_core_value_sigA2D7),
      var_core_value_sig3685 = false;
    var_core_value_sigA2D7.dispose = () => {
      var_core_value_sig3685 || (var_core_value_sig3685 = true, var_core_value_sig7A7B.forEach(var_core_value_sigEFD4 => var_core_value_sigEFD4.dispose()), var_core_value_sig74A7());
    };
  }
  return var_core_value_sigA2D7;
}
function Is(var_core_value_sig0B66, var_core_value_sig8E9E, var_core_value_sig9A69) {
  let var_core_value_sig2A04 = async var_core_value_sigC621 => {
    let var_core_value_sig86D7 = var_core_value_sig8E9E.getCurrentUnitOfType(var_core_value_sigC0F3.UNIVER_DOC);
    var_core_value_sig8E9E.setCurrentUnitForType(var_core_value_sig9A69);
    try {
      return await var_core_value_sigC621();
    } finally {
      Hs(var_core_value_sig8E9E, var_core_value_sig86D7);
    }
  };
  return {
    addClipboardHook: var_core_value_sig0B66.addClipboardHook["bind"](var_core_value_sig0B66),
    copy: (...var_core_value_sig431B) => var_core_value_sig2A04(() => var_core_value_sig0B66.copy(...var_core_value_sig431B)),
    cut: (...var_core_value_sig5C7C) => var_core_value_sig2A04(() => var_core_value_sig0B66.cut(...var_core_value_sig5C7C)),
    legacyPaste: (...var_core_value_sig87E2) => var_core_value_sig2A04(() => var_core_value_sig0B66.legacyPaste(...var_core_value_sig87E2)),
    paste: (...var_core_value_sig2E04) => var_core_value_sig2A04(() => var_core_value_sig0B66.paste(...var_core_value_sig2E04))
  };
}
function Ls(var_core_value_sigA30D, var_core_value_sig4F28) {
  if (!var_core_value_sigA30D.has(var_core_value_sig7B6F)) return;
  let var_core_value_sigE7DA = var_core_value_sigA30D.get(var_core_value_sig7B6F);
  return ac(var_core_value_sigA30D, new Map([[var_core_value_sig7B6F, nc(var_core_value_sigE7DA, var_core_value_sig4F28)]]));
}
function Rs(var_core_value_sig56D1, var_core_value_sig2EDE, var_core_value_sig70CD, var_core_value_sig60A5, var_core_value_sig89B2) {
  return {
    unitAdded$: var_core_value_sig56D1.unitAdded$,
    getTypeOfUnitAdded$: (...var_core_value_sig2EDD1) => var_core_value_sig56D1.getTypeOfUnitAdded$(...var_core_value_sig2EDD1),
    __addUnit: (...var_core_value_sig27D2) => var_core_value_sig56D1.__addUnit(...var_core_value_sig27D2),
    unitDisposed$: var_core_value_sig56D1.unitDisposed$,
    getTypeOfUnitDisposed$: (...var_core_value_sig355D) => var_core_value_sig56D1.getTypeOfUnitDisposed$(...var_core_value_sig355D),
    focused$: var_core_value_sig89B2.asObservable(),
    focusUnit: var_core_value_sig8B21 => {
      if (var_core_value_sig8B21 === null || zs(var_core_value_sig2EDE, var_core_value_sig8B21)) {
        var_core_value_sig89B2.getValue() !== var_core_value_sig8B21 && var_core_value_sig89B2.next(var_core_value_sig8B21);
        return;
      }
      var_core_value_sig56D1.focusUnit(var_core_value_sig8B21);
    },
    getFocusedUnit: () => {
      let var_core_value_sigEB36 = var_core_value_sig89B2.getValue();
      return var_core_value_sigEB36 === null ? null : var_core_value_sigEB36 === var_core_value_sig2EDE.childUnitId ? var_core_value_sig70CD : var_core_value_sigEA45(var_core_value_sigEB36) ? var_core_value_sig56D1.getUnit(var_core_value_sigEB36) ?? var_core_value_sig70CD : var_core_value_sig56D1.getFocusedUnit();
    },
    getCurrentUnitOfType: var_core_value_sig5C27 => var_core_value_sig5C27 === var_core_value_sig2EDE.childType ? var_core_value_sig60A5.getValue() : var_core_value_sig56D1.getCurrentUnitOfType(var_core_value_sig5C27),
    setCurrentUnitForType: var_core_value_sigD494 => {
      if (zs(var_core_value_sig2EDE, var_core_value_sigD494)) {
        var_core_value_sig60A5.getValue() !== var_core_value_sig70CD && var_core_value_sig60A5.next(var_core_value_sig70CD);
        return;
      }
      var_core_value_sig56D1.setCurrentUnitForType(var_core_value_sigD494);
    },
    getCurrentTypeOfUnit$: var_core_value_sigBF6D => var_core_value_sigBF6D === var_core_value_sig2EDE.childType ? var_core_value_sig60A5.asObservable() : var_core_value_sig56D1.getCurrentTypeOfUnit$(var_core_value_sigBF6D),
    createUnit: (...var_core_value_sigD051) => var_core_value_sig56D1.createUnit(...var_core_value_sigD051),
    getUnitCreateOptions: (...var_core_value_sig16D9) => var_core_value_sig56D1.getUnitCreateOptions(...var_core_value_sig16D9),
    disposeUnit: (...var_core_value_sigF378) => var_core_value_sig56D1.disposeUnit(...var_core_value_sigF378),
    registerCtorForType: (...var_core_value_sig5F6C) => var_core_value_sig56D1.registerCtorForType(...var_core_value_sig5F6C),
    getUnit: (...var_core_value_sig7E85) => var_core_value_sig56D1.getUnit(...var_core_value_sig7E85),
    getAllUnitsForType: (...var_core_value_sigF204) => var_core_value_sig56D1.getAllUnitsForType(...var_core_value_sigF204),
    getUnitType: (...var_core_value_sig7A15) => var_core_value_sig56D1.getUnitType(...var_core_value_sig7A15),
    dispose: () => {}
  };
}
function zs(var_core_value_sigE594, var_core_value_sig63D7) {
  return var_core_value_sig63D7 === var_core_value_sigE594.childUnitId || var_core_value_sigEA45(var_core_value_sig63D7);
}
function Bs(var_core_value_sig2E44, var_core_value_sig6814, var_core_value_sig0A10, var_core_value_sig9E19, var_core_value_sigC832) {
  let var_core_value_sig9DD2 = var_core_value_sig6814.injector["has"](var_core_value_sigB6A0) ? var_core_value_sig6814.injector["get"](var_core_value_sigB6A0) : undefined;
  return {
    disposed: () => var_core_value_sig2E44.disposed(),
    hasCommand: var_core_value_sigEEA6 => var_core_value_sig2E44.hasCommand(var_core_value_sigEEA6),
    registerCommand: var_core_value_sigEAE1 => var_core_value_sig2E44.registerCommand(var_core_value_sigEAE1),
    unregisterCommand: var_core_value_sigC69F => var_core_value_sig2E44.unregisterCommand(var_core_value_sigC69F),
    registerMultipleCommand: var_core_value_sig0442 => var_core_value_sig2E44.registerMultipleCommand(var_core_value_sig0442),
    executeCommand: async (var_core_value_sig697A, var_core_value_sigDB65, var_core_value_sig045E) => {
      var var_core_value_sig4524;
      let var_core_value_sig64D5 = () => Vs(var_core_value_sig697A, var_core_value_sig9DD2, var_core_value_sigC832, () => var_core_value_sig2E44.executeCommand(var_core_value_sig697A, ic(var_core_value_sig6814, var_core_value_sig697A, var_core_value_sigDB65), Us(var_core_value_sig6814.childType, var_core_value_sig6814.childUnitId, var_core_value_sig045E))),
        var_core_value_sig9678 = Js(var_core_value_sig6814) && !Ws(var_core_value_sig697A) && (!var_core_value_sig6814.renderScope["fullscreen"] || !Ys(var_core_value_sig697A)),
        var_core_value_sig5E74 = var_core_value_sig9E19 || Ws(var_core_value_sig697A) || Ys(var_core_value_sig697A) || var_core_value_sig9678,
        var_core_value_sig75FC = var_core_value_sig5E74 ? Gs() : null;
      if (!var_core_value_sig5E74) return await var_core_value_sig64D5();
      let var_core_value_sig639A = var_core_value_sig0A10.getCurrentUnitOfType(var_core_value_sig6814.childType),
        var_core_value_sig567C = ((var_core_value_sig4524 = var_core_value_sig0A10.getFocusedUnit()) == null ? undefined : var_core_value_sig4524.getUnitId()) ?? null;
      try {
        var_core_value_sig0A10.setCurrentUnitForType(var_core_value_sig6814.childUnitId), var_core_value_sig9678 || var_core_value_sig0A10.focusUnit(var_core_value_sig6814.childUnitId);
        let var_core_value_sig029F = var_core_value_sig64D5();
        return var_core_value_sig9678 && Ns.has(var_core_value_sig697A) && Ks(var_core_value_sig6814, var_core_value_sig75FC) && qs(var_core_value_sig6814, var_core_value_sig75FC), await var_core_value_sig029F;
      } finally {
        Hs(var_core_value_sig0A10, var_core_value_sig639A), var_core_value_sig9678 || oc(var_core_value_sig6814, var_core_value_sig0A10, var_core_value_sig567C, var_core_value_sig9E19), (!var_core_value_sig9678 || Ws(var_core_value_sig697A) || Ys(var_core_value_sig697A)) && Ks(var_core_value_sig6814, var_core_value_sig75FC) && qs(var_core_value_sig6814, var_core_value_sig75FC);
      }
    },
    syncExecuteCommand: (var_core_value_sig825F, var_core_value_sig546D, var_core_value_sig8078) => {
      var var_core_value_sigDCED;
      let var_core_value_sig2829 = () => Vs(var_core_value_sig825F, var_core_value_sig9DD2, var_core_value_sigC832, () => var_core_value_sig2E44.syncExecuteCommand(var_core_value_sig825F, ic(var_core_value_sig6814, var_core_value_sig825F, var_core_value_sig546D), Us(var_core_value_sig6814.childType, var_core_value_sig6814.childUnitId, var_core_value_sig8078))),
        var_core_value_sig6EE2 = Js(var_core_value_sig6814) && !Ws(var_core_value_sig825F) && (!var_core_value_sig6814.renderScope["fullscreen"] || !Ys(var_core_value_sig825F)),
        var_core_value_sig4CCC = var_core_value_sig9E19 || Ws(var_core_value_sig825F) || Ys(var_core_value_sig825F) || var_core_value_sig6EE2,
        var_core_value_sig6E47 = var_core_value_sig4CCC ? Gs() : null;
      if (!var_core_value_sig4CCC) return var_core_value_sig2829();
      let var_core_value_sigB64D = var_core_value_sig0A10.getCurrentUnitOfType(var_core_value_sig6814.childType),
        var_core_value_sig2407 = ((var_core_value_sigDCED = var_core_value_sig0A10.getFocusedUnit()) == null ? undefined : var_core_value_sigDCED.getUnitId()) ?? null;
      try {
        var_core_value_sig0A10.setCurrentUnitForType(var_core_value_sig6814.childUnitId), var_core_value_sig6EE2 || var_core_value_sig0A10.focusUnit(var_core_value_sig6814.childUnitId);
        let var_core_value_sig3767 = var_core_value_sig2829();
        return var_core_value_sig6EE2 && Ns.has(var_core_value_sig825F) && Ks(var_core_value_sig6814, var_core_value_sig6E47) && qs(var_core_value_sig6814, var_core_value_sig6E47), var_core_value_sig3767;
      } finally {
        Hs(var_core_value_sig0A10, var_core_value_sigB64D), var_core_value_sig6EE2 || oc(var_core_value_sig6814, var_core_value_sig0A10, var_core_value_sig2407, var_core_value_sig9E19), (!var_core_value_sig6EE2 || Ws(var_core_value_sig825F) || Ys(var_core_value_sig825F)) && Ks(var_core_value_sig6814, var_core_value_sig6E47) && qs(var_core_value_sig6814, var_core_value_sig6E47);
      }
    },
    onCommandExecuted: var_core_value_sigE4D0 => var_core_value_sig2E44.onCommandExecuted(var_core_value_sigE4D0),
    beforeCommandExecuted: var_core_value_sigD5F1 => var_core_value_sig2E44.beforeCommandExecuted(var_core_value_sigD5F1),
    onMutationExecutedForCollab: var_core_value_sigBC19 => var_core_value_sig2E44.onMutationExecutedForCollab(var_core_value_sigBC19)
  };
}
function Vs(var_core_value_sigDB97, var_core_value_sigD1A5, var_core_value_sigA91A, var_core_value_sig2DE0) {
  if (!Ns.has(var_core_value_sigDB97) || !var_core_value_sigD1A5 || !var_core_value_sigA91A || typeof var_core_value_sigD1A5.setContextValue != "function" || var_core_value_sigD1A5 === var_core_value_sigA91A) return var_core_value_sig2DE0();
  let var_core_value_sig0513 = [];
  for (let var_core_value_sig4F3C of Ms) {
    let var_core_value_sig670B = var_core_value_sigD1A5.getContextValue(var_core_value_sig4F3C),
      var_core_value_sig6912 = var_core_value_sigA91A.getContextValue(var_core_value_sig4F3C);
    var_core_value_sig670B !== var_core_value_sig6912 && (var_core_value_sig0513.push({
      key: var_core_value_sig4F3C,
      value: var_core_value_sig670B
    }), var_core_value_sigD1A5.setContextValue(var_core_value_sig4F3C, var_core_value_sig6912));
  }
  try {
    return var_core_value_sig2DE0();
  } finally {
    for (let var_core_value_sigE235 = var_core_value_sig0513.length - 1; var_core_value_sigE235 >= 0; var_core_value_sigE235--) {
      let {
        key: var_core_value_sig861B,
        value: var_core_value_sig5237
      } = var_core_value_sig0513[var_core_value_sigE235];
      var_core_value_sigD1A5.setContextValue(var_core_value_sig861B, var_core_value_sig5237);
    }
  }
}
function Hs(var_core_value_sig35D1, var_core_value_sig5CE7) {
  if (!var_core_value_sig5CE7) return;
  let var_core_value_sig3662 = var_core_value_sig5CE7.getUnitId();
  var_core_value_sig35D1.getUnit(var_core_value_sig3662) && var_core_value_sig35D1.setCurrentUnitForType(var_core_value_sig3662);
}
function Us(var_core_value_sigABC5, var_core_value_sig033B, var_core_value_sig2BCC) {
  return var_core_value_sigABC5 === var_core_value_sigC0F3.UNIVER_BOARD ? {
    ...var_core_value_sig2BCC,
    unitId: var_core_value_sig033B
  } : var_core_value_sig2BCC;
}
function Ws(var_core_value_sigC260) {
  return var_core_value_sigC260 === var_core_value_sig2785.id || var_core_value_sigC260 === var_core_value_sig972B.id;
}
function Gs() {
  return typeof document < "u" && document.activeElement instanceof HTMLElement ? document.activeElement : null;
}
function Ks(var_core_value_sig15611, var_core_value_sigAAA8) {
  if (!var_core_value_sigAAA8 || var_core_value_sig15611.childType === var_core_value_sigC0F3.UNIVER_SHEET) return var_core_value_sigAAA8 != null;
  let var_core_value_sigA0B9 = var_core_value_sigAAA8;
  for (; var_core_value_sigA0B9;) {
    if (var_core_value_sigA744.some(var_core_value_sigBB00 => (var_core_value_sigA0B9 == null ? undefined : var_core_value_sigA0B9.id) === "__editor_" + var_core_value_sigBB00 || (var_core_value_sigA0B9 == null ? undefined : var_core_value_sigA0B9.id) === "univer-doc-selection-container-" + var_core_value_sigBB00)) return false;
    var_core_value_sigA0B9 = var_core_value_sigA0B9.parentElement;
  }
  return true;
}
function qs(var_core_value_sigB40F, var_core_value_sig86F1) {
  var var_core_value_sig078D;
  let var_core_value_sig60D5 = () => {
    let var_core_value_sig8D44 = var_core_value_sigB40F.renderScope["contentRoot"] ?? var_core_value_sigB40F.renderScope["rootElement"],
      var_core_value_sig1660 = var_core_value_sig86F1 != null && var_core_value_sig86F1.isConnected ? var_core_value_sig86F1 : var_core_value_sig8D44.querySelector("canvas") ?? var_core_value_sig8D44;
    !var_core_value_sig1660.isConnected || var_core_value_sig1660.ownerDocument["activeElement"] === var_core_value_sig1660 || (var_core_value_sig1660.hasAttribute("tabindex") || (var_core_value_sig1660.tabIndex = -1), var_core_value_sig1660.focus({
      preventScroll: true
    }));
  };
  var_core_value_sig60D5(), (var_core_value_sig078D = var_core_value_sigB40F.renderScope["rootElement"].ownerDocument["defaultView"]) == null || var_core_value_sig078D.requestAnimationFrame(var_core_value_sig60D5);
}
function Js(var_core_value_sigD888) {
  if (var_core_value_sigD888.childType === var_core_value_sigC0F3.UNIVER_BOARD || var_core_value_sigD888.renderScope["mode"] !== "float" || !var_core_value_sigD888.injector["has"](X)) return false;
  let var_core_value_sig5337 = var_core_value_sigD888.injector["get"](X).resolveActiveChildSessionRuntimeScope();
  return ((var_core_value_sig5337 == null ? undefined : var_core_value_sig5337.sessionMode) === "child-keyboard" || (var_core_value_sig5337 == null ? undefined : var_core_value_sig5337.sessionMode) === "child-fullscreen") && var_core_value_sig5337.embedId === var_core_value_sigD888.embedId && var_core_value_sig5337.hostUnitId === var_core_value_sigD888.hostUnitId && var_core_value_sig5337.childUnitId === var_core_value_sigD888.childUnitId && var_core_value_sig5337.childType === var_core_value_sigD888.childType;
}
function Ys(var_core_value_sig2381) {
  return var_core_value_sig2381 === var_core_value_sig8DC9.id;
}
function Xs(var_core_value_sig573D) {
  return var_core_value_sig573D.renderScope["fullscreen"] || var_core_value_sig573D.descriptor["entry"] === "docs-custom-block" ? true : Zs(var_core_value_sig573D);
}
function Zs(var_core_value_sigC09F) {
  var var_core_value_sig205A;
  return var_core_value_sigC09F.descriptor["entry"] === "sheets-sheet-tab" || var_core_value_sigC09F.descriptor["entry"] === "bases-table-list-block" || var_core_value_sigC09F.descriptor["entry"] === "slides-page-list-block" || var_core_value_sigC09F.layout === "tab-peer" || !!((var_core_value_sig205A = var_core_value_sigC09F.descriptor["sourceMeta"]) != null && var_core_value_sig205A.tab);
}
function Qs(var_core_value_sig16E2, var_core_value_sig8904) {
  if (!var_core_value_sig16E2.has(var_core_value_sigB6A0)) return;
  let var_core_value_sigBA69 = var_core_value_sig16E2.get(var_core_value_sigB6A0),
    var_core_value_sig4AC2 = $s(var_core_value_sig8904),
    var_core_value_sig08B2 = new var_core_value_sigF7F1();
  return {
    contextChanged$: var_core_value_sigE85F((var_core_value_sigBA69.contextChanged$ ?? var_core_value_sigB73A).pipe(var_core_value_sig5B63(var_core_value_sigEE7B => Object.fromEntries(Object.entries(var_core_value_sigEE7B).filter(([var_core_value_sig7664]) => !tc(var_core_value_sig7664)))), var_core_value_sig6713(var_core_value_sig44DF => Object.keys(var_core_value_sig44DF).length > 0)), var_core_value_sig08B2),
    getContextValue: var_core_value_sig7E48 => tc(var_core_value_sig7E48) ? ec(var_core_value_sig4AC2, var_core_value_sig7E48) : var_core_value_sigBA69.getContextValue(var_core_value_sig7E48),
    setContextValue: (var_core_value_sig7B9E, var_core_value_sig5C3B) => {
      if (!tc(var_core_value_sig7B9E)) {
        var_core_value_sigBA69.setContextValue(var_core_value_sig7B9E, var_core_value_sig5C3B);
        return;
      }
      var_core_value_sig4AC2.set(var_core_value_sig7B9E, var_core_value_sig5C3B), var_core_value_sig08B2.next({
        [var_core_value_sig7B9E]: var_core_value_sig5C3B
      });
    },
    subscribeContextValue$: var_core_value_sig4002 => tc(var_core_value_sig4002) ? new var_core_value_sig6238(var_core_value_sig2281 => {
      let var_core_value_sig5E86 = var_core_value_sig08B2.pipe(var_core_value_sig6713(var_core_value_sig7E54 => var_core_value_sig7E54[var_core_value_sig4002] !== undefined)).subscribe(var_core_value_sig9A8D => var_core_value_sig2281.next(var_core_value_sig9A8D[var_core_value_sig4002]));
      return var_core_value_sig2281.next(ec(var_core_value_sig4AC2, var_core_value_sig4002)), () => var_core_value_sig5E86.unsubscribe();
    }) : var_core_value_sigBA69.subscribeContextValue$(var_core_value_sig4002)
  };
}
function $s(var_core_value_sigDE7F) {
  return new Map([[var_core_value_sigFE95, true], [var_core_value_sig9870, var_core_value_sigDE7F === var_core_value_sigC0F3.UNIVER_SHEET || var_core_value_sigDE7F === var_core_value_sigC0F3.UNIVER_DOC || var_core_value_sigDE7F === var_core_value_sigC0F3.UNIVER_SLIDE], [var_core_value_sigC1C9, var_core_value_sigDE7F === var_core_value_sigC0F3.UNIVER_SHEET], [var_core_value_sigEFD0, var_core_value_sigDE7F === var_core_value_sigC0F3.UNIVER_DOC], [var_core_value_sig3AA6, var_core_value_sigDE7F === var_core_value_sigC0F3.UNIVER_SLIDE], [var_core_value_sig4842, var_core_value_sigDE7F === var_core_value_sigC0F3.UNIVER_BOARD], [js, var_core_value_sigDE7F === var_core_value_sigC0F3.UNIVER_BASE]]);
}
function ec(var_core_value_sigD898, var_core_value_sig0386) {
  return var_core_value_sigD898.get(var_core_value_sig0386) ?? false;
}
function tc(var_core_value_sig577B) {
  return var_core_value_sig577B.startsWith("FOCUSING_") || var_core_value_sig577B === var_core_value_sig1099 || var_core_value_sig577B === var_core_value_sigB88C;
}
function nc(var_core_value_sigF342, var_core_value_sig7871) {
  return {
    getConfig: var_core_value_sig4153 => {
      let var_core_value_sig2825 = var_core_value_sigF342.getConfig(var_core_value_sig4153),
        var_core_value_sig5FD0 = var_core_value_sig7871.get(var_core_value_sig4153);
      return var_core_value_sig5FD0 ? var_core_value_sig5FD0(var_core_value_sig2825) : var_core_value_sig2825;
    },
    setConfig: var_core_value_sigF342.setConfig["bind"](var_core_value_sigF342),
    deleteConfig: var_core_value_sigF342.deleteConfig["bind"](var_core_value_sigF342),
    subscribeConfigValue$: var_core_value_sigF342.subscribeConfigValue$["bind"](var_core_value_sigF342),
    configChanged$: var_core_value_sigF342.configChanged$,
    dispose: () => {}
  };
}
function rc(var_core_value_sig7CBA) {
  return nc(var_core_value_sig7CBA, new Map([["menu", var_core_value_sigA7E3 => {
    let var_core_value_sigA784 = {
      ...(var_core_value_sigA7E3 ?? {})
    };
    return Ps.forEach(var_core_value_sig6998 => {
      var_core_value_sigA784[var_core_value_sig6998] = {
        ...var_core_value_sigA784[var_core_value_sig6998],
        hidden: true
      };
    }), var_core_value_sigA784;
  }]]));
}
function ic(var_core_value_sigC924, var_core_value_sig718D, var_core_value_sigCC47) {
  if (var_core_value_sig718D !== var_core_value_sig262A.id || !var_core_value_sigCC47 || typeof var_core_value_sigCC47 != "object") return var_core_value_sigCC47;
  let var_core_value_sig12EE = var_core_value_sigCC47;
  return var_core_value_sig12EE.parentEmbedId ? var_core_value_sig12EE : {
    ...var_core_value_sig12EE,
    parentEmbedId: var_core_value_sigC924.embedId
  };
}
function ac(var_core_value_sigEB89, var_core_value_sig405C, var_core_value_sig820E = var_core_value_sigEB89) {
  let var_core_value_sigA753 = _c(var_core_value_sigEB89) ?? var_core_value_sig820E,
    var_core_value_sigEF41 = new Map(var_core_value_sig405C),
    var_core_value_sig9793 = new Map(),
    var_core_value_sigDB87 = new Set(),
    var_core_value_sig2858 = new Map(),
    var_core_value_sig2683;
  var_core_value_sigEF41.forEach((var_core_value_sig4406, var_core_value_sig6806) => {
    fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig6175(var_core_value_sig6806);
  });
  function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig6175(var_core_value_sigD4AA) {
    let var_core_value_sigDC41 = cc(var_core_value_sigD4AA);
    return var_core_value_sigDB87.add(var_core_value_sigDC41), var_core_value_sig2858.has(var_core_value_sigDC41) || var_core_value_sig2858.set(var_core_value_sigDC41, var_core_value_sigD4AA), var_core_value_sigDC41;
  }
  let var_core_value_sig1699 = var_core_value_sigFB47 => var_core_value_sigEF41.has(var_core_value_sigFB47) || var_core_value_sig9793.has(var_core_value_sigFB47) ? var_core_value_sigFB47 : var_core_value_sig2858.get(cc(var_core_value_sigFB47)) ?? var_core_value_sigFB47,
    var_core_value_sig42E9 = var_core_value_sig9B3D1 => {
      let var_core_value_sigC1CF = var_core_value_sig1699(var_core_value_sig9B3D1);
      if (var_core_value_sigEF41.has(var_core_value_sigC1CF)) return var_core_value_sigEF41.get(var_core_value_sigC1CF);
      let var_core_value_sigEE12 = var_core_value_sig9793.get(var_core_value_sigC1CF);
      if (!var_core_value_sigEE12) return;
      let var_core_value_sigD70C1 = var_core_value_sigEE12();
      return var_core_value_sig9793.delete(var_core_value_sigC1CF), var_core_value_sigEF41.set(var_core_value_sigC1CF, var_core_value_sigD70C1), mc(var_core_value_sig2683, var_core_value_sigC1CF, var_core_value_sigD70C1), var_core_value_sigC1CF !== var_core_value_sig9B3D1 && mc(var_core_value_sig2683, var_core_value_sig9B3D1, var_core_value_sigD70C1), var_core_value_sigD70C1;
    },
    var_core_value_sig0B64 = var_core_value_sigF047 => {
      let var_core_value_sigC2F9 = var_core_value_sig1699(var_core_value_sigF047);
      return var_core_value_sigEF41.has(var_core_value_sigC2F9) || var_core_value_sig9793.has(var_core_value_sigC2F9);
    },
    var_core_value_sig3BFC = var_core_value_sig1F51 => var_core_value_sigDB87.has(cc(var_core_value_sig1F51)),
    var_core_value_sig9CF5 = var_core_value_sig29F5 => As.has(cc(var_core_value_sig29F5)),
    var_core_value_sig5BFB = var_core_value_sig5A51 => !var_core_value_sig3BFC(var_core_value_sig5A51) && var_core_value_sigEB89.has(var_core_value_sig5A51),
    var_core_value_sig47A3 = () => {
      if (var_core_value_sig2683) return var_core_value_sig2683;
      let var_core_value_sigF1D1 = var_core_value_sigEB89.createChild;
      if (typeof var_core_value_sigF1D1 == "function") return var_core_value_sig2683 = var_core_value_sigF1D1.call(var_core_value_sigEB89, [...Sc(var_core_value_sigEF41), [var_core_value_sig8A66, {
        useFactory: () => var_core_value_sig2683
      }]]), var_core_value_sig2683;
    },
    var_core_value_sig7CA8 = {
      has: var_core_value_sig370E => {
        if (var_core_value_sig370E === var_core_value_sig8A66 || var_core_value_sig0B64(var_core_value_sig370E) || var_core_value_sig5BFB(var_core_value_sig370E)) return true;
        let var_core_value_sigDE14 = var_core_value_sig47A3();
        return (var_core_value_sigDE14 == null ? undefined : var_core_value_sigDE14.has(var_core_value_sig370E)) ?? var_core_value_sigEB89.has(var_core_value_sig370E);
      },
      get: (var_core_value_sig02CB, ...var_core_value_sig6CBB) => {
        if (var_core_value_sig02CB === var_core_value_sig8A66) return var_core_value_sig7CA8;
        if (lc(var_core_value_sig6CBB, var_core_value_sig135C.SELF)) {
          let var_core_value_sigF639 = var_core_value_sig47A3();
          ox1fd606(var_core_value_sigF639, var_core_value_sig02CB);
          let var_core_value_sigEAE5 = fc(var_core_value_sigF639, var_core_value_sig02CB);
          return var_core_value_sigEAE5.resolved ? var_core_value_sigEAE5.value : dc(var_core_value_sigF639 || var_core_value_sigEB89, var_core_value_sig02CB, var_core_value_sig6CBB);
        }
        return var_core_value_sig0B64(var_core_value_sig02CB) ? var_core_value_sig42E9(var_core_value_sig02CB) : lc(var_core_value_sig6CBB, var_core_value_sig135C.SKIP_SELF) ? dc(var_core_value_sigEB89, var_core_value_sig02CB, uc(var_core_value_sig6CBB, var_core_value_sig135C.SKIP_SELF)) : var_core_value_sig5BFB(var_core_value_sig02CB) ? dc(var_core_value_sigEB89, var_core_value_sig02CB, var_core_value_sig6CBB) : dc(var_core_value_sig47A3() || var_core_value_sigEB89, var_core_value_sig02CB, var_core_value_sig6CBB);
      },
      invoke: (var_core_value_sig68DA, ...var_core_value_sig64D8) => var_core_value_sig68DA({
        has: var_core_value_sigE94C => {
          if (var_core_value_sigE94C === var_core_value_sig8A66 || var_core_value_sig0B64(var_core_value_sigE94C) || var_core_value_sig5BFB(var_core_value_sigE94C)) return true;
          let var_core_value_sig6D47 = var_core_value_sig47A3();
          return (var_core_value_sig6D47 == null ? undefined : var_core_value_sig6D47.has(var_core_value_sigE94C)) ?? var_core_value_sigEB89.has(var_core_value_sigE94C);
        },
        get: (var_core_value_sigCB82, ...var_core_value_sigCF4E) => {
          if (var_core_value_sigCB82 === var_core_value_sig8A66) return var_core_value_sig7CA8;
          if (lc(var_core_value_sigCF4E, var_core_value_sig135C.SELF)) {
            let var_core_value_sigC259 = var_core_value_sig47A3();
            ox1fd606(var_core_value_sigC259, var_core_value_sigCB82);
            let var_core_value_sig9C9F = fc(var_core_value_sigC259, var_core_value_sigCB82);
            return var_core_value_sig9C9F.resolved ? var_core_value_sig9C9F.value : dc(var_core_value_sigC259 || var_core_value_sigEB89, var_core_value_sigCB82, var_core_value_sigCF4E);
          }
          return var_core_value_sig0B64(var_core_value_sigCB82) ? var_core_value_sig42E9(var_core_value_sigCB82) : lc(var_core_value_sigCF4E, var_core_value_sig135C.SKIP_SELF) ? dc(var_core_value_sigEB89, var_core_value_sigCB82, uc(var_core_value_sigCF4E, var_core_value_sig135C.SKIP_SELF)) : var_core_value_sig5BFB(var_core_value_sigCB82) ? dc(var_core_value_sigEB89, var_core_value_sigCB82, var_core_value_sigCF4E) : dc(var_core_value_sig47A3() || var_core_value_sigEB89, var_core_value_sigCB82, var_core_value_sigCF4E);
        }
      }, ...var_core_value_sig64D8),
      add: var_core_value_sigD755 => {
        let var_core_value_sigF897 = Cc(var_core_value_sigD755);
        if (var_core_value_sigF897) {
          if (var_core_value_sigF897.kind !== "factory" && var_core_value_sig5BFB(var_core_value_sigF897.identifier) && !var_core_value_sig9CF5(var_core_value_sigF897.identifier)) return;
          let var_core_value_sig6CAD = cc(var_core_value_sigF897.identifier);
          if (var_core_value_sigDB87.has(var_core_value_sig6CAD)) return;
          if (fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig6175(var_core_value_sigF897.identifier), var_core_value_sigF897.kind === "value") var_core_value_sig9793.delete(var_core_value_sigF897.identifier), var_core_value_sigEF41.set(var_core_value_sigF897.identifier, var_core_value_sigF897.value);else {
            let var_core_value_sigFDEA = var_core_value_sig47A3();
            var_core_value_sigFDEA ? gc(var_core_value_sigFDEA, var_core_value_sigF897.identifier) || var_core_value_sigFDEA.add(var_core_value_sigD755) : (var_core_value_sigEF41.delete(var_core_value_sigF897.identifier), var_core_value_sig9793.set(var_core_value_sigF897.identifier, var_core_value_sigF897.factory));
          }
          return;
        }
        let var_core_value_sigA578 = cc(sc(var_core_value_sigD755));
        if (var_core_value_sigA578 != null) {
          if (var_core_value_sigDB87.has(var_core_value_sigA578)) return;
          fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig6175(sc(var_core_value_sigD755));
        }
        let var_core_value_sig0260 = var_core_value_sig47A3();
        if (var_core_value_sig0260) {
          var_core_value_sig0260.add(var_core_value_sigD755);
          return;
        }
        var_core_value_sigEB89.add(var_core_value_sigD755);
      },
      createChild: (var_core_value_sig034D = []) => {
        let var_core_value_sig89EC = new Map(var_core_value_sigEF41);
        var_core_value_sig2858.forEach(var_core_value_sig8CF5 => {
          if (var_core_value_sig89EC.has(var_core_value_sig8CF5)) return;
          if (var_core_value_sig0B64(var_core_value_sig8CF5)) {
            var_core_value_sig89EC.set(var_core_value_sig8CF5, var_core_value_sig42E9(var_core_value_sig8CF5));
            return;
          }
          let var_core_value_sigDDD7 = var_core_value_sig47A3();
          var_core_value_sigDDD7 && gc(var_core_value_sigDDD7, var_core_value_sig8CF5) && var_core_value_sig89EC.set(var_core_value_sig8CF5, dc(var_core_value_sigDDD7, var_core_value_sig8CF5, [var_core_value_sig135C.SELF]));
        });
        let var_core_value_sig9975 = [];
        var_core_value_sig034D.forEach(var_core_value_sigB2CE => {
          let var_core_value_sig443C = Cc(var_core_value_sigB2CE);
          if ((var_core_value_sig443C == null ? undefined : var_core_value_sig443C.kind) === "value") {
            var_core_value_sig89EC.set(var_core_value_sig443C.identifier, var_core_value_sig443C.value);
            return;
          }
          var_core_value_sig9975.push(var_core_value_sigB2CE);
        });
        let var_core_value_sigD6D9 = ac(var_core_value_sigEB89, var_core_value_sig89EC, var_core_value_sigA753);
        return var_core_value_sig9975.forEach(var_core_value_sig39B1 => {
          var_core_value_sigD6D9.add(var_core_value_sig39B1);
        }), var_core_value_sigD6D9;
      },
      createInstance: (...var_core_value_sig2637) => {
        let var_core_value_sigAF1D = var_core_value_sig47A3(),
          var_core_value_sigC92D = var_core_value_sigAF1D == null ? undefined : var_core_value_sigAF1D.createInstance;
        if (var_core_value_sigAF1D && typeof var_core_value_sigC92D == "function") return ox438c99(var_core_value_sigAF1D, var_core_value_sig2637[0]), var_core_value_sigC92D.apply(var_core_value_sigAF1D, var_core_value_sig2637);
        let var_core_value_sigEA3D = var_core_value_sigEB89.createInstance;
        if (typeof var_core_value_sigEA3D == "function") return var_core_value_sigEA3D.apply(var_core_value_sigEB89, var_core_value_sig2637);
        let [var_core_value_sig2841, ...var_core_value_sig9FE1] = var_core_value_sig2637;
        return new var_core_value_sig2841(...var_core_value_sig9FE1);
      },
      dispose: () => {
        var_core_value_sig2683 && vc(var_core_value_sig2683, var_core_value_sigA753, var_core_value_sigEF41.values()), var_core_value_sig2683 = undefined, var_core_value_sigDB87.clear(), var_core_value_sig2858.clear(), var_core_value_sig9793.clear();
      }
    };
  return {
    resolved: false
  };
}
function pc(var_core_value_sig1B33) {
  return !var_core_value_sig1B33 || var_core_value_sig1B33.length !== 1 ? {
    resolved: false
  } : {
    resolved: true,
    value: var_core_value_sig1B33[0]
  };
}
function mc(var_core_value_sig041A, var_core_value_sig7E4F, var_core_value_sig5A6A) {
  !var_core_value_sig041A || gc(var_core_value_sig041A, var_core_value_sig7E4F) || var_core_value_sig041A.add([var_core_value_sig7E4F, {
    useValue: var_core_value_sig5A6A
  }]);
}
function hc(var_core_value_sig7E71) {
  if (!var_core_value_sig7E71 || typeof var_core_value_sig7E71 != "function" && typeof var_core_value_sig7E71 != "object") return [];
  for (let var_core_value_sig9DAA of Object.getOwnPropertySymbols(var_core_value_sig7E71)) {
    let var_core_value_sig210D = var_core_value_sig7E71[var_core_value_sig9DAA];
    if (!Array.isArray(var_core_value_sig210D)) continue;
    let var_core_value_sigB4B4 = var_core_value_sig210D.map(var_core_value_sig86D0 => var_core_value_sig86D0 == null ? undefined : var_core_value_sig86D0.identifier).filter(var_core_value_sig4CD2 => var_core_value_sig4CD2 !== undefined);
    if (var_core_value_sigB4B4.length) return var_core_value_sigB4B4;
  }
  return [];
}
function gc(var_core_value_sig14B7, var_core_value_sig7D2C) {
  var var_core_value_sigE10A, var_core_value_sig0AE5, var_core_value_sig57CC, var_core_value_sig2932;
  let var_core_value_sigA067 = var_core_value_sig14B7;
  return !!((var_core_value_sigE10A = var_core_value_sigA067.dependencyCollection) != null && (var_core_value_sig0AE5 = var_core_value_sigE10A.has) != null && var_core_value_sig0AE5.call(var_core_value_sigE10A, var_core_value_sig7D2C) || (var_core_value_sig57CC = var_core_value_sigA067.resolvedDependencyCollection) != null && (var_core_value_sig2932 = var_core_value_sig57CC.has) != null && var_core_value_sig2932.call(var_core_value_sig57CC, var_core_value_sig7D2C));
}
function _c(var_core_value_sig0CB3) {
  return var_core_value_sig0CB3.__embedSharedRootInjector;
}
function vc(var_core_value_sigE0F3, var_core_value_sig7330, var_core_value_sig2766 = []) {
  let var_core_value_sig1BD2 = yc(var_core_value_sig7330);
  for (let var_core_value_sig1F8A of var_core_value_sig2766) var_core_value_sig1BD2.add(var_core_value_sig1F8A);
  bc(var_core_value_sigE0F3, var_core_value_sig1BD2), var_core_value_sigE0F3.dispose();
}
function yc(var_core_value_sig2CA0) {
  let var_core_value_sigDD2D = new Set(),
    var_core_value_sig8880 = xc(var_core_value_sig2CA0);
  return var_core_value_sig8880 && var_core_value_sig8880.forEach(var_core_value_sigEBB4 => {
    Array.isArray(var_core_value_sigEBB4) && var_core_value_sigEBB4.forEach(var_core_value_sigD407 => var_core_value_sigDD2D.add(var_core_value_sigD407));
  }), var_core_value_sigDD2D;
}
function bc(var_core_value_sig005B, var_core_value_sig6383, var_core_value_sigCDBE = new Set()) {
  if (var_core_value_sigCDBE.has(var_core_value_sig005B)) return;
  var_core_value_sigCDBE.add(var_core_value_sig005B);
  let var_core_value_sig8589 = var_core_value_sig005B.children;
  var_core_value_sig8589 == null || var_core_value_sig8589.forEach(var_core_value_sig2B74 => bc(var_core_value_sig2B74, var_core_value_sig6383, var_core_value_sigCDBE));
  let var_core_value_sig2F83 = xc(var_core_value_sig005B);
  var_core_value_sig2F83 && var_core_value_sig2F83.forEach((var_core_value_sig0483, var_core_value_sig4A48) => {
    if (!Array.isArray(var_core_value_sig0483)) return;
    let var_core_value_sigD170 = var_core_value_sig0483.filter(var_core_value_sig63F3 => !var_core_value_sig6383.has(var_core_value_sig63F3));
    if (var_core_value_sigD170.length !== var_core_value_sig0483.length) {
      if (var_core_value_sigD170.length === 0) {
        var_core_value_sig2F83.delete(var_core_value_sig4A48);
        return;
      }
      var_core_value_sig2F83.set(var_core_value_sig4A48, var_core_value_sigD170);
    }
  });
}
function xc(var_core_value_sig4AD6) {
  var var_core_value_sig83CC;
  return (var_core_value_sig83CC = var_core_value_sig4AD6.resolvedDependencyCollection) == null ? undefined : var_core_value_sig83CC.resolvedDependencies;
}
function Sc(var_core_value_sigECB5) {
  return Array.from(var_core_value_sigECB5, ([var_core_value_sig90E5, var_core_value_sig7000]) => [var_core_value_sig90E5, {
    useValue: var_core_value_sig7000
  }]);
}
function Cc(var_core_value_sigEC7A) {
  if (!Array.isArray(var_core_value_sigEC7A) || var_core_value_sigEC7A.length < 2) return;
  let [var_core_value_sig3C20, var_core_value_sig55A0] = var_core_value_sigEC7A;
  if (!(!var_core_value_sig55A0 || typeof var_core_value_sig55A0 != "object")) {
    if ("useValue" in var_core_value_sig55A0) return {
      kind: "value",
      identifier: var_core_value_sig3C20,
      value: var_core_value_sig55A0.useValue
    };
    if (typeof var_core_value_sig55A0.useFactory == "function") return {
      kind: "factory",
      identifier: var_core_value_sig3C20,
      factory: var_core_value_sig55A0.useFactory
    };
  }
}
function wc(var_core_value_sig6F0A, var_core_value_sig193F) {
  if (!var_core_value_sig6F0A.has(var_core_value_sigB2B1)) return;
  let var_core_value_sig5227 = var_core_value_sig6F0A.get(var_core_value_sigB2B1),
    var_core_value_sig8CB8 = var_core_value_sig5227.createScoped;
  return Tc(typeof var_core_value_sig8CB8 == "function" ? var_core_value_sig8CB8.call(var_core_value_sig5227, var_core_value_sig193F) : var_core_value_sig5227);
}
function Tc(var_core_value_sigBE77) {
  return {
    menuChanged$: var_core_value_sigBE77.menuChanged$,
    mergeMenu: (var_core_value_sigD7C5, var_core_value_sig3633) => var_core_value_sigBE77.mergeMenu(var_core_value_sigD7C5, var_core_value_sig3633),
    appendRootMenu: var_core_value_sig1DF5 => var_core_value_sigBE77.appendRootMenu(var_core_value_sig1DF5),
    getMenuByPositionKey: var_core_value_sig90A3 => Ec(var_core_value_sigBE77.getMenuByPositionKey(var_core_value_sig90A3)),
    getFlatMenuByPositionKey: var_core_value_sig28BE => Ec(var_core_value_sigBE77.getFlatMenuByPositionKey(var_core_value_sig28BE))
  };
}
function Ec(var_core_value_sig9700) {
  return var_core_value_sig9700.flatMap(var_core_value_sig0224 => {
    var var_core_value_sig854B;
    if (Ps.has(((var_core_value_sig854B = var_core_value_sig0224.item) == null ? undefined : var_core_value_sig854B.id) ?? var_core_value_sig0224.key)) return [];
    if (!var_core_value_sig0224.children) return [var_core_value_sig0224];
    let var_core_value_sig1FF6 = Ec(var_core_value_sig0224.children);
    return var_core_value_sig0224.children["length"] > 0 && var_core_value_sig1FF6.length === 0 && !var_core_value_sig0224.item && !var_core_value_sig0224.headerActionItem ? [] : [{
      ...var_core_value_sig0224,
      children: var_core_value_sig1FF6
    }];
  });
}
function Dc(var_core_value_sigB461, var_core_value_sigDDFF, var_core_value_sig52C1) {
  if (!var_core_value_sigB461.has(var_core_value_sigAF03)) return;
  let var_core_value_sigFA8C = var_core_value_sigB461.get(var_core_value_sigAF03);
  return {
    get disabled() {
      return var_core_value_sigFA8C.disabled;
    },
    set disabled(var_core_value_sig4B27) {
      var_core_value_sigFA8C.disabled = var_core_value_sig4B27;
    },
    get visible() {
      return var_core_value_sigFA8C.visible;
    },
    enable: () => var_core_value_sigFA8C.enable(),
    disable: () => var_core_value_sigFA8C.disable(),
    triggerContextMenu: (var_core_value_sig3A41, var_core_value_sig269A, var_core_value_sigBF53) => {
      var_core_value_sigFA8C.triggerContextMenu(var_core_value_sig3A41, var_core_value_sig269A, {
        ...var_core_value_sigBF53,
        unitId: (var_core_value_sigBF53 == null ? undefined : var_core_value_sigBF53.unitId) ?? var_core_value_sig52C1
      });
    },
    hideContextMenu: () => var_core_value_sigFA8C.hideContextMenu(),
    registerContextMenuHandler: var_core_value_sigD9BB => var_core_value_sigFA8C.registerContextMenuHandler(var_core_value_sigD9BB)
  };
}
function Oc(var_core_value_sig19C6, var_core_value_sigDB89) {
  let var_core_value_sigCBF6 = new var_core_value_sig1F72();
  return {
    get disabled() {
      return var_core_value_sigCBF6.disabled;
    },
    set disabled(var_core_value_sigF549) {
      var_core_value_sigCBF6.disabled = var_core_value_sigF549;
    },
    get visible() {
      return var_core_value_sigCBF6.visible;
    },
    enable: () => var_core_value_sigCBF6.enable(),
    disable: () => var_core_value_sigCBF6.disable(),
    triggerContextMenu: (var_core_value_sigC125, var_core_value_sigB63D, var_core_value_sig8255) => {
      var_core_value_sigCBF6.triggerContextMenu(var_core_value_sigC125, var_core_value_sigB63D, {
        ...var_core_value_sig8255,
        unitId: (var_core_value_sig8255 == null ? undefined : var_core_value_sig8255.unitId) ?? var_core_value_sigDB89
      });
    },
    hideContextMenu: () => var_core_value_sigCBF6.hideContextMenu(),
    registerContextMenuHandler: var_core_value_sigBFC7 => var_core_value_sigCBF6.registerContextMenuHandler(var_core_value_sigBFC7),
    dispose: () => var_core_value_sigCBF6.dispose()
  };
}
function kc(var_core_value_sigE0DD, var_core_value_sig9874) {
  let var_core_value_sig61DE = var_core_value_sigE0DD.get(var_core_value_sigBEFB),
    var_core_value_sig9717 = var_core_value_sigE0DD.has(Es) ? var_core_value_sigE0DD.get(Es) : undefined,
    var_core_value_sig7C72 = var_core_value_sigE0DD.has(X) ? var_core_value_sigE0DD.get(X) : undefined,
    var_core_value_sigECAB = var_core_value_sig9874.renderScope["rootElement"],
    var_core_value_sigEB4B = var_core_value_sig9874.renderScope["contentRoot"] ?? var_core_value_sigECAB,
    var_core_value_sigF741 = new Set([var_core_value_sigECAB, var_core_value_sigEB4B]),
    var_core_value_sigB227 = var_core_value_sig9874.renderScope["mode"] !== "float" || var_core_value_sig9874.renderScope["fullscreen"],
    var_core_value_sigCFC5 = (var_core_value_sig933F, var_core_value_sig29DE) => {
      var_core_value_sigF741.add(var_core_value_sig933F);
      let var_core_value_sig4AFB = (var_core_value_sig29DE == null ? undefined : var_core_value_sig29DE.registerChildInteraction) && var_core_value_sigB227,
        var_core_value_sigC7EA = var_core_value_sig4AFB ? Ac(var_core_value_sig933F) : undefined,
        var_core_value_sigDAB9 = var_core_value_sig4AFB ? var_core_value_sig9717 == null ? undefined : var_core_value_sig9717.registerOwnedElement(var_core_value_sig9874.embedId, var_core_value_sig933F) : undefined,
        var_core_value_sig9CF7 = var_core_value_sig4AFB ? var_core_value_sig7C72 == null ? undefined : var_core_value_sig7C72.registerElement({
          embedId: var_core_value_sig9874.embedId,
          role: "child-editor",
          element: var_core_value_sig933F
        }) : undefined;
      return var_core_value_sig9BBC(() => {
        var_core_value_sig9CF7 == null || var_core_value_sig9CF7.dispose(), var_core_value_sigDAB9 == null || var_core_value_sigDAB9.dispose(), var_core_value_sigC7EA == null || var_core_value_sigC7EA.dispose(), var_core_value_sigF741.delete(var_core_value_sig933F);
      });
    },
    var_core_value_sigEC54 = var_core_value_sigCCE5 => var_core_value_sigCCE5 ? [...var_core_value_sigF741].some(var_core_value_sig6A71 => var_core_value_sig6A71 === var_core_value_sigCCE5 || var_core_value_sig6A71.contains(var_core_value_sigCCE5)) : false;
  return {
    get isFocused() {
      return var_core_value_sig61DE.isFocused;
    },
    get rootContainerElement() {
      return var_core_value_sigECAB;
    },
    focus: () => var_core_value_sig61DE.focus(),
    registerFocusHandler: (var_core_value_sig5933, var_core_value_sig884B) => var_core_value_sig61DE.registerFocusHandler(var_core_value_sig5933, var_core_value_sig884B),
    registerRootContainerElement: var_core_value_sigCFC5,
    registerContentElement: var_core_value_sigCFC5,
    registerContainerElement: var_core_value_sig4E30 => var_core_value_sigCFC5(var_core_value_sig4E30, {
      registerChildInteraction: true
    }),
    getContentElement: () => var_core_value_sigEB4B,
    checkElementInCurrentContainers: var_core_value_sig9730 => var_core_value_sigEC54(var_core_value_sig9730) || (var_core_value_sig9717 == null ? undefined : var_core_value_sig9717.contains(var_core_value_sig9874.embedId, var_core_value_sig9730)) || var_core_value_sig61DE.checkElementInCurrentContainers(var_core_value_sig9730),
    checkContentIsFocused: () => var_core_value_sigEC54(var_core_value_sigEB4B.ownerDocument["activeElement"]) || (var_core_value_sig7C72 == null ? undefined : var_core_value_sig7C72.hasChildInteractionLease(var_core_value_sig9874.embedId)) || var_core_value_sig61DE.checkContentIsFocused()
  };
}
function Ac(var_core_value_sig9B6A) {
  let var_core_value_sigEA29 = new Map(),
    var_core_value_sig3851 = var_core_value_sig8E4A => {
      var_core_value_sigEA29.set(var_core_value_sig8E4A, var_core_value_sig8E4A.getAttribute(ws)), var_core_value_sig8E4A.setAttribute(ws, "child-editor");
    };
  return var_core_value_sig3851(var_core_value_sig9B6A), var_core_value_sig9B6A.querySelectorAll("*").forEach(var_core_value_sig3851), var_core_value_sig9BBC(() => {
    var_core_value_sigEA29.forEach((var_core_value_sig3BF6, var_core_value_sig38CE) => {
      if (var_core_value_sig3BF6 == null) {
        var_core_value_sig38CE.removeAttribute(ws);
        return;
      }
      var_core_value_sig38CE.setAttribute(ws, var_core_value_sig3BF6);
    });
  });
}
function jc(var_core_value_sigE1D0, var_core_value_sig8AFC, var_core_value_sigA761 = []) {
  let var_core_value_sig0996 = Nc(var_core_value_sigE1D0, var_core_value_sigA761) ?? var_core_value_sigE1D0.injector,
    var_core_value_sig09E0 = var_core_value_sig0996 !== var_core_value_sigE1D0.injector,
    var_core_value_sigB201 = Mc(var_core_value_sigE1D0),
    var_core_value_sigFB17 = {
      descriptor: var_core_value_sigE1D0.descriptor,
      host: {
        unitId: var_core_value_sigE1D0.hostUnitId,
        type: var_core_value_sigE1D0.descriptor["hostType"],
        anchorId: var_core_value_sigE1D0.descriptor["hostAnchorId"],
        entry: var_core_value_sigE1D0.descriptor["entry"],
        layout: Fc(var_core_value_sigE1D0)
      },
      child: {
        unitId: var_core_value_sigE1D0.childUnitId,
        type: var_core_value_sigE1D0.childType
      },
      injector: var_core_value_sig0996,
      instanceService: Pc(var_core_value_sig0996, var_core_value_sig5DF8),
      commandService: Pc(var_core_value_sig0996, var_core_value_sigDFF6),
      menuManagerService: Pc(var_core_value_sig0996, var_core_value_sigB2B1),
      roots: var_core_value_sigB201,
      activate: () => var_core_value_sig8AFC(true),
      deactivate: () => var_core_value_sig8AFC(false),
      dispose: () => {
        var_core_value_sig09E0 && var_core_value_sig0996.dispose();
      }
    };
  return {
    runtimeScope: var_core_value_sigFB17,
    disposable: var_core_value_sig9BBC(() => var_core_value_sigFB17.dispose())
  };
}
function Mc(var_core_value_sigCA91) {
  var var_core_value_sig372C;
  let var_core_value_sig98F9 = var_core_value_sigCA91.renderScope["rootElement"],
    var_core_value_sig3F40 = var_core_value_sigCA91.renderScope["contentRoot"] ?? ms(var_core_value_sig98F9, "data-embed-content-root") ?? var_core_value_sig98F9,
    var_core_value_sig7A2F = var_core_value_sigCA91.renderScope["overlayRoot"] ?? ms(var_core_value_sig98F9, "data-embed-overlay-root") ?? var_core_value_sig98F9;
  return {
    root: var_core_value_sig98F9,
    content: var_core_value_sig3F40,
    canvas: var_core_value_sigCA91.renderScope["canvasRoot"] ?? ms(var_core_value_sig98F9, "data-embed-canvas-root") ?? undefined,
    overlay: var_core_value_sig7A2F,
    popup: var_core_value_sigCA91.renderScope["popupRoot"] ?? ms(var_core_value_sig98F9, "data-embed-popup-root") ?? var_core_value_sig7A2F,
    menuSlot: ((var_core_value_sig372C = var_core_value_sigCA91.renderScope["menuOutlet"]) == null ? undefined : var_core_value_sig372C.container) ?? ms(var_core_value_sig98F9, "data-embed-menu-slot") ?? undefined,
    footerSlot: ms(var_core_value_sig98F9, "data-embed-footer-slot") ?? undefined
  };
}
function Nc(var_core_value_sig3047, var_core_value_sig19A5) {
  if (!(!var_core_value_sig3047.injector["has"](var_core_value_sig5DF8) || !var_core_value_sig3047.injector["has"](var_core_value_sigDFF6))) return Fs(var_core_value_sig3047, var_core_value_sig19A5);
}
function Pc(var_core_value_sigC5EA, var_core_value_sigC9A1) {
  if (var_core_value_sigC5EA.has(var_core_value_sigC9A1)) return var_core_value_sigC5EA.get(var_core_value_sigC9A1);
}
function Fc(var_core_value_sigF92E) {
  var var_core_value_sig70AE, var_core_value_sig57BC1;
  switch (var_core_value_sigF92E.descriptor["entry"]) {
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
  return var_core_value_sigF92E.layout === "tab-peer" || (var_core_value_sig70AE = var_core_value_sigF92E.descriptor["sourceMeta"]) != null && var_core_value_sig70AE.tab ? "tab-peer" : (var_core_value_sig57BC1 = var_core_value_sigF92E.descriptor["sourceMeta"]) != null && var_core_value_sig57BC1.floating ? "float" : var_core_value_sigF92E.layout["startsWith"]("docs-") || var_core_value_sigF92E.layout === "scroll-contained" ? "doc-flow" : "float";
}
var Ic = class {
    constructor() {
      Y(this, "_contributions", new Map());
    }
    register(var_core_value_sig300B) {
      if (this._contributions["has"](var_core_value_sig300B.childType)) throw Error("Embed child view contribution already registered: " + var_core_value_sig300B.childType);
      this._contributions["set"](var_core_value_sig300B.childType, var_core_value_sig300B);
    }
    get(var_core_value_sig8457) {
      return this._contributions["get"](var_core_value_sig8457);
    }
    list() {
      return [...this._contributions["values"]()];
    }
  },
  Lc = class {
    constructor() {
      Y(this, "_contributions", new Map());
    }
    register(var_core_value_sigB30D) {
      let var_core_value_sigDB33 = this._key(var_core_value_sigB30D.hostType, var_core_value_sigB30D.entry, var_core_value_sigB30D.childType);
      if (this._contributions["has"](var_core_value_sigDB33)) throw Error("Embed floating menu contribution already registered: " + var_core_value_sigDB33);
      return this._contributions["set"](var_core_value_sigDB33, var_core_value_sigB30D), var_core_value_sig9BBC(() => {
        this._contributions["get"](var_core_value_sigDB33) === var_core_value_sigB30D && this._contributions["delete"](var_core_value_sigDB33);
      });
    }
    get(var_core_value_sig6C8C, var_core_value_sig7A5E, var_core_value_sig838E) {
      if (var_core_value_sig838E != null) {
        let var_core_value_sig62B7 = this._contributions["get"](this._key(var_core_value_sig6C8C, var_core_value_sig7A5E, var_core_value_sig838E));
        if (var_core_value_sig62B7) return var_core_value_sig62B7;
      }
      return this._contributions["get"](this._key(var_core_value_sig6C8C, var_core_value_sig7A5E));
    }
    hasExact(var_core_value_sig9A5B, var_core_value_sigC860, var_core_value_sigE64C) {
      return this._contributions["has"](this._key(var_core_value_sig9A5B, var_core_value_sigC860, var_core_value_sigE64C));
    }
    list() {
      return [...this._contributions["values"]()];
    }
    _key(var_core_value_sigF39B, var_core_value_sig9B88, var_core_value_sig992A) {
      return var_core_value_sig992A == null ? var_core_value_sigF39B + ":" + var_core_value_sig9B88 + ":*" : var_core_value_sigF39B + ":" + var_core_value_sig9B88 + ":" + var_core_value_sig992A;
    }
  },
  Rc = class {
    constructor() {
      Y(this, "_contributions", new Map());
    }
    register(var_core_value_sig6281) {
      let var_core_value_sig9B01 = this._key(var_core_value_sig6281.hostType, var_core_value_sig6281.entry);
      if (this._contributions["has"](var_core_value_sig9B01)) throw Error("Embed\x20host\x20container\x20contribution\x20already\x20registered:\x20" + var_core_value_sig9B01);
      this._contributions["set"](var_core_value_sig9B01, var_core_value_sig6281);
    }
    get(var_core_value_sigA724, var_core_value_sig385E) {
      return this._contributions["get"](this._key(var_core_value_sigA724, var_core_value_sig385E));
    }
    list() {
      return [...this._contributions["values"]()];
    }
    supports(var_core_value_sig10D3, var_core_value_sig41F2, var_core_value_sig32DD) {
      let var_core_value_sig7A88 = this.get(var_core_value_sig10D3, var_core_value_sig41F2);
      return var_core_value_sig7A88 ? (var_core_value_sig7A88.supportedLayouts ?? [var_core_value_sig7A88.layout]).includes(var_core_value_sig32DD) : false;
    }
    _key(var_core_value_sig6CFC, var_core_value_sig3EC0) {
      return var_core_value_sig6CFC + ":" + var_core_value_sig3EC0;
    }
  },
  zc = class {
    constructor() {
      Y(this, "_rootsByChildUnitId", new Map()), Y(this, "_rootsByEmbedId", new Map()), Y(this, "_rootsByHostAnchorId", new Map());
    }
    register(var_core_value_sigEA69, var_core_value_sigF42A) {
      let var_core_value_sig898E = typeof var_core_value_sigEA69 == "string" ? {
        childUnitId: var_core_value_sigEA69,
        root: var_core_value_sigF42A
      } : var_core_value_sigEA69;
      return this._rootsByChildUnitId["set"](var_core_value_sig898E.childUnitId, var_core_value_sig898E), var_core_value_sig898E.embedId && this._rootsByEmbedId["set"](var_core_value_sig898E.embedId, var_core_value_sig898E), var_core_value_sig898E.hostAnchorId && this._rootsByHostAnchorId["set"](var_core_value_sig898E.hostAnchorId, var_core_value_sig898E), var_core_value_sig9BBC(() => {
        this._rootsByChildUnitId["get"](var_core_value_sig898E.childUnitId) === var_core_value_sig898E && this._rootsByChildUnitId["delete"](var_core_value_sig898E.childUnitId), var_core_value_sig898E.embedId && this._rootsByEmbedId["get"](var_core_value_sig898E.embedId) === var_core_value_sig898E && this._rootsByEmbedId["delete"](var_core_value_sig898E.embedId), var_core_value_sig898E.hostAnchorId && this._rootsByHostAnchorId["get"](var_core_value_sig898E.hostAnchorId) === var_core_value_sig898E && this._rootsByHostAnchorId["delete"](var_core_value_sig898E.hostAnchorId);
      });
    }
    get(var_core_value_sigC481) {
      var var_core_value_sig27B7;
      return ((var_core_value_sig27B7 = this._rootsByChildUnitId["get"](var_core_value_sigC481)) == null ? undefined : var_core_value_sig27B7.root) ?? null;
    }
    getByEmbedId(var_core_value_sig2DAD) {
      var var_core_value_sig00DE;
      return ((var_core_value_sig00DE = this._rootsByEmbedId["get"](var_core_value_sig2DAD)) == null ? undefined : var_core_value_sig00DE.root) ?? null;
    }
    getByHostAnchorId(var_core_value_sigEF7C) {
      var var_core_value_sig07E7;
      return ((var_core_value_sig07E7 = this._rootsByHostAnchorId["get"](var_core_value_sigEF7C)) == null ? undefined : var_core_value_sig07E7.root) ?? null;
    }
    contains(var_core_value_sig6005, var_core_value_sig25A4) {
      if (!(var_core_value_sig6005 instanceof Node)) return false;
      let var_core_value_sigB591 = var_core_value_sig25A4.embedId ? this.getByEmbedId(var_core_value_sig25A4.embedId) : var_core_value_sig25A4.hostAnchorId ? this.getByHostAnchorId(var_core_value_sig25A4.hostAnchorId) : var_core_value_sig25A4.childUnitId ? this.get(var_core_value_sig25A4.childUnitId) : null;
      return !!(var_core_value_sigB591 != null && var_core_value_sigB591.contains(var_core_value_sig6005));
    }
  };
function Bc(var_core_value_sig41AB, var_core_value_sigCDAC, var_core_value_sigDC24 = Uc(var_core_value_sig41AB), var_core_value_sig3875 = {}) {
  var var_core_value_sig5513, var_core_value_sig6048;
  let var_core_value_sigE6C3 = var_core_value_sig41AB.injector["get"](var_core_value_sigCDAC),
    var_core_value_sig6469 = var_core_value_sig3875.scopedInjector ?? (var_core_value_sig3875.scopedRenderInjector === false ? undefined : ((var_core_value_sig5513 = var_core_value_sig41AB.runtimeScope) == null ? undefined : var_core_value_sig5513.injector) ?? Vc(var_core_value_sig41AB)),
    var_core_value_sig8BC7 = !var_core_value_sig3875.scopedInjector && var_core_value_sig6469 !== ((var_core_value_sig6048 = var_core_value_sig41AB.runtimeScope) == null ? undefined : var_core_value_sig6048.injector),
    var_core_value_sig5939 = Kc(var_core_value_sigE6C3, var_core_value_sig41AB.childUnitId, var_core_value_sig6469);
  if (!var_core_value_sig5939) {
    var_core_value_sig8BC7 && (var_core_value_sig6469 == null || var_core_value_sig6469.dispose());
    return;
  }
  var_core_value_sigDC24.dataset["embedChildRenderUnitId"] = var_core_value_sig41AB.childUnitId, var_core_value_sigDC24.dataset["embedChildRenderMode"] = var_core_value_sig41AB.renderScope["mode"];
  try {
    var var_core_value_sig74321, var_core_value_sig19F0;
    (var_core_value_sig74321 = (var_core_value_sig19F0 = var_core_value_sig5939.engine).unmount) == null || var_core_value_sig74321.call(var_core_value_sig19F0);
  } catch {}
  var_core_value_sig5939.engine["mount"](var_core_value_sigDC24), Wc(var_core_value_sig5939, var_core_value_sigDC24), Jc(var_core_value_sig5939, {
    activate: var_core_value_sig3875.activate ?? true
  });
  let var_core_value_sig619B = Hc(var_core_value_sig5939, var_core_value_sigDC24, {
    activate: false,
    idleMs: var_core_value_sig41AB.descriptor["hostType"] === var_core_value_sigC0F3.UNIVER_SHEET && var_core_value_sig41AB.renderScope["mode"] === "float" ? 100 : 0
  });
  return var_core_value_sig9BBC(() => {
    var_core_value_sig619B.dispose();
    try {
      var var_core_value_sigB272, var_core_value_sig6F52;
      (var_core_value_sigB272 = (var_core_value_sig6F52 = var_core_value_sig5939.engine).unmount) == null || var_core_value_sigB272.call(var_core_value_sig6F52);
    } catch {}
    if (var_core_value_sigE6C3.getRenderUnitById(var_core_value_sig41AB.childUnitId) === var_core_value_sig5939) {
      var var_core_value_sig09C4;
      (var_core_value_sig09C4 = var_core_value_sigE6C3.removeRender) == null || var_core_value_sig09C4.call(var_core_value_sigE6C3, var_core_value_sig41AB.childUnitId);
    }
    var_core_value_sigDC24.removeAttribute("data-embed-child-render-unit-id"), var_core_value_sigDC24.removeAttribute("data-embed-child-render-mode"), var_core_value_sig8BC7 && (var_core_value_sig6469 == null || var_core_value_sig6469.dispose());
  });
}
function Vc(var_core_value_sig3F16) {
  if (typeof var_core_value_sig3F16.injector["has"] == "function" && !(!var_core_value_sig3F16.injector["has"](var_core_value_sig5DF8) || !var_core_value_sig3F16.injector["has"](var_core_value_sigDFF6))) return Fs(var_core_value_sig3F16);
}
function Hc(var_core_value_sig6C48, var_core_value_sig9140, var_core_value_sig1CF9 = {}) {
  if (typeof ResizeObserver > "u") return var_core_value_sig9BBC(() => {});
  let var_core_value_sigC63A = -1,
    var_core_value_sig1D3B = -1,
    var_core_value_sig453A = 0,
    var_core_value_sigEE97,
    var_core_value_sig1DE5 = () => {
      var_core_value_sig453A &&= (window.cancelAnimationFrame(var_core_value_sig453A), 0), var_core_value_sig453A = window.requestAnimationFrame(() => {
        var_core_value_sig453A = 0, Jc(var_core_value_sig6C48, {
          activate: var_core_value_sig1CF9.activate ?? false
        });
      });
    },
    var_core_value_sigB51C = new ResizeObserver(var_core_value_sig8E3E => {
      var var_core_value_sigC3D3;
      let var_core_value_sig1451 = (var_core_value_sigC3D3 = var_core_value_sig8E3E[0]) == null ? undefined : var_core_value_sigC3D3.contentRect,
        var_core_value_sigAD57 = (var_core_value_sig1451 == null ? undefined : var_core_value_sig1451.width) ?? var_core_value_sig9140.clientWidth,
        var_core_value_sig58A8 = (var_core_value_sig1451 == null ? undefined : var_core_value_sig1451.height) ?? var_core_value_sig9140.clientHeight;
      (var_core_value_sigAD57 !== var_core_value_sigC63A || var_core_value_sig58A8 !== var_core_value_sig1D3B) && (var_core_value_sigC63A = var_core_value_sigAD57, var_core_value_sig1D3B = var_core_value_sig58A8, var_core_value_sig453A &&= (window.cancelAnimationFrame(var_core_value_sig453A), 0), var_core_value_sigEE97 != null && globalThis.clearTimeout(var_core_value_sigEE97), (var_core_value_sig1CF9.idleMs ?? 0) > 0 ? var_core_value_sigEE97 = globalThis.setTimeout(() => {
        var_core_value_sigEE97 = undefined, var_core_value_sig1DE5();
      }, var_core_value_sig1CF9.idleMs) : var_core_value_sig1DE5());
    });
  return var_core_value_sigB51C.observe(var_core_value_sig9140), var_core_value_sig9BBC(() => {
    var_core_value_sig453A && window.cancelAnimationFrame(var_core_value_sig453A), var_core_value_sigEE97 != null && globalThis.clearTimeout(var_core_value_sigEE97), var_core_value_sigB51C.disconnect();
  });
}
function Uc(var_core_value_sig1426) {
  return var_core_value_sig1426.runtimeScope["roots"].canvas ?? var_core_value_sig1426.renderScope["canvasRoot"] ?? var_core_value_sig1426.renderScope["contentRoot"] ?? var_core_value_sig1426.renderScope["rootElement"];
}
function Wc(var_core_value_sigEA3C, var_core_value_sigD0B7) {
  var var_core_value_sig073B, var_core_value_sig4B16, var_core_value_sig3649, var_core_value_sigD0F3, var_core_value_sig415D;
  let var_core_value_sig0A15 = ((var_core_value_sig073B = (var_core_value_sig4B16 = var_core_value_sigEA3C.engine).getCanvasElement) == null ? undefined : var_core_value_sig073B.call(var_core_value_sig4B16)) ?? ((var_core_value_sig3649 = (var_core_value_sigD0F3 = var_core_value_sigEA3C.engine).getCanvas) == null || (var_core_value_sig3649 = var_core_value_sig3649.call(var_core_value_sigD0F3)) == null || (var_core_value_sig415D = var_core_value_sig3649.getCanvasEle) == null ? undefined : var_core_value_sig415D.call(var_core_value_sig3649));
  !var_core_value_sig0A15 || var_core_value_sig0A15.parentElement === var_core_value_sigD0B7 || var_core_value_sigD0B7.appendChild(var_core_value_sig0A15);
}
function Gc(var_core_value_sig7113, var_core_value_sig1555, var_core_value_sigC06C) {
  try {
    let var_core_value_sigEC1A = var_core_value_sig7113.getRenderUnitById(var_core_value_sig1555);
    if (var_core_value_sigEC1A) {
      var var_core_value_sigF8D0;
      if (!var_core_value_sigC06C || qc(var_core_value_sigEC1A) === var_core_value_sigC06C) return var_core_value_sigEC1A;
      (var_core_value_sigF8D0 = var_core_value_sig7113.removeRender) == null || var_core_value_sigF8D0.call(var_core_value_sig7113, var_core_value_sig1555);
    }
    return var_core_value_sig7113.createRender(var_core_value_sig1555, {
      embeddedRender: true,
      makeCurrent: false,
      renderParentInjector: var_core_value_sigC06C,
      skipAutoRender: true
    });
  } catch {
    return;
  }
}
function Kc(var_core_value_sig0107, var_core_value_sig05B7, var_core_value_sig19F01) {
  try {
    let var_core_value_sigBDED = var_core_value_sig0107.getRenderUnitById(var_core_value_sig05B7);
    if (var_core_value_sigBDED) {
      var var_core_value_sigF035;
      if (!var_core_value_sig19F01 || qc(var_core_value_sigBDED) === var_core_value_sig19F01) return var_core_value_sigBDED;
      (var_core_value_sigF035 = var_core_value_sig0107.removeRender) == null || var_core_value_sigF035.call(var_core_value_sig0107, var_core_value_sig05B7);
    }
    return var_core_value_sig0107.createRender(var_core_value_sig05B7, {
      embeddedRender: true,
      makeCurrent: false,
      renderParentInjector: var_core_value_sig19F01,
      skipAutoRender: true
    });
  } catch (var_core_value_sig4BFF) {
    var var_core_value_sig0804;
    (var_core_value_sig0804 = var_core_value_sig0107.removeRender) == null || var_core_value_sig0804.call(var_core_value_sig0107, var_core_value_sig05B7), console.warn("[embed-ui]\x20failed\x20to\x20create\x20embedded\x20child\x20render", var_core_value_sig4BFF);
    return;
  }
}
function qc(var_core_value_sig417D) {
  try {
    var var_core_value_sig73B7;
    return (var_core_value_sig73B7 = var_core_value_sig417D.with) == null ? undefined : var_core_value_sig73B7.call(var_core_value_sig417D, var_core_value_sig8A66);
  } catch {
    return;
  }
}
function Jc(var_core_value_sig4DEF, var_core_value_sigF576 = {}) {
  var var_core_value_sig3087, var_core_value_sigC30C, var_core_value_sigAE4D, var_core_value_sigA2D5;
  if (var_core_value_sigF576.activate) {
    var var_core_value_sig7B4C;
    (var_core_value_sig7B4C = var_core_value_sig4DEF.activate) == null || var_core_value_sig7B4C.call(var_core_value_sig4DEF);
  }
  var_core_value_sig4DEF.engine["resize"](), var_core_value_sig4DEF.components["forEach"](var_core_value_sig40E7 => {
    var var_core_value_sigEDBA, var_core_value_sigE863;
    (var_core_value_sigEDBA = var_core_value_sig40E7.makeForceDirty) == null || var_core_value_sigEDBA.call(var_core_value_sig40E7, true), (var_core_value_sigE863 = var_core_value_sig40E7.makeDirty) == null || var_core_value_sigE863.call(var_core_value_sig40E7, true);
  }), (var_core_value_sig3087 = var_core_value_sig4DEF.mainComponent) == null || (var_core_value_sigC30C = var_core_value_sig3087.makeDirty) == null || var_core_value_sigC30C.call(var_core_value_sig3087, true), var_core_value_sig4DEF.scene["makeDirty"](), (var_core_value_sigAE4D = (var_core_value_sigA2D5 = var_core_value_sig4DEF.scene).render) == null || var_core_value_sigAE4D.call(var_core_value_sigA2D5);
}
var Yc = class {
  constructor() {
    Y(this, "_providers", new Map()), Y(this, "_contextsByEmbedId", new Map()), Y(this, "_contextsByHostAnchorId", new Map()), Y(this, "_contextsByChildUnitId", new Map());
  }
  register(var_core_value_sig04B4) {
    return this._providers["set"](var_core_value_sig04B4.childType, var_core_value_sig04B4), var_core_value_sig9BBC(() => {
      this._providers["get"](var_core_value_sig04B4.childType) === var_core_value_sig04B4 && this._providers["delete"](var_core_value_sig04B4.childType);
    });
  }
  get(var_core_value_sig1C07) {
    return this._providers["get"](var_core_value_sig1C07);
  }
  registerContext(var_core_value_sig93D6) {
    return this._contextsByEmbedId["set"](var_core_value_sig93D6.embedId, var_core_value_sig93D6), this._contextsByHostAnchorId["set"](var_core_value_sig93D6.descriptor["hostAnchorId"], var_core_value_sig93D6), this._contextsByChildUnitId["set"](var_core_value_sig93D6.childUnitId, var_core_value_sig93D6), var_core_value_sig9BBC(() => {
      this._contextsByEmbedId["get"](var_core_value_sig93D6.embedId) === var_core_value_sig93D6 && this._contextsByEmbedId["delete"](var_core_value_sig93D6.embedId), this._contextsByHostAnchorId["get"](var_core_value_sig93D6.descriptor["hostAnchorId"]) === var_core_value_sig93D6 && this._contextsByHostAnchorId["delete"](var_core_value_sig93D6.descriptor["hostAnchorId"]), this._contextsByChildUnitId["get"](var_core_value_sig93D6.childUnitId) === var_core_value_sig93D6 && this._contextsByChildUnitId["delete"](var_core_value_sig93D6.childUnitId);
    });
  }
  getContextByEmbedId(var_core_value_sigDD05) {
    return this._contextsByEmbedId["get"](var_core_value_sigDD05);
  }
  getContextByHostAnchorId(var_core_value_sig3932) {
    return this._contextsByHostAnchorId["get"](var_core_value_sig3932);
  }
  getContextByChildUnitId(var_core_value_sig48B2) {
    return this._contextsByChildUnitId["get"](var_core_value_sig48B2);
  }
  capture(var_core_value_sig57DF) {
    let var_core_value_sigC985 = this.get(var_core_value_sig57DF.childType);
    return var_core_value_sigC985 ? Promise.resolve(var_core_value_sigC985.capture(var_core_value_sig57DF)) : Promise.resolve(Xc(var_core_value_sig57DF));
  }
  captureByEmbedId(var_core_value_sig8DA6) {
    let var_core_value_sigCA69 = this.getContextByEmbedId(var_core_value_sig8DA6);
    return var_core_value_sigCA69 ? this.capture(var_core_value_sigCA69) : Promise.resolve(undefined);
  }
  captureByHostAnchorId(var_core_value_sigB77C) {
    let var_core_value_sig9AFF = this.getContextByHostAnchorId(var_core_value_sigB77C);
    return var_core_value_sig9AFF ? this.capture(var_core_value_sig9AFF) : Promise.resolve(undefined);
  }
  captureByChildUnitId(var_core_value_sig3545) {
    let var_core_value_sig5EE4 = this.getContextByChildUnitId(var_core_value_sig3545);
    return var_core_value_sig5EE4 ? this.capture(var_core_value_sig5EE4) : Promise.resolve(undefined);
  }
};
function Xc(var_core_value_sig9D16) {
  let var_core_value_sig540B = Qc(var_core_value_sig9D16);
  if (var_core_value_sig540B) try {
    return var_core_value_sig540B.toDataURL("image/png");
  } catch {
    return;
  }
}
const Zc = "univer-embed-print-hide-scrollbars";
function Qc(var_core_value_sig70CA, var_core_value_sig19C7 = false) {
  if (!var_core_value_sig70CA.renderScope) return;
  let var_core_value_sigEC6A = [var_core_value_sig70CA.renderScope["canvasRoot"], var_core_value_sig70CA.renderScope["contentRoot"], var_core_value_sig70CA.renderScope["rootElement"]].filter(var_core_value_sig7EAB => !!var_core_value_sig7EAB),
    var_core_value_sig3DA8 = Array.from(new Set(var_core_value_sigEC6A.flatMap(var_core_value_sig56B9 => Array.from(var_core_value_sig56B9.querySelectorAll("canvas"))))).filter(var_core_value_sig90CF => var_core_value_sig90CF.width > 1 && var_core_value_sig90CF.height > 1).sort((var_core_value_sigA386, var_core_value_sigCD6E) => var_core_value_sigCD6E.width * var_core_value_sigCD6E.height - var_core_value_sigA386.width * var_core_value_sigA386.height);
  for (let var_core_value_sigFD9D of var_core_value_sig3DA8) {
    if (var_core_value_sig19C7) return var_core_value_sigFD9D;
    try {
      return var_core_value_sigFD9D.toDataURL("image/png"), var_core_value_sigFD9D;
    } catch {}
  }
}
function $c(var_core_value_sig2F57) {
  try {
    var var_core_value_sig115C;
    return el((((var_core_value_sig115C = var_core_value_sig2F57.runtimeScope) == null ? undefined : var_core_value_sig115C.injector) ?? var_core_value_sig2F57.injector).get(var_core_value_sigE391).getRenderUnitById(var_core_value_sig2F57.childUnitId) ?? undefined, rl(var_core_value_sig2F57));
  } catch {
    return el(undefined, rl(var_core_value_sig2F57));
  }
}
function el(var_core_value_sig79B6, var_core_value_sigA36D = []) {
  let var_core_value_sig1DE9 = nl(var_core_value_sig79B6 == null ? undefined : var_core_value_sig79B6.scene),
    var_core_value_sig1DE4 = var_core_value_sig1DE9.flatMap(var_core_value_sigA2A4 => {
      var var_core_value_sigA1AC;
      return ((var_core_value_sigA1AC = var_core_value_sigA2A4.getViewports) == null ? undefined : var_core_value_sigA1AC.call(var_core_value_sigA2A4)) ?? [];
    }).map(var_core_value_sig6180 => {
      var var_core_value_sigB93D;
      return (var_core_value_sigB93D = var_core_value_sig6180.getScrollBar) == null ? undefined : var_core_value_sigB93D.call(var_core_value_sig6180);
    }).filter(var_core_value_sigB17C => !!var_core_value_sigB17C).map(var_core_value_sig69B6 => ({
      scrollBar: var_core_value_sig69B6,
      enableHorizontal: var_core_value_sig69B6.enableHorizontal,
      enableVertical: var_core_value_sig69B6.enableVertical
    })),
    var_core_value_sig6709 = var_core_value_sig1DE9.flatMap(var_core_value_sig708D => {
      var var_core_value_sig1ED2;
      return ((var_core_value_sig1ED2 = var_core_value_sig708D.getAllObjects) == null ? undefined : var_core_value_sig1ED2.call(var_core_value_sig708D)) ?? [];
    }).filter(var_core_value_sig94C1 => var_core_value_sig94C1.oKey === "board-viewport-bar-object").map(var_core_value_sigABAC => ({
      object: var_core_value_sigABAC,
      visible: var_core_value_sigABAC.visible
    })),
    var_core_value_sigA9B7 = Array.from(new Set(var_core_value_sigA36D)),
    var_core_value_sigD810 = var_core_value_sigA9B7.map(var_core_value_sigFAE6 => ({
      element: var_core_value_sigFAE6,
      overflow: var_core_value_sigFAE6.style["overflow"],
      hadHideClass: var_core_value_sigFAE6.classList["contains"](Zc)
    }));
  var_core_value_sig1DE4.forEach(({
    scrollBar: var_core_value_sig06AC
  }) => {
    var_core_value_sig06AC.enableHorizontal = false, var_core_value_sig06AC.enableVertical = false;
  }), var_core_value_sig6709.forEach(({
    object: var_core_value_sig57E2
  }) => {
    var var_core_value_sig01FC;
    return (var_core_value_sig01FC = var_core_value_sig57E2.hide) == null ? undefined : var_core_value_sig01FC.call(var_core_value_sig57E2);
  }), var_core_value_sigA9B7.forEach(var_core_value_sig10FC => {
    var_core_value_sig10FC.style["overflow"] = "hidden", var_core_value_sig10FC.classList["add"](Zc);
  }), il(var_core_value_sigA9B7).forEach(var_core_value_sig5374 => var_core_value_sig5374.dispatchEvent(new MouseEvent("mouseleave"))), var_core_value_sig1DE9.forEach(al);
  let var_core_value_sig0CBE = false;
  return () => {
    var_core_value_sig0CBE || (var_core_value_sig0CBE = true, var_core_value_sig1DE4.forEach(({
      scrollBar: var_core_value_sig37A8,
      enableHorizontal: var_core_value_sigA90D,
      enableVertical: var_core_value_sig7A3C
    }) => {
      var_core_value_sig37A8.enableHorizontal = var_core_value_sigA90D, var_core_value_sig37A8.enableVertical = var_core_value_sig7A3C;
    }), var_core_value_sig6709.forEach(({
      object: var_core_value_sig0511,
      visible: var_core_value_sig1F44
    }) => {
      if (var_core_value_sig1F44) {
        var var_core_value_sigCB04;
        (var_core_value_sigCB04 = var_core_value_sig0511.show) == null || var_core_value_sigCB04.call(var_core_value_sig0511);
      } else {
        var var_core_value_sig947E;
        (var_core_value_sig947E = var_core_value_sig0511.hide) == null || var_core_value_sig947E.call(var_core_value_sig0511);
      }
    }), var_core_value_sigD810.forEach(({
      element: var_core_value_sig4545,
      overflow: var_core_value_sigF39A,
      hadHideClass: var_core_value_sigF79C
    }) => {
      var_core_value_sig4545.style["overflow"] = var_core_value_sigF39A, var_core_value_sigF79C || var_core_value_sig4545.classList["remove"](Zc);
    }), var_core_value_sig1DE9.forEach(al));
  };
}
function tl(var_core_value_sig8085) {
  return var_core_value_sig8085 === var_core_value_sigC0F3.UNIVER_BASE ? new Promise(var_core_value_sigB66D => globalThis.setTimeout(var_core_value_sigB66D, 920)) : Promise.resolve();
}
function nl(var_core_value_sigC59C) {
  if (!var_core_value_sigC59C) return [];
  let var_core_value_sigB778 = [],
    var_core_value_sig54E6 = new Set(),
    var_core_value_sigE9DB = var_core_value_sigD0F0 => {
      var var_core_value_sig8E31;
      var_core_value_sig54E6.has(var_core_value_sigD0F0) || (var_core_value_sig54E6.add(var_core_value_sigD0F0), var_core_value_sigB778.push(var_core_value_sigD0F0), (var_core_value_sig8E31 = var_core_value_sigD0F0.getAllObjects) == null || var_core_value_sig8E31.call(var_core_value_sigD0F0).forEach(var_core_value_sig2E54 => {
        var var_core_value_sig7658;
        (var_core_value_sig7658 = var_core_value_sig2E54.getSubScenes) == null || var_core_value_sig7658.call(var_core_value_sig2E54).forEach(var_core_value_sigE9DB);
      }));
    };
  return var_core_value_sigE9DB(var_core_value_sigC59C), var_core_value_sigB778;
}
function rl(var_core_value_sigE26F) {
  return [var_core_value_sigE26F.container, var_core_value_sigE26F.renderScope["rootElement"], var_core_value_sigE26F.renderScope["contentRoot"], var_core_value_sigE26F.renderScope["canvasRoot"]].filter(var_core_value_sig8339 => !!var_core_value_sig8339);
}
function il(var_core_value_sig8C20) {
  return Array.from(new Set(var_core_value_sig8C20.flatMap(var_core_value_sigA01E => [...(var_core_value_sigA01E instanceof HTMLCanvasElement ? [var_core_value_sigA01E] : []), ...Array.from(var_core_value_sigA01E.querySelectorAll("canvas"))])));
}
function al(var_core_value_sigBB73) {
  var var_core_value_sig2E4E, var_core_value_sig5E36;
  var_core_value_sigBB73 == null || (var_core_value_sig2E4E = var_core_value_sigBB73.makeDirty) == null || var_core_value_sig2E4E.call(var_core_value_sigBB73, true), var_core_value_sigBB73 == null || (var_core_value_sig5E36 = var_core_value_sigBB73.render) == null || var_core_value_sig5E36.call(var_core_value_sigBB73);
}
const ol = "EMBED_DUPLICATE_CHILD_UNIT";
var sl = class extends Error {
  constructor(var_core_value_sigA41E, var_core_value_sig939C) {
    super(ol + ":\x20" + var_core_value_sigA41E), this.childUnitId = var_core_value_sigA41E, this.existingEmbedId = var_core_value_sig939C, Y(this, "code", ol), this.name = "EmbedDuplicateChildUnitError";
  }
};
let cl = class {
  constructor(var_core_value_sigA49E, var_core_value_sig6DEB, var_core_value_sig2F0D, var_core_value_sig5141, var_core_value_sigA9E0, var_core_value_sig751D, var_core_value_sig2E9A, var_core_value_sigE105) {
    this._hostContainerRegistry = var_core_value_sigA49E, this._childViewRegistry = var_core_value_sig6DEB, this._overlayRootService = var_core_value_sig2F0D, this._sceneCanvasCaptureService = var_core_value_sig5141, this._univerInstanceService = var_core_value_sigA9E0, this._floatingActiveService = var_core_value_sig751D, this._runtimePolicyService = var_core_value_sig2E9A, this._injector = var_core_value_sigE105, Y(this, "_sessions", new Map()), Y(this, "_tabFocusLeases", new Map()), Y(this, "_tabHostRenderLeases", new Map());
  }
  mount(var_core_value_sig0BD6) {
    return this._mountResolvedHost(var_core_value_sig0BD6);
  }
  mountIntoHostElement(var_core_value_sig3070, var_core_value_sigC66D, var_core_value_sig8EC5) {
    return this._mountResolvedHost(var_core_value_sig3070, {
      hostElement: var_core_value_sigC66D,
      runtimeRoots: var_core_value_sig8EC5
    });
  }
  _mountResolvedHost(var_core_value_sig1056, var_core_value_sig6EE5) {
    var var_core_value_sig9DD9, var_core_value_sig09AC;
    if (!var_core_value_sig1056.childUnitId || var_core_value_sig1056.childType == null) throw Error("EMBED_MOUNT_CHILD_NOT_RESOLVED");
    this._assertChildUnitAvailable(var_core_value_sig1056), this.unmount(var_core_value_sig1056.embedId);
    let var_core_value_sig1613 = {
        hostUnitId: var_core_value_sig1056.hostUnitId,
        embedId: var_core_value_sig1056.embedId,
        childUnitId: var_core_value_sig1056.childUnitId
      },
      var_core_value_sigADC6 = this._resolveLayout(var_core_value_sig1056),
      var_core_value_sig4620 = this._hostContainerRegistry["get"](var_core_value_sig1056.hostType, var_core_value_sig1056.entry);
    if (!var_core_value_sig4620 || !this._hostContainerRegistry["supports"](var_core_value_sig1056.hostType, var_core_value_sig1056.entry, var_core_value_sigADC6)) throw Error("EMBED_MOUNT_HOST_NOT_REGISTERED");
    let var_core_value_sig07FB = this._runtimePolicyService["canMount"](var_core_value_sig1613),
      var_core_value_sig617E = this._childViewRegistry["get"](var_core_value_sig1056.childType);
    if (var_core_value_sig07FB.allowed && !(var_core_value_sig617E != null && var_core_value_sig617E.supportedLayouts["includes"](var_core_value_sigADC6))) throw Error("EMBED_MOUNT_CHILD_NOT_REGISTERED");
    let var_core_value_sigC85E1 = {
        descriptor: var_core_value_sig1056,
        layout: var_core_value_sigADC6,
        injector: this._injector,
        hostUnitId: var_core_value_sig1056.hostUnitId,
        embedId: var_core_value_sig1056.embedId,
        childUnitId: var_core_value_sig1056.childUnitId,
        childType: var_core_value_sig1056.childType
      },
      var_core_value_sig8293 = [],
      var_core_value_sig050D = var_core_value_sig6EE5 ?? ((var_core_value_sig9DD9 = var_core_value_sig4620.mount) == null ? undefined : var_core_value_sig9DD9.call(var_core_value_sig4620, var_core_value_sigC85E1)),
      var_core_value_sig37AE = this._normalizeHostMountResult(var_core_value_sig050D);
    if (var_core_value_sig37AE.disposable && var_core_value_sig8293.push(var_core_value_sig37AE.disposable), var_core_value_sigC85E1.hostElement = var_core_value_sig37AE.hostElement ?? var_core_value_sigC85E1.hostElement, var_core_value_sigC85E1.container = var_core_value_sigC85E1.hostElement, !var_core_value_sigC85E1.hostElement || !var_core_value_sigC85E1.container) throw [...var_core_value_sig8293].reverse().forEach(var_core_value_sigDCF5 => var_core_value_sigDCF5.dispose()), Error("EMBED_MOUNT_HOST_CONTAINER_NOT_RESOLVED");
    if (var_core_value_sig37AE.runtimeRoots || var_core_value_sig8293.push(hs(var_core_value_sigC85E1.hostElement)), !var_core_value_sig07FB.allowed) return this._mountBlockedRuntime(var_core_value_sig1056, var_core_value_sigADC6, var_core_value_sigC85E1.hostElement, var_core_value_sig37AE.runtimeRoots, var_core_value_sig8293, var_core_value_sig07FB.reason);
    if (!var_core_value_sig617E) throw [...var_core_value_sig8293].reverse().forEach(var_core_value_sigC786 => var_core_value_sigC786.dispose()), Error("EMBED_MOUNT_CHILD_NOT_REGISTERED");
    let {
      renderScope: var_core_value_sig5B51,
      disposable: var_core_value_sig64FF,
      setActive: var_core_value_sig86F4
    } = this._createRenderScope(var_core_value_sig1056, var_core_value_sigADC6, var_core_value_sigC85E1.hostElement, var_core_value_sig37AE.runtimeRoots);
    var_core_value_sig8293.push(var_core_value_sig64FF);
    let var_core_value_sig9E0F = {
        ...var_core_value_sigC85E1,
        hostElement: var_core_value_sigC85E1.hostElement,
        container: var_core_value_sigC85E1.container,
        renderScope: var_core_value_sig5B51
      },
      {
        runtimeScope: var_core_value_sig3A42,
        disposable: var_core_value_sig8802
      } = jc(var_core_value_sig9E0F, var_core_value_sig86F4, var_core_value_sig617E.scopedDependencies),
      var_core_value_sig95D5 = {
        ...var_core_value_sig9E0F,
        runtimeScope: var_core_value_sig3A42
      };
    var_core_value_sig8293.push(var_core_value_sig8802);
    let var_core_value_sigE027 = this._registerRuntimeBoundary(var_core_value_sig1056, var_core_value_sigC85E1.hostElement, var_core_value_sig5B51, var_core_value_sig3A42.roots);
    var_core_value_sigE027 && var_core_value_sig8293.push(var_core_value_sigE027), this._injector["has"](X) && var_core_value_sig8293.push(this._injector["get"](X).registerRuntimeScope({
      embedId: var_core_value_sig1056.embedId,
      hostUnitId: var_core_value_sig1056.hostUnitId,
      childUnitId: var_core_value_sig1056.childUnitId,
      childType: var_core_value_sig1056.childType
    }));
    let var_core_value_sigE537 = var_core_value_sig3A42.injector === var_core_value_sigC85E1.injector ? undefined : var_core_value_sig3A42.instanceService;
    var_core_value_sig8293.push(this._registerChildFocusBridge(var_core_value_sig1056, var_core_value_sigC85E1.hostElement, var_core_value_sig5B51.mode, var_core_value_sigE537)), var_core_value_sig8293.push(this._sceneCanvasCaptureService["registerContext"](var_core_value_sig95D5));
    let var_core_value_sig5D84 = this._createMountFocusRestorer(var_core_value_sig1056),
      var_core_value_sigD120 = (var_core_value_sig09AC = var_core_value_sig617E.mount) == null ? undefined : var_core_value_sig09AC.call(var_core_value_sig617E, var_core_value_sig95D5);
    if (var_core_value_sigD120 && var_core_value_sig8293.push(var_core_value_sigD120), var_core_value_sig8293.push(var_core_value_sig5D84), var_core_value_sig8293.push(this._runtimePolicyService["registerMountedRuntime"](var_core_value_sig1613)), var_core_value_sig5B51.mode === "float") {
      let var_core_value_sigC0D9 = this._mountFloatingMenu(var_core_value_sig95D5);
      var_core_value_sigC0D9 && var_core_value_sig8293.push(var_core_value_sigC0D9);
    }
    let var_core_value_sigAA05 = {
      hostUnitId: var_core_value_sig1056.hostUnitId,
      embedId: var_core_value_sig1056.embedId,
      childUnitId: var_core_value_sig1056.childUnitId,
      childType: var_core_value_sig1056.childType,
      entry: var_core_value_sig1056.entry,
      layout: var_core_value_sigADC6,
      hostElement: var_core_value_sigC85E1.hostElement,
      context: var_core_value_sig95D5
    };
    return this._sessions["set"](var_core_value_sig1056.embedId, {
      session: var_core_value_sigAA05,
      disposables: var_core_value_sig8293,
      setActive: var_core_value_sig86F4
    }), var_core_value_sigADC6 !== "tab-peer" && this._initializeFloatingSessionActiveState(var_core_value_sig1056, var_core_value_sigADC6, var_core_value_sig86F4), var_core_value_sigAA05;
  }
  _mountBlockedRuntime(var_core_value_sigC04C, var_core_value_sig2069, var_core_value_sig5176, var_core_value_sig71A1, var_core_value_sig72AD, var_core_value_sig9ABE) {
    let var_core_value_sig8EF01 = (var_core_value_sig71A1 == null ? undefined : var_core_value_sig71A1.content) ?? ms(var_core_value_sig5176, "data-embed-content-root") ?? var_core_value_sig5176,
      var_core_value_sig234B = ul(var_core_value_sig9ABE);
    var_core_value_sig8EF01.replaceChildren(var_core_value_sig234B), var_core_value_sig72AD.push(var_core_value_sig9BBC(() => {
      var_core_value_sig234B.parentElement === var_core_value_sig8EF01 && var_core_value_sig234B.remove();
    }));
    let var_core_value_sig8169 = {
      hostUnitId: var_core_value_sigC04C.hostUnitId,
      embedId: var_core_value_sigC04C.embedId,
      childUnitId: var_core_value_sigC04C.childUnitId,
      childType: var_core_value_sigC04C.childType,
      entry: var_core_value_sigC04C.entry,
      layout: var_core_value_sig2069,
      hostElement: var_core_value_sig5176
    };
    return this._sessions["set"](var_core_value_sigC04C.embedId, {
      session: var_core_value_sig8169,
      disposables: var_core_value_sig72AD,
      setActive: () => {}
    }), var_core_value_sig8169;
  }
  _initializeFloatingSessionActiveState(var_core_value_sigC5FB, var_core_value_sig5453, var_core_value_sig8725) {
    if (var_core_value_sig5453 !== "tab-peer") {
      if (this._injector["has"](var_core_value_sigB1FB)) {
        let var_core_value_sig48CA = this._injector["get"](var_core_value_sigB1FB).getFocusOwner();
        if ((var_core_value_sig48CA == null ? undefined : var_core_value_sig48CA.hostUnitId) === var_core_value_sigC5FB.hostUnitId) {
          var_core_value_sig8725(var_core_value_sig48CA.embedId === var_core_value_sigC5FB.embedId);
          return;
        }
      }
      var_core_value_sig8725(false);
    }
  }
  unmount(var_core_value_sig513B) {
    let var_core_value_sig5501 = this._sessions["get"](var_core_value_sig513B);
    var_core_value_sig5501 && (this._releaseTabPeerFocusLease(var_core_value_sig513B), this._releaseTabPeerHostRenderLease(var_core_value_sig513B), [...var_core_value_sig5501.disposables].reverse().forEach(var_core_value_sigF0511 => var_core_value_sigF0511.dispose()), this._sessions["delete"](var_core_value_sig513B));
  }
  getSession(var_core_value_sig7784) {
    var var_core_value_sigB706;
    return (var_core_value_sigB706 = this._sessions["get"](var_core_value_sig7784)) == null ? undefined : var_core_value_sigB706.session;
  }
  listSessions() {
    return [...this._sessions["values"]()].map(({
      session: var_core_value_sig5825
    }) => var_core_value_sig5825);
  }
  activateSession(var_core_value_sig5FD01) {
    let var_core_value_sig77E3 = this._sessions["get"](var_core_value_sig5FD01);
    if (var_core_value_sig77E3) {
      if (var_core_value_sig77E3.session["layout"] !== "tab-peer") {
        var var_core_value_sigB071;
        let var_core_value_sig50AF = (var_core_value_sigB071 = this._floatingActiveService["getActive"]()) == null ? undefined : var_core_value_sigB071.embedId;
        this._sessions["forEach"](var_core_value_sig76BA => {
          var var_core_value_sigFBFA;
          if (var_core_value_sig76BA.session["layout"] === "tab-peer" || var_core_value_sig76BA.session["hostUnitId"] !== var_core_value_sig77E3.session["hostUnitId"]) return;
          let var_core_value_sigF602 = var_core_value_sig76BA.session["embedId"] === var_core_value_sig5FD01;
          !var_core_value_sigF602 && (var_core_value_sig76BA.session["embedId"] === var_core_value_sig50AF || ((var_core_value_sigFBFA = var_core_value_sig76BA.session["context"]) == null ? undefined : var_core_value_sigFBFA.renderScope["rootElement"].dataset["embedRenderScopeActive"]) === "true") && this._runChildBeforeDeactivate(var_core_value_sig76BA.session), var_core_value_sig76BA.setActive(var_core_value_sigF602);
        });
        return;
      }
      this._suspendTabPeerHostRender(var_core_value_sig77E3.session), this._sessions["forEach"](var_core_value_sigA942 => {
        var var_core_value_sigA621;
        if (var_core_value_sigA942.session["layout"] !== "tab-peer" || var_core_value_sigA942.session["hostUnitId"] !== var_core_value_sig77E3.session["hostUnitId"]) return;
        let var_core_value_sigBBFF = var_core_value_sigA942.session["embedId"] === var_core_value_sig5FD01;
        !var_core_value_sigBBFF && ((var_core_value_sigA621 = var_core_value_sigA942.session["context"]) == null ? undefined : var_core_value_sigA621.renderScope["rootElement"].dataset["embedRenderScopeActive"]) === "true" && this._runChildBeforeDeactivate(var_core_value_sigA942.session), var_core_value_sigA942.setActive(var_core_value_sigBBFF);
      }), this._focusTabPeerSession(var_core_value_sig77E3.session), this._refreshTabPeerRender(var_core_value_sig77E3.session);
    }
  }
  releaseSessionFocus(var_core_value_sig15FE) {
    let var_core_value_sigCF47 = this._tabFocusLeases["has"](var_core_value_sig15FE);
    return this._releaseTabPeerFocusLease(var_core_value_sig15FE), var_core_value_sigCF47;
  }
  deactivateTabSessions(var_core_value_sigB0F9) {
    let var_core_value_sigAF12 = [];
    return this._sessions["forEach"](var_core_value_sig4EB7 => {
      var_core_value_sig4EB7.session["layout"] === "tab-peer" && (var_core_value_sigB0F9 && var_core_value_sig4EB7.session["embedId"] !== var_core_value_sigB0F9 || (this._runChildBeforeDeactivate(var_core_value_sig4EB7.session), this._releaseTabPeerFocusLease(var_core_value_sig4EB7.session["embedId"]), var_core_value_sig4EB7.setActive(false), this._releaseTabPeerHostRenderLease(var_core_value_sig4EB7.session["embedId"]), var_core_value_sigAF12.push(var_core_value_sig4EB7.session)));
    }), var_core_value_sigAF12;
  }
  deactivateFloatingSession(var_core_value_sigC60C) {
    let var_core_value_sig1C3C = this._sessions["get"](var_core_value_sigC60C);
    if (!(!var_core_value_sig1C3C || var_core_value_sig1C3C.session["layout"] === "tab-peer")) return this._runChildBeforeDeactivate(var_core_value_sig1C3C.session), var_core_value_sig1C3C.setActive(false), var_core_value_sig1C3C.session;
  }
  setActive(var_core_value_sig71CF, var_core_value_sigC341) {
    var var_core_value_sigBA47;
    (var_core_value_sigBA47 = this._sessions["get"](var_core_value_sig71CF)) == null || var_core_value_sigBA47.setActive(var_core_value_sigC341);
  }
  _runChildBeforeDeactivate(var_core_value_sig3DF7) {
    let var_core_value_sigD49F = var_core_value_sig3DF7.context;
    if (!var_core_value_sigD49F) return;
    let var_core_value_sigCECC = this._childViewRegistry["get"](var_core_value_sig3DF7.childType);
    if (var_core_value_sigCECC != null && var_core_value_sigCECC.beforeDeactivate) try {
      var_core_value_sigCECC.beforeDeactivate(var_core_value_sigD49F);
    } catch (var_core_value_sig73AF) {
      console.warn("[embed-ui] failed to deactivate embedded child view", var_core_value_sig73AF);
    }
  }
  _suspendTabPeerHostRender(var_core_value_sig0F47) {
    var var_core_value_sig6B29;
    let var_core_value_sig28E2 = (var_core_value_sig6B29 = var_core_value_sig0F47.context) == null ? undefined : var_core_value_sig6B29.injector;
    if (!(var_core_value_sig28E2 != null && var_core_value_sig28E2.has(var_core_value_sigE391))) return;
    let var_core_value_sig1578 = this._tabHostRenderLeases["get"](var_core_value_sig0F47.hostUnitId);
    if (var_core_value_sig1578) {
      this._tabHostRenderLeases["set"](var_core_value_sig0F47.hostUnitId, {
        ...var_core_value_sig1578,
        embedId: var_core_value_sig0F47.embedId
      });
      return;
    }
    let var_core_value_sig52ED = var_core_value_sig28E2.get(var_core_value_sigE391).getRenderUnitById(var_core_value_sig0F47.hostUnitId);
    if (!var_core_value_sig52ED || var_core_value_sig52ED.isMainScene === false || var_core_value_sig52ED.isDisposed()) return;
    let var_core_value_sig135F = var_core_value_sig52ED.engine["getCanvasElement"]().parentElement;
    var_core_value_sig135F && (var_core_value_sig52ED.deactivate(), var_core_value_sig52ED.engine["unmount"](), this._tabHostRenderLeases["set"](var_core_value_sig0F47.hostUnitId, {
      embedId: var_core_value_sig0F47.embedId,
      render: var_core_value_sig52ED,
      parentElement: var_core_value_sig135F
    }));
  }
  _releaseTabPeerHostRenderLease(var_core_value_sig416D) {
    this._tabHostRenderLeases["forEach"]((var_core_value_sig548A, var_core_value_sigE026) => {
      var_core_value_sig548A.embedId === var_core_value_sig416D && (this._tabHostRenderLeases["delete"](var_core_value_sigE026), !(var_core_value_sig548A.render["isDisposed"]() || !var_core_value_sig548A.parentElement["isConnected"]) && (var_core_value_sig548A.render["engine"].getCanvasElement().parentElement !== var_core_value_sig548A.parentElement && var_core_value_sig548A.render["engine"].mount(var_core_value_sig548A.parentElement), Jc(var_core_value_sig548A.render, {
        activate: true
      })));
    });
  }
  _resolveLayout(var_core_value_sigAD5D) {
    var var_core_value_sig1B8A, var_core_value_sigFB18;
    let var_core_value_sig703C = ((var_core_value_sig1B8A = var_core_value_sigAD5D.sourceMeta) == null ? undefined : var_core_value_sig1B8A.floating) || undefined;
    if (var_core_value_sig703C != null && var_core_value_sig703C.layout) return var_core_value_sig703C.layout;
    let var_core_value_sig96CF = ((var_core_value_sigFB18 = var_core_value_sigAD5D.sourceMeta) == null ? undefined : var_core_value_sigFB18.tab) || undefined;
    if (var_core_value_sig96CF != null && var_core_value_sig96CF.enabled) return "tab-peer";
    throw Error("EMBED_MOUNT_LAYOUT_NOT_RESOLVED");
  }
  _createRenderScope(var_core_value_sig49F1, var_core_value_sig2F7B, var_core_value_sigB0DF, var_core_value_sig2E441) {
    var var_core_value_sig8560, var_core_value_sig138D;
    let var_core_value_sig1E26 = new var_core_value_sig1477(true),
      var_core_value_sig5C6C = var_core_value_sig49F1.hostAnchorId,
      var_core_value_sigBE85 = (var_core_value_sig8560 = var_core_value_sig49F1.sourceMeta) == null ? undefined : var_core_value_sig8560.tab,
      var_core_value_sig56DE = var_core_value_sigBE85 && var_core_value_sigBE85.enabled ? "tab" : (var_core_value_sig138D = var_core_value_sig49F1.sourceMeta) != null && var_core_value_sig138D.floating ? "float" : "inline",
      var_core_value_sig0278 = (var_core_value_sig2E441 == null ? undefined : var_core_value_sig2E441.content) ?? ms(var_core_value_sigB0DF, "data-embed-content-root") ?? var_core_value_sigB0DF,
      var_core_value_sig08A6 = (var_core_value_sig2E441 == null ? undefined : var_core_value_sig2E441.canvas) ?? ms(var_core_value_sigB0DF, "data-embed-canvas-root") ?? var_core_value_sigB0DF,
      var_core_value_sig04E1 = (var_core_value_sig2E441 == null ? undefined : var_core_value_sig2E441.overlay) ?? ms(var_core_value_sigB0DF, "data-embed-overlay-root") ?? var_core_value_sigB0DF,
      var_core_value_sigC504 = (var_core_value_sig2E441 == null ? undefined : var_core_value_sig2E441.popup) ?? ms(var_core_value_sigB0DF, "data-embed-popup-root") ?? var_core_value_sig04E1,
      var_core_value_sig0515 = this._overlayRootService["register"]({
        childUnitId: var_core_value_sig49F1.childUnitId,
        embedId: var_core_value_sig49F1.embedId,
        hostAnchorId: var_core_value_sig5C6C,
        root: var_core_value_sig04E1
      }),
      var_core_value_sig9F34 = var_core_value_sig339E => {
        var_core_value_sig1E26.getValue() !== var_core_value_sig339E && (ll(var_core_value_sigB0DF, var_core_value_sig339E, var_core_value_sig56DE), var_core_value_sig1E26.next(var_core_value_sig339E));
      };
    return ll(var_core_value_sigB0DF, true, var_core_value_sig56DE), {
      renderScope: {
        hostUnitId: var_core_value_sig49F1.hostUnitId,
        hostAnchorId: var_core_value_sig5C6C,
        embedId: var_core_value_sig49F1.embedId,
        childUnitId: var_core_value_sig49F1.childUnitId,
        childType: var_core_value_sig49F1.childType,
        layout: var_core_value_sig2F7B,
        mode: var_core_value_sig56DE,
        rootElement: var_core_value_sigB0DF,
        contentRoot: var_core_value_sig0278,
        canvasRoot: var_core_value_sig08A6,
        overlayRoot: var_core_value_sig04E1,
        popupRoot: var_core_value_sigC504,
        menuOutlet: var_core_value_sig2E441 != null && var_core_value_sig2E441.menuSlot ? {
          container: var_core_value_sig2E441.menuSlot
        } : undefined,
        active$: var_core_value_sig1E26.asObservable()
      },
      disposable: var_core_value_sig9BBC(() => {
        var_core_value_sig0515.dispose(), var_core_value_sig9F34(false), var_core_value_sig1E26.complete();
      }),
      setActive: var_core_value_sig9F34
    };
  }
  _registerRuntimeBoundary(var_core_value_sig0247, var_core_value_sig6030, var_core_value_sig0137, var_core_value_sig14F3) {
    let var_core_value_sig34E8 = this._injector["has"](Es),
      var_core_value_sigCFE7 = this._injector["has"](X);
    if (!var_core_value_sig34E8 && !var_core_value_sigCFE7) return;
    let var_core_value_sigECBC = var_core_value_sig34E8 ? this._injector["get"](Es) : undefined,
      var_core_value_sig65D2 = var_core_value_sigCFE7 ? this._injector["get"](X) : undefined,
      var_core_value_sig4306 = new Map(),
      var_core_value_sigFCD3 = (var_core_value_sig7550, var_core_value_sig2983) => {
        if (!var_core_value_sig7550) return;
        let var_core_value_sigE1B0 = var_core_value_sig4306.get(var_core_value_sig7550);
        (!var_core_value_sigE1B0 || var_core_value_sigE1B0 === "runtime") && var_core_value_sig4306.set(var_core_value_sig7550, var_core_value_sig2983);
      };
    var_core_value_sigFCD3(var_core_value_sig6030, "runtime"), var_core_value_sigFCD3(var_core_value_sig0137.rootElement, "runtime"), var_core_value_sigFCD3(var_core_value_sig0137.contentRoot, "runtime"), var_core_value_sigFCD3(var_core_value_sig0137.canvasRoot, "runtime"), var_core_value_sigFCD3(var_core_value_sig0137.overlayRoot, "runtime"), var_core_value_sigFCD3(var_core_value_sig14F3.root, "runtime"), var_core_value_sigFCD3(var_core_value_sig14F3.content, "runtime"), var_core_value_sigFCD3(var_core_value_sig14F3.canvas, "runtime"), var_core_value_sigFCD3(var_core_value_sig14F3.overlay, "runtime"), var_core_value_sigFCD3(var_core_value_sig0137.popupRoot, "child-popup"), var_core_value_sigFCD3(var_core_value_sig14F3.popup, "child-popup");
    let var_core_value_sig147A = [...var_core_value_sig4306].flatMap(([var_core_value_sigD4FF, var_core_value_sig1E5B]) => [var_core_value_sigECBC == null ? undefined : var_core_value_sigECBC.registerRoot(var_core_value_sig0247.embedId, var_core_value_sigD4FF, var_core_value_sig0247.childUnitId), var_core_value_sig65D2 == null ? undefined : var_core_value_sig65D2.registerElement({
      embedId: var_core_value_sig0247.embedId,
      role: var_core_value_sig1E5B,
      element: var_core_value_sigD4FF
    })].filter(var_core_value_sig8889 => !!var_core_value_sig8889));
    return var_core_value_sig9BBC(() => {
      [...var_core_value_sig147A].reverse().forEach(var_core_value_sig32F8 => var_core_value_sig32F8.dispose());
    });
  }
  _normalizeHostMountResult(var_core_value_sig829F) {
    return var_core_value_sig829F ? "dispose" in var_core_value_sig829F ? {
      disposable: var_core_value_sig829F
    } : {
      hostElement: var_core_value_sig829F.hostElement,
      runtimeRoots: var_core_value_sig829F.runtimeRoots,
      disposable: var_core_value_sig829F.disposable ? var_core_value_sig9BBC(() => {
        var var_core_value_sigB6801;
        return (var_core_value_sigB6801 = var_core_value_sig829F.disposable) == null ? undefined : var_core_value_sigB6801.dispose();
      }) : undefined
    } : {};
  }
  _mountFloatingMenu(var_core_value_sig534C) {
    if (!this._injector["has"](Lc)) return;
    let var_core_value_sigABB7 = this._injector["get"](Lc).get(var_core_value_sig534C.descriptor["hostType"], var_core_value_sig534C.descriptor["entry"], var_core_value_sig534C.childType);
    if (!var_core_value_sigABB7) return;
    let var_core_value_sig9071 = this._floatingActiveService["getActive"](),
      var_core_value_sig01A9 = var_core_value_sigABB7.mount({
        ...var_core_value_sig534C,
        active: var_core_value_sig9071
      });
    return var_core_value_sig01A9 ? var_core_value_sig9BBC(() => var_core_value_sig01A9.dispose()) : undefined;
  }
  _registerChildFocusBridge(var_core_value_sig9477, var_core_value_sig917C, var_core_value_sig27E2, var_core_value_sig10D7) {
    let var_core_value_sig5A1A = this._injector["has"](Es) ? this._injector["get"](Es) : undefined,
      var_core_value_sig77D2 = this._injector["has"](X) ? this._injector["get"](X) : undefined,
      var_core_value_sig625E = var_core_value_sig917C.ownerDocument,
      var_core_value_sig6F04 = [],
      var_core_value_sig48DA = var_core_value_sig27E2 === "float" && var_core_value_sig10D7 ? this._floatingActiveService["active$"].subscribe(() => {
        this._floatingActiveService["getStage"](var_core_value_sig9477.embedId) !== "stage2" && var_core_value_sig10D7.focusUnit(null);
      }) : undefined,
      var_core_value_sigD327 = () => var_core_value_sig27E2 !== "float" || this._floatingActiveService["getStage"](var_core_value_sig9477.embedId) === "stage2",
      var_core_value_sig6694 = (var_core_value_sig1F64, var_core_value_sigDD1C = {}) => {
        let var_core_value_sig2C39 = var_core_value_sigDD1C.focusUnit !== false,
          var_core_value_sigB7D1 = var_core_value_sigDD1C.activateSession !== false,
          var_core_value_sig64F0 = (var_core_value_sig1F64 == null ? undefined : var_core_value_sig1F64.target) instanceof Element ? var_core_value_sig1F64.target : null;
        if (var_core_value_sig64F0 != null && var_core_value_sig64F0.closest('[data-embed-floating-menu="true"], [data-embed-floating-menu-popup="true"], [data-embed-ribbon-override="true"]') || !var_core_value_sig9477.childUnitId || var_core_value_sig9477.childType == null || var_core_value_sig27E2 === "tab" && (var_core_value_sig1F64 == null ? undefined : var_core_value_sig1F64.type) === "focusin" && !this._tabFocusLeases["has"](var_core_value_sig9477.embedId) || !var_core_value_sigD327()) return;
        let var_core_value_sig85B1 = var_core_value_sig27E2 === "tab" && this._injector["has"](var_core_value_sigB1FB) ? this._injector["get"](var_core_value_sigB1FB).getFocusOwner() : null,
          var_core_value_sig3141 = (var_core_value_sig85B1 == null ? undefined : var_core_value_sig85B1.hostUnitId) === var_core_value_sig9477.hostUnitId && var_core_value_sig85B1.embedId === var_core_value_sig9477.embedId && var_core_value_sig85B1.childUnitId === var_core_value_sig9477.childUnitId && var_core_value_sig85B1.childType === var_core_value_sig9477.childType;
        if (var_core_value_sig27E2 === "float" && var_core_value_sig10D7 && (var_core_value_sig10D7.setCurrentUnitForType(var_core_value_sig9477.childUnitId), var_core_value_sig2C39 && var_core_value_sig10D7.focusUnit(var_core_value_sig9477.childUnitId)), var_core_value_sig27E2 === "tab" && this._injector["has"](var_core_value_sig5DF8)) {
          var var_core_value_sig2162, var_core_value_sig2EAD;
          let var_core_value_sig5B67 = this._injector["get"](var_core_value_sig5DF8),
            var_core_value_sig1758 = var_core_value_sig5B67.getCurrentUnitOfType,
            var_core_value_sig4805 = var_core_value_sig5B67.getFocusedUnit;
          (typeof var_core_value_sig1758 != "function" || ((var_core_value_sig2162 = var_core_value_sig1758.call(var_core_value_sig5B67, var_core_value_sig9477.childType)) == null ? undefined : var_core_value_sig2162.getUnitId()) !== var_core_value_sig9477.childUnitId) && var_core_value_sig5B67.setCurrentUnitForType(var_core_value_sig9477.childUnitId), var_core_value_sig2C39 && (typeof var_core_value_sig4805 != "function" || ((var_core_value_sig2EAD = var_core_value_sig4805.call(var_core_value_sig5B67)) == null ? undefined : var_core_value_sig2EAD.getUnitId()) !== var_core_value_sig9477.childUnitId) && var_core_value_sig5B67.focusUnit(var_core_value_sig9477.childUnitId);
        }
        if (var_core_value_sig27E2 === "tab" && this._injector["has"](var_core_value_sigB6A0)) {
          let var_core_value_sigE67E = this._injector["get"](var_core_value_sigB6A0);
          var_core_value_sigE67E.setContextValue(var_core_value_sigFE95, true), var_core_value_sigE67E.setContextValue(var_core_value_sigEFD0, var_core_value_sig9477.childType === var_core_value_sigC0F3.UNIVER_DOC), var_core_value_sigE67E.setContextValue(var_core_value_sigC1C9, var_core_value_sig9477.childType === var_core_value_sigC0F3.UNIVER_SHEET), var_core_value_sigE67E.setContextValue(var_core_value_sig3AA6, var_core_value_sig9477.childType === var_core_value_sigC0F3.UNIVER_SLIDE), var_core_value_sigE67E.setContextValue(var_core_value_sig4842, var_core_value_sig9477.childType === var_core_value_sigC0F3.UNIVER_BOARD);
        }
        if (this._injector["has"](var_core_value_sigB1FB)) {
          let var_core_value_sig2902 = this._injector["get"](var_core_value_sigB1FB),
            var_core_value_sig9989 = {
              hostUnitId: var_core_value_sig9477.hostUnitId,
              embedId: var_core_value_sig9477.embedId,
              childUnitId: var_core_value_sig9477.childUnitId,
              childType: var_core_value_sig9477.childType,
              reason: "pointer"
            },
            var_core_value_sig698E = var_core_value_sig2902.getFocusOwner();
          ((var_core_value_sig698E == null ? undefined : var_core_value_sig698E.hostUnitId) !== var_core_value_sig9989.hostUnitId || var_core_value_sig698E.embedId !== var_core_value_sig9989.embedId || var_core_value_sig698E.childUnitId !== var_core_value_sig9989.childUnitId || var_core_value_sig698E.childType !== var_core_value_sig9989.childType || var_core_value_sig698E.reason !== var_core_value_sig9989.reason) && var_core_value_sig2902.setFocusOwner(var_core_value_sig9989);
        }
        var_core_value_sigB7D1 && (var_core_value_sig27E2 === "tab" && var_core_value_sig917C.dataset["embedRenderScopeActive"] === "true" && this._tabFocusLeases["has"](var_core_value_sig9477.embedId) && ((var_core_value_sig1F64 == null ? undefined : var_core_value_sig1F64.type) === "pointerdown" || var_core_value_sig3141) || this.activateSession(var_core_value_sig9477.embedId));
      },
      var_core_value_sig2A21 = var_core_value_sig6774 => {
        let var_core_value_sig340D = var_core_value_sig6774.target instanceof Element ? var_core_value_sig6774.target : null;
        if (!var_core_value_sig340D || var_core_value_sig917C.contains(var_core_value_sig340D) || !(var_core_value_sig5A1A != null && var_core_value_sig5A1A.contains(var_core_value_sig9477.embedId, var_core_value_sig340D, var_core_value_sig6774) || var_core_value_sig77D2 != null && var_core_value_sig77D2.containsElement(var_core_value_sig9477.embedId, var_core_value_sig340D, var_core_value_sig6774))) return;
        var_core_value_sig6694(var_core_value_sig6774, {
          focusUnit: false,
          activateSession: false
        });
        let var_core_value_sig82D4 = var_core_value_sig625E.defaultView;
        var_core_value_sig82D4 && var_core_value_sig6F04.push(var_core_value_sig82D4.setTimeout(() => var_core_value_sig6694(var_core_value_sig6774, {
          focusUnit: false,
          activateSession: false
        }), 0));
      };
    return var_core_value_sig917C.addEventListener("pointerdown", var_core_value_sig6694, {
      capture: true
    }), var_core_value_sig917C.addEventListener("focusin", var_core_value_sig6694), var_core_value_sig625E.addEventListener("pointerdown", var_core_value_sig2A21, {
      capture: true
    }), var_core_value_sig625E.addEventListener("focusin", var_core_value_sig2A21, {
      capture: true
    }), var_core_value_sig9BBC(() => {
      var_core_value_sig917C.removeEventListener("pointerdown", var_core_value_sig6694, {
        capture: true
      }), var_core_value_sig917C.removeEventListener("focusin", var_core_value_sig6694), var_core_value_sig625E.removeEventListener("pointerdown", var_core_value_sig2A21, {
        capture: true
      }), var_core_value_sig625E.removeEventListener("focusin", var_core_value_sig2A21, {
        capture: true
      }), var_core_value_sig6F04.forEach(var_core_value_sig2809 => {
        var var_core_value_sig2DAB;
        return (var_core_value_sig2DAB = var_core_value_sig625E.defaultView) == null ? undefined : var_core_value_sig2DAB.clearTimeout(var_core_value_sig2809);
      }), var_core_value_sig48DA == null || var_core_value_sig48DA.unsubscribe();
    });
  }
  _focusTabPeerSession(var_core_value_sig0836) {
    if (this._activateTabPeerFocusLease(var_core_value_sig0836), this._injector["has"](var_core_value_sig5DF8)) {
      let var_core_value_sigBDE4 = this._injector["get"](var_core_value_sig5DF8);
      var_core_value_sigBDE4.setCurrentUnitForType(var_core_value_sig0836.childUnitId), var_core_value_sigBDE4.focusUnit(var_core_value_sig0836.childUnitId);
    }
    if (this._injector["has"](var_core_value_sigB6A0)) {
      let var_core_value_sig7DF1 = this._injector["get"](var_core_value_sigB6A0);
      var_core_value_sig7DF1.setContextValue(var_core_value_sigFE95, true), var_core_value_sig7DF1.setContextValue(var_core_value_sigEFD0, var_core_value_sig0836.childType === var_core_value_sigC0F3.UNIVER_DOC), var_core_value_sig7DF1.setContextValue(var_core_value_sigC1C9, var_core_value_sig0836.childType === var_core_value_sigC0F3.UNIVER_SHEET), var_core_value_sig7DF1.setContextValue(var_core_value_sig3AA6, var_core_value_sig0836.childType === var_core_value_sigC0F3.UNIVER_SLIDE), var_core_value_sig7DF1.setContextValue(var_core_value_sig4842, var_core_value_sig0836.childType === var_core_value_sigC0F3.UNIVER_BOARD);
    }
    this._injector["has"](var_core_value_sigB1FB) && this._injector["get"](var_core_value_sigB1FB).setFocusOwner({
      hostUnitId: var_core_value_sig0836.hostUnitId,
      embedId: var_core_value_sig0836.embedId,
      childUnitId: var_core_value_sig0836.childUnitId,
      childType: var_core_value_sig0836.childType,
      reason: "keyboard"
    });
  }
  _refreshTabPeerRender(var_core_value_sigD95C1) {
    var var_core_value_sig692E;
    let var_core_value_sig3FAF = (var_core_value_sig692E = var_core_value_sigD95C1.context) == null ? undefined : var_core_value_sig692E.injector;
    if (!(var_core_value_sig3FAF != null && var_core_value_sig3FAF.has(var_core_value_sigE391))) return;
    let var_core_value_sig378B = var_core_value_sig3FAF.get(var_core_value_sigE391).getRenderUnitById(var_core_value_sigD95C1.childUnitId);
    (var_core_value_sig378B == null ? undefined : var_core_value_sig378B.isMainScene) === false && Jc(var_core_value_sig378B, {
      activate: true
    });
  }
  _activateTabPeerFocusLease(var_core_value_sigDE50) {
    this._releaseTabPeerFocusLeasesForHost(var_core_value_sigDE50.hostUnitId, var_core_value_sigDE50.embedId), this._releaseTabPeerFocusLease(var_core_value_sigDE50.embedId);
    let var_core_value_sig3094 = [];
    if (this._injector["has"](X) && var_core_value_sig3094.push(this._injector["get"](X).acquireLease({
      embedId: var_core_value_sigDE50.embedId,
      role: "child-session",
      owner: "tab-peer-runtime",
      sessionMode: "child-tab",
      hostUnitId: var_core_value_sigDE50.hostUnitId,
      childUnitId: var_core_value_sigDE50.childUnitId,
      childType: var_core_value_sigDE50.childType
    })), this._injector["has"](Es)) {
      var var_core_value_sig86CC, var_core_value_sig7868;
      var_core_value_sig3094.push(this._injector["get"](Es).activatePortalScope(var_core_value_sigDE50.embedId, ((var_core_value_sig86CC = var_core_value_sigDE50.hostElement) == null ? undefined : var_core_value_sig86CC.ownerDocument) ?? ((var_core_value_sig7868 = var_core_value_sigDE50.context) == null ? undefined : var_core_value_sig7868.renderScope["rootElement"].ownerDocument), {
        includeAppShellEditorPortal: var_core_value_sigDE50.childType === var_core_value_sigC0F3.UNIVER_SHEET
      }));
    }
    var_core_value_sig3094.length && this._tabFocusLeases["set"](var_core_value_sigDE50.embedId, {
      hostUnitId: var_core_value_sigDE50.hostUnitId,
      disposable: var_core_value_sig9BBC(() => {
        [...var_core_value_sig3094].reverse().forEach(var_core_value_sig877E => var_core_value_sig877E.dispose());
      })
    });
  }
  _releaseTabPeerFocusLeasesForHost(var_core_value_sig9921, var_core_value_sig59BF) {
    [...this._tabFocusLeases["entries"]()].forEach(([var_core_value_sigDC86, var_core_value_sig0B0C]) => {
      var_core_value_sigDC86 !== var_core_value_sig59BF && var_core_value_sig0B0C.hostUnitId === var_core_value_sig9921 && (var_core_value_sig0B0C.disposable["dispose"](), this._tabFocusLeases["delete"](var_core_value_sigDC86));
    });
  }
  _releaseTabPeerFocusLease(var_core_value_sigF001) {
    let var_core_value_sigE511 = this._tabFocusLeases["get"](var_core_value_sigF001);
    var_core_value_sigE511 && (var_core_value_sigE511.disposable["dispose"](), this._tabFocusLeases["delete"](var_core_value_sigF001));
  }
  _createMountFocusRestorer(var_core_value_sig1C81) {
    var var_core_value_sig2C6A, var_core_value_sig7207;
    if ((var_core_value_sig2C6A = var_core_value_sig1C81.sourceMeta) != null && var_core_value_sig2C6A.tab && var_core_value_sig1C81.sourceMeta["tab"].enabled || !this._injector["has"](var_core_value_sig5DF8) || !var_core_value_sig1C81.childUnitId) return var_core_value_sig9BBC(() => {});
    let var_core_value_sig297F = this._injector["get"](var_core_value_sig5DF8),
      var_core_value_sigA95A = var_core_value_sig297F.getFocusedUnit,
      var_core_value_sig94D6 = var_core_value_sig297F.focusUnit;
    if (typeof var_core_value_sigA95A != "function" || typeof var_core_value_sig94D6 != "function") return var_core_value_sig9BBC(() => {});
    let var_core_value_sigC22E = (var_core_value_sig7207 = var_core_value_sigA95A.call(var_core_value_sig297F)) == null ? undefined : var_core_value_sig7207.getUnitId();
    if (!var_core_value_sigC22E || var_core_value_sigC22E === var_core_value_sig1C81.childUnitId) return var_core_value_sig9BBC(() => {});
    let var_core_value_sig2321 = () => {
        var var_core_value_sigA39E;
        ((var_core_value_sigA39E = var_core_value_sigA95A.call(var_core_value_sig297F)) == null ? undefined : var_core_value_sigA39E.getUnitId()) === var_core_value_sig1C81.childUnitId && var_core_value_sig94D6.call(var_core_value_sig297F, var_core_value_sigC22E);
      },
      var_core_value_sigFF33 = [],
      var_core_value_sig16E0 = [];
    return var_core_value_sig2321(), typeof window < "u" && (var_core_value_sig16E0.push(window.requestAnimationFrame(var_core_value_sig2321)), var_core_value_sigFF33.push(window.setTimeout(var_core_value_sig2321, 0)), var_core_value_sigFF33.push(window.setTimeout(var_core_value_sig2321, 120))), var_core_value_sig9BBC(() => {
      typeof window > "u" || (var_core_value_sig16E0.forEach(var_core_value_sig20C8 => window.cancelAnimationFrame(var_core_value_sig20C8)), var_core_value_sigFF33.forEach(var_core_value_sigE9A7 => window.clearTimeout(var_core_value_sigE9A7)));
    });
  }
  _assertChildUnitAvailable(var_core_value_sig213C) {
    let var_core_value_sig31F8 = [...this._sessions["values"]()].find(({
      session: var_core_value_sigBBEE
    }) => var_core_value_sigBBEE.embedId !== var_core_value_sig213C.embedId && var_core_value_sigBBEE.childUnitId === var_core_value_sig213C.childUnitId);
    if (var_core_value_sig31F8) throw new sl(var_core_value_sig213C.childUnitId, var_core_value_sig31F8.session["embedId"]);
    if (this._univerInstanceService["getUnit"](var_core_value_sig213C.childUnitId, var_core_value_sig213C.childType)) return;
    let var_core_value_sig6905 = this._univerInstanceService["getUnitType"](var_core_value_sig213C.childUnitId);
    throw var_core_value_sig6905 !== var_core_value_sigC0F3.UNRECOGNIZED && var_core_value_sig6905 !== var_core_value_sig213C.childType ? Error("EMBED_MOUNT_CHILD_TYPE_MISMATCH") : Error("EMBED_MOUNT_CHILD_UNIT_NOT_AVAILABLE");
  }
};
cl = $([Q(0, var_core_value_sig205B(Rc)), Q(1, var_core_value_sig205B(Ic)), Q(2, var_core_value_sig205B(zc)), Q(3, var_core_value_sig205B(Yc)), Q(4, var_core_value_sig5DF8), Q(5, var_core_value_sig205B(xs)), Q(6, var_core_value_sig205B(Ds)), Q(7, var_core_value_sig205B(var_core_value_sig8A66))], cl);
function ll(var_core_value_sig9385, var_core_value_sigE5B5, var_core_value_sig8483) {
  if (var_core_value_sig9385.dataset["embedRenderScopeActive"] = var_core_value_sigE5B5 ? "true" : "false", var_core_value_sig8483 !== "tab") {
    var_core_value_sig9385.removeAttribute("inert"), var_core_value_sig9385.removeAttribute("aria-hidden"), var_core_value_sig9385.style["removeProperty"]("display"), var_core_value_sig9385.style["removeProperty"]("pointer-events");
    return;
  }
  if (var_core_value_sig9385.toggleAttribute("inert", !var_core_value_sigE5B5), var_core_value_sigE5B5) {
    var_core_value_sig9385.removeAttribute("aria-hidden"), var_core_value_sig9385.style["removeProperty"]("display"), var_core_value_sig9385.style["removeProperty"]("pointer-events");
    return;
  }
  var_core_value_sig9385.setAttribute("aria-hidden", "true"), var_core_value_sig9385.style["display"] = "none", var_core_value_sig9385.style["pointerEvents"] = "none";
}
function ul(var_core_value_sig7DCC) {
  let var_core_value_sig5C37 = document.createElement("div");
  return var_core_value_sig5C37.dataset["embedRuntimeBlocked"] = var_core_value_sig7DCC ?? "nested", var_core_value_sig5C37.style["cssText"] = ["box-sizing:border-box", "width:100%", "height:100%", "min-height:96px", "display:flex", "align-items:center", "justify-content:center", "padding:16px", "border:1px dashed rgba(99,102,106,.35)", "border-radius:8px", "background:rgba(99,102,106,.06)", "color:rgba(30,34,43,.64)", "font:13px/1.5 sans-serif", "text-align:center"].join(";"), var_core_value_sig5C37.textContent = var_core_value_sig7DCC === "cycle" ? "Nested embed cycle is not supported." : "Nested embed is not supported.", var_core_value_sig5C37;
}
let dl = class extends var_core_value_sigCBDC {
  constructor(var_core_value_sigC3C0, var_core_value_sig1F39, var_core_value_sig9256, var_core_value_sig98A0, var_core_value_sig3EBD, var_core_value_sig1AC3, var_core_value_sig66B8, var_core_value_sig4C7F, var_core_value_sig2543) {
    var var_core_value_sigB230;
    super(), this._univerInstanceService = var_core_value_sigC3C0, this._focusOwnerService = var_core_value_sig1F39, this._hostAdapterRegistry = var_core_value_sig9256, this._menuOverrideService = var_core_value_sig98A0, this._mountService = var_core_value_sig3EBD, this._blockRegistry = var_core_value_sig1AC3, this._floatingActiveService = var_core_value_sig66B8, this._contextService = var_core_value_sig4C7F, this._layoutService = var_core_value_sig2543, Y(this, "_previousChildCurrentUnits", new Map());
    let var_core_value_sig407E = (var_core_value_sigB230 = this._univerInstanceService["focused$"]) == null ? undefined : var_core_value_sigB230.subscribe(var_core_value_sig011D => {
      this._restoreStage2ChildFocusWhenHostRefocuses(var_core_value_sig011D ?? null);
    });
    var_core_value_sig407E && this.disposeWithMe(var_core_value_sig407E);
  }
  activateTab(var_core_value_sig88CB) {
    var var_core_value_sigD615;
    this._assertResolvedChild(var_core_value_sig88CB), this._rememberPreviousChildCurrentUnit(var_core_value_sig88CB), this._hostAdapterRegistry["activateAnchor"]({
      embedId: var_core_value_sig88CB.embedId,
      hostUnitId: var_core_value_sig88CB.hostUnitId,
      hostType: var_core_value_sig88CB.hostType,
      entry: var_core_value_sig88CB.entry,
      hostAnchorId: var_core_value_sig88CB.hostAnchorId,
      descriptor: var_core_value_sig88CB
    }), this._mountService["activateSession"](var_core_value_sig88CB.embedId);
    let var_core_value_sigB708 = this._blockRegistry["get"](var_core_value_sig88CB.childType);
    return this._menuOverrideService["activate"](var_core_value_sig88CB, "tab-active", {
      layoutPolicy: var_core_value_sigB708 == null || (var_core_value_sigD615 = var_core_value_sigB708.layoutPolicy) == null ? undefined : var_core_value_sigD615.tab,
      allowPlaceholder: (var_core_value_sigB708 == null ? undefined : var_core_value_sigB708.hostChromeMode) === "title-only" || (var_core_value_sigB708 == null ? undefined : var_core_value_sigB708.hostHeaderMode) === "placeholder",
      allowHiddenRibbon: (var_core_value_sigB708 == null ? undefined : var_core_value_sigB708.hostChromeMode) === "none"
    });
  }
  activateFloating(var_core_value_sig60EF, var_core_value_sigA6FB, var_core_value_sigD6EA = {}) {
    this._assertResolvedChild(var_core_value_sig60EF);
    let var_core_value_sigA2D3 = this._floatingActiveService["getActive"](),
      var_core_value_sig727A = var_core_value_sigA6FB === "stage2" && (var_core_value_sigA2D3 == null ? undefined : var_core_value_sigA2D3.embedId) === var_core_value_sig60EF.embedId && var_core_value_sigA2D3.childUnitId === var_core_value_sig60EF.childUnitId && var_core_value_sigA2D3.stage === "stage2";
    (var_core_value_sigA2D3 == null ? undefined : var_core_value_sigA2D3.stage) === "stage2" && !var_core_value_sig727A && this._restorePreviousChildCurrentUnit(var_core_value_sigA2D3.embedId), var_core_value_sigA6FB === "stage2" && !var_core_value_sig727A && this._rememberPreviousChildCurrentUnit(var_core_value_sig60EF), this._focusOwnerService["setFocusOwner"]({
      hostUnitId: var_core_value_sig60EF.hostUnitId,
      embedId: var_core_value_sig60EF.embedId,
      childUnitId: var_core_value_sig60EF.childUnitId,
      childType: var_core_value_sig60EF.childType,
      reason: "pointer"
    }), this._mountService["activateSession"](var_core_value_sig60EF.embedId);
    let var_core_value_sig6AF1 = {
      hostUnitId: var_core_value_sig60EF.hostUnitId,
      embedId: var_core_value_sig60EF.embedId,
      childUnitId: var_core_value_sig60EF.childUnitId
    };
    var_core_value_sigA6FB ? this._floatingActiveService["activate"](var_core_value_sig6AF1, var_core_value_sigA6FB) : this._floatingActiveService["activate"](var_core_value_sig6AF1), this._menuOverrideService["clear"](), var_core_value_sigA6FB === "stage2" ? (this._focusUnit(var_core_value_sig60EF.childUnitId, var_core_value_sig60EF.childType, false, var_core_value_sig60EF.embedId), this._scheduleFloatingChildFocus(var_core_value_sig60EF)) : (this._univerInstanceService["setCurrentUnitForType"](var_core_value_sig60EF.hostUnitId), this._univerInstanceService["focusUnit"](var_core_value_sig60EF.hostUnitId));
  }
  focusFloatingRuntime(var_core_value_sig3F6A, var_core_value_sig23B4 = {}) {
    this.activateFloating(var_core_value_sig3F6A, "stage2", var_core_value_sig23B4);
  }
  activateFullscreen(var_core_value_sig350C, var_core_value_sig2335 = {}) {
    this._assertResolvedChild(var_core_value_sig350C), this._focusOwnerService["setFocusOwner"]({
      hostUnitId: var_core_value_sig350C.hostUnitId,
      embedId: var_core_value_sig350C.embedId,
      childUnitId: var_core_value_sig350C.childUnitId,
      childType: var_core_value_sig350C.childType,
      reason: "pointer"
    }), this._focusUnit(var_core_value_sig350C.childUnitId, var_core_value_sig350C.childType, var_core_value_sig2335.focusLayout ?? true, var_core_value_sig350C.embedId);
  }
  focusHostForPassiveRuntime(var_core_value_sig6233) {
    let var_core_value_sig4230 = this._mountService["releaseSessionFocus"](var_core_value_sig6233.embedId);
    this._menuOverrideService["clear"](var_core_value_sig6233.embedId), this._focusOwnerService["clearFocusOwner"](var_core_value_sig6233.embedId), var_core_value_sig4230 && this._previousChildCurrentUnits["has"](var_core_value_sig6233.embedId) && this._restorePreviousChildCurrentUnit(var_core_value_sig6233.embedId, var_core_value_sig6233.childType, var_core_value_sig6233.childUnitId), this._focusUnit(var_core_value_sig6233.hostUnitId, var_core_value_sig6233.hostType, false);
  }
  clearFullscreen(var_core_value_sig6136) {
    let var_core_value_sigD25E = this._focusOwnerService["getFocusOwner"]();
    var_core_value_sigD25E != null && var_core_value_sigD25E.embedId && var_core_value_sigD25E.embedId !== var_core_value_sig6136.embedId || (this._focusOwnerService["clearFocusOwner"](var_core_value_sig6136.embedId), this._univerInstanceService["setCurrentUnitForType"](var_core_value_sig6136.hostUnitId), this._univerInstanceService["focusUnit"](var_core_value_sig6136.hostUnitId), requestAnimationFrame(() => {
      this._focusOwnerService["getFocusOwner"]() || (this._univerInstanceService["focusUnit"](null), this._univerInstanceService["focusUnit"](var_core_value_sig6136.hostUnitId));
    }));
  }
  clearFloating(var_core_value_sigE1BC, var_core_value_sigCF44) {
    let var_core_value_sig3C97 = this._focusOwnerService["getFocusOwner"]();
    if (var_core_value_sigE1BC && var_core_value_sig3C97 != null && var_core_value_sig3C97.embedId && var_core_value_sig3C97.embedId !== var_core_value_sigE1BC) return;
    let var_core_value_sigA920 = this._floatingActiveService["getActive"]();
    if (var_core_value_sigE1BC && !var_core_value_sig3C97 && (var_core_value_sigA920 == null ? undefined : var_core_value_sigA920.embedId) !== var_core_value_sigE1BC && !var_core_value_sigCF44) return;
    let var_core_value_sigAD56 = var_core_value_sigCF44 ?? (var_core_value_sig3C97 == null ? undefined : var_core_value_sig3C97.hostUnitId) ?? (var_core_value_sigA920 == null ? undefined : var_core_value_sigA920.hostUnitId);
    this._floatingActiveService["clear"](var_core_value_sigE1BC), this._focusOwnerService["clearFocusOwner"](var_core_value_sigE1BC), this._menuOverrideService["clear"](var_core_value_sigE1BC), var_core_value_sigE1BC && this._restorePreviousChildCurrentUnit(var_core_value_sigE1BC), var_core_value_sigE1BC && this._mountService["deactivateFloatingSession"](var_core_value_sigE1BC), var_core_value_sigAD56 && (this._univerInstanceService["setCurrentUnitForType"](var_core_value_sigAD56), this._univerInstanceService["focusUnit"](var_core_value_sigAD56), requestAnimationFrame(() => {
      this._focusOwnerService["getFocusOwner"]() || (this._univerInstanceService["focusUnit"](null), this._univerInstanceService["focusUnit"](var_core_value_sigAD56));
    }));
  }
  clearTab(var_core_value_sig0454) {
    this._menuOverrideService["clear"](var_core_value_sig0454), this._focusOwnerService["clearFocusOwner"](var_core_value_sig0454);
    let var_core_value_sigEE1A = this._mountService["deactivateTabSessions"](var_core_value_sig0454);
    var_core_value_sigEE1A.forEach(var_core_value_sig6167 => this._restorePreviousChildCurrentUnit(var_core_value_sig6167.embedId, var_core_value_sig6167.childType, var_core_value_sig6167.childUnitId)), new Set(var_core_value_sigEE1A.map(var_core_value_sig65A1 => var_core_value_sig65A1.hostUnitId)).forEach(var_core_value_sig7F19 => {
      this._univerInstanceService["setCurrentUnitForType"](var_core_value_sig7F19), this._univerInstanceService["focusUnit"](var_core_value_sig7F19);
    });
  }
  _rememberPreviousChildCurrentUnit(var_core_value_sig4107) {
    if (this._previousChildCurrentUnits["has"](var_core_value_sig4107.embedId)) return;
    let var_core_value_sigF35C = var_core_value_sig4107.childType,
      var_core_value_sigEF8D = this._getCurrentUnitId(var_core_value_sigF35C);
    this._previousChildCurrentUnits["set"](var_core_value_sig4107.embedId, {
      childType: var_core_value_sigF35C,
      childUnitId: var_core_value_sig4107.childUnitId,
      unitId: var_core_value_sigEF8D && var_core_value_sigEF8D !== var_core_value_sig4107.childUnitId ? var_core_value_sigEF8D : undefined
    });
  }
  _restorePreviousChildCurrentUnit(var_core_value_sigE025, var_core_value_sigD549, var_core_value_sigC79E) {
    let var_core_value_sig9221 = this._previousChildCurrentUnits["get"](var_core_value_sigE025);
    this._previousChildCurrentUnits["delete"](var_core_value_sigE025);
    let var_core_value_sig0351 = var_core_value_sigD549 ?? (var_core_value_sig9221 == null ? undefined : var_core_value_sig9221.childType),
      var_core_value_sig4686 = var_core_value_sigC79E ?? (var_core_value_sig9221 == null ? undefined : var_core_value_sig9221.childUnitId);
    if (var_core_value_sig0351 == null || !var_core_value_sig4686) return;
    let var_core_value_sig8E1C = (var_core_value_sig9221 == null ? undefined : var_core_value_sig9221.childType) === var_core_value_sig0351 && var_core_value_sig9221.unitId && this._hasUnit(var_core_value_sig9221.unitId, var_core_value_sig0351) ? var_core_value_sig9221.unitId : this._findFallbackUnitId(var_core_value_sig0351, var_core_value_sig4686);
    var_core_value_sig8E1C && this._univerInstanceService["setCurrentUnitForType"](var_core_value_sig8E1C);
  }
  _getCurrentUnitId(var_core_value_sigD719) {
    var var_core_value_sig323C;
    let var_core_value_sig015D = this._univerInstanceService["getCurrentUnitOfType"];
    return var_core_value_sig015D == null || (var_core_value_sig323C = var_core_value_sig015D.call(this._univerInstanceService, var_core_value_sigD719)) == null ? undefined : var_core_value_sig323C.getUnitId();
  }
  _hasUnit(var_core_value_sigBF8B, var_core_value_sigF7CE) {
    let var_core_value_sig7CF1 = this._univerInstanceService["getUnit"];
    return !!(var_core_value_sig7CF1 != null && var_core_value_sig7CF1.call(this._univerInstanceService, var_core_value_sigBF8B, var_core_value_sigF7CE));
  }
  _findFallbackUnitId(var_core_value_sigA552, var_core_value_sigAE32) {
    var var_core_value_sig9B4D;
    let var_core_value_sig2704 = this._univerInstanceService["getAllUnitsForType"];
    return var_core_value_sig2704 == null || (var_core_value_sig9B4D = var_core_value_sig2704.call(this._univerInstanceService, var_core_value_sigA552)) == null || (var_core_value_sig9B4D = var_core_value_sig9B4D.find(var_core_value_sig7827 => var_core_value_sig7827.getUnitId() !== var_core_value_sigAE32)) == null ? undefined : var_core_value_sig9B4D.getUnitId();
  }
  _focusUnit(var_core_value_sigD0CC, var_core_value_sigF347, var_core_value_sig80C6 = true, var_core_value_sigEBFB) {
    let var_core_value_sigF3BF = this._univerInstanceService["getFocusedUnit"];
    if (!var_core_value_sigEBFB) {
      var var_core_value_sigAE58;
      (typeof var_core_value_sigF3BF != "function" || ((var_core_value_sigAE58 = var_core_value_sigF3BF.call(this._univerInstanceService)) == null ? undefined : var_core_value_sigAE58.getUnitId()) !== var_core_value_sigD0CC) && this._univerInstanceService["focusUnit"](var_core_value_sigD0CC), this._setCurrentUnitForType(var_core_value_sigD0CC, var_core_value_sigF347), this._contextService["setContextValue"](var_core_value_sigFE95, true), this._contextService["setContextValue"](var_core_value_sigEFD0, var_core_value_sigF347 === var_core_value_sigC0F3.UNIVER_DOC), this._contextService["setContextValue"](var_core_value_sigC1C9, var_core_value_sigF347 === var_core_value_sigC0F3.UNIVER_SHEET), this._contextService["setContextValue"](var_core_value_sig3AA6, var_core_value_sigF347 === var_core_value_sigC0F3.UNIVER_SLIDE), this._contextService["setContextValue"](var_core_value_sig4842, var_core_value_sigF347 === var_core_value_sigC0F3.UNIVER_BOARD);
    }
    var_core_value_sig80C6 && this._focusLayout();
  }
  _restoreStage2ChildFocusWhenHostRefocuses(var_core_value_sig8E13) {
    let var_core_value_sig3AAF = this._floatingActiveService["getActive"]();
    if ((var_core_value_sig3AAF == null ? undefined : var_core_value_sig3AAF.stage) !== "stage2" || var_core_value_sig8E13 !== var_core_value_sig3AAF.hostUnitId) return;
    let var_core_value_sig134E = this._focusOwnerService["getFocusOwner"]();
    (var_core_value_sig134E == null ? undefined : var_core_value_sig134E.embedId) === var_core_value_sig3AAF.embedId && var_core_value_sig134E.childUnitId === var_core_value_sig3AAF.childUnitId && var_core_value_sig134E.childType != null && this._focusUnit(var_core_value_sig134E.childUnitId, var_core_value_sig134E.childType, false, var_core_value_sig134E.embedId);
  }
  _scheduleFloatingChildFocus(var_core_value_sigA3C0) {
    let var_core_value_sig723F = () => {
      let var_core_value_sig652C = this._floatingActiveService["getActive"]();
      (var_core_value_sig652C == null ? undefined : var_core_value_sig652C.embedId) === var_core_value_sigA3C0.embedId && var_core_value_sig652C.childUnitId === var_core_value_sigA3C0.childUnitId && var_core_value_sig652C.stage === "stage2" && this._focusUnit(var_core_value_sigA3C0.childUnitId, var_core_value_sigA3C0.childType, false, var_core_value_sigA3C0.embedId);
    };
    typeof queueMicrotask == "function" && queueMicrotask(var_core_value_sig723F), requestAnimationFrame(var_core_value_sig723F);
  }
  _setCurrentUnitForType(var_core_value_sigD044, var_core_value_sig9797) {
    var var_core_value_sig8533;
    let var_core_value_sig57C5 = this._univerInstanceService["getCurrentUnitOfType"];
    (typeof var_core_value_sig57C5 != "function" || ((var_core_value_sig8533 = var_core_value_sig57C5.call(this._univerInstanceService, var_core_value_sig9797)) == null ? undefined : var_core_value_sig8533.getUnitId()) !== var_core_value_sigD044) && this._univerInstanceService["setCurrentUnitForType"](var_core_value_sigD044);
  }
  _focusLayout() {
    let var_core_value_sig0DE9 = () => this._layoutService["focus"]();
    var_core_value_sig0DE9(), typeof queueMicrotask == "function" && queueMicrotask(var_core_value_sig0DE9), requestAnimationFrame(var_core_value_sig0DE9);
  }
  _assertResolvedChild(var_core_value_sigB00D) {
    if (!var_core_value_sigB00D.childUnitId || var_core_value_sigB00D.childType == null) throw Error("EMBED_ACTIVATION_CHILD_NOT_RESOLVED");
  }
};
dl = $([Q(0, var_core_value_sig5DF8), Q(1, var_core_value_sig205B(var_core_value_sigB1FB)), Q(2, var_core_value_sig205B(var_core_value_sig67C7)), Q(3, var_core_value_sig205B(Ss)), Q(4, var_core_value_sig205B(cl)), Q(5, var_core_value_sig205B(bs)), Q(6, var_core_value_sig205B(xs)), Q(7, var_core_value_sigB6A0), Q(8, var_core_value_sigBEFB)], dl);
function fl(var_core_value_sigB657) {
  let {
    injector: var_core_value_sig6620,
    children: var_core_value_sigFA86,
    mountContainer: var_core_value_sigC7E1,
    embedId: var_core_value_sigEDC3
  } = var_core_value_sigB657;
  return var_core_value_sig6F03(var_core_value_sigF570(() => var_core_value_sig7A0A(pl, var_core_value_sig6620), [var_core_value_sig6620]), {
    mountContainer: var_core_value_sigC7E1,
    embedId: var_core_value_sigEDC3,
    children: var_core_value_sigFA86
  });
}
function pl(var_core_value_sigA965) {
  let {
      children: var_core_value_sigE243,
      mountContainer: var_core_value_sig2AA5,
      embedId: var_core_value_sig65F4,
      passThroughWheelGestures: var_core_value_sig74FC
    } = var_core_value_sigA965,
    var_core_value_sig107B = var_core_value_sigC7FF(),
    var_core_value_sig9C8C = var_core_value_sigC85E(var_core_value_sig21CF),
    var_core_value_sig0141 = var_core_value_sigF570(() => var_core_value_sig107B.has(var_core_value_sigA873) ? var_core_value_sig107B.get(var_core_value_sigA873) : undefined, [var_core_value_sig107B]),
    var_core_value_sig687E = var_core_value_sig146E(() => var_core_value_sig9C8C.localeChanged$["pipe"](var_core_value_sig5B63(() => var_core_value_sig9C8C.getLocales())), var_core_value_sig9C8C.getLocales(), false, [var_core_value_sig9C8C]),
    var_core_value_sigCDBE1 = var_core_value_sig146E(() => var_core_value_sig9C8C.direction$, var_core_value_sig9C8C.getDirection(), false, [var_core_value_sig9C8C]),
    var_core_value_sig07AB = vl(var_core_value_sig0141),
    var_core_value_sigD6F3 = var_core_value_sig17A6(null),
    var_core_value_sig5CA6 = var_core_value_sigF570(() => var_core_value_sig2AA5 !== undefined || typeof document > "u" ? null : document.createElement("div"), [var_core_value_sig2AA5]),
    var_core_value_sigFA26 = var_core_value_sig2AA5 === undefined ? var_core_value_sig5CA6 : var_core_value_sig2AA5;
  return var_core_value_sigB0BB(() => {
    if (var_core_value_sig5CA6) return document.body["appendChild"](var_core_value_sig5CA6), () => {
      document.body["removeChild"](var_core_value_sig5CA6);
    };
  }, [var_core_value_sig5CA6]), var_core_value_sigB0BB(() => {
    let var_core_value_sig57C8 = var_core_value_sigFA26;
    var_core_value_sig57C8 && var_core_value_sig57C8.setAttribute("dir", var_core_value_sigCDBE1);
  }, [var_core_value_sigCDBE1, var_core_value_sigFA26]), var_core_value_sigB0BB(() => {
    if (!(!var_core_value_sigFA26 || var_core_value_sig74FC)) return var_core_value_sig1D82([var_core_value_sigFA26]);
  }, [var_core_value_sig74FC, var_core_value_sigFA26]), var_core_value_sigB0BB(() => {
    let var_core_value_sigC27D = var_core_value_sigFA26;
    if (!var_core_value_sigC27D || !var_core_value_sig65F4) return;
    let var_core_value_sig7B95 = var_core_value_sigC27D.getAttribute(Z);
    return var_core_value_sigC27D.setAttribute(Z, var_core_value_sig65F4), () => {
      if (var_core_value_sig7B95 == null) {
        var_core_value_sigC27D.removeAttribute(Z);
        return;
      }
      var_core_value_sigC27D.setAttribute(Z, var_core_value_sig7B95);
    };
  }, [var_core_value_sig65F4, var_core_value_sigFA26]), var_core_value_sig6F03(var_core_value_sigE4F9, {
    locale: var_core_value_sig687E == null ? undefined : var_core_value_sig687E.design,
    direction: var_core_value_sigCDBE1,
    mountContainer: var_core_value_sigFA26,
    children: var_core_value_sig6F03("div", {
      ref: var_core_value_sigD6F3,
      className: var_core_value_sig522C("univer-contents", {
        "univer-dark": var_core_value_sig07AB
      }),
      "data-embed-runtime-provider": "true",
      onPointerUpCapture: var_core_value_sig7D59 => {
        let var_core_value_sig5863 = var_core_value_sigD6F3.current,
          var_core_value_sig5BE7 = var_core_value_sig7D59.target;
        if (!var_core_value_sig65F4 || !var_core_value_sig5863) return;
        let var_core_value_sigC74A = () => ml(var_core_value_sig65F4, var_core_value_sig5863, var_core_value_sig5BE7);
        typeof queueMicrotask == "function" ? queueMicrotask(var_core_value_sigC74A) : Promise.resolve().then(var_core_value_sigC74A);
      },
      children: var_core_value_sigE243
    })
  });
}
function ml(var_core_value_sig3D8F, var_core_value_sig9BED, var_core_value_sig5349) {
  let var_core_value_sig8232 = var_core_value_sig9BED.ownerDocument["activeElement"];
  if (gl(var_core_value_sig8232, var_core_value_sig3D8F)) return;
  let var_core_value_sig38F6 = var_core_value_sig5349 instanceof HTMLElement && var_core_value_sig9BED.contains(var_core_value_sig5349) ? var_core_value_sig5349 : null,
    var_core_value_sigBE37 = _l(var_core_value_sig38F6) ? var_core_value_sig38F6 : var_core_value_sig9BED.querySelector('canvas[tabindex], [tabindex]:not([tabindex="-1"])');
  var_core_value_sigBE37 == null || var_core_value_sigBE37.focus({
    preventScroll: true
  });
}
function hl(var_core_value_sigA2BF, var_core_value_sig32BA) {
  gl(var_core_value_sig32BA.ownerDocument["activeElement"], var_core_value_sigA2BF) || (var_core_value_sig32BA.hasAttribute("tabindex") || (var_core_value_sig32BA.tabIndex = -1), var_core_value_sig32BA.focus({
    preventScroll: true
  }));
}
function gl(var_core_value_sig5CFD, var_core_value_sig3EB3) {
  let var_core_value_sig5C7C1 = var_core_value_sig5CFD == null ? undefined : var_core_value_sig5CFD.closest("[" + Z + "]");
  return (var_core_value_sig5C7C1 == null ? undefined : var_core_value_sig5C7C1.getAttribute(Z)) === var_core_value_sig3EB3;
}
function _l(var_core_value_sig89EE) {
  return !!var_core_value_sig89EE && !var_core_value_sig89EE.hasAttribute("disabled") && var_core_value_sig89EE.tabIndex >= 0;
}
function vl(var_core_value_sigCE7B) {
  return var_core_value_sig93A6(var_core_value_sig8F6A => {
    if (!var_core_value_sigCE7B) return () => {};
    let var_core_value_sig46EA = var_core_value_sigCE7B.darkMode$["subscribe"](() => var_core_value_sig8F6A());
    return () => var_core_value_sig46EA.unsubscribe();
  }, () => (var_core_value_sigCE7B == null ? undefined : var_core_value_sigCE7B.darkMode) ?? false, () => false);
}
const yl = new WeakMap(),
  bl = new WeakMap(),
  xl = new WeakMap();
function Sl(var_core_value_sigBFA9) {
  let var_core_value_sig6DF71 = yl.get(var_core_value_sigBFA9);
  if (var_core_value_sig6DF71) return xl.set(var_core_value_sig6DF71, (xl.get(var_core_value_sig6DF71) ?? 0) + 1), var_core_value_sig6DF71;
  let var_core_value_sig00CB1 = {
    render: var_core_value_sig626C => var_core_value_sig5937(var_core_value_sig626C, var_core_value_sigBFA9)
  };
  return yl.set(var_core_value_sigBFA9, var_core_value_sig00CB1), bl.set(var_core_value_sig00CB1, var_core_value_sigBFA9), xl.set(var_core_value_sig00CB1, 0), var_core_value_sig00CB1;
}
function Cl(var_core_value_sig6F31) {
  let var_core_value_sigFBED = bl.get(var_core_value_sig6F31),
    var_core_value_sigF447 = xl.get(var_core_value_sig6F31) ?? 0;
  globalThis.setTimeout(() => {
    var_core_value_sigFBED && yl.get(var_core_value_sigFBED) !== var_core_value_sig6F31 || (xl.get(var_core_value_sig6F31) ?? 0) === var_core_value_sigF447 && (var_core_value_sigFBED && (yl.delete(var_core_value_sigFBED), bl.delete(var_core_value_sig6F31)), xl.delete(var_core_value_sig6F31), var_core_value_sigFBED && var_core_value_sig0F1A(var_core_value_sigFBED));
  }, 0);
}
function wl(var_core_value_sigF37C) {
  let {
    container: var_core_value_sigE2E6,
    portalContainer: var_core_value_sig8FAB,
    injector: var_core_value_sig3524,
    childType: var_core_value_sigEFDB,
    childUnitId: var_core_value_sigEFD1,
    embedId: var_core_value_sigD10D,
    menuSchema: var_core_value_sigB8F4,
    menuTitlePrefix: var_core_value_sig79CD,
    activeRibbonTab: var_core_value_sig629F,
    headerMenu: var_core_value_sig7290 = false,
    toolbarOnly: var_core_value_sig7591,
    ribbonType: var_core_value_sig607E = "classic",
    ribbonHeaderClassName: var_core_value_sig76A8,
    scopedActionServiceTokens: var_core_value_sigB33E
  } = var_core_value_sigF37C;
  if (var_core_value_sigB8F4 != null && typeof var_core_value_sigB8F4 != "object") return;
  let var_core_value_sig5B4A = Tl(var_core_value_sig3524, {
      childType: var_core_value_sigEFDB,
      childUnitId: var_core_value_sigEFD1,
      embedId: var_core_value_sigD10D,
      menuSchema: var_core_value_sigB8F4,
      menuTitlePrefix: var_core_value_sig79CD,
      activeRibbonTab: var_core_value_sig629F,
      scopedActionServiceTokens: var_core_value_sigB33E
    }),
    var_core_value_sigEF9A = Sl(var_core_value_sigE2E6);
  return var_core_value_sigEF9A.render(var_core_value_sigBCAF(fl, {
    injector: var_core_value_sig5B4A.injector,
    mountContainer: var_core_value_sig8FAB ?? var_core_value_sigE2E6,
    embedId: var_core_value_sigD10D
  }, var_core_value_sigBCAF(var_core_value_sig5810, {
    ribbonType: var_core_value_sig607E,
    headerMenu: var_core_value_sig7290,
    toolbarOnly: var_core_value_sig7591,
    headerClassName: var_core_value_sig76A8
  }))), var_core_value_sig9BBC(() => {
    Cl(var_core_value_sigEF9A), var_core_value_sig5B4A.disposable["dispose"]();
  });
}
function Tl(var_core_value_sigB040, var_core_value_sig1344) {
  let {
      childType: var_core_value_sig01B7,
      childUnitId: var_core_value_sig5392,
      embedId: var_core_value_sig2473,
      menuSchema: var_core_value_sig4FB1,
      menuTitlePrefix: var_core_value_sig3A0E,
      activeRibbonTab: var_core_value_sig7ED7,
      scopedActionServiceTokens: var_core_value_sigDF9C
    } = var_core_value_sig1344,
    var_core_value_sigCEE6 = var_core_value_sigB040.get(var_core_value_sig5DF8),
    var_core_value_sig3CB8 = Ol(var_core_value_sigB040).get(var_core_value_sig5DF8),
    var_core_value_sig3EF5 = Nl(var_core_value_sigCEE6, var_core_value_sig01B7, var_core_value_sig5392),
    var_core_value_sigD0FA = new WeakMap(),
    var_core_value_sig7701,
    var_core_value_sig548B = Ll(var_core_value_sigB040.get(var_core_value_sigDFF6), var_core_value_sig3CB8, var_core_value_sig01B7, var_core_value_sig5392, var_core_value_sig2473, () => var_core_value_sig7701),
    var_core_value_sig7D37 = var_core_value_sig5392 && var_core_value_sigB040.has(var_core_value_sigB6A0) ? Pl(var_core_value_sigB040.get(var_core_value_sigB6A0), var_core_value_sig01B7) : undefined,
    var_core_value_sig781D = new Map([[var_core_value_sig5DF8, var_core_value_sig3EF5], [var_core_value_sigDFF6, var_core_value_sig548B], ...(var_core_value_sig7D37 ? [[var_core_value_sigB6A0, var_core_value_sig7D37]] : [])]);
  var_core_value_sigB040.has(var_core_value_sig7B6F) && var_core_value_sig781D.set(var_core_value_sig7B6F, rc(var_core_value_sigB040.get(var_core_value_sig7B6F))), new Set(var_core_value_sigDF9C ?? []).forEach(var_core_value_sig9077 => {
    var_core_value_sig5392 && var_core_value_sigB040.has(var_core_value_sig9077) && var_core_value_sig781D.set(var_core_value_sig9077, zl(var_core_value_sigB040.get(var_core_value_sig9077), var_core_value_sig3CB8, var_core_value_sig01B7, var_core_value_sig5392, var_core_value_sig2473, () => var_core_value_sig7701, var_core_value_sigD0FA));
  }), var_core_value_sig7701 = ac(var_core_value_sigB040, var_core_value_sig781D);
  let {
      menuManager: var_core_value_sig6DD6,
      disposable: var_core_value_sig824C
    } = El(var_core_value_sigB040, var_core_value_sig7701, var_core_value_sig4FB1, var_core_value_sig3A0E),
    var_core_value_sig8C7D = new var_core_value_sig0C71(var_core_value_sig6DD6, var_core_value_sig3EF5);
  var_core_value_sig7ED7 && var_core_value_sig8C7D.setActivatedTab(var_core_value_sig7ED7);
  let var_core_value_sig46B1 = var_core_value_sig3A0E ? kl(var_core_value_sig8C7D, var_core_value_sig3A0E, var_core_value_sigB040) : var_core_value_sig8C7D;
  var_core_value_sig7701.add([var_core_value_sigB2B1, {
    useValue: var_core_value_sig6DD6
  }]), var_core_value_sig7701.add([var_core_value_sig4CE4, {
    useValue: var_core_value_sig46B1
  }]);
  let var_core_value_sigC5AE = Dl(var_core_value_sigB040, var_core_value_sig8C7D, var_core_value_sig6DD6, {
    embedId: var_core_value_sig2473,
    childUnitId: var_core_value_sig5392
  });
  return {
    injector: var_core_value_sig7701,
    ribbonService: var_core_value_sig46B1,
    disposable: var_core_value_sig9BBC(() => {
      var_core_value_sigC5AE == null || var_core_value_sigC5AE.dispose(), var_core_value_sig8C7D.dispose(), var_core_value_sig824C == null || var_core_value_sig824C.dispose(), var_core_value_sig7701.dispose();
    })
  };
}
function El(var_core_value_sigA2DD, var_core_value_sigB95A, var_core_value_sig7092, var_core_value_sig537D) {
  if (var_core_value_sig7092 && typeof var_core_value_sig7092 == "object") {
    let var_core_value_sigC76C = new var_core_value_sigB830(var_core_value_sigB95A, var_core_value_sigB95A.get(var_core_value_sig7B6F));
    return var_core_value_sigC76C.mergeMenu(jl(var_core_value_sig7092, var_core_value_sig537D, var_core_value_sigA2DD)), {
      menuManager: Tc(var_core_value_sigC76C),
      disposable: var_core_value_sigC76C
    };
  }
  let var_core_value_sig300A = var_core_value_sigA2DD.get(var_core_value_sigB2B1),
    var_core_value_sig014D = var_core_value_sig300A.createScoped;
  return {
    menuManager: Tc(typeof var_core_value_sig014D == "function" ? var_core_value_sig014D.call(var_core_value_sig300A, var_core_value_sigB95A) : var_core_value_sig300A)
  };
}
function Dl(var_core_value_sig2768, var_core_value_sigA179, var_core_value_sig93D0, var_core_value_sig68061) {
  let {
    embedId: var_core_value_sig6D2F,
    childUnitId: var_core_value_sig7367
  } = var_core_value_sig68061;
  if (!var_core_value_sig6D2F || !var_core_value_sig7367) return;
  let var_core_value_sigE7CE = Ol(var_core_value_sig2768);
  if (!var_core_value_sigE7CE.has(var_core_value_sig4CE4) || !var_core_value_sigE7CE.has(X)) return;
  let var_core_value_sigA430 = var_core_value_sigE7CE.get(var_core_value_sig4CE4),
    var_core_value_sigA07B = var_core_value_sigE7CE.get(X),
    var_core_value_sigE9BA = new Set(),
    var_core_value_sig6083 = var_core_value_sig1654([var_core_value_sigA430.ribbon$, var_core_value_sigA430.activatedTab$, var_core_value_sig93D0.menuChanged$["pipe"](var_core_value_sigC101(undefined)), var_core_value_sigE85F(var_core_value_sigA07B.runtimeFocusChanged$, var_core_value_sigA07B.runtimeSessionChanged$).pipe(var_core_value_sigC101(undefined))]).subscribe(([var_core_value_sigB23A, var_core_value_sigBA66]) => {
      let var_core_value_sig3DF0 = var_core_value_sigA07B.resolveActiveChildSessionRuntimeScope(),
        var_core_value_sig0512 = (var_core_value_sig3DF0 == null ? undefined : var_core_value_sig3DF0.embedId) === var_core_value_sig6D2F && var_core_value_sig3DF0.childUnitId === var_core_value_sig7367 && (var_core_value_sig3DF0.sessionMode === "child-tab" || var_core_value_sig3DF0.sessionMode === "child-fullscreen"),
        var_core_value_sig4B2B = new Set(var_core_value_sig93D0.getMenuByPositionKey(var_core_value_sig5DCB.RIBBON).filter(({
          contextual: var_core_value_sig7E32
        }) => var_core_value_sig7E32).map(({
          key: var_core_value_sig4C07
        }) => var_core_value_sig4C07)),
        var_core_value_sigDF88 = var_core_value_sig0512 ? new Set(var_core_value_sigB23A.filter(({
          contextual: var_core_value_sig79AB,
          key: var_core_value_sig8E74
        }) => var_core_value_sig79AB && var_core_value_sig4B2B.has(var_core_value_sig8E74)).map(({
          key: var_core_value_sig104C
        }) => var_core_value_sig104C)) : new Set();
      var_core_value_sigE9BA.forEach(var_core_value_sig841D => {
        var_core_value_sigDF88.has(var_core_value_sig841D) || var_core_value_sigA179.hideContextualTab(var_core_value_sig841D);
      }), var_core_value_sigDF88.forEach(var_core_value_sig90CB => {
        var_core_value_sigE9BA.has(var_core_value_sig90CB) || var_core_value_sigA179.showContextualTab(var_core_value_sig90CB);
      }), var_core_value_sigDF88.has(var_core_value_sigBA66) && var_core_value_sigA179.setActivatedTab(var_core_value_sigBA66), var_core_value_sigE9BA = var_core_value_sigDF88;
    });
  return var_core_value_sig9BBC(() => {
    var_core_value_sig6083.unsubscribe(), var_core_value_sigE9BA.forEach(var_core_value_sigBDF5 => var_core_value_sigA179.hideContextualTab(var_core_value_sigBDF5)), var_core_value_sigE9BA.clear();
  });
}
function Ol(var_core_value_sig28DE) {
  return var_core_value_sig28DE.__embedSharedRootInjector ?? var_core_value_sig28DE;
}
function kl(var_core_value_sigE1B1, var_core_value_sig5E8D, var_core_value_sig7694) {
  let var_core_value_sigB4EC;
  try {
    var_core_value_sigB4EC = var_core_value_sig7694.get(var_core_value_sig21CF);
  } catch {
    var_core_value_sigB4EC = undefined;
  }
  return {
    ribbon$: var_core_value_sigE1B1.ribbon$["pipe"](var_core_value_sig5B63(var_core_value_sigDB93 => var_core_value_sigDB93.map(var_core_value_sigACC6 => Al(var_core_value_sigACC6, var_core_value_sig5E8D, var_core_value_sigB4EC)))),
    activatedTab$: var_core_value_sigE1B1.activatedTab$,
    collapsedIds$: var_core_value_sigE1B1.collapsedIds$,
    fakeToolbarVisible$: var_core_value_sigE1B1.fakeToolbarVisible$,
    setActivatedTab: var_core_value_sig67CF => var_core_value_sigE1B1.setActivatedTab(var_core_value_sig67CF),
    showContextualTab: (var_core_value_sigCA96, var_core_value_sig6C5E) => var_core_value_sigE1B1.showContextualTab(var_core_value_sigCA96, var_core_value_sig6C5E),
    hideContextualTab: var_core_value_sig4997 => var_core_value_sigE1B1.hideContextualTab(var_core_value_sig4997),
    hideAllContextualTabs: () => var_core_value_sigE1B1.hideAllContextualTabs(),
    setCollapsedIds: var_core_value_sig72901 => var_core_value_sigE1B1.setCollapsedIds(var_core_value_sig72901),
    setFakeToolbarVisible: var_core_value_sigE835 => var_core_value_sigE1B1.setFakeToolbarVisible(var_core_value_sigE835)
  };
}
function Al(var_core_value_sig39E4, var_core_value_sig1199, var_core_value_sigC2D2) {
  let var_core_value_sig976B = var_core_value_sig39E4.title || var_core_value_sig39E4.key,
    var_core_value_sig7EC2 = var_core_value_sigC2D2 ? var_core_value_sigC2D2.t(var_core_value_sig976B) : var_core_value_sig976B;
  return {
    ...var_core_value_sig39E4,
    title: var_core_value_sig1199 + "\x20-\x20" + var_core_value_sig7EC2
  };
}
function jl(var_core_value_sig3D7B, var_core_value_sig5D5E, var_core_value_sigAF62) {
  if (!var_core_value_sig5D5E || !var_core_value_sig3D7B || typeof var_core_value_sig3D7B != "object") return var_core_value_sig3D7B;
  let var_core_value_sigA394 = Ml(var_core_value_sig3D7B),
    var_core_value_sig94AF = var_core_value_sigA394[var_core_value_sig5DCB.RIBBON];
  if (!var_core_value_sig94AF || typeof var_core_value_sig94AF != "object") return var_core_value_sigA394;
  let var_core_value_sigFEB4;
  try {
    var_core_value_sigFEB4 = var_core_value_sigAF62.get(var_core_value_sig21CF);
  } catch {
    var_core_value_sigFEB4 = undefined;
  }
  return Object.values(var_core_value_sig94AF).forEach(var_core_value_sig4644 => {
    if (!var_core_value_sig4644 || typeof var_core_value_sig4644 != "object") return;
    let var_core_value_sig9DED = var_core_value_sig4644,
      var_core_value_sig7DE6 = var_core_value_sig9DED.title;
    var_core_value_sig7DE6 && (var_core_value_sig9DED.title = var_core_value_sig5D5E + " - " + (var_core_value_sigFEB4 ? var_core_value_sigFEB4.t(var_core_value_sig7DE6) : var_core_value_sig7DE6));
  }), var_core_value_sigA394;
}
function Ml(var_core_value_sigFA83) {
  return !var_core_value_sigFA83 || typeof var_core_value_sigFA83 != "object" ? var_core_value_sigFA83 : Array.isArray(var_core_value_sigFA83) ? var_core_value_sigFA83.map(var_core_value_sig120E => Ml(var_core_value_sig120E)) : Object.fromEntries(Object.entries(var_core_value_sigFA83).map(([var_core_value_sigD79B, var_core_value_sig92A3]) => [var_core_value_sigD79B, Ml(var_core_value_sig92A3)]));
}
function Nl(var_core_value_sigA3B2, var_core_value_sig63A2, var_core_value_sig1F1F) {
  let var_core_value_sig32EC = () => var_core_value_sig1F1F ? var_core_value_sigA3B2.getUnit(var_core_value_sig1F1F, var_core_value_sig63A2) : null,
    var_core_value_sig37FF = var_core_value_sig1F1F ? var_core_value_sigE85F(var_core_value_sigDA93(var_core_value_sig1F1F), var_core_value_sigA3B2.getTypeOfUnitAdded$(var_core_value_sig63A2).pipe(var_core_value_sig5B63(() => var_core_value_sig1F1F)), var_core_value_sigA3B2.getTypeOfUnitDisposed$(var_core_value_sig63A2).pipe(var_core_value_sig5B63(() => var_core_value_sig1F1F))) : var_core_value_sigA3B2.focused$;
  return {
    unitAdded$: var_core_value_sigA3B2.unitAdded$,
    getTypeOfUnitAdded$: (...var_core_value_sig8911) => var_core_value_sigA3B2.getTypeOfUnitAdded$(...var_core_value_sig8911),
    __addUnit: (...var_core_value_sig8D1B) => var_core_value_sigA3B2.__addUnit(...var_core_value_sig8D1B),
    unitDisposed$: var_core_value_sigA3B2.unitDisposed$,
    getTypeOfUnitDisposed$: (...var_core_value_sigA915) => var_core_value_sigA3B2.getTypeOfUnitDisposed$(...var_core_value_sigA915),
    focused$: var_core_value_sig37FF,
    get focused() {
      return var_core_value_sig32EC() ?? var_core_value_sigA3B2.getFocusedUnit();
    },
    focusUnit: (...var_core_value_sigE1F7) => var_core_value_sigA3B2.focusUnit(...var_core_value_sigE1F7),
    getFocusedUnit: () => var_core_value_sig32EC() ?? var_core_value_sigA3B2.getFocusedUnit(),
    getCurrentUnitOfType: var_core_value_sig4BE7 => var_core_value_sig4BE7 === var_core_value_sig63A2 && var_core_value_sig1F1F ? var_core_value_sig32EC() : var_core_value_sigA3B2.getCurrentUnitOfType(var_core_value_sig4BE7),
    setCurrentUnitForType: (...var_core_value_sigF9FF) => var_core_value_sigA3B2.setCurrentUnitForType(...var_core_value_sigF9FF),
    getCurrentTypeOfUnit$: var_core_value_sigE0E3 => var_core_value_sigE0E3 !== var_core_value_sig63A2 || !var_core_value_sig1F1F ? var_core_value_sigA3B2.getCurrentTypeOfUnit$(var_core_value_sigE0E3) : var_core_value_sigE85F(var_core_value_sigDA93(undefined), var_core_value_sigA3B2.getTypeOfUnitAdded$(var_core_value_sig63A2), var_core_value_sigA3B2.getTypeOfUnitDisposed$(var_core_value_sig63A2)).pipe(var_core_value_sig5B63(() => var_core_value_sig32EC())),
    createUnit: (...var_core_value_sig3AB3) => var_core_value_sigA3B2.createUnit(...var_core_value_sig3AB3),
    getUnitCreateOptions: (...var_core_value_sig816E) => var_core_value_sigA3B2.getUnitCreateOptions(...var_core_value_sig816E),
    disposeUnit: (...var_core_value_sigE6F3) => var_core_value_sigA3B2.disposeUnit(...var_core_value_sigE6F3),
    registerCtorForType: (...var_core_value_sig3EE1) => var_core_value_sigA3B2.registerCtorForType(...var_core_value_sig3EE1),
    getUnit: (...var_core_value_sig9673) => var_core_value_sigA3B2.getUnit(...var_core_value_sig9673),
    getAllUnitsForType: (...var_core_value_sig4917) => var_core_value_sigA3B2.getAllUnitsForType(...var_core_value_sig4917),
    getUnitType: (...var_core_value_sig3BE6) => var_core_value_sigA3B2.getUnitType(...var_core_value_sig3BE6)
  };
}
function Pl(var_core_value_sigF340, var_core_value_sig6001) {
  return {
    contextChanged$: var_core_value_sigF340.contextChanged$,
    getContextValue: var_core_value_sigA1C9 => Fl(var_core_value_sigA1C9, var_core_value_sig6001) ?? var_core_value_sigF340.getContextValue(var_core_value_sigA1C9),
    setContextValue: (var_core_value_sig77D6, var_core_value_sigE3CE) => var_core_value_sigF340.setContextValue(var_core_value_sig77D6, var_core_value_sigE3CE),
    subscribeContextValue$: var_core_value_sig219B => {
      let var_core_value_sig4493 = Fl(var_core_value_sig219B, var_core_value_sig6001);
      return var_core_value_sig4493 == null ? var_core_value_sigF340.subscribeContextValue$(var_core_value_sig219B) : var_core_value_sigDA93(var_core_value_sig4493);
    }
  };
}
function Fl(var_core_value_sig27FF, var_core_value_sigAF69) {
  if (var_core_value_sig27FF === var_core_value_sigFE95) return true;
  if (var_core_value_sig27FF === var_core_value_sigC1C9 || var_core_value_sig27FF === var_core_value_sigEFD0 || var_core_value_sig27FF === var_core_value_sig3AA6) return var_core_value_sig27FF === Il(var_core_value_sigAF69);
}
function Il(var_core_value_sig2FA9) {
  if (var_core_value_sig2FA9 === var_core_value_sigC0F3.UNIVER_SHEET) return var_core_value_sigC1C9;
  if (var_core_value_sig2FA9 === var_core_value_sigC0F3.UNIVER_DOC) return var_core_value_sigEFD0;
  if (var_core_value_sig2FA9 === var_core_value_sigC0F3.UNIVER_SLIDE) return var_core_value_sig3AA6;
}
function Ll(var_core_value_sigE580, var_core_value_sig6B3D, var_core_value_sig6642, var_core_value_sig93C3, var_core_value_sigB034, var_core_value_sig0F42) {
  return var_core_value_sig93C3 ? {
    disposed: () => var_core_value_sigE580.disposed(),
    hasCommand: var_core_value_sig8B9C => var_core_value_sigE580.hasCommand(var_core_value_sig8B9C),
    registerCommand: (...var_core_value_sigA35B) => var_core_value_sigE580.registerCommand(...var_core_value_sigA35B),
    unregisterCommand: var_core_value_sig82DD => var_core_value_sigE580.unregisterCommand(var_core_value_sig82DD),
    registerMultipleCommand: (...var_core_value_sigAAC7) => var_core_value_sigE580.registerMultipleCommand(...var_core_value_sigAAC7),
    executeCommand: async (...var_core_value_sig1999) => {
      let var_core_value_sigFB45 = var_core_value_sig6B3D.getCurrentUnitOfType(var_core_value_sig6642);
      try {
        return var_core_value_sig6B3D.setCurrentUnitForType(var_core_value_sig93C3), await var_core_value_sigE580.executeCommand(var_core_value_sig1999[0], var_core_value_sig1999[1], Rl(var_core_value_sig6642, var_core_value_sig93C3, var_core_value_sig1999[2]));
      } finally {
        Ul(var_core_value_sig6B3D, var_core_value_sig93C3, var_core_value_sigFB45, var_core_value_sigB034, var_core_value_sig0F42);
      }
    },
    syncExecuteCommand: (...var_core_value_sigB86C) => {
      let var_core_value_sigD892 = var_core_value_sig6B3D.getCurrentUnitOfType(var_core_value_sig6642);
      try {
        return var_core_value_sig6B3D.setCurrentUnitForType(var_core_value_sig93C3), var_core_value_sigE580.syncExecuteCommand(var_core_value_sigB86C[0], var_core_value_sigB86C[1], Rl(var_core_value_sig6642, var_core_value_sig93C3, var_core_value_sigB86C[2]));
      } finally {
        Ul(var_core_value_sig6B3D, var_core_value_sig93C3, var_core_value_sigD892, var_core_value_sigB034, var_core_value_sig0F42);
      }
    },
    onCommandExecuted: (...var_core_value_sig6086) => var_core_value_sigE580.onCommandExecuted(...var_core_value_sig6086),
    beforeCommandExecuted: (...var_core_value_sigAED2) => var_core_value_sigE580.beforeCommandExecuted(...var_core_value_sigAED2),
    onMutationExecutedForCollab: (...var_core_value_sig3516) => var_core_value_sigE580.onMutationExecutedForCollab(...var_core_value_sig3516)
  } : var_core_value_sigE580;
}
function Rl(var_core_value_sig147A1, var_core_value_sig6C47, var_core_value_sig8090) {
  return var_core_value_sig147A1 === var_core_value_sigC0F3.UNIVER_BOARD ? {
    ...var_core_value_sig8090,
    unitId: var_core_value_sig6C47
  } : var_core_value_sig8090;
}
function zl(var_core_value_sigFBF01, var_core_value_sigE8F0, var_core_value_sig7A47, var_core_value_sigE6A1, var_core_value_sig35B7, var_core_value_sig9D64, var_core_value_sig29E6) {
  if (typeof var_core_value_sigFBF01 != "object" && typeof var_core_value_sigFBF01 != "function" || var_core_value_sigFBF01 == null) return var_core_value_sigFBF01;
  let var_core_value_sig7E15 = var_core_value_sigFBF01,
    var_core_value_sig2493 = var_core_value_sig29E6 == null ? undefined : var_core_value_sig29E6.get(var_core_value_sig7E15);
  if (var_core_value_sig2493) return var_core_value_sig2493;
  let var_core_value_sig731D = {
    ...var_core_value_sig7E15
  };
  return Bl(var_core_value_sig7E15, var_core_value_sig731D, var_core_value_sigE8F0, var_core_value_sig7A47, var_core_value_sigE6A1, var_core_value_sig35B7, var_core_value_sig9D64), var_core_value_sig29E6 == null || var_core_value_sig29E6.set(var_core_value_sig7E15, var_core_value_sig731D), var_core_value_sig731D;
}
function Bl(var_core_value_sig2F24, var_core_value_sigDA3A, var_core_value_sig4CAF, var_core_value_sigBCDC, var_core_value_sig3FB8, var_core_value_sig2CB0, var_core_value_sig5762) {
  let var_core_value_sigFE00 = var_core_value_sigCDCD => {
    if (var_core_value_sigCDCD === "constructor") return;
    let var_core_value_sig206A = var_core_value_sig2F24[var_core_value_sigCDCD];
    if (typeof var_core_value_sig206A != "function") return;
    let var_core_value_sig1EFE = var_core_value_sigDA3A;
    var_core_value_sig1EFE[var_core_value_sigCDCD] = (...var_core_value_sig1614) => Vl(var_core_value_sig4CAF, var_core_value_sigBCDC, var_core_value_sig3FB8, var_core_value_sig2CB0, var_core_value_sig5762, () => var_core_value_sig206A.apply(var_core_value_sig2F24, var_core_value_sig1614));
  };
  Object.keys(var_core_value_sig2F24).forEach(var_core_value_sigFE00);
  let var_core_value_sigB03D = Object.getPrototypeOf(var_core_value_sig2F24);
  var_core_value_sigB03D && var_core_value_sigB03D !== Object.prototype && Object.getOwnPropertyNames(var_core_value_sigB03D).forEach(var_core_value_sigFE00);
}
function Vl(var_core_value_sig10B9, var_core_value_sigB25D, var_core_value_sig7890, var_core_value_sig06EC, var_core_value_sig2A4A, var_core_value_sig35B2) {
  let var_core_value_sig4B92 = var_core_value_sig10B9.getCurrentUnitOfType(var_core_value_sigB25D),
    var_core_value_sig8A40;
  try {
    var_core_value_sig10B9.setCurrentUnitForType(var_core_value_sig7890), var_core_value_sig8A40 = var_core_value_sig35B2();
  } catch (var_core_value_sig9904) {
    throw Ul(var_core_value_sig10B9, var_core_value_sig7890, var_core_value_sig4B92, var_core_value_sig06EC, var_core_value_sig2A4A), var_core_value_sig9904;
  }
  return Hl(var_core_value_sig8A40) ? var_core_value_sig8A40.finally(() => {
    Ul(var_core_value_sig10B9, var_core_value_sig7890, var_core_value_sig4B92, var_core_value_sig06EC, var_core_value_sig2A4A);
  }) : (Ul(var_core_value_sig10B9, var_core_value_sig7890, var_core_value_sig4B92, var_core_value_sig06EC, var_core_value_sig2A4A), var_core_value_sig8A40);
}
function Hl(var_core_value_sig436D) {
  return !!(var_core_value_sig436D && typeof var_core_value_sig436D.finally == "function");
}
function Ul(var_core_value_sig591B, var_core_value_sig4FBC, var_core_value_sig71F0, var_core_value_sig0812, var_core_value_sigCF891) {
  if (Wl(var_core_value_sig0812, var_core_value_sigCF891)) {
    var var_core_value_sigA14D;
    var_core_value_sig591B.setCurrentUnitForType(var_core_value_sig4FBC), (var_core_value_sigA14D = var_core_value_sig591B.focusUnit) == null || var_core_value_sigA14D.call(var_core_value_sig591B, var_core_value_sig4FBC);
    return;
  }
  var_core_value_sig71F0 && var_core_value_sig591B.setCurrentUnitForType(var_core_value_sig71F0.getUnitId());
}
function Wl(var_core_value_sigF428, var_core_value_sig4AA7) {
  let var_core_value_sigC0CB = var_core_value_sig4AA7 == null ? undefined : var_core_value_sig4AA7();
  return !var_core_value_sigF428 || !(var_core_value_sigC0CB != null && var_core_value_sigC0CB.has(X)) ? false : var_core_value_sigC0CB.get(X).hasChildInteractionLease(var_core_value_sigF428);
}
const Gl = new WeakMap();
let Kl = 0;
function ql(var_core_value_sig7644, var_core_value_sig6497) {
  if (!var_core_value_sig7644.has(Zl)) return Yl(var_core_value_sig7644, var_core_value_sig6497);
  let var_core_value_sig742A = var_core_value_sig7644.get(Zl);
  if (!(var_core_value_sig6497.id && var_core_value_sig742A.getAll(var_core_value_sig6497.childType, var_core_value_sig6497.surface).some(var_core_value_sig39C7 => var_core_value_sig39C7.id === var_core_value_sig6497.id))) return var_core_value_sig742A.register(var_core_value_sig6497);
}
function Jl(var_core_value_sig2130) {
  if (!var_core_value_sig2130.has(Zl)) return;
  let var_core_value_sig5BC4 = Gl.get(var_core_value_sig2130);
  var_core_value_sig5BC4 != null && var_core_value_sig5BC4.size && ([...var_core_value_sig5BC4.values()].sort((var_core_value_sigA022, var_core_value_sig913A) => var_core_value_sigA022.index - var_core_value_sig913A.index).forEach(({
    contribution: var_core_value_sig991D
  }) => ql(var_core_value_sig2130, var_core_value_sig991D)), Gl.delete(var_core_value_sig2130));
}
function Yl(var_core_value_sigD642, var_core_value_sig187F) {
  let var_core_value_sig1D39 = {
      contribution: var_core_value_sig187F,
      index: Kl++
    },
    var_core_value_sig0BE3 = Xl(var_core_value_sig187F, var_core_value_sig1D39.index),
    var_core_value_sigF681 = var_core_value_sigD642,
    var_core_value_sigABEA = Gl.get(var_core_value_sigF681) ?? new Map();
  return var_core_value_sigABEA.set(var_core_value_sig0BE3, var_core_value_sig1D39), Gl.set(var_core_value_sigF681, var_core_value_sigABEA), var_core_value_sig9BBC(() => {
    let var_core_value_sig3E9C = Gl.get(var_core_value_sigF681);
    (var_core_value_sig3E9C == null ? undefined : var_core_value_sig3E9C.get(var_core_value_sig0BE3)) === var_core_value_sig1D39 && var_core_value_sig3E9C.delete(var_core_value_sig0BE3);
  });
}
function Xl(var_core_value_sig4200, var_core_value_sig09ED) {
  let var_core_value_sig912B = $l(var_core_value_sig4200);
  return var_core_value_sig4200.id ? var_core_value_sig4200.childType + ":" + var_core_value_sig912B + ":" + var_core_value_sig4200.id : var_core_value_sig4200.childType + ":" + var_core_value_sig912B + ":anonymous:" + var_core_value_sig09ED;
}
var Zl = class {
  constructor() {
    Y(this, "_contributions", new Map()), Y(this, "_nextIndex", 0);
  }
  register(var_core_value_sig7835) {
    let var_core_value_sig1257 = {
        contribution: var_core_value_sig7835,
        index: this._nextIndex++
      },
      var_core_value_sig97E2 = this._contributions["get"](var_core_value_sig7835.childType) ?? [];
    return var_core_value_sig97E2.push(var_core_value_sig1257), var_core_value_sig97E2.sort(eu), this._contributions["set"](var_core_value_sig7835.childType, var_core_value_sig97E2), var_core_value_sig9BBC(() => {
      let var_core_value_sig85C3 = this._contributions["get"](var_core_value_sig7835.childType);
      if (!var_core_value_sig85C3) return;
      let var_core_value_sigB996 = var_core_value_sig85C3.filter(var_core_value_sigBECE => var_core_value_sigBECE !== var_core_value_sig1257);
      var_core_value_sigB996.length ? this._contributions["set"](var_core_value_sig7835.childType, var_core_value_sigB996) : this._contributions["delete"](var_core_value_sig7835.childType);
    });
  }
  get(var_core_value_sigBFA3) {
    return this.getAll(var_core_value_sigBFA3)[0];
  }
  getAll(var_core_value_sig6663, var_core_value_sigB250) {
    return (this._contributions["get"](var_core_value_sig6663) ?? []).map(var_core_value_sig4BBA => var_core_value_sig4BBA.contribution).filter(var_core_value_sig6201 => !var_core_value_sigB250 || $l(var_core_value_sig6201) === var_core_value_sigB250);
  }
  getMergedMenuSchema(var_core_value_sig4EAB, var_core_value_sig2FD0 = "ribbon") {
    let var_core_value_sig035C = this.getAll(var_core_value_sig4EAB, var_core_value_sig2FD0).map(var_core_value_sig5151 => var_core_value_sig5151.menuSchema).filter(var_core_value_sigB542 => var_core_value_sigB542 && typeof var_core_value_sigB542 == "object");
    if (var_core_value_sig035C.length) return tu(var_core_value_sig035C);
  }
  mountMenu(var_core_value_sigA7F0) {
    let var_core_value_sig6AE2 = var_core_value_sigA7F0.surface ?? "ribbon",
      var_core_value_sigFD17 = this.getAll(var_core_value_sigA7F0.childType, var_core_value_sig6AE2);
    if (!var_core_value_sigFD17.length) return;
    let var_core_value_sigA5E0 = var_core_value_sigFD17.filter(var_core_value_sigBB6C => var_core_value_sigBB6C.mountMenu);
    if (var_core_value_sigA5E0.length) {
      let var_core_value_sigE2BF = var_core_value_sigA5E0.map(var_core_value_sig1B22 => {
        var var_core_value_sig7F72;
        return (var_core_value_sig7F72 = var_core_value_sig1B22.mountMenu) == null ? undefined : var_core_value_sig7F72.call(var_core_value_sig1B22, {
          ...var_core_value_sigA7F0,
          surface: var_core_value_sig6AE2,
          menuSchema: var_core_value_sig1B22.menuSchema,
          scopedActionServiceTokens: var_core_value_sig1B22.scopedActionServiceTokens
        });
      }).filter(var_core_value_sig7B2A => !!var_core_value_sig7B2A);
      return var_core_value_sig9BBC(() => {
        var_core_value_sigE2BF.forEach(var_core_value_sig1BBD => var_core_value_sig1BBD.dispose());
      });
    }
    let var_core_value_sigC38F = this.getMergedMenuSchema(var_core_value_sigA7F0.childType, var_core_value_sig6AE2);
    if (var_core_value_sig6AE2 === "ribbon") return wl({
      ...var_core_value_sigA7F0,
      surface: var_core_value_sig6AE2,
      menuSchema: var_core_value_sigC38F,
      scopedActionServiceTokens: Ql(var_core_value_sigFD17)
    }) ?? undefined;
  }
};
function Ql(var_core_value_sig60E8) {
  let var_core_value_sigC01F = var_core_value_sig60E8.flatMap(var_core_value_sigFAFE => var_core_value_sigFAFE.scopedActionServiceTokens ?? []);
  return var_core_value_sigC01F.length ? Array.from(new Set(var_core_value_sigC01F)) : undefined;
}
function $l(var_core_value_sig3ACA) {
  return var_core_value_sig3ACA.surface ?? "ribbon";
}
function eu(var_core_value_sig25D9, var_core_value_sig171B) {
  return (var_core_value_sig25D9.contribution["order"] ?? var_core_value_sig25D9.index) - (var_core_value_sig171B.contribution["order"] ?? var_core_value_sig171B.index) || var_core_value_sig25D9.index - var_core_value_sig171B.index;
}
function tu(var_core_value_sigF2EF) {
  return var_core_value_sigF2EF.reduce((var_core_value_sig2B86, var_core_value_sig8873) => au(var_core_value_sig2B86, nu(var_core_value_sig8873)), {});
}
function nu(var_core_value_sig9366) {
  if (!su(var_core_value_sig9366)) return var_core_value_sig9366;
  let var_core_value_sigE8631 = new Set(Object.values(var_core_value_sig7030)),
    var_core_value_sigB2CE1 = Object.entries(var_core_value_sig9366).filter(([var_core_value_sigB9C5]) => var_core_value_sigE8631.has(var_core_value_sigB9C5)),
    var_core_value_sig18E9 = Object.entries(var_core_value_sig9366).filter(([var_core_value_sig511D]) => iu(var_core_value_sig511D));
  if (!var_core_value_sigB2CE1.length && !var_core_value_sig18E9.length) return var_core_value_sig9366;
  let var_core_value_sigC0B9 = {};
  Object.entries(var_core_value_sig9366).forEach(([var_core_value_sig1610, var_core_value_sig23AB]) => {
    !var_core_value_sigE8631.has(var_core_value_sig1610) && !iu(var_core_value_sig1610) && (var_core_value_sigC0B9[var_core_value_sig1610] = ou(var_core_value_sig23AB));
  });
  let var_core_value_sig2F10 = su(var_core_value_sigC0B9[var_core_value_sig5DCB.RIBBON]) ? var_core_value_sigC0B9[var_core_value_sig5DCB.RIBBON] : {};
  return var_core_value_sigB2CE1.forEach(([var_core_value_sigA15D, var_core_value_sig7E90]) => {
    var_core_value_sig2F10[var_core_value_sigA15D] = var_core_value_sigA15D in var_core_value_sig2F10 ? au(var_core_value_sig2F10[var_core_value_sigA15D], var_core_value_sig7E90) : ou(var_core_value_sig7E90);
  }), var_core_value_sig18E9.forEach(([var_core_value_sig03F7, var_core_value_sig756F]) => {
    let var_core_value_sig0DB1 = iu(var_core_value_sig03F7);
    if (!var_core_value_sig0DB1) return;
    let var_core_value_sig4950 = su(var_core_value_sig2F10[var_core_value_sig0DB1]) ? var_core_value_sig2F10[var_core_value_sig0DB1] : {};
    var_core_value_sig4950[var_core_value_sig03F7] = var_core_value_sig03F7 in var_core_value_sig4950 ? au(var_core_value_sig4950[var_core_value_sig03F7], var_core_value_sig756F) : ou(var_core_value_sig756F), var_core_value_sig2F10[var_core_value_sig0DB1] = var_core_value_sig4950;
  }), var_core_value_sigC0B9[var_core_value_sig5DCB.RIBBON] = var_core_value_sig2F10, var_core_value_sigC0B9;
}
const ru = [[Object.values(var_core_value_sigBAFD), var_core_value_sig7030.START], [Object.values(var_core_value_sig3F0B), var_core_value_sig7030.INSERT], [Object.values(var_core_value_sigE65F), var_core_value_sig7030.FORMULAS], [Object.values(var_core_value_sigFBFE), var_core_value_sig7030.DATA], [Object.values(var_core_value_sig7213), var_core_value_sig7030.VIEW], [Object.values(var_core_value_sig08B0), var_core_value_sig7030.OTHERS]];
function iu(var_core_value_sigC1F2) {
  var var_core_value_sigDA6F;
  return (var_core_value_sigDA6F = ru.find(([var_core_value_sig4424]) => var_core_value_sig4424.includes(var_core_value_sigC1F2))) == null ? undefined : var_core_value_sigDA6F[1];
}
function au(var_core_value_sig8583, var_core_value_sig802A) {
  if (!su(var_core_value_sig8583) || !su(var_core_value_sig802A)) return ou(var_core_value_sig802A);
  let var_core_value_sig368A = {
    ...var_core_value_sig8583
  };
  return Object.entries(var_core_value_sig802A).forEach(([var_core_value_sig57E8, var_core_value_sig76B6]) => {
    var_core_value_sig368A[var_core_value_sig57E8] = var_core_value_sig57E8 in var_core_value_sig368A ? au(var_core_value_sig368A[var_core_value_sig57E8], var_core_value_sig76B6) : ou(var_core_value_sig76B6);
  }), var_core_value_sig368A;
}
function ou(var_core_value_sig89F9) {
  return Array.isArray(var_core_value_sig89F9) ? var_core_value_sig89F9.map(var_core_value_sig89BC => ou(var_core_value_sig89BC)) : su(var_core_value_sig89F9) ? Object.fromEntries(Object.entries(var_core_value_sig89F9).map(([var_core_value_sig2191, var_core_value_sig3B2E]) => [var_core_value_sig2191, ou(var_core_value_sig3B2E)])) : var_core_value_sig89F9;
}
function su(var_core_value_sig015F) {
  return !!var_core_value_sig015F && typeof var_core_value_sig015F == "object" && !Array.isArray(var_core_value_sig015F);
}
function cu(var_core_value_sigC32D, var_core_value_sigEB9F, var_core_value_sig08A4) {
  let {
    viewport: var_core_value_sigE286,
    menuSlot: var_core_value_sig91C3,
    popupSlot: var_core_value_sig63B3
  } = var_core_value_sig08A4;
  return {
    hostUnitId: var_core_value_sigC32D.hostUnitId,
    hostAnchorId: var_core_value_sigC32D.hostAnchorId,
    embedId: var_core_value_sigC32D.embedId,
    childUnitId: var_core_value_sigC32D.childUnitId,
    childType: var_core_value_sigC32D.childType,
    layout: var_core_value_sigEB9F,
    mode: "float",
    rootElement: var_core_value_sigE286,
    contentRoot: ms(var_core_value_sigE286, "data-embed-content-root") ?? var_core_value_sigE286,
    canvasRoot: ms(var_core_value_sigE286, "data-embed-canvas-root") ?? var_core_value_sigE286,
    overlayRoot: ms(var_core_value_sigE286, "data-embed-overlay-root") ?? var_core_value_sigE286,
    popupRoot: var_core_value_sig63B3 ?? ms(var_core_value_sigE286, "data-embed-popup-root") ?? var_core_value_sigE286,
    menuOutlet: {
      container: var_core_value_sig91C3
    },
    active$: var_core_value_sigDA93(true),
    fullscreen: true
  };
}
function lu(var_core_value_sig150A) {
  let {
      injector: var_core_value_sig2074,
      descriptor: var_core_value_sig038C,
      renderScope: var_core_value_sigE79F
    } = var_core_value_sig150A,
    var_core_value_sigC725 = [],
    var_core_value_sigD836 = var_core_value_sig038C.embedId,
    var_core_value_sigE06D = var_core_value_sig2074.has(X) ? var_core_value_sig2074.get(X) : undefined,
    var_core_value_sig8DC3 = var_core_value_sig2074.has(Es) ? var_core_value_sig2074.get(Es) : undefined;
  return var_core_value_sigE06D && (var_core_value_sigC725.push(var_core_value_sigE06D.registerRuntimeScope({
    embedId: var_core_value_sigD836,
    hostUnitId: var_core_value_sig038C.hostUnitId,
    childUnitId: var_core_value_sig038C.childUnitId,
    childType: var_core_value_sig038C.childType,
    sessionMode: "child-fullscreen"
  })), var_core_value_sig038C.childUnitId && var_core_value_sigC725.push(var_core_value_sigE06D.acquireLease({
    embedId: var_core_value_sigD836,
    role: "child-session",
    owner: "fullscreen-runtime",
    sessionMode: "child-fullscreen",
    hostUnitId: var_core_value_sig038C.hostUnitId,
    childUnitId: var_core_value_sig038C.childUnitId,
    childType: var_core_value_sig038C.childType
  })), du(var_core_value_sig150A).forEach(({
    element: var_core_value_sig5A9A,
    role: var_core_value_sigB524
  }) => {
    var_core_value_sigC725.push(var_core_value_sigE06D.registerElement({
      embedId: var_core_value_sigD836,
      element: var_core_value_sig5A9A,
      role: var_core_value_sigB524
    }));
  })), var_core_value_sig8DC3 && (du(var_core_value_sig150A).forEach(({
    element: var_core_value_sig8CFB
  }) => {
    var_core_value_sigC725.push(var_core_value_sig8DC3.registerRoot(var_core_value_sigD836, var_core_value_sig8CFB, var_core_value_sig038C.childUnitId));
  }), var_core_value_sigC725.push(var_core_value_sig8DC3.activatePortalScope(var_core_value_sigD836, var_core_value_sigE79F.rootElement["ownerDocument"], {
    includeAppShellEditorPortal: var_core_value_sig038C.childType === var_core_value_sigC0F3.UNIVER_SHEET
  }))), var_core_value_sigE06D && var_core_value_sig8DC3 && var_core_value_sigC725.push(uu({
    embedId: var_core_value_sigD836,
    focusCoordinator: var_core_value_sigE06D,
    interactionBoundaryService: var_core_value_sig8DC3,
    runtimeRoot: var_core_value_sigE79F.rootElement
  })), var_core_value_sig9BBC(() => {
    [...var_core_value_sigC725].reverse().forEach(var_core_value_sigB8C7 => var_core_value_sigB8C7.dispose());
  });
}
function uu(var_core_value_sig194D) {
  let {
      embedId: var_core_value_sigE5C1,
      focusCoordinator: var_core_value_sig81B0,
      interactionBoundaryService: var_core_value_sig6DF72,
      runtimeRoot: var_core_value_sig8E2B
    } = var_core_value_sig194D,
    var_core_value_sigC9E01 = var_core_value_sig8E2B.ownerDocument,
    var_core_value_sigDC37 = var_core_value_sigC9E01.defaultView,
    var_core_value_sig6133,
    var_core_value_sigDCBA = var_core_value_sigB52C => {
      var var_core_value_sigA4B8;
      let var_core_value_sigFF9C = var_core_value_sigB52C.type === "keydown" && var_core_value_sigB52C.key === "Escape";
      if (var_core_value_sigB52C.type === "keydown" && !var_core_value_sigFF9C) return;
      let var_core_value_sig278D = var_core_value_sig81B0.resolveActiveChildSessionRuntimeScope();
      if ((var_core_value_sig278D == null ? undefined : var_core_value_sig278D.embedId) !== var_core_value_sigE5C1 || var_core_value_sig278D.sessionMode !== "child-fullscreen") return;
      let var_core_value_sigC0FE = var_core_value_sigB52C.target instanceof HTMLElement ? var_core_value_sigB52C.target : null,
        var_core_value_sigDD22 = !!var_core_value_sigC0FE && (var_core_value_sig6DF72.contains(var_core_value_sigE5C1, var_core_value_sigC0FE, var_core_value_sigB52C) || var_core_value_sig81B0.containsElement(var_core_value_sigE5C1, var_core_value_sigC0FE, var_core_value_sigB52C)),
        var_core_value_sig2D35 = var_core_value_sigC0FE == null || (var_core_value_sigA4B8 = var_core_value_sigC0FE.closest("[data-embed-runtime-focus-role]")) == null ? undefined : var_core_value_sigA4B8.getAttribute(ws);
      !var_core_value_sigFF9C && (!var_core_value_sigDD22 || var_core_value_sig2D35 !== "child-popup" && var_core_value_sig2D35 !== "floating-menu") || var_core_value_sigDC37 && (var_core_value_sig6133 != null && var_core_value_sigDC37.cancelAnimationFrame(var_core_value_sig6133), var_core_value_sig6133 = var_core_value_sigDC37.requestAnimationFrame(() => {
        var_core_value_sig6133 = var_core_value_sigDC37.requestAnimationFrame(() => {
          var var_core_value_sig06CD;
          var_core_value_sig6133 = undefined;
          let var_core_value_sigA5F1 = (var_core_value_sigC0FE == null ? undefined : var_core_value_sigC0FE.isConnected) && var_core_value_sigC0FE.closest('[data-state="closed"]') == null;
          if (!var_core_value_sigFF9C && var_core_value_sigA5F1) return;
          let var_core_value_sig97A2 = var_core_value_sigC9E01.activeElement,
            var_core_value_sig07E9 = var_core_value_sig97A2 instanceof HTMLElement ? (var_core_value_sig06CD = var_core_value_sig97A2.closest("[data-embed-runtime-focus-role]")) == null ? undefined : var_core_value_sig06CD.getAttribute(ws) : undefined,
            var_core_value_sig4F59 = var_core_value_sig97A2 instanceof HTMLElement && var_core_value_sig97A2.closest('[data-state="open"]') != null,
            var_core_value_sigF564 = (var_core_value_sig07E9 !== "child-popup" || var_core_value_sig4F59) && (var_core_value_sig6DF72.contains(var_core_value_sigE5C1, var_core_value_sig97A2) || var_core_value_sig81B0.containsElement(var_core_value_sigE5C1, var_core_value_sig97A2)),
            var_core_value_sig8CFA = var_core_value_sig81B0.resolveActiveChildSessionRuntimeScope();
          var_core_value_sigF564 || !var_core_value_sig8E2B.isConnected || (var_core_value_sig8CFA == null ? undefined : var_core_value_sig8CFA.embedId) !== var_core_value_sigE5C1 || var_core_value_sig8CFA.sessionMode !== "child-fullscreen" || (var_core_value_sig8E2B.hasAttribute("tabindex") || (var_core_value_sig8E2B.tabIndex = -1), var_core_value_sig8E2B.focus({
            preventScroll: true
          }));
        });
      }));
    };
  return var_core_value_sigC9E01.addEventListener("click", var_core_value_sigDCBA, true), var_core_value_sigC9E01.addEventListener("keydown", var_core_value_sigDCBA, true), var_core_value_sig9BBC(() => {
    var_core_value_sigC9E01.removeEventListener("click", var_core_value_sigDCBA, true), var_core_value_sigC9E01.removeEventListener("keydown", var_core_value_sigDCBA, true), var_core_value_sig6133 != null && (var_core_value_sigDC37 == null || var_core_value_sigDC37.cancelAnimationFrame(var_core_value_sig6133));
  });
}
function du(var_core_value_sigEE95) {
  let {
      renderScope: var_core_value_sig98C4,
      menuRoot: var_core_value_sig2F14,
      menuSlot: var_core_value_sigB9DF,
      popupSlot: var_core_value_sig81A9,
      sidebarSlot: var_core_value_sigF301,
      rightSidebarSlot: var_core_value_sig1679,
      footerSlot: var_core_value_sigF73D
    } = var_core_value_sigEE95,
    var_core_value_sigDB18 = [{
      element: var_core_value_sig98C4.rootElement,
      role: "runtime"
    }, {
      element: var_core_value_sig98C4.contentRoot,
      role: "runtime"
    }, {
      element: var_core_value_sig98C4.canvasRoot,
      role: "runtime"
    }, {
      element: var_core_value_sig98C4.overlayRoot,
      role: "runtime"
    }, {
      element: var_core_value_sig2F14,
      role: "floating-menu"
    }, {
      element: var_core_value_sigB9DF,
      role: "floating-menu"
    }, {
      element: var_core_value_sigF73D,
      role: "floating-menu"
    }, {
      element: var_core_value_sigF301,
      role: "child-popup"
    }, {
      element: var_core_value_sig1679,
      role: "child-popup"
    }, {
      element: var_core_value_sig81A9,
      role: "child-popup"
    }],
    var_core_value_sig4E47 = new Set();
  return var_core_value_sigDB18.flatMap(({
    element: var_core_value_sig7A4B,
    role: var_core_value_sigE50A
  }) => !var_core_value_sig7A4B || var_core_value_sig4E47.has(var_core_value_sig7A4B) ? [] : (var_core_value_sig4E47.add(var_core_value_sig7A4B), [{
    element: var_core_value_sig7A4B,
    role: var_core_value_sigE50A
  }]));
}
function fu(var_core_value_sigACB0) {
  return pu(var_core_value_sigACB0) || hu(var_core_value_sigACB0);
}
function pu(var_core_value_sigDEB1) {
  if (!var_core_value_sigDEB1.injector["has"](bs) || var_core_value_sigDEB1.descriptor["childType"] == null) return;
  let var_core_value_sigF3BE = var_core_value_sigDEB1.injector["get"](bs).get(var_core_value_sigDEB1.descriptor["childType"]);
  if ((var_core_value_sigF3BE == null ? undefined : var_core_value_sigF3BE.hostChromeMode) !== "ribbon") return;
  let var_core_value_sig31FA = mu(var_core_value_sigDEB1.injector);
  if (var_core_value_sigDEB1.injector["has"](Zl)) {
    let var_core_value_sigC8AC = var_core_value_sigDEB1.injector["get"](Zl).mountMenu({
      container: var_core_value_sigDEB1.menuContainer,
      portalContainer: var_core_value_sigDEB1.childContext["runtimeScope"].roots["popup"],
      injector: var_core_value_sigDEB1.childContext["runtimeScope"].injector,
      childType: var_core_value_sigDEB1.descriptor["childType"],
      childUnitId: var_core_value_sigDEB1.descriptor["childUnitId"],
      embedId: var_core_value_sigDEB1.descriptor["embedId"],
      surface: "ribbon",
      headerMenu: true,
      ribbonType: var_core_value_sig31FA,
      ribbonHeaderClassName: "univer-box-border univer-bg-gray-50 univer-pr-24 dark:!univer-bg-gray-900"
    });
    if (var_core_value_sigC8AC) return var_core_value_sigC8AC;
  }
  return wl({
    container: var_core_value_sigDEB1.menuContainer,
    portalContainer: var_core_value_sigDEB1.childContext["runtimeScope"].roots["popup"],
    injector: var_core_value_sigDEB1.childContext["runtimeScope"].injector,
    childType: var_core_value_sigDEB1.descriptor["childType"],
    childUnitId: var_core_value_sigDEB1.descriptor["childUnitId"],
    embedId: var_core_value_sigDEB1.descriptor["embedId"],
    menuSchema: undefined,
    headerMenu: true,
    ribbonType: var_core_value_sig31FA,
    ribbonHeaderClassName: "univer-box-border\x20univer-bg-gray-50\x20univer-pr-24\x20dark:!univer-bg-gray-900"
  });
}
function mu(var_core_value_sigC23B) {
  var var_core_value_sigB0B1;
  return var_core_value_sigC23B.has(var_core_value_sig7B6F) ? ((var_core_value_sigB0B1 = var_core_value_sigC23B.get(var_core_value_sig7B6F).getConfig(var_core_value_sigA025)) == null ? undefined : var_core_value_sigB0B1.ribbonType) ?? "classic" : "classic";
}
function hu(var_core_value_sigCB10) {
  if (!var_core_value_sigCB10.injector["has"](Lc) || var_core_value_sigCB10.descriptor["childType"] == null || !var_core_value_sigCB10.descriptor["childUnitId"]) return;
  let var_core_value_sig97AF = var_core_value_sigCB10.injector["get"](Lc).get(var_core_value_sigCB10.descriptor["hostType"], var_core_value_sigCB10.descriptor["entry"], var_core_value_sigCB10.descriptor["childType"]),
    var_core_value_sig8A6D = var_core_value_sig97AF == null ? undefined : var_core_value_sig97AF.mount({
      ...var_core_value_sigCB10.childContext,
      active: {
        hostUnitId: var_core_value_sigCB10.descriptor["hostUnitId"],
        embedId: var_core_value_sigCB10.descriptor["embedId"],
        childUnitId: var_core_value_sigCB10.descriptor["childUnitId"],
        stage: "stage2"
      }
    });
  return var_core_value_sig8A6D ? var_core_value_sig9BBC(() => var_core_value_sig8A6D.dispose()) : undefined;
}
let gu = class extends var_core_value_sigCBDC {
  constructor(var_core_value_sig8E63, var_core_value_sig300D) {
    super(), Y(this, "_session$", new var_core_value_sig1477(null)), Y(this, "_exited$", new var_core_value_sigF7F1()), Y(this, "session$", this._session$["asObservable"]()), Y(this, "exited$", this._exited$["asObservable"]()), this.disposeWithMe(var_core_value_sig8E63.onCommandExecuted(var_core_value_sigA56E => {
      if (!_u(var_core_value_sigA56E)) return;
      let var_core_value_sig1998 = this.getSession();
      (var_core_value_sig1998 == null ? undefined : var_core_value_sig1998.hostUnitId) === var_core_value_sigA56E.params["unitId"] && var_core_value_sig1998.embedId === var_core_value_sigA56E.params["embedId"] && this.exit(var_core_value_sig1998.embedId);
    })), this.disposeWithMe(var_core_value_sig300D.unitDisposed$["subscribe"](var_core_value_sigFF19 => {
      let var_core_value_sig43B8 = this.getSession(),
        var_core_value_sigD98F = var_core_value_sigFF19.getUnitId();
      var_core_value_sig43B8 && (var_core_value_sig43B8.hostUnitId === var_core_value_sigD98F || var_core_value_sig43B8.childUnitId === var_core_value_sigD98F) && this.exit(var_core_value_sig43B8.embedId);
    }));
  }
  dispose() {
    super.dispose(), this._session$["complete"](), this._exited$["complete"]();
  }
  getSession() {
    return this._session$["getValue"]();
  }
  enter(var_core_value_sig520B) {
    var var_core_value_sigFE26, var_core_value_sig1019;
    if (!var_core_value_sig520B.childUnitId || var_core_value_sig520B.childType == null) throw Error("EMBED_FULLSCREEN_CHILD_NOT_RESOLVED");
    let var_core_value_sig32AB = ((var_core_value_sigFE26 = var_core_value_sig520B.sourceMeta) == null ? undefined : var_core_value_sigFE26.floating) || undefined,
      var_core_value_sig72BE = ((var_core_value_sig1019 = var_core_value_sig520B.sourceMeta) == null ? undefined : var_core_value_sig1019.tab) || undefined;
    if (var_core_value_sig72BE && var_core_value_sig72BE.enabled && !var_core_value_sig32AB) throw Error("EMBED_FULLSCREEN_TAB_NOT_SUPPORTED");
    let var_core_value_sig3E4A = var_core_value_sig32AB ? var_core_value_sig32AB.layout : undefined;
    if (!var_core_value_sig3E4A) throw Error("EMBED_FULLSCREEN_LAYOUT_NOT_RESOLVED");
    let var_core_value_sig3171 = {
      hostUnitId: var_core_value_sig520B.hostUnitId,
      embedId: var_core_value_sig520B.embedId,
      childUnitId: var_core_value_sig520B.childUnitId,
      childType: var_core_value_sig520B.childType,
      entry: var_core_value_sig520B.entry,
      layout: var_core_value_sig3E4A
    };
    return this._session$["next"](var_core_value_sig3171), var_core_value_sig3171;
  }
  exit(var_core_value_sigEBC4) {
    let var_core_value_sig788B = this.getSession();
    var_core_value_sig788B && (!var_core_value_sigEBC4 || var_core_value_sig788B.embedId === var_core_value_sigEBC4) && this._session$["next"](null);
  }
  notifyExited(var_core_value_sig9A80) {
    this._exited$["next"](var_core_value_sig9A80);
  }
};
gu = $([Q(0, var_core_value_sigDFF6), Q(1, var_core_value_sig5DF8)], gu);
function _u(var_core_value_sigB74E) {
  return var_core_value_sigB74E.id === var_core_value_sig4A4D.id && typeof var_core_value_sigB74E.params == "object" && var_core_value_sigB74E.params !== null && "unitId" in var_core_value_sigB74E.params && typeof var_core_value_sigB74E.params["unitId"] == "string" && "embedId" in var_core_value_sigB74E.params && typeof var_core_value_sigB74E.params["embedId"] == "string";
}
function vu() {
  let var_core_value_sigBD4F = var_core_value_sigC85E(var_core_value_sig8A66),
    var_core_value_sig9C8D = var_core_value_sigC85E(var_core_value_sig21CF),
    var_core_value_sig1DE2 = var_core_value_sigC85E(dl),
    var_core_value_sig8E68 = var_core_value_sigC85E(gu),
    var_core_value_sigA81A = var_core_value_sig17A6(null),
    var_core_value_sig15C3 = var_core_value_sig17A6(null),
    var_core_value_sig5CFD1 = var_core_value_sig17A6(null),
    var_core_value_sigCA24 = var_core_value_sig17A6(null),
    var_core_value_sig0B5D = var_core_value_sig17A6(null),
    var_core_value_sigFC84 = var_core_value_sig17A6(null),
    var_core_value_sigCA9B1 = var_core_value_sig17A6(null),
    var_core_value_sig341C = var_core_value_sig146E(() => var_core_value_sig8E68.session$, var_core_value_sig8E68.getSession(), false, [var_core_value_sig8E68]),
    [var_core_value_sig2AA1, var_core_value_sigA506] = var_core_value_sigC4B6(null);
  if (var_core_value_sigB0BB(() => {
    var var_core_value_sig7C69;
    let var_core_value_sig01EF = var_core_value_sig5CFD1.current,
      var_core_value_sig3603 = var_core_value_sig15C3.current,
      var_core_value_sigC163 = var_core_value_sigCA24.current,
      var_core_value_sigF5F3 = var_core_value_sig0B5D.current,
      var_core_value_sig5E69 = var_core_value_sigFC84.current,
      var_core_value_sig7B39 = var_core_value_sigCA9B1.current;
    if (!var_core_value_sig341C || !var_core_value_sig01EF || !var_core_value_sig3603 || !var_core_value_sigC163 || !var_core_value_sigF5F3 || !var_core_value_sig5E69 || !var_core_value_sig7B39) return;
    let var_core_value_sigDCAB = xu(var_core_value_sigBD4F, var_core_value_sig341C.hostUnitId, var_core_value_sig341C.embedId);
    if (!(var_core_value_sigDCAB != null && var_core_value_sigDCAB.childUnitId) || var_core_value_sigDCAB.childType == null) {
      var_core_value_sig01EF.dataset["embedFullscreenStatus"] = "missing-descriptor";
      return;
    }
    let var_core_value_sigF569 = var_core_value_sigBD4F.get(Ic).get(var_core_value_sigDCAB.childType);
    if (!(var_core_value_sigF569 != null && var_core_value_sigF569.supportedLayouts["includes"](var_core_value_sig341C.layout))) {
      var_core_value_sig01EF.dataset["embedFullscreenStatus"] = "unsupported-layout";
      return;
    }
    var_core_value_sig01EF.dataset["embedFullscreenStatus"] = "mounting", var_core_value_sig01EF.dataset["embedId"] = var_core_value_sigDCAB.embedId, var_core_value_sig01EF.dataset["embedHostEntry"] = var_core_value_sigDCAB.entry, var_core_value_sig01EF.dataset["embedHostAnchorId"] = var_core_value_sigDCAB.hostAnchorId, var_core_value_sig01EF.dataset["embedLayout"] = var_core_value_sig341C.layout, var_core_value_sig01EF.dataset["embedChildType"] = String(var_core_value_sigDCAB.childType), var_core_value_sig01EF.dataset["embedChildUnitId"] = var_core_value_sigDCAB.childUnitId;
    let var_core_value_sig2A9F = hs(var_core_value_sig01EF),
      var_core_value_sigB14A = cu(var_core_value_sigDCAB, var_core_value_sig341C.layout, {
        viewport: var_core_value_sig01EF,
        menuSlot: var_core_value_sig3603,
        popupSlot: var_core_value_sigC163,
        footerSlot: var_core_value_sig7B39
      }),
      var_core_value_sig4401 = {
        descriptor: var_core_value_sigDCAB,
        layout: var_core_value_sig341C.layout,
        injector: var_core_value_sigBD4F,
        hostElement: var_core_value_sig01EF,
        container: var_core_value_sig01EF,
        renderScope: var_core_value_sigB14A,
        hostUnitId: var_core_value_sigDCAB.hostUnitId,
        embedId: var_core_value_sigDCAB.embedId,
        childUnitId: var_core_value_sigDCAB.childUnitId,
        childType: var_core_value_sigDCAB.childType
      },
      {
        runtimeScope: var_core_value_sig4D6A,
        disposable: var_core_value_sigEF80
      } = jc(var_core_value_sig4401, () => {}, var_core_value_sigF569.scopedDependencies);
    var_core_value_sigA506({
      embedId: var_core_value_sigDCAB.embedId,
      injector: var_core_value_sig4D6A.injector,
      sourceInjector: var_core_value_sigBD4F,
      popupContainer: var_core_value_sig4D6A.roots["popup"]
    });
    let var_core_value_sig526D1 = {
        ...var_core_value_sig4401,
        runtimeScope: var_core_value_sig4D6A
      },
      var_core_value_sigD78B = lu({
        injector: var_core_value_sigBD4F,
        descriptor: var_core_value_sigDCAB,
        renderScope: var_core_value_sigB14A,
        menuRoot: var_core_value_sigA81A.current,
        menuSlot: var_core_value_sig3603,
        popupSlot: var_core_value_sigC163,
        sidebarSlot: var_core_value_sigF5F3,
        rightSidebarSlot: var_core_value_sig5E69,
        footerSlot: var_core_value_sig7B39
      }),
      var_core_value_sigCB8C = (var_core_value_sig66C0, var_core_value_sig9D15 = false) => {
        var var_core_value_sigB785, var_core_value_sig130F;
        let var_core_value_sigC0E3 = (var_core_value_sig66C0 == null ? undefined : var_core_value_sig66C0.target) instanceof Element ? var_core_value_sig66C0.target : null;
        var_core_value_sigC0E3 != null && var_core_value_sigC0E3.closest("[data-embed-fullscreen-close=\x22true\x22],\x20[data-embed-fullscreen-menu=\x22true\x22],\x20[data-embed-fullscreen-popup-root=\x22true\x22]") || ((var_core_value_sigB785 = var_core_value_sig4D6A.instanceService) == null || var_core_value_sigB785.setCurrentUnitForType(var_core_value_sigDCAB.childUnitId), (var_core_value_sig130F = var_core_value_sig4D6A.instanceService) == null || var_core_value_sig130F.focusUnit(var_core_value_sigDCAB.childUnitId), var_core_value_sig1DE2.activateFullscreen(var_core_value_sigDCAB, {
          focusLayout: var_core_value_sig9D15
        }));
      };
    var_core_value_sigCB8C(undefined, true), var_core_value_sig01EF.addEventListener("pointerdown", var_core_value_sigCB8C, {
      capture: true
    }), var_core_value_sig01EF.addEventListener("focusin", var_core_value_sigCB8C);
    let var_core_value_sigD217 = (var_core_value_sig7C69 = var_core_value_sigF569.mount) == null ? undefined : var_core_value_sig7C69.call(var_core_value_sigF569, var_core_value_sig526D1);
    var_core_value_sigDCAB.childType === var_core_value_sigC0F3.UNIVER_BASE && hl(var_core_value_sigDCAB.embedId, var_core_value_sigB14A.rootElement);
    let var_core_value_sigEB0F = fu({
      injector: var_core_value_sigBD4F,
      descriptor: var_core_value_sigDCAB,
      childContext: var_core_value_sig526D1,
      menuContainer: var_core_value_sig3603
    });
    return var_core_value_sig01EF.dataset["embedFullscreenStatus"] = "mounted", () => {
      var_core_value_sigA506(null), globalThis.requestAnimationFrame(() => {
        var_core_value_sig01EF.removeEventListener("pointerdown", var_core_value_sigCB8C, {
          capture: true
        }), var_core_value_sig01EF.removeEventListener("focusin", var_core_value_sigCB8C), var_core_value_sigEB0F == null || var_core_value_sigEB0F.dispose(), var_core_value_sigD217 == null || var_core_value_sigD217.dispose(), var_core_value_sigD78B.dispose(), var_core_value_sigEF80.dispose(), var_core_value_sig2A9F.dispose(), var_core_value_sig1DE2.clearFullscreen(var_core_value_sigDCAB), delete var_core_value_sig01EF.dataset["embedFullscreenStatus"], delete var_core_value_sig01EF.dataset["embedId"], delete var_core_value_sig01EF.dataset["embedHostEntry"], delete var_core_value_sig01EF.dataset["embedHostAnchorId"], delete var_core_value_sig01EF.dataset["embedLayout"], delete var_core_value_sig01EF.dataset["embedChildType"], delete var_core_value_sig01EF.dataset["embedChildUnitId"], var_core_value_sig8E68.notifyExited(var_core_value_sig341C);
      });
    };
  }, [var_core_value_sig1DE2, var_core_value_sig8E68, var_core_value_sigBD4F, var_core_value_sig341C]), !var_core_value_sig341C) return null;
  let var_core_value_sig6FC9 = () => {
    var_core_value_sig8E68.exit(var_core_value_sig341C.embedId);
  };
  return var_core_value_sigA648("div", {
    className: "univer-fixed univer-inset-0 univer-grid univer-grid-rows-[auto_minmax(0,1fr)_auto] univer-bg-gray-0 univer-text-gray-900 dark:!univer-bg-gray-800 dark:!univer-text-gray-0",
    "data-embed-fullscreen-shell": "true",
    style: {
      zIndex: 810
    },
    children: [var_core_value_sig341C.childType === var_core_value_sigC0F3.UNIVER_BOARD && var_core_value_sig6F03("div", {
      className: "univer-pointer-events-none univer-absolute univer-left-4 univer-top-3 univer-z-30 univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-1 univer-shadow-lg dark:!univer-border-gray-700 dark:!univer-bg-gray-900",
      "data-embed-boards-fullscreen-exit": "true",
      title: var_core_value_sig9C8D.t("embed-ui.fullscreen.exit"),
      children: var_core_value_sigA648(var_core_value_sig58BD, {
        noIcon: true,
        className: "univer-pointer-events-auto univer-gap-1.5 univer-text-sm univer-font-medium",
        onClick: var_core_value_sig6FC9,
        children: [var_core_value_sig6F03(var_core_value_sigAF61, {}), var_core_value_sig6F03("span", {
          children: var_core_value_sig9C8D.t("embed-ui.fullscreen.exit")
        })]
      })
    }), var_core_value_sigA648("div", {
      ref: var_core_value_sigA81A,
      className: "univer-relative univer-z-[3] univer-min-w-0 univer-bg-gray-0 empty:univer-hidden dark:!univer-bg-gray-800",
      "data-embed-fullscreen-menu": "true",
      children: [var_core_value_sig341C.childType !== var_core_value_sigC0F3.UNIVER_BOARD && var_core_value_sig6F03("div", {
        className: "univer-pointer-events-none univer-absolute univer-right-3 univer-top-0 univer-z-[4] univer-flex univer-h-9 univer-items-center",
        "data-embed-fullscreen-header": "true",
        children: var_core_value_sigA648(var_core_value_sigC820, {
          type: "button",
          size: "small",
          variant: "ghost",
          className: "univer-pointer-events-auto univer-gap-1.5 hover:!univer-bg-primary-100 hover:!univer-text-primary-700 dark:hover:!univer-bg-primary-800 dark:hover:!univer-text-primary-100 [&_svg]:!univer-size-3.5",
          "data-embed-fullscreen-close": "true",
          onClick: var_core_value_sig6FC9,
          children: [var_core_value_sig6F03(var_core_value_sig31BB, {}), var_core_value_sig6F03("span", {
            children: var_core_value_sig9C8D.t("embed-ui.fullscreen.exit")
          })]
        })
      }), var_core_value_sig6F03("div", {
        ref: var_core_value_sig15C3,
        className: "univer-min-w-0",
        "data-embed-fullscreen-menu-slot": "true",
        "data-embed-menu-slot": "true"
      })]
    }), var_core_value_sigA648("div", {
      className: "univer-flex univer-min-h-0 univer-min-w-0 univer-overflow-hidden",
      "data-embed-fullscreen-body": "true",
      children: [var_core_value_sig6F03("div", {
        ref: var_core_value_sig0B5D,
        className: "univer-relative\x20univer-z-[2]\x20univer-min-h-0\x20univer-flex-none\x20univer-bg-gray-0\x20empty:univer-hidden\x20dark:!univer-bg-gray-800\x20[&_[data-u-comp=base-left-panel]]:univer-h-full",
        "data-embed-fullscreen-sidebar-slot": "true",
        "data-embed-id": var_core_value_sig341C.embedId
      }), var_core_value_sig6F03("div", {
        ref: var_core_value_sig5CFD1,
        className: "univer-relative univer-min-h-0 univer-min-w-0 univer-flex-1 univer-overflow-hidden dark:!univer-bg-gray-900",
        "data-embed-fullscreen-viewport": "true",
        onContextMenuCapture: var_core_value_sigDC44 => {
          var_core_value_sigDC44.preventDefault();
        }
      }), var_core_value_sig6F03("div", {
        ref: var_core_value_sigFC84,
        className: "univer-relative univer-z-[2] univer-min-h-0 univer-flex-none univer-bg-gray-0 empty:univer-hidden dark:!univer-bg-gray-800",
        "data-embed-fullscreen-right-sidebar-slot": "true",
        "data-embed-id": var_core_value_sig341C.embedId,
        children: var_core_value_sig2AA1 && var_core_value_sig6F03(bu, {
          ...var_core_value_sig2AA1
        })
      })]
    }), var_core_value_sig6F03("div", {
      ref: var_core_value_sigCA9B1,
      className: "univer-relative univer-z-[2] univer-min-w-0 univer-bg-gray-0 empty:univer-hidden dark:!univer-bg-gray-800",
      "data-embed-fullscreen-footer-slot": "true",
      "data-embed-footer-slot": "true"
    }), var_core_value_sig6F03("div", {
      ref: var_core_value_sigCA24,
      className: "univer-pointer-events-none univer-fixed univer-inset-0 univer-z-20 [&>*]:univer-pointer-events-auto",
      "data-embed-fullscreen-popup-root": "true",
      "data-embed-popup-root": "true",
      children: var_core_value_sig2AA1 && var_core_value_sig6F03(yu, {
        ...var_core_value_sig2AA1
      })
    })]
  });
}
function yu(var_core_value_sig05BE) {
  let {
    embedId: var_core_value_sig097E,
    injector: var_core_value_sig0240,
    sourceInjector: var_core_value_sig90E0,
    popupContainer: var_core_value_sigA81B1
  } = var_core_value_sig05BE;
  return var_core_value_sigA648(var_core_value_sigC0A2, {
    children: [var_core_value_sigA648(fl, {
      injector: var_core_value_sig0240,
      mountContainer: var_core_value_sigA81B1,
      embedId: var_core_value_sig097E,
      children: [var_core_value_sig6F03(var_core_value_sig36DA, {}), var_core_value_sig6F03(var_core_value_sig57BC, {})]
    }), var_core_value_sig6F03(fl, {
      injector: var_core_value_sig90E0,
      mountContainer: var_core_value_sigA81B1,
      embedId: var_core_value_sig097E,
      children: var_core_value_sig6F03(var_core_value_sig57BC, {})
    })]
  });
}
function bu(var_core_value_sig1D0B) {
  let {
    embedId: var_core_value_sigA5CC,
    injector: var_core_value_sigA22E,
    sourceInjector: var_core_value_sigAFB6,
    popupContainer: var_core_value_sigFC4C
  } = var_core_value_sig1D0B;
  return var_core_value_sigA648("aside", {
    className: "univer-z-[2] univer-flex univer-h-full",
    children: [var_core_value_sig6F03(fl, {
      injector: var_core_value_sigA22E,
      mountContainer: var_core_value_sigFC4C,
      embedId: var_core_value_sigA5CC,
      children: var_core_value_sig6F03(var_core_value_sig1E66, {})
    }), var_core_value_sig6F03(fl, {
      injector: var_core_value_sigAFB6,
      mountContainer: var_core_value_sigFC4C,
      embedId: var_core_value_sigA5CC,
      children: var_core_value_sig6F03(var_core_value_sig1E66, {})
    })]
  });
}
function xu(var_core_value_sigAE5C, var_core_value_sig9A4B, var_core_value_sigB177) {
  try {
    return var_core_value_sigAE5C.get(var_core_value_sig91F2).getDescriptor(var_core_value_sig9A4B, var_core_value_sigB177);
  } catch {
    return;
  }
}
const Su = {};
function Cu(var_core_value_sig5FE4) {
  let {
      stage: var_core_value_sig0601,
      interactionFlow: var_core_value_sig2AAC
    } = var_core_value_sig5FE4,
    var_core_value_sig6D82 = var_core_value_sig2AAC === "doc-block",
    var_core_value_sig8E0C = var_core_value_sig0601 === "stage1" && !var_core_value_sig6D82,
    var_core_value_sigA440 = var_core_value_sig0601 === "stage2" || var_core_value_sig6D82;
  return {
    allowHostBodyDrag: var_core_value_sig8E0C,
    disableLiveHostPointerEvents: !var_core_value_sig6D82 && (var_core_value_sig0601 === "inactive" || var_core_value_sig0601 === "stage1"),
    passThroughInteractionGate: var_core_value_sigA440,
    runtimeOwnsInteraction: var_core_value_sigA440
  };
}
function wu(var_core_value_sigB2E6, var_core_value_sigA35D) {
  var var_core_value_sig5C6B;
  return (var_core_value_sigB2E6 == null ? undefined : var_core_value_sigB2E6.hostType) === var_core_value_sigC0F3.UNIVER_SHEET && var_core_value_sigB2E6.childType === var_core_value_sigC0F3.UNIVER_SHEET && !!((var_core_value_sig5C6B = var_core_value_sigB2E6.sourceMeta) != null && var_core_value_sig5C6B.floating) && var_core_value_sigA35D !== "stage2";
}
function Tu(var_core_value_sigFA1E, var_core_value_sig713B) {
  return wu(var_core_value_sigFA1E, var_core_value_sig713B) ? "deferred" : "ready";
}
function Eu(var_core_value_sigDEC9) {
  var var_core_value_sig1BE8;
  return var_core_value_sigDEC9.fullscreen || ((var_core_value_sig1BE8 = var_core_value_sigDEC9.active) == null ? undefined : var_core_value_sig1BE8.embedId) === var_core_value_sigDEC9.embedId && var_core_value_sigDEC9.active["stage"] === "stage2" || !var_core_value_sigDEC9.usesDomFloatingStage && var_core_value_sigDEC9.renderScopeActive ? "stage2" : "inactive";
}
function Du(var_core_value_sig955E, var_core_value_sig6248) {
  return var_core_value_sig955E !== "docs-sticky-sheet" && var_core_value_sig955E !== "docs-sticky-base" || var_core_value_sig6248.shiftKey || var_core_value_sig6248.ctrlKey || var_core_value_sig6248.metaKey ? false : Math.abs(var_core_value_sig6248.deltaY) > Math.abs(var_core_value_sig6248.deltaX);
}
const Ou = Symbol("univer.embed.forwarded-wheel-event"),
  ku = Symbol("univer.embed.host-vertical-wheel-attempted-event");
function Au(var_core_value_sigEE43, var_core_value_sig96E6) {
  var var_core_value_sig5045;
  if (!var_core_value_sigEE43.ctrlKey && !var_core_value_sigEE43.metaKey) return false;
  let var_core_value_sig826A = var_core_value_sig96E6.getChildContext();
  return !var_core_value_sig826A || ((var_core_value_sig5045 = var_core_value_sig96E6.onHostWheel) == null ? undefined : var_core_value_sig5045.call(var_core_value_sig96E6, var_core_value_sigEE43, var_core_value_sig826A)) !== true ? false : (var_core_value_sig96E6.invalidate("host-scroll"), sd(var_core_value_sigEE43, true), true);
}
function ju(var_core_value_sig16C71) {
  let var_core_value_sig3040 = {
      activeUntil: 0
    },
    var_core_value_sig1A10 = var_core_value_sigDEFC => {
      var var_core_value_sigE842;
      if (Iu(var_core_value_sigDEFC) || ((var_core_value_sigDEFC.ctrlKey || var_core_value_sigDEFC.metaKey) && (var_core_value_sig3040.activeUntil = 0), Au(var_core_value_sigDEFC, var_core_value_sig16C71))) return;
      if (var_core_value_sig16C71.routeHostGestures && var_core_value_sig16C71.hostWheelGestureService["isHostGesture"](var_core_value_sigDEFC)) {
        var var_core_value_sigA77A;
        let var_core_value_sig52F7 = var_core_value_sig16C71.getChildContext();
        if (var_core_value_sig52F7 && ((var_core_value_sigA77A = var_core_value_sig16C71.onHostWheel) == null ? undefined : var_core_value_sigA77A.call(var_core_value_sig16C71, var_core_value_sigDEFC, var_core_value_sig52F7)) === true || Hu(var_core_value_sig16C71.container, var_core_value_sigDEFC)) {
          var_core_value_sig16C71.invalidate("host-scroll"), sd(var_core_value_sigDEFC, true);
          return;
        }
      }
      if (var_core_value_sigDEFC.ctrlKey || var_core_value_sigDEFC.metaKey) return;
      let var_core_value_sig0701 = var_core_value_sig16C71.getStage();
      if (var_core_value_sig0701 === "stage2") return;
      let var_core_value_sig5DCA = var_core_value_sig16C71.getChildContext(),
        var_core_value_sigF1AB = var_core_value_sig5DCA ? var_core_value_sig16C71.passiveViewportRegistry["get"](var_core_value_sig5DCA.childType, var_core_value_sig5DCA.layout) : undefined,
        var_core_value_sig902F = Pu(var_core_value_sigDEFC, var_core_value_sig16C71.viewScale),
        var_core_value_sig6BD7 = var_core_value_sig5DCA ? {
          ...var_core_value_sig5DCA,
          event: var_core_value_sig902F,
          stage: var_core_value_sig0701,
          viewportScrollY: var_core_value_sig16C71.syncHostVerticalScroll ? var_core_value_sig16C71.hostScrollOffset["current"] : undefined
        } : undefined;
      if (var_core_value_sig5DCA && Gu(var_core_value_sig5DCA, var_core_value_sigDEFC, var_core_value_sig16C71.syncHostVerticalScroll)) {
        var var_core_value_sig63E0;
        if (((var_core_value_sig63E0 = var_core_value_sig16C71.onHostWheel) == null ? undefined : var_core_value_sig63E0.call(var_core_value_sig16C71, var_core_value_sigDEFC, var_core_value_sig5DCA)) === true || Hu(var_core_value_sig16C71.container, var_core_value_sigDEFC)) {
          var_core_value_sig16C71.invalidate("host-scroll"), sd(var_core_value_sigDEFC, true);
          return;
        }
      }
      let var_core_value_sig1B87 = var_core_value_sig6BD7 ? var_core_value_sig16C71.passiveWheelHandlerRegistry["handleWheel"](var_core_value_sig6BD7) : false,
        var_core_value_sig580B = !var_core_value_sig1B87 && Ku(var_core_value_sig16C71.container, var_core_value_sigDEFC),
        var_core_value_sig4836 = false,
        var_core_value_sig4C06 = false;
      if (!var_core_value_sig1B87 && var_core_value_sig580B) {
        var var_core_value_sig4D56;
        let var_core_value_sig866F = qu(var_core_value_sigDEFC);
        Yu(var_core_value_sig866F, var_core_value_sigF1AB == null || (var_core_value_sig4D56 = var_core_value_sigF1AB.getHorizontalScroll) == null ? undefined : var_core_value_sig4D56.call(var_core_value_sigF1AB, var_core_value_sig6BD7)) ? (zu(var_core_value_sigDEFC, var_core_value_sig16C71.liveRoot), var_core_value_sig4836 = true) : Ju(var_core_value_sig866F, () => {
          var var_core_value_sig2E11;
          return var_core_value_sig4C06 = ((var_core_value_sig2E11 = var_core_value_sig16C71.resizeDocsSheetLikeRendererByWheel) == null ? undefined : var_core_value_sig2E11.call(var_core_value_sig16C71, var_core_value_sigDEFC)) === true;
        }, () => var_core_value_sig4836 = (var_core_value_sigF1AB == null ? undefined : var_core_value_sigF1AB.handleWheel(var_core_value_sig6BD7)) === true);
      } else var_core_value_sig1B87 || (var_core_value_sig4836 = (var_core_value_sigF1AB == null ? undefined : var_core_value_sigF1AB.handleWheel(var_core_value_sig6BD7)) === true);
      let var_core_value_sig7C26 = var_core_value_sig0701 === "inactive" && !var_core_value_sig1B87 && !var_core_value_sig4836 && !var_core_value_sig4C06 && !var_core_value_sig580B && !!var_core_value_sigF1AB && !!var_core_value_sig5DCA && Xu(var_core_value_sigDEFC);
      if (var_core_value_sig7C26 && Nu(var_core_value_sigDEFC, var_core_value_sig3040)) return;
      if (var_core_value_sig7C26 && var_core_value_sig5DCA && ((var_core_value_sigE842 = var_core_value_sig16C71.onHostWheel) == null ? undefined : var_core_value_sigE842.call(var_core_value_sig16C71, var_core_value_sigDEFC, var_core_value_sig5DCA)) === true) {
        var_core_value_sig16C71.invalidate("host-scroll"), sd(var_core_value_sigDEFC, true);
        return;
      }
      let var_core_value_sigBC59 = var_core_value_sig4836 || var_core_value_sig4C06 ? false : zu(var_core_value_sigDEFC, var_core_value_sig16C71.liveRoot),
        var_core_value_sig544E = var_core_value_sig4836 || var_core_value_sig4C06 || (var_core_value_sig580B || var_core_value_sigBC59 ? false : Bu(var_core_value_sigDEFC, var_core_value_sig16C71.liveRoot));
      if (var_core_value_sig1B87 || var_core_value_sig4836 || var_core_value_sig4C06 || var_core_value_sigBC59 || var_core_value_sig544E) {
        var_core_value_sig0701 === "inactive" && Mu(var_core_value_sig3040), sd(var_core_value_sigDEFC, false);
        return;
      }
      var_core_value_sig0701 === "stage1" && var_core_value_sig5DCA && Xu(var_core_value_sigDEFC) && sd(var_core_value_sigDEFC, true);
    },
    var_core_value_sig271B = var_core_value_sigCE8A => {
      var var_core_value_sig0718;
      if (var_core_value_sig16C71.getStage() !== "stage2" || var_core_value_sigCE8A.ctrlKey || var_core_value_sigCE8A.metaKey) return;
      let var_core_value_sig1B221 = var_core_value_sig16C71.getChildContext();
      if (var_core_value_sig1B221) {
        if (Ku(var_core_value_sig16C71.container, var_core_value_sigCE8A)) {
          var var_core_value_sig8854;
          let var_core_value_sig5B69 = var_core_value_sig16C71.passiveViewportRegistry["get"](var_core_value_sig1B221.childType, var_core_value_sig1B221.layout),
            var_core_value_sigB098 = Pu(var_core_value_sigCE8A, var_core_value_sig16C71.viewScale),
            var_core_value_sigCE71 = {
              ...var_core_value_sig1B221,
              event: var_core_value_sigB098,
              stage: "stage2",
              viewportScrollY: var_core_value_sig16C71.syncHostVerticalScroll ? var_core_value_sig16C71.hostScrollOffset["current"] : undefined
            },
            var_core_value_sig21D8 = qu(var_core_value_sigCE8A),
            var_core_value_sig2B65;
          Yu(var_core_value_sig21D8, var_core_value_sig5B69 == null || (var_core_value_sig8854 = var_core_value_sig5B69.getHorizontalScroll) == null ? undefined : var_core_value_sig8854.call(var_core_value_sig5B69, var_core_value_sigCE71)) ? (zu(var_core_value_sigCE8A, var_core_value_sig16C71.liveRoot), var_core_value_sig2B65 = true) : var_core_value_sig2B65 = Ju(var_core_value_sig21D8, () => {
            var var_core_value_sigF704;
            return ((var_core_value_sigF704 = var_core_value_sig16C71.resizeDocsSheetLikeRendererByWheel) == null ? undefined : var_core_value_sigF704.call(var_core_value_sig16C71, var_core_value_sigCE8A)) === true;
          }, () => var_core_value_sig16C71.passiveWheelHandlerRegistry["handleWheel"](var_core_value_sigCE71) || (var_core_value_sig5B69 == null ? undefined : var_core_value_sig5B69.handleWheel(var_core_value_sigCE71)) === true), (var_core_value_sig2B65 || Xu(var_core_value_sigCE8A)) && sd(var_core_value_sigCE8A, true);
          return;
        }
        Gu(var_core_value_sig1B221, var_core_value_sigCE8A, var_core_value_sig16C71.syncHostVerticalScroll) && (Ru(var_core_value_sigCE8A) || (Lu(var_core_value_sigCE8A), (((var_core_value_sig0718 = var_core_value_sig16C71.onHostWheel) == null ? undefined : var_core_value_sig0718.call(var_core_value_sig16C71, var_core_value_sigCE8A, var_core_value_sig1B221)) === true || Hu(var_core_value_sig16C71.container, var_core_value_sigCE8A)) && (var_core_value_sig16C71.invalidate("host-scroll"), sd(var_core_value_sigCE8A, true))));
      }
    },
    var_core_value_sigC24D = var_core_value_sig5275 => {
      var_core_value_sig16C71.getStage() !== "stage2" || var_core_value_sig5275.ctrlKey || var_core_value_sig5275.metaKey || var_core_value_sig5275.defaultPrevented || id(var_core_value_sig16C71.liveRoot, var_core_value_sig5275) || !var_core_value_sig16C71.getChildContext() || !Xu(var_core_value_sig5275) || sd(var_core_value_sig5275, true);
    },
    var_core_value_sig793B = () => var_core_value_sig16C71.invalidate("child-scroll");
  return var_core_value_sig16C71.gate["addEventListener"]("wheel", var_core_value_sig1A10, {
    passive: false
  }), var_core_value_sig16C71.liveRoot["addEventListener"]("wheel", var_core_value_sig1A10, {
    capture: true,
    passive: false
  }), var_core_value_sig16C71.container["addEventListener"]("wheel", var_core_value_sig271B, {
    capture: true,
    passive: false
  }), var_core_value_sig16C71.liveRoot["addEventListener"]("wheel", var_core_value_sig271B, {
    capture: true,
    passive: false
  }), var_core_value_sig16C71.container["addEventListener"]("wheel", var_core_value_sigC24D, {
    passive: false
  }), var_core_value_sig16C71.liveRoot["addEventListener"]("scroll", var_core_value_sig793B, true), var_core_value_sig9BBC(() => {
    var_core_value_sig16C71.gate["removeEventListener"]("wheel", var_core_value_sig1A10), var_core_value_sig16C71.liveRoot["removeEventListener"]("wheel", var_core_value_sig1A10, {
      capture: true
    }), var_core_value_sig16C71.container["removeEventListener"]("wheel", var_core_value_sig271B, {
      capture: true
    }), var_core_value_sig16C71.liveRoot["removeEventListener"]("wheel", var_core_value_sig271B, {
      capture: true
    }), var_core_value_sig16C71.container["removeEventListener"]("wheel", var_core_value_sigC24D), var_core_value_sig16C71.liveRoot["removeEventListener"]("scroll", var_core_value_sig793B, true);
  });
}
function Mu(var_core_value_sigCAD2) {
  var_core_value_sigCAD2.activeUntil = Date.now() + 180;
}
function Nu(var_core_value_sigCF20, var_core_value_sigF733) {
  return Date.now() >= var_core_value_sigF733.activeUntil ? false : (Mu(var_core_value_sigF733), sd(var_core_value_sigCF20, true), true);
}
function Pu(var_core_value_sigEABC, var_core_value_sig416F) {
  return typeof var_core_value_sig416F != "number" || !Number.isFinite(var_core_value_sig416F) || var_core_value_sig416F <= 0 || var_core_value_sig416F === 1 ? var_core_value_sigEABC : new WheelEvent(var_core_value_sigEABC.type, {
    altKey: var_core_value_sigEABC.altKey,
    bubbles: var_core_value_sigEABC.bubbles,
    cancelable: var_core_value_sigEABC.cancelable,
    clientX: var_core_value_sigEABC.clientX,
    clientY: var_core_value_sigEABC.clientY,
    ctrlKey: var_core_value_sigEABC.ctrlKey,
    deltaMode: var_core_value_sigEABC.deltaMode,
    deltaX: var_core_value_sigEABC.deltaX / var_core_value_sig416F,
    deltaY: var_core_value_sigEABC.deltaY / var_core_value_sig416F,
    deltaZ: var_core_value_sigEABC.deltaZ / var_core_value_sig416F,
    metaKey: var_core_value_sigEABC.metaKey,
    shiftKey: var_core_value_sigEABC.shiftKey
  });
}
function Fu(var_core_value_sigF4B7, var_core_value_sig78BE) {
  let var_core_value_sig8BF7 = new WheelEvent("wheel", {
    clientX: var_core_value_sigF4B7.clientX,
    clientY: var_core_value_sigF4B7.clientY,
    ctrlKey: var_core_value_sigF4B7.ctrlKey,
    deltaMode: var_core_value_sigF4B7.deltaMode,
    deltaX: var_core_value_sigF4B7.deltaX,
    deltaY: var_core_value_sigF4B7.deltaY,
    deltaZ: var_core_value_sigF4B7.deltaZ,
    metaKey: var_core_value_sigF4B7.metaKey,
    shiftKey: var_core_value_sigF4B7.shiftKey,
    ...var_core_value_sig78BE
  });
  return Object.defineProperty(var_core_value_sig8BF7, Ou, {
    configurable: true,
    value: var_core_value_sigF4B7
  }), var_core_value_sig8BF7;
}
function Iu(var_core_value_sigAD29) {
  return !!var_core_value_sigAD29 && var_core_value_sigAD29[Ou] instanceof WheelEvent;
}
function Lu(var_core_value_sig6588) {
  Object.defineProperty(var_core_value_sig6588, ku, {
    configurable: true,
    value: true
  });
}
function Ru(var_core_value_sigE223) {
  return !!var_core_value_sigE223[ku];
}
function zu(var_core_value_sigEFBD, var_core_value_sig20EC) {
  let var_core_value_sig549B = nd(var_core_value_sig20EC, var_core_value_sigEFBD.clientX, var_core_value_sigEFBD.clientY) ?? var_core_value_sig20EC,
    var_core_value_sig0FA5 = Fu(var_core_value_sigEFBD, {
      bubbles: true,
      cancelable: true
    });
  return var_core_value_sig549B.dispatchEvent(var_core_value_sig0FA5), var_core_value_sig0FA5.defaultPrevented;
}
function Bu(var_core_value_sig1B16, var_core_value_sig86C4) {
  let var_core_value_sig2634 = rd(nd(var_core_value_sig86C4, var_core_value_sig1B16.clientX, var_core_value_sig1B16.clientY) ?? var_core_value_sig86C4, var_core_value_sig86C4, var_core_value_sig1B16);
  return var_core_value_sig2634 ? Vu(var_core_value_sig1B16, var_core_value_sig2634) : false;
}
function Vu(var_core_value_sig77A5, var_core_value_sig258A) {
  let var_core_value_sigCE81 = qu(var_core_value_sig77A5),
    var_core_value_sigD09E = var_core_value_sig77A5.shiftKey ? 0 : var_core_value_sig77A5.deltaY,
    var_core_value_sigE729 = var_core_value_sig258A.scrollLeft,
    var_core_value_sig1658 = var_core_value_sig258A.scrollTop;
  return var_core_value_sigCE81 && (var_core_value_sig258A.scrollLeft += var_core_value_sigCE81), var_core_value_sigD09E && (var_core_value_sig258A.scrollTop += var_core_value_sigD09E), var_core_value_sig258A.scrollLeft !== var_core_value_sigE729 || var_core_value_sig258A.scrollTop !== var_core_value_sig1658;
}
function Hu(var_core_value_sigFDC0, var_core_value_sig0CF8) {
  let var_core_value_sigE365 = Uu(var_core_value_sigFDC0);
  if (!var_core_value_sigE365) return $u(var_core_value_sigFDC0.ownerDocument["body"], var_core_value_sigFDC0, var_core_value_sig0CF8);
  if (!td(var_core_value_sigE365)) return $u(var_core_value_sigE365, var_core_value_sigFDC0, var_core_value_sig0CF8);
  let var_core_value_sig411D = var_core_value_sigE365.scrollTop;
  return var_core_value_sigE365.scrollTop += var_core_value_sig0CF8.deltaY, var_core_value_sigE365.scrollTop !== var_core_value_sig411D;
}
function Uu(var_core_value_sigF3E2) {
  let var_core_value_sig8429 = var_core_value_sigF3E2.parentElement;
  for (; var_core_value_sig8429 && var_core_value_sig8429 !== document.body && var_core_value_sig8429 !== document.documentElement;) {
    if (var_core_value_sig8429.scrollHeight > var_core_value_sig8429.clientHeight && Wu(var_core_value_sig8429)) return var_core_value_sig8429;
    var_core_value_sig8429 = var_core_value_sig8429.parentElement;
  }
  return null;
}
function Wu(var_core_value_sigDAB4) {
  let var_core_value_sigBE2D = window.getComputedStyle(var_core_value_sigDAB4);
  return var_core_value_sigBE2D.overflow === "auto" || var_core_value_sigBE2D.overflow === "scroll" || var_core_value_sigBE2D.overflow === "hidden" || var_core_value_sigBE2D.overflowY === "auto" || var_core_value_sigBE2D.overflowY === "scroll" || var_core_value_sigBE2D.overflowY === "hidden";
}
function Gu(var_core_value_sig29F9, var_core_value_sigA738, var_core_value_sigA249) {
  var var_core_value_sigAE70;
  return var_core_value_sigA249 || ((var_core_value_sigAE70 = var_core_value_sig29F9.descriptor["sourceMeta"]) == null ? undefined : var_core_value_sigAE70.verticalWheelMode) === "host" ? Qu(var_core_value_sigA738) : Du(var_core_value_sig29F9.layout, var_core_value_sigA738);
}
function Ku(var_core_value_sigE3B2, var_core_value_sigE76A) {
  return !!var_core_value_sigE3B2.closest('[data-embed-docs-custom-block-sheet-like="true"]') && Zu(var_core_value_sigE76A);
}
function qu(var_core_value_sig540E) {
  return var_core_value_sig540E.deltaX || (var_core_value_sig540E.shiftKey ? var_core_value_sig540E.deltaY : 0);
}
function Ju(var_core_value_sig8FE2, var_core_value_sig5B59, var_core_value_sigA74E) {
  return var_core_value_sig8FE2 > 0 ? var_core_value_sig5B59() || var_core_value_sigA74E() : var_core_value_sigA74E() || var_core_value_sig5B59();
}
function Yu(var_core_value_sig438B, var_core_value_sigCD4B) {
  return var_core_value_sig438B < 0 && (var_core_value_sigCD4B ?? 0) > 0;
}
function Xu(var_core_value_sig3102) {
  return Zu(var_core_value_sig3102) || Qu(var_core_value_sig3102);
}
function Zu(var_core_value_sig46AF) {
  if (var_core_value_sig46AF.ctrlKey || var_core_value_sig46AF.metaKey) return false;
  let var_core_value_sig4A74 = qu(var_core_value_sig46AF),
    var_core_value_sig63FB = var_core_value_sig46AF.shiftKey ? 0 : var_core_value_sig46AF.deltaY;
  return Math.abs(var_core_value_sig4A74) > Math.abs(var_core_value_sig63FB);
}
function Qu(var_core_value_sigADD7) {
  return var_core_value_sigADD7.shiftKey || var_core_value_sigADD7.ctrlKey || var_core_value_sigADD7.metaKey ? false : Math.abs(var_core_value_sigADD7.deltaY) > Math.abs(var_core_value_sigADD7.deltaX);
}
function $u(var_core_value_sig49E0, var_core_value_sigAFAA, var_core_value_sig0D2F) {
  let var_core_value_sig43F4 = Array.from(var_core_value_sig49E0.querySelectorAll("canvas")).find(var_core_value_sig4F9D => !var_core_value_sigAFAA.contains(var_core_value_sig4F9D));
  return var_core_value_sig43F4 ? (var_core_value_sig43F4.dispatchEvent(Fu(var_core_value_sig0D2F, {
    bubbles: true,
    cancelable: true,
    ...ed(var_core_value_sig43F4, var_core_value_sigAFAA, var_core_value_sig0D2F)
  })), true) : false;
}
function ed(var_core_value_sigEA92, var_core_value_sig125D, var_core_value_sig1FF9) {
  if (!ad(var_core_value_sig125D, var_core_value_sig1FF9.clientX, var_core_value_sig1FF9.clientY)) return {
    clientX: var_core_value_sig1FF9.clientX,
    clientY: var_core_value_sig1FF9.clientY
  };
  let var_core_value_sig85CF = var_core_value_sigEA92.getBoundingClientRect(),
    var_core_value_sig4F23 = Math.min(24, Math.max(4, Math.min(var_core_value_sig85CF.width, var_core_value_sig85CF.height) / 8)),
    var_core_value_sigC116 = [{
      clientX: var_core_value_sig85CF.left + var_core_value_sig4F23,
      clientY: var_core_value_sig85CF.top + var_core_value_sig4F23
    }, {
      clientX: var_core_value_sig85CF.right - var_core_value_sig4F23,
      clientY: var_core_value_sig85CF.top + var_core_value_sig4F23
    }, {
      clientX: var_core_value_sig85CF.left + var_core_value_sig4F23,
      clientY: var_core_value_sig85CF.bottom - var_core_value_sig4F23
    }, {
      clientX: var_core_value_sig85CF.right - var_core_value_sig4F23,
      clientY: var_core_value_sig85CF.bottom - var_core_value_sig4F23
    }, {
      clientX: var_core_value_sig85CF.left + var_core_value_sig85CF.width / 2,
      clientY: var_core_value_sig85CF.top + var_core_value_sig85CF.height / 2
    }];
  return var_core_value_sigC116.find(var_core_value_sig278E => !ad(var_core_value_sig125D, var_core_value_sig278E.clientX, var_core_value_sig278E.clientY)) ?? var_core_value_sigC116[0];
}
function td(var_core_value_sig3408) {
  let var_core_value_sig4B4D = window.getComputedStyle(var_core_value_sig3408);
  return var_core_value_sig4B4D.overflow === "auto" || var_core_value_sig4B4D.overflow === "scroll" || var_core_value_sig4B4D.overflowY === "auto" || var_core_value_sig4B4D.overflowY === "scroll";
}
function nd(var_core_value_sig93D7, var_core_value_sigFED2, var_core_value_sig7392) {
  if (!ad(var_core_value_sig93D7, var_core_value_sigFED2, var_core_value_sig7392)) return null;
  let var_core_value_sig878B = var_core_value_sig93D7.ownerDocument["elementsFromPoint"];
  if (typeof var_core_value_sig878B == "function") {
    let var_core_value_sig2921 = var_core_value_sig878B.call(var_core_value_sig93D7.ownerDocument, var_core_value_sigFED2, var_core_value_sig7392).find(var_core_value_sigDE3D => var_core_value_sigDE3D instanceof HTMLElement && var_core_value_sig93D7.contains(var_core_value_sigDE3D));
    if (var_core_value_sig2921) return var_core_value_sig2921;
  }
  let var_core_value_sig52D0 = var_core_value_sig93D7,
    var_core_value_sig3B18 = var_core_value_sig3959 => {
      let var_core_value_sig926F = Array.from(var_core_value_sig3959.children);
      for (let var_core_value_sigF175 = var_core_value_sig926F.length - 1; var_core_value_sigF175 >= 0; var_core_value_sigF175--) {
        let var_core_value_sigD7EA = var_core_value_sig926F[var_core_value_sigF175];
        if (!(!(var_core_value_sigD7EA instanceof HTMLElement) || !ad(var_core_value_sigD7EA, var_core_value_sigFED2, var_core_value_sig7392))) {
          var_core_value_sig52D0 = var_core_value_sigD7EA, var_core_value_sig3B18(var_core_value_sigD7EA);
          return;
        }
      }
    };
  return var_core_value_sig3B18(var_core_value_sig93D7), var_core_value_sig52D0;
}
function rd(var_core_value_sigCA31, var_core_value_sig9C20, var_core_value_sig7435) {
  let var_core_value_sig9C58 = qu(var_core_value_sig7435),
    var_core_value_sig676C = var_core_value_sig7435.shiftKey ? 0 : var_core_value_sig7435.deltaY,
    var_core_value_sig9D47 = var_core_value_sigCA31;
  for (; var_core_value_sig9D47 && var_core_value_sig9C20.contains(var_core_value_sig9D47);) {
    if (od(var_core_value_sig9D47, var_core_value_sig9C58, var_core_value_sig676C)) return var_core_value_sig9D47;
    var_core_value_sig9D47 = var_core_value_sig9D47.parentElement;
  }
  return od(var_core_value_sig9C20, var_core_value_sig9C58, var_core_value_sig676C) ? var_core_value_sig9C20 : null;
}
function id(var_core_value_sigA6E3, var_core_value_sig34CC) {
  return rd(nd(var_core_value_sigA6E3, var_core_value_sig34CC.clientX, var_core_value_sig34CC.clientY) ?? var_core_value_sigA6E3, var_core_value_sigA6E3, var_core_value_sig34CC);
}
function ad(var_core_value_sig67F5, var_core_value_sigED1D, var_core_value_sig5A38) {
  let var_core_value_sig4E8A = var_core_value_sig67F5.getBoundingClientRect();
  return var_core_value_sigED1D >= var_core_value_sig4E8A.left && var_core_value_sigED1D <= var_core_value_sig4E8A.right && var_core_value_sig5A38 >= var_core_value_sig4E8A.top && var_core_value_sig5A38 <= var_core_value_sig4E8A.bottom;
}
function od(var_core_value_sigE618, var_core_value_sig2700, var_core_value_sigD319) {
  let var_core_value_sig5E9A = var_core_value_sig2700 !== 0 && var_core_value_sigE618.scrollWidth > var_core_value_sigE618.clientWidth && (var_core_value_sig2700 < 0 ? var_core_value_sigE618.scrollLeft > 0 : var_core_value_sigE618.scrollLeft + var_core_value_sigE618.clientWidth < var_core_value_sigE618.scrollWidth),
    var_core_value_sig52E2 = var_core_value_sigD319 !== 0 && var_core_value_sigE618.scrollHeight > var_core_value_sigE618.clientHeight && (var_core_value_sigD319 < 0 ? var_core_value_sigE618.scrollTop > 0 : var_core_value_sigE618.scrollTop + var_core_value_sigE618.clientHeight < var_core_value_sigE618.scrollHeight);
  return var_core_value_sig5E9A || var_core_value_sig52E2;
}
function sd(var_core_value_sig00DD, var_core_value_sigA864) {
  var_core_value_sig00DD.preventDefault(), var_core_value_sig00DD.stopPropagation(), var_core_value_sigA864 && var_core_value_sig00DD.stopImmediatePropagation();
}
var cd = class {
    constructor() {
      Y(this, "previewUpdated$", new var_core_value_sigF7F1()), Y(this, "_providers", new Map()), Y(this, "_entriesByEmbedId", new Map()), Y(this, "_entriesByKey", new Map()), Y(this, "_queue", []), Y(this, "_rendering", false), Y(this, "_activeDrain", null);
    }
    registerProvider(var_core_value_sig9414) {
      return this._providers["set"](var_core_value_sig9414.childType, var_core_value_sig9414), var_core_value_sig9BBC(() => {
        this._providers["get"](var_core_value_sig9414.childType) === var_core_value_sig9414 && this._providers["delete"](var_core_value_sig9414.childType);
      });
    }
    getProvider(var_core_value_sig32E7) {
      return this._providers["get"](var_core_value_sig32E7);
    }
    getPreview(var_core_value_sigD8C3) {
      return this._entriesByEmbedId["get"](var_core_value_sigD8C3);
    }
    requestPreview(var_core_value_sig3A44) {
      let var_core_value_sig0642 = this.getCacheKey(var_core_value_sig3A44),
        var_core_value_sig786E = this._entriesByKey["get"](var_core_value_sig0642);
      if (var_core_value_sig786E && (var_core_value_sig786E.status === "pending" || var_core_value_sig786E.status === "ready")) return var_core_value_sig786E;
      let var_core_value_sigFC47 = this._entriesByEmbedId["get"](var_core_value_sig3A44.descriptor["embedId"]),
        var_core_value_sig48E2 = {
          embedId: var_core_value_sig3A44.descriptor["embedId"],
          childUnitId: var_core_value_sig3A44.childUnitId,
          childType: var_core_value_sig3A44.childType,
          status: "pending",
          width: Math.max(1, Math.round(var_core_value_sig3A44.width)),
          height: Math.max(1, Math.round(var_core_value_sig3A44.height)),
          dpr: var_core_value_sig3A44.dpr,
          viewState: var_core_value_sig3A44.viewState ?? (var_core_value_sigFC47 == null ? undefined : var_core_value_sigFC47.viewState),
          revision: ((var_core_value_sigFC47 == null ? undefined : var_core_value_sigFC47.revision) ?? 0) + 1,
          updatedAt: Date.now()
        };
      return this._entriesByKey["set"](var_core_value_sig0642, var_core_value_sig48E2), this._entriesByEmbedId["set"](var_core_value_sig48E2.embedId, var_core_value_sig48E2), this._queue["push"](var_core_value_sig3A44), this._drainQueue(), this.previewUpdated$["next"](var_core_value_sig48E2), var_core_value_sig48E2;
    }
    async collectViewState(var_core_value_sig2FCA) {
      let var_core_value_sig04F2 = this._providers["get"](var_core_value_sig2FCA.childType);
      if (!var_core_value_sig04F2) return;
      let var_core_value_sig2CFC = await var_core_value_sig04F2.collectViewState(var_core_value_sig2FCA);
      return this.updateViewState(var_core_value_sig2FCA.embedId, var_core_value_sig2CFC), var_core_value_sig2CFC;
    }
    async restoreViewState(var_core_value_sig5CEB, var_core_value_sig4935) {
      if (var_core_value_sig4935 == null) return;
      let var_core_value_sig1832 = this._providers["get"](var_core_value_sig5CEB.childType);
      await (var_core_value_sig1832 == null ? undefined : var_core_value_sig1832.restoreViewState(var_core_value_sig5CEB, var_core_value_sig4935));
    }
    updateViewState(var_core_value_sig79D7, var_core_value_sig5E01) {
      let var_core_value_sigBBE4 = this._entriesByEmbedId["get"](var_core_value_sig79D7);
      if (!var_core_value_sigBBE4) {
        let var_core_value_sig6A18 = {
          embedId: var_core_value_sig79D7,
          childUnitId: "",
          childType: undefined,
          status: "stale",
          width: 0,
          height: 0,
          dpr: 1,
          viewState: var_core_value_sig5E01,
          revision: 0,
          updatedAt: Date.now()
        };
        this._entriesByEmbedId["set"](var_core_value_sig79D7, var_core_value_sig6A18), this.previewUpdated$["next"](var_core_value_sig6A18);
        return;
      }
      var_core_value_sigBBE4.viewState = var_core_value_sig5E01, var_core_value_sigBBE4.updatedAt = Date.now(), this.previewUpdated$["next"](var_core_value_sigBBE4);
    }
    markStale(var_core_value_sig96B3, var_core_value_sig9CF2) {
      let var_core_value_sig666D = this._entriesByEmbedId["get"](var_core_value_sig96B3);
      var_core_value_sig666D && (var_core_value_sig666D.status = "stale", var_core_value_sig666D.error = var_core_value_sig9CF2, var_core_value_sig666D.updatedAt = Date.now(), this.previewUpdated$["next"](var_core_value_sig666D));
    }
    invalidate(var_core_value_sigBD53) {
      let var_core_value_sigD11F = this._entriesByEmbedId["get"](var_core_value_sigBD53);
      this._entriesByEmbedId["delete"](var_core_value_sigBD53), var_core_value_sigD11F && Array.from(this._entriesByKey["entries"]()).forEach(([var_core_value_sig4E3D, var_core_value_sig49B0]) => {
        var_core_value_sig49B0.embedId === var_core_value_sigBD53 && this._entriesByKey["delete"](var_core_value_sig4E3D);
      });
    }
    getCacheKey(var_core_value_sig62231) {
      return [var_core_value_sig62231.descriptor["embedId"], var_core_value_sig62231.childUnitId, var_core_value_sig62231.childType, Math.max(1, Math.round(var_core_value_sig62231.width)), Math.max(1, Math.round(var_core_value_sig62231.height)), var_core_value_sig62231.dpr].join("::");
    }
    async flushForTests() {
      for (; this._queue["length"] > 0 || this._rendering || this._activeDrain;) await (this._activeDrain ?? Promise.resolve()), await Promise.resolve();
    }
    dispose() {
      this._providers["clear"](), this._entriesByEmbedId["clear"](), this._entriesByKey["clear"](), this._queue["length"] = 0, this.previewUpdated$["complete"]();
    }
    _drainQueue() {
      this._rendering || this._activeDrain || (this._activeDrain = this._runQueue().finally(() => {
        this._activeDrain = null;
      }));
    }
    async _runQueue() {
      if (!this._rendering) {
        this._rendering = true;
        try {
          for (; this._queue["length"] > 0;) await this._renderOne(this._queue["shift"]());
        } finally {
          this._rendering = false;
        }
      }
    }
    async _renderOne(var_core_value_sig7653) {
      let var_core_value_sigF65B = this.getCacheKey(var_core_value_sig7653),
        var_core_value_sig4A94 = this._entriesByKey["get"](var_core_value_sigF65B);
      if (!var_core_value_sig4A94 || var_core_value_sig4A94.status !== "pending") return;
      let var_core_value_sigEB59 = this._providers["get"](var_core_value_sig7653.childType),
        var_core_value_sigD9B0 = this._findPreviousReadyEntry(var_core_value_sig4A94.embedId, var_core_value_sig4A94);
      if (!var_core_value_sigEB59) {
        let var_core_value_sig2547 = var_core_value_sig7653.context ? Xc(var_core_value_sig7653.context) : undefined;
        if (var_core_value_sig2547) {
          var_core_value_sig4A94.image = var_core_value_sig2547, var_core_value_sig4A94.status = "ready", var_core_value_sig4A94.updatedAt = Date.now(), this._entriesByEmbedId["set"](var_core_value_sig4A94.embedId, var_core_value_sig4A94), this.previewUpdated$["next"](var_core_value_sig4A94);
          return;
        }
        this._setRenderFailure(var_core_value_sig4A94, var_core_value_sigD9B0, Error("Missing embed float preview provider: " + var_core_value_sig7653.childType));
        return;
      }
      try {
        let var_core_value_sigBCA9 = await var_core_value_sigEB59.renderPreview({
          ...var_core_value_sig7653,
          width: var_core_value_sig4A94.width,
          height: var_core_value_sig4A94.height,
          viewState: var_core_value_sig4A94.viewState
        });
        if (this._entriesByKey["get"](var_core_value_sigF65B) !== var_core_value_sig4A94 || var_core_value_sig4A94.status !== "pending") return;
        if (!var_core_value_sigBCA9) {
          this._setRenderFailure(var_core_value_sig4A94, var_core_value_sigD9B0, Error("Empty embed float preview result."));
          return;
        }
        var_core_value_sig4A94.image = var_core_value_sigBCA9, var_core_value_sig4A94.status = "ready", var_core_value_sig4A94.updatedAt = Date.now(), this._entriesByEmbedId["set"](var_core_value_sig4A94.embedId, var_core_value_sig4A94), this.previewUpdated$["next"](var_core_value_sig4A94);
      } catch (var_core_value_sig4CDF) {
        this._setRenderFailure(var_core_value_sig4A94, var_core_value_sigD9B0, var_core_value_sig4CDF);
      }
    }
    _findPreviousReadyEntry(var_core_value_sigB7D6, var_core_value_sigCF1F) {
      let var_core_value_sig4DD1 = this._entriesByEmbedId["get"](var_core_value_sigB7D6);
      return var_core_value_sig4DD1 && var_core_value_sig4DD1 !== var_core_value_sigCF1F && var_core_value_sig4DD1.image ? var_core_value_sig4DD1 : Array.from(this._entriesByKey["values"]()).reverse().find(var_core_value_sig3F79 => var_core_value_sig3F79.embedId === var_core_value_sigB7D6 && var_core_value_sig3F79 !== var_core_value_sigCF1F && var_core_value_sig3F79.image);
    }
    _setRenderFailure(var_core_value_sig1293, var_core_value_sigC999, var_core_value_sig9D8F) {
      var_core_value_sig1293.status = var_core_value_sigC999 != null && var_core_value_sigC999.image ? "stale" : "error", var_core_value_sig1293.image = var_core_value_sigC999 == null ? undefined : var_core_value_sigC999.image, var_core_value_sig1293.viewState = var_core_value_sig1293.viewState ?? (var_core_value_sigC999 == null ? undefined : var_core_value_sigC999.viewState), var_core_value_sig1293.error = var_core_value_sig9D8F, var_core_value_sig1293.updatedAt = Date.now(), this._entriesByEmbedId["set"](var_core_value_sig1293.embedId, var_core_value_sig1293), this.previewUpdated$["next"](var_core_value_sig1293);
    }
  },
  ld = class {
    constructor() {
      Y(this, "_registrations", new Map()), Y(this, "_geometryInvalidated$", new var_core_value_sigF7F1()), Y(this, "geometryInvalidated$", this._geometryInvalidated$["asObservable"]());
    }
    register(var_core_value_sig8270) {
      return this._registrations["set"](var_core_value_sig8270.embedId, var_core_value_sig8270), this.invalidate({
        embedId: var_core_value_sig8270.embedId,
        reason: "manual"
      }), var_core_value_sig9BBC(() => {
        this._registrations["get"](var_core_value_sig8270.embedId) === var_core_value_sig8270 && (this._registrations["delete"](var_core_value_sig8270.embedId), this.invalidate({
          embedId: var_core_value_sig8270.embedId,
          reason: "manual"
        }));
      });
    }
    getRegistration(var_core_value_sig95D9) {
      return this._registrations["get"](var_core_value_sig95D9);
    }
    getRegistrationByChildUnitId(var_core_value_sig0E92) {
      return Array.from(this._registrations["values"]()).find(var_core_value_sig880E => var_core_value_sig880E.childUnitId === var_core_value_sig0E92);
    }
    invalidate(var_core_value_sig45CD) {
      this._geometryInvalidated$["next"](var_core_value_sig45CD);
    }
  };
let ud = class {
  constructor(var_core_value_sigAD84, var_core_value_sigD513, var_core_value_sig36BD, var_core_value_sig0413) {
    this._modelService = var_core_value_sigAD84, this._materializeService = var_core_value_sigD513, this._hostAdapterRegistry = var_core_value_sig36BD, this._anchorModelService = var_core_value_sig0413;
  }
  async materializeDescriptor(var_core_value_sig15B6) {
    return this._materializeService["materializeDescriptor"](var_core_value_sig15B6);
  }
  async restoreEmbed(var_core_value_sigFEBF) {
    let var_core_value_sigBBA2 = var_core_value_sigFEBF.descriptor,
      var_core_value_sigC9A11 = var_core_value_sigFEBF.hostAnchorRecord ?? this._hostAdapterRegistry["restoreAnchor"]({
        embedId: var_core_value_sigBBA2.embedId,
        hostUnitId: var_core_value_sigBBA2.hostUnitId,
        hostType: var_core_value_sigBBA2.hostType,
        entry: var_core_value_sigBBA2.entry,
        hostAnchorId: var_core_value_sigBBA2.hostAnchorId,
        hostContext: var_core_value_sigFEBF.hostContext,
        descriptor: var_core_value_sigBBA2
      });
    return this._modelService["addDescriptor"](var_core_value_sigBBA2.hostUnitId, var_core_value_sigBBA2), this._anchorModelService["setAnchor"](var_core_value_sigC9A11), this._modelService["getDescriptor"](var_core_value_sigBBA2.hostUnitId, var_core_value_sigBBA2.embedId);
  }
};
ud = $([Q(0, var_core_value_sig205B(var_core_value_sig91F2)), Q(1, var_core_value_sig205B(var_core_value_sig22A4)), Q(2, var_core_value_sig205B(var_core_value_sig67C7)), Q(3, var_core_value_sig205B(var_core_value_sig9D18))], ud);
function dd(var_core_value_sig0E68) {
  var var_core_value_sig2889;
  if (!var_core_value_sig0E68) return;
  let var_core_value_sigB3EE = ((var_core_value_sig2889 = var_core_value_sig0E68.closest("[data-embed-interaction-boundary-owner]")) == null ? undefined : var_core_value_sig2889.getAttribute("data-embed-interaction-boundary-owner")) ?? undefined,
    var_core_value_sig0E3B = fd(var_core_value_sig0E68, var_core_value_sigB3EE),
    var_core_value_sigDCD1 = (var_core_value_sig0E3B == null ? undefined : var_core_value_sig0E3B.getAttribute("data-embed-id")) ?? var_core_value_sigB3EE;
  if (var_core_value_sigDCD1) return {
    embedId: var_core_value_sigDCD1,
    hostUnitId: (var_core_value_sig0E3B == null ? undefined : var_core_value_sig0E3B.getAttribute("data-embed-host-unit-id")) ?? undefined,
    childUnitId: (var_core_value_sig0E3B == null ? undefined : var_core_value_sig0E3B.getAttribute(var_core_value_sig25ED)) ?? undefined,
    childType: md(var_core_value_sig0E3B)
  };
}
function fd(var_core_value_sigA77C, var_core_value_sigEF78) {
  let var_core_value_sigA7F8 = var_core_value_sigA77C == null ? undefined : var_core_value_sigA77C.closest('[data-embed-float-dom="true"]');
  if (var_core_value_sigA7F8 && (!var_core_value_sigEF78 || var_core_value_sigA7F8.getAttribute("data-embed-id") === var_core_value_sigEF78)) return var_core_value_sigA7F8;
  let var_core_value_sig007E = (var_core_value_sigA77C == null ? undefined : var_core_value_sigA77C.ownerDocument) ?? (typeof document > "u" ? undefined : document);
  return !var_core_value_sig007E || !var_core_value_sigEF78 ? var_core_value_sigA7F8 ?? undefined : var_core_value_sig007E.querySelector('[data-embed-float-dom="true"][data-embed-id="' + pd(var_core_value_sigEF78) + "\x22]") ?? undefined;
}
function pd(var_core_value_sigD261) {
  return var_core_value_sigD261.replace(/\\/g, "\x5c\x5c").replace(/"/g, "\x5c\x22");
}
function md(var_core_value_sigE75A) {
  let var_core_value_sigEC28 = var_core_value_sigE75A == null ? undefined : var_core_value_sigE75A.getAttribute("data-embed-child-type");
  if (var_core_value_sigEC28 != null && var_core_value_sigEC28 !== "") return Number(var_core_value_sigEC28);
}
var hd = class {
  constructor() {
    Y(this, "_sessions", new WeakMap()), Y(this, "_hostGestureEvents", new WeakSet());
  }
  register(var_core_value_sigE469, var_core_value_sigA499) {
    let var_core_value_sig4CC3 = this._sessions["get"](var_core_value_sigE469);
    if (!var_core_value_sig4CC3) {
      let var_core_value_sigC9ED = var_core_value_sigE469.ownerDocument["defaultView"];
      if (!var_core_value_sigC9ED) return var_core_value_sig9BBC(() => {});
      let var_core_value_sigB57B = var_core_value_sigB33B => this._observeWheel(var_core_value_sigE469, var_core_value_sigB33B);
      var_core_value_sigC9ED.addEventListener("wheel", var_core_value_sigB57B, {
        capture: true,
        passive: false
      }), var_core_value_sig4CC3 = {
        activeUntil: 0,
        containers: new Map(),
        dispose: () => var_core_value_sigC9ED.removeEventListener("wheel", var_core_value_sigB57B, {
          capture: true
        }),
        refCount: 0
      }, this._sessions["set"](var_core_value_sigE469, var_core_value_sig4CC3);
    }
    let var_core_value_sig70B3 = var_core_value_sig4CC3;
    return var_core_value_sig70B3.refCount += 1, var_core_value_sig70B3.containers["set"](var_core_value_sigA499, (var_core_value_sig70B3.containers["get"](var_core_value_sigA499) ?? 0) + 1), var_core_value_sig9BBC(() => {
      let var_core_value_sig780B = var_core_value_sig70B3.containers["get"](var_core_value_sigA499) ?? 0;
      var_core_value_sig780B <= 1 ? var_core_value_sig70B3.containers["delete"](var_core_value_sigA499) : var_core_value_sig70B3.containers["set"](var_core_value_sigA499, var_core_value_sig780B - 1), --var_core_value_sig70B3.refCount, !(var_core_value_sig70B3.refCount > 0 || this._sessions["get"](var_core_value_sigE469) !== var_core_value_sig70B3) && (var_core_value_sig70B3.dispose(), this._sessions["delete"](var_core_value_sigE469));
    });
  }
  isHostGesture(var_core_value_sig422B) {
    return this._hostGestureEvents["has"](var_core_value_sig422B);
  }
  _observeWheel(var_core_value_sig1038, var_core_value_sigC3E6) {
    var var_core_value_sig3710;
    let var_core_value_sig9726 = var_core_value_sig1038.ownerDocument["defaultView"];
    if (!var_core_value_sig9726) return;
    let var_core_value_sigFC9B = _d(var_core_value_sigC3E6, var_core_value_sig9726);
    if (!var_core_value_sigFC9B || !var_core_value_sig1038.contains(var_core_value_sigFC9B)) return;
    let var_core_value_sig943E = this._sessions["get"](var_core_value_sig1038);
    if (!var_core_value_sig943E) return;
    let var_core_value_sigEF36 = Date.now(),
      var_core_value_sigD4B1 = fd(var_core_value_sigFC9B),
      var_core_value_sigE5D8 = var_core_value_sigD4B1 ?? gd(var_core_value_sig943E.containers["keys"](), var_core_value_sigC3E6.clientX, var_core_value_sigC3E6.clientY);
    if (!var_core_value_sigE5D8 || !var_core_value_sig1038.contains(var_core_value_sigE5D8)) {
      var_core_value_sig943E.activeUntil = var_core_value_sigEF36 + 500;
      return;
    }
    let var_core_value_sig74AF = var_core_value_sigE5D8.getAttribute("data-embed-float-stage");
    if (var_core_value_sig74AF === "inactive" && !var_core_value_sigD4B1) {
      var_core_value_sig943E.activeUntil = var_core_value_sigEF36 + 500;
      return;
    }
    if (var_core_value_sig74AF === "inactive" && ((var_core_value_sig3710 = dd(var_core_value_sigE5D8)) == null ? undefined : var_core_value_sig3710.childType) === var_core_value_sigC0F3.UNIVER_SLIDE) {
      var_core_value_sig943E.activeUntil = var_core_value_sigEF36 + 500, this._hostGestureEvents["add"](var_core_value_sigC3E6);
      return;
    }
    if (var_core_value_sigEF36 >= var_core_value_sig943E.activeUntil) {
      var_core_value_sigD4B1 || (var_core_value_sigC3E6.preventDefault(), var_core_value_sigC3E6.stopImmediatePropagation());
      return;
    }
    var_core_value_sig943E.activeUntil = var_core_value_sigEF36 + 500, this._hostGestureEvents["add"](var_core_value_sigC3E6);
  }
};
function gd(var_core_value_sig7870, var_core_value_sig7C02, var_core_value_sig5489) {
  for (let var_core_value_sigBABA of var_core_value_sig7870) {
    let var_core_value_sig7D1B = var_core_value_sigBABA.getBoundingClientRect();
    if (var_core_value_sig7D1B.width > 0 && var_core_value_sig7D1B.height > 0 && var_core_value_sig7C02 >= var_core_value_sig7D1B.left && var_core_value_sig7C02 <= var_core_value_sig7D1B.right && var_core_value_sig5489 >= var_core_value_sig7D1B.top && var_core_value_sig5489 <= var_core_value_sig7D1B.bottom) return var_core_value_sigBABA;
  }
}
function _d(var_core_value_sig632D, var_core_value_sigE6D3) {
  let var_core_value_sig2C1F = var_core_value_sig632D.target;
  return var_core_value_sig2C1F instanceof var_core_value_sigE6D3.HTMLElement ? var_core_value_sig2C1F : var_core_value_sig2C1F instanceof var_core_value_sigE6D3.Element || var_core_value_sig2C1F instanceof var_core_value_sigE6D3.Node ? var_core_value_sig2C1F.parentElement : null;
}
function vd(var_core_value_sigF27F, var_core_value_sig56FA, var_core_value_sig6442) {
  if (!var_core_value_sigF27F.ctrlKey && !var_core_value_sigF27F.metaKey) return false;
  switch (var_core_value_sig56FA.descriptor["hostType"]) {
    case var_core_value_sigC0F3.UNIVER_SHEET:
      return yd(var_core_value_sigF27F, var_core_value_sig56FA, var_core_value_sig6442);
    case var_core_value_sigC0F3.UNIVER_DOC:
      return bd(var_core_value_sigF27F, var_core_value_sig56FA, var_core_value_sig6442);
    case var_core_value_sigC0F3.UNIVER_SLIDE:
      return xd(var_core_value_sigF27F, var_core_value_sig56FA, var_core_value_sig6442);
    default:
      return false;
  }
}
function yd(var_core_value_sig3CA3, var_core_value_sigC1AB, var_core_value_sig5E6D) {
  let var_core_value_sigA1F4 = var_core_value_sig5E6D.univerInstanceService["getUnit"](var_core_value_sigC1AB.hostUnitId, var_core_value_sigC0F3.UNIVER_SHEET),
    var_core_value_sig0CE9 = var_core_value_sigA1F4 == null ? undefined : var_core_value_sigA1F4.getActiveSheet();
  return !var_core_value_sigA1F4 || !var_core_value_sig0CE9 ? false : (var_core_value_sig5E6D.commandService["executeCommand"](var_core_value_sigA3D3.id, {
    unitId: var_core_value_sigC1AB.hostUnitId,
    subUnitId: var_core_value_sig0CE9.getSheetId(),
    zoomRatio: Sd(var_core_value_sig0CE9.getZoomRatio(), var_core_value_sig3CA3)
  }), true);
}
function bd(var_core_value_sig3281, var_core_value_sig486A, var_core_value_sig7061) {
  var var_core_value_sig795D;
  let var_core_value_sigD358 = var_core_value_sig7061.univerInstanceService["getUnit"](var_core_value_sig486A.hostUnitId, var_core_value_sigC0F3.UNIVER_DOC);
  return var_core_value_sigD358 ? (var_core_value_sig7061.commandService["executeCommand"](var_core_value_sig1C5E.id, {
    documentId: var_core_value_sig486A.hostUnitId,
    zoomRatio: Sd(((var_core_value_sig795D = var_core_value_sigD358.getSettings()) == null ? undefined : var_core_value_sig795D.zoomRatio) ?? 1, var_core_value_sig3281)
  }), true) : false;
}
function xd(var_core_value_sig42D2, var_core_value_sigB02D, var_core_value_sig5235) {
  let var_core_value_sig36851 = var_core_value_sig5235.univerInstanceService["getUnit"](var_core_value_sigB02D.hostUnitId, var_core_value_sigC0F3.UNIVER_SLIDE);
  return var_core_value_sig36851 ? (var_core_value_sig5235.commandService["executeCommand"](var_core_value_sigF490.id, {
    unitId: var_core_value_sigB02D.hostUnitId,
    zoomRatio: Sd(var_core_value_sig36851.getZoomRatio(), var_core_value_sig42D2)
  }), true) : false;
}
function Sd(var_core_value_sig06F2, var_core_value_sigA50E) {
  return var_core_value_sig233B(var_core_value_sig06F2, {
    deltaMode: var_core_value_sigA50E.deltaMode,
    deltaX: var_core_value_sigA50E.deltaX,
    deltaY: var_core_value_sigA50E.deltaY,
    wheelDelta: var_core_value_sigA50E.wheelDelta
  });
}
var Cd = class {
    constructor() {
      Y(this, "_providers", new Map());
    }
    register(var_core_value_sigA723) {
      return this._providers["set"](var_core_value_sigA723.childType, var_core_value_sigA723), var_core_value_sig9BBC(() => {
        this._providers["get"](var_core_value_sigA723.childType) === var_core_value_sigA723 && this._providers["delete"](var_core_value_sigA723.childType);
      });
    }
    get(var_core_value_sig991C, var_core_value_sigF909) {
      var var_core_value_sigDD0E;
      let var_core_value_sigF2A0 = this._providers["get"](var_core_value_sig991C);
      if (var_core_value_sigF2A0 && !(var_core_value_sigF909 && (var_core_value_sigDD0E = var_core_value_sigF2A0.supportedLayouts) != null && var_core_value_sigDD0E.length && !var_core_value_sigF2A0.supportedLayouts["includes"](var_core_value_sigF909))) return var_core_value_sigF2A0;
    }
    list() {
      return [...this._providers["values"]()];
    }
  },
  wd = class {
    constructor() {
      Y(this, "_handlers", []);
    }
    register(var_core_value_sig116F) {
      return this._handlers["push"](var_core_value_sig116F), this._sortHandlers(), var_core_value_sig9BBC(() => {
        let var_core_value_sig7BE0 = this._handlers["indexOf"](var_core_value_sig116F);
        var_core_value_sig7BE0 >= 0 && this._handlers["splice"](var_core_value_sig7BE0, 1);
      });
    }
    handleWheel(var_core_value_sigA64C) {
      for (let var_core_value_sig7D40 of this._handlers) {
        var var_core_value_sigAF94;
        if (var_core_value_sig7D40.childType === var_core_value_sigA64C.childType && !(var_core_value_sigA64C.layout && (var_core_value_sigAF94 = var_core_value_sig7D40.supportedLayouts) != null && var_core_value_sigAF94.length && !var_core_value_sig7D40.supportedLayouts["includes"](var_core_value_sigA64C.layout)) && var_core_value_sig7D40.handleWheel(var_core_value_sigA64C) === true) return true;
      }
      return false;
    }
    list() {
      return [...this._handlers];
    }
    _sortHandlers() {
      this._handlers["sort"]((var_core_value_sig6C7E, var_core_value_sig68BE) => (var_core_value_sig68BE.order ?? 0) - (var_core_value_sig6C7E.order ?? 0));
    }
  };
function Td(var_core_value_sigCE3D) {
  if (!var_core_value_sigCE3D || typeof var_core_value_sigCE3D != "object") return;
  let var_core_value_sigF82C = var_core_value_sigCE3D;
  return var_core_value_sigF82C.version === 1 && var_core_value_sigF82C.embedId && var_core_value_sigF82C.hostAnchorId ? var_core_value_sigF82C : undefined;
}
const Ed = new Map();
function Dd(var_core_value_sig0809) {
  var var_core_value_sig0FDC, var_core_value_sig28AB;
  let {
    container: var_core_value_sigCEEB,
    content: var_core_value_sigF064,
    offset: var_core_value_sig2D5A
  } = var_core_value_sig0809;
  if (!var_core_value_sig0809.enabled) return var_core_value_sig2D5A.current = 0, var_core_value_sigF064.style["removeProperty"]("transform"), var_core_value_sigF064.style["removeProperty"]("clip-path"), var_core_value_sig9BBC(() => {});
  let var_core_value_sig0D17 = var_core_value_sigCEEB.ownerDocument["defaultView"] ?? window,
    var_core_value_sigF02B = rf(var_core_value_sig0809.viewScale),
    var_core_value_sigCC5B = false,
    var_core_value_sig6C53,
    var_core_value_sigFCAC = () => {
      var var_core_value_sig1E9F, var_core_value_sig3CC6;
      if (var_core_value_sigCC5B) return;
      let var_core_value_sig041B = var_core_value_sig0809.getChildContext();
      if (!var_core_value_sig041B) {
        var_core_value_sig2D5A.current = 0, var_core_value_sigF064.style["removeProperty"]("transform"), var_core_value_sigF064.style["removeProperty"]("clip-path");
        return;
      }
      let var_core_value_sig3610 = var_core_value_sig0809.getProvider(var_core_value_sig041B);
      if (!var_core_value_sig3610) return;
      let var_core_value_sig62F3 = Uu(var_core_value_sigCEEB),
        var_core_value_sig8063 = (var_core_value_sig62F3 == null ? undefined : var_core_value_sig62F3.getBoundingClientRect()) ?? {
          height: var_core_value_sig0D17.innerHeight,
          top: 0,
          width: var_core_value_sig0D17.innerWidth
        },
        var_core_value_sig555A = var_core_value_sigCEEB.getBoundingClientRect(),
        var_core_value_sigF562 = (var_core_value_sig1E9F = Od(var_core_value_sigCEEB)) == null ? undefined : var_core_value_sig1E9F.getBoundingClientRect().height,
        var_core_value_sig5913 = nf(var_core_value_sig0809.collapseViewportHeight, var_core_value_sigF562 == null ? undefined : var_core_value_sigF562 / var_core_value_sigF02B, var_core_value_sig8063.height / var_core_value_sigF02B),
        var_core_value_sigA1AF = var_core_value_sig0809.collapseWithoutChildScroll && Math.round(var_core_value_sig555A.height / var_core_value_sigF02B) >= Math.round(var_core_value_sig5913),
        var_core_value_sig6324 = nf(var_core_value_sig0809.contentHeight, var_core_value_sig555A.height / var_core_value_sigF02B),
        var_core_value_sig7EE4 = Math.min(var_core_value_sig6324, nf(var_core_value_sig0809.viewportHeight, var_core_value_sigF064.getBoundingClientRect().height / var_core_value_sigF02B, var_core_value_sig8063.height / var_core_value_sigF02B)),
        var_core_value_sigE3D7 = jd({
          collapseWithoutChildScroll: var_core_value_sigA1AF,
          contentHeight: var_core_value_sig6324,
          hostOffset: Math.max(0, (var_core_value_sig8063.top - var_core_value_sig555A.top) / var_core_value_sigF02B),
          stickyHeaderHeight: Math.max(24, ((var_core_value_sig3CC6 = var_core_value_sig3610.getStickyHeaderHeight) == null ? undefined : var_core_value_sig3CC6.call(var_core_value_sig3610, var_core_value_sig041B)) ?? 0),
          viewportHeight: var_core_value_sig7EE4
        });
      if (var_core_value_sigF064.style["transform"] = var_core_value_sigE3D7.visualOffset === 0 ? "" : "translateY(" + var_core_value_sigE3D7.visualOffset * var_core_value_sigF02B + "px)", var_core_value_sigF064.style["clipPath"] = var_core_value_sigE3D7.clipBottom === 0 ? "" : "inset(0 0 " + var_core_value_sigE3D7.clipBottom * var_core_value_sigF02B + "px\x200)", !kd(var_core_value_sig0809.owner["current"], "host") || var_core_value_sig0809.syncingHostFromChild["current"]) return;
      let var_core_value_sig54C6 = var_core_value_sigE3D7.childOffset - var_core_value_sig2D5A.current;
      if (Math.abs(var_core_value_sig54C6) < 0.5) return;
      var_core_value_sig2D5A.current = var_core_value_sigE3D7.childOffset, var_core_value_sig0809.invalidate();
      let var_core_value_sigE843 = new WheelEvent("wheel", {
        cancelable: false,
        clientX: var_core_value_sig555A.left + Math.min(var_core_value_sig555A.width, var_core_value_sig8063.width) / 2,
        clientY: var_core_value_sig8063.top + var_core_value_sig7EE4 * var_core_value_sigF02B / 2,
        deltaY: var_core_value_sig54C6
      });
      var_core_value_sig0809.syncingChildFromHost["current"] = true;
      try {
        var_core_value_sig3610.handleWheel({
          ...var_core_value_sig041B,
          event: var_core_value_sigE843,
          source: "host-scroll-sync",
          stage: var_core_value_sig0809.getStage(),
          viewportScrollY: var_core_value_sigE3D7.childOffset
        });
      } finally {
        var_core_value_sig0809.syncingChildFromHost["current"] = false;
      }
    },
    var_core_value_sig6740 = () => {
      var_core_value_sigFCAC(), var_core_value_sigCC5B || (var_core_value_sig6C53 = var_core_value_sig0D17.requestAnimationFrame(var_core_value_sig6740));
    },
    var_core_value_sig89A9 = () => {
      globalThis.queueMicrotask(() => {
        var_core_value_sigCC5B || var_core_value_sigFCAC();
      });
    },
    var_core_value_sig3BD1 = var_core_value_sig0809.getChildContext(),
    var_core_value_sig1B07 = var_core_value_sig3BD1 ? var_core_value_sig0809.getProvider(var_core_value_sig3BD1) : undefined,
    var_core_value_sigA093 = var_core_value_sig3BD1 && (var_core_value_sig1B07 == null || (var_core_value_sig0FDC = var_core_value_sig1B07.subscribeVerticalScroll) == null ? undefined : var_core_value_sig0FDC.call(var_core_value_sig1B07, var_core_value_sig3BD1, var_core_value_sig2EB2 => {
      var var_core_value_sig683A;
      if (var_core_value_sig0809.syncingChildFromHost["current"] || !kd(var_core_value_sig0809.owner["current"], "child")) return;
      let var_core_value_sig109B = Math.max(0, nf(var_core_value_sig0809.contentHeight) - nf(var_core_value_sig0809.viewportHeight)),
        var_core_value_sig6DD0 = Nd(var_core_value_sig2EB2, 0, var_core_value_sig109B),
        var_core_value_sigB5D3 = var_core_value_sigCEEB.getBoundingClientRect(),
        var_core_value_sig6085 = ((var_core_value_sig683A = Uu(var_core_value_sigCEEB)) == null ? undefined : var_core_value_sig683A.getBoundingClientRect().top) ?? 0,
        var_core_value_sig2507 = Ad(var_core_value_sig6DD0, Nd((var_core_value_sig6085 - var_core_value_sigB5D3.top) / var_core_value_sigF02B, 0, var_core_value_sig109B), Math.max(0, (var_core_value_sigB5D3.top - var_core_value_sig6085) / var_core_value_sigF02B));
      if (Math.abs(var_core_value_sig2507) < 0.5) return;
      let var_core_value_sig5870 = new WheelEvent("wheel", {
          cancelable: false,
          clientX: var_core_value_sigB5D3.left + var_core_value_sigB5D3.width / 2,
          clientY: var_core_value_sigB5D3.top + Math.min(var_core_value_sigB5D3.height, (var_core_value_sig0809.viewportHeight ?? var_core_value_sigB5D3.height / var_core_value_sigF02B) * var_core_value_sigF02B) / 2,
          deltaY: var_core_value_sig2507 * var_core_value_sigF02B
        }),
        var_core_value_sig827F = var_core_value_sig2D5A.current,
        var_core_value_sig2452 = var_core_value_sigF064.style["transform"],
        var_core_value_sig50D0 = var_core_value_sigF064.style["clipPath"];
      var_core_value_sig2D5A.current = var_core_value_sig6DD0, var_core_value_sigF064.style["transform"] = var_core_value_sig6DD0 === 0 ? "" : "translateY(" + var_core_value_sig6DD0 * var_core_value_sigF02B + "px)", var_core_value_sig0809.syncingHostFromChild["current"] = true;
      let var_core_value_sig5EBB1 = false;
      try {
        var var_core_value_sig5E99;
        var_core_value_sig5EBB1 = ((var_core_value_sig5E99 = var_core_value_sig0809.onHostWheel) == null ? undefined : var_core_value_sig5E99.call(var_core_value_sig0809, var_core_value_sig5870, var_core_value_sig3BD1)) === true || Hu(var_core_value_sigCEEB, var_core_value_sig5870);
      } finally {
        var_core_value_sig0809.syncingHostFromChild["current"] = false;
      }
      if (!var_core_value_sig5EBB1) {
        var_core_value_sig2D5A.current = var_core_value_sig827F, var_core_value_sigF064.style["transform"] = var_core_value_sig2452, var_core_value_sigF064.style["clipPath"] = var_core_value_sig50D0;
        return;
      }
      var_core_value_sig0809.invalidate();
    }));
  var_core_value_sig6C53 = var_core_value_sig0D17.requestAnimationFrame(var_core_value_sig6740);
  let var_core_value_sig4B13 = (var_core_value_sig28AB = var_core_value_sig0809.hostLayout$) == null ? undefined : var_core_value_sig28AB.subscribe(var_core_value_sig89A9);
  var_core_value_sig0D17.addEventListener("scroll", var_core_value_sigFCAC, true), var_core_value_sig0D17.addEventListener("resize", var_core_value_sigFCAC);
  let var_core_value_sigAF5A = typeof ResizeObserver > "u" ? undefined : new ResizeObserver(var_core_value_sigFCAC);
  return var_core_value_sigAF5A == null || var_core_value_sigAF5A.observe(var_core_value_sigCEEB), var_core_value_sig9BBC(() => {
    var_core_value_sigCC5B = true, var_core_value_sig6C53 != null && var_core_value_sig0D17.cancelAnimationFrame(var_core_value_sig6C53), var_core_value_sigA093 == null || var_core_value_sigA093.dispose(), var_core_value_sig4B13 == null || var_core_value_sig4B13.unsubscribe(), var_core_value_sigAF5A == null || var_core_value_sigAF5A.disconnect(), var_core_value_sig0D17.removeEventListener("scroll", var_core_value_sigFCAC, true), var_core_value_sig0D17.removeEventListener("resize", var_core_value_sigFCAC), var_core_value_sigF064.style["removeProperty"]("transform"), var_core_value_sigF064.style["removeProperty"]("clip-path");
  });
}
function Od(var_core_value_sigE64B) {
  let var_core_value_sigDC7E = var_core_value_sigE64B.parentElement;
  for (; var_core_value_sigDC7E && var_core_value_sigDC7E !== document.body && var_core_value_sigDC7E !== document.documentElement;) {
    if (Wu(var_core_value_sigDC7E)) return var_core_value_sigDC7E;
    var_core_value_sigDC7E = var_core_value_sigDC7E.parentElement;
  }
  return null;
}
function kd(var_core_value_sig1384, var_core_value_sig3397) {
  return var_core_value_sig1384 == null || var_core_value_sig1384 === var_core_value_sig3397;
}
function Ad(var_core_value_sig3918, var_core_value_sigA952, var_core_value_sigC096) {
  let var_core_value_sig2A1C = var_core_value_sig3918 - var_core_value_sigA952;
  return var_core_value_sig2A1C + (var_core_value_sig2A1C > 0 ? Math.max(0, var_core_value_sigC096) : 0);
}
function jd(var_core_value_sig2D1C) {
  let var_core_value_sig0EDB = nf(var_core_value_sig2D1C.contentHeight),
    var_core_value_sig2C5D = Math.min(var_core_value_sig0EDB, nf(var_core_value_sig2D1C.viewportHeight)),
    var_core_value_sigCC49 = Math.max(0, var_core_value_sig0EDB - var_core_value_sig2C5D);
  if (var_core_value_sigCC49 === 0 && !var_core_value_sig2D1C.collapseWithoutChildScroll) return {
    childOffset: 0,
    clipBottom: 0,
    visualOffset: 0
  };
  let var_core_value_sigFA56 = Math.max(0, var_core_value_sig2D1C.hostOffset),
    var_core_value_sig764E = Nd(nf(var_core_value_sig2D1C.stickyHeaderHeight), 1, var_core_value_sig2C5D),
    var_core_value_sigBB1B = Math.max(var_core_value_sigCC49, var_core_value_sig0EDB - var_core_value_sig764E),
    var_core_value_sigB3C1 = Math.min(var_core_value_sigFA56, var_core_value_sigBB1B),
    var_core_value_sigB6FA = Nd(var_core_value_sig0EDB - var_core_value_sigFA56, var_core_value_sig764E, var_core_value_sig2C5D);
  return {
    childOffset: Math.min(var_core_value_sigFA56, var_core_value_sigCC49),
    clipBottom: var_core_value_sig2C5D - var_core_value_sigB6FA,
    visualOffset: var_core_value_sigB3C1
  };
}
function Md(var_core_value_sig6C1F) {
  let var_core_value_sig0707 = Math.max(1, var_core_value_sig6C1F.bleedWidth - var_core_value_sig6C1F.bleedLeft),
    var_core_value_sig0E4C = Math.min(var_core_value_sig6C1F.contentWidth, var_core_value_sig0707);
  return {
    initialWidth: var_core_value_sig0E4C,
    maxExpansion: Math.min(var_core_value_sig6C1F.bleedLeft, Math.max(0, var_core_value_sig6C1F.contentWidth - var_core_value_sig0E4C))
  };
}
function Nd(var_core_value_sig8CE7, var_core_value_sig7BBA1, var_core_value_sig1B72) {
  return Math.max(var_core_value_sig7BBA1, Math.min(var_core_value_sig1B72, var_core_value_sig8CE7));
}
function Pd(var_core_value_sigBB0A) {
  var_core_value_sigBB0A.style["removeProperty"]("left"), var_core_value_sigBB0A.style["removeProperty"]("top"), var_core_value_sigBB0A.style["removeProperty"]("width"), var_core_value_sigBB0A.style["removeProperty"]("height"), var_core_value_sigBB0A.style["removeProperty"]("visibility"), var_core_value_sigBB0A.style["removeProperty"]("pointer-events");
}
function Fd(var_core_value_sig15C5, var_core_value_sig81A0) {
  var_core_value_sig81A0 ? Ed.set(var_core_value_sig15C5, var_core_value_sig81A0) : Ed.delete(var_core_value_sig15C5);
}
function Id(var_core_value_sig1E36) {
  var var_core_value_sigFFDE;
  let {
    chrome: var_core_value_sigD7E9,
    container: var_core_value_sigA79E,
    geometryService: var_core_value_sig9630,
    stage: var_core_value_sigFA2E
  } = var_core_value_sig1E36;
  if (var_core_value_sig1E36.deferInactive && var_core_value_sigFA2E === "inactive") return var_core_value_sigD7E9.style["visibility"] = "hidden", var_core_value_sigD7E9.style["pointerEvents"] = "none", var_core_value_sig9BBC(() => {
    var_core_value_sigD7E9.style["removeProperty"]("visibility"), var_core_value_sigD7E9.style["removeProperty"]("pointer-events");
  });
  let var_core_value_sigF20F = var_core_value_sigD7E9.parentElement,
    var_core_value_sigF12E = var_core_value_sigD7E9.nextSibling,
    var_core_value_sigF63F,
    var_core_value_sigA250,
    var_core_value_sig8647 = 0,
    var_core_value_sig77DC,
    var_core_value_sigEA82,
    var_core_value_sigC979,
    var_core_value_sig8E10,
    var_core_value_sigD1E7,
    var_core_value_sig240A,
    var_core_value_sig756B,
    var_core_value_sig41FB = () => {
      let var_core_value_sig3FB3 = Gd(var_core_value_sigA79E),
        var_core_value_sig0214 = Wd(var_core_value_sigA79E),
        var_core_value_sig5153 = !Kd(var_core_value_sigA79E) && var_core_value_sig756B != null && var_core_value_sig77DC === var_core_value_sig0214.left && var_core_value_sigC979 === var_core_value_sig0214.width && var_core_value_sig8E10 === var_core_value_sig0214.height;
      !Kd(var_core_value_sigA79E) && var_core_value_sig756B != null && !var_core_value_sig5153 && (var_core_value_sig756B = undefined);
      let var_core_value_sigF323 = var_core_value_sig5153 ? new DOMRect(var_core_value_sig0214.left, var_core_value_sig756B, var_core_value_sig0214.width, var_core_value_sig0214.height) : var_core_value_sig0214,
        var_core_value_sig0C32 = !var_core_value_sig3FB3 || var_core_value_sigF323.height >= 24,
        var_core_value_sig1D89 = Bd(var_core_value_sig3FB3, var_core_value_sig0C32, var_core_value_sigF323.height);
      if (Rd(var_core_value_sigA79E, var_core_value_sigD7E9, var_core_value_sig0C32, var_core_value_sigFA2E), zd(var_core_value_sigD7E9, var_core_value_sig1D89, var_core_value_sigFA2E), var_core_value_sig3FB3) {
        let var_core_value_sig04C6 = var_core_value_sigA79E.getBoundingClientRect();
        Vd(var_core_value_sigD7E9, var_core_value_sigF323, Hd(var_core_value_sig04C6, var_core_value_sig1E36.docsSheetLikeLayout));
      } else Ud(var_core_value_sigD7E9);
      var_core_value_sigD7E9.style["visibility"] = var_core_value_sig0C32 ? "" : "hidden", var_core_value_sigD7E9.style["pointerEvents"] = var_core_value_sig0C32 && var_core_value_sigFA2E !== "inactive" ? "" : "none", (var_core_value_sigF323.left !== var_core_value_sig77DC || var_core_value_sigF323.top !== var_core_value_sigEA82 || var_core_value_sigF323.width !== var_core_value_sigC979 || var_core_value_sigF323.height !== var_core_value_sig8E10 || var_core_value_sig0C32 !== var_core_value_sigD1E7 || var_core_value_sig1D89 !== var_core_value_sig240A) && (var_core_value_sig77DC = var_core_value_sigF323.left, var_core_value_sigEA82 = var_core_value_sigF323.top, var_core_value_sigC979 = var_core_value_sigF323.width, var_core_value_sig8E10 = var_core_value_sigF323.height, var_core_value_sigD1E7 = var_core_value_sig0C32, var_core_value_sig240A = var_core_value_sig1D89, Fd(var_core_value_sigA79E, {
        height: var_core_value_sigF323.height,
        left: var_core_value_sigF323.left,
        top: var_core_value_sigF323.top,
        width: var_core_value_sigF323.width
      }), var_core_value_sigD7E9.style["left"] = var_core_value_sigF323.left + "px", var_core_value_sigD7E9.style["top"] = var_core_value_sigF323.top + "px", var_core_value_sigD7E9.style["width"] = var_core_value_sigF323.width + "px", var_core_value_sigD7E9.style["height"] = var_core_value_sigF323.height + "px");
    },
    var_core_value_sigE071 = () => {
      var_core_value_sig41FB(), var_core_value_sigF63F = window.requestAnimationFrame(var_core_value_sigE071);
    },
    var_core_value_sigEF01 = () => {
      var_core_value_sigA250 = undefined, var_core_value_sig41FB(), !(var_core_value_sig8647 <= 0) && (--var_core_value_sig8647, var_core_value_sigA250 = window.requestAnimationFrame(var_core_value_sigEF01));
    },
    var_core_value_sig6AB2 = var_core_value_sig2616 => {
      !Kd(var_core_value_sigA79E) && Yd(var_core_value_sig2616) && var_core_value_sigEA82 != null && (var_core_value_sig756B = var_core_value_sigEA82), Jd(var_core_value_sigA79E, var_core_value_sig2616, {
        height: var_core_value_sig8E10,
        left: var_core_value_sig77DC,
        top: var_core_value_sigEA82,
        width: var_core_value_sigC979
      }) && (var_core_value_sig9630.invalidate({
        embedId: var_core_value_sig1E36.embedId,
        reason: "wheel"
      }), var_core_value_sig8647 = Math.max(var_core_value_sig8647, 3), var_core_value_sigA250 ??= window.requestAnimationFrame(var_core_value_sigEF01));
    },
    var_core_value_sig4971 = () => {
      var_core_value_sig756B = undefined, var_core_value_sig9630.invalidate({
        embedId: var_core_value_sig1E36.embedId,
        reason: "host-scroll"
      }), var_core_value_sig8647 = Math.max(var_core_value_sig8647, 2), var_core_value_sigA250 ??= window.requestAnimationFrame(var_core_value_sigEF01);
    },
    var_core_value_sigA887 = () => {
      var_core_value_sig756B = undefined;
    };
  var_core_value_sig41FB(), document.body["appendChild"](var_core_value_sigD7E9);
  let var_core_value_sigC142 = new ResizeObserver(var_core_value_sig41FB);
  var_core_value_sigC142.observe(var_core_value_sigA79E);
  let var_core_value_sigEA08 = (var_core_value_sigFFDE = var_core_value_sig1E36.hostLayout$) == null ? undefined : var_core_value_sigFFDE.subscribe(var_core_value_sig4971);
  return window.addEventListener("pointerdown", var_core_value_sigA887, true), window.addEventListener("scroll", var_core_value_sig6AB2, true), window.addEventListener("wheel", var_core_value_sig6AB2, true), window.addEventListener("resize", var_core_value_sig6AB2), (var_core_value_sigFA2E !== "inactive" || Kd(var_core_value_sigA79E)) && (var_core_value_sigF63F = window.requestAnimationFrame(var_core_value_sigE071)), var_core_value_sig9BBC(() => {
    var_core_value_sigF63F != null && window.cancelAnimationFrame(var_core_value_sigF63F), var_core_value_sigA250 != null && window.cancelAnimationFrame(var_core_value_sigA250), var_core_value_sigEA08 == null || var_core_value_sigEA08.unsubscribe(), var_core_value_sigC142.disconnect(), window.removeEventListener("pointerdown", var_core_value_sigA887, true), window.removeEventListener("scroll", var_core_value_sig6AB2, true), window.removeEventListener("wheel", var_core_value_sig6AB2, true), window.removeEventListener("resize", var_core_value_sig6AB2), Fd(var_core_value_sigA79E), Pd(var_core_value_sigD7E9), Rd(var_core_value_sigA79E, var_core_value_sigD7E9, true, "stage2"), zd(var_core_value_sigD7E9, true, "stage2"), var_core_value_sigF20F != null && var_core_value_sigF20F.isConnected ? var_core_value_sigF20F.insertBefore(var_core_value_sigD7E9, var_core_value_sigF12E) : var_core_value_sigD7E9.remove();
  });
}
function Ld(var_core_value_sig1163, var_core_value_sig7BFB) {
  var var_core_value_sigE065, var_core_value_sig1B83, var_core_value_sig1F85;
  let var_core_value_sig0149 = var_core_value_sig1163.dataset["embedId"],
    var_core_value_sig9F77 = var_core_value_sig1163.ownerDocument,
    var_core_value_sig83CF = Gd(var_core_value_sig1163) ? [Wd(var_core_value_sig1163)] : [var_core_value_sig1163.getBoundingClientRect(), (var_core_value_sigE065 = var_core_value_sig1163.querySelector('[data-u-comp="embed-float-dom-content"]')) == null ? undefined : var_core_value_sigE065.getBoundingClientRect()],
    var_core_value_sigF518 = var_core_value_sig9F77.querySelector('[data-u-comp="embed-float-dom-chrome"][data-embed-id="' + var_core_value_sig0149 + "\x22]"),
    var_core_value_sigBDCA = [var_core_value_sigF518 == null || (var_core_value_sig1B83 = var_core_value_sigF518.querySelector('[data-embed-floating-menu="true"]')) == null ? undefined : var_core_value_sig1B83.getBoundingClientRect(), var_core_value_sigF518 == null || (var_core_value_sig1F85 = var_core_value_sigF518.querySelector("[data-embed-float-fullscreen-button]")) == null ? undefined : var_core_value_sig1F85.getBoundingClientRect()],
    var_core_value_sigCCF1 = Array.from(var_core_value_sig9F77.querySelectorAll('[data-embed-floating-menu-popup="true"]')).filter(var_core_value_sig97EF => var_core_value_sig97EF.dataset["embedId"] === var_core_value_sig0149).map(var_core_value_sigA0C0 => var_core_value_sigA0C0.getBoundingClientRect());
  return [...var_core_value_sig83CF, ...var_core_value_sigBDCA, ...var_core_value_sigCCF1].filter(var_core_value_sigAD4B => !!var_core_value_sigAD4B && var_core_value_sigAD4B.width > 0 && var_core_value_sigAD4B.height > 0).some(var_core_value_sig06EA => ef(var_core_value_sig06EA, var_core_value_sig7BFB.clientX, var_core_value_sig7BFB.clientY));
}
function Rd(var_core_value_sig74C0, var_core_value_sig291B, var_core_value_sig78A6, var_core_value_sigAA99) {
  let var_core_value_sigBE21 = var_core_value_sig78A6 ? "" : "none",
    var_core_value_sig8708 = var_core_value_sig74C0.querySelector('[data-u-comp="embed-float-dom-content"]'),
    var_core_value_sig42B4 = var_core_value_sig74C0.querySelector('[data-u-comp="embed-float-dom-live"]'),
    var_core_value_sig15BB = var_core_value_sig74C0.querySelector('[data-u-comp="embed-float-dom-live-canvas"]'),
    var_core_value_sigFDCB = var_core_value_sig74C0.querySelector('[data-u-comp="embed-float-dom-live-content"]'),
    var_core_value_sig788A = var_core_value_sig74C0.querySelector('[data-u-comp="embed-float-dom-interaction-gate"]'),
    var_core_value_sig8676 = var_core_value_sig291B == null ? undefined : var_core_value_sig291B.querySelector("[data-embed-overlay-root]"),
    var_core_value_sigDEEE = var_core_value_sig291B == null ? undefined : var_core_value_sig291B.querySelector("[data-embed-popup-root]");
  if (var_core_value_sig8676 == null || var_core_value_sig8676.style["setProperty"]("pointer-events", "none"), var_core_value_sigDEEE == null || var_core_value_sigDEEE.style["setProperty"]("pointer-events", "none"), Gd(var_core_value_sig74C0)) {
    var_core_value_sig74C0.style["setProperty"]("pointer-events", "none"), var_core_value_sig8708 == null || var_core_value_sig8708.style["setProperty"]("pointer-events", "none"), var_core_value_sig42B4 == null || var_core_value_sig42B4.style["setProperty"]("pointer-events", "none"), var_core_value_sig15BB == null || var_core_value_sig15BB.style["setProperty"]("pointer-events", var_core_value_sig78A6 ? "auto" : "none"), var_core_value_sigFDCB == null || var_core_value_sigFDCB.style["setProperty"]("pointer-events", "none"), var_core_value_sig788A == null || var_core_value_sig788A.style["setProperty"]("pointer-events", "none");
    return;
  }
  var_core_value_sig74C0.style["removeProperty"]("pointer-events"), var_core_value_sig8708 == null || var_core_value_sig8708.style["removeProperty"]("pointer-events"), var_core_value_sig42B4 == null || var_core_value_sig42B4.style["setProperty"]("pointer-events", var_core_value_sigBE21), var_core_value_sig15BB == null || var_core_value_sig15BB.style["removeProperty"]("pointer-events"), var_core_value_sigFDCB == null || var_core_value_sigFDCB.style["removeProperty"]("pointer-events"), var_core_value_sig788A == null || var_core_value_sig788A.style["setProperty"]("pointer-events", var_core_value_sigBE21);
}
function zd(var_core_value_sig990D, var_core_value_sig2E7E, var_core_value_sig5C96) {
  let var_core_value_sig2755 = var_core_value_sig2E7E && var_core_value_sig5C96 !== "stage2",
    var_core_value_sigC7AF = var_core_value_sig990D == null ? undefined : var_core_value_sig990D.querySelector("[data-embed-float-fullscreen-button]"),
    var_core_value_sigC669 = [var_core_value_sig990D == null ? undefined : var_core_value_sig990D.querySelector("[data-embed-overlay-root]"), var_core_value_sig990D == null ? undefined : var_core_value_sig990D.querySelector("[data-embed-popup-root]")];
  var_core_value_sigC7AF == null || var_core_value_sigC7AF.style["setProperty"]("visibility", var_core_value_sig2755 ? "" : "hidden"), var_core_value_sigC7AF == null || var_core_value_sigC7AF.style["setProperty"]("pointer-events", var_core_value_sig2755 ? "" : "none"), var_core_value_sigC669.forEach(var_core_value_sigF3C7 => {
    var_core_value_sigF3C7 == null || var_core_value_sigF3C7.style["setProperty"]("visibility", var_core_value_sig2E7E && var_core_value_sig5C96 === "stage2" ? "" : "hidden"), var_core_value_sigF3C7 == null || var_core_value_sigF3C7.style["setProperty"]("pointer-events", "none"), var_core_value_sig5C96 !== "stage2" && (var_core_value_sigF3C7 == null || var_core_value_sigF3C7.removeAttribute("data-embed-runtime-focus-role"), var_core_value_sigF3C7 == null || var_core_value_sigF3C7.querySelectorAll("[data-embed-runtime-focus-role]").forEach(var_core_value_sigCA05 => {
      var_core_value_sigCA05.removeAttribute("data-embed-runtime-focus-role");
    }));
  });
}
function Bd(var_core_value_sigDDD1, var_core_value_sigDA7F, var_core_value_sigC174) {
  return var_core_value_sigDDD1 ? var_core_value_sigDA7F : var_core_value_sigC174 >= 40;
}
function Vd(var_core_value_sig93EA, var_core_value_sigA2DF, var_core_value_sigE813) {
  let var_core_value_sig03AA = var_core_value_sigE813.left - var_core_value_sigA2DF.left,
    var_core_value_sig1055 = var_core_value_sigE813.width;
  var_core_value_sig93EA.querySelectorAll('[data-embed-floating-menu="true"]').forEach(var_core_value_sig5633 => {
    var var_core_value_sig2492;
    let var_core_value_sig39F2 = (var_core_value_sig2492 = var_core_value_sig5633.closest("[data-embed-floating-menu-entry]")) == null ? undefined : var_core_value_sig2492.dataset["embedFloatingMenuEntry"],
      var_core_value_sigAD47 = var_core_value_sig5633.dataset["uComp"] === "base-embed-floating-menu",
      var_core_value_sig1722 = var_core_value_sig5633.dataset["uComp"] === "sheet-embed-floating-menu";
    var_core_value_sig39F2 === "docs-custom-block" ? (var_core_value_sig5633.style["top"] = var_core_value_sigAD47 ? "-48px" : "-52px", var_core_value_sigAD47 ? (var_core_value_sig5633.style["setProperty"]("left", var_core_value_sig03AA + "px", "important"), var_core_value_sig5633.style["setProperty"]("right", "auto", "important"), var_core_value_sig5633.style["setProperty"]("width", var_core_value_sig1055 + "px", "important")) : var_core_value_sig1722 && (var_core_value_sig5633.style["setProperty"]("left", var_core_value_sig03AA + var_core_value_sig1055 / 2 + "px", "important"), var_core_value_sig5633.style["setProperty"]("max-width", var_core_value_sig1055 + "px"))) : (var_core_value_sigAD47 || var_core_value_sig1722) && (var_core_value_sig5633.style["top"] = "8px");
  });
}
function Hd(var_core_value_sigC30C1, var_core_value_sig1AD5) {
  if (!var_core_value_sig1AD5) return var_core_value_sigC30C1;
  let var_core_value_sigAF2C = Math.min(var_core_value_sig1AD5.contentWidth, var_core_value_sig1AD5.pageContentWidth);
  if (var_core_value_sigAF2C <= 0 || var_core_value_sigC30C1.width <= 0) return var_core_value_sigC30C1;
  let var_core_value_sigD893 = var_core_value_sigC30C1.width / var_core_value_sigAF2C;
  return new DOMRect(var_core_value_sigC30C1.left, var_core_value_sigC30C1.top, var_core_value_sig1AD5.pageContentWidth * var_core_value_sigD893, var_core_value_sigC30C1.height);
}
function Ud(var_core_value_sig9C29) {
  var_core_value_sig9C29.querySelectorAll('[data-embed-floating-menu="true"]').forEach(var_core_value_sig7F86 => {
    var var_core_value_sigF69D;
    var_core_value_sig7F86.style["removeProperty"]("left"), var_core_value_sig7F86.style["removeProperty"]("top"), var_core_value_sig7F86.style["removeProperty"]("width"), var_core_value_sig7F86.style["removeProperty"]("right"), var_core_value_sig7F86.style["removeProperty"]("max-width"), (var_core_value_sigF69D = var_core_value_sig7F86.querySelector("[data-u-comp=\x22base-embed-view-slot\x22]")) == null || var_core_value_sigF69D.style["removeProperty"]("margin-left");
  });
}
function Wd(var_core_value_sigBE39) {
  let var_core_value_sig6945 = Kd(var_core_value_sigBE39) ? var_core_value_sigBE39.querySelector("[data-u-comp=\x22embed-float-dom-content\x22]") : null,
    var_core_value_sigDED6 = var_core_value_sig6945 == null ? undefined : var_core_value_sig6945.getBoundingClientRect(),
    var_core_value_sig0A6B = var_core_value_sigBE39.getBoundingClientRect();
  return Xd(var_core_value_sigDED6 && var_core_value_sigDED6.width > 0 && var_core_value_sigDED6.height > 0 ? Gd(var_core_value_sigBE39) ? Zd(var_core_value_sigDED6, var_core_value_sig0A6B.bottom) : var_core_value_sigDED6 : var_core_value_sig0A6B, var_core_value_sigBE39);
}
function Gd(var_core_value_sig2C8D) {
  return !!var_core_value_sig2C8D.closest('[data-embed-docs-custom-block-sheet-like="true"]');
}
function Kd(var_core_value_sig1CC1) {
  return Gd(var_core_value_sig1CC1) || !!var_core_value_sig1CC1.closest("[data-u-comp=\x22embed-docs-custom-block\x22]");
}
function qd(var_core_value_sigB460, var_core_value_sigBA9E, var_core_value_sigB69E, var_core_value_sig291C) {
  var_core_value_sig291C.current["forEach"](var_core_value_sig7CB9 => window.cancelAnimationFrame(var_core_value_sig7CB9)), var_core_value_sig291C.current = [], var_core_value_sigB460.invalidate({
    embedId: var_core_value_sigBA9E,
    reason: var_core_value_sigB69E
  });
  let var_core_value_sigB11D = var_core_value_sigC1D8 => {
    let var_core_value_sigCF8B = window.requestAnimationFrame(() => {
      var_core_value_sig291C.current = var_core_value_sig291C.current["filter"](var_core_value_sig24B9 => var_core_value_sig24B9 !== var_core_value_sigCF8B), var_core_value_sigB460.invalidate({
        embedId: var_core_value_sigBA9E,
        reason: var_core_value_sigB69E
      }), var_core_value_sigC1D8 > 1 && var_core_value_sigB11D(var_core_value_sigC1D8 - 1);
    });
    var_core_value_sig291C.current["push"](var_core_value_sigCF8B);
  };
  var_core_value_sigB11D(2);
}
function Jd(var_core_value_sig2B33, var_core_value_sig705C, var_core_value_sigD209) {
  if (Iu(var_core_value_sig705C)) return false;
  let var_core_value_sigD13E = var_core_value_sig705C == null ? undefined : var_core_value_sig705C.target;
  return !(var_core_value_sigD13E instanceof Node && var_core_value_sig2B33.contains(var_core_value_sigD13E) || var_core_value_sigD13E instanceof HTMLElement && var_core_value_sigD13E.closest('[data-embed-float-dom="true"]') || var_core_value_sig705C instanceof WheelEvent && ([...Ed.values()].some(var_core_value_sigCD15 => tf(var_core_value_sigCD15, var_core_value_sig705C)) || tf(var_core_value_sigD209, var_core_value_sig705C)));
}
function Yd(var_core_value_sig5AF8) {
  return var_core_value_sig5AF8 instanceof WheelEvent ? Math.abs(var_core_value_sig5AF8.deltaY) >= Math.abs(var_core_value_sig5AF8.deltaX) : (var_core_value_sig5AF8 == null ? undefined : var_core_value_sig5AF8.type) === "scroll";
}
function Xd(var_core_value_sig22EF, var_core_value_sig23DF) {
  let var_core_value_sig1EB4 = Qd(var_core_value_sig23DF, var_core_value_sig22EF);
  if (!var_core_value_sig1EB4 && var_core_value_sig22EF.top >= 0 && var_core_value_sig22EF.left >= 0) return var_core_value_sig22EF;
  let var_core_value_sigF12B = (var_core_value_sig1EB4 == null ? undefined : var_core_value_sig1EB4.getBoundingClientRect()) ?? new DOMRect(0, 0, window.innerWidth, window.innerHeight),
    var_core_value_sig170E = Math.max(var_core_value_sig22EF.left, var_core_value_sigF12B.left),
    var_core_value_sig72DB = Math.max(var_core_value_sig22EF.top, var_core_value_sigF12B.top),
    var_core_value_sigA272 = Math.min(var_core_value_sig22EF.right, var_core_value_sigF12B.right),
    var_core_value_sig60C4 = Math.min(var_core_value_sig22EF.bottom, var_core_value_sigF12B.bottom);
  return var_core_value_sigA272 <= var_core_value_sig170E || var_core_value_sig60C4 <= var_core_value_sig72DB ? new DOMRect(var_core_value_sig170E, var_core_value_sig72DB, 0, 0) : new DOMRect(var_core_value_sig170E, var_core_value_sig72DB, var_core_value_sigA272 - var_core_value_sig170E, var_core_value_sig60C4 - var_core_value_sig72DB);
}
function Zd(var_core_value_sig4340, var_core_value_sig1F11) {
  let var_core_value_sig3A1B = Math.min(var_core_value_sig4340.bottom, var_core_value_sig1F11);
  return var_core_value_sig3A1B <= var_core_value_sig4340.top ? new DOMRect(var_core_value_sig4340.left, var_core_value_sig4340.top, 0, 0) : new DOMRect(var_core_value_sig4340.left, var_core_value_sig4340.top, var_core_value_sig4340.width, var_core_value_sig3A1B - var_core_value_sig4340.top);
}
function Qd(var_core_value_sig6543, var_core_value_sigA0E6) {
  let var_core_value_sig9F46 = var_core_value_sig6543.parentElement;
  for (; var_core_value_sig9F46 && var_core_value_sig9F46 !== document.body && var_core_value_sig9F46 !== document.documentElement;) {
    if (Wu(var_core_value_sig9F46) && !$d(var_core_value_sig9F46, var_core_value_sigA0E6)) return var_core_value_sig9F46;
    var_core_value_sig9F46 = var_core_value_sig9F46.parentElement;
  }
  return null;
}
function $d(var_core_value_sigF155, var_core_value_sig3165) {
  let var_core_value_sigEF93 = var_core_value_sigF155.getBoundingClientRect();
  return var_core_value_sigEF93.width <= 0 || var_core_value_sigEF93.height <= 0 || Math.abs(var_core_value_sigEF93.left - var_core_value_sig3165.left) < 1 && Math.abs(var_core_value_sigEF93.top - var_core_value_sig3165.top) < 1 && Math.abs(var_core_value_sigEF93.width - var_core_value_sig3165.width) < 1 && Math.abs(var_core_value_sigEF93.height - var_core_value_sig3165.height) < 1;
}
function ef(var_core_value_sig6711, var_core_value_sigE204, var_core_value_sig58C8) {
  return var_core_value_sigE204 >= var_core_value_sig6711.left && var_core_value_sigE204 <= var_core_value_sig6711.right && var_core_value_sig58C8 >= var_core_value_sig6711.top && var_core_value_sig58C8 <= var_core_value_sig6711.bottom;
}
function tf(var_core_value_sig19E9, var_core_value_sigBB40) {
  let {
    height: var_core_value_sigA2E71,
    left: var_core_value_sigB05D,
    top: var_core_value_sigD96B,
    width: var_core_value_sig5F92
  } = var_core_value_sig19E9;
  return Number.isFinite(var_core_value_sigB05D) && Number.isFinite(var_core_value_sigD96B) && Number.isFinite(var_core_value_sig5F92) && Number.isFinite(var_core_value_sigA2E71) && (var_core_value_sig5F92 ?? 0) > 0 && (var_core_value_sigA2E71 ?? 0) > 0 && var_core_value_sigBB40.clientX >= var_core_value_sigB05D && var_core_value_sigBB40.clientX <= var_core_value_sigB05D + var_core_value_sig5F92 && var_core_value_sigBB40.clientY >= var_core_value_sigD96B && var_core_value_sigBB40.clientY <= var_core_value_sigD96B + var_core_value_sigA2E71;
}
function nf(...var_core_value_sig501D) {
  return Math.max(1, var_core_value_sig501D.find(var_core_value_sig524D => typeof var_core_value_sig524D == "number" && Number.isFinite(var_core_value_sig524D) && var_core_value_sig524D > 0) ?? 1);
}
function rf(var_core_value_sigDA2B) {
  return typeof var_core_value_sigDA2B == "number" && Number.isFinite(var_core_value_sigDA2B) && var_core_value_sigDA2B > 0 ? var_core_value_sigDA2B : 1;
}
const af = "univer:embed-float-drag-handle:pointerdown";
function of(...var_core_value_sigF322) {
  return var_core_value_sigF322.filter(var_core_value_sigD7F4 => !!var_core_value_sigD7F4 && var_core_value_sigD7F4.isConnected);
}
function sf(var_core_value_sigE133, var_core_value_sigE50A1, var_core_value_sig8383, var_core_value_sigA30F, var_core_value_sig93DB) {
  let var_core_value_sigFBEC = var_core_value_sig93DB === var_core_value_sigC0F3.UNIVER_SLIDE,
    var_core_value_sig4E78 = var_core_value_sigFBEC ? () => {} : var_core_value_sig1D82(var_core_value_sigE50A1 ? [var_core_value_sigE133, var_core_value_sigE50A1] : [var_core_value_sigE133]),
    var_core_value_sigA1E7 = var_core_value_sig7B87 => {
      let var_core_value_sig933D = var_core_value_sig7B87.target instanceof HTMLElement ? var_core_value_sig7B87.target : null,
        var_core_value_sig6ACE = var_core_value_sig933D ? var_core_value_sig933D.closest('[data-embed-floating-menu="true"], [data-embed-floating-menu-popup="true"], [data-embed-ribbon-override="true"], [data-embed-float-fullscreen-button="true"]') : null,
        var_core_value_sig7675 = var_core_value_sigE133.dataset["embedId"],
        var_core_value_sig21B8 = uf(var_core_value_sigE133, var_core_value_sigE50A1, var_core_value_sig6ACE, var_core_value_sig7675),
        var_core_value_sigD545 = !!var_core_value_sig933D && !!(var_core_value_sigA30F != null && var_core_value_sigA30F.contains(var_core_value_sig933D)) && !var_core_value_sigE133.contains(var_core_value_sig933D);
      if (!(!var_core_value_sig21B8 && !var_core_value_sigD545 && !lf(var_core_value_sigFBEC, var_core_value_sigE133, var_core_value_sigE50A1, var_core_value_sig933D)) && !(var_core_value_sigFBEC && var_core_value_sig21B8 && cf(var_core_value_sig6ACE, var_core_value_sig933D, var_core_value_sig7B87)) && !df(var_core_value_sigFBEC, var_core_value_sig6ACE, var_core_value_sig933D, var_core_value_sig7B87)) {
        if (var_core_value_sigFBEC) {
          var_core_value_sig8383 == null || var_core_value_sig8383(var_core_value_sig7B87), var_core_value_sig7B87.preventDefault(), var_core_value_sig7B87.stopPropagation();
          return;
        }
        !var_core_value_sig7B87.ctrlKey && !var_core_value_sig7B87.metaKey && (var_core_value_sig8383 == null ? undefined : var_core_value_sig8383(var_core_value_sig7B87)) !== true || (var_core_value_sig7B87.preventDefault(), var_core_value_sig7B87.stopPropagation());
      }
    };
  return var_core_value_sigE133.ownerDocument["addEventListener"]("wheel", var_core_value_sigA1E7, {
    capture: true,
    passive: false
  }), () => {
    var_core_value_sigE133.ownerDocument["removeEventListener"]("wheel", var_core_value_sigA1E7, true), var_core_value_sig4E78();
  };
}
function cf(var_core_value_sig1B4F, var_core_value_sigA6E0, var_core_value_sig5B1A) {
  return (var_core_value_sig1B4F == null ? undefined : var_core_value_sig1B4F.dataset["embedFloatingMenuPopup"]) !== "true" || var_core_value_sig5B1A.ctrlKey || var_core_value_sig5B1A.metaKey ? false : ((!var_core_value_sigA6E0 || !ff(var_core_value_sig1B4F, var_core_value_sigA6E0, var_core_value_sig5B1A)) && var_core_value_sig5B1A.preventDefault(), var_core_value_sig5B1A.stopPropagation(), true);
}
function lf(var_core_value_sig1004, var_core_value_sigAE05, var_core_value_sigE5C6, var_core_value_sig6FB9) {
  return var_core_value_sig1004 && (var_core_value_sigAE05.contains(var_core_value_sig6FB9) || (var_core_value_sigE5C6 == null ? undefined : var_core_value_sigE5C6.contains(var_core_value_sig6FB9)) === true);
}
function uf(var_core_value_sig0C7F, var_core_value_sig41F0, var_core_value_sigA696, var_core_value_sig91AE) {
  return !!var_core_value_sigA696 && (var_core_value_sig0C7F.contains(var_core_value_sigA696) || (var_core_value_sig41F0 == null ? undefined : var_core_value_sig41F0.contains(var_core_value_sigA696)) === true || !!var_core_value_sig91AE && var_core_value_sigA696.dataset["embedId"] === var_core_value_sig91AE);
}
function df(var_core_value_sigBC03, var_core_value_sig5CD8, var_core_value_sigC707, var_core_value_sig37BD) {
  return !var_core_value_sigBC03 && !!var_core_value_sig5CD8 && !!var_core_value_sigC707 && ff(var_core_value_sig5CD8, var_core_value_sigC707, var_core_value_sig37BD);
}
function ff(var_core_value_sig03EA, var_core_value_sig6457, var_core_value_sig112F) {
  if (var_core_value_sig112F.ctrlKey || var_core_value_sig112F.metaKey) return false;
  let var_core_value_sig04D3 = var_core_value_sig112F.deltaX || (var_core_value_sig112F.shiftKey ? var_core_value_sig112F.deltaY : 0),
    var_core_value_sig876A = var_core_value_sig112F.shiftKey ? 0 : var_core_value_sig112F.deltaY,
    var_core_value_sigB1F9 = var_core_value_sig6457;
  for (; var_core_value_sigB1F9 && var_core_value_sig03EA.contains(var_core_value_sigB1F9);) {
    if (pf(var_core_value_sigB1F9, var_core_value_sig04D3, var_core_value_sig876A)) return true;
    if (var_core_value_sigB1F9 === var_core_value_sig03EA) break;
    var_core_value_sigB1F9 = var_core_value_sigB1F9.parentElement;
  }
  return false;
}
function pf(var_core_value_sig635D, var_core_value_sig6923, var_core_value_sig338F) {
  let var_core_value_sig7B0E = var_core_value_sig635D.ownerDocument["defaultView"];
  if (!var_core_value_sig7B0E) return false;
  let var_core_value_sigDD4B = var_core_value_sig7B0E.getComputedStyle(var_core_value_sig635D),
    var_core_value_sig5E4F = mf(var_core_value_sigDD4B.overflowX) && hf(var_core_value_sig635D.scrollLeft, var_core_value_sig635D.scrollWidth - var_core_value_sig635D.clientWidth, var_core_value_sig6923),
    var_core_value_sig3736 = mf(var_core_value_sigDD4B.overflowY) && hf(var_core_value_sig635D.scrollTop, var_core_value_sig635D.scrollHeight - var_core_value_sig635D.clientHeight, var_core_value_sig338F);
  return var_core_value_sig5E4F || var_core_value_sig3736;
}
function mf(var_core_value_sig7D19) {
  return var_core_value_sig7D19 === "auto" || var_core_value_sig7D19 === "scroll";
}
function hf(var_core_value_sig9E9F, var_core_value_sig4A92, var_core_value_sig652F) {
  return var_core_value_sig4A92 > 0 && (var_core_value_sig652F < 0 ? var_core_value_sig9E9F > 0 : var_core_value_sig652F > 0 && var_core_value_sig9E9F < var_core_value_sig4A92);
}
function gf(var_core_value_sigA8CE, var_core_value_sig1941) {
  let var_core_value_sigF945 = var_core_value_sigA8CE.querySelector('[data-u-comp="hover-track"]'),
    var_core_value_sig6178 = (var_core_value_sigF945 == null ? undefined : var_core_value_sigF945.firstElementChild) instanceof HTMLElement ? var_core_value_sigF945.firstElementChild : null,
    var_core_value_sig483F = var_core_value_sig91C9 => var_core_value_sig91C9 instanceof Node && (var_core_value_sigA8CE.contains(var_core_value_sig91C9) || var_core_value_sig1941.contains(var_core_value_sig91C9)),
    var_core_value_sig2FD9 = () => {
      var var_core_value_sig64BA, var_core_value_sig3FD5;
      var_core_value_sigF945 == null || var_core_value_sigF945.style["setProperty"]("opacity", "1"), ((var_core_value_sig64BA = var_core_value_sigA8CE.ownerDocument["defaultView"]) == null || (var_core_value_sig3FD5 = var_core_value_sig64BA.matchMedia) == null ? undefined : var_core_value_sig3FD5.call(var_core_value_sig64BA, "(prefers-reduced-motion:\x20reduce)").matches) !== true && (var_core_value_sig6178 == null || var_core_value_sig6178.style["setProperty"]("animation", "univer-spin 5s linear infinite"));
    },
    var_core_value_sig3DB9 = () => {
      var_core_value_sigF945 == null || var_core_value_sigF945.style["removeProperty"]("opacity"), var_core_value_sig6178 == null || var_core_value_sig6178.style["removeProperty"]("animation");
    },
    var_core_value_sig5948 = () => {
      var_core_value_sig1941.style["setProperty"]("opacity", "1"), var_core_value_sig2FD9();
    },
    var_core_value_sigFA04 = var_core_value_sig1008 => {
      var_core_value_sig483F(var_core_value_sig1008.relatedTarget) || (var_core_value_sig1941.style["removeProperty"]("opacity"), var_core_value_sig3DB9());
    };
  return var_core_value_sigA8CE.addEventListener("pointerenter", var_core_value_sig5948), var_core_value_sigA8CE.addEventListener("pointerleave", var_core_value_sigFA04), var_core_value_sig1941.addEventListener("pointerenter", var_core_value_sig5948), var_core_value_sig1941.addEventListener("pointerleave", var_core_value_sigFA04), (var_core_value_sigA8CE.matches(":hover") || var_core_value_sig1941.matches(":hover")) && var_core_value_sig5948(), () => {
    var_core_value_sigA8CE.removeEventListener("pointerenter", var_core_value_sig5948), var_core_value_sigA8CE.removeEventListener("pointerleave", var_core_value_sigFA04), var_core_value_sig1941.removeEventListener("pointerenter", var_core_value_sig5948), var_core_value_sig1941.removeEventListener("pointerleave", var_core_value_sigFA04), var_core_value_sig1941.style["removeProperty"]("opacity"), var_core_value_sig3DB9();
  };
}
function _f(var_core_value_sig3986, var_core_value_sig1950) {
  if (var_core_value_sig1950 instanceof HTMLCanvasElement && var_core_value_sig3986.some(var_core_value_sigB9F4 => var_core_value_sigB9F4.contains(var_core_value_sig1950))) return var_core_value_sig1950;
  for (let var_core_value_sig2D23 of var_core_value_sig3986) {
    let var_core_value_sig2F2B = var_core_value_sig2D23.querySelector("canvas");
    if (var_core_value_sig2F2B) return var_core_value_sig2F2B;
  }
  return null;
}
function vf(var_core_value_sigE263, var_core_value_sig86D3 = false) {
  return var_core_value_sigE263 !== var_core_value_sigC0F3.UNIVER_SHEET && var_core_value_sigE263 !== var_core_value_sigC0F3.UNIVER_DOC && (var_core_value_sig86D3 || var_core_value_sigE263 !== var_core_value_sigC0F3.UNIVER_BASE);
}
function yf(var_core_value_sigE5A5) {
  let var_core_value_sig1ABB = bf(var_core_value_sigE5A5);
  return var_core_value_sig1ABB === "child-editor" || var_core_value_sig1ABB === "child-popup" || var_core_value_sig1ABB === "floating-menu";
}
function bf(var_core_value_sig8781) {
  var var_core_value_sig360F;
  if (!(var_core_value_sig8781 instanceof HTMLElement)) return;
  let var_core_value_sig79D71 = (var_core_value_sig360F = var_core_value_sig8781.closest("[data-embed-runtime-focus-role]")) == null ? undefined : var_core_value_sig360F.getAttribute(ws);
  return Af(var_core_value_sig79D71) ? var_core_value_sig79D71 : undefined;
}
function xf(var_core_value_sigE9A1, var_core_value_sigCAD1, var_core_value_sig3105, var_core_value_sig4D9D, var_core_value_sig6D0D) {
  if (var_core_value_sig6D0D !== "stage2" || !var_core_value_sig3105 || !var_core_value_sig4D9D) return;
  let var_core_value_sig5BA6 = new Map(),
    var_core_value_sig33C8 = () => {
      let var_core_value_sigF2E0 = new Set([var_core_value_sig4D9D, ...var_core_value_sigCAD1.listElements(var_core_value_sig3105)]);
      var_core_value_sig5BA6.forEach((var_core_value_sig70AF, var_core_value_sigD04E) => {
        var_core_value_sigF2E0.has(var_core_value_sigD04E) || (var_core_value_sig70AF.dispose(), var_core_value_sig5BA6.delete(var_core_value_sigD04E));
      }), var_core_value_sigF2E0.forEach(var_core_value_sigB99B => {
        var_core_value_sig5BA6.has(var_core_value_sigB99B) || var_core_value_sigE9A1.checkElementInCurrentContainers(var_core_value_sigB99B) || var_core_value_sig5BA6.set(var_core_value_sigB99B, var_core_value_sigE9A1.registerContainerElement(var_core_value_sigB99B));
      });
    };
  var_core_value_sig33C8();
  let var_core_value_sig851E = var_core_value_sigCAD1.runtimeFocusChanged$["subscribe"](var_core_value_sig33C8);
  return var_core_value_sig9BBC(() => {
    var_core_value_sig851E.unsubscribe(), var_core_value_sig5BA6.forEach(var_core_value_sig5A75 => var_core_value_sig5A75.dispose()), var_core_value_sig5BA6.clear();
  });
}
function Sf(var_core_value_sigD0FB) {
  let var_core_value_sig0A5F = var_core_value_sig9214 => {
      var var_core_value_sigC8B1, var_core_value_sig35E2;
      let var_core_value_sig9B13 = var_core_value_sig9214.target,
        var_core_value_sig60E6 = ((var_core_value_sigC8B1 = var_core_value_sigD0FB.isExternalHostInteraction) == null ? undefined : var_core_value_sigC8B1.call(var_core_value_sigD0FB, var_core_value_sig9214)) ?? false;
      if (var_core_value_sigD0FB.floatingActiveService["getStage"](var_core_value_sigD0FB.embedId) === "inactive") return;
      var_core_value_sig60E6 && (var_core_value_sigD0FB.externalHostInteractionUntil["current"] = Date.now() + var_core_value_sigD0FB.graceMs);
      let var_core_value_sig1F6E = var_core_value_sigD0FB.focusCoordinator["containsElement"](var_core_value_sigD0FB.embedId, var_core_value_sig9B13, var_core_value_sig9214) || var_core_value_sigD0FB.interactionBoundaryService["contains"](var_core_value_sigD0FB.embedId, var_core_value_sig9B13, var_core_value_sig9214);
      var_core_value_sig1F6E && (var_core_value_sigD0FB.ownedPointerInteractionUntil["current"] = Date.now() + var_core_value_sigD0FB.graceMs), !(!var_core_value_sig9B13 || var_core_value_sigD0FB.container["contains"](var_core_value_sig9B13) || (var_core_value_sig35E2 = var_core_value_sigD0FB.chrome) != null && var_core_value_sig35E2.contains(var_core_value_sig9B13) || var_core_value_sig9B13.closest("[data-embed-floating-menu=\x22true\x22],\x20[data-embed-floating-menu-popup=\x22true\x22],\x20[data-embed-ribbon-override=\x22true\x22],\x20[data-embed-float-fullscreen-button=\x22true\x22]") || var_core_value_sig1F6E || var_core_value_sig60E6 || Ld(var_core_value_sigD0FB.container, var_core_value_sig9214)) && var_core_value_sigD0FB.activationService["clearFloating"](var_core_value_sigD0FB.embedId, var_core_value_sigD0FB.hostUnitId);
    },
    var_core_value_sig53D2 = var_core_value_sig7A6B => {
      var var_core_value_sig20F6;
      let var_core_value_sigAEE0 = var_core_value_sig7A6B.target,
        var_core_value_sig72B6 = var_core_value_sigD0FB.container["ownerDocument"] ?? (var_core_value_sigAEE0 == null ? undefined : var_core_value_sigAEE0.ownerDocument),
        var_core_value_sig43E8 = var_core_value_sigD0FB.focusCoordinator["hasBlockingChildFocusLease"](var_core_value_sigD0FB.embedId, {
          ignoreOwners: var_core_value_sigD0FB.runtimeFocusOwners
        });
      var_core_value_sigD0FB.floatingActiveService["getStage"](var_core_value_sigD0FB.embedId) !== "inactive" && (!var_core_value_sigAEE0 || var_core_value_sig43E8 || Date.now() < var_core_value_sigD0FB.ownedPointerInteractionUntil["current"] || Date.now() < var_core_value_sigD0FB.externalHostInteractionUntil["current"] || var_core_value_sigD0FB.interactionBoundaryService["hasRecentInteractionFor"](var_core_value_sigD0FB.embedId, var_core_value_sig72B6) || !Df(var_core_value_sigAEE0) || var_core_value_sigD0FB.container["contains"](var_core_value_sigAEE0) || (var_core_value_sig20F6 = var_core_value_sigD0FB.chrome) != null && var_core_value_sig20F6.contains(var_core_value_sigAEE0) || var_core_value_sigAEE0.closest('[data-embed-floating-menu="true"], [data-embed-floating-menu-popup="true"], [data-embed-ribbon-override="true"], [data-embed-float-fullscreen-button="true"]') || var_core_value_sigD0FB.focusCoordinator["containsElement"](var_core_value_sigD0FB.embedId, var_core_value_sigAEE0, var_core_value_sig7A6B) || var_core_value_sigD0FB.interactionBoundaryService["contains"](var_core_value_sigD0FB.embedId, var_core_value_sigAEE0, var_core_value_sig7A6B) || var_core_value_sigD0FB.activationService["clearFloating"](var_core_value_sigD0FB.embedId, var_core_value_sigD0FB.hostUnitId));
    };
  return document.addEventListener("pointerdown", var_core_value_sig0A5F, true), document.addEventListener("focusin", var_core_value_sig53D2, true), var_core_value_sig9BBC(() => {
    document.removeEventListener("pointerdown", var_core_value_sig0A5F, true), document.removeEventListener("focusin", var_core_value_sig53D2, true);
  });
}
function Cf(var_core_value_sigEDB2) {
  let var_core_value_sig71CD,
    var_core_value_sig6687 = () => {
      var_core_value_sig71CD = undefined;
    },
    var_core_value_sigCFDD = var_core_value_sigB1FB1 => {
      let var_core_value_sig6876 = wf(var_core_value_sigEDB2.embedModelService["getDescriptor"](var_core_value_sigEDB2.data["hostUnitId"], var_core_value_sigEDB2.data["embedId"]), var_core_value_sigEDB2.data);
      if (!(var_core_value_sig6876 != null && var_core_value_sig6876.childUnitId)) return;
      let var_core_value_sig55FB = var_core_value_sigB1FB1.target;
      var_core_value_sig55FB != null && var_core_value_sig55FB.closest("[data-embed-floating-menu=\x22true\x22],\x20[data-embed-floating-menu-popup=\x22true\x22],\x20[data-embed-ribbon-override=\x22true\x22],\x20[data-embed-float-fullscreen-button=\x22true\x22]") || var_core_value_sigEDB2.floatingActiveService["getStage"](var_core_value_sigEDB2.data["embedId"]) !== "stage2" && (var_core_value_sig71CD = {
        button: var_core_value_sigB1FB1.button ?? 0,
        dragStarted: false,
        moved: false,
        pointerId: var_core_value_sigB1FB1.pointerId,
        startedAt: Date.now(),
        startX: var_core_value_sigB1FB1.clientX,
        startY: var_core_value_sigB1FB1.clientY
      });
    },
    var_core_value_sigDC0A = var_core_value_sig2870 => {
      if (!var_core_value_sig71CD || var_core_value_sig71CD.pointerId !== var_core_value_sig2870.pointerId || Math.hypot(var_core_value_sig2870.clientX - var_core_value_sig71CD.startX, var_core_value_sig2870.clientY - var_core_value_sig71CD.startY) <= 4) return;
      var_core_value_sig71CD.moved = true;
      let var_core_value_sigC865 = Cu({
        interactionFlow: var_core_value_sigEDB2.interactionFlow,
        stage: var_core_value_sigEDB2.floatingActiveService["getStage"](var_core_value_sigEDB2.data["embedId"])
      });
      !var_core_value_sigEDB2.enableStage1BodyDrag || var_core_value_sig71CD.dragStarted || !var_core_value_sigC865.allowHostBodyDrag || (var_core_value_sig71CD.dragStarted = true, document.dispatchEvent(new CustomEvent(af, {
        detail: {
          button: var_core_value_sig71CD.button,
          clientX: var_core_value_sig71CD.startX,
          clientY: var_core_value_sig71CD.startY,
          embedId: var_core_value_sigEDB2.data["embedId"],
          hostAnchorId: var_core_value_sigEDB2.data["hostAnchorId"],
          hostUnitId: var_core_value_sigEDB2.data["hostUnitId"],
          pointerId: var_core_value_sig71CD.pointerId
        }
      })));
    },
    var_core_value_sig644F = var_core_value_sig6788 => {
      let var_core_value_sig7B1F = var_core_value_sig71CD;
      if (var_core_value_sig71CD = undefined, !var_core_value_sig7B1F || var_core_value_sig7B1F.pointerId !== var_core_value_sig6788.pointerId || var_core_value_sig7B1F.moved || Date.now() - var_core_value_sig7B1F.startedAt > 500) return;
      let var_core_value_sig7E51 = wf(var_core_value_sigEDB2.embedModelService["getDescriptor"](var_core_value_sigEDB2.data["hostUnitId"], var_core_value_sigEDB2.data["embedId"]), var_core_value_sigEDB2.data);
      if (!(var_core_value_sig7E51 != null && var_core_value_sig7E51.childUnitId)) return;
      let var_core_value_sigAE87 = var_core_value_sigEDB2.floatingActiveService["getStage"](var_core_value_sigEDB2.data["embedId"]);
      if (var_core_value_sigAE87 !== "stage2") {
        if (var_core_value_sigAE87 === "stage1") {
          var_core_value_sigEDB2.activationService["activateFloating"](var_core_value_sig7E51, "stage2", {
            portalContainer: var_core_value_sigEDB2.popupRoot
          });
          return;
        }
        if (var_core_value_sigEDB2.interactionFlow === "doc-block") {
          var_core_value_sigEDB2.acquireStage2SessionLease(), var_core_value_sigEDB2.activationService["activateFloating"](var_core_value_sig7E51, "stage2", {
            portalContainer: var_core_value_sigEDB2.popupRoot
          }), var_core_value_sigEDB2.releaseStage2SessionLeaseIfActivationDoesNotStick();
          return;
        }
        var_core_value_sigEDB2.activationService["activateFloating"](var_core_value_sig7E51, "stage1");
      }
    };
  return var_core_value_sigEDB2.gate["addEventListener"]("pointerdown", var_core_value_sigCFDD, true), var_core_value_sigEDB2.gate["addEventListener"]("pointermove", var_core_value_sigDC0A, true), var_core_value_sigEDB2.gate["addEventListener"]("pointerup", var_core_value_sig644F, true), var_core_value_sigEDB2.gate["addEventListener"]("pointercancel", var_core_value_sig6687, true), var_core_value_sig9BBC(() => {
    var_core_value_sigEDB2.gate["removeEventListener"]("pointerdown", var_core_value_sigCFDD, true), var_core_value_sigEDB2.gate["removeEventListener"]("pointermove", var_core_value_sigDC0A, true), var_core_value_sigEDB2.gate["removeEventListener"]("pointerup", var_core_value_sig644F, true), var_core_value_sigEDB2.gate["removeEventListener"]("pointercancel", var_core_value_sig6687, true);
  });
}
function wf(var_core_value_sigDB71, var_core_value_sig46F8) {
  return !var_core_value_sigDB71 || var_core_value_sigDB71.childUnitId || !var_core_value_sig46F8.childUnitId || var_core_value_sig46F8.childType == null ? var_core_value_sigDB71 : {
    ...var_core_value_sigDB71,
    childType: var_core_value_sig46F8.childType,
    childUnitId: var_core_value_sig46F8.childUnitId
  };
}
function Tf(var_core_value_sig1F6D) {
  let var_core_value_sig077A = () => {
      let var_core_value_sigFD51 = var_core_value_sig1F6D.liveRoot["ownerDocument"].activeElement;
      return !!var_core_value_sigFD51 && var_core_value_sig1F6D.getRuntimeRoots().some(var_core_value_sig7BAF => var_core_value_sig7BAF.contains(var_core_value_sigFD51));
    },
    var_core_value_sig968D = (var_core_value_sigF6D6, var_core_value_sigCF95 = false, var_core_value_sig8793 = false) => {
      var_core_value_sig1F6D.data["embedId"] && var_core_value_sig1F6D.floatingActiveService["getStage"](var_core_value_sig1F6D.data["embedId"]) !== "stage2" || vf(var_core_value_sig1F6D.data["childType"], var_core_value_sig8793) && (var_core_value_sig1F6D.focusCoordinator["hasBlockingChildFocusLease"](var_core_value_sig1F6D.data["embedId"], {
        ignoreOwners: var_core_value_sig1F6D.runtimeFocusOwners
      }) || !var_core_value_sigCF95 && var_core_value_sig077A() || (var_core_value_sigF6D6.hasAttribute("tabindex") || (var_core_value_sigF6D6.tabIndex = -1), var_core_value_sigF6D6.focus({
        preventScroll: true
      })));
    },
    var_core_value_sig1441 = var_core_value_sig1BE7 => {
      let var_core_value_sig34F8 = var_core_value_sig1F6D.data["embedId"] ? var_core_value_sig1F6D.floatingActiveService["getStage"](var_core_value_sig1F6D.data["embedId"]) : "inactive";
      if (var_core_value_sig1F6D.data["embedId"] && var_core_value_sig34F8 !== "stage2") {
        if (var_core_value_sig1F6D.interactionFlow !== "doc-block" || !var_core_value_sig1F6D.data["hostUnitId"]) return;
        let var_core_value_sig8F69 = wf(var_core_value_sig1F6D.embedModelService["getDescriptor"](var_core_value_sig1F6D.data["hostUnitId"], var_core_value_sig1F6D.data["embedId"]), var_core_value_sig1F6D.data);
        if (!(var_core_value_sig8F69 != null && var_core_value_sig8F69.childUnitId)) return;
        var_core_value_sig1F6D.acquireStage2SessionLease(), var_core_value_sig1F6D.activationService["activateFloating"](var_core_value_sig8F69, "stage2", {
          portalContainer: var_core_value_sig1F6D.popupRoot
        }), var_core_value_sig1F6D.releaseStage2SessionLeaseIfActivationDoesNotStick();
      }
      if (yf(var_core_value_sig1BE7.target) || var_core_value_sig1F6D.focusCoordinator["hasBlockingChildFocusLease"](var_core_value_sig1F6D.data["embedId"], {
        ignoreOwners: var_core_value_sig1F6D.runtimeFocusOwners
      })) return;
      if (var_core_value_sig1F6D.data["hostUnitId"] && var_core_value_sig1F6D.data["embedId"]) {
        let var_core_value_sig6884 = wf(var_core_value_sig1F6D.embedModelService["getDescriptor"](var_core_value_sig1F6D.data["hostUnitId"], var_core_value_sig1F6D.data["embedId"]), var_core_value_sig1F6D.data);
        (var_core_value_sig6884 == null ? undefined : var_core_value_sig6884.childUnitId) != null && var_core_value_sig6884.childType != null && var_core_value_sig1F6D.activationService["focusFloatingRuntime"](var_core_value_sig6884);
      }
      let var_core_value_sig9F3D = _f(var_core_value_sig1F6D.getRuntimeRoots(), var_core_value_sig1BE7.target);
      var_core_value_sig9F3D && var_core_value_sig968D(var_core_value_sig9F3D, true, var_core_value_sig1BE7.target === var_core_value_sig9F3D);
    };
  return var_core_value_sig1F6D.liveRoot["addEventListener"]("pointerdown", var_core_value_sig1441, true), var_core_value_sig9BBC(() => var_core_value_sig1F6D.liveRoot["removeEventListener"]("pointerdown", var_core_value_sig1441, true));
}
function Ef(var_core_value_sigEF7F) {
  let var_core_value_sig1142 = var_core_value_sigEF7F.liveRoot["ownerDocument"],
    var_core_value_sig0CA2,
    var_core_value_sig8FF7 = () => {
      var_core_value_sig0CA2 != null && (globalThis.clearTimeout(var_core_value_sig0CA2), var_core_value_sig0CA2 = undefined);
    },
    var_core_value_sig02FD = () => {
      var var_core_value_sig785C;
      var_core_value_sig8FF7(), (var_core_value_sig785C = var_core_value_sigEF7F.pointerLease["current"]) == null || var_core_value_sig785C.dispose(), var_core_value_sigEF7F.pointerLease["current"] = undefined;
    },
    var_core_value_sig1A37 = () => {
      globalThis.queueMicrotask(() => {
        var_core_value_sigEF7F.verticalScrollOwner["current"] = undefined;
      }), var_core_value_sig8FF7(), var_core_value_sig0CA2 = globalThis.setTimeout(() => {
        var var_core_value_sig066E;
        var_core_value_sig0CA2 = undefined, (var_core_value_sig066E = var_core_value_sigEF7F.pointerLease["current"]) == null || var_core_value_sig066E.dispose(), var_core_value_sigEF7F.pointerLease["current"] = undefined;
      }, var_core_value_sigEF7F.graceMs);
    },
    var_core_value_sigF87C = var_core_value_sig6537 => {
      var_core_value_sig02FD(), var_core_value_sigEF7F.pointerLease["current"] = var_core_value_sigEF7F.focusCoordinator["acquireLease"]({
        childType: var_core_value_sigEF7F.data["childType"],
        childUnitId: var_core_value_sigEF7F.data["childUnitId"],
        embedId: var_core_value_sigEF7F.data["embedId"],
        hostUnitId: var_core_value_sigEF7F.data["hostUnitId"],
        owner: "runtime-pointer",
        role: var_core_value_sig6537
      });
    },
    var_core_value_sig563A = () => {
      var_core_value_sigEF7F.floatingActiveService["getStage"](var_core_value_sigEF7F.data["embedId"]) === "stage2" && var_core_value_sigF87C("child-editor");
    },
    var_core_value_sig8341 = var_core_value_sig72BB => {
      let var_core_value_sigC0DF = var_core_value_sig72BB.target,
        var_core_value_sig94B7 = var_core_value_sigC0DF instanceof Node && var_core_value_sigEF7F.liveRoot["contains"](var_core_value_sigC0DF) || var_core_value_sigEF7F.focusCoordinator["containsElement"](var_core_value_sigEF7F.data["embedId"], var_core_value_sigC0DF, var_core_value_sig72BB) || var_core_value_sigEF7F.interactionBoundaryService["contains"](var_core_value_sigEF7F.data["embedId"], var_core_value_sigC0DF, var_core_value_sig72BB);
      var_core_value_sigEF7F.verticalScrollOwner["current"] = var_core_value_sig94B7 ? "child" : "host";
    },
    var_core_value_sig1BAA = var_core_value_sig9865 => {
      if (var_core_value_sigEF7F.floatingActiveService["getStage"](var_core_value_sigEF7F.data["embedId"]) !== "stage2" || !(var_core_value_sigEF7F.focusCoordinator["containsElement"](var_core_value_sigEF7F.data["embedId"], var_core_value_sig9865.target, var_core_value_sig9865) || var_core_value_sigEF7F.interactionBoundaryService["contains"](var_core_value_sigEF7F.data["embedId"], var_core_value_sig9865.target, var_core_value_sig9865))) return;
      var_core_value_sigEF7F.ownedPointerInteractionUntil["current"] = Date.now() + var_core_value_sigEF7F.graceMs;
      let var_core_value_sigA09D = bf(var_core_value_sig9865.target) ?? "child-editor";
      var_core_value_sigF87C(var_core_value_sigA09D === "runtime" || var_core_value_sigA09D === "child-session" || var_core_value_sigA09D === "floating-menu" ? "child-editor" : var_core_value_sigA09D);
    };
  return var_core_value_sigEF7F.liveRoot["addEventListener"]("pointerdown", var_core_value_sig563A, true), var_core_value_sig1142.addEventListener("pointerdown", var_core_value_sig8341, true), var_core_value_sig1142.addEventListener("pointerdown", var_core_value_sig1BAA, true), var_core_value_sig1142.addEventListener("pointerup", var_core_value_sig1A37, true), var_core_value_sig1142.addEventListener("pointercancel", var_core_value_sig1A37, true), var_core_value_sig9BBC(() => {
    var_core_value_sigEF7F.liveRoot["removeEventListener"]("pointerdown", var_core_value_sig563A, true), var_core_value_sig1142.removeEventListener("pointerdown", var_core_value_sig8341, true), var_core_value_sig1142.removeEventListener("pointerdown", var_core_value_sig1BAA, true), var_core_value_sig1142.removeEventListener("pointerup", var_core_value_sig1A37, true), var_core_value_sig1142.removeEventListener("pointercancel", var_core_value_sig1A37, true), var_core_value_sigEF7F.verticalScrollOwner["current"] = undefined, var_core_value_sig02FD();
  });
}
function Df(var_core_value_sigF583) {
  return var_core_value_sigF583.id === "univer-doc-main-canvas" || var_core_value_sigF583.id["startsWith"]("__editor_docs-") || var_core_value_sigF583.id["startsWith"]("univer-doc-selection-container-docs-") || var_core_value_sigF583.closest('#univer-doc-main-canvas, [id^="__editor_docs-"], [id^="univer-doc-selection-container-docs-"]') != null;
}
function Of(var_core_value_sig0BFC, var_core_value_sigBA64) {
  if (!var_core_value_sig0BFC || var_core_value_sigBA64.length === 0) return;
  let var_core_value_sig9C5D = var_core_value_sigBA64[0].ownerDocument["activeElement"];
  var_core_value_sig9C5D instanceof HTMLElement && (var_core_value_sigBA64.some(var_core_value_sig1429 => var_core_value_sig1429.contains(var_core_value_sig9C5D)) || var_core_value_sig9C5D.closest('[data-embed-interaction-boundary-owner="' + var_core_value_sig0BFC + "\x22]") != null) && var_core_value_sig9C5D.blur();
}
function kf(var_core_value_sig5B04) {
  let {
      ownerDocument: var_core_value_sig3D58,
      restore: var_core_value_sigED20,
      shouldRestore: var_core_value_sigF90F,
      timeoutMs: var_core_value_sigEBEE = 1000
    } = var_core_value_sig5B04,
    var_core_value_sigA547,
    var_core_value_sigE634 = var_core_value_sigA339 => {
      var_core_value_sigF90F(var_core_value_sigA339.target) && var_core_value_sigED20();
    },
    var_core_value_sig06E6 = () => {
      var_core_value_sig3D58.removeEventListener("focusin", var_core_value_sigE634, true), var_core_value_sig3D58.removeEventListener("pointerdown", var_core_value_sig06E6, true), var_core_value_sigA547 != null && (globalThis.clearTimeout(var_core_value_sigA547), var_core_value_sigA547 = undefined);
    };
  return var_core_value_sig3D58.addEventListener("focusin", var_core_value_sigE634, true), var_core_value_sig3D58.addEventListener("pointerdown", var_core_value_sig06E6, true), var_core_value_sigA547 = globalThis.setTimeout(var_core_value_sig06E6, var_core_value_sigEBEE), var_core_value_sig9BBC(var_core_value_sig06E6);
}
function Af(var_core_value_sig5270) {
  return var_core_value_sig5270 === "runtime" || var_core_value_sig5270 === "child-session" || var_core_value_sig5270 === "child-editor" || var_core_value_sig5270 === "child-popup" || var_core_value_sig5270 === "floating-menu";
}
function jf(var_core_value_sigC76A) {
  let {
      children: var_core_value_sig9D84,
      placement: var_core_value_sig29F7 = "top",
      title: var_core_value_sigDBEF
    } = var_core_value_sigC76A,
    [var_core_value_sig590D, var_core_value_sig31F0] = var_core_value_sigC4B6(false),
    var_core_value_sig0A86 = var_core_value_sig17A6(null),
    var_core_value_sig87E9 = var_core_value_sigF517(() => {
      var_core_value_sig0A86.current !== null && (clearTimeout(var_core_value_sig0A86.current), var_core_value_sig0A86.current = null);
    }, []),
    var_core_value_sigEB10 = var_core_value_sig832A => {
      var_core_value_sig87E9(), var_core_value_sig832A ? var_core_value_sig0A86.current = setTimeout(() => var_core_value_sig31F0(true), 100) : var_core_value_sig31F0(false);
    };
  return var_core_value_sigB0BB(() => var_core_value_sig87E9, [var_core_value_sig87E9]), var_core_value_sig6F03(var_core_value_sig5917, {
    title: var_core_value_sigDBEF,
    placement: var_core_value_sig29F7,
    visible: var_core_value_sig590D,
    onVisibleChange: var_core_value_sigEB10,
    children: var_core_value_sig6F03("span", {
      className: "univer-inline-flex univer-max-w-full univer-items-center",
      onFocus: var_core_value_sig7945 => var_core_value_sig7945.stopPropagation(),
      onPointerDown: () => var_core_value_sigEB10(false),
      children: var_core_value_sig9D84
    })
  });
}
function Mf(var_core_value_sig50B5) {
  let {
      hostUnitId: var_core_value_sig8A28,
      embedId: var_core_value_sig4AEF,
      className: var_core_value_sigD64C,
      variant: var_core_value_sig8E15 = "float"
    } = var_core_value_sig50B5,
    var_core_value_sig5EB1 = var_core_value_sig17A6(null),
    var_core_value_sig5B68 = var_core_value_sigC85E(var_core_value_sig91F2),
    var_core_value_sig6EF5 = var_core_value_sigC85E(dl),
    var_core_value_sig5FE3 = var_core_value_sigC85E(gu),
    var_core_value_sig71B3 = var_core_value_sigC85E(var_core_value_sig21CF).t("embed-ui.fullscreen.enter"),
    var_core_value_sig9860 = var_core_value_sigF517(var_core_value_sig1166 => {
      var_core_value_sig1166.preventDefault(), var_core_value_sig1166.stopPropagation(), !(!var_core_value_sig8A28 || !var_core_value_sig4AEF) && Nf({
        hostUnitId: var_core_value_sig8A28,
        embedId: var_core_value_sig4AEF,
        activationService: var_core_value_sig6EF5,
        embedModelService: var_core_value_sig5B68,
        fullscreenService: var_core_value_sig5FE3
      });
    }, [var_core_value_sig6EF5, var_core_value_sig4AEF, var_core_value_sig5B68, var_core_value_sig5FE3, var_core_value_sig8A28]);
  return var_core_value_sigB0BB(() => {
    let var_core_value_sig7ABC = var_core_value_sig5EB1.current;
    if (!var_core_value_sig7ABC) return;
    let var_core_value_sigF686 = var_core_value_sig9B0D => {
      var_core_value_sig9B0D.stopPropagation();
    };
    return var_core_value_sig7ABC.addEventListener("pointerdown", var_core_value_sigF686), var_core_value_sig7ABC.addEventListener("click", var_core_value_sig9860), () => {
      var_core_value_sig7ABC.removeEventListener("pointerdown", var_core_value_sigF686), var_core_value_sig7ABC.removeEventListener("click", var_core_value_sig9860);
    };
  }, [var_core_value_sig9860, var_core_value_sig8E15]), var_core_value_sig8E15 === "menu" ? var_core_value_sig6F03(jf, {
    title: var_core_value_sig71B3,
    children: var_core_value_sig6F03(var_core_value_sigC820, {
      ref: var_core_value_sig5EB1,
      type: "button",
      size: "small",
      variant: "ghost",
      className: var_core_value_sig522C("univer-size-6 univer-p-0", var_core_value_sigD64C),
      "aria-label": var_core_value_sig71B3,
      children: var_core_value_sig6F03(var_core_value_sig4090, {})
    })
  }) : var_core_value_sig6F03("button", {
    ref: var_core_value_sig5EB1,
    type: "button",
    className: var_core_value_sig522C("univer-absolute univer-right-2 univer-top-2 univer-z-10 univer-inline-flex univer-size-8 univer-cursor-pointer univer-appearance-none univer-items-center univer-justify-center univer-rounded-md univer-border-0 univer-bg-transparent univer-p-0 univer-text-white univer-opacity-0 univer-transition-opacity univer-duration-150 before:univer-absolute before:univer-inset-0 before:univer-rounded-md before:univer-bg-primary-600 before:univer-opacity-[0.45] before:univer-transition-opacity before:univer-duration-150 before:univer-content-[''] hover:before:univer-opacity-60 focus-visible:univer-opacity-100 focus-visible:univer-outline-none focus-visible:univer-ring-2 focus-visible:univer-ring-primary-600 dark:!univer-text-gray-900", var_core_value_sigD64C),
    "data-embed-float-fullscreen-button": "true",
    title: var_core_value_sig71B3,
    "aria-label": var_core_value_sig71B3,
    children: var_core_value_sig6F03(var_core_value_sig4090, {
      className: "univer-relative univer-z-10 univer-size-[18px] univer-drop-shadow-sm",
      "aria-hidden": "true"
    })
  });
}
function Nf(var_core_value_sigAEF6) {
  var var_core_value_sig8954;
  let var_core_value_sig44DA = var_core_value_sigAEF6.embedModelService["getDescriptor"](var_core_value_sigAEF6.hostUnitId, var_core_value_sigAEF6.embedId);
  return !(var_core_value_sig44DA != null && var_core_value_sig44DA.childUnitId) || var_core_value_sig44DA.childType == null ? false : ((var_core_value_sig8954 = var_core_value_sigAEF6.activationService) == null || var_core_value_sig8954.clearFloating(var_core_value_sigAEF6.embedId, var_core_value_sigAEF6.hostUnitId), var_core_value_sigAEF6.fullscreenService["enter"](var_core_value_sig44DA), true);
}
const Pf = "stage2-runtime",
  Ff = "doc-block-stage2-runtime",
  If = [Pf, Ff];
function Lf(var_core_value_sig2956) {
  var var_core_value_sig744C, var_core_value_sigE2E8, var_core_value_sig63A1;
  let {
      data: var_core_value_sigDE3F,
      deferInactiveFloatingChrome: var_core_value_sigBD2F,
      docsCustomBlockLayout: var_core_value_sig810B,
      enableStage1BodyDrag: var_core_value_sig60D0,
      floatingChromeZIndex: var_core_value_sig8A14,
      hostFloatDomLayout$: var_core_value_sigDA56,
      initialStage: var_core_value_sigD25D,
      interactionFlow: var_core_value_sig29A2 = "floating-stage",
      isExternalHostInteraction: var_core_value_sigAF2B,
      onHostWheel: var_core_value_sig9A2B,
      onRuntimeStageEnter: var_core_value_sigEFBE,
      onRuntimeStageExit: var_core_value_sigBBED,
      resolveHostWheelGestureRoot: var_core_value_sigA6D5,
      syncHostVerticalScroll: var_core_value_sigFE1A
    } = var_core_value_sig2956,
    var_core_value_sigF50E = var_core_value_sig17A6(null),
    var_core_value_sigE9E0 = var_core_value_sig17A6(null),
    var_core_value_sig8DAA = var_core_value_sig17A6(null),
    var_core_value_sig4960 = var_core_value_sig17A6(null),
    var_core_value_sig0F6B = var_core_value_sig17A6(null),
    var_core_value_sig341C1 = var_core_value_sig17A6(null),
    var_core_value_sig289C = var_core_value_sig17A6(null),
    var_core_value_sig30A2 = var_core_value_sig17A6(null),
    var_core_value_sig829D = var_core_value_sig17A6(null),
    var_core_value_sigAAB6 = var_core_value_sigC85E(var_core_value_sig91F2),
    var_core_value_sig3DA9 = var_core_value_sigC85E(Ic),
    var_core_value_sigB62E = var_core_value_sigC85E(xs),
    var_core_value_sigF383 = var_core_value_sigC85E(dl),
    var_core_value_sig40A4 = var_core_value_sigC85E(cd),
    var_core_value_sig8481 = var_core_value_sigC85E(ld),
    var_core_value_sigC6E3 = var_core_value_sigC85E(gu),
    var_core_value_sigB4C8 = var_core_value_sigC85E(Es),
    var_core_value_sig04611 = var_core_value_sigC85E(cl),
    var_core_value_sig6623 = var_core_value_sigC85E(ud),
    var_core_value_sigF875 = var_core_value_sigC85E(wd),
    var_core_value_sig1686 = var_core_value_sigC85E(Cd),
    var_core_value_sig33AE = var_core_value_sigC85E(X),
    var_core_value_sig2556 = var_core_value_sigC85E(hd),
    var_core_value_sigD2A7 = var_core_value_sigC85E(var_core_value_sigDFF6),
    var_core_value_sig9C84 = var_core_value_sigC85E(var_core_value_sig5DF8),
    var_core_value_sigCBF8 = var_core_value_sigC85E(var_core_value_sigBEFB),
    var_core_value_sigF20C = Td(var_core_value_sigDE3F),
    var_core_value_sig9DBC = var_core_value_sig810B != null && var_core_value_sig810B.sheetLike ? var_core_value_sig810B : undefined,
    var_core_value_sig0598 = var_core_value_sig9DBC == null ? undefined : var_core_value_sig9DBC.contentWidth,
    var_core_value_sigBC6B = var_core_value_sig9DBC == null ? undefined : var_core_value_sig9DBC.pageContentWidth,
    var_core_value_sigFB55 = (var_core_value_sig9DBC == null ? undefined : var_core_value_sig9DBC.viewScale) ?? 1,
    [var_core_value_sigE9FC, var_core_value_sigDC35] = var_core_value_sigC4B6(0),
    [var_core_value_sigD83C, var_core_value_sigF1CF] = var_core_value_sigC4B6(0),
    var_core_value_sig8B63 = var_core_value_sig9DBC ? Md(var_core_value_sig9DBC) : undefined,
    var_core_value_sig65C4 = Math.min(var_core_value_sigD83C, (var_core_value_sig8B63 == null ? undefined : var_core_value_sig8B63.maxExpansion) ?? 0),
    var_core_value_sig47D2 = var_core_value_sig146E(() => var_core_value_sigB62E.active$["pipe"](var_core_value_sig5B63(() => var_core_value_sigF20C != null && var_core_value_sigF20C.embedId ? var_core_value_sigB62E.getStage(var_core_value_sigF20C.embedId) : "inactive")), var_core_value_sigD25D ?? (var_core_value_sigF20C != null && var_core_value_sigF20C.embedId ? var_core_value_sigB62E.getStage(var_core_value_sigF20C.embedId) : "inactive"), false, [var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sigB62E]),
    var_core_value_sig3AE6 = var_core_value_sig17A6(var_core_value_sig47D2),
    var_core_value_sigEFE1 = var_core_value_sig17A6(false),
    var_core_value_sigCA12 = var_core_value_sig17A6(undefined),
    var_core_value_sig3F5E = var_core_value_sig17A6(undefined),
    var_core_value_sig001D = var_core_value_sig17A6(undefined),
    var_core_value_sigED13 = var_core_value_sig17A6(undefined),
    var_core_value_sigCD11 = var_core_value_sig17A6(undefined),
    var_core_value_sigEDD6 = var_core_value_sig17A6(0),
    var_core_value_sig69451 = var_core_value_sig17A6(undefined),
    var_core_value_sig7FD1 = var_core_value_sig17A6(false),
    var_core_value_sigB194 = var_core_value_sig17A6(false),
    var_core_value_sigBD19 = var_core_value_sig17A6(var_core_value_sig65C4),
    var_core_value_sig8F33 = var_core_value_sig17A6(var_core_value_sig8B63),
    var_core_value_sigBEA6 = var_core_value_sig17A6(var_core_value_sigFB55),
    var_core_value_sig6EB1 = var_core_value_sig17A6(0),
    var_core_value_sig8C0A = var_core_value_sig17A6(0),
    var_core_value_sigAE7D = var_core_value_sig17A6([]),
    var_core_value_sig6560 = var_core_value_sig17A6(var_core_value_sig47D2);
  var_core_value_sig6560.current = var_core_value_sig47D2, var_core_value_sigBD19.current = var_core_value_sig65C4, var_core_value_sig8F33.current = var_core_value_sig8B63, var_core_value_sigBEA6.current = var_core_value_sigFB55;
  let var_core_value_sigFF5B = var_core_value_sigF517(var_core_value_sigDFF0 => {
      let var_core_value_sig0130 = var_core_value_sig8F33.current;
      if (!var_core_value_sig0130) return false;
      let var_core_value_sigFD90 = var_core_value_sigBD19.current,
        var_core_value_sig702C = Nd(var_core_value_sigFD90 + qu(var_core_value_sigDFF0) / var_core_value_sigBEA6.current, 0, var_core_value_sig0130.maxExpansion);
      return var_core_value_sig702C === var_core_value_sigFD90 ? false : (var_core_value_sigBD19.current = var_core_value_sig702C, var_core_value_sigF1CF(var_core_value_sig702C), true);
    }, []),
    var_core_value_sig4B86 = var_core_value_sigF517((var_core_value_sig03A4, var_core_value_sigB6F5) => vd(var_core_value_sig03A4, var_core_value_sigB6F5, {
      commandService: var_core_value_sigD2A7,
      univerInstanceService: var_core_value_sig9C84
    }) ? true : (var_core_value_sig9A2B == null ? undefined : var_core_value_sig9A2B(var_core_value_sig03A4, var_core_value_sigB6F5)) === true, [var_core_value_sigD2A7, var_core_value_sig9A2B, var_core_value_sig9C84]),
    var_core_value_sig2BFF = var_core_value_sigF517(() => {
      var var_core_value_sig82931;
      (var_core_value_sig82931 = var_core_value_sig3F5E.current) == null || var_core_value_sig82931.dispose(), var_core_value_sig3F5E.current = undefined;
    }, []),
    var_core_value_sig1A22 = var_core_value_sigF517(() => {
      var var_core_value_sig43AE, var_core_value_sigEF2E;
      if (!(var_core_value_sigF20C != null && var_core_value_sigF20C.embedId) || var_core_value_sig3F5E.current) return;
      let var_core_value_sigD83C1 = var_core_value_sigF20C.hostUnitId ? var_core_value_sigAAB6.getDescriptor(var_core_value_sigF20C.hostUnitId, var_core_value_sigF20C.embedId) : undefined,
        var_core_value_sigAC2B = Rf(var_core_value_sigD83C1),
        var_core_value_sigFBBE = var_core_value_sigF20C.childUnitId ?? (var_core_value_sigD83C1 == null ? undefined : var_core_value_sigD83C1.childUnitId) ?? ((var_core_value_sig43AE = var_core_value_sigCA12.current) == null ? undefined : var_core_value_sig43AE.childUnitId) ?? (var_core_value_sigAC2B == null ? undefined : var_core_value_sigAC2B.childUnitId),
        var_core_value_sigC982 = var_core_value_sigF20C.childType ?? (var_core_value_sigD83C1 == null ? undefined : var_core_value_sigD83C1.childType) ?? ((var_core_value_sigEF2E = var_core_value_sigCA12.current) == null ? undefined : var_core_value_sigEF2E.childType) ?? (var_core_value_sigAC2B == null ? undefined : var_core_value_sigAC2B.childType);
      var_core_value_sig3F5E.current = var_core_value_sig33AE.acquireLease({
        embedId: var_core_value_sigF20C.embedId,
        role: "child-session",
        owner: var_core_value_sig29A2 === "doc-block" ? Ff : Pf,
        sessionMode: "child-keyboard",
        hostUnitId: var_core_value_sigF20C.hostUnitId,
        childUnitId: var_core_value_sigFBBE,
        childType: var_core_value_sigC982
      });
    }, [var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.childType, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.childUnitId, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.hostUnitId, var_core_value_sigAAB6, var_core_value_sig33AE, var_core_value_sig29A2]),
    var_core_value_sig28FE = var_core_value_sigF517(() => {
      if (!(var_core_value_sigF20C != null && var_core_value_sigF20C.embedId)) return;
      let var_core_value_sig59DA = var_core_value_sigF20C.embedId;
      window.requestAnimationFrame(() => {
        var_core_value_sigB62E.getStage(var_core_value_sig59DA) !== "stage2" && var_core_value_sig2BFF();
      });
    }, [var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sigB62E, var_core_value_sig2BFF]),
    var_core_value_sig67BE = var_core_value_sigF20C != null && var_core_value_sigF20C.hostUnitId ? var_core_value_sigAAB6.getDescriptor(var_core_value_sigF20C.hostUnitId, var_core_value_sigF20C.embedId) : undefined,
    var_core_value_sigCB03 = Rf(var_core_value_sig67BE),
    var_core_value_sig0258 = (var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.childUnitId) ?? (var_core_value_sig67BE == null ? undefined : var_core_value_sig67BE.childUnitId) ?? ((var_core_value_sig744C = var_core_value_sigCA12.current) == null ? undefined : var_core_value_sig744C.childUnitId) ?? (var_core_value_sigCB03 == null ? undefined : var_core_value_sigCB03.childUnitId),
    var_core_value_sig3398 = (var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.childType) ?? (var_core_value_sig67BE == null ? undefined : var_core_value_sig67BE.childType) ?? ((var_core_value_sigE2E8 = var_core_value_sigCA12.current) == null ? undefined : var_core_value_sigE2E8.childType) ?? (var_core_value_sigCB03 == null ? undefined : var_core_value_sigCB03.childType),
    var_core_value_sig8653 = var_core_value_sig3398 == null || (var_core_value_sig63A1 = var_core_value_sig3DA9.get(var_core_value_sig3398)) == null ? undefined : var_core_value_sig63A1.canvasRootClassName,
    var_core_value_sig2BF2 = Tu(var_core_value_sig67BE, var_core_value_sig47D2);
  var_core_value_sigB0BB(() => {
    let var_core_value_sig3002 = var_core_value_sigF50E.current;
    return () => {
      let var_core_value_sig3D2C = var_core_value_sigC6E3.getSession(),
        var_core_value_sigC56D = (var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId) && (var_core_value_sig3D2C == null ? undefined : var_core_value_sig3D2C.embedId) === var_core_value_sigF20C.embedId;
      var_core_value_sigF20C != null && var_core_value_sigF20C.embedId && !(var_core_value_sig3002 != null && var_core_value_sig3002.isConnected) && !var_core_value_sigC56D && var_core_value_sigB62E.getStage(var_core_value_sigF20C.embedId) !== "inactive" && var_core_value_sigF383.clearFloating(var_core_value_sigF20C.embedId, var_core_value_sigF20C.hostUnitId);
    };
  }, [var_core_value_sigF383, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.hostUnitId, var_core_value_sigB62E, var_core_value_sigC6E3]), var_core_value_sigB0BB(() => {
    if (!(!(var_core_value_sigF20C != null && var_core_value_sigF20C.embedId) || var_core_value_sig47D2 !== "stage2")) return var_core_value_sig1A22(), var_core_value_sig2BFF;
  }, [var_core_value_sig1A22, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sig2BFF, var_core_value_sig47D2]), var_core_value_sigB0BB(() => {
    let var_core_value_sig33D2 = var_core_value_sigF50E.current,
      var_core_value_sig8D4A = xf(var_core_value_sigCBF8, var_core_value_sig33AE, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sig33D2, var_core_value_sig47D2);
    if (var_core_value_sig8D4A) return () => var_core_value_sig8D4A.dispose();
  }, [var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sig33AE, var_core_value_sigCBF8, var_core_value_sig47D2]), var_core_value_sigB0BB(() => {
    let var_core_value_sigB5D7 = var_core_value_sig4960.current;
    if (var_core_value_sig47D2 !== "stage2" || var_core_value_sig3398 !== var_core_value_sigC0F3.UNIVER_BASE || !(var_core_value_sigF20C != null && var_core_value_sigF20C.embedId) || !var_core_value_sigB5D7) return;
    let var_core_value_sig797B = () => hl(var_core_value_sigF20C.embedId, var_core_value_sigB5D7);
    var_core_value_sig797B();
    let var_core_value_sig5094 = window.requestAnimationFrame(var_core_value_sig797B);
    return () => window.cancelAnimationFrame(var_core_value_sig5094);
  }, [var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sig3398, var_core_value_sig47D2]), var_core_value_sigB0BB(() => {
    let var_core_value_sig8883 = var_core_value_sig3AE6.current;
    var_core_value_sig3AE6.current = var_core_value_sig47D2;
    let var_core_value_sig488F = var_core_value_sig8883 !== var_core_value_sig47D2 || !var_core_value_sigEFE1.current && var_core_value_sig47D2 !== "inactive";
    var_core_value_sigEFE1.current = true, var_core_value_sig488F && (var_core_value_sigEFBE == null || var_core_value_sigEFBE(var_core_value_sig47D2), var_core_value_sig8481.invalidate({
      embedId: var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId,
      reason: "stage-change"
    })), var_core_value_sig8883 === "stage2" && var_core_value_sig47D2 !== "stage2" && (Of(var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, of(var_core_value_sig4960.current, var_core_value_sig0F6B.current, var_core_value_sig341C1.current, var_core_value_sig30A2.current, var_core_value_sig829D.current)), var_core_value_sigF383.clearFloating(var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.hostUnitId), var_core_value_sigBBED == null || var_core_value_sigBBED());
  }, [var_core_value_sigF383, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.hostUnitId, var_core_value_sig8481, var_core_value_sigEFBE, var_core_value_sigBBED, var_core_value_sig47D2]), var_core_value_sigB0BB(() => {
    if (var_core_value_sigD25D !== "stage2" || !(var_core_value_sigF20C != null && var_core_value_sigF20C.embedId) || !var_core_value_sigF20C.hostUnitId) return;
    let var_core_value_sigB440 = var_core_value_sigAAB6.getDescriptor(var_core_value_sigF20C.hostUnitId, var_core_value_sigF20C.embedId);
    var_core_value_sigB440 != null && var_core_value_sigB440.childUnitId && var_core_value_sigB62E.activate({
      hostUnitId: var_core_value_sigF20C.hostUnitId,
      embedId: var_core_value_sigF20C.embedId,
      childUnitId: var_core_value_sigB440.childUnitId
    }, "stage2");
  }, [var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.hostUnitId, var_core_value_sigAAB6, var_core_value_sigB62E, var_core_value_sigD25D]), var_core_value_sigB0BB(() => {
    let var_core_value_sigF5CC = var_core_value_sig4960.current,
      var_core_value_sigA1B6 = var_core_value_sig0F6B.current,
      var_core_value_sig66A0 = var_core_value_sig341C1.current,
      var_core_value_sig7876 = var_core_value_sig30A2.current,
      var_core_value_sig2C69 = var_core_value_sig829D.current;
    if (!var_core_value_sigF5CC || !var_core_value_sigA1B6 || !var_core_value_sig66A0 || !var_core_value_sig7876 || !var_core_value_sig2C69) return;
    let var_core_value_sigAF19 = var_core_value_sigF20C != null && var_core_value_sigF20C.hostUnitId ? var_core_value_sigAAB6.getDescriptor(var_core_value_sigF20C.hostUnitId, var_core_value_sigF20C.embedId) : undefined,
      var_core_value_sigCE75 = var_core_value_sigAF19 ? zf(var_core_value_sigAF19) : undefined;
    if (!var_core_value_sigAF19 || !var_core_value_sigCE75 || var_core_value_sig2BF2 === "deferred") return;
    let var_core_value_sigF27A = false,
      var_core_value_sig47B3;
    return var_core_value_sig6623.materializeDescriptor({
      descriptor: var_core_value_sigAF19
    }).then(async var_core_value_sig3A17 => {
      var var_core_value_sig938F;
      if (var_core_value_sigF27A) return;
      let var_core_value_sigD948 = var_core_value_sig04611.mountIntoHostElement(var_core_value_sig3A17, var_core_value_sigF5CC, {
        content: var_core_value_sigA1B6,
        canvas: var_core_value_sig66A0,
        overlay: var_core_value_sig7876,
        popup: var_core_value_sig2C69
      });
      var_core_value_sig47B3 = var_core_value_sig3A17.embedId;
      let var_core_value_sigBE5E = var_core_value_sigD948 == null ? undefined : var_core_value_sigD948.context;
      var_core_value_sigCA12.current = var_core_value_sigBE5E;
      let var_core_value_sig0281 = var_core_value_sigF20C != null && var_core_value_sigF20C.embedId ? (var_core_value_sig938F = var_core_value_sig40A4.getPreview(var_core_value_sigF20C.embedId)) == null ? undefined : var_core_value_sig938F.viewState : undefined;
      var_core_value_sigBE5E && var_core_value_sig0281 != null && (await var_core_value_sig40A4.restoreViewState(var_core_value_sigBE5E, var_core_value_sig0281));
    }).catch(var_core_value_sigED71 => {
      queueMicrotask(() => {
        throw var_core_value_sigED71;
      });
    }), () => {
      var var_core_value_sig281C;
      var_core_value_sigF27A = true, var_core_value_sig47B3 && ((var_core_value_sig281C = var_core_value_sigCA12.current) == null ? undefined : var_core_value_sig281C.embedId) === var_core_value_sig47B3 && (var_core_value_sigCA12.current = undefined), var_core_value_sig04611.unmount(var_core_value_sigAF19.embedId);
    };
  }, [var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.hostUnitId, var_core_value_sigAAB6, var_core_value_sig04611, var_core_value_sigE9FC, var_core_value_sig40A4, var_core_value_sig6623, var_core_value_sig2BF2]), var_core_value_sigB0BB(() => {
    if (!(var_core_value_sigF20C != null && var_core_value_sigF20C.embedId)) return;
    let var_core_value_sig5E75 = var_core_value_sigF20C.embedId,
      var_core_value_sigC266 = [];
    [{
      element: var_core_value_sig4960.current,
      role: "runtime"
    }, {
      element: var_core_value_sig0F6B.current,
      role: "runtime"
    }, {
      element: var_core_value_sig341C1.current,
      role: "runtime"
    }].forEach(var_core_value_sig3C92 => {
      let var_core_value_sigB16B = var_core_value_sig3C92.element;
      var_core_value_sigB16B && var_core_value_sigC266.push({
        element: var_core_value_sigB16B,
        role: var_core_value_sig3C92.role
      });
    });
    let var_core_value_sig77A3 = var_core_value_sigC266.flatMap(({
        element: var_core_value_sig585D,
        role: var_core_value_sigE722
      }) => [var_core_value_sigB4C8.registerRoot(var_core_value_sig5E75, var_core_value_sig585D, var_core_value_sig0258), var_core_value_sig33AE.registerElement({
        embedId: var_core_value_sig5E75,
        role: var_core_value_sigE722,
        element: var_core_value_sig585D
      })]),
      var_core_value_sigD85C = var_core_value_sig289C.current;
    return var_core_value_sigD85C && var_core_value_sig77A3.push(var_core_value_sigB4C8.registerRoot(var_core_value_sig5E75, var_core_value_sigD85C, var_core_value_sig0258)), var_core_value_sig47D2 === "stage2" && [{
      element: var_core_value_sigD85C,
      role: "floating-menu"
    }, {
      element: var_core_value_sig30A2.current,
      role: "floating-menu"
    }, {
      element: var_core_value_sig829D.current,
      role: "child-popup"
    }].forEach(var_core_value_sig062A => {
      var_core_value_sig062A.element && var_core_value_sig77A3.push(var_core_value_sig33AE.registerElement({
        embedId: var_core_value_sig5E75,
        role: var_core_value_sig062A.role,
        element: var_core_value_sig062A.element
      }));
    }), () => var_core_value_sig77A3.forEach(var_core_value_sigE627 => var_core_value_sigE627.dispose());
  }, [var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sig33AE, var_core_value_sigB4C8, var_core_value_sig0258, var_core_value_sig47D2]), var_core_value_sigB0BB(() => {
    var var_core_value_sig3957, var_core_value_sigA101;
    if (!(var_core_value_sigF20C != null && var_core_value_sigF20C.embedId) || var_core_value_sig47D2 !== "stage2") return;
    let var_core_value_sig2ADC = ((var_core_value_sig3957 = var_core_value_sigF50E.current) == null ? undefined : var_core_value_sig3957.ownerDocument) ?? ((var_core_value_sigA101 = var_core_value_sig4960.current) == null ? undefined : var_core_value_sigA101.ownerDocument) ?? (typeof document > "u" ? undefined : document),
      var_core_value_sig1386 = var_core_value_sigB4C8.activatePortalScope(var_core_value_sigF20C.embedId, var_core_value_sig2ADC, {
        includeAppShellEditorPortal: var_core_value_sig3398 === var_core_value_sigC0F3.UNIVER_SHEET
      });
    return () => {
      var_core_value_sig6560.current !== "stage2" && var_core_value_sigB4C8.closeOwnedFloatingSurfaces(var_core_value_sigF20C.embedId, var_core_value_sig2ADC), var_core_value_sig1386.dispose();
    };
  }, [var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sigB4C8, var_core_value_sig3398, var_core_value_sig47D2]), var_core_value_sigB0BB(() => {
    var var_core_value_sig96F5, var_core_value_sig7F54;
    if (!(var_core_value_sigF20C != null && var_core_value_sigF20C.embedId) || var_core_value_sig47D2 !== "stage2") return;
    let var_core_value_sigEB45 = ((var_core_value_sig96F5 = var_core_value_sigF50E.current) == null ? undefined : var_core_value_sig96F5.ownerDocument) ?? ((var_core_value_sig7F54 = var_core_value_sig4960.current) == null ? undefined : var_core_value_sig7F54.ownerDocument) ?? (typeof document > "u" ? undefined : document),
      var_core_value_sig0623 = var_core_value_sigEB45 == null ? undefined : var_core_value_sigEB45.querySelector("[data-u-comp=\x22headerbar\x22]");
    if (!var_core_value_sig0623) return;
    let var_core_value_sigBF43 = [var_core_value_sigB4C8.registerRoot(var_core_value_sigF20C.embedId, var_core_value_sig0623, var_core_value_sig0258), var_core_value_sig33AE.registerElement({
      embedId: var_core_value_sigF20C.embedId,
      role: "floating-menu",
      element: var_core_value_sig0623
    })];
    return () => var_core_value_sigBF43.forEach(var_core_value_sigEF3E => var_core_value_sigEF3E.dispose());
  }, [var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sig33AE, var_core_value_sigB4C8, var_core_value_sig0258, var_core_value_sig47D2]), var_core_value_sigB0BB(() => {
    let var_core_value_sigBC08 = var_core_value_sigF50E.current,
      var_core_value_sig3F28 = var_core_value_sigBC08 == null ? undefined : var_core_value_sigBC08.querySelector('[data-u-comp="embed-float-dom-content"]');
    if (!(var_core_value_sigF20C != null && var_core_value_sigF20C.embedId) || !var_core_value_sigBC08) return;
    let var_core_value_sig0A16 = var_core_value_sigF20C.hostUnitId ? var_core_value_sigAAB6.getDescriptor(var_core_value_sigF20C.hostUnitId, var_core_value_sigF20C.embedId) : undefined,
      var_core_value_sig0A96 = var_core_value_sig8481.register({
        embedId: var_core_value_sigF20C.embedId,
        childUnitId: var_core_value_sig0A16 == null ? undefined : var_core_value_sig0A16.childUnitId,
        root: var_core_value_sigBC08,
        viewport: var_core_value_sig3F28,
        contentRoot: var_core_value_sig0F6B.current
      });
    return () => var_core_value_sig0A96.dispose();
  }, [var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.hostUnitId, var_core_value_sigAAB6, var_core_value_sig8481]), var_core_value_sigB0BB(() => {
    var var_core_value_sig72FE, var_core_value_sigE8ED;
    let var_core_value_sig6DD3 = var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId,
      var_core_value_sig8E87 = var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.hostUnitId;
    if (!var_core_value_sig6DD3 || !var_core_value_sig8E87) return;
    let var_core_value_sigCDF2 = ((var_core_value_sig72FE = var_core_value_sigF50E.current) == null ? undefined : var_core_value_sig72FE.ownerDocument) ?? ((var_core_value_sigE8ED = var_core_value_sig4960.current) == null ? undefined : var_core_value_sigE8ED.ownerDocument) ?? (typeof document > "u" ? undefined : document);
    if (!var_core_value_sigCDF2) return;
    let var_core_value_sig1043 = var_core_value_sig050A => {
        let var_core_value_sig8B32 = var_core_value_sig050A.params;
        return var_core_value_sig050A.id === var_core_value_sig8611.id && (var_core_value_sig8B32 == null ? undefined : var_core_value_sig8B32.embedId) === var_core_value_sig6DD3 && var_core_value_sig8B32.hostUnitId === var_core_value_sig8E87;
      },
      var_core_value_sig4289 = var_core_value_sigD2A7.beforeCommandExecuted(var_core_value_sig870F => {
        if (!var_core_value_sig1043(var_core_value_sig870F) || var_core_value_sigB62E.getStage(var_core_value_sig6DD3) !== "stage2") return;
        let var_core_value_sigB683 = var_core_value_sigCDF2.activeElement;
        if (!(var_core_value_sigB683 instanceof HTMLElement) || !var_core_value_sigB683.id["startsWith"]("__editor_") || !var_core_value_sigB683.id["endsWith"]("SHAPE_TEXT") || !var_core_value_sig33AE.containsElement(var_core_value_sig6DD3, var_core_value_sigB683)) return;
        let var_core_value_sig26EC = var_core_value_sigB683.id["slice"](9);
        kf({
          ownerDocument: var_core_value_sigCDF2,
          restore: () => {
            var var_core_value_sig273D;
            let var_core_value_sig9A0D = (var_core_value_sig273D = var_core_value_sig04611.getSession(var_core_value_sig6DD3)) == null || (var_core_value_sig273D = var_core_value_sig273D.context) == null ? undefined : var_core_value_sig273D.runtimeScope["injector"];
            if (var_core_value_sig9A0D != null && var_core_value_sig9A0D.has(var_core_value_sig7189)) {
              let var_core_value_sig2BCF = var_core_value_sig9A0D.get(var_core_value_sig7189);
              var_core_value_sig2BCF.focus(var_core_value_sig26EC);
              let var_core_value_sig0D69 = var_core_value_sig2BCF.getEditor(var_core_value_sig26EC);
              if (var_core_value_sig0D69) {
                var_core_value_sig0D69.focus();
                return;
              }
            }
            let var_core_value_sigA319 = var_core_value_sigCDF2.getElementById(var_core_value_sigB683.id);
            var_core_value_sigA319 instanceof HTMLElement && var_core_value_sigA319.focus({
              preventScroll: true
            });
          },
          shouldRestore: var_core_value_sig2D58 => var_core_value_sig2D58 instanceof HTMLElement && var_core_value_sig2D58.id["endsWith"]("DOCS_NORMAL") && var_core_value_sig33AE.containsElement(var_core_value_sig6DD3, var_core_value_sig2D58)
        });
      });
    return () => var_core_value_sig4289.dispose();
  }, [var_core_value_sigD2A7, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.hostUnitId, var_core_value_sigB62E, var_core_value_sig33AE, var_core_value_sig04611]), var_core_value_sigB0BB(() => {
    if (!(var_core_value_sigF20C != null && var_core_value_sigF20C.embedId)) return;
    let var_core_value_sig2729 = var_core_value_sigC6E3.exited$["subscribe"](var_core_value_sigEEDB => {
      var_core_value_sigEEDB.embedId === var_core_value_sigF20C.embedId && (var_core_value_sig04611.unmount(var_core_value_sigF20C.embedId), var_core_value_sigF383.clearFloating(var_core_value_sigF20C.embedId, var_core_value_sigF20C.hostUnitId), var_core_value_sigED13.current != null && (window.cancelAnimationFrame(var_core_value_sigED13.current), var_core_value_sigED13.current = undefined), var_core_value_sigCD11.current != null && globalThis.clearTimeout(var_core_value_sigCD11.current), var_core_value_sigCD11.current = globalThis.setTimeout(() => {
        var_core_value_sigCD11.current = undefined, var_core_value_sigED13.current = window.requestAnimationFrame(() => {
          var_core_value_sigED13.current = undefined, var_core_value_sigF383.clearFloating(var_core_value_sigF20C.embedId, var_core_value_sigF20C.hostUnitId), var_core_value_sigDC35(var_core_value_sig2AD0 => var_core_value_sig2AD0 + 1);
        });
      }, 0));
    });
    return () => {
      var_core_value_sig2729.unsubscribe(), var_core_value_sigCD11.current != null && (globalThis.clearTimeout(var_core_value_sigCD11.current), var_core_value_sigCD11.current = undefined), var_core_value_sigED13.current != null && (window.cancelAnimationFrame(var_core_value_sigED13.current), var_core_value_sigED13.current = undefined);
    };
  }, [var_core_value_sigF383, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.hostUnitId, var_core_value_sigC6E3, var_core_value_sig04611]), var_core_value_sigB0BB(() => {
    let var_core_value_sig5BB6 = var_core_value_sigF50E.current,
      var_core_value_sig5C75 = var_core_value_sig289C.current;
    if (!var_core_value_sig5BB6 || !var_core_value_sig5C75 || typeof document > "u") return;
    let var_core_value_sigCB46 = Id({
      chrome: var_core_value_sig5C75,
      container: var_core_value_sig5BB6,
      deferInactive: var_core_value_sigBD2F,
      embedId: var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId,
      geometryService: var_core_value_sig8481,
      hostLayout$: var_core_value_sigDA56,
      stage: var_core_value_sig47D2,
      docsSheetLikeLayout: var_core_value_sig0598 != null && var_core_value_sigBC6B != null ? {
        contentWidth: var_core_value_sig0598,
        pageContentWidth: var_core_value_sigBC6B
      } : undefined
    });
    return () => var_core_value_sigCB46.dispose();
  }, [var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sigBD2F, var_core_value_sig0598, var_core_value_sigBC6B, var_core_value_sig8481, var_core_value_sigDA56, var_core_value_sig47D2]), var_core_value_sigB0BB(() => {
    let var_core_value_sig0177 = var_core_value_sigF50E.current,
      var_core_value_sigC674 = var_core_value_sig289C.current;
    if (!var_core_value_sig0177) return;
    let var_core_value_sigC11B = var_core_value_sig0177.closest('[data-embed-docs-custom-block="true"]'),
      var_core_value_sig5461 = var_core_value_sigC11B == null ? undefined : var_core_value_sigC11B.parentElement;
    return sf(var_core_value_sig0177, var_core_value_sigC674, var_core_value_sig36E7 => {
      let var_core_value_sig6A78 = var_core_value_sigCA12.current;
      return (var_core_value_sig6A78 ? (var_core_value_sig9A2B == null ? undefined : var_core_value_sig9A2B(var_core_value_sig36E7, var_core_value_sig6A78)) === true : false) || Hu(var_core_value_sig0177, var_core_value_sig36E7);
    }, (var_core_value_sig5461 == null ? undefined : var_core_value_sig5461.id) === (var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.hostAnchorId) ? var_core_value_sig5461 : null, var_core_value_sig3398);
  }, [var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.hostAnchorId, var_core_value_sig9A2B, var_core_value_sig3398]), var_core_value_sigB0BB(() => {
    var var_core_value_sigBA12;
    let var_core_value_sig65CB = var_core_value_sigF50E.current,
      var_core_value_sig8AF4 = (var_core_value_sig65CB == null ? undefined : var_core_value_sig65CB.querySelector("[data-embed-float-fullscreen-button]")) ?? ((var_core_value_sigBA12 = var_core_value_sig289C.current) == null ? undefined : var_core_value_sigBA12.querySelector("[data-embed-float-fullscreen-button]"));
    if (!(!var_core_value_sig65CB || !var_core_value_sig8AF4)) return gf(var_core_value_sig65CB, var_core_value_sig8AF4);
  }, []), var_core_value_sigB0BB(() => {
    let var_core_value_sig7C2D = var_core_value_sigF50E.current;
    if (!(var_core_value_sigF20C != null && var_core_value_sigF20C.embedId) || !var_core_value_sig7C2D || typeof document > "u") return;
    let var_core_value_sig5F54 = Sf({
      activationService: var_core_value_sigF383,
      chrome: var_core_value_sig289C.current,
      container: var_core_value_sig7C2D,
      embedId: var_core_value_sigF20C.embedId,
      externalHostInteractionUntil: var_core_value_sig6EB1,
      floatingActiveService: var_core_value_sigB62E,
      focusCoordinator: var_core_value_sig33AE,
      graceMs: 650,
      hostUnitId: var_core_value_sigF20C.hostUnitId,
      interactionBoundaryService: var_core_value_sigB4C8,
      isExternalHostInteraction: var_core_value_sigAF2B,
      ownedPointerInteractionUntil: var_core_value_sig8C0A,
      runtimeFocusOwners: If
    });
    return () => var_core_value_sig5F54.dispose();
  }, [var_core_value_sigF383, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.hostUnitId, var_core_value_sigB62E, var_core_value_sig33AE, var_core_value_sigB4C8, var_core_value_sigAF2B]), var_core_value_sigB0BB(() => {
    var var_core_value_sig668D;
    var_core_value_sig47D2 !== "stage2" && ((var_core_value_sig668D = var_core_value_sig001D.current) == null || var_core_value_sig668D.dispose(), var_core_value_sig001D.current = undefined, Of(var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, of(var_core_value_sig4960.current, var_core_value_sig0F6B.current, var_core_value_sig341C1.current, var_core_value_sig30A2.current, var_core_value_sig829D.current)));
  }, [var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sig47D2]), var_core_value_sigB0BB(() => {
    let var_core_value_sig6883 = var_core_value_sig8DAA.current;
    if (!var_core_value_sig6883 || !(var_core_value_sigF20C != null && var_core_value_sigF20C.embedId) || !var_core_value_sigF20C.hostUnitId) return;
    let var_core_value_sig2A05 = Cf({
      acquireStage2SessionLease: var_core_value_sig1A22,
      activationService: var_core_value_sigF383,
      data: {
        childType: var_core_value_sig3398,
        childUnitId: var_core_value_sig0258,
        embedId: var_core_value_sigF20C.embedId,
        hostAnchorId: var_core_value_sigF20C.hostAnchorId,
        hostUnitId: var_core_value_sigF20C.hostUnitId
      },
      embedModelService: var_core_value_sigAAB6,
      enableStage1BodyDrag: var_core_value_sig60D0,
      floatingActiveService: var_core_value_sigB62E,
      gate: var_core_value_sig6883,
      interactionFlow: var_core_value_sig29A2,
      popupRoot: var_core_value_sig829D.current,
      releaseStage2SessionLeaseIfActivationDoesNotStick: var_core_value_sig28FE
    });
    return () => var_core_value_sig2A05.dispose();
  }, [var_core_value_sig1A22, var_core_value_sigF383, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.hostAnchorId, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.hostUnitId, var_core_value_sigAAB6, var_core_value_sig60D0, var_core_value_sigB62E, var_core_value_sig29A2, var_core_value_sig28FE, var_core_value_sig3398, var_core_value_sig0258]), var_core_value_sigB0BB(() => {
    let var_core_value_sig9CA8 = var_core_value_sigF50E.current;
    if (!var_core_value_sig9CA8 || !var_core_value_sigA6D5) return;
    let var_core_value_sig3C9C = var_core_value_sigA6D5(var_core_value_sig9CA8);
    if (!var_core_value_sig3C9C) return;
    let var_core_value_sig7651 = var_core_value_sig2556.register(var_core_value_sig3C9C, var_core_value_sig9CA8);
    return () => var_core_value_sig7651.dispose();
  }, [var_core_value_sig2556, var_core_value_sigA6D5]), var_core_value_sigB0BB(() => {
    let var_core_value_sig6E4E = var_core_value_sigF50E.current,
      var_core_value_sigC2E8 = var_core_value_sig8DAA.current,
      var_core_value_sig3A04 = var_core_value_sig4960.current;
    if (!var_core_value_sig6E4E || !var_core_value_sigC2E8 || !var_core_value_sig3A04) return;
    let var_core_value_sig935E = ju({
      container: var_core_value_sig6E4E,
      gate: var_core_value_sigC2E8,
      getChildContext: () => var_core_value_sigCA12.current,
      getStage: () => var_core_value_sigF20C != null && var_core_value_sigF20C.embedId ? var_core_value_sigB62E.getStage(var_core_value_sigF20C.embedId) : "inactive",
      hostScrollOffset: var_core_value_sigEDD6,
      hostWheelGestureService: var_core_value_sig2556,
      invalidate: var_core_value_sigF7EF => qd(var_core_value_sig8481, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sigF7EF, var_core_value_sigAE7D),
      liveRoot: var_core_value_sig3A04,
      onHostWheel: var_core_value_sig4B86,
      passiveViewportRegistry: var_core_value_sig1686,
      passiveWheelHandlerRegistry: var_core_value_sigF875,
      resizeDocsSheetLikeRendererByWheel: var_core_value_sigFF5B,
      routeHostGestures: !!var_core_value_sigA6D5,
      syncHostVerticalScroll: var_core_value_sigFE1A,
      viewScale: var_core_value_sigFB55
    });
    return () => var_core_value_sig935E.dispose();
  }, [var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sigFB55, var_core_value_sigB62E, var_core_value_sig8481, var_core_value_sig2556, var_core_value_sig1686, var_core_value_sigF875, var_core_value_sigFF5B, var_core_value_sigA6D5, var_core_value_sig4B86, var_core_value_sigFE1A]), var_core_value_sigB0BB(() => () => {
    var_core_value_sigAE7D.current["forEach"](var_core_value_sig223F => window.cancelAnimationFrame(var_core_value_sig223F)), var_core_value_sigAE7D.current = [];
  }, []), var_core_value_sigB0BB(() => {
    let var_core_value_sigDC45 = var_core_value_sig4960.current;
    if (!var_core_value_sigDC45) return;
    let var_core_value_sig7C31 = Tf({
      acquireStage2SessionLease: var_core_value_sig1A22,
      activationService: var_core_value_sigF383,
      data: {
        childType: var_core_value_sig3398,
        childUnitId: var_core_value_sig0258,
        embedId: var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId,
        hostUnitId: var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.hostUnitId
      },
      embedModelService: var_core_value_sigAAB6,
      floatingActiveService: var_core_value_sigB62E,
      focusCoordinator: var_core_value_sig33AE,
      getRuntimeRoots: () => of(var_core_value_sig341C1.current, var_core_value_sig0F6B.current, var_core_value_sig30A2.current, var_core_value_sig829D.current, var_core_value_sig4960.current),
      interactionFlow: var_core_value_sig29A2,
      liveRoot: var_core_value_sigDC45,
      popupRoot: var_core_value_sig829D.current,
      releaseStage2SessionLeaseIfActivationDoesNotStick: var_core_value_sig28FE,
      runtimeFocusOwners: If
    });
    return () => var_core_value_sig7C31.dispose();
  }, [var_core_value_sig1A22, var_core_value_sigF383, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.hostUnitId, var_core_value_sigAAB6, var_core_value_sigB62E, var_core_value_sig33AE, var_core_value_sig29A2, var_core_value_sig28FE, var_core_value_sig3398, var_core_value_sig0258]), var_core_value_sigB0BB(() => {
    let var_core_value_sig8B54 = var_core_value_sig4960.current;
    if (!var_core_value_sig8B54 || !(var_core_value_sigF20C != null && var_core_value_sigF20C.embedId)) return;
    let var_core_value_sigC19B = Ef({
      data: {
        childType: var_core_value_sigF20C.childType,
        childUnitId: var_core_value_sigF20C.childUnitId,
        embedId: var_core_value_sigF20C.embedId,
        hostUnitId: var_core_value_sigF20C.hostUnitId
      },
      floatingActiveService: var_core_value_sigB62E,
      focusCoordinator: var_core_value_sig33AE,
      graceMs: 650,
      interactionBoundaryService: var_core_value_sigB4C8,
      liveRoot: var_core_value_sig8B54,
      ownedPointerInteractionUntil: var_core_value_sig8C0A,
      pointerLease: var_core_value_sig001D,
      verticalScrollOwner: var_core_value_sig69451
    });
    return () => var_core_value_sigC19B.dispose();
  }, [var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.childType, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.childUnitId, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.hostUnitId, var_core_value_sigB62E, var_core_value_sig33AE, var_core_value_sigB4C8]), var_core_value_sigB0BB(() => {
    if (var_core_value_sig47D2 !== "stage2" || var_core_value_sig29A2 !== "doc-block") return;
    let var_core_value_sigFB87 = var_core_value_sig4960.current;
    if (!var_core_value_sigFB87) return;
    let var_core_value_sigA318,
      var_core_value_sig51A4 = () => _f(of(var_core_value_sig341C1.current, var_core_value_sig0F6B.current, var_core_value_sig30A2.current, var_core_value_sig829D.current, var_core_value_sig4960.current)),
      var_core_value_sig2966 = () => {
        let var_core_value_sig27F9 = var_core_value_sigFB87.ownerDocument["activeElement"];
        return !var_core_value_sig27F9 || var_core_value_sig27F9 === var_core_value_sig51A4() ? false : of(var_core_value_sig4960.current, var_core_value_sig0F6B.current, var_core_value_sig341C1.current, var_core_value_sig30A2.current, var_core_value_sig829D.current).some(var_core_value_sigD749 => var_core_value_sigD749.contains(var_core_value_sig27F9));
      },
      var_core_value_sigF4C4 = () => {
        if (!vf(var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.childType, true)) return;
        let var_core_value_sig393E = var_core_value_sig51A4();
        if (var_core_value_sig393E && !var_core_value_sig33AE.hasBlockingChildFocusLease(var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, {
          ignoreOwners: If
        }) && !var_core_value_sig2966()) {
          if (var_core_value_sigF20C != null && var_core_value_sigF20C.hostUnitId && var_core_value_sigF20C.embedId) {
            let var_core_value_sig480E = var_core_value_sigAAB6.getDescriptor(var_core_value_sigF20C.hostUnitId, var_core_value_sigF20C.embedId);
            (var_core_value_sig480E == null ? undefined : var_core_value_sig480E.childUnitId) != null && var_core_value_sig480E.childType != null && var_core_value_sigF383.focusFloatingRuntime(var_core_value_sig480E);
          }
          var_core_value_sig393E.hasAttribute("tabindex") || (var_core_value_sig393E.tabIndex = -1), var_core_value_sig393E.focus({
            preventScroll: true
          });
        }
      };
    return var_core_value_sigF4C4(), var_core_value_sigA318 = window.requestAnimationFrame(() => {
      var_core_value_sigA318 = undefined, var_core_value_sigF4C4();
    }), () => {
      var_core_value_sigA318 != null && (window.cancelAnimationFrame(var_core_value_sigA318), var_core_value_sigA318 = undefined);
    };
  }, [var_core_value_sigF383, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.childType, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.hostUnitId, var_core_value_sigAAB6, var_core_value_sig33AE, var_core_value_sig29A2, var_core_value_sig47D2]), var_core_value_sigB0BB(() => {
    let var_core_value_sig5617 = var_core_value_sigF50E.current,
      var_core_value_sig450E = var_core_value_sigE9E0.current;
    if (!var_core_value_sig5617 || !var_core_value_sig450E || typeof window > "u") return;
    let var_core_value_sig92A31 = Dd({
      collapseViewportHeight: var_core_value_sig9DBC == null ? undefined : var_core_value_sig9DBC.visibleCanvasHeight,
      collapseWithoutChildScroll: (var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.childType) === var_core_value_sigC0F3.UNIVER_BASE,
      container: var_core_value_sig5617,
      content: var_core_value_sig450E,
      contentHeight: var_core_value_sig9DBC == null ? undefined : var_core_value_sig9DBC.contentHeight,
      enabled: var_core_value_sigFE1A,
      getChildContext: () => var_core_value_sigCA12.current,
      getProvider: var_core_value_sigB609 => var_core_value_sig1686.get(var_core_value_sigB609.childType, var_core_value_sigB609.layout),
      getStage: () => var_core_value_sigF20C != null && var_core_value_sigF20C.embedId ? var_core_value_sigB62E.getStage(var_core_value_sigF20C.embedId) : "inactive",
      hostLayout$: var_core_value_sigDA56,
      invalidate: () => var_core_value_sig8481.invalidate({
        embedId: var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId,
        reason: "host-scroll"
      }),
      offset: var_core_value_sigEDD6,
      onHostWheel: var_core_value_sig4B86,
      owner: var_core_value_sig69451,
      syncingChildFromHost: var_core_value_sig7FD1,
      syncingHostFromChild: var_core_value_sigB194,
      viewScale: var_core_value_sigFB55,
      viewportHeight: var_core_value_sig9DBC == null ? undefined : var_core_value_sig9DBC.viewportHeight
    });
    return () => var_core_value_sig92A31.dispose();
  }, [var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.childType, var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId, var_core_value_sig9DBC == null ? undefined : var_core_value_sig9DBC.contentHeight, var_core_value_sigFB55, var_core_value_sig9DBC == null ? undefined : var_core_value_sig9DBC.visibleCanvasHeight, var_core_value_sig9DBC == null ? undefined : var_core_value_sig9DBC.viewportHeight, var_core_value_sigB62E, var_core_value_sig8481, var_core_value_sigDA56, var_core_value_sigE9FC, var_core_value_sig1686, var_core_value_sig4B86, var_core_value_sigFE1A]);
  let var_core_value_sig87CD = Cu({
      stage: var_core_value_sig47D2,
      interactionFlow: var_core_value_sig29A2
    }),
    var_core_value_sig8BCB = var_core_value_sig87CD.disableLiveHostPointerEvents,
    var_core_value_sig86E9 = var_core_value_sig87CD.passThroughInteractionGate,
    var_core_value_sig41D0 = var_core_value_sig9DBC ? {
      top: var_core_value_sig9DBC.floatingMenuInsetTop * var_core_value_sigFB55,
      left: -var_core_value_sig65C4 * var_core_value_sigFB55,
      width: (((var_core_value_sig8B63 == null ? undefined : var_core_value_sig8B63.initialWidth) ?? 1) + var_core_value_sig65C4) * var_core_value_sigFB55,
      height: var_core_value_sig9DBC.viewportHeight * var_core_value_sigFB55
    } : var_core_value_sig810B ? {
      top: var_core_value_sig810B.floatingMenuInsetTop,
      height: "calc(100% - " + var_core_value_sig810B.floatingMenuInsetTop + "px)"
    } : undefined,
    var_core_value_sigBA2B = var_core_value_sig9DBC ? {
      width: ((var_core_value_sig8B63 == null ? undefined : var_core_value_sig8B63.initialWidth) ?? 1) + var_core_value_sig65C4,
      height: var_core_value_sig9DBC.viewportHeight,
      transform: var_core_value_sigFB55 === 1 ? undefined : "scale(" + var_core_value_sigFB55 + ")",
      transformOrigin: "top left"
    } : undefined,
    var_core_value_sig0140 = var_core_value_sig9DBC ? {
      left: 0,
      width: "100%",
      height: var_core_value_sig9DBC.viewportHeight,
      minHeight: var_core_value_sig9DBC.viewportHeight
    } : undefined;
  return var_core_value_sigA648("div", {
    ref: var_core_value_sigF50E,
    className: var_core_value_sig522C("univer-relative univer-size-full univer-min-h-0 univer-min-w-0 univer-overflow-visible univer-bg-transparent", var_core_value_sig47D2 === "inactive" && var_core_value_sig547A, var_core_value_sig9DBC && "univer-pointer-events-none"),
    "data-u-comp": "embed-float-dom",
    "data-embed-float-dom": "true",
    "data-embed-float-stage": var_core_value_sig47D2,
    "data-embed-id": var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId,
    "data-embed-host-unit-id": var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.hostUnitId,
    "data-embed-host-anchor-id": var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.hostAnchorId,
    "data-embed-child-unit-id": var_core_value_sig0258,
    "data-embed-child-type": var_core_value_sig3398,
    "data-embed-interaction-flow": var_core_value_sig29A2,
    children: [var_core_value_sigA648("div", {
      ref: var_core_value_sigE9E0,
      className: var_core_value_sig522C("univer-absolute\x20univer-inset-0\x20univer-box-border\x20univer-min-h-0\x20univer-min-w-0\x20univer-overflow-hidden\x20univer-rounded-md\x20after:univer-pointer-events-none\x20after:univer-absolute\x20after:univer-inset-0\x20after:univer-z-20\x20after:univer-box-border\x20after:univer-rounded-[inherit]\x20after:univer-border\x20after:univer-border-solid\x20after:univer-border-gray-200\x20after:univer-content-[\x27\x27]\x20dark:after:!univer-border-gray-600", var_core_value_sig9DBC && "after:!univer-border-b-0 after:!univer-border-r-0"),
      "data-u-comp": "embed-float-dom-content",
      "data-embed-float-content": "true",
      style: var_core_value_sig41D0,
      children: [var_core_value_sigA648("div", {
        ref: var_core_value_sig4960,
        className: var_core_value_sig522C("univer-absolute\x20univer-inset-0\x20univer-size-full\x20univer-min-h-0\x20univer-min-w-0\x20univer-overflow-hidden\x20univer-bg-transparent", var_core_value_sig9DBC && "before:univer-hidden"),
        "data-u-comp": "embed-float-dom-live",
        "data-embed-float-live": "true",
        style: var_core_value_sigBA2B,
        children: [var_core_value_sig6F03("div", {
          ref: var_core_value_sig341C1,
          className: var_core_value_sig522C("univer-absolute\x20univer-inset-0\x20univer-z-0\x20univer-size-full\x20univer-min-h-0\x20univer-min-w-0\x20univer-overflow-hidden", var_core_value_sig8653, var_core_value_sig9DBC && "univer-pointer-events-auto", var_core_value_sig8BCB && "univer-pointer-events-none"),
          "data-u-comp": "embed-float-dom-live-canvas",
          style: var_core_value_sig0140,
          "data-embed-canvas-root": "true"
        }), var_core_value_sig6F03("div", {
          ref: var_core_value_sig0F6B,
          className: var_core_value_sig522C("univer-pointer-events-none univer-absolute univer-inset-0 univer-z-[1] univer-size-full univer-min-h-0 univer-min-w-0 univer-overflow-hidden [&>*]:univer-pointer-events-auto", var_core_value_sig8BCB && "univer-pointer-events-none"),
          "data-u-comp": "embed-float-dom-live-content",
          style: var_core_value_sig0140,
          "data-embed-content-root": "true"
        })]
      }), var_core_value_sig6F03("div", {
        ref: var_core_value_sig8DAA,
        className: var_core_value_sig522C("univer-absolute\x20univer-inset-0\x20univer-z-10\x20univer-bg-transparent", var_core_value_sig86E9 && "univer-pointer-events-none"),
        "data-u-comp": "embed-float-dom-interaction-gate",
        "data-embed-float-interaction-gate": "true"
      }), var_core_value_sig47D2 === "inactive" && var_core_value_sig6F03(var_core_value_sig008E, {
        className: "univer-z-[21]"
      })]
    }), var_core_value_sigA648("div", {
      ref: var_core_value_sig289C,
      className: "univer-pointer-events-none\x20univer-fixed\x20univer-overflow-visible\x20[&>*]:univer-pointer-events-auto",
      "data-u-comp": "embed-float-dom-chrome",
      "data-embed-float-stage": var_core_value_sig47D2,
      "data-embed-id": var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId,
      style: {
        zIndex: var_core_value_sig8A14 ?? 800
      },
      children: [var_core_value_sig6F03("div", {
        ref: var_core_value_sig30A2,
        className: "univer-pointer-events-none univer-absolute univer-inset-0 univer-overflow-visible [&>*]:univer-pointer-events-auto",
        "data-u-comp": "embed-float-dom-overlay",
        "data-embed-overlay-root": "true"
      }), var_core_value_sig6F03("div", {
        ref: var_core_value_sig829D,
        className: "univer-pointer-events-none\x20univer-absolute\x20univer-inset-0\x20univer-overflow-visible\x20[&>*]:univer-pointer-events-auto",
        "data-u-comp": "embed-float-dom-popup",
        "data-embed-popup-root": "true"
      }), var_core_value_sig6F03(Mf, {
        hostUnitId: var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.hostUnitId,
        embedId: var_core_value_sigF20C == null ? undefined : var_core_value_sigF20C.embedId
      })]
    })]
  });
}
function Rf(var_core_value_sig4A78) {
  let var_core_value_sig2BE6 = var_core_value_sig4A78 == null ? undefined : var_core_value_sig4A78.source["ref"];
  if (var_core_value_sig2BE6) try {
    let var_core_value_sig61E5 = typeof var_core_value_sig2BE6 == "string" ? var_core_value_sig5450(var_core_value_sig2BE6) : var_core_value_sig2BE6;
    return {
      childUnitId: var_core_value_sig61E5.unit["selector"],
      childType: var_core_value_sigD788(var_core_value_sig61E5.unit["type"])
    };
  } catch {
    return;
  }
}
function zf(var_core_value_sig55AD) {
  var var_core_value_sig4373, var_core_value_sig5FAB;
  let var_core_value_sig3F6D = ((var_core_value_sig4373 = var_core_value_sig55AD.sourceMeta) == null ? undefined : var_core_value_sig4373.floating) || undefined;
  if (var_core_value_sig3F6D && typeof var_core_value_sig3F6D == "object" && var_core_value_sig3F6D.layout) return var_core_value_sig3F6D.layout;
  let var_core_value_sig569B = ((var_core_value_sig5FAB = var_core_value_sig55AD.sourceMeta) == null ? undefined : var_core_value_sig5FAB.tab) || undefined;
  return var_core_value_sig569B && typeof var_core_value_sig569B == "object" && var_core_value_sig569B.enabled ? "tab-peer" : undefined;
}
var Bf = class extends var_core_value_sigCBDC {
  constructor(...var_core_value_sig9E17) {
    super(...var_core_value_sig9E17), Y(this, "_providers", new Map()), Y(this, "_providerChanged$", new var_core_value_sigF7F1()), Y(this, "providerChanged$", this._providerChanged$["asObservable"]()), Y(this, "_contentSizeChanged$", new var_core_value_sigF7F1()), Y(this, "contentSizeChanged$", this._contentSizeChanged$["asObservable"]());
  }
  register(var_core_value_sigB97D) {
    return this._providers["set"](var_core_value_sigB97D.childType, var_core_value_sigB97D), this._providerChanged$["next"](var_core_value_sigB97D.childType), var_core_value_sig9BBC(() => {
      this._providers["get"](var_core_value_sigB97D.childType) === var_core_value_sigB97D && (this._providers["delete"](var_core_value_sigB97D.childType), this._providerChanged$["next"](var_core_value_sigB97D.childType));
    });
  }
  get(var_core_value_sigFE1E) {
    return this._providers["get"](var_core_value_sigFE1E);
  }
  list() {
    return [...this._providers["values"]()];
  }
  measureContentSize(var_core_value_sig5F541) {
    var var_core_value_sig84B9;
    return (var_core_value_sig84B9 = this.get(var_core_value_sig5F541.childType)) == null ? undefined : var_core_value_sig84B9.measureContentSize(var_core_value_sig5F541);
  }
  notifyContentSizeChanged(var_core_value_sig09DF, var_core_value_sig3A25) {
    this._contentSizeChanged$["next"]({
      embedId: var_core_value_sig3A25,
      hostUnitId: var_core_value_sig09DF
    });
  }
  dispose() {
    this._providers["clear"](), this._contentSizeChanged$["complete"](), super.dispose();
  }
};
let Vf = class {
  constructor(var_core_value_sig5B2B) {
    this._mountService = var_core_value_sig5B2B, Y(this, "_leases", new Map());
  }
  acquire(var_core_value_sigE5FE, var_core_value_sig78A5) {
    if (this._leases["has"](var_core_value_sigE5FE.embedId)) throw Error("EMBED_RUNTIME_HOST_ALREADY_LEASED:" + var_core_value_sigE5FE.embedId);
    let var_core_value_sig9A4C = this._mountService["getSession"](var_core_value_sigE5FE.embedId),
      var_core_value_sigC723 = var_core_value_sig9A4C != null && var_core_value_sig9A4C.context ? this._relocateExistingSession(var_core_value_sig9A4C, var_core_value_sig78A5) : this._mountOwnedSession(var_core_value_sigE5FE, var_core_value_sig78A5);
    return this._leases["set"](var_core_value_sigE5FE.embedId, var_core_value_sigC723), {
      session: var_core_value_sigC723.session,
      ownsSession: var_core_value_sigC723.ownsSession,
      dispose: () => {
        this._leases["get"](var_core_value_sigE5FE.embedId) === var_core_value_sigC723 && (this._leases["delete"](var_core_value_sigE5FE.embedId), var_core_value_sigC723.dispose());
      }
    };
  }
  _relocateExistingSession(var_core_value_sig1E32, var_core_value_sig22AF) {
    let var_core_value_sig0F31 = Hf(var_core_value_sig1E32);
    if (var_core_value_sig0F31.length === 0) throw Error("EMBED_RUNTIME_HOST_SLOTS_NOT_AVAILABLE:" + var_core_value_sig1E32.embedId);
    let var_core_value_sig8F25 = var_core_value_sig0F31.map(var_core_value_sig390D => {
      let var_core_value_sigC928 = var_core_value_sig390D.parentNode;
      if (!var_core_value_sigC928) throw Error("EMBED_RUNTIME_HOST_NOT_ATTACHED:" + var_core_value_sig1E32.embedId);
      return {
        node: var_core_value_sig390D,
        originalParent: var_core_value_sigC928,
        placeholder: document.createComment("embed-runtime-host-lease")
      };
    });
    return var_core_value_sig8F25.forEach(({
      node: var_core_value_sig39B7,
      originalParent: var_core_value_sig18E0,
      placeholder: var_core_value_sigE161
    }) => {
      var_core_value_sig18E0.insertBefore(var_core_value_sigE161, var_core_value_sig39B7);
    }), var_core_value_sig22AF.replaceChildren(...var_core_value_sig0F31), {
      session: var_core_value_sig1E32,
      ownsSession: false,
      dispose: () => {
        if (this._mountService["getSession"](var_core_value_sig1E32.embedId) !== var_core_value_sig1E32) {
          var_core_value_sig8F25.forEach(({
            node: var_core_value_sig26DB,
            placeholder: var_core_value_sigF0F9
          }) => {
            var_core_value_sig26DB.remove(), var_core_value_sigF0F9.remove();
          });
          return;
        }
        var_core_value_sig8F25.forEach(({
          node: var_core_value_sigCFFA,
          originalParent: var_core_value_sig58C1,
          placeholder: var_core_value_sig5090
        }) => {
          if (var_core_value_sig5090.parentNode) {
            var_core_value_sig5090.replaceWith(var_core_value_sigCFFA);
            return;
          }
          var_core_value_sig58C1.appendChild(var_core_value_sigCFFA);
        });
      }
    };
  }
  _mountOwnedSession(var_core_value_sigCBED, var_core_value_sig6224) {
    let var_core_value_sigFC3E = this._mountService["mountIntoHostElement"](var_core_value_sigCBED, var_core_value_sig6224);
    return {
      session: var_core_value_sigFC3E,
      ownsSession: true,
      dispose: () => {
        this._mountService["getSession"](var_core_value_sigCBED.embedId) === var_core_value_sigFC3E && this._mountService["unmount"](var_core_value_sigCBED.embedId);
      }
    };
  }
};
Vf = $([Q(0, var_core_value_sig205B(cl))], Vf);
function Hf(var_core_value_sigF850) {
  let var_core_value_sig5D78 = var_core_value_sigF850.context;
  if (!var_core_value_sig5D78) return [];
  let var_core_value_sig42FA = var_core_value_sig5D78.renderScope["rootElement"],
    var_core_value_sig0E18 = new Set([var_core_value_sig5D78.runtimeScope["roots"].content, var_core_value_sig5D78.runtimeScope["roots"].overlay, var_core_value_sig5D78.runtimeScope["roots"].popup]);
  return var_core_value_sig5D78.runtimeScope["roots"].canvas && var_core_value_sig0E18.add(var_core_value_sig5D78.runtimeScope["roots"].canvas), var_core_value_sig5D78.runtimeScope["roots"].menuSlot && var_core_value_sig0E18.add(var_core_value_sig5D78.runtimeScope["roots"].menuSlot), var_core_value_sig5D78.runtimeScope["roots"].footerSlot && var_core_value_sig0E18.add(var_core_value_sig5D78.runtimeScope["roots"].footerSlot), var_core_value_sig0E18.delete(var_core_value_sig42FA), Array.from(var_core_value_sig42FA.children).filter(var_core_value_sig4D33 => var_core_value_sig4D33 instanceof HTMLElement && [...var_core_value_sig0E18].some(var_core_value_sigBDEE => var_core_value_sig4D33 === var_core_value_sigBDEE || var_core_value_sig4D33.contains(var_core_value_sigBDEE)));
}
const Uf = 1000;
function Wf(var_core_value_sig6BCD, var_core_value_sig883B) {
  return {
    childType: var_core_value_sig883B.childType,
    collectViewState: () => undefined,
    restoreViewState: () => undefined,
    renderPreview: var_core_value_sig08BF => Gf(var_core_value_sig6BCD, var_core_value_sig883B.renderManagerService, var_core_value_sig08BF)
  };
}
async function Gf(var_core_value_sigA9FC, var_core_value_sigE15C, var_core_value_sig36B1) {
  let var_core_value_sigD03D = var_core_value_sigA9FC.get(var_core_value_sigE15C),
    var_core_value_sig2952 = await Kf(var_core_value_sigD03D, var_core_value_sig36B1);
  if (var_core_value_sig2952) return var_core_value_sig2952;
  if (!var_core_value_sig36B1.context) {
    let var_core_value_sig1814 = var_core_value_sigD03D.getRenderUnitById(var_core_value_sig36B1.childUnitId);
    if (var_core_value_sig1814) {
      let var_core_value_sig1F40 = await Xf(var_core_value_sig1814, var_core_value_sig36B1);
      if (var_core_value_sig1F40) return var_core_value_sig1F40;
    }
  }
  let var_core_value_sig53FF = await qf(var_core_value_sigA9FC, var_core_value_sig36B1);
  return var_core_value_sig53FF === null ? Jf(var_core_value_sigA9FC, var_core_value_sigD03D, var_core_value_sig36B1) : var_core_value_sig53FF;
}
async function Kf(var_core_value_sigF73F, var_core_value_sigE4F5) {
  if (!var_core_value_sigE4F5.context) return;
  let var_core_value_sig0059 = var_core_value_sigE4F5.reason === "print" ? $c(var_core_value_sigE4F5.context) : undefined;
  try {
    var_core_value_sigE4F5.reason === "print" && (await tl(var_core_value_sigE4F5.childType));
    let var_core_value_sig2B5D = var_core_value_sigF73F.getRenderUnitById(var_core_value_sigE4F5.childUnitId);
    return var_core_value_sig2B5D && (await ep(var_core_value_sig2B5D, false, np(var_core_value_sigE4F5.context))), Xc(var_core_value_sigE4F5.context);
  } finally {
    var_core_value_sig0059 == null || var_core_value_sig0059();
  }
}
async function qf(var_core_value_sig39B6, var_core_value_sig119D) {
  if (ap(var_core_value_sig119D) !== "tab-peer" || !var_core_value_sig39B6.has(Vf)) return null;
  if (typeof document > "u") return;
  let var_core_value_sigB0F8 = tp(var_core_value_sig119D),
    var_core_value_sigD7E0;
  try {
    var_core_value_sigD7E0 = var_core_value_sig39B6.get(Vf).acquire({
      ...var_core_value_sig119D.descriptor,
      mode: "readonly"
    }, var_core_value_sigB0F8);
    let var_core_value_sig9B0B = var_core_value_sigD7E0.session["context"];
    if (!var_core_value_sig9B0B) return;
    let var_core_value_sigF21D = var_core_value_sig119D.reason === "print" ? $c(var_core_value_sig9B0B) : undefined;
    try {
      return var_core_value_sig119D.reason === "print" && (await tl(var_core_value_sig119D.childType)), await Qf(var_core_value_sig9B0B), Xc(var_core_value_sig9B0B);
    } finally {
      var_core_value_sigF21D == null || var_core_value_sigF21D();
    }
  } catch {
    return;
  } finally {
    var_core_value_sigD7E0 == null || var_core_value_sigD7E0.dispose(), var_core_value_sigB0F8.remove();
  }
}
async function Jf(var_core_value_sigA8CD, var_core_value_sig246C, var_core_value_sig3282) {
  var var_core_value_sig47FC, var_core_value_sigF54B;
  if (typeof document > "u") return;
  let var_core_value_sigC23B1 = tp(var_core_value_sig3282),
    var_core_value_sigD35A = (var_core_value_sig47FC = var_core_value_sig3282.context) != null && (var_core_value_sig47FC = var_core_value_sig47FC.runtimeScope) != null && var_core_value_sig47FC.injector ? undefined : Fs(ip(var_core_value_sigA8CD, var_core_value_sig3282, var_core_value_sigC23B1)),
    var_core_value_sigD958 = ((var_core_value_sigF54B = var_core_value_sig3282.context) == null || (var_core_value_sigF54B = var_core_value_sigF54B.runtimeScope) == null ? undefined : var_core_value_sigF54B.injector) ?? var_core_value_sigD35A,
    var_core_value_sig1CD1 = Gc(var_core_value_sig246C, var_core_value_sig3282.childUnitId, var_core_value_sigD958);
  if (!var_core_value_sig1CD1) {
    var_core_value_sigD35A == null || var_core_value_sigD35A.dispose(), var_core_value_sigC23B1.remove();
    return;
  }
  return Yf(var_core_value_sig246C, var_core_value_sig3282.childUnitId, var_core_value_sig1CD1, var_core_value_sigD35A, var_core_value_sigC23B1, var_core_value_sig3282);
}
async function Yf(var_core_value_sig4B51, var_core_value_sigB58E, var_core_value_sig0094, var_core_value_sig63A21, var_core_value_sig5703, var_core_value_sigCE23) {
  let var_core_value_sig853E;
  try {
    return var_core_value_sig0094.engine["mount"](var_core_value_sig5703), var_core_value_sigCE23.reason === "print" && (var_core_value_sig853E = el(var_core_value_sig0094, [var_core_value_sig5703]), await tl(var_core_value_sigCE23.childType)), await ep(var_core_value_sig0094, true), Zf(var_core_value_sig0094);
  } catch {
    return;
  } finally {
    var_core_value_sig853E == null || var_core_value_sig853E();
    try {
      var var_core_value_sigE8A4, var_core_value_sig33CB;
      (var_core_value_sigE8A4 = (var_core_value_sig33CB = var_core_value_sig0094.engine).unmount) == null || var_core_value_sigE8A4.call(var_core_value_sig33CB);
    } catch {}
    if (var_core_value_sig63A21) {
      var var_core_value_sigFF80;
      (var_core_value_sigFF80 = var_core_value_sig4B51.removeRender) == null || var_core_value_sigFF80.call(var_core_value_sig4B51, var_core_value_sigB58E), var_core_value_sig63A21.dispose();
    }
    var_core_value_sig5703.remove();
  }
}
async function Xf(var_core_value_sig0145, var_core_value_sig23B3) {
  let var_core_value_sig5075 = var_core_value_sig23B3.reason === "print" ? el(var_core_value_sig0145) : undefined;
  try {
    return var_core_value_sig23B3.reason === "print" && (await tl(var_core_value_sig23B3.childType)), Zf(var_core_value_sig0145);
  } finally {
    var_core_value_sig5075 == null || var_core_value_sig5075();
  }
}
function Zf(var_core_value_sigDCD9) {
  var var_core_value_sig7478, var_core_value_sig358D, var_core_value_sig81FD, var_core_value_sigB6F0, var_core_value_sig1BCE;
  let var_core_value_sig1C8D = ((var_core_value_sig7478 = (var_core_value_sig358D = var_core_value_sigDCD9.engine).getCanvasElement) == null ? undefined : var_core_value_sig7478.call(var_core_value_sig358D)) ?? ((var_core_value_sig81FD = (var_core_value_sigB6F0 = var_core_value_sigDCD9.engine).getCanvas) == null || (var_core_value_sig81FD = var_core_value_sig81FD.call(var_core_value_sigB6F0)) == null || (var_core_value_sig1BCE = var_core_value_sig81FD.getCanvasEle) == null ? undefined : var_core_value_sig1BCE.call(var_core_value_sig81FD));
  if (!(!var_core_value_sig1C8D || var_core_value_sig1C8D.width <= 1 || var_core_value_sig1C8D.height <= 1 || typeof var_core_value_sig1C8D.toDataURL != "function")) return var_core_value_sig1C8D.toDataURL("image/png");
}
async function Qf(var_core_value_sigFE6A, var_core_value_sigD935 = false) {
  try {
    var var_core_value_sig0C98;
    let var_core_value_sig9B55 = (((var_core_value_sig0C98 = var_core_value_sigFE6A.runtimeScope) == null ? undefined : var_core_value_sig0C98.injector) ?? var_core_value_sigFE6A.injector).get(var_core_value_sigE391),
      var_core_value_sigB8F41 = Date.now() + Uf,
      var_core_value_sig5E41 = await $f(var_core_value_sig9B55, var_core_value_sigFE6A.childUnitId, var_core_value_sigB8F41);
    var_core_value_sig5E41 && (var_core_value_sigD935 && (var_core_value_sig5E41.scene["makeDirty"](true), await Promise.race([var_core_value_sig5E41.scene["requestRender"](), new Promise(var_core_value_sig3FC7 => globalThis.setTimeout(var_core_value_sig3FC7, Math.max(0, var_core_value_sigB8F41 - Date.now())))])), await ep(var_core_value_sig5E41, false, np(var_core_value_sigFE6A), var_core_value_sigB8F41));
  } catch {}
}
async function $f(var_core_value_sig48BC, var_core_value_sig5A73, var_core_value_sig3E85) {
  let var_core_value_sig3AED = var_core_value_sig48BC.getRenderUnitById(var_core_value_sig5A73);
  if (var_core_value_sig3AED) return var_core_value_sig3AED;
  let var_core_value_sig9CD5 = var_core_value_sig48BC.created$;
  if (!(!var_core_value_sig9CD5 || typeof var_core_value_sig9CD5.subscribe != "function")) return new Promise(var_core_value_sig310E => {
    let var_core_value_sig2E97 = false,
      var_core_value_sig4B00,
      var_core_value_sig9896,
      var_core_value_sigA725 = var_core_value_sig1E1B => {
        var_core_value_sig2E97 || (var_core_value_sig2E97 = true, var_core_value_sig4B00 !== undefined && globalThis.clearTimeout(var_core_value_sig4B00), var_core_value_sig9896 == null || var_core_value_sig9896.unsubscribe(), var_core_value_sig310E(var_core_value_sig1E1B));
      },
      var_core_value_sig9FB3 = var_core_value_sig9CD5.subscribe(var_core_value_sig3B10 => {
        var_core_value_sig3B10.unitId === var_core_value_sig5A73 && var_core_value_sigA725(var_core_value_sig3B10);
      });
    if (var_core_value_sig9896 = var_core_value_sig9FB3, var_core_value_sig2E97) {
      var_core_value_sig9FB3.unsubscribe();
      return;
    }
    let var_core_value_sig0E44 = var_core_value_sig48BC.getRenderUnitById(var_core_value_sig5A73);
    if (var_core_value_sig0E44) {
      var_core_value_sigA725(var_core_value_sig0E44);
      return;
    }
    var_core_value_sig4B00 = globalThis.setTimeout(() => var_core_value_sigA725(var_core_value_sig48BC.getRenderUnitById(var_core_value_sig5A73) ?? undefined), Math.max(0, var_core_value_sig3E85 - Date.now()));
  });
}
async function ep(var_core_value_sigF319, var_core_value_sig1E6B, var_core_value_sigC103 = true, var_core_value_sigCEEA = Date.now() + Uf) {
  await rp(var_core_value_sigCEEA);
  let var_core_value_sig3D91 = var_core_value_sigF319.scene["afterRender$"];
  if (!var_core_value_sig3D91) {
    var_core_value_sig1E6B && Jc(var_core_value_sigF319, {
      activate: false
    });
    return;
  }
  await new Promise(var_core_value_sig243C => {
    let var_core_value_sigB3A4 = false,
      var_core_value_sigAF1B,
      var_core_value_sig906D,
      var_core_value_sig6AFB,
      var_core_value_sig2830 = () => {
        var_core_value_sigB3A4 || (var_core_value_sigB3A4 = true, var_core_value_sigAF1B !== undefined && globalThis.clearTimeout(var_core_value_sigAF1B), var_core_value_sig906D !== undefined && globalThis.clearTimeout(var_core_value_sig906D), var_core_value_sig6AFB == null || var_core_value_sig6AFB.unsubscribe(), var_core_value_sig243C());
      },
      var_core_value_sig9C3A = () => {
        var_core_value_sigAF1B !== undefined && globalThis.clearTimeout(var_core_value_sigAF1B), var_core_value_sigAF1B = globalThis.setTimeout(var_core_value_sig2830, 160);
      };
    var_core_value_sig6AFB = var_core_value_sig3D91.subscribe(var_core_value_sig89E6 => {
      var_core_value_sig89E6 && var_core_value_sig9C3A();
    }), var_core_value_sig906D = globalThis.setTimeout(var_core_value_sig2830, Math.max(0, var_core_value_sigCEEA - Date.now()));
    try {
      var_core_value_sig1E6B && Jc(var_core_value_sigF319, {
        activate: false
      }), (var_core_value_sig1E6B || var_core_value_sigC103) && var_core_value_sig9C3A();
    } catch {
      var_core_value_sig2830();
    }
  });
}
function tp(var_core_value_sigD605) {
  let var_core_value_sig7D57 = document.createElement("div");
  return var_core_value_sig7D57.style["position"] = "fixed", var_core_value_sig7D57.style["left"] = "-100000px", var_core_value_sig7D57.style["top"] = "-100000px", var_core_value_sig7D57.style["width"] = Math.max(1, Math.round(var_core_value_sigD605.width)) + "px", var_core_value_sig7D57.style["height"] = Math.max(1, Math.round(var_core_value_sigD605.height)) + "px", var_core_value_sig7D57.style["pointerEvents"] = "none", document.body["appendChild"](var_core_value_sig7D57), var_core_value_sig7D57;
}
function np(var_core_value_sigCDB5) {
  var var_core_value_sig7450, var_core_value_sigA3451, var_core_value_sigB243;
  return [(var_core_value_sig7450 = var_core_value_sigCDB5.renderScope) == null ? undefined : var_core_value_sig7450.canvasRoot, (var_core_value_sigA3451 = var_core_value_sigCDB5.renderScope) == null ? undefined : var_core_value_sigA3451.contentRoot, (var_core_value_sigB243 = var_core_value_sigCDB5.renderScope) == null ? undefined : var_core_value_sigB243.rootElement].filter(var_core_value_sig0321 => !!var_core_value_sig0321).some(var_core_value_sig51CF => Array.from(var_core_value_sig51CF.querySelectorAll("canvas")).some(var_core_value_sig4743 => var_core_value_sig4743.width > 1 && var_core_value_sig4743.height > 1));
}
async function rp(var_core_value_sigCCEE) {
  if (typeof document > "u" || !document.fonts || document.fonts["status"] !== "loading") return;
  let var_core_value_sig1713;
  try {
    await Promise.race([document.fonts["ready"].then(() => undefined, () => undefined), new Promise(var_core_value_sigEB6A => {
      var_core_value_sig1713 = globalThis.setTimeout(var_core_value_sigEB6A, Math.max(0, var_core_value_sigCCEE - Date.now()));
    })]);
  } finally {
    var_core_value_sig1713 !== undefined && globalThis.clearTimeout(var_core_value_sig1713);
  }
}
function ip(var_core_value_sig231B, var_core_value_sig6E74, var_core_value_sig6177) {
  let var_core_value_sigD946 = ap(var_core_value_sig6E74),
    var_core_value_sig3CFD = var_core_value_sigD946 === "tab-peer",
    var_core_value_sig2807 = () => {};
  return {
    descriptor: var_core_value_sig6E74.descriptor,
    layout: var_core_value_sigD946,
    injector: var_core_value_sig231B,
    hostElement: var_core_value_sig6177,
    container: var_core_value_sig6177,
    hostUnitId: var_core_value_sig6E74.descriptor["hostUnitId"],
    embedId: var_core_value_sig6E74.descriptor["embedId"],
    childUnitId: var_core_value_sig6E74.childUnitId,
    childType: var_core_value_sig6E74.childType,
    renderScope: {
      hostUnitId: var_core_value_sig6E74.descriptor["hostUnitId"],
      hostAnchorId: var_core_value_sig6E74.descriptor["hostAnchorId"],
      embedId: var_core_value_sig6E74.descriptor["embedId"],
      childUnitId: var_core_value_sig6E74.childUnitId,
      childType: var_core_value_sig6E74.childType,
      layout: var_core_value_sigD946,
      mode: var_core_value_sig3CFD ? "tab" : "float",
      rootElement: var_core_value_sig6177,
      contentRoot: var_core_value_sig6177,
      canvasRoot: var_core_value_sig6177,
      active$: var_core_value_sigDA93(false)
    },
    runtimeScope: {
      descriptor: var_core_value_sig6E74.descriptor,
      host: {
        unitId: var_core_value_sig6E74.descriptor["hostUnitId"],
        type: var_core_value_sig6E74.descriptor["hostType"],
        anchorId: var_core_value_sig6E74.descriptor["hostAnchorId"],
        entry: var_core_value_sig6E74.descriptor["entry"],
        layout: var_core_value_sig3CFD ? "tab-peer" : "float"
      },
      child: {
        unitId: var_core_value_sig6E74.childUnitId,
        type: var_core_value_sig6E74.childType
      },
      injector: var_core_value_sig231B,
      roots: {
        root: var_core_value_sig6177,
        content: var_core_value_sig6177,
        canvas: var_core_value_sig6177,
        overlay: var_core_value_sig6177,
        popup: var_core_value_sig6177
      },
      activate: var_core_value_sig2807,
      deactivate: var_core_value_sig2807,
      dispose: var_core_value_sig2807
    }
  };
}
function ap(var_core_value_sigB45A) {
  var var_core_value_sig261A, var_core_value_sig21DD, var_core_value_sig7E2E;
  let var_core_value_sig713C = (var_core_value_sig261A = var_core_value_sigB45A.descriptor["sourceMeta"]) == null ? undefined : var_core_value_sig261A.floating;
  if (var_core_value_sig713C && typeof var_core_value_sig713C == "object" && typeof var_core_value_sig713C.layout == "string") return var_core_value_sig713C.layout;
  let var_core_value_sig0983 = (var_core_value_sig21DD = var_core_value_sigB45A.descriptor["sourceMeta"]) == null ? undefined : var_core_value_sig21DD.tab;
  return var_core_value_sigB45A.descriptor["entry"] === var_core_value_sigA392.SheetsSheetTab || var_core_value_sigB45A.descriptor["entry"] === var_core_value_sigA392.BasesTableListBlock || var_core_value_sigB45A.descriptor["entry"] === var_core_value_sigA392.SlidesPageListBlock || var_core_value_sig0983 && typeof var_core_value_sig0983 == "object" && var_core_value_sig0983.enabled ? "tab-peer" : ((var_core_value_sig7E2E = var_core_value_sigB45A.context) == null ? undefined : var_core_value_sig7E2E.layout) ?? "scroll-contained";
}
const op = 1600,
  sp = 1200,
  cp = 32767;
let lp = class extends var_core_value_sigCBDC {
  constructor(var_core_value_sig3C61, var_core_value_sigDC70, var_core_value_sigD10E, var_core_value_sigBB93, var_core_value_sig4F88, var_core_value_sig486C, var_core_value_sig717C, var_core_value_sig23AE, var_core_value_sigCB54, var_core_value_sigC7E11, var_core_value_sig6575, var_core_value_sigE901) {
    super(), this._embedModelService = var_core_value_sig3C61, this._anchorModelService = var_core_value_sigDC70, this._hostAdapterRegistry = var_core_value_sigD10E, this._restoreService = var_core_value_sigBB93, this._previewService = var_core_value_sig4F88, this._mountService = var_core_value_sig486C, this._contentSizeRegistry = var_core_value_sig717C, this._passiveViewportRegistry = var_core_value_sig23AE, this._commandService = var_core_value_sigCB54, this._univerInstanceService = var_core_value_sigC7E11, this._themeService = var_core_value_sig6575, this._imageIoService = var_core_value_sigE901, Y(this, "_resources", new Map());
  }
  async prepare(var_core_value_sigB7EC) {
    var var_core_value_sigB018, var_core_value_sigE7BE;
    let var_core_value_sigC88E = var_core_value_sigB7EC.unitType === var_core_value_sigC0F3.UNIVER_SLIDE ? this._univerInstanceService["getUnit"](var_core_value_sigB7EC.unitId, var_core_value_sigC0F3.UNIVER_SLIDE) : undefined,
      var_core_value_sigC4A6 = var_core_value_sigC88E == null || (var_core_value_sigB018 = var_core_value_sigC88E.pageManager["getActiveSlide"]()) == null ? undefined : var_core_value_sigB018.getId(),
      var_core_value_sig1FE3 = var_core_value_sigB7EC.unitType === var_core_value_sigC0F3.UNIVER_SHEET ? (var_core_value_sigE7BE = this._univerInstanceService["getUnit"](var_core_value_sigB7EC.unitId, var_core_value_sigC0F3.UNIVER_SHEET)) == null || (var_core_value_sigE7BE = var_core_value_sigE7BE.getActiveSheet(true)) == null ? undefined : var_core_value_sigE7BE.getSheetId() : undefined;
    try {
      this._clearHost(var_core_value_sigB7EC.unitId);
      let var_core_value_sig3D46 = this._embedModelService["getActiveDescriptors"](var_core_value_sigB7EC.unitId).filter(var_core_value_sigC368 => var_core_value_sigC368.hostType === var_core_value_sigB7EC.unitType);
      for (let var_core_value_sigAD561 of var_core_value_sig3D46) await this._activateSheetTabForPrint(var_core_value_sigAD561, var_core_value_sigB7EC), await this._activateSlidePageForPrint(var_core_value_sigAD561, var_core_value_sigB7EC), await this._prepareDescriptor(var_core_value_sigAD561, var_core_value_sigB7EC);
    } finally {
      var_core_value_sig1FE3 && this._commandService["syncExecuteCommand"](var_core_value_sigC4B0.id, {
        unitId: var_core_value_sigB7EC.unitId,
        subUnitId: var_core_value_sig1FE3
      }), var_core_value_sigC4A6 && (var_core_value_sigC88E == null || var_core_value_sigC88E.pageManager["setActiveSlide"](var_core_value_sigC4A6)), this._univerInstanceService["setCurrentUnitForType"](var_core_value_sigB7EC.unitId), this._univerInstanceService["focusUnit"](var_core_value_sigB7EC.unitId);
    }
  }
  getImage(var_core_value_sigF003, var_core_value_sigE146) {
    var var_core_value_sigF6D5;
    return (var_core_value_sigF6D5 = this.getResource(var_core_value_sigF003, var_core_value_sigE146)) == null ? undefined : var_core_value_sigF6D5.source;
  }
  getResource(var_core_value_sig3B2F, var_core_value_sigE558) {
    return this._resources["get"](this._getKey(var_core_value_sig3B2F, var_core_value_sigE558));
  }
  async _activateSheetTabForPrint(var_core_value_sigA99D, var_core_value_sigB23E) {
    var var_core_value_sigDA561;
    if (var_core_value_sigB23E.unitType !== var_core_value_sigC0F3.UNIVER_SHEET || var_core_value_sigA99D.entry !== var_core_value_sigA392.SheetsSheetTab || this._commandService["syncExecuteCommand"](var_core_value_sigC4B0.id, {
      unitId: var_core_value_sigA99D.hostUnitId,
      subUnitId: var_core_value_sigA99D.hostAnchorId
    }) === false) return;
    let var_core_value_sig8D74 = Date.now() + 5000;
    for (; !((var_core_value_sigDA561 = this._mountService["getSession"](var_core_value_sigA99D.embedId)) != null && var_core_value_sigDA561.context) && Date.now() < var_core_value_sig8D74;) await new Promise(var_core_value_sigDB4A => window.setTimeout(var_core_value_sigDB4A, 16));
  }
  async _activateSlidePageForPrint(var_core_value_sigC3E8, var_core_value_sig3FAF1) {
    var var_core_value_sigC00C;
    if (var_core_value_sig3FAF1.unitType !== var_core_value_sigC0F3.UNIVER_SLIDE || var_core_value_sigC3E8.entry !== var_core_value_sigA392.SlidesPageListBlock) return;
    this._hostAdapterRegistry["activateAnchor"]({
      descriptor: var_core_value_sigC3E8,
      embedId: var_core_value_sigC3E8.embedId,
      entry: var_core_value_sigC3E8.entry,
      hostAnchorId: var_core_value_sigC3E8.hostAnchorId,
      hostType: var_core_value_sigC3E8.hostType,
      hostUnitId: var_core_value_sigC3E8.hostUnitId
    });
    let var_core_value_sig080D = Date.now() + 5000;
    for (; !((var_core_value_sigC00C = this._mountService["getSession"](var_core_value_sigC3E8.embedId)) != null && var_core_value_sigC00C.context) && Date.now() < var_core_value_sig080D;) await new Promise(var_core_value_sig6418 => window.setTimeout(var_core_value_sig6418, 16));
  }
  async _prepareDescriptor(var_core_value_sigCDBC, var_core_value_sig0F75) {
    let var_core_value_sig4B7F = hp(this._previewService["getProvider"](var_core_value_sigCDBC.childType), var_core_value_sigCDBC);
    if (var_core_value_sig4B7F) try {
      var var_core_value_sig17D6, var_core_value_sig8915;
      let var_core_value_sigCC93 = await this._restoreService["materializeDescriptor"]({
        descriptor: var_core_value_sigCDBC
      });
      if (!var_core_value_sigCC93.childUnitId) {
        _p(var_core_value_sigCC93, "Embedded\x20unit\x20is\x20not\x20available\x20for\x20print\x20" + var_core_value_sigCC93.embedId);
        return;
      }
      let var_core_value_sig5964 = (var_core_value_sig17D6 = this._mountService["getSession"](var_core_value_sigCC93.embedId)) == null ? undefined : var_core_value_sig17D6.context,
        var_core_value_sig808B = await this._resolveViewState(var_core_value_sigCC93.embedId, var_core_value_sig4B7F, var_core_value_sig5964),
        var_core_value_sig2A26 = this._resolveSize(var_core_value_sigCC93, var_core_value_sig5964),
        var_core_value_sig1179 = await this._captureMountedCanvas(var_core_value_sigCC93, var_core_value_sig5964, var_core_value_sig2A26, var_core_value_sig0F75.dpr),
        var_core_value_sigEA921 = var_core_value_sig1179 ? undefined : await this._renderMountedScene(var_core_value_sigCC93, var_core_value_sig5964, var_core_value_sig2A26, var_core_value_sig0F75.dpr),
        var_core_value_sig8FD9 = var_core_value_sig1179 ?? (var_core_value_sigEA921 == null ? undefined : var_core_value_sigEA921.canvas) ?? (await var_core_value_sig4B7F.renderPreview({
          descriptor: var_core_value_sigCC93,
          childUnitId: var_core_value_sigCC93.childUnitId,
          childType: var_core_value_sigCC93.childType,
          width: var_core_value_sig2A26.width,
          height: var_core_value_sig2A26.height,
          dpr: var_core_value_sig0F75.dpr,
          viewState: var_core_value_sig808B,
          reason: "print",
          context: var_core_value_sig5964
        })),
        var_core_value_sig1AE5 = var_core_value_sig8FD9 instanceof HTMLCanvasElement ? var_core_value_sig8FD9 : undefined,
        var_core_value_sig7100 = this._toDataUrl(var_core_value_sig8FD9) ?? this._toDataUrl((var_core_value_sig8915 = this._previewService["getPreview"](var_core_value_sigCC93.embedId)) == null ? undefined : var_core_value_sig8915.image);
      if (!var_core_value_sig7100 && !var_core_value_sig1AE5) {
        _p(var_core_value_sigCC93, "Complete\x20print\x20resource\x20could\x20not\x20be\x20created\x20for\x20embed\x20" + var_core_value_sigCC93.embedId);
        return;
      }
      var_core_value_sig7100 && (await this._preloadImage(var_core_value_sig7100));
      let var_core_value_sigA19A = Ap(var_core_value_sig8FD9, var_core_value_sig2A26);
      this._resources["set"](this._getKey(var_core_value_sigCC93.hostUnitId, var_core_value_sigCC93.embedId), {
        canvas: var_core_value_sig1AE5,
        height: var_core_value_sigA19A.height,
        source: var_core_value_sig7100,
        verticalBreaks: var_core_value_sigEA921 == null ? undefined : var_core_value_sigEA921.verticalBreaks,
        width: var_core_value_sigA19A.width
      });
    } catch (var_core_value_sigD3F5) {
      var var_core_value_sigC88F;
      gp(var_core_value_sigCDBC, var_core_value_sigD3F5);
      let var_core_value_sig3082 = this._toDataUrl((var_core_value_sigC88F = this._previewService["getPreview"](var_core_value_sigCDBC.embedId)) == null ? undefined : var_core_value_sigC88F.image);
      var_core_value_sig3082 && (await this._preloadImage(var_core_value_sig3082), this._resources["set"](this._getKey(var_core_value_sigCDBC.hostUnitId, var_core_value_sigCDBC.embedId), {
        height: 1,
        source: var_core_value_sig3082,
        width: 1
      }));
    }
  }
  async _captureMountedCanvas(var_core_value_sig1AFA, var_core_value_sigBCF5, var_core_value_sig988A, var_core_value_sigFC02) {
    let var_core_value_sigF71C = var_core_value_sigBCF5 && this._resolveCompleteCaptureOptions(var_core_value_sig1AFA, var_core_value_sigBCF5, var_core_value_sigFC02);
    if (var_core_value_sig1AFA.childType !== var_core_value_sigC0F3.UNIVER_BOARD && (var_core_value_sig1AFA.childType !== var_core_value_sigC0F3.UNIVER_BASE || var_core_value_sigF71C) || !var_core_value_sigBCF5) return;
    let var_core_value_sigE6341 = $c(var_core_value_sigBCF5);
    try {
      await tl(var_core_value_sig1AFA.childType), await Qf(var_core_value_sigBCF5, true), var_core_value_sig1AFA.childType === var_core_value_sigC0F3.UNIVER_BASE && (await var_core_value_sig8ED7());
      let var_core_value_sigF5D1 = Qc(var_core_value_sigBCF5, true),
        var_core_value_sig8775 = Dp(var_core_value_sig988A.width, var_core_value_sig988A.height, Op(var_core_value_sigBCF5), var_core_value_sigFC02);
      return !var_core_value_sigF5D1 || !var_core_value_sig8775 ? undefined : (var_core_value_sig8775.context["drawImage"](var_core_value_sigF5D1, 0, 0, var_core_value_sig988A.width, var_core_value_sig988A.height), var_core_value_sig8775.canvas);
    } finally {
      var_core_value_sigE6341();
    }
  }
  async _renderMountedScene(var_core_value_sigF74F, var_core_value_sig89D7, var_core_value_sigF2B0, var_core_value_sigD77A) {
    if (!var_core_value_sig89D7 || !Mp(var_core_value_sigF74F.childType)) return;
    let var_core_value_sigF2C2 = this._resolveCompleteCaptureOptions(var_core_value_sigF74F, var_core_value_sig89D7, var_core_value_sigD77A);
    if (var_core_value_sigF2C2) {
      var var_core_value_sig2990;
      let var_core_value_sig481B = await this._renderCompleteScene(var_core_value_sigF74F, var_core_value_sig89D7, var_core_value_sigF2C2);
      return var_core_value_sig481B ? {
        canvas: var_core_value_sig481B,
        verticalBreaks: (var_core_value_sig2990 = var_core_value_sigF2C2.verticalBreaks) == null ? undefined : var_core_value_sig2990.map(var_core_value_sig1896 => var_core_value_sig1896 * var_core_value_sigF2C2.scale * var_core_value_sigF2C2.pixelRatio)
      } : undefined;
    }
    let var_core_value_sigD300 = $c(var_core_value_sig89D7);
    try {
      await tl(var_core_value_sigF74F.childType);
      let var_core_value_sig13D7 = await kp(var_core_value_sig89D7);
      if (!var_core_value_sig13D7) return;
      let var_core_value_sig90C0 = Dp(var_core_value_sigF2B0.width, var_core_value_sigF2B0.height, Op(var_core_value_sig89D7), var_core_value_sigD77A);
      return var_core_value_sig90C0 ? (wp(var_core_value_sig13D7, var_core_value_sig90C0.context, {
        height: var_core_value_sigF2B0.height,
        sourceLeft: 0,
        sourceTop: 0,
        targetLeft: 0,
        targetTop: 0,
        width: var_core_value_sigF2B0.width
      }, 1), {
        canvas: var_core_value_sig90C0.canvas
      }) : undefined;
    } finally {
      var_core_value_sigD300();
    }
  }
  async _renderCompleteScene(var_core_value_sig6F77, var_core_value_sigFA4B, var_core_value_sig2AB0) {
    let {
        bodyViewportWidth: var_core_value_sig853D,
        bodyViewportHeight: var_core_value_sigD1F0,
        contentBodyWidth: var_core_value_sig3D4E,
        contentBodyHeight: var_core_value_sig79C0,
        fullWidth: var_core_value_sig173D,
        fullHeight: var_core_value_sig6F1A,
        originalScrollX: var_core_value_sig1802,
        originalScroll: var_core_value_sigCFA7,
        scale: var_core_value_sig31C2,
        viewportProvider: var_core_value_sigA677
      } = var_core_value_sig2AB0,
      var_core_value_sigC015 = Dp(var_core_value_sig173D * var_core_value_sig31C2, var_core_value_sig6F1A * var_core_value_sig31C2, Op(var_core_value_sigFA4B), var_core_value_sig2AB0.pixelRatio),
      var_core_value_sigAEBC = Dp(var_core_value_sig2AB0.viewport["width"], var_core_value_sig2AB0.viewport["height"], Op(var_core_value_sigFA4B), var_core_value_sig2AB0.pixelRatio);
    if (!var_core_value_sigC015 || !var_core_value_sigAEBC) return;
    let var_core_value_sig366A = $c(var_core_value_sigFA4B);
    try {
      let var_core_value_sigF1B2 = await kp(var_core_value_sigFA4B);
      if (!var_core_value_sigF1B2) return;
      let var_core_value_sigC2BB = yp(var_core_value_sig3D4E, var_core_value_sig853D),
        var_core_value_sigD9DB = yp(var_core_value_sig79C0, var_core_value_sigD1F0);
      for (let var_core_value_sig0285 of var_core_value_sigC2BB) for (let var_core_value_sig1A0F of var_core_value_sigD9DB) bp(var_core_value_sigFA4B, var_core_value_sigA677, var_core_value_sig0285, var_core_value_sig1A0F), await tl(var_core_value_sig6F77.childType), await Qf(var_core_value_sigFA4B, true), var_core_value_sig6F77.childType === var_core_value_sigC0F3.UNIVER_BASE && (await var_core_value_sig8ED7()), var_core_value_sigAEBC.nativeContext["clearRect"](0, 0, var_core_value_sig2AB0.viewport["width"], var_core_value_sig2AB0.viewport["height"]), var_core_value_sigF1B2.makeDirty(true), var_core_value_sigF1B2.render(var_core_value_sigAEBC.context), xp(var_core_value_sigAEBC.canvas, var_core_value_sigC015.context, var_core_value_sig2AB0, var_core_value_sig0285, var_core_value_sig1A0F);
      return var_core_value_sigC015.canvas;
    } finally {
      try {
        bp(var_core_value_sigFA4B, var_core_value_sigA677, var_core_value_sig1802, var_core_value_sigCFA7), await Qf(var_core_value_sigFA4B, true);
      } finally {
        var_core_value_sig366A();
      }
    }
  }
  _resolveCompleteCaptureOptions(var_core_value_sigA89C, var_core_value_sigDD3E, var_core_value_sig182B) {
    var var_core_value_sig2A99, var_core_value_sig18A6, var_core_value_sigA98B, var_core_value_sig458C, var_core_value_sig8DEC;
    let var_core_value_sig522F = var_core_value_sigA89C.childUnitId,
      var_core_value_sigD718 = var_core_value_sigA89C.childType === var_core_value_sigC0F3.UNIVER_SHEET || var_core_value_sigA89C.childType === var_core_value_sigC0F3.UNIVER_BASE,
      var_core_value_sig41CF = var_core_value_sigA89C.hostType === var_core_value_sigC0F3.UNIVER_DOC && var_core_value_sigA89C.entry === var_core_value_sigA392.DocsCustomBlock && var_core_value_sigD718,
      var_core_value_sig1EFD = var_core_value_sigD718 && jp(var_core_value_sigA89C.entry);
    if (!var_core_value_sig522F || !var_core_value_sig41CF && !var_core_value_sig1EFD) return;
    let var_core_value_sig38BB = var_core_value_sigDD3E.container["getBoundingClientRect"]();
    if (!pp(var_core_value_sig38BB.width) || !pp(var_core_value_sig38BB.height)) return;
    let var_core_value_sig017C = this._measureContentSize(var_core_value_sigA89C, var_core_value_sigDD3E),
      var_core_value_sig44BC = var_core_value_sig1EFD ? this._resolveTabViewportSize(var_core_value_sigA89C, var_core_value_sig38BB) : var_core_value_sig38BB,
      var_core_value_sigAB7B = var_core_value_sig1EFD && pp(var_core_value_sig017C == null ? undefined : var_core_value_sig017C.width) ? Math.max(var_core_value_sig44BC.width, var_core_value_sig017C.width) : var_core_value_sig41CF ? vp(var_core_value_sigDD3E, var_core_value_sig38BB.width) : var_core_value_sig38BB.width,
      var_core_value_sig55EE = var_core_value_sig017C == null ? undefined : var_core_value_sig017C.height;
    if (!pp(var_core_value_sig55EE) || var_core_value_sig41CF && var_core_value_sig55EE <= var_core_value_sig38BB.height) return;
    let var_core_value_sigE9F6 = var_core_value_sig1EFD ? Np(var_core_value_sigAB7B, var_core_value_sig55EE, var_core_value_sig44BC.width >= var_core_value_sig44BC.height) : undefined,
      var_core_value_sig3BA9 = (var_core_value_sigE9F6 == null ? undefined : var_core_value_sigE9F6.height) ?? var_core_value_sig55EE,
      var_core_value_sigE230 = this._passiveViewportRegistry["get"](var_core_value_sigA89C.childType, var_core_value_sigDD3E.layout);
    if (!(var_core_value_sigE230 != null && var_core_value_sigE230.getVerticalScroll)) return;
    let var_core_value_sig5AC8 = var_core_value_sig1EFD ? Math.max(0, ((var_core_value_sig2A99 = var_core_value_sigE230.getStickyLeftWidth) == null ? undefined : var_core_value_sig2A99.call(var_core_value_sigE230, var_core_value_sigDD3E)) ?? 0) : 0,
      var_core_value_sigE492 = Math.max(0, ((var_core_value_sig18A6 = var_core_value_sigE230.getStickyHeaderHeight) == null ? undefined : var_core_value_sig18A6.call(var_core_value_sigE230, var_core_value_sigDD3E)) ?? 0),
      var_core_value_sig3465 = Math.max(0, ((var_core_value_sigA98B = var_core_value_sigE230.getStickyFooterHeight) == null ? undefined : var_core_value_sigA98B.call(var_core_value_sigE230, var_core_value_sigDD3E)) ?? 0),
      var_core_value_sig38DD = var_core_value_sig38BB.width - var_core_value_sig5AC8,
      var_core_value_sig89AE = var_core_value_sig38BB.height - var_core_value_sigE492 - var_core_value_sig3465,
      var_core_value_sig3A69 = var_core_value_sigAB7B - var_core_value_sig5AC8,
      var_core_value_sigD64C1 = var_core_value_sig3BA9 - var_core_value_sigE492 - var_core_value_sig3465;
    if (var_core_value_sig38DD <= 0 || var_core_value_sig89AE <= 0 || var_core_value_sig3A69 <= 0 || var_core_value_sigD64C1 <= 0) return;
    let var_core_value_sig3B0B = var_core_value_sigE9F6 ? var_core_value_sigE9F6.scale : Math.min(1, cp / var_core_value_sigAB7B, cp / var_core_value_sig3BA9);
    if (!pp(var_core_value_sig3B0B) || var_core_value_sigAB7B * var_core_value_sig3B0B > cp || var_core_value_sig3BA9 * var_core_value_sig3B0B > cp) return;
    let var_core_value_sig1E7C = var_core_value_sig41CF && var_core_value_sigA89C.childType === var_core_value_sigC0F3.UNIVER_SHEET ? Math.min(1, var_core_value_sigAB7B / var_core_value_sig38BB.width) : 1,
      var_core_value_sigD3C4 = Math.min(Math.max(1, var_core_value_sig182B), cp / (var_core_value_sigAB7B * var_core_value_sig3B0B), cp / (var_core_value_sig3BA9 * var_core_value_sig3B0B));
    return {
      bodyViewportWidth: var_core_value_sig38DD,
      bodyViewportHeight: var_core_value_sig89AE,
      contentBodyWidth: var_core_value_sig3A69,
      contentBodyHeight: var_core_value_sigD64C1,
      fullWidth: var_core_value_sigAB7B,
      fullHeight: var_core_value_sig3BA9,
      originalScrollX: ((var_core_value_sig458C = var_core_value_sigE230.getHorizontalScroll) == null ? undefined : var_core_value_sig458C.call(var_core_value_sigE230, var_core_value_sigDD3E)) ?? 0,
      originalScroll: var_core_value_sigE230.getVerticalScroll(var_core_value_sigDD3E) ?? 0,
      pixelRatio: var_core_value_sigD3C4,
      scale: var_core_value_sig3B0B,
      sceneSourceScale: var_core_value_sig1E7C,
      stickyLeftWidth: var_core_value_sig5AC8,
      stickyFooterHeight: var_core_value_sig3465,
      stickyHeaderHeight: var_core_value_sigE492,
      verticalBreaks: var_core_value_sig017C == null || (var_core_value_sig8DEC = var_core_value_sig017C.verticalBreaks) == null ? undefined : var_core_value_sig8DEC.filter(var_core_value_sigA363 => var_core_value_sigA363 <= var_core_value_sig3BA9),
      viewport: var_core_value_sig38BB,
      viewportProvider: var_core_value_sigE230
    };
  }
  _measureContentSize(var_core_value_sigBC8B, var_core_value_sigEE2E) {
    let var_core_value_sigCF06 = var_core_value_sigBC8B.childUnitId;
    if (!var_core_value_sigCF06) return;
    let var_core_value_sig6BCD1 = var_core_value_sigEE2E.container["getBoundingClientRect"](),
      var_core_value_sigC664 = this._univerInstanceService["getUnit"](var_core_value_sigCF06, var_core_value_sigBC8B.childType),
      var_core_value_sig1B7B = var_core_value_sigBC8B.hostType === var_core_value_sigC0F3.UNIVER_DOC && var_core_value_sigBC8B.childType === var_core_value_sigC0F3.UNIVER_SHEET;
    return this._contentSizeRegistry["measureContentSize"]({
      childType: var_core_value_sigBC8B.childType,
      childUnit: var_core_value_sigC664,
      childUnitId: var_core_value_sigCF06,
      injector: var_core_value_sigEE2E.runtimeScope["injector"] ?? var_core_value_sigEE2E.injector,
      viewportHeight: var_core_value_sig6BCD1.height,
      viewportWidth: var_core_value_sig1B7B ? vp(var_core_value_sigEE2E, var_core_value_sig6BCD1.width) : var_core_value_sig6BCD1.width
    });
  }
  async _resolveViewState(var_core_value_sig1F31, var_core_value_sigEA821, var_core_value_sig65BB) {
    var var_core_value_sig69B1;
    return var_core_value_sig65BB ? var_core_value_sigEA821.collectViewState(var_core_value_sig65BB) : (var_core_value_sig69B1 = this._previewService["getPreview"](var_core_value_sig1F31)) == null ? undefined : var_core_value_sig69B1.viewState;
  }
  _resolveSize(var_core_value_sigAEDE, var_core_value_sig139C) {
    var var_core_value_sigF2D6;
    if (var_core_value_sig139C && jp(var_core_value_sigAEDE.entry) && (var_core_value_sigAEDE.childType === var_core_value_sigC0F3.UNIVER_SHEET || var_core_value_sigAEDE.childType === var_core_value_sigC0F3.UNIVER_BASE)) {
      let var_core_value_sigFBA5 = this._measureContentSize(var_core_value_sigAEDE, var_core_value_sig139C);
      if (pp(var_core_value_sigFBA5 == null ? undefined : var_core_value_sigFBA5.width) && pp(var_core_value_sigFBA5 == null ? undefined : var_core_value_sigFBA5.height)) {
        let var_core_value_sig777D = this._resolveTabViewportSize(var_core_value_sigAEDE, var_core_value_sig139C.container["getBoundingClientRect"]()),
          var_core_value_sig3F4C = Math.max(var_core_value_sig777D.width, var_core_value_sigFBA5.width),
          var_core_value_sigD65A = Np(var_core_value_sig3F4C, var_core_value_sigFBA5.height, var_core_value_sig777D.width >= var_core_value_sig777D.height);
        return {
          width: Math.max(1, Math.round(var_core_value_sig3F4C * var_core_value_sigD65A.scale)),
          height: Math.max(1, Math.round(var_core_value_sigD65A.height * var_core_value_sigD65A.scale))
        };
      }
    }
    if (var_core_value_sigAEDE.entry === var_core_value_sigA392.SlidesPageListBlock) {
      let var_core_value_sigAC47 = this._univerInstanceService["getUnit"](var_core_value_sigAEDE.hostUnitId, var_core_value_sigC0F3.UNIVER_SLIDE),
        var_core_value_sigA06F = var_core_value_sigAC47 == null ? undefined : var_core_value_sigAC47.getSnapshot().defaultPageSize;
      if (pp(var_core_value_sigA06F == null ? undefined : var_core_value_sigA06F.width) && pp(var_core_value_sigA06F == null ? undefined : var_core_value_sigA06F.height)) return var_core_value_sigA06F;
    }
    let var_core_value_sig810E = var_core_value_sig139C == null ? undefined : var_core_value_sig139C.container["getBoundingClientRect"]().width,
      var_core_value_sigABB1 = var_core_value_sig139C == null ? undefined : var_core_value_sig139C.container["getBoundingClientRect"]().height;
    if (pp(var_core_value_sig810E) && pp(var_core_value_sigABB1)) return {
      width: var_core_value_sig810E,
      height: var_core_value_sigABB1
    };
    let var_core_value_sig3F701 = (var_core_value_sigF2D6 = this._anchorModelService["getAnchor"](var_core_value_sigAEDE.hostUnitId, var_core_value_sigAEDE.hostAnchorId)) == null ? undefined : var_core_value_sigF2D6.hostContext,
      var_core_value_sig9F91 = up(var_core_value_sig3F701 == null ? undefined : var_core_value_sig3F701.width),
      var_core_value_sigC9C8 = up(var_core_value_sig3F701 == null ? undefined : var_core_value_sig3F701.height);
    return var_core_value_sig9F91 && var_core_value_sigC9C8 ? {
      width: var_core_value_sig9F91,
      height: var_core_value_sigC9C8
    } : var_core_value_sigAEDE.entry === var_core_value_sigA392.DocsCustomBlock ? var_core_value_sigE103(var_core_value_sigAEDE.childType) : var_core_value_sigAEDE.entry === var_core_value_sigA392.SlidesFloatingObject ? {
      width: 560,
      height: 315
    } : {
      width: op,
      height: sp
    };
  }
  _resolveTabViewportSize(var_core_value_sigC444, var_core_value_sig4B40) {
    var var_core_value_sig9F6D;
    if (var_core_value_sigC444.entry !== var_core_value_sigA392.SlidesPageListBlock) return var_core_value_sig4B40;
    let var_core_value_sigE1A2 = this._univerInstanceService["getUnit"](var_core_value_sigC444.hostUnitId, var_core_value_sigC0F3.UNIVER_SLIDE),
      var_core_value_sig4767 = (var_core_value_sigE1A2 == null || (var_core_value_sig9F6D = var_core_value_sigE1A2.pageManager["getSlide"](var_core_value_sigC444.hostAnchorId)) == null ? undefined : var_core_value_sig9F6D.getData().pageSize) ?? (var_core_value_sigE1A2 == null ? undefined : var_core_value_sigE1A2.getSnapshot().defaultPageSize);
    return pp(var_core_value_sig4767 == null ? undefined : var_core_value_sig4767.width) && pp(var_core_value_sig4767.height) ? var_core_value_sig4767 : var_core_value_sig4B40;
  }
  _toDataUrl(var_core_value_sig2591) {
    if (typeof var_core_value_sig2591 == "string") return var_core_value_sig2591;
    if (!var_core_value_sig2591 || typeof document > "u") return;
    let var_core_value_sig7C12 = dp(this._themeService);
    if (var_core_value_sig2591 instanceof HTMLCanvasElement) {
      let var_core_value_sig770E = var_core_value_sig2591.getContext("2d");
      return var_core_value_sig770E && (var_core_value_sig770E.save(), var_core_value_sig770E.globalCompositeOperation = "destination-over", var_core_value_sig770E.fillStyle = var_core_value_sig7C12, var_core_value_sig770E.fillRect(0, 0, var_core_value_sig2591.width, var_core_value_sig2591.height), var_core_value_sig770E.restore()), Tp(var_core_value_sig2591);
    }
    let var_core_value_sig8EC51 = document.createElement("canvas");
    var_core_value_sig8EC51.width = var_core_value_sig2591.width, var_core_value_sig8EC51.height = var_core_value_sig2591.height;
    let var_core_value_sig4B1B = var_core_value_sig8EC51.getContext("2d");
    if (var_core_value_sig4B1B) return var_core_value_sig4B1B.fillStyle = var_core_value_sig7C12, var_core_value_sig4B1B.fillRect(0, 0, var_core_value_sig8EC51.width, var_core_value_sig8EC51.height), var_core_value_sig4B1B.drawImage(var_core_value_sig2591, 0, 0), Tp(var_core_value_sig8EC51);
  }
  _preloadImage(var_core_value_sig14C3) {
    return this._imageIoService["getImageSourceCache"](var_core_value_sig14C3, var_core_value_sigFF1F.URL) ? Promise.resolve() : new Promise(var_core_value_sig4654 => {
      let var_core_value_sigB26B = new Image();
      var_core_value_sigB26B.onload = () => {
        this._imageIoService["addImageSourceCache"](var_core_value_sig14C3, var_core_value_sigFF1F.URL, var_core_value_sigB26B), var_core_value_sig4654();
      }, var_core_value_sigB26B.onerror = () => var_core_value_sig4654(), var_core_value_sigB26B.src = var_core_value_sig14C3;
    });
  }
  _clearHost(var_core_value_sig95A8) {
    let var_core_value_sig3F90 = var_core_value_sig95A8 + "::";
    Array.from(this._resources["keys"]()).forEach(var_core_value_sig019B => {
      var_core_value_sig019B.startsWith(var_core_value_sig3F90) && this._resources["delete"](var_core_value_sig019B);
    });
  }
  _getKey(var_core_value_sigB489, var_core_value_sig76E7) {
    return var_core_value_sigB489 + "::" + var_core_value_sig76E7;
  }
  dispose() {
    this._resources["clear"](), super.dispose();
  }
};
lp = $([Q(0, var_core_value_sig205B(var_core_value_sig91F2)), Q(1, var_core_value_sig205B(var_core_value_sig9D18)), Q(2, var_core_value_sig205B(var_core_value_sig67C7)), Q(3, var_core_value_sig205B(ud)), Q(4, var_core_value_sig205B(cd)), Q(5, var_core_value_sig205B(cl)), Q(6, var_core_value_sig205B(Bf)), Q(7, var_core_value_sig205B(Cd)), Q(8, var_core_value_sigDFF6), Q(9, var_core_value_sig5DF8), Q(10, var_core_value_sig205B(var_core_value_sigA873)), Q(11, var_core_value_sigF8EE)], lp);
function up(var_core_value_sig6D58) {
  return pp(var_core_value_sig6D58) ? var_core_value_sig6D58 : undefined;
}
function dp(var_core_value_sig280D) {
  let var_core_value_sig964B = var_core_value_sig280D.getColorFromTheme("gray.0"),
    var_core_value_sigB26E = var_core_value_sig280D.getColorFromTheme("gray.1000");
  return fp(var_core_value_sigB26E) > fp(var_core_value_sig964B) ? var_core_value_sigB26E : var_core_value_sig964B;
}
function fp(var_core_value_sig81691) {
  let var_core_value_sigFD9A = /^#([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i.exec(var_core_value_sig81691);
  return var_core_value_sigFD9A ? Number.parseInt(var_core_value_sigFD9A[1], 16) + Number.parseInt(var_core_value_sigFD9A[2], 16) + Number.parseInt(var_core_value_sigFD9A[3], 16) : 0;
}
function pp(var_core_value_sigE0B5) {
  return typeof var_core_value_sigE0B5 == "number" && Number.isFinite(var_core_value_sigE0B5) && var_core_value_sigE0B5 > 0;
}
function mp(var_core_value_sigD847) {
  return var_core_value_sigD847.hostType === var_core_value_sigC0F3.UNIVER_DOC && var_core_value_sigD847.entry === var_core_value_sigA392.DocsCustomBlock && (var_core_value_sigD847.childType === var_core_value_sigC0F3.UNIVER_SHEET || var_core_value_sigD847.childType === var_core_value_sigC0F3.UNIVER_BASE);
}
function hp(var_core_value_sig5CF8, var_core_value_sig5743) {
  if (!var_core_value_sig5CF8 && mp(var_core_value_sig5743)) throw Error("Print preview provider is not available for embed " + var_core_value_sig5743.embedId);
  return var_core_value_sig5CF8;
}
function gp(var_core_value_sig5161, var_core_value_sig9583) {
  if (mp(var_core_value_sig5161)) throw var_core_value_sig9583;
}
function _p(var_core_value_sig713A, var_core_value_sigE7DD) {
  if (mp(var_core_value_sig713A)) throw Error(var_core_value_sigE7DD);
}
function vp(var_core_value_sigC248, var_core_value_sigA8641) {
  let var_core_value_sig70CD1 = var_core_value_sigC248.container["closest"]("[data-embed-docs-custom-block-sheet-like=\x22true\x22]"),
    var_core_value_sigA25D = var_core_value_sig70CD1 == null ? undefined : var_core_value_sig70CD1.getBoundingClientRect().width;
  return pp(var_core_value_sigA25D) ? Math.min(var_core_value_sigA8641, var_core_value_sigA25D) : var_core_value_sigA8641;
}
function yp(var_core_value_sigD49E, var_core_value_sig2C20) {
  let var_core_value_sigB994 = Math.max(0, var_core_value_sigD49E - var_core_value_sig2C20),
    var_core_value_sigA02B = [0];
  for (let var_core_value_sig7E7F = var_core_value_sig2C20; var_core_value_sig7E7F < var_core_value_sigB994; var_core_value_sig7E7F += var_core_value_sig2C20) var_core_value_sigA02B.push(var_core_value_sig7E7F);
  return var_core_value_sigB994 > var_core_value_sigA02B[var_core_value_sigA02B.length - 1] && var_core_value_sigA02B.push(var_core_value_sigB994), var_core_value_sigA02B;
}
function bp(var_core_value_sig01FE, var_core_value_sig9818, var_core_value_sig5382, var_core_value_sigF177) {
  var_core_value_sig9818.handleWheel({
    ...var_core_value_sig01FE,
    event: new WheelEvent("wheel"),
    stage: "stage2",
    source: "print-capture",
    viewportScrollX: var_core_value_sig5382,
    viewportScrollY: var_core_value_sigF177
  });
}
function xp(var_core_value_sig3E46, var_core_value_sigF094, var_core_value_sigE914, var_core_value_sigBBB6, var_core_value_sig0F58) {
  let {
      fullHeight: var_core_value_sigF2F8,
      scale: var_core_value_sig6407,
      stickyFooterHeight: var_core_value_sigB2D8,
      stickyHeaderHeight: var_core_value_sig3903,
      stickyLeftWidth: var_core_value_sig9193,
      viewport: var_core_value_sig788E
    } = var_core_value_sigE914,
    var_core_value_sigC5D3 = Sp(var_core_value_sigE914, var_core_value_sigBBB6, var_core_value_sig0F58);
  Ep(var_core_value_sig3E46, var_core_value_sigF094, {
    height: var_core_value_sigC5D3.height,
    sourceLeft: var_core_value_sigC5D3.sourceLeft,
    sourceTop: var_core_value_sigC5D3.sourceTop,
    targetLeft: var_core_value_sigC5D3.targetLeft,
    targetTop: var_core_value_sigC5D3.targetTop,
    width: var_core_value_sigC5D3.width
  }, var_core_value_sig6407, var_core_value_sigE914.sceneSourceScale, var_core_value_sigE914.pixelRatio), var_core_value_sig0F58 === 0 && var_core_value_sig3903 > 0 && Ep(var_core_value_sig3E46, var_core_value_sigF094, {
    height: var_core_value_sig3903,
    sourceLeft: var_core_value_sigC5D3.sourceLeft,
    sourceTop: 0,
    targetLeft: var_core_value_sigC5D3.targetLeft,
    targetTop: 0,
    width: var_core_value_sigC5D3.width
  }, var_core_value_sig6407, var_core_value_sigE914.sceneSourceScale, var_core_value_sigE914.pixelRatio), var_core_value_sigBBB6 === 0 && var_core_value_sig9193 > 0 && Ep(var_core_value_sig3E46, var_core_value_sigF094, {
    height: var_core_value_sigC5D3.height,
    sourceLeft: 0,
    sourceTop: var_core_value_sigC5D3.sourceTop,
    targetLeft: 0,
    targetTop: var_core_value_sigC5D3.targetTop,
    width: var_core_value_sig9193
  }, var_core_value_sig6407, var_core_value_sigE914.sceneSourceScale, var_core_value_sigE914.pixelRatio), var_core_value_sigBBB6 === 0 && var_core_value_sig0F58 === 0 && var_core_value_sig9193 > 0 && var_core_value_sig3903 > 0 && Ep(var_core_value_sig3E46, var_core_value_sigF094, {
    height: var_core_value_sig3903,
    sourceLeft: 0,
    sourceTop: 0,
    targetLeft: 0,
    targetTop: 0,
    width: var_core_value_sig9193
  }, var_core_value_sig6407, var_core_value_sigE914.sceneSourceScale, var_core_value_sigE914.pixelRatio), var_core_value_sig0F58 === 0 && var_core_value_sigB2D8 > 0 && (Ep(var_core_value_sig3E46, var_core_value_sigF094, {
    height: var_core_value_sigB2D8,
    sourceLeft: var_core_value_sigC5D3.sourceLeft,
    sourceTop: var_core_value_sig788E.height - var_core_value_sigB2D8,
    targetLeft: var_core_value_sigC5D3.targetLeft,
    targetTop: var_core_value_sigF2F8 - var_core_value_sigB2D8,
    width: var_core_value_sigC5D3.width
  }, var_core_value_sig6407, var_core_value_sigE914.sceneSourceScale, var_core_value_sigE914.pixelRatio), var_core_value_sigBBB6 === 0 && var_core_value_sig9193 > 0 && Ep(var_core_value_sig3E46, var_core_value_sigF094, {
    height: var_core_value_sigB2D8,
    sourceLeft: 0,
    sourceTop: var_core_value_sig788E.height - var_core_value_sigB2D8,
    targetLeft: 0,
    targetTop: var_core_value_sigF2F8 - var_core_value_sigB2D8,
    width: var_core_value_sig9193
  }, var_core_value_sig6407, var_core_value_sigE914.sceneSourceScale, var_core_value_sigE914.pixelRatio));
}
function Sp(var_core_value_sig8DC1, var_core_value_sig4013, var_core_value_sig73F7) {
  let var_core_value_sig6087 = Cp(var_core_value_sig4013, var_core_value_sig8DC1.bodyViewportWidth, var_core_value_sig8DC1.contentBodyWidth),
    var_core_value_sig24A4 = Cp(var_core_value_sig73F7, var_core_value_sig8DC1.bodyViewportHeight, var_core_value_sig8DC1.contentBodyHeight);
  return {
    height: var_core_value_sig24A4.size,
    sourceLeft: var_core_value_sig8DC1.stickyLeftWidth + var_core_value_sig6087.sourceOffset,
    sourceTop: var_core_value_sig8DC1.stickyHeaderHeight + var_core_value_sig24A4.sourceOffset,
    targetLeft: var_core_value_sig8DC1.stickyLeftWidth + var_core_value_sig6087.target,
    targetTop: var_core_value_sig8DC1.stickyHeaderHeight + var_core_value_sig24A4.target,
    width: var_core_value_sig6087.size
  };
}
function Cp(var_core_value_sigC40D, var_core_value_sig2EC7, var_core_value_sig4C6E) {
  let var_core_value_sig00FB = var_core_value_sigC40D % var_core_value_sig2EC7,
    var_core_value_sig49C2 = var_core_value_sigC40D > 0 && var_core_value_sig00FB > 0 ? var_core_value_sig2EC7 - var_core_value_sig00FB : 0,
    var_core_value_sigFEF1 = var_core_value_sigC40D + var_core_value_sig49C2;
  return {
    size: Math.max(0, Math.min(var_core_value_sig2EC7 - var_core_value_sig49C2, var_core_value_sig4C6E - var_core_value_sigFEF1)),
    sourceOffset: var_core_value_sig49C2,
    target: var_core_value_sigFEF1
  };
}
function wp(var_core_value_sigF93A, var_core_value_sig1575, var_core_value_sig3A97, var_core_value_sigD765) {
  var_core_value_sig3A97.width <= 0 || var_core_value_sig3A97.height <= 0 || (var_core_value_sig1575.save(), var_core_value_sig1575.scale(var_core_value_sigD765, var_core_value_sigD765), var_core_value_sig1575.beginPath(), var_core_value_sig1575.rect(var_core_value_sig3A97.targetLeft, var_core_value_sig3A97.targetTop, var_core_value_sig3A97.width, var_core_value_sig3A97.height), var_core_value_sig1575.clip(), var_core_value_sig1575.translate(var_core_value_sig3A97.targetLeft - var_core_value_sig3A97.sourceLeft, var_core_value_sig3A97.targetTop - var_core_value_sig3A97.sourceTop), var_core_value_sigF93A.makeDirty(true), var_core_value_sigF93A.render(var_core_value_sig1575), var_core_value_sig1575.restore());
}
function Tp(var_core_value_sig024C) {
  try {
    return var_core_value_sig024C.toDataURL("image/png");
  } catch {
    return;
  }
}
function Ep(var_core_value_sig83B2, var_core_value_sig3FE7, var_core_value_sigF9F1, var_core_value_sigC137, var_core_value_sigE0AC = 1, var_core_value_sig768A = 1) {
  var_core_value_sigF9F1.width <= 0 || var_core_value_sigF9F1.height <= 0 || (var_core_value_sig3FE7.save(), var_core_value_sig3FE7.scale(var_core_value_sigC137, var_core_value_sigC137), var_core_value_sig3FE7.drawImage(var_core_value_sig83B2, var_core_value_sigF9F1.sourceLeft * var_core_value_sigE0AC * var_core_value_sig768A, var_core_value_sigF9F1.sourceTop * var_core_value_sigE0AC * var_core_value_sig768A, var_core_value_sigF9F1.width * var_core_value_sigE0AC * var_core_value_sig768A, var_core_value_sigF9F1.height * var_core_value_sigE0AC * var_core_value_sig768A, var_core_value_sigF9F1.targetLeft, var_core_value_sigF9F1.targetTop, var_core_value_sigF9F1.width, var_core_value_sigF9F1.height), var_core_value_sig3FE7.restore());
}
function Dp(var_core_value_sig6D9D, var_core_value_sig73E5, var_core_value_sigDCEA, var_core_value_sig8936 = 1) {
  if (!pp(var_core_value_sig6D9D) || !pp(var_core_value_sig73E5)) return;
  let var_core_value_sigB6AF = document.createElement("canvas");
  var_core_value_sigB6AF.width = Math.max(1, Math.ceil(var_core_value_sig6D9D * var_core_value_sig8936)), var_core_value_sigB6AF.height = Math.max(1, Math.ceil(var_core_value_sig73E5 * var_core_value_sig8936));
  let var_core_value_sig88BA = var_core_value_sigB6AF.getContext("2d");
  if (!var_core_value_sig88BA) return;
  let var_core_value_sig1B7C = new var_core_value_sig4FDA(var_core_value_sig88BA, {
    canvasColorService: var_core_value_sigDCEA
  });
  return var_core_value_sig8936 !== 1 && var_core_value_sig1B7C.scale(var_core_value_sig8936, var_core_value_sig8936), {
    canvas: var_core_value_sigB6AF,
    context: var_core_value_sig1B7C,
    nativeContext: var_core_value_sig88BA
  };
}
function Op(var_core_value_sig7EBF) {
  try {
    return (var_core_value_sig7EBF.runtimeScope["injector"] ?? var_core_value_sig7EBF.injector).get(var_core_value_sigBE9D);
  } catch {
    return;
  }
}
async function kp(var_core_value_sig1F7B) {
  await Qf(var_core_value_sig1F7B, true);
  try {
    var var_core_value_sig7F3C;
    return ((var_core_value_sig7F3C = (var_core_value_sig1F7B.runtimeScope["injector"] ?? var_core_value_sig1F7B.injector).get(var_core_value_sigE391).getRenderUnitById(var_core_value_sig1F7B.childUnitId)) == null ? undefined : var_core_value_sig7F3C.scene) ?? undefined;
  } catch {
    return;
  }
}
function Ap(var_core_value_sig47F8, var_core_value_sigB2F9) {
  return var_core_value_sig47F8 == null || typeof var_core_value_sig47F8 == "string" ? var_core_value_sigB2F9 : {
    width: var_core_value_sig47F8.width,
    height: var_core_value_sig47F8.height
  };
}
function jp(var_core_value_sig0873) {
  return var_core_value_sig0873 === var_core_value_sigA392.SheetsSheetTab || var_core_value_sig0873 === var_core_value_sigA392.BasesTableListBlock || var_core_value_sig0873 === var_core_value_sigA392.SlidesPageListBlock;
}
function Mp(var_core_value_sig5B8B) {
  return var_core_value_sig5B8B === var_core_value_sigC0F3.UNIVER_SHEET || var_core_value_sig5B8B === var_core_value_sigC0F3.UNIVER_BASE || var_core_value_sig5B8B === var_core_value_sigC0F3.UNIVER_BOARD || var_core_value_sig5B8B === var_core_value_sigC0F3.UNIVER_SLIDE;
}
function Np(var_core_value_sig7D371, var_core_value_sigA77D, var_core_value_sigC8D0) {
  let var_core_value_sig5D02 = var_core_value_sigC8D0 ? op : 1200,
    var_core_value_sigC936 = var_core_value_sigC8D0 ? sp : 1600,
    var_core_value_sig72C0 = Math.min(1, var_core_value_sig5D02 / var_core_value_sig7D371);
  return {
    height: Math.min(var_core_value_sigA77D, var_core_value_sigC936 / var_core_value_sig72C0),
    scale: var_core_value_sig72C0
  };
}
const Pp = "UniverEmbedPrintImage",
  Fp = "UniverEmbedPrintPlaceholder";
function Ip(var_core_value_sigBEAE) {
  let var_core_value_sigC1DE = var_core_value_sigC85E(lp),
    var_core_value_sig90E7 = Td(var_core_value_sigBEAE.data),
    var_core_value_sig76C1 = var_core_value_sig90E7 ? var_core_value_sigC1DE.getImage(var_core_value_sig90E7.hostUnitId ?? var_core_value_sigBEAE.unitId, var_core_value_sig90E7.embedId) : undefined;
  return var_core_value_sig76C1 ? var_core_value_sig6F03("img", {
    alt: "",
    src: var_core_value_sig76C1,
    style: {
      display: "block",
      width: "100%",
      height: "auto"
    }
  }) : null;
}
function Lp() {
  return null;
}
function Rp(var_core_value_sigCF5A, var_core_value_sig77FC = 1, var_core_value_sig4D7C = 1) {
  let var_core_value_sigAE54 = var_core_value_sigCF5A.deltaX / (Math.abs(var_core_value_sig77FC) || 1),
    var_core_value_sig44B7 = var_core_value_sigCF5A.deltaY / (Math.abs(var_core_value_sig4D7C) || 1);
  if (var_core_value_sigCF5A.shiftKey) var_core_value_sigAE54 = (var_core_value_sigCF5A.deltaY || var_core_value_sigCF5A.deltaX) * 3 / (Math.abs(var_core_value_sig77FC) || 1), var_core_value_sig44B7 = 0;else {
    let var_core_value_sig7947 = Math.abs(var_core_value_sigAE54),
      var_core_value_sig7FEC = Math.abs(var_core_value_sig44B7);
    var_core_value_sig7FEC >= var_core_value_sig7947 * 2 ? var_core_value_sigAE54 = 0 : var_core_value_sig7947 >= var_core_value_sig7FEC * 2 && (var_core_value_sig44B7 = 0);
  }
  return {
    offsetX: var_core_value_sigAE54,
    offsetY: var_core_value_sig44B7
  };
}
function zp(var_core_value_sigD285, var_core_value_sig0C83, var_core_value_sig5003) {
  if (!var_core_value_sig0C83) return false;
  let {
    offsetX: var_core_value_sigB8D1,
    offsetY: var_core_value_sig1EB0
  } = Bp(var_core_value_sigD285, var_core_value_sig0C83, var_core_value_sig5003);
  if (!var_core_value_sigB8D1 && !var_core_value_sig1EB0) return false;
  let var_core_value_sig2607 = var_core_value_sig0C83.viewportScrollX ?? 0,
    var_core_value_sig2808 = var_core_value_sig0C83.viewportScrollY ?? 0;
  if (var_core_value_sigD285.source !== "wheel" && var_core_value_sig0C83.scrollToViewportPos && (var_core_value_sigD285.viewportScrollX != null || var_core_value_sigD285.viewportScrollY != null)) var_core_value_sig0C83.scrollToViewportPos({
    viewportScrollX: var_core_value_sigD285.viewportScrollX ?? var_core_value_sig2607,
    viewportScrollY: var_core_value_sigD285.viewportScrollY ?? var_core_value_sig2808
  });else {
    if (var_core_value_sig0C83.scrollByViewportDeltaVal) var_core_value_sig0C83.scrollByViewportDeltaVal({
      viewportScrollX: var_core_value_sigB8D1,
      viewportScrollY: var_core_value_sig1EB0
    });else return false;
  }
  let var_core_value_sig5B96 = (var_core_value_sig0C83.viewportScrollX ?? 0) !== var_core_value_sig2607 || (var_core_value_sig0C83.viewportScrollY ?? 0) !== var_core_value_sig2808;
  if (var_core_value_sig5B96) {
    var var_core_value_sigF2DD;
    var_core_value_sig5003 == null || (var_core_value_sigF2DD = var_core_value_sig5003.makeDirty) == null || var_core_value_sigF2DD.call(var_core_value_sig5003, true);
  }
  return var_core_value_sig5B96;
}
function Bp(var_core_value_sig8B711, var_core_value_sigE74F, var_core_value_sig8FBA) {
  return var_core_value_sig8B711.source !== "wheel" && (var_core_value_sig8B711.viewportScrollX != null || var_core_value_sig8B711.viewportScrollY != null) ? {
    offsetX: (var_core_value_sig8B711.viewportScrollX ?? var_core_value_sigE74F.viewportScrollX ?? 0) - (var_core_value_sigE74F.viewportScrollX ?? 0),
    offsetY: (var_core_value_sig8B711.viewportScrollY ?? var_core_value_sigE74F.viewportScrollY ?? 0) - (var_core_value_sigE74F.viewportScrollY ?? 0)
  } : Rp(var_core_value_sig8B711.event, var_core_value_sig8FBA == null ? undefined : var_core_value_sig8FBA.scaleX, var_core_value_sig8FBA == null ? undefined : var_core_value_sig8FBA.scaleY);
}
function Vp(var_core_value_sigE304) {
  return var_core_value_sigE304 + var_core_value_sig920F.DEFAULT_TOTAL_SIZE;
}
function Hp(var_core_value_sig96A6) {
  return var_core_value_sig96A6.contentHeight + var_core_value_sig96A6.floatingMenuInsetTop;
}
function Up(var_core_value_sig3653) {
  var var_core_value_sigC01A;
  let {
      data: var_core_value_sig597C,
      customBlockRenderViewport: var_core_value_sigB870
    } = var_core_value_sig3653,
    var_core_value_sigF8CA = var_core_value_sigC85E(var_core_value_sigDFF6),
    var_core_value_sig76BA1 = var_core_value_sigC85E(var_core_value_sig5DF8),
    var_core_value_sig10701 = var_core_value_sigC85E(var_core_value_sigE391),
    var_core_value_sigAE97 = Td(var_core_value_sig597C),
    var_core_value_sig578F = var_core_value_sigAE97 == null ? undefined : var_core_value_sigAE97.hostUnitId,
    var_core_value_sigF7CF = var_core_value_sig578F ?? ((var_core_value_sigC01A = var_core_value_sig76BA1.getCurrentUnitOfType(var_core_value_sigC0F3.UNIVER_DOC)) == null ? undefined : var_core_value_sigC01A.getUnitId()),
    var_core_value_sig544C = var_core_value_sig17A6(null),
    [var_core_value_sig866C, var_core_value_sigA82B] = var_core_value_sigC4B6(() => var_core_value_sig40DD()),
    var_core_value_sigC806 = var_core_value_sig8104(var_core_value_sigAE97 == null ? undefined : var_core_value_sigAE97.childType),
    var_core_value_sig9A39 = var_core_value_sigB870 == null ? undefined : var_core_value_sigB870.bleedLeft,
    var_core_value_sig69CA = var_core_value_sigB870 == null ? undefined : var_core_value_sigB870.bleedWidth,
    var_core_value_sigAF9F = var_core_value_sigB870 == null ? undefined : var_core_value_sigB870.contentWidth,
    var_core_value_sig6DAA = Gp(var_core_value_sigB870 == null ? undefined : var_core_value_sigB870.viewScale),
    var_core_value_sigDD11 = var_core_value_sig17A6(var_core_value_sig6DAA),
    var_core_value_sigD59B = var_core_value_sig17A6(undefined),
    var_core_value_sigE90C = var_core_value_sig17A6(undefined);
  var_core_value_sigB0BB(() => {
    if (!var_core_value_sig578F) return;
    let var_core_value_sig73D2 = [],
      var_core_value_sig6BDA = () => {
        let var_core_value_sigC6BC = var_core_value_sig76BA1.getUnit(var_core_value_sig578F, var_core_value_sigC0F3.UNIVER_DOC),
          var_core_value_sig8EC2 = var_core_value_sigC6BC == null ? undefined : var_core_value_sigC6BC.zoomRatio;
        typeof var_core_value_sig8EC2 == "number" && var_core_value_sigF8CA.syncExecuteCommand(var_core_value_sigED61.id, {
          unitId: var_core_value_sig578F,
          zoomRatio: var_core_value_sig8EC2
        });
      },
      var_core_value_sig3A251 = var_core_value_sigA8C3 => {
        let var_core_value_sig52761 = requestAnimationFrame(var_core_value_sigA8C3);
        var_core_value_sig73D2.push(() => cancelAnimationFrame(var_core_value_sig52761));
      },
      var_core_value_sigCBAA = var_core_value_sig031B => {
        let var_core_value_sig9DC0 = setTimeout(var_core_value_sig6BDA, var_core_value_sig031B);
        var_core_value_sig73D2.push(() => clearTimeout(var_core_value_sig9DC0));
      };
    return var_core_value_sig6BDA(), var_core_value_sig3A251(var_core_value_sig6BDA), var_core_value_sig3A251(() => var_core_value_sig3A251(var_core_value_sig6BDA)), var_core_value_sigCBAA(120), var_core_value_sigCBAA(500), () => {
      var_core_value_sig73D2.forEach(var_core_value_sig5A13 => var_core_value_sig5A13());
    };
  }, [var_core_value_sigF8CA, var_core_value_sig578F, var_core_value_sig76BA1]), var_core_value_sig9E27(() => {
    let var_core_value_sigC0961 = var_core_value_sig544C.current;
    if (!var_core_value_sigC0961 || !var_core_value_sigC806 || typeof window > "u") return;
    let var_core_value_sig6140,
      var_core_value_sigDD84 = () => {
        var_core_value_sig6140 = undefined;
        let var_core_value_sig95F0 = var_core_value_sigC0961.getBoundingClientRect(),
          var_core_value_sig9CCB = Xp(var_core_value_sigAF9F, () => Qp(var_core_value_sigC0961, var_core_value_sig95F0.width / var_core_value_sig6DAA)),
          var_core_value_sigE718 = var_core_value_sigB2A2(var_core_value_sigC0961, var_core_value_sig9CCB, {
            authoritativeContentWidth: Number.isFinite(var_core_value_sigAF9F) && (var_core_value_sigAF9F ?? 0) > 0,
            bleedLeft: var_core_value_sig9A39,
            bleedWidth: var_core_value_sig69CA,
            viewScale: var_core_value_sig6DAA
          });
        var_core_value_sigA82B(var_core_value_sigF593 => Math.abs(var_core_value_sigF593.bleedLeft - var_core_value_sigE718.bleedLeft) < 0.5 && Math.abs(var_core_value_sigF593.bleedRight - var_core_value_sigE718.bleedRight) < 0.5 && Math.abs(var_core_value_sigF593.bleedWidth - var_core_value_sigE718.bleedWidth) < 0.5 && Math.abs(var_core_value_sigF593.contentWidth - var_core_value_sigE718.contentWidth) < 0.5 && Math.abs(var_core_value_sigF593.virtualWidth - var_core_value_sigE718.virtualWidth) < 0.5 ? var_core_value_sigF593 : var_core_value_sigE718);
      },
      var_core_value_sig7BA5 = () => {
        var_core_value_sig6140 == null && var_core_value_sigC0961.dataset["embedDocsCustomBlockZooming"] !== "true" && (var_core_value_sig6140 = window.requestAnimationFrame(var_core_value_sigDD84));
      },
      var_core_value_sig543F = var_core_value_sigAEC8 => {
        Zp(var_core_value_sigC0961, var_core_value_sigAEC8.target) && var_core_value_sig7BA5();
      };
    var_core_value_sigDD84();
    let var_core_value_sigBF30 = new ResizeObserver(var_core_value_sig7BA5);
    return var_core_value_sigBF30.observe(var_core_value_sigC0961), window.addEventListener("resize", var_core_value_sig7BA5), window.addEventListener("scroll", var_core_value_sig543F, true), () => {
      var_core_value_sig6140 != null && window.cancelAnimationFrame(var_core_value_sig6140), var_core_value_sigBF30.disconnect(), window.removeEventListener("resize", var_core_value_sig7BA5), window.removeEventListener("scroll", var_core_value_sig543F, true);
    };
  }, [var_core_value_sig9A39, var_core_value_sig69CA, var_core_value_sigAF9F, var_core_value_sigC806, var_core_value_sig6DAA]);
  let var_core_value_sig49D9 = var_core_value_sigC806 ? qp(var_core_value_sigB870 == null ? undefined : var_core_value_sigB870.contentHeight) : var_core_value_sig9A99(var_core_value_sigB870 == null ? undefined : var_core_value_sigB870.contentHeight, 1),
    var_core_value_sig2AFC = var_core_value_sigC806 ? 52 : 0,
    var_core_value_sig886D = Jp({
      contentHeight: var_core_value_sig49D9,
      viewportHeight: var_core_value_sigB870 == null ? undefined : var_core_value_sigB870.viewportHeight
    }),
    var_core_value_sig1FDD = Hp({
      contentHeight: var_core_value_sig49D9,
      floatingMenuInsetTop: var_core_value_sig2AFC
    }),
    var_core_value_sigEF03 = Yp({
      contentWidth: var_core_value_sigAF9F,
      pageContentWidth: var_core_value_sigB870 == null ? undefined : var_core_value_sigB870.pageContentWidth
    }),
    var_core_value_sig9FD5 = var_core_value_sigC806 ? {
      height: var_core_value_sig1FDD * var_core_value_sig6DAA,
      minHeight: var_core_value_sig1FDD * var_core_value_sig6DAA,
      width: var_core_value_sigEF03 == null ? undefined : var_core_value_sigEF03 * var_core_value_sig6DAA
    } : undefined;
  var_core_value_sig9E27(() => {
    var var_core_value_sigAA0E, var_core_value_sig3747;
    var_core_value_sigDD11.current = var_core_value_sig6DAA, (var_core_value_sigAA0E = var_core_value_sig544C.current) == null || var_core_value_sigAA0E.style["removeProperty"]("overflow"), (var_core_value_sig3747 = var_core_value_sig544C.current) == null || delete var_core_value_sig3747.dataset["embedDocsCustomBlockZooming"];
  }, [var_core_value_sig6DAA]), var_core_value_sigB0BB(() => {
    if (!var_core_value_sigC806 || !var_core_value_sigF7CF) return;
    let var_core_value_sig9B6A1 = var_core_value_sig544C.current,
      var_core_value_sig7BFA = () => {
        var_core_value_sigE90C.current != null && (window.clearTimeout(var_core_value_sigE90C.current), var_core_value_sigE90C.current = undefined), var_core_value_sigD59B.current != null && (window.cancelAnimationFrame(var_core_value_sigD59B.current), var_core_value_sigD59B.current = undefined);
      },
      var_core_value_sig09FA = var_core_value_sigF8CA.onCommandExecuted(var_core_value_sigB977 => {
        if (var_core_value_sigB977.id !== var_core_value_sigED61.id) return;
        let var_core_value_sig2949 = var_core_value_sigB977.params;
        if ((var_core_value_sig2949 == null ? undefined : var_core_value_sig2949.unitId) !== var_core_value_sigF7CF) return;
        let var_core_value_sig308A = var_core_value_sig544C.current,
          var_core_value_sig528D = Gp(var_core_value_sig2949.zoomRatio);
        !var_core_value_sig308A || var_core_value_sig528D === var_core_value_sigDD11.current || (Wp(var_core_value_sig308A, {
          fromScale: var_core_value_sigDD11.current,
          outerHeight: var_core_value_sig1FDD,
          toScale: var_core_value_sig528D
        }), var_core_value_sigDD11.current = var_core_value_sig528D, var_core_value_sig7BFA(), var_core_value_sigE90C.current = window.setTimeout(() => {
          var_core_value_sigE90C.current = undefined, var_core_value_sigD59B.current = window.requestAnimationFrame(() => {
            var_core_value_sigD59B.current = undefined, var_core_value_sig308A.style["removeProperty"]("overflow"), delete var_core_value_sig308A.dataset["embedDocsCustomBlockZooming"];
          });
        }, 120));
      });
    return () => {
      var_core_value_sig09FA.dispose(), var_core_value_sig7BFA(), var_core_value_sig9B6A1 == null || var_core_value_sig9B6A1.style["removeProperty"]("overflow"), var_core_value_sig9B6A1 && delete var_core_value_sig9B6A1.dataset["embedDocsCustomBlockZooming"];
    };
  }, [var_core_value_sigF8CA, var_core_value_sig1FDD, var_core_value_sigF7CF, var_core_value_sigC806]);
  let var_core_value_sig2C6B = var_core_value_sigF517((var_core_value_sig6881, var_core_value_sigAB94) => {
      var var_core_value_sigEE05;
      let var_core_value_sig0F0E = (var_core_value_sigEE05 = var_core_value_sig10701.getRenderUnitById(var_core_value_sigAB94.hostUnitId)) == null ? undefined : var_core_value_sigEE05.scene;
      return zp({
        ...var_core_value_sigAB94,
        event: var_core_value_sig6881,
        source: "wheel",
        stage: "stage2"
      }, var_core_value_sig0F0E == null ? undefined : var_core_value_sig0F0E.getViewport(var_core_value_sigF8ED.VIEW_MAIN), var_core_value_sig0F0E);
    }, [var_core_value_sig10701]),
    var_core_value_sigC969 = var_core_value_sigF517(var_core_value_sig3A40 => {
      Kp(var_core_value_sig10701, var_core_value_sigF7CF, var_core_value_sig3A40);
    }, [var_core_value_sig10701, var_core_value_sigF7CF]);
  return var_core_value_sig6F03("div", {
    ref: var_core_value_sig544C,
    className: "univer-relative univer-size-full univer-min-h-0 univer-min-w-0 univer-overflow-visible [&[data-embed-docs-custom-block-sheet-like=true]]:univer-pointer-events-none [&[data-embed-docs-custom-block-sheet-like=true]]:[contain:layout_style]",
    "data-u-comp": "embed-docs-custom-block",
    "data-embed-docs-custom-block": "true",
    "data-embed-docs-custom-block-child-type": (var_core_value_sigAE97 == null ? undefined : var_core_value_sigAE97.childType) == null ? undefined : String(var_core_value_sigAE97.childType),
    "data-embed-docs-custom-block-sheet-like": var_core_value_sigC806 ? "true" : undefined,
    style: var_core_value_sig9FD5,
    children: var_core_value_sig6F03(Lf, {
      ...var_core_value_sig3653,
      docsCustomBlockLayout: var_core_value_sigC806 ? {
        bleedLeft: var_core_value_sig866C.bleedLeft,
        bleedWidth: var_core_value_sig866C.bleedWidth,
        contentHeight: var_core_value_sig49D9,
        contentWidth: var_core_value_sig866C.contentWidth,
        floatingMenuInsetTop: var_core_value_sig2AFC,
        pageContentWidth: (var_core_value_sigB870 == null ? undefined : var_core_value_sigB870.pageContentWidth) ?? var_core_value_sig866C.contentWidth,
        sheetLike: true,
        viewScale: var_core_value_sig6DAA,
        visibleCanvasHeight: var_core_value_sigB870 == null ? undefined : var_core_value_sigB870.visibleCanvasHeight,
        viewportHeight: var_core_value_sig886D
      } : {
        floatingMenuInsetTop: var_core_value_sig2AFC,
        sheetLike: false
      },
      interactionFlow: "doc-block",
      onHostWheel: var_core_value_sigC806 ? var_core_value_sig2C6B : undefined,
      onRuntimeStageEnter: var_core_value_sigC969,
      syncHostVerticalScroll: var_core_value_sigC806
    })
  });
}
function Wp(var_core_value_sigF87E, var_core_value_sigDA9F) {
  let var_core_value_sigFCA4 = Gp(var_core_value_sigDA9F.fromScale),
    var_core_value_sig95B7 = Gp(var_core_value_sigDA9F.toScale),
    var_core_value_sig4700 = var_core_value_sig95B7 / var_core_value_sigFCA4,
    var_core_value_sig7B76 = var_core_value_sigDA9F.outerHeight * var_core_value_sig95B7;
  var_core_value_sigF87E.style["height"] = var_core_value_sig7B76 + "px", var_core_value_sigF87E.style["minHeight"] = var_core_value_sig7B76 + "px", var_core_value_sigF87E.style["overflow"] = "hidden", var_core_value_sigF87E.dataset["embedDocsCustomBlockZooming"] = "true";
  let var_core_value_sigA674 = var_core_value_sigF87E.querySelector('[data-embed-float-content="true"]');
  var_core_value_sigA674 && ["top", "left"].forEach(var_core_value_sig2377 => {
    let var_core_value_sig4EEF = Number.parseFloat(var_core_value_sigA674.style[var_core_value_sig2377]);
    Number.isFinite(var_core_value_sig4EEF) && (var_core_value_sigA674.style[var_core_value_sig2377] = var_core_value_sig4EEF * var_core_value_sig4700 + "px");
  });
  let var_core_value_sigD3FA = var_core_value_sigF87E.querySelector('[data-embed-float-live="true"]');
  var_core_value_sigD3FA && (var_core_value_sigD3FA.style["transform"] = var_core_value_sig95B7 === 1 ? "" : "scale(" + var_core_value_sig95B7 + ")");
}
function Gp(var_core_value_sig3567) {
  return typeof var_core_value_sig3567 == "number" && Number.isFinite(var_core_value_sig3567) && var_core_value_sig3567 > 0 ? var_core_value_sig3567 : 1;
}
function Kp(var_core_value_sigCF7F, var_core_value_sig0932, var_core_value_sig281A) {
  var var_core_value_sig97D1;
  var_core_value_sig281A !== "stage2" || !var_core_value_sig0932 || (var_core_value_sig97D1 = var_core_value_sigCF7F.getRenderUnitById(var_core_value_sig0932)) == null || (var_core_value_sig97D1 = var_core_value_sig97D1.with(var_core_value_sig753F)) == null || var_core_value_sig97D1.blur();
}
function qp(var_core_value_sig408A) {
  return var_core_value_sig9A99(var_core_value_sig408A, 480);
}
function Jp(var_core_value_sig76941) {
  return var_core_value_sig9A99(var_core_value_sig76941.viewportHeight, var_core_value_sig76941.contentHeight);
}
function Yp(var_core_value_sigEB2D) {
  let {
    contentWidth: var_core_value_sigCCD4,
    pageContentWidth: var_core_value_sig084C
  } = var_core_value_sigEB2D;
  if (!(typeof var_core_value_sigCCD4 != "number" || !Number.isFinite(var_core_value_sigCCD4) || var_core_value_sigCCD4 <= 0)) return typeof var_core_value_sig084C == "number" && Number.isFinite(var_core_value_sig084C) && var_core_value_sig084C > 0 ? Math.min(var_core_value_sigCCD4, var_core_value_sig084C) : var_core_value_sigCCD4;
}
function Xp(var_core_value_sig9C10, var_core_value_sig1717) {
  return Number.isFinite(var_core_value_sig9C10) && (var_core_value_sig9C10 ?? 0) > 0 ? var_core_value_sig9C10 : var_core_value_sig6792(undefined, var_core_value_sig1717());
}
function Zp(var_core_value_sig7A5F, var_core_value_sig57621) {
  return !(var_core_value_sig57621 instanceof Node && var_core_value_sig7A5F.contains(var_core_value_sig57621));
}
function Qp(var_core_value_sig05D1, var_core_value_sigB65E) {
  let var_core_value_sig51E8 = var_core_value_sig05D1.querySelector('[data-u-comp="embed-float-dom-live-content"]'),
    var_core_value_sigE4F51 = var_core_value_sig05D1.querySelector('[data-u-comp="embed-float-dom-live-canvas"]'),
    var_core_value_sig1B69 = [Math.max(1, var_core_value_sigB65E)];
  return $p(var_core_value_sig51E8, var_core_value_sig1B69), $p(var_core_value_sigE4F51, var_core_value_sig1B69), Math.max(...var_core_value_sig1B69.filter(var_core_value_sigC58E => Number.isFinite(var_core_value_sigC58E) && var_core_value_sigC58E > 0));
}
function $p(var_core_value_sigBD8E, var_core_value_sig75D8) {
  if (var_core_value_sigBD8E) {
    var_core_value_sig75D8.push(var_core_value_sigBD8E.scrollWidth, var_core_value_sigBD8E.offsetWidth, var_core_value_sigBD8E.getBoundingClientRect().width);
    for (let var_core_value_sigA309 of Array.from(var_core_value_sigBD8E.children)) {
      if (!(var_core_value_sigA309 instanceof HTMLElement)) continue;
      let var_core_value_sig3607 = var_core_value_sigA309.getBoundingClientRect(),
        var_core_value_sigB512 = var_core_value_sigBD8E.getBoundingClientRect();
      var_core_value_sig75D8.push(var_core_value_sigA309.scrollWidth, var_core_value_sigA309.offsetWidth, var_core_value_sig3607.right - var_core_value_sigB512.left);
    }
  }
}
let em = class extends var_core_value_sigCBDC {
  constructor(var_core_value_sig9063) {
    super(), this._componentManager = var_core_value_sig9063, this._registerComponents();
  }
  _registerComponents() {
    this.disposeWithMe(this._componentManager["register"](var_core_value_sig5AB2, Up)), this.disposeWithMe(this._componentManager["register"](var_core_value_sig09CC, Lf)), this.disposeWithMe(this._componentManager["register"](Pp, Ip)), this.disposeWithMe(this._componentManager["register"](Fp, Lp));
  }
};
em = $([Q(0, var_core_value_sig205B(var_core_value_sig5862))], em);
let tm = class {
  constructor(var_core_value_sig99CE, var_core_value_sigFB15) {
    this._injector = var_core_value_sig99CE, this._passiveWheelHandlerRegistry = var_core_value_sigFB15, this._passiveWheelHandlerRegistry["register"]({
      childType: var_core_value_sigC0F3.UNIVER_DOC,
      handleWheel: var_core_value_sig9E20 => this._injector["has"](var_core_value_sig8753) ? this._injector["get"](var_core_value_sig8753).handleWheel({
        childUnitId: var_core_value_sig9E20.childUnitId,
        event: var_core_value_sig9E20.event,
        source: var_core_value_sig9E20.source
      }) : false,
      order: 100
    });
  }
};
tm = $([Q(0, var_core_value_sig205B(var_core_value_sig8A66)), Q(1, var_core_value_sig205B(wd))], tm);
const nm = [var_core_value_sigC0F3.UNIVER_DOC, var_core_value_sigC0F3.UNIVER_SHEET, var_core_value_sigC0F3.UNIVER_BASE, var_core_value_sigC0F3.UNIVER_SLIDE];
let rm = class extends var_core_value_sigCBDC {
  constructor(var_core_value_sig9AF5, var_core_value_sigCD2E) {
    super(), this._univerInstanceService = var_core_value_sig9AF5, this._anchorModelService = var_core_value_sigCD2E, nm.forEach(var_core_value_sig26BB => {
      this.disposeWithMe(this._univerInstanceService["getTypeOfUnitDisposed$"](var_core_value_sig26BB).subscribe(var_core_value_sigF2E6 => {
        this._anchorModelService["clearUnit"](var_core_value_sigF2E6.getUnitId());
      }));
    });
  }
};
rm = $([Q(0, var_core_value_sig5DF8), Q(1, var_core_value_sig205B(var_core_value_sig9D18))], rm);
let im = class extends var_core_value_sigCBDC {
  constructor(var_core_value_sig60CE, var_core_value_sigFA1B) {
    super(), this._injector = var_core_value_sig60CE, this._runtimeFocusCoordinator = var_core_value_sigFA1B, Y(this, "_suspendedSheetNote", null), Y(this, "_suppressedSheetNoteHostUnitId", null), this.disposeWithMe(this._runtimeFocusCoordinator["runtimeSessionChanged$"].subscribe(() => {
      this._syncHostPopupVisibility();
    }));
  }
  _syncHostPopupVisibility() {
    let var_core_value_sig5FEF = this._runtimeFocusCoordinator["resolveActiveChildSessionRuntimeScope"](),
      var_core_value_sigD48C = (var_core_value_sig5FEF == null ? undefined : var_core_value_sig5FEF.hostUnitId) ?? null;
    this._hideDocParagraphMenu(var_core_value_sigD48C), this._clearHostDrawingSelection(var_core_value_sigD48C);
    let var_core_value_sig41E9 = (var_core_value_sig5FEF == null ? undefined : var_core_value_sig5FEF.sessionMode) === "child-fullscreen" ? var_core_value_sig5FEF.hostUnitId ?? null : null;
    this._syncPersistentSheetNotes(var_core_value_sig41E9), this._syncActiveSheetNote(var_core_value_sig41E9);
  }
  _hideDocParagraphMenu(var_core_value_sig3807) {
    if (!var_core_value_sig3807 || !this._injector["has"](var_core_value_sigE391)) return;
    let var_core_value_sig5409 = this._injector["get"](var_core_value_sigE391).getRenderUnitById(var_core_value_sig3807);
    (var_core_value_sig5409 == null ? undefined : var_core_value_sig5409.type) === var_core_value_sigC0F3.UNIVER_DOC && var_core_value_sig5409.with(var_core_value_sig2939).hideParagraphMenu(true);
  }
  _clearHostDrawingSelection(var_core_value_sig680F) {
    var var_core_value_sig2E36;
    !var_core_value_sig680F || !this._injector["has"](var_core_value_sigE391) || (var_core_value_sig2E36 = this._injector["get"](var_core_value_sigE391).getRenderUnitById(var_core_value_sig680F)) == null || (var_core_value_sig2E36 = var_core_value_sig2E36.scene["getTransformer"]()) == null || var_core_value_sig2E36.clearSelectedObjects();
  }
  _syncPersistentSheetNotes(var_core_value_sigBA94) {
    if (var_core_value_sigBA94 !== this._suppressedSheetNoteHostUnitId) {
      let var_core_value_sig19B4 = this._injector["has"](var_core_value_sigA086) ? this._injector["get"](var_core_value_sigA086) : null;
      this._suppressedSheetNoteHostUnitId && (var_core_value_sig19B4 == null || var_core_value_sig19B4.setPopupSuppressed(this._suppressedSheetNoteHostUnitId, false)), var_core_value_sigBA94 && (var_core_value_sig19B4 == null || var_core_value_sig19B4.setPopupSuppressed(var_core_value_sigBA94, true)), this._suppressedSheetNoteHostUnitId = var_core_value_sigBA94;
    }
  }
  _syncActiveSheetNote(var_core_value_sigA847) {
    var var_core_value_sig1AB4;
    if (!this._injector["has"](var_core_value_sig7167)) return;
    let var_core_value_sig7272 = this._injector["get"](var_core_value_sig7167),
      var_core_value_sig885F = var_core_value_sig7272.activePopup;
    if (var_core_value_sigA847 != null && var_core_value_sigA847 === ((var_core_value_sig885F == null ? undefined : var_core_value_sig885F.unitId) ?? ((var_core_value_sig1AB4 = this._suspendedSheetNote) == null ? undefined : var_core_value_sig1AB4.unitId))) {
      var_core_value_sig885F && !var_core_value_sig885F.temp && (this._suspendedSheetNote = var_core_value_sig885F), var_core_value_sig7272.hidePopup(true);
      return;
    }
    if (!this._suspendedSheetNote) return;
    let var_core_value_sigB7C7 = this._suspendedSheetNote;
    this._suspendedSheetNote = null, var_core_value_sig885F || var_core_value_sig7272.showPopup(var_core_value_sigB7C7);
  }
};
im = $([Q(0, var_core_value_sig205B(var_core_value_sig8A66)), Q(1, var_core_value_sig205B(X))], im);
let am = class extends var_core_value_sigCBDC {
  constructor(var_core_value_sig6934, var_core_value_sig2842, var_core_value_sigA5A3, var_core_value_sig590F, var_core_value_sigECA2) {
    super(), this._menuOverrideService = var_core_value_sig6934, this._blockRegistry = var_core_value_sig2842, this._ribbonOverrideService = var_core_value_sigA5A3, this._injector = var_core_value_sigECA2, Y(this, "_current", null), Y(this, "_currentOverride", null), this.disposeWithMe(var_core_value_sig590F.registerDisabledUIParts([var_core_value_sigFC3C.TOOLBAR], this._menuOverrideService["override$"].pipe(var_core_value_sig5B63(var_core_value_sig218A => {
      var var_core_value_sig14CB;
      return var_core_value_sig218A != null && ((var_core_value_sig14CB = this._blockRegistry["get"](var_core_value_sig218A.childType)) == null ? undefined : var_core_value_sig14CB.hostChromeMode) === "none";
    }), var_core_value_sig111B()))), this.disposeWithMe(var_core_value_sig9BBC(this._menuOverrideService["override$"].subscribe(var_core_value_sigFDEE => {
      var var_core_value_sigA676, var_core_value_sigC27E;
      if (!var_core_value_sigFDEE) {
        this._current ? (this._current["dispose"](), this._current = null) : this._ribbonOverrideService["clear"](), this._currentOverride = null;
        return;
      }
      if (om(this._currentOverride, var_core_value_sigFDEE)) return;
      let var_core_value_sigA70D = this._blockRegistry["get"](var_core_value_sigFDEE.childType),
        var_core_value_sigCE10 = var_core_value_sigA70D == null || (var_core_value_sigA676 = var_core_value_sigA70D.createRibbonOverride) == null ? undefined : var_core_value_sigA676.call(var_core_value_sigA70D, {
          childType: var_core_value_sigFDEE.childType,
          childUnitId: var_core_value_sigFDEE.childUnitId,
          injector: this._injector,
          embedId: var_core_value_sigFDEE.embedId,
          hostUnitId: var_core_value_sigFDEE.hostUnitId,
          entry: var_core_value_sigFDEE.entry
        });
      if (!var_core_value_sigCE10) {
        var var_core_value_sigA3861;
        (var_core_value_sigA3861 = this._current) == null || var_core_value_sigA3861.dispose(), this._current = null, this._currentOverride = null, this._ribbonOverrideService["clear"]();
        return;
      }
      this._ribbonOverrideService["activate"]({
        id: var_core_value_sigFDEE.embedId,
        ribbonService: var_core_value_sigCE10.ribbonService,
        injector: var_core_value_sigCE10.injector,
        portalContainer: var_core_value_sigCE10.portalContainer ?? var_core_value_sigFDEE.portalContainer,
        placeholderTitle: var_core_value_sigCE10.placeholderTitle,
        hideToolbar: var_core_value_sigCE10.hideToolbar
      }), (var_core_value_sigC27E = this._current) == null || var_core_value_sigC27E.dispose(), this._current = null, this._currentOverride = null;
      let var_core_value_sigCD82 = this._registerRibbonOwnership(var_core_value_sigFDEE);
      this._currentOverride = var_core_value_sigFDEE, this._current = var_core_value_sig9BBC(() => {
        var var_core_value_sig34C8;
        var_core_value_sigCD82 == null || var_core_value_sigCD82.dispose(), this._ribbonOverrideService["clear"](var_core_value_sigFDEE.embedId), (var_core_value_sig34C8 = var_core_value_sigCE10.disposable) == null || var_core_value_sig34C8.dispose(), this._currentOverride = null;
      });
    })));
  }
  _registerRibbonOwnership(var_core_value_sigCAC4) {
    var var_core_value_sig2017;
    let var_core_value_sig49A4 = ((var_core_value_sig2017 = var_core_value_sigCAC4.portalContainer) == null ? undefined : var_core_value_sig2017.ownerDocument) ?? (typeof document > "u" ? undefined : document),
      var_core_value_sigA166 = var_core_value_sig49A4 == null ? undefined : var_core_value_sig49A4.querySelector("[data-u-comp=\x22headerbar\x22]");
    if (!var_core_value_sigA166) return;
    let var_core_value_sigEB84 = [];
    return this._injector["has"](Es) && var_core_value_sigEB84.push(this._injector["get"](Es).registerRoot(var_core_value_sigCAC4.embedId, var_core_value_sigA166, var_core_value_sigCAC4.childUnitId)), this._injector["has"](X) && var_core_value_sigEB84.push(this._injector["get"](X).registerElement({
      embedId: var_core_value_sigCAC4.embedId,
      role: "floating-menu",
      element: var_core_value_sigA166
    })), var_core_value_sigEB84.length ? var_core_value_sig9BBC(() => [...var_core_value_sigEB84].reverse().forEach(var_core_value_sigB744 => var_core_value_sigB744.dispose())) : undefined;
  }
  dispose() {
    var var_core_value_sig3B17;
    (var_core_value_sig3B17 = this._current) == null || var_core_value_sig3B17.dispose(), this._current = null, this._currentOverride = null, super.dispose();
  }
};
am = $([Q(0, var_core_value_sig205B(Ss)), Q(1, var_core_value_sig205B(bs)), Q(2, var_core_value_sig205B(var_core_value_sigAC4D)), Q(3, var_core_value_sig205B(var_core_value_sigCA1C)), Q(4, var_core_value_sig205B(var_core_value_sig8A66))], am);
function om(var_core_value_sig0009, var_core_value_sig771F) {
  return var_core_value_sig0009 != null && var_core_value_sig0009.hostUnitId === var_core_value_sig771F.hostUnitId && var_core_value_sig0009.embedId === var_core_value_sig771F.embedId && var_core_value_sig0009.childUnitId === var_core_value_sig771F.childUnitId && var_core_value_sig0009.childType === var_core_value_sig771F.childType && var_core_value_sig0009.entry === var_core_value_sig771F.entry && var_core_value_sig0009.reason === var_core_value_sig771F.reason && var_core_value_sig0009.portalContainer === var_core_value_sig771F.portalContainer && var_core_value_sig0009.hideHostFxBar === var_core_value_sig771F.hideHostFxBar && var_core_value_sig0009.lockHostRibbon === var_core_value_sig771F.lockHostRibbon;
}
let sm = class extends var_core_value_sigCBDC {
  constructor(var_core_value_sig78681, var_core_value_sig9AFE, var_core_value_sig244E) {
    super(), this._commandService = var_core_value_sig78681, this._embedModelService = var_core_value_sig9AFE, this._dialogService = var_core_value_sig244E, Y(this, "_dialogs", []);
    let var_core_value_sigD4E9 = this._dialogService["getDialogs$"]().subscribe(var_core_value_sig44DD => {
      this._dialogs = var_core_value_sig44DD;
    });
    this.disposeWithMe(var_core_value_sig9BBC(() => var_core_value_sigD4E9.unsubscribe())), this.disposeWithMe(this._commandService["onCommandExecuted"](var_core_value_sig96FA => {
      var var_core_value_sigAB68;
      if (var_core_value_sig96FA.id !== var_core_value_sig4A4D.id) return;
      let var_core_value_sig040A = var_core_value_sig96FA.params;
      if (typeof (var_core_value_sig040A == null ? undefined : var_core_value_sig040A.embedId) != "string" || typeof var_core_value_sig040A.unitId != "string") return;
      let var_core_value_sig2AE0 = (var_core_value_sigAB68 = this._embedModelService["getDescriptor"](var_core_value_sig040A.unitId, var_core_value_sig040A.embedId)) == null ? undefined : var_core_value_sigAB68.childUnitId;
      var_core_value_sig2AE0 && this._dialogs["forEach"](var_core_value_sigEAE2 => {
        cm(var_core_value_sigEAE2) === var_core_value_sig2AE0 && this._dialogService["close"](var_core_value_sigEAE2.id);
      });
    }));
  }
  dispose() {
    super.dispose(), this._dialogs = [];
  }
};
sm = $([Q(0, var_core_value_sigDFF6), Q(1, var_core_value_sig205B(var_core_value_sig91F2)), Q(2, var_core_value_sig205B(var_core_value_sigA33B))], sm);
function cm(var_core_value_sig9898) {
  var var_core_value_sigC324, var_core_value_sig16E1;
  let var_core_value_sigB359 = (var_core_value_sigC324 = var_core_value_sig9898.children) == null ? undefined : var_core_value_sigC324.label;
  if (!var_core_value_sigB359 || typeof var_core_value_sigB359 == "string") return;
  let var_core_value_sigF836 = (var_core_value_sig16E1 = var_core_value_sigB359.props) == null ? undefined : var_core_value_sig16E1.unitId;
  return typeof var_core_value_sigF836 == "string" ? var_core_value_sigF836 : undefined;
}
let lm = class extends var_core_value_sigCBDC {
  constructor(var_core_value_sig969F, var_core_value_sig6C52, var_core_value_sig3A441, var_core_value_sig9631, var_core_value_sig8407, var_core_value_sig635F) {
    super(), this._embedPrintService = var_core_value_sig969F, this._printPreparationService = var_core_value_sig6C52, this._injector = var_core_value_sig3A441, this._univerInstanceService = var_core_value_sig9631, this._slidePrintDrawingTransformService = var_core_value_sig8407, this._boardPrintCompositionService = var_core_value_sig635F, Y(this, "_docPrintRegistered", false), Y(this, "_sheetPrintRegistered", false), Y(this, "_docPrintLayouts", new Map()), this._registerPrintPreparation(), this._registerSlidePrinting(), this._registerBoardPrinting();
  }
  async prepare(var_core_value_sig79E0) {
    if (var_core_value_sig79E0.unitType === var_core_value_sigC0F3.UNIVER_DOC ? (this._registerDocPrinting(), this._docPrintLayouts["delete"](var_core_value_sig79E0.unitId)) : var_core_value_sig79E0.unitType === var_core_value_sigC0F3.UNIVER_SHEET && this._registerSheetPrinting(), await this._embedPrintService["prepare"](var_core_value_sig79E0), var_core_value_sig79E0.unitType === var_core_value_sigC0F3.UNIVER_DOC) {
      let var_core_value_sigC349 = this._univerInstanceService["getUnit"](var_core_value_sig79E0.unitId, var_core_value_sigC0F3.UNIVER_DOC),
        var_core_value_sig9D96 = var_core_value_sigC349 == null ? undefined : var_core_value_sigC349.getSnapshot();
      if (var_core_value_sigC349 && var_core_value_sig9D96) {
        let var_core_value_sigE68A = var_core_value_sigC349.getDocumentStyle().documentFlavor === var_core_value_sig89F6.MODERN,
          var_core_value_sig3E68 = var_core_value_sigE68A ? undefined : this._resolveDocPageMetrics(var_core_value_sig79E0.unitId),
          var_core_value_sigF4C5 = gm(var_core_value_sig9D96, var_core_value_sig79E0.unitId, this._embedPrintService, var_core_value_sig3E68, var_core_value_sigE68A || !!var_core_value_sig3E68, var_core_value_sigE68A);
        this._docPrintLayouts["set"](var_core_value_sig79E0.unitId, var_core_value_sigF4C5), var_core_value_sig79E0.contentHeight = Math.max(var_core_value_sig79E0.contentHeight ?? 0, var_core_value_sigF4C5.contentHeight), var_core_value_sigE68A && (var_core_value_sig79E0.contentHeightAdjustment = (var_core_value_sig79E0.contentHeightAdjustment ?? 0) + var_core_value_sigF4C5.contentHeightAdjustment), var_core_value_sigE68A && var_core_value_sigF4C5.pageBreakRanges["length"] && (var_core_value_sig79E0.pageBreakRanges ??= []).push(...var_core_value_sigF4C5.pageBreakRanges);
      }
    }
  }
  _registerPrintPreparation() {
    this.disposeWithMe(this._printPreparationService["registerContribution"](this));
  }
  _resolveDocPageMetrics(var_core_value_sig1E28) {
    var var_core_value_sigEEC3, var_core_value_sigFAEC;
    let var_core_value_sig1282 = this._injector["get"](var_core_value_sigE391).getRenderUnitById(var_core_value_sig1E28),
      var_core_value_sig80D0 = var_core_value_sig1282 == null || (var_core_value_sigEEC3 = var_core_value_sig1282.with(var_core_value_sig57A0).getSkeleton().getSkeletonData()) == null ? undefined : var_core_value_sigEEC3.pages[0],
      var_core_value_sig6CEE = (var_core_value_sigFAEC = this._univerInstanceService["getUnit"](var_core_value_sig1E28, var_core_value_sigC0F3.UNIVER_DOC)) == null || (var_core_value_sigFAEC = var_core_value_sigFAEC.getDocumentStyle().pageSize) == null ? undefined : var_core_value_sigFAEC.height,
      var_core_value_sig4B271 = var_core_value_sig1282 == null ? undefined : var_core_value_sig1282.mainComponent;
    if (!(var_core_value_sig4B271 instanceof var_core_value_sig1070)) return;
    let var_core_value_sig153F = var_core_value_sig4B271.getOffsetConfig().docsTop ?? 0,
      var_core_value_sigC847 = var_core_value_sig80D0 && Tm(var_core_value_sig80D0.pageHeight) ? var_core_value_sig80D0.pageHeight : var_core_value_sig6CEE;
    return Tm(var_core_value_sigC847) ? {
      firstTop: var_core_value_sig153F,
      pageStride: var_core_value_sigC847 + var_core_value_sig153F
    } : undefined;
  }
  _registerDocPrinting() {
    if (this._docPrintRegistered) return;
    let var_core_value_sig114E = this._injector["get"](var_core_value_sig0374);
    var_core_value_sig114E.registerPrintComponent(var_core_value_sig5AB2, Fp), this.disposeWithMe(var_core_value_sig114E.interceptor["intercept"](var_core_value_sig114E.interceptor["getInterceptPoints"]().PRINTING_DOM_COLLECT, {
      handler: (var_core_value_sig2776, var_core_value_sig6FB2, var_core_value_sigEB431) => {
        var var_core_value_sig4186;
        if (!var_core_value_sig2776) return var_core_value_sigEB431(var_core_value_sig2776);
        let var_core_value_sigF963 = var_core_value_sigEB431(var_core_value_sig2776),
          var_core_value_sigB608 = (var_core_value_sig4186 = this._univerInstanceService["getUnit"](var_core_value_sig6FB2.unitId, var_core_value_sigC0F3.UNIVER_DOC)) == null ? undefined : var_core_value_sig4186.getSnapshot();
        return var_core_value_sigB608 && fm(var_core_value_sig6FB2.root["parentElement"] ?? var_core_value_sig6FB2.root, var_core_value_sigB608, var_core_value_sig6FB2.unitId, var_core_value_sig6FB2.offset, var_core_value_sig6FB2.bound, this._embedPrintService, var_core_value_sig2776, this._docPrintLayouts["get"](var_core_value_sig6FB2.unitId)), var_core_value_sigF963;
      }
    })), this._docPrintRegistered = true;
  }
  _registerSheetPrinting() {
    if (this._sheetPrintRegistered) return;
    let var_core_value_sig88EA = this._injector["get"](var_core_value_sig945C);
    var_core_value_sig88EA.registerPrintComponent(var_core_value_sig09CC, Pp), this.disposeWithMe(var_core_value_sig88EA.interceptor["intercept"](var_core_value_sig88EA.interceptor["getInterceptPoints"]().PRINTING_RANGE, {
      handler: (var_core_value_sigF866, var_core_value_sig5EFB, var_core_value_sig3A85) => var_core_value_sig3A85(this._getOriginalSheetTabData(var_core_value_sig5EFB.unitId, var_core_value_sig5EFB.subUnitId) ? {
        startRow: 0,
        endRow: 0,
        startColumn: 0,
        endColumn: 0
      } : var_core_value_sigF866)
    })), this.disposeWithMe(var_core_value_sig88EA.interceptor["intercept"](var_core_value_sig88EA.interceptor["getInterceptPoints"]().PRINTING_DOM_COLLECT, {
      handler: (var_core_value_sig2682, var_core_value_sig4BB5, var_core_value_sig67091) => {
        if (!var_core_value_sig2682) return var_core_value_sig67091(var_core_value_sig2682);
        let var_core_value_sig52CA = this._getOriginalSheetTabData(var_core_value_sig4BB5.unitId, var_core_value_sig4BB5.subUnitId) ?? var_core_value_sigE750(var_core_value_sig4BB5.worksheet["getSnapshot"]()),
          var_core_value_sigC030 = var_core_value_sig52CA && this._embedPrintService["getResource"](var_core_value_sig4BB5.unitId, var_core_value_sig52CA.embedId);
        if (!(var_core_value_sigC030 != null && var_core_value_sigC030.source)) return var_core_value_sig67091(var_core_value_sig2682);
        let var_core_value_sig88F6 = Em(var_core_value_sig4BB5.root, var_core_value_sigC030.source, var_core_value_sig2682, {
          height: var_core_value_sig4BB5.engine["getCanvas"]().getHeight(),
          offsetX: var_core_value_sig4BB5.offset["offsetX"],
          offsetY: var_core_value_sig4BB5.offset["offsetY"],
          width: var_core_value_sig4BB5.engine["getCanvas"]().getWidth()
        });
        return var_core_value_sig88F6.complete || var_core_value_sig4BB5.resourceCollector["add"](Dm(var_core_value_sig88F6)), var_core_value_sig67091(var_core_value_sig2682);
      }
    })), this._sheetPrintRegistered = true;
  }
  _getOriginalSheetTabData(var_core_value_sig4E97, var_core_value_sigBE44) {
    var var_core_value_sigE675;
    let var_core_value_sig4346 = (var_core_value_sigE675 = this._univerInstanceService["getUnit"](var_core_value_sig4E97, var_core_value_sigC0F3.UNIVER_SHEET)) == null ? undefined : var_core_value_sigE675.getSheetBySheetId(var_core_value_sigBE44);
    return var_core_value_sig4346 && var_core_value_sigE750(var_core_value_sig4346.getSnapshot());
  }
  _registerSlidePrinting() {
    this.disposeWithMe(this._slidePrintDrawingTransformService["register"]((var_core_value_sig37DB, var_core_value_sig5542) => Om(var_core_value_sig37DB, var_core_value_sig5542, this._embedPrintService)));
  }
  _registerBoardPrinting() {
    this.disposeWithMe(this._boardPrintCompositionService["register"]((var_core_value_sigE0A9, var_core_value_sigA73E) => um(var_core_value_sigE0A9, var_core_value_sigA73E, this._embedPrintService)));
  }
  dispose() {
    this._docPrintLayouts["clear"](), super.dispose();
  }
};
lm = $([Q(0, var_core_value_sig205B(lp)), Q(1, var_core_value_sigBDB6), Q(2, var_core_value_sig205B(var_core_value_sig8A66)), Q(3, var_core_value_sig5DF8), Q(4, var_core_value_sig205B(var_core_value_sigDDBA)), Q(5, var_core_value_sig205B(var_core_value_sig274A))], lm);
function um(var_core_value_sig2240, var_core_value_sig6D9D1, var_core_value_sig91E3) {
  let var_core_value_sig9599 = {
    ...var_core_value_sig2240.data
  };
  return var_core_value_sig2240.order["forEach"](var_core_value_sigB49C => {
    let var_core_value_sigA044 = var_core_value_sig9599[var_core_value_sigB49C],
      var_core_value_sigD2F3 = var_core_value_sigA044 == null ? undefined : var_core_value_sigA044.element;
    if (!var_core_value_sigA044 || !var_core_value_sig524C(var_core_value_sigD2F3) || var_core_value_sigD2F3.visible === false) return;
    let var_core_value_sig27CD = var_core_value_sig4C62(var_core_value_sigD2F3),
      var_core_value_sig8977 = var_core_value_sig27CD && var_core_value_sig91E3.getResource(var_core_value_sig6D9D1.boardModel["getUnitId"](), var_core_value_sig27CD.embedId);
    var_core_value_sig8977 != null && var_core_value_sig8977.source && (var_core_value_sig9599[var_core_value_sigB49C] = {
      ...var_core_value_sigA044,
      element: dm(var_core_value_sigD2F3, var_core_value_sig8977.source)
    });
  }), {
    data: var_core_value_sig9599,
    order: var_core_value_sig2240.order
  };
}
function dm(var_core_value_sigC0F81, var_core_value_sigF753) {
  return {
    id: var_core_value_sigC0F81.id,
    type: var_core_value_sigAF71.Image,
    transform: var_core_value_sigC0F81.transform,
    source: var_core_value_sigF753,
    imageSourceType: var_core_value_sigFF1F.URL,
    parentId: var_core_value_sigC0F81.parentId,
    laneId: var_core_value_sigC0F81.laneId,
    role: var_core_value_sigC0F81.role,
    managedBy: var_core_value_sigC0F81.managedBy,
    name: var_core_value_sigC0F81.name,
    description: var_core_value_sigC0F81.description,
    visible: var_core_value_sigC0F81.visible,
    selectable: var_core_value_sigC0F81.selectable,
    locked: var_core_value_sigC0F81.locked,
    custom: var_core_value_sigC0F81.custom
  };
}
function fm(var_core_value_sig7225, var_core_value_sigB8C8, var_core_value_sig462E, var_core_value_sig3AA8, var_core_value_sigF99D, var_core_value_sig80F5, var_core_value_sig5579, var_core_value_sigB242) {
  var var_core_value_sig6DA5;
  (var_core_value_sig6DA5 = var_core_value_sigB8C8.drawingsOrder) == null || var_core_value_sig6DA5.forEach(var_core_value_sigE931 => {
    var var_core_value_sig9F9C;
    let var_core_value_sig0728 = (var_core_value_sig9F9C = var_core_value_sigB8C8.drawings) == null ? undefined : var_core_value_sig9F9C[var_core_value_sigE931];
    if (!var_core_value_sig0728) return;
    let var_core_value_sigDC83 = Td("data" in var_core_value_sig0728 ? var_core_value_sig0728.data : undefined),
      var_core_value_sig56A8 = var_core_value_sigDC83 && var_core_value_sig80F5.getResource(var_core_value_sigDC83.hostUnitId ?? var_core_value_sig462E, var_core_value_sigDC83.embedId),
      var_core_value_sigF487 = var_core_value_sigB242 == null ? undefined : var_core_value_sigB242.drawings["get"](var_core_value_sigE931);
    if (var_core_value_sig56A8 != null && var_core_value_sig56A8.canvas) {
      var var_core_value_sigC62E;
      let var_core_value_sig7620 = vm(var_core_value_sig0728),
        var_core_value_sigB9FC = var_core_value_sigF487 != null && (var_core_value_sigC62E = var_core_value_sigF487.segments) != null && var_core_value_sigC62E.length ? var_core_value_sigF487.segments : pm(var_core_value_sig56A8, var_core_value_sigF487, var_core_value_sig7620);
      if (mm(var_core_value_sig7225, var_core_value_sig7620.left, var_core_value_sig7620.width, var_core_value_sig56A8, var_core_value_sigB9FC, var_core_value_sig3AA8, var_core_value_sigF99D, var_core_value_sig5579), var_core_value_sigB9FC.length) return;
    }
    let var_core_value_sigCD50 = hm(var_core_value_sig0728, var_core_value_sigE931, var_core_value_sig462E, var_core_value_sig80F5, var_core_value_sigB242);
    if (!var_core_value_sigCD50) return;
    let {
      height: var_core_value_sig51C4,
      left: var_core_value_sigEECD,
      source: var_core_value_sigB655,
      top: var_core_value_sigF30A,
      width: var_core_value_sigD81A
    } = var_core_value_sigCD50;
    if (var_core_value_sigEECD + var_core_value_sigD81A < var_core_value_sigF99D.left || var_core_value_sigEECD > var_core_value_sigF99D.right || var_core_value_sigF30A + var_core_value_sig51C4 < var_core_value_sigF99D.top || var_core_value_sigF30A > var_core_value_sigF99D.bottom) return;
    let var_core_value_sigBE17 = document.createElement("img");
    var_core_value_sigBE17.alt = "", var_core_value_sigBE17.src = var_core_value_sigB655, var_core_value_sigBE17.style["position"] = "absolute", var_core_value_sigBE17.style["left"] = var_core_value_sigEECD - var_core_value_sig3AA8.x + "px", var_core_value_sigBE17.style["top"] = var_core_value_sigF30A - var_core_value_sig3AA8.y + "px", var_core_value_sigBE17.style["width"] = var_core_value_sigD81A + "px", var_core_value_sigBE17.style["height"] = var_core_value_sig51C4 + "px", var_core_value_sigBE17.style["objectFit"] = "contain", var_core_value_sigBE17.style["objectPosition"] = "left top", var_core_value_sigBE17.style["display"] = "block", var_core_value_sigBE17.style["zIndex"] = "11", var_core_value_sig7225.appendChild(var_core_value_sigBE17), var_core_value_sig5579.add(var_core_value_sig9BBC(() => var_core_value_sigBE17.remove()));
  });
}
function pm(var_core_value_sig8018, var_core_value_sigB95F, var_core_value_sigC3B9) {
  if (!var_core_value_sig8018.canvas || !wm(var_core_value_sigC3B9.top) || !Tm(var_core_value_sigC3B9.width)) return [];
  let var_core_value_sig1C33 = (var_core_value_sigB95F == null ? undefined : var_core_value_sigB95F.top) ?? var_core_value_sigC3B9.top,
    var_core_value_sigCD8F = (var_core_value_sigB95F == null ? undefined : var_core_value_sigB95F.height) ?? (Tm(var_core_value_sig8018.width) ? var_core_value_sigC3B9.width * var_core_value_sig8018.height / var_core_value_sig8018.width : var_core_value_sigC3B9.height);
  return wm(var_core_value_sig1C33) && Tm(var_core_value_sigCD8F) ? [{
    height: var_core_value_sigCD8F,
    sourceHeight: var_core_value_sig8018.canvas["height"],
    sourceTop: 0,
    top: var_core_value_sig1C33
  }] : [];
}
function mm(var_core_value_sigBF2E, var_core_value_sigCEE1, var_core_value_sig0C1F, var_core_value_sigEE64, var_core_value_sigBB7D, var_core_value_sig6AEA, var_core_value_sigC2EF, var_core_value_sig2FD1) {
  let var_core_value_sig1732 = var_core_value_sigEE64.canvas;
  !var_core_value_sig1732 || !wm(var_core_value_sigCEE1) || !Tm(var_core_value_sig0C1F) || !Tm(var_core_value_sigEE64.width) || var_core_value_sigBB7D.forEach(var_core_value_sigBB5E => {
    var var_core_value_sigB4401;
    if (var_core_value_sigCEE1 + var_core_value_sig0C1F < var_core_value_sigC2EF.left || var_core_value_sigCEE1 > var_core_value_sigC2EF.right || var_core_value_sigBB5E.top + var_core_value_sigBB5E.height <= var_core_value_sigC2EF.top || var_core_value_sigBB5E.top >= var_core_value_sigC2EF.bottom) return;
    let var_core_value_sig9D0F = document.createElement("canvas");
    var_core_value_sig9D0F.width = var_core_value_sig1732.width, var_core_value_sig9D0F.height = Math.max(1, Math.ceil(var_core_value_sigBB5E.sourceHeight)), (var_core_value_sigB4401 = var_core_value_sig9D0F.getContext("2d")) == null || var_core_value_sigB4401.drawImage(var_core_value_sig1732, 0, var_core_value_sigBB5E.sourceTop, var_core_value_sig1732.width, var_core_value_sigBB5E.sourceHeight, 0, 0, var_core_value_sig9D0F.width, var_core_value_sig9D0F.height), var_core_value_sig9D0F.style["position"] = "absolute", var_core_value_sig9D0F.style["left"] = var_core_value_sigCEE1 - var_core_value_sig6AEA.x + "px", var_core_value_sig9D0F.style["top"] = var_core_value_sigBB5E.top - var_core_value_sig6AEA.y + "px", var_core_value_sig9D0F.style["width"] = var_core_value_sig0C1F + "px", var_core_value_sig9D0F.style["height"] = var_core_value_sigBB5E.height + "px", var_core_value_sig9D0F.style["display"] = "block", var_core_value_sig9D0F.style["zIndex"] = "11", var_core_value_sigBF2E.appendChild(var_core_value_sig9D0F), var_core_value_sig2FD1.add(var_core_value_sig9BBC(() => var_core_value_sig9D0F.remove()));
  });
}
function hm(var_core_value_sig7DD2, var_core_value_sig116D, var_core_value_sig8367, var_core_value_sigE5EC, var_core_value_sig05A7) {
  var var_core_value_sig026D, var_core_value_sig1606;
  let var_core_value_sigB768 = Td("data" in var_core_value_sig7DD2 ? var_core_value_sig7DD2.data : undefined),
    var_core_value_sig247E = vm(var_core_value_sig7DD2),
    var_core_value_sig5841 = var_core_value_sigB768 && var_core_value_sigE5EC.getImage(var_core_value_sigB768.hostUnitId ?? var_core_value_sig8367, var_core_value_sigB768.embedId),
    var_core_value_sig7EB1 = var_core_value_sig247E == null ? undefined : var_core_value_sig247E.left,
    var_core_value_sigB1A5 = (var_core_value_sig05A7 == null || (var_core_value_sig026D = var_core_value_sig05A7.drawings["get"](var_core_value_sig116D)) == null ? undefined : var_core_value_sig026D.top) ?? (var_core_value_sig247E == null ? undefined : var_core_value_sig247E.top),
    var_core_value_sig1DFD = var_core_value_sig247E == null ? undefined : var_core_value_sig247E.width;
  if (!var_core_value_sig5841 || !wm(var_core_value_sig7EB1) || !wm(var_core_value_sigB1A5) || !Tm(var_core_value_sig1DFD)) return;
  let var_core_value_sigF538 = var_core_value_sig7DD2.docTransform["size"].width,
    var_core_value_sig641C = var_core_value_sig7DD2.docTransform["size"].height;
  return {
    height: (var_core_value_sig05A7 == null || (var_core_value_sig1606 = var_core_value_sig05A7.drawings["get"](var_core_value_sig116D)) == null ? undefined : var_core_value_sig1606.height) ?? xm(var_core_value_sigB768.childType, var_core_value_sig247E == null ? undefined : var_core_value_sig247E.height, var_core_value_sigF538, var_core_value_sig641C, var_core_value_sig1DFD),
    left: var_core_value_sig7EB1,
    source: var_core_value_sig5841,
    top: var_core_value_sigB1A5,
    width: var_core_value_sig1DFD
  };
}
function gm(var_core_value_sigDF9C1, var_core_value_sig2784, var_core_value_sig6AFD, var_core_value_sigEFE4, var_core_value_sig13DA = !!var_core_value_sigEFE4, var_core_value_sigEEA1 = false) {
  let var_core_value_sigA7CA = (var_core_value_sigDF9C1.drawingsOrder ?? []).map(var_core_value_sig0354 => {
      var var_core_value_sig12F4;
      return {
        drawingId: var_core_value_sig0354,
        drawing: (var_core_value_sig12F4 = var_core_value_sigDF9C1.drawings) == null ? undefined : var_core_value_sig12F4[var_core_value_sig0354]
      };
    }).filter(({
      drawing: var_core_value_sigDCEC
    }) => {
      let var_core_value_sigB5C8 = var_core_value_sigDCEC && Td("data" in var_core_value_sigDCEC ? var_core_value_sigDCEC.data : undefined);
      return !!var_core_value_sigDCEC && !!var_core_value_sigB5C8 && (!!var_core_value_sig6AFD.getResource(var_core_value_sigB5C8.hostUnitId ?? var_core_value_sig2784, var_core_value_sigB5C8.embedId) || !!var_core_value_sig6AFD.getImage(var_core_value_sigB5C8.hostUnitId ?? var_core_value_sig2784, var_core_value_sigB5C8.embedId));
    }).sort((var_core_value_sig8320, var_core_value_sig1C1B) => {
      var var_core_value_sig70FD, var_core_value_sig988F;
      return (var_core_value_sig8320.drawing ? ((var_core_value_sig70FD = vm(var_core_value_sig8320.drawing)) == null ? undefined : var_core_value_sig70FD.top) ?? 0 : 0) - (var_core_value_sig1C1B.drawing ? ((var_core_value_sig988F = vm(var_core_value_sig1C1B.drawing)) == null ? undefined : var_core_value_sig988F.top) ?? 0 : 0);
    }),
    var_core_value_sig7E63 = new Map(),
    var_core_value_sigE856 = [],
    var_core_value_sig1863 = new Set(var_core_value_sigA7CA.map(({
      drawingId: var_core_value_sig50A1
    }) => var_core_value_sig50A1)),
    var_core_value_sig000A = var_core_value_sigA7CA.find(({
      drawing: var_core_value_sig71D2
    }) => {
      let var_core_value_sigC113 = var_core_value_sig71D2 && Td("data" in var_core_value_sig71D2 ? var_core_value_sig71D2.data : undefined);
      return var_core_value_sigC113 && Cm(var_core_value_sigC113.childType);
    }),
    var_core_value_sigEABE = var_core_value_sig000A == null ? undefined : var_core_value_sig000A.drawing,
    var_core_value_sig0935 = var_core_value_sigEABE && vm(var_core_value_sigEABE).top,
    var_core_value_sig5111 = (var_core_value_sigDF9C1.drawingsOrder ?? []).some(var_core_value_sig2326 => {
      var var_core_value_sig9007;
      let var_core_value_sig8726 = (var_core_value_sig9007 = var_core_value_sigDF9C1.drawings) == null ? undefined : var_core_value_sig9007[var_core_value_sig2326];
      if (!var_core_value_sig8726 || var_core_value_sig1863.has(var_core_value_sig2326)) return false;
      let var_core_value_sig4358 = vm(var_core_value_sig8726).top;
      return !wm(var_core_value_sig0935) || !wm(var_core_value_sig4358) || var_core_value_sig4358 >= var_core_value_sig0935;
    }),
    var_core_value_sigA81D = !var_core_value_sig000A || _m(var_core_value_sigDF9C1, var_core_value_sig000A.drawingId),
    var_core_value_sigEBC7 = var_core_value_sigEEA1 && !var_core_value_sig5111 && !var_core_value_sigA81D,
    var_core_value_sig58CA = 0,
    var_core_value_sigCE6E = 0;
  return var_core_value_sigA7CA.forEach(({
    drawingId: var_core_value_sig9574,
    drawing: var_core_value_sigD610
  }, var_core_value_sigAF55) => {
    var var_core_value_sig7409;
    if (!var_core_value_sigD610) return;
    let var_core_value_sigD106 = Td("data" in var_core_value_sigD610 ? var_core_value_sigD610.data : undefined),
      var_core_value_sig7552 = vm(var_core_value_sigD610),
      var_core_value_sig56D11 = var_core_value_sig7552 == null ? undefined : var_core_value_sig7552.top,
      var_core_value_sig3D12 = var_core_value_sig7552 == null ? undefined : var_core_value_sig7552.width,
      var_core_value_sig8952 = var_core_value_sigD610.docTransform["size"].width,
      var_core_value_sigB409 = var_core_value_sigD610.docTransform["size"].height;
    if (!var_core_value_sigD106 || !wm(var_core_value_sig56D11) || !Tm(var_core_value_sig3D12)) return;
    let var_core_value_sig3D2F = Tm(var_core_value_sig7552 == null ? undefined : var_core_value_sig7552.height) ? var_core_value_sig7552.height : Sm(var_core_value_sig8952, var_core_value_sigB409, var_core_value_sig3D12),
      var_core_value_sigDBDA = var_core_value_sig6AFD.getResource(var_core_value_sigD106.hostUnitId ?? var_core_value_sig2784, var_core_value_sigD106.embedId),
      var_core_value_sig1EFA = var_core_value_sigDBDA && Tm(var_core_value_sigDBDA.width) ? var_core_value_sig3D12 * var_core_value_sigDBDA.height / var_core_value_sigDBDA.width : xm(var_core_value_sigD106.childType, var_core_value_sig7552 == null ? undefined : var_core_value_sig7552.height, var_core_value_sig8952, var_core_value_sigB409, var_core_value_sig3D12),
      var_core_value_sig7CF4 = var_core_value_sig56D11 + var_core_value_sig58CA,
      var_core_value_sigE956 = var_core_value_sigDBDA && Tm(var_core_value_sigDBDA.width) ? var_core_value_sig3D12 / var_core_value_sigDBDA.width : 1,
      var_core_value_sig189D = var_core_value_sig13DA && var_core_value_sigDBDA != null && var_core_value_sigDBDA.canvas && (var_core_value_sig7409 = var_core_value_sigDBDA.verticalBreaks) != null && var_core_value_sig7409.length ? ym(var_core_value_sigDBDA, var_core_value_sig7CF4, var_core_value_sigE956, var_core_value_sigEFE4) : undefined,
      var_core_value_sigE26F1 = var_core_value_sig189D != null && var_core_value_sig189D.length ? var_core_value_sig189D[var_core_value_sig189D.length - 1].top + var_core_value_sig189D[var_core_value_sig189D.length - 1].height - var_core_value_sig7CF4 : var_core_value_sig1EFA;
    if (var_core_value_sig7E63.set(var_core_value_sig9574, {
      height: var_core_value_sigE26F1,
      segments: var_core_value_sig189D,
      top: var_core_value_sig7CF4
    }), var_core_value_sig189D != null && var_core_value_sig189D.length ? var_core_value_sigE856.push(...var_core_value_sig189D.map(var_core_value_sig5055 => ({
      bottom: var_core_value_sig5055.top + var_core_value_sig5055.height,
      sourceId: var_core_value_sig9574,
      top: var_core_value_sig5055.top
    }))) : var_core_value_sig13DA && var_core_value_sigE26F1 > 0 && var_core_value_sigE856.push({
      bottom: var_core_value_sig7CF4 + var_core_value_sigE26F1,
      sourceId: var_core_value_sig9574,
      top: var_core_value_sig7CF4
    }), var_core_value_sigCE6E = Math.max(var_core_value_sigCE6E, var_core_value_sig7CF4 + var_core_value_sigE26F1), Cm(var_core_value_sigD106.childType)) {
      var var_core_value_sig8212;
      let var_core_value_sig3801 = (var_core_value_sig8212 = var_core_value_sigA7CA[var_core_value_sigAF55 + 1]) == null ? undefined : var_core_value_sig8212.drawing,
        var_core_value_sig45F0 = var_core_value_sig3801 ? vm(var_core_value_sig3801).top : undefined,
        var_core_value_sigBC91 = var_core_value_sigE26F1 - (wm(var_core_value_sig45F0) ? Math.max(0, Math.min(var_core_value_sig3D2F, var_core_value_sig45F0 - var_core_value_sig56D11)) : var_core_value_sig3D2F);
      var_core_value_sig58CA += var_core_value_sigEBC7 ? var_core_value_sigBC91 : Math.max(0, var_core_value_sigBC91);
    }
  }), {
    contentHeight: var_core_value_sigCE6E,
    contentHeightAdjustment: var_core_value_sig58CA,
    drawings: var_core_value_sig7E63,
    pageBreakRanges: var_core_value_sigE856
  };
}
function _m(var_core_value_sigDABB, var_core_value_sig72CB) {
  var var_core_value_sigF326;
  let var_core_value_sigFA19 = var_core_value_sigDABB.body,
    var_core_value_sigF335 = var_core_value_sigFA19 == null || (var_core_value_sigF326 = var_core_value_sigFA19.customBlocks) == null || (var_core_value_sigF326 = var_core_value_sigF326.find(({
      blockId: var_core_value_sig9A60
    }) => var_core_value_sig9A60 === var_core_value_sig72CB)) == null ? undefined : var_core_value_sigF326.startIndex;
  return !(var_core_value_sigFA19 != null && var_core_value_sigFA19.dataStream) || !wm(var_core_value_sigF335) || Array.from(var_core_value_sigFA19.dataStream["slice"](var_core_value_sigF335 + 1)).some(var_core_value_sig5EF5 => var_core_value_sig5EF5 !== var_core_value_sig1858.PARAGRAPH && var_core_value_sig5EF5 !== var_core_value_sig1858.SECTION_BREAK && var_core_value_sig5EF5 !== var_core_value_sig1858.CUSTOM_BLOCK && var_core_value_sig5EF5 !== var_core_value_sig1858.DOCS_END && var_core_value_sig5EF5.trim() !== "");
}
function vm(var_core_value_sigF82D) {
  return var_core_value_sigF82D.transform ?? var_core_value_sig8877(var_core_value_sigF82D.docTransform);
}
function ym(var_core_value_sig4E1C, var_core_value_sig84EF, var_core_value_sigE8A0, var_core_value_sigEC18) {
  let var_core_value_sigE8D7 = [...(var_core_value_sig4E1C.verticalBreaks ?? []).filter(var_core_value_sig5324 => var_core_value_sig5324 > 0 && var_core_value_sig5324 < var_core_value_sig4E1C.height), var_core_value_sig4E1C.height],
    var_core_value_sig07BF = [],
    var_core_value_sig8634 = 0,
    var_core_value_sig65C5 = var_core_value_sig84EF;
  return var_core_value_sigE8D7.forEach(var_core_value_sig01301 => {
    let var_core_value_sig5838 = var_core_value_sig01301 - var_core_value_sig8634,
      var_core_value_sigB9FE = var_core_value_sig5838 * var_core_value_sigE8A0;
    if (var_core_value_sigEC18) {
      let var_core_value_sigCB88 = bm(var_core_value_sig65C5, var_core_value_sigEC18);
      var_core_value_sig65C5 < var_core_value_sigCB88 && var_core_value_sig65C5 + var_core_value_sigB9FE > var_core_value_sigCB88 && var_core_value_sigB9FE <= var_core_value_sigEC18.pageStride && (var_core_value_sig65C5 = var_core_value_sigCB88);
    }
    var_core_value_sig07BF.push({
      height: var_core_value_sigB9FE,
      sourceHeight: var_core_value_sig5838,
      sourceTop: var_core_value_sig8634,
      top: var_core_value_sig65C5
    }), var_core_value_sig65C5 += var_core_value_sigB9FE, var_core_value_sig8634 = var_core_value_sig01301;
  }), var_core_value_sig07BF;
}
function bm(var_core_value_sig0958, var_core_value_sig87E1) {
  let var_core_value_sig3564 = Math.max(0, Math.floor((var_core_value_sig0958 - var_core_value_sig87E1.firstTop) / var_core_value_sig87E1.pageStride));
  return var_core_value_sig87E1.firstTop + (var_core_value_sig3564 + 1) * var_core_value_sig87E1.pageStride;
}
function xm(var_core_value_sig0926, var_core_value_sig6AB0, var_core_value_sigA283, var_core_value_sigEE51, var_core_value_sigB69E1) {
  return Cm(var_core_value_sig0926) && Tm(var_core_value_sig6AB0) ? var_core_value_sig6AB0 : Sm(var_core_value_sigA283, var_core_value_sigEE51, var_core_value_sigB69E1);
}
function Sm(var_core_value_sig1138, var_core_value_sig9A1D, var_core_value_sigE1EF) {
  return Tm(var_core_value_sig1138) && Tm(var_core_value_sig9A1D) ? var_core_value_sigE1EF * var_core_value_sig9A1D / var_core_value_sig1138 : 0;
}
function Cm(var_core_value_sigB2D6) {
  return var_core_value_sigB2D6 === var_core_value_sigC0F3.UNIVER_SHEET || var_core_value_sigB2D6 === var_core_value_sigC0F3.UNIVER_BASE;
}
function wm(var_core_value_sigD35B) {
  return typeof var_core_value_sigD35B == "number" && Number.isFinite(var_core_value_sigD35B);
}
function Tm(var_core_value_sig1B00) {
  return wm(var_core_value_sig1B00) && var_core_value_sig1B00 > 0;
}
function Em(var_core_value_sigD864, var_core_value_sig3380, var_core_value_sigBC6D, var_core_value_sigA806) {
  let var_core_value_sigB9ED = var_core_value_sigD864.style["overflow"],
    var_core_value_sig9DA7 = var_core_value_sigD864.style["zIndex"],
    var_core_value_sigBD0A = document.createElement("img");
  return var_core_value_sigBD0A.alt = "", var_core_value_sigBD0A.src = var_core_value_sig3380, var_core_value_sigBD0A.style["position"] = "absolute", var_core_value_sigBD0A.style["left"] = -var_core_value_sigA806.offsetX + "px", var_core_value_sigBD0A.style["top"] = -var_core_value_sigA806.offsetY + "px", var_core_value_sigBD0A.style["width"] = var_core_value_sigA806.width + "px", var_core_value_sigBD0A.style["height"] = var_core_value_sigA806.height + "px", var_core_value_sigBD0A.style["objectFit"] = "contain", var_core_value_sigBD0A.style["objectPosition"] = "center", var_core_value_sigBD0A.style["display"] = "block", var_core_value_sigD864.style["overflow"] = "visible", var_core_value_sigD864.style["zIndex"] = "9", var_core_value_sigD864.appendChild(var_core_value_sigBD0A), var_core_value_sigBC6D.add(var_core_value_sig9BBC(() => {
    var_core_value_sigBD0A.remove(), var_core_value_sigD864.style["overflow"] = var_core_value_sigB9ED, var_core_value_sigD864.style["zIndex"] = var_core_value_sig9DA7;
  })), var_core_value_sigBD0A;
}
function Dm(var_core_value_sig9E02) {
  return new Promise(var_core_value_sig41A5 => {
    var_core_value_sig9E02.addEventListener("load", () => var_core_value_sig41A5(), {
      once: true
    }), var_core_value_sig9E02.addEventListener("error", () => var_core_value_sig41A5(), {
      once: true
    });
  });
}
function Om(var_core_value_sigC558, var_core_value_sig080D1, var_core_value_sigBF7F) {
  let var_core_value_sig694C = var_core_value_sig080D1.slideModel["getUnitId"](),
    var_core_value_sigDF02 = var_core_value_sig080D1.slidePage["getId"](),
    var_core_value_sig4CEA = var_core_value_sig080D1.slidePage["getData"](),
    var_core_value_sig36101 = var_core_value_sigB179(var_core_value_sig4CEA),
    var_core_value_sigBB17 = var_core_value_sig36101 && var_core_value_sigBF7F.getResource(var_core_value_sig694C, var_core_value_sig36101.embedId);
  if (var_core_value_sig36101 && var_core_value_sigBB17 != null && var_core_value_sigBB17.source) {
    let var_core_value_sig6D3D = var_core_value_sigA6AB(var_core_value_sig4CEA.pageSize ?? var_core_value_sig080D1.slideModel["getSnapshot"]().defaultPageSize),
      var_core_value_sigB191 = Am(var_core_value_sig694C, var_core_value_sigDF02, "embed-print-" + var_core_value_sig36101.embedId, var_core_value_sigBB17.source, {
        left: 0,
        top: 0,
        width: var_core_value_sig6D3D.width,
        height: var_core_value_sig6D3D.height
      });
    return {
      data: {
        [var_core_value_sigB191.drawingId]: var_core_value_sigB191
      },
      order: [var_core_value_sigB191.drawingId]
    };
  }
  return km(var_core_value_sigC558, var_core_value_sig694C, var_core_value_sigDF02, var_core_value_sigBF7F);
}
function km(var_core_value_sigA593, var_core_value_sig75C8, var_core_value_sig98C6, var_core_value_sigBE5D) {
  let var_core_value_sig4B32 = {
    ...var_core_value_sigA593.data
  };
  return var_core_value_sigA593.order["forEach"](var_core_value_sig949D => {
    let var_core_value_sig4113 = var_core_value_sig4B32[var_core_value_sig949D],
      var_core_value_sigEC12 = var_core_value_sig4113 && var_core_value_sig94EF(var_core_value_sig4113.element),
      var_core_value_sigC932 = var_core_value_sigEC12 && var_core_value_sigBE5D.getImage(var_core_value_sig75C8, var_core_value_sigEC12.embedId);
    !var_core_value_sig4113 || !var_core_value_sigC932 || (var_core_value_sig4B32[var_core_value_sig949D] = Am(var_core_value_sig75C8, var_core_value_sig98C6, var_core_value_sig949D, var_core_value_sigC932, var_core_value_sig4113.element["transform"], var_core_value_sig4113.sourcePageType));
  }), {
    data: var_core_value_sig4B32,
    order: var_core_value_sigA593.order
  };
}
function Am(var_core_value_sigA727, var_core_value_sigAD32, var_core_value_sigCA1B, var_core_value_sig624C, var_core_value_sig6DE4, var_core_value_sig733E = var_core_value_sig9CB9.Slide) {
  return var_core_value_sig1F73(var_core_value_sigA727, var_core_value_sigAD32, {
    id: var_core_value_sigCA1B,
    type: var_core_value_sig7432.Image,
    name: var_core_value_sigCA1B,
    source: var_core_value_sig624C,
    imageSourceType: var_core_value_sigFF1F.URL,
    transform: var_core_value_sig6DE4
  }, var_core_value_sig733E);
}
const jm = new Set(["__editor_" + var_core_value_sigCEA0, "__editor_" + var_core_value_sig6565]);
let Mm = class extends var_core_value_sigCBDC {
  constructor(var_core_value_sigDE39) {
    super(), [{
      id: var_core_value_sigD782.id,
      binding: var_core_value_sig3370.A | var_core_value_sigB680.CTRL_COMMAND,
      eventPreconditions: Nm,
      preconditions: Pm,
      nativeTextEditorBehavior: var_core_value_sigEAF7.OVERRIDE_NATIVE,
      priority: 902
    }, {
      id: var_core_value_sig161B.id,
      binding: var_core_value_sig3370.A | var_core_value_sigB680.CTRL_COMMAND,
      eventPreconditions: Nm,
      preconditions: var_core_value_sig8D65 => !Pm(var_core_value_sig8D65),
      nativeTextEditorBehavior: var_core_value_sigEAF7.OVERRIDE_NATIVE,
      priority: 902,
      staticParameters: {
        expandToGapFirst: true,
        loop: true
      }
    }, {
      id: var_core_value_sig2785.id,
      binding: var_core_value_sig3370.Z | var_core_value_sigB680.CTRL_COMMAND,
      eventPreconditions: Nm,
      preconditions: var_core_value_sig8122 => !Pm(var_core_value_sig8122),
      priority: 902
    }, {
      id: var_core_value_sig972B.id,
      binding: var_core_value_sig3370.Y | var_core_value_sigB680.CTRL_COMMAND,
      eventPreconditions: Nm,
      preconditions: var_core_value_sigEDC6 => !Pm(var_core_value_sigEDC6),
      priority: 902
    }, {
      id: var_core_value_sig972B.id,
      binding: var_core_value_sig3370.Z | var_core_value_sigB680.CTRL_COMMAND | var_core_value_sigB680.SHIFT,
      eventPreconditions: Nm,
      preconditions: var_core_value_sig611A => !Pm(var_core_value_sig611A),
      priority: 902
    }].forEach(var_core_value_sig6BD9 => this.disposeWithMe(var_core_value_sigDE39.registerShortcut(var_core_value_sig6BD9)));
  }
};
Mm = $([Q(0, var_core_value_sig24AE)], Mm);
function Nm(var_core_value_sigD487) {
  let var_core_value_sigA387 = var_core_value_sigD487.target;
  return var_core_value_sigA387 instanceof HTMLElement && jm.has(var_core_value_sigA387.id) && var_core_value_sigA387.closest("[data-embed-interaction-boundary-owner]") != null;
}
function Pm(var_core_value_sigA781) {
  return !!(var_core_value_sigA781.getContextValue(var_core_value_sig1099) || var_core_value_sigA781.getContextValue(var_core_value_sigB88C));
}
function Fm(var_core_value_sigF165) {
  let var_core_value_sig6734 = [];
  return [[var_core_value_sigC0F3.UNIVER_DOC, "docs-ui.ribbon"], [var_core_value_sigC0F3.UNIVER_SHEET, "sheets-ui.ribbon"], [var_core_value_sigC0F3.UNIVER_SLIDE, "slides-ui.ribbon"], [var_core_value_sigC0F3.UNIVER_BASE, "bases-ui.ribbon"]].forEach(([var_core_value_sig1529, var_core_value_sigAFD8]) => {
    let var_core_value_sig6017 = ql(var_core_value_sigF165, {
      childType: var_core_value_sig1529,
      id: var_core_value_sigAFD8,
      scopedActionServiceTokens: var_core_value_sig1529 === var_core_value_sigC0F3.UNIVER_SLIDE ? [var_core_value_sig0FC5] : undefined
    });
    var_core_value_sig6017 && var_core_value_sig6734.push(var_core_value_sig6017);
  }), var_core_value_sig6734;
}
var Im = class {
  constructor() {
    Y(this, "_providers", new Map());
  }
  register(var_core_value_sigC66C) {
    if (this._providers["has"](var_core_value_sigC66C.childType)) throw Error("Embed readonly preview provider already registered: " + var_core_value_sigC66C.childType);
    this._providers["set"](var_core_value_sigC66C.childType, var_core_value_sigC66C);
  }
  get(var_core_value_sigC5AC) {
    return this._providers["get"](var_core_value_sigC5AC);
  }
  list() {
    return [...this._providers["values"]()];
  }
};
const Lm = new WeakMap(),
  Rm = new WeakMap();
function zm(var_core_value_sig3114, var_core_value_sigE867, var_core_value_sig5AB21) {
  var var_core_value_sig487E;
  if (Hm(var_core_value_sig3114)) {
    Vm(var_core_value_sig3114, var_core_value_sigE867, var_core_value_sig5AB21);
    return;
  }
  let var_core_value_sig1B2B = var_core_value_sig3114;
  if ((var_core_value_sig487E = Rm.get(var_core_value_sig1B2B)) != null && var_core_value_sig487E.has(var_core_value_sigE867)) return;
  let var_core_value_sigA23A = Lm.get(var_core_value_sig1B2B) ?? new Map();
  var_core_value_sigA23A.set(var_core_value_sigE867, var_core_value_sig5AB21), Lm.set(var_core_value_sig1B2B, var_core_value_sigA23A);
}
function Bm(var_core_value_sig0F07) {
  if (!Hm(var_core_value_sig0F07)) return;
  let var_core_value_sig31B4 = var_core_value_sig0F07,
    var_core_value_sig7C00 = Lm.get(var_core_value_sig31B4);
  var_core_value_sig7C00 != null && var_core_value_sig7C00.size && (var_core_value_sig7C00.forEach((var_core_value_sig5880, var_core_value_sigF7E2) => Vm(var_core_value_sig0F07, var_core_value_sigF7E2, var_core_value_sig5880)), Lm.delete(var_core_value_sig31B4));
}
function Vm(var_core_value_sigDE561, var_core_value_sig8F3C, var_core_value_sig3FCF1) {
  let var_core_value_sig3FBF = var_core_value_sigDE561,
    var_core_value_sig992C = Rm.get(var_core_value_sig3FBF) ?? new Set();
  var_core_value_sig992C.has(var_core_value_sig8F3C) || (var_core_value_sig3FCF1(var_core_value_sigDE561), var_core_value_sig992C.add(var_core_value_sig8F3C), Rm.set(var_core_value_sig3FBF, var_core_value_sig992C));
}
function Hm(var_core_value_sig7548) {
  return var_core_value_sig7548.has(var_core_value_sig67C7) && var_core_value_sig7548.has(Rc) && var_core_value_sig7548.has(Ic) && var_core_value_sig7548.has(bs) && var_core_value_sig7548.has(Zl) && var_core_value_sig7548.has(Lc) && var_core_value_sig7548.has(cd) && var_core_value_sig7548.has(Bf) && var_core_value_sig7548.has(Cd) && var_core_value_sig7548.has(Im);
}
function Um(var_core_value_sig6650) {
  let {
    childType: var_core_value_sig7CCE,
    productName: var_core_value_sig62561
  } = var_core_value_sig6650;
  return {
    childType: var_core_value_sig7CCE,
    productName: var_core_value_sig62561,
    hostChromeMode: "ribbon",
    layoutPolicy: {
      tab: var_core_value_sig41A3,
      float: var_core_value_sigA66F,
      docFlow: var_core_value_sigA212
    },
    createRibbonOverride: ({
      childUnitId: var_core_value_sigDEEA,
      embedId: var_core_value_sig49D1,
      injector: var_core_value_sigEDEC
    }) => {
      let var_core_value_sig4F7B = Tl(var_core_value_sigEDEC, {
        childType: var_core_value_sig7CCE,
        childUnitId: var_core_value_sigDEEA,
        embedId: var_core_value_sig49D1,
        menuSchema: Wm(var_core_value_sigEDEC, var_core_value_sig7CCE, var_core_value_sig6650.menuSchema)
      });
      return {
        mode: "ribbon",
        ribbonService: var_core_value_sig4F7B.ribbonService,
        injector: var_core_value_sig4F7B.injector,
        placeholderTitle: var_core_value_sig62561,
        disposable: var_core_value_sig4F7B.disposable
      };
    }
  };
}
function Wm(var_core_value_sig691D, var_core_value_sig4405, var_core_value_sig4A34) {
  let var_core_value_sig81FA = var_core_value_sig691D;
  if (typeof var_core_value_sig81FA.has == "function" && typeof var_core_value_sig81FA.get == "function" && var_core_value_sig81FA.has(Zl)) {
    let var_core_value_sig8269 = var_core_value_sig81FA.get(Zl).getMergedMenuSchema(var_core_value_sig4405, "ribbon");
    if (var_core_value_sig8269) return var_core_value_sig8269;
  }
  return var_core_value_sig4A34;
}
function Gm(var_core_value_sigEBA1) {
  let var_core_value_sig5E4A = Km(var_core_value_sigEBA1);
  return {
    childType: var_core_value_sigEBA1.childType,
    productName: var_core_value_sigEBA1.productName,
    hostChromeMode: var_core_value_sig5E4A,
    hostHeaderMode: var_core_value_sigEBA1.hostHeaderMode ?? "none",
    layoutPolicy: {
      tab: {
        ...var_core_value_sig41A3,
        ribbon: var_core_value_sig5E4A === "none" ? "hidden" : "host"
      },
      float: var_core_value_sigA66F,
      docFlow: var_core_value_sigA212
    },
    createRibbonOverride: var_core_value_sig5E4A === "title-only" ? () => ({
      mode: "title-only",
      ribbonService: qm(),
      placeholderTitle: var_core_value_sigEBA1.productName,
      hideToolbar: true
    }) : undefined
  };
}
function Km(var_core_value_sig4866) {
  return var_core_value_sig4866.hostChromeMode ? var_core_value_sig4866.hostChromeMode : var_core_value_sig4866.hostHeaderMode === "placeholder" ? "title-only" : "none";
}
function qm() {
  return {
    ribbon$: var_core_value_sigDA93([]),
    activatedTab$: var_core_value_sigDA93(""),
    collapsedIds$: var_core_value_sigDA93([]),
    fakeToolbarVisible$: var_core_value_sigDA93(false),
    setActivatedTab: () => {},
    showContextualTab: () => {},
    hideContextualTab: () => {},
    hideAllContextualTabs: () => {},
    setCollapsedIds: () => {},
    setFakeToolbarVisible: () => {}
  };
}
function Jm(var_core_value_sig7F98, var_core_value_sig42BA, var_core_value_sigF9F7, var_core_value_sigAFCE) {
  return [...var_core_value_sig7F98.querySelectorAll(var_core_value_sig42BA)].reverse().find(var_core_value_sigB092 => {
    let var_core_value_sigC04F = var_core_value_sigB092.getBoundingClientRect();
    return var_core_value_sigF9F7 >= var_core_value_sigC04F.left && var_core_value_sigF9F7 <= var_core_value_sigC04F.right && var_core_value_sigAFCE >= var_core_value_sigC04F.top && var_core_value_sigAFCE <= var_core_value_sigC04F.bottom;
  });
}
function Ym() {
  return {
    ...Gm({
      childType: var_core_value_sigC0F3.UNIVER_BASE,
      productName: "Bases",
      hostChromeMode: "none"
    }),
    presentationPolicy: {
      getChromeCss: () => "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[data-embed-presentation-runtime=\x22true\x22]\x20[data-u-comp=\x22base-workbench-layout\x22]\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20grid-template-columns:\x20minmax(0,\x201fr)\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[data-embed-presentation-runtime=\x22true\x22]\x20[data-u-comp=\x22base-left-panel\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[data-embed-presentation-runtime=\x22true\x22]\x20[data-u-comp=\x22base-left-panel-floating-expand-trigger\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[data-embed-presentation-runtime=\x22true\x22]\x20[data-u-comp=\x22base-header-menu\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[data-embed-presentation-runtime=\x22true\x22]\x20[data-u-comp=\x22base-add-view-button\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[data-embed-presentation-runtime=\x22true\x22]\x20[data-u-comp=\x22base-view-tab-more\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[data-embed-presentation-runtime=\x22true\x22]\x20[data-u-comp=\x22base-global-layer\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[data-embed-presentation-runtime=\x22true\x22]\x20[data-u-comp=\x22base-right-panel\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[data-embed-presentation-runtime=\x22true\x22]\x20[data-u-comp=\x22base-footer\x22]\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
      activateNavigationAtPoint: ({
        childContext: var_core_value_sig8B16,
        clientX: var_core_value_sig9640,
        clientY: var_core_value_sig34AB,
        runtimeHost: var_core_value_sig0BE5
      }) => {
        if (Jm(var_core_value_sig0BE5, '[data-u-comp="base-view-tab-more"]', var_core_value_sig9640, var_core_value_sig34AB)) return false;
        let var_core_value_sig2F9D = Jm(var_core_value_sig0BE5, '[data-u-comp="base-view-tab"]', var_core_value_sig9640, var_core_value_sig34AB),
          var_core_value_sig9511 = var_core_value_sig2F9D == null ? undefined : var_core_value_sig2F9D.dataset["viewId"],
          var_core_value_sigAFDD = var_core_value_sig8B16.runtimeScope["injector"];
        return !var_core_value_sig9511 || !var_core_value_sigAFDD.has(var_core_value_sigCB4E) ? false : (var_core_value_sigAFDD.get(var_core_value_sigCB4E).activateView(var_core_value_sig9511), true);
      }
    }
  };
}
let Xm = class {
  constructor(var_core_value_sig431B1, var_core_value_sig3073, var_core_value_sig4C99) {
    this._baseUIStateService = var_core_value_sig431B1, this._projectionService = var_core_value_sig3073, this._wheelScrollService = var_core_value_sig4C99, Y(this, "childType", var_core_value_sigC0F3.UNIVER_BASE);
  }
  measureContentSize(var_core_value_sigDDD2) {
    var var_core_value_sig6D5F, var_core_value_sigB80D, var_core_value_sigE0A2;
    let var_core_value_sig8F71 = var_core_value_sigDDD2.childUnit instanceof var_core_value_sigFA34 ? var_core_value_sigDDD2.childUnit["getSnapshot"]() : undefined;
    if (!var_core_value_sig8F71) return;
    let var_core_value_sig9016 = (var_core_value_sig6D5F = var_core_value_sigDDD2.injector) != null && var_core_value_sig6D5F.has(var_core_value_sigCB4E) ? var_core_value_sigDDD2.injector["get"](var_core_value_sigCB4E) : this._baseUIStateService,
      var_core_value_sigB043 = (var_core_value_sigB80D = var_core_value_sigDDD2.injector) != null && var_core_value_sigB80D.has(var_core_value_sig4DA3) ? var_core_value_sigDDD2.injector["get"](var_core_value_sig4DA3) : this._projectionService,
      var_core_value_sig554B = (var_core_value_sigE0A2 = var_core_value_sigDDD2.injector) != null && var_core_value_sigE0A2.has(var_core_value_sigDE56) ? var_core_value_sigDDD2.injector["get"](var_core_value_sigDE56) : this._wheelScrollService,
      var_core_value_sig33F0 = var_core_value_sig9016.getState(),
      var_core_value_sigC9BF = $m(var_core_value_sig8F71, var_core_value_sig33F0, var_core_value_sigDDD2.viewportWidth),
      var_core_value_sigE1AD = Zm(var_core_value_sig8F71, var_core_value_sig33F0, var_core_value_sigB043, var_core_value_sig554B, var_core_value_sigDDD2.viewportHeight, var_core_value_sigC9BF ?? var_core_value_sigDDD2.viewportWidth);
    return var_core_value_sigE1AD == null && var_core_value_sigC9BF == null ? undefined : {
      height: var_core_value_sigE1AD == null ? undefined : var_core_value_sigE1AD.height,
      verticalBreaks: var_core_value_sigE1AD == null ? undefined : var_core_value_sigE1AD.breaks,
      width: var_core_value_sigC9BF
    };
  }
};
Xm = $([Q(0, var_core_value_sigCB4E), Q(1, var_core_value_sig4DA3), Q(2, var_core_value_sigDE56)], Xm);
function Zm(var_core_value_sig7501, var_core_value_sigD1D3, var_core_value_sigE9C0, var_core_value_sigEAD0, var_core_value_sig806B, var_core_value_sig2071) {
  var var_core_value_sig9BB4;
  let var_core_value_sigD52D = rh(var_core_value_sig7501, var_core_value_sigD1D3 == null ? undefined : var_core_value_sigD1D3.activeTableId),
    var_core_value_sigA208 = var_core_value_sigD52D ? var_core_value_sig7501.tables[var_core_value_sigD52D] : undefined;
  if (!var_core_value_sigA208 || !var_core_value_sigD52D) return;
  let var_core_value_sig2306 = ih(var_core_value_sigA208, var_core_value_sigD1D3 == null ? undefined : var_core_value_sigD1D3.activeViewId),
    var_core_value_sig6EDF = var_core_value_sig2306 ? (var_core_value_sig9BB4 = var_core_value_sigA208.views) == null ? undefined : var_core_value_sig9BB4[var_core_value_sig2306] : undefined,
    var_core_value_sig0A62 = ah(var_core_value_sigA208),
    var_core_value_sigB930 = var_core_value_sig30BA(var_core_value_sig6EDF != null && var_core_value_sig6EDF.config && "rowHeight" in var_core_value_sig6EDF.config ? var_core_value_sig6EDF.config["rowHeight"] : undefined);
  return Qm(var_core_value_sig7501, var_core_value_sigD52D, var_core_value_sig2306, var_core_value_sigB930, var_core_value_sigD1D3, var_core_value_sigE9C0, var_core_value_sigEAD0, var_core_value_sig806B, var_core_value_sig2071) ?? {
    breaks: Array(var_core_value_sig0A62).fill(null).map((var_core_value_sig90FF, var_core_value_sigA7F6) => var_core_value_sig7587 + (var_core_value_sigA7F6 + 1) * var_core_value_sigB930),
    height: var_core_value_sig7587 + var_core_value_sig0A62 * var_core_value_sigB930 + var_core_value_sig3964 + var_core_value_sig5B82
  };
}
function Qm(var_core_value_sigD8E7, var_core_value_sig707F, var_core_value_sigBA9B, var_core_value_sig595E, var_core_value_sig62BF, var_core_value_sig6773, var_core_value_sigB16D, var_core_value_sigE2C9, var_core_value_sig6D71) {
  if (!var_core_value_sigBA9B || !var_core_value_sig6773 || !var_core_value_sigB16D) return;
  let var_core_value_sig4BDF = var_core_value_sig6773.getProjection(var_core_value_sigD8E7, var_core_value_sig707F, var_core_value_sigBA9B);
  if (var_core_value_sig4BDF.type === var_core_value_sigD95C.Calendar && var_core_value_sig4BDF.config["mode"] === "month" && var_core_value_sigE2C9 != null) return {
    height: var_core_value_sigE2C9
  };
  if (var_core_value_sig4BDF.type === var_core_value_sigD95C.Gallery) return {
    height: var_core_value_sigB16D.getGalleryProjectionBodyHeight(var_core_value_sig4BDF, var_core_value_sig6D71 ?? 1)
  };
  if (var_core_value_sig4BDF.type === var_core_value_sigD95C.Kanban) return {
    height: var_core_value_sigB16D.getKanbanProjectionBodyHeight(var_core_value_sig4BDF)
  };
  if (var_core_value_sig4BDF.type === var_core_value_sigD95C.Grid || var_core_value_sig4BDF.type === var_core_value_sigD95C.Gantt) {
    let var_core_value_sig5A0F = var_core_value_sig62BF == null ? undefined : var_core_value_sig62BF.collapsedGroupPaths[var_core_value_sigBA9B];
    return {
      breaks: var_core_value_sigBE10(var_core_value_sig4BDF, var_core_value_sig5A0F, var_core_value_sig595E).map(var_core_value_sig7E56 => var_core_value_sig7587 + var_core_value_sig7E56.y + var_core_value_sig7E56.height),
      height: var_core_value_sig7587 + var_core_value_sigB16D.getGridProjectionBodyHeight(var_core_value_sig4BDF, var_core_value_sig5A0F, var_core_value_sig595E) + var_core_value_sig5B82
    };
  }
}
function $m(var_core_value_sig0925, var_core_value_sigB536, var_core_value_sig6A2F) {
  var var_core_value_sigF08D, var_core_value_sigD9A4;
  let var_core_value_sigCE76 = th(var_core_value_sig0925, var_core_value_sigB536 == null ? undefined : var_core_value_sigB536.activeTableId);
  if (!var_core_value_sigCE76) return;
  let var_core_value_sigBB85 = nh(var_core_value_sigCE76, var_core_value_sigB536 == null ? undefined : var_core_value_sigB536.activeViewId),
    var_core_value_sigCC39 = var_core_value_sigCE76.fields ?? {},
    var_core_value_sigA08C = var_core_value_sig5EBB + (var_core_value_sigBB85 != null && (var_core_value_sigF08D = var_core_value_sigBB85.fieldOrder) != null && var_core_value_sigF08D.length ? var_core_value_sigBB85.fieldOrder : (var_core_value_sigD9A4 = var_core_value_sigCE76.fieldOrder) != null && var_core_value_sigD9A4.length ? var_core_value_sigCE76.fieldOrder : Object.keys(var_core_value_sigCC39)).reduce((var_core_value_sigCDF5, var_core_value_sig3802) => {
      var var_core_value_sigB642;
      let var_core_value_sig9026 = var_core_value_sigCC39[var_core_value_sig3802],
        var_core_value_sigDCD6 = var_core_value_sigBB85 == null || (var_core_value_sigB642 = var_core_value_sigBB85.fieldSettings) == null ? undefined : var_core_value_sigB642[var_core_value_sig3802];
      return var_core_value_sig9026 && !(var_core_value_sigDCD6 != null && var_core_value_sigDCD6.hidden) ? var_core_value_sigCDF5 + eh(var_core_value_sigDCD6 == null ? undefined : var_core_value_sigDCD6.width) : var_core_value_sigCDF5;
    }, 0) + var_core_value_sig2053;
  return (var_core_value_sigBB85 == null ? undefined : var_core_value_sigBB85.type) === var_core_value_sigD95C.Gallery || (var_core_value_sigBB85 == null ? undefined : var_core_value_sigBB85.type) === var_core_value_sigD95C.Kanban ? Math.max(var_core_value_sigA08C, var_core_value_sig6A2F ?? 0) : var_core_value_sigA08C;
}
function eh(var_core_value_sigC84C) {
  return typeof var_core_value_sigC84C == "number" && Number.isFinite(var_core_value_sigC84C) && var_core_value_sigC84C > 0 ? var_core_value_sigC84C : var_core_value_sig310B;
}
function th(var_core_value_sigCAFE, var_core_value_sigD639) {
  var var_core_value_sigFEFC;
  let var_core_value_sig71BD = rh(var_core_value_sigCAFE, var_core_value_sigD639);
  return var_core_value_sig71BD ? (var_core_value_sigFEFC = var_core_value_sigCAFE.tables) == null ? undefined : var_core_value_sigFEFC[var_core_value_sig71BD] : undefined;
}
function nh(var_core_value_sig1AC4, var_core_value_sig736D) {
  var var_core_value_sig0AA1;
  let var_core_value_sigF700 = ih(var_core_value_sig1AC4, var_core_value_sig736D);
  return var_core_value_sigF700 ? (var_core_value_sig0AA1 = var_core_value_sig1AC4.views) == null ? undefined : var_core_value_sig0AA1[var_core_value_sigF700] : undefined;
}
function rh(var_core_value_sigAB3E, var_core_value_sig9BFA) {
  let var_core_value_sig2006 = var_core_value_sigAB3E.tables ?? {};
  if (var_core_value_sig9BFA && var_core_value_sig2006[var_core_value_sig9BFA]) return var_core_value_sig9BFA;
  let var_core_value_sigA98C = var_core_value_sigAB3E.tableOrder ?? [];
  return [...var_core_value_sigA98C, ...Object.keys(var_core_value_sig2006).filter(var_core_value_sig048B => !var_core_value_sigA98C.includes(var_core_value_sig048B))].find(var_core_value_sig1334 => var_core_value_sig2006[var_core_value_sig1334]);
}
function ih(var_core_value_sig0502, var_core_value_sigDEDD) {
  let var_core_value_sigA5DC = var_core_value_sig0502.views ?? {};
  if (var_core_value_sigDEDD && var_core_value_sigA5DC[var_core_value_sigDEDD]) return var_core_value_sigDEDD;
  let var_core_value_sig7914 = var_core_value_sig0502.viewOrder ?? [];
  return [...var_core_value_sig7914, ...Object.keys(var_core_value_sigA5DC).filter(var_core_value_sig2605 => !var_core_value_sig7914.includes(var_core_value_sig2605))].find(var_core_value_sig5F20 => var_core_value_sigA5DC[var_core_value_sig5F20]);
}
function ah(var_core_value_sig408D) {
  var var_core_value_sigEDD0;
  let var_core_value_sig3C51 = var_core_value_sig408D.records ?? {};
  return ((var_core_value_sigEDD0 = var_core_value_sig408D.recordOrder) != null && var_core_value_sigEDD0.length ? var_core_value_sig408D.recordOrder : Object.keys(var_core_value_sig3C51)).filter(var_core_value_sig019C => var_core_value_sig3C51[var_core_value_sig019C]).length;
}
function oh(var_core_value_sig2D1E, var_core_value_sig0845, var_core_value_sigDC8C) {
  return {
    ...var_core_value_sig5966(var_core_value_sig2D1E, var_core_value_sig0845),
    activateAnchor: var_core_value_sigB296 => {
      ch(var_core_value_sigB296.hostUnitId, var_core_value_sigB296.hostAnchorId, var_core_value_sig0845, uh(var_core_value_sigDC8C));
    }
  };
}
function sh() {
  return {
    hostType: var_core_value_sigC0F3.UNIVER_BASE,
    entry: "bases-table-list-block",
    layout: "tab-peer",
    supportedLayouts: ["tab-peer"],
    menuBehavior: "host-override",
    mount: var_core_value_sig7949 => {
      let var_core_value_sig2DD9 = dh("data-embed-bases-table-list-host", var_core_value_sig7949.descriptor["hostAnchorId"]);
      return var_core_value_sig2DD9 ? {
        hostElement: var_core_value_sig2DD9
      } : {};
    }
  };
}
function ch(var_core_value_sig14E0, var_core_value_sig0F5D, var_core_value_sigD95C2, var_core_value_sigB2D61) {
  var var_core_value_sigA7ED;
  if (!var_core_value_sigB2D61) return;
  var_core_value_sigB2D61.activateTable(var_core_value_sig0F5D);
  let var_core_value_sigEDF21 = (var_core_value_sigA7ED = lh(var_core_value_sigD95C2, var_core_value_sig14E0)) == null ? undefined : var_core_value_sigA7ED.tables[var_core_value_sig0F5D],
    var_core_value_sigEBEE1 = var_core_value_sigEDF21 == null ? undefined : var_core_value_sigEDF21.viewOrder["find"](var_core_value_sigCD501 => var_core_value_sigEDF21.views[var_core_value_sigCD501]);
  var_core_value_sigEBEE1 && var_core_value_sigB2D61.activateView(var_core_value_sigEBEE1), var_core_value_sigB2D61.setSelection(null), var_core_value_sigB2D61.closeRecordDetail();
}
function lh(var_core_value_sigC48C, var_core_value_sig015F1) {
  var var_core_value_sig3010;
  return var_core_value_sigC48C == null || (var_core_value_sig3010 = var_core_value_sigC48C.getUnit(var_core_value_sig015F1, var_core_value_sigC0F3.UNIVER_BASE)) == null ? undefined : var_core_value_sig3010.getSnapshot();
}
function uh(var_core_value_sig97A5) {
  return typeof var_core_value_sig97A5 == "function" ? var_core_value_sig97A5() : var_core_value_sig97A5;
}
function dh(var_core_value_sig8984, var_core_value_sig4C4B) {
  return document.querySelector("[" + var_core_value_sig8984 + "=\x22" + fh(var_core_value_sig4C4B) + "\x22]");
}
function fh(var_core_value_sig79D9) {
  return var_core_value_sig79D9.replace(/\\/g, "\x5c\x5c").replace(/"/g, "\x5c\x22");
}
function ph(var_core_value_sig492E) {
  let var_core_value_sig0EA6 = var_core_value_sig492E.has(var_core_value_sigCB4E) ? var_core_value_sig492E.get(var_core_value_sigCB4E) : undefined,
    var_core_value_sigFF0E = var_core_value_sig492E.has(var_core_value_sigDE56) ? var_core_value_sig492E.get(var_core_value_sigDE56) : undefined,
    var_core_value_sigCF7E = new Set();
  return {
    childType: var_core_value_sigC0F3.UNIVER_BASE,
    getHorizontalScroll(var_core_value_sigD362) {
      var var_core_value_sigC433;
      let var_core_value_sigF543 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigF2D0(var_core_value_sigD362),
        var_core_value_sig0806 = var_core_value_sigF543 == null ? undefined : var_core_value_sigF543.getState();
      return var_core_value_sig0806 != null && var_core_value_sig0806.activeViewId ? ((var_core_value_sigC433 = var_core_value_sig0806.scrollState[var_core_value_sig0806.activeViewId]) == null ? undefined : var_core_value_sigC433.x) ?? 0 : 0;
    },
    getVerticalScroll(var_core_value_sigE224) {
      var var_core_value_sig773E;
      let var_core_value_sig83A7 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigF2D0(var_core_value_sigE224),
        var_core_value_sigFE18 = var_core_value_sig83A7 == null ? undefined : var_core_value_sig83A7.getState();
      return var_core_value_sigFE18 != null && var_core_value_sigFE18.activeViewId ? ((var_core_value_sig773E = var_core_value_sigFE18.scrollState[var_core_value_sigFE18.activeViewId]) == null ? undefined : var_core_value_sig773E.y) ?? 0 : 0;
    },
    getStickyLeftWidth: () => var_core_value_sig5EBB,
    getStickyHeaderHeight: () => var_core_value_sig7587,
    getStickyFooterHeight: () => var_core_value_sig5B82,
    subscribeVerticalScroll(var_core_value_sig816B, var_core_value_sigA89B) {
      var var_core_value_sig5020;
      let var_core_value_sig8FB1 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigF2D0(var_core_value_sig816B);
      if (!var_core_value_sig8FB1) return;
      let var_core_value_sig3D4B = var_core_value_sig8FB1.getState(),
        var_core_value_sigCD77 = var_core_value_sig3D4B.activeViewId,
        var_core_value_sig9F28 = var_core_value_sigCD77 ? ((var_core_value_sig5020 = var_core_value_sig3D4B.scrollState[var_core_value_sigCD77]) == null ? undefined : var_core_value_sig5020.y) ?? 0 : 0,
        var_core_value_sig8A50 = var_core_value_sig8FB1.state$["subscribe"](var_core_value_sig4161 => {
          var var_core_value_sig7580;
          let var_core_value_sig1F18 = var_core_value_sig4161.activeViewId,
            var_core_value_sigD5A0 = var_core_value_sig1F18 ? ((var_core_value_sig7580 = var_core_value_sig4161.scrollState[var_core_value_sig1F18]) == null ? undefined : var_core_value_sig7580.y) ?? 0 : 0;
          if (var_core_value_sig1F18 !== var_core_value_sigCD77) {
            var_core_value_sigCD77 = var_core_value_sig1F18, var_core_value_sig9F28 = var_core_value_sigD5A0;
            return;
          }
          var_core_value_sigD5A0 !== var_core_value_sig9F28 && (var_core_value_sig9F28 = var_core_value_sigD5A0, !var_core_value_sigCF7E.has(var_core_value_sig816B.childUnitId) && var_core_value_sigA89B(var_core_value_sigD5A0));
        });
      return var_core_value_sig9BBC(() => var_core_value_sig8A50.unsubscribe());
    },
    handleWheel(var_core_value_sig8AF9) {
      if (var_core_value_sig8AF9.source !== "host-scroll-sync" && var_core_value_sig8AF9.source !== "print-capture" && Du(var_core_value_sig8AF9.layout, var_core_value_sig8AF9.event)) return false;
      let var_core_value_sigCF441 = var_core_value_sig8AF9.runtimeScope["injector"] ?? var_core_value_sig492E,
        var_core_value_sig020B = var_core_value_sigCF441 !== var_core_value_sig492E && var_core_value_sigCF441.has(var_core_value_sigDE56) ? var_core_value_sigCF441.get(var_core_value_sigDE56) : var_core_value_sigFF0E,
        var_core_value_sig091A = var_core_value_sig8AF9.source === "print-capture";
      var_core_value_sig091A && var_core_value_sigCF7E.add(var_core_value_sig8AF9.childUnitId);
      try {
        if (var_core_value_sig8AF9.viewportScrollX != null) {
          let var_core_value_sig5410 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigF2D0(var_core_value_sig8AF9),
            var_core_value_sig492F = var_core_value_sig5410 == null ? undefined : var_core_value_sig5410.getState(),
            var_core_value_sig8EA0 = var_core_value_sig492F == null ? undefined : var_core_value_sig492F.activeViewId;
          if (var_core_value_sig5410 && var_core_value_sig492F && var_core_value_sig8EA0) {
            let var_core_value_sigFBA4 = var_core_value_sig492F.scrollState[var_core_value_sig8EA0] ?? {
              x: 0,
              y: 0
            };
            return var_core_value_sig5410.setScrollState(var_core_value_sig8EA0, {
              x: var_core_value_sig8AF9.viewportScrollX,
              y: var_core_value_sig8AF9.viewportScrollY ?? var_core_value_sigFBA4.y
            }), true;
          }
        }
        return (var_core_value_sig020B == null ? undefined : var_core_value_sig020B.handleRegisteredWheel(var_core_value_sig8AF9.childUnitId, mh(var_core_value_sig8AF9.event, var_core_value_sig8AF9.viewportScrollY))) ?? false;
      } finally {
        var_core_value_sig091A && var_core_value_sigCF7E.delete(var_core_value_sig8AF9.childUnitId);
      }
    }
  };
  function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigF2D0(var_core_value_sigC45A) {
    var var_core_value_sig8A05;
    let var_core_value_sig431F = ((var_core_value_sig8A05 = var_core_value_sigC45A.runtimeScope) == null ? undefined : var_core_value_sig8A05.injector) ?? var_core_value_sig492E;
    return var_core_value_sig431F !== var_core_value_sig492E && var_core_value_sig431F.has(var_core_value_sigCB4E) ? var_core_value_sig431F.get(var_core_value_sigCB4E) : var_core_value_sig0EA6;
  }
}
function mh(var_core_value_sig6A67, var_core_value_sig18F7) {
  return {
    deltaX: var_core_value_sig6A67.deltaX,
    deltaY: var_core_value_sig6A67.deltaY,
    deltaMode: var_core_value_sig6A67.deltaMode,
    clientX: var_core_value_sig6A67.clientX,
    clientY: var_core_value_sig6A67.clientY,
    shiftKey: var_core_value_sig6A67.shiftKey,
    viewportScrollY: var_core_value_sig18F7
  };
}
function hh(var_core_value_sig8565, var_core_value_sig80D3, var_core_value_sig1D92) {
  let var_core_value_sig82BC = var_core_value_sig8565.descriptor["displayTarget"];
  return var_core_value_sig1D92(var_core_value_sig82BC), var_core_value_sig80D3.onCommandExecuted(var_core_value_sig855C => {
    if (!gh(var_core_value_sig855C)) return;
    let {
      params: var_core_value_sig222E
    } = var_core_value_sig855C;
    if (var_core_value_sig222E.unitId !== var_core_value_sig8565.hostUnitId || var_core_value_sig222E.descriptor["embedId"] !== var_core_value_sig8565.embedId) return;
    let var_core_value_sig3A07 = var_core_value_sig222E.descriptor["displayTarget"];
    var_core_value_sigC43E(var_core_value_sig82BC ?? {}, var_core_value_sig3A07 ?? {}) || (var_core_value_sig82BC = var_core_value_sig3A07, var_core_value_sig1D92(var_core_value_sig3A07));
  });
}
function gh(var_core_value_sig94A4) {
  return var_core_value_sig94A4.id === var_core_value_sigE2AE.id && var_core_value_sig94A4.params !== undefined && "unitId" in var_core_value_sig94A4.params && typeof var_core_value_sig94A4.params["unitId"] == "string" && "descriptor" in var_core_value_sig94A4.params && typeof var_core_value_sig94A4.params["descriptor"] == "object" && var_core_value_sig94A4.params["descriptor"] !== null && "embedId" in var_core_value_sig94A4.params["descriptor"] && typeof var_core_value_sig94A4.params["descriptor"].embedId == "string";
}
function _h(var_core_value_sig7A87, var_core_value_sigE788) {
  return {
    childType: var_core_value_sigC0F3.UNIVER_BASE,
    supportedLayouts: ["tab-peer", "docs-sticky-base", "scroll-contained"],
    beforeDeactivate: vh,
    mount: var_core_value_sigE7EB => yh(var_core_value_sigE7EB, var_core_value_sig7A87, var_core_value_sigE788)
  };
}
function vh(var_core_value_sig1632) {
  var var_core_value_sigC27E1;
  (var_core_value_sigC27E1 = var_core_value_sig1632.runtimeScope["commandService"]) == null || var_core_value_sigC27E1.syncExecuteCommand(var_core_value_sig79F0.id, {
    commit: false
  });
}
function yh(var_core_value_sig1176, var_core_value_sig7788, var_core_value_sigD239) {
  let var_core_value_sig6ECD = var_core_value_sig1176.injector["get"](var_core_value_sig5DF8).getUnit(var_core_value_sig1176.childUnitId, var_core_value_sigC0F3.UNIVER_BASE);
  if (!var_core_value_sig6ECD) return;
  let var_core_value_sigA0DF = new var_core_value_sig1E5C(),
    var_core_value_sig6E07 = new var_core_value_sig4F8B(),
    var_core_value_sigDE9A = new var_core_value_sigC7A3(var_core_value_sigA0DF),
    var_core_value_sigD183 = new var_core_value_sigC084(),
    var_core_value_sig0B20 = Dh(var_core_value_sig1176, var_core_value_sigA0DF, var_core_value_sig6E07, var_core_value_sigDE9A);
  if (!var_core_value_sig0B20) {
    var_core_value_sigD183.dispose(), var_core_value_sigDE9A.dispose(), var_core_value_sig6E07.dispose(), var_core_value_sigA0DF.dispose();
    return;
  }
  let var_core_value_sigADD2 = Mh(var_core_value_sig1176),
    var_core_value_sig6D43 = var_core_value_sig0B20.get(var_core_value_sigCBC5),
    var_core_value_sig6333 = () => {
      var var_core_value_sig6125;
      return new Set(((var_core_value_sig6125 = var_core_value_sig6D43.get()) == null ? undefined : var_core_value_sig6125.getItems(var_core_value_sig6ECD.getUnitId()).map(var_core_value_sig81B2 => var_core_value_sig81B2.id)) ?? []);
    };
  kh(var_core_value_sigA0DF, var_core_value_sig6ECD, var_core_value_sigADD2, var_core_value_sig1176.descriptor["displayTarget"], var_core_value_sig6333());
  let var_core_value_sig43B6 = hh(var_core_value_sig1176, var_core_value_sig7788, var_core_value_sig5781 => jh(var_core_value_sigA0DF, var_core_value_sig6ECD, var_core_value_sig5781, var_core_value_sig6333())),
    var_core_value_sig9368 = Nh(var_core_value_sig0B20, var_core_value_sigA0DF, var_core_value_sig6E07, var_core_value_sigDE9A, var_core_value_sigADD2, var_core_value_sigD183, var_core_value_sig1176.descriptor["mode"] === "readonly", var_core_value_sig1176.runtimeScope["roots"].popup);
  xh(var_core_value_sig1176, var_core_value_sig9368);
  let var_core_value_sigD4F7 = var_core_value_sigD239.register({
      unitId: var_core_value_sig1176.childUnitId,
      roots: bh(var_core_value_sig1176),
      clipboardService: var_core_value_sig9368.get(var_core_value_sigA1A5),
      commandService: var_core_value_sig9368.get(var_core_value_sigDFF6),
      editorService: var_core_value_sigDE9A,
      stateService: var_core_value_sigA0DF
    }),
    var_core_value_sigFFBF = var_core_value_sig1176.injector["get"](Bf),
    var_core_value_sigF48B = "",
    var_core_value_sigA72A = var_core_value_sigA0DF.state$["subscribe"](var_core_value_sig13AB => {
      let var_core_value_sig7A4A = var_core_value_sig13AB.activeViewId ? [...(var_core_value_sig13AB.collapsedGroupPaths[var_core_value_sig13AB.activeViewId] ?? [])].sort().join("\x00") : "",
        var_core_value_sigB7E2 = (var_core_value_sig13AB.activeTableId ?? "") + "\x00" + (var_core_value_sig13AB.activeViewId ?? "") + "\x00" + var_core_value_sig7A4A;
      var_core_value_sigB7E2 !== var_core_value_sigF48B && (var_core_value_sigF48B = var_core_value_sigB7E2, var_core_value_sigFFBF.notifyContentSizeChanged(var_core_value_sig1176.hostUnitId, var_core_value_sig1176.embedId));
    }),
    var_core_value_sig87EC = Sh(var_core_value_sig1176),
    var_core_value_sigE822 = Sl(var_core_value_sig87EC),
    var_core_value_sigE04D = Ch(var_core_value_sig1176, var_core_value_sig9368),
    var_core_value_sigAF7A = var_core_value_sig1176.injector["get"](var_core_value_sig5DF8),
    var_core_value_sigA783 = var_core_value_sigAF7A.getCurrentUnitOfType(var_core_value_sigC0F3.UNIVER_BASE);
  return var_core_value_sigAF7A.setCurrentUnitForType(var_core_value_sig1176.childUnitId), var_core_value_sig87EC.dataset["embedChildRenderUnitId"] = var_core_value_sig1176.childUnitId, var_core_value_sig87EC.dataset["embedChildRenderMode"] = "base-workbench", var_core_value_sigE822.render(var_core_value_sig6F03(fl, {
    injector: var_core_value_sig9368,
    mountContainer: var_core_value_sig1176.runtimeScope["roots"].popup,
    embedId: var_core_value_sig1176.embedId,
    children: var_core_value_sig6F03(var_core_value_sig6AB5, {})
  })), var_core_value_sig9BBC(() => {
    var_core_value_sigD4F7.dispose(), var_core_value_sig43B6.dispose(), var_core_value_sigA72A.unsubscribe(), var_core_value_sigE04D.dispose(), Cl(var_core_value_sigE822), var_core_value_sigA783 && var_core_value_sigAF7A.setCurrentUnitForType(var_core_value_sigA783.getUnitId()), var_core_value_sigD183.dispose(), var_core_value_sigDE9A.dispose(), var_core_value_sig6E07.dispose(), var_core_value_sigA0DF.dispose(), var_core_value_sig9368.dispose(), var_core_value_sig87EC.isConnected && (var_core_value_sig87EC.removeAttribute("data-embed-child-render-unit-id"), var_core_value_sig87EC.removeAttribute("data-embed-child-render-mode"));
  });
}
function bh(var_core_value_sig00C9) {
  let var_core_value_sig01A4 = new Set();
  return var_core_value_sig01A4.add(var_core_value_sig00C9.runtimeScope["roots"].root), var_core_value_sig01A4.add(var_core_value_sig00C9.runtimeScope["roots"].content), var_core_value_sig01A4.add(var_core_value_sig00C9.runtimeScope["roots"].overlay), var_core_value_sig01A4.add(var_core_value_sig00C9.runtimeScope["roots"].popup), var_core_value_sig00C9.runtimeScope["roots"].canvas && var_core_value_sig01A4.add(var_core_value_sig00C9.runtimeScope["roots"].canvas), var_core_value_sig00C9.runtimeScope["roots"].menuSlot && var_core_value_sig01A4.add(var_core_value_sig00C9.runtimeScope["roots"].menuSlot), [...var_core_value_sig01A4];
}
function xh(var_core_value_sig8C95, var_core_value_sig8BED) {
  var_core_value_sig8C95.runtimeScope["injector"] = var_core_value_sig8BED, var_core_value_sig8C95.runtimeScope["instanceService"] = var_core_value_sig8BED.get(var_core_value_sig5DF8), var_core_value_sig8C95.runtimeScope["commandService"] = var_core_value_sig8BED.get(var_core_value_sigDFF6);
}
function Sh(var_core_value_sigB415) {
  var var_core_value_sigD118, var_core_value_sigA840, var_core_value_sigA72C;
  return ((var_core_value_sigD118 = var_core_value_sigB415.runtimeScope) == null || (var_core_value_sigD118 = var_core_value_sigD118.roots) == null ? undefined : var_core_value_sigD118.content) ?? ((var_core_value_sigA840 = var_core_value_sigB415.renderScope) == null ? undefined : var_core_value_sigA840.contentRoot) ?? ((var_core_value_sigA72C = var_core_value_sigB415.renderScope) == null ? undefined : var_core_value_sigA72C.rootElement) ?? document;
}
function Ch(var_core_value_sig230C, var_core_value_sig2515) {
  let var_core_value_sig01B91 = false,
    var_core_value_sigC9D6 = 0,
    var_core_value_sig11FD = var_core_value_sig9BBC(() => {}),
    var_core_value_sigE7CD,
    var_core_value_sigBC1E = () => {
      if (var_core_value_sig01B91) return;
      let var_core_value_sigD477 = () => {
          var_core_value_sigC9D6 = window.requestAnimationFrame(var_core_value_sigBC1E);
        },
        var_core_value_sig6149 = wh(var_core_value_sig230C);
      if (!Th(var_core_value_sig6149)) {
        var_core_value_sig230C.container["dataset"].embedChildRenderStatus = "waiting-base-canvas-root", var_core_value_sigD477();
        return;
      }
      if (var_core_value_sigE7CD === var_core_value_sig6149 && var_core_value_sig6149.querySelector("canvas")) return;
      var_core_value_sig11FD.dispose();
      let var_core_value_sigEB82 = var_core_value_sig230C.injector["get"](var_core_value_sigE391),
        var_core_value_sig843F;
      try {
        var_core_value_sig843F = Kc(var_core_value_sigEB82, var_core_value_sig230C.childUnitId, var_core_value_sig2515);
      } catch (var_core_value_sigA0A5) {
        var_core_value_sig230C.container["dataset"].embedChildRenderError = var_core_value_sigA0A5 instanceof Error ? var_core_value_sigA0A5.message : String(var_core_value_sigA0A5), var_core_value_sig843F = undefined;
      }
      if (!var_core_value_sig843F) {
        var_core_value_sig230C.container["dataset"].embedChildRenderStatus = "retrying-base-child-render", var_core_value_sigE7CD = undefined, var_core_value_sigD477();
        return;
      }
      delete var_core_value_sig230C.container["dataset"].embedChildRenderError, var_core_value_sig6149.dataset["embedChildRenderUnitId"] = var_core_value_sig230C.childUnitId, var_core_value_sig843F.engine["mount"](var_core_value_sig6149), Jc(var_core_value_sig843F, {
        activate: Eh(var_core_value_sig230C)
      });
      let var_core_value_sig9FB7 = Hc(var_core_value_sig843F, var_core_value_sig6149, {
        activate: false
      });
      var_core_value_sig11FD = var_core_value_sig9BBC(() => {
        var_core_value_sig9FB7.dispose();
        try {
          var var_core_value_sig10AA, var_core_value_sigE6D0;
          (var_core_value_sig10AA = (var_core_value_sigE6D0 = var_core_value_sig843F.engine).unmount) == null || var_core_value_sig10AA.call(var_core_value_sigE6D0);
        } catch {}
        var_core_value_sigEB82.removeRender(var_core_value_sig230C.childUnitId), var_core_value_sig6149.removeAttribute("data-embed-child-render-unit-id");
      }), var_core_value_sigE7CD = var_core_value_sig6149, var_core_value_sig230C.container["dataset"].embedChildRenderStatus = "mounted", var_core_value_sigD477();
    };
  return var_core_value_sigC9D6 = window.requestAnimationFrame(var_core_value_sigBC1E), var_core_value_sig9BBC(() => {
    var_core_value_sig01B91 = true, window.cancelAnimationFrame(var_core_value_sigC9D6), var_core_value_sig11FD.dispose();
  });
}
function wh(var_core_value_sig6C0E) {
  return var_core_value_sigC4E6({
    unitId: var_core_value_sig6C0E.childUnitId,
    scope: Sh(var_core_value_sig6C0E)
  });
}
function Th(var_core_value_sig38F0) {
  return !!var_core_value_sig38F0 && var_core_value_sig38F0.isConnected && var_core_value_sig38F0.clientWidth > 0 && var_core_value_sig38F0.clientHeight > 0;
}
function Eh(var_core_value_sigF56E) {
  return true;
}
function Dh(var_core_value_sig0037, var_core_value_sigB5AB, var_core_value_sig435B, var_core_value_sig523B) {
  let var_core_value_sig49B8 = var_core_value_sig0037.injector["get"](var_core_value_sig5DF8),
    var_core_value_sigEB75 = var_core_value_sig49B8.getUnit(var_core_value_sig0037.childUnitId, var_core_value_sig0037.childType);
  if (!var_core_value_sigEB75) return;
  let var_core_value_sig13B7 = Oh(var_core_value_sig49B8, var_core_value_sig0037, var_core_value_sigEB75),
    var_core_value_sigAE27 = Ph(var_core_value_sig0037.injector["get"](var_core_value_sigDFF6), var_core_value_sigB5AB, var_core_value_sig435B, var_core_value_sig523B, var_core_value_sig0037.injector["get"](var_core_value_sig4DA3), var_core_value_sig0037.injector["get"](var_core_value_sig27CF), var_core_value_sig49B8, var_core_value_sig0037.childUnitId),
    var_core_value_sig00E2 = new Map([[var_core_value_sig5DF8, var_core_value_sig13B7], [var_core_value_sigDFF6, var_core_value_sigAE27], [var_core_value_sig58D3, var_core_value_sig9334(Sh(var_core_value_sig0037))]]);
  return var_core_value_sig0037.injector["has"](var_core_value_sig7B6F) && var_core_value_sig00E2.set(var_core_value_sig7B6F, rc(var_core_value_sig0037.injector["get"](var_core_value_sig7B6F))), ac(var_core_value_sig0037.injector, var_core_value_sig00E2);
}
function Oh(var_core_value_sig6012, var_core_value_sigB095, var_core_value_sig3943) {
  return {
    unitAdded$: var_core_value_sig6012.unitAdded$,
    unitDisposed$: var_core_value_sig6012.unitDisposed$,
    focused$: var_core_value_sigDA93(var_core_value_sig3943.getUnitId()),
    getTypeOfUnitAdded$: var_core_value_sig6012.getTypeOfUnitAdded$["bind"](var_core_value_sig6012),
    __addUnit: var_core_value_sig6012.__addUnit["bind"](var_core_value_sig6012),
    getTypeOfUnitDisposed$: var_core_value_sig6012.getTypeOfUnitDisposed$["bind"](var_core_value_sig6012),
    focusUnit: var_core_value_sigB7A4 => {
      var_core_value_sigB7A4 !== null && var_core_value_sigB7A4 !== var_core_value_sigB095.childUnitId && var_core_value_sig6012.focusUnit(var_core_value_sigB7A4);
    },
    getFocusedUnit: () => var_core_value_sig3943,
    getCurrentUnitOfType: var_core_value_sig295F => var_core_value_sig295F === var_core_value_sigB095.childType ? var_core_value_sig3943 : var_core_value_sig6012.getCurrentUnitOfType(var_core_value_sig295F),
    setCurrentUnitForType: var_core_value_sigE36B => {
      var_core_value_sigE36B !== var_core_value_sigB095.childUnitId && var_core_value_sig6012.setCurrentUnitForType(var_core_value_sigE36B);
    },
    getCurrentTypeOfUnit$: var_core_value_sigDA3B => var_core_value_sigDA3B === var_core_value_sigB095.childType ? var_core_value_sigDA93(var_core_value_sig3943) : var_core_value_sig6012.getCurrentTypeOfUnit$(var_core_value_sigDA3B),
    createUnit: var_core_value_sig6012.createUnit["bind"](var_core_value_sig6012),
    getUnitCreateOptions: var_core_value_sig6012.getUnitCreateOptions["bind"](var_core_value_sig6012),
    disposeUnit: var_core_value_sig6012.disposeUnit["bind"](var_core_value_sig6012),
    registerCtorForType: var_core_value_sig6012.registerCtorForType["bind"](var_core_value_sig6012),
    getUnit: var_core_value_sig6012.getUnit["bind"](var_core_value_sig6012),
    getAllUnitsForType: var_core_value_sig9E32 => var_core_value_sig9E32 === var_core_value_sigB095.childType ? [var_core_value_sig3943] : var_core_value_sig6012.getAllUnitsForType(var_core_value_sig9E32),
    getUnitType: var_core_value_sig6012.getUnitType["bind"](var_core_value_sig6012)
  };
}
function kh(var_core_value_sig859E, var_core_value_sigB844, var_core_value_sigF32B = "workbench", var_core_value_sigE916, var_core_value_sig9704) {
  let {
    dashboardId: var_core_value_sig9661,
    tableId: var_core_value_sig4D01,
    viewId: var_core_value_sig24CA
  } = Ah(var_core_value_sigB844, var_core_value_sigE916, var_core_value_sig9704);
  var_core_value_sig4D01 && var_core_value_sig859E.activateTable(var_core_value_sig4D01), var_core_value_sig24CA && var_core_value_sig859E.activateView(var_core_value_sig24CA), var_core_value_sig9661 && var_core_value_sig859E.activateDashboard(var_core_value_sig9661), var_core_value_sig859E.setLeftSidebarVisible(var_core_value_sigF32B === "workbench");
}
function Ah(var_core_value_sigA96A, var_core_value_sigBE54, var_core_value_sig9D54) {
  var var_core_value_sigE7A0, var_core_value_sig102F, var_core_value_sigFD11, var_core_value_sig1BC5, var_core_value_sig4031;
  let var_core_value_sig601B = var_core_value_sigA96A.getSnapshot(),
    var_core_value_sig10C9 = var_core_value_sigBE54 == null ? undefined : var_core_value_sigBE54.tableId,
    var_core_value_sigF759 = var_core_value_sig10C9 && (var_core_value_sigE7A0 = var_core_value_sig601B.tables) != null && var_core_value_sigE7A0[var_core_value_sig10C9] ? var_core_value_sig10C9 : ((var_core_value_sig102F = var_core_value_sig601B.tableOrder) == null ? undefined : var_core_value_sig102F.find(var_core_value_sig26EC1 => {
      var var_core_value_sigF226;
      return !!((var_core_value_sigF226 = var_core_value_sig601B.tables) != null && var_core_value_sigF226[var_core_value_sig26EC1]);
    })) ?? Object.keys(var_core_value_sig601B.tables ?? {})[0] ?? "",
    var_core_value_sigE996 = (var_core_value_sigFD11 = var_core_value_sig601B.tables) == null ? undefined : var_core_value_sigFD11[var_core_value_sigF759],
    var_core_value_sig31C5 = var_core_value_sigBE54 == null ? undefined : var_core_value_sigBE54.viewId,
    var_core_value_sig8D13 = var_core_value_sig31C5 && var_core_value_sigE996 != null && (var_core_value_sig1BC5 = var_core_value_sigE996.views) != null && var_core_value_sig1BC5[var_core_value_sig31C5] ? var_core_value_sig31C5 : var_core_value_sigE996 == null || (var_core_value_sig4031 = var_core_value_sigE996.viewOrder) == null ? undefined : var_core_value_sig4031.find(var_core_value_sig4773 => {
      var var_core_value_sigB643;
      return !!((var_core_value_sigB643 = var_core_value_sigE996.views) != null && var_core_value_sigB643[var_core_value_sig4773]);
    }),
    var_core_value_sig6228 = var_core_value_sigBE54 != null && var_core_value_sigBE54.dashboardId && var_core_value_sig9D54 != null && var_core_value_sig9D54.has(var_core_value_sigBE54.dashboardId) ? var_core_value_sigBE54.dashboardId : undefined;
  return {
    tableId: var_core_value_sigF759,
    ...(var_core_value_sig8D13 ? {
      viewId: var_core_value_sig8D13
    } : {}),
    ...(var_core_value_sig6228 ? {
      dashboardId: var_core_value_sig6228
    } : {})
  };
}
function jh(var_core_value_sig3CD3, var_core_value_sig6351, var_core_value_sig84A1, var_core_value_sig85BA) {
  let var_core_value_sig1373 = Ah(var_core_value_sig6351, var_core_value_sig84A1, var_core_value_sig85BA),
    var_core_value_sigE09A = var_core_value_sig3CD3.getState();
  var_core_value_sig1373.tableId && (var_core_value_sigE09A.activeTableId !== var_core_value_sig1373.tableId || !var_core_value_sig1373.dashboardId && var_core_value_sigE09A.activeDashboardId) && var_core_value_sig3CD3.activateTable(var_core_value_sig1373.tableId), var_core_value_sig1373.viewId && var_core_value_sig3CD3.getState().activeViewId !== var_core_value_sig1373.viewId && var_core_value_sig3CD3.activateView(var_core_value_sig1373.viewId), var_core_value_sig1373.dashboardId && var_core_value_sig3CD3.getState().activeDashboardId !== var_core_value_sig1373.dashboardId && var_core_value_sig3CD3.activateDashboard(var_core_value_sig1373.dashboardId);
}
function Mh(var_core_value_sigDD69) {
  return var_core_value_sigDD69.renderScope["fullscreen"] ? "fullscreen" : var_core_value_sigDD69.renderScope["mode"] === "float" ? "content-only" : "workbench";
}
function Nh(var_core_value_sigF705, var_core_value_sig581D, var_core_value_sig5475 = new var_core_value_sig4F8B(), var_core_value_sig0027 = new var_core_value_sigC7A3(var_core_value_sig581D), var_core_value_sigC95E = "workbench", var_core_value_sig8C6B, var_core_value_sig0D7B = false, var_core_value_sigF568) {
  let var_core_value_sigE30B = Rh(var_core_value_sigF705.get(var_core_value_sig7B6F), var_core_value_sigC95E),
    var_core_value_sig89A0 = Ph(var_core_value_sigF705.get(var_core_value_sigDFF6), var_core_value_sig581D, var_core_value_sig5475, var_core_value_sig0027, var_core_value_sigF705.get(var_core_value_sig4DA3), var_core_value_sigF705.get(var_core_value_sig27CF), var_core_value_sigF705.get(var_core_value_sig5DF8), undefined, var_core_value_sig0D7B),
    var_core_value_sigF5FE = new Map([[var_core_value_sigCB4E, var_core_value_sig581D], [var_core_value_sig00BD, var_core_value_sig5475], [var_core_value_sig5732, var_core_value_sig0027], [var_core_value_sigDFF6, var_core_value_sig89A0], [var_core_value_sig7B6F, var_core_value_sigE30B], [var_core_value_sig58D3, var_core_value_sigF705.get(var_core_value_sig58D3)], [var_core_value_sigA2C1, var_core_value_sigB00C(var_core_value_sigF568)]]);
  var_core_value_sig8C6B && var_core_value_sigF5FE.set(var_core_value_sigDE56, var_core_value_sig8C6B);
  let var_core_value_sig7144 = ac(var_core_value_sigF705, var_core_value_sigF5FE);
  return var_core_value_sig7144.add([var_core_value_sigA1A5, {
    useClass: var_core_value_sig2747
  }]), var_core_value_sig7144;
}
function Ph(var_core_value_sig42BE, var_core_value_sigA9F2, var_core_value_sig6AD2, var_core_value_sigF86A, var_core_value_sigEE6A, var_core_value_sig2A37, var_core_value_sig652D, var_core_value_sigECEC, var_core_value_sig43EC = false) {
  let var_core_value_sig407E1 = {
    disposed: var_core_value_sig42BE.disposed["bind"](var_core_value_sig42BE),
    hasCommand: var_core_value_sig42BE.hasCommand["bind"](var_core_value_sig42BE),
    registerCommand: var_core_value_sig42BE.registerCommand["bind"](var_core_value_sig42BE),
    unregisterCommand: var_core_value_sig42BE.unregisterCommand["bind"](var_core_value_sig42BE),
    registerMultipleCommand: var_core_value_sig42BE.registerMultipleCommand["bind"](var_core_value_sig42BE),
    executeCommand: async (...var_core_value_sigF92F) => {
      if (var_core_value_sigF92F[0] === var_core_value_sig0820.id && var_core_value_sig652D) return var_core_value_sigD587({
        commandService: var_core_value_sig407E1,
        instanceService: var_core_value_sig652D,
        projectionService: var_core_value_sigEE6A,
        stateService: var_core_value_sigA9F2
      }, var_core_value_sigF92F[1]);
      let var_core_value_sig2346 = Fh(var_core_value_sigF92F[0], var_core_value_sigF92F[1], var_core_value_sigA9F2, var_core_value_sig6AD2, var_core_value_sig652D, var_core_value_sigECEC);
      if (var_core_value_sig2346 !== undefined) return var_core_value_sig2346;
      let var_core_value_sig579A = Ih(var_core_value_sigF92F[0], var_core_value_sigF92F[1], var_core_value_sigF86A, var_core_value_sig2A37, var_core_value_sig652D, var_core_value_sigECEC, var_core_value_sig43EC);
      if (var_core_value_sig579A !== undefined) return var_core_value_sig579A;
      let var_core_value_sig7E16 = var_core_value_sigECEC ? var_core_value_sig652D == null ? undefined : var_core_value_sig652D.getCurrentUnitOfType(var_core_value_sigC0F3.UNIVER_BASE) : undefined;
      try {
        return var_core_value_sigECEC && (var_core_value_sig652D == null || var_core_value_sig652D.setCurrentUnitForType(var_core_value_sigECEC)), await var_core_value_sig42BE.executeCommand(var_core_value_sigF92F[0], var_core_value_sigF92F[1], var_core_value_sigF92F[2]);
      } finally {
        var_core_value_sig7E16 && (var_core_value_sig652D == null || var_core_value_sig652D.setCurrentUnitForType(var_core_value_sig7E16.getUnitId()));
      }
    },
    syncExecuteCommand: (...var_core_value_sigA691) => {
      if (var_core_value_sigA691[0] === var_core_value_sig0820.id && var_core_value_sig652D) return var_core_value_sigD587({
        commandService: var_core_value_sig407E1,
        instanceService: var_core_value_sig652D,
        projectionService: var_core_value_sigEE6A,
        stateService: var_core_value_sigA9F2
      }, var_core_value_sigA691[1]);
      let var_core_value_sig3C23 = Fh(var_core_value_sigA691[0], var_core_value_sigA691[1], var_core_value_sigA9F2, var_core_value_sig6AD2, var_core_value_sig652D, var_core_value_sigECEC);
      if (var_core_value_sig3C23 !== undefined) return var_core_value_sig3C23;
      let var_core_value_sigDAE6 = Ih(var_core_value_sigA691[0], var_core_value_sigA691[1], var_core_value_sigF86A, var_core_value_sig2A37, var_core_value_sig652D, var_core_value_sigECEC, var_core_value_sig43EC);
      if (var_core_value_sigDAE6 !== undefined) return var_core_value_sigDAE6;
      let var_core_value_sigDD81 = var_core_value_sigECEC ? var_core_value_sig652D == null ? undefined : var_core_value_sig652D.getCurrentUnitOfType(var_core_value_sigC0F3.UNIVER_BASE) : undefined;
      try {
        return var_core_value_sigECEC && (var_core_value_sig652D == null || var_core_value_sig652D.setCurrentUnitForType(var_core_value_sigECEC)), var_core_value_sig42BE.syncExecuteCommand(var_core_value_sigA691[0], var_core_value_sigA691[1], var_core_value_sigA691[2]);
      } finally {
        var_core_value_sigDD81 && (var_core_value_sig652D == null || var_core_value_sig652D.setCurrentUnitForType(var_core_value_sigDD81.getUnitId()));
      }
    },
    onCommandExecuted: var_core_value_sig42BE.onCommandExecuted["bind"](var_core_value_sig42BE),
    beforeCommandExecuted: var_core_value_sig42BE.beforeCommandExecuted["bind"](var_core_value_sig42BE),
    onMutationExecutedForCollab: var_core_value_sig42BE.onMutationExecutedForCollab["bind"](var_core_value_sig42BE)
  };
  return var_core_value_sig407E1;
}
function Fh(var_core_value_sig54ED, var_core_value_sig747C, var_core_value_sigA240, var_core_value_sigB5BE, var_core_value_sig3D9D, var_core_value_sigA487) {
  if (var_core_value_sig54ED === var_core_value_sigBC2B.id) {
    let var_core_value_sig3870 = var_core_value_sig747C;
    return var_core_value_sig3870 != null && var_core_value_sig3870.viewId ? (var_core_value_sig3870.tableId && var_core_value_sigA240.activateTable(var_core_value_sig3870.tableId), var_core_value_sigA240.activateView(var_core_value_sig3870.viewId), true) : false;
  }
  if (var_core_value_sig54ED === var_core_value_sig5271.id) {
    let var_core_value_sig13D1 = var_core_value_sig747C;
    if (!(var_core_value_sig13D1 != null && var_core_value_sig13D1.tableId)) return false;
    var_core_value_sigA240.activateTable(var_core_value_sig13D1.tableId);
    let var_core_value_sigECFC = var_core_value_sig13D1.unitId ? var_core_value_sig3D9D == null ? undefined : var_core_value_sig3D9D.getUnit(var_core_value_sig13D1.unitId, var_core_value_sigC0F3.UNIVER_BASE) : var_core_value_sig3D9D == null ? undefined : var_core_value_sig3D9D.getCurrentUnitOfType(var_core_value_sigC0F3.UNIVER_BASE),
      var_core_value_sig5E62 = (var_core_value_sigECFC == null ? undefined : var_core_value_sigECFC.getUnitId()) ?? var_core_value_sigA487;
    var_core_value_sig5E62 && (var_core_value_sig3D9D == null || var_core_value_sig3D9D.setCurrentUnitForType(var_core_value_sig5E62), var_core_value_sig3D9D == null || var_core_value_sig3D9D.focusUnit(var_core_value_sig5E62));
    let var_core_value_sig3B89 = var_core_value_sigECFC == null ? undefined : var_core_value_sigECFC.getSnapshot().tables[var_core_value_sig13D1.tableId],
      var_core_value_sig4B55 = var_core_value_sig3B89 == null ? undefined : var_core_value_sig3B89.viewOrder["find"](var_core_value_sig8E91 => var_core_value_sig3B89.views[var_core_value_sig8E91]);
    return var_core_value_sig4B55 && var_core_value_sigA240.activateView(var_core_value_sig4B55), true;
  }
  if (var_core_value_sig54ED === var_core_value_sig4685.id) {
    let var_core_value_sig9E69 = var_core_value_sig747C;
    return var_core_value_sig9E69 != null && var_core_value_sig9E69.viewId ? (var_core_value_sigA240.setScrollState(var_core_value_sig9E69.viewId, {
      x: var_core_value_sig9E69.x ?? 0,
      y: var_core_value_sig9E69.y ?? 0
    }), true) : false;
  }
  if (var_core_value_sig54ED === var_core_value_sig7BE9.id) {
    let var_core_value_sig432A = var_core_value_sig747C;
    return !(var_core_value_sig432A != null && var_core_value_sig432A.viewId) || typeof var_core_value_sig432A.zoom != "number" ? false : (var_core_value_sigA240.setZoom(var_core_value_sig432A.viewId, var_core_value_sig432A.zoom), true);
  }
  if (var_core_value_sig54ED === var_core_value_sig30EC.id) return var_core_value_sig747C ? (var_core_value_sigA240.clearVirtualRecords(), var_core_value_sigB5BE.openToolbarPanel(var_core_value_sig747C), true) : false;
  if (var_core_value_sig54ED === var_core_value_sig0ED9.id) return var_core_value_sigB5BE.closeToolbarPanel(), true;
  if (var_core_value_sig54ED === var_core_value_sigC127.id) return var_core_value_sig747C ? (var_core_value_sigA240.clearVirtualRecords(), var_core_value_sigB5BE.openContextMenu(var_core_value_sig747C), true) : false;
  if (var_core_value_sig54ED === var_core_value_sig9074.id) return var_core_value_sigB5BE.closeContextMenu(), true;
  if (var_core_value_sig54ED === var_core_value_sigBDA3.id) return var_core_value_sig747C ? (var_core_value_sigB5BE.openActiveEditor(var_core_value_sig747C), true) : false;
  if (var_core_value_sig54ED === var_core_value_sig5061.id) return var_core_value_sigB5BE.closeActiveEditor(), true;
  if (var_core_value_sig54ED === var_core_value_sig1010.id) {
    let var_core_value_sig3B51 = var_core_value_sig747C;
    return var_core_value_sig3B51 != null && var_core_value_sig3B51.recordId ? (var_core_value_sigA240.openRecordDetail(var_core_value_sig3B51.recordId), true) : false;
  }
  if (var_core_value_sig54ED === var_core_value_sigF670.id) return var_core_value_sigA240.closeRecordDetail(), true;
}
function Ih(var_core_value_sig1A25, var_core_value_sigFC471, var_core_value_sig76F1, var_core_value_sig1F92, var_core_value_sig5332, var_core_value_sig56E7, var_core_value_sig7C1E1 = false) {
  if (var_core_value_sig1A25 === var_core_value_sig920C.id) {
    var var_core_value_sigEFBD1;
    if (var_core_value_sig7C1E1 || !Lh(var_core_value_sigFC471)) return false;
    let var_core_value_sig542D = var_core_value_sigFC471.unitId ?? var_core_value_sig56E7 ?? (var_core_value_sig5332 == null || (var_core_value_sigEFBD1 = var_core_value_sig5332.getCurrentUnitOfType(var_core_value_sigC0F3.UNIVER_BASE)) == null ? undefined : var_core_value_sigEFBD1.getUnitId());
    return !var_core_value_sig542D || !var_core_value_sig0A06(var_core_value_sig1F92, var_core_value_sig542D, [var_core_value_sig75D7(var_core_value_sigFC471.tableId), var_core_value_sig635C(var_core_value_sigFC471.tableId, var_core_value_sigFC471.fieldId), var_core_value_sig41DC(var_core_value_sigFC471.tableId, var_core_value_sigFC471.recordId), var_core_value_sigC9E5(var_core_value_sigFC471.tableId, var_core_value_sigFC471.viewId)]) ? false : (var_core_value_sig76F1.startEditingCell({
      tableId: var_core_value_sigFC471.tableId,
      viewId: var_core_value_sigFC471.viewId,
      recordId: var_core_value_sigFC471.recordId,
      fieldId: var_core_value_sigFC471.fieldId,
      initialQuery: var_core_value_sigFC471.initialQuery,
      autoFocus: var_core_value_sigFC471.autoFocus,
      virtual: var_core_value_sigFC471.virtual
    }), true);
  }
  if (var_core_value_sig1A25 === var_core_value_sig79F0.id) return var_core_value_sig76F1.stopEditingCell(), true;
}
function Lh(var_core_value_sig55A8) {
  return typeof var_core_value_sig55A8 == "object" && !!var_core_value_sig55A8 && "tableId" in var_core_value_sig55A8 && typeof var_core_value_sig55A8.tableId == "string" && "viewId" in var_core_value_sig55A8 && typeof var_core_value_sig55A8.viewId == "string" && "recordId" in var_core_value_sig55A8 && typeof var_core_value_sig55A8.recordId == "string" && "fieldId" in var_core_value_sig55A8 && typeof var_core_value_sig55A8.fieldId == "string";
}
function Rh(var_core_value_sig9A1C, var_core_value_sig4C23) {
  return {
    getConfig: var_core_value_sigB225 => {
      let var_core_value_sig8AAB = var_core_value_sig9A1C.getConfig(var_core_value_sigB225);
      return var_core_value_sigB225 === var_core_value_sig528E ? zh(var_core_value_sig8AAB ?? {}, var_core_value_sig4C23) : var_core_value_sig8AAB;
    },
    setConfig: var_core_value_sig9A1C.setConfig["bind"](var_core_value_sig9A1C),
    deleteConfig: var_core_value_sig9A1C.deleteConfig["bind"](var_core_value_sig9A1C),
    subscribeConfigValue$: var_core_value_sig9A1C.subscribeConfigValue$["bind"](var_core_value_sig9A1C)
  };
}
function zh(var_core_value_sigD40E, var_core_value_sigB60A = "workbench") {
  let var_core_value_sig506E;
  return var_core_value_sig506E = var_core_value_sigB60A === "content-only" || var_core_value_sigB60A === "fullscreen" ? {
    header: false,
    headerMenu: false,
    leftSidebar: false,
    footer: false,
    global: true,
    presentation: true
  } : {
    header: true,
    headerMenu: true,
    presentation: false
  }, {
    ...var_core_value_sigD40E,
    workbench: {
      ...(var_core_value_sigD40E.workbench ?? {}),
      ...var_core_value_sig506E,
      route: false,
      fallbackToFirstUnit: true,
      collaborationStatus: false
    }
  };
}
function Bh(var_core_value_sigB7A1) {
  var var_core_value_sig9897;
  if (var_core_value_sigB7A1.renderScope["fullscreen"] && var_core_value_sigB7A1.runtimeScope["roots"].menuSlot) return var_core_value_sigB7A1.runtimeScope["roots"].menuSlot;
  let var_core_value_sig834D = var_core_value_sigB7A1.runtimeScope["roots"].overlay ?? var_core_value_sigB7A1.renderScope["overlayRoot"] ?? var_core_value_sigB7A1.renderScope["rootElement"],
    var_core_value_sig20BC = ((var_core_value_sig9897 = var_core_value_sig834D.parentElement) == null ? undefined : var_core_value_sig9897.dataset["uComp"]) === "embed-float-dom-chrome" ? var_core_value_sig834D.parentElement : undefined;
  if (!var_core_value_sig20BC || !var_core_value_sigB7A1.embedId || !var_core_value_sig20BC.dataset["embedId"] || var_core_value_sig20BC.dataset["embedId"] === var_core_value_sigB7A1.embedId) return var_core_value_sig20BC ?? var_core_value_sig834D;
  let var_core_value_sig7CA2 = var_core_value_sigB7A1.renderScope["rootElement"].ownerDocument;
  return Array.from(var_core_value_sig7CA2.querySelectorAll("[data-u-comp=\x22embed-float-dom-chrome\x22]")).find(var_core_value_sigE82A => var_core_value_sigE82A.dataset["embedId"] === var_core_value_sigB7A1.embedId) ?? var_core_value_sig834D;
}
function Vh(var_core_value_sigB74A) {
  let var_core_value_sig6BE6 = Bh(var_core_value_sigB74A),
    var_core_value_sig28F3 = var_core_value_sigB74A.renderScope["rootElement"].ownerDocument["createElement"]("div");
  return var_core_value_sig28F3.dataset["embedFloatingMenuEntry"] = var_core_value_sigB74A.descriptor["entry"], var_core_value_sig28F3.className = "univer-pointer-events-none", var_core_value_sig28F3.addEventListener("pointerdown", Hh), var_core_value_sig28F3.addEventListener("mousedown", Hh), Uh(var_core_value_sig28F3), var_core_value_sig6BE6.appendChild(var_core_value_sig28F3), {
    menu: var_core_value_sig28F3,
    menuRoot: var_core_value_sig6BE6,
    portalContainer: var_core_value_sigB74A.runtimeScope["roots"].popup
  };
}
function Hh(var_core_value_sig1383) {
  var_core_value_sig1383.stopPropagation();
}
function Uh(var_core_value_sig6D11) {
  var_core_value_sig6D11.addEventListener("pointerup", var_core_value_sigB2CF => {
    let var_core_value_sig5955 = var_core_value_sigB2CF.button === 0 && var_core_value_sigB2CF.target instanceof Element ? var_core_value_sigB2CF.target["closest"]("button:not(:disabled)") : null;
    if (!var_core_value_sig5955) return;
    let var_core_value_sigF829 = false,
      var_core_value_sig2900 = () => {
        var_core_value_sigF829 = true;
      };
    var_core_value_sig5955.addEventListener("click", var_core_value_sig2900, {
      once: true
    }), globalThis.setTimeout(() => {
      var_core_value_sig5955.removeEventListener("click", var_core_value_sig2900), var_core_value_sigF829 || var_core_value_sig5955.click();
    }, 0);
  });
}
function Wh(var_core_value_sig3D05) {
  return [{
    hostType: var_core_value_sigC0F3.UNIVER_DOC,
    entry: var_core_value_sigA392.DocsCustomBlock,
    childType: var_core_value_sig3D05.childType,
    mount: var_core_value_sig3D05.mount
  }, {
    hostType: var_core_value_sigC0F3.UNIVER_SHEET,
    entry: var_core_value_sigA392.SheetsFloatingObject,
    childType: var_core_value_sig3D05.childType,
    mount: var_core_value_sig3D05.mount
  }, {
    hostType: var_core_value_sigC0F3.UNIVER_SLIDE,
    entry: var_core_value_sigA392.SlidesFloatingObject,
    childType: var_core_value_sig3D05.childType,
    mount: var_core_value_sig3D05.mount
  }, {
    hostType: var_core_value_sigC0F3.UNIVER_BOARD,
    entry: var_core_value_sigA392.BoardsFloatingObject,
    childType: var_core_value_sig3D05.childType,
    mount: var_core_value_sig3D05.mount
  }];
}
function Gh(var_core_value_sigBCEF) {
  let var_core_value_sig2FF9 = var_core_value_sigC85E(var_core_value_sig27CF);
  return var_core_value_sig146E(() => var_core_value_sig2FF9.permissionPointUpdate$["pipe"](var_core_value_sig5B63(() => var_core_value_sig0A06(var_core_value_sig2FF9, var_core_value_sigBCEF, []))), var_core_value_sig0A06(var_core_value_sig2FF9, var_core_value_sigBCEF, []), false, [var_core_value_sig2FF9, var_core_value_sigBCEF]);
}
function Kh(var_core_value_sigA52B) {
  let {
      embedId: var_core_value_sigFDCB1,
      childUnitId: var_core_value_sig3A62,
      base: var_core_value_sig57F7,
      activeTable: var_core_value_sig3487
    } = var_core_value_sigA52B,
    var_core_value_sig716B = qh(var_core_value_sigFDCB1);
  return var_core_value_sig716B ? var_core_value_sig8E47(var_core_value_sig6F03(Yh, {
    childUnitId: var_core_value_sig3A62,
    base: var_core_value_sig57F7,
    activeTable: var_core_value_sig3487
  }), var_core_value_sig716B) : null;
}
function qh(var_core_value_sigF7A5) {
  let [var_core_value_sigA401, var_core_value_sigB50B] = var_core_value_sigC4B6(() => Jh(var_core_value_sigF7A5));
  return var_core_value_sigB0BB(() => {
    let var_core_value_sig51D8 = window.requestAnimationFrame(() => var_core_value_sigB50B(Jh(var_core_value_sigF7A5)));
    return () => {
      window.cancelAnimationFrame(var_core_value_sig51D8);
    };
  }, [var_core_value_sigF7A5]), var_core_value_sigA401;
}
function Jh(var_core_value_sig0025) {
  return Array.from(document.querySelectorAll('[data-embed-fullscreen-sidebar-slot="true"]')).find(var_core_value_sig8693 => var_core_value_sig8693.dataset["embedId"] === var_core_value_sig0025) ?? null;
}
function Yh(var_core_value_sigF39A1) {
  var var_core_value_sig66DA, var_core_value_sig2485;
  let {
      childUnitId: var_core_value_sig2E9F,
      base: var_core_value_sig4CD0,
      activeTable: var_core_value_sigE479
    } = var_core_value_sigF39A1,
    var_core_value_sig62C4 = var_core_value_sigC85E(var_core_value_sigDFF6),
    var_core_value_sig578B = var_core_value_sigC85E(var_core_value_sig7B6F),
    var_core_value_sigDB0A = var_core_value_sigC85E(var_core_value_sig21CF),
    var_core_value_sig367D = var_core_value_sigC85E(var_core_value_sigCB4E),
    var_core_value_sig4F1B = Gh(var_core_value_sig2E9F),
    var_core_value_sigDAA0 = var_core_value_sig146E(() => var_core_value_sig367D.state$, var_core_value_sig367D.getState(), false, [var_core_value_sig367D]),
    [var_core_value_sig5231, var_core_value_sig3BCB] = var_core_value_sigC4B6(null),
    [var_core_value_sigE0BE, var_core_value_sigEE27] = var_core_value_sigC4B6(null),
    [var_core_value_sig6198, var_core_value_sigD7E8] = var_core_value_sigC4B6(""),
    [var_core_value_sig317C, var_core_value_sig5DB3] = var_core_value_sigC4B6("configurations"),
    [var_core_value_sigF7F8, var_core_value_sigB293] = var_core_value_sigC4B6(null),
    var_core_value_sig89CA = (var_core_value_sig578B == null || (var_core_value_sig66DA = var_core_value_sig578B.getConfig(var_core_value_sig528E)) == null ? undefined : var_core_value_sig66DA.workbench) ?? {},
    var_core_value_sigC136 = var_core_value_sigDAA0.layout["leftPanelWidth"] ?? var_core_value_sig89CA.leftPanelWidth ?? ((var_core_value_sig2485 = var_core_value_sig2FED.workbench) == null ? undefined : var_core_value_sig2485.leftPanelWidth) ?? var_core_value_sig04A2,
    var_core_value_sig5F62 = var_core_value_sig4CD0.getSnapshot(),
    var_core_value_sig67A6 = Qh(var_core_value_sig5F62, var_core_value_sigE479.id, !var_core_value_sig4F1B),
    var_core_value_sig0656 = async var_core_value_sigAACD => {
      let var_core_value_sig895A = var_core_value_sig5F62.tables[var_core_value_sigAACD];
      if (!var_core_value_sig895A) return;
      let var_core_value_sigA764 = var_core_value_sig895A.viewOrder["find"](var_core_value_sig00BE => var_core_value_sig895A.views[var_core_value_sig00BE]);
      var_core_value_sig367D.activateTable(var_core_value_sig895A.id), var_core_value_sigA764 && var_core_value_sig367D.activateView(var_core_value_sigA764), var_core_value_sig367D.setSelection(null), var_core_value_sig367D.closeRecordDetail(), await var_core_value_sig62C4.executeCommand(var_core_value_sig5271.id, {
        unitId: var_core_value_sig2E9F,
        tableId: var_core_value_sigAACD
      });
    },
    var_core_value_sigA073 = async () => {
      let var_core_value_sigC3D9 = var_core_value_sig54EF({
        id: "table-" + var_core_value_sigED29(8),
        name: $h(var_core_value_sig4CD0.getSnapshot(), var_core_value_sig7BB5 => var_core_value_sigDB0A.t("embed-ui.basesFloating.tableSidebar.defaultTableName", String(var_core_value_sig7BB5))),
        primaryFieldId: "field-" + var_core_value_sigED29(8),
        gridViewId: "view-" + var_core_value_sigED29(8)
      });
      (await var_core_value_sig62C4.executeCommand(var_core_value_sigB136.id, {
        unitId: var_core_value_sig2E9F,
        table: var_core_value_sigC3D9
      })) && (var_core_value_sig367D.activateTable(var_core_value_sigC3D9.id), var_core_value_sig367D.activateView(var_core_value_sigC3D9.viewOrder[0]), var_core_value_sig367D.setSelection(null), var_core_value_sig367D.closeRecordDetail(), var_core_value_sigB293(var_core_value_sigC3D9.id));
    },
    var_core_value_sigA420 = async (var_core_value_sigA6C0, var_core_value_sigFF70, var_core_value_sigB469) => {
      let var_core_value_sig0276 = var_core_value_sig4CD0.getSnapshot(),
        var_core_value_sigFA20 = var_core_value_sig0276.tables[var_core_value_sigA6C0];
      if (!var_core_value_sigFA20) return;
      let var_core_value_sig2752 = var_core_value_sig8D75(var_core_value_sigFA20, {
        id: "table-" + var_core_value_sigED29(8),
        name: var_core_value_sigFF70,
        includeRecords: var_core_value_sigB469 === "records",
        regenerateViewIds: true,
        createViewId: () => "view-" + var_core_value_sigED29(8)
      });
      (await var_core_value_sig62C4.executeCommand(var_core_value_sigB136.id, {
        unitId: var_core_value_sig2E9F,
        table: var_core_value_sig2752,
        index: var_core_value_sig0276.tableOrder["indexOf"](var_core_value_sigA6C0) + 1
      })) && (var_core_value_sig367D.activateTable(var_core_value_sig2752.id), var_core_value_sig367D.activateView(var_core_value_sig2752.viewOrder[0]), var_core_value_sig367D.setSelection(null), var_core_value_sig367D.closeRecordDetail());
    },
    var_core_value_sigD7D1 = async var_core_value_sig0E1A => {
      let var_core_value_sig6A48 = var_core_value_sig4CD0.getSnapshot(),
        var_core_value_sig2D2A = Qh(var_core_value_sig6A48, var_core_value_sigE479.id).map(var_core_value_sig6AAD => var_core_value_sig6AAD.id);
      if (var_core_value_sig2D2A.length <= 1) return;
      let var_core_value_sig1D22 = var_core_value_sig0E1A === var_core_value_sigE479.id ? var_core_value_sig2D2A.find(var_core_value_sig1157 => var_core_value_sig1157 !== var_core_value_sig0E1A) : null;
      if ((await var_core_value_sig62C4.executeCommand(var_core_value_sigC0CF.id, {
        unitId: var_core_value_sig2E9F,
        tableId: var_core_value_sig0E1A
      })) && var_core_value_sig1D22) {
        let var_core_value_sigA694 = var_core_value_sig6A48.tables[var_core_value_sig1D22],
          var_core_value_sig18E01 = var_core_value_sigA694 == null ? undefined : var_core_value_sigA694.viewOrder["find"](var_core_value_sigA6F6 => var_core_value_sigA694.views[var_core_value_sigA6F6]);
        var_core_value_sig367D.activateTable(var_core_value_sig1D22), var_core_value_sig18E01 && var_core_value_sig367D.activateView(var_core_value_sig18E01), var_core_value_sig367D.setSelection(null), var_core_value_sig367D.closeRecordDetail();
      }
    };
  return var_core_value_sigA648(var_core_value_sigC0A2, {
    children: [var_core_value_sig6F03(var_core_value_sig11D2, {
      title: var_core_value_sig5F62.name || "Base",
      items: var_core_value_sig67A6,
      width: var_core_value_sigC136,
      pendingRenameItemId: var_core_value_sigF7F8,
      onActivateItem: var_core_value_sig0656,
      onAddTable: var_core_value_sig4F1B ? async () => {
        await var_core_value_sigA073();
      } : undefined,
      onRenameTable: var_core_value_sig4F1B ? async (var_core_value_sig91FE, var_core_value_sig528C) => {
        await var_core_value_sig62C4.executeCommand(var_core_value_sig00F7.id, {
          unitId: var_core_value_sig2E9F,
          tableId: var_core_value_sig91FE,
          name: var_core_value_sig528C
        });
      } : undefined,
      getTableNameError: (var_core_value_sig749D, var_core_value_sig1FB8) => var_core_value_sig48EC(var_core_value_sigDB0A, var_core_value_sigAF20(var_core_value_sig5F62, var_core_value_sig1FB8, var_core_value_sig749D)),
      onPendingRenameItemConsumed: var_core_value_sig032D => {
        var_core_value_sigF7F8 === var_core_value_sig032D && var_core_value_sigB293(null);
      },
      onDuplicateTable: var_core_value_sig4F1B ? var_core_value_sig27FA => {
        let var_core_value_sig533B = var_core_value_sig4CD0.getSnapshot(),
          var_core_value_sig6434 = var_core_value_sig533B.tables[var_core_value_sig27FA];
        var_core_value_sig6434 && (var_core_value_sigEE27(var_core_value_sig27FA), var_core_value_sigD7E8(var_core_value_sigF880(var_core_value_sig533B, var_core_value_sigDB0A.t("embed-ui.basesFloating.duplicateTable.copyName", var_core_value_sig6434.name))), var_core_value_sig5DB3("configurations"));
      } : undefined,
      onDeleteTable: var_core_value_sig4F1B ? var_core_value_sig3BCB : undefined,
      onResizeWidth: var_core_value_sig398A => var_core_value_sig367D.setLeftPanelWidth(var_core_value_sig398A)
    }), var_core_value_sig6F03(var_core_value_sig27E4, {
      open: !!var_core_value_sigE0BE,
      name: var_core_value_sig6198,
      nameError: var_core_value_sig48EC(var_core_value_sigDB0A, var_core_value_sigAF20(var_core_value_sig5F62, var_core_value_sig6198.trim())),
      mode: var_core_value_sig317C,
      onNameChange: var_core_value_sigD7E8,
      onModeChange: var_core_value_sig5DB3,
      onCancel: () => var_core_value_sigEE27(null),
      onConfirm: async () => {
        let var_core_value_sig1760 = var_core_value_sigE0BE,
          var_core_value_sig7C7A = var_core_value_sig6198.trim(),
          var_core_value_sig78E8 = var_core_value_sig317C;
        !var_core_value_sig1760 || !var_core_value_sig7C7A || (var_core_value_sigEE27(null), await var_core_value_sigA420(var_core_value_sig1760, var_core_value_sig7C7A, var_core_value_sig78E8));
      }
    }), var_core_value_sig6F03(var_core_value_sig63B4, {
      open: !!var_core_value_sig5231,
      title: var_core_value_sigDB0A.t("embed-ui.basesFloating.confirmDelete.tableTitle"),
      description: var_core_value_sigDB0A.t("embed-ui.basesFloating.confirmDelete.tableDescription"),
      onCancel: () => var_core_value_sig3BCB(null),
      onConfirm: async () => {
        let var_core_value_sigF002 = var_core_value_sig5231;
        var_core_value_sig3BCB(null), var_core_value_sigF002 && (await var_core_value_sigD7D1(var_core_value_sigF002));
      }
    })]
  });
}
function Xh(var_core_value_sigF9A0) {
  let {
      embedId: var_core_value_sigCAB0,
      activeView: var_core_value_sigE229,
      views: var_core_value_sigB9B4,
      addViewOpen: var_core_value_sigC1A21,
      onAddViewOpenChange: var_core_value_sigFE70,
      onActivateView: var_core_value_sigAEA6,
      onAddView: var_core_value_sig08B9,
      onSetViewAsFirst: var_core_value_sig13B0,
      onMoveView: var_core_value_sigC53D1,
      onRenameView: var_core_value_sigC01B,
      onDuplicateView: var_core_value_sigBBD7,
      onConfigureView: var_core_value_sig1DD1,
      onDeleteView: var_core_value_sig0F751,
      readonly: var_core_value_sig4ABB
    } = var_core_value_sigF9A0,
    var_core_value_sigB1DB = var_core_value_sigC85E(var_core_value_sig21CF);
  return var_core_value_sig6F03("div", {
    "data-u-comp": "base-embed-fullscreen-view-tabs",
    className: "univer-pointer-events-auto\x20univer-box-border\x20univer-min-w-0\x20univer-self-stretch\x20univer-bg-gray-50\x20univer-pr-24\x20dark:!univer-bg-gray-900",
    children: var_core_value_sig6F03(var_core_value_sigB208, {
      readonly: var_core_value_sig4ABB,
      className: "univer-bg-gray-50\x20univer-px-0\x20dark:!univer-bg-gray-900",
      views: var_core_value_sigB9B4.map(var_core_value_sig715D => ({
        id: var_core_value_sig715D.id,
        name: var_core_value_sig715D.name,
        type: var_core_value_sig715D.type
      })),
      activeViewId: var_core_value_sigE229.id,
      onActivateView: var_core_value_sigAEA6,
      onSetViewAsFirst: var_core_value_sig13B0,
      onMoveView: var_core_value_sigC53D1,
      onRenameView: var_core_value_sigC01B,
      onDuplicateView: var_core_value_sigBBD7,
      onConfigureView: var_core_value_sig1DD1,
      onDeleteView: var_core_value_sig0F751,
      onAddView: () => var_core_value_sigFE70(!var_core_value_sigC1A21),
      addViewDropdown: {
        open: var_core_value_sigC1A21,
        onOpenChange: var_core_value_sigFE70,
        overlay: var_core_value_sig6F03("div", {
          "data-u-comp": "base-embed-fullscreen-add-view-menu",
          "data-embed-id": var_core_value_sigCAB0,
          "data-embed-floating-menu-popup": "true",
          children: var_core_value_sig6F03(var_core_value_sig8C3D, {
            views: var_core_value_sig0EE7.map(var_core_value_sigEB90 => ({
              ...var_core_value_sigEB90,
              label: var_core_value_sigB1DB.t(var_core_value_sigEB90.label),
              description: var_core_value_sigB1DB.t(var_core_value_sigEB90.description)
            })),
            onCreate: var_core_value_sig08B9
          })
        })
      }
    })
  });
}
function Zh(var_core_value_sig08C7) {
  var var_core_value_sigA9B2;
  return (var_core_value_sig08C7 == null || (var_core_value_sigA9B2 = var_core_value_sig08C7.tableOrder) == null ? undefined : var_core_value_sigA9B2.map(var_core_value_sig9506 => var_core_value_sig08C7.tables[var_core_value_sig9506]).filter(var_core_value_sigC460 => !!var_core_value_sigC460)) ?? [];
}
function Qh(var_core_value_sigF5D3, var_core_value_sig8318, var_core_value_sig8900 = false) {
  return Zh(var_core_value_sigF5D3).map(var_core_value_sig00D0 => ({
    id: var_core_value_sig00D0.id,
    name: var_core_value_sig00D0.name,
    active: var_core_value_sig00D0.id === var_core_value_sig8318,
    readonly: var_core_value_sig8900
  }));
}
function $h(var_core_value_sig799A, var_core_value_sig17D9) {
  let var_core_value_sig72E5 = new Set(Zh(var_core_value_sig799A).map(var_core_value_sig2880 => var_core_value_sig2880.name)),
    var_core_value_sigB979 = var_core_value_sig72E5.size + 1,
    var_core_value_sig1292 = var_core_value_sig17D9(var_core_value_sigB979);
  for (; var_core_value_sig72E5.has(var_core_value_sig1292);) var_core_value_sigB979 += 1, var_core_value_sig1292 = var_core_value_sig17D9(var_core_value_sigB979);
  return var_core_value_sig1292;
}
const eg = "\n univer-pointer-events-auto univer-relative univer-isolate univer-flex univer-shrink-0\n univer-items-center univer-self-stretch univer-rounded-lg univer-border univer-border-solid\n univer-border-gray-200 univer-bg-transparent univer-p-1 univer-shadow-lg\n before:univer-pointer-events-none before:univer-absolute before:univer-inset-0\n before:univer-z-[-1] before:univer-rounded-lg before:univer-bg-gray-0 before:univer-opacity-90\n before:univer-content-[''] dark:!univer-border-gray-600 dark:before:!univer-bg-gray-900\n";
function tg() {
  return Wh({
    childType: var_core_value_sigC0F3.UNIVER_BASE,
    mount: ng
  });
}
function ng(var_core_value_sig088B) {
  let {
      menu: var_core_value_sig5221,
      menuRoot: var_core_value_sig5F66,
      portalContainer: var_core_value_sig52A9
    } = Vh(var_core_value_sig088B),
    var_core_value_sigD9C3 = Sl(var_core_value_sig5221),
    var_core_value_sigBDC5 = var_core_value_sig088B.runtimeScope["injector"];
  return var_core_value_sigD9C3.render(var_core_value_sigBCAF(fl, {
    injector: var_core_value_sigBDC5,
    mountContainer: var_core_value_sig52A9,
    embedId: var_core_value_sig088B.embedId
  }, var_core_value_sigBCAF(lg, {
    hostUnitId: var_core_value_sig088B.hostUnitId,
    embedId: var_core_value_sig088B.embedId,
    childUnitId: var_core_value_sig088B.childUnitId,
    entry: var_core_value_sig088B.descriptor["entry"],
    fullscreen: !!var_core_value_sig088B.renderScope["fullscreen"],
    floatingMenuPortalRoot: var_core_value_sig5F66,
    runtimeFocusRoot: var_core_value_sig088B.renderScope["rootElement"],
    usesDomFloatingStage: var_core_value_sig088B.descriptor["entry"] === "sheets-floating-object",
    renderScopeActive$: var_core_value_sig088B.renderScope["active$"]
  }))), var_core_value_sig9BBC(() => {
    Cl(var_core_value_sigD9C3), globalThis.setTimeout(() => var_core_value_sig5221.remove(), 0);
  });
}
function rg(var_core_value_sigD032) {
  return Eu({
    embedId: var_core_value_sigD032.embedId,
    active: ig(var_core_value_sigD032.activeEmbedId, var_core_value_sigD032.stage),
    fullscreen: var_core_value_sigD032.fullscreen,
    usesDomFloatingStage: var_core_value_sigD032.usesDomFloatingStage,
    renderScopeActive: var_core_value_sigD032.renderScopeActive
  });
}
function ig(var_core_value_sig7DB9, var_core_value_sigC490) {
  return var_core_value_sig7DB9 ? {
    hostUnitId: "",
    childUnitId: "",
    embedId: var_core_value_sig7DB9,
    stage: var_core_value_sigC490 === "stage2" || var_core_value_sigC490 === "stage1" ? "stage2" : "inactive"
  } : null;
}
function ag(var_core_value_sigA98E) {
  return var_core_value_sigA98E;
}
function og(var_core_value_sigD375) {
  return var_core_value_sigD375;
}
function sg(var_core_value_sigC1DB) {
  return !var_core_value_sigC1DB;
}
function cg(var_core_value_sigAB71) {
  return {
    [Z]: var_core_value_sigAB71,
    [ws]: "floating-menu"
  };
}
function lg(var_core_value_sig7ED5) {
  let {
      hostUnitId: var_core_value_sigA995,
      embedId: var_core_value_sig46DD,
      childUnitId: var_core_value_sigE470,
      entry: var_core_value_sig4C48,
      fullscreen: var_core_value_sigBAD0,
      floatingMenuPortalRoot: var_core_value_sig1AB1,
      runtimeFocusRoot: var_core_value_sig0906,
      usesDomFloatingStage: var_core_value_sig1B09,
      renderScopeActive$: var_core_value_sigFA2C
    } = var_core_value_sig7ED5,
    var_core_value_sig6C81 = var_core_value_sigC85E(var_core_value_sigDFF6),
    var_core_value_sig1DC4 = var_core_value_sigC53D(var_core_value_sig4142),
    var_core_value_sigB15A = var_core_value_sigC85E(var_core_value_sig5DF8),
    var_core_value_sigAEE01 = var_core_value_sigC85E(var_core_value_sig21CF),
    var_core_value_sigE012 = var_core_value_sigC85E(var_core_value_sig9F10),
    var_core_value_sig1EB7 = var_core_value_sigC85E(var_core_value_sig84F3),
    var_core_value_sigDADF = var_core_value_sigC85E(var_core_value_sigCB4E),
    var_core_value_sigB4CC = var_core_value_sigC85E(var_core_value_sig00BD),
    var_core_value_sig80E7 = var_core_value_sigC85E(xs),
    var_core_value_sigA09B = var_core_value_sig146E(() => var_core_value_sigDADF.state$, var_core_value_sigDADF.getState(), false, [var_core_value_sigDADF]),
    var_core_value_sig0621 = var_core_value_sig146E(() => var_core_value_sig1EB7.undoRedoStatus$, {
      undos: 0,
      redos: 0
    }, false, [var_core_value_sig1EB7]),
    var_core_value_sig346A = var_core_value_sig146E(() => var_core_value_sigFA2C, false, false, [var_core_value_sigFA2C]),
    var_core_value_sigA9A5 = var_core_value_sig146E(() => var_core_value_sig80E7.active$, var_core_value_sig80E7.getActive(), false, [var_core_value_sig80E7]),
    var_core_value_sigB002 = var_core_value_sig146E(() => var_core_value_sigB4CC.toolbarPanel$, var_core_value_sigB4CC.getToolbarPanel(), false, [var_core_value_sigB4CC]),
    var_core_value_sig8E06 = var_core_value_sig80E7.getStage(var_core_value_sig46DD),
    [var_core_value_sigB200, var_core_value_sigC02C] = var_core_value_sigC4B6(0),
    [var_core_value_sig75B9, var_core_value_sig33AC] = var_core_value_sigC4B6(null),
    [var_core_value_sigB308, var_core_value_sigA7B0] = var_core_value_sigC4B6(false),
    [var_core_value_sigB532, var_core_value_sigD529] = var_core_value_sigC4B6(null),
    var_core_value_sig21F7 = var_core_value_sig17A6(var_core_value_sigB002),
    var_core_value_sig8074 = var_core_value_sig17A6(null),
    var_core_value_sigE695 = var_core_value_sigB15A.getUnit(var_core_value_sigE470, var_core_value_sigC0F3.UNIVER_BASE),
    var_core_value_sigC3C7 = Gh(var_core_value_sigE470),
    var_core_value_sigCF25 = var_core_value_sigE695 == null ? undefined : var_core_value_sigE695.getSnapshot(),
    var_core_value_sig33FD = mg(var_core_value_sigCF25, var_core_value_sigA09B.activeTableId),
    var_core_value_sig0F30 = hg(var_core_value_sig33FD),
    var_core_value_sigFA2B = gg(var_core_value_sig33FD, var_core_value_sigA09B.activeViewId),
    var_core_value_sig2D95 = rg({
      embedId: var_core_value_sig46DD,
      activeEmbedId: var_core_value_sigA9A5 == null ? undefined : var_core_value_sigA9A5.embedId,
      stage: var_core_value_sig8E06,
      fullscreen: var_core_value_sigBAD0,
      usesDomFloatingStage: var_core_value_sig1B09,
      renderScopeActive: var_core_value_sig346A
    }) === "stage2",
    [var_core_value_sig4B59, var_core_value_sigCE61] = var_core_value_sigC4B6(var_core_value_sig2D95),
    var_core_value_sig8A11 = ag(var_core_value_sigBAD0),
    var_core_value_sig6205 = og(var_core_value_sigBAD0),
    var_core_value_sigFD56 = sg(var_core_value_sigBAD0),
    var_core_value_sig979F = var_core_value_sig8A11 ? "univer-pointer-events-auto univer-min-h-11 univer-w-full univer-min-w-0 univer-max-w-none univer-flex-1" : "univer-pointer-events-auto univer-max-w-none univer-flex-none !univer-bg-transparent dark:!univer-bg-transparent";
  if (var_core_value_sig4B59 !== var_core_value_sig2D95 && (var_core_value_sigCE61(var_core_value_sig2D95), var_core_value_sig2D95 || (var_core_value_sig33AC(null), var_core_value_sigA7B0(false), var_core_value_sigD529(null))), var_core_value_sigB0BB(() => {
    var_core_value_sig2D95 || (var_core_value_sigB4CC.closeToolbarPanel(), var_core_value_sigB4CC.closeContextMenu(), var_core_value_sigB4CC.closeActiveEditor());
  }, [var_core_value_sig2D95, var_core_value_sigB4CC]), var_core_value_sigB0BB(() => {
    var_core_value_sigC3C7 || (var_core_value_sigB4CC.closeToolbarPanel(), var_core_value_sigB4CC.closeContextMenu(), var_core_value_sigB4CC.closeActiveEditor());
  }, [var_core_value_sigC3C7, var_core_value_sigB4CC]), var_core_value_sigB0BB(() => {
    let var_core_value_sig76AC = var_core_value_sig21F7.current;
    if (var_core_value_sig21F7.current = var_core_value_sigB002, !var_core_value_sig76AC || var_core_value_sigB002 || !var_core_value_sig2D95) return;
    let var_core_value_sigEA39 = window.requestAnimationFrame(() => hl(var_core_value_sig46DD, var_core_value_sig0906));
    return () => window.cancelAnimationFrame(var_core_value_sigEA39);
  }, [var_core_value_sig46DD, var_core_value_sig2D95, var_core_value_sig0906, var_core_value_sigB002]), var_core_value_sigB0BB(() => {
    if (!var_core_value_sig75B9) return;
    let var_core_value_sig252C = var_core_value_sig0428 => {
        var var_core_value_sigBE07;
        let var_core_value_sig555F = var_core_value_sig0428.target instanceof Node ? var_core_value_sig0428.target : null;
        var_core_value_sig555F && (var_core_value_sigBE07 = var_core_value_sig8074.current) != null && var_core_value_sigBE07.contains(var_core_value_sig555F) || var_core_value_sig33AC(null);
      },
      var_core_value_sig87EA = var_core_value_sig3D6F => {
        var_core_value_sig3D6F.key === "Escape" && var_core_value_sig33AC(null);
      };
    return document.addEventListener("pointerdown", var_core_value_sig252C, true), document.addEventListener("keydown", var_core_value_sig87EA, true), () => {
      document.removeEventListener("pointerdown", var_core_value_sig252C, true), document.removeEventListener("keydown", var_core_value_sig87EA, true);
    };
  }, [var_core_value_sig75B9]), !var_core_value_sigCF25 || !var_core_value_sigE695 || !var_core_value_sig33FD || !var_core_value_sigFA2B) return null;
  let var_core_value_sig42FE = () => {
      var_core_value_sig80E7.activate({
        hostUnitId: var_core_value_sigA995,
        embedId: var_core_value_sig46DD,
        childUnitId: var_core_value_sigE470
      }, "stage2");
    },
    var_core_value_sig3218 = async (var_core_value_sig4325, var_core_value_sigAB8D) => {
      var_core_value_sig42FE(), await var_core_value_sig6C81.executeCommand(var_core_value_sig30EC.id, {
        type: var_core_value_sig4325,
        anchor: vg(var_core_value_sigAB8D.getBoundingClientRect())
      });
    },
    var_core_value_sig52D9 = async var_core_value_sig4B861 => {
      var_core_value_sig42FE(), await var_core_value_sig6C81.executeCommand(var_core_value_sigBC2B.id, {
        tableId: var_core_value_sig33FD.id,
        unitId: var_core_value_sigE470,
        viewId: var_core_value_sig4B861
      }), var_core_value_sigC02C(var_core_value_sig336C => var_core_value_sig336C + 1);
    },
    var_core_value_sig7686 = async var_core_value_sig240E => {
      var_core_value_sig42FE();
      let var_core_value_sigDE46 = "view-" + var_core_value_sigED29(6),
        var_core_value_sigF30E = var_core_value_sigE012.get(var_core_value_sig240E).createDefaultConfig(var_core_value_sig33FD),
        var_core_value_sigA6B6 = await var_core_value_sig6C81.executeCommand(var_core_value_sig6A28.id, {
          unitId: var_core_value_sigE470,
          tableId: var_core_value_sig33FD.id,
          view: {
            id: var_core_value_sigDE46,
            tableId: var_core_value_sig33FD.id,
            name: var_core_value_sig9447(var_core_value_sigAEE01, var_core_value_sig240E),
            type: var_core_value_sig240E,
            config: var_core_value_sigF30E,
            fieldOrder: [...var_core_value_sig33FD.fieldOrder],
            fieldSettings: {}
          }
        });
      var_core_value_sig33AC(null), var_core_value_sigA7B0(false), var_core_value_sigC02C(var_core_value_sig6E68 => var_core_value_sig6E68 + 1), var_core_value_sigA6B6 && (await var_core_value_sig52D9(var_core_value_sigDE46));
    },
    var_core_value_sigF375 = async var_core_value_sig1FDB => {
      var var_core_value_sig6B7D;
      let var_core_value_sig0D1B = (var_core_value_sig6B7D = var_core_value_sig0F30[0]) == null ? undefined : var_core_value_sig6B7D.id;
      !var_core_value_sig0D1B || var_core_value_sig0D1B === var_core_value_sig1FDB || (var_core_value_sig42FE(), await var_core_value_sig6C81.executeCommand(var_core_value_sigEF9F.id, {
        unitId: var_core_value_sigE470,
        tableId: var_core_value_sig33FD.id,
        viewId: var_core_value_sig1FDB,
        target: {
          beforeViewId: var_core_value_sig0D1B
        }
      }), var_core_value_sigC02C(var_core_value_sig8DFE => var_core_value_sig8DFE + 1));
    },
    var_core_value_sig15CE = async (var_core_value_sigA5A1, var_core_value_sig0C3A) => {
      var_core_value_sig42FE(), await var_core_value_sig6C81.executeCommand(var_core_value_sigEF9F.id, {
        unitId: var_core_value_sigE470,
        tableId: var_core_value_sig33FD.id,
        viewId: var_core_value_sigA5A1,
        target: var_core_value_sig0C3A
      }), var_core_value_sigC02C(var_core_value_sig48EA => var_core_value_sig48EA + 1);
    },
    var_core_value_sigCCAF = async (var_core_value_sig5A20, var_core_value_sig4037) => {
      var_core_value_sig42FE(), await var_core_value_sig6C81.executeCommand(var_core_value_sig626F.id, {
        unitId: var_core_value_sigE470,
        tableId: var_core_value_sig33FD.id,
        viewId: var_core_value_sig5A20,
        name: var_core_value_sig4037
      }), var_core_value_sigC02C(var_core_value_sig5E16 => var_core_value_sig5E16 + 1);
    },
    var_core_value_sigA829 = async var_core_value_sig5F5F => {
      let var_core_value_sig801E = var_core_value_sig33FD.views[var_core_value_sig5F5F];
      if (!var_core_value_sig801E) return;
      var_core_value_sig42FE();
      let var_core_value_sigD8A7 = var_core_value_sig0A6A(var_core_value_sig801E, var_core_value_sig33FD.id, var_core_value_sigAEE01.t("embed-ui.basesFloating.copySuffix")),
        var_core_value_sig7D2D = await var_core_value_sig6C81.executeCommand(var_core_value_sig6A28.id, {
          unitId: var_core_value_sigE470,
          tableId: var_core_value_sig33FD.id,
          view: var_core_value_sigD8A7
        });
      var_core_value_sigC02C(var_core_value_sig09F3 => var_core_value_sig09F3 + 1), var_core_value_sig7D2D && (await var_core_value_sig52D9(var_core_value_sigD8A7.id));
    },
    var_core_value_sigBA45 = async () => {
      var var_core_value_sig5BC41;
      let var_core_value_sigE445 = var_core_value_sigB532 ?? var_core_value_sigFA2B.id;
      if (var_core_value_sig0F30.length <= 1) {
        var_core_value_sigD529(null);
        return;
      }
      let var_core_value_sig5C54 = (var_core_value_sig5BC41 = var_core_value_sig0F30.find(var_core_value_sig4592 => var_core_value_sig4592.id !== var_core_value_sigE445)) == null ? undefined : var_core_value_sig5BC41.id,
        var_core_value_sigD167 = await var_core_value_sig6C81.executeCommand(var_core_value_sig1D1F.id, {
          unitId: var_core_value_sigE470,
          tableId: var_core_value_sig33FD.id,
          viewId: var_core_value_sigE445
        });
      var_core_value_sigD529(null), var_core_value_sigC02C(var_core_value_sigC5C4 => var_core_value_sigC5C4 + 1), var_core_value_sigD167 && var_core_value_sig5C54 && (await var_core_value_sig52D9(var_core_value_sig5C54));
    },
    var_core_value_sig6921 = async () => {
      await var_core_value_sig6C81.executeCommand(var_core_value_sig793D.id, {
        hostUnitId: var_core_value_sigA995,
        embedId: var_core_value_sig46DD
      });
    },
    var_core_value_sig0531 = var_core_value_sig2DA0 => {
      var_core_value_sig2DA0.stopPropagation();
    },
    var_core_value_sigEA2B = var_core_value_sig51DC => {
      var_core_value_sig51DC.preventDefault(), var_core_value_sig51DC.stopPropagation();
    };
  return var_core_value_sigA648(var_core_value_sigC0A2, {
    children: [var_core_value_sigA648("div", {
      className: var_core_value_sig522C("univer-box-border univer-flex univer-items-center univer-justify-between univer-text-gray-900 dark:!univer-text-gray-0", {
        "univer-hidden": !var_core_value_sig2D95,
        "univer-static\x20univer-m-0\x20univer-min-h-[84px]\x20univer-w-full\x20univer-min-w-0\x20univer-max-w-none\x20univer-translate-x-0\x20univer-flex-col\x20univer-items-stretch\x20univer-justify-start\x20univer-gap-0\x20univer-rounded-none\x20univer-border-0\x20univer-bg-transparent\x20univer-px-0\x20univer-py-0\x20univer-shadow-none": var_core_value_sigBAD0,
        "univer-absolute\x20univer-inset-x-0\x20univer-z-[30]\x20univer-min-h-9\x20univer-min-w-0\x20univer-max-w-none\x20univer-translate-x-0\x20univer-gap-3\x20univer-border-0\x20univer-bg-transparent\x20univer-p-0\x20univer-shadow-none": !var_core_value_sigBAD0,
        "-univer-top-12": !var_core_value_sigBAD0 && var_core_value_sig4C48 !== "docs-custom-block",
        "univer-w-full": !var_core_value_sigBAD0,
        "!univer-left-0\x20!univer-right-auto\x20-univer-top-12\x20!univer-w-full": !var_core_value_sigBAD0 && var_core_value_sig4C48 === "docs-custom-block"
      }),
      "data-u-comp": "base-embed-floating-menu",
      "data-embed-floating-menu": "true",
      "data-embed-id": var_core_value_sig46DD,
      "data-embed-float-stage": var_core_value_sig2D95 ? "stage2" : "inactive",
      "data-base-render-version": var_core_value_sigB200,
      ...cg(var_core_value_sig46DD),
      onClick: var_core_value_sig0531,
      onDoubleClick: var_core_value_sig0531,
      onMouseDown: var_core_value_sigEA2B,
      onMouseUp: var_core_value_sig0531,
      onPointerDown: var_core_value_sigEA2B,
      onPointerUp: var_core_value_sig0531,
      children: [var_core_value_sig6205 ? var_core_value_sig6F03(Xh, {
        embedId: var_core_value_sig46DD,
        activeView: var_core_value_sigFA2B,
        views: var_core_value_sig0F30,
        addViewOpen: var_core_value_sigB308,
        onAddViewOpenChange: var_core_value_sigA7B0,
        onActivateView: var_core_value_sig52D9,
        onAddView: var_core_value_sig7686,
        onSetViewAsFirst: var_core_value_sigF375,
        onMoveView: var_core_value_sig15CE,
        onRenameView: var_core_value_sigCCAF,
        onDuplicateView: var_core_value_sigA829,
        onConfigureView: var_core_value_sigEE01 => var_core_value_sig3218("viewSettings", var_core_value_sigEE01),
        onDeleteView: var_core_value_sigD529,
        readonly: !var_core_value_sigC3C7
      }) : var_core_value_sig6F03("div", {
        "data-u-comp": "base-embed-view-slot",
        className: eg,
        children: var_core_value_sig6F03(ug, {
          activeView: var_core_value_sigFA2B,
          views: var_core_value_sig0F30,
          onActivateView: var_core_value_sig52D9,
          embedId: var_core_value_sig46DD,
          portalRoot: var_core_value_sig1AB1,
          onAddView: var_core_value_sig80BD => {
            var_core_value_sig42FE(), var_core_value_sig33AC(var_core_value_sig80BD.getBoundingClientRect());
          },
          onConfigureView: var_core_value_sigF6A6 => var_core_value_sig3218("viewSettings", var_core_value_sigF6A6),
          onDeleteView: () => var_core_value_sigD529(var_core_value_sigFA2B.id)
        })
      }), var_core_value_sig6F03("div", {
        className: var_core_value_sig522C("univer-flex univer-flex-1 univer-items-center univer-justify-end univer-gap-1", {
          "univer-min-w-0": var_core_value_sigBAD0,
          "univer-min-w-max": !var_core_value_sigBAD0
        }),
        children: var_core_value_sigA648("div", {
          "data-u-comp": "base-embed-actions-surface",
          className: var_core_value_sig522C("univer-flex univer-min-w-0 univer-max-w-full univer-items-center univer-gap-1", {
            "univer-w-full\x20univer-flex-1": var_core_value_sigBAD0,
            [eg]: !var_core_value_sigBAD0
          }),
          children: [var_core_value_sig6F03(var_core_value_sig5F55, {
            disabled: !var_core_value_sigC3C7,
            iconOnly: !var_core_value_sig8A11,
            className: var_core_value_sig979F,
            renderTooltip: (var_core_value_sigE59D, var_core_value_sig3D65) => var_core_value_sig6F03(jf, {
              title: var_core_value_sigE59D,
              children: var_core_value_sig3D65
            }),
            state: {
              ...pg(var_core_value_sigFA2B, var_core_value_sig0621),
              searchOpen: var_core_value_sigA09B.search["open"],
              searchQuery: var_core_value_sigA09B.search["query"],
              searchActiveIndex: var_core_value_sigA09B.search["activeIndex"]
            },
            onAddRecord: var_core_value_sig4D17 => var_core_value_sig4D17 && var_core_value_sig3218("addRecord", var_core_value_sig4D17),
            onCustomizeField: var_core_value_sigE1B9 => var_core_value_sig3218("customizeField", var_core_value_sigE1B9),
            onCustomizeKanban: var_core_value_sig21BB => var_core_value_sig3218("customizeKanban", var_core_value_sig21BB),
            onCustomizeGallery: var_core_value_sig64BA1 => var_core_value_sig3218("customizeGallery", var_core_value_sig64BA1),
            onCalendarEventSettings: var_core_value_sig975D => var_core_value_sig3218("calendarEventSettings", var_core_value_sig975D),
            onCalendarViewSettings: var_core_value_sig3C3D => var_core_value_sig3218("calendarViewSettings", var_core_value_sig3C3D),
            onViewSettings: var_core_value_sigD33D => var_core_value_sig3218("viewSettings", var_core_value_sigD33D),
            onFilter: var_core_value_sig71B9 => var_core_value_sig3218("filter", var_core_value_sig71B9),
            onGroup: var_core_value_sig248C => var_core_value_sig3218("group", var_core_value_sig248C),
            onSort: var_core_value_sig8DE6 => var_core_value_sig3218("sort", var_core_value_sig8DE6),
            onRowHeight: var_core_value_sig55C6 => var_core_value_sig3218("rowHeight", var_core_value_sig55C6),
            onConditionalColoring: var_core_value_sig2C60 => var_core_value_sig3218("conditionalColoring", var_core_value_sig2C60),
            onUndo: async () => var_core_value_sig6C81.executeCommand(var_core_value_sig2785.id),
            onRedo: async () => var_core_value_sig6C81.executeCommand(var_core_value_sig972B.id),
            onOpenSearch: () => var_core_value_sigDADF.openSearch(),
            onSearchQueryChange: var_core_value_sig2914 => var_core_value_sigDADF.setSearchQuery(var_core_value_sig2914),
            onSearchPrevious: () => var_core_value_sigDADF.setSearchActiveIndex(Math.max(0, (var_core_value_sigA09B.search["activeIndex"] ?? 0) - 1)),
            onSearchNext: () => var_core_value_sigDADF.setSearchActiveIndex((var_core_value_sigA09B.search["activeIndex"] ?? -1) + 1),
            onCloseSearch: () => var_core_value_sigDADF.closeSearch(),
            extraActions: var_core_value_sig6F03(var_core_value_sigB6E9, {
              components: var_core_value_sig1DC4
            })
          }), var_core_value_sigFD56 ? var_core_value_sigA648(var_core_value_sigC0A2, {
            children: [var_core_value_sig6F03(var_core_value_sig5C3C, {
              orientation: "vertical"
            }), var_core_value_sig6F03(Mf, {
              hostUnitId: var_core_value_sigA995,
              embedId: var_core_value_sig46DD,
              variant: "menu"
            }), var_core_value_sig6F03(_g, {
              title: var_core_value_sigAEE01.t("embed-ui.basesFloating.delete"),
              className: "univer-pointer-events-auto univer-text-red-500 hover:univer-text-red-600",
              onClick: var_core_value_sig6921,
              children: var_core_value_sig6F03(var_core_value_sig4C1E, {})
            })]
          }) : null]
        })
      })]
    }), var_core_value_sig75B9 ? var_core_value_sig8E47(var_core_value_sig6F03("div", {
      ref: var_core_value_sig8074,
      "data-u-comp": "base-embed-add-view-menu",
      "data-embed-id": var_core_value_sig46DD,
      "data-embed-floating-menu-popup": "true",
      className: "univer-fixed univer-z-[900] univer-overflow-y-auto",
      style: yg(var_core_value_sig75B9),
      onPointerDown: var_core_value_sig7FD9 => var_core_value_sig7FD9.stopPropagation(),
      children: var_core_value_sig6F03(var_core_value_sig8C3D, {
        views: var_core_value_sig0EE7.map(var_core_value_sig7A3D => ({
          ...var_core_value_sig7A3D,
          label: var_core_value_sigAEE01.t(var_core_value_sig7A3D.label),
          description: var_core_value_sigAEE01.t(var_core_value_sig7A3D.description)
        })),
        onCreate: var_core_value_sig7686
      })
    }), var_core_value_sig1AB1) : null, var_core_value_sig6F03(var_core_value_sig63B4, {
      open: !!var_core_value_sigB532,
      title: var_core_value_sigAEE01.t("embed-ui.basesFloating.confirmDelete.viewTitle"),
      description: var_core_value_sigAEE01.t("embed-ui.basesFloating.confirmDelete.viewDescription"),
      onCancel: () => var_core_value_sigD529(null),
      onConfirm: var_core_value_sigBA45
    }), var_core_value_sigBAD0 ? var_core_value_sig6F03(Kh, {
      embedId: var_core_value_sig46DD,
      childUnitId: var_core_value_sigE470,
      base: var_core_value_sigE695,
      activeTable: var_core_value_sig33FD
    }) : null]
  });
}
function ug(var_core_value_sigEFFB) {
  var var_core_value_sig6DE9;
  let {
      embedId: var_core_value_sig952E,
      portalRoot: var_core_value_sigB7D11,
      activeView: var_core_value_sig09F4,
      views: var_core_value_sigE447,
      onActivateView: var_core_value_sigDB28,
      onAddView: var_core_value_sig7042,
      onConfigureView: var_core_value_sig1EAF,
      onDeleteView: var_core_value_sig50C9
    } = var_core_value_sigEFFB,
    var_core_value_sig5CD2 = var_core_value_sigC85E(var_core_value_sig21CF),
    var_core_value_sig6FD5 = var_core_value_sig17A6(null),
    var_core_value_sig414D = var_core_value_sig17A6(null),
    [var_core_value_sig4F86, var_core_value_sig51BE] = var_core_value_sigC4B6(false),
    var_core_value_sig4000 = var_core_value_sig7325 => {
      var_core_value_sig7325.preventDefault(), var_core_value_sig7325.stopPropagation();
    },
    var_core_value_sig5BB8 = ((var_core_value_sig6DE9 = var_core_value_sig6FD5.current) == null ? undefined : var_core_value_sig6DE9.getBoundingClientRect()) ?? null;
  var_core_value_sigB0BB(() => {
    if (!var_core_value_sig4F86) return;
    let var_core_value_sig4C4B1 = var_core_value_sig1617 => {
        var var_core_value_sig4169, var_core_value_sig6D19;
        let var_core_value_sig279C = var_core_value_sig1617.target instanceof Node ? var_core_value_sig1617.target : null;
        !var_core_value_sig279C || (var_core_value_sig4169 = var_core_value_sig6FD5.current) != null && var_core_value_sig4169.contains(var_core_value_sig279C) || (var_core_value_sig6D19 = var_core_value_sig414D.current) != null && var_core_value_sig6D19.contains(var_core_value_sig279C) || var_core_value_sig51BE(false);
      },
      var_core_value_sigB11B = var_core_value_sigAC51 => {
        var_core_value_sigAC51.key === "Escape" && var_core_value_sig51BE(false);
      };
    return document.addEventListener("pointerdown", var_core_value_sig4C4B1, true), document.addEventListener("keydown", var_core_value_sigB11B, true), () => {
      document.removeEventListener("pointerdown", var_core_value_sig4C4B1, true), document.removeEventListener("keydown", var_core_value_sigB11B, true);
    };
  }, [var_core_value_sig4F86]);
  let var_core_value_sigA343 = var_core_value_sigA648(var_core_value_sigC820, {
    ref: var_core_value_sig6FD5,
    type: "button",
    size: "small",
    variant: "ghost",
    className: "univer-h-8\x20univer-max-w-[220px]\x20univer-gap-2\x20univer-px-2\x20univer-text-sm\x20univer-font-medium",
    "aria-label": var_core_value_sig5CD2.t("embed-ui.basesFloating.viewSettings.title"),
    onClick: var_core_value_sig826D => {
      var_core_value_sig826D.stopPropagation(), var_core_value_sig51BE(var_core_value_sig8986 => !var_core_value_sig8986);
    },
    onMouseDown: var_core_value_sig4000,
    onPointerDown: var_core_value_sig4000,
    children: [var_core_value_sig6F03("span", {
      className: "univer-grid univer-size-4 univer-shrink-0 univer-place-items-center",
      "aria-hidden": "true",
      children: var_core_value_sig6F03(var_core_value_sigE113, {
        type: var_core_value_sig09F4.type
      })
    }), var_core_value_sig6F03("span", {
      className: "univer-min-w-0\x20univer-truncate",
      children: var_core_value_sig09F4.name
    }), var_core_value_sig6F03(var_core_value_sig7990, {
      className: "univer-size-3 univer-shrink-0"
    })]
  });
  return var_core_value_sigA648(var_core_value_sigC0A2, {
    children: [var_core_value_sig6F03(jf, {
      title: var_core_value_sig09F4.name,
      children: var_core_value_sigA343
    }), var_core_value_sig4F86 && var_core_value_sig5BB8 ? var_core_value_sig8E47(var_core_value_sigA648("div", {
      ref: var_core_value_sig414D,
      "data-u-comp": "base-embed-view-panel",
      "data-embed-id": var_core_value_sig952E,
      "data-embed-floating-menu-popup": "true",
      className: "univer-fixed univer-z-[901] univer-w-52 univer-overflow-y-auto univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-1 univer-text-sm univer-text-gray-900 univer-shadow-lg dark:!univer-border-gray-700 dark:!univer-bg-gray-900 dark:!univer-text-gray-100",
      style: bg(var_core_value_sig5BB8),
      onClick: var_core_value_sig949F => var_core_value_sig949F.stopPropagation(),
      onMouseDown: var_core_value_sig4000,
      onPointerDown: var_core_value_sig4000,
      children: [var_core_value_sig6F03("div", {
        className: "univer-grid univer-gap-0.5",
        children: var_core_value_sigE447.map(var_core_value_sig77E0 => var_core_value_sig6F03(var_core_value_sigC820, {
          type: "button",
          variant: "ghost",
          size: "small",
          className: "univer-h-8\x20univer-w-full\x20univer-px-2",
          onClick: var_core_value_sigCAF7 => {
            var_core_value_sigCAF7.stopPropagation(), var_core_value_sigDB28(var_core_value_sig77E0.id), var_core_value_sig51BE(false);
          },
          children: var_core_value_sig6F03(dg, {
            icon: var_core_value_sig6F03(var_core_value_sigE113, {
              type: var_core_value_sig77E0.type
            }),
            label: var_core_value_sig77E0.name,
            trailing: var_core_value_sig77E0.id === var_core_value_sig09F4.id ? var_core_value_sig6F03("span", {
              className: "univer-size-1.5\x20univer-rounded-full\x20univer-bg-primary-600"
            }) : null
          })
        }, var_core_value_sig77E0.id))
      }), var_core_value_sig6F03(var_core_value_sig5C3C, {}), var_core_value_sig6F03(fg, {
        icon: var_core_value_sig6F03(var_core_value_sig5CC1, {}),
        label: var_core_value_sig5CD2.t("embed-ui.basesFloating.viewSettings.addView"),
        onClick: () => {
          let var_core_value_sigD177 = var_core_value_sig6FD5.current;
          var_core_value_sigD177 && var_core_value_sig7042(var_core_value_sigD177), var_core_value_sig51BE(false);
        }
      }), var_core_value_sig6F03(fg, {
        icon: var_core_value_sig6F03(var_core_value_sig5380, {}),
        label: var_core_value_sig5CD2.t("embed-ui.basesFloating.viewSettings.configureView"),
        onClick: () => {
          let var_core_value_sig26E6 = var_core_value_sig6FD5.current;
          var_core_value_sig26E6 && var_core_value_sig1EAF(var_core_value_sig26E6), var_core_value_sig51BE(false);
        }
      }), var_core_value_sig6F03(fg, {
        danger: true,
        disabled: var_core_value_sigE447.length <= 1,
        icon: var_core_value_sig6F03(var_core_value_sig4C1E, {}),
        label: var_core_value_sig5CD2.t("embed-ui.basesFloating.viewSettings.deleteView"),
        onClick: () => {
          var_core_value_sig50C9(), var_core_value_sig51BE(false);
        }
      })]
    }), var_core_value_sigB7D11) : null]
  });
}
function dg(var_core_value_sigD28C) {
  let {
    icon: var_core_value_sig78E9,
    label: var_core_value_sigD86D,
    trailing: var_core_value_sigFE11
  } = var_core_value_sigD28C;
  return var_core_value_sigA648("span", {
    className: "univer-grid\x20univer-w-full\x20univer-grid-cols-[24px_minmax(0,1fr)_18px]\x20univer-items-center\x20univer-gap-3",
    children: [var_core_value_sig6F03("span", {
      className: "univer-grid univer-size-5 univer-place-items-center univer-text-current",
      "aria-hidden": "true",
      children: var_core_value_sig78E9
    }), var_core_value_sig6F03("span", {
      className: "univer-min-w-0 univer-truncate univer-text-left",
      children: var_core_value_sigD86D
    }), var_core_value_sig6F03("span", {
      className: "univer-grid univer-size-[18px] univer-place-items-center",
      children: var_core_value_sigFE11
    })]
  });
}
function fg(var_core_value_sig9722) {
  let {
    danger: var_core_value_sigD4C5,
    disabled: var_core_value_sigD049,
    icon: var_core_value_sigF1F8,
    label: var_core_value_sigF440,
    onClick: var_core_value_sigF594
  } = var_core_value_sig9722;
  return var_core_value_sig6F03(var_core_value_sigC820, {
    type: "button",
    variant: "ghost",
    size: "small",
    disabled: var_core_value_sigD049,
    className: var_core_value_sig522C("univer-h-8 univer-w-full univer-px-2", var_core_value_sigD4C5 && "univer-text-red-600\x20hover:univer-bg-red-50\x20hover:univer-text-red-700"),
    onClick: var_core_value_sig43D5 => {
      var_core_value_sig43D5.stopPropagation(), var_core_value_sigF594();
    },
    children: var_core_value_sig6F03(dg, {
      icon: var_core_value_sigF1F8,
      label: var_core_value_sigF440
    })
  });
}
function pg(var_core_value_sig0464, var_core_value_sig249B = {}) {
  var var_core_value_sigF4F0, var_core_value_sig841F, var_core_value_sig4BD2;
  let var_core_value_sig1522 = var_core_value_sig0464.config ?? {},
    var_core_value_sig0388 = var_core_value_sig1522.conditionalColoring,
    var_core_value_sig47A4 = Array.isArray(var_core_value_sig0388 == null ? undefined : var_core_value_sig0388.rules) ? var_core_value_sig0388.rules["length"] : 0;
  return {
    viewType: var_core_value_sig0464.type,
    filterCount: ((var_core_value_sigF4F0 = var_core_value_sig0464.filter) == null || (var_core_value_sigF4F0 = var_core_value_sigF4F0.conditions) == null ? undefined : var_core_value_sigF4F0.length) ?? 0,
    groupCount: ((var_core_value_sig841F = var_core_value_sig0464.group) == null ? undefined : var_core_value_sig841F.length) ?? 0,
    sortCount: ((var_core_value_sig4BD2 = var_core_value_sig0464.sort) == null ? undefined : var_core_value_sig4BD2.length) ?? 0,
    rowHeightActive: !!(var_core_value_sig1522.rowHeight && var_core_value_sig1522.rowHeight !== "medium"),
    conditionalColoringActive: var_core_value_sig47A4 > 0,
    conditionalColoringCount: var_core_value_sig47A4,
    canUndo: (var_core_value_sig249B.undos ?? 0) > 0,
    canRedo: (var_core_value_sig249B.redos ?? 0) > 0
  };
}
function mg(var_core_value_sigEC42, var_core_value_sigA3FB) {
  if (var_core_value_sigEC42) return (var_core_value_sigA3FB ? var_core_value_sigEC42.tables[var_core_value_sigA3FB] : undefined) ?? Zh(var_core_value_sigEC42)[0];
}
function hg(var_core_value_sig067F) {
  var var_core_value_sig9551;
  return (var_core_value_sig067F == null || (var_core_value_sig9551 = var_core_value_sig067F.viewOrder) == null ? undefined : var_core_value_sig9551.map(var_core_value_sig132C => var_core_value_sig067F.views[var_core_value_sig132C]).filter(var_core_value_sig469E => !!var_core_value_sig469E)) ?? [];
}
function gg(var_core_value_sig7F9A, var_core_value_sig3637) {
  if (var_core_value_sig7F9A) return (var_core_value_sig3637 ? var_core_value_sig7F9A.views[var_core_value_sig3637] : undefined) ?? hg(var_core_value_sig7F9A)[0];
}
function _g(var_core_value_sigC3BC) {
  let {
    children: var_core_value_sigABAF,
    title: var_core_value_sig4947,
    className: var_core_value_sig6F62,
    onClick: var_core_value_sig0430
  } = var_core_value_sigC3BC;
  return var_core_value_sig6F03(jf, {
    title: var_core_value_sig4947,
    children: var_core_value_sig6F03(var_core_value_sigC820, {
      type: "button",
      size: "small",
      variant: "ghost",
      className: var_core_value_sig522C("univer-size-6 univer-p-0", var_core_value_sig6F62),
      "aria-label": var_core_value_sig4947,
      onClick: var_core_value_sig3C91 => var_core_value_sig0430(var_core_value_sig3C91.currentTarget),
      children: var_core_value_sigABAF
    })
  });
}
function vg(var_core_value_sig200A) {
  return {
    x: var_core_value_sig200A.x,
    y: var_core_value_sig200A.y,
    width: var_core_value_sig200A.width,
    height: var_core_value_sig200A.height
  };
}
function yg(var_core_value_sigD4F4) {
  let var_core_value_sig602D = var_core_value_sigA770(var_core_value_sigD4F4, {
    width: 328,
    height: 360,
    gap: 6,
    margin: 8
  });
  return {
    top: var_core_value_sig602D.top,
    left: var_core_value_sig602D.left,
    maxHeight: var_core_value_sig602D.maxHeight
  };
}
function bg(var_core_value_sigEB0B) {
  let var_core_value_sigAE99 = var_core_value_sigA770({
    left: var_core_value_sigEB0B.right - 208,
    right: var_core_value_sigEB0B.right,
    top: var_core_value_sigEB0B.top,
    bottom: var_core_value_sigEB0B.bottom,
    width: 208,
    height: var_core_value_sigEB0B.height
  }, {
    width: 208,
    height: 320,
    gap: 8,
    margin: 8
  });
  return {
    top: var_core_value_sigAE99.top,
    left: var_core_value_sigAE99.left,
    maxHeight: var_core_value_sigAE99.maxHeight
  };
}
function xg(var_core_value_sig186C) {
  zm(var_core_value_sig186C, "bases-ui.embed", Sg);
}
function Sg(var_core_value_sig6EF8) {
  var_core_value_sig6EF8.has(var_core_value_sigFAA0) || var_core_value_sig6EF8.add([var_core_value_sigFAA0]), var_core_value_sig6EF8.has(var_core_value_sigE2C7) || var_core_value_sig6EF8.add([var_core_value_sigE2C7, {
    useFactory: () => var_core_value_sig6EF8.get(Ss)
  }]), var_core_value_sig6EF8.has(var_core_value_sigCC92) || var_core_value_sig6EF8.add([var_core_value_sigCC92, {
    useFactory: () => var_core_value_sig6EF8.get(xs)
  }]), var_core_value_sig6EF8.has(var_core_value_sigE18C) || var_core_value_sig6EF8.add([var_core_value_sigE18C, {
    useFactory: () => var_core_value_sig6EF8.get(ld)
  }]), var_core_value_sig6EF8.has(var_core_value_sigEEC7) || var_core_value_sig6EF8.add([var_core_value_sigEEC7, {
    useFactory: () => var_core_value_sig6EF8.get(X)
  }]), var_core_value_sig6EF8.has(var_core_value_sigCC79) || var_core_value_sig6EF8.add([var_core_value_sigCC79, {
    useFactory: () => wg({
      embedModelService: var_core_value_sig6EF8.get(var_core_value_sig91F2),
      restoreService: var_core_value_sig6EF8.get(ud),
      mountService: var_core_value_sig6EF8.get(cl),
      activationService: var_core_value_sig6EF8.get(dl)
    })
  }]);
  let var_core_value_sig0753 = var_core_value_sig6EF8.get(var_core_value_sig67C7),
    var_core_value_sigA1DE = var_core_value_sig6EF8.get(Rc),
    var_core_value_sigD0F7 = var_core_value_sig6EF8.get(Ic),
    var_core_value_sig5615 = var_core_value_sig6EF8.get(bs),
    var_core_value_sig2320 = var_core_value_sig6EF8.get(Lc),
    var_core_value_sig2AE5 = var_core_value_sig6EF8.get(cd),
    var_core_value_sigC29D = var_core_value_sig6EF8.get(Cd),
    var_core_value_sig2996 = oh(var_core_value_sig6EF8.has(var_core_value_sig9D18) ? var_core_value_sig6EF8.get(var_core_value_sig9D18) : undefined, var_core_value_sig6EF8.has(var_core_value_sig5DF8) ? var_core_value_sig6EF8.get(var_core_value_sig5DF8) : undefined, () => var_core_value_sig6EF8.has(var_core_value_sigCB4E) ? var_core_value_sig6EF8.get(var_core_value_sigCB4E) : undefined);
  var_core_value_sig0753.get(var_core_value_sig2996.hostType, var_core_value_sig2996.entry) || var_core_value_sig0753.register(var_core_value_sig2996);
  let var_core_value_sigFA69 = sh();
  var_core_value_sigA1DE.get(var_core_value_sigFA69.hostType, var_core_value_sigFA69.entry) || var_core_value_sigA1DE.register(var_core_value_sigFA69);
  let var_core_value_sigC292 = _h(var_core_value_sig6EF8.get(var_core_value_sigDFF6), var_core_value_sig6EF8.get(var_core_value_sigFAA0));
  var_core_value_sigD0F7.get(var_core_value_sigC292.childType) || var_core_value_sigD0F7.register(var_core_value_sigC292);
  let var_core_value_sig771F1 = Ym();
  var_core_value_sig5615.get(var_core_value_sig771F1.childType) || var_core_value_sig5615.register(var_core_value_sig771F1), tg().forEach(var_core_value_sig5A6B => {
    var_core_value_sig2320.hasExact(var_core_value_sig5A6B.hostType, var_core_value_sig5A6B.entry, var_core_value_sig5A6B.childType) || var_core_value_sig2320.register(var_core_value_sig5A6B);
  }), var_core_value_sig2AE5.registerProvider(Wf(var_core_value_sig6EF8, {
    childType: var_core_value_sigC0F3.UNIVER_BASE,
    renderManagerService: var_core_value_sigE391
  })), Cg(var_core_value_sig6EF8), var_core_value_sigC29D.get(var_core_value_sigC0F3.UNIVER_BASE) || var_core_value_sigC29D.register(ph(var_core_value_sig6EF8));
}
function Cg(var_core_value_sigCABE) {
  let var_core_value_sigC1A0 = var_core_value_sigCABE.get(Bf);
  var_core_value_sigC1A0.get(var_core_value_sigC0F3.UNIVER_BASE) || !var_core_value_sigCABE.has(var_core_value_sigCB4E) || !var_core_value_sigCABE.has(var_core_value_sig4DA3) || !var_core_value_sigCABE.has(var_core_value_sigDE56) || var_core_value_sigC1A0.register(var_core_value_sigCABE.createInstance(Xm));
}
function wg(var_core_value_sig6D59) {
  return {
    mountTableList: async var_core_value_sigD8F01 => {
      let var_core_value_sig534A = var_core_value_sig6D59.embedModelService["getDescriptor"](var_core_value_sigD8F01.baseUnitId, var_core_value_sigD8F01.embedId);
      if (!var_core_value_sig534A && var_core_value_sigD8F01.childUnitId && (var_core_value_sig534A = {
        embedId: var_core_value_sigD8F01.embedId,
        hostUnitId: var_core_value_sigD8F01.baseUnitId,
        hostType: var_core_value_sigC0F3.UNIVER_BASE,
        entry: "bases-table-list-block",
        hostAnchorId: var_core_value_sigD8F01.hostAnchorId,
        childUnitId: var_core_value_sigD8F01.childUnitId,
        childType: var_core_value_sigD8F01.childType,
        source: {
          unitType: var_core_value_sigD8F01.childType,
          ref: {
            file: {
              kind: var_core_value_sig8B2B.SELF
            },
            unit: {
              selector: var_core_value_sigD8F01.childUnitId,
              type: var_core_value_sig6893(var_core_value_sigD8F01.childType)
            }
          }
        },
        sourceMeta: {
          floating: false,
          tab: {
            enabled: true,
            container: "table-list",
            replaceHostMenu: true,
            hideHostFxBar: true,
            lockHostRibbon: true
          }
        }
      }), !(!var_core_value_sig534A || var_core_value_sig534A.hostAnchorId !== var_core_value_sigD8F01.hostAnchorId) && ((!var_core_value_sig534A.childUnitId || var_core_value_sig534A.childType == null) && (var_core_value_sig534A = await var_core_value_sig6D59.restoreService["materializeDescriptor"]({
        descriptor: var_core_value_sig534A
      })), !(!var_core_value_sig534A.childUnitId || var_core_value_sig534A.childType == null))) return var_core_value_sig6D59.mountService["mount"](var_core_value_sig534A), var_core_value_sig6D59.activationService["activateTab"](var_core_value_sig534A), var_core_value_sig9BBC(() => {
        var_core_value_sig6D59.activationService["clearTab"](var_core_value_sigD8F01.embedId), var_core_value_sig6D59.mountService["unmount"](var_core_value_sigD8F01.embedId);
      });
    }
  };
}
let Tg = class extends var_core_value_sigCBDC {
  constructor(var_core_value_sigB1E6, var_core_value_sig02FE, var_core_value_sigD80D, var_core_value_sig572B, var_core_value_sigB8EA, var_core_value_sig1494, var_core_value_sigB5E9, var_core_value_sig0862) {
    if (super(), this._context = var_core_value_sigB1E6, this._embedModelService = var_core_value_sig02FE, this._domLayerService = var_core_value_sigD80D, this._boardElementService = var_core_value_sig572B, this._boardElementStateService = var_core_value_sigB8EA, this._boardUIStateService = var_core_value_sig1494, this._configService = var_core_value_sigB5E9, this._commandService = var_core_value_sig0862, Y(this, "_items", new Map()), Y(this, "_activeDragCleanup", undefined), Y(this, "_routeWheelToHost", var_core_value_sigED1C => {
      var var_core_value_sig726E, var_core_value_sig2CD3;
      let var_core_value_sig038E = (var_core_value_sig726E = (var_core_value_sig2CD3 = this._context["engine"]).getCanvasElement) == null ? undefined : var_core_value_sig726E.call(var_core_value_sig2CD3);
      return var_core_value_sig038E ? (var_core_value_sig038E.dispatchEvent(new WheelEvent("wheel", {
        bubbles: true,
        cancelable: true,
        clientX: var_core_value_sigED1C.clientX,
        clientY: var_core_value_sigED1C.clientY,
        ctrlKey: var_core_value_sigED1C.ctrlKey,
        deltaMode: var_core_value_sigED1C.deltaMode,
        deltaX: var_core_value_sigED1C.deltaX,
        deltaY: var_core_value_sigED1C.deltaY,
        deltaZ: var_core_value_sigED1C.deltaZ,
        metaKey: var_core_value_sigED1C.metaKey,
        shiftKey: var_core_value_sigED1C.shiftKey
      })), true) : false;
    }), Y(this, "_resolveHostWheelGestureRoot", var_core_value_sigAA1E => {
      var var_core_value_sigC9F5, var_core_value_sig7EEA;
      let var_core_value_sig59CE1 = (var_core_value_sigC9F5 = (var_core_value_sig7EEA = this._context["engine"]).getCanvasElement) == null ? undefined : var_core_value_sigC9F5.call(var_core_value_sig7EEA);
      if (!var_core_value_sig59CE1) return null;
      let var_core_value_sig33C81 = var_core_value_sigAA1E;
      for (; var_core_value_sig33C81 && !var_core_value_sig33C81.contains(var_core_value_sig59CE1);) var_core_value_sig33C81 = var_core_value_sig33C81.parentElement;
      return var_core_value_sig33C81;
    }), Promise.resolve().then(() => this._sync()), typeof document < "u") {
      let var_core_value_sig957F = var_core_value_sigCDDA => this._handleDragStart(var_core_value_sigCDDA);
      document.addEventListener(af, var_core_value_sig957F), this.disposeWithMe(var_core_value_sig9BBC(() => document.removeEventListener(af, var_core_value_sig957F)));
    }
    this.disposeWithMe(this._commandService["onCommandExecuted"](var_core_value_sig803B => {
      (var_core_value_sig803B.id === var_core_value_sig262A.id || var_core_value_sig803B.id === var_core_value_sig793D.id || var_core_value_sig803B.id === var_core_value_sigE2AE.id || var_core_value_sig803B.id === var_core_value_sig4A4D.id) && this._sync();
    })), [this._boardElementService["elementAdd$"], this._boardElementService["elementUpdate$"], this._boardElementService["elementRemove$"]].forEach(var_core_value_sig5830 => {
      let var_core_value_sig4A7C = var_core_value_sig5830.subscribe(var_core_value_sigE2431 => {
        var_core_value_sigE2431.some(var_core_value_sig4383 => var_core_value_sig4383.unitId === this._context["unitId"]) && this._sync();
      });
      this.disposeWithMe(var_core_value_sig9BBC(() => var_core_value_sig4A7C.unsubscribe()));
    });
  }
  dispose() {
    var var_core_value_sig9099;
    (var_core_value_sig9099 = this._activeDragCleanup) == null || var_core_value_sig9099.call(this), this._activeDragCleanup = undefined, this._items["forEach"](var_core_value_sigF975 => var_core_value_sigF975.dispose()), this._items["clear"](), super.dispose();
  }
  _sync() {
    let var_core_value_sigC317 = this._context["unitId"];
    if (this._embedModelService["getActiveDescriptorsByChildUnit"](var_core_value_sigC317).length > 0) {
      this._clearItems();
      return;
    }
    let var_core_value_sig2746 = this._boardElementService["getElementDataForUnit"](var_core_value_sigC317),
      var_core_value_sig71B8 = new Set();
    this._embedModelService["getActiveDescriptors"](var_core_value_sigC317).filter(var_core_value_sigCDAF => var_core_value_sigCDAF.entry === var_core_value_sigA392.BoardsFloatingObject).forEach(var_core_value_sigA298 => {
      let var_core_value_sig0B40 = Object.values(var_core_value_sig2746).find(var_core_value_sig74A8 => {
          var var_core_value_sig21B2;
          return var_core_value_sig524C((var_core_value_sig21B2 = var_core_value_sig74A8.data[var_core_value_sigA298.hostAnchorId]) == null ? undefined : var_core_value_sig21B2.element);
        }),
        var_core_value_sig330B = var_core_value_sig0B40 == null ? undefined : var_core_value_sig0B40.data[var_core_value_sigA298.hostAnchorId],
        var_core_value_sig3625 = var_core_value_sig330B == null ? undefined : var_core_value_sig330B.element;
      if (!var_core_value_sig0B40 || !var_core_value_sig330B || !var_core_value_sig524C(var_core_value_sig3625)) return;
      let var_core_value_sig0B4E = var_core_value_sig4C62(var_core_value_sig3625),
        var_core_value_sig0E9F = this._itemId(var_core_value_sigA298.hostAnchorId);
      var_core_value_sig71B8.add(var_core_value_sig0E9F);
      let var_core_value_sigE5BA = {
          left: var_core_value_sig3625.transform["left"] ?? 0,
          top: var_core_value_sig3625.transform["top"] ?? 0,
          width: var_core_value_sig3625.transform["width"] ?? 560,
          height: var_core_value_sig3625.transform["height"] ?? 360
        },
        var_core_value_sig4A83 = () => var_core_value_sigBCAF(Lf, {
          data: {
            version: 1,
            embedId: var_core_value_sigA298.embedId,
            hostUnitId: var_core_value_sigC317,
            hostAnchorId: var_core_value_sigA298.hostAnchorId,
            childUnitId: var_core_value_sigA298.childUnitId ?? (var_core_value_sig0B4E == null ? undefined : var_core_value_sig0B4E.childUnitId),
            childType: var_core_value_sigA298.childType ?? (var_core_value_sig0B4E == null ? undefined : var_core_value_sig0B4E.childType)
          },
          enableStage1BodyDrag: true,
          hostFloatDomLayout$: this._boardUIStateService["state$"],
          onHostWheel: this._routeWheelToHost,
          resolveHostWheelGestureRoot: this._resolveHostWheelGestureRoot,
          onRuntimeStageEnter: var_core_value_sig186C1 => this._setAnchorTransformerVisible(var_core_value_sig186C1 !== "stage2", var_core_value_sig330B.subUnitId, var_core_value_sigA298.hostAnchorId)
        });
      this._items["has"](var_core_value_sig0E9F) ? this._domLayerService["updateItem"](var_core_value_sig0E9F, {
        rect: var_core_value_sigE5BA,
        content: var_core_value_sig4A83
      }) : this._items["set"](var_core_value_sig0E9F, this._domLayerService["registerItem"]({
        id: var_core_value_sig0E9F,
        unitId: var_core_value_sigC317,
        subUnitId: var_core_value_sig330B.subUnitId,
        elementId: var_core_value_sigA298.hostAnchorId,
        rect: var_core_value_sigE5BA,
        content: var_core_value_sig4A83,
        interactive: true,
        showResizeGuide: true
      }));
    }), this._items["forEach"]((var_core_value_sig58AA, var_core_value_sig84C4) => {
      var_core_value_sig71B8.has(var_core_value_sig84C4) || (var_core_value_sig58AA.dispose(), this._items["delete"](var_core_value_sig84C4));
    });
  }
  _itemId(var_core_value_sigFD40) {
    return "board-embed:" + this._context["unitId"] + ":" + var_core_value_sigFD40;
  }
  _selectAnchor(var_core_value_sig152B, var_core_value_sig0334) {
    this._boardElementStateService["selectElements"]({
      unitId: this._context["unitId"],
      subUnitId: var_core_value_sig152B
    }, [var_core_value_sig0334], var_core_value_sig0334);
  }
  _setAnchorTransformerVisible(var_core_value_sigE424, var_core_value_sigCDE2, var_core_value_sigD2B0) {
    if (var_core_value_sigE424) {
      this._selectAnchor(var_core_value_sigCDE2, var_core_value_sigD2B0);
      return;
    }
    this._boardElementStateService["clearSelection"]();
  }
  _handleDragStart(var_core_value_sig4E8D) {
    var var_core_value_sig9675, var_core_value_sig24B6, var_core_value_sig283C, var_core_value_sig062F;
    let var_core_value_sig96C7 = var_core_value_sig4E8D.detail;
    if (!var_core_value_sig96C7 || var_core_value_sig96C7.hostUnitId !== this._context["unitId"]) return;
    let var_core_value_sig8D501 = this._boardElementService["getElementDataForUnit"](this._context["unitId"]),
      var_core_value_sigB5EA = Object.values(var_core_value_sig8D501).find(var_core_value_sigB6F7 => var_core_value_sigB6F7.data[var_core_value_sig96C7.hostAnchorId]),
      var_core_value_sigE952 = var_core_value_sigB5EA == null ? undefined : var_core_value_sigB5EA.data[var_core_value_sig96C7.hostAnchorId];
    if (!var_core_value_sigB5EA || !var_core_value_sigE952 || !var_core_value_sig524C(var_core_value_sigE952.element) || ((var_core_value_sig9675 = var_core_value_sig4C62(var_core_value_sigE952.element)) == null ? undefined : var_core_value_sig9675.embedId) !== var_core_value_sig96C7.embedId) return;
    let var_core_value_sigE241 = (var_core_value_sig24B6 = (var_core_value_sig283C = this._context["engine"]).getCanvasElement) == null ? undefined : var_core_value_sig24B6.call(var_core_value_sig283C);
    if (!var_core_value_sigE241) return;
    (var_core_value_sig062F = this._activeDragCleanup) == null || var_core_value_sig062F.call(this), this._selectAnchor(var_core_value_sigE952.subUnitId, var_core_value_sig96C7.hostAnchorId), this._setAnchorTransformerVisible(false, var_core_value_sigE952.subUnitId, var_core_value_sig96C7.hostAnchorId);
    let var_core_value_sig9C99 = var_core_value_sigE952.element,
      var_core_value_sigD135 = var_core_value_sig9C99.transform["left"] ?? 0,
      var_core_value_sig0891 = var_core_value_sig9C99.transform["top"] ?? 0,
      var_core_value_sigF788 = this._boardUIStateService["getState"](),
      var_core_value_sigE094 = var_core_value_sig827B(this._configService["getConfig"](var_core_value_sig4CAE) ?? undefined),
      var_core_value_sig0BC4 = var_core_value_sigA2E7(var_core_value_sigE241, var_core_value_sig96C7.clientX, var_core_value_sig96C7.clientY, {
        zoomRatio: var_core_value_sigF788.zoomRatio,
        panOffset: var_core_value_sigF788.viewportPanOffset
      }, var_core_value_sigE094),
      var_core_value_sig8F20 = document.defaultView ?? window,
      var_core_value_sigB8CA = (var_core_value_sigB495, var_core_value_sig70D0) => {
        let var_core_value_sig2A8A = this._boardUIStateService["getState"](),
          var_core_value_sig3782 = var_core_value_sigA2E7(var_core_value_sigE241, var_core_value_sigB495, var_core_value_sig70D0, {
            zoomRatio: var_core_value_sig2A8A.zoomRatio,
            panOffset: var_core_value_sig2A8A.viewportPanOffset
          }, var_core_value_sigE094);
        return {
          left: var_core_value_sigD135 + var_core_value_sig3782.x - var_core_value_sig0BC4.x,
          top: var_core_value_sig0891 + var_core_value_sig3782.y - var_core_value_sig0BC4.y
        };
      },
      var_core_value_sig4663 = (var_core_value_sigD22E, var_core_value_sig3455) => {
        let var_core_value_sig5CEF = var_core_value_sigB8CA(var_core_value_sigD22E, var_core_value_sig3455);
        return this._domLayerService["updateItem"](this._itemId(var_core_value_sig96C7.hostAnchorId), {
          rect: {
            ...var_core_value_sig5CEF,
            width: var_core_value_sig9C99.transform["width"] ?? 560,
            height: var_core_value_sig9C99.transform["height"] ?? 360
          }
        }), var_core_value_sig5CEF;
      },
      var_core_value_sig59701 = var_core_value_sig43D51 => var_core_value_sig96C7.pointerId == null || var_core_value_sig43D51.pointerId === var_core_value_sig96C7.pointerId,
      var_core_value_sig7D63 = () => {},
      var_core_value_sig7713 = var_core_value_sig1395 => {
        var_core_value_sig59701(var_core_value_sig1395) && (var_core_value_sig1395.preventDefault(), var_core_value_sig4663(var_core_value_sig1395.clientX, var_core_value_sig1395.clientY));
      },
      var_core_value_sigD598 = async var_core_value_sig9FA0 => {
        if (!var_core_value_sig59701(var_core_value_sig9FA0)) return;
        var_core_value_sig7D63(), var_core_value_sig9FA0.preventDefault();
        let var_core_value_sig055E = var_core_value_sig4663(var_core_value_sig9FA0.clientX, var_core_value_sig9FA0.clientY);
        await this._commandService["executeCommand"](var_core_value_sig91A9.id, {
          unitId: this._context["unitId"],
          subUnitId: var_core_value_sigE952.subUnitId,
          elementId: var_core_value_sig96C7.hostAnchorId,
          element: var_core_value_sig9C99,
          transform: {
            ...var_core_value_sigE952.transform,
            ...var_core_value_sig055E
          }
        }).finally(() => {
          this._sync(), this._setAnchorTransformerVisible(true, var_core_value_sigE952.subUnitId, var_core_value_sig96C7.hostAnchorId);
        });
      },
      var_core_value_sig61E6 = var_core_value_sig7C77 => {
        var_core_value_sig59701(var_core_value_sig7C77) && (var_core_value_sig7D63(), this._sync(), this._setAnchorTransformerVisible(true, var_core_value_sigE952.subUnitId, var_core_value_sig96C7.hostAnchorId));
      };
    var_core_value_sig7D63 = () => {
      var_core_value_sig8F20.removeEventListener("pointermove", var_core_value_sig7713), var_core_value_sig8F20.removeEventListener("pointerup", var_core_value_sigD598), var_core_value_sig8F20.removeEventListener("pointercancel", var_core_value_sig61E6), this._activeDragCleanup === var_core_value_sig7D63 && (this._activeDragCleanup = undefined);
    }, var_core_value_sig8F20.addEventListener("pointermove", var_core_value_sig7713), var_core_value_sig8F20.addEventListener("pointerup", var_core_value_sigD598), var_core_value_sig8F20.addEventListener("pointercancel", var_core_value_sig61E6), this._activeDragCleanup = var_core_value_sig7D63;
  }
  _clearItems() {
    this._items["forEach"](var_core_value_sig9578 => var_core_value_sig9578.dispose()), this._items["clear"]();
  }
};
Tg = $([Q(1, var_core_value_sig205B(var_core_value_sig91F2)), Q(2, var_core_value_sig205B(var_core_value_sig01ED)), Q(3, var_core_value_sig205B(var_core_value_sig98EA)), Q(4, var_core_value_sig205B(var_core_value_sig912D)), Q(5, var_core_value_sig205B(var_core_value_sig41C0)), Q(6, var_core_value_sig7B6F), Q(7, var_core_value_sigDFF6)], Tg);
function Eg() {
  return {
    ...Gm({
      childType: var_core_value_sigC0F3.UNIVER_BOARD,
      productName: "Boards",
      hostChromeMode: "none"
    }),
    presentationPolicy: {
      getChromeCss: () => '\n [data-embed-presentation-runtime="true"] [data-board-left-toolbar="true"],\n [data-embed-presentation-runtime="true"] [data-board-top-right-menu="true"],\n [data-embed-presentation-runtime="true"] [data-board-zoom-controls="true"],\n [data-embed-presentation-runtime="true"] [data-board-help-control="true"],\n [data-embed-presentation-runtime="true"] [data-board-object-list-panel="true"],\n [data-embed-presentation-runtime="true"] [data-board-shape-panel="true"],\n [data-embed-presentation-runtime="true"] [data-board-floating-panel-layer="true"],\n [data-embed-presentation-runtime="true"] [data-u-comp="shape-text-editor-position-wrapper"],\n [data-embed-presentation-runtime="true"] [data-u-comp="shape-floating-toolbar"],\n [data-embed-presentation-runtime="true"] [data-u-comp="editor-ui-floating-container"] {\n display: none !important;\n }\n '
    }
  };
}
function Dg() {
  return {
    hostType: var_core_value_sigC0F3.UNIVER_BOARD,
    entry: var_core_value_sigA392.BoardsFloatingObject,
    layout: "scroll-contained",
    supportedLayouts: ["scroll-contained", "doc-width-scale", "aspect-fit"],
    menuBehavior: "floating"
  };
}
function Og() {
  return {
    childType: var_core_value_sigC0F3.UNIVER_BOARD,
    handleWheel: var_core_value_sig054F => {
      let var_core_value_sig9047 = var_core_value_sig054F.runtimeScope["injector"];
      if (!(var_core_value_sig9047 != null && var_core_value_sig9047.has(var_core_value_sig41C0))) return false;
      let var_core_value_sigB9FA = (var_core_value_sig054F.runtimeScope["roots"].content["querySelector"]('[data-board-viewport-host="true"]') ?? var_core_value_sig054F.runtimeScope["roots"].content).getBoundingClientRect(),
        var_core_value_sigF8DB = var_core_value_sig827B(var_core_value_sig9047.has(var_core_value_sig7B6F) ? var_core_value_sig9047.get(var_core_value_sig7B6F).getConfig(var_core_value_sig4CAE) : undefined),
        var_core_value_sig6E53 = var_core_value_sig21E0({
          event: var_core_value_sig054F.event,
          interactionConfig: var_core_value_sigF8DB,
          viewportRect: var_core_value_sigB9FA
        });
      if (var_core_value_sig6E53.type === "none") return false;
      let var_core_value_sig5812 = var_core_value_sig9047.get(var_core_value_sig41C0);
      return var_core_value_sig6E53.type === "pan" ? var_core_value_sig5812.shiftViewportPanOffset(var_core_value_sig6E53.delta) : var_core_value_sig5812.setZoomRatioAtViewportPoint(var_core_value_sig5812.getState().zoomRatio * var_core_value_sig6E53.zoomFactor, var_core_value_sig6E53.viewportPoint), true;
    }
  };
}
function kg(var_core_value_sigDD221) {
  return {
    childType: var_core_value_sigC0F3.UNIVER_BOARD,
    supportedLayouts: ["content-bounds-fit", "tab-peer", "scroll-contained"],
    scopedDependencies: var_core_value_sig574C.getRuntimeScopedDependencies(var_core_value_sigDD221),
    beforeDeactivate: Ag,
    mount: jg
  };
}
function Ag(var_core_value_sig5CCD) {
  let var_core_value_sig6E3C = var_core_value_sig5CCD.runtimeScope["injector"];
  if (var_core_value_sig6E3C.has(var_core_value_sig14DE) && var_core_value_sig6E3C.get(var_core_value_sig14DE).close(), var_core_value_sig6E3C.has(var_core_value_sig59A0) && var_core_value_sig6E3C.get(var_core_value_sig59A0).cancelEditing(), var_core_value_sig6E3C.has(var_core_value_sig912D)) {
    let var_core_value_sig343C = var_core_value_sig6E3C.get(var_core_value_sig912D);
    var_core_value_sig343C.clearActiveEditing(), var_core_value_sig343C.clearSelection();
  }
}
function jg(var_core_value_sig80C4) {
  var var_core_value_sigE1B11, var_core_value_sig5287;
  let var_core_value_sigF9DF = var_core_value_sig80C4.injector["get"](var_core_value_sig5DF8).getUnit(var_core_value_sig80C4.childUnitId, var_core_value_sigC0F3.UNIVER_BOARD),
    var_core_value_sig99CE1 = var_core_value_sig80C4.runtimeScope["injector"];
  if (!var_core_value_sigF9DF || !var_core_value_sig99CE1) return;
  let var_core_value_sig9669 = var_core_value_sig80C4.injector["get"](var_core_value_sigE391),
    var_core_value_sigC91C = Kc(var_core_value_sig9669, var_core_value_sig80C4.childUnitId, var_core_value_sig99CE1);
  if (!var_core_value_sigC91C) return;
  let var_core_value_sig03D2 = Sl(var_core_value_sig80C4.runtimeScope["roots"].content);
  var_core_value_sig03D2.render(var_core_value_sigA648(fl, {
    injector: var_core_value_sig99CE1,
    mountContainer: var_core_value_sig80C4.runtimeScope["roots"].popup,
    embedId: var_core_value_sig80C4.embedId,
    children: [var_core_value_sig6F03(var_core_value_sig5BC0, {
      embedded: var_core_value_sig80C4.renderScope["mode"] === "float" && !var_core_value_sig80C4.renderScope["fullscreen"],
      fitOnMount: false,
      showZoomControls: var_core_value_sig80C4.renderScope["mode"] === "tab" || var_core_value_sig80C4.renderScope["fullscreen"] === true
    }), var_core_value_sig6F03(var_core_value_sig9A95, {
      positionRoot: var_core_value_sig80C4.runtimeScope["roots"].content
    }), var_core_value_sig6F03(var_core_value_sig6DC7, {})]
  }));
  let var_core_value_sigE8351 = var_core_value_sig80C4.renderScope["mode"] !== "float" || var_core_value_sig80C4.renderScope["fullscreen"] ? var_core_value_sig80C4.injector["get"](Es).activatePortalScope(var_core_value_sig80C4.embedId, var_core_value_sig80C4.runtimeScope["roots"].content["ownerDocument"], {
    includeAppShellEditorPortal: false
  }) : undefined;
  Jc(var_core_value_sigC91C, {
    activate: true
  });
  let var_core_value_sigC72D = (var_core_value_sigE1B11 = (var_core_value_sig5287 = globalThis).requestAnimationFrame) == null ? undefined : var_core_value_sigE1B11.call(var_core_value_sig5287, () => {
    let var_core_value_sigD924 = var_core_value_sig80C4.runtimeScope["roots"].content["querySelector"]('[data-board-viewport-host="true"]'),
      var_core_value_sig02D4 = (var_core_value_sigD924 == null ? undefined : var_core_value_sigD924.getBoundingClientRect()) ?? var_core_value_sig80C4.runtimeScope["roots"].content["getBoundingClientRect"](),
      var_core_value_sigEFE7 = var_core_value_sig827B(var_core_value_sig99CE1.get(var_core_value_sig7B6F).getConfig(var_core_value_sig4CAE) ?? undefined);
    var_core_value_sig99CE1.get(var_core_value_sigC736).fitContent(var_core_value_sigF9DF, {
      viewportSize: {
        width: var_core_value_sig02D4.width,
        height: var_core_value_sig02D4.height
      },
      padding: Math.max(16, Math.min(64, Math.min(var_core_value_sig02D4.width, var_core_value_sig02D4.height) * 0.08)),
      zoom: var_core_value_sigEFE7
    });
  });
  return var_core_value_sig9BBC(() => {
    if (var_core_value_sigC72D != null) {
      var var_core_value_sig9277, var_core_value_sig2AE51;
      (var_core_value_sig9277 = (var_core_value_sig2AE51 = globalThis).cancelAnimationFrame) == null || var_core_value_sig9277.call(var_core_value_sig2AE51, var_core_value_sigC72D);
    }
    try {
      var var_core_value_sigE274, var_core_value_sig305B;
      (var_core_value_sigE274 = (var_core_value_sig305B = var_core_value_sigC91C.engine).unmount) == null || var_core_value_sigE274.call(var_core_value_sig305B);
    } catch {}
    var_core_value_sig9669.removeRender(var_core_value_sig80C4.childUnitId), Cl(var_core_value_sig03D2), var_core_value_sigE8351 == null || var_core_value_sigE8351.dispose(), var_core_value_sig99CE1.dispose();
  });
}
function Mg() {
  return Wh({
    childType: var_core_value_sigC0F3.UNIVER_BOARD,
    mount: Ng
  });
}
function Ng(var_core_value_sig9E73) {
  if (var_core_value_sig9E73.renderScope["fullscreen"]) return;
  let {
      menu: var_core_value_sig2112,
      portalContainer: var_core_value_sigD46A
    } = Vh(var_core_value_sig9E73),
    var_core_value_sigCA961 = Sl(var_core_value_sig2112);
  return var_core_value_sigCA961.render(var_core_value_sigBCAF(fl, {
    injector: var_core_value_sig9E73.runtimeScope["injector"],
    mountContainer: var_core_value_sigD46A,
    embedId: var_core_value_sig9E73.embedId
  }, var_core_value_sigBCAF(Pg, {
    hostUnitId: var_core_value_sig9E73.hostUnitId,
    embedId: var_core_value_sig9E73.embedId,
    childUnitId: var_core_value_sig9E73.childUnitId,
    viewportRoot: var_core_value_sig9E73.runtimeScope["roots"].content,
    fullscreen: !!var_core_value_sig9E73.renderScope["fullscreen"]
  }))), var_core_value_sig9BBC(() => {
    Cl(var_core_value_sigCA961), globalThis.setTimeout(() => var_core_value_sig2112.remove(), 0);
  });
}
function Pg(var_core_value_sigC3E81) {
  let {
      hostUnitId: var_core_value_sig617E1,
      embedId: var_core_value_sig88EF,
      childUnitId: var_core_value_sigB7EC1,
      viewportRoot: var_core_value_sigAF24,
      fullscreen: var_core_value_sig3CE6
    } = var_core_value_sigC3E81,
    var_core_value_sigF606 = var_core_value_sigC85E(var_core_value_sigDFF6),
    var_core_value_sig6AAF = var_core_value_sigC85E(var_core_value_sig7B6F),
    var_core_value_sigED24 = var_core_value_sigC85E(var_core_value_sig5DF8),
    var_core_value_sigEFCC = var_core_value_sigC85E(var_core_value_sig21CF),
    var_core_value_sig725D = var_core_value_sigC85E(xs),
    var_core_value_sigE65C = var_core_value_sigC85E(var_core_value_sig41C0),
    var_core_value_sig215F = var_core_value_sigC85E(var_core_value_sigC736),
    var_core_value_sig2559 = var_core_value_sig146E(() => var_core_value_sigE65C.state$, var_core_value_sigE65C.getState(), false, [var_core_value_sigE65C]),
    var_core_value_sig01D7 = Ig({
      embedId: var_core_value_sig88EF,
      active: var_core_value_sig146E(() => var_core_value_sig725D.active$, var_core_value_sig725D.getActive(), false, [var_core_value_sig725D]),
      fullscreen: var_core_value_sig3CE6
    }),
    var_core_value_sig5839 = var_core_value_sigED24.getUnit(var_core_value_sigB7EC1, var_core_value_sigC0F3.UNIVER_BOARD),
    var_core_value_sigF6A5 = var_core_value_sig827B(var_core_value_sig6AAF.getConfig(var_core_value_sig4CAE) ?? undefined),
    var_core_value_sig80BE = () => var_core_value_sigAF24.getBoundingClientRect(),
    var_core_value_sig59A5 = () => ({
      x: var_core_value_sig80BE().width / 2,
      y: var_core_value_sig80BE().height / 2
    }),
    var_core_value_sig816D = var_core_value_sigAE39 => var_core_value_sigE65C.setZoomRatioAtViewportPoint(var_core_value_sigAE39, var_core_value_sig59A5());
  return var_core_value_sigA648("div", {
    className: var_core_value_sig522C("univer-board-embed-floating-menu univer-pointer-events-auto univer-box-border univer-inline-flex univer-h-8 univer-items-center univer-gap-1 univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-1 univer-text-gray-900 univer-shadow-lg dark:!univer-border-gray-600 dark:!univer-bg-gray-900 dark:!univer-text-gray-0", {
      "univer-hidden": var_core_value_sig01D7 === "inactive",
      "univer-static\x20univer-mx-auto\x20univer-my-1.5\x20univer-translate-x-0": var_core_value_sig3CE6,
      "univer-absolute\x20univer-left-1/2\x20univer-z-[30]\x20-univer-translate-x-1/2": !var_core_value_sig3CE6,
      "-univer-top-[44px]": !var_core_value_sig3CE6
    }),
    "data-embed-floating-menu": "true",
    "data-embed-id": var_core_value_sig88EF,
    "data-embed-float-stage": var_core_value_sig01D7,
    onPointerDown: var_core_value_sigF21C => var_core_value_sigF21C.stopPropagation(),
    children: [var_core_value_sig6F03(Fg, {
      title: var_core_value_sigEFCC.t("embed-ui.boardsFloating.fitContent"),
      onClick: () => {
        let var_core_value_sig66D1 = var_core_value_sig80BE();
        var_core_value_sig215F.fitContent(var_core_value_sig5839 ?? null, {
          viewportSize: {
            width: var_core_value_sig66D1.width,
            height: var_core_value_sig66D1.height
          },
          padding: Math.max(16, Math.min(64, Math.min(var_core_value_sig66D1.width, var_core_value_sig66D1.height) * 0.08)),
          zoom: var_core_value_sigF6A5
        });
      },
      children: var_core_value_sig6F03(var_core_value_sigA462, {})
    }), var_core_value_sig6F03(Fg, {
      title: var_core_value_sigEFCC.t("embed-ui.boardsFloating.zoomOut"),
      onClick: () => var_core_value_sig816D(var_core_value_sig2559.zoomRatio - var_core_value_sigF6A5.zoomStep),
      children: var_core_value_sig6F03(var_core_value_sig8ECB, {})
    }), var_core_value_sigA648(Fg, {
      title: var_core_value_sigEFCC.t("embed-ui.boardsFloating.resetZoom"),
      noIcon: true,
      onClick: () => var_core_value_sig816D(1),
      children: [Math.round(var_core_value_sig2559.zoomRatio * 100), "%"]
    }), var_core_value_sig6F03(Fg, {
      title: var_core_value_sigEFCC.t("embed-ui.boardsFloating.zoomIn"),
      onClick: () => var_core_value_sig816D(var_core_value_sig2559.zoomRatio + var_core_value_sigF6A5.zoomStep),
      children: var_core_value_sig6F03(var_core_value_sig5120, {})
    }), var_core_value_sig6F03(Mf, {
      hostUnitId: var_core_value_sig617E1,
      embedId: var_core_value_sig88EF,
      variant: "menu"
    }), var_core_value_sig6F03(Fg, {
      title: var_core_value_sigEFCC.t("embed-ui.boardsFloating.delete"),
      className: "univer-text-red-500",
      onClick: async () => var_core_value_sigF606.executeCommand(var_core_value_sig793D.id, {
        hostUnitId: var_core_value_sig617E1,
        embedId: var_core_value_sig88EF
      }),
      children: var_core_value_sig6F03(var_core_value_sig4C1E, {})
    })]
  });
}
function Fg(var_core_value_sig192C) {
  let {
    children: var_core_value_sig71B1,
    className: var_core_value_sigB1A3,
    noIcon: var_core_value_sigF2B5,
    onClick: var_core_value_sigE355,
    title: var_core_value_sigB624
  } = var_core_value_sig192C;
  return var_core_value_sig6F03(jf, {
    title: var_core_value_sigB624,
    children: var_core_value_sig6F03(var_core_value_sig58BD, {
      "aria-label": var_core_value_sigB624,
      className: var_core_value_sigB1A3,
      noIcon: var_core_value_sigF2B5,
      onClick: var_core_value_sigE355,
      children: var_core_value_sig71B1
    })
  });
}
function Ig(var_core_value_sig3A87) {
  var var_core_value_sigE894;
  return var_core_value_sig3A87.fullscreen ? "stage2" : ((var_core_value_sigE894 = var_core_value_sig3A87.active) == null ? undefined : var_core_value_sigE894.embedId) === var_core_value_sig3A87.embedId ? var_core_value_sig3A87.active["stage"] ?? "stage1" : "inactive";
}
function Lg(var_core_value_sig4400) {
  zm(var_core_value_sig4400, "boards-ui.embed", Rg);
}
function Rg(var_core_value_sig8925) {
  var_core_value_sig8925.has(var_core_value_sig565B) || var_core_value_sig8925.add([var_core_value_sig565B, {
    useFactory: () => var_core_value_sig8925.get(X)
  }]);
  let var_core_value_sig33D21 = var_core_value_sig8925.get(Rc),
    var_core_value_sig1F5A = var_core_value_sig8925.get(Ic),
    var_core_value_sig3F85 = var_core_value_sig8925.get(bs),
    var_core_value_sig1F9F = var_core_value_sig8925.get(Lc),
    var_core_value_sig3605 = var_core_value_sig8925.get(cd),
    var_core_value_sigA05F = var_core_value_sig8925.get(Cd),
    var_core_value_sig6707 = Dg();
  var_core_value_sig33D21.get(var_core_value_sig6707.hostType, var_core_value_sig6707.entry) || var_core_value_sig33D21.register(var_core_value_sig6707);
  let var_core_value_sig30AE = kg(var_core_value_sig8925);
  var_core_value_sig1F5A.get(var_core_value_sig30AE.childType) || var_core_value_sig1F5A.register(var_core_value_sig30AE);
  let var_core_value_sig93D01 = Eg();
  var_core_value_sig3F85.get(var_core_value_sig93D01.childType) || var_core_value_sig3F85.register(var_core_value_sig93D01), Mg().forEach(var_core_value_sig83A6 => {
    var_core_value_sig1F9F.hasExact(var_core_value_sig83A6.hostType, var_core_value_sig83A6.entry, var_core_value_sig83A6.childType) || var_core_value_sig1F9F.register(var_core_value_sig83A6);
  }), var_core_value_sig3605.registerProvider(Wf(var_core_value_sig8925, {
    childType: var_core_value_sigC0F3.UNIVER_BOARD,
    renderManagerService: var_core_value_sigE391
  })), var_core_value_sigA05F.get(var_core_value_sigC0F3.UNIVER_BOARD) || var_core_value_sigA05F.register(Og()), var_core_value_sig8925.get(var_core_value_sigE391).registerRenderModule(var_core_value_sigC0F3.UNIVER_BOARD, Tg);
}
const zg = {
  mode: "fit-width",
  target: "container",
  paddingX: 0,
  minScale: 0,
  align: "start"
};
function Bg() {
  return Um({
    childType: var_core_value_sigC0F3.UNIVER_DOC,
    productName: "Docs"
  });
}
function Vg() {
  return {
    childType: var_core_value_sigC0F3.UNIVER_DOC,
    supportedLayouts: ["tab-peer", "doc-width-scale", "scroll-contained"],
    scopedDependencies: [[var_core_value_sig9F81]],
    beforeDeactivate: var_core_value_sig7D8E => {
      Ug(var_core_value_sig7D8E);
    },
    mount: var_core_value_sigADFE => {
      let var_core_value_sigF11A = var_core_value_sigADFE.renderScope["mode"] === "float" && !var_core_value_sigADFE.renderScope["fullscreen"] ? Bc(var_core_value_sigADFE, var_core_value_sigE391, undefined, {
          scopedInjector: Wg(var_core_value_sigADFE.runtimeScope["injector"])
        }) : Bc(var_core_value_sigADFE, var_core_value_sigE391),
        var_core_value_sigF020 = Hg(var_core_value_sigADFE);
      return var_core_value_sig9BBC(() => {
        var_core_value_sigF020.dispose(), var_core_value_sigF11A == null || var_core_value_sigF11A.dispose();
      });
    }
  };
}
function Hg(var_core_value_sig1F45) {
  let var_core_value_sig591C = var_core_value_sig1F45.runtimeScope["roots"].canvas ?? var_core_value_sig1F45.renderScope["canvasRoot"];
  if (!var_core_value_sig591C) return var_core_value_sig9BBC(() => {});
  let var_core_value_sigB5A8 = var_core_value_sig1F45.injector["get"](var_core_value_sigE391),
    var_core_value_sig5E03 = var_core_value_sigAECB => {
      var var_core_value_sigF7591;
      if (!(var_core_value_sigAECB.target instanceof HTMLCanvasElement) || !var_core_value_sig591C.contains(var_core_value_sigAECB.target)) return;
      let var_core_value_sig52AE = (var_core_value_sigF7591 = var_core_value_sigB5A8.getRenderUnitById(var_core_value_sig1F45.childUnitId)) == null ? undefined : var_core_value_sigF7591.with(var_core_value_sig753F);
      var_core_value_sig52AE && !var_core_value_sig52AE.hasFocus() && var_core_value_sig52AE.focus();
    };
  return var_core_value_sig591C.addEventListener("pointerdown", var_core_value_sig5E03, true), var_core_value_sig9BBC(() => var_core_value_sig591C.removeEventListener("pointerdown", var_core_value_sig5E03, true));
}
function Ug(var_core_value_sig9828) {
  var var_core_value_sig9230, var_core_value_sig0346;
  let var_core_value_sig8870 = var_core_value_sig9828.injector["get"](var_core_value_sigE391).getRenderUnitById(var_core_value_sig9828.childUnitId),
    var_core_value_sig05C9 = var_core_value_sig8870 == null ? undefined : var_core_value_sig8870.with(var_core_value_sig753F);
  var_core_value_sig8870 == null || (var_core_value_sig9230 = var_core_value_sig8870.scene["getTransformer"]()) == null || var_core_value_sig9230.clearSelectedObjects(), var_core_value_sig8870 == null || (var_core_value_sig0346 = var_core_value_sig8870.with(var_core_value_sig5491)) == null || var_core_value_sig0346.hideFloatMenu(), var_core_value_sig05C9 == null || var_core_value_sig05C9.removeAllRanges(), var_core_value_sig05C9 == null || var_core_value_sig05C9.blur();
}
function Wg(var_core_value_sig04EC) {
  return Ls(var_core_value_sig04EC, new Map([[var_core_value_sig36F1, var_core_value_sig35A1 => Gg(var_core_value_sig35A1)]]));
}
function Gg(var_core_value_sigE7FD) {
  return {
    ...var_core_value_sigE7FD,
    fitToWidth: {
      ...(var_core_value_sigE7FD == null ? undefined : var_core_value_sigE7FD.fitToWidth),
      ...zg
    }
  };
}
function Kg(var_core_value_sigEE98, var_core_value_sig24AB = 120) {
  let var_core_value_sigB45C,
    var_core_value_sigF7CE1,
    var_core_value_sigFC4E = () => {
      var_core_value_sigF7CE1 != null && (window.clearTimeout(var_core_value_sigF7CE1), var_core_value_sigF7CE1 = undefined), var_core_value_sigB45C != null && (window.cancelAnimationFrame(var_core_value_sigB45C), var_core_value_sigB45C = undefined);
    };
  return {
    dispose: var_core_value_sigFC4E,
    schedule: () => {
      var_core_value_sigFC4E(), var_core_value_sigF7CE1 = window.setTimeout(() => {
        var_core_value_sigF7CE1 = undefined, var_core_value_sigB45C = window.requestAnimationFrame(() => {
          var_core_value_sigB45C = undefined, var_core_value_sigEE98();
        });
      }, var_core_value_sig24AB);
    }
  };
}
let qg = class extends var_core_value_sigCBDC {
  constructor(var_core_value_sig5F74, var_core_value_sig72A2, var_core_value_sig956E, var_core_value_sig7B0C, var_core_value_sig0616, var_core_value_sigDA4C, var_core_value_sig5EDC, var_core_value_sig3956) {
    var var_core_value_sig182F, var_core_value_sig76FA, var_core_value_sig960A;
    super(), this._context = var_core_value_sig5F74, this._univerInstanceService = var_core_value_sig72A2, this._commandService = var_core_value_sig956E, this._contentSizeRegistry = var_core_value_sig7B0C, this._embedMountService = var_core_value_sig0616, this._embedModelService = var_core_value_sigDA4C, this._renderManagerService = var_core_value_sig5EDC, this._docViewScaleService = var_core_value_sig3956, Y(this, "_resolvedChildUnits", new Map()), Y(this, "_pendingChildUnits", new Map());
    let var_core_value_sigBE8E = var_core_value_sig3194(() => {
        this._rerenderHostDoc() || this._refreshHostDocZoom();
      }),
      var_core_value_sig294A = Kg(() => {
        this._rerenderHostDoc();
      }),
      var_core_value_sig31A6 = var_core_value_sig3194(() => {
        this._refreshHostDocCustomBlockPresentation() || this._rerenderHostDoc();
      }),
      var_core_value_sigAA4F = var_core_value_sig3194(() => {
        this._rerenderHostDoc();
      }),
      var_core_value_sig672C = (var_core_value_sig182F = this._getHostUnit()) == null ? undefined : var_core_value_sig182F.zoomRatio;
    this.disposeWithMe(var_core_value_sigBE8E), this.disposeWithMe(var_core_value_sig294A), this.disposeWithMe(var_core_value_sigAA4F), this.disposeWithMe(var_core_value_sig31A6);
    let var_core_value_sig7D0D = Jg((var_core_value_sig76FA = this._context["engine"]) == null || (var_core_value_sig960A = var_core_value_sig76FA.getCanvasElement) == null ? undefined : var_core_value_sig960A.call(var_core_value_sig76FA), var_core_value_sig31A6.schedule);
    var_core_value_sig7D0D && this.disposeWithMe(var_core_value_sig7D0D);
    let var_core_value_sigE30C = this._contentSizeRegistry["contentSizeChanged$"].subscribe(({
      hostUnitId: var_core_value_sigA2D31
    }) => {
      var_core_value_sigA2D31 === this._context["unitId"] && var_core_value_sigBE8E.schedule();
    });
    this.disposeWithMe(var_core_value_sig9BBC(() => var_core_value_sigE30C.unsubscribe())), this.disposeWithMe({
      dispose: () => {
        this._resolvedChildUnits["clear"](), this._pendingChildUnits["clear"]();
      }
    });
    let var_core_value_sigC06A = this._univerInstanceService["getTypeOfUnitAdded$"](var_core_value_sigC0F3.UNIVER_SHEET).subscribe(() => {
        var_core_value_sigBE8E.schedule();
      }),
      var_core_value_sig3CF8 = this._univerInstanceService["getTypeOfUnitAdded$"](var_core_value_sigC0F3.UNIVER_BASE).subscribe(() => {
        var_core_value_sigBE8E.schedule();
      });
    this.disposeWithMe(var_core_value_sig9BBC(() => var_core_value_sigC06A.unsubscribe())), this.disposeWithMe(var_core_value_sig9BBC(() => var_core_value_sig3CF8.unsubscribe()));
    let var_core_value_sig3EC3 = this._contentSizeRegistry["providerChanged$"].subscribe(var_core_value_sigC218 => {
      (var_core_value_sigC218 === var_core_value_sigC0F3.UNIVER_SHEET || var_core_value_sigC218 === var_core_value_sigC0F3.UNIVER_BASE) && var_core_value_sigBE8E.schedule();
    });
    this.disposeWithMe(var_core_value_sig9BBC(() => var_core_value_sig3EC3.unsubscribe()));
    let var_core_value_sigBD61 = var_core_value_sig73F9((var_core_value_sigADEC, var_core_value_sig3D8E, var_core_value_sig37E5) => {
      var var_core_value_sigF079, var_core_value_sigFCA0, var_core_value_sigC84D;
      if (var_core_value_sigADEC !== this._context["unitId"]) return null;
      let var_core_value_sigF2BC = this._getHostSnapshot();
      if (!var_core_value_sigF2BC) return null;
      let var_core_value_sigD37B = (var_core_value_sigF079 = var_core_value_sigF2BC.drawings) == null ? undefined : var_core_value_sigF079[var_core_value_sig3D8E],
        var_core_value_sigFA28 = var_core_value_sigD37B == null ? undefined : var_core_value_sigD37B.data,
        var_core_value_sig93BE = var_core_value_sigFA28 == null ? undefined : var_core_value_sigFA28.childType;
      if (var_core_value_sig93BE !== var_core_value_sigC0F3.UNIVER_SHEET && var_core_value_sig93BE !== var_core_value_sigC0F3.UNIVER_BASE) return null;
      let var_core_value_sigABEC = this._docViewScaleService["getViewScale"](),
        var_core_value_sig2712 = this._getVisibleCanvasDocumentRect(var_core_value_sigABEC),
        var_core_value_sig0B9E = this._resolveChildUnitId(var_core_value_sigFA28, var_core_value_sig93BE),
        var_core_value_sigC545 = var_core_value_sig0B9E ? this._getChildUnitForMeasurement(var_core_value_sig0B9E, var_core_value_sig93BE, var_core_value_sigBE8E.schedule) : undefined,
        var_core_value_sig12A7 = var_core_value_sigFA28 == null ? undefined : var_core_value_sigFA28.embedId,
        var_core_value_sig6F4E = typeof var_core_value_sig12A7 == "string" ? (var_core_value_sigFCA0 = this._embedMountService["getSession"](var_core_value_sig12A7)) == null || (var_core_value_sigFCA0 = var_core_value_sigFCA0.context) == null ? undefined : var_core_value_sigFCA0.runtimeScope["injector"] : undefined,
        var_core_value_sigA021 = var_core_value_sig0B9E && var_core_value_sigC545 != null ? this._contentSizeRegistry["measureContentSize"]({
          childType: var_core_value_sig93BE,
          childUnit: var_core_value_sigC545,
          childUnitId: var_core_value_sig0B9E,
          injector: var_core_value_sig6F4E,
          viewportHeight: (var_core_value_sig2712 == null ? undefined : var_core_value_sig2712.height) == null ? undefined : Math.max(1, var_core_value_sig2712.height - 52),
          viewportWidth: var_core_value_sig37E5.fallbackWidth
        }) : undefined,
        var_core_value_sig49D91 = var_core_value_sigE103(var_core_value_sig93BE),
        var_core_value_sig320C = Xg(var_core_value_sig37E5.fallbackHeight, var_core_value_sig49D91.height),
        var_core_value_sigE7F0 = Xg(var_core_value_sig37E5.fallbackWidth, var_core_value_sig49D91.width),
        var_core_value_sigE837 = (var_core_value_sigA021 == null ? undefined : var_core_value_sigA021.height) ?? var_core_value_sig320C,
        var_core_value_sig34F4 = var_core_value_sigC2C5({
          childType: var_core_value_sig93BE,
          contentHeight: var_core_value_sig93BE === var_core_value_sigC0F3.UNIVER_SHEET ? Vp(var_core_value_sigE837) : var_core_value_sigE837,
          contentWidth: var_core_value_sigA021 == null ? undefined : var_core_value_sigA021.width,
          docsLeft: this._getDocsLeft(),
          documentFlavor: (var_core_value_sigC84D = var_core_value_sigF2BC.documentStyle) == null ? undefined : var_core_value_sigC84D.documentFlavor,
          fallbackHeight: var_core_value_sig320C,
          fallbackWidth: var_core_value_sigE7F0,
          pageMarginLeft: var_core_value_sig37E5.pageMarginLeft,
          pageMarginRight: var_core_value_sig37E5.pageMarginRight,
          pageWidth: var_core_value_sig37E5.pageWidth,
          scale: var_core_value_sigABEC,
          visibleCanvasHeight: var_core_value_sig2712 == null ? undefined : var_core_value_sig2712.height,
          visibleCanvasLeft: var_core_value_sig2712 == null ? undefined : var_core_value_sig2712.left,
          visibleCanvasWidth: var_core_value_sig2712 == null ? undefined : var_core_value_sig2712.width
        }),
        var_core_value_sigA45D = var_core_value_sig34F4.contentHeight ?? var_core_value_sig34F4.height,
        var_core_value_sig1BC7 = var_core_value_sig93BE === var_core_value_sigC0F3.UNIVER_BASE ? 52 : 0,
        var_core_value_sig4956 = (var_core_value_sig2712 == null ? undefined : var_core_value_sig2712.height) == null ? var_core_value_sig34F4.viewportHeight ?? var_core_value_sigA45D : Math.min(var_core_value_sigA45D, Math.max(1, var_core_value_sig2712.height - var_core_value_sig1BC7));
      return {
        ...var_core_value_sig34F4,
        viewportHeight: var_core_value_sig4956,
        height: Hp({
          contentHeight: var_core_value_sigA45D,
          floatingMenuInsetTop: 52
        })
      };
    });
    this.disposeWithMe({
      dispose: var_core_value_sigBD61
    }), this.disposeWithMe(this._commandService["onCommandExecuted"](var_core_value_sigCC9E => {
      if (var_core_value_sigCC9E.id === var_core_value_sigED61.id) {
        let var_core_value_sigDE08 = var_core_value_sigCC9E.params;
        if (typeof var_core_value_sigDE08 == "object" && var_core_value_sigDE08 && "unitId" in var_core_value_sigDE08 && var_core_value_sigDE08.unitId === this._context["unitId"]) {
          let var_core_value_sigD955 = "zoomRatio" in var_core_value_sigDE08 && typeof var_core_value_sigDE08.zoomRatio == "number" ? var_core_value_sigDE08.zoomRatio : undefined;
          if (var_core_value_sigD955 != null && var_core_value_sigD955 === var_core_value_sig672C) {
            var_core_value_sigAA4F.schedule();
            return;
          }
          var_core_value_sig672C = var_core_value_sigD955, this._refreshHostDocCustomBlockPresentation(), var_core_value_sig294A.schedule();
        }
        return;
      }
      let var_core_value_sig444C = this._getHostSnapshot();
      var_core_value_sig444C && var_core_value_sig2ACA({
        childUnitIds: var_core_value_sig441B(var_core_value_sig444C.drawings, var_core_value_sigACCB1 => this._resolveChildUnitId(var_core_value_sigACCB1)),
        commandId: var_core_value_sigCC9E.id,
        commandParams: var_core_value_sigCC9E.params,
        hostUnitId: this._context["unitId"]
      }) && var_core_value_sigBE8E.schedule();
    }));
  }
  _getHostUnit() {
    if (!this._disposed) return this._context["unit"] ?? undefined;
  }
  _getHostSnapshot() {
    var var_core_value_sig445D;
    return (var_core_value_sig445D = this._getHostUnit()) == null ? undefined : var_core_value_sig445D.getSnapshot();
  }
  _rerenderHostDoc() {
    let var_core_value_sigC15F = this._renderManagerService["getRenderUnitById"](this._context["unitId"]);
    try {
      var var_core_value_sig73A8;
      let var_core_value_sigE42E = var_core_value_sigC15F == null || (var_core_value_sig73A8 = var_core_value_sigC15F.with) == null ? undefined : var_core_value_sig73A8.call(var_core_value_sigC15F, var_core_value_sigBE48);
      return var_core_value_sigE42E ? (var_core_value_sigE42E.reRender(this._context["unitId"]), true) : false;
    } catch {
      return false;
    }
  }
  _refreshHostDocCustomBlockPresentation() {
    let var_core_value_sigE227 = this._renderManagerService["getRenderUnitById"](this._context["unitId"]);
    try {
      var var_core_value_sig6909;
      return (var_core_value_sigE227 == null || (var_core_value_sig6909 = var_core_value_sigE227.with) == null || (var_core_value_sig6909 = var_core_value_sig6909.call(var_core_value_sigE227, var_core_value_sigBE48)) == null ? undefined : var_core_value_sig6909.refreshCustomBlockPresentation(this._context["unitId"])) ?? false;
    } catch {
      return false;
    }
  }
  _refreshHostDocZoom() {
    let var_core_value_sigCFCC = this._getHostUnit(),
      var_core_value_sig0503 = var_core_value_sigCFCC == null ? undefined : var_core_value_sigCFCC.zoomRatio;
    typeof var_core_value_sig0503 == "number" && this._commandService["syncExecuteCommand"](var_core_value_sigED61.id, {
      unitId: this._context["unitId"],
      zoomRatio: var_core_value_sig0503
    });
  }
  _resolveChildUnitId(var_core_value_sigAA49, var_core_value_sigAB24) {
    if (!var_core_value_sigAA49 || typeof var_core_value_sigAA49 != "object") return;
    let var_core_value_sig2F15 = var_core_value_sigAA49,
      var_core_value_sig316C = typeof var_core_value_sig2F15.childType == "number" ? var_core_value_sig2F15.childType : var_core_value_sigAB24;
    if (var_core_value_sig316C !== var_core_value_sigC0F3.UNIVER_SHEET && var_core_value_sig316C !== var_core_value_sigC0F3.UNIVER_BASE) return;
    if (typeof var_core_value_sig2F15.childUnitId == "string") return var_core_value_sig2F15.childUnitId;
    if (typeof var_core_value_sig2F15.embedId != "string") return;
    let var_core_value_sig75A2 = typeof var_core_value_sig2F15.hostUnitId == "string" ? var_core_value_sig2F15.hostUnitId : this._context["unitId"],
      var_core_value_sig95CE = this._embedModelService["getDescriptor"](var_core_value_sig75A2, var_core_value_sig2F15.embedId);
    if ((var_core_value_sig95CE == null ? undefined : var_core_value_sig95CE.childType) === var_core_value_sig316C) {
      if (typeof var_core_value_sig95CE.childUnitId == "string") return var_core_value_sig95CE.childUnitId;
      try {
        return var_core_value_sig9DD6(var_core_value_sig95CE.source["ref"]);
      } catch {
        return;
      }
    }
  }
  _getChildUnitForMeasurement(var_core_value_sig41FA, var_core_value_sig73C4, var_core_value_sig3216) {
    let var_core_value_sigF636 = var_core_value_sig73C4 + ":" + var_core_value_sig41FA;
    if (this._resolvedChildUnits["has"](var_core_value_sigF636)) return this._resolvedChildUnits["get"](var_core_value_sigF636);
    let var_core_value_sig2EE8 = this._univerInstanceService["getUnit"](var_core_value_sig41FA, var_core_value_sig73C4);
    if (var_core_value_sig2EE8 != null) {
      if (!Yg(var_core_value_sig2EE8)) return this._resolvedChildUnits["set"](var_core_value_sigF636, var_core_value_sig2EE8), var_core_value_sig2EE8;
      if (!this._pendingChildUnits["has"](var_core_value_sigF636)) {
        let var_core_value_sig7F33 = Promise.resolve(var_core_value_sig2EE8).then(var_core_value_sig48BD => (this._pendingChildUnits["delete"](var_core_value_sigF636), this._resolvedChildUnits["set"](var_core_value_sigF636, var_core_value_sig48BD), this._disposed || var_core_value_sig3216(), var_core_value_sig48BD), () => {
          this._pendingChildUnits["delete"](var_core_value_sigF636);
        });
        this._pendingChildUnits["set"](var_core_value_sigF636, var_core_value_sig7F33);
      }
    }
  }
  _getDocsLeft() {
    var var_core_value_sig61771, var_core_value_sig723F1;
    return ((var_core_value_sig61771 = this._context["mainComponent"]) == null || (var_core_value_sig723F1 = var_core_value_sig61771.getOffsetConfig) == null || (var_core_value_sig723F1 = var_core_value_sig723F1.call(var_core_value_sig61771)) == null ? undefined : var_core_value_sig723F1.docsLeft) ?? 0;
  }
  _getVisibleCanvasDocumentRect(var_core_value_sigADA0) {
    var var_core_value_sig2F52, var_core_value_sig8FC3, var_core_value_sigF5B3, var_core_value_sig074A, var_core_value_sig5FBE, var_core_value_sig9D61;
    let var_core_value_sigF126 = Number.isFinite(var_core_value_sigADA0) && var_core_value_sigADA0 > 0 ? var_core_value_sigADA0 : 1,
      var_core_value_sig9AF8 = ((var_core_value_sig2F52 = this._context["scene"].getViewport(var_core_value_sigF8ED.VIEW_MAIN)) == null ? undefined : var_core_value_sig2F52.viewportScrollX) ?? 0,
      var_core_value_sig7537 = (var_core_value_sig8FC3 = (var_core_value_sigF5B3 = this._context["engine"]).getCanvasElement) == null || (var_core_value_sig8FC3 = var_core_value_sig8FC3.call(var_core_value_sigF5B3)) == null || (var_core_value_sig074A = var_core_value_sig8FC3.getBoundingClientRect) == null ? undefined : var_core_value_sig074A.call(var_core_value_sig8FC3),
      var_core_value_sig50C7 = var_core_value_sig7537 == null ? undefined : var_core_value_sig7537.width,
      var_core_value_sig9B62 = var_core_value_sig7537 == null ? undefined : var_core_value_sig7537.height,
      var_core_value_sig470B = ((var_core_value_sig5FBE = this._context["mainComponent"]) == null ? undefined : var_core_value_sig5FBE.width) ?? this._context["scene"].width,
      var_core_value_sig7525 = (var_core_value_sig50C7 ?? var_core_value_sig470B ?? 0) / var_core_value_sigF126,
      var_core_value_sig95B5 = ((var_core_value_sig9D61 = this._context["mainComponent"]) == null ? undefined : var_core_value_sig9D61.height) ?? this._context["scene"].height,
      var_core_value_sig2347 = (var_core_value_sig9B62 ?? var_core_value_sig95B5 ?? 0) / var_core_value_sigF126;
    return !var_core_value_sig7525 || !Number.isFinite(var_core_value_sig7525) || var_core_value_sig7525 <= 0 || !var_core_value_sig2347 || !Number.isFinite(var_core_value_sig2347) || var_core_value_sig2347 <= 0 ? null : {
      height: var_core_value_sig2347,
      left: var_core_value_sig9AF8,
      width: var_core_value_sig7525
    };
  }
};
qg = $([Q(1, var_core_value_sig205B(var_core_value_sig5DF8)), Q(2, var_core_value_sig205B(var_core_value_sigDFF6)), Q(3, var_core_value_sig205B(Bf)), Q(4, var_core_value_sig205B(cl)), Q(5, var_core_value_sig205B(var_core_value_sig91F2)), Q(6, var_core_value_sigE391), Q(7, var_core_value_sig205B(var_core_value_sigACCB))], qg);
function Jg(var_core_value_sig13E2, var_core_value_sig68F8) {
  if (!var_core_value_sig13E2 || typeof ResizeObserver > "u") return;
  let var_core_value_sig6D30 = new ResizeObserver(() => var_core_value_sig68F8());
  return var_core_value_sig6D30.observe(var_core_value_sig13E2), {
    dispose: () => var_core_value_sig6D30.disconnect()
  };
}
function Yg(var_core_value_sigCCC4) {
  return !!var_core_value_sigCCC4 && typeof var_core_value_sigCCC4.then == "function";
}
function Xg(var_core_value_sig0607, var_core_value_sig7E5D) {
  return typeof var_core_value_sig0607 == "number" && Number.isFinite(var_core_value_sig0607) && var_core_value_sig0607 > 1 ? var_core_value_sig0607 : var_core_value_sig7E5D;
}
function Zg(var_core_value_sig67C5, var_core_value_sig7C0E, var_core_value_sig7B21) {
  return {
    ...var_core_value_sig0973(var_core_value_sig67C5, var_core_value_sig7C0E),
    afterCreateAnchor: var_core_value_sigB20E => $g(var_core_value_sig7B21, var_core_value_sigB20E.hostUnitId),
    afterRemoveAnchor: var_core_value_sig8ADE => $g(var_core_value_sig7B21, var_core_value_sig8ADE.hostUnitId)
  };
}
function Qg() {
  return {
    hostType: var_core_value_sigC0F3.UNIVER_DOC,
    entry: "docs-custom-block",
    layout: "docs-sticky-sheet",
    supportedLayouts: ["docs-sticky-sheet", "docs-sticky-base", "aspect-fit", "scroll-contained", "content-bounds-fit"],
    menuBehavior: "floating"
  };
}
function $g(var_core_value_sigCF99, var_core_value_sig5D3E) {
  var var_core_value_sig4B1F, var_core_value_sigCE7C, var_core_value_sig58BA, var_core_value_sigA256;
  if (!var_core_value_sigCF99) return;
  let var_core_value_sig01DA = var_core_value_sigCF99.getRenderUnitById(var_core_value_sig5D3E);
  if (var_core_value_sig01DA) {
    for (let var_core_value_sigF039 of var_core_value_sig01DA.components["values"]()) {
      var var_core_value_sigD1DD;
      (var_core_value_sigD1DD = var_core_value_sigF039.makeDirty) == null || var_core_value_sigD1DD.call(var_core_value_sigF039);
    }
    (var_core_value_sig4B1F = var_core_value_sig01DA.engine) == null || var_core_value_sig4B1F.resize(), (var_core_value_sigCE7C = var_core_value_sig01DA.scene) == null || var_core_value_sigCE7C.makeDirty(), (var_core_value_sig58BA = var_core_value_sig01DA.with) == null || (var_core_value_sig58BA = var_core_value_sig58BA.call(var_core_value_sig01DA, var_core_value_sig2630)) == null || (var_core_value_sigA256 = var_core_value_sig58BA.calculatePagePosition) == null || var_core_value_sigA256.call(var_core_value_sig58BA);
  }
}
function e_(var_core_value_sig89FF) {
  return {
    childType: var_core_value_sigC0F3.UNIVER_DOC,
    handleWheel: var_core_value_sig7F51 => {
      let var_core_value_sig622A = var_core_value_sig89FF.has(wd) ? var_core_value_sig89FF.get(wd) : undefined;
      if ((var_core_value_sig622A == null ? undefined : var_core_value_sig622A.handleWheel(var_core_value_sig7F51)) === true) return true;
      if (!var_core_value_sig89FF.has(var_core_value_sigE391)) return false;
      let var_core_value_sig40EC = var_core_value_sig89FF.get(var_core_value_sigE391).getRenderUnitById(var_core_value_sig7F51.childUnitId),
        var_core_value_sig27C9 = var_core_value_sig40EC == null ? undefined : var_core_value_sig40EC.scene;
      return zp(var_core_value_sig7F51, var_core_value_sig27C9 == null ? undefined : var_core_value_sig27C9.getViewport(var_core_value_sigF8ED.VIEW_MAIN), var_core_value_sig27C9);
    }
  };
}
function t_() {
  return Wh({
    childType: var_core_value_sigC0F3.UNIVER_DOC,
    mount: n_
  });
}
function n_(var_core_value_sigE02A) {
  let {
      menu: var_core_value_sigCD4D,
      portalContainer: var_core_value_sig82A4
    } = Vh(var_core_value_sigE02A),
    var_core_value_sig68AD = Sl(var_core_value_sigCD4D);
  return var_core_value_sig68AD.render(var_core_value_sigBCAF(fl, {
    injector: var_core_value_sigE02A.runtimeScope["injector"],
    mountContainer: var_core_value_sig82A4,
    embedId: var_core_value_sigE02A.embedId
  }, var_core_value_sigBCAF(r_, {
    hostUnitId: var_core_value_sigE02A.hostUnitId,
    embedId: var_core_value_sigE02A.embedId,
    entry: var_core_value_sigE02A.descriptor["entry"],
    fullscreen: !!var_core_value_sigE02A.renderScope["fullscreen"],
    usesDomFloatingStage: var_core_value_sigE02A.descriptor["entry"] !== "slides-floating-object",
    renderScopeActive$: var_core_value_sigE02A.renderScope["active$"]
  }))), var_core_value_sig9BBC(() => {
    Cl(var_core_value_sig68AD), globalThis.setTimeout(() => var_core_value_sigCD4D.remove(), 0);
  });
}
function r_(var_core_value_sig1230) {
  let {
      hostUnitId: var_core_value_sig2B16,
      embedId: var_core_value_sig80C5,
      entry: var_core_value_sigBC191,
      fullscreen: var_core_value_sig0DA5,
      usesDomFloatingStage: var_core_value_sig3E16,
      renderScopeActive$: var_core_value_sig6F84
    } = var_core_value_sig1230,
    var_core_value_sig5EFE = var_core_value_sig146E(() => var_core_value_sig6F84, false, false, [var_core_value_sig6F84]),
    var_core_value_sigFD69 = var_core_value_sigC85E(var_core_value_sigDFF6),
    var_core_value_sig005E = var_core_value_sigC85E(var_core_value_sig27CF),
    var_core_value_sig35161 = var_core_value_sigC85E(var_core_value_sig5DF8),
    var_core_value_sig071B = var_core_value_sigC85E(var_core_value_sig21CF),
    var_core_value_sig4E09 = var_core_value_sigC85E(xs),
    var_core_value_sigCEF5 = Eu({
      embedId: var_core_value_sig80C5,
      active: var_core_value_sig146E(() => var_core_value_sig4E09.active$, var_core_value_sig4E09.getActive(), false, [var_core_value_sig4E09]),
      fullscreen: var_core_value_sig0DA5,
      usesDomFloatingStage: var_core_value_sig3E16,
      renderScopeActive: var_core_value_sig5EFE
    });
  return var_core_value_sig146E(() => var_core_value_sig005E.permissionPointUpdate$["pipe"](var_core_value_sigC101(null), var_core_value_sig5B63(() => i_(var_core_value_sig005E, var_core_value_sig35161, var_core_value_sig2B16, var_core_value_sig80C5, var_core_value_sigBC191))), i_(var_core_value_sig005E, var_core_value_sig35161, var_core_value_sig2B16, var_core_value_sig80C5, var_core_value_sigBC191), false, [var_core_value_sig80C5, var_core_value_sigBC191, var_core_value_sig2B16, var_core_value_sig005E, var_core_value_sig35161]) ? var_core_value_sigA648("div", {
    className: var_core_value_sig522C("univer-docs-embed-floating-menu univer-pointer-events-auto univer-box-border univer-inline-flex univer-h-8 univer-items-center univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-1 univer-text-gray-900 univer-shadow-lg dark:!univer-border-gray-600 dark:!univer-bg-gray-900 dark:!univer-text-gray-0", {
      "univer-hidden": var_core_value_sigCEF5 !== "stage2",
      "univer-static\x20univer-mx-auto\x20univer-my-1.5\x20univer-translate-x-0": var_core_value_sig0DA5,
      "univer-absolute\x20univer-left-1/2\x20univer-z-[30]\x20-univer-translate-x-1/2": !var_core_value_sig0DA5,
      "-univer-top-9": !var_core_value_sig0DA5 && var_core_value_sigBC191 !== "docs-custom-block",
      "-univer-top-[52px]": !var_core_value_sig0DA5 && var_core_value_sigBC191 === "docs-custom-block"
    }),
    "data-embed-floating-menu": "true",
    "data-embed-id": var_core_value_sig80C5,
    "data-embed-float-stage": var_core_value_sigCEF5,
    onPointerDown: var_core_value_sigF296 => var_core_value_sigF296.stopPropagation(),
    children: [!var_core_value_sig0DA5 && var_core_value_sig6F03(Mf, {
      hostUnitId: var_core_value_sig2B16,
      embedId: var_core_value_sig80C5,
      variant: "menu"
    }), var_core_value_sig6F03(jf, {
      title: var_core_value_sig071B.t("embed-ui.deleteBlock"),
      children: var_core_value_sig6F03(var_core_value_sigC820, {
        type: "button",
        size: "small",
        variant: "ghost",
        className: "univer-size-6 univer-p-0 univer-text-red-500 hover:univer-text-red-600",
        "aria-label": var_core_value_sig071B.t("embed-ui.deleteBlock"),
        onClick: async () => {
          await var_core_value_sigFD69.executeCommand(var_core_value_sig793D.id, {
            hostUnitId: var_core_value_sig2B16,
            embedId: var_core_value_sig80C5
          });
        },
        children: var_core_value_sig6F03(var_core_value_sig4C1E, {})
      })
    })]
  }) : null;
}
function i_(var_core_value_sig7654, var_core_value_sig5E0F, var_core_value_sig0B401, var_core_value_sigF0011, var_core_value_sig1296) {
  let var_core_value_sig7230 = var_core_value_sig5E0F.getUnit(var_core_value_sig0B401, var_core_value_sigC0F3.UNIVER_DOC);
  if (!(var_core_value_sig7230 instanceof var_core_value_sig8600)) return [var_core_value_sigC0F3.UNIVER_SHEET, var_core_value_sigC0F3.UNIVER_SLIDE, var_core_value_sigC0F3.UNIVER_BOARD].some(var_core_value_sigD001 => !!var_core_value_sig5E0F.getUnit(var_core_value_sig0B401, var_core_value_sigD001));
  let var_core_value_sigD8AD = var_core_value_sig1296 === "slides-floating-object" ? "drawing" : "custom-block",
    var_core_value_sigF334 = var_core_value_sigD8AD === "drawing" ? var_core_value_sig9391(var_core_value_sig7230, var_core_value_sigF0011) : "";
  return var_core_value_sigCE09(var_core_value_sig7654, var_core_value_sig0B401, [...var_core_value_sig08C1(var_core_value_sig7230, var_core_value_sigF334, var_core_value_sigD8AD, var_core_value_sigF0011), var_core_value_sigFD80(var_core_value_sigF334, var_core_value_sigD8AD, var_core_value_sigF0011)]);
}
function a_(var_core_value_sig323C1) {
  zm(var_core_value_sig323C1, "docs-ui.embed", o_);
}
function o_(var_core_value_sig613D) {
  let var_core_value_sigF722 = var_core_value_sig613D.get(var_core_value_sig67C7),
    var_core_value_sig27EC = var_core_value_sig613D.get(Rc),
    var_core_value_sig5826 = var_core_value_sig613D.get(Ic),
    var_core_value_sigB946 = var_core_value_sig613D.get(bs),
    var_core_value_sigBD3C = var_core_value_sig613D.get(Lc),
    var_core_value_sigABF2 = var_core_value_sig613D.get(cd),
    var_core_value_sig18F3 = var_core_value_sig613D.get(Cd),
    var_core_value_sig2D44 = var_core_value_sig613D.has(var_core_value_sig9D18) ? var_core_value_sig613D.get(var_core_value_sig9D18) : undefined,
    var_core_value_sig369C = var_core_value_sig613D.has(var_core_value_sig5DF8) ? var_core_value_sig613D.get(var_core_value_sig5DF8) : undefined,
    var_core_value_sigFE47 = var_core_value_sig613D.has(var_core_value_sigE391) ? var_core_value_sig613D.get(var_core_value_sigE391) : undefined;
  var_core_value_sigFE47 == null || var_core_value_sigFE47.registerRenderModule(var_core_value_sigC0F3.UNIVER_DOC, [qg]);
  let var_core_value_sig6B74 = Zg(var_core_value_sig2D44, var_core_value_sig369C, var_core_value_sigFE47);
  var_core_value_sigF722.get(var_core_value_sig6B74.hostType, var_core_value_sig6B74.entry) || var_core_value_sigF722.register(var_core_value_sig6B74);
  let var_core_value_sig0345 = Qg();
  var_core_value_sig27EC.get(var_core_value_sig0345.hostType, var_core_value_sig0345.entry) || var_core_value_sig27EC.register(var_core_value_sig0345);
  let var_core_value_sigF097 = Vg();
  var_core_value_sig5826.get(var_core_value_sigF097.childType) || var_core_value_sig5826.register(var_core_value_sigF097);
  let var_core_value_sig3E3B = Bg();
  var_core_value_sigB946.get(var_core_value_sig3E3B.childType) || var_core_value_sigB946.register(var_core_value_sig3E3B), t_().forEach(var_core_value_sig4940 => {
    var_core_value_sigBD3C.hasExact(var_core_value_sig4940.hostType, var_core_value_sig4940.entry, var_core_value_sig4940.childType) || var_core_value_sigBD3C.register(var_core_value_sig4940);
  }), var_core_value_sigABF2.registerProvider(Wf(var_core_value_sig613D, {
    childType: var_core_value_sigC0F3.UNIVER_DOC,
    renderManagerService: var_core_value_sigE391
  })), var_core_value_sig18F3.get(var_core_value_sigC0F3.UNIVER_DOC) || var_core_value_sig18F3.register(e_(var_core_value_sig613D));
}
function s_() {
  return {
    childType: var_core_value_sigC0F3.UNIVER_SHEET,
    measureContentSize: var_core_value_sig7E0F => {
      let var_core_value_sig9785 = c_(var_core_value_sig7E0F.childUnit, var_core_value_sig7E0F.limitRowsToViewportWidth ? var_core_value_sig7E0F.viewportWidth : undefined),
        var_core_value_sig235B = u_(var_core_value_sig7E0F.childUnit);
      return var_core_value_sig9785 == null && var_core_value_sig235B == null ? undefined : {
        height: var_core_value_sig9785 == null ? undefined : var_core_value_sig9785.height,
        verticalBreaks: var_core_value_sig9785 == null ? undefined : var_core_value_sig9785.breaks,
        width: var_core_value_sig235B
      };
    }
  };
}
function c_(var_core_value_sig0C14, var_core_value_sigFFA4) {
  var var_core_value_sig1185;
  let var_core_value_sigB8301 = var_core_value_sig0C14 instanceof var_core_value_sigCA9B ? var_core_value_sig0C14.getActiveSheet(true) : undefined;
  if (!var_core_value_sigB8301) return;
  let var_core_value_sig973F = d_(var_core_value_sigB8301, var_core_value_sigFFA4);
  if (!Number.isFinite(var_core_value_sig973F) || var_core_value_sig973F == null || var_core_value_sig973F < 0) return;
  let var_core_value_sig8246 = h_((var_core_value_sig1185 = var_core_value_sigB8301.getConfig) == null || (var_core_value_sig1185 = var_core_value_sig1185.call(var_core_value_sigB8301)) == null ? undefined : var_core_value_sig1185.defaultRowHeight, var_core_value_sig2717),
    var_core_value_sigB70E = l_(var_core_value_sig0C14),
    var_core_value_sigF7F9 = 0,
    var_core_value_sigDC6B = [];
  for (let var_core_value_sigBCA8 = 0; var_core_value_sigBCA8 < var_core_value_sig973F; var_core_value_sigBCA8++) {
    var var_core_value_sig1680, var_core_value_sigEDFA;
    ((var_core_value_sig1680 = var_core_value_sigB8301.getRowVisible) == null ? undefined : var_core_value_sig1680.call(var_core_value_sigB8301, var_core_value_sigBCA8)) !== false && (var_core_value_sigF7F9 += g_((var_core_value_sigEDFA = var_core_value_sigB8301.getRowHeight) == null ? undefined : var_core_value_sigEDFA.call(var_core_value_sigB8301, var_core_value_sigBCA8), var_core_value_sig8246), var_core_value_sigDC6B.push(var_core_value_sigB70E + var_core_value_sigF7F9));
  }
  return {
    breaks: var_core_value_sigDC6B,
    height: var_core_value_sigB70E + var_core_value_sigF7F9
  };
}
function l_(var_core_value_sigE153) {
  var var_core_value_sig2A9F1;
  let var_core_value_sig16E9 = var_core_value_sigE153 instanceof var_core_value_sigCA9B ? var_core_value_sigE153.getActiveSheet(true) : undefined,
    var_core_value_sigDB4D = var_core_value_sig16E9 == null || (var_core_value_sig2A9F1 = var_core_value_sig16E9.getConfig) == null || (var_core_value_sig2A9F1 = var_core_value_sig2A9F1.call(var_core_value_sig16E9)) == null ? undefined : var_core_value_sig2A9F1.columnHeader;
  return var_core_value_sigDB4D != null && var_core_value_sigDB4D.hidden ? 0 : h_(var_core_value_sigDB4D == null ? undefined : var_core_value_sigDB4D.height, 24);
}
function u_(var_core_value_sigF85F) {
  var var_core_value_sig5107, var_core_value_sigC33E;
  let var_core_value_sig26BB1 = var_core_value_sigF85F instanceof var_core_value_sigCA9B ? var_core_value_sigF85F.getActiveSheet(true) : undefined;
  if (!var_core_value_sig26BB1) return;
  let var_core_value_sig9995 = p_(var_core_value_sig26BB1);
  if (!Number.isFinite(var_core_value_sig9995) || var_core_value_sig9995 == null || var_core_value_sig9995 < 0) return;
  let var_core_value_sigBC57 = (var_core_value_sig5107 = var_core_value_sig26BB1.getConfig) == null || (var_core_value_sig5107 = var_core_value_sig5107.call(var_core_value_sig26BB1)) == null ? undefined : var_core_value_sig5107.rowHeader,
    var_core_value_sig76F3 = h_((var_core_value_sigC33E = var_core_value_sig26BB1.getConfig) == null || (var_core_value_sigC33E = var_core_value_sigC33E.call(var_core_value_sig26BB1)) == null ? undefined : var_core_value_sigC33E.defaultColumnWidth, var_core_value_sig3CE4),
    var_core_value_sig6AC3 = var_core_value_sigBC57 != null && var_core_value_sigBC57.hidden ? 0 : h_(var_core_value_sigBC57 == null ? undefined : var_core_value_sigBC57.width, var_core_value_sig7BBA),
    var_core_value_sig54D0 = 0;
  for (let var_core_value_sig0C8C = 0; var_core_value_sig0C8C < var_core_value_sig9995; var_core_value_sig0C8C++) {
    var var_core_value_sig6483, var_core_value_sigAE271;
    ((var_core_value_sig6483 = var_core_value_sig26BB1.getColVisible) == null ? undefined : var_core_value_sig6483.call(var_core_value_sig26BB1, var_core_value_sig0C8C)) !== false && (var_core_value_sig54D0 += h_((var_core_value_sigAE271 = var_core_value_sig26BB1.getColumnWidth) == null ? undefined : var_core_value_sigAE271.call(var_core_value_sig26BB1, var_core_value_sig0C8C), var_core_value_sig76F3));
  }
  return var_core_value_sig6AC3 + var_core_value_sig54D0 + var_core_value_sig920F.DEFAULT_TOTAL_SIZE;
}
function d_(var_core_value_sigE0EF, var_core_value_sig0D46) {
  let var_core_value_sigE838 = m_(var_core_value_sigE0EF.getRowCount());
  if (var_core_value_sigE838 == null || var_core_value_sig0D46 == null) return var_core_value_sigE838;
  let var_core_value_sigC4EA = f_(var_core_value_sigE0EF, var_core_value_sig0D46),
    var_core_value_sig4A4F = var_core_value_sigE0EF.getDataRealRange();
  if (var_core_value_sigC4EA < 0 || var_core_value_sig4A4F.endRow < 0 || var_core_value_sig4A4F.endColumn < 0 || var_core_value_sig4A4F.startColumn > var_core_value_sigC4EA) return 0;
  let var_core_value_sig0E98 = -1;
  for (let var_core_value_sig56FC of var_core_value_sigE0EF.iterateByRow({
    startRow: Math.max(0, var_core_value_sig4A4F.startRow),
    startColumn: Math.max(0, var_core_value_sig4A4F.startColumn),
    endRow: var_core_value_sig4A4F.endRow,
    endColumn: Math.min(var_core_value_sigC4EA, var_core_value_sig4A4F.endColumn)
  })) var_core_value_sig56FC.value && var_core_value_sigE0EF.cellHasValue(var_core_value_sig56FC.value) && (var_core_value_sig0E98 = var_core_value_sig56FC.row);
  return Math.min(var_core_value_sigE838, var_core_value_sig0E98 + 1);
}
function f_(var_core_value_sigA58A, var_core_value_sigA8C1) {
  var var_core_value_sig0D63, var_core_value_sigA53F;
  let var_core_value_sigA2FD = (var_core_value_sig0D63 = var_core_value_sigA58A.getConfig) == null || (var_core_value_sig0D63 = var_core_value_sig0D63.call(var_core_value_sigA58A)) == null ? undefined : var_core_value_sig0D63.rowHeader,
    var_core_value_sigC087 = var_core_value_sigA2FD != null && var_core_value_sigA2FD.hidden ? 0 : h_(var_core_value_sigA2FD == null ? undefined : var_core_value_sigA2FD.width, var_core_value_sig7BBA),
    var_core_value_sig8A48 = Math.max(0, var_core_value_sigA8C1 - var_core_value_sigC087 - var_core_value_sig920F.DEFAULT_TOTAL_SIZE),
    var_core_value_sig3F2C = h_((var_core_value_sigA53F = var_core_value_sigA58A.getConfig) == null || (var_core_value_sigA53F = var_core_value_sigA53F.call(var_core_value_sigA58A)) == null ? undefined : var_core_value_sigA53F.defaultColumnWidth, var_core_value_sig3CE4),
    var_core_value_sig5DA9 = 0,
    var_core_value_sig215A = -1,
    var_core_value_sig986E1 = p_(var_core_value_sigA58A) ?? 0;
  for (let var_core_value_sig7EC8 = 0; var_core_value_sig7EC8 < var_core_value_sig986E1 && var_core_value_sig5DA9 < var_core_value_sig8A48; var_core_value_sig7EC8++) {
    var var_core_value_sig5002, var_core_value_sig158C;
    ((var_core_value_sig5002 = var_core_value_sigA58A.getColVisible) == null ? undefined : var_core_value_sig5002.call(var_core_value_sigA58A, var_core_value_sig7EC8)) !== false && (var_core_value_sig215A = var_core_value_sig7EC8, var_core_value_sig5DA9 += h_((var_core_value_sig158C = var_core_value_sigA58A.getColumnWidth) == null ? undefined : var_core_value_sig158C.call(var_core_value_sigA58A, var_core_value_sig7EC8), var_core_value_sig3F2C));
  }
  return var_core_value_sig215A;
}
function p_(var_core_value_sig3CB5) {
  return m_(var_core_value_sig3CB5.getColumnCount());
}
function m_(var_core_value_sigBB84) {
  return typeof var_core_value_sigBB84 == "number" && Number.isFinite(var_core_value_sigBB84) && var_core_value_sigBB84 >= 0 ? Math.floor(var_core_value_sigBB84) : undefined;
}
function h_(var_core_value_sigB8A9, var_core_value_sig21A3) {
  return typeof var_core_value_sigB8A9 == "number" && Number.isFinite(var_core_value_sigB8A9) && var_core_value_sigB8A9 > 0 ? var_core_value_sigB8A9 : var_core_value_sig21A3;
}
function g_(var_core_value_sig0BDF, var_core_value_sig37CB) {
  return typeof var_core_value_sig0BDF == "number" && Number.isFinite(var_core_value_sig0BDF) && var_core_value_sig0BDF >= 0 ? var_core_value_sig0BDF : var_core_value_sig37CB;
}
function __() {
  return {
    hostType: var_core_value_sigC0F3.UNIVER_SHEET,
    entry: "sheets-floating-object",
    layout: "doc-width-scale",
    supportedLayouts: ["doc-width-scale", "aspect-fit", "scroll-contained", "content-bounds-fit"],
    menuBehavior: "floating"
  };
}
function v_() {
  return {
    hostType: var_core_value_sigC0F3.UNIVER_SHEET,
    entry: "sheets-sheet-tab",
    layout: "tab-peer",
    supportedLayouts: ["tab-peer"],
    menuBehavior: "host-override",
    mount: var_core_value_sig04541 => {
      let var_core_value_sig71F7 = y_("data-embed-sheets-sheet-tab-host", var_core_value_sig04541.descriptor["hostAnchorId"]);
      return var_core_value_sig71F7 ? {
        hostElement: var_core_value_sig71F7
      } : {};
    }
  };
}
function y_(var_core_value_sigFFD9, var_core_value_sig6AE21) {
  return document.querySelector("[" + var_core_value_sigFFD9 + "=\x22" + b_(var_core_value_sig6AE21) + "\x22]");
}
function b_(var_core_value_sig9573) {
  return var_core_value_sig9573.replace(/\\/g, "\x5c\x5c").replace(/"/g, "\x5c\x22");
}
function x_(var_core_value_sigBBE41) {
  let var_core_value_sigC89B = var_core_value_sigBBE41.has(var_core_value_sig5DF8) ? var_core_value_sigBBE41.get(var_core_value_sig5DF8) : undefined,
    var_core_value_sigDE91 = var_core_value_sigBBE41.has(var_core_value_sigE391) ? var_core_value_sigBBE41.get(var_core_value_sigE391) : undefined;
  return {
    childType: var_core_value_sigC0F3.UNIVER_SHEET,
    getHorizontalScroll: var_core_value_sig8D12 => {
      var var_core_value_sigEEC4;
      return (var_core_value_sigEEC4 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigAE70(var_core_value_sig8D12)) == null ? undefined : var_core_value_sigEEC4.viewportScrollX;
    },
    getVerticalScroll: var_core_value_sig0EDB1 => {
      var var_core_value_sig1C1B1;
      return (var_core_value_sig1C1B1 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigAE70(var_core_value_sig0EDB1)) == null ? undefined : var_core_value_sig1C1B1.viewportScrollY;
    },
    getStickyLeftWidth: var_core_value_sig083D => {
      var var_core_value_sig70CE, var_core_value_sig4B4A;
      let var_core_value_sig6585 = var_core_value_sig083D.runtimeScope["instanceService"] ?? var_core_value_sigC89B,
        var_core_value_sig743E = var_core_value_sig6585 == null ? undefined : var_core_value_sig6585.getUnit(var_core_value_sig083D.childUnitId, var_core_value_sigC0F3.UNIVER_SHEET),
        var_core_value_sig9872 = var_core_value_sig743E == null || (var_core_value_sig70CE = var_core_value_sig743E.getActiveSheet(true)) == null || (var_core_value_sig4B4A = var_core_value_sig70CE.getConfig) == null || (var_core_value_sig4B4A = var_core_value_sig4B4A.call(var_core_value_sig70CE)) == null ? undefined : var_core_value_sig4B4A.rowHeader;
      return var_core_value_sig9872 != null && var_core_value_sig9872.hidden ? 0 : (var_core_value_sig9872 == null ? undefined : var_core_value_sig9872.width) ?? var_core_value_sig7BBA;
    },
    getStickyHeaderHeight: var_core_value_sig049A => {
      let var_core_value_sig58301 = var_core_value_sig049A.runtimeScope["instanceService"] ?? var_core_value_sigC89B;
      return l_(var_core_value_sig58301 == null ? undefined : var_core_value_sig58301.getUnit(var_core_value_sig049A.childUnitId, var_core_value_sigC0F3.UNIVER_SHEET));
    },
    subscribeVerticalScroll: (var_core_value_sig69CB, var_core_value_sigB5CC) => {
      let var_core_value_sig823B = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigAE70(var_core_value_sig69CB);
      if (!var_core_value_sig823B) return;
      let var_core_value_sigC9B0 = var_core_value_sig823B.onScrollByBar$["subscribeEvent"](var_core_value_sigA321 => {
        var_core_value_sigB5CC(var_core_value_sigA321.viewportScrollY ?? var_core_value_sig823B.viewportScrollY ?? 0);
      });
      return var_core_value_sig9BBC(() => var_core_value_sigC9B0.unsubscribe());
    },
    handleWheel: var_core_value_sigAA991 => {
      var var_core_value_sig1D86;
      if (var_core_value_sigAA991.source !== "host-scroll-sync" && var_core_value_sigAA991.source !== "print-capture" && Du(var_core_value_sigAA991.layout, var_core_value_sigAA991.event)) return false;
      let var_core_value_sig1F4D = ((var_core_value_sig1D86 = var_core_value_sigAA991.runtimeScope) == null ? undefined : var_core_value_sig1D86.injector) ?? var_core_value_sigBBE41,
        var_core_value_sig91D2 = var_core_value_sig1F4D !== var_core_value_sigBBE41 && var_core_value_sig1F4D.has(var_core_value_sigE391) ? var_core_value_sig1F4D.get(var_core_value_sigE391) : var_core_value_sigDE91;
      if (!var_core_value_sig91D2) return false;
      let var_core_value_sigBF6A = var_core_value_sig91D2.getRenderUnitById(var_core_value_sigAA991.childUnitId),
        var_core_value_sigC8CD = var_core_value_sigBF6A == null ? undefined : var_core_value_sigBF6A.scene;
      return zp(var_core_value_sigAA991, var_core_value_sigC8CD == null ? undefined : var_core_value_sigC8CD.getViewport(var_core_value_sig36FA.VIEW_MAIN), var_core_value_sigC8CD);
    }
  };
  function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigAE70(var_core_value_sig1D8D) {
    var var_core_value_sigFCDA, var_core_value_sig4A8B;
    let var_core_value_sigE2301 = ((var_core_value_sigFCDA = var_core_value_sig1D8D.runtimeScope) == null ? undefined : var_core_value_sigFCDA.injector) ?? var_core_value_sigBBE41,
      var_core_value_sigB8AF = var_core_value_sigE2301 !== var_core_value_sigBBE41 && var_core_value_sigE2301.has(var_core_value_sigE391) ? var_core_value_sigE2301.get(var_core_value_sigE391) : var_core_value_sigDE91;
    return var_core_value_sigB8AF == null || (var_core_value_sig4A8B = var_core_value_sigB8AF.getRenderUnitById(var_core_value_sig1D8D.childUnitId)) == null || (var_core_value_sig4A8B = var_core_value_sig4A8B.scene) == null ? undefined : var_core_value_sig4A8B.getViewport(var_core_value_sig36FA.VIEW_MAIN);
  }
}
function S_(var_core_value_sig0847) {
  let var_core_value_sig04A3 = [];
  return [["base", var_core_value_sig94AE, 0], ["outline", var_core_value_sig0AA0, 100], ["numfmt", var_core_value_sig027F, 100], ["conditional-formatting", var_core_value_sig8F3F, 100], ["data-validation", var_core_value_sigAED9, 100], ["filter", var_core_value_sigEDF2, 100], ["drawing", var_core_value_sigC5E7, 100], ["sort", var_core_value_sigB065, 100], ["hyper-link", var_core_value_sig5805, 100], ["thread-comment", var_core_value_sig762A, 100], ["table", var_core_value_sig9EDA, 100], ["note", var_core_value_sig903C, 100], ["print", var_core_value_sig7341, 100], ["pivot-table", var_core_value_sig89B1, 100], ["chart", var_core_value_sigD70C, 100], ["sparkline", var_core_value_sig1E2D, 100], ["shape", var_core_value_sigDD47, 100], ["shape-contextual-ribbon", var_core_value_sig8D50, 100]].forEach(([var_core_value_sigD4B6, var_core_value_sigB90E, var_core_value_sigAEF2]) => {
    let var_core_value_sig4453 = ql(var_core_value_sig0847, {
      id: "embed.sheets." + var_core_value_sigD4B6,
      childType: var_core_value_sigC0F3.UNIVER_SHEET,
      surface: "ribbon",
      order: var_core_value_sigAEF2,
      menuSchema: var_core_value_sigB90E
    });
    var_core_value_sig4453 && var_core_value_sig04A3.push(var_core_value_sig4453);
  }), var_core_value_sig9BBC(() => var_core_value_sig04A3.forEach(var_core_value_sigBF4C => var_core_value_sigBF4C.dispose()));
}
function C_() {
  return {
    ...Um({
      childType: var_core_value_sigC0F3.UNIVER_SHEET,
      productName: "Sheets"
    }),
    presentationPolicy: {
      getChromeCss: () => '\n [data-embed-presentation-runtime="true"] [data-u-comp="formula-bar"] {\n display: none !important;\n }\n [data-embed-presentation-runtime="true"] [data-embed-canvas-root] {\n top: 0 !important;\n }\n ',
      activateNavigationAtPoint: ({
        childContext: var_core_value_sigFA8E,
        clientX: var_core_value_sig9D66,
        clientY: var_core_value_sig399F,
        runtimeHost: var_core_value_sig57C2
      }) => {
        let var_core_value_sigA85E = Jm(var_core_value_sig57C2, "[data-u-comp=\x22slide-tab-item\x22]", var_core_value_sig9D66, var_core_value_sig399F),
          var_core_value_sig65AA = var_core_value_sigA85E == null ? undefined : var_core_value_sigA85E.dataset["id"],
          var_core_value_sigC6DD = var_core_value_sigFA8E.runtimeScope["commandService"];
        return !var_core_value_sig65AA || !var_core_value_sigC6DD ? false : var_core_value_sigC6DD.syncExecuteCommand(var_core_value_sigC4B0.id, {
          unitId: var_core_value_sigFA8E.childUnitId,
          subUnitId: var_core_value_sig65AA
        }) !== false;
      }
    }
  };
}
function w_(var_core_value_sigB248) {
  return {
    childType: var_core_value_sigC0F3.UNIVER_SHEET,
    supportedLayouts: ["tab-peer", "docs-sticky-sheet", "scroll-contained"],
    canvasRootClassName: "univer-bg-gray-0 dark:!univer-bg-gray-900",
    scopedDependencies: [[var_core_value_sig496B, {
      useClass: var_core_value_sigE313
    }], [var_core_value_sigB8CE]],
    beforeDeactivate: D_,
    mount: var_core_value_sig1300 => {
      var var_core_value_sig05BB;
      let var_core_value_sig91CD = var_core_value_sig1300.runtimeScope["injector"],
        var_core_value_sig2AF0 = var_core_value_sig1300.runtimeScope["roots"].canvas ?? var_core_value_sig1300.renderScope["canvasRoot"] ?? var_core_value_sig1300.renderScope["contentRoot"] ?? var_core_value_sig1300.renderScope["rootElement"],
        var_core_value_sig796D = var_core_value_sig1300.runtimeScope["roots"].content ?? var_core_value_sig1300.renderScope["contentRoot"] ?? var_core_value_sig2AF0;
      var_core_value_sig2AF0.dataset["embedChildRenderUnitId"] = var_core_value_sig1300.childUnitId, var_core_value_sig2AF0.dataset["embedChildRenderMode"] = "sheet-workbench", var_core_value_sig796D.dataset["embedChildRenderUnitId"] = var_core_value_sig1300.childUnitId, var_core_value_sig796D.dataset["embedChildRenderMode"] = "sheet-overlay";
      let var_core_value_sig7D2B = var_core_value_sig1300.injector["get"](var_core_value_sig5DF8).getUnit(var_core_value_sig1300.childUnitId, var_core_value_sigC0F3.UNIVER_SHEET),
        var_core_value_sigEA89 = var_core_value_sig7D2B ? hh(var_core_value_sig1300, var_core_value_sigB248, var_core_value_sig3457 => E_(var_core_value_sig7D2B, var_core_value_sig3457)) : var_core_value_sig9BBC(() => {}),
        var_core_value_sig97B1 = Bc(var_core_value_sig1300, var_core_value_sigE391, var_core_value_sig2AF0, {
          scopedRenderInjector: true
        }) ?? var_core_value_sig9BBC(() => {}),
        var_core_value_sigD238 = T_(var_core_value_sig1300),
        var_core_value_sigA1F8 = A_(var_core_value_sig1300, var_core_value_sig796D),
        var_core_value_sig71F3 = Sl(var_core_value_sig796D);
      return var_core_value_sig71F3.render(var_core_value_sig6F03(fl, {
        injector: var_core_value_sig91CD,
        mountContainer: var_core_value_sig1300.runtimeScope["roots"].popup,
        embedId: var_core_value_sig1300.embedId,
        children: var_core_value_sig6F03(j_, {
          canvasRoot: var_core_value_sig2AF0,
          embedId: var_core_value_sig1300.embedId,
          fullscreen: !!var_core_value_sig1300.renderScope["fullscreen"],
          showChrome: O_(var_core_value_sig1300),
          readonly: ((var_core_value_sig05BB = var_core_value_sig1300.descriptor) == null ? undefined : var_core_value_sig05BB.mode) === "readonly",
          unitId: var_core_value_sig1300.childUnitId
        })
      })), var_core_value_sig9BBC(() => {
        var_core_value_sigEA89.dispose(), var_core_value_sigA1F8.dispose(), var_core_value_sigD238.dispose(), var_core_value_sig97B1.dispose(), Cl(var_core_value_sig71F3), var_core_value_sig2AF0.isConnected && (var_core_value_sig2AF0.removeAttribute("data-embed-child-render-unit-id"), var_core_value_sig2AF0.removeAttribute("data-embed-child-render-mode")), var_core_value_sig796D.isConnected && (var_core_value_sig796D.removeAttribute("data-embed-child-render-unit-id"), var_core_value_sig796D.removeAttribute("data-embed-child-render-mode"));
      });
    }
  };
}
function T_(var_core_value_sig65E5) {
  var var_core_value_sig4B09;
  if (var_core_value_sig65E5.layout !== "docs-sticky-sheet") return var_core_value_sig9BBC(() => {});
  let var_core_value_sigA595 = (var_core_value_sig4B09 = var_core_value_sig65E5.injector["get"](var_core_value_sigE391).getRenderUnitById(var_core_value_sig65E5.childUnitId)) == null || (var_core_value_sig4B09 = var_core_value_sig4B09.scene["getViewport"](var_core_value_sig36FA.VIEW_MAIN)) == null ? undefined : var_core_value_sig4B09.getScrollBar();
  if (!var_core_value_sigA595) return var_core_value_sig9BBC(() => {});
  let var_core_value_sigD1FD = var_core_value_sigA595.hideTrackWhenUnscrollable;
  return var_core_value_sigA595.hideTrackWhenUnscrollable = true, var_core_value_sig9BBC(() => {
    var_core_value_sigA595.hideTrackWhenUnscrollable = var_core_value_sigD1FD;
  });
}
function E_(var_core_value_sig07DA, var_core_value_sig0481) {
  var var_core_value_sig787A;
  let var_core_value_sig9913 = var_core_value_sig0481 == null ? undefined : var_core_value_sig0481.subUnitId,
    var_core_value_sig9B551 = (var_core_value_sig9913 ? var_core_value_sig07DA.getSheetBySheetId(var_core_value_sig9913) : undefined) ?? var_core_value_sig07DA.getSheets()[0];
  var_core_value_sig9B551 && ((var_core_value_sig787A = var_core_value_sig07DA.getActiveSheet(true)) == null ? undefined : var_core_value_sig787A.getSheetId()) !== var_core_value_sig9B551.getSheetId() && var_core_value_sig07DA.setActiveSheet(var_core_value_sig9B551);
}
function D_(var_core_value_sig689C) {
  var var_core_value_sigAD2C, var_core_value_sig210C;
  (var_core_value_sigAD2C = var_core_value_sig689C.runtimeScope["commandService"]) == null || var_core_value_sigAD2C.syncExecuteCommand(var_core_value_sig8DC9.id, {
    visible: false,
    eventType: var_core_value_sigB0C2.PointerDown,
    unitId: var_core_value_sig689C.childUnitId
  }), var_core_value_sig689C.runtimeScope["injector"].has(var_core_value_sigE172) && var_core_value_sig689C.runtimeScope["injector"].get(var_core_value_sigE172).hidePopupsForUnit(var_core_value_sig689C.childUnitId), (var_core_value_sig210C = var_core_value_sig689C.injector["get"](var_core_value_sigE391).getRenderUnitById(var_core_value_sig689C.childUnitId)) == null || (var_core_value_sig210C = var_core_value_sig210C.scene["getTransformer"]()) == null || var_core_value_sig210C.clearSelectedObjects();
}
function O_(var_core_value_sig2020) {
  return var_core_value_sig2020.renderScope["mode"] === "tab" || !!var_core_value_sig2020.renderScope["fullscreen"];
}
function k_(var_core_value_sig4738, var_core_value_sig8FDD) {
  let var_core_value_sig47F6 = var_core_value_sig4738.style["top"],
    var_core_value_sig7799 = var_core_value_sig4738.style["bottom"];
  return var_core_value_sig4738.style["top"] = var_core_value_sig8FDD.formulaBar ? "28px" : "", var_core_value_sig4738.style["bottom"] = var_core_value_sig8FDD.sheetBar ? var_core_value_sigAFC0 + "px" : "", var_core_value_sig9BBC(() => {
    var_core_value_sig4738.style["top"] = var_core_value_sig47F6, var_core_value_sig4738.style["bottom"] = var_core_value_sig7799;
  });
}
function A_(var_core_value_sigA735, var_core_value_sig3F0B1) {
  var var_core_value_sig54A5, var_core_value_sig0BB4;
  return (var_core_value_sig54A5 = var_core_value_sigA735.injector) != null && (var_core_value_sig0BB4 = var_core_value_sig54A5.has) != null && var_core_value_sig0BB4.call(var_core_value_sig54A5, ld) ? var_core_value_sigA735.injector["get"](ld).register({
    embedId: var_core_value_sigA735.embedId,
    childUnitId: var_core_value_sigA735.childUnitId,
    root: var_core_value_sigA735.renderScope["rootElement"],
    contentRoot: var_core_value_sig3F0B1
  }) : var_core_value_sig9BBC(() => {});
}
function j_(var_core_value_sig0A74) {
  let {
      canvasRoot: var_core_value_sigE80F,
      embedId: var_core_value_sig65C0,
      fullscreen: var_core_value_sigBF21,
      readonly: var_core_value_sig3601,
      showChrome: var_core_value_sig3F4A,
      unitId: var_core_value_sigBCEA
    } = var_core_value_sig0A74,
    var_core_value_sigE864 = var_core_value_sigE5CF(var_core_value_sig55EC),
    var_core_value_sig19C2 = var_core_value_sigC85E(var_core_value_sig5862),
    var_core_value_sigDE9E = var_core_value_sigC85E(gu),
    var_core_value_sigC764 = var_core_value_sig146E(() => var_core_value_sigDE9E.session$, var_core_value_sigDE9E.getSession(), false, [var_core_value_sigDE9E]),
    var_core_value_sig7BDE = !var_core_value_sigBF21 && (var_core_value_sigC764 == null ? undefined : var_core_value_sigC764.embedId) === var_core_value_sig65C0 && var_core_value_sigC764.childUnitId === var_core_value_sigBCEA,
    var_core_value_sig0340 = var_core_value_sig19C2.get("SheetShapeTextEditorContainer") ?? var_core_value_sig19C2.get("ShapeTextEditorContainer"),
    var_core_value_sig796B = var_core_value_sigE864 == null ? undefined : var_core_value_sigE864.footer,
    var_core_value_sig7348 = (var_core_value_sigE864 == null ? undefined : var_core_value_sigE864.formulaBar) ?? true,
    var_core_value_sig935B = var_core_value_sig796B === false ? false : (var_core_value_sig796B == null ? undefined : var_core_value_sig796B.sheetBar) ?? true,
    var_core_value_sig040B = !var_core_value_sig7BDE && var_core_value_sig3F4A && var_core_value_sig7348,
    var_core_value_sig1E1C = !var_core_value_sig7BDE && var_core_value_sig3F4A && var_core_value_sig935B;
  return var_core_value_sigB0BB(() => {
    let var_core_value_sigD652 = k_(var_core_value_sigE80F, {
      formulaBar: var_core_value_sig040B,
      sheetBar: var_core_value_sig1E1C
    });
    return () => var_core_value_sigD652.dispose();
  }, [var_core_value_sigE80F, var_core_value_sig040B, var_core_value_sig1E1C]), var_core_value_sig7BDE ? null : var_core_value_sigA648(var_core_value_sigC0A2, {
    children: [var_core_value_sig6F03("div", {
      className: "univer-pointer-events-none univer-absolute univer-inset-0 [&>*]:univer-pointer-events-auto",
      "data-u-comp": "sheet-embed-float-dom-root",
      children: var_core_value_sig6F03(var_core_value_sigF766, {
        unitId: var_core_value_sigBCEA
      })
    }), var_core_value_sig040B && var_core_value_sig6F03("div", {
      className: "univer-absolute univer-inset-x-0 univer-top-0 univer-z-10",
      style: {
        height: 28
      },
      children: var_core_value_sig6F03(var_core_value_sig10A5, {})
    }), !var_core_value_sig3601 && var_core_value_sig0340 && var_core_value_sig6F03(var_core_value_sig0340, {}), !var_core_value_sig3601 && !(var_core_value_sigE864 != null && var_core_value_sigE864.disableEdit) && var_core_value_sig6F03(var_core_value_sigA20C, {}), !var_core_value_sig3601 && var_core_value_sig6F03(var_core_value_sigC16D, {}), var_core_value_sig1E1C && var_core_value_sig6F03("div", {
      className: "univer-absolute\x20univer-inset-x-0\x20univer-bottom-0\x20univer-z-10",
      style: {
        height: var_core_value_sigAFC0
      },
      children: var_core_value_sig6F03(var_core_value_sig2301, {})
    })]
  });
}
const M_ = var_core_value_sig50B7(({
    children: var_core_value_sigC03E,
    className: var_core_value_sig9EA6,
    title: var_core_value_sig388D,
    onClick: var_core_value_sig2FC5,
    onMouseDown: var_core_value_sigCE49,
    onPointerDown: var_core_value_sigBDDC,
    ...var_core_value_sig3A7C
  }, var_core_value_sig2FE8) => var_core_value_sig6F03(var_core_value_sigC820, {
    ref: var_core_value_sig2FE8,
    type: "button",
    size: "small",
    variant: "ghost",
    "aria-label": var_core_value_sigC85E(var_core_value_sig21CF).t(var_core_value_sig388D),
    className: var_core_value_sig522C("univer-gap-1\x20univer-px-1.5\x20univer-text-sm", var_core_value_sig9EA6),
    onPointerDown: var_core_value_sig6289 => {
      var_core_value_sig6289.stopPropagation(), var_core_value_sigBDDC == null || var_core_value_sigBDDC(var_core_value_sig6289);
    },
    onMouseDown: var_core_value_sigB20A => {
      var_core_value_sigB20A.stopPropagation(), var_core_value_sigCE49 == null || var_core_value_sigCE49(var_core_value_sigB20A);
    },
    onClick: var_core_value_sig0591 => {
      var_core_value_sig2FC5 == null || var_core_value_sig2FC5(var_core_value_sig0591), var_core_value_sig0591.stopPropagation();
    },
    ...var_core_value_sig3A7C,
    children: var_core_value_sigC03E
  })),
  N_ = var_core_value_sig50B7(({
    title: var_core_value_sigBF10,
    primary: var_core_value_sig3A74,
    disabled: var_core_value_sig0E07,
    open: var_core_value_sig7979,
    onPrimaryClick: var_core_value_sig68AA1,
    onMouseDown: var_core_value_sigE83B,
    onPointerDown: var_core_value_sigC811,
    onClick: var_core_value_sigEA081,
    ...var_core_value_sigFF73
  }, var_core_value_sigAFA5) => var_core_value_sigA648("div", {
    ref: var_core_value_sigAFA5,
    className: var_core_value_sig522C("univer-box-border univer-inline-flex univer-h-6 univer-cursor-pointer univer-select-none univer-items-center univer-overflow-hidden univer-rounded-md univer-text-sm univer-text-gray-900 hover:univer-bg-gray-100 dark:!univer-text-gray-0 dark:hover:!univer-bg-gray-700", {
      "univer-bg-gray-100\x20dark:!univer-bg-gray-700": var_core_value_sig7979,
      "univer-cursor-not-allowed\x20univer-opacity-60": var_core_value_sig0E07
    }),
    onPointerDown: var_core_value_sigDBF1 => {
      var_core_value_sigDBF1.stopPropagation(), var_core_value_sigC811 == null || var_core_value_sigC811(var_core_value_sigDBF1);
    },
    onMouseDown: var_core_value_sig0358 => {
      var_core_value_sig0358.stopPropagation(), var_core_value_sigE83B == null || var_core_value_sigE83B(var_core_value_sig0358);
    },
    onClick: var_core_value_sigC4C9 => {
      var_core_value_sigEA081 == null || var_core_value_sigEA081(var_core_value_sigC4C9), var_core_value_sigC4C9.stopPropagation();
    },
    ...var_core_value_sigFF73,
    children: [var_core_value_sig6F03("button", {
      type: "button",
      "aria-label": var_core_value_sigBF10,
      className: "univer-box-border univer-flex univer-h-6 univer-w-7 univer-cursor-pointer univer-items-center univer-justify-center univer-border-none univer-bg-transparent univer-p-0 univer-text-gray-900 hover:univer-bg-gray-200 disabled:univer-cursor-not-allowed dark:!univer-text-gray-0 dark:hover:!univer-bg-gray-600",
      disabled: var_core_value_sig0E07,
      onClick: var_core_value_sig56ED => {
        var_core_value_sig56ED.stopPropagation(), var_core_value_sig68AA1();
      },
      children: var_core_value_sig3A74
    }), var_core_value_sig6F03(var_core_value_sig5C3C, {
      orientation: "vertical"
    }), var_core_value_sig6F03("button", {
      type: "button",
      "aria-label": var_core_value_sigBF10,
      className: "univer-box-border univer-flex univer-h-6 univer-w-5 univer-cursor-pointer univer-items-center univer-justify-center univer-border-none univer-bg-transparent univer-p-0 univer-text-gray-900 hover:univer-bg-gray-200 disabled:univer-cursor-not-allowed dark:!univer-text-gray-0 dark:hover:!univer-bg-gray-600",
      disabled: var_core_value_sig0E07,
      children: var_core_value_sig6F03(var_core_value_sig7990, {})
    })]
  }));
N_.displayName = "FloatingToolbarSplitTrigger";
function P_(var_core_value_sig7FB6) {
  let {
    children: var_core_value_sig2DCE,
    title: var_core_value_sigA8F7,
    className: var_core_value_sig87211,
    disabled: var_core_value_sigFBEE,
    active: var_core_value_sig978A,
    onClick: var_core_value_sig7789
  } = var_core_value_sig7FB6;
  return var_core_value_sig6F03(jf, {
    title: var_core_value_sigA8F7,
    placement: "bottom",
    children: var_core_value_sig6F03(var_core_value_sig58BD, {
      className: var_core_value_sig522C("univer-text-sm", var_core_value_sig87211),
      disabled: var_core_value_sigFBEE,
      active: var_core_value_sig978A,
      onClick: var_core_value_sig7789,
      children: var_core_value_sig2DCE
    })
  });
}
function F_(var_core_value_sig2AA0) {
  let {
      item: var_core_value_sigF49C,
      children: var_core_value_sigE928,
      title: var_core_value_sigAE3D,
      onClick: var_core_value_sigCDCC
    } = var_core_value_sig2AA0,
    {
      hidden: var_core_value_sig7C8C,
      disabled: var_core_value_sigE401,
      activated: var_core_value_sig44F5
    } = I_(var_core_value_sigF49C),
    var_core_value_sig5278 = var_core_value_sigC85E(var_core_value_sig21CF);
  return !var_core_value_sigF49C || var_core_value_sig7C8C ? null : var_core_value_sig6F03(P_, {
    title: var_core_value_sig5278.t(var_core_value_sigAE3D),
    disabled: var_core_value_sigE401,
    active: var_core_value_sig44F5,
    onClick: var_core_value_sigCDCC,
    children: var_core_value_sigE928
  });
}
function I_(var_core_value_sig3A9A) {
  return {
    hidden: var_core_value_sig146E(() => {
      var var_core_value_sigFD401;
      return (var_core_value_sig3A9A == null || (var_core_value_sigFD401 = var_core_value_sig3A9A.hidden$) == null ? undefined : var_core_value_sigFD401.pipe(var_core_value_sigC101(false))) ?? var_core_value_sigDA93(false);
    }, false, false, [var_core_value_sig3A9A]),
    disabled: var_core_value_sig146E(() => {
      var var_core_value_sigD649;
      return (var_core_value_sig3A9A == null || (var_core_value_sigD649 = var_core_value_sig3A9A.disabled$) == null ? undefined : var_core_value_sigD649.pipe(var_core_value_sigC101(false))) ?? var_core_value_sigDA93(false);
    }, false, false, [var_core_value_sig3A9A]),
    activated: var_core_value_sig146E(() => {
      var var_core_value_sig0E88;
      return (var_core_value_sig3A9A == null || (var_core_value_sig0E88 = var_core_value_sig3A9A.activated$) == null ? undefined : var_core_value_sig0E88.pipe(var_core_value_sigC101(false))) ?? var_core_value_sigDA93(false);
    }, false, false, [var_core_value_sig3A9A]),
    value: var_core_value_sig146E(() => {
      var var_core_value_sig13C8;
      return (var_core_value_sig3A9A == null || (var_core_value_sig13C8 = var_core_value_sig3A9A.value$) == null ? undefined : var_core_value_sig13C8.pipe(var_core_value_sigC101(undefined))) ?? var_core_value_sigDA93(undefined);
    }, undefined, false, [var_core_value_sig3A9A])
  };
}
function L_(var_core_value_sig5693) {
  return var_core_value_sig5693.tooltip ?? var_core_value_sig5693.title ?? var_core_value_sig5693.id;
}
function R_(var_core_value_sig9934) {
  return typeof var_core_value_sig9934.label == "string" ? var_core_value_sig9934.label : typeof var_core_value_sig9934.value == "string" || typeof var_core_value_sig9934.value == "number" ? String(var_core_value_sig9934.value) : var_core_value_sig9934.id ?? "";
}
function z_(var_core_value_sigE4D8) {
  return var_core_value_sigE4D8 === var_core_value_sigCBF7.CLIP ? var_core_value_sig6F03(var_core_value_sig8073, {}) : var_core_value_sigE4D8 === var_core_value_sigCBF7.WRAP ? var_core_value_sig6F03(var_core_value_sig4785, {}) : var_core_value_sig6F03(var_core_value_sig57D7, {});
}
function B_(var_core_value_sig2215) {
  return var_core_value_sig2215 instanceof HTMLElement && !!var_core_value_sig2215.closest('button, input, textarea, [contenteditable="true"], [role="button"], [role="combobox"], [data-u-comp="select"], .univer-select');
}
function V_(var_core_value_sig4D72) {
  var_core_value_sig4D72.stopPropagation(), B_(var_core_value_sig4D72.target) || var_core_value_sig4D72.preventDefault();
}
function H_(var_core_value_sigA7F1, var_core_value_sig5F36) {
  if (!(var_core_value_sigA7F1 instanceof HTMLElement)) return false;
  let var_core_value_sig7CCF = var_core_value_sigA7F1.closest("[data-embed-floating-menu=\x22true\x22],\x20[data-embed-floating-menu-popup=\x22true\x22]");
  return (var_core_value_sig7CCF == null ? undefined : var_core_value_sig7CCF.getAttribute("data-embed-id")) === var_core_value_sig5F36;
}
function U_(var_core_value_sig17A1, var_core_value_sig6A6B) {
  let var_core_value_sigBA34 = var_core_value_sig17A1.target;
  H_(var_core_value_sigBA34, var_core_value_sig6A6B) && var_core_value_sig17A1.preventDefault();
}
function W_(var_core_value_sig5C43) {
  let {
    embedId: var_core_value_sigEB12,
    children: var_core_value_sig76A9,
    onPointerDown: var_core_value_sig8E18
  } = var_core_value_sig5C43;
  return var_core_value_sig6F03("section", {
    "data-embed-id": var_core_value_sigEB12,
    "data-embed-floating-menu-popup": "true",
    className: "univer-box-border\x20univer-grid\x20univer-gap-1\x20univer-rounded-lg\x20univer-border\x20univer-border-solid\x20univer-border-gray-200\x20univer-bg-gray-0\x20univer-p-2\x20univer-shadow-lg\x20dark:!univer-border-gray-700\x20dark:!univer-bg-gray-900",
    onPointerDown: var_core_value_sig8E18,
    onMouseDown: V_,
    children: var_core_value_sig76A9
  });
}
function G_(var_core_value_sig73A2) {
  let {
    children: var_core_value_sig502C
  } = var_core_value_sig73A2;
  return var_core_value_sig6F03("div", {
    className: "univer-flex\x20univer-items-center\x20univer-gap-1",
    children: var_core_value_sig502C
  });
}
function K_(var_core_value_sig485B) {
  let {
      embedId: var_core_value_sigBCA6,
      title: var_core_value_sigCFBC,
      trigger: var_core_value_sigB810,
      overlay: var_core_value_sig579C,
      disabled: var_core_value_sigA567,
      triggerClassName: var_core_value_sig0A94,
      open: var_core_value_sig2AAA,
      onOpenChange: var_core_value_sig60FD
    } = var_core_value_sig485B,
    var_core_value_sigCCBF = var_core_value_sigC85E(var_core_value_sig21CF),
    var_core_value_sig6C3A = var_core_value_sig6F03(var_core_value_sigAF6B, {
      disabled: var_core_value_sigA567,
      align: "start",
      sideOffset: 6,
      open: var_core_value_sig2AAA,
      onOpenChange: var_core_value_sig60FD,
      onPointerDownOutside: var_core_value_sigE521 => U_(var_core_value_sigE521, var_core_value_sigBCA6),
      onFocusOutside: var_core_value_sig0571 => U_(var_core_value_sig0571, var_core_value_sigBCA6),
      onInteractOutside: var_core_value_sig43F41 => U_(var_core_value_sig43F41, var_core_value_sigBCA6),
      overlay: var_core_value_sig6F03("div", {
        "data-embed-id": var_core_value_sigBCA6,
        "data-embed-floating-menu-popup": "true",
        onPointerDown: V_,
        onMouseDown: V_,
        children: var_core_value_sig579C
      }),
      children: var_core_value_sig6F03(M_, {
        title: var_core_value_sigCFBC,
        "data-state": var_core_value_sig2AAA ? "open" : "closed",
        disabled: var_core_value_sigA567,
        className: var_core_value_sig0A94,
        children: var_core_value_sigB810
      })
    });
  return var_core_value_sig6F03(jf, {
    title: var_core_value_sigCCBF.t(var_core_value_sigCFBC),
    placement: "bottom",
    children: var_core_value_sig6C3A
  });
}
function q_(var_core_value_sig2AE1) {
  let {
    children: var_core_value_sigC181
  } = var_core_value_sig2AE1;
  return var_core_value_sig6F03("section", {
    className: "univer-box-border univer-grid univer-min-w-32 univer-gap-0.5 univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-1 univer-shadow-lg dark:!univer-border-gray-700 dark:!univer-bg-gray-900",
    onPointerDown: V_,
    onMouseDown: V_,
    children: var_core_value_sigC181
  });
}
function J_(var_core_value_sig8B6F) {
  let {
    children: var_core_value_sig9ECC
  } = var_core_value_sig8B6F;
  return var_core_value_sig6F03("section", {
    className: "univer-box-border univer-grid univer-min-w-44 univer-gap-0.5 univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-1 univer-shadow-lg dark:!univer-border-gray-700 dark:!univer-bg-gray-900",
    onPointerDown: V_,
    onMouseDown: V_,
    children: var_core_value_sig9ECC
  });
}
function Y_(var_core_value_sig36DC) {
  let {
    children: var_core_value_sig4C11,
    icon: var_core_value_sigBA2B1,
    onClick: var_core_value_sigAB3B
  } = var_core_value_sig36DC;
  return var_core_value_sigA648("button", {
    type: "button",
    className: "univer-box-border univer-grid univer-h-7 univer-w-full univer-grid-cols-[1.5rem_1fr] univer-items-center univer-gap-2 univer-rounded univer-border-none univer-bg-transparent univer-px-2 univer-text-left univer-text-sm univer-text-gray-900 univer-transition-colors hover:univer-bg-gray-100 dark:!univer-text-gray-0 dark:hover:!univer-bg-gray-700",
    onClick: var_core_value_sigAB3B,
    children: [var_core_value_sig6F03("span", {
      className: "univer-flex univer-items-center univer-justify-center",
      children: var_core_value_sigBA2B1
    }), var_core_value_sig6F03("span", {
      className: "univer-truncate",
      children: var_core_value_sig4C11
    })]
  });
}
function X_(var_core_value_sigEF94) {
  let {
    children: var_core_value_sig1968,
    icon: var_core_value_sigF414,
    active: var_core_value_sigD94D,
    onClick: var_core_value_sigE2D2
  } = var_core_value_sigEF94;
  return var_core_value_sigA648("button", {
    type: "button",
    className: var_core_value_sig522C("univer-box-border univer-flex univer-h-7 univer-w-full univer-items-center univer-gap-2 univer-rounded univer-border-none univer-bg-transparent univer-px-2 univer-text-left univer-text-sm univer-text-gray-900 univer-transition-colors hover:univer-bg-gray-100 dark:!univer-text-gray-0 dark:hover:!univer-bg-gray-700", {
      "!univer-bg-gray-200\x20dark:!univer-bg-gray-500": var_core_value_sigD94D
    }),
    onClick: var_core_value_sigE2D2,
    children: [var_core_value_sigF414, var_core_value_sig1968]
  });
}
function Z_(var_core_value_sig8DED) {
  let {
    title: var_core_value_sigDC78,
    active: var_core_value_sigBEEA,
    disabled: var_core_value_sigFC95,
    children: var_core_value_sig331A,
    onClick: var_core_value_sigC5A1
  } = var_core_value_sig8DED;
  return var_core_value_sig6F03(jf, {
    title: var_core_value_sigC85E(var_core_value_sig21CF).t(var_core_value_sigDC78),
    placement: "bottom",
    children: var_core_value_sig6F03(var_core_value_sig58BD, {
      className: "univer-size-7",
      disabled: var_core_value_sigFC95,
      active: var_core_value_sigBEEA,
      onClick: var_core_value_sigC5A1,
      children: var_core_value_sig331A
    })
  });
}
function Q_() {
  return [...var_core_value_sig2376];
}
function $_() {
  return [...var_core_value_sig0739];
}
function ev(var_core_value_sig3D00) {
  return !var_core_value_sig3D00 || !("selections" in var_core_value_sig3D00) || !Array.isArray(var_core_value_sig3D00.selections) ? [] : var_core_value_sig3D00.selections;
}
function tv(var_core_value_sig42CA) {
  let {
      menuItem: var_core_value_sig302A,
      onClick: var_core_value_sig5B5F
    } = var_core_value_sig42CA,
    {
      hidden: var_core_value_sig0F5F,
      disabled: var_core_value_sigC85F,
      value: var_core_value_sigD45D
    } = I_(var_core_value_sig302A),
    var_core_value_sig553B = var_core_value_sigC85E(var_core_value_sig21CF);
  if (!var_core_value_sig302A || var_core_value_sig0F5F) return null;
  let var_core_value_sigECD1 = var_core_value_sig553B.t("embed-ui.sheetsFloating.toolbar.numberFormat");
  return var_core_value_sig6F03(jf, {
    title: var_core_value_sigECD1,
    placement: "bottom",
    children: var_core_value_sigA648(M_, {
      title: var_core_value_sigECD1,
      disabled: var_core_value_sigC85F,
      onClick: var_core_value_sig5B5F,
      children: [var_core_value_sig6F03(var_core_value_sig955A, {}), var_core_value_sig6F03("span", {
        children: typeof var_core_value_sigD45D == "string" && var_core_value_sigD45D ? var_core_value_sigD45D : "General"
      }), var_core_value_sig6F03(var_core_value_sig7990, {})]
    })
  });
}
function nv(var_core_value_sigB66F) {
  let {
      embedId: var_core_value_sig2A2E,
      menuItem: var_core_value_sig1D8D1,
      title: var_core_value_sig198F,
      open: var_core_value_sigAA30,
      onOpenChange: var_core_value_sig2E91,
      onSelect: var_core_value_sigA15A
    } = var_core_value_sigB66F,
    {
      hidden: var_core_value_sigB39A,
      disabled: var_core_value_sigC49D,
      value: var_core_value_sigAF48
    } = I_(var_core_value_sig1D8D1);
  if (!var_core_value_sig1D8D1 || var_core_value_sigB39A) return null;
  let var_core_value_sigDDE2 = typeof var_core_value_sigAF48 == "string" && var_core_value_sigAF48 ? var_core_value_sigAF48 : "Arial";
  return var_core_value_sig6F03(K_, {
    embedId: var_core_value_sig2A2E,
    disabled: var_core_value_sigC49D,
    title: var_core_value_sig198F,
    open: var_core_value_sigAA30,
    onOpenChange: var_core_value_sig2E91,
    trigger: var_core_value_sigA648(var_core_value_sigC0A2, {
      children: [var_core_value_sig6F03("span", {
        className: "univer-w-28 univer-truncate univer-text-left",
        children: var_core_value_sigDDE2
      }), var_core_value_sig6F03(var_core_value_sig7990, {})]
    }),
    overlay: var_core_value_sig6F03("div", {
      className: "univer-box-border univer-max-h-72 univer-min-w-44 univer-overflow-y-auto univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-1 univer-shadow-lg dark:!univer-border-gray-700 dark:!univer-bg-gray-900 [&_button]:!univer-h-7 [&_button]:!univer-px-2 [&_ul]:!univer-text-sm",
      onPointerDown: V_,
      onMouseDown: V_,
      children: var_core_value_sig6F03(var_core_value_sig8544, {
        value: var_core_value_sigDDE2,
        onChange: var_core_value_sig37F8 => {
          var_core_value_sigA15A(var_core_value_sig37F8), var_core_value_sig2E91(false);
        }
      })
    })
  });
}
function rv(var_core_value_sig364F) {
  let {
      embedId: var_core_value_sigCE6D,
      menuItem: var_core_value_sig36E71,
      title: var_core_value_sigBA93,
      open: var_core_value_sigC54C,
      onOpenChange: var_core_value_sig8477,
      onSelect: var_core_value_sigCD3F
    } = var_core_value_sig364F,
    {
      hidden: var_core_value_sig7762,
      disabled: var_core_value_sig7BF5,
      value: var_core_value_sigA278
    } = I_(var_core_value_sig36E71);
  if (!var_core_value_sig36E71 || var_core_value_sig7762) return null;
  let var_core_value_sigDAE8 = typeof var_core_value_sigA278 == "number" || typeof var_core_value_sigA278 == "string" ? Number(var_core_value_sigA278) : 11;
  return var_core_value_sig6F03(K_, {
    embedId: var_core_value_sigCE6D,
    disabled: var_core_value_sig7BF5,
    title: var_core_value_sigBA93,
    open: var_core_value_sigC54C,
    onOpenChange: var_core_value_sig8477,
    trigger: var_core_value_sigA648(var_core_value_sigC0A2, {
      children: [var_core_value_sig6F03("span", {
        className: "univer-min-w-6 univer-text-left",
        children: var_core_value_sigDAE8
      }), var_core_value_sig6F03(var_core_value_sig7990, {})]
    }),
    overlay: var_core_value_sig6F03("div", {
      className: "univer-box-border\x20univer-max-h-72\x20univer-min-w-20\x20univer-overflow-y-auto\x20univer-rounded-lg\x20univer-border\x20univer-border-solid\x20univer-border-gray-200\x20univer-bg-gray-0\x20univer-p-1\x20univer-shadow-lg\x20dark:!univer-border-gray-700\x20dark:!univer-bg-gray-900",
      onPointerDown: V_,
      onMouseDown: V_,
      children: $_().map(var_core_value_sig45D3 => {
        let var_core_value_sigE2F3 = Number(var_core_value_sig45D3.value) === var_core_value_sigDAE8;
        return var_core_value_sigA648("button", {
          type: "button",
          className: var_core_value_sig522C("univer-grid univer-h-7 univer-w-full univer-grid-cols-[1fr_1rem] univer-items-center univer-gap-2 univer-rounded univer-border-none univer-bg-transparent univer-px-2 univer-text-left univer-text-sm univer-text-gray-900 hover:univer-bg-gray-100 dark:!univer-text-gray-0 dark:hover:!univer-bg-gray-700", {
            "univer-bg-gray-100\x20dark:!univer-bg-gray-700": var_core_value_sigE2F3
          }),
          onClick: () => {
            var_core_value_sigCD3F(String(var_core_value_sig45D3.value)), var_core_value_sig8477(false);
          },
          children: [var_core_value_sig6F03("span", {
            children: var_core_value_sig45D3.label
          }), var_core_value_sigE2F3 && var_core_value_sig6F03(var_core_value_sig536B, {
            className: "univer-text-primary-600"
          })]
        }, var_core_value_sig45D3.value);
      })
    })
  });
}
function iv(var_core_value_sigFFC1) {
  let {
      embedId: var_core_value_sig6480,
      menuItem: var_core_value_sig66BE,
      open: var_core_value_sig1BBD1,
      onOpenChange: var_core_value_sigB2271,
      execute: var_core_value_sigE106
    } = var_core_value_sigFFC1,
    {
      hidden: var_core_value_sig5F32,
      disabled: var_core_value_sig0306
    } = I_(var_core_value_sig66BE);
  return !var_core_value_sig66BE || var_core_value_sig5F32 ? null : var_core_value_sig6F03(K_, {
    embedId: var_core_value_sig6480,
    disabled: var_core_value_sig0306,
    title: "embed-ui.sheetsFloating.toolbar.horizontalAlignMode.main",
    triggerClassName: "univer-gap-0.5 univer-px-1",
    open: var_core_value_sig1BBD1,
    onOpenChange: var_core_value_sigB2271,
    trigger: var_core_value_sigA648(var_core_value_sigC0A2, {
      children: [var_core_value_sig6F03(var_core_value_sigCAA7, {}), var_core_value_sig6F03(var_core_value_sig7990, {})]
    }),
    overlay: var_core_value_sig6F03(W_, {
      embedId: var_core_value_sig6480,
      onPointerDown: var_core_value_sig9CB1 => var_core_value_sig9CB1.stopPropagation(),
      children: var_core_value_sigA648(G_, {
        children: [var_core_value_sig6F03(ov, {
          item: var_core_value_sig66BE,
          title: "embed-ui.sheetsFloating.align.left",
          onClick: () => var_core_value_sigE106(var_core_value_sig66BE, {
            value: var_core_value_sig5B07.LEFT
          }),
          children: var_core_value_sig6F03(var_core_value_sigCAA7, {})
        }), var_core_value_sig6F03(ov, {
          item: var_core_value_sig66BE,
          title: "embed-ui.sheetsFloating.align.center",
          onClick: () => var_core_value_sigE106(var_core_value_sig66BE, {
            value: var_core_value_sig5B07.CENTER
          }),
          children: var_core_value_sig6F03(var_core_value_sigB172, {})
        }), var_core_value_sig6F03(ov, {
          item: var_core_value_sig66BE,
          title: "embed-ui.sheetsFloating.align.right",
          onClick: () => var_core_value_sigE106(var_core_value_sig66BE, {
            value: var_core_value_sig5B07.RIGHT
          }),
          children: var_core_value_sig6F03(var_core_value_sig063A, {})
        })]
      })
    })
  });
}
function av(var_core_value_sig1D6E) {
  let {
      embedId: var_core_value_sig719A,
      menuItem: var_core_value_sig1251,
      open: var_core_value_sigC5F6,
      onOpenChange: var_core_value_sigA3F9,
      execute: var_core_value_sig74D8
    } = var_core_value_sig1D6E,
    {
      hidden: var_core_value_sigCC2E,
      disabled: var_core_value_sig430B
    } = I_(var_core_value_sig1251);
  return !var_core_value_sig1251 || var_core_value_sigCC2E ? null : var_core_value_sig6F03(K_, {
    embedId: var_core_value_sig719A,
    disabled: var_core_value_sig430B,
    title: "embed-ui.sheetsFloating.toolbar.verticalAlignMode.main",
    triggerClassName: "univer-gap-0.5 univer-px-1",
    open: var_core_value_sigC5F6,
    onOpenChange: var_core_value_sigA3F9,
    trigger: var_core_value_sigA648(var_core_value_sigC0A2, {
      children: [var_core_value_sig6F03(var_core_value_sigE052, {}), var_core_value_sig6F03(var_core_value_sig7990, {})]
    }),
    overlay: var_core_value_sig6F03(W_, {
      embedId: var_core_value_sig719A,
      onPointerDown: var_core_value_sigFB76 => var_core_value_sigFB76.stopPropagation(),
      children: var_core_value_sigA648(G_, {
        children: [var_core_value_sig6F03(ov, {
          item: var_core_value_sig1251,
          title: "embed-ui.sheetsFloating.align.top",
          onClick: () => var_core_value_sig74D8(var_core_value_sig1251, {
            value: var_core_value_sigC1A2.TOP
          }),
          children: var_core_value_sig6F03(var_core_value_sig68AA, {})
        }), var_core_value_sig6F03(ov, {
          item: var_core_value_sig1251,
          title: "embed-ui.sheetsFloating.align.middle",
          onClick: () => var_core_value_sig74D8(var_core_value_sig1251, {
            value: var_core_value_sigC1A2.MIDDLE
          }),
          children: var_core_value_sig6F03(var_core_value_sigE052, {})
        }), var_core_value_sig6F03(ov, {
          item: var_core_value_sig1251,
          title: "embed-ui.sheetsFloating.align.bottom",
          onClick: () => var_core_value_sig74D8(var_core_value_sig1251, {
            value: var_core_value_sigC1A2.BOTTOM
          }),
          children: var_core_value_sig6F03(var_core_value_sigC6D5, {})
        })]
      })
    })
  });
}
function ov(var_core_value_sigAF9F1) {
  let {
      item: var_core_value_sig07E71,
      title: var_core_value_sig4C66,
      children: var_core_value_sigE196,
      onClick: var_core_value_sigB9CB
    } = var_core_value_sigAF9F1,
    {
      hidden: var_core_value_sig32F4,
      disabled: var_core_value_sig7A4E,
      activated: var_core_value_sig1135
    } = I_(var_core_value_sig07E71);
  return !var_core_value_sig07E71 || var_core_value_sig32F4 ? null : var_core_value_sig6F03(Z_, {
    title: var_core_value_sig4C66,
    disabled: var_core_value_sig7A4E,
    active: var_core_value_sig1135,
    onClick: var_core_value_sigB9CB,
    children: var_core_value_sigE196
  });
}
function sv(var_core_value_sig2441) {
  let {
      embedId: var_core_value_sig9603,
      menuItem: var_core_value_sig2EC1,
      title: var_core_value_sig0843,
      icon: var_core_value_sig0991,
      defaultColor: var_core_value_sig3B22,
      open: var_core_value_sig80741,
      onOpenChange: var_core_value_sig1182,
      onChange: var_core_value_sigCD5C,
      onReset: var_core_value_sigCA55
    } = var_core_value_sig2441,
    var_core_value_sig8489 = var_core_value_sigC85E(var_core_value_sig21CF),
    {
      hidden: var_core_value_sig2919,
      disabled: var_core_value_sig621C,
      value: var_core_value_sigE938
    } = I_(var_core_value_sig2EC1),
    [var_core_value_sig8824, var_core_value_sig3313] = var_core_value_sigC4B6(var_core_value_sig3B22);
  if (!var_core_value_sig2EC1 || var_core_value_sig2919) return null;
  let var_core_value_sig23471 = var_core_value_sig6F03(var_core_value_sigAF6B, {
    disabled: var_core_value_sig621C,
    align: "start",
    sideOffset: 6,
    open: var_core_value_sig80741,
    onOpenChange: var_core_value_sig1182,
    onPointerDownOutside: var_core_value_sig58A5 => U_(var_core_value_sig58A5, var_core_value_sig9603),
    onFocusOutside: var_core_value_sigA486 => U_(var_core_value_sigA486, var_core_value_sig9603),
    onInteractOutside: var_core_value_sigB0DE => U_(var_core_value_sigB0DE, var_core_value_sig9603),
    overlay: var_core_value_sigA648("div", {
      "data-embed-id": var_core_value_sig9603,
      "data-embed-floating-menu-popup": "true",
      className: "univer-box-border univer-w-72 univer-overflow-hidden univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-3 univer-shadow-lg dark:!univer-bg-gray-900",
      onPointerDown: V_,
      onMouseDown: V_,
      children: [var_core_value_sig6F03(var_core_value_sigEAAE, {
        value: typeof var_core_value_sigE938 == "string" && var_core_value_sigE938 ? var_core_value_sigE938 : var_core_value_sig8824,
        onChange: var_core_value_sig6793 => {
          var_core_value_sig3313(var_core_value_sig6793), var_core_value_sigCD5C(var_core_value_sig6793);
        }
      }), var_core_value_sig6F03(var_core_value_sig5C3C, {}), var_core_value_sigA648("button", {
        type: "button",
        className: "univer-flex univer-h-8 univer-w-full univer-items-center univer-gap-2 univer-rounded univer-border-none univer-bg-transparent univer-px-1 univer-text-left univer-text-sm univer-text-gray-900 hover:univer-bg-gray-100 dark:!univer-text-gray-0 dark:hover:!univer-bg-gray-700",
        onClick: () => {
          var_core_value_sig3313(var_core_value_sig3B22), var_core_value_sigCA55(), var_core_value_sig1182(false);
        },
        children: [var_core_value_sig6F03(var_core_value_sigDD67, {}), var_core_value_sig6F03("span", {
          children: var_core_value_sig8489.t("embed-ui.sheetsFloating.toolbar.resetColor")
        })]
      })]
    }),
    children: var_core_value_sig6F03(M_, {
      title: var_core_value_sig0843,
      disabled: var_core_value_sig621C,
      children: var_core_value_sig0991
    })
  });
  return var_core_value_sig6F03(jf, {
    title: var_core_value_sig8489.t(var_core_value_sig0843),
    placement: "bottom",
    children: var_core_value_sig23471
  });
}
function cv(var_core_value_sigC3CB) {
  let {
      embedId: var_core_value_sigA9421,
      menuItem: var_core_value_sig24FA,
      open: var_core_value_sig336A,
      onOpenChange: var_core_value_sigA892,
      onSelect: var_core_value_sig21F2
    } = var_core_value_sigC3CB,
    var_core_value_sigF984 = var_core_value_sigC85E(var_core_value_sig21CF),
    var_core_value_sigD310 = var_core_value_sigC85E(var_core_value_sig0EBC),
    {
      hidden: var_core_value_sigC3E61,
      disabled: var_core_value_sig6C5C
    } = I_(var_core_value_sig24FA),
    [var_core_value_sig18C6, var_core_value_sig75E5] = var_core_value_sigC4B6(var_core_value_sigCFF7.ALL),
    [var_core_value_sig8FCA, var_core_value_sig97D9] = var_core_value_sigC4B6(var_core_value_sigB83E.THIN),
    [var_core_value_sig0589, var_core_value_sig6C9E] = var_core_value_sigC4B6("#000000");
  if (!var_core_value_sig24FA || var_core_value_sigC3E61) return null;
  let var_core_value_sigCAB8 = (var_core_value_sigECD2 = var_core_value_sig18C6, var_core_value_sigD28E = var_core_value_sig8FCA, var_core_value_sigB896 = var_core_value_sig0589) => {
      var_core_value_sig75E5(var_core_value_sigECD2), var_core_value_sig97D9(var_core_value_sigD28E), var_core_value_sig6C9E(var_core_value_sigB896), var_core_value_sig21F2(var_core_value_sigECD2, var_core_value_sigD28E, var_core_value_sigB896);
    },
    var_core_value_sig8CA3 = var_core_value_sig22D9 => {
      var var_core_value_sig7E70;
      return ((var_core_value_sig7E70 = Q_().find(var_core_value_sig4A08 => var_core_value_sig4A08.value === var_core_value_sig22D9)) == null ? undefined : var_core_value_sig7E70.icon) ?? "AllBorderIcon";
    },
    var_core_value_sigCF68 = (var_core_value_sig9CCC, var_core_value_sigEB93 = "univer-fill-primary-600") => {
      let var_core_value_sig8F13 = var_core_value_sigD310.get(var_core_value_sig9CCC);
      return var_core_value_sig8F13 ? var_core_value_sig6F03(var_core_value_sig8F13, {
        className: var_core_value_sigEB93
      }) : var_core_value_sig6F03(var_core_value_sig2EF0, {});
    },
    var_core_value_sig8B08 = var_core_value_sig6F03(var_core_value_sigAF6B, {
      disabled: var_core_value_sig6C5C,
      align: "start",
      sideOffset: 6,
      open: var_core_value_sig336A,
      onOpenChange: var_core_value_sigA892,
      onPointerDownOutside: var_core_value_sigAC84 => U_(var_core_value_sigAC84, var_core_value_sigA9421),
      onFocusOutside: var_core_value_sig1312 => U_(var_core_value_sig1312, var_core_value_sigA9421),
      onInteractOutside: var_core_value_sig18A9 => U_(var_core_value_sig18A9, var_core_value_sigA9421),
      overlay: var_core_value_sigA648(W_, {
        embedId: var_core_value_sigA9421,
        onPointerDown: var_core_value_sigE028 => var_core_value_sigE028.stopPropagation(),
        children: [var_core_value_sig6F03("div", {
          className: "univer-grid univer-grid-cols-5 univer-gap-2 univer-text-gray-600 dark:!univer-text-gray-200",
          children: Q_().map(var_core_value_sig8FC31 => var_core_value_sig6F03(Z_, {
            title: var_core_value_sig8FC31.label,
            active: var_core_value_sig18C6 === var_core_value_sig8FC31.value,
            onClick: () => var_core_value_sigCAB8(var_core_value_sig8FC31.value),
            children: var_core_value_sigCF68(var_core_value_sig8FC31.icon)
          }, var_core_value_sig8FC31.value))
        }), var_core_value_sig6F03(var_core_value_sig5C3C, {}), var_core_value_sigA648(G_, {
          children: [var_core_value_sig6F03(var_core_value_sigAF6B, {
            align: "start",
            sideOffset: 6,
            onPointerDownOutside: var_core_value_sig76A1 => U_(var_core_value_sig76A1, var_core_value_sigA9421),
            onFocusOutside: var_core_value_sig642F => U_(var_core_value_sig642F, var_core_value_sigA9421),
            onInteractOutside: var_core_value_sigF190 => U_(var_core_value_sigF190, var_core_value_sigA9421),
            overlay: var_core_value_sig6F03("div", {
              "data-embed-id": var_core_value_sigA9421,
              "data-embed-floating-menu-popup": "true",
              className: "univer-overflow-hidden univer-rounded-lg univer-bg-gray-0 univer-p-4 univer-shadow-lg dark:!univer-bg-gray-900",
              onPointerDown: V_,
              onMouseDown: V_,
              children: var_core_value_sig6F03(var_core_value_sigEAAE, {
                value: var_core_value_sig0589,
                onChange: var_core_value_sig5BF0 => var_core_value_sigCAB8(var_core_value_sig18C6, var_core_value_sig8FCA, var_core_value_sig5BF0)
              })
            }),
            children: var_core_value_sigA648(Z_, {
              title: "embed-ui.sheetsFloating.borderLine.borderColor",
              active: false,
              onClick: () => undefined,
              children: [var_core_value_sig6F03(var_core_value_sig9192, {
                extend: {
                  colorChannel1: var_core_value_sig0589
                }
              }), var_core_value_sig6F03(var_core_value_sig7990, {})]
            })
          }), var_core_value_sig6F03(var_core_value_sigAF6B, {
            align: "start",
            sideOffset: 6,
            onPointerDownOutside: var_core_value_sig4144 => U_(var_core_value_sig4144, var_core_value_sigA9421),
            onFocusOutside: var_core_value_sig81CB => U_(var_core_value_sig81CB, var_core_value_sigA9421),
            onInteractOutside: var_core_value_sig7C8C1 => U_(var_core_value_sig7C8C1, var_core_value_sigA9421),
            overlay: var_core_value_sig6F03("div", {
              "data-embed-id": var_core_value_sigA9421,
              "data-embed-floating-menu-popup": "true",
              className: "univer-box-border\x20univer-grid\x20univer-min-w-48\x20univer-gap-1\x20univer-rounded-lg\x20univer-border\x20univer-border-solid\x20univer-border-gray-200\x20univer-bg-gray-0\x20univer-p-1.5\x20univer-shadow-lg\x20dark:!univer-border-gray-700\x20dark:!univer-bg-gray-900",
              onPointerDown: V_,
              onMouseDown: V_,
              children: var_core_value_sigBBB2.map(var_core_value_sigF533 => var_core_value_sig6F03("button", {
                type: "button",
                className: var_core_value_sig522C("univer-relative univer-flex univer-h-8 univer-cursor-pointer univer-items-center univer-justify-center univer-rounded univer-border-none univer-bg-transparent univer-px-2 hover:univer-bg-gray-100 dark:hover:!univer-bg-gray-700", {
                  "univer-bg-gray-200\x20dark:!univer-bg-gray-600": var_core_value_sig8FCA === var_core_value_sigF533.value
                }),
                onClick: () => var_core_value_sigCAB8(var_core_value_sig18C6, var_core_value_sigF533.value),
                children: var_core_value_sig6F03(var_core_value_sig7626, {
                  className: "univer-fill-gray-900 dark:!univer-fill-gray-0",
                  type: var_core_value_sigF533.value
                })
              }, var_core_value_sigF533.value))
            }),
            children: var_core_value_sigA648(Z_, {
              title: "embed-ui.sheetsFloating.borderLine.borderSize",
              active: false,
              onClick: () => undefined,
              children: [var_core_value_sig6F03(var_core_value_sig7626, {
                className: "univer-fill-gray-900\x20dark:!univer-fill-gray-0",
                type: var_core_value_sig8FCA
              }), var_core_value_sig6F03(var_core_value_sig7990, {})]
            })
          })]
        })]
      }),
      children: var_core_value_sig6F03(N_, {
        title: var_core_value_sigF984.t("embed-ui.sheetsFloating.toolbar.border.main"),
        disabled: var_core_value_sig6C5C,
        open: var_core_value_sig336A,
        primary: var_core_value_sigCF68(var_core_value_sig8CA3(var_core_value_sig18C6), "univer-text-gray-900 dark:!univer-text-gray-0"),
        onPrimaryClick: () => {
          var_core_value_sigCAB8(), var_core_value_sigA892(false);
        }
      })
    });
  return var_core_value_sig6F03(jf, {
    title: var_core_value_sigF984.t("embed-ui.sheetsFloating.toolbar.border.main"),
    placement: "bottom",
    children: var_core_value_sig8B08
  });
}
function lv(var_core_value_sig630F) {
  let {
      embedId: var_core_value_sig3D22,
      menuItems: var_core_value_sigEF1E,
      open: var_core_value_sigFEAE,
      onOpenChange: var_core_value_sigB8BB,
      execute: var_core_value_sigF14E
    } = var_core_value_sig630F,
    var_core_value_sig460E = var_core_value_sigC85E(var_core_value_sig21CF),
    {
      hidden: var_core_value_sig40FF,
      disabled: var_core_value_sig62281
    } = I_(var_core_value_sigEF1E == null ? undefined : var_core_value_sigEF1E.root),
    var_core_value_sigD6C5 = [];
  return [{
    item: var_core_value_sigEF1E == null ? undefined : var_core_value_sigEF1E.all,
    icon: var_core_value_sig6F03(var_core_value_sig46D0, {})
  }, {
    item: var_core_value_sigEF1E == null ? undefined : var_core_value_sigEF1E.vertical,
    icon: var_core_value_sig6F03(var_core_value_sig4E8F, {})
  }, {
    item: var_core_value_sigEF1E == null ? undefined : var_core_value_sigEF1E.horizontal,
    icon: var_core_value_sig6F03(var_core_value_sigA9D4, {})
  }, {
    item: var_core_value_sigEF1E == null ? undefined : var_core_value_sigEF1E.unmerge,
    icon: var_core_value_sig6F03(var_core_value_sigBA1B, {})
  }].forEach(({
    item: var_core_value_sig018A,
    icon: var_core_value_sigECD9
  }) => {
    var_core_value_sig018A && var_core_value_sigD6C5.push({
      item: var_core_value_sig018A,
      icon: var_core_value_sigECD9
    });
  }), !(var_core_value_sigEF1E != null && var_core_value_sigEF1E.root) || var_core_value_sig40FF || !var_core_value_sigD6C5.length ? null : var_core_value_sig6F03(K_, {
    embedId: var_core_value_sig3D22,
    disabled: var_core_value_sig62281,
    title: "embed-ui.sheetsFloating.toolbar.mergeCell.main",
    triggerClassName: "univer-gap-0.5 univer-px-1",
    open: var_core_value_sigFEAE,
    onOpenChange: var_core_value_sigB8BB,
    trigger: var_core_value_sigA648(var_core_value_sigC0A2, {
      children: [var_core_value_sig6F03(var_core_value_sig46D0, {}), var_core_value_sig6F03(var_core_value_sig7990, {})]
    }),
    overlay: var_core_value_sig6F03(J_, {
      children: var_core_value_sigD6C5.map(({
        item: var_core_value_sig900B,
        icon: var_core_value_sig82F5
      }) => var_core_value_sig6F03(Y_, {
        icon: var_core_value_sig82F5,
        onClick: () => {
          var_core_value_sigF14E(var_core_value_sig900B), var_core_value_sigB8BB(false);
        },
        children: var_core_value_sig460E.t(L_(var_core_value_sig900B))
      }, var_core_value_sig900B.id))
    })
  });
}
function uv(var_core_value_sig3190) {
  let {
      embedId: var_core_value_sig9576,
      menuItem: var_core_value_sigF4F1,
      open: var_core_value_sigA027,
      onOpenChange: var_core_value_sig8831,
      execute: var_core_value_sig214C
    } = var_core_value_sig3190,
    var_core_value_sigB275 = var_core_value_sigC85E(var_core_value_sig21CF),
    {
      hidden: var_core_value_sig6C5B,
      disabled: var_core_value_sig7697
    } = I_(var_core_value_sigF4F1);
  if (!var_core_value_sigF4F1 || var_core_value_sig6C5B) return null;
  let var_core_value_sigAD17 = ev(var_core_value_sigF4F1),
    var_core_value_sigC97F = var_core_value_sigAD17.length ? var_core_value_sigAD17.map(var_core_value_sigB2AC => ({
      label: var_core_value_sigB275.t(R_(var_core_value_sigB2AC)),
      icon: z_(var_core_value_sigB2AC.value),
      commandId: var_core_value_sigB2AC.commandId ?? (var_core_value_sigF4F1 == null ? undefined : var_core_value_sigF4F1.commandId) ?? (var_core_value_sigF4F1 == null ? undefined : var_core_value_sigF4F1.id) ?? var_core_value_sig5970.id,
      params: var_core_value_sigB2AC.params ?? {
        value: var_core_value_sigB2AC.value
      }
    })) : [{
      label: var_core_value_sigB275.t("embed-ui.sheetsFloating.textWrap.clip"),
      icon: var_core_value_sig6F03(var_core_value_sig8073, {}),
      commandId: var_core_value_sig5970.id,
      params: {
        value: var_core_value_sigCBF7.CLIP
      }
    }, {
      label: var_core_value_sigB275.t("embed-ui.sheetsFloating.textWrap.overflow"),
      icon: var_core_value_sig6F03(var_core_value_sig57D7, {}),
      commandId: var_core_value_sig5970.id,
      params: {
        value: var_core_value_sigCBF7.OVERFLOW
      }
    }, {
      label: var_core_value_sigB275.t("embed-ui.sheetsFloating.textWrap.wrap"),
      icon: var_core_value_sig6F03(var_core_value_sig4785, {}),
      commandId: var_core_value_sig5970.id,
      params: {
        value: var_core_value_sigCBF7.WRAP
      }
    }];
  return var_core_value_sig6F03(K_, {
    embedId: var_core_value_sig9576,
    disabled: var_core_value_sig7697,
    title: "embed-ui.sheetsFloating.toolbar.textWrapMode.main",
    triggerClassName: "univer-gap-0.5 univer-px-1",
    open: var_core_value_sigA027,
    onOpenChange: var_core_value_sig8831,
    trigger: var_core_value_sigA648(var_core_value_sigC0A2, {
      children: [var_core_value_sig6F03(var_core_value_sig4785, {}), var_core_value_sig6F03(var_core_value_sig7990, {})]
    }),
    overlay: var_core_value_sig6F03(q_, {
      children: var_core_value_sigC97F.map(var_core_value_sigECB51 => {
        var var_core_value_sigA422;
        return var_core_value_sig6F03(X_, {
          icon: var_core_value_sigECB51.icon,
          onClick: () => {
            var_core_value_sig214C(var_core_value_sigECB51.commandId, var_core_value_sigECB51.params), var_core_value_sig8831(false);
          },
          children: var_core_value_sigECB51.label
        }, var_core_value_sigECB51.commandId + "-" + String(((var_core_value_sigA422 = var_core_value_sigECB51.params) == null ? undefined : var_core_value_sigA422.value) ?? var_core_value_sigECB51.label));
      })
    })
  });
}
const dv = {
    formatPainter: var_core_value_sig69FE.id,
    numberFormat: "sheet.operation.open.numfmt.panel",
    fontFamily: var_core_value_sigEB43.id,
    fontSize: var_core_value_sigF61F.id,
    bold: var_core_value_sig0FD3.id,
    textColor: var_core_value_sig5C47.id,
    backgroundColor: var_core_value_sig233C.id,
    borderComposite: var_core_value_sig905A.id,
    horizontalAlign: var_core_value_sigBD9A.id,
    verticalAlign: var_core_value_sig7168.id,
    wrap: var_core_value_sig5970.id,
    filter: "sheet.command.smart-toggle-filter"
  },
  fv = {
    root: var_core_value_sig2FA0.id,
    all: var_core_value_sigAB9A.id,
    vertical: var_core_value_sigC4C4.id,
    horizontal: var_core_value_sig33D6.id,
    unmerge: var_core_value_sig5D17.id
  };
function pv(var_core_value_sig3A58) {
  let var_core_value_sig0F071 = {},
    var_core_value_sig51FC = var_core_value_sigDA36 => {
      let var_core_value_sig2A70 = var_core_value_sig3A58.find(var_core_value_sig1BC4 => {
        let var_core_value_sig9EAB = var_core_value_sig1BC4.item;
        return var_core_value_sig1BC4.key === var_core_value_sigDA36 || (var_core_value_sig9EAB == null ? undefined : var_core_value_sig9EAB.id) === var_core_value_sigDA36 || (var_core_value_sig9EAB == null ? undefined : var_core_value_sig9EAB.commandId) === var_core_value_sigDA36;
      });
      return var_core_value_sig2A70 == null ? undefined : var_core_value_sig2A70.item;
    };
  Object.keys(dv).forEach(var_core_value_sigA9DF => {
    var_core_value_sig0F071[var_core_value_sigA9DF] = var_core_value_sig51FC(dv[var_core_value_sigA9DF]);
  });
  let var_core_value_sig809D = Object.entries(fv).reduce((var_core_value_sigBC94, [var_core_value_sig018B, var_core_value_sig6F36]) => {
    let var_core_value_sigF1B5 = var_core_value_sig51FC(var_core_value_sig6F36);
    return var_core_value_sigF1B5 && (var_core_value_sigBC94[var_core_value_sig018B] = var_core_value_sigF1B5), var_core_value_sigBC94;
  }, {});
  return _v(var_core_value_sig809D) && (var_core_value_sig0F071.merge = var_core_value_sig809D), var_core_value_sig0F071.deleteBlock = true, var_core_value_sig0F071;
}
const mv = [{
  items: ["formatPainter"]
}, {
  dividerBefore: "divider-format-tools",
  items: ["numberFormat"]
}, {
  dividerBefore: "divider-format",
  items: ["fontFamily", "fontSize", "bold"]
}, {
  dividerBefore: "divider-font",
  items: ["textColor", "backgroundColor", "borderComposite"]
}, {
  dividerBefore: "divider-border",
  items: ["merge", "horizontalAlign", "verticalAlign", "wrap"]
}, {
  dividerBefore: "divider-layout",
  items: ["filter"]
}, {
  dividerBefore: "divider-block",
  items: ["deleteBlock"]
}];
function hv(var_core_value_sigA7DB1) {
  let var_core_value_sig7F1A = [];
  return mv.forEach(var_core_value_sig51CE => {
    let var_core_value_sigB5C9 = var_core_value_sig51CE.items["filter"](var_core_value_sigA5C3 => gv(var_core_value_sigA7DB1, var_core_value_sigA5C3)).map(var_core_value_sig3A1E => ({
      id: var_core_value_sig3A1E,
      type: var_core_value_sig3A1E === "formatPainter" || var_core_value_sig3A1E === "bold" || var_core_value_sig3A1E === "filter" || var_core_value_sig3A1E === "deleteBlock" ? "button" : "dropdown"
    }));
    var_core_value_sigB5C9.length && (var_core_value_sig7F1A.length && var_core_value_sig51CE.dividerBefore && var_core_value_sig7F1A.push({
      id: var_core_value_sig51CE.dividerBefore,
      type: "divider"
    }), var_core_value_sig7F1A.push(...var_core_value_sigB5C9));
  }), var_core_value_sig7F1A;
}
function gv(var_core_value_sig0B5B, var_core_value_sig7F64) {
  return !!var_core_value_sig0B5B[var_core_value_sig7F64];
}
function _v(var_core_value_sig8CF1) {
  return Object.values(var_core_value_sig8CF1).some(Boolean);
}
function vv(var_core_value_sigAE62, var_core_value_sigDE1D) {
  if (var_core_value_sigAE62) return {
    commandId: var_core_value_sigAE62.commandId ?? var_core_value_sigAE62.id,
    params: var_core_value_sigDE1D ?? (typeof var_core_value_sigAE62.params == "function" ? var_core_value_sigAE62.params() : var_core_value_sigAE62.params)
  };
}
function yv() {
  return Wh({
    childType: var_core_value_sigC0F3.UNIVER_SHEET,
    mount: bv
  });
}
function bv(var_core_value_sigC013) {
  let {
      menu: var_core_value_sigD49D,
      portalContainer: var_core_value_sig02C5
    } = Vh(var_core_value_sigC013),
    var_core_value_sig162D = Sl(var_core_value_sigD49D);
  return var_core_value_sig162D.render(var_core_value_sigBCAF(fl, {
    injector: var_core_value_sigC013.runtimeScope["injector"],
    mountContainer: var_core_value_sig02C5,
    embedId: var_core_value_sigC013.embedId
  }, var_core_value_sigBCAF(Sv, {
    hostUnitId: var_core_value_sigC013.hostUnitId,
    embedId: var_core_value_sigC013.embedId,
    childUnitId: var_core_value_sigC013.childUnitId,
    entry: var_core_value_sigC013.descriptor["entry"],
    fullscreen: !!var_core_value_sigC013.renderScope["fullscreen"],
    usesDomFloatingStage: xv(var_core_value_sigC013.descriptor["entry"]),
    renderScopeActive$: var_core_value_sigC013.renderScope["active$"]
  }))), var_core_value_sig9BBC(() => {
    Cl(var_core_value_sig162D), globalThis.setTimeout(() => var_core_value_sigD49D.remove(), 0);
  });
}
function xv(var_core_value_sigB4CA) {
  return true;
}
function Sv(var_core_value_sig0436) {
  let {
      hostUnitId: var_core_value_sig07F6,
      embedId: var_core_value_sigE78D,
      childUnitId: var_core_value_sig695E,
      entry: var_core_value_sigB3A3,
      fullscreen: var_core_value_sig3C83,
      usesDomFloatingStage: var_core_value_sig0BC8,
      renderScopeActive$: var_core_value_sigAE68
    } = var_core_value_sig0436,
    var_core_value_sigE2E61 = var_core_value_sigC85E(var_core_value_sig21CF),
    var_core_value_sig1244 = var_core_value_sigC85E(var_core_value_sigDFF6),
    var_core_value_sigBDAA = var_core_value_sigC85E(var_core_value_sig5DF8),
    var_core_value_sig3872 = var_core_value_sigC85E(var_core_value_sigB2B1),
    var_core_value_sig39A2 = var_core_value_sigC85E(var_core_value_sig2FB6),
    var_core_value_sig40BA = var_core_value_sigC85E(xs),
    var_core_value_sig8223 = Eu({
      embedId: var_core_value_sigE78D,
      active: var_core_value_sig146E(() => var_core_value_sig40BA.active$, var_core_value_sig40BA.getActive(), false, [var_core_value_sig40BA]),
      fullscreen: var_core_value_sig3C83,
      usesDomFloatingStage: var_core_value_sig0BC8,
      renderScopeActive: var_core_value_sig146E(() => var_core_value_sigAE68, false, false, [var_core_value_sigAE68])
    }) === "stage2",
    [var_core_value_sig5B74, var_core_value_sig931B] = var_core_value_sigC4B6(null),
    var_core_value_sigACB7 = var_core_value_sigFEE6 => ({
      open: var_core_value_sig5B74 === var_core_value_sigFEE6,
      onOpenChange: var_core_value_sigDC92 => var_core_value_sig931B(var_core_value_sigDC92 ? var_core_value_sigFEE6 : null)
    });
  var_core_value_sigB0BB(() => {
    if (!var_core_value_sig5B74) return;
    let var_core_value_sig8700 = var_core_value_sig3515 => {
      H_(var_core_value_sig3515.target, var_core_value_sigE78D) || var_core_value_sig931B(null);
    };
    return document.addEventListener("pointerdown", var_core_value_sig8700, true), () => {
      document.removeEventListener("pointerdown", var_core_value_sig8700, true);
    };
  }, [var_core_value_sigE78D, var_core_value_sig5B74]);
  let var_core_value_sig0089 = var_core_value_sig146E(() => var_core_value_sig3872.menuChanged$["pipe"](var_core_value_sig5B63(() => pv(var_core_value_sig3872.getFlatMenuByPositionKey(var_core_value_sig5DCB.RIBBON)))), pv(var_core_value_sig3872.getFlatMenuByPositionKey(var_core_value_sig5DCB.RIBBON)), false, [var_core_value_sig3872]),
    var_core_value_sig751B = var_core_value_sigF570(() => new Set(hv(var_core_value_sig0089).map(var_core_value_sigC2A0 => var_core_value_sigC2A0.id)), [var_core_value_sig0089]),
    var_core_value_sigBC40 = () => {
      var_core_value_sig40BA.activate({
        hostUnitId: var_core_value_sig07F6,
        embedId: var_core_value_sigE78D,
        childUnitId: var_core_value_sig695E
      }, "stage2"), var_core_value_sigBDAA.setCurrentUnitForType(var_core_value_sig695E);
    },
    var_core_value_sig7560 = async (var_core_value_sig723F2, var_core_value_sig70D4) => {
      var_core_value_sigBC40(), await var_core_value_sig1244.executeCommand(var_core_value_sig723F2, var_core_value_sig70D4);
    },
    var_core_value_sig9CA9 = async (var_core_value_sig838B, var_core_value_sigE6AD) => {
      let var_core_value_sigC4E91 = vv(var_core_value_sig838B, var_core_value_sigE6AD);
      var_core_value_sigC4E91 && (await var_core_value_sig7560(var_core_value_sigC4E91.commandId, var_core_value_sigC4E91.params));
    },
    var_core_value_sig2A83 = () => {
      let var_core_value_sigE39E = var_core_value_sigBDAA.getUnit(var_core_value_sig695E, var_core_value_sigC0F3.UNIVER_SHEET),
        var_core_value_sig6818 = var_core_value_sigE39E == null ? undefined : var_core_value_sigE39E.getActiveSheet();
      return !var_core_value_sigE39E || !var_core_value_sig6818 ? null : {
        workbook: var_core_value_sigE39E,
        worksheet: var_core_value_sig6818,
        unitId: var_core_value_sigE39E.getUnitId(),
        subUnitId: var_core_value_sig6818.getSheetId()
      };
    },
    var_core_value_sig6CD5 = () => {
      var var_core_value_sig504F;
      return ((var_core_value_sig504F = var_core_value_sig39A2.getCurrentSelections()) == null ? undefined : var_core_value_sig504F.map(var_core_value_sig7C65 => var_core_value_sig7C65.range)) ?? [];
    },
    var_core_value_sig7A13 = async (var_core_value_sigA21D, var_core_value_sigB754, var_core_value_sig2B87 = var_core_value_sigB83E.THIN, var_core_value_sig2FFF = "#000000") => {
      let var_core_value_sig82FF = var_core_value_sig2A83(),
        var_core_value_sig6C72 = var_core_value_sig6CD5();
      !var_core_value_sig82FF || !var_core_value_sig6C72.length || (await var_core_value_sig9CA9(var_core_value_sigA21D, {
        unitId: var_core_value_sig82FF.unitId,
        subUnitId: var_core_value_sig82FF.subUnitId,
        ranges: var_core_value_sig6C72,
        value: {
          type: var_core_value_sigB754,
          color: var_core_value_sig2FFF,
          style: var_core_value_sig2B87,
          activeBorderType: true
        }
      }));
    },
    var_core_value_sig6BC8 = async () => {
      await var_core_value_sig1244.executeCommand(var_core_value_sig793D.id, {
        hostUnitId: var_core_value_sig07F6,
        embedId: var_core_value_sigE78D
      });
    };
  return var_core_value_sigA648("div", {
    className: var_core_value_sig522C("univer-pointer-events-auto univer-box-border univer-inline-flex univer-h-10 univer-items-center univer-gap-0 univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-1 univer-text-sm univer-text-gray-900 univer-shadow-lg dark:!univer-border-gray-600 dark:!univer-bg-gray-900 dark:!univer-text-gray-0 [&_svg]:univer-size-4 [&_svg]:univer-shrink-0", {
      "univer-hidden": !var_core_value_sig8223,
      "univer-static\x20univer-mx-auto\x20univer-my-1.5\x20univer-translate-x-0": var_core_value_sig3C83,
      "univer-absolute\x20univer-left-1/2\x20univer-z-[30]\x20univer-max-w-[min(calc(100vw-72px),880px)]\x20-univer-translate-x-1/2\x20univer-overflow-x-auto\x20univer-overflow-y-visible\x20[scrollbar-width:none]\x20[&::-webkit-scrollbar]:univer-hidden": !var_core_value_sig3C83,
      "-univer-top-9": !var_core_value_sig3C83 && var_core_value_sigB3A3 !== "docs-custom-block",
      "-univer-top-[52px]": !var_core_value_sig3C83 && var_core_value_sigB3A3 === "docs-custom-block"
    }),
    "data-u-comp": "sheet-embed-floating-menu",
    "data-embed-floating-menu": "true",
    "data-embed-id": var_core_value_sigE78D,
    "data-embed-float-stage": var_core_value_sig8223 ? "stage2" : "inactive",
    onPointerDown: var_core_value_sig50E5 => var_core_value_sig50E5.stopPropagation(),
    onMouseDown: V_,
    children: [var_core_value_sig751B.has("formatPainter") && var_core_value_sig6F03(F_, {
      item: var_core_value_sig0089.formatPainter,
      title: "embed-ui.sheetsFloating.toolbar.formatPainter",
      onClick: async () => var_core_value_sig9CA9(var_core_value_sig0089.formatPainter),
      children: var_core_value_sig6F03(var_core_value_sigE1C4, {})
    }), var_core_value_sig751B.has("divider-format-tools") && var_core_value_sig6F03(var_core_value_sig5C3C, {
      className: "univer-mx-1 !univer-h-4",
      orientation: "vertical"
    }), var_core_value_sig751B.has("numberFormat") && var_core_value_sig6F03(tv, {
      menuItem: var_core_value_sig0089.numberFormat,
      onClick: async () => var_core_value_sig9CA9(var_core_value_sig0089.numberFormat)
    }), var_core_value_sig751B.has("divider-format") && var_core_value_sig6F03(var_core_value_sig5C3C, {
      className: "univer-mx-1 !univer-h-4",
      orientation: "vertical"
    }), var_core_value_sig751B.has("fontFamily") && var_core_value_sig6F03(nv, {
      embedId: var_core_value_sigE78D,
      menuItem: var_core_value_sig0089.fontFamily,
      title: "embed-ui.sheetsFloating.toolbar.font",
      ...var_core_value_sigACB7("fontFamily"),
      onSelect: async var_core_value_sig6E14 => var_core_value_sig9CA9(var_core_value_sig0089.fontFamily, {
        value: var_core_value_sig6E14
      })
    }), var_core_value_sig751B.has("fontSize") && var_core_value_sig6F03(rv, {
      embedId: var_core_value_sigE78D,
      menuItem: var_core_value_sig0089.fontSize,
      title: "embed-ui.sheetsFloating.toolbar.fontSize",
      ...var_core_value_sigACB7("fontSize"),
      onSelect: async var_core_value_sig4D3F => var_core_value_sig9CA9(var_core_value_sig0089.fontSize, {
        value: Number(var_core_value_sig4D3F)
      })
    }), var_core_value_sig751B.has("bold") && var_core_value_sig6F03(F_, {
      item: var_core_value_sig0089.bold,
      title: "embed-ui.sheetsFloating.toolbar.bold",
      onClick: async () => var_core_value_sig9CA9(var_core_value_sig0089.bold),
      children: var_core_value_sig6F03(var_core_value_sigEED2, {})
    }), var_core_value_sig751B.has("divider-font") && var_core_value_sig6F03(var_core_value_sig5C3C, {
      className: "univer-mx-1 !univer-h-4",
      orientation: "vertical"
    }), var_core_value_sig751B.has("textColor") && var_core_value_sig6F03(sv, {
      embedId: var_core_value_sigE78D,
      menuItem: var_core_value_sig0089.textColor,
      title: "embed-ui.sheetsFloating.toolbar.textColor.main",
      icon: var_core_value_sig6F03(var_core_value_sig3A0D, {
        className: "univer-fill-primary-600"
      }),
      defaultColor: "#111827",
      ...var_core_value_sigACB7("textColor"),
      onChange: async var_core_value_sigBE4F => var_core_value_sig9CA9(var_core_value_sig0089.textColor, {
        value: var_core_value_sigBE4F
      }),
      onReset: async () => var_core_value_sig7560(var_core_value_sig8240.id)
    }), var_core_value_sig751B.has("backgroundColor") && var_core_value_sig6F03(sv, {
      embedId: var_core_value_sigE78D,
      menuItem: var_core_value_sig0089.backgroundColor,
      title: "embed-ui.sheetsFloating.toolbar.fillColor.main",
      icon: var_core_value_sig6F03(var_core_value_sig9192, {
        className: "univer-fill-primary-600"
      }),
      defaultColor: "#ffffff",
      ...var_core_value_sigACB7("backgroundColor"),
      onChange: async var_core_value_sig8DF2 => var_core_value_sig9CA9(var_core_value_sig0089.backgroundColor, {
        value: var_core_value_sig8DF2
      }),
      onReset: async () => var_core_value_sig7560(var_core_value_sig30DE.id)
    }), var_core_value_sig751B.has("borderComposite") && var_core_value_sig6F03(cv, {
      embedId: var_core_value_sigE78D,
      menuItem: var_core_value_sig0089.borderComposite,
      ...var_core_value_sigACB7("borderComposite"),
      onSelect: async (var_core_value_sig666F, var_core_value_sig2BE5, var_core_value_sig79D6) => var_core_value_sig7A13(var_core_value_sig0089.borderComposite, var_core_value_sig666F, var_core_value_sig2BE5, var_core_value_sig79D6)
    }), var_core_value_sig751B.has("divider-border") && var_core_value_sig6F03(var_core_value_sig5C3C, {
      className: "univer-mx-1\x20!univer-h-4",
      orientation: "vertical"
    }), var_core_value_sig751B.has("merge") && var_core_value_sig6F03(lv, {
      embedId: var_core_value_sigE78D,
      menuItems: var_core_value_sig0089.merge,
      ...var_core_value_sigACB7("merge"),
      execute: var_core_value_sig9CA9
    }), var_core_value_sig751B.has("horizontalAlign") && var_core_value_sig6F03(iv, {
      embedId: var_core_value_sigE78D,
      menuItem: var_core_value_sig0089.horizontalAlign,
      ...var_core_value_sigACB7("horizontalAlign"),
      execute: var_core_value_sig9CA9
    }), var_core_value_sig751B.has("verticalAlign") && var_core_value_sig6F03(av, {
      embedId: var_core_value_sigE78D,
      menuItem: var_core_value_sig0089.verticalAlign,
      ...var_core_value_sigACB7("verticalAlign"),
      execute: var_core_value_sig9CA9
    }), var_core_value_sig751B.has("wrap") && var_core_value_sig6F03(uv, {
      embedId: var_core_value_sigE78D,
      menuItem: var_core_value_sig0089.wrap,
      ...var_core_value_sigACB7("wrap"),
      execute: var_core_value_sig7560
    }), var_core_value_sig751B.has("divider-layout") && var_core_value_sig6F03(var_core_value_sig5C3C, {
      className: "univer-mx-1 !univer-h-4",
      orientation: "vertical"
    }), var_core_value_sig751B.has("filter") && var_core_value_sig6F03(F_, {
      item: var_core_value_sig0089.filter,
      title: "embed-ui.sheetsFloating.toolbar.filter",
      onClick: async () => var_core_value_sig9CA9(var_core_value_sig0089.filter),
      children: var_core_value_sig6F03(var_core_value_sigBAE5, {})
    }), var_core_value_sig751B.has("divider-block") && var_core_value_sig6F03(var_core_value_sig5C3C, {
      className: "univer-mx-1\x20!univer-h-4",
      orientation: "vertical"
    }), !var_core_value_sig3C83 && var_core_value_sig6F03(Mf, {
      hostUnitId: var_core_value_sig07F6,
      embedId: var_core_value_sigE78D,
      variant: "menu"
    }), var_core_value_sig751B.has("deleteBlock") && var_core_value_sig6F03(P_, {
      title: var_core_value_sigE2E61.t("embed-ui.deleteBlock"),
      className: "univer-text-red-500\x20hover:univer-text-red-600",
      onClick: var_core_value_sig6BC8,
      children: var_core_value_sig6F03(var_core_value_sig4C1E, {})
    })]
  });
}
const Cv = new WeakMap(),
  wv = new WeakSet();
function Tv(var_core_value_sig9B6E) {
  zm(var_core_value_sig9B6E, "sheets-ui.embed", Ev);
}
function Ev(var_core_value_sigD2F9) {
  let var_core_value_sig1E09 = var_core_value_sigD2F9.get(Rc),
    var_core_value_sig77CE = var_core_value_sigD2F9.get(Ic),
    var_core_value_sig85D2 = var_core_value_sigD2F9.get(bs),
    var_core_value_sigA9CB = var_core_value_sigD2F9.get(Lc),
    var_core_value_sig779E = var_core_value_sigD2F9.get(cd),
    var_core_value_sig7098 = var_core_value_sigD2F9.get(Bf),
    var_core_value_sigD593 = var_core_value_sigD2F9.get(Cd);
  S_(var_core_value_sigD2F9), var_core_value_sigD2F9.has(var_core_value_sig1F91) || var_core_value_sigD2F9.add([var_core_value_sig1F91, {
    useFactory: () => var_core_value_sigD2F9.get(Ss)
  }]), var_core_value_sigD2F9.has(var_core_value_sig0960) || var_core_value_sigD2F9.add([var_core_value_sig0960, {
    useFactory: () => Dv({
      embedModelService: var_core_value_sigD2F9.get(var_core_value_sig91F2),
      mountService: var_core_value_sigD2F9.get(cl),
      activationService: var_core_value_sigD2F9.get(dl),
      restoreService: var_core_value_sigD2F9.get(ud)
    })
  }]), [__(), v_()].forEach(var_core_value_sig6476 => {
    var_core_value_sig1E09.get(var_core_value_sig6476.hostType, var_core_value_sig6476.entry) || var_core_value_sig1E09.register(var_core_value_sig6476);
  });
  let var_core_value_sigF45C = w_(var_core_value_sigD2F9.get(var_core_value_sigDFF6));
  var_core_value_sig77CE.get(var_core_value_sigF45C.childType) || var_core_value_sig77CE.register(var_core_value_sigF45C);
  let var_core_value_sigCAD8 = C_();
  var_core_value_sig85D2.get(var_core_value_sigCAD8.childType) || var_core_value_sig85D2.register(var_core_value_sigCAD8), yv().forEach(var_core_value_sigAFF3 => {
    var_core_value_sigA9CB.get(var_core_value_sigAFF3.hostType, var_core_value_sigAFF3.entry, var_core_value_sigAFF3.childType) || var_core_value_sigA9CB.register(var_core_value_sigAFF3);
  }), var_core_value_sig779E.registerProvider(Wf(var_core_value_sigD2F9, {
    childType: var_core_value_sigC0F3.UNIVER_SHEET,
    renderManagerService: var_core_value_sigE391
  })), var_core_value_sig7098.get(var_core_value_sigC0F3.UNIVER_SHEET) || var_core_value_sig7098.register(s_()), var_core_value_sigD593.get(var_core_value_sigC0F3.UNIVER_SHEET) || var_core_value_sigD593.register(x_(var_core_value_sigD2F9)), Mv({
    injector: var_core_value_sigD2F9,
    previewService: var_core_value_sig779E
  });
}
function Dv(var_core_value_sigCADC) {
  return {
    getSheetTabChildType: ({
      hostUnitId: var_core_value_sig866B,
      hostAnchorId: var_core_value_sig40A0,
      embedId: var_core_value_sig86F0
    }) => {
      let var_core_value_sigE4B4 = var_core_value_sigCADC.embedModelService["getDescriptor"](var_core_value_sig866B, var_core_value_sig86F0);
      return (var_core_value_sigE4B4 == null ? undefined : var_core_value_sigE4B4.hostAnchorId) === var_core_value_sig40A0 ? var_core_value_sigE4B4.childType : undefined;
    },
    mountSheetTab: ({
      hostUnitId: var_core_value_sig1D8C,
      hostAnchorId: var_core_value_sigED34,
      embedId: var_core_value_sig74CE
    }) => {
      let var_core_value_sig7FB9 = var_core_value_sigCADC.embedModelService["getDescriptor"](var_core_value_sig1D8C, var_core_value_sig74CE);
      if (!var_core_value_sig7FB9 || var_core_value_sig7FB9.hostAnchorId !== var_core_value_sigED34) return;
      let var_core_value_sigAE9F = false,
        var_core_value_sigFF68 = false,
        var_core_value_sigC604;
      return var_core_value_sigCADC.restoreService["materializeDescriptor"]({
        descriptor: var_core_value_sig7FB9
      }).then(var_core_value_sig7F05 => {
        var_core_value_sigAE9F || (var_core_value_sigC604 == null || var_core_value_sigC604.remove(), var_core_value_sigC604 = undefined, var_core_value_sigCADC.mountService["mount"](var_core_value_sig7F05), var_core_value_sigCADC.activationService["activateTab"](var_core_value_sig7F05), var_core_value_sigFF68 = true);
      }).catch(var_core_value_sig41F3 => {
        var_core_value_sigAE9F || (var_core_value_sigC604 = Ov(var_core_value_sigED34, var_core_value_sig41F3));
      }), var_core_value_sig9BBC(() => {
        var_core_value_sigAE9F = true, var_core_value_sigC604 == null || var_core_value_sigC604.remove(), var_core_value_sigCADC.activationService["clearTab"](var_core_value_sig74CE), var_core_value_sigFF68 && var_core_value_sigCADC.mountService["unmount"](var_core_value_sig74CE);
      });
    },
    clearTab: var_core_value_sigE56F => {
      var_core_value_sigCADC.activationService["clearTab"](var_core_value_sigE56F);
    }
  };
}
function Ov(var_core_value_sigDF94, var_core_value_sig879C) {
  let var_core_value_sig02FF = kv(var_core_value_sigDF94);
  if (!var_core_value_sig02FF) return;
  let var_core_value_sig6977 = document.createElement("div");
  return var_core_value_sig6977.dataset["embedSheetsSheetTabError"] = "true", var_core_value_sig6977.style["padding"] = "12px", var_core_value_sig6977.style["color"] = "#b91c1c", var_core_value_sig6977.style["fontSize"] = "13px", var_core_value_sig6977.textContent = var_core_value_sig879C instanceof Error && var_core_value_sig879C.message ? var_core_value_sig879C.message : "Failed to load embedded sheet.", var_core_value_sig02FF.replaceChildren(var_core_value_sig6977), var_core_value_sig6977;
}
function kv(var_core_value_sig909A) {
  return document.querySelector("[data-embed-sheets-sheet-tab-host=\x22" + Av(var_core_value_sig909A) + "\x22]");
}
function Av(var_core_value_sig1E3E) {
  return var_core_value_sig1E3E.replace(/\\/g, "\x5c\x5c").replace(/"/g, "\x5c\x22");
}
function jv(var_core_value_sig77FA) {
  let var_core_value_sigA90A = new var_core_value_sig8C99(),
    var_core_value_sigB3DF = 0,
    var_core_value_sigB4C4;
  if (var_core_value_sigA90A.add(var_core_value_sig77FA.previewService["previewUpdated$"].subscribe(var_core_value_sig6D7D => {
    if (typeof var_core_value_sig6D7D.image != "string") return;
    let var_core_value_sig335B = var_core_value_sig77FA.embedModelService["getActiveDescriptorsByChildUnit"](var_core_value_sig6D7D.childUnitId).find(var_core_value_sigF455 => var_core_value_sigF455.embedId === var_core_value_sig6D7D.embedId && var_core_value_sigF455.entry === "sheets-floating-object");
    var_core_value_sig335B != null && var_core_value_sig335B.hostAnchorId && var_core_value_sig77FA.canvasFloatDomPreviewService["setPreview"]({
      id: var_core_value_sig335B.hostAnchorId,
      image: var_core_value_sig6D7D.image,
      updatedAt: var_core_value_sig6D7D.updatedAt
    });
  })), !var_core_value_sig77FA.canvasFloatDomPreviewService["previewRequested$"]) return var_core_value_sigA90A;
  let var_core_value_sig866D = () => {
      var_core_value_sigB4C4 || var_core_value_sigB3DF >= 240 || (var_core_value_sigB4C4 = globalThis.setTimeout(() => {
        var_core_value_sigB4C4 = undefined, var_core_value_sigB3DF += 1, var_core_value_sig0A151();
      }, 250));
    },
    var_core_value_sigF9DC = var_core_value_sig61E2 => {
      let var_core_value_sig974B = var_core_value_sig61E2.data;
      if (!var_core_value_sig974B || typeof var_core_value_sig974B != "object") return true;
      let var_core_value_sigB89A = Fv(var_core_value_sig974B, "embedId"),
        var_core_value_sig3B83 = Fv(var_core_value_sig974B, "hostUnitId");
      if (!var_core_value_sigB89A || !var_core_value_sig3B83) return true;
      let var_core_value_sig3092 = var_core_value_sig77FA.embedModelService["getDescriptor"](var_core_value_sig3B83, var_core_value_sigB89A);
      return !var_core_value_sig3092 || var_core_value_sig3092.entry !== "sheets-floating-object" || !var_core_value_sig3092.childUnitId || var_core_value_sig3092.childType == null ? false : (var_core_value_sig77FA.previewService["requestPreview"]({
        descriptor: var_core_value_sig3092,
        childUnitId: var_core_value_sig3092.childUnitId,
        childType: var_core_value_sig3092.childType,
        width: var_core_value_sig61E2.width,
        height: var_core_value_sig61E2.height,
        dpr: typeof window > "u" ? 1 : window.devicePixelRatio || 1,
        reason: "initial"
      }), true);
    },
    var_core_value_sig0A151 = () => {
      var var_core_value_sigBFDA, var_core_value_sig995C;
      let var_core_value_sig364B = false;
      (var_core_value_sigBFDA = (var_core_value_sig995C = var_core_value_sig77FA.canvasFloatDomPreviewService).getPendingRequests) == null || var_core_value_sigBFDA.call(var_core_value_sig995C).forEach(var_core_value_sig6E78 => {
        var_core_value_sigF9DC(var_core_value_sig6E78) || (var_core_value_sig364B = true);
      }), var_core_value_sig364B && var_core_value_sig866D();
    };
  return var_core_value_sig0A151(), var_core_value_sigA90A.add(var_core_value_sig77FA.canvasFloatDomPreviewService["previewRequested$"].subscribe(var_core_value_sig2C9F => {
    var_core_value_sigF9DC(var_core_value_sig2C9F) || var_core_value_sig866D();
  })), var_core_value_sigA90A.add(() => {
    var_core_value_sigB4C4 && globalThis.clearTimeout(var_core_value_sigB4C4);
  }), var_core_value_sigA90A;
}
function Mv(var_core_value_sig128C) {
  let var_core_value_sig39D0 = var_core_value_sig128C.injector,
    var_core_value_sig9106 = Cv.get(var_core_value_sig39D0);
  if (var_core_value_sig9106) return var_core_value_sig9106;
  let var_core_value_sigF98C = Pv(var_core_value_sig128C.injector);
  if (var_core_value_sigF98C !== null) {
    if (var_core_value_sigF98C) {
      let var_core_value_sigB3EE1 = jv({
        previewService: var_core_value_sig128C.previewService,
        embedModelService: var_core_value_sigF98C.embedModelService,
        canvasFloatDomPreviewService: var_core_value_sigF98C.canvasFloatDomPreviewService
      });
      return Cv.set(var_core_value_sig39D0, var_core_value_sigB3EE1), var_core_value_sigB3EE1;
    }
    var_core_value_sig128C.retry === false || wv.has(var_core_value_sig39D0) || (wv.add(var_core_value_sig39D0), Nv(var_core_value_sig128C, 0));
  }
}
function Nv(var_core_value_sigAE02, var_core_value_sigA8DD) {
  let var_core_value_sigC35C = var_core_value_sigAE02.maxRetries ?? 240,
    var_core_value_sig349E = var_core_value_sigAE02.retryDelay ?? 250,
    var_core_value_sigF0BF = var_core_value_sigAE02.injector;
  globalThis.setTimeout(() => {
    if (Mv({
      ...var_core_value_sigAE02,
      retry: false
    }) || var_core_value_sigA8DD + 1 >= var_core_value_sigC35C) {
      wv.delete(var_core_value_sigF0BF);
      return;
    }
    Nv(var_core_value_sigAE02, var_core_value_sigA8DD + 1);
  }, var_core_value_sig349E);
}
function Pv(var_core_value_sig3A72) {
  try {
    return !var_core_value_sig3A72.has(var_core_value_sig1724) || !var_core_value_sig3A72.has(var_core_value_sig91F2) ? undefined : {
      embedModelService: var_core_value_sig3A72.get(var_core_value_sig91F2),
      canvasFloatDomPreviewService: var_core_value_sig3A72.get(var_core_value_sig1724)
    };
  } catch {
    return null;
  }
}
function Fv(var_core_value_sig5E6D1, var_core_value_sig4EC9) {
  let var_core_value_sig0AE7 = var_core_value_sig5E6D1[var_core_value_sig4EC9];
  return typeof var_core_value_sig0AE7 == "string" ? var_core_value_sig0AE7 : undefined;
}
function Iv() {
  return Um({
    childType: var_core_value_sigC0F3.UNIVER_SLIDE,
    productName: "Slides"
  });
}
function Lv(var_core_value_sigA17F) {
  var var_core_value_sigE8A41;
  return ((var_core_value_sigE8A41 = var_core_value_sigA17F.active) == null ? undefined : var_core_value_sigE8A41.embedId) === var_core_value_sigA17F.embedId && var_core_value_sigA17F.active["stage"] !== "inactive" ? var_core_value_sigA17F.active["stage"] ?? "stage1" : Eu({
    embedId: var_core_value_sigA17F.embedId,
    active: var_core_value_sigA17F.active,
    fullscreen: var_core_value_sigA17F.fullscreen,
    usesDomFloatingStage: var_core_value_sigA17F.usesDomFloatingStage ?? true,
    renderScopeActive: var_core_value_sigA17F.renderScopeActive ?? false
  });
}
function Rv(var_core_value_sig085E) {
  var var_core_value_sig8537;
  let var_core_value_sig53B4 = var_core_value_sigC85E(var_core_value_sig21CF),
    var_core_value_sig29A4 = var_core_value_sigC85E(var_core_value_sig8A66),
    var_core_value_sig7976 = var_core_value_sigC85E(var_core_value_sigA873),
    var_core_value_sig47851 = var_core_value_sigF570(() => var_core_value_sig29A4.createInstance(var_core_value_sig86D1), [var_core_value_sig29A4]),
    var_core_value_sig6339 = var_core_value_sig146E(var_core_value_sig7976.darkMode$) ?? var_core_value_sig7976.darkMode,
    {
      hostUnitId: var_core_value_sigB825,
      embedId: var_core_value_sig6236,
      childUnitId: var_core_value_sigD72F,
      slideModel: var_core_value_sigA282,
      floatingActiveService: var_core_value_sig5C0A,
      commandService: var_core_value_sig62F6,
      instanceService: var_core_value_sig90D9,
      fullscreen: var_core_value_sig7D06,
      usesDomFloatingStage: var_core_value_sigC7AE,
      renderScopeActive$: var_core_value_sig6802,
      collisionBoundary: var_core_value_sigA857
    } = var_core_value_sig085E,
    var_core_value_sigE32F = var_core_value_sig146E(() => var_core_value_sig5C0A.active$, var_core_value_sig5C0A.getActive(), false, [var_core_value_sig5C0A]),
    var_core_value_sig6DBD = var_core_value_sig146E(var_core_value_sig6802, false);
  var_core_value_sig146E(var_core_value_sigA282 === null ? null : () => var_core_value_sigA282.pageManager["slideOrder$"], [], false, [var_core_value_sigA282]);
  let var_core_value_sigBDE9 = var_core_value_sig146E(var_core_value_sigA282 === null ? null : () => var_core_value_sigA282.pageManager["activeSlideId$"], var_core_value_sigA282 == null || (var_core_value_sig8537 = var_core_value_sigA282.pageManager["getActiveSlide"]()) == null ? undefined : var_core_value_sig8537.getId(), false, [var_core_value_sigA282]),
    var_core_value_sig3C8B = (var_core_value_sigA282 == null ? undefined : var_core_value_sigA282.pageManager["getSlides"]()) ?? [],
    var_core_value_sig8F5D = Math.max(0, var_core_value_sig3C8B.findIndex(var_core_value_sig4133 => var_core_value_sig4133.getId() === var_core_value_sigBDE9)),
    var_core_value_sig164F = var_core_value_sig3C8B.length,
    var_core_value_sigFD37 = var_core_value_sig53B4.t("embed-ui.slidesFloating.selectSlide"),
    var_core_value_sigB90E1 = Lv({
      active: var_core_value_sigE32F,
      embedId: var_core_value_sig6236,
      fullscreen: var_core_value_sig7D06,
      renderScopeActive: var_core_value_sig6DBD,
      usesDomFloatingStage: var_core_value_sigC7AE
    }),
    var_core_value_sig6754 = () => {
      var_core_value_sig5C0A.activate({
        hostUnitId: var_core_value_sigB825,
        embedId: var_core_value_sig6236,
        childUnitId: var_core_value_sigD72F
      }, "stage2"), var_core_value_sig90D9.setCurrentUnitForType(var_core_value_sigD72F);
    },
    var_core_value_sig3B23 = var_core_value_sig8333 => {
      let var_core_value_sigB171 = var_core_value_sig3C8B[var_core_value_sig8333];
      !var_core_value_sigB171 || !var_core_value_sigA282 || (var_core_value_sig6754(), var_core_value_sigA282.pageManager["setActiveSlide"](var_core_value_sigB171.getId()));
    },
    var_core_value_sig618F = var_core_value_sigA6AB1 => {
      var_core_value_sig3B23(var_core_value_sig3C8B.findIndex(var_core_value_sigC50A => var_core_value_sigC50A.getId() === var_core_value_sigA6AB1));
    };
  return var_core_value_sigA648("div", {
    className: var_core_value_sig522C("univer-slide-embed-floating-menu univer-pointer-events-auto univer-box-border univer-inline-flex univer-h-8 univer-items-center univer-gap-1 univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-1 univer-text-gray-900 univer-shadow-lg dark:!univer-border-gray-600 dark:!univer-bg-gray-900 dark:!univer-text-gray-0", {
      "univer-hidden": var_core_value_sigB90E1 === "inactive",
      "univer-static\x20univer-mx-auto\x20univer-my-1.5\x20univer-translate-x-0": var_core_value_sig7D06,
      "univer-absolute\x20univer-left-1/2\x20univer-z-[30]\x20-univer-translate-x-1/2": !var_core_value_sig7D06,
      "-univer-top-9": !var_core_value_sig7D06
    }),
    "data-embed-floating-menu": "true",
    "data-embed-id": var_core_value_sig6236,
    "data-embed-float-stage": var_core_value_sigB90E1,
    onPointerDown: var_core_value_sigDC81 => var_core_value_sigDC81.stopPropagation(),
    children: [var_core_value_sig6F03(zv, {
      title: var_core_value_sig53B4.t("embed-ui.slidesFloating.previousSlide"),
      disabled: var_core_value_sig8F5D <= 0,
      onClick: () => var_core_value_sig3B23(var_core_value_sig8F5D - 1),
      children: var_core_value_sig6F03(var_core_value_sigAF61, {})
    }), var_core_value_sig6F03(zv, {
      title: var_core_value_sig53B4.t("embed-ui.slidesFloating.nextSlide"),
      disabled: var_core_value_sig164F === 0 || var_core_value_sig8F5D >= var_core_value_sig164F - 1,
      onClick: () => var_core_value_sig3B23(var_core_value_sig8F5D + 1),
      children: var_core_value_sig6F03(var_core_value_sig2EDD, {})
    }), var_core_value_sig6F03(jf, {
      title: var_core_value_sigFD37,
      children: var_core_value_sig6F03(var_core_value_sig1690, {
        collisionBoundary: var_core_value_sigA857,
        align: "center",
        side: "bottom",
        sideOffset: 6,
        className: "univer-w-44\x20!univer-bg-gray-0\x20!univer-text-gray-900\x20dark:!univer-bg-gray-0\x20dark:!univer-text-gray-900",
        "data-embed-id": var_core_value_sig6236,
        "data-embed-floating-menu-popup": "true",
        items: var_core_value_sig3C8B.map((var_core_value_sig6378, var_core_value_sig3C58) => ({
          type: "item",
          className: "!univer-p-1",
          children: var_core_value_sigA648("span", {
            className: "univer-block univer-w-full",
            children: [var_core_value_sig6F03(var_core_value_sig97E0, {
              pageId: var_core_value_sig6378.getId(),
              index: var_core_value_sig3C58,
              isActive: var_core_value_sig6378.getId() === var_core_value_sigBDE9,
              slideModel: var_core_value_sigA282,
              objectProvider: var_core_value_sig47851,
              setActivePage: var_core_value_sig618F,
              variant: "preview",
              renderIdSuffix: "embed-page-menu-" + var_core_value_sig6236,
              darkMode: var_core_value_sig6339
            }), var_core_value_sig6F03("span", {
              className: "univer-sr-only",
              children: var_core_value_sigFD37 + "\x20" + (var_core_value_sig3C58 + 1) + " / " + var_core_value_sig164F
            })]
          }),
          onSelect: () => var_core_value_sig3B23(var_core_value_sig3C58)
        })),
        children: var_core_value_sigA648(var_core_value_sigC820, {
          type: "button",
          size: "small",
          variant: "ghost",
          className: "univer-h-6\x20univer-gap-1\x20univer-px-2\x20univer-text-xs",
          "aria-label": var_core_value_sigFD37,
          children: [var_core_value_sig6F03("span", {
            children: var_core_value_sig164F === 0 ? "0 / 0" : var_core_value_sig8F5D + 1 + " / " + var_core_value_sig164F
          }), var_core_value_sig6F03(var_core_value_sig7990, {
            className: "univer-size-3"
          })]
        })
      })
    }), !var_core_value_sig7D06 && var_core_value_sig6F03(Mf, {
      hostUnitId: var_core_value_sigB825,
      embedId: var_core_value_sig6236,
      variant: "menu"
    }), var_core_value_sig6F03(var_core_value_sig5C3C, {
      orientation: "vertical"
    }), var_core_value_sig6F03(zv, {
      title: var_core_value_sig53B4.t("embed-ui.deleteBlock"),
      className: "univer-text-red-500 hover:univer-text-red-600",
      onClick: async () => {
        await var_core_value_sig62F6.executeCommand(var_core_value_sig793D.id, {
          hostUnitId: var_core_value_sigB825,
          embedId: var_core_value_sig6236
        });
      },
      children: var_core_value_sig6F03(var_core_value_sig4C1E, {})
    })]
  });
}
function zv(var_core_value_sigE7F9) {
  let {
    children: var_core_value_sigD55D,
    title: var_core_value_sig44AF,
    disabled: var_core_value_sigB081,
    className: var_core_value_sig0476,
    onClick: var_core_value_sig797E
  } = var_core_value_sigE7F9;
  return var_core_value_sig6F03(jf, {
    title: var_core_value_sig44AF,
    children: var_core_value_sig6F03(var_core_value_sigC820, {
      type: "button",
      size: "small",
      variant: "ghost",
      className: var_core_value_sig522C("univer-size-6\x20univer-p-0", var_core_value_sig0476),
      "aria-label": var_core_value_sig44AF,
      disabled: var_core_value_sigB081,
      onClick: var_core_value_sig797E,
      children: var_core_value_sigD55D
    })
  });
}
function Bv() {
  return Wh({
    childType: var_core_value_sigC0F3.UNIVER_SLIDE,
    mount: Vv
  });
}
function Vv(var_core_value_sig96EA) {
  let {
      menu: var_core_value_sigCE7A,
      portalContainer: var_core_value_sig8EB4
    } = Vh(var_core_value_sig96EA),
    var_core_value_sigF495 = Sl(var_core_value_sigCE7A),
    var_core_value_sig5220 = var_core_value_sig96EA.injector["get"](xs),
    var_core_value_sig072F = var_core_value_sig96EA.injector["get"](var_core_value_sigDFF6),
    var_core_value_sigDAF6 = var_core_value_sig96EA.injector["get"](var_core_value_sig5DF8),
    var_core_value_sigB921 = var_core_value_sigDAF6.getUnit(var_core_value_sig96EA.childUnitId, var_core_value_sigC0F3.UNIVER_SLIDE);
  return var_core_value_sigF495.render(var_core_value_sigBCAF(fl, {
    injector: var_core_value_sig96EA.runtimeScope["injector"],
    mountContainer: var_core_value_sig8EB4,
    embedId: var_core_value_sig96EA.embedId,
    passThroughWheelGestures: var_core_value_sig96EA.renderScope["mode"] === "float" && !var_core_value_sig96EA.renderScope["fullscreen"]
  }, var_core_value_sigBCAF(Rv, {
    collisionBoundary: var_core_value_sig96EA.renderScope["fullscreen"] ? undefined : var_core_value_sig96EA.injector["get"](var_core_value_sigBEFB).getContentElement(),
    hostUnitId: var_core_value_sig96EA.hostUnitId,
    embedId: var_core_value_sig96EA.embedId,
    childUnitId: var_core_value_sig96EA.childUnitId,
    slideModel: var_core_value_sigB921 ?? null,
    floatingActiveService: var_core_value_sig5220,
    commandService: var_core_value_sig072F,
    instanceService: var_core_value_sigDAF6,
    fullscreen: !!var_core_value_sig96EA.renderScope["fullscreen"],
    usesDomFloatingStage: var_core_value_sig96EA.descriptor["entry"] !== "slides-floating-object",
    renderScopeActive$: var_core_value_sig96EA.renderScope["active$"]
  }))), var_core_value_sig9BBC(() => {
    Cl(var_core_value_sigF495), globalThis.setTimeout(() => var_core_value_sigCE7A.remove(), 0);
  });
}
function Hv(var_core_value_sigACB71, var_core_value_sigD504, var_core_value_sig8D55) {
  return {
    ...var_core_value_sigFE87(var_core_value_sigACB71, var_core_value_sigD504),
    activateAnchor: var_core_value_sig1D57 => {
      var_core_value_sig8D55 == null || var_core_value_sig8D55.unmountFloatingSessions(var_core_value_sig1D57.hostUnitId);
      let var_core_value_sig45F01 = var_core_value_sigD504 == null ? undefined : var_core_value_sigD504.getUnit(var_core_value_sig1D57.hostUnitId, var_core_value_sigC0F3.UNIVER_SLIDE),
        var_core_value_sig7AFB = () => {
          var var_core_value_sig11D0, var_core_value_sigB8ED;
          return var_core_value_sig45F01 == null || (var_core_value_sig11D0 = var_core_value_sig45F01.pageManager) == null || (var_core_value_sigB8ED = var_core_value_sig11D0.setActiveSlide) == null ? undefined : var_core_value_sigB8ED.call(var_core_value_sig11D0, var_core_value_sig1D57.hostAnchorId);
        };
      if (typeof window > "u") {
        var_core_value_sig7AFB();
        return;
      }
      window.requestAnimationFrame(var_core_value_sig7AFB);
    }
  };
}
function Uv() {
  return {
    hostType: var_core_value_sigC0F3.UNIVER_SLIDE,
    entry: "slides-floating-object",
    layout: "scroll-contained",
    supportedLayouts: ["scroll-contained", "doc-width-scale", "aspect-fit", "content-bounds-fit"],
    menuBehavior: "floating",
    mount: var_core_value_sig54CD => {
      let var_core_value_sigF4AD = Gv("data-embed-slides-floating-object-host", var_core_value_sig54CD.descriptor["hostAnchorId"]);
      return var_core_value_sigF4AD ? {
        hostElement: var_core_value_sigF4AD
      } : {};
    }
  };
}
function Wv() {
  return {
    hostType: var_core_value_sigC0F3.UNIVER_SLIDE,
    entry: "slides-page-list-block",
    layout: "tab-peer",
    supportedLayouts: ["tab-peer"],
    menuBehavior: "host-override",
    mount: var_core_value_sigF802 => {
      let var_core_value_sig90E4 = Gv("data-embed-slides-page-list-host", var_core_value_sigF802.descriptor["hostAnchorId"]);
      return var_core_value_sig90E4 ? {
        hostElement: var_core_value_sig90E4
      } : {};
    }
  };
}
function Gv(var_core_value_sig3BA7, var_core_value_sigF0C2) {
  return document.querySelector("[" + var_core_value_sig3BA7 + "=\x22" + Kv(var_core_value_sigF0C2) + "\x22]");
}
function Kv(var_core_value_sig8183) {
  return var_core_value_sig8183.replace(/\\/g, "\x5c\x5c").replace(/"/g, "\x5c\x22");
}
function qv() {
  return {
    childType: var_core_value_sigC0F3.UNIVER_SLIDE,
    handleWheel: () => false
  };
}
function Jv(var_core_value_sig7174) {
  return {
    childType: var_core_value_sigC0F3.UNIVER_SLIDE,
    supportedLayouts: ["tab-peer", "aspect-fit", "scroll-contained"],
    beforeDeactivate: Yv,
    mount: var_core_value_sig23B5 => Xv(var_core_value_sig23B5, var_core_value_sig7174)
  };
}
function Yv(var_core_value_sig878C) {
  let var_core_value_sigA2D8 = var_core_value_sig878C.runtimeScope["injector"];
  if (!(var_core_value_sigA2D8 != null && var_core_value_sigA2D8.has(var_core_value_sig26ED))) return;
  let var_core_value_sig5C57 = var_core_value_sigA2D8.get(var_core_value_sig26ED);
  var_core_value_sig5C57.clearActiveEditing(), var_core_value_sig5C57.clearSelection();
}
function Xv(var_core_value_sigB90D, var_core_value_sig0752) {
  let var_core_value_sig66FC = var_core_value_sigB90D.injector["get"](var_core_value_sig5DF8).getUnit(var_core_value_sigB90D.childUnitId, var_core_value_sigC0F3.UNIVER_SLIDE);
  if (!var_core_value_sig66FC) return;
  let var_core_value_sig2236 = var_core_value_sigB90D.runtimeScope["injector"];
  if (!var_core_value_sig2236) return;
  let var_core_value_sigA800 = Zv(var_core_value_sigB90D.childUnitId, var_core_value_sig2236.get(var_core_value_sig26ED), var_core_value_sig2236.get(var_core_value_sigB6A0)),
    var_core_value_sig45BD = hh(var_core_value_sigB90D, var_core_value_sig0752, var_core_value_sigB560 => Qv(var_core_value_sig66FC, var_core_value_sigB560)),
    var_core_value_sig5B24 = var_core_value_sigB90D.runtimeScope["roots"].content,
    var_core_value_sig782C = var_core_value_sigB90D.runtimeScope["roots"].canvas,
    var_core_value_sig7454 = var_core_value_sigB90D.injector["get"](var_core_value_sigE391),
    var_core_value_sig0AC2 = $v(var_core_value_sigB90D),
    var_core_value_sigFDD5 = var_core_value_sig782C ? Kc(var_core_value_sig7454, var_core_value_sigB90D.childUnitId, var_core_value_sig2236) : undefined;
  if (var_core_value_sigFDD5 && var_core_value_sig782C && !var_core_value_sig0AC2) {
    try {
      var var_core_value_sigA7901, var_core_value_sigB2051;
      (var_core_value_sigA7901 = (var_core_value_sigB2051 = var_core_value_sigFDD5.engine).unmount) == null || var_core_value_sigA7901.call(var_core_value_sigB2051);
    } catch {}
    var_core_value_sigFDD5.engine["mount"](var_core_value_sig782C), Jc(var_core_value_sigFDD5, {
      activate: true
    }), var_core_value_sig782C.dataset["embedChildRenderUnitId"] = var_core_value_sigB90D.childUnitId, var_core_value_sig782C.dataset["embedChildRenderMode"] = "slide-canvas";
  }
  let var_core_value_sigE037 = Sl(var_core_value_sig5B24);
  return var_core_value_sig5B24.dataset["embedChildRenderUnitId"] = var_core_value_sigB90D.childUnitId, var_core_value_sig5B24.dataset["embedChildRenderMode"] = "slide-workbench", var_core_value_sigE037.render(var_core_value_sig6F03(fl, {
    injector: var_core_value_sig2236,
    mountContainer: var_core_value_sigB90D.runtimeScope["roots"].popup,
    embedId: var_core_value_sigB90D.embedId,
    passThroughWheelGestures: var_core_value_sigB90D.renderScope["mode"] === "float" && !var_core_value_sigB90D.renderScope["fullscreen"],
    children: var_core_value_sig0AC2 ? var_core_value_sig6F03(var_core_value_sig2A0D, {
      unitId: var_core_value_sigB90D.childUnitId,
      active$: var_core_value_sigB90D.renderScope["active$"]
    }) : var_core_value_sig6F03(var_core_value_sig7C1E, {})
  })), var_core_value_sig9BBC(() => {
    var_core_value_sigA800.dispose(), var_core_value_sig45BD.dispose();
    try {
      var var_core_value_sigB46F, var_core_value_sig440F;
      var_core_value_sigFDD5 == null || (var_core_value_sig440F = (var_core_value_sigB46F = var_core_value_sigFDD5.engine).unmount) == null || var_core_value_sig440F.call(var_core_value_sigB46F);
    } catch {}
    var_core_value_sig7454.removeRender(var_core_value_sigB90D.childUnitId), Cl(var_core_value_sigE037), var_core_value_sig5B24.isConnected && (var_core_value_sig5B24.removeAttribute("data-embed-child-render-unit-id"), var_core_value_sig5B24.removeAttribute("data-embed-child-render-mode")), var_core_value_sig782C != null && var_core_value_sig782C.isConnected && (var_core_value_sig782C.removeAttribute("data-embed-child-render-unit-id"), var_core_value_sig782C.removeAttribute("data-embed-child-render-mode")), var_core_value_sig2236.dispose();
  });
}
function Zv(var_core_value_sig406F, var_core_value_sig6E141, var_core_value_sig4FCA) {
  let var_core_value_sig0A41 = var_core_value_sig6E141.state$["subscribe"](var_core_value_sigB857 => {
    var var_core_value_sig0743;
    var_core_value_sig4FCA.setContextValue(var_core_value_sig105B, ((var_core_value_sig0743 = var_core_value_sigB857.context) == null ? undefined : var_core_value_sig0743.unitId) === var_core_value_sig406F && var_core_value_sigB857.selectedIds["length"] > 0);
  });
  return var_core_value_sig9BBC(() => {
    var_core_value_sig0A41.unsubscribe(), var_core_value_sig4FCA.setContextValue(var_core_value_sig105B, false);
  });
}
function Qv(var_core_value_sigCB6A, var_core_value_sigB27A) {
  var var_core_value_sigBECF, var_core_value_sigD925;
  let var_core_value_sig39AE = var_core_value_sigB27A == null ? undefined : var_core_value_sigB27A.pageId,
    var_core_value_sigD207 = var_core_value_sig39AE && var_core_value_sigCB6A.pageManager["getSlide"](var_core_value_sig39AE) ? var_core_value_sig39AE : (var_core_value_sigBECF = var_core_value_sigCB6A.pageManager["getSlides"]()[0]) == null ? undefined : var_core_value_sigBECF.getId();
  var_core_value_sigD207 && ((var_core_value_sigD925 = var_core_value_sigCB6A.pageManager["getActiveSlide"]()) == null ? undefined : var_core_value_sigD925.getId()) !== var_core_value_sigD207 && var_core_value_sigCB6A.pageManager["setActiveSlide"](var_core_value_sigD207);
}
function $v(var_core_value_sig2158) {
  return var_core_value_sig2158.renderScope["mode"] === "float" && !var_core_value_sig2158.renderScope["fullscreen"] && var_core_value_sig2158.layout === "aspect-fit";
}
let ey = class {
  constructor(var_core_value_sigFDAF, var_core_value_sigFC34) {
    this._instanceService = var_core_value_sigFDAF, this._renderManagerService = var_core_value_sigFC34, Y(this, "childType", var_core_value_sigC0F3.UNIVER_SLIDE);
  }
  collectViewState(var_core_value_sig162E) {
    var var_core_value_sigB564, var_core_value_sig5989;
    let var_core_value_sigC36D = this._getSlideModel(var_core_value_sig162E.childUnitId),
      var_core_value_sig580E = (var_core_value_sigC36D == null || (var_core_value_sigB564 = var_core_value_sigC36D.pageManager["getActiveSlide"]()) == null ? undefined : var_core_value_sigB564.getId()) ?? "";
    return {
      unitId: var_core_value_sig162E.childUnitId,
      pageId: var_core_value_sig580E,
      scaleMode: "fit",
      zoomRatio: var_core_value_sigC36D == null || (var_core_value_sig5989 = var_core_value_sigC36D.getZoomRatio) == null ? undefined : var_core_value_sig5989.call(var_core_value_sigC36D)
    };
  }
  restoreViewState(var_core_value_sigF338, var_core_value_sig6EEE) {
    let var_core_value_sigC0CF1 = this._getSlideModel(var_core_value_sigF338.childUnitId);
    !var_core_value_sigC0CF1 || !var_core_value_sig6EEE.pageId || !var_core_value_sigC0CF1.pageManager["getSlide"](var_core_value_sig6EEE.pageId) || var_core_value_sigC0CF1.pageManager["setActiveSlide"](var_core_value_sig6EEE.pageId);
  }
  renderPreview(var_core_value_sig10D4) {
    var var_core_value_sigE597, var_core_value_sig4C3E, var_core_value_sig616D;
    let var_core_value_sig0F8A = this._getSlideModel(var_core_value_sig10D4.childUnitId),
      var_core_value_sig2FD4 = (var_core_value_sigE597 = var_core_value_sig10D4.viewState) == null ? undefined : var_core_value_sigE597.pageId;
    var_core_value_sig0F8A && var_core_value_sig2FD4 && var_core_value_sig0F8A.pageManager["getSlide"](var_core_value_sig2FD4) && var_core_value_sig0F8A.pageManager["setActiveSlide"](var_core_value_sig2FD4);
    let var_core_value_sig9AF9 = this._getOrCreateRender(var_core_value_sig10D4.childUnitId),
      var_core_value_sig662D = var_core_value_sig9AF9 == null || (var_core_value_sig4C3E = var_core_value_sig9AF9.engine) == null || (var_core_value_sig616D = var_core_value_sig4C3E.getCanvasElement) == null ? undefined : var_core_value_sig616D.call(var_core_value_sig4C3E);
    if (var_core_value_sig9AF9 && (!var_core_value_sig662D || var_core_value_sig662D.width <= 1 || var_core_value_sig662D.height <= 1) && (var_core_value_sig662D = ty(var_core_value_sig9AF9, var_core_value_sig10D4.width, var_core_value_sig10D4.height)), !(!var_core_value_sig662D || var_core_value_sig662D.width <= 1 || var_core_value_sig662D.height <= 1 || typeof var_core_value_sig662D.toDataURL != "function")) try {
      let var_core_value_sig8EAE = var_core_value_sig0F8A ? var_core_value_sigA6AB(var_core_value_sig0F8A.getSnapshot().defaultPageSize) : undefined,
        var_core_value_sig1CDD = var_core_value_sig8EAE ? var_core_value_sig8EAE.width / var_core_value_sig8EAE.height : undefined,
        var_core_value_sig0DB11 = iy(var_core_value_sig9AF9, var_core_value_sig662D.width, var_core_value_sig662D.height) ?? (var_core_value_sig1CDD ? ny(var_core_value_sig662D.width, var_core_value_sig662D.height, var_core_value_sig1CDD) : undefined);
      return ay(var_core_value_sig662D, var_core_value_sig10D4.width, var_core_value_sig10D4.height, var_core_value_sig10D4.dpr, var_core_value_sig0DB11) ?? var_core_value_sig662D.toDataURL("image/png");
    } catch {
      return;
    }
  }
  _getSlideModel(var_core_value_sig1452) {
    return this._instanceService["getUnit"](var_core_value_sig1452, var_core_value_sigC0F3.UNIVER_SLIDE) ?? undefined;
  }
  _getOrCreateRender(var_core_value_sig6050) {
    let var_core_value_sig896E = this._renderManagerService["getRenderUnitById"](var_core_value_sig6050);
    if (var_core_value_sig896E) return var_core_value_sig896E;
    try {
      return this._renderManagerService["createRender"](var_core_value_sig6050);
    } catch {
      return;
    }
  }
};
ey = $([Q(0, var_core_value_sig5DF8), Q(1, var_core_value_sigE391)], ey);
function ty(var_core_value_sig2D50, var_core_value_sig265C, var_core_value_sig3A5A) {
  if (typeof document > "u") return;
  let var_core_value_sig639E = var_core_value_sig2D50.engine,
    var_core_value_sig5EFD = var_core_value_sig2D50.scene;
  if (!(var_core_value_sig639E != null && var_core_value_sig639E.mount) || !var_core_value_sig639E.resize) return;
  let var_core_value_sig2D7F = document.createElement("div");
  var_core_value_sig2D7F.style["position"] = "fixed", var_core_value_sig2D7F.style["left"] = "-100000px", var_core_value_sig2D7F.style["top"] = "-100000px", var_core_value_sig2D7F.style["width"] = Math.max(1, Math.round(var_core_value_sig265C)) + "px", var_core_value_sig2D7F.style["height"] = Math.max(1, Math.round(var_core_value_sig3A5A)) + "px", var_core_value_sig2D7F.style["pointerEvents"] = "none", var_core_value_sig2D7F.dataset["embedSlidePreviewCanvasHost"] = "true", document.body["appendChild"](var_core_value_sig2D7F);
  try {
    var var_core_value_sigC2F7, var_core_value_sig94ED, var_core_value_sig9DEE;
    return var_core_value_sig639E.mount(var_core_value_sig2D7F), var_core_value_sig639E.resize(), var_core_value_sig5EFD == null || (var_core_value_sigC2F7 = var_core_value_sig5EFD.makeDirty) == null || var_core_value_sigC2F7.call(var_core_value_sig5EFD, true), var_core_value_sig5EFD == null || (var_core_value_sig94ED = var_core_value_sig5EFD.render) == null || var_core_value_sig94ED.call(var_core_value_sig5EFD), (var_core_value_sig9DEE = var_core_value_sig639E.getCanvasElement) == null ? undefined : var_core_value_sig9DEE.call(var_core_value_sig639E);
  } finally {
    var_core_value_sig2D7F.remove();
  }
}
function ny(var_core_value_sigED131, var_core_value_sig9272, var_core_value_sigC397) {
  let var_core_value_sigF065 = Math.max(1, Math.round(var_core_value_sigED131)),
    var_core_value_sigC523 = Math.max(1, Math.round(var_core_value_sig9272));
  if (!Number.isFinite(var_core_value_sigC397) || var_core_value_sigC397 <= 0) return {
    sx: 0,
    sy: 0,
    sWidth: var_core_value_sigF065,
    sHeight: var_core_value_sigC523
  };
  if (var_core_value_sigF065 / var_core_value_sigC523 > var_core_value_sigC397) {
    let var_core_value_sig6D9B = Math.round(var_core_value_sigC523 * var_core_value_sigC397);
    return {
      sx: Math.max(0, Math.round((var_core_value_sigF065 - var_core_value_sig6D9B) / 2)),
      sy: 0,
      sWidth: var_core_value_sig6D9B,
      sHeight: var_core_value_sigC523
    };
  }
  let var_core_value_sigAD8E = Math.round(var_core_value_sigF065 / var_core_value_sigC397);
  return {
    sx: 0,
    sy: Math.max(0, Math.round((var_core_value_sigC523 - var_core_value_sigAD8E) / 2)),
    sWidth: var_core_value_sigF065,
    sHeight: var_core_value_sigAD8E
  };
}
function ry(var_core_value_sig2E9E, var_core_value_sig0C9A, var_core_value_sig0F5D1, var_core_value_sigD0D2, var_core_value_sig9D24) {
  if (typeof var_core_value_sig0F5D1.left != "number" || typeof var_core_value_sig0F5D1.top != "number" || typeof var_core_value_sig0F5D1.width != "number" || typeof var_core_value_sig0F5D1.height != "number" || var_core_value_sig0F5D1.width <= 0 || var_core_value_sig0F5D1.height <= 0) return;
  let var_core_value_sig5801 = Math.max(0, Math.round(var_core_value_sig0F5D1.left * var_core_value_sigD0D2)),
    var_core_value_sigE397 = Math.max(0, Math.round(var_core_value_sig0F5D1.top * var_core_value_sig9D24));
  return {
    sx: var_core_value_sig5801,
    sy: var_core_value_sigE397,
    sWidth: Math.min(Math.max(1, Math.round(var_core_value_sig0F5D1.width * var_core_value_sigD0D2)), Math.max(1, Math.round(var_core_value_sig2E9E - var_core_value_sig5801))),
    sHeight: Math.min(Math.max(1, Math.round(var_core_value_sig0F5D1.height * var_core_value_sig9D24)), Math.max(1, Math.round(var_core_value_sig0C9A - var_core_value_sigE397)))
  };
}
function iy(var_core_value_sigCD88, var_core_value_sigD1D1, var_core_value_sigCE2A) {
  var var_core_value_sig30B1, var_core_value_sig68BA;
  let var_core_value_sigECFC1 = var_core_value_sigCD88 == null ? undefined : var_core_value_sigCD88.scene,
    var_core_value_sig874F = var_core_value_sigECFC1 == null || (var_core_value_sig30B1 = var_core_value_sigECFC1.getObject) == null ? undefined : var_core_value_sig30B1.call(var_core_value_sigECFC1, var_core_value_sig7FC9),
    var_core_value_sigE64F = var_core_value_sigECFC1 == null || (var_core_value_sig68BA = var_core_value_sigECFC1.getAncestorScale) == null ? undefined : var_core_value_sig68BA.call(var_core_value_sigECFC1),
    var_core_value_sigC26D = (var_core_value_sigE64F == null ? undefined : var_core_value_sigE64F.scaleX) ?? (var_core_value_sigECFC1 == null ? undefined : var_core_value_sigECFC1.scaleX) ?? 1,
    var_core_value_sig516A = (var_core_value_sigE64F == null ? undefined : var_core_value_sigE64F.scaleY) ?? (var_core_value_sigECFC1 == null ? undefined : var_core_value_sigECFC1.scaleY) ?? var_core_value_sigC26D;
  return var_core_value_sig874F ? ry(var_core_value_sigD1D1, var_core_value_sigCE2A, var_core_value_sig874F, var_core_value_sigC26D, var_core_value_sig516A) : undefined;
}
function ay(var_core_value_sig0D9D, var_core_value_sigD9A3, var_core_value_sigE8A8, var_core_value_sig0552, var_core_value_sig3DF9) {
  if (typeof document > "u" || !var_core_value_sig3DF9) return;
  let var_core_value_sig3463 = document.createElement("canvas");
  var_core_value_sig3463.width = Math.max(1, Math.round(var_core_value_sigD9A3 * Math.max(1, var_core_value_sig0552 || 1))), var_core_value_sig3463.height = Math.max(1, Math.round(var_core_value_sigE8A8 * Math.max(1, var_core_value_sig0552 || 1)));
  let var_core_value_sig5D99 = null;
  try {
    var_core_value_sig5D99 = var_core_value_sig3463.getContext("2d");
  } catch {
    return;
  }
  if (var_core_value_sig5D99) return var_core_value_sig5D99.drawImage(var_core_value_sig0D9D, var_core_value_sig3DF9.sx, var_core_value_sig3DF9.sy, var_core_value_sig3DF9.sWidth, var_core_value_sig3DF9.sHeight, 0, 0, var_core_value_sig3463.width, var_core_value_sig3463.height), var_core_value_sig3463.toDataURL("image/png");
}
const oy = "slides-page-list-block";
function sy(var_core_value_sigE323, var_core_value_sig6616) {
  let var_core_value_sigDFF61 = false,
    var_core_value_sig62DF,
    var_core_value_sig064B,
    var_core_value_sig7CBA1,
    var_core_value_sigEF51 = var_core_value_sig9425 => {
      if (var_core_value_sigDFF61 || var_core_value_sig064B || !var_core_value_sig9425.image) return;
      let var_core_value_sigCE16 = _y(var_core_value_sig9425.image);
      var_core_value_sigCE16 && (var_core_value_sig62DF = vy(var_core_value_sig6616.hostElement, var_core_value_sig62DF, var_core_value_sigCE16));
    },
    var_core_value_sig2414 = var_core_value_sigE323.previewService["previewUpdated$"].subscribe(var_core_value_sig0207 => {
      var_core_value_sig0207.embedId === var_core_value_sig6616.embedId && (!var_core_value_sig6616.childUnitId || var_core_value_sig0207.childUnitId === var_core_value_sig6616.childUnitId) && var_core_value_sigEF51(var_core_value_sig0207);
    });
  return ly(var_core_value_sigE323, var_core_value_sig6616).then(var_core_value_sig5FE7 => {
    if (var_core_value_sigDFF61 || !var_core_value_sig5FE7) return;
    let var_core_value_sig5BA5 = cy(var_core_value_sigE323, var_core_value_sig6616, var_core_value_sig5FE7, () => var_core_value_sigDFF61);
    if (var_core_value_sig5BA5) {
      var_core_value_sig064B = var_core_value_sig5BA5.lease, var_core_value_sig7CBA1 = var_core_value_sig5BA5.elements, var_core_value_sig62DF = undefined;
      return;
    }
    uy(var_core_value_sigE323, var_core_value_sig6616, var_core_value_sig5FE7, var_core_value_sigEF51, () => var_core_value_sigDFF61).then(var_core_value_sig68A2 => {
      !var_core_value_sigDFF61 && var_core_value_sig68A2 && (var_core_value_sig62DF = vy(var_core_value_sig6616.hostElement, var_core_value_sig62DF, var_core_value_sig68A2));
    });
  }, () => {}), var_core_value_sig9BBC(() => {
    var_core_value_sigDFF61 = true, var_core_value_sig2414.unsubscribe(), var_core_value_sig064B == null || var_core_value_sig064B.dispose(), var_core_value_sig064B = undefined, var_core_value_sig7CBA1 == null || var_core_value_sig7CBA1.dispose(), var_core_value_sig7CBA1 = undefined, var_core_value_sig62DF == null || var_core_value_sig62DF.remove(), var_core_value_sig62DF = undefined;
  });
}
function cy(var_core_value_sig1978, var_core_value_sig6B47, var_core_value_sigE7EA, var_core_value_sigC7AE1) {
  let var_core_value_sig8303 = dy(),
    var_core_value_sigC60D;
  try {
    var var_core_value_sigD93B;
    if (var_core_value_sigC60D = var_core_value_sig1978.runtimeHostLeaseService["acquire"]({
      ...var_core_value_sigE7EA,
      mode: "readonly"
    }, var_core_value_sig8303.runtimeHost), !var_core_value_sigC60D.session["context"]) throw Error("EMBED_PRESENTATION_RUNTIME_CONTEXT_NOT_RESOLVED");
    if (var_core_value_sigC7AE1()) {
      var_core_value_sigC60D.dispose(), var_core_value_sig8303.dispose();
      return;
    }
    var_core_value_sig1978.activationService["focusHostForPassiveRuntime"](var_core_value_sigE7EA), fy(var_core_value_sig8303.runtimeHost);
    let var_core_value_sig4F79 = var_core_value_sigC60D.session["context"],
      var_core_value_sig2BD8 = (var_core_value_sigD93B = var_core_value_sig1978.blockRegistry["get"](var_core_value_sigC60D.session["childType"])) == null ? undefined : var_core_value_sigD93B.presentationPolicy;
    return var_core_value_sig8303.addDisposer(py(var_core_value_sig8303.runtimeHost, var_core_value_sig4F79, var_core_value_sig6B47.entry, var_core_value_sig2BD8)), var_core_value_sig6B47.hostElement["replaceChildren"](var_core_value_sig8303.surface), var_core_value_sig8303.addDisposer(my(var_core_value_sig1978, var_core_value_sigC60D, var_core_value_sig8303.runtimeHost, var_core_value_sig8303.interactionGate, var_core_value_sig6B47.entry, var_core_value_sig2BD8)), {
      lease: var_core_value_sigC60D,
      elements: var_core_value_sig8303
    };
  } catch {
    var_core_value_sigC60D == null || var_core_value_sigC60D.dispose(), var_core_value_sig8303.dispose();
    return;
  }
}
async function ly(var_core_value_sig7228, var_core_value_sig121B) {
  let var_core_value_sig68D4 = var_core_value_sig7228.embedModelService["getDescriptor"](var_core_value_sig121B.hostUnitId, var_core_value_sig121B.embedId) ?? gy(var_core_value_sig121B);
  if (var_core_value_sig68D4) {
    try {
      var_core_value_sig68D4 = await var_core_value_sig7228.restoreService["materializeDescriptor"]({
        descriptor: var_core_value_sig68D4
      });
    } catch {}
    return var_core_value_sig68D4.childUnitId && var_core_value_sig68D4.childType != null ? var_core_value_sig68D4 : undefined;
  }
}
async function uy(var_core_value_sig94AB, var_core_value_sigB061, var_core_value_sigA93D, var_core_value_sig2A16, var_core_value_sigC12C) {
  var var_core_value_sig9C36, var_core_value_sig1AD1;
  let var_core_value_sig551C = await ((var_core_value_sig9C36 = var_core_value_sig94AB.sceneCanvasCaptureService) == null ? undefined : var_core_value_sig9C36.captureByHostAnchorId(var_core_value_sigB061.hostAnchorId));
  if (var_core_value_sigC12C()) return;
  if (var_core_value_sig551C) return _y(var_core_value_sig551C);
  let var_core_value_sigCEA1 = var_core_value_sigA93D.childUnitId,
    var_core_value_sigF3B1 = var_core_value_sigA93D.childType;
  if (!var_core_value_sigCEA1 || var_core_value_sigF3B1 == null) return;
  let var_core_value_sig4923 = (var_core_value_sig1AD1 = var_core_value_sig94AB.sceneCanvasCaptureService) == null ? undefined : var_core_value_sig1AD1.getContextByHostAnchorId(var_core_value_sigB061.hostAnchorId);
  var_core_value_sig2A16(var_core_value_sig94AB.previewService["requestPreview"]({
    descriptor: {
      ...var_core_value_sigA93D,
      mode: "readonly"
    },
    childUnitId: var_core_value_sigCEA1,
    childType: var_core_value_sigF3B1,
    width: Math.max(1, var_core_value_sigB061.width),
    height: Math.max(1, var_core_value_sigB061.height),
    dpr: Math.max(1, Math.min(2, var_core_value_sigB061.dpr)),
    reason: "initial",
    context: var_core_value_sig4923
  }));
}
function dy() {
  let var_core_value_sig21581 = document.createElement("div");
  var_core_value_sig21581.dataset["embedSlidesPresentationSurface"] = "true", var_core_value_sig21581.style["position"] = "absolute", var_core_value_sig21581.style["inset"] = "0", var_core_value_sig21581.style["isolation"] = "isolate", var_core_value_sig21581.style["overflow"] = "hidden";
  let var_core_value_sigCA6A = document.createElement("div");
  var_core_value_sigCA6A.dataset["embedPresentationRuntime"] = "true", var_core_value_sigCA6A.dataset["embedSlidesPresentationRuntime"] = "true", var_core_value_sigCA6A.style["position"] = "absolute", var_core_value_sigCA6A.style["inset"] = "0", var_core_value_sigCA6A.style["zIndex"] = "0", var_core_value_sigCA6A.style["overflow"] = "hidden", var_core_value_sigCA6A.style["pointerEvents"] = "none";
  let var_core_value_sig1E91 = document.createElement("div");
  var_core_value_sig1E91.dataset["embedSlidesPresentationInteractionGate"] = "true", var_core_value_sig1E91.style["position"] = "absolute", var_core_value_sig1E91.style["inset"] = "0", var_core_value_sig1E91.style["zIndex"] = "1", var_core_value_sig1E91.style["pointerEvents"] = "auto", var_core_value_sig1E91.style["touchAction"] = "none", var_core_value_sig21581.append(var_core_value_sigCA6A, var_core_value_sig1E91);
  let var_core_value_sig971F = [];
  return {
    surface: var_core_value_sig21581,
    runtimeHost: var_core_value_sigCA6A,
    interactionGate: var_core_value_sig1E91,
    addDisposer: var_core_value_sigC182 => var_core_value_sig971F.push(var_core_value_sigC182),
    dispose: () => {
      var_core_value_sig971F.splice(0).reverse().forEach(var_core_value_sigCC17 => var_core_value_sigCC17()), var_core_value_sig21581.remove();
    }
  };
}
function fy(var_core_value_sig4391) {
  var_core_value_sig4391.style["pointerEvents"] = "none";
}
function py(var_core_value_sig0F6D, var_core_value_sig2F21, var_core_value_sig135D, var_core_value_sig7F7F) {
  if (var_core_value_sig135D !== oy || !(var_core_value_sig7F7F != null && var_core_value_sig7F7F.getChromeCss)) return () => {};
  let var_core_value_sigC16D1 = var_core_value_sig7F7F.getChromeCss({
    childContext: var_core_value_sig2F21,
    entry: var_core_value_sig135D,
    runtimeHost: var_core_value_sig0F6D
  });
  if (!var_core_value_sigC16D1) return () => {};
  let var_core_value_sigE03A = var_core_value_sig0F6D.ownerDocument["createElement"]("style");
  return var_core_value_sigE03A.dataset["embedSlidesPresentationChrome"] = "true", var_core_value_sigE03A.textContent = var_core_value_sigC16D1, var_core_value_sig0F6D.prepend(var_core_value_sigE03A), () => var_core_value_sigE03A.remove();
}
function my(var_core_value_sigE96A, var_core_value_sigC161, var_core_value_sig6CBF, var_core_value_sig73CC, var_core_value_sig3CAF, var_core_value_sig90B5) {
  let var_core_value_sigD4CD = var_core_value_sig13731 => {
      var_core_value_sig13731.preventDefault(), var_core_value_sig13731.stopPropagation();
    },
    var_core_value_sig551D = var_core_value_sig2D20 => {
      if (var_core_value_sig3CAF === oy && hy(var_core_value_sig6CBF, var_core_value_sigC161, var_core_value_sig90B5, var_core_value_sig2D20.clientX, var_core_value_sig2D20.clientY)) {
        var_core_value_sig2D20.preventDefault(), var_core_value_sig2D20.stopPropagation();
        return;
      }
      var_core_value_sigD4CD(var_core_value_sig2D20);
    },
    var_core_value_sigE0D7 = var_core_value_sigB4E5 => {
      var var_core_value_sigA9C9;
      let var_core_value_sigDA64 = var_core_value_sigC161.session["context"];
      if (!var_core_value_sigDA64) return;
      let var_core_value_sigBE3F = {
          ...var_core_value_sigDA64,
          event: var_core_value_sigB4E5,
          stage: "inactive",
          source: "wheel"
        },
        var_core_value_sig072F1 = var_core_value_sigE96A.passiveWheelHandlerRegistry["handleWheel"](var_core_value_sigBE3F),
        var_core_value_sigD794 = !var_core_value_sig072F1 && ((var_core_value_sigA9C9 = var_core_value_sigE96A.passiveViewportRegistry["get"](var_core_value_sigDA64.childType, var_core_value_sigDA64.layout)) == null ? undefined : var_core_value_sigA9C9.handleWheel(var_core_value_sigBE3F)) === true;
      (var_core_value_sig072F1 || var_core_value_sigD794) && (var_core_value_sigB4E5.preventDefault(), var_core_value_sigB4E5.stopPropagation(), var_core_value_sigB4E5.stopImmediatePropagation());
    },
    var_core_value_sigF746 = ["pointerdown", "pointerup", "dblclick", "contextmenu"];
  return var_core_value_sigF746.forEach(var_core_value_sigCB821 => var_core_value_sig73CC.addEventListener(var_core_value_sigCB821, var_core_value_sigD4CD)), var_core_value_sig73CC.addEventListener("click", var_core_value_sig551D), var_core_value_sig73CC.addEventListener("wheel", var_core_value_sigE0D7, {
    passive: false
  }), () => {
    var_core_value_sigF746.forEach(var_core_value_sig32AE => var_core_value_sig73CC.removeEventListener(var_core_value_sig32AE, var_core_value_sigD4CD)), var_core_value_sig73CC.removeEventListener("click", var_core_value_sig551D), var_core_value_sig73CC.removeEventListener("wheel", var_core_value_sigE0D7);
  };
}
function hy(var_core_value_sig12CD, var_core_value_sigC7A0, var_core_value_sig5BBA, var_core_value_sig87A9, var_core_value_sigD140) {
  let var_core_value_sig89B21 = var_core_value_sigC7A0.session["context"];
  return !var_core_value_sig89B21 || !(var_core_value_sig5BBA != null && var_core_value_sig5BBA.activateNavigationAtPoint) ? false : var_core_value_sig5BBA.activateNavigationAtPoint({
    childContext: var_core_value_sig89B21,
    clientX: var_core_value_sig87A9,
    clientY: var_core_value_sigD140,
    entry: oy,
    runtimeHost: var_core_value_sig12CD
  });
}
function gy(var_core_value_sig2FB3) {
  if (!(!var_core_value_sig2FB3.childUnitId || var_core_value_sig2FB3.childType == null)) return {
    embedId: var_core_value_sig2FB3.embedId,
    hostUnitId: var_core_value_sig2FB3.hostUnitId,
    hostType: var_core_value_sigC0F3.UNIVER_SLIDE,
    entry: var_core_value_sig2FB3.entry,
    hostAnchorId: var_core_value_sig2FB3.hostAnchorId,
    childUnitId: var_core_value_sig2FB3.childUnitId,
    childType: var_core_value_sig2FB3.childType,
    mode: "readonly",
    source: {
      unitType: var_core_value_sig2FB3.childType,
      ref: {
        file: {
          kind: var_core_value_sig8B2B.SELF
        },
        unit: {
          selector: var_core_value_sig2FB3.childUnitId,
          type: var_core_value_sig6893(var_core_value_sig2FB3.childType)
        }
      }
    },
    sourceMeta: {
      floating: var_core_value_sig2FB3.entry === "slides-floating-object" && {
        enabled: true,
        layout: "scroll-contained",
        fullscreen: false
      },
      tab: var_core_value_sig2FB3.entry === "slides-page-list-block" && {
        enabled: true,
        container: "slide-page-list",
        replaceHostMenu: true,
        hideHostFxBar: true,
        lockHostRibbon: true
      }
    }
  };
}
function _y(var_core_value_sigF5B6) {
  if (typeof var_core_value_sigF5B6 == "string") return var_core_value_sigF5B6;
  if (typeof HTMLCanvasElement < "u" && var_core_value_sigF5B6 instanceof HTMLCanvasElement) try {
    return var_core_value_sigF5B6.toDataURL("image/png");
  } catch {
    return;
  }
  if (typeof ImageBitmap < "u" && var_core_value_sigF5B6 instanceof ImageBitmap && typeof document < "u") {
    let var_core_value_sigB67E = document.createElement("canvas");
    var_core_value_sigB67E.width = var_core_value_sigF5B6.width, var_core_value_sigB67E.height = var_core_value_sigF5B6.height;
    let var_core_value_sig7504 = var_core_value_sigB67E.getContext("2d");
    return var_core_value_sig7504 ? (var_core_value_sig7504.drawImage(var_core_value_sigF5B6, 0, 0), var_core_value_sigB67E.toDataURL("image/png")) : undefined;
  }
}
function vy(var_core_value_sigF516, var_core_value_sig033A, var_core_value_sig7774) {
  let var_core_value_sig5730 = var_core_value_sig033A ?? document.createElement("img");
  return var_core_value_sig5730.alt = "", var_core_value_sig5730.dataset["embedSlidesPresentationPreviewImage"] = "true", var_core_value_sig5730.style["display"] = "block", var_core_value_sig5730.style["width"] = "100%", var_core_value_sig5730.style["height"] = "100%", var_core_value_sig5730.style["objectFit"] = "fill", var_core_value_sig5730.style["pointerEvents"] = "none", var_core_value_sig5730.src = var_core_value_sig7774, var_core_value_sig5730.parentElement !== var_core_value_sigF516 && var_core_value_sigF516.replaceChildren(var_core_value_sig5730), var_core_value_sig5730;
}
let yy = class {
  constructor(var_core_value_sigC2EA, var_core_value_sigC733) {
    this._instanceService = var_core_value_sigC2EA, this._renderManagerService = var_core_value_sigC733, Y(this, "childType", var_core_value_sigC0F3.UNIVER_SLIDE), Y(this, "supportedLayouts", ["aspect-fit"]);
  }
  mount(var_core_value_sig9E26) {
    var var_core_value_sig6B84;
    let var_core_value_sig2D04 = this._getSlideModel(var_core_value_sig9E26.childUnitId);
    if (!var_core_value_sig2D04) return;
    (var_core_value_sig6B84 = var_core_value_sig9E26.viewState) != null && var_core_value_sig6B84.pageId && var_core_value_sig2D04.pageManager["getSlide"](var_core_value_sig9E26.viewState["pageId"]) && var_core_value_sig2D04.pageManager["setActiveSlide"](var_core_value_sig9E26.viewState["pageId"]);
    let var_core_value_sigD3D6 = Fs(by(var_core_value_sig9E26));
    if (!var_core_value_sigD3D6) return;
    let var_core_value_sig5BE71 = var_core_value_sig9E26.roots["canvas"] ? Kc(this._renderManagerService, var_core_value_sig9E26.childUnitId, var_core_value_sigD3D6) : undefined;
    if (!var_core_value_sig5BE71) {
      var_core_value_sigD3D6.dispose();
      return;
    }
    var_core_value_sig9E26.roots["canvas"] && (var_core_value_sig9E26.roots["canvas"].dataset["embedChildRenderUnitId"] = var_core_value_sig9E26.childUnitId, var_core_value_sig9E26.roots["canvas"].dataset["embedChildRenderMode"] = "slide-readonly-preview-shell");
    let var_core_value_sigFD72 = Sl(var_core_value_sig9E26.roots["content"]);
    return var_core_value_sig9E26.roots["content"].dataset["embedChildRenderUnitId"] = var_core_value_sig9E26.childUnitId, var_core_value_sig9E26.roots["content"].dataset["embedChildRenderMode"] = "slide-readonly-preview", var_core_value_sigFD72.render(var_core_value_sig6F03(fl, {
      injector: var_core_value_sigD3D6,
      mountContainer: var_core_value_sig9E26.roots["root"],
      embedId: var_core_value_sig9E26.embedId,
      passThroughWheelGestures: true,
      children: var_core_value_sig6F03(var_core_value_sig1FA5, {
        unitId: var_core_value_sig9E26.childUnitId,
        render: var_core_value_sig5BE71
      })
    })), var_core_value_sig9BBC(() => {
      var var_core_value_sigC753, var_core_value_sigFFD1, var_core_value_sig81AE, var_core_value_sigF79F;
      try {
        var var_core_value_sig0E54, var_core_value_sig3B171;
        var_core_value_sig5BE71 == null || (var_core_value_sig3B171 = (var_core_value_sig0E54 = var_core_value_sig5BE71.engine).unmount) == null || var_core_value_sig3B171.call(var_core_value_sig0E54);
      } catch {}
      (var_core_value_sigC753 = (var_core_value_sigFFD1 = this._renderManagerService).removeRender) == null || var_core_value_sigC753.call(var_core_value_sigFFD1, var_core_value_sig9E26.childUnitId), Cl(var_core_value_sigFD72), var_core_value_sig9E26.roots["content"].removeAttribute("data-embed-child-render-unit-id"), var_core_value_sig9E26.roots["content"].removeAttribute("data-embed-child-render-mode"), (var_core_value_sig81AE = var_core_value_sig9E26.roots["canvas"]) == null || var_core_value_sig81AE.removeAttribute("data-embed-child-render-unit-id"), (var_core_value_sigF79F = var_core_value_sig9E26.roots["canvas"]) == null || var_core_value_sigF79F.removeAttribute("data-embed-child-render-mode"), var_core_value_sigD3D6.dispose();
    });
  }
  handleWheel(var_core_value_sig3FA8) {
    var var_core_value_sig4749, var_core_value_sig5D76;
    let var_core_value_sigB8B6 = this._getSlideModel(var_core_value_sig3FA8.childUnitId);
    if (!var_core_value_sigB8B6) return false;
    let var_core_value_sig93DE = Math.abs(var_core_value_sig3FA8.event["deltaY"]) >= Math.abs(var_core_value_sig3FA8.event["deltaX"]) ? var_core_value_sig3FA8.event["deltaY"] : var_core_value_sig3FA8.event["deltaX"];
    if (var_core_value_sig93DE === 0) return false;
    let var_core_value_sigA2781 = xy(var_core_value_sigB8B6);
    if (var_core_value_sigA2781.length < 2) return true;
    let var_core_value_sig4263 = ((var_core_value_sig4749 = var_core_value_sigB8B6.pageManager["getActiveSlide"]()) == null ? undefined : var_core_value_sig4749.getId()) ?? var_core_value_sigA2781[0],
      var_core_value_sig5B46 = Math.max(0, var_core_value_sigA2781.indexOf(var_core_value_sig4263)),
      var_core_value_sig1533 = var_core_value_sigA2781[Math.max(0, Math.min(var_core_value_sigA2781.length - 1, var_core_value_sig5B46 + (var_core_value_sig93DE > 0 ? 1 : -1)))];
    return !var_core_value_sig1533 || var_core_value_sig1533 === var_core_value_sig4263 ? true : (var_core_value_sigB8B6.pageManager["setActiveSlide"](var_core_value_sig1533), var_core_value_sig3FA8.updateViewState({
      unitId: var_core_value_sig3FA8.childUnitId,
      pageId: var_core_value_sig1533,
      scaleMode: "fit",
      zoomRatio: (var_core_value_sig5D76 = var_core_value_sigB8B6.getZoomRatio) == null ? undefined : var_core_value_sig5D76.call(var_core_value_sigB8B6)
    }), true);
  }
  _getSlideModel(var_core_value_sig8C06) {
    return this._instanceService["getUnit"](var_core_value_sig8C06, var_core_value_sigC0F3.UNIVER_SLIDE) ?? undefined;
  }
};
yy = $([Q(0, var_core_value_sig5DF8), Q(1, var_core_value_sigE391)], yy);
function by(var_core_value_sigF360) {
  let var_core_value_sig57AB = () => {};
  return {
    descriptor: var_core_value_sigF360.descriptor,
    layout: var_core_value_sigF360.layout,
    injector: var_core_value_sigF360.injector,
    hostElement: var_core_value_sigF360.roots["root"],
    container: var_core_value_sigF360.roots["root"],
    hostUnitId: var_core_value_sigF360.hostUnitId,
    embedId: var_core_value_sigF360.embedId,
    childUnitId: var_core_value_sigF360.childUnitId,
    childType: var_core_value_sigF360.childType,
    renderScope: {
      hostUnitId: var_core_value_sigF360.hostUnitId,
      hostAnchorId: var_core_value_sigF360.descriptor["hostAnchorId"],
      embedId: var_core_value_sigF360.embedId,
      childUnitId: var_core_value_sigF360.childUnitId,
      childType: var_core_value_sigF360.childType,
      layout: var_core_value_sigF360.layout,
      mode: "float",
      rootElement: var_core_value_sigF360.roots["root"],
      contentRoot: var_core_value_sigF360.roots["content"],
      canvasRoot: var_core_value_sigF360.roots["canvas"],
      active$: var_core_value_sigDA93(false)
    },
    runtimeScope: {
      descriptor: var_core_value_sigF360.descriptor,
      host: {
        unitId: var_core_value_sigF360.hostUnitId,
        type: var_core_value_sigF360.descriptor["hostType"],
        anchorId: var_core_value_sigF360.descriptor["hostAnchorId"],
        entry: var_core_value_sigF360.descriptor["entry"],
        layout: "float"
      },
      child: {
        unitId: var_core_value_sigF360.childUnitId,
        type: var_core_value_sigF360.childType
      },
      injector: var_core_value_sigF360.injector,
      roots: {
        root: var_core_value_sigF360.roots["root"],
        content: var_core_value_sigF360.roots["content"],
        canvas: var_core_value_sigF360.roots["canvas"],
        overlay: var_core_value_sigF360.roots["root"],
        popup: var_core_value_sigF360.roots["root"]
      },
      activate: var_core_value_sig57AB,
      deactivate: var_core_value_sig57AB,
      dispose: var_core_value_sig57AB
    }
  };
}
function xy(var_core_value_sig389D) {
  var var_core_value_sigC44B, var_core_value_sigE9B0, var_core_value_sig1D96;
  let var_core_value_sigE28D = (var_core_value_sigC44B = var_core_value_sig389D.getSnapshot) == null ? undefined : var_core_value_sigC44B.call(var_core_value_sig389D).slideOrder;
  return Array.isArray(var_core_value_sigE28D) && var_core_value_sigE28D.length > 0 ? var_core_value_sigE28D : ((var_core_value_sigE9B0 = (var_core_value_sig1D96 = var_core_value_sig389D.pageManager).getSlides) == null ? undefined : var_core_value_sigE9B0.call(var_core_value_sig1D96).map(var_core_value_sig04F0 => var_core_value_sig04F0.getId()).filter(Boolean)) ?? [];
}
function Sy(var_core_value_sigF93B) {
  zm(var_core_value_sigF93B, "slides-ui.embed", Cy);
}
function Cy(var_core_value_sig1B41) {
  let var_core_value_sig94EB = var_core_value_sig1B41.get(var_core_value_sig67C7),
    var_core_value_sig3F98 = var_core_value_sig1B41.get(Rc),
    var_core_value_sigFC38 = var_core_value_sig1B41.get(Ic),
    var_core_value_sigF0EE = var_core_value_sig1B41.get(bs),
    var_core_value_sig9D181 = var_core_value_sig1B41.get(Lc),
    var_core_value_sig2C46 = var_core_value_sig1B41.get(cd),
    var_core_value_sig631C = var_core_value_sig1B41.get(Cd),
    var_core_value_sigE88D = var_core_value_sig1B41.get(Im),
    var_core_value_sig30FA = var_core_value_sig1B41.has(var_core_value_sig9D18) ? var_core_value_sig1B41.get(var_core_value_sig9D18) : undefined,
    var_core_value_sigD5C8 = var_core_value_sig1B41.has(var_core_value_sig5DF8) ? var_core_value_sig1B41.get(var_core_value_sig5DF8) : undefined;
  var_core_value_sig1B41.has(var_core_value_sig11A1) || var_core_value_sig1B41.add([var_core_value_sig11A1, {
    useFactory: () => wy({
      embedModelService: var_core_value_sig1B41.get(var_core_value_sig91F2),
      mountService: var_core_value_sig1B41.get(cl),
      activationService: var_core_value_sig1B41.get(dl),
      blockRegistry: var_core_value_sig1B41.get(bs),
      restoreService: var_core_value_sig1B41.get(ud),
      previewService: var_core_value_sig1B41.get(cd),
      runtimeHostLeaseService: var_core_value_sig1B41.get(Vf),
      passiveViewportRegistry: var_core_value_sig1B41.get(Cd),
      passiveWheelHandlerRegistry: var_core_value_sig1B41.get(wd),
      univerInstanceService: var_core_value_sigD5C8,
      sceneCanvasCaptureService: var_core_value_sig1B41.has(Yc) ? var_core_value_sig1B41.get(Yc) : undefined
    })
  }]), var_core_value_sig1B41.has(var_core_value_sig1D4E) || var_core_value_sig1B41.add([var_core_value_sig1D4E, {
    useFactory: () => var_core_value_sig1B41.get(xs)
  }]), var_core_value_sig1B41.has(var_core_value_sigF806) || var_core_value_sig1B41.add([var_core_value_sigF806, {
    useFactory: () => var_core_value_sig1B41.get(cl)
  }]), var_core_value_sig1B41.has(var_core_value_sig0AF8) || var_core_value_sig1B41.add([var_core_value_sig0AF8, {
    useFactory: () => var_core_value_sig1B41.get(dl)
  }]), var_core_value_sig1B41.has(var_core_value_sig0671) || var_core_value_sig1B41.add([var_core_value_sig0671, {
    useFactory: () => var_core_value_sig1B41.get(var_core_value_sigB1FB)
  }]), var_core_value_sig1B41.has(var_core_value_sig159C) || var_core_value_sig1B41.add([var_core_value_sig159C, {
    useFactory: () => var_core_value_sig1B41.get(X)
  }]), var_core_value_sig1B41.has(var_core_value_sigD26D) || var_core_value_sig1B41.add([var_core_value_sigD26D, {
    useFactory: () => ({
      render: var_core_value_sig6C4A => {
        let {
          data: var_core_value_sig73D9
        } = var_core_value_sig6C4A;
        return var_core_value_sigBCAF(Lf, {
          ...var_core_value_sig6C4A,
          data: var_core_value_sig73D9
        });
      }
    })
  }]), [var_core_value_sig181C(var_core_value_sig30FA, var_core_value_sigD5C8, () => var_core_value_sig1B41.has(var_core_value_sig452D) ? var_core_value_sig1B41.get(var_core_value_sig452D) : undefined), Hv(var_core_value_sig30FA, var_core_value_sigD5C8, var_core_value_sig1B41.get(var_core_value_sig11A1))].forEach(var_core_value_sigCDD1 => {
    var_core_value_sig94EB.get(var_core_value_sigCDD1.hostType, var_core_value_sigCDD1.entry) || var_core_value_sig94EB.register(var_core_value_sigCDD1);
  }), [Uv(), Wv()].forEach(var_core_value_sig6C50 => {
    var_core_value_sig3F98.get(var_core_value_sig6C50.hostType, var_core_value_sig6C50.entry) || var_core_value_sig3F98.register(var_core_value_sig6C50);
  });
  let var_core_value_sigFF37 = Jv(var_core_value_sig1B41.get(var_core_value_sigDFF6));
  var_core_value_sigFC38.get(var_core_value_sigFF37.childType) || var_core_value_sigFC38.register(var_core_value_sigFF37);
  let var_core_value_sig80B1 = Iv();
  var_core_value_sigF0EE.get(var_core_value_sig80B1.childType) || var_core_value_sigF0EE.register(var_core_value_sig80B1), Bv().forEach(var_core_value_sig7926 => {
    var_core_value_sig9D181.hasExact(var_core_value_sig7926.hostType, var_core_value_sig7926.entry, var_core_value_sig7926.childType) || var_core_value_sig9D181.register(var_core_value_sig7926);
  }), var_core_value_sig2C46.registerProvider(var_core_value_sig1B41.createInstance(ey)), var_core_value_sig631C.get(var_core_value_sigC0F3.UNIVER_SLIDE) || var_core_value_sig631C.register(qv()), var_core_value_sigE88D.get(var_core_value_sigC0F3.UNIVER_SLIDE) || var_core_value_sigE88D.register(var_core_value_sig1B41.createInstance(yy));
}
function wy(var_core_value_sigF473) {
  return {
    mountPageList: var_core_value_sig88B3 => {
      var var_core_value_sig6044, var_core_value_sigEE54;
      let var_core_value_sigBC8E = {
          embedId: var_core_value_sig88B3.embedId,
          hostUnitId: var_core_value_sig88B3.hostUnitId,
          hostType: var_core_value_sigC0F3.UNIVER_SLIDE,
          entry: "slides-page-list-block",
          hostAnchorId: var_core_value_sig88B3.hostAnchorId,
          childUnitId: var_core_value_sig88B3.childUnitId,
          childType: var_core_value_sig88B3.childType,
          source: {
            unitType: var_core_value_sig88B3.childType,
            ref: {
              file: {
                kind: var_core_value_sig8B2B.SELF
              },
              unit: {
                selector: var_core_value_sig88B3.childUnitId,
                type: var_core_value_sig6893(var_core_value_sig88B3.childType)
              }
            }
          },
          sourceMeta: {
            floating: false,
            tab: {
              enabled: true,
              container: "slide-page-list",
              replaceHostMenu: true,
              hideHostFxBar: true,
              lockHostRibbon: true
            }
          }
        },
        var_core_value_sig65B41 = (var_core_value_sig6044 = (var_core_value_sigEE54 = var_core_value_sigF473.mountService).getSession) == null ? undefined : var_core_value_sig6044.call(var_core_value_sigEE54, var_core_value_sig88B3.embedId),
        var_core_value_sig38F9 = () => {
          var var_core_value_sigEAF8, var_core_value_sig0455;
          ((var_core_value_sigEAF8 = (var_core_value_sig0455 = var_core_value_sigF473.mountService).getSession) == null || (var_core_value_sigEAF8 = var_core_value_sigEAF8.call(var_core_value_sig0455, var_core_value_sig88B3.embedId)) == null ? undefined : var_core_value_sigEAF8.hostElement) === var_core_value_sig88B3.hostElement && (var_core_value_sigF473.activationService["clearTab"](var_core_value_sig88B3.embedId), var_core_value_sigF473.mountService["unmount"](var_core_value_sig88B3.embedId));
        };
      return (var_core_value_sig65B41 == null ? undefined : var_core_value_sig65B41.hostUnitId) === var_core_value_sig88B3.hostUnitId && var_core_value_sig65B41.entry === "slides-page-list-block" && var_core_value_sig65B41.childUnitId === var_core_value_sig88B3.childUnitId && var_core_value_sig65B41.hostElement === var_core_value_sig88B3.hostElement ? (var_core_value_sigF473.activationService["activateTab"](var_core_value_sigBC8E), var_core_value_sig9BBC(var_core_value_sig38F9)) : (var_core_value_sigF473.mountService["mountIntoHostElement"](var_core_value_sigBC8E, var_core_value_sig88B3.hostElement), var_core_value_sigF473.activationService["activateTab"](var_core_value_sigBC8E), var_core_value_sig9BBC(var_core_value_sig38F9));
    },
    mountFloatingObject: var_core_value_sig4EFC => {
      let var_core_value_sigB70F = var_core_value_sigF473.embedModelService["getDescriptor"](var_core_value_sig4EFC.hostUnitId, var_core_value_sig4EFC.embedId) ?? {
        embedId: var_core_value_sig4EFC.embedId,
        hostUnitId: var_core_value_sig4EFC.hostUnitId,
        hostType: var_core_value_sigC0F3.UNIVER_SLIDE,
        entry: "slides-floating-object",
        hostAnchorId: var_core_value_sig4EFC.hostAnchorId,
        childUnitId: var_core_value_sig4EFC.childUnitId,
        childType: var_core_value_sig4EFC.childType,
        source: {
          unitType: var_core_value_sig4EFC.childType,
          ref: {
            file: {
              kind: var_core_value_sig8B2B.SELF
            },
            unit: {
              selector: var_core_value_sig4EFC.childUnitId,
              type: var_core_value_sig6893(var_core_value_sig4EFC.childType)
            }
          }
        },
        sourceMeta: {
          floating: {
            enabled: true,
            layout: "scroll-contained",
            fullscreen: true
          },
          tab: false
        }
      };
      return var_core_value_sigF473.mountService["mountIntoHostElement"](var_core_value_sigB70F, var_core_value_sig4EFC.hostElement), var_core_value_sig9BBC(() => {
        var_core_value_sigF473.mountService["unmount"](var_core_value_sig4EFC.embedId);
      });
    },
    clearAndUnmount: var_core_value_sig50E51 => {
      var_core_value_sigF473.activationService["clearTab"](var_core_value_sig50E51), var_core_value_sigF473.mountService["unmount"](var_core_value_sig50E51);
    },
    unmountFloatingSessions: var_core_value_sig8AD2 => {
      var_core_value_sigF473.mountService["listSessions"]().filter(var_core_value_sig737C => var_core_value_sig737C.hostUnitId === var_core_value_sig8AD2 && var_core_value_sig737C.entry === "slides-floating-object").forEach(var_core_value_sig5AF5 => var_core_value_sigF473.mountService["unmount"](var_core_value_sig5AF5.embedId));
    },
    listSessions: () => var_core_value_sigF473.mountService["listSessions"]().map(var_core_value_sig9DE4 => ({
      embedId: var_core_value_sig9DE4.embedId,
      hostUnitId: var_core_value_sig9DE4.hostUnitId,
      entry: var_core_value_sig9DE4.entry,
      childType: var_core_value_sig9DE4.childType,
      childUnitId: var_core_value_sig9DE4.childUnitId
    })),
    capturePreviewByHostAnchorId: (var_core_value_sigEF27, var_core_value_sigD45F) => Ty(var_core_value_sigF473, var_core_value_sigEF27, var_core_value_sigD45F),
    mountPresentationEmbed: var_core_value_sig9764 => sy(var_core_value_sigF473, var_core_value_sig9764)
  };
}
async function Ty(var_core_value_sig10F3, var_core_value_sig2F5F, var_core_value_sig6075) {
  var var_core_value_sigEE76, var_core_value_sig850E, var_core_value_sig818E;
  let var_core_value_sig8990 = (var_core_value_sigEE76 = var_core_value_sig10F3.sceneCanvasCaptureService) == null ? undefined : var_core_value_sigEE76.getContextByHostAnchorId(var_core_value_sig2F5F);
  var_core_value_sig8990 && (await Qf(var_core_value_sig8990));
  let var_core_value_sig2BB0 = await ((var_core_value_sig850E = var_core_value_sig10F3.sceneCanvasCaptureService) == null ? undefined : var_core_value_sig850E.captureByHostAnchorId(var_core_value_sig2F5F));
  if (var_core_value_sig2BB0) return _y(var_core_value_sig2BB0);
  if (!var_core_value_sig6075) return;
  let var_core_value_sig35CB = await Dy(var_core_value_sig10F3, var_core_value_sig2F5F, var_core_value_sig6075);
  if (!var_core_value_sig35CB) return;
  let var_core_value_sigBE5B = var_core_value_sig35CB.childUnitId ?? var_core_value_sig6075.childUnitId,
    var_core_value_sig3933 = var_core_value_sig35CB.childType ?? var_core_value_sig6075.childType;
  if (!var_core_value_sigBE5B || var_core_value_sig3933 == null) return;
  let var_core_value_sigE4FE = Ey(var_core_value_sig10F3, var_core_value_sig35CB, var_core_value_sig2F5F, var_core_value_sig6075),
    var_core_value_sig0D19 = var_core_value_sig10F3.previewService["requestPreview"]({
      descriptor: {
        ...var_core_value_sig35CB,
        mode: "readonly"
      },
      childUnitId: var_core_value_sigBE5B,
      childType: var_core_value_sig3933,
      width: var_core_value_sigE4FE.width,
      height: var_core_value_sigE4FE.height,
      dpr: Math.max(1, Math.min(3, var_core_value_sig6075.dpr)),
      reason: "initial",
      context: (var_core_value_sig818E = var_core_value_sig10F3.sceneCanvasCaptureService) == null ? undefined : var_core_value_sig818E.getContextByHostAnchorId(var_core_value_sig2F5F)
    }),
    var_core_value_sig2D4A = var_core_value_sig0D19.image ? _y(var_core_value_sig0D19.image) : undefined;
  return var_core_value_sig0D19.status === "pending" ? Oy(var_core_value_sig10F3.previewService, var_core_value_sig0D19, var_core_value_sigBE5B) : var_core_value_sig2D4A;
}
function Ey(var_core_value_sig8673, var_core_value_sigFE4C, var_core_value_sig4CF5, var_core_value_sig80ED) {
  var var_core_value_sig5335, var_core_value_sig41CB;
  let var_core_value_sig56CD = {
    width: Math.max(1, var_core_value_sig80ED.width),
    height: Math.max(1, var_core_value_sig80ED.height)
  };
  if (var_core_value_sigFE4C.entry !== var_core_value_sigA392.SlidesPageListBlock) return var_core_value_sig56CD;
  let var_core_value_sigEC10 = (var_core_value_sig5335 = var_core_value_sig8673.univerInstanceService) == null ? undefined : var_core_value_sig5335.getUnit(var_core_value_sig80ED.hostUnitId, var_core_value_sigC0F3.UNIVER_SLIDE);
  if (!var_core_value_sigEC10) return var_core_value_sig56CD;
  let var_core_value_sig9CAA = (var_core_value_sig41CB = var_core_value_sigEC10.pageManager["getSlide"](var_core_value_sig4CF5)) == null ? undefined : var_core_value_sig41CB.getData(),
    var_core_value_sig388B = var_core_value_sigA6AB((var_core_value_sig9CAA == null ? undefined : var_core_value_sig9CAA.pageSize) ?? var_core_value_sigEC10.getSnapshot().defaultPageSize);
  return {
    width: Math.max(1, var_core_value_sig388B.width),
    height: Math.max(1, var_core_value_sig388B.height)
  };
}
async function Dy(var_core_value_sig1541, var_core_value_sigC4E0, var_core_value_sig70FE) {
  let var_core_value_sig0CBD = var_core_value_sig1541.embedModelService["getDescriptor"](var_core_value_sig70FE.hostUnitId, var_core_value_sig70FE.embedId) ?? gy({
    hostUnitId: var_core_value_sig70FE.hostUnitId,
    embedId: var_core_value_sig70FE.embedId,
    hostAnchorId: var_core_value_sigC4E0,
    childUnitId: var_core_value_sig70FE.childUnitId,
    childType: var_core_value_sig70FE.childType,
    entry: var_core_value_sigA392.SlidesPageListBlock
  });
  if (var_core_value_sig0CBD) {
    try {
      var_core_value_sig0CBD = await var_core_value_sig1541.restoreService["materializeDescriptor"]({
        descriptor: var_core_value_sig0CBD
      });
    } catch {}
    return var_core_value_sig0CBD;
  }
}
function Oy(var_core_value_sig17FE, var_core_value_sig583F, var_core_value_sig333C) {
  return new Promise(var_core_value_sig397B => {
    let var_core_value_sigC2FF = false,
      var_core_value_sig8A75,
      var_core_value_sigCA67,
      var_core_value_sigDFDA = var_core_value_sig77FA1 => {
        var_core_value_sigC2FF || (var_core_value_sigC2FF = true, globalThis.clearTimeout(var_core_value_sigCA67), var_core_value_sig8A75 == null || var_core_value_sig8A75.unsubscribe(), var_core_value_sig397B(var_core_value_sig77FA1));
      };
    var_core_value_sigCA67 = globalThis.setTimeout(() => var_core_value_sigDFDA(undefined), 5000), var_core_value_sig8A75 = var_core_value_sig17FE.previewUpdated$["subscribe"]({
      next: var_core_value_sigA4A7 => {
        var_core_value_sigA4A7.embedId !== var_core_value_sig583F.embedId || var_core_value_sigA4A7.childUnitId !== var_core_value_sig333C || var_core_value_sigA4A7.revision < var_core_value_sig583F.revision || var_core_value_sigA4A7.status === "pending" || var_core_value_sigDFDA(var_core_value_sigA4A7.image ? _y(var_core_value_sigA4A7.image) : undefined);
      },
      complete: () => var_core_value_sigDFDA(undefined)
    });
  });
}
function ky(var_core_value_sigF853) {
  a_(var_core_value_sigF853), Tv(var_core_value_sigF853), Sy(var_core_value_sigF853), xg(var_core_value_sigF853), Lg(var_core_value_sigF853);
}
function Ay(var_core_value_sig210F) {
  Cg(var_core_value_sig210F);
}
const jy = [0, 16, 100, 300, 1000];
async function My(var_core_value_sig06D9, var_core_value_sig125E) {
  var var_core_value_sig7729;
  let {
      instanceService: var_core_value_sig50ED,
      childUnitId: var_core_value_sigB3C8,
      childType: var_core_value_sigC097,
      restoreUnitId: var_core_value_sigE100,
      shouldRestore: var_core_value_sig3841,
      settleDelayMs: var_core_value_sig6B0E = 16,
      deferredRestoreDelaysMs: var_core_value_sig0C60 = var_core_value_sigE100 ? jy : []
    } = var_core_value_sig06D9,
    var_core_value_sigEE271 = var_core_value_sig50ED.getCurrentUnitOfType(var_core_value_sigC097),
    var_core_value_sig0CFB = ((var_core_value_sig7729 = var_core_value_sig50ED.getFocusedUnit()) == null ? undefined : var_core_value_sig7729.getUnitId()) ?? null ?? var_core_value_sigE100 ?? null;
  var_core_value_sig50ED.setCurrentUnitForType(var_core_value_sigB3C8), var_core_value_sig50ED.focusUnit(var_core_value_sigB3C8);
  let var_core_value_sig42301 = () => {
    var_core_value_sig3841 && !var_core_value_sig3841() || (var_core_value_sigEE271 && var_core_value_sigEE271.getUnitId() !== var_core_value_sigB3C8 && var_core_value_sig50ED.setCurrentUnitForType(var_core_value_sigEE271.getUnitId()), var_core_value_sigE100 && var_core_value_sig50ED.setCurrentUnitForType(var_core_value_sigE100), var_core_value_sig50ED.focusUnit(var_core_value_sig0CFB));
  };
  try {
    let var_core_value_sigEAA1 = await var_core_value_sig125E();
    return var_core_value_sig6B0E > 0 && (await Ny(var_core_value_sig6B0E)), var_core_value_sigEAA1;
  } finally {
    var_core_value_sig42301(), Py(var_core_value_sig42301, var_core_value_sig0C60);
  }
}
function Ny(var_core_value_sig7EC6) {
  return new Promise(var_core_value_sig77BA => setTimeout(var_core_value_sig77BA, var_core_value_sig7EC6));
}
function Py(var_core_value_sig2663, var_core_value_sigB20A1) {
  var_core_value_sigB20A1.forEach(var_core_value_sig9ED0 => {
    globalThis.setTimeout(var_core_value_sig2663, var_core_value_sig9ED0);
  });
}
const Fy = new WeakMap();
let Iy = 0;
function Ly(var_core_value_sig6C26, var_core_value_sig3DB3) {
  return var_core_value_sig6C26.has(Vy) ? var_core_value_sig6C26.get(Vy).register(var_core_value_sig3DB3) : zy(var_core_value_sig6C26, var_core_value_sig3DB3);
}
function Ry(var_core_value_sig5044) {
  if (!var_core_value_sig5044.has(Vy)) return;
  let var_core_value_sigED341 = Fy.get(var_core_value_sig5044);
  var_core_value_sigED341 != null && var_core_value_sigED341.size && ([...var_core_value_sigED341.values()].sort((var_core_value_sigB650, var_core_value_sig74A81) => var_core_value_sigB650.index - var_core_value_sig74A81.index).forEach(({
    contribution: var_core_value_sigC129
  }) => Ly(var_core_value_sig5044, var_core_value_sigC129)), Fy.delete(var_core_value_sig5044));
}
function zy(var_core_value_sig98EE, var_core_value_sig5268) {
  let var_core_value_sig413E = {
      contribution: var_core_value_sig5268,
      index: Iy++
    },
    var_core_value_sig15A1 = By(var_core_value_sig5268, var_core_value_sig413E.index),
    var_core_value_sig9C51 = var_core_value_sig98EE,
    var_core_value_sigF33D = Fy.get(var_core_value_sig9C51) ?? new Map();
  return var_core_value_sigF33D.set(var_core_value_sig15A1, var_core_value_sig413E), Fy.set(var_core_value_sig9C51, var_core_value_sigF33D), var_core_value_sig9BBC(() => {
    let var_core_value_sig59D5 = Fy.get(var_core_value_sig9C51);
    (var_core_value_sig59D5 == null ? undefined : var_core_value_sig59D5.get(var_core_value_sig15A1)) === var_core_value_sig413E && var_core_value_sig59D5.delete(var_core_value_sig15A1);
  });
}
function By(var_core_value_sig0DB2, var_core_value_sig684B) {
  return var_core_value_sig0DB2.id ? var_core_value_sig0DB2.childType + ":" + var_core_value_sig0DB2.id : var_core_value_sig0DB2.childType + ":anonymous:" + var_core_value_sig684B;
}
let Vy = class {
  constructor(var_core_value_sig7A96, var_core_value_sigD72E) {
    this._injector = var_core_value_sig7A96, this._focusCoordinator = var_core_value_sigD72E, Y(this, "_contributions", new Map()), Y(this, "_nextIndex", 0);
  }
  register(var_core_value_sig3E1F) {
    if (var_core_value_sig3E1F.id && this._hasContributionId(var_core_value_sig3E1F.childType, var_core_value_sig3E1F.id)) return var_core_value_sig9BBC(() => {});
    let var_core_value_sig7D3E = {
        contribution: var_core_value_sig3E1F,
        index: this._nextIndex++
      },
      var_core_value_sig9D1B = this._contributions["get"](var_core_value_sig3E1F.childType) ?? [];
    return var_core_value_sig9D1B.push(var_core_value_sig7D3E), var_core_value_sig9D1B.sort(Hy), this._contributions["set"](var_core_value_sig3E1F.childType, var_core_value_sig9D1B), var_core_value_sig9BBC(() => {
      let var_core_value_sigA4DF = this._contributions["get"](var_core_value_sig3E1F.childType);
      if (!var_core_value_sigA4DF) return;
      let var_core_value_sigCC9D = var_core_value_sigA4DF.filter(var_core_value_sig0C53 => var_core_value_sig0C53 !== var_core_value_sig7D3E);
      var_core_value_sigCC9D.length ? this._contributions["set"](var_core_value_sig3E1F.childType, var_core_value_sigCC9D) : this._contributions["delete"](var_core_value_sig3E1F.childType);
    });
  }
  getAll(var_core_value_sigC043) {
    return (this._contributions["get"](var_core_value_sigC043) ?? []).map(var_core_value_sig90F5 => var_core_value_sig90F5.contribution);
  }
  async prepare(var_core_value_sig12F21) {
    let var_core_value_sig3B28 = this.getAll(var_core_value_sig12F21.childType);
    var_core_value_sig3B28.length && (await My({
      instanceService: this._injector["get"](var_core_value_sig5DF8),
      childUnitId: var_core_value_sig12F21.childUnitId,
      childType: var_core_value_sig12F21.childType,
      restoreUnitId: var_core_value_sig12F21.restoreUnitId,
      settleDelayMs: var_core_value_sig12F21.settleDelayMs,
      shouldRestore: () => !this._focusCoordinator["isChildUnitInActiveSession"](var_core_value_sig12F21.childUnitId)
    }, async () => {
      for (let var_core_value_sigEA04 of var_core_value_sig3B28) var_core_value_sigEA04.prepare && (await var_core_value_sigEA04.prepare({
        injector: this._injector,
        childUnitId: var_core_value_sig12F21.childUnitId,
        childType: var_core_value_sig12F21.childType,
        descriptor: var_core_value_sig12F21.descriptor
      }));
    }));
  }
  _hasContributionId(var_core_value_sig9789, var_core_value_sig8475) {
    return (this._contributions["get"](var_core_value_sig9789) ?? []).some(var_core_value_sigD2BA => var_core_value_sigD2BA.contribution["id"] === var_core_value_sig8475);
  }
};
Vy = $([Q(0, var_core_value_sig205B(var_core_value_sig8A66)), Q(1, var_core_value_sig205B(X))], Vy);
function Hy(var_core_value_sig73BD, var_core_value_sigB602) {
  return (var_core_value_sig73BD.contribution["order"] ?? var_core_value_sig73BD.index) - (var_core_value_sigB602.contribution["order"] ?? var_core_value_sigB602.index) || var_core_value_sig73BD.index - var_core_value_sigB602.index;
}
function Uy() {
  return [];
}
let Wy = class {
  constructor(var_core_value_sig88B7, var_core_value_sigB1771) {
    this._focusOwnerService = var_core_value_sig88B7, this._undoRedoService = var_core_value_sigB1771;
  }
  pushUndoRedoForChild(var_core_value_sig9946) {
    let var_core_value_sig731A = this.resolveStackUnitId(var_core_value_sig9946.unitID);
    return this._undoRedoService["pushUndoRedo"]({
      ...var_core_value_sig9946,
      unitID: var_core_value_sig731A
    }), {
      stackUnitId: var_core_value_sig731A,
      routedToHost: var_core_value_sig731A !== var_core_value_sig9946.unitID
    };
  }
  resolveStackUnitId(var_core_value_sig8E75) {
    let var_core_value_sigF462 = this._focusOwnerService["getFocusOwner"]();
    return !var_core_value_sigF462 || var_core_value_sigF462.childUnitId !== var_core_value_sig8E75 ? var_core_value_sig8E75 : var_core_value_sigF462.hostUnitId;
  }
};
Wy = $([Q(0, var_core_value_sig205B(var_core_value_sigB1FB)), Q(1, var_core_value_sig84F3)], Wy);
let Gy = class extends var_core_value_sigC7E7 {
  constructor(var_core_value_sigF519 = Su, var_core_value_sig80A1, var_core_value_sigA8D7, var_core_value_sig5BB81) {
    super(), this._config = var_core_value_sigF519, this._injector = var_core_value_sig80A1, this._configService = var_core_value_sigA8D7, this._univerInstanceService = var_core_value_sig5BB81;
    let {
      ...var_core_value_sig784F
    } = var_core_value_sigE22D({}, Su, this._config);
    this._configService["setConfig"]("embed-ui.config", var_core_value_sig784F);
  }
  onStarting() {
    this._enableEmbedUnitLeasePolicy(), this._registerServices(), this._registerProductUIContributions(), this._registerLateProductUIContributions(), this._registerProductMenus(), this._flushPendingContributions(), this._registerFloatingMenus(), this._touchServices(), this._registerDefaultHostToolbar();
  }
  onReady() {
    this._flushPendingContributions(), this._injector["get"](lm);
  }
  _registerServices() {
    this._injector["has"](var_core_value_sigBDB6) || this._injector["add"]([var_core_value_sigBDB6, {
      useClass: var_core_value_sigA1C0
    }]), this._injector["has"](var_core_value_sigDDBA) || this._injector["add"]([var_core_value_sigDDBA]), this._injector["has"](var_core_value_sig274A) || this._injector["add"]([var_core_value_sig274A]), [[Rc], [ud], [Vy], [em], [dl], [Ic], [bs], [xs], [ld], [Lc], [cd], [Bf], [gu], [Ss], [hd], [Es], [rm], [im], [am], [sm], [lm], [Mm], [tm], [cl], [zc], [wd], [Cd], [lp], [Zl], [Im], [Ds], [X], [Vf], [Yc], [ks], [Wy]].forEach(var_core_value_sigCD3A => this._injector["add"](var_core_value_sigCD3A)), this._injector["has"](var_core_value_sigE919) || this._injector["add"]([var_core_value_sigE919, {
      useFactory: () => this._injector["get"](Es)
    }]), this._injector["has"](var_core_value_sig7C90) || this._injector["add"]([var_core_value_sig7C90, {
      useFactory: () => this._injector["get"](X)
    }]), this._injector["has"](var_core_value_sig6BA7) || this._injector["add"]([var_core_value_sig6BA7, {
      useFactory: () => this._injector["get"](Es)
    }]), this._injector["has"](var_core_value_sig3F70) || this._injector["add"]([var_core_value_sig3F70, {
      useFactory: () => this._injector["get"](X)
    }]), this._injector["has"](var_core_value_sig463A) || this._injector["add"]([var_core_value_sig463A, {
      useFactory: () => this._injector["get"](ld)
    }]);
  }
  _registerProductMenus() {
    Fm(this._injector).forEach(var_core_value_sig519D => this.disposeWithMe(var_core_value_sig519D));
  }
  _registerProductUIContributions() {
    ky(this._injector);
  }
  _registerLateProductUIContributions() {
    let var_core_value_sig29001 = this._univerInstanceService["getTypeOfUnitAdded$"](var_core_value_sigC0F3.UNIVER_BASE).subscribe(() => Ay(this._injector));
    this.disposeWithMe(var_core_value_sig9BBC(() => var_core_value_sig29001.unsubscribe()));
  }
  _flushPendingContributions() {
    Bm(this._injector), Jl(this._injector), Ry(this._injector);
  }
  _registerFloatingMenus() {
    var var_core_value_sigF735;
    let var_core_value_sig893C = this._injector["get"](Lc);
    ((var_core_value_sigF735 = this._config["defaults"]) == null ? undefined : var_core_value_sigF735.floatingMenus) !== false && Uy().forEach(var_core_value_sigC7E71 => {
      var_core_value_sig893C.hasExact(var_core_value_sigC7E71.hostType, var_core_value_sigC7E71.entry, var_core_value_sigC7E71.childType) || var_core_value_sig893C.register(var_core_value_sigC7E71);
    });
  }
  _touchServices() {
    var_core_value_sig7066(this._injector, [[Rc], [ud], [Vy], [em], [dl], [Ic], [bs], [xs], [Lc], [cd], [Bf], [gu], [Ss], [hd], [rm], [im], [am], [sm], [Mm], [tm], [cl], [zc], [wd], [Cd], [lp], [Zl], [Im], [Ds], [X], [Vf], [Yc], [ks], [Wy]]);
  }
  _registerDefaultHostToolbar() {
    var var_core_value_sigE82D;
    ((var_core_value_sigE82D = this._config["defaults"]) == null ? undefined : var_core_value_sigE82D.hostToolbar) !== false && this.disposeWithMe(this._injector["get"](var_core_value_sigCA1C).registerComponent(var_core_value_sigFC3C.GLOBAL, () => vu));
  }
  _enableEmbedUnitLeasePolicy() {
    this._injector["get"](var_core_value_sig972D).enableExclusivePolicy();
  }
};
Y(Gy, "pluginName", "UNIVER_EMBED_UI_PLUGIN"), Y(Gy, "packageName", fs), Y(Gy, "version", ps), Y(Gy, "type", var_core_value_sigC0F3.UNIVER_UNKNOWN), Gy = $([var_core_value_sig295C(var_core_value_sig5495, var_core_value_sig8718), Q(1, var_core_value_sig205B(var_core_value_sig8A66)), Q(2, var_core_value_sig7B6F), Q(3, var_core_value_sig5DF8)], Gy);
export { dl as EmbedActivationService, Ic as EmbedChildViewRegistryService, gu as EmbedFullscreenService, Rc as EmbedHostContainerRegistryService, Ss as EmbedHostMenuOverrideService, ud as EmbedHostRestoreService, cl as EmbedMountService, Gy as UniverEmbedUIPlugin, ql as registerEmbedProductMenuContribution };
