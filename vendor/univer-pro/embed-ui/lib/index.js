import { BoardPrintCompositionService as _0x41ff07 } from "@univerjs-pro/boards-print";
import {
  CreateEmbedCommand as _0x212648,
  DEFAULT_EMBED_DOC_FLOW_LAYOUT_POLICY as _0x30a7ad,
  DEFAULT_EMBED_FLOAT_LAYOUT_POLICY as _0xed1b86,
  DEFAULT_EMBED_TAB_LAYOUT_POLICY as _0x38ea72,
  EMBED_SHEETS_FLOATING_COMPONENT_KEY as _0x517f5b,
  EmbedFocusOwnerService as _0xd33e59,
  EmbedHostAdapterRegistryService as _0x4294fc,
  EmbedHostAnchorModelService as _0x4466c1,
  EmbedHostEntryEnum as _0x3a477c,
  EmbedModelService as _0x588de6,
  EmbedReferencedUnitMaterializeService as _0x26692a,
  EmbedUnitLeasePolicyService as _0x2ac24f,
  RESOURCE_REF_FILE_KIND as _0x3729d1,
  RemoveEmbedCommand as _0x2e1133,
  SetEmbedBoundsCommand as _0x162e8b,
  SetEmbedDescriptorMutation as _0x2382be,
  SoftDeleteEmbedDescriptorMutation as _0x1c0b7d,
  UniverEmbedPlugin as _0xc071cc,
  createBasesTableListBlockHostAdapterContribution as _0x3b8aa4,
  createDocsCustomBlockHostAdapterContribution as _0x2ceca6,
  createSlidesFloatingObjectHostAdapterContribution as _0x3795b5,
  createSlidesPageListBlockHostAdapterContribution as _0x361271,
  fromResourceRefUnitType as _0x44ff0a,
  getEmbedSheetsTabCustomData as _0x2dca7f,
  getResourceRefInputUnitSelector as _0x24f358,
  parseResourceRef as _0x2c40b3,
  toResourceRefUnitType as _0x392600,
} from "@univerjs-pro/embed";
import { UniverLicensePlugin as _0x25a66b } from "@univerjs-pro/license";
import {
  IPrintPreparationService as _0x2fd4b7,
  PrintPreparationService as _0x1e4ad0,
} from "@univerjs-pro/print";
import { SlidePrintDrawingTransformService as _0xdae6cc } from "@univerjs-pro/slides-print";
import {
  BaseDataModel as _0x3e911b,
  BaseViewType as _0xab778,
  BorderStyleTypes as _0x19c9a7,
  BorderType as _0xbc4e61,
  DEFAULT_WORKSHEET_COLUMN_WIDTH as _0x1dee2c,
  DEFAULT_WORKSHEET_ROW_HEIGHT as _0xd9edde,
  DEFAULT_WORKSHEET_ROW_TITLE_WIDTH as _0x4cdefd,
  DOCS_FORMULA_BAR_EDITOR_UNIT_ID_KEY as _0x5767f7,
  DOCS_NORMAL_EDITOR_UNIT_ID_KEY as _0x27a946,
  DataStreamTreeTokenType as _0x39892f,
  DependentOn as _0x7f7b78,
  Disposable as _0x5f3c10,
  DocumentDataModel as _0x42cc2d,
  DocumentFlavor as _0x1cdc06,
  EDITOR_ACTIVATED as _0x8e415a,
  FOCUSING_BOARD as _0x3a4db3,
  FOCUSING_COMMON_DRAWINGS as _0xb54232,
  FOCUSING_DOC as _0x55448b,
  FOCUSING_FX_BAR_EDITOR as _0x33be87,
  FOCUSING_SHEET as _0x1d103b,
  FOCUSING_SLIDE as _0x54742f,
  FOCUSING_UNIT as _0x22a7dd,
  FOCUSING_UNIVER_EDITOR as _0x26d9bc,
  FORMULA_EDITOR_ACTIVATED as _0x4b85c3,
  HorizontalAlign as _0x3406bf,
  ICommandService as _0x42e186,
  IConfigService as _0x405ebf,
  IContextService as _0x113203,
  IImageIoService as _0x34b88e,
  IPermissionService as _0x46b4fe,
  IUndoRedoService as _0x44c88a,
  IUniverInstanceService as _0x3e617f,
  ImageSourceType as _0x1cccbb,
  Inject as _0x1a6fa3,
  Injector as _0x20cff5,
  LocaleService as _0x11dce0,
  LookUp as _0xb860ed,
  Plugin as _0x1c5028,
  RedoCommand as _0x4ce5de,
  SHEET_EDITOR_UNITS as _0x326912,
  ThemeService as _0x5143b3,
  UndoCommand as _0xbadd6f,
  UniverInstanceType as _0x513c12,
  VerticalAlign as _0x4067f8,
  Workbook as _0x57b012,
  WrapStrategy as _0x5bbefa,
  createDefaultBaseTableSnapshot as _0x381629,
  deepCompare as _0x266bc3,
  generateRandomId as _0x55317b,
  isInternalEditorID as _0x45fbbf,
  merge as _0xf54cfb,
  toDisposable as _0x11d17f,
  touchDependencies as _0xddfaf1,
} from "@univerjs/core";
import {
  DOCS_UI_PLUGIN_CONFIG_KEY as _0x4c43fb,
  DocCanvasPopManagerService as _0x5684db,
  DocFloatMenuService as _0x1b5811,
  DocPageLayoutService as _0x28d0f1,
  DocParagraphMenuService as _0x9c8268,
  DocPrintInterceptorService as _0x51ab16,
  DocRenderController as _0x34e6bf,
  DocSelectAllCommand as _0x356136,
  DocSelectionRenderService as _0x46f032,
  DocViewScaleService as _0x2bef31,
  IDocClipboardService as _0x580746,
  IDocEmbedInteractionBoundaryService as _0x43a84f,
  IDocEmbedRuntimeFocusCoordinator as _0xdd3bd4,
  IEditorService as _0x189d1d,
  SetDocZoomRatioCommand as _0x1ce0ba,
  SetDocZoomRatioOperation as _0x274f75,
  VIEWPORT_KEY as _0x43f126,
  collectDocsTableLikeEmbedChildUnitIds as _0x1697c6,
  createDefaultDocsTableLikeCustomBlockBleedViewport as _0x54a321,
  createDocsCustomBlockSizeRefreshScheduler as _0x5982a3,
  resolveDocsCustomBlockRenderViewport as _0x5ecf7c,
  resolveDocsTableLikeCustomBlockBleedViewport as _0x5d6f5b,
  resolveDocsTableLikeCustomBlockContentHeight as _0x2326c5,
  resolveDocsTableLikeCustomBlockContentWidth as _0x3728fd,
  shouldRefreshDocsCustomBlockSizeForCommand as _0x2a56d3,
} from "@univerjs/docs-ui";
import {
  AutoFillPopupMenu as _0x560534,
  BORDER_LINE_CHILDREN as _0x38b003,
  BORDER_SIZE_CHILDREN as _0x41926d,
  BorderLine as _0x4f61c7,
  CellPopupManagerService as _0x1c73c4,
  EditorContainer as _0x5e5ffd,
  FormulaBar as _0x47cbde,
  ISheetBarService as _0x4610d1,
  ISheetEmbedFloatingGeometryService as _0x944caa,
  ISheetEmbedInteractionBoundaryService as _0x3326d1,
  ISheetEmbedRuntimeFocusCoordinator as _0x14a662,
  ISheetEmbedRuntimeService as _0x59f7ec,
  ISheetHostChromeOverrideService as _0x400392,
  ResetRangeTextColorCommand as _0x413c0a,
  SHEETS_UI_PLUGIN_CONFIG_KEY as _0x2d545c,
  SHEET_FOOTER_BAR_HEIGHT as _0x21421a,
  SelectAllCommand as _0x1e1687,
  SetCellEditVisibleOperation as _0x4b7a57,
  SetOnceFormatPainterCommand as _0xcd66af,
  SetRangeBoldCommand as _0x1abaa8,
  SetRangeFontFamilyCommand as _0x3d6b91,
  SetRangeFontSizeCommand as _0x452b82,
  SetRangeTextColorCommand as _0x31635f,
  SetZoomRatioCommand as _0x74f1d0,
  SheetBar as _0x470ea0,
  SheetBarService as _0x1e4195,
  SheetCanvasPopManagerService as _0x292597,
  SheetPrintInterceptorService as _0x512117,
  SheetsUIMenuSchema as _0x1e1dae,
} from "@univerjs/sheets-ui";
import {
  BuiltInUIPart as _0x2e0fa4,
  CanvasFloatDomPreviewService as _0x59447d,
  CanvasPopup as _0x2dca6b,
  CanvasPopupService as _0x5e7693,
  ComponentContainer as _0x159b9d,
  ComponentManager as _0x1450dc,
  ContextMenu as _0x537cae,
  ContextMenuService as _0x25375a,
  CopyCommand as _0x4ca442,
  CutCommand as _0x26a335,
  DesktopRibbonService as _0x27f2f4,
  DesktopSidebarService as _0x4b2ef5,
  EMBED_CHILD_UNIT_ID_ATTRIBUTE as _0x17c133,
  EMBED_CHILD_UNIT_ID_ATTRIBUTE as _0x4af81c,
  FONT_SIZE_LIST as _0x55991c,
  FloatDom as _0x5a6d49,
  FontFamilyItem as _0x15e2f0,
  HOVER_TRACK_HOST_CLASS_NAME as _0x38e57e,
  HoverTrack as _0x914ddd,
  ICanvasPopupService as _0x2c77a8,
  IContextMenuService as _0x441a50,
  IDialogService as _0x3b8ef4,
  ILayoutService as _0x1cdf34,
  IMenuManagerService as _0x713ac8,
  IRibbonOverrideService as _0x327211,
  IRibbonService as _0x356c5a,
  IShortcutService as _0x448e72,
  ISidebarService as _0x319228,
  IUIPartsService as _0x3781ab,
  IUIRuntimeScopeService as _0x2a7907,
  IconManager as _0x28d0a3,
  KeyCode as _0x459aa6,
  MenuManagerPosition as _0x254d8d,
  MenuManagerService as _0x5674c9,
  MetaKeys as _0x19cc17,
  NativeTextEditorShortcutBehavior as _0x214bcf,
  PasteCommand as _0x8f7b46,
  Ribbon as _0x451df0,
  RibbonDataGroup as _0x1542f5,
  RibbonFormulasGroup as _0x1e0fac,
  RibbonInsertGroup as _0x291d4c,
  RibbonOthersGroup as _0xb3e97c,
  RibbonPosition as _0x205212,
  RibbonStartGroup as _0xc974ff,
  RibbonViewGroup as _0x473b13,
  Sidebar as _0x3681ff,
  ToolbarButton as _0x232e68,
  UI_PLUGIN_CONFIG_KEY as _0x1b6a30,
  connectInjector as _0x290357,
  preventBrowserZoomInContainers as _0x43cbd5,
  useComponentsOfPart as _0x444102,
  useConfigValue as _0x254589,
  useDependency as _0x5ade04,
  useInjector as _0x3c0943,
  useObservable as _0xe46a3c,
} from "@univerjs/ui";
import {
  Button as _0x43385d,
  ColorPicker as _0x1c7350,
  ConfigProvider as _0x5573f3,
  Dropdown as _0x44a86d,
  DropdownMenu as _0x1489c8,
  Separator as _0xb4dc1b,
  Tooltip as _0x1f379e,
  clsx as _0x228d07,
  render as _0x3f4053,
  unmount as _0x8511f5,
} from "@univerjs/design";
import {
  AlignBottomIcon as _0x78073f,
  AlignTopIcon as _0x51f57e,
  ArrowLeftIcon as _0x1a1ae7,
  ArrowRightIcon as _0x55a8b2,
  AutowrapIcon as _0x4ccf55,
  BoldIcon as _0x44dd86,
  BrushIcon as _0xc485dc,
  CancelMergeIcon as _0x5a9fa7,
  CheckMarkIcon as _0x332567,
  DeleteIcon as _0x461762,
  ExpandIcon as _0x166709,
  FilterIcon as _0x185363,
  FontColorDoubleIcon as _0x363c90,
  HorizontalMergeIcon as _0x8b0c60,
  HorizontallyIcon as _0x12d0c6,
  IncreaseIcon as _0x4157b8,
  LeftJustifyingIcon as _0x57712a,
  MergeAllIcon as _0x441d09,
  MoreDownIcon as _0x32072a,
  NoBorderIcon as _0x5e9f6a,
  NoColorDoubleIcon as _0x4c651d,
  NumberIcon as _0x1f5a75,
  OneToOneIcon as _0x3b6bb3,
  OverflowIcon as _0x4e89c2,
  PaintBucketDoubleIcon as _0x13a678,
  PenIcon as _0x32276f,
  RightJustifyingIcon as _0x3e772d,
  ShrinkIcon as _0x31cc5f,
  TruncationIcon as _0x3bb85b,
  VerticalCenterIcon as _0x62754a,
  VerticalIntegrationIcon as _0x3e1764,
  ZoomInIcon as _0x43d456,
  ZoomOutIcon as _0x5a1cdc,
} from "@univerjs/icons";
import {
  createElement as _0xc3e5c7,
  forwardRef as _0x597f7b,
  useCallback as _0x4af03,
  useEffect as _0x51cbb8,
  useLayoutEffect as _0x2dfde5,
  useMemo as _0x2d2d98,
  useRef as _0x344702,
  useState as _0x4d3f85,
  useSyncExternalStore as _0x9b166,
} from "react";
import {
  BehaviorSubject as _0x2ac10f,
  EMPTY as _0xab1a03,
  Observable as _0x43472d,
  Subject as _0x442c37,
  Subscription as _0x35e4a1,
  combineLatest as _0x56bd84,
  distinctUntilChanged as _0x2a4f23,
  filter as _0x5407de,
  map as _0xbab8f3,
  merge as _0x4165fb,
  of as _0x2bd05a,
  startWith as _0xb42533,
} from "rxjs";
import {
  DeviceInputEventType as _0x2d3692,
  Documents as _0x270d7e,
  ICanvasColorService as _0x1d61a0,
  IRenderManagerService as _0x2db5c6,
  SHEET_VIEWPORT_KEY as _0x2d6d71,
  ScrollBar as _0xba56c9,
  UniverPrintingContext as _0x17ca47,
  getNextWheelZoomRatio as _0x42ea47,
  setDocsCustomBlockRenderViewportProvider as _0x2a043f,
} from "@univerjs/engine-render";
import {
  Fragment as _0x541075,
  jsx as _0x29e1d8,
  jsxs as _0x287fb5,
} from "react/jsx-runtime";
import {
  DocSkeletonManagerService as _0x1d642a,
  EMBED_DOCS_CUSTOM_BLOCK_DEFAULT_COMPONENT_KEY as _0x9ae82d,
  canEditDocumentTargets as _0xaa5c51,
  docDrawingPositionToTransform as _0x54369f,
  getDocumentDrawingSegmentId as _0x5f4e00,
  getDocumentEntityParentPermissionObjectIds as _0x2a43c0,
  getDocumentEntityPermissionObjectId as _0x11e166,
  isSheetLikeDocsCustomBlockChildType as _0x5d5ef0,
  resolveDocsCustomBlockSize as _0x17eb21,
} from "@univerjs/docs";
import {
  ISlideDrawingService as _0x5d8dc3,
  PageElementTypeEnum as _0x5cb994,
  PageTypeEnum as _0x480a1a,
  SetSlideZoomRatioOperation as _0x386e13,
  getEmbedSlidesFloatingCustomData as _0x369cba,
  getEmbedSlidesPageCustomData as _0xb39b12,
  slideElementToDrawing as _0x24dfc2,
} from "@univerjs-pro/slides";
import {
  ActivateBaseTableOperation as _0x1b4793,
  ActivateBaseViewOperation as _0x3e32d9,
  AddViewMenu as _0x3d553e,
  BASES_UI_PLUGIN_CONFIG_KEY as _0x8f6d6f,
  BASE_LEFT_PANEL_DEFAULT_WIDTH as _0x3db57a,
  BASE_TOOLBAR_EXTRA_ACTIONS as _0x33a342,
  BASE_VIEW_MENU_ITEMS as _0x4472fe,
  BaseClipboardService as _0x2d8aba,
  BaseDeleteConfirmDialog as _0x19473b,
  BaseDuplicateTableDialog as _0x5aafba,
  BaseEditorService as _0x4be4f4,
  BaseEmbedRuntimeRegistryService as _0x4ff642,
  BaseKeyboardOperation as _0x41d0ba,
  BaseTableSidebarFrame as _0xbe273c,
  BaseToolbar as _0x8b1f28,
  BaseUIPopupService as _0x15502d,
  BaseUIStateService as _0x2ad38d,
  BaseViewIcon as _0x5192b2,
  BaseViewWheelScrollService as _0xea83dd,
  CloseBaseActiveEditorOperation as _0x1f7dac,
  CloseBaseContextMenuOperation as _0x22572b,
  CloseBasePanelOperation as _0x43157f,
  CloseBaseRecordDetailPanelOperation as _0x2a73e4,
  GRID_ADD_FIELD_COLUMN_WIDTH as _0x1f1f22,
  GRID_ADD_RECORD_ROW_HEIGHT as _0x3de8d9,
  GRID_DEFAULT_COLUMN_WIDTH as _0x46d976,
  GRID_HEADER_HEIGHT as _0x5db3f7,
  GRID_ROW_HEADER_WIDTH as _0x46f6be,
  GRID_SUMMARY_HEIGHT as _0x56e232,
  IBaseCanvasRootResolverService as _0x30c7f7,
  IBaseClipboardService as _0x457e6f,
  IBaseDashboardUIExtensionRegistryService as _0x5851e6,
  IBaseEditorService as _0x1296ad,
  IBaseEmbedFloatingActiveService as _0x5180a9,
  IBaseEmbedFloatingGeometryService as _0x1682c4,
  IBaseEmbedRuntimeFocusCoordinator as _0x27c7e4,
  IBaseEmbedRuntimeService as _0x27494e,
  IBaseGlobalPortalService as _0x431af1,
  IBaseHostChromeOverrideService as _0x4f01c2,
  IBaseUIPopupService as _0x113ff4,
  IBaseUIStateService as _0x1ec08d,
  IBaseViewWheelScrollService as _0x28bf49,
  OpenBaseActiveEditorOperation as _0x236a44,
  OpenBaseContextMenuOperation as _0x47c5df,
  OpenBasePanelOperation as _0x4c9825,
  OpenBaseRecordDetailPanelOperation as _0x7acecc,
  RenderBaseWorkbench as _0x225263,
  SetBaseScrollOperation as _0x5cbf99,
  SetBaseZoomOperation as _0x30c84e,
  StartBaseEditingCellOperation as _0xbb1189,
  StopBaseEditingCellOperation as _0x2f3c75,
  ViewTabs as _0x3711e0,
  buildBaseProjectedRowLayout as _0x44a376,
  createDefaultViewName as _0x269e6b,
  createScopedBaseCanvasRootResolverService as _0x1c3ffe,
  createScopedBaseGlobalPortalService as _0xe89372,
  defaultPluginConfig as _0x1a5664,
  duplicateView as _0x33a1ef,
  executeBaseKeyboardOperation as _0x3f4947,
  getBaseCanvasRoot as _0x228c44,
  getBaseFloatingPosition as _0x10c9f3,
  getBaseTableNameErrorMessage as _0xabfc15,
  resolveGridRowHeight as _0x28f62e,
  waitForBaseCanvasImages as _0x130e8e,
} from "@univerjs-pro/bases-ui";
import {
  AddWorksheetMergeAllCommand as _0x3446a5,
  AddWorksheetMergeCommand as _0x4041ac,
  AddWorksheetMergeHorizontalCommand as _0x20fe95,
  AddWorksheetMergeVerticalCommand as _0x188902,
  RemoveWorksheetMergeCommand as _0x1843d9,
  ResetBackgroundColorCommand as _0x15497c,
  SetBackgroundColorCommand as _0x508be8,
  SetBorderBasicCommand as _0x5730e7,
  SetHorizontalTextAlignCommand as _0x1bfb18,
  SetTextWrapCommand as _0x2dd444,
  SetVerticalTextAlignCommand as _0x20ed84,
  SetWorksheetActiveOperation as _0xffd2e7,
  SheetsSelectionsService as _0x443233,
} from "@univerjs/sheets";
import { DocsTablePassiveWheelService as _0x15da7c } from "@univerjs-pro/docs-table-ui";
import {
  SheetsNoteAttachmentController as _0x15775d,
  SheetsNotePopupService as _0xc7ab6f,
  SheetsNoteUIMenuSchema as _0x36de6a,
} from "@univerjs/sheets-note-ui";
import {
  BoardElementType as _0x29dd42,
  IBoardElementService as _0x52a322,
  UpdateBoardElementMutation as _0x3bb174,
  getEmbedBoardsFloatingCustomData as _0x4ac90f,
  isEmbedBoardsFloatingElement as _0xa98c6f,
} from "@univerjs-pro/boards";
import {
  EditorUIFloatingContainer as _0x4fc276,
  IEditorUIService as _0x43de99,
  ISlideDrawingStateService as _0x3be93a,
  ISlideEmbedActivationService as _0x16f632,
  ISlideEmbedFloatDomRenderer as _0x344a4e,
  ISlideEmbedFloatingActiveService as _0x22aff5,
  ISlideEmbedFocusOwnerService as _0x581f65,
  ISlideEmbedMountService as _0x4cf419,
  ISlideEmbedRuntimeFocusCoordinator as _0x1f7db7,
  ISlideEmbedRuntimeService as _0x419276,
  ObjectProvider as _0x161c2d,
  SLIDE_PAGE_RECT_KEY as _0x24397c,
  SlideEmbedChildWorkbench as _0x5050bb,
  SlideEmbedFloatingPreview as _0x37972b,
  SlideEmbedReadonlyFloatingPreview as _0x3af49d,
  SlideInsertService as _0x33ed9a,
  SlideThumbnailItem as _0x424b90,
  resolveSlideLogicalPageSize as _0x1c2b0c,
} from "@univerjs-pro/slides-ui";
import {
  CreateBaseTableCommand as _0x43d97b,
  CreateBaseViewCommand as _0x4b070c,
  DeleteBaseTableCommand as _0x4da2c1,
  DeleteBaseViewCommand as _0x3e83d2,
  IBaseProjectionService as _0xca7423,
  IBaseViewRegistryService as _0x5a2b82,
  MoveBaseViewCommand as _0x18485d,
  RenameBaseTableCommand as _0x2bef5b,
  RenameBaseViewCommand as _0x5b1cd8,
  canEditBaseTargets as _0x4ded7a,
  copyBaseTableSnapshot as _0x543d0d,
  createUniqueBaseTableName as _0xc28cca,
  getBaseFieldPermissionObjectId as _0x128bad,
  getBaseRecordPermissionObjectId as _0x475711,
  getBaseTablePermissionObjectId as _0x49cadc,
  getBaseViewPermissionObjectId as _0x3d3022,
  validateBaseTableName as _0x67968,
} from "@univerjs-pro/bases";
import { createPortal as _0x2491f4 } from "react-dom";
import {
  BOARDS_UI_PLUGIN_CONFIG_KEY as _0x8a798,
  BoardDomLayerService as _0x13e333,
  BoardShapeTextEditorContainer as _0x211cad,
  BoardTextEditingService as _0xd19a80,
  BoardViewportService as _0x2d2c1d,
  BoardWorkbench as _0x45a063,
  IBoardElementStateService as _0x30f355,
  IBoardEmbedRuntimeFocusCoordinator as _0x51471d,
  IBoardUIStateService as _0x43f52c,
  UniverBoardsUIPlugin as _0x57597b,
  getBoardPointFromClient as _0x29cb32,
  resolveBoardInteractionConfig as _0x122c85,
  resolveBoardWheelViewportAction as _0x51cfda,
} from "@univerjs-pro/boards-ui";
import { SheetsChartUIMenuSchema as _0x2bf8db } from "@univerjs-pro/sheets-chart-ui";
import { SheetsOutlineUIMenuSchema as _0x1fae98 } from "@univerjs-pro/sheets-outline-ui";
import { SheetsPivotTableUIMenuSchema as _0x4418dd } from "@univerjs-pro/sheets-pivot-ui";
import { SheetsPrintMenuSchema as _0x2bd7cd } from "@univerjs-pro/sheets-print";
import {
  SheetsShapeUIContextualRibbonSchema as _0x27b128,
  SheetsShapeUIMenuSchema as _0x3ac313,
} from "@univerjs-pro/sheets-shape-ui";
import { SheetsSparklineUIMenuSchema as _0x4f988f } from "@univerjs-pro/sheets-sparkline-ui";
import { SheetsConditionalFormattingUIMenuSchema as _0x1b8f5f } from "@univerjs/sheets-conditional-formatting-ui";
import { SheetsDataValidationUIMenuSchema as _0x65edeb } from "@univerjs/sheets-data-validation-ui";
import { SheetsDrawingUIMenuSchema as _0x5af991 } from "@univerjs/sheets-drawing-ui";
import { SheetsFilterUIMenuSchema as _0x15e8a5 } from "@univerjs/sheets-filter-ui";
import { SheetsHyperLinkUIMenuSchema as _0x5ef72b } from "@univerjs/sheets-hyper-link-ui";
import { SheetsNumfmtUIMenuSchema as _0x5d3add } from "@univerjs/sheets-numfmt-ui";
import { SheetsSortUIMenuSchema as _0xeabd81 } from "@univerjs/sheets-sort-ui";
import { SheetsTableUIMenuSchema as _0x36ed96 } from "@univerjs/sheets-table-ui";
import { SheetsThreadCommentUIMenuSchema as _0x7b1b83 } from "@univerjs/sheets-thread-comment-ui";
var fs = "@univerjs-pro/embed-ui",
  ps = "1.0.0-insiders.20260907-70fc579";
function ms(_0x1a22dc, _0x9f2ea9) {
  return _0x1a22dc.matches("[" + _0x9f2ea9 + "]")
    ? _0x1a22dc
    : (_0x1a22dc.querySelector("[" + _0x9f2ea9 + "]") ?? undefined);
}
function hs(_0x996d2f) {
  let _0x5194c7 = [];
  return (
    gs(
      _0x996d2f,
      "data-embed-content-root",
      "univer-overflow-hidden",
      _0x5194c7,
    ),
    gs(
      _0x996d2f,
      "data-embed-canvas-root",
      "univer-pointer-events-none\x20univer-overflow-hidden\x20[&>*]:univer-pointer-events-auto",
      _0x5194c7,
    ),
    gs(
      _0x996d2f,
      "data-embed-overlay-root",
      "univer-pointer-events-none [&>*]:univer-pointer-events-auto",
      _0x5194c7,
    ),
    gs(
      _0x996d2f,
      "data-embed-popup-root",
      "univer-pointer-events-none [&>*]:univer-pointer-events-auto",
      _0x5194c7,
    ),
    _0x11d17f(() => {
      _0x5194c7.forEach((_0x2192e9) => _0x2192e9.remove());
    })
  );
}
function gs(_0x167f53, _0x3bc7a2, _0x3c3a33, _0x387a56) {
  let _0x4be951 = ms(_0x167f53, _0x3bc7a2);
  if (_0x4be951) return _0x4be951;
  let _0x5446d7 = document.createElement("div");
  return (
    _0x5446d7.setAttribute(_0x3bc7a2, "true"),
    _0x5446d7.setAttribute("data-embed-runtime-slot-owner", "embed-ui"),
    (_0x5446d7.className =
      "univer-box-border univer-absolute univer-inset-0 " + _0x3c3a33),
    _0x167f53.appendChild(_0x5446d7),
    _0x387a56.push(_0x5446d7),
    _0x5446d7
  );
}
function _s(_0x313004) {
  "@babel/helpers - typeof";
  return (
    (_s =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x13ce77) {
            return typeof _0x13ce77;
          }
        : function (_0x3922d1) {
            return _0x3922d1 &&
              typeof Symbol == "function" &&
              _0x3922d1.constructor === Symbol &&
              _0x3922d1 !== Symbol.prototype
              ? "symbol"
              : typeof _0x3922d1;
          }),
    _s(_0x313004)
  );
}
function vs(_0x550b8e, _0x4de92f) {
  if (_s(_0x550b8e) != "object" || !_0x550b8e) return _0x550b8e;
  var _0x1f07d8 = _0x550b8e[Symbol.toPrimitive];
  if (_0x1f07d8 !== undefined) {
    var _0x19a773 = _0x1f07d8.call(_0x550b8e, _0x4de92f || "default");
    if (_s(_0x19a773) != "object") return _0x19a773;
    throw TypeError(
      "@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.",
    );
  }
  return (_0x4de92f === "string" ? String : Number)(_0x550b8e);
}
function ys(_0x450e6b) {
  var _0x226cfb = vs(_0x450e6b, "string");
  return _s(_0x226cfb) == "symbol" ? _0x226cfb : _0x226cfb + "";
}
function Y(_0x57a928, _0x3eb0bf, _0x55d71a) {
  return (
    (_0x3eb0bf = ys(_0x3eb0bf)) in _0x57a928
      ? Object.defineProperty(_0x57a928, _0x3eb0bf, {
          value: _0x55d71a,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x57a928[_0x3eb0bf] = _0x55d71a),
    _0x57a928
  );
}
var bs = class {
    constructor() {
      Y(this, "_contributions", new Map());
    }
    register(_0x186bce) {
      return (
        this._contributions["set"](_0x186bce.childType, _0x186bce),
        _0x11d17f(() => {
          this._contributions["get"](_0x186bce.childType) === _0x186bce &&
            this._contributions["delete"](_0x186bce.childType);
        })
      );
    }
    get(_0x5d4fe9) {
      return this._contributions["get"](_0x5d4fe9);
    }
    list() {
      return [...this._contributions["values"]()];
    }
  },
  xs = class {
    constructor() {
      (Y(this, "_active$", new _0x2ac10f(null)),
        Y(this, "active$", this._active$["asObservable"]()));
    }
    getActive() {
      return this._active$["getValue"]();
    }
    getStage(_0x24731d) {
      let _0x1c4895 = this.getActive();
      return (_0x1c4895 == null ? undefined : _0x1c4895.embedId) === _0x24731d
        ? (_0x1c4895.stage ?? "stage1")
        : "inactive";
    }
    activate(_0x422c2d, _0x2d7c0c) {
      let _0x23f586 = this.getActive(),
        _0x66d930 =
          (_0x23f586 == null ? undefined : _0x23f586.hostUnitId) ===
            _0x422c2d.hostUnitId &&
          _0x23f586.embedId === _0x422c2d.embedId &&
          _0x23f586.childUnitId === _0x422c2d.childUnitId,
        _0x2d6cb2 = {
          ..._0x422c2d,
          stage:
            _0x2d7c0c ??
            _0x422c2d.stage ??
            (_0x66d930 ? (_0x23f586.stage ?? "stage1") : "stage1"),
        };
      ((_0x23f586 == null ? undefined : _0x23f586.hostUnitId) !==
        _0x2d6cb2.hostUnitId ||
        _0x23f586.embedId !== _0x2d6cb2.embedId ||
        _0x23f586.childUnitId !== _0x2d6cb2.childUnitId ||
        (_0x23f586.stage ?? "stage1") !== _0x2d6cb2.stage) &&
        this._active$["next"](_0x2d6cb2);
    }
    setStage(_0x5714e6, _0x2c1f95) {
      let _0x14ecb6 = this.getActive();
      !_0x14ecb6 ||
        _0x14ecb6.embedId !== _0x5714e6 ||
        ((_0x14ecb6.stage ?? "stage1") !== _0x2c1f95 &&
          this._active$["next"]({ ..._0x14ecb6, stage: _0x2c1f95 }));
    }
    promote(_0x417c76) {
      this.getStage(_0x417c76) === "stage1" &&
        this.setStage(_0x417c76, "stage2");
    }
    clear(_0x2a39d2) {
      let _0x5c2468 = this.getActive();
      _0x5c2468 &&
        (!_0x2a39d2 || _0x5c2468.embedId === _0x2a39d2) &&
        this._active$["next"](null);
    }
  },
  Ss = class {
    constructor() {
      (Y(this, "_override$", new _0x2ac10f(null)),
        Y(this, "override$", this._override$["asObservable"]()));
    }
    getOverride() {
      return this._override$["getValue"]();
    }
    activate(_0x3b6300, _0xe7577f, _0x58a798 = {}) {
      var _0x4e4ebd, _0x1c1158;
      if (!_0x3b6300.childUnitId || _0x3b6300.childType == null)
        throw Error("EMBED_MENU_OVERRIDE_CHILD_NOT_RESOLVED");
      let _0x14bdcf =
        ((_0x4e4ebd = _0x3b6300.sourceMeta) == null
          ? undefined
          : _0x4e4ebd.tab) || undefined;
      if (
        _0xe7577f === "tab-active" &&
        (!_0x14bdcf || _0x14bdcf.enabled !== true)
      )
        throw Error("EMBED_MENU_OVERRIDE_TAB_REQUIRED");
      if (_0xe7577f !== "tab-active")
        throw Error("EMBED_MENU_OVERRIDE_UNSUPPORTED_REASON");
      if (
        (((_0x1c1158 = _0x58a798.layoutPolicy) == null
          ? undefined
          : _0x1c1158.ribbon) ?? _0x38ea72.ribbon) !== "host" &&
        _0x58a798.allowPlaceholder !== true &&
        _0x58a798.allowHiddenRibbon !== true
      )
        return (this.clear(_0x3b6300.embedId), null);
      let _0x2e685d = {
          hostUnitId: _0x3b6300.hostUnitId,
          embedId: _0x3b6300.embedId,
          childUnitId: _0x3b6300.childUnitId,
          childType: _0x3b6300.childType,
          entry: _0x3b6300.entry,
          reason: _0xe7577f,
          portalContainer: _0x58a798.portalContainer,
          hideHostFxBar:
            _0x14bdcf == null ? undefined : _0x14bdcf.hideHostFxBar,
          lockHostRibbon:
            _0x14bdcf == null ? undefined : _0x14bdcf.lockHostRibbon,
        },
        _0x5966cc = this.getOverride();
      return Cs(_0x5966cc, _0x2e685d)
        ? _0x5966cc
        : (this._override$["next"](_0x2e685d), _0x2e685d);
    }
    clear(_0x552886) {
      let _0x4c03f4 = this.getOverride();
      _0x4c03f4 &&
        (!_0x552886 || _0x4c03f4.embedId === _0x552886) &&
        this._override$["next"](null);
    }
  };
function Cs(_0xef2ca1, _0x2ba9c8) {
  return (
    _0xef2ca1 != null &&
    _0xef2ca1.hostUnitId === _0x2ba9c8.hostUnitId &&
    _0xef2ca1.embedId === _0x2ba9c8.embedId &&
    _0xef2ca1.childUnitId === _0x2ba9c8.childUnitId &&
    _0xef2ca1.childType === _0x2ba9c8.childType &&
    _0xef2ca1.entry === _0x2ba9c8.entry &&
    _0xef2ca1.reason === _0x2ba9c8.reason &&
    _0xef2ca1.portalContainer === _0x2ba9c8.portalContainer &&
    _0xef2ca1.hideHostFxBar === _0x2ba9c8.hideHostFxBar &&
    _0xef2ca1.lockHostRibbon === _0x2ba9c8.lockHostRibbon
  );
}
const ws = "data-embed-runtime-focus-role";
var X = class {
  constructor() {
    (Y(this, "_leases", new Map()),
      Y(this, "_elements", new Map()),
      Y(this, "_runtimeScopes", new Map()),
      Y(this, "_leaseSequence", 0),
      Y(this, "runtimeFocusChanged$", new _0x442c37()),
      Y(this, "runtimeSessionChanged$", new _0x442c37()));
  }
  acquireLease(_0x3ac55f) {
    let _0x58ffc0 = {
        role: _0x3ac55f.role,
        owner: _0x3ac55f.owner,
        sessionMode: _0x3ac55f.sessionMode,
        hostUnitId: _0x3ac55f.hostUnitId,
        childUnitId: _0x3ac55f.childUnitId,
        childType: _0x3ac55f.childType,
        associatedChildUnitIds: _0x3ac55f.associatedChildUnitIds,
        sequence: ++this._leaseSequence,
      },
      _0x1880b9 = this._leases["get"](_0x3ac55f.embedId);
    return (
      _0x1880b9 ||
        ((_0x1880b9 = new Set()),
        this._leases["set"](_0x3ac55f.embedId, _0x1880b9)),
      _0x1880b9.add(_0x58ffc0),
      _0x58ffc0.role !== "runtime" && this._notifyRuntimeFocusChanged(),
      _0x58ffc0.role === "child-session" && this._notifyRuntimeSessionChanged(),
      _0x11d17f(() => {
        (_0x1880b9 == null || _0x1880b9.delete(_0x58ffc0),
          (_0x1880b9 == null ? undefined : _0x1880b9.size) === 0 &&
            this._leases["delete"](_0x3ac55f.embedId),
          _0x58ffc0.role !== "runtime" && this._notifyRuntimeFocusChanged(),
          _0x58ffc0.role === "child-session" &&
            this._notifyRuntimeSessionChanged());
      })
    );
  }
  hasChildInteractionLease(_0x2df48b) {
    if (!_0x2df48b) return false;
    let _0x46e101 = this._leases["get"](_0x2df48b);
    return _0x46e101 &&
      [..._0x46e101].some((_0x250a87) => _0x250a87.role !== "runtime")
      ? true
      : this.containsElement(_0x2df48b, this._getActiveElement(_0x2df48b));
  }
  hasBlockingChildFocusLease(_0x45bd4e, _0x14c027) {
    if (!_0x45bd4e) return false;
    let _0x1457ae = this._leases["get"](_0x45bd4e);
    return _0x1457ae &&
      [..._0x1457ae].some((_0x30c95e) =>
        this._isBlockingLease(_0x30c95e, _0x14c027),
      )
      ? true
      : this.containsElement(_0x45bd4e, this._getActiveElement(_0x45bd4e));
  }
  hasAnyChildInteractionLease() {
    return (
      [...this._leases["values"]()].some((_0x2ddeba) =>
        [..._0x2ddeba].some((_0x470ed5) => _0x470ed5.role !== "runtime"),
      ) || this._getActiveOwnedRuntimeFocusInfo() != null
    );
  }
  hasAnyBlockingChildFocusLease(_0x240eea) {
    if (
      [...this._leases["values"]()].some((_0x3c745d) =>
        [..._0x3c745d].some((_0x3b36cf) =>
          this._isBlockingLease(_0x3b36cf, _0x240eea),
        ),
      )
    )
      return true;
    let _0x2fa812 = this._getActiveOwnedRuntimeFocusInfo();
    return _0x2fa812 != null && this._isBlockingRole(_0x2fa812.role);
  }
  hasHostPreservingChildFocusLease(_0x452491, _0x1f1d86) {
    if (!_0x452491) return false;
    let _0x3cf1ba = this._leases["get"](_0x452491);
    return _0x3cf1ba &&
      [..._0x3cf1ba].some((_0x5066d0) =>
        this._isHostPreservingLease(_0x5066d0, _0x1f1d86),
      )
      ? true
      : this.containsElement(_0x452491, this._getActiveElement(_0x452491));
  }
  hasAnyHostPreservingChildFocusLease(_0x439619) {
    return [...this._leases["values"]()].some((_0x2ec815) =>
      [..._0x2ec815].some((_0x4cafb6) =>
        this._isHostPreservingLease(_0x4cafb6, _0x439619),
      ),
    )
      ? true
      : this._getActiveOwnedRuntimeFocusInfo() != null;
  }
  hasHostPreservingChildFocusLeaseForHost(_0xfa4592, _0x3c4da7) {
    if (!_0xfa4592) return this.hasAnyHostPreservingChildFocusLease(_0x3c4da7);
    if (
      [...this._leases["values"]()].some((_0x18884a) =>
        [..._0x18884a].some(
          (_0x190908) =>
            this._isHostPreservingLease(_0x190908, _0x3c4da7) &&
            this._leaseAppliesToHostUnit(_0x190908, _0xfa4592),
        ),
      )
    )
      return true;
    let _0x40c585 = this._getActiveOwnedRuntimeFocusInfo();
    if (!_0x40c585) return false;
    let _0x5a3751 = this._leases["get"](_0x40c585.embedId);
    return _0x5a3751 &&
      [..._0x5a3751].some(
        (_0x3d5fe8) =>
          this._isHostPreservingLease(_0x3d5fe8, _0x3c4da7) &&
          this._leaseAppliesToHostUnit(_0x3d5fe8, _0xfa4592),
      )
      ? true
      : this._ownedRuntimeFocusAppliesToHost(_0x40c585.embedId, _0xfa4592);
  }
  isChildUnitInActiveSession(_0x5bb703) {
    return _0x5bb703
      ? [...this._leases["values"]()].some((_0x26aa4b) =>
          [..._0x26aa4b].some(
            (_0x531045) =>
              this._leaseAppliesToChildUnit(_0x531045, _0x5bb703) &&
              _0x531045.role !== "runtime",
          ),
        )
      : false;
  }
  registerRuntimeScope(_0x393f6e) {
    let _0x36442d = {
        hostUnitId: _0x393f6e.hostUnitId,
        childUnitId: _0x393f6e.childUnitId,
        childType: _0x393f6e.childType,
        sessionMode: _0x393f6e.sessionMode,
        sequence: ++this._leaseSequence,
      },
      _0x3aab34 = this._runtimeScopes["get"](_0x393f6e.embedId);
    return (
      _0x3aab34 ||
        ((_0x3aab34 = new Set()),
        this._runtimeScopes["set"](_0x393f6e.embedId, _0x3aab34)),
      _0x3aab34.add(_0x36442d),
      this._notifyRuntimeFocusChanged(),
      this._notifyRuntimeSessionChanged(),
      _0x11d17f(() => {
        (_0x3aab34 == null || _0x3aab34.delete(_0x36442d),
          (_0x3aab34 == null ? undefined : _0x3aab34.size) === 0 &&
            this._runtimeScopes["delete"](_0x393f6e.embedId),
          this._notifyRuntimeFocusChanged(),
          this._notifyRuntimeSessionChanged());
      })
    );
  }
  resolveRuntimeScopeByChildUnitId(_0x1f033c) {
    if (!_0x1f033c) return;
    let _0x5d80aa;
    for (let [_0x35e4b8, _0x14bc47] of this._runtimeScopes)
      for (let _0x1d2d0d of _0x14bc47)
        _0x1d2d0d.childUnitId === _0x1f033c &&
          (!_0x5d80aa || _0x1d2d0d.sequence > _0x5d80aa.scope["sequence"]) &&
          (_0x5d80aa = { embedId: _0x35e4b8, scope: _0x1d2d0d });
    if (_0x5d80aa) {
      let { embedId: _0x5aac66, scope: _0x546ea2 } = _0x5d80aa;
      return {
        embedId: _0x5aac66,
        hostUnitId: _0x546ea2.hostUnitId,
        childUnitId: _0x546ea2.childUnitId,
        childType: _0x546ea2.childType,
        sessionMode: _0x546ea2.sessionMode,
      };
    }
  }
  resolveActiveChildSessionRuntimeScope() {
    let _0x5ab78b;
    for (let [_0x3d0971, _0x2ecd35] of this._leases)
      for (let _0x35da38 of _0x2ecd35) {
        if (_0x35da38.role !== "child-session" || !_0x35da38.childUnitId)
          continue;
        let _0x56c51c = this._getChildSessionPriority(_0x35da38);
        (!_0x5ab78b ||
          _0x56c51c > _0x5ab78b.priority ||
          (_0x56c51c === _0x5ab78b.priority &&
            _0x35da38.sequence > _0x5ab78b.lease["sequence"])) &&
          (_0x5ab78b = {
            embedId: _0x3d0971,
            lease: _0x35da38,
            priority: _0x56c51c,
          });
      }
    return _0x5ab78b
      ? {
          embedId: _0x5ab78b.embedId,
          hostUnitId: _0x5ab78b.lease["hostUnitId"],
          childUnitId: _0x5ab78b.lease["childUnitId"],
          childType: _0x5ab78b.lease["childType"],
          sessionMode: this._resolveChildSessionMode(_0x5ab78b.lease),
        }
      : undefined;
  }
  isChildUnitRuntimeEvent(_0x18bcdb, _0x180803, _0x1b8935) {
    if (!_0x18bcdb) return false;
    let _0x2a3fdc = this._getOwnedEmbedIdFromTarget(_0x180803, _0x1b8935);
    return _0x2a3fdc
      ? this._ownedEmbedAppliesToChildUnit(_0x2a3fdc, _0x18bcdb)
      : false;
  }
  shouldSuppressHostInteraction(_0x5c8656, _0x5d9178, _0x58df68, _0x567ea3) {
    return this.isChildUnitRuntimeEvent(_0x5c8656, _0x5d9178, _0x58df68) ||
      this.isChildUnitInActiveSession(_0x5c8656)
      ? false
      : this.hasHostPreservingChildFocusLeaseForHost(_0x5c8656, _0x567ea3);
  }
  registerElement(_0x3e87fb) {
    let _0x26ed60 = this._elements["get"](_0x3e87fb.embedId);
    (_0x26ed60 ||
      ((_0x26ed60 = new Set()),
      this._elements["set"](_0x3e87fb.embedId, _0x26ed60)),
      _0x26ed60.add(_0x3e87fb.element));
    let _0x2c1cd6 = _0x3e87fb.element["getAttribute"](ws);
    return (
      _0x3e87fb.element["setAttribute"](ws, _0x3e87fb.role),
      this._notifyRuntimeFocusChanged(),
      _0x11d17f(() => {
        (_0x26ed60 == null || _0x26ed60.delete(_0x3e87fb.element),
          (_0x26ed60 == null ? undefined : _0x26ed60.size) === 0 &&
            this._elements["delete"](_0x3e87fb.embedId),
          _0x2c1cd6 == null
            ? _0x3e87fb.element["removeAttribute"](ws)
            : _0x3e87fb.element["setAttribute"](ws, _0x2c1cd6),
          this._notifyRuntimeFocusChanged());
      })
    );
  }
  listElements(_0x5de84d) {
    return _0x5de84d ? [...(this._elements["get"](_0x5de84d) ?? [])] : [];
  }
  containsElement(_0xcc649, _0x5993d3, _0x36b02b) {
    if (!_0xcc649) return false;
    let _0x2aa061 = this._elements["get"](_0xcc649),
      _0x243b89 =
        typeof (_0x36b02b == null ? undefined : _0x36b02b.composedPath) ==
        "function"
          ? _0x36b02b.composedPath()
          : undefined;
    return (_0x2aa061 != null &&
      _0x2aa061.size &&
      _0x243b89 != null &&
      _0x243b89.some(
        (_0x512978) =>
          _0x512978 instanceof HTMLElement &&
          this._containsRegisteredElement(_0x2aa061, _0x512978),
      )) ||
      (_0x243b89 != null &&
        _0x243b89.some(
          (_0x5db88a) =>
            _0x5db88a instanceof HTMLElement &&
            this._isOwnedBoundaryElement(_0xcc649, _0x5db88a),
        ))
      ? true
      : _0x5993d3 instanceof HTMLElement &&
          ((!!(_0x2aa061 != null && _0x2aa061.size) &&
            this._containsRegisteredElement(_0x2aa061, _0x5993d3)) ||
            this._isOwnedBoundaryElement(_0xcc649, _0x5993d3));
  }
  _containsRegisteredElement(_0x34c375, _0xe40770) {
    return [..._0x34c375].some(
      (_0x3161e7) => _0x3161e7 === _0xe40770 || _0x3161e7.contains(_0xe40770),
    );
  }
  _isBlockingLease(_0x4fdfa4, _0x39b8e4) {
    var _0x2d08e6;
    return _0x4fdfa4.owner &&
      _0x39b8e4 != null &&
      (_0x2d08e6 = _0x39b8e4.ignoreOwners) != null &&
      _0x2d08e6.includes(_0x4fdfa4.owner)
      ? false
      : this._isBlockingRole(_0x4fdfa4.role);
  }
  _isHostPreservingLease(_0x372ee1, _0x3b2f79) {
    var _0x264c88;
    return _0x372ee1.owner &&
      _0x3b2f79 != null &&
      (_0x264c88 = _0x3b2f79.ignoreOwners) != null &&
      _0x264c88.includes(_0x372ee1.owner)
      ? false
      : _0x372ee1.role !== "runtime";
  }
  _leaseAppliesToHostUnit(_0x5305c0, _0x552d46) {
    return _0x5305c0.hostUnitId == null || _0x5305c0.hostUnitId === _0x552d46;
  }
  _ownedRuntimeFocusAppliesToHost(_0x5e7cbc, _0x3a09fb) {
    let _0x4482e1 = this._runtimeScopes["get"](_0x5e7cbc);
    return (
      !!_0x4482e1 &&
      [..._0x4482e1].some(
        (_0x222cab) =>
          _0x222cab.hostUnitId == null || _0x222cab.hostUnitId === _0x3a09fb,
      )
    );
  }
  _leaseAppliesToChildUnit(_0x396d2a, _0x42b7ab) {
    var _0x3eff77;
    return (
      _0x396d2a.childUnitId === _0x42b7ab ||
      ((_0x3eff77 = _0x396d2a.associatedChildUnitIds) == null
        ? undefined
        : _0x3eff77.includes(_0x42b7ab)) === true
    );
  }
  _ownedEmbedAppliesToChildUnit(_0x5aff9a, _0x38a9c1) {
    if (
      [...(this._runtimeScopes["get"](_0x5aff9a) ?? [])].some(
        (_0x3df6ca) => _0x3df6ca.childUnitId === _0x38a9c1,
      )
    )
      return true;
    let _0x3a51c1 = this._leases["get"](_0x5aff9a);
    return (
      !!_0x3a51c1 &&
      [..._0x3a51c1].some((_0x388201) =>
        this._leaseAppliesToChildUnit(_0x388201, _0x38a9c1),
      )
    );
  }
  _isBlockingRole(_0x58959f) {
    return _0x58959f !== "runtime";
  }
  _getChildSessionPriority(_0x15d051) {
    let _0xc6b8a0 = this._resolveChildSessionMode(_0x15d051);
    return _0xc6b8a0 === "child-fullscreen"
      ? 30
      : _0xc6b8a0 === "child-keyboard"
        ? 20
        : _0xc6b8a0 === "child-tab"
          ? 10
          : 0;
  }
  _resolveChildSessionMode(_0x53e3a6) {
    return _0x53e3a6.sessionMode
      ? _0x53e3a6.sessionMode
      : _0x53e3a6.owner === "fullscreen-runtime"
        ? "child-fullscreen"
        : _0x53e3a6.owner === "stage2-runtime" ||
            _0x53e3a6.owner === "doc-block-stage2-runtime"
          ? "child-keyboard"
          : _0x53e3a6.owner === "tab-peer-runtime"
            ? "child-tab"
            : _0x53e3a6.role === "child-session"
              ? "child-keyboard"
              : "host-passive";
  }
  _isOwnedBoundaryElement(_0x37f2ee, _0x1c1b1f) {
    return _0x1c1b1f.closest("[" + Z + "=\x22" + _0x37f2ee + "\x22]") != null;
  }
  _getOwnedEmbedIdFromTarget(_0x61d7a, _0x39a2cc) {
    let _0x1cfa65 =
        typeof (_0x39a2cc == null ? undefined : _0x39a2cc.composedPath) ==
        "function"
          ? _0x39a2cc.composedPath()
          : undefined,
      _0x171a4e =
        (_0x1cfa65 == null
          ? undefined
          : _0x1cfa65.find(
              (_0x5a93e8) =>
                this._isHTMLElement(_0x5a93e8) &&
                _0x5a93e8.hasAttribute("data-embed-interaction-boundary-owner"),
            )) ??
        (this._isHTMLElement(_0x61d7a)
          ? (_0x61d7a.closest("[data-embed-interaction-boundary-owner]") ??
            undefined)
          : undefined);
    return (
      (_0x171a4e == null
        ? undefined
        : _0x171a4e.getAttribute("data-embed-interaction-boundary-owner")) ??
      this._getOwnedEmbedIdFromEventPoint(_0x39a2cc)
    );
  }
  _getOwnedEmbedIdFromEventPoint(_0x82c4f1) {
    let _0x208b28 = this._getEventClientPoint(_0x82c4f1);
    if (!_0x208b28) return;
    let _0x1e13b4;
    for (let [_0x59d2d5, _0x421fa8] of this._elements)
      for (let _0x101def of _0x421fa8) {
        let _0x4130f5 = _0x101def.getBoundingClientRect();
        if (
          !this._rectContainsPoint(
            _0x4130f5,
            _0x208b28.clientX,
            _0x208b28.clientY,
          )
        )
          continue;
        let _0x20e828 = _0x4130f5.width * _0x4130f5.height;
        (!_0x1e13b4 || _0x20e828 < _0x1e13b4.area) &&
          (_0x1e13b4 = { embedId: _0x59d2d5, area: _0x20e828 });
      }
    return _0x1e13b4 == null ? undefined : _0x1e13b4.embedId;
  }
  _getEventClientPoint(_0x29de3c) {
    let _0x1a6481 = _0x29de3c;
    if (_0x1a6481) {
      if (
        Number.isFinite(_0x1a6481.clientX) &&
        Number.isFinite(_0x1a6481.clientY)
      )
        return { clientX: _0x1a6481.clientX, clientY: _0x1a6481.clientY };
      if (Number.isFinite(_0x1a6481.x) && Number.isFinite(_0x1a6481.y))
        return { clientX: _0x1a6481.x, clientY: _0x1a6481.y };
    }
  }
  _rectContainsPoint(_0xcee826, _0x414211, _0x40f8a1) {
    return (
      _0xcee826.width > 0 &&
      _0xcee826.height > 0 &&
      _0x414211 >= _0xcee826.left &&
      _0x414211 <= _0xcee826.right &&
      _0x40f8a1 >= _0xcee826.top &&
      _0x40f8a1 <= _0xcee826.bottom
    );
  }
  _getActiveOwnedRuntimeFocusInfo() {
    var _0x536037;
    let _0x4d5f34 = this._getAnyActiveElement();
    if (!this._isHTMLElement(_0x4d5f34)) return;
    let _0x1a7c14 = _0x4d5f34.closest("[" + Z + "]");
    if (!_0x1a7c14) return;
    let _0x3e0b47 = _0x1a7c14.getAttribute(Z),
      _0x2282e2 =
        (_0x536037 = _0x4d5f34.closest("[data-embed-runtime-focus-role]")) ==
        null
          ? undefined
          : _0x536037.getAttribute(ws);
    return _0x3e0b47 && this._isRuntimeFocusRole(_0x2282e2)
      ? { embedId: _0x3e0b47, role: _0x2282e2 }
      : undefined;
  }
  _isHTMLElement(_0x3b687e) {
    var _0x35cc82;
    if (!_0x3b687e) return false;
    let _0x135f30 =
      (_0x35cc82 = _0x3b687e.ownerDocument) == null
        ? undefined
        : _0x35cc82.defaultView;
    return _0x135f30
      ? _0x3b687e instanceof _0x135f30.HTMLElement
      : typeof HTMLElement < "u" && _0x3b687e instanceof HTMLElement;
  }
  _isRuntimeFocusRole(_0x39dd59) {
    return (
      _0x39dd59 === "runtime" ||
      _0x39dd59 === "child-session" ||
      _0x39dd59 === "child-editor" ||
      _0x39dd59 === "child-popup" ||
      _0x39dd59 === "floating-menu"
    );
  }
  _getAnyActiveElement() {
    for (let _0x11969e of this._elements["values"]()) {
      var _0x5d3555;
      let _0x39e337 =
        (_0x5d3555 = _0x11969e.values().next().value) == null
          ? undefined
          : _0x5d3555.ownerDocument;
      if (_0x39e337 != null && _0x39e337.activeElement)
        return _0x39e337.activeElement;
    }
    return typeof document > "u" ? null : document.activeElement;
  }
  _getActiveElement(_0x5bc681) {
    var _0x42b5e8;
    let _0x33f3ae = this._elements["get"](_0x5bc681),
      _0x70b266 =
        _0x33f3ae == null ||
        (_0x42b5e8 = _0x33f3ae.values().next().value) == null
          ? undefined
          : _0x42b5e8.ownerDocument;
    return (
      (_0x70b266 == null ? undefined : _0x70b266.activeElement) ??
      (typeof document > "u" ? null : document.activeElement)
    );
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
      (Y(this, "_roots", new Map()),
        Y(this, "_childUnitIds", new Map()),
        Y(this, "_portalObservers", new WeakMap()),
        Y(this, "_closedPortalInputGuards", new WeakSet()),
        Y(this, "_activePortalOwners", new WeakMap()),
        Y(this, "_pendingPortalOwner", undefined));
    }
    registerRoot(_0x808a3b, _0x56fa0f, _0x21f7fe) {
      let _0x55f378 = this._roots["get"](_0x808a3b);
      (_0x55f378 ||
        ((_0x55f378 = new Set()), this._roots["set"](_0x808a3b, _0x55f378)),
        _0x21f7fe && this._childUnitIds["set"](_0x808a3b, _0x21f7fe),
        _0x55f378.add(_0x56fa0f));
      let _0x4ba199 = _0x56fa0f.getAttribute(Z),
        _0x5a9960 = _0x56fa0f.getAttribute(_0x17c133);
      (_0x56fa0f.setAttribute(Z, _0x808a3b),
        _0x21f7fe && _0x56fa0f.setAttribute(_0x17c133, _0x21f7fe));
      let _0x516d0a = this._registerRootPopupDescendantFocusRoles(
          _0x808a3b,
          _0x56fa0f,
        ),
        _0xd708a3 = () =>
          this._claimBodyPortals(_0x808a3b, _0x56fa0f.ownerDocument);
      return (
        _0x56fa0f.addEventListener("pointerdown", _0xd708a3, true),
        _0x56fa0f.addEventListener("mousedown", _0xd708a3, true),
        _0x56fa0f.addEventListener("focusin", _0xd708a3, true),
        _0x11d17f(() => {
          var _0x2b206d;
          (_0x516d0a.dispose(),
            _0x56fa0f.removeEventListener("pointerdown", _0xd708a3, true),
            _0x56fa0f.removeEventListener("mousedown", _0xd708a3, true),
            _0x56fa0f.removeEventListener("focusin", _0xd708a3, true),
            ((_0x2b206d = this._pendingPortalOwner) == null
              ? undefined
              : _0x2b206d.embedId) === _0x808a3b &&
              this._pendingPortalOwner["document"] ===
                _0x56fa0f.ownerDocument &&
              (this._pendingPortalOwner = undefined),
            _0x55f378 == null || _0x55f378.delete(_0x56fa0f),
            _0x55f378 &&
              _0x55f378.size === 0 &&
              (this._roots["delete"](_0x808a3b),
              this._childUnitIds["delete"](_0x808a3b)),
            _0x4ba199 == null
              ? _0x56fa0f.removeAttribute(Z)
              : _0x56fa0f.setAttribute(Z, _0x4ba199),
            _0x5a9960 == null
              ? _0x56fa0f.removeAttribute(_0x17c133)
              : _0x56fa0f.setAttribute(_0x17c133, _0x5a9960));
        })
      );
    }
    _registerRootPopupDescendantFocusRoles(_0x28133a, _0x315a00) {
      let _0x4d7fd6 = _0x315a00.ownerDocument["defaultView"],
        _0x56242c = new Map(),
        _0x17ec55 = new Map(),
        _0x38feb8,
        _0x36e924 = false,
        _0x4dbe18 = (_0x353115) => {
          (_0x56242c.has(_0x353115) ||
            _0x56242c.set(_0x353115, _0x353115.getAttribute(Z)),
            _0x17ec55.has(_0x353115) ||
              _0x17ec55.set(_0x353115, _0x353115.getAttribute(ws)));
        },
        _0x40796c = (_0x4daa4e) => {
          (_0x4dbe18(_0x4daa4e),
            _0x4daa4e.setAttribute(Z, _0x28133a),
            _0x4daa4e.setAttribute(ws, "child-popup"));
        },
        _0x20362c = (_0x26af51) => {
          this._isUniverPortalTreeElement(_0x26af51) &&
            (_0x40796c(_0x26af51),
            _0x26af51.querySelectorAll("*").forEach(_0x40796c));
        },
        _0x23fd27 = (_0x2dc73c) => {
          _0x36e924 ||
            (_0x20362c(_0x2dc73c),
            _0x2dc73c
              .querySelectorAll("*")
              .forEach((_0x2d5e1c) => _0x20362c(_0x2d5e1c)));
        };
      return (
        _0x23fd27(_0x315a00),
        _0x4d7fd6 != null &&
          _0x4d7fd6.MutationObserver &&
          ((_0x38feb8 = new _0x4d7fd6["MutationObserver"]((_0x1029d3) => {
            _0x1029d3.forEach((_0x1ec77a) => {
              _0x1ec77a.addedNodes["forEach"]((_0x240fce) => {
                _0x240fce instanceof _0x4d7fd6.HTMLElement &&
                  _0x23fd27(_0x240fce);
              });
            });
          })),
          _0x38feb8.observe(_0x315a00, { childList: true, subtree: true })),
        _0x11d17f(() => {
          ((_0x36e924 = true),
            _0x38feb8 == null || _0x38feb8.disconnect(),
            _0x56242c.forEach((_0x599538, _0xb825fc) => {
              if (_0x599538 == null) {
                _0xb825fc.removeAttribute(Z);
                return;
              }
              _0xb825fc.setAttribute(Z, _0x599538);
            }),
            _0x17ec55.forEach((_0x22d953, _0x5481b0) => {
              if (_0x22d953 == null) {
                _0x5481b0.removeAttribute(ws);
                return;
              }
              _0x5481b0.setAttribute(ws, _0x22d953);
            }));
        })
      );
    }
    registerOwnedElement(_0x16e9dd, _0x20d8c0) {
      let _0x2d65ec = this._roots["get"](_0x16e9dd);
      (_0x2d65ec ||
        ((_0x2d65ec = new Set()), this._roots["set"](_0x16e9dd, _0x2d65ec)),
        _0x2d65ec.add(_0x20d8c0));
      let _0x101981 = this._markInteractionBoundaryOwnerTree(
        _0x16e9dd,
        _0x20d8c0,
      );
      return _0x11d17f(() => {
        (_0x2d65ec == null || _0x2d65ec.delete(_0x20d8c0),
          _0x2d65ec && _0x2d65ec.size === 0 && this._roots["delete"](_0x16e9dd),
          _0x101981.dispose());
      });
    }
    contains(_0x409024, _0x4c6124, _0x58f83e) {
      let _0x320ea8 =
        typeof (_0x58f83e == null ? undefined : _0x58f83e.composedPath) ==
        "function"
          ? _0x58f83e.composedPath()
          : undefined;
      if (
        _0x320ea8 != null &&
        _0x320ea8.some(
          (_0x2d34ec) =>
            _0x2d34ec instanceof HTMLElement &&
            this._isOwnedElement(_0x409024, _0x2d34ec),
        )
      )
        return true;
      if (!(_0x4c6124 instanceof HTMLElement)) return false;
      if (this._isOwnedElement(_0x409024, _0x4c6124)) return true;
      if (!_0x409024)
        return Array.from(this._roots["values"]()).some((_0x2f59db) =>
          [..._0x2f59db].some(
            (_0x27876f) =>
              _0x27876f.isConnected && _0x27876f.contains(_0x4c6124),
          ),
        );
      let _0x26c949 = this._roots["get"](_0x409024);
      return (
        !!_0x26c949 &&
        [..._0x26c949].some(
          (_0x49c6b6) => _0x49c6b6.isConnected && _0x49c6b6.contains(_0x4c6124),
        )
      );
    }
    hasRecentInteraction(_0x396f91) {
      let _0x323983 = _0x396f91
        ? this._activePortalOwners["get"](_0x396f91)
        : typeof document < "u"
          ? this._activePortalOwners["get"](document)
          : undefined;
      if (_0x323983 != null && _0x323983.length) return true;
      let _0x860d89 = this._pendingPortalOwner;
      return !_0x860d89 || Date.now() > _0x860d89.expiresAt
        ? false
        : !_0x396f91 || _0x860d89.document === _0x396f91;
    }
    hasRecentInteractionFor(_0x214624, _0x5338ba) {
      if (!_0x214624) return false;
      let _0x17215e = _0x5338ba
        ? this._activePortalOwners["get"](_0x5338ba)
        : typeof document < "u"
          ? this._activePortalOwners["get"](document)
          : undefined;
      if (
        _0x17215e != null &&
        _0x17215e.some((_0x12010b) => _0x12010b.embedId === _0x214624)
      )
        return true;
      let _0x1317d5 = this._pendingPortalOwner;
      return !_0x1317d5 ||
        _0x1317d5.embedId !== _0x214624 ||
        Date.now() > _0x1317d5.expiresAt
        ? false
        : !_0x5338ba || _0x1317d5.document === _0x5338ba;
    }
    closeOwnedFloatingSurfaces(_0x507118, _0x5763cb) {
      !_0x507118 ||
        !(_0x5763cb != null && _0x5763cb.body) ||
        this._collectOwnedFloatingSurfaceRoots(_0x507118, _0x5763cb).forEach(
          (_0x39f13c) =>
            this._dispatchEscapeToFloatingSurface(_0x39f13c, _0x5763cb),
        );
    }
    activatePortalScope(_0x3ac20d, _0x50fcc0, _0x5538a9 = {}) {
      var _0x41a5b0;
      if (!(_0x50fcc0 != null && _0x50fcc0.body)) return _0x11d17f(() => {});
      let _0x3692b0 = Symbol(_0x3ac20d),
        _0x483638 = this._activePortalOwners["get"](_0x50fcc0) ?? [],
        _0x194c7f = _0x5538a9.includeAppShellEditorPortal ?? true;
      return (
        _0x483638.push({
          embedId: _0x3ac20d,
          includeAppShellEditorPortal: _0x194c7f,
          token: _0x3692b0,
        }),
        this._activePortalOwners["set"](_0x50fcc0, _0x483638),
        this._ensurePortalObserver(_0x50fcc0),
        this._markExistingBodyPortals(_0x3ac20d, _0x50fcc0, {
          includeAppShellEditorPortal: _0x194c7f,
          allowOwnedPortalReassignment: true,
          allowDirectBodyPortal: false,
        }),
        this._cleanupOrdinaryBodyChromeClaims(_0x3ac20d, _0x50fcc0),
        (_0x41a5b0 = _0x50fcc0.defaultView) == null ||
          _0x41a5b0.setTimeout(() => {
            let _0x2f93b9 = this._getLatestActivePortalOwner(_0x50fcc0);
            (_0x2f93b9 == null ? undefined : _0x2f93b9.embedId) === _0x3ac20d &&
              _0x2f93b9.token === _0x3692b0 &&
              (this._markExistingBodyPortals(_0x3ac20d, _0x50fcc0, {
                includeAppShellEditorPortal: _0x194c7f,
                allowOwnedPortalReassignment: true,
                allowDirectBodyPortal: false,
              }),
              this._cleanupOrdinaryBodyChromeClaims(_0x3ac20d, _0x50fcc0));
          }, 0),
        _0x11d17f(() => {
          let _0x16d85e = this._activePortalOwners["get"](_0x50fcc0),
            _0xc7a774 = false;
          if (_0x16d85e) {
            let _0x30fe1b = _0x16d85e.findIndex(
              (_0x55827a) =>
                _0x55827a.embedId === _0x3ac20d &&
                _0x55827a.token === _0x3692b0,
            );
            (_0x30fe1b >= 0 && _0x16d85e.splice(_0x30fe1b, 1),
              (_0xc7a774 = _0x16d85e.some(
                (_0x6757a3) => _0x6757a3.embedId === _0x3ac20d,
              )),
              _0x16d85e.length === 0 &&
                this._activePortalOwners["delete"](_0x50fcc0));
          }
          _0xc7a774 || this._releaseBodyPortalClaims(_0x3ac20d, _0x50fcc0);
          let _0x343e66 = this._getLatestActivePortalOwner(_0x50fcc0);
          _0x343e66 &&
            (this._markExistingBodyPortals(_0x343e66.embedId, _0x50fcc0, {
              includeAppShellEditorPortal:
                _0x343e66.includeAppShellEditorPortal,
              allowOwnedPortalReassignment: true,
              allowDirectBodyPortal: false,
            }),
            this._cleanupOrdinaryBodyChromeClaims(
              _0x343e66.embedId,
              _0x50fcc0,
            ));
        })
      );
    }
    _collectOwnedFloatingSurfaceRoots(_0x572cd4, _0x167d45) {
      var _0x18add5;
      let _0x208db1 = new Set(),
        _0x32ad5d = (_0x3916e1) => {
          let _0x442604 = this._resolveFloatingSurfaceRoot(_0x3916e1);
          !_0x442604 ||
            !this._isOwnedElement(_0x572cd4, _0x442604) ||
            _0x208db1.add(_0x442604);
        };
      return (
        _0x167d45.body["querySelectorAll"](
          "[" + Z + "=\x22" + _0x572cd4 + "\x22]",
        ).forEach(_0x32ad5d),
        (_0x18add5 = this._roots["get"](_0x572cd4)) == null ||
          _0x18add5.forEach((_0x257465) => {
            _0x257465.isConnected &&
              (_0x32ad5d(_0x257465),
              _0x257465.querySelectorAll("*").forEach(_0x32ad5d));
          }),
        [..._0x208db1].sort((_0x48ca6b, _0x14a5f9) =>
          _0x48ca6b.contains(_0x14a5f9)
            ? 1
            : _0x14a5f9.contains(_0x48ca6b)
              ? -1
              : 0,
        )
      );
    }
    _resolveFloatingSurfaceRoot(_0x55425f) {
      if (
        !_0x55425f.closest(
          '[data-embed-floating-menu="true"], [data-embed-floating-menu-popup="true"]',
        ) &&
        this._isUniverPortalTreeElement(_0x55425f)
      )
        return (
          _0x55425f.closest(
            '.univer-popup, .univer-popover, .univer-dropdown, [data-radix-popper-content-wrapper], [data-u-comp="rect-popup"], [role="dialog"], [role="listbox"], [role="menu"], [role="tooltip"]',
          ) ?? _0x55425f
        );
    }
    _dispatchEscapeToFloatingSurface(_0x512f36, _0x21d4e0) {
      let _0xb4e4da = _0x21d4e0.defaultView,
        _0x2050d0 =
          _0x21d4e0.activeElement instanceof HTMLElement &&
          _0x512f36.contains(_0x21d4e0.activeElement)
            ? _0x21d4e0.activeElement
            : _0x512f36,
        _0x14e452 =
          _0xb4e4da != null && _0xb4e4da.KeyboardEvent
            ? new _0xb4e4da["KeyboardEvent"]("keydown", {
                key: "Escape",
                code: "Escape",
                bubbles: true,
                cancelable: true,
              })
            : new Event("keydown", { bubbles: true, cancelable: true });
      _0x2050d0.dispatchEvent(_0x14e452);
    }
    _isOwnedElement(_0x375cd9, _0x55c3a3) {
      let _0x1a4c87 = _0x55c3a3.closest("[" + Z + "]"),
        _0x98a66e = _0x1a4c87 == null ? undefined : _0x1a4c87.getAttribute(Z);
      if (_0x98a66e && (!_0x375cd9 || _0x98a66e === _0x375cd9)) return true;
      if (!_0x375cd9)
        return Array.from(this._roots["values"]()).some((_0xc25bc8) =>
          [..._0xc25bc8].some(
            (_0x32ecc0) =>
              _0x32ecc0 === _0x55c3a3 || _0x32ecc0.contains(_0x55c3a3),
          ),
        );
      let _0x42a2c0 = this._roots["get"](_0x375cd9);
      return (
        !!_0x42a2c0 &&
        [..._0x42a2c0].some(
          (_0x57e5f4) =>
            _0x57e5f4 === _0x55c3a3 || _0x57e5f4.contains(_0x55c3a3),
        )
      );
    }
    _claimBodyPortals(_0x52ca76, _0x379060) {
      var _0x3ec398;
      _0x379060 != null &&
        _0x379060.body &&
        ((this._pendingPortalOwner = {
          embedId: _0x52ca76,
          document: _0x379060,
          expiresAt: Date.now() + 1000,
        }),
        this._ensurePortalObserver(_0x379060),
        this._markExistingBodyPortals(_0x52ca76, _0x379060, {
          includeAppShellEditorPortal: false,
        }),
        (_0x3ec398 = _0x379060.defaultView) == null ||
          _0x3ec398.setTimeout(() => {
            let _0x7d24e2 = this._pendingPortalOwner;
            (_0x7d24e2 == null ? undefined : _0x7d24e2.embedId) === _0x52ca76 &&
              _0x7d24e2.document === _0x379060 &&
              Date.now() <= _0x7d24e2.expiresAt &&
              this._markExistingBodyPortals(_0x52ca76, _0x379060, {
                includeAppShellEditorPortal: false,
              });
          }, 0));
    }
    _ensurePortalObserver(_0xe9a9c0) {
      if (this._portalObservers["has"](_0xe9a9c0) || !_0xe9a9c0.body) return;
      let _0x2d2432 = _0xe9a9c0.defaultView;
      if (!(_0x2d2432 != null && _0x2d2432.MutationObserver)) return;
      let _0x336358 = new _0x2d2432["MutationObserver"]((_0x13d346) => {
        let _0x554fa4 = this._getBodyPortalOwner(_0xe9a9c0);
        if (!_0x554fa4) return;
        let _0x3a3801 = {
          includeAppShellEditorPortal: _0x554fa4.includeAppShellEditorPortal,
          allowOwnedPortalReassignment: _0x554fa4.stable,
          allowDirectBodyPortal: !_0x554fa4.stable,
        };
        (_0x13d346.forEach((_0x4fe8da) => {
          (_0x4fe8da.type === "attributes" &&
            _0x4fe8da.target instanceof _0x2d2432.HTMLElement &&
            (this._markBodyPortalOwner(
              _0x4fe8da.target,
              _0x554fa4.embedId,
              _0xe9a9c0,
              _0x3a3801,
            ),
            _0x4fe8da.attributeName === "data-state" &&
              this._syncClosedPortalInputGuard(
                _0x4fe8da.target,
                _0x554fa4.embedId,
              )),
            _0x4fe8da.addedNodes["forEach"]((_0x3d68ca) => {
              _0x3d68ca instanceof _0x2d2432.HTMLElement &&
                (this._markBodyPortalOwner(
                  _0x3d68ca,
                  _0x554fa4.embedId,
                  _0xe9a9c0,
                  _0x3a3801,
                ),
                _0x3d68ca.querySelectorAll("*").forEach((_0xe62817) => {
                  this._markBodyPortalOwner(
                    _0xe62817,
                    _0x554fa4.embedId,
                    _0xe9a9c0,
                    _0x3a3801,
                  );
                }),
                _0x3d68ca.hasAttribute("data-state") &&
                  this._syncClosedPortalInputGuard(
                    _0x3d68ca,
                    _0x554fa4.embedId,
                  ),
                _0x3d68ca
                  .querySelectorAll("[data-state]")
                  .forEach((_0x4d65b3) => {
                    this._syncClosedPortalInputGuard(
                      _0x4d65b3,
                      _0x554fa4.embedId,
                    );
                  }));
            }));
        }),
          _0x554fa4.stable &&
            this._cleanupOrdinaryBodyChromeClaims(
              _0x554fa4.embedId,
              _0xe9a9c0,
            ));
      });
      (_0x336358.observe(_0xe9a9c0.body, {
        attributeFilter: [
          "class",
          "data-state",
          "data-u-comp",
          "id",
          "role",
          "style",
        ],
        attributes: true,
        childList: true,
        subtree: true,
      }),
        _0x336358.takeRecords(),
        this._portalObservers["set"](_0xe9a9c0, _0x336358));
    }
    _markBodyPortalOwner(_0x28b336, _0x3dd1d2, _0x2729e7, _0x327412 = {}) {
      (_0x327412.allowDirectBodyPortal === false &&
        _0x28b336.parentElement === _0x2729e7.body &&
        !this._isUniverPortalCandidate(_0x28b336) &&
        !this._isAppShellEditorPortalCandidate(_0x28b336)) ||
        (this._isBodyPortalCandidate(_0x28b336, _0x2729e7, _0x327412) &&
          ((!this._isAppShellEditorPortalCandidate(_0x28b336) &&
            this._isDetachedOffscreenPortalCandidate(_0x28b336, _0x2729e7)) ||
            (this._blurActiveElementBeforePortalReassignment(
              _0x28b336,
              _0x3dd1d2,
              _0x2729e7,
            ),
            this._markInteractionBoundaryOwnerTree(_0x3dd1d2, _0x28b336, {
              transient: true,
            }),
            this._markRuntimeFocusRole(_0x28b336, _0x327412))));
    }
    _markExistingBodyPortals(_0x30a4fc, _0x4ea1b1, _0x428ffa = {}) {
      _0x4ea1b1.body["querySelectorAll"]("*").forEach((_0x43be26) => {
        this._markBodyPortalOwner(_0x43be26, _0x30a4fc, _0x4ea1b1, {
          includeAppShellEditorPortal: _0x428ffa.includeAppShellEditorPortal,
          allowOwnedPortalReassignment: _0x428ffa.allowOwnedPortalReassignment,
          allowDirectBodyPortal: _0x428ffa.allowDirectBodyPortal,
        });
      });
    }
    _isBodyPortalCandidate(_0xce516, _0x21a3d8, _0x5f418a = {}) {
      if (!_0x21a3d8.body["contains"](_0xce516)) return false;
      let _0x374a7e =
          !!_0x5f418a.includeAppShellEditorPortal &&
          this._isAppShellEditorPortalCandidate(_0xce516),
        _0x127c98 = this._isUniverPortalCandidate(_0xce516);
      if (
        (!_0x5f418a.allowOwnedPortalReassignment &&
          !_0x374a7e &&
          _0xce516.closest("[data-embed-interaction-boundary-owner]")) ||
        _0xce516.id === "app"
      )
        return false;
      let _0x56254a = _0xce516.parentElement;
      return (
        (!!_0x5f418a.allowDirectBodyPortal && _0x56254a === _0x21a3d8.body) ||
        (_0x56254a == null
          ? undefined
          : _0x56254a.closest("[data-radix-popper-content-wrapper]")) != null ||
        _0x127c98 ||
        _0x374a7e
      );
    }
    _isAppShellEditorPortalCandidate(_0x444304) {
      var _0x3f4ea7, _0xe99845;
      return ((_0x3f4ea7 = _0x444304.parentElement) == null
        ? undefined
        : _0x3f4ea7.id) !== "app" &&
        ((_0xe99845 = _0x444304.closest("#app")) == null
          ? undefined
          : _0xe99845.parentElement) !== _0x444304.ownerDocument["body"]
        ? false
        : _0x444304.id["startsWith"](
            "univer-doc-selection-container-__INTERNAL_EDITOR__",
          ) ||
            _0x444304.id["startsWith"]("__editor___INTERNAL_EDITOR__") ||
            _0x444304.closest(
              '[id^="univer-doc-selection-container-__INTERNAL_EDITOR__"]',
            ) != null ||
            _0x444304.closest('[id^="__editor___INTERNAL_EDITOR__"]') != null;
    }
    _isHostDocEditorPortal(_0x2aa214) {
      return (
        _0x2aa214.id["startsWith"]("__editor_docs-") ||
        _0x2aa214.id["startsWith"]("univer-doc-selection-container-docs-") ||
        _0x2aa214.closest('[id^="univer-doc-selection-container-docs-"]') !=
          null ||
        _0x2aa214.closest('[id^="__editor_docs-"]') != null
      );
    }
    _isUniverPortalCandidate(_0x2ed023) {
      let _0x4d6512 =
        typeof _0x2ed023.className == "string" ? _0x2ed023.className : "";
      if (
        _0x2ed023.getAttribute("data-u-comp") === "rect-popup" ||
        _0x2ed023.classList["contains"]("univer-popup") ||
        _0x2ed023.classList["contains"]("univer-popover") ||
        _0x2ed023.classList["contains"]("univer-dropdown") ||
        /\buniver-(popup|popover|dropdown|calendar|tooltip|menu)\b/["test"](
          _0x4d6512,
        )
      )
        return true;
      let _0x356a36 = _0x2ed023.getAttribute("role");
      return (
        _0x356a36 === "dialog" ||
        _0x356a36 === "listbox" ||
        _0x356a36 === "menu" ||
        _0x356a36 === "tooltip" ||
        _0x2ed023.hasAttribute("data-radix-popper-content-wrapper")
      );
    }
    _isDetachedOffscreenPortalCandidate(_0xa00253, _0x340c2f) {
      if (!this._isUniverPortalTreeElement(_0xa00253)) return false;
      let _0x4ee557 =
          _0xa00253.closest(
            '.univer-popup, .univer-popover, .univer-dropdown, [data-radix-popper-content-wrapper], [data-u-comp="rect-popup"], [role="dialog"], [role="listbox"], [role="menu"], [role="tooltip"]',
          ) ?? _0xa00253,
        _0xd74d4 = _0x4ee557.closest("#app") ?? _0x4ee557.parentElement;
      if (
        _0x4ee557.parentElement !== _0x340c2f.body &&
        (_0xd74d4 == null ? undefined : _0xd74d4.parentElement) !==
          _0x340c2f.body
      )
        return false;
      let _0x191769 = _0x340c2f.defaultView;
      if (!_0x191769) return false;
      let _0x31718f = _0x4ee557.getBoundingClientRect();
      return _0x31718f.right < 0 ||
        _0x31718f.bottom < 0 ||
        _0x31718f.left > _0x191769.innerWidth ||
        _0x31718f.top > _0x191769.innerHeight
        ? true
        : _0x31718f.width <= 0 || _0x31718f.height <= 0
          ? _0x31718f.left < 0 ||
            _0x31718f.top < 0 ||
            _0x31718f.left > _0x191769.innerWidth ||
            _0x31718f.top > _0x191769.innerHeight
          : false;
    }
    _markRuntimeFocusRole(_0x16e6a4, _0x458a8e = {}) {
      let _0x5b9312 =
        _0x458a8e.includeAppShellEditorPortal &&
        this._isAppShellEditorPortalCandidate(_0x16e6a4)
          ? "child-editor"
          : this._isUniverPortalTreeElement(_0x16e6a4)
            ? "child-popup"
            : undefined;
      _0x5b9312 &&
        (_0x16e6a4.setAttribute(ws, _0x5b9312),
        _0x16e6a4.querySelectorAll("*").forEach((_0xea1894) => {
          _0xea1894.setAttribute(ws, _0x5b9312);
        }));
    }
    _syncClosedPortalInputGuard(_0x5d5019, _0x36f6e7) {
      let _0x1753a9 =
          this._isUniverPortalCandidate(_0x5d5019) ||
          _0x5d5019.closest("[data-radix-popper-content-wrapper]") != null,
        _0x4e2e09 =
          _0x5d5019.getAttribute("data-embed-interaction-boundary-owner") ===
            _0x36f6e7 &&
          _0x5d5019.getAttribute("data-state") === "closed" &&
          _0x1753a9,
        _0x53fde6 =
          _0x5d5019.closest("[data-radix-popper-content-wrapper]") ?? _0x5d5019;
      if (_0x4e2e09) {
        _0x53fde6.classList["contains"](Ts) ||
          (_0x53fde6.classList["add"](Ts),
          this._closedPortalInputGuards["add"](_0x53fde6));
        return;
      }
      this._clearClosedPortalInputGuard(_0x53fde6);
    }
    _clearClosedPortalInputGuard(_0x28c0d7) {
      this._closedPortalInputGuards["has"](_0x28c0d7) &&
        (_0x28c0d7.classList["remove"](Ts),
        this._closedPortalInputGuards["delete"](_0x28c0d7));
    }
    _markInteractionBoundaryOwnerTree(_0x2c6da8, _0x3f15d3, _0x4b5209 = {}) {
      let _0x4c9b9d = new Map(),
        _0x454812 = new Map(),
        _0x4b3d4e = this._childUnitIds["get"](_0x2c6da8),
        _0x33dfe5 = (_0x55aa86) => {
          (_0x4b5209.transient ||
            (_0x4c9b9d.set(_0x55aa86, _0x55aa86.getAttribute(Z)),
            _0x454812.set(_0x55aa86, _0x55aa86.getAttribute(_0x17c133))),
            _0x55aa86.setAttribute(Z, _0x2c6da8),
            _0x4b3d4e && _0x55aa86.setAttribute(_0x17c133, _0x4b3d4e));
        };
      return (
        _0x33dfe5(_0x3f15d3),
        _0x3f15d3.querySelectorAll("*").forEach(_0x33dfe5),
        _0x11d17f(() => {
          (_0x4c9b9d.forEach((_0x41c756, _0x53080f) => {
            if (_0x41c756 == null) {
              _0x53080f.removeAttribute(Z);
              return;
            }
            _0x53080f.setAttribute(Z, _0x41c756);
          }),
            _0x454812.forEach((_0x3f7905, _0x581a65) => {
              if (_0x3f7905 == null) {
                _0x581a65.removeAttribute(_0x17c133);
                return;
              }
              _0x581a65.setAttribute(_0x17c133, _0x3f7905);
            }));
        })
      );
    }
    _isUniverPortalTreeElement(_0x446dec) {
      return (
        this._isUniverPortalCandidate(_0x446dec) ||
        _0x446dec.closest(
          ".univer-popup,\x20.univer-popover,\x20.univer-dropdown,\x20[data-radix-popper-content-wrapper],\x20[data-u-comp=\x22rect-popup\x22],\x20[role=\x22dialog\x22],\x20[role=\x22listbox\x22],\x20[role=\x22menu\x22],\x20[role=\x22tooltip\x22]",
        ) != null
      );
    }
    _getBodyPortalOwner(_0x9a9b1b) {
      let _0x21610f = this._getLatestActivePortalOwner(_0x9a9b1b);
      if (_0x21610f)
        return {
          embedId: _0x21610f.embedId,
          includeAppShellEditorPortal: _0x21610f.includeAppShellEditorPortal,
          stable: true,
        };
      let _0x4c06b1 = this._pendingPortalOwner;
      if (
        _0x4c06b1 &&
        _0x4c06b1.document === _0x9a9b1b &&
        Date.now() <= _0x4c06b1.expiresAt
      )
        return {
          embedId: _0x4c06b1.embedId,
          includeAppShellEditorPortal: false,
          stable: false,
        };
    }
    _getLatestActivePortalOwner(_0x29f701) {
      let _0x19f8d1 = this._activePortalOwners["get"](_0x29f701);
      return _0x19f8d1 == null ? undefined : _0x19f8d1[_0x19f8d1.length - 1];
    }
    _cleanupOrdinaryBodyChromeClaims(_0x2c3e0f, _0x30bdf1) {
      let _0x30f982 = this._roots["get"](_0x2c3e0f);
      _0x30bdf1.body["querySelectorAll"](
        "[" + Z + "=\x22" + _0x2c3e0f + "\x22]",
      ).forEach((_0x46ef14) => {
        _0x46ef14.parentElement === _0x30bdf1.body &&
          ((_0x30f982 &&
            [..._0x30f982].some(
              (_0x44f61a) =>
                _0x44f61a === _0x46ef14 || _0x44f61a.contains(_0x46ef14),
            )) ||
            this._isUniverPortalCandidate(_0x46ef14) ||
            this._isAppShellEditorPortalCandidate(_0x46ef14) ||
            (_0x46ef14.removeAttribute(Z),
            _0x46ef14.removeAttribute(_0x17c133)));
      });
    }
    _blurActiveElementBeforePortalReassignment(
      _0x1f3a96,
      _0x3bad26,
      _0x49f9dc,
    ) {
      let _0x449675 = _0x1f3a96.getAttribute(Z);
      if (!_0x449675 || _0x449675 === _0x3bad26) return;
      let _0x382400 = _0x49f9dc.activeElement;
      !(_0x382400 instanceof HTMLElement) ||
        (_0x382400 !== _0x1f3a96 && !_0x1f3a96.contains(_0x382400)) ||
        (_0x382400.blur(),
        _0x49f9dc.activeElement === _0x382400 &&
          this._focusDocumentBody(_0x49f9dc));
    }
    _releaseBodyPortalClaims(_0x1ad603, _0x1bda5a) {
      let _0x4b67e4 = this._roots["get"](_0x1ad603),
        _0x3b3cb4 = _0x1bda5a.body["querySelectorAll"](
          "[" + Z + "=\x22" + _0x1ad603 + "\x22]",
        ),
        _0x55b1b2 = (_0x37ddec) =>
          _0x4b67e4 != null &&
          [..._0x4b67e4].some(
            (_0x52f3a0) =>
              _0x52f3a0 === _0x37ddec || _0x52f3a0.contains(_0x37ddec),
          ),
        _0x457e1c = [];
      _0x3b3cb4.forEach((_0x2b6edd) => {
        _0x55b1b2(_0x2b6edd) ||
          (_0x457e1c.push(_0x2b6edd),
          this._clearClosedPortalInputGuard(_0x2b6edd),
          _0x2b6edd.removeAttribute(Z),
          _0x2b6edd.removeAttribute(_0x17c133),
          this._removeRuntimeFocusRoleTree(_0x2b6edd));
      });
      let _0x574ff9 = _0x1bda5a.activeElement;
      _0x574ff9 instanceof HTMLElement &&
        _0x457e1c.some(
          (_0x4aea27) =>
            _0x4aea27 === _0x574ff9 || _0x4aea27.contains(_0x574ff9),
        ) &&
        (_0x574ff9.blur(),
        _0x1bda5a.activeElement === _0x574ff9 &&
          this._focusDocumentBody(_0x1bda5a));
    }
    _focusDocumentBody(_0x2f270a) {
      let _0x5d1b97 = _0x2f270a.body;
      if (!_0x5d1b97) return;
      let _0x1b8a3b = _0x5d1b97.getAttribute("tabindex");
      (_0x1b8a3b ?? (_0x5d1b97.tabIndex = -1),
        _0x5d1b97.focus({ preventScroll: true }),
        _0x1b8a3b == null
          ? _0x5d1b97.removeAttribute("tabindex")
          : _0x5d1b97.setAttribute("tabindex", _0x1b8a3b),
        _0x2f270a.activeElement !== _0x5d1b97 &&
          this._focusTemporarySink(_0x2f270a));
    }
    _focusTemporarySink(_0x31e5cb) {
      var _0x2eb2ed;
      let _0x3c002d = _0x31e5cb.body;
      if (!_0x3c002d) return;
      let _0x40a555 = _0x31e5cb.createElement("span");
      ((_0x40a555.tabIndex = -1),
        _0x40a555.setAttribute("aria-hidden", "true"),
        (_0x40a555.style["cssText"] =
          "position:fixed;width:0;height:0;overflow:hidden;opacity:0;pointer-events:none;"),
        _0x3c002d.appendChild(_0x40a555),
        _0x40a555.focus({ preventScroll: true }),
        (_0x2eb2ed = _0x31e5cb.defaultView) == null ||
          _0x2eb2ed.setTimeout(() => _0x40a555.remove(), 0));
    }
    _removeRuntimeFocusRoleTree(_0x4c38c5) {
      ((_0x4c38c5.getAttribute("data-embed-runtime-focus-role") ===
        "child-editor" ||
        _0x4c38c5.getAttribute("data-embed-runtime-focus-role") ===
          "child-popup") &&
        _0x4c38c5.removeAttribute(ws),
        _0x4c38c5.querySelectorAll("[" + ws + "]").forEach((_0x13acc8) => {
          let _0x36806e = _0x13acc8.getAttribute(ws);
          (_0x36806e === "child-editor" || _0x36806e === "child-popup") &&
            _0x13acc8.removeAttribute(ws);
        }));
    }
  },
  Ds = class {
    constructor(_0x115fe0 = {}) {
      (Y(this, "_childUnitAncestry", new Map()),
        Y(this, "_maxDepth", undefined),
        (this._maxDepth = Os(_0x115fe0.maxDepth)));
    }
    canMount(_0x385fa2) {
      let _0x32ccfb = this.getAncestryForHostUnit(_0x385fa2.hostUnitId);
      return _0x32ccfb.some(
        (_0x583884) =>
          _0x583884.hostUnitId === _0x385fa2.childUnitId ||
          _0x583884.childUnitId === _0x385fa2.childUnitId,
      )
        ? { allowed: false, reason: "cycle", ancestry: _0x32ccfb }
        : _0x32ccfb.length >= this._maxDepth
          ? { allowed: false, reason: "max-depth", ancestry: _0x32ccfb }
          : { allowed: true, ancestry: _0x32ccfb };
    }
    registerMountedRuntime(_0x324127) {
      let _0x3df50c = [
        ...this.getAncestryForHostUnit(_0x324127.hostUnitId),
        {
          hostUnitId: _0x324127.hostUnitId,
          embedId: _0x324127.embedId,
          childUnitId: _0x324127.childUnitId,
        },
      ];
      return (
        this._childUnitAncestry["set"](_0x324127.childUnitId, _0x3df50c),
        _0x11d17f(() => {
          this._childUnitAncestry["get"](_0x324127.childUnitId) === _0x3df50c &&
            this._childUnitAncestry["delete"](_0x324127.childUnitId);
        })
      );
    }
    getAncestryForHostUnit(_0xc6a829) {
      return this._childUnitAncestry["get"](_0xc6a829) ?? [];
    }
    getParentEmbedId(_0x3f2068) {
      var _0x389870;
      return (_0x389870 =
        this.getAncestryForHostUnit(_0x3f2068).slice(-1)[0]) == null
        ? undefined
        : _0x389870.embedId;
    }
  };
function Os(_0x5df6b5) {
  return typeof _0x5df6b5 == "number" &&
    Number.isFinite(_0x5df6b5) &&
    _0x5df6b5 >= 0
    ? Math.floor(_0x5df6b5)
    : 1;
}
function Q(_0x186cf8, _0x2eb709) {
  return function (_0x54798f, _0x5b3ed5) {
    _0x2eb709(_0x54798f, _0x5b3ed5, _0x186cf8);
  };
}
function $(_0x257207, _0x40cb36, _0x399b6b, _0x38adf4) {
  var _0x176a2d = arguments.length,
    _0x174668 =
      _0x176a2d < 3
        ? _0x40cb36
        : _0x38adf4 === null
          ? (_0x38adf4 = Object.getOwnPropertyDescriptor(_0x40cb36, _0x399b6b))
          : _0x38adf4,
    _0x3f184c;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x174668 = Reflect.decorate(_0x257207, _0x40cb36, _0x399b6b, _0x38adf4);
  else {
    for (var _0x120f0f = _0x257207.length - 1; _0x120f0f >= 0; _0x120f0f--)
      (_0x3f184c = _0x257207[_0x120f0f]) &&
        (_0x174668 =
          (_0x176a2d < 3
            ? _0x3f184c(_0x174668)
            : _0x176a2d > 3
              ? _0x3f184c(_0x40cb36, _0x399b6b, _0x174668)
              : _0x3f184c(_0x40cb36, _0x399b6b)) || _0x174668);
  }
  return (
    _0x176a2d > 3 &&
      _0x174668 &&
      Object.defineProperty(_0x40cb36, _0x399b6b, _0x174668),
    _0x174668
  );
}
let ks = class extends _0x5f3c10 {
  constructor(_0x2e60b9) {
    (super(),
      (this._runtimeScopeService = _0x2e60b9),
      Y(this, "_entries", new Map()));
  }
  acquire(_0x3624e9) {
    let _0x2a11ea = this._entries["get"](_0x3624e9.unitId);
    if (!_0x2a11ea) {
      let _0x2c736e = [],
        _0xc6b076 = {
          unitId: _0x3624e9.unitId,
          has: (_0x3110c0) => {
            var _0x3ac26b;
            return (
              ((_0x3ac26b = _0x2c736e[_0x2c736e.length - 1]) == null
                ? undefined
                : _0x3ac26b.has(_0x3110c0)) ?? false
            );
          },
          get: (_0x321a3b) => {
            let _0x9907e3 = _0x2c736e[_0x2c736e.length - 1];
            if (!_0x9907e3)
              throw Error(
                "EMBED_UI_RUNTIME_SCOPE_NOT_ACTIVE:" + _0x3624e9.unitId,
              );
            return _0x9907e3.get(_0x321a3b);
          },
        };
      ((_0x2a11ea = {
        registration: this._runtimeScopeService["register"](_0xc6b076),
        scopes: _0x2c736e,
      }),
        this._entries["set"](_0x3624e9.unitId, _0x2a11ea));
    }
    let _0x36b9bd = _0x2a11ea;
    return (
      _0x36b9bd.scopes["push"](_0x3624e9),
      _0x11d17f(() => {
        let _0x248303 = _0x36b9bd.scopes["lastIndexOf"](_0x3624e9);
        _0x248303 < 0 ||
          (_0x36b9bd.scopes["splice"](_0x248303, 1),
          !(
            _0x36b9bd.scopes["length"] > 0 ||
            this._entries["get"](_0x3624e9.unitId) !== _0x36b9bd
          ) &&
            (_0x36b9bd.registration["dispose"](),
            this._entries["delete"](_0x3624e9.unitId)));
      })
    );
  }
  dispose() {
    (this._entries["forEach"](({ registration: _0x36f2ce }) =>
      _0x36f2ce.dispose(),
    ),
      this._entries["clear"](),
      super.dispose());
  }
};
ks = $([Q(0, _0x2a7907)], ks);
const As = new Set([
    "identifier:univer.menu-manager-service",
    "identifier:univer.ribbon-service",
    "identifier:ui.contextmenu.service",
    "identifier:ui.popup.service",
    "identifier:ui.sidebar.service",
    "identifier:ui.layout-service",
    "identifier:univer.sheet.selection-render-service",
  ]),
  js = "FOCUSING_BASE",
  Ms = [
    _0x22a7dd,
    _0x26d9bc,
    _0x1d103b,
    _0x55448b,
    _0x54742f,
    _0x3a4db3,
    js,
    _0x8e415a,
    _0x4b85c3,
    _0x33be87,
  ],
  Ns = new Set([
    _0x4ca442.id,
    _0x26a335.id,
    _0x8f7b46.id,
    _0xbadd6f.id,
    _0x4ce5de.id,
  ]),
  Ps = new Set([
    "docs-exchange-client.operation.import-doc",
    "sheets-exchange-client.operation.import-sheet",
    "slides-exchange-client.operation.import-slide",
    "bases-exchange-client.operation.import-base",
    "boards-exchange-client.operation.insert-mermaid",
  ]);
function Fs(_0xc8df0a, _0x44efa8 = []) {
  let _0x26fa19 = _0xc8df0a.injector["get"](_0x3e617f),
    _0x553794 = _0x26fa19.getUnit(_0xc8df0a.childUnitId, _0xc8df0a.childType);
  if (!_0x553794) return;
  let _0x2a8ea4 = Rs(
      _0x26fa19,
      _0xc8df0a,
      _0x553794,
      new _0x2ac10f(_0x553794),
      new _0x2ac10f(
        _0xc8df0a.renderScope["mode"] === "float" &&
          !_0xc8df0a.renderScope["fullscreen"]
          ? null
          : _0x553794.getUnitId(),
      ),
    ),
    _0x4dcc99 = Qs(_0xc8df0a.injector, _0xc8df0a.childType),
    _0x32bac9 = Xs(_0xc8df0a),
    _0x116468 = Bs(
      _0xc8df0a.injector["get"](_0x42e186),
      _0xc8df0a,
      _0x26fa19,
      _0x32bac9,
      _0x4dcc99,
    ),
    _0xfddf82 = new Map([
      [_0x3e617f, _0x2a8ea4],
      [_0x42e186, _0x116468],
    ]);
  (_0xc8df0a.childType === _0x513c12.UNIVER_DOC &&
    _0xc8df0a.injector["has"](_0x580746) &&
    _0xfddf82.set(
      _0x580746,
      Is(
        _0xc8df0a.injector["get"](_0x580746),
        _0x26fa19,
        _0xc8df0a.childUnitId,
      ),
    ),
    _0xc8df0a.injector["has"](_0x405ebf) &&
      _0xfddf82.set(_0x405ebf, rc(_0xc8df0a.injector["get"](_0x405ebf))));
  let _0x5b01f2 = [];
  (_0xc8df0a.injector["has"](Ds) &&
    _0xfddf82.set(Ds, _0xc8df0a.injector["get"](Ds)),
    _0x4dcc99 && _0xfddf82.set(_0x113203, _0x4dcc99));
  let _0x59f83b = ac(_0xc8df0a.injector, _0xfddf82);
  _0x44efa8.forEach((_0x40fd8a) => _0x59f83b.add(_0x40fd8a));
  let _0x8292b5 = wc(_0xc8df0a.injector, _0x59f83b);
  if (_0x8292b5) {
    _0x59f83b.add([_0x713ac8, { useValue: _0x8292b5 }]);
    let _0x3fb8ba = new _0x27f2f4(_0x8292b5, _0x2a8ea4);
    (_0x59f83b.add([_0x356c5a, { useValue: _0x3fb8ba }]),
      _0x5b01f2.push(_0x3fb8ba));
  }
  if (_0xc8df0a.renderScope["fullscreen"]) {
    let _0x13ee7a = Oc(_0x59f83b, _0xc8df0a.childUnitId),
      _0xbd8c12 = new _0x5e7693(),
      _0x4785fa = new _0x4b2ef5();
    (_0x59f83b.add([_0x441a50, { useValue: _0x13ee7a }]),
      _0x59f83b.add([_0x2c77a8, { useValue: _0xbd8c12 }]),
      _0x59f83b.add([_0x319228, { useValue: _0x4785fa }]),
      _0x5b01f2.push(_0x13ee7a, _0xbd8c12, _0x4785fa));
  } else {
    let _0x5f073a = Dc(_0xc8df0a.injector, _0x59f83b, _0xc8df0a.childUnitId);
    _0x5f073a && _0x59f83b.add([_0x441a50, { useValue: _0x5f073a }]);
  }
  let _0x221403 = kc(_0xc8df0a.injector, _0xc8df0a);
  _0x59f83b.add([_0x1cdf34, { useValue: _0x221403 }]);
  let _0x4d4f43 = {
    unitId: _0xc8df0a.childUnitId,
    has: (_0x4fe5af) => _0x59f83b.has(_0x4fe5af),
    get: (_0x405cf1) => _0x59f83b.get(_0x405cf1),
  };
  if (
    (_0xc8df0a.injector["has"](ks)
      ? _0x5b01f2.push(_0xc8df0a.injector["get"](ks).acquire(_0x4d4f43))
      : _0xc8df0a.injector["has"](_0x2a7907) &&
        _0x5b01f2.push(
          _0xc8df0a.injector["get"](_0x2a7907).register(_0x4d4f43),
        ),
    _0x5b01f2.length)
  ) {
    let _0x4a101c = _0x59f83b.dispose["bind"](_0x59f83b),
      _0x249395 = false;
    _0x59f83b.dispose = () => {
      _0x249395 ||
        ((_0x249395 = true),
        _0x5b01f2.forEach((_0x29dd23) => _0x29dd23.dispose()),
        _0x4a101c());
    };
  }
  return _0x59f83b;
}
function Is(_0x501633, _0x33edef, _0x2b0d36) {
  let _0xb1831b = async (_0x19b1c5) => {
    let _0x590041 = _0x33edef.getCurrentUnitOfType(_0x513c12.UNIVER_DOC);
    _0x33edef.setCurrentUnitForType(_0x2b0d36);
    try {
      return await _0x19b1c5();
    } finally {
      Hs(_0x33edef, _0x590041);
    }
  };
  return {
    addClipboardHook: _0x501633.addClipboardHook["bind"](_0x501633),
    copy: (..._0x45e83c) => _0xb1831b(() => _0x501633.copy(..._0x45e83c)),
    cut: (..._0x4c756e) => _0xb1831b(() => _0x501633.cut(..._0x4c756e)),
    legacyPaste: (..._0x58c2e0) =>
      _0xb1831b(() => _0x501633.legacyPaste(..._0x58c2e0)),
    paste: (..._0x518a23) => _0xb1831b(() => _0x501633.paste(..._0x518a23)),
  };
}
function Ls(_0x414aca, _0x67222b) {
  if (!_0x414aca.has(_0x405ebf)) return;
  let _0xbb7d61 = _0x414aca.get(_0x405ebf);
  return ac(_0x414aca, new Map([[_0x405ebf, nc(_0xbb7d61, _0x67222b)]]));
}
function Rs(_0xa93867, _0x287f68, _0x2a537d, _0x714574, _0x9791ad) {
  return {
    unitAdded$: _0xa93867.unitAdded$,
    getTypeOfUnitAdded$: (..._0x421743) =>
      _0xa93867.getTypeOfUnitAdded$(..._0x421743),
    __addUnit: (..._0x587fbf) => _0xa93867.__addUnit(..._0x587fbf),
    unitDisposed$: _0xa93867.unitDisposed$,
    getTypeOfUnitDisposed$: (..._0x413b8e) =>
      _0xa93867.getTypeOfUnitDisposed$(..._0x413b8e),
    focused$: _0x9791ad.asObservable(),
    focusUnit: (_0x594de1) => {
      if (_0x594de1 === null || zs(_0x287f68, _0x594de1)) {
        _0x9791ad.getValue() !== _0x594de1 && _0x9791ad.next(_0x594de1);
        return;
      }
      _0xa93867.focusUnit(_0x594de1);
    },
    getFocusedUnit: () => {
      let _0x38b248 = _0x9791ad.getValue();
      return _0x38b248 === null
        ? null
        : _0x38b248 === _0x287f68.childUnitId
          ? _0x2a537d
          : _0x45fbbf(_0x38b248)
            ? (_0xa93867.getUnit(_0x38b248) ?? _0x2a537d)
            : _0xa93867.getFocusedUnit();
    },
    getCurrentUnitOfType: (_0x5062e7) =>
      _0x5062e7 === _0x287f68.childType
        ? _0x714574.getValue()
        : _0xa93867.getCurrentUnitOfType(_0x5062e7),
    setCurrentUnitForType: (_0x12aed9) => {
      if (zs(_0x287f68, _0x12aed9)) {
        _0x714574.getValue() !== _0x2a537d && _0x714574.next(_0x2a537d);
        return;
      }
      _0xa93867.setCurrentUnitForType(_0x12aed9);
    },
    getCurrentTypeOfUnit$: (_0xdd8a39) =>
      _0xdd8a39 === _0x287f68.childType
        ? _0x714574.asObservable()
        : _0xa93867.getCurrentTypeOfUnit$(_0xdd8a39),
    createUnit: (..._0x19ffda) => _0xa93867.createUnit(..._0x19ffda),
    getUnitCreateOptions: (..._0x4aac7f) =>
      _0xa93867.getUnitCreateOptions(..._0x4aac7f),
    disposeUnit: (..._0x3acec1) => _0xa93867.disposeUnit(..._0x3acec1),
    registerCtorForType: (..._0x1b1e58) =>
      _0xa93867.registerCtorForType(..._0x1b1e58),
    getUnit: (..._0x1d1c4a) => _0xa93867.getUnit(..._0x1d1c4a),
    getAllUnitsForType: (..._0x474de4) =>
      _0xa93867.getAllUnitsForType(..._0x474de4),
    getUnitType: (..._0x148b3a) => _0xa93867.getUnitType(..._0x148b3a),
    dispose: () => {},
  };
}
function zs(_0x9e8c0a, _0x2531e7) {
  return _0x2531e7 === _0x9e8c0a.childUnitId || _0x45fbbf(_0x2531e7);
}
function Bs(_0x344806, _0xaa3122, _0x452b21, _0x5ac00d, _0x2db3c5) {
  let _0x29443d = _0xaa3122.injector["has"](_0x113203)
    ? _0xaa3122.injector["get"](_0x113203)
    : undefined;
  return {
    disposed: () => _0x344806.disposed(),
    hasCommand: (_0xa06fcb) => _0x344806.hasCommand(_0xa06fcb),
    registerCommand: (_0x4f8446) => _0x344806.registerCommand(_0x4f8446),
    unregisterCommand: (_0x2c5ade) => _0x344806.unregisterCommand(_0x2c5ade),
    registerMultipleCommand: (_0x54a98b) =>
      _0x344806.registerMultipleCommand(_0x54a98b),
    executeCommand: async (_0x3f84ab, _0xfb3d4b, _0x17b4ef) => {
      var _0x3922e0;
      let _0x44a423 = () =>
          Vs(_0x3f84ab, _0x29443d, _0x2db3c5, () =>
            _0x344806.executeCommand(
              _0x3f84ab,
              ic(_0xaa3122, _0x3f84ab, _0xfb3d4b),
              Us(_0xaa3122.childType, _0xaa3122.childUnitId, _0x17b4ef),
            ),
          ),
        _0x358370 =
          Js(_0xaa3122) &&
          !Ws(_0x3f84ab) &&
          (!_0xaa3122.renderScope["fullscreen"] || !Ys(_0x3f84ab)),
        _0x3325e5 = _0x5ac00d || Ws(_0x3f84ab) || Ys(_0x3f84ab) || _0x358370,
        _0x16af5f = _0x3325e5 ? Gs() : null;
      if (!_0x3325e5) return await _0x44a423();
      let _0x1f9496 = _0x452b21.getCurrentUnitOfType(_0xaa3122.childType),
        _0x512fe7 =
          ((_0x3922e0 = _0x452b21.getFocusedUnit()) == null
            ? undefined
            : _0x3922e0.getUnitId()) ?? null;
      try {
        (_0x452b21.setCurrentUnitForType(_0xaa3122.childUnitId),
          _0x358370 || _0x452b21.focusUnit(_0xaa3122.childUnitId));
        let _0x3aca1b = _0x44a423();
        return (
          _0x358370 &&
            Ns.has(_0x3f84ab) &&
            Ks(_0xaa3122, _0x16af5f) &&
            qs(_0xaa3122, _0x16af5f),
          await _0x3aca1b
        );
      } finally {
        (Hs(_0x452b21, _0x1f9496),
          _0x358370 || oc(_0xaa3122, _0x452b21, _0x512fe7, _0x5ac00d),
          (!_0x358370 || Ws(_0x3f84ab) || Ys(_0x3f84ab)) &&
            Ks(_0xaa3122, _0x16af5f) &&
            qs(_0xaa3122, _0x16af5f));
      }
    },
    syncExecuteCommand: (_0x37d1ff, _0x3c7c37, _0x29ff49) => {
      var _0x591f1a;
      let _0x10fce5 = () =>
          Vs(_0x37d1ff, _0x29443d, _0x2db3c5, () =>
            _0x344806.syncExecuteCommand(
              _0x37d1ff,
              ic(_0xaa3122, _0x37d1ff, _0x3c7c37),
              Us(_0xaa3122.childType, _0xaa3122.childUnitId, _0x29ff49),
            ),
          ),
        _0x55dba6 =
          Js(_0xaa3122) &&
          !Ws(_0x37d1ff) &&
          (!_0xaa3122.renderScope["fullscreen"] || !Ys(_0x37d1ff)),
        _0x1539b0 = _0x5ac00d || Ws(_0x37d1ff) || Ys(_0x37d1ff) || _0x55dba6,
        _0x2e6b69 = _0x1539b0 ? Gs() : null;
      if (!_0x1539b0) return _0x10fce5();
      let _0x2353b3 = _0x452b21.getCurrentUnitOfType(_0xaa3122.childType),
        _0x278fb9 =
          ((_0x591f1a = _0x452b21.getFocusedUnit()) == null
            ? undefined
            : _0x591f1a.getUnitId()) ?? null;
      try {
        (_0x452b21.setCurrentUnitForType(_0xaa3122.childUnitId),
          _0x55dba6 || _0x452b21.focusUnit(_0xaa3122.childUnitId));
        let _0x3cbeee = _0x10fce5();
        return (
          _0x55dba6 &&
            Ns.has(_0x37d1ff) &&
            Ks(_0xaa3122, _0x2e6b69) &&
            qs(_0xaa3122, _0x2e6b69),
          _0x3cbeee
        );
      } finally {
        (Hs(_0x452b21, _0x2353b3),
          _0x55dba6 || oc(_0xaa3122, _0x452b21, _0x278fb9, _0x5ac00d),
          (!_0x55dba6 || Ws(_0x37d1ff) || Ys(_0x37d1ff)) &&
            Ks(_0xaa3122, _0x2e6b69) &&
            qs(_0xaa3122, _0x2e6b69));
      }
    },
    onCommandExecuted: (_0x10924b) => _0x344806.onCommandExecuted(_0x10924b),
    beforeCommandExecuted: (_0x28d5ab) =>
      _0x344806.beforeCommandExecuted(_0x28d5ab),
    onMutationExecutedForCollab: (_0x134b11) =>
      _0x344806.onMutationExecutedForCollab(_0x134b11),
  };
}
function Vs(_0x516958, _0x48c0ff, _0x3af480, _0x4da81e) {
  if (
    !Ns.has(_0x516958) ||
    !_0x48c0ff ||
    !_0x3af480 ||
    typeof _0x48c0ff.setContextValue != "function" ||
    _0x48c0ff === _0x3af480
  )
    return _0x4da81e();
  let _0x925dfe = [];
  for (let _0x5315d5 of Ms) {
    let _0x361195 = _0x48c0ff.getContextValue(_0x5315d5),
      _0xe83108 = _0x3af480.getContextValue(_0x5315d5);
    _0x361195 !== _0xe83108 &&
      (_0x925dfe.push({ key: _0x5315d5, value: _0x361195 }),
      _0x48c0ff.setContextValue(_0x5315d5, _0xe83108));
  }
  try {
    return _0x4da81e();
  } finally {
    for (let _0x340cae = _0x925dfe.length - 1; _0x340cae >= 0; _0x340cae--) {
      let { key: _0x626758, value: _0x480715 } = _0x925dfe[_0x340cae];
      _0x48c0ff.setContextValue(_0x626758, _0x480715);
    }
  }
}
function Hs(_0x485341, _0x388b18) {
  if (!_0x388b18) return;
  let _0x218917 = _0x388b18.getUnitId();
  _0x485341.getUnit(_0x218917) && _0x485341.setCurrentUnitForType(_0x218917);
}
function Us(_0x255864, _0x1188aa, _0x393957) {
  return _0x255864 === _0x513c12.UNIVER_BOARD
    ? { ..._0x393957, unitId: _0x1188aa }
    : _0x393957;
}
function Ws(_0x108227) {
  return _0x108227 === _0xbadd6f.id || _0x108227 === _0x4ce5de.id;
}
function Gs() {
  return typeof document < "u" && document.activeElement instanceof HTMLElement
    ? document.activeElement
    : null;
}
function Ks(_0x5c89f4, _0xec4d81) {
  if (!_0xec4d81 || _0x5c89f4.childType === _0x513c12.UNIVER_SHEET)
    return _0xec4d81 != null;
  let _0x477d46 = _0xec4d81;
  for (; _0x477d46;) {
    if (
      _0x326912.some(
        (_0x11e928) =>
          (_0x477d46 == null ? undefined : _0x477d46.id) ===
            "__editor_" + _0x11e928 ||
          (_0x477d46 == null ? undefined : _0x477d46.id) ===
            "univer-doc-selection-container-" + _0x11e928,
      )
    )
      return false;
    _0x477d46 = _0x477d46.parentElement;
  }
  return true;
}
function qs(_0x417310, _0x1c0f1e) {
  var _0x4bd2fd;
  let _0x3091da = () => {
    let _0x1f94e2 =
        _0x417310.renderScope["contentRoot"] ??
        _0x417310.renderScope["rootElement"],
      _0xd9823c =
        _0x1c0f1e != null && _0x1c0f1e.isConnected
          ? _0x1c0f1e
          : (_0x1f94e2.querySelector("canvas") ?? _0x1f94e2);
    !_0xd9823c.isConnected ||
      _0xd9823c.ownerDocument["activeElement"] === _0xd9823c ||
      (_0xd9823c.hasAttribute("tabindex") || (_0xd9823c.tabIndex = -1),
      _0xd9823c.focus({ preventScroll: true }));
  };
  (_0x3091da(),
    (_0x4bd2fd =
      _0x417310.renderScope["rootElement"].ownerDocument["defaultView"]) ==
      null || _0x4bd2fd.requestAnimationFrame(_0x3091da));
}
function Js(_0x1201e4) {
  if (
    _0x1201e4.childType === _0x513c12.UNIVER_BOARD ||
    _0x1201e4.renderScope["mode"] !== "float" ||
    !_0x1201e4.injector["has"](X)
  )
    return false;
  let _0x839fa8 =
    _0x1201e4.injector["get"](X).resolveActiveChildSessionRuntimeScope();
  return (
    ((_0x839fa8 == null ? undefined : _0x839fa8.sessionMode) ===
      "child-keyboard" ||
      (_0x839fa8 == null ? undefined : _0x839fa8.sessionMode) ===
        "child-fullscreen") &&
    _0x839fa8.embedId === _0x1201e4.embedId &&
    _0x839fa8.hostUnitId === _0x1201e4.hostUnitId &&
    _0x839fa8.childUnitId === _0x1201e4.childUnitId &&
    _0x839fa8.childType === _0x1201e4.childType
  );
}
function Ys(_0x59ab0a) {
  return _0x59ab0a === _0x4b7a57.id;
}
function Xs(_0x3376ee) {
  return _0x3376ee.renderScope["fullscreen"] ||
    _0x3376ee.descriptor["entry"] === "docs-custom-block"
    ? true
    : Zs(_0x3376ee);
}
function Zs(_0x4a406a) {
  var _0xc0baa2;
  return (
    _0x4a406a.descriptor["entry"] === "sheets-sheet-tab" ||
    _0x4a406a.descriptor["entry"] === "bases-table-list-block" ||
    _0x4a406a.descriptor["entry"] === "slides-page-list-block" ||
    _0x4a406a.layout === "tab-peer" ||
    !!(
      (_0xc0baa2 = _0x4a406a.descriptor["sourceMeta"]) != null && _0xc0baa2.tab
    )
  );
}
function Qs(_0x28ea72, _0x3adbfc) {
  if (!_0x28ea72.has(_0x113203)) return;
  let _0x28da60 = _0x28ea72.get(_0x113203),
    _0x229481 = $s(_0x3adbfc),
    _0x561610 = new _0x442c37();
  return {
    contextChanged$: _0x4165fb(
      (_0x28da60.contextChanged$ ?? _0xab1a03).pipe(
        _0xbab8f3((_0x592cfd) =>
          Object.fromEntries(
            Object.entries(_0x592cfd).filter(([_0x541e8e]) => !tc(_0x541e8e)),
          ),
        ),
        _0x5407de((_0x577f8f) => Object.keys(_0x577f8f).length > 0),
      ),
      _0x561610,
    ),
    getContextValue: (_0x40e0bb) =>
      tc(_0x40e0bb)
        ? ec(_0x229481, _0x40e0bb)
        : _0x28da60.getContextValue(_0x40e0bb),
    setContextValue: (_0x3e3d20, _0x356451) => {
      if (!tc(_0x3e3d20)) {
        _0x28da60.setContextValue(_0x3e3d20, _0x356451);
        return;
      }
      (_0x229481.set(_0x3e3d20, _0x356451),
        _0x561610.next({ [_0x3e3d20]: _0x356451 }));
    },
    subscribeContextValue$: (_0x8771c4) =>
      tc(_0x8771c4)
        ? new _0x43472d((_0x4b7e82) => {
            let _0x1e0ceb = _0x561610
              .pipe(
                _0x5407de((_0x44b526) => _0x44b526[_0x8771c4] !== undefined),
              )
              .subscribe((_0x118863) => _0x4b7e82.next(_0x118863[_0x8771c4]));
            return (
              _0x4b7e82.next(ec(_0x229481, _0x8771c4)),
              () => _0x1e0ceb.unsubscribe()
            );
          })
        : _0x28da60.subscribeContextValue$(_0x8771c4),
  };
}
function $s(_0x17e912) {
  return new Map([
    [_0x22a7dd, true],
    [
      _0x26d9bc,
      _0x17e912 === _0x513c12.UNIVER_SHEET ||
        _0x17e912 === _0x513c12.UNIVER_DOC ||
        _0x17e912 === _0x513c12.UNIVER_SLIDE,
    ],
    [_0x1d103b, _0x17e912 === _0x513c12.UNIVER_SHEET],
    [_0x55448b, _0x17e912 === _0x513c12.UNIVER_DOC],
    [_0x54742f, _0x17e912 === _0x513c12.UNIVER_SLIDE],
    [_0x3a4db3, _0x17e912 === _0x513c12.UNIVER_BOARD],
    [js, _0x17e912 === _0x513c12.UNIVER_BASE],
  ]);
}
function ec(_0x5da376, _0x2cb25e) {
  return _0x5da376.get(_0x2cb25e) ?? false;
}
function tc(_0x4a0f2d) {
  return (
    _0x4a0f2d.startsWith("FOCUSING_") ||
    _0x4a0f2d === _0x8e415a ||
    _0x4a0f2d === _0x4b85c3
  );
}
function nc(_0x39111c, _0x3d12c9) {
  return {
    getConfig: (_0x5c3026) => {
      let _0x202860 = _0x39111c.getConfig(_0x5c3026),
        _0x520aee = _0x3d12c9.get(_0x5c3026);
      return _0x520aee ? _0x520aee(_0x202860) : _0x202860;
    },
    setConfig: _0x39111c.setConfig["bind"](_0x39111c),
    deleteConfig: _0x39111c.deleteConfig["bind"](_0x39111c),
    subscribeConfigValue$: _0x39111c.subscribeConfigValue$["bind"](_0x39111c),
    configChanged$: _0x39111c.configChanged$,
    dispose: () => {},
  };
}
function rc(_0xb6506) {
  return nc(
    _0xb6506,
    new Map([
      [
        "menu",
        (_0x28e2f4) => {
          let _0x5772b5 = { ...(_0x28e2f4 ?? {}) };
          return (
            Ps.forEach((_0x1940f6) => {
              _0x5772b5[_0x1940f6] = { ..._0x5772b5[_0x1940f6], hidden: true };
            }),
            _0x5772b5
          );
        },
      ],
    ]),
  );
}
function ic(_0x49a167, _0x5a142d, _0x2eeec7) {
  if (_0x5a142d !== _0x212648.id || !_0x2eeec7 || typeof _0x2eeec7 != "object")
    return _0x2eeec7;
  let _0x5f3b14 = _0x2eeec7;
  return _0x5f3b14.parentEmbedId
    ? _0x5f3b14
    : { ..._0x5f3b14, parentEmbedId: _0x49a167.embedId };
}
function ac(_0x3d1a2e, _0x575ce4, _0xbfd6e3 = _0x3d1a2e) {
  let _0x23c2f5 = _c(_0x3d1a2e) ?? _0xbfd6e3,
    _0x3d01d3 = new Map(_0x575ce4),
    _0x388282 = new Map(),
    _0xb28a41 = new Set(),
    _0x10285a = new Map(),
    _0x138940;
  _0x3d01d3.forEach((_0x11eafc, _0x5a9b44) => {
    _0xfc5008(_0x5a9b44);
  });
  function _0xfc5008(_0x1a1d03) {
    let _0x26465e = cc(_0x1a1d03);
    return (
      _0xb28a41.add(_0x26465e),
      _0x10285a.has(_0x26465e) || _0x10285a.set(_0x26465e, _0x1a1d03),
      _0x26465e
    );
  }
  let _0x30bda6 = (_0x5d0363) =>
      _0x3d01d3.has(_0x5d0363) || _0x388282.has(_0x5d0363)
        ? _0x5d0363
        : (_0x10285a.get(cc(_0x5d0363)) ?? _0x5d0363),
    _0x2d633e = (_0x382bf5) => {
      let _0x2d1e29 = _0x30bda6(_0x382bf5);
      if (_0x3d01d3.has(_0x2d1e29)) return _0x3d01d3.get(_0x2d1e29);
      let _0x25e913 = _0x388282.get(_0x2d1e29);
      if (!_0x25e913) return;
      let _0x107587 = _0x25e913();
      return (
        _0x388282.delete(_0x2d1e29),
        _0x3d01d3.set(_0x2d1e29, _0x107587),
        mc(_0x138940, _0x2d1e29, _0x107587),
        _0x2d1e29 !== _0x382bf5 && mc(_0x138940, _0x382bf5, _0x107587),
        _0x107587
      );
    },
    _0x349517 = (_0x4374af) => {
      let _0x8450e8 = _0x30bda6(_0x4374af);
      return _0x3d01d3.has(_0x8450e8) || _0x388282.has(_0x8450e8);
    },
    _0xd4ef3e = (_0x54f293) => _0xb28a41.has(cc(_0x54f293)),
    _0x69270b = (_0x511ef4) => As.has(cc(_0x511ef4)),
    _0x29f708 = (_0x2e5edd) =>
      !_0xd4ef3e(_0x2e5edd) && _0x3d1a2e.has(_0x2e5edd),
    _0x13737a = () => {
      if (_0x138940) return _0x138940;
      let _0x1e54a7 = _0x3d1a2e.createChild;
      if (typeof _0x1e54a7 == "function")
        return (
          (_0x138940 = _0x1e54a7.call(_0x3d1a2e, [
            ...Sc(_0x3d01d3),
            [_0x20cff5, { useFactory: () => _0x138940 }],
          ])),
          _0x138940
        );
    },
    _0x494ce6 = {
      has: (_0x21c550) => {
        if (
          _0x21c550 === _0x20cff5 ||
          _0x349517(_0x21c550) ||
          _0x29f708(_0x21c550)
        )
          return true;
        let _0x458061 = _0x13737a();
        return (
          (_0x458061 == null ? undefined : _0x458061.has(_0x21c550)) ??
          _0x3d1a2e.has(_0x21c550)
        );
      },
      get: (_0x5deb16, ..._0x156ecd) => {
        if (_0x5deb16 === _0x20cff5) return _0x494ce6;
        if (lc(_0x156ecd, _0xb860ed.SELF)) {
          let _0x4e383d = _0x13737a();
          _0x1fd606(_0x4e383d, _0x5deb16);
          let _0x46f747 = fc(_0x4e383d, _0x5deb16);
          return _0x46f747.resolved
            ? _0x46f747.value
            : dc(_0x4e383d || _0x3d1a2e, _0x5deb16, _0x156ecd);
        }
        return _0x349517(_0x5deb16)
          ? _0x2d633e(_0x5deb16)
          : lc(_0x156ecd, _0xb860ed.SKIP_SELF)
            ? dc(_0x3d1a2e, _0x5deb16, uc(_0x156ecd, _0xb860ed.SKIP_SELF))
            : _0x29f708(_0x5deb16)
              ? dc(_0x3d1a2e, _0x5deb16, _0x156ecd)
              : dc(_0x13737a() || _0x3d1a2e, _0x5deb16, _0x156ecd);
      },
      invoke: (_0x49f6c9, ..._0x46bfa2) =>
        _0x49f6c9(
          {
            has: (_0x5f2618) => {
              if (
                _0x5f2618 === _0x20cff5 ||
                _0x349517(_0x5f2618) ||
                _0x29f708(_0x5f2618)
              )
                return true;
              let _0x5be91d = _0x13737a();
              return (
                (_0x5be91d == null ? undefined : _0x5be91d.has(_0x5f2618)) ??
                _0x3d1a2e.has(_0x5f2618)
              );
            },
            get: (_0x399f1f, ..._0x76f079) => {
              if (_0x399f1f === _0x20cff5) return _0x494ce6;
              if (lc(_0x76f079, _0xb860ed.SELF)) {
                let _0x5d750f = _0x13737a();
                _0x1fd606(_0x5d750f, _0x399f1f);
                let _0xd03c3b = fc(_0x5d750f, _0x399f1f);
                return _0xd03c3b.resolved
                  ? _0xd03c3b.value
                  : dc(_0x5d750f || _0x3d1a2e, _0x399f1f, _0x76f079);
              }
              return _0x349517(_0x399f1f)
                ? _0x2d633e(_0x399f1f)
                : lc(_0x76f079, _0xb860ed.SKIP_SELF)
                  ? dc(_0x3d1a2e, _0x399f1f, uc(_0x76f079, _0xb860ed.SKIP_SELF))
                  : _0x29f708(_0x399f1f)
                    ? dc(_0x3d1a2e, _0x399f1f, _0x76f079)
                    : dc(_0x13737a() || _0x3d1a2e, _0x399f1f, _0x76f079);
            },
          },
          ..._0x46bfa2,
        ),
      add: (_0xbe04a4) => {
        let _0x2a245c = Cc(_0xbe04a4);
        if (_0x2a245c) {
          if (
            _0x2a245c.kind !== "factory" &&
            _0x29f708(_0x2a245c.identifier) &&
            !_0x69270b(_0x2a245c.identifier)
          )
            return;
          let _0x6d7d5b = cc(_0x2a245c.identifier);
          if (_0xb28a41.has(_0x6d7d5b)) return;
          if ((_0xfc5008(_0x2a245c.identifier), _0x2a245c.kind === "value"))
            (_0x388282.delete(_0x2a245c.identifier),
              _0x3d01d3.set(_0x2a245c.identifier, _0x2a245c.value));
          else {
            let _0x2bc5a8 = _0x13737a();
            _0x2bc5a8
              ? gc(_0x2bc5a8, _0x2a245c.identifier) || _0x2bc5a8.add(_0xbe04a4)
              : (_0x3d01d3.delete(_0x2a245c.identifier),
                _0x388282.set(_0x2a245c.identifier, _0x2a245c.factory));
          }
          return;
        }
        let _0x5b8836 = cc(sc(_0xbe04a4));
        if (_0x5b8836 != null) {
          if (_0xb28a41.has(_0x5b8836)) return;
          _0xfc5008(sc(_0xbe04a4));
        }
        let _0x2cb4e0 = _0x13737a();
        if (_0x2cb4e0) {
          _0x2cb4e0.add(_0xbe04a4);
          return;
        }
        _0x3d1a2e.add(_0xbe04a4);
      },
      createChild: (_0x25bb93 = []) => {
        let _0x87552c = new Map(_0x3d01d3);
        _0x10285a.forEach((_0x501c89) => {
          if (_0x87552c.has(_0x501c89)) return;
          if (_0x349517(_0x501c89)) {
            _0x87552c.set(_0x501c89, _0x2d633e(_0x501c89));
            return;
          }
          let _0xcca976 = _0x13737a();
          _0xcca976 &&
            gc(_0xcca976, _0x501c89) &&
            _0x87552c.set(
              _0x501c89,
              dc(_0xcca976, _0x501c89, [_0xb860ed.SELF]),
            );
        });
        let _0x505d02 = [];
        _0x25bb93.forEach((_0x4183ab) => {
          let _0x175d7a = Cc(_0x4183ab);
          if ((_0x175d7a == null ? undefined : _0x175d7a.kind) === "value") {
            _0x87552c.set(_0x175d7a.identifier, _0x175d7a.value);
            return;
          }
          _0x505d02.push(_0x4183ab);
        });
        let _0x3df364 = ac(_0x3d1a2e, _0x87552c, _0x23c2f5);
        return (
          _0x505d02.forEach((_0x38fd60) => {
            _0x3df364.add(_0x38fd60);
          }),
          _0x3df364
        );
      },
      createInstance: (..._0x599112) => {
        let _0xadb6f5 = _0x13737a(),
          _0x599691 = _0xadb6f5 == null ? undefined : _0xadb6f5.createInstance;
        if (_0xadb6f5 && typeof _0x599691 == "function")
          return (
            _0x438c99(_0xadb6f5, _0x599112[0]),
            _0x599691.apply(_0xadb6f5, _0x599112)
          );
        let _0x91f928 = _0x3d1a2e.createInstance;
        if (typeof _0x91f928 == "function")
          return _0x91f928.apply(_0x3d1a2e, _0x599112);
        let [_0x3a5ee5, ..._0x3f2e51] = _0x599112;
        return new _0x3a5ee5(..._0x3f2e51);
      },
      dispose: () => {
        (_0x138940 && vc(_0x138940, _0x23c2f5, _0x3d01d3.values()),
          (_0x138940 = undefined),
          _0xb28a41.clear(),
          _0x10285a.clear(),
          _0x388282.clear());
      },
    };
  return { resolved: false };
}
function pc(_0xa5b2b0) {
  return !_0xa5b2b0 || _0xa5b2b0.length !== 1
    ? { resolved: false }
    : { resolved: true, value: _0xa5b2b0[0] };
}
function mc(_0x5e4b1c, _0x50f355, _0x334337) {
  !_0x5e4b1c ||
    gc(_0x5e4b1c, _0x50f355) ||
    _0x5e4b1c.add([_0x50f355, { useValue: _0x334337 }]);
}
function hc(_0x260921) {
  if (
    !_0x260921 ||
    (typeof _0x260921 != "function" && typeof _0x260921 != "object")
  )
    return [];
  for (let _0x231385 of Object.getOwnPropertySymbols(_0x260921)) {
    let _0x3a992a = _0x260921[_0x231385];
    if (!Array.isArray(_0x3a992a)) continue;
    let _0x61ad9c = _0x3a992a
      .map((_0x474c05) =>
        _0x474c05 == null ? undefined : _0x474c05.identifier,
      )
      .filter((_0x334f3b) => _0x334f3b !== undefined);
    if (_0x61ad9c.length) return _0x61ad9c;
  }
  return [];
}
function gc(_0x3cb830, _0x8c2cb7) {
  var _0x28cbe0, _0x32f3de, _0xe98410, _0x165f90;
  let _0x27e1fb = _0x3cb830;
  return !!(
    ((_0x28cbe0 = _0x27e1fb.dependencyCollection) != null &&
      (_0x32f3de = _0x28cbe0.has) != null &&
      _0x32f3de.call(_0x28cbe0, _0x8c2cb7)) ||
    ((_0xe98410 = _0x27e1fb.resolvedDependencyCollection) != null &&
      (_0x165f90 = _0xe98410.has) != null &&
      _0x165f90.call(_0xe98410, _0x8c2cb7))
  );
}
function _c(_0x55e113) {
  return _0x55e113.__embedSharedRootInjector;
}
function vc(_0x27dc42, _0x97175d, _0x1f38f6 = []) {
  let _0x398303 = yc(_0x97175d);
  for (let _0x4e334b of _0x1f38f6) _0x398303.add(_0x4e334b);
  (bc(_0x27dc42, _0x398303), _0x27dc42.dispose());
}
function yc(_0xed1144) {
  let _0x105a89 = new Set(),
    _0x2429a9 = xc(_0xed1144);
  return (
    _0x2429a9 &&
      _0x2429a9.forEach((_0xd26560) => {
        Array.isArray(_0xd26560) &&
          _0xd26560.forEach((_0x55933f) => _0x105a89.add(_0x55933f));
      }),
    _0x105a89
  );
}
function bc(_0x3c275a, _0x66bb7f, _0x31c026 = new Set()) {
  if (_0x31c026.has(_0x3c275a)) return;
  _0x31c026.add(_0x3c275a);
  let _0x126e27 = _0x3c275a.children;
  _0x126e27 == null ||
    _0x126e27.forEach((_0xe7a6e2) => bc(_0xe7a6e2, _0x66bb7f, _0x31c026));
  let _0x2d28b = xc(_0x3c275a);
  _0x2d28b &&
    _0x2d28b.forEach((_0x420288, _0x2a9ae8) => {
      if (!Array.isArray(_0x420288)) return;
      let _0x4187bb = _0x420288.filter(
        (_0x188f3d) => !_0x66bb7f.has(_0x188f3d),
      );
      if (_0x4187bb.length !== _0x420288.length) {
        if (_0x4187bb.length === 0) {
          _0x2d28b.delete(_0x2a9ae8);
          return;
        }
        _0x2d28b.set(_0x2a9ae8, _0x4187bb);
      }
    });
}
function xc(_0x57aa44) {
  var _0x35df07;
  return (_0x35df07 = _0x57aa44.resolvedDependencyCollection) == null
    ? undefined
    : _0x35df07.resolvedDependencies;
}
function Sc(_0x7f7a5b) {
  return Array.from(_0x7f7a5b, ([_0x8729b1, _0x4e80d2]) => [
    _0x8729b1,
    { useValue: _0x4e80d2 },
  ]);
}
function Cc(_0x922d13) {
  if (!Array.isArray(_0x922d13) || _0x922d13.length < 2) return;
  let [_0x23c2ba, _0xbda9e8] = _0x922d13;
  if (!(!_0xbda9e8 || typeof _0xbda9e8 != "object")) {
    if ("useValue" in _0xbda9e8)
      return {
        kind: "value",
        identifier: _0x23c2ba,
        value: _0xbda9e8.useValue,
      };
    if (typeof _0xbda9e8.useFactory == "function")
      return {
        kind: "factory",
        identifier: _0x23c2ba,
        factory: _0xbda9e8.useFactory,
      };
  }
}
function wc(_0x56e3da, _0x1e98ec) {
  if (!_0x56e3da.has(_0x713ac8)) return;
  let _0x38e577 = _0x56e3da.get(_0x713ac8),
    _0x8adb5 = _0x38e577.createScoped;
  return Tc(
    typeof _0x8adb5 == "function"
      ? _0x8adb5.call(_0x38e577, _0x1e98ec)
      : _0x38e577,
  );
}
function Tc(_0x5d14da) {
  return {
    menuChanged$: _0x5d14da.menuChanged$,
    mergeMenu: (_0x525afd, _0x51bcd6) =>
      _0x5d14da.mergeMenu(_0x525afd, _0x51bcd6),
    appendRootMenu: (_0x759e86) => _0x5d14da.appendRootMenu(_0x759e86),
    getMenuByPositionKey: (_0x32b341) =>
      Ec(_0x5d14da.getMenuByPositionKey(_0x32b341)),
    getFlatMenuByPositionKey: (_0x5928c8) =>
      Ec(_0x5d14da.getFlatMenuByPositionKey(_0x5928c8)),
  };
}
function Ec(_0x441964) {
  return _0x441964.flatMap((_0x55ff14) => {
    var _0x1196d9;
    if (
      Ps.has(
        ((_0x1196d9 = _0x55ff14.item) == null ? undefined : _0x1196d9.id) ??
          _0x55ff14.key,
      )
    )
      return [];
    if (!_0x55ff14.children) return [_0x55ff14];
    let _0x5b5438 = Ec(_0x55ff14.children);
    return _0x55ff14.children["length"] > 0 &&
      _0x5b5438.length === 0 &&
      !_0x55ff14.item &&
      !_0x55ff14.headerActionItem
      ? []
      : [{ ..._0x55ff14, children: _0x5b5438 }];
  });
}
function Dc(_0xf5054, _0x3e46cd, _0x15305a) {
  if (!_0xf5054.has(_0x441a50)) return;
  let _0x42463e = _0xf5054.get(_0x441a50);
  return {
    get disabled() {
      return _0x42463e.disabled;
    },
    set disabled(_0x52934a) {
      _0x42463e.disabled = _0x52934a;
    },
    get visible() {
      return _0x42463e.visible;
    },
    enable: () => _0x42463e.enable(),
    disable: () => _0x42463e.disable(),
    triggerContextMenu: (_0xdfaacf, _0x4e43d9, _0x129d7e) => {
      _0x42463e.triggerContextMenu(_0xdfaacf, _0x4e43d9, {
        ..._0x129d7e,
        unitId: (_0x129d7e == null ? undefined : _0x129d7e.unitId) ?? _0x15305a,
      });
    },
    hideContextMenu: () => _0x42463e.hideContextMenu(),
    registerContextMenuHandler: (_0x27abaf) =>
      _0x42463e.registerContextMenuHandler(_0x27abaf),
  };
}
function Oc(_0x554285, _0x47c6eb) {
  let _0x5a4bc1 = new _0x25375a();
  return {
    get disabled() {
      return _0x5a4bc1.disabled;
    },
    set disabled(_0x544b30) {
      _0x5a4bc1.disabled = _0x544b30;
    },
    get visible() {
      return _0x5a4bc1.visible;
    },
    enable: () => _0x5a4bc1.enable(),
    disable: () => _0x5a4bc1.disable(),
    triggerContextMenu: (_0x4a2ef4, _0x4c1a14, _0x3eaa8b) => {
      _0x5a4bc1.triggerContextMenu(_0x4a2ef4, _0x4c1a14, {
        ..._0x3eaa8b,
        unitId: (_0x3eaa8b == null ? undefined : _0x3eaa8b.unitId) ?? _0x47c6eb,
      });
    },
    hideContextMenu: () => _0x5a4bc1.hideContextMenu(),
    registerContextMenuHandler: (_0x3d8c01) =>
      _0x5a4bc1.registerContextMenuHandler(_0x3d8c01),
    dispose: () => _0x5a4bc1.dispose(),
  };
}
function kc(_0x9cbbb4, _0x423ccb) {
  let _0x3e78f6 = _0x9cbbb4.get(_0x1cdf34),
    _0x41b7aa = _0x9cbbb4.has(Es) ? _0x9cbbb4.get(Es) : undefined,
    _0x152b6e = _0x9cbbb4.has(X) ? _0x9cbbb4.get(X) : undefined,
    _0x5a74f5 = _0x423ccb.renderScope["rootElement"],
    _0x1f7e4c = _0x423ccb.renderScope["contentRoot"] ?? _0x5a74f5,
    _0x1af8b5 = new Set([_0x5a74f5, _0x1f7e4c]),
    _0x3a3cbe =
      _0x423ccb.renderScope["mode"] !== "float" ||
      _0x423ccb.renderScope["fullscreen"],
    _0x1e7e2a = (_0x194ae5, _0x5db4df) => {
      _0x1af8b5.add(_0x194ae5);
      let _0x2e0ad2 =
          (_0x5db4df == null
            ? undefined
            : _0x5db4df.registerChildInteraction) && _0x3a3cbe,
        _0x4f7c5e = _0x2e0ad2 ? Ac(_0x194ae5) : undefined,
        _0x159b12 = _0x2e0ad2
          ? _0x41b7aa == null
            ? undefined
            : _0x41b7aa.registerOwnedElement(_0x423ccb.embedId, _0x194ae5)
          : undefined,
        _0x3231a6 = _0x2e0ad2
          ? _0x152b6e == null
            ? undefined
            : _0x152b6e.registerElement({
                embedId: _0x423ccb.embedId,
                role: "child-editor",
                element: _0x194ae5,
              })
          : undefined;
      return _0x11d17f(() => {
        (_0x3231a6 == null || _0x3231a6.dispose(),
          _0x159b12 == null || _0x159b12.dispose(),
          _0x4f7c5e == null || _0x4f7c5e.dispose(),
          _0x1af8b5.delete(_0x194ae5));
      });
    },
    _0xee7d89 = (_0x473dee) =>
      _0x473dee
        ? [..._0x1af8b5].some(
            (_0x4e2c1d) =>
              _0x4e2c1d === _0x473dee || _0x4e2c1d.contains(_0x473dee),
          )
        : false;
  return {
    get isFocused() {
      return _0x3e78f6.isFocused;
    },
    get rootContainerElement() {
      return _0x5a74f5;
    },
    focus: () => _0x3e78f6.focus(),
    registerFocusHandler: (_0x4616dc, _0x34885a) =>
      _0x3e78f6.registerFocusHandler(_0x4616dc, _0x34885a),
    registerRootContainerElement: _0x1e7e2a,
    registerContentElement: _0x1e7e2a,
    registerContainerElement: (_0x413a08) =>
      _0x1e7e2a(_0x413a08, { registerChildInteraction: true }),
    getContentElement: () => _0x1f7e4c,
    checkElementInCurrentContainers: (_0x4ed206) =>
      _0xee7d89(_0x4ed206) ||
      (_0x41b7aa == null
        ? undefined
        : _0x41b7aa.contains(_0x423ccb.embedId, _0x4ed206)) ||
      _0x3e78f6.checkElementInCurrentContainers(_0x4ed206),
    checkContentIsFocused: () =>
      _0xee7d89(_0x1f7e4c.ownerDocument["activeElement"]) ||
      (_0x152b6e == null
        ? undefined
        : _0x152b6e.hasChildInteractionLease(_0x423ccb.embedId)) ||
      _0x3e78f6.checkContentIsFocused(),
  };
}
function Ac(_0x183716) {
  let _0x41c064 = new Map(),
    _0x1a94a1 = (_0x233297) => {
      (_0x41c064.set(_0x233297, _0x233297.getAttribute(ws)),
        _0x233297.setAttribute(ws, "child-editor"));
    };
  return (
    _0x1a94a1(_0x183716),
    _0x183716.querySelectorAll("*").forEach(_0x1a94a1),
    _0x11d17f(() => {
      _0x41c064.forEach((_0x41d191, _0x2035c5) => {
        if (_0x41d191 == null) {
          _0x2035c5.removeAttribute(ws);
          return;
        }
        _0x2035c5.setAttribute(ws, _0x41d191);
      });
    })
  );
}
function jc(_0x6ab86b, _0x12051d, _0x5b8cc4 = []) {
  let _0x3c2f74 = Nc(_0x6ab86b, _0x5b8cc4) ?? _0x6ab86b.injector,
    _0x204692 = _0x3c2f74 !== _0x6ab86b.injector,
    _0x557574 = Mc(_0x6ab86b),
    _0x525407 = {
      descriptor: _0x6ab86b.descriptor,
      host: {
        unitId: _0x6ab86b.hostUnitId,
        type: _0x6ab86b.descriptor["hostType"],
        anchorId: _0x6ab86b.descriptor["hostAnchorId"],
        entry: _0x6ab86b.descriptor["entry"],
        layout: Fc(_0x6ab86b),
      },
      child: { unitId: _0x6ab86b.childUnitId, type: _0x6ab86b.childType },
      injector: _0x3c2f74,
      instanceService: Pc(_0x3c2f74, _0x3e617f),
      commandService: Pc(_0x3c2f74, _0x42e186),
      menuManagerService: Pc(_0x3c2f74, _0x713ac8),
      roots: _0x557574,
      activate: () => _0x12051d(true),
      deactivate: () => _0x12051d(false),
      dispose: () => {
        _0x204692 && _0x3c2f74.dispose();
      },
    };
  return {
    runtimeScope: _0x525407,
    disposable: _0x11d17f(() => _0x525407.dispose()),
  };
}
function Mc(_0x4dbcef) {
  var _0x4c0ce2;
  let _0xc97a47 = _0x4dbcef.renderScope["rootElement"],
    _0x394034 =
      _0x4dbcef.renderScope["contentRoot"] ??
      ms(_0xc97a47, "data-embed-content-root") ??
      _0xc97a47,
    _0xf4ac21 =
      _0x4dbcef.renderScope["overlayRoot"] ??
      ms(_0xc97a47, "data-embed-overlay-root") ??
      _0xc97a47;
  return {
    root: _0xc97a47,
    content: _0x394034,
    canvas:
      _0x4dbcef.renderScope["canvasRoot"] ??
      ms(_0xc97a47, "data-embed-canvas-root") ??
      undefined,
    overlay: _0xf4ac21,
    popup:
      _0x4dbcef.renderScope["popupRoot"] ??
      ms(_0xc97a47, "data-embed-popup-root") ??
      _0xf4ac21,
    menuSlot:
      ((_0x4c0ce2 = _0x4dbcef.renderScope["menuOutlet"]) == null
        ? undefined
        : _0x4c0ce2.container) ??
      ms(_0xc97a47, "data-embed-menu-slot") ??
      undefined,
    footerSlot: ms(_0xc97a47, "data-embed-footer-slot") ?? undefined,
  };
}
function Nc(_0x41e49a, _0x54fd11) {
  if (!(
    !_0x41e49a.injector["has"](_0x3e617f) ||
    !_0x41e49a.injector["has"](_0x42e186)
  ))
    return Fs(_0x41e49a, _0x54fd11);
}
function Pc(_0x5ad31f, _0x50b3b9) {
  if (_0x5ad31f.has(_0x50b3b9)) return _0x5ad31f.get(_0x50b3b9);
}
function Fc(_0x166ca7) {
  var _0x42e8b6, _0x463d97;
  switch (_0x166ca7.descriptor["entry"]) {
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
  return _0x166ca7.layout === "tab-peer" ||
    ((_0x42e8b6 = _0x166ca7.descriptor["sourceMeta"]) != null && _0x42e8b6.tab)
    ? "tab-peer"
    : (_0x463d97 = _0x166ca7.descriptor["sourceMeta"]) != null &&
        _0x463d97.floating
      ? "float"
      : _0x166ca7.layout["startsWith"]("docs-") ||
          _0x166ca7.layout === "scroll-contained"
        ? "doc-flow"
        : "float";
}
var Ic = class {
    constructor() {
      Y(this, "_contributions", new Map());
    }
    register(_0x5634fb) {
      if (this._contributions["has"](_0x5634fb.childType))
        throw Error(
          "Embed child view contribution already registered: " +
            _0x5634fb.childType,
        );
      this._contributions["set"](_0x5634fb.childType, _0x5634fb);
    }
    get(_0x18eca9) {
      return this._contributions["get"](_0x18eca9);
    }
    list() {
      return [...this._contributions["values"]()];
    }
  },
  Lc = class {
    constructor() {
      Y(this, "_contributions", new Map());
    }
    register(_0x1d250c) {
      let _0x1591cd = this._key(
        _0x1d250c.hostType,
        _0x1d250c.entry,
        _0x1d250c.childType,
      );
      if (this._contributions["has"](_0x1591cd))
        throw Error(
          "Embed floating menu contribution already registered: " + _0x1591cd,
        );
      return (
        this._contributions["set"](_0x1591cd, _0x1d250c),
        _0x11d17f(() => {
          this._contributions["get"](_0x1591cd) === _0x1d250c &&
            this._contributions["delete"](_0x1591cd);
        })
      );
    }
    get(_0x3d5ef3, _0x151fc4, _0x153396) {
      if (_0x153396 != null) {
        let _0x167182 = this._contributions["get"](
          this._key(_0x3d5ef3, _0x151fc4, _0x153396),
        );
        if (_0x167182) return _0x167182;
      }
      return this._contributions["get"](this._key(_0x3d5ef3, _0x151fc4));
    }
    hasExact(_0x3c1d46, _0x2f308e, _0x1634e8) {
      return this._contributions["has"](
        this._key(_0x3c1d46, _0x2f308e, _0x1634e8),
      );
    }
    list() {
      return [...this._contributions["values"]()];
    }
    _key(_0x3d585c, _0x4b3827, _0x18d09d) {
      return _0x18d09d == null
        ? _0x3d585c + ":" + _0x4b3827 + ":*"
        : _0x3d585c + ":" + _0x4b3827 + ":" + _0x18d09d;
    }
  },
  Rc = class {
    constructor() {
      Y(this, "_contributions", new Map());
    }
    register(_0x3ba7d4) {
      let _0x45ffab = this._key(_0x3ba7d4.hostType, _0x3ba7d4.entry);
      if (this._contributions["has"](_0x45ffab))
        throw Error(
          "Embed\x20host\x20container\x20contribution\x20already\x20registered:\x20" +
            _0x45ffab,
        );
      this._contributions["set"](_0x45ffab, _0x3ba7d4);
    }
    get(_0x13e627, _0x12484d) {
      return this._contributions["get"](this._key(_0x13e627, _0x12484d));
    }
    list() {
      return [...this._contributions["values"]()];
    }
    supports(_0xce5a38, _0x2819db, _0x1c41c7) {
      let _0x3c5c58 = this.get(_0xce5a38, _0x2819db);
      return _0x3c5c58
        ? (_0x3c5c58.supportedLayouts ?? [_0x3c5c58.layout]).includes(_0x1c41c7)
        : false;
    }
    _key(_0x351751, _0x460364) {
      return _0x351751 + ":" + _0x460364;
    }
  },
  zc = class {
    constructor() {
      (Y(this, "_rootsByChildUnitId", new Map()),
        Y(this, "_rootsByEmbedId", new Map()),
        Y(this, "_rootsByHostAnchorId", new Map()));
    }
    register(_0x419480, _0x2b177c) {
      let _0x24b1a9 =
        typeof _0x419480 == "string"
          ? { childUnitId: _0x419480, root: _0x2b177c }
          : _0x419480;
      return (
        this._rootsByChildUnitId["set"](_0x24b1a9.childUnitId, _0x24b1a9),
        _0x24b1a9.embedId &&
          this._rootsByEmbedId["set"](_0x24b1a9.embedId, _0x24b1a9),
        _0x24b1a9.hostAnchorId &&
          this._rootsByHostAnchorId["set"](_0x24b1a9.hostAnchorId, _0x24b1a9),
        _0x11d17f(() => {
          (this._rootsByChildUnitId["get"](_0x24b1a9.childUnitId) ===
            _0x24b1a9 &&
            this._rootsByChildUnitId["delete"](_0x24b1a9.childUnitId),
            _0x24b1a9.embedId &&
              this._rootsByEmbedId["get"](_0x24b1a9.embedId) === _0x24b1a9 &&
              this._rootsByEmbedId["delete"](_0x24b1a9.embedId),
            _0x24b1a9.hostAnchorId &&
              this._rootsByHostAnchorId["get"](_0x24b1a9.hostAnchorId) ===
                _0x24b1a9 &&
              this._rootsByHostAnchorId["delete"](_0x24b1a9.hostAnchorId));
        })
      );
    }
    get(_0x1bbd62) {
      var _0x209a26;
      return (
        ((_0x209a26 = this._rootsByChildUnitId["get"](_0x1bbd62)) == null
          ? undefined
          : _0x209a26.root) ?? null
      );
    }
    getByEmbedId(_0xcb15dd) {
      var _0x1d3db1;
      return (
        ((_0x1d3db1 = this._rootsByEmbedId["get"](_0xcb15dd)) == null
          ? undefined
          : _0x1d3db1.root) ?? null
      );
    }
    getByHostAnchorId(_0xbfa124) {
      var _0x3c0523;
      return (
        ((_0x3c0523 = this._rootsByHostAnchorId["get"](_0xbfa124)) == null
          ? undefined
          : _0x3c0523.root) ?? null
      );
    }
    contains(_0x3ab787, _0x52b05a) {
      if (!(_0x3ab787 instanceof Node)) return false;
      let _0x296712 = _0x52b05a.embedId
        ? this.getByEmbedId(_0x52b05a.embedId)
        : _0x52b05a.hostAnchorId
          ? this.getByHostAnchorId(_0x52b05a.hostAnchorId)
          : _0x52b05a.childUnitId
            ? this.get(_0x52b05a.childUnitId)
            : null;
      return !!(_0x296712 != null && _0x296712.contains(_0x3ab787));
    }
  };
function Bc(_0x51bcbc, _0x4de66e, _0x11dc25 = Uc(_0x51bcbc), _0x270110 = {}) {
  var _0x58b51c, _0x271a66;
  let _0x26a659 = _0x51bcbc.injector["get"](_0x4de66e),
    _0x187463 =
      _0x270110.scopedInjector ??
      (_0x270110.scopedRenderInjector === false
        ? undefined
        : (((_0x58b51c = _0x51bcbc.runtimeScope) == null
            ? undefined
            : _0x58b51c.injector) ?? Vc(_0x51bcbc))),
    _0x2482f4 =
      !_0x270110.scopedInjector &&
      _0x187463 !==
        ((_0x271a66 = _0x51bcbc.runtimeScope) == null
          ? undefined
          : _0x271a66.injector),
    _0x198604 = Kc(_0x26a659, _0x51bcbc.childUnitId, _0x187463);
  if (!_0x198604) {
    _0x2482f4 && (_0x187463 == null || _0x187463.dispose());
    return;
  }
  ((_0x11dc25.dataset["embedChildRenderUnitId"] = _0x51bcbc.childUnitId),
    (_0x11dc25.dataset["embedChildRenderMode"] =
      _0x51bcbc.renderScope["mode"]));
  try {
    var _0xb2cae7, _0x517091;
    (_0xb2cae7 = (_0x517091 = _0x198604.engine).unmount) == null ||
      _0xb2cae7.call(_0x517091);
  } catch {}
  (_0x198604.engine["mount"](_0x11dc25),
    Wc(_0x198604, _0x11dc25),
    Jc(_0x198604, { activate: _0x270110.activate ?? true }));
  let _0x362644 = Hc(_0x198604, _0x11dc25, {
    activate: false,
    idleMs:
      _0x51bcbc.descriptor["hostType"] === _0x513c12.UNIVER_SHEET &&
      _0x51bcbc.renderScope["mode"] === "float"
        ? 100
        : 0,
  });
  return _0x11d17f(() => {
    _0x362644.dispose();
    try {
      var _0xf4074b, _0x5a51c7;
      (_0xf4074b = (_0x5a51c7 = _0x198604.engine).unmount) == null ||
        _0xf4074b.call(_0x5a51c7);
    } catch {}
    if (_0x26a659.getRenderUnitById(_0x51bcbc.childUnitId) === _0x198604) {
      var _0x144a82;
      (_0x144a82 = _0x26a659.removeRender) == null ||
        _0x144a82.call(_0x26a659, _0x51bcbc.childUnitId);
    }
    (_0x11dc25.removeAttribute("data-embed-child-render-unit-id"),
      _0x11dc25.removeAttribute("data-embed-child-render-mode"),
      _0x2482f4 && (_0x187463 == null || _0x187463.dispose()));
  });
}
function Vc(_0x424986) {
  if (
    typeof _0x424986.injector["has"] == "function" &&
    !(
      !_0x424986.injector["has"](_0x3e617f) ||
      !_0x424986.injector["has"](_0x42e186)
    )
  )
    return Fs(_0x424986);
}
function Hc(_0x4016b8, _0xe238ac, _0x6d451f = {}) {
  if (typeof ResizeObserver > "u") return _0x11d17f(() => {});
  let _0x55ae3d = -1,
    _0x14aa1e = -1,
    _0x30000a = 0,
    _0xefb7d6,
    _0x41dd4f = () => {
      ((_0x30000a &&= (window.cancelAnimationFrame(_0x30000a), 0)),
        (_0x30000a = window.requestAnimationFrame(() => {
          ((_0x30000a = 0),
            Jc(_0x4016b8, { activate: _0x6d451f.activate ?? false }));
        })));
    },
    _0x34b044 = new ResizeObserver((_0x215fd0) => {
      var _0x26d5a6;
      let _0x386b52 =
          (_0x26d5a6 = _0x215fd0[0]) == null
            ? undefined
            : _0x26d5a6.contentRect,
        _0x38b11f =
          (_0x386b52 == null ? undefined : _0x386b52.width) ??
          _0xe238ac.clientWidth,
        _0x44b655 =
          (_0x386b52 == null ? undefined : _0x386b52.height) ??
          _0xe238ac.clientHeight;
      (_0x38b11f !== _0x55ae3d || _0x44b655 !== _0x14aa1e) &&
        ((_0x55ae3d = _0x38b11f),
        (_0x14aa1e = _0x44b655),
        (_0x30000a &&= (window.cancelAnimationFrame(_0x30000a), 0)),
        _0xefb7d6 != null && globalThis.clearTimeout(_0xefb7d6),
        (_0x6d451f.idleMs ?? 0) > 0
          ? (_0xefb7d6 = globalThis.setTimeout(() => {
              ((_0xefb7d6 = undefined), _0x41dd4f());
            }, _0x6d451f.idleMs))
          : _0x41dd4f());
    });
  return (
    _0x34b044.observe(_0xe238ac),
    _0x11d17f(() => {
      (_0x30000a && window.cancelAnimationFrame(_0x30000a),
        _0xefb7d6 != null && globalThis.clearTimeout(_0xefb7d6),
        _0x34b044.disconnect());
    })
  );
}
function Uc(_0x2641f1) {
  return (
    _0x2641f1.runtimeScope["roots"].canvas ??
    _0x2641f1.renderScope["canvasRoot"] ??
    _0x2641f1.renderScope["contentRoot"] ??
    _0x2641f1.renderScope["rootElement"]
  );
}
function Wc(_0x44df3d, _0x30a0e4) {
  var _0x224324, _0x2183c9, _0x1b55a9, _0x5140ec, _0x459560;
  let _0x4aef78 =
    ((_0x224324 = (_0x2183c9 = _0x44df3d.engine).getCanvasElement) == null
      ? undefined
      : _0x224324.call(_0x2183c9)) ??
    ((_0x1b55a9 = (_0x5140ec = _0x44df3d.engine).getCanvas) == null ||
    (_0x1b55a9 = _0x1b55a9.call(_0x5140ec)) == null ||
    (_0x459560 = _0x1b55a9.getCanvasEle) == null
      ? undefined
      : _0x459560.call(_0x1b55a9));
  !_0x4aef78 ||
    _0x4aef78.parentElement === _0x30a0e4 ||
    _0x30a0e4.appendChild(_0x4aef78);
}
function Gc(_0x532409, _0x29402a, _0x10e43e) {
  try {
    let _0x21372b = _0x532409.getRenderUnitById(_0x29402a);
    if (_0x21372b) {
      var _0x27aa4b;
      if (!_0x10e43e || qc(_0x21372b) === _0x10e43e) return _0x21372b;
      (_0x27aa4b = _0x532409.removeRender) == null ||
        _0x27aa4b.call(_0x532409, _0x29402a);
    }
    return _0x532409.createRender(_0x29402a, {
      embeddedRender: true,
      makeCurrent: false,
      renderParentInjector: _0x10e43e,
      skipAutoRender: true,
    });
  } catch {
    return;
  }
}
function Kc(_0x156e26, _0x1713a9, _0x2c18d6) {
  try {
    let _0x59bda8 = _0x156e26.getRenderUnitById(_0x1713a9);
    if (_0x59bda8) {
      var _0x24c52c;
      if (!_0x2c18d6 || qc(_0x59bda8) === _0x2c18d6) return _0x59bda8;
      (_0x24c52c = _0x156e26.removeRender) == null ||
        _0x24c52c.call(_0x156e26, _0x1713a9);
    }
    return _0x156e26.createRender(_0x1713a9, {
      embeddedRender: true,
      makeCurrent: false,
      renderParentInjector: _0x2c18d6,
      skipAutoRender: true,
    });
  } catch (_0x162130) {
    var _0x4f4213;
    ((_0x4f4213 = _0x156e26.removeRender) == null ||
      _0x4f4213.call(_0x156e26, _0x1713a9),
      console.warn(
        "[embed-ui]\x20failed\x20to\x20create\x20embedded\x20child\x20render",
        _0x162130,
      ));
    return;
  }
}
function qc(_0x32998b) {
  try {
    var _0x5cc1e7;
    return (_0x5cc1e7 = _0x32998b.with) == null
      ? undefined
      : _0x5cc1e7.call(_0x32998b, _0x20cff5);
  } catch {
    return;
  }
}
function Jc(_0x137335, _0x30c642 = {}) {
  var _0x561457, _0x5f1293, _0x4dcf6f, _0x5aa208;
  if (_0x30c642.activate) {
    var _0x6f2dbd;
    (_0x6f2dbd = _0x137335.activate) == null || _0x6f2dbd.call(_0x137335);
  }
  (_0x137335.engine["resize"](),
    _0x137335.components["forEach"]((_0x2477c5) => {
      var _0x5be155, _0x35db88;
      ((_0x5be155 = _0x2477c5.makeForceDirty) == null ||
        _0x5be155.call(_0x2477c5, true),
        (_0x35db88 = _0x2477c5.makeDirty) == null ||
          _0x35db88.call(_0x2477c5, true));
    }),
    (_0x561457 = _0x137335.mainComponent) == null ||
      (_0x5f1293 = _0x561457.makeDirty) == null ||
      _0x5f1293.call(_0x561457, true),
    _0x137335.scene["makeDirty"](),
    (_0x4dcf6f = (_0x5aa208 = _0x137335.scene).render) == null ||
      _0x4dcf6f.call(_0x5aa208));
}
var Yc = class {
  constructor() {
    (Y(this, "_providers", new Map()),
      Y(this, "_contextsByEmbedId", new Map()),
      Y(this, "_contextsByHostAnchorId", new Map()),
      Y(this, "_contextsByChildUnitId", new Map()));
  }
  register(_0x422dbf) {
    return (
      this._providers["set"](_0x422dbf.childType, _0x422dbf),
      _0x11d17f(() => {
        this._providers["get"](_0x422dbf.childType) === _0x422dbf &&
          this._providers["delete"](_0x422dbf.childType);
      })
    );
  }
  get(_0x214dda) {
    return this._providers["get"](_0x214dda);
  }
  registerContext(_0x340222) {
    return (
      this._contextsByEmbedId["set"](_0x340222.embedId, _0x340222),
      this._contextsByHostAnchorId["set"](
        _0x340222.descriptor["hostAnchorId"],
        _0x340222,
      ),
      this._contextsByChildUnitId["set"](_0x340222.childUnitId, _0x340222),
      _0x11d17f(() => {
        (this._contextsByEmbedId["get"](_0x340222.embedId) === _0x340222 &&
          this._contextsByEmbedId["delete"](_0x340222.embedId),
          this._contextsByHostAnchorId["get"](
            _0x340222.descriptor["hostAnchorId"],
          ) === _0x340222 &&
            this._contextsByHostAnchorId["delete"](
              _0x340222.descriptor["hostAnchorId"],
            ),
          this._contextsByChildUnitId["get"](_0x340222.childUnitId) ===
            _0x340222 &&
            this._contextsByChildUnitId["delete"](_0x340222.childUnitId));
      })
    );
  }
  getContextByEmbedId(_0x28c8d5) {
    return this._contextsByEmbedId["get"](_0x28c8d5);
  }
  getContextByHostAnchorId(_0x58fe49) {
    return this._contextsByHostAnchorId["get"](_0x58fe49);
  }
  getContextByChildUnitId(_0xcbe0eb) {
    return this._contextsByChildUnitId["get"](_0xcbe0eb);
  }
  capture(_0x472e7f) {
    let _0x555f22 = this.get(_0x472e7f.childType);
    return _0x555f22
      ? Promise.resolve(_0x555f22.capture(_0x472e7f))
      : Promise.resolve(Xc(_0x472e7f));
  }
  captureByEmbedId(_0x49a115) {
    let _0x473187 = this.getContextByEmbedId(_0x49a115);
    return _0x473187 ? this.capture(_0x473187) : Promise.resolve(undefined);
  }
  captureByHostAnchorId(_0x2974cb) {
    let _0x4d8d77 = this.getContextByHostAnchorId(_0x2974cb);
    return _0x4d8d77 ? this.capture(_0x4d8d77) : Promise.resolve(undefined);
  }
  captureByChildUnitId(_0x13fe94) {
    let _0x3ead61 = this.getContextByChildUnitId(_0x13fe94);
    return _0x3ead61 ? this.capture(_0x3ead61) : Promise.resolve(undefined);
  }
};
function Xc(_0x3500c1) {
  let _0x30486d = Qc(_0x3500c1);
  if (_0x30486d)
    try {
      return _0x30486d.toDataURL("image/png");
    } catch {
      return;
    }
}
const Zc = "univer-embed-print-hide-scrollbars";
function Qc(_0x188b34, _0x59dabd = false) {
  if (!_0x188b34.renderScope) return;
  let _0x2cc6e6 = [
      _0x188b34.renderScope["canvasRoot"],
      _0x188b34.renderScope["contentRoot"],
      _0x188b34.renderScope["rootElement"],
    ].filter((_0x11faea) => !!_0x11faea),
    _0x2a2e71 = Array.from(
      new Set(
        _0x2cc6e6.flatMap((_0xc7c567) =>
          Array.from(_0xc7c567.querySelectorAll("canvas")),
        ),
      ),
    )
      .filter((_0x2d767d) => _0x2d767d.width > 1 && _0x2d767d.height > 1)
      .sort(
        (_0x3828ce, _0x1b5762) =>
          _0x1b5762.width * _0x1b5762.height -
          _0x3828ce.width * _0x3828ce.height,
      );
  for (let _0x2d5686 of _0x2a2e71) {
    if (_0x59dabd) return _0x2d5686;
    try {
      return (_0x2d5686.toDataURL("image/png"), _0x2d5686);
    } catch {}
  }
}
function $c(_0x4e0d78) {
  try {
    var _0x1815d2;
    return el(
      (
        ((_0x1815d2 = _0x4e0d78.runtimeScope) == null
          ? undefined
          : _0x1815d2.injector) ?? _0x4e0d78.injector
      )
        .get(_0x2db5c6)
        .getRenderUnitById(_0x4e0d78.childUnitId) ?? undefined,
      rl(_0x4e0d78),
    );
  } catch {
    return el(undefined, rl(_0x4e0d78));
  }
}
function el(_0x2ed9c9, _0x10da3 = []) {
  let _0x450402 = nl(_0x2ed9c9 == null ? undefined : _0x2ed9c9.scene),
    _0x5bbf07 = _0x450402
      .flatMap((_0x5e9416) => {
        var _0x3435cb;
        return (
          ((_0x3435cb = _0x5e9416.getViewports) == null
            ? undefined
            : _0x3435cb.call(_0x5e9416)) ?? []
        );
      })
      .map((_0x34e70e) => {
        var _0x5b057b;
        return (_0x5b057b = _0x34e70e.getScrollBar) == null
          ? undefined
          : _0x5b057b.call(_0x34e70e);
      })
      .filter((_0x14f1f7) => !!_0x14f1f7)
      .map((_0x6d8f77) => ({
        scrollBar: _0x6d8f77,
        enableHorizontal: _0x6d8f77.enableHorizontal,
        enableVertical: _0x6d8f77.enableVertical,
      })),
    _0x262ad3 = _0x450402
      .flatMap((_0x422bb7) => {
        var _0x17e143;
        return (
          ((_0x17e143 = _0x422bb7.getAllObjects) == null
            ? undefined
            : _0x17e143.call(_0x422bb7)) ?? []
        );
      })
      .filter((_0x566748) => _0x566748.oKey === "board-viewport-bar-object")
      .map((_0x435508) => ({ object: _0x435508, visible: _0x435508.visible })),
    _0x16eb3e = Array.from(new Set(_0x10da3)),
    _0x185d8a = _0x16eb3e.map((_0x1aac2b) => ({
      element: _0x1aac2b,
      overflow: _0x1aac2b.style["overflow"],
      hadHideClass: _0x1aac2b.classList["contains"](Zc),
    }));
  (_0x5bbf07.forEach(({ scrollBar: _0x5046f0 }) => {
    ((_0x5046f0.enableHorizontal = false), (_0x5046f0.enableVertical = false));
  }),
    _0x262ad3.forEach(({ object: _0x5cce31 }) => {
      var _0x1a889b;
      return (_0x1a889b = _0x5cce31.hide) == null
        ? undefined
        : _0x1a889b.call(_0x5cce31);
    }),
    _0x16eb3e.forEach((_0x3cbc2e) => {
      ((_0x3cbc2e.style["overflow"] = "hidden"),
        _0x3cbc2e.classList["add"](Zc));
    }),
    il(_0x16eb3e).forEach((_0x206f18) =>
      _0x206f18.dispatchEvent(new MouseEvent("mouseleave")),
    ),
    _0x450402.forEach(al));
  let _0x1cb515 = false;
  return () => {
    _0x1cb515 ||
      ((_0x1cb515 = true),
      _0x5bbf07.forEach(
        ({
          scrollBar: _0x3c0adc,
          enableHorizontal: _0x4b0f12,
          enableVertical: _0x3b1d78,
        }) => {
          ((_0x3c0adc.enableHorizontal = _0x4b0f12),
            (_0x3c0adc.enableVertical = _0x3b1d78));
        },
      ),
      _0x262ad3.forEach(({ object: _0x23f275, visible: _0x2ff203 }) => {
        if (_0x2ff203) {
          var _0x4adece;
          (_0x4adece = _0x23f275.show) == null || _0x4adece.call(_0x23f275);
        } else {
          var _0x4cb3b5;
          (_0x4cb3b5 = _0x23f275.hide) == null || _0x4cb3b5.call(_0x23f275);
        }
      }),
      _0x185d8a.forEach(
        ({
          element: _0x2561dd,
          overflow: _0x529c48,
          hadHideClass: _0x4a233f,
        }) => {
          ((_0x2561dd.style["overflow"] = _0x529c48),
            _0x4a233f || _0x2561dd.classList["remove"](Zc));
        },
      ),
      _0x450402.forEach(al));
  };
}
function tl(_0x959dd4) {
  return _0x959dd4 === _0x513c12.UNIVER_BASE
    ? new Promise((_0x13be15) => globalThis.setTimeout(_0x13be15, 920))
    : Promise.resolve();
}
function nl(_0x145ddb) {
  if (!_0x145ddb) return [];
  let _0x315e82 = [],
    _0x862179 = new Set(),
    _0x4e19eb = (_0x1d4302) => {
      var _0x47e28e;
      _0x862179.has(_0x1d4302) ||
        (_0x862179.add(_0x1d4302),
        _0x315e82.push(_0x1d4302),
        (_0x47e28e = _0x1d4302.getAllObjects) == null ||
          _0x47e28e.call(_0x1d4302).forEach((_0x30f216) => {
            var _0x420470;
            (_0x420470 = _0x30f216.getSubScenes) == null ||
              _0x420470.call(_0x30f216).forEach(_0x4e19eb);
          }));
    };
  return (_0x4e19eb(_0x145ddb), _0x315e82);
}
function rl(_0x754da3) {
  return [
    _0x754da3.container,
    _0x754da3.renderScope["rootElement"],
    _0x754da3.renderScope["contentRoot"],
    _0x754da3.renderScope["canvasRoot"],
  ].filter((_0x533b90) => !!_0x533b90);
}
function il(_0xd32b83) {
  return Array.from(
    new Set(
      _0xd32b83.flatMap((_0x1c8696) => [
        ...(_0x1c8696 instanceof HTMLCanvasElement ? [_0x1c8696] : []),
        ...Array.from(_0x1c8696.querySelectorAll("canvas")),
      ]),
    ),
  );
}
function al(_0x26be80) {
  var _0x4508cf, _0xdf43bd;
  (_0x26be80 == null ||
    (_0x4508cf = _0x26be80.makeDirty) == null ||
    _0x4508cf.call(_0x26be80, true),
    _0x26be80 == null ||
      (_0xdf43bd = _0x26be80.render) == null ||
      _0xdf43bd.call(_0x26be80));
}
const ol = "EMBED_DUPLICATE_CHILD_UNIT";
var sl = class extends Error {
  constructor(_0x17ca84, _0x5a3942) {
    (super(ol + ":\x20" + _0x17ca84),
      (this.childUnitId = _0x17ca84),
      (this.existingEmbedId = _0x5a3942),
      Y(this, "code", ol),
      (this.name = "EmbedDuplicateChildUnitError"));
  }
};
let cl = class {
  constructor(
    _0x3bbec6,
    _0x518d5d,
    _0x426d12,
    _0x8a74b,
    _0x8a00be,
    _0x1329f9,
    _0x1d8a6e,
    _0x43b5ee,
  ) {
    ((this._hostContainerRegistry = _0x3bbec6),
      (this._childViewRegistry = _0x518d5d),
      (this._overlayRootService = _0x426d12),
      (this._sceneCanvasCaptureService = _0x8a74b),
      (this._univerInstanceService = _0x8a00be),
      (this._floatingActiveService = _0x1329f9),
      (this._runtimePolicyService = _0x1d8a6e),
      (this._injector = _0x43b5ee),
      Y(this, "_sessions", new Map()),
      Y(this, "_tabFocusLeases", new Map()),
      Y(this, "_tabHostRenderLeases", new Map()));
  }
  mount(_0x42d2a3) {
    return this._mountResolvedHost(_0x42d2a3);
  }
  mountIntoHostElement(_0x5f38f6, _0x4e36ec, _0x26f342) {
    return this._mountResolvedHost(_0x5f38f6, {
      hostElement: _0x4e36ec,
      runtimeRoots: _0x26f342,
    });
  }
  _mountResolvedHost(_0x2523c1, _0x538246) {
    var _0x1f6661, _0x26179c;
    if (!_0x2523c1.childUnitId || _0x2523c1.childType == null)
      throw Error("EMBED_MOUNT_CHILD_NOT_RESOLVED");
    (this._assertChildUnitAvailable(_0x2523c1),
      this.unmount(_0x2523c1.embedId));
    let _0x71fc90 = {
        hostUnitId: _0x2523c1.hostUnitId,
        embedId: _0x2523c1.embedId,
        childUnitId: _0x2523c1.childUnitId,
      },
      _0x38f5a2 = this._resolveLayout(_0x2523c1),
      _0x490154 = this._hostContainerRegistry["get"](
        _0x2523c1.hostType,
        _0x2523c1.entry,
      );
    if (
      !_0x490154 ||
      !this._hostContainerRegistry["supports"](
        _0x2523c1.hostType,
        _0x2523c1.entry,
        _0x38f5a2,
      )
    )
      throw Error("EMBED_MOUNT_HOST_NOT_REGISTERED");
    let _0x3e05da = this._runtimePolicyService["canMount"](_0x71fc90),
      _0x25b38b = this._childViewRegistry["get"](_0x2523c1.childType);
    if (
      _0x3e05da.allowed &&
      !(_0x25b38b != null && _0x25b38b.supportedLayouts["includes"](_0x38f5a2))
    )
      throw Error("EMBED_MOUNT_CHILD_NOT_REGISTERED");
    let _0x54a3f6 = {
        descriptor: _0x2523c1,
        layout: _0x38f5a2,
        injector: this._injector,
        hostUnitId: _0x2523c1.hostUnitId,
        embedId: _0x2523c1.embedId,
        childUnitId: _0x2523c1.childUnitId,
        childType: _0x2523c1.childType,
      },
      _0x24af68 = [],
      _0x1f41c9 =
        _0x538246 ??
        ((_0x1f6661 = _0x490154.mount) == null
          ? undefined
          : _0x1f6661.call(_0x490154, _0x54a3f6)),
      _0x1ad2e8 = this._normalizeHostMountResult(_0x1f41c9);
    if (
      (_0x1ad2e8.disposable && _0x24af68.push(_0x1ad2e8.disposable),
      (_0x54a3f6.hostElement = _0x1ad2e8.hostElement ?? _0x54a3f6.hostElement),
      (_0x54a3f6.container = _0x54a3f6.hostElement),
      !_0x54a3f6.hostElement || !_0x54a3f6.container)
    )
      throw (
        [..._0x24af68].reverse().forEach((_0x29d159) => _0x29d159.dispose()),
        Error("EMBED_MOUNT_HOST_CONTAINER_NOT_RESOLVED")
      );
    if (
      (_0x1ad2e8.runtimeRoots || _0x24af68.push(hs(_0x54a3f6.hostElement)),
      !_0x3e05da.allowed)
    )
      return this._mountBlockedRuntime(
        _0x2523c1,
        _0x38f5a2,
        _0x54a3f6.hostElement,
        _0x1ad2e8.runtimeRoots,
        _0x24af68,
        _0x3e05da.reason,
      );
    if (!_0x25b38b)
      throw (
        [..._0x24af68].reverse().forEach((_0x54bda1) => _0x54bda1.dispose()),
        Error("EMBED_MOUNT_CHILD_NOT_REGISTERED")
      );
    let {
      renderScope: _0x5e623d,
      disposable: _0x2c0f40,
      setActive: _0x23ac8b,
    } = this._createRenderScope(
      _0x2523c1,
      _0x38f5a2,
      _0x54a3f6.hostElement,
      _0x1ad2e8.runtimeRoots,
    );
    _0x24af68.push(_0x2c0f40);
    let _0x34a7d6 = {
        ..._0x54a3f6,
        hostElement: _0x54a3f6.hostElement,
        container: _0x54a3f6.container,
        renderScope: _0x5e623d,
      },
      { runtimeScope: _0xfed39d, disposable: _0x3b6ad8 } = jc(
        _0x34a7d6,
        _0x23ac8b,
        _0x25b38b.scopedDependencies,
      ),
      _0x1c2f33 = { ..._0x34a7d6, runtimeScope: _0xfed39d };
    _0x24af68.push(_0x3b6ad8);
    let _0x2a853d = this._registerRuntimeBoundary(
      _0x2523c1,
      _0x54a3f6.hostElement,
      _0x5e623d,
      _0xfed39d.roots,
    );
    (_0x2a853d && _0x24af68.push(_0x2a853d),
      this._injector["has"](X) &&
        _0x24af68.push(
          this._injector["get"](X).registerRuntimeScope({
            embedId: _0x2523c1.embedId,
            hostUnitId: _0x2523c1.hostUnitId,
            childUnitId: _0x2523c1.childUnitId,
            childType: _0x2523c1.childType,
          }),
        ));
    let _0x1f85e8 =
      _0xfed39d.injector === _0x54a3f6.injector
        ? undefined
        : _0xfed39d.instanceService;
    (_0x24af68.push(
      this._registerChildFocusBridge(
        _0x2523c1,
        _0x54a3f6.hostElement,
        _0x5e623d.mode,
        _0x1f85e8,
      ),
    ),
      _0x24af68.push(
        this._sceneCanvasCaptureService["registerContext"](_0x1c2f33),
      ));
    let _0x4b406a = this._createMountFocusRestorer(_0x2523c1),
      _0x2adbd1 =
        (_0x26179c = _0x25b38b.mount) == null
          ? undefined
          : _0x26179c.call(_0x25b38b, _0x1c2f33);
    if (
      (_0x2adbd1 && _0x24af68.push(_0x2adbd1),
      _0x24af68.push(_0x4b406a),
      _0x24af68.push(
        this._runtimePolicyService["registerMountedRuntime"](_0x71fc90),
      ),
      _0x5e623d.mode === "float")
    ) {
      let _0x38661f = this._mountFloatingMenu(_0x1c2f33);
      _0x38661f && _0x24af68.push(_0x38661f);
    }
    let _0x1cb909 = {
      hostUnitId: _0x2523c1.hostUnitId,
      embedId: _0x2523c1.embedId,
      childUnitId: _0x2523c1.childUnitId,
      childType: _0x2523c1.childType,
      entry: _0x2523c1.entry,
      layout: _0x38f5a2,
      hostElement: _0x54a3f6.hostElement,
      context: _0x1c2f33,
    };
    return (
      this._sessions["set"](_0x2523c1.embedId, {
        session: _0x1cb909,
        disposables: _0x24af68,
        setActive: _0x23ac8b,
      }),
      _0x38f5a2 !== "tab-peer" &&
        this._initializeFloatingSessionActiveState(
          _0x2523c1,
          _0x38f5a2,
          _0x23ac8b,
        ),
      _0x1cb909
    );
  }
  _mountBlockedRuntime(
    _0xd565f,
    _0x136396,
    _0x33f213,
    _0x2da848,
    _0x3e4ef9,
    _0x241702,
  ) {
    let _0x502e01 =
        (_0x2da848 == null ? undefined : _0x2da848.content) ??
        ms(_0x33f213, "data-embed-content-root") ??
        _0x33f213,
      _0x3e6be6 = ul(_0x241702);
    (_0x502e01.replaceChildren(_0x3e6be6),
      _0x3e4ef9.push(
        _0x11d17f(() => {
          _0x3e6be6.parentElement === _0x502e01 && _0x3e6be6.remove();
        }),
      ));
    let _0x42388c = {
      hostUnitId: _0xd565f.hostUnitId,
      embedId: _0xd565f.embedId,
      childUnitId: _0xd565f.childUnitId,
      childType: _0xd565f.childType,
      entry: _0xd565f.entry,
      layout: _0x136396,
      hostElement: _0x33f213,
    };
    return (
      this._sessions["set"](_0xd565f.embedId, {
        session: _0x42388c,
        disposables: _0x3e4ef9,
        setActive: () => {},
      }),
      _0x42388c
    );
  }
  _initializeFloatingSessionActiveState(_0x39a215, _0xef0455, _0x41e4a2) {
    if (_0xef0455 !== "tab-peer") {
      if (this._injector["has"](_0xd33e59)) {
        let _0x34c6a4 = this._injector["get"](_0xd33e59).getFocusOwner();
        if (
          (_0x34c6a4 == null ? undefined : _0x34c6a4.hostUnitId) ===
          _0x39a215.hostUnitId
        ) {
          _0x41e4a2(_0x34c6a4.embedId === _0x39a215.embedId);
          return;
        }
      }
      _0x41e4a2(false);
    }
  }
  unmount(_0x1787c4) {
    let _0x5f1601 = this._sessions["get"](_0x1787c4);
    _0x5f1601 &&
      (this._releaseTabPeerFocusLease(_0x1787c4),
      this._releaseTabPeerHostRenderLease(_0x1787c4),
      [..._0x5f1601.disposables]
        .reverse()
        .forEach((_0x111f71) => _0x111f71.dispose()),
      this._sessions["delete"](_0x1787c4));
  }
  getSession(_0x14fc8a) {
    var _0x3cd4c4;
    return (_0x3cd4c4 = this._sessions["get"](_0x14fc8a)) == null
      ? undefined
      : _0x3cd4c4.session;
  }
  listSessions() {
    return [...this._sessions["values"]()].map(
      ({ session: _0x55db39 }) => _0x55db39,
    );
  }
  activateSession(_0xeb021c) {
    let _0xe302c8 = this._sessions["get"](_0xeb021c);
    if (_0xe302c8) {
      if (_0xe302c8.session["layout"] !== "tab-peer") {
        var _0x419ce6;
        let _0x534f42 =
          (_0x419ce6 = this._floatingActiveService["getActive"]()) == null
            ? undefined
            : _0x419ce6.embedId;
        this._sessions["forEach"]((_0x2ba980) => {
          var _0x3e7bbf;
          if (
            _0x2ba980.session["layout"] === "tab-peer" ||
            _0x2ba980.session["hostUnitId"] !== _0xe302c8.session["hostUnitId"]
          )
            return;
          let _0x432331 = _0x2ba980.session["embedId"] === _0xeb021c;
          (!_0x432331 &&
            (_0x2ba980.session["embedId"] === _0x534f42 ||
              ((_0x3e7bbf = _0x2ba980.session["context"]) == null
                ? undefined
                : _0x3e7bbf.renderScope["rootElement"].dataset[
                    "embedRenderScopeActive"
                  ]) === "true") &&
            this._runChildBeforeDeactivate(_0x2ba980.session),
            _0x2ba980.setActive(_0x432331));
        });
        return;
      }
      (this._suspendTabPeerHostRender(_0xe302c8.session),
        this._sessions["forEach"]((_0x3833f) => {
          var _0x5913b;
          if (
            _0x3833f.session["layout"] !== "tab-peer" ||
            _0x3833f.session["hostUnitId"] !== _0xe302c8.session["hostUnitId"]
          )
            return;
          let _0x22c817 = _0x3833f.session["embedId"] === _0xeb021c;
          (!_0x22c817 &&
            ((_0x5913b = _0x3833f.session["context"]) == null
              ? undefined
              : _0x5913b.renderScope["rootElement"].dataset[
                  "embedRenderScopeActive"
                ]) === "true" &&
            this._runChildBeforeDeactivate(_0x3833f.session),
            _0x3833f.setActive(_0x22c817));
        }),
        this._focusTabPeerSession(_0xe302c8.session),
        this._refreshTabPeerRender(_0xe302c8.session));
    }
  }
  releaseSessionFocus(_0x349b1d) {
    let _0x4b5ef2 = this._tabFocusLeases["has"](_0x349b1d);
    return (this._releaseTabPeerFocusLease(_0x349b1d), _0x4b5ef2);
  }
  deactivateTabSessions(_0x5b614d) {
    let _0x1a4cd9 = [];
    return (
      this._sessions["forEach"]((_0x167a9f) => {
        _0x167a9f.session["layout"] === "tab-peer" &&
          ((_0x5b614d && _0x167a9f.session["embedId"] !== _0x5b614d) ||
            (this._runChildBeforeDeactivate(_0x167a9f.session),
            this._releaseTabPeerFocusLease(_0x167a9f.session["embedId"]),
            _0x167a9f.setActive(false),
            this._releaseTabPeerHostRenderLease(_0x167a9f.session["embedId"]),
            _0x1a4cd9.push(_0x167a9f.session)));
      }),
      _0x1a4cd9
    );
  }
  deactivateFloatingSession(_0x54be6b) {
    let _0x350040 = this._sessions["get"](_0x54be6b);
    if (!(!_0x350040 || _0x350040.session["layout"] === "tab-peer"))
      return (
        this._runChildBeforeDeactivate(_0x350040.session),
        _0x350040.setActive(false),
        _0x350040.session
      );
  }
  setActive(_0x411e62, _0x3251c2) {
    var _0x402426;
    (_0x402426 = this._sessions["get"](_0x411e62)) == null ||
      _0x402426.setActive(_0x3251c2);
  }
  _runChildBeforeDeactivate(_0xc3cdfd) {
    let _0x4bf7d3 = _0xc3cdfd.context;
    if (!_0x4bf7d3) return;
    let _0x3049d7 = this._childViewRegistry["get"](_0xc3cdfd.childType);
    if (_0x3049d7 != null && _0x3049d7.beforeDeactivate)
      try {
        _0x3049d7.beforeDeactivate(_0x4bf7d3);
      } catch (_0xfc05a) {
        console.warn(
          "[embed-ui] failed to deactivate embedded child view",
          _0xfc05a,
        );
      }
  }
  _suspendTabPeerHostRender(_0x554c06) {
    var _0x18e3fe;
    let _0x599fb6 =
      (_0x18e3fe = _0x554c06.context) == null ? undefined : _0x18e3fe.injector;
    if (!(_0x599fb6 != null && _0x599fb6.has(_0x2db5c6))) return;
    let _0x31bf03 = this._tabHostRenderLeases["get"](_0x554c06.hostUnitId);
    if (_0x31bf03) {
      this._tabHostRenderLeases["set"](_0x554c06.hostUnitId, {
        ..._0x31bf03,
        embedId: _0x554c06.embedId,
      });
      return;
    }
    let _0x4982c9 = _0x599fb6
      .get(_0x2db5c6)
      .getRenderUnitById(_0x554c06.hostUnitId);
    if (!_0x4982c9 || _0x4982c9.isMainScene === false || _0x4982c9.isDisposed())
      return;
    let _0x1f6028 = _0x4982c9.engine["getCanvasElement"]().parentElement;
    _0x1f6028 &&
      (_0x4982c9.deactivate(),
      _0x4982c9.engine["unmount"](),
      this._tabHostRenderLeases["set"](_0x554c06.hostUnitId, {
        embedId: _0x554c06.embedId,
        render: _0x4982c9,
        parentElement: _0x1f6028,
      }));
  }
  _releaseTabPeerHostRenderLease(_0xf30bf3) {
    this._tabHostRenderLeases["forEach"]((_0x74e892, _0x1d3026) => {
      _0x74e892.embedId === _0xf30bf3 &&
        (this._tabHostRenderLeases["delete"](_0x1d3026),
        !(
          _0x74e892.render["isDisposed"]() ||
          !_0x74e892.parentElement["isConnected"]
        ) &&
          (_0x74e892.render["engine"].getCanvasElement().parentElement !==
            _0x74e892.parentElement &&
            _0x74e892.render["engine"].mount(_0x74e892.parentElement),
          Jc(_0x74e892.render, { activate: true })));
    });
  }
  _resolveLayout(_0x25eecf) {
    var _0x45fea2, _0x588964;
    let _0x58ad57 =
      ((_0x45fea2 = _0x25eecf.sourceMeta) == null
        ? undefined
        : _0x45fea2.floating) || undefined;
    if (_0x58ad57 != null && _0x58ad57.layout) return _0x58ad57.layout;
    let _0xbfe72e =
      ((_0x588964 = _0x25eecf.sourceMeta) == null
        ? undefined
        : _0x588964.tab) || undefined;
    if (_0xbfe72e != null && _0xbfe72e.enabled) return "tab-peer";
    throw Error("EMBED_MOUNT_LAYOUT_NOT_RESOLVED");
  }
  _createRenderScope(_0x46915d, _0x3a05ae, _0x50a574, _0x1460d4) {
    var _0xcbd4a0, _0x26d5ec;
    let _0x4b307a = new _0x2ac10f(true),
      _0x113a8e = _0x46915d.hostAnchorId,
      _0x411262 =
        (_0xcbd4a0 = _0x46915d.sourceMeta) == null ? undefined : _0xcbd4a0.tab,
      _0xa1310c =
        _0x411262 && _0x411262.enabled
          ? "tab"
          : (_0x26d5ec = _0x46915d.sourceMeta) != null && _0x26d5ec.floating
            ? "float"
            : "inline",
      _0x1f404a =
        (_0x1460d4 == null ? undefined : _0x1460d4.content) ??
        ms(_0x50a574, "data-embed-content-root") ??
        _0x50a574,
      _0x206fad =
        (_0x1460d4 == null ? undefined : _0x1460d4.canvas) ??
        ms(_0x50a574, "data-embed-canvas-root") ??
        _0x50a574,
      _0x1105fa =
        (_0x1460d4 == null ? undefined : _0x1460d4.overlay) ??
        ms(_0x50a574, "data-embed-overlay-root") ??
        _0x50a574,
      _0xd2f1ed =
        (_0x1460d4 == null ? undefined : _0x1460d4.popup) ??
        ms(_0x50a574, "data-embed-popup-root") ??
        _0x1105fa,
      _0x3fa940 = this._overlayRootService["register"]({
        childUnitId: _0x46915d.childUnitId,
        embedId: _0x46915d.embedId,
        hostAnchorId: _0x113a8e,
        root: _0x1105fa,
      }),
      _0x29ff5a = (_0x486463) => {
        _0x4b307a.getValue() !== _0x486463 &&
          (ll(_0x50a574, _0x486463, _0xa1310c), _0x4b307a.next(_0x486463));
      };
    return (
      ll(_0x50a574, true, _0xa1310c),
      {
        renderScope: {
          hostUnitId: _0x46915d.hostUnitId,
          hostAnchorId: _0x113a8e,
          embedId: _0x46915d.embedId,
          childUnitId: _0x46915d.childUnitId,
          childType: _0x46915d.childType,
          layout: _0x3a05ae,
          mode: _0xa1310c,
          rootElement: _0x50a574,
          contentRoot: _0x1f404a,
          canvasRoot: _0x206fad,
          overlayRoot: _0x1105fa,
          popupRoot: _0xd2f1ed,
          menuOutlet:
            _0x1460d4 != null && _0x1460d4.menuSlot
              ? { container: _0x1460d4.menuSlot }
              : undefined,
          active$: _0x4b307a.asObservable(),
        },
        disposable: _0x11d17f(() => {
          (_0x3fa940.dispose(), _0x29ff5a(false), _0x4b307a.complete());
        }),
        setActive: _0x29ff5a,
      }
    );
  }
  _registerRuntimeBoundary(_0x50c4ee, _0x27e469, _0x2acaa6, _0x34daec) {
    let _0x400e85 = this._injector["has"](Es),
      _0x4b2f47 = this._injector["has"](X);
    if (!_0x400e85 && !_0x4b2f47) return;
    let _0x44a2ef = _0x400e85 ? this._injector["get"](Es) : undefined,
      _0x499319 = _0x4b2f47 ? this._injector["get"](X) : undefined,
      _0x1ce400 = new Map(),
      _0x239a74 = (_0x44327a, _0x574dc8) => {
        if (!_0x44327a) return;
        let _0xc85a8c = _0x1ce400.get(_0x44327a);
        (!_0xc85a8c || _0xc85a8c === "runtime") &&
          _0x1ce400.set(_0x44327a, _0x574dc8);
      };
    (_0x239a74(_0x27e469, "runtime"),
      _0x239a74(_0x2acaa6.rootElement, "runtime"),
      _0x239a74(_0x2acaa6.contentRoot, "runtime"),
      _0x239a74(_0x2acaa6.canvasRoot, "runtime"),
      _0x239a74(_0x2acaa6.overlayRoot, "runtime"),
      _0x239a74(_0x34daec.root, "runtime"),
      _0x239a74(_0x34daec.content, "runtime"),
      _0x239a74(_0x34daec.canvas, "runtime"),
      _0x239a74(_0x34daec.overlay, "runtime"),
      _0x239a74(_0x2acaa6.popupRoot, "child-popup"),
      _0x239a74(_0x34daec.popup, "child-popup"));
    let _0x1fd062 = [..._0x1ce400].flatMap(([_0x5b3181, _0x5cfddc]) =>
      [
        _0x44a2ef == null
          ? undefined
          : _0x44a2ef.registerRoot(
              _0x50c4ee.embedId,
              _0x5b3181,
              _0x50c4ee.childUnitId,
            ),
        _0x499319 == null
          ? undefined
          : _0x499319.registerElement({
              embedId: _0x50c4ee.embedId,
              role: _0x5cfddc,
              element: _0x5b3181,
            }),
      ].filter((_0x5d8887) => !!_0x5d8887),
    );
    return _0x11d17f(() => {
      [..._0x1fd062].reverse().forEach((_0x28a036) => _0x28a036.dispose());
    });
  }
  _normalizeHostMountResult(_0x32a2b4) {
    return _0x32a2b4
      ? "dispose" in _0x32a2b4
        ? { disposable: _0x32a2b4 }
        : {
            hostElement: _0x32a2b4.hostElement,
            runtimeRoots: _0x32a2b4.runtimeRoots,
            disposable: _0x32a2b4.disposable
              ? _0x11d17f(() => {
                  var _0x50df88;
                  return (_0x50df88 = _0x32a2b4.disposable) == null
                    ? undefined
                    : _0x50df88.dispose();
                })
              : undefined,
          }
      : {};
  }
  _mountFloatingMenu(_0x47157c) {
    if (!this._injector["has"](Lc)) return;
    let _0x37c164 = this._injector["get"](Lc).get(
      _0x47157c.descriptor["hostType"],
      _0x47157c.descriptor["entry"],
      _0x47157c.childType,
    );
    if (!_0x37c164) return;
    let _0x52db03 = this._floatingActiveService["getActive"](),
      _0x42f7f2 = _0x37c164.mount({ ..._0x47157c, active: _0x52db03 });
    return _0x42f7f2 ? _0x11d17f(() => _0x42f7f2.dispose()) : undefined;
  }
  _registerChildFocusBridge(_0x471590, _0xe45e07, _0x1fad1b, _0x399729) {
    let _0xaf9e18 = this._injector["has"](Es)
        ? this._injector["get"](Es)
        : undefined,
      _0x20b81c = this._injector["has"](X)
        ? this._injector["get"](X)
        : undefined,
      _0x126e15 = _0xe45e07.ownerDocument,
      _0x3ca4f0 = [],
      _0x20bfc5 =
        _0x1fad1b === "float" && _0x399729
          ? this._floatingActiveService["active$"].subscribe(() => {
              this._floatingActiveService["getStage"](_0x471590.embedId) !==
                "stage2" && _0x399729.focusUnit(null);
            })
          : undefined,
      _0x506ca4 = () =>
        _0x1fad1b !== "float" ||
        this._floatingActiveService["getStage"](_0x471590.embedId) === "stage2",
      _0x43a82d = (_0xfe0353, _0x5f244d = {}) => {
        let _0x41e085 = _0x5f244d.focusUnit !== false,
          _0x559861 = _0x5f244d.activateSession !== false,
          _0x59bfaa =
            (_0xfe0353 == null ? undefined : _0xfe0353.target) instanceof
            Element
              ? _0xfe0353.target
              : null;
        if (
          (_0x59bfaa != null &&
            _0x59bfaa.closest(
              '[data-embed-floating-menu="true"], [data-embed-floating-menu-popup="true"], [data-embed-ribbon-override="true"]',
            )) ||
          !_0x471590.childUnitId ||
          _0x471590.childType == null ||
          (_0x1fad1b === "tab" &&
            (_0xfe0353 == null ? undefined : _0xfe0353.type) === "focusin" &&
            !this._tabFocusLeases["has"](_0x471590.embedId)) ||
          !_0x506ca4()
        )
          return;
        let _0x36f6f8 =
            _0x1fad1b === "tab" && this._injector["has"](_0xd33e59)
              ? this._injector["get"](_0xd33e59).getFocusOwner()
              : null,
          _0x17e67c =
            (_0x36f6f8 == null ? undefined : _0x36f6f8.hostUnitId) ===
              _0x471590.hostUnitId &&
            _0x36f6f8.embedId === _0x471590.embedId &&
            _0x36f6f8.childUnitId === _0x471590.childUnitId &&
            _0x36f6f8.childType === _0x471590.childType;
        if (
          (_0x1fad1b === "float" &&
            _0x399729 &&
            (_0x399729.setCurrentUnitForType(_0x471590.childUnitId),
            _0x41e085 && _0x399729.focusUnit(_0x471590.childUnitId)),
          _0x1fad1b === "tab" && this._injector["has"](_0x3e617f))
        ) {
          var _0x4ce09b, _0x2aef2f;
          let _0x27839f = this._injector["get"](_0x3e617f),
            _0x50206b = _0x27839f.getCurrentUnitOfType,
            _0x28d8b5 = _0x27839f.getFocusedUnit;
          ((typeof _0x50206b != "function" ||
            ((_0x4ce09b = _0x50206b.call(_0x27839f, _0x471590.childType)) ==
            null
              ? undefined
              : _0x4ce09b.getUnitId()) !== _0x471590.childUnitId) &&
            _0x27839f.setCurrentUnitForType(_0x471590.childUnitId),
            _0x41e085 &&
              (typeof _0x28d8b5 != "function" ||
                ((_0x2aef2f = _0x28d8b5.call(_0x27839f)) == null
                  ? undefined
                  : _0x2aef2f.getUnitId()) !== _0x471590.childUnitId) &&
              _0x27839f.focusUnit(_0x471590.childUnitId));
        }
        if (_0x1fad1b === "tab" && this._injector["has"](_0x113203)) {
          let _0x9bc6e5 = this._injector["get"](_0x113203);
          (_0x9bc6e5.setContextValue(_0x22a7dd, true),
            _0x9bc6e5.setContextValue(
              _0x55448b,
              _0x471590.childType === _0x513c12.UNIVER_DOC,
            ),
            _0x9bc6e5.setContextValue(
              _0x1d103b,
              _0x471590.childType === _0x513c12.UNIVER_SHEET,
            ),
            _0x9bc6e5.setContextValue(
              _0x54742f,
              _0x471590.childType === _0x513c12.UNIVER_SLIDE,
            ),
            _0x9bc6e5.setContextValue(
              _0x3a4db3,
              _0x471590.childType === _0x513c12.UNIVER_BOARD,
            ));
        }
        if (this._injector["has"](_0xd33e59)) {
          let _0x56e675 = this._injector["get"](_0xd33e59),
            _0x1cbfea = {
              hostUnitId: _0x471590.hostUnitId,
              embedId: _0x471590.embedId,
              childUnitId: _0x471590.childUnitId,
              childType: _0x471590.childType,
              reason: "pointer",
            },
            _0x2eec6c = _0x56e675.getFocusOwner();
          ((_0x2eec6c == null ? undefined : _0x2eec6c.hostUnitId) !==
            _0x1cbfea.hostUnitId ||
            _0x2eec6c.embedId !== _0x1cbfea.embedId ||
            _0x2eec6c.childUnitId !== _0x1cbfea.childUnitId ||
            _0x2eec6c.childType !== _0x1cbfea.childType ||
            _0x2eec6c.reason !== _0x1cbfea.reason) &&
            _0x56e675.setFocusOwner(_0x1cbfea);
        }
        _0x559861 &&
          ((_0x1fad1b === "tab" &&
            _0xe45e07.dataset["embedRenderScopeActive"] === "true" &&
            this._tabFocusLeases["has"](_0x471590.embedId) &&
            ((_0xfe0353 == null ? undefined : _0xfe0353.type) ===
              "pointerdown" ||
              _0x17e67c)) ||
            this.activateSession(_0x471590.embedId));
      },
      _0x3bd64f = (_0x5ab14b) => {
        let _0xfbd932 =
          _0x5ab14b.target instanceof Element ? _0x5ab14b.target : null;
        if (
          !_0xfbd932 ||
          _0xe45e07.contains(_0xfbd932) ||
          !(
            (_0xaf9e18 != null &&
              _0xaf9e18.contains(_0x471590.embedId, _0xfbd932, _0x5ab14b)) ||
            (_0x20b81c != null &&
              _0x20b81c.containsElement(
                _0x471590.embedId,
                _0xfbd932,
                _0x5ab14b,
              ))
          )
        )
          return;
        _0x43a82d(_0x5ab14b, { focusUnit: false, activateSession: false });
        let _0x140a0d = _0x126e15.defaultView;
        _0x140a0d &&
          _0x3ca4f0.push(
            _0x140a0d.setTimeout(
              () =>
                _0x43a82d(_0x5ab14b, {
                  focusUnit: false,
                  activateSession: false,
                }),
              0,
            ),
          );
      };
    return (
      _0xe45e07.addEventListener("pointerdown", _0x43a82d, { capture: true }),
      _0xe45e07.addEventListener("focusin", _0x43a82d),
      _0x126e15.addEventListener("pointerdown", _0x3bd64f, { capture: true }),
      _0x126e15.addEventListener("focusin", _0x3bd64f, { capture: true }),
      _0x11d17f(() => {
        (_0xe45e07.removeEventListener("pointerdown", _0x43a82d, {
          capture: true,
        }),
          _0xe45e07.removeEventListener("focusin", _0x43a82d),
          _0x126e15.removeEventListener("pointerdown", _0x3bd64f, {
            capture: true,
          }),
          _0x126e15.removeEventListener("focusin", _0x3bd64f, {
            capture: true,
          }),
          _0x3ca4f0.forEach((_0x53edd9) => {
            var _0x4bb1cd;
            return (_0x4bb1cd = _0x126e15.defaultView) == null
              ? undefined
              : _0x4bb1cd.clearTimeout(_0x53edd9);
          }),
          _0x20bfc5 == null || _0x20bfc5.unsubscribe());
      })
    );
  }
  _focusTabPeerSession(_0x2a3f6f) {
    if (
      (this._activateTabPeerFocusLease(_0x2a3f6f),
      this._injector["has"](_0x3e617f))
    ) {
      let _0x4cc80a = this._injector["get"](_0x3e617f);
      (_0x4cc80a.setCurrentUnitForType(_0x2a3f6f.childUnitId),
        _0x4cc80a.focusUnit(_0x2a3f6f.childUnitId));
    }
    if (this._injector["has"](_0x113203)) {
      let _0xa35648 = this._injector["get"](_0x113203);
      (_0xa35648.setContextValue(_0x22a7dd, true),
        _0xa35648.setContextValue(
          _0x55448b,
          _0x2a3f6f.childType === _0x513c12.UNIVER_DOC,
        ),
        _0xa35648.setContextValue(
          _0x1d103b,
          _0x2a3f6f.childType === _0x513c12.UNIVER_SHEET,
        ),
        _0xa35648.setContextValue(
          _0x54742f,
          _0x2a3f6f.childType === _0x513c12.UNIVER_SLIDE,
        ),
        _0xa35648.setContextValue(
          _0x3a4db3,
          _0x2a3f6f.childType === _0x513c12.UNIVER_BOARD,
        ));
    }
    this._injector["has"](_0xd33e59) &&
      this._injector["get"](_0xd33e59).setFocusOwner({
        hostUnitId: _0x2a3f6f.hostUnitId,
        embedId: _0x2a3f6f.embedId,
        childUnitId: _0x2a3f6f.childUnitId,
        childType: _0x2a3f6f.childType,
        reason: "keyboard",
      });
  }
  _refreshTabPeerRender(_0x2eda48) {
    var _0x296ced;
    let _0x22437b =
      (_0x296ced = _0x2eda48.context) == null ? undefined : _0x296ced.injector;
    if (!(_0x22437b != null && _0x22437b.has(_0x2db5c6))) return;
    let _0x6cfaa1 = _0x22437b
      .get(_0x2db5c6)
      .getRenderUnitById(_0x2eda48.childUnitId);
    (_0x6cfaa1 == null ? undefined : _0x6cfaa1.isMainScene) === false &&
      Jc(_0x6cfaa1, { activate: true });
  }
  _activateTabPeerFocusLease(_0x3020cc) {
    (this._releaseTabPeerFocusLeasesForHost(
      _0x3020cc.hostUnitId,
      _0x3020cc.embedId,
    ),
      this._releaseTabPeerFocusLease(_0x3020cc.embedId));
    let _0x581c96 = [];
    if (
      (this._injector["has"](X) &&
        _0x581c96.push(
          this._injector["get"](X).acquireLease({
            embedId: _0x3020cc.embedId,
            role: "child-session",
            owner: "tab-peer-runtime",
            sessionMode: "child-tab",
            hostUnitId: _0x3020cc.hostUnitId,
            childUnitId: _0x3020cc.childUnitId,
            childType: _0x3020cc.childType,
          }),
        ),
      this._injector["has"](Es))
    ) {
      var _0x438a63, _0xdf6f8f;
      _0x581c96.push(
        this._injector["get"](Es).activatePortalScope(
          _0x3020cc.embedId,
          ((_0x438a63 = _0x3020cc.hostElement) == null
            ? undefined
            : _0x438a63.ownerDocument) ??
            ((_0xdf6f8f = _0x3020cc.context) == null
              ? undefined
              : _0xdf6f8f.renderScope["rootElement"].ownerDocument),
          {
            includeAppShellEditorPortal:
              _0x3020cc.childType === _0x513c12.UNIVER_SHEET,
          },
        ),
      );
    }
    _0x581c96.length &&
      this._tabFocusLeases["set"](_0x3020cc.embedId, {
        hostUnitId: _0x3020cc.hostUnitId,
        disposable: _0x11d17f(() => {
          [..._0x581c96].reverse().forEach((_0x113524) => _0x113524.dispose());
        }),
      });
  }
  _releaseTabPeerFocusLeasesForHost(_0x2c6e3a, _0x15bbc9) {
    [...this._tabFocusLeases["entries"]()].forEach(([_0x3be4ed, _0x56a91c]) => {
      _0x3be4ed !== _0x15bbc9 &&
        _0x56a91c.hostUnitId === _0x2c6e3a &&
        (_0x56a91c.disposable["dispose"](),
        this._tabFocusLeases["delete"](_0x3be4ed));
    });
  }
  _releaseTabPeerFocusLease(_0x59847b) {
    let _0x95b375 = this._tabFocusLeases["get"](_0x59847b);
    _0x95b375 &&
      (_0x95b375.disposable["dispose"](),
      this._tabFocusLeases["delete"](_0x59847b));
  }
  _createMountFocusRestorer(_0x288d50) {
    var _0x51afb6, _0x18ea8a;
    if (
      ((_0x51afb6 = _0x288d50.sourceMeta) != null &&
        _0x51afb6.tab &&
        _0x288d50.sourceMeta["tab"].enabled) ||
      !this._injector["has"](_0x3e617f) ||
      !_0x288d50.childUnitId
    )
      return _0x11d17f(() => {});
    let _0x55a149 = this._injector["get"](_0x3e617f),
      _0x500afd = _0x55a149.getFocusedUnit,
      _0xf9aca2 = _0x55a149.focusUnit;
    if (typeof _0x500afd != "function" || typeof _0xf9aca2 != "function")
      return _0x11d17f(() => {});
    let _0x1b3435 =
      (_0x18ea8a = _0x500afd.call(_0x55a149)) == null
        ? undefined
        : _0x18ea8a.getUnitId();
    if (!_0x1b3435 || _0x1b3435 === _0x288d50.childUnitId)
      return _0x11d17f(() => {});
    let _0x50a104 = () => {
        var _0xf5180e;
        ((_0xf5180e = _0x500afd.call(_0x55a149)) == null
          ? undefined
          : _0xf5180e.getUnitId()) === _0x288d50.childUnitId &&
          _0xf9aca2.call(_0x55a149, _0x1b3435);
      },
      _0x4b14f4 = [],
      _0x42991c = [];
    return (
      _0x50a104(),
      typeof window < "u" &&
        (_0x42991c.push(window.requestAnimationFrame(_0x50a104)),
        _0x4b14f4.push(window.setTimeout(_0x50a104, 0)),
        _0x4b14f4.push(window.setTimeout(_0x50a104, 120))),
      _0x11d17f(() => {
        typeof window > "u" ||
          (_0x42991c.forEach((_0x31d0c6) =>
            window.cancelAnimationFrame(_0x31d0c6),
          ),
          _0x4b14f4.forEach((_0xcc4122) => window.clearTimeout(_0xcc4122)));
      })
    );
  }
  _assertChildUnitAvailable(_0x27e60a) {
    let _0x2543c8 = [...this._sessions["values"]()].find(
      ({ session: _0x4d4f4d }) =>
        _0x4d4f4d.embedId !== _0x27e60a.embedId &&
        _0x4d4f4d.childUnitId === _0x27e60a.childUnitId,
    );
    if (_0x2543c8)
      throw new sl(_0x27e60a.childUnitId, _0x2543c8.session["embedId"]);
    if (
      this._univerInstanceService["getUnit"](
        _0x27e60a.childUnitId,
        _0x27e60a.childType,
      )
    )
      return;
    let _0x2fd43 = this._univerInstanceService["getUnitType"](
      _0x27e60a.childUnitId,
    );
    throw _0x2fd43 !== _0x513c12.UNRECOGNIZED &&
      _0x2fd43 !== _0x27e60a.childType
      ? Error("EMBED_MOUNT_CHILD_TYPE_MISMATCH")
      : Error("EMBED_MOUNT_CHILD_UNIT_NOT_AVAILABLE");
  }
};
cl = $(
  [
    Q(0, _0x1a6fa3(Rc)),
    Q(1, _0x1a6fa3(Ic)),
    Q(2, _0x1a6fa3(zc)),
    Q(3, _0x1a6fa3(Yc)),
    Q(4, _0x3e617f),
    Q(5, _0x1a6fa3(xs)),
    Q(6, _0x1a6fa3(Ds)),
    Q(7, _0x1a6fa3(_0x20cff5)),
  ],
  cl,
);
function ll(_0x1161dc, _0x4dc06b, _0x5caaa9) {
  if (
    ((_0x1161dc.dataset["embedRenderScopeActive"] = _0x4dc06b
      ? "true"
      : "false"),
    _0x5caaa9 !== "tab")
  ) {
    (_0x1161dc.removeAttribute("inert"),
      _0x1161dc.removeAttribute("aria-hidden"),
      _0x1161dc.style["removeProperty"]("display"),
      _0x1161dc.style["removeProperty"]("pointer-events"));
    return;
  }
  if ((_0x1161dc.toggleAttribute("inert", !_0x4dc06b), _0x4dc06b)) {
    (_0x1161dc.removeAttribute("aria-hidden"),
      _0x1161dc.style["removeProperty"]("display"),
      _0x1161dc.style["removeProperty"]("pointer-events"));
    return;
  }
  (_0x1161dc.setAttribute("aria-hidden", "true"),
    (_0x1161dc.style["display"] = "none"),
    (_0x1161dc.style["pointerEvents"] = "none"));
}
function ul(_0x21a030) {
  let _0x4edf09 = document.createElement("div");
  return (
    (_0x4edf09.dataset["embedRuntimeBlocked"] = _0x21a030 ?? "nested"),
    (_0x4edf09.style["cssText"] = [
      "box-sizing:border-box",
      "width:100%",
      "height:100%",
      "min-height:96px",
      "display:flex",
      "align-items:center",
      "justify-content:center",
      "padding:16px",
      "border:1px dashed rgba(99,102,106,.35)",
      "border-radius:8px",
      "background:rgba(99,102,106,.06)",
      "color:rgba(30,34,43,.64)",
      "font:13px/1.5 sans-serif",
      "text-align:center",
    ].join(";")),
    (_0x4edf09.textContent =
      _0x21a030 === "cycle"
        ? "Nested embed cycle is not supported."
        : "Nested embed is not supported."),
    _0x4edf09
  );
}
let dl = class extends _0x5f3c10 {
  constructor(
    _0x392904,
    _0x5cb30e,
    _0x134b12,
    _0x33de32,
    _0x3a0b90,
    _0x57803e,
    _0x2c2be4,
    _0x4276b9,
    _0xf7fc3e,
  ) {
    var _0x1d50d0;
    (super(),
      (this._univerInstanceService = _0x392904),
      (this._focusOwnerService = _0x5cb30e),
      (this._hostAdapterRegistry = _0x134b12),
      (this._menuOverrideService = _0x33de32),
      (this._mountService = _0x3a0b90),
      (this._blockRegistry = _0x57803e),
      (this._floatingActiveService = _0x2c2be4),
      (this._contextService = _0x4276b9),
      (this._layoutService = _0xf7fc3e),
      Y(this, "_previousChildCurrentUnits", new Map()));
    let _0xad2ed6 =
      (_0x1d50d0 = this._univerInstanceService["focused$"]) == null
        ? undefined
        : _0x1d50d0.subscribe((_0x29cc93) => {
            this._restoreStage2ChildFocusWhenHostRefocuses(_0x29cc93 ?? null);
          });
    _0xad2ed6 && this.disposeWithMe(_0xad2ed6);
  }
  activateTab(_0x3f297f) {
    var _0x40ee32;
    (this._assertResolvedChild(_0x3f297f),
      this._rememberPreviousChildCurrentUnit(_0x3f297f),
      this._hostAdapterRegistry["activateAnchor"]({
        embedId: _0x3f297f.embedId,
        hostUnitId: _0x3f297f.hostUnitId,
        hostType: _0x3f297f.hostType,
        entry: _0x3f297f.entry,
        hostAnchorId: _0x3f297f.hostAnchorId,
        descriptor: _0x3f297f,
      }),
      this._mountService["activateSession"](_0x3f297f.embedId));
    let _0x1afc48 = this._blockRegistry["get"](_0x3f297f.childType);
    return this._menuOverrideService["activate"](_0x3f297f, "tab-active", {
      layoutPolicy:
        _0x1afc48 == null || (_0x40ee32 = _0x1afc48.layoutPolicy) == null
          ? undefined
          : _0x40ee32.tab,
      allowPlaceholder:
        (_0x1afc48 == null ? undefined : _0x1afc48.hostChromeMode) ===
          "title-only" ||
        (_0x1afc48 == null ? undefined : _0x1afc48.hostHeaderMode) ===
          "placeholder",
      allowHiddenRibbon:
        (_0x1afc48 == null ? undefined : _0x1afc48.hostChromeMode) === "none",
    });
  }
  activateFloating(_0x470f1e, _0x425890, _0x3cd105 = {}) {
    this._assertResolvedChild(_0x470f1e);
    let _0x56c9e7 = this._floatingActiveService["getActive"](),
      _0xea74e2 =
        _0x425890 === "stage2" &&
        (_0x56c9e7 == null ? undefined : _0x56c9e7.embedId) ===
          _0x470f1e.embedId &&
        _0x56c9e7.childUnitId === _0x470f1e.childUnitId &&
        _0x56c9e7.stage === "stage2";
    ((_0x56c9e7 == null ? undefined : _0x56c9e7.stage) === "stage2" &&
      !_0xea74e2 &&
      this._restorePreviousChildCurrentUnit(_0x56c9e7.embedId),
      _0x425890 === "stage2" &&
        !_0xea74e2 &&
        this._rememberPreviousChildCurrentUnit(_0x470f1e),
      this._focusOwnerService["setFocusOwner"]({
        hostUnitId: _0x470f1e.hostUnitId,
        embedId: _0x470f1e.embedId,
        childUnitId: _0x470f1e.childUnitId,
        childType: _0x470f1e.childType,
        reason: "pointer",
      }),
      this._mountService["activateSession"](_0x470f1e.embedId));
    let _0xca07e3 = {
      hostUnitId: _0x470f1e.hostUnitId,
      embedId: _0x470f1e.embedId,
      childUnitId: _0x470f1e.childUnitId,
    };
    (_0x425890
      ? this._floatingActiveService["activate"](_0xca07e3, _0x425890)
      : this._floatingActiveService["activate"](_0xca07e3),
      this._menuOverrideService["clear"](),
      _0x425890 === "stage2"
        ? (this._focusUnit(
            _0x470f1e.childUnitId,
            _0x470f1e.childType,
            false,
            _0x470f1e.embedId,
          ),
          this._scheduleFloatingChildFocus(_0x470f1e))
        : (this._univerInstanceService["setCurrentUnitForType"](
            _0x470f1e.hostUnitId,
          ),
          this._univerInstanceService["focusUnit"](_0x470f1e.hostUnitId)));
  }
  focusFloatingRuntime(_0x982541, _0x1cdfc4 = {}) {
    this.activateFloating(_0x982541, "stage2", _0x1cdfc4);
  }
  activateFullscreen(_0x57cff7, _0x4928a2 = {}) {
    (this._assertResolvedChild(_0x57cff7),
      this._focusOwnerService["setFocusOwner"]({
        hostUnitId: _0x57cff7.hostUnitId,
        embedId: _0x57cff7.embedId,
        childUnitId: _0x57cff7.childUnitId,
        childType: _0x57cff7.childType,
        reason: "pointer",
      }),
      this._focusUnit(
        _0x57cff7.childUnitId,
        _0x57cff7.childType,
        _0x4928a2.focusLayout ?? true,
        _0x57cff7.embedId,
      ));
  }
  focusHostForPassiveRuntime(_0x47bdeb) {
    let _0x281b44 = this._mountService["releaseSessionFocus"](
      _0x47bdeb.embedId,
    );
    (this._menuOverrideService["clear"](_0x47bdeb.embedId),
      this._focusOwnerService["clearFocusOwner"](_0x47bdeb.embedId),
      _0x281b44 &&
        this._previousChildCurrentUnits["has"](_0x47bdeb.embedId) &&
        this._restorePreviousChildCurrentUnit(
          _0x47bdeb.embedId,
          _0x47bdeb.childType,
          _0x47bdeb.childUnitId,
        ),
      this._focusUnit(_0x47bdeb.hostUnitId, _0x47bdeb.hostType, false));
  }
  clearFullscreen(_0x3b248c) {
    let _0x5c3767 = this._focusOwnerService["getFocusOwner"]();
    (_0x5c3767 != null &&
      _0x5c3767.embedId &&
      _0x5c3767.embedId !== _0x3b248c.embedId) ||
      (this._focusOwnerService["clearFocusOwner"](_0x3b248c.embedId),
      this._univerInstanceService["setCurrentUnitForType"](
        _0x3b248c.hostUnitId,
      ),
      this._univerInstanceService["focusUnit"](_0x3b248c.hostUnitId),
      requestAnimationFrame(() => {
        this._focusOwnerService["getFocusOwner"]() ||
          (this._univerInstanceService["focusUnit"](null),
          this._univerInstanceService["focusUnit"](_0x3b248c.hostUnitId));
      }));
  }
  clearFloating(_0x4a80c8, _0x2f5ecd) {
    let _0x2a69ff = this._focusOwnerService["getFocusOwner"]();
    if (
      _0x4a80c8 &&
      _0x2a69ff != null &&
      _0x2a69ff.embedId &&
      _0x2a69ff.embedId !== _0x4a80c8
    )
      return;
    let _0x3730b8 = this._floatingActiveService["getActive"]();
    if (
      _0x4a80c8 &&
      !_0x2a69ff &&
      (_0x3730b8 == null ? undefined : _0x3730b8.embedId) !== _0x4a80c8 &&
      !_0x2f5ecd
    )
      return;
    let _0x4d94bf =
      _0x2f5ecd ??
      (_0x2a69ff == null ? undefined : _0x2a69ff.hostUnitId) ??
      (_0x3730b8 == null ? undefined : _0x3730b8.hostUnitId);
    (this._floatingActiveService["clear"](_0x4a80c8),
      this._focusOwnerService["clearFocusOwner"](_0x4a80c8),
      this._menuOverrideService["clear"](_0x4a80c8),
      _0x4a80c8 && this._restorePreviousChildCurrentUnit(_0x4a80c8),
      _0x4a80c8 && this._mountService["deactivateFloatingSession"](_0x4a80c8),
      _0x4d94bf &&
        (this._univerInstanceService["setCurrentUnitForType"](_0x4d94bf),
        this._univerInstanceService["focusUnit"](_0x4d94bf),
        requestAnimationFrame(() => {
          this._focusOwnerService["getFocusOwner"]() ||
            (this._univerInstanceService["focusUnit"](null),
            this._univerInstanceService["focusUnit"](_0x4d94bf));
        })));
  }
  clearTab(_0xa422c5) {
    (this._menuOverrideService["clear"](_0xa422c5),
      this._focusOwnerService["clearFocusOwner"](_0xa422c5));
    let _0x9d6860 = this._mountService["deactivateTabSessions"](_0xa422c5);
    (_0x9d6860.forEach((_0x1db7d0) =>
      this._restorePreviousChildCurrentUnit(
        _0x1db7d0.embedId,
        _0x1db7d0.childType,
        _0x1db7d0.childUnitId,
      ),
    ),
      new Set(_0x9d6860.map((_0x2276bf) => _0x2276bf.hostUnitId)).forEach(
        (_0x141833) => {
          (this._univerInstanceService["setCurrentUnitForType"](_0x141833),
            this._univerInstanceService["focusUnit"](_0x141833));
        },
      ));
  }
  _rememberPreviousChildCurrentUnit(_0x16b2a8) {
    if (this._previousChildCurrentUnits["has"](_0x16b2a8.embedId)) return;
    let _0x21aeb4 = _0x16b2a8.childType,
      _0x27fb18 = this._getCurrentUnitId(_0x21aeb4);
    this._previousChildCurrentUnits["set"](_0x16b2a8.embedId, {
      childType: _0x21aeb4,
      childUnitId: _0x16b2a8.childUnitId,
      unitId:
        _0x27fb18 && _0x27fb18 !== _0x16b2a8.childUnitId
          ? _0x27fb18
          : undefined,
    });
  }
  _restorePreviousChildCurrentUnit(_0x46ef4a, _0x767599, _0x323213) {
    let _0x1c106d = this._previousChildCurrentUnits["get"](_0x46ef4a);
    this._previousChildCurrentUnits["delete"](_0x46ef4a);
    let _0x5ba57f =
        _0x767599 ?? (_0x1c106d == null ? undefined : _0x1c106d.childType),
      _0x17855b =
        _0x323213 ?? (_0x1c106d == null ? undefined : _0x1c106d.childUnitId);
    if (_0x5ba57f == null || !_0x17855b) return;
    let _0x38b7c3 =
      (_0x1c106d == null ? undefined : _0x1c106d.childType) === _0x5ba57f &&
      _0x1c106d.unitId &&
      this._hasUnit(_0x1c106d.unitId, _0x5ba57f)
        ? _0x1c106d.unitId
        : this._findFallbackUnitId(_0x5ba57f, _0x17855b);
    _0x38b7c3 &&
      this._univerInstanceService["setCurrentUnitForType"](_0x38b7c3);
  }
  _getCurrentUnitId(_0x12eb64) {
    var _0x372d26;
    let _0x19c84a = this._univerInstanceService["getCurrentUnitOfType"];
    return _0x19c84a == null ||
      (_0x372d26 = _0x19c84a.call(this._univerInstanceService, _0x12eb64)) ==
        null
      ? undefined
      : _0x372d26.getUnitId();
  }
  _hasUnit(_0xfa632b, _0x301035) {
    let _0x2d3617 = this._univerInstanceService["getUnit"];
    return !!(
      _0x2d3617 != null &&
      _0x2d3617.call(this._univerInstanceService, _0xfa632b, _0x301035)
    );
  }
  _findFallbackUnitId(_0x32bbc8, _0x568498) {
    var _0xb0d738;
    let _0x40bded = this._univerInstanceService["getAllUnitsForType"];
    return _0x40bded == null ||
      (_0xb0d738 = _0x40bded.call(this._univerInstanceService, _0x32bbc8)) ==
        null ||
      (_0xb0d738 = _0xb0d738.find(
        (_0x3f5a8b) => _0x3f5a8b.getUnitId() !== _0x568498,
      )) == null
      ? undefined
      : _0xb0d738.getUnitId();
  }
  _focusUnit(_0x47a58e, _0x382e97, _0x1a2e42 = true, _0x40a338) {
    let _0x3872fc = this._univerInstanceService["getFocusedUnit"];
    if (!_0x40a338) {
      var _0x47799f;
      ((typeof _0x3872fc != "function" ||
        ((_0x47799f = _0x3872fc.call(this._univerInstanceService)) == null
          ? undefined
          : _0x47799f.getUnitId()) !== _0x47a58e) &&
        this._univerInstanceService["focusUnit"](_0x47a58e),
        this._setCurrentUnitForType(_0x47a58e, _0x382e97),
        this._contextService["setContextValue"](_0x22a7dd, true),
        this._contextService["setContextValue"](
          _0x55448b,
          _0x382e97 === _0x513c12.UNIVER_DOC,
        ),
        this._contextService["setContextValue"](
          _0x1d103b,
          _0x382e97 === _0x513c12.UNIVER_SHEET,
        ),
        this._contextService["setContextValue"](
          _0x54742f,
          _0x382e97 === _0x513c12.UNIVER_SLIDE,
        ),
        this._contextService["setContextValue"](
          _0x3a4db3,
          _0x382e97 === _0x513c12.UNIVER_BOARD,
        ));
    }
    _0x1a2e42 && this._focusLayout();
  }
  _restoreStage2ChildFocusWhenHostRefocuses(_0x350e63) {
    let _0x503925 = this._floatingActiveService["getActive"]();
    if (
      (_0x503925 == null ? undefined : _0x503925.stage) !== "stage2" ||
      _0x350e63 !== _0x503925.hostUnitId
    )
      return;
    let _0x884cae = this._focusOwnerService["getFocusOwner"]();
    (_0x884cae == null ? undefined : _0x884cae.embedId) === _0x503925.embedId &&
      _0x884cae.childUnitId === _0x503925.childUnitId &&
      _0x884cae.childType != null &&
      this._focusUnit(
        _0x884cae.childUnitId,
        _0x884cae.childType,
        false,
        _0x884cae.embedId,
      );
  }
  _scheduleFloatingChildFocus(_0x5d4a46) {
    let _0x1329ab = () => {
      let _0x3b8af5 = this._floatingActiveService["getActive"]();
      (_0x3b8af5 == null ? undefined : _0x3b8af5.embedId) ===
        _0x5d4a46.embedId &&
        _0x3b8af5.childUnitId === _0x5d4a46.childUnitId &&
        _0x3b8af5.stage === "stage2" &&
        this._focusUnit(
          _0x5d4a46.childUnitId,
          _0x5d4a46.childType,
          false,
          _0x5d4a46.embedId,
        );
    };
    (typeof queueMicrotask == "function" && queueMicrotask(_0x1329ab),
      requestAnimationFrame(_0x1329ab));
  }
  _setCurrentUnitForType(_0x3a36e1, _0x289525) {
    var _0x468228;
    let _0x2911bc = this._univerInstanceService["getCurrentUnitOfType"];
    (typeof _0x2911bc != "function" ||
      ((_0x468228 = _0x2911bc.call(this._univerInstanceService, _0x289525)) ==
      null
        ? undefined
        : _0x468228.getUnitId()) !== _0x3a36e1) &&
      this._univerInstanceService["setCurrentUnitForType"](_0x3a36e1);
  }
  _focusLayout() {
    let _0x27ced0 = () => this._layoutService["focus"]();
    (_0x27ced0(),
      typeof queueMicrotask == "function" && queueMicrotask(_0x27ced0),
      requestAnimationFrame(_0x27ced0));
  }
  _assertResolvedChild(_0x1f5b36) {
    if (!_0x1f5b36.childUnitId || _0x1f5b36.childType == null)
      throw Error("EMBED_ACTIVATION_CHILD_NOT_RESOLVED");
  }
};
dl = $(
  [
    Q(0, _0x3e617f),
    Q(1, _0x1a6fa3(_0xd33e59)),
    Q(2, _0x1a6fa3(_0x4294fc)),
    Q(3, _0x1a6fa3(Ss)),
    Q(4, _0x1a6fa3(cl)),
    Q(5, _0x1a6fa3(bs)),
    Q(6, _0x1a6fa3(xs)),
    Q(7, _0x113203),
    Q(8, _0x1cdf34),
  ],
  dl,
);
function fl(_0x96a8cb) {
  let {
    injector: _0x25f38d,
    children: _0x5d411c,
    mountContainer: _0x25e325,
    embedId: _0x232139,
  } = _0x96a8cb;
  return _0x29e1d8(
    _0x2d2d98(() => _0x290357(pl, _0x25f38d), [_0x25f38d]),
    { mountContainer: _0x25e325, embedId: _0x232139, children: _0x5d411c },
  );
}
function pl(_0x407c8b) {
  let {
      children: _0x447192,
      mountContainer: _0x2c61dd,
      embedId: _0x795d7a,
      passThroughWheelGestures: _0x25823e,
    } = _0x407c8b,
    _0x1768b1 = _0x3c0943(),
    _0x14214e = _0x5ade04(_0x11dce0),
    _0x3984e2 = _0x2d2d98(
      () => (_0x1768b1.has(_0x5143b3) ? _0x1768b1.get(_0x5143b3) : undefined),
      [_0x1768b1],
    ),
    _0x2a482c = _0xe46a3c(
      () =>
        _0x14214e.localeChanged$["pipe"](
          _0xbab8f3(() => _0x14214e.getLocales()),
        ),
      _0x14214e.getLocales(),
      false,
      [_0x14214e],
    ),
    _0x20ef8a = _0xe46a3c(
      () => _0x14214e.direction$,
      _0x14214e.getDirection(),
      false,
      [_0x14214e],
    ),
    _0x5b0f18 = vl(_0x3984e2),
    _0x4f6d73 = _0x344702(null),
    _0x272e98 = _0x2d2d98(
      () =>
        _0x2c61dd !== undefined || typeof document > "u"
          ? null
          : document.createElement("div"),
      [_0x2c61dd],
    ),
    _0x409892 = _0x2c61dd === undefined ? _0x272e98 : _0x2c61dd;
  return (
    _0x51cbb8(() => {
      if (_0x272e98)
        return (
          document.body["appendChild"](_0x272e98),
          () => {
            document.body["removeChild"](_0x272e98);
          }
        );
    }, [_0x272e98]),
    _0x51cbb8(() => {
      let _0x19c0a5 = _0x409892;
      _0x19c0a5 && _0x19c0a5.setAttribute("dir", _0x20ef8a);
    }, [_0x20ef8a, _0x409892]),
    _0x51cbb8(() => {
      if (!(!_0x409892 || _0x25823e)) return _0x43cbd5([_0x409892]);
    }, [_0x25823e, _0x409892]),
    _0x51cbb8(() => {
      let _0x39512b = _0x409892;
      if (!_0x39512b || !_0x795d7a) return;
      let _0xca8622 = _0x39512b.getAttribute(Z);
      return (
        _0x39512b.setAttribute(Z, _0x795d7a),
        () => {
          if (_0xca8622 == null) {
            _0x39512b.removeAttribute(Z);
            return;
          }
          _0x39512b.setAttribute(Z, _0xca8622);
        }
      );
    }, [_0x795d7a, _0x409892]),
    _0x29e1d8(_0x5573f3, {
      locale: _0x2a482c == null ? undefined : _0x2a482c.design,
      direction: _0x20ef8a,
      mountContainer: _0x409892,
      children: _0x29e1d8("div", {
        ref: _0x4f6d73,
        className: _0x228d07("univer-contents", { "univer-dark": _0x5b0f18 }),
        "data-embed-runtime-provider": "true",
        onPointerUpCapture: (_0x33f064) => {
          let _0x302248 = _0x4f6d73.current,
            _0x46a8ff = _0x33f064.target;
          if (!_0x795d7a || !_0x302248) return;
          let _0x15a2e0 = () => ml(_0x795d7a, _0x302248, _0x46a8ff);
          typeof queueMicrotask == "function"
            ? queueMicrotask(_0x15a2e0)
            : Promise.resolve().then(_0x15a2e0);
        },
        children: _0x447192,
      }),
    })
  );
}
function ml(_0x54d266, _0x3cb5b9, _0x81ded3) {
  let _0x8f1ceb = _0x3cb5b9.ownerDocument["activeElement"];
  if (gl(_0x8f1ceb, _0x54d266)) return;
  let _0x4b6bab =
      _0x81ded3 instanceof HTMLElement && _0x3cb5b9.contains(_0x81ded3)
        ? _0x81ded3
        : null,
    _0x51f02f = _l(_0x4b6bab)
      ? _0x4b6bab
      : _0x3cb5b9.querySelector(
          'canvas[tabindex], [tabindex]:not([tabindex="-1"])',
        );
  _0x51f02f == null || _0x51f02f.focus({ preventScroll: true });
}
function hl(_0xc93549, _0x11a3a0) {
  gl(_0x11a3a0.ownerDocument["activeElement"], _0xc93549) ||
    (_0x11a3a0.hasAttribute("tabindex") || (_0x11a3a0.tabIndex = -1),
    _0x11a3a0.focus({ preventScroll: true }));
}
function gl(_0x20b364, _0x54c74c) {
  let _0x19f73d =
    _0x20b364 == null ? undefined : _0x20b364.closest("[" + Z + "]");
  return (
    (_0x19f73d == null ? undefined : _0x19f73d.getAttribute(Z)) === _0x54c74c
  );
}
function _l(_0x451d81) {
  return (
    !!_0x451d81 &&
    !_0x451d81.hasAttribute("disabled") &&
    _0x451d81.tabIndex >= 0
  );
}
function vl(_0x211193) {
  return _0x9b166(
    (_0x2a5d85) => {
      if (!_0x211193) return () => {};
      let _0x9d33dc = _0x211193.darkMode$["subscribe"](() => _0x2a5d85());
      return () => _0x9d33dc.unsubscribe();
    },
    () => (_0x211193 == null ? undefined : _0x211193.darkMode) ?? false,
    () => false,
  );
}
const yl = new WeakMap(),
  bl = new WeakMap(),
  xl = new WeakMap();
function Sl(_0x31e375) {
  let _0x37c52c = yl.get(_0x31e375);
  if (_0x37c52c)
    return (xl.set(_0x37c52c, (xl.get(_0x37c52c) ?? 0) + 1), _0x37c52c);
  let _0x1c0401 = { render: (_0x419fd5) => _0x3f4053(_0x419fd5, _0x31e375) };
  return (
    yl.set(_0x31e375, _0x1c0401),
    bl.set(_0x1c0401, _0x31e375),
    xl.set(_0x1c0401, 0),
    _0x1c0401
  );
}
function Cl(_0x1e54be) {
  let _0x855bac = bl.get(_0x1e54be),
    _0x1f0ca5 = xl.get(_0x1e54be) ?? 0;
  globalThis.setTimeout(() => {
    (_0x855bac && yl.get(_0x855bac) !== _0x1e54be) ||
      ((xl.get(_0x1e54be) ?? 0) === _0x1f0ca5 &&
        (_0x855bac && (yl.delete(_0x855bac), bl.delete(_0x1e54be)),
        xl.delete(_0x1e54be),
        _0x855bac && _0x8511f5(_0x855bac)));
  }, 0);
}
function wl(_0x313e4f) {
  let {
    container: _0x52a647,
    portalContainer: _0x195a97,
    injector: _0x5ea31c,
    childType: _0x3fe207,
    childUnitId: _0x1a072a,
    embedId: _0x2a2edb,
    menuSchema: _0xc02a7e,
    menuTitlePrefix: _0x2f2f7f,
    activeRibbonTab: _0x5b33b7,
    headerMenu: _0x1cb1ec = false,
    toolbarOnly: _0xe00c9f,
    ribbonType: _0x2c8430 = "classic",
    ribbonHeaderClassName: _0x51e076,
    scopedActionServiceTokens: _0x28e320,
  } = _0x313e4f;
  if (_0xc02a7e != null && typeof _0xc02a7e != "object") return;
  let _0x5ae2e8 = Tl(_0x5ea31c, {
      childType: _0x3fe207,
      childUnitId: _0x1a072a,
      embedId: _0x2a2edb,
      menuSchema: _0xc02a7e,
      menuTitlePrefix: _0x2f2f7f,
      activeRibbonTab: _0x5b33b7,
      scopedActionServiceTokens: _0x28e320,
    }),
    _0x15dc5f = Sl(_0x52a647);
  return (
    _0x15dc5f.render(
      _0xc3e5c7(
        fl,
        {
          injector: _0x5ae2e8.injector,
          mountContainer: _0x195a97 ?? _0x52a647,
          embedId: _0x2a2edb,
        },
        _0xc3e5c7(_0x451df0, {
          ribbonType: _0x2c8430,
          headerMenu: _0x1cb1ec,
          toolbarOnly: _0xe00c9f,
          headerClassName: _0x51e076,
        }),
      ),
    ),
    _0x11d17f(() => {
      (Cl(_0x15dc5f), _0x5ae2e8.disposable["dispose"]());
    })
  );
}
function Tl(_0xf04297, _0x4d72bb) {
  let {
      childType: _0x842d7e,
      childUnitId: _0x3e0080,
      embedId: _0x1d052a,
      menuSchema: _0x193e39,
      menuTitlePrefix: _0x2e3da6,
      activeRibbonTab: _0x2cf4a2,
      scopedActionServiceTokens: _0x27cff0,
    } = _0x4d72bb,
    _0x2f3b52 = _0xf04297.get(_0x3e617f),
    _0x91cbd4 = Ol(_0xf04297).get(_0x3e617f),
    _0x39ea0a = Nl(_0x2f3b52, _0x842d7e, _0x3e0080),
    _0x308069 = new WeakMap(),
    _0x17f5de,
    _0x35aa3c = Ll(
      _0xf04297.get(_0x42e186),
      _0x91cbd4,
      _0x842d7e,
      _0x3e0080,
      _0x1d052a,
      () => _0x17f5de,
    ),
    _0x52689c =
      _0x3e0080 && _0xf04297.has(_0x113203)
        ? Pl(_0xf04297.get(_0x113203), _0x842d7e)
        : undefined,
    _0x252515 = new Map([
      [_0x3e617f, _0x39ea0a],
      [_0x42e186, _0x35aa3c],
      ...(_0x52689c ? [[_0x113203, _0x52689c]] : []),
    ]);
  (_0xf04297.has(_0x405ebf) &&
    _0x252515.set(_0x405ebf, rc(_0xf04297.get(_0x405ebf))),
    new Set(_0x27cff0 ?? []).forEach((_0x2bcbf2) => {
      _0x3e0080 &&
        _0xf04297.has(_0x2bcbf2) &&
        _0x252515.set(
          _0x2bcbf2,
          zl(
            _0xf04297.get(_0x2bcbf2),
            _0x91cbd4,
            _0x842d7e,
            _0x3e0080,
            _0x1d052a,
            () => _0x17f5de,
            _0x308069,
          ),
        );
    }),
    (_0x17f5de = ac(_0xf04297, _0x252515)));
  let { menuManager: _0x542f98, disposable: _0x439863 } = El(
      _0xf04297,
      _0x17f5de,
      _0x193e39,
      _0x2e3da6,
    ),
    _0x3c9977 = new _0x27f2f4(_0x542f98, _0x39ea0a);
  _0x2cf4a2 && _0x3c9977.setActivatedTab(_0x2cf4a2);
  let _0x1b13c1 = _0x2e3da6 ? kl(_0x3c9977, _0x2e3da6, _0xf04297) : _0x3c9977;
  (_0x17f5de.add([_0x713ac8, { useValue: _0x542f98 }]),
    _0x17f5de.add([_0x356c5a, { useValue: _0x1b13c1 }]));
  let _0x189eca = Dl(_0xf04297, _0x3c9977, _0x542f98, {
    embedId: _0x1d052a,
    childUnitId: _0x3e0080,
  });
  return {
    injector: _0x17f5de,
    ribbonService: _0x1b13c1,
    disposable: _0x11d17f(() => {
      (_0x189eca == null || _0x189eca.dispose(),
        _0x3c9977.dispose(),
        _0x439863 == null || _0x439863.dispose(),
        _0x17f5de.dispose());
    }),
  };
}
function El(_0x330b85, _0x190235, _0xf08892, _0x9d046) {
  if (_0xf08892 && typeof _0xf08892 == "object") {
    let _0x4621bf = new _0x5674c9(_0x190235, _0x190235.get(_0x405ebf));
    return (
      _0x4621bf.mergeMenu(jl(_0xf08892, _0x9d046, _0x330b85)),
      { menuManager: Tc(_0x4621bf), disposable: _0x4621bf }
    );
  }
  let _0x5ccc99 = _0x330b85.get(_0x713ac8),
    _0x37cdb0 = _0x5ccc99.createScoped;
  return {
    menuManager: Tc(
      typeof _0x37cdb0 == "function"
        ? _0x37cdb0.call(_0x5ccc99, _0x190235)
        : _0x5ccc99,
    ),
  };
}
function Dl(_0x57b7fc, _0x4c02b0, _0x1840db, _0x5577eb) {
  let { embedId: _0x59eb1a, childUnitId: _0x12253e } = _0x5577eb;
  if (!_0x59eb1a || !_0x12253e) return;
  let _0x47c196 = Ol(_0x57b7fc);
  if (!_0x47c196.has(_0x356c5a) || !_0x47c196.has(X)) return;
  let _0x50bc33 = _0x47c196.get(_0x356c5a),
    _0xb9358d = _0x47c196.get(X),
    _0x1d19e7 = new Set(),
    _0x331368 = _0x56bd84([
      _0x50bc33.ribbon$,
      _0x50bc33.activatedTab$,
      _0x1840db.menuChanged$["pipe"](_0xb42533(undefined)),
      _0x4165fb(
        _0xb9358d.runtimeFocusChanged$,
        _0xb9358d.runtimeSessionChanged$,
      ).pipe(_0xb42533(undefined)),
    ]).subscribe(([_0x99d31c, _0x282c99]) => {
      let _0x4a9a0a = _0xb9358d.resolveActiveChildSessionRuntimeScope(),
        _0x1aa9be =
          (_0x4a9a0a == null ? undefined : _0x4a9a0a.embedId) === _0x59eb1a &&
          _0x4a9a0a.childUnitId === _0x12253e &&
          (_0x4a9a0a.sessionMode === "child-tab" ||
            _0x4a9a0a.sessionMode === "child-fullscreen"),
        _0x59524d = new Set(
          _0x1840db
            .getMenuByPositionKey(_0x254d8d.RIBBON)
            .filter(({ contextual: _0x161219 }) => _0x161219)
            .map(({ key: _0x23d22e }) => _0x23d22e),
        ),
        _0x459467 = _0x1aa9be
          ? new Set(
              _0x99d31c
                .filter(
                  ({ contextual: _0x560b62, key: _0x31d550 }) =>
                    _0x560b62 && _0x59524d.has(_0x31d550),
                )
                .map(({ key: _0x4d9c8b }) => _0x4d9c8b),
            )
          : new Set();
      (_0x1d19e7.forEach((_0x29ec67) => {
        _0x459467.has(_0x29ec67) || _0x4c02b0.hideContextualTab(_0x29ec67);
      }),
        _0x459467.forEach((_0x473b1c) => {
          _0x1d19e7.has(_0x473b1c) || _0x4c02b0.showContextualTab(_0x473b1c);
        }),
        _0x459467.has(_0x282c99) && _0x4c02b0.setActivatedTab(_0x282c99),
        (_0x1d19e7 = _0x459467));
    });
  return _0x11d17f(() => {
    (_0x331368.unsubscribe(),
      _0x1d19e7.forEach((_0x4e7d92) => _0x4c02b0.hideContextualTab(_0x4e7d92)),
      _0x1d19e7.clear());
  });
}
function Ol(_0x5443c2) {
  return _0x5443c2.__embedSharedRootInjector ?? _0x5443c2;
}
function kl(_0x350e6e, _0x18eead, _0x1c1b98) {
  let _0x39595d;
  try {
    _0x39595d = _0x1c1b98.get(_0x11dce0);
  } catch {
    _0x39595d = undefined;
  }
  return {
    ribbon$: _0x350e6e.ribbon$["pipe"](
      _0xbab8f3((_0x176822) =>
        _0x176822.map((_0x5e1fe4) => Al(_0x5e1fe4, _0x18eead, _0x39595d)),
      ),
    ),
    activatedTab$: _0x350e6e.activatedTab$,
    collapsedIds$: _0x350e6e.collapsedIds$,
    fakeToolbarVisible$: _0x350e6e.fakeToolbarVisible$,
    setActivatedTab: (_0x205fd5) => _0x350e6e.setActivatedTab(_0x205fd5),
    showContextualTab: (_0x124ea5, _0x159bce) =>
      _0x350e6e.showContextualTab(_0x124ea5, _0x159bce),
    hideContextualTab: (_0x349c2d) => _0x350e6e.hideContextualTab(_0x349c2d),
    hideAllContextualTabs: () => _0x350e6e.hideAllContextualTabs(),
    setCollapsedIds: (_0x5cce64) => _0x350e6e.setCollapsedIds(_0x5cce64),
    setFakeToolbarVisible: (_0x4112d6) =>
      _0x350e6e.setFakeToolbarVisible(_0x4112d6),
  };
}
function Al(_0x4e0c79, _0x9912a4, _0xdd0c9a) {
  let _0x424a3e = _0x4e0c79.title || _0x4e0c79.key,
    _0x406d5b = _0xdd0c9a ? _0xdd0c9a.t(_0x424a3e) : _0x424a3e;
  return { ..._0x4e0c79, title: _0x9912a4 + "\x20-\x20" + _0x406d5b };
}
function jl(_0x42f408, _0x3ac393, _0x14d2b5) {
  if (!_0x3ac393 || !_0x42f408 || typeof _0x42f408 != "object")
    return _0x42f408;
  let _0x3fc04c = Ml(_0x42f408),
    _0x46e9bf = _0x3fc04c[_0x254d8d.RIBBON];
  if (!_0x46e9bf || typeof _0x46e9bf != "object") return _0x3fc04c;
  let _0x1fb1bd;
  try {
    _0x1fb1bd = _0x14d2b5.get(_0x11dce0);
  } catch {
    _0x1fb1bd = undefined;
  }
  return (
    Object.values(_0x46e9bf).forEach((_0x325bc5) => {
      if (!_0x325bc5 || typeof _0x325bc5 != "object") return;
      let _0x3ff941 = _0x325bc5,
        _0x130b92 = _0x3ff941.title;
      _0x130b92 &&
        (_0x3ff941.title =
          _0x3ac393 + " - " + (_0x1fb1bd ? _0x1fb1bd.t(_0x130b92) : _0x130b92));
    }),
    _0x3fc04c
  );
}
function Ml(_0xeedc59) {
  return !_0xeedc59 || typeof _0xeedc59 != "object"
    ? _0xeedc59
    : Array.isArray(_0xeedc59)
      ? _0xeedc59.map((_0x719cb1) => Ml(_0x719cb1))
      : Object.fromEntries(
          Object.entries(_0xeedc59).map(([_0x173b2c, _0x3210d8]) => [
            _0x173b2c,
            Ml(_0x3210d8),
          ]),
        );
}
function Nl(_0x3d61ff, _0x1a1f03, _0x3c112c) {
  let _0x2a28dd = () =>
      _0x3c112c ? _0x3d61ff.getUnit(_0x3c112c, _0x1a1f03) : null,
    _0x41d168 = _0x3c112c
      ? _0x4165fb(
          _0x2bd05a(_0x3c112c),
          _0x3d61ff
            .getTypeOfUnitAdded$(_0x1a1f03)
            .pipe(_0xbab8f3(() => _0x3c112c)),
          _0x3d61ff
            .getTypeOfUnitDisposed$(_0x1a1f03)
            .pipe(_0xbab8f3(() => _0x3c112c)),
        )
      : _0x3d61ff.focused$;
  return {
    unitAdded$: _0x3d61ff.unitAdded$,
    getTypeOfUnitAdded$: (..._0x20037e) =>
      _0x3d61ff.getTypeOfUnitAdded$(..._0x20037e),
    __addUnit: (..._0x4bbf7f) => _0x3d61ff.__addUnit(..._0x4bbf7f),
    unitDisposed$: _0x3d61ff.unitDisposed$,
    getTypeOfUnitDisposed$: (..._0x25aadd) =>
      _0x3d61ff.getTypeOfUnitDisposed$(..._0x25aadd),
    focused$: _0x41d168,
    get focused() {
      return _0x2a28dd() ?? _0x3d61ff.getFocusedUnit();
    },
    focusUnit: (..._0x20d7fa) => _0x3d61ff.focusUnit(..._0x20d7fa),
    getFocusedUnit: () => _0x2a28dd() ?? _0x3d61ff.getFocusedUnit(),
    getCurrentUnitOfType: (_0xe7cbcf) =>
      _0xe7cbcf === _0x1a1f03 && _0x3c112c
        ? _0x2a28dd()
        : _0x3d61ff.getCurrentUnitOfType(_0xe7cbcf),
    setCurrentUnitForType: (..._0x181eeb) =>
      _0x3d61ff.setCurrentUnitForType(..._0x181eeb),
    getCurrentTypeOfUnit$: (_0x467c40) =>
      _0x467c40 !== _0x1a1f03 || !_0x3c112c
        ? _0x3d61ff.getCurrentTypeOfUnit$(_0x467c40)
        : _0x4165fb(
            _0x2bd05a(undefined),
            _0x3d61ff.getTypeOfUnitAdded$(_0x1a1f03),
            _0x3d61ff.getTypeOfUnitDisposed$(_0x1a1f03),
          ).pipe(_0xbab8f3(() => _0x2a28dd())),
    createUnit: (..._0x4bb341) => _0x3d61ff.createUnit(..._0x4bb341),
    getUnitCreateOptions: (..._0x15c18c) =>
      _0x3d61ff.getUnitCreateOptions(..._0x15c18c),
    disposeUnit: (..._0xedfd74) => _0x3d61ff.disposeUnit(..._0xedfd74),
    registerCtorForType: (..._0x48cd41) =>
      _0x3d61ff.registerCtorForType(..._0x48cd41),
    getUnit: (..._0x3500f0) => _0x3d61ff.getUnit(..._0x3500f0),
    getAllUnitsForType: (..._0x437579) =>
      _0x3d61ff.getAllUnitsForType(..._0x437579),
    getUnitType: (..._0x333f12) => _0x3d61ff.getUnitType(..._0x333f12),
  };
}
function Pl(_0x90db40, _0x540e67) {
  return {
    contextChanged$: _0x90db40.contextChanged$,
    getContextValue: (_0x54f3e6) =>
      Fl(_0x54f3e6, _0x540e67) ?? _0x90db40.getContextValue(_0x54f3e6),
    setContextValue: (_0x786eaa, _0x3d4487) =>
      _0x90db40.setContextValue(_0x786eaa, _0x3d4487),
    subscribeContextValue$: (_0x425b47) => {
      let _0x2b14b7 = Fl(_0x425b47, _0x540e67);
      return _0x2b14b7 == null
        ? _0x90db40.subscribeContextValue$(_0x425b47)
        : _0x2bd05a(_0x2b14b7);
    },
  };
}
function Fl(_0x1acfa1, _0x3e9ee0) {
  if (_0x1acfa1 === _0x22a7dd) return true;
  if (
    _0x1acfa1 === _0x1d103b ||
    _0x1acfa1 === _0x55448b ||
    _0x1acfa1 === _0x54742f
  )
    return _0x1acfa1 === Il(_0x3e9ee0);
}
function Il(_0x43ba63) {
  if (_0x43ba63 === _0x513c12.UNIVER_SHEET) return _0x1d103b;
  if (_0x43ba63 === _0x513c12.UNIVER_DOC) return _0x55448b;
  if (_0x43ba63 === _0x513c12.UNIVER_SLIDE) return _0x54742f;
}
function Ll(_0x2c5fbb, _0x39fc7b, _0x5434ab, _0x527c20, _0x4c87cd, _0x252432) {
  return _0x527c20
    ? {
        disposed: () => _0x2c5fbb.disposed(),
        hasCommand: (_0x1e2ab3) => _0x2c5fbb.hasCommand(_0x1e2ab3),
        registerCommand: (..._0x92874b) =>
          _0x2c5fbb.registerCommand(..._0x92874b),
        unregisterCommand: (_0xed3409) =>
          _0x2c5fbb.unregisterCommand(_0xed3409),
        registerMultipleCommand: (..._0x19e709) =>
          _0x2c5fbb.registerMultipleCommand(..._0x19e709),
        executeCommand: async (..._0x59a4ed) => {
          let _0x1c3cfe = _0x39fc7b.getCurrentUnitOfType(_0x5434ab);
          try {
            return (
              _0x39fc7b.setCurrentUnitForType(_0x527c20),
              await _0x2c5fbb.executeCommand(
                _0x59a4ed[0],
                _0x59a4ed[1],
                Rl(_0x5434ab, _0x527c20, _0x59a4ed[2]),
              )
            );
          } finally {
            Ul(_0x39fc7b, _0x527c20, _0x1c3cfe, _0x4c87cd, _0x252432);
          }
        },
        syncExecuteCommand: (..._0x3b0696) => {
          let _0x1055f9 = _0x39fc7b.getCurrentUnitOfType(_0x5434ab);
          try {
            return (
              _0x39fc7b.setCurrentUnitForType(_0x527c20),
              _0x2c5fbb.syncExecuteCommand(
                _0x3b0696[0],
                _0x3b0696[1],
                Rl(_0x5434ab, _0x527c20, _0x3b0696[2]),
              )
            );
          } finally {
            Ul(_0x39fc7b, _0x527c20, _0x1055f9, _0x4c87cd, _0x252432);
          }
        },
        onCommandExecuted: (..._0x1082a2) =>
          _0x2c5fbb.onCommandExecuted(..._0x1082a2),
        beforeCommandExecuted: (..._0x362e5b) =>
          _0x2c5fbb.beforeCommandExecuted(..._0x362e5b),
        onMutationExecutedForCollab: (..._0x1cf9b8) =>
          _0x2c5fbb.onMutationExecutedForCollab(..._0x1cf9b8),
      }
    : _0x2c5fbb;
}
function Rl(_0x14e015, _0x576b34, _0x40103f) {
  return _0x14e015 === _0x513c12.UNIVER_BOARD
    ? { ..._0x40103f, unitId: _0x576b34 }
    : _0x40103f;
}
function zl(
  _0x3b2993,
  _0x1c4189,
  _0x546808,
  _0x204fa0,
  _0x27bd14,
  _0x24fe81,
  _0x415aff,
) {
  if (
    (typeof _0x3b2993 != "object" && typeof _0x3b2993 != "function") ||
    _0x3b2993 == null
  )
    return _0x3b2993;
  let _0x29e9b6 = _0x3b2993,
    _0x3b00dc = _0x415aff == null ? undefined : _0x415aff.get(_0x29e9b6);
  if (_0x3b00dc) return _0x3b00dc;
  let _0x3d710a = { ..._0x29e9b6 };
  return (
    Bl(
      _0x29e9b6,
      _0x3d710a,
      _0x1c4189,
      _0x546808,
      _0x204fa0,
      _0x27bd14,
      _0x24fe81,
    ),
    _0x415aff == null || _0x415aff.set(_0x29e9b6, _0x3d710a),
    _0x3d710a
  );
}
function Bl(
  _0x210daf,
  _0x1b210e,
  _0x9fe41e,
  _0x33a9b2,
  _0x372bfb,
  _0x5ea0df,
  _0x5d254f,
) {
  let _0x11d880 = (_0x3b3eec) => {
    if (_0x3b3eec === "constructor") return;
    let _0x405cdc = _0x210daf[_0x3b3eec];
    if (typeof _0x405cdc != "function") return;
    let _0x381d66 = _0x1b210e;
    _0x381d66[_0x3b3eec] = (..._0x2e5c4a) =>
      Vl(_0x9fe41e, _0x33a9b2, _0x372bfb, _0x5ea0df, _0x5d254f, () =>
        _0x405cdc.apply(_0x210daf, _0x2e5c4a),
      );
  };
  Object.keys(_0x210daf).forEach(_0x11d880);
  let _0x5a2690 = Object.getPrototypeOf(_0x210daf);
  _0x5a2690 &&
    _0x5a2690 !== Object.prototype &&
    Object.getOwnPropertyNames(_0x5a2690).forEach(_0x11d880);
}
function Vl(_0x52aaca, _0x2d4cfd, _0x41b4e1, _0x454d08, _0x237385, _0x494096) {
  let _0x1ebb20 = _0x52aaca.getCurrentUnitOfType(_0x2d4cfd),
    _0x7e922f;
  try {
    (_0x52aaca.setCurrentUnitForType(_0x41b4e1), (_0x7e922f = _0x494096()));
  } catch (_0x51be8c) {
    throw (
      Ul(_0x52aaca, _0x41b4e1, _0x1ebb20, _0x454d08, _0x237385),
      _0x51be8c
    );
  }
  return Hl(_0x7e922f)
    ? _0x7e922f.finally(() => {
        Ul(_0x52aaca, _0x41b4e1, _0x1ebb20, _0x454d08, _0x237385);
      })
    : (Ul(_0x52aaca, _0x41b4e1, _0x1ebb20, _0x454d08, _0x237385), _0x7e922f);
}
function Hl(_0x28a2b4) {
  return !!(_0x28a2b4 && typeof _0x28a2b4.finally == "function");
}
function Ul(_0x6a2321, _0x30e77c, _0x39ec8b, _0x4173e5, _0x23fb64) {
  if (Wl(_0x4173e5, _0x23fb64)) {
    var _0x409121;
    (_0x6a2321.setCurrentUnitForType(_0x30e77c),
      (_0x409121 = _0x6a2321.focusUnit) == null ||
        _0x409121.call(_0x6a2321, _0x30e77c));
    return;
  }
  _0x39ec8b && _0x6a2321.setCurrentUnitForType(_0x39ec8b.getUnitId());
}
function Wl(_0x5046a2, _0x57c2c0) {
  let _0x151c45 = _0x57c2c0 == null ? undefined : _0x57c2c0();
  return !_0x5046a2 || !(_0x151c45 != null && _0x151c45.has(X))
    ? false
    : _0x151c45.get(X).hasChildInteractionLease(_0x5046a2);
}
const Gl = new WeakMap();
let Kl = 0;
function ql(_0x1db1cf, _0x11f932) {
  if (!_0x1db1cf.has(Zl)) return Yl(_0x1db1cf, _0x11f932);
  let _0xe0d83 = _0x1db1cf.get(Zl);
  if (!(
    _0x11f932.id &&
    _0xe0d83
      .getAll(_0x11f932.childType, _0x11f932.surface)
      .some((_0x40d028) => _0x40d028.id === _0x11f932.id)
  ))
    return _0xe0d83.register(_0x11f932);
}
function Jl(_0x316671) {
  if (!_0x316671.has(Zl)) return;
  let _0x20e5b2 = Gl.get(_0x316671);
  _0x20e5b2 != null &&
    _0x20e5b2.size &&
    ([..._0x20e5b2.values()]
      .sort((_0x257de3, _0x17a061) => _0x257de3.index - _0x17a061.index)
      .forEach(({ contribution: _0x4084ca }) => ql(_0x316671, _0x4084ca)),
    Gl.delete(_0x316671));
}
function Yl(_0x4633f6, _0x505a61) {
  let _0x28dfef = { contribution: _0x505a61, index: Kl++ },
    _0x4cca2d = Xl(_0x505a61, _0x28dfef.index),
    _0x1daaa1 = _0x4633f6,
    _0x38c98c = Gl.get(_0x1daaa1) ?? new Map();
  return (
    _0x38c98c.set(_0x4cca2d, _0x28dfef),
    Gl.set(_0x1daaa1, _0x38c98c),
    _0x11d17f(() => {
      let _0x2e88a5 = Gl.get(_0x1daaa1);
      (_0x2e88a5 == null ? undefined : _0x2e88a5.get(_0x4cca2d)) ===
        _0x28dfef && _0x2e88a5.delete(_0x4cca2d);
    })
  );
}
function Xl(_0x1a955e, _0x197d5c) {
  let _0x36684b = $l(_0x1a955e);
  return _0x1a955e.id
    ? _0x1a955e.childType + ":" + _0x36684b + ":" + _0x1a955e.id
    : _0x1a955e.childType + ":" + _0x36684b + ":anonymous:" + _0x197d5c;
}
var Zl = class {
  constructor() {
    (Y(this, "_contributions", new Map()), Y(this, "_nextIndex", 0));
  }
  register(_0x1a0305) {
    let _0x288fe1 = { contribution: _0x1a0305, index: this._nextIndex++ },
      _0x1be529 = this._contributions["get"](_0x1a0305.childType) ?? [];
    return (
      _0x1be529.push(_0x288fe1),
      _0x1be529.sort(eu),
      this._contributions["set"](_0x1a0305.childType, _0x1be529),
      _0x11d17f(() => {
        let _0x50d350 = this._contributions["get"](_0x1a0305.childType);
        if (!_0x50d350) return;
        let _0x1fcd29 = _0x50d350.filter(
          (_0x2edec9) => _0x2edec9 !== _0x288fe1,
        );
        _0x1fcd29.length
          ? this._contributions["set"](_0x1a0305.childType, _0x1fcd29)
          : this._contributions["delete"](_0x1a0305.childType);
      })
    );
  }
  get(_0x23f5e5) {
    return this.getAll(_0x23f5e5)[0];
  }
  getAll(_0x53910d, _0x2e5ef2) {
    return (this._contributions["get"](_0x53910d) ?? [])
      .map((_0x1e4694) => _0x1e4694.contribution)
      .filter((_0x3b4072) => !_0x2e5ef2 || $l(_0x3b4072) === _0x2e5ef2);
  }
  getMergedMenuSchema(_0x1dcd75, _0x32baf8 = "ribbon") {
    let _0x3790ba = this.getAll(_0x1dcd75, _0x32baf8)
      .map((_0x360634) => _0x360634.menuSchema)
      .filter((_0x5b36ac) => _0x5b36ac && typeof _0x5b36ac == "object");
    if (_0x3790ba.length) return tu(_0x3790ba);
  }
  mountMenu(_0x42fee5) {
    let _0x227f3d = _0x42fee5.surface ?? "ribbon",
      _0x1174f = this.getAll(_0x42fee5.childType, _0x227f3d);
    if (!_0x1174f.length) return;
    let _0xd77dcd = _0x1174f.filter((_0x344174) => _0x344174.mountMenu);
    if (_0xd77dcd.length) {
      let _0x1f9ef3 = _0xd77dcd
        .map((_0x283141) => {
          var _0x56b2e8;
          return (_0x56b2e8 = _0x283141.mountMenu) == null
            ? undefined
            : _0x56b2e8.call(_0x283141, {
                ..._0x42fee5,
                surface: _0x227f3d,
                menuSchema: _0x283141.menuSchema,
                scopedActionServiceTokens: _0x283141.scopedActionServiceTokens,
              });
        })
        .filter((_0x851fc8) => !!_0x851fc8);
      return _0x11d17f(() => {
        _0x1f9ef3.forEach((_0x963b8e) => _0x963b8e.dispose());
      });
    }
    let _0x16f02c = this.getMergedMenuSchema(_0x42fee5.childType, _0x227f3d);
    if (_0x227f3d === "ribbon")
      return (
        wl({
          ..._0x42fee5,
          surface: _0x227f3d,
          menuSchema: _0x16f02c,
          scopedActionServiceTokens: Ql(_0x1174f),
        }) ?? undefined
      );
  }
};
function Ql(_0xe2b6a6) {
  let _0x1ff631 = _0xe2b6a6.flatMap(
    (_0x4fdfd9) => _0x4fdfd9.scopedActionServiceTokens ?? [],
  );
  return _0x1ff631.length ? Array.from(new Set(_0x1ff631)) : undefined;
}
function $l(_0x398fad) {
  return _0x398fad.surface ?? "ribbon";
}
function eu(_0x29e29f, _0x2ee124) {
  return (
    (_0x29e29f.contribution["order"] ?? _0x29e29f.index) -
      (_0x2ee124.contribution["order"] ?? _0x2ee124.index) ||
    _0x29e29f.index - _0x2ee124.index
  );
}
function tu(_0x5d0962) {
  return _0x5d0962.reduce(
    (_0x32fc67, _0x51bc69) => au(_0x32fc67, nu(_0x51bc69)),
    {},
  );
}
function nu(_0x11a147) {
  if (!su(_0x11a147)) return _0x11a147;
  let _0x3460f1 = new Set(Object.values(_0x205212)),
    _0x6ce333 = Object.entries(_0x11a147).filter(([_0x14298c]) =>
      _0x3460f1.has(_0x14298c),
    ),
    _0x298e3b = Object.entries(_0x11a147).filter(([_0x5e0da5]) =>
      iu(_0x5e0da5),
    );
  if (!_0x6ce333.length && !_0x298e3b.length) return _0x11a147;
  let _0x1ee19e = {};
  Object.entries(_0x11a147).forEach(([_0x279221, _0x58345d]) => {
    !_0x3460f1.has(_0x279221) &&
      !iu(_0x279221) &&
      (_0x1ee19e[_0x279221] = ou(_0x58345d));
  });
  let _0x168efc = su(_0x1ee19e[_0x254d8d.RIBBON])
    ? _0x1ee19e[_0x254d8d.RIBBON]
    : {};
  return (
    _0x6ce333.forEach(([_0x21eb81, _0xe1e01f]) => {
      _0x168efc[_0x21eb81] =
        _0x21eb81 in _0x168efc
          ? au(_0x168efc[_0x21eb81], _0xe1e01f)
          : ou(_0xe1e01f);
    }),
    _0x298e3b.forEach(([_0x1512e3, _0x16f564]) => {
      let _0x4dd590 = iu(_0x1512e3);
      if (!_0x4dd590) return;
      let _0x11efd5 = su(_0x168efc[_0x4dd590]) ? _0x168efc[_0x4dd590] : {};
      ((_0x11efd5[_0x1512e3] =
        _0x1512e3 in _0x11efd5
          ? au(_0x11efd5[_0x1512e3], _0x16f564)
          : ou(_0x16f564)),
        (_0x168efc[_0x4dd590] = _0x11efd5));
    }),
    (_0x1ee19e[_0x254d8d.RIBBON] = _0x168efc),
    _0x1ee19e
  );
}
const ru = [
  [Object.values(_0xc974ff), _0x205212.START],
  [Object.values(_0x291d4c), _0x205212.INSERT],
  [Object.values(_0x1e0fac), _0x205212.FORMULAS],
  [Object.values(_0x1542f5), _0x205212.DATA],
  [Object.values(_0x473b13), _0x205212.VIEW],
  [Object.values(_0xb3e97c), _0x205212.OTHERS],
];
function iu(_0x2357de) {
  var _0x5b39e2;
  return (_0x5b39e2 = ru.find(([_0x3db8c1]) =>
    _0x3db8c1.includes(_0x2357de),
  )) == null
    ? undefined
    : _0x5b39e2[1];
}
function au(_0xb98453, _0x31656b) {
  if (!su(_0xb98453) || !su(_0x31656b)) return ou(_0x31656b);
  let _0x4ecc36 = { ..._0xb98453 };
  return (
    Object.entries(_0x31656b).forEach(([_0x4e7a41, _0x25ca83]) => {
      _0x4ecc36[_0x4e7a41] =
        _0x4e7a41 in _0x4ecc36
          ? au(_0x4ecc36[_0x4e7a41], _0x25ca83)
          : ou(_0x25ca83);
    }),
    _0x4ecc36
  );
}
function ou(_0x4c9d2b) {
  return Array.isArray(_0x4c9d2b)
    ? _0x4c9d2b.map((_0x2f0899) => ou(_0x2f0899))
    : su(_0x4c9d2b)
      ? Object.fromEntries(
          Object.entries(_0x4c9d2b).map(([_0x52e053, _0x223ec3]) => [
            _0x52e053,
            ou(_0x223ec3),
          ]),
        )
      : _0x4c9d2b;
}
function su(_0x11b46b) {
  return (
    !!_0x11b46b && typeof _0x11b46b == "object" && !Array.isArray(_0x11b46b)
  );
}
function cu(_0x2b93fa, _0x4c80ba, _0x53aae6) {
  let {
    viewport: _0x3377b8,
    menuSlot: _0x3cd28f,
    popupSlot: _0x383c99,
  } = _0x53aae6;
  return {
    hostUnitId: _0x2b93fa.hostUnitId,
    hostAnchorId: _0x2b93fa.hostAnchorId,
    embedId: _0x2b93fa.embedId,
    childUnitId: _0x2b93fa.childUnitId,
    childType: _0x2b93fa.childType,
    layout: _0x4c80ba,
    mode: "float",
    rootElement: _0x3377b8,
    contentRoot: ms(_0x3377b8, "data-embed-content-root") ?? _0x3377b8,
    canvasRoot: ms(_0x3377b8, "data-embed-canvas-root") ?? _0x3377b8,
    overlayRoot: ms(_0x3377b8, "data-embed-overlay-root") ?? _0x3377b8,
    popupRoot: _0x383c99 ?? ms(_0x3377b8, "data-embed-popup-root") ?? _0x3377b8,
    menuOutlet: { container: _0x3cd28f },
    active$: _0x2bd05a(true),
    fullscreen: true,
  };
}
function lu(_0xeb05ae) {
  let {
      injector: _0x205703,
      descriptor: _0x528d93,
      renderScope: _0x4c2f5b,
    } = _0xeb05ae,
    _0x7493aa = [],
    _0x2044cc = _0x528d93.embedId,
    _0x100cdd = _0x205703.has(X) ? _0x205703.get(X) : undefined,
    _0x4a8f38 = _0x205703.has(Es) ? _0x205703.get(Es) : undefined;
  return (
    _0x100cdd &&
      (_0x7493aa.push(
        _0x100cdd.registerRuntimeScope({
          embedId: _0x2044cc,
          hostUnitId: _0x528d93.hostUnitId,
          childUnitId: _0x528d93.childUnitId,
          childType: _0x528d93.childType,
          sessionMode: "child-fullscreen",
        }),
      ),
      _0x528d93.childUnitId &&
        _0x7493aa.push(
          _0x100cdd.acquireLease({
            embedId: _0x2044cc,
            role: "child-session",
            owner: "fullscreen-runtime",
            sessionMode: "child-fullscreen",
            hostUnitId: _0x528d93.hostUnitId,
            childUnitId: _0x528d93.childUnitId,
            childType: _0x528d93.childType,
          }),
        ),
      du(_0xeb05ae).forEach(({ element: _0x555039, role: _0x4de361 }) => {
        _0x7493aa.push(
          _0x100cdd.registerElement({
            embedId: _0x2044cc,
            element: _0x555039,
            role: _0x4de361,
          }),
        );
      })),
    _0x4a8f38 &&
      (du(_0xeb05ae).forEach(({ element: _0x49673e }) => {
        _0x7493aa.push(
          _0x4a8f38.registerRoot(_0x2044cc, _0x49673e, _0x528d93.childUnitId),
        );
      }),
      _0x7493aa.push(
        _0x4a8f38.activatePortalScope(
          _0x2044cc,
          _0x4c2f5b.rootElement["ownerDocument"],
          {
            includeAppShellEditorPortal:
              _0x528d93.childType === _0x513c12.UNIVER_SHEET,
          },
        ),
      )),
    _0x100cdd &&
      _0x4a8f38 &&
      _0x7493aa.push(
        uu({
          embedId: _0x2044cc,
          focusCoordinator: _0x100cdd,
          interactionBoundaryService: _0x4a8f38,
          runtimeRoot: _0x4c2f5b.rootElement,
        }),
      ),
    _0x11d17f(() => {
      [..._0x7493aa].reverse().forEach((_0x23a716) => _0x23a716.dispose());
    })
  );
}
function uu(_0x3caae6) {
  let {
      embedId: _0x4aca9d,
      focusCoordinator: _0x13f61e,
      interactionBoundaryService: _0x3ac85f,
      runtimeRoot: _0x138d72,
    } = _0x3caae6,
    _0x5556f6 = _0x138d72.ownerDocument,
    _0x193278 = _0x5556f6.defaultView,
    _0x1db81f,
    _0x450d91 = (_0x49250c) => {
      var _0x7c4fb9;
      let _0x1b1e41 =
        _0x49250c.type === "keydown" && _0x49250c.key === "Escape";
      if (_0x49250c.type === "keydown" && !_0x1b1e41) return;
      let _0x3ecf90 = _0x13f61e.resolveActiveChildSessionRuntimeScope();
      if (
        (_0x3ecf90 == null ? undefined : _0x3ecf90.embedId) !== _0x4aca9d ||
        _0x3ecf90.sessionMode !== "child-fullscreen"
      )
        return;
      let _0x300ad3 =
          _0x49250c.target instanceof HTMLElement ? _0x49250c.target : null,
        _0x272f19 =
          !!_0x300ad3 &&
          (_0x3ac85f.contains(_0x4aca9d, _0x300ad3, _0x49250c) ||
            _0x13f61e.containsElement(_0x4aca9d, _0x300ad3, _0x49250c)),
        _0x123d1c =
          _0x300ad3 == null ||
          (_0x7c4fb9 = _0x300ad3.closest("[data-embed-runtime-focus-role]")) ==
            null
            ? undefined
            : _0x7c4fb9.getAttribute(ws);
      (!_0x1b1e41 &&
        (!_0x272f19 ||
          (_0x123d1c !== "child-popup" && _0x123d1c !== "floating-menu"))) ||
        (_0x193278 &&
          (_0x1db81f != null && _0x193278.cancelAnimationFrame(_0x1db81f),
          (_0x1db81f = _0x193278.requestAnimationFrame(() => {
            _0x1db81f = _0x193278.requestAnimationFrame(() => {
              var _0x499683;
              _0x1db81f = undefined;
              let _0x51975e =
                (_0x300ad3 == null ? undefined : _0x300ad3.isConnected) &&
                _0x300ad3.closest('[data-state="closed"]') == null;
              if (!_0x1b1e41 && _0x51975e) return;
              let _0x272dd6 = _0x5556f6.activeElement,
                _0x25e9a4 =
                  _0x272dd6 instanceof HTMLElement
                    ? (_0x499683 = _0x272dd6.closest(
                        "[data-embed-runtime-focus-role]",
                      )) == null
                      ? undefined
                      : _0x499683.getAttribute(ws)
                    : undefined,
                _0x4faa15 =
                  _0x272dd6 instanceof HTMLElement &&
                  _0x272dd6.closest('[data-state="open"]') != null,
                _0x5b77d9 =
                  (_0x25e9a4 !== "child-popup" || _0x4faa15) &&
                  (_0x3ac85f.contains(_0x4aca9d, _0x272dd6) ||
                    _0x13f61e.containsElement(_0x4aca9d, _0x272dd6)),
                _0x4ef457 = _0x13f61e.resolveActiveChildSessionRuntimeScope();
              _0x5b77d9 ||
                !_0x138d72.isConnected ||
                (_0x4ef457 == null ? undefined : _0x4ef457.embedId) !==
                  _0x4aca9d ||
                _0x4ef457.sessionMode !== "child-fullscreen" ||
                (_0x138d72.hasAttribute("tabindex") ||
                  (_0x138d72.tabIndex = -1),
                _0x138d72.focus({ preventScroll: true }));
            });
          }))));
    };
  return (
    _0x5556f6.addEventListener("click", _0x450d91, true),
    _0x5556f6.addEventListener("keydown", _0x450d91, true),
    _0x11d17f(() => {
      (_0x5556f6.removeEventListener("click", _0x450d91, true),
        _0x5556f6.removeEventListener("keydown", _0x450d91, true),
        _0x1db81f != null &&
          (_0x193278 == null || _0x193278.cancelAnimationFrame(_0x1db81f)));
    })
  );
}
function du(_0xd9f92c) {
  let {
      renderScope: _0x5c6b25,
      menuRoot: _0x3d508d,
      menuSlot: _0x39cbad,
      popupSlot: _0x20ec84,
      sidebarSlot: _0x29910a,
      rightSidebarSlot: _0x44437e,
      footerSlot: _0xfed273,
    } = _0xd9f92c,
    _0x177be3 = [
      { element: _0x5c6b25.rootElement, role: "runtime" },
      { element: _0x5c6b25.contentRoot, role: "runtime" },
      { element: _0x5c6b25.canvasRoot, role: "runtime" },
      { element: _0x5c6b25.overlayRoot, role: "runtime" },
      { element: _0x3d508d, role: "floating-menu" },
      { element: _0x39cbad, role: "floating-menu" },
      { element: _0xfed273, role: "floating-menu" },
      { element: _0x29910a, role: "child-popup" },
      { element: _0x44437e, role: "child-popup" },
      { element: _0x20ec84, role: "child-popup" },
    ],
    _0x37b487 = new Set();
  return _0x177be3.flatMap(({ element: _0xf7d4f3, role: _0x45eee5 }) =>
    !_0xf7d4f3 || _0x37b487.has(_0xf7d4f3)
      ? []
      : (_0x37b487.add(_0xf7d4f3), [{ element: _0xf7d4f3, role: _0x45eee5 }]),
  );
}
function fu(_0x284627) {
  return pu(_0x284627) || hu(_0x284627);
}
function pu(_0x383832) {
  if (
    !_0x383832.injector["has"](bs) ||
    _0x383832.descriptor["childType"] == null
  )
    return;
  let _0x57ac6f = _0x383832.injector["get"](bs).get(
    _0x383832.descriptor["childType"],
  );
  if ((_0x57ac6f == null ? undefined : _0x57ac6f.hostChromeMode) !== "ribbon")
    return;
  let _0x2ca0e8 = mu(_0x383832.injector);
  if (_0x383832.injector["has"](Zl)) {
    let _0x14befc = _0x383832.injector["get"](Zl).mountMenu({
      container: _0x383832.menuContainer,
      portalContainer: _0x383832.childContext["runtimeScope"].roots["popup"],
      injector: _0x383832.childContext["runtimeScope"].injector,
      childType: _0x383832.descriptor["childType"],
      childUnitId: _0x383832.descriptor["childUnitId"],
      embedId: _0x383832.descriptor["embedId"],
      surface: "ribbon",
      headerMenu: true,
      ribbonType: _0x2ca0e8,
      ribbonHeaderClassName:
        "univer-box-border univer-bg-gray-50 univer-pr-24 dark:!univer-bg-gray-900",
    });
    if (_0x14befc) return _0x14befc;
  }
  return wl({
    container: _0x383832.menuContainer,
    portalContainer: _0x383832.childContext["runtimeScope"].roots["popup"],
    injector: _0x383832.childContext["runtimeScope"].injector,
    childType: _0x383832.descriptor["childType"],
    childUnitId: _0x383832.descriptor["childUnitId"],
    embedId: _0x383832.descriptor["embedId"],
    menuSchema: undefined,
    headerMenu: true,
    ribbonType: _0x2ca0e8,
    ribbonHeaderClassName:
      "univer-box-border\x20univer-bg-gray-50\x20univer-pr-24\x20dark:!univer-bg-gray-900",
  });
}
function mu(_0x29b48e) {
  var _0x1e0e05;
  return _0x29b48e.has(_0x405ebf)
    ? (((_0x1e0e05 = _0x29b48e.get(_0x405ebf).getConfig(_0x1b6a30)) == null
        ? undefined
        : _0x1e0e05.ribbonType) ?? "classic")
    : "classic";
}
function hu(_0x1c864c) {
  if (
    !_0x1c864c.injector["has"](Lc) ||
    _0x1c864c.descriptor["childType"] == null ||
    !_0x1c864c.descriptor["childUnitId"]
  )
    return;
  let _0x5098a9 = _0x1c864c.injector["get"](Lc).get(
      _0x1c864c.descriptor["hostType"],
      _0x1c864c.descriptor["entry"],
      _0x1c864c.descriptor["childType"],
    ),
    _0x67ce0c =
      _0x5098a9 == null
        ? undefined
        : _0x5098a9.mount({
            ..._0x1c864c.childContext,
            active: {
              hostUnitId: _0x1c864c.descriptor["hostUnitId"],
              embedId: _0x1c864c.descriptor["embedId"],
              childUnitId: _0x1c864c.descriptor["childUnitId"],
              stage: "stage2",
            },
          });
  return _0x67ce0c ? _0x11d17f(() => _0x67ce0c.dispose()) : undefined;
}
let gu = class extends _0x5f3c10 {
  constructor(_0x4ab944, _0x2ccfc3) {
    (super(),
      Y(this, "_session$", new _0x2ac10f(null)),
      Y(this, "_exited$", new _0x442c37()),
      Y(this, "session$", this._session$["asObservable"]()),
      Y(this, "exited$", this._exited$["asObservable"]()),
      this.disposeWithMe(
        _0x4ab944.onCommandExecuted((_0x33db12) => {
          if (!_u(_0x33db12)) return;
          let _0x585818 = this.getSession();
          (_0x585818 == null ? undefined : _0x585818.hostUnitId) ===
            _0x33db12.params["unitId"] &&
            _0x585818.embedId === _0x33db12.params["embedId"] &&
            this.exit(_0x585818.embedId);
        }),
      ),
      this.disposeWithMe(
        _0x2ccfc3.unitDisposed$["subscribe"]((_0x3fa75f) => {
          let _0x36aeca = this.getSession(),
            _0x2f4e43 = _0x3fa75f.getUnitId();
          _0x36aeca &&
            (_0x36aeca.hostUnitId === _0x2f4e43 ||
              _0x36aeca.childUnitId === _0x2f4e43) &&
            this.exit(_0x36aeca.embedId);
        }),
      ));
  }
  dispose() {
    (super.dispose(),
      this._session$["complete"](),
      this._exited$["complete"]());
  }
  getSession() {
    return this._session$["getValue"]();
  }
  enter(_0x6731c2) {
    var _0x471db2, _0x2ddbc4;
    if (!_0x6731c2.childUnitId || _0x6731c2.childType == null)
      throw Error("EMBED_FULLSCREEN_CHILD_NOT_RESOLVED");
    let _0x1f45aa =
        ((_0x471db2 = _0x6731c2.sourceMeta) == null
          ? undefined
          : _0x471db2.floating) || undefined,
      _0x33f123 =
        ((_0x2ddbc4 = _0x6731c2.sourceMeta) == null
          ? undefined
          : _0x2ddbc4.tab) || undefined;
    if (_0x33f123 && _0x33f123.enabled && !_0x1f45aa)
      throw Error("EMBED_FULLSCREEN_TAB_NOT_SUPPORTED");
    let _0x38ecc4 = _0x1f45aa ? _0x1f45aa.layout : undefined;
    if (!_0x38ecc4) throw Error("EMBED_FULLSCREEN_LAYOUT_NOT_RESOLVED");
    let _0x5634e9 = {
      hostUnitId: _0x6731c2.hostUnitId,
      embedId: _0x6731c2.embedId,
      childUnitId: _0x6731c2.childUnitId,
      childType: _0x6731c2.childType,
      entry: _0x6731c2.entry,
      layout: _0x38ecc4,
    };
    return (this._session$["next"](_0x5634e9), _0x5634e9);
  }
  exit(_0x48e84a) {
    let _0x50f144 = this.getSession();
    _0x50f144 &&
      (!_0x48e84a || _0x50f144.embedId === _0x48e84a) &&
      this._session$["next"](null);
  }
  notifyExited(_0x4ee4b5) {
    this._exited$["next"](_0x4ee4b5);
  }
};
gu = $([Q(0, _0x42e186), Q(1, _0x3e617f)], gu);
function _u(_0x5a1263) {
  return (
    _0x5a1263.id === _0x1c0b7d.id &&
    typeof _0x5a1263.params == "object" &&
    _0x5a1263.params !== null &&
    "unitId" in _0x5a1263.params &&
    typeof _0x5a1263.params["unitId"] == "string" &&
    "embedId" in _0x5a1263.params &&
    typeof _0x5a1263.params["embedId"] == "string"
  );
}
function vu() {
  let _0x19b9a4 = _0x5ade04(_0x20cff5),
    _0x29af72 = _0x5ade04(_0x11dce0),
    _0x30e13d = _0x5ade04(dl),
    _0x3c3a29 = _0x5ade04(gu),
    _0x40aa9c = _0x344702(null),
    _0x178ebe = _0x344702(null),
    _0x33ebfb = _0x344702(null),
    _0xc2a9f = _0x344702(null),
    _0x2c8ee4 = _0x344702(null),
    _0x46ed00 = _0x344702(null),
    _0x1e0c05 = _0x344702(null),
    _0xf50a50 = _0xe46a3c(
      () => _0x3c3a29.session$,
      _0x3c3a29.getSession(),
      false,
      [_0x3c3a29],
    ),
    [_0x5234f0, _0x4c5325] = _0x4d3f85(null);
  if (
    (_0x51cbb8(() => {
      var _0x1ae5b9;
      let _0x40dd59 = _0x33ebfb.current,
        _0x29a009 = _0x178ebe.current,
        _0x3c89e2 = _0xc2a9f.current,
        _0x940d0 = _0x2c8ee4.current,
        _0x1c905f = _0x46ed00.current,
        _0x3c0721 = _0x1e0c05.current;
      if (
        !_0xf50a50 ||
        !_0x40dd59 ||
        !_0x29a009 ||
        !_0x3c89e2 ||
        !_0x940d0 ||
        !_0x1c905f ||
        !_0x3c0721
      )
        return;
      let _0x3de7cb = xu(_0x19b9a4, _0xf50a50.hostUnitId, _0xf50a50.embedId);
      if (
        !(_0x3de7cb != null && _0x3de7cb.childUnitId) ||
        _0x3de7cb.childType == null
      ) {
        _0x40dd59.dataset["embedFullscreenStatus"] = "missing-descriptor";
        return;
      }
      let _0x40e6ba = _0x19b9a4.get(Ic).get(_0x3de7cb.childType);
      if (!(
        _0x40e6ba != null &&
        _0x40e6ba.supportedLayouts["includes"](_0xf50a50.layout)
      )) {
        _0x40dd59.dataset["embedFullscreenStatus"] = "unsupported-layout";
        return;
      }
      ((_0x40dd59.dataset["embedFullscreenStatus"] = "mounting"),
        (_0x40dd59.dataset["embedId"] = _0x3de7cb.embedId),
        (_0x40dd59.dataset["embedHostEntry"] = _0x3de7cb.entry),
        (_0x40dd59.dataset["embedHostAnchorId"] = _0x3de7cb.hostAnchorId),
        (_0x40dd59.dataset["embedLayout"] = _0xf50a50.layout),
        (_0x40dd59.dataset["embedChildType"] = String(_0x3de7cb.childType)),
        (_0x40dd59.dataset["embedChildUnitId"] = _0x3de7cb.childUnitId));
      let _0x570e15 = hs(_0x40dd59),
        _0x51e63a = cu(_0x3de7cb, _0xf50a50.layout, {
          viewport: _0x40dd59,
          menuSlot: _0x29a009,
          popupSlot: _0x3c89e2,
          footerSlot: _0x3c0721,
        }),
        _0x8b084 = {
          descriptor: _0x3de7cb,
          layout: _0xf50a50.layout,
          injector: _0x19b9a4,
          hostElement: _0x40dd59,
          container: _0x40dd59,
          renderScope: _0x51e63a,
          hostUnitId: _0x3de7cb.hostUnitId,
          embedId: _0x3de7cb.embedId,
          childUnitId: _0x3de7cb.childUnitId,
          childType: _0x3de7cb.childType,
        },
        { runtimeScope: _0x440787, disposable: _0x5044ff } = jc(
          _0x8b084,
          () => {},
          _0x40e6ba.scopedDependencies,
        );
      _0x4c5325({
        embedId: _0x3de7cb.embedId,
        injector: _0x440787.injector,
        sourceInjector: _0x19b9a4,
        popupContainer: _0x440787.roots["popup"],
      });
      let _0x1050fe = { ..._0x8b084, runtimeScope: _0x440787 },
        _0x11911c = lu({
          injector: _0x19b9a4,
          descriptor: _0x3de7cb,
          renderScope: _0x51e63a,
          menuRoot: _0x40aa9c.current,
          menuSlot: _0x29a009,
          popupSlot: _0x3c89e2,
          sidebarSlot: _0x940d0,
          rightSidebarSlot: _0x1c905f,
          footerSlot: _0x3c0721,
        }),
        _0x6a7074 = (_0x5e4345, _0x28e8a9 = false) => {
          var _0x16cea6, _0x8a3df0;
          let _0xa7b6a0 =
            (_0x5e4345 == null ? undefined : _0x5e4345.target) instanceof
            Element
              ? _0x5e4345.target
              : null;
          (_0xa7b6a0 != null &&
            _0xa7b6a0.closest(
              "[data-embed-fullscreen-close=\x22true\x22],\x20[data-embed-fullscreen-menu=\x22true\x22],\x20[data-embed-fullscreen-popup-root=\x22true\x22]",
            )) ||
            ((_0x16cea6 = _0x440787.instanceService) == null ||
              _0x16cea6.setCurrentUnitForType(_0x3de7cb.childUnitId),
            (_0x8a3df0 = _0x440787.instanceService) == null ||
              _0x8a3df0.focusUnit(_0x3de7cb.childUnitId),
            _0x30e13d.activateFullscreen(_0x3de7cb, {
              focusLayout: _0x28e8a9,
            }));
        };
      (_0x6a7074(undefined, true),
        _0x40dd59.addEventListener("pointerdown", _0x6a7074, { capture: true }),
        _0x40dd59.addEventListener("focusin", _0x6a7074));
      let _0x51c4d6 =
        (_0x1ae5b9 = _0x40e6ba.mount) == null
          ? undefined
          : _0x1ae5b9.call(_0x40e6ba, _0x1050fe);
      _0x3de7cb.childType === _0x513c12.UNIVER_BASE &&
        hl(_0x3de7cb.embedId, _0x51e63a.rootElement);
      let _0xf3b097 = fu({
        injector: _0x19b9a4,
        descriptor: _0x3de7cb,
        childContext: _0x1050fe,
        menuContainer: _0x29a009,
      });
      return (
        (_0x40dd59.dataset["embedFullscreenStatus"] = "mounted"),
        () => {
          (_0x4c5325(null),
            globalThis.requestAnimationFrame(() => {
              (_0x40dd59.removeEventListener("pointerdown", _0x6a7074, {
                capture: true,
              }),
                _0x40dd59.removeEventListener("focusin", _0x6a7074),
                _0xf3b097 == null || _0xf3b097.dispose(),
                _0x51c4d6 == null || _0x51c4d6.dispose(),
                _0x11911c.dispose(),
                _0x5044ff.dispose(),
                _0x570e15.dispose(),
                _0x30e13d.clearFullscreen(_0x3de7cb),
                delete _0x40dd59.dataset["embedFullscreenStatus"],
                delete _0x40dd59.dataset["embedId"],
                delete _0x40dd59.dataset["embedHostEntry"],
                delete _0x40dd59.dataset["embedHostAnchorId"],
                delete _0x40dd59.dataset["embedLayout"],
                delete _0x40dd59.dataset["embedChildType"],
                delete _0x40dd59.dataset["embedChildUnitId"],
                _0x3c3a29.notifyExited(_0xf50a50));
            }));
        }
      );
    }, [_0x30e13d, _0x3c3a29, _0x19b9a4, _0xf50a50]),
    !_0xf50a50)
  )
    return null;
  let _0x2f1ef3 = () => {
    _0x3c3a29.exit(_0xf50a50.embedId);
  };
  return _0x287fb5("div", {
    className:
      "univer-fixed univer-inset-0 univer-grid univer-grid-rows-[auto_minmax(0,1fr)_auto] univer-bg-gray-0 univer-text-gray-900 dark:!univer-bg-gray-800 dark:!univer-text-gray-0",
    "data-embed-fullscreen-shell": "true",
    style: { zIndex: 810 },
    children: [
      _0xf50a50.childType === _0x513c12.UNIVER_BOARD &&
        _0x29e1d8("div", {
          className:
            "univer-pointer-events-none univer-absolute univer-left-4 univer-top-3 univer-z-30 univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-1 univer-shadow-lg dark:!univer-border-gray-700 dark:!univer-bg-gray-900",
          "data-embed-boards-fullscreen-exit": "true",
          title: _0x29af72.t("embed-ui.fullscreen.exit"),
          children: _0x287fb5(_0x232e68, {
            noIcon: true,
            className:
              "univer-pointer-events-auto univer-gap-1.5 univer-text-sm univer-font-medium",
            onClick: _0x2f1ef3,
            children: [
              _0x29e1d8(_0x1a1ae7, {}),
              _0x29e1d8("span", {
                children: _0x29af72.t("embed-ui.fullscreen.exit"),
              }),
            ],
          }),
        }),
      _0x287fb5("div", {
        ref: _0x40aa9c,
        className:
          "univer-relative univer-z-[3] univer-min-w-0 univer-bg-gray-0 empty:univer-hidden dark:!univer-bg-gray-800",
        "data-embed-fullscreen-menu": "true",
        children: [
          _0xf50a50.childType !== _0x513c12.UNIVER_BOARD &&
            _0x29e1d8("div", {
              className:
                "univer-pointer-events-none univer-absolute univer-right-3 univer-top-0 univer-z-[4] univer-flex univer-h-9 univer-items-center",
              "data-embed-fullscreen-header": "true",
              children: _0x287fb5(_0x43385d, {
                type: "button",
                size: "small",
                variant: "ghost",
                className:
                  "univer-pointer-events-auto univer-gap-1.5 hover:!univer-bg-primary-100 hover:!univer-text-primary-700 dark:hover:!univer-bg-primary-800 dark:hover:!univer-text-primary-100 [&_svg]:!univer-size-3.5",
                "data-embed-fullscreen-close": "true",
                onClick: _0x2f1ef3,
                children: [
                  _0x29e1d8(_0x31cc5f, {}),
                  _0x29e1d8("span", {
                    children: _0x29af72.t("embed-ui.fullscreen.exit"),
                  }),
                ],
              }),
            }),
          _0x29e1d8("div", {
            ref: _0x178ebe,
            className: "univer-min-w-0",
            "data-embed-fullscreen-menu-slot": "true",
            "data-embed-menu-slot": "true",
          }),
        ],
      }),
      _0x287fb5("div", {
        className:
          "univer-flex univer-min-h-0 univer-min-w-0 univer-overflow-hidden",
        "data-embed-fullscreen-body": "true",
        children: [
          _0x29e1d8("div", {
            ref: _0x2c8ee4,
            className:
              "univer-relative\x20univer-z-[2]\x20univer-min-h-0\x20univer-flex-none\x20univer-bg-gray-0\x20empty:univer-hidden\x20dark:!univer-bg-gray-800\x20[&_[data-u-comp=base-left-panel]]:univer-h-full",
            "data-embed-fullscreen-sidebar-slot": "true",
            "data-embed-id": _0xf50a50.embedId,
          }),
          _0x29e1d8("div", {
            ref: _0x33ebfb,
            className:
              "univer-relative univer-min-h-0 univer-min-w-0 univer-flex-1 univer-overflow-hidden dark:!univer-bg-gray-900",
            "data-embed-fullscreen-viewport": "true",
            onContextMenuCapture: (_0x542e41) => {
              _0x542e41.preventDefault();
            },
          }),
          _0x29e1d8("div", {
            ref: _0x46ed00,
            className:
              "univer-relative univer-z-[2] univer-min-h-0 univer-flex-none univer-bg-gray-0 empty:univer-hidden dark:!univer-bg-gray-800",
            "data-embed-fullscreen-right-sidebar-slot": "true",
            "data-embed-id": _0xf50a50.embedId,
            children: _0x5234f0 && _0x29e1d8(bu, { ..._0x5234f0 }),
          }),
        ],
      }),
      _0x29e1d8("div", {
        ref: _0x1e0c05,
        className:
          "univer-relative univer-z-[2] univer-min-w-0 univer-bg-gray-0 empty:univer-hidden dark:!univer-bg-gray-800",
        "data-embed-fullscreen-footer-slot": "true",
        "data-embed-footer-slot": "true",
      }),
      _0x29e1d8("div", {
        ref: _0xc2a9f,
        className:
          "univer-pointer-events-none univer-fixed univer-inset-0 univer-z-20 [&>*]:univer-pointer-events-auto",
        "data-embed-fullscreen-popup-root": "true",
        "data-embed-popup-root": "true",
        children: _0x5234f0 && _0x29e1d8(yu, { ..._0x5234f0 }),
      }),
    ],
  });
}
function yu(_0x166aca) {
  let {
    embedId: _0x3744cd,
    injector: _0x694f0e,
    sourceInjector: _0x474554,
    popupContainer: _0x4c015e,
  } = _0x166aca;
  return _0x287fb5(_0x541075, {
    children: [
      _0x287fb5(fl, {
        injector: _0x694f0e,
        mountContainer: _0x4c015e,
        embedId: _0x3744cd,
        children: [_0x29e1d8(_0x537cae, {}), _0x29e1d8(_0x2dca6b, {})],
      }),
      _0x29e1d8(fl, {
        injector: _0x474554,
        mountContainer: _0x4c015e,
        embedId: _0x3744cd,
        children: _0x29e1d8(_0x2dca6b, {}),
      }),
    ],
  });
}
function bu(_0x50ad97) {
  let {
    embedId: _0x36e28f,
    injector: _0xbe290b,
    sourceInjector: _0x14fc1b,
    popupContainer: _0x33607b,
  } = _0x50ad97;
  return _0x287fb5("aside", {
    className: "univer-z-[2] univer-flex univer-h-full",
    children: [
      _0x29e1d8(fl, {
        injector: _0xbe290b,
        mountContainer: _0x33607b,
        embedId: _0x36e28f,
        children: _0x29e1d8(_0x3681ff, {}),
      }),
      _0x29e1d8(fl, {
        injector: _0x14fc1b,
        mountContainer: _0x33607b,
        embedId: _0x36e28f,
        children: _0x29e1d8(_0x3681ff, {}),
      }),
    ],
  });
}
function xu(_0x2a580a, _0xa7d62, _0x30cdef) {
  try {
    return _0x2a580a.get(_0x588de6).getDescriptor(_0xa7d62, _0x30cdef);
  } catch {
    return;
  }
}
const Su = {};
function Cu(_0x6b40ae) {
  let { stage: _0x13dc5a, interactionFlow: _0x667c19 } = _0x6b40ae,
    _0x4ac96a = _0x667c19 === "doc-block",
    _0x38d560 = _0x13dc5a === "stage1" && !_0x4ac96a,
    _0x350c8a = _0x13dc5a === "stage2" || _0x4ac96a;
  return {
    allowHostBodyDrag: _0x38d560,
    disableLiveHostPointerEvents:
      !_0x4ac96a && (_0x13dc5a === "inactive" || _0x13dc5a === "stage1"),
    passThroughInteractionGate: _0x350c8a,
    runtimeOwnsInteraction: _0x350c8a,
  };
}
function wu(_0x38ecd6, _0x578e19) {
  var _0x5f2b24;
  return (
    (_0x38ecd6 == null ? undefined : _0x38ecd6.hostType) ===
      _0x513c12.UNIVER_SHEET &&
    _0x38ecd6.childType === _0x513c12.UNIVER_SHEET &&
    !!((_0x5f2b24 = _0x38ecd6.sourceMeta) != null && _0x5f2b24.floating) &&
    _0x578e19 !== "stage2"
  );
}
function Tu(_0x310d56, _0x483c68) {
  return wu(_0x310d56, _0x483c68) ? "deferred" : "ready";
}
function Eu(_0x417aac) {
  var _0x1fd3bd;
  return _0x417aac.fullscreen ||
    (((_0x1fd3bd = _0x417aac.active) == null
      ? undefined
      : _0x1fd3bd.embedId) === _0x417aac.embedId &&
      _0x417aac.active["stage"] === "stage2") ||
    (!_0x417aac.usesDomFloatingStage && _0x417aac.renderScopeActive)
    ? "stage2"
    : "inactive";
}
function Du(_0x39fa01, _0x3607a0) {
  return (_0x39fa01 !== "docs-sticky-sheet" &&
    _0x39fa01 !== "docs-sticky-base") ||
    _0x3607a0.shiftKey ||
    _0x3607a0.ctrlKey ||
    _0x3607a0.metaKey
    ? false
    : Math.abs(_0x3607a0.deltaY) > Math.abs(_0x3607a0.deltaX);
}
const Ou = Symbol("univer.embed.forwarded-wheel-event"),
  ku = Symbol("univer.embed.host-vertical-wheel-attempted-event");
function Au(_0x55d41a, _0x56fe94) {
  var _0x2bf043;
  if (!_0x55d41a.ctrlKey && !_0x55d41a.metaKey) return false;
  let _0x3f2407 = _0x56fe94.getChildContext();
  return !_0x3f2407 ||
    ((_0x2bf043 = _0x56fe94.onHostWheel) == null
      ? undefined
      : _0x2bf043.call(_0x56fe94, _0x55d41a, _0x3f2407)) !== true
    ? false
    : (_0x56fe94.invalidate("host-scroll"), sd(_0x55d41a, true), true);
}
function ju(_0x33ab74) {
  let _0x24a8fb = { activeUntil: 0 },
    _0x32622a = (_0x5dc973) => {
      var _0x388e87;
      if (
        Iu(_0x5dc973) ||
        ((_0x5dc973.ctrlKey || _0x5dc973.metaKey) &&
          (_0x24a8fb.activeUntil = 0),
        Au(_0x5dc973, _0x33ab74))
      )
        return;
      if (
        _0x33ab74.routeHostGestures &&
        _0x33ab74.hostWheelGestureService["isHostGesture"](_0x5dc973)
      ) {
        var _0x4dad77;
        let _0x293470 = _0x33ab74.getChildContext();
        if (
          (_0x293470 &&
            ((_0x4dad77 = _0x33ab74.onHostWheel) == null
              ? undefined
              : _0x4dad77.call(_0x33ab74, _0x5dc973, _0x293470)) === true) ||
          Hu(_0x33ab74.container, _0x5dc973)
        ) {
          (_0x33ab74.invalidate("host-scroll"), sd(_0x5dc973, true));
          return;
        }
      }
      if (_0x5dc973.ctrlKey || _0x5dc973.metaKey) return;
      let _0x441241 = _0x33ab74.getStage();
      if (_0x441241 === "stage2") return;
      let _0x549b9b = _0x33ab74.getChildContext(),
        _0x382b74 = _0x549b9b
          ? _0x33ab74.passiveViewportRegistry["get"](
              _0x549b9b.childType,
              _0x549b9b.layout,
            )
          : undefined,
        _0x34b801 = Pu(_0x5dc973, _0x33ab74.viewScale),
        _0x131398 = _0x549b9b
          ? {
              ..._0x549b9b,
              event: _0x34b801,
              stage: _0x441241,
              viewportScrollY: _0x33ab74.syncHostVerticalScroll
                ? _0x33ab74.hostScrollOffset["current"]
                : undefined,
            }
          : undefined;
      if (
        _0x549b9b &&
        Gu(_0x549b9b, _0x5dc973, _0x33ab74.syncHostVerticalScroll)
      ) {
        var _0x573e9d;
        if (
          ((_0x573e9d = _0x33ab74.onHostWheel) == null
            ? undefined
            : _0x573e9d.call(_0x33ab74, _0x5dc973, _0x549b9b)) === true ||
          Hu(_0x33ab74.container, _0x5dc973)
        ) {
          (_0x33ab74.invalidate("host-scroll"), sd(_0x5dc973, true));
          return;
        }
      }
      let _0x205fcc = _0x131398
          ? _0x33ab74.passiveWheelHandlerRegistry["handleWheel"](_0x131398)
          : false,
        _0x300b2e = !_0x205fcc && Ku(_0x33ab74.container, _0x5dc973),
        _0xd8524b = false,
        _0x4b16f1 = false;
      if (!_0x205fcc && _0x300b2e) {
        var _0x65d703;
        let _0x2d9483 = qu(_0x5dc973);
        Yu(
          _0x2d9483,
          _0x382b74 == null ||
            (_0x65d703 = _0x382b74.getHorizontalScroll) == null
            ? undefined
            : _0x65d703.call(_0x382b74, _0x131398),
        )
          ? (zu(_0x5dc973, _0x33ab74.liveRoot), (_0xd8524b = true))
          : Ju(
              _0x2d9483,
              () => {
                var _0x429a94;
                return (_0x4b16f1 =
                  ((_0x429a94 = _0x33ab74.resizeDocsSheetLikeRendererByWheel) ==
                  null
                    ? undefined
                    : _0x429a94.call(_0x33ab74, _0x5dc973)) === true);
              },
              () =>
                (_0xd8524b =
                  (_0x382b74 == null
                    ? undefined
                    : _0x382b74.handleWheel(_0x131398)) === true),
            );
      } else
        _0x205fcc ||
          (_0xd8524b =
            (_0x382b74 == null
              ? undefined
              : _0x382b74.handleWheel(_0x131398)) === true);
      let _0x28e188 =
        _0x441241 === "inactive" &&
        !_0x205fcc &&
        !_0xd8524b &&
        !_0x4b16f1 &&
        !_0x300b2e &&
        !!_0x382b74 &&
        !!_0x549b9b &&
        Xu(_0x5dc973);
      if (_0x28e188 && Nu(_0x5dc973, _0x24a8fb)) return;
      if (
        _0x28e188 &&
        _0x549b9b &&
        ((_0x388e87 = _0x33ab74.onHostWheel) == null
          ? undefined
          : _0x388e87.call(_0x33ab74, _0x5dc973, _0x549b9b)) === true
      ) {
        (_0x33ab74.invalidate("host-scroll"), sd(_0x5dc973, true));
        return;
      }
      let _0x428c75 =
          _0xd8524b || _0x4b16f1 ? false : zu(_0x5dc973, _0x33ab74.liveRoot),
        _0x1edd1c =
          _0xd8524b ||
          _0x4b16f1 ||
          (_0x300b2e || _0x428c75 ? false : Bu(_0x5dc973, _0x33ab74.liveRoot));
      if (_0x205fcc || _0xd8524b || _0x4b16f1 || _0x428c75 || _0x1edd1c) {
        (_0x441241 === "inactive" && Mu(_0x24a8fb), sd(_0x5dc973, false));
        return;
      }
      _0x441241 === "stage1" &&
        _0x549b9b &&
        Xu(_0x5dc973) &&
        sd(_0x5dc973, true);
    },
    _0x5afb0e = (_0x4795a3) => {
      var _0x26e885;
      if (
        _0x33ab74.getStage() !== "stage2" ||
        _0x4795a3.ctrlKey ||
        _0x4795a3.metaKey
      )
        return;
      let _0x52abce = _0x33ab74.getChildContext();
      if (_0x52abce) {
        if (Ku(_0x33ab74.container, _0x4795a3)) {
          var _0x849b5b;
          let _0x38d6a3 = _0x33ab74.passiveViewportRegistry["get"](
              _0x52abce.childType,
              _0x52abce.layout,
            ),
            _0x5cb62e = Pu(_0x4795a3, _0x33ab74.viewScale),
            _0x3be841 = {
              ..._0x52abce,
              event: _0x5cb62e,
              stage: "stage2",
              viewportScrollY: _0x33ab74.syncHostVerticalScroll
                ? _0x33ab74.hostScrollOffset["current"]
                : undefined,
            },
            _0x55fb03 = qu(_0x4795a3),
            _0x438138;
          (Yu(
            _0x55fb03,
            _0x38d6a3 == null ||
              (_0x849b5b = _0x38d6a3.getHorizontalScroll) == null
              ? undefined
              : _0x849b5b.call(_0x38d6a3, _0x3be841),
          )
            ? (zu(_0x4795a3, _0x33ab74.liveRoot), (_0x438138 = true))
            : (_0x438138 = Ju(
                _0x55fb03,
                () => {
                  var _0x405d7c;
                  return (
                    ((_0x405d7c =
                      _0x33ab74.resizeDocsSheetLikeRendererByWheel) == null
                      ? undefined
                      : _0x405d7c.call(_0x33ab74, _0x4795a3)) === true
                  );
                },
                () =>
                  _0x33ab74.passiveWheelHandlerRegistry["handleWheel"](
                    _0x3be841,
                  ) ||
                  (_0x38d6a3 == null
                    ? undefined
                    : _0x38d6a3.handleWheel(_0x3be841)) === true,
              )),
            (_0x438138 || Xu(_0x4795a3)) && sd(_0x4795a3, true));
          return;
        }
        Gu(_0x52abce, _0x4795a3, _0x33ab74.syncHostVerticalScroll) &&
          (Ru(_0x4795a3) ||
            (Lu(_0x4795a3),
            (((_0x26e885 = _0x33ab74.onHostWheel) == null
              ? undefined
              : _0x26e885.call(_0x33ab74, _0x4795a3, _0x52abce)) === true ||
              Hu(_0x33ab74.container, _0x4795a3)) &&
              (_0x33ab74.invalidate("host-scroll"), sd(_0x4795a3, true))));
      }
    },
    _0x5c0519 = (_0x3a5c70) => {
      _0x33ab74.getStage() !== "stage2" ||
        _0x3a5c70.ctrlKey ||
        _0x3a5c70.metaKey ||
        _0x3a5c70.defaultPrevented ||
        id(_0x33ab74.liveRoot, _0x3a5c70) ||
        !_0x33ab74.getChildContext() ||
        !Xu(_0x3a5c70) ||
        sd(_0x3a5c70, true);
    },
    _0x396959 = () => _0x33ab74.invalidate("child-scroll");
  return (
    _0x33ab74.gate["addEventListener"]("wheel", _0x32622a, { passive: false }),
    _0x33ab74.liveRoot["addEventListener"]("wheel", _0x32622a, {
      capture: true,
      passive: false,
    }),
    _0x33ab74.container["addEventListener"]("wheel", _0x5afb0e, {
      capture: true,
      passive: false,
    }),
    _0x33ab74.liveRoot["addEventListener"]("wheel", _0x5afb0e, {
      capture: true,
      passive: false,
    }),
    _0x33ab74.container["addEventListener"]("wheel", _0x5c0519, {
      passive: false,
    }),
    _0x33ab74.liveRoot["addEventListener"]("scroll", _0x396959, true),
    _0x11d17f(() => {
      (_0x33ab74.gate["removeEventListener"]("wheel", _0x32622a),
        _0x33ab74.liveRoot["removeEventListener"]("wheel", _0x32622a, {
          capture: true,
        }),
        _0x33ab74.container["removeEventListener"]("wheel", _0x5afb0e, {
          capture: true,
        }),
        _0x33ab74.liveRoot["removeEventListener"]("wheel", _0x5afb0e, {
          capture: true,
        }),
        _0x33ab74.container["removeEventListener"]("wheel", _0x5c0519),
        _0x33ab74.liveRoot["removeEventListener"]("scroll", _0x396959, true));
    })
  );
}
function Mu(_0x34e26d) {
  _0x34e26d.activeUntil = Date.now() + 180;
}
function Nu(_0x222181, _0x13f38f) {
  return Date.now() >= _0x13f38f.activeUntil
    ? false
    : (Mu(_0x13f38f), sd(_0x222181, true), true);
}
function Pu(_0x163dfe, _0x4a42a6) {
  return typeof _0x4a42a6 != "number" ||
    !Number.isFinite(_0x4a42a6) ||
    _0x4a42a6 <= 0 ||
    _0x4a42a6 === 1
    ? _0x163dfe
    : new WheelEvent(_0x163dfe.type, {
        altKey: _0x163dfe.altKey,
        bubbles: _0x163dfe.bubbles,
        cancelable: _0x163dfe.cancelable,
        clientX: _0x163dfe.clientX,
        clientY: _0x163dfe.clientY,
        ctrlKey: _0x163dfe.ctrlKey,
        deltaMode: _0x163dfe.deltaMode,
        deltaX: _0x163dfe.deltaX / _0x4a42a6,
        deltaY: _0x163dfe.deltaY / _0x4a42a6,
        deltaZ: _0x163dfe.deltaZ / _0x4a42a6,
        metaKey: _0x163dfe.metaKey,
        shiftKey: _0x163dfe.shiftKey,
      });
}
function Fu(_0x242f65, _0x77a024) {
  let _0x5d4d67 = new WheelEvent("wheel", {
    clientX: _0x242f65.clientX,
    clientY: _0x242f65.clientY,
    ctrlKey: _0x242f65.ctrlKey,
    deltaMode: _0x242f65.deltaMode,
    deltaX: _0x242f65.deltaX,
    deltaY: _0x242f65.deltaY,
    deltaZ: _0x242f65.deltaZ,
    metaKey: _0x242f65.metaKey,
    shiftKey: _0x242f65.shiftKey,
    ..._0x77a024,
  });
  return (
    Object.defineProperty(_0x5d4d67, Ou, {
      configurable: true,
      value: _0x242f65,
    }),
    _0x5d4d67
  );
}
function Iu(_0x418867) {
  return !!_0x418867 && _0x418867[Ou] instanceof WheelEvent;
}
function Lu(_0x72a75) {
  Object.defineProperty(_0x72a75, ku, { configurable: true, value: true });
}
function Ru(_0x1523f1) {
  return !!_0x1523f1[ku];
}
function zu(_0x831173, _0x4a65e1) {
  let _0x1b9244 =
      nd(_0x4a65e1, _0x831173.clientX, _0x831173.clientY) ?? _0x4a65e1,
    _0x2e286b = Fu(_0x831173, { bubbles: true, cancelable: true });
  return (_0x1b9244.dispatchEvent(_0x2e286b), _0x2e286b.defaultPrevented);
}
function Bu(_0x38b9c6, _0x4abace) {
  let _0x2e2dc7 = rd(
    nd(_0x4abace, _0x38b9c6.clientX, _0x38b9c6.clientY) ?? _0x4abace,
    _0x4abace,
    _0x38b9c6,
  );
  return _0x2e2dc7 ? Vu(_0x38b9c6, _0x2e2dc7) : false;
}
function Vu(_0x46821f, _0x4e36d1) {
  let _0x5d5f3c = qu(_0x46821f),
    _0x5372ec = _0x46821f.shiftKey ? 0 : _0x46821f.deltaY,
    _0x3af87 = _0x4e36d1.scrollLeft,
    _0x97e9fa = _0x4e36d1.scrollTop;
  return (
    _0x5d5f3c && (_0x4e36d1.scrollLeft += _0x5d5f3c),
    _0x5372ec && (_0x4e36d1.scrollTop += _0x5372ec),
    _0x4e36d1.scrollLeft !== _0x3af87 || _0x4e36d1.scrollTop !== _0x97e9fa
  );
}
function Hu(_0x3a975d, _0x4f8b85) {
  let _0x3c6f76 = Uu(_0x3a975d);
  if (!_0x3c6f76)
    return $u(_0x3a975d.ownerDocument["body"], _0x3a975d, _0x4f8b85);
  if (!td(_0x3c6f76)) return $u(_0x3c6f76, _0x3a975d, _0x4f8b85);
  let _0x455c56 = _0x3c6f76.scrollTop;
  return (
    (_0x3c6f76.scrollTop += _0x4f8b85.deltaY),
    _0x3c6f76.scrollTop !== _0x455c56
  );
}
function Uu(_0x2e4942) {
  let _0x24a8d2 = _0x2e4942.parentElement;
  for (
    ;
    _0x24a8d2 &&
    _0x24a8d2 !== document.body &&
    _0x24a8d2 !== document.documentElement;
  ) {
    if (_0x24a8d2.scrollHeight > _0x24a8d2.clientHeight && Wu(_0x24a8d2))
      return _0x24a8d2;
    _0x24a8d2 = _0x24a8d2.parentElement;
  }
  return null;
}
function Wu(_0xea685d) {
  let _0x2cb4b5 = window.getComputedStyle(_0xea685d);
  return (
    _0x2cb4b5.overflow === "auto" ||
    _0x2cb4b5.overflow === "scroll" ||
    _0x2cb4b5.overflow === "hidden" ||
    _0x2cb4b5.overflowY === "auto" ||
    _0x2cb4b5.overflowY === "scroll" ||
    _0x2cb4b5.overflowY === "hidden"
  );
}
function Gu(_0x2e8237, _0x434d24, _0x399f22) {
  var _0x18f31a;
  return _0x399f22 ||
    ((_0x18f31a = _0x2e8237.descriptor["sourceMeta"]) == null
      ? undefined
      : _0x18f31a.verticalWheelMode) === "host"
    ? Qu(_0x434d24)
    : Du(_0x2e8237.layout, _0x434d24);
}
function Ku(_0x1bd7ff, _0x5d9d48) {
  return (
    !!_0x1bd7ff.closest('[data-embed-docs-custom-block-sheet-like="true"]') &&
    Zu(_0x5d9d48)
  );
}
function qu(_0x5ce193) {
  return _0x5ce193.deltaX || (_0x5ce193.shiftKey ? _0x5ce193.deltaY : 0);
}
function Ju(_0x54a199, _0x3f981f, _0x46228f) {
  return _0x54a199 > 0
    ? _0x3f981f() || _0x46228f()
    : _0x46228f() || _0x3f981f();
}
function Yu(_0x3e3e77, _0xebc27) {
  return _0x3e3e77 < 0 && (_0xebc27 ?? 0) > 0;
}
function Xu(_0x44354c) {
  return Zu(_0x44354c) || Qu(_0x44354c);
}
function Zu(_0x3d2ca9) {
  if (_0x3d2ca9.ctrlKey || _0x3d2ca9.metaKey) return false;
  let _0x53c4ad = qu(_0x3d2ca9),
    _0x573671 = _0x3d2ca9.shiftKey ? 0 : _0x3d2ca9.deltaY;
  return Math.abs(_0x53c4ad) > Math.abs(_0x573671);
}
function Qu(_0x541f80) {
  return _0x541f80.shiftKey || _0x541f80.ctrlKey || _0x541f80.metaKey
    ? false
    : Math.abs(_0x541f80.deltaY) > Math.abs(_0x541f80.deltaX);
}
function $u(_0x4c20b2, _0x1f190c, _0x224882) {
  let _0x3bc08a = Array.from(_0x4c20b2.querySelectorAll("canvas")).find(
    (_0x4375ed) => !_0x1f190c.contains(_0x4375ed),
  );
  return _0x3bc08a
    ? (_0x3bc08a.dispatchEvent(
        Fu(_0x224882, {
          bubbles: true,
          cancelable: true,
          ...ed(_0x3bc08a, _0x1f190c, _0x224882),
        }),
      ),
      true)
    : false;
}
function ed(_0x5f410a, _0x1761bb, _0x305126) {
  if (!ad(_0x1761bb, _0x305126.clientX, _0x305126.clientY))
    return { clientX: _0x305126.clientX, clientY: _0x305126.clientY };
  let _0x4de2c0 = _0x5f410a.getBoundingClientRect(),
    _0x493c24 = Math.min(
      24,
      Math.max(4, Math.min(_0x4de2c0.width, _0x4de2c0.height) / 8),
    ),
    _0x580d2d = [
      {
        clientX: _0x4de2c0.left + _0x493c24,
        clientY: _0x4de2c0.top + _0x493c24,
      },
      {
        clientX: _0x4de2c0.right - _0x493c24,
        clientY: _0x4de2c0.top + _0x493c24,
      },
      {
        clientX: _0x4de2c0.left + _0x493c24,
        clientY: _0x4de2c0.bottom - _0x493c24,
      },
      {
        clientX: _0x4de2c0.right - _0x493c24,
        clientY: _0x4de2c0.bottom - _0x493c24,
      },
      {
        clientX: _0x4de2c0.left + _0x4de2c0.width / 2,
        clientY: _0x4de2c0.top + _0x4de2c0.height / 2,
      },
    ];
  return (
    _0x580d2d.find(
      (_0x4efef5) => !ad(_0x1761bb, _0x4efef5.clientX, _0x4efef5.clientY),
    ) ?? _0x580d2d[0]
  );
}
function td(_0x14b80f) {
  let _0x28a96b = window.getComputedStyle(_0x14b80f);
  return (
    _0x28a96b.overflow === "auto" ||
    _0x28a96b.overflow === "scroll" ||
    _0x28a96b.overflowY === "auto" ||
    _0x28a96b.overflowY === "scroll"
  );
}
function nd(_0x2df7b6, _0x540181, _0x2b94cd) {
  if (!ad(_0x2df7b6, _0x540181, _0x2b94cd)) return null;
  let _0x4959ef = _0x2df7b6.ownerDocument["elementsFromPoint"];
  if (typeof _0x4959ef == "function") {
    let _0x4850ac = _0x4959ef
      .call(_0x2df7b6.ownerDocument, _0x540181, _0x2b94cd)
      .find(
        (_0x205ffc) =>
          _0x205ffc instanceof HTMLElement && _0x2df7b6.contains(_0x205ffc),
      );
    if (_0x4850ac) return _0x4850ac;
  }
  let _0x4721ee = _0x2df7b6,
    _0x2330a9 = (_0x5f229c) => {
      let _0x5e7a62 = Array.from(_0x5f229c.children);
      for (let _0x52e610 = _0x5e7a62.length - 1; _0x52e610 >= 0; _0x52e610--) {
        let _0x41de2a = _0x5e7a62[_0x52e610];
        if (!(
          !(_0x41de2a instanceof HTMLElement) ||
          !ad(_0x41de2a, _0x540181, _0x2b94cd)
        )) {
          ((_0x4721ee = _0x41de2a), _0x2330a9(_0x41de2a));
          return;
        }
      }
    };
  return (_0x2330a9(_0x2df7b6), _0x4721ee);
}
function rd(_0x4acb9b, _0x5b7df1, _0xd6b72a) {
  let _0x2128f2 = qu(_0xd6b72a),
    _0xf41d0f = _0xd6b72a.shiftKey ? 0 : _0xd6b72a.deltaY,
    _0x1f6109 = _0x4acb9b;
  for (; _0x1f6109 && _0x5b7df1.contains(_0x1f6109);) {
    if (od(_0x1f6109, _0x2128f2, _0xf41d0f)) return _0x1f6109;
    _0x1f6109 = _0x1f6109.parentElement;
  }
  return od(_0x5b7df1, _0x2128f2, _0xf41d0f) ? _0x5b7df1 : null;
}
function id(_0x16f62b, _0xf474fd) {
  return rd(
    nd(_0x16f62b, _0xf474fd.clientX, _0xf474fd.clientY) ?? _0x16f62b,
    _0x16f62b,
    _0xf474fd,
  );
}
function ad(_0x4d4095, _0x185baf, _0x16469f) {
  let _0x2b89ad = _0x4d4095.getBoundingClientRect();
  return (
    _0x185baf >= _0x2b89ad.left &&
    _0x185baf <= _0x2b89ad.right &&
    _0x16469f >= _0x2b89ad.top &&
    _0x16469f <= _0x2b89ad.bottom
  );
}
function od(_0x174f40, _0x395868, _0x38d15c) {
  let _0x184442 =
      _0x395868 !== 0 &&
      _0x174f40.scrollWidth > _0x174f40.clientWidth &&
      (_0x395868 < 0
        ? _0x174f40.scrollLeft > 0
        : _0x174f40.scrollLeft + _0x174f40.clientWidth < _0x174f40.scrollWidth),
    _0x3c69e9 =
      _0x38d15c !== 0 &&
      _0x174f40.scrollHeight > _0x174f40.clientHeight &&
      (_0x38d15c < 0
        ? _0x174f40.scrollTop > 0
        : _0x174f40.scrollTop + _0x174f40.clientHeight <
          _0x174f40.scrollHeight);
  return _0x184442 || _0x3c69e9;
}
function sd(_0x1f63ff, _0x5e5f12) {
  (_0x1f63ff.preventDefault(),
    _0x1f63ff.stopPropagation(),
    _0x5e5f12 && _0x1f63ff.stopImmediatePropagation());
}
var cd = class {
    constructor() {
      (Y(this, "previewUpdated$", new _0x442c37()),
        Y(this, "_providers", new Map()),
        Y(this, "_entriesByEmbedId", new Map()),
        Y(this, "_entriesByKey", new Map()),
        Y(this, "_queue", []),
        Y(this, "_rendering", false),
        Y(this, "_activeDrain", null));
    }
    registerProvider(_0x2a666e) {
      return (
        this._providers["set"](_0x2a666e.childType, _0x2a666e),
        _0x11d17f(() => {
          this._providers["get"](_0x2a666e.childType) === _0x2a666e &&
            this._providers["delete"](_0x2a666e.childType);
        })
      );
    }
    getProvider(_0x3166b6) {
      return this._providers["get"](_0x3166b6);
    }
    getPreview(_0x11d47a) {
      return this._entriesByEmbedId["get"](_0x11d47a);
    }
    requestPreview(_0x29de22) {
      let _0x101f9b = this.getCacheKey(_0x29de22),
        _0x4f2cec = this._entriesByKey["get"](_0x101f9b);
      if (
        _0x4f2cec &&
        (_0x4f2cec.status === "pending" || _0x4f2cec.status === "ready")
      )
        return _0x4f2cec;
      let _0x151a1e = this._entriesByEmbedId["get"](
          _0x29de22.descriptor["embedId"],
        ),
        _0x5a6986 = {
          embedId: _0x29de22.descriptor["embedId"],
          childUnitId: _0x29de22.childUnitId,
          childType: _0x29de22.childType,
          status: "pending",
          width: Math.max(1, Math.round(_0x29de22.width)),
          height: Math.max(1, Math.round(_0x29de22.height)),
          dpr: _0x29de22.dpr,
          viewState:
            _0x29de22.viewState ??
            (_0x151a1e == null ? undefined : _0x151a1e.viewState),
          revision:
            ((_0x151a1e == null ? undefined : _0x151a1e.revision) ?? 0) + 1,
          updatedAt: Date.now(),
        };
      return (
        this._entriesByKey["set"](_0x101f9b, _0x5a6986),
        this._entriesByEmbedId["set"](_0x5a6986.embedId, _0x5a6986),
        this._queue["push"](_0x29de22),
        this._drainQueue(),
        this.previewUpdated$["next"](_0x5a6986),
        _0x5a6986
      );
    }
    async collectViewState(_0x385f40) {
      let _0x44cc22 = this._providers["get"](_0x385f40.childType);
      if (!_0x44cc22) return;
      let _0x2210cf = await _0x44cc22.collectViewState(_0x385f40);
      return (this.updateViewState(_0x385f40.embedId, _0x2210cf), _0x2210cf);
    }
    async restoreViewState(_0x3df406, _0xa346eb) {
      if (_0xa346eb == null) return;
      let _0x5bae4c = this._providers["get"](_0x3df406.childType);
      await (_0x5bae4c == null
        ? undefined
        : _0x5bae4c.restoreViewState(_0x3df406, _0xa346eb));
    }
    updateViewState(_0x41b0d4, _0x1ba7d5) {
      let _0x3cd52b = this._entriesByEmbedId["get"](_0x41b0d4);
      if (!_0x3cd52b) {
        let _0x3980ff = {
          embedId: _0x41b0d4,
          childUnitId: "",
          childType: undefined,
          status: "stale",
          width: 0,
          height: 0,
          dpr: 1,
          viewState: _0x1ba7d5,
          revision: 0,
          updatedAt: Date.now(),
        };
        (this._entriesByEmbedId["set"](_0x41b0d4, _0x3980ff),
          this.previewUpdated$["next"](_0x3980ff));
        return;
      }
      ((_0x3cd52b.viewState = _0x1ba7d5),
        (_0x3cd52b.updatedAt = Date.now()),
        this.previewUpdated$["next"](_0x3cd52b));
    }
    markStale(_0x3b05f5, _0x386fc9) {
      let _0x24de36 = this._entriesByEmbedId["get"](_0x3b05f5);
      _0x24de36 &&
        ((_0x24de36.status = "stale"),
        (_0x24de36.error = _0x386fc9),
        (_0x24de36.updatedAt = Date.now()),
        this.previewUpdated$["next"](_0x24de36));
    }
    invalidate(_0x54c1bf) {
      let _0x43b47c = this._entriesByEmbedId["get"](_0x54c1bf);
      (this._entriesByEmbedId["delete"](_0x54c1bf),
        _0x43b47c &&
          Array.from(this._entriesByKey["entries"]()).forEach(
            ([_0x2376af, _0x1c1872]) => {
              _0x1c1872.embedId === _0x54c1bf &&
                this._entriesByKey["delete"](_0x2376af);
            },
          ));
    }
    getCacheKey(_0x567c97) {
      return [
        _0x567c97.descriptor["embedId"],
        _0x567c97.childUnitId,
        _0x567c97.childType,
        Math.max(1, Math.round(_0x567c97.width)),
        Math.max(1, Math.round(_0x567c97.height)),
        _0x567c97.dpr,
      ].join("::");
    }
    async flushForTests() {
      for (; this._queue["length"] > 0 || this._rendering || this._activeDrain;)
        (await (this._activeDrain ?? Promise.resolve()),
          await Promise.resolve());
    }
    dispose() {
      (this._providers["clear"](),
        this._entriesByEmbedId["clear"](),
        this._entriesByKey["clear"](),
        (this._queue["length"] = 0),
        this.previewUpdated$["complete"]());
    }
    _drainQueue() {
      this._rendering ||
        this._activeDrain ||
        (this._activeDrain = this._runQueue().finally(() => {
          this._activeDrain = null;
        }));
    }
    async _runQueue() {
      if (!this._rendering) {
        this._rendering = true;
        try {
          for (; this._queue["length"] > 0;)
            await this._renderOne(this._queue["shift"]());
        } finally {
          this._rendering = false;
        }
      }
    }
    async _renderOne(_0xc118cb) {
      let _0x5f319f = this.getCacheKey(_0xc118cb),
        _0x118719 = this._entriesByKey["get"](_0x5f319f);
      if (!_0x118719 || _0x118719.status !== "pending") return;
      let _0x44b6d2 = this._providers["get"](_0xc118cb.childType),
        _0x2967b2 = this._findPreviousReadyEntry(_0x118719.embedId, _0x118719);
      if (!_0x44b6d2) {
        let _0x289949 = _0xc118cb.context ? Xc(_0xc118cb.context) : undefined;
        if (_0x289949) {
          ((_0x118719.image = _0x289949),
            (_0x118719.status = "ready"),
            (_0x118719.updatedAt = Date.now()),
            this._entriesByEmbedId["set"](_0x118719.embedId, _0x118719),
            this.previewUpdated$["next"](_0x118719));
          return;
        }
        this._setRenderFailure(
          _0x118719,
          _0x2967b2,
          Error("Missing embed float preview provider: " + _0xc118cb.childType),
        );
        return;
      }
      try {
        let _0x57b5f2 = await _0x44b6d2.renderPreview({
          ..._0xc118cb,
          width: _0x118719.width,
          height: _0x118719.height,
          viewState: _0x118719.viewState,
        });
        if (
          this._entriesByKey["get"](_0x5f319f) !== _0x118719 ||
          _0x118719.status !== "pending"
        )
          return;
        if (!_0x57b5f2) {
          this._setRenderFailure(
            _0x118719,
            _0x2967b2,
            Error("Empty embed float preview result."),
          );
          return;
        }
        ((_0x118719.image = _0x57b5f2),
          (_0x118719.status = "ready"),
          (_0x118719.updatedAt = Date.now()),
          this._entriesByEmbedId["set"](_0x118719.embedId, _0x118719),
          this.previewUpdated$["next"](_0x118719));
      } catch (_0x4adf58) {
        this._setRenderFailure(_0x118719, _0x2967b2, _0x4adf58);
      }
    }
    _findPreviousReadyEntry(_0x4ec8b2, _0x55f8c2) {
      let _0x283f6c = this._entriesByEmbedId["get"](_0x4ec8b2);
      return _0x283f6c && _0x283f6c !== _0x55f8c2 && _0x283f6c.image
        ? _0x283f6c
        : Array.from(this._entriesByKey["values"]())
            .reverse()
            .find(
              (_0x31b917) =>
                _0x31b917.embedId === _0x4ec8b2 &&
                _0x31b917 !== _0x55f8c2 &&
                _0x31b917.image,
            );
    }
    _setRenderFailure(_0x221a50, _0xf66736, _0x50529b) {
      ((_0x221a50.status =
        _0xf66736 != null && _0xf66736.image ? "stale" : "error"),
        (_0x221a50.image = _0xf66736 == null ? undefined : _0xf66736.image),
        (_0x221a50.viewState =
          _0x221a50.viewState ??
          (_0xf66736 == null ? undefined : _0xf66736.viewState)),
        (_0x221a50.error = _0x50529b),
        (_0x221a50.updatedAt = Date.now()),
        this._entriesByEmbedId["set"](_0x221a50.embedId, _0x221a50),
        this.previewUpdated$["next"](_0x221a50));
    }
  },
  ld = class {
    constructor() {
      (Y(this, "_registrations", new Map()),
        Y(this, "_geometryInvalidated$", new _0x442c37()),
        Y(
          this,
          "geometryInvalidated$",
          this._geometryInvalidated$["asObservable"](),
        ));
    }
    register(_0x64e818) {
      return (
        this._registrations["set"](_0x64e818.embedId, _0x64e818),
        this.invalidate({ embedId: _0x64e818.embedId, reason: "manual" }),
        _0x11d17f(() => {
          this._registrations["get"](_0x64e818.embedId) === _0x64e818 &&
            (this._registrations["delete"](_0x64e818.embedId),
            this.invalidate({ embedId: _0x64e818.embedId, reason: "manual" }));
        })
      );
    }
    getRegistration(_0x2df703) {
      return this._registrations["get"](_0x2df703);
    }
    getRegistrationByChildUnitId(_0x379233) {
      return Array.from(this._registrations["values"]()).find(
        (_0x5ef648) => _0x5ef648.childUnitId === _0x379233,
      );
    }
    invalidate(_0xd0a5d5) {
      this._geometryInvalidated$["next"](_0xd0a5d5);
    }
  };
let ud = class {
  constructor(_0x146038, _0x3ffa5e, _0x33ad86, _0x22d9dd) {
    ((this._modelService = _0x146038),
      (this._materializeService = _0x3ffa5e),
      (this._hostAdapterRegistry = _0x33ad86),
      (this._anchorModelService = _0x22d9dd));
  }
  async materializeDescriptor(_0x46ab3d) {
    return this._materializeService["materializeDescriptor"](_0x46ab3d);
  }
  async restoreEmbed(_0x148b25) {
    let _0x58a26c = _0x148b25.descriptor,
      _0x1f95c3 =
        _0x148b25.hostAnchorRecord ??
        this._hostAdapterRegistry["restoreAnchor"]({
          embedId: _0x58a26c.embedId,
          hostUnitId: _0x58a26c.hostUnitId,
          hostType: _0x58a26c.hostType,
          entry: _0x58a26c.entry,
          hostAnchorId: _0x58a26c.hostAnchorId,
          hostContext: _0x148b25.hostContext,
          descriptor: _0x58a26c,
        });
    return (
      this._modelService["addDescriptor"](_0x58a26c.hostUnitId, _0x58a26c),
      this._anchorModelService["setAnchor"](_0x1f95c3),
      this._modelService["getDescriptor"](
        _0x58a26c.hostUnitId,
        _0x58a26c.embedId,
      )
    );
  }
};
ud = $(
  [
    Q(0, _0x1a6fa3(_0x588de6)),
    Q(1, _0x1a6fa3(_0x26692a)),
    Q(2, _0x1a6fa3(_0x4294fc)),
    Q(3, _0x1a6fa3(_0x4466c1)),
  ],
  ud,
);
function dd(_0x2516e8) {
  var _0x129967;
  if (!_0x2516e8) return;
  let _0x45cde3 =
      ((_0x129967 = _0x2516e8.closest(
        "[data-embed-interaction-boundary-owner]",
      )) == null
        ? undefined
        : _0x129967.getAttribute("data-embed-interaction-boundary-owner")) ??
      undefined,
    _0x14b73f = fd(_0x2516e8, _0x45cde3),
    _0x16e181 =
      (_0x14b73f == null
        ? undefined
        : _0x14b73f.getAttribute("data-embed-id")) ?? _0x45cde3;
  if (_0x16e181)
    return {
      embedId: _0x16e181,
      hostUnitId:
        (_0x14b73f == null
          ? undefined
          : _0x14b73f.getAttribute("data-embed-host-unit-id")) ?? undefined,
      childUnitId:
        (_0x14b73f == null ? undefined : _0x14b73f.getAttribute(_0x4af81c)) ??
        undefined,
      childType: md(_0x14b73f),
    };
}
function fd(_0x5dbf09, _0x37de6c) {
  let _0x479842 =
    _0x5dbf09 == null
      ? undefined
      : _0x5dbf09.closest('[data-embed-float-dom="true"]');
  if (
    _0x479842 &&
    (!_0x37de6c || _0x479842.getAttribute("data-embed-id") === _0x37de6c)
  )
    return _0x479842;
  let _0x17c8fb =
    (_0x5dbf09 == null ? undefined : _0x5dbf09.ownerDocument) ??
    (typeof document > "u" ? undefined : document);
  return !_0x17c8fb || !_0x37de6c
    ? (_0x479842 ?? undefined)
    : (_0x17c8fb.querySelector(
        '[data-embed-float-dom="true"][data-embed-id="' +
          pd(_0x37de6c) +
          "\x22]",
      ) ?? undefined);
}
function pd(_0x419118) {
  return _0x419118.replace(/\\/g, "\x5c\x5c").replace(/"/g, "\x5c\x22");
}
function md(_0x462b30) {
  let _0x422630 =
    _0x462b30 == null
      ? undefined
      : _0x462b30.getAttribute("data-embed-child-type");
  if (_0x422630 != null && _0x422630 !== "") return Number(_0x422630);
}
var hd = class {
  constructor() {
    (Y(this, "_sessions", new WeakMap()),
      Y(this, "_hostGestureEvents", new WeakSet()));
  }
  register(_0x17f860, _0x11ab30) {
    let _0x371d80 = this._sessions["get"](_0x17f860);
    if (!_0x371d80) {
      let _0x255e4d = _0x17f860.ownerDocument["defaultView"];
      if (!_0x255e4d) return _0x11d17f(() => {});
      let _0x4c07cb = (_0x55cab0) => this._observeWheel(_0x17f860, _0x55cab0);
      (_0x255e4d.addEventListener("wheel", _0x4c07cb, {
        capture: true,
        passive: false,
      }),
        (_0x371d80 = {
          activeUntil: 0,
          containers: new Map(),
          dispose: () =>
            _0x255e4d.removeEventListener("wheel", _0x4c07cb, {
              capture: true,
            }),
          refCount: 0,
        }),
        this._sessions["set"](_0x17f860, _0x371d80));
    }
    let _0x550d0b = _0x371d80;
    return (
      (_0x550d0b.refCount += 1),
      _0x550d0b.containers["set"](
        _0x11ab30,
        (_0x550d0b.containers["get"](_0x11ab30) ?? 0) + 1,
      ),
      _0x11d17f(() => {
        let _0x5e18c9 = _0x550d0b.containers["get"](_0x11ab30) ?? 0;
        (_0x5e18c9 <= 1
          ? _0x550d0b.containers["delete"](_0x11ab30)
          : _0x550d0b.containers["set"](_0x11ab30, _0x5e18c9 - 1),
          --_0x550d0b.refCount,
          !(
            _0x550d0b.refCount > 0 ||
            this._sessions["get"](_0x17f860) !== _0x550d0b
          ) && (_0x550d0b.dispose(), this._sessions["delete"](_0x17f860)));
      })
    );
  }
  isHostGesture(_0x3e4eb5) {
    return this._hostGestureEvents["has"](_0x3e4eb5);
  }
  _observeWheel(_0xd0fa7a, _0xc63c94) {
    var _0x4cc703;
    let _0x2dcf78 = _0xd0fa7a.ownerDocument["defaultView"];
    if (!_0x2dcf78) return;
    let _0x2885d5 = _d(_0xc63c94, _0x2dcf78);
    if (!_0x2885d5 || !_0xd0fa7a.contains(_0x2885d5)) return;
    let _0x24b20a = this._sessions["get"](_0xd0fa7a);
    if (!_0x24b20a) return;
    let _0x329c8f = Date.now(),
      _0x5910af = fd(_0x2885d5),
      _0x3cbb3c =
        _0x5910af ??
        gd(
          _0x24b20a.containers["keys"](),
          _0xc63c94.clientX,
          _0xc63c94.clientY,
        );
    if (!_0x3cbb3c || !_0xd0fa7a.contains(_0x3cbb3c)) {
      _0x24b20a.activeUntil = _0x329c8f + 500;
      return;
    }
    let _0x484106 = _0x3cbb3c.getAttribute("data-embed-float-stage");
    if (_0x484106 === "inactive" && !_0x5910af) {
      _0x24b20a.activeUntil = _0x329c8f + 500;
      return;
    }
    if (
      _0x484106 === "inactive" &&
      ((_0x4cc703 = dd(_0x3cbb3c)) == null
        ? undefined
        : _0x4cc703.childType) === _0x513c12.UNIVER_SLIDE
    ) {
      ((_0x24b20a.activeUntil = _0x329c8f + 500),
        this._hostGestureEvents["add"](_0xc63c94));
      return;
    }
    if (_0x329c8f >= _0x24b20a.activeUntil) {
      _0x5910af ||
        (_0xc63c94.preventDefault(), _0xc63c94.stopImmediatePropagation());
      return;
    }
    ((_0x24b20a.activeUntil = _0x329c8f + 500),
      this._hostGestureEvents["add"](_0xc63c94));
  }
};
function gd(_0x50a026, _0x220237, _0x4b93f1) {
  for (let _0x3e0c66 of _0x50a026) {
    let _0x5e5a3c = _0x3e0c66.getBoundingClientRect();
    if (
      _0x5e5a3c.width > 0 &&
      _0x5e5a3c.height > 0 &&
      _0x220237 >= _0x5e5a3c.left &&
      _0x220237 <= _0x5e5a3c.right &&
      _0x4b93f1 >= _0x5e5a3c.top &&
      _0x4b93f1 <= _0x5e5a3c.bottom
    )
      return _0x3e0c66;
  }
}
function _d(_0xebcc13, _0x515bb8) {
  let _0x9c8fa = _0xebcc13.target;
  return _0x9c8fa instanceof _0x515bb8.HTMLElement
    ? _0x9c8fa
    : _0x9c8fa instanceof _0x515bb8.Element ||
        _0x9c8fa instanceof _0x515bb8.Node
      ? _0x9c8fa.parentElement
      : null;
}
function vd(_0x5c6166, _0x547d9c, _0x117960) {
  if (!_0x5c6166.ctrlKey && !_0x5c6166.metaKey) return false;
  switch (_0x547d9c.descriptor["hostType"]) {
    case _0x513c12.UNIVER_SHEET:
      return yd(_0x5c6166, _0x547d9c, _0x117960);
    case _0x513c12.UNIVER_DOC:
      return bd(_0x5c6166, _0x547d9c, _0x117960);
    case _0x513c12.UNIVER_SLIDE:
      return xd(_0x5c6166, _0x547d9c, _0x117960);
    default:
      return false;
  }
}
function yd(_0x5c4242, _0x434968, _0x2286ed) {
  let _0x441d0d = _0x2286ed.univerInstanceService["getUnit"](
      _0x434968.hostUnitId,
      _0x513c12.UNIVER_SHEET,
    ),
    _0x434ada = _0x441d0d == null ? undefined : _0x441d0d.getActiveSheet();
  return !_0x441d0d || !_0x434ada
    ? false
    : (_0x2286ed.commandService["executeCommand"](_0x74f1d0.id, {
        unitId: _0x434968.hostUnitId,
        subUnitId: _0x434ada.getSheetId(),
        zoomRatio: Sd(_0x434ada.getZoomRatio(), _0x5c4242),
      }),
      true);
}
function bd(_0x3e7dc3, _0x5aabd2, _0x32d7ce) {
  var _0xe7fdde;
  let _0x325222 = _0x32d7ce.univerInstanceService["getUnit"](
    _0x5aabd2.hostUnitId,
    _0x513c12.UNIVER_DOC,
  );
  return _0x325222
    ? (_0x32d7ce.commandService["executeCommand"](_0x1ce0ba.id, {
        documentId: _0x5aabd2.hostUnitId,
        zoomRatio: Sd(
          ((_0xe7fdde = _0x325222.getSettings()) == null
            ? undefined
            : _0xe7fdde.zoomRatio) ?? 1,
          _0x3e7dc3,
        ),
      }),
      true)
    : false;
}
function xd(_0x312014, _0xc0b501, _0x2e88c2) {
  let _0x33ed86 = _0x2e88c2.univerInstanceService["getUnit"](
    _0xc0b501.hostUnitId,
    _0x513c12.UNIVER_SLIDE,
  );
  return _0x33ed86
    ? (_0x2e88c2.commandService["executeCommand"](_0x386e13.id, {
        unitId: _0xc0b501.hostUnitId,
        zoomRatio: Sd(_0x33ed86.getZoomRatio(), _0x312014),
      }),
      true)
    : false;
}
function Sd(_0x90624f, _0x4dbb7d) {
  return _0x42ea47(_0x90624f, {
    deltaMode: _0x4dbb7d.deltaMode,
    deltaX: _0x4dbb7d.deltaX,
    deltaY: _0x4dbb7d.deltaY,
    wheelDelta: _0x4dbb7d.wheelDelta,
  });
}
var Cd = class {
    constructor() {
      Y(this, "_providers", new Map());
    }
    register(_0xde41fe) {
      return (
        this._providers["set"](_0xde41fe.childType, _0xde41fe),
        _0x11d17f(() => {
          this._providers["get"](_0xde41fe.childType) === _0xde41fe &&
            this._providers["delete"](_0xde41fe.childType);
        })
      );
    }
    get(_0x3bb400, _0x34a143) {
      var _0x3d5bfc;
      let _0x2d0daf = this._providers["get"](_0x3bb400);
      if (
        _0x2d0daf &&
        !(
          _0x34a143 &&
          (_0x3d5bfc = _0x2d0daf.supportedLayouts) != null &&
          _0x3d5bfc.length &&
          !_0x2d0daf.supportedLayouts["includes"](_0x34a143)
        )
      )
        return _0x2d0daf;
    }
    list() {
      return [...this._providers["values"]()];
    }
  },
  wd = class {
    constructor() {
      Y(this, "_handlers", []);
    }
    register(_0x9b912) {
      return (
        this._handlers["push"](_0x9b912),
        this._sortHandlers(),
        _0x11d17f(() => {
          let _0x15a7b5 = this._handlers["indexOf"](_0x9b912);
          _0x15a7b5 >= 0 && this._handlers["splice"](_0x15a7b5, 1);
        })
      );
    }
    handleWheel(_0x72235c) {
      for (let _0x428dcc of this._handlers) {
        var _0x29469d;
        if (
          _0x428dcc.childType === _0x72235c.childType &&
          !(
            _0x72235c.layout &&
            (_0x29469d = _0x428dcc.supportedLayouts) != null &&
            _0x29469d.length &&
            !_0x428dcc.supportedLayouts["includes"](_0x72235c.layout)
          ) &&
          _0x428dcc.handleWheel(_0x72235c) === true
        )
          return true;
      }
      return false;
    }
    list() {
      return [...this._handlers];
    }
    _sortHandlers() {
      this._handlers["sort"](
        (_0x3efcb9, _0x2523b2) =>
          (_0x2523b2.order ?? 0) - (_0x3efcb9.order ?? 0),
      );
    }
  };
function Td(_0xc587ad) {
  if (!_0xc587ad || typeof _0xc587ad != "object") return;
  let _0x1b8f02 = _0xc587ad;
  return _0x1b8f02.version === 1 && _0x1b8f02.embedId && _0x1b8f02.hostAnchorId
    ? _0x1b8f02
    : undefined;
}
const Ed = new Map();
function Dd(_0x39f0ff) {
  var _0x4a6544, _0x5e1361;
  let {
    container: _0x48d1ca,
    content: _0x190c8e,
    offset: _0xad808,
  } = _0x39f0ff;
  if (!_0x39f0ff.enabled)
    return (
      (_0xad808.current = 0),
      _0x190c8e.style["removeProperty"]("transform"),
      _0x190c8e.style["removeProperty"]("clip-path"),
      _0x11d17f(() => {})
    );
  let _0xd0711d = _0x48d1ca.ownerDocument["defaultView"] ?? window,
    _0x3d4303 = rf(_0x39f0ff.viewScale),
    _0x380f25 = false,
    _0x51e6c2,
    _0x4d85cd = () => {
      var _0x1f9d62, _0x13723c;
      if (_0x380f25) return;
      let _0x16a249 = _0x39f0ff.getChildContext();
      if (!_0x16a249) {
        ((_0xad808.current = 0),
          _0x190c8e.style["removeProperty"]("transform"),
          _0x190c8e.style["removeProperty"]("clip-path"));
        return;
      }
      let _0xc5daa3 = _0x39f0ff.getProvider(_0x16a249);
      if (!_0xc5daa3) return;
      let _0x448c16 = Uu(_0x48d1ca),
        _0x547ab8 = (_0x448c16 == null
          ? undefined
          : _0x448c16.getBoundingClientRect()) ?? {
          height: _0xd0711d.innerHeight,
          top: 0,
          width: _0xd0711d.innerWidth,
        },
        _0x5a5652 = _0x48d1ca.getBoundingClientRect(),
        _0x10217a =
          (_0x1f9d62 = Od(_0x48d1ca)) == null
            ? undefined
            : _0x1f9d62.getBoundingClientRect().height,
        _0x539bbe = nf(
          _0x39f0ff.collapseViewportHeight,
          _0x10217a == null ? undefined : _0x10217a / _0x3d4303,
          _0x547ab8.height / _0x3d4303,
        ),
        _0x581f20 =
          _0x39f0ff.collapseWithoutChildScroll &&
          Math.round(_0x5a5652.height / _0x3d4303) >= Math.round(_0x539bbe),
        _0x2bbe35 = nf(_0x39f0ff.contentHeight, _0x5a5652.height / _0x3d4303),
        _0x353087 = Math.min(
          _0x2bbe35,
          nf(
            _0x39f0ff.viewportHeight,
            _0x190c8e.getBoundingClientRect().height / _0x3d4303,
            _0x547ab8.height / _0x3d4303,
          ),
        ),
        _0x4347b3 = jd({
          collapseWithoutChildScroll: _0x581f20,
          contentHeight: _0x2bbe35,
          hostOffset: Math.max(0, (_0x547ab8.top - _0x5a5652.top) / _0x3d4303),
          stickyHeaderHeight: Math.max(
            24,
            ((_0x13723c = _0xc5daa3.getStickyHeaderHeight) == null
              ? undefined
              : _0x13723c.call(_0xc5daa3, _0x16a249)) ?? 0,
          ),
          viewportHeight: _0x353087,
        });
      if (
        ((_0x190c8e.style["transform"] =
          _0x4347b3.visualOffset === 0
            ? ""
            : "translateY(" + _0x4347b3.visualOffset * _0x3d4303 + "px)"),
        (_0x190c8e.style["clipPath"] =
          _0x4347b3.clipBottom === 0
            ? ""
            : "inset(0 0 " + _0x4347b3.clipBottom * _0x3d4303 + "px\x200)"),
        !kd(_0x39f0ff.owner["current"], "host") ||
          _0x39f0ff.syncingHostFromChild["current"])
      )
        return;
      let _0x303d3c = _0x4347b3.childOffset - _0xad808.current;
      if (Math.abs(_0x303d3c) < 0.5) return;
      ((_0xad808.current = _0x4347b3.childOffset), _0x39f0ff.invalidate());
      let _0x285938 = new WheelEvent("wheel", {
        cancelable: false,
        clientX:
          _0x5a5652.left + Math.min(_0x5a5652.width, _0x547ab8.width) / 2,
        clientY: _0x547ab8.top + (_0x353087 * _0x3d4303) / 2,
        deltaY: _0x303d3c,
      });
      _0x39f0ff.syncingChildFromHost["current"] = true;
      try {
        _0xc5daa3.handleWheel({
          ..._0x16a249,
          event: _0x285938,
          source: "host-scroll-sync",
          stage: _0x39f0ff.getStage(),
          viewportScrollY: _0x4347b3.childOffset,
        });
      } finally {
        _0x39f0ff.syncingChildFromHost["current"] = false;
      }
    },
    _0x2b9c0b = () => {
      (_0x4d85cd(),
        _0x380f25 || (_0x51e6c2 = _0xd0711d.requestAnimationFrame(_0x2b9c0b)));
    },
    _0x1561e9 = () => {
      globalThis.queueMicrotask(() => {
        _0x380f25 || _0x4d85cd();
      });
    },
    _0x46f719 = _0x39f0ff.getChildContext(),
    _0x30dfb6 = _0x46f719 ? _0x39f0ff.getProvider(_0x46f719) : undefined,
    _0x2a0d84 =
      _0x46f719 &&
      (_0x30dfb6 == null ||
      (_0x4a6544 = _0x30dfb6.subscribeVerticalScroll) == null
        ? undefined
        : _0x4a6544.call(_0x30dfb6, _0x46f719, (_0x3fd87d) => {
            var _0x466976;
            if (
              _0x39f0ff.syncingChildFromHost["current"] ||
              !kd(_0x39f0ff.owner["current"], "child")
            )
              return;
            let _0x4285e9 = Math.max(
                0,
                nf(_0x39f0ff.contentHeight) - nf(_0x39f0ff.viewportHeight),
              ),
              _0x40f637 = Nd(_0x3fd87d, 0, _0x4285e9),
              _0x154700 = _0x48d1ca.getBoundingClientRect(),
              _0x585f88 =
                ((_0x466976 = Uu(_0x48d1ca)) == null
                  ? undefined
                  : _0x466976.getBoundingClientRect().top) ?? 0,
              _0x3e78c4 = Ad(
                _0x40f637,
                Nd((_0x585f88 - _0x154700.top) / _0x3d4303, 0, _0x4285e9),
                Math.max(0, (_0x154700.top - _0x585f88) / _0x3d4303),
              );
            if (Math.abs(_0x3e78c4) < 0.5) return;
            let _0x94da00 = new WheelEvent("wheel", {
                cancelable: false,
                clientX: _0x154700.left + _0x154700.width / 2,
                clientY:
                  _0x154700.top +
                  Math.min(
                    _0x154700.height,
                    (_0x39f0ff.viewportHeight ?? _0x154700.height / _0x3d4303) *
                      _0x3d4303,
                  ) /
                    2,
                deltaY: _0x3e78c4 * _0x3d4303,
              }),
              _0x1ccf24 = _0xad808.current,
              _0x3aa03e = _0x190c8e.style["transform"],
              _0x189b85 = _0x190c8e.style["clipPath"];
            ((_0xad808.current = _0x40f637),
              (_0x190c8e.style["transform"] =
                _0x40f637 === 0
                  ? ""
                  : "translateY(" + _0x40f637 * _0x3d4303 + "px)"),
              (_0x39f0ff.syncingHostFromChild["current"] = true));
            let _0x22d23c = false;
            try {
              var _0x2d928f;
              _0x22d23c =
                ((_0x2d928f = _0x39f0ff.onHostWheel) == null
                  ? undefined
                  : _0x2d928f.call(_0x39f0ff, _0x94da00, _0x46f719)) === true ||
                Hu(_0x48d1ca, _0x94da00);
            } finally {
              _0x39f0ff.syncingHostFromChild["current"] = false;
            }
            if (!_0x22d23c) {
              ((_0xad808.current = _0x1ccf24),
                (_0x190c8e.style["transform"] = _0x3aa03e),
                (_0x190c8e.style["clipPath"] = _0x189b85));
              return;
            }
            _0x39f0ff.invalidate();
          }));
  _0x51e6c2 = _0xd0711d.requestAnimationFrame(_0x2b9c0b);
  let _0x285c80 =
    (_0x5e1361 = _0x39f0ff.hostLayout$) == null
      ? undefined
      : _0x5e1361.subscribe(_0x1561e9);
  (_0xd0711d.addEventListener("scroll", _0x4d85cd, true),
    _0xd0711d.addEventListener("resize", _0x4d85cd));
  let _0x58507a =
    typeof ResizeObserver > "u" ? undefined : new ResizeObserver(_0x4d85cd);
  return (
    _0x58507a == null || _0x58507a.observe(_0x48d1ca),
    _0x11d17f(() => {
      ((_0x380f25 = true),
        _0x51e6c2 != null && _0xd0711d.cancelAnimationFrame(_0x51e6c2),
        _0x2a0d84 == null || _0x2a0d84.dispose(),
        _0x285c80 == null || _0x285c80.unsubscribe(),
        _0x58507a == null || _0x58507a.disconnect(),
        _0xd0711d.removeEventListener("scroll", _0x4d85cd, true),
        _0xd0711d.removeEventListener("resize", _0x4d85cd),
        _0x190c8e.style["removeProperty"]("transform"),
        _0x190c8e.style["removeProperty"]("clip-path"));
    })
  );
}
function Od(_0x6c7217) {
  let _0xfcfa0 = _0x6c7217.parentElement;
  for (
    ;
    _0xfcfa0 &&
    _0xfcfa0 !== document.body &&
    _0xfcfa0 !== document.documentElement;
  ) {
    if (Wu(_0xfcfa0)) return _0xfcfa0;
    _0xfcfa0 = _0xfcfa0.parentElement;
  }
  return null;
}
function kd(_0x214f5e, _0x3070cc) {
  return _0x214f5e == null || _0x214f5e === _0x3070cc;
}
function Ad(_0x2fc1b1, _0x5c2bf2, _0x58cd62) {
  let _0x1fe7a9 = _0x2fc1b1 - _0x5c2bf2;
  return _0x1fe7a9 + (_0x1fe7a9 > 0 ? Math.max(0, _0x58cd62) : 0);
}
function jd(_0x5a8376) {
  let _0x55c5d5 = nf(_0x5a8376.contentHeight),
    _0x3777d5 = Math.min(_0x55c5d5, nf(_0x5a8376.viewportHeight)),
    _0x49d1e9 = Math.max(0, _0x55c5d5 - _0x3777d5);
  if (_0x49d1e9 === 0 && !_0x5a8376.collapseWithoutChildScroll)
    return { childOffset: 0, clipBottom: 0, visualOffset: 0 };
  let _0x50ba1c = Math.max(0, _0x5a8376.hostOffset),
    _0xa6e519 = Nd(nf(_0x5a8376.stickyHeaderHeight), 1, _0x3777d5),
    _0x19e0c3 = Math.max(_0x49d1e9, _0x55c5d5 - _0xa6e519),
    _0x36d207 = Math.min(_0x50ba1c, _0x19e0c3),
    _0x2e00e3 = Nd(_0x55c5d5 - _0x50ba1c, _0xa6e519, _0x3777d5);
  return {
    childOffset: Math.min(_0x50ba1c, _0x49d1e9),
    clipBottom: _0x3777d5 - _0x2e00e3,
    visualOffset: _0x36d207,
  };
}
function Md(_0x4aad89) {
  let _0x2a620e = Math.max(1, _0x4aad89.bleedWidth - _0x4aad89.bleedLeft),
    _0x25fb08 = Math.min(_0x4aad89.contentWidth, _0x2a620e);
  return {
    initialWidth: _0x25fb08,
    maxExpansion: Math.min(
      _0x4aad89.bleedLeft,
      Math.max(0, _0x4aad89.contentWidth - _0x25fb08),
    ),
  };
}
function Nd(_0xc52de9, _0x1fc260, _0x31032f) {
  return Math.max(_0x1fc260, Math.min(_0x31032f, _0xc52de9));
}
function Pd(_0x5ac97d) {
  (_0x5ac97d.style["removeProperty"]("left"),
    _0x5ac97d.style["removeProperty"]("top"),
    _0x5ac97d.style["removeProperty"]("width"),
    _0x5ac97d.style["removeProperty"]("height"),
    _0x5ac97d.style["removeProperty"]("visibility"),
    _0x5ac97d.style["removeProperty"]("pointer-events"));
}
function Fd(_0x275b07, _0x124e32) {
  _0x124e32 ? Ed.set(_0x275b07, _0x124e32) : Ed.delete(_0x275b07);
}
function Id(_0x2f96b4) {
  var _0x21b4dc;
  let {
    chrome: _0x1456ce,
    container: _0x42a8e2,
    geometryService: _0x5e13d9,
    stage: _0xe3cb25,
  } = _0x2f96b4;
  if (_0x2f96b4.deferInactive && _0xe3cb25 === "inactive")
    return (
      (_0x1456ce.style["visibility"] = "hidden"),
      (_0x1456ce.style["pointerEvents"] = "none"),
      _0x11d17f(() => {
        (_0x1456ce.style["removeProperty"]("visibility"),
          _0x1456ce.style["removeProperty"]("pointer-events"));
      })
    );
  let _0x12befb = _0x1456ce.parentElement,
    _0x568d4c = _0x1456ce.nextSibling,
    _0x24bf74,
    _0x4b379a,
    _0x16ddae = 0,
    _0x1a9733,
    _0x4b6088,
    _0x508b39,
    _0x50556c,
    _0x1ac969,
    _0x35202b,
    _0x408e36,
    _0x4993ed = () => {
      let _0x29d657 = Gd(_0x42a8e2),
        _0x210bb6 = Wd(_0x42a8e2),
        _0x769451 =
          !Kd(_0x42a8e2) &&
          _0x408e36 != null &&
          _0x1a9733 === _0x210bb6.left &&
          _0x508b39 === _0x210bb6.width &&
          _0x50556c === _0x210bb6.height;
      !Kd(_0x42a8e2) &&
        _0x408e36 != null &&
        !_0x769451 &&
        (_0x408e36 = undefined);
      let _0x39124b = _0x769451
          ? new DOMRect(
              _0x210bb6.left,
              _0x408e36,
              _0x210bb6.width,
              _0x210bb6.height,
            )
          : _0x210bb6,
        _0x334584 = !_0x29d657 || _0x39124b.height >= 24,
        _0x200e72 = Bd(_0x29d657, _0x334584, _0x39124b.height);
      if (
        (Rd(_0x42a8e2, _0x1456ce, _0x334584, _0xe3cb25),
        zd(_0x1456ce, _0x200e72, _0xe3cb25),
        _0x29d657)
      ) {
        let _0x8d8ab3 = _0x42a8e2.getBoundingClientRect();
        Vd(_0x1456ce, _0x39124b, Hd(_0x8d8ab3, _0x2f96b4.docsSheetLikeLayout));
      } else Ud(_0x1456ce);
      ((_0x1456ce.style["visibility"] = _0x334584 ? "" : "hidden"),
        (_0x1456ce.style["pointerEvents"] =
          _0x334584 && _0xe3cb25 !== "inactive" ? "" : "none"),
        (_0x39124b.left !== _0x1a9733 ||
          _0x39124b.top !== _0x4b6088 ||
          _0x39124b.width !== _0x508b39 ||
          _0x39124b.height !== _0x50556c ||
          _0x334584 !== _0x1ac969 ||
          _0x200e72 !== _0x35202b) &&
          ((_0x1a9733 = _0x39124b.left),
          (_0x4b6088 = _0x39124b.top),
          (_0x508b39 = _0x39124b.width),
          (_0x50556c = _0x39124b.height),
          (_0x1ac969 = _0x334584),
          (_0x35202b = _0x200e72),
          Fd(_0x42a8e2, {
            height: _0x39124b.height,
            left: _0x39124b.left,
            top: _0x39124b.top,
            width: _0x39124b.width,
          }),
          (_0x1456ce.style["left"] = _0x39124b.left + "px"),
          (_0x1456ce.style["top"] = _0x39124b.top + "px"),
          (_0x1456ce.style["width"] = _0x39124b.width + "px"),
          (_0x1456ce.style["height"] = _0x39124b.height + "px")));
    },
    _0x4d16d9 = () => {
      (_0x4993ed(), (_0x24bf74 = window.requestAnimationFrame(_0x4d16d9)));
    },
    _0x379b35 = () => {
      ((_0x4b379a = undefined),
        _0x4993ed(),
        !(_0x16ddae <= 0) &&
          (--_0x16ddae, (_0x4b379a = window.requestAnimationFrame(_0x379b35))));
    },
    _0x2b95f2 = (_0x2a17cb) => {
      (!Kd(_0x42a8e2) &&
        Yd(_0x2a17cb) &&
        _0x4b6088 != null &&
        (_0x408e36 = _0x4b6088),
        Jd(_0x42a8e2, _0x2a17cb, {
          height: _0x50556c,
          left: _0x1a9733,
          top: _0x4b6088,
          width: _0x508b39,
        }) &&
          (_0x5e13d9.invalidate({
            embedId: _0x2f96b4.embedId,
            reason: "wheel",
          }),
          (_0x16ddae = Math.max(_0x16ddae, 3)),
          (_0x4b379a ??= window.requestAnimationFrame(_0x379b35))));
    },
    _0x3db990 = () => {
      ((_0x408e36 = undefined),
        _0x5e13d9.invalidate({
          embedId: _0x2f96b4.embedId,
          reason: "host-scroll",
        }),
        (_0x16ddae = Math.max(_0x16ddae, 2)),
        (_0x4b379a ??= window.requestAnimationFrame(_0x379b35)));
    },
    _0x19e9aa = () => {
      _0x408e36 = undefined;
    };
  (_0x4993ed(), document.body["appendChild"](_0x1456ce));
  let _0x6d033 = new ResizeObserver(_0x4993ed);
  _0x6d033.observe(_0x42a8e2);
  let _0x5a2f3b =
    (_0x21b4dc = _0x2f96b4.hostLayout$) == null
      ? undefined
      : _0x21b4dc.subscribe(_0x3db990);
  return (
    window.addEventListener("pointerdown", _0x19e9aa, true),
    window.addEventListener("scroll", _0x2b95f2, true),
    window.addEventListener("wheel", _0x2b95f2, true),
    window.addEventListener("resize", _0x2b95f2),
    (_0xe3cb25 !== "inactive" || Kd(_0x42a8e2)) &&
      (_0x24bf74 = window.requestAnimationFrame(_0x4d16d9)),
    _0x11d17f(() => {
      (_0x24bf74 != null && window.cancelAnimationFrame(_0x24bf74),
        _0x4b379a != null && window.cancelAnimationFrame(_0x4b379a),
        _0x5a2f3b == null || _0x5a2f3b.unsubscribe(),
        _0x6d033.disconnect(),
        window.removeEventListener("pointerdown", _0x19e9aa, true),
        window.removeEventListener("scroll", _0x2b95f2, true),
        window.removeEventListener("wheel", _0x2b95f2, true),
        window.removeEventListener("resize", _0x2b95f2),
        Fd(_0x42a8e2),
        Pd(_0x1456ce),
        Rd(_0x42a8e2, _0x1456ce, true, "stage2"),
        zd(_0x1456ce, true, "stage2"),
        _0x12befb != null && _0x12befb.isConnected
          ? _0x12befb.insertBefore(_0x1456ce, _0x568d4c)
          : _0x1456ce.remove());
    })
  );
}
function Ld(_0xeb1b4a, _0x291878) {
  var _0x5b32d8, _0x20979c, _0x5f5a7c;
  let _0x509ead = _0xeb1b4a.dataset["embedId"],
    _0x52b235 = _0xeb1b4a.ownerDocument,
    _0x23ec68 = Gd(_0xeb1b4a)
      ? [Wd(_0xeb1b4a)]
      : [
          _0xeb1b4a.getBoundingClientRect(),
          (_0x5b32d8 = _0xeb1b4a.querySelector(
            '[data-u-comp="embed-float-dom-content"]',
          )) == null
            ? undefined
            : _0x5b32d8.getBoundingClientRect(),
        ],
    _0x40cebb = _0x52b235.querySelector(
      '[data-u-comp="embed-float-dom-chrome"][data-embed-id="' +
        _0x509ead +
        "\x22]",
    ),
    _0x1ea4b4 = [
      _0x40cebb == null ||
      (_0x20979c = _0x40cebb.querySelector(
        '[data-embed-floating-menu="true"]',
      )) == null
        ? undefined
        : _0x20979c.getBoundingClientRect(),
      _0x40cebb == null ||
      (_0x5f5a7c = _0x40cebb.querySelector(
        "[data-embed-float-fullscreen-button]",
      )) == null
        ? undefined
        : _0x5f5a7c.getBoundingClientRect(),
    ],
    _0x1ba3d0 = Array.from(
      _0x52b235.querySelectorAll('[data-embed-floating-menu-popup="true"]'),
    )
      .filter((_0x54d461) => _0x54d461.dataset["embedId"] === _0x509ead)
      .map((_0x3eab24) => _0x3eab24.getBoundingClientRect());
  return [..._0x23ec68, ..._0x1ea4b4, ..._0x1ba3d0]
    .filter(
      (_0x1661a2) => !!_0x1661a2 && _0x1661a2.width > 0 && _0x1661a2.height > 0,
    )
    .some((_0x491780) => ef(_0x491780, _0x291878.clientX, _0x291878.clientY));
}
function Rd(_0x4a2302, _0x4523f8, _0x2c6848, _0x2825cc) {
  let _0x43d55a = _0x2c6848 ? "" : "none",
    _0x13ac40 = _0x4a2302.querySelector(
      '[data-u-comp="embed-float-dom-content"]',
    ),
    _0x324b74 = _0x4a2302.querySelector('[data-u-comp="embed-float-dom-live"]'),
    _0x5e466c = _0x4a2302.querySelector(
      '[data-u-comp="embed-float-dom-live-canvas"]',
    ),
    _0x2482fd = _0x4a2302.querySelector(
      '[data-u-comp="embed-float-dom-live-content"]',
    ),
    _0x412962 = _0x4a2302.querySelector(
      '[data-u-comp="embed-float-dom-interaction-gate"]',
    ),
    _0x56ca9a =
      _0x4523f8 == null
        ? undefined
        : _0x4523f8.querySelector("[data-embed-overlay-root]"),
    _0x419e53 =
      _0x4523f8 == null
        ? undefined
        : _0x4523f8.querySelector("[data-embed-popup-root]");
  if (
    (_0x56ca9a == null ||
      _0x56ca9a.style["setProperty"]("pointer-events", "none"),
    _0x419e53 == null ||
      _0x419e53.style["setProperty"]("pointer-events", "none"),
    Gd(_0x4a2302))
  ) {
    (_0x4a2302.style["setProperty"]("pointer-events", "none"),
      _0x13ac40 == null ||
        _0x13ac40.style["setProperty"]("pointer-events", "none"),
      _0x324b74 == null ||
        _0x324b74.style["setProperty"]("pointer-events", "none"),
      _0x5e466c == null ||
        _0x5e466c.style["setProperty"](
          "pointer-events",
          _0x2c6848 ? "auto" : "none",
        ),
      _0x2482fd == null ||
        _0x2482fd.style["setProperty"]("pointer-events", "none"),
      _0x412962 == null ||
        _0x412962.style["setProperty"]("pointer-events", "none"));
    return;
  }
  (_0x4a2302.style["removeProperty"]("pointer-events"),
    _0x13ac40 == null || _0x13ac40.style["removeProperty"]("pointer-events"),
    _0x324b74 == null ||
      _0x324b74.style["setProperty"]("pointer-events", _0x43d55a),
    _0x5e466c == null || _0x5e466c.style["removeProperty"]("pointer-events"),
    _0x2482fd == null || _0x2482fd.style["removeProperty"]("pointer-events"),
    _0x412962 == null ||
      _0x412962.style["setProperty"]("pointer-events", _0x43d55a));
}
function zd(_0x29b0dd, _0x4e50b7, _0x263bf2) {
  let _0x2967b6 = _0x4e50b7 && _0x263bf2 !== "stage2",
    _0x186bb3 =
      _0x29b0dd == null
        ? undefined
        : _0x29b0dd.querySelector("[data-embed-float-fullscreen-button]"),
    _0x3e81ff = [
      _0x29b0dd == null
        ? undefined
        : _0x29b0dd.querySelector("[data-embed-overlay-root]"),
      _0x29b0dd == null
        ? undefined
        : _0x29b0dd.querySelector("[data-embed-popup-root]"),
    ];
  (_0x186bb3 == null ||
    _0x186bb3.style["setProperty"]("visibility", _0x2967b6 ? "" : "hidden"),
    _0x186bb3 == null ||
      _0x186bb3.style["setProperty"]("pointer-events", _0x2967b6 ? "" : "none"),
    _0x3e81ff.forEach((_0x1d50f0) => {
      (_0x1d50f0 == null ||
        _0x1d50f0.style["setProperty"](
          "visibility",
          _0x4e50b7 && _0x263bf2 === "stage2" ? "" : "hidden",
        ),
        _0x1d50f0 == null ||
          _0x1d50f0.style["setProperty"]("pointer-events", "none"),
        _0x263bf2 !== "stage2" &&
          (_0x1d50f0 == null ||
            _0x1d50f0.removeAttribute("data-embed-runtime-focus-role"),
          _0x1d50f0 == null ||
            _0x1d50f0
              .querySelectorAll("[data-embed-runtime-focus-role]")
              .forEach((_0x463c39) => {
                _0x463c39.removeAttribute("data-embed-runtime-focus-role");
              })));
    }));
}
function Bd(_0x2944b2, _0x464213, _0x3ff256) {
  return _0x2944b2 ? _0x464213 : _0x3ff256 >= 40;
}
function Vd(_0x316a4e, _0x579375, _0x1fedaa) {
  let _0x4e5c0d = _0x1fedaa.left - _0x579375.left,
    _0x485040 = _0x1fedaa.width;
  _0x316a4e
    .querySelectorAll('[data-embed-floating-menu="true"]')
    .forEach((_0xaa5bbb) => {
      var _0x5c953a;
      let _0x5cf274 =
          (_0x5c953a = _0xaa5bbb.closest("[data-embed-floating-menu-entry]")) ==
          null
            ? undefined
            : _0x5c953a.dataset["embedFloatingMenuEntry"],
        _0x37f4d1 = _0xaa5bbb.dataset["uComp"] === "base-embed-floating-menu",
        _0x550ed8 = _0xaa5bbb.dataset["uComp"] === "sheet-embed-floating-menu";
      _0x5cf274 === "docs-custom-block"
        ? ((_0xaa5bbb.style["top"] = _0x37f4d1 ? "-48px" : "-52px"),
          _0x37f4d1
            ? (_0xaa5bbb.style["setProperty"](
                "left",
                _0x4e5c0d + "px",
                "important",
              ),
              _0xaa5bbb.style["setProperty"]("right", "auto", "important"),
              _0xaa5bbb.style["setProperty"](
                "width",
                _0x485040 + "px",
                "important",
              ))
            : _0x550ed8 &&
              (_0xaa5bbb.style["setProperty"](
                "left",
                _0x4e5c0d + _0x485040 / 2 + "px",
                "important",
              ),
              _0xaa5bbb.style["setProperty"]("max-width", _0x485040 + "px")))
        : (_0x37f4d1 || _0x550ed8) && (_0xaa5bbb.style["top"] = "8px");
    });
}
function Hd(_0xc392f6, _0x30d0de) {
  if (!_0x30d0de) return _0xc392f6;
  let _0x58360d = Math.min(_0x30d0de.contentWidth, _0x30d0de.pageContentWidth);
  if (_0x58360d <= 0 || _0xc392f6.width <= 0) return _0xc392f6;
  let _0x5a57a8 = _0xc392f6.width / _0x58360d;
  return new DOMRect(
    _0xc392f6.left,
    _0xc392f6.top,
    _0x30d0de.pageContentWidth * _0x5a57a8,
    _0xc392f6.height,
  );
}
function Ud(_0x5eda4f) {
  _0x5eda4f
    .querySelectorAll('[data-embed-floating-menu="true"]')
    .forEach((_0x184842) => {
      var _0x2d86e3;
      (_0x184842.style["removeProperty"]("left"),
        _0x184842.style["removeProperty"]("top"),
        _0x184842.style["removeProperty"]("width"),
        _0x184842.style["removeProperty"]("right"),
        _0x184842.style["removeProperty"]("max-width"),
        (_0x2d86e3 = _0x184842.querySelector(
          "[data-u-comp=\x22base-embed-view-slot\x22]",
        )) == null || _0x2d86e3.style["removeProperty"]("margin-left"));
    });
}
function Wd(_0x1d6a18) {
  let _0x51d667 = Kd(_0x1d6a18)
      ? _0x1d6a18.querySelector("[data-u-comp=\x22embed-float-dom-content\x22]")
      : null,
    _0x198e88 =
      _0x51d667 == null ? undefined : _0x51d667.getBoundingClientRect(),
    _0x1c9ca9 = _0x1d6a18.getBoundingClientRect();
  return Xd(
    _0x198e88 && _0x198e88.width > 0 && _0x198e88.height > 0
      ? Gd(_0x1d6a18)
        ? Zd(_0x198e88, _0x1c9ca9.bottom)
        : _0x198e88
      : _0x1c9ca9,
    _0x1d6a18,
  );
}
function Gd(_0x2b1529) {
  return !!_0x2b1529.closest(
    '[data-embed-docs-custom-block-sheet-like="true"]',
  );
}
function Kd(_0x2db9da) {
  return (
    Gd(_0x2db9da) ||
    !!_0x2db9da.closest("[data-u-comp=\x22embed-docs-custom-block\x22]")
  );
}
function qd(_0x3238ca, _0x14a6b7, _0x2a0e99, _0x383ac0) {
  (_0x383ac0.current["forEach"]((_0x36e2ff) =>
    window.cancelAnimationFrame(_0x36e2ff),
  ),
    (_0x383ac0.current = []),
    _0x3238ca.invalidate({ embedId: _0x14a6b7, reason: _0x2a0e99 }));
  let _0x5df10f = (_0x519354) => {
    let _0x939dbb = window.requestAnimationFrame(() => {
      ((_0x383ac0.current = _0x383ac0.current["filter"](
        (_0x4f7cc6) => _0x4f7cc6 !== _0x939dbb,
      )),
        _0x3238ca.invalidate({ embedId: _0x14a6b7, reason: _0x2a0e99 }),
        _0x519354 > 1 && _0x5df10f(_0x519354 - 1));
    });
    _0x383ac0.current["push"](_0x939dbb);
  };
  _0x5df10f(2);
}
function Jd(_0x356715, _0x13e445, _0xadb241) {
  if (Iu(_0x13e445)) return false;
  let _0x3f38fd = _0x13e445 == null ? undefined : _0x13e445.target;
  return !(
    (_0x3f38fd instanceof Node && _0x356715.contains(_0x3f38fd)) ||
    (_0x3f38fd instanceof HTMLElement &&
      _0x3f38fd.closest('[data-embed-float-dom="true"]')) ||
    (_0x13e445 instanceof WheelEvent &&
      ([...Ed.values()].some((_0x48bea4) => tf(_0x48bea4, _0x13e445)) ||
        tf(_0xadb241, _0x13e445)))
  );
}
function Yd(_0x5b6ddc) {
  return _0x5b6ddc instanceof WheelEvent
    ? Math.abs(_0x5b6ddc.deltaY) >= Math.abs(_0x5b6ddc.deltaX)
    : (_0x5b6ddc == null ? undefined : _0x5b6ddc.type) === "scroll";
}
function Xd(_0x543edb, _0x3561cc) {
  let _0x2d78cc = Qd(_0x3561cc, _0x543edb);
  if (!_0x2d78cc && _0x543edb.top >= 0 && _0x543edb.left >= 0) return _0x543edb;
  let _0x43a486 =
      (_0x2d78cc == null ? undefined : _0x2d78cc.getBoundingClientRect()) ??
      new DOMRect(0, 0, window.innerWidth, window.innerHeight),
    _0x4aea2f = Math.max(_0x543edb.left, _0x43a486.left),
    _0x21bbd5 = Math.max(_0x543edb.top, _0x43a486.top),
    _0x30f125 = Math.min(_0x543edb.right, _0x43a486.right),
    _0x1866cd = Math.min(_0x543edb.bottom, _0x43a486.bottom);
  return _0x30f125 <= _0x4aea2f || _0x1866cd <= _0x21bbd5
    ? new DOMRect(_0x4aea2f, _0x21bbd5, 0, 0)
    : new DOMRect(
        _0x4aea2f,
        _0x21bbd5,
        _0x30f125 - _0x4aea2f,
        _0x1866cd - _0x21bbd5,
      );
}
function Zd(_0x26d5a0, _0x263e0e) {
  let _0x5bf3b3 = Math.min(_0x26d5a0.bottom, _0x263e0e);
  return _0x5bf3b3 <= _0x26d5a0.top
    ? new DOMRect(_0x26d5a0.left, _0x26d5a0.top, 0, 0)
    : new DOMRect(
        _0x26d5a0.left,
        _0x26d5a0.top,
        _0x26d5a0.width,
        _0x5bf3b3 - _0x26d5a0.top,
      );
}
function Qd(_0x4f3d73, _0x5c05b0) {
  let _0x50bd0c = _0x4f3d73.parentElement;
  for (
    ;
    _0x50bd0c &&
    _0x50bd0c !== document.body &&
    _0x50bd0c !== document.documentElement;
  ) {
    if (Wu(_0x50bd0c) && !$d(_0x50bd0c, _0x5c05b0)) return _0x50bd0c;
    _0x50bd0c = _0x50bd0c.parentElement;
  }
  return null;
}
function $d(_0x32d228, _0x29e63f) {
  let _0x3d5db7 = _0x32d228.getBoundingClientRect();
  return (
    _0x3d5db7.width <= 0 ||
    _0x3d5db7.height <= 0 ||
    (Math.abs(_0x3d5db7.left - _0x29e63f.left) < 1 &&
      Math.abs(_0x3d5db7.top - _0x29e63f.top) < 1 &&
      Math.abs(_0x3d5db7.width - _0x29e63f.width) < 1 &&
      Math.abs(_0x3d5db7.height - _0x29e63f.height) < 1)
  );
}
function ef(_0x1b8be1, _0x2abda6, _0x33a718) {
  return (
    _0x2abda6 >= _0x1b8be1.left &&
    _0x2abda6 <= _0x1b8be1.right &&
    _0x33a718 >= _0x1b8be1.top &&
    _0x33a718 <= _0x1b8be1.bottom
  );
}
function tf(_0x257081, _0x3a9c89) {
  let {
    height: _0x21a774,
    left: _0xc33a61,
    top: _0x3a36c8,
    width: _0xeccb0b,
  } = _0x257081;
  return (
    Number.isFinite(_0xc33a61) &&
    Number.isFinite(_0x3a36c8) &&
    Number.isFinite(_0xeccb0b) &&
    Number.isFinite(_0x21a774) &&
    (_0xeccb0b ?? 0) > 0 &&
    (_0x21a774 ?? 0) > 0 &&
    _0x3a9c89.clientX >= _0xc33a61 &&
    _0x3a9c89.clientX <= _0xc33a61 + _0xeccb0b &&
    _0x3a9c89.clientY >= _0x3a36c8 &&
    _0x3a9c89.clientY <= _0x3a36c8 + _0x21a774
  );
}
function nf(..._0x227d85) {
  return Math.max(
    1,
    _0x227d85.find(
      (_0x4f90fa) =>
        typeof _0x4f90fa == "number" &&
        Number.isFinite(_0x4f90fa) &&
        _0x4f90fa > 0,
    ) ?? 1,
  );
}
function rf(_0x24f406) {
  return typeof _0x24f406 == "number" &&
    Number.isFinite(_0x24f406) &&
    _0x24f406 > 0
    ? _0x24f406
    : 1;
}
const af = "univer:embed-float-drag-handle:pointerdown";
function of(..._0x502feb) {
  return _0x502feb.filter((_0x58da9f) => !!_0x58da9f && _0x58da9f.isConnected);
}
function sf(_0x3a469f, _0x270fd2, _0x430e95, _0x40a699, _0x26bbef) {
  let _0x206ccf = _0x26bbef === _0x513c12.UNIVER_SLIDE,
    _0x3683a9 = _0x206ccf
      ? () => {}
      : _0x43cbd5(_0x270fd2 ? [_0x3a469f, _0x270fd2] : [_0x3a469f]),
    _0x394121 = (_0x52210f) => {
      let _0x3d3ef7 =
          _0x52210f.target instanceof HTMLElement ? _0x52210f.target : null,
        _0x5546de = _0x3d3ef7
          ? _0x3d3ef7.closest(
              '[data-embed-floating-menu="true"], [data-embed-floating-menu-popup="true"], [data-embed-ribbon-override="true"], [data-embed-float-fullscreen-button="true"]',
            )
          : null,
        _0x132506 = _0x3a469f.dataset["embedId"],
        _0x3e2449 = uf(_0x3a469f, _0x270fd2, _0x5546de, _0x132506),
        _0x4d6ab7 =
          !!_0x3d3ef7 &&
          !!(_0x40a699 != null && _0x40a699.contains(_0x3d3ef7)) &&
          !_0x3a469f.contains(_0x3d3ef7);
      if (
        !(
          !_0x3e2449 &&
          !_0x4d6ab7 &&
          !lf(_0x206ccf, _0x3a469f, _0x270fd2, _0x3d3ef7)
        ) &&
        !(_0x206ccf && _0x3e2449 && cf(_0x5546de, _0x3d3ef7, _0x52210f)) &&
        !df(_0x206ccf, _0x5546de, _0x3d3ef7, _0x52210f)
      ) {
        if (_0x206ccf) {
          (_0x430e95 == null || _0x430e95(_0x52210f),
            _0x52210f.preventDefault(),
            _0x52210f.stopPropagation());
          return;
        }
        (!_0x52210f.ctrlKey &&
          !_0x52210f.metaKey &&
          (_0x430e95 == null ? undefined : _0x430e95(_0x52210f)) !== true) ||
          (_0x52210f.preventDefault(), _0x52210f.stopPropagation());
      }
    };
  return (
    _0x3a469f.ownerDocument["addEventListener"]("wheel", _0x394121, {
      capture: true,
      passive: false,
    }),
    () => {
      (_0x3a469f.ownerDocument["removeEventListener"]("wheel", _0x394121, true),
        _0x3683a9());
    }
  );
}
function cf(_0x363b90, _0x4a34d5, _0x34383c) {
  return (_0x363b90 == null
    ? undefined
    : _0x363b90.dataset["embedFloatingMenuPopup"]) !== "true" ||
    _0x34383c.ctrlKey ||
    _0x34383c.metaKey
    ? false
    : ((!_0x4a34d5 || !ff(_0x363b90, _0x4a34d5, _0x34383c)) &&
        _0x34383c.preventDefault(),
      _0x34383c.stopPropagation(),
      true);
}
function lf(_0x136f8f, _0x54ccb1, _0xc9e1cb, _0x3934e7) {
  return (
    _0x136f8f &&
    (_0x54ccb1.contains(_0x3934e7) ||
      (_0xc9e1cb == null ? undefined : _0xc9e1cb.contains(_0x3934e7)) === true)
  );
}
function uf(_0x1e75d1, _0xcba316, _0xb91805, _0x586d9c) {
  return (
    !!_0xb91805 &&
    (_0x1e75d1.contains(_0xb91805) ||
      (_0xcba316 == null ? undefined : _0xcba316.contains(_0xb91805)) ===
        true ||
      (!!_0x586d9c && _0xb91805.dataset["embedId"] === _0x586d9c))
  );
}
function df(_0x3d8062, _0xb3256, _0x1edd88, _0x2525ea) {
  return (
    !_0x3d8062 &&
    !!_0xb3256 &&
    !!_0x1edd88 &&
    ff(_0xb3256, _0x1edd88, _0x2525ea)
  );
}
function ff(_0x2a7c23, _0x170641, _0x5b81c0) {
  if (_0x5b81c0.ctrlKey || _0x5b81c0.metaKey) return false;
  let _0x1f2665 =
      _0x5b81c0.deltaX || (_0x5b81c0.shiftKey ? _0x5b81c0.deltaY : 0),
    _0x4c7ece = _0x5b81c0.shiftKey ? 0 : _0x5b81c0.deltaY,
    _0x3d7d95 = _0x170641;
  for (; _0x3d7d95 && _0x2a7c23.contains(_0x3d7d95);) {
    if (pf(_0x3d7d95, _0x1f2665, _0x4c7ece)) return true;
    if (_0x3d7d95 === _0x2a7c23) break;
    _0x3d7d95 = _0x3d7d95.parentElement;
  }
  return false;
}
function pf(_0x424085, _0x57e67a, _0x10d0ca) {
  let _0x43d169 = _0x424085.ownerDocument["defaultView"];
  if (!_0x43d169) return false;
  let _0x267e21 = _0x43d169.getComputedStyle(_0x424085),
    _0x4a974 =
      mf(_0x267e21.overflowX) &&
      hf(
        _0x424085.scrollLeft,
        _0x424085.scrollWidth - _0x424085.clientWidth,
        _0x57e67a,
      ),
    _0x4038a2 =
      mf(_0x267e21.overflowY) &&
      hf(
        _0x424085.scrollTop,
        _0x424085.scrollHeight - _0x424085.clientHeight,
        _0x10d0ca,
      );
  return _0x4a974 || _0x4038a2;
}
function mf(_0x57af57) {
  return _0x57af57 === "auto" || _0x57af57 === "scroll";
}
function hf(_0xb9b95d, _0x5911fb, _0x2e1c8e) {
  return (
    _0x5911fb > 0 &&
    (_0x2e1c8e < 0 ? _0xb9b95d > 0 : _0x2e1c8e > 0 && _0xb9b95d < _0x5911fb)
  );
}
function gf(_0x14f847, _0x47810a) {
  let _0x5818bf = _0x14f847.querySelector('[data-u-comp="hover-track"]'),
    _0x1f3b1f =
      (_0x5818bf == null ? undefined : _0x5818bf.firstElementChild) instanceof
      HTMLElement
        ? _0x5818bf.firstElementChild
        : null,
    _0x431368 = (_0x54412e) =>
      _0x54412e instanceof Node &&
      (_0x14f847.contains(_0x54412e) || _0x47810a.contains(_0x54412e)),
    _0x31fc54 = () => {
      var _0xe73a84, _0x1fb112;
      (_0x5818bf == null || _0x5818bf.style["setProperty"]("opacity", "1"),
        ((_0xe73a84 = _0x14f847.ownerDocument["defaultView"]) == null ||
        (_0x1fb112 = _0xe73a84.matchMedia) == null
          ? undefined
          : _0x1fb112.call(_0xe73a84, "(prefers-reduced-motion:\x20reduce)")
              .matches) !== true &&
          (_0x1f3b1f == null ||
            _0x1f3b1f.style["setProperty"](
              "animation",
              "univer-spin 5s linear infinite",
            )));
    },
    _0x5049ee = () => {
      (_0x5818bf == null || _0x5818bf.style["removeProperty"]("opacity"),
        _0x1f3b1f == null || _0x1f3b1f.style["removeProperty"]("animation"));
    },
    _0x1cfc71 = () => {
      (_0x47810a.style["setProperty"]("opacity", "1"), _0x31fc54());
    },
    _0x4d030d = (_0x4cdeb0) => {
      _0x431368(_0x4cdeb0.relatedTarget) ||
        (_0x47810a.style["removeProperty"]("opacity"), _0x5049ee());
    };
  return (
    _0x14f847.addEventListener("pointerenter", _0x1cfc71),
    _0x14f847.addEventListener("pointerleave", _0x4d030d),
    _0x47810a.addEventListener("pointerenter", _0x1cfc71),
    _0x47810a.addEventListener("pointerleave", _0x4d030d),
    (_0x14f847.matches(":hover") || _0x47810a.matches(":hover")) && _0x1cfc71(),
    () => {
      (_0x14f847.removeEventListener("pointerenter", _0x1cfc71),
        _0x14f847.removeEventListener("pointerleave", _0x4d030d),
        _0x47810a.removeEventListener("pointerenter", _0x1cfc71),
        _0x47810a.removeEventListener("pointerleave", _0x4d030d),
        _0x47810a.style["removeProperty"]("opacity"),
        _0x5049ee());
    }
  );
}
function _f(_0x3cd802, _0x2ad549) {
  if (
    _0x2ad549 instanceof HTMLCanvasElement &&
    _0x3cd802.some((_0x399892) => _0x399892.contains(_0x2ad549))
  )
    return _0x2ad549;
  for (let _0x2a8230 of _0x3cd802) {
    let _0x1ff7c6 = _0x2a8230.querySelector("canvas");
    if (_0x1ff7c6) return _0x1ff7c6;
  }
  return null;
}
function vf(_0x40b63a, _0x131267 = false) {
  return (
    _0x40b63a !== _0x513c12.UNIVER_SHEET &&
    _0x40b63a !== _0x513c12.UNIVER_DOC &&
    (_0x131267 || _0x40b63a !== _0x513c12.UNIVER_BASE)
  );
}
function yf(_0x251e00) {
  let _0x308d0c = bf(_0x251e00);
  return (
    _0x308d0c === "child-editor" ||
    _0x308d0c === "child-popup" ||
    _0x308d0c === "floating-menu"
  );
}
function bf(_0x139955) {
  var _0x4b6d56;
  if (!(_0x139955 instanceof HTMLElement)) return;
  let _0x3d74fb =
    (_0x4b6d56 = _0x139955.closest("[data-embed-runtime-focus-role]")) == null
      ? undefined
      : _0x4b6d56.getAttribute(ws);
  return Af(_0x3d74fb) ? _0x3d74fb : undefined;
}
function xf(_0x3180bf, _0x20c91f, _0x565acd, _0x42ce13, _0x29ba03) {
  if (_0x29ba03 !== "stage2" || !_0x565acd || !_0x42ce13) return;
  let _0x3552b2 = new Map(),
    _0x15a6e1 = () => {
      let _0xb2c867 = new Set([
        _0x42ce13,
        ..._0x20c91f.listElements(_0x565acd),
      ]);
      (_0x3552b2.forEach((_0x35ca86, _0x55ba1c) => {
        _0xb2c867.has(_0x55ba1c) ||
          (_0x35ca86.dispose(), _0x3552b2.delete(_0x55ba1c));
      }),
        _0xb2c867.forEach((_0x5ebced) => {
          _0x3552b2.has(_0x5ebced) ||
            _0x3180bf.checkElementInCurrentContainers(_0x5ebced) ||
            _0x3552b2.set(
              _0x5ebced,
              _0x3180bf.registerContainerElement(_0x5ebced),
            );
        }));
    };
  _0x15a6e1();
  let _0x46da91 = _0x20c91f.runtimeFocusChanged$["subscribe"](_0x15a6e1);
  return _0x11d17f(() => {
    (_0x46da91.unsubscribe(),
      _0x3552b2.forEach((_0xeea843) => _0xeea843.dispose()),
      _0x3552b2.clear());
  });
}
function Sf(_0x206c2e) {
  let _0x290983 = (_0x1aca3d) => {
      var _0x12decf, _0x3ab40e;
      let _0x1eda1e = _0x1aca3d.target,
        _0x3b6859 =
          ((_0x12decf = _0x206c2e.isExternalHostInteraction) == null
            ? undefined
            : _0x12decf.call(_0x206c2e, _0x1aca3d)) ?? false;
      if (
        _0x206c2e.floatingActiveService["getStage"](_0x206c2e.embedId) ===
        "inactive"
      )
        return;
      _0x3b6859 &&
        (_0x206c2e.externalHostInteractionUntil["current"] =
          Date.now() + _0x206c2e.graceMs);
      let _0x451179 =
        _0x206c2e.focusCoordinator["containsElement"](
          _0x206c2e.embedId,
          _0x1eda1e,
          _0x1aca3d,
        ) ||
        _0x206c2e.interactionBoundaryService["contains"](
          _0x206c2e.embedId,
          _0x1eda1e,
          _0x1aca3d,
        );
      (_0x451179 &&
        (_0x206c2e.ownedPointerInteractionUntil["current"] =
          Date.now() + _0x206c2e.graceMs),
        !(
          !_0x1eda1e ||
          _0x206c2e.container["contains"](_0x1eda1e) ||
          ((_0x3ab40e = _0x206c2e.chrome) != null &&
            _0x3ab40e.contains(_0x1eda1e)) ||
          _0x1eda1e.closest(
            "[data-embed-floating-menu=\x22true\x22],\x20[data-embed-floating-menu-popup=\x22true\x22],\x20[data-embed-ribbon-override=\x22true\x22],\x20[data-embed-float-fullscreen-button=\x22true\x22]",
          ) ||
          _0x451179 ||
          _0x3b6859 ||
          Ld(_0x206c2e.container, _0x1aca3d)
        ) &&
          _0x206c2e.activationService["clearFloating"](
            _0x206c2e.embedId,
            _0x206c2e.hostUnitId,
          ));
    },
    _0x3e6dbf = (_0x57c423) => {
      var _0x11b204;
      let _0x39c996 = _0x57c423.target,
        _0x5aa9cd =
          _0x206c2e.container["ownerDocument"] ??
          (_0x39c996 == null ? undefined : _0x39c996.ownerDocument),
        _0x10dd2d = _0x206c2e.focusCoordinator["hasBlockingChildFocusLease"](
          _0x206c2e.embedId,
          { ignoreOwners: _0x206c2e.runtimeFocusOwners },
        );
      _0x206c2e.floatingActiveService["getStage"](_0x206c2e.embedId) !==
        "inactive" &&
        (!_0x39c996 ||
          _0x10dd2d ||
          Date.now() < _0x206c2e.ownedPointerInteractionUntil["current"] ||
          Date.now() < _0x206c2e.externalHostInteractionUntil["current"] ||
          _0x206c2e.interactionBoundaryService["hasRecentInteractionFor"](
            _0x206c2e.embedId,
            _0x5aa9cd,
          ) ||
          !Df(_0x39c996) ||
          _0x206c2e.container["contains"](_0x39c996) ||
          ((_0x11b204 = _0x206c2e.chrome) != null &&
            _0x11b204.contains(_0x39c996)) ||
          _0x39c996.closest(
            '[data-embed-floating-menu="true"], [data-embed-floating-menu-popup="true"], [data-embed-ribbon-override="true"], [data-embed-float-fullscreen-button="true"]',
          ) ||
          _0x206c2e.focusCoordinator["containsElement"](
            _0x206c2e.embedId,
            _0x39c996,
            _0x57c423,
          ) ||
          _0x206c2e.interactionBoundaryService["contains"](
            _0x206c2e.embedId,
            _0x39c996,
            _0x57c423,
          ) ||
          _0x206c2e.activationService["clearFloating"](
            _0x206c2e.embedId,
            _0x206c2e.hostUnitId,
          ));
    };
  return (
    document.addEventListener("pointerdown", _0x290983, true),
    document.addEventListener("focusin", _0x3e6dbf, true),
    _0x11d17f(() => {
      (document.removeEventListener("pointerdown", _0x290983, true),
        document.removeEventListener("focusin", _0x3e6dbf, true));
    })
  );
}
function Cf(_0x3f7c76) {
  let _0x2c488e,
    _0x3b6554 = () => {
      _0x2c488e = undefined;
    },
    _0xbd40e3 = (_0x161035) => {
      let _0x2d64be = wf(
        _0x3f7c76.embedModelService["getDescriptor"](
          _0x3f7c76.data["hostUnitId"],
          _0x3f7c76.data["embedId"],
        ),
        _0x3f7c76.data,
      );
      if (!(_0x2d64be != null && _0x2d64be.childUnitId)) return;
      let _0x495b7d = _0x161035.target;
      (_0x495b7d != null &&
        _0x495b7d.closest(
          "[data-embed-floating-menu=\x22true\x22],\x20[data-embed-floating-menu-popup=\x22true\x22],\x20[data-embed-ribbon-override=\x22true\x22],\x20[data-embed-float-fullscreen-button=\x22true\x22]",
        )) ||
        (_0x3f7c76.floatingActiveService["getStage"](
          _0x3f7c76.data["embedId"],
        ) !== "stage2" &&
          (_0x2c488e = {
            button: _0x161035.button ?? 0,
            dragStarted: false,
            moved: false,
            pointerId: _0x161035.pointerId,
            startedAt: Date.now(),
            startX: _0x161035.clientX,
            startY: _0x161035.clientY,
          }));
    },
    _0x2cc706 = (_0x54cdd4) => {
      if (
        !_0x2c488e ||
        _0x2c488e.pointerId !== _0x54cdd4.pointerId ||
        Math.hypot(
          _0x54cdd4.clientX - _0x2c488e.startX,
          _0x54cdd4.clientY - _0x2c488e.startY,
        ) <= 4
      )
        return;
      _0x2c488e.moved = true;
      let _0xa38b63 = Cu({
        interactionFlow: _0x3f7c76.interactionFlow,
        stage: _0x3f7c76.floatingActiveService["getStage"](
          _0x3f7c76.data["embedId"],
        ),
      });
      !_0x3f7c76.enableStage1BodyDrag ||
        _0x2c488e.dragStarted ||
        !_0xa38b63.allowHostBodyDrag ||
        ((_0x2c488e.dragStarted = true),
        document.dispatchEvent(
          new CustomEvent(af, {
            detail: {
              button: _0x2c488e.button,
              clientX: _0x2c488e.startX,
              clientY: _0x2c488e.startY,
              embedId: _0x3f7c76.data["embedId"],
              hostAnchorId: _0x3f7c76.data["hostAnchorId"],
              hostUnitId: _0x3f7c76.data["hostUnitId"],
              pointerId: _0x2c488e.pointerId,
            },
          }),
        ));
    },
    _0x398c1a = (_0x9a0978) => {
      let _0x3937f1 = _0x2c488e;
      if (
        ((_0x2c488e = undefined),
        !_0x3937f1 ||
          _0x3937f1.pointerId !== _0x9a0978.pointerId ||
          _0x3937f1.moved ||
          Date.now() - _0x3937f1.startedAt > 500)
      )
        return;
      let _0x3f1e1c = wf(
        _0x3f7c76.embedModelService["getDescriptor"](
          _0x3f7c76.data["hostUnitId"],
          _0x3f7c76.data["embedId"],
        ),
        _0x3f7c76.data,
      );
      if (!(_0x3f1e1c != null && _0x3f1e1c.childUnitId)) return;
      let _0x513dbe = _0x3f7c76.floatingActiveService["getStage"](
        _0x3f7c76.data["embedId"],
      );
      if (_0x513dbe !== "stage2") {
        if (_0x513dbe === "stage1") {
          _0x3f7c76.activationService["activateFloating"](_0x3f1e1c, "stage2", {
            portalContainer: _0x3f7c76.popupRoot,
          });
          return;
        }
        if (_0x3f7c76.interactionFlow === "doc-block") {
          (_0x3f7c76.acquireStage2SessionLease(),
            _0x3f7c76.activationService["activateFloating"](
              _0x3f1e1c,
              "stage2",
              { portalContainer: _0x3f7c76.popupRoot },
            ),
            _0x3f7c76.releaseStage2SessionLeaseIfActivationDoesNotStick());
          return;
        }
        _0x3f7c76.activationService["activateFloating"](_0x3f1e1c, "stage1");
      }
    };
  return (
    _0x3f7c76.gate["addEventListener"]("pointerdown", _0xbd40e3, true),
    _0x3f7c76.gate["addEventListener"]("pointermove", _0x2cc706, true),
    _0x3f7c76.gate["addEventListener"]("pointerup", _0x398c1a, true),
    _0x3f7c76.gate["addEventListener"]("pointercancel", _0x3b6554, true),
    _0x11d17f(() => {
      (_0x3f7c76.gate["removeEventListener"]("pointerdown", _0xbd40e3, true),
        _0x3f7c76.gate["removeEventListener"]("pointermove", _0x2cc706, true),
        _0x3f7c76.gate["removeEventListener"]("pointerup", _0x398c1a, true),
        _0x3f7c76.gate["removeEventListener"](
          "pointercancel",
          _0x3b6554,
          true,
        ));
    })
  );
}
function wf(_0x2ce6d1, _0x4323ee) {
  return !_0x2ce6d1 ||
    _0x2ce6d1.childUnitId ||
    !_0x4323ee.childUnitId ||
    _0x4323ee.childType == null
    ? _0x2ce6d1
    : {
        ..._0x2ce6d1,
        childType: _0x4323ee.childType,
        childUnitId: _0x4323ee.childUnitId,
      };
}
function Tf(_0x424029) {
  let _0x39208c = () => {
      let _0xe26a23 = _0x424029.liveRoot["ownerDocument"].activeElement;
      return (
        !!_0xe26a23 &&
        _0x424029
          .getRuntimeRoots()
          .some((_0x24b2f4) => _0x24b2f4.contains(_0xe26a23))
      );
    },
    _0x2aed42 = (_0x4aba90, _0x2ef63e = false, _0x57a4f0 = false) => {
      (_0x424029.data["embedId"] &&
        _0x424029.floatingActiveService["getStage"](
          _0x424029.data["embedId"],
        ) !== "stage2") ||
        (vf(_0x424029.data["childType"], _0x57a4f0) &&
          (_0x424029.focusCoordinator["hasBlockingChildFocusLease"](
            _0x424029.data["embedId"],
            { ignoreOwners: _0x424029.runtimeFocusOwners },
          ) ||
            (!_0x2ef63e && _0x39208c()) ||
            (_0x4aba90.hasAttribute("tabindex") || (_0x4aba90.tabIndex = -1),
            _0x4aba90.focus({ preventScroll: true }))));
    },
    _0x1d10c6 = (_0x5017a1) => {
      let _0x1f0135 = _0x424029.data["embedId"]
        ? _0x424029.floatingActiveService["getStage"](_0x424029.data["embedId"])
        : "inactive";
      if (_0x424029.data["embedId"] && _0x1f0135 !== "stage2") {
        if (
          _0x424029.interactionFlow !== "doc-block" ||
          !_0x424029.data["hostUnitId"]
        )
          return;
        let _0x31c0c1 = wf(
          _0x424029.embedModelService["getDescriptor"](
            _0x424029.data["hostUnitId"],
            _0x424029.data["embedId"],
          ),
          _0x424029.data,
        );
        if (!(_0x31c0c1 != null && _0x31c0c1.childUnitId)) return;
        (_0x424029.acquireStage2SessionLease(),
          _0x424029.activationService["activateFloating"](_0x31c0c1, "stage2", {
            portalContainer: _0x424029.popupRoot,
          }),
          _0x424029.releaseStage2SessionLeaseIfActivationDoesNotStick());
      }
      if (
        yf(_0x5017a1.target) ||
        _0x424029.focusCoordinator["hasBlockingChildFocusLease"](
          _0x424029.data["embedId"],
          { ignoreOwners: _0x424029.runtimeFocusOwners },
        )
      )
        return;
      if (_0x424029.data["hostUnitId"] && _0x424029.data["embedId"]) {
        let _0x19217d = wf(
          _0x424029.embedModelService["getDescriptor"](
            _0x424029.data["hostUnitId"],
            _0x424029.data["embedId"],
          ),
          _0x424029.data,
        );
        (_0x19217d == null ? undefined : _0x19217d.childUnitId) != null &&
          _0x19217d.childType != null &&
          _0x424029.activationService["focusFloatingRuntime"](_0x19217d);
      }
      let _0x2629cb = _f(_0x424029.getRuntimeRoots(), _0x5017a1.target);
      _0x2629cb && _0x2aed42(_0x2629cb, true, _0x5017a1.target === _0x2629cb);
    };
  return (
    _0x424029.liveRoot["addEventListener"]("pointerdown", _0x1d10c6, true),
    _0x11d17f(() =>
      _0x424029.liveRoot["removeEventListener"]("pointerdown", _0x1d10c6, true),
    )
  );
}
function Ef(_0x53d356) {
  let _0x5167fa = _0x53d356.liveRoot["ownerDocument"],
    _0x7cb0f7,
    _0x4de164 = () => {
      _0x7cb0f7 != null &&
        (globalThis.clearTimeout(_0x7cb0f7), (_0x7cb0f7 = undefined));
    },
    _0x419702 = () => {
      var _0x8b99a4;
      (_0x4de164(),
        (_0x8b99a4 = _0x53d356.pointerLease["current"]) == null ||
          _0x8b99a4.dispose(),
        (_0x53d356.pointerLease["current"] = undefined));
    },
    _0x40725d = () => {
      (globalThis.queueMicrotask(() => {
        _0x53d356.verticalScrollOwner["current"] = undefined;
      }),
        _0x4de164(),
        (_0x7cb0f7 = globalThis.setTimeout(() => {
          var _0x4f0526;
          ((_0x7cb0f7 = undefined),
            (_0x4f0526 = _0x53d356.pointerLease["current"]) == null ||
              _0x4f0526.dispose(),
            (_0x53d356.pointerLease["current"] = undefined));
        }, _0x53d356.graceMs)));
    },
    _0x7800b9 = (_0x527aa2) => {
      (_0x419702(),
        (_0x53d356.pointerLease["current"] = _0x53d356.focusCoordinator[
          "acquireLease"
        ]({
          childType: _0x53d356.data["childType"],
          childUnitId: _0x53d356.data["childUnitId"],
          embedId: _0x53d356.data["embedId"],
          hostUnitId: _0x53d356.data["hostUnitId"],
          owner: "runtime-pointer",
          role: _0x527aa2,
        })));
    },
    _0x4f34f9 = () => {
      _0x53d356.floatingActiveService["getStage"](_0x53d356.data["embedId"]) ===
        "stage2" && _0x7800b9("child-editor");
    },
    _0x1c0c07 = (_0x27e5b5) => {
      let _0x975e89 = _0x27e5b5.target,
        _0x4f3cd0 =
          (_0x975e89 instanceof Node &&
            _0x53d356.liveRoot["contains"](_0x975e89)) ||
          _0x53d356.focusCoordinator["containsElement"](
            _0x53d356.data["embedId"],
            _0x975e89,
            _0x27e5b5,
          ) ||
          _0x53d356.interactionBoundaryService["contains"](
            _0x53d356.data["embedId"],
            _0x975e89,
            _0x27e5b5,
          );
      _0x53d356.verticalScrollOwner["current"] = _0x4f3cd0 ? "child" : "host";
    },
    _0x450842 = (_0x32e9e4) => {
      if (
        _0x53d356.floatingActiveService["getStage"](
          _0x53d356.data["embedId"],
        ) !== "stage2" ||
        !(
          _0x53d356.focusCoordinator["containsElement"](
            _0x53d356.data["embedId"],
            _0x32e9e4.target,
            _0x32e9e4,
          ) ||
          _0x53d356.interactionBoundaryService["contains"](
            _0x53d356.data["embedId"],
            _0x32e9e4.target,
            _0x32e9e4,
          )
        )
      )
        return;
      _0x53d356.ownedPointerInteractionUntil["current"] =
        Date.now() + _0x53d356.graceMs;
      let _0x2cadaf = bf(_0x32e9e4.target) ?? "child-editor";
      _0x7800b9(
        _0x2cadaf === "runtime" ||
          _0x2cadaf === "child-session" ||
          _0x2cadaf === "floating-menu"
          ? "child-editor"
          : _0x2cadaf,
      );
    };
  return (
    _0x53d356.liveRoot["addEventListener"]("pointerdown", _0x4f34f9, true),
    _0x5167fa.addEventListener("pointerdown", _0x1c0c07, true),
    _0x5167fa.addEventListener("pointerdown", _0x450842, true),
    _0x5167fa.addEventListener("pointerup", _0x40725d, true),
    _0x5167fa.addEventListener("pointercancel", _0x40725d, true),
    _0x11d17f(() => {
      (_0x53d356.liveRoot["removeEventListener"](
        "pointerdown",
        _0x4f34f9,
        true,
      ),
        _0x5167fa.removeEventListener("pointerdown", _0x1c0c07, true),
        _0x5167fa.removeEventListener("pointerdown", _0x450842, true),
        _0x5167fa.removeEventListener("pointerup", _0x40725d, true),
        _0x5167fa.removeEventListener("pointercancel", _0x40725d, true),
        (_0x53d356.verticalScrollOwner["current"] = undefined),
        _0x419702());
    })
  );
}
function Df(_0x59f953) {
  return (
    _0x59f953.id === "univer-doc-main-canvas" ||
    _0x59f953.id["startsWith"]("__editor_docs-") ||
    _0x59f953.id["startsWith"]("univer-doc-selection-container-docs-") ||
    _0x59f953.closest(
      '#univer-doc-main-canvas, [id^="__editor_docs-"], [id^="univer-doc-selection-container-docs-"]',
    ) != null
  );
}
function Of(_0x27890f, _0x158c88) {
  if (!_0x27890f || _0x158c88.length === 0) return;
  let _0x2102ad = _0x158c88[0].ownerDocument["activeElement"];
  _0x2102ad instanceof HTMLElement &&
    (_0x158c88.some((_0x4533a4) => _0x4533a4.contains(_0x2102ad)) ||
      _0x2102ad.closest(
        '[data-embed-interaction-boundary-owner="' + _0x27890f + "\x22]",
      ) != null) &&
    _0x2102ad.blur();
}
function kf(_0x2201c3) {
  let {
      ownerDocument: _0x27197e,
      restore: _0x353067,
      shouldRestore: _0x496662,
      timeoutMs: _0x1235cf = 1000,
    } = _0x2201c3,
    _0x3d9650,
    _0x19565c = (_0x2b0e61) => {
      _0x496662(_0x2b0e61.target) && _0x353067();
    },
    _0x9090be = () => {
      (_0x27197e.removeEventListener("focusin", _0x19565c, true),
        _0x27197e.removeEventListener("pointerdown", _0x9090be, true),
        _0x3d9650 != null &&
          (globalThis.clearTimeout(_0x3d9650), (_0x3d9650 = undefined)));
    };
  return (
    _0x27197e.addEventListener("focusin", _0x19565c, true),
    _0x27197e.addEventListener("pointerdown", _0x9090be, true),
    (_0x3d9650 = globalThis.setTimeout(_0x9090be, _0x1235cf)),
    _0x11d17f(_0x9090be)
  );
}
function Af(_0x35594d) {
  return (
    _0x35594d === "runtime" ||
    _0x35594d === "child-session" ||
    _0x35594d === "child-editor" ||
    _0x35594d === "child-popup" ||
    _0x35594d === "floating-menu"
  );
}
function jf(_0x415da5) {
  let {
      children: _0x57f2ab,
      placement: _0x4ff929 = "top",
      title: _0x125033,
    } = _0x415da5,
    [_0x54536f, _0x2e4ec0] = _0x4d3f85(false),
    _0x1428e8 = _0x344702(null),
    _0x2fb23d = _0x4af03(() => {
      _0x1428e8.current !== null &&
        (clearTimeout(_0x1428e8.current), (_0x1428e8.current = null));
    }, []),
    _0x21685d = (_0x26c316) => {
      (_0x2fb23d(),
        _0x26c316
          ? (_0x1428e8.current = setTimeout(() => _0x2e4ec0(true), 100))
          : _0x2e4ec0(false));
    };
  return (
    _0x51cbb8(() => _0x2fb23d, [_0x2fb23d]),
    _0x29e1d8(_0x1f379e, {
      title: _0x125033,
      placement: _0x4ff929,
      visible: _0x54536f,
      onVisibleChange: _0x21685d,
      children: _0x29e1d8("span", {
        className: "univer-inline-flex univer-max-w-full univer-items-center",
        onFocus: (_0x4f1452) => _0x4f1452.stopPropagation(),
        onPointerDown: () => _0x21685d(false),
        children: _0x57f2ab,
      }),
    })
  );
}
function Mf(_0x722991) {
  let {
      hostUnitId: _0x38cdee,
      embedId: _0x173b29,
      className: _0x4246f5,
      variant: _0x5e3498 = "float",
    } = _0x722991,
    _0x152cef = _0x344702(null),
    _0x4bb59f = _0x5ade04(_0x588de6),
    _0x3d97ac = _0x5ade04(dl),
    _0x5184e2 = _0x5ade04(gu),
    _0x10b0a8 = _0x5ade04(_0x11dce0).t("embed-ui.fullscreen.enter"),
    _0x1eeced = _0x4af03(
      (_0x204bc0) => {
        (_0x204bc0.preventDefault(),
          _0x204bc0.stopPropagation(),
          !(!_0x38cdee || !_0x173b29) &&
            Nf({
              hostUnitId: _0x38cdee,
              embedId: _0x173b29,
              activationService: _0x3d97ac,
              embedModelService: _0x4bb59f,
              fullscreenService: _0x5184e2,
            }));
      },
      [_0x3d97ac, _0x173b29, _0x4bb59f, _0x5184e2, _0x38cdee],
    );
  return (
    _0x51cbb8(() => {
      let _0x3d8124 = _0x152cef.current;
      if (!_0x3d8124) return;
      let _0x8cd790 = (_0x53ab15) => {
        _0x53ab15.stopPropagation();
      };
      return (
        _0x3d8124.addEventListener("pointerdown", _0x8cd790),
        _0x3d8124.addEventListener("click", _0x1eeced),
        () => {
          (_0x3d8124.removeEventListener("pointerdown", _0x8cd790),
            _0x3d8124.removeEventListener("click", _0x1eeced));
        }
      );
    }, [_0x1eeced, _0x5e3498]),
    _0x5e3498 === "menu"
      ? _0x29e1d8(jf, {
          title: _0x10b0a8,
          children: _0x29e1d8(_0x43385d, {
            ref: _0x152cef,
            type: "button",
            size: "small",
            variant: "ghost",
            className: _0x228d07("univer-size-6 univer-p-0", _0x4246f5),
            "aria-label": _0x10b0a8,
            children: _0x29e1d8(_0x166709, {}),
          }),
        })
      : _0x29e1d8("button", {
          ref: _0x152cef,
          type: "button",
          className: _0x228d07(
            "univer-absolute univer-right-2 univer-top-2 univer-z-10 univer-inline-flex univer-size-8 univer-cursor-pointer univer-appearance-none univer-items-center univer-justify-center univer-rounded-md univer-border-0 univer-bg-transparent univer-p-0 univer-text-white univer-opacity-0 univer-transition-opacity univer-duration-150 before:univer-absolute before:univer-inset-0 before:univer-rounded-md before:univer-bg-primary-600 before:univer-opacity-[0.45] before:univer-transition-opacity before:univer-duration-150 before:univer-content-[''] hover:before:univer-opacity-60 focus-visible:univer-opacity-100 focus-visible:univer-outline-none focus-visible:univer-ring-2 focus-visible:univer-ring-primary-600 dark:!univer-text-gray-900",
            _0x4246f5,
          ),
          "data-embed-float-fullscreen-button": "true",
          title: _0x10b0a8,
          "aria-label": _0x10b0a8,
          children: _0x29e1d8(_0x166709, {
            className:
              "univer-relative univer-z-10 univer-size-[18px] univer-drop-shadow-sm",
            "aria-hidden": "true",
          }),
        })
  );
}
function Nf(_0x1eb97e) {
  var _0x287454;
  let _0x4b1606 = _0x1eb97e.embedModelService["getDescriptor"](
    _0x1eb97e.hostUnitId,
    _0x1eb97e.embedId,
  );
  return !(_0x4b1606 != null && _0x4b1606.childUnitId) ||
    _0x4b1606.childType == null
    ? false
    : ((_0x287454 = _0x1eb97e.activationService) == null ||
        _0x287454.clearFloating(_0x1eb97e.embedId, _0x1eb97e.hostUnitId),
      _0x1eb97e.fullscreenService["enter"](_0x4b1606),
      true);
}
const Pf = "stage2-runtime",
  Ff = "doc-block-stage2-runtime",
  If = [Pf, Ff];
function Lf(_0x2d0732) {
  var _0x4669c4, _0x42b84c, _0x44cea9;
  let {
      data: _0x5c8229,
      deferInactiveFloatingChrome: _0x5f48c3,
      docsCustomBlockLayout: _0xda08b8,
      enableStage1BodyDrag: _0x3698f6,
      floatingChromeZIndex: _0x19c893,
      hostFloatDomLayout$: _0x5800a5,
      initialStage: _0x56c42e,
      interactionFlow: _0x4e88e9 = "floating-stage",
      isExternalHostInteraction: _0x2ecb6e,
      onHostWheel: _0x260342,
      onRuntimeStageEnter: _0x378d15,
      onRuntimeStageExit: _0x53fdcd,
      resolveHostWheelGestureRoot: _0x341c5b,
      syncHostVerticalScroll: _0x449d92,
    } = _0x2d0732,
    _0x4ab55f = _0x344702(null),
    _0x223fb8 = _0x344702(null),
    _0x5539c3 = _0x344702(null),
    _0x1a4a10 = _0x344702(null),
    _0x37b19d = _0x344702(null),
    _0x238e24 = _0x344702(null),
    _0x43787f = _0x344702(null),
    _0x552883 = _0x344702(null),
    _0x1bd580 = _0x344702(null),
    _0x3db6c0 = _0x5ade04(_0x588de6),
    _0x3ee068 = _0x5ade04(Ic),
    _0x553376 = _0x5ade04(xs),
    _0x38046d = _0x5ade04(dl),
    _0x2b56fa = _0x5ade04(cd),
    _0x511104 = _0x5ade04(ld),
    _0x59ca47 = _0x5ade04(gu),
    _0x3bd616 = _0x5ade04(Es),
    _0x3b1783 = _0x5ade04(cl),
    _0x263415 = _0x5ade04(ud),
    _0x1cfd90 = _0x5ade04(wd),
    _0x38f0ae = _0x5ade04(Cd),
    _0xa9b798 = _0x5ade04(X),
    _0x2e2994 = _0x5ade04(hd),
    _0x3b8251 = _0x5ade04(_0x42e186),
    _0x314c7d = _0x5ade04(_0x3e617f),
    _0x26b294 = _0x5ade04(_0x1cdf34),
    _0x9df7e7 = Td(_0x5c8229),
    _0x113ec1 =
      _0xda08b8 != null && _0xda08b8.sheetLike ? _0xda08b8 : undefined,
    _0x366f19 = _0x113ec1 == null ? undefined : _0x113ec1.contentWidth,
    _0x141a67 = _0x113ec1 == null ? undefined : _0x113ec1.pageContentWidth,
    _0x58ff49 = (_0x113ec1 == null ? undefined : _0x113ec1.viewScale) ?? 1,
    [_0xffce66, _0x255769] = _0x4d3f85(0),
    [_0x2b1c79, _0x47796e] = _0x4d3f85(0),
    _0x2ccdca = _0x113ec1 ? Md(_0x113ec1) : undefined,
    _0x82a70 = Math.min(
      _0x2b1c79,
      (_0x2ccdca == null ? undefined : _0x2ccdca.maxExpansion) ?? 0,
    ),
    _0x167a30 = _0xe46a3c(
      () =>
        _0x553376.active$["pipe"](
          _0xbab8f3(() =>
            _0x9df7e7 != null && _0x9df7e7.embedId
              ? _0x553376.getStage(_0x9df7e7.embedId)
              : "inactive",
          ),
        ),
      _0x56c42e ??
        (_0x9df7e7 != null && _0x9df7e7.embedId
          ? _0x553376.getStage(_0x9df7e7.embedId)
          : "inactive"),
      false,
      [_0x9df7e7 == null ? undefined : _0x9df7e7.embedId, _0x553376],
    ),
    _0x36ed49 = _0x344702(_0x167a30),
    _0x28516b = _0x344702(false),
    _0x2f9dd9 = _0x344702(undefined),
    _0x5f4e13 = _0x344702(undefined),
    _0x354035 = _0x344702(undefined),
    _0x276dd5 = _0x344702(undefined),
    _0xc92b7e = _0x344702(undefined),
    _0xac18e5 = _0x344702(0),
    _0x3d2071 = _0x344702(undefined),
    _0x1dbf0b = _0x344702(false),
    _0x37e675 = _0x344702(false),
    _0x56a0cf = _0x344702(_0x82a70),
    _0x238489 = _0x344702(_0x2ccdca),
    _0x2ce488 = _0x344702(_0x58ff49),
    _0x56434f = _0x344702(0),
    _0x4d245e = _0x344702(0),
    _0x252279 = _0x344702([]),
    _0x12e935 = _0x344702(_0x167a30);
  ((_0x12e935.current = _0x167a30),
    (_0x56a0cf.current = _0x82a70),
    (_0x238489.current = _0x2ccdca),
    (_0x2ce488.current = _0x58ff49));
  let _0x5e66a6 = _0x4af03((_0x5d614e) => {
      let _0x395f3e = _0x238489.current;
      if (!_0x395f3e) return false;
      let _0x3f0f94 = _0x56a0cf.current,
        _0x1f7cdf = Nd(
          _0x3f0f94 + qu(_0x5d614e) / _0x2ce488.current,
          0,
          _0x395f3e.maxExpansion,
        );
      return _0x1f7cdf === _0x3f0f94
        ? false
        : ((_0x56a0cf.current = _0x1f7cdf), _0x47796e(_0x1f7cdf), true);
    }, []),
    _0x58df59 = _0x4af03(
      (_0x185ae7, _0x1d4cd6) =>
        vd(_0x185ae7, _0x1d4cd6, {
          commandService: _0x3b8251,
          univerInstanceService: _0x314c7d,
        })
          ? true
          : (_0x260342 == null
              ? undefined
              : _0x260342(_0x185ae7, _0x1d4cd6)) === true,
      [_0x3b8251, _0x260342, _0x314c7d],
    ),
    _0x563503 = _0x4af03(() => {
      var _0xfc759d;
      ((_0xfc759d = _0x5f4e13.current) == null || _0xfc759d.dispose(),
        (_0x5f4e13.current = undefined));
    }, []),
    _0x27f7e4 = _0x4af03(() => {
      var _0x1f5f4e, _0x5408fd;
      if (!(_0x9df7e7 != null && _0x9df7e7.embedId) || _0x5f4e13.current)
        return;
      let _0x4d4179 = _0x9df7e7.hostUnitId
          ? _0x3db6c0.getDescriptor(_0x9df7e7.hostUnitId, _0x9df7e7.embedId)
          : undefined,
        _0x2bc417 = Rf(_0x4d4179),
        _0x209e47 =
          _0x9df7e7.childUnitId ??
          (_0x4d4179 == null ? undefined : _0x4d4179.childUnitId) ??
          ((_0x1f5f4e = _0x2f9dd9.current) == null
            ? undefined
            : _0x1f5f4e.childUnitId) ??
          (_0x2bc417 == null ? undefined : _0x2bc417.childUnitId),
        _0x2c6331 =
          _0x9df7e7.childType ??
          (_0x4d4179 == null ? undefined : _0x4d4179.childType) ??
          ((_0x5408fd = _0x2f9dd9.current) == null
            ? undefined
            : _0x5408fd.childType) ??
          (_0x2bc417 == null ? undefined : _0x2bc417.childType);
      _0x5f4e13.current = _0xa9b798.acquireLease({
        embedId: _0x9df7e7.embedId,
        role: "child-session",
        owner: _0x4e88e9 === "doc-block" ? Ff : Pf,
        sessionMode: "child-keyboard",
        hostUnitId: _0x9df7e7.hostUnitId,
        childUnitId: _0x209e47,
        childType: _0x2c6331,
      });
    }, [
      _0x9df7e7 == null ? undefined : _0x9df7e7.childType,
      _0x9df7e7 == null ? undefined : _0x9df7e7.childUnitId,
      _0x9df7e7 == null ? undefined : _0x9df7e7.embedId,
      _0x9df7e7 == null ? undefined : _0x9df7e7.hostUnitId,
      _0x3db6c0,
      _0xa9b798,
      _0x4e88e9,
    ]),
    _0x2a9947 = _0x4af03(() => {
      if (!(_0x9df7e7 != null && _0x9df7e7.embedId)) return;
      let _0x1804c3 = _0x9df7e7.embedId;
      window.requestAnimationFrame(() => {
        _0x553376.getStage(_0x1804c3) !== "stage2" && _0x563503();
      });
    }, [
      _0x9df7e7 == null ? undefined : _0x9df7e7.embedId,
      _0x553376,
      _0x563503,
    ]),
    _0xeb6e86 =
      _0x9df7e7 != null && _0x9df7e7.hostUnitId
        ? _0x3db6c0.getDescriptor(_0x9df7e7.hostUnitId, _0x9df7e7.embedId)
        : undefined,
    _0x33f3ce = Rf(_0xeb6e86),
    _0x40819d =
      (_0x9df7e7 == null ? undefined : _0x9df7e7.childUnitId) ??
      (_0xeb6e86 == null ? undefined : _0xeb6e86.childUnitId) ??
      ((_0x4669c4 = _0x2f9dd9.current) == null
        ? undefined
        : _0x4669c4.childUnitId) ??
      (_0x33f3ce == null ? undefined : _0x33f3ce.childUnitId),
    _0x8ad810 =
      (_0x9df7e7 == null ? undefined : _0x9df7e7.childType) ??
      (_0xeb6e86 == null ? undefined : _0xeb6e86.childType) ??
      ((_0x42b84c = _0x2f9dd9.current) == null
        ? undefined
        : _0x42b84c.childType) ??
      (_0x33f3ce == null ? undefined : _0x33f3ce.childType),
    _0x39f131 =
      _0x8ad810 == null || (_0x44cea9 = _0x3ee068.get(_0x8ad810)) == null
        ? undefined
        : _0x44cea9.canvasRootClassName,
    _0x2a0446 = Tu(_0xeb6e86, _0x167a30);
  (_0x51cbb8(() => {
    let _0x5878b3 = _0x4ab55f.current;
    return () => {
      let _0x389de1 = _0x59ca47.getSession(),
        _0x3fccc6 =
          (_0x9df7e7 == null ? undefined : _0x9df7e7.embedId) &&
          (_0x389de1 == null ? undefined : _0x389de1.embedId) ===
            _0x9df7e7.embedId;
      _0x9df7e7 != null &&
        _0x9df7e7.embedId &&
        !(_0x5878b3 != null && _0x5878b3.isConnected) &&
        !_0x3fccc6 &&
        _0x553376.getStage(_0x9df7e7.embedId) !== "inactive" &&
        _0x38046d.clearFloating(_0x9df7e7.embedId, _0x9df7e7.hostUnitId);
    };
  }, [
    _0x38046d,
    _0x9df7e7 == null ? undefined : _0x9df7e7.embedId,
    _0x9df7e7 == null ? undefined : _0x9df7e7.hostUnitId,
    _0x553376,
    _0x59ca47,
  ]),
    _0x51cbb8(() => {
      if (!(
        !(_0x9df7e7 != null && _0x9df7e7.embedId) || _0x167a30 !== "stage2"
      ))
        return (_0x27f7e4(), _0x563503);
    }, [
      _0x27f7e4,
      _0x9df7e7 == null ? undefined : _0x9df7e7.embedId,
      _0x563503,
      _0x167a30,
    ]),
    _0x51cbb8(() => {
      let _0x4eb66d = _0x4ab55f.current,
        _0x26682a = xf(
          _0x26b294,
          _0xa9b798,
          _0x9df7e7 == null ? undefined : _0x9df7e7.embedId,
          _0x4eb66d,
          _0x167a30,
        );
      if (_0x26682a) return () => _0x26682a.dispose();
    }, [
      _0x9df7e7 == null ? undefined : _0x9df7e7.embedId,
      _0xa9b798,
      _0x26b294,
      _0x167a30,
    ]),
    _0x51cbb8(() => {
      let _0x21ca3a = _0x1a4a10.current;
      if (
        _0x167a30 !== "stage2" ||
        _0x8ad810 !== _0x513c12.UNIVER_BASE ||
        !(_0x9df7e7 != null && _0x9df7e7.embedId) ||
        !_0x21ca3a
      )
        return;
      let _0x2b6ed2 = () => hl(_0x9df7e7.embedId, _0x21ca3a);
      _0x2b6ed2();
      let _0x492ccf = window.requestAnimationFrame(_0x2b6ed2);
      return () => window.cancelAnimationFrame(_0x492ccf);
    }, [
      _0x9df7e7 == null ? undefined : _0x9df7e7.embedId,
      _0x8ad810,
      _0x167a30,
    ]),
    _0x51cbb8(() => {
      let _0x593d17 = _0x36ed49.current;
      _0x36ed49.current = _0x167a30;
      let _0x50a944 =
        _0x593d17 !== _0x167a30 ||
        (!_0x28516b.current && _0x167a30 !== "inactive");
      ((_0x28516b.current = true),
        _0x50a944 &&
          (_0x378d15 == null || _0x378d15(_0x167a30),
          _0x511104.invalidate({
            embedId: _0x9df7e7 == null ? undefined : _0x9df7e7.embedId,
            reason: "stage-change",
          })),
        _0x593d17 === "stage2" &&
          _0x167a30 !== "stage2" &&
          (Of(
            _0x9df7e7 == null ? undefined : _0x9df7e7.embedId,
            of(
              _0x1a4a10.current,
              _0x37b19d.current,
              _0x238e24.current,
              _0x552883.current,
              _0x1bd580.current,
            ),
          ),
          _0x38046d.clearFloating(
            _0x9df7e7 == null ? undefined : _0x9df7e7.embedId,
            _0x9df7e7 == null ? undefined : _0x9df7e7.hostUnitId,
          ),
          _0x53fdcd == null || _0x53fdcd()));
    }, [
      _0x38046d,
      _0x9df7e7 == null ? undefined : _0x9df7e7.embedId,
      _0x9df7e7 == null ? undefined : _0x9df7e7.hostUnitId,
      _0x511104,
      _0x378d15,
      _0x53fdcd,
      _0x167a30,
    ]),
    _0x51cbb8(() => {
      if (
        _0x56c42e !== "stage2" ||
        !(_0x9df7e7 != null && _0x9df7e7.embedId) ||
        !_0x9df7e7.hostUnitId
      )
        return;
      let _0x2f7f5e = _0x3db6c0.getDescriptor(
        _0x9df7e7.hostUnitId,
        _0x9df7e7.embedId,
      );
      _0x2f7f5e != null &&
        _0x2f7f5e.childUnitId &&
        _0x553376.activate(
          {
            hostUnitId: _0x9df7e7.hostUnitId,
            embedId: _0x9df7e7.embedId,
            childUnitId: _0x2f7f5e.childUnitId,
          },
          "stage2",
        );
    }, [
      _0x9df7e7 == null ? undefined : _0x9df7e7.embedId,
      _0x9df7e7 == null ? undefined : _0x9df7e7.hostUnitId,
      _0x3db6c0,
      _0x553376,
      _0x56c42e,
    ]),
    _0x51cbb8(() => {
      let _0x4d0bfc = _0x1a4a10.current,
        _0x141536 = _0x37b19d.current,
        _0x2c5693 = _0x238e24.current,
        _0x2d7377 = _0x552883.current,
        _0xea8b9b = _0x1bd580.current;
      if (!_0x4d0bfc || !_0x141536 || !_0x2c5693 || !_0x2d7377 || !_0xea8b9b)
        return;
      let _0xc38a27 =
          _0x9df7e7 != null && _0x9df7e7.hostUnitId
            ? _0x3db6c0.getDescriptor(_0x9df7e7.hostUnitId, _0x9df7e7.embedId)
            : undefined,
        _0x4a6bf5 = _0xc38a27 ? zf(_0xc38a27) : undefined;
      if (!_0xc38a27 || !_0x4a6bf5 || _0x2a0446 === "deferred") return;
      let _0x14157c = false,
        _0x17e338;
      return (
        _0x263415
          .materializeDescriptor({ descriptor: _0xc38a27 })
          .then(async (_0x55780) => {
            var _0x13d7c6;
            if (_0x14157c) return;
            let _0x254b59 = _0x3b1783.mountIntoHostElement(
              _0x55780,
              _0x4d0bfc,
              {
                content: _0x141536,
                canvas: _0x2c5693,
                overlay: _0x2d7377,
                popup: _0xea8b9b,
              },
            );
            _0x17e338 = _0x55780.embedId;
            let _0x4804d4 = _0x254b59 == null ? undefined : _0x254b59.context;
            _0x2f9dd9.current = _0x4804d4;
            let _0x47a96b =
              _0x9df7e7 != null && _0x9df7e7.embedId
                ? (_0x13d7c6 = _0x2b56fa.getPreview(_0x9df7e7.embedId)) == null
                  ? undefined
                  : _0x13d7c6.viewState
                : undefined;
            _0x4804d4 &&
              _0x47a96b != null &&
              (await _0x2b56fa.restoreViewState(_0x4804d4, _0x47a96b));
          })
          .catch((_0x451f8c) => {
            queueMicrotask(() => {
              throw _0x451f8c;
            });
          }),
        () => {
          var _0x2bed93;
          ((_0x14157c = true),
            _0x17e338 &&
              ((_0x2bed93 = _0x2f9dd9.current) == null
                ? undefined
                : _0x2bed93.embedId) === _0x17e338 &&
              (_0x2f9dd9.current = undefined),
            _0x3b1783.unmount(_0xc38a27.embedId));
        }
      );
    }, [
      _0x9df7e7 == null ? undefined : _0x9df7e7.embedId,
      _0x9df7e7 == null ? undefined : _0x9df7e7.hostUnitId,
      _0x3db6c0,
      _0x3b1783,
      _0xffce66,
      _0x2b56fa,
      _0x263415,
      _0x2a0446,
    ]),
    _0x51cbb8(() => {
      if (!(_0x9df7e7 != null && _0x9df7e7.embedId)) return;
      let _0x423a70 = _0x9df7e7.embedId,
        _0x511b00 = [];
      [
        { element: _0x1a4a10.current, role: "runtime" },
        { element: _0x37b19d.current, role: "runtime" },
        { element: _0x238e24.current, role: "runtime" },
      ].forEach((_0xeeca30) => {
        let _0x5b40bb = _0xeeca30.element;
        _0x5b40bb &&
          _0x511b00.push({ element: _0x5b40bb, role: _0xeeca30.role });
      });
      let _0x19ac57 = _0x511b00.flatMap(
          ({ element: _0x8b263d, role: _0x3dab21 }) => [
            _0x3bd616.registerRoot(_0x423a70, _0x8b263d, _0x40819d),
            _0xa9b798.registerElement({
              embedId: _0x423a70,
              role: _0x3dab21,
              element: _0x8b263d,
            }),
          ],
        ),
        _0x38b8a8 = _0x43787f.current;
      return (
        _0x38b8a8 &&
          _0x19ac57.push(
            _0x3bd616.registerRoot(_0x423a70, _0x38b8a8, _0x40819d),
          ),
        _0x167a30 === "stage2" &&
          [
            { element: _0x38b8a8, role: "floating-menu" },
            { element: _0x552883.current, role: "floating-menu" },
            { element: _0x1bd580.current, role: "child-popup" },
          ].forEach((_0x32f8d7) => {
            _0x32f8d7.element &&
              _0x19ac57.push(
                _0xa9b798.registerElement({
                  embedId: _0x423a70,
                  role: _0x32f8d7.role,
                  element: _0x32f8d7.element,
                }),
              );
          }),
        () => _0x19ac57.forEach((_0x3380e7) => _0x3380e7.dispose())
      );
    }, [
      _0x9df7e7 == null ? undefined : _0x9df7e7.embedId,
      _0xa9b798,
      _0x3bd616,
      _0x40819d,
      _0x167a30,
    ]),
    _0x51cbb8(() => {
      var _0x23c944, _0x57462b;
      if (!(_0x9df7e7 != null && _0x9df7e7.embedId) || _0x167a30 !== "stage2")
        return;
      let _0x5c6e97 =
          ((_0x23c944 = _0x4ab55f.current) == null
            ? undefined
            : _0x23c944.ownerDocument) ??
          ((_0x57462b = _0x1a4a10.current) == null
            ? undefined
            : _0x57462b.ownerDocument) ??
          (typeof document > "u" ? undefined : document),
        _0x331f50 = _0x3bd616.activatePortalScope(
          _0x9df7e7.embedId,
          _0x5c6e97,
          { includeAppShellEditorPortal: _0x8ad810 === _0x513c12.UNIVER_SHEET },
        );
      return () => {
        (_0x12e935.current !== "stage2" &&
          _0x3bd616.closeOwnedFloatingSurfaces(_0x9df7e7.embedId, _0x5c6e97),
          _0x331f50.dispose());
      };
    }, [
      _0x9df7e7 == null ? undefined : _0x9df7e7.embedId,
      _0x3bd616,
      _0x8ad810,
      _0x167a30,
    ]),
    _0x51cbb8(() => {
      var _0x30622e, _0x24af3e;
      if (!(_0x9df7e7 != null && _0x9df7e7.embedId) || _0x167a30 !== "stage2")
        return;
      let _0x33ef9c =
          ((_0x30622e = _0x4ab55f.current) == null
            ? undefined
            : _0x30622e.ownerDocument) ??
          ((_0x24af3e = _0x1a4a10.current) == null
            ? undefined
            : _0x24af3e.ownerDocument) ??
          (typeof document > "u" ? undefined : document),
        _0x7aaa6d =
          _0x33ef9c == null
            ? undefined
            : _0x33ef9c.querySelector("[data-u-comp=\x22headerbar\x22]");
      if (!_0x7aaa6d) return;
      let _0x11c6bf = [
        _0x3bd616.registerRoot(_0x9df7e7.embedId, _0x7aaa6d, _0x40819d),
        _0xa9b798.registerElement({
          embedId: _0x9df7e7.embedId,
          role: "floating-menu",
          element: _0x7aaa6d,
        }),
      ];
      return () => _0x11c6bf.forEach((_0x2ac7a7) => _0x2ac7a7.dispose());
    }, [
      _0x9df7e7 == null ? undefined : _0x9df7e7.embedId,
      _0xa9b798,
      _0x3bd616,
      _0x40819d,
      _0x167a30,
    ]),
    _0x51cbb8(() => {
      let _0x3d616d = _0x4ab55f.current,
        _0x4b48a1 =
          _0x3d616d == null
            ? undefined
            : _0x3d616d.querySelector(
                '[data-u-comp="embed-float-dom-content"]',
              );
      if (!(_0x9df7e7 != null && _0x9df7e7.embedId) || !_0x3d616d) return;
      let _0x72d35f = _0x9df7e7.hostUnitId
          ? _0x3db6c0.getDescriptor(_0x9df7e7.hostUnitId, _0x9df7e7.embedId)
          : undefined,
        _0x44c3e9 = _0x511104.register({
          embedId: _0x9df7e7.embedId,
          childUnitId: _0x72d35f == null ? undefined : _0x72d35f.childUnitId,
          root: _0x3d616d,
          viewport: _0x4b48a1,
          contentRoot: _0x37b19d.current,
        });
      return () => _0x44c3e9.dispose();
    }, [
      _0x9df7e7 == null ? undefined : _0x9df7e7.embedId,
      _0x9df7e7 == null ? undefined : _0x9df7e7.hostUnitId,
      _0x3db6c0,
      _0x511104,
    ]),
    _0x51cbb8(() => {
      var _0x20449e, _0x9e4696;
      let _0x503bee = _0x9df7e7 == null ? undefined : _0x9df7e7.embedId,
        _0x5d50a3 = _0x9df7e7 == null ? undefined : _0x9df7e7.hostUnitId;
      if (!_0x503bee || !_0x5d50a3) return;
      let _0x289f59 =
        ((_0x20449e = _0x4ab55f.current) == null
          ? undefined
          : _0x20449e.ownerDocument) ??
        ((_0x9e4696 = _0x1a4a10.current) == null
          ? undefined
          : _0x9e4696.ownerDocument) ??
        (typeof document > "u" ? undefined : document);
      if (!_0x289f59) return;
      let _0x41813c = (_0x16ee37) => {
          let _0x4d6903 = _0x16ee37.params;
          return (
            _0x16ee37.id === _0x162e8b.id &&
            (_0x4d6903 == null ? undefined : _0x4d6903.embedId) === _0x503bee &&
            _0x4d6903.hostUnitId === _0x5d50a3
          );
        },
        _0x3cb2b3 = _0x3b8251.beforeCommandExecuted((_0x5e2e01) => {
          if (
            !_0x41813c(_0x5e2e01) ||
            _0x553376.getStage(_0x503bee) !== "stage2"
          )
            return;
          let _0x5bed20 = _0x289f59.activeElement;
          if (
            !(_0x5bed20 instanceof HTMLElement) ||
            !_0x5bed20.id["startsWith"]("__editor_") ||
            !_0x5bed20.id["endsWith"]("SHAPE_TEXT") ||
            !_0xa9b798.containsElement(_0x503bee, _0x5bed20)
          )
            return;
          let _0x6e8b8d = _0x5bed20.id["slice"](9);
          kf({
            ownerDocument: _0x289f59,
            restore: () => {
              var _0x38ebda;
              let _0x3753af =
                (_0x38ebda = _0x3b1783.getSession(_0x503bee)) == null ||
                (_0x38ebda = _0x38ebda.context) == null
                  ? undefined
                  : _0x38ebda.runtimeScope["injector"];
              if (_0x3753af != null && _0x3753af.has(_0x189d1d)) {
                let _0x27574a = _0x3753af.get(_0x189d1d);
                _0x27574a.focus(_0x6e8b8d);
                let _0x3ec966 = _0x27574a.getEditor(_0x6e8b8d);
                if (_0x3ec966) {
                  _0x3ec966.focus();
                  return;
                }
              }
              let _0x4a0dd4 = _0x289f59.getElementById(_0x5bed20.id);
              _0x4a0dd4 instanceof HTMLElement &&
                _0x4a0dd4.focus({ preventScroll: true });
            },
            shouldRestore: (_0x23477d) =>
              _0x23477d instanceof HTMLElement &&
              _0x23477d.id["endsWith"]("DOCS_NORMAL") &&
              _0xa9b798.containsElement(_0x503bee, _0x23477d),
          });
        });
      return () => _0x3cb2b3.dispose();
    }, [
      _0x3b8251,
      _0x9df7e7 == null ? undefined : _0x9df7e7.embedId,
      _0x9df7e7 == null ? undefined : _0x9df7e7.hostUnitId,
      _0x553376,
      _0xa9b798,
      _0x3b1783,
    ]),
    _0x51cbb8(() => {
      if (!(_0x9df7e7 != null && _0x9df7e7.embedId)) return;
      let _0x53daec = _0x59ca47.exited$["subscribe"]((_0x52fa9d) => {
        _0x52fa9d.embedId === _0x9df7e7.embedId &&
          (_0x3b1783.unmount(_0x9df7e7.embedId),
          _0x38046d.clearFloating(_0x9df7e7.embedId, _0x9df7e7.hostUnitId),
          _0x276dd5.current != null &&
            (window.cancelAnimationFrame(_0x276dd5.current),
            (_0x276dd5.current = undefined)),
          _0xc92b7e.current != null &&
            globalThis.clearTimeout(_0xc92b7e.current),
          (_0xc92b7e.current = globalThis.setTimeout(() => {
            ((_0xc92b7e.current = undefined),
              (_0x276dd5.current = window.requestAnimationFrame(() => {
                ((_0x276dd5.current = undefined),
                  _0x38046d.clearFloating(
                    _0x9df7e7.embedId,
                    _0x9df7e7.hostUnitId,
                  ),
                  _0x255769((_0x12354b) => _0x12354b + 1));
              })));
          }, 0)));
      });
      return () => {
        (_0x53daec.unsubscribe(),
          _0xc92b7e.current != null &&
            (globalThis.clearTimeout(_0xc92b7e.current),
            (_0xc92b7e.current = undefined)),
          _0x276dd5.current != null &&
            (window.cancelAnimationFrame(_0x276dd5.current),
            (_0x276dd5.current = undefined)));
      };
    }, [
      _0x38046d,
      _0x9df7e7 == null ? undefined : _0x9df7e7.embedId,
      _0x9df7e7 == null ? undefined : _0x9df7e7.hostUnitId,
      _0x59ca47,
      _0x3b1783,
    ]),
    _0x51cbb8(() => {
      let _0x5ecffa = _0x4ab55f.current,
        _0x5e5899 = _0x43787f.current;
      if (!_0x5ecffa || !_0x5e5899 || typeof document > "u") return;
      let _0x493bf6 = Id({
        chrome: _0x5e5899,
        container: _0x5ecffa,
        deferInactive: _0x5f48c3,
        embedId: _0x9df7e7 == null ? undefined : _0x9df7e7.embedId,
        geometryService: _0x511104,
        hostLayout$: _0x5800a5,
        stage: _0x167a30,
        docsSheetLikeLayout:
          _0x366f19 != null && _0x141a67 != null
            ? { contentWidth: _0x366f19, pageContentWidth: _0x141a67 }
            : undefined,
      });
      return () => _0x493bf6.dispose();
    }, [
      _0x9df7e7 == null ? undefined : _0x9df7e7.embedId,
      _0x5f48c3,
      _0x366f19,
      _0x141a67,
      _0x511104,
      _0x5800a5,
      _0x167a30,
    ]),
    _0x51cbb8(() => {
      let _0x268a14 = _0x4ab55f.current,
        _0x1ca0a3 = _0x43787f.current;
      if (!_0x268a14) return;
      let _0x36f35c = _0x268a14.closest(
          '[data-embed-docs-custom-block="true"]',
        ),
        _0x3c425b = _0x36f35c == null ? undefined : _0x36f35c.parentElement;
      return sf(
        _0x268a14,
        _0x1ca0a3,
        (_0x365457) => {
          let _0x2ffd27 = _0x2f9dd9.current;
          return (
            (_0x2ffd27
              ? (_0x260342 == null
                  ? undefined
                  : _0x260342(_0x365457, _0x2ffd27)) === true
              : false) || Hu(_0x268a14, _0x365457)
          );
        },
        (_0x3c425b == null ? undefined : _0x3c425b.id) ===
          (_0x9df7e7 == null ? undefined : _0x9df7e7.hostAnchorId)
          ? _0x3c425b
          : null,
        _0x8ad810,
      );
    }, [
      _0x9df7e7 == null ? undefined : _0x9df7e7.hostAnchorId,
      _0x260342,
      _0x8ad810,
    ]),
    _0x51cbb8(() => {
      var _0x103e4f;
      let _0x35776d = _0x4ab55f.current,
        _0x29232c =
          (_0x35776d == null
            ? undefined
            : _0x35776d.querySelector(
                "[data-embed-float-fullscreen-button]",
              )) ??
          ((_0x103e4f = _0x43787f.current) == null
            ? undefined
            : _0x103e4f.querySelector("[data-embed-float-fullscreen-button]"));
      if (!(!_0x35776d || !_0x29232c)) return gf(_0x35776d, _0x29232c);
    }, []),
    _0x51cbb8(() => {
      let _0x3dd3a7 = _0x4ab55f.current;
      if (
        !(_0x9df7e7 != null && _0x9df7e7.embedId) ||
        !_0x3dd3a7 ||
        typeof document > "u"
      )
        return;
      let _0x38eae4 = Sf({
        activationService: _0x38046d,
        chrome: _0x43787f.current,
        container: _0x3dd3a7,
        embedId: _0x9df7e7.embedId,
        externalHostInteractionUntil: _0x56434f,
        floatingActiveService: _0x553376,
        focusCoordinator: _0xa9b798,
        graceMs: 650,
        hostUnitId: _0x9df7e7.hostUnitId,
        interactionBoundaryService: _0x3bd616,
        isExternalHostInteraction: _0x2ecb6e,
        ownedPointerInteractionUntil: _0x4d245e,
        runtimeFocusOwners: If,
      });
      return () => _0x38eae4.dispose();
    }, [
      _0x38046d,
      _0x9df7e7 == null ? undefined : _0x9df7e7.embedId,
      _0x9df7e7 == null ? undefined : _0x9df7e7.hostUnitId,
      _0x553376,
      _0xa9b798,
      _0x3bd616,
      _0x2ecb6e,
    ]),
    _0x51cbb8(() => {
      var _0x2e82df;
      _0x167a30 !== "stage2" &&
        ((_0x2e82df = _0x354035.current) == null || _0x2e82df.dispose(),
        (_0x354035.current = undefined),
        Of(
          _0x9df7e7 == null ? undefined : _0x9df7e7.embedId,
          of(
            _0x1a4a10.current,
            _0x37b19d.current,
            _0x238e24.current,
            _0x552883.current,
            _0x1bd580.current,
          ),
        ));
    }, [_0x9df7e7 == null ? undefined : _0x9df7e7.embedId, _0x167a30]),
    _0x51cbb8(() => {
      let _0x3529ab = _0x5539c3.current;
      if (
        !_0x3529ab ||
        !(_0x9df7e7 != null && _0x9df7e7.embedId) ||
        !_0x9df7e7.hostUnitId
      )
        return;
      let _0x54f61e = Cf({
        acquireStage2SessionLease: _0x27f7e4,
        activationService: _0x38046d,
        data: {
          childType: _0x8ad810,
          childUnitId: _0x40819d,
          embedId: _0x9df7e7.embedId,
          hostAnchorId: _0x9df7e7.hostAnchorId,
          hostUnitId: _0x9df7e7.hostUnitId,
        },
        embedModelService: _0x3db6c0,
        enableStage1BodyDrag: _0x3698f6,
        floatingActiveService: _0x553376,
        gate: _0x3529ab,
        interactionFlow: _0x4e88e9,
        popupRoot: _0x1bd580.current,
        releaseStage2SessionLeaseIfActivationDoesNotStick: _0x2a9947,
      });
      return () => _0x54f61e.dispose();
    }, [
      _0x27f7e4,
      _0x38046d,
      _0x9df7e7 == null ? undefined : _0x9df7e7.embedId,
      _0x9df7e7 == null ? undefined : _0x9df7e7.hostAnchorId,
      _0x9df7e7 == null ? undefined : _0x9df7e7.hostUnitId,
      _0x3db6c0,
      _0x3698f6,
      _0x553376,
      _0x4e88e9,
      _0x2a9947,
      _0x8ad810,
      _0x40819d,
    ]),
    _0x51cbb8(() => {
      let _0x4821a8 = _0x4ab55f.current;
      if (!_0x4821a8 || !_0x341c5b) return;
      let _0x426953 = _0x341c5b(_0x4821a8);
      if (!_0x426953) return;
      let _0x458680 = _0x2e2994.register(_0x426953, _0x4821a8);
      return () => _0x458680.dispose();
    }, [_0x2e2994, _0x341c5b]),
    _0x51cbb8(() => {
      let _0x330d46 = _0x4ab55f.current,
        _0x55ecb7 = _0x5539c3.current,
        _0x442ddc = _0x1a4a10.current;
      if (!_0x330d46 || !_0x55ecb7 || !_0x442ddc) return;
      let _0x96fea3 = ju({
        container: _0x330d46,
        gate: _0x55ecb7,
        getChildContext: () => _0x2f9dd9.current,
        getStage: () =>
          _0x9df7e7 != null && _0x9df7e7.embedId
            ? _0x553376.getStage(_0x9df7e7.embedId)
            : "inactive",
        hostScrollOffset: _0xac18e5,
        hostWheelGestureService: _0x2e2994,
        invalidate: (_0x114886) =>
          qd(
            _0x511104,
            _0x9df7e7 == null ? undefined : _0x9df7e7.embedId,
            _0x114886,
            _0x252279,
          ),
        liveRoot: _0x442ddc,
        onHostWheel: _0x58df59,
        passiveViewportRegistry: _0x38f0ae,
        passiveWheelHandlerRegistry: _0x1cfd90,
        resizeDocsSheetLikeRendererByWheel: _0x5e66a6,
        routeHostGestures: !!_0x341c5b,
        syncHostVerticalScroll: _0x449d92,
        viewScale: _0x58ff49,
      });
      return () => _0x96fea3.dispose();
    }, [
      _0x9df7e7 == null ? undefined : _0x9df7e7.embedId,
      _0x58ff49,
      _0x553376,
      _0x511104,
      _0x2e2994,
      _0x38f0ae,
      _0x1cfd90,
      _0x5e66a6,
      _0x341c5b,
      _0x58df59,
      _0x449d92,
    ]),
    _0x51cbb8(
      () => () => {
        (_0x252279.current["forEach"]((_0xd032cf) =>
          window.cancelAnimationFrame(_0xd032cf),
        ),
          (_0x252279.current = []));
      },
      [],
    ),
    _0x51cbb8(() => {
      let _0x558476 = _0x1a4a10.current;
      if (!_0x558476) return;
      let _0x536a72 = Tf({
        acquireStage2SessionLease: _0x27f7e4,
        activationService: _0x38046d,
        data: {
          childType: _0x8ad810,
          childUnitId: _0x40819d,
          embedId: _0x9df7e7 == null ? undefined : _0x9df7e7.embedId,
          hostUnitId: _0x9df7e7 == null ? undefined : _0x9df7e7.hostUnitId,
        },
        embedModelService: _0x3db6c0,
        floatingActiveService: _0x553376,
        focusCoordinator: _0xa9b798,
        getRuntimeRoots: () =>
          of(
            _0x238e24.current,
            _0x37b19d.current,
            _0x552883.current,
            _0x1bd580.current,
            _0x1a4a10.current,
          ),
        interactionFlow: _0x4e88e9,
        liveRoot: _0x558476,
        popupRoot: _0x1bd580.current,
        releaseStage2SessionLeaseIfActivationDoesNotStick: _0x2a9947,
        runtimeFocusOwners: If,
      });
      return () => _0x536a72.dispose();
    }, [
      _0x27f7e4,
      _0x38046d,
      _0x9df7e7 == null ? undefined : _0x9df7e7.embedId,
      _0x9df7e7 == null ? undefined : _0x9df7e7.hostUnitId,
      _0x3db6c0,
      _0x553376,
      _0xa9b798,
      _0x4e88e9,
      _0x2a9947,
      _0x8ad810,
      _0x40819d,
    ]),
    _0x51cbb8(() => {
      let _0x367ce6 = _0x1a4a10.current;
      if (!_0x367ce6 || !(_0x9df7e7 != null && _0x9df7e7.embedId)) return;
      let _0x4fa8f0 = Ef({
        data: {
          childType: _0x9df7e7.childType,
          childUnitId: _0x9df7e7.childUnitId,
          embedId: _0x9df7e7.embedId,
          hostUnitId: _0x9df7e7.hostUnitId,
        },
        floatingActiveService: _0x553376,
        focusCoordinator: _0xa9b798,
        graceMs: 650,
        interactionBoundaryService: _0x3bd616,
        liveRoot: _0x367ce6,
        ownedPointerInteractionUntil: _0x4d245e,
        pointerLease: _0x354035,
        verticalScrollOwner: _0x3d2071,
      });
      return () => _0x4fa8f0.dispose();
    }, [
      _0x9df7e7 == null ? undefined : _0x9df7e7.childType,
      _0x9df7e7 == null ? undefined : _0x9df7e7.childUnitId,
      _0x9df7e7 == null ? undefined : _0x9df7e7.embedId,
      _0x9df7e7 == null ? undefined : _0x9df7e7.hostUnitId,
      _0x553376,
      _0xa9b798,
      _0x3bd616,
    ]),
    _0x51cbb8(() => {
      if (_0x167a30 !== "stage2" || _0x4e88e9 !== "doc-block") return;
      let _0x38a717 = _0x1a4a10.current;
      if (!_0x38a717) return;
      let _0x4848ca,
        _0x18e137 = () =>
          _f(
            of(
              _0x238e24.current,
              _0x37b19d.current,
              _0x552883.current,
              _0x1bd580.current,
              _0x1a4a10.current,
            ),
          ),
        _0x21c0f0 = () => {
          let _0x259bf3 = _0x38a717.ownerDocument["activeElement"];
          return !_0x259bf3 || _0x259bf3 === _0x18e137()
            ? false
            : of(
                _0x1a4a10.current,
                _0x37b19d.current,
                _0x238e24.current,
                _0x552883.current,
                _0x1bd580.current,
              ).some((_0x1ab837) => _0x1ab837.contains(_0x259bf3));
        },
        _0xbc2e3a = () => {
          if (!vf(_0x9df7e7 == null ? undefined : _0x9df7e7.childType, true))
            return;
          let _0x2f7aeb = _0x18e137();
          if (
            _0x2f7aeb &&
            !_0xa9b798.hasBlockingChildFocusLease(
              _0x9df7e7 == null ? undefined : _0x9df7e7.embedId,
              { ignoreOwners: If },
            ) &&
            !_0x21c0f0()
          ) {
            if (
              _0x9df7e7 != null &&
              _0x9df7e7.hostUnitId &&
              _0x9df7e7.embedId
            ) {
              let _0x300a8a = _0x3db6c0.getDescriptor(
                _0x9df7e7.hostUnitId,
                _0x9df7e7.embedId,
              );
              (_0x300a8a == null ? undefined : _0x300a8a.childUnitId) != null &&
                _0x300a8a.childType != null &&
                _0x38046d.focusFloatingRuntime(_0x300a8a);
            }
            (_0x2f7aeb.hasAttribute("tabindex") || (_0x2f7aeb.tabIndex = -1),
              _0x2f7aeb.focus({ preventScroll: true }));
          }
        };
      return (
        _0xbc2e3a(),
        (_0x4848ca = window.requestAnimationFrame(() => {
          ((_0x4848ca = undefined), _0xbc2e3a());
        })),
        () => {
          _0x4848ca != null &&
            (window.cancelAnimationFrame(_0x4848ca), (_0x4848ca = undefined));
        }
      );
    }, [
      _0x38046d,
      _0x9df7e7 == null ? undefined : _0x9df7e7.childType,
      _0x9df7e7 == null ? undefined : _0x9df7e7.embedId,
      _0x9df7e7 == null ? undefined : _0x9df7e7.hostUnitId,
      _0x3db6c0,
      _0xa9b798,
      _0x4e88e9,
      _0x167a30,
    ]),
    _0x51cbb8(() => {
      let _0x41b1c4 = _0x4ab55f.current,
        _0x51d2c6 = _0x223fb8.current;
      if (!_0x41b1c4 || !_0x51d2c6 || typeof window > "u") return;
      let _0x151ece = Dd({
        collapseViewportHeight:
          _0x113ec1 == null ? undefined : _0x113ec1.visibleCanvasHeight,
        collapseWithoutChildScroll:
          (_0x9df7e7 == null ? undefined : _0x9df7e7.childType) ===
          _0x513c12.UNIVER_BASE,
        container: _0x41b1c4,
        content: _0x51d2c6,
        contentHeight: _0x113ec1 == null ? undefined : _0x113ec1.contentHeight,
        enabled: _0x449d92,
        getChildContext: () => _0x2f9dd9.current,
        getProvider: (_0xd006fa) =>
          _0x38f0ae.get(_0xd006fa.childType, _0xd006fa.layout),
        getStage: () =>
          _0x9df7e7 != null && _0x9df7e7.embedId
            ? _0x553376.getStage(_0x9df7e7.embedId)
            : "inactive",
        hostLayout$: _0x5800a5,
        invalidate: () =>
          _0x511104.invalidate({
            embedId: _0x9df7e7 == null ? undefined : _0x9df7e7.embedId,
            reason: "host-scroll",
          }),
        offset: _0xac18e5,
        onHostWheel: _0x58df59,
        owner: _0x3d2071,
        syncingChildFromHost: _0x1dbf0b,
        syncingHostFromChild: _0x37e675,
        viewScale: _0x58ff49,
        viewportHeight:
          _0x113ec1 == null ? undefined : _0x113ec1.viewportHeight,
      });
      return () => _0x151ece.dispose();
    }, [
      _0x9df7e7 == null ? undefined : _0x9df7e7.childType,
      _0x9df7e7 == null ? undefined : _0x9df7e7.embedId,
      _0x113ec1 == null ? undefined : _0x113ec1.contentHeight,
      _0x58ff49,
      _0x113ec1 == null ? undefined : _0x113ec1.visibleCanvasHeight,
      _0x113ec1 == null ? undefined : _0x113ec1.viewportHeight,
      _0x553376,
      _0x511104,
      _0x5800a5,
      _0xffce66,
      _0x38f0ae,
      _0x58df59,
      _0x449d92,
    ]));
  let _0xcbe1d6 = Cu({ stage: _0x167a30, interactionFlow: _0x4e88e9 }),
    _0x775e3f = _0xcbe1d6.disableLiveHostPointerEvents,
    _0x44788a = _0xcbe1d6.passThroughInteractionGate,
    _0xe3b236 = _0x113ec1
      ? {
          top: _0x113ec1.floatingMenuInsetTop * _0x58ff49,
          left: -_0x82a70 * _0x58ff49,
          width:
            (((_0x2ccdca == null ? undefined : _0x2ccdca.initialWidth) ?? 1) +
              _0x82a70) *
            _0x58ff49,
          height: _0x113ec1.viewportHeight * _0x58ff49,
        }
      : _0xda08b8
        ? {
            top: _0xda08b8.floatingMenuInsetTop,
            height: "calc(100% - " + _0xda08b8.floatingMenuInsetTop + "px)",
          }
        : undefined,
    _0x27c944 = _0x113ec1
      ? {
          width:
            ((_0x2ccdca == null ? undefined : _0x2ccdca.initialWidth) ?? 1) +
            _0x82a70,
          height: _0x113ec1.viewportHeight,
          transform: _0x58ff49 === 1 ? undefined : "scale(" + _0x58ff49 + ")",
          transformOrigin: "top left",
        }
      : undefined,
    _0x4c7e59 = _0x113ec1
      ? {
          left: 0,
          width: "100%",
          height: _0x113ec1.viewportHeight,
          minHeight: _0x113ec1.viewportHeight,
        }
      : undefined;
  return _0x287fb5("div", {
    ref: _0x4ab55f,
    className: _0x228d07(
      "univer-relative univer-size-full univer-min-h-0 univer-min-w-0 univer-overflow-visible univer-bg-transparent",
      _0x167a30 === "inactive" && _0x38e57e,
      _0x113ec1 && "univer-pointer-events-none",
    ),
    "data-u-comp": "embed-float-dom",
    "data-embed-float-dom": "true",
    "data-embed-float-stage": _0x167a30,
    "data-embed-id": _0x9df7e7 == null ? undefined : _0x9df7e7.embedId,
    "data-embed-host-unit-id":
      _0x9df7e7 == null ? undefined : _0x9df7e7.hostUnitId,
    "data-embed-host-anchor-id":
      _0x9df7e7 == null ? undefined : _0x9df7e7.hostAnchorId,
    "data-embed-child-unit-id": _0x40819d,
    "data-embed-child-type": _0x8ad810,
    "data-embed-interaction-flow": _0x4e88e9,
    children: [
      _0x287fb5("div", {
        ref: _0x223fb8,
        className: _0x228d07(
          "univer-absolute\x20univer-inset-0\x20univer-box-border\x20univer-min-h-0\x20univer-min-w-0\x20univer-overflow-hidden\x20univer-rounded-md\x20after:univer-pointer-events-none\x20after:univer-absolute\x20after:univer-inset-0\x20after:univer-z-20\x20after:univer-box-border\x20after:univer-rounded-[inherit]\x20after:univer-border\x20after:univer-border-solid\x20after:univer-border-gray-200\x20after:univer-content-[\x27\x27]\x20dark:after:!univer-border-gray-600",
          _0x113ec1 && "after:!univer-border-b-0 after:!univer-border-r-0",
        ),
        "data-u-comp": "embed-float-dom-content",
        "data-embed-float-content": "true",
        style: _0xe3b236,
        children: [
          _0x287fb5("div", {
            ref: _0x1a4a10,
            className: _0x228d07(
              "univer-absolute\x20univer-inset-0\x20univer-size-full\x20univer-min-h-0\x20univer-min-w-0\x20univer-overflow-hidden\x20univer-bg-transparent",
              _0x113ec1 && "before:univer-hidden",
            ),
            "data-u-comp": "embed-float-dom-live",
            "data-embed-float-live": "true",
            style: _0x27c944,
            children: [
              _0x29e1d8("div", {
                ref: _0x238e24,
                className: _0x228d07(
                  "univer-absolute\x20univer-inset-0\x20univer-z-0\x20univer-size-full\x20univer-min-h-0\x20univer-min-w-0\x20univer-overflow-hidden",
                  _0x39f131,
                  _0x113ec1 && "univer-pointer-events-auto",
                  _0x775e3f && "univer-pointer-events-none",
                ),
                "data-u-comp": "embed-float-dom-live-canvas",
                style: _0x4c7e59,
                "data-embed-canvas-root": "true",
              }),
              _0x29e1d8("div", {
                ref: _0x37b19d,
                className: _0x228d07(
                  "univer-pointer-events-none univer-absolute univer-inset-0 univer-z-[1] univer-size-full univer-min-h-0 univer-min-w-0 univer-overflow-hidden [&>*]:univer-pointer-events-auto",
                  _0x775e3f && "univer-pointer-events-none",
                ),
                "data-u-comp": "embed-float-dom-live-content",
                style: _0x4c7e59,
                "data-embed-content-root": "true",
              }),
            ],
          }),
          _0x29e1d8("div", {
            ref: _0x5539c3,
            className: _0x228d07(
              "univer-absolute\x20univer-inset-0\x20univer-z-10\x20univer-bg-transparent",
              _0x44788a && "univer-pointer-events-none",
            ),
            "data-u-comp": "embed-float-dom-interaction-gate",
            "data-embed-float-interaction-gate": "true",
          }),
          _0x167a30 === "inactive" &&
            _0x29e1d8(_0x914ddd, { className: "univer-z-[21]" }),
        ],
      }),
      _0x287fb5("div", {
        ref: _0x43787f,
        className:
          "univer-pointer-events-none\x20univer-fixed\x20univer-overflow-visible\x20[&>*]:univer-pointer-events-auto",
        "data-u-comp": "embed-float-dom-chrome",
        "data-embed-float-stage": _0x167a30,
        "data-embed-id": _0x9df7e7 == null ? undefined : _0x9df7e7.embedId,
        style: { zIndex: _0x19c893 ?? 800 },
        children: [
          _0x29e1d8("div", {
            ref: _0x552883,
            className:
              "univer-pointer-events-none univer-absolute univer-inset-0 univer-overflow-visible [&>*]:univer-pointer-events-auto",
            "data-u-comp": "embed-float-dom-overlay",
            "data-embed-overlay-root": "true",
          }),
          _0x29e1d8("div", {
            ref: _0x1bd580,
            className:
              "univer-pointer-events-none\x20univer-absolute\x20univer-inset-0\x20univer-overflow-visible\x20[&>*]:univer-pointer-events-auto",
            "data-u-comp": "embed-float-dom-popup",
            "data-embed-popup-root": "true",
          }),
          _0x29e1d8(Mf, {
            hostUnitId: _0x9df7e7 == null ? undefined : _0x9df7e7.hostUnitId,
            embedId: _0x9df7e7 == null ? undefined : _0x9df7e7.embedId,
          }),
        ],
      }),
    ],
  });
}
function Rf(_0x10f46b) {
  let _0x959215 = _0x10f46b == null ? undefined : _0x10f46b.source["ref"];
  if (_0x959215)
    try {
      let _0x4c9989 =
        typeof _0x959215 == "string" ? _0x2c40b3(_0x959215) : _0x959215;
      return {
        childUnitId: _0x4c9989.unit["selector"],
        childType: _0x44ff0a(_0x4c9989.unit["type"]),
      };
    } catch {
      return;
    }
}
function zf(_0x46f31e) {
  var _0x1895a0, _0x2129c5;
  let _0x1524ef =
    ((_0x1895a0 = _0x46f31e.sourceMeta) == null
      ? undefined
      : _0x1895a0.floating) || undefined;
  if (_0x1524ef && typeof _0x1524ef == "object" && _0x1524ef.layout)
    return _0x1524ef.layout;
  let _0x6f2d0a =
    ((_0x2129c5 = _0x46f31e.sourceMeta) == null ? undefined : _0x2129c5.tab) ||
    undefined;
  return _0x6f2d0a && typeof _0x6f2d0a == "object" && _0x6f2d0a.enabled
    ? "tab-peer"
    : undefined;
}
var Bf = class extends _0x5f3c10 {
  constructor(..._0x333952) {
    (super(..._0x333952),
      Y(this, "_providers", new Map()),
      Y(this, "_providerChanged$", new _0x442c37()),
      Y(this, "providerChanged$", this._providerChanged$["asObservable"]()),
      Y(this, "_contentSizeChanged$", new _0x442c37()),
      Y(
        this,
        "contentSizeChanged$",
        this._contentSizeChanged$["asObservable"](),
      ));
  }
  register(_0x27813b) {
    return (
      this._providers["set"](_0x27813b.childType, _0x27813b),
      this._providerChanged$["next"](_0x27813b.childType),
      _0x11d17f(() => {
        this._providers["get"](_0x27813b.childType) === _0x27813b &&
          (this._providers["delete"](_0x27813b.childType),
          this._providerChanged$["next"](_0x27813b.childType));
      })
    );
  }
  get(_0x4843bb) {
    return this._providers["get"](_0x4843bb);
  }
  list() {
    return [...this._providers["values"]()];
  }
  measureContentSize(_0x48da08) {
    var _0x56d196;
    return (_0x56d196 = this.get(_0x48da08.childType)) == null
      ? undefined
      : _0x56d196.measureContentSize(_0x48da08);
  }
  notifyContentSizeChanged(_0x25f601, _0x1ceec0) {
    this._contentSizeChanged$["next"]({
      embedId: _0x1ceec0,
      hostUnitId: _0x25f601,
    });
  }
  dispose() {
    (this._providers["clear"](),
      this._contentSizeChanged$["complete"](),
      super.dispose());
  }
};
let Vf = class {
  constructor(_0x2e9afb) {
    ((this._mountService = _0x2e9afb), Y(this, "_leases", new Map()));
  }
  acquire(_0x2f3b09, _0x5a9b19) {
    if (this._leases["has"](_0x2f3b09.embedId))
      throw Error("EMBED_RUNTIME_HOST_ALREADY_LEASED:" + _0x2f3b09.embedId);
    let _0x5c9773 = this._mountService["getSession"](_0x2f3b09.embedId),
      _0x59448b =
        _0x5c9773 != null && _0x5c9773.context
          ? this._relocateExistingSession(_0x5c9773, _0x5a9b19)
          : this._mountOwnedSession(_0x2f3b09, _0x5a9b19);
    return (
      this._leases["set"](_0x2f3b09.embedId, _0x59448b),
      {
        session: _0x59448b.session,
        ownsSession: _0x59448b.ownsSession,
        dispose: () => {
          this._leases["get"](_0x2f3b09.embedId) === _0x59448b &&
            (this._leases["delete"](_0x2f3b09.embedId), _0x59448b.dispose());
        },
      }
    );
  }
  _relocateExistingSession(_0x1a148b, _0x3861e9) {
    let _0x2bbc56 = Hf(_0x1a148b);
    if (_0x2bbc56.length === 0)
      throw Error(
        "EMBED_RUNTIME_HOST_SLOTS_NOT_AVAILABLE:" + _0x1a148b.embedId,
      );
    let _0x4a853b = _0x2bbc56.map((_0x306ec7) => {
      let _0x1de252 = _0x306ec7.parentNode;
      if (!_0x1de252)
        throw Error("EMBED_RUNTIME_HOST_NOT_ATTACHED:" + _0x1a148b.embedId);
      return {
        node: _0x306ec7,
        originalParent: _0x1de252,
        placeholder: document.createComment("embed-runtime-host-lease"),
      };
    });
    return (
      _0x4a853b.forEach(
        ({
          node: _0x26dfaf,
          originalParent: _0x1ccf74,
          placeholder: _0xceef47,
        }) => {
          _0x1ccf74.insertBefore(_0xceef47, _0x26dfaf);
        },
      ),
      _0x3861e9.replaceChildren(..._0x2bbc56),
      {
        session: _0x1a148b,
        ownsSession: false,
        dispose: () => {
          if (
            this._mountService["getSession"](_0x1a148b.embedId) !== _0x1a148b
          ) {
            _0x4a853b.forEach(({ node: _0x148d99, placeholder: _0x4e77ee }) => {
              (_0x148d99.remove(), _0x4e77ee.remove());
            });
            return;
          }
          _0x4a853b.forEach(
            ({
              node: _0x5d36aa,
              originalParent: _0x1ef5a9,
              placeholder: _0x13b57c,
            }) => {
              if (_0x13b57c.parentNode) {
                _0x13b57c.replaceWith(_0x5d36aa);
                return;
              }
              _0x1ef5a9.appendChild(_0x5d36aa);
            },
          );
        },
      }
    );
  }
  _mountOwnedSession(_0x595b3, _0x1ac996) {
    let _0x3a9b25 = this._mountService["mountIntoHostElement"](
      _0x595b3,
      _0x1ac996,
    );
    return {
      session: _0x3a9b25,
      ownsSession: true,
      dispose: () => {
        this._mountService["getSession"](_0x595b3.embedId) === _0x3a9b25 &&
          this._mountService["unmount"](_0x595b3.embedId);
      },
    };
  }
};
Vf = $([Q(0, _0x1a6fa3(cl))], Vf);
function Hf(_0x3e6b94) {
  let _0x5043e2 = _0x3e6b94.context;
  if (!_0x5043e2) return [];
  let _0x1d842a = _0x5043e2.renderScope["rootElement"],
    _0x43e6db = new Set([
      _0x5043e2.runtimeScope["roots"].content,
      _0x5043e2.runtimeScope["roots"].overlay,
      _0x5043e2.runtimeScope["roots"].popup,
    ]);
  return (
    _0x5043e2.runtimeScope["roots"].canvas &&
      _0x43e6db.add(_0x5043e2.runtimeScope["roots"].canvas),
    _0x5043e2.runtimeScope["roots"].menuSlot &&
      _0x43e6db.add(_0x5043e2.runtimeScope["roots"].menuSlot),
    _0x5043e2.runtimeScope["roots"].footerSlot &&
      _0x43e6db.add(_0x5043e2.runtimeScope["roots"].footerSlot),
    _0x43e6db.delete(_0x1d842a),
    Array.from(_0x1d842a.children).filter(
      (_0x334b60) =>
        _0x334b60 instanceof HTMLElement &&
        [..._0x43e6db].some(
          (_0x58eb84) =>
            _0x334b60 === _0x58eb84 || _0x334b60.contains(_0x58eb84),
        ),
    )
  );
}
const Uf = 1000;
function Wf(_0x5343ec, _0x24df4d) {
  return {
    childType: _0x24df4d.childType,
    collectViewState: () => undefined,
    restoreViewState: () => undefined,
    renderPreview: (_0x14182e) =>
      Gf(_0x5343ec, _0x24df4d.renderManagerService, _0x14182e),
  };
}
async function Gf(_0x13654a, _0x3d582, _0x61ad2f) {
  let _0x2d65a = _0x13654a.get(_0x3d582),
    _0x2dda81 = await Kf(_0x2d65a, _0x61ad2f);
  if (_0x2dda81) return _0x2dda81;
  if (!_0x61ad2f.context) {
    let _0x36a8b0 = _0x2d65a.getRenderUnitById(_0x61ad2f.childUnitId);
    if (_0x36a8b0) {
      let _0x483dae = await Xf(_0x36a8b0, _0x61ad2f);
      if (_0x483dae) return _0x483dae;
    }
  }
  let _0x55d2de = await qf(_0x13654a, _0x61ad2f);
  return _0x55d2de === null ? Jf(_0x13654a, _0x2d65a, _0x61ad2f) : _0x55d2de;
}
async function Kf(_0x396f7b, _0x38eb21) {
  if (!_0x38eb21.context) return;
  let _0x4b0dad =
    _0x38eb21.reason === "print" ? $c(_0x38eb21.context) : undefined;
  try {
    _0x38eb21.reason === "print" && (await tl(_0x38eb21.childType));
    let _0x25027f = _0x396f7b.getRenderUnitById(_0x38eb21.childUnitId);
    return (
      _0x25027f && (await ep(_0x25027f, false, np(_0x38eb21.context))),
      Xc(_0x38eb21.context)
    );
  } finally {
    _0x4b0dad == null || _0x4b0dad();
  }
}
async function qf(_0x366a4c, _0x598c85) {
  if (ap(_0x598c85) !== "tab-peer" || !_0x366a4c.has(Vf)) return null;
  if (typeof document > "u") return;
  let _0x135a3c = tp(_0x598c85),
    _0x46a2d0;
  try {
    _0x46a2d0 = _0x366a4c
      .get(Vf)
      .acquire({ ..._0x598c85.descriptor, mode: "readonly" }, _0x135a3c);
    let _0x2c5742 = _0x46a2d0.session["context"];
    if (!_0x2c5742) return;
    let _0x27ac6b = _0x598c85.reason === "print" ? $c(_0x2c5742) : undefined;
    try {
      return (
        _0x598c85.reason === "print" && (await tl(_0x598c85.childType)),
        await Qf(_0x2c5742),
        Xc(_0x2c5742)
      );
    } finally {
      _0x27ac6b == null || _0x27ac6b();
    }
  } catch {
    return;
  } finally {
    (_0x46a2d0 == null || _0x46a2d0.dispose(), _0x135a3c.remove());
  }
}
async function Jf(_0x3a6242, _0x470dbb, _0xa85713) {
  var _0x46e666, _0x13004d;
  if (typeof document > "u") return;
  let _0x42605f = tp(_0xa85713),
    _0x4f3e51 =
      (_0x46e666 = _0xa85713.context) != null &&
      (_0x46e666 = _0x46e666.runtimeScope) != null &&
      _0x46e666.injector
        ? undefined
        : Fs(ip(_0x3a6242, _0xa85713, _0x42605f)),
    _0x53b65a =
      ((_0x13004d = _0xa85713.context) == null ||
      (_0x13004d = _0x13004d.runtimeScope) == null
        ? undefined
        : _0x13004d.injector) ?? _0x4f3e51,
    _0x2f921a = Gc(_0x470dbb, _0xa85713.childUnitId, _0x53b65a);
  if (!_0x2f921a) {
    (_0x4f3e51 == null || _0x4f3e51.dispose(), _0x42605f.remove());
    return;
  }
  return Yf(
    _0x470dbb,
    _0xa85713.childUnitId,
    _0x2f921a,
    _0x4f3e51,
    _0x42605f,
    _0xa85713,
  );
}
async function Yf(
  _0x235b21,
  _0x46cbd8,
  _0x2f5118,
  _0x5e7ab3,
  _0x232f88,
  _0x5a2000,
) {
  let _0x36c426;
  try {
    return (
      _0x2f5118.engine["mount"](_0x232f88),
      _0x5a2000.reason === "print" &&
        ((_0x36c426 = el(_0x2f5118, [_0x232f88])),
        await tl(_0x5a2000.childType)),
      await ep(_0x2f5118, true),
      Zf(_0x2f5118)
    );
  } catch {
    return;
  } finally {
    _0x36c426 == null || _0x36c426();
    try {
      var _0x5246ad, _0xe5747c;
      (_0x5246ad = (_0xe5747c = _0x2f5118.engine).unmount) == null ||
        _0x5246ad.call(_0xe5747c);
    } catch {}
    if (_0x5e7ab3) {
      var _0x4ddcd9;
      ((_0x4ddcd9 = _0x235b21.removeRender) == null ||
        _0x4ddcd9.call(_0x235b21, _0x46cbd8),
        _0x5e7ab3.dispose());
    }
    _0x232f88.remove();
  }
}
async function Xf(_0xe253a3, _0x36aaf4) {
  let _0x5c67e9 = _0x36aaf4.reason === "print" ? el(_0xe253a3) : undefined;
  try {
    return (
      _0x36aaf4.reason === "print" && (await tl(_0x36aaf4.childType)),
      Zf(_0xe253a3)
    );
  } finally {
    _0x5c67e9 == null || _0x5c67e9();
  }
}
function Zf(_0x228c54) {
  var _0x1f069e, _0x2e98dc, _0x53b3d8, _0x31d8b6, _0x577343;
  let _0x39044b =
    ((_0x1f069e = (_0x2e98dc = _0x228c54.engine).getCanvasElement) == null
      ? undefined
      : _0x1f069e.call(_0x2e98dc)) ??
    ((_0x53b3d8 = (_0x31d8b6 = _0x228c54.engine).getCanvas) == null ||
    (_0x53b3d8 = _0x53b3d8.call(_0x31d8b6)) == null ||
    (_0x577343 = _0x53b3d8.getCanvasEle) == null
      ? undefined
      : _0x577343.call(_0x53b3d8));
  if (!(
    !_0x39044b ||
    _0x39044b.width <= 1 ||
    _0x39044b.height <= 1 ||
    typeof _0x39044b.toDataURL != "function"
  ))
    return _0x39044b.toDataURL("image/png");
}
async function Qf(_0x45a06e, _0x5cca73 = false) {
  try {
    var _0xbea9fb;
    let _0x1d6714 = (
        ((_0xbea9fb = _0x45a06e.runtimeScope) == null
          ? undefined
          : _0xbea9fb.injector) ?? _0x45a06e.injector
      ).get(_0x2db5c6),
      _0x31b19e = Date.now() + Uf,
      _0x3ef0c2 = await $f(_0x1d6714, _0x45a06e.childUnitId, _0x31b19e);
    _0x3ef0c2 &&
      (_0x5cca73 &&
        (_0x3ef0c2.scene["makeDirty"](true),
        await Promise.race([
          _0x3ef0c2.scene["requestRender"](),
          new Promise((_0x42570a) =>
            globalThis.setTimeout(
              _0x42570a,
              Math.max(0, _0x31b19e - Date.now()),
            ),
          ),
        ])),
      await ep(_0x3ef0c2, false, np(_0x45a06e), _0x31b19e));
  } catch {}
}
async function $f(_0x43699b, _0x24398f, _0x864be) {
  let _0x5ea461 = _0x43699b.getRenderUnitById(_0x24398f);
  if (_0x5ea461) return _0x5ea461;
  let _0x4de244 = _0x43699b.created$;
  if (!(!_0x4de244 || typeof _0x4de244.subscribe != "function"))
    return new Promise((_0x16845d) => {
      let _0x402d66 = false,
        _0x59e2ab,
        _0x5d6085,
        _0x1950b7 = (_0x44bb09) => {
          _0x402d66 ||
            ((_0x402d66 = true),
            _0x59e2ab !== undefined && globalThis.clearTimeout(_0x59e2ab),
            _0x5d6085 == null || _0x5d6085.unsubscribe(),
            _0x16845d(_0x44bb09));
        },
        _0x3dff75 = _0x4de244.subscribe((_0x26c23d) => {
          _0x26c23d.unitId === _0x24398f && _0x1950b7(_0x26c23d);
        });
      if (((_0x5d6085 = _0x3dff75), _0x402d66)) {
        _0x3dff75.unsubscribe();
        return;
      }
      let _0x209596 = _0x43699b.getRenderUnitById(_0x24398f);
      if (_0x209596) {
        _0x1950b7(_0x209596);
        return;
      }
      _0x59e2ab = globalThis.setTimeout(
        () => _0x1950b7(_0x43699b.getRenderUnitById(_0x24398f) ?? undefined),
        Math.max(0, _0x864be - Date.now()),
      );
    });
}
async function ep(
  _0x4ea4a2,
  _0x13306d,
  _0xa4f9f5 = true,
  _0x33f946 = Date.now() + Uf,
) {
  await rp(_0x33f946);
  let _0x1e6c4a = _0x4ea4a2.scene["afterRender$"];
  if (!_0x1e6c4a) {
    _0x13306d && Jc(_0x4ea4a2, { activate: false });
    return;
  }
  await new Promise((_0x5beb7c) => {
    let _0x3a8a32 = false,
      _0x8d9dd1,
      _0x3d217f,
      _0x5b6b3e,
      _0xf456c8 = () => {
        _0x3a8a32 ||
          ((_0x3a8a32 = true),
          _0x8d9dd1 !== undefined && globalThis.clearTimeout(_0x8d9dd1),
          _0x3d217f !== undefined && globalThis.clearTimeout(_0x3d217f),
          _0x5b6b3e == null || _0x5b6b3e.unsubscribe(),
          _0x5beb7c());
      },
      _0x399a26 = () => {
        (_0x8d9dd1 !== undefined && globalThis.clearTimeout(_0x8d9dd1),
          (_0x8d9dd1 = globalThis.setTimeout(_0xf456c8, 160)));
      };
    ((_0x5b6b3e = _0x1e6c4a.subscribe((_0x1858a3) => {
      _0x1858a3 && _0x399a26();
    })),
      (_0x3d217f = globalThis.setTimeout(
        _0xf456c8,
        Math.max(0, _0x33f946 - Date.now()),
      )));
    try {
      (_0x13306d && Jc(_0x4ea4a2, { activate: false }),
        (_0x13306d || _0xa4f9f5) && _0x399a26());
    } catch {
      _0xf456c8();
    }
  });
}
function tp(_0x2a9bac) {
  let _0x5989ee = document.createElement("div");
  return (
    (_0x5989ee.style["position"] = "fixed"),
    (_0x5989ee.style["left"] = "-100000px"),
    (_0x5989ee.style["top"] = "-100000px"),
    (_0x5989ee.style["width"] =
      Math.max(1, Math.round(_0x2a9bac.width)) + "px"),
    (_0x5989ee.style["height"] =
      Math.max(1, Math.round(_0x2a9bac.height)) + "px"),
    (_0x5989ee.style["pointerEvents"] = "none"),
    document.body["appendChild"](_0x5989ee),
    _0x5989ee
  );
}
function np(_0x2df389) {
  var _0x519e1d, _0x5bc133, _0x39f28b;
  return [
    (_0x519e1d = _0x2df389.renderScope) == null
      ? undefined
      : _0x519e1d.canvasRoot,
    (_0x5bc133 = _0x2df389.renderScope) == null
      ? undefined
      : _0x5bc133.contentRoot,
    (_0x39f28b = _0x2df389.renderScope) == null
      ? undefined
      : _0x39f28b.rootElement,
  ]
    .filter((_0x313dff) => !!_0x313dff)
    .some((_0x2fea77) =>
      Array.from(_0x2fea77.querySelectorAll("canvas")).some(
        (_0xc5b7e9) => _0xc5b7e9.width > 1 && _0xc5b7e9.height > 1,
      ),
    );
}
async function rp(_0x589cd5) {
  if (
    typeof document > "u" ||
    !document.fonts ||
    document.fonts["status"] !== "loading"
  )
    return;
  let _0x4f6c17;
  try {
    await Promise.race([
      document.fonts["ready"].then(
        () => undefined,
        () => undefined,
      ),
      new Promise((_0x60684e) => {
        _0x4f6c17 = globalThis.setTimeout(
          _0x60684e,
          Math.max(0, _0x589cd5 - Date.now()),
        );
      }),
    ]);
  } finally {
    _0x4f6c17 !== undefined && globalThis.clearTimeout(_0x4f6c17);
  }
}
function ip(_0x5bad8b, _0x25f873, _0x155c7f) {
  let _0x427144 = ap(_0x25f873),
    _0x37604e = _0x427144 === "tab-peer",
    _0xa1b62a = () => {};
  return {
    descriptor: _0x25f873.descriptor,
    layout: _0x427144,
    injector: _0x5bad8b,
    hostElement: _0x155c7f,
    container: _0x155c7f,
    hostUnitId: _0x25f873.descriptor["hostUnitId"],
    embedId: _0x25f873.descriptor["embedId"],
    childUnitId: _0x25f873.childUnitId,
    childType: _0x25f873.childType,
    renderScope: {
      hostUnitId: _0x25f873.descriptor["hostUnitId"],
      hostAnchorId: _0x25f873.descriptor["hostAnchorId"],
      embedId: _0x25f873.descriptor["embedId"],
      childUnitId: _0x25f873.childUnitId,
      childType: _0x25f873.childType,
      layout: _0x427144,
      mode: _0x37604e ? "tab" : "float",
      rootElement: _0x155c7f,
      contentRoot: _0x155c7f,
      canvasRoot: _0x155c7f,
      active$: _0x2bd05a(false),
    },
    runtimeScope: {
      descriptor: _0x25f873.descriptor,
      host: {
        unitId: _0x25f873.descriptor["hostUnitId"],
        type: _0x25f873.descriptor["hostType"],
        anchorId: _0x25f873.descriptor["hostAnchorId"],
        entry: _0x25f873.descriptor["entry"],
        layout: _0x37604e ? "tab-peer" : "float",
      },
      child: { unitId: _0x25f873.childUnitId, type: _0x25f873.childType },
      injector: _0x5bad8b,
      roots: {
        root: _0x155c7f,
        content: _0x155c7f,
        canvas: _0x155c7f,
        overlay: _0x155c7f,
        popup: _0x155c7f,
      },
      activate: _0xa1b62a,
      deactivate: _0xa1b62a,
      dispose: _0xa1b62a,
    },
  };
}
function ap(_0x274b65) {
  var _0xb78e9b, _0x9e7ff5, _0x46947e;
  let _0x3297b0 =
    (_0xb78e9b = _0x274b65.descriptor["sourceMeta"]) == null
      ? undefined
      : _0xb78e9b.floating;
  if (
    _0x3297b0 &&
    typeof _0x3297b0 == "object" &&
    typeof _0x3297b0.layout == "string"
  )
    return _0x3297b0.layout;
  let _0x5e7591 =
    (_0x9e7ff5 = _0x274b65.descriptor["sourceMeta"]) == null
      ? undefined
      : _0x9e7ff5.tab;
  return _0x274b65.descriptor["entry"] === _0x3a477c.SheetsSheetTab ||
    _0x274b65.descriptor["entry"] === _0x3a477c.BasesTableListBlock ||
    _0x274b65.descriptor["entry"] === _0x3a477c.SlidesPageListBlock ||
    (_0x5e7591 && typeof _0x5e7591 == "object" && _0x5e7591.enabled)
    ? "tab-peer"
    : (((_0x46947e = _0x274b65.context) == null
        ? undefined
        : _0x46947e.layout) ?? "scroll-contained");
}
const op = 1600,
  sp = 1200,
  cp = 32767;
let lp = class extends _0x5f3c10 {
  constructor(
    _0x2f7ce5,
    _0x5bf592,
    _0x1fb2c8,
    _0x530924,
    _0x58bc91,
    _0x1f6bc1,
    _0x5f3f08,
    _0x262b75,
    _0x4415c5,
    _0x3ea059,
    _0x350559,
    _0x56b382,
  ) {
    (super(),
      (this._embedModelService = _0x2f7ce5),
      (this._anchorModelService = _0x5bf592),
      (this._hostAdapterRegistry = _0x1fb2c8),
      (this._restoreService = _0x530924),
      (this._previewService = _0x58bc91),
      (this._mountService = _0x1f6bc1),
      (this._contentSizeRegistry = _0x5f3f08),
      (this._passiveViewportRegistry = _0x262b75),
      (this._commandService = _0x4415c5),
      (this._univerInstanceService = _0x3ea059),
      (this._themeService = _0x350559),
      (this._imageIoService = _0x56b382),
      Y(this, "_resources", new Map()));
  }
  async prepare(_0x182b3b) {
    var _0x5da9d6, _0x1f1339;
    let _0x33e3dd =
        _0x182b3b.unitType === _0x513c12.UNIVER_SLIDE
          ? this._univerInstanceService["getUnit"](
              _0x182b3b.unitId,
              _0x513c12.UNIVER_SLIDE,
            )
          : undefined,
      _0x23e6fc =
        _0x33e3dd == null ||
        (_0x5da9d6 = _0x33e3dd.pageManager["getActiveSlide"]()) == null
          ? undefined
          : _0x5da9d6.getId(),
      _0x2adda8 =
        _0x182b3b.unitType === _0x513c12.UNIVER_SHEET
          ? (_0x1f1339 = this._univerInstanceService["getUnit"](
              _0x182b3b.unitId,
              _0x513c12.UNIVER_SHEET,
            )) == null || (_0x1f1339 = _0x1f1339.getActiveSheet(true)) == null
            ? undefined
            : _0x1f1339.getSheetId()
          : undefined;
    try {
      this._clearHost(_0x182b3b.unitId);
      let _0x3ac721 = this._embedModelService["getActiveDescriptors"](
        _0x182b3b.unitId,
      ).filter((_0x45aa45) => _0x45aa45.hostType === _0x182b3b.unitType);
      for (let _0xeb4ef0 of _0x3ac721)
        (await this._activateSheetTabForPrint(_0xeb4ef0, _0x182b3b),
          await this._activateSlidePageForPrint(_0xeb4ef0, _0x182b3b),
          await this._prepareDescriptor(_0xeb4ef0, _0x182b3b));
    } finally {
      (_0x2adda8 &&
        this._commandService["syncExecuteCommand"](_0xffd2e7.id, {
          unitId: _0x182b3b.unitId,
          subUnitId: _0x2adda8,
        }),
        _0x23e6fc &&
          (_0x33e3dd == null ||
            _0x33e3dd.pageManager["setActiveSlide"](_0x23e6fc)),
        this._univerInstanceService["setCurrentUnitForType"](_0x182b3b.unitId),
        this._univerInstanceService["focusUnit"](_0x182b3b.unitId));
    }
  }
  getImage(_0x405ba3, _0x36251c) {
    var _0x84469e;
    return (_0x84469e = this.getResource(_0x405ba3, _0x36251c)) == null
      ? undefined
      : _0x84469e.source;
  }
  getResource(_0x2b4e61, _0x292d24) {
    return this._resources["get"](this._getKey(_0x2b4e61, _0x292d24));
  }
  async _activateSheetTabForPrint(_0x2ca63b, _0x442d02) {
    var _0x4b5d94;
    if (
      _0x442d02.unitType !== _0x513c12.UNIVER_SHEET ||
      _0x2ca63b.entry !== _0x3a477c.SheetsSheetTab ||
      this._commandService["syncExecuteCommand"](_0xffd2e7.id, {
        unitId: _0x2ca63b.hostUnitId,
        subUnitId: _0x2ca63b.hostAnchorId,
      }) === false
    )
      return;
    let _0x6a96ec = Date.now() + 5000;
    for (
      ;
      !(
        (_0x4b5d94 = this._mountService["getSession"](_0x2ca63b.embedId)) !=
          null && _0x4b5d94.context
      ) && Date.now() < _0x6a96ec;
    )
      await new Promise((_0x867f23) => window.setTimeout(_0x867f23, 16));
  }
  async _activateSlidePageForPrint(_0xb4d421, _0x18db80) {
    var _0x283a77;
    if (
      _0x18db80.unitType !== _0x513c12.UNIVER_SLIDE ||
      _0xb4d421.entry !== _0x3a477c.SlidesPageListBlock
    )
      return;
    this._hostAdapterRegistry["activateAnchor"]({
      descriptor: _0xb4d421,
      embedId: _0xb4d421.embedId,
      entry: _0xb4d421.entry,
      hostAnchorId: _0xb4d421.hostAnchorId,
      hostType: _0xb4d421.hostType,
      hostUnitId: _0xb4d421.hostUnitId,
    });
    let _0x4ec0e1 = Date.now() + 5000;
    for (
      ;
      !(
        (_0x283a77 = this._mountService["getSession"](_0xb4d421.embedId)) !=
          null && _0x283a77.context
      ) && Date.now() < _0x4ec0e1;
    )
      await new Promise((_0x32deb1) => window.setTimeout(_0x32deb1, 16));
  }
  async _prepareDescriptor(_0x23d4e2, _0x5c7f43) {
    let _0x147729 = hp(
      this._previewService["getProvider"](_0x23d4e2.childType),
      _0x23d4e2,
    );
    if (_0x147729)
      try {
        var _0x52a9fa, _0x2a4159;
        let _0xeffbb = await this._restoreService["materializeDescriptor"]({
          descriptor: _0x23d4e2,
        });
        if (!_0xeffbb.childUnitId) {
          _p(
            _0xeffbb,
            "Embedded\x20unit\x20is\x20not\x20available\x20for\x20print\x20" +
              _0xeffbb.embedId,
          );
          return;
        }
        let _0x38162e =
            (_0x52a9fa = this._mountService["getSession"](_0xeffbb.embedId)) ==
            null
              ? undefined
              : _0x52a9fa.context,
          _0x539ca2 = await this._resolveViewState(
            _0xeffbb.embedId,
            _0x147729,
            _0x38162e,
          ),
          _0x2bb998 = this._resolveSize(_0xeffbb, _0x38162e),
          _0x53e8c1 = await this._captureMountedCanvas(
            _0xeffbb,
            _0x38162e,
            _0x2bb998,
            _0x5c7f43.dpr,
          ),
          _0x186468 = _0x53e8c1
            ? undefined
            : await this._renderMountedScene(
                _0xeffbb,
                _0x38162e,
                _0x2bb998,
                _0x5c7f43.dpr,
              ),
          _0x343be8 =
            _0x53e8c1 ??
            (_0x186468 == null ? undefined : _0x186468.canvas) ??
            (await _0x147729.renderPreview({
              descriptor: _0xeffbb,
              childUnitId: _0xeffbb.childUnitId,
              childType: _0xeffbb.childType,
              width: _0x2bb998.width,
              height: _0x2bb998.height,
              dpr: _0x5c7f43.dpr,
              viewState: _0x539ca2,
              reason: "print",
              context: _0x38162e,
            })),
          _0x276793 =
            _0x343be8 instanceof HTMLCanvasElement ? _0x343be8 : undefined,
          _0xceed9f =
            this._toDataUrl(_0x343be8) ??
            this._toDataUrl(
              (_0x2a4159 = this._previewService["getPreview"](
                _0xeffbb.embedId,
              )) == null
                ? undefined
                : _0x2a4159.image,
            );
        if (!_0xceed9f && !_0x276793) {
          _p(
            _0xeffbb,
            "Complete\x20print\x20resource\x20could\x20not\x20be\x20created\x20for\x20embed\x20" +
              _0xeffbb.embedId,
          );
          return;
        }
        _0xceed9f && (await this._preloadImage(_0xceed9f));
        let _0x482e7b = Ap(_0x343be8, _0x2bb998);
        this._resources["set"](
          this._getKey(_0xeffbb.hostUnitId, _0xeffbb.embedId),
          {
            canvas: _0x276793,
            height: _0x482e7b.height,
            source: _0xceed9f,
            verticalBreaks:
              _0x186468 == null ? undefined : _0x186468.verticalBreaks,
            width: _0x482e7b.width,
          },
        );
      } catch (_0x509cf0) {
        var _0xf90efb;
        gp(_0x23d4e2, _0x509cf0);
        let _0x2b7b29 = this._toDataUrl(
          (_0xf90efb = this._previewService["getPreview"](_0x23d4e2.embedId)) ==
            null
            ? undefined
            : _0xf90efb.image,
        );
        _0x2b7b29 &&
          (await this._preloadImage(_0x2b7b29),
          this._resources["set"](
            this._getKey(_0x23d4e2.hostUnitId, _0x23d4e2.embedId),
            { height: 1, source: _0x2b7b29, width: 1 },
          ));
      }
  }
  async _captureMountedCanvas(_0x210040, _0x5da847, _0x21176b, _0x4c504d) {
    let _0x3e4e2f =
      _0x5da847 &&
      this._resolveCompleteCaptureOptions(_0x210040, _0x5da847, _0x4c504d);
    if (
      (_0x210040.childType !== _0x513c12.UNIVER_BOARD &&
        (_0x210040.childType !== _0x513c12.UNIVER_BASE || _0x3e4e2f)) ||
      !_0x5da847
    )
      return;
    let _0x1ee3cf = $c(_0x5da847);
    try {
      (await tl(_0x210040.childType),
        await Qf(_0x5da847, true),
        _0x210040.childType === _0x513c12.UNIVER_BASE && (await _0x130e8e()));
      let _0x410e75 = Qc(_0x5da847, true),
        _0x44039a = Dp(
          _0x21176b.width,
          _0x21176b.height,
          Op(_0x5da847),
          _0x4c504d,
        );
      return !_0x410e75 || !_0x44039a
        ? undefined
        : (_0x44039a.context["drawImage"](
            _0x410e75,
            0,
            0,
            _0x21176b.width,
            _0x21176b.height,
          ),
          _0x44039a.canvas);
    } finally {
      _0x1ee3cf();
    }
  }
  async _renderMountedScene(_0x5b1f79, _0x5c612f, _0x46c600, _0x20c412) {
    if (!_0x5c612f || !Mp(_0x5b1f79.childType)) return;
    let _0x28ea15 = this._resolveCompleteCaptureOptions(
      _0x5b1f79,
      _0x5c612f,
      _0x20c412,
    );
    if (_0x28ea15) {
      var _0x1bb20f;
      let _0x4987ae = await this._renderCompleteScene(
        _0x5b1f79,
        _0x5c612f,
        _0x28ea15,
      );
      return _0x4987ae
        ? {
            canvas: _0x4987ae,
            verticalBreaks:
              (_0x1bb20f = _0x28ea15.verticalBreaks) == null
                ? undefined
                : _0x1bb20f.map(
                    (_0x441671) =>
                      _0x441671 * _0x28ea15.scale * _0x28ea15.pixelRatio,
                  ),
          }
        : undefined;
    }
    let _0x54e7ec = $c(_0x5c612f);
    try {
      await tl(_0x5b1f79.childType);
      let _0x5a0eca = await kp(_0x5c612f);
      if (!_0x5a0eca) return;
      let _0x19550d = Dp(
        _0x46c600.width,
        _0x46c600.height,
        Op(_0x5c612f),
        _0x20c412,
      );
      return _0x19550d
        ? (wp(
            _0x5a0eca,
            _0x19550d.context,
            {
              height: _0x46c600.height,
              sourceLeft: 0,
              sourceTop: 0,
              targetLeft: 0,
              targetTop: 0,
              width: _0x46c600.width,
            },
            1,
          ),
          { canvas: _0x19550d.canvas })
        : undefined;
    } finally {
      _0x54e7ec();
    }
  }
  async _renderCompleteScene(_0x5da84c, _0x388195, _0x28368f) {
    let {
        bodyViewportWidth: _0x27a061,
        bodyViewportHeight: _0x2aa8de,
        contentBodyWidth: _0x3237c2,
        contentBodyHeight: _0x21f59c,
        fullWidth: _0x31f53f,
        fullHeight: _0x2b987b,
        originalScrollX: _0x5063f2,
        originalScroll: _0x503779,
        scale: _0x3a9945,
        viewportProvider: _0x41d658,
      } = _0x28368f,
      _0x488192 = Dp(
        _0x31f53f * _0x3a9945,
        _0x2b987b * _0x3a9945,
        Op(_0x388195),
        _0x28368f.pixelRatio,
      ),
      _0xafa8d0 = Dp(
        _0x28368f.viewport["width"],
        _0x28368f.viewport["height"],
        Op(_0x388195),
        _0x28368f.pixelRatio,
      );
    if (!_0x488192 || !_0xafa8d0) return;
    let _0x3badfe = $c(_0x388195);
    try {
      let _0x4989db = await kp(_0x388195);
      if (!_0x4989db) return;
      let _0x5360a9 = yp(_0x3237c2, _0x27a061),
        _0x4f7780 = yp(_0x21f59c, _0x2aa8de);
      for (let _0x245139 of _0x5360a9)
        for (let _0x190c04 of _0x4f7780)
          (bp(_0x388195, _0x41d658, _0x245139, _0x190c04),
            await tl(_0x5da84c.childType),
            await Qf(_0x388195, true),
            _0x5da84c.childType === _0x513c12.UNIVER_BASE &&
              (await _0x130e8e()),
            _0xafa8d0.nativeContext["clearRect"](
              0,
              0,
              _0x28368f.viewport["width"],
              _0x28368f.viewport["height"],
            ),
            _0x4989db.makeDirty(true),
            _0x4989db.render(_0xafa8d0.context),
            xp(
              _0xafa8d0.canvas,
              _0x488192.context,
              _0x28368f,
              _0x245139,
              _0x190c04,
            ));
      return _0x488192.canvas;
    } finally {
      try {
        (bp(_0x388195, _0x41d658, _0x5063f2, _0x503779),
          await Qf(_0x388195, true));
      } finally {
        _0x3badfe();
      }
    }
  }
  _resolveCompleteCaptureOptions(_0xed4038, _0x1cf69f, _0x1c9edd) {
    var _0x169f01, _0x407782, _0x498ff2, _0x6322c8, _0x1ac00c;
    let _0x2a1029 = _0xed4038.childUnitId,
      _0x3e943d =
        _0xed4038.childType === _0x513c12.UNIVER_SHEET ||
        _0xed4038.childType === _0x513c12.UNIVER_BASE,
      _0xb05d10 =
        _0xed4038.hostType === _0x513c12.UNIVER_DOC &&
        _0xed4038.entry === _0x3a477c.DocsCustomBlock &&
        _0x3e943d,
      _0x5e2987 = _0x3e943d && jp(_0xed4038.entry);
    if (!_0x2a1029 || (!_0xb05d10 && !_0x5e2987)) return;
    let _0x5ccb6e = _0x1cf69f.container["getBoundingClientRect"]();
    if (!pp(_0x5ccb6e.width) || !pp(_0x5ccb6e.height)) return;
    let _0x87c7ea = this._measureContentSize(_0xed4038, _0x1cf69f),
      _0xe73cb1 = _0x5e2987
        ? this._resolveTabViewportSize(_0xed4038, _0x5ccb6e)
        : _0x5ccb6e,
      _0x3f171f =
        _0x5e2987 && pp(_0x87c7ea == null ? undefined : _0x87c7ea.width)
          ? Math.max(_0xe73cb1.width, _0x87c7ea.width)
          : _0xb05d10
            ? vp(_0x1cf69f, _0x5ccb6e.width)
            : _0x5ccb6e.width,
      _0x12d2e6 = _0x87c7ea == null ? undefined : _0x87c7ea.height;
    if (!pp(_0x12d2e6) || (_0xb05d10 && _0x12d2e6 <= _0x5ccb6e.height)) return;
    let _0x415ef8 = _0x5e2987
        ? Np(_0x3f171f, _0x12d2e6, _0xe73cb1.width >= _0xe73cb1.height)
        : undefined,
      _0x2e7f9c =
        (_0x415ef8 == null ? undefined : _0x415ef8.height) ?? _0x12d2e6,
      _0x33a1fc = this._passiveViewportRegistry["get"](
        _0xed4038.childType,
        _0x1cf69f.layout,
      );
    if (!(_0x33a1fc != null && _0x33a1fc.getVerticalScroll)) return;
    let _0x5a6d22 = _0x5e2987
        ? Math.max(
            0,
            ((_0x169f01 = _0x33a1fc.getStickyLeftWidth) == null
              ? undefined
              : _0x169f01.call(_0x33a1fc, _0x1cf69f)) ?? 0,
          )
        : 0,
      _0xb6ba7b = Math.max(
        0,
        ((_0x407782 = _0x33a1fc.getStickyHeaderHeight) == null
          ? undefined
          : _0x407782.call(_0x33a1fc, _0x1cf69f)) ?? 0,
      ),
      _0x49f1aa = Math.max(
        0,
        ((_0x498ff2 = _0x33a1fc.getStickyFooterHeight) == null
          ? undefined
          : _0x498ff2.call(_0x33a1fc, _0x1cf69f)) ?? 0,
      ),
      _0x18d7b2 = _0x5ccb6e.width - _0x5a6d22,
      _0x190c4a = _0x5ccb6e.height - _0xb6ba7b - _0x49f1aa,
      _0x1635c6 = _0x3f171f - _0x5a6d22,
      _0x39e3aa = _0x2e7f9c - _0xb6ba7b - _0x49f1aa;
    if (_0x18d7b2 <= 0 || _0x190c4a <= 0 || _0x1635c6 <= 0 || _0x39e3aa <= 0)
      return;
    let _0x38f10c = _0x415ef8
      ? _0x415ef8.scale
      : Math.min(1, cp / _0x3f171f, cp / _0x2e7f9c);
    if (
      !pp(_0x38f10c) ||
      _0x3f171f * _0x38f10c > cp ||
      _0x2e7f9c * _0x38f10c > cp
    )
      return;
    let _0x3153e6 =
        _0xb05d10 && _0xed4038.childType === _0x513c12.UNIVER_SHEET
          ? Math.min(1, _0x3f171f / _0x5ccb6e.width)
          : 1,
      _0x1c6f6b = Math.min(
        Math.max(1, _0x1c9edd),
        cp / (_0x3f171f * _0x38f10c),
        cp / (_0x2e7f9c * _0x38f10c),
      );
    return {
      bodyViewportWidth: _0x18d7b2,
      bodyViewportHeight: _0x190c4a,
      contentBodyWidth: _0x1635c6,
      contentBodyHeight: _0x39e3aa,
      fullWidth: _0x3f171f,
      fullHeight: _0x2e7f9c,
      originalScrollX:
        ((_0x6322c8 = _0x33a1fc.getHorizontalScroll) == null
          ? undefined
          : _0x6322c8.call(_0x33a1fc, _0x1cf69f)) ?? 0,
      originalScroll: _0x33a1fc.getVerticalScroll(_0x1cf69f) ?? 0,
      pixelRatio: _0x1c6f6b,
      scale: _0x38f10c,
      sceneSourceScale: _0x3153e6,
      stickyLeftWidth: _0x5a6d22,
      stickyFooterHeight: _0x49f1aa,
      stickyHeaderHeight: _0xb6ba7b,
      verticalBreaks:
        _0x87c7ea == null || (_0x1ac00c = _0x87c7ea.verticalBreaks) == null
          ? undefined
          : _0x1ac00c.filter((_0x1b1ebf) => _0x1b1ebf <= _0x2e7f9c),
      viewport: _0x5ccb6e,
      viewportProvider: _0x33a1fc,
    };
  }
  _measureContentSize(_0x2a771a, _0x468803) {
    let _0x2f0ac7 = _0x2a771a.childUnitId;
    if (!_0x2f0ac7) return;
    let _0x18c1e7 = _0x468803.container["getBoundingClientRect"](),
      _0x31a6ef = this._univerInstanceService["getUnit"](
        _0x2f0ac7,
        _0x2a771a.childType,
      ),
      _0xa932 =
        _0x2a771a.hostType === _0x513c12.UNIVER_DOC &&
        _0x2a771a.childType === _0x513c12.UNIVER_SHEET;
    return this._contentSizeRegistry["measureContentSize"]({
      childType: _0x2a771a.childType,
      childUnit: _0x31a6ef,
      childUnitId: _0x2f0ac7,
      injector: _0x468803.runtimeScope["injector"] ?? _0x468803.injector,
      viewportHeight: _0x18c1e7.height,
      viewportWidth: _0xa932 ? vp(_0x468803, _0x18c1e7.width) : _0x18c1e7.width,
    });
  }
  async _resolveViewState(_0x41f424, _0x19731d, _0x3fb9bc) {
    var _0x2ed295;
    return _0x3fb9bc
      ? _0x19731d.collectViewState(_0x3fb9bc)
      : (_0x2ed295 = this._previewService["getPreview"](_0x41f424)) == null
        ? undefined
        : _0x2ed295.viewState;
  }
  _resolveSize(_0x4f3996, _0x494e67) {
    var _0x33608b;
    if (
      _0x494e67 &&
      jp(_0x4f3996.entry) &&
      (_0x4f3996.childType === _0x513c12.UNIVER_SHEET ||
        _0x4f3996.childType === _0x513c12.UNIVER_BASE)
    ) {
      let _0x121c0f = this._measureContentSize(_0x4f3996, _0x494e67);
      if (
        pp(_0x121c0f == null ? undefined : _0x121c0f.width) &&
        pp(_0x121c0f == null ? undefined : _0x121c0f.height)
      ) {
        let _0x4d70c0 = this._resolveTabViewportSize(
            _0x4f3996,
            _0x494e67.container["getBoundingClientRect"](),
          ),
          _0x3c37af = Math.max(_0x4d70c0.width, _0x121c0f.width),
          _0x3dbac8 = Np(
            _0x3c37af,
            _0x121c0f.height,
            _0x4d70c0.width >= _0x4d70c0.height,
          );
        return {
          width: Math.max(1, Math.round(_0x3c37af * _0x3dbac8.scale)),
          height: Math.max(1, Math.round(_0x3dbac8.height * _0x3dbac8.scale)),
        };
      }
    }
    if (_0x4f3996.entry === _0x3a477c.SlidesPageListBlock) {
      let _0x2ea0d9 = this._univerInstanceService["getUnit"](
          _0x4f3996.hostUnitId,
          _0x513c12.UNIVER_SLIDE,
        ),
        _0x22228c =
          _0x2ea0d9 == null
            ? undefined
            : _0x2ea0d9.getSnapshot().defaultPageSize;
      if (
        pp(_0x22228c == null ? undefined : _0x22228c.width) &&
        pp(_0x22228c == null ? undefined : _0x22228c.height)
      )
        return _0x22228c;
    }
    let _0x2179dc =
        _0x494e67 == null
          ? undefined
          : _0x494e67.container["getBoundingClientRect"]().width,
      _0x420b31 =
        _0x494e67 == null
          ? undefined
          : _0x494e67.container["getBoundingClientRect"]().height;
    if (pp(_0x2179dc) && pp(_0x420b31))
      return { width: _0x2179dc, height: _0x420b31 };
    let _0x5864e7 =
        (_0x33608b = this._anchorModelService["getAnchor"](
          _0x4f3996.hostUnitId,
          _0x4f3996.hostAnchorId,
        )) == null
          ? undefined
          : _0x33608b.hostContext,
      _0xf3d8b9 = up(_0x5864e7 == null ? undefined : _0x5864e7.width),
      _0x1b0511 = up(_0x5864e7 == null ? undefined : _0x5864e7.height);
    return _0xf3d8b9 && _0x1b0511
      ? { width: _0xf3d8b9, height: _0x1b0511 }
      : _0x4f3996.entry === _0x3a477c.DocsCustomBlock
        ? _0x17eb21(_0x4f3996.childType)
        : _0x4f3996.entry === _0x3a477c.SlidesFloatingObject
          ? { width: 560, height: 315 }
          : { width: op, height: sp };
  }
  _resolveTabViewportSize(_0x3e96fa, _0x285044) {
    var _0x32e381;
    if (_0x3e96fa.entry !== _0x3a477c.SlidesPageListBlock) return _0x285044;
    let _0x1a7c77 = this._univerInstanceService["getUnit"](
        _0x3e96fa.hostUnitId,
        _0x513c12.UNIVER_SLIDE,
      ),
      _0x5c57ef =
        (_0x1a7c77 == null ||
        (_0x32e381 = _0x1a7c77.pageManager["getSlide"](
          _0x3e96fa.hostAnchorId,
        )) == null
          ? undefined
          : _0x32e381.getData().pageSize) ??
        (_0x1a7c77 == null
          ? undefined
          : _0x1a7c77.getSnapshot().defaultPageSize);
    return pp(_0x5c57ef == null ? undefined : _0x5c57ef.width) &&
      pp(_0x5c57ef.height)
      ? _0x5c57ef
      : _0x285044;
  }
  _toDataUrl(_0x11e47e) {
    if (typeof _0x11e47e == "string") return _0x11e47e;
    if (!_0x11e47e || typeof document > "u") return;
    let _0x5cd25b = dp(this._themeService);
    if (_0x11e47e instanceof HTMLCanvasElement) {
      let _0x1bbada = _0x11e47e.getContext("2d");
      return (
        _0x1bbada &&
          (_0x1bbada.save(),
          (_0x1bbada.globalCompositeOperation = "destination-over"),
          (_0x1bbada.fillStyle = _0x5cd25b),
          _0x1bbada.fillRect(0, 0, _0x11e47e.width, _0x11e47e.height),
          _0x1bbada.restore()),
        Tp(_0x11e47e)
      );
    }
    let _0x490447 = document.createElement("canvas");
    ((_0x490447.width = _0x11e47e.width),
      (_0x490447.height = _0x11e47e.height));
    let _0x3a0975 = _0x490447.getContext("2d");
    if (_0x3a0975)
      return (
        (_0x3a0975.fillStyle = _0x5cd25b),
        _0x3a0975.fillRect(0, 0, _0x490447.width, _0x490447.height),
        _0x3a0975.drawImage(_0x11e47e, 0, 0),
        Tp(_0x490447)
      );
  }
  _preloadImage(_0x3c27d6) {
    return this._imageIoService["getImageSourceCache"](_0x3c27d6, _0x1cccbb.URL)
      ? Promise.resolve()
      : new Promise((_0x27c990) => {
          let _0x47bdcc = new Image();
          ((_0x47bdcc.onload = () => {
            (this._imageIoService["addImageSourceCache"](
              _0x3c27d6,
              _0x1cccbb.URL,
              _0x47bdcc,
            ),
              _0x27c990());
          }),
            (_0x47bdcc.onerror = () => _0x27c990()),
            (_0x47bdcc.src = _0x3c27d6));
        });
  }
  _clearHost(_0x3c4e87) {
    let _0x1bacac = _0x3c4e87 + "::";
    Array.from(this._resources["keys"]()).forEach((_0x498bcb) => {
      _0x498bcb.startsWith(_0x1bacac) && this._resources["delete"](_0x498bcb);
    });
  }
  _getKey(_0xdd4792, _0x1294bd) {
    return _0xdd4792 + "::" + _0x1294bd;
  }
  dispose() {
    (this._resources["clear"](), super.dispose());
  }
};
lp = $(
  [
    Q(0, _0x1a6fa3(_0x588de6)),
    Q(1, _0x1a6fa3(_0x4466c1)),
    Q(2, _0x1a6fa3(_0x4294fc)),
    Q(3, _0x1a6fa3(ud)),
    Q(4, _0x1a6fa3(cd)),
    Q(5, _0x1a6fa3(cl)),
    Q(6, _0x1a6fa3(Bf)),
    Q(7, _0x1a6fa3(Cd)),
    Q(8, _0x42e186),
    Q(9, _0x3e617f),
    Q(10, _0x1a6fa3(_0x5143b3)),
    Q(11, _0x34b88e),
  ],
  lp,
);
function up(_0x5b4a4f) {
  return pp(_0x5b4a4f) ? _0x5b4a4f : undefined;
}
function dp(_0x3f6162) {
  let _0x16ab68 = _0x3f6162.getColorFromTheme("gray.0"),
    _0x4301cb = _0x3f6162.getColorFromTheme("gray.1000");
  return fp(_0x4301cb) > fp(_0x16ab68) ? _0x4301cb : _0x16ab68;
}
function fp(_0x325f73) {
  let _0x21e839 = /^#([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i.exec(_0x325f73);
  return _0x21e839
    ? Number.parseInt(_0x21e839[1], 16) +
        Number.parseInt(_0x21e839[2], 16) +
        Number.parseInt(_0x21e839[3], 16)
    : 0;
}
function pp(_0x5e012f) {
  return (
    typeof _0x5e012f == "number" && Number.isFinite(_0x5e012f) && _0x5e012f > 0
  );
}
function mp(_0x2641d4) {
  return (
    _0x2641d4.hostType === _0x513c12.UNIVER_DOC &&
    _0x2641d4.entry === _0x3a477c.DocsCustomBlock &&
    (_0x2641d4.childType === _0x513c12.UNIVER_SHEET ||
      _0x2641d4.childType === _0x513c12.UNIVER_BASE)
  );
}
function hp(_0x12e7cb, _0x57b7e3) {
  if (!_0x12e7cb && mp(_0x57b7e3))
    throw Error(
      "Print preview provider is not available for embed " + _0x57b7e3.embedId,
    );
  return _0x12e7cb;
}
function gp(_0xce4534, _0x2650f7) {
  if (mp(_0xce4534)) throw _0x2650f7;
}
function _p(_0x32fcfe, _0x5708a6) {
  if (mp(_0x32fcfe)) throw Error(_0x5708a6);
}
function vp(_0x277230, _0x220534) {
  let _0x158970 = _0x277230.container["closest"](
      "[data-embed-docs-custom-block-sheet-like=\x22true\x22]",
    ),
    _0x44d120 =
      _0x158970 == null ? undefined : _0x158970.getBoundingClientRect().width;
  return pp(_0x44d120) ? Math.min(_0x220534, _0x44d120) : _0x220534;
}
function yp(_0x2da1dc, _0x45225b) {
  let _0x2a7879 = Math.max(0, _0x2da1dc - _0x45225b),
    _0x23c83c = [0];
  for (let _0x5af92d = _0x45225b; _0x5af92d < _0x2a7879; _0x5af92d += _0x45225b)
    _0x23c83c.push(_0x5af92d);
  return (
    _0x2a7879 > _0x23c83c[_0x23c83c.length - 1] && _0x23c83c.push(_0x2a7879),
    _0x23c83c
  );
}
function bp(_0x268bec, _0x4e2b1c, _0x4cd7de, _0x52210a) {
  _0x4e2b1c.handleWheel({
    ..._0x268bec,
    event: new WheelEvent("wheel"),
    stage: "stage2",
    source: "print-capture",
    viewportScrollX: _0x4cd7de,
    viewportScrollY: _0x52210a,
  });
}
function xp(_0x5c47e0, _0x5a69cf, _0x386e68, _0x4e168e, _0x5d1585) {
  let {
      fullHeight: _0x1a19e2,
      scale: _0xd34f58,
      stickyFooterHeight: _0x53926f,
      stickyHeaderHeight: _0x39b61d,
      stickyLeftWidth: _0x24eb18,
      viewport: _0x3bf293,
    } = _0x386e68,
    _0x51d5a8 = Sp(_0x386e68, _0x4e168e, _0x5d1585);
  (Ep(
    _0x5c47e0,
    _0x5a69cf,
    {
      height: _0x51d5a8.height,
      sourceLeft: _0x51d5a8.sourceLeft,
      sourceTop: _0x51d5a8.sourceTop,
      targetLeft: _0x51d5a8.targetLeft,
      targetTop: _0x51d5a8.targetTop,
      width: _0x51d5a8.width,
    },
    _0xd34f58,
    _0x386e68.sceneSourceScale,
    _0x386e68.pixelRatio,
  ),
    _0x5d1585 === 0 &&
      _0x39b61d > 0 &&
      Ep(
        _0x5c47e0,
        _0x5a69cf,
        {
          height: _0x39b61d,
          sourceLeft: _0x51d5a8.sourceLeft,
          sourceTop: 0,
          targetLeft: _0x51d5a8.targetLeft,
          targetTop: 0,
          width: _0x51d5a8.width,
        },
        _0xd34f58,
        _0x386e68.sceneSourceScale,
        _0x386e68.pixelRatio,
      ),
    _0x4e168e === 0 &&
      _0x24eb18 > 0 &&
      Ep(
        _0x5c47e0,
        _0x5a69cf,
        {
          height: _0x51d5a8.height,
          sourceLeft: 0,
          sourceTop: _0x51d5a8.sourceTop,
          targetLeft: 0,
          targetTop: _0x51d5a8.targetTop,
          width: _0x24eb18,
        },
        _0xd34f58,
        _0x386e68.sceneSourceScale,
        _0x386e68.pixelRatio,
      ),
    _0x4e168e === 0 &&
      _0x5d1585 === 0 &&
      _0x24eb18 > 0 &&
      _0x39b61d > 0 &&
      Ep(
        _0x5c47e0,
        _0x5a69cf,
        {
          height: _0x39b61d,
          sourceLeft: 0,
          sourceTop: 0,
          targetLeft: 0,
          targetTop: 0,
          width: _0x24eb18,
        },
        _0xd34f58,
        _0x386e68.sceneSourceScale,
        _0x386e68.pixelRatio,
      ),
    _0x5d1585 === 0 &&
      _0x53926f > 0 &&
      (Ep(
        _0x5c47e0,
        _0x5a69cf,
        {
          height: _0x53926f,
          sourceLeft: _0x51d5a8.sourceLeft,
          sourceTop: _0x3bf293.height - _0x53926f,
          targetLeft: _0x51d5a8.targetLeft,
          targetTop: _0x1a19e2 - _0x53926f,
          width: _0x51d5a8.width,
        },
        _0xd34f58,
        _0x386e68.sceneSourceScale,
        _0x386e68.pixelRatio,
      ),
      _0x4e168e === 0 &&
        _0x24eb18 > 0 &&
        Ep(
          _0x5c47e0,
          _0x5a69cf,
          {
            height: _0x53926f,
            sourceLeft: 0,
            sourceTop: _0x3bf293.height - _0x53926f,
            targetLeft: 0,
            targetTop: _0x1a19e2 - _0x53926f,
            width: _0x24eb18,
          },
          _0xd34f58,
          _0x386e68.sceneSourceScale,
          _0x386e68.pixelRatio,
        )));
}
function Sp(_0xc529d6, _0x46a822, _0x3eae6d) {
  let _0x3c078b = Cp(
      _0x46a822,
      _0xc529d6.bodyViewportWidth,
      _0xc529d6.contentBodyWidth,
    ),
    _0x13413d = Cp(
      _0x3eae6d,
      _0xc529d6.bodyViewportHeight,
      _0xc529d6.contentBodyHeight,
    );
  return {
    height: _0x13413d.size,
    sourceLeft: _0xc529d6.stickyLeftWidth + _0x3c078b.sourceOffset,
    sourceTop: _0xc529d6.stickyHeaderHeight + _0x13413d.sourceOffset,
    targetLeft: _0xc529d6.stickyLeftWidth + _0x3c078b.target,
    targetTop: _0xc529d6.stickyHeaderHeight + _0x13413d.target,
    width: _0x3c078b.size,
  };
}
function Cp(_0x5726e3, _0x225437, _0x4acae0) {
  let _0x58cffd = _0x5726e3 % _0x225437,
    _0x1f15c9 = _0x5726e3 > 0 && _0x58cffd > 0 ? _0x225437 - _0x58cffd : 0,
    _0x4e5bf1 = _0x5726e3 + _0x1f15c9;
  return {
    size: Math.max(0, Math.min(_0x225437 - _0x1f15c9, _0x4acae0 - _0x4e5bf1)),
    sourceOffset: _0x1f15c9,
    target: _0x4e5bf1,
  };
}
function wp(_0x430df2, _0x53edfb, _0x165953, _0xa66a6) {
  _0x165953.width <= 0 ||
    _0x165953.height <= 0 ||
    (_0x53edfb.save(),
    _0x53edfb.scale(_0xa66a6, _0xa66a6),
    _0x53edfb.beginPath(),
    _0x53edfb.rect(
      _0x165953.targetLeft,
      _0x165953.targetTop,
      _0x165953.width,
      _0x165953.height,
    ),
    _0x53edfb.clip(),
    _0x53edfb.translate(
      _0x165953.targetLeft - _0x165953.sourceLeft,
      _0x165953.targetTop - _0x165953.sourceTop,
    ),
    _0x430df2.makeDirty(true),
    _0x430df2.render(_0x53edfb),
    _0x53edfb.restore());
}
function Tp(_0x16e0c1) {
  try {
    return _0x16e0c1.toDataURL("image/png");
  } catch {
    return;
  }
}
function Ep(
  _0xf41a2e,
  _0x58fd80,
  _0x2bfc75,
  _0x53f638,
  _0x47f2f5 = 1,
  _0x5bff96 = 1,
) {
  _0x2bfc75.width <= 0 ||
    _0x2bfc75.height <= 0 ||
    (_0x58fd80.save(),
    _0x58fd80.scale(_0x53f638, _0x53f638),
    _0x58fd80.drawImage(
      _0xf41a2e,
      _0x2bfc75.sourceLeft * _0x47f2f5 * _0x5bff96,
      _0x2bfc75.sourceTop * _0x47f2f5 * _0x5bff96,
      _0x2bfc75.width * _0x47f2f5 * _0x5bff96,
      _0x2bfc75.height * _0x47f2f5 * _0x5bff96,
      _0x2bfc75.targetLeft,
      _0x2bfc75.targetTop,
      _0x2bfc75.width,
      _0x2bfc75.height,
    ),
    _0x58fd80.restore());
}
function Dp(_0x484584, _0x2511ff, _0x2965dc, _0x544549 = 1) {
  if (!pp(_0x484584) || !pp(_0x2511ff)) return;
  let _0x328cbc = document.createElement("canvas");
  ((_0x328cbc.width = Math.max(1, Math.ceil(_0x484584 * _0x544549))),
    (_0x328cbc.height = Math.max(1, Math.ceil(_0x2511ff * _0x544549))));
  let _0x2b8da8 = _0x328cbc.getContext("2d");
  if (!_0x2b8da8) return;
  let _0x32ce42 = new _0x17ca47(_0x2b8da8, { canvasColorService: _0x2965dc });
  return (
    _0x544549 !== 1 && _0x32ce42.scale(_0x544549, _0x544549),
    { canvas: _0x328cbc, context: _0x32ce42, nativeContext: _0x2b8da8 }
  );
}
function Op(_0x52c668) {
  try {
    return (_0x52c668.runtimeScope["injector"] ?? _0x52c668.injector).get(
      _0x1d61a0,
    );
  } catch {
    return;
  }
}
async function kp(_0x45ff47) {
  await Qf(_0x45ff47, true);
  try {
    var _0x2e0a78;
    return (
      ((_0x2e0a78 = (_0x45ff47.runtimeScope["injector"] ?? _0x45ff47.injector)
        .get(_0x2db5c6)
        .getRenderUnitById(_0x45ff47.childUnitId)) == null
        ? undefined
        : _0x2e0a78.scene) ?? undefined
    );
  } catch {
    return;
  }
}
function Ap(_0x1c86a4, _0x1d2e0b) {
  return _0x1c86a4 == null || typeof _0x1c86a4 == "string"
    ? _0x1d2e0b
    : { width: _0x1c86a4.width, height: _0x1c86a4.height };
}
function jp(_0x33393e) {
  return (
    _0x33393e === _0x3a477c.SheetsSheetTab ||
    _0x33393e === _0x3a477c.BasesTableListBlock ||
    _0x33393e === _0x3a477c.SlidesPageListBlock
  );
}
function Mp(_0x157323) {
  return (
    _0x157323 === _0x513c12.UNIVER_SHEET ||
    _0x157323 === _0x513c12.UNIVER_BASE ||
    _0x157323 === _0x513c12.UNIVER_BOARD ||
    _0x157323 === _0x513c12.UNIVER_SLIDE
  );
}
function Np(_0x528e2c, _0x300a33, _0x1c1bda) {
  let _0x85ac1b = _0x1c1bda ? op : 1200,
    _0x42390f = _0x1c1bda ? sp : 1600,
    _0x4f368f = Math.min(1, _0x85ac1b / _0x528e2c);
  return {
    height: Math.min(_0x300a33, _0x42390f / _0x4f368f),
    scale: _0x4f368f,
  };
}
const Pp = "UniverEmbedPrintImage",
  Fp = "UniverEmbedPrintPlaceholder";
function Ip(_0x24185c) {
  let _0x564cd7 = _0x5ade04(lp),
    _0x5cef54 = Td(_0x24185c.data),
    _0x1571ef = _0x5cef54
      ? _0x564cd7.getImage(
          _0x5cef54.hostUnitId ?? _0x24185c.unitId,
          _0x5cef54.embedId,
        )
      : undefined;
  return _0x1571ef
    ? _0x29e1d8("img", {
        alt: "",
        src: _0x1571ef,
        style: { display: "block", width: "100%", height: "auto" },
      })
    : null;
}
function Lp() {
  return null;
}
function Rp(_0x1c3371, _0x79ffe0 = 1, _0x5521b4 = 1) {
  let _0x44855d = _0x1c3371.deltaX / (Math.abs(_0x79ffe0) || 1),
    _0xbc0518 = _0x1c3371.deltaY / (Math.abs(_0x5521b4) || 1);
  if (_0x1c3371.shiftKey)
    ((_0x44855d =
      ((_0x1c3371.deltaY || _0x1c3371.deltaX) * 3) /
      (Math.abs(_0x79ffe0) || 1)),
      (_0xbc0518 = 0));
  else {
    let _0x349eb2 = Math.abs(_0x44855d),
      _0x2df046 = Math.abs(_0xbc0518);
    _0x2df046 >= _0x349eb2 * 2
      ? (_0x44855d = 0)
      : _0x349eb2 >= _0x2df046 * 2 && (_0xbc0518 = 0);
  }
  return { offsetX: _0x44855d, offsetY: _0xbc0518 };
}
function zp(_0x51960e, _0x3bfe88, _0x4c87d4) {
  if (!_0x3bfe88) return false;
  let { offsetX: _0x3b4bed, offsetY: _0x50b640 } = Bp(
    _0x51960e,
    _0x3bfe88,
    _0x4c87d4,
  );
  if (!_0x3b4bed && !_0x50b640) return false;
  let _0x2e68c2 = _0x3bfe88.viewportScrollX ?? 0,
    _0x11395c = _0x3bfe88.viewportScrollY ?? 0;
  if (
    _0x51960e.source !== "wheel" &&
    _0x3bfe88.scrollToViewportPos &&
    (_0x51960e.viewportScrollX != null || _0x51960e.viewportScrollY != null)
  )
    _0x3bfe88.scrollToViewportPos({
      viewportScrollX: _0x51960e.viewportScrollX ?? _0x2e68c2,
      viewportScrollY: _0x51960e.viewportScrollY ?? _0x11395c,
    });
  else {
    if (_0x3bfe88.scrollByViewportDeltaVal)
      _0x3bfe88.scrollByViewportDeltaVal({
        viewportScrollX: _0x3b4bed,
        viewportScrollY: _0x50b640,
      });
    else return false;
  }
  let _0xb17e6f =
    (_0x3bfe88.viewportScrollX ?? 0) !== _0x2e68c2 ||
    (_0x3bfe88.viewportScrollY ?? 0) !== _0x11395c;
  if (_0xb17e6f) {
    var _0x397af7;
    _0x4c87d4 == null ||
      (_0x397af7 = _0x4c87d4.makeDirty) == null ||
      _0x397af7.call(_0x4c87d4, true);
  }
  return _0xb17e6f;
}
function Bp(_0x552721, _0x40699c, _0x4170b1) {
  return _0x552721.source !== "wheel" &&
    (_0x552721.viewportScrollX != null || _0x552721.viewportScrollY != null)
    ? {
        offsetX:
          (_0x552721.viewportScrollX ?? _0x40699c.viewportScrollX ?? 0) -
          (_0x40699c.viewportScrollX ?? 0),
        offsetY:
          (_0x552721.viewportScrollY ?? _0x40699c.viewportScrollY ?? 0) -
          (_0x40699c.viewportScrollY ?? 0),
      }
    : Rp(
        _0x552721.event,
        _0x4170b1 == null ? undefined : _0x4170b1.scaleX,
        _0x4170b1 == null ? undefined : _0x4170b1.scaleY,
      );
}
function Vp(_0x38b3a0) {
  return _0x38b3a0 + _0xba56c9.DEFAULT_TOTAL_SIZE;
}
function Hp(_0x33c6ae) {
  return _0x33c6ae.contentHeight + _0x33c6ae.floatingMenuInsetTop;
}
function Up(_0x53e7ea) {
  var _0x3755f6;
  let { data: _0x3e5f01, customBlockRenderViewport: _0x4b72d1 } = _0x53e7ea,
    _0x4c4d88 = _0x5ade04(_0x42e186),
    _0x1cfa96 = _0x5ade04(_0x3e617f),
    _0x2dec74 = _0x5ade04(_0x2db5c6),
    _0x5bfa11 = Td(_0x3e5f01),
    _0x48f438 = _0x5bfa11 == null ? undefined : _0x5bfa11.hostUnitId,
    _0x4841f0 =
      _0x48f438 ??
      ((_0x3755f6 = _0x1cfa96.getCurrentUnitOfType(_0x513c12.UNIVER_DOC)) ==
      null
        ? undefined
        : _0x3755f6.getUnitId()),
    _0x199fe3 = _0x344702(null),
    [_0x3f5fc3, _0x11a71b] = _0x4d3f85(() => _0x54a321()),
    _0x30372d = _0x5d5ef0(_0x5bfa11 == null ? undefined : _0x5bfa11.childType),
    _0x189559 = _0x4b72d1 == null ? undefined : _0x4b72d1.bleedLeft,
    _0x41189e = _0x4b72d1 == null ? undefined : _0x4b72d1.bleedWidth,
    _0x335111 = _0x4b72d1 == null ? undefined : _0x4b72d1.contentWidth,
    _0x3260ef = Gp(_0x4b72d1 == null ? undefined : _0x4b72d1.viewScale),
    _0x253552 = _0x344702(_0x3260ef),
    _0x1645de = _0x344702(undefined),
    _0x403cab = _0x344702(undefined);
  (_0x51cbb8(() => {
    if (!_0x48f438) return;
    let _0x569a59 = [],
      _0x6fb49f = () => {
        let _0x55c668 = _0x1cfa96.getUnit(_0x48f438, _0x513c12.UNIVER_DOC),
          _0x508438 = _0x55c668 == null ? undefined : _0x55c668.zoomRatio;
        typeof _0x508438 == "number" &&
          _0x4c4d88.syncExecuteCommand(_0x274f75.id, {
            unitId: _0x48f438,
            zoomRatio: _0x508438,
          });
      },
      _0x42979a = (_0x348af8) => {
        let _0x43c624 = requestAnimationFrame(_0x348af8);
        _0x569a59.push(() => cancelAnimationFrame(_0x43c624));
      },
      _0x16bd8c = (_0x460d19) => {
        let _0x5e83c9 = setTimeout(_0x6fb49f, _0x460d19);
        _0x569a59.push(() => clearTimeout(_0x5e83c9));
      };
    return (
      _0x6fb49f(),
      _0x42979a(_0x6fb49f),
      _0x42979a(() => _0x42979a(_0x6fb49f)),
      _0x16bd8c(120),
      _0x16bd8c(500),
      () => {
        _0x569a59.forEach((_0x4ce07c) => _0x4ce07c());
      }
    );
  }, [_0x4c4d88, _0x48f438, _0x1cfa96]),
    _0x2dfde5(() => {
      let _0x48a741 = _0x199fe3.current;
      if (!_0x48a741 || !_0x30372d || typeof window > "u") return;
      let _0x647937,
        _0x31921e = () => {
          _0x647937 = undefined;
          let _0x444ae4 = _0x48a741.getBoundingClientRect(),
            _0x21bded = Xp(_0x335111, () =>
              Qp(_0x48a741, _0x444ae4.width / _0x3260ef),
            ),
            _0x48c315 = _0x5d6f5b(_0x48a741, _0x21bded, {
              authoritativeContentWidth:
                Number.isFinite(_0x335111) && (_0x335111 ?? 0) > 0,
              bleedLeft: _0x189559,
              bleedWidth: _0x41189e,
              viewScale: _0x3260ef,
            });
          _0x11a71b((_0x39a05a) =>
            Math.abs(_0x39a05a.bleedLeft - _0x48c315.bleedLeft) < 0.5 &&
            Math.abs(_0x39a05a.bleedRight - _0x48c315.bleedRight) < 0.5 &&
            Math.abs(_0x39a05a.bleedWidth - _0x48c315.bleedWidth) < 0.5 &&
            Math.abs(_0x39a05a.contentWidth - _0x48c315.contentWidth) < 0.5 &&
            Math.abs(_0x39a05a.virtualWidth - _0x48c315.virtualWidth) < 0.5
              ? _0x39a05a
              : _0x48c315,
          );
        },
        _0x17064e = () => {
          _0x647937 == null &&
            _0x48a741.dataset["embedDocsCustomBlockZooming"] !== "true" &&
            (_0x647937 = window.requestAnimationFrame(_0x31921e));
        },
        _0x5249ea = (_0x1f8109) => {
          Zp(_0x48a741, _0x1f8109.target) && _0x17064e();
        };
      _0x31921e();
      let _0x2352dc = new ResizeObserver(_0x17064e);
      return (
        _0x2352dc.observe(_0x48a741),
        window.addEventListener("resize", _0x17064e),
        window.addEventListener("scroll", _0x5249ea, true),
        () => {
          (_0x647937 != null && window.cancelAnimationFrame(_0x647937),
            _0x2352dc.disconnect(),
            window.removeEventListener("resize", _0x17064e),
            window.removeEventListener("scroll", _0x5249ea, true));
        }
      );
    }, [_0x189559, _0x41189e, _0x335111, _0x30372d, _0x3260ef]));
  let _0x3eb1d3 = _0x30372d
      ? qp(_0x4b72d1 == null ? undefined : _0x4b72d1.contentHeight)
      : _0x2326c5(_0x4b72d1 == null ? undefined : _0x4b72d1.contentHeight, 1),
    _0x3b75b1 = _0x30372d ? 52 : 0,
    _0x4ef2c3 = Jp({
      contentHeight: _0x3eb1d3,
      viewportHeight: _0x4b72d1 == null ? undefined : _0x4b72d1.viewportHeight,
    }),
    _0x4fc0d3 = Hp({
      contentHeight: _0x3eb1d3,
      floatingMenuInsetTop: _0x3b75b1,
    }),
    _0x4b02aa = Yp({
      contentWidth: _0x335111,
      pageContentWidth:
        _0x4b72d1 == null ? undefined : _0x4b72d1.pageContentWidth,
    }),
    _0x3a9cbf = _0x30372d
      ? {
          height: _0x4fc0d3 * _0x3260ef,
          minHeight: _0x4fc0d3 * _0x3260ef,
          width: _0x4b02aa == null ? undefined : _0x4b02aa * _0x3260ef,
        }
      : undefined;
  (_0x2dfde5(() => {
    var _0x3f3f65, _0x5a565b;
    ((_0x253552.current = _0x3260ef),
      (_0x3f3f65 = _0x199fe3.current) == null ||
        _0x3f3f65.style["removeProperty"]("overflow"),
      (_0x5a565b = _0x199fe3.current) == null ||
        delete _0x5a565b.dataset["embedDocsCustomBlockZooming"]);
  }, [_0x3260ef]),
    _0x51cbb8(() => {
      if (!_0x30372d || !_0x4841f0) return;
      let _0x57e047 = _0x199fe3.current,
        _0x2ed81a = () => {
          (_0x403cab.current != null &&
            (window.clearTimeout(_0x403cab.current),
            (_0x403cab.current = undefined)),
            _0x1645de.current != null &&
              (window.cancelAnimationFrame(_0x1645de.current),
              (_0x1645de.current = undefined)));
        },
        _0x4d3d06 = _0x4c4d88.onCommandExecuted((_0x232ffa) => {
          if (_0x232ffa.id !== _0x274f75.id) return;
          let _0x1ffbb0 = _0x232ffa.params;
          if ((_0x1ffbb0 == null ? undefined : _0x1ffbb0.unitId) !== _0x4841f0)
            return;
          let _0x3dc814 = _0x199fe3.current,
            _0x3861c7 = Gp(_0x1ffbb0.zoomRatio);
          !_0x3dc814 ||
            _0x3861c7 === _0x253552.current ||
            (Wp(_0x3dc814, {
              fromScale: _0x253552.current,
              outerHeight: _0x4fc0d3,
              toScale: _0x3861c7,
            }),
            (_0x253552.current = _0x3861c7),
            _0x2ed81a(),
            (_0x403cab.current = window.setTimeout(() => {
              ((_0x403cab.current = undefined),
                (_0x1645de.current = window.requestAnimationFrame(() => {
                  ((_0x1645de.current = undefined),
                    _0x3dc814.style["removeProperty"]("overflow"),
                    delete _0x3dc814.dataset["embedDocsCustomBlockZooming"]);
                })));
            }, 120)));
        });
      return () => {
        (_0x4d3d06.dispose(),
          _0x2ed81a(),
          _0x57e047 == null || _0x57e047.style["removeProperty"]("overflow"),
          _0x57e047 && delete _0x57e047.dataset["embedDocsCustomBlockZooming"]);
      };
    }, [_0x4c4d88, _0x4fc0d3, _0x4841f0, _0x30372d]));
  let _0x20ae38 = _0x4af03(
      (_0x579b82, _0x41b4a2) => {
        var _0x5d5db4;
        let _0x31ffb7 =
          (_0x5d5db4 = _0x2dec74.getRenderUnitById(_0x41b4a2.hostUnitId)) ==
          null
            ? undefined
            : _0x5d5db4.scene;
        return zp(
          { ..._0x41b4a2, event: _0x579b82, source: "wheel", stage: "stage2" },
          _0x31ffb7 == null
            ? undefined
            : _0x31ffb7.getViewport(_0x43f126.VIEW_MAIN),
          _0x31ffb7,
        );
      },
      [_0x2dec74],
    ),
    _0x5818ac = _0x4af03(
      (_0x5cd063) => {
        Kp(_0x2dec74, _0x4841f0, _0x5cd063);
      },
      [_0x2dec74, _0x4841f0],
    );
  return _0x29e1d8("div", {
    ref: _0x199fe3,
    className:
      "univer-relative univer-size-full univer-min-h-0 univer-min-w-0 univer-overflow-visible [&[data-embed-docs-custom-block-sheet-like=true]]:univer-pointer-events-none [&[data-embed-docs-custom-block-sheet-like=true]]:[contain:layout_style]",
    "data-u-comp": "embed-docs-custom-block",
    "data-embed-docs-custom-block": "true",
    "data-embed-docs-custom-block-child-type":
      (_0x5bfa11 == null ? undefined : _0x5bfa11.childType) == null
        ? undefined
        : String(_0x5bfa11.childType),
    "data-embed-docs-custom-block-sheet-like": _0x30372d ? "true" : undefined,
    style: _0x3a9cbf,
    children: _0x29e1d8(Lf, {
      ..._0x53e7ea,
      docsCustomBlockLayout: _0x30372d
        ? {
            bleedLeft: _0x3f5fc3.bleedLeft,
            bleedWidth: _0x3f5fc3.bleedWidth,
            contentHeight: _0x3eb1d3,
            contentWidth: _0x3f5fc3.contentWidth,
            floatingMenuInsetTop: _0x3b75b1,
            pageContentWidth:
              (_0x4b72d1 == null ? undefined : _0x4b72d1.pageContentWidth) ??
              _0x3f5fc3.contentWidth,
            sheetLike: true,
            viewScale: _0x3260ef,
            visibleCanvasHeight:
              _0x4b72d1 == null ? undefined : _0x4b72d1.visibleCanvasHeight,
            viewportHeight: _0x4ef2c3,
          }
        : { floatingMenuInsetTop: _0x3b75b1, sheetLike: false },
      interactionFlow: "doc-block",
      onHostWheel: _0x30372d ? _0x20ae38 : undefined,
      onRuntimeStageEnter: _0x5818ac,
      syncHostVerticalScroll: _0x30372d,
    }),
  });
}
function Wp(_0x38013e, _0x1156f9) {
  let _0x5b311b = Gp(_0x1156f9.fromScale),
    _0x3b27ae = Gp(_0x1156f9.toScale),
    _0xad3af4 = _0x3b27ae / _0x5b311b,
    _0x1e2700 = _0x1156f9.outerHeight * _0x3b27ae;
  ((_0x38013e.style["height"] = _0x1e2700 + "px"),
    (_0x38013e.style["minHeight"] = _0x1e2700 + "px"),
    (_0x38013e.style["overflow"] = "hidden"),
    (_0x38013e.dataset["embedDocsCustomBlockZooming"] = "true"));
  let _0x16ad7e = _0x38013e.querySelector('[data-embed-float-content="true"]');
  _0x16ad7e &&
    ["top", "left"].forEach((_0x547887) => {
      let _0x37b2aa = Number.parseFloat(_0x16ad7e.style[_0x547887]);
      Number.isFinite(_0x37b2aa) &&
        (_0x16ad7e.style[_0x547887] = _0x37b2aa * _0xad3af4 + "px");
    });
  let _0x272be5 = _0x38013e.querySelector('[data-embed-float-live="true"]');
  _0x272be5 &&
    (_0x272be5.style["transform"] =
      _0x3b27ae === 1 ? "" : "scale(" + _0x3b27ae + ")");
}
function Gp(_0x4f6a78) {
  return typeof _0x4f6a78 == "number" &&
    Number.isFinite(_0x4f6a78) &&
    _0x4f6a78 > 0
    ? _0x4f6a78
    : 1;
}
function Kp(_0x46be44, _0x496b19, _0x2d96de) {
  var _0x58e417;
  _0x2d96de !== "stage2" ||
    !_0x496b19 ||
    (_0x58e417 = _0x46be44.getRenderUnitById(_0x496b19)) == null ||
    (_0x58e417 = _0x58e417.with(_0x46f032)) == null ||
    _0x58e417.blur();
}
function qp(_0x49e9f1) {
  return _0x2326c5(_0x49e9f1, 480);
}
function Jp(_0x5c8040) {
  return _0x2326c5(_0x5c8040.viewportHeight, _0x5c8040.contentHeight);
}
function Yp(_0x1d7cfa) {
  let { contentWidth: _0x42f1f6, pageContentWidth: _0x5022f7 } = _0x1d7cfa;
  if (!(
    typeof _0x42f1f6 != "number" ||
    !Number.isFinite(_0x42f1f6) ||
    _0x42f1f6 <= 0
  ))
    return typeof _0x5022f7 == "number" &&
      Number.isFinite(_0x5022f7) &&
      _0x5022f7 > 0
      ? Math.min(_0x42f1f6, _0x5022f7)
      : _0x42f1f6;
}
function Xp(_0x219b39, _0x429be) {
  return Number.isFinite(_0x219b39) && (_0x219b39 ?? 0) > 0
    ? _0x219b39
    : _0x3728fd(undefined, _0x429be());
}
function Zp(_0x3f7be0, _0x2d6d3b) {
  return !(_0x2d6d3b instanceof Node && _0x3f7be0.contains(_0x2d6d3b));
}
function Qp(_0x480a4a, _0x64a371) {
  let _0x124345 = _0x480a4a.querySelector(
      '[data-u-comp="embed-float-dom-live-content"]',
    ),
    _0x52990b = _0x480a4a.querySelector(
      '[data-u-comp="embed-float-dom-live-canvas"]',
    ),
    _0x325e3b = [Math.max(1, _0x64a371)];
  return (
    $p(_0x124345, _0x325e3b),
    $p(_0x52990b, _0x325e3b),
    Math.max(
      ..._0x325e3b.filter(
        (_0x595d6f) => Number.isFinite(_0x595d6f) && _0x595d6f > 0,
      ),
    )
  );
}
function $p(_0x530209, _0x328161) {
  if (_0x530209) {
    _0x328161.push(
      _0x530209.scrollWidth,
      _0x530209.offsetWidth,
      _0x530209.getBoundingClientRect().width,
    );
    for (let _0x12fe51 of Array.from(_0x530209.children)) {
      if (!(_0x12fe51 instanceof HTMLElement)) continue;
      let _0x4eb6b5 = _0x12fe51.getBoundingClientRect(),
        _0x4b3be6 = _0x530209.getBoundingClientRect();
      _0x328161.push(
        _0x12fe51.scrollWidth,
        _0x12fe51.offsetWidth,
        _0x4eb6b5.right - _0x4b3be6.left,
      );
    }
  }
}
let em = class extends _0x5f3c10 {
  constructor(_0x5eedd7) {
    (super(), (this._componentManager = _0x5eedd7), this._registerComponents());
  }
  _registerComponents() {
    (this.disposeWithMe(this._componentManager["register"](_0x9ae82d, Up)),
      this.disposeWithMe(this._componentManager["register"](_0x517f5b, Lf)),
      this.disposeWithMe(this._componentManager["register"](Pp, Ip)),
      this.disposeWithMe(this._componentManager["register"](Fp, Lp)));
  }
};
em = $([Q(0, _0x1a6fa3(_0x1450dc))], em);
let tm = class {
  constructor(_0x659ff4, _0xf1fdb6) {
    ((this._injector = _0x659ff4),
      (this._passiveWheelHandlerRegistry = _0xf1fdb6),
      this._passiveWheelHandlerRegistry["register"]({
        childType: _0x513c12.UNIVER_DOC,
        handleWheel: (_0xd60f49) =>
          this._injector["has"](_0x15da7c)
            ? this._injector["get"](_0x15da7c).handleWheel({
                childUnitId: _0xd60f49.childUnitId,
                event: _0xd60f49.event,
                source: _0xd60f49.source,
              })
            : false,
        order: 100,
      }));
  }
};
tm = $([Q(0, _0x1a6fa3(_0x20cff5)), Q(1, _0x1a6fa3(wd))], tm);
const nm = [
  _0x513c12.UNIVER_DOC,
  _0x513c12.UNIVER_SHEET,
  _0x513c12.UNIVER_BASE,
  _0x513c12.UNIVER_SLIDE,
];
let rm = class extends _0x5f3c10 {
  constructor(_0xa5ebcd, _0x11324b) {
    (super(),
      (this._univerInstanceService = _0xa5ebcd),
      (this._anchorModelService = _0x11324b),
      nm.forEach((_0x79a77) => {
        this.disposeWithMe(
          this._univerInstanceService["getTypeOfUnitDisposed$"](
            _0x79a77,
          ).subscribe((_0x40494d) => {
            this._anchorModelService["clearUnit"](_0x40494d.getUnitId());
          }),
        );
      }));
  }
};
rm = $([Q(0, _0x3e617f), Q(1, _0x1a6fa3(_0x4466c1))], rm);
let im = class extends _0x5f3c10 {
  constructor(_0x1e662f, _0x6ebdb5) {
    (super(),
      (this._injector = _0x1e662f),
      (this._runtimeFocusCoordinator = _0x6ebdb5),
      Y(this, "_suspendedSheetNote", null),
      Y(this, "_suppressedSheetNoteHostUnitId", null),
      this.disposeWithMe(
        this._runtimeFocusCoordinator["runtimeSessionChanged$"].subscribe(
          () => {
            this._syncHostPopupVisibility();
          },
        ),
      ));
  }
  _syncHostPopupVisibility() {
    let _0x55c838 =
        this._runtimeFocusCoordinator[
          "resolveActiveChildSessionRuntimeScope"
        ](),
      _0x35a631 =
        (_0x55c838 == null ? undefined : _0x55c838.hostUnitId) ?? null;
    (this._hideDocParagraphMenu(_0x35a631),
      this._clearHostDrawingSelection(_0x35a631));
    let _0x4ca117 =
      (_0x55c838 == null ? undefined : _0x55c838.sessionMode) ===
      "child-fullscreen"
        ? (_0x55c838.hostUnitId ?? null)
        : null;
    (this._syncPersistentSheetNotes(_0x4ca117),
      this._syncActiveSheetNote(_0x4ca117));
  }
  _hideDocParagraphMenu(_0x1a375d) {
    if (!_0x1a375d || !this._injector["has"](_0x2db5c6)) return;
    let _0x58633a =
      this._injector["get"](_0x2db5c6).getRenderUnitById(_0x1a375d);
    (_0x58633a == null ? undefined : _0x58633a.type) === _0x513c12.UNIVER_DOC &&
      _0x58633a.with(_0x9c8268).hideParagraphMenu(true);
  }
  _clearHostDrawingSelection(_0x5ee9fd) {
    var _0x1f30a5;
    !_0x5ee9fd ||
      !this._injector["has"](_0x2db5c6) ||
      (_0x1f30a5 =
        this._injector["get"](_0x2db5c6).getRenderUnitById(_0x5ee9fd)) ==
        null ||
      (_0x1f30a5 = _0x1f30a5.scene["getTransformer"]()) == null ||
      _0x1f30a5.clearSelectedObjects();
  }
  _syncPersistentSheetNotes(_0x3abf0e) {
    if (_0x3abf0e !== this._suppressedSheetNoteHostUnitId) {
      let _0x40af48 = this._injector["has"](_0x15775d)
        ? this._injector["get"](_0x15775d)
        : null;
      (this._suppressedSheetNoteHostUnitId &&
        (_0x40af48 == null ||
          _0x40af48.setPopupSuppressed(
            this._suppressedSheetNoteHostUnitId,
            false,
          )),
        _0x3abf0e &&
          (_0x40af48 == null || _0x40af48.setPopupSuppressed(_0x3abf0e, true)),
        (this._suppressedSheetNoteHostUnitId = _0x3abf0e));
    }
  }
  _syncActiveSheetNote(_0x1381d7) {
    var _0x53295b;
    if (!this._injector["has"](_0xc7ab6f)) return;
    let _0x2571d4 = this._injector["get"](_0xc7ab6f),
      _0x41b6f6 = _0x2571d4.activePopup;
    if (
      _0x1381d7 != null &&
      _0x1381d7 ===
        ((_0x41b6f6 == null ? undefined : _0x41b6f6.unitId) ??
          ((_0x53295b = this._suspendedSheetNote) == null
            ? undefined
            : _0x53295b.unitId))
    ) {
      (_0x41b6f6 && !_0x41b6f6.temp && (this._suspendedSheetNote = _0x41b6f6),
        _0x2571d4.hidePopup(true));
      return;
    }
    if (!this._suspendedSheetNote) return;
    let _0xd9df5d = this._suspendedSheetNote;
    ((this._suspendedSheetNote = null),
      _0x41b6f6 || _0x2571d4.showPopup(_0xd9df5d));
  }
};
im = $([Q(0, _0x1a6fa3(_0x20cff5)), Q(1, _0x1a6fa3(X))], im);
let am = class extends _0x5f3c10 {
  constructor(_0x441c2f, _0x26ebf0, _0x43123d, _0xc8833a, _0x45bbab) {
    (super(),
      (this._menuOverrideService = _0x441c2f),
      (this._blockRegistry = _0x26ebf0),
      (this._ribbonOverrideService = _0x43123d),
      (this._injector = _0x45bbab),
      Y(this, "_current", null),
      Y(this, "_currentOverride", null),
      this.disposeWithMe(
        _0xc8833a.registerDisabledUIParts(
          [_0x2e0fa4.TOOLBAR],
          this._menuOverrideService["override$"].pipe(
            _0xbab8f3((_0x115cb0) => {
              var _0x13523b;
              return (
                _0x115cb0 != null &&
                ((_0x13523b = this._blockRegistry["get"](
                  _0x115cb0.childType,
                )) == null
                  ? undefined
                  : _0x13523b.hostChromeMode) === "none"
              );
            }),
            _0x2a4f23(),
          ),
        ),
      ),
      this.disposeWithMe(
        _0x11d17f(
          this._menuOverrideService["override$"].subscribe((_0x569b2f) => {
            var _0x3f6b1d, _0x58d991;
            if (!_0x569b2f) {
              (this._current
                ? (this._current["dispose"](), (this._current = null))
                : this._ribbonOverrideService["clear"](),
                (this._currentOverride = null));
              return;
            }
            if (om(this._currentOverride, _0x569b2f)) return;
            let _0x3730c6 = this._blockRegistry["get"](_0x569b2f.childType),
              _0x4fbbbe =
                _0x3730c6 == null ||
                (_0x3f6b1d = _0x3730c6.createRibbonOverride) == null
                  ? undefined
                  : _0x3f6b1d.call(_0x3730c6, {
                      childType: _0x569b2f.childType,
                      childUnitId: _0x569b2f.childUnitId,
                      injector: this._injector,
                      embedId: _0x569b2f.embedId,
                      hostUnitId: _0x569b2f.hostUnitId,
                      entry: _0x569b2f.entry,
                    });
            if (!_0x4fbbbe) {
              var _0x1a8680;
              ((_0x1a8680 = this._current) == null || _0x1a8680.dispose(),
                (this._current = null),
                (this._currentOverride = null),
                this._ribbonOverrideService["clear"]());
              return;
            }
            (this._ribbonOverrideService["activate"]({
              id: _0x569b2f.embedId,
              ribbonService: _0x4fbbbe.ribbonService,
              injector: _0x4fbbbe.injector,
              portalContainer:
                _0x4fbbbe.portalContainer ?? _0x569b2f.portalContainer,
              placeholderTitle: _0x4fbbbe.placeholderTitle,
              hideToolbar: _0x4fbbbe.hideToolbar,
            }),
              (_0x58d991 = this._current) == null || _0x58d991.dispose(),
              (this._current = null),
              (this._currentOverride = null));
            let _0x44b523 = this._registerRibbonOwnership(_0x569b2f);
            ((this._currentOverride = _0x569b2f),
              (this._current = _0x11d17f(() => {
                var _0x5ef862;
                (_0x44b523 == null || _0x44b523.dispose(),
                  this._ribbonOverrideService["clear"](_0x569b2f.embedId),
                  (_0x5ef862 = _0x4fbbbe.disposable) == null ||
                    _0x5ef862.dispose(),
                  (this._currentOverride = null));
              })));
          }),
        ),
      ));
  }
  _registerRibbonOwnership(_0x34bbee) {
    var _0x1aff65;
    let _0x544abd =
        ((_0x1aff65 = _0x34bbee.portalContainer) == null
          ? undefined
          : _0x1aff65.ownerDocument) ??
        (typeof document > "u" ? undefined : document),
      _0xfc176a =
        _0x544abd == null
          ? undefined
          : _0x544abd.querySelector("[data-u-comp=\x22headerbar\x22]");
    if (!_0xfc176a) return;
    let _0xe0f908 = [];
    return (
      this._injector["has"](Es) &&
        _0xe0f908.push(
          this._injector["get"](Es).registerRoot(
            _0x34bbee.embedId,
            _0xfc176a,
            _0x34bbee.childUnitId,
          ),
        ),
      this._injector["has"](X) &&
        _0xe0f908.push(
          this._injector["get"](X).registerElement({
            embedId: _0x34bbee.embedId,
            role: "floating-menu",
            element: _0xfc176a,
          }),
        ),
      _0xe0f908.length
        ? _0x11d17f(() =>
            [..._0xe0f908]
              .reverse()
              .forEach((_0x5472b4) => _0x5472b4.dispose()),
          )
        : undefined
    );
  }
  dispose() {
    var _0x4e5010;
    ((_0x4e5010 = this._current) == null || _0x4e5010.dispose(),
      (this._current = null),
      (this._currentOverride = null),
      super.dispose());
  }
};
am = $(
  [
    Q(0, _0x1a6fa3(Ss)),
    Q(1, _0x1a6fa3(bs)),
    Q(2, _0x1a6fa3(_0x327211)),
    Q(3, _0x1a6fa3(_0x3781ab)),
    Q(4, _0x1a6fa3(_0x20cff5)),
  ],
  am,
);
function om(_0x326584, _0xbfc183) {
  return (
    _0x326584 != null &&
    _0x326584.hostUnitId === _0xbfc183.hostUnitId &&
    _0x326584.embedId === _0xbfc183.embedId &&
    _0x326584.childUnitId === _0xbfc183.childUnitId &&
    _0x326584.childType === _0xbfc183.childType &&
    _0x326584.entry === _0xbfc183.entry &&
    _0x326584.reason === _0xbfc183.reason &&
    _0x326584.portalContainer === _0xbfc183.portalContainer &&
    _0x326584.hideHostFxBar === _0xbfc183.hideHostFxBar &&
    _0x326584.lockHostRibbon === _0xbfc183.lockHostRibbon
  );
}
let sm = class extends _0x5f3c10 {
  constructor(_0x59cc24, _0x2262c1, _0x31b0f8) {
    (super(),
      (this._commandService = _0x59cc24),
      (this._embedModelService = _0x2262c1),
      (this._dialogService = _0x31b0f8),
      Y(this, "_dialogs", []));
    let _0x3f50bd = this._dialogService["getDialogs$"]().subscribe(
      (_0x1d845c) => {
        this._dialogs = _0x1d845c;
      },
    );
    (this.disposeWithMe(_0x11d17f(() => _0x3f50bd.unsubscribe())),
      this.disposeWithMe(
        this._commandService["onCommandExecuted"]((_0x5b19e3) => {
          var _0x158320;
          if (_0x5b19e3.id !== _0x1c0b7d.id) return;
          let _0x20482f = _0x5b19e3.params;
          if (
            typeof (_0x20482f == null ? undefined : _0x20482f.embedId) !=
              "string" ||
            typeof _0x20482f.unitId != "string"
          )
            return;
          let _0x166ad9 =
            (_0x158320 = this._embedModelService["getDescriptor"](
              _0x20482f.unitId,
              _0x20482f.embedId,
            )) == null
              ? undefined
              : _0x158320.childUnitId;
          _0x166ad9 &&
            this._dialogs["forEach"]((_0x4dc3db) => {
              cm(_0x4dc3db) === _0x166ad9 &&
                this._dialogService["close"](_0x4dc3db.id);
            });
        }),
      ));
  }
  dispose() {
    (super.dispose(), (this._dialogs = []));
  }
};
sm = $(
  [Q(0, _0x42e186), Q(1, _0x1a6fa3(_0x588de6)), Q(2, _0x1a6fa3(_0x3b8ef4))],
  sm,
);
function cm(_0x505dd3) {
  var _0x21a7f2, _0x62ee5b;
  let _0x32579f =
    (_0x21a7f2 = _0x505dd3.children) == null ? undefined : _0x21a7f2.label;
  if (!_0x32579f || typeof _0x32579f == "string") return;
  let _0x453a4e =
    (_0x62ee5b = _0x32579f.props) == null ? undefined : _0x62ee5b.unitId;
  return typeof _0x453a4e == "string" ? _0x453a4e : undefined;
}
let lm = class extends _0x5f3c10 {
  constructor(
    _0x547195,
    _0x40e05d,
    _0x138ce1,
    _0x2cde9f,
    _0x3c0aa4,
    _0x572d97,
  ) {
    (super(),
      (this._embedPrintService = _0x547195),
      (this._printPreparationService = _0x40e05d),
      (this._injector = _0x138ce1),
      (this._univerInstanceService = _0x2cde9f),
      (this._slidePrintDrawingTransformService = _0x3c0aa4),
      (this._boardPrintCompositionService = _0x572d97),
      Y(this, "_docPrintRegistered", false),
      Y(this, "_sheetPrintRegistered", false),
      Y(this, "_docPrintLayouts", new Map()),
      this._registerPrintPreparation(),
      this._registerSlidePrinting(),
      this._registerBoardPrinting());
  }
  async prepare(_0x56a620) {
    if (
      (_0x56a620.unitType === _0x513c12.UNIVER_DOC
        ? (this._registerDocPrinting(),
          this._docPrintLayouts["delete"](_0x56a620.unitId))
        : _0x56a620.unitType === _0x513c12.UNIVER_SHEET &&
          this._registerSheetPrinting(),
      await this._embedPrintService["prepare"](_0x56a620),
      _0x56a620.unitType === _0x513c12.UNIVER_DOC)
    ) {
      let _0x2f6f79 = this._univerInstanceService["getUnit"](
          _0x56a620.unitId,
          _0x513c12.UNIVER_DOC,
        ),
        _0x19e02b = _0x2f6f79 == null ? undefined : _0x2f6f79.getSnapshot();
      if (_0x2f6f79 && _0x19e02b) {
        let _0x469ea7 =
            _0x2f6f79.getDocumentStyle().documentFlavor === _0x1cdc06.MODERN,
          _0x1afcbf = _0x469ea7
            ? undefined
            : this._resolveDocPageMetrics(_0x56a620.unitId),
          _0x5d9e35 = gm(
            _0x19e02b,
            _0x56a620.unitId,
            this._embedPrintService,
            _0x1afcbf,
            _0x469ea7 || !!_0x1afcbf,
            _0x469ea7,
          );
        (this._docPrintLayouts["set"](_0x56a620.unitId, _0x5d9e35),
          (_0x56a620.contentHeight = Math.max(
            _0x56a620.contentHeight ?? 0,
            _0x5d9e35.contentHeight,
          )),
          _0x469ea7 &&
            (_0x56a620.contentHeightAdjustment =
              (_0x56a620.contentHeightAdjustment ?? 0) +
              _0x5d9e35.contentHeightAdjustment),
          _0x469ea7 &&
            _0x5d9e35.pageBreakRanges["length"] &&
            (_0x56a620.pageBreakRanges ??= []).push(
              ..._0x5d9e35.pageBreakRanges,
            ));
      }
    }
  }
  _registerPrintPreparation() {
    this.disposeWithMe(
      this._printPreparationService["registerContribution"](this),
    );
  }
  _resolveDocPageMetrics(_0x1566a6) {
    var _0x538115, _0x5134d2;
    let _0x4144eb =
        this._injector["get"](_0x2db5c6).getRenderUnitById(_0x1566a6),
      _0x21bb55 =
        _0x4144eb == null ||
        (_0x538115 = _0x4144eb
          .with(_0x1d642a)
          .getSkeleton()
          .getSkeletonData()) == null
          ? undefined
          : _0x538115.pages[0],
      _0x4a3113 =
        (_0x5134d2 = this._univerInstanceService["getUnit"](
          _0x1566a6,
          _0x513c12.UNIVER_DOC,
        )) == null ||
        (_0x5134d2 = _0x5134d2.getDocumentStyle().pageSize) == null
          ? undefined
          : _0x5134d2.height,
      _0x3b00a8 = _0x4144eb == null ? undefined : _0x4144eb.mainComponent;
    if (!(_0x3b00a8 instanceof _0x270d7e)) return;
    let _0x5ab076 = _0x3b00a8.getOffsetConfig().docsTop ?? 0,
      _0x12e8d8 =
        _0x21bb55 && Tm(_0x21bb55.pageHeight)
          ? _0x21bb55.pageHeight
          : _0x4a3113;
    return Tm(_0x12e8d8)
      ? { firstTop: _0x5ab076, pageStride: _0x12e8d8 + _0x5ab076 }
      : undefined;
  }
  _registerDocPrinting() {
    if (this._docPrintRegistered) return;
    let _0x24da7d = this._injector["get"](_0x51ab16);
    (_0x24da7d.registerPrintComponent(_0x9ae82d, Fp),
      this.disposeWithMe(
        _0x24da7d.interceptor["intercept"](
          _0x24da7d.interceptor["getInterceptPoints"]().PRINTING_DOM_COLLECT,
          {
            handler: (_0x27fadf, _0x484f16, _0x29429a) => {
              var _0x396769;
              if (!_0x27fadf) return _0x29429a(_0x27fadf);
              let _0x27343c = _0x29429a(_0x27fadf),
                _0x20a6fc =
                  (_0x396769 = this._univerInstanceService["getUnit"](
                    _0x484f16.unitId,
                    _0x513c12.UNIVER_DOC,
                  )) == null
                    ? undefined
                    : _0x396769.getSnapshot();
              return (
                _0x20a6fc &&
                  fm(
                    _0x484f16.root["parentElement"] ?? _0x484f16.root,
                    _0x20a6fc,
                    _0x484f16.unitId,
                    _0x484f16.offset,
                    _0x484f16.bound,
                    this._embedPrintService,
                    _0x27fadf,
                    this._docPrintLayouts["get"](_0x484f16.unitId),
                  ),
                _0x27343c
              );
            },
          },
        ),
      ),
      (this._docPrintRegistered = true));
  }
  _registerSheetPrinting() {
    if (this._sheetPrintRegistered) return;
    let _0x25ea1f = this._injector["get"](_0x512117);
    (_0x25ea1f.registerPrintComponent(_0x517f5b, Pp),
      this.disposeWithMe(
        _0x25ea1f.interceptor["intercept"](
          _0x25ea1f.interceptor["getInterceptPoints"]().PRINTING_RANGE,
          {
            handler: (_0x2f4417, _0xe43272, _0x1a9963) =>
              _0x1a9963(
                this._getOriginalSheetTabData(
                  _0xe43272.unitId,
                  _0xe43272.subUnitId,
                )
                  ? { startRow: 0, endRow: 0, startColumn: 0, endColumn: 0 }
                  : _0x2f4417,
              ),
          },
        ),
      ),
      this.disposeWithMe(
        _0x25ea1f.interceptor["intercept"](
          _0x25ea1f.interceptor["getInterceptPoints"]().PRINTING_DOM_COLLECT,
          {
            handler: (_0x1b7556, _0x4268a8, _0x10bbfd) => {
              if (!_0x1b7556) return _0x10bbfd(_0x1b7556);
              let _0x122b72 =
                  this._getOriginalSheetTabData(
                    _0x4268a8.unitId,
                    _0x4268a8.subUnitId,
                  ) ?? _0x2dca7f(_0x4268a8.worksheet["getSnapshot"]()),
                _0x4c40ff =
                  _0x122b72 &&
                  this._embedPrintService["getResource"](
                    _0x4268a8.unitId,
                    _0x122b72.embedId,
                  );
              if (!(_0x4c40ff != null && _0x4c40ff.source))
                return _0x10bbfd(_0x1b7556);
              let _0x363d02 = Em(_0x4268a8.root, _0x4c40ff.source, _0x1b7556, {
                height: _0x4268a8.engine["getCanvas"]().getHeight(),
                offsetX: _0x4268a8.offset["offsetX"],
                offsetY: _0x4268a8.offset["offsetY"],
                width: _0x4268a8.engine["getCanvas"]().getWidth(),
              });
              return (
                _0x363d02.complete ||
                  _0x4268a8.resourceCollector["add"](Dm(_0x363d02)),
                _0x10bbfd(_0x1b7556)
              );
            },
          },
        ),
      ),
      (this._sheetPrintRegistered = true));
  }
  _getOriginalSheetTabData(_0x18ae7d, _0x4e22f0) {
    var _0x4e1793;
    let _0x306d5a =
      (_0x4e1793 = this._univerInstanceService["getUnit"](
        _0x18ae7d,
        _0x513c12.UNIVER_SHEET,
      )) == null
        ? undefined
        : _0x4e1793.getSheetBySheetId(_0x4e22f0);
    return _0x306d5a && _0x2dca7f(_0x306d5a.getSnapshot());
  }
  _registerSlidePrinting() {
    this.disposeWithMe(
      this._slidePrintDrawingTransformService["register"](
        (_0x563f03, _0x3ac920) =>
          Om(_0x563f03, _0x3ac920, this._embedPrintService),
      ),
    );
  }
  _registerBoardPrinting() {
    this.disposeWithMe(
      this._boardPrintCompositionService["register"]((_0x4d4e60, _0xd11e56) =>
        um(_0x4d4e60, _0xd11e56, this._embedPrintService),
      ),
    );
  }
  dispose() {
    (this._docPrintLayouts["clear"](), super.dispose());
  }
};
lm = $(
  [
    Q(0, _0x1a6fa3(lp)),
    Q(1, _0x2fd4b7),
    Q(2, _0x1a6fa3(_0x20cff5)),
    Q(3, _0x3e617f),
    Q(4, _0x1a6fa3(_0xdae6cc)),
    Q(5, _0x1a6fa3(_0x41ff07)),
  ],
  lm,
);
function um(_0x50ea66, _0x106572, _0x13a60e) {
  let _0x4b7698 = { ..._0x50ea66.data };
  return (
    _0x50ea66.order["forEach"]((_0x16e67a) => {
      let _0x46e271 = _0x4b7698[_0x16e67a],
        _0x42128d = _0x46e271 == null ? undefined : _0x46e271.element;
      if (!_0x46e271 || !_0xa98c6f(_0x42128d) || _0x42128d.visible === false)
        return;
      let _0x37b000 = _0x4ac90f(_0x42128d),
        _0x2888b4 =
          _0x37b000 &&
          _0x13a60e.getResource(
            _0x106572.boardModel["getUnitId"](),
            _0x37b000.embedId,
          );
      _0x2888b4 != null &&
        _0x2888b4.source &&
        (_0x4b7698[_0x16e67a] = {
          ..._0x46e271,
          element: dm(_0x42128d, _0x2888b4.source),
        });
    }),
    { data: _0x4b7698, order: _0x50ea66.order }
  );
}
function dm(_0x48cc3b, _0x96cbf5) {
  return {
    id: _0x48cc3b.id,
    type: _0x29dd42.Image,
    transform: _0x48cc3b.transform,
    source: _0x96cbf5,
    imageSourceType: _0x1cccbb.URL,
    parentId: _0x48cc3b.parentId,
    laneId: _0x48cc3b.laneId,
    role: _0x48cc3b.role,
    managedBy: _0x48cc3b.managedBy,
    name: _0x48cc3b.name,
    description: _0x48cc3b.description,
    visible: _0x48cc3b.visible,
    selectable: _0x48cc3b.selectable,
    locked: _0x48cc3b.locked,
    custom: _0x48cc3b.custom,
  };
}
function fm(
  _0x24c239,
  _0x2887de,
  _0x4efa33,
  _0x4dd4df,
  _0x34c812,
  _0x52a546,
  _0x3ed05e,
  _0x1cd82f,
) {
  var _0x3701cf;
  (_0x3701cf = _0x2887de.drawingsOrder) == null ||
    _0x3701cf.forEach((_0x1779ee) => {
      var _0xe47582;
      let _0x4610f9 =
        (_0xe47582 = _0x2887de.drawings) == null
          ? undefined
          : _0xe47582[_0x1779ee];
      if (!_0x4610f9) return;
      let _0x488844 = Td("data" in _0x4610f9 ? _0x4610f9.data : undefined),
        _0x111f02 =
          _0x488844 &&
          _0x52a546.getResource(
            _0x488844.hostUnitId ?? _0x4efa33,
            _0x488844.embedId,
          ),
        _0x126761 =
          _0x1cd82f == null ? undefined : _0x1cd82f.drawings["get"](_0x1779ee);
      if (_0x111f02 != null && _0x111f02.canvas) {
        var _0x424d78;
        let _0xe662f = vm(_0x4610f9),
          _0x57d36c =
            _0x126761 != null &&
            (_0x424d78 = _0x126761.segments) != null &&
            _0x424d78.length
              ? _0x126761.segments
              : pm(_0x111f02, _0x126761, _0xe662f);
        if (
          (mm(
            _0x24c239,
            _0xe662f.left,
            _0xe662f.width,
            _0x111f02,
            _0x57d36c,
            _0x4dd4df,
            _0x34c812,
            _0x3ed05e,
          ),
          _0x57d36c.length)
        )
          return;
      }
      let _0x5640c4 = hm(_0x4610f9, _0x1779ee, _0x4efa33, _0x52a546, _0x1cd82f);
      if (!_0x5640c4) return;
      let {
        height: _0x3c57a3,
        left: _0x37b3df,
        source: _0x49622f,
        top: _0xcdf965,
        width: _0x2202d7,
      } = _0x5640c4;
      if (
        _0x37b3df + _0x2202d7 < _0x34c812.left ||
        _0x37b3df > _0x34c812.right ||
        _0xcdf965 + _0x3c57a3 < _0x34c812.top ||
        _0xcdf965 > _0x34c812.bottom
      )
        return;
      let _0x59cdcb = document.createElement("img");
      ((_0x59cdcb.alt = ""),
        (_0x59cdcb.src = _0x49622f),
        (_0x59cdcb.style["position"] = "absolute"),
        (_0x59cdcb.style["left"] = _0x37b3df - _0x4dd4df.x + "px"),
        (_0x59cdcb.style["top"] = _0xcdf965 - _0x4dd4df.y + "px"),
        (_0x59cdcb.style["width"] = _0x2202d7 + "px"),
        (_0x59cdcb.style["height"] = _0x3c57a3 + "px"),
        (_0x59cdcb.style["objectFit"] = "contain"),
        (_0x59cdcb.style["objectPosition"] = "left top"),
        (_0x59cdcb.style["display"] = "block"),
        (_0x59cdcb.style["zIndex"] = "11"),
        _0x24c239.appendChild(_0x59cdcb),
        _0x3ed05e.add(_0x11d17f(() => _0x59cdcb.remove())));
    });
}
function pm(_0x533948, _0x34b009, _0x4269b6) {
  if (!_0x533948.canvas || !wm(_0x4269b6.top) || !Tm(_0x4269b6.width))
    return [];
  let _0x27e603 =
      (_0x34b009 == null ? undefined : _0x34b009.top) ?? _0x4269b6.top,
    _0x3c6f53 =
      (_0x34b009 == null ? undefined : _0x34b009.height) ??
      (Tm(_0x533948.width)
        ? (_0x4269b6.width * _0x533948.height) / _0x533948.width
        : _0x4269b6.height);
  return wm(_0x27e603) && Tm(_0x3c6f53)
    ? [
        {
          height: _0x3c6f53,
          sourceHeight: _0x533948.canvas["height"],
          sourceTop: 0,
          top: _0x27e603,
        },
      ]
    : [];
}
function mm(
  _0x17f6cd,
  _0x22b0cc,
  _0xf47b75,
  _0x33d29e,
  _0x1985b9,
  _0x10d66f,
  _0x1b63b1,
  _0x8a3bb0,
) {
  let _0x56e901 = _0x33d29e.canvas;
  !_0x56e901 ||
    !wm(_0x22b0cc) ||
    !Tm(_0xf47b75) ||
    !Tm(_0x33d29e.width) ||
    _0x1985b9.forEach((_0x288fe7) => {
      var _0x17f217;
      if (
        _0x22b0cc + _0xf47b75 < _0x1b63b1.left ||
        _0x22b0cc > _0x1b63b1.right ||
        _0x288fe7.top + _0x288fe7.height <= _0x1b63b1.top ||
        _0x288fe7.top >= _0x1b63b1.bottom
      )
        return;
      let _0x199df8 = document.createElement("canvas");
      ((_0x199df8.width = _0x56e901.width),
        (_0x199df8.height = Math.max(1, Math.ceil(_0x288fe7.sourceHeight))),
        (_0x17f217 = _0x199df8.getContext("2d")) == null ||
          _0x17f217.drawImage(
            _0x56e901,
            0,
            _0x288fe7.sourceTop,
            _0x56e901.width,
            _0x288fe7.sourceHeight,
            0,
            0,
            _0x199df8.width,
            _0x199df8.height,
          ),
        (_0x199df8.style["position"] = "absolute"),
        (_0x199df8.style["left"] = _0x22b0cc - _0x10d66f.x + "px"),
        (_0x199df8.style["top"] = _0x288fe7.top - _0x10d66f.y + "px"),
        (_0x199df8.style["width"] = _0xf47b75 + "px"),
        (_0x199df8.style["height"] = _0x288fe7.height + "px"),
        (_0x199df8.style["display"] = "block"),
        (_0x199df8.style["zIndex"] = "11"),
        _0x17f6cd.appendChild(_0x199df8),
        _0x8a3bb0.add(_0x11d17f(() => _0x199df8.remove())));
    });
}
function hm(_0x5b4668, _0x261710, _0x5054e7, _0xc48e8a, _0x2342f) {
  var _0x23747d, _0xd5b647;
  let _0x55ec84 = Td("data" in _0x5b4668 ? _0x5b4668.data : undefined),
    _0x15a1d2 = vm(_0x5b4668),
    _0x43a72d =
      _0x55ec84 &&
      _0xc48e8a.getImage(_0x55ec84.hostUnitId ?? _0x5054e7, _0x55ec84.embedId),
    _0x2131d5 = _0x15a1d2 == null ? undefined : _0x15a1d2.left,
    _0x5a3580 =
      (_0x2342f == null ||
      (_0x23747d = _0x2342f.drawings["get"](_0x261710)) == null
        ? undefined
        : _0x23747d.top) ?? (_0x15a1d2 == null ? undefined : _0x15a1d2.top),
    _0x6ad16e = _0x15a1d2 == null ? undefined : _0x15a1d2.width;
  if (!_0x43a72d || !wm(_0x2131d5) || !wm(_0x5a3580) || !Tm(_0x6ad16e)) return;
  let _0x5526c9 = _0x5b4668.docTransform["size"].width,
    _0x138313 = _0x5b4668.docTransform["size"].height;
  return {
    height:
      (_0x2342f == null ||
      (_0xd5b647 = _0x2342f.drawings["get"](_0x261710)) == null
        ? undefined
        : _0xd5b647.height) ??
      xm(
        _0x55ec84.childType,
        _0x15a1d2 == null ? undefined : _0x15a1d2.height,
        _0x5526c9,
        _0x138313,
        _0x6ad16e,
      ),
    left: _0x2131d5,
    source: _0x43a72d,
    top: _0x5a3580,
    width: _0x6ad16e,
  };
}
function gm(
  _0x5301ba,
  _0x11ee21,
  _0xa16b64,
  _0xce8eeb,
  _0x489712 = !!_0xce8eeb,
  _0x71a6b4 = false,
) {
  let _0x18bca5 = (_0x5301ba.drawingsOrder ?? [])
      .map((_0x5cb2d9) => {
        var _0x37e35b;
        return {
          drawingId: _0x5cb2d9,
          drawing:
            (_0x37e35b = _0x5301ba.drawings) == null
              ? undefined
              : _0x37e35b[_0x5cb2d9],
        };
      })
      .filter(({ drawing: _0x59c563 }) => {
        let _0xbfed0a =
          _0x59c563 && Td("data" in _0x59c563 ? _0x59c563.data : undefined);
        return (
          !!_0x59c563 &&
          !!_0xbfed0a &&
          (!!_0xa16b64.getResource(
            _0xbfed0a.hostUnitId ?? _0x11ee21,
            _0xbfed0a.embedId,
          ) ||
            !!_0xa16b64.getImage(
              _0xbfed0a.hostUnitId ?? _0x11ee21,
              _0xbfed0a.embedId,
            ))
        );
      })
      .sort((_0x17aa95, _0x2bd72a) => {
        var _0x46515e, _0x11232f;
        return (
          (_0x17aa95.drawing
            ? (((_0x46515e = vm(_0x17aa95.drawing)) == null
                ? undefined
                : _0x46515e.top) ?? 0)
            : 0) -
          (_0x2bd72a.drawing
            ? (((_0x11232f = vm(_0x2bd72a.drawing)) == null
                ? undefined
                : _0x11232f.top) ?? 0)
            : 0)
        );
      }),
    _0x1b97ac = new Map(),
    _0x42542f = [],
    _0x1b7b78 = new Set(_0x18bca5.map(({ drawingId: _0xe3a9 }) => _0xe3a9)),
    _0x1bc5a6 = _0x18bca5.find(({ drawing: _0x3db92a }) => {
      let _0x2820c3 =
        _0x3db92a && Td("data" in _0x3db92a ? _0x3db92a.data : undefined);
      return _0x2820c3 && Cm(_0x2820c3.childType);
    }),
    _0x155575 = _0x1bc5a6 == null ? undefined : _0x1bc5a6.drawing,
    _0xb9893b = _0x155575 && vm(_0x155575).top,
    _0x224ed9 = (_0x5301ba.drawingsOrder ?? []).some((_0x394eec) => {
      var _0x48e397;
      let _0x3f77b2 =
        (_0x48e397 = _0x5301ba.drawings) == null
          ? undefined
          : _0x48e397[_0x394eec];
      if (!_0x3f77b2 || _0x1b7b78.has(_0x394eec)) return false;
      let _0x157133 = vm(_0x3f77b2).top;
      return !wm(_0xb9893b) || !wm(_0x157133) || _0x157133 >= _0xb9893b;
    }),
    _0x11c030 = !_0x1bc5a6 || _m(_0x5301ba, _0x1bc5a6.drawingId),
    _0x52bdab = _0x71a6b4 && !_0x224ed9 && !_0x11c030,
    _0x3e84b1 = 0,
    _0x4cbda1 = 0;
  return (
    _0x18bca5.forEach(
      ({ drawingId: _0x1df5f4, drawing: _0x327394 }, _0x418b4c) => {
        var _0x547ab4;
        if (!_0x327394) return;
        let _0x45ca9b = Td("data" in _0x327394 ? _0x327394.data : undefined),
          _0x4a4887 = vm(_0x327394),
          _0x3d38ee = _0x4a4887 == null ? undefined : _0x4a4887.top,
          _0x987a96 = _0x4a4887 == null ? undefined : _0x4a4887.width,
          _0x1ea198 = _0x327394.docTransform["size"].width,
          _0x461028 = _0x327394.docTransform["size"].height;
        if (!_0x45ca9b || !wm(_0x3d38ee) || !Tm(_0x987a96)) return;
        let _0x5d83a6 = Tm(_0x4a4887 == null ? undefined : _0x4a4887.height)
            ? _0x4a4887.height
            : Sm(_0x1ea198, _0x461028, _0x987a96),
          _0x55bea4 = _0xa16b64.getResource(
            _0x45ca9b.hostUnitId ?? _0x11ee21,
            _0x45ca9b.embedId,
          ),
          _0x57d0d1 =
            _0x55bea4 && Tm(_0x55bea4.width)
              ? (_0x987a96 * _0x55bea4.height) / _0x55bea4.width
              : xm(
                  _0x45ca9b.childType,
                  _0x4a4887 == null ? undefined : _0x4a4887.height,
                  _0x1ea198,
                  _0x461028,
                  _0x987a96,
                ),
          _0x556823 = _0x3d38ee + _0x3e84b1,
          _0x1db393 =
            _0x55bea4 && Tm(_0x55bea4.width) ? _0x987a96 / _0x55bea4.width : 1,
          _0x47f5a8 =
            _0x489712 &&
            _0x55bea4 != null &&
            _0x55bea4.canvas &&
            (_0x547ab4 = _0x55bea4.verticalBreaks) != null &&
            _0x547ab4.length
              ? ym(_0x55bea4, _0x556823, _0x1db393, _0xce8eeb)
              : undefined,
          _0x9189e6 =
            _0x47f5a8 != null && _0x47f5a8.length
              ? _0x47f5a8[_0x47f5a8.length - 1].top +
                _0x47f5a8[_0x47f5a8.length - 1].height -
                _0x556823
              : _0x57d0d1;
        if (
          (_0x1b97ac.set(_0x1df5f4, {
            height: _0x9189e6,
            segments: _0x47f5a8,
            top: _0x556823,
          }),
          _0x47f5a8 != null && _0x47f5a8.length
            ? _0x42542f.push(
                ..._0x47f5a8.map((_0x5e5222) => ({
                  bottom: _0x5e5222.top + _0x5e5222.height,
                  sourceId: _0x1df5f4,
                  top: _0x5e5222.top,
                })),
              )
            : _0x489712 &&
              _0x9189e6 > 0 &&
              _0x42542f.push({
                bottom: _0x556823 + _0x9189e6,
                sourceId: _0x1df5f4,
                top: _0x556823,
              }),
          (_0x4cbda1 = Math.max(_0x4cbda1, _0x556823 + _0x9189e6)),
          Cm(_0x45ca9b.childType))
        ) {
          var _0x407022;
          let _0x52c285 =
              (_0x407022 = _0x18bca5[_0x418b4c + 1]) == null
                ? undefined
                : _0x407022.drawing,
            _0x21881d = _0x52c285 ? vm(_0x52c285).top : undefined,
            _0x1c75a3 =
              _0x9189e6 -
              (wm(_0x21881d)
                ? Math.max(0, Math.min(_0x5d83a6, _0x21881d - _0x3d38ee))
                : _0x5d83a6);
          _0x3e84b1 += _0x52bdab ? _0x1c75a3 : Math.max(0, _0x1c75a3);
        }
      },
    ),
    {
      contentHeight: _0x4cbda1,
      contentHeightAdjustment: _0x3e84b1,
      drawings: _0x1b97ac,
      pageBreakRanges: _0x42542f,
    }
  );
}
function _m(_0x153084, _0x26d2ce) {
  var _0x50692f;
  let _0x383a42 = _0x153084.body,
    _0x25f874 =
      _0x383a42 == null ||
      (_0x50692f = _0x383a42.customBlocks) == null ||
      (_0x50692f = _0x50692f.find(
        ({ blockId: _0x4381d8 }) => _0x4381d8 === _0x26d2ce,
      )) == null
        ? undefined
        : _0x50692f.startIndex;
  return (
    !(_0x383a42 != null && _0x383a42.dataStream) ||
    !wm(_0x25f874) ||
    Array.from(_0x383a42.dataStream["slice"](_0x25f874 + 1)).some(
      (_0x5c104b) =>
        _0x5c104b !== _0x39892f.PARAGRAPH &&
        _0x5c104b !== _0x39892f.SECTION_BREAK &&
        _0x5c104b !== _0x39892f.CUSTOM_BLOCK &&
        _0x5c104b !== _0x39892f.DOCS_END &&
        _0x5c104b.trim() !== "",
    )
  );
}
function vm(_0x1e9ef4) {
  return _0x1e9ef4.transform ?? _0x54369f(_0x1e9ef4.docTransform);
}
function ym(_0x221f3c, _0x3c200e, _0x4e29bd, _0x551d30) {
  let _0x535e37 = [
      ...(_0x221f3c.verticalBreaks ?? []).filter(
        (_0xa4dbe0) => _0xa4dbe0 > 0 && _0xa4dbe0 < _0x221f3c.height,
      ),
      _0x221f3c.height,
    ],
    _0x1a91d4 = [],
    _0x1e1db7 = 0,
    _0xd20c82 = _0x3c200e;
  return (
    _0x535e37.forEach((_0x142052) => {
      let _0x9a2d25 = _0x142052 - _0x1e1db7,
        _0x5e8f8d = _0x9a2d25 * _0x4e29bd;
      if (_0x551d30) {
        let _0x2e2296 = bm(_0xd20c82, _0x551d30);
        _0xd20c82 < _0x2e2296 &&
          _0xd20c82 + _0x5e8f8d > _0x2e2296 &&
          _0x5e8f8d <= _0x551d30.pageStride &&
          (_0xd20c82 = _0x2e2296);
      }
      (_0x1a91d4.push({
        height: _0x5e8f8d,
        sourceHeight: _0x9a2d25,
        sourceTop: _0x1e1db7,
        top: _0xd20c82,
      }),
        (_0xd20c82 += _0x5e8f8d),
        (_0x1e1db7 = _0x142052));
    }),
    _0x1a91d4
  );
}
function bm(_0x5cff7a, _0x43785f) {
  let _0x4c5661 = Math.max(
    0,
    Math.floor((_0x5cff7a - _0x43785f.firstTop) / _0x43785f.pageStride),
  );
  return _0x43785f.firstTop + (_0x4c5661 + 1) * _0x43785f.pageStride;
}
function xm(_0x1bb5cd, _0x53b00a, _0x5165d3, _0x3bdef4, _0x933aa9) {
  return Cm(_0x1bb5cd) && Tm(_0x53b00a)
    ? _0x53b00a
    : Sm(_0x5165d3, _0x3bdef4, _0x933aa9);
}
function Sm(_0x429680, _0xbd47ae, _0x4ff5ed) {
  return Tm(_0x429680) && Tm(_0xbd47ae)
    ? (_0x4ff5ed * _0xbd47ae) / _0x429680
    : 0;
}
function Cm(_0x521f82) {
  return (
    _0x521f82 === _0x513c12.UNIVER_SHEET || _0x521f82 === _0x513c12.UNIVER_BASE
  );
}
function wm(_0x1e0143) {
  return typeof _0x1e0143 == "number" && Number.isFinite(_0x1e0143);
}
function Tm(_0x3f031c) {
  return wm(_0x3f031c) && _0x3f031c > 0;
}
function Em(_0x5725f1, _0xbc3bb8, _0x52a933, _0x3184a0) {
  let _0x2b0e6d = _0x5725f1.style["overflow"],
    _0x5b65ce = _0x5725f1.style["zIndex"],
    _0x5a6384 = document.createElement("img");
  return (
    (_0x5a6384.alt = ""),
    (_0x5a6384.src = _0xbc3bb8),
    (_0x5a6384.style["position"] = "absolute"),
    (_0x5a6384.style["left"] = -_0x3184a0.offsetX + "px"),
    (_0x5a6384.style["top"] = -_0x3184a0.offsetY + "px"),
    (_0x5a6384.style["width"] = _0x3184a0.width + "px"),
    (_0x5a6384.style["height"] = _0x3184a0.height + "px"),
    (_0x5a6384.style["objectFit"] = "contain"),
    (_0x5a6384.style["objectPosition"] = "center"),
    (_0x5a6384.style["display"] = "block"),
    (_0x5725f1.style["overflow"] = "visible"),
    (_0x5725f1.style["zIndex"] = "9"),
    _0x5725f1.appendChild(_0x5a6384),
    _0x52a933.add(
      _0x11d17f(() => {
        (_0x5a6384.remove(),
          (_0x5725f1.style["overflow"] = _0x2b0e6d),
          (_0x5725f1.style["zIndex"] = _0x5b65ce));
      }),
    ),
    _0x5a6384
  );
}
function Dm(_0x1df880) {
  return new Promise((_0x534a28) => {
    (_0x1df880.addEventListener("load", () => _0x534a28(), { once: true }),
      _0x1df880.addEventListener("error", () => _0x534a28(), { once: true }));
  });
}
function Om(_0x44efce, _0x4b8f0d, _0x2ef4c6) {
  let _0x182b4b = _0x4b8f0d.slideModel["getUnitId"](),
    _0x29f44a = _0x4b8f0d.slidePage["getId"](),
    _0x390ba7 = _0x4b8f0d.slidePage["getData"](),
    _0x11fd94 = _0xb39b12(_0x390ba7),
    _0x3c3a68 =
      _0x11fd94 && _0x2ef4c6.getResource(_0x182b4b, _0x11fd94.embedId);
  if (_0x11fd94 && _0x3c3a68 != null && _0x3c3a68.source) {
    let _0x2645d7 = _0x1c2b0c(
        _0x390ba7.pageSize ??
          _0x4b8f0d.slideModel["getSnapshot"]().defaultPageSize,
      ),
      _0x54c3f3 = Am(
        _0x182b4b,
        _0x29f44a,
        "embed-print-" + _0x11fd94.embedId,
        _0x3c3a68.source,
        { left: 0, top: 0, width: _0x2645d7.width, height: _0x2645d7.height },
      );
    return {
      data: { [_0x54c3f3.drawingId]: _0x54c3f3 },
      order: [_0x54c3f3.drawingId],
    };
  }
  return km(_0x44efce, _0x182b4b, _0x29f44a, _0x2ef4c6);
}
function km(_0x4c30f5, _0x184919, _0x466737, _0xbadf7) {
  let _0x1d88c6 = { ..._0x4c30f5.data };
  return (
    _0x4c30f5.order["forEach"]((_0x36222f) => {
      let _0x1aabb4 = _0x1d88c6[_0x36222f],
        _0x30e53f = _0x1aabb4 && _0x369cba(_0x1aabb4.element),
        _0x4db0ba =
          _0x30e53f && _0xbadf7.getImage(_0x184919, _0x30e53f.embedId);
      !_0x1aabb4 ||
        !_0x4db0ba ||
        (_0x1d88c6[_0x36222f] = Am(
          _0x184919,
          _0x466737,
          _0x36222f,
          _0x4db0ba,
          _0x1aabb4.element["transform"],
          _0x1aabb4.sourcePageType,
        ));
    }),
    { data: _0x1d88c6, order: _0x4c30f5.order }
  );
}
function Am(
  _0x469b93,
  _0x2e10aa,
  _0x5e5a91,
  _0x1e6063,
  _0x17155c,
  _0x5bbc19 = _0x480a1a.Slide,
) {
  return _0x24dfc2(
    _0x469b93,
    _0x2e10aa,
    {
      id: _0x5e5a91,
      type: _0x5cb994.Image,
      name: _0x5e5a91,
      source: _0x1e6063,
      imageSourceType: _0x1cccbb.URL,
      transform: _0x17155c,
    },
    _0x5bbc19,
  );
}
const jm = new Set(["__editor_" + _0x5767f7, "__editor_" + _0x27a946]);
let Mm = class extends _0x5f3c10 {
  constructor(_0x24a5b8) {
    (super(),
      [
        {
          id: _0x356136.id,
          binding: _0x459aa6.A | _0x19cc17.CTRL_COMMAND,
          eventPreconditions: Nm,
          preconditions: Pm,
          nativeTextEditorBehavior: _0x214bcf.OVERRIDE_NATIVE,
          priority: 902,
        },
        {
          id: _0x1e1687.id,
          binding: _0x459aa6.A | _0x19cc17.CTRL_COMMAND,
          eventPreconditions: Nm,
          preconditions: (_0x14f985) => !Pm(_0x14f985),
          nativeTextEditorBehavior: _0x214bcf.OVERRIDE_NATIVE,
          priority: 902,
          staticParameters: { expandToGapFirst: true, loop: true },
        },
        {
          id: _0xbadd6f.id,
          binding: _0x459aa6.Z | _0x19cc17.CTRL_COMMAND,
          eventPreconditions: Nm,
          preconditions: (_0x7d5432) => !Pm(_0x7d5432),
          priority: 902,
        },
        {
          id: _0x4ce5de.id,
          binding: _0x459aa6.Y | _0x19cc17.CTRL_COMMAND,
          eventPreconditions: Nm,
          preconditions: (_0x107455) => !Pm(_0x107455),
          priority: 902,
        },
        {
          id: _0x4ce5de.id,
          binding: _0x459aa6.Z | _0x19cc17.CTRL_COMMAND | _0x19cc17.SHIFT,
          eventPreconditions: Nm,
          preconditions: (_0x57225c) => !Pm(_0x57225c),
          priority: 902,
        },
      ].forEach((_0x45e482) =>
        this.disposeWithMe(_0x24a5b8.registerShortcut(_0x45e482)),
      ));
  }
};
Mm = $([Q(0, _0x448e72)], Mm);
function Nm(_0x2945cb) {
  let _0x376bdd = _0x2945cb.target;
  return (
    _0x376bdd instanceof HTMLElement &&
    jm.has(_0x376bdd.id) &&
    _0x376bdd.closest("[data-embed-interaction-boundary-owner]") != null
  );
}
function Pm(_0x32c475) {
  return !!(
    _0x32c475.getContextValue(_0x8e415a) || _0x32c475.getContextValue(_0x4b85c3)
  );
}
function Fm(_0x551777) {
  let _0x389820 = [];
  return (
    [
      [_0x513c12.UNIVER_DOC, "docs-ui.ribbon"],
      [_0x513c12.UNIVER_SHEET, "sheets-ui.ribbon"],
      [_0x513c12.UNIVER_SLIDE, "slides-ui.ribbon"],
      [_0x513c12.UNIVER_BASE, "bases-ui.ribbon"],
    ].forEach(([_0x45c14d, _0x1140c4]) => {
      let _0x1e392f = ql(_0x551777, {
        childType: _0x45c14d,
        id: _0x1140c4,
        scopedActionServiceTokens:
          _0x45c14d === _0x513c12.UNIVER_SLIDE ? [_0x33ed9a] : undefined,
      });
      _0x1e392f && _0x389820.push(_0x1e392f);
    }),
    _0x389820
  );
}
var Im = class {
  constructor() {
    Y(this, "_providers", new Map());
  }
  register(_0x1ae132) {
    if (this._providers["has"](_0x1ae132.childType))
      throw Error(
        "Embed readonly preview provider already registered: " +
          _0x1ae132.childType,
      );
    this._providers["set"](_0x1ae132.childType, _0x1ae132);
  }
  get(_0x484a5e) {
    return this._providers["get"](_0x484a5e);
  }
  list() {
    return [...this._providers["values"]()];
  }
};
const Lm = new WeakMap(),
  Rm = new WeakMap();
function zm(_0x11cfe5, _0x528208, _0x4aff1a) {
  var _0x158354;
  if (Hm(_0x11cfe5)) {
    Vm(_0x11cfe5, _0x528208, _0x4aff1a);
    return;
  }
  let _0x3b059a = _0x11cfe5;
  if ((_0x158354 = Rm.get(_0x3b059a)) != null && _0x158354.has(_0x528208))
    return;
  let _0x3945f4 = Lm.get(_0x3b059a) ?? new Map();
  (_0x3945f4.set(_0x528208, _0x4aff1a), Lm.set(_0x3b059a, _0x3945f4));
}
function Bm(_0x17ced7) {
  if (!Hm(_0x17ced7)) return;
  let _0x261646 = _0x17ced7,
    _0x1d68a1 = Lm.get(_0x261646);
  _0x1d68a1 != null &&
    _0x1d68a1.size &&
    (_0x1d68a1.forEach((_0x4efc9a, _0x1992ed) =>
      Vm(_0x17ced7, _0x1992ed, _0x4efc9a),
    ),
    Lm.delete(_0x261646));
}
function Vm(_0x1e28ed, _0x98ffd0, _0x592e95) {
  let _0x35aa0d = _0x1e28ed,
    _0x4de685 = Rm.get(_0x35aa0d) ?? new Set();
  _0x4de685.has(_0x98ffd0) ||
    (_0x592e95(_0x1e28ed),
    _0x4de685.add(_0x98ffd0),
    Rm.set(_0x35aa0d, _0x4de685));
}
function Hm(_0x480c16) {
  return (
    _0x480c16.has(_0x4294fc) &&
    _0x480c16.has(Rc) &&
    _0x480c16.has(Ic) &&
    _0x480c16.has(bs) &&
    _0x480c16.has(Zl) &&
    _0x480c16.has(Lc) &&
    _0x480c16.has(cd) &&
    _0x480c16.has(Bf) &&
    _0x480c16.has(Cd) &&
    _0x480c16.has(Im)
  );
}
function Um(_0xcff7bd) {
  let { childType: _0x1cd4ca, productName: _0x83b366 } = _0xcff7bd;
  return {
    childType: _0x1cd4ca,
    productName: _0x83b366,
    hostChromeMode: "ribbon",
    layoutPolicy: { tab: _0x38ea72, float: _0xed1b86, docFlow: _0x30a7ad },
    createRibbonOverride: ({
      childUnitId: _0x42adbc,
      embedId: _0x548995,
      injector: _0x25bb78,
    }) => {
      let _0x28a5ef = Tl(_0x25bb78, {
        childType: _0x1cd4ca,
        childUnitId: _0x42adbc,
        embedId: _0x548995,
        menuSchema: Wm(_0x25bb78, _0x1cd4ca, _0xcff7bd.menuSchema),
      });
      return {
        mode: "ribbon",
        ribbonService: _0x28a5ef.ribbonService,
        injector: _0x28a5ef.injector,
        placeholderTitle: _0x83b366,
        disposable: _0x28a5ef.disposable,
      };
    },
  };
}
function Wm(_0x55266f, _0x1414c9, _0x21c989) {
  let _0x58ce4f = _0x55266f;
  if (
    typeof _0x58ce4f.has == "function" &&
    typeof _0x58ce4f.get == "function" &&
    _0x58ce4f.has(Zl)
  ) {
    let _0x245ecd = _0x58ce4f.get(Zl).getMergedMenuSchema(_0x1414c9, "ribbon");
    if (_0x245ecd) return _0x245ecd;
  }
  return _0x21c989;
}
function Gm(_0x509567) {
  let _0x51362c = Km(_0x509567);
  return {
    childType: _0x509567.childType,
    productName: _0x509567.productName,
    hostChromeMode: _0x51362c,
    hostHeaderMode: _0x509567.hostHeaderMode ?? "none",
    layoutPolicy: {
      tab: { ..._0x38ea72, ribbon: _0x51362c === "none" ? "hidden" : "host" },
      float: _0xed1b86,
      docFlow: _0x30a7ad,
    },
    createRibbonOverride:
      _0x51362c === "title-only"
        ? () => ({
            mode: "title-only",
            ribbonService: qm(),
            placeholderTitle: _0x509567.productName,
            hideToolbar: true,
          })
        : undefined,
  };
}
function Km(_0x2a303) {
  return _0x2a303.hostChromeMode
    ? _0x2a303.hostChromeMode
    : _0x2a303.hostHeaderMode === "placeholder"
      ? "title-only"
      : "none";
}
function qm() {
  return {
    ribbon$: _0x2bd05a([]),
    activatedTab$: _0x2bd05a(""),
    collapsedIds$: _0x2bd05a([]),
    fakeToolbarVisible$: _0x2bd05a(false),
    setActivatedTab: () => {},
    showContextualTab: () => {},
    hideContextualTab: () => {},
    hideAllContextualTabs: () => {},
    setCollapsedIds: () => {},
    setFakeToolbarVisible: () => {},
  };
}
function Jm(_0xe167f4, _0x2d7f8c, _0x2f8ec4, _0x223ad5) {
  return [..._0xe167f4.querySelectorAll(_0x2d7f8c)]
    .reverse()
    .find((_0x249796) => {
      let _0x5dcc6 = _0x249796.getBoundingClientRect();
      return (
        _0x2f8ec4 >= _0x5dcc6.left &&
        _0x2f8ec4 <= _0x5dcc6.right &&
        _0x223ad5 >= _0x5dcc6.top &&
        _0x223ad5 <= _0x5dcc6.bottom
      );
    });
}
function Ym() {
  return {
    ...Gm({
      childType: _0x513c12.UNIVER_BASE,
      productName: "Bases",
      hostChromeMode: "none",
    }),
    presentationPolicy: {
      getChromeCss: () =>
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[data-embed-presentation-runtime=\x22true\x22]\x20[data-u-comp=\x22base-workbench-layout\x22]\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20grid-template-columns:\x20minmax(0,\x201fr)\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[data-embed-presentation-runtime=\x22true\x22]\x20[data-u-comp=\x22base-left-panel\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[data-embed-presentation-runtime=\x22true\x22]\x20[data-u-comp=\x22base-left-panel-floating-expand-trigger\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[data-embed-presentation-runtime=\x22true\x22]\x20[data-u-comp=\x22base-header-menu\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[data-embed-presentation-runtime=\x22true\x22]\x20[data-u-comp=\x22base-add-view-button\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[data-embed-presentation-runtime=\x22true\x22]\x20[data-u-comp=\x22base-view-tab-more\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[data-embed-presentation-runtime=\x22true\x22]\x20[data-u-comp=\x22base-global-layer\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[data-embed-presentation-runtime=\x22true\x22]\x20[data-u-comp=\x22base-right-panel\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[data-embed-presentation-runtime=\x22true\x22]\x20[data-u-comp=\x22base-footer\x22]\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
      activateNavigationAtPoint: ({
        childContext: _0x340522,
        clientX: _0x3d2266,
        clientY: _0x42e108,
        runtimeHost: _0x433aae,
      }) => {
        if (
          Jm(
            _0x433aae,
            '[data-u-comp="base-view-tab-more"]',
            _0x3d2266,
            _0x42e108,
          )
        )
          return false;
        let _0x19f344 = Jm(
            _0x433aae,
            '[data-u-comp="base-view-tab"]',
            _0x3d2266,
            _0x42e108,
          ),
          _0x4837b2 =
            _0x19f344 == null ? undefined : _0x19f344.dataset["viewId"],
          _0x2ef571 = _0x340522.runtimeScope["injector"];
        return !_0x4837b2 || !_0x2ef571.has(_0x1ec08d)
          ? false
          : (_0x2ef571.get(_0x1ec08d).activateView(_0x4837b2), true);
      },
    },
  };
}
let Xm = class {
  constructor(_0x27eaa2, _0x5b20b3, _0x290e9a) {
    ((this._baseUIStateService = _0x27eaa2),
      (this._projectionService = _0x5b20b3),
      (this._wheelScrollService = _0x290e9a),
      Y(this, "childType", _0x513c12.UNIVER_BASE));
  }
  measureContentSize(_0x36771b) {
    var _0xe13e0c, _0x51bd25, _0x8cde02;
    let _0x68eef5 =
      _0x36771b.childUnit instanceof _0x3e911b
        ? _0x36771b.childUnit["getSnapshot"]()
        : undefined;
    if (!_0x68eef5) return;
    let _0x2c2120 =
        (_0xe13e0c = _0x36771b.injector) != null && _0xe13e0c.has(_0x1ec08d)
          ? _0x36771b.injector["get"](_0x1ec08d)
          : this._baseUIStateService,
      _0x286bb8 =
        (_0x51bd25 = _0x36771b.injector) != null && _0x51bd25.has(_0xca7423)
          ? _0x36771b.injector["get"](_0xca7423)
          : this._projectionService,
      _0x123333 =
        (_0x8cde02 = _0x36771b.injector) != null && _0x8cde02.has(_0x28bf49)
          ? _0x36771b.injector["get"](_0x28bf49)
          : this._wheelScrollService,
      _0x199267 = _0x2c2120.getState(),
      _0x1c3bba = $m(_0x68eef5, _0x199267, _0x36771b.viewportWidth),
      _0xfa5fb1 = Zm(
        _0x68eef5,
        _0x199267,
        _0x286bb8,
        _0x123333,
        _0x36771b.viewportHeight,
        _0x1c3bba ?? _0x36771b.viewportWidth,
      );
    return _0xfa5fb1 == null && _0x1c3bba == null
      ? undefined
      : {
          height: _0xfa5fb1 == null ? undefined : _0xfa5fb1.height,
          verticalBreaks: _0xfa5fb1 == null ? undefined : _0xfa5fb1.breaks,
          width: _0x1c3bba,
        };
  }
};
Xm = $([Q(0, _0x1ec08d), Q(1, _0xca7423), Q(2, _0x28bf49)], Xm);
function Zm(_0x46fc3e, _0xe85aaa, _0x2d44aa, _0x2e0486, _0x3c5e7b, _0x1d7fbc) {
  var _0x3e0497;
  let _0x24a131 = rh(
      _0x46fc3e,
      _0xe85aaa == null ? undefined : _0xe85aaa.activeTableId,
    ),
    _0xfeebc4 = _0x24a131 ? _0x46fc3e.tables[_0x24a131] : undefined;
  if (!_0xfeebc4 || !_0x24a131) return;
  let _0x1531c8 = ih(
      _0xfeebc4,
      _0xe85aaa == null ? undefined : _0xe85aaa.activeViewId,
    ),
    _0x15ec71 = _0x1531c8
      ? (_0x3e0497 = _0xfeebc4.views) == null
        ? undefined
        : _0x3e0497[_0x1531c8]
      : undefined,
    _0x4a85bd = ah(_0xfeebc4),
    _0x73d29b = _0x28f62e(
      _0x15ec71 != null && _0x15ec71.config && "rowHeight" in _0x15ec71.config
        ? _0x15ec71.config["rowHeight"]
        : undefined,
    );
  return (
    Qm(
      _0x46fc3e,
      _0x24a131,
      _0x1531c8,
      _0x73d29b,
      _0xe85aaa,
      _0x2d44aa,
      _0x2e0486,
      _0x3c5e7b,
      _0x1d7fbc,
    ) ?? {
      breaks: Array(_0x4a85bd)
        .fill(null)
        .map((_0x1c15da, _0x16578c) => _0x5db3f7 + (_0x16578c + 1) * _0x73d29b),
      height: _0x5db3f7 + _0x4a85bd * _0x73d29b + _0x3de8d9 + _0x56e232,
    }
  );
}
function Qm(
  _0x285783,
  _0x36e228,
  _0x2f54a3,
  _0x4ef6fd,
  _0x4008ec,
  _0x1a93ea,
  _0x1ae9ca,
  _0x5dbddf,
  _0x5f37ee,
) {
  if (!_0x2f54a3 || !_0x1a93ea || !_0x1ae9ca) return;
  let _0x28a900 = _0x1a93ea.getProjection(_0x285783, _0x36e228, _0x2f54a3);
  if (
    _0x28a900.type === _0xab778.Calendar &&
    _0x28a900.config["mode"] === "month" &&
    _0x5dbddf != null
  )
    return { height: _0x5dbddf };
  if (_0x28a900.type === _0xab778.Gallery)
    return {
      height: _0x1ae9ca.getGalleryProjectionBodyHeight(
        _0x28a900,
        _0x5f37ee ?? 1,
      ),
    };
  if (_0x28a900.type === _0xab778.Kanban)
    return { height: _0x1ae9ca.getKanbanProjectionBodyHeight(_0x28a900) };
  if (_0x28a900.type === _0xab778.Grid || _0x28a900.type === _0xab778.Gantt) {
    let _0x42acd6 =
      _0x4008ec == null ? undefined : _0x4008ec.collapsedGroupPaths[_0x2f54a3];
    return {
      breaks: _0x44a376(_0x28a900, _0x42acd6, _0x4ef6fd).map(
        (_0x3a7303) => _0x5db3f7 + _0x3a7303.y + _0x3a7303.height,
      ),
      height:
        _0x5db3f7 +
        _0x1ae9ca.getGridProjectionBodyHeight(_0x28a900, _0x42acd6, _0x4ef6fd) +
        _0x56e232,
    };
  }
}
function $m(_0x52b29c, _0x9ce6ba, _0x23ab55) {
  var _0x384080, _0x39e25b;
  let _0x250430 = th(
    _0x52b29c,
    _0x9ce6ba == null ? undefined : _0x9ce6ba.activeTableId,
  );
  if (!_0x250430) return;
  let _0x7ba3a4 = nh(
      _0x250430,
      _0x9ce6ba == null ? undefined : _0x9ce6ba.activeViewId,
    ),
    _0x104767 = _0x250430.fields ?? {},
    _0x47ba68 =
      _0x46f6be +
      (_0x7ba3a4 != null &&
      (_0x384080 = _0x7ba3a4.fieldOrder) != null &&
      _0x384080.length
        ? _0x7ba3a4.fieldOrder
        : (_0x39e25b = _0x250430.fieldOrder) != null && _0x39e25b.length
          ? _0x250430.fieldOrder
          : Object.keys(_0x104767)
      ).reduce((_0x3d0a8c, _0x30f501) => {
        var _0x23bc9b;
        let _0x58a27e = _0x104767[_0x30f501],
          _0x1d5fa3 =
            _0x7ba3a4 == null || (_0x23bc9b = _0x7ba3a4.fieldSettings) == null
              ? undefined
              : _0x23bc9b[_0x30f501];
        return _0x58a27e && !(_0x1d5fa3 != null && _0x1d5fa3.hidden)
          ? _0x3d0a8c + eh(_0x1d5fa3 == null ? undefined : _0x1d5fa3.width)
          : _0x3d0a8c;
      }, 0) +
      _0x1f1f22;
  return (_0x7ba3a4 == null ? undefined : _0x7ba3a4.type) ===
    _0xab778.Gallery ||
    (_0x7ba3a4 == null ? undefined : _0x7ba3a4.type) === _0xab778.Kanban
    ? Math.max(_0x47ba68, _0x23ab55 ?? 0)
    : _0x47ba68;
}
function eh(_0x15dd41) {
  return typeof _0x15dd41 == "number" &&
    Number.isFinite(_0x15dd41) &&
    _0x15dd41 > 0
    ? _0x15dd41
    : _0x46d976;
}
function th(_0x5ad021, _0x3cf220) {
  var _0x55e4ba;
  let _0x264d55 = rh(_0x5ad021, _0x3cf220);
  return _0x264d55
    ? (_0x55e4ba = _0x5ad021.tables) == null
      ? undefined
      : _0x55e4ba[_0x264d55]
    : undefined;
}
function nh(_0x282083, _0x2c2207) {
  var _0x389bc0;
  let _0x1aed70 = ih(_0x282083, _0x2c2207);
  return _0x1aed70
    ? (_0x389bc0 = _0x282083.views) == null
      ? undefined
      : _0x389bc0[_0x1aed70]
    : undefined;
}
function rh(_0x14783f, _0x54bf44) {
  let _0x36a77e = _0x14783f.tables ?? {};
  if (_0x54bf44 && _0x36a77e[_0x54bf44]) return _0x54bf44;
  let _0x8660a2 = _0x14783f.tableOrder ?? [];
  return [
    ..._0x8660a2,
    ...Object.keys(_0x36a77e).filter(
      (_0x1ecc43) => !_0x8660a2.includes(_0x1ecc43),
    ),
  ].find((_0x4658d9) => _0x36a77e[_0x4658d9]);
}
function ih(_0x3ee8ba, _0x44ebf8) {
  let _0x8f8158 = _0x3ee8ba.views ?? {};
  if (_0x44ebf8 && _0x8f8158[_0x44ebf8]) return _0x44ebf8;
  let _0x2b139f = _0x3ee8ba.viewOrder ?? [];
  return [
    ..._0x2b139f,
    ...Object.keys(_0x8f8158).filter(
      (_0x48d150) => !_0x2b139f.includes(_0x48d150),
    ),
  ].find((_0x413754) => _0x8f8158[_0x413754]);
}
function ah(_0x27154b) {
  var _0x5a67af;
  let _0x4ca65c = _0x27154b.records ?? {};
  return (
    (_0x5a67af = _0x27154b.recordOrder) != null && _0x5a67af.length
      ? _0x27154b.recordOrder
      : Object.keys(_0x4ca65c)
  ).filter((_0x110f25) => _0x4ca65c[_0x110f25]).length;
}
function oh(_0x4f4006, _0x3c9925, _0x483c9a) {
  return {
    ..._0x3b8aa4(_0x4f4006, _0x3c9925),
    activateAnchor: (_0x3eaf3a) => {
      ch(
        _0x3eaf3a.hostUnitId,
        _0x3eaf3a.hostAnchorId,
        _0x3c9925,
        uh(_0x483c9a),
      );
    },
  };
}
function sh() {
  return {
    hostType: _0x513c12.UNIVER_BASE,
    entry: "bases-table-list-block",
    layout: "tab-peer",
    supportedLayouts: ["tab-peer"],
    menuBehavior: "host-override",
    mount: (_0x5574e9) => {
      let _0x564616 = dh(
        "data-embed-bases-table-list-host",
        _0x5574e9.descriptor["hostAnchorId"],
      );
      return _0x564616 ? { hostElement: _0x564616 } : {};
    },
  };
}
function ch(_0x2531c4, _0x1ac396, _0x889d5, _0x1d29d7) {
  var _0x58a8fb;
  if (!_0x1d29d7) return;
  _0x1d29d7.activateTable(_0x1ac396);
  let _0x364aa5 =
      (_0x58a8fb = lh(_0x889d5, _0x2531c4)) == null
        ? undefined
        : _0x58a8fb.tables[_0x1ac396],
    _0x1a9e3c =
      _0x364aa5 == null
        ? undefined
        : _0x364aa5.viewOrder["find"](
            (_0x218403) => _0x364aa5.views[_0x218403],
          );
  (_0x1a9e3c && _0x1d29d7.activateView(_0x1a9e3c),
    _0x1d29d7.setSelection(null),
    _0x1d29d7.closeRecordDetail());
}
function lh(_0x8c6ff0, _0x20ff13) {
  var _0x2b127f;
  return _0x8c6ff0 == null ||
    (_0x2b127f = _0x8c6ff0.getUnit(_0x20ff13, _0x513c12.UNIVER_BASE)) == null
    ? undefined
    : _0x2b127f.getSnapshot();
}
function uh(_0x33dc73) {
  return typeof _0x33dc73 == "function" ? _0x33dc73() : _0x33dc73;
}
function dh(_0x5173e9, _0x62e1e9) {
  return document.querySelector(
    "[" + _0x5173e9 + "=\x22" + fh(_0x62e1e9) + "\x22]",
  );
}
function fh(_0xeff02a) {
  return _0xeff02a.replace(/\\/g, "\x5c\x5c").replace(/"/g, "\x5c\x22");
}
function ph(_0x94468c) {
  let _0xfad04d = _0x94468c.has(_0x1ec08d)
      ? _0x94468c.get(_0x1ec08d)
      : undefined,
    _0x5303a5 = _0x94468c.has(_0x28bf49) ? _0x94468c.get(_0x28bf49) : undefined,
    _0x4a2f88 = new Set();
  return {
    childType: _0x513c12.UNIVER_BASE,
    getHorizontalScroll(_0x169132) {
      var _0x31d3d1;
      let _0x241551 = _0x5ca6c9(_0x169132),
        _0x485824 = _0x241551 == null ? undefined : _0x241551.getState();
      return _0x485824 != null && _0x485824.activeViewId
        ? (((_0x31d3d1 = _0x485824.scrollState[_0x485824.activeViewId]) == null
            ? undefined
            : _0x31d3d1.x) ?? 0)
        : 0;
    },
    getVerticalScroll(_0x3f88fb) {
      var _0x5ac40e;
      let _0x49e395 = _0x5ca6c9(_0x3f88fb),
        _0x5cadad = _0x49e395 == null ? undefined : _0x49e395.getState();
      return _0x5cadad != null && _0x5cadad.activeViewId
        ? (((_0x5ac40e = _0x5cadad.scrollState[_0x5cadad.activeViewId]) == null
            ? undefined
            : _0x5ac40e.y) ?? 0)
        : 0;
    },
    getStickyLeftWidth: () => _0x46f6be,
    getStickyHeaderHeight: () => _0x5db3f7,
    getStickyFooterHeight: () => _0x56e232,
    subscribeVerticalScroll(_0x5413c7, _0x330da0) {
      var _0x1bb26f;
      let _0x3947c0 = _0x5ca6c9(_0x5413c7);
      if (!_0x3947c0) return;
      let _0x38d9f8 = _0x3947c0.getState(),
        _0x30e48a = _0x38d9f8.activeViewId,
        _0x123837 = _0x30e48a
          ? (((_0x1bb26f = _0x38d9f8.scrollState[_0x30e48a]) == null
              ? undefined
              : _0x1bb26f.y) ?? 0)
          : 0,
        _0x1f2023 = _0x3947c0.state$["subscribe"]((_0x2548e6) => {
          var _0x2074cf;
          let _0x2bb750 = _0x2548e6.activeViewId,
            _0x145ff0 = _0x2bb750
              ? (((_0x2074cf = _0x2548e6.scrollState[_0x2bb750]) == null
                  ? undefined
                  : _0x2074cf.y) ?? 0)
              : 0;
          if (_0x2bb750 !== _0x30e48a) {
            ((_0x30e48a = _0x2bb750), (_0x123837 = _0x145ff0));
            return;
          }
          _0x145ff0 !== _0x123837 &&
            ((_0x123837 = _0x145ff0),
            !_0x4a2f88.has(_0x5413c7.childUnitId) && _0x330da0(_0x145ff0));
        });
      return _0x11d17f(() => _0x1f2023.unsubscribe());
    },
    handleWheel(_0x3b81c4) {
      if (
        _0x3b81c4.source !== "host-scroll-sync" &&
        _0x3b81c4.source !== "print-capture" &&
        Du(_0x3b81c4.layout, _0x3b81c4.event)
      )
        return false;
      let _0x325af8 = _0x3b81c4.runtimeScope["injector"] ?? _0x94468c,
        _0x2572c9 =
          _0x325af8 !== _0x94468c && _0x325af8.has(_0x28bf49)
            ? _0x325af8.get(_0x28bf49)
            : _0x5303a5,
        _0x2c3469 = _0x3b81c4.source === "print-capture";
      _0x2c3469 && _0x4a2f88.add(_0x3b81c4.childUnitId);
      try {
        if (_0x3b81c4.viewportScrollX != null) {
          let _0x1f3066 = _0x5ca6c9(_0x3b81c4),
            _0x425fbd = _0x1f3066 == null ? undefined : _0x1f3066.getState(),
            _0x34b4b7 = _0x425fbd == null ? undefined : _0x425fbd.activeViewId;
          if (_0x1f3066 && _0x425fbd && _0x34b4b7) {
            let _0x2a0eef = _0x425fbd.scrollState[_0x34b4b7] ?? { x: 0, y: 0 };
            return (
              _0x1f3066.setScrollState(_0x34b4b7, {
                x: _0x3b81c4.viewportScrollX,
                y: _0x3b81c4.viewportScrollY ?? _0x2a0eef.y,
              }),
              true
            );
          }
        }
        return (
          (_0x2572c9 == null
            ? undefined
            : _0x2572c9.handleRegisteredWheel(
                _0x3b81c4.childUnitId,
                mh(_0x3b81c4.event, _0x3b81c4.viewportScrollY),
              )) ?? false
        );
      } finally {
        _0x2c3469 && _0x4a2f88.delete(_0x3b81c4.childUnitId);
      }
    },
  };
  function _0x5ca6c9(_0x5a50a2) {
    var _0x3310b6;
    let _0x49c9b2 =
      ((_0x3310b6 = _0x5a50a2.runtimeScope) == null
        ? undefined
        : _0x3310b6.injector) ?? _0x94468c;
    return _0x49c9b2 !== _0x94468c && _0x49c9b2.has(_0x1ec08d)
      ? _0x49c9b2.get(_0x1ec08d)
      : _0xfad04d;
  }
}
function mh(_0x5cc138, _0x1f93c9) {
  return {
    deltaX: _0x5cc138.deltaX,
    deltaY: _0x5cc138.deltaY,
    deltaMode: _0x5cc138.deltaMode,
    clientX: _0x5cc138.clientX,
    clientY: _0x5cc138.clientY,
    shiftKey: _0x5cc138.shiftKey,
    viewportScrollY: _0x1f93c9,
  };
}
function hh(_0x52bb55, _0x17431e, _0x2bfa01) {
  let _0x265166 = _0x52bb55.descriptor["displayTarget"];
  return (
    _0x2bfa01(_0x265166),
    _0x17431e.onCommandExecuted((_0x31cbc7) => {
      if (!gh(_0x31cbc7)) return;
      let { params: _0x5be610 } = _0x31cbc7;
      if (
        _0x5be610.unitId !== _0x52bb55.hostUnitId ||
        _0x5be610.descriptor["embedId"] !== _0x52bb55.embedId
      )
        return;
      let _0x575e1f = _0x5be610.descriptor["displayTarget"];
      _0x266bc3(_0x265166 ?? {}, _0x575e1f ?? {}) ||
        ((_0x265166 = _0x575e1f), _0x2bfa01(_0x575e1f));
    })
  );
}
function gh(_0x5cb3bf) {
  return (
    _0x5cb3bf.id === _0x2382be.id &&
    _0x5cb3bf.params !== undefined &&
    "unitId" in _0x5cb3bf.params &&
    typeof _0x5cb3bf.params["unitId"] == "string" &&
    "descriptor" in _0x5cb3bf.params &&
    typeof _0x5cb3bf.params["descriptor"] == "object" &&
    _0x5cb3bf.params["descriptor"] !== null &&
    "embedId" in _0x5cb3bf.params["descriptor"] &&
    typeof _0x5cb3bf.params["descriptor"].embedId == "string"
  );
}
function _h(_0xdb7edb, _0x3fc541) {
  return {
    childType: _0x513c12.UNIVER_BASE,
    supportedLayouts: ["tab-peer", "docs-sticky-base", "scroll-contained"],
    beforeDeactivate: vh,
    mount: (_0x4e84ee) => yh(_0x4e84ee, _0xdb7edb, _0x3fc541),
  };
}
function vh(_0x24f384) {
  var _0x4659a0;
  (_0x4659a0 = _0x24f384.runtimeScope["commandService"]) == null ||
    _0x4659a0.syncExecuteCommand(_0x2f3c75.id, { commit: false });
}
function yh(_0x411740, _0x101bf5, _0x411626) {
  let _0x3e25e0 = _0x411740.injector["get"](_0x3e617f).getUnit(
    _0x411740.childUnitId,
    _0x513c12.UNIVER_BASE,
  );
  if (!_0x3e25e0) return;
  let _0x23b15f = new _0x2ad38d(),
    _0x4d3e38 = new _0x15502d(),
    _0x4143c3 = new _0x4be4f4(_0x23b15f),
    _0x5e0d10 = new _0xea83dd(),
    _0x2e5256 = Dh(_0x411740, _0x23b15f, _0x4d3e38, _0x4143c3);
  if (!_0x2e5256) {
    (_0x5e0d10.dispose(),
      _0x4143c3.dispose(),
      _0x4d3e38.dispose(),
      _0x23b15f.dispose());
    return;
  }
  let _0x3e8ac8 = Mh(_0x411740),
    _0x28b33b = _0x2e5256.get(_0x5851e6),
    _0x2eaf70 = () => {
      var _0x5bac7a;
      return new Set(
        ((_0x5bac7a = _0x28b33b.get()) == null
          ? undefined
          : _0x5bac7a
              .getItems(_0x3e25e0.getUnitId())
              .map((_0xaf7426) => _0xaf7426.id)) ?? [],
      );
    };
  kh(
    _0x23b15f,
    _0x3e25e0,
    _0x3e8ac8,
    _0x411740.descriptor["displayTarget"],
    _0x2eaf70(),
  );
  let _0xdb33cf = hh(_0x411740, _0x101bf5, (_0x32c636) =>
      jh(_0x23b15f, _0x3e25e0, _0x32c636, _0x2eaf70()),
    ),
    _0x4548e2 = Nh(
      _0x2e5256,
      _0x23b15f,
      _0x4d3e38,
      _0x4143c3,
      _0x3e8ac8,
      _0x5e0d10,
      _0x411740.descriptor["mode"] === "readonly",
      _0x411740.runtimeScope["roots"].popup,
    );
  xh(_0x411740, _0x4548e2);
  let _0x30904f = _0x411626.register({
      unitId: _0x411740.childUnitId,
      roots: bh(_0x411740),
      clipboardService: _0x4548e2.get(_0x457e6f),
      commandService: _0x4548e2.get(_0x42e186),
      editorService: _0x4143c3,
      stateService: _0x23b15f,
    }),
    _0xcb0d8c = _0x411740.injector["get"](Bf),
    _0x3f6f03 = "",
    _0xb04b21 = _0x23b15f.state$["subscribe"]((_0x3223e1) => {
      let _0x2fbdf0 = _0x3223e1.activeViewId
          ? [...(_0x3223e1.collapsedGroupPaths[_0x3223e1.activeViewId] ?? [])]
              .sort()
              .join("\x00")
          : "",
        _0x4a75f4 =
          (_0x3223e1.activeTableId ?? "") +
          "\x00" +
          (_0x3223e1.activeViewId ?? "") +
          "\x00" +
          _0x2fbdf0;
      _0x4a75f4 !== _0x3f6f03 &&
        ((_0x3f6f03 = _0x4a75f4),
        _0xcb0d8c.notifyContentSizeChanged(
          _0x411740.hostUnitId,
          _0x411740.embedId,
        ));
    }),
    _0x285d4f = Sh(_0x411740),
    _0x2ef7c7 = Sl(_0x285d4f),
    _0x3f3b79 = Ch(_0x411740, _0x4548e2),
    _0x5a0c15 = _0x411740.injector["get"](_0x3e617f),
    _0x18813a = _0x5a0c15.getCurrentUnitOfType(_0x513c12.UNIVER_BASE);
  return (
    _0x5a0c15.setCurrentUnitForType(_0x411740.childUnitId),
    (_0x285d4f.dataset["embedChildRenderUnitId"] = _0x411740.childUnitId),
    (_0x285d4f.dataset["embedChildRenderMode"] = "base-workbench"),
    _0x2ef7c7.render(
      _0x29e1d8(fl, {
        injector: _0x4548e2,
        mountContainer: _0x411740.runtimeScope["roots"].popup,
        embedId: _0x411740.embedId,
        children: _0x29e1d8(_0x225263, {}),
      }),
    ),
    _0x11d17f(() => {
      (_0x30904f.dispose(),
        _0xdb33cf.dispose(),
        _0xb04b21.unsubscribe(),
        _0x3f3b79.dispose(),
        Cl(_0x2ef7c7),
        _0x18813a && _0x5a0c15.setCurrentUnitForType(_0x18813a.getUnitId()),
        _0x5e0d10.dispose(),
        _0x4143c3.dispose(),
        _0x4d3e38.dispose(),
        _0x23b15f.dispose(),
        _0x4548e2.dispose(),
        _0x285d4f.isConnected &&
          (_0x285d4f.removeAttribute("data-embed-child-render-unit-id"),
          _0x285d4f.removeAttribute("data-embed-child-render-mode")));
    })
  );
}
function bh(_0x206d08) {
  let _0x3d3bdd = new Set();
  return (
    _0x3d3bdd.add(_0x206d08.runtimeScope["roots"].root),
    _0x3d3bdd.add(_0x206d08.runtimeScope["roots"].content),
    _0x3d3bdd.add(_0x206d08.runtimeScope["roots"].overlay),
    _0x3d3bdd.add(_0x206d08.runtimeScope["roots"].popup),
    _0x206d08.runtimeScope["roots"].canvas &&
      _0x3d3bdd.add(_0x206d08.runtimeScope["roots"].canvas),
    _0x206d08.runtimeScope["roots"].menuSlot &&
      _0x3d3bdd.add(_0x206d08.runtimeScope["roots"].menuSlot),
    [..._0x3d3bdd]
  );
}
function xh(_0x1d9694, _0x11764c) {
  ((_0x1d9694.runtimeScope["injector"] = _0x11764c),
    (_0x1d9694.runtimeScope["instanceService"] = _0x11764c.get(_0x3e617f)),
    (_0x1d9694.runtimeScope["commandService"] = _0x11764c.get(_0x42e186)));
}
function Sh(_0x172287) {
  var _0x532542, _0x560b74, _0x351a33;
  return (
    ((_0x532542 = _0x172287.runtimeScope) == null ||
    (_0x532542 = _0x532542.roots) == null
      ? undefined
      : _0x532542.content) ??
    ((_0x560b74 = _0x172287.renderScope) == null
      ? undefined
      : _0x560b74.contentRoot) ??
    ((_0x351a33 = _0x172287.renderScope) == null
      ? undefined
      : _0x351a33.rootElement) ??
    document
  );
}
function Ch(_0xa24023, _0x2156c8) {
  let _0x8927b8 = false,
    _0x3acc4a = 0,
    _0x1d7647 = _0x11d17f(() => {}),
    _0x40150c,
    _0x4d60dd = () => {
      if (_0x8927b8) return;
      let _0x12f1f1 = () => {
          _0x3acc4a = window.requestAnimationFrame(_0x4d60dd);
        },
        _0x9b013 = wh(_0xa24023);
      if (!Th(_0x9b013)) {
        ((_0xa24023.container["dataset"].embedChildRenderStatus =
          "waiting-base-canvas-root"),
          _0x12f1f1());
        return;
      }
      if (_0x40150c === _0x9b013 && _0x9b013.querySelector("canvas")) return;
      _0x1d7647.dispose();
      let _0x663fe5 = _0xa24023.injector["get"](_0x2db5c6),
        _0x4f93d6;
      try {
        _0x4f93d6 = Kc(_0x663fe5, _0xa24023.childUnitId, _0x2156c8);
      } catch (_0x3bd403) {
        ((_0xa24023.container["dataset"].embedChildRenderError =
          _0x3bd403 instanceof Error ? _0x3bd403.message : String(_0x3bd403)),
          (_0x4f93d6 = undefined));
      }
      if (!_0x4f93d6) {
        ((_0xa24023.container["dataset"].embedChildRenderStatus =
          "retrying-base-child-render"),
          (_0x40150c = undefined),
          _0x12f1f1());
        return;
      }
      (delete _0xa24023.container["dataset"].embedChildRenderError,
        (_0x9b013.dataset["embedChildRenderUnitId"] = _0xa24023.childUnitId),
        _0x4f93d6.engine["mount"](_0x9b013),
        Jc(_0x4f93d6, { activate: Eh(_0xa24023) }));
      let _0x294e59 = Hc(_0x4f93d6, _0x9b013, { activate: false });
      ((_0x1d7647 = _0x11d17f(() => {
        _0x294e59.dispose();
        try {
          var _0x50399b, _0x17abcd;
          (_0x50399b = (_0x17abcd = _0x4f93d6.engine).unmount) == null ||
            _0x50399b.call(_0x17abcd);
        } catch {}
        (_0x663fe5.removeRender(_0xa24023.childUnitId),
          _0x9b013.removeAttribute("data-embed-child-render-unit-id"));
      })),
        (_0x40150c = _0x9b013),
        (_0xa24023.container["dataset"].embedChildRenderStatus = "mounted"),
        _0x12f1f1());
    };
  return (
    (_0x3acc4a = window.requestAnimationFrame(_0x4d60dd)),
    _0x11d17f(() => {
      ((_0x8927b8 = true),
        window.cancelAnimationFrame(_0x3acc4a),
        _0x1d7647.dispose());
    })
  );
}
function wh(_0x396180) {
  return _0x228c44({ unitId: _0x396180.childUnitId, scope: Sh(_0x396180) });
}
function Th(_0x3f3880) {
  return (
    !!_0x3f3880 &&
    _0x3f3880.isConnected &&
    _0x3f3880.clientWidth > 0 &&
    _0x3f3880.clientHeight > 0
  );
}
function Eh(_0x560d5d) {
  return true;
}
function Dh(_0x3b04d1, _0x56a9e2, _0x52d12a, _0x26b76c) {
  let _0x485a2a = _0x3b04d1.injector["get"](_0x3e617f),
    _0x3552bd = _0x485a2a.getUnit(_0x3b04d1.childUnitId, _0x3b04d1.childType);
  if (!_0x3552bd) return;
  let _0x27ce11 = Oh(_0x485a2a, _0x3b04d1, _0x3552bd),
    _0x5f1d2b = Ph(
      _0x3b04d1.injector["get"](_0x42e186),
      _0x56a9e2,
      _0x52d12a,
      _0x26b76c,
      _0x3b04d1.injector["get"](_0xca7423),
      _0x3b04d1.injector["get"](_0x46b4fe),
      _0x485a2a,
      _0x3b04d1.childUnitId,
    ),
    _0x28274e = new Map([
      [_0x3e617f, _0x27ce11],
      [_0x42e186, _0x5f1d2b],
      [_0x30c7f7, _0x1c3ffe(Sh(_0x3b04d1))],
    ]);
  return (
    _0x3b04d1.injector["has"](_0x405ebf) &&
      _0x28274e.set(_0x405ebf, rc(_0x3b04d1.injector["get"](_0x405ebf))),
    ac(_0x3b04d1.injector, _0x28274e)
  );
}
function Oh(_0x39659c, _0x24d334, _0x433e82) {
  return {
    unitAdded$: _0x39659c.unitAdded$,
    unitDisposed$: _0x39659c.unitDisposed$,
    focused$: _0x2bd05a(_0x433e82.getUnitId()),
    getTypeOfUnitAdded$: _0x39659c.getTypeOfUnitAdded$["bind"](_0x39659c),
    __addUnit: _0x39659c.__addUnit["bind"](_0x39659c),
    getTypeOfUnitDisposed$: _0x39659c.getTypeOfUnitDisposed$["bind"](_0x39659c),
    focusUnit: (_0x4fd4d1) => {
      _0x4fd4d1 !== null &&
        _0x4fd4d1 !== _0x24d334.childUnitId &&
        _0x39659c.focusUnit(_0x4fd4d1);
    },
    getFocusedUnit: () => _0x433e82,
    getCurrentUnitOfType: (_0x15bfb6) =>
      _0x15bfb6 === _0x24d334.childType
        ? _0x433e82
        : _0x39659c.getCurrentUnitOfType(_0x15bfb6),
    setCurrentUnitForType: (_0x24b07f) => {
      _0x24b07f !== _0x24d334.childUnitId &&
        _0x39659c.setCurrentUnitForType(_0x24b07f);
    },
    getCurrentTypeOfUnit$: (_0x15e376) =>
      _0x15e376 === _0x24d334.childType
        ? _0x2bd05a(_0x433e82)
        : _0x39659c.getCurrentTypeOfUnit$(_0x15e376),
    createUnit: _0x39659c.createUnit["bind"](_0x39659c),
    getUnitCreateOptions: _0x39659c.getUnitCreateOptions["bind"](_0x39659c),
    disposeUnit: _0x39659c.disposeUnit["bind"](_0x39659c),
    registerCtorForType: _0x39659c.registerCtorForType["bind"](_0x39659c),
    getUnit: _0x39659c.getUnit["bind"](_0x39659c),
    getAllUnitsForType: (_0xba47bd) =>
      _0xba47bd === _0x24d334.childType
        ? [_0x433e82]
        : _0x39659c.getAllUnitsForType(_0xba47bd),
    getUnitType: _0x39659c.getUnitType["bind"](_0x39659c),
  };
}
function kh(
  _0x51787c,
  _0x5a0ecd,
  _0x1f4d5d = "workbench",
  _0x4bab6f,
  _0x3a21a4,
) {
  let {
    dashboardId: _0xd63025,
    tableId: _0x5d7d43,
    viewId: _0x22418e,
  } = Ah(_0x5a0ecd, _0x4bab6f, _0x3a21a4);
  (_0x5d7d43 && _0x51787c.activateTable(_0x5d7d43),
    _0x22418e && _0x51787c.activateView(_0x22418e),
    _0xd63025 && _0x51787c.activateDashboard(_0xd63025),
    _0x51787c.setLeftSidebarVisible(_0x1f4d5d === "workbench"));
}
function Ah(_0x664020, _0x571282, _0x4d5dcb) {
  var _0x237892, _0x4b5a9d, _0x48cfef, _0x51e285, _0x4391a5;
  let _0x2ca9ca = _0x664020.getSnapshot(),
    _0x162aa6 = _0x571282 == null ? undefined : _0x571282.tableId,
    _0x3f2c70 =
      _0x162aa6 &&
      (_0x237892 = _0x2ca9ca.tables) != null &&
      _0x237892[_0x162aa6]
        ? _0x162aa6
        : (((_0x4b5a9d = _0x2ca9ca.tableOrder) == null
            ? undefined
            : _0x4b5a9d.find((_0x5bacee) => {
                var _0x4c53d0;
                return !!(
                  (_0x4c53d0 = _0x2ca9ca.tables) != null && _0x4c53d0[_0x5bacee]
                );
              })) ??
          Object.keys(_0x2ca9ca.tables ?? {})[0] ??
          ""),
    _0x292c3e =
      (_0x48cfef = _0x2ca9ca.tables) == null ? undefined : _0x48cfef[_0x3f2c70],
    _0x3db691 = _0x571282 == null ? undefined : _0x571282.viewId,
    _0x2a30fc =
      _0x3db691 &&
      _0x292c3e != null &&
      (_0x51e285 = _0x292c3e.views) != null &&
      _0x51e285[_0x3db691]
        ? _0x3db691
        : _0x292c3e == null || (_0x4391a5 = _0x292c3e.viewOrder) == null
          ? undefined
          : _0x4391a5.find((_0x5be6f2) => {
              var _0x57006a;
              return !!(
                (_0x57006a = _0x292c3e.views) != null && _0x57006a[_0x5be6f2]
              );
            }),
    _0x491b2d =
      _0x571282 != null &&
      _0x571282.dashboardId &&
      _0x4d5dcb != null &&
      _0x4d5dcb.has(_0x571282.dashboardId)
        ? _0x571282.dashboardId
        : undefined;
  return {
    tableId: _0x3f2c70,
    ...(_0x2a30fc ? { viewId: _0x2a30fc } : {}),
    ...(_0x491b2d ? { dashboardId: _0x491b2d } : {}),
  };
}
function jh(_0x327606, _0x16112c, _0x5a39aa, _0x45b166) {
  let _0x1a1828 = Ah(_0x16112c, _0x5a39aa, _0x45b166),
    _0x234ba2 = _0x327606.getState();
  (_0x1a1828.tableId &&
    (_0x234ba2.activeTableId !== _0x1a1828.tableId ||
      (!_0x1a1828.dashboardId && _0x234ba2.activeDashboardId)) &&
    _0x327606.activateTable(_0x1a1828.tableId),
    _0x1a1828.viewId &&
      _0x327606.getState().activeViewId !== _0x1a1828.viewId &&
      _0x327606.activateView(_0x1a1828.viewId),
    _0x1a1828.dashboardId &&
      _0x327606.getState().activeDashboardId !== _0x1a1828.dashboardId &&
      _0x327606.activateDashboard(_0x1a1828.dashboardId));
}
function Mh(_0x1e4973) {
  return _0x1e4973.renderScope["fullscreen"]
    ? "fullscreen"
    : _0x1e4973.renderScope["mode"] === "float"
      ? "content-only"
      : "workbench";
}
function Nh(
  _0x5c1365,
  _0x4e6272,
  _0x4d68ed = new _0x15502d(),
  _0x50436a = new _0x4be4f4(_0x4e6272),
  _0x1b843e = "workbench",
  _0x1dcc94,
  _0x5ddd26 = false,
  _0x3f0753,
) {
  let _0x4debb0 = Rh(_0x5c1365.get(_0x405ebf), _0x1b843e),
    _0x232fb6 = Ph(
      _0x5c1365.get(_0x42e186),
      _0x4e6272,
      _0x4d68ed,
      _0x50436a,
      _0x5c1365.get(_0xca7423),
      _0x5c1365.get(_0x46b4fe),
      _0x5c1365.get(_0x3e617f),
      undefined,
      _0x5ddd26,
    ),
    _0x54f642 = new Map([
      [_0x1ec08d, _0x4e6272],
      [_0x113ff4, _0x4d68ed],
      [_0x1296ad, _0x50436a],
      [_0x42e186, _0x232fb6],
      [_0x405ebf, _0x4debb0],
      [_0x30c7f7, _0x5c1365.get(_0x30c7f7)],
      [_0x431af1, _0xe89372(_0x3f0753)],
    ]);
  _0x1dcc94 && _0x54f642.set(_0x28bf49, _0x1dcc94);
  let _0x5223f3 = ac(_0x5c1365, _0x54f642);
  return (_0x5223f3.add([_0x457e6f, { useClass: _0x2d8aba }]), _0x5223f3);
}
function Ph(
  _0x1c8b15,
  _0x37b23b,
  _0x165c08,
  _0x248756,
  _0xc98af4,
  _0xa25f82,
  _0x150789,
  _0x342b66,
  _0x5a1b67 = false,
) {
  let _0x33ff79 = {
    disposed: _0x1c8b15.disposed["bind"](_0x1c8b15),
    hasCommand: _0x1c8b15.hasCommand["bind"](_0x1c8b15),
    registerCommand: _0x1c8b15.registerCommand["bind"](_0x1c8b15),
    unregisterCommand: _0x1c8b15.unregisterCommand["bind"](_0x1c8b15),
    registerMultipleCommand:
      _0x1c8b15.registerMultipleCommand["bind"](_0x1c8b15),
    executeCommand: async (..._0x599aca) => {
      if (_0x599aca[0] === _0x41d0ba.id && _0x150789)
        return _0x3f4947(
          {
            commandService: _0x33ff79,
            instanceService: _0x150789,
            projectionService: _0xc98af4,
            stateService: _0x37b23b,
          },
          _0x599aca[1],
        );
      let _0x378d34 = Fh(
        _0x599aca[0],
        _0x599aca[1],
        _0x37b23b,
        _0x165c08,
        _0x150789,
        _0x342b66,
      );
      if (_0x378d34 !== undefined) return _0x378d34;
      let _0x4cf120 = Ih(
        _0x599aca[0],
        _0x599aca[1],
        _0x248756,
        _0xa25f82,
        _0x150789,
        _0x342b66,
        _0x5a1b67,
      );
      if (_0x4cf120 !== undefined) return _0x4cf120;
      let _0xa4e014 = _0x342b66
        ? _0x150789 == null
          ? undefined
          : _0x150789.getCurrentUnitOfType(_0x513c12.UNIVER_BASE)
        : undefined;
      try {
        return (
          _0x342b66 &&
            (_0x150789 == null || _0x150789.setCurrentUnitForType(_0x342b66)),
          await _0x1c8b15.executeCommand(
            _0x599aca[0],
            _0x599aca[1],
            _0x599aca[2],
          )
        );
      } finally {
        _0xa4e014 &&
          (_0x150789 == null ||
            _0x150789.setCurrentUnitForType(_0xa4e014.getUnitId()));
      }
    },
    syncExecuteCommand: (..._0x256ccf) => {
      if (_0x256ccf[0] === _0x41d0ba.id && _0x150789)
        return _0x3f4947(
          {
            commandService: _0x33ff79,
            instanceService: _0x150789,
            projectionService: _0xc98af4,
            stateService: _0x37b23b,
          },
          _0x256ccf[1],
        );
      let _0x38ac8f = Fh(
        _0x256ccf[0],
        _0x256ccf[1],
        _0x37b23b,
        _0x165c08,
        _0x150789,
        _0x342b66,
      );
      if (_0x38ac8f !== undefined) return _0x38ac8f;
      let _0x169959 = Ih(
        _0x256ccf[0],
        _0x256ccf[1],
        _0x248756,
        _0xa25f82,
        _0x150789,
        _0x342b66,
        _0x5a1b67,
      );
      if (_0x169959 !== undefined) return _0x169959;
      let _0x456059 = _0x342b66
        ? _0x150789 == null
          ? undefined
          : _0x150789.getCurrentUnitOfType(_0x513c12.UNIVER_BASE)
        : undefined;
      try {
        return (
          _0x342b66 &&
            (_0x150789 == null || _0x150789.setCurrentUnitForType(_0x342b66)),
          _0x1c8b15.syncExecuteCommand(_0x256ccf[0], _0x256ccf[1], _0x256ccf[2])
        );
      } finally {
        _0x456059 &&
          (_0x150789 == null ||
            _0x150789.setCurrentUnitForType(_0x456059.getUnitId()));
      }
    },
    onCommandExecuted: _0x1c8b15.onCommandExecuted["bind"](_0x1c8b15),
    beforeCommandExecuted: _0x1c8b15.beforeCommandExecuted["bind"](_0x1c8b15),
    onMutationExecutedForCollab:
      _0x1c8b15.onMutationExecutedForCollab["bind"](_0x1c8b15),
  };
  return _0x33ff79;
}
function Fh(_0x3d7575, _0x480e77, _0x4d97ac, _0x3c1ea9, _0x1c6a50, _0x58a8f3) {
  if (_0x3d7575 === _0x3e32d9.id) {
    let _0x18ed53 = _0x480e77;
    return _0x18ed53 != null && _0x18ed53.viewId
      ? (_0x18ed53.tableId && _0x4d97ac.activateTable(_0x18ed53.tableId),
        _0x4d97ac.activateView(_0x18ed53.viewId),
        true)
      : false;
  }
  if (_0x3d7575 === _0x1b4793.id) {
    let _0xe73fb1 = _0x480e77;
    if (!(_0xe73fb1 != null && _0xe73fb1.tableId)) return false;
    _0x4d97ac.activateTable(_0xe73fb1.tableId);
    let _0x4b609b = _0xe73fb1.unitId
        ? _0x1c6a50 == null
          ? undefined
          : _0x1c6a50.getUnit(_0xe73fb1.unitId, _0x513c12.UNIVER_BASE)
        : _0x1c6a50 == null
          ? undefined
          : _0x1c6a50.getCurrentUnitOfType(_0x513c12.UNIVER_BASE),
      _0x388668 =
        (_0x4b609b == null ? undefined : _0x4b609b.getUnitId()) ?? _0x58a8f3;
    _0x388668 &&
      (_0x1c6a50 == null || _0x1c6a50.setCurrentUnitForType(_0x388668),
      _0x1c6a50 == null || _0x1c6a50.focusUnit(_0x388668));
    let _0x4bc439 =
        _0x4b609b == null
          ? undefined
          : _0x4b609b.getSnapshot().tables[_0xe73fb1.tableId],
      _0x357016 =
        _0x4bc439 == null
          ? undefined
          : _0x4bc439.viewOrder["find"](
              (_0x233c02) => _0x4bc439.views[_0x233c02],
            );
    return (_0x357016 && _0x4d97ac.activateView(_0x357016), true);
  }
  if (_0x3d7575 === _0x5cbf99.id) {
    let _0x2c5c1b = _0x480e77;
    return _0x2c5c1b != null && _0x2c5c1b.viewId
      ? (_0x4d97ac.setScrollState(_0x2c5c1b.viewId, {
          x: _0x2c5c1b.x ?? 0,
          y: _0x2c5c1b.y ?? 0,
        }),
        true)
      : false;
  }
  if (_0x3d7575 === _0x30c84e.id) {
    let _0x1f53f1 = _0x480e77;
    return !(_0x1f53f1 != null && _0x1f53f1.viewId) ||
      typeof _0x1f53f1.zoom != "number"
      ? false
      : (_0x4d97ac.setZoom(_0x1f53f1.viewId, _0x1f53f1.zoom), true);
  }
  if (_0x3d7575 === _0x4c9825.id)
    return _0x480e77
      ? (_0x4d97ac.clearVirtualRecords(),
        _0x3c1ea9.openToolbarPanel(_0x480e77),
        true)
      : false;
  if (_0x3d7575 === _0x43157f.id) return (_0x3c1ea9.closeToolbarPanel(), true);
  if (_0x3d7575 === _0x47c5df.id)
    return _0x480e77
      ? (_0x4d97ac.clearVirtualRecords(),
        _0x3c1ea9.openContextMenu(_0x480e77),
        true)
      : false;
  if (_0x3d7575 === _0x22572b.id) return (_0x3c1ea9.closeContextMenu(), true);
  if (_0x3d7575 === _0x236a44.id)
    return _0x480e77 ? (_0x3c1ea9.openActiveEditor(_0x480e77), true) : false;
  if (_0x3d7575 === _0x1f7dac.id) return (_0x3c1ea9.closeActiveEditor(), true);
  if (_0x3d7575 === _0x7acecc.id) {
    let _0x2f09b0 = _0x480e77;
    return _0x2f09b0 != null && _0x2f09b0.recordId
      ? (_0x4d97ac.openRecordDetail(_0x2f09b0.recordId), true)
      : false;
  }
  if (_0x3d7575 === _0x2a73e4.id) return (_0x4d97ac.closeRecordDetail(), true);
}
function Ih(
  _0x2f18f3,
  _0x36c8ac,
  _0x45edbf,
  _0x56505b,
  _0x1a8b2e,
  _0x4f05c9,
  _0x53a073 = false,
) {
  if (_0x2f18f3 === _0xbb1189.id) {
    var _0x4a3c86;
    if (_0x53a073 || !Lh(_0x36c8ac)) return false;
    let _0x17db8d =
      _0x36c8ac.unitId ??
      _0x4f05c9 ??
      (_0x1a8b2e == null ||
      (_0x4a3c86 = _0x1a8b2e.getCurrentUnitOfType(_0x513c12.UNIVER_BASE)) ==
        null
        ? undefined
        : _0x4a3c86.getUnitId());
    return !_0x17db8d ||
      !_0x4ded7a(_0x56505b, _0x17db8d, [
        _0x49cadc(_0x36c8ac.tableId),
        _0x128bad(_0x36c8ac.tableId, _0x36c8ac.fieldId),
        _0x475711(_0x36c8ac.tableId, _0x36c8ac.recordId),
        _0x3d3022(_0x36c8ac.tableId, _0x36c8ac.viewId),
      ])
      ? false
      : (_0x45edbf.startEditingCell({
          tableId: _0x36c8ac.tableId,
          viewId: _0x36c8ac.viewId,
          recordId: _0x36c8ac.recordId,
          fieldId: _0x36c8ac.fieldId,
          initialQuery: _0x36c8ac.initialQuery,
          autoFocus: _0x36c8ac.autoFocus,
          virtual: _0x36c8ac.virtual,
        }),
        true);
  }
  if (_0x2f18f3 === _0x2f3c75.id) return (_0x45edbf.stopEditingCell(), true);
}
function Lh(_0x3e447c) {
  return (
    typeof _0x3e447c == "object" &&
    !!_0x3e447c &&
    "tableId" in _0x3e447c &&
    typeof _0x3e447c.tableId == "string" &&
    "viewId" in _0x3e447c &&
    typeof _0x3e447c.viewId == "string" &&
    "recordId" in _0x3e447c &&
    typeof _0x3e447c.recordId == "string" &&
    "fieldId" in _0x3e447c &&
    typeof _0x3e447c.fieldId == "string"
  );
}
function Rh(_0x3dab77, _0x4deb9d) {
  return {
    getConfig: (_0x4ae311) => {
      let _0x163e78 = _0x3dab77.getConfig(_0x4ae311);
      return _0x4ae311 === _0x8f6d6f
        ? zh(_0x163e78 ?? {}, _0x4deb9d)
        : _0x163e78;
    },
    setConfig: _0x3dab77.setConfig["bind"](_0x3dab77),
    deleteConfig: _0x3dab77.deleteConfig["bind"](_0x3dab77),
    subscribeConfigValue$: _0x3dab77.subscribeConfigValue$["bind"](_0x3dab77),
  };
}
function zh(_0x11cba7, _0x5eff88 = "workbench") {
  let _0x1d407e;
  return (
    (_0x1d407e =
      _0x5eff88 === "content-only" || _0x5eff88 === "fullscreen"
        ? {
            header: false,
            headerMenu: false,
            leftSidebar: false,
            footer: false,
            global: true,
            presentation: true,
          }
        : { header: true, headerMenu: true, presentation: false }),
    {
      ..._0x11cba7,
      workbench: {
        ...(_0x11cba7.workbench ?? {}),
        ..._0x1d407e,
        route: false,
        fallbackToFirstUnit: true,
        collaborationStatus: false,
      },
    }
  );
}
function Bh(_0x24c34c) {
  var _0x2c4c6e;
  if (
    _0x24c34c.renderScope["fullscreen"] &&
    _0x24c34c.runtimeScope["roots"].menuSlot
  )
    return _0x24c34c.runtimeScope["roots"].menuSlot;
  let _0x5c568d =
      _0x24c34c.runtimeScope["roots"].overlay ??
      _0x24c34c.renderScope["overlayRoot"] ??
      _0x24c34c.renderScope["rootElement"],
    _0xe5a733 =
      ((_0x2c4c6e = _0x5c568d.parentElement) == null
        ? undefined
        : _0x2c4c6e.dataset["uComp"]) === "embed-float-dom-chrome"
        ? _0x5c568d.parentElement
        : undefined;
  if (
    !_0xe5a733 ||
    !_0x24c34c.embedId ||
    !_0xe5a733.dataset["embedId"] ||
    _0xe5a733.dataset["embedId"] === _0x24c34c.embedId
  )
    return _0xe5a733 ?? _0x5c568d;
  let _0x4c1f67 = _0x24c34c.renderScope["rootElement"].ownerDocument;
  return (
    Array.from(
      _0x4c1f67.querySelectorAll(
        "[data-u-comp=\x22embed-float-dom-chrome\x22]",
      ),
    ).find((_0x41c56e) => _0x41c56e.dataset["embedId"] === _0x24c34c.embedId) ??
    _0x5c568d
  );
}
function Vh(_0x2e1d51) {
  let _0x140998 = Bh(_0x2e1d51),
    _0x151a17 =
      _0x2e1d51.renderScope["rootElement"].ownerDocument["createElement"](
        "div",
      );
  return (
    (_0x151a17.dataset["embedFloatingMenuEntry"] =
      _0x2e1d51.descriptor["entry"]),
    (_0x151a17.className = "univer-pointer-events-none"),
    _0x151a17.addEventListener("pointerdown", Hh),
    _0x151a17.addEventListener("mousedown", Hh),
    Uh(_0x151a17),
    _0x140998.appendChild(_0x151a17),
    {
      menu: _0x151a17,
      menuRoot: _0x140998,
      portalContainer: _0x2e1d51.runtimeScope["roots"].popup,
    }
  );
}
function Hh(_0x5a5fb5) {
  _0x5a5fb5.stopPropagation();
}
function Uh(_0x5dd0f8) {
  _0x5dd0f8.addEventListener("pointerup", (_0xba676a) => {
    let _0x2dfcb8 =
      _0xba676a.button === 0 && _0xba676a.target instanceof Element
        ? _0xba676a.target["closest"]("button:not(:disabled)")
        : null;
    if (!_0x2dfcb8) return;
    let _0x3cbf3d = false,
      _0x5e56b8 = () => {
        _0x3cbf3d = true;
      };
    (_0x2dfcb8.addEventListener("click", _0x5e56b8, { once: true }),
      globalThis.setTimeout(() => {
        (_0x2dfcb8.removeEventListener("click", _0x5e56b8),
          _0x3cbf3d || _0x2dfcb8.click());
      }, 0));
  });
}
function Wh(_0x8d4f1e) {
  return [
    {
      hostType: _0x513c12.UNIVER_DOC,
      entry: _0x3a477c.DocsCustomBlock,
      childType: _0x8d4f1e.childType,
      mount: _0x8d4f1e.mount,
    },
    {
      hostType: _0x513c12.UNIVER_SHEET,
      entry: _0x3a477c.SheetsFloatingObject,
      childType: _0x8d4f1e.childType,
      mount: _0x8d4f1e.mount,
    },
    {
      hostType: _0x513c12.UNIVER_SLIDE,
      entry: _0x3a477c.SlidesFloatingObject,
      childType: _0x8d4f1e.childType,
      mount: _0x8d4f1e.mount,
    },
    {
      hostType: _0x513c12.UNIVER_BOARD,
      entry: _0x3a477c.BoardsFloatingObject,
      childType: _0x8d4f1e.childType,
      mount: _0x8d4f1e.mount,
    },
  ];
}
function Gh(_0x33663a) {
  let _0x3cfa40 = _0x5ade04(_0x46b4fe);
  return _0xe46a3c(
    () =>
      _0x3cfa40.permissionPointUpdate$["pipe"](
        _0xbab8f3(() => _0x4ded7a(_0x3cfa40, _0x33663a, [])),
      ),
    _0x4ded7a(_0x3cfa40, _0x33663a, []),
    false,
    [_0x3cfa40, _0x33663a],
  );
}
function Kh(_0x33a863) {
  let {
      embedId: _0x4e01b,
      childUnitId: _0x38d26a,
      base: _0x1953ae,
      activeTable: _0x4a3efa,
    } = _0x33a863,
    _0x20f16e = qh(_0x4e01b);
  return _0x20f16e
    ? _0x2491f4(
        _0x29e1d8(Yh, {
          childUnitId: _0x38d26a,
          base: _0x1953ae,
          activeTable: _0x4a3efa,
        }),
        _0x20f16e,
      )
    : null;
}
function qh(_0x5e111a) {
  let [_0x504333, _0x2e806d] = _0x4d3f85(() => Jh(_0x5e111a));
  return (
    _0x51cbb8(() => {
      let _0x5978ab = window.requestAnimationFrame(() =>
        _0x2e806d(Jh(_0x5e111a)),
      );
      return () => {
        window.cancelAnimationFrame(_0x5978ab);
      };
    }, [_0x5e111a]),
    _0x504333
  );
}
function Jh(_0x267d76) {
  return (
    Array.from(
      document.querySelectorAll('[data-embed-fullscreen-sidebar-slot="true"]'),
    ).find((_0x23ef49) => _0x23ef49.dataset["embedId"] === _0x267d76) ?? null
  );
}
function Yh(_0x5ddca4) {
  var _0x2d50ec, _0x29b3b4;
  let {
      childUnitId: _0x1e4810,
      base: _0x251d24,
      activeTable: _0x21bec3,
    } = _0x5ddca4,
    _0x3b988b = _0x5ade04(_0x42e186),
    _0x55b189 = _0x5ade04(_0x405ebf),
    _0x7fc3a4 = _0x5ade04(_0x11dce0),
    _0x205a5d = _0x5ade04(_0x1ec08d),
    _0x4cb15c = Gh(_0x1e4810),
    _0x30f632 = _0xe46a3c(() => _0x205a5d.state$, _0x205a5d.getState(), false, [
      _0x205a5d,
    ]),
    [_0x141294, _0x469c1b] = _0x4d3f85(null),
    [_0x8ee140, _0x2fc1fc] = _0x4d3f85(null),
    [_0x108b85, _0x2e7bd4] = _0x4d3f85(""),
    [_0x380d77, _0x11c46b] = _0x4d3f85("configurations"),
    [_0x583a7a, _0xd1f388] = _0x4d3f85(null),
    _0x273fbf =
      (_0x55b189 == null || (_0x2d50ec = _0x55b189.getConfig(_0x8f6d6f)) == null
        ? undefined
        : _0x2d50ec.workbench) ?? {},
    _0x1f728e =
      _0x30f632.layout["leftPanelWidth"] ??
      _0x273fbf.leftPanelWidth ??
      ((_0x29b3b4 = _0x1a5664.workbench) == null
        ? undefined
        : _0x29b3b4.leftPanelWidth) ??
      _0x3db57a,
    _0x53b297 = _0x251d24.getSnapshot(),
    _0x389c5 = Qh(_0x53b297, _0x21bec3.id, !_0x4cb15c),
    _0x27dacd = async (_0x3e0130) => {
      let _0x2b2dfc = _0x53b297.tables[_0x3e0130];
      if (!_0x2b2dfc) return;
      let _0x529da0 = _0x2b2dfc.viewOrder["find"](
        (_0x448d64) => _0x2b2dfc.views[_0x448d64],
      );
      (_0x205a5d.activateTable(_0x2b2dfc.id),
        _0x529da0 && _0x205a5d.activateView(_0x529da0),
        _0x205a5d.setSelection(null),
        _0x205a5d.closeRecordDetail(),
        await _0x3b988b.executeCommand(_0x1b4793.id, {
          unitId: _0x1e4810,
          tableId: _0x3e0130,
        }));
    },
    _0x8c15da = async () => {
      let _0x2d9597 = _0x381629({
        id: "table-" + _0x55317b(8),
        name: $h(_0x251d24.getSnapshot(), (_0x892b15) =>
          _0x7fc3a4.t(
            "embed-ui.basesFloating.tableSidebar.defaultTableName",
            String(_0x892b15),
          ),
        ),
        primaryFieldId: "field-" + _0x55317b(8),
        gridViewId: "view-" + _0x55317b(8),
      });
      (await _0x3b988b.executeCommand(_0x43d97b.id, {
        unitId: _0x1e4810,
        table: _0x2d9597,
      })) &&
        (_0x205a5d.activateTable(_0x2d9597.id),
        _0x205a5d.activateView(_0x2d9597.viewOrder[0]),
        _0x205a5d.setSelection(null),
        _0x205a5d.closeRecordDetail(),
        _0xd1f388(_0x2d9597.id));
    },
    _0x1524fe = async (_0x25c58d, _0xd6c94b, _0x40421c) => {
      let _0x30ed3f = _0x251d24.getSnapshot(),
        _0x43fa92 = _0x30ed3f.tables[_0x25c58d];
      if (!_0x43fa92) return;
      let _0x3bec09 = _0x543d0d(_0x43fa92, {
        id: "table-" + _0x55317b(8),
        name: _0xd6c94b,
        includeRecords: _0x40421c === "records",
        regenerateViewIds: true,
        createViewId: () => "view-" + _0x55317b(8),
      });
      (await _0x3b988b.executeCommand(_0x43d97b.id, {
        unitId: _0x1e4810,
        table: _0x3bec09,
        index: _0x30ed3f.tableOrder["indexOf"](_0x25c58d) + 1,
      })) &&
        (_0x205a5d.activateTable(_0x3bec09.id),
        _0x205a5d.activateView(_0x3bec09.viewOrder[0]),
        _0x205a5d.setSelection(null),
        _0x205a5d.closeRecordDetail());
    },
    _0xb5a43e = async (_0x1bf6f7) => {
      let _0x2bece8 = _0x251d24.getSnapshot(),
        _0x2c8370 = Qh(_0x2bece8, _0x21bec3.id).map(
          (_0x4c825a) => _0x4c825a.id,
        );
      if (_0x2c8370.length <= 1) return;
      let _0x19c29e =
        _0x1bf6f7 === _0x21bec3.id
          ? _0x2c8370.find((_0x3eb039) => _0x3eb039 !== _0x1bf6f7)
          : null;
      if (
        (await _0x3b988b.executeCommand(_0x4da2c1.id, {
          unitId: _0x1e4810,
          tableId: _0x1bf6f7,
        })) &&
        _0x19c29e
      ) {
        let _0x31fc10 = _0x2bece8.tables[_0x19c29e],
          _0x3a29fe =
            _0x31fc10 == null
              ? undefined
              : _0x31fc10.viewOrder["find"](
                  (_0x1ad213) => _0x31fc10.views[_0x1ad213],
                );
        (_0x205a5d.activateTable(_0x19c29e),
          _0x3a29fe && _0x205a5d.activateView(_0x3a29fe),
          _0x205a5d.setSelection(null),
          _0x205a5d.closeRecordDetail());
      }
    };
  return _0x287fb5(_0x541075, {
    children: [
      _0x29e1d8(_0xbe273c, {
        title: _0x53b297.name || "Base",
        items: _0x389c5,
        width: _0x1f728e,
        pendingRenameItemId: _0x583a7a,
        onActivateItem: _0x27dacd,
        onAddTable: _0x4cb15c
          ? async () => {
              await _0x8c15da();
            }
          : undefined,
        onRenameTable: _0x4cb15c
          ? async (_0x438697, _0x538a4c) => {
              await _0x3b988b.executeCommand(_0x2bef5b.id, {
                unitId: _0x1e4810,
                tableId: _0x438697,
                name: _0x538a4c,
              });
            }
          : undefined,
        getTableNameError: (_0x4ea703, _0x38cded) =>
          _0xabfc15(_0x7fc3a4, _0x67968(_0x53b297, _0x38cded, _0x4ea703)),
        onPendingRenameItemConsumed: (_0x2cda78) => {
          _0x583a7a === _0x2cda78 && _0xd1f388(null);
        },
        onDuplicateTable: _0x4cb15c
          ? (_0x5add37) => {
              let _0x3c6eb4 = _0x251d24.getSnapshot(),
                _0x4842ce = _0x3c6eb4.tables[_0x5add37];
              _0x4842ce &&
                (_0x2fc1fc(_0x5add37),
                _0x2e7bd4(
                  _0xc28cca(
                    _0x3c6eb4,
                    _0x7fc3a4.t(
                      "embed-ui.basesFloating.duplicateTable.copyName",
                      _0x4842ce.name,
                    ),
                  ),
                ),
                _0x11c46b("configurations"));
            }
          : undefined,
        onDeleteTable: _0x4cb15c ? _0x469c1b : undefined,
        onResizeWidth: (_0x3dd007) => _0x205a5d.setLeftPanelWidth(_0x3dd007),
      }),
      _0x29e1d8(_0x5aafba, {
        open: !!_0x8ee140,
        name: _0x108b85,
        nameError: _0xabfc15(_0x7fc3a4, _0x67968(_0x53b297, _0x108b85.trim())),
        mode: _0x380d77,
        onNameChange: _0x2e7bd4,
        onModeChange: _0x11c46b,
        onCancel: () => _0x2fc1fc(null),
        onConfirm: async () => {
          let _0x28b062 = _0x8ee140,
            _0x2d00cb = _0x108b85.trim(),
            _0x4fc861 = _0x380d77;
          !_0x28b062 ||
            !_0x2d00cb ||
            (_0x2fc1fc(null), await _0x1524fe(_0x28b062, _0x2d00cb, _0x4fc861));
        },
      }),
      _0x29e1d8(_0x19473b, {
        open: !!_0x141294,
        title: _0x7fc3a4.t("embed-ui.basesFloating.confirmDelete.tableTitle"),
        description: _0x7fc3a4.t(
          "embed-ui.basesFloating.confirmDelete.tableDescription",
        ),
        onCancel: () => _0x469c1b(null),
        onConfirm: async () => {
          let _0x51a498 = _0x141294;
          (_0x469c1b(null), _0x51a498 && (await _0xb5a43e(_0x51a498)));
        },
      }),
    ],
  });
}
function Xh(_0xb90a4e) {
  let {
      embedId: _0x2f4f42,
      activeView: _0x3f67c6,
      views: _0x59df44,
      addViewOpen: _0x2bdb4f,
      onAddViewOpenChange: _0x9c60b8,
      onActivateView: _0x4085cb,
      onAddView: _0xe29723,
      onSetViewAsFirst: _0x22cfd0,
      onMoveView: _0x5354a2,
      onRenameView: _0xc3120d,
      onDuplicateView: _0x17d455,
      onConfigureView: _0x4726a6,
      onDeleteView: _0x30f22a,
      readonly: _0x7f1f7d,
    } = _0xb90a4e,
    _0x2a5d3a = _0x5ade04(_0x11dce0);
  return _0x29e1d8("div", {
    "data-u-comp": "base-embed-fullscreen-view-tabs",
    className:
      "univer-pointer-events-auto\x20univer-box-border\x20univer-min-w-0\x20univer-self-stretch\x20univer-bg-gray-50\x20univer-pr-24\x20dark:!univer-bg-gray-900",
    children: _0x29e1d8(_0x3711e0, {
      readonly: _0x7f1f7d,
      className: "univer-bg-gray-50\x20univer-px-0\x20dark:!univer-bg-gray-900",
      views: _0x59df44.map((_0x4d2355) => ({
        id: _0x4d2355.id,
        name: _0x4d2355.name,
        type: _0x4d2355.type,
      })),
      activeViewId: _0x3f67c6.id,
      onActivateView: _0x4085cb,
      onSetViewAsFirst: _0x22cfd0,
      onMoveView: _0x5354a2,
      onRenameView: _0xc3120d,
      onDuplicateView: _0x17d455,
      onConfigureView: _0x4726a6,
      onDeleteView: _0x30f22a,
      onAddView: () => _0x9c60b8(!_0x2bdb4f),
      addViewDropdown: {
        open: _0x2bdb4f,
        onOpenChange: _0x9c60b8,
        overlay: _0x29e1d8("div", {
          "data-u-comp": "base-embed-fullscreen-add-view-menu",
          "data-embed-id": _0x2f4f42,
          "data-embed-floating-menu-popup": "true",
          children: _0x29e1d8(_0x3d553e, {
            views: _0x4472fe.map((_0x48b0c9) => ({
              ..._0x48b0c9,
              label: _0x2a5d3a.t(_0x48b0c9.label),
              description: _0x2a5d3a.t(_0x48b0c9.description),
            })),
            onCreate: _0xe29723,
          }),
        }),
      },
    }),
  });
}
function Zh(_0xf0636a) {
  var _0x1ff8fd;
  return (
    (_0xf0636a == null || (_0x1ff8fd = _0xf0636a.tableOrder) == null
      ? undefined
      : _0x1ff8fd
          .map((_0xd7cba0) => _0xf0636a.tables[_0xd7cba0])
          .filter((_0x2313a6) => !!_0x2313a6)) ?? []
  );
}
function Qh(_0x37a656, _0xd61007, _0x180c01 = false) {
  return Zh(_0x37a656).map((_0x29b228) => ({
    id: _0x29b228.id,
    name: _0x29b228.name,
    active: _0x29b228.id === _0xd61007,
    readonly: _0x180c01,
  }));
}
function $h(_0x58d80a, _0x3b7f31) {
  let _0x3c18fc = new Set(Zh(_0x58d80a).map((_0x55d1bd) => _0x55d1bd.name)),
    _0xa485b7 = _0x3c18fc.size + 1,
    _0x21ea5e = _0x3b7f31(_0xa485b7);
  for (; _0x3c18fc.has(_0x21ea5e);)
    ((_0xa485b7 += 1), (_0x21ea5e = _0x3b7f31(_0xa485b7)));
  return _0x21ea5e;
}
const eg =
  "\n univer-pointer-events-auto univer-relative univer-isolate univer-flex univer-shrink-0\n univer-items-center univer-self-stretch univer-rounded-lg univer-border univer-border-solid\n univer-border-gray-200 univer-bg-transparent univer-p-1 univer-shadow-lg\n before:univer-pointer-events-none before:univer-absolute before:univer-inset-0\n before:univer-z-[-1] before:univer-rounded-lg before:univer-bg-gray-0 before:univer-opacity-90\n before:univer-content-[''] dark:!univer-border-gray-600 dark:before:!univer-bg-gray-900\n";
function tg() {
  return Wh({ childType: _0x513c12.UNIVER_BASE, mount: ng });
}
function ng(_0x2b2f06) {
  let {
      menu: _0x4550db,
      menuRoot: _0x10691e,
      portalContainer: _0x17170d,
    } = Vh(_0x2b2f06),
    _0x11d10c = Sl(_0x4550db),
    _0x471a7e = _0x2b2f06.runtimeScope["injector"];
  return (
    _0x11d10c.render(
      _0xc3e5c7(
        fl,
        {
          injector: _0x471a7e,
          mountContainer: _0x17170d,
          embedId: _0x2b2f06.embedId,
        },
        _0xc3e5c7(lg, {
          hostUnitId: _0x2b2f06.hostUnitId,
          embedId: _0x2b2f06.embedId,
          childUnitId: _0x2b2f06.childUnitId,
          entry: _0x2b2f06.descriptor["entry"],
          fullscreen: !!_0x2b2f06.renderScope["fullscreen"],
          floatingMenuPortalRoot: _0x10691e,
          runtimeFocusRoot: _0x2b2f06.renderScope["rootElement"],
          usesDomFloatingStage:
            _0x2b2f06.descriptor["entry"] === "sheets-floating-object",
          renderScopeActive$: _0x2b2f06.renderScope["active$"],
        }),
      ),
    ),
    _0x11d17f(() => {
      (Cl(_0x11d10c), globalThis.setTimeout(() => _0x4550db.remove(), 0));
    })
  );
}
function rg(_0x3ef063) {
  return Eu({
    embedId: _0x3ef063.embedId,
    active: ig(_0x3ef063.activeEmbedId, _0x3ef063.stage),
    fullscreen: _0x3ef063.fullscreen,
    usesDomFloatingStage: _0x3ef063.usesDomFloatingStage,
    renderScopeActive: _0x3ef063.renderScopeActive,
  });
}
function ig(_0x1a74ab, _0x57dd92) {
  return _0x1a74ab
    ? {
        hostUnitId: "",
        childUnitId: "",
        embedId: _0x1a74ab,
        stage:
          _0x57dd92 === "stage2" || _0x57dd92 === "stage1"
            ? "stage2"
            : "inactive",
      }
    : null;
}
function ag(_0x1b0bdb) {
  return _0x1b0bdb;
}
function og(_0x522886) {
  return _0x522886;
}
function sg(_0x1d5018) {
  return !_0x1d5018;
}
function cg(_0x3a5406) {
  return { [Z]: _0x3a5406, [ws]: "floating-menu" };
}
function lg(_0x4e2742) {
  let {
      hostUnitId: _0x305db9,
      embedId: _0x11dab0,
      childUnitId: _0x4f1c83,
      entry: _0x31c759,
      fullscreen: _0x54abb6,
      floatingMenuPortalRoot: _0x2f773d,
      runtimeFocusRoot: _0x2a1dc5,
      usesDomFloatingStage: _0x5e11c5,
      renderScopeActive$: _0x3704e6,
    } = _0x4e2742,
    _0x3e050b = _0x5ade04(_0x42e186),
    _0x5476f4 = _0x444102(_0x33a342),
    _0x26d6d5 = _0x5ade04(_0x3e617f),
    _0x2a3bb2 = _0x5ade04(_0x11dce0),
    _0x16f0df = _0x5ade04(_0x5a2b82),
    _0x31759b = _0x5ade04(_0x44c88a),
    _0x30f45c = _0x5ade04(_0x1ec08d),
    _0x3fa4a9 = _0x5ade04(_0x113ff4),
    _0x2ebd47 = _0x5ade04(xs),
    _0x11c8fe = _0xe46a3c(() => _0x30f45c.state$, _0x30f45c.getState(), false, [
      _0x30f45c,
    ]),
    _0x1d2f0e = _0xe46a3c(
      () => _0x31759b.undoRedoStatus$,
      { undos: 0, redos: 0 },
      false,
      [_0x31759b],
    ),
    _0x2b65de = _0xe46a3c(() => _0x3704e6, false, false, [_0x3704e6]),
    _0x22e17a = _0xe46a3c(
      () => _0x2ebd47.active$,
      _0x2ebd47.getActive(),
      false,
      [_0x2ebd47],
    ),
    _0x4b0ba3 = _0xe46a3c(
      () => _0x3fa4a9.toolbarPanel$,
      _0x3fa4a9.getToolbarPanel(),
      false,
      [_0x3fa4a9],
    ),
    _0x9ee346 = _0x2ebd47.getStage(_0x11dab0),
    [_0x3407a1, _0x43a3c6] = _0x4d3f85(0),
    [_0x462b35, _0x4a4d89] = _0x4d3f85(null),
    [_0x4e96da, _0x134320] = _0x4d3f85(false),
    [_0x2fd012, _0x3cc2c6] = _0x4d3f85(null),
    _0x5ac915 = _0x344702(_0x4b0ba3),
    _0x1e722d = _0x344702(null),
    _0x18efff = _0x26d6d5.getUnit(_0x4f1c83, _0x513c12.UNIVER_BASE),
    _0x2bcca1 = Gh(_0x4f1c83),
    _0x2c2488 = _0x18efff == null ? undefined : _0x18efff.getSnapshot(),
    _0xadd15e = mg(_0x2c2488, _0x11c8fe.activeTableId),
    _0x3b06fe = hg(_0xadd15e),
    _0x3366f8 = gg(_0xadd15e, _0x11c8fe.activeViewId),
    _0x29f7b4 =
      rg({
        embedId: _0x11dab0,
        activeEmbedId: _0x22e17a == null ? undefined : _0x22e17a.embedId,
        stage: _0x9ee346,
        fullscreen: _0x54abb6,
        usesDomFloatingStage: _0x5e11c5,
        renderScopeActive: _0x2b65de,
      }) === "stage2",
    [_0x4a39b4, _0x48b7d5] = _0x4d3f85(_0x29f7b4),
    _0x2c3725 = ag(_0x54abb6),
    _0x549a09 = og(_0x54abb6),
    _0x17ac7b = sg(_0x54abb6),
    _0x491818 = _0x2c3725
      ? "univer-pointer-events-auto univer-min-h-11 univer-w-full univer-min-w-0 univer-max-w-none univer-flex-1"
      : "univer-pointer-events-auto univer-max-w-none univer-flex-none !univer-bg-transparent dark:!univer-bg-transparent";
  if (
    (_0x4a39b4 !== _0x29f7b4 &&
      (_0x48b7d5(_0x29f7b4),
      _0x29f7b4 || (_0x4a4d89(null), _0x134320(false), _0x3cc2c6(null))),
    _0x51cbb8(() => {
      _0x29f7b4 ||
        (_0x3fa4a9.closeToolbarPanel(),
        _0x3fa4a9.closeContextMenu(),
        _0x3fa4a9.closeActiveEditor());
    }, [_0x29f7b4, _0x3fa4a9]),
    _0x51cbb8(() => {
      _0x2bcca1 ||
        (_0x3fa4a9.closeToolbarPanel(),
        _0x3fa4a9.closeContextMenu(),
        _0x3fa4a9.closeActiveEditor());
    }, [_0x2bcca1, _0x3fa4a9]),
    _0x51cbb8(() => {
      let _0x4e90cb = _0x5ac915.current;
      if (
        ((_0x5ac915.current = _0x4b0ba3), !_0x4e90cb || _0x4b0ba3 || !_0x29f7b4)
      )
        return;
      let _0x44ab65 = window.requestAnimationFrame(() =>
        hl(_0x11dab0, _0x2a1dc5),
      );
      return () => window.cancelAnimationFrame(_0x44ab65);
    }, [_0x11dab0, _0x29f7b4, _0x2a1dc5, _0x4b0ba3]),
    _0x51cbb8(() => {
      if (!_0x462b35) return;
      let _0x19c710 = (_0x500bdb) => {
          var _0x3d44a;
          let _0x50beac =
            _0x500bdb.target instanceof Node ? _0x500bdb.target : null;
          (_0x50beac &&
            (_0x3d44a = _0x1e722d.current) != null &&
            _0x3d44a.contains(_0x50beac)) ||
            _0x4a4d89(null);
        },
        _0xb3b644 = (_0x44f255) => {
          _0x44f255.key === "Escape" && _0x4a4d89(null);
        };
      return (
        document.addEventListener("pointerdown", _0x19c710, true),
        document.addEventListener("keydown", _0xb3b644, true),
        () => {
          (document.removeEventListener("pointerdown", _0x19c710, true),
            document.removeEventListener("keydown", _0xb3b644, true));
        }
      );
    }, [_0x462b35]),
    !_0x2c2488 || !_0x18efff || !_0xadd15e || !_0x3366f8)
  )
    return null;
  let _0x28ccb7 = () => {
      _0x2ebd47.activate(
        { hostUnitId: _0x305db9, embedId: _0x11dab0, childUnitId: _0x4f1c83 },
        "stage2",
      );
    },
    _0xf0748 = async (_0x4e9a82, _0xfc9d6f) => {
      (_0x28ccb7(),
        await _0x3e050b.executeCommand(_0x4c9825.id, {
          type: _0x4e9a82,
          anchor: vg(_0xfc9d6f.getBoundingClientRect()),
        }));
    },
    _0x15c000 = async (_0x534391) => {
      (_0x28ccb7(),
        await _0x3e050b.executeCommand(_0x3e32d9.id, {
          tableId: _0xadd15e.id,
          unitId: _0x4f1c83,
          viewId: _0x534391,
        }),
        _0x43a3c6((_0x2f96e3) => _0x2f96e3 + 1));
    },
    _0x540f58 = async (_0x4734b8) => {
      _0x28ccb7();
      let _0x4acd27 = "view-" + _0x55317b(6),
        _0x3a75c3 = _0x16f0df.get(_0x4734b8).createDefaultConfig(_0xadd15e),
        _0x35236e = await _0x3e050b.executeCommand(_0x4b070c.id, {
          unitId: _0x4f1c83,
          tableId: _0xadd15e.id,
          view: {
            id: _0x4acd27,
            tableId: _0xadd15e.id,
            name: _0x269e6b(_0x2a3bb2, _0x4734b8),
            type: _0x4734b8,
            config: _0x3a75c3,
            fieldOrder: [..._0xadd15e.fieldOrder],
            fieldSettings: {},
          },
        });
      (_0x4a4d89(null),
        _0x134320(false),
        _0x43a3c6((_0x48a864) => _0x48a864 + 1),
        _0x35236e && (await _0x15c000(_0x4acd27)));
    },
    _0x178fef = async (_0x5384d7) => {
      var _0x18b844;
      let _0x30c07c =
        (_0x18b844 = _0x3b06fe[0]) == null ? undefined : _0x18b844.id;
      !_0x30c07c ||
        _0x30c07c === _0x5384d7 ||
        (_0x28ccb7(),
        await _0x3e050b.executeCommand(_0x18485d.id, {
          unitId: _0x4f1c83,
          tableId: _0xadd15e.id,
          viewId: _0x5384d7,
          target: { beforeViewId: _0x30c07c },
        }),
        _0x43a3c6((_0x32ee88) => _0x32ee88 + 1));
    },
    _0xab21b3 = async (_0x1d89a6, _0x2a8ec2) => {
      (_0x28ccb7(),
        await _0x3e050b.executeCommand(_0x18485d.id, {
          unitId: _0x4f1c83,
          tableId: _0xadd15e.id,
          viewId: _0x1d89a6,
          target: _0x2a8ec2,
        }),
        _0x43a3c6((_0xf02375) => _0xf02375 + 1));
    },
    _0x38d68d = async (_0x3de5b8, _0x58cfb3) => {
      (_0x28ccb7(),
        await _0x3e050b.executeCommand(_0x5b1cd8.id, {
          unitId: _0x4f1c83,
          tableId: _0xadd15e.id,
          viewId: _0x3de5b8,
          name: _0x58cfb3,
        }),
        _0x43a3c6((_0x80de1c) => _0x80de1c + 1));
    },
    _0x2b5a19 = async (_0x223615) => {
      let _0x1cf896 = _0xadd15e.views[_0x223615];
      if (!_0x1cf896) return;
      _0x28ccb7();
      let _0x3e3dec = _0x33a1ef(
          _0x1cf896,
          _0xadd15e.id,
          _0x2a3bb2.t("embed-ui.basesFloating.copySuffix"),
        ),
        _0x24b502 = await _0x3e050b.executeCommand(_0x4b070c.id, {
          unitId: _0x4f1c83,
          tableId: _0xadd15e.id,
          view: _0x3e3dec,
        });
      (_0x43a3c6((_0x3ae090) => _0x3ae090 + 1),
        _0x24b502 && (await _0x15c000(_0x3e3dec.id)));
    },
    _0x5eb476 = async () => {
      var _0x47a2c6;
      let _0x367032 = _0x2fd012 ?? _0x3366f8.id;
      if (_0x3b06fe.length <= 1) {
        _0x3cc2c6(null);
        return;
      }
      let _0x3dd1b7 =
          (_0x47a2c6 = _0x3b06fe.find(
            (_0x4116cd) => _0x4116cd.id !== _0x367032,
          )) == null
            ? undefined
            : _0x47a2c6.id,
        _0x428a2d = await _0x3e050b.executeCommand(_0x3e83d2.id, {
          unitId: _0x4f1c83,
          tableId: _0xadd15e.id,
          viewId: _0x367032,
        });
      (_0x3cc2c6(null),
        _0x43a3c6((_0x2aaaaa) => _0x2aaaaa + 1),
        _0x428a2d && _0x3dd1b7 && (await _0x15c000(_0x3dd1b7)));
    },
    _0x52fe2f = async () => {
      await _0x3e050b.executeCommand(_0x2e1133.id, {
        hostUnitId: _0x305db9,
        embedId: _0x11dab0,
      });
    },
    _0x2c5655 = (_0x571f02) => {
      _0x571f02.stopPropagation();
    },
    _0x46dc31 = (_0x3358d6) => {
      (_0x3358d6.preventDefault(), _0x3358d6.stopPropagation());
    };
  return _0x287fb5(_0x541075, {
    children: [
      _0x287fb5("div", {
        className: _0x228d07(
          "univer-box-border univer-flex univer-items-center univer-justify-between univer-text-gray-900 dark:!univer-text-gray-0",
          {
            "univer-hidden": !_0x29f7b4,
            "univer-static\x20univer-m-0\x20univer-min-h-[84px]\x20univer-w-full\x20univer-min-w-0\x20univer-max-w-none\x20univer-translate-x-0\x20univer-flex-col\x20univer-items-stretch\x20univer-justify-start\x20univer-gap-0\x20univer-rounded-none\x20univer-border-0\x20univer-bg-transparent\x20univer-px-0\x20univer-py-0\x20univer-shadow-none":
              _0x54abb6,
            "univer-absolute\x20univer-inset-x-0\x20univer-z-[30]\x20univer-min-h-9\x20univer-min-w-0\x20univer-max-w-none\x20univer-translate-x-0\x20univer-gap-3\x20univer-border-0\x20univer-bg-transparent\x20univer-p-0\x20univer-shadow-none":
              !_0x54abb6,
            "-univer-top-12": !_0x54abb6 && _0x31c759 !== "docs-custom-block",
            "univer-w-full": !_0x54abb6,
            "!univer-left-0\x20!univer-right-auto\x20-univer-top-12\x20!univer-w-full":
              !_0x54abb6 && _0x31c759 === "docs-custom-block",
          },
        ),
        "data-u-comp": "base-embed-floating-menu",
        "data-embed-floating-menu": "true",
        "data-embed-id": _0x11dab0,
        "data-embed-float-stage": _0x29f7b4 ? "stage2" : "inactive",
        "data-base-render-version": _0x3407a1,
        ...cg(_0x11dab0),
        onClick: _0x2c5655,
        onDoubleClick: _0x2c5655,
        onMouseDown: _0x46dc31,
        onMouseUp: _0x2c5655,
        onPointerDown: _0x46dc31,
        onPointerUp: _0x2c5655,
        children: [
          _0x549a09
            ? _0x29e1d8(Xh, {
                embedId: _0x11dab0,
                activeView: _0x3366f8,
                views: _0x3b06fe,
                addViewOpen: _0x4e96da,
                onAddViewOpenChange: _0x134320,
                onActivateView: _0x15c000,
                onAddView: _0x540f58,
                onSetViewAsFirst: _0x178fef,
                onMoveView: _0xab21b3,
                onRenameView: _0x38d68d,
                onDuplicateView: _0x2b5a19,
                onConfigureView: (_0x541805) =>
                  _0xf0748("viewSettings", _0x541805),
                onDeleteView: _0x3cc2c6,
                readonly: !_0x2bcca1,
              })
            : _0x29e1d8("div", {
                "data-u-comp": "base-embed-view-slot",
                className: eg,
                children: _0x29e1d8(ug, {
                  activeView: _0x3366f8,
                  views: _0x3b06fe,
                  onActivateView: _0x15c000,
                  embedId: _0x11dab0,
                  portalRoot: _0x2f773d,
                  onAddView: (_0x55aafd) => {
                    (_0x28ccb7(), _0x4a4d89(_0x55aafd.getBoundingClientRect()));
                  },
                  onConfigureView: (_0x583180) =>
                    _0xf0748("viewSettings", _0x583180),
                  onDeleteView: () => _0x3cc2c6(_0x3366f8.id),
                }),
              }),
          _0x29e1d8("div", {
            className: _0x228d07(
              "univer-flex univer-flex-1 univer-items-center univer-justify-end univer-gap-1",
              { "univer-min-w-0": _0x54abb6, "univer-min-w-max": !_0x54abb6 },
            ),
            children: _0x287fb5("div", {
              "data-u-comp": "base-embed-actions-surface",
              className: _0x228d07(
                "univer-flex univer-min-w-0 univer-max-w-full univer-items-center univer-gap-1",
                {
                  "univer-w-full\x20univer-flex-1": _0x54abb6,
                  [eg]: !_0x54abb6,
                },
              ),
              children: [
                _0x29e1d8(_0x8b1f28, {
                  disabled: !_0x2bcca1,
                  iconOnly: !_0x2c3725,
                  className: _0x491818,
                  renderTooltip: (_0x2f3540, _0x1fa1f2) =>
                    _0x29e1d8(jf, { title: _0x2f3540, children: _0x1fa1f2 }),
                  state: {
                    ...pg(_0x3366f8, _0x1d2f0e),
                    searchOpen: _0x11c8fe.search["open"],
                    searchQuery: _0x11c8fe.search["query"],
                    searchActiveIndex: _0x11c8fe.search["activeIndex"],
                  },
                  onAddRecord: (_0xd65c5b) =>
                    _0xd65c5b && _0xf0748("addRecord", _0xd65c5b),
                  onCustomizeField: (_0x52618f) =>
                    _0xf0748("customizeField", _0x52618f),
                  onCustomizeKanban: (_0x580ed0) =>
                    _0xf0748("customizeKanban", _0x580ed0),
                  onCustomizeGallery: (_0xeb01b2) =>
                    _0xf0748("customizeGallery", _0xeb01b2),
                  onCalendarEventSettings: (_0x2cab1a) =>
                    _0xf0748("calendarEventSettings", _0x2cab1a),
                  onCalendarViewSettings: (_0x44597d) =>
                    _0xf0748("calendarViewSettings", _0x44597d),
                  onViewSettings: (_0x14a217) =>
                    _0xf0748("viewSettings", _0x14a217),
                  onFilter: (_0x49cac4) => _0xf0748("filter", _0x49cac4),
                  onGroup: (_0x332f00) => _0xf0748("group", _0x332f00),
                  onSort: (_0xfdaaee) => _0xf0748("sort", _0xfdaaee),
                  onRowHeight: (_0x16800c) => _0xf0748("rowHeight", _0x16800c),
                  onConditionalColoring: (_0x400883) =>
                    _0xf0748("conditionalColoring", _0x400883),
                  onUndo: async () => _0x3e050b.executeCommand(_0xbadd6f.id),
                  onRedo: async () => _0x3e050b.executeCommand(_0x4ce5de.id),
                  onOpenSearch: () => _0x30f45c.openSearch(),
                  onSearchQueryChange: (_0xed6eaa) =>
                    _0x30f45c.setSearchQuery(_0xed6eaa),
                  onSearchPrevious: () =>
                    _0x30f45c.setSearchActiveIndex(
                      Math.max(0, (_0x11c8fe.search["activeIndex"] ?? 0) - 1),
                    ),
                  onSearchNext: () =>
                    _0x30f45c.setSearchActiveIndex(
                      (_0x11c8fe.search["activeIndex"] ?? -1) + 1,
                    ),
                  onCloseSearch: () => _0x30f45c.closeSearch(),
                  extraActions: _0x29e1d8(_0x159b9d, { components: _0x5476f4 }),
                }),
                _0x17ac7b
                  ? _0x287fb5(_0x541075, {
                      children: [
                        _0x29e1d8(_0xb4dc1b, { orientation: "vertical" }),
                        _0x29e1d8(Mf, {
                          hostUnitId: _0x305db9,
                          embedId: _0x11dab0,
                          variant: "menu",
                        }),
                        _0x29e1d8(_g, {
                          title: _0x2a3bb2.t("embed-ui.basesFloating.delete"),
                          className:
                            "univer-pointer-events-auto univer-text-red-500 hover:univer-text-red-600",
                          onClick: _0x52fe2f,
                          children: _0x29e1d8(_0x461762, {}),
                        }),
                      ],
                    })
                  : null,
              ],
            }),
          }),
        ],
      }),
      _0x462b35
        ? _0x2491f4(
            _0x29e1d8("div", {
              ref: _0x1e722d,
              "data-u-comp": "base-embed-add-view-menu",
              "data-embed-id": _0x11dab0,
              "data-embed-floating-menu-popup": "true",
              className: "univer-fixed univer-z-[900] univer-overflow-y-auto",
              style: yg(_0x462b35),
              onPointerDown: (_0x18828f) => _0x18828f.stopPropagation(),
              children: _0x29e1d8(_0x3d553e, {
                views: _0x4472fe.map((_0x2de692) => ({
                  ..._0x2de692,
                  label: _0x2a3bb2.t(_0x2de692.label),
                  description: _0x2a3bb2.t(_0x2de692.description),
                })),
                onCreate: _0x540f58,
              }),
            }),
            _0x2f773d,
          )
        : null,
      _0x29e1d8(_0x19473b, {
        open: !!_0x2fd012,
        title: _0x2a3bb2.t("embed-ui.basesFloating.confirmDelete.viewTitle"),
        description: _0x2a3bb2.t(
          "embed-ui.basesFloating.confirmDelete.viewDescription",
        ),
        onCancel: () => _0x3cc2c6(null),
        onConfirm: _0x5eb476,
      }),
      _0x54abb6
        ? _0x29e1d8(Kh, {
            embedId: _0x11dab0,
            childUnitId: _0x4f1c83,
            base: _0x18efff,
            activeTable: _0xadd15e,
          })
        : null,
    ],
  });
}
function ug(_0x3e11cd) {
  var _0xfcaa9e;
  let {
      embedId: _0x37ff94,
      portalRoot: _0x54c1db,
      activeView: _0x41e0fe,
      views: _0x5916c2,
      onActivateView: _0x2e8758,
      onAddView: _0x9a89e5,
      onConfigureView: _0x147ebf,
      onDeleteView: _0x51a863,
    } = _0x3e11cd,
    _0x222d6d = _0x5ade04(_0x11dce0),
    _0x12cc03 = _0x344702(null),
    _0x15ab23 = _0x344702(null),
    [_0x558c23, _0xd7abd2] = _0x4d3f85(false),
    _0x2153f4 = (_0x254307) => {
      (_0x254307.preventDefault(), _0x254307.stopPropagation());
    },
    _0x40e477 =
      ((_0xfcaa9e = _0x12cc03.current) == null
        ? undefined
        : _0xfcaa9e.getBoundingClientRect()) ?? null;
  _0x51cbb8(() => {
    if (!_0x558c23) return;
    let _0x5ca833 = (_0x5c1869) => {
        var _0x6054bd, _0x86ef78;
        let _0x11bc38 =
          _0x5c1869.target instanceof Node ? _0x5c1869.target : null;
        !_0x11bc38 ||
          ((_0x6054bd = _0x12cc03.current) != null &&
            _0x6054bd.contains(_0x11bc38)) ||
          ((_0x86ef78 = _0x15ab23.current) != null &&
            _0x86ef78.contains(_0x11bc38)) ||
          _0xd7abd2(false);
      },
      _0x240b34 = (_0x40c1b3) => {
        _0x40c1b3.key === "Escape" && _0xd7abd2(false);
      };
    return (
      document.addEventListener("pointerdown", _0x5ca833, true),
      document.addEventListener("keydown", _0x240b34, true),
      () => {
        (document.removeEventListener("pointerdown", _0x5ca833, true),
          document.removeEventListener("keydown", _0x240b34, true));
      }
    );
  }, [_0x558c23]);
  let _0x2e02d7 = _0x287fb5(_0x43385d, {
    ref: _0x12cc03,
    type: "button",
    size: "small",
    variant: "ghost",
    className:
      "univer-h-8\x20univer-max-w-[220px]\x20univer-gap-2\x20univer-px-2\x20univer-text-sm\x20univer-font-medium",
    "aria-label": _0x222d6d.t("embed-ui.basesFloating.viewSettings.title"),
    onClick: (_0x5c8818) => {
      (_0x5c8818.stopPropagation(), _0xd7abd2((_0x57d5e7) => !_0x57d5e7));
    },
    onMouseDown: _0x2153f4,
    onPointerDown: _0x2153f4,
    children: [
      _0x29e1d8("span", {
        className:
          "univer-grid univer-size-4 univer-shrink-0 univer-place-items-center",
        "aria-hidden": "true",
        children: _0x29e1d8(_0x5192b2, { type: _0x41e0fe.type }),
      }),
      _0x29e1d8("span", {
        className: "univer-min-w-0\x20univer-truncate",
        children: _0x41e0fe.name,
      }),
      _0x29e1d8(_0x32072a, { className: "univer-size-3 univer-shrink-0" }),
    ],
  });
  return _0x287fb5(_0x541075, {
    children: [
      _0x29e1d8(jf, { title: _0x41e0fe.name, children: _0x2e02d7 }),
      _0x558c23 && _0x40e477
        ? _0x2491f4(
            _0x287fb5("div", {
              ref: _0x15ab23,
              "data-u-comp": "base-embed-view-panel",
              "data-embed-id": _0x37ff94,
              "data-embed-floating-menu-popup": "true",
              className:
                "univer-fixed univer-z-[901] univer-w-52 univer-overflow-y-auto univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-1 univer-text-sm univer-text-gray-900 univer-shadow-lg dark:!univer-border-gray-700 dark:!univer-bg-gray-900 dark:!univer-text-gray-100",
              style: bg(_0x40e477),
              onClick: (_0xb8e91b) => _0xb8e91b.stopPropagation(),
              onMouseDown: _0x2153f4,
              onPointerDown: _0x2153f4,
              children: [
                _0x29e1d8("div", {
                  className: "univer-grid univer-gap-0.5",
                  children: _0x5916c2.map((_0x309389) =>
                    _0x29e1d8(
                      _0x43385d,
                      {
                        type: "button",
                        variant: "ghost",
                        size: "small",
                        className: "univer-h-8\x20univer-w-full\x20univer-px-2",
                        onClick: (_0x312d6d) => {
                          (_0x312d6d.stopPropagation(),
                            _0x2e8758(_0x309389.id),
                            _0xd7abd2(false));
                        },
                        children: _0x29e1d8(dg, {
                          icon: _0x29e1d8(_0x5192b2, { type: _0x309389.type }),
                          label: _0x309389.name,
                          trailing:
                            _0x309389.id === _0x41e0fe.id
                              ? _0x29e1d8("span", {
                                  className:
                                    "univer-size-1.5\x20univer-rounded-full\x20univer-bg-primary-600",
                                })
                              : null,
                        }),
                      },
                      _0x309389.id,
                    ),
                  ),
                }),
                _0x29e1d8(_0xb4dc1b, {}),
                _0x29e1d8(fg, {
                  icon: _0x29e1d8(_0x4157b8, {}),
                  label: _0x222d6d.t(
                    "embed-ui.basesFloating.viewSettings.addView",
                  ),
                  onClick: () => {
                    let _0x617323 = _0x12cc03.current;
                    (_0x617323 && _0x9a89e5(_0x617323), _0xd7abd2(false));
                  },
                }),
                _0x29e1d8(fg, {
                  icon: _0x29e1d8(_0x32276f, {}),
                  label: _0x222d6d.t(
                    "embed-ui.basesFloating.viewSettings.configureView",
                  ),
                  onClick: () => {
                    let _0x10c951 = _0x12cc03.current;
                    (_0x10c951 && _0x147ebf(_0x10c951), _0xd7abd2(false));
                  },
                }),
                _0x29e1d8(fg, {
                  danger: true,
                  disabled: _0x5916c2.length <= 1,
                  icon: _0x29e1d8(_0x461762, {}),
                  label: _0x222d6d.t(
                    "embed-ui.basesFloating.viewSettings.deleteView",
                  ),
                  onClick: () => {
                    (_0x51a863(), _0xd7abd2(false));
                  },
                }),
              ],
            }),
            _0x54c1db,
          )
        : null,
    ],
  });
}
function dg(_0x413932) {
  let { icon: _0x1a070f, label: _0x1e189a, trailing: _0x52a5de } = _0x413932;
  return _0x287fb5("span", {
    className:
      "univer-grid\x20univer-w-full\x20univer-grid-cols-[24px_minmax(0,1fr)_18px]\x20univer-items-center\x20univer-gap-3",
    children: [
      _0x29e1d8("span", {
        className:
          "univer-grid univer-size-5 univer-place-items-center univer-text-current",
        "aria-hidden": "true",
        children: _0x1a070f,
      }),
      _0x29e1d8("span", {
        className: "univer-min-w-0 univer-truncate univer-text-left",
        children: _0x1e189a,
      }),
      _0x29e1d8("span", {
        className: "univer-grid univer-size-[18px] univer-place-items-center",
        children: _0x52a5de,
      }),
    ],
  });
}
function fg(_0x11d8a3) {
  let {
    danger: _0xb46e6f,
    disabled: _0x270750,
    icon: _0x5e30c5,
    label: _0x24e510,
    onClick: _0x58bc4e,
  } = _0x11d8a3;
  return _0x29e1d8(_0x43385d, {
    type: "button",
    variant: "ghost",
    size: "small",
    disabled: _0x270750,
    className: _0x228d07(
      "univer-h-8 univer-w-full univer-px-2",
      _0xb46e6f &&
        "univer-text-red-600\x20hover:univer-bg-red-50\x20hover:univer-text-red-700",
    ),
    onClick: (_0x57bb62) => {
      (_0x57bb62.stopPropagation(), _0x58bc4e());
    },
    children: _0x29e1d8(dg, { icon: _0x5e30c5, label: _0x24e510 }),
  });
}
function pg(_0x161db7, _0x33c0a6 = {}) {
  var _0x1d5710, _0x33c1ba, _0x3313bd;
  let _0x20d846 = _0x161db7.config ?? {},
    _0xf3f195 = _0x20d846.conditionalColoring,
    _0x4cde20 = Array.isArray(_0xf3f195 == null ? undefined : _0xf3f195.rules)
      ? _0xf3f195.rules["length"]
      : 0;
  return {
    viewType: _0x161db7.type,
    filterCount:
      ((_0x1d5710 = _0x161db7.filter) == null ||
      (_0x1d5710 = _0x1d5710.conditions) == null
        ? undefined
        : _0x1d5710.length) ?? 0,
    groupCount:
      ((_0x33c1ba = _0x161db7.group) == null ? undefined : _0x33c1ba.length) ??
      0,
    sortCount:
      ((_0x3313bd = _0x161db7.sort) == null ? undefined : _0x3313bd.length) ??
      0,
    rowHeightActive: !!(
      _0x20d846.rowHeight && _0x20d846.rowHeight !== "medium"
    ),
    conditionalColoringActive: _0x4cde20 > 0,
    conditionalColoringCount: _0x4cde20,
    canUndo: (_0x33c0a6.undos ?? 0) > 0,
    canRedo: (_0x33c0a6.redos ?? 0) > 0,
  };
}
function mg(_0x127c84, _0x1d5936) {
  if (_0x127c84)
    return (
      (_0x1d5936 ? _0x127c84.tables[_0x1d5936] : undefined) ?? Zh(_0x127c84)[0]
    );
}
function hg(_0xe474f7) {
  var _0x197cf7;
  return (
    (_0xe474f7 == null || (_0x197cf7 = _0xe474f7.viewOrder) == null
      ? undefined
      : _0x197cf7
          .map((_0x557a6e) => _0xe474f7.views[_0x557a6e])
          .filter((_0x2e83fe) => !!_0x2e83fe)) ?? []
  );
}
function gg(_0x534c1c, _0x43e072) {
  if (_0x534c1c)
    return (
      (_0x43e072 ? _0x534c1c.views[_0x43e072] : undefined) ?? hg(_0x534c1c)[0]
    );
}
function _g(_0x343ed5) {
  let {
    children: _0x4fc88d,
    title: _0x473538,
    className: _0x1e0b4d,
    onClick: _0x5d80b8,
  } = _0x343ed5;
  return _0x29e1d8(jf, {
    title: _0x473538,
    children: _0x29e1d8(_0x43385d, {
      type: "button",
      size: "small",
      variant: "ghost",
      className: _0x228d07("univer-size-6 univer-p-0", _0x1e0b4d),
      "aria-label": _0x473538,
      onClick: (_0x1f521e) => _0x5d80b8(_0x1f521e.currentTarget),
      children: _0x4fc88d,
    }),
  });
}
function vg(_0x23cce4) {
  return {
    x: _0x23cce4.x,
    y: _0x23cce4.y,
    width: _0x23cce4.width,
    height: _0x23cce4.height,
  };
}
function yg(_0xa53d77) {
  let _0x4469e4 = _0x10c9f3(_0xa53d77, {
    width: 328,
    height: 360,
    gap: 6,
    margin: 8,
  });
  return {
    top: _0x4469e4.top,
    left: _0x4469e4.left,
    maxHeight: _0x4469e4.maxHeight,
  };
}
function bg(_0x26942b) {
  let _0x58dbac = _0x10c9f3(
    {
      left: _0x26942b.right - 208,
      right: _0x26942b.right,
      top: _0x26942b.top,
      bottom: _0x26942b.bottom,
      width: 208,
      height: _0x26942b.height,
    },
    { width: 208, height: 320, gap: 8, margin: 8 },
  );
  return {
    top: _0x58dbac.top,
    left: _0x58dbac.left,
    maxHeight: _0x58dbac.maxHeight,
  };
}
function xg(_0x4de1c6) {
  zm(_0x4de1c6, "bases-ui.embed", Sg);
}
function Sg(_0x381053) {
  (_0x381053.has(_0x4ff642) || _0x381053.add([_0x4ff642]),
    _0x381053.has(_0x4f01c2) ||
      _0x381053.add([_0x4f01c2, { useFactory: () => _0x381053.get(Ss) }]),
    _0x381053.has(_0x5180a9) ||
      _0x381053.add([_0x5180a9, { useFactory: () => _0x381053.get(xs) }]),
    _0x381053.has(_0x1682c4) ||
      _0x381053.add([_0x1682c4, { useFactory: () => _0x381053.get(ld) }]),
    _0x381053.has(_0x27c7e4) ||
      _0x381053.add([_0x27c7e4, { useFactory: () => _0x381053.get(X) }]),
    _0x381053.has(_0x27494e) ||
      _0x381053.add([
        _0x27494e,
        {
          useFactory: () =>
            wg({
              embedModelService: _0x381053.get(_0x588de6),
              restoreService: _0x381053.get(ud),
              mountService: _0x381053.get(cl),
              activationService: _0x381053.get(dl),
            }),
        },
      ]));
  let _0x1f6403 = _0x381053.get(_0x4294fc),
    _0xc158f7 = _0x381053.get(Rc),
    _0x31e470 = _0x381053.get(Ic),
    _0x382186 = _0x381053.get(bs),
    _0xc0785c = _0x381053.get(Lc),
    _0x42ebd2 = _0x381053.get(cd),
    _0x3de909 = _0x381053.get(Cd),
    _0x172326 = oh(
      _0x381053.has(_0x4466c1) ? _0x381053.get(_0x4466c1) : undefined,
      _0x381053.has(_0x3e617f) ? _0x381053.get(_0x3e617f) : undefined,
      () => (_0x381053.has(_0x1ec08d) ? _0x381053.get(_0x1ec08d) : undefined),
    );
  _0x1f6403.get(_0x172326.hostType, _0x172326.entry) ||
    _0x1f6403.register(_0x172326);
  let _0xe7194b = sh();
  _0xc158f7.get(_0xe7194b.hostType, _0xe7194b.entry) ||
    _0xc158f7.register(_0xe7194b);
  let _0x15cc55 = _h(_0x381053.get(_0x42e186), _0x381053.get(_0x4ff642));
  _0x31e470.get(_0x15cc55.childType) || _0x31e470.register(_0x15cc55);
  let _0x422e95 = Ym();
  (_0x382186.get(_0x422e95.childType) || _0x382186.register(_0x422e95),
    tg().forEach((_0x27364b) => {
      _0xc0785c.hasExact(
        _0x27364b.hostType,
        _0x27364b.entry,
        _0x27364b.childType,
      ) || _0xc0785c.register(_0x27364b);
    }),
    _0x42ebd2.registerProvider(
      Wf(_0x381053, {
        childType: _0x513c12.UNIVER_BASE,
        renderManagerService: _0x2db5c6,
      }),
    ),
    Cg(_0x381053),
    _0x3de909.get(_0x513c12.UNIVER_BASE) || _0x3de909.register(ph(_0x381053)));
}
function Cg(_0x3db45f) {
  let _0x227ded = _0x3db45f.get(Bf);
  _0x227ded.get(_0x513c12.UNIVER_BASE) ||
    !_0x3db45f.has(_0x1ec08d) ||
    !_0x3db45f.has(_0xca7423) ||
    !_0x3db45f.has(_0x28bf49) ||
    _0x227ded.register(_0x3db45f.createInstance(Xm));
}
function wg(_0x44b248) {
  return {
    mountTableList: async (_0x2d83a9) => {
      let _0x2fe19a = _0x44b248.embedModelService["getDescriptor"](
        _0x2d83a9.baseUnitId,
        _0x2d83a9.embedId,
      );
      if (
        (!_0x2fe19a &&
          _0x2d83a9.childUnitId &&
          (_0x2fe19a = {
            embedId: _0x2d83a9.embedId,
            hostUnitId: _0x2d83a9.baseUnitId,
            hostType: _0x513c12.UNIVER_BASE,
            entry: "bases-table-list-block",
            hostAnchorId: _0x2d83a9.hostAnchorId,
            childUnitId: _0x2d83a9.childUnitId,
            childType: _0x2d83a9.childType,
            source: {
              unitType: _0x2d83a9.childType,
              ref: {
                file: { kind: _0x3729d1.SELF },
                unit: {
                  selector: _0x2d83a9.childUnitId,
                  type: _0x392600(_0x2d83a9.childType),
                },
              },
            },
            sourceMeta: {
              floating: false,
              tab: {
                enabled: true,
                container: "table-list",
                replaceHostMenu: true,
                hideHostFxBar: true,
                lockHostRibbon: true,
              },
            },
          }),
        !(!_0x2fe19a || _0x2fe19a.hostAnchorId !== _0x2d83a9.hostAnchorId) &&
          ((!_0x2fe19a.childUnitId || _0x2fe19a.childType == null) &&
            (_0x2fe19a = await _0x44b248.restoreService[
              "materializeDescriptor"
            ]({ descriptor: _0x2fe19a })),
          !(!_0x2fe19a.childUnitId || _0x2fe19a.childType == null)))
      )
        return (
          _0x44b248.mountService["mount"](_0x2fe19a),
          _0x44b248.activationService["activateTab"](_0x2fe19a),
          _0x11d17f(() => {
            (_0x44b248.activationService["clearTab"](_0x2d83a9.embedId),
              _0x44b248.mountService["unmount"](_0x2d83a9.embedId));
          })
        );
    },
  };
}
let Tg = class extends _0x5f3c10 {
  constructor(
    _0xfc2c17,
    _0x1e13a8,
    _0x49379f,
    _0x26f277,
    _0x17ef7e,
    _0x2a4631,
    _0x34bb7a,
    _0x36bae4,
  ) {
    if (
      (super(),
      (this._context = _0xfc2c17),
      (this._embedModelService = _0x1e13a8),
      (this._domLayerService = _0x49379f),
      (this._boardElementService = _0x26f277),
      (this._boardElementStateService = _0x17ef7e),
      (this._boardUIStateService = _0x2a4631),
      (this._configService = _0x34bb7a),
      (this._commandService = _0x36bae4),
      Y(this, "_items", new Map()),
      Y(this, "_activeDragCleanup", undefined),
      Y(this, "_routeWheelToHost", (_0x1eb8a2) => {
        var _0x1a3f8f, _0x5a0d66;
        let _0x47b7d5 =
          (_0x1a3f8f = (_0x5a0d66 = this._context["engine"])
            .getCanvasElement) == null
            ? undefined
            : _0x1a3f8f.call(_0x5a0d66);
        return _0x47b7d5
          ? (_0x47b7d5.dispatchEvent(
              new WheelEvent("wheel", {
                bubbles: true,
                cancelable: true,
                clientX: _0x1eb8a2.clientX,
                clientY: _0x1eb8a2.clientY,
                ctrlKey: _0x1eb8a2.ctrlKey,
                deltaMode: _0x1eb8a2.deltaMode,
                deltaX: _0x1eb8a2.deltaX,
                deltaY: _0x1eb8a2.deltaY,
                deltaZ: _0x1eb8a2.deltaZ,
                metaKey: _0x1eb8a2.metaKey,
                shiftKey: _0x1eb8a2.shiftKey,
              }),
            ),
            true)
          : false;
      }),
      Y(this, "_resolveHostWheelGestureRoot", (_0x3d53c9) => {
        var _0x251aa5, _0x44f87e;
        let _0x37f700 =
          (_0x251aa5 = (_0x44f87e = this._context["engine"])
            .getCanvasElement) == null
            ? undefined
            : _0x251aa5.call(_0x44f87e);
        if (!_0x37f700) return null;
        let _0x30af7b = _0x3d53c9;
        for (; _0x30af7b && !_0x30af7b.contains(_0x37f700);)
          _0x30af7b = _0x30af7b.parentElement;
        return _0x30af7b;
      }),
      Promise.resolve().then(() => this._sync()),
      typeof document < "u")
    ) {
      let _0x30247a = (_0x5039c5) => this._handleDragStart(_0x5039c5);
      (document.addEventListener(af, _0x30247a),
        this.disposeWithMe(
          _0x11d17f(() => document.removeEventListener(af, _0x30247a)),
        ));
    }
    (this.disposeWithMe(
      this._commandService["onCommandExecuted"]((_0x36ee9e) => {
        (_0x36ee9e.id === _0x212648.id ||
          _0x36ee9e.id === _0x2e1133.id ||
          _0x36ee9e.id === _0x2382be.id ||
          _0x36ee9e.id === _0x1c0b7d.id) &&
          this._sync();
      }),
    ),
      [
        this._boardElementService["elementAdd$"],
        this._boardElementService["elementUpdate$"],
        this._boardElementService["elementRemove$"],
      ].forEach((_0x3ea390) => {
        let _0x2f79da = _0x3ea390.subscribe((_0x3aa77c) => {
          _0x3aa77c.some(
            (_0x38edb7) => _0x38edb7.unitId === this._context["unitId"],
          ) && this._sync();
        });
        this.disposeWithMe(_0x11d17f(() => _0x2f79da.unsubscribe()));
      }));
  }
  dispose() {
    var _0x5c9fa1;
    ((_0x5c9fa1 = this._activeDragCleanup) == null || _0x5c9fa1.call(this),
      (this._activeDragCleanup = undefined),
      this._items["forEach"]((_0x3e37cb) => _0x3e37cb.dispose()),
      this._items["clear"](),
      super.dispose());
  }
  _sync() {
    let _0x13eb6a = this._context["unitId"];
    if (
      this._embedModelService["getActiveDescriptorsByChildUnit"](_0x13eb6a)
        .length > 0
    ) {
      this._clearItems();
      return;
    }
    let _0x5ce0b7 =
        this._boardElementService["getElementDataForUnit"](_0x13eb6a),
      _0x61bd9e = new Set();
    (this._embedModelService["getActiveDescriptors"](_0x13eb6a)
      .filter((_0x2f780a) => _0x2f780a.entry === _0x3a477c.BoardsFloatingObject)
      .forEach((_0x2ef25e) => {
        let _0xc8f49 = Object.values(_0x5ce0b7).find((_0x4315c1) => {
            var _0x3652ef;
            return _0xa98c6f(
              (_0x3652ef = _0x4315c1.data[_0x2ef25e.hostAnchorId]) == null
                ? undefined
                : _0x3652ef.element,
            );
          }),
          _0x36e4db =
            _0xc8f49 == null
              ? undefined
              : _0xc8f49.data[_0x2ef25e.hostAnchorId],
          _0x6f31bf = _0x36e4db == null ? undefined : _0x36e4db.element;
        if (!_0xc8f49 || !_0x36e4db || !_0xa98c6f(_0x6f31bf)) return;
        let _0x427dac = _0x4ac90f(_0x6f31bf),
          _0x5ba931 = this._itemId(_0x2ef25e.hostAnchorId);
        _0x61bd9e.add(_0x5ba931);
        let _0x4ca571 = {
            left: _0x6f31bf.transform["left"] ?? 0,
            top: _0x6f31bf.transform["top"] ?? 0,
            width: _0x6f31bf.transform["width"] ?? 560,
            height: _0x6f31bf.transform["height"] ?? 360,
          },
          _0x27b492 = () =>
            _0xc3e5c7(Lf, {
              data: {
                version: 1,
                embedId: _0x2ef25e.embedId,
                hostUnitId: _0x13eb6a,
                hostAnchorId: _0x2ef25e.hostAnchorId,
                childUnitId:
                  _0x2ef25e.childUnitId ??
                  (_0x427dac == null ? undefined : _0x427dac.childUnitId),
                childType:
                  _0x2ef25e.childType ??
                  (_0x427dac == null ? undefined : _0x427dac.childType),
              },
              enableStage1BodyDrag: true,
              hostFloatDomLayout$: this._boardUIStateService["state$"],
              onHostWheel: this._routeWheelToHost,
              resolveHostWheelGestureRoot: this._resolveHostWheelGestureRoot,
              onRuntimeStageEnter: (_0x48c640) =>
                this._setAnchorTransformerVisible(
                  _0x48c640 !== "stage2",
                  _0x36e4db.subUnitId,
                  _0x2ef25e.hostAnchorId,
                ),
            });
        this._items["has"](_0x5ba931)
          ? this._domLayerService["updateItem"](_0x5ba931, {
              rect: _0x4ca571,
              content: _0x27b492,
            })
          : this._items["set"](
              _0x5ba931,
              this._domLayerService["registerItem"]({
                id: _0x5ba931,
                unitId: _0x13eb6a,
                subUnitId: _0x36e4db.subUnitId,
                elementId: _0x2ef25e.hostAnchorId,
                rect: _0x4ca571,
                content: _0x27b492,
                interactive: true,
                showResizeGuide: true,
              }),
            );
      }),
      this._items["forEach"]((_0x2de928, _0x5abe93) => {
        _0x61bd9e.has(_0x5abe93) ||
          (_0x2de928.dispose(), this._items["delete"](_0x5abe93));
      }));
  }
  _itemId(_0x6df1fa) {
    return "board-embed:" + this._context["unitId"] + ":" + _0x6df1fa;
  }
  _selectAnchor(_0x398384, _0x2668fa) {
    this._boardElementStateService["selectElements"](
      { unitId: this._context["unitId"], subUnitId: _0x398384 },
      [_0x2668fa],
      _0x2668fa,
    );
  }
  _setAnchorTransformerVisible(_0xf59a6d, _0x3e419f, _0x1545b4) {
    if (_0xf59a6d) {
      this._selectAnchor(_0x3e419f, _0x1545b4);
      return;
    }
    this._boardElementStateService["clearSelection"]();
  }
  _handleDragStart(_0x57979a) {
    var _0x4d821f, _0x38ff96, _0x4561d0, _0x242ef5;
    let _0xb2925d = _0x57979a.detail;
    if (!_0xb2925d || _0xb2925d.hostUnitId !== this._context["unitId"]) return;
    let _0x8d5c80 = this._boardElementService["getElementDataForUnit"](
        this._context["unitId"],
      ),
      _0x588b02 = Object.values(_0x8d5c80).find(
        (_0x546141) => _0x546141.data[_0xb2925d.hostAnchorId],
      ),
      _0x44d05c =
        _0x588b02 == null ? undefined : _0x588b02.data[_0xb2925d.hostAnchorId];
    if (
      !_0x588b02 ||
      !_0x44d05c ||
      !_0xa98c6f(_0x44d05c.element) ||
      ((_0x4d821f = _0x4ac90f(_0x44d05c.element)) == null
        ? undefined
        : _0x4d821f.embedId) !== _0xb2925d.embedId
    )
      return;
    let _0x2e29e2 =
      (_0x38ff96 = (_0x4561d0 = this._context["engine"]).getCanvasElement) ==
      null
        ? undefined
        : _0x38ff96.call(_0x4561d0);
    if (!_0x2e29e2) return;
    ((_0x242ef5 = this._activeDragCleanup) == null || _0x242ef5.call(this),
      this._selectAnchor(_0x44d05c.subUnitId, _0xb2925d.hostAnchorId),
      this._setAnchorTransformerVisible(
        false,
        _0x44d05c.subUnitId,
        _0xb2925d.hostAnchorId,
      ));
    let _0x1623a9 = _0x44d05c.element,
      _0x286274 = _0x1623a9.transform["left"] ?? 0,
      _0x5e516b = _0x1623a9.transform["top"] ?? 0,
      _0xf7cda9 = this._boardUIStateService["getState"](),
      _0x344e1b = _0x122c85(
        this._configService["getConfig"](_0x8a798) ?? undefined,
      ),
      _0x4b5612 = _0x29cb32(
        _0x2e29e2,
        _0xb2925d.clientX,
        _0xb2925d.clientY,
        {
          zoomRatio: _0xf7cda9.zoomRatio,
          panOffset: _0xf7cda9.viewportPanOffset,
        },
        _0x344e1b,
      ),
      _0x226d1d = document.defaultView ?? window,
      _0x1b625a = (_0x46b1fc, _0x4c2061) => {
        let _0x2c87d8 = this._boardUIStateService["getState"](),
          _0x5a103e = _0x29cb32(
            _0x2e29e2,
            _0x46b1fc,
            _0x4c2061,
            {
              zoomRatio: _0x2c87d8.zoomRatio,
              panOffset: _0x2c87d8.viewportPanOffset,
            },
            _0x344e1b,
          );
        return {
          left: _0x286274 + _0x5a103e.x - _0x4b5612.x,
          top: _0x5e516b + _0x5a103e.y - _0x4b5612.y,
        };
      },
      _0xe40f22 = (_0x18fc64, _0xbb191f) => {
        let _0x372178 = _0x1b625a(_0x18fc64, _0xbb191f);
        return (
          this._domLayerService["updateItem"](
            this._itemId(_0xb2925d.hostAnchorId),
            {
              rect: {
                ..._0x372178,
                width: _0x1623a9.transform["width"] ?? 560,
                height: _0x1623a9.transform["height"] ?? 360,
              },
            },
          ),
          _0x372178
        );
      },
      _0x2f0c82 = (_0x1286d9) =>
        _0xb2925d.pointerId == null ||
        _0x1286d9.pointerId === _0xb2925d.pointerId,
      _0x232fd4 = () => {},
      _0x410601 = (_0x49016d) => {
        _0x2f0c82(_0x49016d) &&
          (_0x49016d.preventDefault(),
          _0xe40f22(_0x49016d.clientX, _0x49016d.clientY));
      },
      _0x3d2e33 = async (_0x2dba17) => {
        if (!_0x2f0c82(_0x2dba17)) return;
        (_0x232fd4(), _0x2dba17.preventDefault());
        let _0x25a883 = _0xe40f22(_0x2dba17.clientX, _0x2dba17.clientY);
        await this._commandService["executeCommand"](_0x3bb174.id, {
          unitId: this._context["unitId"],
          subUnitId: _0x44d05c.subUnitId,
          elementId: _0xb2925d.hostAnchorId,
          element: _0x1623a9,
          transform: { ..._0x44d05c.transform, ..._0x25a883 },
        }).finally(() => {
          (this._sync(),
            this._setAnchorTransformerVisible(
              true,
              _0x44d05c.subUnitId,
              _0xb2925d.hostAnchorId,
            ));
        });
      },
      _0x16f725 = (_0x208637) => {
        _0x2f0c82(_0x208637) &&
          (_0x232fd4(),
          this._sync(),
          this._setAnchorTransformerVisible(
            true,
            _0x44d05c.subUnitId,
            _0xb2925d.hostAnchorId,
          ));
      };
    ((_0x232fd4 = () => {
      (_0x226d1d.removeEventListener("pointermove", _0x410601),
        _0x226d1d.removeEventListener("pointerup", _0x3d2e33),
        _0x226d1d.removeEventListener("pointercancel", _0x16f725),
        this._activeDragCleanup === _0x232fd4 &&
          (this._activeDragCleanup = undefined));
    }),
      _0x226d1d.addEventListener("pointermove", _0x410601),
      _0x226d1d.addEventListener("pointerup", _0x3d2e33),
      _0x226d1d.addEventListener("pointercancel", _0x16f725),
      (this._activeDragCleanup = _0x232fd4));
  }
  _clearItems() {
    (this._items["forEach"]((_0xc5fc4d) => _0xc5fc4d.dispose()),
      this._items["clear"]());
  }
};
Tg = $(
  [
    Q(1, _0x1a6fa3(_0x588de6)),
    Q(2, _0x1a6fa3(_0x13e333)),
    Q(3, _0x1a6fa3(_0x52a322)),
    Q(4, _0x1a6fa3(_0x30f355)),
    Q(5, _0x1a6fa3(_0x43f52c)),
    Q(6, _0x405ebf),
    Q(7, _0x42e186),
  ],
  Tg,
);
function Eg() {
  return {
    ...Gm({
      childType: _0x513c12.UNIVER_BOARD,
      productName: "Boards",
      hostChromeMode: "none",
    }),
    presentationPolicy: {
      getChromeCss: () =>
        '\n [data-embed-presentation-runtime="true"] [data-board-left-toolbar="true"],\n [data-embed-presentation-runtime="true"] [data-board-top-right-menu="true"],\n [data-embed-presentation-runtime="true"] [data-board-zoom-controls="true"],\n [data-embed-presentation-runtime="true"] [data-board-help-control="true"],\n [data-embed-presentation-runtime="true"] [data-board-object-list-panel="true"],\n [data-embed-presentation-runtime="true"] [data-board-shape-panel="true"],\n [data-embed-presentation-runtime="true"] [data-board-floating-panel-layer="true"],\n [data-embed-presentation-runtime="true"] [data-u-comp="shape-text-editor-position-wrapper"],\n [data-embed-presentation-runtime="true"] [data-u-comp="shape-floating-toolbar"],\n [data-embed-presentation-runtime="true"] [data-u-comp="editor-ui-floating-container"] {\n display: none !important;\n }\n ',
    },
  };
}
function Dg() {
  return {
    hostType: _0x513c12.UNIVER_BOARD,
    entry: _0x3a477c.BoardsFloatingObject,
    layout: "scroll-contained",
    supportedLayouts: ["scroll-contained", "doc-width-scale", "aspect-fit"],
    menuBehavior: "floating",
  };
}
function Og() {
  return {
    childType: _0x513c12.UNIVER_BOARD,
    handleWheel: (_0x3e07f8) => {
      let _0x8a8c2a = _0x3e07f8.runtimeScope["injector"];
      if (!(_0x8a8c2a != null && _0x8a8c2a.has(_0x43f52c))) return false;
      let _0x1a50b6 = (
          _0x3e07f8.runtimeScope["roots"].content["querySelector"](
            '[data-board-viewport-host="true"]',
          ) ?? _0x3e07f8.runtimeScope["roots"].content
        ).getBoundingClientRect(),
        _0x44523c = _0x122c85(
          _0x8a8c2a.has(_0x405ebf)
            ? _0x8a8c2a.get(_0x405ebf).getConfig(_0x8a798)
            : undefined,
        ),
        _0x6a17e = _0x51cfda({
          event: _0x3e07f8.event,
          interactionConfig: _0x44523c,
          viewportRect: _0x1a50b6,
        });
      if (_0x6a17e.type === "none") return false;
      let _0x298489 = _0x8a8c2a.get(_0x43f52c);
      return (
        _0x6a17e.type === "pan"
          ? _0x298489.shiftViewportPanOffset(_0x6a17e.delta)
          : _0x298489.setZoomRatioAtViewportPoint(
              _0x298489.getState().zoomRatio * _0x6a17e.zoomFactor,
              _0x6a17e.viewportPoint,
            ),
        true
      );
    },
  };
}
function kg(_0x40298d) {
  return {
    childType: _0x513c12.UNIVER_BOARD,
    supportedLayouts: ["content-bounds-fit", "tab-peer", "scroll-contained"],
    scopedDependencies: _0x57597b.getRuntimeScopedDependencies(_0x40298d),
    beforeDeactivate: Ag,
    mount: jg,
  };
}
function Ag(_0x4678fd) {
  let _0x3a7899 = _0x4678fd.runtimeScope["injector"];
  if (
    (_0x3a7899.has(_0x43de99) && _0x3a7899.get(_0x43de99).close(),
    _0x3a7899.has(_0xd19a80) && _0x3a7899.get(_0xd19a80).cancelEditing(),
    _0x3a7899.has(_0x30f355))
  ) {
    let _0x5424cf = _0x3a7899.get(_0x30f355);
    (_0x5424cf.clearActiveEditing(), _0x5424cf.clearSelection());
  }
}
function jg(_0x536865) {
  var _0x1d0876, _0xc16341;
  let _0x2da15b = _0x536865.injector["get"](_0x3e617f).getUnit(
      _0x536865.childUnitId,
      _0x513c12.UNIVER_BOARD,
    ),
    _0x59f1cb = _0x536865.runtimeScope["injector"];
  if (!_0x2da15b || !_0x59f1cb) return;
  let _0x100a2e = _0x536865.injector["get"](_0x2db5c6),
    _0x4d7a8a = Kc(_0x100a2e, _0x536865.childUnitId, _0x59f1cb);
  if (!_0x4d7a8a) return;
  let _0x28ad0f = Sl(_0x536865.runtimeScope["roots"].content);
  _0x28ad0f.render(
    _0x287fb5(fl, {
      injector: _0x59f1cb,
      mountContainer: _0x536865.runtimeScope["roots"].popup,
      embedId: _0x536865.embedId,
      children: [
        _0x29e1d8(_0x45a063, {
          embedded:
            _0x536865.renderScope["mode"] === "float" &&
            !_0x536865.renderScope["fullscreen"],
          fitOnMount: false,
          showZoomControls:
            _0x536865.renderScope["mode"] === "tab" ||
            _0x536865.renderScope["fullscreen"] === true,
        }),
        _0x29e1d8(_0x211cad, {
          positionRoot: _0x536865.runtimeScope["roots"].content,
        }),
        _0x29e1d8(_0x4fc276, {}),
      ],
    }),
  );
  let _0x32b599 =
    _0x536865.renderScope["mode"] !== "float" ||
    _0x536865.renderScope["fullscreen"]
      ? _0x536865.injector["get"](Es).activatePortalScope(
          _0x536865.embedId,
          _0x536865.runtimeScope["roots"].content["ownerDocument"],
          { includeAppShellEditorPortal: false },
        )
      : undefined;
  Jc(_0x4d7a8a, { activate: true });
  let _0x413106 =
    (_0x1d0876 = (_0xc16341 = globalThis).requestAnimationFrame) == null
      ? undefined
      : _0x1d0876.call(_0xc16341, () => {
          let _0x470faf = _0x536865.runtimeScope["roots"].content[
              "querySelector"
            ]('[data-board-viewport-host="true"]'),
            _0x5e1cee =
              (_0x470faf == null
                ? undefined
                : _0x470faf.getBoundingClientRect()) ??
              _0x536865.runtimeScope["roots"].content[
                "getBoundingClientRect"
              ](),
            _0x551e5c = _0x122c85(
              _0x59f1cb.get(_0x405ebf).getConfig(_0x8a798) ?? undefined,
            );
          _0x59f1cb
            .get(_0x2d2c1d)
            .fitContent(_0x2da15b, {
              viewportSize: {
                width: _0x5e1cee.width,
                height: _0x5e1cee.height,
              },
              padding: Math.max(
                16,
                Math.min(
                  64,
                  Math.min(_0x5e1cee.width, _0x5e1cee.height) * 0.08,
                ),
              ),
              zoom: _0x551e5c,
            });
        });
  return _0x11d17f(() => {
    if (_0x413106 != null) {
      var _0x40519e, _0x5732ef;
      (_0x40519e = (_0x5732ef = globalThis).cancelAnimationFrame) == null ||
        _0x40519e.call(_0x5732ef, _0x413106);
    }
    try {
      var _0x35c0a2, _0x4a2e5c;
      (_0x35c0a2 = (_0x4a2e5c = _0x4d7a8a.engine).unmount) == null ||
        _0x35c0a2.call(_0x4a2e5c);
    } catch {}
    (_0x100a2e.removeRender(_0x536865.childUnitId),
      Cl(_0x28ad0f),
      _0x32b599 == null || _0x32b599.dispose(),
      _0x59f1cb.dispose());
  });
}
function Mg() {
  return Wh({ childType: _0x513c12.UNIVER_BOARD, mount: Ng });
}
function Ng(_0x2baabd) {
  if (_0x2baabd.renderScope["fullscreen"]) return;
  let { menu: _0x11a191, portalContainer: _0x16bd66 } = Vh(_0x2baabd),
    _0x12bb11 = Sl(_0x11a191);
  return (
    _0x12bb11.render(
      _0xc3e5c7(
        fl,
        {
          injector: _0x2baabd.runtimeScope["injector"],
          mountContainer: _0x16bd66,
          embedId: _0x2baabd.embedId,
        },
        _0xc3e5c7(Pg, {
          hostUnitId: _0x2baabd.hostUnitId,
          embedId: _0x2baabd.embedId,
          childUnitId: _0x2baabd.childUnitId,
          viewportRoot: _0x2baabd.runtimeScope["roots"].content,
          fullscreen: !!_0x2baabd.renderScope["fullscreen"],
        }),
      ),
    ),
    _0x11d17f(() => {
      (Cl(_0x12bb11), globalThis.setTimeout(() => _0x11a191.remove(), 0));
    })
  );
}
function Pg(_0x331847) {
  let {
      hostUnitId: _0x4a4f57,
      embedId: _0xe8bb48,
      childUnitId: _0x3e3872,
      viewportRoot: _0x4f3ccc,
      fullscreen: _0x39a842,
    } = _0x331847,
    _0x183b41 = _0x5ade04(_0x42e186),
    _0x24675f = _0x5ade04(_0x405ebf),
    _0x7d927a = _0x5ade04(_0x3e617f),
    _0x151fd8 = _0x5ade04(_0x11dce0),
    _0x2e3eff = _0x5ade04(xs),
    _0x4639fa = _0x5ade04(_0x43f52c),
    _0x235fc7 = _0x5ade04(_0x2d2c1d),
    _0x2e1baf = _0xe46a3c(() => _0x4639fa.state$, _0x4639fa.getState(), false, [
      _0x4639fa,
    ]),
    _0x371e8a = Ig({
      embedId: _0xe8bb48,
      active: _0xe46a3c(() => _0x2e3eff.active$, _0x2e3eff.getActive(), false, [
        _0x2e3eff,
      ]),
      fullscreen: _0x39a842,
    }),
    _0x515470 = _0x7d927a.getUnit(_0x3e3872, _0x513c12.UNIVER_BOARD),
    _0x30ddaf = _0x122c85(_0x24675f.getConfig(_0x8a798) ?? undefined),
    _0x413237 = () => _0x4f3ccc.getBoundingClientRect(),
    _0x1ce0b5 = () => ({ x: _0x413237().width / 2, y: _0x413237().height / 2 }),
    _0xbb0a67 = (_0x4ceff7) =>
      _0x4639fa.setZoomRatioAtViewportPoint(_0x4ceff7, _0x1ce0b5());
  return _0x287fb5("div", {
    className: _0x228d07(
      "univer-board-embed-floating-menu univer-pointer-events-auto univer-box-border univer-inline-flex univer-h-8 univer-items-center univer-gap-1 univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-1 univer-text-gray-900 univer-shadow-lg dark:!univer-border-gray-600 dark:!univer-bg-gray-900 dark:!univer-text-gray-0",
      {
        "univer-hidden": _0x371e8a === "inactive",
        "univer-static\x20univer-mx-auto\x20univer-my-1.5\x20univer-translate-x-0":
          _0x39a842,
        "univer-absolute\x20univer-left-1/2\x20univer-z-[30]\x20-univer-translate-x-1/2":
          !_0x39a842,
        "-univer-top-[44px]": !_0x39a842,
      },
    ),
    "data-embed-floating-menu": "true",
    "data-embed-id": _0xe8bb48,
    "data-embed-float-stage": _0x371e8a,
    onPointerDown: (_0x16f4df) => _0x16f4df.stopPropagation(),
    children: [
      _0x29e1d8(Fg, {
        title: _0x151fd8.t("embed-ui.boardsFloating.fitContent"),
        onClick: () => {
          let _0xc22881 = _0x413237();
          _0x235fc7.fitContent(_0x515470 ?? null, {
            viewportSize: { width: _0xc22881.width, height: _0xc22881.height },
            padding: Math.max(
              16,
              Math.min(64, Math.min(_0xc22881.width, _0xc22881.height) * 0.08),
            ),
            zoom: _0x30ddaf,
          });
        },
        children: _0x29e1d8(_0x3b6bb3, {}),
      }),
      _0x29e1d8(Fg, {
        title: _0x151fd8.t("embed-ui.boardsFloating.zoomOut"),
        onClick: () => _0xbb0a67(_0x2e1baf.zoomRatio - _0x30ddaf.zoomStep),
        children: _0x29e1d8(_0x5a1cdc, {}),
      }),
      _0x287fb5(Fg, {
        title: _0x151fd8.t("embed-ui.boardsFloating.resetZoom"),
        noIcon: true,
        onClick: () => _0xbb0a67(1),
        children: [Math.round(_0x2e1baf.zoomRatio * 100), "%"],
      }),
      _0x29e1d8(Fg, {
        title: _0x151fd8.t("embed-ui.boardsFloating.zoomIn"),
        onClick: () => _0xbb0a67(_0x2e1baf.zoomRatio + _0x30ddaf.zoomStep),
        children: _0x29e1d8(_0x43d456, {}),
      }),
      _0x29e1d8(Mf, {
        hostUnitId: _0x4a4f57,
        embedId: _0xe8bb48,
        variant: "menu",
      }),
      _0x29e1d8(Fg, {
        title: _0x151fd8.t("embed-ui.boardsFloating.delete"),
        className: "univer-text-red-500",
        onClick: async () =>
          _0x183b41.executeCommand(_0x2e1133.id, {
            hostUnitId: _0x4a4f57,
            embedId: _0xe8bb48,
          }),
        children: _0x29e1d8(_0x461762, {}),
      }),
    ],
  });
}
function Fg(_0x2ff5e3) {
  let {
    children: _0x1f446e,
    className: _0x131f0d,
    noIcon: _0x53aa87,
    onClick: _0x431863,
    title: _0x586ed6,
  } = _0x2ff5e3;
  return _0x29e1d8(jf, {
    title: _0x586ed6,
    children: _0x29e1d8(_0x232e68, {
      "aria-label": _0x586ed6,
      className: _0x131f0d,
      noIcon: _0x53aa87,
      onClick: _0x431863,
      children: _0x1f446e,
    }),
  });
}
function Ig(_0x2b7af3) {
  var _0x1e6262;
  return _0x2b7af3.fullscreen
    ? "stage2"
    : ((_0x1e6262 = _0x2b7af3.active) == null
          ? undefined
          : _0x1e6262.embedId) === _0x2b7af3.embedId
      ? (_0x2b7af3.active["stage"] ?? "stage1")
      : "inactive";
}
function Lg(_0x1411f4) {
  zm(_0x1411f4, "boards-ui.embed", Rg);
}
function Rg(_0x390093) {
  _0x390093.has(_0x51471d) ||
    _0x390093.add([_0x51471d, { useFactory: () => _0x390093.get(X) }]);
  let _0x416725 = _0x390093.get(Rc),
    _0x30f06b = _0x390093.get(Ic),
    _0x1bf69e = _0x390093.get(bs),
    _0x1b0388 = _0x390093.get(Lc),
    _0x51ecf0 = _0x390093.get(cd),
    _0x4e791b = _0x390093.get(Cd),
    _0x555bb2 = Dg();
  _0x416725.get(_0x555bb2.hostType, _0x555bb2.entry) ||
    _0x416725.register(_0x555bb2);
  let _0x49b170 = kg(_0x390093);
  _0x30f06b.get(_0x49b170.childType) || _0x30f06b.register(_0x49b170);
  let _0x381901 = Eg();
  (_0x1bf69e.get(_0x381901.childType) || _0x1bf69e.register(_0x381901),
    Mg().forEach((_0x1bf9f6) => {
      _0x1b0388.hasExact(
        _0x1bf9f6.hostType,
        _0x1bf9f6.entry,
        _0x1bf9f6.childType,
      ) || _0x1b0388.register(_0x1bf9f6);
    }),
    _0x51ecf0.registerProvider(
      Wf(_0x390093, {
        childType: _0x513c12.UNIVER_BOARD,
        renderManagerService: _0x2db5c6,
      }),
    ),
    _0x4e791b.get(_0x513c12.UNIVER_BOARD) || _0x4e791b.register(Og()),
    _0x390093.get(_0x2db5c6).registerRenderModule(_0x513c12.UNIVER_BOARD, Tg));
}
const zg = {
  mode: "fit-width",
  target: "container",
  paddingX: 0,
  minScale: 0,
  align: "start",
};
function Bg() {
  return Um({ childType: _0x513c12.UNIVER_DOC, productName: "Docs" });
}
function Vg() {
  return {
    childType: _0x513c12.UNIVER_DOC,
    supportedLayouts: ["tab-peer", "doc-width-scale", "scroll-contained"],
    scopedDependencies: [[_0x5684db]],
    beforeDeactivate: (_0x13fae9) => {
      Ug(_0x13fae9);
    },
    mount: (_0x2ff9f5) => {
      let _0x39e523 =
          _0x2ff9f5.renderScope["mode"] === "float" &&
          !_0x2ff9f5.renderScope["fullscreen"]
            ? Bc(_0x2ff9f5, _0x2db5c6, undefined, {
                scopedInjector: Wg(_0x2ff9f5.runtimeScope["injector"]),
              })
            : Bc(_0x2ff9f5, _0x2db5c6),
        _0x56a97b = Hg(_0x2ff9f5);
      return _0x11d17f(() => {
        (_0x56a97b.dispose(), _0x39e523 == null || _0x39e523.dispose());
      });
    },
  };
}
function Hg(_0x5cc843) {
  let _0x3865a2 =
    _0x5cc843.runtimeScope["roots"].canvas ??
    _0x5cc843.renderScope["canvasRoot"];
  if (!_0x3865a2) return _0x11d17f(() => {});
  let _0x2cd074 = _0x5cc843.injector["get"](_0x2db5c6),
    _0x3acd76 = (_0x1a502d) => {
      var _0x4e08de;
      if (
        !(_0x1a502d.target instanceof HTMLCanvasElement) ||
        !_0x3865a2.contains(_0x1a502d.target)
      )
        return;
      let _0x598501 =
        (_0x4e08de = _0x2cd074.getRenderUnitById(_0x5cc843.childUnitId)) == null
          ? undefined
          : _0x4e08de.with(_0x46f032);
      _0x598501 && !_0x598501.hasFocus() && _0x598501.focus();
    };
  return (
    _0x3865a2.addEventListener("pointerdown", _0x3acd76, true),
    _0x11d17f(() =>
      _0x3865a2.removeEventListener("pointerdown", _0x3acd76, true),
    )
  );
}
function Ug(_0x333e68) {
  var _0x42a2fc, _0x5f3983;
  let _0x63d6f3 = _0x333e68.injector["get"](_0x2db5c6).getRenderUnitById(
      _0x333e68.childUnitId,
    ),
    _0x4ac87d = _0x63d6f3 == null ? undefined : _0x63d6f3.with(_0x46f032);
  (_0x63d6f3 == null ||
    (_0x42a2fc = _0x63d6f3.scene["getTransformer"]()) == null ||
    _0x42a2fc.clearSelectedObjects(),
    _0x63d6f3 == null ||
      (_0x5f3983 = _0x63d6f3.with(_0x1b5811)) == null ||
      _0x5f3983.hideFloatMenu(),
    _0x4ac87d == null || _0x4ac87d.removeAllRanges(),
    _0x4ac87d == null || _0x4ac87d.blur());
}
function Wg(_0x5b0edb) {
  return Ls(_0x5b0edb, new Map([[_0x4c43fb, (_0x2e2cf2) => Gg(_0x2e2cf2)]]));
}
function Gg(_0x56baa8) {
  return {
    ..._0x56baa8,
    fitToWidth: {
      ...(_0x56baa8 == null ? undefined : _0x56baa8.fitToWidth),
      ...zg,
    },
  };
}
function Kg(_0x443d83, _0x11f08e = 120) {
  let _0x4cc8ba,
    _0x51a527,
    _0x4aaeea = () => {
      (_0x51a527 != null &&
        (window.clearTimeout(_0x51a527), (_0x51a527 = undefined)),
        _0x4cc8ba != null &&
          (window.cancelAnimationFrame(_0x4cc8ba), (_0x4cc8ba = undefined)));
    };
  return {
    dispose: _0x4aaeea,
    schedule: () => {
      (_0x4aaeea(),
        (_0x51a527 = window.setTimeout(() => {
          ((_0x51a527 = undefined),
            (_0x4cc8ba = window.requestAnimationFrame(() => {
              ((_0x4cc8ba = undefined), _0x443d83());
            })));
        }, _0x11f08e)));
    },
  };
}
let qg = class extends _0x5f3c10 {
  constructor(
    _0x43fcf5,
    _0x2b32e0,
    _0x8931a5,
    _0x1a4106,
    _0x28630a,
    _0x300267,
    _0x5c9165,
    _0x412b85,
  ) {
    var _0x51d4e3, _0x5491b4, _0x418c10;
    (super(),
      (this._context = _0x43fcf5),
      (this._univerInstanceService = _0x2b32e0),
      (this._commandService = _0x8931a5),
      (this._contentSizeRegistry = _0x1a4106),
      (this._embedMountService = _0x28630a),
      (this._embedModelService = _0x300267),
      (this._renderManagerService = _0x5c9165),
      (this._docViewScaleService = _0x412b85),
      Y(this, "_resolvedChildUnits", new Map()),
      Y(this, "_pendingChildUnits", new Map()));
    let _0x571d76 = _0x5982a3(() => {
        this._rerenderHostDoc() || this._refreshHostDocZoom();
      }),
      _0x1bba15 = Kg(() => {
        this._rerenderHostDoc();
      }),
      _0x3ee277 = _0x5982a3(() => {
        this._refreshHostDocCustomBlockPresentation() ||
          this._rerenderHostDoc();
      }),
      _0x26a336 = _0x5982a3(() => {
        this._rerenderHostDoc();
      }),
      _0x2e3773 =
        (_0x51d4e3 = this._getHostUnit()) == null
          ? undefined
          : _0x51d4e3.zoomRatio;
    (this.disposeWithMe(_0x571d76),
      this.disposeWithMe(_0x1bba15),
      this.disposeWithMe(_0x26a336),
      this.disposeWithMe(_0x3ee277));
    let _0x171dc9 = Jg(
      (_0x5491b4 = this._context["engine"]) == null ||
        (_0x418c10 = _0x5491b4.getCanvasElement) == null
        ? undefined
        : _0x418c10.call(_0x5491b4),
      _0x3ee277.schedule,
    );
    _0x171dc9 && this.disposeWithMe(_0x171dc9);
    let _0x1d9737 = this._contentSizeRegistry["contentSizeChanged$"].subscribe(
      ({ hostUnitId: _0xa96684 }) => {
        _0xa96684 === this._context["unitId"] && _0x571d76.schedule();
      },
    );
    (this.disposeWithMe(_0x11d17f(() => _0x1d9737.unsubscribe())),
      this.disposeWithMe({
        dispose: () => {
          (this._resolvedChildUnits["clear"](),
            this._pendingChildUnits["clear"]());
        },
      }));
    let _0x46b66f = this._univerInstanceService["getTypeOfUnitAdded$"](
        _0x513c12.UNIVER_SHEET,
      ).subscribe(() => {
        _0x571d76.schedule();
      }),
      _0x586ab5 = this._univerInstanceService["getTypeOfUnitAdded$"](
        _0x513c12.UNIVER_BASE,
      ).subscribe(() => {
        _0x571d76.schedule();
      });
    (this.disposeWithMe(_0x11d17f(() => _0x46b66f.unsubscribe())),
      this.disposeWithMe(_0x11d17f(() => _0x586ab5.unsubscribe())));
    let _0x10b9ba = this._contentSizeRegistry["providerChanged$"].subscribe(
      (_0x566886) => {
        (_0x566886 === _0x513c12.UNIVER_SHEET ||
          _0x566886 === _0x513c12.UNIVER_BASE) &&
          _0x571d76.schedule();
      },
    );
    this.disposeWithMe(_0x11d17f(() => _0x10b9ba.unsubscribe()));
    let _0x3cf9f8 = _0x2a043f((_0x3e9358, _0x485213, _0x4ea70d) => {
      var _0x372bbf, _0x277565, _0x16d15e;
      if (_0x3e9358 !== this._context["unitId"]) return null;
      let _0x36e193 = this._getHostSnapshot();
      if (!_0x36e193) return null;
      let _0x54bb95 =
          (_0x372bbf = _0x36e193.drawings) == null
            ? undefined
            : _0x372bbf[_0x485213],
        _0x1c3a3d = _0x54bb95 == null ? undefined : _0x54bb95.data,
        _0x3b37e5 = _0x1c3a3d == null ? undefined : _0x1c3a3d.childType;
      if (
        _0x3b37e5 !== _0x513c12.UNIVER_SHEET &&
        _0x3b37e5 !== _0x513c12.UNIVER_BASE
      )
        return null;
      let _0x4b8a45 = this._docViewScaleService["getViewScale"](),
        _0x508751 = this._getVisibleCanvasDocumentRect(_0x4b8a45),
        _0x37f878 = this._resolveChildUnitId(_0x1c3a3d, _0x3b37e5),
        _0x2dcb44 = _0x37f878
          ? this._getChildUnitForMeasurement(
              _0x37f878,
              _0x3b37e5,
              _0x571d76.schedule,
            )
          : undefined,
        _0x90248 = _0x1c3a3d == null ? undefined : _0x1c3a3d.embedId,
        _0x447613 =
          typeof _0x90248 == "string"
            ? (_0x277565 = this._embedMountService["getSession"](_0x90248)) ==
                null || (_0x277565 = _0x277565.context) == null
              ? undefined
              : _0x277565.runtimeScope["injector"]
            : undefined,
        _0x5e5733 =
          _0x37f878 && _0x2dcb44 != null
            ? this._contentSizeRegistry["measureContentSize"]({
                childType: _0x3b37e5,
                childUnit: _0x2dcb44,
                childUnitId: _0x37f878,
                injector: _0x447613,
                viewportHeight:
                  (_0x508751 == null ? undefined : _0x508751.height) == null
                    ? undefined
                    : Math.max(1, _0x508751.height - 52),
                viewportWidth: _0x4ea70d.fallbackWidth,
              })
            : undefined,
        _0x12a60c = _0x17eb21(_0x3b37e5),
        _0x2adfe2 = Xg(_0x4ea70d.fallbackHeight, _0x12a60c.height),
        _0x3b34cb = Xg(_0x4ea70d.fallbackWidth, _0x12a60c.width),
        _0x305fd1 =
          (_0x5e5733 == null ? undefined : _0x5e5733.height) ?? _0x2adfe2,
        _0x33a7dd = _0x5ecf7c({
          childType: _0x3b37e5,
          contentHeight:
            _0x3b37e5 === _0x513c12.UNIVER_SHEET ? Vp(_0x305fd1) : _0x305fd1,
          contentWidth: _0x5e5733 == null ? undefined : _0x5e5733.width,
          docsLeft: this._getDocsLeft(),
          documentFlavor:
            (_0x16d15e = _0x36e193.documentStyle) == null
              ? undefined
              : _0x16d15e.documentFlavor,
          fallbackHeight: _0x2adfe2,
          fallbackWidth: _0x3b34cb,
          pageMarginLeft: _0x4ea70d.pageMarginLeft,
          pageMarginRight: _0x4ea70d.pageMarginRight,
          pageWidth: _0x4ea70d.pageWidth,
          scale: _0x4b8a45,
          visibleCanvasHeight: _0x508751 == null ? undefined : _0x508751.height,
          visibleCanvasLeft: _0x508751 == null ? undefined : _0x508751.left,
          visibleCanvasWidth: _0x508751 == null ? undefined : _0x508751.width,
        }),
        _0x506c1a = _0x33a7dd.contentHeight ?? _0x33a7dd.height,
        _0x3c6fe9 = _0x3b37e5 === _0x513c12.UNIVER_BASE ? 52 : 0,
        _0x32ae3f =
          (_0x508751 == null ? undefined : _0x508751.height) == null
            ? (_0x33a7dd.viewportHeight ?? _0x506c1a)
            : Math.min(_0x506c1a, Math.max(1, _0x508751.height - _0x3c6fe9));
      return {
        ..._0x33a7dd,
        viewportHeight: _0x32ae3f,
        height: Hp({ contentHeight: _0x506c1a, floatingMenuInsetTop: 52 }),
      };
    });
    (this.disposeWithMe({ dispose: _0x3cf9f8 }),
      this.disposeWithMe(
        this._commandService["onCommandExecuted"]((_0x121f3d) => {
          if (_0x121f3d.id === _0x274f75.id) {
            let _0x306edc = _0x121f3d.params;
            if (
              typeof _0x306edc == "object" &&
              _0x306edc &&
              "unitId" in _0x306edc &&
              _0x306edc.unitId === this._context["unitId"]
            ) {
              let _0x49e7be =
                "zoomRatio" in _0x306edc &&
                typeof _0x306edc.zoomRatio == "number"
                  ? _0x306edc.zoomRatio
                  : undefined;
              if (_0x49e7be != null && _0x49e7be === _0x2e3773) {
                _0x26a336.schedule();
                return;
              }
              ((_0x2e3773 = _0x49e7be),
                this._refreshHostDocCustomBlockPresentation(),
                _0x1bba15.schedule());
            }
            return;
          }
          let _0x1c7895 = this._getHostSnapshot();
          _0x1c7895 &&
            _0x2a56d3({
              childUnitIds: _0x1697c6(_0x1c7895.drawings, (_0x5204f7) =>
                this._resolveChildUnitId(_0x5204f7),
              ),
              commandId: _0x121f3d.id,
              commandParams: _0x121f3d.params,
              hostUnitId: this._context["unitId"],
            }) &&
            _0x571d76.schedule();
        }),
      ));
  }
  _getHostUnit() {
    if (!this._disposed) return this._context["unit"] ?? undefined;
  }
  _getHostSnapshot() {
    var _0x36a84d;
    return (_0x36a84d = this._getHostUnit()) == null
      ? undefined
      : _0x36a84d.getSnapshot();
  }
  _rerenderHostDoc() {
    let _0x1b05f0 = this._renderManagerService["getRenderUnitById"](
      this._context["unitId"],
    );
    try {
      var _0x14dbee;
      let _0x3b56cc =
        _0x1b05f0 == null || (_0x14dbee = _0x1b05f0.with) == null
          ? undefined
          : _0x14dbee.call(_0x1b05f0, _0x34e6bf);
      return _0x3b56cc
        ? (_0x3b56cc.reRender(this._context["unitId"]), true)
        : false;
    } catch {
      return false;
    }
  }
  _refreshHostDocCustomBlockPresentation() {
    let _0x2cdb76 = this._renderManagerService["getRenderUnitById"](
      this._context["unitId"],
    );
    try {
      var _0x929989;
      return (
        (_0x2cdb76 == null ||
        (_0x929989 = _0x2cdb76.with) == null ||
        (_0x929989 = _0x929989.call(_0x2cdb76, _0x34e6bf)) == null
          ? undefined
          : _0x929989.refreshCustomBlockPresentation(
              this._context["unitId"],
            )) ?? false
      );
    } catch {
      return false;
    }
  }
  _refreshHostDocZoom() {
    let _0x3373ed = this._getHostUnit(),
      _0x98f99b = _0x3373ed == null ? undefined : _0x3373ed.zoomRatio;
    typeof _0x98f99b == "number" &&
      this._commandService["syncExecuteCommand"](_0x274f75.id, {
        unitId: this._context["unitId"],
        zoomRatio: _0x98f99b,
      });
  }
  _resolveChildUnitId(_0x2443c6, _0x3e5b19) {
    if (!_0x2443c6 || typeof _0x2443c6 != "object") return;
    let _0x104a76 = _0x2443c6,
      _0x4c2359 =
        typeof _0x104a76.childType == "number"
          ? _0x104a76.childType
          : _0x3e5b19;
    if (
      _0x4c2359 !== _0x513c12.UNIVER_SHEET &&
      _0x4c2359 !== _0x513c12.UNIVER_BASE
    )
      return;
    if (typeof _0x104a76.childUnitId == "string") return _0x104a76.childUnitId;
    if (typeof _0x104a76.embedId != "string") return;
    let _0x20982a =
        typeof _0x104a76.hostUnitId == "string"
          ? _0x104a76.hostUnitId
          : this._context["unitId"],
      _0x3a3380 = this._embedModelService["getDescriptor"](
        _0x20982a,
        _0x104a76.embedId,
      );
    if ((_0x3a3380 == null ? undefined : _0x3a3380.childType) === _0x4c2359) {
      if (typeof _0x3a3380.childUnitId == "string")
        return _0x3a3380.childUnitId;
      try {
        return _0x24f358(_0x3a3380.source["ref"]);
      } catch {
        return;
      }
    }
  }
  _getChildUnitForMeasurement(_0x41828f, _0x2dcf52, _0x3ab30b) {
    let _0x1e8f44 = _0x2dcf52 + ":" + _0x41828f;
    if (this._resolvedChildUnits["has"](_0x1e8f44))
      return this._resolvedChildUnits["get"](_0x1e8f44);
    let _0x4c92b1 = this._univerInstanceService["getUnit"](
      _0x41828f,
      _0x2dcf52,
    );
    if (_0x4c92b1 != null) {
      if (!Yg(_0x4c92b1))
        return (
          this._resolvedChildUnits["set"](_0x1e8f44, _0x4c92b1),
          _0x4c92b1
        );
      if (!this._pendingChildUnits["has"](_0x1e8f44)) {
        let _0x1ba7c0 = Promise.resolve(_0x4c92b1).then(
          (_0x3b7a5e) => (
            this._pendingChildUnits["delete"](_0x1e8f44),
            this._resolvedChildUnits["set"](_0x1e8f44, _0x3b7a5e),
            this._disposed || _0x3ab30b(),
            _0x3b7a5e
          ),
          () => {
            this._pendingChildUnits["delete"](_0x1e8f44);
          },
        );
        this._pendingChildUnits["set"](_0x1e8f44, _0x1ba7c0);
      }
    }
  }
  _getDocsLeft() {
    var _0x499711, _0x56c037;
    return (
      ((_0x499711 = this._context["mainComponent"]) == null ||
      (_0x56c037 = _0x499711.getOffsetConfig) == null ||
      (_0x56c037 = _0x56c037.call(_0x499711)) == null
        ? undefined
        : _0x56c037.docsLeft) ?? 0
    );
  }
  _getVisibleCanvasDocumentRect(_0x5355a0) {
    var _0x58fe69, _0x136adc, _0x770f85, _0x3cbe6c, _0x3cc3f6, _0x20d033;
    let _0x240308 = Number.isFinite(_0x5355a0) && _0x5355a0 > 0 ? _0x5355a0 : 1,
      _0x217bc1 =
        ((_0x58fe69 = this._context["scene"].getViewport(
          _0x43f126.VIEW_MAIN,
        )) == null
          ? undefined
          : _0x58fe69.viewportScrollX) ?? 0,
      _0x296ab1 =
        (_0x136adc = (_0x770f85 = this._context["engine"]).getCanvasElement) ==
          null ||
        (_0x136adc = _0x136adc.call(_0x770f85)) == null ||
        (_0x3cbe6c = _0x136adc.getBoundingClientRect) == null
          ? undefined
          : _0x3cbe6c.call(_0x136adc),
      _0x495e50 = _0x296ab1 == null ? undefined : _0x296ab1.width,
      _0x3bb286 = _0x296ab1 == null ? undefined : _0x296ab1.height,
      _0x1fa1a1 =
        ((_0x3cc3f6 = this._context["mainComponent"]) == null
          ? undefined
          : _0x3cc3f6.width) ?? this._context["scene"].width,
      _0xb0b072 = (_0x495e50 ?? _0x1fa1a1 ?? 0) / _0x240308,
      _0x562b61 =
        ((_0x20d033 = this._context["mainComponent"]) == null
          ? undefined
          : _0x20d033.height) ?? this._context["scene"].height,
      _0x3fd6b5 = (_0x3bb286 ?? _0x562b61 ?? 0) / _0x240308;
    return !_0xb0b072 ||
      !Number.isFinite(_0xb0b072) ||
      _0xb0b072 <= 0 ||
      !_0x3fd6b5 ||
      !Number.isFinite(_0x3fd6b5) ||
      _0x3fd6b5 <= 0
      ? null
      : { height: _0x3fd6b5, left: _0x217bc1, width: _0xb0b072 };
  }
};
qg = $(
  [
    Q(1, _0x1a6fa3(_0x3e617f)),
    Q(2, _0x1a6fa3(_0x42e186)),
    Q(3, _0x1a6fa3(Bf)),
    Q(4, _0x1a6fa3(cl)),
    Q(5, _0x1a6fa3(_0x588de6)),
    Q(6, _0x2db5c6),
    Q(7, _0x1a6fa3(_0x2bef31)),
  ],
  qg,
);
function Jg(_0x3e5670, _0x3b84da) {
  if (!_0x3e5670 || typeof ResizeObserver > "u") return;
  let _0x5190d5 = new ResizeObserver(() => _0x3b84da());
  return (
    _0x5190d5.observe(_0x3e5670),
    { dispose: () => _0x5190d5.disconnect() }
  );
}
function Yg(_0x4a2511) {
  return !!_0x4a2511 && typeof _0x4a2511.then == "function";
}
function Xg(_0x559293, _0x4cc72b) {
  return typeof _0x559293 == "number" &&
    Number.isFinite(_0x559293) &&
    _0x559293 > 1
    ? _0x559293
    : _0x4cc72b;
}
function Zg(_0x3efb99, _0x902f4c, _0x681332) {
  return {
    ..._0x2ceca6(_0x3efb99, _0x902f4c),
    afterCreateAnchor: (_0xb846f2) => $g(_0x681332, _0xb846f2.hostUnitId),
    afterRemoveAnchor: (_0x3d34e1) => $g(_0x681332, _0x3d34e1.hostUnitId),
  };
}
function Qg() {
  return {
    hostType: _0x513c12.UNIVER_DOC,
    entry: "docs-custom-block",
    layout: "docs-sticky-sheet",
    supportedLayouts: [
      "docs-sticky-sheet",
      "docs-sticky-base",
      "aspect-fit",
      "scroll-contained",
      "content-bounds-fit",
    ],
    menuBehavior: "floating",
  };
}
function $g(_0x307568, _0x564257) {
  var _0x3e1ef4, _0x1341c4, _0x3a4160, _0x3d816a;
  if (!_0x307568) return;
  let _0x420458 = _0x307568.getRenderUnitById(_0x564257);
  if (_0x420458) {
    for (let _0x5589a9 of _0x420458.components["values"]()) {
      var _0x468122;
      (_0x468122 = _0x5589a9.makeDirty) == null || _0x468122.call(_0x5589a9);
    }
    ((_0x3e1ef4 = _0x420458.engine) == null || _0x3e1ef4.resize(),
      (_0x1341c4 = _0x420458.scene) == null || _0x1341c4.makeDirty(),
      (_0x3a4160 = _0x420458.with) == null ||
        (_0x3a4160 = _0x3a4160.call(_0x420458, _0x28d0f1)) == null ||
        (_0x3d816a = _0x3a4160.calculatePagePosition) == null ||
        _0x3d816a.call(_0x3a4160));
  }
}
function e_(_0x378a36) {
  return {
    childType: _0x513c12.UNIVER_DOC,
    handleWheel: (_0x5de606) => {
      let _0x4ed5ad = _0x378a36.has(wd) ? _0x378a36.get(wd) : undefined;
      if (
        (_0x4ed5ad == null ? undefined : _0x4ed5ad.handleWheel(_0x5de606)) ===
        true
      )
        return true;
      if (!_0x378a36.has(_0x2db5c6)) return false;
      let _0x52e281 = _0x378a36
          .get(_0x2db5c6)
          .getRenderUnitById(_0x5de606.childUnitId),
        _0x26c9a5 = _0x52e281 == null ? undefined : _0x52e281.scene;
      return zp(
        _0x5de606,
        _0x26c9a5 == null
          ? undefined
          : _0x26c9a5.getViewport(_0x43f126.VIEW_MAIN),
        _0x26c9a5,
      );
    },
  };
}
function t_() {
  return Wh({ childType: _0x513c12.UNIVER_DOC, mount: n_ });
}
function n_(_0x572076) {
  let { menu: _0x1de2c8, portalContainer: _0x262e78 } = Vh(_0x572076),
    _0x53d0a7 = Sl(_0x1de2c8);
  return (
    _0x53d0a7.render(
      _0xc3e5c7(
        fl,
        {
          injector: _0x572076.runtimeScope["injector"],
          mountContainer: _0x262e78,
          embedId: _0x572076.embedId,
        },
        _0xc3e5c7(r_, {
          hostUnitId: _0x572076.hostUnitId,
          embedId: _0x572076.embedId,
          entry: _0x572076.descriptor["entry"],
          fullscreen: !!_0x572076.renderScope["fullscreen"],
          usesDomFloatingStage:
            _0x572076.descriptor["entry"] !== "slides-floating-object",
          renderScopeActive$: _0x572076.renderScope["active$"],
        }),
      ),
    ),
    _0x11d17f(() => {
      (Cl(_0x53d0a7), globalThis.setTimeout(() => _0x1de2c8.remove(), 0));
    })
  );
}
function r_(_0x225855) {
  let {
      hostUnitId: _0xee2592,
      embedId: _0x4e7f33,
      entry: _0x492343,
      fullscreen: _0x201e23,
      usesDomFloatingStage: _0x398d88,
      renderScopeActive$: _0x268df1,
    } = _0x225855,
    _0x1ca089 = _0xe46a3c(() => _0x268df1, false, false, [_0x268df1]),
    _0x46e357 = _0x5ade04(_0x42e186),
    _0x39b47d = _0x5ade04(_0x46b4fe),
    _0xed6754 = _0x5ade04(_0x3e617f),
    _0x137663 = _0x5ade04(_0x11dce0),
    _0x3e8ea3 = _0x5ade04(xs),
    _0x5791bb = Eu({
      embedId: _0x4e7f33,
      active: _0xe46a3c(() => _0x3e8ea3.active$, _0x3e8ea3.getActive(), false, [
        _0x3e8ea3,
      ]),
      fullscreen: _0x201e23,
      usesDomFloatingStage: _0x398d88,
      renderScopeActive: _0x1ca089,
    });
  return _0xe46a3c(
    () =>
      _0x39b47d.permissionPointUpdate$["pipe"](
        _0xb42533(null),
        _0xbab8f3(() =>
          i_(_0x39b47d, _0xed6754, _0xee2592, _0x4e7f33, _0x492343),
        ),
      ),
    i_(_0x39b47d, _0xed6754, _0xee2592, _0x4e7f33, _0x492343),
    false,
    [_0x4e7f33, _0x492343, _0xee2592, _0x39b47d, _0xed6754],
  )
    ? _0x287fb5("div", {
        className: _0x228d07(
          "univer-docs-embed-floating-menu univer-pointer-events-auto univer-box-border univer-inline-flex univer-h-8 univer-items-center univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-1 univer-text-gray-900 univer-shadow-lg dark:!univer-border-gray-600 dark:!univer-bg-gray-900 dark:!univer-text-gray-0",
          {
            "univer-hidden": _0x5791bb !== "stage2",
            "univer-static\x20univer-mx-auto\x20univer-my-1.5\x20univer-translate-x-0":
              _0x201e23,
            "univer-absolute\x20univer-left-1/2\x20univer-z-[30]\x20-univer-translate-x-1/2":
              !_0x201e23,
            "-univer-top-9": !_0x201e23 && _0x492343 !== "docs-custom-block",
            "-univer-top-[52px]":
              !_0x201e23 && _0x492343 === "docs-custom-block",
          },
        ),
        "data-embed-floating-menu": "true",
        "data-embed-id": _0x4e7f33,
        "data-embed-float-stage": _0x5791bb,
        onPointerDown: (_0x4bd468) => _0x4bd468.stopPropagation(),
        children: [
          !_0x201e23 &&
            _0x29e1d8(Mf, {
              hostUnitId: _0xee2592,
              embedId: _0x4e7f33,
              variant: "menu",
            }),
          _0x29e1d8(jf, {
            title: _0x137663.t("embed-ui.deleteBlock"),
            children: _0x29e1d8(_0x43385d, {
              type: "button",
              size: "small",
              variant: "ghost",
              className:
                "univer-size-6 univer-p-0 univer-text-red-500 hover:univer-text-red-600",
              "aria-label": _0x137663.t("embed-ui.deleteBlock"),
              onClick: async () => {
                await _0x46e357.executeCommand(_0x2e1133.id, {
                  hostUnitId: _0xee2592,
                  embedId: _0x4e7f33,
                });
              },
              children: _0x29e1d8(_0x461762, {}),
            }),
          }),
        ],
      })
    : null;
}
function i_(_0x2c37c3, _0x30a0bc, _0xcd0a00, _0x4f3793, _0x3790bd) {
  let _0x1a69e9 = _0x30a0bc.getUnit(_0xcd0a00, _0x513c12.UNIVER_DOC);
  if (!(_0x1a69e9 instanceof _0x42cc2d))
    return [
      _0x513c12.UNIVER_SHEET,
      _0x513c12.UNIVER_SLIDE,
      _0x513c12.UNIVER_BOARD,
    ].some((_0x1540e7) => !!_0x30a0bc.getUnit(_0xcd0a00, _0x1540e7));
  let _0x5d075d =
      _0x3790bd === "slides-floating-object" ? "drawing" : "custom-block",
    _0x4e3268 = _0x5d075d === "drawing" ? _0x5f4e00(_0x1a69e9, _0x4f3793) : "";
  return _0xaa5c51(_0x2c37c3, _0xcd0a00, [
    ..._0x2a43c0(_0x1a69e9, _0x4e3268, _0x5d075d, _0x4f3793),
    _0x11e166(_0x4e3268, _0x5d075d, _0x4f3793),
  ]);
}
function a_(_0x78eb26) {
  zm(_0x78eb26, "docs-ui.embed", o_);
}
function o_(_0x67cf00) {
  let _0x486185 = _0x67cf00.get(_0x4294fc),
    _0x294a17 = _0x67cf00.get(Rc),
    _0x5dcb10 = _0x67cf00.get(Ic),
    _0x4396e3 = _0x67cf00.get(bs),
    _0x793cb4 = _0x67cf00.get(Lc),
    _0x552a8d = _0x67cf00.get(cd),
    _0x1bac50 = _0x67cf00.get(Cd),
    _0x480d67 = _0x67cf00.has(_0x4466c1) ? _0x67cf00.get(_0x4466c1) : undefined,
    _0x57a4ae = _0x67cf00.has(_0x3e617f) ? _0x67cf00.get(_0x3e617f) : undefined,
    _0x209587 = _0x67cf00.has(_0x2db5c6) ? _0x67cf00.get(_0x2db5c6) : undefined;
  _0x209587 == null ||
    _0x209587.registerRenderModule(_0x513c12.UNIVER_DOC, [qg]);
  let _0xdc7784 = Zg(_0x480d67, _0x57a4ae, _0x209587);
  _0x486185.get(_0xdc7784.hostType, _0xdc7784.entry) ||
    _0x486185.register(_0xdc7784);
  let _0x54386d = Qg();
  _0x294a17.get(_0x54386d.hostType, _0x54386d.entry) ||
    _0x294a17.register(_0x54386d);
  let _0x563530 = Vg();
  _0x5dcb10.get(_0x563530.childType) || _0x5dcb10.register(_0x563530);
  let _0x1d5b5a = Bg();
  (_0x4396e3.get(_0x1d5b5a.childType) || _0x4396e3.register(_0x1d5b5a),
    t_().forEach((_0x554f3f) => {
      _0x793cb4.hasExact(
        _0x554f3f.hostType,
        _0x554f3f.entry,
        _0x554f3f.childType,
      ) || _0x793cb4.register(_0x554f3f);
    }),
    _0x552a8d.registerProvider(
      Wf(_0x67cf00, {
        childType: _0x513c12.UNIVER_DOC,
        renderManagerService: _0x2db5c6,
      }),
    ),
    _0x1bac50.get(_0x513c12.UNIVER_DOC) || _0x1bac50.register(e_(_0x67cf00)));
}
function s_() {
  return {
    childType: _0x513c12.UNIVER_SHEET,
    measureContentSize: (_0x1eb784) => {
      let _0x49bd34 = c_(
          _0x1eb784.childUnit,
          _0x1eb784.limitRowsToViewportWidth
            ? _0x1eb784.viewportWidth
            : undefined,
        ),
        _0x50777a = u_(_0x1eb784.childUnit);
      return _0x49bd34 == null && _0x50777a == null
        ? undefined
        : {
            height: _0x49bd34 == null ? undefined : _0x49bd34.height,
            verticalBreaks: _0x49bd34 == null ? undefined : _0x49bd34.breaks,
            width: _0x50777a,
          };
    },
  };
}
function c_(_0x4ef390, _0x41c7b2) {
  var _0x3f4fa2;
  let _0x41ff3f =
    _0x4ef390 instanceof _0x57b012 ? _0x4ef390.getActiveSheet(true) : undefined;
  if (!_0x41ff3f) return;
  let _0x28522a = d_(_0x41ff3f, _0x41c7b2);
  if (!Number.isFinite(_0x28522a) || _0x28522a == null || _0x28522a < 0) return;
  let _0x387616 = h_(
      (_0x3f4fa2 = _0x41ff3f.getConfig) == null ||
        (_0x3f4fa2 = _0x3f4fa2.call(_0x41ff3f)) == null
        ? undefined
        : _0x3f4fa2.defaultRowHeight,
      _0xd9edde,
    ),
    _0x43023d = l_(_0x4ef390),
    _0x2eaefa = 0,
    _0x51a106 = [];
  for (let _0x167cb2 = 0; _0x167cb2 < _0x28522a; _0x167cb2++) {
    var _0x2be3ad, _0x5ccc9a;
    ((_0x2be3ad = _0x41ff3f.getRowVisible) == null
      ? undefined
      : _0x2be3ad.call(_0x41ff3f, _0x167cb2)) !== false &&
      ((_0x2eaefa += g_(
        (_0x5ccc9a = _0x41ff3f.getRowHeight) == null
          ? undefined
          : _0x5ccc9a.call(_0x41ff3f, _0x167cb2),
        _0x387616,
      )),
      _0x51a106.push(_0x43023d + _0x2eaefa));
  }
  return { breaks: _0x51a106, height: _0x43023d + _0x2eaefa };
}
function l_(_0x45ccc7) {
  var _0x30155e;
  let _0x2f730d =
      _0x45ccc7 instanceof _0x57b012
        ? _0x45ccc7.getActiveSheet(true)
        : undefined,
    _0x536431 =
      _0x2f730d == null ||
      (_0x30155e = _0x2f730d.getConfig) == null ||
      (_0x30155e = _0x30155e.call(_0x2f730d)) == null
        ? undefined
        : _0x30155e.columnHeader;
  return _0x536431 != null && _0x536431.hidden
    ? 0
    : h_(_0x536431 == null ? undefined : _0x536431.height, 24);
}
function u_(_0x46c644) {
  var _0x42b815, _0x3cd313;
  let _0xce2115 =
    _0x46c644 instanceof _0x57b012 ? _0x46c644.getActiveSheet(true) : undefined;
  if (!_0xce2115) return;
  let _0x24b639 = p_(_0xce2115);
  if (!Number.isFinite(_0x24b639) || _0x24b639 == null || _0x24b639 < 0) return;
  let _0x16539e =
      (_0x42b815 = _0xce2115.getConfig) == null ||
      (_0x42b815 = _0x42b815.call(_0xce2115)) == null
        ? undefined
        : _0x42b815.rowHeader,
    _0xd010c9 = h_(
      (_0x3cd313 = _0xce2115.getConfig) == null ||
        (_0x3cd313 = _0x3cd313.call(_0xce2115)) == null
        ? undefined
        : _0x3cd313.defaultColumnWidth,
      _0x1dee2c,
    ),
    _0x23d9c8 =
      _0x16539e != null && _0x16539e.hidden
        ? 0
        : h_(_0x16539e == null ? undefined : _0x16539e.width, _0x4cdefd),
    _0x1fed79 = 0;
  for (let _0x35fda6 = 0; _0x35fda6 < _0x24b639; _0x35fda6++) {
    var _0x17730f, _0x22e476;
    ((_0x17730f = _0xce2115.getColVisible) == null
      ? undefined
      : _0x17730f.call(_0xce2115, _0x35fda6)) !== false &&
      (_0x1fed79 += h_(
        (_0x22e476 = _0xce2115.getColumnWidth) == null
          ? undefined
          : _0x22e476.call(_0xce2115, _0x35fda6),
        _0xd010c9,
      ));
  }
  return _0x23d9c8 + _0x1fed79 + _0xba56c9.DEFAULT_TOTAL_SIZE;
}
function d_(_0xd57417, _0x4028ab) {
  let _0x259ecd = m_(_0xd57417.getRowCount());
  if (_0x259ecd == null || _0x4028ab == null) return _0x259ecd;
  let _0x4903c6 = f_(_0xd57417, _0x4028ab),
    _0x252524 = _0xd57417.getDataRealRange();
  if (
    _0x4903c6 < 0 ||
    _0x252524.endRow < 0 ||
    _0x252524.endColumn < 0 ||
    _0x252524.startColumn > _0x4903c6
  )
    return 0;
  let _0x562ada = -1;
  for (let _0x4b6b09 of _0xd57417.iterateByRow({
    startRow: Math.max(0, _0x252524.startRow),
    startColumn: Math.max(0, _0x252524.startColumn),
    endRow: _0x252524.endRow,
    endColumn: Math.min(_0x4903c6, _0x252524.endColumn),
  }))
    _0x4b6b09.value &&
      _0xd57417.cellHasValue(_0x4b6b09.value) &&
      (_0x562ada = _0x4b6b09.row);
  return Math.min(_0x259ecd, _0x562ada + 1);
}
function f_(_0x1bf842, _0x56df8a) {
  var _0x58b697, _0x48634c;
  let _0x347819 =
      (_0x58b697 = _0x1bf842.getConfig) == null ||
      (_0x58b697 = _0x58b697.call(_0x1bf842)) == null
        ? undefined
        : _0x58b697.rowHeader,
    _0x2173dc =
      _0x347819 != null && _0x347819.hidden
        ? 0
        : h_(_0x347819 == null ? undefined : _0x347819.width, _0x4cdefd),
    _0x30d156 = Math.max(
      0,
      _0x56df8a - _0x2173dc - _0xba56c9.DEFAULT_TOTAL_SIZE,
    ),
    _0x4ba90a = h_(
      (_0x48634c = _0x1bf842.getConfig) == null ||
        (_0x48634c = _0x48634c.call(_0x1bf842)) == null
        ? undefined
        : _0x48634c.defaultColumnWidth,
      _0x1dee2c,
    ),
    _0x4710e7 = 0,
    _0x52b450 = -1,
    _0x39588e = p_(_0x1bf842) ?? 0;
  for (
    let _0x1d044c = 0;
    _0x1d044c < _0x39588e && _0x4710e7 < _0x30d156;
    _0x1d044c++
  ) {
    var _0x57c091, _0x3aa298;
    ((_0x57c091 = _0x1bf842.getColVisible) == null
      ? undefined
      : _0x57c091.call(_0x1bf842, _0x1d044c)) !== false &&
      ((_0x52b450 = _0x1d044c),
      (_0x4710e7 += h_(
        (_0x3aa298 = _0x1bf842.getColumnWidth) == null
          ? undefined
          : _0x3aa298.call(_0x1bf842, _0x1d044c),
        _0x4ba90a,
      )));
  }
  return _0x52b450;
}
function p_(_0x1afc6f) {
  return m_(_0x1afc6f.getColumnCount());
}
function m_(_0x338702) {
  return typeof _0x338702 == "number" &&
    Number.isFinite(_0x338702) &&
    _0x338702 >= 0
    ? Math.floor(_0x338702)
    : undefined;
}
function h_(_0x5759a7, _0x332228) {
  return typeof _0x5759a7 == "number" &&
    Number.isFinite(_0x5759a7) &&
    _0x5759a7 > 0
    ? _0x5759a7
    : _0x332228;
}
function g_(_0x10e8ad, _0x2e0427) {
  return typeof _0x10e8ad == "number" &&
    Number.isFinite(_0x10e8ad) &&
    _0x10e8ad >= 0
    ? _0x10e8ad
    : _0x2e0427;
}
function __() {
  return {
    hostType: _0x513c12.UNIVER_SHEET,
    entry: "sheets-floating-object",
    layout: "doc-width-scale",
    supportedLayouts: [
      "doc-width-scale",
      "aspect-fit",
      "scroll-contained",
      "content-bounds-fit",
    ],
    menuBehavior: "floating",
  };
}
function v_() {
  return {
    hostType: _0x513c12.UNIVER_SHEET,
    entry: "sheets-sheet-tab",
    layout: "tab-peer",
    supportedLayouts: ["tab-peer"],
    menuBehavior: "host-override",
    mount: (_0x3da0f2) => {
      let _0x4a1b71 = y_(
        "data-embed-sheets-sheet-tab-host",
        _0x3da0f2.descriptor["hostAnchorId"],
      );
      return _0x4a1b71 ? { hostElement: _0x4a1b71 } : {};
    },
  };
}
function y_(_0x6d22fa, _0x5dba50) {
  return document.querySelector(
    "[" + _0x6d22fa + "=\x22" + b_(_0x5dba50) + "\x22]",
  );
}
function b_(_0x12c087) {
  return _0x12c087.replace(/\\/g, "\x5c\x5c").replace(/"/g, "\x5c\x22");
}
function x_(_0x5355d3) {
  let _0x3230d0 = _0x5355d3.has(_0x3e617f)
      ? _0x5355d3.get(_0x3e617f)
      : undefined,
    _0x2359fe = _0x5355d3.has(_0x2db5c6) ? _0x5355d3.get(_0x2db5c6) : undefined;
  return {
    childType: _0x513c12.UNIVER_SHEET,
    getHorizontalScroll: (_0x1310cf) => {
      var _0x1ce75d;
      return (_0x1ce75d = _0xd58eea(_0x1310cf)) == null
        ? undefined
        : _0x1ce75d.viewportScrollX;
    },
    getVerticalScroll: (_0x5dc9a3) => {
      var _0x5ccb93;
      return (_0x5ccb93 = _0xd58eea(_0x5dc9a3)) == null
        ? undefined
        : _0x5ccb93.viewportScrollY;
    },
    getStickyLeftWidth: (_0x1a6a8a) => {
      var _0x109f8c, _0x4fce98;
      let _0x1c4f81 = _0x1a6a8a.runtimeScope["instanceService"] ?? _0x3230d0,
        _0x3da255 =
          _0x1c4f81 == null
            ? undefined
            : _0x1c4f81.getUnit(_0x1a6a8a.childUnitId, _0x513c12.UNIVER_SHEET),
        _0x21a48d =
          _0x3da255 == null ||
          (_0x109f8c = _0x3da255.getActiveSheet(true)) == null ||
          (_0x4fce98 = _0x109f8c.getConfig) == null ||
          (_0x4fce98 = _0x4fce98.call(_0x109f8c)) == null
            ? undefined
            : _0x4fce98.rowHeader;
      return _0x21a48d != null && _0x21a48d.hidden
        ? 0
        : ((_0x21a48d == null ? undefined : _0x21a48d.width) ?? _0x4cdefd);
    },
    getStickyHeaderHeight: (_0x554ea6) => {
      let _0x15bce4 = _0x554ea6.runtimeScope["instanceService"] ?? _0x3230d0;
      return l_(
        _0x15bce4 == null
          ? undefined
          : _0x15bce4.getUnit(_0x554ea6.childUnitId, _0x513c12.UNIVER_SHEET),
      );
    },
    subscribeVerticalScroll: (_0x3f6a80, _0x49ee8f) => {
      let _0x59402c = _0xd58eea(_0x3f6a80);
      if (!_0x59402c) return;
      let _0xe90591 = _0x59402c.onScrollByBar$["subscribeEvent"](
        (_0x19cade) => {
          _0x49ee8f(
            _0x19cade.viewportScrollY ?? _0x59402c.viewportScrollY ?? 0,
          );
        },
      );
      return _0x11d17f(() => _0xe90591.unsubscribe());
    },
    handleWheel: (_0x4962cd) => {
      var _0x5bda12;
      if (
        _0x4962cd.source !== "host-scroll-sync" &&
        _0x4962cd.source !== "print-capture" &&
        Du(_0x4962cd.layout, _0x4962cd.event)
      )
        return false;
      let _0x1061c3 =
          ((_0x5bda12 = _0x4962cd.runtimeScope) == null
            ? undefined
            : _0x5bda12.injector) ?? _0x5355d3,
        _0x4f0a08 =
          _0x1061c3 !== _0x5355d3 && _0x1061c3.has(_0x2db5c6)
            ? _0x1061c3.get(_0x2db5c6)
            : _0x2359fe;
      if (!_0x4f0a08) return false;
      let _0x2f61cf = _0x4f0a08.getRenderUnitById(_0x4962cd.childUnitId),
        _0x8c2b11 = _0x2f61cf == null ? undefined : _0x2f61cf.scene;
      return zp(
        _0x4962cd,
        _0x8c2b11 == null
          ? undefined
          : _0x8c2b11.getViewport(_0x2d6d71.VIEW_MAIN),
        _0x8c2b11,
      );
    },
  };
  function _0xd58eea(_0x4e9b31) {
    var _0x2de350, _0x5c562f;
    let _0x5eed90 =
        ((_0x2de350 = _0x4e9b31.runtimeScope) == null
          ? undefined
          : _0x2de350.injector) ?? _0x5355d3,
      _0x4f686c =
        _0x5eed90 !== _0x5355d3 && _0x5eed90.has(_0x2db5c6)
          ? _0x5eed90.get(_0x2db5c6)
          : _0x2359fe;
    return _0x4f686c == null ||
      (_0x5c562f = _0x4f686c.getRenderUnitById(_0x4e9b31.childUnitId)) ==
        null ||
      (_0x5c562f = _0x5c562f.scene) == null
      ? undefined
      : _0x5c562f.getViewport(_0x2d6d71.VIEW_MAIN);
  }
}
function S_(_0x7fccec) {
  let _0x23845f = [];
  return (
    [
      ["base", _0x1e1dae, 0],
      ["outline", _0x1fae98, 100],
      ["numfmt", _0x5d3add, 100],
      ["conditional-formatting", _0x1b8f5f, 100],
      ["data-validation", _0x65edeb, 100],
      ["filter", _0x15e8a5, 100],
      ["drawing", _0x5af991, 100],
      ["sort", _0xeabd81, 100],
      ["hyper-link", _0x5ef72b, 100],
      ["thread-comment", _0x7b1b83, 100],
      ["table", _0x36ed96, 100],
      ["note", _0x36de6a, 100],
      ["print", _0x2bd7cd, 100],
      ["pivot-table", _0x4418dd, 100],
      ["chart", _0x2bf8db, 100],
      ["sparkline", _0x4f988f, 100],
      ["shape", _0x3ac313, 100],
      ["shape-contextual-ribbon", _0x27b128, 100],
    ].forEach(([_0x47c92d, _0x432039, _0x4fed39]) => {
      let _0x3f1d0b = ql(_0x7fccec, {
        id: "embed.sheets." + _0x47c92d,
        childType: _0x513c12.UNIVER_SHEET,
        surface: "ribbon",
        order: _0x4fed39,
        menuSchema: _0x432039,
      });
      _0x3f1d0b && _0x23845f.push(_0x3f1d0b);
    }),
    _0x11d17f(() => _0x23845f.forEach((_0x4b74f9) => _0x4b74f9.dispose()))
  );
}
function C_() {
  return {
    ...Um({ childType: _0x513c12.UNIVER_SHEET, productName: "Sheets" }),
    presentationPolicy: {
      getChromeCss: () =>
        '\n [data-embed-presentation-runtime="true"] [data-u-comp="formula-bar"] {\n display: none !important;\n }\n [data-embed-presentation-runtime="true"] [data-embed-canvas-root] {\n top: 0 !important;\n }\n ',
      activateNavigationAtPoint: ({
        childContext: _0x16ea80,
        clientX: _0x37b0ed,
        clientY: _0x4d7339,
        runtimeHost: _0xe27736,
      }) => {
        let _0x56e7e0 = Jm(
            _0xe27736,
            "[data-u-comp=\x22slide-tab-item\x22]",
            _0x37b0ed,
            _0x4d7339,
          ),
          _0x168274 = _0x56e7e0 == null ? undefined : _0x56e7e0.dataset["id"],
          _0x574e90 = _0x16ea80.runtimeScope["commandService"];
        return !_0x168274 || !_0x574e90
          ? false
          : _0x574e90.syncExecuteCommand(_0xffd2e7.id, {
              unitId: _0x16ea80.childUnitId,
              subUnitId: _0x168274,
            }) !== false;
      },
    },
  };
}
function w_(_0x1511b5) {
  return {
    childType: _0x513c12.UNIVER_SHEET,
    supportedLayouts: ["tab-peer", "docs-sticky-sheet", "scroll-contained"],
    canvasRootClassName: "univer-bg-gray-0 dark:!univer-bg-gray-900",
    scopedDependencies: [[_0x4610d1, { useClass: _0x1e4195 }], [_0x292597]],
    beforeDeactivate: D_,
    mount: (_0x3498f4) => {
      var _0x7f9506;
      let _0x3e116f = _0x3498f4.runtimeScope["injector"],
        _0x38edd7 =
          _0x3498f4.runtimeScope["roots"].canvas ??
          _0x3498f4.renderScope["canvasRoot"] ??
          _0x3498f4.renderScope["contentRoot"] ??
          _0x3498f4.renderScope["rootElement"],
        _0x4b15be =
          _0x3498f4.runtimeScope["roots"].content ??
          _0x3498f4.renderScope["contentRoot"] ??
          _0x38edd7;
      ((_0x38edd7.dataset["embedChildRenderUnitId"] = _0x3498f4.childUnitId),
        (_0x38edd7.dataset["embedChildRenderMode"] = "sheet-workbench"),
        (_0x4b15be.dataset["embedChildRenderUnitId"] = _0x3498f4.childUnitId),
        (_0x4b15be.dataset["embedChildRenderMode"] = "sheet-overlay"));
      let _0xc5789 = _0x3498f4.injector["get"](_0x3e617f).getUnit(
          _0x3498f4.childUnitId,
          _0x513c12.UNIVER_SHEET,
        ),
        _0x7227 = _0xc5789
          ? hh(_0x3498f4, _0x1511b5, (_0x3de4f3) => E_(_0xc5789, _0x3de4f3))
          : _0x11d17f(() => {}),
        _0x56e694 =
          Bc(_0x3498f4, _0x2db5c6, _0x38edd7, { scopedRenderInjector: true }) ??
          _0x11d17f(() => {}),
        _0x8fe976 = T_(_0x3498f4),
        _0x5bb855 = A_(_0x3498f4, _0x4b15be),
        _0x41b26d = Sl(_0x4b15be);
      return (
        _0x41b26d.render(
          _0x29e1d8(fl, {
            injector: _0x3e116f,
            mountContainer: _0x3498f4.runtimeScope["roots"].popup,
            embedId: _0x3498f4.embedId,
            children: _0x29e1d8(j_, {
              canvasRoot: _0x38edd7,
              embedId: _0x3498f4.embedId,
              fullscreen: !!_0x3498f4.renderScope["fullscreen"],
              showChrome: O_(_0x3498f4),
              readonly:
                ((_0x7f9506 = _0x3498f4.descriptor) == null
                  ? undefined
                  : _0x7f9506.mode) === "readonly",
              unitId: _0x3498f4.childUnitId,
            }),
          }),
        ),
        _0x11d17f(() => {
          (_0x7227.dispose(),
            _0x5bb855.dispose(),
            _0x8fe976.dispose(),
            _0x56e694.dispose(),
            Cl(_0x41b26d),
            _0x38edd7.isConnected &&
              (_0x38edd7.removeAttribute("data-embed-child-render-unit-id"),
              _0x38edd7.removeAttribute("data-embed-child-render-mode")),
            _0x4b15be.isConnected &&
              (_0x4b15be.removeAttribute("data-embed-child-render-unit-id"),
              _0x4b15be.removeAttribute("data-embed-child-render-mode")));
        })
      );
    },
  };
}
function T_(_0x368e62) {
  var _0x45a85d;
  if (_0x368e62.layout !== "docs-sticky-sheet") return _0x11d17f(() => {});
  let _0x426f9d =
    (_0x45a85d = _0x368e62.injector["get"](_0x2db5c6).getRenderUnitById(
      _0x368e62.childUnitId,
    )) == null ||
    (_0x45a85d = _0x45a85d.scene["getViewport"](_0x2d6d71.VIEW_MAIN)) == null
      ? undefined
      : _0x45a85d.getScrollBar();
  if (!_0x426f9d) return _0x11d17f(() => {});
  let _0x451481 = _0x426f9d.hideTrackWhenUnscrollable;
  return (
    (_0x426f9d.hideTrackWhenUnscrollable = true),
    _0x11d17f(() => {
      _0x426f9d.hideTrackWhenUnscrollable = _0x451481;
    })
  );
}
function E_(_0x338b44, _0x2c61ab) {
  var _0x488421;
  let _0x4669bc = _0x2c61ab == null ? undefined : _0x2c61ab.subUnitId,
    _0x3073ae =
      (_0x4669bc ? _0x338b44.getSheetBySheetId(_0x4669bc) : undefined) ??
      _0x338b44.getSheets()[0];
  _0x3073ae &&
    ((_0x488421 = _0x338b44.getActiveSheet(true)) == null
      ? undefined
      : _0x488421.getSheetId()) !== _0x3073ae.getSheetId() &&
    _0x338b44.setActiveSheet(_0x3073ae);
}
function D_(_0x260740) {
  var _0x2021ac, _0x23b469;
  ((_0x2021ac = _0x260740.runtimeScope["commandService"]) == null ||
    _0x2021ac.syncExecuteCommand(_0x4b7a57.id, {
      visible: false,
      eventType: _0x2d3692.PointerDown,
      unitId: _0x260740.childUnitId,
    }),
    _0x260740.runtimeScope["injector"].has(_0x1c73c4) &&
      _0x260740.runtimeScope["injector"]
        .get(_0x1c73c4)
        .hidePopupsForUnit(_0x260740.childUnitId),
    (_0x23b469 = _0x260740.injector["get"](_0x2db5c6).getRenderUnitById(
      _0x260740.childUnitId,
    )) == null ||
      (_0x23b469 = _0x23b469.scene["getTransformer"]()) == null ||
      _0x23b469.clearSelectedObjects());
}
function O_(_0x3aeb80) {
  return (
    _0x3aeb80.renderScope["mode"] === "tab" ||
    !!_0x3aeb80.renderScope["fullscreen"]
  );
}
function k_(_0x467cd3, _0x1616f9) {
  let _0x38ed82 = _0x467cd3.style["top"],
    _0x14359e = _0x467cd3.style["bottom"];
  return (
    (_0x467cd3.style["top"] = _0x1616f9.formulaBar ? "28px" : ""),
    (_0x467cd3.style["bottom"] = _0x1616f9.sheetBar ? _0x21421a + "px" : ""),
    _0x11d17f(() => {
      ((_0x467cd3.style["top"] = _0x38ed82),
        (_0x467cd3.style["bottom"] = _0x14359e));
    })
  );
}
function A_(_0x5ad35e, _0x20d045) {
  var _0x36b0c4, _0x5dca02;
  return (_0x36b0c4 = _0x5ad35e.injector) != null &&
    (_0x5dca02 = _0x36b0c4.has) != null &&
    _0x5dca02.call(_0x36b0c4, ld)
    ? _0x5ad35e.injector["get"](ld).register({
        embedId: _0x5ad35e.embedId,
        childUnitId: _0x5ad35e.childUnitId,
        root: _0x5ad35e.renderScope["rootElement"],
        contentRoot: _0x20d045,
      })
    : _0x11d17f(() => {});
}
function j_(_0x835c69) {
  let {
      canvasRoot: _0x51098f,
      embedId: _0x43820d,
      fullscreen: _0x36d53b,
      readonly: _0x411066,
      showChrome: _0x4fea5f,
      unitId: _0x333b93,
    } = _0x835c69,
    _0x1534d7 = _0x254589(_0x2d545c),
    _0x1464f5 = _0x5ade04(_0x1450dc),
    _0xbd58c4 = _0x5ade04(gu),
    _0x35f93a = _0xe46a3c(
      () => _0xbd58c4.session$,
      _0xbd58c4.getSession(),
      false,
      [_0xbd58c4],
    ),
    _0x549dc1 =
      !_0x36d53b &&
      (_0x35f93a == null ? undefined : _0x35f93a.embedId) === _0x43820d &&
      _0x35f93a.childUnitId === _0x333b93,
    _0x481e80 =
      _0x1464f5.get("SheetShapeTextEditorContainer") ??
      _0x1464f5.get("ShapeTextEditorContainer"),
    _0x538392 = _0x1534d7 == null ? undefined : _0x1534d7.footer,
    _0x20c0e7 = (_0x1534d7 == null ? undefined : _0x1534d7.formulaBar) ?? true,
    _0x5f1fae =
      _0x538392 === false
        ? false
        : ((_0x538392 == null ? undefined : _0x538392.sheetBar) ?? true),
    _0x419212 = !_0x549dc1 && _0x4fea5f && _0x20c0e7,
    _0x22139f = !_0x549dc1 && _0x4fea5f && _0x5f1fae;
  return (
    _0x51cbb8(() => {
      let _0x5f589f = k_(_0x51098f, {
        formulaBar: _0x419212,
        sheetBar: _0x22139f,
      });
      return () => _0x5f589f.dispose();
    }, [_0x51098f, _0x419212, _0x22139f]),
    _0x549dc1
      ? null
      : _0x287fb5(_0x541075, {
          children: [
            _0x29e1d8("div", {
              className:
                "univer-pointer-events-none univer-absolute univer-inset-0 [&>*]:univer-pointer-events-auto",
              "data-u-comp": "sheet-embed-float-dom-root",
              children: _0x29e1d8(_0x5a6d49, { unitId: _0x333b93 }),
            }),
            _0x419212 &&
              _0x29e1d8("div", {
                className:
                  "univer-absolute univer-inset-x-0 univer-top-0 univer-z-10",
                style: { height: 28 },
                children: _0x29e1d8(_0x47cbde, {}),
              }),
            !_0x411066 && _0x481e80 && _0x29e1d8(_0x481e80, {}),
            !_0x411066 &&
              !(_0x1534d7 != null && _0x1534d7.disableEdit) &&
              _0x29e1d8(_0x5e5ffd, {}),
            !_0x411066 && _0x29e1d8(_0x560534, {}),
            _0x22139f &&
              _0x29e1d8("div", {
                className:
                  "univer-absolute\x20univer-inset-x-0\x20univer-bottom-0\x20univer-z-10",
                style: { height: _0x21421a },
                children: _0x29e1d8(_0x470ea0, {}),
              }),
          ],
        })
  );
}
const M_ = _0x597f7b(
    (
      {
        children: _0x44fc24,
        className: _0x17d6d3,
        title: _0x6cfc96,
        onClick: _0xc47380,
        onMouseDown: _0x1414da,
        onPointerDown: _0x5d6b76,
        ..._0x40c9ec
      },
      _0x402fcc,
    ) =>
      _0x29e1d8(_0x43385d, {
        ref: _0x402fcc,
        type: "button",
        size: "small",
        variant: "ghost",
        "aria-label": _0x5ade04(_0x11dce0).t(_0x6cfc96),
        className: _0x228d07(
          "univer-gap-1\x20univer-px-1.5\x20univer-text-sm",
          _0x17d6d3,
        ),
        onPointerDown: (_0x27160d) => {
          (_0x27160d.stopPropagation(),
            _0x5d6b76 == null || _0x5d6b76(_0x27160d));
        },
        onMouseDown: (_0x1b6200) => {
          (_0x1b6200.stopPropagation(),
            _0x1414da == null || _0x1414da(_0x1b6200));
        },
        onClick: (_0x211abe) => {
          (_0xc47380 == null || _0xc47380(_0x211abe),
            _0x211abe.stopPropagation());
        },
        ..._0x40c9ec,
        children: _0x44fc24,
      }),
  ),
  N_ = _0x597f7b(
    (
      {
        title: _0x34bd16,
        primary: _0x16b71a,
        disabled: _0x4ef074,
        open: _0x307330,
        onPrimaryClick: _0x5a07e8,
        onMouseDown: _0x21e128,
        onPointerDown: _0x6a3f87,
        onClick: _0x579b8f,
        ..._0x25ff1d
      },
      _0x59b6f8,
    ) =>
      _0x287fb5("div", {
        ref: _0x59b6f8,
        className: _0x228d07(
          "univer-box-border univer-inline-flex univer-h-6 univer-cursor-pointer univer-select-none univer-items-center univer-overflow-hidden univer-rounded-md univer-text-sm univer-text-gray-900 hover:univer-bg-gray-100 dark:!univer-text-gray-0 dark:hover:!univer-bg-gray-700",
          {
            "univer-bg-gray-100\x20dark:!univer-bg-gray-700": _0x307330,
            "univer-cursor-not-allowed\x20univer-opacity-60": _0x4ef074,
          },
        ),
        onPointerDown: (_0x418133) => {
          (_0x418133.stopPropagation(),
            _0x6a3f87 == null || _0x6a3f87(_0x418133));
        },
        onMouseDown: (_0x507349) => {
          (_0x507349.stopPropagation(),
            _0x21e128 == null || _0x21e128(_0x507349));
        },
        onClick: (_0x1a484a) => {
          (_0x579b8f == null || _0x579b8f(_0x1a484a),
            _0x1a484a.stopPropagation());
        },
        ..._0x25ff1d,
        children: [
          _0x29e1d8("button", {
            type: "button",
            "aria-label": _0x34bd16,
            className:
              "univer-box-border univer-flex univer-h-6 univer-w-7 univer-cursor-pointer univer-items-center univer-justify-center univer-border-none univer-bg-transparent univer-p-0 univer-text-gray-900 hover:univer-bg-gray-200 disabled:univer-cursor-not-allowed dark:!univer-text-gray-0 dark:hover:!univer-bg-gray-600",
            disabled: _0x4ef074,
            onClick: (_0x32bbea) => {
              (_0x32bbea.stopPropagation(), _0x5a07e8());
            },
            children: _0x16b71a,
          }),
          _0x29e1d8(_0xb4dc1b, { orientation: "vertical" }),
          _0x29e1d8("button", {
            type: "button",
            "aria-label": _0x34bd16,
            className:
              "univer-box-border univer-flex univer-h-6 univer-w-5 univer-cursor-pointer univer-items-center univer-justify-center univer-border-none univer-bg-transparent univer-p-0 univer-text-gray-900 hover:univer-bg-gray-200 disabled:univer-cursor-not-allowed dark:!univer-text-gray-0 dark:hover:!univer-bg-gray-600",
            disabled: _0x4ef074,
            children: _0x29e1d8(_0x32072a, {}),
          }),
        ],
      }),
  );
N_.displayName = "FloatingToolbarSplitTrigger";
function P_(_0x171792) {
  let {
    children: _0x2b98fb,
    title: _0x45817c,
    className: _0x30302e,
    disabled: _0x185443,
    active: _0x25ab5a,
    onClick: _0x1847ca,
  } = _0x171792;
  return _0x29e1d8(jf, {
    title: _0x45817c,
    placement: "bottom",
    children: _0x29e1d8(_0x232e68, {
      className: _0x228d07("univer-text-sm", _0x30302e),
      disabled: _0x185443,
      active: _0x25ab5a,
      onClick: _0x1847ca,
      children: _0x2b98fb,
    }),
  });
}
function F_(_0x2ea482) {
  let {
      item: _0x4eb207,
      children: _0x503475,
      title: _0xea84f3,
      onClick: _0x1faea8,
    } = _0x2ea482,
    {
      hidden: _0x26039d,
      disabled: _0x4c9d7d,
      activated: _0x3110dd,
    } = I_(_0x4eb207),
    _0x5cb28d = _0x5ade04(_0x11dce0);
  return !_0x4eb207 || _0x26039d
    ? null
    : _0x29e1d8(P_, {
        title: _0x5cb28d.t(_0xea84f3),
        disabled: _0x4c9d7d,
        active: _0x3110dd,
        onClick: _0x1faea8,
        children: _0x503475,
      });
}
function I_(_0x1a8a24) {
  return {
    hidden: _0xe46a3c(
      () => {
        var _0x4be5a1;
        return (
          (_0x1a8a24 == null || (_0x4be5a1 = _0x1a8a24.hidden$) == null
            ? undefined
            : _0x4be5a1.pipe(_0xb42533(false))) ?? _0x2bd05a(false)
        );
      },
      false,
      false,
      [_0x1a8a24],
    ),
    disabled: _0xe46a3c(
      () => {
        var _0x4d5136;
        return (
          (_0x1a8a24 == null || (_0x4d5136 = _0x1a8a24.disabled$) == null
            ? undefined
            : _0x4d5136.pipe(_0xb42533(false))) ?? _0x2bd05a(false)
        );
      },
      false,
      false,
      [_0x1a8a24],
    ),
    activated: _0xe46a3c(
      () => {
        var _0x11ec01;
        return (
          (_0x1a8a24 == null || (_0x11ec01 = _0x1a8a24.activated$) == null
            ? undefined
            : _0x11ec01.pipe(_0xb42533(false))) ?? _0x2bd05a(false)
        );
      },
      false,
      false,
      [_0x1a8a24],
    ),
    value: _0xe46a3c(
      () => {
        var _0x40daf3;
        return (
          (_0x1a8a24 == null || (_0x40daf3 = _0x1a8a24.value$) == null
            ? undefined
            : _0x40daf3.pipe(_0xb42533(undefined))) ?? _0x2bd05a(undefined)
        );
      },
      undefined,
      false,
      [_0x1a8a24],
    ),
  };
}
function L_(_0x244324) {
  return _0x244324.tooltip ?? _0x244324.title ?? _0x244324.id;
}
function R_(_0x1b72d1) {
  return typeof _0x1b72d1.label == "string"
    ? _0x1b72d1.label
    : typeof _0x1b72d1.value == "string" || typeof _0x1b72d1.value == "number"
      ? String(_0x1b72d1.value)
      : (_0x1b72d1.id ?? "");
}
function z_(_0x1e8c4b) {
  return _0x1e8c4b === _0x5bbefa.CLIP
    ? _0x29e1d8(_0x3bb85b, {})
    : _0x1e8c4b === _0x5bbefa.WRAP
      ? _0x29e1d8(_0x4ccf55, {})
      : _0x29e1d8(_0x4e89c2, {});
}
function B_(_0x4479aa) {
  return (
    _0x4479aa instanceof HTMLElement &&
    !!_0x4479aa.closest(
      'button, input, textarea, [contenteditable="true"], [role="button"], [role="combobox"], [data-u-comp="select"], .univer-select',
    )
  );
}
function V_(_0x51a961) {
  (_0x51a961.stopPropagation(),
    B_(_0x51a961.target) || _0x51a961.preventDefault());
}
function H_(_0x5c3e32, _0x5ea9d2) {
  if (!(_0x5c3e32 instanceof HTMLElement)) return false;
  let _0x5cbf96 = _0x5c3e32.closest(
    "[data-embed-floating-menu=\x22true\x22],\x20[data-embed-floating-menu-popup=\x22true\x22]",
  );
  return (
    (_0x5cbf96 == null
      ? undefined
      : _0x5cbf96.getAttribute("data-embed-id")) === _0x5ea9d2
  );
}
function U_(_0x34d1d8, _0x1c498b) {
  let _0x115b14 = _0x34d1d8.target;
  H_(_0x115b14, _0x1c498b) && _0x34d1d8.preventDefault();
}
function W_(_0x2eab4e) {
  let {
    embedId: _0x775e5e,
    children: _0x2a6fdf,
    onPointerDown: _0x2580d4,
  } = _0x2eab4e;
  return _0x29e1d8("section", {
    "data-embed-id": _0x775e5e,
    "data-embed-floating-menu-popup": "true",
    className:
      "univer-box-border\x20univer-grid\x20univer-gap-1\x20univer-rounded-lg\x20univer-border\x20univer-border-solid\x20univer-border-gray-200\x20univer-bg-gray-0\x20univer-p-2\x20univer-shadow-lg\x20dark:!univer-border-gray-700\x20dark:!univer-bg-gray-900",
    onPointerDown: _0x2580d4,
    onMouseDown: V_,
    children: _0x2a6fdf,
  });
}
function G_(_0x304bcf) {
  let { children: _0x28c249 } = _0x304bcf;
  return _0x29e1d8("div", {
    className: "univer-flex\x20univer-items-center\x20univer-gap-1",
    children: _0x28c249,
  });
}
function K_(_0x4f71c6) {
  let {
      embedId: _0x3e317e,
      title: _0x214e87,
      trigger: _0x4c2a9e,
      overlay: _0x2029c2,
      disabled: _0x210a1a,
      triggerClassName: _0x439b28,
      open: _0x56dfe1,
      onOpenChange: _0x36a75c,
    } = _0x4f71c6,
    _0xe13fcc = _0x5ade04(_0x11dce0),
    _0x11f7f5 = _0x29e1d8(_0x44a86d, {
      disabled: _0x210a1a,
      align: "start",
      sideOffset: 6,
      open: _0x56dfe1,
      onOpenChange: _0x36a75c,
      onPointerDownOutside: (_0x57821f) => U_(_0x57821f, _0x3e317e),
      onFocusOutside: (_0x3481ae) => U_(_0x3481ae, _0x3e317e),
      onInteractOutside: (_0x5549f5) => U_(_0x5549f5, _0x3e317e),
      overlay: _0x29e1d8("div", {
        "data-embed-id": _0x3e317e,
        "data-embed-floating-menu-popup": "true",
        onPointerDown: V_,
        onMouseDown: V_,
        children: _0x2029c2,
      }),
      children: _0x29e1d8(M_, {
        title: _0x214e87,
        "data-state": _0x56dfe1 ? "open" : "closed",
        disabled: _0x210a1a,
        className: _0x439b28,
        children: _0x4c2a9e,
      }),
    });
  return _0x29e1d8(jf, {
    title: _0xe13fcc.t(_0x214e87),
    placement: "bottom",
    children: _0x11f7f5,
  });
}
function q_(_0x4c9150) {
  let { children: _0x29ea22 } = _0x4c9150;
  return _0x29e1d8("section", {
    className:
      "univer-box-border univer-grid univer-min-w-32 univer-gap-0.5 univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-1 univer-shadow-lg dark:!univer-border-gray-700 dark:!univer-bg-gray-900",
    onPointerDown: V_,
    onMouseDown: V_,
    children: _0x29ea22,
  });
}
function J_(_0xe74fb9) {
  let { children: _0x41b13a } = _0xe74fb9;
  return _0x29e1d8("section", {
    className:
      "univer-box-border univer-grid univer-min-w-44 univer-gap-0.5 univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-1 univer-shadow-lg dark:!univer-border-gray-700 dark:!univer-bg-gray-900",
    onPointerDown: V_,
    onMouseDown: V_,
    children: _0x41b13a,
  });
}
function Y_(_0x27211f) {
  let { children: _0x483c66, icon: _0x45b368, onClick: _0xe91f86 } = _0x27211f;
  return _0x287fb5("button", {
    type: "button",
    className:
      "univer-box-border univer-grid univer-h-7 univer-w-full univer-grid-cols-[1.5rem_1fr] univer-items-center univer-gap-2 univer-rounded univer-border-none univer-bg-transparent univer-px-2 univer-text-left univer-text-sm univer-text-gray-900 univer-transition-colors hover:univer-bg-gray-100 dark:!univer-text-gray-0 dark:hover:!univer-bg-gray-700",
    onClick: _0xe91f86,
    children: [
      _0x29e1d8("span", {
        className: "univer-flex univer-items-center univer-justify-center",
        children: _0x45b368,
      }),
      _0x29e1d8("span", { className: "univer-truncate", children: _0x483c66 }),
    ],
  });
}
function X_(_0x3e96e9) {
  let {
    children: _0x18e60c,
    icon: _0x86a7de,
    active: _0x5bec2e,
    onClick: _0x586e43,
  } = _0x3e96e9;
  return _0x287fb5("button", {
    type: "button",
    className: _0x228d07(
      "univer-box-border univer-flex univer-h-7 univer-w-full univer-items-center univer-gap-2 univer-rounded univer-border-none univer-bg-transparent univer-px-2 univer-text-left univer-text-sm univer-text-gray-900 univer-transition-colors hover:univer-bg-gray-100 dark:!univer-text-gray-0 dark:hover:!univer-bg-gray-700",
      { "!univer-bg-gray-200\x20dark:!univer-bg-gray-500": _0x5bec2e },
    ),
    onClick: _0x586e43,
    children: [_0x86a7de, _0x18e60c],
  });
}
function Z_(_0x5e13b9) {
  let {
    title: _0x35e934,
    active: _0x7ab9a3,
    disabled: _0x4342e9,
    children: _0x1c1689,
    onClick: _0x19a04a,
  } = _0x5e13b9;
  return _0x29e1d8(jf, {
    title: _0x5ade04(_0x11dce0).t(_0x35e934),
    placement: "bottom",
    children: _0x29e1d8(_0x232e68, {
      className: "univer-size-7",
      disabled: _0x4342e9,
      active: _0x7ab9a3,
      onClick: _0x19a04a,
      children: _0x1c1689,
    }),
  });
}
function Q_() {
  return [..._0x38b003];
}
function $_() {
  return [..._0x55991c];
}
function ev(_0x43c04b) {
  return !_0x43c04b ||
    !("selections" in _0x43c04b) ||
    !Array.isArray(_0x43c04b.selections)
    ? []
    : _0x43c04b.selections;
}
function tv(_0xc68c70) {
  let { menuItem: _0x26eeb9, onClick: _0x558343 } = _0xc68c70,
    {
      hidden: _0x316939,
      disabled: _0x5cb76f,
      value: _0x40d0ca,
    } = I_(_0x26eeb9),
    _0x59a596 = _0x5ade04(_0x11dce0);
  if (!_0x26eeb9 || _0x316939) return null;
  let _0x5b7807 = _0x59a596.t("embed-ui.sheetsFloating.toolbar.numberFormat");
  return _0x29e1d8(jf, {
    title: _0x5b7807,
    placement: "bottom",
    children: _0x287fb5(M_, {
      title: _0x5b7807,
      disabled: _0x5cb76f,
      onClick: _0x558343,
      children: [
        _0x29e1d8(_0x1f5a75, {}),
        _0x29e1d8("span", {
          children:
            typeof _0x40d0ca == "string" && _0x40d0ca ? _0x40d0ca : "General",
        }),
        _0x29e1d8(_0x32072a, {}),
      ],
    }),
  });
}
function nv(_0x3aa240) {
  let {
      embedId: _0x504133,
      menuItem: _0x564641,
      title: _0x3de073,
      open: _0x2da790,
      onOpenChange: _0x1af973,
      onSelect: _0x4a680d,
    } = _0x3aa240,
    {
      hidden: _0x5c9863,
      disabled: _0x1212a9,
      value: _0x5f06c4,
    } = I_(_0x564641);
  if (!_0x564641 || _0x5c9863) return null;
  let _0x4e0178 =
    typeof _0x5f06c4 == "string" && _0x5f06c4 ? _0x5f06c4 : "Arial";
  return _0x29e1d8(K_, {
    embedId: _0x504133,
    disabled: _0x1212a9,
    title: _0x3de073,
    open: _0x2da790,
    onOpenChange: _0x1af973,
    trigger: _0x287fb5(_0x541075, {
      children: [
        _0x29e1d8("span", {
          className: "univer-w-28 univer-truncate univer-text-left",
          children: _0x4e0178,
        }),
        _0x29e1d8(_0x32072a, {}),
      ],
    }),
    overlay: _0x29e1d8("div", {
      className:
        "univer-box-border univer-max-h-72 univer-min-w-44 univer-overflow-y-auto univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-1 univer-shadow-lg dark:!univer-border-gray-700 dark:!univer-bg-gray-900 [&_button]:!univer-h-7 [&_button]:!univer-px-2 [&_ul]:!univer-text-sm",
      onPointerDown: V_,
      onMouseDown: V_,
      children: _0x29e1d8(_0x15e2f0, {
        value: _0x4e0178,
        onChange: (_0x4ebe86) => {
          (_0x4a680d(_0x4ebe86), _0x1af973(false));
        },
      }),
    }),
  });
}
function rv(_0x24f09d) {
  let {
      embedId: _0x3d625a,
      menuItem: _0x1957a4,
      title: _0x23d881,
      open: _0x565e07,
      onOpenChange: _0x2e672e,
      onSelect: _0x3d9199,
    } = _0x24f09d,
    {
      hidden: _0x47e0f8,
      disabled: _0x4a4847,
      value: _0x4c4d08,
    } = I_(_0x1957a4);
  if (!_0x1957a4 || _0x47e0f8) return null;
  let _0x1f5713 =
    typeof _0x4c4d08 == "number" || typeof _0x4c4d08 == "string"
      ? Number(_0x4c4d08)
      : 11;
  return _0x29e1d8(K_, {
    embedId: _0x3d625a,
    disabled: _0x4a4847,
    title: _0x23d881,
    open: _0x565e07,
    onOpenChange: _0x2e672e,
    trigger: _0x287fb5(_0x541075, {
      children: [
        _0x29e1d8("span", {
          className: "univer-min-w-6 univer-text-left",
          children: _0x1f5713,
        }),
        _0x29e1d8(_0x32072a, {}),
      ],
    }),
    overlay: _0x29e1d8("div", {
      className:
        "univer-box-border\x20univer-max-h-72\x20univer-min-w-20\x20univer-overflow-y-auto\x20univer-rounded-lg\x20univer-border\x20univer-border-solid\x20univer-border-gray-200\x20univer-bg-gray-0\x20univer-p-1\x20univer-shadow-lg\x20dark:!univer-border-gray-700\x20dark:!univer-bg-gray-900",
      onPointerDown: V_,
      onMouseDown: V_,
      children: $_().map((_0x5b1154) => {
        let _0x552ec9 = Number(_0x5b1154.value) === _0x1f5713;
        return _0x287fb5(
          "button",
          {
            type: "button",
            className: _0x228d07(
              "univer-grid univer-h-7 univer-w-full univer-grid-cols-[1fr_1rem] univer-items-center univer-gap-2 univer-rounded univer-border-none univer-bg-transparent univer-px-2 univer-text-left univer-text-sm univer-text-gray-900 hover:univer-bg-gray-100 dark:!univer-text-gray-0 dark:hover:!univer-bg-gray-700",
              { "univer-bg-gray-100\x20dark:!univer-bg-gray-700": _0x552ec9 },
            ),
            onClick: () => {
              (_0x3d9199(String(_0x5b1154.value)), _0x2e672e(false));
            },
            children: [
              _0x29e1d8("span", { children: _0x5b1154.label }),
              _0x552ec9 &&
                _0x29e1d8(_0x332567, { className: "univer-text-primary-600" }),
            ],
          },
          _0x5b1154.value,
        );
      }),
    }),
  });
}
function iv(_0x131511) {
  let {
      embedId: _0x55ba1e,
      menuItem: _0x2a7fb7,
      open: _0x1f08d3,
      onOpenChange: _0x4fc64f,
      execute: _0x4378e3,
    } = _0x131511,
    { hidden: _0x4102bc, disabled: _0xa90f3e } = I_(_0x2a7fb7);
  return !_0x2a7fb7 || _0x4102bc
    ? null
    : _0x29e1d8(K_, {
        embedId: _0x55ba1e,
        disabled: _0xa90f3e,
        title: "embed-ui.sheetsFloating.toolbar.horizontalAlignMode.main",
        triggerClassName: "univer-gap-0.5 univer-px-1",
        open: _0x1f08d3,
        onOpenChange: _0x4fc64f,
        trigger: _0x287fb5(_0x541075, {
          children: [_0x29e1d8(_0x57712a, {}), _0x29e1d8(_0x32072a, {})],
        }),
        overlay: _0x29e1d8(W_, {
          embedId: _0x55ba1e,
          onPointerDown: (_0x1e92d3) => _0x1e92d3.stopPropagation(),
          children: _0x287fb5(G_, {
            children: [
              _0x29e1d8(ov, {
                item: _0x2a7fb7,
                title: "embed-ui.sheetsFloating.align.left",
                onClick: () => _0x4378e3(_0x2a7fb7, { value: _0x3406bf.LEFT }),
                children: _0x29e1d8(_0x57712a, {}),
              }),
              _0x29e1d8(ov, {
                item: _0x2a7fb7,
                title: "embed-ui.sheetsFloating.align.center",
                onClick: () =>
                  _0x4378e3(_0x2a7fb7, { value: _0x3406bf.CENTER }),
                children: _0x29e1d8(_0x12d0c6, {}),
              }),
              _0x29e1d8(ov, {
                item: _0x2a7fb7,
                title: "embed-ui.sheetsFloating.align.right",
                onClick: () => _0x4378e3(_0x2a7fb7, { value: _0x3406bf.RIGHT }),
                children: _0x29e1d8(_0x3e772d, {}),
              }),
            ],
          }),
        }),
      });
}
function av(_0x49a923) {
  let {
      embedId: _0x381115,
      menuItem: _0xf8ddde,
      open: _0x158a70,
      onOpenChange: _0x3b819b,
      execute: _0x2bf1eb,
    } = _0x49a923,
    { hidden: _0x4d8b3b, disabled: _0x18ac47 } = I_(_0xf8ddde);
  return !_0xf8ddde || _0x4d8b3b
    ? null
    : _0x29e1d8(K_, {
        embedId: _0x381115,
        disabled: _0x18ac47,
        title: "embed-ui.sheetsFloating.toolbar.verticalAlignMode.main",
        triggerClassName: "univer-gap-0.5 univer-px-1",
        open: _0x158a70,
        onOpenChange: _0x3b819b,
        trigger: _0x287fb5(_0x541075, {
          children: [_0x29e1d8(_0x62754a, {}), _0x29e1d8(_0x32072a, {})],
        }),
        overlay: _0x29e1d8(W_, {
          embedId: _0x381115,
          onPointerDown: (_0x1578e2) => _0x1578e2.stopPropagation(),
          children: _0x287fb5(G_, {
            children: [
              _0x29e1d8(ov, {
                item: _0xf8ddde,
                title: "embed-ui.sheetsFloating.align.top",
                onClick: () => _0x2bf1eb(_0xf8ddde, { value: _0x4067f8.TOP }),
                children: _0x29e1d8(_0x51f57e, {}),
              }),
              _0x29e1d8(ov, {
                item: _0xf8ddde,
                title: "embed-ui.sheetsFloating.align.middle",
                onClick: () =>
                  _0x2bf1eb(_0xf8ddde, { value: _0x4067f8.MIDDLE }),
                children: _0x29e1d8(_0x62754a, {}),
              }),
              _0x29e1d8(ov, {
                item: _0xf8ddde,
                title: "embed-ui.sheetsFloating.align.bottom",
                onClick: () =>
                  _0x2bf1eb(_0xf8ddde, { value: _0x4067f8.BOTTOM }),
                children: _0x29e1d8(_0x78073f, {}),
              }),
            ],
          }),
        }),
      });
}
function ov(_0x4d2ace) {
  let {
      item: _0x374816,
      title: _0x311de8,
      children: _0x402ca1,
      onClick: _0x10003c,
    } = _0x4d2ace,
    {
      hidden: _0x1a3629,
      disabled: _0x21e944,
      activated: _0x15d357,
    } = I_(_0x374816);
  return !_0x374816 || _0x1a3629
    ? null
    : _0x29e1d8(Z_, {
        title: _0x311de8,
        disabled: _0x21e944,
        active: _0x15d357,
        onClick: _0x10003c,
        children: _0x402ca1,
      });
}
function sv(_0x457ff4) {
  let {
      embedId: _0x4741d5,
      menuItem: _0x44605f,
      title: _0x2501b3,
      icon: _0x2b1834,
      defaultColor: _0x5895a9,
      open: _0x39ba6c,
      onOpenChange: _0x50b85f,
      onChange: _0x4a2790,
      onReset: _0x33c3c4,
    } = _0x457ff4,
    _0x1baa1b = _0x5ade04(_0x11dce0),
    {
      hidden: _0x5b7002,
      disabled: _0x1d66ad,
      value: _0x5b137e,
    } = I_(_0x44605f),
    [_0x457435, _0x478d31] = _0x4d3f85(_0x5895a9);
  if (!_0x44605f || _0x5b7002) return null;
  let _0x4ba7e6 = _0x29e1d8(_0x44a86d, {
    disabled: _0x1d66ad,
    align: "start",
    sideOffset: 6,
    open: _0x39ba6c,
    onOpenChange: _0x50b85f,
    onPointerDownOutside: (_0xf4d6a1) => U_(_0xf4d6a1, _0x4741d5),
    onFocusOutside: (_0x11ffef) => U_(_0x11ffef, _0x4741d5),
    onInteractOutside: (_0x30d6bf) => U_(_0x30d6bf, _0x4741d5),
    overlay: _0x287fb5("div", {
      "data-embed-id": _0x4741d5,
      "data-embed-floating-menu-popup": "true",
      className:
        "univer-box-border univer-w-72 univer-overflow-hidden univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-3 univer-shadow-lg dark:!univer-bg-gray-900",
      onPointerDown: V_,
      onMouseDown: V_,
      children: [
        _0x29e1d8(_0x1c7350, {
          value:
            typeof _0x5b137e == "string" && _0x5b137e ? _0x5b137e : _0x457435,
          onChange: (_0x1338e9) => {
            (_0x478d31(_0x1338e9), _0x4a2790(_0x1338e9));
          },
        }),
        _0x29e1d8(_0xb4dc1b, {}),
        _0x287fb5("button", {
          type: "button",
          className:
            "univer-flex univer-h-8 univer-w-full univer-items-center univer-gap-2 univer-rounded univer-border-none univer-bg-transparent univer-px-1 univer-text-left univer-text-sm univer-text-gray-900 hover:univer-bg-gray-100 dark:!univer-text-gray-0 dark:hover:!univer-bg-gray-700",
          onClick: () => {
            (_0x478d31(_0x5895a9), _0x33c3c4(), _0x50b85f(false));
          },
          children: [
            _0x29e1d8(_0x4c651d, {}),
            _0x29e1d8("span", {
              children: _0x1baa1b.t(
                "embed-ui.sheetsFloating.toolbar.resetColor",
              ),
            }),
          ],
        }),
      ],
    }),
    children: _0x29e1d8(M_, {
      title: _0x2501b3,
      disabled: _0x1d66ad,
      children: _0x2b1834,
    }),
  });
  return _0x29e1d8(jf, {
    title: _0x1baa1b.t(_0x2501b3),
    placement: "bottom",
    children: _0x4ba7e6,
  });
}
function cv(_0x343034) {
  let {
      embedId: _0x249b39,
      menuItem: _0x3104f8,
      open: _0x348969,
      onOpenChange: _0x203ecc,
      onSelect: _0x44f820,
    } = _0x343034,
    _0x16f91e = _0x5ade04(_0x11dce0),
    _0x1edb31 = _0x5ade04(_0x28d0a3),
    { hidden: _0x21972e, disabled: _0xe978fe } = I_(_0x3104f8),
    [_0x1d2cb0, _0x3233d2] = _0x4d3f85(_0xbc4e61.ALL),
    [_0x48ba18, _0x192d2e] = _0x4d3f85(_0x19c9a7.THIN),
    [_0x2b8773, _0xeb56dc] = _0x4d3f85("#000000");
  if (!_0x3104f8 || _0x21972e) return null;
  let _0x2afd50 = (
      _0x4c5341 = _0x1d2cb0,
      _0x584d23 = _0x48ba18,
      _0x4cee3c = _0x2b8773,
    ) => {
      (_0x3233d2(_0x4c5341),
        _0x192d2e(_0x584d23),
        _0xeb56dc(_0x4cee3c),
        _0x44f820(_0x4c5341, _0x584d23, _0x4cee3c));
    },
    _0x58c22b = (_0x5cca9a) => {
      var _0x23d1ea;
      return (
        ((_0x23d1ea = Q_().find(
          (_0x2af58c) => _0x2af58c.value === _0x5cca9a,
        )) == null
          ? undefined
          : _0x23d1ea.icon) ?? "AllBorderIcon"
      );
    },
    _0x24b7f7 = (_0x3ef956, _0x4d9d6b = "univer-fill-primary-600") => {
      let _0x162d11 = _0x1edb31.get(_0x3ef956);
      return _0x162d11
        ? _0x29e1d8(_0x162d11, { className: _0x4d9d6b })
        : _0x29e1d8(_0x5e9f6a, {});
    },
    _0x41b766 = _0x29e1d8(_0x44a86d, {
      disabled: _0xe978fe,
      align: "start",
      sideOffset: 6,
      open: _0x348969,
      onOpenChange: _0x203ecc,
      onPointerDownOutside: (_0x32f2eb) => U_(_0x32f2eb, _0x249b39),
      onFocusOutside: (_0x28d995) => U_(_0x28d995, _0x249b39),
      onInteractOutside: (_0xd57100) => U_(_0xd57100, _0x249b39),
      overlay: _0x287fb5(W_, {
        embedId: _0x249b39,
        onPointerDown: (_0x4033a1) => _0x4033a1.stopPropagation(),
        children: [
          _0x29e1d8("div", {
            className:
              "univer-grid univer-grid-cols-5 univer-gap-2 univer-text-gray-600 dark:!univer-text-gray-200",
            children: Q_().map((_0x313578) =>
              _0x29e1d8(
                Z_,
                {
                  title: _0x313578.label,
                  active: _0x1d2cb0 === _0x313578.value,
                  onClick: () => _0x2afd50(_0x313578.value),
                  children: _0x24b7f7(_0x313578.icon),
                },
                _0x313578.value,
              ),
            ),
          }),
          _0x29e1d8(_0xb4dc1b, {}),
          _0x287fb5(G_, {
            children: [
              _0x29e1d8(_0x44a86d, {
                align: "start",
                sideOffset: 6,
                onPointerDownOutside: (_0x2fcd03) => U_(_0x2fcd03, _0x249b39),
                onFocusOutside: (_0x1b6374) => U_(_0x1b6374, _0x249b39),
                onInteractOutside: (_0x45d9c7) => U_(_0x45d9c7, _0x249b39),
                overlay: _0x29e1d8("div", {
                  "data-embed-id": _0x249b39,
                  "data-embed-floating-menu-popup": "true",
                  className:
                    "univer-overflow-hidden univer-rounded-lg univer-bg-gray-0 univer-p-4 univer-shadow-lg dark:!univer-bg-gray-900",
                  onPointerDown: V_,
                  onMouseDown: V_,
                  children: _0x29e1d8(_0x1c7350, {
                    value: _0x2b8773,
                    onChange: (_0x2e1c34) =>
                      _0x2afd50(_0x1d2cb0, _0x48ba18, _0x2e1c34),
                  }),
                }),
                children: _0x287fb5(Z_, {
                  title: "embed-ui.sheetsFloating.borderLine.borderColor",
                  active: false,
                  onClick: () => undefined,
                  children: [
                    _0x29e1d8(_0x13a678, {
                      extend: { colorChannel1: _0x2b8773 },
                    }),
                    _0x29e1d8(_0x32072a, {}),
                  ],
                }),
              }),
              _0x29e1d8(_0x44a86d, {
                align: "start",
                sideOffset: 6,
                onPointerDownOutside: (_0x587ff5) => U_(_0x587ff5, _0x249b39),
                onFocusOutside: (_0x1da9a3) => U_(_0x1da9a3, _0x249b39),
                onInteractOutside: (_0x3ea216) => U_(_0x3ea216, _0x249b39),
                overlay: _0x29e1d8("div", {
                  "data-embed-id": _0x249b39,
                  "data-embed-floating-menu-popup": "true",
                  className:
                    "univer-box-border\x20univer-grid\x20univer-min-w-48\x20univer-gap-1\x20univer-rounded-lg\x20univer-border\x20univer-border-solid\x20univer-border-gray-200\x20univer-bg-gray-0\x20univer-p-1.5\x20univer-shadow-lg\x20dark:!univer-border-gray-700\x20dark:!univer-bg-gray-900",
                  onPointerDown: V_,
                  onMouseDown: V_,
                  children: _0x41926d.map((_0x3e35cf) =>
                    _0x29e1d8(
                      "button",
                      {
                        type: "button",
                        className: _0x228d07(
                          "univer-relative univer-flex univer-h-8 univer-cursor-pointer univer-items-center univer-justify-center univer-rounded univer-border-none univer-bg-transparent univer-px-2 hover:univer-bg-gray-100 dark:hover:!univer-bg-gray-700",
                          {
                            "univer-bg-gray-200\x20dark:!univer-bg-gray-600":
                              _0x48ba18 === _0x3e35cf.value,
                          },
                        ),
                        onClick: () => _0x2afd50(_0x1d2cb0, _0x3e35cf.value),
                        children: _0x29e1d8(_0x4f61c7, {
                          className:
                            "univer-fill-gray-900 dark:!univer-fill-gray-0",
                          type: _0x3e35cf.value,
                        }),
                      },
                      _0x3e35cf.value,
                    ),
                  ),
                }),
                children: _0x287fb5(Z_, {
                  title: "embed-ui.sheetsFloating.borderLine.borderSize",
                  active: false,
                  onClick: () => undefined,
                  children: [
                    _0x29e1d8(_0x4f61c7, {
                      className:
                        "univer-fill-gray-900\x20dark:!univer-fill-gray-0",
                      type: _0x48ba18,
                    }),
                    _0x29e1d8(_0x32072a, {}),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
      children: _0x29e1d8(N_, {
        title: _0x16f91e.t("embed-ui.sheetsFloating.toolbar.border.main"),
        disabled: _0xe978fe,
        open: _0x348969,
        primary: _0x24b7f7(
          _0x58c22b(_0x1d2cb0),
          "univer-text-gray-900 dark:!univer-text-gray-0",
        ),
        onPrimaryClick: () => {
          (_0x2afd50(), _0x203ecc(false));
        },
      }),
    });
  return _0x29e1d8(jf, {
    title: _0x16f91e.t("embed-ui.sheetsFloating.toolbar.border.main"),
    placement: "bottom",
    children: _0x41b766,
  });
}
function lv(_0x4982d0) {
  let {
      embedId: _0x1a0b8f,
      menuItems: _0x1730af,
      open: _0xfa2671,
      onOpenChange: _0x29116d,
      execute: _0x26f186,
    } = _0x4982d0,
    _0x5a16ec = _0x5ade04(_0x11dce0),
    { hidden: _0x4d57a3, disabled: _0x1742c3 } = I_(
      _0x1730af == null ? undefined : _0x1730af.root,
    ),
    _0x55221e = [];
  return (
    [
      {
        item: _0x1730af == null ? undefined : _0x1730af.all,
        icon: _0x29e1d8(_0x441d09, {}),
      },
      {
        item: _0x1730af == null ? undefined : _0x1730af.vertical,
        icon: _0x29e1d8(_0x3e1764, {}),
      },
      {
        item: _0x1730af == null ? undefined : _0x1730af.horizontal,
        icon: _0x29e1d8(_0x8b0c60, {}),
      },
      {
        item: _0x1730af == null ? undefined : _0x1730af.unmerge,
        icon: _0x29e1d8(_0x5a9fa7, {}),
      },
    ].forEach(({ item: _0x219db4, icon: _0x40c399 }) => {
      _0x219db4 && _0x55221e.push({ item: _0x219db4, icon: _0x40c399 });
    }),
    !(_0x1730af != null && _0x1730af.root) || _0x4d57a3 || !_0x55221e.length
      ? null
      : _0x29e1d8(K_, {
          embedId: _0x1a0b8f,
          disabled: _0x1742c3,
          title: "embed-ui.sheetsFloating.toolbar.mergeCell.main",
          triggerClassName: "univer-gap-0.5 univer-px-1",
          open: _0xfa2671,
          onOpenChange: _0x29116d,
          trigger: _0x287fb5(_0x541075, {
            children: [_0x29e1d8(_0x441d09, {}), _0x29e1d8(_0x32072a, {})],
          }),
          overlay: _0x29e1d8(J_, {
            children: _0x55221e.map(({ item: _0x2539e8, icon: _0x5b3751 }) =>
              _0x29e1d8(
                Y_,
                {
                  icon: _0x5b3751,
                  onClick: () => {
                    (_0x26f186(_0x2539e8), _0x29116d(false));
                  },
                  children: _0x5a16ec.t(L_(_0x2539e8)),
                },
                _0x2539e8.id,
              ),
            ),
          }),
        })
  );
}
function uv(_0x2da8ab) {
  let {
      embedId: _0x1f2624,
      menuItem: _0x16ea13,
      open: _0x517157,
      onOpenChange: _0x11f5d0,
      execute: _0x24eebf,
    } = _0x2da8ab,
    _0x762471 = _0x5ade04(_0x11dce0),
    { hidden: _0x4675ef, disabled: _0x11dd90 } = I_(_0x16ea13);
  if (!_0x16ea13 || _0x4675ef) return null;
  let _0x532c4d = ev(_0x16ea13),
    _0x41ccb0 = _0x532c4d.length
      ? _0x532c4d.map((_0x26b9df) => ({
          label: _0x762471.t(R_(_0x26b9df)),
          icon: z_(_0x26b9df.value),
          commandId:
            _0x26b9df.commandId ??
            (_0x16ea13 == null ? undefined : _0x16ea13.commandId) ??
            (_0x16ea13 == null ? undefined : _0x16ea13.id) ??
            _0x2dd444.id,
          params: _0x26b9df.params ?? { value: _0x26b9df.value },
        }))
      : [
          {
            label: _0x762471.t("embed-ui.sheetsFloating.textWrap.clip"),
            icon: _0x29e1d8(_0x3bb85b, {}),
            commandId: _0x2dd444.id,
            params: { value: _0x5bbefa.CLIP },
          },
          {
            label: _0x762471.t("embed-ui.sheetsFloating.textWrap.overflow"),
            icon: _0x29e1d8(_0x4e89c2, {}),
            commandId: _0x2dd444.id,
            params: { value: _0x5bbefa.OVERFLOW },
          },
          {
            label: _0x762471.t("embed-ui.sheetsFloating.textWrap.wrap"),
            icon: _0x29e1d8(_0x4ccf55, {}),
            commandId: _0x2dd444.id,
            params: { value: _0x5bbefa.WRAP },
          },
        ];
  return _0x29e1d8(K_, {
    embedId: _0x1f2624,
    disabled: _0x11dd90,
    title: "embed-ui.sheetsFloating.toolbar.textWrapMode.main",
    triggerClassName: "univer-gap-0.5 univer-px-1",
    open: _0x517157,
    onOpenChange: _0x11f5d0,
    trigger: _0x287fb5(_0x541075, {
      children: [_0x29e1d8(_0x4ccf55, {}), _0x29e1d8(_0x32072a, {})],
    }),
    overlay: _0x29e1d8(q_, {
      children: _0x41ccb0.map((_0x14916e) => {
        var _0x58f135;
        return _0x29e1d8(
          X_,
          {
            icon: _0x14916e.icon,
            onClick: () => {
              (_0x24eebf(_0x14916e.commandId, _0x14916e.params),
                _0x11f5d0(false));
            },
            children: _0x14916e.label,
          },
          _0x14916e.commandId +
            "-" +
            String(
              ((_0x58f135 = _0x14916e.params) == null
                ? undefined
                : _0x58f135.value) ?? _0x14916e.label,
            ),
        );
      }),
    }),
  });
}
const dv = {
    formatPainter: _0xcd66af.id,
    numberFormat: "sheet.operation.open.numfmt.panel",
    fontFamily: _0x3d6b91.id,
    fontSize: _0x452b82.id,
    bold: _0x1abaa8.id,
    textColor: _0x31635f.id,
    backgroundColor: _0x508be8.id,
    borderComposite: _0x5730e7.id,
    horizontalAlign: _0x1bfb18.id,
    verticalAlign: _0x20ed84.id,
    wrap: _0x2dd444.id,
    filter: "sheet.command.smart-toggle-filter",
  },
  fv = {
    root: _0x4041ac.id,
    all: _0x3446a5.id,
    vertical: _0x188902.id,
    horizontal: _0x20fe95.id,
    unmerge: _0x1843d9.id,
  };
function pv(_0x5c5e61) {
  let _0x178e34 = {},
    _0x50ec77 = (_0x39afad) => {
      let _0x2c3288 = _0x5c5e61.find((_0x435084) => {
        let _0x262ef2 = _0x435084.item;
        return (
          _0x435084.key === _0x39afad ||
          (_0x262ef2 == null ? undefined : _0x262ef2.id) === _0x39afad ||
          (_0x262ef2 == null ? undefined : _0x262ef2.commandId) === _0x39afad
        );
      });
      return _0x2c3288 == null ? undefined : _0x2c3288.item;
    };
  Object.keys(dv).forEach((_0x3abaee) => {
    _0x178e34[_0x3abaee] = _0x50ec77(dv[_0x3abaee]);
  });
  let _0x4383fe = Object.entries(fv).reduce(
    (_0x343c28, [_0x2ac8c2, _0x5bae95]) => {
      let _0x4ff06a = _0x50ec77(_0x5bae95);
      return (_0x4ff06a && (_0x343c28[_0x2ac8c2] = _0x4ff06a), _0x343c28);
    },
    {},
  );
  return (
    _v(_0x4383fe) && (_0x178e34.merge = _0x4383fe),
    (_0x178e34.deleteBlock = true),
    _0x178e34
  );
}
const mv = [
  { items: ["formatPainter"] },
  { dividerBefore: "divider-format-tools", items: ["numberFormat"] },
  {
    dividerBefore: "divider-format",
    items: ["fontFamily", "fontSize", "bold"],
  },
  {
    dividerBefore: "divider-font",
    items: ["textColor", "backgroundColor", "borderComposite"],
  },
  {
    dividerBefore: "divider-border",
    items: ["merge", "horizontalAlign", "verticalAlign", "wrap"],
  },
  { dividerBefore: "divider-layout", items: ["filter"] },
  { dividerBefore: "divider-block", items: ["deleteBlock"] },
];
function hv(_0x401deb) {
  let _0x13d00d = [];
  return (
    mv.forEach((_0x3cf157) => {
      let _0x5c3945 = _0x3cf157.items["filter"]((_0x6e2988) =>
        gv(_0x401deb, _0x6e2988),
      ).map((_0x1319a0) => ({
        id: _0x1319a0,
        type:
          _0x1319a0 === "formatPainter" ||
          _0x1319a0 === "bold" ||
          _0x1319a0 === "filter" ||
          _0x1319a0 === "deleteBlock"
            ? "button"
            : "dropdown",
      }));
      _0x5c3945.length &&
        (_0x13d00d.length &&
          _0x3cf157.dividerBefore &&
          _0x13d00d.push({ id: _0x3cf157.dividerBefore, type: "divider" }),
        _0x13d00d.push(..._0x5c3945));
    }),
    _0x13d00d
  );
}
function gv(_0xaee43b, _0x1655b4) {
  return !!_0xaee43b[_0x1655b4];
}
function _v(_0x383acf) {
  return Object.values(_0x383acf).some(Boolean);
}
function vv(_0x2389e8, _0x507ca7) {
  if (_0x2389e8)
    return {
      commandId: _0x2389e8.commandId ?? _0x2389e8.id,
      params:
        _0x507ca7 ??
        (typeof _0x2389e8.params == "function"
          ? _0x2389e8.params()
          : _0x2389e8.params),
    };
}
function yv() {
  return Wh({ childType: _0x513c12.UNIVER_SHEET, mount: bv });
}
function bv(_0x163282) {
  let { menu: _0x281a4d, portalContainer: _0x5c4c28 } = Vh(_0x163282),
    _0xa5c51f = Sl(_0x281a4d);
  return (
    _0xa5c51f.render(
      _0xc3e5c7(
        fl,
        {
          injector: _0x163282.runtimeScope["injector"],
          mountContainer: _0x5c4c28,
          embedId: _0x163282.embedId,
        },
        _0xc3e5c7(Sv, {
          hostUnitId: _0x163282.hostUnitId,
          embedId: _0x163282.embedId,
          childUnitId: _0x163282.childUnitId,
          entry: _0x163282.descriptor["entry"],
          fullscreen: !!_0x163282.renderScope["fullscreen"],
          usesDomFloatingStage: xv(_0x163282.descriptor["entry"]),
          renderScopeActive$: _0x163282.renderScope["active$"],
        }),
      ),
    ),
    _0x11d17f(() => {
      (Cl(_0xa5c51f), globalThis.setTimeout(() => _0x281a4d.remove(), 0));
    })
  );
}
function xv(_0x395bd2) {
  return true;
}
function Sv(_0x1054e4) {
  let {
      hostUnitId: _0x33ee90,
      embedId: _0x53cc8e,
      childUnitId: _0x1329ec,
      entry: _0x55dee0,
      fullscreen: _0x2dcc70,
      usesDomFloatingStage: _0x4375b7,
      renderScopeActive$: _0x2deb6d,
    } = _0x1054e4,
    _0x1fe3a0 = _0x5ade04(_0x11dce0),
    _0x48f8f9 = _0x5ade04(_0x42e186),
    _0x451ae1 = _0x5ade04(_0x3e617f),
    _0x400db1 = _0x5ade04(_0x713ac8),
    _0x16cb2e = _0x5ade04(_0x443233),
    _0x22c31f = _0x5ade04(xs),
    _0x1667af =
      Eu({
        embedId: _0x53cc8e,
        active: _0xe46a3c(
          () => _0x22c31f.active$,
          _0x22c31f.getActive(),
          false,
          [_0x22c31f],
        ),
        fullscreen: _0x2dcc70,
        usesDomFloatingStage: _0x4375b7,
        renderScopeActive: _0xe46a3c(() => _0x2deb6d, false, false, [
          _0x2deb6d,
        ]),
      }) === "stage2",
    [_0x18ba91, _0x584dfb] = _0x4d3f85(null),
    _0x4eb03f = (_0x54bd32) => ({
      open: _0x18ba91 === _0x54bd32,
      onOpenChange: (_0x145666) => _0x584dfb(_0x145666 ? _0x54bd32 : null),
    });
  _0x51cbb8(() => {
    if (!_0x18ba91) return;
    let _0x5d9ed4 = (_0x395fd3) => {
      H_(_0x395fd3.target, _0x53cc8e) || _0x584dfb(null);
    };
    return (
      document.addEventListener("pointerdown", _0x5d9ed4, true),
      () => {
        document.removeEventListener("pointerdown", _0x5d9ed4, true);
      }
    );
  }, [_0x53cc8e, _0x18ba91]);
  let _0x2e764a = _0xe46a3c(
      () =>
        _0x400db1.menuChanged$["pipe"](
          _0xbab8f3(() =>
            pv(_0x400db1.getFlatMenuByPositionKey(_0x254d8d.RIBBON)),
          ),
        ),
      pv(_0x400db1.getFlatMenuByPositionKey(_0x254d8d.RIBBON)),
      false,
      [_0x400db1],
    ),
    _0x62043b = _0x2d2d98(
      () => new Set(hv(_0x2e764a).map((_0x3d20e9) => _0x3d20e9.id)),
      [_0x2e764a],
    ),
    _0x2b363f = () => {
      (_0x22c31f.activate(
        { hostUnitId: _0x33ee90, embedId: _0x53cc8e, childUnitId: _0x1329ec },
        "stage2",
      ),
        _0x451ae1.setCurrentUnitForType(_0x1329ec));
    },
    _0x1978da = async (_0x3e0e58, _0x876c2a) => {
      (_0x2b363f(), await _0x48f8f9.executeCommand(_0x3e0e58, _0x876c2a));
    },
    _0x6b99a0 = async (_0x462825, _0x4de8fe) => {
      let _0x13bf32 = vv(_0x462825, _0x4de8fe);
      _0x13bf32 && (await _0x1978da(_0x13bf32.commandId, _0x13bf32.params));
    },
    _0x4cd56a = () => {
      let _0x6150f8 = _0x451ae1.getUnit(_0x1329ec, _0x513c12.UNIVER_SHEET),
        _0x15e69e = _0x6150f8 == null ? undefined : _0x6150f8.getActiveSheet();
      return !_0x6150f8 || !_0x15e69e
        ? null
        : {
            workbook: _0x6150f8,
            worksheet: _0x15e69e,
            unitId: _0x6150f8.getUnitId(),
            subUnitId: _0x15e69e.getSheetId(),
          };
    },
    _0x5f28d9 = () => {
      var _0x225cee;
      return (
        ((_0x225cee = _0x16cb2e.getCurrentSelections()) == null
          ? undefined
          : _0x225cee.map((_0x3a8930) => _0x3a8930.range)) ?? []
      );
    },
    _0x3b61bf = async (
      _0x16c5d6,
      _0x9707b2,
      _0x12e1b2 = _0x19c9a7.THIN,
      _0x3ab2ee = "#000000",
    ) => {
      let _0x130d46 = _0x4cd56a(),
        _0x230423 = _0x5f28d9();
      !_0x130d46 ||
        !_0x230423.length ||
        (await _0x6b99a0(_0x16c5d6, {
          unitId: _0x130d46.unitId,
          subUnitId: _0x130d46.subUnitId,
          ranges: _0x230423,
          value: {
            type: _0x9707b2,
            color: _0x3ab2ee,
            style: _0x12e1b2,
            activeBorderType: true,
          },
        }));
    },
    _0x21a114 = async () => {
      await _0x48f8f9.executeCommand(_0x2e1133.id, {
        hostUnitId: _0x33ee90,
        embedId: _0x53cc8e,
      });
    };
  return _0x287fb5("div", {
    className: _0x228d07(
      "univer-pointer-events-auto univer-box-border univer-inline-flex univer-h-10 univer-items-center univer-gap-0 univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-1 univer-text-sm univer-text-gray-900 univer-shadow-lg dark:!univer-border-gray-600 dark:!univer-bg-gray-900 dark:!univer-text-gray-0 [&_svg]:univer-size-4 [&_svg]:univer-shrink-0",
      {
        "univer-hidden": !_0x1667af,
        "univer-static\x20univer-mx-auto\x20univer-my-1.5\x20univer-translate-x-0":
          _0x2dcc70,
        "univer-absolute\x20univer-left-1/2\x20univer-z-[30]\x20univer-max-w-[min(calc(100vw-72px),880px)]\x20-univer-translate-x-1/2\x20univer-overflow-x-auto\x20univer-overflow-y-visible\x20[scrollbar-width:none]\x20[&::-webkit-scrollbar]:univer-hidden":
          !_0x2dcc70,
        "-univer-top-9": !_0x2dcc70 && _0x55dee0 !== "docs-custom-block",
        "-univer-top-[52px]": !_0x2dcc70 && _0x55dee0 === "docs-custom-block",
      },
    ),
    "data-u-comp": "sheet-embed-floating-menu",
    "data-embed-floating-menu": "true",
    "data-embed-id": _0x53cc8e,
    "data-embed-float-stage": _0x1667af ? "stage2" : "inactive",
    onPointerDown: (_0x545206) => _0x545206.stopPropagation(),
    onMouseDown: V_,
    children: [
      _0x62043b.has("formatPainter") &&
        _0x29e1d8(F_, {
          item: _0x2e764a.formatPainter,
          title: "embed-ui.sheetsFloating.toolbar.formatPainter",
          onClick: async () => _0x6b99a0(_0x2e764a.formatPainter),
          children: _0x29e1d8(_0xc485dc, {}),
        }),
      _0x62043b.has("divider-format-tools") &&
        _0x29e1d8(_0xb4dc1b, {
          className: "univer-mx-1 !univer-h-4",
          orientation: "vertical",
        }),
      _0x62043b.has("numberFormat") &&
        _0x29e1d8(tv, {
          menuItem: _0x2e764a.numberFormat,
          onClick: async () => _0x6b99a0(_0x2e764a.numberFormat),
        }),
      _0x62043b.has("divider-format") &&
        _0x29e1d8(_0xb4dc1b, {
          className: "univer-mx-1 !univer-h-4",
          orientation: "vertical",
        }),
      _0x62043b.has("fontFamily") &&
        _0x29e1d8(nv, {
          embedId: _0x53cc8e,
          menuItem: _0x2e764a.fontFamily,
          title: "embed-ui.sheetsFloating.toolbar.font",
          ..._0x4eb03f("fontFamily"),
          onSelect: async (_0x213bae) =>
            _0x6b99a0(_0x2e764a.fontFamily, { value: _0x213bae }),
        }),
      _0x62043b.has("fontSize") &&
        _0x29e1d8(rv, {
          embedId: _0x53cc8e,
          menuItem: _0x2e764a.fontSize,
          title: "embed-ui.sheetsFloating.toolbar.fontSize",
          ..._0x4eb03f("fontSize"),
          onSelect: async (_0x296b7a) =>
            _0x6b99a0(_0x2e764a.fontSize, { value: Number(_0x296b7a) }),
        }),
      _0x62043b.has("bold") &&
        _0x29e1d8(F_, {
          item: _0x2e764a.bold,
          title: "embed-ui.sheetsFloating.toolbar.bold",
          onClick: async () => _0x6b99a0(_0x2e764a.bold),
          children: _0x29e1d8(_0x44dd86, {}),
        }),
      _0x62043b.has("divider-font") &&
        _0x29e1d8(_0xb4dc1b, {
          className: "univer-mx-1 !univer-h-4",
          orientation: "vertical",
        }),
      _0x62043b.has("textColor") &&
        _0x29e1d8(sv, {
          embedId: _0x53cc8e,
          menuItem: _0x2e764a.textColor,
          title: "embed-ui.sheetsFloating.toolbar.textColor.main",
          icon: _0x29e1d8(_0x363c90, { className: "univer-fill-primary-600" }),
          defaultColor: "#111827",
          ..._0x4eb03f("textColor"),
          onChange: async (_0x4c7a25) =>
            _0x6b99a0(_0x2e764a.textColor, { value: _0x4c7a25 }),
          onReset: async () => _0x1978da(_0x413c0a.id),
        }),
      _0x62043b.has("backgroundColor") &&
        _0x29e1d8(sv, {
          embedId: _0x53cc8e,
          menuItem: _0x2e764a.backgroundColor,
          title: "embed-ui.sheetsFloating.toolbar.fillColor.main",
          icon: _0x29e1d8(_0x13a678, { className: "univer-fill-primary-600" }),
          defaultColor: "#ffffff",
          ..._0x4eb03f("backgroundColor"),
          onChange: async (_0x5858a8) =>
            _0x6b99a0(_0x2e764a.backgroundColor, { value: _0x5858a8 }),
          onReset: async () => _0x1978da(_0x15497c.id),
        }),
      _0x62043b.has("borderComposite") &&
        _0x29e1d8(cv, {
          embedId: _0x53cc8e,
          menuItem: _0x2e764a.borderComposite,
          ..._0x4eb03f("borderComposite"),
          onSelect: async (_0x3a8d62, _0x1e5c2a, _0x240255) =>
            _0x3b61bf(
              _0x2e764a.borderComposite,
              _0x3a8d62,
              _0x1e5c2a,
              _0x240255,
            ),
        }),
      _0x62043b.has("divider-border") &&
        _0x29e1d8(_0xb4dc1b, {
          className: "univer-mx-1\x20!univer-h-4",
          orientation: "vertical",
        }),
      _0x62043b.has("merge") &&
        _0x29e1d8(lv, {
          embedId: _0x53cc8e,
          menuItems: _0x2e764a.merge,
          ..._0x4eb03f("merge"),
          execute: _0x6b99a0,
        }),
      _0x62043b.has("horizontalAlign") &&
        _0x29e1d8(iv, {
          embedId: _0x53cc8e,
          menuItem: _0x2e764a.horizontalAlign,
          ..._0x4eb03f("horizontalAlign"),
          execute: _0x6b99a0,
        }),
      _0x62043b.has("verticalAlign") &&
        _0x29e1d8(av, {
          embedId: _0x53cc8e,
          menuItem: _0x2e764a.verticalAlign,
          ..._0x4eb03f("verticalAlign"),
          execute: _0x6b99a0,
        }),
      _0x62043b.has("wrap") &&
        _0x29e1d8(uv, {
          embedId: _0x53cc8e,
          menuItem: _0x2e764a.wrap,
          ..._0x4eb03f("wrap"),
          execute: _0x1978da,
        }),
      _0x62043b.has("divider-layout") &&
        _0x29e1d8(_0xb4dc1b, {
          className: "univer-mx-1 !univer-h-4",
          orientation: "vertical",
        }),
      _0x62043b.has("filter") &&
        _0x29e1d8(F_, {
          item: _0x2e764a.filter,
          title: "embed-ui.sheetsFloating.toolbar.filter",
          onClick: async () => _0x6b99a0(_0x2e764a.filter),
          children: _0x29e1d8(_0x185363, {}),
        }),
      _0x62043b.has("divider-block") &&
        _0x29e1d8(_0xb4dc1b, {
          className: "univer-mx-1\x20!univer-h-4",
          orientation: "vertical",
        }),
      !_0x2dcc70 &&
        _0x29e1d8(Mf, {
          hostUnitId: _0x33ee90,
          embedId: _0x53cc8e,
          variant: "menu",
        }),
      _0x62043b.has("deleteBlock") &&
        _0x29e1d8(P_, {
          title: _0x1fe3a0.t("embed-ui.deleteBlock"),
          className: "univer-text-red-500\x20hover:univer-text-red-600",
          onClick: _0x21a114,
          children: _0x29e1d8(_0x461762, {}),
        }),
    ],
  });
}
const Cv = new WeakMap(),
  wv = new WeakSet();
function Tv(_0xa61e0d) {
  zm(_0xa61e0d, "sheets-ui.embed", Ev);
}
function Ev(_0x6d5a2a) {
  let _0x5f1352 = _0x6d5a2a.get(Rc),
    _0x28532a = _0x6d5a2a.get(Ic),
    _0x22f2c4 = _0x6d5a2a.get(bs),
    _0x32437b = _0x6d5a2a.get(Lc),
    _0x50c10b = _0x6d5a2a.get(cd),
    _0x140d4c = _0x6d5a2a.get(Bf),
    _0x47b750 = _0x6d5a2a.get(Cd);
  (S_(_0x6d5a2a),
    _0x6d5a2a.has(_0x400392) ||
      _0x6d5a2a.add([_0x400392, { useFactory: () => _0x6d5a2a.get(Ss) }]),
    _0x6d5a2a.has(_0x59f7ec) ||
      _0x6d5a2a.add([
        _0x59f7ec,
        {
          useFactory: () =>
            Dv({
              embedModelService: _0x6d5a2a.get(_0x588de6),
              mountService: _0x6d5a2a.get(cl),
              activationService: _0x6d5a2a.get(dl),
              restoreService: _0x6d5a2a.get(ud),
            }),
        },
      ]),
    [__(), v_()].forEach((_0x525b14) => {
      _0x5f1352.get(_0x525b14.hostType, _0x525b14.entry) ||
        _0x5f1352.register(_0x525b14);
    }));
  let _0x84c018 = w_(_0x6d5a2a.get(_0x42e186));
  _0x28532a.get(_0x84c018.childType) || _0x28532a.register(_0x84c018);
  let _0x5b02bc = C_();
  (_0x22f2c4.get(_0x5b02bc.childType) || _0x22f2c4.register(_0x5b02bc),
    yv().forEach((_0x3d2e52) => {
      _0x32437b.get(_0x3d2e52.hostType, _0x3d2e52.entry, _0x3d2e52.childType) ||
        _0x32437b.register(_0x3d2e52);
    }),
    _0x50c10b.registerProvider(
      Wf(_0x6d5a2a, {
        childType: _0x513c12.UNIVER_SHEET,
        renderManagerService: _0x2db5c6,
      }),
    ),
    _0x140d4c.get(_0x513c12.UNIVER_SHEET) || _0x140d4c.register(s_()),
    _0x47b750.get(_0x513c12.UNIVER_SHEET) || _0x47b750.register(x_(_0x6d5a2a)),
    Mv({ injector: _0x6d5a2a, previewService: _0x50c10b }));
}
function Dv(_0x198265) {
  return {
    getSheetTabChildType: ({
      hostUnitId: _0x266f89,
      hostAnchorId: _0x1eca80,
      embedId: _0x2057fe,
    }) => {
      let _0x7bfdb = _0x198265.embedModelService["getDescriptor"](
        _0x266f89,
        _0x2057fe,
      );
      return (_0x7bfdb == null ? undefined : _0x7bfdb.hostAnchorId) ===
        _0x1eca80
        ? _0x7bfdb.childType
        : undefined;
    },
    mountSheetTab: ({
      hostUnitId: _0x6af224,
      hostAnchorId: _0x4d1c09,
      embedId: _0x3cd7a7,
    }) => {
      let _0x4a443c = _0x198265.embedModelService["getDescriptor"](
        _0x6af224,
        _0x3cd7a7,
      );
      if (!_0x4a443c || _0x4a443c.hostAnchorId !== _0x4d1c09) return;
      let _0x30b192 = false,
        _0x2eaa69 = false,
        _0x4e4cbe;
      return (
        _0x198265.restoreService["materializeDescriptor"]({
          descriptor: _0x4a443c,
        })
          .then((_0x282523) => {
            _0x30b192 ||
              (_0x4e4cbe == null || _0x4e4cbe.remove(),
              (_0x4e4cbe = undefined),
              _0x198265.mountService["mount"](_0x282523),
              _0x198265.activationService["activateTab"](_0x282523),
              (_0x2eaa69 = true));
          })
          .catch((_0x1411a4) => {
            _0x30b192 || (_0x4e4cbe = Ov(_0x4d1c09, _0x1411a4));
          }),
        _0x11d17f(() => {
          ((_0x30b192 = true),
            _0x4e4cbe == null || _0x4e4cbe.remove(),
            _0x198265.activationService["clearTab"](_0x3cd7a7),
            _0x2eaa69 && _0x198265.mountService["unmount"](_0x3cd7a7));
        })
      );
    },
    clearTab: (_0x1c82ee) => {
      _0x198265.activationService["clearTab"](_0x1c82ee);
    },
  };
}
function Ov(_0x34f95f, _0x488131) {
  let _0x24bf09 = kv(_0x34f95f);
  if (!_0x24bf09) return;
  let _0x481a78 = document.createElement("div");
  return (
    (_0x481a78.dataset["embedSheetsSheetTabError"] = "true"),
    (_0x481a78.style["padding"] = "12px"),
    (_0x481a78.style["color"] = "#b91c1c"),
    (_0x481a78.style["fontSize"] = "13px"),
    (_0x481a78.textContent =
      _0x488131 instanceof Error && _0x488131.message
        ? _0x488131.message
        : "Failed to load embedded sheet."),
    _0x24bf09.replaceChildren(_0x481a78),
    _0x481a78
  );
}
function kv(_0x5b4a14) {
  return document.querySelector(
    "[data-embed-sheets-sheet-tab-host=\x22" + Av(_0x5b4a14) + "\x22]",
  );
}
function Av(_0x3d1ce4) {
  return _0x3d1ce4.replace(/\\/g, "\x5c\x5c").replace(/"/g, "\x5c\x22");
}
function jv(_0x1ac2df) {
  let _0x1ede58 = new _0x35e4a1(),
    _0x38d1b5 = 0,
    _0x3ce169;
  if (
    (_0x1ede58.add(
      _0x1ac2df.previewService["previewUpdated$"].subscribe((_0x109cfc) => {
        if (typeof _0x109cfc.image != "string") return;
        let _0x4a0211 = _0x1ac2df.embedModelService[
          "getActiveDescriptorsByChildUnit"
        ](_0x109cfc.childUnitId).find(
          (_0x1373ff) =>
            _0x1373ff.embedId === _0x109cfc.embedId &&
            _0x1373ff.entry === "sheets-floating-object",
        );
        _0x4a0211 != null &&
          _0x4a0211.hostAnchorId &&
          _0x1ac2df.canvasFloatDomPreviewService["setPreview"]({
            id: _0x4a0211.hostAnchorId,
            image: _0x109cfc.image,
            updatedAt: _0x109cfc.updatedAt,
          });
      }),
    ),
    !_0x1ac2df.canvasFloatDomPreviewService["previewRequested$"])
  )
    return _0x1ede58;
  let _0x353aa4 = () => {
      _0x3ce169 ||
        _0x38d1b5 >= 240 ||
        (_0x3ce169 = globalThis.setTimeout(() => {
          ((_0x3ce169 = undefined), (_0x38d1b5 += 1), _0x1a513b());
        }, 250));
    },
    _0x5bbb7c = (_0x34c0ff) => {
      let _0x552947 = _0x34c0ff.data;
      if (!_0x552947 || typeof _0x552947 != "object") return true;
      let _0x329233 = Fv(_0x552947, "embedId"),
        _0xcd1d2f = Fv(_0x552947, "hostUnitId");
      if (!_0x329233 || !_0xcd1d2f) return true;
      let _0x5dd563 = _0x1ac2df.embedModelService["getDescriptor"](
        _0xcd1d2f,
        _0x329233,
      );
      return !_0x5dd563 ||
        _0x5dd563.entry !== "sheets-floating-object" ||
        !_0x5dd563.childUnitId ||
        _0x5dd563.childType == null
        ? false
        : (_0x1ac2df.previewService["requestPreview"]({
            descriptor: _0x5dd563,
            childUnitId: _0x5dd563.childUnitId,
            childType: _0x5dd563.childType,
            width: _0x34c0ff.width,
            height: _0x34c0ff.height,
            dpr: typeof window > "u" ? 1 : window.devicePixelRatio || 1,
            reason: "initial",
          }),
          true);
    },
    _0x1a513b = () => {
      var _0x1a7fb9, _0x371fa2;
      let _0x3618fd = false;
      ((_0x1a7fb9 = (_0x371fa2 = _0x1ac2df.canvasFloatDomPreviewService)
        .getPendingRequests) == null ||
        _0x1a7fb9.call(_0x371fa2).forEach((_0x54d082) => {
          _0x5bbb7c(_0x54d082) || (_0x3618fd = true);
        }),
        _0x3618fd && _0x353aa4());
    };
  return (
    _0x1a513b(),
    _0x1ede58.add(
      _0x1ac2df.canvasFloatDomPreviewService["previewRequested$"].subscribe(
        (_0x580b9f) => {
          _0x5bbb7c(_0x580b9f) || _0x353aa4();
        },
      ),
    ),
    _0x1ede58.add(() => {
      _0x3ce169 && globalThis.clearTimeout(_0x3ce169);
    }),
    _0x1ede58
  );
}
function Mv(_0x151498) {
  let _0xe632cf = _0x151498.injector,
    _0x4e86ae = Cv.get(_0xe632cf);
  if (_0x4e86ae) return _0x4e86ae;
  let _0x5e9e44 = Pv(_0x151498.injector);
  if (_0x5e9e44 !== null) {
    if (_0x5e9e44) {
      let _0x428dce = jv({
        previewService: _0x151498.previewService,
        embedModelService: _0x5e9e44.embedModelService,
        canvasFloatDomPreviewService: _0x5e9e44.canvasFloatDomPreviewService,
      });
      return (Cv.set(_0xe632cf, _0x428dce), _0x428dce);
    }
    _0x151498.retry === false ||
      wv.has(_0xe632cf) ||
      (wv.add(_0xe632cf), Nv(_0x151498, 0));
  }
}
function Nv(_0x47464b, _0x13ba7e) {
  let _0x23289d = _0x47464b.maxRetries ?? 240,
    _0x4d9736 = _0x47464b.retryDelay ?? 250,
    _0x5197bf = _0x47464b.injector;
  globalThis.setTimeout(() => {
    if (Mv({ ..._0x47464b, retry: false }) || _0x13ba7e + 1 >= _0x23289d) {
      wv.delete(_0x5197bf);
      return;
    }
    Nv(_0x47464b, _0x13ba7e + 1);
  }, _0x4d9736);
}
function Pv(_0x45b07c) {
  try {
    return !_0x45b07c.has(_0x59447d) || !_0x45b07c.has(_0x588de6)
      ? undefined
      : {
          embedModelService: _0x45b07c.get(_0x588de6),
          canvasFloatDomPreviewService: _0x45b07c.get(_0x59447d),
        };
  } catch {
    return null;
  }
}
function Fv(_0x12c7d1, _0x26f51e) {
  let _0x5ea6af = _0x12c7d1[_0x26f51e];
  return typeof _0x5ea6af == "string" ? _0x5ea6af : undefined;
}
function Iv() {
  return Um({ childType: _0x513c12.UNIVER_SLIDE, productName: "Slides" });
}
function Lv(_0x55cadd) {
  var _0x2a8b43;
  return ((_0x2a8b43 = _0x55cadd.active) == null
    ? undefined
    : _0x2a8b43.embedId) === _0x55cadd.embedId &&
    _0x55cadd.active["stage"] !== "inactive"
    ? (_0x55cadd.active["stage"] ?? "stage1")
    : Eu({
        embedId: _0x55cadd.embedId,
        active: _0x55cadd.active,
        fullscreen: _0x55cadd.fullscreen,
        usesDomFloatingStage: _0x55cadd.usesDomFloatingStage ?? true,
        renderScopeActive: _0x55cadd.renderScopeActive ?? false,
      });
}
function Rv(_0x2f986e) {
  var _0x262ad2;
  let _0xfa7960 = _0x5ade04(_0x11dce0),
    _0x5e64f2 = _0x5ade04(_0x20cff5),
    _0x243aa9 = _0x5ade04(_0x5143b3),
    _0x20b885 = _0x2d2d98(
      () => _0x5e64f2.createInstance(_0x161c2d),
      [_0x5e64f2],
    ),
    _0x3d3d7b = _0xe46a3c(_0x243aa9.darkMode$) ?? _0x243aa9.darkMode,
    {
      hostUnitId: _0x54b9cc,
      embedId: _0x5df8ae,
      childUnitId: _0x36b50b,
      slideModel: _0x3ff1e9,
      floatingActiveService: _0x4b91b0,
      commandService: _0x498a09,
      instanceService: _0x4c9f66,
      fullscreen: _0x33c04d,
      usesDomFloatingStage: _0x2ab5,
      renderScopeActive$: _0x472bb9,
      collisionBoundary: _0x2f9d7a,
    } = _0x2f986e,
    _0x571753 = _0xe46a3c(
      () => _0x4b91b0.active$,
      _0x4b91b0.getActive(),
      false,
      [_0x4b91b0],
    ),
    _0x169812 = _0xe46a3c(_0x472bb9, false);
  _0xe46a3c(
    _0x3ff1e9 === null ? null : () => _0x3ff1e9.pageManager["slideOrder$"],
    [],
    false,
    [_0x3ff1e9],
  );
  let _0x20acb0 = _0xe46a3c(
      _0x3ff1e9 === null ? null : () => _0x3ff1e9.pageManager["activeSlideId$"],
      _0x3ff1e9 == null ||
        (_0x262ad2 = _0x3ff1e9.pageManager["getActiveSlide"]()) == null
        ? undefined
        : _0x262ad2.getId(),
      false,
      [_0x3ff1e9],
    ),
    _0x3fd363 =
      (_0x3ff1e9 == null ? undefined : _0x3ff1e9.pageManager["getSlides"]()) ??
      [],
    _0x277968 = Math.max(
      0,
      _0x3fd363.findIndex((_0x4743e4) => _0x4743e4.getId() === _0x20acb0),
    ),
    _0xc18f08 = _0x3fd363.length,
    _0x478b40 = _0xfa7960.t("embed-ui.slidesFloating.selectSlide"),
    _0x546837 = Lv({
      active: _0x571753,
      embedId: _0x5df8ae,
      fullscreen: _0x33c04d,
      renderScopeActive: _0x169812,
      usesDomFloatingStage: _0x2ab5,
    }),
    _0x6dcdd8 = () => {
      (_0x4b91b0.activate(
        { hostUnitId: _0x54b9cc, embedId: _0x5df8ae, childUnitId: _0x36b50b },
        "stage2",
      ),
        _0x4c9f66.setCurrentUnitForType(_0x36b50b));
    },
    _0x1bf97e = (_0x25164a) => {
      let _0x24a3de = _0x3fd363[_0x25164a];
      !_0x24a3de ||
        !_0x3ff1e9 ||
        (_0x6dcdd8(),
        _0x3ff1e9.pageManager["setActiveSlide"](_0x24a3de.getId()));
    },
    _0x543e3a = (_0x5343da) => {
      _0x1bf97e(
        _0x3fd363.findIndex((_0x1e5c4f) => _0x1e5c4f.getId() === _0x5343da),
      );
    };
  return _0x287fb5("div", {
    className: _0x228d07(
      "univer-slide-embed-floating-menu univer-pointer-events-auto univer-box-border univer-inline-flex univer-h-8 univer-items-center univer-gap-1 univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-gray-0 univer-p-1 univer-text-gray-900 univer-shadow-lg dark:!univer-border-gray-600 dark:!univer-bg-gray-900 dark:!univer-text-gray-0",
      {
        "univer-hidden": _0x546837 === "inactive",
        "univer-static\x20univer-mx-auto\x20univer-my-1.5\x20univer-translate-x-0":
          _0x33c04d,
        "univer-absolute\x20univer-left-1/2\x20univer-z-[30]\x20-univer-translate-x-1/2":
          !_0x33c04d,
        "-univer-top-9": !_0x33c04d,
      },
    ),
    "data-embed-floating-menu": "true",
    "data-embed-id": _0x5df8ae,
    "data-embed-float-stage": _0x546837,
    onPointerDown: (_0x763e02) => _0x763e02.stopPropagation(),
    children: [
      _0x29e1d8(zv, {
        title: _0xfa7960.t("embed-ui.slidesFloating.previousSlide"),
        disabled: _0x277968 <= 0,
        onClick: () => _0x1bf97e(_0x277968 - 1),
        children: _0x29e1d8(_0x1a1ae7, {}),
      }),
      _0x29e1d8(zv, {
        title: _0xfa7960.t("embed-ui.slidesFloating.nextSlide"),
        disabled: _0xc18f08 === 0 || _0x277968 >= _0xc18f08 - 1,
        onClick: () => _0x1bf97e(_0x277968 + 1),
        children: _0x29e1d8(_0x55a8b2, {}),
      }),
      _0x29e1d8(jf, {
        title: _0x478b40,
        children: _0x29e1d8(_0x1489c8, {
          collisionBoundary: _0x2f9d7a,
          align: "center",
          side: "bottom",
          sideOffset: 6,
          className:
            "univer-w-44\x20!univer-bg-gray-0\x20!univer-text-gray-900\x20dark:!univer-bg-gray-0\x20dark:!univer-text-gray-900",
          "data-embed-id": _0x5df8ae,
          "data-embed-floating-menu-popup": "true",
          items: _0x3fd363.map((_0x143c86, _0xd04ad8) => ({
            type: "item",
            className: "!univer-p-1",
            children: _0x287fb5("span", {
              className: "univer-block univer-w-full",
              children: [
                _0x29e1d8(_0x424b90, {
                  pageId: _0x143c86.getId(),
                  index: _0xd04ad8,
                  isActive: _0x143c86.getId() === _0x20acb0,
                  slideModel: _0x3ff1e9,
                  objectProvider: _0x20b885,
                  setActivePage: _0x543e3a,
                  variant: "preview",
                  renderIdSuffix: "embed-page-menu-" + _0x5df8ae,
                  darkMode: _0x3d3d7b,
                }),
                _0x29e1d8("span", {
                  className: "univer-sr-only",
                  children:
                    _0x478b40 + "\x20" + (_0xd04ad8 + 1) + " / " + _0xc18f08,
                }),
              ],
            }),
            onSelect: () => _0x1bf97e(_0xd04ad8),
          })),
          children: _0x287fb5(_0x43385d, {
            type: "button",
            size: "small",
            variant: "ghost",
            className:
              "univer-h-6\x20univer-gap-1\x20univer-px-2\x20univer-text-xs",
            "aria-label": _0x478b40,
            children: [
              _0x29e1d8("span", {
                children:
                  _0xc18f08 === 0 ? "0 / 0" : _0x277968 + 1 + " / " + _0xc18f08,
              }),
              _0x29e1d8(_0x32072a, { className: "univer-size-3" }),
            ],
          }),
        }),
      }),
      !_0x33c04d &&
        _0x29e1d8(Mf, {
          hostUnitId: _0x54b9cc,
          embedId: _0x5df8ae,
          variant: "menu",
        }),
      _0x29e1d8(_0xb4dc1b, { orientation: "vertical" }),
      _0x29e1d8(zv, {
        title: _0xfa7960.t("embed-ui.deleteBlock"),
        className: "univer-text-red-500 hover:univer-text-red-600",
        onClick: async () => {
          await _0x498a09.executeCommand(_0x2e1133.id, {
            hostUnitId: _0x54b9cc,
            embedId: _0x5df8ae,
          });
        },
        children: _0x29e1d8(_0x461762, {}),
      }),
    ],
  });
}
function zv(_0x153222) {
  let {
    children: _0x4d4569,
    title: _0x4a4229,
    disabled: _0x14c10d,
    className: _0x1ebfe4,
    onClick: _0x3bd4d2,
  } = _0x153222;
  return _0x29e1d8(jf, {
    title: _0x4a4229,
    children: _0x29e1d8(_0x43385d, {
      type: "button",
      size: "small",
      variant: "ghost",
      className: _0x228d07("univer-size-6\x20univer-p-0", _0x1ebfe4),
      "aria-label": _0x4a4229,
      disabled: _0x14c10d,
      onClick: _0x3bd4d2,
      children: _0x4d4569,
    }),
  });
}
function Bv() {
  return Wh({ childType: _0x513c12.UNIVER_SLIDE, mount: Vv });
}
function Vv(_0x24454c) {
  let { menu: _0x3630a8, portalContainer: _0x35c4f5 } = Vh(_0x24454c),
    _0x52c924 = Sl(_0x3630a8),
    _0x376177 = _0x24454c.injector["get"](xs),
    _0x1edf13 = _0x24454c.injector["get"](_0x42e186),
    _0xd35e7d = _0x24454c.injector["get"](_0x3e617f),
    _0x1ccfd9 = _0xd35e7d.getUnit(
      _0x24454c.childUnitId,
      _0x513c12.UNIVER_SLIDE,
    );
  return (
    _0x52c924.render(
      _0xc3e5c7(
        fl,
        {
          injector: _0x24454c.runtimeScope["injector"],
          mountContainer: _0x35c4f5,
          embedId: _0x24454c.embedId,
          passThroughWheelGestures:
            _0x24454c.renderScope["mode"] === "float" &&
            !_0x24454c.renderScope["fullscreen"],
        },
        _0xc3e5c7(Rv, {
          collisionBoundary: _0x24454c.renderScope["fullscreen"]
            ? undefined
            : _0x24454c.injector["get"](_0x1cdf34).getContentElement(),
          hostUnitId: _0x24454c.hostUnitId,
          embedId: _0x24454c.embedId,
          childUnitId: _0x24454c.childUnitId,
          slideModel: _0x1ccfd9 ?? null,
          floatingActiveService: _0x376177,
          commandService: _0x1edf13,
          instanceService: _0xd35e7d,
          fullscreen: !!_0x24454c.renderScope["fullscreen"],
          usesDomFloatingStage:
            _0x24454c.descriptor["entry"] !== "slides-floating-object",
          renderScopeActive$: _0x24454c.renderScope["active$"],
        }),
      ),
    ),
    _0x11d17f(() => {
      (Cl(_0x52c924), globalThis.setTimeout(() => _0x3630a8.remove(), 0));
    })
  );
}
function Hv(_0x2fd0ac, _0x45aac4, _0x41dca3) {
  return {
    ..._0x361271(_0x2fd0ac, _0x45aac4),
    activateAnchor: (_0xdbf05d) => {
      _0x41dca3 == null ||
        _0x41dca3.unmountFloatingSessions(_0xdbf05d.hostUnitId);
      let _0x14fb84 =
          _0x45aac4 == null
            ? undefined
            : _0x45aac4.getUnit(_0xdbf05d.hostUnitId, _0x513c12.UNIVER_SLIDE),
        _0x26cc37 = () => {
          var _0x1fd402, _0x1c6442;
          return _0x14fb84 == null ||
            (_0x1fd402 = _0x14fb84.pageManager) == null ||
            (_0x1c6442 = _0x1fd402.setActiveSlide) == null
            ? undefined
            : _0x1c6442.call(_0x1fd402, _0xdbf05d.hostAnchorId);
        };
      if (typeof window > "u") {
        _0x26cc37();
        return;
      }
      window.requestAnimationFrame(_0x26cc37);
    },
  };
}
function Uv() {
  return {
    hostType: _0x513c12.UNIVER_SLIDE,
    entry: "slides-floating-object",
    layout: "scroll-contained",
    supportedLayouts: [
      "scroll-contained",
      "doc-width-scale",
      "aspect-fit",
      "content-bounds-fit",
    ],
    menuBehavior: "floating",
    mount: (_0x1ded2a) => {
      let _0x2e0aa4 = Gv(
        "data-embed-slides-floating-object-host",
        _0x1ded2a.descriptor["hostAnchorId"],
      );
      return _0x2e0aa4 ? { hostElement: _0x2e0aa4 } : {};
    },
  };
}
function Wv() {
  return {
    hostType: _0x513c12.UNIVER_SLIDE,
    entry: "slides-page-list-block",
    layout: "tab-peer",
    supportedLayouts: ["tab-peer"],
    menuBehavior: "host-override",
    mount: (_0x1cd965) => {
      let _0x108db4 = Gv(
        "data-embed-slides-page-list-host",
        _0x1cd965.descriptor["hostAnchorId"],
      );
      return _0x108db4 ? { hostElement: _0x108db4 } : {};
    },
  };
}
function Gv(_0x5762ce, _0x36fa04) {
  return document.querySelector(
    "[" + _0x5762ce + "=\x22" + Kv(_0x36fa04) + "\x22]",
  );
}
function Kv(_0x55ca66) {
  return _0x55ca66.replace(/\\/g, "\x5c\x5c").replace(/"/g, "\x5c\x22");
}
function qv() {
  return { childType: _0x513c12.UNIVER_SLIDE, handleWheel: () => false };
}
function Jv(_0x317ed3) {
  return {
    childType: _0x513c12.UNIVER_SLIDE,
    supportedLayouts: ["tab-peer", "aspect-fit", "scroll-contained"],
    beforeDeactivate: Yv,
    mount: (_0x221859) => Xv(_0x221859, _0x317ed3),
  };
}
function Yv(_0x457998) {
  let _0x3a71e1 = _0x457998.runtimeScope["injector"];
  if (!(_0x3a71e1 != null && _0x3a71e1.has(_0x3be93a))) return;
  let _0x5c7b4b = _0x3a71e1.get(_0x3be93a);
  (_0x5c7b4b.clearActiveEditing(), _0x5c7b4b.clearSelection());
}
function Xv(_0x31d4a5, _0xd19aa1) {
  let _0x5cb001 = _0x31d4a5.injector["get"](_0x3e617f).getUnit(
    _0x31d4a5.childUnitId,
    _0x513c12.UNIVER_SLIDE,
  );
  if (!_0x5cb001) return;
  let _0x4e21bc = _0x31d4a5.runtimeScope["injector"];
  if (!_0x4e21bc) return;
  let _0x462466 = Zv(
      _0x31d4a5.childUnitId,
      _0x4e21bc.get(_0x3be93a),
      _0x4e21bc.get(_0x113203),
    ),
    _0x32dbf9 = hh(_0x31d4a5, _0xd19aa1, (_0x1f9e9a) =>
      Qv(_0x5cb001, _0x1f9e9a),
    ),
    _0x4467bb = _0x31d4a5.runtimeScope["roots"].content,
    _0x3caf66 = _0x31d4a5.runtimeScope["roots"].canvas,
    _0x51ea21 = _0x31d4a5.injector["get"](_0x2db5c6),
    _0x5e8980 = $v(_0x31d4a5),
    _0x59aa1 = _0x3caf66
      ? Kc(_0x51ea21, _0x31d4a5.childUnitId, _0x4e21bc)
      : undefined;
  if (_0x59aa1 && _0x3caf66 && !_0x5e8980) {
    try {
      var _0x5eebbc, _0xed6275;
      (_0x5eebbc = (_0xed6275 = _0x59aa1.engine).unmount) == null ||
        _0x5eebbc.call(_0xed6275);
    } catch {}
    (_0x59aa1.engine["mount"](_0x3caf66),
      Jc(_0x59aa1, { activate: true }),
      (_0x3caf66.dataset["embedChildRenderUnitId"] = _0x31d4a5.childUnitId),
      (_0x3caf66.dataset["embedChildRenderMode"] = "slide-canvas"));
  }
  let _0x2761a2 = Sl(_0x4467bb);
  return (
    (_0x4467bb.dataset["embedChildRenderUnitId"] = _0x31d4a5.childUnitId),
    (_0x4467bb.dataset["embedChildRenderMode"] = "slide-workbench"),
    _0x2761a2.render(
      _0x29e1d8(fl, {
        injector: _0x4e21bc,
        mountContainer: _0x31d4a5.runtimeScope["roots"].popup,
        embedId: _0x31d4a5.embedId,
        passThroughWheelGestures:
          _0x31d4a5.renderScope["mode"] === "float" &&
          !_0x31d4a5.renderScope["fullscreen"],
        children: _0x5e8980
          ? _0x29e1d8(_0x37972b, {
              unitId: _0x31d4a5.childUnitId,
              active$: _0x31d4a5.renderScope["active$"],
            })
          : _0x29e1d8(_0x5050bb, {}),
      }),
    ),
    _0x11d17f(() => {
      (_0x462466.dispose(), _0x32dbf9.dispose());
      try {
        var _0x48a5d6, _0x2eef2a;
        _0x59aa1 == null ||
          (_0x2eef2a = (_0x48a5d6 = _0x59aa1.engine).unmount) == null ||
          _0x2eef2a.call(_0x48a5d6);
      } catch {}
      (_0x51ea21.removeRender(_0x31d4a5.childUnitId),
        Cl(_0x2761a2),
        _0x4467bb.isConnected &&
          (_0x4467bb.removeAttribute("data-embed-child-render-unit-id"),
          _0x4467bb.removeAttribute("data-embed-child-render-mode")),
        _0x3caf66 != null &&
          _0x3caf66.isConnected &&
          (_0x3caf66.removeAttribute("data-embed-child-render-unit-id"),
          _0x3caf66.removeAttribute("data-embed-child-render-mode")),
        _0x4e21bc.dispose());
    })
  );
}
function Zv(_0x551d8a, _0x40531c, _0x3ba338) {
  let _0x3b885f = _0x40531c.state$["subscribe"]((_0x647e74) => {
    var _0x46bdf4;
    _0x3ba338.setContextValue(
      _0xb54232,
      ((_0x46bdf4 = _0x647e74.context) == null
        ? undefined
        : _0x46bdf4.unitId) === _0x551d8a &&
        _0x647e74.selectedIds["length"] > 0,
    );
  });
  return _0x11d17f(() => {
    (_0x3b885f.unsubscribe(), _0x3ba338.setContextValue(_0xb54232, false));
  });
}
function Qv(_0x35b468, _0x4a4069) {
  var _0x5625cb, _0x409e2d;
  let _0x573fdd = _0x4a4069 == null ? undefined : _0x4a4069.pageId,
    _0x44e699 =
      _0x573fdd && _0x35b468.pageManager["getSlide"](_0x573fdd)
        ? _0x573fdd
        : (_0x5625cb = _0x35b468.pageManager["getSlides"]()[0]) == null
          ? undefined
          : _0x5625cb.getId();
  _0x44e699 &&
    ((_0x409e2d = _0x35b468.pageManager["getActiveSlide"]()) == null
      ? undefined
      : _0x409e2d.getId()) !== _0x44e699 &&
    _0x35b468.pageManager["setActiveSlide"](_0x44e699);
}
function $v(_0x20bca4) {
  return (
    _0x20bca4.renderScope["mode"] === "float" &&
    !_0x20bca4.renderScope["fullscreen"] &&
    _0x20bca4.layout === "aspect-fit"
  );
}
let ey = class {
  constructor(_0x54b003, _0x5e688e) {
    ((this._instanceService = _0x54b003),
      (this._renderManagerService = _0x5e688e),
      Y(this, "childType", _0x513c12.UNIVER_SLIDE));
  }
  collectViewState(_0x1c7072) {
    var _0x57633b, _0x4661d1;
    let _0x22b8a7 = this._getSlideModel(_0x1c7072.childUnitId),
      _0x56d130 =
        (_0x22b8a7 == null ||
        (_0x57633b = _0x22b8a7.pageManager["getActiveSlide"]()) == null
          ? undefined
          : _0x57633b.getId()) ?? "";
    return {
      unitId: _0x1c7072.childUnitId,
      pageId: _0x56d130,
      scaleMode: "fit",
      zoomRatio:
        _0x22b8a7 == null || (_0x4661d1 = _0x22b8a7.getZoomRatio) == null
          ? undefined
          : _0x4661d1.call(_0x22b8a7),
    };
  }
  restoreViewState(_0x1a7e46, _0x3161c4) {
    let _0x1e9d43 = this._getSlideModel(_0x1a7e46.childUnitId);
    !_0x1e9d43 ||
      !_0x3161c4.pageId ||
      !_0x1e9d43.pageManager["getSlide"](_0x3161c4.pageId) ||
      _0x1e9d43.pageManager["setActiveSlide"](_0x3161c4.pageId);
  }
  renderPreview(_0x1a68ad) {
    var _0x1f6975, _0x2d3d08, _0x20d8e6;
    let _0x2d4f41 = this._getSlideModel(_0x1a68ad.childUnitId),
      _0x238caf =
        (_0x1f6975 = _0x1a68ad.viewState) == null
          ? undefined
          : _0x1f6975.pageId;
    _0x2d4f41 &&
      _0x238caf &&
      _0x2d4f41.pageManager["getSlide"](_0x238caf) &&
      _0x2d4f41.pageManager["setActiveSlide"](_0x238caf);
    let _0x4ae111 = this._getOrCreateRender(_0x1a68ad.childUnitId),
      _0x39c269 =
        _0x4ae111 == null ||
        (_0x2d3d08 = _0x4ae111.engine) == null ||
        (_0x20d8e6 = _0x2d3d08.getCanvasElement) == null
          ? undefined
          : _0x20d8e6.call(_0x2d3d08);
    if (
      (_0x4ae111 &&
        (!_0x39c269 || _0x39c269.width <= 1 || _0x39c269.height <= 1) &&
        (_0x39c269 = ty(_0x4ae111, _0x1a68ad.width, _0x1a68ad.height)),
      !(
        !_0x39c269 ||
        _0x39c269.width <= 1 ||
        _0x39c269.height <= 1 ||
        typeof _0x39c269.toDataURL != "function"
      ))
    )
      try {
        let _0xa1299a = _0x2d4f41
            ? _0x1c2b0c(_0x2d4f41.getSnapshot().defaultPageSize)
            : undefined,
          _0xa1d2f8 = _0xa1299a
            ? _0xa1299a.width / _0xa1299a.height
            : undefined,
          _0x5044a0 =
            iy(_0x4ae111, _0x39c269.width, _0x39c269.height) ??
            (_0xa1d2f8
              ? ny(_0x39c269.width, _0x39c269.height, _0xa1d2f8)
              : undefined);
        return (
          ay(
            _0x39c269,
            _0x1a68ad.width,
            _0x1a68ad.height,
            _0x1a68ad.dpr,
            _0x5044a0,
          ) ?? _0x39c269.toDataURL("image/png")
        );
      } catch {
        return;
      }
  }
  _getSlideModel(_0x174308) {
    return (
      this._instanceService["getUnit"](_0x174308, _0x513c12.UNIVER_SLIDE) ??
      undefined
    );
  }
  _getOrCreateRender(_0x3f4587) {
    let _0x34b099 = this._renderManagerService["getRenderUnitById"](_0x3f4587);
    if (_0x34b099) return _0x34b099;
    try {
      return this._renderManagerService["createRender"](_0x3f4587);
    } catch {
      return;
    }
  }
};
ey = $([Q(0, _0x3e617f), Q(1, _0x2db5c6)], ey);
function ty(_0x421772, _0x4a1763, _0x57d744) {
  if (typeof document > "u") return;
  let _0x5320d4 = _0x421772.engine,
    _0x59a4cd = _0x421772.scene;
  if (!(_0x5320d4 != null && _0x5320d4.mount) || !_0x5320d4.resize) return;
  let _0x42d579 = document.createElement("div");
  ((_0x42d579.style["position"] = "fixed"),
    (_0x42d579.style["left"] = "-100000px"),
    (_0x42d579.style["top"] = "-100000px"),
    (_0x42d579.style["width"] = Math.max(1, Math.round(_0x4a1763)) + "px"),
    (_0x42d579.style["height"] = Math.max(1, Math.round(_0x57d744)) + "px"),
    (_0x42d579.style["pointerEvents"] = "none"),
    (_0x42d579.dataset["embedSlidePreviewCanvasHost"] = "true"),
    document.body["appendChild"](_0x42d579));
  try {
    var _0x2764e3, _0x3ac4d0, _0xaf99bc;
    return (
      _0x5320d4.mount(_0x42d579),
      _0x5320d4.resize(),
      _0x59a4cd == null ||
        (_0x2764e3 = _0x59a4cd.makeDirty) == null ||
        _0x2764e3.call(_0x59a4cd, true),
      _0x59a4cd == null ||
        (_0x3ac4d0 = _0x59a4cd.render) == null ||
        _0x3ac4d0.call(_0x59a4cd),
      (_0xaf99bc = _0x5320d4.getCanvasElement) == null
        ? undefined
        : _0xaf99bc.call(_0x5320d4)
    );
  } finally {
    _0x42d579.remove();
  }
}
function ny(_0x447831, _0x138dc5, _0x41bd62) {
  let _0x52b389 = Math.max(1, Math.round(_0x447831)),
    _0x298ddf = Math.max(1, Math.round(_0x138dc5));
  if (!Number.isFinite(_0x41bd62) || _0x41bd62 <= 0)
    return { sx: 0, sy: 0, sWidth: _0x52b389, sHeight: _0x298ddf };
  if (_0x52b389 / _0x298ddf > _0x41bd62) {
    let _0x1fd9f3 = Math.round(_0x298ddf * _0x41bd62);
    return {
      sx: Math.max(0, Math.round((_0x52b389 - _0x1fd9f3) / 2)),
      sy: 0,
      sWidth: _0x1fd9f3,
      sHeight: _0x298ddf,
    };
  }
  let _0x3bbc04 = Math.round(_0x52b389 / _0x41bd62);
  return {
    sx: 0,
    sy: Math.max(0, Math.round((_0x298ddf - _0x3bbc04) / 2)),
    sWidth: _0x52b389,
    sHeight: _0x3bbc04,
  };
}
function ry(_0x159dcc, _0x14d50f, _0x1d3161, _0x4dc3d0, _0x695119) {
  if (
    typeof _0x1d3161.left != "number" ||
    typeof _0x1d3161.top != "number" ||
    typeof _0x1d3161.width != "number" ||
    typeof _0x1d3161.height != "number" ||
    _0x1d3161.width <= 0 ||
    _0x1d3161.height <= 0
  )
    return;
  let _0x4c0926 = Math.max(0, Math.round(_0x1d3161.left * _0x4dc3d0)),
    _0x221b6a = Math.max(0, Math.round(_0x1d3161.top * _0x695119));
  return {
    sx: _0x4c0926,
    sy: _0x221b6a,
    sWidth: Math.min(
      Math.max(1, Math.round(_0x1d3161.width * _0x4dc3d0)),
      Math.max(1, Math.round(_0x159dcc - _0x4c0926)),
    ),
    sHeight: Math.min(
      Math.max(1, Math.round(_0x1d3161.height * _0x695119)),
      Math.max(1, Math.round(_0x14d50f - _0x221b6a)),
    ),
  };
}
function iy(_0x407352, _0x174bec, _0x50512d) {
  var _0x45526d, _0x376b94;
  let _0x4c00bf = _0x407352 == null ? undefined : _0x407352.scene,
    _0xb6c6e5 =
      _0x4c00bf == null || (_0x45526d = _0x4c00bf.getObject) == null
        ? undefined
        : _0x45526d.call(_0x4c00bf, _0x24397c),
    _0x1692cc =
      _0x4c00bf == null || (_0x376b94 = _0x4c00bf.getAncestorScale) == null
        ? undefined
        : _0x376b94.call(_0x4c00bf),
    _0x220dac =
      (_0x1692cc == null ? undefined : _0x1692cc.scaleX) ??
      (_0x4c00bf == null ? undefined : _0x4c00bf.scaleX) ??
      1,
    _0x12d93d =
      (_0x1692cc == null ? undefined : _0x1692cc.scaleY) ??
      (_0x4c00bf == null ? undefined : _0x4c00bf.scaleY) ??
      _0x220dac;
  return _0xb6c6e5
    ? ry(_0x174bec, _0x50512d, _0xb6c6e5, _0x220dac, _0x12d93d)
    : undefined;
}
function ay(_0x1dc7f0, _0x540dc7, _0x10bd81, _0x237b60, _0x4211bc) {
  if (typeof document > "u" || !_0x4211bc) return;
  let _0x926d36 = document.createElement("canvas");
  ((_0x926d36.width = Math.max(
    1,
    Math.round(_0x540dc7 * Math.max(1, _0x237b60 || 1)),
  )),
    (_0x926d36.height = Math.max(
      1,
      Math.round(_0x10bd81 * Math.max(1, _0x237b60 || 1)),
    )));
  let _0x20f220 = null;
  try {
    _0x20f220 = _0x926d36.getContext("2d");
  } catch {
    return;
  }
  if (_0x20f220)
    return (
      _0x20f220.drawImage(
        _0x1dc7f0,
        _0x4211bc.sx,
        _0x4211bc.sy,
        _0x4211bc.sWidth,
        _0x4211bc.sHeight,
        0,
        0,
        _0x926d36.width,
        _0x926d36.height,
      ),
      _0x926d36.toDataURL("image/png")
    );
}
const oy = "slides-page-list-block";
function sy(_0x3e0a2c, _0x39b6e9) {
  let _0x120875 = false,
    _0x4084a9,
    _0x2a6de3,
    _0x1e44e6,
    _0x335a4f = (_0x302fc3) => {
      if (_0x120875 || _0x2a6de3 || !_0x302fc3.image) return;
      let _0x1329d3 = _y(_0x302fc3.image);
      _0x1329d3 &&
        (_0x4084a9 = vy(_0x39b6e9.hostElement, _0x4084a9, _0x1329d3));
    },
    _0x2ca46f = _0x3e0a2c.previewService["previewUpdated$"].subscribe(
      (_0x7f13fd) => {
        _0x7f13fd.embedId === _0x39b6e9.embedId &&
          (!_0x39b6e9.childUnitId ||
            _0x7f13fd.childUnitId === _0x39b6e9.childUnitId) &&
          _0x335a4f(_0x7f13fd);
      },
    );
  return (
    ly(_0x3e0a2c, _0x39b6e9).then(
      (_0x521105) => {
        if (_0x120875 || !_0x521105) return;
        let _0xf286c4 = cy(_0x3e0a2c, _0x39b6e9, _0x521105, () => _0x120875);
        if (_0xf286c4) {
          ((_0x2a6de3 = _0xf286c4.lease),
            (_0x1e44e6 = _0xf286c4.elements),
            (_0x4084a9 = undefined));
          return;
        }
        uy(_0x3e0a2c, _0x39b6e9, _0x521105, _0x335a4f, () => _0x120875).then(
          (_0x7ee49d) => {
            !_0x120875 &&
              _0x7ee49d &&
              (_0x4084a9 = vy(_0x39b6e9.hostElement, _0x4084a9, _0x7ee49d));
          },
        );
      },
      () => {},
    ),
    _0x11d17f(() => {
      ((_0x120875 = true),
        _0x2ca46f.unsubscribe(),
        _0x2a6de3 == null || _0x2a6de3.dispose(),
        (_0x2a6de3 = undefined),
        _0x1e44e6 == null || _0x1e44e6.dispose(),
        (_0x1e44e6 = undefined),
        _0x4084a9 == null || _0x4084a9.remove(),
        (_0x4084a9 = undefined));
    })
  );
}
function cy(_0x3cb874, _0x55d366, _0x1dfbc7, _0x5b887e) {
  let _0x55bb3a = dy(),
    _0x46007d;
  try {
    var _0x11434f;
    if (
      ((_0x46007d = _0x3cb874.runtimeHostLeaseService["acquire"](
        { ..._0x1dfbc7, mode: "readonly" },
        _0x55bb3a.runtimeHost,
      )),
      !_0x46007d.session["context"])
    )
      throw Error("EMBED_PRESENTATION_RUNTIME_CONTEXT_NOT_RESOLVED");
    if (_0x5b887e()) {
      (_0x46007d.dispose(), _0x55bb3a.dispose());
      return;
    }
    (_0x3cb874.activationService["focusHostForPassiveRuntime"](_0x1dfbc7),
      fy(_0x55bb3a.runtimeHost));
    let _0x1affd5 = _0x46007d.session["context"],
      _0x398ab3 =
        (_0x11434f = _0x3cb874.blockRegistry["get"](
          _0x46007d.session["childType"],
        )) == null
          ? undefined
          : _0x11434f.presentationPolicy;
    return (
      _0x55bb3a.addDisposer(
        py(_0x55bb3a.runtimeHost, _0x1affd5, _0x55d366.entry, _0x398ab3),
      ),
      _0x55d366.hostElement["replaceChildren"](_0x55bb3a.surface),
      _0x55bb3a.addDisposer(
        my(
          _0x3cb874,
          _0x46007d,
          _0x55bb3a.runtimeHost,
          _0x55bb3a.interactionGate,
          _0x55d366.entry,
          _0x398ab3,
        ),
      ),
      { lease: _0x46007d, elements: _0x55bb3a }
    );
  } catch {
    (_0x46007d == null || _0x46007d.dispose(), _0x55bb3a.dispose());
    return;
  }
}
async function ly(_0x511754, _0x390359) {
  let _0x1d6114 =
    _0x511754.embedModelService["getDescriptor"](
      _0x390359.hostUnitId,
      _0x390359.embedId,
    ) ?? gy(_0x390359);
  if (_0x1d6114) {
    try {
      _0x1d6114 = await _0x511754.restoreService["materializeDescriptor"]({
        descriptor: _0x1d6114,
      });
    } catch {}
    return _0x1d6114.childUnitId && _0x1d6114.childType != null
      ? _0x1d6114
      : undefined;
  }
}
async function uy(_0x3382bc, _0x71fc11, _0x1b45a1, _0x12165a, _0x52bac3) {
  var _0x4433d8, _0x2294b2;
  let _0x4f67e0 = await ((_0x4433d8 = _0x3382bc.sceneCanvasCaptureService) ==
  null
    ? undefined
    : _0x4433d8.captureByHostAnchorId(_0x71fc11.hostAnchorId));
  if (_0x52bac3()) return;
  if (_0x4f67e0) return _y(_0x4f67e0);
  let _0x5453b7 = _0x1b45a1.childUnitId,
    _0x1b3f3a = _0x1b45a1.childType;
  if (!_0x5453b7 || _0x1b3f3a == null) return;
  let _0x33a46e =
    (_0x2294b2 = _0x3382bc.sceneCanvasCaptureService) == null
      ? undefined
      : _0x2294b2.getContextByHostAnchorId(_0x71fc11.hostAnchorId);
  _0x12165a(
    _0x3382bc.previewService["requestPreview"]({
      descriptor: { ..._0x1b45a1, mode: "readonly" },
      childUnitId: _0x5453b7,
      childType: _0x1b3f3a,
      width: Math.max(1, _0x71fc11.width),
      height: Math.max(1, _0x71fc11.height),
      dpr: Math.max(1, Math.min(2, _0x71fc11.dpr)),
      reason: "initial",
      context: _0x33a46e,
    }),
  );
}
function dy() {
  let _0x4f13eb = document.createElement("div");
  ((_0x4f13eb.dataset["embedSlidesPresentationSurface"] = "true"),
    (_0x4f13eb.style["position"] = "absolute"),
    (_0x4f13eb.style["inset"] = "0"),
    (_0x4f13eb.style["isolation"] = "isolate"),
    (_0x4f13eb.style["overflow"] = "hidden"));
  let _0x3db307 = document.createElement("div");
  ((_0x3db307.dataset["embedPresentationRuntime"] = "true"),
    (_0x3db307.dataset["embedSlidesPresentationRuntime"] = "true"),
    (_0x3db307.style["position"] = "absolute"),
    (_0x3db307.style["inset"] = "0"),
    (_0x3db307.style["zIndex"] = "0"),
    (_0x3db307.style["overflow"] = "hidden"),
    (_0x3db307.style["pointerEvents"] = "none"));
  let _0x19b1a2 = document.createElement("div");
  ((_0x19b1a2.dataset["embedSlidesPresentationInteractionGate"] = "true"),
    (_0x19b1a2.style["position"] = "absolute"),
    (_0x19b1a2.style["inset"] = "0"),
    (_0x19b1a2.style["zIndex"] = "1"),
    (_0x19b1a2.style["pointerEvents"] = "auto"),
    (_0x19b1a2.style["touchAction"] = "none"),
    _0x4f13eb.append(_0x3db307, _0x19b1a2));
  let _0x597405 = [];
  return {
    surface: _0x4f13eb,
    runtimeHost: _0x3db307,
    interactionGate: _0x19b1a2,
    addDisposer: (_0x35d024) => _0x597405.push(_0x35d024),
    dispose: () => {
      (_0x597405
        .splice(0)
        .reverse()
        .forEach((_0x244a0f) => _0x244a0f()),
        _0x4f13eb.remove());
    },
  };
}
function fy(_0x403c32) {
  _0x403c32.style["pointerEvents"] = "none";
}
function py(_0x1c943d, _0x283ade, _0x54071f, _0x3d59fc) {
  if (_0x54071f !== oy || !(_0x3d59fc != null && _0x3d59fc.getChromeCss))
    return () => {};
  let _0x3a3390 = _0x3d59fc.getChromeCss({
    childContext: _0x283ade,
    entry: _0x54071f,
    runtimeHost: _0x1c943d,
  });
  if (!_0x3a3390) return () => {};
  let _0x29b5a2 = _0x1c943d.ownerDocument["createElement"]("style");
  return (
    (_0x29b5a2.dataset["embedSlidesPresentationChrome"] = "true"),
    (_0x29b5a2.textContent = _0x3a3390),
    _0x1c943d.prepend(_0x29b5a2),
    () => _0x29b5a2.remove()
  );
}
function my(_0x2f3cbb, _0x35786f, _0xc80d7d, _0x2e2265, _0x27726c, _0x3733f6) {
  let _0x398931 = (_0x19b557) => {
      (_0x19b557.preventDefault(), _0x19b557.stopPropagation());
    },
    _0x3aa734 = (_0x2bdf6c) => {
      if (
        _0x27726c === oy &&
        hy(
          _0xc80d7d,
          _0x35786f,
          _0x3733f6,
          _0x2bdf6c.clientX,
          _0x2bdf6c.clientY,
        )
      ) {
        (_0x2bdf6c.preventDefault(), _0x2bdf6c.stopPropagation());
        return;
      }
      _0x398931(_0x2bdf6c);
    },
    _0x14600b = (_0x3c4049) => {
      var _0x28996c;
      let _0xbf41c9 = _0x35786f.session["context"];
      if (!_0xbf41c9) return;
      let _0x55b874 = {
          ..._0xbf41c9,
          event: _0x3c4049,
          stage: "inactive",
          source: "wheel",
        },
        _0x4507ea =
          _0x2f3cbb.passiveWheelHandlerRegistry["handleWheel"](_0x55b874),
        _0x112895 =
          !_0x4507ea &&
          ((_0x28996c = _0x2f3cbb.passiveViewportRegistry["get"](
            _0xbf41c9.childType,
            _0xbf41c9.layout,
          )) == null
            ? undefined
            : _0x28996c.handleWheel(_0x55b874)) === true;
      (_0x4507ea || _0x112895) &&
        (_0x3c4049.preventDefault(),
        _0x3c4049.stopPropagation(),
        _0x3c4049.stopImmediatePropagation());
    },
    _0x2cda01 = ["pointerdown", "pointerup", "dblclick", "contextmenu"];
  return (
    _0x2cda01.forEach((_0x508331) =>
      _0x2e2265.addEventListener(_0x508331, _0x398931),
    ),
    _0x2e2265.addEventListener("click", _0x3aa734),
    _0x2e2265.addEventListener("wheel", _0x14600b, { passive: false }),
    () => {
      (_0x2cda01.forEach((_0x2beaa5) =>
        _0x2e2265.removeEventListener(_0x2beaa5, _0x398931),
      ),
        _0x2e2265.removeEventListener("click", _0x3aa734),
        _0x2e2265.removeEventListener("wheel", _0x14600b));
    }
  );
}
function hy(_0x48b4d0, _0x2de1cb, _0x20d1e3, _0x40d3ec, _0x520616) {
  let _0x35a8eb = _0x2de1cb.session["context"];
  return !_0x35a8eb ||
    !(_0x20d1e3 != null && _0x20d1e3.activateNavigationAtPoint)
    ? false
    : _0x20d1e3.activateNavigationAtPoint({
        childContext: _0x35a8eb,
        clientX: _0x40d3ec,
        clientY: _0x520616,
        entry: oy,
        runtimeHost: _0x48b4d0,
      });
}
function gy(_0x3c8c9a) {
  if (!(!_0x3c8c9a.childUnitId || _0x3c8c9a.childType == null))
    return {
      embedId: _0x3c8c9a.embedId,
      hostUnitId: _0x3c8c9a.hostUnitId,
      hostType: _0x513c12.UNIVER_SLIDE,
      entry: _0x3c8c9a.entry,
      hostAnchorId: _0x3c8c9a.hostAnchorId,
      childUnitId: _0x3c8c9a.childUnitId,
      childType: _0x3c8c9a.childType,
      mode: "readonly",
      source: {
        unitType: _0x3c8c9a.childType,
        ref: {
          file: { kind: _0x3729d1.SELF },
          unit: {
            selector: _0x3c8c9a.childUnitId,
            type: _0x392600(_0x3c8c9a.childType),
          },
        },
      },
      sourceMeta: {
        floating: _0x3c8c9a.entry === "slides-floating-object" && {
          enabled: true,
          layout: "scroll-contained",
          fullscreen: false,
        },
        tab: _0x3c8c9a.entry === "slides-page-list-block" && {
          enabled: true,
          container: "slide-page-list",
          replaceHostMenu: true,
          hideHostFxBar: true,
          lockHostRibbon: true,
        },
      },
    };
}
function _y(_0x45822b) {
  if (typeof _0x45822b == "string") return _0x45822b;
  if (typeof HTMLCanvasElement < "u" && _0x45822b instanceof HTMLCanvasElement)
    try {
      return _0x45822b.toDataURL("image/png");
    } catch {
      return;
    }
  if (
    typeof ImageBitmap < "u" &&
    _0x45822b instanceof ImageBitmap &&
    typeof document < "u"
  ) {
    let _0x3b63fb = document.createElement("canvas");
    ((_0x3b63fb.width = _0x45822b.width),
      (_0x3b63fb.height = _0x45822b.height));
    let _0x48b3fd = _0x3b63fb.getContext("2d");
    return _0x48b3fd
      ? (_0x48b3fd.drawImage(_0x45822b, 0, 0), _0x3b63fb.toDataURL("image/png"))
      : undefined;
  }
}
function vy(_0x36afef, _0x339324, _0x5d315e) {
  let _0x464610 = _0x339324 ?? document.createElement("img");
  return (
    (_0x464610.alt = ""),
    (_0x464610.dataset["embedSlidesPresentationPreviewImage"] = "true"),
    (_0x464610.style["display"] = "block"),
    (_0x464610.style["width"] = "100%"),
    (_0x464610.style["height"] = "100%"),
    (_0x464610.style["objectFit"] = "fill"),
    (_0x464610.style["pointerEvents"] = "none"),
    (_0x464610.src = _0x5d315e),
    _0x464610.parentElement !== _0x36afef &&
      _0x36afef.replaceChildren(_0x464610),
    _0x464610
  );
}
let yy = class {
  constructor(_0x56af1d, _0x46582b) {
    ((this._instanceService = _0x56af1d),
      (this._renderManagerService = _0x46582b),
      Y(this, "childType", _0x513c12.UNIVER_SLIDE),
      Y(this, "supportedLayouts", ["aspect-fit"]));
  }
  mount(_0x4c36ac) {
    var _0x41e00a;
    let _0x132f8b = this._getSlideModel(_0x4c36ac.childUnitId);
    if (!_0x132f8b) return;
    (_0x41e00a = _0x4c36ac.viewState) != null &&
      _0x41e00a.pageId &&
      _0x132f8b.pageManager["getSlide"](_0x4c36ac.viewState["pageId"]) &&
      _0x132f8b.pageManager["setActiveSlide"](_0x4c36ac.viewState["pageId"]);
    let _0x2f091b = Fs(by(_0x4c36ac));
    if (!_0x2f091b) return;
    let _0x5a7193 = _0x4c36ac.roots["canvas"]
      ? Kc(this._renderManagerService, _0x4c36ac.childUnitId, _0x2f091b)
      : undefined;
    if (!_0x5a7193) {
      _0x2f091b.dispose();
      return;
    }
    _0x4c36ac.roots["canvas"] &&
      ((_0x4c36ac.roots["canvas"].dataset["embedChildRenderUnitId"] =
        _0x4c36ac.childUnitId),
      (_0x4c36ac.roots["canvas"].dataset["embedChildRenderMode"] =
        "slide-readonly-preview-shell"));
    let _0x4095d6 = Sl(_0x4c36ac.roots["content"]);
    return (
      (_0x4c36ac.roots["content"].dataset["embedChildRenderUnitId"] =
        _0x4c36ac.childUnitId),
      (_0x4c36ac.roots["content"].dataset["embedChildRenderMode"] =
        "slide-readonly-preview"),
      _0x4095d6.render(
        _0x29e1d8(fl, {
          injector: _0x2f091b,
          mountContainer: _0x4c36ac.roots["root"],
          embedId: _0x4c36ac.embedId,
          passThroughWheelGestures: true,
          children: _0x29e1d8(_0x3af49d, {
            unitId: _0x4c36ac.childUnitId,
            render: _0x5a7193,
          }),
        }),
      ),
      _0x11d17f(() => {
        var _0x6c7e72, _0x1da9b7, _0x3c37e6, _0x3dfab8;
        try {
          var _0x2943d9, _0x59db0c;
          _0x5a7193 == null ||
            (_0x59db0c = (_0x2943d9 = _0x5a7193.engine).unmount) == null ||
            _0x59db0c.call(_0x2943d9);
        } catch {}
        ((_0x6c7e72 = (_0x1da9b7 = this._renderManagerService).removeRender) ==
          null || _0x6c7e72.call(_0x1da9b7, _0x4c36ac.childUnitId),
          Cl(_0x4095d6),
          _0x4c36ac.roots["content"].removeAttribute(
            "data-embed-child-render-unit-id",
          ),
          _0x4c36ac.roots["content"].removeAttribute(
            "data-embed-child-render-mode",
          ),
          (_0x3c37e6 = _0x4c36ac.roots["canvas"]) == null ||
            _0x3c37e6.removeAttribute("data-embed-child-render-unit-id"),
          (_0x3dfab8 = _0x4c36ac.roots["canvas"]) == null ||
            _0x3dfab8.removeAttribute("data-embed-child-render-mode"),
          _0x2f091b.dispose());
      })
    );
  }
  handleWheel(_0x276d3f) {
    var _0x565392, _0x153d0d;
    let _0x5cc6a8 = this._getSlideModel(_0x276d3f.childUnitId);
    if (!_0x5cc6a8) return false;
    let _0x88dc1d =
      Math.abs(_0x276d3f.event["deltaY"]) >= Math.abs(_0x276d3f.event["deltaX"])
        ? _0x276d3f.event["deltaY"]
        : _0x276d3f.event["deltaX"];
    if (_0x88dc1d === 0) return false;
    let _0x30fd62 = xy(_0x5cc6a8);
    if (_0x30fd62.length < 2) return true;
    let _0x233628 =
        ((_0x565392 = _0x5cc6a8.pageManager["getActiveSlide"]()) == null
          ? undefined
          : _0x565392.getId()) ?? _0x30fd62[0],
      _0x386de1 = Math.max(0, _0x30fd62.indexOf(_0x233628)),
      _0x4cc90f =
        _0x30fd62[
          Math.max(
            0,
            Math.min(
              _0x30fd62.length - 1,
              _0x386de1 + (_0x88dc1d > 0 ? 1 : -1),
            ),
          )
        ];
    return !_0x4cc90f || _0x4cc90f === _0x233628
      ? true
      : (_0x5cc6a8.pageManager["setActiveSlide"](_0x4cc90f),
        _0x276d3f.updateViewState({
          unitId: _0x276d3f.childUnitId,
          pageId: _0x4cc90f,
          scaleMode: "fit",
          zoomRatio:
            (_0x153d0d = _0x5cc6a8.getZoomRatio) == null
              ? undefined
              : _0x153d0d.call(_0x5cc6a8),
        }),
        true);
  }
  _getSlideModel(_0x3760f2) {
    return (
      this._instanceService["getUnit"](_0x3760f2, _0x513c12.UNIVER_SLIDE) ??
      undefined
    );
  }
};
yy = $([Q(0, _0x3e617f), Q(1, _0x2db5c6)], yy);
function by(_0x4085f2) {
  let _0xdaa253 = () => {};
  return {
    descriptor: _0x4085f2.descriptor,
    layout: _0x4085f2.layout,
    injector: _0x4085f2.injector,
    hostElement: _0x4085f2.roots["root"],
    container: _0x4085f2.roots["root"],
    hostUnitId: _0x4085f2.hostUnitId,
    embedId: _0x4085f2.embedId,
    childUnitId: _0x4085f2.childUnitId,
    childType: _0x4085f2.childType,
    renderScope: {
      hostUnitId: _0x4085f2.hostUnitId,
      hostAnchorId: _0x4085f2.descriptor["hostAnchorId"],
      embedId: _0x4085f2.embedId,
      childUnitId: _0x4085f2.childUnitId,
      childType: _0x4085f2.childType,
      layout: _0x4085f2.layout,
      mode: "float",
      rootElement: _0x4085f2.roots["root"],
      contentRoot: _0x4085f2.roots["content"],
      canvasRoot: _0x4085f2.roots["canvas"],
      active$: _0x2bd05a(false),
    },
    runtimeScope: {
      descriptor: _0x4085f2.descriptor,
      host: {
        unitId: _0x4085f2.hostUnitId,
        type: _0x4085f2.descriptor["hostType"],
        anchorId: _0x4085f2.descriptor["hostAnchorId"],
        entry: _0x4085f2.descriptor["entry"],
        layout: "float",
      },
      child: { unitId: _0x4085f2.childUnitId, type: _0x4085f2.childType },
      injector: _0x4085f2.injector,
      roots: {
        root: _0x4085f2.roots["root"],
        content: _0x4085f2.roots["content"],
        canvas: _0x4085f2.roots["canvas"],
        overlay: _0x4085f2.roots["root"],
        popup: _0x4085f2.roots["root"],
      },
      activate: _0xdaa253,
      deactivate: _0xdaa253,
      dispose: _0xdaa253,
    },
  };
}
function xy(_0x129af6) {
  var _0x75dc96, _0x2432f7, _0x453b8a;
  let _0x5d0022 =
    (_0x75dc96 = _0x129af6.getSnapshot) == null
      ? undefined
      : _0x75dc96.call(_0x129af6).slideOrder;
  return Array.isArray(_0x5d0022) && _0x5d0022.length > 0
    ? _0x5d0022
    : (((_0x2432f7 = (_0x453b8a = _0x129af6.pageManager).getSlides) == null
        ? undefined
        : _0x2432f7
            .call(_0x453b8a)
            .map((_0x9bdd16) => _0x9bdd16.getId())
            .filter(Boolean)) ?? []);
}
function Sy(_0x579ef8) {
  zm(_0x579ef8, "slides-ui.embed", Cy);
}
function Cy(_0xca6e8) {
  let _0x2af53e = _0xca6e8.get(_0x4294fc),
    _0x55c3d3 = _0xca6e8.get(Rc),
    _0x5058d1 = _0xca6e8.get(Ic),
    _0x2456f9 = _0xca6e8.get(bs),
    _0x35ce03 = _0xca6e8.get(Lc),
    _0x48881a = _0xca6e8.get(cd),
    _0x2fdda0 = _0xca6e8.get(Cd),
    _0x1fc00c = _0xca6e8.get(Im),
    _0x4c83f3 = _0xca6e8.has(_0x4466c1) ? _0xca6e8.get(_0x4466c1) : undefined,
    _0x24b88b = _0xca6e8.has(_0x3e617f) ? _0xca6e8.get(_0x3e617f) : undefined;
  (_0xca6e8.has(_0x419276) ||
    _0xca6e8.add([
      _0x419276,
      {
        useFactory: () =>
          wy({
            embedModelService: _0xca6e8.get(_0x588de6),
            mountService: _0xca6e8.get(cl),
            activationService: _0xca6e8.get(dl),
            blockRegistry: _0xca6e8.get(bs),
            restoreService: _0xca6e8.get(ud),
            previewService: _0xca6e8.get(cd),
            runtimeHostLeaseService: _0xca6e8.get(Vf),
            passiveViewportRegistry: _0xca6e8.get(Cd),
            passiveWheelHandlerRegistry: _0xca6e8.get(wd),
            univerInstanceService: _0x24b88b,
            sceneCanvasCaptureService: _0xca6e8.has(Yc)
              ? _0xca6e8.get(Yc)
              : undefined,
          }),
      },
    ]),
    _0xca6e8.has(_0x22aff5) ||
      _0xca6e8.add([_0x22aff5, { useFactory: () => _0xca6e8.get(xs) }]),
    _0xca6e8.has(_0x4cf419) ||
      _0xca6e8.add([_0x4cf419, { useFactory: () => _0xca6e8.get(cl) }]),
    _0xca6e8.has(_0x16f632) ||
      _0xca6e8.add([_0x16f632, { useFactory: () => _0xca6e8.get(dl) }]),
    _0xca6e8.has(_0x581f65) ||
      _0xca6e8.add([_0x581f65, { useFactory: () => _0xca6e8.get(_0xd33e59) }]),
    _0xca6e8.has(_0x1f7db7) ||
      _0xca6e8.add([_0x1f7db7, { useFactory: () => _0xca6e8.get(X) }]),
    _0xca6e8.has(_0x344a4e) ||
      _0xca6e8.add([
        _0x344a4e,
        {
          useFactory: () => ({
            render: (_0x319c2f) => {
              let { data: _0xdd403b } = _0x319c2f;
              return _0xc3e5c7(Lf, { ..._0x319c2f, data: _0xdd403b });
            },
          }),
        },
      ]),
    [
      _0x3795b5(_0x4c83f3, _0x24b88b, () =>
        _0xca6e8.has(_0x5d8dc3) ? _0xca6e8.get(_0x5d8dc3) : undefined,
      ),
      Hv(_0x4c83f3, _0x24b88b, _0xca6e8.get(_0x419276)),
    ].forEach((_0x10152f) => {
      _0x2af53e.get(_0x10152f.hostType, _0x10152f.entry) ||
        _0x2af53e.register(_0x10152f);
    }),
    [Uv(), Wv()].forEach((_0x2a5aef) => {
      _0x55c3d3.get(_0x2a5aef.hostType, _0x2a5aef.entry) ||
        _0x55c3d3.register(_0x2a5aef);
    }));
  let _0x27f828 = Jv(_0xca6e8.get(_0x42e186));
  _0x5058d1.get(_0x27f828.childType) || _0x5058d1.register(_0x27f828);
  let _0x2dbc24 = Iv();
  (_0x2456f9.get(_0x2dbc24.childType) || _0x2456f9.register(_0x2dbc24),
    Bv().forEach((_0x567d5) => {
      _0x35ce03.hasExact(
        _0x567d5.hostType,
        _0x567d5.entry,
        _0x567d5.childType,
      ) || _0x35ce03.register(_0x567d5);
    }),
    _0x48881a.registerProvider(_0xca6e8.createInstance(ey)),
    _0x2fdda0.get(_0x513c12.UNIVER_SLIDE) || _0x2fdda0.register(qv()),
    _0x1fc00c.get(_0x513c12.UNIVER_SLIDE) ||
      _0x1fc00c.register(_0xca6e8.createInstance(yy)));
}
function wy(_0x226889) {
  return {
    mountPageList: (_0xe7035a) => {
      var _0x4009a5, _0x30ed74;
      let _0x63c2eb = {
          embedId: _0xe7035a.embedId,
          hostUnitId: _0xe7035a.hostUnitId,
          hostType: _0x513c12.UNIVER_SLIDE,
          entry: "slides-page-list-block",
          hostAnchorId: _0xe7035a.hostAnchorId,
          childUnitId: _0xe7035a.childUnitId,
          childType: _0xe7035a.childType,
          source: {
            unitType: _0xe7035a.childType,
            ref: {
              file: { kind: _0x3729d1.SELF },
              unit: {
                selector: _0xe7035a.childUnitId,
                type: _0x392600(_0xe7035a.childType),
              },
            },
          },
          sourceMeta: {
            floating: false,
            tab: {
              enabled: true,
              container: "slide-page-list",
              replaceHostMenu: true,
              hideHostFxBar: true,
              lockHostRibbon: true,
            },
          },
        },
        _0x43e999 =
          (_0x4009a5 = (_0x30ed74 = _0x226889.mountService).getSession) == null
            ? undefined
            : _0x4009a5.call(_0x30ed74, _0xe7035a.embedId),
        _0x1c1730 = () => {
          var _0x3ba037, _0x251bb9;
          ((_0x3ba037 = (_0x251bb9 = _0x226889.mountService).getSession) ==
            null ||
          (_0x3ba037 = _0x3ba037.call(_0x251bb9, _0xe7035a.embedId)) == null
            ? undefined
            : _0x3ba037.hostElement) === _0xe7035a.hostElement &&
            (_0x226889.activationService["clearTab"](_0xe7035a.embedId),
            _0x226889.mountService["unmount"](_0xe7035a.embedId));
        };
      return (_0x43e999 == null ? undefined : _0x43e999.hostUnitId) ===
        _0xe7035a.hostUnitId &&
        _0x43e999.entry === "slides-page-list-block" &&
        _0x43e999.childUnitId === _0xe7035a.childUnitId &&
        _0x43e999.hostElement === _0xe7035a.hostElement
        ? (_0x226889.activationService["activateTab"](_0x63c2eb),
          _0x11d17f(_0x1c1730))
        : (_0x226889.mountService["mountIntoHostElement"](
            _0x63c2eb,
            _0xe7035a.hostElement,
          ),
          _0x226889.activationService["activateTab"](_0x63c2eb),
          _0x11d17f(_0x1c1730));
    },
    mountFloatingObject: (_0x37eaca) => {
      let _0x521099 = _0x226889.embedModelService["getDescriptor"](
        _0x37eaca.hostUnitId,
        _0x37eaca.embedId,
      ) ?? {
        embedId: _0x37eaca.embedId,
        hostUnitId: _0x37eaca.hostUnitId,
        hostType: _0x513c12.UNIVER_SLIDE,
        entry: "slides-floating-object",
        hostAnchorId: _0x37eaca.hostAnchorId,
        childUnitId: _0x37eaca.childUnitId,
        childType: _0x37eaca.childType,
        source: {
          unitType: _0x37eaca.childType,
          ref: {
            file: { kind: _0x3729d1.SELF },
            unit: {
              selector: _0x37eaca.childUnitId,
              type: _0x392600(_0x37eaca.childType),
            },
          },
        },
        sourceMeta: {
          floating: {
            enabled: true,
            layout: "scroll-contained",
            fullscreen: true,
          },
          tab: false,
        },
      };
      return (
        _0x226889.mountService["mountIntoHostElement"](
          _0x521099,
          _0x37eaca.hostElement,
        ),
        _0x11d17f(() => {
          _0x226889.mountService["unmount"](_0x37eaca.embedId);
        })
      );
    },
    clearAndUnmount: (_0x4f1264) => {
      (_0x226889.activationService["clearTab"](_0x4f1264),
        _0x226889.mountService["unmount"](_0x4f1264));
    },
    unmountFloatingSessions: (_0x424a78) => {
      _0x226889.mountService["listSessions"]()
        .filter(
          (_0x2065cf) =>
            _0x2065cf.hostUnitId === _0x424a78 &&
            _0x2065cf.entry === "slides-floating-object",
        )
        .forEach((_0x49b43b) =>
          _0x226889.mountService["unmount"](_0x49b43b.embedId),
        );
    },
    listSessions: () =>
      _0x226889.mountService["listSessions"]().map((_0x5349e3) => ({
        embedId: _0x5349e3.embedId,
        hostUnitId: _0x5349e3.hostUnitId,
        entry: _0x5349e3.entry,
        childType: _0x5349e3.childType,
        childUnitId: _0x5349e3.childUnitId,
      })),
    capturePreviewByHostAnchorId: (_0x152cc4, _0x52a8c5) =>
      Ty(_0x226889, _0x152cc4, _0x52a8c5),
    mountPresentationEmbed: (_0x1a2560) => sy(_0x226889, _0x1a2560),
  };
}
async function Ty(_0x28b664, _0x49cddb, _0x4247cc) {
  var _0x1ca27b, _0x371993, _0x25ac0e;
  let _0x11ce0c =
    (_0x1ca27b = _0x28b664.sceneCanvasCaptureService) == null
      ? undefined
      : _0x1ca27b.getContextByHostAnchorId(_0x49cddb);
  _0x11ce0c && (await Qf(_0x11ce0c));
  let _0x28966b = await ((_0x371993 = _0x28b664.sceneCanvasCaptureService) ==
  null
    ? undefined
    : _0x371993.captureByHostAnchorId(_0x49cddb));
  if (_0x28966b) return _y(_0x28966b);
  if (!_0x4247cc) return;
  let _0x13b7da = await Dy(_0x28b664, _0x49cddb, _0x4247cc);
  if (!_0x13b7da) return;
  let _0x693109 = _0x13b7da.childUnitId ?? _0x4247cc.childUnitId,
    _0x42a005 = _0x13b7da.childType ?? _0x4247cc.childType;
  if (!_0x693109 || _0x42a005 == null) return;
  let _0xca488c = Ey(_0x28b664, _0x13b7da, _0x49cddb, _0x4247cc),
    _0x179263 = _0x28b664.previewService["requestPreview"]({
      descriptor: { ..._0x13b7da, mode: "readonly" },
      childUnitId: _0x693109,
      childType: _0x42a005,
      width: _0xca488c.width,
      height: _0xca488c.height,
      dpr: Math.max(1, Math.min(3, _0x4247cc.dpr)),
      reason: "initial",
      context:
        (_0x25ac0e = _0x28b664.sceneCanvasCaptureService) == null
          ? undefined
          : _0x25ac0e.getContextByHostAnchorId(_0x49cddb),
    }),
    _0x289de6 = _0x179263.image ? _y(_0x179263.image) : undefined;
  return _0x179263.status === "pending"
    ? Oy(_0x28b664.previewService, _0x179263, _0x693109)
    : _0x289de6;
}
function Ey(_0x286c42, _0x584600, _0x241190, _0x3c62aa) {
  var _0x31d463, _0x583fc8;
  let _0x499966 = {
    width: Math.max(1, _0x3c62aa.width),
    height: Math.max(1, _0x3c62aa.height),
  };
  if (_0x584600.entry !== _0x3a477c.SlidesPageListBlock) return _0x499966;
  let _0x3cf9cf =
    (_0x31d463 = _0x286c42.univerInstanceService) == null
      ? undefined
      : _0x31d463.getUnit(_0x3c62aa.hostUnitId, _0x513c12.UNIVER_SLIDE);
  if (!_0x3cf9cf) return _0x499966;
  let _0x2b0352 =
      (_0x583fc8 = _0x3cf9cf.pageManager["getSlide"](_0x241190)) == null
        ? undefined
        : _0x583fc8.getData(),
    _0x505c47 = _0x1c2b0c(
      (_0x2b0352 == null ? undefined : _0x2b0352.pageSize) ??
        _0x3cf9cf.getSnapshot().defaultPageSize,
    );
  return {
    width: Math.max(1, _0x505c47.width),
    height: Math.max(1, _0x505c47.height),
  };
}
async function Dy(_0x246a62, _0x5e04bd, _0xa549e7) {
  let _0x1faae8 =
    _0x246a62.embedModelService["getDescriptor"](
      _0xa549e7.hostUnitId,
      _0xa549e7.embedId,
    ) ??
    gy({
      hostUnitId: _0xa549e7.hostUnitId,
      embedId: _0xa549e7.embedId,
      hostAnchorId: _0x5e04bd,
      childUnitId: _0xa549e7.childUnitId,
      childType: _0xa549e7.childType,
      entry: _0x3a477c.SlidesPageListBlock,
    });
  if (_0x1faae8) {
    try {
      _0x1faae8 = await _0x246a62.restoreService["materializeDescriptor"]({
        descriptor: _0x1faae8,
      });
    } catch {}
    return _0x1faae8;
  }
}
function Oy(_0x1c1b9e, _0x20679b, _0x2710c3) {
  return new Promise((_0x3e1b1c) => {
    let _0x56985c = false,
      _0xdc1aef,
      _0x1b6d53,
      _0xbe3ca5 = (_0x35c960) => {
        _0x56985c ||
          ((_0x56985c = true),
          globalThis.clearTimeout(_0x1b6d53),
          _0xdc1aef == null || _0xdc1aef.unsubscribe(),
          _0x3e1b1c(_0x35c960));
      };
    ((_0x1b6d53 = globalThis.setTimeout(() => _0xbe3ca5(undefined), 5000)),
      (_0xdc1aef = _0x1c1b9e.previewUpdated$["subscribe"]({
        next: (_0x58984a) => {
          _0x58984a.embedId !== _0x20679b.embedId ||
            _0x58984a.childUnitId !== _0x2710c3 ||
            _0x58984a.revision < _0x20679b.revision ||
            _0x58984a.status === "pending" ||
            _0xbe3ca5(_0x58984a.image ? _y(_0x58984a.image) : undefined);
        },
        complete: () => _0xbe3ca5(undefined),
      })));
  });
}
function ky(_0x3e2a60) {
  (a_(_0x3e2a60), Tv(_0x3e2a60), Sy(_0x3e2a60), xg(_0x3e2a60), Lg(_0x3e2a60));
}
function Ay(_0x328f37) {
  Cg(_0x328f37);
}
const jy = [0, 16, 100, 300, 1000];
async function My(_0x17b198, _0x32d5cf) {
  var _0x20a6bb;
  let {
      instanceService: _0x24c08b,
      childUnitId: _0x183c68,
      childType: _0x26be91,
      restoreUnitId: _0xabe62d,
      shouldRestore: _0x455355,
      settleDelayMs: _0x28a22b = 16,
      deferredRestoreDelaysMs: _0x244ce4 = _0xabe62d ? jy : [],
    } = _0x17b198,
    _0x5022dc = _0x24c08b.getCurrentUnitOfType(_0x26be91),
    _0x32bbe9 =
      ((_0x20a6bb = _0x24c08b.getFocusedUnit()) == null
        ? undefined
        : _0x20a6bb.getUnitId()) ??
      null ??
      _0xabe62d ??
      null;
  (_0x24c08b.setCurrentUnitForType(_0x183c68), _0x24c08b.focusUnit(_0x183c68));
  let _0x58c059 = () => {
    (_0x455355 && !_0x455355()) ||
      (_0x5022dc &&
        _0x5022dc.getUnitId() !== _0x183c68 &&
        _0x24c08b.setCurrentUnitForType(_0x5022dc.getUnitId()),
      _0xabe62d && _0x24c08b.setCurrentUnitForType(_0xabe62d),
      _0x24c08b.focusUnit(_0x32bbe9));
  };
  try {
    let _0x5c271a = await _0x32d5cf();
    return (_0x28a22b > 0 && (await Ny(_0x28a22b)), _0x5c271a);
  } finally {
    (_0x58c059(), Py(_0x58c059, _0x244ce4));
  }
}
function Ny(_0x542ff4) {
  return new Promise((_0x2b5641) => setTimeout(_0x2b5641, _0x542ff4));
}
function Py(_0x41a1f3, _0x44e641) {
  _0x44e641.forEach((_0x45dbb9) => {
    globalThis.setTimeout(_0x41a1f3, _0x45dbb9);
  });
}
const Fy = new WeakMap();
let Iy = 0;
function Ly(_0x1b42db, _0xd2eac4) {
  return _0x1b42db.has(Vy)
    ? _0x1b42db.get(Vy).register(_0xd2eac4)
    : zy(_0x1b42db, _0xd2eac4);
}
function Ry(_0xab7ed1) {
  if (!_0xab7ed1.has(Vy)) return;
  let _0x1af31a = Fy.get(_0xab7ed1);
  _0x1af31a != null &&
    _0x1af31a.size &&
    ([..._0x1af31a.values()]
      .sort((_0x48b692, _0x59fd28) => _0x48b692.index - _0x59fd28.index)
      .forEach(({ contribution: _0xbcd993 }) => Ly(_0xab7ed1, _0xbcd993)),
    Fy.delete(_0xab7ed1));
}
function zy(_0x3e70a2, _0x117675) {
  let _0x4829a4 = { contribution: _0x117675, index: Iy++ },
    _0x210cd1 = By(_0x117675, _0x4829a4.index),
    _0x277b07 = _0x3e70a2,
    _0x4f7b02 = Fy.get(_0x277b07) ?? new Map();
  return (
    _0x4f7b02.set(_0x210cd1, _0x4829a4),
    Fy.set(_0x277b07, _0x4f7b02),
    _0x11d17f(() => {
      let _0x22775f = Fy.get(_0x277b07);
      (_0x22775f == null ? undefined : _0x22775f.get(_0x210cd1)) ===
        _0x4829a4 && _0x22775f.delete(_0x210cd1);
    })
  );
}
function By(_0x42e097, _0x2c6e41) {
  return _0x42e097.id
    ? _0x42e097.childType + ":" + _0x42e097.id
    : _0x42e097.childType + ":anonymous:" + _0x2c6e41;
}
let Vy = class {
  constructor(_0x37dfc5, _0x18f158) {
    ((this._injector = _0x37dfc5),
      (this._focusCoordinator = _0x18f158),
      Y(this, "_contributions", new Map()),
      Y(this, "_nextIndex", 0));
  }
  register(_0x2662fd) {
    if (
      _0x2662fd.id &&
      this._hasContributionId(_0x2662fd.childType, _0x2662fd.id)
    )
      return _0x11d17f(() => {});
    let _0x3da133 = { contribution: _0x2662fd, index: this._nextIndex++ },
      _0x46e5e9 = this._contributions["get"](_0x2662fd.childType) ?? [];
    return (
      _0x46e5e9.push(_0x3da133),
      _0x46e5e9.sort(Hy),
      this._contributions["set"](_0x2662fd.childType, _0x46e5e9),
      _0x11d17f(() => {
        let _0x3664fd = this._contributions["get"](_0x2662fd.childType);
        if (!_0x3664fd) return;
        let _0x3cc8c4 = _0x3664fd.filter(
          (_0x718bfd) => _0x718bfd !== _0x3da133,
        );
        _0x3cc8c4.length
          ? this._contributions["set"](_0x2662fd.childType, _0x3cc8c4)
          : this._contributions["delete"](_0x2662fd.childType);
      })
    );
  }
  getAll(_0x195fe0) {
    return (this._contributions["get"](_0x195fe0) ?? []).map(
      (_0x2bb9bd) => _0x2bb9bd.contribution,
    );
  }
  async prepare(_0x4bc508) {
    let _0x520bf1 = this.getAll(_0x4bc508.childType);
    _0x520bf1.length &&
      (await My(
        {
          instanceService: this._injector["get"](_0x3e617f),
          childUnitId: _0x4bc508.childUnitId,
          childType: _0x4bc508.childType,
          restoreUnitId: _0x4bc508.restoreUnitId,
          settleDelayMs: _0x4bc508.settleDelayMs,
          shouldRestore: () =>
            !this._focusCoordinator["isChildUnitInActiveSession"](
              _0x4bc508.childUnitId,
            ),
        },
        async () => {
          for (let _0xe5c0d3 of _0x520bf1)
            _0xe5c0d3.prepare &&
              (await _0xe5c0d3.prepare({
                injector: this._injector,
                childUnitId: _0x4bc508.childUnitId,
                childType: _0x4bc508.childType,
                descriptor: _0x4bc508.descriptor,
              }));
        },
      ));
  }
  _hasContributionId(_0x10e48b, _0x2cb1f3) {
    return (this._contributions["get"](_0x10e48b) ?? []).some(
      (_0x2db39f) => _0x2db39f.contribution["id"] === _0x2cb1f3,
    );
  }
};
Vy = $([Q(0, _0x1a6fa3(_0x20cff5)), Q(1, _0x1a6fa3(X))], Vy);
function Hy(_0x3963d6, _0x5a5627) {
  return (
    (_0x3963d6.contribution["order"] ?? _0x3963d6.index) -
      (_0x5a5627.contribution["order"] ?? _0x5a5627.index) ||
    _0x3963d6.index - _0x5a5627.index
  );
}
function Uy() {
  return [];
}
let Wy = class {
  constructor(_0x983c19, _0x88ddca) {
    ((this._focusOwnerService = _0x983c19),
      (this._undoRedoService = _0x88ddca));
  }
  pushUndoRedoForChild(_0x4106f4) {
    let _0x38aa0f = this.resolveStackUnitId(_0x4106f4.unitID);
    return (
      this._undoRedoService["pushUndoRedo"]({
        ..._0x4106f4,
        unitID: _0x38aa0f,
      }),
      { stackUnitId: _0x38aa0f, routedToHost: _0x38aa0f !== _0x4106f4.unitID }
    );
  }
  resolveStackUnitId(_0x105f8f) {
    let _0x3389ed = this._focusOwnerService["getFocusOwner"]();
    return !_0x3389ed || _0x3389ed.childUnitId !== _0x105f8f
      ? _0x105f8f
      : _0x3389ed.hostUnitId;
  }
};
Wy = $([Q(0, _0x1a6fa3(_0xd33e59)), Q(1, _0x44c88a)], Wy);
let Gy = class extends _0x1c5028 {
  constructor(_0x2e17f3 = Su, _0x574097, _0x18d244, _0x2623bf) {
    (super(),
      (this._config = _0x2e17f3),
      (this._injector = _0x574097),
      (this._configService = _0x18d244),
      (this._univerInstanceService = _0x2623bf));
    let { ..._0x480a05 } = _0xf54cfb({}, Su, this._config);
    this._configService["setConfig"]("embed-ui.config", _0x480a05);
  }
  onStarting() {
    (this._enableEmbedUnitLeasePolicy(),
      this._registerServices(),
      this._registerProductUIContributions(),
      this._registerLateProductUIContributions(),
      this._registerProductMenus(),
      this._flushPendingContributions(),
      this._registerFloatingMenus(),
      this._touchServices(),
      this._registerDefaultHostToolbar());
  }
  onReady() {
    (this._flushPendingContributions(), this._injector["get"](lm));
  }
  _registerServices() {
    (this._injector["has"](_0x2fd4b7) ||
      this._injector["add"]([_0x2fd4b7, { useClass: _0x1e4ad0 }]),
      this._injector["has"](_0xdae6cc) || this._injector["add"]([_0xdae6cc]),
      this._injector["has"](_0x41ff07) || this._injector["add"]([_0x41ff07]),
      [
        [Rc],
        [ud],
        [Vy],
        [em],
        [dl],
        [Ic],
        [bs],
        [xs],
        [ld],
        [Lc],
        [cd],
        [Bf],
        [gu],
        [Ss],
        [hd],
        [Es],
        [rm],
        [im],
        [am],
        [sm],
        [lm],
        [Mm],
        [tm],
        [cl],
        [zc],
        [wd],
        [Cd],
        [lp],
        [Zl],
        [Im],
        [Ds],
        [X],
        [Vf],
        [Yc],
        [ks],
        [Wy],
      ].forEach((_0x128623) => this._injector["add"](_0x128623)),
      this._injector["has"](_0x43a84f) ||
        this._injector["add"]([
          _0x43a84f,
          { useFactory: () => this._injector["get"](Es) },
        ]),
      this._injector["has"](_0xdd3bd4) ||
        this._injector["add"]([
          _0xdd3bd4,
          { useFactory: () => this._injector["get"](X) },
        ]),
      this._injector["has"](_0x3326d1) ||
        this._injector["add"]([
          _0x3326d1,
          { useFactory: () => this._injector["get"](Es) },
        ]),
      this._injector["has"](_0x14a662) ||
        this._injector["add"]([
          _0x14a662,
          { useFactory: () => this._injector["get"](X) },
        ]),
      this._injector["has"](_0x944caa) ||
        this._injector["add"]([
          _0x944caa,
          { useFactory: () => this._injector["get"](ld) },
        ]));
  }
  _registerProductMenus() {
    Fm(this._injector).forEach((_0x4612cb) => this.disposeWithMe(_0x4612cb));
  }
  _registerProductUIContributions() {
    ky(this._injector);
  }
  _registerLateProductUIContributions() {
    let _0x5cf650 = this._univerInstanceService["getTypeOfUnitAdded$"](
      _0x513c12.UNIVER_BASE,
    ).subscribe(() => Ay(this._injector));
    this.disposeWithMe(_0x11d17f(() => _0x5cf650.unsubscribe()));
  }
  _flushPendingContributions() {
    (Bm(this._injector), Jl(this._injector), Ry(this._injector));
  }
  _registerFloatingMenus() {
    var _0x17da3e;
    let _0x15a449 = this._injector["get"](Lc);
    ((_0x17da3e = this._config["defaults"]) == null
      ? undefined
      : _0x17da3e.floatingMenus) !== false &&
      Uy().forEach((_0x3c705c) => {
        _0x15a449.hasExact(
          _0x3c705c.hostType,
          _0x3c705c.entry,
          _0x3c705c.childType,
        ) || _0x15a449.register(_0x3c705c);
      });
  }
  _touchServices() {
    _0xddfaf1(this._injector, [
      [Rc],
      [ud],
      [Vy],
      [em],
      [dl],
      [Ic],
      [bs],
      [xs],
      [Lc],
      [cd],
      [Bf],
      [gu],
      [Ss],
      [hd],
      [rm],
      [im],
      [am],
      [sm],
      [Mm],
      [tm],
      [cl],
      [zc],
      [wd],
      [Cd],
      [lp],
      [Zl],
      [Im],
      [Ds],
      [X],
      [Vf],
      [Yc],
      [ks],
      [Wy],
    ]);
  }
  _registerDefaultHostToolbar() {
    var _0x39c55d;
    ((_0x39c55d = this._config["defaults"]) == null
      ? undefined
      : _0x39c55d.hostToolbar) !== false &&
      this.disposeWithMe(
        this._injector["get"](_0x3781ab).registerComponent(
          _0x2e0fa4.GLOBAL,
          () => vu,
        ),
      );
  }
  _enableEmbedUnitLeasePolicy() {
    this._injector["get"](_0x2ac24f).enableExclusivePolicy();
  }
};
(Y(Gy, "pluginName", "UNIVER_EMBED_UI_PLUGIN"),
  Y(Gy, "packageName", fs),
  Y(Gy, "version", ps),
  Y(Gy, "type", _0x513c12.UNIVER_UNKNOWN),
  (Gy = $(
    [
      _0x7f7b78(_0x25a66b, _0xc071cc),
      Q(1, _0x1a6fa3(_0x20cff5)),
      Q(2, _0x405ebf),
      Q(3, _0x3e617f),
    ],
    Gy,
  )));
export {
  dl as EmbedActivationService,
  Ic as EmbedChildViewRegistryService,
  gu as EmbedFullscreenService,
  Rc as EmbedHostContainerRegistryService,
  Ss as EmbedHostMenuOverrideService,
  ud as EmbedHostRestoreService,
  cl as EmbedMountService,
  Gy as UniverEmbedUIPlugin,
  ql as registerEmbedProductMenuContribution,
};
