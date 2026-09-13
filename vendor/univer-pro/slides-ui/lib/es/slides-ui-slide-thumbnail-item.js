import { ArrangeTypeEnum, BooleanNumber, ColorKit, CommandType, CustomRangeType, DEFAULT_STYLES, DependentOn, Direction, Disposable, DisposableCollection, DocumentDataModel, DocumentFlavor, EDITOR_ACTIVATED, FOCUSING_COMMON_DRAWINGS, FOCUSING_SHAPE_TEXT_EDITOR, FOCUSING_SLIDE, HorizontalAlign, ICommandService, IConfigService, IContextService, IImageIoService, IPermissionService, IUndoRedoService, IUniverInstanceService, ImageSourceType, Inject, Injector, LifecycleService, LifecycleStages, LocaleService, Optional, Plugin, PresetListType, RedoCommand, Registry, RxDisposable, ThemeService, Tools, UndoCommand, UniverInstanceType, VerticalAlign, WrapStrategy, checkIfMove, createIdentifier, createInternalEditorID, createParagraphId, generateRandomId, isInternalEditorID, merge, toDisposable } from "@univerjs/core";
import * as var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614828 from "@univerjs-pro/slides";
import { AddSlideElementCommand, AddSlideElementMutation, AddSlidePageCommand, CancelSlideGroupMutation, ConvertSlideSmartArtToShapesCommand, CreateSlideByLayoutCommand, DEFAULT_LAYOUT_ORDER, DEFAULT_MASTER_PAGE, DEFAULT_MASTER_PAGE_ID, ISlideDrawingService, InsertDrawingObjectMutation, LAYOUT_PAGE_IDS, MoveSlidePageCommand, PageElementTypeEnum, PageTypeEnum, PlaceholderTypeEnum, RemoveSlideElementCommand, RemoveSlideElementMutation, RemoveSlidePageCommand, ReorderSlideElementsCommand, SLIDE_INSERT_DEFAULT_SIZE, SLIDE_PLACEHOLDER_ICON_COMPONENT_NAME_BY_KEY, SLIDE_TEXT_BOX_DEFAULT_STYLE, SLIDE_THEME_PRESETS, SetPresentationBackgroundGraphicsCommand, SetSlideDrawingApplyMutation, SetSlideGroupMutation, SetSlidePageSizeCommand, SetSlidePageSizeMutation, SetSlideSpeakerNotesCommand, SetSlideSpeakerNotesMutation, SetSlideTransitionCommand, SetSlideZoomRatioOperation, SlideBackgroundTypeEnum, SlideDrawingApplyType, SlidePageLayoutTypeEnum, SlidePageSizePresetEnum, SlidePresentationBackgroundGraphicFitEnum, SlidePresentationBackgroundGraphicsTargetEnum, SlideSceneTypeEnum, SlideTransitionDirectionEnum, SlideTransitionTypeEnum, UniverSlidesPlugin, UpdateSlideDrawingCommand, UpdateSlideElementMutation, UpdateSlidePageBackgroundCommand, UpdateSlidePageBackgroundMutation, UpdateSlideSmartArtCommand, applySlideElementPlainText, applySlideElementTextDocument, buildResolvedSlideDrawingMap, canEditSlideTargets, getEmbedSlidesFloatingCustomData, getEmbedSlidesPageCustomData, getPlaceholderImageContent, getPresentationBackgroundGraphics, getSlideElementDisplayName, getSlideElementEditPermissionObjectIds, getSlideElementPermissionObjectId, getSlidePagePermissionObjectId, getSlidePermissionValue, getSlideThemePreset, isPresentationBackgroundGraphic, normalizeSlideDocumentDataStream, plainTextToSlideDocumentData, resolveDefaultPlaceholderTextKey, resolvePlaceholderActionIcons, resolveSlideElementTextDocument, resolveSlideTextBoxDefaultSize, resolveSlideThemePreviewColors, resolveSlideTransition, resolveThemeDefaultShapeText, setPlaceholderImageContent, slideDocumentDataToPlainText } from "@univerjs-pro/slides";
import { AlignmentSnapSession, BaseObject, CURSOR_TYPE, DEFAULT_TRANSFORMER_CONFIG, DRAWING_OBJECT_LAYER_INDEX, DeviceType, DocumentSkeleton, DocumentViewModel, Documents, DrawingGroupObject, Group, IRenderManagerService, Image, MAIN_VIEW_PORT_KEY, PageLayoutType, RENDER_CLASS_TYPE, Rect, Scene, ScrollBar, Shape, Transform, UniverRenderEnginePlugin, UniverRenderingContext, VERTICAL_ROTATE_ANGLE, Vector2, Viewport, cancelRequestFrame, createCanvasElement, degToRad, getAlignmentRectXAnchors, getAlignmentRectYAnchors, getNextWheelZoomRatio, measureDocumentNoWrapTextWidth, pxToNum, requestNewFrame, resolveDrawingEffectMasks, resolveOuterShadowEffect } from "@univerjs/engine-render";
import { BuiltInUIPart, ComponentContainer, ComponentManager, ContextMenuGroup, CopyCommand, CutCommand, EmojiPicker, FloatingObjectToolbarPosition, FontFamilyDropdown, ICanvasPopupService, IClipboardInterfaceService, IContextMenuService, IDialogService, ILayoutService, IMenuManagerService, IMessageService, IRibbonService, IShortcutService, ISidebarService, IUIPartsService, IUIRuntimeScopeService, IUnitPresenceUIAdapterRegistry, IWorkbenchService, IconManager, KeyCode, MenuItemType, MenuManagerPosition, MetaKeys, RectPopup, RibbonPosition, RibbonStartGroup, RibbonViewGroup, Slider, SymbolPicker, ToggleFullscreenOperation, UndoRedoGroupService, ZoomInput, connectInjector, getEmbedChildUnitId, getMenuHiddenObservable, useComponentsOfPart, useDependency, useObservable } from "@univerjs/ui";
import { memo, useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState } from "react";
import { InsertSlideTableCommand, SetSlideTableMutation, SlideTableBorderDashEnum, SlideTableFillTypeEnum, SlideTableResourceService, SlideTableTextDirectionEnum, UpdateSlideTableCommand, buildDefaultSlideTableThemes, buildSlideTableControls, buildSlideTableTriggers, hitTestSlideTableControl, hitTestSlideTableTrigger, normalizeSlideTableSnapshot, resizeSlideTableGrid, resolveSlideTableBuildOptions, resolveSlideTableCellBoundaryBorder, resolveSlideTableCellRect, resolveSlideTableCellTextMargins, resolveSlideTableRenderModel, resolveSlideTableThemePalette } from "@univerjs-pro/slides-table";
import { BehaviorSubject, Observable, Subject, combineLatest, distinctUntilChanged, filter, fromEvent, map, merge as mergeLocal, of as of1, pairwise, startWith, switchMap, take, takeUntil } from "rxjs";
import { DocParagraphTypeDropdown, FormulaShapeAnimationController, OpenShapeTextHyperLinkOperation, SHAPE_CHANGE_PICKER_COMPONENT, SHAPE_FLOATING_TOOLBAR_TOP_OFFSET, SMART_ART_LAYOUT_GALLERY_CATALOG, ShapeEffectsRibbonControl, ShapeFloatingToolbar, ShapeFloatingToolbarService, ShapeFloatingToolbarToggleFactory, ShapeFormulaRibbonControl, ShapeGroupEnum, ShapePickerPanel, ShapeQuickStyleGallery, ShapeStyleRibbonControl, ShapeTextBoxEditor, ShapeTextEditorContainer, ShapeTextEffectsRibbonControl, ShapeTextFloatMenuRenderControllerBase, ShapeTextFloatToolbar, ShapeTextHyperLinkInfo, ShapeTextHyperLinkPopupService, ShapeTextRibbonControl, SmartArtCreateGraphicRibbonControl, SmartArtLayoutGallery, SmartArtLayoutRibbonControl, SmartArtResetRibbonControl, SmartArtRibbonControl, SmartArtStyleRibbonControl, SmartArtTextPane, ToggleShapeFloatingToolbarOperation, UniverShapeEditorUIPlugin, buildShapeTextDataUpdate, createShapeTextPlaceholderDocumentData, drawFormulaShapeAnimationLayers, getShapeTextOpticalVerticalOffset, getTextModel, getTextStyle, isShapeTextOpticalVerticalAlignEnabled, normalizeShapeTextModel, normalizeShapeTextRect, prepareShapeTextDocumentData, resolveShapeContextualRibbonHostMode, resolveShapeTextBoxResizePolicy, resolveShapeTextDocumentAlignment, resolveShapeTextDocumentPageHeight, resolveShapeTextDocumentRenderLayout, resolveShapeTextEditorBehaviorShapeData, resolveShapeTextEditorFlowAxis, resolveShapeTextEditorWrapStrategy, resolveShapeTextNoWrapLayout, shapeTypeOptions, shouldAllowShapeTextEditorHostSizeShrink, shouldAutoFitShapeTextEditorNoWrap, shouldClipShapeTextDocument, useFormulaShapeToolbar } from "@univerjs-pro/shape-editor-ui";
import { ConnectorCoordinateTransform, ImageFillModeEnum, ImageSourceTypeEnum, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeBevelPresetEnum, ShapeDefaultConfig, ShapeFillEnum, ShapeGradientTypeEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeMaterialPresetEnum, ShapeModel, ShapePresetShadowValEnum, ShapeRenderModeEnum, ShapeSketchTypeEnum, ShapeTextAutoFitType, ShapeTextWrapType, ShapeTypeEnum, SmartArtDirectionEnum, SmartArtInsertPositionEnum, SmartArtOperationTypeEnum, SmartArtPresentationShapeRoleEnum, computeConnectorRouteLayout, createDefaultInsertedShapeData, createSmartArtDataFromLayout, getBasicShapeRotateBound, getShape3DBounds, isConnectorShape, isCurvedConnectorShape, isShape3DProjectiveScene, isSmartArtShapeData, normalizeShapeTextData, parseSmartArtCategory, projectShape3DRect, resolveShape3DGlyphRenderPlan, resolveShapeBevelExtent, resolveShapeDefaultInsertSize, resolveShapeTextBodyBehavior, resolveSmartArtPresentationNodeIdAtTextOffset, resolveSmartArtPresentationShapeData, resolveSmartArtPresentationShapeIdForNode, resolveSmartArtPresentationTransform, routeConnectorLineShape } from "@univerjs-pro/engine-shape";
import { ShapeFormulaService, UniverShapeEditorPlugin, createShapeFormulaDocument, createShapeTextBoxShapeData, getShapeQuickStylePreset, getShapeQuickStylePresets } from "@univerjs-pro/shape-editor";
import { takeUntil as takeUntilLocal } from "rxjs/operators";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { AddImageIcon, AddNoteIcon, AlignBottomIcon, AlignTextBothIcon, AlignTopIcon, ArrowLeftIcon, ArrowRightIcon, BasesMultiIcon, BoardsMultiIcon, BoldIcon, BottomIcon, CatalogueIcon, ChartIcon, CloseIcon, ConnectionLineIcon, CopyIcon, CutIcon, DeleteIcon, DocsMultiIcon, ExpandIcon, FeatureSearchIcon, FlipHorizontalIcon, FlipVerticalIcon, FontColorDoubleIcon, FountainPenIcon, GroupIcon, HandIcon, HorizontallyIcon, ItalicIcon, LeftJustifyingIcon, LoadingMultiIcon, MindMapIcon, MoreDownIcon, MoreLeftIcon, MoveDownIcon, MoveUpIcon, ObjectLayersIcon, OneToOneIcon, PaintBucketDoubleIcon, PasteSpecialDoubleIcon, RecordIcon, RelationshipIcon, RightJustifyingIcon, RulerIcon, ShapeBackgroundColorDoubleIcon, ShapeFormatSettingIcon, ShapeStrokeColorDoubleIcon, SheetsMultiIcon, ShrinkIcon, SlidesMultiIcon, SlideshowPlayIcon, SlideshowThemeIcon, SmartArtIcon, SmileIcon, StickyNoteIcon, StrikethroughIcon, SymbolsIcon, TableIcon, TextIcon, TopmostIcon, TransitionsIcon, UnderlineIcon, UngroupIcon, VerticalCenterIcon } from "@univerjs/icons";
import { Accordion, Button, Checkbox, ColorPicker, Dropdown, DropdownMenu, GradientColorPicker, Input, InputNumber, MessageType, Radio, RadioGroup, Segmented, Select, Separator, Textarea, borderClassName, clsx, scrollbarClassName } from "@univerjs/design";
import { DocInterceptorService, DocSelectionManagerService, DocSkeletonManagerService, UniverDocsPlugin } from "@univerjs/docs";
import { DeleteLeftCommand, DeleteRightCommand, DocCanvasPopManagerService, DocEventManagerService, DocRenderController, DocSelectAllCommand, DocSelectionRenderService, EnterCommand, IEditorService, SetInlineFormatBoldCommand, SetInlineFormatFontFamilyCommand, SetInlineFormatFontSizeCommand, SetInlineFormatItalicCommand, SetInlineFormatStrikethroughCommand, SetInlineFormatTextColorCommand, SetInlineFormatUnderlineCommand, UniverDocsUIPlugin, convertBodyToHtml, convertClipboardHtmlToDocumentData, convertClipboardRtfToPlainText, removeClipboardHtmlImages, useEditor, useKeyboardEvent, useLeftAndRightArrow, useOnChange } from "@univerjs/docs-ui";
import { UnitAction } from "@univerjs/protocol";
import { getImageSize } from "@univerjs/drawing";
import { ImageCropperObject, ObjectListPanelBase, extractClipboardHtmlImageFiles, extractClipboardImageFiles, extractClipboardTextImageFile, getObjectListPanelLabels, getObjectListPanelTypeName, isClipboardTextImage, isImageOnlyClipboardHtml, normalizeClipboardImageFile, svgImageFileToDataUrl, writeImageSourceToClipboard } from "@univerjs/drawing-ui";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { convertPlainTextTableToHtml, parseHtmlTableClipboard } from "@univerjs-pro/docs-table";
import { Pf } from "./slides-ui-drawing-okey.js";
import { xc } from "./slides-ui-slide-logical-page-size.js";
import { ru } from "./slides-ui-slide-page-background-object.js";
import { Kg } from "./slides-ui-thumbnail-renderable-drawing.js";
import { Gg, Vh } from "./internal-core-endo.js";
import { em } from "./slides-ui-assemble-group-hierarchy.js";
function qg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611220, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611221, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611222) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611220 ? (Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611220) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611220 : [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611220]).some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464458 => "unitId" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464458 && "subUnitId" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464458 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464458.unitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611221 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464458.subUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611222 : qg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464458.parent, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611221, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611222) || qg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464458.children, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611221, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611222)) : false;
}
const Jg = "slide-thumb-viewport",
  Yg = "univer-embed-thumbnail-preview-change";
function Xg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611226, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611227, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611228, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611229, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611230) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611226 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611227 <= 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611228 <= 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611229 <= 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611230 <= 0) return [];
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D763 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611229 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611227,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D764 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611230 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611228;
  return Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611226).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464459 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464460 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464459,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464461 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614828.getEmbedSlidesFloatingCustomData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464460),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464462 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464460.transform;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464461 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464462) return;
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D296 = Qg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464462.width) ?? 0,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D297 = Qg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464462.height) ?? 0;
    if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D296 <= 0 || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D297 <= 0) return;
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB80 = {
      embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464461.embedId,
      hostAnchorId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464461.hostAnchorId,
      left: (Zg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464462.left) ?? 0) * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D763,
      top: (Zg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464462.top) ?? 0) * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D764,
      width: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D296 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D763,
      height: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D297 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D764
    };
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464461.childType !== undefined && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB80.childType = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464461.childType), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB80;
  }).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464467 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464467);
}
function Zg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611236) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611236 == "number" && Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611236) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611236 : undefined;
}
function Qg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611238) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611238 == "number" && Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611238) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611238 > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611238 : undefined;
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F12(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611240 = typeof window > "u" ? 1 : window.devicePixelRatio) {
  return Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611240) ? Math.max(1, Math.min(3, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611240)) : 1;
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F13(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611242) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611243;
  if (!(typeof window > "u")) return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611243 = window.__univerEmbedThumbnailPreviews) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611243.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611242);
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig193F2(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611246, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611247) {
  if (typeof window > "u") return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611248 = window,
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5914 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611248.__univerEmbedThumbnailPreviews ?? new Map();
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611248.__univerEmbedThumbnailPreviews = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5914, var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5914.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611246) !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611247 && (var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5914.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611246, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611247), window.dispatchEvent(new CustomEvent(Yg, {
    detail: {
      key: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611246,
      pageId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611246
    }
  })));
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigFC34(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611252) {
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611252) {
    case UniverInstanceType.UNIVER_SHEET:
      return "Sheets";
    case UniverInstanceType.UNIVER_DOC:
      return "Docs";
    case UniverInstanceType.UNIVER_BASE:
      return "Bases";
    case UniverInstanceType.UNIVER_SLIDE:
      return "Slides";
    default:
      return "Embed";
  }
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F14({
  childType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611254
}) {
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB250 = "univer-size-4";
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611254) {
    case UniverInstanceType.UNIVER_SHEET:
      return jsx(SheetsMultiIcon, {
        "aria-hidden": true,
        className: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB250
      });
    case UniverInstanceType.UNIVER_DOC:
      return jsx(DocsMultiIcon, {
        "aria-hidden": true,
        className: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB250
      });
    case UniverInstanceType.UNIVER_SLIDE:
      return jsx(SlidesMultiIcon, {
        "aria-hidden": true,
        className: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB250
      });
    case UniverInstanceType.UNIVER_BASE:
      return jsx(BasesMultiIcon, {
        "aria-hidden": true,
        className: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB250
      });
    case UniverInstanceType.UNIVER_BOARD:
      return jsx(BoardsMultiIcon, {
        "aria-hidden": true,
        className: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB250
      });
    default:
      return null;
  }
}
function fn_L2_core_endo_routine_async_O1_zalloc_nothrow_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611256) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611257;
  let {
      pageId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611258,
      index: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611259,
      isActive: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611260,
      slideModel: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611261,
      objectProvider: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611262,
      setActivePage: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611263,
      variant: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611274 = "editor",
      renderIdSuffix: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611264,
      ariaLabel: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611265,
      focusable: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611275 = true,
      dragState: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611266,
      onDragStart: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611267,
      onDragOver: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611268,
      onDrop: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611269,
      onDragEnd: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611270,
      shouldSuppressClick: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611271,
      onContextMenu: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611272,
      darkMode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611273
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611256,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A172 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611274 === "editor",
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A173 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611274 === "presentation",
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A174 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611274 === "preview",
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611276 = useDependency(IRenderManagerService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611277 = useDependency(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614828.ISlideDrawingService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611278 = useDependency(Injector),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611279 = useRef(null),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611280, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611281] = useState({
      width: 0,
      height: 0
    }),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611282, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611283] = useState(() => typeof IntersectionObserver > "u"),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611284, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611285] = useState(),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611286, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611287] = useState(true),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611288 = useRef(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611284);
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611288.current = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611284;
  let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611289, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611290] = useReducer(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464468 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464468 + 1, 0),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611291, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611292] = useState(() => fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F13(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611258)),
    [, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611293] = useReducer(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464469 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464469 + 1, 0),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611294 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611257 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611261.pageManager["getSlide"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611258)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611257.getData(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611295 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611294 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614828.getEmbedSlidesPageCustomData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611294) : undefined,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611296 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigFC34(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611295 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611295.childType);
  useEffect(() => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464470 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611261.getUnitId(),
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB136 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464470 + "-thumb-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611258 + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611264 ? "-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611264 : ""),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464471 = null,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464472 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46823 => {
        !qg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46823, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464470, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611258) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464471 !== null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464471 = requestAnimationFrame(() => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464471 = null, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611290();
        }));
      },
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A47 = [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611277.add$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464472), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611277.update$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464472), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611277.remove$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464472), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611277.order$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464472), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611277.refreshTransform$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46825 => {
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611260 || !qg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46825, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464470, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611258)) {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464472(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46825);
          return;
        }
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46826 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611276.getRenderUnitById(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB136);
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46826) {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464472(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46825);
          return;
        }
        let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A29 = false;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46825.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169 => {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171;
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169.unitId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464470 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169.subUnitId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611258 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169.transform) return;
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172 = Pf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464470, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611258, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169.drawingId),
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46826.scene).getObjectIncludeInGroup) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172)) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46826.scene["getObject"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46172);
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173.transformByState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169.transform), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173.makeDirty(true), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A29 = true);
        }), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A29 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46826.scene["makeDirty"](true), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46826.scene["render"]());
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611277.visible$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464472), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611277.group$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464472), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611277.ungroup$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464472)];
    return () => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464471 !== null && cancelAnimationFrame(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464471), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A47.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179.unsubscribe());
    };
  }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611260, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611258, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611264, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611276, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611277, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611261]);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611297 = xc((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611294 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611294.pageSize) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611261.getSnapshot().defaultPageSize),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611298 = Xg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611294 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611294.elements, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611297.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611297.height, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611280.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611280.height),
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB252 = JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611295 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611295.hostAnchorId ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611295.hostAnchorId] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611298.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464476 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464476.hostAnchorId));
  useLayoutEffect(() => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464477 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611279.current;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464477) return;
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D300 = 0,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464478 = () => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46829 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464477.clientWidth,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46830 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464477.clientHeight;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46829 <= 1 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46830 <= 1 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611281(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180.width === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46829 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180.height === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46830 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180 : {
          width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46829,
          height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46830
        });
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464479 = () => {
        cancelAnimationFrame(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D300), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D300 = requestAnimationFrame(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464478);
      };
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464479();
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464480 = typeof ResizeObserver > "u" ? null : new ResizeObserver(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464479);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464480 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464480.observe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464477), () => {
      cancelAnimationFrame(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D300), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464480 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464480.disconnect();
    };
  }, []), useEffect(() => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464485 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611279.current;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464485 || typeof IntersectionObserver > "u") {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611283(true);
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464486 = new IntersectionObserver(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46833 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46833.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181.isIntersecting) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611283(true), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464486.disconnect());
    }, {
      rootMargin: "300px\x200px"
    });
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464486.observe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464485), () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464486.disconnect();
  }, []), useEffect(() => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464489 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611279.current;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464489 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611282) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464490 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611280.width || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464489.clientWidth,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464491 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611280.height || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464489.clientHeight;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464490 <= 1 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464491 <= 1) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464492 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611261.getUnitId(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464493 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611261.getSnapshot(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464494 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611261.pageManager["getSlide"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611258);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464494) return;
    let {
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464495,
        height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464496
      } = xc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464494.getData().pageSize ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464493.defaultPageSize),
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB138 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464492 + "-thumb-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611258 + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611264 ? "-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611264 : ""),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464497 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611276.getRenderUnitById(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB138);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464497 ||= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611276.createRender(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB138), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464497.engine["mount"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464489), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464497.engine["resize"](), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464497.engine["getCanvas"]().setPixelRatio(fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F12());
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464498 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464497.engine["getCanvasElement"]();
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464498.tabIndex = -1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464498.setAttribute("aria-hidden", "true");
    let {
        scene: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464499
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464497,
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A96 = false,
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A97 = false,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464500 = null,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464501 = null,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464502 = null,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464503 = () => {
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A97 || (var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A97 = true, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611276.removeRender(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB138));
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464504 = () => {
        if (var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A96 || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A97) return;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464499.makeDirty(true), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464499.render();
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46835;
        try {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46835 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464497.engine["getCanvas"]().toDataURL("image/png", 1);
        } catch {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611288.current && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464503();
          return;
        }
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46835 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611285(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46835), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464503());
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464505 = () => {
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A96 || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A97 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464502 !== null && window.clearTimeout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464502), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464502 = window.setTimeout(() => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464502 = null, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464504();
        }, 160));
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506 = () => {
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A96 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464500 !== null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464500 = requestAnimationFrame(() => {
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464500 = null, !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A96) {
            if (var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A97) {
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611290();
              return;
            }
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464499.makeDirty(true), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464499.render(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611260 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464505();
          }
        }));
      };
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464499.getViewport(Jg) || new Viewport(Jg, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464499, {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    }).openClip();
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D302 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464490 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464495,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D303 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464491 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464496;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464499.removeObjects(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464499.getAllObjects()), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464499.disableObjectsEvent(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464499.transformByState({
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464495,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464496,
      scaleX: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D302,
      scaleY: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D303
    });
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464507 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611278.createInstance(ru, "slide-thumb-bg-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464492 + "-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611258, {
        left: 0,
        top: 0,
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464495,
        height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464496,
        background: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464494.resolveBackground(),
        evented: false,
        zIndex: 0,
        requestRender: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506
      }),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464508 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611277.getDrawingData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464492, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611258),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464509 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611277.getDrawingOrder(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464492, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611258);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464509.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46837 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46838 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464508[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46837];
      return Kg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46838);
    })) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46841 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614828.buildResolvedSlideDrawingMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611261, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464494);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464508 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46841.data, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464509 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46841.order;
    }
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464509 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464509.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842 => Kg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464508[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46842]));
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464510 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611262.convertToRenderObjects(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464508, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464509, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464492,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611258,
      pageOffsetLeft: 0,
      pageOffsetTop: 0,
      sceneType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614828.SlideSceneTypeEnum["THUMBNAIL"],
      showPlaceholder: false,
      requestRender: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506
    });
    Gg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464510), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464499.addObject(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464507, 0), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464499.addObjects(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464510, DRAWING_OBJECT_LAYER_INDEX);
    let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59 = new Map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464510.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46843 => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46843.oKey, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46843]));
    return em(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464508, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464509, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464499, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464492,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611258,
      pageOffsetLeft: 0,
      pageOffsetTop: 0,
      sceneType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614828.SlideSceneTypeEnum["THUMBNAIL"],
      showPlaceholder: false,
      objectProvider: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611262,
      renderObjectMap: var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59,
      requestRender: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506
    }), Gg(var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59.values()), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464499.makeDirty(true), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464499.render(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464501 = requestAnimationFrame(() => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464501 = null, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A96 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611287(false);
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611260 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464505(), () => {
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A96 = true, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464500 !== null && cancelAnimationFrame(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464500), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464501 !== null && cancelAnimationFrame(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464501), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464502 !== null && window.clearTimeout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464502), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464503();
    };
  }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611273, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611280.height, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611280.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611278, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611260, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611282, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611262, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611258, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611264, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611276, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611277, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611261, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611289]), useEffect(() => {
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB140 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611261.getUnitId() + "-thumb-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611258 + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611264 ? "-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611264 : "");
    return () => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611276.removeRender(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB140);
    };
  }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611258, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611264, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611276, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611261]), useEffect(() => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464533 = () => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611292(fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F13(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611258)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611293();
    };
    return window.addEventListener(Yg, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464533), () => window.removeEventListener(Yg, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464533);
  }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611258]), useEffect(() => {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611260 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611282 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611295 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611291) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464535 = Vh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611278);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464535) return;
    let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A100 = false,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464536 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611279.current,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D306 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611280.width || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464536 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464536.clientWidth) || 1,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D307 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611280.height || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464536 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464536.clientHeight) || 1;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464535.capturePreviewByHostAnchorId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611295.hostAnchorId, {
      hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611261.getUnitId(),
      embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611295.embedId,
      childUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611295.childUnitId,
      childType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611295.childType,
      width: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D306,
      height: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D307,
      dpr: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F12()
    }).then(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46844 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46844 && !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A100 && fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig193F2(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611258, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46844);
    }, () => {}), () => {
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A100 = true;
    };
  }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611280.height, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611280.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611295, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611291, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611278, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611260, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611282, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611258, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611261]), useEffect(() => {
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611260) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464539 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611261.getUnitId(),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB82 = JSON.parse(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB252);
    if (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB82.length === 0) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464540 = Vh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611278);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464540) return;
    let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A102 = false,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D310 = 0,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464541 = async () => {
        for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182 of var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB82) try {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611279.current,
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635 = await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464540.capturePreviewByHostAnchorId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611295 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611295.hostAnchorId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182 ? {
              hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464539,
              embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611295.embedId,
              childUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611295.childUnitId,
              childType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611295.childType,
              width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611280.width || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634.clientWidth) || 1,
              height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611280.height || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634.clientHeight) || 1,
              dpr: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F12()
            } : undefined);
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635 && !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A102 && fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig193F2(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611295 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611295.hostAnchorId ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611258 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635);
        } catch {}
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A102 || (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D310 = window.setTimeout(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464541().catch(() => {}), 800));
      };
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464541().catch(() => {}), () => {
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A102 = true, window.clearTimeout(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D310);
    };
  }, [var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB252, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611280.height, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611280.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611295, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611278, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611260, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611258, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611261]);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611299 = useCallback(() => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611271 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611271() || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611263(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611258);
    }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611258, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611263, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611271]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611300 = useCallback(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464545 => {
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A174 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464545.key !== "Enter" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464545.key !== "\x20" || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464545.preventDefault(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611263(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611258));
    }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611258, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A174, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611263]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611301 = useCallback(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464547 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611267 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464547.dataTransfer["effectAllowed"] = "move", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464547.dataTransfer["setData"]("text/plain", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611258), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611267(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611258));
    }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611267, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611258]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611302 = useCallback(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464549 => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611268) return;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464549.preventDefault(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464549.dataTransfer["dropEffect"] = "move";
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464550 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464549.currentTarget["getBoundingClientRect"](),
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB142 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464549.clientY < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464550.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464550.height / 2 ? "before" : "after";
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611268(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611258, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611259, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB142);
    }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611259, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611268, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611258]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611303 = useCallback(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464553 => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611269) return;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464553.preventDefault();
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464554 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464553.currentTarget["getBoundingClientRect"](),
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB144 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464553.clientY < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464554.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464554.height / 2 ? "before" : "after";
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611269(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611258, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611259, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB144);
    }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611259, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611269, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611258]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611304 = useCallback(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464557 => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611272) return;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464557.preventDefault(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464557.stopPropagation();
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D312 = Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464557.clientX, window.innerWidth - 180 - 8),
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D313 = Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464557.clientY, window.innerHeight - 8);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611272(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611258, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611259, Math.max(8, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D312), Math.max(8, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D313));
    }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611259, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611272, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611258]),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A175 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611266 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611266.draggedPageId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611258,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A176 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611266 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611266.overPageId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611258 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611266.dropPosition === "before",
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A177 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611266 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611266.overPageId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611258 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611266.dropPosition === "after";
  return jsxs("div", {
    "data-u-comp": "slide-thumbnail-item",
    "data-page-id": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611258,
    "data-presentation-thumbnail": var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A173 ? "true" : undefined,
    role: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A174 ? undefined : "button",
    tabIndex: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A174 ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611275 ? 0 : -1,
    "aria-label": var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A174 ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611265,
    "aria-current": !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A174 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611260 ? "page" : undefined,
    draggable: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A172,
    onClick: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A174 ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611299,
    onKeyDown: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A174 ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611300,
    onDragStart: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A172 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611301 : undefined,
    onDragOver: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A172 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611302 : undefined,
    onDrop: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A172 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611303 : undefined,
    onDragEnd: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A172 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611270 : undefined,
    onContextMenu: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A172 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611304 : undefined,
    className: clsx("univer-relative univer-w-full", var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A174 ? "univer-cursor-default" : "univer-cursor-pointer", !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A174 && "focus-visible:univer-outline-none focus-visible:univer-ring-2 focus-visible:univer-ring-primary-300 focus-visible:univer-ring-offset-2", var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A173 && "univer-rounded-lg\x20univer-opacity-90\x20univer-transition-[opacity,transform]\x20univer-duration-200\x20univer-ease-out\x20hover:univer-translate-y-[-2px]\x20hover:univer-scale-[1.02]\x20hover:univer-opacity-100\x20focus-visible:univer-ring-offset-gray-1000\x20motion-reduce:univer-transform-none\x20motion-reduce:univer-transition-opacity", var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A173 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611260 && "univer-opacity-100", var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A172 && "univer-mb-2.5", var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A175 && "univer-opacity-50"),
    children: [var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A176 && jsx("div", {
      className: "univer-absolute\x20-univer-top-1\x20univer-left-0\x20univer-right-0\x20univer-h-0.5\x20univer-rounded-sm\x20univer-bg-primary-600"
    }), jsxs("div", {
      className: clsx("univer-relative univer-box-border univer-aspect-video univer-w-full univer-overflow-hidden univer-rounded-lg univer-border-2 univer-border-solid univer-bg-gray-0 dark:!univer-bg-gray-950", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611260 ? "univer-border-primary-500\x20univer-shadow-sm\x20univer-ring-1\x20univer-ring-primary-200\x20dark:!univer-border-primary-500\x20dark:!univer-ring-primary-700" : var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A173 ? "univer-border-gray-200 univer-shadow-[0_6px_18px_rgba(0,0,0,0.28)] hover:univer-border-primary-300 dark:!univer-border-gray-700 dark:hover:!univer-border-primary-300" : "univer-border-gray-200 dark:!univer-border-gray-700"),
      children: [jsx("div", {
        ref: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611279,
        className: clsx("univer-pointer-events-none univer-absolute univer-inset-0 univer-z-0", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611284 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611260 && "univer-invisible")
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611284 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611260 && jsx("img", {
        alt: "",
        "data-u-comp": "slide-thumbnail-preview-image",
        draggable: false,
        src: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611284,
        className: "univer-pointer-events-none univer-absolute univer-inset-0 univer-z-0 univer-h-full univer-w-full"
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611295 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611291 && jsxs("div", {
        "data-embed-slide-thumbnail-fallback": "true",
        "data-page-id": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611258,
        className: "univer-pointer-events-none univer-absolute univer-inset-0 univer-z-[1] univer-flex univer-flex-col univer-items-start univer-justify-between univer-bg-gray-50 univer-p-3 dark:!univer-bg-gray-900",
        children: [jsx("span", {
          className: "dark:!univer-bg-primary-950 univer-rounded univer-bg-primary-50 univer-px-2 univer-py-1 univer-text-xs univer-font-semibold univer-leading-none univer-text-primary-600 dark:!univer-text-primary-400",
          children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611296
        }), jsx("span", {
          className: "univer-line-clamp-2 univer-max-w-full univer-pl-7 univer-text-left univer-text-xs univer-font-medium univer-leading-4 univer-text-gray-600 dark:!univer-text-gray-300",
          children: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611294 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611294.name) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611295.embedId
        })]
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611291 && jsx("img", {
        alt: "",
        src: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611291,
        "data-embed-slide-thumbnail-preview": "true",
        "data-page-id": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611258,
        className: "univer-pointer-events-none univer-absolute univer-inset-0 univer-z-[1] univer-h-full univer-w-full univer-object-cover"
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611298.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464559 => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464560 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F13(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464559.hostAnchorId);
        return jsx("div", {
          "data-embed-slide-thumbnail-floating-preview-frame": "true",
          "data-embed-host-anchor-id": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464559.hostAnchorId,
          className: "univer-pointer-events-none\x20univer-absolute\x20univer-z-[1]\x20univer-overflow-hidden\x20univer-rounded-sm\x20univer-border\x20univer-border-solid\x20univer-border-gray-200\x20univer-bg-gray-0\x20dark:!univer-border-gray-700\x20dark:!univer-bg-gray-950",
          style: {
            left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464559.left,
            top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464559.top,
            width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464559.width,
            height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464559.height
          },
          children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464560 ? jsx("img", {
            alt: "",
            src: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464560,
            "data-embed-slide-thumbnail-floating-preview": "true",
            "data-embed-host-anchor-id": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464559.hostAnchorId,
            className: "univer-size-full univer-object-fill"
          }) : jsx("span", {
            className: "dark:!univer-bg-primary-950 univer-absolute univer-left-1 univer-top-1 univer-rounded univer-bg-primary-50 univer-px-1 univer-py-0.5 univer-text-[10px] univer-font-semibold univer-leading-none univer-text-primary-600 dark:!univer-text-primary-400",
            children: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigFC34(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464559.childType)
          })
        }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464559.hostAnchorId);
      }), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A174 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611286 && jsx("div", {
        "aria-hidden": "true",
        "data-slide-thumbnail-loading": "true",
        className: "univer-bg-gray-0/80 univer-pointer-events-none univer-absolute univer-inset-0 univer-z-[3] univer-grid univer-place-items-center dark:!univer-bg-gray-950/80",
        children: jsx(LoadingMultiIcon, {
          className: "univer-size-5 univer-animate-spin univer-text-primary-600"
        })
      }), jsx("span", {
        className: clsx("univer-pointer-events-none\x20univer-absolute\x20univer-bottom-1.5\x20univer-left-1.5\x20univer-z-[2]\x20univer-box-border\x20univer-min-w-4\x20univer-select-none\x20univer-rounded\x20univer-px-1\x20univer-py-0.5\x20univer-text-center\x20univer-text-sm\x20univer-font-semibold\x20univer-leading-4\x20univer-shadow-sm\x20univer-backdrop-blur-sm", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611260 ? "univer-bg-primary-100 univer-text-primary-800" : "univer-bg-gray-100\x20univer-text-gray-700"),
        children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611259 + 1
      }), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611295 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611295.childType) != null && jsx("span", {
        "data-embed-slide-thumbnail-product-icon": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611295.childType,
        className: "dark:!univer-bg-gray-800/90\x20univer-bg-gray-0/80\x20univer-pointer-events-none\x20univer-absolute\x20univer-bottom-2\x20univer-right-2\x20univer-z-[2]\x20univer-grid\x20univer-size-6\x20univer-place-items-center\x20univer-rounded-full\x20univer-shadow-sm\x20univer-backdrop-blur-sm",
        children: jsx(fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F14, {
          childType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611295.childType
        })
      })]
    }), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A177 && jsx("div", {
      className: "univer-absolute\x20-univer-bottom-1\x20univer-left-0\x20univer-right-0\x20univer-h-0.5\x20univer-rounded-sm\x20univer-bg-primary-600"
    })]
  });
}
export { fn_L2_core_endo_routine_async_O1_zalloc_nothrow_sigD23F as SlideThumbnailItem };
